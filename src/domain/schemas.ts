import { z } from 'zod';

export const TierRankSchema = z.enum(['SS', 'S', 'A', 'B']);
export type TierRank = z.infer<typeof TierRankSchema>;

export const ElementOptionSchema = z.object({
  key: z.string().min(1),
  label: z.string().min(1),
  colorHex: z.string().min(4),
  iconUrl: z.string().url(),
});
export type ElementOption = z.infer<typeof ElementOptionSchema>;

export const RoleOptionSchema = z.object({
  key: z.string().min(1),
  label: z.string().min(1),
  colorHex: z.string().min(4),
  iconUrl: z.string().url(),
});
export type RoleOption = z.infer<typeof RoleOptionSchema>;

export const ShortcutItemSchema = z.object({
  key: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  href: z.string().min(1),
  iconUrl: z.string().url(),
  badge: z.string().min(1),
});
export type ShortcutItem = z.infer<typeof ShortcutItemSchema>;

export const CharacterStatsSchema = z.object({
  hp: z.number(),
  hpRank: z.string().optional(),
  hpBarPct: z.number().optional(),
  spd: z.number(),
  spdRank: z.string().optional(),
  spdBarPct: z.number().optional(),
  atk: z.number(),
  atkRank: z.string().optional(),
  atkBarPct: z.number().optional(),
  def: z.number(),
  defRank: z.string().optional(),
  defBarPct: z.number().optional(),
  crit: z.number(),
  critRate: z.string().optional(),
  critDmg: z.string().optional(),
  effHit: z.string().optional(),
  effRes: z.string().optional(),
});
export type CharacterStats = z.infer<typeof CharacterStatsSchema>;

export const SkillScalingRowSchema = z.object({
  category: z.string(),
  items: z.array(
    z.object({
      value: z.string(),
      iconUrl: z.string().optional(),
    })
  ),
});

export const SkillTooltipSchema = z.object({
  title: z.string(),
  detail: z.string(),
});

export const CharacterSkillSchema = z.object({
  name: z.string().min(1),
  nameJp: z.string().optional(),
  type: z.string().min(1),
  iconUrl: z.string().optional(),
  target: z.string().optional(),
  cooldown: z.string().optional(),
  toughnessDamage: z.string().optional(),
  novaForce: z.string().optional(),
  spOrEnergyCost: z.string().min(1),
  multiplierSummary: z.string().min(1),
  scalingRows: z.array(SkillScalingRowSchema).optional(),
  exactDescription: z.string().min(1),
  novaBurst: z.string().optional(),
  tooltips: z.array(SkillTooltipSchema).optional(),
});
export type CharacterSkill = z.infer<typeof CharacterSkillSchema>;

export const EquipmentSetDetailSchema = z.object({
  name: z.string(),
  shortName: z.string().optional(),
  iconUrl: z.string().optional(),
  effect: z.string().optional(),
});

export const SubstituteArcanaSlotSchema = z.object({
  targetArticleId: z.string().optional(),
  targetSlug: z.string(),
  targetName: z.string(),
  targetIconUrl: z.string(),
  substitutes: z.array(
    z.object({
      articleId: z.string().optional(),
      slug: z.string(),
      name: z.string(),
      nameJp: z.string().optional(),
      rarity: z.string(),
      statTag: z.string().optional(),
      iconUrl: z.string(),
    })
  ),
});

export const StatPriorityMeterSchema = z.object({
  stat: z.string(),
  statJp: z.string().optional(),
  iconUrl: z.string(),
  segmentsOn: z.number(),
});

export const StrengthSectionSchema = z.object({
  level: z.string(),
  title: z.string(),
  imageUrl: z.string().optional(),
  paragraphs: z.array(z.string()),
});

export const SkillLevelEffectRowSchema = z.object({
  level: z.string(),
  effect: z.string(),
});

export const ResonanceMaterialItemSchema = z.object({
  name: z.string(),
  count: z.number(),
  iconUrl: z.string(),
});

