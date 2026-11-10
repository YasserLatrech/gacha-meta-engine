import React from 'react';
import { getStarSaviorDataset } from '@/application/wiki.service';
import { AscalonHomeMacro } from '@/components/macro/AscalonHomeMacro';

export const revalidate = 60;

export default async function AscalonHomePage() {
  const dataset = await getStarSaviorDataset();
  return <AscalonHomeMacro dataset={dataset} />;
}
