import type { SeedBoardPost } from '../../components/micro/StarSaviorInteractiveTools';

export interface GuideTableSpec {
  headers: string[];
  rows: string[][];
}

export interface GuideSection {
  id: string;
  heading: string;
  subHeading?: string;
  paragraphs: string[];
  bullets?: string[];
  table?: GuideTableSpec;
  featuredCharSlugs?: string[];
  featuredArcanaSlugs?: string[];
}

export interface StarSaviorGuideArticle {
  slug: string;
  title: string;
  category:
    | 'Rankings'
    | 'Tools'
    | 'Gacha'
    | 'Events'
    | 'Rescue Journey'
    | 'Operations'
    | 'Cube Palace'
    | 'Strategy'
    | 'Mechanics'
    | 'Beginner & Systems'
    | 'Database'
    | 'Community';
  updatedAt: string;
  eyecatchSrc?: string;
  buttonBannerSrc?: string;
  lead: string;
  specialKind?:
    | 'pvp-ranking'
    | 'sr-char-ranking'
    | 'sr-arcana-ranking'
    | 'char-tier-maker'
    | 'arcana-tier-maker'
    | 'event-checker'
    | 'char-stats-table'
    | 'voice-actors-db'
    | 'birthday-db'
    | 'ark-points-db'
    | 'skins-db'
    | 'community-board';
  boardSeedPosts?: SeedBoardPost[];
  sections: GuideSection[];
}

/* ============================================================================
 * AppMedia Exact Gauntlet (PvP), SR Character & SR Arcana Ranking Data
 * ============================================================================ */
export const APPMEDIA_PVP_TIER_GROUPS: { tier: 'SSS' | 'SS' | 'S' | 'A' | 'B' | 'C'; subLabel: string; slugs: string[] }[] = [
  {
    tier: 'SSS',
    subLabel: 'Tier 0',
    slugs: ['amora', 'swimsuit-luna', 'carnelia', 'fei', 'rosalia'],
  },
  {
    tier: 'SS',
    subLabel: 'Tier 1',
    slugs: [
      'gwen',
      'professor-m',
      'bride-epindel',
      'bride-carmen',
      'roberta',
      'bunny-charles',
      'emily',
      'dress-asherah',
      'dana',
      'ede',
    ],
  },
  {
    tier: 'S',
    subLabel: 'Tier 2',
    slugs: [
      'maid-ceres',
      'maid-lydia',
      'swimsuit-smile',
      'tilia',
      'hilde',
      'bunny-frey',
      'bunny-claire',
      'lacy',
      'serpang',
      'seira',
      'luna',
      'clarissa',
    ],
  },
  {
    tier: 'A',
    subLabel: 'Tier 3',
    slugs: [
      'christel',
      'ceres',
      'rin',
      'yanagi-mina',
      'kira',
      'tanya',
      'harley',
      'lydia',
      'lu',
      'elisa',
      'trish',
      'frey',
      'smile',
      'scarlet',
      'claire',
      'naru',
      'anna',
      'vesta',
    ],
  },
  {
    tier: 'B',
    subLabel: 'Tier 4',
    slugs: ['bell-lease', 'bunny-scarlet', 'epindel', 'muriel', 'charles', 'asherah', 'bella', 'marcille'],
  },
  {
    tier: 'C',
    subLabel: 'Tier 5',
    slugs: ['omega', 'lily', 'petra', 'carmen'],
  },
];

export const APPMEDIA_SR_CHAR_GROUPS: { tier: 'S' | 'A' | 'B'; subLabel: string; slugs: string[] }[] = [
  { tier: 'S', subLabel: 'Tier 2', slugs: ['naru', 'vesta'] },
  { tier: 'A', subLabel: 'Tier 3', slugs: ['clarissa', 'claire', 'anna'] },
  { tier: 'B', subLabel: 'Tier 4', slugs: ['scarlet', 'bella', 'marcille'] },
];

export const APPMEDIA_SR_ARCANA_GROUPS: { tier: 'S' | 'A' | 'B'; subLabel: string; slugs: string[] }[] = [
  {
    tier: 'S',
    subLabel: 'Tier 2',
    slugs: ['arcana-79517840', 'arcana-79517837', 'arcana-79517834', 'arcana-79517816', 'arcana-79517813'],
  },
  {
    tier: 'A',
    subLabel: 'Tier 3',
    slugs: [
      'arcana-79517825',
      'arcana-79517822',
      'arcana-79517810',
      'arcana-79517807',
      'arcana-79517804',
      'arcana-79517801',
      'arcana-79517798',
    ],
  },
  {
    tier: 'B',
    subLabel: 'Tier 4',
    slugs: ['arcana-79517831', 'arcana-79517828', 'arcana-79517819'],
  },
];

/* ============================================================================
 * Complete Star Savior English Guide Articles Catalog (100% AppMedia Verified)
 * ============================================================================ */
