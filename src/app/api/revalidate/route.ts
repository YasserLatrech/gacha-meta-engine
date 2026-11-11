import { NextResponse } from 'next/server';
import { revalidateTag, revalidatePath } from 'next/cache';
import { RevalidateBodySchema, type ApiResponse } from '@/domain/schemas';
import {
  BoundedSlidingWindowLimiter,
  extractClientIp,
  hashClientIp,
  readBoundedJsonBody,
  SECURITY_NO_STORE_HEADERS,
  timingSafeVerifyBearerSecret,
} from '@/application/security.service';

export const dynamic = 'force-dynamic';

// Strict critical-endpoint rate limit: max 5 revalidation attempts per 60s per IP
const revalidateLimiter = new BoundedSlidingWindowLimiter(5, 60_000, 1_000);

export async function POST(request: Request) {
  const ipHash = hashClientIp(extractClientIp(request.headers));
  const rateCheck = revalidateLimiter.check(ipHash);

  if (!rateCheck.allowed) {
    const body: ApiResponse<never> = {
      success: false,
      error: {
        message: 'Too many revalidation attempts. Please wait before retrying.',
        code: 'RATE_LIMITED',
      },
    };
    return NextResponse.json(body, {
      status: 429,
      headers: {
        ...SECURITY_NO_STORE_HEADERS,
        'Retry-After': String(rateCheck.retryAfterSec),
      },
    });
  }

  const secretCheck = timingSafeVerifyBearerSecret(
    request.headers.get('authorization'),
    process.env.REVALIDATE_SECRET
  );

  if (!secretCheck.ok) {
    const body: ApiResponse<never> = {
      success: false,
      error: {
        message: secretCheck.message,
        code: secretCheck.code,
      },
    };
    return NextResponse.json(body, {
      status: secretCheck.status,
      headers: SECURITY_NO_STORE_HEADERS,
    });
  }

  const boundedBody = await readBoundedJsonBody(request, {
    maxBytes: 1024,
    allowEmpty: true,
  });

  if (!boundedBody.ok) {
    const body: ApiResponse<never> = {
      success: false,
      error: {
        message: boundedBody.message,
        code: boundedBody.code,
      },
    };
    return NextResponse.json(body, {
      status: boundedBody.status,
      headers: SECURITY_NO_STORE_HEADERS,
    });
  }

  const parsed = RevalidateBodySchema.safeParse(boundedBody.data);
  if (!parsed.success) {
    const body: ApiResponse<never> = {
      success: false,
      error: {
        message: 'Invalid revalidation payload.',
        code: 'VALIDATION_ERROR',
      },
    };
    return NextResponse.json(body, {
      status: 400,
      headers: SECURITY_NO_STORE_HEADERS,
    });
  }

  const targetTag = parsed.data.tag ?? 'starsavior-wiki';
  const targetPath = parsed.data.path ?? '/';

  revalidateTag(targetTag);
  revalidatePath(targetPath, 'layout');

  const responseBody: ApiResponse<{ revalidatedAt: string; tag: string; path: string }> = {
    success: true,
    data: {
      revalidatedAt: new Date().toISOString(),
      tag: targetTag,
      path: targetPath,
    },
  };

  return NextResponse.json(responseBody, {
    status: 200,
    headers: SECURITY_NO_STORE_HEADERS,
  });
}
