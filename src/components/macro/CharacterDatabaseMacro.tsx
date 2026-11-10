'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import type { GameWikiDataset } from '@/domain/schemas';
import {
  AppMediaH2,
  AppMediaH3,
  AppMediaTierBadge,
  AppMediaIconCell,
} from '@/components/micro/AppMediaHeadings';
import { AppMediaStrategyFooter } from '@/components/medium/AppMediaStrategyBlocks';

export function CharacterDatabaseMacro({ dataset }: { dataset: GameWikiDataset }) {
  const { game, characters } = dataset;
  const [selectedElement, setSelectedElement] = useState<string>('ALL');
  const [selectedRole, setSelectedRole] = useState<string>('ALL');
  const [selectedRarity, setSelectedRarity] = useState<string>('ALL');
  const [selectedPool, setSelectedPool] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = useMemo(() => {
    return characters.filter((c) => {
      if (selectedElement !== 'ALL' && c.element !== selectedElement) return false;
      if (selectedRole !== 'ALL' && c.role !== selectedRole) return false;
      if (selectedRarity !== 'ALL' && c.rarity !== selectedRarity) return false;
      if (selectedPool !== 'ALL' && (c.staticData?.pool || 'Standard') !== selectedPool) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = c.name.toLowerCase().includes(q);
        const matchCv = (c.staticData?.profile?.cv || '').toLowerCase().includes(q);
        if (!matchName && !matchCv && !c.element.toLowerCase().includes(q) && !c.role.toLowerCase().includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [characters, selectedElement, selectedRole, selectedRarity, selectedPool, searchQuery]);

  const ssrFiltered = filtered.filter((c) => c.rarity === 'SSR');
  const srFiltered = filtered.filter((c) => c.rarity === 'SR');

  return (
    <div className="space-y-6">
      {/* H1 Header Box */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-3">
        <div className="flex items-center gap-3.5">
          <img
            src="https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_STRANIS_icon.webp"
            alt="All 57 Characters List"
            className="h-14 w-14 rounded-lg border border-[#3b82f6]/50 object-cover shrink-0"
            loading="eager"
          />
          <div>
            <div className="text-[11px] font-bold text-[#93c5fd]">
              Updated: 2026/11/10 · {game.patchVersion} · All 57 Saviors
            </div>
            <h1 className="mt-0.5 text-lg sm:text-xl font-black text-white">
              [Star Savior] Complete Character List & Lv.200 Stats Database (57 Saviors)
            </h1>
          </div>
        </div>
        <p className="text-[12px] text-[#cbd5e1] leading-relaxed">
          Complete database of all 57 playable SSR and SR characters in Star Savior. Filter by Attribute, Class, Rarity, or Gacha Pool to inspect Lv.200 combat stats, Rescue Journey training aptitudes, Voice Actors (CV), and build guides.
        </p>
      </section>

      {/* H2: キャラ一覧 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaH2 id="character-list-filter" badge="57 UNITS">
          Star Savior Character List & Filter
        </AppMediaH2>

        {/* Filter Bar */}
        <div className="rounded-lg border border-[#243049] bg-[#0f1626] p-3 space-y-2.5">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedElement('ALL')}
              className={`rounded px-2.5 py-1 text-[11px] font-bold ${
                selectedElement === 'ALL' ? 'bg-[#2563eb] text-white' : 'bg-[#161f33] text-[#cbd5e1]'
              }`}
            >
              All Attributes ({characters.length})
            </button>
            {game.elementsConfig.map((el) => (
              <button
                key={el.key}
                type="button"
                onClick={() => setSelectedElement(el.key === selectedElement ? 'ALL' : el.key)}
                className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[11px] font-bold border ${
                  selectedElement === el.key
                    ? 'border-[#3b82f6] bg-[#2563eb] text-white'
                    : 'border-[#243049] bg-[#161f33] text-[#cbd5e1]'
                }`}
              >
                <img src={el.iconUrl} alt={el.label} className="h-3.5 w-3.5 object-contain" loading="eager" />
                <span>{el.label}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedRole('ALL')}
                className={`rounded px-2.5 py-1 text-[11px] font-bold ${
                  selectedRole === 'ALL' ? 'bg-[#2563eb] text-white' : 'bg-[#161f33] text-[#cbd5e1]'
                }`}
              >
                All Classes
              </button>
              {game.rolesConfig.map((rl) => (
                <button
                  key={rl.key}
                  type="button"
                  onClick={() => setSelectedRole(rl.key === selectedRole ? 'ALL' : rl.key)}
                  className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[11px] font-bold border ${
                    selectedRole === rl.key
                      ? 'border-[#3b82f6] bg-[#2563eb] text-white'
                      : 'border-[#243049] bg-[#161f33] text-[#cbd5e1]'
                  }`}
                >
                  <img src={rl.iconUrl} alt={rl.label} className="h-3.5 w-3.5 object-contain" loading="eager" />
                  <span>{rl.label}</span>
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {(['ALL', 'SSR', 'SR'] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setSelectedRarity(r)}
                  className={`rounded px-2.5 py-1 text-[11px] font-bold ${
                    selectedRarity === r ? 'bg-[#2563eb] text-white' : 'bg-[#161f33] text-[#cbd5e1]'
                  }`}
                >
                  {r === 'ALL' ? 'All Rarities' : r}
                </button>
              ))}
              {(['ALL', 'Standard', 'Limited'] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setSelectedPool(p)}
                  className={`rounded px-2.5 py-1 text-[11px] font-bold ${
                    selectedPool === p ? 'bg-[#2563eb] text-white' : 'bg-[#161f33] text-[#cbd5e1]'
                  }`}
                >
                  {p === 'ALL' ? 'All Pools' : p}
                </button>
              ))}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name or CV..."
                className="flex-1 sm:flex-none rounded border border-[#243049] bg-[#090d16] px-2.5 py-1 text-[11px] text-white placeholder-[#64748b] focus:border-[#3b82f6] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* AppMedia SSR / SR Visual Icon Grid */}
        {ssrFiltered.length > 0 && (
          <div className="space-y-2">
            <AppMediaH3>SSR Characters ({ssrFiltered.length})</AppMediaH3>
            <div className="flex flex-wrap gap-2.5 pt-1">
              {ssrFiltered.map((c) => (
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
          </div>
        )}

        {srFiltered.length > 0 && (
          <div className="space-y-2">
            <AppMediaH3>SR Characters ({srFiltered.length})</AppMediaH3>
            <div className="flex flex-wrap gap-2.5 pt-1">
              {srFiltered.map((c) => (
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
          </div>
        )}

        {/* Complete Lv.200 Stats & Journey Aptitudes Table */}
        <div id="stats-comparison-table" className="pt-2">
          <AppMediaH3>Complete Character Stats & Journey Aptitudes ({filtered.length})</AppMediaH3>
        </div>

        {/* Mobile Savior Stat Cards (< md) */}
        <div className="md:hidden space-y-2.5">
          {filtered.map((c) => {
            const js = c.staticData?.journeyStats;
            return (
              <Link
                key={`mob-stat-${c.slug}`}
                href={`/starsavior/characters/${c.slug}`}
                className="block rounded-lg border border-[#243049] bg-[#0f1626] p-3 space-y-2 hover:border-[#3b82f6]/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={c.imageUrl}
                    alt={c.name}
                    className="h-14 w-14 rounded-lg border-2 border-[#eab308]/70 object-cover shrink-0 bg-[#090d16]"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <AppMediaTierBadge tier={c.staticData?.appMediaTier || c.overallTier} />
                      <span className="rounded border border-[#eab308]/60 bg-[#eab308]/15 px-1.5 py-0.5 text-[10px] font-black text-[#fde047]">
                        {c.rarity}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white">
                        {c.staticData?.attributeIconUrl && (
                          <img src={c.staticData.attributeIconUrl} alt="" className="h-3.5 w-3.5 object-contain" loading="lazy" />
                        )}
                        <span>{c.element}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#cbd5e1]">
                        {c.staticData?.classIconUrl && (
                          <img src={c.staticData.classIconUrl} alt="" className="h-3.5 w-3.5 object-contain" loading="lazy" />
                        )}
                        <span>{c.role}</span>
                      </span>
                    </div>
                    <div className="text-[13px] font-extrabold text-[#60a5fa] leading-snug">{c.name}</div>
                    <div className="text-[10px] font-semibold text-[#94a3b8]">
                      {c.staticData?.pool || 'Standard'} · Reroll: {c.staticData?.appMediaRerollTier || c.rerollTier}
                    </div>
                  </div>
                </div>

                <div className="rounded bg-[#141c2e] border border-[#1e293b] px-2.5 py-1.5 font-mono text-[11px] font-extrabold text-white">
                  HP {c.baseStats.hp.toLocaleString()} · ATK {c.baseStats.atk.toLocaleString()} · DEF {c.baseStats.def.toLocaleString()} · SPD {c.baseStats.spd}
                </div>
                {js && (
                  <div className="text-[10px] font-semibold text-[#94a3b8]">
                    Journey: POW {js.power} / HLT {js.vitality} / END {js.endurance} / FOC {js.focus} / PRO {js.protection}
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[12px]">
            <thead>
              <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold text-[#94a3b8]">
                <th className="px-3.5 py-2.5 border-r border-[#243049]">Character ({filtered.length})</th>
                <th className="w-28 px-3 py-2.5 text-center border-r border-[#243049]">Rarity / Pool</th>
                <th className="w-40 px-3 py-2.5 border-r border-[#243049]">Attribute & Class</th>
                <th className="w-24 px-2 py-2.5 text-center border-r border-[#243049]">Overall</th>
                <th className="w-24 px-2 py-2.5 text-center border-r border-[#243049]">Reroll</th>
                <th className="px-3.5 py-2.5">Lv.200 Base Combat Stats & Journey Aptitudes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]">
              {filtered.map((c) => {
                const js = c.staticData?.journeyStats;
                return (
                  <tr key={c.slug} className="hover:bg-[#141d30] transition-colors">
                    <td className="p-3 border-r border-[#1e293b]">
                      <Link href={`/starsavior/characters/${c.slug}`} className="flex items-center gap-3 group">
                        <img
                          src={c.imageUrl}
                          alt={c.name}
                          className="h-14 w-14 rounded-lg border-2 border-[#eab308]/70 object-cover shrink-0 bg-[#090d16]"
                          loading="eager"
                        />
                        <div>
                          <div className="text-[13px] font-extrabold text-[#60a5fa] group-hover:text-white">
                            {c.name}
                          </div>
                          <div className="text-[11px] font-semibold text-[#cbd5e1]">
                            {c.staticData?.attackType || 'Slash Damage'}
                          </div>
                          {c.staticData?.profile?.cv && (
                            <div className="text-[10px] text-[#94a3b8]">
                              CV: {c.staticData.profile.cv}
                            </div>
                          )}
                        </div>
                      </Link>
                    </td>
                    <td className="p-3 text-center border-r border-[#1e293b] space-y-1">
                      <span className="inline-block rounded border border-[#eab308]/60 bg-[#eab308]/15 px-2 py-0.5 text-[11px] font-black text-[#fde047]">
                        {c.rarity}
                      </span>
                      <div className="text-[10px] font-bold text-[#94a3b8]">
                        {c.staticData?.pool || 'Standard'}
                      </div>
                    </td>
                    <td className="p-3 border-r border-[#1e293b] space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-white">
                        {c.staticData?.attributeIconUrl && (
                          <img src={c.staticData.attributeIconUrl} alt="" className="h-4 w-4 object-contain" loading="eager" />
                        )}
                        <span>{c.element}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#cbd5e1]">
                        {c.staticData?.classIconUrl && (
                          <img src={c.staticData.classIconUrl} alt="" className="h-4 w-4 object-contain" loading="eager" />
                        )}
                        <span>{c.role}</span>
                      </div>
                    </td>
                    <td className="p-3 text-center border-r border-[#1e293b]">
                      <AppMediaTierBadge tier={c.staticData?.appMediaTier || c.overallTier} />
                    </td>
                    <td className="p-3 text-center border-r border-[#1e293b]">
                      <AppMediaTierBadge tier={c.staticData?.appMediaRerollTier || c.rerollTier} />
                    </td>
                    <td className="p-3 space-y-1">
                      <div className="font-mono text-[12px] font-extrabold text-white">
                        HP {c.baseStats.hp.toLocaleString()} · ATK {c.baseStats.atk.toLocaleString()} · DEF {c.baseStats.def.toLocaleString()} · SPD {c.baseStats.spd}
                      </div>
                      {js && (
                        <div className="text-[11px] font-semibold text-[#94a3b8]">
                          Journey: POW {js.power} / HLT {js.vitality} / END {js.endurance} / FOC {js.focus} / PRO {js.protection}
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* H2: Voice Actors (CV), Affiliations, Birthdays & Heights Database */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaH2 id="profile-cv-database" badge="PROFILES & CV">
          Voice Actors (CV), Affiliations, Birthdays & Heights List ({filtered.length} Saviors)
        </AppMediaH2>
        <p className="text-[12px] text-[#cbd5e1] leading-relaxed">
          Complete character profile registry for all playable Saviors, including Japanese Voice Actors (CV), Starlight Squad / faction affiliations, birthdays, heights, character titles, and acquisition methods.
        </p>

        {/* Mobile CV & Profile Cards (< md) */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {filtered.map((c) => {
            const prof = c.staticData?.profile;
            return (
              <Link
                key={`mob-prof-${c.slug}`}
                href={`/starsavior/characters/${c.slug}#profile-cv-lore`}
                className="rounded-lg border border-[#243049] bg-[#0f1626] p-3 space-y-1.5 hover:border-[#3b82f6]/60 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <img
                    src={c.imageUrl}
                    alt={c.name}
                    className="h-10 w-10 rounded-lg border border-[#334155] object-cover shrink-0 bg-[#090d16]"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="font-extrabold text-[#60a5fa] text-[12px] truncate">{c.name}</div>
                    <div className="text-[11px] font-bold text-white truncate">CV: {prof?.cv || 'TBA'}</div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-[#cbd5e1] border-t border-[#1e293b] pt-1.5">
                  <span>Faction: <strong className="text-white">{prof?.affiliation || 'Voyager Guild'}</strong></span>
                  {prof?.birthday && <span>Birthday: <strong className="text-[#93c5fd]">{prof.birthday}</strong></span>}
                  {prof?.height && <span>Height: <strong className="text-white">{prof.height}</strong></span>}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[12px]">
            <thead>
              <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold text-[#94a3b8]">
                <th className="px-3.5 py-2.5 border-r border-[#243049]">Character</th>
                <th className="px-3.5 py-2.5 border-r border-[#243049]">Voice Actor (CV)</th>
                <th className="px-3.5 py-2.5 border-r border-[#243049]">Affiliation / Faction</th>
                <th className="w-28 px-3 py-2.5 text-center border-r border-[#243049]">Birthday</th>
                <th className="w-24 px-3 py-2.5 text-center border-r border-[#243049]">Height</th>
                <th className="px-3.5 py-2.5">Title & How to Obtain</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]">
              {filtered.map((c) => {
                const prof = c.staticData?.profile;
                return (
                  <tr key={`prof-${c.slug}`} className="hover:bg-[#141d30] transition-colors">
                    <td className="p-3 border-r border-[#1e293b]">
                      <Link href={`/starsavior/characters/${c.slug}#profile`} className="flex items-center gap-2.5 group">
                        <img
                          src={c.imageUrl}
                          alt={c.name}
                          className="h-10 w-10 rounded-lg border border-[#334155] object-cover shrink-0 bg-[#090d16]"
                          loading="lazy"
                        />
                        <div>
                          <div className="font-extrabold text-[#60a5fa] group-hover:text-white text-[12px]">
                            {c.name}
                          </div>
                          <div className="text-[10px] text-[#94a3b8] font-bold">{c.rarity} · {c.element}</div>
                        </div>
                      </Link>
                    </td>
                    <td className="p-3 border-r border-[#1e293b] font-bold text-white">
                      {prof?.cv || 'TBA'}
                    </td>
                    <td className="p-3 border-r border-[#1e293b] text-[#cbd5e1] font-semibold">
                      {prof?.affiliation || 'Voyager Guild'}
                    </td>
                    <td className="p-3 text-center border-r border-[#1e293b] text-[#93c5fd] font-bold">
                      {prof?.birthday || '—'}
                    </td>
                    <td className="p-3 text-center border-r border-[#1e293b] text-[#cbd5e1] font-mono">
                      {prof?.height || '—'}
                    </td>
                    <td className="p-3 space-y-0.5">
                      {prof?.origin && (
                        <div className="text-[11px] font-extrabold text-[#fbbf24]">{prof.origin}</div>
                      )}
                      <div className="text-[11px] text-[#94a3b8]">
                        {prof?.obtain || c.staticData?.pool || 'Standard Gacha'}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <AppMediaStrategyFooter />
    </div>
  );
}
