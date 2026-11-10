'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  AppMediaH2,
  AppMediaH3,
  AppMediaTierBadge,
} from '@/components/micro/AppMediaHeadings';

interface PortalGameEntry {
  slug: string;
  name: string;
  studio: string;
  genre: string;
  category: 'Turn-Based / Tactical' | 'Action / Open-World';
  status: 'LIVE WIKI' | 'ACTIVE HUB' | 'UPCOMING 2026' | 'CBT TRACKED';
  regionLabel: string;
  patchOrWindow: string;
  iconUrl: string;
  href?: string;
  summary: string;
  monetizationNote: string;
}

const PORTAL_GAMES: PortalGameEntry[] = [
  {
    slug: 'starsavior',
    name: 'Star Savior',
    studio: 'STUDIOBSIDE',
    genre: 'Turn-Based Command RPG',
    category: 'Turn-Based / Tactical',
    status: 'LIVE WIKI',
    regionLabel: 'Global & JP Simultaneous',
    patchOrWindow: 'v2.4 Live · Complete Wiki',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_starsavior.webp',
    href: '/starsavior',
    summary: 'Flagship Ascalon.gg 1:1 translated strategy wiki covering allplay modes, Rescue Journey training, Cosmo Gate, Operations, and Gauntlet.',
    monetizationNote: '4.0% Base SSR Rate (2.0% Pickup) · 200 Mileage Pity',
  },
  {
    slug: 'arknights-endfield',
    name: 'Arknights: Endfield',
    studio: 'Hypergryph / Mountain Contour',
    genre: '3D Real-Time Strategic Action & Factory RPG',
    category: 'Action / Open-World',
    status: 'UPCOMING 2026',
    regionLabel: 'Global / JP / KR / CN',
    patchOrWindow: '2026 Global Launch · Beta Complete',
    iconUrl: 'https://appmedia.jp/wp-content/uploads/2026/02/124645_td5i2.webp',
    summary: '4-operator real-time tactical party combat on Talos-II fused with automated AIC industrial base logistics and elemental combo chains.',
    monetizationNote: 'Character & Weapon Banner Split · Guaranteed Hard Pity',
  },
  {
    slug: 'neverness-to-everness',
    name: 'Neverness to Everness (NTE)',
    studio: 'Hotta Studio',
    genre: 'Supernatural Urban Open-World Action RPG',
    category: 'Action / Open-World',
    status: 'CBT TRACKED',
    regionLabel: 'Global / JP / CN (PC, PS5, Mobile)',
    patchOrWindow: 'Q3 2026 Window · UE5.4 CBT2',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_nte.webp',
    summary: 'Set in the anomaly-filled metropolis of Hethereau with seamless Esper character switching, urban sports car tuning, and paranormal boss raids.',
    monetizationNote: 'Zero-Weapon-Banner Rumored Model · Cosmetics & Esper Gacha',
  },
  {
    slug: 'stella-sora',
    name: 'Stella Sora',
    studio: 'Yostar',
    genre: 'Top-Down Fantasy Action Trekking RPG',
    category: 'Action / Open-World',
    status: 'UPCOMING 2026',
    regionLabel: 'Global / JP / EN',
    patchOrWindow: '2026 Global Release · Pre-Reg Open',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_stellasora.webp',
    summary: 'Lighthearted fantasy action RPG across the Nova Continent featuring roguelite monolith ascensions, musical artifact builds, and fast-paced squad synergy.',
    monetizationNote: 'Trekkers & Musical Record Gacha · F2P Friendly Spark System',
  },
  {
    slug: 'dragon-sword-awakening',
    name: 'Dragon Sword: Awakening',
    studio: 'Hound13 / Webzen',
    genre: 'Open-World Action Combat RPG',
    category: 'Action / Open-World',
    status: 'UPCOMING 2026',
    regionLabel: 'KR / Global (Unreal Engine 5)',
    patchOrWindow: '2026 Launch Window',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_dragonsword_awakening.webp',
    summary: 'Developed by the creators of Hundred Soul, delivering high-impact aerial juggle combos, mount exploration, and multi-phase dragon raids.',
    monetizationNote: 'Mercenary Squad Gacha · Skill-Based Dodge & Parry Focus',
  },
  {
    slug: 'final-fantasy-resonance',
    name: 'Final Fantasy Resonance',
    studio: 'Square Enix',
    genre: 'Tactical Command Fantasy RPG',
    category: 'Turn-Based / Tactical',
    status: 'UPCOMING 2026',
    regionLabel: 'JP / Global Announced',
    patchOrWindow: 'Late 2026 Window',
    iconUrl: 'https://appmedia.jp/wp-content/uploads/2026/09/155616_uk9n4.webp',
    summary: 'Next-generation tactical command RPG blending classic job resonance systems with modern turn-order manipulation and cooperative raid bosses.',
    monetizationNote: 'Job Memory & Weapon Gacha · 200-Pull Exchange',
  },
  {
    slug: 'bleach-mirrors-high',
    name: 'BLEACH Mirrors High',
    studio: 'Bandai Namco / KLab',
    genre: 'High-Speed Soul Reaper Action RPG',
    category: 'Action / Open-World',
    status: 'UPCOMING 2026',
    regionLabel: 'JP / Global Simultaneous',
    patchOrWindow: '2026 Release Radar',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/lib/bleach-mh/img/icon_bleach-mh.webp',
    summary: '3D cel-shaded Soul Reaper combat featuring Tite Kubo original character designs, instant Bankai state transformations, and Hueco Mundo boss rush.',
    monetizationNote: 'Character & Zanpakuto Spirit Link Gacha',
  },
  {
    slug: 'inazuma-eleven-cross',
    name: 'Inazuma Eleven Cross',
    studio: 'LEVEL-5',
    genre: 'Hyper-Dimensional Tactical Command RPG',
    category: 'Turn-Based / Tactical',
    status: 'CBT TRACKED',
    regionLabel: 'JP / Global Mobile & PC',
    patchOrWindow: '2026 Launch · Beta Tested',
    iconUrl: 'https://appmedia.jp/wp-content/uploads/2026/06/inazuma-cross_icon.webp',
    summary: 'Tactical formation command simulation where players assemble custom eleven-unit squads, chain elemental Hissatsu techniques, and compete in ranked leagues.',
    monetizationNote: 'Player Scout & Passive Emblem Gacha',
  },
  {
    slug: 'blue-archive',
    name: 'Blue Archive',
    studio: 'NEXON Games / Yostar',
    genre: 'Tactical Academy Command RPG',
    category: 'Turn-Based / Tactical',
    status: 'ACTIVE HUB',
    regionLabel: 'Global & JP Live',
    patchOrWindow: 'Total Assault & Grand Assault Meta',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_blue_archive.webp',
    summary: 'Real-time cover tactical RPG centered around Kivotos academies, featuring Striker/Special squad building for Torment/Lunatic Raid bosses.',
    monetizationNote: '3.0% SSR Rate (6.0% Fest) · 200 Recruitment Spark',
  },
  {
    slug: 'nikke',
    name: 'Goddess of Victory: Nikke',
    studio: 'SHIFT UP',
    genre: 'Sci-Fi Cover Shooter RPG',
    category: 'Action / Open-World',
    status: 'ACTIVE HUB',
    regionLabel: 'Global / JP / KR Simultaneous',
    patchOrWindow: 'Solo Raid & Anomaly Interception',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_nikke.webp',
    summary: 'Fast-paced Burst I–II–III squad shooter featuring Pilgrim/Overspec meta units, Overload gear optimization, and Union/Solo Raid rankings.',
    monetizationNote: '4.0% SSR Rate · Permanent Gold Mileage Ticket Carryover',
  },
  {
    slug: 'heaven-burns-red',
    name: 'Heaven Burns Red',
    studio: 'Wright Flyer Studios / Key',
    genre: 'Dramatic Turn-Based Command RPG',
    category: 'Turn-Based / Tactical',
    status: 'ACTIVE HUB',
    regionLabel: 'Global (Yostar) & JP Live',
    patchOrWindow: 'Score Attack & Anachrony Meta',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_heavenburnsred.webp',
    summary: 'Jun Maeda narrative masterpiece featuring 6-unit vanguard/rearguard SP rotation, Overdrive gauge stacking, and elemental field setters.',
    monetizationNote: '3.0% SS Memorias · Step-Up & Quartz Spark',
  },
  {
    slug: 'fate-grand-order',
    name: 'Fate/Grand Order',
    studio: 'LASENGLE / TYPE-MOON',
    genre: 'Command Card Turn-Based RPG',
    category: 'Turn-Based / Tactical',
    status: 'ACTIVE HUB',
    regionLabel: 'JP & Global (NA) Live',
    patchOrWindow: '100M DL Campaign & 90++ Farming',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_fategrandorder.webp',
    summary: 'The industry benchmark command-card RPG featuring Buster/Arts/Quick looping systems, Grand Servant boss encounters, and Class Score boards.',
    monetizationNote: '1.0% SSR Servant Rate · 330-Pull Pity',
  },
  {
    slug: 'arknights',
    name: 'Arknights',
    studio: 'Hypergryph / Yostar',
    genre: 'Tactical Tower Defense RPG',
    category: 'Turn-Based / Tactical',
    status: 'ACTIVE HUB',
    regionLabel: 'Global / JP / CN Live',
    patchOrWindow: 'Integrated Strategies & Contingency Contract',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_ark_nights.webp',
    summary: 'Deep strategic operator deployment RPG featuring Integrated Strategies roguelite modes, Operator Modules, and high-risk endgame stages.',
    monetizationNote: '2.0% 6★ Rate with Soft Pity + Cert Shop Exchanges',
  },
  {
    slug: 'g-generation-eternal',
    name: 'SD Gundam G Generation Eternal',
    studio: 'Bandai Namco Entertainment',
    genre: 'Tactical Grid Mecha SRPG',
    category: 'Turn-Based / Tactical',
    status: 'ACTIVE HUB',
    regionLabel: 'Global & JP Simultaneous',
    patchOrWindow: 'Eternal Road Endgame Meta',
    iconUrl: 'https://appmedia.jp/wp-content/uploads/2025/06/133201_0zgeo.webp',
    summary: 'Turn-based grid strategy across 70+ Gundam works featuring Mobile Suit development trees, Warship support links, and Chance Step chains.',
    monetizationNote: 'UR Unit & Pilot Gacha + Free Development Tree SSRs',
  },
  {
    slug: 'wizardry-variants-daphne',
    name: 'Wizardry Variants Daphne',
    studio: 'Drecom',
    genre: '3D First-Person Dungeon Crawler RPG',
    category: 'Turn-Based / Tactical',
    status: 'ACTIVE HUB',
    regionLabel: 'Global & JP (Mobile / Steam PC)',
    patchOrWindow: 'Abyss Depths & Mausoleum Meta',
    iconUrl: 'https://appmedia.jp/wp-content/uploads/2025/10/wizdaphne_icon.webp',
    summary: 'Hardcore dark-fantasy dungeon crawler with permadeath fortitude mechanics, Right Hand of Reversal trap solving, and class-change inheritance.',
    monetizationNote: 'Legendary Adventurer Remains · Skill Inheritance System',
  },
  {
    slug: 'master-duel',
    name: 'Yu-Gi-Oh! Master Duel',
    studio: 'Konami Digital Entertainment',
    genre: 'Competitive Tactical Card Game',
    category: 'Turn-Based / Tactical',
    status: 'ACTIVE HUB',
    regionLabel: 'Global Simultaneous (Cross-Platform)',
    patchOrWindow: 'Duelist Cup & Master I Banlist',
    iconUrl: 'https://appmedia.jp/wp-content/uploads/2026/05/icon_master_duel.webp',
    summary: 'Official competitive digital TCG platform featuring monthly Selection Packs, UR dust crafting economy, and global World Championship qualifiers.',
    monetizationNote: 'Universal 3-to-1 UR Card Crafting · High F2P Viability',
  },
];

