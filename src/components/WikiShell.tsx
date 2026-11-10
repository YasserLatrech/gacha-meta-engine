import React from 'react';
import Link from 'next/link';
import type { GameConfigEntity, CharacterEntity } from '../domain/schemas';

interface WikiShellProps {
  game: GameConfigEntity;
  topCharacters: CharacterEntity[];
  activeNav: 'portal' | 'tier-list' | 'reroll' | 'characters' | 'arcana';
  breadcrumbLabel?: string;
  children: React.ReactNode;
}

export function WikiShell({
  game,
  topCharacters,
  activeNav,
  breadcrumbLabel,
  children,
}: WikiShellProps) {
  const navGroups = [
    {
      heading: 'RANKINGS & META',
      links: [
        { key: 'portal', label: 'Star Savior Wiki Top', href: '/starsavior', badge: 'TOP' },
        { key: 'tier-list', label: 'Strongest Tier List', href: '/starsavior/tier-list', badge: 'HOT' },
        { key: 'reroll', label: 'Reroll Tier List & Guide', href: '/starsavior/reroll', badge: 'NEW' },
        { key: 'arcana', label: 'All 83 Arcana Tier List', href: '/starsavior/arcana', badge: '83' },
      ],
    },
    {
      heading: 'STATIC DATABASE',
      links: [
        { key: 'characters', label: 'All 57 Characters DB', href: '/starsavior/characters', badge: '57' },
      ],
    },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-canvas)' }}>
      {/* Top AppMedia Dark Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(14, 17, 23, 0.96)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              href="/starsavior"
              style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
            >
              <img
                src={game.iconUrl}
                alt={game.name}
                width={44}
                height={44}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  border: '1px solid var(--border-strong)',
                }}
              />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontWeight: 800, fontSize: '1.08rem', color: '#f8fafc', letterSpacing: '-0.01em' }}>
                    {game.name} Strategy Wiki
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      padding: '2px 7px',
                      borderRadius: '4px',
                      background: 'rgba(59, 130, 246, 0.18)',
                      color: '#60a5fa',
                      border: '1px solid rgba(59, 130, 246, 0.35)',
                    }}
                  >
                    {game.patchVersion}
                  </span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Complete EN Translated Database · 57 Characters · 83 Arcana Cards
                </div>
              </div>
            </Link>
          </div>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            {[
              { key: 'portal', label: 'Wiki Top', href: '/starsavior' },
              { key: 'tier-list', label: 'Tier List', href: '/starsavior/tier-list' },
              { key: 'reroll', label: 'Reroll', href: '/starsavior/reroll' },
              { key: 'characters', label: 'Characters (57)', href: '/starsavior/characters' },
              { key: 'arcana', label: 'Arcana (83)', href: '/starsavior/arcana' },
            ].map((item) => {
              const isActive = activeNav === item.key;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  style={{
                    padding: '7px 13px',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    background: isActive ? '#2563eb' : 'var(--bg-elevated)',
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                    border: isActive ? '1px solid #3b82f6' : '1px solid var(--border-subtle)',
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Breadcrumb Bar */}
      <div style={{ background: '#11151e', borderBottom: '1px solid var(--border-subtle)' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '7px 16px',
            fontSize: '0.76rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Link href="/starsavior" style={{ color: '#60a5fa', fontWeight: 600 }}>
            Star Savior Wiki
          </Link>
          {breadcrumbLabel && (
            <>
              <span>›</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{breadcrumbLabel}</span>
            </>
          )}
        </div>
      </div>

      {/* Main 2-Column AppMedia Layout (255px Left Menu + 1fr Article Column) */}
      <div
        className="wiki-layout-grid"
        style={{
          maxWidth: '1240px',
          width: '100%',
          margin: '0 auto',
          padding: '16px',
          display: 'grid',
          gridTemplateColumns: '255px minmax(0, 1fr)',
          gap: '18px',
          flex: 1,
          alignItems: 'start',
        }}
      >
        {/* Left Navigation Menu */}
        <aside
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          {navGroups.map((group) => (
            <div key={group.heading}>
              <div
                style={{
                  background: '#1c2333',
                  padding: '9px 12px',
                  fontSize: '0.73rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  color: '#93c5fd',
                  borderBottom: '1px solid var(--border-subtle)',
                  borderLeft: '3px solid #3b82f6',
                }}
              >
                {group.heading}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {group.links.map((ln) => {
                  const active = activeNav === ln.key;
                  return (
                    <Link
                      key={ln.href}
                      href={ln.href}
                      style={{
                        padding: '10px 12px',
                        fontSize: '0.83rem',
                        fontWeight: active ? 700 : 500,
                        color: active ? '#60a5fa' : 'var(--text-primary)',
                        background: active ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                        borderBottom: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{ln.label}</span>
                      <span
                        style={{
                          fontSize: '0.65rem',
                          fontWeight: 800,
                          padding: '1px 6px',
                          borderRadius: '3px',
                          background: active ? '#2563eb' : '#232a3b',
                          color: active ? '#fff' : '#94a3b8',
                        }}
                      >
                        {ln.badge}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Attribute Filter Quick Links */}
          <div
            style={{
              background: '#1c2333',
              padding: '9px 12px',
              fontSize: '0.73rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              color: '#93c5fd',
              borderBottom: '1px solid var(--border-subtle)',
              borderLeft: '3px solid #eab308',
            }}
          >
            ATTRIBUTES & CLASSES
          </div>
          <div style={{ padding: '10px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px', borderBottom: '1px solid var(--border-subtle)' }}>
            {game.elementsConfig.map((el) => (
              <Link
                key={el.key}
                href="/starsavior/characters"
                title={el.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '3px',
                  padding: '5px 2px',
                  borderRadius: '6px',
                  background: '#131822',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <img src={el.iconUrl} alt={el.label} width={26} height={26} style={{ width: '26px', height: '26px', objectFit: 'contain' }} />
                <span style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--text-secondary)' }}>{el.label}</span>
              </Link>
            ))}
          </div>

          {/* Popular SS-Tier Characters Quick Access */}
          <div
            style={{
              background: '#1c2333',
              padding: '9px 12px',
              fontSize: '0.73rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              color: '#93c5fd',
              borderBottom: '1px solid var(--border-subtle)',
              borderLeft: '3px solid #f59e0b',
            }}
          >
            POPULAR SS-TIER UNITS
          </div>
          <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {topCharacters.slice(0, 10).map((unit) => (
              <Link
                key={unit.slug}
                href={`/starsavior/characters/${unit.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '6px 8px',
                  borderRadius: '6px',
                  background: '#131822',
                  border: '1px solid rgba(42, 50, 69, 0.5)',
                }}
              >
                <img
                  src={unit.imageUrl}
                  alt={unit.name}
                  width={42}
                  height={42}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    objectFit: 'cover',
                    border: '1px solid var(--border-strong)',
                    flexShrink: 0,
                  }}
                />
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#f1f5f9',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {unit.name}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {unit.staticData?.attributeIconUrl && (
                      <img src={unit.staticData.attributeIconUrl} alt={unit.element} width={14} height={14} style={{ width: '14px', height: '14px' }} />
                    )}
                    <span>{unit.element} · {unit.role}</span>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    padding: '2px 6px',
                    borderRadius: '4px',
                    background: 'rgba(239, 68, 68, 0.2)',
                    color: '#f87171',
                    border: '1px solid rgba(239, 68, 68, 0.4)',
                  }}
                >
                  {unit.overallTier}
                </span>
              </Link>
            ))}
          </div>
        </aside>

        {/* Main Content Column */}
        <main style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: 0 }}>
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--border-subtle)',
          background: '#0b0e14',
          padding: '20px 16px',
          marginTop: '32px',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.76rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            <strong style={{ color: 'var(--text-secondary)' }}>Star Savior Strategy Wiki</strong> — Complete Translated Static Database & Tier Encyclopedia.
          </div>
          <div style={{ display: 'flex', gap: '14px' }}>
            <Link href="/starsavior">Wiki Top</Link>
            <Link href="/starsavior/tier-list">Tier List</Link>
            <Link href="/starsavior/reroll">Reroll Guide</Link>
            <Link href="/starsavior/characters">Characters (57)</Link>
            <Link href="/starsavior/arcana">Arcana (83)</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
