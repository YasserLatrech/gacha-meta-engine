import React from 'react';
import { getStarSaviorDataset } from '@/application/wiki.service';
import { WikiShell } from '@/components/WikiShell';
import { StarSaviorTopMacro } from '@/components/macro/StarSaviorTopMacro';

export const revalidate = 60;

export default async function StarSaviorPortalPage() {
  const dataset = await getStarSaviorDataset();
  const topUnits = dataset.characters.filter((c) => c.overallTier === 'SS');

  return (
    <WikiShell
      game={dataset.game}
      topCharacters={topUnits}
      activeNav="portal"
    >
      <StarSaviorTopMacro dataset={dataset} />
    </WikiShell>
  );
}
