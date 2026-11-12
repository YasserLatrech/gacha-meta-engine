import React from 'react';
import Link from 'next/link';
import type {
  GameWikiDataset,
  CharacterEntity,
  ArcanaEntity,
  StarSaviorGuideArticle,
  StarSaviorRankingGroups,
} from '../../domain/schemas';
import {
  AppMediaH2,
  AppMediaH3,
  AppMediaEyecatchBanner,
  AppMediaRankIcon,
  AppMediaIconCell,
  AppMediaGraphicButtonGrid,
} from '../micro/AppMediaHeadings';
import {
  CharacterTierMakerTool,
  ArcanaTierMakerTool,
  JourneyEventChoiceCheckerTool,
  CharacterStatsTableInteractive,
  CommunityBoardWidget,
} from '../micro/StarSaviorInteractiveTools';
import { LiveJstCountdown } from '../micro/LiveJstCountdown';

interface GuideDeadlineEntry {
  readonly label: string;
  readonly targetIso?: string;
  readonly concludedText?: string;
}

const GUIDE_LIVE_DEADLINES: Record<string, GuideDeadlineEntry> = {
  'maid-ceres-gacha': {
    label: 'Maid Ceres & Grueling Ordeal Banner (Concluded 2026/11/13 04:00 JST)',
    concludedText: 'Ended · Nov 13 JST',
  },
  'frey-noble-princess-gacha': {
    label: 'Frey: Noble Princess & Indomitable Masterpiece Banner (~2026/11/19 04:00 JST)',
    targetIso: '2026-11-19T04:00:00+09:00',
  },
  'valentine-event': {
    label: 'Valentine Revival Event Period (Concluded 2026/11/13 03:59:59 JST)',
    concludedText: 'Ended · Nov 13 JST',
  },
  'which-gacha-to-pull': {
    label: 'Current Pickup Banner Rotation (~2026/11/19 04:00 JST)',
    targetIso: '2026-11-19T04:00:00+09:00',
  },
};

