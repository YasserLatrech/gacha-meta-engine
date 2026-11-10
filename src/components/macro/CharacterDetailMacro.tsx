import React from 'react';
import Link from 'next/link';
import type { CharacterEntity, ArcanaEntity, GameWikiDataset } from '@/domain/schemas';
import {
  AppMediaH2,
  AppMediaH3,
  AppMediaH4,
  AppMediaTierBadge,
  AppMediaIconCell,
} from '@/components/micro/AppMediaHeadings';
import { AppMediaTocBox } from '@/components/medium/AppMediaTocAndWidgets';
import { AppMediaStrategyFooter } from '@/components/medium/AppMediaStrategyBlocks';

const SKILL_LEVEL_BASIC = [
  { lv: 'Lv.2', effect: 'Damage Dealt +1%' },
  { lv: 'Lv.3', effect: 'Damage Dealt +1%' },
  { lv: 'Lv.4', effect: 'Damage Dealt +1%' },
  { lv: 'Lv.5', effect: 'Damage Dealt +1%' },
  { lv: 'Lv.6', effect: 'Damage Dealt +2%' },
  { lv: 'Lv.7', effect: 'Damage Dealt +2%' },
  { lv: 'Lv.8', effect: 'Damage Dealt +2%' },
  { lv: 'Lv.9', effect: 'Damage Dealt +2%' },
  { lv: 'Lv.10', effect: 'Damage Dealt +3%' },
];

const SKILL_LEVEL_SPECIAL_ULT = [
  { lv: 'Lv.2', effect: 'Damage Dealt +1% / Healing +1%' },
  { lv: 'Lv.3', effect: 'Damage Dealt +1% / Healing +1%' },
  { lv: 'Lv.4', effect: 'Damage Dealt +2% / Healing +2%' },
  { lv: 'Lv.5', effect: 'Damage Dealt +2% / Healing +2%' },
  { lv: 'Lv.6', effect: 'Skill Cooldown -1 Turn' },
  { lv: 'Lv.7', effect: 'Damage Dealt +3% / Healing +3%' },
  { lv: 'Lv.8', effect: 'Damage Dealt +3% / Healing +3%' },
  { lv: 'Lv.9', effect: 'Damage Dealt +3% / Healing +3%' },
  { lv: 'Lv.10', effect: 'Skill Cooldown -1 Turn' },
];

