import React from 'react';
import type { Metadata } from 'next';
import { getStarSaviorWikiData } from '../../../application/wiki.service';
import { WikiShell } from '../../../components/WikiShell';
import { TierMatrixClient } from '../../../components/TierMatrixClient';

export const metadata: Metadata = {
  title: 'Star Savior Tier List (v1.4.0) — Strongest SSR Characters Ranking',
  description:
    'Updated Star Savior Strongest Character Tier List by Class (Striker, Assassin, Ranger, Caster, Supporter, Defender) and Attribute (Sun, Moon, Star, Order, Chaos).',
  alternates: {
    canonical: '/starsavior/tier-list',
  },
};

export default async function StarSaviorTierListPage() {
  const dataset = await getStarSaviorWikiData();
  const { game, characters } = dataset;

  return (
    <WikiShell dataset={dataset} activeNav="tier-list" breadcrumbTitle="Strongest Tier List">
      {/* ARTICLE HEADER */}
      <section className="wiki-card" style={{ padding: '16px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <img
            src={game.shortcutsConfig[0]?.iconUrl ?? game.iconUrl}
            alt="Strongest Tier List"
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
              [Star Savior] Strongest Character Tier List ({game.patchVersion})
            </h1>
            <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '3px' }}>
              Evaluates all {characters.length} Saviors across Cosmo Gate, Void Singularity, and general PvE progression.
            </p>
          </div>
        </div>
      </section>

      <TierMatrixClient
        characters={characters}
        elementsConfig={game.elementsConfig}
        rolesConfig={game.rolesConfig}
        mode="overall"
      />
    </WikiShell>
  );
}