export function StarSaviorGuideMacro({
  guide,
  dataset,
  rankingGroups,
}: {
  guide: StarSaviorGuideArticle;
  dataset: GameWikiDataset;
  rankingGroups: StarSaviorRankingGroups;
}) {
  const charBySlug = new Map<string, CharacterEntity>(
    dataset.characters.map((c) => [c.slug, c])
  );
  const arcanaBySlug = new Map<string, ArcanaEntity>(
    dataset.arcana.map((a) => [a.slug, a])
  );

  return (
    <article className="space-y-6">
      {/* Article Header Box */}
      <header className="rounded-md border border-[#263450] bg-[#111827] p-4 space-y-3 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[12.5px] text-[#c8d4e6]">
          <span className="inline-flex items-center gap-1.5 rounded bg-[#1e293b] border border-[#334155] px-2 py-0.5 font-bold text-[#93c5fd]">
            Star Savior {guide.category}
          </span>
          <span>Last Updated: {guide.updatedAt}</span>
        </div>

        <h1 className="text-[19px] sm:text-[22px] font-black tracking-tight text-[#f8fafc] leading-snug">
          {guide.title}
        </h1>

        {(() => {
          const deadline = GUIDE_LIVE_DEADLINES[guide.slug];
          if (!deadline) return null;
          return (
            <div className="flex flex-wrap items-center justify-between gap-2 rounded border border-[#28354e] bg-[#0d1424] px-3 py-2 text-[13px]">
              <span className="font-bold text-[#e8eff8]">{deadline.label}</span>
              {deadline.targetIso ? (
                <LiveJstCountdown targetIso={deadline.targetIso} prefix="Ends in" />
              ) : (
                <span className="rounded bg-slate-800/80 border border-slate-600/50 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-slate-300">
                  {deadline.concludedText ?? 'Ended'}
                </span>
              )}
            </div>
          );
        })()}

        {guide.eyecatchSrc && (
          <AppMediaEyecatchBanner src={guide.eyecatchSrc} alt={guide.title} />
        )}

        {!guide.eyecatchSrc && guide.buttonBannerSrc && (
          <div className="max-w-[400px] overflow-hidden rounded-md border border-[#28354e] bg-[#0b101b]">
            <img
              src={guide.buttonBannerSrc}
              alt={guide.title}
              width={400}
              height={126}
              className="w-full h-auto block"
            />
          </div>
        )}

        <p className="text-[14.5px] leading-relaxed text-[#e8eff8] border-l-2 border-[#3b82f6] pl-3">
          {guide.lead}
        </p>
      </header>

      {/* Special Interactive or Ranking Modules */}
      {guide.specialKind === 'pvp-ranking' && (
        <section className="space-y-3">
          <AppMediaH2 id="gauntlet-tier-table" badge="59 Saviors">
            Gauntlet (PvP) Strongest Characters Tier Table
          </AppMediaH2>
          <div className="overflow-hidden rounded border border-[#263450] bg-[#0f1626]">
            <table className="w-full border-collapse">
              <tbody>
                {rankingGroups.pvpGroups.map((group) => {
                  const units = group.slugs
                    .map((s) => charBySlug.get(s))
                    .filter((u): u is CharacterEntity => Boolean(u));
                  return (
                    <tr key={group.tier} className="border-b border-[#243049] last:border-b-0">
                      <td className="w-[86px] border-r border-[#243049] bg-[#151f34] p-2.5 text-center align-middle">
                        <AppMediaRankIcon tier={group.tier} size="md" subLabel={group.subLabel} />
                      </td>
                      <td className="p-3 align-top">
                        <div className="flex flex-wrap gap-2.5">
                          {units.map((u) => (
                            <AppMediaIconCell
                              key={u.slug}
                              href={`/starsavior/characters/${u.slug}`}
                              name={u.name}
                              imageUrl={u.imageUrl}
                              rarity={u.rarity}
                              topLeftIconUrl={u.staticData?.attributeIconUrl}
                              topRightIconUrl={u.staticData?.classIconUrl}
                              size="sm"
                            />
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {guide.specialKind === 'sr-char-ranking' && (
        <section className="space-y-3">
          <AppMediaH2 id="sr-char-table" badge="Base SR">
            Recommended SR Characters Ranking
          </AppMediaH2>
          <div className="overflow-hidden rounded border border-[#263450] bg-[#0f1626]">
            <table className="w-full border-collapse">
              <tbody>
                {rankingGroups.srCharGroups.map((group) => {
                  const units = group.slugs
                    .map((s) => charBySlug.get(s))
                    .filter((u): u is CharacterEntity => Boolean(u));
                  return (
                    <tr key={group.tier} className="border-b border-[#243049] last:border-b-0">
                      <td className="w-[86px] border-r border-[#243049] bg-[#151f34] p-2.5 text-center align-middle">
                        <AppMediaRankIcon tier={group.tier} size="md" subLabel={group.subLabel} />
                      </td>
                      <td className="p-3 align-top">
                        <div className="flex flex-wrap gap-3">
                          {units.map((u) => (
                            <AppMediaIconCell
                              key={u.slug}
                              href={`/starsavior/characters/${u.slug}`}
                              name={u.name}
                              imageUrl={u.imageUrl}
                              rarity={u.rarity}
                              topLeftIconUrl={u.staticData?.attributeIconUrl}
                              topRightIconUrl={u.staticData?.classIconUrl}
                              size="md"
                            />
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {guide.specialKind === 'sr-arcana-ranking' && (
        <section className="space-y-3">
          <AppMediaH2 id="sr-arcana-table" badge="15 SR Arcanas">
            Recommended SR Arcana Ranking
          </AppMediaH2>
          <div className="overflow-hidden rounded border border-[#263450] bg-[#0f1626]">
            <table className="w-full border-collapse">
              <tbody>
                {rankingGroups.srArcanaGroups.map((group) => {
                  const cards = group.slugs
                    .map((s) => arcanaBySlug.get(s))
                    .filter((a): a is ArcanaEntity => Boolean(a));
                  return (
                    <tr key={group.tier} className="border-b border-[#243049] last:border-b-0">
                      <td className="w-[86px] border-r border-[#243049] bg-[#151f34] p-2.5 text-center align-middle">
                        <AppMediaRankIcon tier={group.tier} size="md" subLabel={group.subLabel} />
                      </td>
                      <td className="p-3 align-top">
                        <div className="flex flex-wrap gap-3">
                          {cards.map((a) => (
                            <AppMediaIconCell
                              key={a.slug}
                              href={`/starsavior/arcana#${a.slug}`}
                              name={a.name}
                              imageUrl={a.imageUrl}
                              rarity={a.rarity}
                              topLeftIconUrl={a.staticData?.statTagIconUrl}
                              badgeText={a.staticData?.statTag}
                              size="md"
                            />
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {guide.specialKind === 'char-tier-maker' && (
        <CharacterTierMakerTool characters={dataset.characters} />
      )}

      {guide.specialKind === 'arcana-tier-maker' && (
        <ArcanaTierMakerTool arcana={dataset.arcana} />
      )}

      {guide.specialKind === 'event-checker' && (
        <JourneyEventChoiceCheckerTool arcana={dataset.arcana} />
      )}

      {guide.specialKind === 'char-stats-table' && (
        <CharacterStatsTableInteractive characters={dataset.characters} />
      )}

      {guide.specialKind === 'voice-actors-db' && (
        <section className="space-y-3">
          <AppMediaH2 id="cv-list">All Saviors Voice Actor (CV) Directory</AppMediaH2>
          <div className="overflow-x-auto rounded border border-[#263450] bg-[#0f1626]">
            <table className="w-full border-collapse text-[13.5px]">
              <thead>
                <tr className="border-b border-[#263450] bg-[#162136] text-left font-extrabold text-[#dbeafe]">
                  <th className="p-2.5">Character</th>
                  <th className="p-2.5">Voice Actor (CV)</th>
                  <th className="p-2.5">Affiliation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e293b]">
                {dataset.characters.map((c) => (
                  <tr key={c.slug} className="hover:bg-[#162036]">
                    <td className="p-2">
                      <Link href={`/starsavior/characters/${c.slug}`} className="flex items-center gap-2 font-bold text-[#60a5fa] hover:underline">
                        <img src={c.imageUrl} alt={c.name} className="h-8 w-8 rounded border border-[#334155] object-cover" />
                        <span>{c.name}</span>
                      </Link>
                    </td>
                    <td className="p-2 font-semibold text-[#e2e8f0]">{c.staticData?.profile?.cv || 'Official Cast'}</td>
                    <td className="p-2 text-[#c8d4e6]">{c.staticData?.profile?.affiliation || 'NOA Rescue Corps'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {guide.specialKind === 'birthday-db' && (
        <section className="space-y-3">
          <AppMediaH2 id="birthday-list">Savior Birthdays, Heights & Affiliations</AppMediaH2>
          <div className="overflow-x-auto rounded border border-[#263450] bg-[#0f1626]">
            <table className="w-full border-collapse text-[13.5px]">
              <thead>
                <tr className="border-b border-[#263450] bg-[#162136] text-left font-extrabold text-[#dbeafe]">
                  <th className="p-2.5">Character</th>
                  <th className="p-2.5">Birthday</th>
                  <th className="p-2.5">Height</th>
                  <th className="p-2.5">Origin / Faction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e293b]">
                {dataset.characters.map((c) => (
                  <tr key={c.slug} className="hover:bg-[#162036]">
                    <td className="p-2">
                      <Link href={`/starsavior/characters/${c.slug}`} className="flex items-center gap-2 font-bold text-[#60a5fa] hover:underline">
                        <img src={c.imageUrl} alt={c.name} className="h-8 w-8 rounded border border-[#334155] object-cover" />
                        <span>{c.name}</span>
                      </Link>
                    </td>
                    <td className="p-2 font-semibold text-[#fbbf24]">{c.staticData?.profile?.birthday || '—'}</td>
                    <td className="p-2 text-[#e8eff8]">{c.staticData?.profile?.height || '—'}</td>
                    <td className="p-2 text-[#c8d4e6]">{c.staticData?.profile?.affiliation || 'NOA'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {guide.specialKind === 'ark-points-db' && (
        <section className="space-y-3">
          <AppMediaH2 id="ark-gallery">Savior Ark Point Memorial Gallery</AppMediaH2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {dataset.characters
              .filter((c) => Boolean(c.staticData?.arkPointUrl || c.staticData?.illustUrl))
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/starsavior/characters/${c.slug}`}
                  className="group overflow-hidden rounded border border-[#263450] bg-[#0f1626] hover:border-[#60a5fa]"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-[#090d16]">
                    <img
                      src={c.staticData?.arkPointUrl || c.staticData?.illustUrl || c.imageUrl}
                      alt={`${c.name} Ark Point`}
                      className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-2.5 flex items-center justify-between">
                    <span className="text-[13.5px] font-extrabold text-[#f8fafc] group-hover:text-[#93c5fd]">
                      {c.name}
                    </span>
                    <span className="text-[11.5px] font-bold text-[#fbbf24]">{c.rarity} Memorial</span>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      )}

      {guide.specialKind === 'skins-db' && (
        <section className="space-y-3">
          <AppMediaH2 id="skins-gallery">Alternate Attire Saviors & Skins Showcase</AppMediaH2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {dataset.characters
              .filter((c) =>
                /^(Bunnygirl|Maid)\s+|:/i.test(c.name)
              )
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/starsavior/characters/${c.slug}`}
                  className="group overflow-hidden rounded border border-[#263450] bg-[#0f1626] hover:border-[#60a5fa] p-2.5 text-center space-y-2"
                >
                  <div className="mx-auto aspect-square w-24 overflow-hidden rounded-lg border-2 border-[#eab308]/80 bg-[#090d16]">
                    <img src={c.imageUrl} alt={c.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="text-[13.5px] font-extrabold text-[#60a5fa] group-hover:underline">{c.name}</div>
                  <div className="text-[11.5px] text-[#c8d4e6]">{c.element} / {c.role}</div>
                </Link>
              ))}
          </div>
        </section>
      )}

      {guide.specialKind === 'community-board' && (
        <CommunityBoardWidget
          boardTitle={guide.title}
          placeholder="Write your question, UID + Support Arcana, or Guild recruitment message here..."
          seedPosts={guide.boardSeedPosts ?? []}
        />
      )}

      {/* Article Structured Sections */}
      {guide.sections.map((sec) => (
        <section key={sec.id} className="space-y-3">
          <AppMediaH2 id={sec.id}>{sec.heading}</AppMediaH2>
          {sec.subHeading && <AppMediaH3>{sec.subHeading}</AppMediaH3>}

          <div className="rounded border border-[#263450] bg-[#111827] p-4 space-y-3">
            {sec.paragraphs.map((p, idx) => (
              <p key={idx} className="text-[14.5px] leading-relaxed text-[#e2e8f0]">
                {p}
              </p>
            ))}

            {sec.bullets && sec.bullets.length > 0 && (
              <ul className="space-y-2 text-[13.5px] leading-relaxed text-[#e8eff8]">
                {sec.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b82f6]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {sec.table && (
              <div className="overflow-x-auto rounded border border-[#28354e]">
                <table className="w-full border-collapse text-[13.5px]">
                  <thead>
                    <tr className="bg-[#162136] border-b border-[#28354e] text-left font-extrabold text-[#dbeafe]">
                      {sec.table.headers.map((h) => (
                        <th key={h} className="p-2.5 border-r border-[#28354e] last:border-r-0">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#243049] bg-[#0f1626]">
                    {sec.table.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className="p-2.5 border-r border-[#243049] last:border-r-0 text-[#e2e8f0]"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {sec.featuredCharSlugs && sec.featuredCharSlugs.length > 0 && (
              <div className="pt-2 space-y-2">
                <div className="text-[12.5px] font-extrabold uppercase tracking-wider text-[#93c5fd]">
                  Featured Saviors
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {sec.featuredCharSlugs.map((slug) => {
                    const c = charBySlug.get(slug);
                    if (!c) return null;
                    return (
                      <AppMediaIconCell
                        key={c.slug}
                        href={`/starsavior/characters/${c.slug}`}
                        name={c.name}
                        imageUrl={c.imageUrl}
                        rarity={c.rarity}
                        topLeftIconUrl={c.staticData?.attributeIconUrl}
                        topRightIconUrl={c.staticData?.classIconUrl}
                        size="sm"
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {sec.featuredArcanaSlugs && sec.featuredArcanaSlugs.length > 0 && (
              <div className="pt-2 space-y-2">
                <div className="text-[12.5px] font-extrabold uppercase tracking-wider text-[#fbbf24]">
                  Featured Arcana Cards
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {sec.featuredArcanaSlugs.map((slug) => {
                    const a = arcanaBySlug.get(slug);
                    if (!a) return null;
                    return (
                      <AppMediaIconCell
                        key={a.slug}
                        href={`/starsavior/arcana#${a.slug}`}
                        name={a.name}
                        imageUrl={a.imageUrl}
                        rarity={a.rarity}
                        badgeText={a.staticData?.statTag}
                        size="sm"
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* AppMedia Standard Related Rankings & Wiki Navigation Footer */}
      <section className="space-y-3 pt-2">
        <AppMediaH2 id="related-starsavior-links">Star Savior Strategy Rankings & Tools</AppMediaH2>
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
              label: 'Strongest Arcana',
              bannerSrc: '/banners/starsavior/buttons/btn_005.webp',
            },
            {
              href: '/starsavior/guides/pvp-tier-list',
              label: 'PvP Strongest Characters',
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
              label: 'Recommended SR Arcana',
              bannerSrc: '/banners/starsavior/buttons/btn_009.webp',
            },
          ]}
          footerLinks={[
            { href: '/starsavior', label: 'Return to Star Savior Strategy Wiki Top Page' },
          ]}
        />
      </section>
    </article>
  );
}
