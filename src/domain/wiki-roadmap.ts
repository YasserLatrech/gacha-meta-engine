import { parseUpcomingReleaseIso } from './jst-time';
import type {
  HomeStrategyWiki,
  HomeUpcomingGame,
} from './schemas';

interface RoadmapBlueprint {
  readonly id: string;
  readonly title: string;
  readonly titleJa: string;
  readonly iconUrl: string;
  readonly platform: string;
  readonly href: string;
  readonly isInternal: boolean;
  readonly wikiStatus: 'live' | 'next' | 'planned';
  readonly launchWindow: string;
  readonly publisher: string;
  readonly roadmapReason: string;
  readonly baseVotes?: number;
}

const PRIORITY_ROADMAP_BLUEPRINTS: ReadonlyArray<RoadmapBlueprint> = [
  {
    id: 'star-savior',
    title: 'Star Savior',
    titleJa: 'スタセイ',
    iconUrl: '/banners/home/icons/portal_icon_026.webp',
    platform: 'Console / PC · Mobile',
    href: '/starsavior',
    isInternal: true,
    wikiStatus: 'live',
    launchWindow: 'LIVE NOW',
    publisher: 'STUDIOBSIDE',
    roadmapReason:
      'Flagship active wiki on Ascalon.fun: 59 Saviors, 85 Arcana cards, Tier List, Reroll Guide, Event Checker, and 86 strategy guides.',
  },
  {
    id: 'silver-palace',
    title: 'Silver Palace',
    titleJa: '白銀の城',
    iconUrl: '/banners/home/icons/portal_icon_087.webp',
    platform: 'Console / PC · Mobile',
    href: '/#strategy-wikis',
    isInternal: false,
    wikiStatus: 'next',
    launchWindow: 'Dec 14, 2026',
    publisher: 'Elementa / Silver Studio',
    roadmapReason:
      'Selected as Wiki #2 for maximum Day-1 global traffic: simultaneous worldwide English launch on Dec 14, 2026 across PC, PS5, iOS & Android with minimal English wiki competition.',
  },
  {
    id: 'ananta',
    title: 'ANANTA (Project Mugen)',
    titleJa: '無限大Ananta',
    iconUrl: '/banners/home/icons/portal_icon_116.webp',
    platform: 'Console / PC · Mobile',
    href: '/#strategy-wikis',
    isInternal: false,
    wikiStatus: 'planned',
    launchWindow: 'Jan 15, 2027',
    publisher: 'Naked Rain / NetEase Games',
    roadmapReason:
      'Most-anticipated Q1 2027 global simultaneous launch (1,394+ reader votes). Planned full character builds, open-world interactive map routes & team comps.',
  },
  {
    id: 'azur-promilia',
    title: 'Azur Promilia',
    titleJa: 'アズールプロミリア',
    iconUrl: '/banners/home/icons/portal_icon_080.webp',
    platform: 'Console / PC · Mobile',
    href: '/#strategy-wikis',
    isInternal: false,
    wikiStatus: 'planned',
    launchWindow: 'Nov 26 Asia · Summer 2027 Global',
    publisher: 'Manjuu / Yostar',
    roadmapReason:
      '20M+ pre-registrations from the creators of Azur Lane. High-traffic Kibo companion tier list & element synergy database planned ahead of English Open Beta.',
  },
  {
    id: 'honkai-nexus-anima',
    title: 'Honkai: Nexus Anima',
    titleJa: '崩壊：ネクサスアニマ',
    iconUrl: '/banners/home/icons/portal_icon_122.webp',
    platform: 'Console / PC · Mobile',
    href: '/#strategy-wikis',
    isInternal: false,
    wikiStatus: 'planned',
    launchWindow: 'Spring 2027',
    publisher: 'HoYoverse',
    roadmapReason:
      'HoYoverse creature-tactics Honkai spin-off (561+ votes). Built-in Anima tier list, synergy calculator & banner pity tracker planned for launch.',
  },
  {
    id: 'limit-zero-breakers',
    title: 'Limit Zero Breakers',
    titleJa: 'リミットゼロ ブレイカーズ',
    iconUrl: '/banners/home/icons/portal_icon_094.webp',
    platform: 'Console / PC · Mobile',
    href: '/#strategy-wikis',
    isInternal: false,
    wikiStatus: 'planned',
    launchWindow: '2026 Planned',
    publisher: 'VIC GAME STUDIOS / NCSoft',
    roadmapReason:
      'Cel-shaded anime boss-action RPG queued for character tier list, break-gauge guides, and fast reroll coverage.',
  },
  {
    id: 'tougen-anki-crimson-inferno',
    title: 'Tougen Anki: Crimson Inferno',
    titleJa: '桃源暗鬼 Crimson Inferno',
    iconUrl: '/banners/home/icons/portal_icon_132.png',
    platform: 'Mobile App',
    href: '/#strategy-wikis',
    isInternal: false,
    wikiStatus: 'planned',
    launchWindow: 'TBA',
    publisher: 'Com2uS',
    roadmapReason:
      'Anime IP turn-based 3D RPG (423+ votes) queued for Day-1 reroll rankings, starter SSR priorities & team building.',
  },
  {
    id: 'digimon-alysion',
    title: 'Digimon Alysion',
    titleJa: 'デジモンアリシオン',
    iconUrl: '/banners/home/icons/portal_icon_107.webp',
    platform: 'Mobile App',
    href: '/#strategy-wikis',
    isInternal: false,
    wikiStatus: 'planned',
    launchWindow: '2026 Planned',
    publisher: 'Bandai Namco',
    roadmapReason:
      'Competitive digital card game (361+ votes) queued for meta deck lists, card database & drafting guides.',
  },
  {
    id: 'fate-trigger-the-novita',
    title: 'Fate Trigger: The Novita',
    titleJa: '運命のトリガー: The Novita',
    iconUrl: '/banners/home/icons/portal_icon_133.png',
    platform: 'Console / PC · Mobile',
    href: '/#strategy-wikis',
    isInternal: false,
    wikiStatus: 'planned',
    launchWindow: 'TBA',
    publisher: 'Saroasis Studios / Level Infinite',
    roadmapReason:
      'UE5 anime hero tactical shooter queued for Awakener tier rankings, skill loadouts & weapon recoil meta.',
  },
  {
    id: 'petit-planet',
    title: 'Petit Planet',
    titleJa: 'プチプラネット',
    iconUrl: '/banners/home/icons/portal_icon_086.jpg',
    platform: 'Mobile App',
    href: '/#strategy-wikis',
    isInternal: false,
    wikiStatus: 'planned',
    launchWindow: 'Dec 4, 2026',
    publisher: 'HoYoverse',
    roadmapReason:
      'HoYoverse cozy planet simulation launching Dec 4, 2026 — queued for neighbor gifts, crafting recipes & collection tracker.',
  },
  {
    id: 'final-fantasy-xiv-mobile',
    title: 'Final Fantasy XIV Mobile',
    titleJa: 'ファイナルファンタジーXIV モバイル',
    iconUrl: '/banners/home/icons/portal_icon_144.jpg',
    platform: 'Mobile App',
    href: '/#strategy-wikis',
    isInternal: false,
    wikiStatus: 'planned',
    launchWindow: 'TBA',
    publisher: 'Lightspeed / SQUARE ENIX',
    roadmapReason:
      'Official mobile adaptation of FFXIV — planned job rotation guides, raid unlocks & crafting leveling paths.',
  },
  {
    id: 'sea-of-remnants',
    title: 'Sea of Remnants',
    titleJa: 'シー オブ レムナンツ',
    iconUrl: '/banners/home/icons/portal_icon_097.webp',
    platform: 'Console / PC · Mobile',
    href: '/#strategy-wikis',
    isInternal: false,
    wikiStatus: 'planned',
    launchWindow: '2026 Planned',
    publisher: 'Joker Studio',
    roadmapReason:
      'Oceanic adventure RPG by Identity V creators — queued for crewmates tier list & ship exploration routes.',
  },
  {
    id: 'ragnarok-online-3',
    title: 'Ragnarok Online 3',
    titleJa: 'ラグナロクオンライン３',
    iconUrl: '/banners/home/icons/portal_icon_145.webp',
    platform: 'Mobile App',
    href: '/#strategy-wikis',
    isInternal: false,
    wikiStatus: 'planned',
    launchWindow: 'TBA',
    publisher: 'Gravity / GungHo',
    roadmapReason:
      'Cross-platform MMORPG revival queued for class job trees, stat calculators & MVP boss drop tables.',
  },
  {
    id: 'terbis',
    title: 'TERBIS',
    titleJa: 'TERBIS（テルビス）',
    iconUrl: '/banners/home/icons/portal_icon_150.jpg',
    platform: 'Mobile App',
    href: '/#strategy-wikis',
    isInternal: false,
    wikiStatus: 'planned',
    launchWindow: 'TBA',
    publisher: 'Webzen',
    roadmapReason:
      '2D anime fantasy gacha RPG queued for reroll priority, elemental counters & character skill multipliers.',
  },
];

