import { UnitBaseStats } from '../schemas';

export interface PullSavingsInput {
  currentCurrency: number;
  currentTickets: number;
  daysUntilBanner: number;
  monthlyF2pIncome: number;
  monthlyPassIncome: number;
  hasMonthlyPass: boolean;
  singlePullCost: number;
  pitySparkPulls: number;
  featuredRatePerPull: number;
}

export interface PullSavingsResult {
  earnedCurrencyByBanner: number;
  totalCurrencyAvailable: number;
  totalPullsAvailable: number;
  pitySparkPullsRequired: number;
  canGuaranteePity: boolean;
  currencySurplusOrDeficit: number;
  probabilityAtLeastOneFeaturedPct: number;
}

export function calculatePullSavings(input: PullSavingsInput): PullSavingsResult {
  const dailyF2p = input.monthlyF2pIncome / 30;
  const dailyPass = input.hasMonthlyPass ? input.monthlyPassIncome / 30 : 0;
  const earnedCurrencyByBanner = Math.floor(Math.max(0, input.daysUntilBanner) * (dailyF2p + dailyPass));
  const totalCurrencyAvailable = input.currentCurrency + earnedCurrencyByBanner;
  const pullsFromCurrency = Math.floor(totalCurrencyAvailable / input.singlePullCost);
  const totalPullsAvailable = pullsFromCurrency + input.currentTickets;

  const pityCostCurrency = input.pitySparkPulls * input.singlePullCost;
  const effectiveCurrencyWithTickets = totalCurrencyAvailable + input.currentTickets * input.singlePullCost;
  const currencySurplusOrDeficit = effectiveCurrencyWithTickets - pityCostCurrency;
  const canGuaranteePity = totalPullsAvailable >= input.pitySparkPulls;

  const rawProb = canGuaranteePity
    ? 1.0
    : 1 - Math.pow(1 - input.featuredRatePerPull, Math.max(0, totalPullsAvailable));

  return {
    earnedCurrencyByBanner,
    totalCurrencyAvailable,
    totalPullsAvailable,
    pitySparkPullsRequired: input.pitySparkPulls,
    canGuaranteePity,
    currencySurplusOrDeficit,
    probabilityAtLeastOneFeaturedPct: Number((rawProb * 100).toFixed(1)),
  };
}

export interface CombatSimulationInput {
  basePotency: number;
  skillAtkBuff1Pct: number;
  skillAtkBuff2Pct: number;
  critDmgBuff1Pct: number;
  critDmgBuff2Pct: number;
  elementalFieldZonePct: number;
  defDown1Pct: number;
  defDown2Pct: number;
  fragileWeaknessPct: number;
  mindEyePct: number;
  multiHitBonusPct: number;
  isWeaknessHit: boolean;
}

export interface CombatSimulationResult {
  totalSkillAtkMult: number;
  totalCritMult: number;
  totalFieldMult: number;
  totalDefDownMult: number;
  totalWeaknessMult: number;
  totalMultiHitMult: number;
  finalDamageMultiplier: number;
  estimatedFinalDamage: number;
}

/**
 * Evaluates exact buff-stacking rules (up to 2 active buffs per category cap):
 * Final DMG = BasePotency * SkillATK * CritMult * FieldZone * DefDown * WeaknessFragile * MindEye * MultiHit
 */
