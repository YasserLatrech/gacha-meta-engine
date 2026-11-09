import React from 'react';
import type { Metadata } from 'next';
import { getStarSaviorWikiData } from '../../../application/wiki.service';
import { WikiShell } from '../../../components/WikiShell';
import { ArcanaListClient } from '../../../components/ArcanaListClient';

export const metadata: Metadata = {
  title: 'Star Savior SSR Arcana Tier List — Best Arcana Cards & Effects',
  description:
    'Complete Star Savior SSR Arcana Tier List and database: compare all 50 SSR Arcana effects, stat bonuses, and best recommended Saviors.',
  alternates: {
    canonical: '/starsavior/arcana',
  },
};

export default async function StarSaviorArcanaPage() {
  const dataset = await getStarSaviorWikiData();
  const { game, arcana, characters } = dataset;

  return (
    <WikiShell dataset={dataset} activeNav="arcana" breadcrumbTitle="SSR Arcana Tier List">
      <section className="wiki-card" style={{ padding: '16px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <img
            src={game.shortcutsConfig[3]?.iconUrl ?? game.iconUrl}
            alt="SSR Arcana Tier List"
            width={48}
            height={48}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              objectFit: 'cover',
              border: '1.5px solid var(--accent-primary)',
            }}
          />
          <div>
            <h1 style={{ fontSize: '19px', fontWeight: 900, color: 'var(--text-main)' }}>
              [Star Savior] SSR Arcana Tier List ({arcana.length} Cards)
            </h1>
            <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '3px' }}>
              All {arcana.length} SSR Arcana cards ranked by stat efficiency, passive triggers, and universal compatibility.
            </p>
          </div>
        </div>
      </section>

      <ArcanaListClient arcana={arcana} characters={characters} />
    </WikiShell>
  );
}
