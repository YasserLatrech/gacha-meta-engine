import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getStarSaviorWikiData } from '../../application/wiki.service';
import { WikiShell, getTierColor } from '../../components/WikiShell';
import { CharacterDatabaseClient } from '../../components/CharacterDatabaseClient';

export const metadata: Metadata = {
  title: 'Star Savior Strategy Wiki | Tier List, Reroll & Character Database',
  description:
    'Star Savior (Starsage) strategy wiki covering the latest v1.4.0 Strongest Tier List, Reroll Tier List, all 57 SSR Characters, and 50 SSR Arcana cards.',
  alternates: {
    canonical: '/starsavior',
  },
};

export default async function StarSaviorPortalPage() {
  const dataset = await getStarSaviorWikiData();
  const { game, characters, banners } = dataset;

  const ssCharacters = characters.filter((c) => c.overallTier === 'SS').slice(0, 10);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Star Savior Strategy Wiki',
    url: 'https://starsavior.wiki/starsavior',
    description: game.subtitle,
    inLanguage: 'en',
  };

  return (
    <WikiShell dataset={dataset} activeNav="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO BANNER CARD (APPMEDIA TOP HEADER) */}
      <section className="wiki-card">
        <div
          style={{
            position: 'relative',
            height: '175px',
            overflow: 'hidden',
            borderBottom: '1px solid var(--border-main)',
          }}
        >
          <img
            src={game.bannerUrl}
            alt={game.name}
            width={920}
            height={175}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.65)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              padding: '18px 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              background: 'linear-gradient(to top, rgba(11,14,20,0.95) 10%, rgba(11,14,20,0.25) 100%)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <img
                src={game.iconUrl}
                alt={game.name}
                width={52}
                height={52}
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '10px',
                  border: '2px solid #FFF',
                  objectFit: 'cover',
                }}
              />
              <div>
                <h1 style={{ fontSize: '21px', fontWeight: 900, color: '#FFF', lineHeight: 1.2 }}>
                  Star Savior Strategy Wiki — Tier List, Reroll &amp; Builds
                </h1>
                <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '3px' }}>
                  {game.patchVersion} • {characters.length} Saviors &amp; {dataset.arcana.length} SSR Arcana Indexed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 01. QUICK SHORTCUT MENU (APPMEDIA ICON BUTTONS) */}
        <div style={{ padding: '14px' }}>
          <div
            className="mono"
            style={{
              fontSize: '11px',
              fontWeight: 900,
              color: 'var(--text-muted)',
              marginBottom: '10px',
            }}
          >
            POPULAR STRATEGY GUIDES &amp; RANKINGS
          </div>
          <div className="shortcuts-grid">
            {game.shortcutsConfig.map((sc) => (
              <Link
                key={sc.key}
                href={sc.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px',
                  borderRadius: '7px',
                  background: 'var(--bg-page)',
                  border: '1px solid var(--border-main)',
                }}
              >
                <img
                  src={sc.iconUrl}
                  alt={sc.title}
                  width={46}
                  height={46}
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '7px',
                    objectFit: 'cover',
                    border: '1px solid var(--border-strong)',
                    flexShrink: 0,
                  }}
                />
                <div style={{ minWidth: 0 }}>
                  <div
                    className="mono"
                    style={{
                      fontSize: '9.5px',
                      fontWeight: 900,
                      color: 'var(--accent-primary)',
                    }}
                  >
                    {sc.badge}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 900,
                      color: 'var(--text-main)',
                      lineHeight: 1.25,
                    }}
                  >
                    {sc.title}
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {sc.subtitle}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 02. ACTIVE & UPCOMING PICKUP BANNERS (1.9:1 UNCROPPED BANNERS) */}
      <section className="wiki-card">
        <div className="wiki-section-header">
          <span>ACTIVE &amp; UPCOMING PICKUP GACHA BANNERS</span>
          <span className="mono" style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 700 }}>
            Simultaneous Global / JP / KR Schedule
          </span>
        </div>
        <div className="banners-grid" style={{ padding: '14px' }}>
          {banners.map((b) => {
            const isMustPull = b.verdict.includes('MUST');
            return (
              <div
                key={b.slug}
                style={{
                  background: 'var(--bg-page)',
                  border: '1px solid var(--border-main)',
                  borderRadius: '7px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '740 / 389',
                    background: '#080a0f',
                    position: 'relative',
                    borderBottom: '1px solid var(--border-main)',
                  }}
                >
                  <img
                    src={b.imageUrl}
                    alt={b.title}
                    width={300}
                    height={158}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                  <span
                    className="mono"
                    style={{
                      position: 'absolute',
                      top: '6px',
                      right: '6px',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '10px',
                      fontWeight: 900,
                      background: isMustPull ? 'rgba(244, 63, 94, 0.92)' : 'rgba(245, 158, 11, 0.92)',
                      color: '#FFF',
                    }}
                  >
                    {b.verdict}
                  </span>
                </div>
                <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.3 }}>
                    {b.title}
                  </div>
                  <div className="mono" style={{ fontSize: '11px', color: 'var(--accent-primary)', fontWeight: 700 }}>
                    {b.periodLabel}
                  </div>
                  <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: 1.45 }}>
                    {b.reasoning}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 03. SS-TIER APEX META PREVIEW */}
      <section className="wiki-card">
        <div className="wiki-section-header">
          <span>SS-TIER APEX META SAVIORS (TOP 10)</span>
          <Link
            href="/starsavior/tier-list"
            style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent-primary)' }}
          >
            View Full Tier List &rarr;
          </Link>
        </div>
        <div
          style={{
            padding: '14px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {ssCharacters.map((c) => {
            const elOpt = game.elementsConfig.find((e) => e.key === c.element);
            const tColor = getTierColor(c.overallTier);
            return (
              <Link
                key={c.slug}
                href={`/starsavior/characters/${c.slug}`}
                style={{
                  width: '82px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <div
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '7px',
                    overflow: 'hidden',
                    border: `2px solid ${elOpt?.colorHex ?? tColor.color}`,
                    position: 'relative',
                    background: 'var(--bg-page)',
                  }}
                >
                  <img
                    src={c.imageUrl}
                    alt={c.name}
                    width={76}
                    height={76}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  {elOpt && (
                    <img
                      src={elOpt.iconUrl}
                      alt={elOpt.label}
                      width={20}
                      height={20}
                      style={{
                        position: 'absolute',
                        top: '2px',
                        left: '2px',
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        background: 'rgba(11, 14, 20, 0.88)',
                        padding: '1px',
                        objectFit: 'contain',
                      }}
                    />
                  )}
                  <span
                    className="mono"
                    style={{
                      position: 'absolute',
                      bottom: '2px',
                      right: '2px',
                      background: 'rgba(11, 14, 20, 0.92)',
                      color: '#FFF',
                      fontSize: '10px',
                      fontWeight: 900,
                      padding: '1px 4px',
                      borderRadius: '3px',
                      border: '1px solid var(--border-strong)',
                    }}
                  >
                    {c.score.toFixed(1)}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    textAlign: 'center',
                    lineHeight: 1.2,
                  }}
                >
                  {c.name}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 04. FULL CHARACTER DATABASE TABLE WITH ELEMENT & CLASS FILTERS */}
      <CharacterDatabaseClient
        characters={characters}
        elementsConfig={game.elementsConfig}
        rolesConfig={game.rolesConfig}
      />
    </WikiShell>
  );
}
