import { NextRequest, NextResponse } from 'next/server';
import {
  VoteScopeSchema,
  CastVoteBodySchema,
  extractClientIp,
  hashClientIp,
  checkVoteRateLimit,
  getVotesSnapshot,
  castVoteByIp,
} from '@/application/vote.service';

export const dynamic = 'force-dynamic';

const NO_STORE_HEADERS = {
  'Cache-Control': 'no-store, no-cache, must-revalidate',
};

export async function GET(request: NextRequest) {
  const rawScope = request.nextUrl.searchParams.get('scope') ?? '';
  const parsedScope = VoteScopeSchema.safeParse(rawScope);

  if (!parsedScope.success) {
    return NextResponse.json(
      { error: 'Invalid scope parameter' },
      { status: 400, headers: NO_STORE_HEADERS }
    );
  }

  const ip = extractClientIp(request.headers);
  const ipHash = hashClientIp(ip);
  const snapshot = await getVotesSnapshot(parsedScope.data, ipHash);

  return NextResponse.json(snapshot, { status: 200, headers: NO_STORE_HEADERS });
}

export async function POST(request: NextRequest) {
  const ip = extractClientIp(request.headers);
  const ipHash = hashClientIp(ip);

  const rateCheck = checkVoteRateLimit(ipHash);
  if (!rateCheck.allowed) {
    return NextResponse.json(
      { error: 'Too many vote requests. Please wait a moment and try again.' },
      {
        status: 429,
        headers: {
          ...NO_STORE_HEADERS,
          'Retry-After': String(rateCheck.retryAfterSec),
        },
      }
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON request body' },
      { status: 400, headers: NO_STORE_HEADERS }
    );
  }

  const parsed = CastVoteBodySchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid vote payload' },
      { status: 400, headers: NO_STORE_HEADERS }
    );
  }

  const result = await castVoteByIp({
    scope: parsed.data.scope,
    targetId: parsed.data.targetId,
    mode: parsed.data.mode,
    ipHash,
  });

  return NextResponse.json(result, {
    status: 200,
    headers: NO_STORE_HEADERS,
  });
}
