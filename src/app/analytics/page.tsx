import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  analyticsService,
  getAllStarSaviorGuides,
  getStarSaviorWikiData,
  portalService,
  voteService,
} from '@/di/container';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Live Traffic, Search & Adsterra Control Center',
  robots: { index: false, follow: false },
};

export default async function FounderAnalyticsPage() {
  const [summary, dataset, roadmapVoteSnap] = await Promise.all([
    analyticsService.getDashboardSummary(14),
    getStarSaviorWikiData(),
    voteService.getVotesSnapshot('wiki-roadmap', 'founder-dashboard'),
  ]);
  const portalData = portalService.getHomePortalData();
  const totalSitemapUrls = 6 + dataset.characters.length + getAllStarSaviorGuides().length;
  const maxDailyPv = Math.max(1, ...summary.dailySeries.map((d) => d.pageviews));
  const isNeonStorage = summary.storageMode === 'neon';

  const topRoadmapQueue = portalData.strategyWikis
    .map((w) => {
      const key = w.id || w.title;
      const serverVotes = roadmapVoteSnap.counts[key] ?? 0;
      return {
        key,
        title: w.title,
        status: w.wikiStatus || (w.isInternal ? 'live' : 'planned'),
        launchWindow: w.launchWindow || 'Expansion Queue',
        serverVotes,
        totalPriorityScore: (w.baseVotes || 0) + serverVotes,
      };
    })
    .filter((w) => w.status !== 'live')
    .sort((a, b) => b.serverVotes - a.serverVotes || b.totalPriorityScore - a.totalPriorityScore)
    .slice(0, 8);

  const ga4Configured = Boolean(process.env.NEXT_PUBLIC_GA4_ID?.trim());
  const adsterraConfigured = Boolean(
    process.env.NEXT_PUBLIC_ADSTERRA_BANNER_728_KEY?.trim() ||
      process.env.NEXT_PUBLIC_ADSTERRA_BANNER_300_KEY?.trim() ||
      process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_KEY?.trim() ||
      process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_SRC?.trim()
  );

  return (
    <div className="min-h-screen bg-[#090d16] text-[#f8fafc] px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#28354e] bg-[#111827] px-5 py-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded bg-[#2563eb] px-2 py-0.5 font-mono text-[11px] font-black text-white">
                LIVE TELEMETRY
              </span>
              <span
                className={`rounded px-2 py-0.5 font-mono text-[11px] font-black ${
                  isNeonStorage
                    ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
                    : 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
                }`}
              >
                {isNeonStorage ? 'NEON DB' : 'MEMORY FALLBACK'}
              </span>
              <span className="font-mono text-[12px] text-[#c8d4e6]">UTC Day: {summary.todayUtc}</span>
            </div>
            <h1 className="mt-1 text-xl sm:text-2xl font-black text-white">
              Ascalon.fun — Search, Traffic &amp; Adsterra Command Center
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/?adpreview=1"
              className="rounded-lg border border-amber-500/50 bg-amber-500/15 hover:bg-amber-500/25 px-3.5 py-2 text-[12.5px] font-extrabold text-amber-300"
            >
              Preview Adsterra Slots (?adpreview=1) ↗
            </Link>
            <Link
              href="/"
              className="rounded-lg border border-[#334155] bg-[#1e293b] hover:bg-[#28354e] px-3.5 py-2 text-[12.5px] font-extrabold text-white"
            >
              ← Back to Ascalon.fun
            </Link>
          </div>
        </div>

        {/* 4 Primary KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="rounded-xl border border-[#28354e] bg-[#111827] p-4">
            <div className="text-[12px] font-bold text-[#c8d4e6]">Unique Visitors (Today)</div>
            <div className="mt-1 font-mono text-3xl font-black text-[#60a5fa]">
              {summary.todayVisitors.toLocaleString('en-US')}
            </div>
            <div className="mt-1 text-[11.5px] text-[#b8c7dc]">
              14d Total: {summary.totalUniqueVisitorsWindow.toLocaleString('en-US')} visitors
            </div>
          </div>

          <div className="rounded-xl border border-[#28354e] bg-[#111827] p-4">
            <div className="text-[12px] font-bold text-[#c8d4e6]">Pageviews (Today)</div>
            <div className="mt-1 font-mono text-3xl font-black text-emerald-400">
              {summary.todayPageviews.toLocaleString('en-US')}
            </div>
            <div className="mt-1 text-[11.5px] text-[#b8c7dc]">
              14d Total: {summary.totalPageviewsWindow.toLocaleString('en-US')} views
            </div>
          </div>

          <div className="rounded-xl border border-[#28354e] bg-[#111827] p-4">
            <div className="text-[12px] font-bold text-[#c8d4e6]">Pages / Visitor Multiplier</div>
            <div className="mt-1 font-mono text-3xl font-black text-amber-300">
              {summary.pagesPerVisitorToday}×
            </div>
            <div className="mt-1 text-[11.5px] text-[#b8c7dc]">
              Higher pages/session = higher Adsterra RPM
            </div>
          </div>

          <div className="rounded-xl border border-[#28354e] bg-[#111827] p-4">
            <div className="text-[12px] font-bold text-[#c8d4e6]">1,000 Daily Readers Gate</div>
            <div className="mt-1 font-mono text-3xl font-black text-white">
              {summary.adReadinessPercent}%
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#1e293b]">
              <div
                className="h-full bg-[#3b82f6]"
                style={{ width: `${Math.max(2, summary.adReadinessPercent)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Integration Status Strip (Search Console + IndexNow + GA4 + Adsterra) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <div className="rounded-xl border border-[#28354e] bg-[#111827] p-4 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[13.5px] font-extrabold text-white">Google Search Console &amp; IndexNow</span>
              <span className="rounded bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 font-mono text-[11px] font-black text-emerald-300">
                READY
              </span>
            </div>
            <p className="text-[12.5px] text-[#c8d4e6]">
              Verification file <code className="text-[#93c5fd]">/google47558ceaecd0fcbe.html</code>,{' '}
              <a href="/sitemap.xml" className="underline text-[#60a5fa]">/sitemap.xml</a> ({totalSitemapUrls} URLs), and{' '}
              <code className="text-[#93c5fd]">IndexNow</code> are live.
            </p>
          </div>

          <div className="rounded-xl border border-[#28354e] bg-[#111827] p-4 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[13.5px] font-extrabold text-white">Analytics Stack (Neon + GA4)</span>
              <span
                className={`rounded px-2 py-0.5 font-mono text-[11px] font-black ${
                  isNeonStorage
                    ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
                    : 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
                }`}
              >
                {isNeonStorage
                  ? ga4Configured
                    ? 'NEON DB + GA4'
                    : 'NEON DB'
                  : 'MEMORY FALLBACK'}
              </span>
            </div>
            <p className="text-[12.5px] text-[#c8d4e6]">
              Zero-cookie Neon PostgreSQL counter runs natively (bypassing adblockers).{' '}
              {ga4Configured
                ? 'GA4 Measurement ID connected.'
                : 'Optional: set NEXT_PUBLIC_GA4_ID in /etc/default/ascalon to also feed Google Analytics.'}
            </p>
          </div>

          <div className="rounded-xl border border-[#28354e] bg-[#111827] p-4 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[13.5px] font-extrabold text-white">Adsterra Monetization Engine</span>
              <span
                className={`rounded px-2 py-0.5 font-mono text-[11px] font-black ${
                  adsterraConfigured
                    ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
                    : 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
                }`}
              >
                {adsterraConfigured ? 'LIVE ADS' : 'AWAITING KEYS'}
              </span>
            </div>
            <p className="text-[12.5px] text-[#c8d4e6]">
              Zero-CLS 728×90, 320×50, 300×250, Native 4:1, and Social Bar slots wired across Home &amp; Wiki.
            </p>
          </div>
        </div>

        {/* 14-Day Daily Bar Series */}
        <div className="rounded-xl border border-[#28354e] bg-[#111827] p-5">
          <h2 className="text-[15px] font-extrabold text-white mb-4">
            Last 14 Days — Daily Pageviews &amp; Unique Readers
          </h2>
          <div className="grid grid-cols-7 sm:grid-cols-14 gap-2 items-end h-40 pt-4">
            {summary.dailySeries.map((pt) => {
              const heightPct = Math.max(6, Math.round((pt.pageviews / maxDailyPv) * 100));
              return (
                <div key={pt.dayUtc} className="flex flex-col items-center gap-1.5 h-full justify-end">
                  <span className="font-mono text-[10.5px] font-bold text-[#93c5fd]">
                    {pt.pageviews}
                  </span>
                  <div
                    title={`${pt.dayUtc}: ${pt.pageviews} views / ${pt.uniqueVisitors} visitors`}
                    className="w-full rounded-t bg-[#2563eb] hover:bg-[#60a5fa] transition-colors"
                    style={{ height: `${heightPct}%` }}
                  />
                  <span className="font-mono text-[10px] text-[#b8c7dc]">
                    {pt.dayUtc.slice(5)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Pages & Top Referrers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-xl border border-[#28354e] bg-[#111827] overflow-hidden">
            <div className="border-b border-[#243049] bg-[#162033] px-4 py-3 text-[14px] font-extrabold text-white">
              Top Visited Pages (14-Day Window)
            </div>
            <div className="divide-y divide-[#1e293b]">
              {summary.topRoutes.length === 0 ? (
                <div className="p-4 text-[13px] text-[#c8d4e6]">
                  First visitor beacons will appear here automatically as readers browse Ascalon.fun.
                </div>
              ) : (
                summary.topRoutes.map((r, i) => (
                  <div key={r.path} className="flex items-center justify-between px-4 py-2.5 text-[13px]">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="font-mono text-[11.5px] font-bold text-[#93c5fd]">#{i + 1}</span>
                      <Link href={r.path} className="truncate font-semibold text-white hover:text-[#60a5fa]">
                        {r.path}
                      </Link>
                    </div>
                    <span className="font-mono font-extrabold text-emerald-400">
                      {r.pageviews.toLocaleString('en-US')} views
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="rounded-xl border border-[#28354e] bg-[#111827] overflow-hidden">
            <div className="border-b border-[#243049] bg-[#162033] px-4 py-3 text-[14px] font-extrabold text-white">
              Top Traffic Sources
            </div>
            <div className="divide-y divide-[#1e293b]">
              {summary.topReferrers.length === 0 ? (
                <div className="p-4 text-[13px] text-[#c8d4e6]">No external referrers logged yet.</div>
              ) : (
                summary.topReferrers.map((ref) => (
                  <div key={ref.referrerHost} className="flex items-center justify-between px-4 py-2.5 text-[13px]">
                    <span className="font-semibold text-[#e2e8f0] truncate">{ref.referrerHost}</span>
                    <span className="font-mono font-extrabold text-[#93c5fd]">
                      {ref.visits.toLocaleString('en-US')}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Reader-Voted Next Wiki Priority (wiki-roadmap) */}
        <div className="rounded-xl border border-[#28354e] bg-[#111827] overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#243049] bg-[#162033] px-4 py-3">
            <div className="text-[14px] font-extrabold text-white">
              Reader-Voted Next Wiki Priority (<code className="text-[#93c5fd]">wiki-roadmap</code>)
            </div>
            <span className="text-[12px] font-bold text-[#c8d4e6]">
              1 Live (Star Savior) · #2 Up Next: Silver Palace (Dec 14, 2026)
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:gap-px bg-[#1e293b]">
            {topRoadmapQueue.map((item, idx) => (
              <div key={item.key} className="bg-[#111827] p-3.5 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`rounded px-1.5 py-0.5 font-mono text-[10.5px] font-black ${
                      item.status === 'next'
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-[#1e293b] text-[#93c5fd]'
                    }`}
                  >
                    {item.status === 'next' ? 'NEXT #2' : `#${idx + 1} DEMAND`}
                  </span>
                  <span className="font-mono text-[11.5px] font-extrabold text-emerald-400">
                    +{item.serverVotes} IP votes
                  </span>
                </div>
                <div className="text-[13.5px] font-extrabold text-white truncate">{item.title}</div>
                <div className="text-[11.5px] text-[#b8c7dc] truncate">
                  {item.launchWindow} · Total demand: {item.totalPriorityScore.toLocaleString('en-US')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
