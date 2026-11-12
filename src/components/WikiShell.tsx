import React from 'react';
import Link from 'next/link';
import type { GameConfigEntity, CharacterEntity } from '../domain/schemas';
import { MobileWikiDrawer } from './micro/MobileWikiDrawer';
import { GlobalOmniSearch } from './micro/GlobalOmniSearch';
import { AdsterraSlot } from './micro/AnalyticsAndAds';

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
      heading: 'RANKINGS & TIER LISTS',
      links: [
        { key: 'portal', label: 'Star Savior Wiki Top', href: '/starsavior', badge: 'TOP' },
        { key: 'tier-list', label: 'Strongest Character Tier List', href: '/starsavior/tier-list', badge: 'HOT' },
        { key: 'arcana', label: 'Strongest Arcana Tier List', href: '/starsavior/arcana', badge: '85' },
        { key: 'pvp-tier', label: 'PvP Gauntlet Tier List', href: '/starsavior/guides/pvp-tier-list', badge: 'PVP' },
        { key: 'reroll', label: 'Reroll Tier List & Stopping Line', href: '/starsavior/reroll', badge: 'STARTER' },
        { key: 'sr-chars', label: 'Recommended SR Characters', href: '/starsavior/guides/sr-characters', badge: 'SR' },
        { key: 'sr-arcana', label: 'Recommended SR Arcana', href: '/starsavior/guides/sr-arcana', badge: 'SR' },
      ],
    },
    {
      heading: 'STATIC DATABASE & TOOLS',
      links: [
        { key: 'characters', label: 'All 59 Characters List', href: '/starsavior/characters', badge: '59' },
        { key: 'arcana-db', label: 'All 85 Arcana Cards List', href: '/starsavior/arcana#arcana-complete-database', badge: '85' },
        { key: 'event-checker', label: 'Journey Event Choice Checker', href: '/starsavior/guides/event-choice-checker', badge: 'TOOL' },
        { key: 'char-tier-maker', label: 'Character Tier Maker Tool', href: '/starsavior/guides/character-tier-maker', badge: 'TOOL' },
      ],
    },
    {
      heading: 'STRATEGY GUIDES',
      links: [
        { key: 'gacha', label: 'Active Gacha & Pull Priority', href: '/starsavior#gacha-section', badge: 'PU' },
        { key: 'journey', label: 'Rescue Journey Hard Guide', href: '/starsavior/guides/rescue-journey-guide', badge: 'GUIDE' },
        { key: 'operations', label: 'Cube Palace & Operations', href: '/starsavior/guides/cube-palace', badge: 'BOSS' },
        { key: 'beginner', label: 'Beginner Early-Game Guide', href: '/starsavior/guides/beginner-progression', badge: 'NEW' },
        { key: 'codes', label: 'Active Coupon Codes List', href: '/starsavior/guides/promo-codes', badge: 'GIFT' },
      ],
    },
  ];

  const quickTopNav = [
    { key: 'home', label: 'Home', href: '/' },
    { key: 'portal', label: 'Wiki Top', href: '/starsavior' },
    { key: 'tier-list', label: 'Tier List', href: '/starsavior/tier-list' },
    { key: 'reroll', label: 'Reroll', href: '/starsavior/reroll' },
    { key: 'characters', label: 'Characters (59)', href: '/starsavior/characters' },
    { key: 'arcana', label: 'Arcana (85)', href: '/starsavior/arcana' },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-canvas)' }}>
      {/* Top AppMedia Dark Header (Responsive Desktop + Mobile) */}
      <header className="sticky top-0 z-50 border-b border-[#1e2636] bg-[#0e1117]/96 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-2 px-3 py-2 sm:px-4 sm:py-2.5">
          {/* Brand Pair */}
          <div className="flex min-w-0 items-center gap-2 sm:gap-3.5">
            <Link
              href="/"
              title="Ascalon.fun Home"
              className="flex shrink-0 items-center gap-2 border-r border-[#1e2636] pr-2 sm:pr-3.5"
            >
              <img
                src="/brand/ascalon-logo.png"
                alt="Ascalon.fun"
                width={40}
                height={40}
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg border border-[#60a5fa] object-cover shadow-[0_0_10px_rgba(59,130,246,0.3)]"
              />
              <div className="hidden xs:block sm:block">
                <div className="flex items-center gap-1">
                  <span className="text-[14.5px] sm:text-[15.5px] font-black tracking-wide text-white">
                    ASCALON
                  </span>
                  <span className="rounded border border-[#3b82f6]/40 bg-[#3b82f6]/15 px-1 py-0.5 text-[11.5px] font-black text-[#60a5fa]">
                    .FUN
                  </span>
                </div>
                <div className="hidden sm:block text-[11.5px] font-semibold text-[#b8c7dc]">
                  Strategy Wiki Portal
                </div>
              </div>
            </Link>

            <Link href="/starsavior" className="flex min-w-0 items-center gap-2 sm:gap-2.5">
              <img
                src={game.iconUrl}
                alt={game.name}
                width={38}
                height={38}
                className="h-8 w-8 sm:h-9 sm:w-9 shrink-0 rounded-lg border border-[#3b4861] object-cover"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="truncate text-[13.5px] sm:text-[15.5px] font-extrabold tracking-tight text-[#f8fafc]">
                    {game.name} Wiki
                  </span>
                  <span className="hidden md:inline-block shrink-0 rounded border border-[#3b82f6]/35 bg-[#3b82f6]/18 px-1.5 py-0.5 text-[12px] font-extrabold text-[#60a5fa]">
                    {game.patchVersion}
                  </span>
                </div>
                <div className="truncate text-[12px] sm:text-[12.5px] text-[#b8c7dc]">
                  59 Characters · 85 Arcana
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Pills */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {quickTopNav.map((item) => {
              const isActive = activeNav === item.key;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`rounded-md border px-3 py-1.5 text-[13.5px] font-bold transition-colors ${
                    isActive
                      ? 'border-[#3b82f6] bg-[#2563eb] text-white'
                      : 'border-[#1e2636] bg-[#21293a] text-[#c3cde0] hover:border-[#3b82f6]/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Global Omni-Search + Mobile Drawer Trigger */}
          <div className="flex items-center gap-2 shrink-0">
            <GlobalOmniSearch />
            <MobileWikiDrawer
              navGroups={navGroups}
              activeNav={activeNav}
              elementsConfig={game.elementsConfig}
              topCharacters={topCharacters}
            />
          </div>
        </div>

        {/* Mobile / Tablet Single-Line Horizontal Quick Nav Strip */}
        <nav
          aria-label="Star Savior Quick Navigation"
          className="no-scrollbar lg:hidden flex items-center gap-1.5 overflow-x-auto border-t border-[#1e2636] bg-[#0b0f19] px-3 py-1.5"
        >
          {quickTopNav.map((item) => {
            const isActive = activeNav === item.key;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`shrink-0 whitespace-nowrap rounded-md border px-2.5 py-1 text-[13px] font-bold active:scale-95 transition-all ${
                  isActive
                    ? 'border-[#3b82f6] bg-[#2563eb] text-white shadow-xs'
                    : 'border-[#1e2636] bg-[#161e2e] text-[#e8eff8] hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Breadcrumb Bar */}
      <div className="border-b border-[#1e2636] bg-[#11151e]">
        <div className="no-scrollbar mx-auto flex max-w-[1240px] items-center gap-1.5 overflow-x-auto whitespace-nowrap px-3 py-1.5 sm:px-4 text-[13px] text-[#b8c7dc]">
          <Link href="/" className="shrink-0 font-bold text-[#c8d4e6] hover:text-white">
            Ascalon.fun
          </Link>
          <span className="shrink-0">›</span>
          <Link href="/starsavior" className="shrink-0 font-semibold text-[#60a5fa] hover:underline">
            Star Savior Wiki
          </Link>
          {breadcrumbLabel && (
            <>
              <span className="shrink-0">›</span>
              <span className="truncate font-semibold text-[#f3f6fc]">{breadcrumbLabel}</span>
            </>
          )}
        </div>
      </div>

      {/* Main 2-Column AppMedia Layout (255px Left Menu + 1fr Article Column) */}
      <div
        className="wiki-layout-grid px-2.5 py-3 sm:p-4"
        style={{
          maxWidth: '1240px',
          width: '100%',
          margin: '0 auto',
          flex: 1,
        }}
      >
        {/* Left Navigation Menu */}
        <aside
          className="wiki-sidebar"
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
                  fontSize: '0.78rem',
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
                        fontSize: '0.88rem',
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
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          padding: '1px 6px',
                          borderRadius: '3px',
                          background: active ? '#2563eb' : '#232a3b',
                          color: active ? '#fff' : '#c8d4e6',
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
              fontSize: '0.78rem',
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
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-secondary)' }}>{el.label}</span>
              </Link>
            ))}
          </div>

          {/* Popular SS-Tier Characters Quick Access */}
          <div
            style={{
              background: '#1c2333',
              padding: '9px 12px',
              fontSize: '0.78rem',
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
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      color: '#f1f5f9',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {unit.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {unit.staticData?.attributeIconUrl && (
                      <img src={unit.staticData.attributeIconUrl} alt={unit.element} width={14} height={14} style={{ width: '14px', height: '14px' }} />
                    )}
                    <span>{unit.element} · {unit.role}</span>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '2px 6px',
                    borderRadius: '4px',
                    background: 'rgba(239, 68, 68, 0.2)',
                    color: '#f87171',
                    border: '1px solid rgba(239, 68, 68, 0.4)',
                  }}
                >
                  {unit.staticData?.appMediaTier || unit.overallTier}
                </span>
              </Link>
            ))}
          </div>

          <div style={{ padding: '8px' }}>
            <AdsterraSlot variant="sidebar" />
          </div>
        </aside>

        {/* Main Content Column */}
        <main className="wiki-main" style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: 0 }}>
          <AdsterraSlot variant="leaderboard" />
          {children}
          <AdsterraSlot variant="native" />
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
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img
              src="/brand/ascalon-logo.png"
              alt="Ascalon.fun"
              width={26}
              height={26}
              style={{ width: '26px', height: '26px', borderRadius: '6px', objectFit: 'cover', border: '1px solid #3b82f6' }}
            />
            <span>
              <strong style={{ color: 'var(--text-secondary)' }}>Ascalon.fun</strong> — Star Savior Strategy Wiki &amp; Database.
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: '14px', rowGap: '8px' }}>
            <Link href="/">Ascalon Home</Link>
            <Link href="/starsavior">Star Savior Wiki</Link>
            <Link href="/starsavior/tier-list">Tier List</Link>
            <Link href="/starsavior/reroll">Reroll Guide</Link>
            <Link href="/starsavior/characters">Characters (59)</Link>
            <Link href="/starsavior/arcana">Arcana (85)</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
