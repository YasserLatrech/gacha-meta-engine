import React from 'react';
import type { Metadata } from 'next';
import { getStarSaviorWikiData } from '../../../application/wiki.service';
import { WikiShell } from '../../../components/WikiShell';
import { ArcanaListClient } from '../../../components/ArcanaListClient';

export const metadata: Metadata = {
  title: 'Star Savior Arcana Tier List — All 83 SSR, SR & R Arcana Cards & Potentials',
  description:
    'Complete Star Savior Arcana Tier List and encyclopedia: compare all 83 SSR, SR, and R Arcana potentials, training stat tags, and max limit break bonuses.',
  alternates: {
    canonical: '/starsavior/arcana',
  },
};

export default async function StarSaviorArcanaPage() {
  const dataset = await getStarSaviorWikiData();
  const { game, arcana, characters } = dataset;
  const ssCharacters = characters.filter((c) => c.overallTier === 'SS');

  return (
    <WikiShell
      game={game}
      topCharacters={ssCharacters}
      activeNav="arcana"
      breadcrumbLabel="All 83 Arcana Tier List"
    >
      <section
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '8px',
          padding: '16px 18px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <img
            src={game.shortcutsConfig[3]?.iconUrl ?? game.iconUrl}
            alt="Arcana Tier List"
            width={56}
            height={56}
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '10px',
              objectFit: 'cover',
              border: '1px solid var(--border-strong)',
            }}
          />
          <div>
            <h1 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#f8fafc' }}>
              [Star Savior] All 83 Arcana Cards Tier List &amp; Potentials Encyclopedia
            </h1>
            <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              All {arcana.length} SSR, SR, and R Arcana cards with translated Journey potentials, training stat tags, and featured Saviors.
            </p>
          </div>
        </div>
      </section>

      <ArcanaListClient arcana={arcana} />
    </WikiShell>
  );
}
