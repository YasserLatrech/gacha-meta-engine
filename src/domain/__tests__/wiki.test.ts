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
    }
  });
});
