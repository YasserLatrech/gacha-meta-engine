import type {
  GameWikiDataset,
  StarSaviorGuideArticle,
  StarSaviorRankingGroups,
  HomePortalData,
  VotesSnapshot,
  CastVoteResult,
  AnalyticsSummary,
} from './schemas';

export interface IWikiRepository {
  getGameWikiDataset(gameSlug: string): Promise<GameWikiDataset>;
  getAllCharacterSlugs(): ReadonlyArray<string>;
  getAllGuides(): ReadonlyArray<StarSaviorGuideArticle>;
  getGuideBySlug(slug: string): StarSaviorGuideArticle | undefined;
  getRankingGroups(): StarSaviorRankingGroups;
}

export interface IVoteRepository {
  getSnapshot(scope: string, ipHash: string): Promise<VotesSnapshot>;
  castVote(input: {
    scope: string;
    voteLockKey: string;
    targetId: string;
    ipHash: string;
  }): Promise<CastVoteResult>;
  resetMemoryFallback(): void;
}

export interface IPortalRepository {
  getHomePortalData(): HomePortalData;
}

export interface IAnalyticsRepository {
  recordPageview(input: {
    dayUtc: string;
    path: string;
    visitorHash: string;
    referrerHost: string;
  }): Promise<{ ok: boolean; countedUnique: boolean }>;
  getSummary(days: number): Promise<AnalyticsSummary>;
  resetMemoryFallback(): void;
}
