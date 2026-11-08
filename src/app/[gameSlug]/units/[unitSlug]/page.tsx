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
import { getGameStatLabels } from '../../../../domain/game-mechanics';
import {
  getGameAppIconUrl,
  getElementIconUrl,
  getAttackTypeIconUrl,
  getStatConceptIconUrl,
  getSkillConceptIconUrl,
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
    title: `${unit.nameEn} ${unit.styleOrTitle} — Build, Multipliers & Tier Evaluation (${hub.name})`,
    description: `Complete ${unit.nameEn} (${unit.styleOrTitle}) skill multipliers, SP/Energy cost, recommended ${unit.recommendedDupes}, best weapons/cards, and ${unit.longevityMonths}-month meta longevity in ${hub.name}.`,
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
  const topEquipThumb = hub.equipments[0]?.imageUrl || gameAppIcon;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Is ${unit.nameEn} (${unit.styleOrTitle}) worth pulling in ${hub.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${unit.tiers.overallAsian.summaryVerdict} ${unit.tiers.overallAsian.longevityNote} Recommended investment: ${unit.recommendedDupes}.`,
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

      <main className="portal-container" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
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
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                background: 'var(--bg-subnav)',
                color: '#FFF',
                fontSize: '11px',
                fontWeight: 900,
                padding: '8px 10px',
                borderLeft: '3.5px solid var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
              }}
            >
              <img
                src={gameAppIcon}
                alt={hub.shortName}
                width={20}
                height={20}
                style={{ width: '20px', height: '20px', borderRadius: '4px', objectFit: 'cover' }}
              />
              <span>RETURN TO {hub.shortName} WIKI HUB</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Link
                href={`/${hub.slug}?tab=tier-list`}
                style={{
                  padding: '8px 10px',
                  fontSize: '11.5px',
                  fontWeight: 800,
                  borderBottom: '1px solid var(--border-subtle)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <img
                  src={hub.units[0]?.imageUrl || gameAppIcon}
                  alt="Strongest Tier List"
                  width={26}
                  height={26}
                  style={{ width: '26px', height: '26px', borderRadius: '4px', objectFit: 'cover' }}
                />
                <span>&larr; Strongest Tier List</span>
              </Link>
              <Link
                href={`/${hub.slug}?tab=weapons`}
                style={{
                  padding: '8px 10px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <img
                  src={topEquipThumb}
                  alt="Weapons and Support Cards"
                  width={26}
                  height={26}
                  style={{ width: '26px', height: '26px', borderRadius: '4px', objectFit: 'cover' }}
                />
                <span>Weapons &amp; Support Cards</span>
              </Link>
              <Link
                href={`/${hub.slug}?tab=bosses`}
                style={{
                  padding: '8px 10px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <img
                  src={hub.bosses[0]?.imageUrl || hub.coverImageUrl}
                  alt="Boss and Raid Guides"
                  width={26}
                  height={26}
                  style={{ width: '26px', height: '26px', borderRadius: '4px', objectFit: 'cover' }}
                />
                <span>Boss &amp; Raid Guides</span>
              </Link>
              <Link
                href={`/${hub.slug}?tab=banners`}
                style={{
                  padding: '8px 10px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <img
                  src={hub.banners[0]?.imageUrl || hub.coverImageUrl}
                  alt="Upcoming Banners"
                  width={26}
                  height={26}
                  style={{ width: '26px', height: '26px', borderRadius: '4px', objectFit: 'cover' }}
                />
                <span>Upcoming Banners &amp; Pull Calc</span>
              </Link>
              <Link
                href={`/${hub.slug}?tab=compare`}
                style={{
                  padding: '8px 10px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <img
                  src={hub.units[1]?.imageUrl || gameAppIcon}
                  alt="Stat Comparison Tool"
                  width={26}
                  height={26}
                  style={{ width: '26px', height: '26px', borderRadius: '4px', objectFit: 'cover' }}
                />
                <span>Stat Comparison Tool</span>
              </Link>
            </div>

            <div
              style={{
                background: 'var(--bg-subnav)',
                color: '#FFF',
                fontSize: '10.5px',
                fontWeight: 900,
                padding: '7px 10px',
                borderLeft: '3.5px solid var(--accent-primary)',
              }}
            >
              ALL {hub.shortName} CHARACTERS ({hub.units.length})
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '580px', overflowY: 'auto' }}>
              {hub.units.map((u) => (
                <Link
                  key={u.slug}
                  href={`/${hub.slug}/units/${u.slug}`}
                  style={{
                    padding: '6px 8px',
                    fontSize: '11px',
                    fontWeight: u.slug === unit.slug ? 900 : 600,
                    background: u.slug === unit.slug ? 'var(--accent-bg)' : 'transparent',
                    color: u.slug === unit.slug ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    borderBottom: '1px solid var(--border-subtle)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '7px',
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', minWidth: 0 }}>
                    <img
                      src={u.imageUrl}
                      alt={u.nameEn}
                      width={30}
                      height={30}
                      style={{
                        width: '30px',
                        height: '30px',
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
                  <span className="mono" style={{ flexShrink: 0, fontWeight: 900 }}>
                    {u.tiers.overallAsian.tierRank}
                  </span>
                </Link>
              ))}
            </div>
          </aside>

          {/* CENTER CHARACTER PROFILE & BUILD GUIDE */}
          <div className="wiki-center-article" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* HERO UNIT PROFILE CARD */}
            <section
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-main)',
                borderRadius: '6px',
                padding: '16px',
                display: 'flex',
                gap: '16px',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <img
                src={unit.imageUrl}
                alt={unit.nameEn}
                width={116}
                height={116}
                style={{
                  width: '116px',
                  height: '116px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  border: '2.5px solid var(--accent-primary)',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
                }}
              />
              <div style={{ flex: 1, minWidth: '240px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}
                >
                  <div>
                    <h1 style={{ fontSize: '19px', fontWeight: 900 }}>
                      {unit.nameEn} — {unit.styleOrTitle}
                    </h1>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 700, marginTop: '2px' }}>
                      Character: {unit.nameOriginal} • Rarity: {unit.rarity}
                    </div>
                  </div>
                  <span
                    className="mono"
                    style={{
                      background: 'var(--accent-bg)',
                      color: 'var(--accent-primary)',
                      border: '1.5px solid var(--accent-primary)',
                      padding: '5px 12px',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontWeight: 900,
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
                    marginTop: '10px',
                    fontSize: '11.5px',
                    fontWeight: 800,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'var(--bg-header)',
                      color: '#FFF',
                      padding: '4px 10px',
                      borderRadius: '4px',
                    }}
                  >
                    <img
                      src={atkIcon}
                      alt={unit.role}
                      width={20}
                      height={20}
                      style={{ width: '20px', height: '20px', borderRadius: '3px', objectFit: 'cover' }}
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
                      padding: '4px 10px',
                      borderRadius: '4px',
                    }}
                  >
                    <img
                      src={elemIcon}
                      alt={unit.element}
                      width={20}
                      height={20}
                      style={{ width: '20px', height: '20px', borderRadius: '3px', objectFit: 'cover' }}
                    />
                    Element / Type: {unit.element} ({unit.attackType})
                  </span>
                  <span
                    style={{
                      background: 'var(--amber-bg)',
                      color: 'var(--amber-primary)',
                      border: '1px solid var(--border-main)',
                      padding: '4px 10px',
                      borderRadius: '4px',
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
                      padding: '4px 10px',
                      borderRadius: '4px',
                      display: 'inline-flex',
                      alignItems: 'center',
                    }}
                  >
                    Meta Longevity: {unit.longevityMonths} Months
                  </span>
                </div>
              </div>
            </section>

            {/* VERIFIED BASE STATS & PERFORMANCE CEILINGS WITH REAL STAT ICONS */}
            <section
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-main)',
                borderRadius: '6px',
                padding: '14px',
              }}
            >
              <h2
                style={{
                  fontSize: '13.5px',
                  fontWeight: 900,
                  borderLeft: '4px solid var(--accent-primary)',
                  paddingLeft: '8px',
                  marginBottom: '10px',
                }}
              >
                MAX-LEVEL STATS &amp; PERFORMANCE METRICS
              </h2>

              <div
                className="mono"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: '8px',
                  textAlign: 'center',
                }}
              >
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
                      borderRadius: '4px',
                      padding: '9px 6px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '10.5px',
                        color: 'var(--text-muted)',
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
                    <div style={{ fontSize: '15.5px', fontWeight: 900 }}>
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
                SKILL MULTIPLIERS &amp; COMBAT MECHANICS
              </h2>

              {unit.skills.map((sk, skIdx) => (
                <div
                  key={sk.name}
                  style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-main)',
                    borderRadius: '5px',
                    padding: '12px',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                  }}
                >
                  <img
                    src={getSkillConceptIconUrl(
                      hub.slug,
                      sk.type,
                      displayGears[skIdx % displayGears.length]?.imageUrl || unit.imageUrl
                    )}
                    alt={sk.name}
                    width={48}
                    height={48}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '6px',
                      objectFit: 'cover',
                      border: '1.5px solid var(--border-strong)',
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 900, fontSize: '13.5px' }}>
                      <span>
                        [{sk.type}] {sk.name} ({sk.hitCount}-Hit)
                      </span>
                      <span className="mono" style={{ color: 'var(--accent-primary)' }}>
                        Cost: {sk.spOrEnergyCost}
                      </span>
                    </div>
                    <div
                      className="mono"
                      style={{
                        fontSize: '12px',
                        fontWeight: 800,
                        color: 'var(--text-main)',
                        marginTop: '4px',
                      }}
                    >
                      {sk.multiplierSummary}
                    </div>
                    <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '4px' }}>
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
                borderRadius: '6px',
                padding: '14px',
              }}
            >
              <h2
                style={{
                  fontSize: '13.5px',
                  fontWeight: 900,
                  borderLeft: '4px solid var(--border-strong)',
                  paddingLeft: '8px',
                  marginBottom: '10px',
                }}
              >
                LIMIT BREAK / AWAKENING PASSIVES &amp; DUPE BREAKPOINTS
              </h2>
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
                    <th style={{ padding: '7px 10px', textAlign: 'left', width: '130px' }}>RANK</th>
                    <th style={{ padding: '7px 10px', textAlign: 'left', width: '210px' }}>PASSIVE NAME</th>
                    <th style={{ padding: '7px 10px', textAlign: 'left' }}>EFFECT</th>
                  </tr>
                </thead>
                <tbody>
                  {unit.passives.map((p, pIdx) => (
                    <tr key={p.unlockRank} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td className="mono" style={{ padding: '8px 10px', fontWeight: 900, color: 'var(--accent-primary)' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <img
                            src={displayGears[pIdx % displayGears.length]?.imageUrl || elemIcon}
                            alt={p.unlockRank}
                            width={24}
                            height={24}
                            style={{ width: '24px', height: '24px', borderRadius: '4px', objectFit: 'cover' }}
                          />
                          <span>{p.unlockRank}</span>
                        </span>
                      </td>
                      <td style={{ padding: '8px 10px', fontWeight: 800 }}>{p.name}</td>
                      <td style={{ padding: '8px 10px', color: 'var(--text-secondary)' }}>{p.effect}</td>
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
                borderRadius: '6px',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
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
                BEST SYNERGY TEAMMATES, WEAPONS / CARDS &amp; RAID MATCHUPS
              </h2>

              {/* SYNERGY TEAMMATES */}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 900, marginBottom: '7px' }}>
                  Optimal Synergy Teammates:
                </div>
                <div style={{ display: 'flex', gap: '9px', flexWrap: 'wrap' }}>
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
                          gap: '9px',
                          padding: '6px 12px 6px 6px',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-main)',
                          borderRadius: '5px',
                          fontSize: '12px',
                          fontWeight: 800,
                        }}
                      >
                        <img
                          src={partner.imageUrl}
                          alt={partner.nameEn}
                          width={48}
                          height={48}
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '6px',
                            objectFit: 'cover',
                            objectPosition: 'top',
                            border: '1.5px solid var(--border-strong)',
                          }}
                        />
                        <div>
                          <div>{partner.nameEn}</div>
                          <div style={{ fontSize: '10.5px', color: 'var(--accent-primary)' }}>
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
                <div style={{ fontSize: '12px', fontWeight: 900, marginBottom: '7px' }}>
                  Best-in-Slot Weapons / Support Cards / Arcanas:
                </div>
                <div style={{ display: 'flex', gap: '9px', flexWrap: 'wrap' }}>
                  {displayGears.map((g) => (
                    <Link
                      key={g.slug}
                      href={`/${hub.slug}?tab=weapons`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '9px',
                        padding: '6px 12px 6px 6px',
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-main)',
                        borderRadius: '5px',
                        fontSize: '12px',
                        fontWeight: 800,
                      }}
                    >
                      <img
                        src={g.imageUrl}
                        alt={g.nameEn}
                        width={52}
                        height={52}
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '6px',
                          objectFit: 'cover',
                          border: '1.5px solid var(--border-strong)',
                        }}
                      />
                      <div>
                        <div>{g.nameEn}</div>
                        <div style={{ fontSize: '10.5px', color: 'var(--amber-primary)' }}>
                          {g.subType} • Tier {g.tierRank}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* TOP RAID BOSS MATCHUPS WITH REAL WIDE BOSS IMAGES */}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 900, marginBottom: '7px' }}>
                  Top Raid Boss Matchups:
                </div>
                <div style={{ display: 'flex', gap: '9px', flexWrap: 'wrap' }}>
                  {displayBosses.map((b) => (
                    <Link
                      key={b.slug}
                      href={`/${hub.slug}?tab=bosses`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '6px 12px 6px 6px',
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-main)',
                        borderRadius: '5px',
                        fontSize: '12px',
                        fontWeight: 800,
                      }}
                    >
                      <img
                        src={b.imageUrl}
                        alt={b.nameEn}
                        width={112}
                        height={62}
                        style={{
                          width: '112px',
                          height: '62px',
                          borderRadius: '5px',
                          objectFit: 'cover',
                          border: '1.5px solid var(--border-strong)',
                        }}
                      />
                      <div>
                        <div>{b.nameEn}</div>
                        <div style={{ fontSize: '10.5px', color: 'var(--accent-primary)' }}>
                          {b.modeName} • {b.hpStat}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT RAIL PICKUP BANNERS + STICKY AD */}
          <aside className="wiki-right-rail" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {displayBanners.length > 0 && (
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-main)',
                  borderRadius: '6px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 900,
                    borderBottom: '2px solid var(--border-strong)',
                    paddingBottom: '6px',
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
                      gap: '6px',
                      fontSize: '11.5px',
                      paddingBottom: '10px',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '112px',
                        borderRadius: '6px',
                        overflow: 'hidden',
                        border: '1.5px solid var(--border-strong)',
                        background: '#111',
                      }}
                    >
                      <img
                        src={bn.imageUrl}
                        alt={bn.bannerTitle}
                        width={260}
                        height={112}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      <span
                        className="mono"
                        style={{
                          position: 'absolute',
                          top: '6px',
                          right: '6px',
                          fontSize: '9.5px',
                          fontWeight: 900,
                          padding: '2px 7px',
                          borderRadius: '4px',
                          background: 'var(--accent-primary)',
                          color: '#FFFFFF',
                        }}
                      >
                        {bn.pullVerdict}
                      </span>
                    </div>
                    <div style={{ fontWeight: 900, fontSize: '12px' }}>{bn.bannerTitle}</div>
                    <div className="mono" style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>
                      Release: {bn.estGlobalStartDate} ({bn.pityCurrencyCost.toLocaleString()} {hub.currencyName})
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
