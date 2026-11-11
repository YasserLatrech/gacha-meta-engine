import type { IVoteRepository } from '../domain/repositories';
import {
  VoteScopeSchema,
  VoteTargetSchema,
  VoteModeSchema,
  CastVoteBodySchema,
  type VoteMode,
  type VotesSnapshot,
  type CastVoteResult,
} from '../domain/schemas';
import {
  BoundedSlidingWindowLimiter,
  extractClientIp,
  normalizeIp,
  hashClientIp,
  type RateLimitDecision,
} from './security.service';

export {
  VoteScopeSchema,
  VoteTargetSchema,
  VoteModeSchema,
  CastVoteBodySchema,
  extractClientIp,
  normalizeIp,
  hashClientIp,
  type VoteMode,
  type VotesSnapshot,
  type CastVoteResult,
};

// Sliding-window rate limiter: max 20 vote writes per 60s per IP hash, bounded to 5,000 tracked hashes
const voteWriteLimiter = new BoundedSlidingWindowLimiter(20, 60_000, 5_000);

// Pure domain in-memory ledger used for deterministic offline unit tests
interface TestVoteRecord {
  scope: string;
  voteLockKey: string;
  targetId: string;
  ipHash: string;
}
const unitTestLedger = new Map<string, TestVoteRecord>();

export function buildVoteLockKey(scope: string, targetId: string, mode: VoteMode): string {
  return mode === 'single-choice' ? scope : `${scope}:${targetId}`;
}

export function checkVoteRateLimit(
  ipHash: string,
  nowMs: number = Date.now()
): RateLimitDecision {
  return voteWriteLimiter.check(ipHash, nowMs);
}

export function castVoteInMemory(input: {
  scope: string;
  targetId: string;
  mode: VoteMode;
  ipHash: string;
}): CastVoteResult {
  const voteLockKey = buildVoteLockKey(input.scope, input.targetId, input.mode);
  const compositeKey = `${voteLockKey}|${input.ipHash}`;

  const snapshot = (): VotesSnapshot => {
    const counts: Record<string, number> = {};
    const myVotes: string[] = [];
    for (const entry of unitTestLedger.values()) {
      if (entry.scope !== input.scope) continue;
      counts[entry.targetId] = (counts[entry.targetId] ?? 0) + 1;
      if (entry.ipHash === input.ipHash) {
        myVotes.push(entry.targetId);
      }
    }
    return { counts, myVotes };
  };

  if (unitTestLedger.has(compositeKey)) {
    return { ok: false, alreadyVoted: true, ...snapshot() };
  }

  unitTestLedger.set(compositeKey, {
    scope: input.scope,
    voteLockKey,
    targetId: input.targetId,
    ipHash: input.ipHash,
  });

  return { ok: true, alreadyVoted: false, ...snapshot() };
}

export function resetMemoryVotesForTests(): void {
  unitTestLedger.clear();
  voteWriteLimiter.clear();
}

export interface VoteService {
  getVotesSnapshot: (scope: string, ipHash: string) => Promise<VotesSnapshot>;
  castVoteByIp: (input: {
    scope: string;
    targetId: string;
    mode: VoteMode;
    ipHash: string;
  }) => Promise<CastVoteResult>;
}

export function createVoteService(repository: IVoteRepository): VoteService {
  return {
    getVotesSnapshot: (scope: string, ipHash: string) => repository.getSnapshot(scope, ipHash),
    castVoteByIp: (input) => {
      const voteLockKey = buildVoteLockKey(input.scope, input.targetId, input.mode);
      return repository.castVote({
        scope: input.scope,
        voteLockKey,
        targetId: input.targetId,
        ipHash: input.ipHash,
      });
    },
  };
}
