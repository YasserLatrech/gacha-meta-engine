import React from 'react';

export function GachaCrestMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-label="GachaCrest Shield Emblem"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        flexShrink: 0,
        display: 'block',
      }}
    >
      {/* Outer Charcoal Editorial Shield Crest */}
      <path
        d="M32 3.5 L56.5 13.2 V32.5 C56.5 47 45.8 56.8 32 60.5 C18.2 56.8 7.5 47 7.5 32.5 V13.2 L32 3.5 Z"
        fill="var(--border-strong)"
      />
      {/* Left Half Primary Accent Shield Fill */}
      <path
        d="M32 8.8 L12.2 16.6 V32.2 C12.2 44.1 20.8 52.2 32 55.4 V8.8 Z"
        fill="var(--accent-primary)"
      />
      {/* Right Half Subtle Shaded Facet */}
      <path
        d="M32 8.8 L51.8 16.6 V32.2 C51.8 44.1 43.2 52.2 32 55.4 V8.8 Z"
        fill="#9F1239"
      />
      {/* Crisp White 4-Point Gacha Summon Star */}
      <path
        d="M32 14.5 L36.3 27.7 L49.5 32 L36.3 36.3 L32 49.5 L27.7 36.3 L14.5 32 L27.7 27.7 Z"
        fill="#FFFFFF"
      />
      {/* Warm Gold Center 4-Point Core */}
      <path
        d="M32 25.2 L34.3 29.7 L38.8 32 L34.3 34.3 L32 38.8 L29.7 34.3 L25.2 32 L29.7 29.7 Z"
        fill="#D97706"
      />
    </svg>
  );
}

export function GachaCrestWordmark({ showSubtitle = true }: { showSubtitle?: boolean }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        flexWrap: 'wrap',
      }}
    >
      <GachaCrestMark size={34} />
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          lineHeight: 1,
        }}
      >
        <span
          style={{
            fontSize: '17px',
            fontWeight: 900,
            letterSpacing: '0.03em',
            color: 'var(--text-main)',
          }}
        >
          GACHA
        </span>
        <span
          style={{
            background: 'var(--accent-primary)',
            color: '#FFFFFF',
            padding: '4px 9px',
            borderRadius: '999px',
            fontSize: '13.5px',
            fontWeight: 900,
            letterSpacing: '0.04em',
          }}
        >
          CREST
        </span>
      </span>
      {showSubtitle && (
        <span
          className="brand-subtitle"
          style={{
            fontSize: '13.5px',
            fontWeight: 800,
            color: 'var(--text-secondary)',
            borderLeft: '1.5px solid var(--border-main)',
            paddingLeft: '9px',
            marginLeft: '2px',
          }}
        >
          Tier Lists, Builds &amp; Pull Codex
        </span>
      )}
    </span>
  );
}
