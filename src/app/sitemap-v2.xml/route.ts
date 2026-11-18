import { GET as getCanonicalSitemap } from '../sitemap.xml/route';

export const dynamic = 'force-static';
export const revalidate = 3600;

/** Serves the canonical UTF-8 XML sitemap at /sitemap-v2.xml to bypass stuck GSC URL cache. */
export async function GET(): Promise<Response> {
  return getCanonicalSitemap();
}
