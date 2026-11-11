import { describe, it, expect } from 'vitest';
import {
  evaluatePromoCodeDiff,
  evaluateGachaAndEventsDiff,
  evaluateArcanaRosterDiff,
  evaluateHomePortalDiff,
  mergeQueueWithDecisions,
  formatAgentBriefMarkdown,
} from '../../application/diff-engine.js';
import type { AgentQueueItem } from '../schemas.js';

describe('Agent-First Semantic Diff Engine & Queue Intelligence', () => {
  it('marks Promo Codes as IN_SYNC when upstream codes exactly match Ascalon local codes', () => {
    const item = evaluatePromoCodeDiff({
      localCodes: ['GIFTREADYANNIV1ST', 'ENDOFTHEJOURNEY', 'TOGETHER1STANNIV'],
      upstreamCodes: ['TOGETHER1STANNIV', 'GIFTREADYANNIV1ST', 'ENDOFTHEJOURNEY'],
      sourceUrl: 'https://appmedia.jp/starsavior/79521875',
      targetRepoPath: 'C:/repo/gacha-meta-engine',
      nowIso: '2026-11-11T00:20:00.000Z',
    });

    expect(item.driftDetected).toBe(false);
    expect(item.status).toBe('IN_SYNC');
    expect(item.diff.addedItems).toEqual([]);
    expect(item.diff.removedOrExpiredItems).toEqual([]);
  });

  it('escalates to P0_CRITICAL PENDING_AGENT when AppMedia adds a new coupon code or retires an expired one', () => {
    const item = evaluatePromoCodeDiff({
      localCodes: ['GIFTREADYANNIV1ST', 'ENDOFTHEJOURNEY', 'TOGETHER1STANNIV'],
      upstreamCodes: ['GIFTREADYANNIV1ST', 'TOGETHER1STANNIV', 'STAR1STANNIV2026'],
      sourceUrl: 'https://appmedia.jp/starsavior/79521875',
      targetRepoPath: 'C:/repo/gacha-meta-engine',
      nowIso: '2026-11-11T00:20:00.000Z',
    });

    expect(item.driftDetected).toBe(true);
    expect(item.priority).toBe('P0_CRITICAL');
    expect(item.status).toBe('PENDING_AGENT');
    expect(item.diff.addedItems).toEqual(['STAR1STANNIV2026']);
    expect(item.diff.removedOrExpiredItems).toEqual(['ENDOFTHEJOURNEY']);
  });

  it('detects expired local Gacha/Event timers and flags new Japanese banner assets for AI translation', () => {
    const item = evaluateGachaAndEventsDiff({
      localDeadlines: [
        { label: 'Maid Ceres Pickup Gacha', iso: '2026-11-13T04:00:00+09:00' },
        { label: 'Old Expired Banner', iso: '2026-11-01T04:00:00+09:00' },
      ],
      localKnownBannerTokens: ['212032_duamr.webp', '225339_vs7no.webp'],
      upstreamGachaPeriods: ['2026/11/13', '2026/11/26'],
      upstreamEventDates: ['2026/11/13 03:59:59', '2026/11/05 12:00:00'],
      upstreamBannerUrls: [
        'https://appmedia.jp/wp-content/uploads/2026/11/212032_duamr.webp',
        'https://appmedia.jp/wp-content/uploads/2026/11/999999_newanniv.webp',
      ],
      sourceUrl: 'https://appmedia.jp/starsavior',
      targetRepoPath: 'C:/repo/gacha-meta-engine',
      nowIso: '2026-11-11T00:20:00.000Z',
    });

    expect(item.driftDetected).toBe(true);
    expect(item.priority).toBe('P0_CRITICAL');
    expect(item.requiresBannerTranslation).toBe(true);
    expect(item.diff.rawJapaneseAssetUrls).toContain(
      'https://appmedia.jp/wp-content/uploads/2026/11/999999_newanniv.webp'
    );
    expect(item.diff.removedOrExpiredItems.some((s) => s.includes('Old Expired Banner'))).toBe(true);
    expect(item.diff.addedItems.some((s) => s.includes('2026/11/26'))).toBe(true);
  });

  it('detects new Arcana icon tokens on AppMedia and preserves Agent APPLIED/IGNORED state until upstream hash changes', () => {
    const item1 = evaluateArcanaRosterDiff({
      localArcanaIcons: ['ARCANA_A_icon_arcana.webp', 'ARCANA_B_icon_arcana.webp'],
      upstreamArcanaIcons: [
        'ARCANA_A_icon_arcana.webp',
        'ARCANA_B_icon_arcana.webp',
        'ARCANA_NEW_SSR_01_icon_arcana.webp',
      ],
      glossary: [
        {
          slug: 'arcana-a',
          englishName: 'The Indomitable Masterpiece',
          entityType: 'ARCANA',
          iconKey: 'ARCANA_A_icon_arcana.webp',
        },
      ],
      sourceUrl: 'https://appmedia.jp/starsavior/79519163',
      targetRepoPath: 'C:/repo/gacha-meta-engine',
      nowIso: '2026-11-11T00:20:00.000Z',
    });

    expect(item1.driftDetected).toBe(true);
    expect(item1.diff.addedItems).toEqual(['ARCANA_NEW_SSR_01_icon_arcana.webp']);

    // Simulate Agent marking item1 as APPLIED
    const previousQueue: AgentQueueItem[] = [
      { ...item1, status: 'APPLIED', decisionNote: 'Added new SSR Arcana in commit abc1234' },
    ];

    // Same upstream hash -> stays APPLIED!
    const mergedSame = mergeQueueWithDecisions([item1], previousQueue);
    expect(mergedSame[0].status).toBe('APPLIED');
    expect(mergedSame[0].decisionNote).toContain('abc1234');

    // Upstream changes AGAIN (new hash) -> automatically re-opens to PENDING_AGENT!
    const item2 = evaluateArcanaRosterDiff({
      localArcanaIcons: ['ARCANA_A_icon_arcana.webp', 'ARCANA_B_icon_arcana.webp'],
      upstreamArcanaIcons: [
        'ARCANA_A_icon_arcana.webp',
        'ARCANA_B_icon_arcana.webp',
        'ARCANA_NEW_SSR_01_icon_arcana.webp',
        'ARCANA_NEW_SSR_02_icon_arcana.webp',
      ],
      glossary: [],
      sourceUrl: 'https://appmedia.jp/starsavior/79519163',
      targetRepoPath: 'C:/repo/gacha-meta-engine',
      nowIso: '2026-11-11T01:00:00.000Z',
    });
    const mergedChanged = mergeQueueWithDecisions([item2], previousQueue);
    expect(mergedChanged[0].status).toBe('PENDING_AGENT');

    const brief = formatAgentBriefMarkdown({
      schemaVersion: '1.0.0',
      targetRepoRoot: 'C:/repo/gacha-meta-engine',
      lastFullScanIso: '2026-11-11T01:00:00.000Z',
      scanDurationMs: 1240,
      localInventory: {
        saviorsCount: 57,
        arcanaCount: 83,
        guidesCount: 85,
        upcomingGamesCount: 77,
        promoCodesCount: 3,
        activeCountdownTimersCount: 5,
      },
      queue: mergedChanged,
      errors: [],
    });
    expect(brief).toContain('PENDING_AGENT');
    expect(brief).toContain('ARCANA_NEW_SSR_02_icon_arcana.webp');
  });

  it('detects Upcoming Game Release Calendar date delays, TBA-to-date confirmations, and new dated games on AppMedia', () => {
    const syncItem = evaluateHomePortalDiff({
      localFeaturedUrls: ['https://appmedia.jp/fategrandorder/80548351'],
      localUpcomingArticleUrls: [
        'https://appmedia.jp/newgame/77704138',
        'https://appmedia.jp/newgame/78248537',
      ],
      localUpcomingCalendarRows: [
        {
          articleUrl: 'https://appmedia.jp/newgame/77704138',
          title: 'Azur Promilia',
          categoryJa: '2026年11月',
          status: 'Upcoming',
          releaseDate: 'Nov 26, 2026',
        },
        {
          articleUrl: 'https://appmedia.jp/newgame/78248537',
          title: 'Shangri-La Frontier: The Seven Colossi',
          categoryJa: '2026年中',
          status: 'Upcoming',
          releaseDate: '2026 Planned',
        },
      ],
      upstreamFeaturedItems: [
        { url: 'https://appmedia.jp/fategrandorder/80548351', titleJa: 'FGO 100M DL' },
      ],
      upstreamUpcomingArticleUrls: ['https://appmedia.jp/newgame/77704138'],
      upstreamNewGameCalendarEntries: [
        {
          articleUrl: 'https://appmedia.jp/newgame/77704138',
          titleJa: 'アズールプロミリア',
          categoryJa: '2026年11月',
          status: 'Upcoming',
          timeJa: '2026年11月26日',
          exactIsoDate: '2026-11-26',
        },
        {
          articleUrl: 'https://appmedia.jp/newgame/78248537',
          titleJa: 'シャングリラ・フロンティア～七つの最強種～',
          categoryJa: '2027年中',
          status: 'Upcoming',
          timeJa: '2027年予定',
          exactIsoDate: null,
        },
      ],
      sourceUrl: 'https://appmedia.jp/newgame',
      targetRepoPath: 'C:/repo/gacha-meta-engine',
      nowIso: '2026-11-11T11:00:00.000Z',
    });

    expect(syncItem.driftDetected).toBe(true);
    expect(syncItem.priority).toBe('P1_HIGH');
    expect(syncItem.status).toBe('PENDING_AGENT');
    expect(syncItem.diff.changedFields).toHaveLength(1);
    expect(syncItem.diff.changedFields[0]?.key).toBe(
      'ReleaseChrono:Shangri-La Frontier: The Seven Colossi'
    );
  });
});