export const ResonanceStageSchema = z.object({
  stage: z.number(),
  journeyBonus: z.string(),
  combatBonus: z.string(),
  materials: z.array(ResonanceMaterialItemSchema),
});

export const CharacterStaticDataSchema = z.object({
  nameJp: z.string().optional(),
  pool: z.string().optional(),
  attackType: z.string().optional(),
  attributeIconUrl: z.string().optional(),
  classIconUrl: z.string().optional(),
  illustUrl: z.string().optional(),
  arkPointUrl: z.string().optional(),
  pvpTier: TierRankSchema.optional(),
  pveTier: z.string().optional(),
  bossTier: z.string().optional(),
  appMediaTier: z.string().optional(),
  appMediaRerollTier: z.string().optional(),
  evalBullets: z.array(z.string()).optional(),
  partyTitle: z.string().optional(),
  recommendedParty: z
    .array(
      z.object({
        slug: z.string(),
        name: z.string(),
        nameJp: z.string().optional(),
        iconUrl: z.string().optional(),
        position: z.string(),
      })
    )
    .optional(),
  partyNotes: z.array(z.string()).optional(),
  arcanaDeckTitle: z.string().optional(),
  journeyTrainingPoints: z.array(z.string()).optional(),
  substituteArcana: z.array(SubstituteArcanaSlotSchema).optional(),
  statPriorityMeters: z.array(StatPriorityMeterSchema).optional(),
  strengthsSections: z.array(StrengthSectionSchema).optional(),
  journeyStats: z
    .object({
      power: z.number(),
      vitality: z.number(),
      endurance: z.number(),
      focus: z.number(),
      protection: z.number(),
    })
    .optional(),
  equipment: z
    .object({
      pveSets: z.array(z.string()),
      pvpSets: z.array(z.string()),
      pveSetDetails: z.array(EquipmentSetDetailSchema).optional(),
      pvpSetDetails: z.array(EquipmentSetDetailSchema).optional(),
      necklaceMain: z.string(),
      necklaceIconUrl: z.string().optional(),
      ringMain: z.string(),
      ringIconUrl: z.string().optional(),
      subStats: z.string(),
    })
    .optional(),
  hardPotential: z
    .object({
      name: z.string(),
      iconUrl: z.string().optional(),
      effect: z.string(),
    })
    .optional(),
  dupeRating: z.string().optional(),
  dupeSummary: z.string().optional(),
  limitBreaks: z
    .array(
      z.object({
        stage: z.string(),
        effect: z.string(),
      })
    )
    .optional(),
  skillPriority: z
    .array(
      z.object({
        skillType: z.string(),
        priority: z.string(),
        recLevel: z.string(),
      })
    )
    .optional(),
  skillLevelProgression: z
    .object({
      basic: z.array(SkillLevelEffectRowSchema),
      special: z.array(SkillLevelEffectRowSchema),
      ultimate: z.array(SkillLevelEffectRowSchema),
    })
    .optional(),
  preAwakeningSkills: z.array(CharacterSkillSchema).optional(),
  curio: z
    .object({
      name: z.string(),
      iconUrl: z.string(),
      rank: z.string(),
      rankNote: z.string().optional(),
      effect: z.string(),
    })
    .optional(),
  resonancePotentials: z
    .array(
      z.object({
        name: z.string(),
        effect: z.string(),
      })
    )
    .optional(),
  resonanceStages: z.array(ResonanceStageSchema).optional(),
  resonanceTotalMaterials: z.array(ResonanceMaterialItemSchema).optional(),
  gifts: z
    .array(
      z.object({
        name: z.string(),
        iconUrl: z.string(),
        tier: z.string().optional(),
        tierIconUrl: z.string().optional(),
      })
    )
    .optional(),
  profile: z
    .object({
      cv: z.string(),
      affiliation: z.string(),
      birthday: z.string(),
      height: z.string(),
      origin: z.string(),
      obtain: z.string(),
      bio: z.string(),
    })
    .optional(),
});
export type CharacterStaticData = z.infer<typeof CharacterStaticDataSchema>;

