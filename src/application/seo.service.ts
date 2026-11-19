import type { Metadata } from 'next';
import type {
  CharacterEntity,
  ArcanaEntity,
  StarSaviorGuideArticle,
  StarSaviorGuideSpecialKind,
} from '@/domain/schemas';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ascalon.fun').replace(
  /\/$/,
  ''
);

export const SITE_NAME = 'Ascalon.fun';
export const SITE_LASTMOD_ISO = '2026-11-19T12:15:00.000Z';

export const MIN_INDEXABLE_GUIDE_UNIQUE_WORDS = 130;

const INDEXABLE_SPECIAL_KINDS: ReadonlySet<StarSaviorGuideSpecialKind> = new Set([
  'pvp-ranking',
  'sr-char-ranking',
  'sr-arcana-ranking',
  'event-checker',
  'char-stats-table',
  'voice-actors-db',
  'birthday-db',
]);

const SUB_STAGE_STUB_PATTERN = /^(?:operation-\d|cube-(?:step|extra)-)/i;

function countWords(text: string): number {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

/** Counts unique editorial words across a guide's lead and sections (excluding duplicated lead stubs). */
export function computeGuideUniqueWordCount(guide: StarSaviorGuideArticle): number {
  const leadTrimmed = guide.lead.trim();
  const sectionText = guide.sections
    .flatMap((sec) => [
      sec.heading,
      ...sec.paragraphs.filter(
        (p) =>
          p.trim() !== leadTrimmed &&
          !p.startsWith('Use the related rankings and database links below')
      ),
      ...(sec.bullets ?? []),
      ...(sec.table ? [...sec.table.headers, ...sec.table.rows.flat()] : []),
    ])
    .join(' ');

  return countWords(`${leadTrimmed} ${sectionText}`);
}

/**
 * Determines whether a guide page is substantive and unique enough for Google indexation.
 * Thin single-sentence stubs, consolidated micro stage walkthroughs, fake community boards,
 * and client-only widget pages are marked noindex, follow to prevent index bloat.
 */
export function isGuideIndexable(guide: StarSaviorGuideArticle): boolean {
  if (guide.noIndex) return false;
  if (guide.category === 'Community') return false;
  if (SUB_STAGE_STUB_PATTERN.test(guide.slug)) return false;

  if (guide.specialKind) {
    return INDEXABLE_SPECIAL_KINDS.has(guide.specialKind);
  }

  return computeGuideUniqueWordCount(guide) >= MIN_INDEXABLE_GUIDE_UNIQUE_WORDS;
}

/** Filters guides down to the canonical search-indexable subset (used by sitemap and GEO manifests). */
export function getIndexableStarSaviorGuides(
  guides: ReadonlyArray<StarSaviorGuideArticle>
): StarSaviorGuideArticle[] {
  return guides.filter(isGuideIndexable);
}

export interface BreadcrumbItemInput {
  name: string;
  path: string;
}

export interface PageMetadataInput {
  title: string;
  absoluteTitle?: boolean;
  description: string;
  path: string;
  ogImage?: string;
  ogImageAlt?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  noIndex?: boolean;
}

export function resolveAbsoluteUrl(urlOrPath: string): string {
  if (/^https?:\/\//i.test(urlOrPath)) {
    return urlOrPath;
  }
  const normalizedPath = urlOrPath.startsWith('/') ? urlOrPath : `/${urlOrPath}`;
  return `${SITE_URL}${normalizedPath}`;
}

export function truncateMetaDescription(raw: string, maxLen = 158): string {
  const cleaned = raw.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= maxLen) return cleaned;
  const sliced = cleaned.slice(0, maxLen - 1);
  const lastSpace = sliced.lastIndexOf(' ');
  const cutoff = lastSpace > 100 ? sliced.slice(0, lastSpace) : sliced;
  return `${cutoff.replace(/[.,;:!?-]+$/, '')}…`;
}

