import React from 'react';
import type { Metadata } from 'next';
import { getStarSaviorDataset } from '@/di/container';
import {
  buildPageMetadata,
  buildStarSaviorHubJsonLd,
  STAR_SAVIOR_TIER_LIST_FAQS,
} from '@/application/seo.service';
import { WikiShell } from '@/components/WikiShell';
import { StrongestTierListMacro } from '@/components/macro/StrongestTierListMacro';
import { toTierListClientDataset } from '@/application/client-dataset';
import { JsonLd } from '@/components/micro/JsonLd';

export const revalidate = 300;

const PAGE_TITLE = 'Star Savior Tier List (Nov 2026 · v2.4) — All 59 Saviors Ranked';
const PAGE_DESC =
  'Updated Nov 2026 Star Savior Tier List (Patch v2.4): all 59 SSR & SR Saviors ranked SSS–C. SSS Tier 0 led by Witch of Favoritism, Amora, Professor M & Carmen.';

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: '/starsavior/tier-list',
  ogImage: '/banners/starsavior/eyecatch/rank_chars.webp',
  ogImageAlt: 'Star Savior Strongest Character Tier List',
  type: 'article',
  keywords: [
    'Star Savior tier list',
    'Star Savior strongest character',
    'Star Savior best characters',
    'Amora Star Savior',
    'Professor M Star Savior',
  ],
});

export default async function StrongestTierListPage() {
  const dataset = await getStarSaviorDataset();
  const topUnits = dataset.characters.filter((c) => c.overallTier === 'SS');

  return (
    <>
      <JsonLd
        data={buildStarSaviorHubJsonLd({
          title: PAGE_TITLE,
          description: PAGE_DESC,
          path: '/starsavior/tier-list',
          breadcrumbLabel: 'Strongest Character Tier List',
          image: '/banners/starsavior/eyecatch/rank_chars.webp',
          schemaType: 'Article',
          topCharacters: dataset.characters,
          faqs: STAR_SAVIOR_TIER_LIST_FAQS,
        })}
      />
      <WikiShell
        game={dataset.game}
        topCharacters={topUnits}
        activeNav="tier-list"
        breadcrumbLabel="Strongest Character Tier List"
      >
        <StrongestTierListMacro dataset={toTierListClientDataset(dataset)} />
      </WikiShell>
    </>
  );
}
