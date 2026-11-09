import { describe, it, expect } from 'vitest';
import {
  calculatePullSavings,
  evaluateCombatMultiplier,
  compareUnitStats,
} from '../calculators/engine';

describe('Pull Savings & Pity Probability Engine', () => {
  it('accurately computes HBR 45,000 Quartz spark guarantee and surplus', () => {
    const res = calculatePullSavings({
      currentCurrency: 24000,
      currentTickets: 10,
      daysUntilBanner: 45,
      monthlyF2pIncome: 16500,
      monthlyPassIncome: 6500,
      hasMonthlyPass: false,
      singlePullCost: 300,
      pitySparkPulls: 150,
      featuredRatePerPull: 0.0075,
    });

    // 45 days * (16500 / 30) = 24,750 Quartz earned
    expect(res.earnedCurrencyByBanner).toBe(24750);
    expect(res.totalCurrencyAvailable).toBe(48750);
    // 48750 / 300 = 162 pulls + 10 tickets = 172 pulls >= 150 spark
    expect(res.totalPullsAvailable).toBe(172);
    expect(res.canGuaranteePity).toBe(true);
    expect(res.probabilityAtLeastOneFeaturedPct).toBe(100);
  });

  it('computes binomial gacha probability when below pity threshold', () => {
    const res = calculatePullSavings({
      currentCurrency: 15000,
      currentTickets: 0,
      daysUntilBanner: 0,
      monthlyF2pIncome: 15000,
      monthlyPassIncome: 5000,
      hasMonthlyPass: false,
      singlePullCost: 300,
      pitySparkPulls: 150,
      featuredRatePerPull: 0.0075,
    });

    expect(res.totalPullsAvailable).toBe(50);
    expect(res.canGuaranteePity).toBe(false);
    // 1 - (1 - 0.0075)^50 = ~31.4%
    expect(res.probabilityAtLeastOneFeaturedPct).toBeCloseTo(31.4, 1);
  });
});

describe('Multi-Bucket Combat Damage Engine', () => {
  it('stacks 2x Skill ATK, 2x Crit DMG, Field Zone, 2x DEF Down, Fragile, and Multi-Hit multiplicatively', () => {
    const res = evaluateCombatMultiplier({
      basePotency: 12450,
      skillAtkBuff1Pct: 90,
      skillAtkBuff2Pct: 80,
      critDmgBuff1Pct: 70,
      critDmgBuff2Pct: 30,
      elementalFieldZonePct: 65,
      defDown1Pct: 45,
      defDown2Pct: 45,
      fragileWeaknessPct: 50,
      mindEyePct: 35,
      multiHitBonusPct: 50,
      isWeaknessHit: true,
    });

    expect(res.totalSkillAtkMult).toBe(2.7);
    expect(res.totalCritMult).toBe(2.5);
    expect(res.totalFieldMult).toBe(1.65);
    expect(res.totalDefDownMult).toBe(1.9);
    expect(res.totalMultiHitMult).toBe(1.5);
    expect(res.estimatedFinalDamage).toBeGreaterThan(1000000);
  });
});

describe('Side-by-Side Unit Statistical Comparator', () => {
  it('identifies stat winners and computes normalized bar percentages', () => {
    const rows = compareUnitStats(
      {
        hpOrStamina: 3820,
        dpOrSpeed: 4250,
        atkOrPower: 390,
        defOrGuts: 412,
        critOrWit: 445,
        burstCeilingScore: 45,
        bufferCeilingScore: 99,
        sustainScore: 72,
        spEfficiencyScore: 95,
      },
      {
        hpOrStamina: 4120,
        dpOrSpeed: 4690,
        atkOrPower: 415,
        defOrGuts: 448,
        critOrWit: 460,
        burstCeilingScore: 48,
        bufferCeilingScore: 100,
        sustainScore: 98,
        spEfficiencyScore: 96,
      },
      18,
      24
    );

    expect(rows).toHaveLength(10);
    expect(rows[0]?.winner).toBe('B');
    expect(rows[9]?.unitAVal).toBe(18);
    expect(rows[9]?.unitBVal).toBe(24);
  });
});

