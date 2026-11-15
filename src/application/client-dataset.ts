import type { CharacterEntity, CharacterStaticData, GameWikiDataset } from '@/domain/schemas';

interface CharacterStaticWhitelist {
  keepAttackType?: boolean;
  keepEvalBullets?: boolean;
  keepRerollTier?: boolean;
  keepPool?: boolean;
  keepJourneyStats?: boolean;
  keepProfile?: boolean;
  keepSummary?: boolean;
}

/**
 * Strips heavy skills, lore, resonance, and curio subgraphs before serializing CharacterEntity
 * across RSC -> Client Component boundaries while preserving UI-required fields.
 */
function toSlimClientCharacter(
  c: CharacterEntity,
  opts: CharacterStaticWhitelist
): CharacterEntity {
  const sd = c.staticData;
  const slimStatic: CharacterStaticData | undefined = sd
    ? {
        appMediaTier: sd.appMediaTier,
        attributeIconUrl: sd.attributeIconUrl,
        classIconUrl: sd.classIconUrl,
        ...(opts.keepAttackType && sd.attackType ? { attackType: sd.attackType } : {}),
        ...(opts.keepEvalBullets && sd.evalBullets ? { evalBullets: sd.evalBullets } : {}),
        ...(opts.keepRerollTier && sd.appMediaRerollTier
          ? { appMediaRerollTier: sd.appMediaRerollTier }
          : {}),
        ...(opts.keepPool && sd.pool ? { pool: sd.pool } : {}),
        ...(opts.keepJourneyStats && sd.journeyStats ? { journeyStats: sd.journeyStats } : {}),
        ...(opts.keepProfile && sd.profile ? { profile: sd.profile } : {}),
      }
    : undefined;

  return {
    ...c,
    summary: opts.keepSummary ? c.summary : '',
    recommendedDupes: '',
    skills: [],
    bestArcanaSlugs: [],
    staticData: slimStatic,
  };
}

/** Slim dataset DTO for `/starsavior/tier-list`: omits guides/arcana/skills (~1.6 MB savings). */
export function toTierListClientDataset(dataset: GameWikiDataset): GameWikiDataset {
  return {
    game: dataset.game,
    characters: dataset.characters.map((c) =>
      toSlimClientCharacter(c, {
        keepAttackType: true,
        keepEvalBullets: true,
        keepSummary: true,
      })
    ),
    arcana: [],
    banners: [],
  };
}

/** Slim dataset DTO for `/starsavior/arcana`: omits heavy character kits while keeping footer icons. */
export function toArcanaClientDataset(dataset: GameWikiDataset): GameWikiDataset {
  return {
    game: dataset.game,
    characters: dataset.characters.map((c) => toSlimClientCharacter(c, {})),
    arcana: dataset.arcana,
    banners: [],
  };
}

/** Slim dataset DTO for `/starsavior/characters`: omits arcana & skills while keeping stats/CV. */
export function toCharacterDbClientDataset(dataset: GameWikiDataset): GameWikiDataset {
  return {
    game: dataset.game,
    characters: dataset.characters.map((c) =>
      toSlimClientCharacter(c, {
        keepAttackType: true,
        keepRerollTier: true,
        keepPool: true,
        keepJourneyStats: true,
        keepProfile: true,
      })
    ),
    arcana: [],
    banners: [],
  };
}
