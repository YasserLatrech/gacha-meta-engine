'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GachaCrestWordmark } from './GachaCrestLogo';

export function SiteFooter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer
      style={{
        marginTop: '36px',
        borderTop: '2px solid var(--border-main)',
        background: 'var(--bg-header)',
        color: 'var(--text-main)',
      }}
    >
      {/* Top Meta Patch & Consensus Alert Bar */}
      <div
        style={{
          borderBottom: '1px solid var(--border-main)',
          background: 'var(--bg-surface)',
        }}
      >
        <div
          style={{
            maxWidth: '1420px',
            margin: '0 auto',
            padding: '20px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
              <span
                className="mono"
                style={{
                  padding: '3px 8px',
                  fontSize: '11px',
                  fontWeight: 800,
                  borderRadius: '4px',
                  background: 'var(--accent-primary)',
                  color: '#FFFFFF',
                }}
              >
                META CONSENSUS &amp; PATCH ALERTS
              </span>
              <span
                className="mono"
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--amber-primary)',
                }}
              >
                INSTANT TIER SHIFTS • BOSS RAID USAGE • MUST-PULL BANNER WARNINGS
              </span>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>
              Never Waste Pity Currency on a Powercrept or Overhyped Banner Again
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Get notified whenever multi-source consensus shifts, new SSS Tier 0 characters drop, or Score Attack / Champions Meet / Cosmo Gate rotations update.
            </p>
          </div>

          {subscribed ? (
            <div
              className="mono"
              style={{
                padding: '10px 16px',
                borderRadius: '6px',
                border: '1.5px solid var(--green-border)',
                background: 'var(--green-bg)',
                color: 'var(--green-primary)',
                fontSize: '13px',
                fontWeight: 800,
              }}
            >
              ✓ SUBSCRIBED TO GACHACREST META PATCH ALERTS
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email for Tier 0 patch alerts..."
                aria-label="Email address for meta patch alerts"
                style={{
                  padding: '10px 14px',
                  fontSize: '13.5px',
                  borderRadius: '6px',
                  border: '1.5px solid var(--border-strong)',
                  background: 'var(--bg-subtle)',
                  color: 'var(--text-main)',
                  minWidth: '0',
                  flex: '1 1 200px',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px 18px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 800,
                  border: 'none',
                  background: 'var(--accent-primary)',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                }}
              >
                Subscribe Free &rarr;
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main 5-Column SEO & Internal Link Matrix */}
      <div
        className="footer-links-grid"
        style={{
          maxWidth: '1420px',
          margin: '0 auto',
          padding: '28px 16px',
        }}
      >
        {/* Col 1: Brand Identity & Multi-Source Consensus Formula */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <GachaCrestWordmark showSubtitle={false} />
          </Link>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            The verified English multi-game gacha tier list, multi-source consensus engine, character build encyclopedia, weapon/support card ranking matrix, boss raid strategy hub, and pity pull calculator.
          </p>
          <div
            className="mono"
            style={{
              padding: '10px 12px',
              borderRadius: '6px',
              border: '1px solid var(--border-main)',
              background: 'var(--bg-surface)',
              fontSize: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <div style={{ fontWeight: 800, color: 'var(--amber-primary)', fontSize: '11.5px' }}>
              MULTI-SOURCE CONSENSUS WEIGHTS
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>
              • Normalized Boss/PvP Usage: <strong style={{ color: 'var(--text-main)' }}>50%</strong>
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>
              • Primary Endgame Raid Lab: <strong style={{ color: 'var(--text-main)' }}>30%</strong>
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>
              • Secondary F2P (LB0) Codex: <strong style={{ color: 'var(--text-main)' }}>20%</strong>
            </div>
          </div>
        </div>

        {/* Col 2: Star Savior (Simultaneous Global/Asia Sync) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="mono" style={{ fontSize: '12.5px', fontWeight: 800, color: 'var(--green-primary)' }}>
            STAR SAVIOR (GLOBAL/ASIA SYNC)
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px', fontSize: '13px', color: 'var(--text-secondary)' }}>
            <li><Link href="/star-savior">SSR Character Tier List (57 Saviors)</Link></li>
            <li><Link href="/star-savior/units/ss-80384230">Professor M [Veteran Detective] Build</Link></li>
            <li><Link href="/star-savior/units/ss-80354674">Amora [Point of No Return] Build</Link></li>
            <li><Link href="/star-savior/units/ss-80022340">Carmen (Bride) Buffer Build</Link></li>
            <li><Link href="/star-savior?tab=weapons">SSR Arcana Tier List (53 Arcanas)</Link></li>
            <li><Link href="/star-savior?tab=bosses">Cosmo Gate &amp; Void Singularity Raids</Link></li>
          </ul>
        </div>

        {/* Col 3: Heaven Burns Red */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="mono" style={{ fontSize: '12.5px', fontWeight: 800, color: 'var(--accent-primary)' }}>
            HEAVEN BURNS RED (+4MO FORESIGHT)
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px', fontSize: '13px', color: 'var(--text-secondary)' }}>
            <li><Link href="/heaven-burns-red">SS Style Tier List (118 Units)</Link></li>
            <li><Link href="/heaven-burns-red/units/hbr-699438">Karen Asakura [Midnight Soul Harvest]</Link></li>
            <li><Link href="/heaven-burns-red/units/hbr-656783">Ruka Kayamori [Diva Suit] Admiral</Link></li>
            <li><Link href="/heaven-burns-red/units/hbr-670489">Yuina Shirakawa [Awakened Unison]</Link></li>
            <li><Link href="/heaven-burns-red?tab=weapons">6★ Elemental Rings, Earrings &amp; Orbs</Link></li>
            <li><Link href="/heaven-burns-red?tab=bosses">Grade 140 Score Attack &amp; Quartz Calc</Link></li>
          </ul>
        </div>

        {/* Col 4: Uma Musume: Pretty Derby */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="mono" style={{ fontSize: '12.5px', fontWeight: 800, color: 'var(--amber-primary)' }}>
            UMA MUSUME (+18MO FORESIGHT)
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px', fontSize: '13px', color: 'var(--text-secondary)' }}>
            <li><Link href="/uma-musume">3★ Trainee Tier List (99 Racers)</Link></li>
            <li><Link href="/uma-musume/units/uma-818827">Symboli Rudolf [Adamant Sovereign]</Link></li>
            <li><Link href="/uma-musume/units/uma-755849">Almond Eye [The Changer] Build</Link></li>
            <li><Link href="/uma-musume/units/uma-670452">Orfevre [Absolute Sovereign] Build</Link></li>
            <li><Link href="/uma-musume?tab=weapons">SSR Support Card Tier List (79 Cards)</Link></li>
            <li><Link href="/uma-musume?tab=bosses">Champions Meet &amp; Carat Spark Calc</Link></li>
          </ul>
        </div>

        {/* Col 5: Sword of Convallaria */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="mono" style={{ fontSize: '12.5px', fontWeight: 800, color: 'var(--blue-primary)' }}>
            SWORD OF CONVALLARIA (+6MO LEAD)
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px', fontSize: '13px', color: 'var(--text-secondary)' }}>
            <li><Link href="/sword-of-convallaria">Tactical Character Tier List (62 Units)</Link></li>
            <li><Link href="/sword-of-convallaria/units/soc-sp-samantha">SP Samantha SSS Build &amp; Skill Tree</Link></li>
            <li><Link href="/sword-of-convallaria/units/soc-triss">Triss (Witcher Collab) Build &amp; Gear</Link></li>
            <li><Link href="/sword-of-convallaria/units/soc-cocoa">Cocoa Support Build &amp; Trinkets</Link></li>
            <li><Link href="/sword-of-convallaria?tab=weapons">Legendary Weapons &amp; Trinkets (48 Gear)</Link></li>
            <li><Link href="/sword-of-convallaria?tab=bosses">Weaponry Trials Lv.70 &amp; Luxite Calc</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Telemetry Stamp */}
      <div
        style={{
          borderTop: '1px solid var(--border-main)',
          background: 'var(--bg-page)',
        }}
      >
        <div
          className="mono"
          style={{
            maxWidth: '1420px',
            margin: '0 auto',
            padding: '14px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            fontSize: '12px',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong style={{ color: 'var(--text-main)' }}>GachaCrest</strong> (gachacrest.gg) • Verified 336 Units • 216 Weapons, Support Cards &amp; Arcanas • Multi-Source Consensus &amp; Usage Telemetry
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/">Portal Index</Link>
            <Link href="/star-savior">Star Savior</Link>
            <Link href="/heaven-burns-red">Heaven Burns Red</Link>
            <Link href="/uma-musume">Uma Musume</Link>
            <Link href="/sword-of-convallaria">Sword of Convallaria</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