export function evaluateCombatMultiplier(input: CombatSimulationInput): CombatSimulationResult {
  const totalSkillAtkMult = 1 + (input.skillAtkBuff1Pct + input.skillAtkBuff2Pct) / 100;
  const baseCritBonus = 0.50;
  const totalCritMult = 1 + baseCritBonus + (input.critDmgBuff1Pct + input.critDmgBuff2Pct) / 100;
  const totalFieldMult = 1 + input.elementalFieldZonePct / 100;
  const totalDefDownMult = 1 + (input.defDown1Pct + input.defDown2Pct) / 100;

  const baseWeakness = input.isWeaknessHit ? 1.50 : 1.0;
  const fragileBonus = input.isWeaknessHit ? input.fragileWeaknessPct / 100 : 0;
  const mindEyeBonus = input.isWeaknessHit ? 1 + input.mindEyePct / 100 : 1.0;
  const totalWeaknessMult = (baseWeakness + fragileBonus) * mindEyeBonus;
  const totalMultiHitMult = 1 + input.multiHitBonusPct / 100;

  const finalDamageMultiplier =
    totalSkillAtkMult *
    totalCritMult *
    totalFieldMult *
    totalDefDownMult *
    totalWeaknessMult *
    totalMultiHitMult;

  const estimatedFinalDamage = Math.round(input.basePotency * finalDamageMultiplier);

  return {
    totalSkillAtkMult: Number(totalSkillAtkMult.toFixed(2)),
    totalCritMult: Number(totalCritMult.toFixed(2)),
    totalFieldMult: Number(totalFieldMult.toFixed(2)),
    totalDefDownMult: Number(totalDefDownMult.toFixed(2)),
    totalWeaknessMult: Number(totalWeaknessMult.toFixed(2)),
    totalMultiHitMult: Number(totalMultiHitMult.toFixed(2)),
    finalDamageMultiplier: Number(finalDamageMultiplier.toFixed(2)),
    estimatedFinalDamage,
  };
}

export interface StatComparisonMetric {
  label: string;
  unitAVal: number;
  unitBVal: number;
  unitAPct: number;
  unitBPct: number;
  winner: 'A' | 'B' | 'TIE';
}

export function compareUnitStats(
  statsA: UnitBaseStats,
  statsB: UnitBaseStats,
  longevityA: number,
  longevityB: number,
  statLabels?: {
    hpLabel: string;
    dpLabel: string;
    atkLabel: string;
    defLabel: string;
    critLabel: string;
    burstLabel?: string;
    bufferLabel?: string;
    sustainLabel?: string;
    spLabel?: string;
  }
): StatComparisonMetric[] {
  const buildRow = (label: string, a: number, b: number, maxRef: number): StatComparisonMetric => {
    const unitAPct = Math.min(100, Math.round((a / maxRef) * 100));
    const unitBPct = Math.min(100, Math.round((b / maxRef) * 100));
    const winner = a > b ? 'A' : b > a ? 'B' : 'TIE';
    return { label, unitAVal: a, unitBVal: b, unitAPct, unitBPct, winner };
  };

  return [
    buildRow(statLabels?.hpLabel || 'Max HP / Stamina', statsA.hpOrStamina, statsB.hpOrStamina, Math.max(statsA.hpOrStamina, statsB.hpOrStamina, 1)),
    buildRow(statLabels?.dpLabel || 'SPD / Turn Rating', statsA.dpOrSpeed, statsB.dpOrSpeed, Math.max(statsA.dpOrSpeed, statsB.dpOrSpeed, 1)),
    buildRow(statLabels?.atkLabel || 'ATK / Power Stat', statsA.atkOrPower, statsB.atkOrPower, Math.max(statsA.atkOrPower, statsB.atkOrPower, 1)),
    buildRow(statLabels?.defLabel || 'DEF / Toughness', statsA.defOrGuts, statsB.defOrGuts, Math.max(statsA.defOrGuts, statsB.defOrGuts, 1)),
    buildRow(statLabels?.critLabel || 'Crit / Wisdom', statsA.critOrWit, statsB.critOrWit, Math.max(statsA.critOrWit, statsB.critOrWit, 1)),
    buildRow(statLabels?.burstLabel || 'Burst DPS Ceiling (0-100)', statsA.burstCeilingScore, statsB.burstCeilingScore, 100),
    buildRow(statLabels?.bufferLabel || 'Buff / Support Amplification', statsA.bufferCeilingScore, statsB.bufferCeilingScore, 100),
    buildRow(statLabels?.sustainLabel || 'Sustain / Survival Score', statsA.sustainScore, statsB.sustainScore, 100),
    buildRow(statLabels?.spLabel || 'SP / Energy Efficiency', statsA.spEfficiencyScore, statsB.spEfficiencyScore, 100),
    buildRow('Endgame Meta Longevity (Months)', longevityA, longevityB, 36),
  ];
}
