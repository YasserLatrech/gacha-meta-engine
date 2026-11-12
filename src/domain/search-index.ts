import type {
  GameWikiDataset,
  GlobalSearchItem,
  HomePortalData,
  StarSaviorGuideArticle,
} from './schemas';

export function buildGlobalSearchIndex(
  dataset: GameWikiDataset,
  guides: ReadonlyArray<StarSaviorGuideArticle>,
  portalData: HomePortalData
): GlobalSearchItem[] {
  const items: GlobalSearchItem[] = [
    {
      id: 'hub:home',
      category: 'Hub',
      title: 'Ascalon.fun Home & Upcoming Gacha Release Calendar',
      subtitle: 'Release Countdown Chronos, Reader Polls & App Store Charts',
      badge: 'PORTAL',
      href: '/',
      iconUrl: '/brand/ascalon-logo.png',
      keywords: 'home portal upcoming gacha release calendar schedule votes rankings',
    },
    {
      id: 'hub:starsavior',
      category: 'Hub',
      title: 'Star Savior Strategy Wiki Top',
      subtitle: `${dataset.game.patchVersion} · Active Gachas, Events & Beginner Roadmap`,
      badge: 'WIKI',
      href: '/starsavior',
      iconUrl: dataset.game.iconUrl,
      keywords: 'star savior wiki top overview active gacha events beginner faq',
    },
    {
      id: 'hub:tier-list',
      category: 'Hub',
      title: 'Strongest Character Tier List (All 59 Saviors)',
      subtitle: 'PvE, Boss & Gauntlet Meta Rankings (SSS – B Tier)',
      badge: 'TIER LIST',
      href: '/starsavior/tier-list',
      iconUrl: dataset.game.iconUrl,
      keywords: 'tier list strongest character ranking meta best units sss ss',
    },
    {
      id: 'hub:reroll',
      category: 'Hub',
      title: 'Reroll Tier List & 10-Minute Fast Reroll Guide',
      subtitle: 'Best Starting SSR Saviors & Power/Endurance Arcana Stopping Line',
      badge: 'REROLL',
      href: '/starsavior/reroll',
      iconUrl: dataset.game.iconUrl,
      keywords: 'reroll tier list guide starting pull tutorial target',
    },
    {
      id: 'hub:characters',
      category: 'Hub',
      title: `All ${dataset.characters.length} Characters Database`,
      subtitle: 'Filterable Lv.200 ATK / HP / DEF / SPD Stats, Attributes & Classes',
      badge: `${dataset.characters.length} UNITS`,
      href: '/starsavior/characters',
      iconUrl: dataset.game.iconUrl,
      keywords: 'characters saviors list database stats attributes classes cv voice actors',
    },
    {
      id: 'hub:arcana',
      category: 'Hub',
      title: `Strongest Arcana Tier List & All ${dataset.arcana.length} Cards`,
      subtitle: 'SSR, SR & R Rescue Journey Training Deck Encyclopedia',
      badge: `${dataset.arcana.length} CARDS`,
      href: '/starsavior/arcana',
      iconUrl: dataset.game.iconUrl,
      keywords: 'arcana cards tier list deck training power health focus endurance protect',
    },
  ];

  for (const c of dataset.characters) {
    const tier = c.staticData?.appMediaTier || c.overallTier;
    const cv = c.staticData?.profile?.cv || '';
    items.push({
      id: `char:${c.slug}`,
      category: 'Savior',
      title: c.name,
      subtitle: `${c.rarity} ${c.element} ${c.role}${cv ? ` · CV: ${cv}` : ''}`,
      badge: `${tier} Tier`,
      href: `/starsavior/characters/${c.slug}`,
      iconUrl: c.imageUrl,
      keywords: `${c.name} ${c.slug} ${c.rarity} ${c.element} ${c.role} ${tier} ${cv} build gear skills`.toLowerCase(),
    });
  }

  for (const a of dataset.arcana) {
    const statTag = a.staticData?.statTag || a.subType;
    const charName = a.staticData?.characterName || '';
    items.push({
      id: `arcana:${a.slug}`,
      category: 'Arcana',
      title: a.name,
      subtitle: `${a.rarity} ${statTag} Arcana${charName ? ` · ${charName}` : ''}`,
      badge: `${a.tier} Tier`,
      href: `/starsavior/arcana#${a.slug}`,
      iconUrl: a.imageUrl,
      keywords: `${a.name} ${a.rarity} ${statTag} ${charName} ${a.tier} arcana card`.toLowerCase(),
    });
  }

  for (const g of guides) {
    items.push({
      id: `guide:${g.slug}`,
      category: 'Guide',
      title: g.title,
      subtitle: `${g.category} · ${g.lead.slice(0, 72)}`,
      badge: g.category.toUpperCase(),
      href: `/starsavior/guides/${g.slug}`,
      keywords: `${g.title} ${g.slug} ${g.category} ${g.lead}`.toLowerCase(),
    });
  }

  for (const w of portalData.strategyWikis) {
    if (w.isInternal || w.wikiStatus === 'live') continue;
    const statusLabel = w.wikiStatus === 'next' ? 'NEXT WIKI (#2)' : 'PLANNED WIKI';
    items.push({
      id: `roadmap:${w.id ?? w.title}`,
      category: 'Upcoming',
      title: `${w.title}${w.wikiStatus === 'next' ? ' Strategy Wiki (Up Next)' : ''}`,
      subtitle: `${statusLabel} · ${w.launchWindow || 'Planned'} · ${w.platform}`,
      badge: w.wikiStatus === 'next' ? 'NEXT WIKI' : 'ROADMAP',
      href: '/#strategy-wikis',
      iconUrl: w.iconUrl,
      keywords: `${w.title} ${w.titleJa} ${w.publisher || ''} ${statusLabel} next wiki roadmap upcoming`.toLowerCase(),
    });
  }

  for (const u of portalData.upcomingGames) {
    items.push({
      id: `upcoming:${u.id}`,
      category: 'Upcoming',
      title: u.title,
      subtitle: `${u.releaseDate} (${u.status}) · ${u.publisher || 'TBA'}`,
      badge: u.status.toUpperCase(),
      href: `/#upcoming-calendar`,
      iconUrl: u.iconUrl,
      keywords: `${u.title} ${u.publisher} ${u.releaseDate} ${u.description} upcoming release`.toLowerCase(),
    });
  }

  return items;
}

