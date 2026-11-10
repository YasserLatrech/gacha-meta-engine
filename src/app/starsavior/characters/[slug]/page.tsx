import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getStarSaviorDataset, resolveCharacterSlug } from '@/application/wiki.service';
import { WikiShell } from '@/components/WikiShell';
import { CharacterDetailMacro } from '@/components/macro/CharacterDetailMacro';

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = resolveCharacterSlug(slug);
  const dataset = await getStarSaviorDataset();
  const character = dataset.characters.find((c) => c.slug === canonicalSlug);
  if (!character) {
    return { title: 'Savior Not Found | Star Savior Strategy Wiki' };
  }
  return {
    title: `${character.name} Build, Skills & Evaluation | Star Savior Strategy Wiki`,
    description: character.summary,
  };
}

export default async function CharacterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const canonicalSlug = resolveCharacterSlug(slug);
  const dataset = await getStarSaviorDataset();
  const character = dataset.characters.find((c) => c.slug === canonicalSlug);

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
