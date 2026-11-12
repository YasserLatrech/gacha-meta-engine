'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import type { GameWikiDataset, CharacterEntity } from '@/domain/schemas';
import {
  AppMediaH2,
  AppMediaH3,
  AppMediaH4,
  AppMediaEyecatchBanner,
  AppMediaRankIcon,
  AppMediaTierBadge,
  AppMediaTableLink,
  AppMediaIconCell,
  TIER_COLOR_STYLES,
} from '@/components/micro/AppMediaHeadings';
import { AppMediaTocBox, AppMediaCommunityPoll } from '@/components/medium/AppMediaTocAndWidgets';
import { AppMediaDetailedCharEvalTable, AppMediaStrategyFooter } from '@/components/medium/AppMediaStrategyBlocks';

const TIER_TOC = [
  {
    id: 'tier-ranking-matrix',
    label: 'Star Savior Strongest Character Tier List',
    subItems: [{ id: 'rank-criteria-quick-table', label: 'Rank Evaluation Criteria Quick Reference Table' }],
  },
  {
    id: 'tier-ranking-analysis',
    label: 'Strongest Character Ranking Analysis',
    subItems: [
      { id: 'analysis-amora', label: 'The Strongest Character is Amora!' },
      { id: 'analysis-professor-m', label: 'Professor M Scales With Overall Party Power' },
      { id: 'analysis-bride-carmen', label: 'Carmen: Eternal Promise Dominates on a Party-Wide Level' },
      { id: 'analysis-bunny-charles', label: 'Bunnygirl Charlotte is Consistently Powerful' },
      { id: 'analysis-swimsuit-smile', label: 'Smile: Sunshine Cat Excels in Boss Battles' },
      { id: 'analysis-dress-asherah', label: 'Asherah: Waltz of Starlight Has Slightly Dropped in Priority' },
    ],
  },
  {
    id: 'tier-latest-updates',
    label: 'Strongest Character Ranking Latest Update Info',
    subItems: [
      { id: 'update-1st-anniv', label: '1st Anniv: Witch of Favoritism (SSS) & Guile (SS)' },
      { id: 'update-maid-ceres', label: 'Newly Implemented: Maid Ceres' },
    ],
  },
  {
    id: 'tier-poll-section',
    label: 'Who is the Strongest in Star Savior? (Reader Poll)',
  },
  {
    id: 'tier-brief-overviews',
    label: 'Brief Overview of All Characters by Rank (SSS–C)',
    subItems: [
      { id: 'overview-sss', label: 'SSS Rank (Tier 0)' },
      { id: 'overview-ss', label: 'SS Rank (Tier 1)' },
      { id: 'overview-s', label: 'S Rank (Tier 2)' },
      { id: 'overview-a', label: 'A Rank (Tier 3)' },
      { id: 'overview-b', label: 'B Rank (Tier 4)' },
      { id: 'overview-c', label: 'C Rank (Tier 5)' },
    ],
  },
  {
    id: 'tier-evaluation-criteria',
    label: 'Strongest Character Evaluation Criteria',
    subItems: [
      { id: 'criteria-pve', label: 'PvE Performance is the Main Evaluation Axis' },
      { id: 'criteria-attackers', label: 'Attackers Are Evaluated With Priority' },
      { id: 'criteria-supporters', label: 'Supporters Are Also Evaluated on Damage Contribution' },
      { id: 'criteria-single-target', label: 'Single-Target DPS is Heavily Emphasized' },
      { id: 'criteria-support-utility', label: 'Support Utility is Also an Important Metric' },
      { id: 'criteria-class-table', label: 'Evaluation Criteria Table for Each Class' },
    ],
  },
  {
    id: 'starsavior-strategy-links',
    label: 'Star Savior Strategy Links & Reader Comments',
  },
];

const ROLE_COLUMNS = [
  { key: 'attacker', label: 'Attacker (Striker / Assassin)', roles: ['Striker', 'Assassin'] },
  { key: 'sub', label: 'Sub-DPS / Debuffer (Ranger / Caster)', roles: ['Ranger', 'Caster'] },
  { key: 'supporter', label: 'Supporter', roles: ['Supporter'] },
  { key: 'defender', label: 'Tank / Defender', roles: ['Defender'] },
];

function resolveDisplayTier(c: CharacterEntity): 'SSS' | 'SS' | 'S' | 'A' | 'B' | 'C' {
  // Respect Admin Studio edits if overallTier was changed from default, while showing SSS-C granularity
  const amTier = c.staticData?.appMediaTier;
  if (c.overallTier === 'SS') {
    return amTier === 'SSS' ? 'SSS' : 'SS';
  }
  if (c.overallTier === 'S') return 'S';
  if (c.overallTier === 'A') return 'A';
  if (amTier === 'C') return 'C';
  return 'B';
}