export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function buildPageMetadata(input: PageMetadataInput): Metadata {
  const canonicalPath = input.path === '/' ? '/' : input.path.replace(/\/$/, '');
  const canonicalUrl = resolveAbsoluteUrl(canonicalPath);
  const description = truncateMetaDescription(input.description);
  const imageUrl = resolveAbsoluteUrl(input.ogImage || '/banners/home/en_home_01.webp');
  const imageAlt = input.ogImageAlt || input.title;

  return {
    title: input.absoluteTitle ? { absolute: input.title } : input.title,
    description,
    ...(input.keywords && input.keywords.length > 0 ? { keywords: input.keywords } : {}),
    ...(input.noIndex
      ? {
          robots: {
            index: false,
            follow: true,
            googleBot: {
              index: false,
              follow: true,
            },
          },
        }
      : {}),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: input.absoluteTitle ? input.title : `${input.title} | ${SITE_NAME}`,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: input.type || 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: input.absoluteTitle ? input.title : `${input.title} | ${SITE_NAME}`,
      description,
      images: [imageUrl],
    },
  };
}

export function buildBreadcrumbNode(items: BreadcrumbItemInput[]): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: resolveAbsoluteUrl(item.path),
    })),
  };
}

export const HOME_PORTAL_FAQS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: 'What is Ascalon.fun?',
    a: 'Ascalon.fun is an English mobile and gacha strategy wiki portal offering entity-verified tier lists, coupon codes, reroll guides, character build databases, upcoming global release calendars with 1-vote-per-IP reader polls, and daily App Store rankings.',
  },
  {
    q: 'Which strategy wikis are live on Ascalon.fun right now?',
    a: 'The flagship live wiki on Ascalon.fun is the complete English Star Savior Strategy Wiki (Patch v2.4), covering all 59 playable Saviors with Lv.200 stats, 85 Arcana cards, PvE and PvP Gauntlet tier lists, Reroll guides, active promo codes, Journey Event Choice Checker, and verified strategy guides.',
  },
  {
    q: 'Which strategy wiki is launching next on Ascalon.fun?',
    a: 'Upcoming global releases such as Azur Promilia, Silver Palace, and ANANTA (January 15, 2027 Global) are tracked on the release calendar and queued for full strategy wikis once active titles establish organic search coverage.',
  },
  {
    q: 'Is Ascalon.fun free to browse without registration?',
    a: 'Yes — Ascalon.fun operates as a 100% free, fast static-cached strategy wiki and tier list database with zero paywalls or mandatory registration.',
  },
];

export function buildPublisherReference(): Record<string, unknown> {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    knowsAbout: [
      'Star Savior Strategy Wiki',
      'Star Savior Tier List',
      'Star Savior Coupon Codes',
      'Gacha Game Tier Lists',
      'Upcoming Gacha Release Calendar',
    ],
    sameAs: [`${SITE_URL}/llms.txt`, `${SITE_URL}/feed.xml`],
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/brand/ascalon-logo.png`,
    },
  };
}

export function buildHomePortalJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildPublisherReference(),
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description:
          'Mobile game rankings, upcoming gacha release calendar with reader votes, App Store grossing charts, and complete English strategy wikis.',
        inLanguage: 'en',
        publisher: { '@id': `${SITE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: 'Ascalon.fun — Mobile Game Rankings, Release Calendar & Strategy Wiki',
        description:
          'Mobile & gacha game strategy portal featuring top strategy wikis, upcoming game release calendar with 1-vote-per-IP reader rankings, and daily App Store charts.',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/starsavior#videogame` },
        dateModified: SITE_LASTMOD_ISO,
      },
      {
        '@type': 'ItemList',
        name: 'Featured Strategy Wiki Hubs on Ascalon.fun',
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        numberOfItems: 5,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Star Savior Strategy Wiki (Complete English Database)',
            url: `${SITE_URL}/starsavior`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Star Savior Strongest Character Tier List',
            url: `${SITE_URL}/starsavior/tier-list`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Star Savior Reroll Tier List & Fast Reroll Guide',
            url: `${SITE_URL}/starsavior/reroll`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Star Savior All 59 Characters Lv.200 Database',
            url: `${SITE_URL}/starsavior/characters`,
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Star Savior Strongest Arcana Tier List (85 Cards)',
            url: `${SITE_URL}/starsavior/arcana`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: HOME_PORTAL_FAQS.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  };
}

