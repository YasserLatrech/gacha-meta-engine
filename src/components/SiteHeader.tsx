'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getGameAppIconUrl } from '../domain/constants/game-visuals';

interface SiteHeaderProps {
  activeGameSlug?: string;
  activeGameName?: string;
  breadcrumbLeaf?: string;
}

const HEADER_GAMES = [
  { slug: 'star-savior', label: 'Star Savior' },
  { slug: 'heaven-burns-red', label: 'Heaven Burns Red' },
  { slug: 'uma-musume', label: 'Uma Musume' },
  { slug: 'sword-of-convallaria', label: 'Sword of Convallaria' },
];

export function SiteHeader({ activeGameSlug, activeGameName, breadcrumbLeaf }: SiteHeaderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = window.localStorage.getItem('gacha-meta-theme');
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    window.localStorage.setItem('gacha-meta-theme', next);
  };

  return (
    <header
      style={{
        background: 'var(--bg-surface)',
        borderBottom: '2px solid var(--border-strong)',
      }}
    >
      <div
        style={{
          maxWidth: '1380px',
          margin: '0 auto',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 900,
              fontSize: '15px',
            }}
          >
            <img
              src={getGameAppIconUrl(activeGameSlug || 'star-savior')}
              alt="META.GG"
              width={24}
              height={24}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '4px',
                objectFit: 'cover',
                border: '1px solid var(--border-strong)',
              }}
            />
            <span
              style={{
                background: 'var(--accent-primary)',
                color: '#FFFFFF',
                padding: '3px 8px',
                borderRadius: '3px',
                fontSize: '11.5px',
                letterSpacing: '0.04em',
              }}
            >
              META.GG
            </span>
            <span>Gacha Tier Lists &amp; Meta Database</span>
          </Link>

          {activeGameSlug && activeGameName && (
            <nav
              aria-label="Breadcrumb"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                color: 'var(--text-muted)',
                fontWeight: 700,
              }}
            >
              <span>&rsaquo;</span>
              <Link
                href={`/${activeGameSlug}`}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'underline',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <img
                  src={getGameAppIconUrl(activeGameSlug)}
                  alt={activeGameName}
                  width={18}
                  height={18}
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '3px',
                    objectFit: 'cover',
                    border: '1px solid var(--border-main)',
                  }}
                />
                <span>{activeGameName} Wiki</span>
              </Link>
              {breadcrumbLeaf && (
                <>
                  <span>&rsaquo;</span>
                  <span style={{ color: 'var(--text-main)', fontWeight: 900 }}>{breadcrumbLeaf}</span>
                </>
              )}
            </nav>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {HEADER_GAMES.map((g) => (
            <Link
              key={g.slug}
              href={`/${g.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11.5px',
                fontWeight: 800,
                padding: '4px 9px',
                borderRadius: '4px',
                border:
                  activeGameSlug === g.slug
                    ? '1px solid var(--accent-primary)'
                    : '1px solid var(--border-main)',
                background: activeGameSlug === g.slug ? 'var(--accent-bg)' : 'var(--bg-subtle)',
                color: activeGameSlug === g.slug ? 'var(--accent-primary)' : 'var(--text-secondary)',
              }}
            >
              <img
                src={getGameAppIconUrl(g.slug)}
                alt={g.label}
                width={18}
                height={18}
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '3px',
                  objectFit: 'cover',
                  border: '1px solid var(--border-main)',
                  flexShrink: 0,
                }}
              />
              <span>{g.label}</span>
            </Link>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            style={{
              cursor: 'pointer',
              background: 'var(--bg-header)',
              color: '#FFFFFF',
              border: '1px solid var(--border-strong)',
              borderRadius: '4px',
              padding: '5px 10px',
              fontSize: '11px',
              fontWeight: 800,
            }}
          >
            Style: {theme === 'light' ? 'Warm Stone (Light)' : 'Matte Carbon (Dark)'}
          </button>
        </div>
      </div>
    </header>
  );
}
