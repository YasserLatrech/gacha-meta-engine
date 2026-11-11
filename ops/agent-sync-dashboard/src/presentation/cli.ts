import {
  getCurrentSyncState,
  recordAgentDecision,
  runUpstreamAppMediaScan,
} from '../application/sync-coordinator.js';
import { formatAgentBriefMarkdown } from '../application/diff-engine.js';
import { AgentDecisionInputSchema } from '../domain/schemas.js';

async function main(): Promise<void> {
  const [cmd, arg1, arg2, ...rest] = process.argv.slice(2);

  if (cmd === 'scan' || !cmd) {
    console.log('[ASCALON-AGENT-OPS] Scanning 6 live AppMedia surfaces against gacha-meta-engine...');
    const state = await runUpstreamAppMediaScan();
    const pending = state.queue.filter((q) => q.status === 'PENDING_AGENT');
    console.log(
      `[ASCALON-AGENT-OPS] Scan complete in ${state.scanDurationMs}ms | Pending Agent Tasks: ${pending.length} / ${state.queue.length}`
    );
    console.log('\n' + formatAgentBriefMarkdown(state));
    return;
  }

  if (cmd === 'brief') {
    const state = getCurrentSyncState();
    console.log(formatAgentBriefMarkdown(state));
    return;
  }

  if (cmd === 'queue') {
    const state = getCurrentSyncState();
    console.log(JSON.stringify(state, null, 2));
    return;
  }

  if (cmd === 'decide') {
    const parsed = AgentDecisionInputSchema.parse({
      id: arg1,
      status: arg2,
      note: rest.join(' ') || undefined,
    });
    const updated = recordAgentDecision(parsed);
    console.log(
      `[ASCALON-AGENT-OPS] Updated ${parsed.id} -> ${parsed.status}. Remaining PENDING_AGENT: ${
        updated.queue.filter((q) => q.status === 'PENDING_AGENT').length
      }`
    );
    return;
  }

  console.error('Unknown command. Usage: tsx src/presentation/cli.ts [scan|brief|queue|decide <id> <APPLIED|IGNORED|PENDING_AGENT> [note]]');
  process.exit(1);
}

main().catch((err) => {
  console.error('[ASCALON-AGENT-OPS] Fatal CLI error:', err);
  process.exit(1);
});
