import React from 'react';
import type { Metadata } from 'next';
import { getStarSaviorDataset } from '@/application/wiki.service';
import { buildPageMetadata, buildStarSaviorHubJsonLd } from '@/application/seo.service';
import { WikiShell } from '@/components/WikiShell';
import { CharacterDatabaseMacro } from '@/components/macro/CharacterDatabaseMacro';
import { JsonLd } from '@/components/micro/JsonLd';

export const revalidate = 60;

const PAGE_TITLE = 'Star Savior Characters List — All 57 SSR & SR Lv.200 Stats';
const PAGE_DESC =
  'Complete Star Savior database of all 57 playable SSR & SR Saviors. Filter by Attribute, Class, Rarity & Pool to compare Lv.200 stats, Voice Actors (CV) & builds.';

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: '/starsavior/characters',
  ogImage: '/banners/starsavior/h2/h2_093_characters.webp',
  ogImageAlt: 'Star Savior All 57 Characters List & Lv.200 Stats',
  type: 'website',
  keywords: [
    'Star Savior characters',
    'Star Savior character list',
    'Star Savior voice actors',
    'Star Savior stats',
  ],
});

export default async function CharacterDatabasePage() {
  const dataset = await getStarSaviorDataset();
  const topUnits = dataset.characters.filter((c) => c.overallTier === 'SS');

  return (
    <>
      <JsonLd
        data={buildStarSaviorHubJsonLd({
          title: PAGE_TITLE,
          description: PAGE_DESC,
          path: '/starsavior/characters',
          breadcrumbLabel: 'All 57 Characters List',
          image: '/banners/starsavior/h2/h2_093_characters.webp',
          schemaType: 'CollectionPage',
          topCharacters: dataset.characters,
        })}
      />
      <WikiShell
        game={dataset.game}
        topCharacters={topUnits}
        activeNav="characters"
        breadcrumbLabel="All 57 Characters List"
      >
        <CharacterDatabaseMacro dataset={dataset} />
      </WikiShell>
    </>
  );
}
