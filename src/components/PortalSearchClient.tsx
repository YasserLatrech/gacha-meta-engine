'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

export interface SearchableItem {
  gameSlug: string;
  gameShortName: string;
  category: 'Character' | 'Weapon / Card' | 'Boss Raid' | 'Upcoming Banner' | 'Future Banner';
  title: string;
  subtitle: string;
  href: string;
  imageUrl: string;
}

export function PortalSearchClient({ items }: { items: SearchableItem[] }) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return items
      .filter(
        (it) =>
          it.title.toLowerCase().includes(q) ||
          it.subtitle.toLowerCase().includes(q) ||
          it.gameShortName.toLowerCase().includes(q) ||
          it.category.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query, items]);

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
      <div style={{ display: 'flex', gap: '6px' }}>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search any character, weapon, support card, boss, or banner..."
          aria-label="Search characters, weapons, bosses, and banners"
          style={{
            width: '100%',
            padding: '8px 12px',
            fontSize: '12.5px',
            fontWeight: 600,
            background: 'var(--bg-surface)',
            color: 'var(--text-main)',
            border: '1.5px solid var(--border-strong)',
            borderRadius: '4px',
          }}
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            style={{
              padding: '0 10px',
              background: 'var(--bg-subnav)',
              color: '#FFF',
              border: 'none',
              borderRadius: '4px',
              fontSize: '11px',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            Clear
          </button>
        )}
      </div>

      {filtered.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            right: 0,
            zIndex: 50,
            background: 'var(--bg-surface)',
            border: '2px solid var(--border-strong)',
            borderRadius: '4px',
            maxHeight: '360px',
            overflowY: 'auto',
          }}
        >
          {filtered.map((item, idx) => (
            <Link
              key={`${item.href}-${idx}`}
              href={item.href}
              onClick={() => setQuery('')}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 12px',
                borderBottom: '1px solid var(--border-subtle)',
                fontSize: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  width={32}
                  height={32}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '4px',
                    objectFit: 'cover',
                    border: '1px solid var(--border-main)',
                    flexShrink: 0,
                  }}
                />
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        background: 'var(--accent-primary)',
                        color: '#FFF',
                        fontSize: '9.5px',
                        fontWeight: 800,
                        padding: '1px 5px',
                        borderRadius: '2px',
                      }}
                    >
                      {item.gameShortName}
                    </span>
                    <strong style={{ color: 'var(--text-main)' }}>{item.title}</strong>
                  </div>
                  <div
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '11px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.subtitle}
                  </div>
                </div>
              </div>
              <span
                className="mono"
                style={{
                  fontSize: '10px',
                  fontWeight: 800,
                  color: 'var(--text-secondary)',
                  background: 'var(--bg-subtle)',
                  padding: '2px 6px',
                  borderRadius: '2px',
                  border: '1px solid var(--border-main)',
                  flexShrink: 0,
                }}
              >
                {item.category} &rarr;
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
