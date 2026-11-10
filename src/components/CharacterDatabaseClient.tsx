'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import type { CharacterEntity, ElementOption, RoleOption } from '../domain/schemas';

interface CharacterDatabaseClientProps {
  characters: CharacterEntity[];
  elements: ElementOption[];
  roles: RoleOption[];
}

export function CharacterDatabaseClient({
  characters,
  elements,
  roles,
}: CharacterDatabaseClientProps) {
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Filter Controls */}
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
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
              All Attributes ({characters.length})
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
                <img src={el.iconUrl} alt={el.label} width={22} height={22} style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                <span>{el.label}</span>
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
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
                {rar === 'ALL' ? 'All' : rar}
              </button>
            ))}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by name..."
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
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
              <img src={rl.iconUrl} alt={rl.label} width={22} height={22} style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
              <span>{rl.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Character Table with 64x64 Portraits & Complete Static Stats */}
      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '8px',
          overflowX: 'auto',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '780px' }}>
          <thead>
            <tr style={{ background: '#1c2333', borderBottom: '2px solid var(--border-strong)' }}>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '0.75rem', color: '#93c5fd' }}>
                Character ({filtered.length})
              </th>
              <th style={{ padding: '10px 12px', textAlign: 'center', fontSize: '0.75rem', color: '#93c5fd' }}>
                Rarity / Pool
              </th>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '0.75rem', color: '#93c5fd' }}>
                Attribute & Class
              </th>
              <th style={{ padding: '10px 12px', textAlign: 'center', fontSize: '0.75rem', color: '#93c5fd' }}>
                Overall
              </th>
              <th style={{ padding: '10px 12px', textAlign: 'center', fontSize: '0.75rem', color: '#93c5fd' }}>
                Reroll
              </th>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '0.75rem', color: '#93c5fd' }}>
                Lv.200 Base Stats & Journey Potential
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((unit) => (
              <tr key={unit.slug} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '10px 12px' }}>
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
                        border: unit.rarity === 'SSR' ? '1px solid rgba(245, 158, 11, 0.5)' : '1px solid var(--border-strong)',
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#60a5fa' }}>{unit.name}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {unit.staticData?.nameJp ? `${unit.staticData.nameJp} · ` : ''}
                        {unit.staticData?.attackType || 'Slash Damage'}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '2px' }}>
                        CV: {unit.staticData?.profile?.cv || 'TBA'}
                      </div>
                    </div>
                  </Link>
                </td>
                <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '0.74rem',
                      fontWeight: 900,
                      background: unit.rarity === 'SSR' ? 'rgba(245, 158, 11, 0.18)' : 'rgba(59, 130, 246, 0.18)',
                      color: unit.rarity === 'SSR' ? '#fbbf24' : '#93c5fd',
                      border: '1px solid currentColor',
                    }}
                  >
                    {unit.rarity}
                  </span>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px', fontWeight: 600 }}>
                    {unit.staticData?.pool || 'Standard'}
                  </div>
                </td>
                <td style={{ padding: '10px 12px' }}>
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
                <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                  <span
                    style={{
                      fontWeight: 900,
                      fontSize: '0.82rem',
                      padding: '3px 9px',
                      borderRadius: '4px',
                      background:
                        unit.overallTier === 'SS'
                          ? 'rgba(239, 68, 68, 0.2)'
                          : unit.overallTier === 'S'
                            ? 'rgba(249, 115, 22, 0.2)'
                            : 'rgba(234, 179, 8, 0.2)',
                      color:
                        unit.overallTier === 'SS'
                          ? '#f87171'
                          : unit.overallTier === 'S'
                            ? '#fb923c'
                            : '#facc15',
                      border: '1px solid currentColor',
                    }}
                  >
                    {unit.overallTier}
                  </span>
                </td>
                <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: '0.78rem',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      background: '#1c2333',
                      color: '#cbd5e1',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {unit.rerollTier}
                  </span>
                </td>
                <td style={{ padding: '10px 12px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  <div style={{ fontWeight: 700, color: '#e2e8f0' }}>
                    HP {unit.baseStats.hp.toLocaleString()} · ATK {unit.baseStats.atk.toLocaleString()} · DEF {unit.baseStats.def.toLocaleString()} · SPD {unit.baseStats.spd}
                  </div>
                  {unit.staticData?.journeyStats && (
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '3px' }}>
                      Journey: POW {unit.staticData.journeyStats.power} / VIT {unit.staticData.journeyStats.vitality} / END {unit.staticData.journeyStats.endurance} / FOC {unit.staticData.journeyStats.focus} / PRT {unit.staticData.journeyStats.protection}
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
