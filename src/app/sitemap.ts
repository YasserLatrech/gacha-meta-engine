import type { MetadataRoute } from 'next';
import { getStarSaviorWikiData } from '../application/wiki.service';
import { SITE_LASTMOD_ISO, SITE_URL } from '../application/seo.service';
import { STAR_SAVIOR_GUIDES } from '../infrastructure/db/starsavior-guides-data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dataset = await getStarSaviorWikiData();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: SITE_LASTMOD_ISO, changeFrequency: 'daily', priority: 1.0 },
    { url: `${SITE_URL}/starsavior`, lastModified: SITE_LASTMOD_ISO, changeFrequency: 'daily', priority: 1.0 },
    { url: `${SITE_URL}/starsavior/tier-list`, lastModified: SITE_LASTMOD_ISO, changeFrequency: 'daily', priority: 0.95 },
    { url: `${SITE_URL}/starsavior/reroll`, lastModified: SITE_LASTMOD_ISO, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/starsavior/characters`, lastModified: SITE_LASTMOD_ISO, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/starsavior/arcana`, lastModified: SITE_LASTMOD_ISO, changeFrequency: 'weekly', priority: 0.85 },
  ];

  const charRoutes: MetadataRoute.Sitemap = dataset.characters.map((c) => ({
    url: `${SITE_URL}/starsavior/characters/${c.slug}`,
    lastModified: SITE_LASTMOD_ISO,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const guideRoutes: MetadataRoute.Sitemap = STAR_SAVIOR_GUIDES.map((g) => ({
    url: `${SITE_URL}/starsavior/guides/${g.slug}`,
    lastModified: SITE_LASTMOD_ISO,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...charRoutes, ...guideRoutes];
}
