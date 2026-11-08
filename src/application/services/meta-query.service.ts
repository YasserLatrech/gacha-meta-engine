import { prisma } from '../../infrastructure/db/prisma';
import { getCachedOrFetch } from '../../infrastructure/cache/redis';
import { runFullSeed } from '../../infrastructure/db/seed';
import {
  RoleColumnConfig,
  ElementConfig,
  UnitBaseStats,
  SkillData,
  PassiveData,
  AttackPatternData,
} from '../../domain/schemas';

export interface HydratedUnit {
  id: string;
  slug: string;
  nameEn: string;
  nameOriginal: string;
  styleOrTitle: string;
  rarity: string;
  role: string;
  element: string;
  attackType: string;
  imageUrl: string;
  releaseDateAsian: string;
  releaseDateGlobal: string | null;
  isReleasedGlobal: boolean;
  longevityMonths: number;
  recommendedDupes: string;
  baseStats: UnitBaseStats;
  skills: SkillData[];
  passives: PassiveData[];
  synergyUnitSlugs: string[];
  sourceUrl: string;
  tiers: {
    overallAsian: { tierRank: string; roleColumn: string; numericScore: number; summaryVerdict: string; longevityNote: string };
    overallGlobal: { tierRank: string; roleColumn: string; numericScore: number; summaryVerdict: string; longevityNote: string } | null;
    rerollAsian: string;
    bossRaidAsian: string;
  };
}

export interface HydratedEquipment {
  id: string;
  slug: string;
  nameEn: string;
  category: string;
  subType: string;
  rarity: string;
  imageUrl: string;
  tierRank: string;
  score: number;
  recommendedDupes: string;
  stats: Record<string, string | number>;
  effectSummary: string;
  bestHolderSlugs: string[];
  sourceUrl: string;
}

export interface HydratedBoss {
  id: string;
  slug: string;
  nameEn: string;
  modeName: string;
  difficultyLabel: string;
  imageUrl: string;
  hpStat: string;
  shieldOrDpStat: string;
  weaknesses: string[];
  resistances: string[];
  attackPatterns: AttackPatternData[];
  strategySteps: string[];
  recommendedUnitSlugs: string[];
  sourceUrl: string;
}

export interface HydratedBanner {
  id: string;
  slug: string;
  bannerTitle: string;
  bannerType: string;
  imageUrl: string;
  featuredNames: string[];
  featuredUnitSlugs: string[];
  asianStartDate: string;
  asianEndDate: string;
  estGlobalStartDate: string;
  estGlobalEndDate: string;
  pullVerdict: string;
  verdictReasoning: string;
  pityCurrencyCost: number;
  sourceUrl: string;
}

export interface HydratedGameHub {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  asianRegion: string;
  asianPatchVersion: string;
  globalPatchVersion: string;
  foresightGapMonths: number;
  coverImageUrl: string;
  currencyName: string;
  pullCostSingle: number;
  pityThreshold: number;
  monthlyF2pIncome: number;
  monthlyPassIncome: number;
  rolesConfig: RoleColumnConfig[];
  elementsConfig: ElementConfig[];
  units: HydratedUnit[];
  equipments: HydratedEquipment[];
  bosses: HydratedBoss[];
  banners: HydratedBanner[];
  lastSyncChecksum: string;
  lastSyncedAt: string;
}

async function ensureDatabaseSeeded() {
  const count = await prisma.game.count();
  if (count === 0) {
    await runFullSeed();
  }
}

