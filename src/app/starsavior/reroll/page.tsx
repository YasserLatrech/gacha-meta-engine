import React from 'react';
import type { Metadata } from 'next';
import { getStarSaviorWikiData } from '../../../application/wiki.service';
import { WikiShell } from '../../../components/WikiShell';
import { TierMatrixClient } from '../../../components/TierMatrixClient';

export const metadata: Metadata = {
  title: 'Star Savior Reroll Tier List & Best Starter Targets',
  description:
    'Star Savior Reroll Tier List and fast reroll guide: find the best SS-Tier starting SSR characters to secure on day one.',
  alternates: {
    canonical: '/starsavior/reroll',
  },
};

export default async function StarSaviorRerollPage() {
  const dataset = await getStarSaviorWikiData();
  const { game, characters } = dataset;
  const ssCharacters = characters.filter((c) => c.overallTier === 'SS');

  return (
    <WikiShell
      game={game}
      topCharacters={ssCharacters}
      activeNav="reroll"
      breadcrumbLabel="Reroll Tier List"
    >
      <section
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '8px',
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <img
            src={game.shortcutsConfig[1]?.iconUrl ?? game.iconUrl}
            alt="Reroll Tier List"
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
              [Star Savior] Reroll Tier List &amp; Best Starting SSR Guide
            </h1>
            <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              Best starting SSR Saviors to pull from the tutorial and launch banners for smooth early-to-endgame progression.
            </p>
          </div>
        </div>

        <div
          style={{
            background: '#131822',
            border: '1px solid var(--border-subtle)',
            borderLeft: '4px solid #ef4444',
            borderRadius: '6px',
            padding: '10px 14px',
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
          }}
        >
          <strong style={{ color: '#f8fafc' }}>Ideal Reroll Stop Condition:</strong> Aim for{' '}
          <strong style={{ color: '#f87171' }}>1x SS-Tier Striker/Assassin or Ranger Carry</strong> (such as{' '}
          <strong>Professor M</strong>, <strong>Amora</strong>, or <strong>Swimsuit Smile</strong>) paired with any{' '}
          <strong>SSR Supporter / Defender</strong> (such as <strong>Bride Carmen</strong> or <strong>Maid Ceres</strong>).
        </div>
      </section>

      <TierMatrixClient
        characters={characters}
        elements={game.elementsConfig}
        roles={game.rolesConfig}
        mode="reroll"
      />
    </WikiShell>
  );
}
