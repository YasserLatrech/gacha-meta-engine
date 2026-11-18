import { getAllStarSaviorGuides, getStarSaviorWikiData } from '@/di/container';
import { getIndexableStarSaviorGuides } from '@/application/seo.service';
import { buildStarSaviorSitemapEntries, renderSitemapXml } from '@/application/sitemap.service';

export const dynamic = 'force-static';
export const revalidate = 3600;

/** Serves clean UTF-8 XML sitemap without Next.js App Router RSC Vary headers. */
export async function GET(): Promise<Response> {
  const dataset = await getStarSaviorWikiData();
  const indexableGuides = getIndexableStarSaviorGuides(getAllStarSaviorGuides());
  const entries = buildStarSaviorSitemapEntries(
    dataset.characters.map((character) => character.slug),
    indexableGuides.map((guide) => guide.slug)
  );
  const xml = renderSitemapXml(entries);
  const byteLength = Buffer.byteLength(xml, 'utf8');

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Content-Length': String(byteLength),
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
