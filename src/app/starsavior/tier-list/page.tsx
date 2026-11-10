import React from 'react';
import { getStarSaviorDataset } from '@/application/wiki.service';
import { WikiShell } from '@/components/WikiShell';
import { StrongestTierListMacro } from '@/components/macro/StrongestTierListMacro';

export const revalidate = 60;

export default async function StrongestTierListPage() {
  const dataset = await getStarSaviorDataset();
  const topUnits = dataset.characters.filter((c) => c.overallTier === 'SS');

  return (
    <WikiShell
      game={dataset.game}
      topCharacters={topUnits}
      activeNav="tier-list"
      breadcrumbLabel="Strongest Character Tier List"
    >
      <StrongestTierListMacro dataset={dataset} />
    </WikiShell>
  );
}