export async function getPortalOverview() {
  return getCachedOrFetch('portal:overview:v1', 120, async () => {
    await ensureDatabaseSeeded();
    const games = await prisma.game.findMany({
      orderBy: { foresightGapMonths: 'desc' },
      include: {
        _count: {
          select: { units: true, equipments: true, bossEncounters: true, banners: true },
        },
        units: {
          select: { slug: true, nameEn: true, styleOrTitle: true, role: true, element: true, imageUrl: true },
        },
        equipments: {
          select: { slug: true, nameEn: true, category: true, tierRank: true, imageUrl: true },
        },
        bossEncounters: {
          select: { slug: true, nameEn: true, modeName: true },
        },
        banners: {
          orderBy: { estGlobalStartDate: 'asc' },
          take: 2,
          select: { slug: true, bannerTitle: true, estGlobalStartDate: true, pullVerdict: true },
        },
        syncLogs: {
          orderBy: { executedAt: 'desc' },
          take: 1,
        },
      },
    });

    return games.map((g) => ({
      slug: g.slug,
      name: g.name,
      shortName: g.shortName,
      asianRegion: g.asianRegion,
      asianPatchVersion: g.asianPatchVersion,
      globalPatchVersion: g.globalPatchVersion,
      foresightGapMonths: g.foresightGapMonths,
      coverImageUrl: g.coverImageUrl,
      currencyName: g.currencyName,
      counts: g._count,
      units: g.units,
      equipments: g.equipments,
      bosses: g.bossEncounters,
      upcomingBanners: g.banners.map((b) => ({
        ...b,
        estGlobalStartDate: b.estGlobalStartDate.toISOString().slice(0, 10),
      })),
      lastSyncChecksum: g.syncLogs[0]?.checksumHash ?? 'verified',
    }));
  });
}

