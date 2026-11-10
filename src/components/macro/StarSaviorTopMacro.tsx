import React from 'react';
import Link from 'next/link';
import type { GameWikiDataset } from '@/domain/schemas';
import {
  AppMediaBannerH2,
  AppMediaH3,
  AppMediaH4,
  AppMediaGraphicButtonGrid,
  AppMediaIconCell,
} from '@/components/micro/AppMediaHeadings';
import { AppMediaLatestUpdatesTabs } from '@/components/medium/AppMediaTocAndWidgets';
import { AppMediaStrategyFooter } from '@/components/medium/AppMediaStrategyBlocks';

const TOP_INDEX_CELLS = [
  { label: 'Latest News', href: '#latest-updates' },
  { label: 'Rankings', href: '#rankings-section' },
  { label: 'Useful Tools', href: '#useful-tools' },
  { label: 'Gacha', href: '#gacha-section' },
  { label: 'Events', href: '#events-section' },
  { label: 'Rescue Journey', href: '#rescue-journey' },
  { label: 'Operations', href: '#operations-section' },
  { label: 'Cube Palace', href: '#cube-palace' },
  { label: 'Strategy Guides', href: '#recommended-guides' },
  { label: 'Mechanics Test', href: '#mechanics-verification' },
  { label: 'Beginner Guide', href: '#beginner-guides' },
  { label: 'Characters (57)', href: '#characters-section' },
  { label: 'Arcana (83)', href: '#arcana-section' },
  { label: 'Database', href: '#database-section' },
  { label: 'Bulletin Boards', href: '#bulletin-boards' },
  { label: 'FAQ', href: '#faq-section' },
  { label: 'Game Info', href: '#basic-game-info' },
  { label: 'Comments', href: '#reader-comments' },
];

