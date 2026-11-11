import React from 'react';
import type { Metadata } from 'next';
import { getStarSaviorDataset } from '@/di/container';
import { buildPageMetadata, buildStarSaviorPortalJsonLd } from '@/application/seo.service';
import { WikiShell } from '@/components/WikiShell';
import { StarSaviorTopMacro } from '@/components/macro/StarSaviorTopMacro';
import { JsonLd } from '@/components/micro/JsonLd';

export const revalidate = 300;

export const metadata: Metadata = buildPageMetadata({
  title: 'Star Savior Wiki — Tier List, Reroll, Saviors & Arcana',
  description:
    'Complete Star Savior English strategy wiki (v2.4): Strongest Character & Arcana Tier Lists, Reroll Guide, Journey Event Checker, all 57 Saviors & 83 Arcana.',
  path: '/starsavior',
  ogImage: '/banners/starsavior/eyecatch/gameinfo_01.webp',
  ogImageAlt: 'Star Savior Complete English Strategy Wiki',
  type: 'website',
  keywords: [
    'Star Savior wiki',
    'Star Savior guide',
    'Star Savior tier list',
    'Star Savior reroll',
    'Star Savior coupon codes',
    'Star Savior Arcana',
  ],
});

export default async function StarSaviorPortalPage() {
  const dataset = await getStarSaviorDataset();
  const topUnits = dataset.characters.filter((c) => c.overallTier === 'SS');

  return (
    <>
      <JsonLd data={buildStarSaviorPortalJsonLd(dataset.game.patchVersion)} />
      <WikiShell
        game={dataset.game}
        topCharacters={topUnits}
        activeNav="portal"
      >
        <StarSaviorTopMacro dataset={dataset} />
      </WikiShell>
    </>
  );
}