export const STAR_SAVIOR_PORTAL_FAQS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: 'What kind of game is Star Savior?',
    a: 'Star Savior is a content-packed Training RPG that fuses Training Simulation × Turn-Based Command Battles × Idle Progression mechanics.',
  },
  {
    q: 'Can I play Star Savior on PC?',
    a: 'Yes — Star Savior is playable on PC via the official Steam version with full cross-save account linking.',
  },
  {
    q: 'Can I change my name, and are duplicate names allowed?',
    a: 'Both changing your name and using duplicate Commander names are supported. Changing your name requires a dedicated item: your first name change is effectively free, while subsequent changes require purchasing the rename item with Starlight Gems, so frequent name changes are not recommended.',
  },
  {
    q: 'What should I exchange Observation Reports for?',
    a: 'Prioritize discounted sale items (such as Observation Tickets and enhancement materials) and Remnant Cores (required for SR Guardian Star Awakening & Engraving) first. Next in line is the Break Skill Support Plan, though raising Break Skill levels offers relatively modest returns—so if you are short on Observation Reports, you can safely hold off on it.',
  },
  {
    q: 'What should I do if I cannot clear Rescue Journey?',
    a: "First, raise your Savior's Resonance Stage to boost starting Rescue Journey stats. Second, prepare parent Stellar Archives with strong Stat Blessings. Clearing Rescue Journey comes down to your overall evaluation rank, so select training options that keep your total rank as high as possible.",
  },
];

export function buildStarSaviorPortalJsonLd(patchVersion: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildPublisherReference(),
      {
        '@type': 'VideoGame',
        '@id': `${SITE_URL}/starsavior#videogame`,
        name: 'Star Savior',
        alternateName: ['スターセイヴァー', 'StarSavior'],
        description:
          'Star Savior is a Training RPG combining Rescue Journey character simulation, 85 Arcana training decks, and turn-based command battles across PC (Steam), iOS, and Android.',
        genre: ['Training RPG', 'Turn-Based RPG', 'Simulation RPG'],
        gamePlatform: ['PC (Steam)', 'iOS', 'Android'],
        operatingSystem: 'Windows, iOS, Android',
        applicationCategory: 'GameApplication',
        softwareVersion: patchVersion,
        image: resolveAbsoluteUrl('/banners/starsavior/eyecatch/gameinfo_01.webp'),
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
        sameAs: ['https://starsavior.com', 'https://x.com/StarSavior_JP'],
      },
      buildBreadcrumbNode([
        { name: 'Ascalon.fun Home', path: '/' },
        { name: 'Star Savior Wiki', path: '/starsavior' },
      ]),
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/starsavior#faq`,
        mainEntity: STAR_SAVIOR_PORTAL_FAQS.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  };
}

export function buildFaqNode(
  id: string,
  faqs: ReadonlyArray<{ q: string; a: string }>,
): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    '@id': id,
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export const STAR_SAVIOR_TIER_LIST_FAQS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: 'Who are the strongest SSS Tier characters in Star Savior (Patch v2.4)?',
    a: 'The top 6 SSS Tier (Tier 0) Saviors in Star Savior Patch v2.4 are Witch of Favoritism, Amora, Professor M, Carmen: Eternal Promise, Bunnygirl Charlotte, and Smile: Sunshine Cat, dominating PvE campaign, Cube Palace bosses, and high-tier team compositions.',
  },
  {
    q: 'How often is the Star Savior Tier List updated on Ascalon.fun?',
    a: 'The Star Savior Tier List is continuously synced with live meta updates alongside new SSR pickups (such as 1st Anniversary Witch of Favoritism and Guile through Dec 4 JST) and Patch v2.4 boss rotations.',
  },
  {
    q: 'Who is the best free-to-play or 1st Anniversary banner target in Star Savior right now?',
    a: 'Witch of Favoritism (Order Striker, SSS Tier) is the #1 1st Anniversary pickup target until Dec 4 JST thanks to defense-ignoring Boss Chain fixed damage, while Guile (Chaos Caster, SS Tier) is distributed free via 1st Anniversary login events.',
  },
];

