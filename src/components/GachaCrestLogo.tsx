import React from 'react';
import { getGameAppIconUrl } from '@/domain/constants/game-visuals';

/**
 * Clean editorial wordmark modeled after Game8.jp / AppMedia.jp / Prydwen.gg.
 * Zero homemade gradient SVG shields — uses crisp typographic hierarchy and
 * official game app icons when contextualized to a game wiki.
 */
export function GachaCrestMark({
  size = 36,
  gameSlug,
}: {
  size?: number;
  className?: string;
  gameSlug?: string;
}) {
  const iconUrl = getGameAppIconUrl(gameSlug || 'star-savior');
  return (
    <img
      src={iconUrl}
      alt="Wiki Icon"
      width={size}
      height={size}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '6px',
        objectFit: 'cover',
        border: '1px solid var(--border-strong)',
        background: 'var(--bg-surface)',
        flexShrink: 0,
      }}
    />
  );
}

export function GachaCrestWordmark({
  showSubtitle = true,
  markSize = 32,
}: {
  showSubtitle?: boolean;
  markSize?: number;
}) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <div
        style={{
          width: `${markSize}px`,
          height: `${markSize}px`,
          borderRadius: '6px',
          background: 'var(--accent-primary)',
          color: '#FFFFFF',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-display)',
          fontSize: '0.82rem',
          fontWeight: 900,
          letterSpacing: '0.04em',
          border: '1px solid rgba(255,255,255,0.2)',
          flexShrink: 0,
        }}
      >
        GC
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '6px',
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: 'var(--text-main)',
          }}
        >
          <span>GACHACREST</span>
          <span
            className="mono"
            style={{
              fontSize: '0.64rem',
              fontWeight: 800,
              color: 'var(--accent-primary)',
              background: 'var(--accent-bg)',
              border: '1px solid var(--accent-border)',
              padding: '1px 5px',
              borderRadius: '3px',
              letterSpacing: '0.06em',
            }}
          >
            WIKI
          </span>
        </div>
        {showSubtitle && (
          <span
            className="brand-subtitle mono"
            style={{
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              color: 'var(--text-muted)',
              marginTop: '2px',
            }}
          >
            JP / KR / CN META DATABASE
          </span>
        )}
      </div>
    </div>
  );
}

export function GachaCrestLogo({
  showSubline = true,
}: {
  size?: 'sm' | 'md' | 'lg';
  showSubline?: boolean;
  gameSlug?: string;
}) {
  return <GachaCrestWordmark showSubtitle={showSubline} />;
}
