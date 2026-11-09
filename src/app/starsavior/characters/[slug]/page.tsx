import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getStarSaviorWikiData } from '../../../../application/wiki.service';
import { WikiShell, getTierColor } from '../../../../components/WikiShell';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const [{ slug }, dataset] = await Promise.all([params, getStarSaviorWikiData()]);
  const char = dataset.characters.find((c) => c.slug === slug);
  if (!char) return { title: 'Character Not Found' };

  return {
    title: `${char.name} Build, Skills & Best Arcana — Star Savior`,
    description: `${char.name} (${char.rarity} ${char.element} ${char.role}) evaluation in Star Savior: Tier ${char.overallTier} (${char.score.toFixed(1)}/10), skills, max stats, and best SSR Arcana.`,
    alternates: {
      canonical: `/starsavior/characters/${char.slug}`,
    },
  };
}

export default async function CharacterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [{ slug }, dataset] = await Promise.all([params, getStarSaviorWikiData()]);
  const { game, characters, arcana } = dataset;

  const char = characters.find((c) => c.slug === slug);
  if (!char) notFound();

  const elOpt = game.elementsConfig.find((e) => e.key === char.element);
  const roleOpt = game.rolesConfig.find((r) => r.key === char.role);
  const overallStyle = getTierColor(char.overallTier);
  const rerollStyle = getTierColor(char.rerollTier);

  const recommendedArcana = char.bestArcanaSlugs
    .map((s) => arcana.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const sameElementPeers = characters
    .filter((c) => c.element === char.element && c.slug !== char.slug)
    .slice(0, 6);

  return (
    <WikiShell dataset={dataset} activeNav="characters" breadcrumbTitle={char.name}>
      {/* 01. CHARACTER PROFILE CARD */}
      <section className="wiki-card" style={{ padding: '18px' }}>
        <div style={{ display: 'flex', gap: '18px', alignItems: 'center', flexWrap: 'wrap' }}>
          <img
            src={char.imageUrl}
            alt={char.name}
            width={112}
            height={112}
            style={{
              width: '112px',
              height: '112px',
              borderRadius: '10px',
              objectFit: 'cover',
              border: `3px solid ${elOpt?.colorHex ?? '#38bdf8'}`,
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1, minWidth: '240px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div>
              <h1 style={{ fontSize: '21px', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.2 }}>
                [Star Savior] {char.name} Evaluation, Skills &amp; Best Arcana
              </h1>
              <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', fontWeight: 700, marginTop: '3px' }}>
                {char.title}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
              {elOpt && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: 'var(--bg-page)',
                    border: `1.5px solid ${elOpt.colorHex}`,
                    fontSize: '12px',
                    fontWeight: 800,
                  }}
                >
                  <img
                    src={elOpt.iconUrl}
                    alt={elOpt.label}
                    width={18}
                    height={18}
                    style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                  />
                  <span>Attribute: {elOpt.label}</span>
                </span>
              )}
              {roleOpt && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: 'var(--bg-page)',
                    border: '1px solid var(--border-main)',
                    fontSize: '12px',
                    fontWeight: 800,
                    color: 'var(--text-secondary)',
                  }}
                >
                  <img
                    src={roleOpt.iconUrl}
                    alt={roleOpt.label}
                    width={18}
                    height={18}
                    style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                  />
                  <span>Class: {roleOpt.label}</span>
                </span>
              )}
              <span
                className="mono"
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 900,
                  background: overallStyle.bg,
                  color: overallStyle.color,
                  border: `1px solid ${overallStyle.border}`,
                }}
              >
                Overall: Tier {char.overallTier} ({char.score.toFixed(1)}/10)
              </span>
              <span
                className="mono"
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 900,
                  background: rerollStyle.bg,
                  color: rerollStyle.color,
                  border: `1px solid ${rerollStyle.border}`,
                }}
              >
                Reroll: Tier {char.rerollTier}
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: '14px',
            padding: '12px 14px',
            borderRadius: '7px',
            background: 'var(--bg-page)',
            border: '1px solid var(--border-main)',
            borderLeft: `4px solid ${elOpt?.colorHex ?? 'var(--accent-primary)'}`,
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: 1.55,
          }}
        >
          <strong style={{ color: 'var(--text-main)' }}>Performance Verdict:</strong> {char.summary}
          <div className="mono" style={{ marginTop: '6px', fontSize: '11.5px', color: 'var(--accent-primary)', fontWeight: 800 }}>
            Recommended Dupes / Limit Break: {char.recommendedDupes}
          </div>
        </div>
      </section>

      {/* 02. MAX-LEVEL BASE STATS */}
      <section className="wiki-card">
        <div className="wiki-section-header">
          <span>MAX-LEVEL BASE STATS</span>
        </div>
        <div className="stats-grid-5 mono" style={{ padding: '14px', textAlign: 'center' }}>
          {[
            { label: 'HP', val: char.baseStats.hp },
            { label: 'ATK', val: char.baseStats.atk },
            { label: 'DEF', val: char.baseStats.def },
            { label: 'SPD', val: char.baseStats.spd },
            { label: 'CRIT %', val: `${char.baseStats.crit}%` },
          ].map((st) => (
            <div
              key={st.label}
              style={{
                background: 'var(--bg-page)',
                border: '1px solid var(--border-main)',
                borderRadius: '6px',
                padding: '10px 8px',
              }}
            >
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 800 }}>
                {st.label}
              </div>
              <div style={{ fontSize: '16px', fontWeight: 900, color: 'var(--text-main)', marginTop: '2px' }}>
                {st.val}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03. SKILLS & ULTIMATE BREAKDOWN */}
      <section className="wiki-card">
        <div className="wiki-section-header">
          <span>SKILLS &amp; STELLAR BURST MULTIPLIERS</span>
        </div>
        <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {char.skills.map((sk) => (
            <div
              key={sk.name}
              style={{
                background: 'var(--bg-page)',
                border: '1px solid var(--border-main)',
                borderRadius: '7px',
                padding: '12px 14px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <div style={{ fontSize: '14px', fontWeight: 900, color: 'var(--text-main)' }}>
                  [{sk.type}] {sk.name}
                </div>
                <span
                  className="mono"
                  style={{
                    fontSize: '11px',
                    fontWeight: 900,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: 'var(--accent-bg)',
                    color: 'var(--accent-primary)',
                    border: '1px solid var(--accent-border)',
                  }}
                >
                  Cost: {sk.spOrEnergyCost}
                </span>
              </div>
              <div className="mono" style={{ fontSize: '12px', fontWeight: 800, color: 'var(--tier-s)', marginTop: '4px' }}>
                {sk.multiplierSummary}
              </div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '5px', lineHeight: 1.5 }}>
                {sk.exactDescription}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 04. RECOMMENDED SSR ARCANA */}
      {recommendedArcana.length > 0 && (
        <section className="wiki-card">
          <div className="wiki-section-header">
            <span>BEST RECOMMENDED SSR ARCANA FOR {char.name.toUpperCase()}</span>
            <Link href="/starsavior/arcana" style={{ fontSize: '12px', color: 'var(--accent-primary)', fontWeight: 800 }}>
              All SSR Arcana &rarr;
            </Link>
          </div>
          <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {recommendedArcana.map((arc) => {
              const tColor = getTierColor(arc.tier);
              return (
                <div
                  key={arc.slug}
                  style={{
                    background: 'var(--bg-page)',
                    border: '1px solid var(--border-main)',
                    borderRadius: '7px',
                    padding: '12px',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={arc.imageUrl}
                    alt={arc.name}
                    width={64}
                    height={64}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '7px',
                      objectFit: 'cover',
                      border: `2px solid ${tColor.color}`,
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 900, color: 'var(--text-main)' }}>
                      {arc.name}{' '}
                      <span className="mono" style={{ fontSize: '11.5px', color: tColor.color }}>
                        (Tier {arc.tier})
                      </span>
                    </div>
                    <div style={{ fontSize: '11.5px', color: 'var(--accent-primary)', fontWeight: 700 }}>
                      {arc.subType}
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '3px' }}>
                      {arc.effectSummary}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 05. SYNERGY TEAMMATES (SAME ATTRIBUTE) */}
      <section className="wiki-card">
        <div className="wiki-section-header">
          <span>BEST {char.element.toUpperCase()}-ATTRIBUTE SYNERGY TEAMMATES</span>
        </div>
        <div style={{ padding: '14px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {sameElementPeers.map((peer) => (
            <Link
              key={peer.slug}
              href={`/starsavior/characters/${peer.slug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '9px',
                padding: '7px 11px',
                borderRadius: '7px',
                background: 'var(--bg-page)',
                border: '1px solid var(--border-main)',
              }}
            >
              <img
                src={peer.imageUrl}
                alt={peer.name}
                width={40}
                height={40}
                style={{ width: '40px', height: '40px', borderRadius: '6px', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontSize: '12.5px', fontWeight: 800, color: 'var(--text-main)' }}>
                  {peer.name}
                </div>
                <div className="mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  {peer.role} • Tier {peer.overallTier}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </WikiShell>
  );
}
