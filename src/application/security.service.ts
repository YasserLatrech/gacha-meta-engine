import crypto from 'node:crypto';

export const SECURITY_NO_STORE_HEADERS: Readonly<Record<string, string>> = Object.freeze({
  'Cache-Control': 'no-store, no-cache, must-revalidate',
  'X-Content-Type-Options': 'nosniff',
});

// Ephemeral CSPRNG fallback ensures zero hardcoded public HMAC secrets in source control
const EPHEMERAL_PROCESS_VOTE_SECRET = crypto.randomBytes(32).toString('hex');

function resolveVoteHmacSecret(): string {
  const configured = process.env.VOTE_IP_HASH_SECRET?.trim();
  if (configured && configured.length >= 16) {
    return configured;
  }
  return EPHEMERAL_PROCESS_VOTE_SECRET;
}

/**
 * Extracts and normalizes the client IP address from trusted reverse-proxy headers.
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
    if (first && first.length <= 64) {
      return normalizeIp(first);
    }
  }

  return '127.0.0.1';
}

export function normalizeIp(ip: string): string {
  const trimmed = ip.trim().toLowerCase().slice(0, 64);
  if (trimmed === '::1') return '127.0.0.1';
  if (trimmed.startsWith('::ffff:')) return trimmed.slice(7);
  return trimmed;
}

export function hashClientIp(ip: string): string {
  const normalized = normalizeIp(ip);
  return crypto
    .createHmac('sha256', resolveVoteHmacSecret())
    .update(normalized)
    .digest('hex');
}

export type SecretVerificationResult =
  | { ok: true }
  | {
      ok: false;
      status: 401 | 503;
      code: 'REVALIDATE_NOT_CONFIGURED' | 'UNAUTHORIZED';
      message: string;
    };

const BLOCKLISTED_WEAK_SECRETS = new Set([
  'starsavior-revalidate-secret-2026',
  'changeme',
  'password',
  'secret',
  'revalidate-secret',
]);

/**
 * Fails closed when REVALIDATE_SECRET is unset, weak (<16 chars), or matches a known
 * previously-published placeholder secret, and compares SHA-256 digests with
 * crypto.timingSafeEqual to eliminate both secret-length and timing side-channels.
 */
export function timingSafeVerifyBearerSecret(
  authorizationHeader: string | null,
  configuredSecret: string | undefined
): SecretVerificationResult {
  const expected = configuredSecret?.trim() ?? '';
  if (expected.length < 16 || BLOCKLISTED_WEAK_SECRETS.has(expected.toLowerCase())) {
    return {
      ok: false,
      status: 503,
      code: 'REVALIDATE_NOT_CONFIGURED',
      message: 'Revalidation endpoint is disabled until a strong REVALIDATE_SECRET (>=16 chars) is configured.',
    };
  }

  if (!authorizationHeader) {
    return {
      ok: false,
      status: 401,
      code: 'UNAUTHORIZED',
      message: 'Missing Authorization Bearer token.',
    };
  }

  const match = /^Bearer\s+(\S+)$/i.exec(authorizationHeader.trim());
  if (!match?.[1]) {
    return {
      ok: false,
      status: 401,
      code: 'UNAUTHORIZED',
      message: 'Malformed Authorization header.',
    };
  }

  const providedDigest = crypto.createHash('sha256').update(match[1], 'utf8').digest();
  const expectedDigest = crypto.createHash('sha256').update(expected, 'utf8').digest();

  if (!crypto.timingSafeEqual(providedDigest, expectedDigest)) {
    return {
      ok: false,
      status: 401,
      code: 'UNAUTHORIZED',
      message: 'Unauthorized revalidation request.',
    };
  }

  return { ok: true };
}

export interface RateLimitDecision {
  allowed: boolean;
  retryAfterSec: number;
}

/**
 * Memory-bounded sliding-window rate limiter.
 * Protects Node.js heap against unbounded growth under high-cardinality IP rotation attacks.
 */
export class BoundedSlidingWindowLimiter {
  private readonly buckets = new Map<string, number[]>();

  constructor(
    private readonly maxRequests: number,
    private readonly windowMs: number,
    private readonly maxTrackedKeys: number = 5_000
  ) {}