export function StarSaviorTopMacro({ dataset }: { dataset: GameWikiDataset }) {
  const { game, characters, arcana } = dataset;
  const ssrChars = characters.filter((c) => c.rarity === 'SSR');
  const srChars = characters.filter((c) => c.rarity === 'SR');
  const ssrArcana = arcana.filter((a) => a.rarity === 'SSR');
  const srArcana = arcana.filter((a) => a.rarity === 'SR');
  const rArcana = arcana.filter((a) => a.rarity === 'R');

  const maidCeres = characters.find((c) => c.slug === 'maid-ceres');
  const bunnyFrey = characters.find((c) => c.slug === 'bunny-frey');
  const gruelingOrdeal =
    arcana.find(
      (a) =>
        a.slug === 'arcana-80521390' ||
        a.name === 'Grueling Ordeal'
    ) || ssrArcana[0];
  const masterpiece =
    arcana.find((a) => a.name === 'The Indomitable Masterpiece') || ssrArcana[1];

  return (
    <div className="space-y-6">
      {/* =====================================================================
       * SECTION 0: INTRO HEADER + 6 QUICK SHORTCUTS + 18-CELL TOC
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-3.5">
        <div className="flex items-center justify-between flex-wrap gap-2 text-[11px] text-[#94a3b8] border-b border-[#1e293b] pb-2">
          <div className="flex items-center gap-2">
            <span className="rounded bg-[#2563eb] px-2 py-0.5 text-[10px] font-extrabold text-white">
              STAR SAVIOR WIKI
            </span>
            <span>{game.patchVersion}</span>
          </div>
          <span>Last Updated: Nov 10, 2026 17:50</span>
        </div>

        <div className="flex items-center gap-3.5">
          <img
            src={game.iconUrl}
            alt="Star Savior"
            className="h-14 w-14 rounded-xl border border-[#3b82f6]/50 object-cover shrink-0"
            loading="eager"
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Star Savior Strategy Wiki | Complete English Guide & Database
            </h1>
            <p className="mt-1 text-[12px] text-[#cbd5e1] leading-relaxed">
              Complete Star Savior strategy wiki featuring Strongest Character & Arcana Tier Lists, Reroll Rankings, Journey Event Choice Checker, all 57 playable Saviors, and all 83 Arcana cards.
            </p>
          </div>
        </div>

        {/* 6 Featured Intro Anchors (Exact AppMedia Intro Bar) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { href: '/starsavior/reroll', label: 'Reroll Rankings' },
            { href: '/starsavior/tier-list', label: 'Strongest Character Ranking' },
            { href: '/starsavior/guides/promo-codes', label: 'Coupon Codes List' },
            { href: '/starsavior/guides/event-choice-checker', label: 'Journey Event Choice Checker' },
            { href: '/starsavior/guides/party-formations', label: 'Strongest Party Formations' },
            { href: '/starsavior/arcana', label: 'Strongest Arcana Ranking' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-center rounded border border-[#2d3e5e] bg-[#152036] hover:bg-[#1e2f4d] hover:border-[#60a5fa] px-2.5 py-2 text-center text-[12px] font-extrabold text-[#93c5fd] hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* 18-Cell Top Page Index Table */}
        <div className="overflow-hidden rounded border border-[#28354e] bg-[#0f1626]">
          <div className="border-b border-[#28354e] bg-[#162136] px-3.5 py-2 text-center text-[12px] font-extrabold text-[#f8fafc]">
            Star Savior Wiki Table of Contents
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 divide-x divide-y divide-[#243049]">
            {TOP_INDEX_CELLS.map((cell) => (
              <a
                key={cell.label}
                href={cell.href}
                className="flex items-center justify-center px-2 py-2 text-center text-[11px] font-bold text-[#60a5fa] hover:bg-[#17223b] hover:text-white transition-colors"
              >
                {cell.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
       * SECTION 1: LATEST UPDATES (h2_001_latest-news.webp + icon_002.webp)
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3.5">
        <AppMediaBannerH2
          id="latest-updates"
          bannerSrc="/banners/starsavior/h2/h2_001_latest-news.webp"
          bannerAlt="Star Savior Latest Strategy Updates"
          badge="LIVE"
        >
          Star Savior Latest Strategy Updates
        </AppMediaBannerH2>

        <AppMediaLatestUpdatesTabs />

        <div className="overflow-hidden rounded border border-[#28354e] bg-[#131d31] px-3 py-2.5 text-center">
          <Link
            href="/starsavior/guides/patch-notes"
            className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-extrabold text-[#60a5fa] hover:text-[#93c5fd] hover:underline"
          >
            <span className="text-[10px] text-[#3b82f6]">▶</span>
            <span>Latest Update & Maintenance Summary</span>
          </Link>
        </div>

        {/* Star Savior Strategy Team Box (icon_002.webp) */}
        <div className="rounded border border-[#28354e] bg-[#0f1626] p-3.5 flex items-center gap-3.5">
          <img
            src="/banners/starsavior/icons/icon_002.webp"
            alt="Star Savior Strategy Team"
            width={60}
            height={60}
            className="h-14 w-14 rounded-lg border border-[#3b82f6]/50 object-cover shrink-0"
            loading="eager"
          />
          <div className="space-y-1 min-w-0 flex-1">
            <div className="text-[13px] font-extrabold text-[#f8fafc]">
              Star Savior Strategy Team
            </div>
            <p className="text-[12px] text-[#cbd5e1] leading-relaxed">
              Delivering complete English Star Savior tier lists, in-game mechanics verification, Rescue Journey choice lookups, and Cosmo Gate boss formations!
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
       * SECTION 2: RANKINGS (h2_003_rankings.webp + btn_004..btn_009)
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3.5">
        <AppMediaBannerH2
          id="rankings-section"
          bannerSrc="/banners/starsavior/h2/h2_003_rankings.webp"
          bannerAlt="Star Savior Rankings"
        >
          Star Savior Rankings
        </AppMediaBannerH2>

        <AppMediaH3>Ranking</AppMediaH3>

        <AppMediaGraphicButtonGrid
          headerLabel="Various Star Savior Rankings"
          items={[
            {
              href: '/starsavior/tier-list',
              label: 'Strongest Characters',
              bannerSrc: '/banners/starsavior/buttons/btn_004.webp',
            },
            {
              href: '/starsavior/arcana',
              label: 'The Strongest Arcana',
              bannerSrc: '/banners/starsavior/buttons/btn_005.webp',
            },
            {
              href: '/starsavior/guides/pvp-tier-list',
              label: 'The Strongest PvP Characters',
              bannerSrc: '/banners/starsavior/buttons/btn_006.webp',
            },
            {
              href: '/starsavior/reroll',
              label: 'Reroll Rankings',
              bannerSrc: '/banners/starsavior/buttons/btn_007.webp',
            },
            {
              href: '/starsavior/guides/sr-characters',
              label: 'Recommended SR Characters',
              bannerSrc: '/banners/starsavior/buttons/btn_008.webp',
            },
            {
              href: '/starsavior/guides/sr-arcana',
              label: 'SR Arcana Recommendation',
              bannerSrc: '/banners/starsavior/buttons/btn_009.webp',
            },
          ]}
        />
      </section>

      {/* =====================================================================
       * SECTION 3: USEFUL STRATEGY TOOLS (h2_010_tools.webp + btn_011..btn_013)
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3.5">
        <AppMediaBannerH2
          id="useful-tools"
          bannerSrc="/banners/starsavior/h2/h2_010_tools.webp"
          bannerAlt="Star Savior Useful Strategy Tools"
        >
          Star Savior Useful Strategy Tools
        </AppMediaBannerH2>

        <AppMediaGraphicButtonGrid
          items={[
            {
              href: '/starsavior/guides/character-tier-maker',
              label: 'Character Tier Maker',
              bannerSrc: '/banners/starsavior/buttons/btn_011.webp',
            },
            {
              href: '/starsavior/guides/arcana-tier-maker',
              label: 'Arcana Tier Maker',
              bannerSrc: '/banners/starsavior/buttons/btn_012.webp',
            },
            {
              href: '/starsavior/guides/event-choice-checker',
              label: 'Journey Event Choice Checker',
              bannerSrc: '/banners/starsavior/buttons/btn_013.webp',
            },
          ]}
        />
      </section>

      {/* =====================================================================
       * SECTION 4: GACHA (h2_014_gacha.webp + Active Gacha + btn_015..btn_018)
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3.5">
        <AppMediaBannerH2
          id="gacha-section"
          bannerSrc="/banners/starsavior/h2/h2_014_gacha.webp"
          bannerAlt="Star Savior Gacha"
        >
          Star Savior Gacha
        </AppMediaBannerH2>

        <AppMediaH3>Active Gacha Banners</AppMediaH3>

        <div className="overflow-hidden rounded border border-[#28354e] bg-[#0f1626]">
          <div className="border-b border-[#28354e] bg-[#162136] px-3 py-2 text-center text-[12px] font-extrabold text-[#dbeafe]">
            Currently Held Observation Gachas
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#28354e]">
            {/* Maid Ceres Gacha */}
            <div className="p-3.5 space-y-3">
              <div className="flex items-center justify-between border-b border-[#1e293b] pb-2">
                <Link
                  href="/starsavior/guides/maid-ceres-gacha"
                  className="text-[13px] font-extrabold text-[#60a5fa] hover:underline"
                >
                  Maid Ceres Pickup Gacha
                </Link>
                <span className="rounded bg-red-600/25 border border-red-500/40 px-2 py-0.5 text-[10px] font-bold text-red-200">
                  ~2026/11/13 (Fri)
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center text-[12px]">
                <div className="rounded border border-[#243049] bg-[#131c2e] p-2">
                  <div className="text-[10px] font-bold text-[#94a3b8]">Character</div>
                  <div className="mt-0.5 text-[13px] font-black text-[#fbbf24]">★★★★★</div>
                </div>
                <div className="rounded border border-[#243049] bg-[#131c2e] p-2">
                  <div className="text-[10px] font-bold text-[#94a3b8]">Arcana</div>
                  <div className="mt-0.5 text-[13px] font-black text-[#fbbf24]">★★★★☆</div>
                </div>
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#93c5fd] mb-2">Pickup Targets:</div>
                <div className="flex items-center gap-4">
                  {maidCeres && (
                    <AppMediaIconCell
                      href={`/starsavior/characters/${maidCeres.slug}`}
                      name={maidCeres.name}
                      imageUrl={maidCeres.imageUrl}
                      rarity="SSR"
                      topLeftIconUrl={maidCeres.staticData?.attributeIconUrl}
                      topRightIconUrl={maidCeres.staticData?.classIconUrl}
                    />
                  )}
                  {gruelingOrdeal && (
                    <AppMediaIconCell
                      href={`/starsavior/arcana#${gruelingOrdeal.slug}`}
                      name={gruelingOrdeal.name}
                      imageUrl={gruelingOrdeal.imageUrl}
                      rarity="SSR"
                      topLeftIconUrl={gruelingOrdeal.staticData?.statTagIconUrl}
                      badgeText="SSR"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Frey: Noble Princess Gacha */}
            <div className="p-3.5 space-y-3">
              <div className="flex items-center justify-between border-b border-[#1e293b] pb-2">
                <Link
                  href="/starsavior/guides/frey-noble-princess-gacha"
                  className="text-[13px] font-extrabold text-[#60a5fa] hover:underline"
                >
                  Frey: Noble Princess Gacha
                </Link>
                <span className="rounded bg-blue-600/25 border border-blue-500/40 px-2 py-0.5 text-[10px] font-bold text-blue-200">
                  ~2026/11/19 (Thu)
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center text-[12px]">
                <div className="rounded border border-[#243049] bg-[#131c2e] p-2">
                  <div className="text-[10px] font-bold text-[#94a3b8]">Character</div>
                  <div className="mt-0.5 text-[13px] font-black text-[#fbbf24]">★★★☆☆</div>
                </div>
                <div className="rounded border border-[#243049] bg-[#131c2e] p-2">
                  <div className="text-[10px] font-bold text-[#94a3b8]">Arcana</div>
                  <div className="mt-0.5 text-[13px] font-black text-[#fbbf24]">★★★★★</div>
                </div>
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#93c5fd] mb-2">Pickup Targets:</div>
                <div className="flex items-center gap-4">
                  {bunnyFrey && (
                    <AppMediaIconCell
                      href={`/starsavior/characters/${bunnyFrey.slug}`}
                      name={bunnyFrey.name}
                      imageUrl={bunnyFrey.imageUrl}
                      rarity="SSR"
                      topLeftIconUrl={bunnyFrey.staticData?.attributeIconUrl}
                      topRightIconUrl={bunnyFrey.staticData?.classIconUrl}
                    />
                  )}
                  {masterpiece && (
                    <AppMediaIconCell
                      href={`/starsavior/arcana#${masterpiece.slug}`}
                      name={masterpiece.name}
                      imageUrl={masterpiece.imageUrl}
                      rarity="SSR"
                      topLeftIconUrl={masterpiece.staticData?.statTagIconUrl}
                      badgeText="SSR"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#28354e] bg-[#131d31] px-3 py-2.5 text-center">
            <Link
              href="/starsavior/guides/which-gacha-to-pull"
              className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-extrabold text-[#60a5fa] hover:text-[#93c5fd] hover:underline"
            >
              <span className="text-[10px] text-[#3b82f6]">▶</span>
              <span>Which Gacha Banner Should You Pull?</span>
            </Link>
          </div>
        </div>

        <AppMediaH3>Related Gacha Articles</AppMediaH3>

        <AppMediaGraphicButtonGrid
          headerLabel="Gacha Related Links"
          items={[
            {
              href: '/starsavior/guides/gacha-rates',
              label: 'Gacha Rates & Pity Ceiling',
              bannerSrc: '/banners/starsavior/buttons/btn_015.webp',
            },
            {
              href: '/starsavior/guides/gacha-animations',
              label: 'Gacha Animations Summary',
              bannerSrc: '/banners/starsavior/buttons/btn_016.webp',
            },
            {
              href: '/starsavior/guides/friendship-gacha',
              label: 'Friendship Gacha',
              bannerSrc: '/banners/starsavior/buttons/btn_017.webp',
            },
            {
              href: '/starsavior/guides/custom-observation',
              label: 'Custom Observation',
              bannerSrc: '/banners/starsavior/buttons/btn_018.webp',
            },
          ]}
        />
      </section>

      {/* =====================================================================
       * SECTION 5: EVENTS & LOGIN BONUS (h2_019_events.webp + icon_022..026)
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3.5">
        <AppMediaBannerH2
          id="events-section"
          bannerSrc="/banners/starsavior/h2/h2_019_events.webp"
          bannerAlt="Star Savior Events"
        >
          Star Savior Events
        </AppMediaBannerH2>

        <AppMediaH3>Active Events & Login Bonuses</AppMediaH3>

        <div className="overflow-hidden rounded border border-[#28354e] bg-[#0f1626]">
          <table className="w-full border-collapse text-[12px]">
            <thead>
              <tr className="border-b border-[#28354e] bg-[#162136] text-[#dbeafe] font-extrabold">
                <th className="w-1/2 border-r border-[#28354e] px-3 py-2 text-center">Event</th>
                <th className="w-1/2 px-3 py-2 text-center">Active Period</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#28354e]">
              <tr>
                <td className="border-r border-[#28354e] p-2.5 text-center">
                  <Link href="/starsavior/guides/valentine-event" className="group inline-block">
                    <img
                      src="/banners/starsavior/eyecatch/valentine_event.webp"
                      alt="Valentine Revival Event"
                      className="mx-auto w-full max-w-[260px] h-auto rounded border border-[#2b3a57] group-hover:border-[#60a5fa]"
                      loading="eager"
                    />
                    <span className="mt-1 block text-[12px] font-bold text-[#60a5fa] group-hover:underline">
                      Valentine Revival Event Guide
                    </span>
                  </Link>
                </td>
                <td className="p-2.5 text-center align-middle text-[#e2e8f0] font-semibold">
                  Until 2026/11/13 03:59:59
                </td>
              </tr>
              <tr>
                <td className="border-r border-[#28354e] p-2.5 text-center">
                  <Link href="/starsavior/guides/valentine-event" className="group inline-block">
                    <img
                      src="/banners/starsavior/eyecatch/golden_fantasia.webp"
                      alt="Golden Fantasia Event"
                      className="mx-auto w-full max-w-[260px] h-auto rounded border border-[#2b3a57] group-hover:border-[#60a5fa]"
                      loading="eager"
                    />
                    <span className="mt-1 block text-[12px] font-bold text-[#60a5fa] group-hover:underline">
                      Golden Fantasia Campaign
                    </span>
                  </Link>
                </td>
                <td className="p-2.5 text-center align-middle text-[#e2e8f0] font-semibold">
                  Started 2026/11/05 12:00:00
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <AppMediaH4>Login Bonus (Held Period: ~Nov 13 [Fri] 04:00)</AppMediaH4>
        <div className="overflow-hidden rounded border border-[#28354e] bg-[#0f1626]">
          <table className="w-full border-collapse text-[12px]">
            <thead>
              <tr className="border-b border-[#28354e] bg-[#162136] text-[#dbeafe] font-extrabold">
                <th className="w-28 border-r border-[#28354e] px-3 py-2 text-center">Day</th>
                <th className="px-3 py-2 text-left">Reward</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#243049]">
              {[
                { day: 'Day 1', icon: '/banners/starsavior/icons/icon_022.webp', item: 'Cafe Invitation Ticket ×10' },
                { day: 'Day 2', icon: '/banners/starsavior/icons/icon_023.webp', item: 'Moonlight Water ×30,000' },
                { day: 'Day 3', icon: '/banners/starsavior/icons/icon_024.webp', item: 'Polaris Support Box ×3' },
                { day: 'Day 4', icon: '/banners/starsavior/icons/icon_025.webp', item: 'Standard Observation Ticket Envelope ×3' },
                { day: 'Day 5', icon: '/banners/starsavior/icons/icon_026.webp', item: 'Cosmic Cube ×1' },
              ].map((r) => (
                <tr key={r.day}>
                  <td className="border-r border-[#243049] px-3 py-2 text-center font-bold text-[#93c5fd]">
                    {r.day}
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2.5 font-semibold text-[#e2e8f0]">
                      <img src={r.icon} alt={r.item} width={30} height={30} className="h-7 w-7 rounded object-contain" loading="eager" />
                      <span>{r.item}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* =====================================================================
       * SECTION 6: RESCUE JOURNEY (h2_027_rescue-journey.webp + btn_028..033)
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3.5">
        <AppMediaBannerH2
          id="rescue-journey"
          bannerSrc="/banners/starsavior/h2/h2_027_rescue-journey.webp"
          bannerAlt="Star Savior Rescue Journey Strategy"
        >
          Star Savior Rescue Journey Strategy
        </AppMediaBannerH2>

        <AppMediaGraphicButtonGrid
          items={[
            {
              href: '/starsavior/guides/rescue-journey-normal',
              label: 'Rescue Journey Normal Guide',
              bannerSrc: '/banners/starsavior/buttons/btn_028.webp',
            },
            {
              href: '/starsavior/guides/rescue-journey-hard',
              label: 'Rescue Journey Hard Guide',
              bannerSrc: '/banners/starsavior/buttons/btn_029.webp',
            },
            {
              href: '/starsavior/guides/blessing-farming',
              label: 'Blessing Farming',
              bannerSrc: '/banners/starsavior/buttons/btn_030.webp',
            },
            {
              href: '/starsavior/guides/shared-events',
              label: 'Rescue Journey Shared Events',
              bannerSrc: '/banners/starsavior/buttons/btn_031.webp',
            },
            {
              href: '/starsavior/guides/rescue-journey-guide',
              label: 'How to Progress Rescue Journey',
              bannerSrc: '/banners/starsavior/buttons/btn_032.webp',
            },
            {
              href: '/starsavior/guides/rescue-journey-tips',
              label: 'When You Cannot Clear',
              bannerSrc: '/banners/starsavior/buttons/btn_033.webp',
            },
          ]}
          footerLinks={[
            { href: '/starsavior/guides/event-choice-checker', label: 'Event Choice Checker' },
          ]}
        />
      </section>

      {/* =====================================================================
       * SECTION 7: OPERATIONS WALKTHROUGH (h2_034_operations.webp + btn_035..037)
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3.5">
        <AppMediaBannerH2
          id="operations-section"
          bannerSrc="/banners/starsavior/h2/h2_034_operations.webp"
          bannerAlt="Star Savior Operations Walkthrough"
        >
          Star Savior Operations Walkthrough
        </AppMediaBannerH2>

        <AppMediaGraphicButtonGrid
          items={[
            {
              href: '/starsavior/guides/operation-1-5',
              label: 'Operation 1-5 Guide',
              bannerSrc: '/banners/starsavior/buttons/btn_035.webp',
            },
            {
              href: '/starsavior/guides/operation-2-12',
              label: 'Operation 2-12 Guide',
              bannerSrc: '/banners/starsavior/buttons/btn_036.webp',
            },
            {
              href: '/starsavior/guides/operation-3-15',
              label: 'Operation 3-15 Guide',
              bannerSrc: '/banners/starsavior/buttons/btn_037.webp',
            },
          ]}
          footerLinks={[
            {
              href: '/starsavior/guides/operations-summary',
              label: 'Operations Walkthrough Summary & Unlocked Features List',
            },
          ]}
        />
      </section>

      {/* =====================================================================
       * SECTION 8: CUBE PALACE (h2_038_cube-palace.webp + btn_039..046)
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3.5">
        <AppMediaBannerH2
          id="cube-palace"
          bannerSrc="/banners/starsavior/h2/h2_038_cube-palace.webp"
          bannerAlt="Star Savior Cube Palace Strategy"
        >
          Star Savior Cube Palace Strategy
        </AppMediaBannerH2>

        <AppMediaGraphicButtonGrid
          items={[
            {
              href: '/starsavior/guides/cube-step-1',
              label: 'Interface',
              bannerSrc: '/banners/starsavior/buttons/btn_039.webp',
            },
            {
              href: '/starsavior/guides/cube-step-2',
              label: 'Kernel',
              bannerSrc: '/banners/starsavior/buttons/btn_040.webp',
            },
            {
              href: '/starsavior/guides/cube-step-3',
              label: 'Assembler',
              bannerSrc: '/banners/starsavior/buttons/btn_041.webp',
            },
            {
              href: '/starsavior/guides/cube-step-4',
              label: 'Firmware',
              bannerSrc: '/banners/starsavior/buttons/btn_042.webp',
            },
            {
              href: '/starsavior/guides/cube-step-5',
              label: 'Mechanics',
              bannerSrc: '/banners/starsavior/buttons/btn_043.webp',
            },
            {
              href: '/starsavior/guides/cube-extra-6',
              label: 'Linker',
              bannerSrc: '/banners/starsavior/buttons/btn_044.webp',
            },
            {
              href: '/starsavior/guides/cube-extra-7',
              label: 'Bootloader',
              bannerSrc: '/banners/starsavior/buttons/btn_045.webp',
            },
            {
              href: '/starsavior/guides/cube-extra-8',
              label: 'Register',
              bannerSrc: '/banners/starsavior/buttons/btn_046.webp',
            },
          ]}
          footerLinks={[
            {
              href: '/starsavior/guides/cube-palace',
              label: 'Cube Palace Strategy Summary & Cheat Codes List',
            },
          ]}
        />
      </section>

      {/* =====================================================================
       * SECTION 9: RECOMMENDED STRATEGY GUIDES (h2_047_strategy-guides.webp + btn_048..061)
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3.5">
        <AppMediaBannerH2
          id="recommended-guides"
          bannerSrc="/banners/starsavior/h2/h2_047_strategy-guides.webp"
          bannerAlt="Star Savior Recommended Strategy Guides"
        >
          Star Savior Recommended Strategy Guides
        </AppMediaBannerH2>

        <AppMediaGraphicButtonGrid
          items={[
            {
              href: '/starsavior/guides/party-formations',
              label: 'Strongest Party Formations',
              bannerSrc: '/banners/starsavior/buttons/btn_048.webp',
            },
            {
              href: '/starsavior/guides/arcana-deck-guide',
              label: 'Arcana Deck Building',
              bannerSrc: '/banners/starsavior/buttons/btn_049.webp',
            },
            {
              href: '/starsavior/guides/quasar-cores',
              label: 'Recommended Quasar Cores',
              bannerSrc: '/banners/starsavior/buttons/btn_050.webp',
            },
            {
              href: '/starsavior/guides/pulsar-cores',
              label: 'Recommended Pulsar Cores',
              bannerSrc: '/banners/starsavior/buttons/btn_051.webp',
            },
            {
              href: '/starsavior/guides/break-skills',
              label: 'Recommended Break Skills',
              bannerSrc: '/banners/starsavior/buttons/btn_052.webp',
            },
            {
              href: '/starsavior/guides/flashpoint',
              label: 'Flashpoint Walkthrough',
              bannerSrc: '/banners/starsavior/buttons/btn_053.webp',
            },
            {
              href: '/starsavior/guides/cube-palace',
              label: 'Cube Palace Walkthrough',
              bannerSrc: '/banners/starsavior/buttons/btn_054.webp',
            },
            {
              href: '/starsavior/guides/interstellar-corridor',
              label: 'Interstellar Corridor Summary',
              bannerSrc: '/banners/starsavior/buttons/btn_055.webp',
            },
            {
              href: '/starsavior/guides/sr-awakening',
              label: 'Recommended SR Awakening',
              bannerSrc: '/banners/starsavior/buttons/btn_056.webp',
            },
            {
              href: '/starsavior/guides/precision-crafting',
              label: 'Precision Crafting',
              bannerSrc: '/banners/starsavior/buttons/btn_057.webp',
            },
            {
              href: '/starsavior/guides/apocalypse-shop',
              label: 'Apocalypse Shop',
              bannerSrc: '/banners/starsavior/buttons/btn_058.webp',
            },
            {
              href: '/starsavior/guides/paid-packs',
              label: 'Recommended Paid Packs',
              bannerSrc: '/banners/starsavior/buttons/btn_059.webp',
            },
            {
              href: '/starsavior/guides/promo-codes',
              label: 'Coupon Codes List',
              bannerSrc: '/banners/starsavior/buttons/btn_060.webp',
            },
            {
              href: '/starsavior/guides/patch-notes',
              label: 'Maintenance & Update Info',
              bannerSrc: '/banners/starsavior/buttons/btn_061.webp',
            },
          ]}
        />
      </section>

      {/* =====================================================================
       * SECTION 10: MECHANICS VERIFICATION (h2_062_mechanics.webp + btn_063..068)
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3.5">
        <AppMediaBannerH2
          id="mechanics-verification"
          bannerSrc="/banners/starsavior/h2/h2_062_mechanics.webp"
          bannerAlt="Star Savior Mechanics Verification & Analysis"
        >
          Star Savior Effect Verification & Combat Mechanics
        </AppMediaBannerH2>

        <AppMediaGraphicButtonGrid
          items={[
            {
              href: '/starsavior/guides/cross-attack',
              label: 'Cross Attack',
              bannerSrc: '/banners/starsavior/buttons/btn_063.webp',
            },
            {
              href: '/starsavior/guides/revenge-attack',
              label: 'Revenge Attack',
              bannerSrc: '/banners/starsavior/buttons/btn_064.webp',
            },
            {
              href: '/starsavior/guides/evade',
              label: 'Evade',
              bannerSrc: '/banners/starsavior/buttons/btn_065.webp',
            },
            {
              href: '/starsavior/guides/defend-forward',
              label: 'Defend Forward',
              bannerSrc: '/banners/starsavior/buttons/btn_066.webp',
            },
            {
              href: '/starsavior/guides/armor-break',
              label: 'Armor Break',
              bannerSrc: '/banners/starsavior/buttons/btn_067.webp',
            },
            {
              href: '/starsavior/guides/hp-recovery',
              label: 'HP Recovery Verification',
              bannerSrc: '/banners/starsavior/buttons/btn_068.webp',
            },
          ]}
        />
      </section>

      {/* =====================================================================
       * SECTION 11: BEGINNER & EARLY GAME (h2_069_beginner-guide.webp + 25 Buttons)
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3.5">
        <AppMediaBannerH2
          id="beginner-guides"
          bannerSrc="/banners/starsavior/h2/h2_069_beginner-guide.webp"
          bannerAlt="Star Savior Beginner & Early-Game Guides"
        >
          Star Savior Beginner & Early-Game Strategy
        </AppMediaBannerH2>

        <AppMediaH3>Must-Read for Beginners!</AppMediaH3>
        <AppMediaGraphicButtonGrid
          items={[
            {
              href: '/starsavior/guides/beginner-progression',
              label: 'Early-Game Progression',
              bannerSrc: '/banners/starsavior/buttons/btn_070.webp',
            },
            {
              href: '/starsavior/guides/how-to-reroll',
              label: 'How to Reroll',
              bannerSrc: '/banners/starsavior/buttons/btn_071.webp',
            },
            {
              href: '/starsavior/guides/daily-routine',
              label: 'Daily To-Do Checklist',
              bannerSrc: '/banners/starsavior/buttons/btn_072.webp',
            },
            {
              href: '/starsavior/guides/rescue-journey-tips',
              label: 'Building High-Rank Archives',
              bannerSrc: '/banners/starsavior/buttons/btn_033.webp',
            },
            {
              href: '/starsavior/guides/equipment-guide',
              label: 'Recommended Equipment',
              bannerSrc: '/banners/starsavior/buttons/btn_073.webp',
            },
            {
              href: '/starsavior/guides/shop-priority',
              label: 'Recommended Shop Items',
              bannerSrc: '/banners/starsavior/buttons/btn_074.webp',
            },
            {
              href: '/starsavior/guides/rescue-journey-guide',
              label: 'Rescue Journey',
              bannerSrc: '/banners/starsavior/buttons/btn_032.webp',
            },
            {
              href: '/starsavior/guides/upgrade-systems',
              label: 'Upgrade Systems',
              bannerSrc: '/banners/starsavior/buttons/btn_075.webp',
            },
          ]}
        />

        <AppMediaH3>Beginner System Explanations</AppMediaH3>
        <AppMediaGraphicButtonGrid
          items={[
            {
              href: '/starsavior/guides/battle-system',
              label: 'Battle System Explained',
              bannerSrc: '/banners/starsavior/buttons/btn_076.webp',
            },
            {
              href: '/starsavior/guides/attribute-matchups',
              label: 'Attribute Matchups Summary',
              bannerSrc: '/banners/starsavior/buttons/btn_077.webp',
            },
            {
              href: '/starsavior/guides/cosmic-attributes',
              label: 'What Are Cosmic Attributes?',
              bannerSrc: '/banners/starsavior/buttons/btn_078.webp',
            },
            {
              href: '/starsavior/guides/character-stats',
              label: 'Character Stats Summary',
              bannerSrc: '/banners/starsavior/buttons/btn_079.webp',
            },
            {
              href: '/starsavior/guides/stellar-archive',
              label: 'Stellar Archive',
              bannerSrc: '/banners/starsavior/buttons/btn_080.webp',
            },
            {
              href: '/starsavior/guides/daily-reset',
              label: 'Daily Reset Time',
              bannerSrc: '/banners/starsavior/buttons/btn_081.webp',
            },
            {
              href: '/starsavior/guides/willpower',
              label: 'How to Use Willpower',
              bannerSrc: '/banners/starsavior/buttons/btn_082.webp',
            },
            {
              href: '/starsavior/guides/sweep-overlap',
              label: 'Sweep & Overlap Battles',
              bannerSrc: '/banners/starsavior/buttons/btn_083.webp',
            },
            {
              href: '/starsavior/guides/noa-support-funds',
              label: 'NOA Support Funds Guide',
              bannerSrc: '/banners/starsavior/buttons/btn_084.webp',
            },
            {
              href: '/starsavior/guides/rescue-hq',
              label: 'Rescue HQ Facilities',
              bannerSrc: '/banners/starsavior/buttons/btn_085.webp',
            },
            {
              href: '/starsavior/guides/profile-settings',
              label: 'Profile Settings',
              bannerSrc: '/banners/starsavior/buttons/btn_086.webp',
            },
            {
              href: '/starsavior/guides/lobby-settings',
              label: 'Lobby Screen Settings',
              bannerSrc: '/banners/starsavior/buttons/btn_087.webp',
            },
            {
              href: '/starsavior/guides/birthday-settings',
              label: 'How to Set Birthday',
              bannerSrc: '/banners/starsavior/buttons/btn_088.webp',
            },
            {
              href: '/starsavior/guides/friends-guide',
              label: 'How to Add Friends',
              bannerSrc: '/banners/starsavior/buttons/btn_089.webp',
            },
            {
              href: '/starsavior/guides/guild-guide',
              label: 'Guild Guide & Rewards',
              bannerSrc: '/banners/starsavior/buttons/btn_090.webp',
            },
            {
              href: '/starsavior/guides/steam-pc',
              label: 'How to Play on PC (Steam)',
              bannerSrc: '/banners/starsavior/buttons/btn_091.webp',
            },
            {
              href: '/starsavior/guides/account-linking',
              label: 'How to Link Account',
              bannerSrc: '/banners/starsavior/buttons/btn_092.webp',
            },
          ]}
        />
      </section>

      {/* =====================================================================
       * SECTION 12: CHARACTERS (h2_093_characters.webp + icon_094..104 + 57 Units)
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaBannerH2
          id="characters-section"
          bannerSrc="/banners/starsavior/h2/h2_093_characters.webp"
          bannerAlt="Star Savior Characters"
          badge="57 SAVIORS"
        >
          Star Savior Characters
        </AppMediaBannerH2>

        <div className="overflow-x-auto rounded border border-[#28354e] bg-[#0f1626]">
          <table className="w-full border-collapse text-[12px]">
            <tbody className="divide-y divide-[#243049]">
              <tr>
                <th className="w-32 bg-[#162136] px-3 py-2.5 text-center font-extrabold text-[#dbeafe] border-r border-[#28354e]">
                  Rarity / Pool
                </th>
                <td className="p-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link href="/starsavior/characters" className="rounded bg-[#1e293b] hover:bg-[#2563eb] px-2.5 py-1 font-bold text-white">
                      Character List ({characters.length})
                    </Link>
                    <Link href="/starsavior/characters" className="rounded bg-[#1e293b] hover:bg-[#2563eb] px-2.5 py-1 font-bold text-[#fbbf24]">
                      SSR ({ssrChars.length})
                    </Link>
                    <Link href="/starsavior/characters" className="rounded bg-[#1e293b] hover:bg-[#2563eb] px-2.5 py-1 font-bold text-[#d8b4fe]">
                      SR ({srChars.length})
                    </Link>
                    <Link href="/starsavior/characters" className="rounded bg-[#1e293b] hover:bg-[#2563eb] px-2.5 py-1 font-bold text-[#93c5fd]">
                      Limited
                    </Link>
                    <Link href="/starsavior/characters" className="rounded bg-[#1e293b] hover:bg-[#2563eb] px-2.5 py-1 font-bold text-[#cbd5e1]">
                      Standard
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="bg-[#162136] px-3 py-2.5 text-center font-extrabold text-[#dbeafe] border-r border-[#28354e]">
                  Attributes
                </th>
                <td className="p-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      { label: 'Sun', icon: '/banners/starsavior/icons/icon_094.webp' },
                      { label: 'Star', icon: '/banners/starsavior/icons/icon_095.webp' },
                      { label: 'Moon', icon: '/banners/starsavior/icons/icon_096.webp' },
                      { label: 'Order', icon: '/banners/starsavior/icons/icon_097.webp' },
                      { label: 'Chaos', icon: '/banners/starsavior/icons/icon_098.webp' },
                    ].map((attr) => (
                      <Link
                        key={attr.label}
                        href="/starsavior/characters"
                        className="inline-flex items-center gap-1.5 rounded bg-[#161f33] hover:bg-[#1e293b] border border-[#263452] px-2.5 py-1 font-bold text-[#e2e8f0]"
                      >
                        <img src={attr.icon} alt={attr.label} width={20} height={20} className="h-5 w-5 object-contain" loading="eager" />
                        <span>{attr.label}</span>
                      </Link>
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <th className="bg-[#162136] px-3 py-2.5 text-center font-extrabold text-[#dbeafe] border-r border-[#28354e]">
                  Classes
                </th>
                <td className="p-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      { label: 'Defender', icon: '/banners/starsavior/icons/icon_099.webp' },
                      { label: 'Striker', icon: '/banners/starsavior/icons/icon_100.webp' },
                      { label: 'Ranger', icon: '/banners/starsavior/icons/icon_101.webp' },
                      { label: 'Caster', icon: '/banners/starsavior/icons/icon_102.webp' },
                      { label: 'Assassin', icon: '/banners/starsavior/icons/icon_103.webp' },
                      { label: 'Supporter', icon: '/banners/starsavior/icons/icon_104.webp' },
                    ].map((cls) => (
                      <Link
                        key={cls.label}
                        href="/starsavior/characters"
                        className="inline-flex items-center gap-1.5 rounded bg-[#161f33] hover:bg-[#1e293b] border border-[#263452] px-2.5 py-1 font-bold text-[#e2e8f0]"
                      >
                        <img src={cls.icon} alt={cls.label} width={20} height={20} className="h-5 w-5 object-contain" loading="eager" />
                        <span>{cls.label}</span>
                      </Link>
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <AppMediaH3>SSR ({ssrChars.length})</AppMediaH3>
        <div className="flex flex-wrap gap-2.5 pt-1">
          {ssrChars.map((c) => (
            <AppMediaIconCell
              key={c.slug}
              href={`/starsavior/characters/${c.slug}`}
              name={c.name}
              imageUrl={c.imageUrl}
              rarity="SSR"
              topLeftIconUrl={c.staticData?.attributeIconUrl}
              topRightIconUrl={c.staticData?.classIconUrl}
              size="md"
            />
          ))}
        </div>

        <AppMediaH3>SR ({srChars.length})</AppMediaH3>
        <div className="flex flex-wrap gap-2.5 pt-1">
          {srChars.map((c) => (
            <AppMediaIconCell
              key={c.slug}
              href={`/starsavior/characters/${c.slug}`}
              name={c.name}
              imageUrl={c.imageUrl}
              rarity="SR"
              topLeftIconUrl={c.staticData?.attributeIconUrl}
              topRightIconUrl={c.staticData?.classIconUrl}
              size="md"
            />
          ))}
        </div>
      </section>

      {/* =====================================================================
       * SECTION 13: ARCANA (h2_105_arcana.webp + All 83 Arcana Cards)
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaBannerH2
          id="arcana-section"
          bannerSrc="/banners/starsavior/h2/h2_105_arcana.webp"
          bannerAlt="Star Savior Arcana"
          badge="83 CARDS"
        >
          Star Savior Arcana
        </AppMediaBannerH2>

        <div className="overflow-x-auto rounded border border-[#28354e] bg-[#0f1626]">
          <table className="w-full border-collapse text-[12px]">
            <tbody className="divide-y divide-[#243049]">
              <tr>
                <th className="w-32 bg-[#162136] px-3 py-2.5 text-center font-extrabold text-[#dbeafe] border-r border-[#28354e]">
                  By Rarity
                </th>
                <td className="p-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link href="/starsavior/arcana" className="rounded bg-[#1e293b] hover:bg-[#2563eb] px-2.5 py-1 font-bold text-white">
                      Arcana List ({arcana.length})
                    </Link>
                    <Link href="/starsavior/arcana" className="rounded bg-[#1e293b] hover:bg-[#2563eb] px-2.5 py-1 font-bold text-[#fbbf24]">
                      SSR ({ssrArcana.length})
                    </Link>
                    <Link href="/starsavior/arcana" className="rounded bg-[#1e293b] hover:bg-[#2563eb] px-2.5 py-1 font-bold text-[#d8b4fe]">
                      SR ({srArcana.length})
                    </Link>
                    <Link href="/starsavior/arcana" className="rounded bg-[#1e293b] hover:bg-[#2563eb] px-2.5 py-1 font-bold text-[#7dd3fc]">
                      R ({rArcana.length})
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="bg-[#162136] px-3 py-2.5 text-center font-extrabold text-[#dbeafe] border-r border-[#28354e]">
                  By Stat Tag
                </th>
                <td className="p-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    {['Power', 'Health', 'Endurance', 'Focus', 'Protect'].map((tag) => (
                      <Link
                        key={tag}
                        href="/starsavior/arcana"
                        className="rounded bg-[#161f33] hover:bg-[#1e293b] border border-[#263452] px-2.5 py-1 font-bold text-[#e2e8f0]"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <AppMediaH3>SSR ({ssrArcana.length})</AppMediaH3>
        <div className="flex flex-wrap gap-2.5 pt-1">
          {ssrArcana.map((a) => (
            <AppMediaIconCell
              key={a.slug}
              href={`/starsavior/arcana#${a.slug}`}
              name={a.name}
              imageUrl={a.imageUrl}
              rarity="SSR"
              topLeftIconUrl={a.staticData?.statTagIconUrl}
              badgeText={a.staticData?.statTag}
              size="md"
            />
          ))}
        </div>

        <AppMediaH3>SR ({srArcana.length})</AppMediaH3>
        <div className="flex flex-wrap gap-2.5 pt-1">
          {srArcana.map((a) => (
            <AppMediaIconCell
              key={a.slug}
              href={`/starsavior/arcana#${a.slug}`}
              name={a.name}
              imageUrl={a.imageUrl}
              rarity="SR"
              topLeftIconUrl={a.staticData?.statTagIconUrl}
              badgeText={a.staticData?.statTag}
              size="md"
            />
          ))}
        </div>

        <AppMediaH3>R ({rArcana.length})</AppMediaH3>
        <div className="flex flex-wrap gap-2.5 pt-1">
          {rArcana.map((a) => (
            <AppMediaIconCell
              key={a.slug}
              href={`/starsavior/arcana#${a.slug}`}
              name={a.name}
              imageUrl={a.imageUrl}
              rarity="R"
              topLeftIconUrl={a.staticData?.statTagIconUrl}
              badgeText={a.staticData?.statTag}
              size="sm"
            />
          ))}
        </div>
      </section>

      {/* =====================================================================
       * SECTION 14: DATABASE (h2_106_database.webp + btn_107..113)
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3.5">
        <AppMediaBannerH2
          id="database-section"
          bannerSrc="/banners/starsavior/h2/h2_106_database.webp"
          bannerAlt="Star Savior Database"
        >
          Star Savior Database
        </AppMediaBannerH2>

        <AppMediaH3>Database</AppMediaH3>

        <AppMediaGraphicButtonGrid
          items={[
            {
              href: '/starsavior/characters',
              label: 'Character List',
              bannerSrc: '/banners/starsavior/buttons/btn_107.webp',
            },
            {
              href: '/starsavior/guides/character-stats-list',
              label: 'Character Stats List',
              bannerSrc: '/banners/starsavior/buttons/btn_108.webp',
            },
            {
              href: '/starsavior/arcana',
              label: 'Arcana List',
              bannerSrc: '/banners/starsavior/buttons/btn_109.webp',
            },
            {
              href: '/starsavior/guides/ark-point-list',
              label: 'Ark Point List',
              bannerSrc: '/banners/starsavior/buttons/btn_110.webp',
            },
            {
              href: '/starsavior/guides/birthday-calendar',
              label: 'Birthday List',
              bannerSrc: '/banners/starsavior/buttons/btn_111.webp',
            },
            {
              href: '/starsavior/guides/voice-actors',
              label: 'Voice Actor List',
              bannerSrc: '/banners/starsavior/buttons/btn_112.webp',
            },
            {
              href: '/starsavior/guides/skins-list',
              label: 'Skins List',
              bannerSrc: '/banners/starsavior/buttons/btn_113.webp',
            },
          ]}
        />
      </section>

      {/* =====================================================================
       * SECTION 15: BULLETIN BOARDS (h2_114_forums.webp + btn_115..117)
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3.5">
        <AppMediaBannerH2
          id="bulletin-boards"
          bannerSrc="/banners/starsavior/h2/h2_114_forums.webp"
          bannerAlt="Star Savior Bulletin Boards"
        >
          Star Savior Bulletin Boards
        </AppMediaBannerH2>

        <AppMediaGraphicButtonGrid
          items={[
            {
              href: '/starsavior/guides/general-board',
              label: 'General Chat & Questions',
              bannerSrc: '/banners/starsavior/buttons/btn_115.webp',
            },
            {
              href: '/starsavior/guides/friend-board',
              label: 'Friend Recruitment',
              bannerSrc: '/banners/starsavior/buttons/btn_116.webp',
            },
            {
              href: '/starsavior/guides/guild-board',
              label: 'Guild Recruitment',
              bannerSrc: '/banners/starsavior/buttons/btn_117.webp',
            },
          ]}
        />
      </section>

      {/* =====================================================================
       * SECTION 16: FAQ (h2_118_faq.webp + Exact 5 AppMedia Q&As)
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3.5">
        <AppMediaBannerH2
          id="faq-section"
          bannerSrc="/banners/starsavior/h2/h2_118_faq.webp"
          bannerAlt="Star Savior Frequently Asked Questions"
        >
          Star Savior Frequently Asked Questions
        </AppMediaBannerH2>

        <div className="space-y-3">
          {[
            {
              q: 'What kind of game is Star Savior?',
              a: 'Star Savior is a content-packed Training RPG that fuses Training Simulation × Turn-Based Command Battles × Idle Progression mechanics.',
            },
            {
              q: 'Can I play Star Savior on PC?',
              a: 'Yes — Star Savior is playable on PC via the official Steam version with full cross-save account linking.',
            },
            {
              q: 'Can I change my name, and are duplicate names allowed?',
              a: 'Both changing your name and using duplicate Commander names are supported. Changing your name requires a dedicated item: your first name change is effectively free, while subsequent changes require purchasing the rename item with Starlight Stones (Astral Gems), so frequent name changes are not recommended.',
            },
            {
              q: 'What should I exchange Observation Reports for?',
              a: 'As a rule of thumb, prioritize discounted sale items first. Next in line is the Break Skill Support Plan, though raising Break Skill levels offers relatively modest returns—so if you are short on Observation Reports, you can safely skip it.',
            },
            {
              q: 'What should I do if I cannot clear Rescue Journey?',
              a: 'First, raise your Savior\'s Resonance Stage to boost starting Rescue Journey stats. Second, prepare parent Stellar Archives with strong Stat Blessings. Clearing Rescue Journey comes down to your overall evaluation rank, so select training options that keep your total rank as high as possible.',
            },
          ].map((item, idx) => (
            <div key={idx} className="overflow-hidden rounded border border-[#28354e] bg-[#0f1626]">
              <div className="border-b border-[#243049] bg-[#162136] px-3.5 py-2.5 text-[13px] font-extrabold text-[#f8fafc] flex items-center gap-2">
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#2563eb] text-[11px] font-black text-white">
                  Q
                </span>
                <span>{item.q}</span>
              </div>
              <div className="px-3.5 py-3 text-[12.5px] leading-relaxed text-[#cbd5e1] flex items-start gap-2">
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#e86c58] text-[11px] font-black text-white mt-0.5">
                  A
                </span>
                <span>{item.a}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
       * SECTION 17: BASIC GAME INFO (h2_119_game-info.webp + Store Badges + 3 Showcases)
       * ===================================================================== */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaBannerH2
          id="basic-game-info"
          bannerSrc="/banners/starsavior/h2/h2_119_game-info.webp"
          bannerAlt="What is Star Savior? Basic Game Information"
        >
          What is Star Savior? Basic Game Information
        </AppMediaBannerH2>

        {/* Official Spec Table */}
        <div className="overflow-hidden rounded border border-[#28354e] bg-[#0f1626]">
          <table className="w-full border-collapse text-[12px]">
            <tbody className="divide-y divide-[#243049]">
              <tr>
                <th className="w-36 bg-[#162136] px-3.5 py-2.5 text-left font-extrabold text-[#dbeafe] border-r border-[#28354e]">
                  Title
                </th>
                <td className="px-3.5 py-2.5 font-bold text-white">Star Savior</td>
              </tr>
              <tr>
                <th className="bg-[#162136] px-3.5 py-2.5 text-left font-extrabold text-[#dbeafe] border-r border-[#28354e]">
                  Genre
                </th>
                <td className="px-3.5 py-2.5 text-[#e2e8f0]">Training RPG</td>
              </tr>
              <tr>
                <th className="bg-[#162136] px-3.5 py-2.5 text-left font-extrabold text-[#dbeafe] border-r border-[#28354e]">
                  Price
                </th>
                <td className="px-3.5 py-2.5 text-[#e2e8f0]">Free-to-Play (Optional In-App Purchases)</td>
              </tr>
              <tr>
                <th className="bg-[#162136] px-3.5 py-2.5 text-left font-extrabold text-[#dbeafe] border-r border-[#28354e]">
                  Platforms
                </th>
                <td className="px-3.5 py-2.5 font-semibold text-[#93c5fd]">PC (Steam) / iOS / Android</td>
              </tr>
              <tr>
                <th className="bg-[#162136] px-3.5 py-2.5 text-left font-extrabold text-[#dbeafe] border-r border-[#28354e]">
                  Official Website
                </th>
                <td className="px-3.5 py-2.5">
                  <a
                    href="https://starsavior.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#60a5fa] hover:underline"
                  >
                    Star Savior Official Website ↗
                  </a>
                </td>
              </tr>
              <tr>
                <th className="bg-[#162136] px-3.5 py-2.5 text-left font-extrabold text-[#dbeafe] border-r border-[#28354e]">
                  Official X
                </th>
                <td className="px-3.5 py-2.5">
                  <a
                    href="https://x.com/StarSavior_JP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#60a5fa] hover:underline"
                  >
                    Star Savior Official X (Twitter) ↗
                  </a>
                </td>
              </tr>
              <tr>
                <th className="bg-[#162136] px-3.5 py-2.5 text-left font-extrabold text-[#dbeafe] border-r border-[#28354e]">
                  Copyright
                </th>
                <td className="px-3.5 py-2.5 text-[11px] text-[#94a3b8]">
                  © 2025 STUDIOBSIDE Co. Ltd All Rights Reserved.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Download Store Badges */}
        <div className="rounded border border-[#28354e] bg-[#0f1626] p-3.5 text-center space-y-2.5">
          <div className="text-[13px] font-extrabold text-[#f8fafc]">Download Star Savior Here!</div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src="/banners/starsavior/eyecatch/badge_appstore_en.webp"
                alt="Download on the App Store"
                width={180}
                height={54}
                className="h-12 w-auto object-contain"
                loading="eager"
              />
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src="/banners/starsavior/eyecatch/badge_googleplay_en.webp"
                alt="Get it on Google Play"
                width={182}
                height={54}
                className="h-12 w-auto object-contain"
                loading="eager"
              />
            </a>
          </div>
        </div>

        {/* 4 Official Feature Subsections + 3 Localized Showcase Banners */}
        <div className="space-y-4 text-[12.5px] leading-relaxed text-[#cbd5e1]">
          <div className="space-y-2">
            <AppMediaH3>A Training RPG Adventure to Save Stars Losing Their Light</AppMediaH3>
            <p>
              <strong className="text-white">Star Savior</strong> is a Training RPG where you embark on an adventure to restore stars fading into darkness. Set in a rich universe blending fantasy, magic, and sci-fi, the story follows the Saviors who seek the legacy of the legendary Star Savior.
            </p>
          </div>

          <div className="space-y-2.5">
            <AppMediaH3>&quot;Rescue Journey&quot; With Maidens Bearing the Power of the Stars</AppMediaH3>
            <div className="overflow-hidden rounded border border-[#28354e] bg-[#0b101b]">
              <img
                src="/banners/starsavior/eyecatch/gameinfo_01.webp"
                alt="Star Savior Rescue Journey Showcase"
                width={600}
                height={338}
                className="w-full h-auto block"
                loading="eager"
              />
            </div>
            <p>
              As the <strong className="text-white">Captain of the Rescue Corps</strong>, you guide star-blessed maidens—known as Saviors—on a journey to save the world, brought to life with expressive, high-quality anime 3D graphics.
            </p>
          </div>

          <div className="space-y-2.5">
            <AppMediaH3>Flashy Turn-Based Command Skill Battles</AppMediaH3>
            <div className="overflow-hidden rounded border border-[#28354e] bg-[#0b101b]">
              <img
                src="/banners/starsavior/eyecatch/gameinfo_02.webp"
                alt="Star Savior Turn-Based Skill Battle Showcase"
                width={600}
                height={338}
                className="w-full h-auto block"
                loading="eager"
              />
            </div>
            <p>
              Combat unfolds in strategic turn-based command battles. Master each character&apos;s distinct skills, Toughness Break timing, and elemental attributes alongside dazzling 3D Ultimate cutscenes.
            </p>
          </div>

          <div className="space-y-2.5">
            <AppMediaH3>Character Training & Affinity Interactions</AppMediaH3>
            <div className="overflow-hidden rounded border border-[#28354e] bg-[#0b101b]">
              <img
                src="/banners/starsavior/eyecatch/gameinfo_03.webp"
                alt="Star Savior Character Training & Interaction Showcase"
                width={600}
                height={338}
                className="w-full h-auto block"
                loading="eager"
              />
            </div>
            <p>
              Deep character raising and bond/affinity systems let you enjoy Training schedules, Rest outings, Cafe invitations, and HQ commissions alongside your favorite Saviors.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Footer + Comments */}
      <AppMediaStrategyFooter characters={characters} />
    </div>
  );
}
