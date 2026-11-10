import {
  pgTable,
  serial,
  text,
  numeric,
  jsonb,
  timestamp,
  unique,
  index,
} from 'drizzle-orm/pg-core';
import type {
  ElementOption,
  RoleOption,
  ShortcutItem,
  CharacterStats,
  CharacterSkill,
  CharacterStaticData,
  ArcanaStaticData,
} from '../../domain/schemas';

export const gamesTable = pgTable('games', {
  slug: text('slug').primaryKey(),
  name: text('name').notNull(),
  subtitle: text('subtitle').notNull(),
  patchVersion: text('patch_version').notNull(),
  serverStatus: text('server_status').notNull(),
  iconUrl: text('icon_url').notNull(),
  bannerUrl: text('banner_url').notNull(),
  elementsConfig: jsonb('elements_config').$type<ElementOption[]>().notNull(),
  rolesConfig: jsonb('roles_config').$type<RoleOption[]>().notNull(),
  shortcutsConfig: jsonb('shortcuts_config').$type<ShortcutItem[]>().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const charactersTable = pgTable(
  'characters',
  {
    id: serial('id').primaryKey(),
    gameSlug: text('game_slug')
      .notNull()
      .references(() => gamesTable.slug, { onDelete: 'cascade' }),
    slug: text('slug').notNull(),
    name: text('name').notNull(),
    title: text('title').notNull().default(''),
    rarity: text('rarity').notNull().default('SSR'),
    element: text('element').notNull(),
    role: text('role').notNull(),
    imageUrl: text('image_url').notNull(),
    overallTier: text('overall_tier').notNull().default('S'),
    rerollTier: text('reroll_tier').notNull().default('S'),
    score: numeric('score', { precision: 3, scale: 1 }).notNull().default('9.0'),
    summary: text('summary').notNull().default(''),
    recommendedDupes: text('recommended_dupes').notNull().default('0 Dupes (Base)'),
    baseStats: jsonb('base_stats').$type<CharacterStats>().notNull(),
    skills: jsonb('skills').$type<CharacterSkill[]>().notNull(),
    bestArcanaSlugs: jsonb('best_arcana_slugs').$type<string[]>().notNull(),
    staticData: jsonb('static_data').$type<CharacterStaticData>().default({}).notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [unique('characters_game_slug_slug_unique').on(t.gameSlug, t.slug)]
);

export const arcanaTable = pgTable(
  'arcana',
  {
    id: serial('id').primaryKey(),
    gameSlug: text('game_slug')
      .notNull()
      .references(() => gamesTable.slug, { onDelete: 'cascade' }),
    slug: text('slug').notNull(),
    name: text('name').notNull(),
    rarity: text('rarity').notNull().default('SSR'),
    category: text('category').notNull().default('SSR Arcana'),
    subType: text('sub_type').notNull().default('Universal'),
    imageUrl: text('image_url').notNull(),
    tier: text('tier').notNull().default('S'),
    score: numeric('score', { precision: 3, scale: 1 }).notNull().default('9.0'),
    effectSummary: text('effect_summary').notNull().default(''),
    stats: jsonb('stats').$type<Record<string, string | number>>().notNull(),
    bestHolderSlugs: jsonb('best_holder_slugs').$type<string[]>().notNull(),
    staticData: jsonb('static_data').$type<ArcanaStaticData>().default({}).notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [unique('arcana_game_slug_slug_unique').on(t.gameSlug, t.slug)]
);

export const bannersTable = pgTable(
  'banners',
  {
    id: serial('id').primaryKey(),
    gameSlug: text('game_slug')
      .notNull()
      .references(() => gamesTable.slug, { onDelete: 'cascade' }),
    slug: text('slug').notNull(),
    title: text('title').notNull(),
    bannerType: text('banner_type').notNull(),
    imageUrl: text('image_url').notNull(),
    periodLabel: text('period_label').notNull(),
    verdict: text('verdict').notNull(),
    reasoning: text('reasoning').notNull(),
    featuredCharacterSlugs: jsonb('featured_character_slugs').$type<string[]>().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [unique('banners_game_slug_slug_unique').on(t.gameSlug, t.slug)]
);

export const ipVotesTable = pgTable(
  'ip_votes',
  {
    id: serial('id').primaryKey(),
    scope: text('scope').notNull(),
    voteLockKey: text('vote_lock_key').notNull(),
    targetId: text('target_id').notNull(),
    ipHash: text('ip_hash').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    unique('ip_votes_lock_ip_unique').on(t.voteLockKey, t.ipHash),
    index('ip_votes_scope_idx').on(t.scope),
  ]
);
