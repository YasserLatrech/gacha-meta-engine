const DEFAULT_ICON =
  'https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_starsavior.webp';

export const GAME_APP_ICONS: Record<string, string> = {
  'star-savior': DEFAULT_ICON,
  'heaven-burns-red':
    'https://img.game8.jp/12147006/bc4ca37cc85728f6a6ee84eddbcf7ca7.webp/original',
  'uma-musume': 'https://img.game8.jp/5539221/3eca6d169e95d836495da419f1703d8f.png/original',
  'sword-of-convallaria':
    'https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2024/07/Sword-of-Convallaria-Icon.webp',
};

// Authentic Heaven Burns Red Element & Attack Type Icons (used ONLY for Heaven Burns Red)
const HBR_FIRE = 'https://img.game8.jp/12419023/39fa5ab24fb93da646fbb9cc4036f275.webp/original';
const HBR_ICE = 'https://img.game8.jp/12419030/92ce4686961abf1e939c1133dea70fd0.webp/original';
const HBR_THUNDER =
  'https://img.game8.jp/12419025/e37aa3db8bf31773093e73cbf4a633e6.webp/original';
const HBR_LIGHT = 'https://img.game8.jp/12419022/f654deaf4930f3dbb74c8780ae20680b.webp/original';
const HBR_DARK = 'https://img.game8.jp/12419029/c5668606f9054a5b66494596ab831538.webp/original';
const HBR_NONE = 'https://img.game8.jp/12828413/00f1e9a6150c4219c37055cb934178d8.webp/original';

const HBR_SLASH = 'https://img.game8.jp/12419026/b6b769fb46076679236a47dab7fcc420.webp/original';
const HBR_PIERCE = 'https://img.game8.jp/12419024/2451f095edc4313ce0ea4468e736b46b.webp/original';
const HBR_CRUSH = 'https://img.game8.jp/12419028/a3b6eeab7e2881f8b29cafad2ee6dd74.webp/original';

// Authentic Uma Musume Stat & Skill Icons (used ONLY for Uma Musume stats & running styles)
const UMA_SPEED = 'https://img.game8.jp/5589601/5cb9b1b921009adcc6ea0e585b1fbbc1.png/original';
const UMA_STAMINA = 'https://img.game8.jp/5589600/04c7965d2d4748b53e1a427cd4522472.png/original';
const UMA_POWER = 'https://img.game8.jp/5589603/6964584eb351eb8ced43b89f212441c1.png/original';
const UMA_GUTS = 'https://img.game8.jp/5589598/391ef1296df47d556801af8255653384.png/original';
const UMA_WISDOM = 'https://img.game8.jp/5589602/501c22a95faa0838791e423ab6f05ae7.png/original';

const UMA_SKILL_RUNNER =
  'https://img.game8.jp/5596394/07c5942cc22fa42f55b8891c468829f1.jpeg/original';
const UMA_SKILL_LEADER =
  'https://img.game8.jp/5704832/bf9019b4ce1b98ea5dd18c6811de74e3.png/original';
const UMA_SKILL_BETWEENER =
  'https://img.game8.jp/5596446/adbfebb2557cd197a6ab5747d300ad52.jpeg/original';
const UMA_SKILL_CHASER =
  'https://img.game8.jp/11504232/0b43d446680c043ad48bd790545b9d98.jpeg/original';

export const HBR_ELEMENT_ICONS: Record<string, string> = {
  Fire: HBR_FIRE,
  Ice: HBR_ICE,
  Thunder: HBR_THUNDER,
  Light: HBR_LIGHT,
  Dark: HBR_DARK,
  None: HBR_NONE,
};

export const HBR_ATTACK_TYPE_ICONS: Record<string, string> = {
  Slash: HBR_SLASH,
  Pierce: HBR_PIERCE,
  Crush: HBR_CRUSH,
};

export const UMA_STAT_ICONS: Record<string, string> = {
  Speed: UMA_SPEED,
  Stamina: UMA_STAMINA,
  Power: UMA_POWER,
  Guts: UMA_GUTS,
  Wisdom: UMA_WISDOM,
};

