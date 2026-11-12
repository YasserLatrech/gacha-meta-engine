import type { Metadata } from 'next';
import type {
  CharacterEntity,
  ArcanaEntity,
  StarSaviorGuideArticle,
} from '@/domain/schemas';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ascalon.gg').replace(
  /\/$/,
  ''
);

export const SITE_NAME = 'Ascalon.gg';
export const SITE_LASTMOD_ISO = '2026-11-10T00:00:00.000Z';

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
    alternates: {
      canonical: canonicalUrl,
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

export function buildPublisherReference(): Record<string, unknown> {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
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
      },
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: 'Ascalon.gg — Mobile Game Rankings, Release Calendar & Strategy Wiki',
        description:
          'Mobile & gacha game strategy portal featuring top strategy wikis, upcoming game release calendar with 1-vote-per-IP reader rankings, and daily App Store charts.',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/starsavior#videogame` },
        dateModified: SITE_LASTMOD_ISO,
      },
      {
        '@type': 'ItemList',
        name: 'Featured Strategy Wiki Hubs on Ascalon.gg',
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
        { name: 'Ascalon.gg Home', path: '/' },
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

export function buildStarSaviorHubJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  breadcrumbLabel: string;
  image: string;
  schemaType?: 'Article' | 'CollectionPage';
  topCharacters?: CharacterEntity[];
  topArcana?: ArcanaEntity[];
}): Record<string, unknown> {
  const url = resolveAbsoluteUrl(opts.path);
  const graph: Array<Record<string, unknown>> = [
    buildPublisherReference(),
    buildBreadcrumbNode([
      { name: 'Ascalon.gg Home', path: '/' },
      { name: 'Star Savior Wiki', path: '/starsavior' },
      { name: opts.breadcrumbLabel, path: opts.path },
    ]),
    {
      '@type': opts.schemaType || 'Article',
      '@id': `${url}#primary`,
      headline: opts.title,
      name: opts.title,
      description: truncateMetaDescription(opts.description, 220),
      url,
      image: [resolveAbsoluteUrl(opts.image)],
      inLanguage: 'en',
      datePublished: SITE_LASTMOD_ISO,
      dateModified: SITE_LASTMOD_ISO,
      author: { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      about: { '@id': `${SITE_URL}/starsavior#videogame` },
    },
  ];

  if (opts.topCharacters && opts.topCharacters.length > 0) {
    graph.push({
      '@type': 'ItemList',
      name: `${opts.breadcrumbLabel} — Top Ranked Saviors`,
      numberOfItems: opts.topCharacters.length,
      itemListElement: opts.topCharacters.slice(0, 15).map((c, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: `${c.name} (${c.rarity} ${c.element} ${c.role})`,
        url: `${SITE_URL}/starsavior/characters/${c.slug}`,
      })),
    });
  }

  if (opts.topArcana && opts.topArcana.length > 0) {
    graph.push({
      '@type': 'ItemList',
      name: `${opts.breadcrumbLabel} — Top SSR Arcana Cards`,
      numberOfItems: opts.topArcana.length,
      itemListElement: opts.topArcana.slice(0, 15).map((a, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: `${a.name} (${a.rarity} ${a.staticData?.statTag || 'Arcana'})`,
        url: `${SITE_URL}/starsavior/arcana#${a.slug}`,
      })),
    });
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

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildPublisherReference(),
      buildBreadcrumbNode([
        { name: 'Ascalon.gg Home', path: '/' },
        { name: 'Star Savior Wiki', path: '/starsavior' },
        { name: 'All 59 Characters', path: '/starsavior/characters' },
        { name: character.name, path },
      ]),
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: `${character.name} Build, Skills, Best Arcana & Tier Evaluation — Star Savior`,
        description: truncateMetaDescription(character.summary, 220),
        url,
        image: [image],
        inLanguage: 'en',
        datePublished: SITE_LASTMOD_ISO,
        dateModified: SITE_LASTMOD_ISO,
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        about: {
          '@type': 'Person',
          '@id': `${url}#character`,
          name: character.name,
          description: character.summary,
          image,
          additionalProperty: properties,
        },
        isPartOf: { '@id': `${SITE_URL}/starsavior#videogame` },
      },
    ],
  };
}

export function buildGuideMetadata(guide: StarSaviorGuideArticle): Metadata {
  const hasGamePrefix = /star\s*savior/i.test(guide.title);
  const cleanTitle = hasGamePrefix
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
    keywords: [
      guide.title,
      'Star Savior',
      `Star Savior ${guide.category}`,
      'Star Savior guide',
    ],
  });
}

export function buildGuideJsonLd(guide: StarSaviorGuideArticle): Record<string, unknown> {
  const path = `/starsavior/guides/${guide.slug}`;
  const url = resolveAbsoluteUrl(path);
  const image = resolveAbsoluteUrl(
    guide.eyecatchSrc || guide.buttonBannerSrc || '/banners/starsavior/eyecatch/rank_chars.webp'
  );

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildPublisherReference(),
      buildBreadcrumbNode([
        { name: 'Ascalon.gg Home', path: '/' },
        { name: 'Star Savior Wiki', path: '/starsavior' },
        { name: guide.title, path },
      ]),
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: guide.title,
        articleSection: guide.category,
        description: truncateMetaDescription(guide.lead, 220),
        url,
        image: [image],
        inLanguage: 'en',
        datePublished: SITE_LASTMOD_ISO,
        dateModified: SITE_LASTMOD_ISO,
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        about: { '@id': `${SITE_URL}/starsavior#videogame` },
      },
    ],
  };
}
