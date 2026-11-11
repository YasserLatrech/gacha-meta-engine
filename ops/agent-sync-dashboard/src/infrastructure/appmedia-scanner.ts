import { sha256Short } from '../application/diff-engine.js';

const BROWSER_HEADERS: Record<string, string> = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
  Accept:
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'Accept-Language': 'ja,en-US;q=0.9,en;q=0.8',
  'Sec-Ch-Ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Windows"',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'none',
};

export async function fetchHtmlWithRetry(url: string, maxAttempts = 3): Promise<string> {
  let lastError: Error | null = null;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 12000);
      const res = await fetch(url, {
        headers: BROWSER_HEADERS,
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} from ${url}`);
      }
      return await res.text();
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      if (attempt < maxAttempts) {
        const delayMs = 800 * Math.pow(2, attempt - 1);
        await new Promise((r) => setTimeout(r, delayMs));
      }
    }
  }
  throw lastError || new Error(`Failed fetching ${url}`);
}

export interface UpstreamStarSaviorTopScan {
  gachaPeriods: string[];
  eventDates: string[];
  eventAndGachaBannerUrls: string[];
}

export async function scanStarSaviorTop(): Promise<UpstreamStarSaviorTopScan> {
  const html = await fetchHtmlWithRetry('https://appmedia.jp/starsavior');
  const stripped = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '');

  const gachaIdx = stripped.indexOf('開催中のガチャ');
  const eventIdx = stripped.indexOf('開催中のイベント');
  const rescueIdx = stripped.indexOf('スターセイヴァー救援の旅攻略');

  const gachaWindow =
    gachaIdx !== -1
      ? stripped.slice(gachaIdx, eventIdx !== -1 ? eventIdx : gachaIdx + 4000)
      : '';
  const eventWindow =
    eventIdx !== -1
      ? stripped.slice(eventIdx, rescueIdx !== -1 ? rescueIdx : eventIdx + 4000)
      : '';

  const gachaPlain = gachaWindow.replace(/<[^>]+>/g, ' ');
  const eventPlain = eventWindow.replace(/<[^>]+>/g, ' ');

  const gachaPeriods = [
    ...new Set([...gachaPlain.matchAll(/20\d{2}\/\d{1,2}\/\d{1,2}/g)].map((m) => m[0])),
  ];
  const eventDates = [
    ...new Set(
      [...eventPlain.matchAll(/20\d{2}\/\d{1,2}\/\d{1,2}(?:\s+\d{1,2}:\d{2}:\d{2})?/g)].map(
        (m) => m[0]
      )
    ),
  ];

  // Extract event banner images inside the event table window
  const eventAndGachaBannerUrls = [
    ...new Set(
      [
        ...eventWindow.matchAll(
          /https?:\/\/appmedia\.jp\/wp-content\/uploads\/20\d{2}\/\d{2}\/[^"'?\s>]+\.(?:webp|png|jpg)/gi
        ),
      ].map((m) => m[0])
    ),
  ];

  return {
    gachaPeriods,
    eventDates,
    eventAndGachaBannerUrls,
  };
}

const CODE_STOPWORDS = new Set([
  'STUDIOBSIDE',
  'STARSAVIOR',
  'JAVASCRIPT',
  'UNDEFINED',
  'APPMEDIAJP',
  'SMARTPHONE',
  'BACKGROUND',
  'NAVIGATION',
  'CONTROLLER',
  'COLLECTION',
  'SCREENSHOT',
]);

export async function scanStarSaviorPromoCodes(): Promise<string[]> {
  const html = await fetchHtmlWithRetry('https://appmedia.jp/starsavior/79521875');
  const articleIdx = html.indexOf('クーポンコード一覧');
  const windowHtml = articleIdx !== -1 ? html.slice(articleIdx, articleIdx + 18000) : html;
  const plain = windowHtml
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/https?:\/\/[^\s"'<>]+/gi, ' ')
    .replace(/<[^>]+>/g, ' ');

  const candidates = [...new Set([...plain.matchAll(/\b([A-Z0-9]{10,22})\b/g)].map((m) => m[1]))];
  return candidates.filter(
    (code) =>
      /[A-Z]/.test(code) &&
      !/^2F\d+$/.test(code) &&
      !/^\d+$/.test(code) &&
      !CODE_STOPWORDS.has(code)
  );
}

export async function scanStarSaviorCharacters(): Promise<{
  characterIcons: string[];
  newCharHeadline: string;
}> {
  const [listHtml, newCharHtml] = await Promise.all([
    fetchHtmlWithRetry('https://appmedia.jp/starsavior/79517909'),
    fetchHtmlWithRetry('https://appmedia.jp/starsavior/80161120'),
  ]);

  const libIcons = [
    ...new Set(
      [...listHtml.matchAll(/lib\/starsavior\/img\/([A-Za-z0-9_]+_icon\.webp)/g)].map((m) => m[1])
    ),
  ].filter((name) => !name.startsWith('ARCANA_') && !name.startsWith('SKILL_'));

  const h2Matches = [...newCharHtml.matchAll(/<h2[^>]*>([\s\S]{1,120}?)<\/h2>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  );

  return {
    characterIcons: libIcons,
    newCharHeadline: h2Matches.slice(0, 3).join(' | '),
  };
}

export async function scanStarSaviorArcana(): Promise<string[]> {
  const html = await fetchHtmlWithRetry('https://appmedia.jp/starsavior/79519163');
  return [
    ...new Set(
      [...html.matchAll(/lib\/starsavior\/img\/(ARCANA_[A-Za-z0-9_]+\.webp)/g)].map((m) => m[1])
    ),
  ];
}

export async function scanStarSaviorTierAndReroll(): Promise<{
  tierSignature: string;
  latestUpdateSnippet: string;
}> {
  const [tierHtml, rerollHtml] = await Promise.all([
    fetchHtmlWithRetry('https://appmedia.jp/starsavior/79517270'),
    fetchHtmlWithRetry('https://appmedia.jp/starsavior/79517015'),
  ]);

  const extractTableIcons = (raw: string) =>
    [...raw.matchAll(/lib\/starsavior\/img\/([A-Za-z0-9_]+_icon\.webp)/g)]
      .map((m) => m[1])
      .slice(0, 60);

  const tierIcons = extractTableIcons(tierHtml);
  const rerollIcons = extractTableIcons(rerollHtml);

  const updateIdx = tierHtml.indexOf('最新更新情報');
  const latestUpdateSnippet =
    updateIdx !== -1
      ? tierHtml
          .slice(updateIdx, updateIdx + 600)
          .replace(/<[^>]+>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
          .slice(0, 160)
      : '';

  return {
    tierSignature: sha256Short({ tierIcons, rerollIcons }),
    latestUpdateSnippet,
  };
}

export interface UpstreamNewGameCalendarEntry {
  articleUrl: string;
  titleJa: string;
  categoryJa: string;
  status: 'Released' | 'Upcoming';
  timeJa: string;
  exactIsoDate: string | null;
}

function parseJapaneseExactDateIso(timeJa: string): string | null {
  const m = timeJa.trim().match(/^(\d{4})年(\d{1,2})月(\d{1,2})日(?:配信開始)?$/);
  if (!m?.[1] || !m[2] || !m[3]) return null;
  return `${m[1]}-${m[2].padStart(2, '0')}-${m[3].padStart(2, '0')}`;
}

export async function scanAppMediaHomePortal(): Promise<{
  featuredItems: Array<{ url: string; titleJa: string; bannerUrl?: string }>;
  upcomingArticleUrls: string[];
  newGameCalendarEntries: UpstreamNewGameCalendarEntry[];
}> {
  const [html, newGameHtml] = await Promise.all([
    fetchHtmlWithRetry('https://appmedia.jp/'),
    fetchHtmlWithRetry('https://appmedia.jp/newgame'),
  ]);

  const upcomingArticleUrls = [
    ...new Set(
      [...html.matchAll(/https:\/\/appmedia\.jp\/newgame\/\d+/g)].map((m) => m[0])
    ),
  ];

  // Extract full structured calendar entries from https://appmedia.jp/newgame
  const newGameCalendarEntries: UpstreamNewGameCalendarEntry[] = [];
  const liRegex =
    /<li[^>]*class="output_li_each"[^>]*data-category="([^"]+)"[^>]*data-title="([^"]+)"[\s\S]*?<\/li>/gi;
  let liMatch: RegExpExecArray | null;
  while ((liMatch = liRegex.exec(newGameHtml)) !== null) {
    const block = liMatch[0];
    const categoryJa = liMatch[1] ?? '';
    const titleJa = liMatch[2] ?? '';
    const urlM = block.match(/href="(https:\/\/appmedia\.jp\/newgame\/\d+)"/);
    const statusM = block.match(/data-status="([^"]+)"/);
    const timeM = block.match(/<time>([^<]+)<\/time>/);
    if (!urlM?.[1]) continue;
    const timeJa = timeM?.[1]?.trim() ?? '';
    newGameCalendarEntries.push({
      articleUrl: urlM[1],
      titleJa,
      categoryJa,
      status: statusM?.[1] === '配信済' ? 'Released' : 'Upcoming',
      timeJa,
      exactIsoDate: parseJapaneseExactDateIso(timeJa),
    });
  }

  // Extract Pickup Featured Strategy Articles (ピックアップ攻略記事)
  const pickupIdx = html.indexOf('ピックアップ攻略記事');
  const pickupSlice = pickupIdx !== -1 ? html.slice(pickupIdx, pickupIdx + 20000) : '';
  const cardMatches = [
    ...pickupSlice.matchAll(
      /<a[^>]+href="(https:\/\/appmedia\.jp\/[^"]+)"[^>]*>[\s\S]{0,600}?<img[^>]+(?:data-src|src)="(https:\/\/[^"]+)"[\s\S]{0,400}?<\/a>/gi
    ),
  ];

  const featuredItems: Array<{ url: string; titleJa: string; bannerUrl?: string }> = [];
  const seenUrls = new Set<string>();
  for (const m of cardMatches) {
    const url = m[1];
    const bannerUrl = m[2];
    if (!/^https:\/\/appmedia\.jp\/[a-z0-9_-]+\/\d+\/?$/i.test(url)) continue;
    if (seenUrls.has(url)) continue;
    seenUrls.add(url);
    const titleJa = m[0]
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 90);
    featuredItems.push({ url, titleJa: titleJa || url, bannerUrl });
    if (featuredItems.length >= 16) break;
  }

  return {
    featuredItems,
    upcomingArticleUrls,
    newGameCalendarEntries,
  };
}
