import type { MetadataRoute } from 'next';
import { getStarSaviorWikiData, getAllStarSaviorGuides } from '@/di/container';
import {
  SITE_LASTMOD_ISO,
  SITE_URL,
  resolveAbsoluteUrl,
} from '@/application/seo.service';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dataset = await getStarSaviorWikiData();
  const guides = getAllStarSaviorGuides();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: SITE_LASTMOD_ISO,
      changeFrequency: 'daily',
      priority: 1.0,
      images: [resolveAbsoluteUrl('/banners/home/en_home_01.webp')],
    },
    {
      url: `${SITE_URL}/starsavior`,
      lastModified: SITE_LASTMOD_ISO,
      changeFrequency: 'daily',
      priority: 1.0,
      images: [resolveAbsoluteUrl('/banners/starsavior/eyecatch/gameinfo_01.webp')],
    },
    {
      url: `${SITE_URL}/starsavior/tier-list`,
      lastModified: SITE_LASTMOD_ISO,
      changeFrequency: 'daily',
      priority: 0.95,
      images: [resolveAbsoluteUrl('/banners/starsavior/eyecatch/rank_chars.webp')],
    },
    {
      url: `${SITE_URL}/starsavior/reroll`,
      lastModified: SITE_LASTMOD_ISO,
      changeFrequency: 'daily',
      priority: 0.9,
      images: [resolveAbsoluteUrl('/banners/starsavior/eyecatch/rank_reroll.webp')],
    },
    {
      url: `${SITE_URL}/starsavior/characters`,
      lastModified: SITE_LASTMOD_ISO,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [resolveAbsoluteUrl('/banners/starsavior/h2/h2_093_characters.webp')],
    },
    {
      url: `${SITE_URL}/starsavior/arcana`,
      lastModified: SITE_LASTMOD_ISO,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: [resolveAbsoluteUrl('/banners/starsavior/eyecatch/rank_arcana.webp')],
    },
  ];

  const charRoutes: MetadataRoute.Sitemap = dataset.characters.map((c) => ({
    url: `${SITE_URL}/starsavior/characters/${c.slug}`,
    lastModified: SITE_LASTMOD_ISO,
    changeFrequency: 'weekly',
    priority: 0.8,
    images: [resolveAbsoluteUrl(c.staticData?.illustUrl || c.imageUrl)],
  }));

  const guideRoutes: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${SITE_URL}/starsavior/guides/${g.slug}`,
    lastModified: SITE_LASTMOD_ISO,
    changeFrequency: 'weekly',
    priority: 0.8,
    ...(g.eyecatchSrc || g.buttonBannerSrc
      ? { images: [resolveAbsoluteUrl(g.eyecatchSrc || g.buttonBannerSrc || '/banners/starsavior/eyecatch/rank_chars.webp')] }
      : {}),
  }));

  return [...staticRoutes, ...charRoutes, ...guideRoutes];
}
