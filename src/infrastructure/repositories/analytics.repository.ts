import { sqlClient } from '../db/client';
import type { IAnalyticsRepository } from '../../domain/repositories';
import type {
  AnalyticsDailyPoint,
  AnalyticsReferrerRank,
  AnalyticsRouteRank,
  AnalyticsSummary,
} from '../../domain/schemas';

const AD_READINESS_DAILY_TARGET = 1_000;
const MAX_MEMORY_DAYS = 90;

interface MemoryDayBucket {
  pageviews: number;
  visitors: Set<string>;
  routes: Map<string, number>;
  referrers: Map<string, number>;
}

function buildUtcDateRange(days: number): string[] {
  const result: string[] = [];
  const now = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - i));
    result.push(d.toISOString().slice(0, 10));
  }
  return result;
}

export class InMemoryAnalyticsRepository implements IAnalyticsRepository {
  private readonly buckets = new Map<string, MemoryDayBucket>();

  public async recordPageview(input: {
    dayUtc: string;
    path: string;
    visitorHash: string;
    referrerHost: string;
  }): Promise<{ ok: boolean; countedUnique: boolean }> {
    let bucket = this.buckets.get(input.dayUtc);
    if (!bucket) {
      if (this.buckets.size >= MAX_MEMORY_DAYS) {
        const oldest = this.buckets.keys().next().value;
        if (typeof oldest === 'string') this.buckets.delete(oldest);
      }
      bucket = {
        pageviews: 0,
        visitors: new Set<string>(),
        routes: new Map<string, number>(),
        referrers: new Map<string, number>(),
      };
      this.buckets.set(input.dayUtc, bucket);
    }

    bucket.pageviews += 1;
    const isNewVisitor = !bucket.visitors.has(input.visitorHash);
    if (isNewVisitor && bucket.visitors.size < 50_000) {
      bucket.visitors.add(input.visitorHash);
    }
    bucket.routes.set(input.path, (bucket.routes.get(input.path) ?? 0) + 1);
    if (isNewVisitor) {
      bucket.referrers.set(
        input.referrerHost,
        (bucket.referrers.get(input.referrerHost) ?? 0) + 1
      );
    }

    return { ok: true, countedUnique: isNewVisitor };
  }

  public async getSummary(days: number): Promise<AnalyticsSummary> {
    const dateRange = buildUtcDateRange(days);
    const todayUtc = dateRange[dateRange.length - 1] ?? new Date().toISOString().slice(0, 10);
    const routeTotals = new Map<string, number>();
    const referrerTotals = new Map<string, number>();

    let totalPageviewsWindow = 0;
    let totalUniqueVisitorsWindow = 0;

    const dailySeries: AnalyticsDailyPoint[] = dateRange.map((day) => {
      const b = this.buckets.get(day);
      const pv = b?.pageviews ?? 0;
      const uv = b?.visitors.size ?? 0;
      totalPageviewsWindow += pv;
      totalUniqueVisitorsWindow += uv;

      if (b) {
        for (const [rPath, count] of b.routes.entries()) {
          routeTotals.set(rPath, (routeTotals.get(rPath) ?? 0) + count);
        }
        for (const [ref, count] of b.referrers.entries()) {
          referrerTotals.set(ref, (referrerTotals.get(ref) ?? 0) + count);
        }
      }

      return { dayUtc: day, pageviews: pv, uniqueVisitors: uv };
    });

    const todayBucket = this.buckets.get(todayUtc);
    const todayPageviews = todayBucket?.pageviews ?? 0;
    const todayVisitors = todayBucket?.visitors.size ?? 0;
    const pagesPerVisitorToday =
      todayVisitors > 0 ? Number((todayPageviews / todayVisitors).toFixed(2)) : 0;

    const topRoutes: AnalyticsRouteRank[] = Array.from(routeTotals.entries())
      .map(([path, pageviews]) => ({ path, pageviews }))
      .sort((a, b) => b.pageviews - a.pageviews)
      .slice(0, 15);

    const topReferrers: AnalyticsReferrerRank[] = Array.from(referrerTotals.entries())
      .map(([referrerHost, visits]) => ({ referrerHost, visits }))
      .sort((a, b) => b.visits - a.visits)
      .slice(0, 10);

    const adReadinessPercent = Math.min(
      100,
      Number(((todayVisitors / AD_READINESS_DAILY_TARGET) * 100).toFixed(1))
    );

    return {
      storageMode: 'memory',
      todayUtc,
      todayVisitors,
      todayPageviews,
      pagesPerVisitorToday,
      totalPageviewsWindow,
      totalUniqueVisitorsWindow,
      adReadinessDailyTarget: AD_READINESS_DAILY_TARGET,
      adReadinessPercent,
      dailySeries,
      topRoutes,
      topReferrers,
    };
  }

