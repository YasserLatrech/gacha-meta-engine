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
import {
  SITE_URL,
  buildHomePortalJsonLd,
  buildStarSaviorPortalJsonLd,
  buildStarSaviorHubJsonLd,
  buildCharacterMetadata,
  buildCharacterJsonLd,
  buildGuideMetadata,
  buildGuideJsonLd,
  serializeJsonLd,
} from '../../application/seo.service';
import {
  computeCountdownParts,
  computeElapsedParts,
  formatJstWallClock,
  parseReleasedLaunchIso,
  parseUpcomingReleaseIso,
} from '../jst-time';
import {
  BoundedSlidingWindowLimiter,
  readBoundedJsonBody,
  sanitizeJsonPayload,
  timingSafeVerifyBearerSecret,
} from '../../application/security.service';
import { RevalidateBodySchema } from '../schemas';
import { buildGlobalSearchIndex, queryGlobalSearchIndex } from '../search-index';
import {
  createAnalyticsService,
  isAutomatedCrawler,
  sanitizeAnalyticsPath,
  sanitizeReferrerHost,
} from '../../application/analytics.service';
import { InMemoryAnalyticsRepository } from '../../infrastructure/repositories/analytics.repository';
import { StaticPortalRepository } from '../../infrastructure/repositories/portal.repository';
import { buildCuratedStrategyWikiRoadmap } from '../wiki-roadmap';
import { computeScrollMetrics } from '../scroll-metrics';

const CJK_REGEX = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f\uac00-\ud7af]/;

