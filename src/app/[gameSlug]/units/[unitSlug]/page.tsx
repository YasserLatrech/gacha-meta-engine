import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getGameHubData } from '../../../../application/services/meta-query.service';
import { SiteHeader } from '../../../../components/SiteHeader';
import { SiteFooter } from '../../../../components/SiteFooter';
import { AdSlot } from '../../../../components/AdSlot';
import { UnitAccountActionsClient } from '../../../../components/UnitAccountActionsClient';
import { UnitDeepBuildSection } from '../../../../components/UnitDeepBuildSection';
import {
  getGameStatLabels,
  getServerSyncContext,
  computeMultiSourceConsensus,
} from '../../../../domain/game-mechanics';
import {
  getGameAppIconUrl,
  getElementIconUrl,
  getAttackTypeIconUrl,
  getStatConceptIconUrl,
  getSkillConceptIconUrl,
  getSectionEmblemUrl,
} from '../../../../domain/constants/game-visuals';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ gameSlug: string; unitSlug: string }>;
}): Promise<Metadata> {
  const { gameSlug, unitSlug } = await params;
  const hub = await getGameHubData(gameSlug);
  const unit = hub?.units.find((u) => u.slug === unitSlug);
  if (!hub || !unit) return { title: 'Unit Not Found' };

  return {
    title: `${unit.nameEn} ${unit.styleOrTitle} — Build, Consensus Tier & Multipliers (${hub.name})`,
    description: `Complete ${unit.nameEn} (${unit.styleOrTitle}) multi-source tier consensus, skill multipliers, SP/Energy cost, recommended ${unit.recommendedDupes}, best weapons/cards, and ${unit.longevityMonths}-month meta longevity in ${hub.name}.`,
  };
}

