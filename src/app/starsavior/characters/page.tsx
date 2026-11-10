import React from 'react';
import { getStarSaviorDataset } from '@/application/wiki.service';
import { WikiShell } from '@/components/WikiShell';
import { CharacterDatabaseMacro } from '@/components/macro/CharacterDatabaseMacro';

export const revalidate = 60;

export default async function CharacterDatabasePage() {
  const dataset = await getStarSaviorDataset();
  const topUnits = dataset.characters.filter((c) => c.overallTier === 'SS');

  return (
    <WikiShell
      game={dataset.game}
      topCharacters={topUnits}
      activeNav="characters"
      breadcrumbLabel="All 57 Characters List"
    >
      <CharacterDatabaseMacro dataset={dataset} />
    </WikiShell>
  );
}