export async function getGameHubData(gameSlug: string): Promise<HydratedGameHub | null> {
  return getCachedOrFetch(`game:hub:${gameSlug}:v1`, 120, async () => {
    await ensureDatabaseSeeded();
    const game = await prisma.game.findUnique({
      where: { slug: gameSlug },
      include: {
        units: {
          include: { tierEntries: true },
          orderBy: { longevityMonths: 'desc' },
        },
        equipments: {
          orderBy: { score: 'desc' },
        },
        bossEncounters: true,
        banners: {
          orderBy: { estGlobalStartDate: 'asc' },
        },
        syncLogs: {
          orderBy: { executedAt: 'desc' },
          take: 1,
        },
      },
    });

    if (!game) return null;

    const units: HydratedUnit[] = game.units.map((u) => {
      const overallAsianEntry = u.tierEntries.find(
        (t) => t.category === 'OVERALL' && t.serverScope === 'ASIAN_FUTURE'
      );
      const overallGlobalEntry = u.tierEntries.find(
        (t) => t.category === 'OVERALL' && t.serverScope === 'GLOBAL_CURRENT'
      );
      const rerollAsianEntry = u.tierEntries.find(
        (t) => t.category === 'REROLL' && t.serverScope === 'ASIAN_FUTURE'
      );
      const bossRaidAsianEntry = u.tierEntries.find(
        (t) => t.category === 'BOSS_RAID' && t.serverScope === 'ASIAN_FUTURE'
      );

      return {
        id: u.id,
        slug: u.slug,
        nameEn: u.nameEn,
        nameOriginal: u.nameOriginal,
        styleOrTitle: u.styleOrTitle,
        rarity: u.rarity,
        role: u.role,
        element: u.element,
        attackType: u.attackType,
        imageUrl: u.imageUrl,
        releaseDateAsian: u.releaseDateAsian.toISOString().slice(0, 10),
        releaseDateGlobal: u.releaseDateGlobal ? u.releaseDateGlobal.toISOString().slice(0, 10) : null,
        isReleasedGlobal: u.isReleasedGlobal,
        longevityMonths: u.longevityMonths,
        recommendedDupes: u.recommendedDupes,
        baseStats: u.baseStats as UnitBaseStats,
        skills: u.skills as SkillData[],
        passives: u.passives as PassiveData[],
        synergyUnitSlugs: u.synergyUnitSlugs as string[],
        sourceUrl: u.sourceUrl,
        tiers: {
          overallAsian: {
            tierRank: overallAsianEntry?.tierRank ?? 'S',
            roleColumn: overallAsianEntry?.roleColumn ?? 'DPS',
            numericScore: overallAsianEntry?.numericScore ?? 9.0,
            summaryVerdict: overallAsianEntry?.summaryVerdict ?? '',
            longevityNote: overallAsianEntry?.longevityNote ?? '',
          },
          overallGlobal: overallGlobalEntry
            ? {
                tierRank: overallGlobalEntry.tierRank,
                roleColumn: overallGlobalEntry.roleColumn,
                numericScore: overallGlobalEntry.numericScore,
                summaryVerdict: overallGlobalEntry.summaryVerdict,
                longevityNote: overallGlobalEntry.longevityNote,
              }
            : null,
          rerollAsian: rerollAsianEntry?.tierRank ?? 'S',
          bossRaidAsian: bossRaidAsianEntry?.tierRank ?? 'S',
        },
      };
    });

    units.sort((a, b) => b.tiers.overallAsian.numericScore - a.tiers.overallAsian.numericScore);

    return {
      id: game.id,
      slug: game.slug,
      name: game.name,
      shortName: game.shortName,
      asianRegion: game.asianRegion,
      asianPatchVersion: game.asianPatchVersion,
      globalPatchVersion: game.globalPatchVersion,
      foresightGapMonths: game.foresightGapMonths,
      coverImageUrl: game.coverImageUrl,
      currencyName: game.currencyName,
      pullCostSingle: game.pullCostSingle,
      pityThreshold: game.pityThreshold,
      monthlyF2pIncome: game.monthlyF2pIncome,
      monthlyPassIncome: game.monthlyPassIncome,
      rolesConfig: game.rolesConfig as RoleColumnConfig[],
      elementsConfig: game.elementsConfig as ElementConfig[],
      units,
      equipments: game.equipments.map((eq) => ({
        id: eq.id,
        slug: eq.slug,
        nameEn: eq.nameEn,
        category: eq.category,
        subType: eq.subType,
        rarity: eq.rarity,
        imageUrl: eq.imageUrl,
        tierRank: eq.tierRank,
        score: eq.score,
        recommendedDupes: eq.recommendedDupes,
        stats: eq.stats as Record<string, string | number>,
        effectSummary: eq.effectSummary,
        bestHolderSlugs: eq.bestHolderSlugs as string[],
        sourceUrl: eq.sourceUrl,
      })),
      bosses: game.bossEncounters.map((b) => ({
        id: b.id,
        slug: b.slug,
        nameEn: b.nameEn,
        modeName: b.modeName,
        difficultyLabel: b.difficultyLabel,
        imageUrl: b.imageUrl,
        hpStat: b.hpStat,
        shieldOrDpStat: b.shieldOrDpStat,
        weaknesses: b.weaknesses as string[],
        resistances: b.resistances as string[],
        attackPatterns: b.attackPatterns as AttackPatternData[],
        strategySteps: b.strategySteps as string[],
        recommendedUnitSlugs: b.recommendedUnitSlugs as string[],
        sourceUrl: b.sourceUrl,
      })),
      banners: game.banners.map((bn) => ({
        id: bn.id,
        slug: bn.slug,
        bannerTitle: bn.bannerTitle,
        bannerType: bn.bannerType,
        imageUrl: bn.imageUrl,
        featuredNames: bn.featuredNames as string[],
        featuredUnitSlugs: bn.featuredUnitSlugs as string[],
        asianStartDate: bn.asianStartDate.toISOString().slice(0, 10),
        asianEndDate: bn.asianEndDate.toISOString().slice(0, 10),
        estGlobalStartDate: bn.estGlobalStartDate.toISOString().slice(0, 10),
        estGlobalEndDate: bn.estGlobalEndDate.toISOString().slice(0, 10),
        pullVerdict: bn.pullVerdict,
        verdictReasoning: bn.verdictReasoning,
        pityCurrencyCost: bn.pityCurrencyCost,
        sourceUrl: bn.sourceUrl,
      })),
      lastSyncChecksum: game.syncLogs[0]?.checksumHash ?? 'verified',
      lastSyncedAt: game.syncLogs[0]?.executedAt.toISOString().slice(0, 10) ?? '2026-11-08',
    };
  });
}
