import type { ElementOption, RoleOption, ShortcutItem, CharacterStats, CharacterSkill } from '../../domain/schemas';

export interface SeedCharacterInput {
  gameSlug: string;
  slug: string;
  name: string;
  title: string;
  rarity: string;
  element: string;
  role: string;
  imageUrl: string;
  overallTier: 'SS' | 'S' | 'A' | 'B';
  rerollTier: 'SS' | 'S' | 'A' | 'B';
  score: string;
  summary: string;
  recommendedDupes: string;
  baseStats: CharacterStats;
  skills: CharacterSkill[];
  bestArcanaSlugs: string[];
}

export interface SeedArcanaInput {
  gameSlug: string;
  slug: string;
  name: string;
  rarity: string;
  category: string;
  subType: string;
  imageUrl: string;
  tier: 'SS' | 'S' | 'A' | 'B';
  score: string;
  effectSummary: string;
  stats: Record<string, string | number>;
  bestHolderSlugs: string[];
}

export interface SeedBannerInput {
  gameSlug: string;
  slug: string;
  title: string;
  bannerType: string;
  imageUrl: string;
  periodLabel: string;
  verdict: string;
  reasoning: string;
  featuredCharacterSlugs: string[];
}

export const STAR_SAVIOR_GAME_SEED: {
  slug: string;
  name: string;
  subtitle: string;
  patchVersion: string;
  serverStatus: string;
  iconUrl: string;
  bannerUrl: string;
  elementsConfig: ElementOption[];
  rolesConfig: RoleOption[];
  shortcutsConfig: ShortcutItem[];
} = {
  "slug": "starsavior",
  "name": "Star Savior",
  "subtitle": "Star Savior Strategy Wiki — Tier List, Reroll, Characters & SSR Arcana Database",
  "patchVersion": "v1.4.0 (Simultaneous Global / JP / KR)",
  "serverStatus": "Global / JP / KR Synced",
  "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_starsavior.webp",
  "bannerUrl": "https://appmedia.jp/wp-content/themes/appmedia/images/header/bg_starsavior_sp.webp",
  "elementsConfig": [
    {
      "key": "Sun",
      "label": "Sun",
      "colorHex": "#EF4444",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp"
    },
    {
      "key": "Moon",
      "label": "Moon",
      "colorHex": "#3B82F6",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp"
    },
    {
      "key": "Star",
      "label": "Star",
      "colorHex": "#F59E0B",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp"
    },
    {
      "key": "Order",
      "label": "Order",
      "colorHex": "#10B981",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-65502-20251114140221.webp"
    },
    {
      "key": "Chaos",
      "label": "Chaos",
      "colorHex": "#A855F7",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-10703-20251114140221.webp"
    }
  ],
  "rolesConfig": [
    {
      "key": "Striker",
      "label": "Striker",
      "colorHex": "#EF4444",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-1533-20251112031704.webp"
    },
    {
      "key": "Assassin",
      "label": "Assassin",
      "colorHex": "#EC4899",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-23566-20251112031814.webp"
    },
    {
      "key": "Ranger",
      "label": "Ranger",
      "colorHex": "#F59E0B",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-171-20251112031735.webp"
    },
    {
      "key": "Caster",
      "label": "Caster",
      "colorHex": "#8B5CF6",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-57169-20251112031841.webp"
    },
    {
      "key": "Supporter",
      "label": "Supporter",
      "colorHex": "#3B82F6",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-18986-20251112031910.webp"
    },
    {
      "key": "Defender",
      "label": "Defender",
      "colorHex": "#10B981",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-9372-20251112031758.webp"
    }
  ],
  "shortcutsConfig": [
    {
      "key": "tier-list",
      "title": "Strongest Tier List",
      "subtitle": "Overall PvE & Boss Meta Ranking",
      "href": "/starsavior/tier-list",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/09/143855_iv9nt.webp",
      "badge": "OVERALL META"
    },
    {
      "key": "reroll",
      "title": "Reroll Tier List",
      "subtitle": "Best Starting SSR Targets",
      "href": "/starsavior/reroll",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/112830_qacgx.webp",
      "badge": "STARTER GUIDE"
    },
    {
      "key": "characters",
      "title": "Character Database",
      "subtitle": "All 57 Saviors, Skills & Builds",
      "href": "/starsavior/characters",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/09/205900_h5bcs.webp",
      "badge": "57 CHARACTERS"
    },
    {
      "key": "arcana",
      "title": "SSR Arcana Tier List",
      "subtitle": "Best-in-Slot Arcana Cards",
      "href": "/starsavior/arcana",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/07/190530_zk9ua.webp",
      "badge": "50 ARCANA"
    }
  ]
};

