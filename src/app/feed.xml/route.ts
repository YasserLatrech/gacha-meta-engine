import { getAllStarSaviorGuides, getStarSaviorWikiData } from '@/di/container';
import {
  SITE_LASTMOD_ISO,
  SITE_URL,
  getIndexableStarSaviorGuides,
} from '@/application/seo.service';
import { renderRssFeedXml, type RssFeedItem } from '@/application/sitemap.service';

export const dynamic = 'force-static';
export const revalidate = 3600;

/** Serves clean UTF-8 RSS 2.0 feed for Google FeedFetcher, Discover, and AI answer engines. */
export async function GET(): Promise<Response> {
  const dataset = await getStarSaviorWikiData();
  const indexableGuides = getIndexableStarSaviorGuides(getAllStarSaviorGuides());

  const coreItems: RssFeedItem[] = [
    {
      title: 'Star Savior Tier List (Nov 2026 · v2.4) — All 59 Saviors Ranked',
      link: `${SITE_URL}/starsavior/tier-list`,
      description:
        'Patch v2.4 PvE and Boss Tier List ranking all 59 SSR & SR Saviors across SSS–C tiers (SSS Tier 0: Witch of Favoritism, Amora, Professor M, Carmen: Eternal Promise, Bunnygirl Charlotte, Smile: Sunshine Cat).',
      category: 'Tier List',
    },
    {
      title: 'Star Savior Strategy Wiki — Complete English Hub & 1st Anniversary Guide',
      link: `${SITE_URL}/starsavior`,
      description:
        'Complete English Star Savior database with active 1st Anniversary banners, Rescue Journey mechanics, Cube Palace bosses, and all 59 Saviors & 85 Arcana cards.',
      category: 'Wiki Hub',
    },
    {
      title: 'Star Savior Reroll Tier List & 10-Minute Fast Reroll Guide',
      link: `${SITE_URL}/starsavior/reroll`,
      description:
        'Best starting SSR Saviors and Power/Endurance Arcana cards to target on a 10-minute guest reroll run.',
      category: 'Reroll Guide',
    },
    {
      title: 'Star Savior All 59 Characters Database & Lv.200 Combat Stats',
      link: `${SITE_URL}/starsavior/characters`,
      description:
        'Filterable Lv.200 stats (ATK, HP, DEF, SPD), Attributes, Classes, Resonance materials, and Voice Actors for all 59 playable Saviors.',
      category: 'Database',
    },
    {
      title: 'Star Savior Strongest Arcana Tier List & All 85 Cards',
      link: `${SITE_URL}/starsavior/arcana`,
      description:
        'Complete 85-card SSR, SR, and R Arcana encyclopedia categorized by Power, Health, Endurance, Focus, and Protect tags.',
      category: 'Arcana',
    },
  ];

  const guideItems: RssFeedItem[] = indexableGuides.map((g) => ({
    title: `${g.title} — Star Savior Wiki`,
    link: `${SITE_URL}/starsavior/guides/${g.slug}`,
    description: g.lead,
    category: g.category,
  }));

  const topCharacterItems: RssFeedItem[] = dataset.characters
    .filter((c) => {
      const tier = c.staticData?.appMediaTier || c.overallTier;
      return tier === 'SSS' || tier === 'SS';
    })
    .slice(0, 20)
    .map((c) => ({
      title: `${c.name} Build, Tier & Best Arcana — Star Savior Wiki`,
      link: `${SITE_URL}/starsavior/characters/${c.slug}`,
      description: `${c.name} (${c.rarity} ${c.element} ${c.role}) evaluation: ${c.staticData?.appMediaTier || c.overallTier} Overall tier, best PvE & PvP equipment sets, Rescue Journey Arcana deck, and Lv.200 stats.`,
      category: 'Character Build',
    }));

  const xml = renderRssFeedXml([...coreItems, ...guideItems, ...topCharacterItems], SITE_LASTMOD_ISO);
  const byteLength = Buffer.byteLength(xml, 'utf8');

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Content-Length': String(byteLength),
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