  public resetMemoryFallback(): void {
    this.buckets.clear();
  }
}

interface DailyRow {
  day_utc: string;
  pageviews: number;
  unique_visitors: number;
}

interface RouteRow {
  route_path: string;
  pageviews: number;
}

interface ReferrerRow {
  referrer_host: string;
  visits: number;
}

export class NeonAnalyticsRepository implements IAnalyticsRepository {
  private tableInitPromise: Promise<void> | null = null;
  private readonly fallback = new InMemoryAnalyticsRepository();

  public async recordPageview(input: {
    dayUtc: string;
    path: string;
    visitorHash: string;
    referrerHost: string;
  }): Promise<{ ok: boolean; countedUnique: boolean }> {
    try {
      await this.ensureTables();

      const insertedVisitor = (await sqlClient`
        INSERT INTO analytics_daily_visitors (day_utc, visitor_hash, referrer_host)
        VALUES (${input.dayUtc}, ${input.visitorHash}, ${input.referrerHost})
        ON CONFLICT (day_utc, visitor_hash) DO NOTHING
        RETURNING day_utc
      `) as Array<{ day_utc: string }>;

      const countedUnique = insertedVisitor.length > 0;
      const uvDelta = countedUnique ? 1 : 0;

      await Promise.all([
        sqlClient`
          INSERT INTO analytics_daily_totals (day_utc, pageviews, unique_visitors)
          VALUES (${input.dayUtc}, 1, ${uvDelta})
          ON CONFLICT (day_utc) DO UPDATE SET
            pageviews = analytics_daily_totals.pageviews + 1,
            unique_visitors = analytics_daily_totals.unique_visitors + ${uvDelta}
        `,
        sqlClient`
          INSERT INTO analytics_daily_routes (day_utc, route_path, pageviews)
          VALUES (${input.dayUtc}, ${input.path}, 1)
          ON CONFLICT (day_utc, route_path) DO UPDATE SET
            pageviews = analytics_daily_routes.pageviews + 1
        `,
      ]);

      return { ok: true, countedUnique };
    } catch {
      return this.fallback.recordPageview(input);
    }
  }

