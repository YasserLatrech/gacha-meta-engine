import { sqlClient } from '../db/client';
import type { IVoteRepository } from '../../domain/repositories';
import type { VotesSnapshot, CastVoteResult } from '../../domain/schemas';

interface MemoryVoteEntry {
  scope: string;
  voteLockKey: string;
  targetId: string;
  ipHash: string;
}

const MAX_MEMORY_VOTES = 25_000;

export class InMemoryVoteRepository implements IVoteRepository {
  private readonly votes = new Map<string, MemoryVoteEntry>();

  public async getSnapshot(scope: string, ipHash: string): Promise<VotesSnapshot> {
    return this.getSnapshotSync(scope, ipHash);
  }

  public async castVote(input: {
    scope: string;
    voteLockKey: string;
    targetId: string;
    ipHash: string;
  }): Promise<CastVoteResult> {
    return this.castVoteSync(input);
  }

  public getSnapshotSync(scope: string, ipHash: string): VotesSnapshot {
    const counts: Record<string, number> = {};
    const myVotes: string[] = [];
    for (const entry of this.votes.values()) {
      if (entry.scope !== scope) continue;
      counts[entry.targetId] = (counts[entry.targetId] ?? 0) + 1;
      if (entry.ipHash === ipHash) {
        myVotes.push(entry.targetId);
      }
    }
    return { counts, myVotes };
  }

  public castVoteSync(input: {
    scope: string;
    voteLockKey: string;
    targetId: string;
    ipHash: string;
  }): CastVoteResult {
    const compositeKey = `${input.voteLockKey}|${input.ipHash}`;

    if (this.votes.has(compositeKey)) {
      const snap = this.getSnapshotSync(input.scope, input.ipHash);
      return { ok: false, alreadyVoted: true, ...snap };
    }

    if (this.votes.size >= MAX_MEMORY_VOTES) {
      const oldestKey = this.votes.keys().next().value;
      if (typeof oldestKey === 'string') {
        this.votes.delete(oldestKey);
      }
    }

    this.votes.set(compositeKey, {
      scope: input.scope,
      voteLockKey: input.voteLockKey,
      targetId: input.targetId,
      ipHash: input.ipHash,
    });

    const snap = this.getSnapshotSync(input.scope, input.ipHash);
    return { ok: true, alreadyVoted: false, ...snap };
  }

  public resetMemoryFallback(): void {
    this.votes.clear();
  }
}

interface SnapshotRow {
  target_id: string;
  cnt: number;
  voted_by_me: boolean;
}

interface ScopeCountsCacheEntry {
  counts: Record<string, number>;
  expiresAt: number;
}

const VOTE_COUNTS_L1_TTL_MS = 10_000;

export class NeonVoteRepository implements IVoteRepository {
  private tableInitPromise: Promise<void> | null = null;
  private readonly fallback = new InMemoryVoteRepository();
  private readonly countsCache = new Map<string, ScopeCountsCacheEntry>();

  public async getSnapshot(scope: string, ipHash: string): Promise<VotesSnapshot> {
    try {
      await this.ensureTable();

      const now = Date.now();
      const cachedCounts = this.countsCache.get(scope);
      if (cachedCounts && cachedCounts.expiresAt > now) {
        const myRows = (await sqlClient`
          SELECT target_id
          FROM ip_votes
          WHERE scope = ${scope} AND ip_hash = ${ipHash}
        `) as Array<{ target_id: string }>;
        return {
          counts: cachedCounts.counts,
          myVotes: myRows.map((r) => r.target_id),
        };
      }

      // Single round-trip conditional aggregation query (zero N+1 / zero dual-query overhead)
      const rows = (await sqlClient`
        SELECT
          target_id,
          COUNT(*)::int AS cnt,
          BOOL_OR(ip_hash = ${ipHash}) AS voted_by_me
        FROM ip_votes
        WHERE scope = ${scope}
        GROUP BY target_id
      `) as SnapshotRow[];

      const counts: Record<string, number> = {};
      const myVotes: string[] = [];
      for (const row of rows) {
        counts[row.target_id] = Number(row.cnt) || 0;
        if (row.voted_by_me) {
          myVotes.push(row.target_id);
        }
      }

      this.countsCache.set(scope, {
        counts,
        expiresAt: Date.now() + VOTE_COUNTS_L1_TTL_MS,
      });

      return { counts, myVotes };
    } catch {
      return this.fallback.getSnapshotSync(scope, ipHash);
    }
  }

  public async castVote(input: {
    scope: string;
    voteLockKey: string;
    targetId: string;
    ipHash: string;
  }): Promise<CastVoteResult> {
    try {
      await this.ensureTable();
      const inserted = await sqlClient`
        INSERT INTO ip_votes (scope, vote_lock_key, target_id, ip_hash)
        VALUES (${input.scope}, ${input.voteLockKey}, ${input.targetId}, ${input.ipHash})
        ON CONFLICT (vote_lock_key, ip_hash) DO NOTHING
        RETURNING target_id
      `;

      const didInsert = Array.isArray(inserted) && inserted.length > 0;
      if (didInsert) {
        this.countsCache.delete(input.scope);
      }
      const snap = await this.getSnapshot(input.scope, input.ipHash);

      return {
        ok: didInsert,
        alreadyVoted: !didInsert,
        ...snap,
      };
    } catch {
      return this.fallback.castVoteSync(input);
    }
  }

  public resetMemoryFallback(): void {
    this.countsCache.clear();
    this.fallback.resetMemoryFallback();
  }

  private async ensureTable(): Promise<void> {
    if (!this.tableInitPromise) {
      this.tableInitPromise = (async () => {
        await sqlClient`
          CREATE TABLE IF NOT EXISTS ip_votes (
            id SERIAL PRIMARY KEY,
            scope TEXT NOT NULL,
            vote_lock_key TEXT NOT NULL,
            target_id TEXT NOT NULL,
            ip_hash TEXT NOT NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            CONSTRAINT ip_votes_lock_ip_unique UNIQUE (vote_lock_key, ip_hash)
          )
        `;
        await sqlClient`
          CREATE INDEX IF NOT EXISTS ip_votes_scope_idx ON ip_votes (scope)
        `;
        await sqlClient`
          CREATE INDEX IF NOT EXISTS ip_votes_scope_ip_idx ON ip_votes (scope, ip_hash)
        `;
      })().catch((err) => {
        this.tableInitPromise = null;
        throw err;
      });
    }
    return this.tableInitPromise;
  }
}
