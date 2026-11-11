import { z } from 'zod';

export const SyncSurfaceSchema = z.enum([
  'STAR_SAVIOR_GACHA_EVENTS',
  'STAR_SAVIOR_PROMO_CODES',
  'STAR_SAVIOR_CHARACTERS',
  'STAR_SAVIOR_ARCANA',
  'STAR_SAVIOR_TIER_REROLL',
  'APPMEDIA_HOME_PORTAL',
]);
export type SyncSurface = z.infer<typeof SyncSurfaceSchema>;

export const QueuePrioritySchema = z.enum([
  'P0_CRITICAL',
  'P1_HIGH',
  'P2_NORMAL',
  'P3_INFO',
]);
export type QueuePriority = z.infer<typeof QueuePrioritySchema>;

export const QueueItemStatusSchema = z.enum([
  'PENDING_AGENT',
  'IN_SYNC',
  'APPLIED',
  'IGNORED',
]);
export type QueueItemStatus = z.infer<typeof QueueItemStatusSchema>;

export const GlossaryHintSchema = z.object({
  slug: z.string(),
  englishName: z.string(),
  entityType: z.enum(['CHARACTER', 'ARCANA']),
  iconKey: z.string(),
});
export type GlossaryHint = z.infer<typeof GlossaryHintSchema>;

export const StructuredDiffSchema = z.object({
  summary: z.string(),
  localCount: z.number().int().nonnegative(),
  upstreamCount: z.number().int().nonnegative(),
  addedItems: z.array(z.string()),
  removedOrExpiredItems: z.array(z.string()),
  changedFields: z.array(
    z.object({
      key: z.string(),
      localValue: z.string(),
      upstreamValue: z.string(),
    })
  ),
  rawJapaneseAssetUrls: z.array(z.string()),
});
export type StructuredDiff = z.infer<typeof StructuredDiffSchema>;

export const AgentQueueItemSchema = z.object({
  id: z.string().min(1),
  surface: SyncSurfaceSchema,
  title: z.string().min(1),
  priority: QueuePrioritySchema,
  status: QueueItemStatusSchema,
  driftDetected: z.boolean(),
  requiresBannerTranslation: z.boolean(),
  sourceUrl: z.string().url(),
  upstreamHash: z.string().min(8),
  detectedAtIso: z.string(),
  lastCheckedAtIso: z.string(),
  targetRepoPath: z.string(),
  targetFiles: z.array(z.string()),
  diff: StructuredDiffSchema,
  glossaryHints: z.array(GlossaryHintSchema),
  agentExecutionSteps: z.array(z.string()),
  decisionNote: z.string().optional(),
});
export type AgentQueueItem = z.infer<typeof AgentQueueItemSchema>;

export const AgentSyncStateSchema = z.object({
  schemaVersion: z.literal('1.0.0'),
  targetRepoRoot: z.string(),
  lastFullScanIso: z.string().nullable(),
  scanDurationMs: z.number().nonnegative(),
  localInventory: z.object({
    saviorsCount: z.number().int(),
    arcanaCount: z.number().int(),
    guidesCount: z.number().int(),
    upcomingGamesCount: z.number().int(),
    promoCodesCount: z.number().int(),
    activeCountdownTimersCount: z.number().int(),
  }),
  queue: z.array(AgentQueueItemSchema),
  errors: z.array(
    z.object({
      surface: SyncSurfaceSchema,
      message: z.string(),
      occurredAtIso: z.string(),
    })
  ),
});
export type AgentSyncState = z.infer<typeof AgentSyncStateSchema>;

export const AgentDecisionInputSchema = z.object({
  id: z.string().min(1),
  status: z.enum(['PENDING_AGENT', 'APPLIED', 'IGNORED']),
  note: z.string().max(500).optional(),
});
export type AgentDecisionInput = z.infer<typeof AgentDecisionInputSchema>;
