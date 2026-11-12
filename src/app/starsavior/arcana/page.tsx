import React from 'react';
import type { Metadata } from 'next';
import { getStarSaviorDataset } from '@/di/container';
import { buildPageMetadata, buildStarSaviorHubJsonLd } from '@/application/seo.service';
import { WikiShell } from '@/components/WikiShell';
import { ArcanaTierListMacro } from '@/components/macro/ArcanaTierListMacro';
import { JsonLd } from '@/components/micro/JsonLd';

export const revalidate = 300;

const PAGE_TITLE = 'Star Savior Arcana Tier List & All 85 Cards Database';
const PAGE_DESC =
  'Star Savior Strongest Arcana Tier List & complete 85-card SSR/SR/R encyclopedia. Filter by Power, Health, Endurance, Focus & Protect tags and Special Potentials.';

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: '/starsavior/arcana',
  ogImage: '/banners/starsavior/eyecatch/rank_arcana.webp',
  ogImageAlt: 'Star Savior Strongest Arcana Tier List & 85 Cards Database',
  type: 'website',
  keywords: [
    'Star Savior Arcana tier list',
    'Star Savior best Arcana',
    'Star Savior Arcana list',
    'Rescue Journey Arcana deck',
  ],
});

export default async function ArcanaTierListPage() {
  const dataset = await getStarSaviorDataset();
  const topUnits = dataset.characters.filter((c) => c.overallTier === 'SS');
  const topArcana = dataset.arcana.filter((a) => a.tier === 'SS');

  return (
    <>
      <JsonLd
        data={buildStarSaviorHubJsonLd({
          title: PAGE_TITLE,
          description: PAGE_DESC,
          path: '/starsavior/arcana',
          breadcrumbLabel: 'Strongest Arcana Tier List (85 Cards)',
          image: '/banners/starsavior/eyecatch/rank_arcana.webp',
          schemaType: 'CollectionPage',
          topArcana,
        })}
      />
      <WikiShell
        game={dataset.game}
        topCharacters={topUnits}
        activeNav="arcana"
        breadcrumbLabel="Strongest Arcana Tier List (85 Cards)"
      >
        <ArcanaTierListMacro dataset={dataset} />
      </WikiShell>
    </>
  );
}
