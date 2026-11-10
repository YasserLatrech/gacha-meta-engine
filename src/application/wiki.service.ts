import { unstable_cache } from 'next/cache';
import { eq, desc } from 'drizzle-orm';
import { db } from '../infrastructure/db/client';
import {
  gamesTable,
  charactersTable,
  arcanaTable,
  bannersTable,
} from '../infrastructure/db/schema';
import {
  STAR_SAVIOR_GAME_SEED,
  STAR_SAVIOR_CHARACTERS_SEED,
  STAR_SAVIOR_ARCANA_SEED,
  STAR_SAVIOR_BANNERS_SEED,
} from '../infrastructure/db/seed-data';
import type {
  GameWikiDataset,
  CharacterEntity,
  ArcanaEntity,
  BannerEntity,
  TierRank,
} from '../domain/schemas';

function toTierRank(val: string): TierRank {
  if (val === 'SS' || val === 'S' || val === 'A' || val === 'B') return val;
  return 'S';
}

export async function fetchGameWikiFromDb(gameSlug: string = 'starsavior'): Promise<GameWikiDataset> {
  try {
    const [gameRow] = await db
      .select()
      .from(gamesTable)
      .where(eq(gamesTable.slug, gameSlug))
      .limit(1);

    if (!gameRow) {
      throw new Error(`Game ${gameSlug} not found in Neon DB`);
    }

    const [charRows, arcanaRows, bannerRows] = await Promise.all([
      db
        .select()
        .from(charactersTable)
        .where(eq(charactersTable.gameSlug, gameSlug))
        .orderBy(desc(charactersTable.score)),
      db
        .select()
        .from(arcanaTable)
        .where(eq(arcanaTable.gameSlug, gameSlug))
        .orderBy(desc(arcanaTable.score)),
      db
        .select()
        .from(bannersTable)
        .where(eq(bannersTable.gameSlug, gameSlug)),
    ]);

    const characters: CharacterEntity[] = charRows.map((c) => ({
      id: c.id,
      gameSlug: c.gameSlug,
      slug: c.slug,
      name: c.name,
      title: c.title,
      rarity: c.rarity,
      element: c.element,
      role: c.role,
      imageUrl: c.imageUrl,
      overallTier: toTierRank(c.overallTier),
      rerollTier: toTierRank(c.rerollTier),
      score: Number(c.score),
      summary: c.summary,
      recommendedDupes: c.recommendedDupes,
      baseStats: c.baseStats,
      skills: c.skills,
      bestArcanaSlugs: c.bestArcanaSlugs,
      staticData: c.staticData,
    }));

    const arcana: ArcanaEntity[] = arcanaRows.map((a) => ({
      id: a.id,
      gameSlug: a.gameSlug,
      slug: a.slug,
      name: a.name,
      rarity: a.rarity,
      category: a.category,
      subType: a.subType,
      imageUrl: a.imageUrl,
      tier: toTierRank(a.tier),
      score: Number(a.score),
      effectSummary: a.effectSummary,
      stats: a.stats,
      bestHolderSlugs: a.bestHolderSlugs,
      staticData: a.staticData,
    }));

    const banners: BannerEntity[] = bannerRows.map((b) => ({
      id: b.id,
      gameSlug: b.gameSlug,
      slug: b.slug,
      title: b.title,
      bannerType: b.bannerType,
      imageUrl: b.imageUrl,
      periodLabel: b.periodLabel,
      verdict: b.verdict,
      reasoning: b.reasoning,
      featuredCharacterSlugs: b.featuredCharacterSlugs,
    }));

    return {
      game: {
        slug: gameRow.slug,
        name: gameRow.name,
        subtitle: gameRow.subtitle,
        patchVersion: gameRow.patchVersion,
        serverStatus: gameRow.serverStatus,
        iconUrl: gameRow.iconUrl,
        bannerUrl: gameRow.bannerUrl,
        elementsConfig: gameRow.elementsConfig,
        rolesConfig: gameRow.rolesConfig,
        shortcutsConfig: gameRow.shortcutsConfig,
      },
      characters,
      arcana,
      banners,
    };
  } catch {
    return {
      game: STAR_SAVIOR_GAME_SEED,
      characters: STAR_SAVIOR_CHARACTERS_SEED.map((c, idx) => ({
        id: idx + 1,
        ...c,
        overallTier: toTierRank(c.overallTier),
        rerollTier: toTierRank(c.rerollTier),
        score: Number(c.score),
        staticData: {
          ...c.staticData,
          pvpTier: toTierRank(c.staticData.pvpTier),
        },
      })),
      arcana: STAR_SAVIOR_ARCANA_SEED.map((a, idx) => ({
        id: idx + 1,
        ...a,
        tier: toTierRank(a.tier),
        score: Number(a.score),
      })),
      banners: STAR_SAVIOR_BANNERS_SEED.map((b, idx) => ({
        id: idx + 1,
        ...b,
      })),
    };
  }
}

export const CHARACTER_SLUG_ALIASES: Record<string, string> = {
  charlotte: 'charles',
  'bunnygirl-charlotte': 'bunny-charles',
  'bunnygirl-claire': 'bunny-claire',
  'bunnygirl-scarlet': 'bunny-scarlet',
  'asherah-waltz-of-starlight': 'dress-asherah',
  'carmen-eternal-promise': 'bride-carmen',
  'epindel-blessing-in-bloom': 'bride-epindel',
  'frey-noble-princess': 'bunny-frey',
  'luna-summer-starlight': 'swimsuit-luna',
  'smile-sunshine-cat': 'swimsuit-smile',
  'bell-rhys': 'bell-lease',
  'yoo-mina': 'yanagi-mina',
  rosaria: 'rosalia',
  haydee: 'ede',
  lugh: 'lu',
  kyra: 'kira',
  lyn: 'rin',
  tyria: 'tilia',
  cristelle: 'christel',
  besta: 'vesta',
  annah: 'anna',
  vera: 'bella',
  emilly: 'emily',
};

export function resolveCharacterSlug(slug: string): string {
  const normalized = slug.trim().toLowerCase();
  return CHARACTER_SLUG_ALIASES[normalized] ?? normalized;
}

export const getStarSaviorWikiData = unstable_cache(
  async () => fetchGameWikiFromDb('starsavior'),
  ['starsavior-wiki-dataset-v6'],
  { revalidate: 300, tags: ['starsavior-wiki'] }
);

export const getStarSaviorDataset = getStarSaviorWikiData;
