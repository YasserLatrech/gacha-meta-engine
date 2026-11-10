import fs from 'node:fs';
import path from 'node:path';
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
import {
  extractClientIp,
  normalizeIp,
  hashClientIp,
  castVoteInMemory,
  checkVoteRateLimit,
  resetMemoryVotesForTests,
  CastVoteBodySchema,
} from '../../application/vote.service';
import { APPMEDIA_HOME_PORTAL_DATA } from '../../infrastructure/db/appmedia-home-data';

const CJK_REGEX = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f\uac00-\ud7af]/;

describe('Star Savior AppMedia-Style Wiki Domain & Seed Verification', () => {
  it('validates game config, 5 elements, 6 classes, and 4 shortcut cards', () => {
    const parsed = GameConfigEntitySchema.parse(STAR_SAVIOR_GAME_SEED);
    expect(parsed.slug).toBe('starsavior');
    expect(parsed.elementsConfig).toHaveLength(5);
    expect(parsed.rolesConfig).toHaveLength(6);
    expect(parsed.shortcutsConfig).toHaveLength(4);
  });

  it('validates all 57 Star Savior characters (49 SSR + 8 SR) with strict Zod schemas and 0 CJK in English fields', () => {
    expect(STAR_SAVIOR_CHARACTERS_SEED.length).toBe(57);
    const ssrCount = STAR_SAVIOR_CHARACTERS_SEED.filter((c) => c.rarity === 'SSR').length;
    const srCount = STAR_SAVIOR_CHARACTERS_SEED.filter((c) => c.rarity === 'SR').length;
    expect(ssrCount).toBe(49);
    expect(srCount).toBe(8);

    for (const [idx, c] of STAR_SAVIOR_CHARACTERS_SEED.entries()) {
      const entity = CharacterEntitySchema.parse({
        id: idx + 1,
        ...c,
        score: Number(c.score),
      });
      expect(CJK_REGEX.test(entity.name)).toBe(false);
      expect(CJK_REGEX.test(entity.summary)).toBe(false);
      for (const sk of entity.skills) {
        expect(CJK_REGEX.test(sk.name)).toBe(false);
        expect(CJK_REGEX.test(sk.exactDescription)).toBe(false);
      }
      expect(['SS', 'S', 'A', 'B']).toContain(entity.overallTier);
      expect(['SS', 'S', 'A', 'B']).toContain(entity.rerollTier);
    }
  });

  it('validates all 83 real Arcana cards (48 SSR + 15 SR + 20 R) and 3 banners with 0 CJK in English fields', () => {
    expect(STAR_SAVIOR_ARCANA_SEED.length).toBe(83);
    expect(STAR_SAVIOR_ARCANA_SEED.filter((a) => a.rarity === 'SSR').length).toBe(48);
    expect(STAR_SAVIOR_ARCANA_SEED.filter((a) => a.rarity === 'SR').length).toBe(15);
    expect(STAR_SAVIOR_ARCANA_SEED.filter((a) => a.rarity === 'R').length).toBe(20);
    expect(STAR_SAVIOR_BANNERS_SEED.length).toBe(3);

    for (const [idx, a] of STAR_SAVIOR_ARCANA_SEED.entries()) {
      const parsed = ArcanaEntitySchema.parse({
        id: idx + 1,
        ...a,
        score: Number(a.score),
      });
      expect(CJK_REGEX.test(parsed.name)).toBe(false);
      expect(CJK_REGEX.test(parsed.effectSummary)).toBe(false);
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
    expect(arcNames.has('Young Lady of Stranis')).toBe(true);

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

  it('enforces 100% AppMedia ground-truth accuracy, valid entity slugs, existing banner assets, and 0 CJK across all guides', () => {
    const charSlugs = new Set(STAR_SAVIOR_CHARACTERS_SEED.map((c) => c.slug));
    const arcSlugs = new Set(STAR_SAVIOR_ARCANA_SEED.map((a) => a.slug));
    const publicDir = path.resolve(__dirname, '../../../public');

    for (const guide of STAR_SAVIOR_GUIDES) {
      expect(CJK_REGEX.test(guide.title)).toBe(false);
      expect(CJK_REGEX.test(guide.lead)).toBe(false);

      if (guide.eyecatchSrc) {
        expect(fs.existsSync(path.join(publicDir, guide.eyecatchSrc))).toBe(true);
      }
      if (guide.buttonBannerSrc) {
        expect(fs.existsSync(path.join(publicDir, guide.buttonBannerSrc))).toBe(true);
      }

      for (const post of guide.boardSeedPosts ?? []) {
        expect(CJK_REGEX.test(post.body)).toBe(false);
      }

      for (const sec of guide.sections) {
        expect(CJK_REGEX.test(sec.heading)).toBe(false);
        for (const p of sec.paragraphs) expect(CJK_REGEX.test(p)).toBe(false);
        for (const b of sec.bullets ?? []) expect(CJK_REGEX.test(b)).toBe(false);
        if (sec.table) {
          for (const h of sec.table.headers) expect(CJK_REGEX.test(h)).toBe(false);
          for (const r of sec.table.rows) {
            for (const cell of r) expect(CJK_REGEX.test(cell)).toBe(false);
          }
        }
        for (const cs of sec.featuredCharSlugs ?? []) expect(charSlugs.has(cs)).toBe(true);
        for (const as of sec.featuredArcanaSlugs ?? []) expect(arcSlugs.has(as)).toBe(true);
      }
    }

    // Specific AppMedia Ground-Truth Invariants
    const promo = JSON.stringify(getStarSaviorGuideBySlug('promo-codes'));
    expect(promo).toContain('GIFTREADYANNIV1ST');
    expect(promo).toContain('ENDOFTHEJOURNEY');
    expect(promo).toContain('TOGETHER1STANNIV');
    expect(promo).not.toContain('STARSAVIORSTEAM');

    const livestream = JSON.stringify(getStarSaviorGuideBySlug('livestream-summary'));
    expect(livestream).toContain('Witch of Favoritism');
    expect(livestream).toContain('Guile');
    expect(livestream).toContain('Dress Lacy');
    expect(livestream).toContain('Dress Carnelia');

    const rates = JSON.stringify(getStarSaviorGuideBySlug('gacha-rates'));
    expect(rates).toContain('4.0%');
    expect(rates).toContain('43.0%');
    expect(rates).toContain('53.0%');
    expect(rates).toContain('200 Starlight Gems');

    const cross = getStarSaviorGuideBySlug('cross-attack');
    const crossFeatured = cross?.sections[0]?.featuredCharSlugs ?? [];
    expect(crossFeatured).toEqual(['dress-asherah', 'professor-m']);
    expect(crossFeatured).not.toContain('ede');

    const attr = JSON.stringify(getStarSaviorGuideBySlug('attribute-matchups'));
    expect(attr).toContain('Moon -> Sun -> Star -> Moon');

    const expectedCubeBosses: Array<[string, string]> = [
      ['cube-step-1', 'Carmen & Charlotte'],
      ['cube-step-2', 'Naru & Lugh'],
      ['cube-step-3', 'Marcille & Tanya'],
      ['cube-step-4', 'Lydia & Ceres'],
      ['cube-step-5', 'Asherah & Luna'],
      ['cube-extra-6', 'Bell Rhys & Emilly'],
      ['cube-extra-7', 'Clarissa & Dana'],
      ['cube-extra-8', 'Rin & Fei'],
    ];
    for (const [slug, bossPair] of expectedCubeBosses) {
      expect(getStarSaviorGuideBySlug(slug)?.title).toContain(bossPair);
    }
  });

  it('enforces 1-vote-per-IP across per-item (Upcoming Games) and single-choice (Community Poll) modes', () => {
    resetMemoryVotesForTests();

    // 1. IP normalization & HMAC hashing
    expect(normalizeIp('::1')).toBe('127.0.0.1');
    expect(normalizeIp('::ffff:203.0.113.42')).toBe('203.0.113.42');

    const headersA = new Headers({ 'x-forwarded-for': '203.0.113.42, 10.0.0.1' });
    const headersB = new Headers({ 'cf-connecting-ip': '198.51.100.77' });
    expect(extractClientIp(headersA)).toBe('203.0.113.42');
    expect(extractClientIp(headersB)).toBe('198.51.100.77');

    const ipHashA = hashClientIp('203.0.113.42');
    const ipHashAMapped = hashClientIp('::ffff:203.0.113.42');
    const ipHashB = hashClientIp('198.51.100.77');
    expect(ipHashA).toBe(ipHashAMapped);
    expect(ipHashA).not.toBe(ipHashB);

    // 2. Per-item mode (Upcoming Games Calendar): 1 vote per game per IP
    const up1 = castVoteInMemory({
      scope: 'upcoming-games',
      targetId: 'arknights-endfield',
      mode: 'per-item',
      ipHash: ipHashA,
    });
    expect(up1.ok).toBe(true);
    expect(up1.alreadyVoted).toBe(false);
    expect(up1.counts['arknights-endfield']).toBe(1);

    // Duplicate vote from same IP on same game -> rejected!
    const upDup = castVoteInMemory({
      scope: 'upcoming-games',
      targetId: 'arknights-endfield',
      mode: 'per-item',
      ipHash: ipHashA,
    });
    expect(upDup.ok).toBe(false);
    expect(upDup.alreadyVoted).toBe(true);
    expect(upDup.counts['arknights-endfield']).toBe(1);

    // Same IP voting on a DIFFERENT upcoming game -> allowed once!
    const upOtherGame = castVoteInMemory({
      scope: 'upcoming-games',
      targetId: 'azur-promilia',
      mode: 'per-item',
      ipHash: ipHashA,
    });
    expect(upOtherGame.ok).toBe(true);
    expect(upOtherGame.myVotes).toEqual(['arknights-endfield', 'azur-promilia']);

    // Different IP voting on arknights-endfield -> allowed!
    const upIpB = castVoteInMemory({
      scope: 'upcoming-games',
      targetId: 'arknights-endfield',
      mode: 'per-item',
      ipHash: ipHashB,
    });
    expect(upIpB.ok).toBe(true);
    expect(upIpB.counts['arknights-endfield']).toBe(2);

    // 3. Single-choice mode (Community Poll): 1 vote TOTAL per poll per IP
    const poll1 = castVoteInMemory({
      scope: 'poll:starsavior-strongest-char',
      targetId: 'tanya',
      mode: 'single-choice',
      ipHash: ipHashA,
    });
    expect(poll1.ok).toBe(true);
    expect(poll1.counts['tanya']).toBe(1);

    // Same IP trying to vote for ANOTHER character in the same poll -> blocked!
    const poll2 = castVoteInMemory({
      scope: 'poll:starsavior-strongest-char',
      targetId: 'amora',
      mode: 'single-choice',
      ipHash: ipHashA,
    });
    expect(poll2.ok).toBe(false);
    expect(poll2.alreadyVoted).toBe(true);
    expect(poll2.counts['tanya']).toBe(1);
    expect(poll2.counts['amora']).toBeUndefined();
    expect(poll2.myVotes).toEqual(['tanya']);

    // Different IP voting for amora -> allowed!
    const pollIpB = castVoteInMemory({
      scope: 'poll:starsavior-strongest-char',
      targetId: 'amora',
      mode: 'single-choice',
      ipHash: ipHashB,
    });
    expect(pollIpB.ok).toBe(true);
    expect(pollIpB.counts['tanya']).toBe(1);
    expect(pollIpB.counts['amora']).toBe(1);

    // 4. Sliding-window rate limit check (blocks on 21st request within 60s)
    const testLimiterHash = hashClientIp('192.0.2.99');
    for (let i = 0; i < 20; i++) {
      expect(checkVoteRateLimit(testLimiterHash, 1000 + i).allowed).toBe(true);
    }
    const blocked = checkVoteRateLimit(testLimiterHash, 2000);
    expect(blocked.allowed).toBe(false);
    expect(blocked.retryAfterSec).toBeGreaterThan(0);

    // 5. Validate EVERY real Upcoming Game ID, Poll Character Slug, and Comment ID against CastVoteBodySchema
    expect(APPMEDIA_HOME_PORTAL_DATA.upcomingGames.length).toBeGreaterThan(50);
    for (const game of APPMEDIA_HOME_PORTAL_DATA.upcomingGames) {
      const parsed = CastVoteBodySchema.safeParse({
        scope: 'upcoming-games',
        targetId: game.id,
        mode: 'per-item',
      });
      expect(parsed.success, `Upcoming game ID failed validation: ${game.id}`).toBe(true);
    }
    for (const char of STAR_SAVIOR_CHARACTERS_SEED) {
      expect(
        CastVoteBodySchema.safeParse({
          scope: 'poll:starsavior-strongest-char',
          targetId: char.slug,
          mode: 'single-choice',
        }).success
      ).toBe(true);
    }
    expect(
      CastVoteBodySchema.safeParse({
        scope: 'comment-likes',
        targetId: 'cmt-1794340000000',
        mode: 'per-item',
      }).success
    ).toBe(true);
  });
});
