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
  spd: z.number(),
  atk: z.number(),
  def: z.number(),
  crit: z.number(),
});
export type CharacterStats = z.infer<typeof CharacterStatsSchema>;

export const CharacterSkillSchema = z.object({
  name: z.string().min(1),
  type: z.string().min(1),
  spOrEnergyCost: z.string().min(1),
  multiplierSummary: z.string().min(1),
  exactDescription: z.string().min(1),
});
export type CharacterSkill = z.infer<typeof CharacterSkillSchema>;

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
});
export type CharacterEntity = z.infer<typeof CharacterEntitySchema>;

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
