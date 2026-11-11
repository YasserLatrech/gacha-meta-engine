import fs from 'node:fs';
import path from 'node:path';
import type { GlossaryHint } from '../domain/schemas.js';

export interface LocalRepoSnapshot {
  repoRoot: string;
  saviorsCount: number;
  arcanaCount: number;
  guidesCount: number;
  upcomingGamesCount: number;
  localCharacterIcons: string[];
  localArcanaIcons: string[];
  localSssNames: string[];
  localPromoCodes: string[];
  localDeadlines: Array<{ label: string; iso: string; kind: 'deadline' | 'start' }>;
  localKnownBannerTokens: string[];
  localFeaturedUrls: string[];
  localUpcomingArticleUrls: string[];
  glossary: GlossaryHint[];
}

function extractBasename(urlOrPath: string): string {
  const clean = urlOrPath.split('?')[0];
  return clean.split('/').pop() || clean;
}

export function readLocalAscalonSnapshot(repoRoot: string): LocalRepoSnapshot {
  const seedPath = path.join(repoRoot, 'src/infrastructure/db/seed-data.ts');
  const guidesPath = path.join(repoRoot, 'src/infrastructure/db/starsavior-guides-data.ts');
  const topMacroPath = path.join(repoRoot, 'src/components/macro/StarSaviorTopMacro.tsx');
  const homeDataPath = path.join(repoRoot, 'src/infrastructure/db/appmedia-home-data.ts');

  const seedRaw = fs.readFileSync(seedPath, 'utf8');
  const guidesRaw = fs.readFileSync(guidesPath, 'utf8');
  const topMacroRaw = fs.readFileSync(topMacroPath, 'utf8');
  const homeRaw = fs.readFileSync(homeDataPath, 'utf8');

  // Split seed-data.ts into Character section and Arcana section accurately
  const charStart = seedRaw.indexOf('export const STAR_SAVIOR_CHARACTERS_SEED');
  const arcanaStart = seedRaw.indexOf('export const STAR_SAVIOR_ARCANA_SEED');
  const bannersStart = seedRaw.indexOf('export const STAR_SAVIOR_BANNERS_SEED');

  const charSlice = seedRaw.slice(charStart, arcanaStart);
  const arcanaSlice = seedRaw.slice(arcanaStart, bannersStart);

  // Extract Saviors (count, icons, glossary, SSS names)
  const charMatches = [
    ...charSlice.matchAll(
      /"slug":\s*"([^"]+)",\s*"name":\s*"([^"]+)"[\s\S]{0,400}?"imageUrl":\s*"([^"]+)"[\s\S]{0,160}?"overallTier":\s*"([^"]+)"/g
    ),
  ];

  const glossary: GlossaryHint[] = [];
  const localCharacterIcons: string[] = [];
  const localSssNames: string[] = [];

  for (const m of charMatches) {
    const [, slug, name, imageUrl, overallTier] = m;
    const iconKey = extractBasename(imageUrl);
    localCharacterIcons.push(iconKey);
    if (overallTier === 'SS') {
      localSssNames.push(name);
    }
    glossary.push({
      slug,
      englishName: name,
      entityType: 'CHARACTER',
      iconKey,
    });
  }

  // Extract Arcana (count, icons, glossary)
  const arcanaMatches = [
    ...arcanaSlice.matchAll(
      /"slug":\s*"([^"]+)",\s*"name":\s*"([^"]+)"[\s\S]{0,350}?"imageUrl":\s*"([^"]+)"/g
    ),
  ];
  const localArcanaIcons: string[] = [];
  for (const m of arcanaMatches) {
    const [, slug, name, imageUrl] = m;
    const iconKey = extractBasename(imageUrl);
    localArcanaIcons.push(iconKey);
    glossary.push({
      slug,
      englishName: name,
      entityType: 'ARCANA',
      iconKey,
    });
  }

  // Extract Guides count & Promo Codes inside slug: 'promo-codes'
  const guideSlugMatches = [
    ...guidesRaw.matchAll(/^\s{4}slug:\s*['"]([a-z0-9-]+)['"]/gm),
  ];
  const promoIdx = guidesRaw.indexOf("slug: 'promo-codes'");
  const promoSlice = promoIdx !== -1 ? guidesRaw.slice(promoIdx, promoIdx + 3500) : '';
  const localPromoCodes = [
    ...new Set(
      [...promoSlice.matchAll(/\b([A-Z0-9]{10,24})\b/g)]
        .map((m) => m[1])
        .filter(
          (c) =>
            /[A-Z]/.test(c) &&
            !/^(OBSERVATION|STARLIGHT|CHARACTER|PERMANENT|STUDIOBSIDE|STARSAVIOR)$/.test(c)
        )
    ),
  ];

  // Extract LiveJstCountdown targetIso & startIso timers in StarSaviorTopMacro.tsx
  const timerMatches = [
    ...topMacroRaw.matchAll(/(targetIso|startIso)="([^"]+)"/g),
  ].map((m, idx) => ({
    label: `StarSaviorTopMacro ${m[1] === 'startIso' ? 'Start' : 'Deadline'} #${idx + 1}`,
    iso: m[2],
    kind: (m[1] === 'startIso' ? 'start' : 'deadline') as 'deadline' | 'start',
  }));

  // Known AppMedia banner tokens already localized on /starsavior (so we only flag NEW ones!)
  const localKnownBannerTokens = [
    '212032_duamr.webp',
    '225339_vs7no.webp',
    '225351_fs9ng.webp',
    '104827_elw32.webp',
    '163919_wkrnd.webp',
    '214419_cw4lk.webp',
    '172202_zg14k.webp',
    '121308_4lwqz.webp',
  ];

  // Extract AppMedia Home Portal Featured Articles & Upcoming Games URLs
  const featStart = homeRaw.indexOf('"featuredArticles"');
  const upStart = homeRaw.indexOf('"upcomingGames"');
  const featSlice = featStart !== -1 ? homeRaw.slice(featStart) : '';
  const upSlice =
    upStart !== -1 && featStart !== -1
      ? homeRaw.slice(upStart, featStart)
      : upStart !== -1
      ? homeRaw.slice(upStart)
      : '';

  const localFeaturedUrls = [
    ...new Set([...featSlice.matchAll(/"url":\s*"(https:\/\/appmedia\.jp\/[^"]+)"/g)].map((m) => m[1])),
  ];
  const localUpcomingArticleUrls = [
    ...new Set(
      [...upSlice.matchAll(/"articleUrl":\s*"(https:\/\/appmedia\.jp\/newgame\/\d+)"/g)].map(
        (m) => m[1]
      )
    ),
  ];

  return {
    repoRoot,
    saviorsCount: charMatches.length,
    arcanaCount: arcanaMatches.length,
    guidesCount: guideSlugMatches.length,
    upcomingGamesCount: localUpcomingArticleUrls.length,
    localCharacterIcons,
    localArcanaIcons,
    localSssNames,
    localPromoCodes,
    localDeadlines: timerMatches,
    localKnownBannerTokens,
    localFeaturedUrls,
    localUpcomingArticleUrls,
    glossary,
  };
}