export const STAR_SAVIOR_REROLL_FAQS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: 'How long does it take to reroll in Star Savior?',
    a: 'A single reroll run in Star Savior takes roughly 10 minutes via the tutorial guest account reset flow before deciding whether to bind your account.',
  },
  {
    q: 'Which characters and Arcana should new players reroll for first?',
    a: 'Prioritize SS/SSS reroll Saviors such as Carmen: Eternal Promise, Amora, Witch of Favoritism, or Bunnygirl Charlotte paired with high-value Power/Endurance SSR Arcana cards like The Indomitable Masterpiece or Customized Training to Cover Weaknesses.',
  },
];

export const STAR_SAVIOR_REROLL_HOWTO_STEPS: ReadonlyArray<{ name: string; text: string }> = [
  {
    name: 'Start as Guest and Skip Story Cutscenes',
    text: 'Launch Star Savior as a Guest account and use Skip on early dialogue scenes to reach the first Observation summon unlock in under 8 minutes.',
  },
  {
    name: 'Claim Mailbox Rewards and Active Coupon Codes',
    text: 'Collect pre-registration/anniversary mailbox pulls and redeem all 4 active coupon codes (26THXCAPTAIN1ST, GIFTREADYANNIV1ST, ENDOFTHEJOURNEY, TOGETHER1STANNIV) for 20 Focused Tickets, 3,120 Starlight Gems, and 300 1st Anniversary Special Coins.',
  },
  {
    name: 'Pull on Featured 1st Anniversary Banner & Check Stopping Line',
    text: 'Aim for at least one SSS/SS carry (Witch of Favoritism, Amora, Carmen: Eternal Promise, or Bunnygirl Charlotte) plus a top Power or Endurance SSR Arcana.',
  },
  {
    name: 'Bind Good Accounts or Reset via Settings',
    text: 'If your pulls miss target units, open Settings -> Account -> Account Reset to wipe guest data and start a fresh 10-minute reroll without reinstalling.',
  },
];

const TIER_SORT_WEIGHT: Record<string, number> = {
  SSS: 0,
  SS: 1,
  S: 2,
  A: 3,
  B: 4,
  C: 5,
  D: 6,
};

const CHARACTER_SEARCH_ALIASES: Record<string, readonly string[]> = {
  'bunny-charles': ['Bunny Charles', 'Bunnygirl Charlotte'],
  'bride-carmen': ['Bride Carmen', 'Carmen: Eternal Promise'],
  'dress-asherah': ['Dress Asherah', 'Asherah: Waltz of Starlight'],
  'swimsuit-smile': ['Swimsuit Smile', 'Smile: Sunshine Cat'],
  'bunny-frey': ['Bunny Frey', 'Frey: Noble Princess'],
  'bride-epindel': ['Bride Epindel', 'Epindel: Blessing of the Stars'],
  'bunny-claire': ['Bunny Claire', 'Bunnygirl Claire'],
  frey: ['Frey', 'Fei'],
  emily: ['Emily', 'Emilly'],
  haidee: ['Haidee', 'Haydee'],
  lacy: ['Lacy', 'Racy'],
};