export const STAR_SAVIOR_CHARACTERS_SEED: SeedCharacterInput[] = [
  {
    "gameSlug": "starsavior",
    "slug": "ss-80384230",
    "name": "Professor M",
    "title": "SSR [Veteran Detective] • Moon Ranger (Breaker)",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/205900_h5bcs.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.9",
    "summary": "Professor M is a SSS-Tier Moon-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
    "recommendedDupes": "LB1 (1 Dupe) / Base",
    "baseStats": {
      "hp": 4235,
      "spd": 162,
      "atk": 2250,
      "def": 800,
      "crit": 92
    },
    "skills": [
      {
        "name": "Stellar Burst: Veteran Detective",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Moon Pierce DMG + 4 Toughness Break",
        "exactDescription": "Professor M is a SSS-Tier Moon-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
      },
      {
        "name": "Astral Drive: Professor M",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Moon Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-80231986",
      "ss-arcana-79855448"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-80354674",
    "name": "Amora",
    "title": "SSR [Point of No Return] • Order Assassin (Burst DPS)",
    "rarity": "SSR",
    "element": "Order",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/143855_iv9nt.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.8",
    "summary": "Amora is a SSS-Tier Order-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance.",
    "recommendedDupes": "LB1 (1 Dupe) / Base",
    "baseStats": {
      "hp": 4311,
      "spd": 156,
      "atk": 2345,
      "def": 838,
      "crit": 93
    },
    "skills": [
      {
        "name": "Stellar Burst: Point of No Return",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Order Slash DMG + 4 Toughness Break",
        "exactDescription": "Amora is a SSS-Tier Order-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance."
      },
      {
        "name": "Astral Drive: Amora",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Order DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Order Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79855448",
      "ss-arcana-79644746"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-80218957",
    "name": "Smile (Swimsuit)",
    "title": "SSR [Tropical Vacation] • Star Assassin (Burst DPS)",
    "rarity": "SSR",
    "element": "Star",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/112830_qacgx.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.7",
    "summary": "Smile (Swimsuit) is a SSS-Tier Star-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
    "recommendedDupes": "LB1 (1 Dupe) / Base",
    "baseStats": {
      "hp": 4275,
      "spd": 157,
      "atk": 2300,
      "def": 820,
      "crit": 94
    },
    "skills": [
      {
        "name": "Stellar Burst: Tropical Vacation",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Star Slash DMG + 4 Toughness Break",
        "exactDescription": "Smile (Swimsuit) is a SSS-Tier Star-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
      },
      {
        "name": "Astral Drive: Smile (Swimsuit)",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Star Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79644746",
      "ss-arcana-79517789"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-80022340",
    "name": "Carmen (Bride)",
    "title": "SSR [Crimson Vow Bride] • Moon Supporter (Buffer)",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Supporter",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/05/121623_3y1g7.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.7",
    "summary": "Carmen (Bride) is a SSS-Tier Moon-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
    "recommendedDupes": "LB1 (1 Dupe) / Base",
    "baseStats": {
      "hp": 4489,
      "spd": 171,
      "atk": 1719,
      "def": 802,
      "crit": 85
    },
    "skills": [
      {
        "name": "Stellar Burst: Crimson Vow Bride",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Moon Magic DMG + 4 Toughness Break",
        "exactDescription": "Carmen (Bride) is a SSS-Tier Moon-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
      },
      {
        "name": "Astral Drive: Carmen (Bride)",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Grants all allies +40% ATK, +25% Action Speed, and +20 Nova Energy at the start of the Broken window."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517789",
      "ss-arcana-79517786"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79717421",
    "name": "Charles (Bunny)",
    "title": "SSR [Velvet Lounge Bunny] • Sun Assassin (Burst DPS)",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/182954_1clb6.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.9",
    "summary": "Charles (Bunny) is a SSS-Tier Sun-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
    "recommendedDupes": "LB1 (1 Dupe) / Base",
    "baseStats": {
      "hp": 4315,
      "spd": 159,
      "atk": 2350,
      "def": 840,
      "crit": 96
    },
    "skills": [
      {
        "name": "Stellar Burst: Velvet Lounge Bunny",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Sun Slash DMG + 4 Toughness Break",
        "exactDescription": "Charles (Bunny) is a SSS-Tier Sun-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
      },
      {
        "name": "Astral Drive: Charles (Bunny)",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Sun Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517786",
      "ss-arcana-79517762"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-80482306",
    "name": "Ceres (Maid)",
    "title": "SSR [Reluctant Maid] • Sun Supporter (Buffer)",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Supporter",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/10/144125_id9hj.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.4",
    "summary": "Ceres (Maid) is a SS-Tier Sun-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4469,
      "spd": 173,
      "atk": 1699,
      "def": 782,
      "crit": 87
    },
    "skills": [
      {
        "name": "Stellar Burst: Reluctant Maid",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Sun Magic DMG + 4 Toughness Break",
        "exactDescription": "Ceres (Maid) is a SS-Tier Sun-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
      },
      {
        "name": "Astral Drive: Ceres (Maid)",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Grants all allies +40% ATK, +25% Action Speed, and +20 Nova Energy at the start of the Broken window."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-80231986",
      "ss-arcana-79855448"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-80331829",
    "name": "Christel",
    "title": "SSR [Chains of Eternity] • Sun Ranger (Breaker)",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/08/190200_51vpg.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.3",
    "summary": "Christel is a SS-Tier Sun-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4183,
      "spd": 168,
      "atk": 2140,
      "def": 764,
      "crit": 98
    },
    "skills": [
      {
        "name": "Stellar Burst: Chains of Eternity",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Sun Pierce DMG + 4 Toughness Break",
        "exactDescription": "Christel is a SS-Tier Sun-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
      },
      {
        "name": "Astral Drive: Christel",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Sun Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79855448",
      "ss-arcana-79644746"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-80022517",
    "name": "Epindel (Bride)",
    "title": "SSR [Till Death Do Us Part] • Sun Caster (AoE / Debuff)",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/06/151138_sphtu.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.3",
    "summary": "Epindel (Bride) is a SS-Tier Sun-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4259,
      "spd": 169,
      "atk": 2235,
      "def": 802,
      "crit": 99
    },
    "skills": [
      {
        "name": "Stellar Burst: Till Death Do Us Part",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Sun Magic DMG + 4 Toughness Break",
        "exactDescription": "Epindel (Bride) is a SS-Tier Sun-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
      },
      {
        "name": "Astral Drive: Epindel (Bride)",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Sun Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79644746",
      "ss-arcana-79517789"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-80012791",
    "name": "Tiria",
    "title": "SSR [Special Combat Instructor] • Sun Striker (DPS)",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/115944_7kujw.webp",
    "overallTier": "S",
    "rerollTier": "SS",
    "score": "9.5",
    "summary": "Tiria is a SS-Tier Sun-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4223,
      "spd": 163,
      "atk": 2190,
      "def": 784,
      "crit": 92
    },
    "skills": [
      {
        "name": "Stellar Burst: Special Combat Instructor",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Sun Slash DMG + 4 Toughness Break",
        "exactDescription": "Tiria is a SS-Tier Sun-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
      },
      {
        "name": "Astral Drive: Tiria",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Sun Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517789",
      "ss-arcana-79517786"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79924504",
    "name": "Fay",
    "title": "SSR [Jade Striker] • Moon Assassin (Burst DPS)",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/04/105026_1pwrt.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.4",
    "summary": "Fay is a SS-Tier Moon-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4187,
      "spd": 164,
      "atk": 2145,
      "def": 766,
      "crit": 93
    },
    "skills": [
      {
        "name": "Stellar Burst: Jade Striker",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Moon Slash DMG + 4 Toughness Break",
        "exactDescription": "Fay is a SS-Tier Moon-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
      },
      {
        "name": "Astral Drive: Fay",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Moon Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517786",
      "ss-arcana-79517762"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79864232",
    "name": "Rosaria",
    "title": "SSR [Maiden of the End] • Chaos Ranger (Breaker)",
    "rarity": "SSR",
    "element": "Chaos",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/191317_k4lb7.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.3",
    "summary": "Rosaria is a SS-Tier Chaos-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4263,
      "spd": 172,
      "atk": 2240,
      "def": 804,
      "crit": 94
    },
    "skills": [
      {
        "name": "Stellar Burst: Maiden of the End",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Chaos Pierce DMG + 4 Toughness Break",
        "exactDescription": "Rosaria is a SS-Tier Chaos-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance."
      },
      {
        "name": "Astral Drive: Rosaria",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Chaos DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Chaos Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-80231986",
      "ss-arcana-79855448"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79677914",
    "name": "Emily",
    "title": "SSR [Tactical Striker] • Moon Defender (Tank / Shield)",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Defender",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/01/194443_qs2vo.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.7",
    "summary": "Emily is a SS-Tier Moon-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 5515,
      "spd": 139,
      "atk": 1547,
      "def": 1054,
      "crit": 77
    },
    "skills": [
      {
        "name": "Stellar Burst: Tactical Striker",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Moon Crush DMG + 4 Toughness Break",
        "exactDescription": "Emily is a SS-Tier Moon-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
      },
      {
        "name": "Astral Drive: Emily",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deploys a 35% Max HP Astral Barrier across the squad for 2 turns and cleanses 2 debuffs."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79855448",
      "ss-arcana-79644746"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79606358",
    "name": "Asera (Dress)",
    "title": "SSR [Lady of House Stranis] • Order Supporter (Buffer)",
    "rarity": "SSR",
    "element": "Order",
    "role": "Supporter",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/12/165111_tyvh9.webp",
    "overallTier": "S",
    "rerollTier": "SS",
    "score": "9.5",
    "summary": "Asera (Dress) is a SS-Tier Order-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4441,
      "spd": 180,
      "atk": 1671,
      "def": 768,
      "crit": 86
    },
    "skills": [
      {
        "name": "Stellar Burst: Lady of House Stranis",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Order Magic DMG + 4 Toughness Break",
        "exactDescription": "Asera (Dress) is a SS-Tier Order-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance."
      },
      {
        "name": "Astral Drive: Asera (Dress)",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Order DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Grants all allies +40% ATK, +25% Action Speed, and +20 Nova Energy at the start of the Broken window."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79644746",
      "ss-arcana-79517789"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79534109",
    "name": "Claire (Bunny)",
    "title": "SSR [Perfect Bunny Girl] • Moon Striker (DPS)",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/103213_6rb9d.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.4",
    "summary": "Claire (Bunny) is a SS-Tier Moon-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4267,
      "spd": 168,
      "atk": 2245,
      "def": 806,
      "crit": 97
    },
    "skills": [
      {
        "name": "Stellar Burst: Perfect Bunny Girl",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Moon Slash DMG + 4 Toughness Break",
        "exactDescription": "Claire (Bunny) is a SS-Tier Moon-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
      },
      {
        "name": "Astral Drive: Claire (Bunny)",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Moon Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517789",
      "ss-arcana-79517786"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517681",
    "name": "Dana",
    "title": "SSR [Radiant Tactician] • Star Caster (AoE / Debuff)",
    "rarity": "SSR",
    "element": "Star",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAGICIAN_DRUID_icon.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.3",
    "summary": "Dana is a SS-Tier Star-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4231,
      "spd": 164,
      "atk": 2200,
      "def": 788,
      "crit": 98
    },
    "skills": [
      {
        "name": "Stellar Burst: Radiant Tactician",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Star Magic DMG + 4 Toughness Break",
        "exactDescription": "Dana is a SS-Tier Star-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
      },
      {
        "name": "Astral Drive: Dana",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Star Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517786",
      "ss-arcana-79517762"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517675",
    "name": "Ede",
    "title": "SSR [Sanctuary Cleric] • Star Defender (Tank / Shield)",
    "rarity": "SSR",
    "element": "Star",
    "role": "Defender",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/INCOGNITA_FLOWER_icon.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.7",
    "summary": "Ede is a SS-Tier Star-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 5475,
      "spd": 143,
      "atk": 1515,
      "def": 1030,
      "crit": 81
    },
    "skills": [
      {
        "name": "Stellar Burst: Sanctuary Cleric",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Star Crush DMG + 4 Toughness Break",
        "exactDescription": "Ede is a SS-Tier Star-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
      },
      {
        "name": "Astral Drive: Ede",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deploys a 35% Max HP Astral Barrier across the squad for 2 turns and cleanses 2 debuffs."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-80231986",
      "ss-arcana-79855448"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517738",
    "name": "Clarissa",
    "title": "SSR [Velvet Ranger] • Star Ranger (Breaker)",
    "rarity": "SSR",
    "element": "Star",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAGICIAN_SNIPER_icon.webp",
    "overallTier": "S",
    "rerollTier": "SS",
    "score": "9.5",
    "summary": "Clarissa is a SS-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4271,
      "spd": 166,
      "atk": 2250,
      "def": 808,
      "crit": 92
    },
    "skills": [
      {
        "name": "Stellar Burst: Velvet Ranger",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Star Pierce DMG + 4 Toughness Break",
        "exactDescription": "Clarissa is a SS-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
      },
      {
        "name": "Astral Drive: Clarissa",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Star Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79855448",
      "ss-arcana-79644746"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-80482402",
    "name": "Lydia (Maid)",
    "title": "SSR [Daydreaming Maid] • Moon Caster (AoE / Debuff)",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/06/154756_yiks1.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.9",
    "summary": "Lydia (Maid) is a S-Tier Moon-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4160,
      "spd": 167,
      "atk": 2055,
      "def": 740,
      "crit": 93
    },
    "skills": [
      {
        "name": "Stellar Burst: Daydreaming Maid",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Moon Magic DMG + 4 Toughness Break",
        "exactDescription": "Lydia (Maid) is a S-Tier Moon-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
      },
      {
        "name": "Astral Drive: Lydia (Maid)",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Moon Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79644746",
      "ss-arcana-79517789"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-80384143",
    "name": "Gwen",
    "title": "SSR [Hedonist's Solace] • Star Striker (DPS)",
    "rarity": "SSR",
    "element": "Star",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/205936_ywjad.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.8",
    "summary": "Gwen is a S-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4124,
      "spd": 159,
      "atk": 2010,
      "def": 722,
      "crit": 94
    },
    "skills": [
      {
        "name": "Stellar Burst: Hedonist's Solace",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Star Slash DMG + 4 Toughness Break",
        "exactDescription": "Gwen is a S-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
      },
      {
        "name": "Astral Drive: Gwen",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Star Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517789",
      "ss-arcana-79517786"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-80218489",
    "name": "Luna (Swimsuit)",
    "title": "SSR [Summer Night Sky] • Sun Defender (Tank / Shield)",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Defender",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/112813_tnirc.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.8",
    "summary": "Luna (Swimsuit) is a S-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 5475,
      "spd": 147,
      "atk": 1520,
      "def": 1015,
      "crit": 77
    },
    "skills": [
      {
        "name": "Stellar Burst: Summer Night Sky",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Sun Crush DMG + 4 Toughness Break",
        "exactDescription": "Luna (Swimsuit) is a S-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
      },
      {
        "name": "Astral Drive: Luna (Swimsuit)",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deploys a 35% Max HP Astral Barrier across the squad for 2 turns and cleanses 2 debuffs."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517786",
      "ss-arcana-79517762"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-80128024",
    "name": "Ceres",
    "title": "SSR [Venomous Alchemist] • Moon Striker (DPS)",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/07/152521_s54gh.webp",
    "overallTier": "A",
    "rerollTier": "S",
    "score": "9.0",
    "summary": "Ceres is a S-Tier Moon-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4164,
      "spd": 161,
      "atk": 2060,
      "def": 742,
      "crit": 96
    },
    "skills": [
      {
        "name": "Stellar Burst: Venomous Alchemist",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Moon Slash DMG + 4 Toughness Break",
        "exactDescription": "Ceres is a S-Tier Moon-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
      },
      {
        "name": "Astral Drive: Ceres",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Moon Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-80231986",
      "ss-arcana-79855448"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-80127403",
    "name": "Cornelia",
    "title": "SSR [Blossom Executioner] • Chaos Caster (AoE / Debuff)",
    "rarity": "SSR",
    "element": "Chaos",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/06/120413_604d3.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.9",
    "summary": "Cornelia is a S-Tier Chaos-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4128,
      "spd": 171,
      "atk": 2015,
      "def": 724,
      "crit": 97
    },
    "skills": [
      {
        "name": "Stellar Burst: Blossom Executioner",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Chaos Magic DMG + 4 Toughness Break",
        "exactDescription": "Cornelia is a S-Tier Chaos-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance."
      },
      {
        "name": "Astral Drive: Cornelia",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Chaos DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Chaos Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79855448",
      "ss-arcana-79644746"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79924501",
    "name": "Lin",
    "title": "SSR [White Moon Blade] • Star Striker (DPS)",
    "rarity": "SSR",
    "element": "Star",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/04/105027_kjhmw.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.8",
    "summary": "Lin is a S-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4204,
      "spd": 163,
      "atk": 2110,
      "def": 762,
      "crit": 98
    },
    "skills": [
      {
        "name": "Stellar Burst: White Moon Blade",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Star Slash DMG + 4 Toughness Break",
        "exactDescription": "Lin is a S-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
      },
      {
        "name": "Astral Drive: Lin",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Star Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79644746",
      "ss-arcana-79517789"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79807109",
    "name": "Roberta",
    "title": "SSR [Executive Commander] • Star Striker (DPS)",
    "rarity": "SSR",
    "element": "Star",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/201812_s56oa.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.8",
    "summary": "Roberta is a S-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4168,
      "spd": 164,
      "atk": 2065,
      "def": 744,
      "crit": 99
    },
    "skills": [
      {
        "name": "Stellar Burst: Executive Commander",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Star Slash DMG + 4 Toughness Break",
        "exactDescription": "Roberta is a S-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
      },
      {
        "name": "Astral Drive: Roberta",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Star Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517789",
      "ss-arcana-79517786"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79766294",
    "name": "Frey (Bunny)",
    "title": "SSR [Indomitable Masterpiece] • Moon Caster (AoE / Debuff)",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/02/181128_a531d.webp",
    "overallTier": "A",
    "rerollTier": "S",
    "score": "9.0",
    "summary": "Frey (Bunny) is a S-Tier Moon-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4132,
      "spd": 162,
      "atk": 2020,
      "def": 726,
      "crit": 92
    },
    "skills": [
      {
        "name": "Stellar Burst: Indomitable Masterpiece",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Moon Magic DMG + 4 Toughness Break",
        "exactDescription": "Frey (Bunny) is a S-Tier Moon-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
      },
      {
        "name": "Astral Drive: Frey (Bunny)",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Moon Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517786",
      "ss-arcana-79517762"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517714",
    "name": "Kira",
    "title": "SSR [Starlight Idol] • Sun Assassin (Burst DPS)",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MUTANT_MASK_icon.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.9",
    "summary": "Kira is a S-Tier Sun-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4208,
      "spd": 166,
      "atk": 2115,
      "def": 764,
      "crit": 93
    },
    "skills": [
      {
        "name": "Stellar Burst: Starlight Idol",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Sun Slash DMG + 4 Toughness Break",
        "exactDescription": "Kira is a S-Tier Sun-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
      },
      {
        "name": "Astral Drive: Kira",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Sun Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-80231986",
      "ss-arcana-79855448"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517705",
    "name": "Lacy",
    "title": "SSR [Silent Tracker] • Chaos Ranger (Breaker)",
    "rarity": "SSR",
    "element": "Chaos",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/INDEPENDENT_DRAGON_icon.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.8",
    "summary": "Lacy is a S-Tier Chaos-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4172,
      "spd": 164,
      "atk": 2070,
      "def": 746,
      "crit": 94
    },
    "skills": [
      {
        "name": "Stellar Burst: Silent Tracker",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Chaos Pierce DMG + 4 Toughness Break",
        "exactDescription": "Lacy is a S-Tier Chaos-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance."
      },
      {
        "name": "Astral Drive: Lacy",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Chaos DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Chaos Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79855448",
      "ss-arcana-79644746"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517690",
    "name": "Lugh",
    "title": "SSR [Spear of Light] • Moon Ranger (Breaker)",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/RECON_AMULET_icon.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.8",
    "summary": "Lugh is a S-Tier Moon-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4136,
      "spd": 165,
      "atk": 2025,
      "def": 728,
      "crit": 95
    },
    "skills": [
      {
        "name": "Stellar Burst: Spear of Light",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Moon Pierce DMG + 4 Toughness Break",
        "exactDescription": "Lugh is a S-Tier Moon-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
      },
      {
        "name": "Astral Drive: Lugh",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Moon Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79644746",
      "ss-arcana-79517789"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517678",
    "name": "Serpan",
    "title": "SSR [Abyssal Scale] • Sun Supporter (Buffer)",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Supporter",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/EASTERN_OWL_icon.webp",
    "overallTier": "A",
    "rerollTier": "S",
    "score": "9.0",
    "summary": "Serpan is a S-Tier Sun-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4350,
      "spd": 168,
      "atk": 1580,
      "def": 710,
      "crit": 86
    },
    "skills": [
      {
        "name": "Stellar Burst: Abyssal Scale",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Sun Magic DMG + 4 Toughness Break",
        "exactDescription": "Serpan is a S-Tier Sun-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
      },
      {
        "name": "Astral Drive: Serpan",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Grants all allies +40% ATK, +25% Action Speed, and +20 Nova Energy at the start of the Broken window."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517789",
      "ss-arcana-79517786"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517669",
    "name": "Seira",
    "title": "SSR [Starlight Archer] • Order Striker (DPS)",
    "rarity": "SSR",
    "element": "Order",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/NIGHTMARE_REAPER_icon.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.9",
    "summary": "Seira is a S-Tier Order-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4176,
      "spd": 156,
      "atk": 2075,
      "def": 748,
      "crit": 97
    },
    "skills": [
      {
        "name": "Stellar Burst: Starlight Archer",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Order Slash DMG + 4 Toughness Break",
        "exactDescription": "Seira is a S-Tier Order-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance."
      },
      {
        "name": "Astral Drive: Seira",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Order DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Order Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517786",
      "ss-arcana-79517762"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517660",
    "name": "Charles",
    "title": "SSR [Royal Knight] • Sun Striker (DPS)",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_KNIGHT_icon.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.8",
    "summary": "Charles is a S-Tier Sun-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4140,
      "spd": 157,
      "atk": 2030,
      "def": 730,
      "crit": 98
    },
    "skills": [
      {
        "name": "Stellar Burst: Royal Knight",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Sun Slash DMG + 4 Toughness Break",
        "exactDescription": "Charles is a S-Tier Sun-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
      },
      {
        "name": "Astral Drive: Charles",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Sun Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-80231986",
      "ss-arcana-79855448"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517657",
    "name": "Luna",
    "title": "SSR [Lunar Mystic] • Order Caster (AoE / Debuff)",
    "rarity": "SSR",
    "element": "Order",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_ORACLE_icon.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.8",
    "summary": "Luna is a S-Tier Order-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4104,
      "spd": 169,
      "atk": 1985,
      "def": 712,
      "crit": 99
    },
    "skills": [
      {
        "name": "Stellar Burst: Lunar Mystic",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Order Magic DMG + 4 Toughness Break",
        "exactDescription": "Luna is a S-Tier Order-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance."
      },
      {
        "name": "Astral Drive: Luna",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Order DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Order Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79855448",
      "ss-arcana-79644746"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517654",
    "name": "Smile",
    "title": "SSR [Solar Vanguard] • Star Ranger (Breaker)",
    "rarity": "SSR",
    "element": "Star",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_SMILE_icon.webp",
    "overallTier": "A",
    "rerollTier": "S",
    "score": "9.0",
    "summary": "Smile is a S-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4180,
      "spd": 170,
      "atk": 2080,
      "def": 750,
      "crit": 92
    },
    "skills": [
      {
        "name": "Stellar Burst: Solar Vanguard",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Star Pierce DMG + 4 Toughness Break",
        "exactDescription": "Smile is a S-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
      },
      {
        "name": "Astral Drive: Smile",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Star Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79644746",
      "ss-arcana-79517789"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517720",
    "name": "Anna",
    "title": "SSR [Undercover Officer] • Sun Defender (Tank / Shield)",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Defender",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/OFFICER_POLICE_icon.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.9",
    "summary": "Anna is a S-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 5405,
      "spd": 141,
      "atk": 1464,
      "def": 973,
      "crit": 75
    },
    "skills": [
      {
        "name": "Stellar Burst: Undercover Officer",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Sun Crush DMG + 4 Toughness Break",
        "exactDescription": "Anna is a S-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
      },
      {
        "name": "Astral Drive: Anna",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deploys a 35% Max HP Astral Barrier across the squad for 2 turns and cleanses 2 debuffs."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517789",
      "ss-arcana-79517786"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79855349",
    "name": "Hilde",
    "title": "SSR [Nostalgic Vanguard] • Sun Defender (Tank / Shield)",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Defender",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/130612_m2rk9.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.3",
    "summary": "Hilde is a A-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 5360,
      "spd": 142,
      "atk": 1428,
      "def": 946,
      "crit": 76
    },
    "skills": [
      {
        "name": "Stellar Burst: Nostalgic Vanguard",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Sun Crush DMG + 4 Toughness Break",
        "exactDescription": "Hilde is a A-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
      },
      {
        "name": "Astral Drive: Hilde",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deploys a 35% Max HP Astral Barrier across the squad for 2 turns and cleanses 2 debuffs."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517786",
      "ss-arcana-79517762"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79855337",
    "name": "Mina Yanagi",
    "title": "SSR [Veteran Mercenary] • Star Ranger (Breaker)",
    "rarity": "SSR",
    "element": "Star",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/130558_c8vsj.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.3",
    "summary": "Mina Yanagi is a A-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4184,
      "spd": 173,
      "atk": 2085,
      "def": 752,
      "crit": 95
    },
    "skills": [
      {
        "name": "Stellar Burst: Veteran Mercenary",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Star Pierce DMG + 4 Toughness Break",
        "exactDescription": "Mina Yanagi is a A-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
      },
      {
        "name": "Astral Drive: Mina Yanagi",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Star Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-80231986",
      "ss-arcana-79855448"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79644743",
    "name": "Belle Reese",
    "title": "SSR [Deep Condolence] • Star Ranger (Breaker)",
    "rarity": "SSR",
    "element": "Star",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/01/200314_a0eqx.webp",
    "overallTier": "B",
    "rerollTier": "A",
    "score": "8.5",
    "summary": "Belle Reese is a A-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4148,
      "spd": 162,
      "atk": 2040,
      "def": 734,
      "crit": 96
    },
    "skills": [
      {
        "name": "Stellar Burst: Deep Condolence",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Star Pierce DMG + 4 Toughness Break",
        "exactDescription": "Belle Reese is a A-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
      },
      {
        "name": "Astral Drive: Belle Reese",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Star Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79855448",
      "ss-arcana-79644746"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79534106",
    "name": "Scarlett (Bunny)",
    "title": "SSR [Bold Bunny Girl] • Sun Ranger (Breaker)",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/103214_qznbh.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.4",
    "summary": "Scarlett (Bunny) is a A-Tier Sun-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4112,
      "spd": 163,
      "atk": 1995,
      "def": 716,
      "crit": 97
    },
    "skills": [
      {
        "name": "Stellar Burst: Bold Bunny Girl",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Sun Pierce DMG + 4 Toughness Break",
        "exactDescription": "Scarlett (Bunny) is a A-Tier Sun-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
      },
      {
        "name": "Astral Drive: Scarlett (Bunny)",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Sun Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79644746",
      "ss-arcana-79517789"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517708",
    "name": "Tanya",
    "title": "SSR [Nightfang Assassin] • Star Striker (DPS)",
    "rarity": "SSR",
    "element": "Star",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/CONSTRUCT_GADGET_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.3",
    "summary": "Tanya is a A-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4188,
      "spd": 165,
      "atk": 2090,
      "def": 754,
      "crit": 98
    },
    "skills": [
      {
        "name": "Stellar Burst: Nightfang Assassin",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Star Slash DMG + 4 Toughness Break",
        "exactDescription": "Tanya is a A-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
      },
      {
        "name": "Astral Drive: Tanya",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Star Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517789",
      "ss-arcana-79517786"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517696",
    "name": "Lydia",
    "title": "SSR [Iron Bastion] • Chaos Ranger (Breaker)",
    "rarity": "SSR",
    "element": "Chaos",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/WEST_ROD_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.3",
    "summary": "Lydia is a A-Tier Chaos-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4152,
      "spd": 165,
      "atk": 2045,
      "def": 736,
      "crit": 99
    },
    "skills": [
      {
        "name": "Stellar Burst: Iron Bastion",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Chaos Pierce DMG + 4 Toughness Break",
        "exactDescription": "Lydia is a A-Tier Chaos-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance."
      },
      {
        "name": "Astral Drive: Lydia",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Chaos DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Chaos Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517786",
      "ss-arcana-79517762"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517672",
    "name": "Trish",
    "title": "SSR [Shadow Executioner] • Star Assassin (Burst DPS)",
    "rarity": "SSR",
    "element": "Star",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/STELLAR_THIEF_icon.webp",
    "overallTier": "B",
    "rerollTier": "A",
    "score": "8.5",
    "summary": "Trish is a A-Tier Star-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4116,
      "spd": 167,
      "atk": 2000,
      "def": 718,
      "crit": 92
    },
    "skills": [
      {
        "name": "Stellar Burst: Shadow Executioner",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Star Slash DMG + 4 Toughness Break",
        "exactDescription": "Trish is a A-Tier Star-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
      },
      {
        "name": "Astral Drive: Trish",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Star Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-80231986",
      "ss-arcana-79855448"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517666",
    "name": "Frey",
    "title": "SSR [Silver Valkyrie] • Star Supporter (Buffer)",
    "rarity": "SSR",
    "element": "Star",
    "role": "Supporter",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_PRAY_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.4",
    "summary": "Frey is a A-Tier Star-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4442,
      "spd": 181,
      "atk": 1672,
      "def": 756,
      "crit": 83
    },
    "skills": [
      {
        "name": "Stellar Burst: Silver Valkyrie",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Star Magic DMG + 4 Toughness Break",
        "exactDescription": "Frey is a A-Tier Star-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
      },
      {
        "name": "Astral Drive: Frey",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Grants all allies +40% ATK, +25% Action Speed, and +20 Nova Energy at the start of the Broken window."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79855448",
      "ss-arcana-79644746"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517735",
    "name": "Scarlett",
    "title": "SSR [Deadeye Sniper] • Sun Striker (DPS)",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAID_SCISSORS_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.3",
    "summary": "Scarlett is a A-Tier Sun-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4156,
      "spd": 155,
      "atk": 2050,
      "def": 738,
      "crit": 94
    },
    "skills": [
      {
        "name": "Stellar Burst: Deadeye Sniper",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Sun Slash DMG + 4 Toughness Break",
        "exactDescription": "Scarlett is a A-Tier Sun-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
      },
      {
        "name": "Astral Drive: Scarlett",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Sun Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79644746",
      "ss-arcana-79517789"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517732",
    "name": "Claire",
    "title": "SSR [Order Dragoon] • Moon Assassin (Burst DPS)",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAID_SPEAR_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.3",
    "summary": "Claire is a A-Tier Moon-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4120,
      "spd": 156,
      "atk": 2005,
      "def": 720,
      "crit": 95
    },
    "skills": [
      {
        "name": "Stellar Burst: Order Dragoon",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Moon Slash DMG + 4 Toughness Break",
        "exactDescription": "Claire is a A-Tier Moon-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
      },
      {
        "name": "Astral Drive: Claire",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Moon Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517789",
      "ss-arcana-79517786"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517729",
    "name": "Naru",
    "title": "SSR [Phantom Butterfly] • Star Ranger (Breaker)",
    "rarity": "SSR",
    "element": "Star",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/NOA_OBSERVER_icon.webp",
    "overallTier": "B",
    "rerollTier": "A",
    "score": "8.5",
    "summary": "Naru is a A-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4196,
      "spd": 170,
      "atk": 2100,
      "def": 758,
      "crit": 96
    },
    "skills": [
      {
        "name": "Stellar Burst: Phantom Butterfly",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Star Pierce DMG + 4 Toughness Break",
        "exactDescription": "Naru is a A-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
      },
      {
        "name": "Astral Drive: Naru",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Star Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517786",
      "ss-arcana-79517762"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517726",
    "name": "Vera",
    "title": "SSR [Crimson Reaper] • Moon Supporter (Buffer)",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Supporter",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/LPU_POST_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.4",
    "summary": "Vera is a A-Tier Moon-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4410,
      "spd": 171,
      "atk": 1640,
      "def": 740,
      "crit": 87
    },
    "skills": [
      {
        "name": "Stellar Burst: Crimson Reaper",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Moon Magic DMG + 4 Toughness Break",
        "exactDescription": "Vera is a A-Tier Moon-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
      },
      {
        "name": "Astral Drive: Vera",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Grants all allies +40% ATK, +25% Action Speed, and +20 Nova Energy at the start of the Broken window."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-80231986",
      "ss-arcana-79855448"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517723",
    "name": "Marcille",
    "title": "SSR [Starry Dreamer] • Sun Assassin (Burst DPS)",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/CONSTRUCT_WRENCH_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.3",
    "summary": "Marcille is a A-Tier Sun-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4124,
      "spd": 159,
      "atk": 2010,
      "def": 722,
      "crit": 98
    },
    "skills": [
      {
        "name": "Stellar Burst: Starry Dreamer",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Sun Slash DMG + 4 Toughness Break",
        "exactDescription": "Marcille is a A-Tier Sun-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
      },
      {
        "name": "Astral Drive: Marcille",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Sun Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79855448",
      "ss-arcana-79644746"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517717",
    "name": "Besta",
    "title": "SSR [Unbreakable Shield] • Star Defender (Tank / Shield)",
    "rarity": "SSR",
    "element": "Star",
    "role": "Defender",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/WEST_LANCER_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.3",
    "summary": "Besta is a A-Tier Star-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 5475,
      "spd": 145,
      "atk": 1520,
      "def": 1015,
      "crit": 81
    },
    "skills": [
      {
        "name": "Stellar Burst: Unbreakable Shield",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Star Crush DMG + 4 Toughness Break",
        "exactDescription": "Besta is a A-Tier Star-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
      },
      {
        "name": "Astral Drive: Besta",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deploys a 35% Max HP Astral Barrier across the squad for 2 turns and cleanses 2 debuffs."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79644746",
      "ss-arcana-79517789"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517711",
    "name": "Lily",
    "title": "SSR [Pure Blossom] • Moon Caster (AoE / Debuff)",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/DETECTIVE_WATSON_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.0",
    "summary": "Lily is a B-Tier Moon-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4164,
      "spd": 162,
      "atk": 2060,
      "def": 742,
      "crit": 92
    },
    "skills": [
      {
        "name": "Stellar Burst: Pure Blossom",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Moon Magic DMG + 4 Toughness Break",
        "exactDescription": "Lily is a B-Tier Moon-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
      },
      {
        "name": "Astral Drive: Lily",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Moon Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517789",
      "ss-arcana-79517786"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517699",
    "name": "Harley",
    "title": "SSR [Wild Outlaw] • Sun Defender (Tank / Shield)",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Defender",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/WILD_HOG_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "7.9",
    "summary": "Harley is a B-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 5385,
      "spd": 147,
      "atk": 1448,
      "def": 961,
      "crit": 75
    },
    "skills": [
      {
        "name": "Stellar Burst: Wild Outlaw",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Sun Crush DMG + 4 Toughness Break",
        "exactDescription": "Harley is a B-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
      },
      {
        "name": "Astral Drive: Harley",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deploys a 35% Max HP Astral Barrier across the squad for 2 turns and cleanses 2 debuffs."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517786",
      "ss-arcana-79517762"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517693",
    "name": "Epindel",
    "title": "SSR [Moonlit Sorceress] • Moon Assassin (Burst DPS)",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/GRACE_DUALSWORD_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "7.8",
    "summary": "Epindel is a B-Tier Moon-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4204,
      "spd": 163,
      "atk": 2110,
      "def": 762,
      "crit": 94
    },
    "skills": [
      {
        "name": "Stellar Burst: Moonlit Sorceress",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Moon Slash DMG + 4 Toughness Break",
        "exactDescription": "Epindel is a B-Tier Moon-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
      },
      {
        "name": "Astral Drive: Epindel",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Moon Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-80231986",
      "ss-arcana-79855448"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517687",
    "name": "Elisa",
    "title": "SSR [Astral Weaver] • Chaos Supporter (Buffer)",
    "rarity": "SSR",
    "element": "Chaos",
    "role": "Supporter",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SAINTESS_ELF_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "7.8",
    "summary": "Elisa is a B-Tier Chaos-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4418,
      "spd": 177,
      "atk": 1648,
      "def": 744,
      "crit": 85
    },
    "skills": [
      {
        "name": "Stellar Burst: Astral Weaver",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Chaos Magic DMG + 4 Toughness Break",
        "exactDescription": "Elisa is a B-Tier Chaos-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance."
      },
      {
        "name": "Astral Drive: Elisa",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Chaos DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Grants all allies +40% ATK, +25% Action Speed, and +20 Nova Energy at the start of the Broken window."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79855448",
      "ss-arcana-79644746"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517684",
    "name": "Muriel",
    "title": "SSR [Aegis Guardian] • Sun Caster (AoE / Debuff)",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SAINTESS_DEMON_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.0",
    "summary": "Muriel is a B-Tier Sun-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4132,
      "spd": 166,
      "atk": 2020,
      "def": 726,
      "crit": 96
    },
    "skills": [
      {
        "name": "Stellar Burst: Aegis Guardian",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Sun Magic DMG + 4 Toughness Break",
        "exactDescription": "Muriel is a B-Tier Sun-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
      },
      {
        "name": "Astral Drive: Muriel",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Sun Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79644746",
      "ss-arcana-79517789"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517651",
    "name": "Asera",
    "title": "SSR [Star Striker] • Moon Striker (DPS)",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_STRANIS_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "7.9",
    "summary": "Asera is a B-Tier Moon-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4208,
      "spd": 166,
      "atk": 2115,
      "def": 764,
      "crit": 97
    },
    "skills": [
      {
        "name": "Stellar Burst: Star Striker",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Moon Slash DMG + 4 Toughness Break",
        "exactDescription": "Asera is a B-Tier Moon-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
      },
      {
        "name": "Astral Drive: Asera",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deals 280% Moon Slash damage, grants +35% Critical Hit DMG for 2 turns, and advances own Action Bar by 25%."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517789",
      "ss-arcana-79517786"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79576028",
    "name": "Omega",
    "title": "SSR [Imaginary Pioneer] • Star Caster (AoE / Debuff)",
    "rarity": "SSR",
    "element": "Star",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/STARPIERCER_OMEGA_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "7.3",
    "summary": "Omega is a C-Tier Star-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4172,
      "spd": 168,
      "atk": 2070,
      "def": 746,
      "crit": 98
    },
    "skills": [
      {
        "name": "Stellar Burst: Imaginary Pioneer",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Star Magic DMG + 4 Toughness Break",
        "exactDescription": "Omega is a C-Tier Star-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
      },
      {
        "name": "Astral Drive: Omega",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Star Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79517786",
      "ss-arcana-79517762"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517702",
    "name": "Petra",
    "title": "SSR [Flame Artisan] • Sun Ranger (Breaker)",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/CONSTRUCT_BOMB_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "7.3",
    "summary": "Petra is a C-Tier Sun-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 4136,
      "spd": 169,
      "atk": 2025,
      "def": 728,
      "crit": 99
    },
    "skills": [
      {
        "name": "Stellar Burst: Flame Artisan",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Sun Pierce DMG + 4 Toughness Break",
        "exactDescription": "Petra is a C-Tier Sun-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
      },
      {
        "name": "Astral Drive: Petra",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Inflicts 30% Sun Resistance Down for 2 turns while shredding 3 extra Toughness Gauge bars on the primary target."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-80231986",
      "ss-arcana-79855448"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-79517663",
    "name": "Carmen",
    "title": "SSR [Crimson Blade] • Moon Defender (Tank / Shield)",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Defender",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_SHIELDER_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "7.5",
    "summary": "Carmen is a C-Tier Moon-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
    "recommendedDupes": "Base (0 Dupes)",
    "baseStats": {
      "hp": 5350,
      "spd": 144,
      "atk": 1420,
      "def": 940,
      "crit": 74
    },
    "skills": [
      {
        "name": "Stellar Burst: Crimson Blade",
        "type": "EX_ULTIMATE",
        "spOrEnergyCost": "100 Nova",
        "multiplierSummary": "420% Moon Crush DMG + 4 Toughness Break",
        "exactDescription": "Carmen is a C-Tier Moon-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
      },
      {
        "name": "Astral Drive: Carmen",
        "type": "ACTIVE",
        "spOrEnergyCost": "3 Turn CD",
        "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
        "exactDescription": "Deploys a 35% Max HP Astral Barrier across the squad for 2 turns and cleanses 2 debuffs."
      }
    ],
    "bestArcanaSlugs": [
      "ss-arcana-79855448",
      "ss-arcana-79644746"
    ]
  }
];

export const STAR_SAVIOR_ARCANA_SEED: SeedArcanaInput[] = [
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-80231986",
    "name": "Summer Night Sky",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality (HP) • ATK % / Crit DMG %",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/07/190530_zk9ua.webp",
    "tier": "B",
    "score": "8.0",
    "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Vitality (HP) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Vitality (HP)",
      "BonusStat": "ATK % / Crit DMG %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80384230",
      "ss-79855337",
      "ss-79517735",
      "ss-79517651"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79855448",
    "name": "Battle-Hardened Mercenary",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality (HP) • ATK % / Crit DMG %",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/202111_kmw0s.webp",
    "tier": "B",
    "score": "7.9",
    "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Vitality (HP) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Vitality (HP)",
      "BonusStat": "ATK % / Crit DMG %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80384230",
      "ss-80354674",
      "ss-80127403",
      "ss-79517651",
      "ss-79576028"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79644746",
    "name": "Deep Condolences",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Focus (Acc) • ATK % / Crit DMG %",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/01/200315_snce6.webp",
    "tier": "B",
    "score": "7.8",
    "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Focus (Acc) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Focus (Acc)",
      "BonusStat": "ATK % / Crit DMG %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80022340",
      "ss-79517654",
      "ss-79644743",
      "ss-79517663"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517789",
    "name": "Undercover Cop",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Endurance (DEF) • ATK % / Crit DMG %",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_OFFICER_POLICE_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "8.0",
    "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Endurance (DEF) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Endurance (DEF)",
      "BonusStat": "ATK % / Crit DMG %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80354674",
      "ss-79717421",
      "ss-79677914",
      "ss-79576028"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517786",
    "name": "A Satisfying Meal",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit DMG %",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_LANCER_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "7.9",
    "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit DMG %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80482306",
      "ss-80218489",
      "ss-79517732"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517762",
    "name": "Heavenly Ordeal",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Endurance (DEF) • DEF %",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_SAINTESS_ELF_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "7.8",
    "effectSummary": "Grants DEF % training bonus and unlocks Endurance (DEF) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Endurance (DEF)",
      "BonusStat": "DEF %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80331829",
      "ss-79924501",
      "ss-79534106"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517750",
    "name": "The Princess Ascends the Throne",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality (HP) • ATK % / Crit DMG %",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_PRAY_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "7.8",
    "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Vitality (HP) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Vitality (HP)",
      "BonusStat": "ATK % / Crit DMG %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80354674",
      "ss-80218957",
      "ss-80022517",
      "ss-79576028",
      "ss-79517702"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79534220",
    "name": "Bold and Daring Bunny Girl",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • Effect Hit %",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/105829_y0pco.webp",
    "tier": "B",
    "score": "7.5",
    "effectSummary": "Grants Effect Hit % training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "Effect Hit %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80012791",
      "ss-80128024",
      "ss-79517720"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517792",
    "name": "More Professional Than Anyone",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality (HP) • ATK % / Crit DMG %",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_LPU_POST_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "7.4",
    "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Vitality (HP) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Vitality (HP)",
      "BonusStat": "ATK % / Crit DMG %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79924504",
      "ss-79606358",
      "ss-79517708"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517780",
    "name": "There Is Always Only One Truth",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Focus (Acc) • ATK %",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_DETECTIVE_WATSON_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "7.4",
    "effectSummary": "Grants ATK % training bonus and unlocks Focus (Acc) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Focus (Acc)",
      "BonusStat": "ATK %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80022340",
      "ss-79864232",
      "ss-79517729",
      "ss-79517663"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517777",
    "name": "Tempura Master",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit DMG %",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_CONSTRUCT_GADGET_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "7.4",
    "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit DMG %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79677914",
      "ss-80127403",
      "ss-79807109"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517765",
    "name": "Unseen Place",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Focus (Acc) • ATK % / Crit DMG %",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_BEAMSWORD_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "7.5",
    "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Focus (Acc) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Focus (Acc)",
      "BonusStat": "ATK % / Crit DMG %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80218957",
      "ss-79606358",
      "ss-79517696",
      "ss-79517702"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517756",
    "name": "A Walk with Friends",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit DMG %",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAGICIAN_DRUID_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "7.4",
    "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit DMG %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79717421",
      "ss-79534109",
      "ss-79855349"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517747",
    "name": "Night View Through Glass",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit DMG %",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_SHIELDER_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "7.4",
    "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit DMG %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79534109",
      "ss-79517681",
      "ss-79924501"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79893874",
    "name": "Forbidden Archives Vol. 1",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality (HP) • ATK % / Crit DMG %",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/182813_7ue9j.webp",
    "tier": "B",
    "score": "7.4",
    "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Vitality (HP) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Vitality (HP)",
      "BonusStat": "ATK % / Crit DMG %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79517675",
      "ss-79517672",
      "ss-79517726"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517840",
    "name": "Rabbit Town",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Endurance (DEF) • ATK % / Crit DMG %",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_CONSTRUCT_WRENCH_SR_01_icon_arcana.webp",
    "tier": "B",
    "score": "7.5",
    "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Endurance (DEF) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Endurance (DEF)",
      "BonusStat": "ATK % / Crit DMG %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80482306",
      "ss-79517738",
      "ss-79766294"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517825",
    "name": "Ready, Aim, Fire",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit DMG %",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAGICIAN_SNIPER_SR_01_icon_arcana.webp",
    "tier": "B",
    "score": "7.4",
    "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit DMG %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80022340",
      "ss-80482402",
      "ss-79807109",
      "ss-79517663"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517816",
    "name": "Choosing the Prey",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit DMG %",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_STELLAR_THIEF_SR_01_icon_arcana.webp",
    "tier": "B",
    "score": "7.4",
    "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit DMG %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80384143",
      "ss-79855337",
      "ss-79517666"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517813",
    "name": "Phantom Butterfly",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality (HP) • ATK % / Crit DMG %",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_NIGHTMARE_REAPER_SR_01_icon_arcana.webp",
    "tier": "B",
    "score": "7.4",
    "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Vitality (HP) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Vitality (HP)",
      "BonusStat": "ATK % / Crit DMG %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80331829",
      "ss-79517681",
      "ss-80218489"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517807",
    "name": "Cleaning & An Unexpected Guest",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit DMG %",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_SPEAR_SR_01_icon_arcana.webp",
    "tier": "B",
    "score": "7.5",
    "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit DMG %",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80128024",
      "ss-79766294",
      "ss-79517723"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-80139832",
    "name": "Death to the Flowers",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/161306_gw2et.webp",
    "tier": "SS",
    "score": "9.7",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80127403",
      "ss-79517714",
      "ss-79517735"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-80012824",
    "name": "Weakness-Covering Custom Special Training",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/05/172414_ia8pq.webp",
    "tier": "SS",
    "score": "9.7",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79717421",
      "ss-80022517",
      "ss-79924501"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79941760",
    "name": "Warmth of the White Moon",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/04/194656_x2w06.webp",
    "tier": "SS",
    "score": "9.7",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79807109",
      "ss-79517714",
      "ss-79644743"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79766540",
    "name": "Indomitable Masterpiece",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/02/183029_ni2vf.webp",
    "tier": "SS",
    "score": "9.8",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79517675",
      "ss-79766294",
      "ss-79517732"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79534223",
    "name": "The Perfect Bunny Girl",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/105828_b3l1z.webp",
    "tier": "SS",
    "score": "9.4",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80012791",
      "ss-79517714",
      "ss-79517717"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517771",
    "name": "Made by Petra",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_CONSTRUCT_BOMB_SSR_01_icon_arcana.webp",
    "tier": "SS",
    "score": "9.3",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79517705",
      "ss-79517669",
      "ss-79517654"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-80482327",
    "name": "Is This... Clothing?",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/10/192925_u7brs.webp",
    "tier": "S",
    "score": "8.8",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80482306",
      "ss-79517690",
      "ss-79517729"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-80400913",
    "name": "Hedonist's Consolation",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/194438_w92ck.webp",
    "tier": "S",
    "score": "9.0",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79924504",
      "ss-79517678",
      "ss-79534106"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-80363578",
    "name": "Journey of No Return",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/173117_4wct9.webp",
    "tier": "S",
    "score": "8.9",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79517738",
      "ss-79517690",
      "ss-79517669"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-80283517",
    "name": "Vacation Prep Starts with Shopping!",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/07/170418_4q5sx.webp",
    "tier": "S",
    "score": "8.8",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79517660",
      "ss-79517726",
      "ss-79517711"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79865537",
    "name": "The End Wears a Maiden's Face",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/115036_zi6xg.webp",
    "tier": "S",
    "score": "8.8",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79864232",
      "ss-79517690",
      "ss-79517657"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79606361",
    "name": "Daughter of House Stranis",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/12/182739_q8esp.webp",
    "tier": "S",
    "score": "9.0",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80331829",
      "ss-79517678",
      "ss-79517654"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517795",
    "name": "Dreaming Under the Stars",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_NOA_OBSERVER_SSR_01_icon_arcana.webp",
    "tier": "S",
    "score": "8.9",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79517720",
      "ss-79517708",
      "ss-79517723"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517783",
    "name": "As Cute as Kira!",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MUTANT_MASK_SSR_01_icon_arcana.webp",
    "tier": "S",
    "score": "8.8",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79677914",
      "ss-80482402",
      "ss-79855349"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517774",
    "name": "No Pain, No Gain",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_INDEPENDENT_DRAGON_SSR_01_icon_arcana.webp",
    "tier": "S",
    "score": "8.8",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79517669",
      "ss-79855337",
      "ss-79517699"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517744",
    "name": "A Knight's Oath",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_KNIGHT_SSR_01_icon_arcana.webp",
    "tier": "S",
    "score": "9.0",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79517678",
      "ss-79644743",
      "ss-79517717"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517741",
    "name": "Quiet Rest",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
    "tier": "S",
    "score": "8.9",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80022517",
      "ss-79606358",
      "ss-79534106"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-80521390",
    "name": "Harsh Trial",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/10/193414_1r78o.webp",
    "tier": "A",
    "score": "8.3",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79517660",
      "ss-79517708",
      "ss-79517696"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-80498278",
    "name": "Sandman's Outing",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/10/190614_vbrik.webp",
    "tier": "A",
    "score": "8.3",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80384143",
      "ss-79517696",
      "ss-79517711"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-80444335",
    "name": "Veteran Detective's Investigation Method",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/170800_jb9o5.webp",
    "tier": "A",
    "score": "8.5",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79534109",
      "ss-79517672",
      "ss-79517693"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-80331877",
    "name": "Chains of Eternal Bondage",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/08/193327_txw73.webp",
    "tier": "A",
    "score": "8.4",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79517669",
      "ss-79517657",
      "ss-79517666"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-80210542",
    "name": "Chase the Light!",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/06/170551_o4b9x.webp",
    "tier": "A",
    "score": "8.3",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-80012791",
      "ss-79517735",
      "ss-79517699"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-80191501",
    "name": "Resolve to Drink Poison",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/07/184533_dvhyg.webp",
    "tier": "A",
    "score": "8.3",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79517681",
      "ss-79517672",
      "ss-79517732"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-80041744",
    "name": "Languid Afternoon Interlude",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/05/132533_e9xba.webp",
    "tier": "A",
    "score": "8.4",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79517726",
      "ss-79517693",
      "ss-79517687"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79983016",
    "name": "Today's First Step",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/04/173815_r9imk.webp",
    "tier": "A",
    "score": "8.3",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79517675",
      "ss-79517660",
      "ss-79517723"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79855463",
    "name": "Counterattack of Nostalgia",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/202110_u9dqe.webp",
    "tier": "A",
    "score": "8.3",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79924504",
      "ss-79517720",
      "ss-79517717"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79808948",
    "name": "Responsibility Piled in Paperwork",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/201813_3r618.webp",
    "tier": "A",
    "score": "8.5",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79517666",
      "ss-79517711",
      "ss-79517687"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517768",
    "name": "Born to Be Wild",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WILD_HOG_SSR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.3",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79855349",
      "ss-79517693",
      "ss-79517684"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517759",
    "name": "Heavenly Judgment",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_SAINTESS_DEMON_SSR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.3",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79517657",
      "ss-79517687",
      "ss-79517684"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "ss-arcana-79517753",
    "name": "Atop the Pavilion, Greeting the Glass Moon",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power (STR) • ATK % / Crit Rate",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_EASTERN_SWORDMASTER_SSR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.5",
    "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
    "stats": {
      "AptitudeTag": "Power (STR)",
      "BonusStat": "ATK % / Crit Rate",
      "ClassRestriction": "Universal (All Classes)"
    },
    "bestHolderSlugs": [
      "ss-79864232",
      "ss-80482402",
      "ss-79517684"
    ]
  }
];

export const STAR_SAVIOR_BANNERS_SEED: SeedBannerInput[] = [
  {
    "gameSlug": "starsavior",
    "slug": "starsavior-bunny-frey-pickup",
    "title": "Limited Rate-Up — Frey (Bunny) & Indomitable Masterpiece Arcana",
    "bannerType": "LIMITED",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/02/182213_ula9p.webp",
    "periodLabel": "2027-02-01 ~ 2027-02-22",
    "verdict": "MUST PULL",
    "reasoning": "SSS Tier 0 Striker with unmatched AoE Moon-element burst damage, self-crit buffing, and extra-turn Nova economy.",
    "featuredCharacterSlugs": [
      "ss-79766294",
      "ss-79517681"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "starsavior-lugh-besta-pickup",
    "title": "Order & Aegis Dual Rate-Up — Lugh & Besta",
    "bannerType": "FESTIVAL",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/112244_ugsz1.webp",
    "periodLabel": "2027-02-15 ~ 2027-03-05",
    "verdict": "MUST PULL",
    "reasoning": "Both Lugh and Besta sit at the top of SSS Tier 0 as the premier Toughness Breaker and team-wide Barrier Defender.",
    "featuredCharacterSlugs": [
      "ss-79517690",
      "ss-79517717"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "starsavior-arcana-pickup",
    "title": "SSR Arcana Rate-Up — Death to the Flowers & Custom Special Training",
    "bannerType": "SUPPORT_CARD",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/174807_2g0e5.webp",
    "periodLabel": "2027-02-10 ~ 2027-02-28",
    "verdict": "HIGH VALUE",
    "reasoning": "Top-ranked SSS/SS Arcanas providing the highest Power (STR) and Critical Damage training multipliers in the game.",
    "featuredCharacterSlugs": [
      "ss-80384230",
      "ss-80022340"
    ]
  }
];
