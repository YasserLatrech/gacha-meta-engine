import { z } from 'zod';

export const RoleColumnSchema = z.object({
  key: z.enum(['DPS', 'SUB_DPS', 'SUPPORT', 'SUSTAIN']),
  label: z.string().min(1),
  colorHex: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
});

export const ElementConfigSchema = z.object({
  key: z.string().min(1),
  label: z.string().min(1),
  colorHex: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
});

export const SkillSchema = z.object({
  name: z.string().min(1),
  type: z.enum(['EX_ULTIMATE', 'ACTIVE', 'NORMAL', 'TRAINING_EVENT']),
  spOrEnergyCost: z.string().min(1),
  multiplierSummary: z.string().min(1),
  hitCount: z.number().int().min(1),
  buffCategoryTags: z.array(z.string()).min(1),
  exactDescription: z.string().min(1),
});

export const PassiveSchema = z.object({
  unlockRank: z.string().min(1),
  name: z.string().min(1),
  effect: z.string().min(1),
});

export const UnitBaseStatsSchema = z.object({
  hpOrStamina: z.number().positive(),
  dpOrSpeed: z.number().positive(),
  atkOrPower: z.number().positive(),
  defOrGuts: z.number().positive(),
  critOrWit: z.number().positive(),
  burstCeilingScore: z.number().min(1).max(100),
  bufferCeilingScore: z.number().min(1).max(100),
  sustainScore: z.number().min(1).max(100),
  spEfficiencyScore: z.number().min(1).max(100),
});

export const TierRankEnum = z.enum(['SSS', 'SS', 'S', 'A', 'B', 'C']);

export const VerifiedUnitPayloadSchema = z.object({
  externalId: z.string().min(1),
  slug: z.string().min(1),
  nameEn: z.string().min(1),
  nameOriginal: z.string().min(1),
  styleOrTitle: z.string().min(1),
  rarity: z.string().min(1),
  role: z.string().min(1),
  roleColumn: z.enum(['DPS', 'SUB_DPS', 'SUPPORT', 'SUSTAIN']),
  element: z.string().min(1),
  attackType: z.string().min(1),
  imageUrl: z.string().url(),
  releaseDateAsian: z.string().min(1),
  releaseDateGlobal: z.string().nullable(),
  isReleasedGlobal: z.boolean(),
  longevityMonths: z.number().int().min(1),
  recommendedDupes: z.string().min(1),
  baseStats: UnitBaseStatsSchema,
  skills: z.array(SkillSchema).min(1),
  passives: z.array(PassiveSchema).min(1),
  synergyUnitSlugs: z.array(z.string()),
  tierOverall: TierRankEnum,
  tierReroll: TierRankEnum,
  tierBossRaid: TierRankEnum,
  numericScore: z.number().min(1).max(10),
  summaryVerdict: z.string().min(10),
  longevityNote: z.string().min(10),
  sourceUrl: z.string().url(),
});

export const VerifiedEquipmentPayloadSchema = z.object({
  externalId: z.string().min(1),
  slug: z.string().min(1),
  nameEn: z.string().min(1),
  category: z.string().min(1),
  subType: z.string().min(1),
  rarity: z.string().min(1),
  imageUrl: z.string().url(),
  tierRank: TierRankEnum,
  score: z.number().min(1).max(10),
  recommendedDupes: z.string().min(1),
  stats: z.record(z.string(), z.union([z.string(), z.number()])),
  effectSummary: z.string().min(10),
  bestHolderSlugs: z.array(z.string()),
  sourceUrl: z.string().url(),
});

export const AttackPatternSchema = z.object({
  turnOrPhase: z.string().min(1),
  attackName: z.string().min(1),
  damageType: z.string().min(1),
  counterAction: z.string().min(1),
});

export const VerifiedBossPayloadSchema = z.object({
  slug: z.string().min(1),
  nameEn: z.string().min(1),
  modeName: z.string().min(1),
  difficultyLabel: z.string().min(1),
  imageUrl: z.string().url(),
  hpStat: z.string().min(1),
  shieldOrDpStat: z.string().min(1),
  weaknesses: z.array(z.string()).min(1),
  resistances: z.array(z.string()).min(1),
  attackPatterns: z.array(AttackPatternSchema).min(1),
  strategySteps: z.array(z.string()).min(2),
  recommendedUnitSlugs: z.array(z.string()).min(1),
  sourceUrl: z.string().url(),
});

export const VerifiedBannerPayloadSchema = z.object({
  slug: z.string().min(1),
  bannerTitle: z.string().min(1),
  bannerType: z.enum(['LIMITED', 'COLLAB', 'FESTIVAL', 'STANDARD', 'SUPPORT_CARD']),
  imageUrl: z.string().url(),
  featuredNames: z.array(z.string()).min(1),
  featuredUnitSlugs: z.array(z.string()).min(1),
  asianStartDate: z.string().min(1),
  asianEndDate: z.string().min(1),
  estGlobalStartDate: z.string().min(1),
  estGlobalEndDate: z.string().min(1),
  pullVerdict: z.enum(['MUST_PULL', 'HIGH_VALUE', 'NICHE_META', 'EASY_SKIP']),
  verdictReasoning: z.string().min(10),
  pityCurrencyCost: z.number().int().positive(),
  sourceUrl: z.string().url(),
});

export type VerifiedUnitPayload = z.infer<typeof VerifiedUnitPayloadSchema>;
export type VerifiedEquipmentPayload = z.infer<typeof VerifiedEquipmentPayloadSchema>;
export type VerifiedBossPayload = z.infer<typeof VerifiedBossPayloadSchema>;
export type VerifiedBannerPayload = z.infer<typeof VerifiedBannerPayloadSchema>;
export type UnitBaseStats = z.infer<typeof UnitBaseStatsSchema>;
export type SkillData = z.infer<typeof SkillSchema>;
export type PassiveData = z.infer<typeof PassiveSchema>;
export type AttackPatternData = z.infer<typeof AttackPatternSchema>;
export type RoleColumnConfig = z.infer<typeof RoleColumnSchema>;
export type ElementConfig = z.infer<typeof ElementConfigSchema>;
