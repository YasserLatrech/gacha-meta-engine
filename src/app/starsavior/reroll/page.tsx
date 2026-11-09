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

  return (
    <WikiShell dataset={dataset} activeNav="reroll" breadcrumbTitle="Reroll Tier List">
      {/* ARTICLE HEADER & REROLL SUMMARY */}
      <section className="wiki-card" style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <img
            src={game.shortcutsConfig[1]?.iconUrl ?? game.iconUrl}
            alt="Reroll Tier List"
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
              [Star Savior] Reroll Tier List &amp; Best Starting SSR Guide
            </h1>
            <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '3px' }}>
              Best starting SSR Saviors to pull from the tutorial and launch banners for smooth early-to-endgame progression.
            </p>
          </div>
        </div>

        <div
          style={{
            background: 'var(--bg-page)',
            border: '1px solid var(--border-main)',
            borderLeft: '4px solid var(--tier-ss)',
            borderRadius: '6px',
            padding: '10px 14px',
            fontSize: '12.5px',
            color: 'var(--text-secondary)',
          }}
        >
          <strong style={{ color: 'var(--text-main)' }}>Ideal Reroll Stop Condition:</strong> Aim for{' '}
          <strong style={{ color: 'var(--tier-ss)' }}>1x SS-Tier Striker/Assassin or Ranger Breaker</strong> (such as{' '}
          <strong>Professor M</strong> or <strong>Amora</strong>) paired with any <strong>Supporter / Defender</strong>.
          Tutorial reroll takes ~5 minutes using the built-in account reset option.
        </div>
      </section>

      <TierMatrixClient
        characters={characters}
        elementsConfig={game.elementsConfig}
        rolesConfig={game.rolesConfig}
        mode="reroll"
      />
    </WikiShell>
  );
}
