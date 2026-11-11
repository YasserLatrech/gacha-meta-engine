import type { IPortalRepository } from '../domain/repositories';
import type { HomePortalData } from '../domain/schemas';

export interface PortalService {
  getHomePortalData: () => HomePortalData;
}

export function createPortalService(repository: IPortalRepository): PortalService {
  return {
    getHomePortalData: () => repository.getHomePortalData(),
  };
}
