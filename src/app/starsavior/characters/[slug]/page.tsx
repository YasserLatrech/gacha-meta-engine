import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getStarSaviorWikiData } from '../../../../application/wiki.service';
import { WikiShell } from '../../../../components/WikiShell';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getStarSaviorWikiData();
  const unit = data.characters.find((c) => c.slug === slug);
  if (!unit) return { title: 'Character Not Found | Star Savior Wiki' };
  return {
    title: `${unit.name} Build, Skills, Tier & Best Arcana | Star Savior Wiki`,
    description: `${unit.name} (${unit.rarity} ${unit.element} ${unit.role}) complete guide in Star Savior: skills, Nova Burst, Lv.200 stats, Limit Breaks, Exclusive Curio, Gifts, and best SSR Arcana.`,
  };
}

export default async function CharacterDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getStarSaviorWikiData();
  const unit = data.characters.find((c) => c.slug === slug);

  if (!unit) {
    notFound();
  }

  const ssCharacters = data.characters.filter((c) => c.overallTier === 'SS');
  const recommendedArcana = unit.bestArcanaSlugs
    .map((aSlug) => data.arcana.find((a) => a.slug === aSlug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));
  const fallbackArcana = recommendedArcana.length > 0 ? recommendedArcana : data.arcana.slice(0, 4);

  // Calculate stat ranks among all 57 characters
  const hpRank = [...data.characters].sort((a, b) => b.baseStats.hp - a.baseStats.hp).findIndex((c) => c.slug === unit.slug) + 1;
  const atkRank = [...data.characters].sort((a, b) => b.baseStats.atk - a.baseStats.atk).findIndex((c) => c.slug === unit.slug) + 1;
  const defRank = [...data.characters].sort((a, b) => b.baseStats.def - a.baseStats.def).findIndex((c) => c.slug === unit.slug) + 1;
  const spdRank = [...data.characters].sort((a, b) => b.baseStats.spd - a.baseStats.spd).findIndex((c) => c.slug === unit.slug) + 1;

  const sd = unit.staticData;

  return (
    <WikiShell
      game={data.game}
      topCharacters={ssCharacters}
      activeNav="characters"
      breadcrumbLabel={`${unit.name} Build & Static Data`}
    >
      {/* 1. Character Hero Header with Full 500x500 Standing Illustration + Square Icon */}
      <article
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '8px',
          padding: '20px',
          display: 'grid',
          gridTemplateColumns: '210px minmax(0, 1fr)',
          gap: '22px',
          alignItems: 'center',
        }}
      >
        {/* Full Standing Character Art */}
        <div
          style={{
            background: 'radial-gradient(circle at center, rgba(59,130,246,0.18) 0%, #0d111a 75%)',
            border: '1px solid var(--border-strong)',
            borderRadius: '12px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <img
            src={sd?.illustUrl || unit.imageUrl}
            alt={`${unit.name} Full Illustration`}
            width={190}
            height={190}
            style={{
              width: '190px',
              height: '190px',
              borderRadius: '10px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img
              src={unit.imageUrl}
              alt={unit.name}
              width={44}
              height={44}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                objectFit: 'cover',
                border: '1px solid var(--border-strong)',
              }}
            />
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 700 }}>
              <div>{unit.name}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.66rem' }}>{sd?.nameJp || ''}</div>
            </div>
          </div>
        </div>

        {/* Character Combat Identity & Tier Ratings */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
            <span
              style={{
                padding: '3px 9px',
                borderRadius: '4px',
                fontSize: '0.74rem',
                fontWeight: 900,
                background: 'rgba(245, 158, 11, 0.2)',
                color: '#fbbf24',
                border: '1px solid rgba(245, 158, 11, 0.45)',
              }}
            >
              {unit.rarity}
            </span>
            <span
              style={{
                padding: '3px 9px',
                borderRadius: '4px',
                fontSize: '0.74rem',
                fontWeight: 800,
                background: sd?.pool === 'Limited' ? 'rgba(236, 72, 153, 0.2)' : '#1e2536',
                color: sd?.pool === 'Limited' ? '#f472b6' : '#cbd5e1',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {sd?.pool || 'Standard'} Pool
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '3px 10px',
                borderRadius: '4px',
                fontSize: '0.74rem',
                fontWeight: 800,
                background: '#1e2536',
                color: '#f8fafc',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {sd?.attributeIconUrl && (
                <img src={sd.attributeIconUrl} alt={unit.element} width={18} height={18} style={{ width: '18px', height: '18px' }} />
              )}
              {unit.element} Attribute
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '3px 10px',
                borderRadius: '4px',
                fontSize: '0.74rem',
                fontWeight: 800,
                background: '#1e2536',
                color: '#f8fafc',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {sd?.classIconUrl && (
                <img src={sd.classIconUrl} alt={unit.role} width={18} height={18} style={{ width: '18px', height: '18px' }} />
              )}
              {unit.role}
            </span>
            <span
              style={{
                padding: '3px 9px',
                borderRadius: '4px',
                fontSize: '0.72rem',
                fontWeight: 700,
                background: '#131822',
                color: '#93c5fd',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {sd?.attackType || 'Slash Damage'}
            </span>
          </div>

          <h1 style={{ margin: 0, fontSize: '1.65rem', fontWeight: 900, color: '#ffffff' }}>
            {unit.name} — Build, Skills & Evaluation
          </h1>
          <p style={{ margin: '8px 0 14px', fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            {unit.summary}
          </p>

          {/* Tier & Score Boxes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '10px' }}>
            {[
              { label: 'OVERALL TIER', value: unit.overallTier, color: '#f87171' },
              { label: 'REROLL TIER', value: unit.rerollTier, color: '#fb923c' },
              { label: 'PVP GAUNTLET', value: sd?.pvpTier || unit.overallTier, color: '#c084fc' },
              { label: 'META SCORE', value: `${unit.score.toFixed(1)} / 10`, color: '#38bdf8' },
              { label: 'DUPE RELIANCE', value: sd?.dupeRating || '★★☆', color: '#fbbf24' },
            ].map((b) => (
              <div
                key={b.label}
                style={{
                  background: '#131822',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  padding: '8px 10px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '0.64rem', color: 'var(--text-muted)', fontWeight: 800 }}>
                  {b.label}
                </div>
                <div style={{ fontSize: '1.08rem', fontWeight: 900, color: b.color, marginTop: '2px' }}>
                  {b.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* 2. Lv.200 Base Combat Stats & Journey Training Stats */}
      <section
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
            fontSize: '0.9rem',
            fontWeight: 800,
            color: '#f8fafc',
            borderLeft: '4px solid #3b82f6',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {unit.name} Base Combat Stats (Lv.200) & Journey Aptitudes
        </div>
        <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Primary Combat Stats with Server Ranks */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(185px, 1fr))', gap: '10px' }}>
            {[
              { label: 'Max HP', val: unit.baseStats.hp.toLocaleString(), rank: `#${hpRank} / ${data.characters.length}`, color: '#34d399' },
              { label: 'Attack (ATK)', val: unit.baseStats.atk.toLocaleString(), rank: `#${atkRank} / ${data.characters.length}`, color: '#f87171' },
              { label: 'Defense (DEF)', val: unit.baseStats.def.toLocaleString(), rank: `#${defRank} / ${data.characters.length}`, color: '#60a5fa' },
              { label: 'Speed (SPD)', val: unit.baseStats.spd, rank: `#${spdRank} / ${data.characters.length}`, color: '#fbbf24' },
            ].map((st) => (
              <div
                key={st.label}
                style={{
                  background: '#131822',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  padding: '10px 12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>{st.label}</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 900, color: st.color, marginTop: '2px' }}>{st.val}</div>
                </div>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    padding: '2px 7px',
                    borderRadius: '4px',
                    background: '#1c2333',
                    color: '#93c5fd',
                  }}
                >
                  Rank {st.rank}
                </span>
              </div>
            ))}
          </div>

          {/* Secondary Combat Stats & Journey Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(125px, 1fr))', gap: '8px' }}>
            {[
              { label: 'Crit Rate', val: unit.baseStats.critRate || `${unit.baseStats.crit}%` },
              { label: 'Crit DMG', val: unit.baseStats.critDmg || '68%' },
              { label: 'Effect Hit', val: unit.baseStats.effHit || '100%' },
              { label: 'Effect RES', val: unit.baseStats.effRes || '0%' },
              ...(sd?.journeyStats
                ? [
                    { label: 'Journey Power', val: sd.journeyStats.power },
                    { label: 'Journey Vitality', val: sd.journeyStats.vitality },
                    { label: 'Journey Endurance', val: sd.journeyStats.endurance },
                    { label: 'Journey Focus', val: sd.journeyStats.focus },
                    { label: 'Journey Protection', val: sd.journeyStats.protection },
                  ]
                : []),
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: '#11151e',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  padding: '8px 10px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '0.66rem', color: 'var(--text-muted)', fontWeight: 700 }}>{item.label}</div>
                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#f8fafc', marginTop: '2px' }}>{item.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Skills, Official Skill Icons, Nova Burst & Upgrade Priority */}
      <section
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
            fontSize: '0.9rem',
            fontWeight: 800,
            color: '#f8fafc',
            borderLeft: '4px solid #f59e0b',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {unit.name} Skills, Nova Burst & Skill Upgrade Priority
        </div>
        <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Skill Priority Summary */}
          {sd?.skillPriority && sd.skillPriority.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
              {sd.skillPriority.map((sp, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#131822',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    padding: '9px 12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.76rem', fontWeight: 800, color: '#f8fafc' }}>{sp.skillType}</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Target: {sp.recLevel}</div>
                  </div>
                  <span style={{ fontSize: '0.82rem', fontWeight: 900, color: '#fbbf24' }}>
                    {sp.priority.split('\n')[0]}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Skills List with Official 56x56 Skill Icons */}
          {unit.skills.map((skill, idx) => (
            <div
              key={idx}
              style={{
                background: '#131822',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: '14px',
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
              }}
            >
              {skill.iconUrl && (
                <img
                  src={skill.iconUrl}
                  alt={skill.name}
                  width={56}
                  height={56}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '10px',
                    objectFit: 'contain',
                    background: '#0b0e14',
                    border: '1px solid var(--border-strong)',
                    padding: '4px',
                    flexShrink: 0,
                  }}
                />
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: 'rgba(59, 130, 246, 0.2)',
                        color: '#60a5fa',
                        border: '1px solid rgba(59, 130, 246, 0.35)',
                      }}
                    >
                      {skill.type}
                    </span>
                    <strong style={{ fontSize: '0.96rem', color: '#f8fafc' }}>{skill.name}</strong>
                    {skill.nameJp && (
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>({skill.nameJp})</span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                    {skill.spOrEnergyCost} · <span style={{ color: '#fbbf24' }}>{skill.multiplierSummary}</span>
                  </div>
                </div>
                {skill.target && (
                  <div style={{ fontSize: '0.72rem', color: '#93c5fd', fontWeight: 700, marginBottom: '4px' }}>
                    {skill.target}
                  </div>
                )}
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55, whiteSpace: 'pre-line' }}>
                  {skill.exactDescription}
                </p>
                {skill.novaBurst && (
                  <div
                    style={{
                      marginTop: '8px',
                      padding: '7px 10px',
                      borderRadius: '6px',
                      background: 'rgba(245, 158, 11, 0.1)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      fontSize: '0.76rem',
                      color: '#fde68a',
                    }}
                  >
                    <strong>Nova Burst:</strong> {skill.novaBurst}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Dupes / Limit Break Passive Progression (LB0 - LB3) */}
      {sd?.limitBreaks && sd.limitBreaks.length > 0 && (
        <section
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
              fontSize: '0.9rem',
              fontWeight: 800,
              color: '#f8fafc',
              borderLeft: '4px solid #ec4899',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            Limit Break (Dupes) Passive Progression ({sd.dupeRating || '★★☆'})
          </div>
          <div style={{ padding: '14px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
            {sd.limitBreaks.map((lb, idx) => (
              <div
                key={idx}
                style={{
                  background: '#131822',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  padding: '10px 12px',
                }}
              >
                <div style={{ fontSize: '0.74rem', fontWeight: 900, color: '#f472b6', marginBottom: '4px' }}>
                  {lb.stage}
                </div>
                <div style={{ fontSize: '0.79rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {lb.effect}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Recommended Equipment Sets & Stat Priority */}
      {sd?.equipment && (
        <section
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
              fontSize: '0.9rem',
              fontWeight: 800,
              color: '#f8fafc',
              borderLeft: '4px solid #8b5cf6',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            Recommended Equipment Sets & Main / Substat Priority
          </div>
          <div style={{ padding: '14px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
            <div style={{ background: '#131822', border: '1px solid var(--border-subtle)', borderRadius: '6px', padding: '12px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#c084fc', marginBottom: '6px' }}>
                RECOMMENDED PVE GEAR SETS
              </div>
              {sd.equipment.pveSets.map((s, i) => (
                <div key={i} style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 700, marginBottom: '4px' }}>
                  • {s}
                </div>
              ))}
            </div>
            <div style={{ background: '#131822', border: '1px solid var(--border-subtle)', borderRadius: '6px', padding: '12px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#60a5fa', marginBottom: '6px' }}>
                RECOMMENDED PVP GEAR SETS
              </div>
              {sd.equipment.pvpSets.map((s, i) => (
                <div key={i} style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 700, marginBottom: '4px' }}>
                  • {s}
                </div>
              ))}
            </div>
            <div style={{ background: '#131822', border: '1px solid var(--border-subtle)', borderRadius: '6px', padding: '12px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#34d399', marginBottom: '6px' }}>
                MAIN STATS & SUBSTAT PRIORITY
              </div>
              <div style={{ fontSize: '0.79rem', color: 'var(--text-secondary)', marginBottom: '3px' }}>
                <strong>Necklace:</strong> {sd.equipment.necklaceMain}
              </div>
              <div style={{ fontSize: '0.79rem', color: 'var(--text-secondary)', marginBottom: '3px' }}>
                <strong>Ring:</strong> {sd.equipment.ringMain}
              </div>
              <div style={{ fontSize: '0.79rem', color: 'var(--text-secondary)' }}>
                <strong>Substats:</strong> {sd.equipment.subStats}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Recommended SSR Arcana Cards (72x72 Icons) & Hard Potential */}
      <section
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
            fontSize: '0.9rem',
            fontWeight: 800,
            color: '#f8fafc',
            borderLeft: '4px solid #10b981',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          Recommended SSR Arcana Deck & Hard Potential for {unit.name}
        </div>
        <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
            {fallbackArcana.map((arc) => (
              <Link
                key={arc.slug}
                href="/starsavior/arcana"
                style={{
                  display: 'flex',
                  gap: '12px',
                  padding: '12px',
                  borderRadius: '8px',
                  background: '#131822',
                  border: '1px solid var(--border-subtle)',
                  alignItems: 'center',
                }}
              >
                <img
                  src={arc.imageUrl}
                  alt={arc.name}
                  width={72}
                  height={72}
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    border: '1px solid rgba(245, 158, 11, 0.5)',
                    flexShrink: 0,
                  }}
                />
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.86rem', color: '#f8fafc' }}>{arc.name}</span>
                    <span
                      style={{
                        fontSize: '0.66rem',
                        fontWeight: 800,
                        padding: '1px 5px',
                        borderRadius: '3px',
                        background: 'rgba(239, 68, 68, 0.2)',
                        color: '#f87171',
                      }}
                    >
                      {arc.tier}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#93c5fd', marginTop: '2px', fontWeight: 600 }}>
                    {arc.subType}
                  </div>
                  <p style={{ margin: '4px 0 0', fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    {arc.effectSummary.slice(0, 120)}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {sd?.hardPotential?.name && (
            <div
              style={{
                background: '#131822',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
                padding: '10px 14px',
              }}
            >
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#fbbf24' }}>
                RECOMMENDED HARD POTENTIAL: {sd.hardPotential.name}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '3px' }}>
                {sd.hardPotential.effect}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 7. Exclusive Curio (68x68 Official Icon) & Resonance Potentials */}
      {(sd?.curio?.name || (sd?.resonancePotentials && sd.resonancePotentials.length > 0)) && (
        <section
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
              fontSize: '0.9rem',
              fontWeight: 800,
              color: '#f8fafc',
              borderLeft: '4px solid #eab308',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            Exclusive Journey Curio & Resonance Potentials
          </div>
          <div style={{ padding: '14px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
            {sd?.curio?.name && (
              <div
                style={{
                  background: '#131822',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px',
                  padding: '12px',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                }}
              >
                {sd.curio.iconUrl && (
                  <img
                    src={sd.curio.iconUrl}
                    alt={sd.curio.name}
                    width={68}
                    height={68}
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '10px',
                      objectFit: 'contain',
                      background: '#0b0e14',
                      border: '1px solid var(--border-strong)',
                      padding: '4px',
                      flexShrink: 0,
                    }}
                  />
                )}
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#fbbf24' }}>
                    EXCLUSIVE CURIO · RANK {sd.curio.rank}
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#f8fafc', marginTop: '2px' }}>
                    {sd.curio.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.45 }}>
                    {sd.curio.effect}
                  </div>
                </div>
              </div>
            )}

            {sd?.resonancePotentials && sd.resonancePotentials.length > 0 && (
              <div
                style={{
                  background: '#131822',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#93c5fd' }}>
                  RESONANCE POTENTIALS
                </div>
                {sd.resonancePotentials.map((rp, i) => (
                  <div key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: '#f8fafc' }}>{rp.name}:</strong> {rp.effect}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 8. Favorite Affinity Gifts (with 56x56 Official Gift Icons) */}
      {sd?.gifts && sd.gifts.length > 0 && (
        <section
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
              fontSize: '0.9rem',
              fontWeight: 800,
              color: '#f8fafc',
              borderLeft: '4px solid #f43f5e',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            {unit.name} Favorite Gifts & Bond Items
          </div>
          <div
            style={{
              padding: '14px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(135px, 1fr))',
              gap: '10px',
            }}
          >
            {sd.gifts.map((g, idx) => (
              <div
                key={idx}
                style={{
                  background: '#131822',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '6px',
                }}
              >
                {g.iconUrl && (
                  <img
                    src={g.iconUrl}
                    alt={g.name}
                    width={56}
                    height={56}
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '8px',
                      objectFit: 'contain',
                      background: '#0b0e14',
                      padding: '4px',
                    }}
                  />
                )}
                <span style={{ fontSize: '0.73rem', fontWeight: 700, color: '#e2e8f0', lineHeight: 1.3 }}>
                  {g.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 9. Character Profile, Voice Actor (CV) & Lore Biography */}
      {sd?.profile && (
        <section
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
              fontSize: '0.9rem',
              fontWeight: 800,
              color: '#f8fafc',
              borderLeft: '4px solid #38bdf8',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            {unit.name} Profile, Voice Actor (CV) & Lore
          </div>
          <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '8px' }}>
              {[
                { label: 'Voice Actor (CV)', val: sd.profile.cv || 'TBA' },
                { label: 'Affiliation', val: sd.profile.affiliation || 'Voyager Corps' },
                { label: 'Birthday', val: sd.profile.birthday || 'Unknown' },
                { label: 'Height', val: sd.profile.height || 'Unknown' },
                { label: 'Origin', val: sd.profile.origin || 'NOA' },
                { label: 'How to Obtain', val: sd.profile.obtain || 'Gacha' },
              ].map((p) => (
                <div
                  key={p.label}
                  style={{
                    background: '#131822',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    padding: '8px 10px',
                  }}
                >
                  <div style={{ fontSize: '0.66rem', color: 'var(--text-muted)', fontWeight: 700 }}>{p.label}</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#f8fafc', marginTop: '2px' }}>{p.val}</div>
                </div>
              ))}
            </div>
            {sd.profile.bio && (
              <div
                style={{
                  background: '#131822',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  padding: '12px',
                  fontSize: '0.83rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {sd.profile.bio}
              </div>
            )}
          </div>
        </section>
      )}
    </WikiShell>
  );
}
