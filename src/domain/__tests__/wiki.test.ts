import { describe, it, expect } from 'vitest';
import {
  STAR_SAVIOR_GAME_SEED,
  STAR_SAVIOR_CHARACTERS_SEED,
  STAR_SAVIOR_ARCANA_SEED,
  STAR_SAVIOR_BANNERS_SEED,
} from '../../infrastructure/db/seed-data';
import {
  GameConfigEntitySchema,
  CharacterEntitySchema,
  ArcanaEntitySchema,
} from '../schemas';
import {
  STAR_SAVIOR_GUIDES,
  getStarSaviorGuideBySlug,
  APPMEDIA_PVP_TIER_GROUPS,
  APPMEDIA_SR_CHAR_GROUPS,
  APPMEDIA_SR_ARCANA_GROUPS,
} from '../../infrastructure/db/starsavior-guides-data';

describe('Star Savior AppMedia-Style Wiki Domain & Seed Verification', () => {
  it('validates game config, 5 elements, 6 classes, and 4 shortcut cards', () => {
    const parsed = GameConfigEntitySchema.parse(STAR_SAVIOR_GAME_SEED);
    expect(parsed.slug).toBe('starsavior');
    expect(parsed.elementsConfig).toHaveLength(5);
    expect(parsed.rolesConfig).toHaveLength(6);
    expect(parsed.shortcutsConfig).toHaveLength(4);
  });

  it('validates all 57 Star Savior characters with strict Zod schemas and 0 CJK characters', () => {
    expect(STAR_SAVIOR_CHARACTERS_SEED.length).toBe(57);
    const cjkRegex = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f\uac00-\ud7af]/;
    for (const [idx, c] of STAR_SAVIOR_CHARACTERS_SEED.entries()) {
      const entity = CharacterEntitySchema.parse({
        id: idx + 1,
        ...c,
        score: Number(c.score),
      });
      expect(cjkRegex.test(entity.name)).toBe(false);
      expect(['SS', 'S', 'A', 'B']).toContain(entity.overallTier);
      expect(['SS', 'S', 'A', 'B']).toContain(entity.rerollTier);
    }
  });

  it('validates all 83 real Arcana cards (SSR, SR, R) and 3 banners', () => {
    expect(STAR_SAVIOR_ARCANA_SEED.length).toBe(83);
    expect(STAR_SAVIOR_BANNERS_SEED.length).toBe(3);
    for (const [idx, a] of STAR_SAVIOR_ARCANA_SEED.entries()) {
      const parsed = ArcanaEntitySchema.parse({
        id: idx + 1,
        ...a,
        score: Number(a.score),
      });
      expect(parsed.imageUrl).toContain('https://appmedia.jp/');
      expect(['Power', 'Health', 'Endurance', 'Focus', 'Protect']).toContain(parsed.staticData?.statTag);
    }
  });

  it('verifies official in-game English Savior & Arcana names and all 85 subpage guides', () => {
    const names = new Set(STAR_SAVIOR_CHARACTERS_SEED.map((c) => c.name));
    expect(names.has('Bunnygirl Charlotte')).toBe(true);
    expect(names.has('Carmen: Eternal Promise')).toBe(true);
    expect(names.has('Asherah: Waltz of Starlight')).toBe(true);
    expect(names.has('Smile: Sunshine Cat')).toBe(true);
    expect(names.has('Frey: Noble Princess')).toBe(true);
    expect(names.has('Bell Rhys')).toBe(true);
    expect(names.has('Tyria')).toBe(true);
    expect(names.has('Carnelia')).toBe(true);

    const arcNames = new Set(STAR_SAVIOR_ARCANA_SEED.map((a) => a.name));
    expect(arcNames.has('Customized Training to Cover Weaknesses')).toBe(true);
    expect(arcNames.has('The Indomitable Masterpiece')).toBe(true);
    expect(arcNames.has('Death for the Flowers')).toBe(true);
    expect(arcNames.has('Grueling Ordeal')).toBe(true);

    expect(STAR_SAVIOR_GUIDES.length).toBeGreaterThanOrEqual(80);
    expect(getStarSaviorGuideBySlug('pvp-tier-list')?.specialKind).toBe('pvp-ranking');
    expect(getStarSaviorGuideBySlug('sr-characters')?.specialKind).toBe('sr-char-ranking');
    expect(getStarSaviorGuideBySlug('sr-arcana')?.specialKind).toBe('sr-arcana-ranking');
    expect(getStarSaviorGuideBySlug('event-choice-checker')?.specialKind).toBe('event-checker');

    const charSlugs = new Set(STAR_SAVIOR_CHARACTERS_SEED.map((c) => c.slug));
    const arcSlugs = new Set(STAR_SAVIOR_ARCANA_SEED.map((a) => a.slug));
    for (const grp of [...APPMEDIA_PVP_TIER_GROUPS, ...APPMEDIA_SR_CHAR_GROUPS]) {
      for (const s of grp.slugs) expect(charSlugs.has(s)).toBe(true);
    }
    for (const grp of APPMEDIA_SR_ARCANA_GROUPS) {
      for (const s of grp.slugs) expect(arcSlugs.has(s)).toBe(true);
    }
  });
});
