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
// 0. OFFICIAL GAME8.JP / APPMEDIA.JP / DOTGG SECTION NAVIGATION THUMBNAILS
//    Zero homemade SVGs — every section thumbnail is the authentic icon used on
//    the Japanese / Korean / Global wiki quick-menu for that exact game.
// ============================================================================
export type WikiSectionKey =
  | 'tier-list'
  | 'reroll'
  | 'weapons'
  | 'banners'
  | 'calculator'
  | 'bosses'
  | 'compare';

export const GAME_SECTION_ICONS: Record<string, Record<WikiSectionKey, string>> = {
  'star-savior': {
    // Official AppMedia.jp Star Savior quick-menu icons (最強ランキング, リセマラ, SSRアルカナ, コスモゲート, ガチャ, 試練)
    'tier-list': 'https://appmedia.jp/wp-content/uploads/2026/07/205642_m8vfh.webp',
    reroll: 'https://appmedia.jp/wp-content/uploads/2026/02/181128_a531d.webp',
    weapons: 'https://appmedia.jp/wp-content/uploads/2026/02/183029_ni2vf.webp',
    bosses: 'https://appmedia.jp/wp-content/uploads/2025/12/152123_6avt2.webp',
    banners: 'https://appmedia.jp/wp-content/uploads/2025/11/144612_t1qbw.webp',
    compare: 'https://appmedia.jp/wp-content/uploads/2026/10/193414_1r78o.webp',
    calculator: 'https://appmedia.jp/wp-content/uploads/2026/10/144125_id9hj.webp',
  },
  'heaven-burns-red': {
    // Official Game8.jp Heaven Burns Red quick-menu icons (最強ランキング, リセマラ, オーブスキル, スコアアタック, ガチャ, 最強パーティー, スキル一覧)
    'tier-list': 'https://img.game8.jp/12250726/19cef3c6b75dabe7c76a41e366c6af7d.webp/original',
    reroll: 'https://img.game8.jp/12250821/f0a148a416565179abc0685bb567abb8.webp/original',
    weapons: 'https://img.game8.jp/12250736/a13946cd2c07ca85385980d6f5d9b52e.webp/original',
    bosses: 'https://img.game8.jp/12250812/426fa8dc0f83da044dc779a1e0564d07.webp/original',
    banners: 'https://img.game8.jp/12250858/72cb04bd10eebb139cf11e4f3427fce9.webp/original',
    compare: 'https://img.game8.jp/12250759/ec45a87b48e4928d14c74a9573f7e27c.webp/original',
    calculator: 'https://img.game8.jp/12250803/e5785f03a668ef402455eeb7ac6e621e.webp/original',
  },
  'uma-musume': {
    // Official Game8.jp Uma Musume quick-menu icons (最強育成ウマ娘, リセマラ当たり, 最強サポート, チャンミ, ガチャ一覧, ステータスの解説, トレーニングの効果)
    'tier-list': 'https://img.game8.jp/5598597/d4766aeac9fe6db527387991e48f1b7f.png/original',
    reroll: 'https://img.game8.jp/5588466/a50a2c08265c12ae40dea46db5637d09.png/original',
    weapons: 'https://img.game8.jp/5594582/f1ecbc97887b04af6a8a33fccf2fdc88.png/original',
    bosses: 'https://img.game8.jp/11060253/6d4af6774173922aa8956cb4bb88f10a.png/original',
    banners: 'https://img.game8.jp/5589413/840f3d24f3cabc1d2af08f53bc6be4ee.png/original',
    compare: 'https://img.game8.jp/5598929/ddbc15365a674bf2342da195bb54680e.png/original',
    calculator: 'https://img.game8.jp/5597449/7400890d5b1b13f27fabc4099b25b484.png/original',
  },
  'sword-of-convallaria': {
    // Official DotGG Sword of Convallaria section icons (SP Inanna, SP Samantha, Starry Sky Heritage, Judgement Tarot, Triss, Strength Tarot, World Tarot)
    'tier-list': 'https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/07/IMG_1686.webp',
    reroll: 'https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0699.webp',
    weapons: 'https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/09/IMG_2870.webp',
    bosses: 'https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_2599.webp',
    banners: 'https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/11/IMG_4942.webp',
    compare: 'https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_4789.webp',
    calculator: 'https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_2723.webp',
  },
};

export const UI_SECTION_EMBLEMS: Record<WikiSectionKey, string> =
  GAME_SECTION_ICONS['star-savior']!;

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
  section: WikiSectionKey,
  gameSlug?: string
): string {
  const gameIcons =
    (gameSlug && GAME_SECTION_ICONS[gameSlug]) || GAME_SECTION_ICONS['star-savior']!;
  return gameIcons[section] ?? gameIcons['tier-list'];
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
    if (elementKey === 'Short') return UMA_SPEED;
    if (elementKey === 'Mile') return UMA_WISDOM;
    if (elementKey === 'Medium') return UMA_POWER;
    if (elementKey === 'Long') return UMA_STAMINA;
    if (elementKey === 'Dirt') return UMA_GUTS;
    return UMA_SPEED;
  }
  return SS_ATTR_STAR;
}

export function getRoleIconUrl(
  gameSlug: string,
  roleKey: string,
  _units?: Array<{ roleColumn?: string; imageUrl: string }>
): string {
  if (gameSlug === 'uma-musume') {
    if (roleKey === 'DPS') return UMA_SPEED;
    if (roleKey === 'SUB_DPS') return UMA_SKILL_LEADER;
    if (roleKey === 'SUPPORT') return UMA_SKILL_RECOVERY;
    if (roleKey === 'SUSTAIN') return UMA_GUTS;
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
    if (s.includes('friend') || s.includes('group') || s.includes('pal')) {
      return UMA_SKILL_PASSIVE;
    }
    if (s.includes('speed') || s.includes('velocity') || s.includes('position')) return UMA_SPEED;
    if (s.includes('stamina') || s.includes('consistency')) return UMA_STAMINA;
    if (s.includes('power') || s.includes('accel') || s.includes('spurt') || s.includes('burst')) return UMA_POWER;
    if (s.includes('guts')) return UMA_GUTS;
    if (s.includes('wit') || s.includes('wisdom') || s.includes('sp') || s.includes('skill') || s.includes('hint') || s.includes('efficiency')) return UMA_WISDOM;
    if (s.includes('recovery') || s.includes('uphill') || s.includes('drain') || s.includes('sustain')) return UMA_SKILL_RECOVERY;
    if (s.includes('aptitude') || s.includes('turf') || s.includes('dirt') || s.includes('longevity')) return UMA_SKILL_PASSIVE;
    if (s.includes('swing') || s.includes('penalty') || s.includes('loss') || s.includes('traffic')) return UMA_SKILL_DEBUFF;
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
    if (s.includes('ranged') || s.includes('magic') || s.includes('matk')) return SOC_TAROT_MAGICIAN_MATK;
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
