import crypto from 'node:crypto';
import type {
  AgentQueueItem,
  AgentSyncState,
  GlossaryHint,
  QueuePriority,
} from '../domain/schemas.js';

export function sha256Short(payload: unknown): string {
  return crypto.createHash('sha256').update(JSON.stringify(payload)).digest('hex').slice(0, 16);
}

const PRIORITY_RANK: Record<QueuePriority, number> = {
  P0_CRITICAL: 0,
  P1_HIGH: 1,
  P2_NORMAL: 2,
  P3_INFO: 3,
};

export function evaluatePromoCodeDiff(input: {
  localCodes: string[];
  upstreamCodes: string[];
  sourceUrl: string;
  targetRepoPath: string;
  nowIso: string;
}): AgentQueueItem {
  const localSet = new Set(input.localCodes.map((c) => c.trim().toUpperCase()));
  const upstreamSorted = [...new Set(input.upstreamCodes.map((c) => c.trim().toUpperCase()))].sort();

  const addedItems = upstreamSorted.filter((c) => !localSet.has(c));
  const upstreamSet = new Set(upstreamSorted);
  const removedOrExpiredItems = [...localSet].filter((c) => !upstreamSet.has(c)).sort();

  const driftDetected = addedItems.length > 0 || removedOrExpiredItems.length > 0;
  const upstreamHash = sha256Short({ surface: 'PROMO_CODES', upstreamSorted });

  return {
    id: 'diff:starsavior:promo-codes',
    surface: 'STAR_SAVIOR_PROMO_CODES',
    title: driftDetected
      ? `Coupon Codes Drift: +${addedItems.length} New / -${removedOrExpiredItems.length} Expired`
      : `Coupon Codes Verified (${upstreamSorted.length} Active)`,
    priority: driftDetected ? 'P0_CRITICAL' : 'P3_INFO',
    status: driftDetected ? 'PENDING_AGENT' : 'IN_SYNC',
    driftDetected,
    requiresBannerTranslation: false,
    sourceUrl: input.sourceUrl,
    upstreamHash,
    detectedAtIso: input.nowIso,
    lastCheckedAtIso: input.nowIso,
    targetRepoPath: input.targetRepoPath,
    targetFiles: ['src/infrastructure/db/starsavior-guides-data.ts', 'public/llms.txt'],
    diff: {
      summary: driftDetected
        ? `AppMedia coupon code table differs from Ascalon promo-codes guide (+${addedItems.length} added, -${removedOrExpiredItems.length} retired).`
        : 'All active Star Savior coupon codes match AppMedia 100%.',
      localCount: localSet.size,
      upstreamCount: upstreamSet.size,
      addedItems,
      removedOrExpiredItems,
      changedFields: [],
      rawJapaneseAssetUrls: [],
    },
    glossaryHints: [],
    agentExecutionSteps: [
      `Inspect ${input.sourceUrl} to confirm reward quantities and expiration timestamps for [${addedItems.join(', ') || 'active codes'}].`,
      'Update slug "promo-codes" in src/infrastructure/db/starsavior-guides-data.ts (and public/llms.txt if top codes changed).',
      'Update invariants in src/domain/__tests__/wiki.test.ts and run npx vitest run.',
    ],
  };
}

