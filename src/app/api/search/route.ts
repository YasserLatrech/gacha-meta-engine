import { NextResponse } from 'next/server';
import { buildSearchItemsFromDataset, getStarSaviorDataset } from '@/di/container';

export const revalidate = 300;

export async function GET() {
  const dataset = await getStarSaviorDataset();
  const items = buildSearchItemsFromDataset(dataset);

  return NextResponse.json(
    { items },
    {
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=3600',
        'X-Content-Type-Options': 'nosniff',
      },
    }
  );
}