  public async getSummary(days: number): Promise<AnalyticsSummary> {
    try {
      await this.ensureTables();
      const dateRange = buildUtcDateRange(days);
      const startDay = dateRange[0] ?? new Date().toISOString().slice(0, 10);
      const todayUtc = dateRange[dateRange.length - 1] ?? startDay;

      const [dailyRowsRaw, routeRowsRaw, refRowsRaw] = await Promise.all([
        sqlClient`
          SELECT day_utc, pageviews::int AS pageviews, unique_visitors::int AS unique_visitors
          FROM analytics_daily_totals
          WHERE day_utc >= ${startDay}
          ORDER BY day_utc ASC
        `,
        sqlClient`
          SELECT route_path, SUM(pageviews)::int AS pageviews
          FROM analytics_daily_routes
          WHERE day_utc >= ${startDay}
          GROUP BY route_path
          ORDER BY pageviews DESC
          LIMIT 15
        `,
        sqlClient`
          SELECT referrer_host, COUNT(*)::int AS visits
          FROM analytics_daily_visitors
          WHERE day_utc >= ${startDay}
          GROUP BY referrer_host
          ORDER BY visits DESC
          LIMIT 10
        `,
      ]);

      const dailyMap = new Map<string, { pageviews: number; uniqueVisitors: number }>();
      for (const row of dailyRowsRaw as DailyRow[]) {
        dailyMap.set(row.day_utc, {
          pageviews: Number(row.pageviews) || 0,
          uniqueVisitors: Number(row.unique_visitors) || 0,
        });
      }

      let totalPageviewsWindow = 0;
      let totalUniqueVisitorsWindow = 0;

      const dailySeries: AnalyticsDailyPoint[] = dateRange.map((day) => {
        const hit = dailyMap.get(day);
        const pv = hit?.pageviews ?? 0;
        const uv = hit?.uniqueVisitors ?? 0;
        totalPageviewsWindow += pv;
        totalUniqueVisitorsWindow += uv;
        return { dayUtc: day, pageviews: pv, uniqueVisitors: uv };
      });

      const todayHit = dailyMap.get(todayUtc);
      const todayPageviews = todayHit?.pageviews ?? 0;
      const todayVisitors = todayHit?.uniqueVisitors ?? 0;
      const pagesPerVisitorToday =
        todayVisitors > 0 ? Number((todayPageviews / todayVisitors).toFixed(2)) : 0;

      const topRoutes: AnalyticsRouteRank[] = (routeRowsRaw as RouteRow[]).map((r) => ({
        path: r.route_path,
        pageviews: Number(r.pageviews) || 0,
      }));

      const topReferrers: AnalyticsReferrerRank[] = (refRowsRaw as ReferrerRow[]).map((r) => ({
        referrerHost: r.referrer_host,
        visits: Number(r.visits) || 0,
      }));

      const adReadinessPercent = Math.min(
        100,
        Number(((todayVisitors / AD_READINESS_DAILY_TARGET) * 100).toFixed(1))
      );

      return {
        storageMode: 'neon',
        todayUtc,
        todayVisitors,
        todayPageviews,
        pagesPerVisitorToday,
        totalPageviewsWindow,
        totalUniqueVisitorsWindow,
        adReadinessDailyTarget: AD_READINESS_DAILY_TARGET,
        adReadinessPercent,
        dailySeries,
        topRoutes,
        topReferrers,
      };
    } catch {
      return this.fallback.getSummary(days);
    }
  }

  public resetMemoryFallback(): void {
    this.fallback.resetMemoryFallback();
  }

  private ensureTables(): Promise<void> {
    if (!this.tableInitPromise) {
      this.tableInitPromise = (async () => {
        await sqlClient`
          CREATE TABLE IF NOT EXISTS analytics_daily_totals (
            day_utc TEXT PRIMARY KEY,
            pageviews INTEGER NOT NULL DEFAULT 0,
            unique_visitors INTEGER NOT NULL DEFAULT 0
          )
        `;
        await sqlClient`
          CREATE TABLE IF NOT EXISTS analytics_daily_visitors (
            day_utc TEXT NOT NULL,
            visitor_hash TEXT NOT NULL,
            referrer_host TEXT NOT NULL DEFAULT 'direct',
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            PRIMARY KEY (day_utc, visitor_hash)
          )
        `;
        await sqlClient`
          CREATE TABLE IF NOT EXISTS analytics_daily_routes (
            day_utc TEXT NOT NULL,
            route_path TEXT NOT NULL,
            pageviews INTEGER NOT NULL DEFAULT 0,
            PRIMARY KEY (day_utc, route_path)
          )
        `;
      })().catch((err: unknown) => {
        this.tableInitPromise = null;
        throw err;
      });
    }
    return this.tableInitPromise;
  }
}