export function evaluateGachaAndEventsDiff(input: {
  localDeadlines: Array<{ label: string; iso: string; kind?: 'deadline' | 'start' }>;
  localKnownBannerTokens: string[];
  upstreamGachaPeriods: string[];
  upstreamEventDates: string[];
  upstreamBannerUrls: string[];
  sourceUrl: string;
  targetRepoPath: string;
  nowIso: string;
}): AgentQueueItem {
  const nowMs = Date.parse(input.nowIso);

  // 1. Check expired local countdown deadlines (ignore startIso ongoing timers)
  const expiredLocal = input.localDeadlines
    .filter((d) => {
      if (d.kind === 'start') return false;
      const ms = Date.parse(d.iso);
      return Number.isFinite(ms) && ms <= nowMs;
    })
    .map((d) => `EXPIRED TIMER: ${d.label} (${d.iso})`);

  // 2. Compare YYYY/MM/DD date tokens
  const localDateTokens = new Set(
    input.localDeadlines.map((d) => d.iso.slice(0, 10).replace(/-/g, '/'))
  );
  const upstreamNormalizedDates = [
    ...new Set(
      [...input.upstreamGachaPeriods, ...input.upstreamEventDates].map((raw) => {
        const m = raw.match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);
        if (!m) return raw;
        return `${m[1]}/${m[2].padStart(2, '0')}/${m[3].padStart(2, '0')}`;
      })
    ),
  ].sort();

  const newUpstreamDates = upstreamNormalizedDates
    .filter((dt) => /^\d{4}\/\d{2}\/\d{2}$/.test(dt) && !localDateTokens.has(dt))
    .map((dt) => `NEW UPSTREAM SCHEDULE DATE: ${dt}`);

  // 3. Detect brand-new Japanese banner images on AppMedia /starsavior
  const knownTokens = new Set(input.localKnownBannerTokens);
  const newBannerUrls = input.upstreamBannerUrls.filter((u) => {
    const basename = u.split('/').pop() || u;
    return !knownTokens.has(basename) && !knownTokens.has(u);
  });

  const addedItems = [
    ...newUpstreamDates,
    ...newBannerUrls.map((u) => `NEW JP BANNER ASSET: ${u}`),
  ];
  const removedOrExpiredItems = expiredLocal;
  const driftDetected = addedItems.length > 0 || removedOrExpiredItems.length > 0;
  const requiresBannerTranslation = newBannerUrls.length > 0;

  const upstreamHash = sha256Short({
    surface: 'GACHA_EVENTS',
    upstreamNormalizedDates,
    upstreamBannerUrls: [...input.upstreamBannerUrls].sort(),
    expiredLocal,
  });

  return {
    id: 'diff:starsavior:gacha-events',
    surface: 'STAR_SAVIOR_GACHA_EVENTS',
    title: driftDetected
      ? `Gacha & Events Rotation Change (${addedItems.length} New / ${removedOrExpiredItems.length} Expired)`
      : `Active Gacha & Event Countdowns Verified (${input.localDeadlines.length} Live JST Timers)`,
    priority: driftDetected ? 'P0_CRITICAL' : 'P3_INFO',
    status: driftDetected ? 'PENDING_AGENT' : 'IN_SYNC',
    driftDetected,
    requiresBannerTranslation,
    sourceUrl: input.sourceUrl,
    upstreamHash,
    detectedAtIso: input.nowIso,
    lastCheckedAtIso: input.nowIso,
    targetRepoPath: input.targetRepoPath,
    targetFiles: [
      'src/components/macro/StarSaviorTopMacro.tsx',
      'src/components/macro/StarSaviorGuideMacro.tsx',
      'src/infrastructure/db/seed-data.ts',
      'src/infrastructure/db/starsavior-guides-data.ts',
    ],
    diff: {
      summary: driftDetected
        ? `Detected ${newUpstreamDates.length} new schedule date(s), ${newBannerUrls.length} unlocalized Japanese banner image(s), and ${expiredLocal.length} expired local timer(s).`
        : 'All active pickup gacha banners, event periods, and JST countdowns match AppMedia.',
      localCount: input.localDeadlines.length,
      upstreamCount: upstreamNormalizedDates.length,
      addedItems,
      removedOrExpiredItems,
      changedFields: [],
      rawJapaneseAssetUrls: newBannerUrls,
    },
    glossaryHints: [],
    agentExecutionSteps: [
      'Compare active Gacha & Event tables on https://appmedia.jp/starsavior against StarSaviorTopMacro.tsx.',
      ...(requiresBannerTranslation
        ? [
            'LOCALIZE BANNERS FIRST: Download new Japanese banner URLs in rawJapaneseAssetUrls and invoke image-generator to translate Japanese text to crisp English WebP before placing in public/banners/starsavior/eyecatch/.',
          ]
        : []),
      'Update LiveJstCountdown targetIso timestamps (+09:00 JST) in StarSaviorTopMacro.tsx and StarSaviorGuideMacro.tsx.',
      'Run npx vitest run && npm run build to verify zero CJK leaks and valid banner paths.',
    ],
  };
}