describe('Star Savior AppMedia-Style Wiki Domain & Seed Verification', () => {
  it('validates game config, 5 elements, 6 classes, and 4 shortcut cards', () => {
    const parsed = GameConfigEntitySchema.parse(STAR_SAVIOR_GAME_SEED);
    expect(parsed.slug).toBe('starsavior');
    expect(parsed.elementsConfig).toHaveLength(5);
    expect(parsed.rolesConfig).toHaveLength(6);
    expect(parsed.shortcutsConfig).toHaveLength(4);
  });

  it('validates all 59 Star Savior characters (51 SSR + 8 SR) with strict Zod schemas and 0 CJK in English fields', () => {
    expect(STAR_SAVIOR_CHARACTERS_SEED.length).toBe(59);
    const ssrCount = STAR_SAVIOR_CHARACTERS_SEED.filter((c) => c.rarity === 'SSR').length;
    const srCount = STAR_SAVIOR_CHARACTERS_SEED.filter((c) => c.rarity === 'SR').length;
    expect(ssrCount).toBe(51);
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

  it('validates all 85 real Arcana cards (50 SSR + 15 SR + 20 R) and 5 banners with 0 CJK in English fields', () => {
    expect(STAR_SAVIOR_ARCANA_SEED.length).toBe(85);
    expect(STAR_SAVIOR_ARCANA_SEED.filter((a) => a.rarity === 'SSR').length).toBe(50);
    expect(STAR_SAVIOR_ARCANA_SEED.filter((a) => a.rarity === 'SR').length).toBe(15);
    expect(STAR_SAVIOR_ARCANA_SEED.filter((a) => a.rarity === 'R').length).toBe(20);
    expect(STAR_SAVIOR_BANNERS_SEED.length).toBe(5);

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
    expect(names.has('Witch of Favoritism')).toBe(true);
    expect(names.has('Guile')).toBe(true);

    const arcNames = new Set(STAR_SAVIOR_ARCANA_SEED.map((a) => a.name));
    expect(arcNames.has('Customized Training to Cover Weaknesses')).toBe(true);
    expect(arcNames.has('The Indomitable Masterpiece')).toBe(true);
    expect(arcNames.has('Death for the Flowers')).toBe(true);
    expect(arcNames.has('Grueling Ordeal')).toBe(true);
    expect(arcNames.has('Young Lady of Stranis')).toBe(true);
    expect(arcNames.has('Endless Dance')).toBe(true);
    expect(arcNames.has('Faded Dream')).toBe(true);

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
      targetId: 'VALORANT Mobile',
      mode: 'per-item',
      ipHash: ipHashA,
    });
    expect(up1.ok).toBe(true);
    expect(up1.alreadyVoted).toBe(false);
    expect(up1.counts['VALORANT Mobile']).toBe(1);

    // Duplicate vote from same IP on same game -> rejected!
    const upDup = castVoteInMemory({
      scope: 'upcoming-games',
      targetId: 'VALORANT Mobile',
      mode: 'per-item',
      ipHash: ipHashA,
    });
    expect(upDup.ok).toBe(false);
    expect(upDup.alreadyVoted).toBe(true);
    expect(upDup.counts['VALORANT Mobile']).toBe(1);

    // Same IP voting on a DIFFERENT upcoming game -> allowed once!
    const upOtherGame = castVoteInMemory({
      scope: 'upcoming-games',
      targetId: 'azur-promilia',
      mode: 'per-item',
      ipHash: ipHashA,
    });
    expect(upOtherGame.ok).toBe(true);
    expect(upOtherGame.myVotes).toEqual(['VALORANT Mobile', 'azur-promilia']);

    // Different IP voting on VALORANT Mobile -> allowed!
    const upIpB = castVoteInMemory({
      scope: 'upcoming-games',
      targetId: 'VALORANT Mobile',
      mode: 'per-item',
      ipHash: ipHashB,
    });
    expect(upIpB.ok).toBe(true);
    expect(upIpB.counts['VALORANT Mobile']).toBe(2);

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

  it('validates SEO & GEO compliance: unique canonical metadata, Schema.org JSON-LD graphs, XSS escaping, and llms.txt', () => {
    expect(SITE_URL).toMatch(/^https?:\/\//);

    // 1. Home JSON-LD graph
    const homeLd = buildHomePortalJsonLd();
    const homeGraph = homeLd['@graph'] as Array<Record<string, unknown>>;
    expect(homeGraph.some((n) => n['@type'] === 'Organization')).toBe(true);
    expect(homeGraph.some((n) => n['@type'] === 'WebSite')).toBe(true);
    expect(homeGraph.some((n) => n['@type'] === 'CollectionPage')).toBe(true);
    expect(homeGraph.some((n) => n['@type'] === 'ItemList')).toBe(true);

    // 2. Star Savior Portal JSON-LD (VideoGame + BreadcrumbList + FAQPage)
    const portalLd = buildStarSaviorPortalJsonLd('v2.4');
    const portalGraph = portalLd['@graph'] as Array<Record<string, unknown>>;
    expect(portalGraph.some((n) => n['@type'] === 'VideoGame')).toBe(true);
    expect(portalGraph.some((n) => n['@type'] === 'BreadcrumbList')).toBe(true);
    const faqNode = portalGraph.find((n) => n['@type'] === 'FAQPage');
    expect(faqNode).toBeDefined();
    expect((faqNode?.mainEntity as unknown[]).length).toBe(5);

    // 3. Character Metadata & JSON-LD
    const sampleChar = CharacterEntitySchema.parse({
      id: 1,
      ...STAR_SAVIOR_CHARACTERS_SEED[0],
      score: Number(STAR_SAVIOR_CHARACTERS_SEED[0].score),
    });
    const charMeta = buildCharacterMetadata(sampleChar);
    expect(String(charMeta.description).length).toBeLessThanOrEqual(160);
    expect(charMeta.alternates?.canonical).toContain(`/starsavior/characters/${sampleChar.slug}`);
    expect(charMeta.openGraph?.images).toBeDefined();

    const charLd = buildCharacterJsonLd(sampleChar);
    const charSerialized = serializeJsonLd(charLd);
    expect(charSerialized).toContain('"@type":"BreadcrumbList"');
    expect(charSerialized).toContain('"@type":"PropertyValue"');
    expect(charSerialized).not.toContain('</script>');

    // 4. XSS-safe JSON-LD serialization
    const unsafe = serializeJsonLd({ test: '</script><script>alert(1)</script>' });
    expect(unsafe).not.toContain('</script>');
    expect(unsafe).toContain('\\u003c/script>');

    // 5. Hub & Guide Metadata + JSON-LD
    const hubLd = buildStarSaviorHubJsonLd({
      title: 'Star Savior Tier List',
      description: 'Tier ranking of all 57 Saviors.',
      path: '/starsavior/tier-list',
      breadcrumbLabel: 'Tier List',
      image: '/banners/starsavior/eyecatch/rank_chars.webp',
      topCharacters: [sampleChar],
    });
    expect(serializeJsonLd(hubLd)).toContain('"@type":"ItemList"');

    const guide = STAR_SAVIOR_GUIDES[0];
    const guideMeta = buildGuideMetadata(guide);
    expect(String(guideMeta.description).length).toBeLessThanOrEqual(160);
    expect(guideMeta.alternates?.canonical).toContain(`/starsavior/guides/${guide.slug}`);
    expect(serializeJsonLd(buildGuideJsonLd(guide))).toContain('"@type":"Article"');

    // 6. Verify public/llms.txt exists and links core hubs
    const llmsPath = path.resolve(__dirname, '../../../public/llms.txt');
    expect(fs.existsSync(llmsPath)).toBe(true);
    const llmsContent = fs.readFileSync(llmsPath, 'utf8');
    expect(llmsContent).toContain('https://ascalon.fun/starsavior/tier-list');
    expect(llmsContent).toContain('https://ascalon.fun/starsavior/reroll');
    expect(llmsContent).toContain('https://ascalon.fun/starsavior/characters');
    expect(llmsContent).toContain('https://ascalon.fun/starsavior/arcana');
    expect(llmsContent).toContain('https://ascalon.fun/sitemap.xml');

    // 7. Verify JST real-time countdown & upcoming release parser
    const targetMs = Date.parse('2026-11-13T03:59:59+09:00');
    const nowMs = Date.parse('2026-11-11T09:00:00+09:00');
    const cd = computeCountdownParts(targetMs, nowMs);
    expect(cd.expired).toBe(false);
    expect(cd.days).toBe(1);
    expect(cd.hours).toBe(18);
    expect(cd.minutes).toBe(59);
    expect(cd.seconds).toBe(59);
    expect(computeCountdownParts(targetMs, targetMs + 1000).expired).toBe(true);

    const el = computeElapsedParts(Date.parse('2026-11-05T12:00:00+09:00'), nowMs);
    expect(el.days).toBe(5);
    expect(el.hours).toBe(21);

    expect(parseUpcomingReleaseIso('Nov 24, 2026', 'Upcoming')).toBe('2026-11-24T00:00:00+09:00');
    expect(parseUpcomingReleaseIso('Jan 15, 2027', 'Upcoming')).toBe('2027-01-15T00:00:00+09:00');
    expect(parseUpcomingReleaseIso('Released Nov 6, 2026', 'Released')).toBeNull();
    expect(parseUpcomingReleaseIso('Spring 2027', 'Upcoming')).toBeNull();

    // 8. Verify Released elapsed parser, JST wall clock, and 100% real Upcoming Calendar chronos
    expect(parseReleasedLaunchIso('Released Nov 6, 2026', 'Released')).toBe(
      '2026-11-06T00:00:00+09:00'
    );
    expect(parseReleasedLaunchIso('Nov 26, 2026', 'Upcoming')).toBeNull();
    expect(formatJstWallClock(Date.parse('2026-11-11T02:05:09Z'))).toBe(
      '2026/11/11 11:05:09 JST'
    );

    const publicDir = path.resolve(__dirname, '../../../public');
    let exactUpcomingChronos = 0;
    let exactReleasedChronos = 0;
    for (const g of APPMEDIA_HOME_PORTAL_DATA.upcomingGames) {
      expect(
        /^(Spring|Summer|Fall|H1)\s+2026$/i.test(g.releaseDate),
        `Stale past-season 2026 label on ${g.title}: ${g.releaseDate}`
      ).toBe(false);
      if (g.iconUrl.startsWith('/')) {
        expect(
          fs.existsSync(path.join(publicDir, g.iconUrl)),
          `Missing upcoming game icon asset: ${g.iconUrl}`
        ).toBe(true);
      }
      if (parseUpcomingReleaseIso(g.releaseDate, g.status)) exactUpcomingChronos++;
      if (parseReleasedLaunchIso(g.releaseDate, g.status)) exactReleasedChronos++;
    }
    expect(exactUpcomingChronos).toBeGreaterThanOrEqual(7);
    expect(exactReleasedChronos).toBeGreaterThanOrEqual(4);
  });

  it('enforces 100% strict Clean Architecture inward dependency rules and zero `any` across src/', () => {
    const srcRoot = path.resolve(__dirname, '../..');

    function collectSourceFiles(dir: string): string[] {
      const results: string[] = [];
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          results.push(...collectSourceFiles(full));
        } else if (/\.(ts|tsx)$/.test(entry.name)) {
          results.push(full);
        }
      }
      return results;
    }

    function resolveTargetLayer(fromFileRel: string, specifier: string): string | null {
      if (specifier.startsWith('@/')) {
        const rest = specifier.slice(2);
        return rest.split('/')[0] ?? null;
      }
      if (specifier.startsWith('.')) {
        const resolved = path.posix.normalize(
          path.posix.join(path.posix.dirname(fromFileRel), specifier)
        );
        return resolved.split('/')[0] ?? null;
      }
      return null;
    }

    const allFiles = collectSourceFiles(srcRoot);
    expect(allFiles.length).toBeGreaterThanOrEqual(40);

    const anyViolations: string[] = [];
    const layerViolations: string[] = [];
    const unsafeBlankAnchors: string[] = [];

    const allowedInternalLayers: Record<string, ReadonlySet<string>> = {
      domain: new Set(['domain']),
      application: new Set(['domain', 'application']),
      infrastructure: new Set(['domain', 'infrastructure']),
      di: new Set(['domain', 'application', 'infrastructure', 'di']),
      components: new Set(['domain', 'application', 'components']),
      app: new Set(['domain', 'application', 'di', 'components', 'app']),
    };

    const forbiddenExternalPackages: Record<string, ReadonlyArray<string>> = {
      domain: ['next', 'react', 'drizzle-orm', '@neondatabase/serverless'],
      application: ['drizzle-orm', '@neondatabase/serverless'],
      infrastructure: ['next', 'react'],
      components: ['drizzle-orm', '@neondatabase/serverless'],
      app: ['drizzle-orm', '@neondatabase/serverless'],
    };

    for (const filePath of allFiles) {
      const rel = path.relative(srcRoot, filePath).replace(/\\/g, '/');
      const raw = fs.readFileSync(filePath, 'utf8');

      // Strip single-line and block comments before checking for TypeScript `any`
      const codeWithoutComments = raw
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/^\s*\/\/.*$/gm, '');

      const anyPattern = /(?::\s*any\b|\bas\s+any\b|<\s*any\s*>|\bany\s*\[\])/g;
      if (!rel.includes('__tests__/') && anyPattern.test(codeWithoutComments)) {
        anyViolations.push(rel);
      }

      // Check target="_blank" rel="noopener" safety
      const anchorRe = /<a\b[^>]*target=["']_blank["'][^>]*>/g;
      let anchorMatch: RegExpExecArray | null;
      while ((anchorMatch = anchorRe.exec(raw)) !== null) {
        if (!/rel=["'][^"']*noopener/i.test(anchorMatch[0])) {
          unsafeBlankAnchors.push(`${rel}: ${anchorMatch[0]}`);
        }
      }

      if (rel.includes('__tests__/')) continue;

      const sourceLayer = rel.split('/')[0] ?? '';
      const allowedSet = allowedInternalLayers[sourceLayer];
      expect(allowedSet, `Unknown top-level layer folder in src/: ${sourceLayer}`).toBeDefined();

      const importRe = /(?:import|export)\s+(?:type\s+)?(?:[\s\S]*?\s+from\s+)?['"]([^'"]+)['"]/g;
      let impMatch: RegExpExecArray | null;
      while ((impMatch = importRe.exec(codeWithoutComments)) !== null) {
        const spec = impMatch[1] ?? '';
        const targetLayer = resolveTargetLayer(rel, spec);

        if (targetLayer) {
          if (!allowedSet?.has(targetLayer)) {
            layerViolations.push(`${rel} (${sourceLayer}) -> forbidden import '${spec}' (${targetLayer})`);
          }
        } else {
          const bannedPkgs = forbiddenExternalPackages[sourceLayer] ?? [];
          for (const pkg of bannedPkgs) {
            if (spec === pkg || spec.startsWith(`${pkg}/`)) {
              layerViolations.push(`${rel} (${sourceLayer}) -> forbidden framework/driver '${spec}'`);
            }
          }
        }
      }
    }

    expect(anyViolations).toEqual([]);
    expect(layerViolations).toEqual([]);
    expect(unsafeBlankAnchors).toEqual([]);
  });

  it('enforces security hardening: fail-closed timing-safe secrets, bounded rate limiters, stream size caps, and prototype-pollution sanitization', async () => {
    // 1. Fail-closed when REVALIDATE_SECRET is missing or shorter than 16 chars
    expect(timingSafeVerifyBearerSecret('Bearer some-token-1234567890', undefined)).toEqual({
      ok: false,
      status: 503,
      code: 'REVALIDATE_NOT_CONFIGURED',
      message: expect.any(String),
    });
    expect(timingSafeVerifyBearerSecret('Bearer short', 'too-short')).toMatchObject({
      ok: false,
      status: 503,
      code: 'REVALIDATE_NOT_CONFIGURED',
    });
    expect(
      timingSafeVerifyBearerSecret(
        'Bearer starsavior-revalidate-secret-2026',
        'starsavior-revalidate-secret-2026'
      )
    ).toMatchObject({
      ok: false,
      status: 503,
      code: 'REVALIDATE_NOT_CONFIGURED',
    });

    // 2. Rejects missing, malformed, or wrong Bearer tokens; accepts exact constant-time match
    const strongSecret = 'prod-revalidate-secret-9f8e7d6c5b4a3210';
    expect(timingSafeVerifyBearerSecret(null, strongSecret)).toMatchObject({
      ok: false,
      status: 401,
      code: 'UNAUTHORIZED',
    });
    expect(timingSafeVerifyBearerSecret('Basic abcdef', strongSecret)).toMatchObject({
      ok: false,
      status: 401,
      code: 'UNAUTHORIZED',
    });
    expect(timingSafeVerifyBearerSecret('Bearer wrong-secret', strongSecret)).toMatchObject({
      ok: false,
      status: 401,
      code: 'UNAUTHORIZED',
    });
    expect(timingSafeVerifyBearerSecret(`Bearer ${strongSecret}`, strongSecret)).toEqual({
      ok: true,
    });

    // 3. BoundedSlidingWindowLimiter resists high-cardinality IP flood without OOM
    const boundedLimiter = new BoundedSlidingWindowLimiter(3, 60_000, 25);
    for (let i = 0; i < 250; i++) {
      expect(boundedLimiter.check(`botnet-ip-${i}`, 10_000 + i).allowed).toBe(true);
      expect(boundedLimiter.size).toBeLessThanOrEqual(25);
    }

    // 4. Prototype-pollution key stripping
    const maliciousRaw = JSON.parse(
      '{"scope":"upcoming-games","targetId":"azur-promilia","__proto__":{"polluted":true},"constructor":{"prototype":{"pwned":true}}}'
    ) as unknown;
    const sanitized = sanitizeJsonPayload(maliciousRaw) as Record<string, unknown>;
    expect(Object.prototype.hasOwnProperty.call(sanitized, '__proto__')).toBe(false);
    expect(Object.prototype.hasOwnProperty.call(sanitized, 'constructor')).toBe(false);
    expect(({} as Record<string, unknown>)['polluted']).toBeUndefined();

    // 5. Bounded JSON stream reader rejects oversized chunked payloads (413) & non-JSON media types (415)
    const oversizedReq = new Request('https://ascalon.fun/api/votes', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ scope: 'upcoming-games', targetId: 'x'.repeat(5000) }),
    });
    const oversizedRes = await readBoundedJsonBody(oversizedReq, { maxBytes: 2048 });
    expect(oversizedRes).toMatchObject({
      ok: false,
      status: 413,
      code: 'PAYLOAD_TOO_LARGE',
    });

    const wrongTypeReq = new Request('https://ascalon.fun/api/votes', {
      method: 'POST',
      headers: { 'content-type': 'text/plain' },
      body: '{"scope":"upcoming-games","targetId":"azur-promilia"}',
    });
    const wrongTypeRes = await readBoundedJsonBody(wrongTypeReq, { maxBytes: 2048 });
    expect(wrongTypeRes).toMatchObject({
      ok: false,
      status: 415,
      code: 'UNSUPPORTED_MEDIA_TYPE',
    });

    // 6. Strict DTO schemas reject unknown extra properties
    expect(
      CastVoteBodySchema.safeParse({
        scope: 'upcoming-games',
        targetId: 'azur-promilia',
        extraInjectedField: 'nope',
      }).success
    ).toBe(false);
    expect(
      RevalidateBodySchema.safeParse({
        tag: 'starsavior-wiki',
        path: '/starsavior',
      }).success
    ).toBe(true);
    expect(
      RevalidateBodySchema.safeParse({
        path: 'javascript:alert(1)',
      }).success
    ).toBe(false);
  });

  it('validates Global Omni-Search index (280+ entries), Google/IndexNow verification assets, and First-Party Analytics service', async () => {
    // 1. Global Search Index across Hubs + 59 Saviors + 85 Arcana + Guides + Upcoming Games
    const dataset = {
      game: GameConfigEntitySchema.parse(STAR_SAVIOR_GAME_SEED),
      characters: STAR_SAVIOR_CHARACTERS_SEED.map((c, idx) =>
        CharacterEntitySchema.parse({ id: idx + 1, ...c, score: Number(c.score) })
      ),
      arcana: STAR_SAVIOR_ARCANA_SEED.map((a, idx) =>
        ArcanaEntitySchema.parse({ id: idx + 1, ...a, score: Number(a.score) })
      ),
      banners: [],
    };
    const searchItems = buildGlobalSearchIndex(
      dataset,
      STAR_SAVIOR_GUIDES,
      APPMEDIA_HOME_PORTAL_DATA
    );
    expect(searchItems.length).toBeGreaterThanOrEqual(280);

    const guileHits = queryGlobalSearchIndex(searchItems, 'Guile', 5);
    expect(guileHits.length).toBeGreaterThanOrEqual(1);
    expect(guileHits[0]?.title).toContain('Guile');
    expect(guileHits[0]?.category).toBe('Savior');

    const codeHits = queryGlobalSearchIndex(searchItems, 'coupon codes', 5);
    expect(codeHits.some((item) => item.href === '/starsavior/guides/promo-codes')).toBe(true);

    // 2. Search Engine Verification Assets (Google Search Console + IndexNow)
    const publicDir = path.resolve(__dirname, '../../../public');
    const gscFile = path.join(publicDir, 'google47558ceaecd0fcbe.html');
    const indexNowFile = path.join(publicDir, 'a5ca10n7f9e2b4d8c1a3e5f7092468ab.txt');
    expect(fs.existsSync(gscFile)).toBe(true);
    expect(fs.readFileSync(gscFile, 'utf8').trim()).toBe(
      'google-site-verification: google47558ceaecd0fcbe.html'
    );
    expect(fs.existsSync(indexNowFile)).toBe(true);
    expect(fs.readFileSync(indexNowFile, 'utf8').trim()).toBe(
      'a5ca10n7f9e2b4d8c1a3e5f7092468ab'
    );

    // 3. First-Party Analytics Service (unique visitor dedup, pageviews/visitor, bot filter)
    expect(isAutomatedCrawler('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)')).toBe(true);
    expect(isAutomatedCrawler('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0')).toBe(false);
    expect(sanitizeAnalyticsPath('/starsavior/tier-list/?adpreview=1#top')).toBe('/starsavior/tier-list');
    expect(sanitizeReferrerHost('https://www.google.com')).toBe('direct');
    expect(sanitizeReferrerHost('www.google.com')).toBe('google.com');
    expect(sanitizeReferrerHost('www.ascalon.fun')).toBe('direct');

    const repo = new InMemoryAnalyticsRepository();
    const service = createAnalyticsService(repo);
    const now = new Date();

    const firstVisit = await service.trackPageview({
      path: '/starsavior/tier-list?utm=reddit',
      referrerHost: 'www.reddit.com',
      visitorHash: 'visitor-alpha-hash',
      now,
    });
    expect(firstVisit.countedUnique).toBe(true);

    const secondPageSameVisitor = await service.trackPageview({
      path: '/starsavior/characters/guile',
      referrerHost: 'ascalon.fun',
      visitorHash: 'visitor-alpha-hash',
      now,
    });
    expect(secondPageSameVisitor.countedUnique).toBe(false);

    const secondVisitor = await service.trackPageview({
      path: '/starsavior/tier-list',
      referrerHost: 'google.com',
      visitorHash: 'visitor-beta-hash',
      now,
    });
    expect(secondVisitor.countedUnique).toBe(true);

    const summary = await service.getDashboardSummary(14);
    expect(summary.storageMode).toBe('memory');
    expect(summary.todayVisitors).toBe(2);
    expect(summary.todayPageviews).toBe(3);
    expect(summary.pagesPerVisitorToday).toBe(1.5);
    expect(summary.topRoutes[0]?.path).toBe('/starsavior/tier-list');
    expect(summary.topRoutes[0]?.pageviews).toBe(2);
    expect(summary.topReferrers.some((r) => r.referrerHost === 'reddit.com')).toBe(true);
    expect(summary.topReferrers.some((r) => r.referrerHost === 'google.com')).toBe(true);
  });

  it('verifies Strategy Wiki Expansion Roadmap (1 Live: Star Savior, 1 Next: Silver Palace, zero CJK & valid icons) and home accuracy', () => {
    const portalRepo = new StaticPortalRepository();
    const portal = portalRepo.getHomePortalData();
    const roadmap = portal.strategyWikis;
    const directRoadmap = buildCuratedStrategyWikiRoadmap(
      APPMEDIA_HOME_PORTAL_DATA.strategyWikis,
      APPMEDIA_HOME_PORTAL_DATA.upcomingGames
    );
    expect(roadmap.length).toBeGreaterThanOrEqual(directRoadmap.length);

    const liveItems = roadmap.filter((w) => w.wikiStatus === 'live');
    const nextItems = roadmap.filter((w) => w.wikiStatus === 'next');
    const plannedItems = roadmap.filter((w) => w.wikiStatus === 'planned');

    expect(liveItems).toHaveLength(1);
    expect(liveItems[0]?.title).toBe('Star Savior');
    expect(liveItems[0]?.isInternal).toBe(true);
    expect(liveItems[0]?.href).toBe('/starsavior');

    expect(nextItems).toHaveLength(1);
    expect(nextItems[0]?.title).toBe('Silver Palace');
    expect(nextItems[0]?.isInternal).toBe(false);
    expect(nextItems[0]?.launchWindow).toBe('Dec 14, 2026');

    expect(plannedItems.length).toBeGreaterThan(20);
    expect(plannedItems.every((w) => !w.isInternal)).toBe(true);

    const publicDir = path.resolve(process.cwd(), 'public');
    for (const item of roadmap) {
      expect(CJK_REGEX.test(item.title)).toBe(false);
      expect(CJK_REGEX.test(item.publisher ?? '')).toBe(false);
      expect(CJK_REGEX.test(item.launchWindow ?? '')).toBe(false);
      expect(CJK_REGEX.test(item.roadmapReason ?? '')).toBe(false);
      if (item.iconUrl.startsWith('/')) {
        const assetPath = path.join(publicDir, item.iconUrl.replace(/^\//, ''));
        expect(fs.existsSync(assetPath)).toBe(true);
      }
    }

    // Verify factual featured guide label for en_home_16.webp (Onimusha: Way of the Sword)
    const homeMacroSrc = fs.readFileSync(
      path.resolve(process.cwd(), 'src/components/macro/AscalonHomeMacro.tsx'),
      'utf8'
    );
    expect(homeMacroSrc).toContain('Onimusha: Way of the Sword');
    expect(homeMacroSrc).not.toContain('Onimusha VR');
  });

  it('computes Back-to-Top scroll visibility and progress ring metrics across viewport heights', () => {
    // Non-scrollable short document stays hidden
    expect(computeScrollMetrics(0, 800, 800)).toEqual({ visible: false, progress: 0 });

    // Top of long page stays hidden until scrolled down
    expect(computeScrollMetrics(100, 4000, 800)).toEqual({
      visible: false,
      progress: 100 / 3200,
    });

    // Mid-scroll down shows button with accurate ratio
    expect(computeScrollMetrics(640, 4000, 800)).toEqual({
      visible: true,
      progress: 0.2,
    });

    // Bottom of page clamps progress to 1 and remains visible
    expect(computeScrollMetrics(3500, 4000, 800)).toEqual({
      visible: true,
      progress: 1,
    });

    // Short-medium scrollable page shows when reaching bottom
    expect(computeScrollMetrics(200, 1020, 800)).toEqual({
      visible: true,
      progress: 200 / 220,
    });

    // Layout mounts global ScrollToTopButton across all routes
    const layoutSrc = fs.readFileSync(
      path.resolve(process.cwd(), 'src/app/layout.tsx'),
      'utf8'
    );
    expect(layoutSrc).toContain('<ScrollToTopButton />');
  });

  it('enforces GEO richness (FAQPage, SearchAction, llms-full.txt) and Zero-CLS Adsterra monetization architecture', () => {
    const homeGraph = buildHomePortalJsonLd()['@graph'] as Array<Record<string, unknown>>;
    const websiteNode = homeGraph.find((n) => n['@type'] === 'WebSite');
    expect(websiteNode?.potentialAction).toMatchObject({ '@type': 'SearchAction' });
    const homeFaqNode = homeGraph.find((n) => n['@type'] === 'FAQPage');
    expect((homeFaqNode?.mainEntity as unknown[]).length).toBeGreaterThanOrEqual(4);

    const sampleChar = CharacterEntitySchema.parse({
      id: 1,
      ...STAR_SAVIOR_CHARACTERS_SEED[0],
      score: Number(STAR_SAVIOR_CHARACTERS_SEED[0].score),
    });
    const charGraph = buildCharacterJsonLd(sampleChar)['@graph'] as Array<Record<string, unknown>>;
    const charArticle = charGraph.find((n) => n['@type'] === 'Article');
    expect(charArticle?.mainEntityOfPage).toBeDefined();
    const charFaq = charGraph.find((n) => n['@type'] === 'FAQPage');
    expect((charFaq?.mainEntity as unknown[]).length).toBe(3);

    const llmsFullPath = path.resolve(__dirname, '../../../public/llms-full.txt');
    expect(fs.existsSync(llmsFullPath)).toBe(true);
    const llmsFull = fs.readFileSync(llmsFullPath, 'utf8');
    expect(CJK_REGEX.test(llmsFull)).toBe(false);
    for (const c of STAR_SAVIOR_CHARACTERS_SEED) {
      expect(llmsFull).toContain(`https://ascalon.fun/starsavior/characters/${c.slug}`);
    }

    const rootDir = path.resolve(__dirname, '../../..');
    const nextConfigSrc = fs.readFileSync(path.join(rootDir, 'next.config.ts'), 'utf8');
    expect(nextConfigSrc).toContain('https://bauval.org');
    expect(nextConfigSrc).toContain('https://www.googletagmanager.com');
    expect(nextConfigSrc).toContain("object-src 'none'");
    expect(nextConfigSrc).toContain("frame-ancestors 'none'");

    const adsSrc = fs.readFileSync(
      path.join(rootDir, 'src/components/micro/AnalyticsAndAds.tsx'),
      'utf8'
    );
    expect(adsSrc).toContain('AdsterraSlot');
    expect(adsSrc).toContain('sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"');

    const shellSrc = fs.readFileSync(path.join(rootDir, 'src/components/WikiShell.tsx'), 'utf8');
    expect(shellSrc).toContain('<AdsterraSlot variant="sidebar" />');
    expect(shellSrc).toContain('<AdsterraSlot variant="leaderboard" />');
    expect(shellSrc).toContain('<AdsterraSlot variant="native" />');

    const homeSrc = fs.readFileSync(
      path.join(rootDir, 'src/components/macro/AscalonHomeMacro.tsx'),
      'utf8'
    );
    expect(homeSrc).toContain('<AdsterraSlot variant="leaderboard" />');
    expect(homeSrc).toContain('<AdsterraSlot variant="native" />');
  });
});
