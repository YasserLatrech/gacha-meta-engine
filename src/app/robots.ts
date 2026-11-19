import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/application/seo.service';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/analytics'],
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Applebot',
          'Applebot-Extended',
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'PerplexityBot',
          'Perplexity-User',
          'ClaudeBot',
          'Claude-SearchBot',
          'Google-Extended',
          'DuckAssistBot',
          'Amazonbot',
        ],
        allow: ['/', '/llms.txt', '/llms-full.txt', '/feed.xml'],
        disallow: ['/api/', '/analytics'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
