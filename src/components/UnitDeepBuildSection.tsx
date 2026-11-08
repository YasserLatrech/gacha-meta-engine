import React from 'react';
import { HydratedUnit } from '../application/services/meta-query.service';
import { getUnitDeepBuildGuide } from '../domain/game-mechanics';

interface UnitDeepBuildSectionProps {
  gameSlug: string;
  unit: HydratedUnit;
}

export function UnitDeepBuildSection({ gameSlug, unit }: UnitDeepBuildSectionProps) {
  const deep = getUnitDeepBuildGuide(gameSlug, unit);

  // 1. SWORD OF CONVALLARIA: RANK 1-11 LEFT VS RIGHT SKILL TREE + TAROT & ENGRAVING
  if (gameSlug === 'sword-of-convallaria' && deep.socSkillTree) {
    return (
      <section
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-main)',
          borderRadius: '6px',
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <h2
          style={{
            fontSize: '13.5px',
            fontWeight: 900,
            borderLeft: '4px solid var(--accent-primary)',
            paddingLeft: '8px',
          }}
        >
          RANK 1–11 SKILL TREE PROGRESSION (LEFT vs. RIGHT PICK) &amp; TAROT / ENGRAVING BUILD
        </h2>

        {/* TAROT, ENGRAVING & SHARD FARMING SUMMARY */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '8px',
          }}
        >
          {deep.socTarotWhisper && (
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-main)',
                borderRadius: '5px',
                padding: '9px 11px',
              }}
            >
              <div style={{ fontSize: '10.5px', fontWeight: 900, color: 'var(--accent-primary)' }}>
                BEST TAROT WHISPER
              </div>
              <div style={{ fontSize: '12px', fontWeight: 900, marginTop: '2px' }}>
                {deep.socTarotWhisper.name}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '3px' }}>
                {deep.socTarotWhisper.bonusEffect}
              </div>
            </div>
          )}

          {deep.socEngraving && (
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-main)',
                borderRadius: '5px',
                padding: '9px 11px',
              }}
            >
              <div style={{ fontSize: '10.5px', fontWeight: 900, color: 'var(--amber-primary)' }}>
                BEST WEAPON + TRINKET ENGRAVING
              </div>
              <div style={{ fontSize: '12px', fontWeight: 900, marginTop: '2px' }}>
                {deep.socEngraving.combo}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '3px' }}>
                {deep.socEngraving.effect}
              </div>
            </div>
          )}

          {deep.socTraitPlan && (
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-main)',
                borderRadius: '5px',
                padding: '9px 11px',
              }}
            >
              <div style={{ fontSize: '10.5px', fontWeight: 900, color: 'var(--green-primary)' }}>
                MEMORY SHARD TRIAL (1★ → 5★ PLAN)
              </div>
              <div style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--text-main)', marginTop: '3px' }}>
                {deep.socTraitPlan}
              </div>
            </div>
          )}
        </div>

        {/* RANK 1-11 SKILL TREE TABLE */}
        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              border: '1px solid var(--border-main)',
              fontSize: '11.5px',
            }}
          >
            <thead>
              <tr style={{ background: 'var(--bg-subnav)', color: '#FFF' }}>
                <th style={{ padding: '7px 9px', textAlign: 'left', width: '135px' }}>RANK</th>
                <th style={{ padding: '7px 9px', textAlign: 'left' }}>LEFT TREE SKILL</th>
                <th style={{ padding: '7px 9px', textAlign: 'left' }}>RIGHT TREE SKILL</th>
                <th style={{ padding: '7px 9px', textAlign: 'center', width: '130px' }}>RECOMMENDED PICK</th>
              </tr>
            </thead>
            <tbody>
              {deep.socSkillTree.map((row) => {
                const pickLeft = row.pick === 'LEFT' || row.pick.includes('BOTH');
                const pickRight = row.pick === 'RIGHT' || row.pick.includes('BOTH');
                return (
                  <tr key={row.rank} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td className="mono" style={{ padding: '8px 9px', fontWeight: 900 }}>
                      {row.rank}
                    </td>
                    <td
                      style={{
                        padding: '8px 9px',
                        background: pickLeft ? 'rgba(21, 128, 61, 0.07)' : 'transparent',
                      }}
                    >
                      <div style={{ fontWeight: 900, color: pickLeft ? '#15803D' : 'var(--text-main)' }}>
                        {pickLeft ? '✓ ' : ''}
                        {row.leftSkill}
                      </div>
                      <div style={{ fontSize: '10.5px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                        {row.leftDesc}
                      </div>
                    </td>
                    <td
                      style={{
                        padding: '8px 9px',
                        background: pickRight ? 'rgba(21, 128, 61, 0.07)' : 'transparent',
                      }}
                    >
                      <div style={{ fontWeight: 900, color: pickRight ? '#15803D' : 'var(--text-main)' }}>
                        {pickRight ? '✓ ' : ''}
                        {row.rightSkill}
                      </div>
                      <div style={{ fontSize: '10.5px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                        {row.rightDesc}
                      </div>
                    </td>
                    <td className="mono" style={{ padding: '8px 9px', textAlign: 'center', fontWeight: 900 }}>
                      <span
                        style={{
                          padding: '3px 7px',
                          borderRadius: '4px',
                          fontSize: '10px',
                          background: row.pick.includes('BOTH') ? '#FEF3C7' : '#DCFCE7',
                          color: row.pick.includes('BOTH') ? '#B45309' : '#15803D',
                          border: '1px solid currentColor',
                        }}
                      >
                        {row.pick}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  // 2. UMA MUSUME: TRACK/DISTANCE APTITUDE GRID + CAREER TRAINING EVENT CHOICE HELPER
  if (gameSlug === 'uma-musume' && deep.umaAptitudes) {
    const gradeColor = (g: string) =>
      g === 'S' || g === 'A' ? '#DC2626' : g === 'B' ? '#D97706' : '#71717A';

    return (
      <section
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-main)',
          borderRadius: '6px',
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <h2
          style={{
            fontSize: '13.5px',
            fontWeight: 900,
            borderLeft: '4px solid var(--accent-primary)',
            paddingLeft: '8px',
          }}
        >
          TRACK / DISTANCE APTITUDES, TARGET STATS &amp; TRAINING EVENT CHOICE HELPER
        </h2>

        {/* STAT GROWTH & TARGET CM STATS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '8px',
          }}
        >
          <div
            style={{
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-main)',
              borderRadius: '5px',
              padding: '9px 11px',
            }}
          >
            <div style={{ fontSize: '10.5px', fontWeight: 900, color: 'var(--accent-primary)' }}>
              STAT GROWTH BONUSES
            </div>
            <div className="mono" style={{ fontSize: '12px', fontWeight: 900, marginTop: '3px' }}>
              {deep.umaStatGrowth}
            </div>
          </div>
          <div
            style={{
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-main)',
              borderRadius: '5px',
              padding: '9px 11px',
            }}
          >
            <div style={{ fontSize: '10.5px', fontWeight: 900, color: 'var(--green-primary)' }}>
              CHAMPIONS MEETING TARGET STAT THRESHOLDS
            </div>
            <div className="mono" style={{ fontSize: '11.5px', fontWeight: 900, marginTop: '3px' }}>
              {deep.umaTargetStats}
            </div>
          </div>
        </div>

        {/* APTITUDE MATRIX */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '8px',
          }}
        >
          {[
            { title: 'Track Surface', items: deep.umaAptitudes.surface },
            { title: 'Race Distance', items: deep.umaAptitudes.distance },
            { title: 'Running Style', items: deep.umaAptitudes.style },
          ].map((group) => (
            <div
              key={group.title}
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-main)',
                borderRadius: '5px',
                padding: '8px 10px',
              }}
            >
              <div style={{ fontSize: '10.5px', fontWeight: 900, color: 'var(--text-muted)', marginBottom: '6px' }}>
                {group.title.toUpperCase()}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {group.items.map((it) => (
                  <span
                    key={it.label}
                    className="mono"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-main)',
                      fontSize: '11px',
                      fontWeight: 800,
                    }}
                  >
                    <span>{it.label}:</span>
                    <strong style={{ color: gradeColor(it.grade), fontSize: '12.5px' }}>{it.grade}</strong>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CAREER EVENT CHOICE HELPER */}
        {deep.umaCareerEvents && (
          <div>
            <div style={{ fontSize: '12px', fontWeight: 900, marginBottom: '6px' }}>
              Interactive Training Event Choice Helper (Top Option vs. Bottom Option):
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {deep.umaCareerEvents.map((ev) => (
                <div
                  key={ev.eventTitle}
                  style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-main)',
                    borderRadius: '5px',
                    padding: '9px 11px',
                  }}
                >
                  <div style={{ fontWeight: 900, fontSize: '12px', marginBottom: '5px' }}>
                    Event: {ev.eventTitle}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '6px' }}>
                    <div
                      style={{
                        background: 'var(--bg-surface)',
                        borderLeft: '3px solid #15803D',
                        padding: '6px 9px',
                        borderRadius: '4px',
                        fontSize: '11px',
                      }}
                    >
                      <div style={{ fontWeight: 900, color: '#15803D' }}>▲ Top Choice: &ldquo;{ev.topOption}&rdquo;</div>
                      <div className="mono" style={{ fontSize: '10.5px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                        → {ev.topOutcome}
                      </div>
                    </div>
                    <div
                      style={{
                        background: 'var(--bg-surface)',
                        borderLeft: '3px solid #2563EB',
                        padding: '6px 9px',
                        borderRadius: '4px',
                        fontSize: '11px',
                      }}
                    >
                      <div style={{ fontWeight: 900, color: '#2563EB' }}>▼ Bottom Choice: &ldquo;{ev.bottomOption}&rdquo;</div>
                      <div className="mono" style={{ fontSize: '10.5px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                        → {ev.bottomOutcome}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }

  // 3. HEAVEN BURNS RED: 8-LAYER SCORE ATTACK BUFF & DEBUFF STACKING MATRIX
  if (gameSlug === 'heaven-burns-red' && deep.hbrBuffMatrix) {
    return (
      <section
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-main)',
          borderRadius: '6px',
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <h2
          style={{
            fontSize: '13.5px',
            fontWeight: 900,
            borderLeft: '4px solid var(--accent-primary)',
            paddingLeft: '8px',
          }}
        >
          8-LAYER SCORE ATTACK BUFF MATRIX &amp; 6★ ACCESSORY SUBSTAT SYNTHESIS
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '8px',
          }}
        >
          {deep.hbrSynthesisPriority && (
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-main)',
                borderRadius: '5px',
                padding: '9px 11px',
              }}
            >
              <div style={{ fontSize: '10.5px', fontWeight: 900, color: 'var(--accent-primary)' }}>
                6★ SUBSTAT SYNTHESIS PRIORITY (+6 RINGS / EARRINGS)
              </div>
              <div style={{ fontSize: '11.5px', fontWeight: 800, marginTop: '3px' }}>
                {deep.hbrSynthesisPriority}
              </div>
            </div>
          )}
          {deep.hbrOrbRecommendation && (
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-main)',
                borderRadius: '5px',
                padding: '9px 11px',
              }}
            >
              <div style={{ fontSize: '10.5px', fontWeight: 900, color: 'var(--amber-primary)' }}>
                RECOMMENDED 5★ BOSS ORB SLOT
              </div>
              <div style={{ fontSize: '11.5px', fontWeight: 800, marginTop: '3px' }}>
                {deep.hbrOrbRecommendation}
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '7px' }}>
          {deep.hbrBuffMatrix.map((item) => {
            const active = item.status === 'PROVIDES';
            return (
              <div
                key={item.layerName}
                style={{
                  background: active ? 'rgba(21, 128, 61, 0.06)' : 'var(--bg-subtle)',
                  border: active ? '1.5px solid #15803D' : '1px solid var(--border-main)',
                  borderRadius: '5px',
                  padding: '8px 10px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: 900, fontSize: '11.5px' }}>{item.layerName}</span>
                  <span
                    className="mono"
                    style={{
                      fontSize: '9.5px',
                      fontWeight: 900,
                      padding: '2px 6px',
                      borderRadius: '3px',
                      background: active ? '#15803D' : 'var(--bg-subnav)',
                      color: '#FFF',
                    }}
                  >
                    {active ? '✓ SELF / KIT' : 'ALLY NEEDED'}
                  </span>
                </div>
                <div style={{ fontSize: '10.5px', color: 'var(--text-secondary)', marginTop: '3px' }}>
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  // 4. STAR SAVIOR: ELEMENTAL RESONANCE & 3-TURN OVERDRIVE BURST ROTATION
  return (
    <section
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-main)',
        borderRadius: '6px',
        padding: '14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <h2
        style={{
          fontSize: '13.5px',
          fontWeight: 900,
          borderLeft: '4px solid var(--accent-primary)',
          paddingLeft: '8px',
        }}
      >
        ARCANA RESONANCE LINK &amp; 3-TURN OVERDRIVE BURST ROTATION
      </h2>
      {deep.starResonancePair && (
        <div
          style={{
            background: 'var(--bg-subtle)',
            border: '1px solid var(--border-main)',
            borderRadius: '5px',
            padding: '9px 11px',
            fontSize: '12px',
            fontWeight: 800,
          }}
        >
          ★ {deep.starResonancePair}
        </div>
      )}
      {deep.starBurstRotation && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {deep.starBurstRotation.map((step) => (
            <div
              key={step}
              style={{
                background: 'var(--bg-subtle)',
                borderLeft: '3px solid var(--accent-primary)',
                padding: '7px 10px',
                borderRadius: '4px',
                fontSize: '11.5px',
                fontWeight: 700,
              }}
            >
              {step}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
