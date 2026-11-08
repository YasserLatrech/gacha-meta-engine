import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gachacrest.gg';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'GachaCrest',
  title: {
    default: 'GachaCrest — Gacha Tier Lists, Character Builds & Pull Codex',
    template: '%s | GachaCrest Gacha Wiki & Tier Database',
  },
  description:
    'GachaCrest is the verified English gacha tier list, character build, weapon and support card ranking, boss raid strategy, and pity pull calculator encyclopedia for Star Savior, Heaven Burns Red, Uma Musume: Pretty Derby, and Sword of Convallaria.',
  keywords: [
    'GachaCrest',
    'gacha tier list',
    'gacha character builds',
    'Star Savior tier list',
    'Heaven Burns Red tier list',
    'Uma Musume support card tier list',
    'Sword of Convallaria tier list',
    'gacha pull calculator',
  ],
  openGraph: {
    type: 'website',
    siteName: 'GachaCrest',
    title: 'GachaCrest — Gacha Tier Lists, Character Builds & Pull Codex',
    description:
      'Complete SSS/SS character tier lists, skill multipliers, weapon and support card rankings, boss raid guides, and pull calculators across top gacha RPGs.',
    url: siteUrl,
    images: [
      {
        url: '/gachacrest-logo.jpg',
        width: 1024,
        height: 1024,
        alt: 'GachaCrest — Gacha Tier Lists, Builds & Pull Codex Emblem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GachaCrest — Gacha Tier Lists, Character Builds & Pull Codex',
    description:
      'Verified SSS/SS character tier lists, weapon & support card rankings, boss raid strategies, and pull calculators.',
    images: ['/gachacrest-logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GachaCrest',
    alternateName: ['GachaCrest.gg', 'GachaCrest Wiki', 'GachaCrest Gacha Database'],
    url: siteUrl,
    logo: `${siteUrl}/gachacrest-logo.jpg`,
    description:
      'GachaCrest is a multi-game gacha tier list, character build, weapon & support card ranking, boss raid strategy, and pull calculator encyclopedia.',
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
