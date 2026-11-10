import React from 'react';
import Link from 'next/link';
import { getStarSaviorWikiData } from '../../application/wiki.service';
import { WikiShell } from '../../components/WikiShell';
import { CharacterDatabaseClient } from '../../components/CharacterDatabaseClient';

export default async function StarSaviorPortalPage() {
  const data = await getStarSaviorWikiData();
  const ssCharacters = data.characters.filter((c) => c.overallTier === 'SS');

  return (
    <WikiShell game={data.game} topCharacters={ssCharacters} activeNav="portal">
      {/* Hero Banner with Clean Official Artwork & Featured SS-Tier Portraits (Zero Raw JP Text) */}
      <section
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'relative',
            minHeight: '215px',
            background: '#0d111a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <img
            src={data.game.bannerUrl}
            alt={data.game.name}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.28,
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(13,17,26,0.95) 0%, rgba(13,17,26,0.75) 55%, rgba(13,17,26,0.45) 100%)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '560px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  padding: '3px 9px',
                  borderRadius: '4px',
                  background: '#2563eb',
                  color: '#fff',
                }}
              >
                UPDATED DAILY · {data.game.patchVersion}
              </span>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  padding: '3px 9px',
                  borderRadius: '4px',
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: '#34d399',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                }}
              >
                100% EN TRANSLATED DATABASE
              </span>
            </div>
            <h1 style={{ margin: 0, fontSize: '1.6rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em' }}>
              Star Savior Strategy Wiki & Meta Encyclopedia
            </h1>
            <p style={{ margin: '8px 0 0', fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.55 }}>
              Complete static data for all 57 playable saviors and 83 Arcana cards — including translated skills, Nova Burst multipliers, Lv.200 stats, Journey training potentials, Exclusive Curios, and Role Tier Lists.
            </p>
          </div>

          {/* Featured Top 3 Character Standing Art Portraits */}
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '10px', alignItems: 'center' }}>
            {ssCharacters.slice(0, 3).map((hero) => (
              <Link
                key={hero.slug}
                href={`/starsavior/characters/${hero.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'rgba(19, 24, 34, 0.9)',
                  border: '1px solid rgba(245, 158, 11, 0.5)',
                  borderRadius: '10px',
                  padding: '6px',
                  textDecoration: 'none',
                }}
              >
                <img
                  src={hero.staticData?.illustUrl || hero.imageUrl}
                  alt={hero.name}
                  width={92}
                  height={92}
                  style={{
                    width: '92px',
                    height: '92px',
                    borderRadius: '8px',
                    objectFit: 'cover',
                  }}
                />
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#f8fafc', marginTop: '4px' }}>
                  {hero.name}
                </span>
                <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#fbbf24' }}>
                  SS · {hero.score.toFixed(1)}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* 4 Shortcut Cards with Larger 56x56 Official Icons */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '10px',
            padding: '14px',
            background: '#131822',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          {data.game.shortcutsConfig.map((sc) => (
            <Link
              key={sc.key}
              href={sc.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                borderRadius: '8px',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <img
                src={sc.iconUrl}
                alt={sc.title}
                width={56}
                height={56}
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  border: '1px solid var(--border-strong)',
                  flexShrink: 0,
                }}
              />
              <div style={{ minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: 800, fontSize: '0.86rem', color: '#f8fafc' }}>{sc.title}</span>
                  <span
                    style={{
                      fontSize: '0.62rem',
                      fontWeight: 800,
                      padding: '1px 5px',
                      borderRadius: '3px',
                      background: 'rgba(239, 68, 68, 0.2)',
                      color: '#f87171',
                    }}
                  >
                    {sc.badge}
                  </span>
                </div>
                <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)', marginTop: '2px' }}>{sc.subtitle}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Active Rate-Up Gacha Banners (Clean Official Art + Featured Character Icons — Zero Raw JP Text) */}
      <section
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            background: '#1c2333',
            padding: '11px 14px',
            fontSize: '0.9rem',
            fontWeight: 800,
            color: '#f8fafc',
            borderLeft: '4px solid #3b82f6',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          Active Observation Banners & Pull Recommendations
        </div>
        <div
          style={{
            padding: '14px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '14px',
          }}
        >
          {data.banners.map((banner) => {
            const featuredUnits = banner.featuredCharacterSlugs
              .map((slug) => data.characters.find((c) => c.slug === slug))
              .filter(Boolean);
            return (
              <div
                key={banner.slug}
                style={{
                  background: '#131822',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    height: '135px',
                    background: '#0b0e14',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '12px',
                  }}
                >
                  <img
                    src={banner.imageUrl}
                    alt={banner.title}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.45,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(11,14,20,0.2) 0%, rgba(11,14,20,0.92) 100%)',
                    }}
                  />
                  <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '10px' }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {featuredUnits.map((u) =>
                        u ? (
                          <Link key={u.slug} href={`/starsavior/characters/${u.slug}`}>
                            <img
                              src={u.imageUrl}
                              alt={u.name}
                              width={54}
                              height={54}
                              style={{
                                width: '54px',
                                height: '54px',
                                borderRadius: '8px',
                                objectFit: 'cover',
                                border: '2px solid #fbbf24',
                              }}
                            />
                          </Link>
                        ) : null
                      )}
                    </div>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 900,
                        padding: '4px 9px',
                        borderRadius: '4px',
                        background: banner.verdict === 'MUST PULL' ? 'rgba(239, 68, 68, 0.28)' : 'rgba(59, 130, 246, 0.28)',
                        color: banner.verdict === 'MUST PULL' ? '#fca5a5' : '#93c5fd',
                        border: '1px solid currentColor',
                      }}
                    >
                      {banner.verdict}
                    </span>
                  </div>
                </div>
                <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                    {banner.bannerType} · {banner.periodLabel}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#f8fafc' }}>{banner.title}</div>
                  <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {banner.reasoning}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Top SS-Tier Characters Preview with Large 72x72 Portraits & Official Attribute/Class Icons */}
      <section
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            background: '#1c2333',
            padding: '11px 14px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderLeft: '4px solid #ef4444',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#f8fafc' }}>
            Current SS-Tier Meta Core ({ssCharacters.length} Units)
          </span>
          <Link href="/starsavior/tier-list" style={{ fontSize: '0.78rem', fontWeight: 700, color: '#60a5fa' }}>
            Open Full Role Tier Matrix →
          </Link>
        </div>
        <div
          style={{
            padding: '14px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))',
            gap: '10px',
          }}
        >
          {ssCharacters.map((unit) => (
            <Link
              key={unit.slug}
              href={`/starsavior/characters/${unit.slug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px',
                borderRadius: '8px',
                background: '#131822',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <img
                src={unit.imageUrl}
                alt={unit.name}
                width={68}
                height={68}
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  border: '1px solid rgba(245, 158, 11, 0.5)',
                  flexShrink: 0,
                }}
              />
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: '0.86rem',
                    color: '#f8fafc',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {unit.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '3px' }}>
                  {unit.staticData?.attributeIconUrl && (
                    <img src={unit.staticData.attributeIconUrl} alt={unit.element} width={16} height={16} style={{ width: '16px', height: '16px' }} />
                  )}
                  <span>{unit.element} · {unit.role}</span>
                </div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#f87171', marginTop: '3px' }}>
                  SS Tier · {unit.score.toFixed(1)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Complete 57 Character Database */}
      <section
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            background: '#1c2333',
            padding: '11px 14px',
            fontSize: '0.9rem',
            fontWeight: 800,
            color: '#f8fafc',
            borderLeft: '4px solid #10b981',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          Complete Star Savior Character Database ({data.characters.length} Units)
        </div>
        <div style={{ padding: '12px' }}>
          <CharacterDatabaseClient
            characters={data.characters}
            elements={data.game.elementsConfig}
            roles={data.game.rolesConfig}
          />
        </div>
      </section>
    </WikiShell>
  );
}
