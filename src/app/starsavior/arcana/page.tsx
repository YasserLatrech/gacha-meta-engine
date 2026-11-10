import React from 'react';
import { getStarSaviorDataset } from '@/application/wiki.service';
import { WikiShell } from '@/components/WikiShell';
import { ArcanaTierListMacro } from '@/components/macro/ArcanaTierListMacro';

export const revalidate = 60;

export default async function ArcanaTierListPage() {
  const dataset = await getStarSaviorDataset();
  const topUnits = dataset.characters.filter((c) => c.overallTier === 'SS');

  return (
    <WikiShell
      game={dataset.game}
      topCharacters={topUnits}
      activeNav="arcana"
      breadcrumbLabel="Strongest Arcana Tier List (83 Cards)"
    >
      <ArcanaTierListMacro dataset={dataset} />
    </WikiShell>
  );
}
