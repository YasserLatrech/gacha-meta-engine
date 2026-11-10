'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { APPMEDIA_HOME_PORTAL_DATA } from '@/infrastructure/db/appmedia-home-data';
import {
  AppMediaH2,
  AppMediaH3,
} from '@/components/micro/AppMediaHeadings';

interface AppMediaRecommendedGame {
  readonly id: string;
  readonly rank: number;
  readonly title: string;
  readonly titleJa: string;
  readonly iconUrl: string;
  readonly evaluation: string;
  readonly genre: string;
  readonly releaseDate: string;
  readonly outline: string;
  readonly points: readonly string[];
  readonly iosUrl?: string;
  readonly androidUrl?: string;
}

interface AppMediaFeaturedArticle {
  readonly title: string;
  readonly titleJa: string;
  readonly url: string;
  readonly thumbUrl: string;
}

const ARTICLE_SUMMARIES: Record<string, { category: string; summary: string; keyPoints: string[]; targetRoute: string }> = {
  '/banners/home/en_home_01.webp': {
    category: 'Fate/Grand Order · Campaign Guide',
    summary:
      'Complete breakdown of the Global 100 Million Downloads Breakthrough Campaign, including limited-time Master Missions, login bonuses, Saint Quartz rewards, and the fastest AP-efficient node farming routes to clear every milestone before the deadline.',
    keyPoints: [
      'Complete all 10 Limited-Time 100M DL Master Missions to earn Saint Quartz, Rare Prisms, and Fou cards.',
      'Half-AP Main Quest progression and 2x Great/Super Success rates during Servant & Craft Essence enhancement.',
      'Recommended low-AP Free Quests in Fuyuki and Orleans to finish trait-specific mission requirements in under 15 minutes.',
    ],
    targetRoute: '/starsavior',
  },
  '/banners/home/en_home_02.webp': {
    category: 'Fate/Grand Order · SSR Ticket Priority',
    summary:
      'Tiered priority guide for the Free ★5 SSR Servant Exchange Ticket. Evaluates all eligible permanent and story-locked SSR Servants by farming utility, NP looping stability, and high-difficulty boss support value.',
    keyPoints: [
      'Top Meta Picks: Zhuge Liang (Lord El-Melloi II), Tamamo-no-Mae, and Vlad III (Berserker) for account-wide support and single-target scaling.',
      'Story-Locked Priority: Cu Chulainn (Alter), Medb, and Sitonai offer the highest value for Masters who rarely roll Story Summon.',
      'Fulfill the Ascension + Bond Level 3 permanent condition immediately using Ember stockpiles to permanently keep your exchanged SSR.',
    ],
    targetRoute: '/starsavior/tier-list',
  },
  '/banners/home/en_home_03.webp': {
    category: 'Fate/Grand Order · Gacha Banner Evaluation',
    summary:
      'Should you spend Saint Quartz on the Global 100M Downloads Commemorative Pickup Summon? Detailed banner value analysis comparing featured limited Servants against upcoming seasonal banners.',
    keyPoints: [
      'Prioritize Meta Supports first before rolling for additional AoE or Single-Target DPS copies.',
      'Check NP level breakpoints: NP1 suffices for utility supports, while primary loopers strongly benefit from NP2+.',
      'Save at least 900 Saint Quartz if targeting a guaranteed pity ceiling on upcoming seasonal banners.',
    ],
    targetRoute: '/starsavior/reroll',
  },
  '/banners/home/en_home_04.webp': {
    category: 'Fate/Grand Order · Overall Tier List',
    summary:
      'Complete SSR & SR Servant Tier List evaluated across 90++ event farming nodes, multi-core looping setups, and Grail Front / Challenge Quest boss encounters.',
    keyPoints: [
      '50%+ NP Charge Supports remain at the pinnacle of the meta due to 6-slot Event Craft Essence farming requirements.',
      'Multi-core DPS Servants with party-wide attack/NP damage buffs outperform selfish single-core loopers in 90++ irregular nodes.',
      'Single-target Berserkers and Avengers dominate boss break-bar phases.',
    ],
    targetRoute: '/starsavior/tier-list',
  },
  '/banners/home/en_home_05.webp': {
    category: 'Fate/Grand Order · Event Walkthrough',
    summary:
      'Event schedule, participation requirements, and bonus Servant checklist for GUDAGUDA Punipuni Wars: The Worst Bomb Girl in History.',
    keyPoints: [
      'Participation Condition: Clear the prologue chapter "Beginning of After-Time" to unlock the event map.',
      'Level up GUDAGUDA series bonus Servants ahead of launch for +20% to +100% event damage and bond point bonuses.',
      'Prioritize Event Damage Craft Essences from the shop first to clear Raid and 90++ farming stages efficiently.',
    ],
    targetRoute: '/starsavior',
  },
  '/banners/home/en_home_06.webp': {
    category: 'Sparklink Stars · Reroll Tier List',
    summary:
      'Complete Reroll Tier List for Sparklink Stars, ranking every starting SSR card by score multiplier, skill activation frequency, and deck-building versatility.',
    keyPoints: [
      'Target at least 2 SSR cards from the tutorial + launch reward pulls before binding your account.',
      'Score Boost + Combo Support SSR cards hold the longest shelf life across all music and training attributes.',
      'Avoid stopping on pure stamina-recovery SSRs, as high-difficulty scoring requires raw appeal multipliers.',
    ],
    targetRoute: '/starsavior/reroll',
  },
  '/banners/home/en_home_07.webp': {
    category: 'Sparklink Stars · Fast Reroll Guide',
    summary:
      'Step-by-step fast reroll procedure for Sparklink Stars using the in-game tutorial skip and account data deletion menu to complete each cycle in under 3 minutes.',
    keyPoints: [
      'Cycle Time: ~2–3 minutes per reroll from the second run onward using Tutorial Skip.',
      'Claim all Pre-Registration Campaign gems from the Present Box before rolling the Pickup Banner.',
      'Do not delete and reinstall the app—use Title Screen -> Menu -> Delete User Data to bypass redownloading assets.',
    ],
    targetRoute: '/starsavior/reroll',
  },
  '/banners/home/en_home_08.webp': {
    category: 'Sparklink Stars · Strongest Character Tier List',
    summary:
      'Comprehensive Strongest Card & Character Tier List for Sparklink Stars, evaluating center leader skills, attribute synergy, and live score output.',
    keyPoints: [
      'SS-Tier cards provide unconditional 120%+ attribute appeal boosts as center leaders.',
      'Pair matching attribute SSRs with SR sub-members that trigger skill activation rate buffs.',
      'Unlock card story nodes early to gain flat parameter bonuses across all three vocal/dance/visual stats.',
    ],
    targetRoute: '/starsavior/tier-list',
  },
  '/banners/home/en_home_09.webp': {
    category: 'Sparklink Stars · Account Linking Guide',
    summary:
      'How to link your Sparklink Stars account to coly ID and transfer save data safely across iOS, Android, and secondary devices.',
    keyPoints: [
      'Link your account via Menu -> Data Transfer -> Link with coly ID immediately after finishing your reroll.',
      'Paid currency remains platform-specific when transferring between iOS and Android devices.',
      'Keep a backup screenshot of your Player ID on the title screen in case of device loss.',
    ],
    targetRoute: '/starsavior',
  },
  '/banners/home/en_home_10.webp': {
    category: 'Sparklink Stars · Gacha Animations & SSR Tells',
    summary:
      'All gacha summon animations, stage lighting color changes, and guaranteed SSR visual tells in Sparklink Stars.',
    keyPoints: [
      'Rainbow spotlight beam and gold-to-iridescent ticket upgrade guarantee at least one SSR card in the pull.',
      'Special character voice cut-ins during the summon sequence confirm a featured rate-up SSR.',
      'Fake-out upgrades can occur on the final 10th slot even if the initial stage lights appear blue or gold.',
    ],
    targetRoute: '/starsavior/reroll',
  },
  '/banners/home/en_home_11.webp': {
    category: 'BLEACH Mirrors High · Reroll Tier List',
    summary:
      'Reroll Tier List and best starting SSR characters for BLEACH Mirrors High, ranked by AoE wave clear speed, boss break efficiency, and team passive buffs.',
    keyPoints: [
      'SS-Tier targets: Sosuke Aizen and Ichigo Kurosaki (Bankai) for unmatched AoE burst and boss pressure.',
      'Aim for 1 SS-Tier Main DPS + 1 S-Tier Support or Sub-DPS within your opening 30 pulls.',
      'Check attribute coverage so your starting trio is not blocked by single-attribute story bosses.',
    ],
    targetRoute: '/starsavior/reroll',
  },
  '/banners/home/en_home_12.webp': {
    category: 'BLEACH Mirrors High · Fast Reroll Method',
    summary:
      'Fastest reroll method for BLEACH Mirrors High, comparing the Unlimited Redraw Gacha against limited Pickup Banner rerolling.',
    keyPoints: [
      'Use the Account Reset option inside Settings to skip tutorial combat on repeat attempts (~3 minutes per run).',
      'Roll the Limited Pickup Banner with your mailbox gems first, then use the Redraw Gacha to fill the missing role.',
      'Save your transfer code immediately once you secure a double-SSR opening roll.',
    ],
    targetRoute: '/starsavior/reroll',
  },
  '/banners/home/en_home_13.webp': {
    category: 'BLEACH Mirrors High · Strongest Tier List',
    summary:
      'Endgame Strongest Character Tier List for BLEACH Mirrors High across Story Hard Mode, Boss Raids, and Arena PvP.',
    keyPoints: [
      'Characters with defense-shredding debuffs and gauge acceleration scale best into high-difficulty Raid bosses.',
      'Full-screen AoE ultimate skills dominate Arena PvP turn-1 initiative.',
      'Invest limit-break materials into your primary carry to Level 80 before spreading resources across sub-units.',
    ],
    targetRoute: '/starsavior/tier-list',
  },
  '/banners/home/en_home_14.webp': {
    category: 'BLEACH Mirrors High · Redraw Gacha Guide',
    summary:
      'Best characters to lock in from the tutorial Redraw Gacha in BLEACH Mirrors High and when to finalize your pull.',
    keyPoints: [
      'The tutorial Redraw Gacha allows infinite retries for 1 guaranteed SSR character from the initial pool.',
      'Roll your regular Pickup Gacha tickets first so you do not pick a duplicate from the Redraw Gacha.',
      'Byakuya Kuchiki and Toshiro Hitsugaya are top Redraw selections for balanced wave clear and crowd control.',
    ],
    targetRoute: '/starsavior/reroll',
  },
  '/banners/home/en_home_15.webp': {
    category: 'BLEACH Mirrors High · Friend Invite Code Board',
    summary:
      'How the Friend Invite Campaign works in BLEACH Mirrors High, step-by-step code entry instructions, and milestone gem rewards.',
    keyPoints: [
      'Enter an invite code before reaching Player Rank 15 to claim immediate bonus summon currency.',
      'Earn additional milestone rewards as invited friends clear Main Story Chapter 1 through Chapter 3.',
      'Up to 5 invited player milestones count toward the maximum campaign reward cap.',
    ],
    targetRoute: '/starsavior',
  },
  '/banners/home/en_home_16.webp': {
    category: 'Onimusha VR: Shadow Team · Omamori Equipment Guide',
    summary:
      'Complete Omamori (Amulet) equipment system guide for Onimusha VR: Shadow Team, covering slot unlocking, rarity scaling, and best-in-slot combat builds.',
    keyPoints: [
      'Equipping matching Omamori sets activates passive Issen critical counter damage and soul absorption multipliers.',
      'Prioritize Attack Speed and Critical Window Expansion Omamori for boss time-attack stages.',
      'Dismantle duplicate lower-rarity amulets to enhance your primary SSR Omamori to max rank.',
    ],
    targetRoute: '/starsavior',
  },
};

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

  // Interactive Reader Votes state for Upcoming Games Calendar
  const [votedMap, setVotedMap] = useState<Record<string, number>>({});
  const [activeArticle, setActiveArticle] = useState<AppMediaFeaturedArticle | null>(null);
  const [activeGameReview, setActiveGameReview] = useState<AppMediaRecommendedGame | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ascalon_upcoming_votes_v1');
      if (saved) {
        setVotedMap(JSON.parse(saved));
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const handleVoteUpcoming = (gameId: string) => {
    setVotedMap((prev) => {
      const next = { ...prev, [gameId]: (prev[gameId] || 0) + 1 };
      try {
        localStorage.setItem('ascalon_upcoming_votes_v1', JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
      return next;
    });
  };

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
      return [...list].sort((a, b) => (b.votes + (votedMap[b.id] || 0)) - (a.votes + (votedMap[a.id] || 0)));
    }
    return list;
  }, [upcomingGames, selectedWindow, sortUpcomingBy, searchQuery, votedMap]);

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
                    STRATEGY PORTAL
                  </span>
                </div>
                <div className="text-[10px] font-semibold text-[#94a3b8]">
                  Mobile Game Rankings, Release Calendar & Strategy Wikis
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
        {/* Clean AppMedia-Style Portal Header & Section Directory */}
        <section className="rounded-xl border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#1e293b] pb-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#94a3b8]">
                <span className="rounded bg-[#1e293b] border border-[#334155] px-2 py-0.5 text-[10px] font-extrabold text-[#93c5fd]">
                  PORTAL INDEX
                </span>
                <span>Last Updated: {updatedAt}</span>
                <span>·</span>
                <span>25 Ranked Titles · {upcomingGames.length} Upcoming Releases · {strategyWikis.length} Strategy Wikis</span>
              </div>
              <h1 className="text-lg sm:text-xl font-black text-white leading-snug">
                Mobile Game Rankings, Upcoming Release Schedule & Strategy Wiki Directory
              </h1>
            </div>

            {/* Active Strategy Wiki Spotlight: Star Savior */}
            <Link
              href="/starsavior"
              className="group flex items-center gap-3 rounded-lg border border-[#3b82f6] bg-[#141e33] px-3.5 py-2.5 hover:bg-[#192540] transition-colors shrink-0"
            >
              <img
                src="https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_starsavior.webp"
                alt="Star Savior"
                className="h-12 w-12 rounded-lg border border-[#eab308]/80 object-cover shrink-0"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-[#2563eb] px-1.5 py-0.5 text-[9px] font-black text-white">
                    FEATURED WIKI
                  </span>
                  <span className="text-[10px] font-bold text-[#93c5fd]">STUDIOBSIDE</span>
                </div>
                <div className="text-[13px] font-black text-white group-hover:text-[#60a5fa] truncate mt-0.5">
                  Star Savior Strategy Wiki
                </div>
                <div className="text-[10px] text-[#cbd5e1]">
                  Tier List · Reroll Guide · 57 Saviors · 83 Arcana →
                </div>
              </div>
            </Link>
          </div>

          {/* AppMedia Quick Section Navigation Table */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {[
              { href: '#recommended-ranking', label: 'Top 25 Mobile Games', sub: 'Editorial Star Ratings & Reviews' },
              { href: '#upcoming-calendar', label: 'New Game Release Calendar', sub: `${upcomingGames.length} Upcoming Titles & Votes` },
              { href: '#appstore-rankings', label: 'App Store Rankings', sub: 'Top Free & Top Grossing Charts' },
              { href: '#strategy-wikis', label: 'Strategy Wiki Directory', sub: `${strategyWikis.length} Mobile & Console Wikis` },
              { href: '#featured-articles', label: 'Featured Strategy Guides', sub: '16 Pickup Event & Reroll Guides' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#243049] bg-[#0f1626] hover:border-[#3b82f6] hover:bg-[#141d30] p-2.5 transition-colors"
              >
                <div className="text-[12px] font-extrabold text-[#93c5fd]">{item.label}</div>
                <div className="text-[10px] text-[#94a3b8] mt-0.5 truncate">{item.sub}</div>
              </a>
            ))}
          </div>
        </section>

        {/* 1. Top 25 Recommended Mobile Games Ranking */}
        <section className="rounded-xl border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <AppMediaH2 id="recommended-ranking" badge="TOP 25">
              Recommended Mobile Games Latest Ranking (Top 25)
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
            Editorial ranking of the top 25 mobile games currently available on iOS and Android, evaluated by gameplay depth, gacha fairness, story production, and daily time commitment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {displayedRecommended.map((game) => {
              const rankBadgeColor =
                game.rank === 1
                  ? 'bg-[#f59e0b] text-slate-950'
                  : game.rank === 2
                  ? 'bg-[#cbd5e1] text-slate-950'
                  : game.rank === 3
                  ? 'bg-[#d97706] text-white'
                  : 'bg-[#1e293b] text-[#93c5fd] border border-[#334155]';

              return (
                <div
                  key={game.id}
                  onClick={() => setActiveGameReview(game)}
                  className="cursor-pointer flex flex-col justify-between rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-3 hover:border-[#3b82f6]/60 transition-colors"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3">
                      <img
                        src={game.iconUrl}
                        alt={game.title}
                        className="h-16 w-16 rounded-xl border border-[#334155] bg-[#090d16] object-cover shrink-0"
                        loading="eager"
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

                    {/* Editorial Recommendation Points */}
                    {game.points.length > 0 && (
                      <div className="rounded-lg border border-[#1e293b] bg-[#0b101b] p-2.5 space-y-1">
                        <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#fbbf24]">
                          Key Review Highlights
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

        {/* 2. Upcoming Game Release Calendar */}
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
            Complete release schedule for upcoming mobile and cross-platform gacha RPGs, including expected launch windows, publishers, and interactive reader expectation votes.
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
                  <th className="w-32 px-3 py-2.5 text-center">Reader Votes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e293b]">
                {displayedUpcoming.map((g) => {
                  const userVotes = votedMap[g.id] || 0;
                  const totalVotes = g.votes + userVotes;
                  return (
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
                        <div className="inline-flex flex-col items-center gap-1 rounded-lg border border-[#243049] bg-[#141c2e] px-2.5 py-1.5">
                          <span className="text-[13px] font-black text-[#fbbf24]">{totalVotes}</span>
                          <button
                            type="button"
                            onClick={() => handleVoteUpcoming(g.id)}
                            className={`rounded px-2 py-0.5 text-[10px] font-extrabold transition-colors ${
                              userVotes > 0
                                ? 'bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40'
                                : 'bg-[#2563eb] hover:bg-[#1d4ed8] text-white'
                            }`}
                          >
                            {userVotes > 0 ? `Voted (+${userVotes})` : '+1 Vote'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
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

        {/* 3. App Store Free & Sales Rankings */}
        <section className="rounded-xl border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-4">
          <AppMediaH2 id="appstore-rankings" badge="APP STORE">
            App Store Top Free & Top Grossing Rankings
          </AppMediaH2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Free App Ranking */}
            <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-2.5">
              <AppMediaH3>Top Free App Ranking</AppMediaH3>
              <div className="divide-y divide-[#1e293b]">
                {appStoreFreeRanking.map((app) => {
                  const matchedRec = recommendedRanking.find((r) => r.title === app.title);
                  return (
                    <button
                      key={app.rank}
                      type="button"
                      onClick={() => {
                        if (matchedRec) {
                          setActiveGameReview(matchedRec);
                        } else {
                          setActiveGameReview({
                            rank: app.rank,
                            id: `free-${app.rank}`,
                            title: app.title,
                            titleJa: app.titleJa,
                            evaluation: '4.5',
                            genre: 'Mobile App / RPG',
                            releaseDate: 'Currently Live',
                            outline: `Ranked #${app.rank} on the App Store Top Free Chart.`,
                            points: [
                              `Currently charting at #${app.rank} in daily free downloads.`,
                              'Available on iOS App Store and Google Play Store.',
                            ],
                            iconUrl: app.iconUrl,
                            iosUrl: '',
                            androidUrl: '',
                          });
                        }
                      }}
                      className="w-full text-left flex items-center gap-3 py-2.5 hover:bg-[#141d30] px-2 rounded transition-colors"
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
                        <div className="text-[10px] text-[#94a3b8]">App Store Top Free #{app.rank} · View Summary</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sales App Ranking */}
            <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-2.5">
              <AppMediaH3>Top Grossing / Sales Ranking</AppMediaH3>
              <div className="divide-y divide-[#1e293b]">
                {appStoreSalesRanking.map((app) => {
                  const matchedRec = recommendedRanking.find((r) => r.title === app.title);
                  return (
                    <button
                      key={app.rank}
                      type="button"
                      onClick={() => {
                        if (matchedRec) {
                          setActiveGameReview(matchedRec);
                        } else {
                          setActiveGameReview({
                            rank: app.rank,
                            id: `sales-${app.rank}`,
                            title: app.title,
                            titleJa: app.titleJa,
                            evaluation: '5',
                            genre: 'Top Grossing Mobile Game',
                            releaseDate: 'Currently Live',
                            outline: `Ranked #${app.rank} on the App Store Top Grossing / Sales Chart.`,
                            points: [
                              `Currently charting at #${app.rank} in overall App Store revenue.`,
                              'Active seasonal banner or major anniversary campaign in progress.',
                            ],
                            iconUrl: app.iconUrl,
                            iosUrl: '',
                            androidUrl: '',
                          });
                        }
                      }}
                      className="w-full text-left flex items-center gap-3 py-2.5 hover:bg-[#141d30] px-2 rounded transition-colors"
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
                        <div className="text-[10px] text-[#fbbf24]">App Store Top Sales #{app.rank} · View Summary</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Strategy Wiki Directory (48 Active Wikis) */}
        <section className="rounded-xl border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <AppMediaH2 id="strategy-wikis" badge={`${strategyWikis.length} WIKIS`}>
              Active Strategy Wikis Directory (Mobile & Console)
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
                      <span className="absolute -top-1.5 -right-2 rounded bg-[#2563eb] px-1 py-0.2 text-[8px] font-black text-white">
                        WIKI
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
                <button
                  key={`${w.href}-${idx}`}
                  type="button"
                  onClick={() =>
                    setActiveGameReview({
                      rank: idx + 1,
                      id: `wiki-${idx}`,
                      title: w.title,
                      titleJa: w.titleJa,
                      evaluation: '4.5',
                      genre: `${w.platform} Strategy Wiki`,
                      releaseDate: 'Active Title',
                      outline: `${w.title} (${w.platform}) — Indexed in Strategy Wiki Directory.`,
                      points: [
                        `Platform Category: ${w.platform}`,
                        'Full interactive Character, Arcana, Tier List, and Build calculator modules are currently active on the Star Savior Strategy Wiki (/starsavior).',
                      ],
                      iconUrl: w.iconUrl,
                      iosUrl: '',
                      androidUrl: '',
                    })
                  }
                  className="text-left"
                >
                  {content}
                </button>
              );
            })}
          </div>
        </section>

        {/* 5. Featured Strategy Articles (100% Uncropped English Localized Banners) */}
        <section className="rounded-xl border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-4">
          <AppMediaH2 id="featured-articles" badge="PICKUP GUIDES">
            Featured Strategy Articles & Event Guides
          </AppMediaH2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {featuredArticles.map((art, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveArticle(art)}
                className="group text-left flex flex-col overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626] hover:border-[#3b82f6] transition-colors"
              >
                <div className="w-full overflow-hidden bg-[#090d16] border-b border-[#1e293b]">
                  <img
                    src={art.thumbUrl}
                    alt={art.title}
                    className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform"
                    loading="eager"
                  />
                </div>
                <div className="p-3 flex-1 flex flex-col justify-between gap-2">
                  <div className="text-[12px] font-bold text-white group-hover:text-[#60a5fa] leading-snug line-clamp-2">
                    {art.title}
                  </div>
                  <div className="text-[10px] font-extrabold text-[#93c5fd]">
                    Read Strategy Summary →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* English Strategy Article Summary Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="w-full max-w-2xl rounded-xl border border-[#3b82f6] bg-[#111726] p-5 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-[#1e293b] pb-3">
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#93c5fd]">
                  {ARTICLE_SUMMARIES[activeArticle.thumbUrl]?.category || 'Featured Strategy Guide'}
                </div>
                <h3 className="text-base sm:text-lg font-black text-white mt-0.5">
                  {activeArticle.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="rounded-lg border border-[#334155] bg-[#1e293b] px-2.5 py-1 text-[11px] font-extrabold text-white hover:bg-[#334155]"
              >
                ✕ Close
              </button>
            </div>

            <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#090d16]">
              <img
                src={activeArticle.thumbUrl}
                alt={activeArticle.title}
                className="w-full h-auto object-contain block"
              />
            </div>

            <p className="text-[12px] sm:text-[13px] text-[#e2e8f0] leading-relaxed">
              {ARTICLE_SUMMARIES[activeArticle.thumbUrl]?.summary}
            </p>

            {ARTICLE_SUMMARIES[activeArticle.thumbUrl]?.keyPoints && (
              <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-2">
                <div className="text-[11px] font-extrabold text-[#fbbf24]">
                  Key Strategy Checkpoints
                </div>
                <ul className="space-y-1.5 text-[12px] text-[#cbd5e1]">
                  {ARTICLE_SUMMARIES[activeArticle.thumbUrl].keyPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#3b82f6] font-black">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#1e293b]">
              <Link
                href={ARTICLE_SUMMARIES[activeArticle.thumbUrl]?.targetRoute || '/starsavior'}
                onClick={() => setActiveArticle(null)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] px-4 py-2 text-[12px] font-black text-white transition-colors"
              >
                <span>Open Star Savior Full Strategy Wiki →</span>
              </Link>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="rounded-lg border border-[#334155] bg-[#161f33] px-3.5 py-1.5 text-[11px] font-bold text-[#cbd5e1] hover:text-white"
              >
                Back to Portal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* English Game Review Summary Modal */}
      {activeGameReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setActiveGameReview(null)}
        >
          <div
            className="w-full max-w-xl rounded-xl border border-[#3b82f6] bg-[#111726] p-5 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-[#1e293b] pb-3">
              <div className="flex items-center gap-3">
                <img
                  src={activeGameReview.iconUrl}
                  alt={activeGameReview.title}
                  className="h-14 w-14 rounded-xl border border-[#334155] object-cover shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-[#2563eb] px-2 py-0.5 text-[10px] font-black text-white">
                      Rank #{activeGameReview.rank}
                    </span>
                    <span className="text-[11px] font-black text-[#fbbf24]">
                      ★ {activeGameReview.evaluation} / 5.0
                    </span>
                  </div>
                  <h3 className="text-base font-black text-white mt-1">{activeGameReview.title}</h3>
                  <div className="text-[11px] text-[#93c5fd]">{activeGameReview.genre}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveGameReview(null)}
                className="rounded-lg border border-[#334155] bg-[#1e293b] px-2.5 py-1 text-[11px] font-extrabold text-white hover:bg-[#334155]"
              >
                ✕ Close
              </button>
            </div>

            <div className="rounded bg-[#141c2e] border border-[#1e293b] p-3 text-[12px] font-bold text-white">
              {activeGameReview.outline}
            </div>

            {activeGameReview.points.length > 0 && (
              <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-2">
                <div className="text-[11px] font-extrabold text-[#fbbf24]">
                  Editorial Review Breakdown
                </div>
                <ul className="space-y-1.5 text-[12px] text-[#cbd5e1]">
                  {activeGameReview.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#3b82f6] font-black">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center justify-between gap-3 pt-2 border-t border-[#1e293b]">
              <Link
                href="/starsavior"
                onClick={() => setActiveGameReview(null)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] px-4 py-2 text-[12px] font-black text-white transition-colors"
              >
                <span>Explore Flagship Star Savior Wiki →</span>
              </Link>
              <button
                type="button"
                onClick={() => setActiveGameReview(null)}
                className="rounded-lg border border-[#334155] bg-[#161f33] px-3.5 py-1.5 text-[11px] font-bold text-[#cbd5e1] hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-[#1e293b] bg-[#070a12] py-6 text-center text-[11px] text-[#64748b]">
        <div className="mx-auto max-w-[1280px] px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            <strong className="text-white">Ascalon.gg</strong> · Mobile Game Rankings, Release Schedule & Strategy Wiki Portal
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