export const CharacterEntitySchema = z.object({
  id: z.number(),
  gameSlug: z.string().min(1),
  slug: z.string().min(1),
  name: z.string().min(1),
  title: z.string(),
  rarity: z.string().min(1),
  element: z.string().min(1),
  role: z.string().min(1),
  imageUrl: z.string().url(),
  overallTier: TierRankSchema,
  rerollTier: TierRankSchema,
  score: z.number().min(0).max(10),
  summary: z.string(),
  recommendedDupes: z.string(),
  baseStats: CharacterStatsSchema,
  skills: z.array(CharacterSkillSchema),
  bestArcanaSlugs: z.array(z.string()),
  staticData: CharacterStaticDataSchema.optional(),
});
export type CharacterEntity = z.infer<typeof CharacterEntitySchema>;

export const ArcanaJourneyEventSchema = z.object({
  eventTitle: z.string(),
  choices: z.array(
    z.object({
      choice: z.string(),
      outcomes: z.array(z.string()),
    })
  ),
});

export const ArcanaStaticDataSchema = z.object({
  nameJp: z.string().optional(),
  cardArtUrl: z.string().optional(),
  statTag: z.string().optional(),
  statTagIconUrl: z.string().optional(),
  characterName: z.string().optional(),
  characterIconUrl: z.string().optional(),
  statBonusType: z.string().optional(),
  classBonus: z.string().optional(),
  potentials: z
    .array(
      z.object({
        name: z.string(),
        effect: z.string(),
      })
    )
    .optional(),
  uniqueEffect: z
    .object({
      name: z.string(),
      effect: z.string(),
      unlockLevel: z.string().optional(),
    })
    .optional(),
  supportBonuses: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .optional(),
  journeyEvents: z.array(ArcanaJourneyEventSchema).optional(),
  evalBullets: z.array(z.string()).optional(),
  appMediaTier: z.string().optional(),
  rerollTier: z.string().optional(),
});
export type ArcanaStaticData = z.infer<typeof ArcanaStaticDataSchema>;

export const ArcanaEntitySchema = z.object({
  id: z.number(),
  gameSlug: z.string().min(1),
  slug: z.string().min(1),
  name: z.string().min(1),
  rarity: z.string().min(1),
  category: z.string().min(1),
  subType: z.string().min(1),
  imageUrl: z.string().url(),
  tier: TierRankSchema,
  score: z.number().min(0).max(10),
  effectSummary: z.string(),
  stats: z.record(z.string(), z.union([z.string(), z.number()])),
  bestHolderSlugs: z.array(z.string()),
  staticData: ArcanaStaticDataSchema.optional(),
});
export type ArcanaEntity = z.infer<typeof ArcanaEntitySchema>;

export const BannerEntitySchema = z.object({
  id: z.number(),
  gameSlug: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1),
  bannerType: z.string().min(1),
  imageUrl: z.string().url(),
  periodLabel: z.string().min(1),
  verdict: z.string().min(1),
  reasoning: z.string().min(1),
  featuredCharacterSlugs: z.array(z.string()),
});
export type BannerEntity = z.infer<typeof BannerEntitySchema>;

export const GameConfigEntitySchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  subtitle: z.string().min(1),
  patchVersion: z.string().min(1),
  serverStatus: z.string().min(1),
  iconUrl: z.string().url(),
  bannerUrl: z.string().url(),
  elementsConfig: z.array(ElementOptionSchema),
  rolesConfig: z.array(RoleOptionSchema),
  shortcutsConfig: z.array(ShortcutItemSchema),
});
export type GameConfigEntity = z.infer<typeof GameConfigEntitySchema>;

export interface GameWikiDataset {
  game: GameConfigEntity;
  characters: CharacterEntity[];
  arcana: ArcanaEntity[];
  banners: BannerEntity[];
}
