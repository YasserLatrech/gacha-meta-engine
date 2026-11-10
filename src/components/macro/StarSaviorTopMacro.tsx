import React from 'react';
import Link from 'next/link';
import type { GameWikiDataset } from '@/domain/schemas';
import {
  AppMediaH2,
  AppMediaH3,
  AppMediaH4,
  AppMediaTableLink,
  AppMediaIconCell,
} from '@/components/micro/AppMediaHeadings';
import { AppMediaLatestUpdatesTabs } from '@/components/medium/AppMediaTocAndWidgets';
import { AppMediaStrategyFooter } from '@/components/medium/AppMediaStrategyBlocks';

const TOP_INDEX_CELLS = [
  { label: 'Latest Updates', href: '#latest-updates' },
  { label: 'Rankings', href: '#rankings-section' },
  { label: 'Strategy Tools', href: '#useful-tools' },
  { label: 'Gacha', href: '#gacha-section' },
  { label: 'Events', href: '#events-section' },
  { label: 'Rescue Journey', href: '#rescue-journey' },
  { label: 'Operations', href: '#operations-section' },
  { label: 'Cube Palace', href: '#cube-palace' },
  { label: 'Recommended Guides', href: '#recommended-guides' },
  { label: 'Effect Verification', href: '#mechanics-verification' },
  { label: 'Beginner & Early Game', href: '#beginner-guides' },
  { label: 'Characters (57)', href: '#characters-section' },
  { label: 'Arcana (83)', href: '#arcana-section' },
  { label: 'Database', href: '#database-section' },
  { label: 'Bulletin Boards', href: '#bulletin-boards' },
  { label: 'FAQ', href: '#faq-section' },
  { label: 'Basic Game Info', href: '#basic-game-info' },
  { label: 'Tier List Matrix', href: '/starsavior/tier-list' },
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
  const amora = characters.find((c) => c.slug === 'amora') || ssrChars[0];
  const harshTrial = arcana.find((a) => a.name.toLowerCase().includes('harsh') || a.staticData?.characterName === 'Maid Ceres') || ssrArcana[0];
  const masterpiece = arcana.find((a) => a.name.toLowerCase().includes('masterpiece')) || ssrArcana[1];

  return (
    <div className="space-y-6">
      {/* Article Title Box (H1: スターセイヴァー攻略｜スタセイwiki) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-3">
        <div className="flex items-center gap-3">
          <img
            src={game.iconUrl}
            alt="Star Savior"
            className="h-14 w-14 rounded-xl border border-[#3b82f6]/50 object-cover shrink-0"
            loading="eager"
          />
          <div>
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#93c5fd]">
              <span className="rounded bg-[#2563eb] px-2 py-0.5 text-white font-extrabold">UPDATED DAILY</span>
              <span>{game.patchVersion}</span>
              <span>•</span>
              <span className="text-[#94a3b8]">57 Saviors · 83 Arcana Cards</span>
            </div>
            <h1 className="mt-1 text-xl sm:text-2xl font-black tracking-tight text-white">
              Star Savior Strategy Wiki | Complete Guide & Database
            </h1>
          </div>
        </div>
        <p className="text-[12px] text-[#cbd5e1] leading-relaxed">
          Welcome to the Star Savior Strategy Wiki. This encyclopedia covers the Strongest Character Tier List, Reroll Stopping Line, all 57 playable Saviors, all 83 Arcana cards, Rescue Journey Hard Mode potentials, Operation boss walkthroughs, and Cube Palace guides.
        </p>

        {/* 18-Cell Top Page Index Table (スターセイヴァー攻略の目次) */}
        <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626]">
          <div className="border-b border-[#243049] bg-[#161f33] px-3.5 py-2 text-center text-[12px] font-extrabold text-[#f8fafc]">
            Star Savior Strategy Table of Contents
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 divide-x divide-y divide-[#1e293b]">
            {TOP_INDEX_CELLS.map((cell) => (
              <a
                key={cell.label}
                href={cell.href}
                className="flex items-center justify-center px-2 py-2.5 text-center text-[11px] font-bold text-[#60a5fa] hover:bg-[#17223b] hover:text-white transition-colors"
              >
                {cell.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* H2: スターセイヴァー攻略の最新更新情報 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="latest-updates" badge="LIVE">
          Star Savior Strategy Latest Updates
        </AppMediaH2>
        <AppMediaLatestUpdatesTabs />

        {/* Strategy Team Box (スタセイ攻略班) */}
        <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="text-[12px] font-extrabold text-[#93c5fd]">Star Savior Strategy Verification Team</div>
            <p className="text-[11px] text-[#94a3b8]">
              Delivering daily Star Savior tier list updates, damage formula verifications, Rescue Journey event choice lookups, and Cosmo Gate boss clear lineups!
            </p>
          </div>
          <Link
            href="/starsavior/tier-list"
            className="shrink-0 rounded bg-[#2563eb] hover:bg-[#1d4ed8] px-3.5 py-2 text-[11px] font-extrabold text-white"
          >
            ▶ View Latest Tier List
          </Link>
        </div>
      </section>

      {/* H2: スターセイヴァーのランキング */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="rankings-section" badge="META">
          Star Savior Rankings & Tier Lists
        </AppMediaH2>
        <AppMediaH3>Various Star Savior Rankings</AppMediaH3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href="/starsavior/tier-list"
            className="group relative overflow-hidden rounded-lg border border-[#2e3d5c] bg-[#0f1626] p-3.5 hover:border-[#3b82f6] transition-colors flex items-center gap-3.5"
          >
            <img
              src="https://appmedia.jp/wp-content/uploads/2026/09/205900_h5bcs.webp"
              alt="Strongest Character Tier List"
              className="h-16 w-16 rounded-lg border border-[#3b82f6]/50 object-cover shrink-0"
              loading="eager"
            />
            <div>
              <span className="inline-block rounded bg-red-600 px-1.5 py-0.5 text-[9px] font-black text-white">SSS–C TIER</span>
              <div className="mt-0.5 text-[14px] font-extrabold text-white group-hover:text-[#60a5fa]">
                Strongest Character Ranking
              </div>
              <p className="text-[11px] text-[#94a3b8]">All 57 Saviors ranked across PvE, Boss & Gauntlet</p>
            </div>
          </Link>

          <Link
            href="/starsavior/arcana"
            className="group relative overflow-hidden rounded-lg border border-[#2e3d5c] bg-[#0f1626] p-3.5 hover:border-[#3b82f6] transition-colors flex items-center gap-3.5"
          >
            <img
              src="https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp"
              alt="Strongest Arcana Tier List"
              className="h-16 w-16 rounded-lg border border-[#eab308]/60 object-cover shrink-0"
              loading="eager"
            />
            <div>
              <span className="inline-block rounded bg-amber-600 px-1.5 py-0.5 text-[9px] font-black text-white">83 CARDS</span>
              <div className="mt-0.5 text-[14px] font-extrabold text-white group-hover:text-[#60a5fa]">
                Strongest Arcana Ranking
              </div>
              <p className="text-[11px] text-[#94a3b8]">Best Power, Endurance & Vitality Special Potentials</p>
            </div>
          </Link>

          <Link
            href="/starsavior/tier-list"
            className="group relative overflow-hidden rounded-lg border border-[#2e3d5c] bg-[#0f1626] p-3.5 hover:border-[#3b82f6] transition-colors flex items-center gap-3.5"
          >
            <img
              src={amora.imageUrl}
              alt="PvP Strongest Characters"
              className="h-16 w-16 rounded-lg border border-[#a855f7]/60 object-cover shrink-0"
              loading="eager"
            />
            <div>
              <span className="inline-block rounded bg-purple-600 px-1.5 py-0.5 text-[9px] font-black text-white">GAUNTLET</span>
              <div className="mt-0.5 text-[14px] font-extrabold text-white group-hover:text-[#60a5fa]">
                PvP Strongest Character Ranking
              </div>
              <p className="text-[11px] text-[#94a3b8]">Speed cleave, Evasion counter & Preemptive Guard meta</p>
            </div>
          </Link>

          <Link
            href="/starsavior/reroll"
            className="group relative overflow-hidden rounded-lg border border-[#2e3d5c] bg-[#0f1626] p-3.5 hover:border-[#3b82f6] transition-colors flex items-center gap-3.5"
          >
            <img
              src="https://appmedia.jp/wp-content/uploads/2026/05/121623_3y1g7.webp"
              alt="Reroll Ranking"
              className="h-16 w-16 rounded-lg border border-[#10b981]/60 object-cover shrink-0"
              loading="eager"
            />
            <div>
              <span className="inline-block rounded bg-emerald-600 px-1.5 py-0.5 text-[9px] font-black text-white">STARTER</span>
              <div className="mt-0.5 text-[14px] font-extrabold text-white group-hover:text-[#60a5fa]">
                Reroll Ranking & Stopping Line
              </div>
              <p className="text-[11px] text-[#94a3b8]">Best starting SSR Saviors & SSR Arcana targets</p>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          <AppMediaTableLink href="/starsavior/characters?rarity=SR" label="Recommended SR Characters & Awakening Priority" badge="SR" />
          <AppMediaTableLink href="/starsavior/arcana?rarity=SR" label="Recommended SR Arcana Cards for Budget Decks" badge="SR" />
        </div>
      </section>

      {/* H2: スターセイヴァー攻略のお役立ちツール */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="useful-tools">Star Savior Useful Strategy Tools</AppMediaH2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <AppMediaTableLink href="/starsavior/tier-list" label="Character Tier List Matrix Filter" badge="TOOL" />
          <AppMediaTableLink href="/starsavior/arcana" label="Arcana Potential & Tag Filter Tool" badge="TOOL" />
          <AppMediaTableLink href="/starsavior/characters" label="Lv.200 Combat Stats & Journey Calculator" badge="TOOL" />
        </div>
      </section>

      {/* H2: スターセイヴァーのガチャ */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="gacha-section" badge="PICKUP">
          Star Savior Gacha Banners & Pull Priority
        </AppMediaH2>
        <AppMediaH3>Currently Active Gacha Banners</AppMediaH3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* Maid Ceres Gacha Table */}
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] overflow-hidden">
            <div className="border-b border-[#243049] bg-[#161f33] px-3.5 py-2 flex items-center justify-between">
              <span className="text-[13px] font-extrabold text-white">Maid Ceres Pickup Observation Gacha</span>
              <span className="rounded bg-red-600/30 border border-red-500/40 px-2 py-0.5 text-[10px] font-bold text-red-200">
                Until 2026/11/13 (Fri)
              </span>
            </div>
            <div className="p-3.5 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-center text-[12px]">
                <div className="rounded border border-[#1e293b] bg-[#131b2e] p-2">
                  <div className="text-[10px] font-bold text-[#94a3b8]">Character Recommendation</div>
                  <div className="mt-0.5 text-[14px] font-black text-[#fbbf24]">★★★★★</div>
                </div>
                <div className="rounded border border-[#1e293b] bg-[#131b2e] p-2">
                  <div className="text-[10px] font-bold text-[#94a3b8]">Arcana Recommendation</div>
                  <div className="mt-0.5 text-[14px] font-black text-[#fbbf24]">★★★★☆</div>
                </div>
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#93c5fd] mb-2">Pickup Rate-Up Targets:</div>
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
                  {harshTrial && (
                    <AppMediaIconCell
                      href={`/starsavior/arcana#${harshTrial.slug}`}
                      name={harshTrial.name}
                      imageUrl={harshTrial.imageUrl}
                      rarity="SSR"
                      topLeftIconUrl={harshTrial.staticData?.statTagIconUrl}
                      badgeText="SSR"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bunny Frey Gacha Table */}
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] overflow-hidden">
            <div className="border-b border-[#243049] bg-[#161f33] px-3.5 py-2 flex items-center justify-between">
              <span className="text-[13px] font-extrabold text-white">Bunny Frey Pickup Observation Gacha</span>
              <span className="rounded bg-blue-600/30 border border-blue-500/40 px-2 py-0.5 text-[10px] font-bold text-blue-200">
                Until 2026/11/19 (Thu)
              </span>
            </div>
            <div className="p-3.5 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-center text-[12px]">
                <div className="rounded border border-[#1e293b] bg-[#131b2e] p-2">
                  <div className="text-[10px] font-bold text-[#94a3b8]">Character Recommendation</div>
                  <div className="mt-0.5 text-[14px] font-black text-[#fbbf24]">★★★☆☆</div>
                </div>
                <div className="rounded border border-[#1e293b] bg-[#131b2e] p-2">
                  <div className="text-[10px] font-bold text-[#94a3b8]">Arcana Recommendation</div>
                  <div className="mt-0.5 text-[14px] font-black text-[#fbbf24]">★★★★★</div>
                </div>
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#93c5fd] mb-2">Pickup Rate-Up Targets:</div>
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
        </div>

        <AppMediaH3>Related Gacha System Guides</AppMediaH3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <AppMediaTableLink href="/starsavior/reroll#how-to-reroll" label="Gacha Rates, Pity Ceiling & 200 Mileage System" />
          <AppMediaTableLink href="/starsavior/reroll" label="Gacha Pull Animations & Guaranteed SSR Tells" />
          <AppMediaTableLink href="/starsavior/reroll" label="Friendship Point Gacha Rates & Rewards" />
          <AppMediaTableLink href="/starsavior/reroll" label="Custom Observation Wishlist Selection Guide" />
        </div>
      </section>

      {/* H2: スターセイヴァーのイベント */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="events-section">Star Savior Active Events & Login Bonuses</AppMediaH2>
        <AppMediaH3>Active Events & Login Campaigns</AppMediaH3>

        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[12px]">
            <thead>
              <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold text-[#94a3b8]">
                <th className="px-3.5 py-2 border-r border-[#243049]">Event Name</th>
                <th className="px-3.5 py-2">Active Period</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]">
              <tr>
                <td className="px-3.5 py-2.5 font-bold text-white border-r border-[#1e293b]">
                  Revival Valentine Special Story Event
                </td>
                <td className="px-3.5 py-2.5 text-[#cbd5e1]">2026/11/05 12:00 – 2026/11/13 03:59</td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-bold text-white border-r border-[#1e293b]">
                  Cosmo Gate Season P7 Boss Challenge
                </td>
                <td className="px-3.5 py-2.5 text-[#cbd5e1]">Ongoing Season — Weekly Ranking Rewards</td>
              </tr>
            </tbody>
          </table>
        </div>

        <AppMediaH4>Special 5-Day Login Bonus Campaign (Until Nov 13, 04:00)</AppMediaH4>
        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[12px]">
            <thead>
              <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold text-[#94a3b8]">
                <th className="w-28 px-3.5 py-2 border-r border-[#243049]">Login Day</th>
                <th className="px-3.5 py-2">Reward Item</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]">
              <tr>
                <td className="px-3.5 py-2 font-bold text-[#93c5fd] border-r border-[#1e293b]">Day 1</td>
                <td className="px-3.5 py-2 text-[#e2e8f0]">Cafe Invitation Ticket ×10</td>
              </tr>
              <tr>
                <td className="px-3.5 py-2 font-bold text-[#93c5fd] border-r border-[#1e293b]">Day 2</td>
                <td className="px-3.5 py-2 text-[#e2e8f0]">Moonlight Water ×30,000</td>
              </tr>
              <tr>
                <td className="px-3.5 py-2 font-bold text-[#93c5fd] border-r border-[#1e293b]">Day 3</td>
                <td className="px-3.5 py-2 text-[#e2e8f0]">Polaris Support Box ×3</td>
              </tr>
              <tr>
                <td className="px-3.5 py-2 font-bold text-[#93c5fd] border-r border-[#1e293b]">Day 4</td>
                <td className="px-3.5 py-2 text-[#e2e8f0]">Standard Observation Ticket Envelope ×3</td>
              </tr>
              <tr>
                <td className="px-3.5 py-2 font-bold text-[#fbbf24] border-r border-[#1e293b]">Day 5</td>
                <td className="px-3.5 py-2 font-bold text-[#fbbf24]">Cosmic Cube ×1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* H2: スターセイヴァー救援の旅攻略 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="rescue-journey">Star Savior Rescue Journey Strategy</AppMediaH2>
        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[12px]">
            <thead>
              <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold text-[#94a3b8]">
                <th className="w-44 px-3.5 py-2 border-r border-[#243049]">Journey Topic</th>
                <th className="px-3.5 py-2">AppMedia Strategy Summary & Target Benchmarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]">
              <tr>
                <td className="px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#1e293b]">
                  Normal vs Hard Mode
                </td>
                <td className="px-3.5 py-2.5 text-[#e2e8f0]">
                  Clear Normal Mode once per Savior to unlock their base Stellar Archive, then switch exclusively to <strong className="text-[#fbbf24]">Hard Mode</strong> to unlock exclusive Hard Potentials and higher stat caps (1,200+ primary stat).
                </td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#1e293b]">
                  Blessing Loop & Inheritance
                </td>
                <td className="px-3.5 py-2.5 text-[#e2e8f0]">
                  Equip two 3-Star Power/Vitality Stellar Archives as parents before starting a run. Inherited blessings trigger at Exam milestones and provide flat +120 to +180 stat spikes without spending stamina turns.
                </td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#1e293b]">
                  SS+ Evaluation Formula
                </td>
                <td className="px-3.5 py-2.5 text-[#e2e8f0]">
                  Stack 3 matching Stat Tag Arcana (e.g. 3 Power + 2 Vitality/Focus) to trigger Multi-Tag Resonance Training (+45% stat gain when 2+ SSR partners land on the same facility) and purchase gold Special Potentials at the final shop.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <AppMediaTableLink href="/starsavior/arcana" label="Rescue Journey Normal & Hard Mode Arcana Deck Guide" />
          <AppMediaTableLink href="/starsavior/arcana#arcana-database" label="All 83 Arcana Special Potentials & Training Bonuses" />
        </div>
      </section>

      {/* H2: スターセイヴァー作戦攻略 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="operations-section">Star Savior Operation Sector Boss Strategy</AppMediaH2>
        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[12px]">
            <thead>
              <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold text-[#94a3b8]">
                <th className="w-36 px-3.5 py-2 border-r border-[#243049]">Sector Boss</th>
                <th className="w-36 px-3.5 py-2 border-r border-[#243049]">Weak Attribute</th>
                <th className="px-3.5 py-2">Boss Mechanics & Recommended Clear Lineup</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]">
              <tr>
                <td className="px-3.5 py-2.5 font-extrabold text-white border-r border-[#1e293b]">Sector 1-5 Boss</td>
                <td className="px-3.5 py-2.5 font-bold text-[#fbbf24] border-r border-[#1e293b]">Moon / Order</td>
                <td className="px-3.5 py-2.5 text-[#cbd5e1]">
                  Uses a 3-layer Toughness shield on Turn 2. Bring multi-hitters (<Link href="/starsavior/characters/asherah" className="text-[#60a5fa] hover:underline font-bold">Asherah</Link>, <Link href="/starsavior/characters/professor-m" className="text-[#60a5fa] hover:underline font-bold">Professor M</Link>) to break before the AoE laser fires.
                </td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-extrabold text-white border-r border-[#1e293b]">Sector 2-12 Boss</td>
                <td className="px-3.5 py-2.5 font-bold text-[#fbbf24] border-r border-[#1e293b]">Sun / Star</td>
                <td className="px-3.5 py-2.5 text-[#cbd5e1]">
                  Inflicts stacking Burn and DEF Down. Pair a cleanser/healer (<Link href="/starsavior/characters/frey" className="text-[#60a5fa] hover:underline font-bold">Frey</Link> or <Link href="/starsavior/characters/roberta" className="text-[#60a5fa] hover:underline font-bold">Roberta</Link>) with <Link href="/starsavior/characters/bunny-charles" className="text-[#60a5fa] hover:underline font-bold">Bunny Charles</Link> for burst execution.
                </td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-extrabold text-white border-r border-[#1e293b]">Sector 3-15 Boss</td>
                <td className="px-3.5 py-2.5 font-bold text-[#fbbf24] border-r border-[#1e293b]">Star / Order</td>
                <td className="px-3.5 py-2.5 text-[#cbd5e1]">
                  Summons two shield drones that grant Boss Invulnerability. Eliminate adds with AoE Casters (<Link href="/starsavior/characters/amora" className="text-[#60a5fa] hover:underline font-bold">Amora</Link>, <Link href="/starsavior/characters/epindel" className="text-[#60a5fa] hover:underline font-bold">Epindel</Link>) then chain Nova Burst during Break.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* H2: スターセイヴァーキューブパレス攻略 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="cube-palace">Star Savior Cube Palace Bosses & Cheat Codes Strategy</AppMediaH2>
        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[12px]">
            <thead>
              <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold text-[#94a3b8]">
                <th className="w-36 px-3.5 py-2 border-r border-[#243049]">Cube Palace Boss</th>
                <th className="w-40 px-3.5 py-2 border-r border-[#243049]">Recommended Cheat Code</th>
                <th className="px-3.5 py-2">Core Gimmick Counter & Recommended Saviors</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]">
              {[
                { boss: 'Interface', code: 'OVERCLOCK_ATK_III', tip: 'punishes single-hit ultimates; bring Pincer Dual-Attack rangers (Professor M, Dana) to strip 6-hit Toughness bar.' },
                { boss: 'Kernel', code: 'SHIELD_PIERCE_II', tip: 'regenerates 15% HP if any ally is unshielded; use Hilde or Claire for permanent party barrier uptime.' },
                { boss: 'Assembler', code: 'SPEED_SYNC_III', tip: 'accelerates turn gauge by +20% per enemy buff; strip buffs immediately using Maid Ceres or Harley.' },
                { boss: 'Firmware', code: 'CRIT_OVERDRIVE_II', tip: 'takes 70% reduced non-critical damage; stack Crit Rate buffs via Bride Carmen and Assassin carries.' },
                { boss: 'Mechanics', code: 'BREAK_EFFICIENCY_III', tip: 'locks Toughness bar until 3 debuffs are applied; use Bell or Lugran to stack debuffs on Turn 1.' },
                { boss: 'Linker', code: 'AOE_SUPPRESSION_II', tip: 'links damage across summoned nodes; hit all targets simultaneously with Epindel or Rosalyn AoE skills.' },
                { boss: 'Bootloader', code: 'NOVA_CHARGE_III', tip: 'wipes party at Turn 8 Enrage; use Nova Burst chains with Amora and Swimsuit Smile to finish before Turn 7.' },
                { boss: 'Register', code: 'COUNTER_NULL_II', tip: 'counters ranged attacks; use Stealth/Evasion Assassins (Fei, Bunny Charles) to bypass counter triggers.' },
              ].map((row) => (
                <tr key={row.boss} className="hover:bg-[#141d30]">
                  <td className="px-3.5 py-2 font-extrabold text-white border-r border-[#1e293b]">{row.boss}</td>
                  <td className="px-3.5 py-2 font-mono text-[11px] font-bold text-[#93c5fd] border-r border-[#1e293b]">{row.code}</td>
                  <td className="px-3.5 py-2 text-[#cbd5e1]">{row.boss} {row.tip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* H2: スターセイヴァーのおすすめ攻略情報 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="recommended-guides">Star Savior Recommended Strategy Guides</AppMediaH2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <AppMediaTableLink href="/starsavior/tier-list" label="Strongest Party Formations & Recommended Teams" />
          <AppMediaTableLink href="/starsavior/arcana" label="Best Arcana Deck Combinations by Class" />
          <AppMediaTableLink href="/starsavior/characters" label="Who Should You Use Quasar Core On?" />
          <AppMediaTableLink href="/starsavior/characters" label="Who Should You Use Pulsar Core On?" />
          <AppMediaTableLink href="/starsavior/tier-list" label="How to Unlock Break Skills & Best Skills" />
          <AppMediaTableLink href="#operations-section" label="Flashpoint Boss Strategy & Sector Lineups" />
          <AppMediaTableLink href="#cube-palace" label="Cube Palace Summary & All Cheat Codes" />
          <AppMediaTableLink href="/starsavior/tier-list" label="Interstellar Corridor Progression & Tips" />
          <AppMediaTableLink href="/starsavior/characters?rarity=SR" label="Recommended SR Awakening Characters" />
          <AppMediaTableLink href="/starsavior/characters" label="Precision Equipment Crafting Guide" />
          <AppMediaTableLink href="/starsavior/tier-list" label="Apocalypse Shop Exchange Priority" />
          <AppMediaTableLink href="/starsavior/reroll" label="Best Value Paid Packs & Pass Analysis" />
        </div>
      </section>

      {/* H2: スターセイヴァーの効果検証・解説 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="mechanics-verification">Star Savior Effect Verification & Combat Mechanics</AppMediaH2>
        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[12px]">
            <thead>
              <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold text-[#94a3b8]">
                <th className="w-48 px-3.5 py-2 border-r border-[#243049]">Verified Mechanic</th>
                <th className="px-3.5 py-2">Verified Formula & In-Game Behavior</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]">
              <tr>
                <td className="px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#1e293b]">
                  Pincer Dual-Attack (<Link href="/starsavior/characters/professor-m" className="underline">Professor M</Link>)
                </td>
                <td className="px-3.5 py-2.5 text-[#cbd5e1]">
                  Calls the ally with the highest current ATK (including in-battle buffs) to execute a Skill 1 follow-up attack that reduces 1 Toughness gauge point and grants +10% Action Gauge.
                </td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#1e293b]">
                  Evasion & Counterattack (<Link href="/starsavior/characters/fei" className="underline">Fei</Link>)
                </td>
                <td className="px-3.5 py-2.5 text-[#cbd5e1]">
                  Successful Evasion reduces incoming damage by 75%, prevents debuff application, and triggers Counterattack stances immediately after the enemy skill animation concludes.
                </td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#1e293b]">
                  Preemptive Guard (<Link href="/starsavior/characters/hilde" className="underline">Hilde</Link>)
                </td>
                <td className="px-3.5 py-2.5 text-[#cbd5e1]">
                  Intercepts single-target attacks aimed at backline allies, redirecting 40% of final post-mitigation damage to the Defender while preserving the target&apos;s Stealth status.
                </td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#1e293b]">
                  Attribute Advantage Chart
                </td>
                <td className="px-3.5 py-2.5 text-[#cbd5e1]">
                  <strong className="text-white">Sun &gt; Star &gt; Moon &gt; Sun</strong> (+30% Damage, +15% Crit Rate, +1 Toughness Break). <strong className="text-white">Order &lt;&gt; Chaos</strong> deal +30% mutual bonus damage without taking reduced damage.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* H2: スターセイヴァーの初心者・序盤おすすめ攻略 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="beginner-guides">Star Savior Beginner & Early-Game Strategy</AppMediaH2>

        <AppMediaH3>Beginner Must-Reads!</AppMediaH3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <AppMediaTableLink href="/starsavior/reroll" label="Beginner Early-Game Progression Roadmap" />
          <AppMediaTableLink href="/starsavior/reroll#how-to-reroll" label="How to Reroll Fast (~10 Minutes)" />
          <AppMediaTableLink href="/starsavior/reroll" label="Daily To-Do Checklist & Reset Tasks" />
          <AppMediaTableLink href="/starsavior/arcana" label="How to Build High-Rank Saviors in Journey" />
          <AppMediaTableLink href="/starsavior/characters" label="How to Farm Equipment & Best Set Builds" />
          <AppMediaTableLink href="/starsavior/tier-list" label="Shop Exchange Priority Guide" />
        </div>

        <AppMediaH3>Beginner System Explanations</AppMediaH3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <AppMediaTableLink href="/starsavior/arcana" label="Rescue Journey System & Training Loop" />
          <AppMediaTableLink href="/starsavior/characters" label="Character Upgrade Elements & Priority" />
          <AppMediaTableLink href="/starsavior/tier-list" label="Battle System, Toughness Break & Nova Burst" />
          <AppMediaTableLink href="/starsavior/characters" label="Attribute Advantage Summary (Sun/Star/Moon/Order/Chaos)" />
          <AppMediaTableLink href="/starsavior/characters" label="What is Cosmic Attribute? Advantage Rules" />
          <AppMediaTableLink href="/starsavior/characters" label="Character Combat & Journey Stats Explained" />
          <AppMediaTableLink href="/starsavior/arcana" label="How to Obtain & Use Stellar Archives" />
          <AppMediaTableLink href="/starsavior/reroll" label="Daily Server Reset Time & Weekly Schedule" />
          <AppMediaTableLink href="/starsavior/reroll" label="Willpower (Stamina) Usage & Recovery Methods" />
          <AppMediaTableLink href="/starsavior/reroll" label="Sweep Battles & Overlap Auto-Combat Guide" />
          <AppMediaTableLink href="/starsavior/reroll" label="NOA Support Funds Idle Rewards Guide" />
          <AppMediaTableLink href="/starsavior/reroll" label="Headquarters Facilities & Upgrades" />
        </div>
      </section>

      {/* H2: スターセイヴァーのキャラ (All 57 Characters SSR & SR Icon Grids!) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaH2 id="characters-section" badge="57 SAVIORS">
          Star Savior Characters (All 57 Playable Saviors)
        </AppMediaH2>

        {/* Attribute & Class Quick Filter Table */}
        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-center text-[11px]">
            <tbody>
              <tr className="border-b border-[#1e293b]">
                <th className="w-28 bg-[#161f33] px-3 py-2 font-extrabold text-[#93c5fd] border-r border-[#243049]">
                  By Rarity / Pool
                </th>
                <td className="p-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link href="/starsavior/characters" className="rounded bg-[#1e293b] hover:bg-[#2563eb] px-2.5 py-1 font-bold text-white">
                      All Characters (57)
                    </Link>
                    <Link href="/starsavior/characters" className="rounded bg-[#1e293b] hover:bg-[#2563eb] px-2.5 py-1 font-bold text-[#fbbf24]">
                      SSR ({ssrChars.length})
                    </Link>
                    <Link href="/starsavior/characters" className="rounded bg-[#1e293b] hover:bg-[#2563eb] px-2.5 py-1 font-bold text-[#d8b4fe]">
                      SR ({srChars.length})
                    </Link>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-[#1e293b]">
                <th className="bg-[#161f33] px-3 py-2 font-extrabold text-[#93c5fd] border-r border-[#243049]">
                  By Attribute
                </th>
                <td className="p-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {game.elementsConfig.map((el) => (
                      <Link
                        key={el.key}
                        href="/starsavior/characters"
                        className="inline-flex items-center gap-1.5 rounded bg-[#161f33] hover:bg-[#1e293b] border border-[#263452] px-2.5 py-1 font-bold text-[#e2e8f0]"
                      >
                        <img src={el.iconUrl} alt={el.label} className="h-4 w-4 object-contain" loading="eager" />
                        <span>{el.label}</span>
                      </Link>
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <th className="bg-[#161f33] px-3 py-2 font-extrabold text-[#93c5fd] border-r border-[#243049]">
                  By Class
                </th>
                <td className="p-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {game.rolesConfig.map((rl) => (
                      <Link
                        key={rl.key}
                        href="/starsavior/characters"
                        className="inline-flex items-center gap-1.5 rounded bg-[#161f33] hover:bg-[#1e293b] border border-[#263452] px-2.5 py-1 font-bold text-[#e2e8f0]"
                      >
                        <img src={rl.iconUrl} alt={rl.label} className="h-4 w-4 object-contain" loading="eager" />
                        <span>{rl.label}</span>
                      </Link>
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <AppMediaH3>SSR Characters ({ssrChars.length})</AppMediaH3>
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
              badgeText={c.staticData?.appMediaTier || c.overallTier}
              size="md"
            />
          ))}
        </div>

        <AppMediaH3>SR Characters ({srChars.length})</AppMediaH3>
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
              badgeText={c.staticData?.appMediaTier || c.overallTier}
              size="md"
            />
          ))}
        </div>
      </section>

      {/* H2: スターセイヴァーのアルカナ (All 83 Arcana SSR, SR & R Icon Grids!) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaH2 id="arcana-section" badge="83 CARDS">
          Star Savior Arcana Cards (All 83 SSR, SR & R Arcana)
        </AppMediaH2>

        <AppMediaH3>SSR Arcana ({ssrArcana.length})</AppMediaH3>
        <div className="flex flex-wrap gap-2.5 pt-1">
          {ssrArcana.map((a) => (
            <AppMediaIconCell
              key={a.slug}
              href={`/starsavior/arcana#${a.slug}`}
              name={a.name}
              imageUrl={a.imageUrl}
              rarity="SSR"
              topLeftIconUrl={a.staticData?.statTagIconUrl}
              badgeText={a.tier}
              size="md"
            />
          ))}
        </div>

        <AppMediaH3>SR Arcana ({srArcana.length})</AppMediaH3>
        <div className="flex flex-wrap gap-2.5 pt-1">
          {srArcana.map((a) => (
            <AppMediaIconCell
              key={a.slug}
              href={`/starsavior/arcana#${a.slug}`}
              name={a.name}
              imageUrl={a.imageUrl}
              rarity="SR"
              topLeftIconUrl={a.staticData?.statTagIconUrl}
              badgeText="SR"
              size="md"
            />
          ))}
        </div>

        <AppMediaH3>R Arcana ({rArcana.length})</AppMediaH3>
        <div className="flex flex-wrap gap-2.5 pt-1">
          {rArcana.map((a) => (
            <AppMediaIconCell
              key={a.slug}
              href={`/starsavior/arcana#${a.slug}`}
              name={a.name}
              imageUrl={a.imageUrl}
              rarity="R"
              topLeftIconUrl={a.staticData?.statTagIconUrl}
              badgeText="R"
              size="md"
            />
          ))}
        </div>
      </section>

      {/* H2: スターセイヴァーのデータベース */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="database-section">Star Savior Static Database</AppMediaH2>
        <AppMediaH3>Database Index</AppMediaH3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <AppMediaTableLink href="/starsavior/characters" label="Complete Character List (57 Saviors)" badge="57" />
          <AppMediaTableLink href="/starsavior/characters#stats-comparison-table" label="Lv.200 Character Stats & Server Rank List" />
          <AppMediaTableLink href="/starsavior/arcana" label="Complete Arcana Encyclopedia (83 Cards)" badge="83" />
          <AppMediaTableLink href="/starsavior/characters/asherah#ark-points" label="Ark Points & Affinity Gift Database" />
          <AppMediaTableLink href="/starsavior/characters#profile-cv-database" label="Character Birthdays & Height List" />
          <AppMediaTableLink href="/starsavior/characters#profile-cv-database" label="Voice Actors (CV) & Affiliations List" />
        </div>
      </section>

      {/* H2: スターセイヴァーの掲示板 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="bulletin-boards">Star Savior Community Bulletin Boards</AppMediaH2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <AppMediaTableLink href="#reader-comments" label="General Discussion & Question Board" />
          <AppMediaTableLink href="#reader-comments" label="Friend ID Recruitment Board" />
          <AppMediaTableLink href="#reader-comments" label="Guild Member Recruitment Board" />
        </div>
      </section>

      {/* H2: スターセイヴァーのよくある質問 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="faq-section">Star Savior Frequently Asked Questions (FAQ)</AppMediaH2>
        <div className="space-y-2.5 text-[12px]">
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-1">
            <div className="font-extrabold text-[#93c5fd]">Q. Who are the strongest characters to pull right now?</div>
            <p className="text-[#cbd5e1]">
              A. Amora (Order Assassin), Professor M (Moon Ranger), Bride Carmen (Moon Supporter), Bunny Charles (Sun Assassin), and Swimsuit Smile (Star Assassin) are rated Tier-0 SSS across PvE and Boss content.
            </p>
          </div>
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-1">
            <div className="font-extrabold text-[#93c5fd]">Q. Should I prioritize Characters or Arcana when pulling?</div>
            <p className="text-[#cbd5e1]">
              A. Prioritize Characters until you have a full 4-unit SSR party (including free distribution SSRs like Asherah and selector tickets). Once your 4 core units are set, pull SSR Arcana with Universal Power or Endurance tags such as &quot;Weakness Correction Custom Training&quot;, &quot;Indomitable Masterpiece&quot;, and &quot;Death to Flowers&quot;.
            </p>
          </div>
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-1">
            <div className="font-extrabold text-[#93c5fd]">Q. How long does rerolling take and how do I reset my account?</div>
            <p className="text-[#cbd5e1]">
              A. Each reroll cycle takes about 10 minutes after skipping the tutorial stages on repeat runs. Use &quot;Reset Server Account&quot; in Account Settings to immediately restart from step 3 without redownloading game data.
            </p>
          </div>
        </div>
      </section>

      {/* H2: スターセイヴァーとは？ゲーム基本情報 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaH2 id="basic-game-info">What is Star Savior? Basic Game Information</AppMediaH2>

        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[12px]">
            <tbody className="divide-y divide-[#1e293b]">
              <tr>
                <th className="w-40 bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">Title</th>
                <td className="px-3.5 py-2.5 font-bold text-white">Star Savior</td>
              </tr>
              <tr>
                <th className="bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">Genre</th>
                <td className="px-3.5 py-2.5 text-[#e2e8f0]">Character Training & Turn-Based Command RPG</td>
              </tr>
              <tr>
                <th className="bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">Price</th>
                <td className="px-3.5 py-2.5 text-[#e2e8f0]">Free-to-Play (Optional In-App Purchases)</td>
              </tr>
              <tr>
                <th className="bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">Platforms</th>
                <td className="px-3.5 py-2.5 text-[#e2e8f0]">PC / iOS / Android</td>
              </tr>
              <tr>
                <th className="bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">Developer / Copyright</th>
                <td className="px-3.5 py-2.5 text-[#94a3b8]">© 2025 STUDIOBSIDE Co. Ltd All Rights Reserved.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-3 text-[12px] text-[#cbd5e1] leading-relaxed">
          <AppMediaH3>A Training RPG About Embarking on an Adventure to Save a Fading Star</AppMediaH3>
          <p>
            Star Savior is a training RPG where you embark on a grand voyage to restore light to a fading star. Blending high fantasy, magic, and sci-fi worldbuilding, the story follows the Saviors who seek the power of the legendary &quot;Star Savior&quot;.
          </p>

          <AppMediaH3>The &quot;Rescue Journey&quot; With Maidens Blessed by the Power of the Stars</AppMediaH3>
          <p>
            As the Captain of the Voyager Rescue Squad, you guide star-blessed maidens known as &quot;Saviors&quot; through the Rescue Journey. Featuring anime-style 3D cel-shaded graphics and dynamic camera work, every training session and boss encounter feels like an interactive anime episode.
          </p>

          <AppMediaH3>Flashy Turn-Based Command Skill Battles</AppMediaH3>
          <p>
            Combat unfolds in strategic turn-based command battles. Combine each character&apos;s Attribute (Sun, Star, Moon, Order, Chaos), Toughness Break multipliers, Pincer Dual-Attacks, and Nova Burst enhancements to shatter boss shields and unleash cinematic Ultimate Skills.
          </p>

          <AppMediaH3>Deep Character Training & Affinity Interaction</AppMediaH3>
          <p>
            Equip 5 Arcana cards per run to customize your Saviors&apos; Power, Vitality, Endurance, Focus, and Protection stats, unlock Special Potentials, and raise affinity through Cafe invitations and favorite gifts.
          </p>
        </div>
      </section>

      <AppMediaStrategyFooter />
    </div>
  );
}