  public check(key: string, nowMs: number = Date.now()): RateLimitDecision {
    const prev = this.buckets.get(key) ?? [];
    const fresh = prev.filter((ts) => nowMs - ts < this.windowMs);

    if (fresh.length >= this.maxRequests) {
      const oldest = fresh[0] ?? nowMs;
      const retryAfterSec = Math.max(1, Math.ceil((this.windowMs - (nowMs - oldest)) / 1000));
      this.buckets.set(key, fresh);
      return { allowed: false, retryAfterSec };
    }

    if (!this.buckets.has(key) && this.buckets.size >= this.maxTrackedKeys) {
      this.pruneExpiredOrOldest(nowMs);
    }

    fresh.push(nowMs);
    this.buckets.set(key, fresh);
    return { allowed: true, retryAfterSec: 0 };
  }

  public get size(): number {
    return this.buckets.size;
  }

  public clear(): void {
    this.buckets.clear();
  }

  private pruneExpiredOrOldest(nowMs: number): void {
    for (const [k, timestamps] of this.buckets.entries()) {
      const active = timestamps.filter((ts) => nowMs - ts < this.windowMs);
      if (active.length === 0) {
        this.buckets.delete(k);
      } else {
        this.buckets.set(k, active);
      }
    }

    while (this.buckets.size >= this.maxTrackedKeys) {
      const oldestKey = this.buckets.keys().next().value;
      if (typeof oldestKey !== 'string') break;
      this.buckets.delete(oldestKey);
    }
  }
}

const DANGEROUS_OBJECT_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

export function sanitizeJsonPayload(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => sanitizeJsonPayload(item));
  }
  if (value !== null && typeof value === 'object') {
    const clean: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      if (DANGEROUS_OBJECT_KEYS.has(key)) continue;
      clean[key] = sanitizeJsonPayload(val);
    }
    return clean;
  }
  return value;
}

export type BoundedBodyResult =
  | { ok: true; data: unknown }
  | {
      ok: false;
      status: 400 | 413 | 415;
      code: 'PAYLOAD_TOO_LARGE' | 'UNSUPPORTED_MEDIA_TYPE' | 'INVALID_JSON';
      message: string;
    };

/**
 * Streams and parses a JSON request body while strictly enforcing a hard byte cap,
 * aborting immediately before buffering oversized payloads into memory.
 */
export async function readBoundedJsonBody(
  request: Request,
  options: { maxBytes: number; allowEmpty?: boolean }
): Promise<BoundedBodyResult> {
  const contentLengthHeader = request.headers.get('content-length');
  if (contentLengthHeader !== null) {
    const declaredLength = Number(contentLengthHeader);
    if (Number.isFinite(declaredLength) && declaredLength > options.maxBytes) {
      return {
        ok: false,
        status: 413,
        code: 'PAYLOAD_TOO_LARGE',
        message: `Request body exceeds maximum allowed size of ${options.maxBytes} bytes.`,
      };
    }
  }

  const contentType = (request.headers.get('content-type') ?? '').toLowerCase();
  const hasJsonContentType = contentType.includes('application/json');

  if (!request.body) {
    if (options.allowEmpty) {
      return { ok: true, data: {} };
    }
    return {
      ok: false,
      status: 400,
      code: 'INVALID_JSON',
      message: 'Request body is required.',
    };
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) {
        totalBytes += value.byteLength;
        if (totalBytes > options.maxBytes) {
          await reader.cancel().catch(() => undefined);
          return {
            ok: false,
            status: 413,
            code: 'PAYLOAD_TOO_LARGE',
            message: `Request body exceeds maximum allowed size of ${options.maxBytes} bytes.`,
          };
        }
        chunks.push(value);
      }
    }
  } finally {
    reader.releaseLock();
  }

  if (totalBytes === 0) {
    if (options.allowEmpty) {
      return { ok: true, data: {} };
    }
    return {
      ok: false,
      status: 400,
      code: 'INVALID_JSON',
      message: 'Empty JSON request body.',
    };
  }

  if (!hasJsonContentType) {
    return {
      ok: false,
      status: 415,
      code: 'UNSUPPORTED_MEDIA_TYPE',
      message: 'Content-Type must be application/json.',
    };
  }

  const merged = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.byteLength;
  }

  const rawText = new TextDecoder('utf-8', { fatal: false }).decode(merged);

  try {
    const parsed: unknown = JSON.parse(rawText);
    return { ok: true, data: sanitizeJsonPayload(parsed) };
  } catch {
    return {
      ok: false,
      status: 400,
      code: 'INVALID_JSON',
      message: 'Invalid JSON request body.',
    };
  }
}
