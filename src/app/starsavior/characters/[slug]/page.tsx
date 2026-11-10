import React from 'react';
import { notFound } from 'next/navigation';
import { getStarSaviorDataset } from '@/application/wiki.service';
import { WikiShell } from '@/components/WikiShell';
import { CharacterDetailMacro } from '@/components/macro/CharacterDetailMacro';

export const revalidate = 60;

export default async function CharacterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dataset = await getStarSaviorDataset();
  const character = dataset.characters.find((c) => c.slug === slug);

  if (!character) {
    notFound();
  }

  const topUnits = dataset.characters.filter((c) => c.overallTier === 'SS');

  return (
    <WikiShell
      game={dataset.game}
      topCharacters={topUnits}
      activeNav="characters"
      breadcrumbLabel={`${character.name} Build & Evaluation`}
    >
      <CharacterDetailMacro character={character} dataset={dataset} />
    </WikiShell>
  );
}
