import { NextRequest, NextResponse } from 'next/server';
import { voteService } from '@/di/container';
import {
  VoteScopeSchema,
  CastVoteBodySchema,
  extractClientIp,
  hashClientIp,
  checkVoteRateLimit,
} from '@/application/vote.service';
import {
  readBoundedJsonBody,
  SECURITY_NO_STORE_HEADERS,
} from '@/application/security.service';

export const dynamic = 'force-dynamic';

const MAX_VOTE_BODY_BYTES = 2048;

export async function GET(request: NextRequest) {
  const rawScope = request.nextUrl.searchParams.get('scope') ?? '';
  const parsedScope = VoteScopeSchema.safeParse(rawScope);

  if (!parsedScope.success) {
    return NextResponse.json(
      { error: 'Invalid scope parameter', code: 'VALIDATION_ERROR' },
      { status: 400, headers: SECURITY_NO_STORE_HEADERS }
    );
  }

  const ip = extractClientIp(request.headers);
  const ipHash = hashClientIp(ip);
  const snapshot = await voteService.getVotesSnapshot(parsedScope.data, ipHash);

  return NextResponse.json(snapshot, {
    status: 200,
    headers: SECURITY_NO_STORE_HEADERS,
  });
}

export async function POST(request: NextRequest) {
  const ip = extractClientIp(request.headers);
  const ipHash = hashClientIp(ip);

  const rateCheck = checkVoteRateLimit(ipHash);
  if (!rateCheck.allowed) {
    return NextResponse.json(
      {
        error: 'Too many vote requests. Please wait a moment and try again.',
        code: 'RATE_LIMITED',
      },
      {
        status: 429,
        headers: {
          ...SECURITY_NO_STORE_HEADERS,
          'Retry-After': String(rateCheck.retryAfterSec),
        },
      }
    );
  }

  const boundedBody = await readBoundedJsonBody(request, {
    maxBytes: MAX_VOTE_BODY_BYTES,
    allowEmpty: false,
  });

  if (!boundedBody.ok) {
    return NextResponse.json(
      { error: boundedBody.message, code: boundedBody.code },
      { status: boundedBody.status, headers: SECURITY_NO_STORE_HEADERS }
    );
  }

  const parsed = CastVoteBodySchema.safeParse(boundedBody.data);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid vote payload', code: 'VALIDATION_ERROR' },
      { status: 400, headers: SECURITY_NO_STORE_HEADERS }
    );
  }

  const result = await voteService.castVoteByIp({
    scope: parsed.data.scope,
    targetId: parsed.data.targetId,
    mode: parsed.data.mode,
    ipHash,
  });

  return NextResponse.json(result, {
    status: 200,
    headers: SECURITY_NO_STORE_HEADERS,
  });
}
