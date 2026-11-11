import { NeonWikiRepository } from '../infrastructure/repositories/wiki.repository';
import { NeonVoteRepository } from '../infrastructure/repositories/vote.repository';
import { StaticPortalRepository } from '../infrastructure/repositories/portal.repository';
import { createWikiService, resolveCharacterSlug } from '../application/wiki.service';
import { createVoteService } from '../application/vote.service';
import { createPortalService } from '../application/portal.service';

const wikiRepository = new NeonWikiRepository();
const voteRepository = new NeonVoteRepository();
const portalRepository = new StaticPortalRepository();

export const wikiService = createWikiService(wikiRepository);
export const voteService = createVoteService(voteRepository);
export const portalService = createPortalService(portalRepository);

export const getStarSaviorWikiData = wikiService.getStarSaviorWikiData;
export const getStarSaviorDataset = wikiService.getStarSaviorDataset;
export const getAllCharacterSlugs = wikiService.getAllCharacterSlugs;
export const getAllStarSaviorGuides = wikiService.getAllStarSaviorGuides;
export const getStarSaviorGuideBySlug = wikiService.getStarSaviorGuideBySlug;
export const getStarSaviorRankingGroups = wikiService.getStarSaviorRankingGroups;
export const getHomePortalData = portalService.getHomePortalData;
export { resolveCharacterSlug };
