import http from 'node:http';
import {
  getCurrentSyncState,
  recordAgentDecision,
  runUpstreamAppMediaScan,
} from '../application/sync-coordinator.js';
import { formatAgentBriefMarkdown } from '../application/diff-engine.js';
import { AgentDecisionInputSchema } from '../domain/schemas.js';
import { renderAgentWorkbenchHtml } from './dashboard-html.js';

const PORT = Number(process.env.PORT || 3006);
const HOST = process.env.HOST || '127.0.0.1';
const MAX_BODY_BYTES = 16_384;

function sendJson(res: http.ServerResponse, statusCode: number, payload: unknown): void {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  });
  res.end(JSON.stringify(payload, null, 2));
}

function readJsonBody(req: http.IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    let totalBytes = 0;
    req.on('data', (chunk: Buffer) => {
      totalBytes += chunk.byteLength;
      if (totalBytes > MAX_BODY_BYTES) {
        req.destroy();
        reject(new Error('PAYLOAD_TOO_LARGE'));
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8');
        resolve(raw ? (JSON.parse(raw) as unknown) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

let activeScanPromise: Promise<ReturnType<typeof getCurrentSyncState>> | null = null;

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url || '/', `http://localhost:${PORT}`);

    if (req.method === 'GET' && url.pathname === '/') {
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
      });
      res.end(renderAgentWorkbenchHtml());
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/agent/queue') {
      const state = getCurrentSyncState();
      sendJson(res, 200, { success: true, data: state });
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/agent/next-task') {
      const state = getCurrentSyncState();
      const nextTask = state.queue.find((q) => q.status === 'PENDING_AGENT') || null;
      sendJson(res, 200, {
        success: true,
        data: {
          mode: 'AUTONOMOUS_AGENT_ONLY',
          status: nextTask ? 'ACTION_REQUIRED' : 'IDLE_IN_SYNC',
          pendingCount: state.queue.filter((q) => q.status === 'PENDING_AGENT').length,
          lastFullScanIso: state.lastFullScanIso,
          nextTask,
        },
      });
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/agent/brief') {
      const state = getCurrentSyncState();
      const brief = formatAgentBriefMarkdown(state);
      res.writeHead(200, {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Cache-Control': 'no-store',
      });
      res.end(brief);
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/agent/scan') {
      if (!activeScanPromise) {
        activeScanPromise = runUpstreamAppMediaScan().finally(() => {
          activeScanPromise = null;
        });
      }
      const state = await activeScanPromise;
      sendJson(res, 200, { success: true, data: state });
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/agent/decision') {
      const body = await readJsonBody(req);
      const parsed = AgentDecisionInputSchema.safeParse(body);
      if (!parsed.success) {
        sendJson(res, 400, {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid AgentDecisionInput payload',
            details: parsed.error.flatten(),
          },
        });
        return;
      }
      const updated = recordAgentDecision(parsed.data);
      sendJson(res, 200, { success: true, data: updated });
      return;
    }

    sendJson(res, 404, {
      success: false,
      error: { code: 'NOT_FOUND', message: `Route ${url.pathname} not found` },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    sendJson(res, 500, {
      success: false,
      error: { code: 'INTERNAL_ERROR', message },
    });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`[ASCALON-AGENT-OPS] Agent Sync Control Plane listening on http://${HOST}:${PORT}`);
});
