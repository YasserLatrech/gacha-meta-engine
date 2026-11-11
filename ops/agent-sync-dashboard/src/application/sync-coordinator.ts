import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type {
  AgentDecisionInput,
  AgentQueueItem,
  AgentSyncState,
  SyncSurface,
} from '../domain/schemas.js';
import {
  evaluateArcanaRosterDiff,
  evaluateCharacterRosterDiff,
  evaluateGachaAndEventsDiff,
  evaluateHomePortalDiff,
  evaluatePromoCodeDiff,
  evaluateTierAndRerollDiff,
  formatAgentBriefMarkdown,
  mergeQueueWithDecisions,
} from './diff-engine.js';
import { readLocalAscalonSnapshot } from '../infrastructure/local-repo-reader.js';
import {
  scanAppMediaHomePortal,
  scanStarSaviorArcana,
  scanStarSaviorCharacters,
  scanStarSaviorPromoCodes,
  scanStarSaviorTierAndReroll,
  scanStarSaviorTop,
} from '../infrastructure/appmedia-scanner.js';
import { loadSyncState, saveSyncState } from '../infrastructure/queue-store.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const OPS_ROOT = path.resolve(__dirname, '../..');

function detectTargetRepo(): string {
  if (process.env.ASCALON_TARGET_REPO) {
    return path.resolve(process.env.ASCALON_TARGET_REPO);
  }
  const siblingCandidate = path.resolve(OPS_ROOT, '../gacha-meta-engine');
  if (fs.existsSync(path.join(siblingCandidate, 'src/infrastructure/db/seed-data.ts'))) {
    return siblingCandidate;
  }
  const parentRepoCandidate = path.resolve(OPS_ROOT, '../..');
  if (fs.existsSync(path.join(parentRepoCandidate, 'src/infrastructure/db/seed-data.ts'))) {
    return parentRepoCandidate;
  }
  return siblingCandidate;
}

export const DEFAULT_TARGET_REPO = detectTargetRepo();

export function getCurrentSyncState(): AgentSyncState {
  const existing = loadSyncState(OPS_ROOT, DEFAULT_TARGET_REPO);
  if (existing.localInventory.saviorsCount === 0) {
    try {
      const local = readLocalAscalonSnapshot(DEFAULT_TARGET_REPO);
      return {
        ...existing,
        localInventory: {
          saviorsCount: local.saviorsCount,
          arcanaCount: local.arcanaCount,
          guidesCount: local.guidesCount,
          upcomingGamesCount: local.upcomingGamesCount,
          promoCodesCount: local.localPromoCodes.length,
          activeCountdownTimersCount: local.localDeadlines.length,
        },
      };
    } catch {
      return existing;
    }
  }
  return existing;
}