export default async function UnitDetailPage({
  params,
}: {
  params: Promise<{ gameSlug: string; unitSlug: string }>;
}) {
  const { gameSlug, unitSlug } = await params;
  const hub = await getGameHubData(gameSlug);
  if (!hub) notFound();

  const unit = hub.units.find((u) => u.slug === unitSlug);
  if (!unit) notFound();

  const syncCtx = getServerSyncContext(hub.slug, hub.foresightGapMonths, hub.globalPatchVersion);
  const consensus = computeMultiSourceConsensus(hub.slug, unit);

  const recommendedGears = hub.equipments.filter((eq) =>
    eq.bestHolderSlugs.includes(unit.slug)
  );
  const distinctSlotGears: typeof recommendedGears = [];
  const seenSubTypes = new Set<string>();
  for (const eq of recommendedGears) {
    if (!seenSubTypes.has(eq.subType)) {
      seenSubTypes.add(eq.subType);
      distinctSlotGears.push(eq);
    }
  }
  for (const eq of recommendedGears) {
    if (distinctSlotGears.length >= 4) break;
    if (!distinctSlotGears.some((d) => d.slug === eq.slug)) {
      distinctSlotGears.push(eq);
    }
  }
  const displayGears =
    distinctSlotGears.length > 0 ? distinctSlotGears.slice(0, 4) : hub.equipments.slice(0, 3);

  const featuredBanners = hub.banners.filter((bn) =>
    bn.featuredUnitSlugs.includes(unit.slug)
  );
  const displayBanners =
    featuredBanners.length > 0 ? featuredBanners : hub.banners.slice(0, 2);

  const relevantBosses = hub.bosses.filter((b) =>
    b.recommendedUnitSlugs.includes(unit.slug)
  );
  const displayBosses = relevantBosses.length > 0 ? relevantBosses : hub.bosses;

  const gameAppIcon = getGameAppIconUrl(hub.slug);
  const elemIcon = getElementIconUrl(hub.slug, unit.element, hub.units);
  const atkIcon = getAttackTypeIconUrl(hub.slug, unit.attackType, elemIcon);
  const topEquipThumb = getSectionEmblemUrl('weapons', hub.slug);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Is ${unit.nameEn} (${unit.styleOrTitle}) worth pulling in ${hub.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${unit.tiers.overallAsian.summaryVerdict} ${consensus.whySourcesDifferOrAgree} Recommended investment: ${unit.recommendedDupes}.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader
        activeGameSlug={hub.slug}
        activeGameName={hub.name}
        breadcrumbLeaf={unit.nameEn}
      />

      <main className="portal-container" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <AdSlot
          slotId={`unit-${unit.slug}-top`}
          label="UNIT BUILD PAGE TOP AD"
          dimensions="728×90"
          minHeightPx={68}
          description="Fixed-dimension unit profile header banner (0.00 CLS)"
        />

        <div className="wiki-layout-grid">
          {/* LEFT QUICK RETURN & ROSTER LIST */}
          <aside
            className="wiki-left-sidebar"
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-main)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                background: 'var(--bg-subnav)',
                color: 'var(--text-main)',
                fontSize: '12px',
                fontWeight: 800,
                padding: '10px 12px',
                borderLeft: '4px solid var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <img
                src={gameAppIcon}
                alt={hub.shortName}
                width={22}
                height={22}
                style={{ width: '22px', height: '22px', borderRadius: '4px', objectFit: 'cover' }}
              />
              <span>RETURN TO {hub.shortName} WIKI</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Link
                href={`/${hub.slug}?tab=tier-list`}
                style={{
                  padding: '9px 12px',
                  fontSize: '13px',
                  fontWeight: 800,
                  borderBottom: '1px solid var(--border-subtle)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                }}
              >
                <img
                  src={getSectionEmblemUrl('tier-list', hub.slug)}
                  alt="Strongest Tier List"
                  width={28}
                  height={28}
                  style={{ width: '28px', height: '28px', borderRadius: '5px', objectFit: 'cover' }}
                />
                <span>&larr; Strongest Tier List</span>
              </Link>
              <Link
                href={`/${hub.slug}?tab=weapons`}
                style={{
                  padding: '9px 12px',
                  fontSize: '13px',
                  fontWeight: 700,
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                }}
              >
                <img
                  src={topEquipThumb}
                  alt="Weapons and Support Cards"
                  width={28}
                  height={28}
                  style={{ width: '28px', height: '28px', borderRadius: '5px', objectFit: 'cover' }}
                />
                <span>{hub.slug === 'uma-musume' ? 'SSR Support Card Tier List' : 'Weapons & Support Cards'}</span>
              </Link>
              <Link
                href={`/${hub.slug}?tab=bosses`}
                style={{
                  padding: '9px 12px',
                  fontSize: '13px',
                  fontWeight: 700,
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                }}
              >
                <img
                  src={getSectionEmblemUrl('bosses', hub.slug)}
                  alt="Boss and Raid Guides"
                  width={28}
                  height={28}
                  style={{ width: '28px', height: '28px', borderRadius: '5px', objectFit: 'cover' }}
                />
                <span>{hub.slug === 'uma-musume' ? 'Champions Meet & LoH Guides' : 'Boss & Raid Guides'}</span>
              </Link>
              <Link
                href={`/${hub.slug}?tab=banners`}
                style={{
                  padding: '9px 12px',
                  fontSize: '13px',
                  fontWeight: 700,
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                }}
              >
                <img
                  src={getSectionEmblemUrl('banners', hub.slug)}
                  alt="Upcoming Banners"
                  width={28}
                  height={28}
                  style={{ width: '28px', height: '28px', borderRadius: '5px', objectFit: 'cover' }}
                />
                <span>Banners &amp; Pull Calc</span>
              </Link>
              <Link
                href={`/${hub.slug}?tab=compare`}
                style={{
                  padding: '9px 12px',
                  fontSize: '13px',
                  fontWeight: 700,
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                }}
              >
                <img
                  src={getSectionEmblemUrl('compare', hub.slug)}
                  alt="Stat Comparison Tool"
                  width={28}
                  height={28}
                  style={{ width: '28px', height: '28px', borderRadius: '5px', objectFit: 'cover' }}
                />
                <span>Stat Comparison Tool</span>
              </Link>
            </div>

            <div
              style={{
                background: 'var(--bg-subnav)',
                color: 'var(--text-main)',
                fontSize: '11.5px',
                fontWeight: 800,
                padding: '9px 12px',
                borderLeft: '4px solid var(--accent-primary)',
              }}
            >
              ALL {hub.shortName} CHARACTERS ({hub.units.length})
            </div>
            <div className="wiki-sidebar-scroll" style={{ display: 'flex', flexDirection: 'column', maxHeight: '580px', overflowY: 'auto' }}>
              {hub.units.map((u) => (
                <Link
                  key={u.slug}
                  href={`/${hub.slug}/units/${u.slug}`}
                  style={{
                    padding: '7px 10px',
                    fontSize: '12.5px',
                    fontWeight: u.slug === unit.slug ? 800 : 600,
                    background: u.slug === unit.slug ? 'var(--accent-bg)' : 'transparent',
                    color: u.slug === unit.slug ? 'var(--text-main)' : 'var(--text-secondary)',
                    borderBottom: '1px solid var(--border-subtle)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                    <img
                      src={u.imageUrl}
                      alt={u.nameEn}
                      width={32}
                      height={32}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '5px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        border: '1px solid var(--border-main)',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {u.nameEn}
                    </span>
                  </span>
                  <span className="mono" style={{ flexShrink: 0, fontWeight: 800, color: 'var(--amber-primary)' }}>
                    {u.tiers.overallAsian.tierRank}
                  </span>
                </Link>
              ))}
            </div>
          </aside>

          {/* CENTER CHARACTER PROFILE & BUILD GUIDE */}
          <div className="wiki-center-article" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* HERO UNIT PROFILE CARD */}
            <section
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-main)',
                borderRadius: '8px',
                padding: '18px',
                display: 'flex',
                gap: '18px',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <img
                src={unit.imageUrl}
                alt={unit.nameEn}
                width={120}
                height={120}
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  border: '2.5px solid var(--accent-primary)',
                }}
              />
              <div style={{ flex: 1, minWidth: '240px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '10px',
                  }}
                >
                  <div>
                    <h1 style={{ fontSize: '21px', fontWeight: 800, color: 'var(--text-main)' }}>
                      {unit.nameEn} — {unit.styleOrTitle}
                    </h1>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 700, marginTop: '3px' }}>
                      Character: {unit.nameOriginal} • Rarity: {unit.rarity} • {syncCtx.shortBadgeLabel}
                    </div>
                  </div>
                  <span
                    className="mono"
                    style={{
                      background: 'var(--accent-bg)',
                      color: 'var(--accent-primary)',
                      border: '1.5px solid var(--accent-border)',
                      padding: '6px 14px',
                      borderRadius: '6px',
                      fontSize: '15px',
                      fontWeight: 800,
                    }}
                  >
                    Tier {unit.tiers.overallAsian.tierRank} • {unit.tiers.overallAsian.numericScore.toFixed(1)}/10
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                    marginTop: '12px',
                    fontSize: '12.5px',
                    fontWeight: 800,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-strong)',
                      color: 'var(--text-main)',
                      padding: '5px 11px',
                      borderRadius: '5px',
                    }}
                  >
                    <img
                      src={atkIcon}
                      alt={unit.role}
                      width={20}
                      height={20}
                      style={{ width: '20px', height: '20px', borderRadius: '4px', objectFit: 'cover' }}
                    />
                    Role: {unit.role}
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-main)',
                      padding: '5px 11px',
                      borderRadius: '5px',
                    }}
                  >
                    <img
                      src={elemIcon}
                      alt={unit.element}
                      width={20}
                      height={20}
                      style={{ width: '20px', height: '20px', borderRadius: '4px', objectFit: 'cover' }}
                    />
                    {getGameStatLabels(hub.slug).elementTypeBadgeLabel}: {unit.element} ({unit.attackType})
                  </span>
                  <span
                    style={{
                      background: 'var(--amber-bg)',
                      color: 'var(--amber-primary)',
                      border: '1px solid var(--amber-border)',
                      padding: '5px 11px',
                      borderRadius: '5px',
                      display: 'inline-flex',
                      alignItems: 'center',
                    }}
                  >
                    Target Investment: {unit.recommendedDupes}
                  </span>
                  <span
                    style={{
                      background: 'var(--green-bg)',
                      color: 'var(--green-primary)',
                      border: '1px solid var(--green-border)',
                      padding: '5px 11px',
                      borderRadius: '5px',
                      display: 'inline-flex',
                      alignItems: 'center',
                    }}
                  >
                    Meta Longevity: {unit.longevityMonths} Months
                  </span>
                </div>
              </div>
            </section>

            {/* MULTI-SOURCE CONSENSUS & DISAGREEMENT BREAKDOWN PANEL */}
            <section
              style={{
                background: 'var(--bg-surface)',
                border:
                  consensus.consensusStatus === 'SPLIT_VERDICT'
                    ? '1.5px solid var(--amber-border)'
                    : '1.5px solid var(--green-border)',
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '10px',
                }}
              >
                <h2
                  style={{
                    fontSize: '15px',
                    fontWeight: 800,
                    borderLeft: '4px solid var(--amber-primary)',
                    paddingLeft: '10px',
                  }}
                >
                  MULTI-SOURCE META CONSENSUS &amp; ENDGAME USAGE VERDICT
                </h2>
                <span
                  className="mono"
                  style={{
                    padding: '4px 10px',
                    borderRadius: '5px',
                    fontSize: '12px',
                    fontWeight: 800,
                    background:
                      consensus.consensusStatus === 'SPLIT_VERDICT'
                        ? 'var(--amber-bg)'
                        : 'var(--green-bg)',
                    color:
                      consensus.consensusStatus === 'SPLIT_VERDICT'
                        ? 'var(--amber-primary)'
                        : 'var(--green-primary)',
                    border:
                      consensus.consensusStatus === 'SPLIT_VERDICT'
                        ? '1px solid var(--amber-border)'
                        : '1px solid var(--green-border)',
                  }}
                >
                  {consensus.consensusBadgeLabel}
                </span>
              </div>

              <div className="consensus-votes-grid">
                {[
                  consensus.telemetryUsageVote,
                  consensus.primaryWikiVote,
                  consensus.secondaryWikiVote,
                ].map((vote) => (
                  <div
                    key={vote.sourceName}
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-main)',
                      borderRadius: '6px',
                      padding: '11px 13px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span className="mono" style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-muted)' }}>
                        {vote.weightPct}% WEIGHT
                      </span>
                      <span
                        className="mono"
                        style={{
                          fontSize: '12.5px',
                          fontWeight: 800,
                          color: vote.tier === 'SSS' ? 'var(--accent-primary)' : 'var(--amber-primary)',
                        }}
                      >
                        Tier {vote.tier} ({vote.score}/10)
                      </span>
                    </div>
                    <div style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--text-main)' }}>
                      {vote.sourceName}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      {vote.focusArea}
                    </div>
                    <div className="mono" style={{ fontSize: '11.5px', color: 'var(--blue-primary)', marginTop: '2px' }}>
                      {vote.evaluationBasis}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: 'var(--bg-subtle)',
                  borderLeft:
                    consensus.consensusStatus === 'SPLIT_VERDICT'
                      ? '3.5px solid var(--amber-primary)'
                      : '3.5px solid var(--green-primary)',
                  padding: '10px 12px',
                  borderRadius: '5px',
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                }}
              >
                <strong style={{ color: 'var(--text-main)' }}>Consensus Analysis: </strong>
                {consensus.whySourcesDifferOrAgree}
              </div>
            </section>

            {/* VERIFIED BASE STATS & PERFORMANCE CEILINGS WITH REAL STAT ICONS */}
            <section
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-main)',
                borderRadius: '8px',
                padding: '16px',
              }}
            >
              <h2
                style={{
                  fontSize: '15px',
                  fontWeight: 800,
                  borderLeft: '4px solid var(--accent-primary)',
                  paddingLeft: '10px',
                  marginBottom: '12px',
                }}
              >
                MAX-LEVEL STATS &amp; PERFORMANCE METRICS
              </h2>

              <div className="mono stats-5-grid">
                {(() => {
                  const statLabels = getGameStatLabels(hub.slug);
                  return [
                    { label: statLabels.hpOrStamina.label, desc: statLabels.hpOrStamina.desc, val: unit.baseStats.hpOrStamina, key: 'stamina' },
                    { label: statLabels.dpOrSpeed.label, desc: statLabels.dpOrSpeed.desc, val: unit.baseStats.dpOrSpeed, key: 'speed' },
                    { label: statLabels.atkOrPower.label, desc: statLabels.atkOrPower.desc, val: unit.baseStats.atkOrPower, key: 'power' },
                    { label: statLabels.defOrGuts.label, desc: statLabels.defOrGuts.desc, val: unit.baseStats.defOrGuts, key: 'guts' },
                    { label: statLabels.critOrWit.label, desc: statLabels.critOrWit.desc, val: unit.baseStats.critOrWit, key: 'wisdom' },
                  ];
                })().map((s) => (
                  <div
                    key={s.label}
                    title={s.desc}
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-main)',
                      borderRadius: '6px',
                      padding: '11px 8px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '11.5px',
                        color: 'var(--text-secondary)',
                        fontWeight: 800,
                      }}
                    >
                      <img
                        src={getStatConceptIconUrl(hub.slug, s.key, topEquipThumb)}
                        alt={s.label}
                        width={22}
                        height={22}
                        style={{ width: '22px', height: '22px', borderRadius: '4px', objectFit: 'cover' }}
                      />
                      <span>{s.label}</span>
                    </div>
                    <div style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)' }}>
                      {s.val.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* GAME-SPECIFIC DEEP BUILD GUIDE (SKILL TREE / APTITUDE + EVENTS / BUFF MATRIX / BURST ROTATION) */}
            <UnitDeepBuildSection gameSlug={hub.slug} unit={unit} />

            {/* SKILLS, MULTIPLIERS & SP/ENERGY COSTS WITH REAL SKILL ICONS */}
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
                {hub.slug === 'uma-musume' ? 'UNIQUE SKILL, EVOLVED PINK SKILLS & RACE MECHANICS' : 'SKILL MULTIPLIERS & COMBAT MECHANICS'}
              </h2>

              {unit.skills.map((sk, skIdx) => (
                <div
                  key={sk.name}
                  style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-main)',
                    borderRadius: '6px',
                    padding: '14px',
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                  }}
                >
                  <img
                    src={getSkillConceptIconUrl(
                      hub.slug,
                      sk.type,
                      displayGears[skIdx % displayGears.length]?.imageUrl || unit.imageUrl
                    )}
                    alt={sk.name}
                    width={52}
                    height={52}
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '7px',
                      objectFit: 'cover',
                      border: '1.5px solid var(--border-strong)',
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1, minWidth: '220px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px', fontWeight: 800, fontSize: '14.5px' }}>
                      <span>
                        [{sk.type}] {sk.name}{hub.slug === 'uma-musume' ? '' : ` (${sk.hitCount}-Hit)`}
                      </span>
                      <span className="mono" style={{ color: 'var(--accent-primary)' }}>
                        Cost: {sk.spOrEnergyCost}
                      </span>
                    </div>
                    <div
                      className="mono"
                      style={{
                        fontSize: '13px',
                        fontWeight: 800,
                        color: 'var(--amber-primary)',
                        marginTop: '5px',
                      }}
                    >
                      {sk.multiplierSummary}
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '5px', lineHeight: 1.55 }}>
                      {sk.exactDescription}
                    </p>
                  </div>
                </div>
              ))}
            </section>

            {/* LIMIT BREAK / DUPE PASSIVES */}
            <section
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-main)',
                borderRadius: '8px',
                padding: '16px',
                overflowX: 'auto',
              }}
            >
              <h2
                style={{
                  fontSize: '15px',
                  fontWeight: 800,
                  borderLeft: '4px solid var(--border-strong)',
                  paddingLeft: '10px',
                  marginBottom: '12px',
                }}
              >
                {hub.slug === 'uma-musume' ? 'NATIVE STAT GROWTH BONUSES & TRACK APTITUDES' : 'LIMIT BREAK / AWAKENING PASSIVES & DUPE BREAKPOINTS'}
              </h2>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  border: '1px solid var(--border-main)',
                  fontSize: '13px',
                  minWidth: '520px',
                }}
              >
                <thead>
                  <tr style={{ background: 'var(--bg-subnav)', color: 'var(--text-main)' }}>
                    <th style={{ padding: '9px 12px', textAlign: 'left', width: '135px' }}>RANK</th>
                    <th style={{ padding: '9px 12px', textAlign: 'left', width: '220px' }}>PASSIVE NAME</th>
                    <th style={{ padding: '9px 12px', textAlign: 'left' }}>EFFECT</th>
                  </tr>
                </thead>
                <tbody>
                  {unit.passives.map((p, pIdx) => (
                    <tr key={p.unlockRank} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td className="mono" style={{ padding: '10px 12px', fontWeight: 800, color: 'var(--amber-primary)' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                          <img
                            src={displayGears[pIdx % displayGears.length]?.imageUrl || elemIcon}
                            alt={p.unlockRank}
                            width={26}
                            height={26}
                            style={{ width: '26px', height: '26px', borderRadius: '5px', objectFit: 'cover' }}
                          />
                          <span>{p.unlockRank}</span>
                        </span>
                      </td>
                      <td style={{ padding: '10px 12px', fontWeight: 800 }}>{p.name}</td>
                      <td style={{ padding: '10px 12px', color: 'var(--text-secondary)' }}>{p.effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* SYNERGY TEAMMATES, RECOMMENDED WEAPONS/CARDS & BOSS MATCHUPS WITH REAL IMAGES */}
            <section
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-main)',
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
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
                {hub.slug === 'uma-musume' ? 'BEST INHERITANCE PARENTS, SSR SUPPORT CARD DECK & CHAMPIONS MEET COURSES' : 'BEST SYNERGY TEAMMATES, WEAPONS / CARDS & RAID MATCHUPS'}
              </h2>

              {/* SYNERGY TEAMMATES */}
              <div>
                <div style={{ fontSize: '13.5px', fontWeight: 800, marginBottom: '8px' }}>
                  {hub.slug === 'uma-musume' ? 'Optimal Inheritance Parents & Team Trials Partners:' : 'Optimal Synergy Teammates:'}
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {unit.synergyUnitSlugs.map((synSlug) => {
                    const partner = hub.units.find((u) => u.slug === synSlug);
                    if (!partner) return null;
                    return (
                      <Link
                        key={synSlug}
                        href={`/${hub.slug}/units/${synSlug}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '7px 14px 7px 7px',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-main)',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: 800,
                        }}
                      >
                        <img
                          src={partner.imageUrl}
                          alt={partner.nameEn}
                          width={50}
                          height={50}
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '6px',
                            objectFit: 'cover',
                            objectPosition: 'top',
                            border: '1.5px solid var(--border-strong)',
                          }}
                        />
                        <div>
                          <div>{partner.nameEn}</div>
                          <div style={{ fontSize: '11.5px', color: 'var(--accent-primary)' }}>
                            {partner.role} • Tier {partner.tiers.overallAsian.tierRank}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* BEST-IN-SLOT WEAPONS / SUPPORT CARDS / ARCANAS WITH REAL IMAGES */}
              <div>
                <div style={{ fontSize: '13.5px', fontWeight: 800, marginBottom: '8px' }}>
                  {hub.slug === 'uma-musume' ? 'Recommended SSR Support Card Deck:' : 'Best-in-Slot Weapons / Support Cards / Arcanas:'}
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {displayGears.map((g) => (
                    <Link
                      key={g.slug}
                      href={`/${hub.slug}?tab=weapons`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '7px 14px 7px 7px',
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-main)',
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: 800,
                      }}
                    >
                      <img
                        src={g.imageUrl}
                        alt={g.nameEn}
                        width={hub.slug === 'uma-musume' ? 48 : 54}
                        height={hub.slug === 'uma-musume' ? 64 : 54}
                        style={{
                          width: hub.slug === 'uma-musume' ? '48px' : '54px',
                          height: hub.slug === 'uma-musume' ? '64px' : '54px',
                          borderRadius: '6px',
                          objectFit: hub.slug === 'uma-musume' ? 'contain' : 'cover',
                          background: '#0B0E14',
                          border: '1.5px solid var(--border-strong)',
                        }}
                      />
                      <div>
                        <div>{g.nameEn}</div>
                        <div style={{ fontSize: '11.5px', color: 'var(--amber-primary)' }}>
                          {g.subType} • Tier {g.tierRank}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* TOP RAID BOSS MATCHUPS WITH REAL WIDE BOSS IMAGES */}
              <div>
                <div style={{ fontSize: '13.5px', fontWeight: 800, marginBottom: '8px' }}>
                  {hub.slug === 'uma-musume' ? 'Target Champions Meet & League of Heroes Courses:' : 'Top Raid Boss Matchups:'}
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {displayBosses.map((b) => (
                    <Link
                      key={b.slug}
                      href={`/${hub.slug}?tab=bosses`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '11px',
                        padding: '7px 14px 7px 7px',
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-main)',
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: 800,
                      }}
                    >
                      <img
                        src={b.imageUrl}
                        alt={b.nameEn}
                        width={hub.slug === 'uma-musume' ? 148 : 116}
                        height={hub.slug === 'uma-musume' ? 56 : 64}
                        style={{
                          width: hub.slug === 'uma-musume' ? '148px' : '116px',
                          height: hub.slug === 'uma-musume' ? '56px' : '64px',
                          borderRadius: '6px',
                          objectFit:
                            hub.slug === 'uma-musume' || b.imageUrl.includes('/IMG_2')
                              ? 'contain'
                              : 'cover',
                          padding: b.imageUrl.includes('/IMG_2') ? '4px' : '0',
                          background: 'radial-gradient(circle at center, #1E293B 0%, #0B0E14 100%)',
                          border: '1.5px solid var(--border-strong)',
                        }}
                      />
                      <div>
                        <div>{b.nameEn}</div>
                        <div style={{ fontSize: '11.5px', color: 'var(--accent-primary)' }}>
                          {b.modeName} • {b.hpStat}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT RAIL PICKUP BANNERS + STICKY ACCOUNT ACTIONS */}
          <aside className="wiki-right-rail" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {displayBanners.length > 0 && (
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-main)',
                  borderRadius: '8px',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 800,
                    borderBottom: '2px solid var(--border-main)',
                    paddingBottom: '7px',
                  }}
                >
                  FEATURED PICKUP BANNERS
                </div>
                {displayBanners.map((bn) => (
                  <Link
                    key={bn.slug}
                    href={`/${hub.slug}?tab=banners`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '7px',
                      fontSize: '12.5px',
                      paddingBottom: '12px',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: hub.slug === 'uma-musume' ? '68px' : '116px',
                        borderRadius: '6px',
                        overflow: 'hidden',
                        border: '1.5px solid var(--border-strong)',
                        background: '#0B0E14',
                      }}
                    >
                      <img
                        src={bn.imageUrl}
                        alt={bn.bannerTitle}
                        width={260}
                        height={hub.slug === 'uma-musume' ? 68 : 116}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: hub.slug === 'uma-musume' ? 'contain' : 'cover',
                        }}
                      />
                      <span
                        className="mono"
                        style={{
                          position: 'absolute',
                          top: '6px',
                          right: '6px',
                          fontSize: '10.5px',
                          fontWeight: 800,
                          padding: '3px 8px',
                          borderRadius: '4px',
                          background: 'var(--accent-primary)',
                          color: '#FFFFFF',
                        }}
                      >
                        {bn.pullVerdict}
                      </span>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '13px' }}>{bn.bannerTitle}</div>
                    <div className="mono" style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                      Schedule: {bn.estGlobalStartDate} ({bn.pityCurrencyCost.toLocaleString()} {hub.currencyName})
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <UnitAccountActionsClient
              gameSlug={hub.slug}
              gameShortName={hub.shortName}
              unit={unit}
            />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