export function StrongestTierListMacro({ dataset }: { dataset: GameWikiDataset }) {
  const { game, characters } = dataset;
  const [selectedElement, setSelectedElement] = useState<string>('ALL');
  const [selectedRole, setSelectedRole] = useState<string>('ALL');
  const [selectedRarity, setSelectedRarity] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileMatrixView, setMobileMatrixView] = useState<boolean>(false);

  const filteredCharacters = useMemo(() => {
    return characters.filter((c) => {
      if (selectedElement !== 'ALL' && c.element !== selectedElement) return false;
      if (selectedRole !== 'ALL' && c.role !== selectedRole) return false;
      if (selectedRarity !== 'ALL' && c.rarity !== selectedRarity) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        if (!c.name.toLowerCase().includes(q) && !c.element.toLowerCase().includes(q) && !c.role.toLowerCase().includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [characters, selectedElement, selectedRole, selectedRarity, searchQuery]);

  const tiersOrder: Array<'SSS' | 'SS' | 'S' | 'A' | 'B' | 'C'> = ['SSS', 'SS', 'S', 'A', 'B', 'C'];

  const pollInitial = useMemo(() => {
    const defaults = [
      { slug: 'tanya', name: 'Tanya', votes: 161, percent: 15.9 },
      { slug: 'seira', name: 'Seira', votes: 92, percent: 9.1 },
      { slug: 'charles', name: 'Charlotte', votes: 83, percent: 8.2 },
      { slug: 'bell-lease', name: 'Bell Rhys', votes: 77, percent: 7.6 },
      { slug: 'bunny-charles', name: 'Bunnygirl Charlotte', votes: 47, percent: 4.6 },
      { slug: 'bride-carmen', name: 'Carmen: Eternal Promise', votes: 42, percent: 4.1 },
      { slug: 'carmen', name: 'Carmen', votes: 41, percent: 4.0 },
      { slug: 'amora', name: 'Amora', votes: 40, percent: 3.9 },
      { slug: 'bunny-frey', name: 'Frey: Noble Princess', votes: 38, percent: 3.7 },
      { slug: 'professor-m', name: 'Professor M', votes: 35, percent: 3.5 },
    ];
    return defaults.map((d, i) => {
      const found = characters.find((c) => c.slug === d.slug);
      return {
        rank: i + 1,
        slug: d.slug,
        name: found?.name || d.name,
        imageUrl: found?.imageUrl || 'https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_AMORA_icon.webp',
        votes: d.votes,
        percent: d.percent,
      };
    });
  }, [characters]);

  const witchOfFavoritism = characters.find((c) => c.slug === 'witch-of-favoritism');
  const guile = characters.find((c) => c.slug === 'guile');
  const maidCeres = characters.find((c) => c.slug === 'maid-ceres');

  return (
    <div className="space-y-6">
      {/* H1 Header Box */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-3">
        <div className="flex items-center gap-3.5">
          <img
            src="https://appmedia.jp/wp-content/uploads/2026/09/205900_h5bcs.webp"
            alt="Strongest Character Tier List"
            className="h-14 w-14 rounded-lg border border-[#3b82f6]/50 object-cover shrink-0"
            loading="eager"
          />
          <div>
            <div className="text-[12.5px] font-bold text-[#93c5fd]">
              Last Updated: 2026/11/12 · {game.patchVersion}
            </div>
            <h1 className="mt-0.5 text-lg sm:text-xl font-black text-white">
              [Star Savior] Strongest Character Ranking & Tier List
            </h1>
          </div>
        </div>

        <AppMediaEyecatchBanner
          src="/banners/starsavior/eyecatch/rank_chars.webp"
          alt="Star Savior Strongest Character Ranking & Tier List"
        />

        <p className="text-[13.5px] text-[#e8eff8] leading-relaxed">
          This is the Star Savior Strongest Character Ranking (Tier List). It covers the latest character evaluations, the complete SSS–C tier matrix by role, and detailed breakdowns of the strongest SSR and SR Saviors in Star Savior.
        </p>

        {/* Top Ranking Switcher Table */}
        <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626]">
          <div className="border-b border-[#243049] bg-[#161f33] px-3 py-1.5 text-center text-[12.5px] font-extrabold text-[#f8fafc]">
            Various Star Savior Rankings
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 divide-x divide-y divide-[#1e293b] text-center text-[13.5px] font-bold">
            <Link href="/starsavior/tier-list" className="bg-[#2563eb]/25 py-2.5 text-white">
              Strongest Characters
            </Link>
            <Link href="/starsavior/arcana" className="py-2.5 text-[#60a5fa] hover:bg-[#17223b]">
              Strongest Arcana
            </Link>
            <Link href="/starsavior/guides/pvp-tier-list" className="py-2.5 text-[#60a5fa] hover:bg-[#17223b]">
              Strongest PvP Characters
            </Link>
            <Link href="/starsavior/reroll" className="py-2.5 text-[#60a5fa] hover:bg-[#17223b]">
              Reroll Rankings
            </Link>
            <Link href="/starsavior/guides/sr-characters" className="py-2.5 text-[#60a5fa] hover:bg-[#17223b]">
              Recommended SR Chars
            </Link>
            <Link href="/starsavior/guides/sr-arcana" className="py-2.5 text-[#60a5fa] hover:bg-[#17223b]">
              Recommended SR Arcana
            </Link>
          </div>
        </div>

        <AppMediaTocBox items={TIER_TOC} />
      </section>

      {/* H2: スターセイヴァー最強キャラランキング */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaH2 id="tier-ranking-matrix" badge="59 SAVIORS">
          Star Savior Strongest Character Ranking
        </AppMediaH2>

        {/* Interactive Filter Controls */}
        <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3 space-y-2.5">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[12.5px] font-extrabold text-[#c8d4e6] mr-1">Attribute:</span>
            <button
              type="button"
              onClick={() => setSelectedElement('ALL')}
              className={`rounded px-2.5 py-1 text-[12.5px] font-bold ${
                selectedElement === 'ALL' ? 'bg-[#2563eb] text-white' : 'bg-[#161f33] text-[#e8eff8] hover:bg-[#1e293b]'
              }`}
            >
              All ({characters.length})
            </button>
            {game.elementsConfig.map((el) => (
              <button
                key={el.key}
                type="button"
                onClick={() => setSelectedElement(el.key === selectedElement ? 'ALL' : el.key)}
                className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[12.5px] font-bold border ${
                  selectedElement === el.key
                    ? 'border-[#3b82f6] bg-[#2563eb] text-white'
                    : 'border-[#243049] bg-[#161f33] text-[#e8eff8] hover:bg-[#1e293b]'
                }`}
              >
                <img src={el.iconUrl} alt={el.label} className="h-3.5 w-3.5 object-contain" loading="eager" />
                <span>{el.label}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[12.5px] font-extrabold text-[#c8d4e6] mr-1">Class:</span>
              <button
                type="button"
                onClick={() => setSelectedRole('ALL')}
                className={`rounded px-2.5 py-1 text-[12.5px] font-bold ${
                  selectedRole === 'ALL' ? 'bg-[#2563eb] text-white' : 'bg-[#161f33] text-[#e8eff8] hover:bg-[#1e293b]'
                }`}
              >
                All Classes
              </button>
              {game.rolesConfig.map((rl) => (
                <button
                  key={rl.key}
                  type="button"
                  onClick={() => setSelectedRole(rl.key === selectedRole ? 'ALL' : rl.key)}
                  className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[12.5px] font-bold border ${
                    selectedRole === rl.key
                      ? 'border-[#3b82f6] bg-[#2563eb] text-white'
                      : 'border-[#243049] bg-[#161f33] text-[#e8eff8] hover:bg-[#1e293b]'
                  }`}
                >
                  <img src={rl.iconUrl} alt={rl.label} className="h-3.5 w-3.5 object-contain" loading="eager" />
                  <span>{rl.label}</span>
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
              {(['ALL', 'SSR', 'SR'] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setSelectedRarity(r)}
                  className={`rounded px-2.5 py-1 text-[12.5px] font-bold ${
                    selectedRarity === r ? 'bg-[#2563eb] text-white' : 'bg-[#161f33] text-[#e8eff8]'
                  }`}
                >
                  {r === 'ALL' ? 'All Rarities' : r}
                </button>
              ))}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Savior..."
                className="flex-1 sm:flex-none rounded border border-[#243049] bg-[#090d16] px-2.5 py-1 text-[12.5px] text-white placeholder-[#8c9db8] focus:border-[#3b82f6] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Mobile View Switcher (< md): Compact Zero-Overflow Rows vs Full 5-Role Matrix */}
        <div className="md:hidden flex items-center justify-between gap-2 rounded-lg border border-[#243049] bg-[#0f1626] px-3 py-2">
          <span className="text-[12.5px] font-extrabold text-[#c8d4e6]">Mobile Layout:</span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setMobileMatrixView(false)}
              className={`rounded px-2.5 py-1 text-[12.5px] font-extrabold transition-colors ${
                !mobileMatrixView
                  ? 'bg-[#2563eb] text-white'
                  : 'bg-[#161f33] text-[#e8eff8]'
              }`}
            >
              Compact Tiers
            </button>
            <button
              type="button"
              onClick={() => setMobileMatrixView(true)}
              className={`rounded px-2.5 py-1 text-[12.5px] font-extrabold transition-colors ${
                mobileMatrixView
                  ? 'bg-[#2563eb] text-white'
                  : 'bg-[#161f33] text-[#e8eff8]'
              }`}
            >
              By Role Matrix ↔
            </button>
          </div>
        </div>

        {/* Mobile Compact Tier Rows (< md, when !mobileMatrixView) */}
        {!mobileMatrixView && (
          <div className="md:hidden overflow-hidden rounded-lg border border-[#243049] bg-[#0b101b]">
            <table className="w-full border-collapse">
              <tbody>
                {tiersOrder.map((tierKey) => {
                  const rowChars = filteredCharacters.filter((c) => resolveDisplayTier(c) === tierKey);
                  const tStyle = TIER_COLOR_STYLES[tierKey];
                  return (
                    <tr key={tierKey} className="border-b last:border-b-0 border-[#1e293b]">
                      <td className={`w-20 p-2 text-center align-middle border-r border-[#243049] ${tStyle.bg}/20`}>
                        <AppMediaRankIcon tier={tierKey} size="sm" subLabel={tStyle.label} />
                      </td>
                      <td className="p-2.5">
                        {rowChars.length === 0 ? (
                          <div className="py-3 text-center text-[12.5px] text-[#475569]">—</div>
                        ) : (
                          <div className="flex flex-wrap gap-2">
                            {rowChars.map((c) => (
                              <AppMediaIconCell
                                key={c.slug}
                                href={`/starsavior/characters/${c.slug}`}
                                name={c.name}
                                imageUrl={c.imageUrl}
                                rarity={c.rarity}
                                topLeftIconUrl={c.staticData?.attributeIconUrl}
                                topRightIconUrl={c.staticData?.classIconUrl}
                                badgeText={c.role.slice(0, 3).toUpperCase()}
                                size="sm"
                              />
                            ))}
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* AppMedia SSS–C Tier Matrix Table (スタセイ最強キャラランキング) */}
        <div
          className={`${
            mobileMatrixView ? 'block' : 'hidden md:block'
          } overflow-x-auto rounded-lg border border-[#243049] bg-[#0b101b]`}
        >
          <table className="w-full min-w-[780px] border-collapse">
            <thead>
              <tr className="border-b border-[#243049] bg-[#161f33] text-[12.5px] font-extrabold text-[#e8eff8]">
                <th className="w-24 px-2 py-2.5 text-center border-r border-[#243049]">RANK</th>
                {ROLE_COLUMNS.map((col) => (
                  <th key={col.key} className="px-2.5 py-2.5 text-center border-r last:border-r-0 border-[#243049]">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]">
              {tiersOrder.map((tierKey) => {
                const rowChars = filteredCharacters.filter((c) => resolveDisplayTier(c) === tierKey);
                const tStyle = TIER_COLOR_STYLES[tierKey];
                return (
                  <tr key={tierKey} className="hover:bg-[#111827]/60">
                    <td className={`p-2 text-center align-middle border-r border-[#243049] ${tStyle.bg}/20`}>
                      <AppMediaRankIcon tier={tierKey} size="md" subLabel={tStyle.label} />
                    </td>
                    {ROLE_COLUMNS.map((col) => {
                      const cellChars = rowChars.filter((c) => col.roles.includes(c.role));
                      return (
                        <td
                          key={col.key}
                          className="p-2.5 align-top border-r last:border-r-0 border-[#1e293b]"
                        >
                          {cellChars.length === 0 ? (
                            <div className="py-4 text-center text-[12.5px] text-[#475569]">—</div>
                          ) : (
                            <div className="flex flex-wrap gap-2">
                              {cellChars.map((c) => (
                                <AppMediaIconCell
                                  key={c.slug}
                                  href={`/starsavior/characters/${c.slug}`}
                                  name={c.name}
                                  imageUrl={c.imageUrl}
                                  rarity={c.rarity}
                                  topLeftIconUrl={c.staticData?.attributeIconUrl}
                                  topRightIconUrl={c.staticData?.classIconUrl}
                                  badgeText={resolveDisplayTier(c)}
                                  size="md"
                                />
                              ))}
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* H3: Rank Evaluation Criteria Quick Reference Table */}
        <AppMediaH3 id="rank-criteria-quick-table">Rank Evaluation Criteria Quick Reference Table</AppMediaH3>
        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[13.5px]">
            <thead>
              <tr className="border-b border-[#243049] bg-[#161f33] text-[12.5px] font-extrabold text-[#c8d4e6]">
                <th className="w-24 px-3 py-2 text-center border-r border-[#243049]">Rank</th>
                <th className="px-3.5 py-2">Evaluation Criteria Explanation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]">
              <tr>
                <td className="p-2.5 text-center border-r border-[#1e293b]">
                  <AppMediaRankIcon tier="SSS" size="sm" />
                </td>
                <td className="p-2.5 text-[#e2e8f0] space-y-0.5">
                  <div>• Practically mandatory performance across endgame PvE content</div>
                  <div>• Single-target boss performance is heavily prioritized</div>
                  <div className="pl-3 text-[12.5px] text-[#c8d4e6]">↳ Most modes such as Cosmo Gate end immediately once the boss is defeated</div>
                </td>
              </tr>
              <tr>
                <td className="p-2.5 text-center border-r border-[#1e293b]">
                  <AppMediaRankIcon tier="SS" size="sm" />
                </td>
                <td className="p-2.5 text-[#e2e8f0] space-y-0.5">
                  <div>• Possesses potential on par with SSS in specific encounters</div>
                  <div>• Top-meta performance in Gauntlet PvP or specialized boss mechanics</div>
                  <div>• Consistently reliable contribution across all content</div>
                </td>
              </tr>
              <tr>
                <td className="p-2.5 text-center border-r border-[#1e293b]">
                  <AppMediaRankIcon tier="S" size="sm" />
                </td>
                <td className="p-2.5 text-[#e2e8f0] space-y-0.5">
                  <div>• Very strong when stage mechanics or attribute advantages align</div>
                  <div className="pl-3 text-[12.5px] text-[#c8d4e6]">↳ Outside their niche, deployment flexibility is slightly narrower</div>
                  <div>• Performs above average across general content</div>
                </td>
              </tr>
              <tr>
                <td className="p-2.5 text-center border-r border-[#1e293b]">
                  <AppMediaRankIcon tier="A" size="sm" />
                </td>
                <td className="p-2.5 text-[#e2e8f0] space-y-0.5">
                  <div>• Solid average performance</div>
                  <div>• Fully viable as a substitute for S-Rank or higher characters</div>
                </td>
              </tr>
              <tr>
                <td className="p-2.5 text-center border-r border-[#1e293b]">
                  <AppMediaRankIcon tier="B" size="sm" />
                </td>
                <td className="p-2.5 text-[#e2e8f0] space-y-0.5">
                  <div>• Slightly lacking compared to top-meta options</div>
                  <div>• Sees play when specific stage gimmicks match their kit</div>
                </td>
              </tr>
              <tr>
                <td className="p-2.5 text-center border-r border-[#1e293b]">
                  <AppMediaRankIcon tier="C" size="sm" />
                </td>
                <td className="p-2.5 text-[#e2e8f0] space-y-0.5">
                  <div>• Needs future balance adjustments to compete</div>
                  <div className="pl-3 text-[12.5px] text-[#c8d4e6]">↳ Difficult to recommend as a priority substitute right now</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* H2: Strongest Character Ranking Analysis */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4 text-[13.5px] text-[#e8eff8] leading-relaxed">
        <AppMediaH2 id="tier-ranking-analysis">Strongest Character Ranking Analysis</AppMediaH2>

        <div className="space-y-2">
          <AppMediaH3 id="analysis-amora">The Strongest Character is Amora!</AppMediaH3>
          <p>
            The overall strongest character in Star Savior right now is <strong className="text-white">Amora</strong> (Order Assassin).
          </p>
          <p>
            Her high-multiplier Special Skill on a short 3-turn cooldown delivers top-class single-target burst damage while also offering AoE wave clear when needed, making her the strongest Attacker when stage gimmicks align.
          </p>
          <p>
            Because she can cleanse debuffs from herself via her own passive and gains massive damage amplification while un-debuffed, she outputs top-tier damage independently without relying heavily on specific teammates—making her exceptional from beginner to endgame levels. While unremovable debuffs can temporarily suppress her bonus damage passive, she still stands head and shoulders above other Attackers.
          </p>
          <AppMediaTableLink href="/starsavior/characters/amora" label="Amora Evaluation, Skills & Best Equipment Builds" />
        </div>

        <div className="space-y-2 pt-2">
          <AppMediaH3 id="analysis-professor-m">Professor M Scales With Overall Party Power</AppMediaH3>
          <p>
            <strong className="text-white">Professor M</strong> (Moon Ranger) triggers a <strong className="text-[#93c5fd]">Cross Attack</strong> from the ally with the highest ATK whenever conditions are met, pairing phenomenally well with Attackers who have strong Basic Skills.
          </p>
          <p>
            Whenever allies attack, Professor M also gains Action Gauge and Cooling stacks, chaining directly into her 0-cooldown trigger Special Skill. When paired with high-turn-frequency carries like Amora or Bunnygirl Charlotte, her total team damage contribution is unmatched—though if your main Attacker is under-invested early on, her ceiling will naturally depend on your carry&apos;s stats.
          </p>
          <AppMediaTableLink href="/starsavior/characters/professor-m" label="Professor M Evaluation, Skills & Best Equipment Builds" />
        </div>

        <div className="space-y-2 pt-2">
          <AppMediaH3 id="analysis-bride-carmen">Carmen: Eternal Promise Dominates on a Party-Wide Level</AppMediaH3>
          <p>
            <strong className="text-white">Carmen: Eternal Promise</strong> (Moon Supporter) boasts top-class healing and damage-sharing protection via her off-turn trigger skill, shining through overall team survivability and enabling fragile Attackers to play aggressively as pseudo-tanks.
          </p>
          <AppMediaH4>How to Use Alongside Asherah: Waltz of Starlight</AppMediaH4>
          <p>
            While Carmen: Eternal Promise provides stronger raw healing and single-target damage redirection, her debuff cleanse is single-target. Using Carmen: Eternal Promise and Asherah: Waltz of Starlight depending on the boss—or running both together in high-difficulty raids—forms an unbreakable core.
          </p>
          <AppMediaTableLink href="/starsavior/characters/bride-carmen" label="Carmen: Eternal Promise Evaluation, Skills & Best Equipment Builds" />
        </div>

        <div className="space-y-2 pt-2">
          <AppMediaH3 id="analysis-bunny-charles">Bunnygirl Charlotte is Consistently Powerful</AppMediaH3>
          <p>
            <strong className="text-white">Bunnygirl Charlotte</strong> (Sun Assassin) excels at sustained single-target damage: while holding her Special Skill&apos;s &quot;Lucky Token&quot;, her Basic Skill strikes twice consecutively, and her Ultimate Skill features a cooldown reset mechanic.
          </p>
          <p>
            Combined with her team-wide ATK buff and self-healing via Nova Burst, she is completely self-sufficient and fits effortlessly into any 4-unit composition.
          </p>
          <AppMediaTableLink href="/starsavior/characters/bunny-charles" label="Bunnygirl Charlotte Evaluation, Skills & Best Equipment Builds" />
        </div>

        <div className="space-y-2 pt-2">
          <AppMediaH3 id="analysis-swimsuit-smile">Smile: Sunshine Cat Excels in Boss Battles</AppMediaH3>
          <p>
            In single-target boss encounters, <strong className="text-white">Smile: Sunshine Cat</strong> (Star Assassin) triggers high-frequency follow-up Special Skills by consuming 2 Leap Stacks—which she generates rapidly through her Nova Burst and her signature SSR Arcana &quot;Vacation Prep Starts with Shopping!&quot;. Her Special Skill also inflicts Toughness damage, breaking boss shields effortlessly.
          </p>
          <AppMediaTableLink href="/starsavior/characters/swimsuit-smile" label="Smile: Sunshine Cat Evaluation, Skills & Best Equipment Builds" />
        </div>

        <div className="space-y-2 pt-2">
          <AppMediaH3 id="analysis-dress-asherah">Asherah: Waltz of Starlight Has Slightly Dropped in Priority</AppMediaH3>
          <p>
            <strong className="text-white">Asherah: Waltz of Starlight</strong> (Order Supporter) remains an excellent healer/sub-DPS at LB1+, but because <strong className="text-[#fbbf24]">Cross Attacks can only trigger once per turn</strong>, running her alongside Professor M causes Professor M to consume the Cross Attack proc—reducing Asherah: Waltz of Starlight&apos;s Cross Attack healing and damage. In parties without Professor M, however, Asherah: Waltz of Starlight remains a top-tier Supporter.
          </p>
          <AppMediaTableLink href="/starsavior/characters/dress-asherah" label="Asherah: Waltz of Starlight Evaluation, Skills & Best Equipment Builds" />
        </div>
      </section>

      {/* H2: 最強キャラランキングの更新情報 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3 text-[13.5px] text-[#e8eff8] leading-relaxed">
        <AppMediaH2 id="tier-latest-updates" badge="NEW">
          Strongest Character Ranking Latest Update Info
        </AppMediaH2>
        <AppMediaH3 id="update-1st-anniv">1st Anniversary Debut: Witch of Favoritism (SSS) &amp; Guile (SS)</AppMediaH3>
        <p>
          <strong className="text-white">Witch of Favoritism</strong> (Order Striker) debuts in <strong className="text-[#fbbf24]">SSS Rank (Tier 0)</strong> thanks to her defense-ignoring 180% ATK Boss Chain Fixed Damage (~50,000+ true damage per hit), Extra Turn on Toughness Break, and Afterimage Cleave cooldown reset loop. Free 1st Anniversary login Cosmic Caster <strong className="text-white">Guile</strong> (Chaos Caster, #1 Base ATK 4,489) debuts in <strong className="text-[#f87171]">SS Rank</strong> with a permanent unremovable team-wide Break DMG aura (up to +30%) and Overture/Rhapsody/Finale Shatter support!
        </p>

        {(witchOfFavoritism || guile) && (
          <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
            <table className="w-full border-collapse text-center text-[13.5px]">
              <thead>
                <tr className="border-b border-[#243049] bg-[#161f33] text-[12.5px] font-extrabold text-[#c8d4e6]">
                  <th className="px-3 py-2 border-r border-[#243049]">Character</th>
                  <th className="px-3 py-2 border-r border-[#243049]">Overall Rank</th>
                  <th className="px-3 py-2 border-r border-[#243049]">Reroll</th>
                  <th className="px-3 py-2 border-r border-[#243049]">General PvE</th>
                  <th className="px-3 py-2 border-r border-[#243049]">Vs. Boss</th>
                  <th className="px-3 py-2">Gauntlet PvP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e293b]">
                {witchOfFavoritism && (
                  <tr>
                    <td className="p-2.5 border-r border-[#1e293b]">
                      <div className="flex justify-center">
                        <AppMediaIconCell
                          href={`/starsavior/characters/${witchOfFavoritism.slug}`}
                          name={witchOfFavoritism.name}
                          imageUrl={witchOfFavoritism.imageUrl}
                          rarity="SSR"
                          topLeftIconUrl={witchOfFavoritism.staticData?.attributeIconUrl}
                          topRightIconUrl={witchOfFavoritism.staticData?.classIconUrl}
                          size="sm"
                        />
                      </div>
                    </td>
                    <td className="p-2.5 border-r border-[#1e293b]"><AppMediaTierBadge tier="SSS" /></td>
                    <td className="p-2.5 border-r border-[#1e293b]"><AppMediaTierBadge tier="SS" /></td>
                    <td className="p-2.5 border-r border-[#1e293b]"><AppMediaTierBadge tier="SSS" /></td>
                    <td className="p-2.5 border-r border-[#1e293b]"><AppMediaTierBadge tier="SS" /></td>
                    <td className="p-2.5"><AppMediaTierBadge tier="SSS" /></td>
                  </tr>
                )}
                {guile && (
                  <tr>
                    <td className="p-2.5 border-r border-[#1e293b]">
                      <div className="flex justify-center">
                        <AppMediaIconCell
                          href={`/starsavior/characters/${guile.slug}`}
                          name={guile.name}
                          imageUrl={guile.imageUrl}
                          rarity="SSR"
                          topLeftIconUrl={guile.staticData?.attributeIconUrl}
                          topRightIconUrl={guile.staticData?.classIconUrl}
                          size="sm"
                        />
                      </div>
                    </td>
                    <td className="p-2.5 border-r border-[#1e293b]"><AppMediaTierBadge tier="SS" /></td>
                    <td className="p-2.5 border-r border-[#1e293b]"><AppMediaTierBadge tier="S" /></td>
                    <td className="p-2.5 border-r border-[#1e293b]"><AppMediaTierBadge tier="SS" /></td>
                    <td className="p-2.5 border-r border-[#1e293b]"><AppMediaTierBadge tier="SS" /></td>
                    <td className="p-2.5"><AppMediaTierBadge tier="SS" /></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        <AppMediaH3 id="update-maid-ceres">Newly Implemented: Maid Ceres (Sun Supporter)</AppMediaH3>
        <p>
          <strong className="text-white">Maid Ceres</strong> has been newly implemented as a Sun Attribute Supporter. She features two AoE healing skills, an extra-trigger Special Skill that grants continuous Regeneration, AoE debuff cleansing, and the first Supporter Ultimate Skill capable of buffing all allies&apos; ATK.
        </p>
        <AppMediaH4>Low Single-Target Burst Healing is a Caveat</AppMediaH4>
        <p>
          Because her kit is specialized around team-wide AoE healing and Regeneration over time, her single-target burst healing is relatively modest. Against endgame bosses that deal 30,000+ single-target critical hits, pairing her with a single-target healer or shielder is recommended.
        </p>

        {maidCeres && (
          <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
            <table className="w-full border-collapse text-center text-[13.5px]">
              <thead>
                <tr className="border-b border-[#243049] bg-[#161f33] text-[12.5px] font-extrabold text-[#c8d4e6]">
                  <th className="px-3 py-2 border-r border-[#243049]">Character</th>
                  <th className="px-3 py-2 border-r border-[#243049]">Overall Rank</th>
                  <th className="px-3 py-2 border-r border-[#243049]">Reroll</th>
                  <th className="px-3 py-2 border-r border-[#243049]">General PvE</th>
                  <th className="px-3 py-2 border-r border-[#243049]">Vs. Boss</th>
                  <th className="px-3 py-2">Gauntlet PvP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2.5 border-r border-[#1e293b]">
                    <div className="flex justify-center">
                      <AppMediaIconCell
                        href={`/starsavior/characters/${maidCeres.slug}`}
                        name={maidCeres.name}
                        imageUrl={maidCeres.imageUrl}
                        rarity="SSR"
                        topLeftIconUrl={maidCeres.staticData?.attributeIconUrl}
                        topRightIconUrl={maidCeres.staticData?.classIconUrl}
                        size="sm"
                      />
                    </div>
                  </td>
                  <td className="p-2.5 border-r border-[#1e293b]"><AppMediaTierBadge tier="SS" /></td>
                  <td className="p-2.5 border-r border-[#1e293b]"><AppMediaTierBadge tier="S" /></td>
                  <td className="p-2.5 border-r border-[#1e293b]"><AppMediaTierBadge tier="SS" /></td>
                  <td className="p-2.5 border-r border-[#1e293b]"><AppMediaTierBadge tier="A" /></td>
                  <td className="p-2.5"><AppMediaTierBadge tier="S" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* H2: スターセイヴァー最強はだれ？ (Reader Poll) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="tier-poll-section">Who Do You Think is the Strongest in Star Savior?</AppMediaH2>
        <AppMediaCommunityPoll
          pollKey="starsavior-strongest-char"
          title="Reader Vote: Strongest Playable Savior"
          subtitle="Click Vote on any Savior below to add your vote to the community ranking"
          initialOptions={pollInitial}
        />
      </section>

      {/* H2: 最強キャラの簡易紹介 (All 59 Characters Detailed Breakdown by Tier!) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-5">
        <AppMediaH2 id="tier-brief-overviews" badge="ALL 59 SAVIORS">
          Brief Overview of Strongest Characters by Rank
        </AppMediaH2>

        {tiersOrder.map((tKey) => {
          const group = characters.filter((c) => resolveDisplayTier(c) === tKey);
          if (group.length === 0) return null;
          return (
            <div key={tKey} className="space-y-2.5">
              <AppMediaH3 id={`overview-${tKey.toLowerCase()}`}>
                {tKey} Rank ({TIER_COLOR_STYLES[tKey]?.label}) — {group.length} Characters
              </AppMediaH3>
              <AppMediaDetailedCharEvalTable characters={group} />
            </div>
          );
        })}
      </section>

      {/* H2: 最強キャラの評価基準 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4 text-[13.5px] text-[#e8eff8] leading-relaxed">
        <AppMediaH2 id="tier-evaluation-criteria">Strongest Character Evaluation Criteria</AppMediaH2>

        <AppMediaH3 id="criteria-pve">PvE Performance is the Main Evaluation Axis</AppMediaH3>
        <p>
          Across Star Savior&apos;s current game modes, progressing through PvE content (Operations, Rescue Journey Hard, Cosmo Gate, Cube Palace, and Flashpoint) yields the largest account progression rewards. Our overall ranking weights PvE performance as the primary baseline while factoring in Gauntlet PvP strength.
        </p>

        <AppMediaH3 id="criteria-attackers">Attackers Are Evaluated With Priority</AppMediaH3>
        <p>
          Breaking through stages with high DPS is fundamental in Star Savior. We evaluate Attackers based on both single-hit burst multipliers and turn frequency (Action Gauge self-advance, extra turns, and cooldown resets). All evaluations assume Lv.200 stats and invested skills.
        </p>

        <AppMediaH3 id="criteria-supporters">Supporters Are Also Evaluated on Damage Contribution</AppMediaH3>
        <p>
          Supporters and Defenders who contribute offensive buffs, Cross Attacks, or sub-DPS while sustaining the team are evaluated on par with or above pure Attackers.
        </p>

        <AppMediaH3 id="criteria-single-target">Single-Target DPS is Heavily Emphasized</AppMediaH3>
        <p>
          Because boss battles end the moment the boss is defeated, high single-target damage multipliers paired with self-ATK, Crit Rate, and Crit DMG buffs are weighted higher than low-multiplier AoE skills.
        </p>

        <AppMediaH3 id="criteria-support-utility">Support Utility is Also an Important Metric</AppMediaH3>
        <p>
          Because generic ATK buffs overwrite each other rather than stacking, DEF Down debuffs and Damage Taken Up debuffs—which multiply with ATK buffs—receive high evaluation scores.
        </p>

        <AppMediaH3 id="criteria-class-table">Evaluation Criteria Table for Each Class</AppMediaH3>
        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[13.5px]">
            <thead>
              <tr className="border-b border-[#243049] bg-[#161f33] text-[12.5px] font-extrabold text-[#c8d4e6]">
                <th className="w-36 px-3.5 py-2 border-r border-[#243049]">Class</th>
                <th className="px-3.5 py-2">Key Evaluation Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]">
              <tr>
                <td className="px-3.5 py-2.5 font-bold text-white border-r border-[#1e293b]">Striker</td>
                <td className="px-3.5 py-2.5 space-y-0.5">
                  <div>• Evaluated on ease of dealing consistent high damage</div>
                  <div>• Bonus points for strong AoE coverage and self-sufficient offensive buffs</div>
                </td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-bold text-white border-r border-[#1e293b]">Ranger</td>
                <td className="px-3.5 py-2.5 space-y-0.5">
                  <div>• Evaluated on sustained damage and Cross Attack triggers</div>
                  <div>• Major bonus points for offensive debuffs (especially DEF Down & Damage Taken Up)</div>
                </td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-bold text-white border-r border-[#1e293b]">Defender</td>
                <td className="px-3.5 py-2.5 space-y-0.5">
                  <div>• Evaluated primarily on frontline mitigation, Taunt, Barriers, and Defend Forward</div>
                  <div>• Bonus points for team-wide Speed/DEF buffs or sub-DPS scaling</div>
                </td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-bold text-white border-r border-[#1e293b]">Assassin</td>
                <td className="px-3.5 py-2.5 space-y-0.5">
                  <div>• Evaluated on single-target burst damage and turn frequency (Action Gauge & Speed buffs)</div>
                </td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-bold text-white border-r border-[#1e293b]">Caster</td>
                <td className="px-3.5 py-2.5 space-y-0.5">
                  <div>• Evaluated on AoE wave clear, unique permanent ally buffs, and debuff utility</div>
                </td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-bold text-white border-r border-[#1e293b]">Supporter</td>
                <td className="px-3.5 py-2.5 space-y-0.5">
                  <div>• Evaluated on AoE/single-target healing, debuff cleansing, Action Gauge support, and offensive buffs</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <AppMediaStrategyFooter characters={characters} />
    </div>
  );
}
