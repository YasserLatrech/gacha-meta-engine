'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import type {
  CharacterEntity,
  ElementOption,
  RoleOption,
} from '../domain/schemas';
import { getTierColor } from './WikiShell';

interface CharacterDatabaseClientProps {
  characters: CharacterEntity[];
  elementsConfig: ElementOption[];
  rolesConfig: RoleOption[];
  initialElement?: string;
}

export function CharacterDatabaseClient({
  characters,
  elementsConfig,
  rolesConfig,
  initialElement = 'ALL',
}: CharacterDatabaseClientProps) {
  const [selectedElement, setSelectedElement] = useState<string>(initialElement);
  const [selectedRole, setSelectedRole] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const elementMap = useMemo(() => {
    const map: Record<string, ElementOption> = {};
    for (const el of elementsConfig) map[el.key] = el;
    return map;
  }, [elementsConfig]);

  const roleMap = useMemo(() => {
    const map: Record<string, RoleOption> = {};
    for (const r of rolesConfig) map[r.key] = r;
    return map;
  }, [rolesConfig]);

  const filtered = useMemo(() => {
    return characters.filter((c) => {
      if (selectedElement !== 'ALL' && c.element !== selectedElement) return false;
      if (selectedRole !== 'ALL' && c.role !== selectedRole) return false;
      if (
        searchQuery.trim() !== '' &&
        !c.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) &&
        !c.role.toLowerCase().includes(searchQuery.trim().toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [characters, selectedElement, selectedRole, searchQuery]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* FILTER BAR */}
      <section className="wiki-card" style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <span className="mono" style={{ fontSize: '11px', fontWeight: 900, color: 'var(--text-muted)', marginRight: '4px' }}>
            ATTRIBUTE:
          </span>
          <button
            type="button"
            onClick={() => setSelectedElement('ALL')}
            style={{
              padding: '5px 11px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 800,
              background: selectedElement === 'ALL' ? 'var(--accent-bg)' : 'var(--bg-page)',
              color: selectedElement === 'ALL' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              border:
                selectedElement === 'ALL'
                  ? '1.5px solid var(--accent-primary)'
                  : '1px solid var(--border-main)',
            }}
          >
            All ({characters.length})
          </button>
          {elementsConfig.map((el) => {
            const active = selectedElement === el.key;
            return (
              <button
                key={el.key}
                type="button"
                onClick={() => setSelectedElement(el.key)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 800,
                  background: active ? el.colorHex : 'var(--bg-page)',
                  color: active ? '#FFF' : 'var(--text-main)',
                  border: `1.5px solid ${el.colorHex}`,
                }}
              >
                <img
                  src={el.iconUrl}
                  alt={el.label}
                  width={18}
                  height={18}
                  style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                />
                <span>{el.label}</span>
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            paddingTop: '8px',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span className="mono" style={{ fontSize: '11px', fontWeight: 900, color: 'var(--text-muted)', marginRight: '4px' }}>
              CLASS:
            </span>
            <button
              type="button"
              onClick={() => setSelectedRole('ALL')}
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '11.5px',
                fontWeight: 800,
                background: selectedRole === 'ALL' ? 'var(--accent-bg)' : 'var(--bg-page)',
                color: selectedRole === 'ALL' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                border:
                  selectedRole === 'ALL'
                    ? '1.5px solid var(--accent-primary)'
                    : '1px solid var(--border-main)',
              }}
            >
              All Classes
            </button>
            {rolesConfig.map((r) => {
              const active = selectedRole === r.key;
              return (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => setSelectedRole(r.key)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '4px 9px',
                    borderRadius: '6px',
                    fontSize: '11.5px',
                    fontWeight: 800,
                    background: active ? 'var(--bg-elevated)' : 'var(--bg-page)',
                    color: active ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    border: active
                      ? '1.5px solid var(--accent-primary)'
                      : '1px solid var(--border-main)',
                  }}
                >
                  <img
                    src={r.iconUrl}
                    alt={r.label}
                    width={17}
                    height={17}
                    style={{ width: '17px', height: '17px', objectFit: 'contain' }}
                  />
                  <span>{r.label}</span>
                </button>
              );
            })}
          </div>

          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search character..."
            style={{
              padding: '6px 11px',
              fontSize: '12px',
              width: '210px',
            }}
          />
        </div>
      </section>

      {/* APPMEDIA CHARACTER DATABASE TABLE */}
      <section className="wiki-card">
        <div className="wiki-section-header">
          <span>STAR SAVIOR CHARACTER DATABASE ({filtered.length})</span>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '640px' }}>
            <thead>
              <tr style={{ background: 'var(--bg-header)', borderBottom: '1px solid var(--border-main)', fontSize: '11.5px' }}>
                <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 900 }}>CHARACTER</th>
                <th style={{ padding: '10px 8px', textAlign: 'center', fontWeight: 900 }}>ATTRIBUTE</th>
                <th style={{ padding: '10px 8px', textAlign: 'center', fontWeight: 900 }}>CLASS</th>
                <th style={{ padding: '10px 8px', textAlign: 'center', fontWeight: 900 }}>OVERALL TIER</th>
                <th style={{ padding: '10px 8px', textAlign: 'center', fontWeight: 900 }}>REROLL TIER</th>
                <th style={{ padding: '10px 12px', textAlign: 'right', fontWeight: 900 }}>ATK / HP / SPD</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => {
                const elOpt = elementMap[c.element];
                const roleOpt = roleMap[c.role];
                const overallColor = getTierColor(c.overallTier);
                const rerollColor = getTierColor(c.rerollTier);

                return (
                  <tr key={c.slug} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '9px 12px' }}>
                      <Link
                        href={`/starsavior/characters/${c.slug}`}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                      >
                        <img
                          src={c.imageUrl}
                          alt={c.name}
                          width={48}
                          height={48}
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '6px',
                            objectFit: 'cover',
                            border: `2px solid ${elOpt?.colorHex ?? '#3b4861'}`,
                          }}
                        />
                        <div>
                          <div style={{ fontSize: '13.5px', fontWeight: 900, color: 'var(--text-main)' }}>
                            {c.name}
                          </div>
                          <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 700 }}>
                            {c.rarity} • {c.recommendedDupes}
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td style={{ padding: '9px 8px', textAlign: 'center' }}>
                      {elOpt && (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            padding: '3px 8px',
                            borderRadius: '5px',
                            background: 'var(--bg-page)',
                            border: `1px solid ${elOpt.colorHex}`,
                            fontSize: '11.5px',
                            fontWeight: 800,
                          }}
                        >
                          <img
                            src={elOpt.iconUrl}
                            alt={elOpt.label}
                            width={16}
                            height={16}
                            style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                          />
                          <span>{elOpt.label}</span>
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '9px 8px', textAlign: 'center' }}>
                      {roleOpt && (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            padding: '3px 8px',
                            borderRadius: '5px',
                            background: 'var(--bg-page)',
                            border: '1px solid var(--border-main)',
                            fontSize: '11.5px',
                            fontWeight: 800,
                            color: 'var(--text-secondary)',
                          }}
                        >
                          <img
                            src={roleOpt.iconUrl}
                            alt={roleOpt.label}
                            width={16}
                            height={16}
                            style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                          />
                          <span>{roleOpt.label}</span>
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '9px 8px', textAlign: 'center' }}>
                      <span
                        className="mono"
                        style={{
                          padding: '3px 9px',
                          borderRadius: '5px',
                          fontSize: '12px',
                          fontWeight: 900,
                          background: overallColor.bg,
                          color: overallColor.color,
                          border: `1px solid ${overallColor.border}`,
                        }}
                      >
                        {c.overallTier} ({c.score.toFixed(1)})
                      </span>
                    </td>
                    <td style={{ padding: '9px 8px', textAlign: 'center' }}>
                      <span
                        className="mono"
                        style={{
                          padding: '3px 9px',
                          borderRadius: '5px',
                          fontSize: '12px',
                          fontWeight: 900,
                          background: rerollColor.bg,
                          color: rerollColor.color,
                          border: `1px solid ${rerollColor.border}`,
                        }}
                      >
                        {c.rerollTier}
                      </span>
                    </td>
                    <td className="mono" style={{ padding: '9px 12px', textAlign: 'right', fontSize: '12px', fontWeight: 700, color: 'var(--text-secondary)' }}>
                      {c.baseStats.atk} ATK / {c.baseStats.hp} HP / {c.baseStats.spd} SPD
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