const UPCOMING_GACHA_RANKS = [
  {
    rank: 1,
    tier: 'SSS' as const,
    score: '9.9',
    name: 'Arknights: Endfield',
    studio: 'Hypergryph / Mountain Contour',
    iconUrl: 'https://appmedia.jp/wp-content/uploads/2026/02/124645_td5i2.webp',
    genre: '3D Real-Time Tactical Action & AIC Factory RPG',
    window: '2026 Global Simultaneous (PC / PS5 / Mobile)',
    betaStatus: 'Global Technical & Closed Beta Completed',
    verdict: 'Combines crisp 4-operator active on-field squad combat with addictive Factorio-style automated industrial base building on Talos-II. Highest production polish of 2026.',
  },
  {
    rank: 2,
    tier: 'SSS' as const,
    score: '9.8',
    name: 'Neverness to Everness (NTE)',
    studio: 'Hotta Studio',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_nte.webp',
    genre: 'Supernatural Urban Open-World RPG (UE5.4)',
    window: 'Q3 2026 Global / JP / CN',
    betaStatus: 'CBT2 Completed · Pre-Registration Live',
    verdict: 'Seamless interior-to-exterior urban exploration in Hethereau, street racing customization, apartment housing, and flashy Anomaly chain reactions.',
  },
  {
    rank: 3,
    tier: 'SS' as const,
    score: '9.6',
    name: 'Stella Sora',
    studio: 'Yostar',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_stellasora.webp',
    genre: 'Top-Down Fantasy Roguelite Action RPG',
    window: '2026 Global / JP Launch',
    betaStatus: 'Global Pre-Registration Open',
    verdict: 'Vibrant cel-shaded aesthetics with snappy isometric action combat and deep roguelite Monolith build variety designed for fast daily play.',
  },
  {
    rank: 4,
    tier: 'SS' as const,
    score: '9.5',
    name: 'Dragon Sword: Awakening',
    studio: 'Hound13 / Webzen',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_dragonsword_awakening.webp',
    genre: 'Open-World Action Combat RPG (UE5)',
    window: '2026 KR & Global Release',
    betaStatus: 'G-Star Showcase & Focus Test Complete',
    verdict: 'Best-in-class heavy hitstop, aerial tag-team juggles, and dynamic mount traversal from the veteran action combat team behind Hundred Soul.',
  },
  {
    rank: 5,
    tier: 'S' as const,
    score: '9.3',
    name: 'Final Fantasy Resonance',
    studio: 'Square Enix',
    iconUrl: 'https://appmedia.jp/wp-content/uploads/2026/09/155616_uk9n4.webp',
    genre: 'Tactical Turn-Based Command RPG',
    window: 'Late 2026 Release Window',
    betaStatus: 'Media Preview & Closed Test Phase',
    verdict: 'Modernized turn-timeline tactical combat with classic Final Fantasy job switching, summon resonance bursts, and zero auto-play stat bloat.',
  },
  {
    rank: 6,
    tier: 'S' as const,
    score: '9.1',
    name: 'BLEACH Mirrors High',
    studio: 'Bandai Namco',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/lib/bleach-mh/img/icon_bleach-mh.webp',
    genre: '3D High-Speed Arena Action RPG',
    window: '2026 Global & JP Window',
    betaStatus: 'Official Key Art & Trailer Revealed',
    verdict: 'Supervised directly by Tite Kubo, delivering console-grade cel-shaded Flash Step counters and cinematic Bankai finishers.',
  },
  {
    rank: 7,
    tier: 'A' as const,
    score: '8.9',
    name: 'Inazuma Eleven Cross',
    studio: 'LEVEL-5',
    iconUrl: 'https://appmedia.jp/wp-content/uploads/2026/06/inazuma-cross_icon.webp',
    genre: 'Tactical Squad Command Simulation RPG',
    window: '2026 Mobile & PC Release',
    betaStatus: 'Closed Beta Test Concluded',
    verdict: 'Deep AI tactical instructions and elemental chain-shot synergies tailored for competitive PvP and club tournament play.',
  },
];

