'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import type { GameWikiDataset } from '@/domain/schemas';
import {
  AppMediaH2,
  AppMediaH3,
  AppMediaH4,
  AppMediaTierBadge,
  AppMediaIconCell,
  TIER_COLOR_STYLES,
} from '@/components/micro/AppMediaHeadings';
import { AppMediaTocBox } from '@/components/medium/AppMediaTocAndWidgets';
import {
  AppMediaDetailedArcanaEvalTable,
  AppMediaStrategyFooter,
} from '@/components/medium/AppMediaStrategyBlocks';

const ARCANA_TOC = [
  {
    id: 'arcana-tier-matrix',
    label: 'Strongest Arcana Ranking & Tier Matrix',
    subItems: [
      { id: 'arcana-top-tilia', label: 'The Strongest is "Weakness Correction Custom Training"' },
      { id: 'arcana-top-frey', label: '"Indomitable Masterpiece" is Equally Powerful' },
      { id: 'arcana-top-carnelia', label: '"Death to Flowers" With Stigmata of Insight' },
    ],
  },
  {
    id: 'arcana-latest-news',
    label: 'Strongest Arcana Latest Release Info',
    subItems: [
      { id: 'arcana-new-maid-ceres', label: 'Maid Ceres SSR Arcana "Harsh Trial" Implemented!' },
      { id: 'arcana-new-seira', label: 'Seira SSR Arcana "Sandman\'s Outing" Implemented!' },
    ],
  },
  {
    id: 'arcana-brief-overviews',
    label: 'Brief Overview of Strongest Arcana by Rank (SS–B)',
    subItems: [
      { id: 'arcana-rank-ss', label: 'SS Rank (Tier 1)' },
      { id: 'arcana-rank-s', label: 'S Rank (Tier 2)' },
      { id: 'arcana-rank-a', label: 'A Rank (Tier 3)' },
      { id: 'arcana-rank-b', label: 'B Rank (Tier 4)' },
    ],
  },
  {
    id: 'arcana-complete-database',
    label: 'Complete 83 Arcana Cards Database (SSR / SR / R)',
  },
  {
    id: 'arcana-evaluation-criteria',
    label: 'Strongest Arcana Evaluation Criteria',
  },
];

const TAG_COLUMNS = ['Power', 'Vitality', 'Endurance', 'Focus', 'Protection'] as const;