export async function runUpstreamAppMediaScan(): Promise<AgentSyncState> {
  const startMs = Date.now();
  const nowIso = new Date().toISOString();
  const previous = loadSyncState(OPS_ROOT, DEFAULT_TARGET_REPO);
  const local = readLocalAscalonSnapshot(DEFAULT_TARGET_REPO);

  const freshItems: AgentQueueItem[] = [];
  const errors: Array<{ surface: SyncSurface; message: string; occurredAtIso: string }> = [];

  // Run scans in 2 bounded batches (max 3 concurrent domains/endpoints per batch)
  const [topRes, promoRes, arcanaRes] = await Promise.allSettled([
    scanStarSaviorTop(),
    scanStarSaviorPromoCodes(),
    scanStarSaviorArcana(),
  ]);

  const [charRes, tierRes, homeRes] = await Promise.allSettled([
    scanStarSaviorCharacters(),
    scanStarSaviorTierAndReroll(),
    scanAppMediaHomePortal(),
  ]);

  // 1. Gacha & Events
  if (topRes.status === 'fulfilled') {
    freshItems.push(
      evaluateGachaAndEventsDiff({
        localDeadlines: local.localDeadlines,
        localKnownBannerTokens: local.localKnownBannerTokens,
        upstreamGachaPeriods: topRes.value.gachaPeriods,
        upstreamEventDates: topRes.value.eventDates,
        upstreamBannerUrls: topRes.value.eventAndGachaBannerUrls,
        sourceUrl: 'https://appmedia.jp/starsavior',
        targetRepoPath: DEFAULT_TARGET_REPO,
        nowIso,
      })
    );
  } else {
    errors.push({
      surface: 'STAR_SAVIOR_GACHA_EVENTS',
      message: String(topRes.reason),
      occurredAtIso: nowIso,
    });
  }

  // 2. Promo Codes
  if (promoRes.status === 'fulfilled') {
    freshItems.push(
      evaluatePromoCodeDiff({
        localCodes: local.localPromoCodes,
        upstreamCodes: promoRes.value,
        sourceUrl: 'https://appmedia.jp/starsavior/79521875',
        targetRepoPath: DEFAULT_TARGET_REPO,
        nowIso,
      })
    );
  } else {
    errors.push({
      surface: 'STAR_SAVIOR_PROMO_CODES',
      message: String(promoRes.reason),
      occurredAtIso: nowIso,
    });
  }

  // 3. Arcana Roster
  if (arcanaRes.status === 'fulfilled') {
    freshItems.push(
      evaluateArcanaRosterDiff({
        localArcanaIcons: local.localArcanaIcons,
        upstreamArcanaIcons: arcanaRes.value,
        glossary: local.glossary,
        sourceUrl: 'https://appmedia.jp/starsavior/79519163',
        targetRepoPath: DEFAULT_TARGET_REPO,
        nowIso,
      })
    );
  } else {
    errors.push({
      surface: 'STAR_SAVIOR_ARCANA',
      message: String(arcanaRes.reason),
      occurredAtIso: nowIso,
    });
  }

  // 4. Characters Roster
  if (charRes.status === 'fulfilled') {
    const prevChar = previous.queue.find((q) => q.surface === 'STAR_SAVIOR_CHARACTERS');
    const prevHeadline =
      prevChar?.diff.changedFields.find((f) => f.key === 'unreleasedCharactersHeadline')
        ?.upstreamValue || charRes.value.newCharHeadline;

    freshItems.push(
      evaluateCharacterRosterDiff({
        localCharacterIcons: local.localCharacterIcons,
        localSaviorCount: local.saviorsCount,
        upstreamCharacterIcons: charRes.value.characterIcons,
        upstreamNewCharHeadline: charRes.value.newCharHeadline,
        knownNewCharHeadline: prevHeadline,
        glossary: local.glossary,
        sourceUrl: 'https://appmedia.jp/starsavior/79517909',
        targetRepoPath: DEFAULT_TARGET_REPO,
        nowIso,
      })
    );
  } else {
    errors.push({
      surface: 'STAR_SAVIOR_CHARACTERS',
      message: String(charRes.reason),
      occurredAtIso: nowIso,
    });
  }

  // 5. Tier List & Reroll
  if (tierRes.status === 'fulfilled') {
    const prevTier = previous.queue.find((q) => q.surface === 'STAR_SAVIOR_TIER_REROLL');
    freshItems.push(
      evaluateTierAndRerollDiff({
        baselineSignature: prevTier ? prevTier.upstreamHash : null,
        upstreamTierSignature: tierRes.value.tierSignature,
        upstreamLatestUpdateSnippet: tierRes.value.latestUpdateSnippet,
        localSssNames: local.localSssNames,
        sourceUrl: 'https://appmedia.jp/starsavior/79517270',
        targetRepoPath: DEFAULT_TARGET_REPO,
        nowIso,
      })
    );
  } else {
    errors.push({
      surface: 'STAR_SAVIOR_TIER_REROLL',
      message: String(tierRes.reason),
      occurredAtIso: nowIso,
    });
  }

  // 6. AppMedia Home Portal & Upcoming Release Chronos
  if (homeRes.status === 'fulfilled') {
    freshItems.push(
      evaluateHomePortalDiff({
        localFeaturedUrls: local.localFeaturedUrls,
        localUpcomingArticleUrls: local.localUpcomingArticleUrls,
        localUpcomingCalendarRows: local.localUpcomingCalendarRows,
        upstreamFeaturedItems: homeRes.value.featuredItems,
        upstreamUpcomingArticleUrls: homeRes.value.upcomingArticleUrls,
        upstreamNewGameCalendarEntries: homeRes.value.newGameCalendarEntries,
        sourceUrl: 'https://appmedia.jp/newgame',
        targetRepoPath: DEFAULT_TARGET_REPO,
        nowIso,
      })
    );
  } else {
    errors.push({
      surface: 'APPMEDIA_HOME_PORTAL',
      message: String(homeRes.reason),
      occurredAtIso: nowIso,
    });
  }

  const mergedQueue = mergeQueueWithDecisions(freshItems, previous.queue);
  const nextState: AgentSyncState = {
    schemaVersion: '1.0.0',
    targetRepoRoot: DEFAULT_TARGET_REPO,
    lastFullScanIso: nowIso,
    scanDurationMs: Date.now() - startMs,
    localInventory: {
      saviorsCount: local.saviorsCount,
      arcanaCount: local.arcanaCount,
      guidesCount: local.guidesCount,
      upcomingGamesCount: local.upcomingGamesCount,
      promoCodesCount: local.localPromoCodes.length,
      activeCountdownTimersCount: local.localDeadlines.length,
    },
    queue: mergedQueue,
    errors,
  };

  const brief = formatAgentBriefMarkdown(nextState);
  saveSyncState(OPS_ROOT, nextState, brief);
  return nextState;
}

export function recordAgentDecision(decision: AgentDecisionInput): AgentSyncState {
  const current = getCurrentSyncState();
  const updatedQueue = current.queue.map((item) => {
    if (item.id !== decision.id) return item;
    return {
      ...item,
      status: decision.status,
      decisionNote: decision.note || item.decisionNote,
    };
  });

  const nextState: AgentSyncState = {
    ...current,
    queue: updatedQueue,
  };
  const brief = formatAgentBriefMarkdown(nextState);
  saveSyncState(OPS_ROOT, nextState, brief);
  return nextState;
}
