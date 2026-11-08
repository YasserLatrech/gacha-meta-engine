import crypto from 'crypto';
import { prisma } from './prisma';
import { redis } from '../cache/redis';
import {
  VerifiedUnitPayloadSchema,
  VerifiedEquipmentPayloadSchema,
  VerifiedBossPayloadSchema,
  VerifiedBannerPayloadSchema,
} from '../../domain/schemas';
import { heavenBurnsRedBundle, GameAdapterBundle } from '../scrapers/adapters/heaven-burns-red.adapter';
import { umaMusumeBundle } from '../scrapers/adapters/uma-musume.adapter';
import { swordOfConvallariaBundle } from '../scrapers/adapters/sword-of-convallaria.adapter';
import { starSaviorBundle } from '../scrapers/adapters/star-savior.adapter';

export async function syncGameBundle(bundle: GameAdapterBundle): Promise<{
  gameSlug: string;
  unitsSynced: number;
  equipmentsSynced: number;
  bossesSynced: number;
  bannersSynced: number;
  checksum: string;
}> {
  // 1. Validate every record strictly through Zod before touching PostgreSQL
  const validatedUnits = bundle.units.map((u) => VerifiedUnitPayloadSchema.parse(u));
  const validatedEquipments = bundle.equipments.map((e) => VerifiedEquipmentPayloadSchema.parse(e));
  const validatedBosses = bundle.bosses.map((b) => VerifiedBossPayloadSchema.parse(b));
  const validatedBanners = bundle.banners.map((bn) => VerifiedBannerPayloadSchema.parse(bn));

  // 2. Upsert Game record
  const game = await prisma.game.upsert({
    where: { slug: bundle.slug },
    update: {
      name: bundle.name,
      shortName: bundle.shortName,
      asianRegion: bundle.asianRegion,
      asianPatchVersion: bundle.asianPatchVersion,
      globalPatchVersion: bundle.globalPatchVersion,
      foresightGapMonths: bundle.foresightGapMonths,
      coverImageUrl: bundle.coverImageUrl,
      currencyName: bundle.currencyName,
      pullCostSingle: bundle.pullCostSingle,
      pityThreshold: bundle.pityThreshold,
      monthlyF2pIncome: bundle.monthlyF2pIncome,
      monthlyPassIncome: bundle.monthlyPassIncome,
      rolesConfig: bundle.rolesConfig,
      elementsConfig: bundle.elementsConfig,
    },
    create: {
      slug: bundle.slug,
      name: bundle.name,
      shortName: bundle.shortName,
      asianRegion: bundle.asianRegion,
      asianPatchVersion: bundle.asianPatchVersion,
      globalPatchVersion: bundle.globalPatchVersion,
      foresightGapMonths: bundle.foresightGapMonths,
      coverImageUrl: bundle.coverImageUrl,
      currencyName: bundle.currencyName,
      pullCostSingle: bundle.pullCostSingle,
      pityThreshold: bundle.pityThreshold,
      monthlyF2pIncome: bundle.monthlyF2pIncome,
      monthlyPassIncome: bundle.monthlyPassIncome,
      rolesConfig: bundle.rolesConfig,
      elementsConfig: bundle.elementsConfig,
    },
  });

  // 2b. Purge any stale/unverified records for this game before inserting the verified payload
  await prisma.tierEntry.deleteMany({ where: { gameId: game.id } });
  await prisma.unit.deleteMany({ where: { gameId: game.id } });
  await prisma.equipment.deleteMany({ where: { gameId: game.id } });
  await prisma.bossEncounter.deleteMany({ where: { gameId: game.id } });
  await prisma.bannerSchedule.deleteMany({ where: { gameId: game.id } });

  // 3. Insert Verified Units & TierEntries
  for (const u of validatedUnits) {
    const unitRecord = await prisma.unit.create({
      data: {
        gameId: game.id,
        externalId: u.externalId,
        slug: u.slug,
        nameEn: u.nameEn,
        nameOriginal: u.nameOriginal,
        styleOrTitle: u.styleOrTitle,
        rarity: u.rarity,
        role: u.role,
        element: u.element,
        attackType: u.attackType,
        imageUrl: u.imageUrl,
        releaseDateAsian: new Date(u.releaseDateAsian),
        releaseDateGlobal: u.releaseDateGlobal ? new Date(u.releaseDateGlobal) : null,
        isReleasedGlobal: u.isReleasedGlobal,
        longevityMonths: u.longevityMonths,
        recommendedDupes: u.recommendedDupes,
        baseStats: u.baseStats,
        skills: u.skills,
        passives: u.passives,
        synergyUnitSlugs: u.synergyUnitSlugs,
        sourceUrl: u.sourceUrl,
      },
    });

    const tierConfigs: Array<{ category: string; rank: string }> = [
      { category: 'OVERALL', rank: u.tierOverall },
      { category: 'REROLL', rank: u.tierReroll },
      { category: 'BOSS_RAID', rank: u.tierBossRaid },
    ];

    for (const tc of tierConfigs) {
      await prisma.tierEntry.create({
        data: {
          gameId: game.id,
          unitId: unitRecord.id,
          category: tc.category,
          serverScope: 'ASIAN_FUTURE',
          tierRank: tc.rank,
          roleColumn: u.roleColumn,
          numericScore: u.numericScore,
          summaryVerdict: u.summaryVerdict,
          longevityNote: u.longevityNote,
        },
      });

      if (u.isReleasedGlobal) {
        await prisma.tierEntry.create({
          data: {
            gameId: game.id,
            unitId: unitRecord.id,
            category: tc.category,
            serverScope: 'GLOBAL_CURRENT',
            tierRank: tc.rank,
            roleColumn: u.roleColumn,
            numericScore: u.numericScore,
            summaryVerdict: u.summaryVerdict,
            longevityNote: u.longevityNote,
          },
        });
      }
    }
  }

  // 4. Insert Verified Equipments (Weapons / Support Cards / Orbs / Tarots)
  for (const eq of validatedEquipments) {
    await prisma.equipment.create({
      data: {
        gameId: game.id,
        externalId: eq.externalId,
        slug: eq.slug,
        nameEn: eq.nameEn,
        category: eq.category,
        subType: eq.subType,
        rarity: eq.rarity,
        imageUrl: eq.imageUrl,
        tierRank: eq.tierRank,
        score: eq.score,
        recommendedDupes: eq.recommendedDupes,
        stats: eq.stats,
        effectSummary: eq.effectSummary,
        bestHolderSlugs: eq.bestHolderSlugs,
        sourceUrl: eq.sourceUrl,
      },
    });
  }

  // 5. Insert Verified Boss Encounters & Strategy Guides
  for (const boss of validatedBosses) {
    await prisma.bossEncounter.create({
      data: {
        gameId: game.id,
        slug: boss.slug,
        nameEn: boss.nameEn,
        modeName: boss.modeName,
        difficultyLabel: boss.difficultyLabel,
        imageUrl: boss.imageUrl,
        hpStat: boss.hpStat,
        shieldOrDpStat: boss.shieldOrDpStat,
        weaknesses: boss.weaknesses,
        resistances: boss.resistances,
        attackPatterns: boss.attackPatterns,
        strategySteps: boss.strategySteps,
        recommendedUnitSlugs: boss.recommendedUnitSlugs,
        sourceUrl: boss.sourceUrl,
      },
    });
  }

  // 6. Insert Verified Future Banner Schedules
  for (const bn of validatedBanners) {
    await prisma.bannerSchedule.create({
      data: {
        gameId: game.id,
        slug: bn.slug,
        bannerTitle: bn.bannerTitle,
        bannerType: bn.bannerType,
        imageUrl: bn.imageUrl,
        featuredNames: bn.featuredNames,
        featuredUnitSlugs: bn.featuredUnitSlugs,
        asianStartDate: new Date(bn.asianStartDate),
        asianEndDate: new Date(bn.asianEndDate),
        estGlobalStartDate: new Date(bn.estGlobalStartDate),
        estGlobalEndDate: new Date(bn.estGlobalEndDate),
        pullVerdict: bn.pullVerdict,
        verdictReasoning: bn.verdictReasoning,
        pityCurrencyCost: bn.pityCurrencyCost,
        sourceUrl: bn.sourceUrl,
      },
    });
  }

  // 7. Write cryptographic SyncAuditLog
  const checksum = crypto
    .createHash('sha256')
    .update(JSON.stringify({ validatedUnits, validatedEquipments, validatedBosses, validatedBanners }))
    .digest('hex')
    .slice(0, 16);

  const totalSynced =
    validatedUnits.length +
    validatedEquipments.length +
    validatedBosses.length +
    validatedBanners.length;

  await prisma.syncAuditLog.create({
    data: {
      gameId: game.id,
      adapterName: `${bundle.slug}-asian-adapter`,
      sourceUrl: bundle.sourceUrl,
      recordsSynced: totalSynced,
      validationPassed: true,
      checksumHash: checksum,
    },
  });

  return {
    gameSlug: bundle.slug,
    unitsSynced: validatedUnits.length,
    equipmentsSynced: validatedEquipments.length,
    bossesSynced: validatedBosses.length,
    bannersSynced: validatedBanners.length,
    checksum,
  };
}

export async function runFullSeed() {
  const bundles = [starSaviorBundle, heavenBurnsRedBundle, umaMusumeBundle, swordOfConvallariaBundle];
  const results = [];
  for (const b of bundles) {
    const res = await syncGameBundle(b);
    results.push(res);
  }
  try {
    await redis.flushall();
    console.log('Redis L2 cache flushed after verified re-seed.');
  } catch (e) {
    console.warn('Redis flush warning:', e);
  }
  return results;
}

if (require.main === module) {
  runFullSeed()
    .then((res) => {
      console.log('Verified Asian Server Seed Complete:', JSON.stringify(res, null, 2));
      process.exit(0);
    })
    .catch((err) => {
      console.error('Seed validation failed:', err);
      process.exit(1);
    });
}
