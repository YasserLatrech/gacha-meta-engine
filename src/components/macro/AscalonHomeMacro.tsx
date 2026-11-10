'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import type { GameWikiDataset } from '@/domain/schemas';
import {
  AppMediaH2,
  AppMediaH3,
  AppMediaTierBadge,
  AppMediaTableLink,
  AppMediaIconCell,
} from '@/components/micro/AppMediaHeadings';

export function AscalonHomeMacro({ dataset }: { dataset: GameWikiDataset }) {
  const { game, characters, arcana, banners } = dataset;
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTierFilter, setSelectedTierFilter] = useState<string>('ALL');
  const [selectedRoleFilter, setSelectedRoleFilter] = useState<string>('ALL');

  const sssUnits = useMemo(
    () => characters.filter((c) => (c.staticData?.appMediaTier || c.overallTier) === 'SSS'),
    [characters]
  );

  const ssArcana = useMemo(
    () => arcana.filter((a) => a.rarity === 'SSR' && (a.staticData?.appMediaTier || a.tier) === 'SS'),
    [arcana]
  );

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return { chars: [], cards: [] };
    const chars = characters
      .filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.element.toLowerCase().includes(q) ||
          c.role.toLowerCase().includes(q) ||
          (c.staticData?.profile?.cv || '').toLowerCase().includes(q)
      )
      .slice(0, 8);
    const cards = arcana
      .filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          (a.staticData?.characterName || '').toLowerCase().includes(q) ||
          (a.staticData?.statTag || '').toLowerCase().includes(q)
      )
      .slice(0, 6);
    return { chars, cards };
  }, [searchQuery, characters, arcana]);

  const filteredCharacters = useMemo(() => {
    return characters.filter((c) => {
      const tier = c.staticData?.appMediaTier || c.overallTier;
      if (selectedTierFilter !== 'ALL' && tier !== selectedTierFilter) return false;
      if (selectedRoleFilter !== 'ALL' && c.role !== selectedRoleFilter) return false;
      return true;
    });
  }, [characters, selectedTierFilter, selectedRoleFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f17] text-[#e6edf3]">
      {/* Sticky Ascalon.gg Top Header */}
      <header className="sticky top-0 z-50 border-b border-[#243049] bg-[#0e1117]/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1240px] px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/brand/ascalon-logo.jpg"
              alt="Ascalon.gg Emblem"
              width={44}
              height={44}
              className="h-11 w-11 rounded-lg border border-[#3b82f6] object-cover shadow-sm"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[18px] font-black tracking-wide text-white group-hover:text-[#60a5fa] transition-colors">
                  ASCALON
                </span>
                <span className="rounded border border-[#3b82f6]/50 bg-[#2563eb]/25 px-1.5 py-0.5 text-[11px] font-black text-[#60a5fa]">
                  .GG
                </span>
                <span className="ml-1 hidden sm:inline-block rounded bg-[#10b981]/15 border border-[#10b981]/40 px-2 py-0.5 text-[10px] font-extrabold text-[#34d399]">
                  v3.2 LIVE
                </span>
              </div>
              <div className="text-[11px] font-semibold text-[#94a3b8]">
                Elite Gacha Strategy, Tier Lists & 1:1 Translated JP/KR Databases
              </div>
            </div>
          </Link>

          <nav className="flex items-center gap-1.5 flex-wrap">
            {[
              { label: 'Home', href: '/', active: true },
              { label: 'Star Savior Wiki', href: '/starsavior', active: false },
              { label: 'Tier List (SSS–C)', href: '/starsavior/tier-list', active: false },
              { label: 'Reroll Guide', href: '/starsavior/reroll', active: false },
              { label: 'Characters (57)', href: '/starsavior/characters', active: false },
              { label: 'Arcana (83)', href: '/starsavior/arcana', active: false },
            ].map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                className={`rounded-md px-3 py-1.5 text-[12px] font-bold transition-colors ${
                  nav.active
                    ? 'bg-[#2563eb] text-white border border-[#3b82f6]'
                    : 'bg-[#161f33] text-[#cbd5e1] border border-[#243049] hover:bg-[#1e2b45] hover:text-white'
                }`}
              >
                {nav.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mx-auto w-full max-w-[1240px] flex-1 px-4 py-5 space-y-6">
        {/* Hero Command Banner & Instant Database Search */}
        <section className="relative overflow-hidden rounded-xl border border-[#243049] bg-gradient-to-br from-[#111726] via-[#0f1626] to-[#0b101b] p-5 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3.5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/40 bg-[#2563eb]/15 px-3 py-1 text-[11px] font-extrabold text-[#93c5fd]">
                <span className="h-2 w-2 rounded-full bg-[#34d399]" />
                <span>ASCALON.GG META INTELLIGENCE NETWORK · SYNCED WITH NEON DB</span>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="/brand/ascalon-logo.jpg"
                  alt="Ascalon.gg Crest"
                  width={76}
                  height={76}
                  className="hidden sm:block h-[76px] w-[76px] rounded-xl border-2 border-[#3b82f6] object-cover shrink-0 shadow-md"
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                    ASCALON<span className="text-[#60a5fa]">.GG</span> — Precision Gacha Strategy & Tier Database
                  </h1>
                  <p className="mt-1 text-[13px] text-[#cbd5e1] leading-relaxed">
                    Zero fluff, zero machine-slop. Accurate 1:1 English translations of Asian meta databases, verified Tier Lists (<strong className="text-white">SSS–C</strong>), optimal equipment sets, 4-unit party synergies, and complete skill/potential encyclopedias.
                  </p>
                </div>
              </div>

              {/* Instant Global Search Bar */}
              <div className="pt-1 space-y-2">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Instant Search: Type a Savior name (e.g. Amora, Professor M, Asherah), Class, Attribute, CV, or Arcana card..."
                    className="w-full rounded-lg border-2 border-[#2d3f5e] bg-[#090d16] px-4 py-2.5 text-[13px] font-semibold text-white placeholder-[#64748b] focus:border-[#3b82f6] focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded bg-[#1e293b] px-2 py-0.5 text-[11px] font-bold text-[#94a3b8] hover:text-white"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Instant Search Dropdown Results */}
                {searchQuery.trim() !== '' && (
                  <div className="rounded-lg border border-[#3b82f6]/50 bg-[#0b101b] p-3 space-y-3 shadow-xl">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#93c5fd]">
                      Instant Database Matches ({searchResults.chars.length} Characters · {searchResults.cards.length} Arcana)
                    </div>
                    {searchResults.chars.length > 0 && (
                      <div className="flex flex-wrap gap-2.5">
                        {searchResults.chars.map((c) => (
                          <AppMediaIconCell
                            key={c.slug}
                            href={`/starsavior/characters/${c.slug}`}
                            name={c.name}
                            imageUrl={c.imageUrl}
                            rarity={c.rarity}
                            topLeftIconUrl={c.staticData?.attributeIconUrl}
                            topRightIconUrl={c.staticData?.classIconUrl}
                            badgeText={c.staticData?.appMediaTier || c.overallTier}
                            size="md"
                          />
                        ))}
                      </div>
                    )}
                    {searchResults.cards.length > 0 && (
                      <div className="flex flex-wrap gap-2.5 border-t border-[#1e293b] pt-2.5">
                        {searchResults.cards.map((a) => (
                          <AppMediaIconCell
                            key={a.slug}
                            href={`/starsavior/arcana#${a.slug}`}
                            name={a.name}
                            imageUrl={a.imageUrl}
                            rarity={a.rarity}
                            topLeftIconUrl={a.staticData?.statTagIconUrl}
                            badgeText={a.staticData?.appMediaTier || a.tier}
                            size="md"
                          />
                        ))}
                      </div>
                    )}
                    {searchResults.chars.length === 0 && searchResults.cards.length === 0 && (
                      <div className="text-[12px] text-[#94a3b8]">No matching Saviors or Arcana found for &quot;{searchQuery}&quot;.</div>
                    )}
                  </div>
                )}
              </div>

              {/* Quick Pillar Buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                <Link
                  href="/starsavior"
                  className="rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] px-4 py-2 text-[12px] font-black text-white border border-[#3b82f6] transition-colors"
                >
                  Open Star Savior Wiki Top →
                </Link>
                <Link
                  href="/starsavior/tier-list"
                  className="rounded-lg bg-[#161f33] hover:bg-[#1e2b45] px-3.5 py-2 text-[12px] font-bold text-[#93c5fd] border border-[#243049] transition-colors"
                >
                  Strongest Tier List (SSS–C)
                </Link>
                <Link
                  href="/starsavior/reroll"
                  className="rounded-lg bg-[#161f33] hover:bg-[#1e2b45] px-3.5 py-2 text-[12px] font-bold text-[#93c5fd] border border-[#243049] transition-colors"
                >
                  Reroll Stopping Line
                </Link>
                <Link
                  href="/starsavior/arcana"
                  className="rounded-lg bg-[#161f33] hover:bg-[#1e2b45] px-3.5 py-2 text-[12px] font-bold text-[#93c5fd] border border-[#243049] transition-colors"
                >
                  83 Arcana Encyclopedia
                </Link>
              </div>
            </div>

            {/* Right Column: Flagship Game Status Card */}
            <div className="lg:col-span-5 rounded-xl border border-[#263452] bg-[#0b101b] p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-[#1e293b] pb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={game.iconUrl}
                    alt={game.name}
                    width={52}
                    height={52}
                    className="h-[52px] w-[52px] rounded-xl border-2 border-[#eab308]/80 object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[16px] font-black text-white">{game.name}</span>
                      <span className="rounded bg-[#10b981]/20 border border-[#10b981]/50 px-1.5 py-0.5 text-[10px] font-black text-[#34d399]">
                        FLAGSHIP WIKI
                      </span>
                    </div>
                    <div className="text-[11px] font-semibold text-[#93c5fd]">
                      {game.patchVersion} · STUDIOBSIDE Turn-Based RPG
                    </div>
                  </div>
                </div>
                <Link
                  href="/starsavior"
                  className="rounded bg-[#2563eb] px-3 py-1.5 text-[11px] font-black text-white hover:bg-[#1d4ed8]"
                >
                  Enter Wiki
                </Link>
              </div>

              {/* Database Telemetry Metrics */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="rounded-lg border border-[#1e293b] bg-[#111726] p-2">
                  <div className="text-[16px] font-black text-[#60a5fa]">57</div>
                  <div className="text-[10px] font-bold text-[#94a3b8]">Playable Saviors</div>
                </div>
                <div className="rounded-lg border border-[#1e293b] bg-[#111726] p-2">
                  <div className="text-[16px] font-black text-[#fbbf24]">83</div>
                  <div className="text-[10px] font-bold text-[#94a3b8]">Arcana Cards</div>
                </div>
                <div className="rounded-lg border border-[#1e293b] bg-[#111726] p-2">
                  <div className="text-[16px] font-black text-[#34d399]">522</div>
                  <div className="text-[10px] font-bold text-[#94a3b8]">Eval Bullets</div>
                </div>
                <div className="rounded-lg border border-[#1e293b] bg-[#111726] p-2">
                  <div className="text-[16px] font-black text-[#f87171]">100%</div>
                  <div className="text-[10px] font-bold text-[#94a3b8]">EN Translated</div>
                </div>
              </div>

              {/* 6 Direct Strategy Modules */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <AppMediaTableLink href="/starsavior" label="Wiki Top & Event Hub" badge="TOP" />
                <AppMediaTableLink href="/starsavior/tier-list" label="Strongest Tier List" badge="SSS" />
                <AppMediaTableLink href="/starsavior/reroll" label="Reroll Tier List" badge="START" />
                <AppMediaTableLink href="/starsavior/arcana" label="Strongest Arcana" badge="83" />
                <AppMediaTableLink href="/starsavior/characters" label="All 57 Characters DB" badge="57" />
                <AppMediaTableLink href="/starsavior#rescue-journey" label="Rescue Journey Guide" badge="HARD" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Star Savior Apex SSS Meta Showcase & Active Pickup Banners */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left 8 Cols: Current SSS Tier Meta Apex Units */}
          <section className="lg:col-span-8 rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
            <AppMediaH2 id="apex-meta-units" badge="TIER 0 · SSS RANK">
              Star Savior Current Apex Meta Units (SSS Rank)
            </AppMediaH2>
            <p className="text-[12px] text-[#cbd5e1] leading-relaxed">
              These 5 Saviors sit at the absolute pinnacle (<strong className="text-white">SSS Rank / Tier 0</strong>) of Star Savior&apos;s current Global/JP meta across Operations, Cosmo Gate, Bosses, and Gauntlet PvP. Click any unit for their full equipment build, 4-unit party lineup, and 5-card SSR Arcana deck.
            </p>

            <div className="space-y-2.5">
              {sssUnits.map((c) => {
                const eq = c.staticData?.equipment?.pveSets?.[0] || 'Destruction Set';
                const highlight = c.staticData?.evalBullets?.[0] || c.summary;
                return (
                  <Link
                    key={c.slug}
                    href={`/starsavior/characters/${c.slug}`}
                    className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-lg border border-[#243049] bg-[#0f1626] p-3 hover:border-[#3b82f6] transition-colors"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <img
                        src={c.imageUrl}
                        alt={c.name}
                        width={64}
                        height={64}
                        className="h-16 w-16 rounded-lg border-2 border-[#eab308]/80 object-cover shrink-0 bg-[#090d16]"
                        loading="eager"
                      />
                      <div className="min-w-0 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[14px] font-black text-white group-hover:text-[#60a5fa]">
                            {c.name}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded bg-[#161f33] border border-[#263452] px-2 py-0.5 text-[11px] font-bold text-[#e2e8f0]">
                            {c.staticData?.attributeIconUrl && (
                              <img src={c.staticData.attributeIconUrl} alt="" className="h-3.5 w-3.5 object-contain" />
                            )}
                            <span>{c.element}</span>
                          </span>
                          <span className="inline-flex items-center gap-1 rounded bg-[#161f33] border border-[#263452] px-2 py-0.5 text-[11px] font-bold text-[#cbd5e1]">
                            {c.staticData?.classIconUrl && (
                              <img src={c.staticData.classIconUrl} alt="" className="h-3.5 w-3.5 object-contain" />
                            )}
                            <span>{c.role} · {c.staticData?.attackType || 'Slash Damage'}</span>
                          </span>
                        </div>
                        <p className="text-[12px] text-[#cbd5e1] line-clamp-1">
                          • {highlight}
                        </p>
                        <div className="text-[11px] font-semibold text-[#93c5fd]">
                          Best Gear: <span className="text-white">{eq}</span> · Neck: <span className="text-white">{c.staticData?.equipment?.necklaceMain || 'Speed'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1.5 shrink-0 border-t sm:border-t-0 border-[#1e293b] pt-2 sm:pt-0">
                      <div className="flex items-center gap-1.5">
                        <AppMediaTierBadge tier="SSS" size="sm" />
                        <span className="rounded bg-[#161f33] border border-[#263452] px-2 py-0.5 text-[11px] font-black text-[#60a5fa]">
                          {c.score.toFixed(1)} / 10
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-[#60a5fa] group-hover:underline">
                        View Build & Deck →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="pt-1">
              <AppMediaH3>Tier-1 SS Rank SSR Arcana (Must-Have Rescue Journey Cards)</AppMediaH3>
              <div className="mt-2.5 flex flex-wrap gap-3 rounded-lg border border-[#243049] bg-[#0f1626] p-3.5">
                {ssArcana.map((a) => (
                  <AppMediaIconCell
                    key={a.slug}
                    href={`/starsavior/arcana#${a.slug}`}
                    name={a.name}
                    imageUrl={a.imageUrl}
                    rarity="SSR"
                    topLeftIconUrl={a.staticData?.statTagIconUrl}
                    badgeText="SS"
                    size="lg"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Right 4 Cols: Active Rate-Up Gacha Banners & Quick Strategy Guides */}
          <section className="lg:col-span-4 space-y-4">
            <div className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
              <AppMediaH2 id="active-banners" badge="RATE-UP">
                Active Pickup Banners
              </AppMediaH2>
              <div className="space-y-3">
                {banners.map((b) => (
                  <div key={b.slug} className="overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626]">
                    <div className="relative h-28 w-full bg-[#090d16]">
                      <img
                        src={b.imageUrl}
                        alt={b.title}
                        className="h-full w-full object-cover opacity-90"
                        loading="eager"
                      />
                      <span className="absolute top-2 left-2 rounded bg-[#dc2626] px-2 py-0.5 text-[10px] font-black text-white shadow">
                        {b.verdict}
                      </span>
                      <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-[10px] font-bold text-[#93c5fd]">
                        {b.periodLabel}
                      </span>
                    </div>
                    <div className="p-3 space-y-1.5">
                      <div className="text-[13px] font-extrabold text-white">{b.title}</div>
                      <div className="text-[11px] font-bold text-[#fbbf24]">{b.bannerType}</div>
                      <p className="text-[11px] text-[#cbd5e1] leading-relaxed">{b.reasoning}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-2.5">
              <AppMediaH2 id="essential-guides">Essential Strategy Guides</AppMediaH2>
              <div className="space-y-1.5">
                <AppMediaTableLink href="/starsavior/tier-list" label="Strongest Character Tier List (SSS–C)" badge="META" />
                <AppMediaTableLink href="/starsavior/reroll" label="Reroll Tier List & 10-Min Procedure" badge="START" />
                <AppMediaTableLink href="/starsavior/arcana" label="Strongest Arcana & 83-Card Database" badge="83" />
                <AppMediaTableLink href="/starsavior#rescue-journey" label="Rescue Journey Normal & Hard Guide" badge="GUIDE" />
                <AppMediaTableLink href="/starsavior#cube-palace" label="Cube Palace Bosses & Cheat Codes" badge="BOSS" />
                <AppMediaTableLink href="/starsavior#latest-updates" label="Active Coupon Codes & Rewards" badge="GIFT" />
              </div>
            </div>
          </section>
        </div>

        {/* Section 3: Complete 57 Saviors Interactive Quick Build Finder */}
        <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
          <AppMediaH2 id="quick-build-finder" badge={`${filteredCharacters.length} / 57 SAVIORS`}>
            Star Savior Complete Roster — 1-Click Character Build & Skill Finder
          </AppMediaH2>

          {/* Tier & Class Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[#243049] bg-[#0f1626] p-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-extrabold text-[#94a3b8] mr-1">Tier:</span>
              {(['ALL', 'SSS', 'SS', 'S', 'A', 'B', 'C'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSelectedTierFilter(t)}
                  className={`rounded px-2.5 py-1 text-[11px] font-bold ${
                    selectedTierFilter === t
                      ? 'bg-[#2563eb] text-white'
                      : 'bg-[#161f33] text-[#cbd5e1] hover:bg-[#1e2b45]'
                  }`}
                >
                  {t === 'ALL' ? 'All Tiers (57)' : `${t} Rank`}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-extrabold text-[#94a3b8] mr-1">Class:</span>
              <button
                type="button"
                onClick={() => setSelectedRoleFilter('ALL')}
                className={`rounded px-2.5 py-1 text-[11px] font-bold ${
                  selectedRoleFilter === 'ALL'
                    ? 'bg-[#2563eb] text-white'
                    : 'bg-[#161f33] text-[#cbd5e1] hover:bg-[#1e2b45]'
                }`}
              >
                All Classes
              </button>
              {game.rolesConfig.map((rl) => (
                <button
                  key={rl.key}
                  type="button"
                  onClick={() => setSelectedRoleFilter(rl.key === selectedRoleFilter ? 'ALL' : rl.key)}
                  className={`inline-flex items-center gap-1 rounded px-2.5 py-1 text-[11px] font-bold ${
                    selectedRoleFilter === rl.key
                      ? 'bg-[#2563eb] text-white'
                      : 'bg-[#161f33] text-[#cbd5e1] hover:bg-[#1e2b45]'
                  }`}
                >
                  <img src={rl.iconUrl} alt={rl.label} className="h-3.5 w-3.5 object-contain" />
                  <span>{rl.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-1">
            {filteredCharacters.map((c) => (
              <AppMediaIconCell
                key={c.slug}
                href={`/starsavior/characters/${c.slug}`}
                name={c.name}
                imageUrl={c.imageUrl}
                rarity={c.rarity}
                topLeftIconUrl={c.staticData?.attributeIconUrl}
                topRightIconUrl={c.staticData?.classIconUrl}
                badgeText={c.staticData?.appMediaTier || c.overallTier}
                size="md"
              />
            ))}
          </div>
        </section>
      </main>

      {/* Ascalon.gg Footer */}
      <footer className="mt-8 border-t border-[#243049] bg-[#0b0e14] py-6 px-4">
        <div className="mx-auto max-w-[1240px] flex flex-wrap items-center justify-between gap-4 text-[12px] text-[#94a3b8]">
          <div className="flex items-center gap-2.5">
            <img
              src="/brand/ascalon-logo.jpg"
              alt="Ascalon.gg"
              width={26}
              height={26}
              className="h-[26px] w-[26px] rounded-md border border-[#3b82f6] object-cover"
            />
            <span>
              <strong className="text-white">Ascalon.gg</strong> — Elite Gacha Strategy Wiki & 1:1 Translated Meta Database.
            </span>
          </div>
          <div className="flex flex-wrap gap-4 font-semibold">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/starsavior" className="hover:text-white">Star Savior Wiki</Link>
            <Link href="/starsavior/tier-list" className="hover:text-white">Tier List</Link>
            <Link href="/starsavior/reroll" className="hover:text-white">Reroll Guide</Link>
            <Link href="/starsavior/characters" className="hover:text-white">Characters (57)</Link>
            <Link href="/starsavior/arcana" className="hover:text-white">Arcana (83)</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