const GUIDE_SPECIFIC_FAQS: Record<string, ReadonlyArray<{ q: string; a: string }>> = {
  'promo-codes': [
    {
      q: 'What are the active Star Savior coupon codes in November 2026?',
      a: 'All 4 verified active Star Savior codes (Nov 19, 2026) are 26THXCAPTAIN1ST (1,120 Starlight Gems + 300 1st Anniv Special Coins, until Jan 13, 2027 JST), GIFTREADYANNIV1ST (10 Savior + 10 Arcana Focused Tickets, until Nov 27 JST), ENDOFTHEJOURNEY (2,000 Starlight Gems, until Dec 4 JST), and TOGETHER1STANNIV (3x Singularity Degeneration Reactor + 1x Skill Reset Code, until Dec 10 JST).',
    },
    {
      q: 'How do I redeem Star Savior promo codes on Steam PC, Android, and iOS?',
      a: 'On Steam PC and Android, go to Menu (top-right) -> Settings -> Account -> Redeem Coupon Code. On iOS, copy your Member Number/UID from Settings -> Account and enter it with the code on the official STUDIOBSIDE redemption page.',
    },
  ],
  'pvp-tier-list': [
    {
      q: 'Who are the best Gauntlet PvP characters in Star Savior?',
      a: 'Top Gauntlet PvP Saviors combine high Turn-1 Speed, action-gauge manipulation, barriers, and burst pressure — led by Witch of Favoritism, Bunnygirl Charlotte, Carmen: Eternal Promise, Amora, and Emilly.',
    },
  ],
  'gacha-rates': [
    {
      q: 'What is the SSR drop rate and pity ceiling in Star Savior?',
      a: 'Standard and Pickup Observation banners feature a 4.0% total SSR rate (1.0% featured pickup rate) with a 200-pull mileage exchange ceiling that carries over across Pickup banners.',
    },
  ],
  'which-gacha-to-pull': [
    {
      q: 'Which Star Savior gacha banner should I pull right now?',
      a: 'Prioritize the 1st Anniversary Witch of Favoritism banner (active until Dec 4, 2026 04:00 JST) as she is an SSS Tier Order Striker, followed by Guile dupes (base copy is FREE). Skip the Nov 19 Bunnygirl Scarlet rerun (~Dec 3, rated 2/5) and save Starlight Gems for Limited Sun Assassin Dress Lacy launching Dec 3, 2026.',
    },
  ],
  'cosmo-gate': [
    {
      q: 'Who are the bosses in Cosmo Gate Season P8 (Nov 19–26, 2026)?',
      a: 'Cosmo Gate Season P8 features Immortal King Mogulus (bring Barriers like Carmen: Eternal Promise or Emilly), Beast of the Baskervilles (stack 2+ buffs on DPS and bring cleanse against Bleed), and Manifestation of Divergence (use high single-hit nukers like Amora or Witch of Favoritism). Best Star Challenge EX score-efficiency stages are 2, 5, 8, 11, 14, and 17.',
    },
  ],
  'event-choice-checker': [
    {
      q: 'How does the Star Savior Journey Event Choice Checker work?',
      a: 'Search any of the 85 Arcana Events or 29 Rescue Journey Shared Events by title or card name to see exact stat gains, stamina costs, and skill hints for every dialogue choice before clicking in-game.',
    },
  ],
};

const PROMO_CODES_HOWTO_STEPS: ReadonlyArray<{ name: string; text: string }> = [
  {
    name: 'Open In-Game Settings Menu',
    text: 'Tap the Menu icon (three lines) in the top-right corner of the Star Savior lobby and open Settings.',
  },
  {
    name: 'Navigate to Account -> Enter Coupon',
    text: 'Switch to the Account tab and click Redeem Coupon Code (on iOS, copy your Member Number/UID and open the official STUDIOBSIDE web redemption page).',
  },
  {
    name: 'Paste Uppercase Code & Claim Mailbox',
    text: 'Enter active uppercase codes such as 26THXCAPTAIN1ST, GIFTREADYANNIV1ST, ENDOFTHEJOURNEY, or TOGETHER1STANNIV, confirm redemption, and collect rewards from your in-game Mailbox.',
  },
];

export const STAR_SAVIOR_CHARACTERS_FAQS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: 'How many playable Saviors are in the Star Savior database?',
    a: 'Ascalon.fun indexes all 59 playable Star Savior units (51 SSR and 8 SR) with exact Lv.200 stats (ATK, HP, DEF, SPD), Attributes (Sun, Moon, Star, Order, Chaos), Classes, Resonance materials, and Voice Actors (CV).',
  },
];

export const STAR_SAVIOR_ARCANA_FAQS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: 'How many Arcana cards exist in Star Savior and which stat tags matter most?',
    a: 'There are 85 Arcana cards in Star Savior (50 SSR, 15 SR, and 20 R) categorized across Power, Health, Endurance, Focus, and Protect stat tags used to build Rescue Journey training decks.',
  },
];

