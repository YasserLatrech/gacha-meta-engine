'use client';

import React, { useState } from 'react';
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
        <div className="flex items-center gap-2 text-[13px] font-extrabold text-[#f8fafc]">
          <span className="text-[#3b82f6]">☰</span>
          <span>{title}</span>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded border border-[#2e3d5c] bg-[#0f172a] px-2.5 py-0.5 text-[11px] font-bold text-[#93c5fd] hover:border-[#3b82f6]"
        >
          {open ? '[Hide]' : '[Show]'}
        </button>
      </div>
      {open && (
        <ol className="p-3.5 space-y-2 text-[12px]">
          {items.map((item, idx) => (
            <li key={item.id} className="space-y-1">
              <a
                href={`#${item.id}`}
                className="flex items-center gap-2 font-bold text-[#60a5fa] hover:text-[#93c5fd] hover:underline"
              >
                <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-[#1e293b] text-[10px] font-extrabold text-[#93c5fd]">
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
                        className="text-[11px] font-semibold text-[#94a3b8] hover:text-[#60a5fa] hover:underline"
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
    tabLabel: 'Livestream News',
    title: 'Witch of Favoritism & Guile Confirmed! Dress Lacy & Dress Carnelia Revealed!',
    badge: 'RECOMMENDED',
    description:
      'Official broadcast highlights: new playable SSRs Witch of Favoritism and Guile announced alongside Dress Lacy and Dress Carnelia outfits and 1st Anniversary celebrations!',
    links: [
      { label: 'View Latest Livestream Summary Here', href: '/starsavior/guides/livestream-summary' },
      { label: 'Active Coupon Codes List Here', href: '/starsavior/guides/promo-codes' },
    ],
  },
  {
    key: 'coupons',
    tabLabel: 'Coupon Codes Released',
    title: 'Active Promo Codes (~Nov 27, 23:59): GIFTREADYANNIV1ST & ENDOFTHEJOURNEY',
    badge: 'RECOMMENDED',
    description:
      'Redeem GIFTREADYANNIV1ST and ENDOFTHEJOURNEY via Settings -> Account -> Redeem Coupon Code (or the official portal on iOS) before Nov 27, 23:59 to claim Astral Gems and Observation Tickets.',
    links: [
      { label: 'Coupon Codes List & How to Redeem', href: '/starsavior/guides/promo-codes' },
      { label: 'How to Reroll Fast Guide', href: '/starsavior/guides/how-to-reroll' },
    ],
  },
  {
    key: 'maid-ceres',
    tabLabel: 'Maid Ceres Released',
    title: 'New Sun Supporter "Maid Ceres" & SSR Arcana "Grueling Ordeal" Pickup (~Nov 13, 04:00)',
    badge: 'GACHA',
    description:
      'Maid Ceres is a Sun Supporter equipped with two AoE healing skills, an extra-trigger Special Skill that grants Regeneration, team-wide debuff cleansing, and an AoE ATK buff Ultimate Skill.',
    links: [
      { label: 'Should You Pull Maid Ceres Gacha?', href: '/starsavior/guides/maid-ceres-gacha' },
      { label: 'Maid Ceres Build, Skills & Evaluation', href: '/starsavior/characters/maid-ceres' },
    ],
  },
  {
    key: 'bunny-frey',
    tabLabel: 'Frey: Noble Princess PU',
    title: 'Frey: Noble Princess & Tier-0 SSR Arcana "The Indomitable Masterpiece" (~Nov 19, 04:00)',
    badge: 'GACHA',
    description:
      'Frey: Noble Princess returns alongside the Tier-0 Power SSR Arcana "The Indomitable Masterpiece", granting +12% Crit DMG and +4% Max HP as a Universal Special Potential.',
    links: [
      { label: 'Should You Pull Frey: Noble Princess Gacha?', href: '/starsavior/guides/frey-noble-princess-gacha' },
      { label: 'Strongest Arcana Tier List & Rankings', href: '/starsavior/arcana' },
    ],
  },
  {
    key: 'cosmo-gate',
    tabLabel: 'Cosmo Gate P7',
    title: 'Cosmo Gate Season P7 Boss Strategy & Recommended Formations (~Nov 12, 04:00)',
    badge: 'EVENT',
    description:
      'Single-target Toughness break and Cross Attack compositions centered around Professor M, Amora, Haydee, and Smile: Sunshine Cat dominate Cosmo Gate P7 boss clears.',
    links: [
      { label: 'Cosmo Gate Strategy & Recommended Teams', href: '/starsavior/guides/cosmo-gate' },
      { label: 'Professor M Build & Cross Attack Guide', href: '/starsavior/characters/professor-m' },
    ],
  },
  {
    key: 'valentine',
    tabLabel: 'Valentine Revival',
    title: 'Revival Valentine Event Walkthrough & Exchange Shop (~Nov 13, 04:00)',
    badge: 'EVENT',
    description:
      'Clear Golden Fantasia event stages to exchange for Observation Tickets, Quasar/Pulsar Core shards, and Affinity Gifts before November 13, 04:00.',
    links: [
      { label: 'Valentine Event Walkthrough Here', href: '/starsavior/guides/valentine-event' },
      { label: 'All 57 Playable Characters Database', href: '/starsavior/characters' },
    ],
  },
  {
    key: 'tier-update',
    tabLabel: 'Strongest Ranking Updated!',
    title: 'Strongest Character Tier List Updated — Maid Ceres Debuts at SS!',
    badge: 'RECOMMENDED',
    description:
      'Amora, Professor M, Carmen: Eternal Promise, Bunnygirl Charlotte, and Smile: Sunshine Cat lead Tier-0 SSS, with newly released Maid Ceres entering SS Rank!',
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
              className={`rounded border px-3 py-1.5 text-[11px] font-extrabold transition-colors ${
                isAct
                  ? 'border-[#3b82f6] bg-[#2563eb] text-white shadow-sm'
                  : 'border-[#243049] bg-[#141c2e] text-[#cbd5e1] hover:border-[#3b82f6] hover:text-white'
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-4 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded bg-[#2563eb]/25 border border-[#3b82f6]/50 px-2 py-0.5 text-[10px] font-extrabold text-[#93c5fd]">
            {current.badge}
          </span>
          <h3 className="text-[14px] font-extrabold text-white">{current.title}</h3>
        </div>
        <p className="text-[12px] text-[#cbd5e1] leading-relaxed">{current.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          {current.links.map((lnk) => (
            <Link
              key={lnk.href + lnk.label}
              href={lnk.href}
              className="flex items-center gap-1.5 rounded bg-[#161f33] hover:bg-[#1e293b] border border-[#263452] px-3 py-2 text-[12px] font-bold text-[#60a5fa]"
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
}: {
  title: string;
  subtitle: string;
  initialOptions: PollOption[];
}) {
  const [options, setOptions] = useState<PollOption[]>(initialOptions);
  const [votedSlug, setVotedSlug] = useState<string | null>(null);

  const handleVote = (slug: string) => {
    if (votedSlug) return;
    setVotedSlug(slug);
    setOptions((prev) => {
      const total = prev.reduce((acc, o) => acc + o.votes, 0) + 1;
      return prev
        .map((o) => {
          const nextVotes = o.slug === slug ? o.votes + 1 : o.votes;
          return {
            ...o,
            votes: nextVotes,
            percent: Number(((nextVotes / total) * 100).toFixed(1)),
          };
        })
        .sort((a, b) => b.votes - a.votes)
        .map((o, i) => ({ ...o, rank: i + 1 }));
    });
  };

  return (
    <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1e293b] pb-2.5">
        <div>
          <div className="text-[13px] font-extrabold text-white">{title}</div>
          <p className="text-[11px] text-[#94a3b8]">{subtitle}</p>
        </div>
        {votedSlug && (
          <span className="rounded bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 text-[11px] font-bold text-emerald-300">
            ✓ Vote Recorded!
          </span>
        )}
      </div>

      <div className="space-y-2">
        {options.map((opt) => {
          const isSelected = votedSlug === opt.slug;
          return (
            <div
              key={opt.slug}
              className={`flex items-center gap-3 rounded-lg border p-2 transition-colors ${
                isSelected
                  ? 'border-[#3b82f6] bg-[#17223b]'
                  : 'border-[#1e293b] bg-[#131b2e]'
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded font-black text-[11px] ${
                  opt.rank === 1
                    ? 'bg-[#eab308] text-black'
                    : opt.rank === 2
                    ? 'bg-[#94a3b8] text-black'
                    : opt.rank === 3
                    ? 'bg-[#b45309] text-white'
                    : 'bg-[#1e293b] text-[#94a3b8]'
                }`}
              >
                {opt.rank}
              </span>
              <Link href={`/starsavior/characters/${opt.slug}`} className="h-10 w-10 shrink-0 rounded overflow-hidden border border-[#334155] bg-[#090d16]">
                <img src={opt.imageUrl} alt={opt.name} className="h-full w-full object-cover" loading="eager" />
              </Link>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between text-[12px] font-bold">
                  <Link href={`/starsavior/characters/${opt.slug}`} className="text-white hover:text-[#60a5fa] truncate">
                    {opt.name}
                  </Link>
                  <span className="text-[11px] text-[#93c5fd] font-mono">
                    {opt.votes} votes ({opt.percent}%)
                  </span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-[#090d16] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#2563eb] to-[#38bdf8]"
                    style={{ width: `${Math.min(100, Math.max(6, opt.percent * 4.5))}%` }}
                  />
                </div>
              </div>
              <button
                type="button"
                disabled={Boolean(votedSlug)}
                onClick={() => handleVote(opt.slug)}
                className={`shrink-0 rounded px-2.5 py-1 text-[11px] font-bold transition-colors ${
                  isSelected
                    ? 'bg-[#2563eb] text-white'
                    : votedSlug
                    ? 'bg-[#1e293b] text-[#64748b] cursor-default'
                    : 'bg-[#1e293b] hover:bg-[#2563eb] text-[#93c5fd] hover:text-white border border-[#334155]'
                }`}
              >
                {isSelected ? 'Voted' : 'Vote'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
