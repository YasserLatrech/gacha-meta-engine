'use client';

import React, { useState } from 'react';
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

export function CharacterDetailMacro({
  character,
  dataset,
}: {
  character: CharacterEntity;
  dataset: GameWikiDataset;
}) {
  const { characters, arcana } = dataset;
  const sd = character.staticData;

  const hasPreAwakening = Boolean(sd?.preAwakeningSkills && sd.preAwakeningSkills.length > 0);
  const [skillTab, setSkillTab] = useState<'post' | 'pre'>('post');

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
  const hpRankNum = [...characters].sort((a, b) => b.baseStats.hp - a.baseStats.hp).findIndex((c) => c.slug === character.slug) + 1;
  const atkRankNum = [...characters].sort((a, b) => b.baseStats.atk - a.baseStats.atk).findIndex((c) => c.slug === character.slug) + 1;
  const defRankNum = [...characters].sort((a, b) => b.baseStats.def - a.baseStats.def).findIndex((c) => c.slug === character.slug) + 1;
  const spdRankNum = [...characters].sort((a, b) => b.baseStats.spd - a.baseStats.spd).findIndex((c) => c.slug === character.slug) + 1;

  const atkRankLabel = character.baseStats.atkRank || `#${atkRankNum} / ${totalUnits}`;
  const hpRankLabel = character.baseStats.hpRank || `#${hpRankNum} / ${totalUnits}`;
  const defRankLabel = character.baseStats.defRank || `#${defRankNum} / ${totalUnits}`;
  const spdRankLabel = character.baseStats.spdRank || `#${spdRankNum} / ${totalUnits}`;

  // Recommended SSR Arcana (100% from character.bestArcanaSlugs)
  const recArcana: ArcanaEntity[] = character.bestArcanaSlugs
    .map((slug) => arcana.find((a) => a.slug === slug))
    .filter((a): a is ArcanaEntity => Boolean(a));

  // Substitute Arcana columns (from sd.substituteArcana)
  const substituteColumns = sd?.substituteArcana || [];

  // Recommended 4-Unit Party Formation (100% from sd.recommendedParty)
  const partyPartners = (sd?.recommendedParty || [])
    .map((item) => {
      const found = characters.find((c) => c.slug === item.slug);
      return found ? { unit: found, position: item.position || 'BACK' } : null;
    })
    .filter((x): x is { unit: CharacterEntity; position: string } => Boolean(x));

  // Gifts grouped by Favorite vs Liked
  const allGifts = sd?.gifts || [];
  const favoriteGifts = allGifts.filter((g) => g.tier === 'Favorite');
  const likedGifts = allGifts.filter((g) => g.tier === 'Liked');

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
    ...(partyPartners.length > 0
      ? [{ id: 'recommended-party', label: `${character.name}'s Recommended Party Formations` }]
      : []),
    {
      id: 'journey-arcana-guide',
      label: `${character.name}'s Rescue Journey Training & Arcana Deck`,
      subItems: [
        ...(substituteColumns.length > 0 ? [{ id: 'arcana-substitutes', label: 'Substitute Arcana Cards' }] : []),
        ...(sd?.hardPotential?.name ? [{ id: 'hard-potential', label: 'Recommended Hard Potential' }] : []),
        ...(sd?.statPriorityMeters && sd.statPriorityMeters.length > 0
          ? [{ id: 'training-stat-policy', label: 'Training Stat Priority Policy' }]
          : []),
      ],
    },
    ...(sd?.strengthsSections && sd.strengthsSections.length > 0
      ? [{ id: 'strengths-usage', label: `${character.name}'s Strengths & How to Use` }]
      : []),
    { id: 'dupe-reliance', label: `${character.name}'s Limit Break (Dupe) Reliance` },
    ...((sd?.skillPriority && sd.skillPriority.length > 0) || (sd?.skillLevelProgression?.basic && sd.skillLevelProgression.basic.length > 0)
      ? [{ id: 'skill-priority', label: `${character.name}'s Skill Upgrade Priority & Level Effects` }]
      : []),
    { id: 'character-skills', label: `${character.name}'s Skills & Nova Burst` },
    {
      id: 'stats-journey-curio',
      label: `${character.name}'s Combat Stats, Journey Aptitudes & Exclusive Curio`,
    },
    { id: 'resonance-materials', label: `${character.name}'s Resonance Stages & Required Materials` },
    ...(allGifts.length > 0
      ? [{ id: 'favorite-gifts', label: `${character.name}'s Presents & Favorite Affinity Gifts` }]
      : []),
    ...(sd?.arkPointUrl
      ? [{ id: 'ark-point', label: `${character.name}'s Ark Point Illustration` }]
      : []),
    { id: 'profile-cv-lore', label: `${character.name}'s Voice Actor (CV), How to Obtain & Profile` },
  ];

  const evalBullets =
    sd?.evalBullets && sd.evalBullets.length > 0
      ? sd.evalBullets
      : [character.summary];

  const displayedSkills =
    skillTab === 'pre' && sd?.preAwakeningSkills && sd.preAwakeningSkills.length > 0
      ? sd.preAwakeningSkills
      : character.skills;

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
          Complete strategy guide for <strong className="text-white">{character.name}</strong> in Star Savior. Covers {character.name}&apos;s performance evaluation, recommended equipment sets, 4-unit party formations, Rescue Journey Arcana decks, Limit Break (dupe) reliance, skill upgrade priority, Exclusive Curio, 10-stage Resonance materials, favorite affinity gifts, and Voice Actor (CV) profile.
        </p>

        <AppMediaTocBox items={tocItems} />
      </section>

      {/* 1. H2: 評価と性能 (Evaluation & Performance) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaH2 id="eval-performance" badge={sd?.appMediaTier || character.overallTier}>
          {character.name}&apos;s Evaluation & Performance
        </AppMediaH2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          {/* Standing Art Card (Official Illustration) */}
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
                      {character.rarity} ({sd?.pool || 'Standard'})
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

            {/* AppMedia Authentic Tier Ratings Table (Letter Ranks Only — Zero Made-Up Numeric Scores) */}
            <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626]">
              <table className="w-full border-collapse text-center text-[12px]">
                <thead>
                  <tr className="border-b border-[#243049] bg-[#161f33] text-[10px] font-extrabold uppercase text-[#94a3b8]">
                    <th className="py-2 border-r border-[#243049]">Overall</th>
                    <th className="py-2 border-r border-[#243049]">General PvE</th>
                    <th className="py-2 border-r border-[#243049]">Vs. Boss</th>
                    <th className="py-2 border-r border-[#243049]">Gauntlet PvP</th>
                    <th className="py-2 border-r border-[#243049]">Reroll</th>
                    <th className="py-2">Dupe Priority</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2.5 border-r border-[#1e293b]">
                      <AppMediaTierBadge tier={sd?.appMediaTier || character.overallTier} />
                    </td>
                    <td className="py-2.5 border-r border-[#1e293b]">
                      <AppMediaTierBadge tier={sd?.pveTier || sd?.appMediaTier || character.overallTier} />
                    </td>
                    <td className="py-2.5 border-r border-[#1e293b]">
                      <AppMediaTierBadge tier={sd?.bossTier || sd?.appMediaTier || character.overallTier} />
                    </td>
                    <td className="py-2.5 border-r border-[#1e293b]">
                      <AppMediaTierBadge tier={sd?.pvpTier || character.overallTier} />
                    </td>
                    <td className="py-2.5 border-r border-[#1e293b]">
                      <AppMediaTierBadge tier={sd?.appMediaRerollTier || character.rerollTier} />
                    </td>
                    <td className="py-2.5 font-black text-[#fbbf24]">
                      {sd?.dupeRating || '—'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Quick Summary & Strengths Bullet Box */}
            <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3 space-y-1.5">
              <div className="text-[11px] font-extrabold text-[#93c5fd]">
                [{character.name} Performance Summary]
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
                <td className="p-3.5 align-top border-r border-[#1e293b] space-y-2 text-[#e2e8f0]">
                  {sd?.equipment?.pveSetDetails && sd.equipment.pveSetDetails.length > 0 ? (
                    <div className="flex flex-wrap gap-3">
                      {sd.equipment.pveSetDetails.map((s, i) => (
                        <div key={i} className="flex items-center gap-2.5 rounded-lg border border-[#243049] bg-[#111827] px-3 py-2">
                          {s.iconUrl && (
                            <img src={s.iconUrl} alt={s.name} className="h-11 w-11 rounded border border-[#334155] bg-[#090d16] p-0.5 object-contain shrink-0" loading="eager" />
                          )}
                          <div>
                            <div className="font-extrabold text-white text-[12px]">{s.name} Set</div>
                            {s.effect && <div className="text-[11px] font-semibold text-[#fbbf24]">{s.effect}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    (sd?.equipment?.pveSets || []).map((s, i) => (
                      <div key={i} className="font-bold">• {s}</div>
                    ))
                  )}
                </td>
                <td className="p-3.5 align-top space-y-2 text-[#e2e8f0]">
                  {sd?.equipment?.pvpSetDetails && sd.equipment.pvpSetDetails.length > 0 ? (
                    <div className="flex flex-wrap gap-3">
                      {sd.equipment.pvpSetDetails.map((s, i) => (
                        <div key={i} className="flex items-center gap-2.5 rounded-lg border border-[#243049] bg-[#111827] px-3 py-2">
                          {s.iconUrl && (
                            <img src={s.iconUrl} alt={s.name} className="h-11 w-11 rounded border border-[#334155] bg-[#090d16] p-0.5 object-contain shrink-0" loading="eager" />
                          )}
                          <div>
                            <div className="font-extrabold text-white text-[12px]">{s.name} Set</div>
                            {s.effect && <div className="text-[11px] font-semibold text-[#fbbf24]">{s.effect}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    (sd?.equipment?.pvpSets || []).map((s, i) => (
                      <div key={i} className="font-bold">• {s}</div>
                    ))
                  )}
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
                <th className="w-48 bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">
                  <div className="flex items-center gap-2">
                    {sd?.equipment?.necklaceIconUrl && (
                      <img src={sd.equipment.necklaceIconUrl} alt="Necklace" className="h-8 w-8 rounded border border-[#334155] bg-[#090d16] object-contain shrink-0" loading="eager" />
                    )}
                    <span>Necklace Main Stat</span>
                  </div>
                </th>
                <td className="px-3.5 py-2.5 font-bold text-white">
                  {sd?.equipment?.necklaceMain || '—'}
                </td>
              </tr>
              <tr>
                <th className="bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">
                  <div className="flex items-center gap-2">
                    {sd?.equipment?.ringIconUrl && (
                      <img src={sd.equipment.ringIconUrl} alt="Ring" className="h-8 w-8 rounded border border-[#334155] bg-[#090d16] object-contain shrink-0" loading="eager" />
                    )}
                    <span>Ring Main Stat</span>
                  </div>
                </th>
                <td className="px-3.5 py-2.5 font-bold text-white">
                  {sd?.equipment?.ringMain || '—'}
                </td>
              </tr>
              <tr>
                <th className="bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">
                  Substat Priority
                </th>
                <td className="px-3.5 py-2.5 font-semibold text-[#fbbf24]">
                  {sd?.equipment?.subStats || '—'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. H2: 編成おすすめ (Recommended 4-Unit Party Formations — Rendered when present on AppMedia) */}
      {partyPartners.length > 0 && (
        <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
          <AppMediaH2 id="recommended-party">{character.name}&apos;s Recommended Party Formations</AppMediaH2>
          <AppMediaH3>{sd?.partyTitle || 'Recommended 4-Unit Synergy Lineup'}</AppMediaH3>
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-4 space-y-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 place-items-center">
              {partyPartners.map((p, idx) => (
                <div key={`${p.unit.slug}-${idx}`} className="flex flex-col items-center text-center space-y-1">
                  <span className="rounded bg-[#161f33] border border-[#263452] px-2 py-0.5 text-[10px] font-extrabold text-[#93c5fd]">
                    {p.position} · {p.unit.role}
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
            {sd?.partyNotes && sd.partyNotes.length > 0 && (
              <div className="border-t border-[#1e293b] pt-2.5 space-y-1.5 text-[12px] text-[#cbd5e1] leading-relaxed">
                {sd.partyNotes.map((note, idx) => (
                  <p key={idx}>• {note}</p>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 4. H2: 旅育成・アルカナおすすめ (Rescue Journey Training & Arcana Deck) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaH2 id="journey-arcana-guide">
          {character.name}&apos;s Rescue Journey Training & Recommended Arcana
        </AppMediaH2>

        <AppMediaH3>
          {sd?.arcanaDeckTitle
            ? `Recommended Arcana Deck: ${sd.arcanaDeckTitle}`
            : 'Recommended SSR Arcana Deck (5-Card Setup)'}
        </AppMediaH3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {recArcana.map((a) => (
            <Link
              key={a.slug}
              href={`/starsavior/arcana#${a.slug}`}
              className="group flex items-start gap-3 rounded-lg border border-[#243049] bg-[#0f1626] p-3 hover:border-[#3b82f6] transition-colors"
            >
              <img
                src={a.imageUrl}
                alt={a.name}
                className="h-[68px] w-[68px] rounded-lg border-2 border-[#eab308]/75 object-cover shrink-0 bg-[#090d16]"
                loading="eager"
              />
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-extrabold text-[12px] text-white group-hover:text-[#60a5fa] truncate">
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

        {/* AppMedia Training Point Bullets (ポイント) */}
        {sd?.journeyTrainingPoints && sd.journeyTrainingPoints.length > 0 && (
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-1.5">
            <div className="text-[11px] font-extrabold text-[#fbbf24]">
              [Key Arcana Deck & Rescue Journey Points]
            </div>
            <ul className="space-y-1 text-[12px] text-[#e2e8f0] leading-relaxed">
              {sd.journeyTrainingPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#3b82f6] font-bold">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* AppMedia 5-Column Substitute Arcana Replacement Table */}
        {substituteColumns.length > 0 && (
          <>
            <AppMediaH4 id="arcana-substitutes">Substitute Arcana Cards (Replacement Table)</AppMediaH4>
            <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626] p-3">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 min-w-[480px]">
                {substituteColumns.map((col, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center rounded-lg border border-[#1e293b] bg-[#111827] p-2.5 space-y-1.5"
                  >
                    <span className="text-[10px] font-bold text-[#94a3b8]">Target SSR</span>
                    <AppMediaIconCell
                      href={`/starsavior/arcana#${col.targetSlug}`}
                      name={col.targetName}
                      imageUrl={col.targetIconUrl}
                      rarity="SSR"
                      size="sm"
                    />
                    <span className="text-sm font-black text-[#60a5fa]">↓</span>
                    <span className="text-[10px] font-bold text-[#fbbf24]">Substitutes</span>
                    <div className="flex flex-col items-center gap-1.5 w-full">
                      {col.substitutes.map((sub, sIdx) => (
                        <AppMediaIconCell
                          key={sIdx}
                          href={`/starsavior/arcana#${sub.slug}`}
                          name={sub.name}
                          imageUrl={sub.iconUrl}
                          rarity={sub.rarity}
                          size="sm"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* AppMedia Hard Potential with Official Icon */}
        {sd?.hardPotential?.name && (
          <>
            <AppMediaH3 id="hard-potential">Recommended Rescue Journey Hard Potential</AppMediaH3>
            <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626]">
              <table className="w-full border-collapse text-left text-[12px]">
                <thead>
                  <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold text-[#94a3b8]">
                    <th className="w-64 px-3.5 py-2 border-r border-[#243049]">Recommended Hard Potential</th>
                    <th className="px-3.5 py-2">Potential Effect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3.5 py-3 font-extrabold text-[#fbbf24] border-r border-[#1e293b]">
                      <div className="flex items-center gap-2.5">
                        {sd.hardPotential.iconUrl && (
                          <img
                            src={sd.hardPotential.iconUrl}
                            alt={sd.hardPotential.name}
                            className="h-11 w-11 rounded-lg border border-[#334155] bg-[#090d16] p-0.5 object-contain shrink-0"
                            loading="eager"
                          />
                        )}
                        <span>{sd.hardPotential.name}</span>
                      </div>
                    </td>
                    <td className="px-3.5 py-3 text-[#e2e8f0] leading-relaxed">
                      {sd.hardPotential.effect}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* AppMedia 5-Segment Training Stat Priority Policy Meters */}
        {sd?.statPriorityMeters && sd.statPriorityMeters.length > 0 && (
          <>
            <AppMediaH3 id="training-stat-policy">Rescue Journey Training Stat Priority Policy</AppMediaH3>
            <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626]">
              <table className="w-full border-collapse text-left text-[12px]">
                <tbody className="divide-y divide-[#1e293b]">
                  {sd.statPriorityMeters.map((m, idx) => (
                    <tr key={idx}>
                      <th className="w-44 bg-[#161f33] px-3.5 py-2.5 font-extrabold text-white border-r border-[#243049]">
                        <div className="flex items-center gap-2">
                          {m.iconUrl && (
                            <img src={m.iconUrl} alt={m.stat} className="h-6 w-6 object-contain shrink-0" loading="eager" />
                          )}
                          <span>{m.stat}</span>
                        </div>
                      </th>
                      <td className="px-3.5 py-2.5">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 flex-1 max-w-xs">
                            {[1, 2, 3, 4, 5].map((seg) => (
                              <div
                                key={seg}
                                className={`h-3 flex-1 rounded-sm border ${
                                  seg <= m.segmentsOn
                                    ? 'bg-[#f59e0b] border-[#fbbf24]'
                                    : 'bg-[#1e293b] border-[#334155]'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-[11px] font-black text-[#fbbf24]">
                            {m.segmentsOn} / 5
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>

      {/* 5. H2: 強さと使い道 (Strengths & How to Use — 100% Real AppMedia Analysis Sections & Banners) */}
      {sd?.strengthsSections && sd.strengthsSections.length > 0 && (
        <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4 text-[12px] text-[#cbd5e1] leading-relaxed">
          <AppMediaH2 id="strengths-usage">{character.name}&apos;s Strengths & How to Use</AppMediaH2>
          {sd.strengthsSections.map((sec, idx) => (
            <div key={idx} className="space-y-2.5">
              {sec.level === 'h4' ? (
                <AppMediaH4>{sec.title}</AppMediaH4>
              ) : (
                <AppMediaH3>{sec.title}</AppMediaH3>
              )}
              <div className="space-y-2">
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-[#e2e8f0] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* 6. H2: 凸依存度 (Limit Break Dupe Reliance) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="dupe-reliance">{character.name}&apos;s Limit Break (Dupe) Reliance</AppMediaH2>
        <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-1.5 text-[12px]">
          <div className="flex items-center justify-between">
            <span className="font-extrabold text-[#93c5fd]">{character.name} Limit Break Priority Rating</span>
            <span className="font-black text-[#fbbf24] text-[14px]">
              {sd?.dupeRating || '—'}
            </span>
          </div>
          {sd?.dupeSummary && (
            <p className="text-[#e2e8f0] leading-relaxed border-t border-[#1e293b] pt-2">
              {sd.dupeSummary}
            </p>
          )}
        </div>

        {(sd?.limitBreaks || []).length > 0 && (
          <>
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
          </>
        )}
      </section>

      {/* 7. H2: スキル上げ優先度と推奨レベル */}
      {((sd?.skillPriority && sd.skillPriority.length > 0) ||
        (sd?.skillLevelProgression?.basic && sd.skillLevelProgression.basic.length > 0)) && (
        <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
          <AppMediaH2 id="skill-priority">
            {character.name}&apos;s Skill Upgrade Priority & Level Effects
          </AppMediaH2>

          {(sd?.skillPriority || []).length > 0 && (
            <>
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
            </>
          )}

          {sd?.skillLevelProgression?.basic && sd.skillLevelProgression.basic.length > 0 && (
            <>
              <AppMediaH3>Skill Level Enhancement Effects (Lv.2 – Lv.10)</AppMediaH3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626]">
                  <div className="border-b border-[#243049] bg-[#161f33] px-3 py-1.5 text-[11px] font-extrabold text-[#93c5fd]">
                    Basic Attack (Lv.2–10)
                  </div>
                  <table className="w-full border-collapse text-left text-[11px]">
                    <tbody className="divide-y divide-[#1e293b]">
                      {sd.skillLevelProgression.basic.map((row) => (
                        <tr key={row.level}>
                          <td className="w-16 px-2.5 py-1.5 font-bold text-white border-r border-[#1e293b]">{row.level}</td>
                          <td className="px-2.5 py-1.5 text-[#cbd5e1]">{row.effect}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626]">
                  <div className="border-b border-[#243049] bg-[#161f33] px-3 py-1.5 text-[11px] font-extrabold text-[#93c5fd]">
                    Special Skill (Lv.2–10)
                  </div>
                  <table className="w-full border-collapse text-left text-[11px]">
                    <tbody className="divide-y divide-[#1e293b]">
                      {sd.skillLevelProgression.special.map((row) => (
                        <tr key={row.level}>
                          <td className="w-16 px-2.5 py-1.5 font-bold text-white border-r border-[#1e293b]">{row.level}</td>
                          <td className={`px-2.5 py-1.5 ${row.effect.includes('Cooldown') ? 'font-extrabold text-[#fbbf24]' : 'text-[#cbd5e1]'}`}>
                            {row.effect}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626]">
                  <div className="border-b border-[#243049] bg-[#161f33] px-3 py-1.5 text-[11px] font-extrabold text-[#93c5fd]">
                    Ultimate Skill (Lv.2–10)
                  </div>
                  <table className="w-full border-collapse text-left text-[11px]">
                    <tbody className="divide-y divide-[#1e293b]">
                      {sd.skillLevelProgression.ultimate.map((row) => (
                        <tr key={row.level}>
                          <td className="w-16 px-2.5 py-1.5 font-bold text-white border-r border-[#1e293b]">{row.level}</td>
                          <td className={`px-2.5 py-1.5 ${row.effect.includes('Cooldown') ? 'font-extrabold text-[#fbbf24]' : 'text-[#cbd5e1]'}`}>
                            {row.effect}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </section>
      )}

      {/* 8. H2: スキル (Character Skills, Scaling Rows, Nova Burst & Buff/Debuff Tooltips) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <AppMediaH2 id="character-skills">{character.name}&apos;s Skills & Nova Burst</AppMediaH2>
          {hasPreAwakening && (
            <div className="inline-flex rounded-lg border border-[#243049] bg-[#0b101b] p-1 text-[11px] font-extrabold">
              <button
                type="button"
                onClick={() => setSkillTab('post')}
                className={`rounded-md px-3 py-1 transition-colors ${
                  skillTab === 'post'
                    ? 'bg-[#2563eb] text-white'
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                Post-Awakening
              </button>
              <button
                type="button"
                onClick={() => setSkillTab('pre')}
                className={`rounded-md px-3 py-1 transition-colors ${
                  skillTab === 'pre'
                    ? 'bg-[#2563eb] text-white'
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                Pre-Awakening
              </button>
            </div>
          )}
        </div>

        <div className="space-y-3">
          {displayedSkills.map((sk, idx) => (
            <div key={idx} className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1e293b] pb-2.5">
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

              {/* Exact AppMedia Skill Rate Scaling Rows (.skillrate-row-*) */}
              {sk.scalingRows && sk.scalingRows.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {sk.scalingRows.map((row, rIdx) => (
                    <div
                      key={rIdx}
                      className="inline-flex flex-wrap items-center gap-2 rounded border border-[#243049] bg-[#141c2e] px-2.5 py-1 text-[11px]"
                    >
                      {row.category && <span className="font-bold text-[#93c5fd]">{row.category}:</span>}
                      {row.items.map((item, iIdx) => (
                        <span key={iIdx} className="inline-flex items-center gap-1 font-extrabold text-[#f8fafc]">
                          {item.iconUrl && (
                            <img src={item.iconUrl} alt="" className="h-4 w-4 object-contain shrink-0" loading="eager" />
                          )}
                          <span>{item.value}</span>
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              <p className="text-[12px] text-[#e2e8f0] whitespace-pre-line leading-relaxed">
                {sk.exactDescription}
              </p>

              {sk.novaBurst && (
                <div className="rounded border border-[#eab308]/40 bg-[#eab308]/10 px-3 py-2 text-[11px] text-[#fde047]">
                  <strong className="font-extrabold">Nova Burst:</strong> {sk.novaBurst}
                </div>
              )}

              {/* Exact AppMedia Buff/Debuff Effect Tooltips (data-tippy_tag) */}
              {sk.tooltips && sk.tooltips.length > 0 && (
                <div className="rounded-lg border border-[#1e293b] bg-[#0b101b] p-2.5 space-y-1.5">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#94a3b8]">
                    Skill Buff / Debuff Definitions
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sk.tooltips.map((tt, tIdx) => (
                      <div key={tIdx} className="rounded border border-[#1e293b] bg-[#111726] px-2.5 py-1.5 text-[11px]">
                        <div className="font-extrabold text-[#60a5fa]">{tt.title}</div>
                        <div className="text-[#cbd5e1] leading-snug">{tt.detail}</div>
                      </div>
                    ))}
                  </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3 space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-bold text-[#94a3b8]">
              <span>Attack (ATK)</span>
              <span className="rounded bg-[#161f33] px-2 py-0.5 text-[10px] font-bold text-[#93c5fd]">
                {atkRankLabel}
              </span>
            </div>
            <div className="text-lg font-black text-rose-400">{character.baseStats.atk.toLocaleString()}</div>
            <div className="h-1.5 w-full rounded-full bg-[#1e293b] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-rose-500"
                style={{ width: `${Math.min(100, character.baseStats.atkBarPct || 75)}%` }}
              />
            </div>
          </div>

          <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3 space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-bold text-[#94a3b8]">
              <span>Max HP</span>
              <span className="rounded bg-[#161f33] px-2 py-0.5 text-[10px] font-bold text-[#93c5fd]">
                {hpRankLabel}
              </span>
            </div>
            <div className="text-lg font-black text-emerald-400">{character.baseStats.hp.toLocaleString()}</div>
            <div className="h-1.5 w-full rounded-full bg-[#1e293b] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
                style={{ width: `${Math.min(100, character.baseStats.hpBarPct || 75)}%` }}
              />
            </div>
          </div>

          <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3 space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-bold text-[#94a3b8]">
              <span>Defense (DEF)</span>
              <span className="rounded bg-[#161f33] px-2 py-0.5 text-[10px] font-bold text-[#93c5fd]">
                {defRankLabel}
              </span>
            </div>
            <div className="text-lg font-black text-sky-400">{character.baseStats.def.toLocaleString()}</div>
            <div className="h-1.5 w-full rounded-full bg-[#1e293b] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-500 to-blue-400"
                style={{ width: `${Math.min(100, character.baseStats.defBarPct || 75)}%` }}
              />
            </div>
          </div>

          <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3 space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-bold text-[#94a3b8]">
              <span>Speed (SPD)</span>
              <span className="rounded bg-[#161f33] px-2 py-0.5 text-[10px] font-bold text-[#93c5fd]">
                {spdRankLabel}
              </span>
            </div>
            <div className="text-lg font-black text-amber-400">{character.baseStats.spd}</div>
            <div className="h-1.5 w-full rounded-full bg-[#1e293b] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-yellow-300"
                style={{ width: `${Math.min(100, character.baseStats.spdBarPct || 75)}%` }}
              />
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
            <div className="mt-0.5 font-black text-white">{character.baseStats.effHit || '0%'}</div>
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
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-[#fbbf24] uppercase">
                  Exclusive Curio · Rank {sd.curio.rank}
                </span>
                {sd.curio.rankNote && (
                  <span className="text-[10px] font-semibold text-[#94a3b8]">
                    {sd.curio.rankNote}
                  </span>
                )}
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

      {/* 10. H2: 共鳴効果/必要素材一覧 (10-Stage Resonance Progression & Total Materials with Official Icons) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaH2 id="resonance-materials">
          {character.name}&apos;s Resonance Stages (1–10) & Required Materials
        </AppMediaH2>

        {sd?.resonanceStages && sd.resonanceStages.length > 0 && (
          <>
            <AppMediaH3>Resonance Stage 1–10 Effects & Material Requirements</AppMediaH3>
            <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
              <table className="w-full border-collapse text-left text-[12px]">
                <thead>
                  <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold text-[#94a3b8]">
                    <th className="w-16 px-3 py-2 text-center border-r border-[#243049]">Stage</th>
                    <th className="px-3 py-2 border-r border-[#243049]">Journey Stat Bonus</th>
                    <th className="px-3 py-2 border-r border-[#243049]">Combat Stat Bonus</th>
                    <th className="px-3 py-2">Required Materials</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e293b]">
                  {sd.resonanceStages.map((st) => (
                    <tr key={st.stage}>
                      <td className="px-3 py-2 text-center font-black text-[#fbbf24] border-r border-[#1e293b]">
                        Stage {st.stage}
                      </td>
                      <td className="px-3 py-2 font-semibold text-[#93c5fd] border-r border-[#1e293b]">
                        {st.journeyBonus}
                      </td>
                      <td className="px-3 py-2 font-bold text-white border-r border-[#1e293b]">
                        {st.combatBonus}
                      </td>
                      <td className="px-3 py-2">
                        <div className="flex flex-wrap gap-2">
                          {st.materials.map((m, mIdx) => (
                            <div
                              key={mIdx}
                              className="inline-flex items-center gap-1.5 rounded border border-[#243049] bg-[#141c2e] px-2 py-1 text-[11px]"
                            >
                              {m.iconUrl && (
                                <img src={m.iconUrl} alt={m.name} className="h-5 w-5 object-contain shrink-0" loading="lazy" />
                              )}
                              <span className="text-[#e2e8f0] font-semibold">{m.name}</span>
                              <span className="font-black text-[#fbbf24]">×{m.count}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {sd?.resonanceTotalMaterials && sd.resonanceTotalMaterials.length > 0 && (
          <>
            <AppMediaH3>Total Materials Required for Full Resonance (Stages 1–10)</AppMediaH3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-[12px]">
              {sd.resonanceTotalMaterials.map((mat, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-[#243049] bg-[#0f1626] px-3 py-2.5 flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    {mat.iconUrl && (
                      <img src={mat.iconUrl} alt={mat.name} className="h-8 w-8 rounded border border-[#334155] bg-[#090d16] p-0.5 object-contain shrink-0" loading="lazy" />
                    )}
                    <span className="font-bold text-[#cbd5e1] truncate">{mat.name}</span>
                  </div>
                  <span className="font-black text-[#fbbf24] shrink-0">×{mat.count}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* 11. H2: プレゼント・好感度ギフト (Favorite & Liked Affinity Gifts) */}
      {allGifts.length > 0 && (
        <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
          <AppMediaH2 id="favorite-gifts">{character.name}&apos;s Presents & Affinity Gifts</AppMediaH2>

          {favoriteGifts.length > 0 && (
            <div className="space-y-2">
              <AppMediaH3>Favorite Gifts (Highest Affinity Bonus)</AppMediaH3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {favoriteGifts.map((g, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col items-center rounded-lg border border-[#eab308]/50 bg-[#0f1626] p-3 text-center"
                  >
                    {g.tierIconUrl && (
                      <img
                        src={g.tierIconUrl}
                        alt="Favorite"
                        className="absolute top-1.5 right-1.5 h-5 w-5 object-contain"
                        loading="lazy"
                      />
                    )}
                    <img
                      src={g.iconUrl}
                      alt={g.name}
                      className="h-14 w-14 rounded-lg border border-[#334155] bg-[#090d16] p-1 object-contain"
                      loading="lazy"
                    />
                    <span className="mt-1.5 text-[11px] font-bold text-[#fde047] leading-tight">{g.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {likedGifts.length > 0 && (
            <div className="space-y-2">
              <AppMediaH3>Liked Gifts (Bonus Affinity)</AppMediaH3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {likedGifts.map((g, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col items-center rounded-lg border border-[#243049] bg-[#0f1626] p-3 text-center"
                  >
                    {g.tierIconUrl && (
                      <img
                        src={g.tierIconUrl}
                        alt="Liked"
                        className="absolute top-1.5 right-1.5 h-5 w-5 object-contain"
                        loading="lazy"
                      />
                    )}
                    <img
                      src={g.iconUrl}
                      alt={g.name}
                      className="h-14 w-14 rounded-lg border border-[#334155] bg-[#090d16] p-1 object-contain"
                      loading="lazy"
                    />
                    <span className="mt-1.5 text-[11px] font-bold text-[#e2e8f0] leading-tight">{g.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* 12. H2: アークポイントイラスト (Ark Point Official Illustration) */}
      {sd?.arkPointUrl && (
        <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
          <AppMediaH2 id="ark-point">{character.name}&apos;s Ark Point Illustration</AppMediaH2>
          <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#090d16] max-w-xl">
            <img
              src={sd.arkPointUrl}
              alt={`${character.name} Ark Point`}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </section>
      )}

      {/* 13. H2: 声優と入手方法・プロフィール */}
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