export function evaluateCharacterRosterDiff(input: {
  localCharacterIcons: string[];
  localSaviorCount: number;
  upstreamCharacterIcons: string[];
  upstreamNewCharHeadline: string;
  knownNewCharHeadline: string;
  glossary: GlossaryHint[];
  sourceUrl: string;
  targetRepoPath: string;
  nowIso: string;
}): AgentQueueItem {
  const localSet = new Set(input.localCharacterIcons);
  const upstreamUnique = [...new Set(input.upstreamCharacterIcons)].sort();
  const newIcons = upstreamUnique.filter((icon) => !localSet.has(icon));
  const headlineChanged =
    Boolean(input.upstreamNewCharHeadline) &&
    Boolean(input.knownNewCharHeadline) &&
    input.upstreamNewCharHeadline !== input.knownNewCharHeadline;

  const addedItems = [
    ...newIcons.map((i) => `NEW SAVIOR ICON ASSET: ${i}`),
    ...(headlineChanged ? [`NEW CHAR INFO UPDATE: ${input.upstreamNewCharHeadline}`] : []),
  ];
  const driftDetected = addedItems.length > 0;
  const upstreamHash = sha256Short({
    surface: 'CHARACTERS',
    upstreamUnique,
    headline: input.upstreamNewCharHeadline,
  });

  return {
    id: 'diff:starsavior:characters',
    surface: 'STAR_SAVIOR_CHARACTERS',
    title: driftDetected
      ? `New Playable Savior Detected (+${newIcons.length} Unindexed Asset)`
      : `Playable Saviors Roster In Sync (${input.localSaviorCount} Saviors)`,
    priority: driftDetected ? 'P0_CRITICAL' : 'P3_INFO',
    status: driftDetected ? 'PENDING_AGENT' : 'IN_SYNC',
    driftDetected,
    requiresBannerTranslation: false,
    sourceUrl: input.sourceUrl,
    upstreamHash,
    detectedAtIso: input.nowIso,
    lastCheckedAtIso: input.nowIso,
    targetRepoPath: input.targetRepoPath,
    targetFiles: [
      'src/infrastructure/db/seed-data.ts',
      'src/domain/__tests__/wiki.test.ts',
    ],
    diff: {
      summary: driftDetected
        ? `AppMedia character index contains ${newIcons.length} icon(s) not yet in STAR_SAVIOR_CHARACTERS_SEED.`
        : `All ${input.localSaviorCount} playable SSR & SR Saviors match AppMedia's roster.`,
      localCount: input.localSaviorCount,
      upstreamCount: Math.max(input.localSaviorCount, upstreamUnique.length),
      addedItems,
      removedOrExpiredItems: [],
      changedFields: headlineChanged
        ? [
            {
              key: 'unreleasedCharactersHeadline',
              localValue: input.knownNewCharHeadline,
              upstreamValue: input.upstreamNewCharHeadline,
            },
          ]
        : [],
      rawJapaneseAssetUrls: [],
    },
    glossaryHints: input.glossary.filter((g) => g.entityType === 'CHARACTER').slice(0, 12),
    agentExecutionSteps: [
      'Open the newly added Savior page on AppMedia to extract Lv.200 stats, Attribute, Class, CV, Skills, Recommended Gear, and Best Arcana.',
      'Verify official in-game English Savior name (never machine-translate literally without checking official localization).',
      'Append complete CharacterEntity entry to STAR_SAVIOR_CHARACTERS_SEED in src/infrastructure/db/seed-data.ts and update total Savior count assertions in wiki.test.ts.',
    ],
  };
}

export function evaluateArcanaRosterDiff(input: {
  localArcanaIcons: string[];
  upstreamArcanaIcons: string[];
  glossary: GlossaryHint[];
  sourceUrl: string;
  targetRepoPath: string;
  nowIso: string;
}): AgentQueueItem {
  const localSet = new Set(input.localArcanaIcons);
  const upstreamUnique = [...new Set(input.upstreamArcanaIcons)].sort();
  const addedItems = upstreamUnique.filter((icon) => !localSet.has(icon));
  const driftDetected = addedItems.length > 0;
  const upstreamHash = sha256Short({ surface: 'ARCANA', upstreamUnique });

  return {
    id: 'diff:starsavior:arcana',
    surface: 'STAR_SAVIOR_ARCANA',
    title: driftDetected
      ? `New Arcana Card(s) Detected (+${addedItems.length} Card)`
      : `Arcana Encyclopedia In Sync (${input.localArcanaIcons.length} Cards)`,
    priority: driftDetected ? 'P0_CRITICAL' : 'P3_INFO',
    status: driftDetected ? 'PENDING_AGENT' : 'IN_SYNC',
    driftDetected,
    requiresBannerTranslation: false,
    sourceUrl: input.sourceUrl,
    upstreamHash,
    detectedAtIso: input.nowIso,
    lastCheckedAtIso: input.nowIso,
    targetRepoPath: input.targetRepoPath,
    targetFiles: [
      'src/infrastructure/db/seed-data.ts',
      'src/domain/__tests__/wiki.test.ts',
    ],
    diff: {
      summary: driftDetected
        ? `AppMedia Arcana list contains ${addedItems.length} new ARCANA_* card icon(s) missing from Ascalon.`
        : `All ${input.localArcanaIcons.length} SSR, SR, and R Arcana cards match AppMedia.`,
      localCount: input.localArcanaIcons.length,
      upstreamCount: Math.max(input.localArcanaIcons.length, upstreamUnique.length),
      addedItems,
      removedOrExpiredItems: [],
      changedFields: [],
      rawJapaneseAssetUrls: [],
    },
    glossaryHints: input.glossary.filter((g) => g.entityType === 'ARCANA').slice(0, 10),
    agentExecutionSteps: [
      'Inspect https://appmedia.jp/starsavior/79519163 and https://appmedia.jp/starsavior/79518101 for the new Arcana card Stat Tag, Special Potential, and Tier.',
      'Add the new card to STAR_SAVIOR_ARCANA_SEED in src/infrastructure/db/seed-data.ts using official English Savior & Potential terminology.',
      'Run npx vitest run to verify 0 CJK characters and valid schema.',
    ],
  };
}

