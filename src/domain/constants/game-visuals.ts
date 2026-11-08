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
const HBR_CHARM = 'https://img.game8.jp/9040317/f0d768fc5cec8697b1cc925eca71c2a1.png/original';
const HBR_BOOSTER = 'https://img.game8.jp/6641531/31ab62120401518174a36650f998cc8a.png/original';
const HBR_CHIP = 'https://img.game8.jp/6641539/9d8ed87426c0eed26c30c8c81f1d5b22.png/original';

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
  Magic: HBR_CHARM,
  Physical: HBR_SLASH,
  Piercing: HBR_PIERCE,
};

export const UMA_STAT_ICONS: Record<string, string> = {
  Speed: UMA_SPEED,
  Stamina: UMA_STAMINA,
  Power: UMA_POWER,
  Guts: UMA_GUTS,
  Wisdom: UMA_WISDOM,
  Short: UMA_SPEED,
  Mile: UMA_POWER,
  Medium: UMA_WISDOM,
  Long: UMA_STAMINA,
  Dirt: UMA_GUTS,
};

export const UMA_SKILL_ICONS: Record<string, string> = {
  Runner: UMA_SKILL_RUNNER,
  Leader: UMA_SKILL_LEADER,
  Betweener: UMA_SKILL_BETWEENER,
  Chaser: UMA_SKILL_CHASER,
};

export function getGameAppIconUrl(gameSlug: string): string {
  return GAME_APP_ICONS[gameSlug] ?? DEFAULT_ICON;
}

export function getElementIconUrl(
  gameSlug: string,
  elementKey: string,
  units?: Array<{ element?: string | null; imageUrl: string }>
): string {
  const hbrEl = HBR_ELEMENT_ICONS[elementKey];
  if (gameSlug === 'heaven-burns-red' && hbrEl) {
    return hbrEl;
  }
  const umaEl = UMA_STAT_ICONS[elementKey];
  if (gameSlug === 'uma-musume' && umaEl) {
    return umaEl;
  }
  if (units && units.length > 0) {
    const match = units.find((u) => u.element === elementKey);
    if (match) return match.imageUrl;
  }
  if (hbrEl) {
    return hbrEl;
  }
  return getGameAppIconUrl(gameSlug);
}

export function getRoleIconUrl(
  gameSlug: string,
  roleKey: string,
  units?: Array<{ roleColumn?: string; imageUrl: string }>
): string {
  if (gameSlug === 'heaven-burns-red') {
    if (roleKey === 'DPS') return HBR_SLASH;
    if (roleKey === 'SUB_DPS') return HBR_PIERCE;
    if (roleKey === 'SUPPORT') return HBR_CHARM;
    if (roleKey === 'SUSTAIN') return HBR_BOOSTER;
  }
  if (gameSlug === 'uma-musume') {
    if (roleKey === 'DPS') return UMA_SKILL_RUNNER;
    if (roleKey === 'SUB_DPS') return UMA_SKILL_LEADER;
    if (roleKey === 'SUPPORT') return UMA_SKILL_BETWEENER;
    if (roleKey === 'SUSTAIN') return UMA_SKILL_CHASER;
  }
  if (units && units.length > 0) {
    const match = units.find((u) => u.roleColumn === roleKey);
    if (match) return match.imageUrl;
  }
  return getGameAppIconUrl(gameSlug);
}

export function getAttackTypeIconUrl(
  gameSlug: string,
  attackType?: string | null,
  fallbackUrl?: string
): string {
  if (!attackType) return fallbackUrl ?? getGameAppIconUrl(gameSlug);
  const umaSkill = UMA_SKILL_ICONS[attackType];
  if (umaSkill) return umaSkill;
  const hbrAtk = HBR_ATTACK_TYPE_ICONS[attackType];
  if (hbrAtk) return hbrAtk;
  return fallbackUrl ?? getGameAppIconUrl(gameSlug);
}

export function getStatConceptIconUrl(
  gameSlug: string,
  statLabel: string,
  fallbackUrl?: string
): string {
  const s = statLabel.toLowerCase();
  if (s.includes('speed') || s.includes('spd') || s.includes('action')) return UMA_SPEED;
  if (s.includes('stamina') || s.includes('hp') || s.includes('vitality')) return UMA_STAMINA;
  if (s.includes('power') || s.includes('atk') || s.includes('str') || s.includes('potency'))
    return UMA_POWER;
  if (s.includes('guts') || s.includes('def') || s.includes('dp') || s.includes('endurance'))
    return UMA_GUTS;
  if (s.includes('wit') || s.includes('wisdom') || s.includes('crit') || s.includes('focus'))
    return UMA_WISDOM;
  if (s.includes('fire') || s.includes('sun')) return HBR_FIRE;
  if (s.includes('ice') || s.includes('moon')) return HBR_ICE;
  if (s.includes('thunder') || s.includes('star')) return HBR_THUNDER;
  if (s.includes('light') || s.includes('order')) return HBR_LIGHT;
  if (s.includes('dark') || s.includes('chaos')) return HBR_DARK;
  if (s.includes('slash')) return HBR_SLASH;
  if (s.includes('pierce') || s.includes('piercing')) return HBR_PIERCE;
  if (s.includes('crush')) return HBR_CRUSH;
  return fallbackUrl ?? getGameAppIconUrl(gameSlug);
}

export function getSkillConceptIconUrl(
  gameSlug: string,
  skillType: string,
  fallbackUrl?: string
): string {
  if (gameSlug === 'uma-musume') {
    if (skillType === 'EX_ULTIMATE') return UMA_SKILL_CHASER;
    if (skillType === 'TRAINING_EVENT') return UMA_SKILL_LEADER;
    return UMA_SKILL_RUNNER;
  }
  if (gameSlug === 'heaven-burns-red') {
    if (skillType === 'EX_ULTIMATE') return HBR_CHARM;
    return HBR_CHIP;
  }
  return fallbackUrl ?? getGameAppIconUrl(gameSlug);
}