export const UMA_SKILL_ICONS: Record<string, string> = {
  Runner: UMA_SKILL_RUNNER,
  Leader: UMA_SKILL_LEADER,
  Betweener: UMA_SKILL_BETWEENER,
  Chaser: UMA_SKILL_CHASER,
};

// Purpose-built, crisp vector SVG Data-URI emblem generator (zero external network latency, 100% semantically matched)
function makeSvgCrest(bgHex: string, borderHex: string, innerSvg: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="1.5" y="1.5" width="29" height="29" rx="7" fill="${bgHex}" stroke="${borderHex}" stroke-width="2"/>${innerSvg}</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Semantic SVG Emblems for Classes, Distances, Attributes, Stats & Roles
const SVG_EMBLEMS: Record<string, string> = {
  // Sword of Convallaria Tactical Classes
  'soc:Watcher': makeSvgCrest(
    '#FEF3C7',
    '#D97706',
    '<path d="M16 6l3 6.5 7 .8-5.2 4.8 1.5 6.9-6.3-3.5-6.3 3.5 1.5-6.9-5.2-4.8 7-.8z" fill="#D97706"/>'
  ),
  'soc:Destroyer': makeSvgCrest(
    '#F3E8FF',
    '#7E22CE',
    '<path d="M16 5l8 11-8 11-8-11z" fill="#7E22CE"/><circle cx="16" cy="16" r="3.2" fill="#FAF5FF"/>'
  ),
  'soc:Seeker': makeSvgCrest(
    '#FEE2E2',
    '#DC2626',
    '<path d="M7 25L25 7M19 7h6v6M7 19l6 6" stroke="#DC2626" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
  ),
  'soc:Breaker': makeSvgCrest(
    '#DBEAFE',
    '#2563EB',
    '<path d="M8 22L22 8m-5-1l8 8-4 4-8-8z" stroke="#2563EB" stroke-width="2.5" fill="#2563EB"/>'
  ),
  'soc:Defender': makeSvgCrest(
    '#DCFCE7',
    '#15803D',
    '<path d="M16 5l9 4v7c0 6.2-3.8 10.6-9 12-5.2-1.4-9-5.8-9-12V9l9-4z" fill="#15803D"/>'
  ),

  // Star Savior Celestial Attributes
  'star:Sun': makeSvgCrest(
    '#FFEDD5',
    '#EA580C',
    '<circle cx="16" cy="16" r="5.5" fill="#EA580C"/><path d="M16 5v3m0 16v3M5 16h3m16 0h3M8.2 8.2l2.1 2.1m11.4 11.4l2.1 2.1m0-15.6l-2.1 2.1M10.3 21.7l-2.1 2.1" stroke="#EA580C" stroke-width="2.4" stroke-linecap="round"/>'
  ),
  'star:Moon': makeSvgCrest(
    '#E0E7FF',
    '#4338CA',
    '<path d="M20.5 19.5A8 8 0 0112.5 8a8.2 8.2 0 011.2-4.2 9 9 0 109.5 14.5 7.8 7.8 0 01-2.7 1.2z" fill="#4338CA"/>'
  ),
  'star:Star': makeSvgCrest(
    '#FEF9C3',
    '#CA8A04',
    '<path d="M16 5l2.8 7.4L26 15l-7.2 2.6L16 25l-2.8-7.4L6 15l7.2-2.6z" fill="#CA8A04"/>'
  ),
  'star:Order': makeSvgCrest(
    '#CCFBF1',
    '#0F766E',
    '<polygon points="16,5 25,16 16,27 7,16" fill="none" stroke="#0F766E" stroke-width="2.8"/><circle cx="16" cy="16" r="3.5" fill="#0F766E"/>'
  ),
  'star:Chaos': makeSvgCrest(
    '#FAE8FF',
    '#A21CAF',
    '<path d="M9 9l14 14M23 9L9 23" stroke="#A21CAF" stroke-width="3" stroke-linecap="round"/><circle cx="16" cy="16" r="5" fill="#FAE8FF" stroke="#A21CAF" stroke-width="2.5"/>'
  ),

  // Uma Musume Track Distances (Distinct Track Distance Emblems — NOT Stat Icons)
  'uma:Short': makeSvgCrest(
    '#DBEAFE',
    '#0284C7',
    '<text x="16" y="20" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="11" fill="#0284C7">1200</text>'
  ),
  'uma:Mile': makeSvgCrest(
    '#DCFCE7',
    '#16A34A',
    '<text x="16" y="20" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="11" fill="#16A34A">1600</text>'
  ),
  'uma:Medium': makeSvgCrest(
    '#FEF3C7',
    '#D97706',
    '<text x="16" y="20" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="11" fill="#D97706">2000</text>'
  ),
  'uma:Long': makeSvgCrest(
    '#FCE7F3',
    '#DB2777',
    '<text x="16" y="20" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="11" fill="#DB2777">3000</text>'
  ),
  'uma:Dirt': makeSvgCrest(
    '#FFEDD5',
    '#B45309',
    '<text x="16" y="20" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="10.5" fill="#B45309">DIRT</text>'
  ),

  // Universal Tactical Role Emblems (No Random Character Faces)
  'role:DPS': makeSvgCrest(
    '#FEE2E2',
    '#DC2626',
    '<path d="M8 24L24 8m-6 0h6v6M8 18l6 6" stroke="#DC2626" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
  ),
  'role:SUB_DPS': makeSvgCrest(
    '#FFEDD5',
    '#EA580C',
    '<polygon points="17,5 8,18 15,18 14,27 24,14 17,14" fill="#EA580C"/>'
  ),
  'role:SUPPORT': makeSvgCrest(
    '#EDE9FE',
    '#7C3AED',
    '<path d="M16 6l2.6 6.4L25 15l-6.4 2.6L16 24l-2.6-6.4L7 15l6.4-2.6z" fill="#7C3AED"/>'
  ),
  'role:SUSTAIN': makeSvgCrest(
    '#DCFCE7',
    '#16A34A',
    '<path d="M16 5l9 4v7c0 6-3.8 10.2-9 11.5C10.8 26.2 7 22 7 16V9l9-4zm0 6v10m-5-5h10" stroke="#16A34A" stroke-width="2.4" fill="none" stroke-linecap="round"/>'
  ),

  // Semantic Stat Concept Emblems (for HBR, SoC, Star Savior & Calculator Inputs)
  'stat:hp': makeSvgCrest(
    '#FEE2E2',
    '#DC2626',
    '<path d="M16 25s-9-5.6-9-11.5A5.2 5.2 0 0116 9.8a5.2 5.2 0 019 3.7C25 19.4 16 25 16 25z" fill="#DC2626"/>'
  ),
  'stat:shield': makeSvgCrest(
    '#E0F2FE',
    '#0284C7',
    '<path d="M16 5l9 4v7c0 6.2-3.8 10.6-9 12-5.2-1.4-9-5.8-9-12V9l9-4z" fill="#0284C7"/>'
  ),
  'stat:atk': makeSvgCrest(
    '#FFEDD5',
    '#EA580C',
    '<path d="M8 24L24 8m-6 0h6v6M10 14l8 8" stroke="#EA580C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
  ),
  'stat:def': makeSvgCrest(
    '#DCFCE7',
    '#15803D',
    '<path d="M16 6l8 3.5v6.5c0 5.5-3.4 9.4-8 10.8-4.6-1.4-8-5.3-8-10.8V9.5L16 6z" stroke="#15803D" stroke-width="2.5" fill="#86EFAC"/>'
  ),
  'stat:magic': makeSvgCrest(
    '#F3E8FF',
    '#7E22CE',
    '<path d="M16 5l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#7E22CE"/>'
  ),
  'stat:crit': makeSvgCrest(
    '#FEF3C7',
    '#D97706',
    '<circle cx="16" cy="16" r="8" stroke="#D97706" stroke-width="2.4" fill="none"/><circle cx="16" cy="16" r="3" fill="#D97706"/><path d="M16 5v3m0 16v3M5 16h3m16 0h3" stroke="#D97706" stroke-width="2.2" stroke-linecap="round"/>'
  ),
  'stat:spd': makeSvgCrest(
    '#DBEAFE',
    '#2563EB',
    '<path d="M7 19l6-6 4 4 8-8M19 9h6v6" stroke="#2563EB" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
  ),
  'stat:longevity': makeSvgCrest(
    '#F1F5F9',
    '#475569',
    '<circle cx="16" cy="16" r="9" stroke="#475569" stroke-width="2.4" fill="none"/><path d="M16 11v5l3.5 2.5" stroke="#475569" stroke-width="2.4" stroke-linecap="round"/>'
  ),

  // Semantic Navigation & Section Emblems (replaces random character portraits in tabs/sidebars)
  'nav:tier-list': makeSvgCrest(
    '#FEE2E2',
    '#DC2626',
    '<path d="M9 7h14v4c0 4-3 7-7 7s-7-3-7-7V7zm4 11h6v3h-6v-3zm-3 3h12v3H10v-3z" fill="#DC2626"/>'
  ),
  'nav:reroll': makeSvgCrest(
    '#FEF3C7',
    '#D97706',
    '<path d="M16 5l3 6.5 7 .8-5.2 4.8 1.5 6.9-6.3-3.5-6.3 3.5 1.5-6.9-5.2-4.8 7-.8z" fill="#D97706"/>'
  ),
  'nav:weapons': makeSvgCrest(
    '#E0E7FF',
    '#4338CA',
    '<path d="M8 24L24 8m-6 0h6v6M10 14l8 8" stroke="#4338CA" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
  ),
  'nav:banners': makeSvgCrest(
    '#F3E8FF',
    '#7E22CE',
    '<rect x="7" y="8" width="18" height="16" rx="2" stroke="#7E22CE" stroke-width="2.4" fill="none"/><path d="M7 13h18M12 6v4m8-4v4" stroke="#7E22CE" stroke-width="2.4" stroke-linecap="round"/>'
  ),
  'nav:calculator': makeSvgCrest(
    '#DCFCE7',
    '#15803D',
    '<rect x="8" y="6" width="16" height="20" rx="2" stroke="#15803D" stroke-width="2.4" fill="none"/><path d="M11 10h10M11 15h3m4 0h3M11 20h3m4 0h3" stroke="#15803D" stroke-width="2.4" stroke-linecap="round"/>'
  ),
  'nav:bosses': makeSvgCrest(
    '#FFE4E6',
    '#BE123C',
    '<path d="M16 6l9 5v10l-9 5-9-5V11l9-5zm0 5v6m0 4h.01" stroke="#BE123C" stroke-width="2.6" fill="none" stroke-linecap="round"/>'
  ),
  'nav:compare': makeSvgCrest(
    '#E0F2FE',
    '#0284C7',
    '<path d="M10 22V12m6 10V8m6 14v-6" stroke="#0284C7" stroke-width="3.2" stroke-linecap="round"/>'
  ),
};

function emblem(key: string): string {
  return SVG_EMBLEMS[key] ?? DEFAULT_ICON;
}

export function getSectionEmblemUrl(
  section: 'tier-list' | 'reroll' | 'weapons' | 'banners' | 'calculator' | 'bosses' | 'compare'
): string {
  return SVG_EMBLEMS[`nav:${section}`] ?? emblem('nav:tier-list');
}

export function getGameAppIconUrl(gameSlug: string): string {
  return GAME_APP_ICONS[gameSlug] ?? DEFAULT_ICON;
}

export function getElementIconUrl(
  gameSlug: string,
  elementKey: string,
  _units?: Array<{ element?: string | null; imageUrl: string }>
): string {
  const hbrEl = HBR_ELEMENT_ICONS[elementKey];
  if (gameSlug === 'heaven-burns-red' && hbrEl) {
    return hbrEl;
  }
  const umaEl = SVG_EMBLEMS[`uma:${elementKey}`];
  if (gameSlug === 'uma-musume' && umaEl) {
    return umaEl;
  }
  const socEl = SVG_EMBLEMS[`soc:${elementKey}`];
  if (gameSlug === 'sword-of-convallaria' && socEl) {
    return socEl;
  }
  const starEl = SVG_EMBLEMS[`star:${elementKey}`];
  if (gameSlug === 'star-savior' && starEl) {
    return starEl;
  }
  return emblem('stat:magic');
}

export function getRoleIconUrl(
  gameSlug: string,
  roleKey: string,
  _units?: Array<{ roleColumn?: string; imageUrl: string }>
): string {
  if (gameSlug === 'uma-musume') {
    if (roleKey === 'DPS') return UMA_SKILL_RUNNER;
    if (roleKey === 'SUB_DPS') return UMA_SKILL_LEADER;
    if (roleKey === 'SUPPORT') return UMA_SKILL_BETWEENER;
    if (roleKey === 'SUSTAIN') return UMA_SKILL_CHASER;
  }
  return SVG_EMBLEMS[`role:${roleKey}`] ?? emblem('role:DPS');
}

export function getAttackTypeIconUrl(
  gameSlug: string,
  attackType?: string | null,
  fallbackUrl?: string
): string {
  if (!attackType) return fallbackUrl ?? emblem('stat:atk');
  const umaSkill = UMA_SKILL_ICONS[attackType];
  if (gameSlug === 'uma-musume' && umaSkill) {
    return umaSkill;
  }
  const hbrAtk = HBR_ATTACK_TYPE_ICONS[attackType];
  if (gameSlug === 'heaven-burns-red' && hbrAtk) {
    return hbrAtk;
  }
  const lower = attackType.toLowerCase();
  if (lower.includes('magic')) return emblem('stat:magic');
  if (lower.includes('pierc')) return emblem('soc:Seeker');
  return emblem('stat:atk');
}

export function getStatConceptIconUrl(
  gameSlug: string,
  statLabel: string,
  _fallbackUrl?: string
): string {
  const s = statLabel.toLowerCase();

  // ONLY use Uma Musume training icons inside Uma Musume!
  if (gameSlug === 'uma-musume') {
    if (s.includes('speed')) return UMA_SPEED;
    if (s.includes('stamina')) return UMA_STAMINA;
    if (s.includes('power')) return UMA_POWER;
    if (s.includes('guts')) return UMA_GUTS;
    if (s.includes('wit') || s.includes('wisdom')) return UMA_WISDOM;
  }

  // Semantic stat emblems for all games (zero cross-game bleed)
  if (s.includes('dp shield') || s.includes('barrier') || s.includes('sustain')) {
    return emblem('stat:shield');
  }
  if (s.includes('hp') || s.includes('stamina') || s.includes('vitality')) {
    return emblem('stat:hp');
  }
  if (s.includes('spd') || s.includes('speed') || s.includes('action') || s.includes('energy') || s.includes('sp ')) {
    return emblem('stat:spd');
  }
  if (s.includes('int') || s.includes('m.atk') || s.includes('field') || s.includes('zone') || s.includes('buff')) {
    return emblem('stat:magic');
  }
  if (s.includes('def') || s.includes('vit') || s.includes('spr') || s.includes('guts')) {
    return emblem('stat:def');
  }
  if (s.includes('crit') || s.includes('luk') || s.includes('wit') || s.includes('multi-hit')) {
    return emblem('stat:crit');
  }
  if (s.includes('longevity') || s.includes('month')) {
    return emblem('stat:longevity');
  }
  return emblem('stat:atk');
}

export function getSkillConceptIconUrl(
  gameSlug: string,
  skillType: string,
  _fallbackUrl?: string
): string {
  if (gameSlug === 'uma-musume') {
    if (skillType === 'EX_ULTIMATE') return UMA_SKILL_CHASER;
    if (skillType === 'TRAINING_EVENT') return UMA_SKILL_LEADER;
    return UMA_SKILL_RUNNER;
  }
  if (skillType === 'EX_ULTIMATE' || skillType === 'ULTIMATE' || skillType === 'BURST') {
    return emblem('role:SUB_DPS');
  }
  if (skillType.includes('PASSIVE') || skillType.includes('TRAIT') || skillType.includes('REACTION')) {
    return emblem('role:SUPPORT');
  }
  return emblem('role:DPS');
}
