import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getStarSaviorDataset,
  getAllStarSaviorGuides,
  getStarSaviorGuideBySlug,
  getStarSaviorRankingGroups,
} from '@/di/container';
import { buildGuideJsonLd, buildGuideMetadata } from '@/application/seo.service';
import { WikiShell } from '@/components/WikiShell';
import { StarSaviorGuideMacro } from '@/components/macro/StarSaviorGuideMacro';
import { JsonLd } from '@/components/micro/JsonLd';

export const revalidate = 300;

export function generateStaticParams() {
  return getAllStarSaviorGuides().map((g) => ({ guideSlug: g.slug }));
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

  const [dataset, rankingGroups] = await Promise.all([
    getStarSaviorDataset(),
    Promise.resolve(getStarSaviorRankingGroups()),
  ]);
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
        <StarSaviorGuideMacro
          guide={guide}
          dataset={dataset}
          rankingGroups={rankingGroups}
        />
      </WikiShell>
    </>
  );
}
