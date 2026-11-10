'use client';

import React, { useState, useMemo } from 'react';
import type { ArcanaEntity } from '../domain/schemas';

interface ArcanaListClientProps {
  arcana: ArcanaEntity[];
}

const STAT_TAGS = [
  { key: 'Power', label: 'Power', iconUrl: 'https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp' },
  { key: 'Vitality', label: 'Vitality', iconUrl: 'https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp' },
  { key: 'Endurance', label: 'Endurance', iconUrl: 'https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp' },
  { key: 'Focus', label: 'Focus', iconUrl: 'https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp' },
  { key: 'Protection', label: 'Protection', iconUrl: 'https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp' },
];

export function ArcanaListClient({ arcana }: ArcanaListClientProps) {
  const [selectedTier, setSelectedTier] = useState<string>('ALL');
  const [selectedRarity, setSelectedRarity] = useState<string>('ALL');
  const [selectedTag, setSelectedTag] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = useMemo(() => {
    return arcana.filter((a) => {
      if (selectedTier !== 'ALL' && a.tier !== selectedTier) return false;
      if (selectedRarity !== 'ALL' && a.rarity !== selectedRarity) return false;
      if (selectedTag !== 'ALL' && a.staticData?.statTag !== selectedTag) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        if (
          !a.name.toLowerCase().includes(q) &&
          !(a.staticData?.nameJp || '').toLowerCase().includes(q) &&
          !(a.staticData?.characterName || '').toLowerCase().includes(q) &&
          !a.effectSummary.toLowerCase().includes(q)
        ) {
          return false;
        }
      }
      return true;
    });
  }, [arcana, selectedTier, selectedRarity, selectedTag, searchQuery]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Filter Bar */}
      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '8px',
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            {['ALL', 'SS', 'S', 'A', 'B'].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedTier(t)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  background: selectedTier === t ? '#2563eb' : 'var(--bg-elevated)',
                  color: selectedTier === t ? '#fff' : 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                {t === 'ALL' ? `All Tiers (${arcana.length})` : `Tier ${t}`}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            {['ALL', 'SSR', 'SR', 'R'].map((rar) => (
              <button
                key={rar}
                type="button"
                onClick={() => setSelectedRarity(rar)}
                style={{
                  padding: '6px 11px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  background: selectedRarity === rar ? '#2563eb' : '#11151e',
                  color: selectedRarity === rar ? '#fff' : 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                {rar === 'ALL' ? 'All Rarities' : rar}
              </button>
            ))}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Arcana, character, potential..."
              style={{
                padding: '7px 12px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                background: '#11151e',
                color: '#f1f5f9',
                border: '1px solid var(--border-strong)',
                minWidth: '220px',
              }}
            />
          </div>
        </div>

        {/* Stat Tag Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.76rem', fontWeight: 800, color: 'var(--text-secondary)' }}>
            Training Tag:
          </span>
          <button
            type="button"
            onClick={() => setSelectedTag('ALL')}
            style={{
              padding: '5px 11px',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
              background: selectedTag === 'ALL' ? '#2563eb' : 'var(--bg-elevated)',
              color: selectedTag === 'ALL' ? '#fff' : 'var(--text-secondary)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            All Tags
          </button>
          {STAT_TAGS.map((tag) => (
            <button
              key={tag.key}
              type="button"
              onClick={() => setSelectedTag(tag.key === selectedTag ? 'ALL' : tag.key)}
              style={{
                padding: '5px 11px',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                background: selectedTag === tag.key ? 'rgba(59, 130, 246, 0.22)' : 'var(--bg-elevated)',
                color: selectedTag === tag.key ? '#93c5fd' : 'var(--text-secondary)',
                border: selectedTag === tag.key ? '1px solid #3b82f6' : '1px solid var(--border-subtle)',
              }}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      {/* Arcana Encyclopedia Table with 80x80 Square Icons + Full Card Art + Title Character + Potentials */}
      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '8px',
          overflowX: 'auto',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '820px' }}>
          <thead>
            <tr style={{ background: '#1c2333', borderBottom: '2px solid var(--border-strong)' }}>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '0.75rem', color: '#93c5fd' }}>
                Arcana Card ({filtered.length})
              </th>
              <th style={{ padding: '10px 12px', textAlign: 'center', fontSize: '0.75rem', color: '#93c5fd' }}>
                Tier / Rarity
              </th>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '0.75rem', color: '#93c5fd' }}>
                Tag & Featured Character
              </th>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '0.75rem', color: '#93c5fd' }}>
                Translated Potentials & Max Limit Break Support Bonuses
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((card) => (
              <tr key={card.slug} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '12px', width: '280px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img
                      src={card.imageUrl}
                      alt={card.name}
                      width={76}
                      height={76}
                      style={{
                        width: '76px',
                        height: '76px',
                        borderRadius: '10px',
                        objectFit: 'cover',
                        border:
                          card.rarity === 'SSR'
                            ? '1px solid rgba(245, 158, 11, 0.6)'
                            : '1px solid var(--border-strong)',
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#f8fafc', lineHeight: 1.3 }}>
                        {card.name}
                      </div>
                      {card.staticData?.nameJp && (
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                          {card.staticData.nameJp}
                        </div>
                      )}
                      <div style={{ fontSize: '0.72rem', color: '#93c5fd', marginTop: '4px', fontWeight: 600 }}>
                        {card.staticData?.classBonus || 'Universal Bonus'}
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '12px', textAlign: 'center', width: '115px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      fontWeight: 900,
                      fontSize: '0.84rem',
                      padding: '3px 10px',
                      borderRadius: '4px',
                      background:
                        card.tier === 'SS'
                          ? 'rgba(239, 68, 68, 0.2)'
                          : card.tier === 'S'
                            ? 'rgba(249, 115, 22, 0.2)'
                            : 'rgba(234, 179, 8, 0.2)',
                      color:
                        card.tier === 'SS' ? '#f87171' : card.tier === 'S' ? '#fb923c' : '#facc15',
                      border: '1px solid currentColor',
                    }}
                  >
                    {card.tier}
                  </span>
                  <div style={{ marginTop: '5px' }}>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        padding: '1px 6px',
                        borderRadius: '3px',
                        background:
                          card.rarity === 'SSR'
                            ? 'rgba(245, 158, 11, 0.2)'
                            : card.rarity === 'SR'
                              ? 'rgba(168, 85, 247, 0.2)'
                              : 'rgba(59, 130, 246, 0.2)',
                        color:
                          card.rarity === 'SSR'
                            ? '#fbbf24'
                            : card.rarity === 'SR'
                              ? '#c084fc'
                              : '#60a5fa',
                      }}
                    >
                      {card.rarity} · {card.score.toFixed(1)}
                    </span>
                  </div>
                </td>
                <td style={{ padding: '12px', width: '210px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '8px' }}>
                    {card.staticData?.statTagIconUrl && (
                      <img
                        src={card.staticData.statTagIconUrl}
                        alt={card.staticData.statTag || 'Tag'}
                        width={22}
                        height={22}
                        style={{ width: '22px', height: '22px', objectFit: 'contain' }}
                      />
                    )}
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f1f5f9' }}>
                      {card.staticData?.statTag || 'Power'} Tag
                    </span>
                  </div>
                  {card.staticData?.characterName && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {card.staticData.characterIconUrl && (
                        <img
                          src={card.staticData.characterIconUrl}
                          alt={card.staticData.characterName}
                          width={36}
                          height={36}
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '6px',
                            objectFit: 'cover',
                            border: '1px solid var(--border-strong)',
                          }}
                        />
                      )}
                      <div>
                        <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#cbd5e1' }}>
                          {card.staticData.characterName}
                        </div>
                        <div style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>
                          {card.staticData.statBonusType || 'Stat Support'}
                        </div>
                      </div>
                    </div>
                  )}
                </td>
                <td style={{ padding: '12px', fontSize: '0.79rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {card.staticData?.potentials && card.staticData.potentials.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {card.staticData.potentials.map((p, idx) => (
                        <div key={idx}>
                          <strong style={{ color: '#93c5fd' }}>[{p.name}]</strong> {p.effect}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>{card.effectSummary}</div>
                  )}
                  {card.staticData?.supportBonuses && card.staticData.supportBonuses.length > 0 && (
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
                      {card.staticData.supportBonuses.slice(0, 4).map((b, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: '0.68rem',
                            padding: '2px 7px',
                            borderRadius: '4px',
                            background: '#131822',
                            border: '1px solid var(--border-subtle)',
                            color: '#cbd5e1',
                          }}
                        >
                          {b.label}: <strong style={{ color: '#34d399' }}>{b.value}</strong>
                        </span>
                      ))}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
