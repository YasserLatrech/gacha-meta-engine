import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getGameHubData } from '../../application/services/meta-query.service';
import { SiteHeader } from '../../components/SiteHeader';
import { GameWikiClient } from '../../components/GameWikiClient';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ gameSlug: string }>;
}): Promise<Metadata> {
  const { gameSlug } = await params;
  const hub = await getGameHubData(gameSlug);
  if (!hub) return { title: 'Game Not Found' };

  return {
    title: `${hub.name} Tier List, Character Builds, Weapons & Boss Raid Wiki`,
    description: `Complete ${hub.name} encyclopedic wiki (${hub.globalPatchVersion}). SSS/SS character tier lists, weapon and support card rankings, boss raid guides, and ${hub.currencyName} pull calculator.`,
  };
}

export default async function GameHubPage({
  params,
}: {
  params: Promise<{ gameSlug: string }>;
}) {
  const { gameSlug } = await params;
  const hub = await getGameHubData(gameSlug);
  if (!hub) {
    notFound();
  }

  const datasetJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `${hub.name} Character Tier List & Skill Multiplier Database`,
    description: `Character stats, skill multipliers, weapon rankings, boss strategies, and banner schedules for ${hub.name}.`,
    version: hub.globalPatchVersion,
    keywords: [
      `${hub.name} tier list`,
      `${hub.name} upcoming banners`,
      `${hub.name} boss guide`,
      `${hub.name} ${hub.currencyName} calculator`,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }}
      />
      <SiteHeader
        activeGameSlug={hub.slug}
        activeGameName={hub.name}
        breadcrumbLeaf="Tier List, Weapons, Bosses & Banners"
      />
      <Suspense fallback={<div className="portal-container">Loading wiki database...</div>}>
        <GameWikiClient hub={hub} />
      </Suspense>
    </>
  );
}
