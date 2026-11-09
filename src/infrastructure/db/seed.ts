import { db } from './client';
import { gamesTable, charactersTable, arcanaTable, bannersTable } from './schema';
import {
  STAR_SAVIOR_GAME_SEED,
  STAR_SAVIOR_CHARACTERS_SEED,
  STAR_SAVIOR_ARCANA_SEED,
  STAR_SAVIOR_BANNERS_SEED,
} from './seed-data';
import { eq } from 'drizzle-orm';

export async function seedStarSaviorDatabase() {
  // 1. Upsert Game Config
  await db
    .insert(gamesTable)
    .values(STAR_SAVIOR_GAME_SEED)
    .onConflictDoUpdate({
      target: gamesTable.slug,
      set: {
        name: STAR_SAVIOR_GAME_SEED.name,
        subtitle: STAR_SAVIOR_GAME_SEED.subtitle,
        patchVersion: STAR_SAVIOR_GAME_SEED.patchVersion,
        serverStatus: STAR_SAVIOR_GAME_SEED.serverStatus,
        iconUrl: STAR_SAVIOR_GAME_SEED.iconUrl,
        bannerUrl: STAR_SAVIOR_GAME_SEED.bannerUrl,
        elementsConfig: STAR_SAVIOR_GAME_SEED.elementsConfig,
        rolesConfig: STAR_SAVIOR_GAME_SEED.rolesConfig,
        shortcutsConfig: STAR_SAVIOR_GAME_SEED.shortcutsConfig,
        updatedAt: new Date(),
      },
    });

  // 2. Replace Characters, Arcana, and Banners for clean idempotency
  await db.delete(charactersTable).where(eq(charactersTable.gameSlug, 'starsavior'));
  await db.delete(arcanaTable).where(eq(arcanaTable.gameSlug, 'starsavior'));
  await db.delete(bannersTable).where(eq(bannersTable.gameSlug, 'starsavior'));

  await db.insert(charactersTable).values(STAR_SAVIOR_CHARACTERS_SEED);
  await db.insert(arcanaTable).values(STAR_SAVIOR_ARCANA_SEED);
  await db.insert(bannersTable).values(STAR_SAVIOR_BANNERS_SEED);

  return {
    game: STAR_SAVIOR_GAME_SEED.slug,
    charactersSeeded: STAR_SAVIOR_CHARACTERS_SEED.length,
    arcanaSeeded: STAR_SAVIOR_ARCANA_SEED.length,
    bannersSeeded: STAR_SAVIOR_BANNERS_SEED.length,
  };
}

if (process.argv[1]?.endsWith('seed.ts')) {
  seedStarSaviorDatabase()
    .then((res) => {
      console.log('Neon PostgreSQL Seed Complete:', res);
      process.exit(0);
    })
    .catch((err) => {
      console.error('Seed failed:', err);
      process.exit(1);
    });
}
