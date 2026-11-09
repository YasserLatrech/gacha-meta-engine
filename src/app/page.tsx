import React from 'react';
import Link from 'next/link';
import { getPortalOverview } from '../application/services/meta-query.service';
import { SiteHeader } from '../components/SiteHeader';
import { AdSlot } from '../components/AdSlot';
import { PortalSearchClient, SearchableItem } from '../components/PortalSearchClient';
import { getGameAppIconUrl, getSectionEmblemUrl } from '../domain/constants/game-visuals';
import { getServerSyncContext } from '../domain/game-mechanics';
import { GachaCrestMark } from '../components/GachaCrestLogo';
import { SiteFooter } from '../components/SiteFooter';

export const dynamic = 'force-dynamic';

export default async function PortalHomePage() {
  const games = await getPortalOverview();

  const searchItems: SearchableItem[] = [];
  for (const g of games) {
    for (const u of g.units) {
      searchItems.push({
        gameSlug: g.slug,
        gameShortName: g.shortName,
        category: 'Character',
        title: u.nameEn,
        subtitle: `${u.styleOrTitle} • ${u.role} (${u.element})`,
        href: `/${g.slug}/units/${u.slug}`,
        imageUrl: u.imageUrl,
      });
    }
    for (const eq of g.equipments) {
      searchItems.push({
        gameSlug: g.slug,
        gameShortName: g.shortName,
        category: 'Weapon / Card',
        title: eq.nameEn,
        subtitle: `${eq.category} • Tier ${eq.tierRank}`,
        href: `/${g.slug}?tab=weapons`,
        imageUrl: eq.imageUrl,
      });
    }
    for (const b of g.bosses) {
      searchItems.push({
        gameSlug: g.slug,
        gameShortName: g.shortName,
        category: 'Boss Raid',
        title: b.nameEn,
        subtitle: b.modeName,
        href: `/${g.slug}?tab=bosses`,
        imageUrl: b.imageUrl,
      });
    }
    for (const bn of g.upcomingBanners) {
      searchItems.push({
        gameSlug: g.slug,
        gameShortName: g.shortName,
        category: 'Upcoming Banner',
        title: bn.bannerTitle,
        subtitle: `Release: ${bn.estGlobalStartDate}`,
        href: `/${g.slug}?tab=banners`,
        imageUrl: bn.imageUrl,
      });
    }
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GachaCrest — Gacha Tier Lists, Builds & Pull Codex',
    alternateName: ['GachaCrest', 'GachaCrest.gg'],
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gachacrest.gg',
    description:
      'GachaCrest is the multi-game gacha encyclopedic database featuring character tier lists, multi-source consensus ratings, weapon and support card rankings, boss raid guides, and pull calculators.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main className="portal-container" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {/* HERO DIRECTORY BAR + INSTANT SEARCH */}
        <section
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-main)',
            borderLeft: '4px solid var(--accent-primary)',
            borderRadius: '8px',
            padding: '16px 18px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <GachaCrestMark size={48} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                <span
                  className="mono"
                  style={{
                    background: 'var(--accent-bg)',
                    color: 'var(--accent-primary)',
                    border: '1px solid var(--accent-border)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 800,
                  }}
                >
                  MULTI-SOURCE CONSENSUS ENGINE
                </span>
                <span
                  className="mono"
                  style={{
                    background: 'var(--green-bg)',
                    color: 'var(--green-primary)',
                    border: '1px solid var(--green-border)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 800,
                  }}
                >
                  50% NORMALIZED USAGE • 30% RAID LAB • 20% F2P LB0
                </span>
              </div>
              <h1 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>
                GachaCrest — Multi-Source Gacha Tier Lists, Builds &amp; Pull Codex
              </h1>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginTop: '3px', fontWeight: 600 }}>
                336 verified characters, 216 weapons &amp; support cards, multi-wiki consensus ratings, boss raid usage telemetry, and pull calculators.
              </p>
            </div>
          </div>
          <PortalSearchClient items={searchItems} />
        </section>

        {/* HOMEPAGE TOP LEADERBOARD AD (0.00 CLS) */}
        <AdSlot
          slotId="portal-home-top-728x90"
          label="HOMEPAGE TOP LEADERBOARD AD"
          dimensions="728×90 / 970×90"
          minHeightPx={68}
          description="Fixed-dimension above-the-fold portal placement (0.00 CLS)"
        />

        {/* SECTION 1: MULTI-GAME WIKI DIRECTORY CARDS */}
        <section>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '12px',
            }}
          >
            <h2
              style={{
                fontSize: '16px',
                fontWeight: 800,
                borderLeft: '4px solid var(--accent-primary)',
                paddingLeft: '10px',
              }}
            >
              GACHACREST WIKI HUBS (SELECT GAME)
            </h2>
            <span className="mono" style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 700 }}>
              Multi-Source Consensus • Server Parity Aware • Complete Rosters &amp; Builds
            </span>
          </div>

          <div className="game-cards-grid">
            {games.map((g) => {
              const unitIcon = getSectionEmblemUrl('tier-list', g.slug);
              const equipIcon = getSectionEmblemUrl('weapons', g.slug);
              const bossIcon = getSectionEmblemUrl('bosses', g.slug);
              const bannerIcon = getSectionEmblemUrl('banners', g.slug);
              const compareIcon = getSectionEmblemUrl('compare', g.slug);
              const calcIcon = getSectionEmblemUrl('calculator', g.slug);
              const syncCtx = getServerSyncContext(g.slug, g.foresightGapMonths, g.globalPatchVersion);

              return (
                <article
                  key={g.slug}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-main)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Link
                    href={`/${g.slug}`}
                    style={{
                      height: '195px',
                      position: 'relative',
                      overflow: 'hidden',
                      borderBottom: '1px solid var(--border-main)',
                      display: 'block',
                      background: 'var(--bg-header)',
                    }}
                  >
                    <img
                      src={g.coverImageUrl}
                      alt={g.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 20%',
                      }}
                    />
                    <span
                      className="mono"
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        background: 'var(--accent-primary)',
                        color: '#FFFFFF',
                        fontSize: '11.5px',
                        fontWeight: 800,
                        padding: '4px 10px',
                        borderRadius: '5px',
                      }}
                    >
                      {g.counts.units} UNITS • {g.counts.equipments} ITEMS
                    </span>
                    <span
                      className="mono"
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: syncCtx.isSimultaneous ? 'rgba(6, 78, 59, 0.92)' : 'rgba(15, 23, 42, 0.92)',
                        color: syncCtx.isSimultaneous ? '#6EE7B7' : '#7DD3FC',
                        border: syncCtx.isSimultaneous ? '1px solid #34D399' : '1px solid #38BDF8',
                        fontSize: '11px',
                        fontWeight: 800,
                        padding: '4px 9px',
                        borderRadius: '5px',
                      }}
                    >
                      {syncCtx.shortBadgeLabel}
                    </span>
                    {/* Top 4 SSS character avatars strip in bottom-left of cover */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(11, 14, 20, 0.9)',
                        border: '1px solid var(--border-strong)',
                        padding: '5px 10px',
                        borderRadius: '6px',
                      }}
                    >
                      {g.units.slice(0, 4).map((u) => (
                        <img
                          key={u.slug}
                          src={u.imageUrl}
                          alt={u.nameEn}
                          title={u.nameEn}
                          width={38}
                          height={38}
                          style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '6px',
                            objectFit: 'cover',
                            border: '1.5px solid rgba(255,255,255,0.75)',
                          }}
                        />
                      ))}
                      <span
                        className="mono"
                        style={{ color: 'var(--amber-primary)', fontSize: '11px', fontWeight: 800, marginLeft: '4px' }}
                      >
                        SSS APEX
                      </span>
                    </div>
                    <span
                      className="mono"
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        background: 'rgba(11, 14, 20, 0.92)',
                        color: 'var(--amber-primary)',
                        border: '1px solid var(--border-main)',
                        fontSize: '11px',
                        fontWeight: 800,
                        padding: '4px 8px',
                        borderRadius: '5px',
                      }}
                    >
                      {g.globalPatchVersion}
                    </span>
                  </Link>

                  <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img
                        src={getGameAppIconUrl(g.slug)}
                        alt={g.name}
                        width={44}
                        height={44}
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '8px',
                          objectFit: 'cover',
                          border: '1.5px solid var(--border-strong)',
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <Link
                          href={`/${g.slug}`}
                          style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}
                        >
                          {g.name} Wiki
                        </Link>
                        <div
                          className="mono"
                          style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px', fontWeight: 700 }}
                        >
                          {g.counts.units} Characters • {g.counts.equipments} Weapons/Cards •{' '}
                          {g.counts.bossEncounters} Raid Guides • {g.counts.banners} Banners
                        </div>
                      </div>
                    </div>

                    {/* SERVER PARITY EXPLANATION BAR */}
                    <div
                      style={{
                        padding: '7px 10px',
                        borderRadius: '6px',
                        background: syncCtx.isSimultaneous ? 'var(--green-bg)' : 'var(--blue-bg)',
                        border: syncCtx.isSimultaneous ? '1px solid var(--green-border)' : '1px solid var(--blue-border)',
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <strong style={{ color: syncCtx.isSimultaneous ? 'var(--green-primary)' : 'var(--blue-primary)' }}>
                        {syncCtx.isSimultaneous ? 'Simultaneous Global/Asia Patch: ' : `Regional Foresight (+${g.foresightGapMonths}mo): `}
                      </strong>
                      {syncCtx.explanation}
                    </div>

                    {/* 6 DIRECT TOPIC QUICK-LINKS WITH REAL THUMBNAILS FOR THIS GAME */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '8px',
                      }}
                    >
                      <Link
                        href={`/${g.slug}?tab=tier-list`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '9px',
                          background: 'var(--accent-bg)',
                          border: '1px solid var(--accent-border)',
                          color: 'var(--text-main)',
                          padding: '7px 10px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: 800,
                        }}
                      >
                        <img
                          src={unitIcon}
                          alt="Character Tier List"
                          width={36}
                          height={36}
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '6px',
                            objectFit: 'cover',
                            border: '1px solid var(--accent-border)',
                            flexShrink: 0,
                          }}
                        />
                        <span>Character Tier List</span>
                      </Link>
                      <Link
                        href={`/${g.slug}?tab=weapons`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '9px',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-main)',
                          color: 'var(--text-main)',
                          padding: '7px 10px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: 700,
                        }}
                      >
                        <img
                          src={equipIcon}
                          alt="Weapons and Cards"
                          width={36}
                          height={36}
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '6px',
                            objectFit: 'cover',
                            border: '1px solid var(--border-main)',
                            flexShrink: 0,
                          }}
                        />
                        <span>Weapons / Cards</span>
                      </Link>
                      <Link
                        href={`/${g.slug}?tab=bosses`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '9px',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-main)',
                          color: 'var(--text-main)',
                          padding: '7px 10px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: 700,
                        }}
                      >
                        <img
                          src={bossIcon}
                          alt="Boss and Raid Guides"
                          width={36}
                          height={36}
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '6px',
                            objectFit: 'cover',
                            border: '1px solid var(--border-main)',
                            flexShrink: 0,
                          }}
                        />
                        <span>Boss &amp; Raid Guides</span>
                      </Link>
                      <Link
                        href={`/${g.slug}?tab=banners`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '9px',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-main)',
                          color: 'var(--text-main)',
                          padding: '7px 10px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: 700,
                        }}
                      >
                        <img
                          src={bannerIcon}
                          alt="Upcoming Banners"
                          width={36}
                          height={36}
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '6px',
                            objectFit: 'cover',
                            border: '1px solid var(--border-main)',
                            flexShrink: 0,
                          }}
                        />
                        <span>{syncCtx.isSimultaneous ? 'Banner Schedule' : 'Upcoming Banners'}</span>
                      </Link>
                      <Link
                        href={`/${g.slug}?tab=compare`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '9px',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-main)',
                          color: 'var(--text-main)',
                          padding: '7px 10px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: 700,
                        }}
                      >
                        <img
                          src={compareIcon}
                          alt="Stat Comparison"
                          width={36}
                          height={36}
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '6px',
                            objectFit: 'cover',
                            border: '1px solid var(--border-main)',
                            flexShrink: 0,
                          }}
                        />
                        <span>Stat Comparison</span>
                      </Link>
                      <Link
                        href={`/${g.slug}?tab=banners`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '9px',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-main)',
                          color: 'var(--text-main)',
                          padding: '7px 10px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: 700,
                        }}
                      >
                        <img
                          src={calcIcon}
                          alt="Pull Calculator"
                          width={36}
                          height={36}
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '6px',
                            objectFit: 'cover',
                            border: '1px solid var(--border-main)',
                            flexShrink: 0,
                          }}
                        />
                        <span>{g.currencyName} Pull Calc</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: LATEST META UPDATES & UPCOMING BANNER ALERTS */}
        <section className="portal-updates-grid">
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-main)',
              borderRadius: '8px',
              padding: '16px',
            }}
          >
            <h2
              style={{
                fontSize: '15.5px',
                fontWeight: 800,
                borderLeft: '4px solid var(--accent-primary)',
                paddingLeft: '10px',
                marginBottom: '12px',
              }}
            >
              LATEST META UPDATES &amp; BANNER PULL VERDICTS
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {games.flatMap((g) =>
                g.upcomingBanners.slice(0, 3).map((bn) => (
                  <Link
                    key={`${g.slug}-${bn.slug}`}
                    href={`/${g.slug}?tab=banners`}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 12px',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-main)',
                      borderRadius: '6px',
                      fontSize: '13.5px',
                      flexWrap: 'wrap',
                      gap: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                      <img
                        src={bn.imageUrl}
                        alt={bn.bannerTitle}
                        width={136}
                        height={72}
                        style={{
                          width: '136px',
                          height: '72px',
                          borderRadius: '6px',
                          objectFit: 'cover',
                          border: '1px solid var(--border-strong)',
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flexWrap: 'wrap' }}>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              background: 'var(--bg-header)',
                              border: '1px solid var(--border-main)',
                              color: 'var(--text-main)',
                              fontSize: '11.5px',
                              fontWeight: 800,
                              padding: '2px 8px',
                              borderRadius: '4px',
                            }}
                          >
                            <img
                              src={getGameAppIconUrl(g.slug)}
                              alt={g.shortName}
                              width={18}
                              height={18}
                              style={{ width: '18px', height: '18px', borderRadius: '3px', objectFit: 'cover' }}
                            />
                            [{g.shortName}]
                          </span>
                          <strong style={{ fontSize: '14px' }}>{bn.bannerTitle}</strong>
                        </div>
                        <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px', fontWeight: 600 }}>
                          Featured: {bn.featuredNames.join(', ')}
                        </div>
                      </div>
                    </div>
                    <div className="mono" style={{ fontSize: '12.5px', fontWeight: 800 }}>
                      <span style={{ color: 'var(--text-muted)', marginRight: '10px' }}>
                        Schedule: {bn.estGlobalStartDate}
                      </span>
                      <span style={{ color: bn.pullVerdict === 'MUST_PULL' ? 'var(--green-primary)' : 'var(--amber-primary)' }}>
                        {bn.pullVerdict.replace('_', ' ')} &rarr;
                      </span>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>

          <div
            style={{
              background: 'var(--bg-surface)',
              border: '2px solid var(--accent-primary)',
              borderRadius: '8px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
              <span
                className="mono"
                style={{
                  background: 'var(--accent-primary)',
                  color: '#FFF',
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '3px 8px',
                  borderRadius: '4px',
                }}
              >
                CONSENSUS &amp; ACCOUNT ENGINE
              </span>
              <span className="mono" style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--green-primary)' }}>
                ✓ AUTO-SAVED IN BROWSER
              </span>
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: 800 }}>
              MULTI-SOURCE CONSENSUS, LB DUPE TRACKER &amp; SQUAD AUDITOR
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              Unlike single-opinion tier lists, GachaCrest resolves disagreements across major Asian wikis and endgame usage telemetry:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <div style={{ padding: '9px 11px', background: 'var(--bg-subtle)', border: '1px solid var(--border-main)', borderRadius: '6px' }}>
                <strong style={{ color: 'var(--amber-primary)' }}>1. Multi-Source Consensus &amp; Disagreement Engine:</strong> See instantly when a character is 100% Unanimous Apex vs. Split Rating (e.g. LB1 Raid Ceiling vs. 0-Dupe F2P).
              </div>
              <div style={{ padding: '9px 11px', background: 'var(--bg-subtle)', border: '1px solid var(--border-main)', borderRadius: '6px' }}>
                <strong style={{ color: 'var(--blue-primary)' }}>2. Server Parity &amp; Regional Foresight Aware:</strong> Simultaneous Global/Asia sync for Star Savior vs. regional foresight planning for HBR, Uma Musume &amp; SoC.
              </div>
              <div style={{ padding: '9px 11px', background: 'var(--bg-subtle)', border: '1px solid var(--border-main)', borderRadius: '6px' }}>
                <strong style={{ color: 'var(--green-primary)' }}>3. Auto-Squad Builder &amp; Boss Matchup Simulator:</strong> Test your exact owned roster against endgame raid bosses and track cumulative multi-banner pity.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: GACHACREST TIER RATING METHODOLOGY & FREQUENTLY ASKED QUESTIONS */}
        <section
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-main)',
            borderRadius: '8px',
            padding: '18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <h2
            style={{
              fontSize: '15.5px',
              fontWeight: 800,
              borderLeft: '4px solid var(--accent-primary)',
              paddingLeft: '10px',
            }}
          >
            HOW GACHACREST RESOLVES WIKI DISAGREEMENTS &amp; CALCULATES CONSENSUS TIERS
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '12px',
            }}
          >
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-main)',
                borderRadius: '6px',
                padding: '13px',
              }}
            >
              <h3 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--amber-primary)' }}>
                Why do Asian wikis sometimes disagree on the same character?
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: 1.55 }}>
                One wiki often evaluates characters at <strong>LB1+ / 3★ Dupe Breakpoints</strong> for 3-turn Boss Raid speed-clears, while another evaluates at <strong>0-Dupe Base (LB0)</strong> for general story and dungeon farming. GachaCrest surfaces both ratings side-by-side and explains the exact reason for any split.
              </p>
            </div>
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-main)',
                borderRadius: '6px',
                padding: '13px',
              }}
            >
              <h3 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--blue-primary)' }}>
                How does Element &amp; Track-Normalized Usage (50% Weight) work?
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: 1.55 }}>
                Raw pick rates can be skewed by the current week&apos;s boss element. GachaCrest normalizes usage within each character&apos;s own <strong>Element, Track Distance, or Tactical Class (50%)</strong>, combined with <strong>Primary Raid Lab (30%)</strong> and <strong>Secondary F2P Codex (20%)</strong>.
              </p>
            </div>
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-main)',
                borderRadius: '6px',
                padding: '13px',
              }}
            >
              <h3 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--green-primary)' }}>
                How does Server Parity differ between Star Savior and other games?
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: 1.55 }}>
                <strong>Star Savior</strong> runs on simultaneous Global/Asia patch parity (0-month gap), so every tier rating applies immediately to all servers. <strong>Heaven Burns Red</strong>, <strong>Uma Musume</strong>, and <strong>Sword of Convallaria</strong> include regional foresight timelines so Global players can plan ahead.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
