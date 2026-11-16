'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

export interface TocItem {
  id: string;
  label: string;
  subItems?: { id: string; label: string }[];
}

export function AppMediaTocBox({ items, title = 'Table of Contents' }: { items: TocItem[]; title?: string }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="rounded-lg border border-[#243049] bg-[#0f1626] overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#1e293b] bg-[#161f33] px-4 py-2.5">
        <div className="flex items-center gap-2 text-[14.5px] font-extrabold text-[#f8fafc]">
          <span className="text-[#3b82f6]">☰</span>
          <span>{title}</span>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded border border-[#2e3d5c] bg-[#0f172a] px-2.5 py-0.5 text-[12.5px] font-bold text-[#93c5fd] hover:border-[#3b82f6]"
        >
          {open ? '[Hide]' : '[Show]'}
        </button>
      </div>
      {open && (
        <ol className="p-3.5 space-y-2 text-[13.5px]">
          {items.map((item, idx) => (
            <li key={item.id} className="space-y-1">
              <a
                href={`#${item.id}`}
                className="flex items-center gap-2 font-bold text-[#60a5fa] hover:text-[#93c5fd] hover:underline"
              >
                <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-[#1e293b] text-[11.5px] font-extrabold text-[#93c5fd]">
                  {idx + 1}
                </span>
                <span>{item.label}</span>
              </a>
              {item.subItems && item.subItems.length > 0 && (
                <ul className="ml-6 space-y-1 border-l border-[#243049] pl-3 pt-0.5">
                  {item.subItems.map((sub) => (
                    <li key={sub.id}>
                      <a
                        href={`#${sub.id}`}
                        className="text-[12.5px] font-semibold text-[#c8d4e6] hover:text-[#60a5fa] hover:underline"
                      >
                        • {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

const LATEST_UPDATE_TABS = [
  {
    key: 'livestream',
    tabLabel: '1st Anniv Live!',
    title: '1st Anniversary Live: SSS Witch of Favoritism & FREE SSR Guile (~Dec 4, 04:00)!',
    badge: 'RECOMMENDED',
    description:
      '1st Anniversary Pickup banners are LIVE until Dec 4, 04:00 JST! Claim FREE Chaos Caster Guile (Day 1 Login) + FREE Power SSR Arcana "Endless Dance" (Sector 6), and pull Order Striker Witch of Favoritism!',
    links: [
      { label: 'Should You Pull 1st Anniversary Gacha?', href: '/starsavior/guides/1st-anniversary-gacha' },
      { label: 'Witch of Favoritism Build & Evaluation', href: '/starsavior/characters/witch-of-favoritism' },
      { label: 'Guile Build & Evaluation', href: '/starsavior/characters/guile' },
    ],
  },
  {
    key: 'coupons',
    tabLabel: 'Coupon Codes Released',
    title: 'Active Codes: GIFTREADYANNIV1ST, ENDOFTHEJOURNEY & TOGETHER1STANNIV',
    badge: 'RECOMMENDED',
    description:
      'Redeem GIFTREADYANNIV1ST (10 Savior + 10 Arcana Focused Tickets, ~Nov 27 04:00), ENDOFTHEJOURNEY (2,000 Starlight Gems, ~Dec 4 23:59), and TOGETHER1STANNIV (3x Singularity Degeneration Reactor + 1x Skill Reset Code, Nov 12 – Dec 10).',
    links: [
      { label: 'Coupon Codes List & How to Redeem', href: '/starsavior/guides/promo-codes' },
      { label: 'How to Reroll Fast Guide', href: '/starsavior/guides/how-to-reroll' },
    ],
  },
  {
    key: 'bunny-frey',
    tabLabel: 'Frey PU (Ends Nov 19)',
    title: 'Frey: Noble Princess & Tier-0 SSR Arcana "The Indomitable Masterpiece" (~Nov 19, 04:00)',
    badge: 'GACHA',
    description:
      'Final days (ends Nov 19 JST): Frey: Noble Princess returns alongside the Tier-0 Power SSR Arcana "The Indomitable Masterpiece", granting +12% Crit DMG and +4% Max HP as a Universal Special Potential.',
    links: [
      { label: 'Active Gacha Priority Comparison', href: '/starsavior/guides/which-gacha-to-pull' },
      { label: 'Strongest Arcana Tier List & Rankings', href: '/starsavior/arcana' },
    ],
  },
  {
    key: 'ep8-overload',
    tabLabel: 'EP8 & Overload Cube',
    title: '1st Anniv Events Live (~Dec 3): Main Story EP8, Intense Battle Requests & Overload Cube!',
    badge: 'EVENT',
    description:
      'Complete Main Story EP8 (Season 1 Finale), challenge 3 Intense Battle Request stages, farm Precision gear in Guile\'s Path of Return event, and clear Overload Cube alongside Auto Rescue Journey.',
    links: [
      { label: 'Latest Nov 12–16 Patch Notes & QoL Summary', href: '/starsavior/guides/patch-notes' },
      { label: 'All 59 Playable Characters Database', href: '/starsavior/characters' },
    ],
  },
  {
    key: 'custom-wishlist',
    tabLabel: 'Custom Wishlist (+Gwen)',
    title: 'Cosmic & Standard Custom Observation Updated (Gwen Added to Pool!)',
    badge: 'GACHA',
    description:
      'Gwen has joined the Standard & Custom Observation pool as of the 1st Anniversary update! Lock in LB1+ Asherah: Waltz of Starlight alongside top Cosmic & standard SSRs using Standard Tickets.',
    links: [
      { label: 'Custom Observation Wishlist Priority', href: '/starsavior/guides/custom-observation' },
      { label: 'Reroll Tier List & Stopping Line', href: '/starsavior/reroll' },
    ],
  },
  {
    key: 'tier-update',
    tabLabel: 'Strongest Ranking Updated!',
    title: 'Strongest Tier List Updated — Witch of Favoritism (SSS) & Guile (SS) Debut!',
    badge: 'RECOMMENDED',
    description:
      'Order Striker Witch of Favoritism debuts in Tier-0 SSS alongside Amora, Professor M, and Carmen: Eternal Promise, while free Cosmic Caster Guile and Maid Ceres enter SS Rank!',
    links: [
      { label: 'Strongest Character Ranking', href: '/starsavior/tier-list' },
      { label: 'Gauntlet (PvP) Strongest Ranking', href: '/starsavior/guides/pvp-tier-list' },
    ],
  },
];

export function AppMediaLatestUpdatesTabs() {
  const [activeKey, setActiveKey] = useState(LATEST_UPDATE_TABS[0].key);
  const current = LATEST_UPDATE_TABS.find((t) => t.key === activeKey) || LATEST_UPDATE_TABS[0];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {LATEST_UPDATE_TABS.map((tab) => {
          const isAct = tab.key === activeKey;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveKey(tab.key)}
              className={`rounded border px-3 py-1.5 text-[12.5px] font-extrabold transition-colors ${
                isAct
                  ? 'border-[#3b82f6] bg-[#2563eb] text-white shadow-sm'
                  : 'border-[#243049] bg-[#141c2e] text-[#e8eff8] hover:border-[#3b82f6] hover:text-white'
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-4 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded bg-[#2563eb]/25 border border-[#3b82f6]/50 px-2 py-0.5 text-[11.5px] font-extrabold text-[#93c5fd]">
            {current.badge}
          </span>
          <h3 className="text-[14px] font-extrabold text-white">{current.title}</h3>
        </div>
        <p className="text-[13.5px] text-[#e8eff8] leading-relaxed">{current.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          {current.links.map((lnk) => (
            <Link
              key={lnk.href + lnk.label}
              href={lnk.href}
              className="flex items-center gap-1.5 rounded bg-[#161f33] hover:bg-[#1e293b] border border-[#263452] px-3 py-2 text-[13.5px] font-bold text-[#60a5fa]"
            >
              <span>▶</span>
              <span>{lnk.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export interface PollOption {
  rank: number;
  name: string;
  slug: string;
  imageUrl: string;
  votes: number;
  percent: number;
}

export function AppMediaCommunityPoll({
  title,
  subtitle,
  initialOptions,
  pollKey = 'starsavior-community-poll',
}: {
  title: string;
  subtitle: string;
  initialOptions: PollOption[];
  pollKey?: string;
}) {
  const [serverCounts, setServerCounts] = useState<Record<string, number>>({});
  const [votedSlug, setVotedSlug] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scope = `poll:${pollKey}`;

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/votes?scope=${encodeURIComponent(scope)}`, { cache: 'no-store' })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data) return;
        if (data.counts && typeof data.counts === 'object') {
          setServerCounts(data.counts);
        }
        if (Array.isArray(data.myVotes) && data.myVotes.length > 0) {
          setVotedSlug(String(data.myVotes[0]));
        }
      })
      .catch(() => {
        // Keep baseline poll options if offline
      });
    return () => {
      cancelled = true;
    };
  }, [scope]);

  const options = useMemo(() => {
    const merged = initialOptions.map((o) => ({
      ...o,
      votes: o.votes + (serverCounts[o.slug] || 0),
    }));
    const total = Math.max(
      1,
      merged.reduce((acc, o) => acc + o.votes, 0)
    );
    return merged
      .map((o) => ({
        ...o,
        percent: Number(((o.votes / total) * 100).toFixed(1)),
      }))
      .sort((a, b) => b.votes - a.votes)
      .map((o, i) => ({ ...o, rank: i + 1 }));
  }, [initialOptions, serverCounts]);

  const handleVote = async (slug: string) => {
    if (votedSlug || isSubmitting) return;

    setIsSubmitting(true);
    setVotedSlug(slug);
    setServerCounts((prev) => ({ ...prev, [slug]: (prev[slug] || 0) + 1 }));

    try {
      const res = await fetch('/api/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scope,
          targetId: slug,
          mode: 'single-choice',
        }),
      });
      const data = await res.json().catch(() => null);
      if ((res.ok || res.status === 409) && data) {
        if (data.counts && typeof data.counts === 'object') {
          setServerCounts(data.counts);
        }
        if (Array.isArray(data.myVotes) && data.myVotes.length > 0) {
          setVotedSlug(String(data.myVotes[0]));
        }
      } else {
        setVotedSlug(null);
        setServerCounts((prev) => ({
          ...prev,
          [slug]: Math.max(0, (prev[slug] || 1) - 1),
        }));
      }
    } catch {
      setVotedSlug(null);
      setServerCounts((prev) => ({
        ...prev,
        [slug]: Math.max(0, (prev[slug] || 1) - 1),
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 sm:p-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1e293b] pb-2.5">
        <div className="space-y-0.5">
          <div className="text-[14.5px] font-extrabold text-white">{title}</div>
          <p className="text-[12.5px] text-[#c8d4e6]">{subtitle} · 1 vote per IP address</p>
        </div>
        {votedSlug && (
          <span className="rounded bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 text-[12.5px] font-bold text-emerald-300">
            ✓ Vote Recorded (1 per IP)
          </span>
        )}
      </div>

      <div className="space-y-2">
        {options.map((opt) => {
          const isSelected = votedSlug === opt.slug;
          return (
            <div
              key={opt.slug}
              className={`flex items-center gap-2.5 sm:gap-3 rounded-lg border p-2.5 transition-colors ${
                isSelected
                  ? 'border-[#3b82f6] bg-[#17223b]'
                  : 'border-[#1e293b] bg-[#131b2e]'
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded font-black text-[12.5px] ${
                  opt.rank === 1
                    ? 'bg-[#eab308] text-black'
                    : opt.rank === 2
                    ? 'bg-[#94a3b8] text-black'
                    : opt.rank === 3
                    ? 'bg-[#b45309] text-white'
                    : 'bg-[#1e293b] text-[#c8d4e6]'
                }`}
              >
                {opt.rank}
              </span>
              <Link href={`/starsavior/characters/${opt.slug}`} className="h-10 w-10 shrink-0 rounded overflow-hidden border border-[#334155] bg-[#090d16]">
                <img src={opt.imageUrl} alt={opt.name} className="h-full w-full object-cover" loading="eager" />
              </Link>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2 text-[13.5px] font-bold">
                  <Link href={`/starsavior/characters/${opt.slug}`} className="text-white hover:text-[#60a5fa] leading-tight break-words">
                    {opt.name}
                  </Link>
                  <span className="text-[12.5px] text-[#93c5fd] font-mono shrink-0">
                    {opt.votes} votes ({opt.percent}%)
                  </span>
                </div>
                <div className="mt-1.5 h-2 w-full rounded-full bg-[#090d16] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#2563eb] to-[#38bdf8]"
                    style={{ width: `${Math.min(100, Math.max(6, opt.percent * 4.5))}%` }}
                  />
                </div>
              </div>
              <button
                type="button"
                disabled={Boolean(votedSlug) || isSubmitting}
                onClick={() => handleVote(opt.slug)}
                className={`shrink-0 min-h-[34px] rounded px-3 py-1.5 text-[12.5px] font-extrabold transition-colors ${
                  isSelected
                    ? 'bg-[#2563eb] text-white'
                    : votedSlug
                    ? 'bg-[#1e293b] text-[#a8b8d0] cursor-default'
                    : 'bg-[#1e293b] hover:bg-[#2563eb] text-[#93c5fd] hover:text-white border border-[#334155]'
                }`}
              >
                {isSelected ? '✓ Voted' : 'Vote'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
