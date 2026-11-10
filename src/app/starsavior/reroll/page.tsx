import React from 'react';
import { getStarSaviorDataset } from '@/application/wiki.service';
import { WikiShell } from '@/components/WikiShell';
import { RerollTierListMacro } from '@/components/macro/RerollTierListMacro';

export const revalidate = 60;

export default async function RerollTierListPage() {
  const dataset = await getStarSaviorDataset();
  const topUnits = dataset.characters.filter((c) => c.overallTier === 'SS');

  return (
    <WikiShell
      game={dataset.game}
      topCharacters={topUnits}
      activeNav="reroll"
      breadcrumbLabel="Reroll Tier List & Stopping Line"
    >
      <RerollTierListMacro dataset={dataset} />
    </WikiShell>
  );
}
