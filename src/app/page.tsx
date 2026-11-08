import React from 'react';
import Link from 'next/link';
import { getPortalOverview } from '../application/services/meta-query.service';
import { SiteHeader } from '../components/SiteHeader';
import { AdSlot } from '../components/AdSlot';
import { PortalSearchClient, SearchableItem } from '../components/PortalSearchClient';

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
      });
    }
    for (const bn of g.upcomingBanners) {
      searchItems.push({
        gameSlug: g.slug,
        gameShortName: g.shortName,
        category: 'Future Banner',
        title: bn.bannerTitle,
        subtitle: `Est. Global: ${bn.estGlobalStartDate}`,
        href: `/${g.slug}?tab=banners`,
      });
    }
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'META.GG Asian-Server Gacha Wiki Portal',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3005',
    description:
      'Multi-game gacha encyclopedic wiki bridging the 6-month to 3.5-year gap between Asian (JP/CN/TW) servers and Global English releases.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main className="portal-container" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* HERO DIRECTORY BAR + INSTANT SEARCH */}
        <section
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-main)',
            borderLeft: '4px solid var(--accent-primary)',
            borderRadius: '4px',
            padding: '14px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div>
            <h1 style={{ fontSize: '18px', fontWeight: 900 }}>
              Asian-Server Gacha Database &amp; Foresight Directory
            </h1>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px', fontWeight: 600 }}>
              Select a game wiki below for verified JP/CN/TW character tier lists, weapon/card rankings, boss raid guides, and pull calculators.
            </p>
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

        {/* SECTION 1: MULTI-GAME WIKI DIRECTORY CARDS (APPMEDIA PORTAL PATTERN) */}
        <section>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <h2
              style={{
                fontSize: '14px',
                fontWeight: 900,
                borderLeft: '4px solid var(--border-strong)',
                paddingLeft: '8px',
              }}
            >
              POPULAR GACHA WIKI HUBS (SELECT GAME)
            </h2>
            <span className="mono" style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 700 }}>
              100% Verified PostgreSQL Data • Zero Hardcoded Placeholders
            </span>
          </div>

          <div className="game-cards-grid">
            {games.map((g) => (
              <article
                key={g.slug}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-main)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Link
                  href={`/${g.slug}`}
                  style={{
                    height: '120px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderBottom: '1px solid var(--border-main)',
                    display: 'block',
                  }}
                >
                  <img
                    src={g.coverImageUrl}
                    alt={g.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span
                    className="mono"
                    style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      background: 'var(--accent-primary)',
                      color: '#FFFFFF',
                      fontSize: '10px',
                      fontWeight: 900,
                      padding: '3px 8px',
                      borderRadius: '3px',
                    }}
                  >
                    {g.asianRegion} +{g.foresightGapMonths} MO AHEAD
                  </span>
                  <span
                    className="mono"
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                      background: 'rgba(20, 19, 18, 0.88)',
                      color: '#FDE047',
                      fontSize: '9.5px',
                      fontWeight: 800,
                      padding: '2px 6px',
                      borderRadius: '2px',
                    }}
                  >
                    {g.asianPatchVersion}
                  </span>
                </Link>

                <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  <div>
                    <Link
                      href={`/${g.slug}`}
                      style={{ fontSize: '15px', fontWeight: 900, color: 'var(--text-main)' }}
                    >
                      {g.name} Wiki
                    </Link>
                    <div
                      className="mono"
                      style={{ fontSize: '10.5px', color: 'var(--text-muted)', marginTop: '2px', fontWeight: 700 }}
                    >
                      {g.counts.units} Verified Units • {g.counts.equipments} Weapons/Cards •{' '}
                      {g.counts.bossEncounters} Raid Guides • {g.counts.banners} Future Banners
                    </div>
                  </div>

                  {/* 6 DIRECT TOPIC QUICK-LINKS FOR THIS GAME */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '6px',
                      marginTop: '4px',
                    }}
                  >
                    <Link
                      href={`/${g.slug}?tab=tier-list`}
                      style={{
                        background: 'var(--accent-bg)',
                        border: '1px solid var(--accent-border)',
                        color: 'var(--accent-primary)',
                        padding: '6px 8px',
                        borderRadius: '3px',
                        fontSize: '11px',
                        fontWeight: 900,
                        textAlign: 'center',
                      }}
                    >
                      Character Tier List
                    </Link>
                    <Link
                      href={`/${g.slug}?tab=weapons`}
                      style={{
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-main)',
                        color: 'var(--text-main)',
                        padding: '6px 8px',
                        borderRadius: '3px',
                        fontSize: '11px',
                        fontWeight: 800,
                        textAlign: 'center',
                      }}
                    >
                      Weapons / Cards
                    </Link>
                    <Link
                      href={`/${g.slug}?tab=bosses`}
                      style={{
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-main)',
                        color: 'var(--text-main)',
                        padding: '6px 8px',
                        borderRadius: '3px',
                        fontSize: '11px',
                        fontWeight: 800,
                        textAlign: 'center',
                      }}
                    >
                      Boss &amp; Raid Guides
                    </Link>
                    <Link
                      href={`/${g.slug}?tab=banners`}
                      style={{
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-main)',
                        color: 'var(--text-main)',
                        padding: '6px 8px',
                        borderRadius: '3px',
                        fontSize: '11px',
                        fontWeight: 800,
                        textAlign: 'center',
                      }}
                    >
                      Future Banners
                    </Link>
                    <Link
                      href={`/${g.slug}?tab=compare`}
                      style={{
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-main)',
                        color: 'var(--text-main)',
                        padding: '6px 8px',
                        borderRadius: '3px',
                        fontSize: '11px',
                        fontWeight: 800,
                        textAlign: 'center',
                      }}
                    >
                      Stat Comparison
                    </Link>
                    <Link
                      href={`/${g.slug}?tab=banners`}
                      style={{
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-main)',
                        color: 'var(--text-main)',
                        padding: '6px 8px',
                        borderRadius: '3px',
                        fontSize: '11px',
                        fontWeight: 800,
                        textAlign: 'center',
                      }}
                    >
                      {g.currencyName} Pull Calc
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 2: LATEST META UPDATES & UPCOMING GLOBAL BANNER ALERTS */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 320px',
            gap: '14px',
            alignItems: 'start',
          }}
        >
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-main)',
              borderRadius: '4px',
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
              LATEST VERIFIED META UPDATES &amp; BANNER ALERTS
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {games.flatMap((g) =>
                g.upcomingBanners.map((bn) => (
                  <Link
                    key={`${g.slug}-${bn.slug}`}
                    href={`/${g.slug}?tab=banners`}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '8px 10px',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-main)',
                      borderRadius: '3px',
                      fontSize: '12px',
                      flexWrap: 'wrap',
                      gap: '6px',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          background: 'var(--bg-header)',
                          color: '#FFF',
                          fontSize: '10px',
                          fontWeight: 900,
                          padding: '2px 6px',
                          borderRadius: '2px',
                          marginRight: '8px',
                        }}
                      >
                        [{g.shortName}]
                      </span>
                      <strong>{bn.bannerTitle}</strong>
                    </div>
                    <div className="mono" style={{ fontSize: '11px', fontWeight: 800 }}>
                      <span style={{ color: 'var(--text-muted)', marginRight: '8px' }}>
                        Est. GL: {bn.estGlobalStartDate}
                      </span>
                      <span style={{ color: 'var(--accent-primary)' }}>
                        {bn.pullVerdict.replace('_', ' ')} &rarr;
                      </span>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>

          <AdSlot
            slotId="portal-home-infeed-300x250"
            label="PORTAL SIDEBAR AD"
            dimensions="300×250"
            minHeightPx={250}
            description="Pre-reserved homepage rectangle ad slot (0.00 CLS)"
          />
        </section>
      </main>
    </>
  );
}
