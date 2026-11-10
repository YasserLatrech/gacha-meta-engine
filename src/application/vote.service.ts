import crypto from 'node:crypto';
import { z } from 'zod';
import { sqlClient } from '../infrastructure/db/client';

export const VoteScopeSchema = z
  .string()
  .trim()
  .min(2)
  .max(100)
  .regex(/^[a-z0-9:._-]+$/i, 'Invalid vote scope format');

export const VoteTargetSchema = z
  .string()
  .trim()
  .min(1)
  .max(200)
  .refine((val) => !/[\u0000-\u001f\u007f]/.test(val), 'Invalid control characters in targetId');

export const VoteModeSchema = z.enum(['per-item', 'single-choice']);
export type VoteMode = z.infer<typeof VoteModeSchema>;

export const CastVoteBodySchema = z.object({
  scope: VoteScopeSchema,
  targetId: VoteTargetSchema,
  mode: VoteModeSchema.default('per-item'),
});

export interface VotesSnapshot {
  counts: Record<string, number>;
  myVotes: string[];
}

export interface CastVoteResult extends VotesSnapshot {
  ok: boolean;
  alreadyVoted: boolean;
}

const VOTE_HASH_SECRET =
  process.env.VOTE_IP_HASH_SECRET || 'ascalon-gg-ip-vote-hmac-salt-v1';

// Sliding-window rate limiter (max 20 write attempts per 60s per IP hash)
const RATE_WINDOW_MS = 60_000;
const RATE_MAX_WRITES = 20;
const rateBuckets = new Map<string, number[]>();

// In-memory fallback store used during offline unit tests or transient DB outages
interface MemoryVoteEntry {
  scope: string;
  voteLockKey: string;
  targetId: string;
  ipHash: string;
}
const memoryVotes = new Map<string, MemoryVoteEntry>();

let tableInitPromise: Promise<void> | null = null;

async function ensureIpVotesTable(): Promise<void> {
  if (!tableInitPromise) {
    tableInitPromise = (async () => {
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
    })().catch((err) => {
      tableInitPromise = null;
      throw err;
    });
  }
  return tableInitPromise;
}

/**
 * Extracts and normalizes the client IP address from reverse-proxy headers.
 * Strips IPv4-mapped IPv6 prefix (::ffff:) so local & dual-stack IPs normalize identically.
 */
export function extractClientIp(headers: Headers): string {
  const candidates = [
    headers.get('cf-connecting-ip'),
    headers.get('x-vercel-forwarded-for'),
    headers.get('x-forwarded-for'),
    headers.get('x-real-ip'),
  ];

  for (const raw of candidates) {
    if (!raw) continue;
    const first = raw.split(',')[0]?.trim();
    if (first) {
      return normalizeIp(first);
    }
  }

  return '127.0.0.1';
}

export function normalizeIp(ip: string): string {
  const trimmed = ip.trim().toLowerCase();
  if (trimmed === '::1') return '127.0.0.1';
  if (trimmed.startsWith('::ffff:')) return trimmed.slice(7);
  return trimmed;
}

export function hashClientIp(ip: string): string {
  const normalized = normalizeIp(ip);
  return crypto
    .createHmac('sha256', VOTE_HASH_SECRET)
    .update(normalized)
    .digest('hex');
}

export function buildVoteLockKey(scope: string, targetId: string, mode: VoteMode): string {
  return mode === 'single-choice' ? scope : `${scope}:${targetId}`;
}

export function checkVoteRateLimit(ipHash: string, nowMs: number = Date.now()): {
  allowed: boolean;
  retryAfterSec: number;
} {
  const prev = rateBuckets.get(ipHash) ?? [];
  const fresh = prev.filter((ts) => nowMs - ts < RATE_WINDOW_MS);

  if (fresh.length >= RATE_MAX_WRITES) {
    const oldest = fresh[0] ?? nowMs;
    const retryAfterSec = Math.max(1, Math.ceil((RATE_WINDOW_MS - (nowMs - oldest)) / 1000));
    rateBuckets.set(ipHash, fresh);
    return { allowed: false, retryAfterSec };
  }

  fresh.push(nowMs);
  rateBuckets.set(ipHash, fresh);
  return { allowed: true, retryAfterSec: 0 };
}

function getMemorySnapshot(scope: string, ipHash: string): VotesSnapshot {
  const counts: Record<string, number> = {};
  const myVotes: string[] = [];
  for (const entry of memoryVotes.values()) {
    if (entry.scope !== scope) continue;
    counts[entry.targetId] = (counts[entry.targetId] ?? 0) + 1;
    if (entry.ipHash === ipHash) {
      myVotes.push(entry.targetId);
    }
  }
  return { counts, myVotes };
}

export function castVoteInMemory(input: {
  scope: string;
  targetId: string;
  mode: VoteMode;
  ipHash: string;
}): CastVoteResult {
  const voteLockKey = buildVoteLockKey(input.scope, input.targetId, input.mode);
  const compositeKey = `${voteLockKey}|${input.ipHash}`;

  if (memoryVotes.has(compositeKey)) {
    const snap = getMemorySnapshot(input.scope, input.ipHash);
    return { ok: false, alreadyVoted: true, ...snap };
  }

  memoryVotes.set(compositeKey, {
    scope: input.scope,
    voteLockKey,
    targetId: input.targetId,
    ipHash: input.ipHash,
  });

  const snap = getMemorySnapshot(input.scope, input.ipHash);
  return { ok: true, alreadyVoted: false, ...snap };
}

export function resetMemoryVotesForTests(): void {
  memoryVotes.clear();
  rateBuckets.clear();
}

export async function getVotesSnapshot(scope: string, ipHash: string): Promise<VotesSnapshot> {
  try {
    await ensureIpVotesTable();
    const [countRows, myRows] = await Promise.all([
      sqlClient`
        SELECT target_id, COUNT(*)::int AS cnt
        FROM ip_votes
        WHERE scope = ${scope}
        GROUP BY target_id
      `,
      sqlClient`
        SELECT target_id
        FROM ip_votes
        WHERE scope = ${scope} AND ip_hash = ${ipHash}
      `,
    ]);

    const counts: Record<string, number> = {};
    for (const row of countRows as Array<{ target_id: string; cnt: number }>) {
      counts[row.target_id] = Number(row.cnt) || 0;
    }

    const myVotes = (myRows as Array<{ target_id: string }>).map((r) => r.target_id);
    return { counts, myVotes };
  } catch {
    return getMemorySnapshot(scope, ipHash);
  }
}

export async function castVoteByIp(input: {
  scope: string;
  targetId: string;
  mode: VoteMode;
  ipHash: string;
}): Promise<CastVoteResult> {
  const voteLockKey = buildVoteLockKey(input.scope, input.targetId, input.mode);

  try {
    await ensureIpVotesTable();
    const inserted = await sqlClient`
      INSERT INTO ip_votes (scope, vote_lock_key, target_id, ip_hash)
      VALUES (${input.scope}, ${voteLockKey}, ${input.targetId}, ${input.ipHash})
      ON CONFLICT (vote_lock_key, ip_hash) DO NOTHING
      RETURNING target_id
    `;

    const didInsert = Array.isArray(inserted) && inserted.length > 0;
    const snap = await getVotesSnapshot(input.scope, input.ipHash);

    return {
      ok: didInsert,
      alreadyVoted: !didInsert,
      ...snap,
    };
  } catch {
    return castVoteInMemory(input);
  }
}
