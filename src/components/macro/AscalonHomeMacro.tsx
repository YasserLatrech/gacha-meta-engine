'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { APPMEDIA_HOME_PORTAL_DATA } from '@/infrastructure/db/appmedia-home-data';
import {
  AppMediaH2,
  AppMediaH3,
} from '@/components/micro/AppMediaHeadings';

export function AscalonHomeMacro() {
  const {
    updatedAt,
    strategyWikis,
    recommendedRanking,
    upcomingGames,
    appStoreFreeRanking,
    appStoreSalesRanking,
    featuredArticles,
  } = APPMEDIA_HOME_PORTAL_DATA;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEval, setSelectedEval] = useState<'ALL' | '5' | '4.5'>('ALL');
  const [showAllRanked, setShowAllRanked] = useState(false);

  const [selectedWindow, setSelectedWindow] = useState<string>('ALL');
  const [sortUpcomingBy, setSortUpcomingBy] = useState<'schedule' | 'votes'>('votes');
  const [showAllUpcoming, setShowAllUpcoming] = useState(false);

  const [selectedPlatform, setSelectedPlatform] = useState<'ALL' | 'Mobile App' | 'Console / PC'>('ALL');

  // Filter Top 25 Recommended Mobile Games
  const filteredRecommended = useMemo(() => {
    return recommendedRanking.filter((item) => {
      if (selectedEval !== 'ALL' && item.evaluation !== selectedEval) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q) || item.titleJa.toLowerCase().includes(q);
        const matchOutline = item.outline.toLowerCase().includes(q);
        const matchGenre = item.genre.toLowerCase().includes(q);
        if (!matchTitle && !matchOutline && !matchGenre) return false;
      }
      return true;
    });
  }, [recommendedRanking, selectedEval, searchQuery]);

  const displayedRecommended = showAllRanked ? filteredRecommended : filteredRecommended.slice(0, 10);

  // Filter & Sort Upcoming Games Release Calendar
  const upcomingWindows = [
    'ALL',
    'November 2026',
    'December 2026',
    'Within 2026',
    'January 2027',
    'February 2027',
    'Within 2027',
    'TBA',
  ];

  const filteredUpcoming = useMemo(() => {
    const list = upcomingGames.filter((g) => {
      if (selectedWindow !== 'ALL' && g.category !== selectedWindow) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = g.title.toLowerCase().includes(q) || g.titleJa.toLowerCase().includes(q);
        const matchDesc = g.description.toLowerCase().includes(q);
        const matchPub = g.publisher.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchPub) return false;
      }
      return true;
    });

    if (sortUpcomingBy === 'votes') {
      return [...list].sort((a, b) => b.votes - a.votes);
    }
    return list;
  }, [upcomingGames, selectedWindow, sortUpcomingBy, searchQuery]);

  const displayedUpcoming = showAllUpcoming ? filteredUpcoming : filteredUpcoming.slice(0, 16);

  // Filter Strategy Wikis
  const filteredWikis = useMemo(() => {
    return strategyWikis.filter((w) => {
      if (selectedPlatform !== 'ALL' && w.platform !== selectedPlatform) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        if (!w.title.toLowerCase().includes(q) && !w.titleJa.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [strategyWikis, selectedPlatform, searchQuery]);

  return (
    <div className="min-h-screen bg-[#090d16] text-[#e2e8f0]">
      {/* Sticky Top Global Header */}
      <header className="sticky top-0 z-40 border-b border-[#1e293b] bg-[#0b101b]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-4 py-2.5">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <img
                src="/brand/ascalon-logo.png"
                alt="Ascalon.gg"
                className="h-9 w-9 rounded-lg border border-[#3b82f6]/60 object-cover shadow-sm"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-black tracking-tight text-white group-hover:text-[#60a5fa] transition-colors">
                    ASCALON<span className="text-[#3b82f6]">.GG</span>
                  </span>
                  <span className="rounded bg-[#1e293b] border border-[#334155] px-1.5 py-0.5 text-[9px] font-extrabold text-[#93c5fd]">
                    APPMEDIA 1:1 EN
                  </span>
                </div>
                <div className="text-[10px] font-semibold text-[#94a3b8]">
                  Authentic Japanese Gacha Rankings, New Game Release Calendar & Strategy Wikis
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-5 text-[12px] font-extrabold text-[#cbd5e1]">
            <a href="#recommended-ranking" className="hover:text-[#60a5fa] transition-colors">
              Top 25 Mobile Games
            </a>
            <a href="#upcoming-calendar" className="hover:text-[#60a5fa] transition-colors">
              Release Calendar ({upcomingGames.length})
            </a>
            <a href="#appstore-rankings" className="hover:text-[#60a5fa] transition-colors">
              App Store Rankings
            </a>
            <a href="#strategy-wikis" className="hover:text-[#60a5fa] transition-colors">
              Strategy Wikis ({strategyWikis.length})
            </a>
            <a href="#featured-articles" className="hover:text-[#60a5fa] transition-colors">
              Featured Guides
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search games, studios, genres..."
              className="w-44 sm:w-56 rounded-lg border border-[#243049] bg-[#090d16] px-3 py-1.5 text-[11px] text-white placeholder-[#64748b] focus:border-[#3b82f6] focus:outline-none"
            />
            <Link
              href="/starsavior"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] px-3 py-1.5 text-[11px] font-black text-white shadow transition-colors"
            >
              <img
                src="https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_starsavior.webp"
                alt="Star Savior"
                className="h-4 w-4 rounded-sm object-cover"
              />
              <span>Star Savior Wiki →</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mx-auto max-w-[1280px] px-4 py-6 space-y-8">
        {/* Hero Portal Banner + Flagship Star Savior Spotlight */}
        <section className="rounded-xl border border-[#243049] bg-gradient-to-br from-[#111726] via-[#0f1626] to-[#0b101b] p-5 sm:p-6 space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/40 bg-[#2563eb]/15 px-3 py-0.5 text-[11px] font-extrabold text-[#93c5fd]">
                <span>100% Authentic AppMedia Portal Data</span>
                <span>·</span>
                <span>Updated {updatedAt}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Ascalon.gg — Japanese Mobile Game Rankings, Upcoming Gacha Release Calendar & Strategy Portal
              </h1>
              <p className="text-[12px] sm:text-[13px] text-[#cbd5e1] leading-relaxed">
                Direct 1:1 English translation of Japan&apos;s largest strategy portal (<strong className="text-white">AppMedia.jp</strong>). Browse the official Top 25 Recommended Mobile Games ranking, real-time Upcoming Gacha Release Calendar with Japanese player vote counts, App Store Free & Grossing charts, and dedicated game strategy wikis.
              </p>
            </div>

            {/* Flagship Live Strategy Wiki Card: Star Savior */}
            <Link
              href="/starsavior"
              className="group flex items-center gap-3.5 rounded-xl border-2 border-[#3b82f6]/70 bg-[#141e33] p-3.5 hover:border-[#60a5fa] hover:bg-[#192540] transition-all shrink-0 lg:w-[370px]"
            >
              <img
                src="https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_starsavior.webp"
                alt="Star Savior"
                className="h-16 w-16 rounded-xl border border-[#eab308]/80 object-cover shrink-0"
              />
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded bg-[#10b981]/20 border border-[#10b981]/50 px-2 py-0.5 text-[10px] font-black text-[#34d399]">
                    FLAGSHIP LIVE WIKI
                  </span>
                  <span className="text-[10px] font-bold text-[#93c5fd]">STUDIOBSIDE</span>
                </div>
                <div className="text-[15px] font-black text-white group-hover:text-[#60a5fa] truncate">
                  Star Savior Complete Strategy Wiki
                </div>
                <div className="text-[11px] text-[#cbd5e1]">
                  All 57 Saviors · 83 Arcana Cards · Tier Lists & Builds →
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* 1. AppMedia Top 25 Recommended Mobile Games Ranking (おすすめスマホゲーム最新ランキング) */}
        <section className="rounded-xl border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <AppMediaH2 id="recommended-ranking" badge="TOP 25">
              AppMedia Recommended Mobile Games Latest Ranking (Top 25)
            </AppMediaH2>
            <div className="flex items-center gap-1.5">
              {(['ALL', '5', '4.5'] as const).map((ev) => (
                <button
                  key={ev}
                  type="button"
                  onClick={() => setSelectedEval(ev)}
                  className={`rounded-lg px-3 py-1 text-[11px] font-extrabold transition-colors ${
                    selectedEval === ev
                      ? 'bg-[#2563eb] text-white'
                      : 'bg-[#161f33] text-[#cbd5e1] hover:text-white'
                  }`}
                >
                  {ev === 'ALL' ? `All Ranked (${recommendedRanking.length})` : `★ ${ev} Rated`}
                </button>
              ))}
            </div>
          </div>

          <p className="text-[12px] text-[#cbd5e1]">
            Official 1:1 translation of AppMedia&apos;s <strong className="text-white">Latest Recommended Mobile Games Ranking</strong> (<code className="text-[#93c5fd]">appmedia.jp/app_review</code>), featuring AppMedia&apos;s exact editorial star rating, release date, genre tags, and 3-point editorial review highlights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {displayedRecommended.map((game) => {
              const rankBadgeColor =
                game.rank === 1
                  ? 'bg-gradient-to-r from-[#f59e0b] to-[#eab308] text-slate-950'
                  : game.rank === 2
                  ? 'bg-gradient-to-r from-[#94a3b8] to-[#cbd5e1] text-slate-950'
                  : game.rank === 3
                  ? 'bg-gradient-to-r from-[#b45309] to-[#d97706] text-white'
                  : 'bg-[#1e293b] text-[#93c5fd] border border-[#334155]';

              return (
                <div
                  key={game.id}
                  className="flex flex-col justify-between rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-3 hover:border-[#3b82f6]/60 transition-colors"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3">
                      <img
                        src={game.iconUrl}
                        alt={game.title}
                        className="h-16 w-16 rounded-xl border border-[#334155] bg-[#090d16] object-cover shrink-0"
                        loading="lazy"
                      />
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-1.5">
                          <span className={`rounded px-2 py-0.5 text-[10px] font-black ${rankBadgeColor}`}>
                            Rank #{game.rank}
                          </span>
                          <div className="inline-flex items-center gap-1 rounded bg-[#161f33] border border-[#243049] px-2 py-0.5 text-[11px] font-black text-[#fbbf24]">
                            <span>★ {game.evaluation}</span>
                            <span className="text-[10px] text-[#94a3b8] font-bold">/ 5.0</span>
                          </div>
                        </div>
                        <div className="text-[14px] font-black text-white leading-snug">
                          {game.title}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#93c5fd]">
                          <span>{game.genre}</span>
                          {game.releaseDate && (
                            <>
                              <span>·</span>
                              <span className="text-[#94a3b8]">Release: {game.releaseDate}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="rounded bg-[#141c2e] border border-[#1e293b] px-3 py-1.5 text-[11px] font-bold text-[#f8fafc]">
                      {game.outline}
                    </div>

                    {/* AppMedia Editorial Recommendation Points */}
                    {game.points.length > 0 && (
                      <div className="rounded-lg border border-[#1e293b] bg-[#0b101b] p-2.5 space-y-1">
                        <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#fbbf24]">
                          AppMedia Editorial Highlights
                        </div>
                        <ul className="space-y-1 text-[11px] text-[#cbd5e1]">
                          {game.points.map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-[#3b82f6] font-bold">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredRecommended.length > 10 && (
            <div className="flex justify-center pt-1">
              <button
                type="button"
                onClick={() => setShowAllRanked(!showAllRanked)}
                className="rounded-lg border border-[#3b82f6]/60 bg-[#161f33] hover:bg-[#1e293b] px-5 py-2 text-[12px] font-extrabold text-[#93c5fd] transition-colors"
              >
                {showAllRanked
                  ? 'Show Top 10 Ranked Games'
                  : `Show All ${filteredRecommended.length} Ranked Mobile Games (Ranks #1 – #25)`}
              </button>
            </div>
          )}
        </section>

        {/* 2. AppMedia Upcoming Game Release Calendar (新作ゲームアプリの配信日一覧 — appmedia.jp/newgame) */}
        <section className="rounded-xl border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <AppMediaH2 id="upcoming-calendar" badge={`${upcomingGames.length} UPCOMING`}>
              Upcoming Gacha & Mobile Game Release Calendar (With Reader Votes)
            </AppMediaH2>

            <div className="flex items-center gap-1.5 text-[11px] font-extrabold">
              <span className="text-[#94a3b8]">Sort by:</span>
              <button
                type="button"
                onClick={() => setSortUpcomingBy('votes')}
                className={`rounded px-2.5 py-1 ${
                  sortUpcomingBy === 'votes'
                    ? 'bg-[#2563eb] text-white'
                    : 'bg-[#161f33] text-[#cbd5e1]'
                }`}
              >
                Reader Votes
              </button>
              <button
                type="button"
                onClick={() => setSortUpcomingBy('schedule')}
                className={`rounded px-2.5 py-1 ${
                  sortUpcomingBy === 'schedule'
                    ? 'bg-[#2563eb] text-white'
                    : 'bg-[#161f33] text-[#cbd5e1]'
                }`}
              >
                Release Schedule
              </button>
            </div>
          </div>

          <p className="text-[12px] text-[#cbd5e1]">
            Sourced 100% from AppMedia&apos;s <strong className="text-white">Upcoming Mobile Game Release Schedule</strong> (<code className="text-[#93c5fd]">appmedia.jp/newgame</code>), including official release dates, developers, descriptions, and real reader expectation vote counts.
          </p>

          {/* Release Window Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-lg border border-[#243049] bg-[#0f1626] p-2.5">
            {upcomingWindows.map((win) => (
              <button
                key={win}
                type="button"
                onClick={() => setSelectedWindow(win)}
                className={`rounded px-2.5 py-1 text-[11px] font-bold transition-colors ${
                  selectedWindow === win
                    ? 'bg-[#2563eb] text-white'
                    : 'bg-[#161f33] text-[#cbd5e1] hover:text-white'
                }`}
              >
                {win === 'ALL' ? `All Windows (${upcomingGames.length})` : win}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
            <table className="w-full border-collapse text-left text-[12px]">
              <thead>
                <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold text-[#94a3b8]">
                  <th className="w-40 px-3.5 py-2.5 border-r border-[#243049]">Release Window / Status</th>
                  <th className="px-3.5 py-2.5 border-r border-[#243049]">Upcoming Game & Description</th>
                  <th className="w-44 px-3.5 py-2.5 border-r border-[#243049]">Developer / Publisher</th>
                  <th className="w-28 px-3 py-2.5 text-center">Reader Votes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e293b]">
                {displayedUpcoming.map((g) => (
                  <tr key={g.id} className="hover:bg-[#141d30] transition-colors">
                    <td className="p-3 border-r border-[#1e293b] space-y-1">
                      <div className="font-extrabold text-[#93c5fd] text-[11px]">{g.releaseDate}</div>
                      <span
                        className={`inline-block rounded px-2 py-0.5 text-[10px] font-black ${
                          g.status === 'Released'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        }`}
                      >
                        {g.status}
                      </span>
                    </td>
                    <td className="p-3 border-r border-[#1e293b]">
                      <div className="flex items-center gap-3">
                        <img
                          src={g.iconUrl}
                          alt={g.title}
                          className="h-12 w-12 rounded-lg border border-[#334155] bg-[#090d16] object-cover shrink-0"
                          loading="lazy"
                        />
                        <div className="min-w-0">
                          <div className="font-extrabold text-white text-[13px]">{g.title}</div>
                          <div className="text-[11px] text-[#cbd5e1] mt-0.5">{g.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 border-r border-[#1e293b] font-semibold text-[#94a3b8] text-[11px]">
                      {g.publisher || 'TBA'}
                    </td>
                    <td className="p-3 text-center">
                      <div className="inline-flex flex-col items-center rounded-lg border border-[#243049] bg-[#141c2e] px-3 py-1">
                        <span className="text-[13px] font-black text-[#fbbf24]">{g.votes}</span>
                        <span className="text-[9px] font-bold uppercase text-[#94a3b8]">Votes</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUpcoming.length > 16 && (
            <div className="flex justify-center pt-1">
              <button
                type="button"
                onClick={() => setShowAllUpcoming(!showAllUpcoming)}
                className="rounded-lg border border-[#3b82f6]/60 bg-[#161f33] hover:bg-[#1e293b] px-5 py-2 text-[12px] font-extrabold text-[#93c5fd] transition-colors"
              >
                {showAllUpcoming
                  ? 'Show Top 16 Upcoming Games'
                  : `Show All ${filteredUpcoming.length} Upcoming Games in Calendar`}
              </button>
            </div>
          )}
        </section>

        {/* 3. App Store Free & Sales Rankings (無料アプリランキング & セールスランキング from root_home.html) */}
        <section className="rounded-xl border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-4">
          <AppMediaH2 id="appstore-rankings" badge="APP STORE JP">
            App Store Top Free & Top Grossing Rankings (AppMedia Live Feed)
          </AppMediaH2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Free App Ranking */}
            <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-2.5">
              <AppMediaH3>Top Free App Ranking</AppMediaH3>
              <div className="divide-y divide-[#1e293b]">
                {appStoreFreeRanking.map((app) => (
                  <a
                    key={app.rank}
                    href={app.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-2.5 hover:bg-[#141d30] px-2 rounded transition-colors"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2563eb] text-[11px] font-black text-white shrink-0">
                      {app.rank}
                    </span>
                    <img
                      src={app.iconUrl}
                      alt={app.title}
                      className="h-11 w-11 rounded-xl border border-[#334155] object-cover shrink-0"
                      loading="lazy"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="font-extrabold text-white text-[12px] truncate">{app.title}</div>
                      <div className="text-[10px] text-[#94a3b8]">App Store Top Free #{app.rank}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Sales App Ranking */}
            <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-2.5">
              <AppMediaH3>Top Grossing / Sales Ranking</AppMediaH3>
              <div className="divide-y divide-[#1e293b]">
                {appStoreSalesRanking.map((app) => (
                  <a
                    key={app.rank}
                    href={app.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-2.5 hover:bg-[#141d30] px-2 rounded transition-colors"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f59e0b] text-[11px] font-black text-slate-950 shrink-0">
                      {app.rank}
                    </span>
                    <img
                      src={app.iconUrl}
                      alt={app.title}
                      className="h-11 w-11 rounded-xl border border-[#334155] object-cover shrink-0"
                      loading="lazy"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="font-extrabold text-white text-[12px] truncate">{app.title}</div>
                      <div className="text-[10px] text-[#fbbf24]">App Store Top Sales #{app.rank}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. AppMedia Strategy Wiki Directory (48 Active Wikis) */}
        <section className="rounded-xl border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <AppMediaH2 id="strategy-wikis" badge={`${strategyWikis.length} WIKIS`}>
              AppMedia Active Strategy Wikis Directory (Mobile & Console)
            </AppMediaH2>
            <div className="flex items-center gap-1.5">
              {(['ALL', 'Mobile App', 'Console / PC'] as const).map((plat) => (
                <button
                  key={plat}
                  type="button"
                  onClick={() => setSelectedPlatform(plat)}
                  className={`rounded px-2.5 py-1 text-[11px] font-bold ${
                    selectedPlatform === plat
                      ? 'bg-[#2563eb] text-white'
                      : 'bg-[#161f33] text-[#cbd5e1]'
                  }`}
                >
                  {plat === 'ALL' ? `All Platforms (${strategyWikis.length})` : plat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-2.5">
            {filteredWikis.map((w, idx) => {
              const content = (
                <div
                  className={`flex flex-col items-center rounded-lg border p-2.5 text-center transition-all h-full ${
                    w.isInternal
                      ? 'border-[#3b82f6] bg-[#172542] ring-1 ring-[#60a5fa]'
                      : 'border-[#243049] bg-[#0f1626] hover:border-[#3b82f6]/60'
                  }`}
                >
                  <div className="relative">
                    <img
                      src={w.iconUrl}
                      alt={w.title}
                      className="h-14 w-14 rounded-xl border border-[#334155] object-cover bg-[#090d16]"
                      loading="lazy"
                    />
                    {w.isInternal && (
                      <span className="absolute -top-1.5 -right-2 rounded bg-[#10b981] px-1 py-0.2 text-[8px] font-black text-slate-950">
                        EN LIVE
                      </span>
                    )}
                  </div>
                  <span className="mt-1.5 text-[11px] font-bold text-white line-clamp-2 leading-tight">
                    {w.title}
                  </span>
                </div>
              );

              return w.isInternal ? (
                <Link key={`${w.href}-${idx}`} href={w.href}>
                  {content}
                </Link>
              ) : (
                <a
                  key={`${w.href}-${idx}`}
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              );
            })}
          </div>
        </section>

        {/* 5. Featured Strategy Articles (100% Uncropped English Localized Banners) */}
        <section className="rounded-xl border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-4">
          <AppMediaH2 id="featured-articles" badge="PICKUP GUIDES">
            Featured AppMedia Strategy Articles
          </AppMediaH2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {featuredArticles.map((art, idx) => (
              <a
                key={idx}
                href={art.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626] hover:border-[#3b82f6] transition-colors"
              >
                <div className="w-full overflow-hidden bg-[#090d16] border-b border-[#1e293b]">
                  <img
                    src={art.thumbUrl}
                    alt={art.title}
                    className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform"
                    loading="eager"
                  />
                </div>
                <div className="p-3">
                  <div className="text-[12px] font-bold text-white group-hover:text-[#60a5fa] leading-snug line-clamp-2">
                    {art.title}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1e293b] bg-[#070a12] py-6 text-center text-[11px] text-[#64748b]">
        <div className="mx-auto max-w-[1280px] px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            <strong className="text-white">Ascalon.gg</strong> · 100% Authentic AppMedia 1:1 English Portal & Strategy Database
          </div>
          <div className="flex items-center gap-4">
            <Link href="/starsavior" className="text-[#93c5fd] hover:underline">
              Star Savior Strategy Wiki
            </Link>
            <Link href="/starsavior/tier-list" className="text-[#93c5fd] hover:underline">
              Star Savior Tier List
            </Link>
            <Link href="/starsavior/characters" className="text-[#93c5fd] hover:underline">
              57 Characters Database
            </Link>
            <Link href="/starsavior/arcana" className="text-[#93c5fd] hover:underline">
              83 Arcana Encyclopedia
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
