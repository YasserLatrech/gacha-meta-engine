import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getStarSaviorDataset } from '@/application/wiki.service';
import { buildGuideJsonLd, buildGuideMetadata } from '@/application/seo.service';
import {
  getStarSaviorGuideBySlug,
  STAR_SAVIOR_GUIDES,
} from '@/infrastructure/db/starsavior-guides-data';
import { WikiShell } from '@/components/WikiShell';
import { StarSaviorGuideMacro } from '@/components/macro/StarSaviorGuideMacro';
import { JsonLd } from '@/components/micro/JsonLd';

export const revalidate = 300;

export function generateStaticParams() {
  return STAR_SAVIOR_GUIDES.map((g) => ({ guideSlug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ guideSlug: string }>;
}): Promise<Metadata> {
  const { guideSlug } = await params;
  const guide = getStarSaviorGuideBySlug(guideSlug);
  if (!guide) {
    return {
      title: 'Guide Not Found — Star Savior Wiki',
      robots: { index: false, follow: false },
    };
  }
  return buildGuideMetadata(guide);
}

export default async function StarSaviorGuidePage({
  params,
}: {
  params: Promise<{ guideSlug: string }>;
}) {
  const { guideSlug } = await params;
  const guide = getStarSaviorGuideBySlug(guideSlug);

  if (!guide) {
    notFound();
  }

  const dataset = await getStarSaviorDataset();
  const topUnits = dataset.characters.filter((c) => c.overallTier === 'SS');

  const activeNav =
    guide.category === 'Rankings'
      ? 'tier-list'
      : guide.category === 'Database'
      ? 'characters'
      : 'portal';

  return (
    <>
      <JsonLd data={buildGuideJsonLd(guide)} />
      <WikiShell
        game={dataset.game}
        topCharacters={topUnits}
        activeNav={activeNav}
        breadcrumbLabel={guide.title}
      >
        <StarSaviorGuideMacro guide={guide} dataset={dataset} />
      </WikiShell>
    </>
  );
}