function matchUpcomingMetadata(
  title: string,
  upcomingGames: ReadonlyArray<HomeUpcomingGame>
): HomeUpcomingGame | undefined {
  const lower = title.toLowerCase();
  return upcomingGames.find(
    (g) =>
      g.title.toLowerCase() === lower ||
      lower.includes(g.title.toLowerCase()) ||
      g.title.toLowerCase().includes(lower)
  );
}

/**
 * Produces the canonical Ascalon Strategy Wiki & Expansion Roadmap catalog:
 * - Item #1 is always Star Savior (`wikiStatus: 'live'`, the ONLY active wiki today)
 * - Item #2 is Silver Palace (`wikiStatus: 'next'`, upcoming Dec 14, 2026 global launch)
 * - Items #3+ showcase high-traffic future wikis & tracked catalog titles cleanly (`wikiStatus: 'planned'`)
 */
export function buildCuratedStrategyWikiRoadmap(
  rawWikis: ReadonlyArray<HomeStrategyWiki>,
  upcomingGames: ReadonlyArray<HomeUpcomingGame>
): HomeStrategyWiki[] {
  const seenTitles = new Set<string>();
  const result: HomeStrategyWiki[] = [];

  for (const bp of PRIORITY_ROADMAP_BLUEPRINTS) {
    const upMatch = matchUpcomingMetadata(bp.title, upcomingGames);
    const launchWindow = upMatch?.releaseDate || bp.launchWindow;
    const launchIso =
      bp.wikiStatus !== 'live' && upMatch
        ? parseUpcomingReleaseIso(upMatch.releaseDate, upMatch.status) ?? undefined
        : bp.id === 'silver-palace'
          ? '2026-12-14T00:00:00+09:00'
          : undefined;

    seenTitles.add(bp.title.toLowerCase());
    result.push({
      id: bp.id,
      href: bp.href,
      title: bp.title,
      titleJa: bp.titleJa,
      iconUrl: bp.iconUrl,
      platform: bp.platform,
      isInternal: bp.isInternal,
      wikiStatus: bp.wikiStatus,
      launchWindow,
      launchIso,
      publisher: upMatch?.publisher || bp.publisher,
      roadmapReason: bp.roadmapReason,
      baseVotes: upMatch?.votes ?? bp.baseVotes ?? 0,
    });
  }

  for (const w of rawWikis) {
    const key = w.title.toLowerCase();
    if (seenTitles.has(key)) continue;
    seenTitles.add(key);

    const upMatch = matchUpcomingMetadata(w.title, upcomingGames);
    const slugId =
      w.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') || 'queued-game';

    result.push({
      id: slugId,
      href: '/#strategy-wikis',
      title: w.title,
      titleJa: w.titleJa,
      iconUrl: w.iconUrl,
      platform: w.platform,
      isInternal: false,
      wikiStatus: 'planned',
      launchWindow: upMatch?.releaseDate || 'Expansion Queue',
      launchIso: upMatch
        ? parseUpcomingReleaseIso(upMatch.releaseDate, upMatch.status) ?? undefined
        : undefined,
      publisher: upMatch?.publisher || 'Featured Franchise',
      roadmapReason: `${w.title} (${w.platform}) is tracked in the Ascalon expansion backlog. Reader votes accelerate full tier list & character database production.`,
      baseVotes: upMatch?.votes ?? 0,
    });
  }

  return result;
}