export function evaluateTierAndRerollDiff(input: {
  baselineSignature: string | null;
  upstreamTierSignature: string;
  upstreamLatestUpdateSnippet: string;
  localSssNames: string[];
  sourceUrl: string;
  targetRepoPath: string;
  nowIso: string;
}): AgentQueueItem {
  const driftDetected =
    input.baselineSignature !== null && input.baselineSignature !== input.upstreamTierSignature;

  return {
    id: 'diff:starsavior:tier-reroll',
    surface: 'STAR_SAVIOR_TIER_REROLL',
    title: driftDetected
      ? 'Tier List / Reroll Matrix Shifted on AppMedia'
      : `Tier List & Reroll Matrix In Sync (SSS: ${input.localSssNames.length} Units)`,
    priority: driftDetected ? 'P1_HIGH' : 'P3_INFO',
    status: driftDetected ? 'PENDING_AGENT' : 'IN_SYNC',
    driftDetected,
    requiresBannerTranslation: false,
    sourceUrl: input.sourceUrl,
    upstreamHash: input.upstreamTierSignature,
    detectedAtIso: input.nowIso,
    lastCheckedAtIso: input.nowIso,
    targetRepoPath: input.targetRepoPath,
    targetFiles: [
      'src/infrastructure/db/seed-data.ts',
      'src/components/macro/StrongestTierListMacro.tsx',
      'src/components/macro/RerollTierListMacro.tsx',
    ],
    diff: {
      summary: driftDetected
        ? `AppMedia Strongest/Reroll Tier matrix hash changed (${input.baselineSignature} -> ${input.upstreamTierSignature}).`
        : `Tier matrix signature (${input.upstreamTierSignature}) matches verified Ascalon v2.4 rankings.`,
      localCount: input.localSssNames.length,
      upstreamCount: input.localSssNames.length,
      addedItems: driftDetected && input.upstreamLatestUpdateSnippet
        ? [`LATEST UPDATE LOG: ${input.upstreamLatestUpdateSnippet}`]
        : [],
      removedOrExpiredItems: [],
      changedFields: driftDetected
        ? [
            {
              key: 'tierMatrixSignature',
              localValue: input.baselineSignature || 'initial',
              upstreamValue: input.upstreamTierSignature,
            },
          ]
        : [],
      rawJapaneseAssetUrls: [],
    },
    glossaryHints: [],
    agentExecutionSteps: [
      'Compare SSS / SS / S / A / B / C rows on https://appmedia.jp/starsavior/79517270 and https://appmedia.jp/starsavior/79517015.',
      'Update overallTier, rerollTier, and staticData.appMediaTier in STAR_SAVIOR_CHARACTERS_SEED.',
      'Update Latest Ranking Update notes in StrongestTierListMacro.tsx if a newly released Savior was ranked.',
    ],
  };
}

