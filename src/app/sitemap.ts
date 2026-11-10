import type { MetadataRoute } from 'next';
import { getStarSaviorWikiData } from '../application/wiki.service';
import { STAR_SAVIOR_GUIDES } from '../infrastructure/db/starsavior-guides-data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3005';
  const dataset = await getStarSaviorWikiData();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/starsavior`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/starsavior/tier-list`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.95 },
    { url: `${baseUrl}/starsavior/reroll`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/starsavior/characters`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/starsavior/arcana`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
  ];

  const charRoutes: MetadataRoute.Sitemap = dataset.characters.map((c) => ({
    url: `${baseUrl}/starsavior/characters/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const guideRoutes: MetadataRoute.Sitemap = STAR_SAVIOR_GUIDES.map((g) => ({
    url: `${baseUrl}/starsavior/guides/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...charRoutes, ...guideRoutes];
}
