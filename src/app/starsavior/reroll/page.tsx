import React from 'react';
import type { Metadata } from 'next';
import { getStarSaviorDataset } from '@/di/container';
import {
  buildPageMetadata,
  buildStarSaviorHubJsonLd,
  STAR_SAVIOR_REROLL_FAQS,
} from '@/application/seo.service';
import { WikiShell } from '@/components/WikiShell';
import { RerollTierListMacro } from '@/components/macro/RerollTierListMacro';
import { JsonLd } from '@/components/micro/JsonLd';

export const revalidate = 300;

const PAGE_TITLE = 'Star Savior Reroll Tier List — Best Starting SSRs & Guide';
const PAGE_DESC =
  'Star Savior Reroll Tier List & 10-minute fast reroll guide: best starting SSR Saviors (Carmen: Eternal Promise, Amora), Power Arcana targets & stopping line.';

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: '/starsavior/reroll',
  ogImage: '/banners/starsavior/eyecatch/rank_reroll.webp',
  ogImageAlt: 'Star Savior Reroll Tier List & Stopping Line',
  type: 'article',
  keywords: [
    'Star Savior reroll tier list',
    'Star Savior reroll guide',
    'Star Savior best starter',
    'Star Savior how to reroll',
  ],
});

export default async function RerollTierListPage() {
  const dataset = await getStarSaviorDataset();
  const topUnits = dataset.characters.filter((c) => c.overallTier === 'SS');
  const rerollTop = dataset.characters.filter((c) => c.rerollTier === 'SS');

  return (
    <>
      <JsonLd
        data={buildStarSaviorHubJsonLd({
          title: PAGE_TITLE,
          description: PAGE_DESC,
          path: '/starsavior/reroll',
          breadcrumbLabel: 'Reroll Tier List & Stopping Line',
          image: '/banners/starsavior/eyecatch/rank_reroll.webp',
          schemaType: 'Article',
          topCharacters: rerollTop,
          faqs: STAR_SAVIOR_REROLL_FAQS,
        })}
      />
      <WikiShell
        game={dataset.game}
        topCharacters={topUnits}
        activeNav="reroll"
        breadcrumbLabel="Reroll Tier List & Stopping Line"
      >
        <RerollTierListMacro dataset={dataset} />
      </WikiShell>
    </>
  );
}