const INDUSTRY_NEWS = [
  {
    id: 'news-1',
    category: 'Upcoming Gacha & CBTs',
    badge: 'CBT REPORT',
    date: '2026/11/10',
    title: 'Arknights: Endfield Global Beta Combat & AIC Factory Overhaul — Full Systems Analysis',
    summary: 'Hypergryph significantly sped up dodge-counter SP generation, refined 4-operator combo QTE triggers, and streamlined blueprint sharing for automated Talos-II factory lines.',
    gameName: 'Arknights: Endfield',
    iconUrl: 'https://appmedia.jp/wp-content/uploads/2026/02/124645_td5i2.webp',
  },
  {
    id: 'news-2',
    category: 'Major Version Updates',
    badge: 'WIKI UPDATE',
    date: '2026/11/10',
    title: 'Star Savior v2.4 Global/JP Synchronization & Cosmo Gate Season 7 Meta Report',
    summary: 'Complete English database update on Ascalon.gg covering the new Sun Supporter release, Cosmo Gate Season 7 boss mechanics, and Rescue Journey Hard Mode stat thresholds.',
    gameName: 'Star Savior',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_starsavior.webp',
    href: '/starsavior',
  },
  {
    id: 'news-3',
    category: 'Upcoming Gacha & CBTs',
    badge: 'ENGINE TECH',
    date: '2026/11/09',
    title: 'Neverness to Everness (NTE) Showcases UE5.4 Weather Anomalies & Zero-Loading Interior Seamlessness',
    summary: 'Hotta Studio demonstrated seamless transition between street-level vehicle chases and multi-story anomaly dungeons in Hethereau with DLSS 3.7 and mobile frame-gen support.',
    gameName: 'Neverness to Everness',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_nte.webp',
  },
  {
    id: 'news-4',
    category: 'Global Localization Radar',
    badge: 'PRE-REG OPEN',
    date: '2026/11/08',
    title: 'Yostar Opens Global Pre-Registration for Stella Sora With Simultaneous EN/JP/KR PC Client',
    summary: 'Stella Sora confirms a dedicated 120 FPS native Windows PC launcher at launch alongside cross-save mobile progression and milestone recruitment rewards.',
    gameName: 'Stella Sora',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_stellasora.webp',
  },
  {
    id: 'news-5',
    category: 'Major Version Updates',
    badge: 'MILESTONE',
    date: '2026/11/07',
    title: 'Fate/Grand Order Celebrates 100M Worldwide Downloads With Free 5★ SSR Servant Ticket & Quartz Missions',
    summary: 'Players across JP and Global servers can claim a permanent 5★ SSR Servant Exchange Ticket and up to 60 Saint Quartz through limited-time Master Missions.',
    gameName: 'Fate/Grand Order',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_fategrandorder.webp',
  },
  {
    id: 'news-6',
    category: 'Global Localization Radar',
    badge: 'INDUSTRY SHIFT',
    date: '2026/11/06',
    title: '2026 Gacha Monetization Report: Why Upcoming Flagship RPGs Are Abandoning 50/50 Weapon Banners',
    summary: 'A cross-market breakdown of how next-gen 2026 gacha titles are shifting toward guaranteed 100% first-copy banners and cosmetic skin monetization to retain PC/console players.',
    gameName: 'Dragon Sword: Awakening',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_dragonsword_awakening.webp',
  },
];

