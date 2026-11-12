import { APPMEDIA_HOME_PORTAL_DATA } from '../db/appmedia-home-data';
import type { IPortalRepository } from '../../domain/repositories';
import type { HomePortalData } from '../../domain/schemas';
import { buildCuratedStrategyWikiRoadmap } from '../../domain/wiki-roadmap';

export class StaticPortalRepository implements IPortalRepository {
  public getHomePortalData(): HomePortalData {
    return {
      ...APPMEDIA_HOME_PORTAL_DATA,
      strategyWikis: buildCuratedStrategyWikiRoadmap(
        APPMEDIA_HOME_PORTAL_DATA.strategyWikis,
        APPMEDIA_HOME_PORTAL_DATA.upcomingGames
      ),
    };
  }
}
