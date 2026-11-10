import React from 'react';
import type { Metadata } from 'next';
import { getStarSaviorDataset } from '@/application/wiki.service';
import { buildPageMetadata, buildStarSaviorHubJsonLd } from '@/application/seo.service';
import { WikiShell } from '@/components/WikiShell';
import { StrongestTierListMacro } from '@/components/macro/StrongestTierListMacro';
import { JsonLd } from '@/components/micro/JsonLd';

export const revalidate = 60;

const PAGE_TITLE = 'Star Savior Tier List — Strongest Characters Ranking (v2.4)';
const PAGE_DESC =
  'Star Savior Strongest Character Tier List (v2.4) ranking all 57 SSR & SR Saviors across SSS–C tiers by Attacker, Debuffer, Supporter & Defender roles.';

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
          topCharacters: topUnits,
        })}
      />
      <WikiShell
        game={dataset.game}
        topCharacters={topUnits}
        activeNav="tier-list"
        breadcrumbLabel="Strongest Character Tier List"
      >
        <StrongestTierListMacro dataset={dataset} />
      </WikiShell>
    </>
  );
}