export function CharacterDetailMacro({
  character,
  dataset,
}: {
  character: CharacterEntity;
  dataset: GameWikiDataset;
}) {
  const { characters, arcana } = dataset;
  const sd = character.staticData;

  // Variant switcher (e.g., Asherah <-> Dress Asherah)
  const baseRootName = character.name
    .replace(/^(Dress|Bride|Swimsuit|Bunny|Maid)\s+/i, '')
    .trim();
  const variants = characters.filter(
    (c) =>
      c.name === baseRootName ||
      c.name.endsWith(` ${baseRootName}`)
  );

  // Server stat ranks (/57)
  const totalUnits = characters.length;
  const hpRank = [...characters].sort((a, b) => b.baseStats.hp - a.baseStats.hp).findIndex((c) => c.slug === character.slug) + 1;
  const atkRank = [...characters].sort((a, b) => b.baseStats.atk - a.baseStats.atk).findIndex((c) => c.slug === character.slug) + 1;
  const defRank = [...characters].sort((a, b) => b.baseStats.def - a.baseStats.def).findIndex((c) => c.slug === character.slug) + 1;
  const spdRank = [...characters].sort((a, b) => b.baseStats.spd - a.baseStats.spd).findIndex((c) => c.slug === character.slug) + 1;

  // Recommended SSR Arcana & Substitute SR Arcana
  const recArcana: ArcanaEntity[] = character.bestArcanaSlugs
    .map((slug) => arcana.find((a) => a.slug === slug))
    .filter((a): a is ArcanaEntity => Boolean(a));
  const finalRecArcana =
    recArcana.length >= 4
      ? recArcana.slice(0, 5)
      : [
          ...recArcana,
          ...arcana
            .filter((a) => a.rarity === 'SSR' && !recArcana.some((r) => r.slug === a.slug))
            .slice(0, 5 - recArcana.length),
        ];
  const subArcana = arcana.filter((a) => a.rarity === 'SR').slice(0, 4);

  // Recommended 4-Unit Party Formation
  const partyPartners = useMemoPartyPartners(character, characters);

  const tocItems = [
    { id: 'eval-performance', label: `${character.name}'s Evaluation & Performance` },
    {
      id: 'recommended-equipment',
      label: `${character.name}'s Recommended Equipment`,
      subItems: [
        { id: 'equip-sets', label: 'Recommended Gear Sets (PvE & PvP)' },
        { id: 'equip-stats', label: 'Recommended Main Stats & Substat Priority' },
      ],
    },
    { id: 'recommended-party', label: `${character.name}'s Recommended Party Formations` },
    {
      id: 'journey-arcana-guide',
      label: `${character.name}'s Rescue Journey Training & Arcana Deck`,
      subItems: [
        { id: 'arcana-substitutes', label: 'Substitute Arcana Cards' },
        { id: 'hard-potential', label: 'Recommended Hard Potential' },
        { id: 'training-stat-policy', label: 'Training Stat Priority Policy' },
      ],
    },
    { id: 'strengths-usage', label: `${character.name}'s Strengths & How to Use` },
    { id: 'dupe-reliance', label: `${character.name}'s Limit Break (Dupe) Reliance` },
    { id: 'skill-priority', label: `${character.name}'s Skill Upgrade Priority & Level Effects` },
    { id: 'character-skills', label: `${character.name}'s Skills & Nova Burst` },
    {
      id: 'stats-journey-curio',
      label: `${character.name}'s Combat Stats, Journey Aptitudes & Exclusive Curio`,
    },
    { id: 'resonance-materials', label: `${character.name}'s Resonance Stages & Required Materials` },
    { id: 'favorite-gifts', label: `${character.name}'s Presents & Favorite Affinity Gifts` },
    { id: 'profile-cv-lore', label: `${character.name}'s Voice Actor (CV), How to Obtain & Profile` },
  ];

  const evalBullets =
    sd?.evalBullets && sd.evalBullets.length > 0
      ? sd.evalBullets
      : [
          `${character.rarity} ${character.element} ${character.role} specializing in ${sd?.attackType || 'Slash Damage'}.`,
          character.summary,
        ];

  return (
    <div className="space-y-6">
      {/* Top Variant Switcher Table if multiple versions exist (e.g., Asherah / Dress Asherah) */}
      {variants.length > 1 && (
        <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#111726]">
          <div className="border-b border-[#243049] bg-[#161f33] px-3 py-1.5 text-center text-[11px] font-extrabold text-[#f8fafc]">
            {baseRootName} Character Versions
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 divide-x divide-[#1e293b]">
            {variants.map((v) => {
              const isCurrent = v.slug === character.slug;
              return (
                <Link
                  key={v.slug}
                  href={`/starsavior/characters/${v.slug}`}
                  className={`flex items-center justify-center gap-2.5 p-2.5 text-[12px] font-bold transition-colors ${
                    isCurrent
                      ? 'bg-[#2563eb]/25 text-white'
                      : 'text-[#60a5fa] hover:bg-[#17223b] hover:text-white'
                  }`}
                >
                  <img src={v.imageUrl} alt={v.name} className="h-8 w-8 rounded border border-[#334155] object-cover" loading="eager" />
                  <span>{v.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* H1 Article Header + Intro + TOC */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-3">
        <div className="text-[11px] font-bold text-[#93c5fd]">
          Updated: 2026/11/10 · Star Savior Complete Character Build Guide
        </div>
        <h1 className="text-lg sm:text-xl font-black text-white">
          [Star Savior] {character.name} — Recommended Equipment, Party Formations, Rescue Journey Training & Evaluation
        </h1>
        <p className="text-[12px] text-[#cbd5e1] leading-relaxed">
          Complete strategy guide for <strong className="text-white">{character.name}</strong> in Star Savior. Covers {character.name}&apos;s performance evaluation, recommended equipment sets, 4-unit party formations, Rescue Journey Arcana decks, Limit Break (dupe) reliance, skill upgrade priority, Exclusive Curio, favorite affinity gifts, and Voice Actor (CV) profile.
        </p>

        <AppMediaTocBox items={tocItems} />
      </section>

      {/* 1. H2: 評価と性能 (Evaluation & Performance) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaH2 id="eval-performance" badge={sd?.appMediaTier || character.overallTier}>
          {character.name}&apos;s Evaluation & Performance
        </AppMediaH2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          {/* Standing Art Card (190x190 Crisp Official Illustration) */}
          <div className="md:col-span-5 flex flex-col items-center rounded-lg border border-[#243049] bg-[#0b101b] p-3">
            <div className="relative h-[220px] w-[220px] rounded-lg overflow-hidden bg-[#090d16] border border-[#1e293b]">
              <img
                src={sd?.illustUrl || character.imageUrl}
                alt={character.name}
                className="h-full w-full object-contain"
                loading="eager"
              />
            </div>
            <div className="mt-2.5 flex items-center gap-2.5 w-full rounded bg-[#141c2e] border border-[#243049] p-2">
              <img
                src={character.imageUrl}
                alt={character.name}
                className="h-11 w-11 rounded border border-[#eab308]/70 object-cover shrink-0"
                loading="eager"
              />
              <div className="min-w-0">
                <div className="text-[13px] font-black text-white truncate">{character.name}</div>
                <div className="text-[11px] font-semibold text-[#93c5fd] truncate">
                  {sd?.profile?.affiliation || 'Voyager Rescue Squad'}
                </div>
              </div>
            </div>
          </div>

          {/* Basic Spec & Tier Table */}
          <div className="md:col-span-7 space-y-3">
            <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626]">
              <table className="w-full border-collapse text-left text-[12px]">
                <tbody className="divide-y divide-[#1e293b]">
                  <tr>
                    <th className="w-28 bg-[#161f33] px-3 py-2 font-extrabold text-[#93c5fd] border-r border-[#243049]">Rarity / Pool</th>
                    <td className="px-3 py-2 font-bold text-[#fbbf24]">
                      {character.rarity} ({sd?.pool || 'Standard'} Observation)
                    </td>
                    <th className="w-28 bg-[#161f33] px-3 py-2 font-extrabold text-[#93c5fd] border-x border-[#243049]">Attribute</th>
                    <td className="px-3 py-2 font-bold text-white">
                      <span className="inline-flex items-center gap-1.5">
                        {sd?.attributeIconUrl && (
                          <img src={sd.attributeIconUrl} alt="" className="h-4 w-4 object-contain" loading="eager" />
                        )}
                        <span>{character.element} Attribute</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-[#161f33] px-3 py-2 font-extrabold text-[#93c5fd] border-r border-[#243049]">Class</th>
                    <td className="px-3 py-2 font-bold text-white">
                      <span className="inline-flex items-center gap-1.5">
                        {sd?.classIconUrl && (
                          <img src={sd.classIconUrl} alt="" className="h-4 w-4 object-contain" loading="eager" />
                        )}
                        <span>{character.role}</span>
                      </span>
                    </td>
                    <th className="bg-[#161f33] px-3 py-2 font-extrabold text-[#93c5fd] border-x border-[#243049]">Attack Type</th>
                    <td className="px-3 py-2 font-bold text-[#cbd5e1]">{sd?.attackType || 'Slash Damage'}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tier Ratings Table */}
            <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626]">
              <table className="w-full border-collapse text-center text-[12px]">
                <thead>
                  <tr className="border-b border-[#243049] bg-[#161f33] text-[10px] font-extrabold uppercase text-[#94a3b8]">
                    <th className="py-2 border-r border-[#243049]">Overall Rank</th>
                    <th className="py-2 border-r border-[#243049]">Reroll Rank</th>
                    <th className="py-2 border-r border-[#243049]">Gauntlet PvP</th>
                    <th className="py-2 border-r border-[#243049]">Meta Score</th>
                    <th className="py-2">Dupe Reliance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2.5 border-r border-[#1e293b]">
                      <AppMediaTierBadge tier={sd?.appMediaTier || character.overallTier} />
                    </td>
                    <td className="py-2.5 border-r border-[#1e293b]">
                      <AppMediaTierBadge tier={sd?.appMediaRerollTier || character.rerollTier} />
                    </td>
                    <td className="py-2.5 border-r border-[#1e293b]">
                      <AppMediaTierBadge tier={sd?.pvpTier || character.overallTier} />
                    </td>
                    <td className="py-2.5 border-r border-[#1e293b] font-black text-[#60a5fa]">
                      {character.score.toFixed(1)} / 10
                    </td>
                    <td className="py-2.5 font-black text-[#fbbf24]">
                      {sd?.dupeRating || '★★☆'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Quick Summary & Strengths Bullet Box */}
            <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3 space-y-1.5">
              <div className="text-[11px] font-extrabold text-[#93c5fd]">
                [{character.name} Performance Highlights]
              </div>
              <ul className="space-y-1 text-[12px] text-[#e2e8f0] leading-relaxed">
                {evalBullets.map((b, i) => {
                  const isSub = b.startsWith('↳');
                  return (
                    <li key={i} className={isSub ? 'pl-4 text-[11px] text-[#94a3b8]' : 'flex items-start gap-1.5'}>
                      {!isSub && <span className="text-[#3b82f6] font-bold">•</span>}
                      <span>{b}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. H2: 装備おすすめ (Recommended Equipment) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="recommended-equipment">{character.name}&apos;s Recommended Equipment Builds</AppMediaH2>

        <AppMediaH3 id="equip-sets">Recommended Equipment Sets (PvE & PvP)</AppMediaH3>
        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[12px]">
            <thead>
              <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold text-[#94a3b8]">
                <th className="w-1/2 px-3.5 py-2 border-r border-[#243049]">Recommended PvE Equipment Sets</th>
                <th className="w-1/2 px-3.5 py-2">Recommended PvP (Gauntlet) Equipment Sets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3.5 align-top border-r border-[#1e293b] space-y-1 text-[#e2e8f0]">
                  {(sd?.equipment?.pveSets || ['Destruction Set (Crit DMG +40%)', 'Speed Set (SPD +25%)']).map((s, i) => (
                    <div key={i} className="font-bold">• {s}</div>
                  ))}
                </td>
                <td className="p-3.5 align-top space-y-1 text-[#e2e8f0]">
                  {(sd?.equipment?.pvpSets || ['Speed Set (SPD +25%)', 'Destruction Set (Crit DMG +40%)']).map((s, i) => (
                    <div key={i} className="font-bold">• {s}</div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <AppMediaH3 id="equip-stats">Recommended Main Stats & Substat Priority</AppMediaH3>
        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[12px]">
            <tbody className="divide-y divide-[#1e293b]">
              <tr>
                <th className="w-44 bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">
                  Necklace Main Stat
                </th>
                <td className="px-3.5 py-2.5 font-bold text-white">
                  {sd?.equipment?.necklaceMain || 'Speed / Crit DMG (%)'}
                </td>
              </tr>
              <tr>
                <th className="bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">
                  Ring Main Stat
                </th>
                <td className="px-3.5 py-2.5 font-bold text-white">
                  {sd?.equipment?.ringMain || 'Attack Power (%) / Max HP (%)'}
                </td>
              </tr>
              <tr>
                <th className="bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">
                  Substat Priority
                </th>
                <td className="px-3.5 py-2.5 font-semibold text-[#fbbf24]">
                  {sd?.equipment?.subStats || 'ATK (%) > Crit Rate > Crit DMG > Speed'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. H2: 編成おすすめ (Recommended 4-Unit Party Formations) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="recommended-party">{character.name}&apos;s Recommended Party Formations</AppMediaH2>
        <AppMediaH3>Optimal 4-Unit Synergy Lineup</AppMediaH3>
        <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-4 space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 place-items-center">
            {partyPartners.map((p, idx) => (
              <div key={p.unit.slug} className="flex flex-col items-center text-center space-y-1">
                <span className="rounded bg-[#161f33] border border-[#263452] px-2 py-0.5 text-[10px] font-extrabold text-[#93c5fd]">
                  {p.position} · {idx === 0 && p.unit.slug === character.slug ? 'Core Unit' : p.unit.role}
                </span>
                <AppMediaIconCell
                  href={`/starsavior/characters/${p.unit.slug}`}
                  name={p.unit.name}
                  imageUrl={p.unit.imageUrl}
                  rarity={p.unit.rarity}
                  topLeftIconUrl={p.unit.staticData?.attributeIconUrl}
                  topRightIconUrl={p.unit.staticData?.classIconUrl}
                  size="lg"
                />
              </div>
            ))}
          </div>
          <p className="text-[12px] text-[#cbd5e1] border-t border-[#1e293b] pt-2.5 leading-relaxed">
            • Pairs <strong className="text-white">{character.name}</strong> with Action Gauge and Pincer Dual-Attack enablers plus a dedicated team-wide Supporter to maximize turn frequency, Toughness Break speed, and survivability in Operations and Cosmo Gate.
          </p>
        </div>
      </section>

      {/* 4. H2: 旅育成・アルカナおすすめ (Rescue Journey Training & Arcana Deck) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaH2 id="journey-arcana-guide">
          {character.name}&apos;s Rescue Journey Training & Recommended Arcana
        </AppMediaH2>

        <AppMediaH3>Recommended SSR Arcana Deck (5-Card Setup)</AppMediaH3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {finalRecArcana.map((a) => (
            <Link
              key={a.slug}
              href={`/starsavior/arcana#${a.slug}`}
              className="group flex items-start gap-3 rounded-lg border border-[#243049] bg-[#0f1626] p-3 hover:border-[#3b82f6] transition-colors"
            >
              <img
                src={a.imageUrl}
                alt={a.name}
                className="h-[72px] w-[72px] rounded-lg border-2 border-[#eab308]/75 object-cover shrink-0 bg-[#090d16]"
                loading="eager"
              />
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-extrabold text-[13px] text-white group-hover:text-[#60a5fa] truncate">
                    {a.name}
                  </span>
                  <AppMediaTierBadge tier={a.staticData?.appMediaTier || a.tier} size="sm" />
                </div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#93c5fd]">
                  {a.staticData?.statTagIconUrl && (
                    <img src={a.staticData.statTagIconUrl} alt="" className="h-3.5 w-3.5 object-contain" loading="eager" />
                  )}
                  <span>{a.staticData?.statTag || 'Power'} · {a.staticData?.classBonus || 'Universal Bonus'}</span>
                </div>
                <p className="text-[11px] text-[#cbd5e1] line-clamp-2">{a.effectSummary}</p>
              </div>
            </Link>
          ))}
        </div>

        <AppMediaH4 id="arcana-substitutes">Recommended Substitute SR Arcana Cards</AppMediaH4>
        <div className="flex flex-wrap gap-2.5 rounded-lg border border-[#243049] bg-[#0f1626] p-3">
          {subArcana.map((a) => (
            <AppMediaIconCell
              key={a.slug}
              href={`/starsavior/arcana#${a.slug}`}
              name={a.name}
              imageUrl={a.imageUrl}
              rarity="SR"
              topLeftIconUrl={a.staticData?.statTagIconUrl}
              badgeText="SR"
              size="sm"
            />
          ))}
        </div>

        <AppMediaH3 id="hard-potential">Recommended Rescue Journey Hard Potential</AppMediaH3>
        <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[12px]">
            <thead>
              <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold text-[#94a3b8]">
                <th className="w-56 px-3.5 py-2 border-r border-[#243049]">Recommended Hard Potential</th>
                <th className="px-3.5 py-2">Potential Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3.5 py-3 font-extrabold text-[#fbbf24] border-r border-[#1e293b]">
                  {sd?.hardPotential?.name || 'Starlight Trajectory AX-5'}
                </td>
                <td className="px-3.5 py-3 text-[#e2e8f0]">
                  {sd?.hardPotential?.effect ||
                    'Increases ATK by 8% and Crit Rate by 5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill).'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <AppMediaH3 id="training-stat-policy">Rescue Journey Training Stat Priority Policy</AppMediaH3>
        <ul className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-1.5 text-[12px] text-[#e2e8f0]">
          <li>
            • <strong className="text-[#93c5fd]">Primary Training Focus:</strong> Prioritize{' '}
            {character.role === 'Supporter' || character.role === 'Defender'
              ? 'Vitality and Endurance training nodes to maximize HP/DEF scaling and survivability.'
              : 'Power and Endurance training nodes to maximize ATK scaling while securing Crit Rate and Speed potentials.'}
          </li>
          <li>
            • <strong className="text-[#93c5fd]">Stellar Archive Inheritance:</strong> Slot two primary stat Stellar Archives to hit S+ rank thresholds consistently during Hard Mode runs.
          </li>
          <li>
            • <strong className="text-[#93c5fd]">Common Potential Priority:</strong> Prioritize [Stigmata of Speed], [Stigmata of Insight], [Sense of Attack], and [Sense of Destruction] whenever discounted.
          </li>
        </ul>
      </section>

      {/* 5. H2: 強さと使い道 (Strengths & How to Use) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3 text-[12px] text-[#cbd5e1] leading-relaxed">
        <AppMediaH2 id="strengths-usage">{character.name}&apos;s Strengths & How to Use</AppMediaH2>
        {character.skills.map((sk, idx) => (
          <div key={idx} className="space-y-1.5">
            <AppMediaH3>
              {sk.type}: {sk.name} ({sk.multiplierSummary})
            </AppMediaH3>
            <p>{sk.exactDescription}</p>
            {sk.novaBurst && (
              <p className="text-[#fbbf24] font-semibold">
                • Nova Burst Enhancement: {sk.novaBurst}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* 6. H2: 凸依存度 (Limit Break Dupe Reliance) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="dupe-reliance">{character.name}&apos;s Limit Break (Dupe) Reliance</AppMediaH2>
        <div className="rounded-lg border border-[#243049] bg-[#0f1626] px-4 py-2.5 flex items-center justify-between text-[12px]">
          <span className="font-extrabold text-[#93c5fd]">{character.name} Limit Break Priority Rating</span>
          <span className="font-black text-[#fbbf24] text-[14px]">
            {sd?.dupeRating || '★★☆'} (Strong upgrade with dupes, fully playable at LB0)
          </span>
        </div>

        <AppMediaH3>Unique Passive Progression by Limit Break Stage</AppMediaH3>
        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[12px]">
            <thead>
              <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold text-[#94a3b8]">
                <th className="w-36 px-3.5 py-2 border-r border-[#243049]">Limit Break Stage</th>
                <th className="px-3.5 py-2">Unique Passive Enhancement Effect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]">
              {(sd?.limitBreaks || []).map((lb, idx) => (
                <tr key={idx}>
                  <td className="px-3.5 py-2.5 font-extrabold text-[#f43f5e] border-r border-[#1e293b]">
                    {lb.stage}
                  </td>
                  <td className="px-3.5 py-2.5 text-[#e2e8f0]">{lb.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. H2: スキル上げ優先度と推奨レベル */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaH2 id="skill-priority">
          {character.name}&apos;s Skill Upgrade Priority & Recommended Levels
        </AppMediaH2>

        <AppMediaH3>Skill Upgrade Priority & Target Levels</AppMediaH3>
        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-center text-[12px]">
            <thead>
              <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold text-[#94a3b8]">
                <th className="px-3 py-2 border-r border-[#243049]">Skill Slot</th>
                <th className="px-3 py-2 border-r border-[#243049]">Upgrade Priority</th>
                <th className="px-3 py-2">Recommended Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]">
              {(sd?.skillPriority || []).map((sp, i) => (
                <tr key={i}>
                  <td className="px-3 py-2.5 font-bold text-white border-r border-[#1e293b]">{sp.skillType}</td>
                  <td className="px-3 py-2.5 font-black text-[#fbbf24] border-r border-[#1e293b]">{sp.priority}</td>
                  <td className="px-3 py-2.5 font-bold text-[#93c5fd]">{sp.recLevel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AppMediaH3>Skill Level Enhancement Effects (Lv.2 – Lv.10)</AppMediaH3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626]">
            <div className="border-b border-[#243049] bg-[#161f33] px-3 py-1.5 text-[11px] font-extrabold text-[#93c5fd]">
              Basic Skill Level Progression
            </div>
            <table className="w-full border-collapse text-left text-[11px]">
              <tbody className="divide-y divide-[#1e293b]">
                {SKILL_LEVEL_BASIC.map((row) => (
                  <tr key={row.lv}>
                    <td className="w-20 px-3 py-1.5 font-bold text-white border-r border-[#1e293b]">{row.lv}</td>
                    <td className="px-3 py-1.5 text-[#cbd5e1]">{row.effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626]">
            <div className="border-b border-[#243049] bg-[#161f33] px-3 py-1.5 text-[11px] font-extrabold text-[#93c5fd]">
              Special & Ultimate Skill Level Progression
            </div>
            <table className="w-full border-collapse text-left text-[11px]">
              <tbody className="divide-y divide-[#1e293b]">
                {SKILL_LEVEL_SPECIAL_ULT.map((row) => (
                  <tr key={row.lv}>
                    <td className="w-20 px-3 py-1.5 font-bold text-white border-r border-[#1e293b]">{row.lv}</td>
                    <td className={`px-3 py-1.5 ${row.effect.includes('Cooldown') ? 'font-extrabold text-[#fbbf24]' : 'text-[#cbd5e1]'}`}>
                      {row.effect}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 8. H2: スキル (Character Skills & Nova Burst) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="character-skills">{character.name}&apos;s Skills & Nova Burst</AppMediaH2>
        <div className="space-y-3">
          {character.skills.map((sk, idx) => (
            <div key={idx} className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1e293b] pb-2">
                <div className="flex items-center gap-3">
                  {sk.iconUrl && (
                    <img
                      src={sk.iconUrl}
                      alt={sk.name}
                      className="h-14 w-14 rounded-lg border border-[#334155] bg-[#090d16] p-1 object-contain shrink-0"
                      loading="eager"
                    />
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-[#2563eb]/25 border border-[#3b82f6]/50 px-2 py-0.5 text-[10px] font-extrabold text-[#93c5fd]">
                        {sk.type}
                      </span>
                      <span className="text-[14px] font-black text-white">{sk.name}</span>
                    </div>
                    <div className="mt-1 text-[11px] font-semibold text-[#60a5fa]">
                      {sk.target || 'Active Skill'}
                    </div>
                  </div>
                </div>
                <div className="text-[11px] font-bold text-[#cbd5e1]">
                  {sk.spOrEnergyCost} · <span className="text-[#fbbf24]">{sk.multiplierSummary}</span>
                </div>
              </div>
              <p className="text-[12px] text-[#e2e8f0] whitespace-pre-line leading-relaxed">
                {sk.exactDescription}
              </p>
              {sk.novaBurst && (
                <div className="rounded border border-[#eab308]/40 bg-[#eab308]/10 px-3 py-2 text-[11px] text-[#fde047]">
                  <strong className="font-extrabold">Nova Burst:</strong> {sk.novaBurst}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. H2: ステータスと旅能力 (Combat Stats, Journey Aptitudes, Exclusive Curio & Resonance Potentials) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaH2 id="stats-journey-curio">
          {character.name}&apos;s Combat Stats (Lv.200) & Rescue Journey Capabilities
        </AppMediaH2>

        <AppMediaH3>General Combat Stats & Server Ranking (/ {totalUnits} Saviors)</AppMediaH3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3">
            <div className="text-[11px] font-bold text-[#94a3b8]">Attack (ATK)</div>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="text-lg font-black text-rose-400">{character.baseStats.atk.toLocaleString()}</span>
              <span className="rounded bg-[#161f33] px-2 py-0.5 text-[10px] font-bold text-[#93c5fd]">
                Rank #{atkRank} / {totalUnits}
              </span>
            </div>
          </div>
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3">
            <div className="text-[11px] font-bold text-[#94a3b8]">Max HP</div>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="text-lg font-black text-emerald-400">{character.baseStats.hp.toLocaleString()}</span>
              <span className="rounded bg-[#161f33] px-2 py-0.5 text-[10px] font-bold text-[#93c5fd]">
                Rank #{hpRank} / {totalUnits}
              </span>
            </div>
          </div>
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3">
            <div className="text-[11px] font-bold text-[#94a3b8]">Defense (DEF)</div>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="text-lg font-black text-sky-400">{character.baseStats.def.toLocaleString()}</span>
              <span className="rounded bg-[#161f33] px-2 py-0.5 text-[10px] font-bold text-[#93c5fd]">
                Rank #{defRank} / {totalUnits}
              </span>
            </div>
          </div>
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3">
            <div className="text-[11px] font-bold text-[#94a3b8]">Speed (SPD)</div>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="text-lg font-black text-amber-400">{character.baseStats.spd}</span>
              <span className="rounded bg-[#161f33] px-2 py-0.5 text-[10px] font-bold text-[#93c5fd]">
                Rank #{spdRank} / {totalUnits}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-[12px]">
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-2.5">
            <div className="text-[10px] font-bold text-[#94a3b8]">Crit Rate</div>
            <div className="mt-0.5 font-black text-white">{character.baseStats.critRate || '15%'}</div>
          </div>
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-2.5">
            <div className="text-[10px] font-bold text-[#94a3b8]">Crit DMG</div>
            <div className="mt-0.5 font-black text-white">{character.baseStats.critDmg || '50%'}</div>
          </div>
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-2.5">
            <div className="text-[10px] font-bold text-[#94a3b8]">Effect Hit</div>
            <div className="mt-0.5 font-black text-white">{character.baseStats.effHit || '100%'}</div>
          </div>
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-2.5">
            <div className="text-[10px] font-bold text-[#94a3b8]">Effect RES</div>
            <div className="mt-0.5 font-black text-white">{character.baseStats.effRes || '0%'}</div>
          </div>
        </div>

        {sd?.journeyStats && (
          <>
            <AppMediaH3>Rescue Journey Base Aptitudes</AppMediaH3>
            <div className="grid grid-cols-5 gap-2 text-center text-[12px]">
              <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-2.5">
                <div className="text-[10px] font-bold text-[#94a3b8]">Power</div>
                <div className="mt-0.5 font-black text-white">{sd.journeyStats.power}</div>
              </div>
              <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-2.5">
                <div className="text-[10px] font-bold text-[#94a3b8]">Vitality</div>
                <div className="mt-0.5 font-black text-white">{sd.journeyStats.vitality}</div>
              </div>
              <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-2.5">
                <div className="text-[10px] font-bold text-[#94a3b8]">Endurance</div>
                <div className="mt-0.5 font-black text-white">{sd.journeyStats.endurance}</div>
              </div>
              <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-2.5">
                <div className="text-[10px] font-bold text-[#94a3b8]">Focus</div>
                <div className="mt-0.5 font-black text-white">{sd.journeyStats.focus}</div>
              </div>
              <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-2.5">
                <div className="text-[10px] font-bold text-[#94a3b8]">Protection</div>
                <div className="mt-0.5 font-black text-white">{sd.journeyStats.protection}</div>
              </div>
            </div>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sd?.curio && (
            <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-2">
              <div className="text-[11px] font-extrabold text-[#fbbf24] uppercase">
                Exclusive Curio · Rank {sd.curio.rank}
              </div>
              <div className="flex items-start gap-3">
                {sd.curio.iconUrl && (
                  <img
                    src={sd.curio.iconUrl}
                    alt={sd.curio.name}
                    className="h-16 w-16 rounded-lg border border-[#334155] bg-[#090d16] p-1 object-contain shrink-0"
                    loading="eager"
                  />
                )}
                <div>
                  <div className="text-[14px] font-black text-white">{sd.curio.name}</div>
                  <p className="mt-1 text-[12px] text-[#cbd5e1] leading-relaxed">{sd.curio.effect}</p>
                </div>
              </div>
            </div>
          )}

          {(sd?.resonancePotentials || []).length > 0 && (
            <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-2">
              <div className="text-[11px] font-extrabold text-[#93c5fd] uppercase">
                Resonance Potentials
              </div>
              <div className="space-y-1.5 text-[12px]">
                {sd?.resonancePotentials?.map((rp, i) => (
                  <div key={i} className="text-[#e2e8f0]">
                    <strong className="text-white">{rp.name}:</strong> {rp.effect}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 10. H2: 共鳴効果/必要素材一覧 (Resonance Stages & Required Materials) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="resonance-materials">
          {character.name}&apos;s Resonance Effects & Total Required Materials
        </AppMediaH2>
        <AppMediaH3>Total Materials Required for Full Resonance (Stages 1–10)</AppMediaH3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-[12px]">
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] px-3.5 py-2.5 flex items-center justify-between">
            <span className="font-bold text-[#cbd5e1]">Ether Dust</span>
            <span className="font-black text-[#fbbf24]">×400</span>
          </div>
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] px-3.5 py-2.5 flex items-center justify-between">
            <span className="font-bold text-[#cbd5e1]">Shape-Shifting Alloy</span>
            <span className="font-black text-[#fbbf24]">×24</span>
          </div>
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] px-3.5 py-2.5 flex items-center justify-between">
            <span className="font-bold text-[#cbd5e1]">Anti-Gravity Meteorite I</span>
            <span className="font-black text-[#fbbf24]">×56</span>
          </div>
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] px-3.5 py-2.5 flex items-center justify-between">
            <span className="font-bold text-[#cbd5e1]">Dawn Light Crystal I</span>
            <span className="font-black text-[#fbbf24]">×28</span>
          </div>
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] px-3.5 py-2.5 flex items-center justify-between">
            <span className="font-bold text-[#cbd5e1]">Anti-Gravity Meteorite II</span>
            <span className="font-black text-[#fbbf24]">×28</span>
          </div>
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] px-3.5 py-2.5 flex items-center justify-between">
            <span className="font-bold text-[#cbd5e1]">Dawn Light Crystal II</span>
            <span className="font-black text-[#fbbf24]">×14</span>
          </div>
        </div>
      </section>

      {/* 11. H2: プレゼント・好感度ギフト (10 Favorite Affinity Gifts) */}
      {(sd?.gifts || []).length > 0 && (
        <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
          <AppMediaH2 id="favorite-gifts">{character.name}&apos;s Presents & Favorite Affinity Gifts</AppMediaH2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {sd?.gifts?.map((g, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-lg border border-[#243049] bg-[#0f1626] p-3 text-center"
              >
                <img
                  src={g.iconUrl}
                  alt={g.name}
                  className="h-14 w-14 rounded-lg border border-[#334155] bg-[#090d16] p-1 object-contain"
                  loading="eager"
                />
                <span className="mt-1.5 text-[11px] font-bold text-[#e2e8f0] leading-tight">{g.name}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 12. H2: 声優と入手方法・プロフィール */}
      {sd?.profile && (
        <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
          <AppMediaH2 id="profile-cv-lore">
            {character.name}&apos;s Voice Actor (CV), How to Obtain & Profile
          </AppMediaH2>
          <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
            <table className="w-full border-collapse text-left text-[12px]">
              <tbody className="divide-y divide-[#1e293b]">
                <tr>
                  <th className="w-40 bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">Voice Actor (CV)</th>
                  <td className="px-3.5 py-2.5 font-bold text-white">{sd.profile.cv}</td>
                </tr>
                <tr>
                  <th className="bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">Affiliation</th>
                  <td className="px-3.5 py-2.5 text-[#e2e8f0]">{sd.profile.affiliation}</td>
                </tr>
                <tr>
                  <th className="bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">Birthday</th>
                  <td className="px-3.5 py-2.5 text-[#e2e8f0]">{sd.profile.birthday}</td>
                </tr>
                <tr>
                  <th className="bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">Height</th>
                  <td className="px-3.5 py-2.5 text-[#e2e8f0]">{sd.profile.height}</td>
                </tr>
                <tr>
                  <th className="bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">Origin</th>
                  <td className="px-3.5 py-2.5 text-[#e2e8f0]">{sd.profile.origin}</td>
                </tr>
                <tr>
                  <th className="bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">How to Obtain</th>
                  <td className="px-3.5 py-2.5 text-[#fbbf24] font-semibold">{sd.profile.obtain}</td>
                </tr>
                <tr>
                  <th className="bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">Character Lore</th>
                  <td className="px-3.5 py-2.5 text-[#cbd5e1] leading-relaxed">{sd.profile.bio}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      <AppMediaStrategyFooter characters={characters} showCharacterRoster={true} />
    </div>
  );
}

function useMemoPartyPartners(
  character: CharacterEntity,
  allCharacters: CharacterEntity[]
): { unit: CharacterEntity; position: string }[] {
  const recParty = character.staticData?.recommendedParty || [];
  const result: { unit: CharacterEntity; position: string }[] = [];

  for (const item of recParty) {
    const found = allCharacters.find((c) => c.slug === item.slug);
    if (found && !result.some((r) => r.unit.slug === found.slug)) {
      result.push({ unit: found, position: item.position || 'BACK' });
    }
  }

  if (result.length < 4) {
    if (!result.some((r) => r.unit.slug === character.slug)) {
      result.unshift({ unit: character, position: character.role === 'Defender' || character.role === 'Striker' ? 'FRONT' : 'BACK' });
    }
    const fallbackSlugs = ['professor-m', 'bride-carmen', 'maid-ceres', 'amora', 'bunny-charles', 'emily', 'dress-asherah'];
    for (const s of fallbackSlugs) {
      if (result.length >= 4) break;
      const found = allCharacters.find((c) => c.slug === s);
      if (found && !result.some((r) => r.unit.slug === found.slug)) {
        result.push({ unit: found, position: found.role === 'Defender' || found.role === 'Striker' ? 'FRONT' : 'BACK' });
      }
    }
  }

  return result.slice(0, 4);
}