export function buildStarSaviorHubJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  breadcrumbLabel: string;
  image: string;
  schemaType?: 'Article' | 'CollectionPage';
  topCharacters?: CharacterEntity[];
  topArcana?: ArcanaEntity[];
  faqs?: ReadonlyArray<{ q: string; a: string }>;
  howTo?: { name: string; steps: ReadonlyArray<{ name: string; text: string }> };
  datasetSchema?: { name: string; description: string; variableMeasured: readonly string[] };
}): Record<string, unknown> {
  const url = resolveAbsoluteUrl(opts.path);
  const graph: Array<Record<string, unknown>> = [
    buildPublisherReference(),
    buildBreadcrumbNode([
      { name: 'Ascalon.fun Home', path: '/' },
      { name: 'Star Savior Wiki', path: '/starsavior' },
      { name: opts.breadcrumbLabel, path: opts.path },
    ]),
    {
      '@type': opts.schemaType || 'Article',
      '@id': `${url}#primary`,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      headline: opts.title,
      name: opts.title,
      description: truncateMetaDescription(opts.description, 220),
      url,
      image: [resolveAbsoluteUrl(opts.image)],
      inLanguage: 'en-US',
      datePublished: '2026-11-12T00:00:00.000Z',
      dateModified: SITE_LASTMOD_ISO,
      author: { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      about: { '@id': `${SITE_URL}/starsavior#videogame` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.geo-summary'],
      },
    },
  ];

  if (opts.topCharacters && opts.topCharacters.length > 0) {
    const rankedChars = [...opts.topCharacters].sort((a, b) => {
      const tierA = TIER_SORT_WEIGHT[a.staticData?.appMediaTier || a.overallTier] ?? 9;
      const tierB = TIER_SORT_WEIGHT[b.staticData?.appMediaTier || b.overallTier] ?? 9;
      if (tierA !== tierB) return tierA - tierB;
      return b.score - a.score;
    });
    graph.push({
      '@type': 'ItemList',
      name: `${opts.breadcrumbLabel} — Top Ranked Saviors`,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: rankedChars.length,
      itemListElement: rankedChars.slice(0, 15).map((c, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: `${c.name} (${c.staticData?.appMediaTier || c.overallTier} · ${c.rarity} ${c.element} ${c.role})`,
        url: `${SITE_URL}/starsavior/characters/${c.slug}`,
      })),
    });
  }

  if (opts.topArcana && opts.topArcana.length > 0) {
    graph.push({
      '@type': 'ItemList',
      name: `${opts.breadcrumbLabel} — Top SSR Arcana Cards`,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: opts.topArcana.length,
      itemListElement: opts.topArcana.slice(0, 15).map((a, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: `${a.name} (${a.rarity} ${a.staticData?.statTag || 'Arcana'})`,
        url: `${SITE_URL}/starsavior/arcana#${a.slug}`,
      })),
    });
  }

  if (opts.datasetSchema) {
    graph.push({
      '@type': 'Dataset',
      '@id': `${url}#dataset`,
      name: opts.datasetSchema.name,
      description: opts.datasetSchema.description,
      url,
      inLanguage: 'en-US',
      creator: { '@id': `${SITE_URL}/#organization` },
      dateModified: SITE_LASTMOD_ISO,
      isAccessibleForFree: true,
      variableMeasured: [...opts.datasetSchema.variableMeasured],
      distribution: [
        {
          '@type': 'DataDownload',
          encodingFormat: 'text/markdown',
          contentUrl: `${SITE_URL}/llms-full.txt`,
        },
      ],
    });
  }

  if (opts.howTo && opts.howTo.steps.length > 0) {
    graph.push({
      '@type': 'HowTo',
      '@id': `${url}#howto`,
      name: opts.howTo.name,
      step: opts.howTo.steps.map((step, idx) => ({
        '@type': 'HowToStep',
        position: idx + 1,
        name: step.name,
        text: step.text,
      })),
    });
  }

  if (opts.faqs && opts.faqs.length > 0) {
    graph.push(buildFaqNode(`${url}#faq`, opts.faqs));
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function buildCharacterMetadata(character: CharacterEntity): Metadata {
  const displayTier = character.staticData?.appMediaTier || character.overallTier;
  const rerollTier = character.staticData?.appMediaRerollTier || character.rerollTier;
  const cv = character.staticData?.profile?.cv;
  const cvFragment = cv ? `, CV: ${cv}` : '';
  const description = `${character.name} (${character.rarity} ${character.element} ${character.role}${cvFragment}) build in Star Savior: ${displayTier} Overall / ${rerollTier} Reroll tier, best PvE & PvP gear sets, Rescue Journey Arcana deck, skills & Lv.200 stats.`;
  const ogImage = character.staticData?.illustUrl || character.imageUrl;

  return buildPageMetadata({
    title: `${character.name} Build, Tier & Best Arcana — Star Savior Wiki`,
    description,
    path: `/starsavior/characters/${character.slug}`,
    ogImage,
    ogImageAlt: `${character.name} (${character.rarity} ${character.element} ${character.role}) — Star Savior`,
    type: 'article',
    keywords: [
      character.name,
      `${character.name} Star Savior`,
      `${character.name} build`,
      `${character.name} best Arcana`,
      'Star Savior tier list',
      'Star Savior characters',
    ],
  });
}

export function buildCharacterJsonLd(character: CharacterEntity): Record<string, unknown> {
  const path = `/starsavior/characters/${character.slug}`;
  const url = resolveAbsoluteUrl(path);
  const displayTier = character.staticData?.appMediaTier || character.overallTier;
  const rerollTier = character.staticData?.appMediaRerollTier || character.rerollTier;
  const image = resolveAbsoluteUrl(character.staticData?.illustUrl || character.imageUrl);

  const properties: Array<Record<string, unknown>> = [
    { '@type': 'PropertyValue', name: 'Rarity', value: character.rarity },
    { '@type': 'PropertyValue', name: 'Attribute', value: character.element },
    { '@type': 'PropertyValue', name: 'Class', value: character.role },
    { '@type': 'PropertyValue', name: 'Overall Tier', value: displayTier },
    { '@type': 'PropertyValue', name: 'Reroll Tier', value: rerollTier },
    { '@type': 'PropertyValue', name: 'Lv.200 ATK', value: character.baseStats.atk },
    { '@type': 'PropertyValue', name: 'Lv.200 HP', value: character.baseStats.hp },
    { '@type': 'PropertyValue', name: 'Lv.200 DEF', value: character.baseStats.def },
    { '@type': 'PropertyValue', name: 'Lv.200 SPD', value: character.baseStats.spd },
  ];

  if (character.staticData?.profile?.cv) {
    properties.push({
      '@type': 'PropertyValue',
      name: 'Voice Actor (CV)',
      value: character.staticData.profile.cv,
    });
  }

  const topArcanaNames =
    character.bestArcanaSlugs.length > 0
      ? character.bestArcanaSlugs.slice(0, 3).map((s) => s.replace(/-/g, ' ')).join(', ')
      : 'role-matched Power & Endurance SSR Arcana cards';

  const characterFaqs: ReadonlyArray<{ q: string; a: string }> = [
    {
      q: `What tier is ${character.name} in Star Savior?`,
      a: `${character.name} (${character.rarity} ${character.element} ${character.role}) is ranked ${displayTier} Tier Overall and ${rerollTier} Tier for Reroll in Star Savior Patch v2.4.`,
    },
    {
      q: `What are ${character.name}'s max Lv.200 stats in Star Savior?`,
      a: `At Lv.200, ${character.name} has ${character.baseStats.atk} ATK, ${character.baseStats.hp} HP, ${character.baseStats.def} DEF, and ${character.baseStats.spd} SPD.`,
    },
    {
      q: `What are the best Arcana cards and build priority for ${character.name}?`,
      a: `Top recommended Arcana synergies for ${character.name} include ${topArcanaNames}${character.recommendedDupes ? `, with recommended Limit Break investment at ${character.recommendedDupes}` : ''}.`,
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildPublisherReference(),
      buildBreadcrumbNode([
        { name: 'Ascalon.fun Home', path: '/' },
        { name: 'Star Savior Wiki', path: '/starsavior' },
        { name: 'All 59 Characters', path: '/starsavior/characters' },
        { name: character.name, path },
      ]),
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        headline: `${character.name} Build, Skills, Best Arcana & Tier Evaluation — Star Savior`,
        description: truncateMetaDescription(character.summary, 220),
        url,
        image: [image],
        inLanguage: 'en',
        datePublished: '2026-11-12T00:00:00.000Z',
        dateModified: SITE_LASTMOD_ISO,
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.geo-summary'],
        },
        about: {
          '@type': 'Person',
          '@id': `${url}#character`,
          name: character.name,
          ...(() => {
            const altSet = new Set<string>();
            if (character.title && character.title !== character.name) altSet.add(character.title);
            for (const alias of CHARACTER_SEARCH_ALIASES[character.slug] || []) {
              if (alias !== character.name) altSet.add(alias);
            }
            return altSet.size > 0 ? { alternateName: [...altSet] } : {};
          })(),
          description: character.summary,
          image,
          additionalProperty: properties,
        },
        isPartOf: { '@id': `${SITE_URL}/starsavior#videogame` },
      },
      buildFaqNode(`${url}#faq`, characterFaqs),
    ],
  };
}

