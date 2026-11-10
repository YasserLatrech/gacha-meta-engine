import React from 'react';
import type { Metadata } from 'next';
import { getStarSaviorWikiData } from '../../../application/wiki.service';
import { WikiShell } from '../../../components/WikiShell';
import { TierMatrixClient } from '../../../components/TierMatrixClient';

export const metadata: Metadata = {
  title: 'Star Savior Tier List — Strongest SSR & SR Characters Ranking',
  description:
    'Updated Star Savior Strongest Character Tier List by Class (Striker, Assassin, Ranger, Caster, Supporter, Defender) and Attribute (Sun, Moon, Star, Order, Chaos).',
  alternates: {
    canonical: '/starsavior/tier-list',
  },
};

export default async function StarSaviorTierListPage() {
  const dataset = await getStarSaviorWikiData();
  const { game, characters } = dataset;
  const ssCharacters = characters.filter((c) => c.overallTier === 'SS');

  return (
    <WikiShell
      game={game}
      topCharacters={ssCharacters}
      activeNav="tier-list"
      breadcrumbLabel="Strongest Tier List"
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
            src={game.shortcutsConfig[0]?.iconUrl ?? game.iconUrl}
            alt="Strongest Tier List"
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
              [Star Savior] Strongest Character Tier List ({game.patchVersion})
            </h1>
            <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              Evaluates all {characters.length} Saviors across Cosmo Gate bosses, Journey Hard Mode, and Gauntlet PvP.
            </p>
          </div>
        </div>
      </section>

      <TierMatrixClient
        characters={characters}
        elements={game.elementsConfig}
        roles={game.rolesConfig}
        mode="overall"
      />
    </WikiShell>
  );
}