export function ArcanaTierListMacro({ dataset }: { dataset: GameWikiDataset }) {
  const { game, characters, arcana } = dataset;
  const [selectedRarity, setSelectedRarity] = useState<string>('ALL');
  const [selectedTag, setSelectedTag] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const ssrArcana = useMemo(() => arcana.filter((a) => a.rarity === 'SSR'), [arcana]);

  const filteredDatabase = useMemo(() => {
    return arcana.filter((a) => {
      if (selectedRarity !== 'ALL' && a.rarity !== selectedRarity) return false;
      if (selectedTag !== 'ALL' && a.staticData?.statTag !== selectedTag) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = a.name.toLowerCase().includes(q);
        const matchChar = (a.staticData?.characterName || '').toLowerCase().includes(q);
        const matchPot = a.effectSummary.toLowerCase().includes(q);
        if (!matchName && !matchChar && !matchPot) return false;
      }
      return true;
    });
  }, [arcana, selectedRarity, selectedTag, searchQuery]);

  return (
    <div className="space-y-6">
      {/* H1 Header Box */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-3">
        <div className="flex items-center gap-3.5">
          <img
            src="https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp"
            alt="Strongest Arcana Tier List"
            className="h-14 w-14 rounded-lg border border-[#eab308]/60 object-cover shrink-0"
            loading="eager"
          />
          <div>
            <div className="text-[11px] font-bold text-[#93c5fd]">
              Updated: 2026/11/10 · {game.patchVersion} · All 83 Arcana Cards
            </div>
            <h1 className="mt-0.5 text-lg sm:text-xl font-black text-white">
              [Star Savior] Strongest Arcana Ranking, Tier List & 83-Card Encyclopedia
            </h1>
          </div>
        </div>

        <p className="text-[12px] text-[#cbd5e1] leading-relaxed">
          This page presents the Star Savior Strongest Arcana Ranking (Tier List) and complete 83-card encyclopedia. Use this guide to check the best SSR, SR, and R Arcana Special Potentials, Training Tag bonuses, and Rescue Journey event effects.
        </p>

        {/* Top Ranking Switcher Table */}
        <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626]">
          <div className="border-b border-[#243049] bg-[#161f33] px-3 py-1.5 text-center text-[11px] font-extrabold text-[#f8fafc]">
            Star Savior Strongest Rankings
          </div>
          <div className="grid grid-cols-3 divide-x divide-[#1e293b] text-center text-[12px] font-bold">
            <Link href="/starsavior/tier-list" className="py-2.5 text-[#60a5fa] hover:bg-[#17223b]">
              Strongest Characters
            </Link>
            <Link href="/starsavior/arcana" className="bg-[#2563eb]/25 py-2.5 text-white">
              Strongest Arcana
            </Link>
            <Link href="/starsavior/reroll" className="py-2.5 text-[#60a5fa] hover:bg-[#17223b]">
              Reroll Tier List
            </Link>
          </div>
        </div>

        <AppMediaTocBox items={ARCANA_TOC} />
      </section>

      {/* H2: 最強アルカナランキング (Tag-Split Tier Matrix) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4 text-[12px] text-[#cbd5e1] leading-relaxed">
        <AppMediaH2 id="arcana-tier-matrix" badge="48 SSR CARDS">
          Strongest Arcana Ranking (By Training Tag)
        </AppMediaH2>

        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0b101b]">
          <table className="w-full min-w-[780px] border-collapse">
            <thead>
              <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold text-[#cbd5e1]">
                <th className="w-24 px-2 py-2.5 text-center border-r border-[#243049]">RANK</th>
                {TAG_COLUMNS.map((tag) => (
                  <th key={tag} className="px-2.5 py-2.5 text-center border-r last:border-r-0 border-[#243049]">
                    {tag} Tag
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]">
              {(['SS', 'S', 'A', 'B', 'C'] as const).map((tierKey, idx) => {
                const rowCards = ssrArcana.filter((a) => (a.staticData?.appMediaTier || a.tier) === tierKey);
                const tStyle = TIER_COLOR_STYLES[tierKey];
                return (
                  <tr key={tierKey} className="hover:bg-[#111827]/60">
                    <td className={`p-2 text-center align-middle border-r border-[#243049] ${tStyle.bg}`}>
                      <div className="text-lg font-black text-white">{tierKey}</div>
                      <div className="mt-0.5 text-[10px] font-bold text-white/90">Tier {idx + 1}</div>
                    </td>
                    {TAG_COLUMNS.map((tag) => {
                      const cellCards = rowCards.filter((a) => (a.staticData?.statTag || 'Power') === tag);
                      return (
                        <td key={tag} className="p-2.5 align-top border-r last:border-r-0 border-[#1e293b]">
                          {cellCards.length === 0 ? (
                            <div className="py-4 text-center text-[11px] text-[#475569]">—</div>
                          ) : (
                            <div className="flex flex-wrap gap-2">
                              {cellCards.map((a) => (
                                <AppMediaIconCell
                                  key={a.slug}
                                  href={`#${a.slug}`}
                                  name={a.name}
                                  imageUrl={a.imageUrl}
                                  rarity="SSR"
                                  topLeftIconUrl={a.staticData?.statTagIconUrl}
                                  badgeText={a.staticData?.appMediaTier || a.tier}
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

        {/* H3: 最強は弱点補完カスタム特訓 */}
        <AppMediaH3 id="arcana-top-tilia">
          The Strongest Arcana is &quot;Weakness Correction Custom Training&quot;
        </AppMediaH3>
        <p>
          Tilia&apos;s featured SSR Arcana <strong className="text-white">&quot;Weakness Correction Custom Training&quot;</strong> (Power Tag / Universal Bonus) grants the Special Potential <strong className="text-[#fbbf24]">[Sharp Offensive] (+6% ATK & +6% Crit Rate)</strong> and provides a massive +5 Power training bonus. Because it frees up Stellar Archive slots for other stats and fits every single Attacker in the game, it is the #1 priority Arcana to level.
        </p>

        {/* H3: 不屈の傑作も同格の強さ */}
        <AppMediaH3 id="arcana-top-frey">
          &quot;Indomitable Masterpiece&quot; is Equally Powerful
        </AppMediaH3>
        <p>
          Frey&apos;s featured SSR Arcana <strong className="text-white">&quot;Indomitable Masterpiece&quot;</strong> (Power Tag / Universal Bonus) grants <strong className="text-[#fbbf24]">[Sturdy Destruction] (+12% Crit DMG & +4% Max HP)</strong> alongside [Sense of Attack] (+5% ATK). Its hybrid Crit DMG + Max HP boost makes it top-tier for both Attackers and offensive Supporters/Defenders like Emily and Dress Asherah.
        </p>

        {/* H3: 洞察の聖痕持ちの花々に死を */}
        <AppMediaH3 id="arcana-top-carnelia">
          &quot;Death to Flowers&quot; With Stigmata of Insight (+18% Crit Rate)
        </AppMediaH3>
        <p>
          Carnelia&apos;s featured SSR Arcana <strong className="text-white">&quot;Death to Flowers&quot;</strong> (Endurance Tag / Universal Bonus) grants the coveted <strong className="text-[#fbbf24]">[Stigmata of Insight] (+18% Crit Rate)</strong> alongside +4 Bonus Potential Points and +4 Power training bonuses—making it an irreplaceable staple in high-rank Rescue Journey decks.
        </p>
      </section>

      {/* H2: 最強アルカナの最新情報 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3 text-[12px] text-[#cbd5e1] leading-relaxed">
        <AppMediaH2 id="arcana-latest-news" badge="NEW">
          Strongest Arcana Latest Release Info
        </AppMediaH2>
        <AppMediaH3 id="arcana-new-maid-ceres">Maid Ceres SSR Arcana &quot;Harsh Trial&quot; Implemented!</AppMediaH3>
        <p>
          Maid Ceres&apos;s featured SSR Arcana <strong className="text-white">&quot;Harsh Trial&quot;</strong> has been implemented as a Vitality Tag Supporter-Exclusive card. Its Special Potential increases Speed by 4 whenever a non-attack Special Skill is used (stacking up to 5 times for +20 Speed). Because Offensive Supporters whose Special Skill is an attack (such as Dress Asherah) cannot trigger it, it is rated <strong className="text-[#fbbf24]">A Rank</strong>.
        </p>

        <AppMediaH3 id="arcana-new-seira">Seira SSR Arcana &quot;Sandman&apos;s Outing&quot; Implemented!</AppMediaH3>
        <p>
          Seira&apos;s featured SSR Arcana <strong className="text-white">&quot;Sandman&apos;s Outing&quot;</strong> (Vitality Tag / Savior-Exclusive) grants &quot;Sweet Dreams&quot; (+1 Toughness damage for 3 turns) and +2 Nova Force after using a non-attack skill. While +2 Nova Force is convenient, running offensive Power/Endurance Arcana generally yields higher DPS.
        </p>
      </section>

      {/* H2: 最強アルカナの簡易解説 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-5">
        <AppMediaH2 id="arcana-brief-overviews">Brief Overview of Strongest SSR Arcana by Rank</AppMediaH2>
        {(['SS', 'S', 'A', 'B', 'C'] as const).map((tierKey, idx) => {
          const group = ssrArcana.filter((a) => (a.staticData?.appMediaTier || a.tier) === tierKey);
          return (
            <div key={tierKey} className="space-y-2.5">
              <AppMediaH3 id={`arcana-rank-${tierKey.toLowerCase()}`}>
                {tierKey} Rank (Tier {idx + 1}) — {group.length} SSR Arcana Cards
              </AppMediaH3>
              <AppMediaDetailedArcanaEvalTable arcanaList={group} />
            </div>
          );
        })}
      </section>

      {/* H2: Complete 83 Arcana Encyclopedia (SSR / SR / R) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaH2 id="arcana-complete-database" badge="83 CARDS">
          Complete 83 Arcana Encyclopedia (SSR / SR / R)
        </AppMediaH2>

        <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[#243049] bg-[#0f1626] p-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {(['ALL', 'SSR', 'SR', 'R'] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setSelectedRarity(r)}
                className={`rounded px-2.5 py-1 text-[11px] font-bold ${
                  selectedRarity === r ? 'bg-[#2563eb] text-white' : 'bg-[#161f33] text-[#cbd5e1]'
                }`}
              >
                {r === 'ALL' ? `All Rarities (${arcana.length})` : r}
              </button>
            ))}
            <span className="mx-1 text-[#334155]">|</span>
            <button
              type="button"
              onClick={() => setSelectedTag('ALL')}
              className={`rounded px-2.5 py-1 text-[11px] font-bold ${
                selectedTag === 'ALL' ? 'bg-[#2563eb] text-white' : 'bg-[#161f33] text-[#cbd5e1]'
              }`}
            >
              All Tags
            </button>
            {TAG_COLUMNS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag === selectedTag ? 'ALL' : tag)}
                className={`rounded px-2.5 py-1 text-[11px] font-bold ${
                  selectedTag === tag ? 'bg-[#2563eb] text-white' : 'bg-[#161f33] text-[#cbd5e1]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Arcana, Savior, Potential..."
            className="rounded border border-[#243049] bg-[#090d16] px-3 py-1 text-[11px] text-white placeholder-[#64748b] focus:border-[#3b82f6] focus:outline-none"
          />
        </div>

        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[12px]">
            <thead>
              <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold text-[#94a3b8]">
                <th className="w-64 px-3.5 py-2.5 border-r border-[#243049]">Arcana Card ({filteredDatabase.length})</th>
                <th className="w-24 px-3 py-2.5 text-center border-r border-[#243049]">Rarity / Rank</th>
                <th className="w-40 px-3 py-2.5 border-r border-[#243049]">Tag & Savior</th>
                <th className="px-3.5 py-2.5">Unique Effect, Potentials, Journey Bonuses & Events</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]">
              {filteredDatabase.map((a) => (
                <tr key={a.slug} id={a.slug} className="hover:bg-[#141d30] scroll-mt-24 align-top">
                  <td className="p-3 border-r border-[#1e293b]">
                    <div className="flex items-start gap-3">
                      <img
                        src={a.imageUrl}
                        alt={a.name}
                        className="h-[68px] w-[68px] rounded-lg border-2 border-[#eab308]/70 object-cover shrink-0 bg-[#090d16]"
                        loading="eager"
                      />
                      <div className="space-y-1">
                        <div className="font-extrabold text-white text-[13px]">{a.name}</div>
                        <div className="text-[11px] font-semibold text-[#60a5fa]">
                          {a.staticData?.classBonus || 'Universal Bonus'} · {a.staticData?.statBonusType || 'Stat Bonus'}
                        </div>
                        {a.staticData?.evalBullets && a.staticData.evalBullets.length > 0 && (
                          <ul className="space-y-0.5 text-[10px] text-[#cbd5e1] pt-0.5">
                            {a.staticData.evalBullets.map((eb, idx) => (
                              <li key={idx}>• {eb}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-center border-r border-[#1e293b] space-y-1">
                    <div><AppMediaTierBadge tier={a.staticData?.appMediaTier || a.tier} /></div>
                    <div className="text-[11px] font-extrabold text-[#fbbf24]">{a.rarity}</div>
                  </td>
                  <td className="p-3 border-r border-[#1e293b] space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 rounded bg-[#161f33] border border-[#263452] px-2 py-0.5 text-[11px] font-bold text-white">
                      {a.staticData?.statTagIconUrl && (
                        <img src={a.staticData.statTagIconUrl} alt="" className="h-4 w-4 object-contain" loading="eager" />
                      )}
                      <span>{a.staticData?.statTag || 'Power'} Tag</span>
                    </div>
                    {a.staticData?.characterName && a.staticData.characterName !== '-' && (
                      <div className="flex items-center gap-2 text-[11px] font-bold text-[#cbd5e1]">
                        {a.staticData.characterIconUrl && (
                          <img src={a.staticData.characterIconUrl} alt="" className="h-6 w-6 rounded-full object-cover border border-[#334155]" loading="eager" />
                        )}
                        <span>{a.staticData.characterName}</span>
                      </div>
                    )}
                  </td>
                  <td className="p-3 space-y-2">
                    {/* Unique Effect (固有効果) */}
                    {a.staticData?.uniqueEffect && (
                      <div className="rounded border border-[#eab308]/40 bg-[#eab308]/10 px-2.5 py-1.5 text-[11px]">
                        <span className="font-extrabold text-[#fde047]">
                          Unique Effect (Unlock {a.staticData.uniqueEffect.unlockLevel}):{' '}
                        </span>
                        <span className="text-white font-semibold">{a.staticData.uniqueEffect.effect}</span>
                      </div>
                    )}

                    {/* Potentials (獲得潜在力) */}
                    {(a.staticData?.potentials || []).length > 0 ? (
                      <div className="space-y-1">
                        {a.staticData?.potentials?.map((p, i) => (
                          <div key={i} className="text-[11px] text-[#e2e8f0]">
                            <span className="font-extrabold text-[#93c5fd]">[{p.name}]</span>{' '}
                            <span>{p.effect}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-[11px] text-[#cbd5e1]">{a.effectSummary}</div>
                    )}

                    {/* Support Bonuses (旅の効果) */}
                    {(a.staticData?.supportBonuses || []).length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {a.staticData?.supportBonuses?.map((sb, i) => (
                          <span key={i} className="rounded bg-[#161f33] border border-[#243049] px-1.5 py-0.5 text-[10px] text-[#94a3b8]">
                            {sb.label}: <strong className="text-white">{sb.value}</strong>
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Journey Events & Choices (イベント効果と選択肢) */}
                    {a.staticData?.journeyEvents && a.staticData.journeyEvents.length > 0 && (
                      <details className="rounded border border-[#1e293b] bg-[#0b101b] p-2 text-[11px]">
                        <summary className="cursor-pointer font-extrabold text-[#60a5fa] select-none">
                          Rescue Journey Events & Choices ({a.staticData.journeyEvents.length} Events)
                        </summary>
                        <div className="mt-2 space-y-2 border-t border-[#1e293b] pt-2">
                          {a.staticData.journeyEvents.map((ev, eIdx) => (
                            <div key={eIdx} className="space-y-1">
                              <div className="font-extrabold text-[#fbbf24]">{ev.eventTitle}</div>
                              <div className="space-y-1 pl-2 border-l-2 border-[#243049]">
                                {ev.choices.map((ch, cIdx) => (
                                  <div key={cIdx} className="text-[10px]">
                                    <span className="font-bold text-[#93c5fd]">{ch.choice}: </span>
                                    <span className="text-[#cbd5e1]">{ch.outcomes.join(' / ')}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </details>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* H2: 最強アルカナの評価基準 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3 text-[12px] text-[#cbd5e1] leading-relaxed">
        <AppMediaH2 id="arcana-evaluation-criteria">Strongest Arcana Evaluation Criteria</AppMediaH2>
        <AppMediaH3>Overall Adoption Rate Across Decks is the Core Metric</AppMediaH3>
        <p>
          Our Arcana tier list evaluates cards based on how frequently they are adopted into optimal 5-card Rescue Journey decks across the entire roster.
        </p>
        <AppMediaH3>ATK, Crit Rate, Crit DMG, and Speed Potentials Are Weighted Highest</AppMediaH3>
        <p>
          Because Rescue Journey stat caps flatten out raw stat differences at high investment, an Arcana card&apos;s <strong className="text-white">Special Potential</strong> and <strong className="text-white">Common Potentials</strong> (especially ATK, Crit Rate, Crit DMG, and Speed) have the largest impact on final combat performance.
        </p>
        <AppMediaH3>Power & Vitality Tag Arcana Have Higher Base Value</AppMediaH3>
        <p>
          Power Tag cards (required for every Attacker) and Endurance/Vitality Tag cards with Universal Class Bonuses can be slotted into almost any Savior&apos;s Journey deck, earning higher baseline scores than restrictive class-locked cards.
        </p>
        <AppMediaH4>Same-Character Bonus & Unique Potentials</AppMediaH4>
        <p>
          Matching an Arcana card with its featured Title Savior activates the <strong className="text-[#fbbf24]">Same-Character Bonus</strong> and unlocks Savior-Exclusive Unique Potentials (such as Tanya&apos;s &quot;Tempura Master&quot; or Swimsuit Smile&apos;s &quot;Preparing for Vacation Starts With Shopping!&quot;).
        </p>
      </section>

      <AppMediaStrategyFooter characters={characters} />
    </div>
  );
}
