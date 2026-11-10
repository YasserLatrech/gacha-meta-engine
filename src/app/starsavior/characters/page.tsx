import React from 'react';
import type { Metadata } from 'next';
import { getStarSaviorWikiData } from '../../../application/wiki.service';
import { WikiShell } from '../../../components/WikiShell';
import { CharacterDatabaseClient } from '../../../components/CharacterDatabaseClient';

export const metadata: Metadata = {
  title: 'Star Savior Characters Database — All 57 Saviors, Attributes, Classes & Stats',
  description:
    'Complete Star Savior character database with attribute filters (Sun, Moon, Star, Order, Chaos), class filters, Lv.200 stats, Journey stats, and skill builds.',
  alternates: {
    canonical: '/starsavior/characters',
  },
};

export default async function StarSaviorCharactersPage() {
  const dataset = await getStarSaviorWikiData();
  const { game, characters } = dataset;
  const ssCharacters = characters.filter((c) => c.overallTier === 'SS');

  return (
    <WikiShell
      game={game}
      topCharacters={ssCharacters}
      activeNav="characters"
      breadcrumbLabel="All 57 Characters"
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
            src={game.shortcutsConfig[2]?.iconUrl ?? game.iconUrl}
            alt="Character Database"
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
              [Star Savior] Complete Character Database ({characters.length} Saviors)
            </h1>
            <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              Filter by Attribute, Class, or Rarity to inspect translated skills, Lv.200 stats, Journey potentials, and Limit Breaks.
            </p>
          </div>
        </div>
      </section>

      <CharacterDatabaseClient
        characters={characters}
        elements={game.elementsConfig}
        roles={game.rolesConfig}
      />
    </WikiShell>
  );
}
