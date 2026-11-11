import { APPMEDIA_HOME_PORTAL_DATA } from '../db/appmedia-home-data';
import type { IPortalRepository } from '../../domain/repositories';
import type { HomePortalData } from '../../domain/schemas';

export class StaticPortalRepository implements IPortalRepository {
  public getHomePortalData(): HomePortalData {
    return APPMEDIA_HOME_PORTAL_DATA;
  }
}
