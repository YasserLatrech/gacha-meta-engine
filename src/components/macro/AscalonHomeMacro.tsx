'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import type {
  HomePortalData,
  HomeRecommendedGame,
  HomeFeaturedArticle,
  HomeStrategyWiki,
} from '@/domain/schemas';
import {
  AppMediaH2,
  AppMediaH3,
} from '@/components/micro/AppMediaHeadings';
import {
  LiveJstCountdown,
  LiveJstWallClock,
  parseReleasedLaunchIso,
  parseUpcomingReleaseIso,
} from '@/components/micro/LiveJstCountdown';
import { GlobalOmniSearch } from '@/components/micro/GlobalOmniSearch';
import { AdsterraSlot } from '@/components/micro/AnalyticsAndAds';

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
    category: 'Onimusha: Way of the Sword · Omamori Equipment Guide',
    summary:
      'Complete Omamori (Talisman) equipment system guide for Onimusha: Way of the Sword, covering slot unlocking, rarity scaling, and best-in-slot combat builds.',
    keyPoints: [
      'Equipping matching Omamori sets activates passive Issen critical counter damage and soul absorption multipliers.',
      'Prioritize Attack Speed and Critical Window Expansion Omamori for boss time-attack stages.',
      'Dismantle duplicate lower-rarity talismans to enhance your primary SSR Omamori to max rank.',
    ],
    targetRoute: '/starsavior',
  },
};

interface VoteStoreState {
  counts: Record<string, number>;
  myVoted: Record<string, boolean>;
  pending: Record<string, boolean>;
}

const EMPTY_VOTE_STORE: VoteStoreState = { counts: {}, myVoted: {}, pending: {} };

