import React from 'react';
import Link from 'next/link';
import { getPortalOverview } from '../application/services/meta-query.service';
import { SiteHeader } from '../components/SiteHeader';
import { AdSlot } from '../components/AdSlot';
import { PortalSearchClient, SearchableItem } from '../components/PortalSearchClient';
import { getGameAppIconUrl } from '../domain/constants/game-visuals';

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
    name: 'META.GG Gacha Wiki & Meta Database',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3005',
    description:
      'Multi-game gacha encyclopedic wiki featuring character tier lists, weapon and support card rankings, boss raid guides, and pull calculators.',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {games.map((g, idx) => (
                <img
                  key={g.slug}
                  src={getGameAppIconUrl(g.slug)}
                  alt={g.name}
                  width={32}
                  height={32}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    objectFit: 'cover',
                    border: '2px solid var(--bg-surface)',
                    marginLeft: idx === 0 ? '0' : '-8px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  }}
                />
              ))}
            </div>
            <div>
              <h1 style={{ fontSize: '18px', fontWeight: 900 }}>
                Gacha Character Tier Lists, Builds &amp; Meta Database
              </h1>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px', fontWeight: 600 }}>
                Select a game below for pro character tier lists, weapon &amp; support card rankings, boss raid guides, and pull calculators.
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
              100% Verified English Database • Complete Rosters &amp; Builds
            </span>
          </div>

          <div className="game-cards-grid">
            {games.map((g) => {
              const unitIcon = g.units[0]?.imageUrl || getGameAppIconUrl(g.slug);
              const equipIcon = g.equipments[0]?.imageUrl || unitIcon;
              const bossIcon = g.bosses[0]?.imageUrl || g.coverImageUrl;
              const bannerIcon = g.upcomingBanners[0]?.imageUrl || g.coverImageUrl;
              const compareIcon = g.units[1]?.imageUrl || unitIcon;
              const calcIcon = g.equipments[1]?.imageUrl || equipIcon;

              return (
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
                      height: '132px',
                      position: 'relative',
                      overflow: 'hidden',
                      borderBottom: '1px solid var(--border-main)',
                      display: 'block',
                      background: '#18181B',
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
                      {g.counts.units} UNITS • {g.counts.equipments} ITEMS
                    </span>
                    {/* Top 4 SSS character avatars strip in bottom-left of cover */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '6px',
                        left: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: 'rgba(20, 19, 18, 0.82)',
                        padding: '3px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      {g.units.slice(0, 4).map((u) => (
                        <img
                          key={u.slug}
                          src={u.imageUrl}
                          alt={u.nameEn}
                          title={u.nameEn}
                          width={22}
                          height={22}
                          style={{
                            width: '22px',
                            height: '22px',
                            borderRadius: '3px',
                            objectFit: 'cover',
                            border: '1px solid rgba(255,255,255,0.4)',
                          }}
                        />
                      ))}
                      <span
                        className="mono"
                        style={{ color: '#FFF', fontSize: '9px', fontWeight: 800, marginLeft: '2px' }}
                      >
                        SSS META
                      </span>
                    </div>
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
                      {g.globalPatchVersion}
                    </span>
                  </Link>

                  <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <img
                        src={getGameAppIconUrl(g.slug)}
                        alt={g.name}
                        width={28}
                        height={28}
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '5px',
                          objectFit: 'cover',
                          border: '1px solid var(--border-main)',
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <Link
                          href={`/${g.slug}`}
                          style={{ fontSize: '15px', fontWeight: 900, color: 'var(--text-main)' }}
                        >
                          {g.name} Wiki
                        </Link>
                        <div
                          className="mono"
                          style={{ fontSize: '10.5px', color: 'var(--text-muted)', marginTop: '1px', fontWeight: 700 }}
                        >
                          {g.counts.units} Characters • {g.counts.equipments} Weapons/Cards •{' '}
                          {g.counts.bossEncounters} Raid Guides • {g.counts.banners} Banners
                        </div>
                      </div>
                    </div>

                    {/* 6 DIRECT TOPIC QUICK-LINKS WITH REAL THUMBNAILS FOR THIS GAME */}
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
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: 'var(--accent-bg)',
                          border: '1px solid var(--accent-border)',
                          color: 'var(--accent-primary)',
                          padding: '5px 7px',
                          borderRadius: '3px',
                          fontSize: '11px',
                          fontWeight: 900,
                        }}
                      >
                        <img
                          src={unitIcon}
                          alt="Character Tier List"
                          width={20}
                          height={20}
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '3px',
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
                          gap: '6px',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-main)',
                          color: 'var(--text-main)',
                          padding: '5px 7px',
                          borderRadius: '3px',
                          fontSize: '11px',
                          fontWeight: 800,
                        }}
                      >
                        <img
                          src={equipIcon}
                          alt="Weapons and Cards"
                          width={20}
                          height={20}
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '3px',
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
                          gap: '6px',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-main)',
                          color: 'var(--text-main)',
                          padding: '5px 7px',
                          borderRadius: '3px',
                          fontSize: '11px',
                          fontWeight: 800,
                        }}
                      >
                        <img
                          src={bossIcon}
                          alt="Boss and Raid Guides"
                          width={20}
                          height={20}
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '3px',
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
                          gap: '6px',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-main)',
                          color: 'var(--text-main)',
                          padding: '5px 7px',
                          borderRadius: '3px',
                          fontSize: '11px',
                          fontWeight: 800,
                        }}
                      >
                        <img
                          src={bannerIcon}
                          alt="Upcoming Banners"
                          width={20}
                          height={20}
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '3px',
                            objectFit: 'cover',
                            border: '1px solid var(--border-main)',
                            flexShrink: 0,
                          }}
                        />
                        <span>Upcoming Banners</span>
                      </Link>
                      <Link
                        href={`/${g.slug}?tab=compare`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-main)',
                          color: 'var(--text-main)',
                          padding: '5px 7px',
                          borderRadius: '3px',
                          fontSize: '11px',
                          fontWeight: 800,
                        }}
                      >
                        <img
                          src={compareIcon}
                          alt="Stat Comparison"
                          width={20}
                          height={20}
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '3px',
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
                          gap: '6px',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-main)',
                          color: 'var(--text-main)',
                          padding: '5px 7px',
                          borderRadius: '3px',
                          fontSize: '11px',
                          fontWeight: 800,
                        }}
                      >
                        <img
                          src={calcIcon}
                          alt="Pull Calculator"
                          width={20}
                          height={20}
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '3px',
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
              LATEST META UPDATES &amp; BANNER ALERTS
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {games.flatMap((g) =>
                g.upcomingBanners.slice(0, 3).map((bn) => (
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
                      borderRadius: '4px',
                      fontSize: '12px',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <img
                        src={bn.imageUrl}
                        alt={bn.bannerTitle}
                        width={64}
                        height={36}
                        style={{
                          width: '64px',
                          height: '36px',
                          borderRadius: '3px',
                          objectFit: 'cover',
                          border: '1px solid var(--border-main)',
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              background: 'var(--bg-header)',
                              color: '#FFF',
                              fontSize: '10px',
                              fontWeight: 900,
                              padding: '2px 6px',
                              borderRadius: '2px',
                            }}
                          >
                            <img
                              src={getGameAppIconUrl(g.slug)}
                              alt={g.shortName}
                              width={12}
                              height={12}
                              style={{ width: '12px', height: '12px', borderRadius: '2px', objectFit: 'cover' }}
                            />
                            [{g.shortName}]
                          </span>
                          <strong>{bn.bannerTitle}</strong>
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                          Featured: {bn.featuredNames.join(', ')}
                        </div>
                      </div>
                    </div>
                    <div className="mono" style={{ fontSize: '11px', fontWeight: 800 }}>
                      <span style={{ color: 'var(--text-muted)', marginRight: '8px' }}>
                        Release: {bn.estGlobalStartDate}
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
