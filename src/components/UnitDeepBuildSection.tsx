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
          borderRadius: '8px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        <h2
          style={{
            fontSize: '15px',
            fontWeight: 800,
            borderLeft: '4px solid var(--accent-primary)',
            paddingLeft: '10px',
          }}
        >
          RANK 1–11 SKILL TREE PROGRESSION (LEFT vs. RIGHT PICK) &amp; TAROT / ENGRAVING BUILD
        </h2>

        {/* TAROT, ENGRAVING & SHARD FARMING SUMMARY */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '10px',
          }}
        >
          {deep.socTarotWhisper && (
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-main)',
                borderRadius: '6px',
                padding: '11px 13px',
              }}
            >
              <div className="mono" style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--accent-primary)' }}>
                BEST TAROT WHISPER
              </div>
              <div style={{ fontSize: '13.5px', fontWeight: 800, marginTop: '3px' }}>
                {deep.socTarotWhisper.name}
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                {deep.socTarotWhisper.bonusEffect}
              </div>
            </div>
          )}

          {deep.socEngraving && (
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-main)',
                borderRadius: '6px',
                padding: '11px 13px',
              }}
            >
              <div className="mono" style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--amber-primary)' }}>
                BEST WEAPON + TRINKET ENGRAVING
              </div>
              <div style={{ fontSize: '13.5px', fontWeight: 800, marginTop: '3px' }}>
                {deep.socEngraving.combo}
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                {deep.socEngraving.effect}
              </div>
            </div>
          )}

          {deep.socTraitPlan && (
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-main)',
                borderRadius: '6px',
                padding: '11px 13px',
              }}
            >
              <div className="mono" style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--green-primary)' }}>
                MEMORY SHARD TRIAL (1★ → 5★ PLAN)
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginTop: '4px' }}>
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
              fontSize: '13px',
              minWidth: '580px',
            }}
          >
            <thead>
              <tr style={{ background: 'var(--bg-subnav)', color: 'var(--text-main)' }}>
                <th style={{ padding: '9px 10px', textAlign: 'left', width: '145px' }}>RANK</th>
                <th style={{ padding: '9px 10px', textAlign: 'left' }}>LEFT TREE SKILL</th>
                <th style={{ padding: '9px 10px', textAlign: 'left' }}>RIGHT TREE SKILL</th>
                <th style={{ padding: '9px 10px', textAlign: 'center', width: '145px' }}>RECOMMENDED PICK</th>
              </tr>
            </thead>
            <tbody>
              {deep.socSkillTree.map((row) => {
                const pickLeft = row.pick === 'LEFT' || row.pick.includes('BOTH');
                const pickRight = row.pick === 'RIGHT' || row.pick.includes('BOTH');
                return (
                  <tr key={row.rank} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td className="mono" style={{ padding: '10px', fontWeight: 800 }}>
                      {row.rank}
                    </td>
                    <td
                      style={{
                        padding: '10px',
                        background: pickLeft ? 'var(--green-bg)' : 'transparent',
                      }}
                    >
                      <div style={{ fontWeight: 800, color: pickLeft ? 'var(--green-primary)' : 'var(--text-main)' }}>
                        {pickLeft ? '✓ ' : ''}
                        {row.leftSkill}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '3px' }}>
                        {row.leftDesc}
                      </div>
                    </td>
                    <td
                      style={{
                        padding: '10px',
                        background: pickRight ? 'var(--green-bg)' : 'transparent',
                      }}
                    >
                      <div style={{ fontWeight: 800, color: pickRight ? 'var(--green-primary)' : 'var(--text-main)' }}>
                        {pickRight ? '✓ ' : ''}
                        {row.rightSkill}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '3px' }}>
                        {row.rightDesc}
                      </div>
                    </td>
                    <td className="mono" style={{ padding: '10px', textAlign: 'center', fontWeight: 800 }}>
                      <span
                        style={{
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '11.5px',
                          background: row.pick.includes('BOTH') ? 'var(--amber-bg)' : 'var(--green-bg)',
                          color: row.pick.includes('BOTH') ? 'var(--amber-primary)' : 'var(--green-primary)',
                          border: row.pick.includes('BOTH') ? '1px solid var(--amber-border)' : '1px solid var(--green-border)',
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
      g === 'S' || g === 'A' ? 'var(--accent-primary)' : g === 'B' ? 'var(--amber-primary)' : 'var(--text-muted)';

    return (
      <section
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-main)',
          borderRadius: '8px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        <h2
          style={{
            fontSize: '15px',
            fontWeight: 800,
            borderLeft: '4px solid var(--accent-primary)',
            paddingLeft: '10px',
          }}
        >
          TRACK / DISTANCE APTITUDES, TARGET STATS &amp; TRAINING EVENT CHOICE HELPER
        </h2>

        {/* STAT GROWTH & TARGET CM STATS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '10px',
          }}
        >
          <div
            style={{
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-main)',
              borderRadius: '6px',
              padding: '11px 13px',
            }}
          >
            <div className="mono" style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--accent-primary)' }}>
              STAT GROWTH BONUSES
            </div>
            <div className="mono" style={{ fontSize: '13.5px', fontWeight: 800, marginTop: '4px' }}>
              {deep.umaStatGrowth}
            </div>
          </div>
          <div
            style={{
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-main)',
              borderRadius: '6px',
              padding: '11px 13px',
            }}
          >
            <div className="mono" style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--green-primary)' }}>
              CHAMPIONS MEETING TARGET STAT THRESHOLDS
            </div>
            <div className="mono" style={{ fontSize: '13px', fontWeight: 800, marginTop: '4px' }}>
              {deep.umaTargetStats}
            </div>
          </div>
        </div>

        {/* APTITUDE MATRIX */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '10px',
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
                borderRadius: '6px',
                padding: '10px 12px',
              }}
            >
              <div className="mono" style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '7px' }}>
                {group.title.toUpperCase()}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {group.items.map((it) => (
                  <span
                    key={it.label}
                    className="mono"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 9px',
                      borderRadius: '5px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-main)',
                      fontSize: '12px',
                      fontWeight: 800,
                    }}
                  >
                    <span>{it.label}:</span>
                    <strong style={{ color: gradeColor(it.grade), fontSize: '13.5px' }}>{it.grade}</strong>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CAREER EVENT CHOICE HELPER */}
        {deep.umaCareerEvents && (
          <div>
            <div style={{ fontSize: '13.5px', fontWeight: 800, marginBottom: '8px' }}>
              Interactive Training Event Choice Helper (Top Option vs. Bottom Option):
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {deep.umaCareerEvents.map((ev) => (
                <div
                  key={ev.eventTitle}
                  style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-main)',
                    borderRadius: '6px',
                    padding: '11px 13px',
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '13.5px', marginBottom: '7px' }}>
                    Event: {ev.eventTitle}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px' }}>
                    <div
                      style={{
                        background: 'var(--bg-surface)',
                        borderLeft: '3px solid var(--green-primary)',
                        padding: '8px 10px',
                        borderRadius: '5px',
                        fontSize: '12.5px',
                      }}
                    >
                      <div style={{ fontWeight: 800, color: 'var(--green-primary)' }}>▲ Top Choice: &ldquo;{ev.topOption}&rdquo;</div>
                      <div className="mono" style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '3px' }}>
                        → {ev.topOutcome}
                      </div>
                    </div>
                    <div
                      style={{
                        background: 'var(--bg-surface)',
                        borderLeft: '3px solid var(--blue-primary)',
                        padding: '8px 10px',
                        borderRadius: '5px',
                        fontSize: '12.5px',
                      }}
                    >
                      <div style={{ fontWeight: 800, color: 'var(--blue-primary)' }}>▼ Bottom Choice: &ldquo;{ev.bottomOption}&rdquo;</div>
                      <div className="mono" style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '3px' }}>
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
          borderRadius: '8px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        <h2
          style={{
            fontSize: '15px',
            fontWeight: 800,
            borderLeft: '4px solid var(--accent-primary)',
            paddingLeft: '10px',
          }}
        >
          8-LAYER SCORE ATTACK BUFF MATRIX &amp; 6★ ACCESSORY SUBSTAT SYNTHESIS
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '10px',
          }}
        >
          {deep.hbrSynthesisPriority && (
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-main)',
                borderRadius: '6px',
                padding: '11px 13px',
              }}
            >
              <div className="mono" style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--accent-primary)' }}>
                6★ SUBSTAT SYNTHESIS PRIORITY (+6 RINGS / EARRINGS)
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, marginTop: '4px' }}>
                {deep.hbrSynthesisPriority}
              </div>
            </div>
          )}
          {deep.hbrOrbRecommendation && (
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-main)',
                borderRadius: '6px',
                padding: '11px 13px',
              }}
            >
              <div className="mono" style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--amber-primary)' }}>
                RECOMMENDED 5★ BOSS ORB SLOT
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, marginTop: '4px' }}>
                {deep.hbrOrbRecommendation}
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '9px' }}>
          {deep.hbrBuffMatrix.map((item) => {
            const active = item.status === 'PROVIDES';
            return (
              <div
                key={item.layerName}
                style={{
                  background: active ? 'var(--green-bg)' : 'var(--bg-subtle)',
                  border: active ? '1.5px solid var(--green-border)' : '1px solid var(--border-main)',
                  borderRadius: '6px',
                  padding: '10px 12px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontWeight: 800, fontSize: '13px' }}>{item.layerName}</span>
                  <span
                    className="mono"
                    style={{
                      fontSize: '10.5px',
                      fontWeight: 800,
                      padding: '2px 7px',
                      borderRadius: '4px',
                      background: active ? 'var(--green-primary)' : 'var(--bg-subnav)',
                      color: active ? '#062E22' : 'var(--text-secondary)',
                    }}
                  >
                    {active ? '✓ SELF / KIT' : 'ALLY NEEDED'}
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>
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
        borderRadius: '8px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <h2
        style={{
          fontSize: '15px',
          fontWeight: 800,
          borderLeft: '4px solid var(--accent-primary)',
          paddingLeft: '10px',
        }}
      >
        ARCANA RESONANCE LINK &amp; 3-TURN OVERDRIVE BURST ROTATION
      </h2>
      {deep.starResonancePair && (
        <div
          style={{
            background: 'var(--bg-subtle)',
            border: '1px solid var(--border-main)',
            borderRadius: '6px',
            padding: '10px 12px',
            fontSize: '13.5px',
            fontWeight: 800,
            color: 'var(--amber-primary)',
          }}
        >
          ★ {deep.starResonancePair}
        </div>
      )}
      {deep.starBurstRotation && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {deep.starBurstRotation.map((step) => (
            <div
              key={step}
              style={{
                background: 'var(--bg-subtle)',
                borderLeft: '3px solid var(--accent-primary)',
                padding: '9px 12px',
                borderRadius: '5px',
                fontSize: '13px',
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
