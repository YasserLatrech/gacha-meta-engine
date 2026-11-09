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

// ============================================================================
// 0. PURPOSE-BUILT UI NAVIGATION & TOOL SECTION EMBLEMS (Dark-Mode SVG Data URIs)
//    Strictly separates UI Navigation tabs (Tier List, Weapons, Bosses, Banners,
//    Pull Calculator, Stat Compare) from character Element/Stat icons.
// ============================================================================
function svgToDataUri(svg: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;
}

export const UI_SECTION_EMBLEMS: Record<
  'tier-list' | 'reroll' | 'weapons' | 'banners' | 'calculator' | 'bosses' | 'compare',
  string
> = {
  'tier-list': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="8" fill="#181F2E" stroke="#F43F5E" stroke-width="2"/>
      <path d="M8 28L11 14L17 20L20 11L23 20L29 14L32 28H8Z" fill="#FBBF24" stroke="#FEF3C7" stroke-width="1.2" stroke-linejoin="round"/>
      <rect x="9" y="30" width="22" height="3" rx="1.5" fill="#F43F5E"/>
    </svg>
  `),
  reroll: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="8" fill="#181F2E" stroke="#34D399" stroke-width="2"/>
      <path d="M20 8L23 16.5L32 20L23 23.5L20 32L17 23.5L8 20L17 16.5L20 8Z" fill="#34D399"/>
      <circle cx="20" cy="20" r="3.5" fill="#FEF3C7"/>
    </svg>
  `),
  weapons: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="8" fill="#181F2E" stroke="#38BDF8" stroke-width="2"/>
      <rect x="16" y="8" width="15" height="21" rx="2.5" fill="#1E293B" stroke="#38BDF8" stroke-width="1.8"/>
      <path d="M9 31L25 15M25 15H19M25 15V21" stroke="#FBBF24" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="23.5" cy="18.5" r="2.2" fill="#38BDF8"/>
    </svg>
  `),
  bosses: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="8" fill="#181F2E" stroke="#F43F5E" stroke-width="2"/>
      <path d="M9 12L14 18C14 14.5 16.7 12 20 12C23.3 12 26 14.5 26 18L31 12L29 23C29 27.5 25 31 20 31C15 31 11 27.5 11 23L9 12Z" fill="#F43F5E"/>
      <circle cx="16.5" cy="21.5" r="2.2" fill="#FEF3C7"/>
      <circle cx="23.5" cy="21.5" r="2.2" fill="#FEF3C7"/>
      <path d="M17 27H23" stroke="#0B0E14" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `),
  banners: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="8" fill="#181F2E" stroke="#FBBF24" stroke-width="2"/>
      <rect x="7" y="12" width="26" height="16" rx="3" fill="#1E293B" stroke="#FBBF24" stroke-width="1.8"/>
      <path d="M20 13.5L22 18L26.5 20L22 22L20 26.5L18 22L13.5 20L18 18L20 13.5Z" fill="#FBBF24"/>
    </svg>
  `),
  calculator: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="8" fill="#181F2E" stroke="#34D399" stroke-width="2"/>
      <polygon points="20,8 30,16 25,31 15,31 10,16" fill="#10B981" stroke="#A7F3D0" stroke-width="1.5"/>
      <polygon points="20,12 25,17 20,27 15,17" fill="#ECFDF5"/>
    </svg>
  `),
  compare: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="8" fill="#181F2E" stroke="#A855F7" stroke-width="2"/>
      <rect x="9" y="21" width="5" height="10" rx="1.5" fill="#38BDF8"/>
      <rect x="17.5" y="13" width="5" height="18" rx="1.5" fill="#FBBF24"/>
      <rect x="26" y="16" width="5" height="15" rx="1.5" fill="#F43F5E"/>
      <path d="M8 11H32" stroke="#CBD5E1" stroke-width="1.6" stroke-dasharray="2 2"/>
    </svg>
  `),
};

// ============================================================================
// 1. HEAVEN BURNS RED — OFFICIAL IN-GAME ICONS (Game8 JP Official Asset CDN)
// ============================================================================
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

const HBR_STYLE_SSR =
  'https://img.game8.jp/11566408/b29a20344e140381e2bfd5f3680fee0f.webp/original';
const HBR_STYLE_SS =
  'https://img.game8.jp/11566413/edf618f56e767b04c67e15ca01b1f8e3.webp/show';

// ============================================================================
// 2. UMA MUSUME: PRETTY DERBY — OFFICIAL IN-GAME ICONS (Game8 JP Official CDN)
// ============================================================================
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

const UMA_SKILL_RECOVERY =
  'https://img.game8.jp/5596397/44c22f20c040c6b44a73f617745883f2.jpeg/show';
const UMA_SKILL_PASSIVE =
  'https://img.game8.jp/5596392/0138190e44a143c4bba48b4f98ecc2dc.jpeg/show';
const UMA_SKILL_DEBUFF =
  'https://img.game8.jp/5596393/8eb0da5677ae80d5fcf5fc94e31058d0.jpeg/show';
const UMA_SKILL_VISION =
  'https://img.game8.jp/5596399/b07bfe4d47be6c0d94f4a783ef47f267.jpeg/show';

// ============================================================================
// 3. SWORD OF CONVALLARIA — OFFICIAL IN-GAME CLASS & TAROT ICONS
// ============================================================================
const SOC_CLASS_WATCHER = 'https://cdn.discordapp.com/emojis/1348813900186910731.webp?size=44';
const SOC_CLASS_DESTROYER = 'https://cdn.discordapp.com/emojis/1348813902573473853.webp?size=44';
const SOC_CLASS_SEEKER = 'https://cdn.discordapp.com/emojis/1348813904263778448.webp?size=44';
const SOC_CLASS_BREAKER = 'https://cdn.discordapp.com/emojis/1348813901042683964.webp?size=44';
const SOC_CLASS_DEFENDER = 'https://cdn.discordapp.com/emojis/1348813903387426918.webp?size=44';

const SOC_TAROT_FOOL_HP =
  'https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_3697.webp';
const SOC_TAROT_CHARIOT_SPD =
  'https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_4788.webp';
const SOC_TAROT_STRENGTH_ATK =
  'https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_4789.webp';
const SOC_TAROT_MAGICIAN_MATK =
  'https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_2648.webp';
const SOC_TAROT_HERMIT_DEF =
  'https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_2598.webp';
const SOC_TAROT_JUSTICE_CRIT =
  'https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_2724.webp';
const SOC_TAROT_PRIESTESS_HEAL =
  'https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_2778.webp';
const SOC_TAROT_WORLD_NRG =
  'https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_2723.webp';

// ============================================================================
// 4. STAR SAVIOR — OFFICIAL IN-GAME ATTRIBUTE, CLASS & STAT ICONS (AppMedia)
// ============================================================================
const SS_ATTR_SUN = 'https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp';
const SS_ATTR_MOON = 'https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp';
const SS_ATTR_STAR = 'https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp';
const SS_ATTR_ORDER = 'https://appmedia.jp/wp-content/uploads/2025/11/t-65502-20251114140221.webp';
const SS_ATTR_CHAOS = 'https://appmedia.jp/wp-content/uploads/2025/11/t-10703-20251114140221.webp';

const SS_CLASS_DEFENDER =
  'https://appmedia.jp/wp-content/uploads/2025/11/t-9372-20251112031758.webp';
const SS_CLASS_STRIKER =
  'https://appmedia.jp/wp-content/uploads/2025/11/t-1533-20251112031704.webp';
const SS_CLASS_RANGER =
  'https://appmedia.jp/wp-content/uploads/2025/11/t-171-20251112031735.webp';
const SS_CLASS_CASTER =
  'https://appmedia.jp/wp-content/uploads/2025/11/t-57169-20251112031841.webp';
const SS_CLASS_ASSASSIN =
  'https://appmedia.jp/wp-content/uploads/2025/11/t-23566-20251112031814.webp';
const SS_CLASS_SUPPORTER =
  'https://appmedia.jp/wp-content/uploads/2025/11/t-18986-20251112031910.webp';

const SS_STAT_HP = 'https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp';
const SS_STAT_SHIELD = 'https://appmedia.jp/wp-content/uploads/2025/11/t-63834-20251118080315.webp';
const SS_STAT_ATK = 'https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp';
const SS_STAT_FOCUS = 'https://appmedia.jp/wp-content/uploads/2025/11/t-26239-20251118080315.webp';

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

export const SOC_CLASS_ICONS: Record<string, string> = {
  Watcher: SOC_CLASS_WATCHER,
  Destroyer: SOC_CLASS_DESTROYER,
  Seeker: SOC_CLASS_SEEKER,
  Breaker: SOC_CLASS_BREAKER,
  Defender: SOC_CLASS_DEFENDER,
};

export const STAR_SAVIOR_ATTR_ICONS: Record<string, string> = {
  Sun: SS_ATTR_SUN,
  Moon: SS_ATTR_MOON,
  Star: SS_ATTR_STAR,
  Order: SS_ATTR_ORDER,
  Chaos: SS_ATTR_CHAOS,
};

export function getSectionEmblemUrl(
  section: 'tier-list' | 'reroll' | 'weapons' | 'banners' | 'calculator' | 'bosses' | 'compare',
  _gameSlug?: string
): string {
  return UI_SECTION_EMBLEMS[section] ?? UI_SECTION_EMBLEMS['tier-list'];
}

export function getGameAppIconUrl(gameSlug: string): string {
  return GAME_APP_ICONS[gameSlug] ?? DEFAULT_ICON;
}

export function getElementIconUrl(
  gameSlug: string,
  elementKey: string,
  _units?: Array<{ element?: string | null; imageUrl: string }>
): string {
  if (gameSlug === 'heaven-burns-red') {
    return HBR_ELEMENT_ICONS[elementKey] ?? HBR_NONE;
  }
  if (gameSlug === 'sword-of-convallaria') {
    return SOC_CLASS_ICONS[elementKey] ?? SOC_CLASS_WATCHER;
  }
  if (gameSlug === 'star-savior') {
    return STAR_SAVIOR_ATTR_ICONS[elementKey] ?? SS_ATTR_STAR;
  }
  if (gameSlug === 'uma-musume') {
    if (elementKey === 'Short') return UMA_SKILL_RUNNER;
    if (elementKey === 'Mile') return UMA_SKILL_LEADER;
    if (elementKey === 'Medium') return UMA_SKILL_BETWEENER;
    if (elementKey === 'Long') return UMA_SKILL_RECOVERY;
    if (elementKey === 'Dirt') return UMA_SKILL_PASSIVE;
    return UMA_SKILL_RUNNER;
  }
  return SS_ATTR_STAR;
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
  if (gameSlug === 'sword-of-convallaria') {
    if (roleKey === 'DPS') return SOC_CLASS_DESTROYER;
    if (roleKey === 'SUB_DPS') return SOC_CLASS_SEEKER;
    if (roleKey === 'SUPPORT') return SOC_CLASS_WATCHER;
    if (roleKey === 'SUSTAIN') return SOC_CLASS_DEFENDER;
  }
  if (gameSlug === 'star-savior') {
    if (roleKey === 'DPS') return SS_CLASS_STRIKER;
    if (roleKey === 'SUB_DPS') return SS_CLASS_RANGER;
    if (roleKey === 'SUPPORT') return SS_CLASS_SUPPORTER;
    if (roleKey === 'SUSTAIN') return SS_CLASS_DEFENDER;
  }
  if (gameSlug === 'heaven-burns-red') {
    if (roleKey === 'DPS') return HBR_SLASH;
    if (roleKey === 'SUB_DPS') return HBR_PIERCE;
    if (roleKey === 'SUPPORT') return HBR_STYLE_SSR;
    if (roleKey === 'SUSTAIN') return HBR_CRUSH;
  }
  return SS_CLASS_STRIKER;
}

export function getAttackTypeIconUrl(
  gameSlug: string,
  attackType?: string | null,
  fallbackUrl?: string
): string {
  if (!attackType) return fallbackUrl ?? SS_STAT_ATK;
  if (gameSlug === 'uma-musume') {
    return UMA_SKILL_ICONS[attackType] ?? UMA_SKILL_RUNNER;
  }
  if (gameSlug === 'heaven-burns-red') {
    return HBR_ATTACK_TYPE_ICONS[attackType] ?? HBR_SLASH;
  }
  if (gameSlug === 'sword-of-convallaria') {
    const lower = attackType.toLowerCase();
    if (lower.includes('magic')) return SOC_CLASS_DESTROYER;
    if (lower.includes('pierc') || lower.includes('ranged')) return SOC_CLASS_SEEKER;
    return SOC_CLASS_BREAKER;
  }
  if (gameSlug === 'star-savior') {
    const lower = attackType.toLowerCase();
    if (lower.includes('magic')) return SS_CLASS_CASTER;
    if (lower.includes('pierc')) return SS_CLASS_RANGER;
    if (lower.includes('crush') || lower.includes('strike')) return SS_CLASS_DEFENDER;
    if (lower.includes('assassin')) return SS_CLASS_ASSASSIN;
    return SS_CLASS_STRIKER;
  }
  return SS_STAT_ATK;
}

export function getStatConceptIconUrl(
  gameSlug: string,
  statLabel: string,
  _fallbackUrl?: string
): string {
  const s = statLabel.toLowerCase();

  if (gameSlug === 'uma-musume') {
    if (s.includes('speed')) return UMA_SPEED;
    if (s.includes('stamina')) return UMA_STAMINA;
    if (s.includes('power')) return UMA_POWER;
    if (s.includes('guts')) return UMA_GUTS;
    if (s.includes('wit') || s.includes('wisdom') || s.includes('sp') || s.includes('efficiency')) return UMA_WISDOM;
    if (s.includes('recovery') || s.includes('uphill') || s.includes('drain') || s.includes('sustain')) return UMA_SKILL_RECOVERY;
    if (s.includes('aptitude') || s.includes('turf') || s.includes('dirt') || s.includes('longevity')) return UMA_SKILL_PASSIVE;
    if (s.includes('swing') || s.includes('penalty') || s.includes('loss')) return UMA_SKILL_DEBUFF;
    if (s.includes('buff') || s.includes('support')) return UMA_SKILL_VISION;
    return UMA_SKILL_RUNNER;
  }

  if (gameSlug === 'heaven-burns-red') {
    if (s.includes('fire')) return HBR_FIRE;
    if (s.includes('ice')) return HBR_ICE;
    if (s.includes('thunder')) return HBR_THUNDER;
    if (s.includes('light')) return HBR_LIGHT;
    if (s.includes('dark')) return HBR_DARK;
    if (s.includes('slash')) return HBR_SLASH;
    if (s.includes('pierce')) return HBR_PIERCE;
    if (s.includes('crush')) return HBR_CRUSH;
    if (s.includes('hp') || s.includes('health')) return SS_STAT_HP;
    if (s.includes('dp') || s.includes('shield') || s.includes('sustain')) return SS_STAT_SHIELD;
    if (s.includes('def') || s.includes('guard')) return SS_CLASS_DEFENDER;
    if (s.includes('crit') || s.includes('dex') || s.includes('spd') || s.includes('sp')) return SS_STAT_FOCUS;
    if (s.includes('buff') || s.includes('support') || s.includes('field') || s.includes('zone')) return HBR_STYLE_SSR;
    return HBR_SLASH;
  }

  if (gameSlug === 'sword-of-convallaria') {
    if (s.includes('ranged') || s.includes('magic') || s.includes('matk')) return SOC_CLASS_DESTROYER;
    if (s.includes('aoe') || s.includes('pierc') || s.includes('crystal')) return SOC_CLASS_SEEKER;
    if (s.includes('dispel') || s.includes('debuff') || s.includes('buff') || s.includes('support') || s.includes('nrg')) return SOC_CLASS_WATCHER;
    if (s.includes('knockback') || s.includes('outside-ring') || s.includes('def') || s.includes('shield') || s.includes('sustain')) return SOC_CLASS_DEFENDER;
    if (s.includes('melee') || s.includes('counter') || s.includes('isolation') || s.includes('patk') || s.includes('atk') || s.includes('burst')) return SOC_CLASS_BREAKER;
    if (s.includes('hp') || s.includes('health')) return SOC_TAROT_FOOL_HP;
    if (s.includes('spd') || s.includes('speed') || s.includes('turn')) return SOC_TAROT_CHARIOT_SPD;
    if (s.includes('crit')) return SOC_TAROT_JUSTICE_CRIT;
    return SOC_CLASS_DESTROYER;
  }

  // Star Savior official attribute, class, and stat icons
  if (s.includes('sun')) return SS_ATTR_SUN;
  if (s.includes('moon')) return SS_ATTR_MOON;
  if (s.includes('star')) return SS_ATTR_STAR;
  if (s.includes('order')) return SS_ATTR_ORDER;
  if (s.includes('chaos')) return SS_ATTR_CHAOS;
  if (s.includes('break') || s.includes('toughness')) return SS_CLASS_RANGER;
  if (s.includes('stun') || s.includes('immunity') || s.includes('buff') || s.includes('support')) return SS_CLASS_SUPPORTER;
  if (s.includes('hp') || s.includes('health')) return SS_STAT_HP;
  if (s.includes('dp') || s.includes('shield') || s.includes('guard') || s.includes('sustain')) {
    return SS_STAT_SHIELD;
  }
  if (s.includes('def') || s.includes('endurance') || s.includes('res')) return SS_CLASS_DEFENDER;
  if (s.includes('crit') || s.includes('dex') || s.includes('spd') || s.includes('speed') || s.includes('focus') || s.includes('action') || s.includes('sp')) {
    return SS_STAT_FOCUS;
  }
  if (s.includes('longevity')) return SS_ATTR_STAR;
  return SS_STAT_ATK;
}

export function getSkillConceptIconUrl(
  gameSlug: string,
  skillType: string,
  elementOrAttack?: string | null,
  _fallbackUrl?: string
): string {
  const t = skillType.toUpperCase();

  if (gameSlug === 'heaven-burns-red') {
    if (elementOrAttack && HBR_ELEMENT_ICONS[elementOrAttack]) {
      return HBR_ELEMENT_ICONS[elementOrAttack]!;
    }
    if (elementOrAttack && HBR_ATTACK_TYPE_ICONS[elementOrAttack]) {
      return HBR_ATTACK_TYPE_ICONS[elementOrAttack]!;
    }
    if (t.includes('ULTIMATE') || t.includes('EX')) return HBR_STYLE_SSR;
    if (t.includes('PASSIVE') || t.includes('TRAIT')) return HBR_STYLE_SS;
    return HBR_SLASH;
  }

  if (gameSlug === 'uma-musume') {
    if (t.includes('RECOVERY') || t.includes('HEAL')) return UMA_SKILL_RECOVERY;
    if (t.includes('PASSIVE') || t.includes('GREEN')) return UMA_SKILL_PASSIVE;
    if (t.includes('DEBUFF')) return UMA_SKILL_DEBUFF;
    if (t.includes('ULTIMATE') || t.includes('UNIQUE')) return UMA_SKILL_RUNNER;
    return UMA_SKILL_VISION;
  }

  if (gameSlug === 'sword-of-convallaria') {
    if (t.includes('ULTIMATE') || t.includes('EX')) return SOC_TAROT_WORLD_NRG;
    if (t.includes('HEAL') || t.includes('SUPPORT')) return SOC_TAROT_PRIESTESS_HEAL;
    if (t.includes('PASSIVE') || t.includes('TRAIT') || t.includes('AURA')) return SOC_TAROT_JUSTICE_CRIT;
    if (t.includes('REACTION') || t.includes('DEF')) return SOC_TAROT_HERMIT_DEF;
    return SOC_TAROT_STRENGTH_ATK;
  }

  // Star Savior official class/stat icons
  if (t.includes('ULTIMATE') || t.includes('EX') || t.includes('NOVA')) return SS_CLASS_STRIKER;
  if (t.includes('BREAK') || t.includes('SHRED')) return SS_CLASS_RANGER;
  if (t.includes('PASSIVE') || t.includes('TRAIT')) return SS_CLASS_SUPPORTER;
  return SS_STAT_ATK;
}
