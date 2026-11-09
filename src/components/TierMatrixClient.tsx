'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import type {
  CharacterEntity,
  ElementOption,
  RoleOption,
  TierRank,
} from '../domain/schemas';
import { getTierColor } from './WikiShell';

interface TierMatrixClientProps {
  characters: CharacterEntity[];
  elementsConfig: ElementOption[];
  rolesConfig: RoleOption[];
  mode: 'overall' | 'reroll';
}

const TIER_ORDER: TierRank[] = ['SS', 'S', 'A', 'B'];

const ROLE_COLUMNS = [
  { key: 'DPS', label: 'Striker / Assassin', matchRoles: ['Striker', 'Assassin'] },
  { key: 'BREAKER', label: 'Ranger / Caster', matchRoles: ['Ranger', 'Caster'] },
  { key: 'SUPPORT', label: 'Supporter', matchRoles: ['Supporter'] },
  { key: 'DEFENDER', label: 'Defender', matchRoles: ['Defender'] },
] as const;

export function TierMatrixClient({
  characters,
  elementsConfig,
  rolesConfig,
  mode,
}: TierMatrixClientProps) {
  const [selectedElement, setSelectedElement] = useState<string>('ALL');
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

  const getCharTier = (c: CharacterEntity): TierRank =>
    mode === 'reroll' ? c.rerollTier : c.overallTier;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* FILTER BAR */}
      <section className="wiki-card" style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* ATTRIBUTE FILTERS */}
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

        {/* CLASS FILTERS + SEARCH */}
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

      {/* APPMEDIA ROLE-COLUMN TIER MATRIX */}
      <section className="wiki-card">
        <div className="wiki-section-header">
          <span>
            {mode === 'reroll'
              ? 'STAR SAVIOR REROLL TIER MATRIX BY CLASS'
              : 'STAR SAVIOR STRONGEST TIER MATRIX BY CLASS'}
          </span>
          <span className="mono" style={{ fontSize: '11.5px', color: 'var(--text-muted)', fontWeight: 700 }}>
            Showing {filtered.length} / {characters.length} Saviors
          </span>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              minWidth: '640px',
            }}
          >
            <thead>
              <tr style={{ background: 'var(--bg-header)', borderBottom: '1px solid var(--border-main)' }}>
                <th
                  style={{
                    width: '64px',
                    padding: '10px 6px',
                    fontSize: '12px',
                    fontWeight: 900,
                    borderRight: '1px solid var(--border-main)',
                    textAlign: 'center',
                  }}
                >
                  TIER
                </th>
                {ROLE_COLUMNS.map((col) => {
                  const firstRole = roleMap[col.matchRoles[0]];
                  return (
                    <th
                      key={col.key}
                      style={{
                        padding: '10px 8px',
                        fontSize: '12px',
                        fontWeight: 900,
                        borderRight: '1px solid var(--border-main)',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        {firstRole && (
                          <img
                            src={firstRole.iconUrl}
                            alt={col.label}
                            width={20}
                            height={20}
                            style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                          />
                        )}
                        <span>{col.label}</span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {TIER_ORDER.map((tier) => {
                const charsInTier = filtered.filter((c) => getCharTier(c) === tier);
                if (charsInTier.length === 0) return null;
                const tColor = getTierColor(tier);

                return (
                  <tr key={tier} style={{ borderBottom: '1px solid var(--border-main)' }}>
                    <td
                      className="mono"
                      style={{
                        background: tColor.bg,
                        color: tColor.color,
                        borderLeft: `4px solid ${tColor.color}`,
                        borderRight: '1px solid var(--border-main)',
                        fontWeight: 900,
                        fontSize: '18px',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                      }}
                    >
                      {tier}
                    </td>
                    {ROLE_COLUMNS.map((col) => {
                      const colChars = charsInTier.filter((c) =>
                        (col.matchRoles as readonly string[]).includes(c.role)
                      );
                      return (
                        <td
                          key={col.key}
                          style={{
                            padding: '10px 8px',
                            borderRight: '1px solid var(--border-subtle)',
                            verticalAlign: 'top',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '10px',
                              justifyContent: 'center',
                            }}
                          >
                            {colChars.map((c) => {
                              const elOpt = elementMap[c.element];
                              const borderColor = elOpt?.colorHex ?? '#3b4861';
                              return (
                                <Link
                                  key={c.slug}
                                  href={`/starsavior/characters/${c.slug}`}
                                  style={{
                                    width: '82px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '4px',
                                  }}
                                >
                                  <div
                                    style={{
                                      width: '76px',
                                      height: '76px',
                                      borderRadius: '7px',
                                      overflow: 'hidden',
                                      border: `2px solid ${borderColor}`,
                                      position: 'relative',
                                      background: 'var(--bg-page)',
                                    }}
                                  >
                                    <img
                                      src={c.imageUrl}
                                      alt={c.name}
                                      width={76}
                                      height={76}
                                      style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block',
                                      }}
                                    />
                                    {elOpt && (
                                      <img
                                        src={elOpt.iconUrl}
                                        alt={elOpt.label}
                                        width={20}
                                        height={20}
                                        style={{
                                          position: 'absolute',
                                          top: '2px',
                                          left: '2px',
                                          width: '20px',
                                          height: '20px',
                                          borderRadius: '4px',
                                          background: 'rgba(11, 14, 20, 0.88)',
                                          padding: '1px',
                                          objectFit: 'contain',
                                        }}
                                      />
                                    )}
                                    <span
                                      className="mono"
                                      style={{
                                        position: 'absolute',
                                        bottom: '2px',
                                        right: '2px',
                                        background: 'rgba(11, 14, 20, 0.92)',
                                        color: '#FFF',
                                        fontSize: '10px',
                                        fontWeight: 900,
                                        padding: '1px 4px',
                                        borderRadius: '3px',
                                        border: '1px solid var(--border-strong)',
                                        lineHeight: 1.1,
                                      }}
                                    >
                                      {c.score.toFixed(1)}
                                    </span>
                                  </div>
                                  <span
                                    style={{
                                      fontSize: '11.5px',
                                      fontWeight: 800,
                                      color: 'var(--text-main)',
                                      textAlign: 'center',
                                      lineHeight: 1.2,
                                      display: '-webkit-box',
                                      WebkitLineClamp: 2,
                                      WebkitBoxOrient: 'vertical',
                                      overflow: 'hidden',
                                    }}
                                  >
                                    {c.name}
                                  </span>
                                </Link>
                              );
                            })}
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
      </section>

      {/* TOP TIER CHARACTER EVALUATIONS (APPMEDIA SUMMARY TABLE) */}
      <section className="wiki-card">
        <div className="wiki-section-header">
          <span>
            {mode === 'reroll'
              ? 'SS & S TIER REROLL TARGET EVALUATIONS'
              : 'SS & S TIER CHARACTER EVALUATIONS'}
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {filtered
            .filter((c) => {
              const t = getCharTier(c);
              return t === 'SS' || t === 'S';
            })
            .slice(0, 20)
            .map((c) => {
              const elOpt = elementMap[c.element];
              const roleOpt = roleMap[c.role];
              const tier = getCharTier(c);
              const tStyle = getTierColor(tier);
              return (
                <div
                  key={c.slug}
                  style={{
                    padding: '12px 14px',
                    borderBottom: '1px solid var(--border-subtle)',
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                  }}
                >
                  <Link href={`/starsavior/characters/${c.slug}`} style={{ flexShrink: 0 }}>
                    <img
                      src={c.imageUrl}
                      alt={c.name}
                      width={64}
                      height={64}
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '7px',
                        objectFit: 'cover',
                        border: `2px solid ${elOpt?.colorHex ?? '#3b4861'}`,
                      }}
                    />
                  </Link>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '8px',
                        flexWrap: 'wrap',
                      }}
                    >
                      <Link
                        href={`/starsavior/characters/${c.slug}`}
                        style={{ fontSize: '14.5px', fontWeight: 900, color: 'var(--text-main)' }}
                      >
                        {c.name}
                      </Link>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {elOpt && (
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '2px 7px',
                              borderRadius: '4px',
                              background: 'var(--bg-page)',
                              border: `1px solid ${elOpt.colorHex}`,
                              fontSize: '11px',
                              fontWeight: 800,
                            }}
                          >
                            <img
                              src={elOpt.iconUrl}
                              alt={elOpt.label}
                              width={14}
                              height={14}
                              style={{ width: '14px', height: '14px', objectFit: 'contain' }}
                            />
                            <span>{elOpt.label}</span>
                          </span>
                        )}
                        {roleOpt && (
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '2px 7px',
                              borderRadius: '4px',
                              background: 'var(--bg-page)',
                              border: '1px solid var(--border-main)',
                              fontSize: '11px',
                              fontWeight: 800,
                              color: 'var(--text-secondary)',
                            }}
                          >
                            <img
                              src={roleOpt.iconUrl}
                              alt={roleOpt.label}
                              width={14}
                              height={14}
                              style={{ width: '14px', height: '14px', objectFit: 'contain' }}
                            />
                            <span>{roleOpt.label}</span>
                          </span>
                        )}
                        <span
                          className="mono"
                          style={{
                            padding: '2px 8px',
                            borderRadius: '4px',
                            fontSize: '11.5px',
                            fontWeight: 900,
                            background: tStyle.bg,
                            color: tStyle.color,
                            border: `1px solid ${tStyle.border}`,
                          }}
                        >
                          Tier {tier} ({c.score.toFixed(1)})
                        </span>
                      </div>
                    </div>
                    <p
                      style={{
                        fontSize: '12.5px',
                        color: 'var(--text-secondary)',
                        marginTop: '5px',
                        lineHeight: 1.5,
                      }}
                    >
                      {c.summary}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}
