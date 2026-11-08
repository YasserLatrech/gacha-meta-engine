import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getGameHubData } from '../../../../application/services/meta-query.service';
import { SiteHeader } from '../../../../components/SiteHeader';
import { AdSlot } from '../../../../components/AdSlot';

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
  const featuredBanners = hub.banners.filter((bn) =>
    bn.featuredUnitSlugs.includes(unit.slug)
  );
  const relevantBosses = hub.bosses.filter((b) =>
    b.recommendedUnitSlugs.includes(unit.slug)
  );

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
                fontSize: '10.5px',
                fontWeight: 900,
                padding: '7px 10px',
                borderLeft: '3.5px solid var(--accent-primary)',
              }}
            >
              RETURN TO {hub.shortName} WIKI HUB
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Link
                href={`/${hub.slug}?tab=tier-list`}
                style={{
                  padding: '7px 10px',
                  fontSize: '11.5px',
                  fontWeight: 800,
                  borderBottom: '1px solid var(--border-subtle)',
                  color: 'var(--accent-primary)',
                }}
              >
                &larr; Strongest Tier List
              </Link>
              <Link
                href={`/${hub.slug}?tab=weapons`}
                style={{
                  padding: '7px 10px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                Weapons &amp; Support Cards
              </Link>
              <Link
                href={`/${hub.slug}?tab=bosses`}
                style={{
                  padding: '7px 10px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                Boss &amp; Raid Guides
              </Link>
              <Link
                href={`/${hub.slug}?tab=banners`}
                style={{
                  padding: '7px 10px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                Upcoming Banners &amp; Pull Calc
              </Link>
              <Link
                href={`/${hub.slug}?tab=compare`}
                style={{
                  padding: '7px 10px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                Stat Comparison Tool
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
              ALL {hub.shortName} CHARACTERS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {hub.units.map((u) => (
                <Link
                  key={u.slug}
                  href={`/${hub.slug}/units/${u.slug}`}
                  style={{
                    padding: '6px 10px',
                    fontSize: '11px',
                    fontWeight: u.slug === unit.slug ? 900 : 600,
                    background: u.slug === unit.slug ? 'var(--accent-bg)' : 'transparent',
                    color: u.slug === unit.slug ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    borderBottom: '1px solid var(--border-subtle)',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{u.nameEn}</span>
                  <span className="mono">{u.tiers.overallAsian.tierRank}</span>
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
                borderRadius: '4px',
                padding: '14px',
                display: 'flex',
                gap: '14px',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <img
                src={unit.imageUrl}
                alt={unit.nameEn}
                style={{
                  width: '88px',
                  height: '88px',
                  borderRadius: '4px',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  border: '2px solid var(--accent-primary)',
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
                    <h1 style={{ fontSize: '18px', fontWeight: 900 }}>
                      {unit.nameEn} — {unit.styleOrTitle}
                    </h1>
                    <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', fontWeight: 700 }}>
                      Character: {unit.nameOriginal} • Rarity: {unit.rarity}
                    </div>
                  </div>
                  <span
                    className="mono"
                    style={{
                      background: 'var(--accent-bg)',
                      color: 'var(--accent-primary)',
                      border: '1.5px solid var(--accent-primary)',
                      padding: '4px 10px',
                      borderRadius: '3px',
                      fontSize: '13px',
                      fontWeight: 900,
                    }}
                  >
                    Tier {unit.tiers.overallAsian.tierRank} • {unit.tiers.overallAsian.numericScore.toFixed(1)}/10
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: '6px',
                    flexWrap: 'wrap',
                    marginTop: '8px',
                    fontSize: '11px',
                    fontWeight: 800,
                  }}
                >
                  <span
                    style={{
                      background: 'var(--bg-header)',
                      color: '#FFF',
                      padding: '2px 8px',
                      borderRadius: '2px',
                    }}
                  >
                    Role: {unit.role}
                  </span>
                  <span
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-main)',
                      padding: '2px 8px',
                      borderRadius: '2px',
                    }}
                  >
                    Element / Type: {unit.element} ({unit.attackType})
                  </span>
                  <span
                    style={{
                      background: 'var(--amber-bg)',
                      color: 'var(--amber-primary)',
                      border: '1px solid var(--border-main)',
                      padding: '2px 8px',
                      borderRadius: '2px',
                    }}
                  >
                    Target Investment: {unit.recommendedDupes}
                  </span>
                  <span
                    style={{
                      background: 'var(--green-bg)',
                      color: 'var(--green-primary)',
                      padding: '2px 8px',
                      borderRadius: '2px',
                    }}
                  >
                    Meta Longevity: {unit.longevityMonths} Months
                  </span>
                </div>
              </div>
            </section>

            {/* VERIFIED BASE STATS & PERFORMANCE CEILINGS */}
            <section
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-main)',
                borderRadius: '4px',
                padding: '14px',
              }}
            >
              <h2
                style={{
                  fontSize: '13px',
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
                {[
                  { label: 'HP / Stamina', val: unit.baseStats.hpOrStamina },
                  { label: 'DP / Speed', val: unit.baseStats.dpOrSpeed },
                  { label: 'ATK / Power', val: unit.baseStats.atkOrPower },
                  { label: 'DEF / Guts', val: unit.baseStats.defOrGuts },
                  { label: 'Crit / Wit', val: unit.baseStats.critOrWit },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-main)',
                      borderRadius: '3px',
                      padding: '8px',
                    }}
                  >
                    <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 800 }}>
                      {s.label}
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 900, marginTop: '2px' }}>
                      {s.val.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SKILLS, MULTIPLIERS & SP/ENERGY COSTS */}
            <section
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-main)',
                borderRadius: '4px',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <h2
                style={{
                  fontSize: '13px',
                  fontWeight: 900,
                  borderLeft: '4px solid var(--accent-primary)',
                  paddingLeft: '8px',
                }}
              >
                SKILL MULTIPLIERS &amp; COMBAT MECHANICS
              </h2>

              {unit.skills.map((sk) => (
                <div
                  key={sk.name}
                  style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-main)',
                    borderRadius: '4px',
                    padding: '10px 12px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 900, fontSize: '13px' }}>
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
                      fontSize: '11.5px',
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
              ))}
            </section>

            {/* LIMIT BREAK / DUPE PASSIVES */}
            <section
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-main)',
                borderRadius: '4px',
                padding: '14px',
              }}
            >
              <h2
                style={{
                  fontSize: '13px',
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
                    <th style={{ padding: '6px 10px', textAlign: 'left', width: '110px' }}>RANK</th>
                    <th style={{ padding: '6px 10px', textAlign: 'left', width: '190px' }}>PASSIVE NAME</th>
                    <th style={{ padding: '6px 10px', textAlign: 'left' }}>EFFECT</th>
                  </tr>
                </thead>
                <tbody>
                  {unit.passives.map((p) => (
                    <tr key={p.unlockRank} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td className="mono" style={{ padding: '7px 10px', fontWeight: 900, color: 'var(--accent-primary)' }}>
                        {p.unlockRank}
                      </td>
                      <td style={{ padding: '7px 10px', fontWeight: 800 }}>{p.name}</td>
                      <td style={{ padding: '7px 10px', color: 'var(--text-secondary)' }}>{p.effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* SYNERGY TEAMMATES, RECOMMENDED WEAPONS/CARDS & BOSS MATCHUPS */}
            <section
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-main)',
                borderRadius: '4px',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <h2
                style={{
                  fontSize: '13px',
                  fontWeight: 900,
                  borderLeft: '4px solid var(--accent-primary)',
                  paddingLeft: '8px',
                }}
              >
                BEST SYNERGY TEAMMATES, WEAPONS / CARDS &amp; RAID MATCHUPS
              </h2>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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
                        gap: '8px',
                        padding: '6px 10px 6px 6px',
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-main)',
                        borderRadius: '4px',
                        fontSize: '11.5px',
                        fontWeight: 800,
                      }}
                    >
                      <img
                        src={partner.imageUrl}
                        alt={partner.nameEn}
                        style={{ width: '36px', height: '36px', borderRadius: '3px', objectFit: 'cover', objectPosition: 'top' }}
                      />
                      <div>
                        <div>{partner.nameEn}</div>
                        <div style={{ fontSize: '10px', color: 'var(--accent-primary)' }}>
                          {partner.role} • Tier {partner.tiers.overallAsian.tierRank}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {recommendedGears.length > 0 && (
                <div style={{ marginTop: '4px', fontSize: '11.5px' }}>
                  <strong>Best-in-Slot Weapons / Support Cards:</strong>{' '}
                  {recommendedGears.map((g) => g.nameEn).join(' • ')}
                </div>
              )}

              {relevantBosses.length > 0 && (
                <div style={{ fontSize: '11.5px' }}>
                  <strong>Top Raid Boss Matchups:</strong>{' '}
                  {relevantBosses.map((b) => b.nameEn).join(' • ')}
                </div>
              )}
            </section>
          </div>

          {/* RIGHT RAIL STICKY AD */}
          <aside className="wiki-right-rail" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {featuredBanners.length > 0 && (
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-main)',
                  borderRadius: '4px',
                  padding: '12px',
                }}
              >
                <div style={{ fontSize: '11.5px', fontWeight: 900, marginBottom: '6px' }}>
                  FEATURED PICKUP BANNER
                </div>
                {featuredBanners.map((bn) => (
                  <div key={bn.slug} style={{ fontSize: '11.5px' }}>
                    <div style={{ fontWeight: 800 }}>{bn.bannerTitle}</div>
                    <div className="mono" style={{ fontSize: '10.5px', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Release: {bn.estGlobalStartDate} ({bn.pityCurrencyCost.toLocaleString()} {hub.currencyName})
                    </div>
                  </div>
                ))}
              </div>
            )}

            <AdSlot
              slotId={`unit-${unit.slug}-sidebar`}
              label="UNIT PAGE STICKY AD"
              dimensions="300×600"
              minHeightPx={400}
              sticky
              description="Sticky right-rail unit guide placement (0.00 CLS)"
            />
          </aside>
        </div>
      </main>
    </>
  );
}
