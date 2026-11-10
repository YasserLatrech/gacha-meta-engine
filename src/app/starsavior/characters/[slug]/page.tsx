import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getStarSaviorDataset, resolveCharacterSlug } from '@/application/wiki.service';
import { buildCharacterJsonLd, buildCharacterMetadata } from '@/application/seo.service';
import { STAR_SAVIOR_CHARACTERS_SEED } from '@/infrastructure/db/seed-data';
import { WikiShell } from '@/components/WikiShell';
import { CharacterDetailMacro } from '@/components/macro/CharacterDetailMacro';
import { JsonLd } from '@/components/micro/JsonLd';

export const revalidate = 60;

export function generateStaticParams() {
  return STAR_SAVIOR_CHARACTERS_SEED.map((c) => ({ slug: c.slug }));
}

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
    return {
      title: 'Savior Not Found — Star Savior Wiki',
      robots: { index: false, follow: false },
    };
  }
  return buildCharacterMetadata(character);
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
    <>
      <JsonLd data={buildCharacterJsonLd(character)} />
      <WikiShell
        game={dataset.game}
        topCharacters={topUnits}
        activeNav="characters"
        breadcrumbLabel={`${character.name} Build & Evaluation`}
      >
        <CharacterDetailMacro character={character} dataset={dataset} />
      </WikiShell>
    </>
  );
}
