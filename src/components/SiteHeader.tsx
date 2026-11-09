'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { getGameAppIconUrl } from '../domain/constants/game-visuals';
import { GachaCrestWordmark } from './GachaCrestLogo';

interface SiteHeaderProps {
  activeGameSlug?: string;
  activeGameName?: string;
  breadcrumbLeaf?: string;
}

const HEADER_GAMES = [
  { slug: 'star-savior', label: 'Star Savior', badge: 'Sync' },
  { slug: 'heaven-burns-red', label: 'Heaven Burns Red', badge: '+4m' },
  { slug: 'uma-musume', label: 'Uma Musume', badge: '+18m' },
  { slug: 'sword-of-convallaria', label: 'Sword of Convallaria', badge: '+6m' },
];

export function SiteHeader({ activeGameSlug, activeGameName, breadcrumbLeaf }: SiteHeaderProps) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    try {
      window.localStorage.setItem('gacha-meta-theme', 'dark');
    } catch {
      // ignore storage errors
    }
  }, []);

  return (
    <header
      style={{
        background: 'var(--bg-header)',
        borderBottom: '2px solid var(--border-main)',
        position: 'sticky',
        top: 0,
        zIndex: 80,
      }}
    >
      <div
        style={{
          maxWidth: '1420px',
          margin: '0 auto',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <GachaCrestWordmark showSubtitle={!activeGameSlug} />
          </Link>

          {activeGameSlug && activeGameName && (
            <nav
              aria-label="Breadcrumb"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13.5px',
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
                  gap: '7px',
                }}
              >
                <img
                  src={getGameAppIconUrl(activeGameSlug)}
                  alt={activeGameName}
                  width={26}
                  height={26}
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '5px',
                    objectFit: 'cover',
                    border: '1px solid var(--border-strong)',
                  }}
                />
                <span>{activeGameName} Wiki</span>
              </Link>
              {breadcrumbLeaf && (
                <>
                  <span>&rsaquo;</span>
                  <span style={{ color: 'var(--text-main)', fontWeight: 800 }}>{breadcrumbLeaf}</span>
                </>
              )}
            </nav>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {HEADER_GAMES.map((g) => {
            const isActive = activeGameSlug === g.slug;
            return (
              <Link
                key={g.slug}
                href={`/${g.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: 800,
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: isActive
                    ? '1.5px solid var(--accent-primary)'
                    : '1px solid var(--border-main)',
                  background: isActive ? 'var(--accent-bg)' : 'var(--bg-surface)',
                  color: isActive ? 'var(--text-main)' : 'var(--text-secondary)',
                }}
              >
                <img
                  src={getGameAppIconUrl(g.slug)}
                  alt={g.label}
                  width={26}
                  height={26}
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '5px',
                    objectFit: 'cover',
                    border: '1px solid var(--border-strong)',
                    flexShrink: 0,
                  }}
                />
                <span>{g.label}</span>
                <span
                  className="mono"
                  style={{
                    fontSize: '10.5px',
                    fontWeight: 800,
                    padding: '1px 5px',
                    borderRadius: '4px',
                    background: g.badge === 'Sync' ? 'var(--green-bg)' : 'var(--blue-bg)',
                    color: g.badge === 'Sync' ? 'var(--green-primary)' : 'var(--blue-primary)',
                    border: g.badge === 'Sync' ? '1px solid var(--green-border)' : '1px solid var(--blue-border)',
                  }}
                >
                  {g.badge}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
