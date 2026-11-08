'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface SiteHeaderProps {
  activeGameSlug?: string;
  activeGameName?: string;
  breadcrumbLeaf?: string;
}

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
                style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}
              >
                {activeGameName} Wiki
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
          <Link
            href="/star-savior"
            style={{
              fontSize: '11.5px',
              fontWeight: 800,
              padding: '4px 9px',
              borderRadius: '3px',
              border: '1px solid var(--border-main)',
              background: activeGameSlug === 'star-savior' ? 'var(--accent-bg)' : 'var(--bg-subtle)',
              color: activeGameSlug === 'star-savior' ? 'var(--accent-primary)' : 'var(--text-secondary)',
            }}
          >
            Star Savior
          </Link>
          <Link
            href="/heaven-burns-red"
            style={{
              fontSize: '11.5px',
              fontWeight: 800,
              padding: '4px 9px',
              borderRadius: '3px',
              border: '1px solid var(--border-main)',
              background: activeGameSlug === 'heaven-burns-red' ? 'var(--accent-bg)' : 'var(--bg-subtle)',
              color: activeGameSlug === 'heaven-burns-red' ? 'var(--accent-primary)' : 'var(--text-secondary)',
            }}
          >
            Heaven Burns Red
          </Link>
          <Link
            href="/uma-musume"
            style={{
              fontSize: '11.5px',
              fontWeight: 800,
              padding: '4px 9px',
              borderRadius: '3px',
              border: '1px solid var(--border-main)',
              background: activeGameSlug === 'uma-musume' ? 'var(--accent-bg)' : 'var(--bg-subtle)',
              color: activeGameSlug === 'uma-musume' ? 'var(--accent-primary)' : 'var(--text-secondary)',
            }}
          >
            Uma Musume
          </Link>
          <Link
            href="/sword-of-convallaria"
            style={{
              fontSize: '11.5px',
              fontWeight: 800,
              padding: '4px 9px',
              borderRadius: '3px',
              border: '1px solid var(--border-main)',
              background: activeGameSlug === 'sword-of-convallaria' ? 'var(--accent-bg)' : 'var(--bg-subtle)',
              color: activeGameSlug === 'sword-of-convallaria' ? 'var(--accent-primary)' : 'var(--text-secondary)',
            }}
          >
            Sword of Convallaria
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            style={{
              cursor: 'pointer',
              background: 'var(--bg-header)',
              color: '#FFFFFF',
              border: '1px solid var(--border-strong)',
              borderRadius: '3px',
              padding: '4px 10px',
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
