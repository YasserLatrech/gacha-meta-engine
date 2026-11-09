import React from 'react';

export function GachaCrestMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-label="GachaCrest Royal Aegis & Summon Star Emblem"
      role="img"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        flexShrink: 0,
        display: 'block',
      }}
    >
      <defs>
        <linearGradient id="gc-rim-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="48%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#881337" />
        </linearGradient>
        <linearGradient id="gc-core-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="gc-core-right" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#151D2C" />
          <stop offset="100%" stopColor="#090D16" />
        </linearGradient>
        <linearGradient id="gc-crimson-facet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FB7185" />
          <stop offset="50%" stopColor="#E11D48" />
          <stop offset="100%" stopColor="#9F1239" />
        </linearGradient>
        <linearGradient id="gc-gold-star" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="55%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>

      {/* 1. Outer Royal Aegis Metallic Bevel Shield */}
      <path
        d="M32 2.5 L54 10.5 L58.5 18 V33.5 C58.5 47.8 46.8 57.5 32 61.5 C17.2 57.5 5.5 47.8 5.5 33.5 V18 L10 10.5 L32 2.5 Z"
        fill="url(#gc-rim-grad)"
      />

      {/* 2. Inner Recessed Obsidian Chassis */}
      <path
        d="M32 6.2 L51.2 13.2 L54.8 19.5 V33.2 C54.8 45.4 44.6 54 32 57.6 C19.4 54 9.2 45.4 9.2 33.2 V19.5 L12.8 13.2 L32 6.2 Z"
        fill="url(#gc-core-left)"
      />
      <path
        d="M32 6.2 L51.2 13.2 L54.8 19.5 V33.2 C54.8 45.4 44.6 54 32 57.6 V6.2 Z"
        fill="url(#gc-core-right)"
      />

      {/* 3. Inner Heraldic Crimson Wing Facet */}
      <path
        d="M32 11.2 L47.5 16.8 L50.2 21.6 V32.6 C50.2 42.4 42 49.4 32 52.6 C22 49.4 13.8 42.4 13.8 32.6 V21.6 L16.5 16.8 L32 11.2 Z"
        fill="none"
        stroke="url(#gc-crimson-facet)"
        strokeWidth="1.8"
        opacity="0.9"
      />

      {/* 4. Top Sovereign Crown Chevron Crest */}
      <path
        d="M23.5 15.8 L27.8 19.2 L32 13.5 L36.2 19.2 L40.5 15.8 L38.5 21.5 H25.5 L23.5 15.8 Z"
        fill="url(#gc-gold-star)"
      />

      {/* 5. Secondary Diagonal Star Facet Rays */}
      <path
        d="M32 21 L35.8 29.2 L44 33 L35.8 36.8 L32 45 L28.2 36.8 L20 33 L28.2 29.2 Z"
        fill="url(#gc-crimson-facet)"
        transform="rotate(45 32 33)"
      />

      {/* 6. Primary 4-Point Celestial Gacha Summon Star */}
      <path
        d="M32 16.5 L36.2 28.8 L48.5 33 L36.2 37.2 L32 49.5 L27.8 37.2 L15.5 33 L27.8 28.8 Z"
        fill="#FFFFFF"
      />

      {/* 7. Golden Astral Core Diamond */}
      <path
        d="M32 24.5 L34.8 30.2 L40.5 33 L34.8 35.8 L32 41.5 L29.2 35.8 L23.5 33 L29.2 30.2 Z"
        fill="url(#gc-gold-star)"
      />

      {/* 8. Center Crimson Prism Jewel */}
      <path
        d="M32 29.8 L35.2 33 L32 36.2 L28.8 33 Z"
        fill="#E11D48"
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
        gap: '10px',
        flexWrap: 'wrap',
      }}
    >
      <GachaCrestMark size={36} />
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '7px',
          lineHeight: 1,
        }}
      >
        <span
          style={{
            fontSize: '18.5px',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: 'var(--text-main)',
          }}
        >
          GACHA<span style={{ color: '#FB7185' }}>CREST</span>
        </span>
        <span
          className="mono"
          style={{
            background: 'var(--amber-bg)',
            color: 'var(--amber-primary)',
            border: '1px solid var(--amber-border)',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '10px',
            fontWeight: 800,
            letterSpacing: '0.05em',
          }}
        >
          CODEX
        </span>
      </span>
      {showSubtitle && (
        <span
          className="brand-subtitle"
          style={{
            fontSize: '13px',
            fontWeight: 700,
            color: 'var(--text-secondary)',
            borderLeft: '1.5px solid var(--border-main)',
            paddingLeft: '10px',
            marginLeft: '2px',
          }}
        >
          Multi-Source Tier Lists, Builds &amp; Pull Encyclopedia
        </span>
      )}
    </span>
  );
}
