'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import type { CharacterEntity, ElementOption, RoleOption, TierRank } from '../domain/schemas';

interface TierMatrixClientProps {
  characters: CharacterEntity[];
  elements: ElementOption[];
  roles: RoleOption[];
  mode: 'overall' | 'reroll';
}

const TIERS: { rank: TierRank; label: string; sub: string; bg: string; border: string; text: string }[] = [
  {
    rank: 'SS',
    label: 'SS',
    sub: 'Tier 0 · Meta Core',
    bg: 'linear-gradient(135deg, #991b1b 0%, #dc2626 100%)',
    border: '#ef4444',
    text: '#fef2f2',
  },
  {
    rank: 'S',
    label: 'S',
    sub: 'Tier 1 · High Value',
    bg: 'linear-gradient(135deg, #9a3412 0%, #ea580c 100%)',
    border: '#f97316',
    text: '#fff7ed',
  },
  {
    rank: 'A',
    label: 'A',
    sub: 'Tier 2 · Situational',
    bg: 'linear-gradient(135deg, #854d0e 0%, #ca8a04 100%)',
    border: '#eab308',
    text: '#fefce8',
  },
  {
    rank: 'B',
    label: 'B',
    sub: 'Tier 3 · Niche',
    bg: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
    border: '#3b82f6',
    text: '#eff6ff',
  },
];

const ROLE_COLUMNS = [
  { key: 'MeleeDPS', label: 'Striker / Assassin', match: ['Striker', 'Assassin'], color: '#f87171' },
  { key: 'RangedDPS', label: 'Ranger / Caster', match: ['Ranger', 'Caster'], color: '#c084fc' },
  { key: 'Supporter', label: 'Supporter', match: ['Supporter'], color: '#34d399' },
  { key: 'Defender', label: 'Defender', match: ['Defender'], color: '#60a5fa' },
];

