'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GachaCrestMark, GachaCrestWordmark } from './GachaCrestLogo';

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
    <footer className="mt-16 border-t-2 border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)]">
      {/* Top Marketing & Retention Bar: Meta Patch & Banner Alert CTA */}
      <div className="border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest rounded bg-[var(--accent-primary)] text-white">
                META PATCH ALERTS
              </span>
              <span className="text-[11px] font-mono font-bold text-[var(--text-secondary)]">
                INSTANT TIER SHIFTS &amp; MUST-PULL BANNER WARNINGS
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Never Waste Pity Currency on a Powercrept Banner Again
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5">
              Get notified whenever a new SSS Tier 0 character drops, Score Attack / Champions Meet rotations update, or limited banners change pull priority.
            </p>
          </div>

          {subscribed ? (
            <div className="px-4 py-3 rounded border border-emerald-600/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-bold flex items-center gap-2 shrink-0">
              <span>✓ SUBSCRIBED TO GACHACREST META PATCH ALERTS</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email for Tier 0 patch alerts..."
                aria-label="Email address for meta patch alerts"
                className="px-3.5 py-2.5 text-xs font-mono rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] min-w-[260px] focus:outline-none focus:border-[var(--accent-primary)]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded text-xs font-mono font-extrabold uppercase tracking-wider bg-[var(--accent-primary)] text-white hover:opacity-95 transition-opacity cursor-pointer shrink-0"
              >
                Subscribe Free →
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main 5-Column SEO & Internal Link Matrix */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Col 1: Brand Identity & Scoring Methodology Summary */}
        <div className="lg:col-span-1 space-y-3">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <GachaCrestMark size={36} />
            <GachaCrestWordmark />
          </Link>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            The authoritative English multi-game gacha tier list, character build encyclopedia, weapon/support card ranking matrix, boss raid strategy hub, and pity pull calculator.
          </p>
          <div className="p-3 rounded border border-[var(--border-subtle)] bg-[var(--bg-primary)] space-y-1">
            <div className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[var(--accent-primary)]">
              VERIFIED SCORING WEIGHTS
            </div>
            <div className="text-[11px] font-mono text-[var(--text-secondary)]">
              • Burst &amp; Break Ceiling: <strong className="text-[var(--text-primary)]">35%</strong>
            </div>
            <div className="text-[11px] font-mono text-[var(--text-secondary)]">
              • SP / Turn Economy: <strong className="text-[var(--text-primary)]">25%</strong>
            </div>
            <div className="text-[11px] font-mono text-[var(--text-secondary)]">
              • Role Compression: <strong className="text-[var(--text-primary)]">25%</strong>
            </div>
            <div className="text-[11px] font-mono text-[var(--text-secondary)]">
              • Endgame Longevity: <strong className="text-[var(--text-primary)]">15%</strong>
            </div>
          </div>
        </div>

        {/* Col 2: Heaven Burns Red */}
        <div className="space-y-2.5">
          <div className="text-xs font-mono font-extrabold uppercase tracking-wider text-[var(--accent-primary)]">
            HEAVEN BURNS RED (HBR)
          </div>
          <ul className="space-y-1.5 text-xs font-semibold text-[var(--text-secondary)]">
            <li>
              <Link href="/heaven-burns-red" className="hover:text-[var(--accent-primary)] transition-colors">
                SS Style Tier List (118 Units)
              </Link>
            </li>
            <li>
              <Link href="/heaven-burns-red/units/hbr-699438" className="hover:text-[var(--accent-primary)] transition-colors">
                Karen Asakura [Midnight Soul Harvest] Build
              </Link>
            </li>
            <li>
              <Link href="/heaven-burns-red/units/hbr-656783" className="hover:text-[var(--accent-primary)] transition-colors">
                Ruka Kayamori [Diva Suit] Admiral Build
              </Link>
            </li>
            <li>
              <Link href="/heaven-burns-red/units/hbr-670489" className="hover:text-[var(--accent-primary)] transition-colors">
                Yuina Shirakawa [Awakened Unison] Build
              </Link>
            </li>
            <li>
              <Link href="/heaven-burns-red" className="hover:text-[var(--accent-primary)] transition-colors">
                6★ Elemental Rings, Earrings &amp; Orbs
              </Link>
            </li>
            <li>
              <Link href="/heaven-burns-red" className="hover:text-[var(--accent-primary)] transition-colors">
                Grade 140 Score Attack &amp; Quartz Planner
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Star Savior */}
        <div className="space-y-2.5">
          <div className="text-xs font-mono font-extrabold uppercase tracking-wider text-[var(--accent-primary)]">
            STAR SAVIOR
          </div>
          <ul className="space-y-1.5 text-xs font-semibold text-[var(--text-secondary)]">
            <li>
              <Link href="/star-savior" className="hover:text-[var(--accent-primary)] transition-colors">
                SSR Character Tier List (57 Saviors)
              </Link>
            </li>
            <li>
              <Link href="/star-savior/units/ss-2977196" className="hover:text-[var(--accent-primary)] transition-colors">
                Frey (Bunny) [Moonlit Showtime] Build
              </Link>
            </li>
            <li>
              <Link href="/star-savior/units/ss-2937733" className="hover:text-[var(--accent-primary)] transition-colors">
                Lugh [Spear of Radiance] Breaker Build
              </Link>
            </li>
            <li>
              <Link href="/star-savior/units/ss-2937760" className="hover:text-[var(--accent-primary)] transition-colors">
                Besta [Immortal Aegis] Defender Build
              </Link>
            </li>
            <li>
              <Link href="/star-savior" className="hover:text-[var(--accent-primary)] transition-colors">
                SSR Arcana Tier List (53 Arcanas)
              </Link>
            </li>
            <li>
              <Link href="/star-savior" className="hover:text-[var(--accent-primary)] transition-colors">
                Cosmo Gate Boss Raid &amp; Pity Planner
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Uma Musume: Pretty Derby */}
        <div className="space-y-2.5">
          <div className="text-xs font-mono font-extrabold uppercase tracking-wider text-[var(--accent-primary)]">
            UMA MUSUME: PRETTY DERBY
          </div>
          <ul className="space-y-1.5 text-xs font-semibold text-[var(--text-secondary)]">
            <li>
              <Link href="/uma-musume" className="hover:text-[var(--accent-primary)] transition-colors">
                3★ Trainee Tier List (99 Racers)
              </Link>
            </li>
            <li>
              <Link href="/uma-musume/units/uma-818827" className="hover:text-[var(--accent-primary)] transition-colors">
                Symboli Rudolf [Adamant Sovereign] Build
              </Link>
            </li>
            <li>
              <Link href="/uma-musume/units/uma-755849" className="hover:text-[var(--accent-primary)] transition-colors">
                Almond Eye [The Changer] Build
              </Link>
            </li>
            <li>
              <Link href="/uma-musume/units/uma-670452" className="hover:text-[var(--accent-primary)] transition-colors">
                Orfevre [Absolute Sovereign] Build
              </Link>
            </li>
            <li>
              <Link href="/uma-musume" className="hover:text-[var(--accent-primary)] transition-colors">
                SSR Support Card Tier List (79 Cards)
              </Link>
            </li>
            <li>
              <Link href="/uma-musume" className="hover:text-[var(--accent-primary)] transition-colors">
                Champions Meet &amp; Carat Spark Calculator
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 5: Sword of Convallaria */}
        <div className="space-y-2.5">
          <div className="text-xs font-mono font-extrabold uppercase tracking-wider text-[var(--accent-primary)]">
            SWORD OF CONVALLARIA (SOC)
          </div>
          <ul className="space-y-1.5 text-xs font-semibold text-[var(--text-secondary)]">
            <li>
              <Link href="/sword-of-convallaria" className="hover:text-[var(--accent-primary)] transition-colors">
                Tactical Character Tier List (62 Units)
              </Link>
            </li>
            <li>
              <Link href="/sword-of-convallaria/units/soc-sp-samantha" className="hover:text-[var(--accent-primary)] transition-colors">
                SP Samantha S+ Tier Build &amp; Trait
              </Link>
            </li>
            <li>
              <Link href="/sword-of-convallaria/units/soc-triss" className="hover:text-[var(--accent-primary)] transition-colors">
                Triss (Witcher Collab) Build &amp; Gear
              </Link>
            </li>
            <li>
              <Link href="/sword-of-convallaria/units/soc-cocoa" className="hover:text-[var(--accent-primary)] transition-colors">
                Cocoa S+ Support Build &amp; Trinkets
              </Link>
            </li>
            <li>
              <Link href="/sword-of-convallaria" className="hover:text-[var(--accent-primary)] transition-colors">
                Legendary Weapons &amp; Trinkets (48 Gear)
              </Link>
            </li>
            <li>
              <Link href="/sword-of-convallaria" className="hover:text-[var(--accent-primary)] transition-colors">
                Weaponry Trials Lv.70 &amp; Luxite Planner
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Telemetry Stamp */}
      <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} <strong>GachaCrest</strong> (gachacrest.gg) • Verified 336 Units • 216 Weapons, Support Cards &amp; Arcanas • 9 Boss Raid Guides • 23 Banners
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-[var(--text-primary)]">Portal Index</Link>
            <Link href="/star-savior" className="hover:text-[var(--text-primary)]">Star Savior</Link>
            <Link href="/heaven-burns-red" className="hover:text-[var(--text-primary)]">Heaven Burns Red</Link>
            <Link href="/uma-musume" className="hover:text-[var(--text-primary)]">Uma Musume</Link>
            <Link href="/sword-of-convallaria" className="hover:text-[var(--text-primary)]">Sword of Convallaria</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
