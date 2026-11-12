import { NextRequest, NextResponse } from 'next/server';
import { analyticsService } from '@/di/container';
import {
  AnalyticsTrackBodySchema,
  checkAnalyticsRateLimit,
  extractClientIp,
  hashClientIp,
  isAutomatedCrawler,
} from '@/application/analytics.service';
import {
  readBoundedJsonBody,
  SECURITY_NO_STORE_HEADERS,
} from '@/application/security.service';

export const dynamic = 'force-dynamic';

const MAX_ANALYTICS_BODY_BYTES = 1024;

export async function GET(request: NextRequest) {
  const daysRaw = Number(request.nextUrl.searchParams.get('days') ?? '14');
  const days = Number.isFinite(daysRaw) ? Math.min(Math.max(Math.trunc(daysRaw), 1), 60) : 14;
  const summary = await analyticsService.getDashboardSummary(days);
  return NextResponse.json(summary, {
    status: 200,
    headers: SECURITY_NO_STORE_HEADERS,
  });
}

export async function POST(request: NextRequest) {
  const ua = request.headers.get('user-agent');
  if (isAutomatedCrawler(ua)) {
    return NextResponse.json(
      { ok: true, skippedBot: true },
      { status: 200, headers: SECURITY_NO_STORE_HEADERS }
    );
  }

  const ip = extractClientIp(request.headers);
  const visitorHash = hashClientIp(ip);

  const rateCheck = checkAnalyticsRateLimit(visitorHash);
  if (!rateCheck.allowed) {
    return NextResponse.json(
      { error: 'Too many analytics events', code: 'RATE_LIMITED' },
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
    maxBytes: MAX_ANALYTICS_BODY_BYTES,
    allowEmpty: false,
  });

  if (!boundedBody.ok) {
    return NextResponse.json(
      { error: boundedBody.message, code: boundedBody.code },
      { status: boundedBody.status, headers: SECURITY_NO_STORE_HEADERS }
    );
  }

  const parsed = AnalyticsTrackBodySchema.safeParse(boundedBody.data);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid analytics payload', code: 'VALIDATION_ERROR' },
      { status: 400, headers: SECURITY_NO_STORE_HEADERS }
    );
  }

  const result = await analyticsService.trackPageview({
    path: parsed.data.path,
    referrerHost: parsed.data.referrerHost,
    visitorHash,
  });

  return NextResponse.json(result, {
    status: 200,
    headers: SECURITY_NO_STORE_HEADERS,
  });
}
