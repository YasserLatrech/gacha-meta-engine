import React from 'react';
import type { Metadata } from 'next';
import { getStarSaviorWikiData } from '../../../application/wiki.service';
import { WikiShell } from '../../../components/WikiShell';
import { CharacterDatabaseClient } from '../../../components/CharacterDatabaseClient';

export const metadata: Metadata = {
  title: 'Star Savior Characters Database — All 57 SSR Saviors, Attributes & Classes',
  description:
    'Complete Star Savior character database with attribute filters (Sun, Moon, Star, Order, Chaos), class filters, tier ratings, and max-level stats.',
  alternates: {
    canonical: '/starsavior/characters',
  },
};

export default async function StarSaviorCharactersPage({
  searchParams,
}: {
  searchParams: Promise<{ element?: string }>;
}) {
  const [dataset, resolvedParams] = await Promise.all([
    getStarSaviorWikiData(),
    searchParams,
  ]);
  const { game, characters } = dataset;

  return (
    <WikiShell dataset={dataset} activeNav="characters" breadcrumbTitle="All Characters">
      <section className="wiki-card" style={{ padding: '16px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <img
            src={game.shortcutsConfig[2]?.iconUrl ?? game.iconUrl}
            alt="Character Database"
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
              [Star Savior] Character Database ({characters.length} Saviors)
            </h1>
            <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '3px' }}>
              Filter by Attribute or Class to inspect skills, stats, and best SSR Arcana pairings.
            </p>
          </div>
        </div>
      </section>

      <CharacterDatabaseClient
        characters={characters}
        elementsConfig={game.elementsConfig}
        rolesConfig={game.rolesConfig}
        initialElement={resolvedParams.element || 'ALL'}
      />
    </WikiShell>
  );
}