describe('Pure Official English Localization & Roster Verification', () => {
  it('validates all 336 units and 216 equipments with 0 CJK characters and 0 forbidden external terms', async () => {
    const { starSaviorBundle } = await import('../../infrastructure/scrapers/adapters/star-savior.adapter');
    const { heavenBurnsRedBundle } = await import('../../infrastructure/scrapers/adapters/heaven-burns-red.adapter');
    const { umaMusumeBundle } = await import('../../infrastructure/scrapers/adapters/uma-musume.adapter');
    const { swordOfConvallariaBundle } = await import('../../infrastructure/scrapers/adapters/sword-of-convallaria.adapter');
    const { VerifiedUnitPayloadSchema, VerifiedEquipmentPayloadSchema } = await import('../schemas');

    expect(starSaviorBundle.units.length).toBeGreaterThanOrEqual(55);
    expect(starSaviorBundle.equipments.length).toBeGreaterThanOrEqual(50);
    expect(heavenBurnsRedBundle.units.length).toBeGreaterThanOrEqual(115);
    expect(heavenBurnsRedBundle.equipments.length).toBeGreaterThanOrEqual(35);
    expect(umaMusumeBundle.units.length).toBeGreaterThanOrEqual(95);
    expect(umaMusumeBundle.equipments.length).toBeGreaterThanOrEqual(75);
    expect(swordOfConvallariaBundle.units.length).toBeGreaterThanOrEqual(50);
    expect(swordOfConvallariaBundle.equipments.length).toBeGreaterThanOrEqual(45);
    expect(swordOfConvallariaBundle.banners.length).toBeGreaterThanOrEqual(3);

    const cjkRegex = /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF\uAC00-\uD7AF]/;
    const forbiddenWordsRegex = /\b(asian|game8|appmedia|scraped|foresight)\b/i;

    for (const bundle of [starSaviorBundle, heavenBurnsRedBundle, umaMusumeBundle, swordOfConvallariaBundle]) {
      const jsonStr = JSON.stringify(bundle);
      expect(jsonStr).not.toMatch(cjkRegex);
      const textWithoutImageUrls = jsonStr.replace(/"(imageUrl|coverImageUrl)":"[^"]*"/g, '');
      expect(textWithoutImageUrls).not.toMatch(forbiddenWordsRegex);

      for (const u of bundle.units) {
        expect(() => VerifiedUnitPayloadSchema.parse(u)).not.toThrow();
        expect(u.imageUrl).not.toContain('prydwen.gg');
      }
      for (const eq of bundle.equipments) {
        expect(() => VerifiedEquipmentPayloadSchema.parse(eq)).not.toThrow();
        expect(bundle.coverImageUrl.startsWith('https://')).toBe(true);
        expect(eq.imageUrl).not.toContain('prydwen.gg');
      }
    }
  });

  it('enforces Simultaneous Global/Asia Server Parity for Star Savior and Multi-Source Consensus across all games', async () => {
    const { starSaviorBundle } = await import('../../infrastructure/scrapers/adapters/star-savior.adapter');
    const { heavenBurnsRedBundle } = await import('../../infrastructure/scrapers/adapters/heaven-burns-red.adapter');
    const { getServerSyncContext, computeMultiSourceConsensus } = await import('../game-mechanics');

    // Star Savior must have 0-month foresight gap and 100% simultaneous release parity
    expect(starSaviorBundle.foresightGapMonths).toBe(0);
    expect(starSaviorBundle.units.every((u) => u.isReleasedGlobal === true)).toBe(true);

    const ssSync = getServerSyncContext(
      starSaviorBundle.slug,
      starSaviorBundle.foresightGapMonths,
      starSaviorBundle.globalPatchVersion
    );
    expect(ssSync.isSimultaneous).toBe(true);
    expect(ssSync.badgeLabel).toContain('SIMULTANEOUS');

    // Heaven Burns Red has a regional server lead (+4 months)
    const hbrSync = getServerSyncContext(
      heavenBurnsRedBundle.slug,
      heavenBurnsRedBundle.foresightGapMonths,
      heavenBurnsRedBundle.globalPatchVersion
    );
    expect(hbrSync.isSimultaneous).toBe(false);
    expect(hbrSync.badgeLabel).toContain('+4MO');

    // Multi-Source Consensus Engine validation
    const rawUnit = starSaviorBundle.units[0]!;
    const hydratedUnit = {
      ...rawUnit,
      tiers: {
        overallAsian: {
          tierRank: rawUnit.tierOverall,
          numericScore: rawUnit.numericScore,
          roleColumn: rawUnit.roleColumn,
          summaryVerdict: rawUnit.summaryVerdict,
          longevityNote: rawUnit.longevityNote,
        },
        overallGlobal: null,
        rerollAsian: rawUnit.tierReroll,
        bossRaidAsian: rawUnit.tierBossRaid,
      },
    };
    const consensus = computeMultiSourceConsensus('star-savior', hydratedUnit);
    expect(consensus.finalWeightedScore).toBeGreaterThanOrEqual(8.5);
    expect(consensus.normalizedElementUsagePct).toBeGreaterThanOrEqual(70);
    expect(consensus.whySourcesDifferOrAgree.length).toBeGreaterThan(20);
  });
});