export function buildGuideMetadata(guide: StarSaviorGuideArticle): Metadata {
  const hasGamePrefix = /star\s*savior/i.test(guide.title);
  const cleanTitle =
    guide.slug === 'promo-codes'
      ? 'Star Savior Promo & Coupon Codes (Nov 2026) — Active List & Redeem Guide'
      : hasGamePrefix
      ? `${guide.title} — Strategy Wiki`
      : `${guide.title} — Star Savior Wiki`;
  const ogImage =
    guide.eyecatchSrc || guide.buttonBannerSrc || '/banners/starsavior/eyecatch/rank_chars.webp';

  return buildPageMetadata({
    title: cleanTitle,
    description: guide.lead,
    path: `/starsavior/guides/${guide.slug}`,
    ogImage,
    ogImageAlt: guide.title,
    type: 'article',
    noIndex: !isGuideIndexable(guide),
    keywords: [
      guide.title,
      'Star Savior',
      `Star Savior ${guide.category}`,
      'Star Savior guide',
      ...(guide.slug === 'promo-codes'
        ? [
            'Star Savior codes 2026',
            'Star Savior coupon codes',
            '26THXCAPTAIN1ST',
            'GIFTREADYANNIV1ST',
            'ENDOFTHEJOURNEY',
          ]
        : guide.slug === 'cosmo-gate'
        ? ['Star Savior Cosmo Gate P8', 'Immortal King Mogulus', 'Beast of the Baskervilles']
        : []),
    ],
  });
}