const MARKET_POWER_RANKINGS = [
  {
    rank: 1,
    name: 'Fate/Grand Order',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_fategrandorder.webp',
    regionStrength: 'JP #1 · Global Top 5',
    monthlyTrend: '$42M+ Est. (JP+GL)',
    f2pRating: '★★★★☆',
    dailyTime: '5–8 Mins (3-Turn Loop)',
    endgameMode: '90++ Event Nodes & Grand Battles',
  },
  {
    rank: 2,
    name: 'Goddess of Victory: Nikke',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_nikke.webp',
    regionStrength: 'JP / KR / Global Top 3',
    monthlyTrend: '$34M+ Est. (Global)',
    f2pRating: '★★★★★',
    dailyTime: '10 Mins (Quick Advise & Sim)',
    endgameMode: 'Solo Raid, Union Raid & Anomaly',
  },
  {
    rank: 3,
    name: 'Blue Archive',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_blue_archive.webp',
    regionStrength: 'JP / KR #1 Tactical RPG',
    monthlyTrend: '$26M+ Est. (JP+GL)',
    f2pRating: '★★★★★',
    dailyTime: '5 Mins (Instant Sweep)',
    endgameMode: 'Total Assault & Grand Assault (Lunatic)',
  },
  {
    rank: 4,
    name: 'Star Savior',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_starsavior.webp',
    regionStrength: 'Fastest Growing Turn-Based RPG',
    monthlyTrend: '$18M+ Est. (Rising)',
    f2pRating: '★★★★★',
    dailyTime: '8 Mins (NOA Funds & Sweep)',
    endgameMode: 'Cosmo Gate, Rescue Journey Hard & Gauntlet',
    href: '/starsavior',
  },
  {
    rank: 5,
    name: 'SD Gundam G Generation Eternal',
    iconUrl: 'https://appmedia.jp/wp-content/uploads/2025/06/133201_0zgeo.webp',
    regionStrength: 'JP & Asia Top Mecha SRPG',
    monthlyTrend: '$16M+ Est.',
    f2pRating: '★★★★☆',
    dailyTime: '10 Mins (Auto Sortie)',
    endgameMode: 'Eternal Road High-Difficulty Stages',
  },
  {
    rank: 6,
    name: 'Arknights',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_ark_nights.webp',
    regionStrength: 'CN / JP / Global Strategy Leader',
    monthlyTrend: '$15M+ Est.',
    f2pRating: '★★★★★',
    dailyTime: '10 Mins (6x Auto-Deploy Queue)',
    endgameMode: 'Integrated Strategies #5 & Pinch-Out',
  },
  {
    rank: 7,
    name: 'Heaven Burns Red',
    iconUrl: 'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_heavenburnsred.webp',
    regionStrength: 'JP & Global Top Story RPG',
    monthlyTrend: '$12M+ Est.',
    f2pRating: '★★★★☆',
    dailyTime: '6 Mins (Offline Arena Auto)',
    endgameMode: 'Score Attack, Anachrony & Astrarium',
  },
  {
    rank: 8,
    name: 'Wizardry Variants Daphne',
    iconUrl: 'https://appmedia.jp/wp-content/uploads/2025/10/wizdaphne_icon.webp',
    regionStrength: 'Steam PC & Mobile Breakout Hit',
    monthlyTrend: '$11M+ Est.',
    f2pRating: '★★★★☆',
    dailyTime: '12 Mins (Dispatch & Abyss)',
    endgameMode: 'Abyss B8F+, Mausoleum & Grade Exams',
  },
];

