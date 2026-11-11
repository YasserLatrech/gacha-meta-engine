'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import type { CharacterEntity, ArcanaEntity, SeedBoardPost } from '../../domain/schemas';
import { AppMediaRankIcon } from './AppMediaHeadings';

export type { SeedBoardPost };

const TIER_KEYS = ['SSS', 'SS', 'S', 'A', 'B', 'C'] as const;
type MakerTier = (typeof TIER_KEYS)[number];

/* ============================================================================
 * 1. Interactive Character Tier Maker Tool
 * ============================================================================ */
export function CharacterTierMakerTool({ characters }: { characters: CharacterEntity[] }) {
  const initialMap = useMemo(() => {
    const map: Record<string, MakerTier | 'POOL'> = {};
    for (const c of characters) {
      const t = c.staticData?.appMediaTier || c.overallTier;
      if (t === 'SSS' || t === 'SS' || t === 'S' || t === 'A' || t === 'B' || t === 'C') {
        map[c.slug] = t;
      } else {
        map[c.slug] = 'POOL';
      }
    }
    return map;
  }, [characters]);

  const [placements, setPlacements] = useState<Record<string, MakerTier | 'POOL'>>(initialMap);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [roleFilter, setRoleFilter] = useState<string>('ALL');
  const [copied, setCopied] = useState(false);

  const selectedChar = useMemo(
    () => characters.find((c) => c.slug === selectedSlug) ?? null,
    [characters, selectedSlug]
  );

  const assignSelectedTo = (dest: MakerTier | 'POOL') => {
    if (!selectedSlug) return;
    setPlacements((prev) => ({ ...prev, [selectedSlug]: dest }));
    setSelectedSlug(null);
  };

  const clearAllToPool = () => {
    const reset: Record<string, MakerTier | 'POOL'> = {};
    for (const c of characters) reset[c.slug] = 'POOL';
    setPlacements(reset);
    setSelectedSlug(null);
  };

  const loadAppMediaPreset = () => {
    setPlacements(initialMap);
    setSelectedSlug(null);
  };

  const copyTierSummary = async () => {
    const lines = TIER_KEYS.map((tier) => {
      const names = characters
        .filter((c) => placements[c.slug] === tier)
        .map((c) => c.name);
      return `${tier}: ${names.length > 0 ? names.join(', ') : '-'}`;
    });
    const text = `Star Savior Custom Tier List (Ascalon.gg)\n${lines.join('\n')}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const poolChars = characters.filter(
    (c) => placements[c.slug] === 'POOL' && (roleFilter === 'ALL' || c.role === roleFilter)
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded border border-[#263450] bg-[#131c2e] p-3">
        <div className="text-[12px] text-[#cbd5e1]">
          {selectedChar ? (
            <span>
              Selected: <strong className="text-[#fbbf24]">{selectedChar.name}</strong> — click any Tier row below to place!
            </span>
          ) : (
            <span>Click any Savior icon to select them, then click a Tier row (`SSS`–`C` or Unranked Pool) to move them.</span>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={loadAppMediaPreset}
            className="rounded bg-[#1e293b] hover:bg-[#334155] border border-[#3b82f6]/50 px-2.5 py-1 text-[11px] font-bold text-[#93c5fd]"
          >
            Load AppMedia Preset
          </button>
          <button
            type="button"
            onClick={clearAllToPool}
            className="rounded bg-[#1e293b] hover:bg-[#334155] border border-[#475569] px-2.5 py-1 text-[11px] font-bold text-[#cbd5e1]"
          >
            Reset All to Pool
          </button>
          <button
            type="button"
            onClick={copyTierSummary}
            className="rounded bg-[#2563eb] hover:bg-[#1d4ed8] px-2.5 py-1 text-[11px] font-extrabold text-white"
          >
            {copied ? 'Copied Text!' : 'Copy Tier Text'}
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded border border-[#263450] bg-[#0f1626]">
        <table className="w-full border-collapse">
          <tbody>
            {TIER_KEYS.map((tier) => {
              const rowChars = characters.filter((c) => placements[c.slug] === tier);
              return (
                <tr key={tier} className="border-b border-[#243049] last:border-b-0">
                  <td
                    onClick={() => assignSelectedTo(tier)}
                    className={`w-[82px] cursor-pointer border-r border-[#243049] bg-[#151f34] p-2 text-center align-middle transition-colors ${
                      selectedSlug ? 'hover:bg-[#1e3a8a]/50 ring-inset hover:ring-1 hover:ring-[#60a5fa]' : ''
                    }`}
                    title={selectedChar ? `Move ${selectedChar.name} to ${tier}` : `${tier} Rank`}
                  >
                    <AppMediaRankIcon tier={tier} size="md" />
                    {selectedSlug && (
                      <span className="mt-1 block text-[9px] font-bold text-[#93c5fd]">+ Place Here</span>
                    )}
                  </td>
                  <td
                    onClick={() => {
                      if (selectedSlug) assignSelectedTo(tier);
                    }}
                    className="p-2.5 align-top"
                  >
                    {rowChars.length === 0 ? (
                      <span className="text-[11px] italic text-[#64748b]">Empty tier — select a Savior and click here</span>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {rowChars.map((c) => {
                          const active = selectedSlug === c.slug;
                          return (
                            <button
                              key={c.slug}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedSlug(active ? null : c.slug);
                              }}
                              className={`group flex w-[62px] flex-col items-center text-center transition-transform ${
                                active ? 'scale-105' : 'hover:-translate-y-0.5'
                              }`}
                            >
                              <div
                                className={`relative h-[54px] w-[54px] overflow-hidden rounded-lg border-2 bg-[#090d16] ${
                                  active
                                    ? 'border-[#fbbf24] ring-2 ring-[#fbbf24]/60'
                                    : c.rarity === 'SSR'
                                    ? 'border-[#eab308]/75'
                                    : 'border-[#a855f7]/75'
                                }`}
                              >
                                <img src={c.imageUrl} alt={c.name} className="h-full w-full object-cover" />
                              </div>
                              <span className="mt-1 line-clamp-1 w-full text-[10px] font-bold text-[#e2e8f0]">
                                {c.name}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Unranked Pool */}
      <div className="rounded border border-[#263450] bg-[#111827] p-3 space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => assignSelectedTo('POOL')}
            className="text-[12px] font-extrabold text-[#93c5fd] hover:underline"
          >
            Unranked Character Pool ({poolChars.length}) {selectedSlug ? '— Click to Move Selected Back to Pool' : ''}
          </button>
          <div className="flex flex-wrap gap-1">
            {['ALL', 'Striker', 'Caster', 'Ranger', 'Assassin', 'Defender', 'Supporter'].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRoleFilter(r)}
                className={`rounded px-2 py-0.5 text-[10px] font-bold ${
                  roleFilter === r
                    ? 'bg-[#2563eb] text-white'
                    : 'bg-[#1e293b] text-[#94a3b8] hover:text-white'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
        {poolChars.length === 0 ? (
          <p className="text-[11px] text-[#64748b]">All matching Saviors are currently placed in the tier rows above.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {poolChars.map((c) => {
              const active = selectedSlug === c.slug;
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setSelectedSlug(active ? null : c.slug)}
                  className="flex w-[62px] flex-col items-center text-center"
                >
                  <div
                    className={`h-[52px] w-[52px] overflow-hidden rounded-lg border-2 ${
                      active ? 'border-[#fbbf24] ring-2 ring-[#fbbf24]/60' : 'border-[#334155]'
                    }`}
                  >
                    <img src={c.imageUrl} alt={c.name} className="h-full w-full object-cover" />
                  </div>
                  <span className="mt-1 line-clamp-1 w-full text-[10px] font-bold text-[#cbd5e1]">{c.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================================
 * 2. Interactive Arcana Tier Maker Tool
 * ============================================================================ */
export function ArcanaTierMakerTool({ arcana }: { arcana: ArcanaEntity[] }) {
  const ssrAndSr = useMemo(() => arcana.filter((a) => a.rarity === 'SSR' || a.rarity === 'SR'), [arcana]);

  const initialMap = useMemo(() => {
    const map: Record<string, MakerTier | 'POOL'> = {};
    for (const a of ssrAndSr) {
      const t = a.staticData?.appMediaTier || a.tier;
      if (t === 'SSS' || t === 'SS' || t === 'S' || t === 'A' || t === 'B' || t === 'C') {
        map[a.slug] = t;
      } else {
        map[a.slug] = 'POOL';
      }
    }
    return map;
  }, [ssrAndSr]);

  const [placements, setPlacements] = useState<Record<string, MakerTier | 'POOL'>>(initialMap);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [tagFilter, setTagFilter] = useState<string>('ALL');

  const selectedArcana = useMemo(
    () => ssrAndSr.find((a) => a.slug === selectedSlug) ?? null,
    [ssrAndSr, selectedSlug]
  );

  const assignSelectedTo = (dest: MakerTier | 'POOL') => {
    if (!selectedSlug) return;
    setPlacements((prev) => ({ ...prev, [selectedSlug]: dest }));
    setSelectedSlug(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded border border-[#263450] bg-[#131c2e] p-3">
        <div className="text-[12px] text-[#cbd5e1]">
          {selectedArcana ? (
            <span>
              Selected Arcana: <strong className="text-[#fbbf24]">{selectedArcana.name}</strong> — click any Tier row below to place!
            </span>
          ) : (
            <span>Select any SSR/SR Arcana card, then click a Tier row (`SSS`–`C`) to customize your deck tier list.</span>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {['ALL', 'Power', 'Health', 'Endurance', 'Focus', 'Protect'].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setTagFilter(tag)}
              className={`rounded px-2 py-1 text-[11px] font-bold ${
                tagFilter === tag ? 'bg-[#2563eb] text-white' : 'bg-[#1e293b] text-[#94a3b8] hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              const reset: Record<string, MakerTier | 'POOL'> = {};
              for (const a of ssrAndSr) reset[a.slug] = 'POOL';
              setPlacements(reset);
            }}
            className="rounded bg-[#1e293b] border border-[#475569] px-2.5 py-1 text-[11px] font-bold text-[#cbd5e1]"
          >
            Reset Pool
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded border border-[#263450] bg-[#0f1626]">
        <table className="w-full border-collapse">
          <tbody>
            {TIER_KEYS.map((tier) => {
              const rowItems = ssrAndSr.filter(
                (a) =>
                  placements[a.slug] === tier &&
                  (tagFilter === 'ALL' || a.staticData?.statTag === tagFilter)
              );
              return (
                <tr key={tier} className="border-b border-[#243049] last:border-b-0">
                  <td
                    onClick={() => assignSelectedTo(tier)}
                    className="w-[82px] cursor-pointer border-r border-[#243049] bg-[#151f34] p-2 text-center align-middle hover:bg-[#1e3a8a]/40"
                  >
                    <AppMediaRankIcon tier={tier} size="md" />
                  </td>
                  <td
                    onClick={() => {
                      if (selectedSlug) assignSelectedTo(tier);
                    }}
                    className="p-2.5 align-top"
                  >
                    {rowItems.length === 0 ? (
                      <span className="text-[11px] italic text-[#64748b]">No matching Arcanas in {tier}</span>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {rowItems.map((a) => {
                          const active = selectedSlug === a.slug;
                          return (
                            <button
                              key={a.slug}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedSlug(active ? null : a.slug);
                              }}
                              className="flex w-[70px] flex-col items-center text-center"
                              title={`${a.name} (${a.staticData?.statTag || a.subType})`}
                            >
                              <div
                                className={`h-[56px] w-[56px] overflow-hidden rounded-lg border-2 ${
                                  active
                                    ? 'border-[#fbbf24] ring-2 ring-[#fbbf24]/60'
                                    : a.rarity === 'SSR'
                                    ? 'border-[#eab308]/75'
                                    : 'border-[#a855f7]/75'
                                }`}
                              >
                                <img src={a.imageUrl} alt={a.name} className="h-full w-full object-cover" />
                              </div>
                              <span className="mt-1 line-clamp-2 w-full text-[10px] font-bold leading-tight text-[#e2e8f0]">
                                {a.name}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ============================================================================
 * 3. Rescue Journey Event Choice Checker Tool
 * ============================================================================ */
interface IndexedJourneyEvent {
  id: string;
  sourceType: 'Arcana' | 'Shared';
  sourceName: string;
  sourceRarity: string;
  sourceTag: string;
  iconUrl?: string;
  eventTitle: string;
  choices: { choice: string; outcomes: string[] }[];
}

const SHARED_JOURNEY_EVENTS: IndexedJourneyEvent[] = [
  {
    id: 'shared-mar1-exam',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Early March (NOA · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'All Stats',
    eventTitle: 'Basic Exam: Preparation',
    choices: [
      { choice: 'Fluffy Stuffed Toy', outcomes: ['Potential Points +5', 'Charm: Fluffy Stuffed Toy'] },
      { choice: 'Noisy Cuckoo Clock', outcomes: ['Potential Points +5', 'Charm: Noisy Cuckoo Clock'] },
      { choice: 'Scales of Balance', outcomes: ['Potential Points +5', 'Charm: Scales of Balance'] },
    ],
  },
  {
    id: 'shared-mar1-hard-dir',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Early March (NOA · HARD)',
    sourceRarity: 'HARD',
    sourceTag: 'Power / Health / Endurance / Focus / Protect',
    eventTitle: 'Training Direction (Hard Evidence Selector)',
    choices: [
      {
        choice: 'Support helpful for Offense',
        outcomes: ['Power +5', 'Health +5', 'Unlocks Mid-March Evidence: Glove (AX) / Helm (EX) / Necklace (FX)'],
      },
      {
        choice: 'Support helpful for Survival',
        outcomes: ['Health +5', 'Endurance +5', 'Unlocks Mid-March Evidence: Armor (BX) / Greaves (CX) / Boots (DX)'],
      },
      {
        choice: 'Support helpful for Variable Control',
        outcomes: ['Focus +5', 'Protect +5', 'Unlocks Mid-March Evidence: Eyeguard (GX) / Cloak (HX) / Mask (Trajectory)'],
      },
      {
        choice: 'Support helpful for Tactical Operations',
        outcomes: ['Ancient Coins +20', 'Unlocks Mid-March Evidence: Gauntlet (XX1 Counter +20%) / Totem (XX2 Lifesteal +15%) / Protector (XX3 Toughness +3)'],
      },
    ],
  },
  {
    id: 'shared-mar2-supplies',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Mid March (NOA · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Power / Health / Endurance',
    eventTitle: 'Supplies from the Rescue Corps',
    choices: [
      { choice: 'Choose the nutritional supplement.', outcomes: ['Power +10', 'Item: Satisfaction Survey'] },
      { choice: 'Choose the fluffy pillow.', outcomes: ['Health +10', 'Item: Satisfaction Survey'] },
      { choice: 'Choose the spicy food.', outcomes: ['Endurance +10', 'Item: Satisfaction Survey'] },
    ],
  },
  {
    id: 'shared-mar2-freetime',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Mid March (NOA · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Vitality / All Stats',
    eventTitle: 'Free Time',
    choices: [
      {
        choice: '[50 Ancient Coins] Go eat limited-time sweets!',
        outcomes: ['Random: Condition +1 OR Condition +2', 'Potential Points +10'],
      },
      {
        choice: '[30 Ancient Coins] Go watch the latest movie!',
        outcomes: ['Random: Potential Points +15 OR +30', 'Item: Bonus Poster'],
      },
      {
        choice: '[20 Ancient Coins] Bring sandwiches for a picnic!',
        outcomes: ['Power / Health / Endurance +10~20', 'Focus / Protect +5~10'],
      },
      { choice: 'Take it easy and rest today.', outcomes: ['Vitality +5~10'] },
    ],
  },
  {
    id: 'shared-mar2-statue',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Mid March (NOA · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Power / Health',
    eventTitle: 'Mysterious Stone Statue',
    choices: [
      {
        choice: 'Pray to the statue holding a sword.',
        outcomes: ['Power +20', 'Health -20', 'Item: Stone Statue Blade (Unlocks Late Jan Power +20 / Health +20)'],
      },
      {
        choice: 'Pray to the statue holding a flower.',
        outcomes: ['Health +20', 'Power -20', 'Item: Stone Statue Flower (Unlocks Late Jan Power +20 / Health +20)'],
      },
      { choice: 'Do not pray.', outcomes: ['No effect'] },
    ],
  },
  {
    id: 'shared-apr2-reset',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Late April (NOA · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Vitality',
    eventTitle: "Reset's Daily Routine",
    choices: [
      {
        choice: '[Vitality -20] Help out.',
        outcomes: ['Ancient Coins +30 or +50', 'State: [Daily Part-Timer] (1T)', 'Chance for Condition +1'],
      },
      { choice: 'Wait a little.', outcomes: ['No effect'] },
    ],
  },
  {
    id: 'shared-may2-merchant',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Mid May (NOA · HARD)',
    sourceRarity: 'HARD',
    sourceTag: 'Power / Health',
    eventTitle: 'Unidentified Merchant',
    choices: [
      { choice: '[30 Ancient Coins] Secret manual useful for Offense', outcomes: ['Potential [Skill of Attack] -10% or -20% Discount'] },
      { choice: '[30 Ancient Coins] Secret manual useful for Survival', outcomes: ['Potential [Skill of Life] -10% or -20% Discount'] },
      { choice: '[50 Ancient Coins] Is there a manual usable in any situation?', outcomes: ['Potential [Skill of Speed] -10% or -20% Discount'] },
      { choice: 'I need nothing.', outcomes: ['Random: [Skill of Protect] -10% OR [Skill of Focus] -10% Discount'] },
    ],
  },
  {
    id: 'shared-may2-workshop',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Mid May (NOA · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Power / Vitality',
    eventTitle: 'Weapon Workshop Marketing Strategy',
    choices: [
      { choice: '[50 Ancient Coins] Pay money to purchase it.', outcomes: ['Vitality +10 or +15', 'Charm: Replica Legendary Sword'] },
      { choice: '[Focus Check 70/50/30] Find its weak spot and strike.', outcomes: ['Power +15', 'Condition +1', 'Charm: Replica Legendary Sword'] },
      { choice: '[Vitality -20] Pull it out by sheer force.', outcomes: ['Power +20', 'State: [Legendary Savior] (3T)', 'Charm: Replica Legendary Sword'] },
      { choice: 'Walk past.', outcomes: ['Vitality +5'] },
    ],
  },
  {
    id: 'shared-may2-discovery',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Mid May (NOA · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Power / Health / Endurance',
    eventTitle: 'Unexpected Discovery',
    choices: [
      {
        choice: '[Vitality -10] It will take effort, but dig it up!',
        outcomes: ['Success: Potential Points +10 + Suspicious Box (+10 Power/Health/Endurance in Late Sep)', 'Failure: No effect'],
      },
      { choice: 'No stamina to waste in a place like this!', outcomes: ['No effect'] },
    ],
  },
  {
    id: 'shared-may2-hell',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Mid May (NOA · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Power / Health',
    eventTitle: 'Secret Hell Training',
    choices: [
      { choice: 'How to hit the punching machine effectively', outcomes: ['State: [Overcoming Constraints] (3T)', 'Item: Power Training Certificate'] },
      { choice: 'How to keep running without getting tired', outcomes: ['State: [Reckless Challenge] (3T)', 'Item: Health Training Certificate'] },
      { choice: "I'm fine for now.", outcomes: ['No effect'] },
    ],
  },
  {
    id: 'shared-jun2-temptation',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Late June (NOA · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Focus / Protect',
    eventTitle: "Reset's Temptation",
    choices: [
      {
        choice: '[30 Ancient Coins] Buy it for her instead.',
        outcomes: ['Random Pattern: Protect +15~20 (Moonlight Perfume) OR Focus +15~20 (Moonlight Lip Balm) OR State [Trend Follower] (8T)'],
      },
      { choice: 'Save the coins for the journey.', outcomes: ['No effect'] },
    ],
  },
  {
    id: 'shared-jul1-labyrinth',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Early July (Aganon · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Endurance / Vitality',
    eventTitle: 'Labyrinth Exploration',
    choices: [
      { choice: '[50 Ancient Coins] Solve it with money.', outcomes: ['Vitality +15~20', 'Item: Mysterious Relic (Trades for +80 Coins or +20 Stats later)'] },
      { choice: '[Power Check 90/70/50] Operate the crane yourself?', outcomes: ['Endurance +15 or +20', 'Potential Points +15'] },
      { choice: 'Look for a detour.', outcomes: ['No effect'] },
    ],
  },
  {
    id: 'shared-aug1-ambush',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Early August (Aganon · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Focus / Protect',
    eventTitle: 'Ambush',
    choices: [
      { choice: '[Vitality -20] Use the terrain to dodge.', outcomes: ['Focus +10', 'Protect +10', 'Potential Points +20', 'Potential [Sense of Speed] -20%'] },
      { choice: '[Endurance Check 175/150/125] Calmly fortify defenses.', outcomes: ['Focus +10', 'Protect +10', 'Condition +1', 'Potential Points +20'] },
      { choice: 'Flee to the upper floor.', outcomes: ['No effect'] },
    ],
  },
  {
    id: 'shared-aug2-slime',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Mid August (Aganon · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Power / Health / Endurance',
    eventTitle: 'Unexpected Encounter: Slime',
    choices: [
      { choice: '[Focus or Protect 100/80/60] Drive the slimes away.', outcomes: ['Power +5', 'Health +5', 'Endurance +5', 'Potential Points +10'] },
      { choice: '[Vitality -10] Help with evacuation.', outcomes: ['Ancient Coins +30'] },
      { choice: 'Avoid getting involved.', outcomes: ['No effect'] },
    ],
  },
  {
    id: 'shared-sep2-future',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Late September (NOA · HARD)',
    sourceRarity: 'HARD',
    sourceTag: 'All Stats',
    eventTitle: 'Choice for the Future',
    choices: [
      { choice: 'Accept it.', outcomes: ['Charm: Weathered Hourglass'] },
      { choice: 'Refuse.', outcomes: ['Potential Points +10'] },
    ],
  },
  {
    id: 'shared-sep2-cult',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Late September (NOA · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'All Stats',
    eventTitle: 'Proposal from the Cult (Requires Mysterious Relic)',
    choices: [
      { choice: '[Consume Mysterious Relic] Sell the relic to the Cult.', outcomes: ['Ancient Coins +80'] },
      { choice: 'Keep holding onto it.', outcomes: ['Keep Mysterious Relic for Late Jan Simple Test (+20/+20 Stats)'] },
    ],
  },
  {
    id: 'shared-sep2-box',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Late September (NOA · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Power / Health / Endurance',
    eventTitle: "The Cult's Lost Property (Requires Suspicious Box)",
    choices: [
      { choice: '[Consume Suspicious Box] Let us open it now.', outcomes: ['Power +10', 'Health +10', 'Endurance +10'] },
      { choice: 'Open it next time.', outcomes: ['No effect'] },
    ],
  },
  {
    id: 'shared-oct2-vacation',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Late October (NOA · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Focus / Protect',
    eventTitle: "Reset's Vacation",
    choices: [
      {
        choice: '[Vitality -20] Search for where it is sold together.',
        outcomes: ['Focus +30 & Protect +15 (or Focus +15 & Protect +30)', 'State: [Memories with Reset] (5T)', 'Item: Antique Key'],
      },
      { choice: 'Tell her where the shop is located.', outcomes: ['Focus +10 or Protect +10', 'Vitality +5'] },
    ],
  },
  {
    id: 'shared-nov1-flora',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Early November (Flora Camp · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Health / Focus',
    eventTitle: 'Beach Volleyball Tournament: Prelims',
    choices: [
      { choice: '[Power Check 500/300/200] Exploit the opposing team weakness.', outcomes: ['Health +10', 'Focus +10', 'Condition +1', 'Potential Points +20'] },
      { choice: '[Focus Check 150/125/100] Leverage our own team strengths.', outcomes: ['Health +20 or +30', 'Potential Points +20'] },
      { choice: '[Vitality -20] Push through with momentum.', outcomes: ['Focus +20 or +30', 'Potential Points +20'] },
      { choice: '...It will work out somehow!', outcomes: ['Vitality +5'] },
    ],
  },
  {
    id: 'shared-nov1-kalide',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Early November (Kalide Camp · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Power / Protect',
    eventTitle: 'Hot Spring Festival: Preparation',
    choices: [
      { choice: '[Health Check 500/300/200] The house where you can ride a bear!', outcomes: ['Power +10', 'Protect +10', 'Condition +1', 'Potential Points +30'] },
      { choice: '[Protect Check 150/125/100] The house serving delicious traditional cuisine!', outcomes: ['Power +20 or +30', 'Potential Points +20'] },
      { choice: '[Vitality -20] Stay at the original inn.', outcomes: ['Protect +20 or +30', 'Potential Points +20'] },
      { choice: 'Neither sounds good.', outcomes: ['Vitality +5'] },
    ],
  },
  {
    id: 'shared-nov2-weather',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Mid November (Flora / Kalide · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'All Stats / Vitality',
    eventTitle: "Today's Weather: Tropical Night (Flora) / Heavy Snow (Kalide)",
    choices: [
      {
        choice: '[Consume Handy Fan / Hand Warmer] Use weather item.',
        outcomes: ['Power/Health/Endurance +20', 'Focus/Protect +20', 'Condition +1', 'Vitality +10'],
      },
      {
        choice: 'Endure it.',
        outcomes: ['Power/Health/Endurance +10', 'Focus/Protect +10', 'Condition -1 (or Vitality -10)', 'Dispels all positive Journey States'],
      },
    ],
  },
  {
    id: 'shared-dec1-flora',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Early December (Flora Camp · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Power / Vitality',
    eventTitle: 'Beach Volleyball Tournament: Semifinals',
    choices: [
      { choice: '[80 Ancient Coins] Grab a meal first?', outcomes: ['Vitality +30 or +40', 'Potential Points +10'] },
      { choice: '[Endurance Check 200/150/125] Take a deep breath to ease tension.', outcomes: ['Power +30', 'Condition +1', 'Potential Points +20'] },
      { choice: 'Do our best as usual.', outcomes: ['Potential Points +10'] },
    ],
  },
  {
    id: 'shared-dec1-kalide',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Early December (Kalide Camp · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Health / Vitality',
    eventTitle: 'Uninvited Guest',
    choices: [
      { choice: '[80 Ancient Coins] Offer financial assistance.', outcomes: ['Vitality +30 or +40', 'Potential Points +10'] },
      { choice: '[Endurance Check 200/150/125] Try handling it directly.', outcomes: ['Health +30', 'Condition +1', 'Potential Points +20'] },
      { choice: 'Give up.', outcomes: ['Potential Points +10'] },
    ],
  },
  {
    id: 'shared-dec2-encounters',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Mid December (Flora / Kalide · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Power / Health / Focus / Protect',
    eventTitle: 'Unexpected Encounter: Raiders (Flora) / Bandit Knight (Kalide)',
    choices: [
      { choice: '[Power/Health Check 600/400/300] Teach them a lesson / Clean them up!', outcomes: ['Flora: Health +10 & Potential Points +10', 'Kalide: Power +10 & Potential Points +10'] },
      { choice: 'Persuade with words [Vitality -10] / Pay [20 Coins]', outcomes: ['Flora: Focus +10 & Vitality -10', 'Kalide: Protect +10'] },
      { choice: 'Ignore / Strategic retreat!', outcomes: ['No effect'] },
    ],
  },
  {
    id: 'shared-jan2-melancholy',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Late January (NOA · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'All Stats',
    eventTitle: "Reset's Melancholy",
    choices: [
      { choice: '[Requires Antique Key] Could this be the key?', outcomes: ['Potential Points +20', "Charm: Reset's Piggy Bank"] },
      { choice: 'Call a technician.', outcomes: ['Potential Points +15'] },
    ],
  },
  {
    id: 'shared-jan2-statue-payoff',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Late January (NOA · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Power / Health',
    eventTitle: 'Power Hidden in the Flower / Sword',
    choices: [
      { choice: '[Requires Stone Statue Flower / Blade] Pick it up.', outcomes: ['Success: Power +20 & Health +20', 'Failure: +20/+10 Stats + Journey State'] },
      { choice: 'Leave it alone.', outcomes: ['No effect'] },
    ],
  },
  {
    id: 'shared-rnd-weather',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Random Weather (NOA · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Focus / Protect / Vitality',
    eventTitle: "Today's Weather: Clear Skies / Thunder / Fog",
    choices: [
      {
        choice: 'Clear Skies: Spend a relaxing time.',
        outcomes: ['Success: Vitality +10, Condition +1, Focus/Protect +20/+10 or Potential +30', 'Failure: Vitality +10, Condition -1, +15 Stat'],
      },
      {
        choice: 'Thunder: Continue training. / Return to the inn.',
        outcomes: ['Continue (Success): Condition +1, Potential +30, Vitality +10 (Fail: Condition -1)', 'Return to inn: Vitality +10'],
      },
      {
        choice: 'Fog: Continue training. / Return to the inn.',
        outcomes: ['Continue (Success): Focus +30, Protect +30, Potential +30 (Fail: Focus -10, Protect -10)', 'Return to inn: Vitality +10'],
      },
    ],
  },
  {
    id: 'shared-rnd-enhancer',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Random (NOA · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'All Stats / Vitality',
    eventTitle: 'Prototype Enhancer',
    choices: [
      { choice: '[20 Coins] Eerily Red Potion', outcomes: ['Success: All Stats +20', 'Failure: All Stats -10, Vitality -20, [Mana Exhaustion] (5T)'] },
      { choice: '[20 Coins] Cold Glowing Blue Potion', outcomes: ['Success: Vitality +10, Condition +1, [Sword of Gordius] (5T)', 'Failure: Vitality -20, Condition -1'] },
      { choice: '[20 Coins] Dazzling Yellow Potion', outcomes: ['Success: Vitality +10, Ancient Coins +30, Potential Points +20', 'Failure: [Acute Slump] (5T)'] },
      { choice: 'Ordinary drink placed beside them', outcomes: ['Vitality +10 (Safe)'] },
    ],
  },
  {
    id: 'shared-rnd-train-fail',
    sourceType: 'Shared',
    sourceName: 'Shared Event · Random Failure Recovery (NOA · ALL)',
    sourceRarity: 'COMMON',
    sourceTag: 'Vitality',
    eventTitle: 'Training Failure',
    choices: [
      { choice: "No, let's rest for today.", outcomes: ['Success: Vitality +5', 'Failure: Vitality +5 & Condition -1'] },
      { choice: 'Alright, push even harder!', outcomes: ['Success: Potential Points +15 & [Wise Corps Member] (4T)', 'Failure: Potential Points +15'] },
      { choice: '[Consume Vitality Potion] Hand over a Vitality Potion.', outcomes: ['Vitality +30', 'Potential Points +10'] },
    ],
  },
];

export function JourneyEventChoiceCheckerTool({ arcana }: { arcana: ArcanaEntity[] }) {
  const [query, setQuery] = useState('');
  const [tagFilter, setTagFilter] = useState<string>('ALL');

  const allEvents = useMemo(() => {
    const list: IndexedJourneyEvent[] = [...SHARED_JOURNEY_EVENTS];
    for (const a of arcana) {
      const evs = a.staticData?.journeyEvents ?? [];
      evs.forEach((ev, idx) => {
        list.push({
          id: `${a.slug}-${idx}`,
          sourceType: 'Arcana',
          sourceName: a.name,
          sourceRarity: a.rarity,
          sourceTag: a.staticData?.statTag || a.subType || 'Power',
          iconUrl: a.imageUrl,
          eventTitle: ev.eventTitle,
          choices: ev.choices,
        });
      });
    }
    return list;
  }, [arcana]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allEvents.filter((item) => {
      if (tagFilter !== 'ALL' && !item.sourceTag.toLowerCase().includes(tagFilter.toLowerCase())) {
        return false;
      }
      if (!q) return true;
      if (item.eventTitle.toLowerCase().includes(q)) return true;
      if (item.sourceName.toLowerCase().includes(q)) return true;
      return item.choices.some(
        (c) =>
          c.choice.toLowerCase().includes(q) ||
          c.outcomes.some((o) => o.toLowerCase().includes(q))
      );
    });
  }, [allEvents, query, tagFilter]);

  return (
    <div className="space-y-4">
      <div className="rounded border border-[#263450] bg-[#131c2e] p-3.5 space-y-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search event title, Arcana name, character, or reward (e.g. Vitality, Power, Charlotte, Indomitable)..."
            className="flex-1 rounded border border-[#334155] bg-[#090d16] px-3 py-2 text-[13px] text-[#f8fafc] placeholder-[#64748b] focus:border-[#3b82f6] focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="rounded bg-[#1e293b] px-3 py-2 text-[12px] font-bold text-[#cbd5e1] hover:bg-[#334155]"
            >
              Clear
            </button>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {['ALL', 'Shared', 'Power', 'Health', 'Endurance', 'Focus', 'Protect'].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => {
                  if (t === 'Shared') {
                    setQuery('Shared Rescue Journey');
                    setTagFilter('ALL');
                  } else {
                    if (query === 'Shared Rescue Journey') setQuery('');
                    setTagFilter(t);
                  }
                }}
                className={`rounded px-2.5 py-1 text-[11px] font-bold ${
                  tagFilter === t ? 'bg-[#2563eb] text-white' : 'bg-[#1e293b] text-[#94a3b8] hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <span className="text-[11px] font-bold text-[#94a3b8]">
            Showing {Math.min(filtered.length, 60)} of {filtered.length} events
          </span>
        </div>
      </div>

      <div className="space-y-2.5">
        {filtered.slice(0, 60).map((ev) => (
          <div key={ev.id} className="overflow-hidden rounded border border-[#263450] bg-[#0f1626]">
            <div className="flex items-center justify-between gap-2 border-b border-[#243049] bg-[#162136] px-3 py-2">
              <div className="flex items-center gap-2.5 min-w-0">
                {ev.iconUrl && (
                  <img
                    src={ev.iconUrl}
                    alt={ev.sourceName}
                    className="h-8 w-8 shrink-0 rounded border border-[#334155] object-cover"
                  />
                )}
                <div className="min-w-0">
                  <div className="truncate text-[13px] font-extrabold text-[#f8fafc]">{ev.eventTitle}</div>
                  <div className="truncate text-[11px] text-[#93c5fd]">
                    {ev.sourceName} ({ev.sourceRarity})
                  </div>
                </div>
              </div>
              <span className="shrink-0 rounded bg-[#1e293b] border border-[#334155] px-2 py-0.5 text-[10px] font-bold text-[#fbbf24]">
                {ev.sourceTag}
              </span>
            </div>
            <div className="divide-y divide-[#1e293b]">
              {ev.choices.map((ch, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-2 px-3 py-2 text-[12px]">
                  <div className="sm:col-span-5 font-bold text-[#e2e8f0]">
                    <span className="mr-1.5 inline-block rounded bg-[#2563eb]/30 px-1.5 py-0.2 text-[10px] text-[#93c5fd]">
                      Option {idx + 1}
                    </span>
                    {ch.choice}
                  </div>
                  <div className="sm:col-span-7 flex flex-wrap gap-1.5">
                    {ch.outcomes.map((out, oIdx) => (
                      <span
                        key={oIdx}
                        className="inline-block rounded bg-[#132238] border border-[#2b4268] px-2 py-0.5 text-[11px] font-semibold text-[#86efac]"
                      >
                        {out}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================================
 * 4. Sortable All-Character Combat & Journey Stats Table
 * ============================================================================ */
type SortStatKey = 'atk' | 'hp' | 'def' | 'spd' | 'crit';

export function CharacterStatsTableInteractive({ characters }: { characters: CharacterEntity[] }) {
  const [sortBy, setSortBy] = useState<SortStatKey>('atk');
  const [rarityFilter, setRarityFilter] = useState<string>('ALL');

  const sorted = useMemo(() => {
    return characters
      .filter((c) => rarityFilter === 'ALL' || c.rarity === rarityFilter)
      .slice()
      .sort((a, b) => b.baseStats[sortBy] - a.baseStats[sortBy]);
  }, [characters, sortBy, rarityFilter]);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded border border-[#263450] bg-[#131c2e] p-2.5">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-bold text-[#94a3b8] mr-1">Rarity:</span>
          {['ALL', 'SSR', 'SR'].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRarityFilter(r)}
              className={`rounded px-2.5 py-1 text-[11px] font-bold ${
                rarityFilter === r ? 'bg-[#2563eb] text-white' : 'bg-[#1e293b] text-[#cbd5e1]'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-bold text-[#94a3b8] mr-1">Sort By:</span>
          {(
            [
              ['atk', 'ATK'],
              ['hp', 'HP'],
              ['def', 'DEF'],
              ['spd', 'SPD'],
              ['crit', 'CRIT%'],
            ] as [SortStatKey, string][]
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSortBy(key)}
              className={`rounded px-2.5 py-1 text-[11px] font-bold ${
                sortBy === key ? 'bg-[#e86c58] text-white' : 'bg-[#1e293b] text-[#cbd5e1]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto rounded border border-[#263450] bg-[#0f1626]">
        <table className="w-full min-w-[640px] border-collapse text-[12px]">
          <thead>
            <tr className="border-b border-[#263450] bg-[#162136] text-left font-extrabold text-[#dbeafe]">
              <th className="p-2.5">Savior</th>
              <th className="p-2.5 text-center">Class / Attr</th>
              <th className="p-2.5 text-right">ATK</th>
              <th className="p-2.5 text-right">HP</th>
              <th className="p-2.5 text-right">DEF</th>
              <th className="p-2.5 text-right">SPD</th>
              <th className="p-2.5 text-right">CRIT</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1e293b]">
            {sorted.map((c) => (
              <tr key={c.slug} className="hover:bg-[#162036]">
                <td className="p-2">
                  <Link href={`/starsavior/characters/${c.slug}`} className="flex items-center gap-2.5 group">
                    <img
                      src={c.imageUrl}
                      alt={c.name}
                      className="h-9 w-9 rounded border border-[#334155] object-cover"
                    />
                    <div>
                      <div className="font-bold text-[#60a5fa] group-hover:underline">{c.name}</div>
                      <div className="text-[10px] text-[#94a3b8]">{c.rarity}</div>
                    </div>
                  </Link>
                </td>
                <td className="p-2 text-center text-[11px] text-[#cbd5e1]">
                  {c.element} / {c.role}
                </td>
                <td className="p-2 text-right font-mono font-bold text-[#f87171]">{c.baseStats.atk}</td>
                <td className="p-2 text-right font-mono font-bold text-[#4ade80]">{c.baseStats.hp}</td>
                <td className="p-2 text-right font-mono font-bold text-[#60a5fa]">{c.baseStats.def}</td>
                <td className="p-2 text-right font-mono font-bold text-[#fbbf24]">{c.baseStats.spd}</td>
                <td className="p-2 text-right font-mono text-[#cbd5e1]">{c.baseStats.crit}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ============================================================================
 * 5. Community Bulletin Board Widget (General / Friend / Guild)
 * ============================================================================ */
const ALLOWED_BOARD_TAGS = new Set([
  'Global / Steam',
  'JP Server (English)',
  'MLB SSR Arcana Support',
  'Daily Active',
]);

function stripControlChars(raw: string): string {
  return raw.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '');
}

export function CommunityBoardWidget({
  boardTitle,
  placeholder,
  seedPosts,
}: {
  boardTitle: string;
  placeholder: string;
  seedPosts: SeedBoardPost[];
}) {
  const [posts, setPosts] = useState<SeedBoardPost[]>(seedPosts);
  const [author, setAuthor] = useState('');
  const [tag, setTag] = useState('Global / Steam');
  const [body, setBody] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanBody = stripControlChars(body).trim().slice(0, 500);
    if (!cleanBody) return;
    const cleanAuthor = stripControlChars(author).trim().slice(0, 40) || 'Commander';
    const safeTag = ALLOWED_BOARD_TAGS.has(tag) ? tag : 'Global / Steam';
    setPosts((prev) => [
      {
        author: cleanAuthor,
        tag: safeTag,
        timestamp: 'Just now',
        body: cleanBody,
      },
      ...prev.slice(0, 49),
    ]);
    setBody('');
  };

  return (
    <div className="space-y-4">
      <form
        onSubmit={handleSubmit}
        className="rounded border border-[#263450] bg-[#131c2e] p-3.5 space-y-2.5"
      >
        <div className="text-[13px] font-extrabold text-[#f8fafc]">Post to {boardTitle}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <input
            type="text"
            maxLength={40}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Commander Name (Optional)"
            className="rounded border border-[#334155] bg-[#090d16] px-3 py-1.5 text-[12px] text-white placeholder-[#64748b]"
          />
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="rounded border border-[#334155] bg-[#090d16] px-3 py-1.5 text-[12px] text-white"
          >
            <option value="Global / Steam">Global / Steam</option>
            <option value="JP Server (English)">JP Server (English)</option>
            <option value="MLB SSR Arcana Support">MLB SSR Arcana Support</option>
            <option value="Daily Active">Daily Active</option>
          </select>
        </div>
        <textarea
          rows={3}
          maxLength={500}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded border border-[#334155] bg-[#090d16] p-2.5 text-[12px] text-white placeholder-[#64748b]"
        />
        <button
          type="submit"
          className="rounded bg-[#2563eb] hover:bg-[#1d4ed8] px-4 py-1.5 text-[12px] font-extrabold text-white"
        >
          Submit Post
        </button>
      </form>

      <div className="space-y-2.5">
        {posts.map((p, idx) => (
          <div key={idx} className="rounded border border-[#263450] bg-[#0f1626] p-3">
            <div className="flex items-center justify-between gap-2 text-[11px] text-[#94a3b8]">
              <span className="font-bold text-[#93c5fd]">
                {p.author}{' '}
                <span className="ml-1.5 rounded bg-[#1e293b] px-1.5 py-0.5 text-[10px] text-[#fbbf24]">
                  {p.tag}
                </span>
              </span>
              <span>{p.timestamp}</span>
            </div>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#e2e8f0]">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
