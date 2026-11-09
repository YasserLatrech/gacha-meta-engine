'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import type { ArcanaEntity, CharacterEntity, TierRank } from '../domain/schemas';
import { getTierColor } from './WikiShell';

interface ArcanaListClientProps {
  arcana: ArcanaEntity[];
  characters: CharacterEntity[];
}

const TIERS: TierRank[] = ['SS', 'S', 'A', 'B'];

export function ArcanaListClient({ arcana, characters }: ArcanaListClientProps) {
  const [selectedTier, setSelectedTier] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const charMap = useMemo(() => {
    const map: Record<string, CharacterEntity> = {};
    for (const c of characters) map[c.slug] = c;
    return map;
  }, [characters]);

  const filtered = useMemo(() => {
    return arcana.filter((a) => {
      if (selectedTier !== 'ALL' && a.tier !== selectedTier) return false;
      if (
        searchQuery.trim() !== '' &&
        !a.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) &&
        !a.effectSummary.toLowerCase().includes(searchQuery.trim().toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [arcana, selectedTier, searchQuery]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* FILTER BAR */}
      <section
        className="wiki-card"
        style={{
          padding: '12px 14px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <span className="mono" style={{ fontSize: '11px', fontWeight: 900, color: 'var(--text-muted)', marginRight: '4px' }}>
            ARCANA TIER:
          </span>
          {(['ALL', ...TIERS] as const).map((t) => {
            const active = selectedTier === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedTier(t)}
                style={{
                  padding: '5px 11px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 800,
                  background: active ? 'var(--accent-bg)' : 'var(--bg-page)',
                  color: active ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  border: active
                    ? '1.5px solid var(--accent-primary)'
                    : '1px solid var(--border-main)',
                }}
              >
                {t === 'ALL' ? `All (${arcana.length})` : `${t} Tier`}
              </button>
            );
          })}
        </div>

        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search SSR Arcana or effect..."
          style={{
            padding: '6px 11px',
            fontSize: '12px',
            width: '230px',
          }}
        />
      </section>

      {/* VISUAL ARCANA TIER TABLE */}
      <section className="wiki-card">
        <div className="wiki-section-header">
          <span>STAR SAVIOR SSR ARCANA TIER MATRIX</span>
          <span className="mono" style={{ fontSize: '11.5px', color: 'var(--text-muted)', fontWeight: 700 }}>
            Showing {filtered.length} / {arcana.length} Cards
          </span>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {TIERS.map((tier) => {
              const cards = filtered.filter((a) => a.tier === tier);
              if (cards.length === 0) return null;
              const tColor = getTierColor(tier);

              return (
                <tr key={tier} style={{ borderBottom: '1px solid var(--border-main)' }}>
                  <td
                    className="mono"
                    style={{
                      width: '64px',
                      background: tColor.bg,
                      color: tColor.color,
                      borderLeft: `4px solid ${tColor.color}`,
                      borderRight: '1px solid var(--border-main)',
                      fontWeight: 900,
                      fontSize: '18px',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                    }}
                  >
                    {tier}
                  </td>
                  <td style={{ padding: '12px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                      {cards.map((card) => (
                        <div
                          key={card.slug}
                          style={{
                            width: '84px',
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
                              border: `2px solid ${tColor.color}`,
                              position: 'relative',
                              background: 'var(--bg-page)',
                            }}
                          >
                            <img
                              src={card.imageUrl}
                              alt={card.name}
                              width={76}
                              height={76}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                              }}
                            />
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
                                lineHeight: 1.1,
                              }}
                            >
                              {card.score.toFixed(1)}
                            </span>
                          </div>
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: 800,
                              color: 'var(--text-main)',
                              textAlign: 'center',
                              lineHeight: 1.2,
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }}
                          >
                            {card.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      {/* DETAILED ARCANA EFFECTS & BEST HOLDERS */}
      <section className="wiki-card">
        <div className="wiki-section-header">
          <span>SSR ARCANA EFFECTS &amp; RECOMMENDED SAVIORS</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {filtered.map((card) => {
            const tStyle = getTierColor(card.tier);
            return (
              <div
                key={card.slug}
                style={{
                  padding: '12px 14px',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                }}
              >
                <img
                  src={card.imageUrl}
                  alt={card.name}
                  width={68}
                  height={68}
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '7px',
                    objectFit: 'cover',
                    border: `2px solid ${tStyle.color}`,
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '8px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div style={{ fontSize: '14.5px', fontWeight: 900, color: 'var(--text-main)' }}>
                      {card.name}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span
                        style={{
                          padding: '2px 7px',
                          borderRadius: '4px',
                          background: 'var(--bg-page)',
                          border: '1px solid var(--border-main)',
                          fontSize: '11px',
                          fontWeight: 800,
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {card.subType}
                      </span>
                      <span
                        className="mono"
                        style={{
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontSize: '11.5px',
                          fontWeight: 900,
                          background: tStyle.bg,
                          color: tStyle.color,
                          border: `1px solid ${tStyle.border}`,
                        }}
                      >
                        Tier {card.tier} ({card.score.toFixed(1)})
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '5px', lineHeight: 1.5 }}>
                    {card.effectSummary}
                  </p>
                  {card.bestHolderSlugs.length > 0 && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        flexWrap: 'wrap',
                        marginTop: '8px',
                      }}
                    >
                      <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-muted)' }}>
                        Best Saviors:
                      </span>
                      {card.bestHolderSlugs.map((hSlug) => {
                        const holder = charMap[hSlug];
                        if (!holder) return null;
                        return (
                          <Link
                            key={holder.slug}
                            href={`/starsavior/characters/${holder.slug}`}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              padding: '2px 7px',
                              borderRadius: '4px',
                              background: 'var(--bg-page)',
                              border: '1px solid var(--border-main)',
                              fontSize: '11px',
                              fontWeight: 800,
                              color: 'var(--accent-primary)',
                            }}
                          >
                            <img
                              src={holder.imageUrl}
                              alt={holder.name}
                              width={18}
                              height={18}
                              style={{ width: '18px', height: '18px', borderRadius: '3px', objectFit: 'cover' }}
                            />
                            <span>{holder.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
