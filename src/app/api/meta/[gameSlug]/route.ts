import { NextResponse } from 'next/server';
import { getGameHubData } from '../../../../application/services/meta-query.service';

export async function GET(
  _req: Request,
  context: { params: Promise<{ gameSlug: string }> }
) {
  const { gameSlug } = await context.params;
  const hub = await getGameHubData(gameSlug);
  if (!hub) {
    return NextResponse.json({ error: 'Game hub not found' }, { status: 404 });
  }
  return NextResponse.json(hub);
}