export function TierMatrixClient({ characters, elements, roles, mode }: TierMatrixClientProps) {
  const [selectedElement, setSelectedElement] = useState<string>('ALL');
  const [selectedRole, setSelectedRole] = useState<string>('ALL');
  const [selectedRarity, setSelectedRarity] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = useMemo(() => {
    return characters.filter((c) => {
      if (selectedElement !== 'ALL' && c.element !== selectedElement) return false;
      if (selectedRole !== 'ALL' && c.role !== selectedRole) return false;
      if (selectedRarity !== 'ALL' && c.rarity !== selectedRarity) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        if (
          !c.name.toLowerCase().includes(q) &&
          !(c.staticData?.nameJp || '').toLowerCase().includes(q) &&
          !c.element.toLowerCase().includes(q) &&
          !c.role.toLowerCase().includes(q)
        ) {
          return false;
        }
      }
      return true;
    });
  }, [characters, selectedElement, selectedRole, selectedRarity, searchQuery]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Filter Bar with Official AppMedia Attribute & Class Icons */}
      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '8px',
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-secondary)' }}>
              Filter by Attribute:
            </span>
            <button
              type="button"
              onClick={() => setSelectedElement('ALL')}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.76rem',
                fontWeight: 700,
                cursor: 'pointer',
                background: selectedElement === 'ALL' ? '#2563eb' : 'var(--bg-elevated)',
                color: selectedElement === 'ALL' ? '#fff' : 'var(--text-secondary)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              All ({characters.length})
            </button>
            {elements.map((el) => (
              <button
                key={el.key}
                type="button"
                onClick={() => setSelectedElement(el.key === selectedElement ? 'ALL' : el.key)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 11px',
                  borderRadius: '6px',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: selectedElement === el.key ? 'rgba(59, 130, 246, 0.22)' : 'var(--bg-elevated)',
                  color: selectedElement === el.key ? '#93c5fd' : 'var(--text-secondary)',
                  border: selectedElement === el.key ? '1px solid #3b82f6' : '1px solid var(--border-subtle)',
                }}
              >
                <img
                  src={el.iconUrl}
                  alt={el.label}
                  width={22}
                  height={22}
                  style={{ width: '22px', height: '22px', objectFit: 'contain' }}
                />
                <span>{el.label}</span>
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {['ALL', 'SSR', 'SR'].map((rar) => (
              <button
                key={rar}
                type="button"
                onClick={() => setSelectedRarity(rar)}
                style={{
                  padding: '6px 10px',
                  borderRadius: '6px',
                  fontSize: '0.74rem',
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
              placeholder="Search character..."
              style={{
                padding: '7px 12px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                background: '#11151e',
                color: '#f1f5f9',
                border: '1px solid var(--border-strong)',
                minWidth: '185px',
              }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-secondary)' }}>
            Filter by Class:
          </span>
          <button
            type="button"
            onClick={() => setSelectedRole('ALL')}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '0.76rem',
              fontWeight: 700,
              cursor: 'pointer',
              background: selectedRole === 'ALL' ? '#2563eb' : 'var(--bg-elevated)',
              color: selectedRole === 'ALL' ? '#fff' : 'var(--text-secondary)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            All Classes
          </button>
          {roles.map((rl) => (
            <button
              key={rl.key}
              type="button"
              onClick={() => setSelectedRole(rl.key === selectedRole ? 'ALL' : rl.key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 11px',
                borderRadius: '6px',
                fontSize: '0.76rem',
                fontWeight: 700,
                cursor: 'pointer',
                background: selectedRole === rl.key ? 'rgba(59, 130, 246, 0.22)' : 'var(--bg-elevated)',
                color: selectedRole === rl.key ? '#93c5fd' : 'var(--text-secondary)',
                border: selectedRole === rl.key ? '1px solid #3b82f6' : '1px solid var(--border-subtle)',
              }}
            >
              <img
                src={rl.iconUrl}
                alt={rl.label}
                width={22}
                height={22}
                style={{ width: '22px', height: '22px', objectFit: 'contain' }}
              />
              <span>{rl.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* AppMedia Role-Column Tier Matrix with Larger 68x68 Character Portraits */}
      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '8px',
          overflowX: 'auto',
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '780px',
          }}
        >
          <thead>
            <tr style={{ background: '#1c2333', borderBottom: '2px solid var(--border-strong)' }}>
              <th
                style={{
                  width: '105px',
                  padding: '12px 10px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: '#93c5fd',
                  textAlign: 'center',
                  borderRight: '1px solid var(--border-subtle)',
                }}
              >
                TIER
              </th>
              {ROLE_COLUMNS.map((col) => (
                <th
                  key={col.key}
                  style={{
                    width: '22.3%',
                    padding: '12px 10px',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: col.color,
                    textAlign: 'center',
                    borderRight: '1px solid var(--border-subtle)',
                  }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TIERS.map((tierObj) => {
              const tierUnits = filtered.filter(
                (c) => (mode === 'reroll' ? c.rerollTier : c.overallTier) === tierObj.rank
              );
              return (
                <tr key={tierObj.rank} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  {/* Tier Badge Cell */}
                  <td
                    style={{
                      background: tierObj.bg,
                      color: tierObj.text,
                      textAlign: 'center',
                      padding: '14px 8px',
                      borderRight: '1px solid var(--border-subtle)',
                      verticalAlign: 'middle',
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', fontWeight: 900, lineHeight: 1 }}>{tierObj.label}</div>
                    <div style={{ fontSize: '0.66rem', fontWeight: 700, opacity: 0.92, marginTop: '5px' }}>
                      {tierObj.sub}
                    </div>
                  </td>

                  {/* Role Cells with Large 68x68 Portraits */}
                  {ROLE_COLUMNS.map((col) => {
                    const cellUnits = tierUnits.filter((u) => col.match.includes(u.role));
                    return (
                      <td
                        key={col.key}
                        style={{
                          padding: '10px',
                          verticalAlign: 'top',
                          borderRight: '1px solid var(--border-subtle)',
                          background: '#131822',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '8px',
                            minHeight: '78px',
                            alignContent: 'flex-start',
                          }}
                        >
                          {cellUnits.map((unit) => (
                            <Link
                              key={unit.slug}
                              href={`/starsavior/characters/${unit.slug}`}
                              title={`${unit.name} (${unit.element} ${unit.role}) — ${unit.score}/10`}
                              style={{
                                width: '74px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textDecoration: 'none',
                                background: '#1a202c',
                                border: '1px solid var(--border-subtle)',
                                borderRadius: '8px',
                                padding: '4px',
                                position: 'relative',
                              }}
                            >
                              <div style={{ position: 'relative', width: '64px', height: '64px' }}>
                                <img
                                  src={unit.imageUrl}
                                  alt={unit.name}
                                  width={64}
                                  height={64}
                                  style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '6px',
                                    objectFit: 'cover',
                                    display: 'block',
                                    border: unit.rarity === 'SSR' ? '1px solid rgba(245, 158, 11, 0.5)' : '1px solid var(--border-strong)',
                                  }}
                                />
                                {unit.staticData?.attributeIconUrl && (
                                  <img
                                    src={unit.staticData.attributeIconUrl}
                                    alt={unit.element}
                                    width={20}
                                    height={20}
                                    style={{
                                      position: 'absolute',
                                      top: '-3px',
                                      left: '-3px',
                                      width: '20px',
                                      height: '20px',
                                      borderRadius: '50%',
                                      background: 'rgba(11, 14, 20, 0.9)',
                                      padding: '1px',
                                    }}
                                  />
                                )}
                                <span
                                  style={{
                                    position: 'absolute',
                                    bottom: '2px',
                                    right: '2px',
                                    fontSize: '0.58rem',
                                    fontWeight: 900,
                                    padding: '1px 4px',
                                    borderRadius: '3px',
                                    background: 'rgba(11, 14, 20, 0.88)',
                                    color: unit.rarity === 'SSR' ? '#fbbf24' : '#93c5fd',
                                  }}
                                >
                                  {unit.score.toFixed(1)}
                                </span>
                              </div>
                              <span
                                style={{
                                  fontSize: '0.68rem',
                                  fontWeight: 700,
                                  color: '#f1f5f9',
                                  marginTop: '4px',
                                  maxWidth: '68px',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  textAlign: 'center',
                                }}
                              >
                                {unit.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Detailed Evaluation Table with 64x64 Character Icons */}
      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            background: '#1c2333',
            padding: '11px 14px',
            fontSize: '0.88rem',
            fontWeight: 800,
            color: '#f8fafc',
            borderLeft: '4px solid #3b82f6',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          Character Performance & Static Skill Breakdown ({filtered.length} Units)
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#141923', borderBottom: '1px solid var(--border-subtle)' }}>
                <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  Character
                </th>
                <th style={{ padding: '10px 12px', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  Tier / Score
                </th>
                <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  Attribute / Class
                </th>
                <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  Translated Kit & Evaluation Summary
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 25).map((unit) => {
                const tRank = mode === 'reroll' ? unit.rerollTier : unit.overallTier;
                return (
                  <tr key={unit.slug} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '10px 12px', width: '230px' }}>
                      <Link
                        href={`/starsavior/characters/${unit.slug}`}
                        style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                      >
                        <img
                          src={unit.imageUrl}
                          alt={unit.name}
                          width={64}
                          height={64}
                          style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '10px',
                            objectFit: 'cover',
                            border: '1px solid var(--border-strong)',
                            flexShrink: 0,
                          }}
                        />
                        <div>
                          <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#60a5fa' }}>{unit.name}</div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                            {unit.rarity} · {unit.staticData?.pool || 'Standard'}
                          </div>
                          <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>
                            {unit.staticData?.attackType || 'Slash Damage'}
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', width: '110px' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          fontWeight: 900,
                          fontSize: '0.84rem',
                          padding: '3px 10px',
                          borderRadius: '4px',
                          background:
                            tRank === 'SS'
                              ? 'rgba(239, 68, 68, 0.2)'
                              : tRank === 'S'
                                ? 'rgba(249, 115, 22, 0.2)'
                                : 'rgba(234, 179, 8, 0.2)',
                          color: tRank === 'SS' ? '#f87171' : tRank === 'S' ? '#fb923c' : '#facc15',
                          border: '1px solid currentColor',
                        }}
                      >
                        {tRank}
                      </span>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '4px', fontWeight: 700 }}>
                        {unit.score.toFixed(1)} / 10
                      </div>
                    </td>
                    <td style={{ padding: '10px 12px', width: '165px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 700, color: '#f1f5f9' }}>
                        {unit.staticData?.attributeIconUrl && (
                          <img src={unit.staticData.attributeIconUrl} alt={unit.element} width={22} height={22} style={{ width: '22px', height: '22px' }} />
                        )}
                        <span>{unit.element}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                        {unit.staticData?.classIconUrl && (
                          <img src={unit.staticData.classIconUrl} alt={unit.role} width={20} height={20} style={{ width: '20px', height: '20px' }} />
                        )}
                        <span>{unit.role}</span>
                      </div>
                    </td>
                    <td style={{ padding: '10px 12px', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {unit.summary}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