export function evaluateHomePortalDiff(input: {
  localFeaturedUrls: string[];
  localUpcomingArticleUrls: string[];
  upstreamFeaturedItems: Array<{ url: string; titleJa: string; bannerUrl?: string }>;
  upstreamUpcomingArticleUrls: string[];
  sourceUrl: string;
  targetRepoPath: string;
  nowIso: string;
}): AgentQueueItem {
  const localFeatSet = new Set(input.localFeaturedUrls);
  const localUpSet = new Set(input.localUpcomingArticleUrls);

  const newFeatured = input.upstreamFeaturedItems.filter((f) => !localFeatSet.has(f.url));
  const newUpcoming = [...new Set(input.upstreamUpcomingArticleUrls)].filter(
    (u) => !localUpSet.has(u)
  );

  const newBannerAssets = newFeatured
    .map((f) => f.bannerUrl)
    .filter((u): u is string => Boolean(u));

  const addedItems = [
    ...newFeatured.map((f) => `NEW FEATURED PICKUP: ${f.titleJa} (${f.url})`),
    ...newUpcoming.map((u) => `NEW UPCOMING GAME ENTRY: ${u}`),
  ];

  const driftDetected = addedItems.length > 0;
  const requiresBannerTranslation = newBannerAssets.length > 0;
  const upstreamHash = sha256Short({
    surface: 'HOME_PORTAL',
    featuredUrls: input.upstreamFeaturedItems.map((f) => f.url).sort(),
    upcomingUrls: [...new Set(input.upstreamUpcomingArticleUrls)].sort(),
  });

  return {
    id: 'diff:portal:appmedia-home',
    surface: 'APPMEDIA_HOME_PORTAL',
    title: driftDetected
      ? `Home Portal Updates (+${newFeatured.length} Pickup / +${newUpcoming.length} Upcoming Games)`
      : `Home Portal Feed In Sync (${input.localUpcomingArticleUrls.length} Tracked Upcoming Games)`,
    priority: driftDetected ? 'P2_NORMAL' : 'P3_INFO',
    status: driftDetected ? 'PENDING_AGENT' : 'IN_SYNC',
    driftDetected,
    requiresBannerTranslation,
    sourceUrl: input.sourceUrl,
    upstreamHash,
    detectedAtIso: input.nowIso,
    lastCheckedAtIso: input.nowIso,
    targetRepoPath: input.targetRepoPath,
    targetFiles: [
      'src/infrastructure/db/appmedia-home-data.ts',
      'src/components/macro/AscalonHomeMacro.tsx',
    ],
    diff: {
      summary: driftDetected
        ? `AppMedia Home Portal posted ${newFeatured.length} new pickup article(s) and ${newUpcoming.length} new upcoming game calendar entry/entries.`
        : 'Featured pickup guides and upcoming release calendar entries match AppMedia.',
      localCount: input.localFeaturedUrls.length + input.localUpcomingArticleUrls.length,
      upstreamCount:
        input.upstreamFeaturedItems.length +
        new Set(input.upstreamUpcomingArticleUrls).size,
      addedItems,
      removedOrExpiredItems: [],
      changedFields: [],
      rawJapaneseAssetUrls: newBannerAssets,
    },
    glossaryHints: [],
    agentExecutionSteps: [
      'Review newly added Pickup Articles or Upcoming Games on https://appmedia.jp/ (ignore pure PR/ad noise if unrelated to gacha/mobile games).',
      ...(requiresBannerTranslation
        ? [
            'Localize new Home Pickup thumbnail banners into English WebP in public/banners/home/ before updating appmedia-home-data.ts.',
          ]
        : []),
      'Update APPMEDIA_HOME_PORTAL_DATA in src/infrastructure/db/appmedia-home-data.ts and ARTICLE_SUMMARIES in AscalonHomeMacro.tsx.',
    ],
  };
}

/**
 * Preserves APPLIED / IGNORED decisions made by the Agent as long as upstreamHash has NOT changed.
 * If AppMedia modifies the page again (new upstreamHash), the item automatically re-opens as PENDING_AGENT!
 */
export function mergeQueueWithDecisions(
  freshItems: AgentQueueItem[],
  previousItems: AgentQueueItem[]
): AgentQueueItem[] {
  const prevById = new Map(previousItems.map((item) => [item.id, item]));

  const merged = freshItems.map((fresh) => {
    const prev = prevById.get(fresh.id);
    if (!prev) return fresh;

    if (
      prev.upstreamHash === fresh.upstreamHash &&
      (prev.status === 'APPLIED' || prev.status === 'IGNORED')
    ) {
      return {
        ...fresh,
        status: prev.status,
        detectedAtIso: prev.detectedAtIso,
        decisionNote: prev.decisionNote,
      };
    }

    if (prev.upstreamHash === fresh.upstreamHash) {
      return {
        ...fresh,
        detectedAtIso: prev.detectedAtIso,
      };
    }

    return fresh;
  });

  return merged.sort((a, b) => {
    const aPending = a.status === 'PENDING_AGENT' ? 0 : 1;
    const bPending = b.status === 'PENDING_AGENT' ? 0 : 1;
    if (aPending !== bPending) return aPending - bPending;
    return PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority];
  });
}

