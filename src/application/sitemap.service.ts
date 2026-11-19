import { SITE_LASTMOD_ISO, SITE_URL } from './seo.service';

export interface SitemapUrlEntry {
  readonly loc: string;
  readonly lastmod: string;
}

export interface RssFeedItem {
  readonly title: string;
  readonly link: string;
  readonly description: string;
  readonly category: string;
  readonly pubDateIso?: string;
}

const CORE_SITEMAP_PATHS: readonly string[] = [
  '/',
  '/starsavior',
  '/starsavior/tier-list',
  '/starsavior/reroll',
  '/starsavior/characters',
  '/starsavior/arcana',
];

/** Escapes XML-reserved characters inside sitemap text nodes. */
export function escapeSitemapXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

/** Builds deduplicated canonical URL entries for core hubs, characters, and indexable guides. */
export function buildStarSaviorSitemapEntries(
  characterSlugs: readonly string[],
  indexableGuideSlugs: readonly string[],
  lastmodDate: string = SITE_LASTMOD_ISO.slice(0, 10)
): SitemapUrlEntry[] {
  const seen = new Set<string>();
  const entries: SitemapUrlEntry[] = [];

  const pushPath = (routePath: string): void => {
    const loc = `${SITE_URL}${routePath}`;
    if (seen.has(loc)) return;
    seen.add(loc);
    entries.push({ loc, lastmod: lastmodDate });
  };

  for (const corePath of CORE_SITEMAP_PATHS) {
    pushPath(corePath);
  }
  for (const slug of characterSlugs) {
    pushPath(`/starsavior/characters/${slug}`);
  }
  for (const slug of indexableGuideSlugs) {
    pushPath(`/starsavior/guides/${slug}`);
  }

  return entries;
}

/** Renders standard Sitemaps 0.9 UTF-8 XML without noisy RSC or proprietary extensions. */
export function renderSitemapXml(entries: readonly SitemapUrlEntry[]): string {
  const rows = entries.map(
    (entry) =>
      `  <url>\n    <loc>${escapeSitemapXml(entry.loc)}</loc>\n    <lastmod>${escapeSitemapXml(entry.lastmod)}</lastmod>\n  </url>`
  );

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows.join('\n')}\n</urlset>\n`;
}

/** Renders a valid RSS 2.0 UTF-8 feed for Google FeedFetcher, Bing, Discover & AI crawlers. */
export function renderRssFeedXml(
  items: readonly RssFeedItem[],
  lastBuildDateIso: string = SITE_LASTMOD_ISO
): string {
  const buildDateRfc822 = new Date(lastBuildDateIso).toUTCString();
  const rows = items.map((item) => {
    const itemDate = new Date(item.pubDateIso || lastBuildDateIso).toUTCString();
    return [
      '    <item>',
      `      <title>${escapeSitemapXml(item.title)}</title>`,
      `      <link>${escapeSitemapXml(item.link)}</link>`,
      `      <guid isPermaLink="true">${escapeSitemapXml(item.link)}</guid>`,
      `      <description>${escapeSitemapXml(item.description)}</description>`,
      `      <category>${escapeSitemapXml(item.category)}</category>`,
      `      <pubDate>${itemDate}</pubDate>`,
      '    </item>',
    ].join('\n');
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    '    <title>Ascalon.fun — Star Savior Strategy Wiki &amp; Gacha Meta Updates</title>',
    `    <link>${SITE_URL}/</link>`,
    `    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />`,
    '    <description>Verified Star Savior tier lists, active promo codes, reroll rankings, Lv.200 character builds, and 85 Arcana card databases.</description>',
    '    <language>en-us</language>',
    `    <lastBuildDate>${buildDateRfc822}</lastBuildDate>`,
    ...rows,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');
}
