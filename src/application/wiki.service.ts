import { unstable_cache } from 'next/cache';
import type { IWikiRepository } from '../domain/repositories';
import type {
  GameWikiDataset,
  StarSaviorGuideArticle,
  StarSaviorRankingGroups,
} from '../domain/schemas';

export const CHARACTER_SLUG_ALIASES: Readonly<Record<string, string>> = Object.freeze({
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
});

export function resolveCharacterSlug(slug: string): string {
  const normalized = slug.trim().toLowerCase();
  return CHARACTER_SLUG_ALIASES[normalized] ?? normalized;
}

export interface WikiService {
  getStarSaviorWikiData: () => Promise<GameWikiDataset>;
  getStarSaviorDataset: () => Promise<GameWikiDataset>;
  getAllCharacterSlugs: () => ReadonlyArray<string>;
  getAllStarSaviorGuides: () => ReadonlyArray<StarSaviorGuideArticle>;
  getStarSaviorGuideBySlug: (slug: string) => StarSaviorGuideArticle | undefined;
  getStarSaviorRankingGroups: () => StarSaviorRankingGroups;
}

export function createWikiService(repository: IWikiRepository): WikiService {
  const cachedFetch = unstable_cache(
    async () => repository.getGameWikiDataset('starsavior'),
    ['starsavior-wiki-dataset-v7'],
    { revalidate: 300, tags: ['starsavior-wiki'] }
  );

  return {
    getStarSaviorWikiData: cachedFetch,
    getStarSaviorDataset: cachedFetch,
    getAllCharacterSlugs: () => repository.getAllCharacterSlugs(),
    getAllStarSaviorGuides: () => repository.getAllGuides(),
    getStarSaviorGuideBySlug: (slug: string) => repository.getGuideBySlug(slug.trim().toLowerCase()),
    getStarSaviorRankingGroups: () => repository.getRankingGroups(),
  };
}