export function formatSingleTaskPrompt(item: AgentQueueItem): string {
  const lines: string[] = [
    `# AGENT SYNC TASK: ${item.id}`,
    `- Priority: ${item.priority} | Status: ${item.status}`,
    `- Surface: ${item.surface}`,
    `- Upstream Source: ${item.sourceUrl}`,
    `- Target Repo: ${item.targetRepoPath}`,
    `- Target Files: ${item.targetFiles.join(', ')}`,
    `- Banner AI Localization Needed: ${item.requiresBannerTranslation ? 'YES' : 'NO'}`,
    '',
    `## Semantic Diff Summary`,
    item.diff.summary,
  ];

  if (item.diff.addedItems.length > 0) {
    lines.push('', '### Added / New on AppMedia:');
    for (const add of item.diff.addedItems) lines.push(`  + ${add}`);
  }
  if (item.diff.removedOrExpiredItems.length > 0) {
    lines.push('', '### Expired / Retired Locally:');
    for (const rem of item.diff.removedOrExpiredItems) lines.push(`  - ${rem}`);
  }
  if (item.diff.changedFields.length > 0) {
    lines.push('', '### Changed Signatures / Fields:');
    for (const ch of item.diff.changedFields) {
      lines.push(`  ~ ${ch.key}: "${ch.localValue}" -> "${ch.upstreamValue}"`);
    }
  }
  if (item.diff.rawJapaneseAssetUrls.length > 0) {
    lines.push('', '### Raw Japanese Banner Assets Requiring English AI Edit:');
    for (const u of item.diff.rawJapaneseAssetUrls) lines.push(`  * ${u}`);
  }
  if (item.glossaryHints.length > 0) {
    lines.push('', '### Official English Glossary Reference:');
    for (const g of item.glossaryHints) {
      lines.push(`  - ${g.iconKey} => "${g.englishName}" (slug: ${g.slug})`);
    }
  }
  lines.push('', '## Required Agent Execution Steps:');
  item.agentExecutionSteps.forEach((step, idx) => {
    lines.push(`${idx + 1}. ${step}`);
  });
  lines.push(
    `${item.agentExecutionSteps.length + 1}. After verifying tests & build in gacha-meta-engine, mark "${item.id}" as APPLIED via POST http://localhost:3006/api/agent/decision.`
  );

  return lines.join('\n');
}

export function formatAgentBriefMarkdown(state: AgentSyncState): string {
  const pending = state.queue.filter((q) => q.status === 'PENDING_AGENT');
  const inSync = state.queue.filter((q) => q.status === 'IN_SYNC' || q.status === 'APPLIED');

  const lines: string[] = [
    '# ASCALON.GG — AGENT-FIRST SYNC BRIEF',
    `- Last Scan: ${state.lastFullScanIso || 'Never'} (${state.scanDurationMs}ms)`,
    `- Target Application Repo: ${state.targetRepoRoot}`,
    `- Local Inventory: ${state.localInventory.saviorsCount} Saviors | ${state.localInventory.arcanaCount} Arcana | ${state.localInventory.guidesCount} Guides | ${state.localInventory.upcomingGamesCount} Upcoming Games | ${state.localInventory.promoCodesCount} Promo Codes | ${state.localInventory.activeCountdownTimersCount} Live JST Timers`,
    `- Queue Summary: ${pending.length} PENDING_AGENT | ${inSync.length} IN_SYNC / APPLIED | ${state.errors.length} Scan Warnings`,
    '',
  ];

  if (pending.length === 0) {
    lines.push(
      '## STATUS: 100% IN SYNC WITH APPMEDIA',
      'No pending upstream changes require Agent intervention right now.'
    );
  } else {
    lines.push(`## PENDING AGENT ACTION QUEUE (${pending.length} ITEMS)`);
    for (const item of pending) {
      lines.push('', '---', formatSingleTaskPrompt(item));
    }
  }

  if (state.errors.length > 0) {
    lines.push('', '## UPSTREAM SCAN WARNINGS');
    for (const err of state.errors) {
      lines.push(`- [${err.surface}] ${err.message} (${err.occurredAtIso})`);
    }
  }

  return lines.join('\n');
}
