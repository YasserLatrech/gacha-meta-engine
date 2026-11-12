import { eq, desc } from 'drizzle-orm';
import { db } from '../db/client';
import {
  gamesTable,
  charactersTable,
  arcanaTable,
  bannersTable,
} from '../db/schema';
import {
  STAR_SAVIOR_GAME_SEED,
  STAR_SAVIOR_CHARACTERS_SEED,
  STAR_SAVIOR_ARCANA_SEED,
  STAR_SAVIOR_BANNERS_SEED,
} from '../db/seed-data';
import {
  STAR_SAVIOR_GUIDES,
  getStarSaviorGuideBySlug,
  APPMEDIA_PVP_TIER_GROUPS,
  APPMEDIA_SR_CHAR_GROUPS,
  APPMEDIA_SR_ARCANA_GROUPS,
} from '../db/starsavior-guides-data';
import type { IWikiRepository } from '../../domain/repositories';
import type {
  GameWikiDataset,
  CharacterEntity,
  ArcanaEntity,
  BannerEntity,
  TierRank,
  StarSaviorGuideArticle,
  StarSaviorRankingGroups,
} from '../../domain/schemas';

function toTierRank(val: string): TierRank {
  if (val === 'SS' || val === 'S' || val === 'A' || val === 'B') return val;
  return 'S';
}

interface L1CacheEntry {
  dataset: GameWikiDataset;
  expiresAt: number;
}

const L1_TTL_MS = 300_000;
const L1_MAX_ENTRIES = 8;

export class NeonWikiRepository implements IWikiRepository {
  private readonly l1Cache = new Map<string, L1CacheEntry>();
  private readonly inflight = new Map<string, Promise<GameWikiDataset>>();

  public async getGameWikiDataset(gameSlug: string = 'starsavior'): Promise<GameWikiDataset> {
    const now = Date.now();
    const cached = this.l1Cache.get(gameSlug);
    if (cached && cached.expiresAt > now) {
      return cached.dataset;
    }

    const existingPromise = this.inflight.get(gameSlug);
    if (existingPromise) {
      return existingPromise;
    }

    const fetchPromise = this.loadDatasetFromDbOrSeed(gameSlug)
      .then((dataset) => {
        if (this.l1Cache.size >= L1_MAX_ENTRIES) {
          const oldestKey = this.l1Cache.keys().next().value;
          if (typeof oldestKey === 'string') {
            this.l1Cache.delete(oldestKey);
          }
        }
        this.l1Cache.set(gameSlug, {
          dataset,
          expiresAt: Date.now() + L1_TTL_MS,
        });
        return dataset;
      })
      .finally(() => {
        this.inflight.delete(gameSlug);
      });

    this.inflight.set(gameSlug, fetchPromise);
    return fetchPromise;
  }

  public getAllCharacterSlugs(): ReadonlyArray<string> {
    return STAR_SAVIOR_CHARACTERS_SEED.map((c) => c.slug);
  }

  public getAllGuides(): ReadonlyArray<StarSaviorGuideArticle> {
    return STAR_SAVIOR_GUIDES;
  }

  public getGuideBySlug(slug: string): StarSaviorGuideArticle | undefined {
    return getStarSaviorGuideBySlug(slug);
  }

  public getRankingGroups(): StarSaviorRankingGroups {
    return {
      pvpGroups: APPMEDIA_PVP_TIER_GROUPS,
      srCharGroups: APPMEDIA_SR_CHAR_GROUPS,
      srArcanaGroups: APPMEDIA_SR_ARCANA_GROUPS,
    };
  }

  private async loadDatasetFromDbOrSeed(gameSlug: string): Promise<GameWikiDataset> {
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
}
