import type { MetadataRoute } from 'next';
import { getPortalOverview } from '../application/services/meta-query.service';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3005';
  const games = await getPortalOverview();

  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  for (const g of games) {
    entries.push({
      url: `${baseUrl}/${g.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    });
    for (const u of g.units) {
      entries.push({
        url: `${baseUrl}/${g.slug}/units/${u.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  return entries;
}
