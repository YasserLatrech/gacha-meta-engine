import type { IAnalyticsRepository } from '../domain/repositories';
import {
  AnalyticsTrackBodySchema,
  type AnalyticsSummary,
  type AnalyticsTrackBody,
} from '../domain/schemas';
import {
  BoundedSlidingWindowLimiter,
  extractClientIp,
  hashClientIp,
  type RateLimitDecision,
} from './security.service';

export { AnalyticsTrackBodySchema, extractClientIp, hashClientIp, type AnalyticsTrackBody };

// Allow up to 90 pageview beacons per 60s per IP hash (smooth wiki browsing without abuse)
const analyticsWriteLimiter = new BoundedSlidingWindowLimiter(90, 60_000, 10_000);

const BOT_UA_PATTERN =
  /bot|crawler|spider|slurp|bingpreview|headlesschrome|lighthouse|pagespeed|curl\/|wget\/|python-requests|go-http-client|uptimerobot/i;

export function isAutomatedCrawler(userAgent: string | null): boolean {
  if (!userAgent) return false;
  return BOT_UA_PATTERN.test(userAgent);
}

export function checkAnalyticsRateLimit(
  ipHash: string,
  nowMs: number = Date.now()
): RateLimitDecision {
  return analyticsWriteLimiter.check(ipHash, nowMs);
}

export function formatUtcDayKey(date: Date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

export function sanitizeAnalyticsPath(rawPath: string): string {
  const withoutQuery = rawPath.split('?')[0]?.split('#')[0]?.trim() || '/';
  if (withoutQuery === '/') return '/';
  const normalized = withoutQuery.replace(/\/+$/, '').slice(0, 180);
  return normalized.startsWith('/') ? normalized : `/${normalized}`;
}

export function sanitizeReferrerHost(rawHost?: string): string {
  if (!rawHost) return 'direct';
  const cleaned = rawHost
    .trim()
    .toLowerCase()
    .replace(/^www\./, '')
    .slice(0, 100);
  if (!cleaned || cleaned === 'ascalon.fun' || cleaned === 'localhost' || cleaned === '127.0.0.1') {
    return 'direct';
  }
  return /^[a-z0-9.-]+$/.test(cleaned) ? cleaned : 'direct';
}

export function createAnalyticsService(repo: IAnalyticsRepository) {
  return {
    async trackPageview(input: {
      path: string;
      referrerHost?: string;
      visitorHash: string;
      now?: Date;
    }): Promise<{ ok: boolean; countedUnique: boolean }> {
      const dayUtc = formatUtcDayKey(input.now ?? new Date());
      const cleanPath = sanitizeAnalyticsPath(input.path);
      const cleanRef = sanitizeReferrerHost(input.referrerHost);
      return repo.recordPageview({
        dayUtc,
        path: cleanPath,
        visitorHash: input.visitorHash,
        referrerHost: cleanRef,
      });
    },

    async getDashboardSummary(days = 14): Promise<AnalyticsSummary> {
      const boundedDays = Math.min(Math.max(Math.trunc(days) || 14, 1), 60);
      return repo.getSummary(boundedDays);
    },
  };
}
