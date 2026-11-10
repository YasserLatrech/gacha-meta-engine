import React from 'react';
import Link from 'next/link';
import type { CharacterEntity, ArcanaEntity } from '@/domain/schemas';
import { AppMediaH2, AppMediaH3, AppMediaTableLink, AppMediaIconCell } from '@/components/micro/AppMediaHeadings';

export function AppMediaDetailedCharEvalTable({
  characters,
}: {
  characters: CharacterEntity[];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold uppercase tracking-wider text-[#94a3b8]">
            <th className="w-[140px] px-3 py-2.5 text-center border-r border-[#243049]">Character</th>
            <th className="px-3.5 py-2.5">Quick Evaluation & Performance Breakdown</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#1e293b]">
          {characters.map((c) => {
            const bullets = c.staticData?.evalBullets && c.staticData.evalBullets.length > 0
              ? c.staticData.evalBullets
              : [
                  `${c.rarity} ${c.element} ${c.role} specializing in ${c.staticData?.attackType || 'Slash Damage'}.`,
                  c.summary,
                ];
            return (
              <tr key={c.slug} className="hover:bg-[#141d30] transition-colors">
                <td className="p-3 align-top border-r border-[#1e293b] text-center">
                  <div className="flex flex-col items-center">
                    <AppMediaIconCell
                      href={`/starsavior/characters/${c.slug}`}
                      name={c.name}
                      imageUrl={c.imageUrl}
                      rarity={c.rarity}
                      topLeftIconUrl={c.staticData?.attributeIconUrl}
                      topRightIconUrl={c.staticData?.classIconUrl}
                      size="md"
                    />
                  </div>
                </td>
                <td className="p-3.5 align-top space-y-2 text-[12px]">
                  <div className="flex flex-wrap items-center gap-2 border-b border-[#1e293b] pb-1.5">
                    <span className="inline-flex items-center gap-1 rounded bg-[#161f33] border border-[#263452] px-2 py-0.5 text-[11px] font-bold text-[#e2e8f0]">
                      <span className="text-[#93c5fd]">[Attribute]</span>
                      {c.staticData?.attributeIconUrl && (
                        <img src={c.staticData.attributeIconUrl} alt="" className="h-3.5 w-3.5 object-contain" loading="eager" />
                      )}
                      <span>{c.element} Attribute</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-[#161f33] border border-[#263452] px-2 py-0.5 text-[11px] font-bold text-[#e2e8f0]">
                      <span className="text-[#93c5fd]">[Class]</span>
                      {c.staticData?.classIconUrl && (
                        <img src={c.staticData.classIconUrl} alt="" className="h-3.5 w-3.5 object-contain" loading="eager" />
                      )}
                      <span>{c.role}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-[#161f33] border border-[#263452] px-2 py-0.5 text-[11px] font-bold text-[#cbd5e1]">
                      <span className="text-[#93c5fd]">[Damage]</span>
                      <span>{c.staticData?.attackType || 'Slash Damage'}</span>
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[11px] font-extrabold text-[#93c5fd]">[Analysis]</div>
                    <ul className="space-y-1 text-[12px] text-[#e2e8f0] leading-relaxed">
                      {bullets.map((b, idx) => {
                        const isSub = b.startsWith('↳');
                        return (
                          <li
                            key={idx}
                            className={isSub ? 'pl-4 text-[11px] text-[#94a3b8]' : 'flex items-start gap-1.5'}
                          >
                            {!isSub && <span className="text-[#3b82f6] font-bold">•</span>}
                            <span>{b}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function AppMediaDetailedArcanaEvalTable({
  arcanaList,
}: {
  arcanaList: ArcanaEntity[];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-[#243049] bg-[#161f33] text-[11px] font-extrabold uppercase tracking-wider text-[#94a3b8]">
            <th className="w-[150px] px-3 py-2.5 text-center border-r border-[#243049]">Arcana Card</th>
            <th className="px-3.5 py-2.5">Quick Evaluation & Potential Breakdown</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#1e293b]">
          {arcanaList.map((a) => {
            const bullets = a.staticData?.evalBullets && a.staticData.evalBullets.length > 0
              ? a.staticData.evalBullets
              : [
                  `Grants ${a.staticData?.statTag || 'Power'} training bonuses and ${a.staticData?.classBonus || 'Universal Bonus'}.`,
                  ...(a.staticData?.potentials || []).map((p) => `[${p.name}] ${p.effect}`),
                ];
            return (
              <tr key={a.slug} className="hover:bg-[#141d30] transition-colors">
                <td className="p-3 align-top border-r border-[#1e293b] text-center">
                  <div className="flex flex-col items-center">
                    <AppMediaIconCell
                      href={`/starsavior/arcana#${a.slug}`}
                      name={a.name}
                      imageUrl={a.imageUrl}
                      rarity={a.rarity}
                      topLeftIconUrl={a.staticData?.statTagIconUrl}
                      badgeText={a.rarity}
                      size="lg"
                    />
                  </div>
                </td>
                <td className="p-3.5 align-top space-y-2 text-[12px]">
                  <div className="flex flex-wrap items-center gap-2 border-b border-[#1e293b] pb-1.5">
                    <span className="inline-flex items-center gap-1 rounded bg-[#161f33] border border-[#263452] px-2 py-0.5 text-[11px] font-bold text-[#e2e8f0]">
                      <span className="text-[#93c5fd]">[Tag]</span>
                      {a.staticData?.statTagIconUrl && (
                        <img src={a.staticData.statTagIconUrl} alt="" className="h-3.5 w-3.5 object-contain" loading="eager" />
                      )}
                      <span>{a.staticData?.statTag || 'Power'}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-[#161f33] border border-[#263452] px-2 py-0.5 text-[11px] font-bold text-[#e2e8f0]">
                      <span className="text-[#93c5fd]">[Stat Bonus]</span>
                      <span>{a.staticData?.statBonusType || 'Special Effect Bonus'}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-[#161f33] border border-[#263452] px-2 py-0.5 text-[11px] font-bold text-[#cbd5e1]">
                      <span className="text-[#93c5fd]">[Class]</span>
                      <span>{a.staticData?.classBonus || 'Universal Bonus'}</span>
                    </span>
                    {a.staticData?.characterName && a.staticData.characterName !== '-' && (
                      <span className="inline-flex items-center gap-1 rounded bg-[#161f33] border border-[#263452] px-2 py-0.5 text-[11px] font-bold text-[#fbbf24]">
                        {a.staticData.characterIconUrl && (
                          <img src={a.staticData.characterIconUrl} alt="" className="h-4 w-4 rounded-full object-cover" loading="eager" />
                        )}
                        <span>Title: {a.staticData.characterName}</span>
                      </span>
                    )}
                  </div>
                  <div className="space-y-1">
                    <div className="text-[11px] font-extrabold text-[#93c5fd]">[Analysis & Potentials]</div>
                    <ul className="space-y-1 text-[12px] text-[#e2e8f0] leading-relaxed">
                      {bullets.map((b, idx) => {
                        const isSub = b.startsWith('↳');
                        return (
                          <li
                            key={idx}
                            className={isSub ? 'pl-4 text-[11px] text-[#94a3b8]' : 'flex items-start gap-1.5'}
                          >
                            {!isSub && <span className="text-[#3b82f6] font-bold">•</span>}
                            <span>{b}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function AppMediaStrategyFooter({
  characters,
  showCharacterRoster = false,
}: {
  characters?: CharacterEntity[];
  showCharacterRoster?: boolean;
}) {
  const ssrChars = (characters || []).filter((c) => c.rarity === 'SSR');
  const srChars = (characters || []).filter((c) => c.rarity === 'SR');

  return (
    <div className="space-y-6 pt-4">
      {showCharacterRoster && characters && characters.length > 0 && (
        <section className="space-y-3 rounded-lg border border-[#243049] bg-[#111726] p-4">
          <AppMediaH2 id="related-character-links">Related Character Links (All 57 Saviors)</AppMediaH2>
          <AppMediaH3>SSR Characters ({ssrChars.length})</AppMediaH3>
          <div className="flex flex-wrap gap-2 pt-1">
            {ssrChars.map((c) => (
              <AppMediaIconCell
                key={c.slug}
                href={`/starsavior/characters/${c.slug}`}
                name={c.name}
                imageUrl={c.imageUrl}
                rarity="SSR"
                topLeftIconUrl={c.staticData?.attributeIconUrl}
                topRightIconUrl={c.staticData?.classIconUrl}
                size="sm"
              />
            ))}
          </div>
          <AppMediaH3>SR Characters ({srChars.length})</AppMediaH3>
          <div className="flex flex-wrap gap-2 pt-1">
            {srChars.map((c) => (
              <AppMediaIconCell
                key={c.slug}
                href={`/starsavior/characters/${c.slug}`}
                name={c.name}
                imageUrl={c.imageUrl}
                rarity="SR"
                topLeftIconUrl={c.staticData?.attributeIconUrl}
                topRightIconUrl={c.staticData?.classIconUrl}
                size="sm"
              />
            ))}
          </div>
        </section>
      )}

      {/* Star Savior Strategy Links (Exact 1:1 translation of スターセイヴァー攻略リンク) */}
      <section className="space-y-3 rounded-lg border border-[#243049] bg-[#111726] p-4">
        <AppMediaH2 id="starsavior-strategy-links">Star Savior Strategy Links</AppMediaH2>

        <AppMediaH3>Rankings & Tier Lists</AppMediaH3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <AppMediaTableLink href="/starsavior/tier-list" label="Strongest Character Tier List" badge="HOT" />
          <AppMediaTableLink href="/starsavior/arcana" label="Strongest Arcana Tier List" badge="83" />
          <AppMediaTableLink href="/starsavior/tier-list#pvp-gauntlet" label="PvP Gauntlet Strongest Tier List" badge="PVP" />
        </div>

        <AppMediaH3>Beginner Must-Reads!</AppMediaH3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <AppMediaTableLink href="/starsavior/reroll" label="Reroll Tier List & Stopping Line" />
          <AppMediaTableLink href="/starsavior/reroll#how-to-reroll" label="How to Reroll Step-by-Step (~10 Min)" />
          <AppMediaTableLink href="/starsavior#beginner-guides" label="Beginner Early-Game Progression Guide" />
          <AppMediaTableLink href="/starsavior#beginner-guides" label="Daily Checklist & Reset Routine" />
          <AppMediaTableLink href="/starsavior#rescue-journey" label="Rescue Journey Normal & Hard Strategy" />
          <AppMediaTableLink href="/starsavior#beginner-guides" label="Character Training & Upgrade Priority" />
          <AppMediaTableLink href="/starsavior/tier-list" label="Best Party Formations & Synergies" />
          <AppMediaTableLink href="/starsavior/arcana" label="Best Arcana Deck Building Guide" />
        </div>

        <AppMediaH3>Useful Mechanics & System Guides</AppMediaH3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <AppMediaTableLink href="/starsavior#mechanics-verification" label="Combat Tips & Turn-Based Battle System" />
          <AppMediaTableLink href="/starsavior#mechanics-verification" label="Attribute Advantage & Cosmic Type Chart" />
          <AppMediaTableLink href="/starsavior#gacha-section" label="Gacha Rates, Pity System & 200 Mileage" />
          <AppMediaTableLink href="/starsavior#gacha-section" label="Gacha Animations & Guaranteed SSR Tells" />
          <AppMediaTableLink href="/starsavior#beginner-guides" label="Willpower Stamina Recovery & Usage" />
          <AppMediaTableLink href="/starsavior#beginner-guides" label="Headquarters & NOA Support Funds Guide" />
          <AppMediaTableLink href="/starsavior#latest-updates" label="Active Coupon Codes & How to Redeem" />
          <AppMediaTableLink href="/starsavior#cube-palace" label="Cube Palace Bosses & Cheat Codes List" />
        </div>

        <AppMediaH3>Complete Static Database</AppMediaH3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <AppMediaTableLink href="/starsavior/characters" label="All 57 Characters List (SSR & SR)" badge="57" />
          <AppMediaTableLink href="/starsavior/characters" label="Lv.200 Character Stats & Server Rank Table" />
          <AppMediaTableLink href="/starsavior/arcana" label="All 83 Arcana Cards Encyclopedia (SSR/SR/R)" badge="83" />
          <AppMediaTableLink href="/starsavior/characters" label="Voice Actors (CV), Birthdays & Affiliations" />
        </div>
      </section>

      {/* Author Box (Exact 1:1 translation of この記事の執筆者) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="article-author">Author of This Strategy Guide</AppMediaH2>
        <div className="flex items-center gap-3.5 rounded-lg border border-[#1e293b] bg-[#0f1626] p-3.5">
          <img
            src="https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_starsavior.webp"
            alt="Star Savior Strategy Editorial Team"
            className="h-14 w-14 rounded-lg border border-[#3b82f6]/50 object-cover shrink-0"
            loading="eager"
          />
          <div className="space-y-1">
            <div className="text-[13px] font-extrabold text-white">Star Savior Strategy Editorial Team</div>
            <p className="text-[12px] text-[#94a3b8] leading-relaxed">
              Dedicated Star Savior verification & meta research team covering all 57 playable Saviors, 83 Arcana cards, Rescue Journey Hard Mode potentials, Cosmo Gate boss clear lineups, and Gauntlet PvP rankings.
            </p>
          </div>
        </div>
      </section>

      {/* Comments Section (Exact 1:1 translation of コメント一覧) */}
      <section id="reader-comments" className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2>Reader Comments & Strategy Discussion</AppMediaH2>
        <div className="space-y-2.5">
          <div className="rounded-lg border border-[#1e293b] bg-[#0f1626] p-3 space-y-1">
            <div className="flex items-center justify-between text-[11px] text-[#64748b]">
              <span className="font-bold text-[#93c5fd]">Anonymous Captain #1042</span>
              <span>2 hours ago · 👍 18</span>
            </div>
            <p className="text-[12px] text-[#e2e8f0]">
              Pairing Professor M with Amora or Bunny Charles makes Cosmo Gate bosses melt because Professor M keeps triggering Pincer Dual-Attacks on the highest ATK ally every turn.
            </p>
          </div>
          <div className="rounded-lg border border-[#1e293b] bg-[#0f1626] p-3 space-y-1">
            <div className="flex items-center justify-between text-[11px] text-[#64748b]">
              <span className="font-bold text-[#93c5fd]">Anonymous Captain #1039</span>
              <span>5 hours ago · 👍 12</span>
            </div>
            <p className="text-[12px] text-[#e2e8f0]">
              For Rescue Journey Hard runs, bringing &quot;Weakness Correction Custom Training&quot; (Tilia) + &quot;Death to Flowers&quot; (Carnelia) easily caps Crit Rate while giving +5 Power training bonus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
