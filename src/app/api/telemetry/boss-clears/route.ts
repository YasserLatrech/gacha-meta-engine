import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export interface PlayerBossClearEntry {
  id: string;
  gameSlug: string;
  bossSlug: string;
  squadSlugs: string[];
  clearMetric: string;
  effectivenessRating: 'SSS' | 'SS' | 'S' | 'A';
  notes: string;
  submittedAt: string;
}

const TELEMETRY_FILE = path.join(process.cwd(), 'public', 'player-boss-telemetry.json');

function readTelemetry(): PlayerBossClearEntry[] {
  try {
    if (fs.existsSync(TELEMETRY_FILE)) {
      const raw = fs.readFileSync(TELEMETRY_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // Ignore read errors
  }
  return [];
}

function writeTelemetry(entries: PlayerBossClearEntry[]): void {
  try {
    fs.writeFileSync(TELEMETRY_FILE, JSON.stringify(entries, null, 2), 'utf8');
  } catch {
    // Ignore write errors in read-only environments
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const gameSlug = searchParams.get('gameSlug');
  const bossSlug = searchParams.get('bossSlug');

  const all = readTelemetry();
  const filtered = all.filter((e) => {
    if (gameSlug && e.gameSlug !== gameSlug) return false;
    if (bossSlug && e.bossSlug !== bossSlug) return false;
    return true;
  });

  return NextResponse.json({
    count: filtered.length,
    entries: filtered.slice(0, 30),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { gameSlug, bossSlug, squadSlugs, clearMetric, effectivenessRating, notes } = body ?? {};

    if (!gameSlug || !bossSlug || !Array.isArray(squadSlugs) || squadSlugs.length === 0) {
      return NextResponse.json({ error: 'Invalid telemetry payload' }, { status: 400 });
    }

    const entry: PlayerBossClearEntry = {
      id: `clear-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      gameSlug: String(gameSlug),
      bossSlug: String(bossSlug),
      squadSlugs: squadSlugs.map(String).slice(0, 6),
      clearMetric: String(clearMetric || '3 Turns Clear'),
      effectivenessRating: ['SSS', 'SS', 'S', 'A'].includes(effectivenessRating)
        ? effectivenessRating
        : 'SSS',
      notes: String(notes || 'Verified player squad clear').slice(0, 180),
      submittedAt: new Date().toISOString().slice(0, 10),
    };

    const existing = readTelemetry();
    const next = [entry, ...existing].slice(0, 200);
    writeTelemetry(next);

    return NextResponse.json({ ok: true, entry });
  } catch {
    return NextResponse.json({ error: 'Failed to record telemetry' }, { status: 500 });
  }
}