export function buildGuideJsonLd(guide: StarSaviorGuideArticle): Record<string, unknown> {
  const path = `/starsavior/guides/${guide.slug}`;
  const url = resolveAbsoluteUrl(path);
  const image = resolveAbsoluteUrl(
    guide.eyecatchSrc || guide.buttonBannerSrc || '/banners/starsavior/eyecatch/rank_chars.webp'
  );
  const graph: Array<Record<string, unknown>> = [
    buildPublisherReference(),
    buildBreadcrumbNode([
      { name: 'Ascalon.fun Home', path: '/' },
      { name: 'Star Savior Wiki', path: '/starsavior' },
      { name: guide.title, path },
    ]),
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      headline: guide.title,
      articleSection: guide.category,
      description: truncateMetaDescription(guide.lead, 220),
      url,
      image: [image],
      inLanguage: 'en-US',
      datePublished: '2026-11-12T00:00:00.000Z',
      dateModified: SITE_LASTMOD_ISO,
      author: { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      about: { '@id': `${SITE_URL}/starsavior#videogame` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.geo-summary'],
      },
    },
  ];

  const guideFaqs = GUIDE_SPECIFIC_FAQS[guide.slug];
  if (guideFaqs && guideFaqs.length > 0) {
    graph.push(buildFaqNode(`${url}#faq`, guideFaqs));
  }

  if (guide.slug === 'promo-codes') {
    graph.push({
      '@type': 'HowTo',
      '@id': `${url}#howto`,
      name: 'How to Redeem Star Savior Promo & Coupon Codes',
      step: PROMO_CODES_HOWTO_STEPS.map((step, idx) => ({
        '@type': 'HowToStep',
        position: idx + 1,
        name: step.name,
        text: step.text,
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