export const STAR_SAVIOR_GUIDES: StarSaviorGuideArticle[] = [
  /* ----------------------------- RANKINGS ----------------------------- */
  {
    slug: 'pvp-tier-list',
    title: 'Gauntlet (PvP) Strongest Characters Tier List',
    category: 'Rankings',
    updatedAt: 'Nov 10, 2026',
    eyecatchSrc: '/banners/starsavior/eyecatch/rank_pvp.webp',
    lead: 'Complete Gauntlet (PvP) tier list for Star Savior based on turn-1 initiative, AoE burst pressure, Immortality survival, Evade / Revenge Attack triggers, and buff strip / Silence control.',
    specialKind: 'pvp-ranking',
    sections: [
      {
        id: 'pvp-sss-eval',
        heading: 'SSS Rank (Tier 0) Gauntlet Character Breakdown',
        paragraphs: [
          'In Gauntlet PvP, turn-1 speed cycling, team-wide Crit Damage mitigation, Immortality survival, and passive counter-pressure dictate match outcomes before Wave 1 ends.',
        ],
        bullets: [
          'Amora (Order / Assassin): High-frequency Special Skill cycling with Action Gauge self-advance, self-debuff cleanse, Hit Rate Down (-30%) disruption, and extra-turn burst.',
          'Luna: Summer Starlight (Sun / Defender): Grants 50% Crit Damage Resistance to all allies at battle start — neutralizing turn-1 crit cleave — while countering enemy crits with DEF Down + Taunt.',
          'Carnelia (Chaos / Caster): Survives lethal damage via Immortality until her next turn, resetting skill cooldowns and unleashing amplified Ultimate burst plus Unbuffable control.',
          'Fei (Moon / Assassin): Permanent +50% Evade stance that halves incoming hit damage, blocks crits and debuffs, and fires 0-CD Trigger counters.',
          'Rosaria (Chaos / Ranger): High-tempo AoE pressure, Judgment of the King extra Basic triggers, and Action Gauge manipulation.',
        ],
        featuredCharSlugs: ['amora', 'swimsuit-luna', 'carnelia', 'fei', 'rosalia'],
      },
      {
        id: 'pvp-criteria',
        heading: 'Gauntlet PvP Evaluation Criteria',
        paragraphs: [
          'Unlike PvE boss stages where sustained DPS dominates, Gauntlet evaluates Defenders and Supporters on equal footing with Attackers because surviving opening cleaves is mandatory.',
        ],
        bullets: [
          'Supporters & Defenders Rated Equally: Team-wide barriers, Crit Resistance, Defend Forward (Hilde / Nostalgia Strikes Back), and debuff cleansing decide mirror speed ties.',
          'AoE & Multi-Target Cleave Priority: Eliminating all four opposing Saviors rewards strong AoE multipliers alongside single-target execution.',
          'Silence, Buff Strip & Cleanse Value: Sealing enemy Ultimates with Silence, stripping Immortality/Barriers, or cleansing crowd control directly swings win rates.',
        ],
      },
    ],
  },
  {
    slug: 'sr-characters',
    title: 'Recommended SR Characters Tier List & Upgrade Priority',
    category: 'Rankings',
    updatedAt: 'Nov 10, 2026',
    eyecatchSrc: '/banners/starsavior/eyecatch/rank_sr_chars.webp',
    lead: 'Which SR Saviors should you build first in Star Savior? Full breakdown of pre-Awakening SR performance, featuring Besta, Naru, Clarissa, Claire, Annah, Scarlet, Marcille, and Vera.',
    specialKind: 'sr-char-ranking',
    sections: [
      {
        id: 'sr-top-picks',
        heading: 'Top Recommended SR Characters to Build First (Pre-Awakening)',
        paragraphs: [
          'This ranking evaluates SR Saviors at base SR rarity before Guardian Star Awakening. Fill missing Defender or Supporter slots in your SSR roster first.',
        ],
        bullets: [
          'Besta (Star / Defender — S Rank): Scales all skill damage off her Max HP while applying ATK Down to enemies and DEF Up to herself. Best frontline SR tank if you lack an SSR Defender.',
          'Naru (Star / Ranger — S Rank): Self-ATK buffing Ranger whose Special Skill deals bonus damage to debuffed enemies, while her Ultimate inflicts SPD Down and Effect Resistance Down via Nova Burst.',
          'Vera (Moon / Supporter — B Rank, Unique Role): Currently the only SR Supporter healer in the roster, providing single-target heal + 2-debuff cleanse on Special and party-wide healing on Ultimate.',
          'Clarissa, Claire & Annah (A Rank): Clarissa excels against Moon bosses (and jumps to SS after Guardian Star Awakening!), Claire ignores Defend Forward and penetrates DEF, and Annah tanks Sun stages reliably.',
        ],
        featuredCharSlugs: ['vesta', 'naru', 'clarissa', 'claire', 'anna', 'bella'],
      },
      {
        id: 'sr-investment-tips',
        heading: 'SR Character Investment & Limit Break Advice',
        paragraphs: [
          'Because free SSR attackers like Asherah and Trish are distributed early, prioritize SR Defenders (Besta, Annah) or SR Supporter (Vera) if your pulls lack frontline sustain. Once you collect Morning Star Awakening Stones from Flashpoint, Clarissa becomes your #1 Guardian Star Awakening priority.',
        ],
      },
    ],
  },
  {
    slug: 'sr-arcana',
    title: 'Recommended SR Arcana Tier List & Upgrade Priority',
    category: 'Rankings',
    updatedAt: 'Nov 10, 2026',
    eyecatchSrc: '/banners/starsavior/eyecatch/rank_sr_arcana.webp',
    lead: 'Best SR Arcana cards to level in Star Savior when filling missing SSR stat tags, maximizing Same-Character Bonuses, and stacking Vitality-restoring Journey Events.',
    specialKind: 'sr-arcana-ranking',
    sections: [
      {
        id: 'sr-arcana-highlights',
        heading: 'Best S-Rank SR Arcana Cards Explained',
        paragraphs: [
          'Because every Rescue Journey deck equips 5 Arcana cards across focused stat tags, high-limit-break SR Arcanas frequently outperform 0-dupe off-tag SSRs.',
        ],
        bullets: [
          'Choosing the Next Prey (Power Tag — S Rank): Grants two separate ATK-boosting Potentials via its Journey Events — rare even among SSR Arcanas.',
          'Butterfly of Phantasm (Health Tag — S Rank): Combines Max HP Potential scaling with Vitality recovery and Condition Up events, saving Rest turns for extra Training.',
          'Rabbit Town, A Satisfying Bloom & Foundation of Elegance (S Rank): Reliable training support bonuses and consistent positive Journey Event outcomes.',
        ],
        featuredArcanaSlugs: [
          'arcana-79517840',
          'arcana-79517837',
          'arcana-79517834',
          'arcana-79517816',
          'arcana-79517813',
        ],
      },
      {
        id: 'sr-arcana-priority',
        heading: 'How to Prioritize SR Arcana Upgrades',
        paragraphs: [
          '1. Level Limit-Broken SR Arcanas first for higher level caps and Support Bonus percentages. 2. Pair Same-Character Arcanas with the matching Savior during Rescue Journey to trigger the Same-Character Stat Bonus. 3. Cover stat tags (`Power`, `Health`, `Endurance`, `Focus`, `Protect`) missing from your SSR collection.',
        ],
      },
    ],
  },

  /* ----------------------------- TOOLS ----------------------------- */
  {
    slug: 'character-tier-maker',
    title: 'Star Savior Character Tier Maker Tool',
    category: 'Tools',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_011.webp',
    lead: 'Create and customize your own Star Savior Character Tier List across SSS to C ranks. Filter by class, load the AppMedia baseline preset, or reset to rank from scratch.',
    specialKind: 'char-tier-maker',
    sections: [
      {
        id: 'how-to-use-tier-maker',
        heading: 'How to Use the Character Tier Maker',
        paragraphs: [
          'Click any Savior portrait to select them, then click any Tier badge row (`SSS` through `C`) or the Unranked Pool header to move them. Use "Copy Tier Text" to share your rankings on Discord, X, or community forums.',
        ],
      },
    ],
  },
  {
    slug: 'arcana-tier-maker',
    title: 'Star Savior Arcana Tier Maker Tool',
    category: 'Tools',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_012.webp',
    lead: 'Build and share custom SSR & SR Arcana Tier Lists filtered by Rescue Journey tag (`Power`, `Health`, `Endurance`, `Focus`, `Protect`).',
    specialKind: 'arcana-tier-maker',
    sections: [
      {
        id: 'how-to-use-arcana-maker',
        heading: 'Customizing Your Arcana Deck Rankings',
        paragraphs: [
          'Filter by stat tag at the top to evaluate Power, Focus, Health, Endurance, or Protect cards side-by-side, or click any card and assign it to a new tier.',
        ],
      },
    ],
  },
  {
    slug: 'event-choice-checker',
    title: 'Rescue Journey Event Choice Checker Tool',
    category: 'Tools',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_013.webp',
    lead: 'Instant lookup tool for all Star Savior Rescue Journey dialogue choices — covering all 83 Arcana Events plus all 29 Shared Events across NOA, Aganon, Flora, and Kalide.',
    specialKind: 'event-checker',
    sections: [
      {
        id: 'checker-tips',
        heading: 'Maximizing Stellar Archive Ranks With Event Choices',
        paragraphs: [
          'Search by Arcana title, Savior name, Shared Event name (e.g., `Training Direction`, `Free Time`, `Beach Volleyball`, `Prototype Enhancer`), or reward (`Vitality`, `Power`, `Ancient Coins`, `Condition`) to preview exact outcomes before clicking.',
        ],
      },
    ],
  },

  /* ----------------------------- NEWS & GACHA ----------------------------- */
  {
    slug: 'livestream-summary',
    title: '1st Anniversary Official Livestream Recap & Upcoming Characters',
    category: 'Events',
    updatedAt: 'Nov 10, 2026',
    lead: 'Complete recap of the official Star Savior 1st Anniversary broadcast: Witch of Favoritism & free SSR Guile (Nov 12), December Dress Lacy & Dress Carnelia, 200+300 free pulls, and coupon codes.',
    sections: [
      {
        id: 'new-saviors',
        heading: '1st Anniversary & December New Year Playable Saviors',
        paragraphs: [
          'Main Story EP8 and the 1st Anniversary update launch on November 12, 2026 with a 3-week Pickup window, followed by December New Year variants:',
        ],
        bullets: [
          'Witch of Favoritism (Order / Striker — Nov 12, 3-Week Pickup): Cosmic Striker (non-limited; added to standard pool later) built for massive Break-state burst damage and standalone high DPS comparable to Amora.',
          'Guile (Chaos / Caster — Nov 12, FREE Character + FREE SSR Arcana!): Cosmic Caster (non-limited) specializing in rapid Toughness Break and ally buffs. Everyone receives 1 copy of Guile AND Guile\'s universal SSR Arcana for free!',
          'Dress Lacy (Sun / Assassin — December Week 1 Limited SSR): Team-wide buffer who stacks unique self-buffs for permanent scaling, combining traits of Bunnygirl Charlotte and Emilly.',
          'Dress Carnelia (Moon / Striker — December Week 3 Non-Limited SSR): Spends unique resources to rapid-fire skills continuously, similar to Smile: Sunshine Cat and Frey: Noble Princess.',
          'Break Armor Destruction Cutscenes: Confirmed for all 4 newly announced Saviors, including Limited characters. Note that Witch of Favoritism and Guile are the final units with 2D Ark Points, as future originals transition to 3D Extra Moments.',
        ],
      },
      {
        id: 'anniv-rewards-qol',
        heading: '200 + 300 Free Pulls, Coupon Codes & System Updates',
        paragraphs: [
          'Massive pull distributions and major quality-of-life upgrades were confirmed across November and December:',
        ],
        bullets: [
          'Massive Pull Giveaways: 200 pulls + Free Guile & Guile SSR Arcana during the 1st Anniversary (Nov 12), plus 300 pulls during the December New Year event!',
          'New Coupon Codes: Redeem ENDOFTHEJOURNEY (Starlight Gems ×2,000, until Dec 4) and TOGETHER1STANNIV (live Nov 12 – Dec 10: Singularity Degeneration Reactor ×3 to expand Star Link slots + Skill Reset Code ×1), alongside GIFTREADYANNIV1ST (10 Savior + 10 Arcana Focused Tickets, until Nov 27).',
          '1st Anniversary Events & QoL: Main Story EP8 (unconditionally readable in Database during campaign), Guile Side Story (Precision Set special gear), Fierce Battle Request (Destruction Set), Auto Journey (Deepening Mode), Event Story Recollection, Lobby & Arcana Preset expansions, and Shop Renewal.',
        ],
      },
    ],
  },
  {
    slug: 'promo-codes',
    title: 'Active Promo & Coupon Codes List and How to Redeem',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_060.webp',
    lead: 'All verified Star Savior coupon codes for free Starlight Gems, Focused Observation Tickets, Singularity Degeneration Reactors, and Skill Reset Codes.',
    sections: [
      {
        id: 'active-codes',
        heading: 'Currently Active & Anniversary Star Savior Coupon Codes',
        paragraphs: [
          'Copy and redeem each uppercase coupon code below within its exact JST validity window:',
        ],
        table: {
          headers: ['Coupon Code', 'Exact Rewards', 'Validity Period (JST)'],
          rows: [
            [
              'GIFTREADYANNIV1ST',
              'Focused Observation Ticket ×10 + Arcana Focused Observation Ticket ×10',
              'Until Nov 27, 2026 04:00',
            ],
            [
              'ENDOFTHEJOURNEY',
              'Starlight Gems ×2,000',
              'Until Dec 4, 2026 23:59',
            ],
            [
              'TOGETHER1STANNIV',
              'Singularity Degeneration Reactor ×3 (Star Link Slot Expansion) + Skill Reset Code ×1',
              'Nov 12, 2026 10:00 – Dec 10, 2026 04:00',
            ],
          ],
        },
      },
      {
        id: 'how-to-redeem',
        heading: 'How to Redeem Coupon Codes (Steam PC / Android / iOS)',
        paragraphs: [
          'On Android and Steam PC, open Menu (top-right) -> Settings -> Account -> Redeem Coupon Code. On iOS, copy your Member Number / UID from Settings -> Account and submit it with the coupon code on the official STUDIOBSIDE Star Savior Coupon Redemption page; rewards are delivered straight to your in-game Mailbox.',
        ],
      },
    ],
  },
  {
    slug: 'maid-ceres-gacha',
    title: 'Should You Pull on the Maid Ceres & Grueling Ordeal Pickup Gacha?',
    category: 'Gacha',
    updatedAt: 'Nov 10, 2026',
    lead: 'Detailed AppMedia pull evaluation for Sun Supporter Maid Ceres (SS Rank) and Health SSR Arcana "Grueling Ordeal" running until Nov 13, 04:00 JST.',
    sections: [
      {
        id: 'verdict',
        heading: 'Pull Verdict: Secure 1 Copy of Maid Ceres (0 Dupes Needed)',
        paragraphs: [
          'Maid Ceres (Sun / Supporter, Slash DMG) is a must-have 1-copy pickup: she is the first Supporter in Star Savior capable of granting a party-wide ATK Up buff on her Ultimate while providing two AoE heals, Regeneration (`Refreshing Mood`), and 1–2 debuff cleanses when her Special Skill (`Hospitality Cleaning`) extra-triggers at 5+ `Dust Capture` stacks.',
          'Limit Breaks only raise Max HP and AoE-hit Action Gauge gain without changing her core rotation, so stop at 1 copy and save remaining Starlight Gems for the Nov 12 1st Anniversary banners.',
        ],
        bullets: [
          'SSR Arcana "Grueling Ordeal" (Health Tag, Supporter-Only): Grants +4 SPD whenever the user casts a non-attack Special Skill (stacks up to 5x = +20 SPD). Great for Maid Ceres and Carmen: Eternal Promise in Operations and Interstellar Corridor, though note Asherah: Waltz of Starlight cannot trigger it because her Special is an attack.',
        ],
        featuredCharSlugs: ['maid-ceres', 'ceres', 'bride-carmen'],
        featuredArcanaSlugs: ['arcana-80521390'],
      },
    ],
  },
  {
    slug: 'frey-noble-princess-gacha',
    title: 'Should You Pull on the Frey: Noble Princess & The Indomitable Masterpiece Gacha?',
    category: 'Gacha',
    updatedAt: 'Nov 10, 2026',
    lead: 'Pull analysis for Frey: Noble Princess and the Tier-0 Power SSR Arcana "The Indomitable Masterpiece" running until Nov 19, 04:00 JST.',
    sections: [
      {
        id: 'verdict',
        heading: 'Pull Verdict: Must-Pull Tier-0 Power SSR Arcana',
        paragraphs: [
          'While Frey: Noble Princess is a strong S-Rank attacker, her featured Power SSR Arcana "The Indomitable Masterpiece" is a universal Tier-0 staple granting +12% Crit DMG and +4% Max HP as a Universal Special Potential across almost every DPS Rescue Journey deck.',
        ],
        featuredCharSlugs: ['bunny-frey', 'frey'],
        featuredArcanaSlugs: ['arcana-79766540'],
      },
    ],
  },
  {
    slug: 'which-gacha-to-pull',
    title: 'Which Gacha Banner Should You Pull Right Now? Priority Guide',
    category: 'Gacha',
    updatedAt: 'Nov 10, 2026',
    lead: 'Complete comparison of Maid Ceres Pickup, Frey: Noble Princess / The Indomitable Masterpiece Pickup, Cosmic Custom Observation, and upcoming Nov 12 1st Anniversary banners.',
    sections: [
      {
        id: 'banner-comparison',
        heading: 'Active Observation Banner Priority',
        paragraphs: [
          'Focused Observation Records (mileage) carry over across Pickup banners! Prioritize securing 1 copy of Maid Ceres and 1 copy of "The Indomitable Masterpiece" while banking Starlight Gems for Witch of Favoritism on November 12.',
        ],
        table: {
          headers: ['Banner Name', 'End Date (JST)', 'Featured Target', 'Recommendation'],
          rows: [
            ['Maid Ceres Pickup', 'Nov 13, 04:00', 'Maid Ceres (SS Sun Supporter)', 'Pull 1 copy (first ATK-buffing AoE Healer/Cleanser)'],
            ['The Indomitable Masterpiece PU', 'Nov 19, 04:00', 'The Indomitable Masterpiece (SSR Power)', 'Top Arcana priority (+12% Crit DMG / +4% HP Universal)'],
            ['1st Anniversary EP8 Pickup', 'Nov 12 – Dec 3', 'Witch of Favoritism (Order Striker)', 'Save Starlight Gems; Guile + Guile Arcana are free!'],
            ['Standard / Custom Observation', 'Permanent', 'Wishlist SSRs (Asherah: Waltz, etc.)', 'Spend Standard Tickets only — never spend Starlight Gems'],
          ],
        },
      },
    ],
  },
  {
    slug: 'gacha-rates',
    title: 'Gacha Rates, Pity Ceiling & Mileage Exchange Explained',
    category: 'Gacha',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_015.webp',
    lead: 'Exact AppMedia breakdown of Star Savior Observation costs (200 Starlight Gems), 4.0% SSR drop rates, Order/Chaos vs Sun/Star/Moon rates, and 200-pull carry-over mileage.',
    sections: [
      {
        id: 'rates-table',
        heading: 'Exact Observation Drop Rates & Costs',
        paragraphs: [
          'Each single Observation costs 200 Starlight Gems and a 10-pull costs 2,000 Starlight Gems (there is no rate penalty for single pulls). Savior and Arcana banners use separate pools:',
        ],
        table: {
          headers: ['Rarity', 'Total Rate', 'Pickup / Attribute Breakdown', 'Mileage / Pity Rule'],
          rows: [
            [
              'SSR',
              '4.0%',
              'Pickup Banner: Featured 2.0% (Cosmic PU 1.0%; off-banner Order/Chaos 0.1%, Sun/Star/Moon 0.08%) | Standard: Order/Chaos 0.1%, Sun/Star/Moon 0.2%',
              'Pickup: 200 Focused Observation Records = Direct Featured Exchange (Carries Over!)',
            ],
            [
              'SR',
              '43.0%',
              '1+ SR Guaranteed per 10-Pull',
              'Duplicates grant Remnant Cores / Observation Reports',
            ],
            [
              'R',
              '53.0%',
              'R Arcanas / Base Pool',
              'Converts to Observation Reports for Apocalypse Shop',
            ],
          ],
        },
      },
      {
        id: 'pity-carryover',
        heading: 'Focused vs Standard Observation Record Differences',
        paragraphs: [
          'Focused Observation Records (1 per Pickup pull) DO NOT expire when a banner ends — at 200 Records you can exchange directly for the active Featured SSR Savior or Featured SSR Arcana. By contrast, Standard Observation Records have NO 200-pull new-character pity; they only exchange in the Apocalypse Shop for Limit Break Bonds/Memories of already-owned units or random SSR Arcana boxes.',
        ],
      },
    ],
  },
  {
    slug: 'gacha-animations',
    title: 'Gacha Animations & Guaranteed SSR Pull Tells Summary',
    category: 'Gacha',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_016.webp',
    lead: 'Exact visual tells during Character Observation and Arcana Observation sequences that confirm one or more SSRs, plus purple fake-out upgrades.',
    sections: [
      {
        id: 'ssr-tells',
        heading: 'Character & Arcana Guaranteed SSR Visual Indicators',
        paragraphs: [
          'Character Observation and Arcana Observation use distinct summon animations:',
        ],
        bullets: [
          'Character Gacha — Gold Beam Fired = Guaranteed SSR: After sliding down, if a Gold beam fires, an SSR Savior is 100% guaranteed! Count the gold shooting stars in the sky afterward to see exactly how many SSRs landed in that 10-pull.',
          'Character Gacha — Purple Beam Fake-Out: A Purple beam means low SSR odds, but a rare fake-out upgrade into a gold shooting star can still occur during the sky sequence.',
          'Arcana Gacha — Gold Card Back = Guaranteed SSR: After tapping the screen, inspect the 10 card backs held by the character — every Gold card back guarantees an SSR Arcana!',
          'Arcana Gacha — Purple Card Back Fake-Out: Purple card backs indicate SR/R odds, though rare surprise SSR flips can still trigger when revealing individual cards.',
        ],
      },
    ],
  },
  {
    slug: 'friendship-gacha',
    title: 'Friendship Point Observation: 2% SSR Rate, Pool & Daily Cap',
    category: 'Gacha',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_017.webp',
    lead: 'Complete guide to v2.0 Friendship Point Observation: 5 points per pull, 20 points/day cap, 2.0% SSR drop rate, and why the Arcana banner is top priority.',
    sections: [
      {
        id: 'friendship-overview',
        heading: 'Friendship Gacha Rules & Best Banner Choice',
        paragraphs: [
          'Added in Update 2.0, Friendship Point Observation lets you pull either a Character banner or an Arcana banner at 5 Friendship Points per pull (collect up to 20 Friendship Points daily from friends = 4 free pulls/day).',
        ],
        bullets: [
          '2.0% SSR Drop Rate: Exceptionally generous for a free daily currency gacha! Pool includes launch permanent non-Cosmic Saviors (Asherah, Smile, Charlotte, Carmen, Frey, Trish, Haydee, Serpang, Dana, Muriel, Lugh, Epindel, Harley, Petra, Tanya, Lily, Kyra) and launch SSR Arcanas (post-launch & Cosmic units excluded).',
          'Pull the Arcana Banner First: Launch SSR Arcanas like "A Knight\'s Oath" (Stigma of Speed), "No Pain, No Gain", and "Divine Judgement" remain top-meta endgame cards and benefit immensely from Limit Break levels.',
        ],
        featuredArcanaSlugs: ['arcana-79517744', 'arcana-79517774', 'arcana-79517759'],
      },
    ],
  },
  {
    slug: 'custom-observation',
    title: 'Custom Observation Best Wishlist Characters & Arcanas',
    category: 'Gacha',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_018.webp',
    lead: 'Exact AppMedia wishlist tier list for Cosmic Custom Observation & Standard Custom Observation — who to lock in for Cross Attack, PvP, and Rescue Journey.',
    sections: [
      {
        id: 'wishlist-picks',
        heading: 'Best Wishlist Targets (Characters & SSR Arcanas)',
        paragraphs: [
          'Fill every wishlist slot before pulling Custom Observation, prioritizing Limit Break 1+ on Asherah: Waltz of Starlight and universal Tier-0 SSR Arcanas:',
        ],
        bullets: [
          'SSS (Tier 0) Character Pick: Asherah: Waltz of Starlight (Order Supporter — LB1 unlocks passive Cross Attack on ally Basic Skills; LB3 reaches 100% proc rate!).',
          'SS (Tier 1) Character Picks: Smile: Sunshine Cat, Epindel: Blessing in Bloom, Tyria, Fei, Rosaria, Bunnygirl Charlotte, Emilly (Moon Defender), and Haydee (Star Defender).',
          'S (Tier 2) Character Picks: Ceres, Carnelia, Frey: Noble Princess, Bunnygirl Claire, Lacy, Dana, Seira, and Luna.',
          'SS (Tier 0) SSR Arcana Picks: Death for the Flowers (Crit Rate +18%), Customized Training to Cover Weaknesses (Power / Tyria), A White Moon Shines With the Sun\'s Warmth (Stigma of Speed), and The Indomitable Masterpiece (+12% Crit DMG / +4% HP).',
        ],
        featuredCharSlugs: ['dress-asherah', 'swimsuit-smile', 'bride-epindel', 'fei', 'rosalia', 'bunny-charles', 'emily', 'ede'],
        featuredArcanaSlugs: ['arcana-80139832', 'arcana-80012824', 'arcana-79941760', 'arcana-79766540'],
      },
    ],
  },

  /* ----------------------------- EVENTS ----------------------------- */
  {
    slug: 'valentine-event',
    title: 'Valentine Revival ("Bittersweet! Golden Fantasia") Walkthrough & Shop Guide',
    category: 'Events',
    updatedAt: 'Nov 10, 2026',
    eyecatchSrc: '/banners/starsavior/eyecatch/valentine_event.webp',
    lead: 'Complete guide to the Revival Valentine Event "Bittersweet! Golden Fantasia" (~Nov 13, 04:00 JST): farming Deluxe Valentine Chocolates, 3 daily Event Raids, and shop buyout priority.',
    sections: [
      {
        id: 'event-farming',
        heading: 'Deluxe Valentine Chocolate Farming & Exchange Priority',
        paragraphs: [
          'Complete daily event missions and clear your 3 daily Event Raid entries (tickets cap at 3 held — never let them overflow!) to farm Deluxe Valentine Chocolates before November 13, 04:00 JST.',
        ],
        bullets: [
          'Tier 1 Must-Buy (150 Chocolates each): Focused Observation Ticket ×5, Savior Standard Observation Ticket ×5, and Arcana Standard Observation Ticket ×5.',
          'Tier 2 High Priority: Master Cube, Moonlight Water stamina items, and Polaris Support Boxes.',
          '5-Day Revival Login Bonus: Cafe Invitation Ticket ×10, Moonlight Water, Polaris Support Boxes, Standard Observation Ticket Envelopes, and Cosmic Cube.',
        ],
      },
    ],
  },
  {
    slug: 'cosmo-gate',
    title: 'Cosmo Gate Season P7 Boss Strategy (Belgras / Tyria / Carnelia)',
    category: 'Events',
    updatedAt: 'Nov 10, 2026',
    lead: 'High-score boss mechanics, Toughness Break burst windows, and top-scoring formations against Season P7 bosses Belgras, Tyria, and Carnelia (~Nov 12, 04:00 JST).',
    sections: [
      {
        id: 'cosmo-strategy',
        heading: 'Cosmo Gate P7 Boss Mechanics & High-Score Teams',
        paragraphs: [
          'Cosmo Gate P7 features rotating boss encounters against Belgras, Tyria, and Carnelia, scoring total damage dealt within strict turn limits with massive multipliers during Toughness Break.',
          'Pair Cross Attack units (Professor M and LB1+ Asherah: Waltz of Starlight) with top single-target carries (Amora, Smile: Sunshine Cat, Bunnygirl Charlotte) and Carmen: Eternal Promise (+ATK buff onto your highest-ATK carry) while timing Planetary Purification or Star Piercer Break Skills right as Toughness hits zero.',
        ],
        featuredCharSlugs: ['professor-m', 'amora', 'swimsuit-smile', 'bride-carmen', 'dress-asherah', 'bunny-charles'],
      },
    ],
  },

  /* ----------------------------- RESCUE JOURNEY ----------------------------- */
  {
    slug: 'rescue-journey-normal',
    title: 'Rescue Journey Normal Mode Walkthrough, Resonance Caps & Deck Ratios',
    category: 'Rescue Journey',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_028.webp',
    lead: 'Unlocked at Operation Sector 8-26: how to clear Rescue Journey Normal consistently, Resonance-by-Level caps, and recommended Arcana tag decks until Sector 18-36.',
    sections: [
      {
        id: 'normal-flow',
        heading: 'Normal Mode Progression & Resonance Level Caps',
        paragraphs: [
          'Rescue Journey Normal unlocks at Operation 8-26 and serves as your primary Stellar Archive farm until Rescue Journey Hard unlocks at Sector 18-36. Always raise Resonance Level as high as possible first to boost Turn-1 starting Journey stats (unlocked every 20 character levels: Lv.20 = Res 1, Lv.40 = Res 2, ..., Lv.100 = Res 5, ..., Lv.200 = Res 10; use Star Link to bypass dupe level caps!).',
        ],
        bullets: [
          'Attackers First (Striker / Ranger / Caster / Assassin): Run Power ×2 + Health ×1 + Endurance ×1 (or Power ×2 + Health ×2 + Focus ×1) plus a borrowed Lv.50 Friend SSR Arcana.',
          'Defenders & Supporters: Run Health ×2–3 + Endurance/Protect ×2 after you already own strong Attacker Stellar Archives to carry mid-run exams.',
          'End-of-Run Normal Exclusive: Completing Normal Mode Late February ("End of the Journey") awards +10 to a random stat plus the base [Starlight Trajectory] Potential.',
        ],
      },
    ],
  },
  {
    slug: 'rescue-journey-hard',
    title: 'Rescue Journey Hard Mode Walkthrough: Evidence Sets (AX–XX3) & Potentials',
    category: 'Rescue Journey',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_029.webp',
    lead: 'Unlocked at Operation Sector 18-36: complete guide to Early-March Training Direction choices, Mid-March Evidence sets (AX through XX3), and Subjugation Loot substat control.',
    sections: [
      {
        id: 'hard-evidence-table',
        heading: 'Early March "Training Direction" -> Mid March Evidence Set Table',
        paragraphs: [
          'In Hard Mode, your Early March choice determines which 3 Ancient Savior Relics appear in Mid March, unlocking a powerful Gold Set Potential in Late February ("Invitation of the Great Witch"):',
        ],
        table: {
          headers: ['Early March Choice', 'Mid March Relic', 'Gold Potential Effect'],
          rows: [
            ['1. Offense Support', 'Glove (AX) / Helm (EX) / Necklace (FX)', 'AX: +8% ATK per turn (max 5x, resets on Ult) | EX: 25% Ally Basic follow-up on Basic Crit (works while Broken!) | FX: +25% next-attack DMG after Crit'],
            ['2. Survival Support', 'Armor (BX) / Greaves (CX) / Boots (DX)', 'BX: 25% Max-HP self-heal when hit | CX: +10% DEF when hit (max 5x) | DX: 25% chance +10% AG after Basic (1/turn)'],
            ['3. Variable Control', 'Eyeguard (GX) / Cloak (HX) / Mask', 'GX: 50% 2T Bleed on Basic | HX: 50% Max-HP chain DMG vs ST hit if un-debuffed | Mask: Base Trajectory (Skip!)'],
            ['4. Tactical Operations', 'Gauntlet (XX1) / Totem (XX2) / Protector (XX3)', 'XX1: Revenge Attack (Counter) Rate +20% | XX2: Lifesteal +15% | XX3: Max Toughness +3'],
          ],
        },
      },
      {
        id: 'subjugation-loot-control',
        heading: 'How to Guarantee Your Exact Sub-Effect (Slime / Apocalypse / Doll Loot)',
        paragraphs: [
          'Subjugation victories in Late April (Slime), Late June (Apocalypse), and Late October (Doll) offer 3 of 8 numbered Evidence parts (#1 Glove = ATK, #2 Armor = HP, #3 Greaves, #4 Boots, #5 Helm = Crit Rate, etc.). Discard any unwanted numbered Evidence from your bag (or skip picking when undesired) so ONLY your target number remains — guaranteeing 100% that exact sub-effect in Late February!',
        ],
      },
    ],
  },
  {
    slug: 'blessing-farming',
    title: 'Blessing Farming Guide: SG Rank (9,000+ Score) & Blessing Rerolls',
    category: 'Rescue Journey',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_030.webp',
    lead: 'Exact AppMedia Blessing (Inheritance) farming guide: hitting SG Rank (9,000+ pts) in Hard Mode, using the 5x Blessing Reroll feature, and picking innate Skill-potential Saviors.',
    sections: [
      {
        id: 'blessing-mechanics',
        heading: 'Optimal Blessing Farming Rules & Best Innate Saviors',
        paragraphs: [
          'Stat Blessings inherit guaranteed flat stats at Encounter checkpoints, whereas Special Potentials NEVER convert into Blessings! Follow these AppMedia rules when farming parent Archives:',
        ],
        bullets: [
          'Aim for Rank SG (9,000+ Evaluation) in Hard Mode: Higher evaluation and capped target stats significantly boost high-tier Blessing odds.',
          'Skip Special Potentials on Parent Runs: Because Special Potentials cannot become Blessings, spend all Potential Points on inheritable General Potentials (like [Skill of Speed], [Skill of Insight], [Skill of Destruction]).',
          'Use Blessing Reroll (Up to 5x per Run): Spend a Faded Invitation or 60 Willpower at the end of a run to reroll Blessing results up to 5 times!',
          'Best Farming Saviors: Amora (easy solo crit/sustain + innate [Skill of Insight] +3% Crit Rate), Rosaria (+50% Ult Crit charm), Fei (70% Evade), Asherah: Waltz of Starlight (innate [Skill of Speed] +2 SPD), and Emilly (innate [Skill of Destruction] +4% Crit DMG).',
        ],
        featuredCharSlugs: ['amora', 'rosalia', 'fei', 'dress-asherah', 'emily'],
      },
    ],
  },
  {
    slug: 'shared-events',
    title: 'Rescue Journey Shared Events Complete Choice & Reward List',
    category: 'Rescue Journey',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_031.webp',
    lead: 'Verified AppMedia reference chart for Shared Rescue Journey Events across NOA, Aganon, Flora Beach Camp, and Kalide Hot Springs.',
    sections: [
      {
        id: 'shared-table',
        heading: 'High-Impact Shared Event Choices by Month & Region',
        paragraphs: [
          'Shared events occur regardless of equipped Arcanas. Use our interactive Event Choice Checker for all 29 Shared Events, and memorize these run-defining picks:',
        ],
        table: {
          headers: ['Timing & Region', 'Shared Event', 'Recommended Choice & Exact Reward'],
          rows: [
            ['Early Mar (NOA · Hard)', 'Training Direction', 'Offense (AX/EX/FX), Survival (BX/CX/DX), Variable (GX/HX), or Tactical (XX1 +20% Counter / XX2 +15% Lifesteal / XX3 +3 Toughness)'],
            ['Mid Mar (NOA)', 'Free Time', '[50 Coins] Sweets -> Condition +1~2 & Potential +10 | [30 Coins] Movie -> Potential +15~30 & Bonus Poster'],
            ['Mid Mar -> Late Jan', 'Mysterious Stone Statue', 'Sword (+20 Power / -20 Health) or Flower (+20 Health / -20 Power) -> Unlocks +20 Power & +20 Health in Late Jan!'],
            ['Mid May (NOA · Hard)', 'Unidentified Merchant', '[50 Coins] Universal Manual -> [Skill of Speed] 10–20% Discount | [30 Coins] Attack / Life Manual'],
            ['Early Jul (Aganon)', 'Labyrinth Exploration', '[50 Coins] Vitality +15~20 + Mysterious Relic (Sells for +80 Coins in Sep or +20/+20 Stats in Jan) | Crane -> Endurance +15~20 & Potential +15'],
            ['Mid Nov (Flora / Kalide)', 'Tropical Night / Heavy Snow', 'Carry Handy Fan (Flora) or Hand Warmer (Kalide) -> +20/+20 Stats, Condition +1 & Vitality +10 (Enduring strips positive states!)'],
            ['Early Dec (Flora / Kalide)', 'Semifinals / Uninvited Guest', '[80 Coins] Vitality +30~40 & Potential +10 | [Endurance Check] +30 Power (Flora) or +30 Health (Kalide) & Condition +1'],
          ],
        },
      },
    ],
  },
  {
    slug: 'rescue-journey-guide',
    title: 'How to Play Rescue Journey: Training, Condition & Schedule Guide',
    category: 'Rescue Journey',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_032.webp',
    lead: 'Beginner-to-expert explanation of Rescue Journey mechanics: the 5 Journey Stats (`Power`, `Health`, `Endurance`, `Focus`, `Protect`), Condition stages, Ancient Coins, and Summer/Winter Camps.',
    sections: [
      {
        id: 'five-stats',
        heading: 'Understanding the 5 Rescue Journey Stats',
        paragraphs: [
          'Stats trained inside Rescue Journey convert into permanent Stellar Archive combat bonuses equipped across Operations, Gauntlet, Flashpoint, and Cosmo Gate:',
        ],
        bullets: [
          'Power: Raises ATK scaling for Strikers, Assassins, Rangers, and Casters.',
          'Health: Raises Max HP pool — essential for all classes and primary scaling for Defenders and HP Healers.',
          'Endurance: Raises DEF mitigation against boss burst.',
          'Focus: Raises Effect Hit and unlocks offensive/accuracy checks.',
          'Protect: Raises Effect Resistance and defensive check thresholds.',
        ],
      },
    ],
  },
  {
    slug: 'rescue-journey-tips',
    title: 'What to Do When You Cannot Clear Rescue Journey / High-Rank Archive Tips',
    category: 'Rescue Journey',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_033.webp',
    lead: 'Failing mid-run exams or stuck below SG Rank? Follow these 4 verified AppMedia steps to stabilize clears and push high-score Stellar Archives.',
    sections: [
      {
        id: 'four-fixes',
        heading: '4 Immediate Fixes When Failing Rescue Journey',
        paragraphs: [
          'Clearing Rescue Journey reliably depends on pre-run Resonance stats and focused 2-tag Arcana decks:',
        ],
        bullets: [
          '1. Raise Character Level & Resonance Stage First: Resonance (up to Lv.10 at Character Lv.200 via Star Link) adds massive flat starting stats on Turn 1.',
          '2. Clear With Attackers First: Attackers solo early exams effortlessly; build Defender/Supporter Archives afterward using those high-stat Attacker Archives as Blessing parents.',
          '3. Stack Focused Stat Tags + Borrow a Lv.50 Friend SSR: Run Power ×2 + Health ×2 + Focus/Endurance ×1 for DPS rather than 5 scattered tags.',
          '4. Keep Handy Fan / Hand Warmer & Vitality Potions Ready: Buying weather/recovery items with Ancient Coins prevents Mid-November Condition crashes and Training Failures.',
        ],
      },
    ],
  },

  /* ----------------------------- OPERATIONS ----------------------------- */
  {
    slug: 'operation-1-5',
    title: 'Operation Sector 1-5 (NOA Commercial District) Boss Walkthrough',
    category: 'Operations',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_035.webp',
    lead: 'Sector 1-5 boss Void Harvester (Sun Striker, CP 1,850) walkthrough, enemy skills, recommended beginner team, and facilities unlocked upon clear.',
    sections: [
      {
        id: 'op-1-5-tips',
        heading: 'Void Harvester (1-5) Mechanics & Unlocked Features',
        paragraphs: [
          'Sector 1 (Stages 1-1 to 1-5, Recommended CP 1,250–1,850) pits you against Sun-attribute enemies led by Void Harvester (HP 2,800, Sun Striker, Toughness 6) and Overseer (HP 810, Sun Ranger, Toughness 3). Void Harvester stacks +3% SPD per turn and reduces its AoE Ultimate cooldown when hitting debuffed allies, while Moon Saviors enjoy elemental advantage (`Moon -> Sun`).',
          'Initial free SSR Asherah paired with Besta (SR Defender), Vera (SR Supporter), and Trish clears 1-5 smoothly even on Auto. Clearing Sector 1-5 unlocks Candle Square, Events, Apocalypse Shop, Area Dispatch, and the Database!',
        ],
        featuredCharSlugs: ['asherah', 'trish', 'vesta', 'bella'],
      },
    ],
  },
  {
    slug: 'operation-2-12',
    title: 'Operation Sector 2-12 (Fjord Lake) Boss Walkthrough',
    category: 'Operations',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_036.webp',
    lead: 'Sector 2-12 boss Void Raider (Sun Assassin, CP 3,950) walkthrough: Stealth + guaranteed Crit AoE Silence counterplay and Guild / Gauntlet unlocks.',
    sections: [
      {
        id: 'op-2-12-tips',
        heading: 'Void Raider (2-12) Stealth & Silence Counterplay',
        paragraphs: [
          'Sector 2 (Stages 2-1 to 2-12, Recommended CP 2,150–3,950) consists entirely of Sun enemies, culminating in Void Raider (HP 5,014, Sun Assassin, Toughness 7) alongside Watcher adds (HP 825, Sun Striker, Toughness 3). Void Raider enters Stealth on Basic/Special, grants 1x Skill Damage Nullify to its allies, and unleashes "Invisible Hunter" (AoE 75% 1-turn Silence + guaranteed Crit from Stealth).',
          'Use AoE attacks or fast Moon/SSR attackers at Lv.10+ to strip Skill Damage Nullify and Break Void Raider\'s 7 Toughness before its Stealth Ultimate fires. Clearing Sector 2-12 unlocks Guilds, Gauntlet (PvP), Rankings, and Chat!',
        ],
        featuredCharSlugs: ['asherah', 'emily', 'fei', 'vesta', 'bella'],
      },
    ],
  },
  {
    slug: 'operation-3-15',
    title: 'Operation Sector 3-15 (Underground Waterway) Boss Walkthrough',
    category: 'Operations',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_037.webp',
    lead: 'Sector 3-15 boss Void Fallen (Moon Striker, CP 5,288) walkthrough: breaking Void Shield, Star-attribute advantage (`Star -> Moon`), and unlocking Star Link & Flashpoint.',
    sections: [
      {
        id: 'op-3-15-tips',
        heading: 'Void Fallen (3-15) Void Shield Mechanics & Recommended Party',
        paragraphs: [
          'Sector 3 (Stages 3-1 to 3-15, Recommended CP 3,954–5,288) shifts all enemies to Moon attribute, led by Void Fallen (HP 8,424, Moon Striker, Toughness 7) and Worshipper adds (HP 1,716, Moon Caster, Toughness 3). Void Fallen begins battle with its AoE Ultimate ("Void Indwelling") ready, granting itself an unremovable Max-HP-scaling Void Shield that stacks +6% ATK per turn (up to 5x) and +30% Basic DMG while active.',
          'Because Star beats Moon (`Star -> Moon`), Star Defenders and Attackers like Haydee, Besta, Asherah, Clarissa, and Naru at Lv.20+ shred Void Shield quickly and absorb Bleed slashes cleanly. Clearing Sector 3-15 unlocks Star Link (level synchro!), Flashpoint, and Exploration Request Stage 2!',
        ],
        featuredCharSlugs: ['ede', 'vesta', 'asherah', 'clarissa', 'naru', 'frey'],
      },
    ],
  },
  {
    slug: 'operations-summary',
    title: 'Operations Walkthrough Summary, Re-Ignition Buff & Unlocked Features',
    category: 'Operations',
    updatedAt: 'Nov 10, 2026',
    lead: 'Complete AppMedia Sector unlock chart from Sector 1-5 through Sector 18-36 (Rescue Journey Hard), plus Re-Ignition Buff scaling (+3% to +25%) and NOA Support Funds.',
    sections: [
      {
        id: 'unlock-table',
        heading: 'Exact Facility & Mode Unlocks by Operation Sector',
        paragraphs: [
          'Every 5 Operation stages cleared raises your NOA Support Funds idle level. If stuck on a boss, wait for the multi-day Re-Ignition Buff (starts at +3% DMG dealt / -3% DMG taken on Day 1 and scales up to +25% DMG dealt / -25% DMG taken by Day 14!):',
        ],
        table: {
          headers: ['Operation Milestone', 'Exact Unlocked Facilities & Modes'],
          rows: [
            ['Sector 1-5 Clear', 'Candle Square, Events, Apocalypse Shop, Area Dispatch, Database'],
            ['Sector 2-12 Clear', 'Guild, Gauntlet (PvP), Rankings, Chat'],
            ['Sector 3-15 Clear', 'Star Link (Level Synchro), Flashpoint, Exploration Request Stage 2'],
            ['Sector 4-18 Clear', 'Crafting Workshop, Subjugation Request (Equipment Farming), Main Story EP2'],
            ['Sector 5-20 Clear', 'Tactical Analysis (Commander Break Skills & Stat Nodes)'],
            ['Sector 6-20 Clear', 'Interstellar Corridor & Battle Skip (Covers Sectors 6–18)'],
            ['Sector 8-26 Clear', 'Rescue Journey Normal Mode & Main Story EP3'],
            ['Sector 10-28 Clear', 'Cosmo Gate Seasonal Boss Mode'],
            ['Sector 14-36 Clear', 'Subjugation Request Stage 7 & Crafting Workshop Lv.4 (Tier 2 Equipment Unlock!)'],
            ['Sector 16 Clear', 'Operations Hard Mode Unlocks'],
            ['Sector 18-36 Clear', 'Rescue Journey Hard Mode Unlocks!'],
          ],
        },
      },
    ],
  },

  /* ----------------------------- CUBE PALACE ----------------------------- */
  {
    slug: 'cube-palace',
    title: 'Cube Palace Complete Walkthrough Summary & All 25 Cheat Codes',
    category: 'Cube Palace',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_054.webp',
    lead: 'Complete guide to daily Cube Palace survival waves (5 sections × 15-turn limit, no HP carry-over healing), Auto Protocol, Cosmic Cube Shards, and the 5-Stage Cheat Code point-buy system.',
    sections: [
      {
        id: 'cube-rules',
        heading: 'Cube Palace Rules & Cheat Code Point-Buy Loadout System',
        paragraphs: [
          'Cube Palace consumes 1 Palace Access Card per daily reward claim (unlimited free retries if you fail or reset!). Each STEP/EXTRA stage consists of 5 consecutive survival waves (Sections 1–5, 15-turn limit per wave, HP is NOT restored between waves). Clearing a stage unlocks Auto Protocol sweep, and STEP 5+ drops Cosmic Cube Shards!',
          'Raise your Calculation Rank (up to Lv.20) to earn Cheat Code points and freely customize your 5-Stage Cheat Code loadout (resettable anytime with Gold):',
        ],
        table: {
          headers: ['Cheat Stage', 'Representative Cheat Codes & Point Costs', 'Key Combat Effects'],
          rows: [
            ['Stage 1', 'Retro 100t Hammer [10pt] / Rubber Duck Tube [20pt] / Big Giant Drill [30pt]', 'Base ATK/HP boosts, Barrier shred, and opening survivability'],
            ['Stage 2', 'Flame Gauntlet [10pt] / Ultra Roller Skates [20pt] / Ice Shield [30pt]', 'Offensive damage amplification, SPD/Action Gauge tempo, and defensive mitigation'],
            ['Stage 3', 'Rocket Skateboard [10pt] / Legend Armor [10pt]', 'Mid-wave turn cycling and frontline sustain across 5 consecutive waves'],
            ['Stage 4', 'Spinning Ultra Spinner [10pt] & Cleanse / Heal Codes', 'Crucial debuff cleanse (on Ultimate / non-attack skill) & wave HP recovery'],
            ['Stage 5', 'Quick Eraser [50pt] / Pew-Pew Ray Gun [70pt]', 'High-cost enemy Buff Strip (dispels Omega Guard & Barriers!) and execute burst'],
          ],
        },
      },
    ],
  },
  {
    slug: 'cube-step-1',
    title: 'Cube Palace STEP 1: Interface (Carmen & Charlotte) Walkthrough',
    category: 'Cube Palace',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_039.webp',
    lead: 'STEP 1 Interface boss guide: breaking Carmen & Charlotte\'s frequent Barriers within 15 turns using 1 Defender + 3 single-target Barrier-breaker Attackers.',
    sections: [
      {
        id: 'sector-guide',
        heading: 'STEP 1 Interface (Carmen & Charlotte) Clear Strategy',
        paragraphs: [
          'Both Wave 3 Carmen and Wave 5 Charlotte deploy standard dispellable Barriers that grant bonus ATK / Basic DMG (Carmen) or +10% Action Gauge per skill (Charlotte) while active. Neither boss possesses an AoE skill!',
          'Place 1 sturdy Defender (Haydee, who absorbs 80% of single-target aggro including Carmen\'s Taunt) in front and run 3 high-DPS Attackers — especially Epindel: Blessing in Bloom (bonus DMG vs Barriers), Tyria (bonus DMG vs Defenders like Carmen), Amora, Dana, or Lacy — with offensive Cheat Codes to shatter Barriers immediately.',
        ],
        featuredCharSlugs: ['bride-epindel', 'amora', 'tilia', 'ede', 'dana', 'lacy'],
      },
    ],
  },
  {
    slug: 'cube-step-2',
    title: 'Cube Palace STEP 2: Kernel (Naru & Lugh) Walkthrough',
    category: 'Cube Palace',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_040.webp',
    lead: 'STEP 2 Kernel boss guide: cleansing Naru & Lugh\'s Freeze/SPD-Down debuffs and playing around Naru\'s Enhanced Counter stance.',
    sections: [
      {
        id: 'sector-guide',
        heading: 'STEP 2 Kernel (Naru & Lugh) Clear Strategy',
        paragraphs: [
          'STEP 2 bosses Naru and Lugh have only single-target attacks, but every hit inflicts Freeze or SPD Down. If Lugh attacks a debuffed target, he fires a follow-up Basic Skill (with 2-turn Freeze!), and hitting Lugh while debuffed boosts his Action Gauge. Meanwhile, Naru gains DMG Up / DMG Reduction per debuff on your team and activates Enhanced Counter on her Special Skill.',
          'Bring 1 Defender (Haydee) to funnel single-target debuffs, pair her with debuff-cleansing Supporters (Asherah: Waltz of Starlight or Frey) plus Cleanse Cheat Codes, and hit side adds or cast non-attack skills while Naru\'s Enhanced Counter buff is up.',
        ],
        featuredCharSlugs: ['dress-asherah', 'frey', 'ede', 'amora', 'bunny-charles', 'trish'],
      },
    ],
  },
  {
    slug: 'cube-step-3',
    title: 'Cube Palace STEP 3: Assembler (Marcille & Tanya) Walkthrough',
    category: 'Cube Palace',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_041.webp',
    lead: 'STEP 3 Assembler boss guide: breaking Marcille & Tanya\'s counter-Barriers cleanly and avoiding Toughness Break stun traps.',
    sections: [
      {
        id: 'sector-guide',
        heading: 'STEP 3 Assembler (Marcille & Tanya) Clear Strategy',
        paragraphs: [
          'Clone bosses Marcille and Tanya deploy Barriers and counterattack with Basic Skills whenever hit while their Barrier survives — however, if your attack completely breaks the Barrier, NO counterattack fires! Tanya also stacks up to +60% Crit Rate, and both bosses deal heavy Toughness damage that can Break your units (disabling Trigger skills and Cross Attack while Broken).',
          'Focus-fire Marcille and Tanya directly with Barrier-shredder Epindel: Blessing in Bloom + Bunnygirl Charlotte + Haydee + Asherah: Waltz of Starlight before their Crit stacks ramp up.',
        ],
        featuredCharSlugs: ['bride-epindel', 'bunny-charles', 'ede', 'dress-asherah'],
      },
    ],
  },
  {
    slug: 'cube-step-4',
    title: 'Cube Palace STEP 4: Firmware (Lydia & Ceres) Walkthrough',
    category: 'Cube Palace',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_042.webp',
    lead: 'STEP 4 Firmware boss guide: surviving Lydia\'s rapid-cooldown AoEs and cleansing Ceres\'s stacking Bleeds + Unhealable debuffs.',
    sections: [
      {
        id: 'sector-guide',
        heading: 'STEP 4 Firmware (Lydia & Ceres) Clear Strategy',
        paragraphs: [
          'Unlike Steps 1–3, both Lydia and Ceres spam AoE attacks and heavy debuffs! Ceres stacks multiple Bleeds plus Unhealable and Stun while scaling single-target damage per debuff on your squad; Lydia reduces her 3-turn AoE Special cooldown (-15% Max HP & SPD Down) whenever hitting a debuffed target.',
          'Character cleanses alone are not enough — equip Debuff Cleanse / Immunity + HP Recovery Cheat Codes, and bring Asherah: Waltz of Starlight (AoE cleanse/heal), Roberta (self-cleanse counter), Hilde (Immunity) or Emilly, and Bunnygirl Charlotte to rush down Ceres before Unhealable snowballs.',
        ],
        featuredCharSlugs: ['dress-asherah', 'roberta', 'bunny-charles', 'emily', 'hilde'],
      },
    ],
  },
  {
    slug: 'cube-step-5',
    title: 'Cube Palace STEP 5: Mechanics (Asherah & Luna) Walkthrough',
    category: 'Cube Palace',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_043.webp',
    lead: 'STEP 5 Mechanics boss guide: stripping Asherah & Luna\'s Crit buffs and dispellable Omega Guard while punishing AoE spam with Roberta.',
    sections: [
      {
        id: 'sector-guide',
        heading: 'STEP 5 Mechanics (Asherah & Luna) Clear Strategy',
        paragraphs: [
          'Wave 3 Asherah and Wave 5 Luna stack SPD Up, Crit Rate Up, Immunity/Barriers, and Omega Guard / Super Omega Guard while scaling damage per active buff. Crucially, Omega Guard IS dispellable — equip Buff Strip Cheat Codes (such as Quick Eraser) plus Cleanse Cheat Codes for Asherah\'s Bleed and Luna\'s Bind / AoE Vulnerability.',
          'Because Luna\'s entire kit is AoE, Roberta counters every single turn for massive damage alongside Bunnygirl Charlotte, Asherah: Waltz of Starlight, and Carmen: Eternal Promise! Clearing STEP 5 unlocks daily Cosmic Cube Shard drops.',
        ],
        featuredCharSlugs: ['roberta', 'bunny-charles', 'dress-asherah', 'bride-carmen'],
      },
    ],
  },
  {
    slug: 'cube-extra-6',
    title: 'Cube Palace EXTRA 6: Linker (Bell Rhys & Emilly) Walkthrough',
    category: 'Cube Palace',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_044.webp',
    lead: 'EXTRA 6 Linker high-difficulty guide: countering Bell Rhys & Emilly\'s mass Bleed stacks and reactive Barrier generation.',
    sections: [
      {
        id: 'sector-guide',
        heading: 'EXTRA 6 Linker (Bell Rhys & Emilly) Clear Strategy',
        paragraphs: [
          'EXTRA 6 combines heavy Bleed DoTs with constant Barriers: Emilly even deploys a fresh Barrier after being hit if the attacker carries any debuff! Bring Immunity/Cleanse (Hilde + Asherah: Waltz of Starlight + Cleanse Cheat Codes) so your attackers strike debuff-free, and shred Barriers with Epindel: Blessing in Bloom + Bunnygirl Charlotte.',
        ],
        featuredCharSlugs: ['bride-epindel', 'hilde', 'dress-asherah', 'bunny-charles'],
      },
    ],
  },
  {
    slug: 'cube-extra-7',
    title: 'Cube Palace EXTRA 7: Bootloader (Clarissa & Dana) Walkthrough',
    category: 'Cube Palace',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_045.webp',
    lead: 'EXTRA 7 Bootloader high-difficulty guide: surviving Clarissa\'s highest-ATK Target lock and baiting Dana\'s 0-ATK Incapacitation debuff.',
    sections: [
      {
        id: 'sector-guide',
        heading: 'EXTRA 7 Bootloader (Clarissa & Dana) Clear Strategy',
        paragraphs: [
          'Wave 3 Clarissa inflicts [Target] onto your highest-ATK Savior and focuses brutal single-target burst into them (countered by Defend Forward or Carmen: Eternal Promise). Wave 5 Dana unleashes heavy AoEs and inflicts 2-turn [Incapacitation] (fixes ATK to 0!) onto the FIRST character who attacks her — always poke Dana first with your Defender or Supporter (or have your DPS hit an add first if they move earlier) whenever Incapacitation cycles!',
        ],
        featuredCharSlugs: ['bunny-claire', 'bunny-charles', 'ede', 'dress-asherah', 'bride-carmen'],
      },
    ],
  },
  {
    slug: 'cube-extra-8',
    title: 'Cube Palace EXTRA 8: Register (Rin & Fei) Stance-Switch Guide',
    category: 'Cube Palace',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_046.webp',
    lead: 'EXTRA 8 Register apex guide: alternating Single-Target and AoE skills against Rin & Fei\'s Wind Tiger / Cloud Dragon stances.',
    sections: [
      {
        id: 'sector-guide',
        heading: 'EXTRA 8 Register (Rin & Fei) Alternating Stance Strategy',
        paragraphs: [
          'Wave 3 Rin switches between Single-Target Resistance and AoE Resistance whenever hit (hitting into her active resistance slashes damage and reduces her Special/Ult cooldowns!). Wave 5 Fei switches between Wind Tiger (ST Resistance + Counter) and Cloud Dragon (AoE Resistance + AG Up) whenever Fei uses a skill — note that Fei\'s counter is a Trigger skill and is completely disabled during Toughness Break!',
          'Run low-cooldown Saviors possessing both ST and AoE skills: Epindel: Blessing in Bloom + Ceres + Emilly (frequent AoE Defender) + Carmen: Eternal Promise.',
        ],
        featuredCharSlugs: ['bride-epindel', 'ceres', 'emily', 'bride-carmen'],
      },
    ],
  },

  /* ----------------------------- STRATEGY GUIDES ----------------------------- */
  {
    slug: 'party-formations',
    title: 'Best Party Formations & Team Building Guide (PvE / Boss / Evade)',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_048.webp',
    lead: 'Exact AppMedia strongest 4-unit formations: Amora + Professor M Cross Attack team, Single-Target Boss nuke team, and 80%-Dodge Fei + Gwen Evade-Counter team.',
    sections: [
      {
        id: 'core-formula',
        heading: '3 Top-Meta AppMedia PvE & Boss Party Formations',
        paragraphs: [
          'Place Defenders or Evade tanks in the Front row to absorb enemy targeting while keeping fragile Rangers/Supporters in the Back row:',
        ],
        bullets: [
          '1. Amora + Professor M Cross-Trigger Team: Professor M (Back) + Amora (Front) + Maid Ceres (Front) + Carmen: Eternal Promise (Back). Combines Cross Attack follow-ups, dual AoE heals + ATK buffs from Maid Ceres, and Carmen\'s single-target carry amplification.',
          '2. Single-Target Boss Burst Team: Smile: Sunshine Cat (Back) + Amora (Front) + Haydee (Front, Star Defender) + Carmen: Eternal Promise (Back). Built for maximum single-target boss Toughness shred and sustained barrier tanking.',
          '3. Additive 80% Evade-Counter Team: Amora (Back, -30% Hit Rate debuff) + Fei (Front, +50% innate Evade = 80% effective dodge!) + Gwen (Front, Stealth funnels all single-target aggro onto Fei!) + Carmen: Eternal Promise (Back).',
          '4. F2P Starter Team: Besta (Front, SR Defender) + Asherah (Free SSR) + Trish (Free SSR) + Vera (Back, SR Supporter).',
        ],
        featuredCharSlugs: ['amora', 'professor-m', 'maid-ceres', 'bride-carmen', 'swimsuit-smile', 'ede', 'fei', 'gwen'],
      },
    ],
  },
  {
    slug: 'arcana-deck-guide',
    title: 'Best Arcana Deck Building & Stat Tag Ratios by Class',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_049.webp',
    lead: 'How to assemble the optimal 5-card + 1-Friend Rescue Journey Arcana deck for Attackers, Defenders, and Supporters.',
    sections: [
      {
        id: 'deck-templates',
        heading: 'Recommended 5+1 Tag Ratios by Role',
        paragraphs: [
          'Concentrate your 5+1 Arcana slots into 2–3 core stat tags while securing universal Crit Rate (+18% Death for the Flowers), Crit DMG (+12% The Indomitable Masterpiece), and Stigma of Speed (+8% SPD):',
        ],
        bullets: [
          'Attackers (Striker / Assassin / Caster / Ranger): Power ×2 + Health ×2 + Focus (or Endurance) ×1 — anchor with Death for the Flowers, The Indomitable Masterpiece, and Customized Training to Cover Weaknesses.',
          'Defenders & HP Healers: Health ×2–3 + Endurance/Protect ×2 — anchor with A Knight\'s Oath (Stigma of Speed), Young Lady of Stranis, and Grueling Ordeal (+20 SPD on non-attack Specials).',
        ],
        featuredArcanaSlugs: ['arcana-80139832', 'arcana-79766540', 'arcana-80012824', 'arcana-79941760', 'arcana-79517744', 'arcana-80521390'],
      },
    ],
  },
  {
    slug: 'quasar-cores',
    title: 'Quasar Core Priority Guide: Best Characters for Universal Limit Breaks',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_050.webp',
    lead: 'Quasar Cores are ultra-rare universal SSR Character Limit Break (dupe) materials usable even on Cosmic & Limited Saviors! See the exact #1 LB1/LB3 priorities.',
    sections: [
      {
        id: 'quasar-priority',
        heading: 'Top Quasar Core Character Limit Break Priorities',
        paragraphs: [
          'A Quasar Core substitutes for any SSR Savior duplicate (obtained via v2.0 Commemorative Missions & special packs). NEVER spend Quasar Cores past Limit Break 3 (4+ dupes only grant minor Guardian Star Engraving stats, whereas LB1–LB3 unlock kit passives and Star Link level caps):',
        ],
        bullets: [
          '#1 Priority — Asherah: Waltz of Starlight (Cosmic Order Supporter): Mandatory LB1 unlocks her passive Cross Attack on ally Basic Skills, and LB3 boosts Cross Attack trigger rate to 100%!',
          '#2 Priority — Amora (Cosmic Order Assassin): LB3 grants a massive +20% Damage Dealt multiplier across PvE and PvP.',
          'High Priority Follow-Ups: Professor M, Cristelle, Carmen: Eternal Promise, Hilde, Frey: Noble Princess, Emilly, Bunnygirl Charlotte, and Haydee (avoid spending on launch permanent units whose Bonds can be bought with Standard Observation Records).',
        ],
        featuredCharSlugs: ['dress-asherah', 'amora', 'professor-m', 'christel', 'bride-carmen', 'hilde', 'bunny-charles', 'emily'],
      },
    ],
  },
  {
    slug: 'pulsar-cores',
    title: 'Pulsar Core Priority Guide: Best SSR Arcanas for Universal Uncaps',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_051.webp',
    lead: 'Pulsar Cores are ultra-rare universal SSR Arcana Limit Break (dupe) materials! Discover which Tier-0 SSR Arcanas gain the biggest Training & Support Bonus jumps.',
    sections: [
      {
        id: 'pulsar-priority',
        heading: 'Best SSR Arcanas for Pulsar Core Investment',
        paragraphs: [
          'Pulsar Cores uncap any SSR Arcana by 1 stage (distributed during major milestones like Half-Anniversary / Anniversary). Never spend Pulsar Cores on launch permanent Arcanas whose Memories appear in the Observation Record shop — invest strictly in elite post-launch/Cosmic staples:',
        ],
        bullets: [
          '#1 Customized Training to Cover Weaknesses (Power / Tyria): Premier universal DPS training & Potential staple.',
          '#2 Death for the Flowers (Endurance / Carnelia): Universal +18% Crit Rate Special Potential used in nearly every DPS build.',
          '#3 A White Moon Shines With the Sun\'s Warmth (Endurance / Lyn): Top Stigma of Speed (+8% SPD) Arcana.',
          '#4 The Indomitable Masterpiece (Power / Frey), The Perfect Bunny Girl (Health / Claire), and Nostalgia Strikes Back (Endurance / Hilde — 20% Defend Forward for Defenders).',
        ],
        featuredArcanaSlugs: [
          'arcana-80012824',
          'arcana-80139832',
          'arcana-79941760',
          'arcana-79766540',
          'arcana-79534223',
          'arcana-79855463',
        ],
      },
    ],
  },
  {
    slug: 'break-skills',
    title: 'Best Break Skills Tier List: Planetary Purification & Star Piercer',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_052.webp',
    lead: 'Complete AppMedia ranking of all 5 Tactical Analysis Break Skills (unlocked at Sector 5-20): exact multipliers, Domain buffs, and unlock conditions.',
    sections: [
      {
        id: 'break-ranking',
        heading: 'All 5 Commander Break Skills Ranked & Compared',
        paragraphs: [
          'Break Skills are equipped and upgraded in Tactical Analysis (unlocked after Operation Sector 5-20) using Break Skill Support Plans:',
        ],
        table: {
          headers: ['Break Skill', 'Unlock Condition', 'Active & Domain Effects', 'Best Teams'],
          rows: [
            [
              '1. Planetary Purification (SS)',
              'Main Story EP5 Clear',
              'Highest base nuke (6,100 at Lv.1). Domain [Witch\'s Blessing]: All Saviors +1 Toughness DMG & gain +1 Nova Force after every skill!',
              '#1 for Multi-Action / Cross Attack teams (Bunnygirl Charlotte, Asherah: Waltz, Roberta, Fei)',
            ],
            [
              '2. Star Piercer (SS)',
              'Main Story 1-6 Clear',
              'Allies +20% Action Gauge. Domain [Strategic Command]: All Saviors +10% Crit Rate & +10% Crit DMG (+20% total for Strikers & Rangers!)',
              '#1 for Striker & Ranger Crit teams (Note: Assassins & Casters only get +10%)',
            ],
            [
              '3. Cube Overload (S)',
              'Main Story 3-7 Clear',
              'Party HP Heal + 2T [Omega Protocol] (+15% ATK, +15% Effect Hit). Domain [Cheat Matrix]: +10% SPD (+20% total for Defenders & Supporters)',
              'Best survival & high-speed debuff / Cube Palace skill',
            ],
            [
              '4. Singularity Observation (A)',
              'Initial Default',
              'Instant +4 Nova Force. Domain [Starry Horizon]: All Saviors +20% ATK & +20% DEF',
              'Early-game balanced default until Star Piercer / Planetary Purification',
            ],
            [
              '5. Dimensional Assault (Collab)',
              'CounterSide Collab (Ended)',
              'Instant +4 Nova Force. Domain [CRF Amplification]: All Saviors +15% ATK & +1 Toughness DMG',
              'Strong Nova battery if owned from Gleipnir event',
            ],
          ],
        },
      },
    ],
  },
  {
    slug: 'flashpoint',
    title: 'Flashpoint Bosses Walkthrough & Best Guide Stones (Morning Star)',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_053.webp',
    lead: 'Unlocked at Sector 3-15 (Fixed Lv.200, zero CP deficit penalty!): how to farm Morning Star Awakening Stones, "A Knight\'s Oath", and Roberta Guide Stones.',
    sections: [
      {
        id: 'flashpoint-tips',
        heading: 'Flashpoint Rules (Lv.200 Fixed) & Best Guide Stone Targets',
        paragraphs: [
          'Flashpoint fixes all Savior levels at Lv.200 (Star Link amplification above 200 does not apply) and removes the Combat Power deficit penalty — meaning Stellar Archives, Equipment substats, Tactical Analysis, and Affinity decide victory across its 11 bosses (Manager Gregory, Carbon Punk Kan, Void Nirvana, Chieftain Krunnadun, Void Annihilator, Readymade Happy No. 68, Void Slaughterer, Void Despiser, Void Exile, Lethargia Magician, Void Entomber).',
        ],
        bullets: [
          '#1 Priority — Morning Star Awakening Stones: Newly farmable in Flashpoint to unlock SR Guardian Star Awakening (Clarissa SS, Scarlet/Claire/Annah S)!',
          '#1 SSR Arcana Guide Stone — "A Knight\'s Oath" (+ "Young Lady of Stranis"): One of only two Arcanas in the game carrying [Stigma of Speed] (+8% SPD), paired on the same boss stage with great Supporter HP card Young Lady of Stranis!',
          'Other Strong Guide Stone Stages: "Made by Petra♡" (+18% Crit Rate if you lack Death for the Flowers), "Divine Judgement" (Caster Crit DMG), "Chase the Light!" (Luna 5-hit chain DMG), and Savior Roberta.',
        ],
        featuredCharSlugs: ['roberta', 'clarissa'],
        featuredArcanaSlugs: ['arcana-79517744', 'arcana-79606361', 'arcana-79517771', 'arcana-79517759', 'arcana-80210542'],
      },
    ],
  },
  {
    slug: 'interstellar-corridor',
    title: 'Interstellar Corridor & Attribute Towers Walkthrough (Depth 300+)',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_055.webp',
    lead: 'Unlocked at Sector 6-20: Battle Skip tips, weekly 9-floor Attribute Corridors, manual Nova Burst boss clears, and Depth 220+ Combat Environment debuffs.',
    sections: [
      {
        id: 'corridor-tips',
        heading: 'Interstellar Corridor Skip Strategy & Combat Environment Penalties',
        paragraphs: [
          'Use Battle Skip freely on non-boss floors and all weekly Attribute Corridor floors (capped at 9 floors/week per element). Because Auto/Skip does NOT cast Nova Burst, switch to Manual whenever a boss floor blocks your skip!',
          'At higher Infinite Corridor depths (Turns/Depth 220+), escalating Combat Environment penalties slash Max HP, DEF, Healing, and Barrier strength by -5% up to -50% — making fast offensive burst teams with your strongest built Saviors far superior to slow stall comps.',
        ],
      },
    ],
  },
  {
    slug: 'sr-awakening',
    title: 'SR Guardian Star Awakening Tier List: Clarissa (SS) & Priority Order',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_056.webp',
    lead: 'Exact AppMedia SR Guardian Star Awakening tier list using Morning Star Awakening Stones & Remnant Cores — why Clarissa jumps straight to SS Rank!',
    sections: [
      {
        id: 'awakening-order',
        heading: 'AppMedia SR Guardian Star Awakening Tier List',
        paragraphs: [
          'Guardian Star Awakening uses Morning Star Awakening Stones (farmable in Flashpoint with no permanent account cap) plus SR dupes / Remnant Cores (from Apocalypse Shop -> Observation Reports):',
        ],
        table: {
          headers: ['Tier', 'SR Savior(s)', 'Awakened Upgrade & Role'],
          rows: [
            [
              'SS (Tier 1)',
              'Clarissa (Star Ranger)',
              '#1 Priority! Stacks [Leap] for massive self SPD Up + Action Gauge Up while inflicting enemy SPD/AG Down; shreds Moon bosses (`Star -> Moon`). Always place in Back row so hits don\'t strip [Leap]!',
            ],
            [
              'S (Tier 2)',
              'Scarlet / Claire / Annah',
              'Scarlet (Sun Striker): Burn scaling + extra Special at max Ignition | Claire (Moon Assassin): 15% DEF Pen >50% HP, Ult ignores Defend Forward + Stealth on kill | Annah (Sun Defender): Self heal/Barrier/SPD + 100% Enhanced Counter at max Ignition',
            ],
            [
              'A (Tier 3)',
              'Naru / Vera / Marcille / Besta',
              'Naru (Star debuff Ranger) | Vera (only SR Supporter AoE healer/cleanser) | Marcille ([Hexa Nut] +30% Crit DMG & +15% Break DMG) | Besta (Barrier + 40% [Repel] counter vs AoE)',
            ],
          ],
        },
        featuredCharSlugs: ['clarissa', 'scarlet', 'claire', 'anna', 'naru', 'bella', 'marcille', 'vesta'],
      },
    ],
  },
  {
    slug: 'precision-crafting',
    title: 'Precision Crafting Guide: Best Sets (Fighting Spirit) & SPD Necklaces',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_057.webp',
    lead: 'Exact AppMedia Precision Crafting priority: why Fighting Spirit & Destruction Main-SPD Necklaces (with ATK% / Crit Rate / Crit DMG subs) give the highest fuel ROI.',
    sections: [
      {
        id: 'crafting-rules',
        heading: 'Top 3 Precision Crafting Equipment Recipes & Fuel Rates',
        paragraphs: [
          'In Crafting Workshop -> Precision Crafting, you lock the exact Slot, Set, Main Stat, and 4 Substats using Precision Crafting Fuel (earned from normal gear crafting: T1 Integrated = 2pt / Slot = 3pt; T2 Integrated = 4pt / Slot = 6pt — wait for T2 at Sector 14-36!). Save fuel for Main-SPD Necklaces, which are hardest to snipe from drops:',
        ],
        table: {
          headers: ['Priority', 'Set', 'Slot & Main Stat', '4 Target Substats & Reason'],
          rows: [
            ['#1 Best ROI', 'Fighting Spirit (2pc: ATK +5%, Eff RES +5%)', 'Necklace — Main SPD', 'ATK%, Crit Rate, Crit DMG (+HP%/DEF%). Costs less fuel than Bulwark/Vitality and fits almost every DPS & sub-DPS!'],
            ['#2 Main Carry', 'Destruction (4pc: Crit DMG +40%)', 'Necklace — Main SPD', 'ATK%, Crit Rate, Crit DMG (+SPD/HP%). BiS hypercarry piece (higher fuel cost than 2pc sets).'],
            ['#3 Universal Ring', 'Fighting Spirit (2pc: ATK +5%, Eff RES +5%)', 'Ring — Main ATK%', 'SPD, Crit Rate, Crit DMG (+HP%). Flexible 2-piece finisher across all Attackers.'],
          ],
        },
      },
    ],
  },
  {
    slug: 'apocalypse-shop',
    title: 'Apocalypse Shop Best Exchange Priority (Cosmic Cube & Remnant Cores)',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_058.webp',
    lead: 'Complete tab-by-tab AppMedia Apocalypse Shop guide: Observation Records, Observation Reports (Remnant Core #1!), Gauntlet Cosmic Cubes, and Precision Crafting Fuel.',
    sections: [
      {
        id: 'apocalypse-priority',
        heading: 'Apocalypse Shop Tab-by-Tab Exchange Priority',
        paragraphs: [
          'Never waste scarce currencies on farmable low-tier enhancement stones. Follow AppMedia\'s exact priority per shop tab:',
        ],
        table: {
          headers: ['Shop Tab / Currency', '#1 Must-Buy Priority', 'Secondary / Notes'],
          rows: [
            ['Daily Tab', 'Daily Free Item (+ Cash Shop daily/weekly/monthly freebies!)', 'Skip non-free Gold/Gem items unless heavily discounted needed mats'],
            ['Standard Observation Record', 'Core Savior Bonds / Meta SSR Arcana Memories / SSR Arcana Random Box', 'Note: Random boxes exclude Cosmic units'],
            ['Observation Report', '#1 Remnant Core (for SR Awakening & Engraving!) + Discounted Tickets', 'Break Skill Support Plan is low priority once core Break Skills are leveled'],
            ['Gauntlet Points', '#1 Cosmic Cube (1/month refresh!)', 'Master Cube -> Expert Cube'],
            ['Gauntlet Season Coins', '#1 Standard Observation Ticket Envelope & Cosmic Cube', 'Savior Diary & Integrated Tactical Analysis Random Box'],
            ['Cosmo Gate / Candle Square', '#1 Precision Crafting Fuel', 'Supreme Enhancement Stones & high-tier upgrade mats'],
          ],
        },
      },
    ],
  },
  {
    slug: 'paid-packs',
    title: 'Best Value Paid Packs & Monthly Starlight Gem Pass Guide',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_059.webp',
    lead: 'Pull-per-dollar value comparison across Monthly Starlight Gem Passes, Season Passes, Quasar/Pulsar Core Special Bundles, and 1st Anniversary Packs.',
    sections: [
      {
        id: 'pack-value',
        heading: 'Highest Efficiency Packs (+ Free Cash Shop Reminders)',
        paragraphs: [
          'Even 100% F2P Commanders should open the Cash Shop every day, week, and month to claim the 0-cost Free Supply Packs! For spenders: 1. Monthly Starlight Gem Pass (highest pulls per dollar). 2. Mission / Sector Clear Growth Packs. 3. 1st Anniversary Focused Observation & Quasar/Pulsar Core Limited Bundles.',
        ],
      },
    ],
  },
  {
    slug: 'patch-notes',
    title: 'Latest Maintenance, Update & Balance Patch Notes Summary',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_061.webp',
    lead: 'Chronological AppMedia update log: Nov 4 Frey: Noble Princess & Cosmo Gate P7, Oct 29 Maid Ceres & Guild Defense, Oct 22 Server Merge, and Nov 12 1st Anniversary preview.',
    sections: [
      {
        id: 'recent-updates',
        heading: 'October – November 2026 Official Update Log',
        paragraphs: [
          'Recent Star Savior maintenance deployments and upcoming scheduled patches:',
        ],
        bullets: [
          'Nov 12, 2026 (Upcoming 1st Anniversary & EP8): Witch of Favoritism (Order Striker) & free Guile (Chaos Caster + free SSR Arcana), Auto Journey (Deepening Mode), Event Recollection, and coupon TOGETHER1STANNIV.',
          'Nov 4, 2026 Update: Frey: Noble Princess & Tier-0 Power SSR Arcana "The Indomitable Masterpiece" revival pickup, Cosmo Gate Season P7 (Belgras / Tyria / Carnelia), Gauntlet Pre-Season (Nov 9), Bunny Revival, and 100 Starlight Gems + 2 Standard Tickets maintenance compensation.',
          'Oct 29, 2026 Update: New Sun Supporter Maid Ceres & SSR Arcana "Grueling Ordeal" pickup, Revival Valentine Event ("Bittersweet! Golden Fantasia"), and Guild Defense battle updates.',
          'Oct 22 & Oct 15, 2026 Updates: Seira SSR Arcana ("Drowsy Day Out"), Server Merge completion, and Maid Lydia ("Wait, These Are... Clothes?") implementation.',
        ],
      },
    ],
  },

  /* ----------------------------- MECHANICS VERIFICATION ----------------------------- */
  {
    slug: 'cross-attack',
    title: 'Cross Attack Mechanics Verification: Asherah: Waltz & Professor M',
    category: 'Mechanics',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_063.webp',
    lead: 'Complete AppMedia verification of Cross Attack: exact holders (Asherah: Waltz of Starlight & Professor M), execution order, Extra-Basic exclusions, and Toughness Break rules.',
    sections: [
      {
        id: 'cross-verification',
        heading: '6 Verified Cross Attack Rules From In-Game Testing',
        paragraphs: [
          'Currently ONLY two Saviors possess Cross Attack: Asherah: Waltz of Starlight (unlocked at LB1, 100% rate at LB3!) and Professor M:',
        ],
        bullets: [
          '1. Normal Basic Skill Trigger Only: Cross Attack triggers probabilistically when an ally normally uses a Basic Skill (single-target Basic -> strikes same enemy; AoE Basic -> strikes a random enemy).',
          '2. Skill-Effect Extra Basics Do NOT Trigger Cross Attack: Bonus Basic Skills fired by passives/tokens (such as Rosaria\'s 3-stack Judgment of the King or Bunnygirl Charlotte\'s Lucky Token double Basic) do NOT trigger Cross Attack!',
          '3. Stacks With Starlight Trajectory EX: Hard Journey Helm Potential [Starlight Trajectory EX] (25% ally Basic follow-up on Basic Crit) CAN trigger alongside Cross Attack! Exact resolution order: Initial Basic -> Cross Attack -> Character Extra Attack -> Starlight Trajectory EX.',
          '4. Disabled While Toughness Broken: Unlike Starlight Trajectory EX, Cross Attack will NOT activate while the Cross-Attack holder is in Toughness Break state.',
          '5. Fizzles on Target Death: If the ally\'s initial single-target Basic Skill kills the target, the queued Cross Attack cancels rather than retargeting.',
          '6. Revenge Attacks Do Not Trigger Cross Attack: Counterattacks (`REVENGE ATTACK`) never proc Cross Attack.',
        ],
        featuredCharSlugs: ['dress-asherah', 'professor-m'],
      },
    ],
  },
  {
    slug: 'revenge-attack',
    title: 'Revenge Attack (Counterattack) Verification & Trajectory XX (+20%)',
    category: 'Mechanics',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_064.webp',
    lead: 'AppMedia verification of Revenge Attack: fires Basic Skill on hit (even on Evade, Defend Forward & AoE!), ignores enemy Defend Forward, and stacks with Gauntlet XX1 (+20%).',
    sections: [
      {
        id: 'revenge-rules',
        heading: 'Verified Revenge Attack Interactions',
        paragraphs: [
          'When taking direct attack damage, Revenge Attack fires the defender\'s Basic Skill (`REVENGE ATTACK`) back at the attacker:',
        ],
        bullets: [
          'Triggers on Evade, Defend Forward & Enemy AoEs: Dodging an attack or intercepting an ally\'s hit via Defend Forward STILL triggers Revenge Attack, and enemy AoEs can trigger counters from multiple allies at once!',
          'Ignores Enemy Defend Forward: Counterattacks strike the attacker directly and cannot be intercepted by enemy Defend Forward tanks.',
          'No Built-In Mitigation & Disabled While Broken: Revenge Attack does not reduce incoming damage/debuffs, and cannot fire while Toughness-broken.',
          'Potential Interactions: Revenge Attack does NOT proc Cross Attack or [Starlight Trajectory EX], but Boots [Trajectory DX] (25% chance +10% AG) and Eyeguard [Trajectory GX] (50% 2T Bleed) DO trigger on counters! Farm Hard Journey Tactical -> Gauntlet (`Starlight Trajectory XX1`) for a permanent +20% Counter Rate.',
        ],
        featuredCharSlugs: ['swimsuit-luna', 'roberta', 'emily', 'anna', 'vesta'],
      },
    ],
  },
  {
    slug: 'evade',
    title: 'Evade Mechanics Verification: 50% Damage Cut, Crit Negation & Debuff Immunity',
    category: 'Mechanics',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_065.webp',
    lead: 'Exact AppMedia verification of Evade: halves damage (never 0!), forces guaranteed non-crit, 100% blocks debuffs & Toughness loss, and stacks additively with Hit Rate Down.',
    sections: [
      {
        id: 'evade-rules',
        heading: 'What Actually Happens On a Successful Evade',
        paragraphs: [
          'Evade in Star Savior is NOT a 0-damage miss — AppMedia testing verified four exact mechanical effects whenever `EVADE` triggers:',
        ],
        bullets: [
          '1. 50% Incoming Damage Cut: Damage taken is halved (50%), never reduced to zero.',
          '2. Guaranteed Non-Crit: Even if the attacker has 100% Crit Rate, an Evaded hit can NEVER critically strike!',
          '3. 100% Debuff & Toughness Damage Immunity: On-hit debuffs and Toughness gauge reduction are completely negated on Evade (though attacker self-buffs or extra turns still resolve).',
          '4. Additive Stacking With Hit Rate Down (80% Dodge Combo): Fei\'s innate +50% Evade stacks additively with -30% Hit Rate debuffs from Amora, Haydee, or Bell Rhys to reach 80% effective Evade!',
        ],
        featuredCharSlugs: ['fei', 'amora', 'ede', 'bell-lease', 'gwen'],
      },
    ],
  },
  {
    slug: 'defend-forward',
    title: 'Defend Forward Verification: Hilde, Nostalgia Strikes Back & Counters',
    category: 'Mechanics',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_066.webp',
    lead: 'AppMedia verification of Defend Forward: intercepting single-target hits for allies, exact providers (Hilde & Nostalgia Strikes Back), and Claire\'s ignore mechanic.',
    sections: [
      {
        id: 'defend-forward-rules',
        heading: 'Verified Defend Forward Stance Rules',
        paragraphs: [
          'Defend Forward allows a Defender to step in front of a single-target attack aimed at an ally and take the hit in their place:',
        ],
        bullets: [
          'Exact Providers: SSR Sun Defender Hilde (10%–30% rate) and Defender-exclusive Endurance SSR Arcana "Nostalgia Strikes Back" (20% rate).',
          'Intercepts Single-Target Only (Zero Built-In Damage Cut): Does NOT reduce damage by itself, does NOT activate against AoE skills, and cannot trigger while Broken, Stunned, or Asleep.',
          'Synergy With On-Hit Defenders: Equipping "Nostalgia Strikes Back" on Emilly or Haydee lets them intercept hits for squishy carries while building their own on-hit passive stacks and Revenge Attacks!',
          'Hard Counter: Awakened/SR Moon Assassin Claire\'s Ultimate explicitly states "Ignores Defend Forward", bypassing interception completely.',
        ],
        featuredCharSlugs: ['hilde', 'emily', 'ede', 'claire'],
        featuredArcanaSlugs: ['arcana-79855463'],
      },
    ],
  },
  {
    slug: 'armor-break',
    title: 'Break Armor Destruction Cutscenes: Eligible Characters & Settings Toggle',
    category: 'Mechanics',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_067.webp',
    lead: 'Exact trigger condition (Toughness Break!), complete list of eligible Saviors, Extra Moment viewing, and how to toggle "Reduce Break Armor Destruction Cutscene" in Settings.',
    sections: [
      {
        id: 'armor-break-toggle',
        heading: 'Trigger Condition, Eligible Saviors & Reduction Toggle',
        paragraphs: [
          'Break Armor Destruction triggers mid-battle specifically when an eligible Savior suffers Toughness Break (Toughness reduced to 0) — NOT from HP loss! Eligible characters can also view their damaged-attire variant inside Extra Moments.',
          'To censor/reduce cutscenes for public play, open Settings -> Game -> "Reduce Break Armor Destruction Cutscene" and switch it ON (leaving it OFF displays the full cutscene).',
        ],
        bullets: [
          'Currently Eligible Saviors (11 Live + 4 Upcoming): Luna, Seira, Elisa, Lydia, Lacy, Asherah: Waltz of Starlight, Rosaria, Carmen: Eternal Promise, Epindel: Blessing in Bloom, Carnelia, and Amora — plus upcoming Witch of Favoritism, Guile, Dress Lacy, and Dress Carnelia!',
        ],
        featuredCharSlugs: ['luna', 'seira', 'elisa', 'lydia', 'lacy', 'dress-asherah', 'rosalia', 'bride-carmen', 'bride-epindel', 'carnelia', 'amora'],
      },
    ],
  },
  {
    slug: 'hp-recovery',
    title: 'HP Recovery Verification: Exact Formula, Lifesteal Bypass & Regeneration',
    category: 'Mechanics',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_068.webp',
    lead: 'AppMedia formula verification: `floor(MaxHP × Multiplier × (1 + HealUp - HealDown))`, why Lifesteal bypasses Star Challenge Constraint: Creation, and Regeneration rules.',
    sections: [
      {
        id: 'healing-verification',
        heading: 'Verified Healing, Lifesteal & Regeneration Mechanics',
        paragraphs: [
          'In-game HP recovery testing confirmed three critical rules for endgame raids and Star Challenge constraints:',
        ],
        bullets: [
          '1. Direct Heal Formula (Truncated): `HP Restored = floor(Reference MaxHP × Skill Multiplier × (1 + Outgoing/Incoming Heal Up - Heal Down))` — all decimals are rounded down.',
          '2. Lifesteal / Heal-by-Damage Dealt Bypasses [Constraint: Creation]: Saviors who heal proportional to damage dealt (such as Bunnygirl Charlotte and Roberta\'s Unique Potential) completely ignore Star Challenge [Constraint: Creation] healing penalties! However, combat [Healing Down] debuffs (like Marcille or Bunnygirl Scarlet\'s -50% Heal Down) DO reduce Lifesteal.',
          '3. Regeneration (15% Recipient Max HP): Continuous Regeneration heals 15% of the RECIPIENT\'S Max HP at turn start; it does NOT scale with [Healing Up] buffs, though [Healing Down] debuffs still reduce it.',
        ],
        featuredCharSlugs: ['maid-ceres', 'bride-carmen', 'bunny-charles', 'roberta', 'marcille', 'bunny-scarlet'],
      },
    ],
  },

  /* ----------------------------- BEGINNER & SYSTEM GUIDES ----------------------------- */
  ...[
    [
      'beginner-progression',
      'Beginner Early-Game Progression Roadmap: Sector 1-5 to Sector 18-36',
      '/banners/starsavior/buttons/btn_070.webp',
      'Clear Sector 1-5 (Shops/Events) -> Sector 2-12 (Guild/Gauntlet) -> Sector 3-15 (Star Link/Flashpoint) -> Sector 4-18 (Subjugation Gear) -> Sector 5-20 (Break Skills) -> Sector 8-26 (Rescue Journey Normal) -> Sector 14-36 (Tier 2 Gear) -> Sector 18-36 (Rescue Journey Hard)! Push Operations daily before claiming NOA Support Funds.',
    ],
    [
      'how-to-reroll',
      'Fast Reroll Method (~10 Minutes): Server Account Reset & 10,000 Starlight Gems',
      '/banners/starsavior/buttons/btn_071.webp',
      'Because new Guest account creation is suspended, log in on Mobile or Steam, complete the 3-turn Rescue Journey tutorial + skip 2 tutorials (~10 minutes total), claim 10,000 Starlight Gems from Challenge Missions + open Observation Ticket Envelopes in your Warehouse, pull Focused Observation, and use Settings -> Account -> Reset Server Account to retry instantly!',
    ],
    [
      'daily-routine',
      'Daily Checklist: Everything To Complete Before 04:00 JST Reset',
      '/banners/starsavior/buttons/btn_072.webp',
      '1. Claim free Daily Apocalypse Shop + Cash Shop freebies. 2. Collect NOA Support Funds. 3. Send/receive 20 Friendship Points (4 free pulls at 2% SSR!). 4. Clear Cube Palace (1 Palace Access Card), Flashpoint (Morning Star / Knight\'s Oath stones), and weekly 9-floor Attribute Corridors. 5. Spend Willpower on Event Raids or Subjugation Requests.',
    ],
    [
      'equipment-guide',
      'Equipment Guide: All 3 Subjugation Stages, Sets & Sector 14-36 T2 Gear',
      '/banners/starsavior/buttons/btn_073.webp',
      'Unlocked at Sector 4-18 (T2 Gear at Sector 14-36, max +15 with substat upgrades every +3; excess XP refunded). Twisted Emotion drops 4pc Attack (+20% ATK), Insight (+30% Crit Rate), Precision (+15% Crit/+20% Hit) & 2pc Fighting Spirit (+5% ATK/+5% RES); Bitter Cold Onslaught drops 4pc Speed (+15 SPD) & 2pc Defense/Hit/Resistance; Forgotten Oath drops 4pc Vitality (+30% HP), Destruction (+40% Crit DMG), Annihilation & 2pc Bulwark.',
    ],
    [
      'shop-priority',
      'Recommended Shop Purchases: Apocalypse, Gauntlet, Guild & Cash Freebies',
      '/banners/starsavior/buttons/btn_074.webp',
      'Claim daily free items in both Apocalypse Shop and Cash Shop first! Buy monthly Cosmic Cubes (Gauntlet Points), Remnant Cores (Observation Reports), Standard Ticket Envelopes (Season Coins), and Precision Crafting Fuel (Cosmo Gate / Candle Square).',
    ],
    [
      'upgrade-systems',
      'Character Upgrade Systems Summary & Star Link Level Synchro Order',
      '/banners/starsavior/buttons/btn_075.webp',
      'Focus levels on your top 4 Saviors and register everyone else into Star Link (unlocked at Sector 3-15) to share levels for free! Upgrade order: 1. Character Level & Resonance (up to Lv.10 at Lv.200) -> 2. Hard/Normal Stellar Archive -> 3. +15 T2 Right-Side Gear (SPD Necklace!) -> 4. Tactical Analysis & Affinity -> 5. Skill Levels & Limit Breaks (LB1–LB3).',
    ],
    [
      'battle-system',
      'Battle System Explained: Action Gauge, Toughness Break & Nova Burst',
      '/banners/starsavior/buttons/btn_076.webp',
      'Depleting an enemy\'s Toughness bar triggers Toughness Break (stun + unable to recover Toughness + increased damage taken) and charges your Commander Break Skill. Remember that Auto/Skip Battle never casts Nova Burst — switch to Manual on tough bosses!',
    ],
    [
      'attribute-matchups',
      'Attribute Matchups Chart: Moon -> Sun -> Star -> Moon & Order <-> Chaos',
      '/banners/starsavior/buttons/btn_077.webp',
      'Star Savior uses a 3-element triangle plus 2 mutual Cosmic attributes: Moon beats Sun, Sun beats Star, and Star beats Moon (`Moon -> Sun -> Star -> Moon`), while Order and Chaos hold mutual advantage (`Order <-> Chaos`). Advantage boosts Damage Dealt, Effect Hit, and bonus Toughness shred!',
    ],
    [
      'cosmic-attributes',
      'What Are Cosmic Characters? Order & Chaos Rates, Dupes & Synergies',
      '/banners/starsavior/buttons/btn_078.webp',
      'Cosmic Saviors (Order & Chaos attributes such as Amora, Professor M, Carnelia, Rosaria, Asherah: Waltz of Starlight, Witch of Favoritism, and Guile) never suffer disadvantage against Sun/Star/Moon enemies, carry 0.1% individual off-banner rates, and are top candidates for Quasar Cores.',
    ],
    [
      'character-stats',
      'Character Stats Explained: Combat Parameters vs Rescue Journey Stats',
      '/banners/starsavior/buttons/btn_079.webp',
      'Complete dictionary of ATK, DEF, HP, SPD, Crit Rate, Crit DMG, Effect Hit, Effect Resistance, and Toughness, plus how Equipment Score weights Crit Rate & Crit DMG higher than Effect Hit/RES.',
    ],
    [
      'stellar-archive',
      'Stellar Archive Guide: Equipping Archives, SG Rank & Blessing Inheritance',
      '/banners/starsavior/buttons/btn_080.webp',
      'Every Rescue Journey save creates a Stellar Archive storing stats, Special/General Potentials, and Blessing stars. Remember: Special Potentials apply in combat when equipped, whereas only Stat & General Potential Blessings pass down when used as Parent Archives!',
    ],
    [
      'daily-reset',
      'Daily Reset Time (04:00 JST) & Weekly / Monthly Refresh Schedule',
      '/banners/starsavior/buttons/btn_081.webp',
      'Star Savior resets daily missions, Palace Access Cards, Event Raid tickets, Flashpoint entries, and daily free shop items at 04:00 JST every day; Attribute Corridor 9-floor caps and weekly missions reset Mondays at 04:00 JST; Gauntlet Cosmic Cubes refresh monthly.',
    ],
    [
      'willpower',
      'Willpower (Stamina) Usage Priority & Moonlight Water Recovery',
      '/banners/starsavior/buttons/btn_082.webp',
      'Spend daily Willpower on active Event stages, Exploration Requests (Resonance mats), and Subjugation Requests (Stage 7+ at Sector 14-36 for Tier 2 equipment); save 60-Willpower reserves or Faded Invitations when rerolling Hard Journey Blessings.',
    ],
    [
      'sweep-overlap',
      'Sweep Battle, Battle Skip (Sector 6-20) & Overlap Auto-Repeat Guide',
      '/banners/starsavior/buttons/btn_083.webp',
      'Use Sweep Battle on cleared Subjugation/Exploration stages for instant drops, Battle Skip (unlocked at Sector 6-20) to fast-clear Operations Sectors 6–18 and Interstellar Corridor floors, and Auto Protocol in cleared Cube Palace steps.',
    ],
    [
      'noa-support-funds',
      'NOA Support Funds Guide: Leveling Every 5 Operation Stages & Fast Claim',
      '/banners/starsavior/buttons/btn_084.webp',
      'NOA Support Funds accumulate idle Gold, EXP, and enhancement materials 24/7, leveling up every 5 Operation stage progress points. Always push Operations as far as possible BEFORE triggering your daily Fast Claim!',
    ],
    [
      'rescue-hq',
      'NOA Headquarters & Candle Square Guide: Area Dispatch, Workshop & Tactical Analysis',
      '/banners/starsavior/buttons/btn_085.webp',
      'Manage Area Dispatch (1-5), Candle Square (1-5), Crafting Workshop (4-18, Lv.4 at 14-36 for T2 gear + Precision Crafting), and Tactical Analysis (5-20 for Break Skills & global class stat nodes) from HQ.',
    ],
    [
      'profile-settings',
      'Profile Settings Guide: Support Arcana Loan, Representative Savior & UID',
      '/banners/starsavior/buttons/btn_086.webp',
      'Pin your highest-Limit-Break meta SSR Arcana (such as Death for the Flowers, The Indomitable Masterpiece, or Customized Training to Cover Weaknesses) on your Profile so active friends add you and send daily Friendship Points!',
    ],
    [
      'lobby-settings',
      'Lobby Screen Customization: Live2D Saviors, Extra Moments & Ark Points',
      '/banners/starsavior/buttons/btn_087.webp',
      'Assign unlocked Live2D Savior lobbies, skins, Ark Point 2D illustrations, and 3D Extra Moments (including Break Armor Destruction variants on eligible Saviors) across expanded 1st Anniversary lobby slots.',
    ],
    [
      'birthday-settings',
      'How to Set Your Birthday & View All Savior Birthdays',
      '/banners/starsavior/buttons/btn_088.webp',
      'Register your birthday in Profile Settings to unlock special voiced Savior greetings, and check our Birthday Calendar Database for all 57 playable Saviors.',
    ],
    [
      'friends-guide',
      'How to Add Friends: 20 Daily Friendship Points & Lv.50 Arcana Rentals',
      '/banners/starsavior/buttons/btn_089.webp',
      'Send requests to same-rank players via Friends -> Apply to quickly fill your list: receive up to 20 Friendship Points every day (4 pulls on the 2% SSR Friendship Gacha!) and borrow Lv.50 MLB SSR Arcanas in every Rescue Journey.',
    ],
    [
      'guild-guide',
      'Guild Guide (Unlocked at Sector 2-12): Check-In, Guild Defense & Rewards',
      '/banners/starsavior/buttons/btn_090.webp',
      'Join an active Guild immediately after clearing Sector 2-12 to claim daily check-in rewards, participate in cooperative Guild Defense battles, and exchange guild currency.',
    ],
    [
      'steam-pc',
      'How to Play Star Savior on PC (Steam) & Cross-Platform Account Sync',
      '/banners/starsavior/buttons/btn_091.webp',
      'Install Star Savior on Steam for 60/120 FPS widescreen play and in-game coupon entry. Link your mobile account via Google/Apple BEFORE launching Steam so both devices share one Rescue Corps save!',
    ],
    [
      'account-linking',
      'Account Linking & Server Account Reset Guide (iOS / Android / Steam)',
      '/banners/starsavior/buttons/btn_092.webp',
      'Bind your account under Settings -> Account via Google or Apple ID to safeguard progress across devices (note: "Reset Server Account" wipes server progress for rerolling — never tap it after binding a keeper account!).',
    ],
  ].map(([slug, title, banner, text]): StarSaviorGuideArticle => ({
    slug,
    title,
    category: 'Beginner & Systems',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: banner,
    lead: text,
    sections: [
      {
        id: 'overview',
        heading: 'Verified Mechanics & Step-by-Step Tips',
        paragraphs: [
          text,
          'Use the related rankings and database links below to pair this system with optimal Saviors and Arcana cards.',
        ],
      },
    ],
  })),

  /* ----------------------------- DATABASE SUBPAGES ----------------------------- */
  {
    slug: 'character-stats-list',
    title: 'All Character Base Stats Comparison Table (Sortable)',
    category: 'Database',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_108.webp',
    lead: 'Sortable max base stats database for all 57 Star Savior characters — compare ATK, HP, DEF, SPD, and CRIT% across SSR and SR Saviors.',
    specialKind: 'char-stats-table',
    sections: [],
  },
  {
    slug: 'ark-point-list',
    title: 'Ark Point Memorial Illustrations & Extra Moments Guide',
    category: 'Database',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_110.webp',
    lead: 'Complete directory of Savior Ark Point memorial scenes and 3D Extra Moments earned via Affinity milestones and character unlocks.',
    specialKind: 'ark-points-db',
    sections: [],
  },
  {
    slug: 'birthday-calendar',
    title: 'All Character Birthdays Calendar & Affiliations List',
    category: 'Database',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_111.webp',
    lead: 'Complete birthday list, height, and faction directory for all 57 playable Saviors in Star Savior.',
    specialKind: 'birthday-db',
    sections: [],
  },
  {
    slug: 'voice-actors',
    title: 'Voice Actors (CV) Cast List for All 57 Characters',
    category: 'Database',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_112.webp',
    lead: 'Complete voice cast (CV) directory for all 57 playable Saviors in Star Savior with direct links to each character profile.',
    specialKind: 'voice-actors-db',
    sections: [],
  },
  {
    slug: 'skins-list',
    title: 'Character Skins & Alternate Costume Variants Catalog',
    category: 'Database',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_113.webp',
    lead: 'Visual showcase of all alternate-attire Saviors (Bunnygirl, Waltz of Starlight, Eternal Promise, Blessing in Bloom, Summer Starlight, Sunshine Cat, Maid) and announced December Dress skins.',
    specialKind: 'skins-db',
    sections: [],
  },

  /* ----------------------------- COMMUNITY BOARDS ----------------------------- */
  {
    slug: 'general-board',
    title: 'General Discussion & Strategy Q&A Bulletin Board',
    category: 'Community',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_115.webp',
    lead: 'Ask party-building questions, share Rescue Journey SG-Rank Archive tips, and discuss 1st Anniversary banners with fellow English Commanders.',
    specialKind: 'community-board',
    boardSeedPosts: [
      {
        author: 'Commander_Vega',
        tag: 'Global / Steam',
        timestamp: '18 mins ago',
        body: 'Cleared Cube Palace STEP 5 Mechanics using Roberta + Bunnygirl Charlotte + Asherah: Waltz + Carmen: Eternal Promise! Quick Eraser dispelling Luna\'s Super Omega Guard made Wave 5 super clean.',
      },
      {
        author: 'NoaTactician',
        tag: 'JP Server (English)',
        timestamp: '1 hour ago',
        body: 'Reminder to redeem GIFTREADYANNIV1ST (20 Focused Tickets!) before Nov 27 04:00 and ENDOFTHEJOURNEY (2,000 Starlight Gems) — plus TOGETHER1STANNIV goes live Nov 12 at 10:00!',
      },
      {
        author: 'PolarisRunner',
        tag: 'Daily Active',
        timestamp: '3 hours ago',
        body: 'The updated Event Choice Checker with all Hard Training Direction (AX–XX3) and Flora/Kalide choices is clutch — grabbed Gauntlet XX1 (+20% Counter Rate) on Roberta and hit Rank SG!',
      },
    ],
    sections: [],
  },
  {
    slug: 'friend-board',
    title: 'Friend ID & Lv.50 Support Arcana Recruitment Board',
    category: 'Community',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_116.webp',
    lead: 'Share your Commander UID and your pinned Support Arcana (e.g., Lv.50 Death for the Flowers, The Indomitable Masterpiece, or Customized Training to Cover Weaknesses) for 20 daily Friendship Points!',
    specialKind: 'community-board',
    boardSeedPosts: [
      {
        author: 'AscalonLead',
        tag: 'MLB SSR Arcana Support',
        timestamp: '25 mins ago',
        body: 'UID: 80419255 — Pinned Lv.50 MLB "The Indomitable Masterpiece" (Power) + SS Maid Ceres. 6 friend slots open for daily Friendship Point senders!',
      },
      {
        author: 'StarlightKira',
        tag: 'JP Server (English)',
        timestamp: '2 hours ago',
        body: 'UID: 71930488 — Sharing Lv.50 "Customized Training to Cover Weaknesses" (Power). Accepting all English Commanders grinding Hard Rescue Journey!',
      },
    ],
    sections: [],
  },
  {
    slug: 'guild-board',
    title: 'Guild Recruitment & Competitive Cosmo Gate Alliance Board',
    category: 'Community',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_117.webp',
    lead: 'Recruit active members for your Rescue Corps Guild or find an English-speaking guild for daily check-in rewards, Guild Defense, and Cosmo Gate theorycrafting.',
    specialKind: 'community-board',
    boardSeedPosts: [
      {
        author: 'Guild: PolarisEN',
        tag: 'Global / Steam',
        timestamp: '42 mins ago',
        body: '[PolarisEN] Lv.8 English Guild recruiting 3 daily check-in members! Casual-competitive Cosmo Gate P7 & Guild Defense active. Apply in-game!',
      },
      {
        author: 'Guild: AstralVanguard',
        tag: 'Daily Active',
        timestamp: '4 hours ago',
        body: '[AstralVanguard] Top 5% Cosmo Gate English/Bilingual guild looking for 2 active Commanders (Lv.200 Star Link roster). Daily buffs active 24/7!',
      },
    ],
    sections: [],
  },
];

export function getStarSaviorGuideBySlug(slug: string): StarSaviorGuideArticle | undefined {
  return STAR_SAVIOR_GUIDES.find((g) => g.slug === slug);
}