export function AscalonHomeMacro({ portalData }: { portalData: HomePortalData }) {
  const {
    updatedAt,
    strategyWikis,
    recommendedRanking,
    upcomingGames,
    appStoreFreeRanking,
    appStoreSalesRanking,
    featuredArticles,
  } = portalData;

  const liveWiki = useMemo(
    () => strategyWikis.find((w) => w.wikiStatus === 'live' || w.isInternal) ?? strategyWikis[0],
    [strategyWikis]
  );
  const nextWiki = useMemo(
    () => strategyWikis.find((w) => w.wikiStatus === 'next') ?? strategyWikis[1],
    [strategyWikis]
  );
  const plannedWikisCount = useMemo(
    () => strategyWikis.filter((w) => !w.isInternal && w.wikiStatus !== 'live').length,
    [strategyWikis]
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEval, setSelectedEval] = useState<'ALL' | '5' | '4.5'>('ALL');
  const [showAllRanked, setShowAllRanked] = useState(false);

  const [selectedWindow, setSelectedWindow] = useState<string>('ALL');
  const [sortUpcomingBy, setSortUpcomingBy] = useState<'schedule' | 'votes' | 'chronos'>('votes');
  const [showAllUpcoming, setShowAllUpcoming] = useState(false);

  const [selectedRoadmapFilter, setSelectedRoadmapFilter] = useState<'ALL' | 'live' | 'next' | 'planned'>('ALL');
  const [selectedPlatform, setSelectedPlatform] = useState<'ALL' | 'Mobile App' | 'Console / PC'>('ALL');

  // Server-backed 1-Vote-Per-IP stores (upcoming calendar + wiki expansion roadmap)
  const [upcomingVotes, setUpcomingVotes] = useState<VoteStoreState>(EMPTY_VOTE_STORE);
  const [roadmapVotes, setRoadmapVotes] = useState<VoteStoreState>(EMPTY_VOTE_STORE);
  const [activeArticle, setActiveArticle] = useState<HomeFeaturedArticle | null>(null);
  const [activeGameReview, setActiveGameReview] = useState<HomeRecommendedGame | null>(null);
  const [activeWikiPlan, setActiveWikiPlan] = useState<HomeStrategyWiki | null>(null);

  useEffect(() => {
    let cancelled = false;
    const hydrateVoteScope = async (
      scope: string,
      setter: React.Dispatch<React.SetStateAction<VoteStoreState>>
    ) => {
      try {
        const res = await fetch(`/api/votes?scope=${encodeURIComponent(scope)}`, { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        if (cancelled || !data) return;
        const nextVoted: Record<string, boolean> = {};
        if (Array.isArray(data.myVotes)) {
          for (const id of data.myVotes) nextVoted[String(id)] = true;
        }
        setter({
          counts: data.counts && typeof data.counts === 'object' ? data.counts : {},
          myVoted: nextVoted,
          pending: {},
        });
      } catch {
        // Keep static baseline counts if offline
      }
    };

    void Promise.all([
      hydrateVoteScope('upcoming-games', setUpcomingVotes),
      hydrateVoteScope('wiki-roadmap', setRoadmapVotes),
    ]);
    return () => {
      cancelled = true;
    };
  }, []);

  const castVoteForScope = async (
    scope: 'upcoming-games' | 'wiki-roadmap',
    targetId: string,
    store: VoteStoreState,
    setter: React.Dispatch<React.SetStateAction<VoteStoreState>>
  ) => {
    if (store.myVoted[targetId] || store.pending[targetId]) return;

    setter((prev) => ({
      counts: { ...prev.counts, [targetId]: (prev.counts[targetId] || 0) + 1 },
      myVoted: { ...prev.myVoted, [targetId]: true },
      pending: { ...prev.pending, [targetId]: true },
    }));

    try {
      const res = await fetch('/api/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scope, targetId, mode: 'per-item' }),
      });
      const data = await res.json().catch(() => null);
      if ((res.ok || res.status === 409) && data) {
        const syncedVoted: Record<string, boolean> = {};
        if (Array.isArray(data.myVotes)) {
          for (const id of data.myVotes) syncedVoted[String(id)] = true;
        }
        syncedVoted[targetId] = true;
        setter((prev) => {
          const nextPending = { ...prev.pending };
          delete nextPending[targetId];
          return {
            counts: data.counts && typeof data.counts === 'object' ? data.counts : prev.counts,
            myVoted: syncedVoted,
            pending: nextPending,
          };
        });
        return;
      }
    } catch {
      // Roll back below
    }

    setter((prev) => {
      const nextVoted = { ...prev.myVoted };
      delete nextVoted[targetId];
      const nextPending = { ...prev.pending };
      delete nextPending[targetId];
      return {
        counts: { ...prev.counts, [targetId]: Math.max(0, (prev.counts[targetId] || 1) - 1) },
        myVoted: nextVoted,
        pending: nextPending,
      };
    });
  };

  const serverVoteCounts = upcomingVotes.counts;
  const myVotedIds = upcomingVotes.myVoted;
  const pendingVoteIds = upcomingVotes.pending;
  const handleVoteUpcoming = (gameId: string) =>
    void castVoteForScope('upcoming-games', gameId, upcomingVotes, setUpcomingVotes);
  const handleVoteRoadmap = (wikiKey: string) =>
    void castVoteForScope('wiki-roadmap', wikiKey, roadmapVotes, setRoadmapVotes);

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
    'Within 2029',
    'TBA',
  ];

  const liveChronoCount = useMemo(
    () =>
      upcomingGames.filter(
        (g) =>
          Boolean(parseUpcomingReleaseIso(g.releaseDate, g.status)) ||
          Boolean(parseReleasedLaunchIso(g.releaseDate, g.status))
      ).length,
    [upcomingGames]
  );

  const filteredUpcoming = useMemo(() => {
    const list = upcomingGames.filter((g) => {
      if (selectedWindow !== 'ALL' && g.category !== selectedWindow) return false;
      if (sortUpcomingBy === 'chronos') {
        const hasExactChrono =
          Boolean(parseUpcomingReleaseIso(g.releaseDate, g.status)) ||
          Boolean(parseReleasedLaunchIso(g.releaseDate, g.status));
        if (!hasExactChrono) return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = g.title.toLowerCase().includes(q) || g.titleJa.toLowerCase().includes(q);
        const matchDesc = g.description.toLowerCase().includes(q);
        const matchPub = g.publisher.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchPub) return false;
      }
      return true;
    });

    if (sortUpcomingBy === 'chronos') {
      return [...list].sort((a, b) => {
        const aUp = parseUpcomingReleaseIso(a.releaseDate, a.status);
        const bUp = parseUpcomingReleaseIso(b.releaseDate, b.status);
        if (aUp && bUp) return Date.parse(aUp) - Date.parse(bUp);
        if (aUp && !bUp) return -1;
        if (!aUp && bUp) return 1;
        const aRel = parseReleasedLaunchIso(a.releaseDate, a.status);
        const bRel = parseReleasedLaunchIso(b.releaseDate, b.status);
        if (aRel && bRel) return Date.parse(bRel) - Date.parse(aRel);
        return 0;
      });
    }

    if (sortUpcomingBy === 'votes') {
      return [...list].sort(
        (a, b) =>
          b.votes + (serverVoteCounts[b.id] || 0) - (a.votes + (serverVoteCounts[a.id] || 0))
      );
    }
    return list;
  }, [upcomingGames, selectedWindow, sortUpcomingBy, searchQuery, serverVoteCounts]);

  const displayedUpcoming = showAllUpcoming ? filteredUpcoming : filteredUpcoming.slice(0, 16);

  // Filter Strategy Wiki Expansion Roadmap
  const filteredWikis = useMemo(() => {
    return strategyWikis.filter((w) => {
      const status = w.wikiStatus || (w.isInternal ? 'live' : 'planned');
      if (selectedRoadmapFilter !== 'ALL' && status !== selectedRoadmapFilter) return false;
      if (selectedPlatform === 'Mobile App' && !w.platform.includes('Mobile')) return false;
      if (selectedPlatform === 'Console / PC' && !w.platform.includes('Console')) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        if (!w.title.toLowerCase().includes(q) && !w.titleJa.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [strategyWikis, selectedRoadmapFilter, selectedPlatform, searchQuery]);

  return (
    <div className="min-h-screen bg-[#090d16] text-[#e2e8f0]">
      {/* Sticky Top Global Header */}
      <header className="sticky top-0 z-40 border-b border-[#1e293b] bg-[#0b101b]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5">
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group min-w-0">
            <img
              src="/brand/ascalon-logo.png"
              alt="Ascalon.fun"
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg border border-[#3b82f6]/60 object-cover shadow-sm shrink-0"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-base font-black tracking-tight text-white group-hover:text-[#60a5fa] transition-colors whitespace-nowrap">
                  ASCALON<span className="text-[#3b82f6]">.FUN</span>
                </span>
                <span className="hidden xs:inline-block rounded bg-[#1e293b] border border-[#334155] px-1.5 py-0.5 text-[11px] font-extrabold text-[#93c5fd] whitespace-nowrap">
                  PORTAL
                </span>
              </div>
              <div className="hidden sm:block text-[11.5px] font-semibold text-[#c8d4e6] truncate">
                Mobile Game Rankings, Release Calendar & Strategy Wikis
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-5 text-[13.5px] font-extrabold text-[#e8eff8]">
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
              Wiki Roadmap (1 Live)
            </a>
            <a href="#featured-articles" className="hover:text-[#60a5fa] transition-colors">
              Featured Guides
            </a>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <GlobalOmniSearch />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter portal lists..."
              className="hidden xl:block w-44 rounded-lg border border-[#243049] bg-[#090d16] px-3 py-1.5 text-[12.5px] text-white placeholder-[#8c9db8] focus:border-[#3b82f6] focus:outline-none"
            />
            <Link
              href="/starsavior"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] px-2.5 sm:px-3 py-1.5 text-[12.5px] font-black text-white shadow transition-colors whitespace-nowrap"
            >
              <img
                src={strategyWikis[0]?.iconUrl || '/brand/ascalon-logo.png'}
                alt="Star Savior"
                className="h-4 w-4 rounded-sm object-cover shrink-0"
              />
              <span>Star Savior Wiki →</span>
            </Link>
          </div>
        </div>

        {/* Compact Mobile Horizontal Section Jump Bar */}
        <div className="lg:hidden border-t border-[#161f33] bg-[#090d16]/90 px-3 py-1.5">
          <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto text-[12.5px] font-extrabold">
            <a
              href="#recommended-ranking"
              className="shrink-0 rounded-full border border-[#243049] bg-[#141c2e] px-2.5 py-0.5 text-[#e8eff8] hover:border-[#3b82f6] hover:text-white"
            >
              Top 25 Games
            </a>
            <a
              href="#upcoming-calendar"
              className="shrink-0 rounded-full border border-[#243049] bg-[#141c2e] px-2.5 py-0.5 text-[#e8eff8] hover:border-[#3b82f6] hover:text-white"
            >
              Upcoming ({upcomingGames.length})
            </a>
            <a
              href="#appstore-rankings"
              className="shrink-0 rounded-full border border-[#243049] bg-[#141c2e] px-2.5 py-0.5 text-[#e8eff8] hover:border-[#3b82f6] hover:text-white"
            >
              App Store
            </a>
            <a
              href="#strategy-wikis"
              className="shrink-0 rounded-full border border-[#243049] bg-[#141c2e] px-2.5 py-0.5 text-[#e8eff8] hover:border-[#3b82f6] hover:text-white"
            >
              Wiki Roadmap
            </a>
            <a
              href="#featured-articles"
              className="shrink-0 rounded-full border border-[#243049] bg-[#141c2e] px-2.5 py-0.5 text-[#e8eff8] hover:border-[#3b82f6] hover:text-white"
            >
              Guides
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mx-auto max-w-[1280px] px-3 sm:px-4 py-4 sm:py-6 space-y-6 sm:space-y-8">
        {/* Mobile Full-Width Search Input (Keeps Sticky Header Ultra-Compact) */}
        <div className="sm:hidden">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search ranked games, upcoming releases, wikis..."
            className="w-full rounded-lg border border-[#243049] bg-[#111726] px-3.5 py-2.5 text-[13.5px] text-white placeholder-[#8c9db8] focus:border-[#3b82f6] focus:outline-none"
          />
        </div>
        {/* Portal Hero Header: 1 Live Wiki (Star Savior) + Next Wiki (Silver Palace) */}
        <section className="rounded-xl border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-4">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 border-b border-[#1e293b] pb-4">
            <div className="space-y-2 min-w-0">
              <div className="flex flex-wrap items-center gap-2 text-[12px] font-bold text-[#c8d4e6]">
                <span className="inline-flex items-center gap-1.5 rounded bg-emerald-500/15 border border-emerald-500/40 px-2 py-0.5 font-extrabold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  1 LIVE WIKI: STAR SAVIOR
                </span>
                <span className="rounded bg-amber-500/15 border border-amber-500/40 px-2 py-0.5 font-extrabold text-amber-300">
                  NEXT WIKI: {nextWiki?.title?.toUpperCase() || 'SILVER PALACE'} (DEC 14)
                </span>
                <span className="text-[#b8c7dc]">
                  Updated {updatedAt} · {upcomingGames.length} Upcoming Titles · {recommendedRanking.length} Ranked
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-black text-white leading-snug">
                Mobile &amp; Gacha Game Rankings, Release Calendar &amp; English Strategy Wikis
              </h1>
              <p className="text-[12.5px] sm:text-[13px] text-[#c8d4e6]">
                <strong className="text-white">Star Savior</strong> is currently the only live full strategy wiki on Ascalon.fun.{' '}
                <strong className="text-amber-300">{nextWiki?.title || 'Silver Palace'}</strong> (Dec 14, 2026 Global Launch) is up next in production.
              </p>
            </div>

            {/* Dual Spotlight Pair: ONLY Live Wiki Now + Next Wiki Coming Soon */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 xl:w-[570px] shrink-0">
              {/* Card 1: ONLY LIVE WIKI */}
              <Link
                href="/starsavior"
                className="group flex items-center gap-3 rounded-lg border border-emerald-500/60 bg-gradient-to-br from-[#0e2026] to-[#131d33] px-3.5 py-2.5 hover:border-emerald-400 hover:bg-[#172540] transition-colors active:scale-[0.99]"
              >
                <img
                  src={liveWiki?.iconUrl || '/brand/ascalon-logo.png'}
                  alt="Star Savior Strategy Wiki"
                  className="h-12 w-12 rounded-lg border-2 border-emerald-400/80 object-cover shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="rounded bg-emerald-500 px-1.5 py-0.5 text-[10px] font-black text-slate-950">
                      LIVE NOW
                    </span>
                    <span className="text-[10.5px] font-extrabold text-emerald-300">
                      ONLY ACTIVE WIKI
                    </span>
                  </div>
                  <div className="text-[14px] font-black text-white group-hover:text-emerald-300 truncate mt-0.5">
                    Star Savior Wiki
                  </div>
                  <div className="text-[11.5px] text-[#e8eff8] truncate">
                    59 Saviors · 85 Arcana · 86 Guides →
                  </div>
                </div>
              </Link>

              {/* Card 2: NEXT UPCOMING WIKI */}
              <a
                href="#strategy-wikis"
                className="group flex items-center gap-3 rounded-lg border border-amber-500/50 bg-gradient-to-br from-[#1f1912] to-[#131a2d] px-3.5 py-2.5 hover:border-amber-400 hover:bg-[#1b2238] transition-colors active:scale-[0.99]"
              >
                <img
                  src={nextWiki?.iconUrl || '/banners/home/icons/portal_icon_087.webp'}
                  alt={nextWiki?.title || 'Silver Palace'}
                  className="h-12 w-12 rounded-lg border-2 border-amber-400/70 object-cover shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="rounded bg-amber-400 px-1.5 py-0.5 text-[10px] font-black text-slate-950">
                      NEXT WIKI (#2)
                    </span>
                    <span className="font-mono text-[10.5px] font-extrabold text-amber-300">
                      DEC 14 GLOBAL
                    </span>
                  </div>
                  <div className="text-[14px] font-black text-white group-hover:text-amber-300 truncate mt-0.5">
                    {nextWiki?.title || 'Silver Palace'}
                  </div>
                  <div className="text-[11.5px] text-[#e8eff8] truncate">
                    UE5 Open-World · Roadmap Queue →
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Portal Quick Section Navigation Table */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {[
              { href: '#recommended-ranking', label: 'Top 25 Mobile Games', sub: 'Editorial Star Ratings & Reviews' },
              { href: '#upcoming-calendar', label: 'New Game Release Calendar', sub: `${upcomingGames.length} Upcoming Titles & Votes` },
              { href: '#appstore-rankings', label: 'App Store Rankings', sub: 'Top Free & Top Grossing Charts' },
              {
                href: '#strategy-wikis',
                label: 'Wiki Expansion Roadmap',
                sub: `1 Live · Next: ${nextWiki?.title || 'Silver Palace'} (${plannedWikisCount} Queued)`,
              },
              { href: '#featured-articles', label: 'Featured Strategy Guides', sub: `${featuredArticles.length} Pickup Event & Reroll Guides` },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#243049] bg-[#0f1626] hover:border-[#3b82f6] hover:bg-[#141d30] p-2.5 transition-colors"
              >
                <div className="text-[13.5px] font-extrabold text-[#93c5fd]">{item.label}</div>
                <div className="text-[11.5px] text-[#c8d4e6] mt-0.5 truncate">{item.sub}</div>
              </a>
            ))}
          </div>
        </section>

        <AdsterraSlot variant="leaderboard" />

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
                  className={`rounded-lg px-3 py-1 text-[12.5px] font-extrabold transition-colors ${
                    selectedEval === ev
                      ? 'bg-[#2563eb] text-white'
                      : 'bg-[#161f33] text-[#e8eff8] hover:text-white'
                  }`}
                >
                  {ev === 'ALL' ? `All Ranked (${recommendedRanking.length})` : `★ ${ev} Rated`}
                </button>
              ))}
            </div>
          </div>

          <p className="text-[13.5px] text-[#e8eff8]">
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
                          <span className={`rounded px-2 py-0.5 text-[11.5px] font-black ${rankBadgeColor}`}>
                            Rank #{game.rank}
                          </span>
                          <div className="inline-flex items-center gap-1 rounded bg-[#161f33] border border-[#243049] px-2 py-0.5 text-[12.5px] font-black text-[#fbbf24]">
                            <span>★ {game.evaluation}</span>
                            <span className="text-[11.5px] text-[#c8d4e6] font-bold">/ 5.0</span>
                          </div>
                        </div>
                        <div className="text-[14px] font-black text-white leading-snug">
                          {game.title}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-[11.5px] font-bold text-[#93c5fd]">
                          <span>{game.genre}</span>
                          {game.releaseDate && (
                            <>
                              <span>·</span>
                              <span className="text-[#c8d4e6]">Release: {game.releaseDate}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="rounded bg-[#141c2e] border border-[#1e293b] px-3 py-1.5 text-[12.5px] font-bold text-[#f8fafc]">
                      {game.outline}
                    </div>

                    {/* Editorial Recommendation Points */}
                    {game.points.length > 0 && (
                      <div className="rounded-lg border border-[#1e293b] bg-[#0b101b] p-2.5 space-y-1">
                        <div className="text-[11.5px] font-extrabold uppercase tracking-wider text-[#fbbf24]">
                          Key Review Highlights
                        </div>
                        <ul className="space-y-1 text-[12.5px] text-[#e8eff8]">
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
                className="rounded-lg border border-[#3b82f6]/60 bg-[#161f33] hover:bg-[#1e293b] px-5 py-2 text-[13.5px] font-extrabold text-[#93c5fd] transition-colors"
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

            <div className="flex flex-wrap items-center gap-1.5 text-[12.5px] font-extrabold">
              <span className="text-[#c8d4e6]">Sort by:</span>
              <button
                type="button"
                onClick={() => setSortUpcomingBy('votes')}
                className={`rounded px-2.5 py-1 transition-colors ${
                  sortUpcomingBy === 'votes'
                    ? 'bg-[#2563eb] text-white'
                    : 'bg-[#161f33] text-[#e8eff8] hover:text-white'
                }`}
              >
                Reader Votes
              </button>
              <button
                type="button"
                onClick={() => setSortUpcomingBy('chronos')}
                className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 transition-colors ${
                  sortUpcomingBy === 'chronos'
                    ? 'bg-[#2563eb] text-white'
                    : 'bg-[#161f33] text-[#93c5fd] border border-[#3b82f6]/40 hover:text-white'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Chronos ({liveChronoCount})</span>
              </button>
              <button
                type="button"
                onClick={() => setSortUpcomingBy('schedule')}
                className={`rounded px-2.5 py-1 transition-colors ${
                  sortUpcomingBy === 'schedule'
                    ? 'bg-[#2563eb] text-white'
                    : 'bg-[#161f33] text-[#e8eff8] hover:text-white'
                }`}
              >
                Release Schedule
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 rounded-lg border border-[#1e293b] bg-[#0b101b] px-3 py-2">
            <p className="text-[13.5px] text-[#e8eff8]">
              Verified AppMedia release schedule for upcoming mobile &amp; cross-platform gacha RPGs, synchronized to Japan Standard Time (<strong className="text-[#93c5fd]">1 vote per game per IP</strong> · exact timers strictly for publisher-confirmed dates).
            </p>
            <LiveJstWallClock className="shrink-0 self-start sm:self-auto" />
          </div>

          {/* Release Window Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-lg border border-[#243049] bg-[#0f1626] p-2.5">
            {upcomingWindows.map((win) => (
              <button
                key={win}
                type="button"
                onClick={() => setSelectedWindow(win)}
                className={`rounded px-2.5 py-1 text-[12.5px] font-bold transition-colors ${
                  selectedWindow === win
                    ? 'bg-[#2563eb] text-white'
                    : 'bg-[#161f33] text-[#e8eff8] hover:text-white'
                }`}
              >
                {win === 'ALL' ? `All Windows (${upcomingGames.length})` : win}
              </button>
            ))}
          </div>

          {/* Mobile Card Layout (< md) — Zero Horizontal Overflow */}
          <div className="md:hidden space-y-2.5">
            {displayedUpcoming.map((g) => {
              const hasVoted = Boolean(myVotedIds[g.id]);
              const isPending = Boolean(pendingVoteIds[g.id]);
              const totalVotes = g.votes + (serverVoteCounts[g.id] || 0);
              const launchIso = parseUpcomingReleaseIso(g.releaseDate, g.status);
              const releasedIso = parseReleasedLaunchIso(g.releaseDate, g.status);
              return (
                <div
                  key={g.id}
                  className="rounded-lg border border-[#243049] bg-[#0f1626] p-3 space-y-2.5"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={g.iconUrl}
                      alt={g.title}
                      className="h-13 w-13 rounded-lg border border-[#334155] bg-[#090d16] object-cover shrink-0"
                      style={{ width: '52px', height: '52px' }}
                      loading="lazy"
                    />
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-extrabold text-[#93c5fd] text-[12.5px]">
                          {g.releaseDate}
                        </span>
                        <span
                          className={`inline-block rounded px-1.5 py-0.5 text-[11px] font-black ${
                            g.status === 'Released'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          }`}
                        >
                          {g.status}
                        </span>
                        {launchIso ? (
                          <LiveJstCountdown targetIso={launchIso} prefix="In" />
                        ) : releasedIso ? (
                          <LiveJstCountdown startIso={releasedIso} />
                        ) : (
                          <span className="inline-flex items-center rounded border border-[#243049] bg-[#0b101b] px-1.5 py-0.5 font-mono text-[11px] font-bold text-[#a8b8d0]">
                            Exact Day TBA
                          </span>
                        )}
                      </div>
                      <div className="font-extrabold text-white text-[14.5px] leading-snug">
                        {g.title}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-[11.5px] font-bold text-[#c8d4e6]">
                        <span>Publisher: {g.publisher || 'TBA'}</span>
                        <span>·</span>
                        <a
                          href={g.articleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#60a5fa] hover:underline"
                        >
                          AppMedia Source ↗
                        </a>
                      </div>
                    </div>
                  </div>

                  <p className="text-[12.5px] text-[#e8eff8] leading-relaxed">
                    {g.description}
                  </p>

                  <div className="flex items-center justify-between gap-2 border-t border-[#1e293b] pt-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[12.5px] font-bold text-[#c8d4e6]">Reader Votes:</span>
                      <span className="text-[14.5px] font-black text-[#fbbf24] font-mono">
                        {totalVotes.toLocaleString('en-US')}
                      </span>
                    </div>
                    <button
                      type="button"
                      disabled={hasVoted || isPending}
                      onClick={() => handleVoteUpcoming(g.id)}
                      className={`min-h-[34px] rounded-lg px-3.5 py-1.5 text-[12.5px] font-extrabold transition-colors ${
                        hasVoted
                          ? 'bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40 cursor-default'
                          : 'bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-sm'
                      }`}
                    >
                      {hasVoted ? '✓ Voted (1/IP)' : '+1 Vote'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Table Layout (>= md) */}
          <div className="hidden md:block overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
            <table className="w-full border-collapse text-left text-[13.5px]">
              <thead>
                <tr className="border-b border-[#243049] bg-[#161f33] text-[12.5px] font-extrabold text-[#c8d4e6]">
                  <th className="w-52 px-3.5 py-2.5 border-r border-[#243049]">Release Window / Live JST Chrono</th>
                  <th className="px-3.5 py-2.5 border-r border-[#243049]">Upcoming Game & Description</th>
                  <th className="w-44 px-3.5 py-2.5 border-r border-[#243049]">Developer / Publisher</th>
                  <th className="w-36 px-3 py-2.5 text-center">Reader Votes (1/IP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e293b]">
                {displayedUpcoming.map((g) => {
                  const hasVoted = Boolean(myVotedIds[g.id]);
                  const isPending = Boolean(pendingVoteIds[g.id]);
                  const totalVotes = g.votes + (serverVoteCounts[g.id] || 0);
                  const launchIso = parseUpcomingReleaseIso(g.releaseDate, g.status);
                  const releasedIso = parseReleasedLaunchIso(g.releaseDate, g.status);
                  return (
                    <tr key={g.id} className="hover:bg-[#141d30] transition-colors">
                      <td className="p-3 border-r border-[#1e293b] space-y-1.5">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="font-extrabold text-[#93c5fd] text-[12.5px]">{g.releaseDate}</span>
                          <span
                            className={`inline-block rounded px-1.5 py-0.5 text-[11px] font-black ${
                              g.status === 'Released'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            }`}
                          >
                            {g.status}
                          </span>
                        </div>
                        <div>
                          {launchIso ? (
                            <LiveJstCountdown targetIso={launchIso} prefix="In" />
                          ) : releasedIso ? (
                            <LiveJstCountdown startIso={releasedIso} />
                          ) : (
                            <span className="inline-flex items-center rounded border border-[#243049] bg-[#0b101b] px-2 py-0.5 font-mono text-[11.5px] font-bold text-[#a8b8d0]">
                              Exact Day TBA
                            </span>
                          )}
                        </div>
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
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-extrabold text-white text-[14.5px]">{g.title}</span>
                              <a
                                href={g.articleUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded border border-[#243049] bg-[#141c2e] px-1.5 py-0.5 text-[11px] font-bold text-[#93c5fd] hover:border-[#3b82f6] hover:text-white transition-colors"
                                title={`Verify ${g.title} release schedule on AppMedia`}
                              >
                                AppMedia ↗
                              </a>
                            </div>
                            <div className="text-[12.5px] text-[#e8eff8] mt-0.5">{g.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 border-r border-[#1e293b] font-semibold text-[#c8d4e6] text-[12.5px]">
                        {g.publisher || 'TBA'}
                      </td>
                      <td className="p-3 text-center">
                        <div className="inline-flex flex-col items-center gap-1 rounded-lg border border-[#243049] bg-[#141c2e] px-2.5 py-1.5">
                          <span className="text-[14.5px] font-black text-[#fbbf24] font-mono">
                            {totalVotes.toLocaleString('en-US')}
                          </span>
                          <button
                            type="button"
                            disabled={hasVoted || isPending}
                            onClick={() => handleVoteUpcoming(g.id)}
                            className={`rounded px-2.5 py-1 text-[11.5px] font-extrabold transition-colors ${
                              hasVoted
                                ? 'bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40 cursor-default'
                                : 'bg-[#2563eb] hover:bg-[#1d4ed8] text-white'
                            }`}
                          >
                            {hasVoted ? '✓ Voted' : '+1 Vote'}
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
                className="rounded-lg border border-[#3b82f6]/60 bg-[#161f33] hover:bg-[#1e293b] px-5 py-2 text-[13.5px] font-extrabold text-[#93c5fd] transition-colors"
              >
                {showAllUpcoming
                  ? 'Show Top 16 Upcoming Games'
                  : `Show All ${filteredUpcoming.length} Upcoming Games in Calendar`}
              </button>
            </div>
          )}
        </section>

        <AdsterraSlot variant="native" />

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
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2563eb] text-[12.5px] font-black text-white shrink-0">
                        {app.rank}
                      </span>
                      <img
                        src={app.iconUrl}
                        alt={app.title}
                        className="h-11 w-11 rounded-xl border border-[#334155] object-cover shrink-0"
                        loading="lazy"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="font-extrabold text-white text-[13.5px] truncate">{app.title}</div>
                        <div className="text-[11.5px] text-[#c8d4e6]">App Store Top Free #{app.rank} · View Summary</div>
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
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f59e0b] text-[12.5px] font-black text-slate-950 shrink-0">
                        {app.rank}
                      </span>
                      <img
                        src={app.iconUrl}
                        alt={app.title}
                        className="h-11 w-11 rounded-xl border border-[#334155] object-cover shrink-0"
                        loading="lazy"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="font-extrabold text-white text-[13.5px] truncate">{app.title}</div>
                        <div className="text-[11.5px] text-[#fbbf24]">App Store Top Sales #{app.rank} · View Summary</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Ascalon.fun Strategy Wiki Hub & Expansion Roadmap */}
        <section className="rounded-xl border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="space-y-1.5 max-w-3xl">
              <AppMediaH2 id="strategy-wikis" badge={`1 LIVE · ${plannedWikisCount} QUEUED`}>
                Ascalon.fun Strategy Wiki Hub &amp; Expansion Roadmap
              </AppMediaH2>
              <p className="text-[13px] text-[#c8d4e6] leading-relaxed">
                <strong className="text-emerald-300">Star Savior</strong> is currently the only live full strategy wiki on Ascalon.fun.{' '}
                <strong className="text-amber-300">{nextWiki?.title || 'Silver Palace'}</strong> ({nextWiki?.launchWindow || 'Dec 14, 2026'} Global Launch) is Next Wiki #2 in production, followed step-by-step by the upcoming expansion queue below. Vote to prioritize which game gets full tier lists &amp; guides next.
              </p>
            </div>
          </div>

          {/* Spotlight Pair: ONLY Live Wiki vs Next Upcoming Wiki */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
            {/* Spotlight 1: ONLY LIVE WIKI */}
            <div className="rounded-xl border border-emerald-500/60 bg-gradient-to-br from-[#0e2026] to-[#101829] p-4 flex flex-col justify-between gap-3">
              <div className="flex items-start gap-3.5">
                <img
                  src={liveWiki?.iconUrl || '/banners/home/icons/portal_icon_026.webp'}
                  alt={liveWiki?.title || 'Star Savior'}
                  className="h-16 w-16 rounded-xl border-2 border-emerald-400/80 object-cover bg-[#090d16] shrink-0"
                />
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-1.5 rounded bg-emerald-500 px-2 py-0.5 text-[10.5px] font-black text-slate-950">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-950 animate-pulse" />
                      LIVE NOW · ONLY ACTIVE WIKI
                    </span>
                    <span className="rounded border border-emerald-500/40 bg-emerald-950/60 px-2 py-0.5 text-[10.5px] font-extrabold text-emerald-300">
                      {liveWiki?.publisher || 'STUDIOBSIDE'}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                    {liveWiki?.title || 'Star Savior'} Strategy Wiki
                  </h3>
                  <p className="text-[12.5px] text-[#dbe7f7] leading-relaxed">
                    {liveWiki?.roadmapReason ||
                      'Flagship active wiki on Ascalon.fun: 59 Saviors, 85 Arcana cards, Tier List, Reroll Guide, Event Checker, and 86 strategy guides.'}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-emerald-500/20">
                <span className="text-[11.5px] font-bold text-emerald-300">
                  All modules live · Daily Patch v2.4 updates
                </span>
                <Link
                  href="/starsavior"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 px-3.5 py-1.5 text-[12.5px] font-black text-slate-950 transition-colors"
                >
                  <span>Open Full Star Savior Wiki →</span>
                </Link>
              </div>
            </div>

            {/* Spotlight 2: NEXT WIKI (#2) */}
            {(() => {
              const nextKey = nextWiki?.id || 'silver-palace';
              const nextVotes = (nextWiki?.baseVotes || 0) + (roadmapVotes.counts[nextKey] || 0);
              const nextVoted = Boolean(roadmapVotes.myVoted[nextKey]);
              const nextPending = Boolean(roadmapVotes.pending[nextKey]);

              return (
                <div className="rounded-xl border border-amber-500/55 bg-gradient-to-br from-[#1f1912] to-[#101829] p-4 flex flex-col justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <img
                      src={nextWiki?.iconUrl || '/banners/home/icons/portal_icon_087.webp'}
                      alt={nextWiki?.title || 'Silver Palace'}
                      className="h-16 w-16 rounded-xl border-2 border-amber-400/80 object-cover bg-[#090d16] shrink-0"
                    />
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="rounded bg-amber-400 px-2 py-0.5 text-[10.5px] font-black text-slate-950">
                          NEXT WIKI (#2) · UP NEXT
                        </span>
                        <span className="rounded border border-amber-500/40 bg-amber-950/60 px-2 py-0.5 text-[10.5px] font-extrabold text-amber-300">
                          {nextWiki?.launchWindow || 'Dec 14, 2026'}
                        </span>
                        <LiveJstCountdown
                          targetIso={nextWiki?.launchIso || '2026-12-14T00:00:00+09:00'}
                          prefix="Launch:"
                          compact
                        />
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                        {nextWiki?.title || 'Silver Palace'} ({nextWiki?.publisher || 'Elementa / Silver Studio'})
                      </h3>
                      <p className="text-[12.5px] text-[#dbe7f7] leading-relaxed">
                        {nextWiki?.roadmapReason ||
                          'Selected as Wiki #2 for maximum Day-1 global traffic: simultaneous worldwide English launch on Dec 14, 2026 across PC, PS5, iOS & Android.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-amber-500/20">
                    <span className="text-[11.5px] font-bold text-amber-200">
                      {nextWiki?.platform || 'Console / PC · Mobile'} · High Global Traffic Pick
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        disabled={nextVoted || nextPending}
                        onClick={() => handleVoteRoadmap(nextKey)}
                        className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[12px] font-black transition-colors ${
                          nextVoted
                            ? 'border-emerald-500/50 bg-emerald-500/20 text-emerald-300 cursor-default'
                            : 'border-amber-400/60 bg-amber-500/15 text-amber-200 hover:bg-amber-400 hover:text-slate-950'
                        }`}
                      >
                        <span>{nextVoted ? '✓ Prioritized' : '+1 Prioritize'}</span>
                        <span className="font-mono text-[11.5px]">({nextVotes.toLocaleString('en-US')})</span>
                      </button>
                      {nextWiki && (
                        <button
                          type="button"
                          onClick={() => setActiveWikiPlan(nextWiki)}
                          className="rounded-lg border border-[#334155] bg-[#161f33] hover:border-amber-400/60 px-3 py-1.5 text-[12px] font-extrabold text-white transition-colors"
                        >
                          Launch Plan
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Roadmap Status + Platform Filter Controls */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 border-y border-[#1e293b] py-2.5">
            <div className="flex flex-wrap items-center gap-1.5">
              {(
                [
                  { id: 'ALL', label: `All Roadmap (${strategyWikis.length})` },
                  { id: 'live', label: '1 Live Now' },
                  { id: 'next', label: '1 Up Next (#2)' },
                  { id: 'planned', label: `${Math.max(0, strategyWikis.length - 2)} Expansion Queue` },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedRoadmapFilter(tab.id)}
                  className={`rounded-lg px-2.5 py-1 text-[12px] font-extrabold transition-colors ${
                    selectedRoadmapFilter === tab.id
                      ? 'bg-[#2563eb] text-white'
                      : 'bg-[#161f33] text-[#e8eff8] hover:bg-[#1e293b]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {(['ALL', 'Mobile App', 'Console / PC'] as const).map((plat) => (
                <button
                  key={plat}
                  type="button"
                  onClick={() => setSelectedPlatform(plat)}
                  className={`rounded-lg px-2.5 py-1 text-[12px] font-bold transition-colors ${
                    selectedPlatform === plat
                      ? 'bg-[#0ea5e9] text-slate-950 font-black'
                      : 'bg-[#161f33] text-[#c8d4e6] hover:text-white'
                  }`}
                >
                  {plat === 'ALL' ? 'All Platforms' : plat}
                </button>
              ))}
            </div>
          </div>

          {/* Full Step-by-Step Game Expansion Queue */}
          {filteredWikis.length === 0 ? (
            <div className="rounded-lg border border-dashed border-[#334155] bg-[#0f1626] p-6 text-center text-[13px] text-[#c8d4e6]">
              No titles match the current roadmap filter or search query.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5">
              {filteredWikis.map((w, idx) => {
                const status = w.wikiStatus || (w.isInternal ? 'live' : 'planned');
                const wikiKey = w.id || w.title;
                const roadmapIndex =
                  strategyWikis.findIndex((item) => (item.id || item.title) === wikiKey) + 1 || idx + 1;
                const voteTotal = (w.baseVotes || 0) + (roadmapVotes.counts[wikiKey] || 0);
                const myVotedThis = Boolean(roadmapVotes.myVoted[wikiKey]);

                const cardFrameStyle =
                  status === 'live'
                    ? 'border-emerald-500/80 bg-[#0e2026] ring-1 ring-emerald-400/50 hover:border-emerald-300'
                    : status === 'next'
                    ? 'border-amber-500/80 bg-[#1f1912] ring-1 ring-amber-400/40 hover:border-amber-300'
                    : 'border-[#243049] bg-[#0f1626] hover:border-[#3b82f6]/70 hover:bg-[#141d31]';

                const statusPill =
                  status === 'live' ? (
                    <span className="rounded bg-emerald-500 px-1.5 py-0.5 text-[9.5px] font-black text-slate-950">
                      LIVE NOW
                    </span>
                  ) : status === 'next' ? (
                    <span className="rounded bg-amber-400 px-1.5 py-0.5 text-[9.5px] font-black text-slate-950">
                      NEXT #2
                    </span>
                  ) : (
                    <span className="rounded border border-[#334155] bg-[#161f33] px-1.5 py-0.5 font-mono text-[9.5px] font-extrabold text-[#93c5fd]">
                      QUEUE #{roadmapIndex}
                    </span>
                  );

                const subLabel =
                  status === 'live'
                    ? 'Active Strategy Wiki'
                    : w.launchWindow && w.launchWindow !== 'Expansion Queue'
                    ? w.launchWindow
                    : w.platform;

                const content = (
                  <div
                    className={`flex flex-col items-center justify-between rounded-lg border p-2.5 text-center transition-all h-full gap-1.5 ${cardFrameStyle}`}
                  >
                    <div className="w-full flex items-center justify-between gap-1">
                      {statusPill}
                      {(voteTotal > 0 || myVotedThis) && (
                        <span
                          className={`rounded px-1 py-0.5 font-mono text-[9.5px] font-extrabold ${
                            myVotedThis
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : 'bg-[#161f33] text-[#c8d4e6]'
                          }`}
                        >
                          ▲{voteTotal}
                        </span>
                      )}
                    </div>
                    <img
                      src={w.iconUrl}
                      alt={w.title}
                      className={`h-14 w-14 rounded-xl border object-cover bg-[#090d16] ${
                        status === 'live'
                          ? 'border-emerald-400'
                          : status === 'next'
                          ? 'border-amber-400'
                          : 'border-[#334155]'
                      }`}
                      loading="eager"
                    />
                    <div className="w-full space-y-0.5">
                      <div className="text-[12.5px] font-bold text-white line-clamp-2 leading-tight">
                        {w.title}
                      </div>
                      <div
                        className={`text-[10.5px] font-semibold truncate ${
                          status === 'live'
                            ? 'text-emerald-300'
                            : status === 'next'
                            ? 'text-amber-300'
                            : 'text-[#9fb3d1]'
                        }`}
                      >
                        {subLabel}
                      </div>
                    </div>
                  </div>
                );

                return status === 'live' ? (
                  <Link key={`${wikiKey}-${idx}`} href={w.href}>
                    {content}
                  </Link>
                ) : (
                  <button
                    key={`${wikiKey}-${idx}`}
                    type="button"
                    onClick={() => setActiveWikiPlan(w)}
                    className="text-left h-full"
                  >
                    {content}
                  </button>
                );
              })}
            </div>
          )}
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
                  <div className="text-[13.5px] font-bold text-white group-hover:text-[#60a5fa] leading-snug line-clamp-2">
                    {art.title}
                  </div>
                  <div className="text-[11.5px] font-extrabold text-[#93c5fd]">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-4 backdrop-blur-sm"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[88dvh] overflow-y-auto overscroll-contain rounded-xl border border-[#3b82f6] bg-[#111726] p-4 sm:p-5 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-[#1e293b] pb-3">
              <div>
                <div className="text-[11.5px] font-extrabold uppercase tracking-wider text-[#93c5fd]">
                  {ARTICLE_SUMMARIES[activeArticle.thumbUrl]?.category || 'Featured Strategy Guide'}
                </div>
                <h3 className="text-base sm:text-lg font-black text-white mt-0.5">
                  {activeArticle.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="rounded-lg border border-[#334155] bg-[#1e293b] px-2.5 py-1 text-[12.5px] font-extrabold text-white hover:bg-[#334155]"
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

            <p className="text-[13.5px] sm:text-[14.5px] text-[#e2e8f0] leading-relaxed">
              {ARTICLE_SUMMARIES[activeArticle.thumbUrl]?.summary}
            </p>

            {ARTICLE_SUMMARIES[activeArticle.thumbUrl]?.keyPoints && (
              <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-2">
                <div className="text-[12.5px] font-extrabold text-[#fbbf24]">
                  Key Strategy Checkpoints
                </div>
                <ul className="space-y-1.5 text-[13.5px] text-[#e8eff8]">
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
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] px-4 py-2 text-[13.5px] font-black text-white transition-colors"
              >
                <span>Open Star Savior Full Strategy Wiki →</span>
              </Link>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="rounded-lg border border-[#334155] bg-[#161f33] px-3.5 py-1.5 text-[12.5px] font-bold text-[#e8eff8] hover:text-white"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-4 backdrop-blur-sm"
          onClick={() => setActiveGameReview(null)}
        >
          <div
            className="w-full max-w-xl max-h-[88dvh] overflow-y-auto overscroll-contain rounded-xl border border-[#3b82f6] bg-[#111726] p-4 sm:p-5 shadow-2xl space-y-4"
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
                    <span className="rounded bg-[#2563eb] px-2 py-0.5 text-[11.5px] font-black text-white">
                      Rank #{activeGameReview.rank}
                    </span>
                    <span className="text-[12.5px] font-black text-[#fbbf24]">
                      ★ {activeGameReview.evaluation} / 5.0
                    </span>
                  </div>
                  <h3 className="text-base font-black text-white mt-1">{activeGameReview.title}</h3>
                  <div className="text-[12.5px] text-[#93c5fd]">{activeGameReview.genre}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveGameReview(null)}
                className="rounded-lg border border-[#334155] bg-[#1e293b] px-2.5 py-1 text-[12.5px] font-extrabold text-white hover:bg-[#334155]"
              >
                ✕ Close
              </button>
            </div>

            <div className="rounded bg-[#141c2e] border border-[#1e293b] p-3 text-[13.5px] font-bold text-white">
              {activeGameReview.outline}
            </div>

            {activeGameReview.points.length > 0 && (
              <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-2">
                <div className="text-[12.5px] font-extrabold text-[#fbbf24]">
                  Editorial Review Breakdown
                </div>
                <ul className="space-y-1.5 text-[13.5px] text-[#e8eff8]">
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
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] px-4 py-2 text-[13.5px] font-black text-white transition-colors"
              >
                <span>Explore Flagship Star Savior Wiki →</span>
              </Link>
              <button
                type="button"
                onClick={() => setActiveGameReview(null)}
                className="rounded-lg border border-[#334155] bg-[#161f33] px-3.5 py-1.5 text-[12.5px] font-bold text-[#e8eff8] hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Wiki Expansion Roadmap Plan Modal */}
      {activeWikiPlan && (() => {
        const planStatus = activeWikiPlan.wikiStatus || (activeWikiPlan.isInternal ? 'live' : 'planned');
        const planKey = activeWikiPlan.id || activeWikiPlan.title;
        const planVotes = (activeWikiPlan.baseVotes || 0) + (roadmapVotes.counts[planKey] || 0);
        const planVoted = Boolean(roadmapVotes.myVoted[planKey]);
        const planPending = Boolean(roadmapVotes.pending[planKey]);

        const badgeClass =
          planStatus === 'live'
            ? 'bg-emerald-500 text-slate-950'
            : planStatus === 'next'
            ? 'bg-amber-400 text-slate-950'
            : 'bg-[#2563eb] text-white';

        const badgeText =
          planStatus === 'live'
            ? 'LIVE WIKI · ACTIVE NOW'
            : planStatus === 'next'
            ? 'NEXT WIKI (#2) · IN PRODUCTION'
            : 'PLANNED EXPANSION WIKI';

        const plannedModules = [
          'Endgame & PvE/PvP Character Tier List + Synergy Breakdown',
          'Starter Reroll Guide, Banner Value Evaluations & Pity Planning',
          'Full Character / Equipment Database with Stat & Build Filters',
          'Active Promo Codes, Maintenance Timers & Patch Note Trackers',
        ];

        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
            onClick={() => setActiveWikiPlan(null)}
          >
            <div
              className="max-w-lg w-full rounded-xl border border-[#334155] bg-[#0f1626] p-5 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3 border-b border-[#1e293b] pb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={activeWikiPlan.iconUrl}
                    alt={activeWikiPlan.title}
                    className="h-14 w-14 rounded-xl border border-[#334155] object-cover shrink-0 bg-[#090d16]"
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className={`rounded px-2 py-0.5 text-[11px] font-black ${badgeClass}`}>
                        {badgeText}
                      </span>
                      {activeWikiPlan.launchWindow && (
                        <span className="rounded border border-[#334155] bg-[#161f33] px-2 py-0.5 font-mono text-[11px] font-bold text-[#c8d4e6]">
                          {activeWikiPlan.launchWindow}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-white mt-1">
                      {activeWikiPlan.title}
                    </h3>
                    <div className="text-[12px] font-semibold text-[#93c5fd]">
                      {activeWikiPlan.publisher || 'Featured Studio'} · {activeWikiPlan.platform}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveWikiPlan(null)}
                  className="rounded-lg border border-[#334155] bg-[#1e293b] px-2.5 py-1 text-[12.5px] font-extrabold text-white hover:bg-[#334155]"
                >
                  ✕ Close
                </button>
              </div>

              {activeWikiPlan.launchIso && (
                <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-amber-500/40 bg-[#1a1510] px-3 py-2">
                  <span className="text-[12px] font-extrabold text-amber-200">
                    Tracked Global Launch Window
                  </span>
                  <LiveJstCountdown
                    targetIso={activeWikiPlan.launchIso}
                    prefix="Launches in"
                  />
                </div>
              )}

              <div className="rounded-lg border border-[#1e293b] bg-[#141c2e] p-3 text-[13px] font-medium text-[#e8eff8] leading-relaxed">
                {activeWikiPlan.roadmapReason ||
                  `${activeWikiPlan.title} is scheduled in the Ascalon.fun strategy wiki expansion queue. Reader votes help prioritize full interactive database & tier list coverage.`}
              </div>

              <div className="rounded-lg border border-[#243049] bg-[#0b1120] p-3.5 space-y-2">
                <div className="text-[12px] font-extrabold text-[#93c5fd]">
                  {planStatus === 'live'
                    ? 'Active Strategy Wiki Modules'
                    : 'Planned Strategy Wiki Modules (Added Incrementally)'}
                </div>
                <ul className="space-y-1.5 text-[12.5px] text-[#dbe7f7]">
                  {plannedModules.map((mod) => (
                    <li key={mod} className="flex items-start gap-2">
                      <span className={planStatus === 'live' ? 'text-emerald-400 font-black' : 'text-amber-300 font-black'}>
                        {planStatus === 'live' ? '✓' : '•'}
                      </span>
                      <span>{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-[#1e293b]">
                {planStatus === 'live' ? (
                  <Link
                    href="/starsavior"
                    onClick={() => setActiveWikiPlan(null)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 px-4 py-2 text-[13px] font-black text-slate-950 transition-colors"
                  >
                    <span>Open Live Star Savior Wiki →</span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    disabled={planVoted || planPending}
                    onClick={() => handleVoteRoadmap(planKey)}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-[13px] font-black transition-colors ${
                      planVoted
                        ? 'border-emerald-500/50 bg-emerald-500/20 text-emerald-300 cursor-default'
                        : 'border-amber-400/70 bg-amber-400 hover:bg-amber-300 text-slate-950'
                    }`}
                  >
                    <span>{planVoted ? '✓ Voted for Next Wiki' : '+1 Vote to Prioritize This Wiki'}</span>
                    <span className="font-mono text-[12px]">({planVotes.toLocaleString('en-US')})</span>
                  </button>
                )}

                <div className="flex items-center gap-2">
                  <Link
                    href="/starsavior"
                    onClick={() => setActiveWikiPlan(null)}
                    className="rounded-lg border border-[#3b82f6]/50 bg-[#172542] hover:bg-[#1e3257] px-3 py-1.5 text-[12px] font-extrabold text-[#93c5fd] hover:text-white transition-colors"
                  >
                    Explore Live Star Savior Wiki →
                  </Link>
                  <button
                    type="button"
                    onClick={() => setActiveWikiPlan(null)}
                    className="rounded-lg border border-[#334155] bg-[#161f33] px-3 py-1.5 text-[12px] font-bold text-[#e8eff8] hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Footer */}
      <footer className="border-t border-[#1e293b] bg-[#070a12] py-6 text-center text-[12.5px] text-[#a8b8d0]">
        <div className="mx-auto max-w-[1280px] px-4 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div>
            <strong className="text-white">Ascalon.fun</strong> · Mobile Game Rankings, Release Schedule & Strategy Wiki Portal
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
            <Link href="/starsavior" className="text-[#93c5fd] hover:underline">
              Star Savior Strategy Wiki
            </Link>
            <Link href="/starsavior/tier-list" className="text-[#93c5fd] hover:underline">
              Star Savior Tier List
            </Link>
            <Link href="/starsavior/characters" className="text-[#93c5fd] hover:underline">
              59 Characters Database
            </Link>
            <Link href="/starsavior/arcana" className="text-[#93c5fd] hover:underline">
              85 Arcana Encyclopedia
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