export function AscalonHomeMacro() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [newsCategory, setNewsCategory] = useState<string>('ALL');
  const [selectedGameSlug, setSelectedGameSlug] = useState<string>('arknights-endfield');

  const filteredGames = useMemo(() => {
    return PORTAL_GAMES.filter((g) => {
      if (statusFilter === 'LIVE' && g.status !== 'LIVE WIKI' && g.status !== 'ACTIVE HUB') return false;
      if (statusFilter === 'UPCOMING' && g.status !== 'UPCOMING 2026' && g.status !== 'CBT TRACKED') return false;
      if (statusFilter === 'TACTICAL' && g.category !== 'Turn-Based / Tactical') return false;
      if (statusFilter === 'ACTION' && g.category !== 'Action / Open-World') return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return (
          g.name.toLowerCase().includes(q) ||
          g.studio.toLowerCase().includes(q) ||
          g.genre.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [searchQuery, statusFilter]);

  const filteredNews = useMemo(() => {
    if (newsCategory === 'ALL') return INDUSTRY_NEWS;
    return INDUSTRY_NEWS.filter((n) => n.category === newsCategory);
  }, [newsCategory]);

  const selectedGame = useMemo(
    () => PORTAL_GAMES.find((g) => g.slug === selectedGameSlug) || PORTAL_GAMES[1],
    [selectedGameSlug]
  );

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#0b0f17] text-[#e6edf3]">
      {/* Sticky Ascalon.gg Global Portal Header */}
      <header className="sticky top-0 z-50 border-b border-[#243049] bg-[#0e1117]/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1240px] px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3.5 group">
            <img
              src="/brand/ascalon-logo.png"
              alt="Ascalon.gg Emblem"
              width={48}
              height={48}
              className="h-12 w-12 rounded-xl border-2 border-[#60a5fa] object-cover shadow-[0_0_14px_rgba(59,130,246,0.45)]"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[19px] font-black tracking-wide text-white group-hover:text-[#60a5fa] transition-colors">
                  ASCALON
                </span>
                <span className="rounded border border-[#3b82f6]/60 bg-[#2563eb]/30 px-1.5 py-0.5 text-[11px] font-black text-[#60a5fa]">
                  .GG
                </span>
                <span className="ml-1 hidden sm:inline-block rounded bg-[#10b981]/15 border border-[#10b981]/40 px-2 py-0.5 text-[10px] font-extrabold text-[#34d399]">
                  GLOBAL GACHA NETWORK
                </span>
              </div>
              <div className="text-[11px] font-semibold text-[#94a3b8]">
                Multi-Game Strategy Wikis · Upcoming Gacha Ranks · Industry Release Radar
              </div>
            </div>
          </Link>

          <nav className="flex items-center gap-1.5 flex-wrap">
            {[
              { label: 'Home', href: '#top', primary: true },
              { label: 'Games Directory (16)', href: '#supported-games', primary: false },
              { label: 'Future Gacha Ranks', href: '#upcoming-gacha-ranks', primary: false },
              { label: 'Gacha News Radar', href: '#gacha-news', primary: false },
              { label: 'Global Market Ranks', href: '#market-rankings', primary: false },
            ].map((nav) => (
              <a
                key={nav.href}
                href={nav.href}
                className={`rounded-md px-3 py-1.5 text-[12px] font-bold transition-colors ${
                  nav.primary
                    ? 'bg-[#2563eb] text-white border border-[#3b82f6]'
                    : 'bg-[#161f33] text-[#cbd5e1] border border-[#243049] hover:bg-[#1e2b45] hover:text-white'
                }`}
              >
                {nav.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Portal Container */}
      <main className="mx-auto w-full max-w-[1240px] flex-1 px-4 py-5 space-y-6">
        {/* Hero Command Banner */}
        <section className="relative overflow-hidden rounded-xl border border-[#243049] bg-gradient-to-br from-[#111726] via-[#0f1626] to-[#0b101b] p-5 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3.5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/40 bg-[#2563eb]/15 px-3 py-1 text-[11px] font-extrabold text-[#93c5fd]">
                <span className="h-2 w-2 rounded-full bg-[#34d399]" />
                <span>ASCALON.GG MULTI-GAME STRATEGY & UPCOMING GACHA INTELLIGENCE</span>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="/brand/ascalon-logo.png"
                  alt="Ascalon.gg Crest"
                  width={92}
                  height={92}
                  className="h-[76px] w-[76px] sm:h-[92px] sm:w-[92px] rounded-2xl border-2 border-[#60a5fa] object-cover shrink-0 shadow-[0_0_22px_rgba(59,130,246,0.45)]"
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                    ASCALON<span className="text-[#60a5fa]">.GG</span> — Gacha Games Portal, Future Ranks & News
                  </h1>
                  <p className="mt-1.5 text-[13px] text-[#cbd5e1] leading-relaxed">
                    Your central command hub for live gacha strategy wikis, upcoming 2026–2027 gacha anticipation rankings, Closed Beta (CBT) combat reports, and global market power charts. Select a game below to enter its dedicated wiki or inspect upcoming release intelligence.
                  </p>
                </div>
              </div>

              {/* Game Directory Search Bar */}
              <div className="pt-1 flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 16 Supported & Upcoming Gacha Games by title, studio (Hypergryph, Yostar, STUDIOBSIDE), or genre..."
                  className="flex-1 rounded-lg border-2 border-[#2d3f5e] bg-[#090d16] px-4 py-2.5 text-[13px] font-semibold text-white placeholder-[#64748b] focus:border-[#3b82f6] focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="rounded-lg bg-[#1e293b] px-4 py-2 text-[12px] font-bold text-[#cbd5e1] hover:text-white"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Network Telemetry Box */}
            <div className="lg:col-span-4 rounded-xl border border-[#263452] bg-[#0b101b] p-4 space-y-3">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#93c5fd] border-b border-[#1e293b] pb-2">
                Ascalon.gg Portal Telemetry
              </div>
              <div className="grid grid-cols-2 gap-2.5 text-center">
                <div className="rounded-lg border border-[#1e293b] bg-[#111726] p-2.5">
                  <div className="text-[18px] font-black text-[#60a5fa]">16</div>
                  <div className="text-[10px] font-bold text-[#94a3b8]">Tracked Gacha Titles</div>
                </div>
                <div className="rounded-lg border border-[#1e293b] bg-[#111726] p-2.5">
                  <div className="text-[18px] font-black text-[#34d399]">9 Live</div>
                  <div className="text-[10px] font-bold text-[#94a3b8]">Active Service Hubs</div>
                </div>
                <div className="rounded-lg border border-[#1e293b] bg-[#111726] p-2.5">
                  <div className="text-[18px] font-black text-[#fbbf24]">7 Upcoming</div>
                  <div className="text-[10px] font-bold text-[#94a3b8]">2026–2027 Flagships</div>
                </div>
                <div className="rounded-lg border border-[#1e293b] bg-[#111726] p-2.5">
                  <div className="text-[18px] font-black text-[#f87171]">JP / KR / GL</div>
                  <div className="text-[10px] font-bold text-[#94a3b8]">Cross-Server Radar</div>
                </div>
              </div>
              <div className="rounded-lg border border-[#1e293b] bg-[#111726] p-2.5 text-[11px] text-[#cbd5e1] flex items-center justify-between">
                <span>Flagship Complete Wiki: <strong className="text-white">Star Savior</strong></span>
                <Link href="/starsavior" className="font-extrabold text-[#60a5fa] hover:underline">
                  Open Wiki →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Supported & Upcoming Gacha Games Directory (16 Games) */}
        <section id="supported-games" className="rounded-lg border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-4 scroll-mt-20">
          <AppMediaH2 badge={`${filteredGames.length} GAMES`}>
            Supported & Tracked Gacha Games Directory
          </AppMediaH2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[#243049] bg-[#0f1626] p-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { key: 'ALL', label: `All Games (${PORTAL_GAMES.length})` },
                { key: 'LIVE', label: 'Live Service Games (9)' },
                { key: 'UPCOMING', label: 'Upcoming 2026–2027 Gacha (7)' },
                { key: 'TACTICAL', label: 'Turn-Based & Tactical RPG' },
                { key: 'ACTION', label: 'Open-World & Action RPG' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setStatusFilter(tab.key)}
                  className={`rounded px-3 py-1.5 text-[11px] font-bold transition-colors ${
                    statusFilter === tab.key
                      ? 'bg-[#2563eb] text-white border border-[#3b82f6]'
                      : 'bg-[#161f33] text-[#cbd5e1] border border-[#243049] hover:bg-[#1e2b45]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <span className="text-[11px] font-semibold text-[#94a3b8]">
              Click <strong className="text-white">Star Savior</strong> to enter its full wiki, or click any game to inspect its intelligence dossier below.
            </span>
          </div>

          {/* 16-Game Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {filteredGames.map((g) => {
              const isFlagship = g.status === 'LIVE WIKI';
              const isUpcoming = g.status === 'UPCOMING 2026' || g.status === 'CBT TRACKED';
              const isSelected = selectedGame.slug === g.slug;

              const CardInner = (
                <div
                  className={`h-full flex flex-col justify-between rounded-lg border p-3.5 transition-all ${
                    isFlagship
                      ? 'border-[#3b82f6] bg-gradient-to-b from-[#162238] to-[#0f1626] hover:border-[#60a5fa]'
                      : isSelected
                      ? 'border-[#60a5fa] bg-[#152036]'
                      : 'border-[#243049] bg-[#0f1626] hover:border-[#3b82f6]/70 hover:bg-[#131d31]'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3">
                      <img
                        src={g.iconUrl}
                        alt={g.name}
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-xl border border-[#334155] object-cover shrink-0 bg-[#090d16]"
                        loading="eager"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`inline-block rounded px-1.5 py-0.5 text-[9px] font-black uppercase ${
                              isFlagship
                                ? 'bg-[#2563eb] text-white'
                                : isUpcoming
                                ? 'bg-[#f59e0b]/20 text-[#fbbf24] border border-[#f59e0b]/40'
                                : 'bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/30'
                            }`}
                          >
                            {g.status}
                          </span>
                        </div>
                        <div className="mt-1 text-[13px] font-black text-white truncate">{g.name}</div>
                        <div className="text-[10px] font-bold text-[#93c5fd] truncate">{g.studio}</div>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#cbd5e1] leading-relaxed line-clamp-2">
                      {g.summary}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#1e293b] flex items-center justify-between text-[10px]">
                    <span className="font-semibold text-[#94a3b8] truncate">{g.genre}</span>
                    <span className="font-extrabold text-[#60a5fa] shrink-0">
                      {g.href ? 'Enter Wiki →' : 'View Dossier ↓'}
                    </span>
                  </div>
                </div>
              );

              if (g.href) {
                return (
                  <Link key={g.slug} href={g.href} className="block h-full">
                    {CardInner}
                  </Link>
                );
              }

              return (
                <button
                  key={g.slug}
                  type="button"
                  onClick={() => setSelectedGameSlug(g.slug)}
                  className="block h-full text-left"
                >
                  {CardInner}
                </button>
              );
            })}
          </div>

          {/* Interactive Selected Game Intelligence Dossier Bar */}
          <div className="rounded-lg border border-[#3b82f6]/50 bg-[#0b101b] p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <img
                src={selectedGame.iconUrl}
                alt={selectedGame.name}
                width={64}
                height={64}
                className="h-16 w-16 rounded-xl border-2 border-[#3b82f6] object-cover shrink-0"
              />
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[15px] font-black text-white">{selectedGame.name}</span>
                  <span className="rounded bg-[#161f33] border border-[#263452] px-2 py-0.5 text-[10px] font-extrabold text-[#93c5fd]">
                    {selectedGame.studio}
                  </span>
                  <span className="rounded bg-[#161f33] border border-[#263452] px-2 py-0.5 text-[10px] font-bold text-[#fbbf24]">
                    {selectedGame.patchOrWindow}
                  </span>
                </div>
                <p className="text-[12px] text-[#cbd5e1]">{selectedGame.summary}</p>
                <div className="text-[11px] font-semibold text-[#94a3b8]">
                  <strong className="text-[#93c5fd]">Gacha & Monetization Model:</strong> {selectedGame.monetizationNote} · <strong className="text-[#93c5fd]">Regions:</strong> {selectedGame.regionLabel}
                </div>
              </div>
            </div>
            <div className="shrink-0">
              {selectedGame.href ? (
                <Link
                  href={selectedGame.href}
                  className="inline-block rounded-lg bg-[#2563eb] px-4 py-2 text-[12px] font-black text-white hover:bg-[#1d4ed8]"
                >
                  Launch Full Wiki →
                </Link>
              ) : (
                <a
                  href="#upcoming-gacha-ranks"
                  className="inline-block rounded-lg bg-[#161f33] border border-[#3b82f6]/50 px-3.5 py-2 text-[11px] font-extrabold text-[#93c5fd] hover:bg-[#1e2b45]"
                >
                  See Hype Ranking ↓
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Section 2: Future Coming Gacha Hype & Anticipation Rankings (2026–2027) */}
        <section id="upcoming-gacha-ranks" className="rounded-lg border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-4 scroll-mt-20">
          <AppMediaH2 badge="2026–2027 RADAR">
            Future Coming Gacha Rankings — Most Anticipated Upcoming Releases
          </AppMediaH2>
          <p className="text-[12px] text-[#cbd5e1] leading-relaxed">
            Our editorial ranking of the most anticipated upcoming gacha games scheduled for 2026–2027 across Global, Japan, and Korea. Evaluated on Closed Beta (CBT) combat depth, engine optimization, F2P gacha generosity, and endgame longevity.
          </p>

          <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
            <table className="w-full border-collapse text-left text-[12px]">
              <thead>
                <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold uppercase text-[#94a3b8]">
                  <th className="w-24 px-3 py-2.5 text-center border-r border-[#243049]">Hype Rank</th>
                  <th className="w-64 px-3.5 py-2.5 border-r border-[#243049]">Upcoming Game & Studio</th>
                  <th className="w-52 px-3.5 py-2.5 border-r border-[#243049]">Release Window & CBT Status</th>
                  <th className="px-3.5 py-2.5">Combat System & Editorial Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e293b]">
                {UPCOMING_GACHA_RANKS.map((item) => (
                  <tr key={item.rank} className="hover:bg-[#141d30] transition-colors">
                    <td className="p-3 text-center border-r border-[#1e293b] space-y-1">
                      <div className="text-[11px] font-black text-[#94a3b8]">#{item.rank}</div>
                      <div><AppMediaTierBadge tier={item.tier} size="sm" /></div>
                      <div className="text-[11px] font-black text-[#60a5fa]">{item.score} / 10</div>
                    </td>
                    <td className="p-3 border-r border-[#1e293b]">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.iconUrl}
                          alt={item.name}
                          width={52}
                          height={52}
                          className="h-[52px] w-[52px] rounded-xl border border-[#334155] object-cover shrink-0 bg-[#090d16]"
                          loading="eager"
                        />
                        <div>
                          <div className="text-[13px] font-black text-white">{item.name}</div>
                          <div className="text-[11px] font-bold text-[#93c5fd]">{item.studio}</div>
                          <div className="text-[10px] text-[#94a3b8]">{item.genre}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 border-r border-[#1e293b] space-y-1">
                      <div className="font-extrabold text-[#fbbf24] text-[11px]">{item.window}</div>
                      <div className="inline-block rounded bg-[#161f33] border border-[#263452] px-2 py-0.5 text-[10px] font-semibold text-[#cbd5e1]">
                        {item.betaStatus}
                      </div>
                    </td>
                    <td className="p-3.5 text-[#e2e8f0] leading-relaxed">
                      {item.verdict}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Gacha Industry News, CBT Reports & Global Patch Radar */}
        <section id="gacha-news" className="rounded-lg border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-4 scroll-mt-20">
          <AppMediaH2 badge="DAILY FEED">
            Gacha Industry News, CBT Reports & Global Patch Radar
          </AppMediaH2>

          {/* News Category Filter Bar */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { key: 'ALL', label: 'All Industry News' },
              { key: 'Upcoming Gacha & CBTs', label: 'Upcoming Gacha & CBTs' },
              { key: 'Major Version Updates', label: 'Major Version Updates' },
              { key: 'Global Localization Radar', label: 'Global Localization Radar' },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setNewsCategory(tab.key)}
                className={`rounded px-3 py-1.5 text-[11px] font-bold transition-colors ${
                  newsCategory === tab.key
                    ? 'bg-[#2563eb] text-white border border-[#3b82f6]'
                    : 'bg-[#161f33] text-[#cbd5e1] border border-[#243049] hover:bg-[#1e2b45]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredNews.map((n) => (
              <div
                key={n.id}
                className="flex flex-col justify-between rounded-lg border border-[#243049] bg-[#0f1626] p-4 space-y-3 hover:border-[#3b82f6]/60 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={n.iconUrl}
                        alt={n.gameName}
                        width={28}
                        height={28}
                        className="h-7 w-7 rounded-md border border-[#334155] object-cover"
                        loading="eager"
                      />
                      <span className="text-[11px] font-extrabold text-[#93c5fd]">{n.gameName}</span>
                      <span className="rounded bg-[#2563eb]/25 border border-[#3b82f6]/40 px-1.5 py-0.5 text-[9px] font-black text-[#60a5fa]">
                        {n.badge}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#64748b]">{n.date}</span>
                  </div>

                  <h3 className="text-[14px] font-black text-white leading-snug">
                    {n.title}
                  </h3>
                  <p className="text-[12px] text-[#cbd5e1] leading-relaxed">
                    {n.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#1e293b] flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-[#94a3b8]">{n.category}</span>
                  {n.href ? (
                    <Link href={n.href} className="font-extrabold text-[#60a5fa] hover:underline">
                      Read Full Strategy Report →
                    </Link>
                  ) : (
                    <span className="font-bold text-[#93c5fd]">Ascalon.gg Editorial Desk</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Global Gacha Market Power Rankings (Revenue, F2P Index & Daily Time) */}
        <section id="market-rankings" className="rounded-lg border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-4 scroll-mt-20">
          <AppMediaH2 badge="MARKET INDEX">
            Global Gacha Power Rankings — Monthly Revenue, F2P Index & Endgame Meta
          </AppMediaH2>
          <p className="text-[12px] text-[#cbd5e1] leading-relaxed">
            Comparative overview of currently active flagship gacha titles across Japan, Korea, and Global servers—tracking monthly revenue momentum, F2P pull generosity, daily routine time commitment, and primary endgame modes.
          </p>

          <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
            <table className="w-full border-collapse text-left text-[12px]">
              <thead>
                <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold uppercase text-[#94a3b8]">
                  <th className="w-16 px-2.5 py-2.5 text-center border-r border-[#243049]">Rank</th>
                  <th className="px-3.5 py-2.5 border-r border-[#243049]">Game Title</th>
                  <th className="px-3 py-2.5 border-r border-[#243049]">Monthly Revenue Est.</th>
                  <th className="px-3 py-2.5 text-center border-r border-[#243049]">F2P Friendliness</th>
                  <th className="px-3 py-2.5 border-r border-[#243049]">Daily Routine Time</th>
                  <th className="px-3.5 py-2.5">Core Competitive Endgame Mode</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e293b]">
                {MARKET_POWER_RANKINGS.map((row) => (
                  <tr key={row.rank} className="hover:bg-[#141d30] transition-colors">
                    <td className="p-3 text-center font-black text-white border-r border-[#1e293b]">
                      #{row.rank}
                    </td>
                    <td className="p-3 border-r border-[#1e293b]">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={row.iconUrl}
                          alt={row.name}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-lg border border-[#334155] object-cover shrink-0"
                          loading="eager"
                        />
                        <div>
                          {row.href ? (
                            <Link href={row.href} className="font-extrabold text-[#60a5fa] hover:underline">
                              {row.name}
                            </Link>
                          ) : (
                            <div className="font-extrabold text-white">{row.name}</div>
                          )}
                          <div className="text-[10px] font-semibold text-[#94a3b8]">{row.regionStrength}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 font-extrabold text-[#34d399] border-r border-[#1e293b]">
                      {row.monthlyTrend}
                    </td>
                    <td className="p-3 text-center font-black text-[#fbbf24] border-r border-[#1e293b]">
                      {row.f2pRating}
                    </td>
                    <td className="p-3 font-semibold text-[#cbd5e1] border-r border-[#1e293b]">
                      {row.dailyTime}
                    </td>
                    <td className="p-3.5 text-[#e2e8f0]">
                      {row.endgameMode}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <AppMediaH3>Ascalon.gg Editorial Methodology</AppMediaH3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[12px] text-[#cbd5e1]">
            <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-1">
              <div className="font-extrabold text-[#93c5fd]">1. 100% Accurate Asian Meta Translations</div>
              <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                Every dedicated wiki on Ascalon.gg translates verified JP/KR frame-data, skill multipliers, and endgame boss mechanics into clean official English terminology.
              </p>
            </div>
            <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-1">
              <div className="font-extrabold text-[#93c5fd]">2. Hands-On CBT & Launch Verification</div>
              <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                Upcoming gacha rankings are updated after every Closed Beta Test (CBT) based on real combat frame pacing, PC/Mobile optimization, and gacha pity structure.
              </p>
            </div>
            <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-1">
              <div className="font-extrabold text-[#93c5fd]">3. Isolated Per-Game Strategy Wikis</div>
              <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                Character tier lists, reroll stopping lines, and build databases live strictly inside each game&apos;s dedicated wiki hub (such as <Link href="/starsavior" className="text-[#60a5fa] underline">Star Savior Wiki</Link>).
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Ascalon.gg Global Footer */}
      <footer className="mt-8 border-t border-[#243049] bg-[#0b0e14] py-6 px-4">
        <div className="mx-auto max-w-[1240px] flex flex-wrap items-center justify-between gap-4 text-[12px] text-[#94a3b8]">
          <div className="flex items-center gap-3">
            <img
              src="/brand/ascalon-logo.png"
              alt="Ascalon.gg"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg border border-[#60a5fa] object-cover"
            />
            <span>
              <strong className="text-white">Ascalon.gg</strong> — Global Gacha Strategy Network, Future Release Rankings & Translated Wiki Hubs.
            </span>
          </div>
          <div className="flex flex-wrap gap-4 font-semibold">
            <a href="#top" className="hover:text-white">Portal Home</a>
            <a href="#supported-games" className="hover:text-white">Supported Games (16)</a>
            <a href="#upcoming-gacha-ranks" className="hover:text-white">Upcoming Gacha Ranks</a>
            <a href="#gacha-news" className="hover:text-white">Industry News</a>
            <Link href="/starsavior" className="text-[#60a5fa] hover:underline">Star Savior Wiki →</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
