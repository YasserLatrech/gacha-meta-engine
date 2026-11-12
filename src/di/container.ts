import { NeonWikiRepository } from '../infrastructure/repositories/wiki.repository';
import { NeonVoteRepository } from '../infrastructure/repositories/vote.repository';
import { NeonAnalyticsRepository } from '../infrastructure/repositories/analytics.repository';
import { StaticPortalRepository } from '../infrastructure/repositories/portal.repository';
import { createWikiService, resolveCharacterSlug } from '../application/wiki.service';
import { createVoteService } from '../application/vote.service';
import { createAnalyticsService } from '../application/analytics.service';
import { createPortalService } from '../application/portal.service';
import { buildGlobalSearchIndex } from '../domain/search-index';
import type { GameWikiDataset, GlobalSearchItem } from '../domain/schemas';

const wikiRepository = new NeonWikiRepository();
const voteRepository = new NeonVoteRepository();
const analyticsRepository = new NeonAnalyticsRepository();
const portalRepository = new StaticPortalRepository();

export const wikiService = createWikiService(wikiRepository);
export const voteService = createVoteService(voteRepository);
export const analyticsService = createAnalyticsService(analyticsRepository);
export const portalService = createPortalService(portalRepository);

export const getStarSaviorWikiData = wikiService.getStarSaviorWikiData;
export const getStarSaviorDataset = wikiService.getStarSaviorDataset;
export const getAllCharacterSlugs = wikiService.getAllCharacterSlugs;
export const getAllStarSaviorGuides = wikiService.getAllStarSaviorGuides;
export const getStarSaviorGuideBySlug = wikiService.getStarSaviorGuideBySlug;
export const getStarSaviorRankingGroups = wikiService.getStarSaviorRankingGroups;
export const getHomePortalData = portalService.getHomePortalData;

export function buildSearchItemsFromDataset(dataset: GameWikiDataset): GlobalSearchItem[] {
  return buildGlobalSearchIndex(dataset, getAllStarSaviorGuides(), getHomePortalData());
}

export { resolveCharacterSlug };
