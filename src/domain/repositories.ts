import type {
  GameWikiDataset,
  StarSaviorGuideArticle,
  StarSaviorRankingGroups,
  HomePortalData,
  VotesSnapshot,
  CastVoteResult,
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
