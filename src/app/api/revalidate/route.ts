import { NextResponse } from 'next/server';
import { revalidateTag, revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization');
  const expectedSecret = process.env.REVALIDATE_SECRET || 'starsavior-revalidate-secret-2026';

  if (authHeader !== `Bearer ${expectedSecret}`) {
    return NextResponse.json(
      { success: false, error: { message: 'Unauthorized revalidation request', code: 'UNAUTHORIZED' } },
      { status: 401 }
    );
  }

  revalidateTag('starsavior-wiki');
  revalidatePath('/', 'layout');

  return NextResponse.json({
    success: true,
    data: { revalidatedAt: new Date().toISOString() },
  });
}