export function queryGlobalSearchIndex(
  items: ReadonlyArray<GlobalSearchItem>,
  rawQuery: string,
  limit = 14
): GlobalSearchItem[] {
  const cleaned = rawQuery.trim().toLowerCase();
  if (!cleaned) {
    return items.slice(0, 8);
  }

  const tokens = cleaned.split(/\s+/).filter(Boolean);
  const scored: Array<{ item: GlobalSearchItem; score: number }> = [];

  for (const item of items) {
    const titleLower = item.title.toLowerCase();
    const subLower = item.subtitle.toLowerCase();
    const haystack = `${titleLower} ${subLower} ${item.keywords}`;

    let matchedAll = true;
    for (const token of tokens) {
      if (!haystack.includes(token)) {
        matchedAll = false;
        break;
      }
    }
    if (!matchedAll) continue;

    let score = 10;
    if (titleLower === cleaned) score += 120;
    else if (titleLower.startsWith(cleaned)) score += 80;
    else if (titleLower.includes(cleaned)) score += 45;

    if (item.category === 'Hub') score += 12;
    else if (item.category === 'Savior') score += 8;
    else if (item.category === 'Guide') score += 6;

    scored.push({ item, score });
  }

  scored.sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title));
  return scored.slice(0, limit).map((s) => s.item);
}
