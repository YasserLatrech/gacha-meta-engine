import React from 'react';
import Link from 'next/link';
import type { GameWikiDataset, TierRank } from '../domain/schemas';

export function getTierColor(tier: TierRank | string): { bg: string; color: string; border: string } {
  switch (tier) {
    case 'SS':
      return { bg: 'var(--tier-ss-bg)', color: 'var(--tier-ss)', border: 'rgba(244, 63, 94, 0.45)' };
    case 'S':
      return { bg: 'var(--tier-s-bg)', color: 'var(--tier-s)', border: 'rgba(245, 158, 11, 0.45)' };
    case 'A':
      return { bg: 'var(--tier-a-bg)', color: 'var(--tier-a)', border: 'rgba(16, 185, 129, 0.45)' };
    default:
      return { bg: 'var(--tier-b-bg)', color: 'var(--tier-b)', border: 'rgba(59, 130, 246, 0.45)' };
  }
}

interface WikiShellProps {
  dataset: GameWikiDataset;
  activeNav: 'home' | 'tier-list' | 'reroll' | 'characters' | 'arcana';
  breadcrumbTitle?: string;
  children: React.ReactNode;
}

export function WikiShell({ dataset, activeNav, breadcrumbTitle, children }: WikiShellProps) {
  const { game, characters, arcana } = dataset;

  const navItems = [
    { key: 'home', label: 'Wiki Top', href: '/starsavior', iconUrl: game.iconUrl },
    {
      key: 'tier-list',
      label: 'Strongest Tier List',
      href: '/starsavior/tier-list',
      iconUrl: game.shortcutsConfig[0]?.iconUrl ?? game.iconUrl,
      badge: 'SS',
    },
    {
      key: 'reroll',
      label: 'Reroll Tier List',
      href: '/starsavior/reroll',
      iconUrl: game.shortcutsConfig[1]?.iconUrl ?? game.iconUrl,
      badge: 'START',
    },
    {
      key: 'characters',
      label: `All Characters (${characters.length})`,
      href: '/starsavior/characters',
      iconUrl: game.shortcutsConfig[2]?.iconUrl ?? game.iconUrl,
    },
    {
      key: 'arcana',
      label: `SSR Arcana (${arcana.length})`,
      href: '/starsavior/arcana',
      iconUrl: game.shortcutsConfig[3]?.iconUrl ?? game.iconUrl,
    },
  ] as const;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* TOP BAR */}
      <header
        style={{
          background: 'var(--bg-header)',
          borderBottom: '1px solid var(--border-main)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          className="wiki-container"
          style={{
            paddingTop: '10px',
            paddingBottom: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '14px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <Link
              href="/starsavior"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
            >
              <img
                src={game.iconUrl}
                alt={game.name}
                width={34}
                height={34}
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  border: '1px solid var(--border-strong)',
                }}
              />
              <div>
                <div style={{ fontSize: '15.5px', fontWeight: 900, letterSpacing: '-0.01em' }}>
                  {game.name.toUpperCase()} <span style={{ color: 'var(--accent-primary)' }}>WIKI</span>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 700 }}>
                  {game.patchVersion}
                </div>
              </div>
            </Link>
          </div>

          {/* TOP NAVIGATION PILLS */}
          <nav style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {navItems.map((item) => {
              const isActive = activeNav === item.key;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  style={{
                    padding: '6px 11px',
                    borderRadius: '6px',
                    fontSize: '12.5px',
                    fontWeight: 800,
                    background: isActive ? 'var(--accent-bg)' : 'var(--bg-surface)',
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    border: isActive
                      ? '1px solid var(--accent-border)'
                      : '1px solid var(--border-main)',
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* BREADCRUMB BAR */}
      <div
        style={{
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div
          className="wiki-container"
          style={{
            paddingTop: '7px',
            paddingBottom: '7px',
            fontSize: '12px',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/starsavior" style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>
            Star Savior Wiki
          </Link>
          {breadcrumbTitle && (
            <>
              <span>&rsaquo;</span>
              <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>{breadcrumbTitle}</span>
            </>
          )}
        </div>
      </div>

      {/* MAIN 2-COLUMN APPMEDIA LAYOUT */}
      <div className="wiki-container" style={{ flex: 1 }}>
        <div className="wiki-grid">
          {/* LEFT SIDEBAR MENU */}
          <aside className="wiki-sidebar wiki-card">
            {/* MINI GAME HEADER */}
            <div
              style={{
                position: 'relative',
                height: '86px',
                overflow: 'hidden',
                borderBottom: '1px solid var(--border-main)',
              }}
            >
              <img
                src={game.bannerUrl}
                alt={game.name}
                width={245}
                height={86}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.55)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '9px',
                  background: 'linear-gradient(to top, rgba(11,14,20,0.92), transparent)',
                }}
              >
                <img
                  src={game.iconUrl}
                  alt={game.name}
                  width={38}
                  height={38}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '7px',
                    border: '1.5px solid #FFF',
                    objectFit: 'cover',
                  }}
                />
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 900, color: '#FFF', lineHeight: 1.15 }}>
                    {game.name}
                  </div>
                  <div className="mono" style={{ fontSize: '10px', color: 'var(--accent-primary)', fontWeight: 800 }}>
                    {game.serverStatus}
                  </div>
                </div>
              </div>
            </div>

            {/* 01. STRATEGY MENU */}
            <div
              style={{
                background: 'var(--bg-subtle)',
                padding: '7px 11px',
                fontSize: '11px',
                fontWeight: 900,
                color: 'var(--text-main)',
                borderLeft: '3.5px solid var(--accent-primary)',
                borderBottom: '1px solid var(--border-main)',
              }}
            >
              01. RANKINGS &amp; DATABASE
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {navItems.map((item) => {
                const isActive = activeNav === item.key;
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    style={{
                      padding: '8px 10px',
                      fontSize: '12.5px',
                      fontWeight: isActive ? 900 : 700,
                      background: isActive ? 'var(--accent-bg)' : 'transparent',
                      color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      borderBottom: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <img
                        src={item.iconUrl}
                        alt={item.label}
                        width={26}
                        height={26}
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '5px',
                          objectFit: 'cover',
                          border: '1px solid var(--border-main)',
                        }}
                      />
                      <span>{item.label}</span>
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* 02. ATTRIBUTE / ELEMENT SHORTCUTS */}
            <div
              style={{
                background: 'var(--bg-subtle)',
                padding: '7px 11px',
                fontSize: '11px',
                fontWeight: 900,
                color: 'var(--text-main)',
                borderLeft: '3.5px solid var(--accent-primary)',
                borderBottom: '1px solid var(--border-main)',
              }}
            >
              02. CHARACTERS BY ATTRIBUTE
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '6px',
                padding: '8px',
                borderBottom: '1px solid var(--border-main)',
              }}
            >
              {game.elementsConfig.map((el) => (
                <Link
                  key={el.key}
                  href={`/starsavior/characters?element=${el.key}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 8px',
                    borderRadius: '5px',
                    background: 'var(--bg-page)',
                    border: '1px solid var(--border-main)',
                    fontSize: '11.5px',
                    fontWeight: 800,
                    color: 'var(--text-secondary)',
                  }}
                >
                  <img
                    src={el.iconUrl}
                    alt={el.label}
                    width={18}
                    height={18}
                    style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                  />
                  <span>{el.label}</span>
                </Link>
              ))}
            </div>

            {/* 03. ALL 57 SAVIORS DIRECT INDEX */}
            <div
              style={{
                background: 'var(--bg-subtle)',
                padding: '7px 11px',
                fontSize: '11px',
                fontWeight: 900,
                color: 'var(--text-main)',
                borderLeft: '3.5px solid var(--accent-primary)',
                borderBottom: '1px solid var(--border-main)',
              }}
            >
              03. SAVIOR CHARACTER INDEX ({characters.length})
            </div>
            <div
              className="sidebar-scroll"
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxHeight: '520px',
                overflowY: 'auto',
              }}
            >
              {characters.map((c) => {
                const tStyle = getTierColor(c.overallTier);
                return (
                  <Link
                    key={c.slug}
                    href={`/starsavior/characters/${c.slug}`}
                    style={{
                      padding: '6px 10px',
                      borderBottom: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        minWidth: 0,
                      }}
                    >
                      <img
                        src={c.imageUrl}
                        alt={c.name}
                        width={30}
                        height={30}
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '5px',
                          objectFit: 'cover',
                          border: '1px solid var(--border-main)',
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {c.name}
                      </span>
                    </span>
                    <span
                      className="mono"
                      style={{
                        fontSize: '10.5px',
                        fontWeight: 900,
                        padding: '1px 6px',
                        borderRadius: '4px',
                        background: tStyle.bg,
                        color: tStyle.color,
                        border: `1px solid ${tStyle.border}`,
                        flexShrink: 0,
                      }}
                    >
                      {c.overallTier}
                    </span>
                  </Link>
                );
              })}
            </div>
          </aside>

          {/* MAIN CONTENT COLUMN */}
          <main className="wiki-main" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {children}
          </main>
        </div>
      </div>

      {/* CLEAN FOOTER */}
      <footer
        style={{
          marginTop: '36px',
          background: 'var(--bg-header)',
          borderTop: '1px solid var(--border-main)',
          padding: '20px 0',
          fontSize: '12px',
          color: 'var(--text-muted)',
        }}
      >
        <div
          className="wiki-container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <div>
            <strong style={{ color: 'var(--text-main)' }}>Star Savior Strategy Wiki</strong> • Simultaneous Global / JP / KR Database
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/starsavior">Wiki Top</Link>
            <Link href="/starsavior/tier-list">Strongest Tier List</Link>
            <Link href="/starsavior/reroll">Reroll Guide</Link>
            <Link href="/starsavior/characters">Characters (57)</Link>
            <Link href="/starsavior/arcana">SSR Arcana (50)</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
