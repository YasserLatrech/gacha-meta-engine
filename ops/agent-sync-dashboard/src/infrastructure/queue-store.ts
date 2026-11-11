import fs from 'node:fs';
import path from 'node:path';
import { AgentSyncStateSchema, type AgentSyncState } from '../domain/schemas.js';

export function resolveDataDir(opsRoot: string): string {
  return path.join(opsRoot, 'data');
}

export function loadSyncState(opsRoot: string, defaultTargetRepo: string): AgentSyncState {
  const filePath = path.join(resolveDataDir(opsRoot), 'agent-queue.json');
  if (!fs.existsSync(filePath)) {
    return {
      schemaVersion: '1.0.0',
      targetRepoRoot: defaultTargetRepo,
      lastFullScanIso: null,
      scanDurationMs: 0,
      localInventory: {
        saviorsCount: 0,
        arcanaCount: 0,
        guidesCount: 0,
        upcomingGamesCount: 0,
        promoCodesCount: 0,
        activeCountdownTimersCount: 0,
      },
      queue: [],
      errors: [],
    };
  }

  const raw = JSON.parse(fs.readFileSync(filePath, 'utf8')) as unknown;
  return AgentSyncStateSchema.parse(raw);
}

export function saveSyncState(opsRoot: string, state: AgentSyncState, briefMarkdown: string): void {
  const validated = AgentSyncStateSchema.parse(state);
  const dataDir = resolveDataDir(opsRoot);
  fs.mkdirSync(dataDir, { recursive: true });

  const jsonTmp = path.join(dataDir, 'agent-queue.json.tmp');
  const jsonFinal = path.join(dataDir, 'agent-queue.json');
  fs.writeFileSync(jsonTmp, JSON.stringify(validated, null, 2), 'utf8');
  fs.renameSync(jsonTmp, jsonFinal);

  const briefPath = path.join(dataDir, 'latest-agent-brief.md');
  fs.writeFileSync(briefPath, briefMarkdown, 'utf8');
}
