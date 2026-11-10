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
 * Complete Star Savior English Guide Articles Catalog
 * ============================================================================ */
export const STAR_SAVIOR_GUIDES: StarSaviorGuideArticle[] = [
  /* ----------------------------- RANKINGS ----------------------------- */
  {
    slug: 'pvp-tier-list',
    title: 'Gauntlet (PvP) Strongest Characters Tier List',
    category: 'Rankings',
    updatedAt: 'Nov 10, 2026',
    eyecatchSrc: '/banners/starsavior/eyecatch/rank_pvp.webp',
    lead: 'Complete Gauntlet (PvP) tier list for Star Savior based on turn-1 initiative, AoE burst pressure, immortality survival, Evade / Revenge Attack triggers, and buff strip / silence control.',
    specialKind: 'pvp-ranking',
    sections: [
      {
        id: 'pvp-sss-eval',
        heading: 'SSS Rank (Tier 0) Gauntlet Character Breakdown',
        paragraphs: [
          'In Gauntlet PvP, turn-1 speed cycling, team-wide Crit Damage mitigation, immortality survival, and passive counter-pressure dictate match outcomes before Wave 1 ends.',
        ],
        bullets: [
          'Amora (Order / Assassin): High-frequency Special Skill cycling with Action Gauge self-advance, self-debuff cleanse, Hit Rate Down disruption, and extra-turn burst.',
          'Luna: Summer Starlight (Sun / Defender): Grants 50% Crit Damage Resistance to all allies at battle start — virtually neutralizing turn-1 crit cleave — while countering enemy crits with Defense Down + Taunt.',
          'Carnelia (Chaos / Caster): Survives lethal damage via Immortality until her next turn, resetting skill cooldowns and unleashing amplified Ultimate burst plus Unbuffable control.',
          'Fei (Moon / Assassin): Permanent 50% Evade stance that fires 0-CD Trigger counters whenever she dodges enemy AoE or single-target openers.',
          'Rosaria (Chaos / Ranger): High-tempo AoE pressure and Action Gauge manipulation that punishes slower standard formations.',
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
          'Supporters & Defenders Rated Equally: Team-wide barriers, Crit Resistance, and debuff cleansing decide mirror speed ties.',
          'AoE & Multi-Target Cleave Priority: Eliminating all four opposing Saviors rewards strong AoE multipliers alongside single-target execution.',
          'Silence, Buff Strip & Cleanse Value: Sealing enemy Ultimates with Silence, stripping Immortality/Shields, or cleansing crowd control directly swings win rates.',
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
    lead: 'Which SR Saviors should you build first in Star Savior? Full breakdown of pre-Awakening SR performance, featuring Besta, Naru, Clarissa, Claire, Annah, and Vera.',
    specialKind: 'sr-char-ranking',
    sections: [
      {
        id: 'sr-top-picks',
        heading: 'Top Recommended SR Characters to Build First',
        paragraphs: [
          'This ranking evaluates SR Saviors at base SR rarity before Guardian Star Awakening. Fill missing Defender or Supporter slots in your SSR roster first.',
        ],
        bullets: [
          'Besta (Star / Defender — S Rank): Scales all skill damage off her Max HP while applying ATK Down to enemies and DEF Up to herself. Best frontline SR tank if you lack an SSR Defender.',
          'Naru (Star / Ranger — S Rank): Self-ATK buffing Ranger whose Special Skill deals bonus damage to debuffed enemies, while her Ultimate inflicts SPD Down and Effect Resistance Down via Nova Burst.',
          'Vera (Moon / Supporter — B Rank, Unique Role): Currently the only SR Supporter healer in the roster, providing single-target heal + 2-debuff cleanse on Special and party-wide healing on Ultimate.',
          'Clarissa & Claire (A Rank): Clarissa excels against Moon bosses with SPD Up / Action Gauge control, while Claire bypasses Defend Forward and penetrates DEF cleanly.',
        ],
        featuredCharSlugs: ['vesta', 'naru', 'clarissa', 'claire', 'anna', 'bella'],
      },
      {
        id: 'sr-investment-tips',
        heading: 'SR Character Investment & Limit Break Advice',
        paragraphs: [
          'Because free SSR attackers like Asherah and Trish are distributed early, prioritize SR Defenders (Besta, Annah) or SR Supporter (Vera) if your pulls lack frontline sustain. Note that SR Limit Breaks typically add ~3% base stats per dupe, so role coverage matters far more than dupe count.',
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
          'Because every Rescue Journey deck equips 5 Arcana cards across distinct stat tags, high-limit-break SR Arcanas frequently outperform 0-dupe off-tag SSRs.',
        ],
        bullets: [
          'Choosing the Next Prey (Power Tag — S Rank): Grants two separate ATK-boosting Potentials via its Journey Events — rare even among SSR Arcanas.',
          'Butterfly of Phantasm (Health Tag — S Rank): Combines Max HP Potential scaling with Vitality recovery and Condition up events, saving Rest turns for extra Training.',
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
    lead: 'Instant lookup tool for Star Savior Rescue Journey dialogue choices. Type an Arcana title, Savior name, event title, or desired reward (Vitality, Power, Focus, Potential) to see exact outcomes before picking.',
    specialKind: 'event-checker',
    sections: [
      {
        id: 'checker-tips',
        heading: 'Maximizing Stellar Archive Ranks With Event Choices',
        paragraphs: [
          'Preserving Vitality above 50% prevents training failure and lets you chain high-level Specialty Trainings without wasting turns on Rest. Whenever an Arcana event offers +20 Vitality alongside positive stats, prioritize that option during mid-to-late Hard runs.',
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
    lead: 'Full summary of the latest Star Savior official broadcast: Witch of Favoritism & Guile playable debut, Dress Lacy & Dress Carnelia skins, Cosmo Gate P7, and 1st Anniversary promo codes.',
    sections: [
      {
        id: 'new-saviors',
        heading: 'Newly Announced Saviors & Alternate Costumes',
        paragraphs: [
          'STUDIOBSIDE revealed major upcoming additions to the Rescue Corps roster alongside anniversary festivities:',
        ],
        bullets: [
          'Witch of Favoritism (New Playable SSR): High-anticipation Cosmic-aligned unit teased in the main story.',
          'Guile (New Playable SSR): Tactical frontline specialist scheduled for upcoming Pickup Observation.',
          'New Skins & Variants: Dress Lacy and Dress Carnelia Live2D lobby and combat outfits showcased.',
          'Anniversary Gift Codes: Redeem GIFTREADYANNIV1ST and ENDOFTHEJOURNEY before Nov 27, 23:59 JST.',
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
    lead: 'All working Star Savior promo codes (coupon codes) for free Astral Gems, Standard Observation Tickets, Moonlight Water, and anniversary supply boxes.',
    sections: [
      {
        id: 'active-codes',
        heading: 'Currently Active Star Savior Coupon Codes',
        paragraphs: [
          'Enter the codes below exactly as written (uppercase) before their expiration timestamp:',
        ],
        table: {
          headers: ['Coupon Code', 'Rewards', 'Expiration (JST)'],
          rows: [
            ['GIFTREADYANNIV1ST', 'Astral Gems ×1,500 + Observation Ticket ×10 + Moonlight Water ×50,000', 'Nov 27, 2026 23:59'],
            ['ENDOFTHEJOURNEY', 'Special Observation Ticket ×5 + Polaris Supply Box ×5', 'Nov 27, 2026 23:59'],
            ['STARSAVIORSTEAM', 'Astral Gems ×600 + Cafe Invitation Ticket ×5', 'Permanent (1x per account)'],
          ],
        },
      },
      {
        id: 'how-to-redeem',
        heading: 'How to Redeem Coupon Codes (PC / Android / iOS)',
        paragraphs: [
          'On Android and Steam PC, open Menu (top-right) -> Settings -> Account -> Enter Coupon Code. On iOS, copy your UID from Settings -> Account and submit it with the coupon code on the official STUDIOBSIDE Star Savior Coupon Redemption webpage; rewards arrive immediately in your in-game Mailbox.',
        ],
      },
    ],
  },
  {
    slug: 'maid-ceres-gacha',
    title: 'Should You Pull on the Maid Ceres & Grueling Ordeal Pickup Gacha?',
    category: 'Gacha',
    updatedAt: 'Nov 10, 2026',
    lead: 'Detailed pull evaluation for the Maid Ceres (SS Rank) and SSR Arcana "Grueling Ordeal" Pickup Observation running until Nov 13, 04:00 JST.',
    sections: [
      {
        id: 'verdict',
        heading: 'Pull Verdict: Character ★★★★★ / Arcana ★★★★☆',
        paragraphs: [
          'Maid Ceres debuts directly in SS Rank thanks to her exceptional action economy, party utility, and high-consistency boss performance. If you need a top-tier SSR anchor before Anniversary banners drop, Maid Ceres is a high-value pickup.',
        ],
        featuredCharSlugs: ['maid-ceres', 'ceres'],
        featuredArcanaSlugs: ['arcana-80521390'],
      },
    ],
  },
  {
    slug: 'frey-noble-princess-gacha',
    title: 'Should You Pull on the Frey: Noble Princess & The Indomitable Masterpiece Gacha?',
    category: 'Gacha',
    updatedAt: 'Nov 10, 2026',
    lead: 'Pull analysis for Frey: Noble Princess and the SS-Rank Power Arcana "The Indomitable Masterpiece" running until Nov 19, 04:00 JST.',
    sections: [
      {
        id: 'verdict',
        heading: 'Pull Verdict: Character ★★★☆☆ / Arcana ★★★★★ (Must-Pull Arcana)',
        paragraphs: [
          'While Frey: Noble Princess is a solid S-Rank specialist, her featured SSR Arcana "The Indomitable Masterpiece" is a Tier-0 Power card used in almost every physical and Striker Rescue Journey deck.',
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
    lead: 'Comparison of all active Star Savior Observation banners — Maid Ceres Pickup, Frey: Noble Princess / The Indomitable Masterpiece Arcana Pickup, and Custom Observation.',
    sections: [
      {
        id: 'banner-comparison',
        heading: 'Active Observation Banner Priority',
        paragraphs: [
          'Allocate Special Observation Tickets and Astral Gems toward limited/pickup rate-ups while reserving Standard Observation Tickets strictly for Custom Observation.',
        ],
        table: {
          headers: ['Banner Name', 'End Date', 'Char Rating', 'Arcana Rating', 'Recommendation'],
          rows: [
            ['Maid Ceres Pickup', 'Nov 13, 04:00', '★★★★★ (SS)', '★★★★☆ (Grueling Ordeal)', 'High priority if lacking SS-tier core unit'],
            ['Frey: Noble Princess Pickup', 'Nov 19, 04:00', '★★★☆☆ (S)', '★★★★★ (The Indomitable Masterpiece)', 'Top priority for Arcana deck progression'],
            ['Custom Observation', 'Permanent', 'Wishlist SSR', 'Wishlist SSR', 'Use Standard Tickets only — never spend Astral Gems'],
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
    lead: 'Complete breakdown of Star Savior Observation SSR drop probabilities, rate-up percentages, 200-pull mileage spark exchange, and banner carry-over rules.',
    sections: [
      {
        id: 'rates-table',
        heading: 'Observation Drop Rates & Pity Rules',
        paragraphs: [
          'Star Savior separates Savior Observation banners and Arcana Observation banners so your pulls never get diluted by mixed pools.',
        ],
        table: {
          headers: ['Rarity', 'Base Drop Rate', 'Pickup Share', 'Hard Pity / Spark'],
          rows: [
            ['SSR Savior / Arcana', '2.5% – 3.0%', '1.0% Featured Pickup', '200 Pulls Direct Exchange'],
            ['SR Savior / Arcana', '15.0% (1+ Guaranteed on 10-Pull)', 'Featured SR Boosted', 'Every 10-Pull'],
            ['R Arcana / Materials', 'Remaining Pool', '—', 'Converts to Observation Reports'],
          ],
        },
      },
    ],
  },
  {
    slug: 'gacha-animations',
    title: 'Gacha Animations & Guaranteed SSR Pull Tells Summary',
    category: 'Gacha',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_016.webp',
    lead: 'All visual and audio tells during the Starlight Observation summon sequence that confirm an SSR Savior, SSR Arcana, or fake-out upgrade.',
    sections: [
      {
        id: 'ssr-tells',
        heading: 'Guaranteed SSR Visual Indicators',
        paragraphs: [
          'Watch these four stages during the Observation cutscene to know immediately when an SSR has landed:',
        ],
        bullets: [
          'Doorway Constellation Glow: Gold glow indicates SR+, while prismatic rainbow starlight guarantees at least one SSR.',
          'Companion Cameo Cut-In: When NOA HQ companions appear alongside the telescope activation, SSR probability spikes to 100%.',
          ' Seal Color & Fake-Out Shatter: Purple SR crystals can crack and re-crystallize into Rainbow prisms during the final reveal.',
          'Voice Line Awakening: Character emblem flash + spoken signature pledge confirms a featured SSR Savior.',
        ],
      },
    ],
  },
  {
    slug: 'friendship-gacha',
    title: 'Friendship Gacha Rates, Rewards & Daily Pull Guide',
    category: 'Gacha',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_017.webp',
    lead: 'Everything obtainable from Friendship Point Observation and why keeping 30 active friends maximizes your weekly Affinity Gifts and Arcana fodder.',
    sections: [
      {
        id: 'friendship-overview',
        heading: 'How to Farm & Spend Friendship Points',
        paragraphs: [
          'Send and claim Friendship Points once per day from the Friends menu, and earn bonus points whenever friends borrow your Support Arcana in Rescue Journey. Spend points freely on 10-pulls for Cafe Gifts, upgrade fodder, and low-rarity Arcana uncaps.',
        ],
      },
    ],
  },
  {
    slug: 'custom-observation',
    title: 'Custom Observation Best Wishlist Characters & Arcanas',
    category: 'Gacha',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_018.webp',
    lead: 'Which permanent SSR Saviors and SSR Arcanas should you lock into your Custom Observation wishlist? Optimal slots for PvE, Gauntlet PvP, and Hard Journey.',
    sections: [
      {
        id: 'wishlist-picks',
        heading: 'Top Wishlist Targets for Standard Tickets',
        paragraphs: [
          'Always fill every wishlist slot before spending Standard Observation Tickets:',
        ],
        bullets: [
          'Priority SSR Saviors: Haydee (Cross Attack queen), Carnelia (Chaos powerhouse), Charlotte (top striker), Dana (burst caster), and Lugh (elite Defender).',
          'Priority SSR Arcanas: Customized Training to Cover Weaknesses (Power), A White Moon Shines With the Sun\'s Warmth (Endurance), and Death for the Flowers (Endurance).',
        ],
        featuredCharSlugs: ['ede', 'carnelia', 'charles', 'dana', 'lu'],
      },
    ],
  },

  /* ----------------------------- EVENTS ----------------------------- */
  {
    slug: 'valentine-event',
    title: 'Valentine Revival Event Walkthrough & Shop Exchange Priority',
    category: 'Events',
    updatedAt: 'Nov 10, 2026',
    eyecatchSrc: '/banners/starsavior/eyecatch/valentine_event.webp',
    lead: 'Complete guide to the Revival Valentine Event & Golden Fantasia stages running until Nov 13, 04:00 JST, including bonus drop Saviors, shop buyout priority, and 5-day login rewards.',
    sections: [
      {
        id: 'event-farming',
        heading: 'Event Stage Farming & Exchange Shop Priority',
        paragraphs: [
          'Clear story stages once for Astral Gems, then use Sweep Battle on the highest Hard Event boss stage you can 3-star to farm event currency efficiently.',
        ],
        bullets: [
          'Tier 1 Buyout: Special Observation Tickets, Quasar/Pulsar Core Fragments, and Limited Event Keepsake.',
          'Tier 2 Buyout: Resonance Stage Materials, Moonlight Water, and Epic Gift Boxes.',
          '5-Day Login Bonus: Claim Cafe Invitation Ticket ×10, Moonlight Water ×30,000, Polaris Support Box ×3, Standard Observation Ticket Envelope ×3, and Cosmic Cube ×1 before Nov 13, 04:00.',
        ],
      },
    ],
  },
  {
    slug: 'cosmo-gate',
    title: 'Cosmo Gate Season P7 Boss Strategy & Best Formations',
    category: 'Events',
    updatedAt: 'Nov 10, 2026',
    lead: 'High-score boss mechanics, Toughness Break windows, and recommended multi-squad teams for Cosmo Gate P7.',
    sections: [
      {
        id: 'cosmo-strategy',
        heading: 'Cosmo Gate P7 Core Mechanics & Team Building',
        paragraphs: [
          'Cosmo Gate rewards total damage dealt across limited turns while multiplying scores during Toughness Break states. Stack Cross Attack units (Haydee, Dana) with DEF Down debuffers (Yoo Mina, Frey) and save Nova Burst gauges for the exposed Break window.',
        ],
        featuredCharSlugs: ['ede', 'dana', 'yanagi-mina', 'maid-ceres', 'dress-asherah'],
      },
    ],
  },

  /* ----------------------------- RESCUE JOURNEY ----------------------------- */
  {
    slug: 'rescue-journey-normal',
    title: 'Rescue Journey Normal Mode Walkthrough & Clear Thresholds',
    category: 'Rescue Journey',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_028.webp',
    lead: 'Step-by-step walkthrough for clearing Rescue Journey Normal Mode on your first attempts, hitting mid-journey exam stat checks, and unlocking Hard Mode.',
    sections: [
      {
        id: 'normal-flow',
        heading: 'Normal Mode Turn Priority & Stat Targets',
        paragraphs: [
          'In Normal Mode, aim for 450+ in your primary offensive stat (`Power` for Strikers/Assassins, `Focus` for Casters/Rangers) and 300+ `Health` before the Final Boss test. Prioritize training nodes with 2+ Arcana support icons early to raise Bond gauges quickly.',
        ],
      },
    ],
  },
  {
    slug: 'rescue-journey-hard',
    title: 'Rescue Journey Hard Mode Walkthrough & S+/SS Rank Potentials',
    category: 'Rescue Journey',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_029.webp',
    lead: 'Advanced Hard Mode Rescue Journey strategy: unlocking Exclusive Hard Potentials, borrowing MLB Friend SSR Arcanas, and reaching SS+ Stellar Archive ratings.',
    sections: [
      {
        id: 'hard-strategy',
        heading: 'Hard Mode Deck Setup & Potential Priority',
        paragraphs: [
          'Hard Mode introduces steeper exam DPS checks and unlocks character-exclusive gold Potentials. Bring at least Resonance Stage 4+, borrow a Lv.50 friend SSR Arcana (`The Indomitable Masterpiece` or `Customized Training to Cover Weaknesses`), and avoid training below 45% Vitality.',
        ],
      },
    ],
  },
  {
    slug: 'blessing-farming',
    title: 'Blessing Farming Guide: How to Farm 3-Star Stat & Potential Factors',
    category: 'Rescue Journey',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_030.webp',
    lead: 'Complete guide to Blessing (Inheritance Factor) loops in Rescue Journey — how to roll 3-star Power/Focus blessings and [Sense of Attack] / [Sense of Break] inheritances.',
    sections: [
      {
        id: 'blessing-mechanics',
        heading: 'How Blessing Inheritance Rolls Work',
        paragraphs: [
          'Every completed Stellar Archive rolls Stat Blessings and Potential Blessings based on final stat thresholds (600+ and 900+ breakpoints unlock higher 3-star roll odds). Build two "Parent" Archives with 3-star Power/Focus + [Sense of Attack] / [Sense of Break] first, then use them continuously to breed endgame PvP/Raid Archives.',
        ],
      },
    ],
  },
  {
    slug: 'shared-events',
    title: 'Rescue Journey Shared Events Complete Choice & Reward List',
    category: 'Rescue Journey',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_031.webp',
    lead: 'Reference chart for common non-Arcana Shared Events during Rescue Journey — pick Power +15, Focus +15, All Stats +5, or safe Vitality recovery every time.',
    sections: [
      {
        id: 'shared-table',
        heading: 'Key Shared Event Choices Quick Reference',
        paragraphs: [
          'Shared events trigger regardless of your equipped Arcana deck. Memorize these safe picks or search any event live in our Event Choice Checker:',
        ],
        table: {
          headers: ['Shared Event', 'Top Choice', 'Outcome'],
          rows: [
            ['Midnight Tactical Drill', 'Heavy weapon / Precision logs', 'Power +15 or Focus +15'],
            ['Starlight Conservatory Tea Break', 'Share Polaris Herbal Blend', 'All Stats +5 & Vitality +15'],
            ['Wandering NOA Instructor', 'Offensive / Toughness coaching', '[Sense of Attack] or [Sense of Break] Lv.1'],
            ['Sudden Rain at the Outpost', 'Dry off inside the lounge', 'Vitality +25 (Zero Slump Risk)'],
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
    lead: 'Beginner-to-expert explanation of Rescue Journey mechanics: the 5 Journey Stats (`Power`, `Health`, `Endurance`, `Focus`, `Protect`), Bond Tag bursts, Condition stages, and Rest timing.',
    sections: [
      {
        id: 'five-stats',
        heading: 'Understanding the 5 Rescue Journey Stats',
        paragraphs: [
          'Stats raised inside Rescue Journey convert into your Savior\'s permanent Stellar Archive combat stats:',
        ],
        bullets: [
          'Power: Boosts primary offensive scaling and physical/skill throughput.',
          'Health: Raises Max HP pool and HP-scaling Defender/Healer multipliers.',
          'Endurance: Increases DEF and damage mitigation under boss AoEs.',
          'Focus: Improves Critical Rate, Critical Damage, and Effect Hit accuracy.',
          'Protect: Enhances Toughness resilience, Effect Resistance, and shield stability.',
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
    lead: 'Failing mid-run exams or stuck at B/A Archive ranks? Follow these 4 guaranteed steps to clear Rescue Journey and push SS+ total evaluations.',
    sections: [
      {
        id: 'four-fixes',
        heading: '4 Immediate Fixes When Failing Rescue Journey',
        paragraphs: [
          'As AppMedia highlights, clearing Rescue Journey comes down to pre-run preparation and concentrated tag stacking:',
        ],
        bullets: [
          '1. Raise Resonance Stage First: Resonance directly adds flat starting Journey Stats before Turn 1 even begins.',
          '2. Equip Stronger Parent Stellar Archives: Even a failed run benefits massively from borrowing a high-blessing Archive.',
          '3. Stack 2-to-3 Matching Stat Tags: Do not spread 5 different tags evenly — stack 2 Power + 2 Focus + 1 Health (or borrow a Lv.50 Friend SSR).',
          '4. Keep Condition at Good/Great: Early Outing/Cafe turns boost training multipliers by 10%–20% across the entire run.',
        ],
      },
    ],
  },

  /* ----------------------------- OPERATIONS ----------------------------- */
  {
    slug: 'operation-1-5',
    title: 'Operation 1-5 Boss Walkthrough & Recommended Beginner Team',
    category: 'Operations',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_035.webp',
    lead: 'How to beat Operation 1-5 easily on Day 1: breaking the boss Toughness bar before its charged AoE and building around free SSRs Asherah & Trish.',
    sections: [
      {
        id: 'op-1-5-tips',
        heading: 'Operation 1-5 Boss Strategy',
        paragraphs: [
          'Operation 1-5 teaches Star Savior\'s core Toughness Break loop. Hold your Special Skills until the boss telegraphs its charged attack, then chain Asherah + Trish + a Defender to deplete Toughness to zero, canceling the boss turn and triggering Armor Break bonus damage.',
        ],
        featuredCharSlugs: ['asherah', 'trish', 'vesta', 'bella'],
      },
    ],
  },
  {
    slug: 'operation-2-12',
    title: 'Operation 2-12 Boss Walkthrough & Shield Counter Strategy',
    category: 'Operations',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_036.webp',
    lead: 'How to defeat the Operation 2-12 chapter boss: handling barrier phases, elemental advantage (`Sun > Star > Moon`), and upgrading Stellar Archives past C-Rank.',
    sections: [
      {
        id: 'op-2-12-tips',
        heading: 'Operation 2-12 Key Mechanics',
        paragraphs: [
          'If your squad stalls against the 2-12 boss barrier, run one Normal Rescue Journey to equip every party member with at least a B/A-Rank Stellar Archive and bring buff-strip or DEF-down support so burst lands cleanly after Toughness Break.',
        ],
      },
    ],
  },
  {
    slug: 'operation-3-15',
    title: 'Operation 3-15 Boss Walkthrough, Recommended Party & Archive Targets',
    category: 'Operations',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_037.webp',
    lead: 'Clearing the notorious Operation 3-15 mid-game wall: cleansing stacking debuffs, surviving AoE enrage turns, and hitting Lv.40+ Resonance 3 benchmarks.',
    sections: [
      {
        id: 'op-3-15-tips',
        heading: 'Overcoming the Operation 3-15 Progression Wall',
        paragraphs: [
          'Operation 3-15 punishes pure glass-cannon teams with multi-target debuffs and heavy turn-4 AoE burst. Bring a dedicated Defender (Lugh, Charlotte, or Besta) plus a cleanser/healer (Elisa, Frey, or Vera), and focus down add spawns first so the boss cannot stack ATK buffs.',
        ],
        featuredCharSlugs: ['lu', 'elisa', 'ede', 'dana', 'vesta', 'bella'],
      },
    ],
  },
  {
    slug: 'operations-summary',
    title: 'Operations Main Story Walkthrough Summary & Unlocked Features List',
    category: 'Operations',
    updatedAt: 'Nov 10, 2026',
    lead: 'Complete milestone chart of every game mode, NOA Outpost upgrade, and endgame dungeon unlocked as you clear Operations Chapters 1 through 8.',
    sections: [
      {
        id: 'unlock-table',
        heading: 'Feature Unlock Milestones by Operation Stage',
        paragraphs: [
          'Push Operations as far as your Combat Power allows each day — higher Operation chapters permanently raise your idle NOA Support Funds hourly yield!',
        ],
        table: {
          headers: ['Operation Stage', 'Unlocked System / Mode'],
          rows: [
            ['Operation 1-2', 'Observation (Gacha) & Mailbox Unlocks — Reroll Point'],
            ['Operation 1-5', 'Rescue Journey Normal Mode & Stellar Archive Equip'],
            ['Operation 2-4', 'NOA Support Funds Idle Generator & Sweep Battle'],
            ['Operation 2-12', 'Rescue Corps HQ Commissions, Friends & Guild System'],
            ['Operation 3-15', 'Gauntlet (PvP), Cube Palace & Rescue Journey Hard Mode'],
            ['Operation 4-10+', 'Interstellar Corridor, Flashpoint & Precision Crafting'],
          ],
        },
      },
    ],
  },

  /* ----------------------------- CUBE PALACE ----------------------------- */
  {
    slug: 'cube-palace',
    title: 'Cube Palace Complete Walkthrough Summary & Cheat Codes List',
    category: 'Cube Palace',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_054.webp',
    lead: 'Master guide to Star Savior\'s roguelike Cube Palace mode (STEP 1 Interface through EXTRA 8 Register), including hidden Cheat Code relic combinations and weekly Cosmic Cube rewards.',
    sections: [
      {
        id: 'cheat-codes',
        heading: 'Cube Palace Cheat Code Relic Synergies',
        paragraphs: [
          'Collecting matching terminal nodes activates hidden Cheat Code passives inside Cube Palace runs:',
        ],
        table: {
          headers: ['Stage Tier', 'Code Name', 'Recommended Strategy'],
          rows: [
            ['STEP 1 – STEP 3', 'Interface / Kernel / Assembler', 'Stack Crit + Action Gauge relics for fast 1-turn room sweeps'],
            ['STEP 4 – STEP 5', 'Firmware / Mechanics', 'Pick Toughness Shred + Shield-on-Turn relics before Floor Final Boss'],
            ['EXTRA 6 – EXTRA 8', 'Linker / Bootloader / Register', 'Combine Cross Attack / Evade Cheat Codes with cleanser sustain'],
          ],
        },
      },
    ],
  },
  ...[
    ['cube-step-1', 'Cube Palace STEP 1: Interface Walkthrough & Best Relics', '/banners/starsavior/buttons/btn_039.webp', 'Entry-tier Cube Palace sector. Stack offensive ATK% and Crit Rate data chips to sweep elite nodes cleanly.'],
    ['cube-step-2', 'Cube Palace STEP 2: Kernel Walkthrough & Boss Guide', '/banners/starsavior/buttons/btn_040.webp', 'Second sector introducing shielded sentry bosses. Prioritize Toughness Break efficiency nodes and single-target Strikers.'],
    ['cube-step-3', 'Cube Palace STEP 3: Assembler Walkthrough & Boss Guide', '/banners/starsavior/buttons/btn_041.webp', 'Mid-tier Cube Palace sector featuring multi-wave AoE encounters. Bring at least one AoE Caster or Ranger plus a healer.'],
    ['cube-step-4', 'Cube Palace STEP 4: Firmware Walkthrough & Boss Guide', '/banners/starsavior/buttons/btn_042.webp', 'Debuff-heavy Firmware sector. Select Effect Resistance or Cleanse-on-Ultimate data chips before entering the boss gate.'],
    ['cube-step-5', 'Cube Palace STEP 5: Mechanics Walkthrough & Boss Guide', '/banners/starsavior/buttons/btn_043.webp', 'Final standard Cube Palace sector. Save Nova Force across penultimate rooms so you open the Boss fight with double Nova Burst.'],
    ['cube-extra-6', 'Cube Palace EXTRA 6: Linker High-Difficulty Guide', '/banners/starsavior/buttons/btn_044.webp', 'First Extra overclock sector. Enemies gain speed and counter stances — bring buff strip or Defend Forward ignore skills.'],
    ['cube-extra-7', 'Cube Palace EXTRA 7: Bootloader High-Difficulty Guide', '/banners/starsavior/buttons/btn_045.webp', 'Endgame sector requiring sustained turn cycling and defensive barriers to survive boss overdrive phases.'],
    ['cube-extra-8', 'Cube Palace EXTRA 8: Register Final Boss & Cheat Code Setup', '/banners/starsavior/buttons/btn_046.webp', 'Apex Cube Palace challenge. Stack Cross Attack + Action Gauge Cheat Codes alongside SS/SSS-Rank Stellar Archives.'],
  ].map(([slug, title, banner, desc]): StarSaviorGuideArticle => ({
    slug,
    title,
    category: 'Cube Palace',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: banner,
    lead: desc,
    sections: [
      {
        id: 'sector-guide',
        heading: `${title.split(' Walkthrough')[0]} Clear Strategy`,
        paragraphs: [
          desc,
          'Path toward Elite Combat rooms in Floor 1 while your HP is full to snowball gold-tier Code Relics early, then hit Repair Terminals right before the Final Sector Boss.',
        ],
        featuredCharSlugs: ['ede', 'carnelia', 'maid-ceres', 'lu', 'elisa'],
      },
    ],
  })),

  /* ----------------------------- STRATEGY GUIDES ----------------------------- */
  {
    slug: 'party-formations',
    title: 'Best Party Formations & Team Building Guide (PvE / Boss / PvP)',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_048.webp',
    lead: 'Optimal 4-unit Star Savior party compositions: balanced 1 Defender + 1 Supporter + 2 DPS templates, Cross Attack boss-shred teams, and F2P early-game squads.',
    sections: [
      {
        id: 'core-formula',
        heading: 'Golden 4-Unit Party Template',
        paragraphs: [
          'Position your highest-HP Defender in the Front slot to absorb aggro, pair them with a healer/buffer Supporter, and run one main DPS + one sub-DPS/debuffer matching enemy elemental weakness.',
        ],
        bullets: [
          'Top Meta Boss Team: Lugh (Defender) + Haydee (Cross Attack DPS) + Dana or Maid Ceres + Elisa (Supporter).',
          'Chaos / Order High-Ceiling Team: Carnelia + Amora + Luna: Summer Starlight + Carmen: Eternal Promise.',
          'F2P Starter Team: Besta (SR Defender) + Asherah (Free SSR) + Trish (Free SSR) + Vera (SR Supporter).',
        ],
        featuredCharSlugs: ['lu', 'ede', 'dana', 'maid-ceres', 'elisa', 'vesta', 'asherah', 'trish'],
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
        heading: 'Recommended 5+1 Tag Ratios',
        paragraphs: [
          'Never run 5 random tags — concentrate 3 to 4 cards into two primary tags to trigger multi-rainbow Specialty Trainings:',
        ],
        bullets: [
          'Attackers (Striker / Assassin / Caster / Ranger): 2–3 Power + 2 Endurance/Focus + 1 Health (Borrow Lv.50 The Indomitable Masterpiece or Customized Training to Cover Weaknesses).',
          'Defenders & HP Healers: 2–3 Health + 2 Endurance/Protect + 1 Focus/Speed utility card.',
        ],
        featuredArcanaSlugs: ['arcana-79766540', 'arcana-80012824', 'arcana-80139832', 'arcana-80521390'],
      },
    ],
  },
  {
    slug: 'quasar-cores',
    title: 'Quasar Core Priority Guide: Who Should You Upgrade First?',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_050.webp',
    lead: 'Quasar Cores are scarce high-tier skill enhancement materials. Invest them strictly into Ultimate cooldown reductions and main-DPS multipliers first.',
    sections: [
      {
        id: 'quasar-priority',
        heading: 'Best Saviors for Quasar Core Investment',
        paragraphs: [
          'Always hit the "Cooldown -1 Turn" skill level breakpoint on your primary SSR carry and main healer before maxing Basic Skills.',
        ],
        featuredCharSlugs: ['ede', 'carnelia', 'maid-ceres', 'amora', 'dana', 'charles'],
      },
    ],
  },
  {
    slug: 'pulsar-cores',
    title: 'Pulsar Core Priority Guide: Best Characters & Acquisition Sources',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_051.webp',
    lead: 'How to farm Pulsar Cores weekly from events, Apocalypse Shop, and Cosmo Gate, and which Saviors gain the largest passive power spikes.',
    sections: [
      {
        id: 'pulsar-priority',
        heading: 'Pulsar Core Usage Guidelines',
        paragraphs: [
          'Spend Pulsar Cores on Saviors you bring across multiple modes (Operations, Cosmo Gate, Flashpoint, and Gauntlet) rather than niche single-element fillers.',
        ],
      },
    ],
  },
  {
    slug: 'break-skills',
    title: 'Best Break Skills Tier List & How to Unlock Them',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_052.webp',
    lead: 'Which Commander Break Skills should you equip during boss fights? Complete breakdown of DEF shred, Action Gauge push, and heal/shield Break Skills.',
    sections: [
      {
        id: 'break-ranking',
        heading: 'Recommended Break Skills by Content',
        paragraphs: [
          'When an enemy\'s Toughness gauge hits zero, activating an offensive Vulnerability / DEF-Down Break Skill right before Nova Burst Ultimate chains amplifies total raid damage by 30%+.',
        ],
      },
    ],
  },
  {
    slug: 'flashpoint',
    title: 'Flashpoint Endgame Bosses Walkthrough & Multi-Squad Guide',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_053.webp',
    lead: 'Boss mechanics and counter teams for Flashpoint encounters: Gregory, Carbon Punk, Void Nirvana, Krunnadun, Void Annihilator, Happy No. 68, Magician, and more.',
    sections: [
      {
        id: 'flashpoint-tips',
        heading: 'Preparing Multiple Squads for Flashpoint',
        paragraphs: [
          'Because Flashpoint locks equipment and Saviors per stage, build at least two Defenders (e.g., Lugh + Besta) and two healers (e.g., Elisa/Frey + Vera) alongside elemental DPS cores.',
        ],
      },
    ],
  },
  {
    slug: 'interstellar-corridor',
    title: 'Interstellar Corridor Tower Walkthrough & Floor Rewards',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_055.webp',
    lead: 'Climbing the Interstellar Corridor elemental & general floors for massive one-time Astral Gems, Observation Tickets, and Resonance materials.',
    sections: [
      {
        id: 'corridor-tips',
        heading: 'Tips for Clearing Elemental Restriction Floors',
        paragraphs: [
          'Swap your best +15 Speed/Crit equipment sets freely onto your Sun, Star, and Moon specialists when tackling attribute-locked floors — gear swapping has zero cost!',
        ],
      },
    ],
  },
  {
    slug: 'sr-awakening',
    title: 'Guardian Star Awakening (SR Specialty Unlock) Priority Guide',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_056.webp',
    lead: 'Which SR Saviors transform most dramatically after Guardian Star Awakening? Detailed priority order for Besta, Naru, Clarissa, Claire, and Vera.',
    sections: [
      {
        id: 'awakening-order',
        heading: 'Top SR Awakening Candidates',
        paragraphs: [
          'Guardian Star Awakening upgrades SR skill multipliers and unlocks new passive mechanics. Awaken Besta (for endgame Flashpoint tanking) and Naru/Clarissa (for Star-attribute bossing) first.',
        ],
        featuredCharSlugs: ['vesta', 'naru', 'clarissa', 'claire', 'bella'],
      },
    ],
  },
  {
    slug: 'precision-crafting',
    title: 'Precision Crafting Guide: How to Craft God-Roll T6 Equipment',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_057.webp',
    lead: 'Never waste Precision Crafting cores on left-side flat-main gear! Always craft Right-Side Boots (SPD Main) and Necklaces/Rings (Crit Rate / Crit DMG / ATK%) with matching set bonuses.',
    sections: [
      {
        id: 'crafting-rules',
        heading: 'Optimal Precision Crafting Main & Substat Targets',
        paragraphs: [
          '1. Boots -> Speed Main Stat on Speed or Attack/Crit sets. 2. Necklace -> Crit Damage% or Crit Rate%. 3. Ring -> ATK% (DPS) or HP% / Effect Hit% (Tanks & Debuffers).',
        ],
      },
    ],
  },
  {
    slug: 'apocalypse-shop',
    title: 'Apocalypse Shop Best Items to Exchange Weekly & Monthly',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_058.webp',
    lead: 'Complete exchange priority for the Apocalypse Shop so you never miss discounted Observation Tickets, Quasar/Pulsar Core shards, or Precision Crafting materials.',
    sections: [
      {
        id: 'apocalypse-priority',
        heading: 'Apocalypse Shop Tiered Exchange Order',
        paragraphs: [
          'Always clear limited-stock discounted Observation Tickets and Core Fragments before reset; skip low-tier enhancement stones that drop abundantly from NOA Support Funds.',
        ],
      },
    ],
  },
  {
    slug: 'paid-packs',
    title: 'Best Value Paid Packs & Monthly Pass Efficiency Guide',
    category: 'Strategy',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_059.webp',
    lead: 'Pull-per-dollar value comparison across Monthly Astral Passes, Rescue Season Passes, Story Milestone Bundles, and 1st Anniversary Limited Packs.',
    sections: [
      {
        id: 'pack-value',
        heading: 'Highest Efficiency Packs for Light & Mid Spenders',
        paragraphs: [
          '1. Monthly Astral Gem Pass (highest gems-per-dollar). 2. Chapter Clear / Commander Level Growth Pack. 3. 1st Anniversary SSR Selector / Pickup Ticket Bundles.',
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
    lead: 'Chronological log of Star Savior game updates, Maid Ceres implementation, Valentine Revival adjustments, Cosmo Gate P7, and QoL improvements.',
    sections: [
      {
        id: 'recent-updates',
        heading: 'November 2026 Patch Highlights',
        bullets: [
          'Added SSR Savior Maid Ceres & SSR Arcana Grueling Ordeal Pickup Observation.',
          'Opened Cosmo Gate Season P7 & Revival Valentine Event stages.',
          'Added Guardian Star Awakening expansions and Rescue Journey Sweep / Event Skip QoL refinements.',
        ],
        paragraphs: [],
      },
    ],
  },

  /* ----------------------------- MECHANICS VERIFICATION ----------------------------- */
  {
    slug: 'cross-attack',
    title: 'Cross Attack Mechanics Verification, Trigger Rates & Best Characters',
    category: 'Mechanics',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_063.webp',
    lead: 'In-depth verification of Star Savior\'s Cross Attack (Dual-Attack) mechanic: base vs boosted trigger chance, Toughness shred contribution, and why Haydee dominates boss content.',
    sections: [
      {
        id: 'cross-verification',
        heading: 'Verified Cross Attack Rules',
        paragraphs: [
          'When an ally uses a Basic Skill (or qualifying Cross-trigger skill), another ally with Cross Attack can follow up using their own Basic Skill without consuming their turn.',
        ],
        bullets: [
          'Toughness & On-Hit Effects Apply Fully: Cross Attacks shave enemy Toughness and trigger Basic Skill debuffs/Action Gauge boosts!',
          'Cooldowns Do Not Tick Twice: Only Basic Skill effects fire unless explicitly stated by a Savior\'s passive.',
          'Top Cross Attack Synergies: Haydee, Dana, and high-SPD Rangers.',
        ],
        featuredCharSlugs: ['ede', 'dana', 'rosalia'],
      },
    ],
  },
  {
    slug: 'revenge-attack',
    title: 'Revenge Attack (Counterattack) Mechanics Verification & Best Builds',
    category: 'Mechanics',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_064.webp',
    lead: 'How Revenge Attack counter stances stack with Counter Equipment sets, AoE triggers, and aggro manipulation in PvE and Gauntlet PvP.',
    sections: [
      {
        id: 'revenge-rules',
        heading: 'Verified Revenge Attack Interactions',
        paragraphs: [
          'Revenge Attack fires after the enemy finishes resolving their attack animation, provided the defender is not stunned or asleep. Multi-target enemy AoEs can trigger multiple Revenge Attacks simultaneously across your team!',
        ],
        featuredCharSlugs: ['swimsuit-luna', 'fei', 'anna', 'lu'],
      },
    ],
  },
  {
    slug: 'evade',
    title: 'Evade Mechanics Verification: Damage Reduction, Debuff Dodge & Caps',
    category: 'Mechanics',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_065.webp',
    lead: 'What actually happens when an attack is Evaded in Star Savior? Verified damage reduction multiplier, Critical Hit negation, and debuff avoidance rules.',
    sections: [
      {
        id: 'evade-rules',
        heading: 'Why Evade Is Broken in Gauntlet PvP',
        paragraphs: [
          'Successful Evade completely prevents Critical Hits, slashes incoming damage, and blocks on-hit debuffs from landing (ignoring non-attack strip skills). Pairing Fei\'s innate 50% Evade with Amora\'s Hit Rate Down pushes effective dodge consistency near the cap.',
        ],
        featuredCharSlugs: ['fei', 'amora'],
      },
    ],
  },
  {
    slug: 'defend-forward',
    title: 'Defend Forward Mechanics Verification: Damage Mitigation & Counters',
    category: 'Mechanics',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_066.webp',
    lead: 'How the Defend Forward stance reduces incoming damage before calculation, when its charges expire, and which Assassins bypass Defend Forward completely.',
    sections: [
      {
        id: 'defend-forward-rules',
        heading: 'Verified Defend Forward Stance Rules',
        paragraphs: [
          'Defend Forward mitigates incoming direct hit damage and protects frontline Defenders against single-target nukes, but skills with "Ignores Defend Forward" (such as Claire and specialized Assassins) cut straight through it.',
        ],
        featuredCharSlugs: ['claire', 'lu', 'charles'],
      },
    ],
  },
  {
    slug: 'armor-break',
    title: 'Armor Break (Costume Destruction) Mechanics & Display Settings Toggle',
    category: 'Mechanics',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_067.webp',
    lead: 'How Armor Break battle visuals trigger under heavy damage/break thresholds and how to toggle Armor Break illustrations on or off in Settings (for public/stream play).',
    sections: [
      {
        id: 'armor-break-toggle',
        heading: 'How to Toggle Armor Break Visuals On / Off',
        paragraphs: [
          'Open Menu -> Settings -> Graphics / Battle Presentation -> Armor Break Display. Setting it to OFF keeps Saviors in their standard battle attire regardless of HP loss without changing any gameplay stats.',
        ],
      },
    ],
  },
  {
    slug: 'hp-recovery',
    title: 'HP Recovery Verification: Healing Scaling, Crit Heals & Moon Bonus',
    category: 'Mechanics',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_068.webp',
    lead: 'Formula verification for outgoing Healing Bonus vs Target Max HP scaling vs Caster Max HP scaling across Elisa, Frey, Carmen, and Vera.',
    sections: [
      {
        id: 'healing-verification',
        heading: 'Key Takeaways From HP Recovery Testing',
        paragraphs: [
          'Read each healer\'s skill scaling row carefully: Caster Max-HP healers want triple HP% / SPD equipment and Health-tag Stellar Archives, whereas Target Max-HP percentage heals scale automatically on high-HP Defenders.',
        ],
        featuredCharSlugs: ['elisa', 'frey', 'bride-carmen', 'bella'],
      },
    ],
  },

  /* ----------------------------- BEGINNER & SYSTEM GUIDES ----------------------------- */
  ...[
    ['beginner-progression', 'Beginner Early-Game Progression Roadmap: First 7 Days Guide', '/banners/starsavior/buttons/btn_070.webp', 'Clear Operation 1-5 to unlock Rescue Journey, build B+ Stellar Archives for your main 4 Saviors, push Operations as far as possible before daily reset to level NOA Support Funds, and complete beginner mission boards for free SSR rewards.'],
    ['how-to-reroll', 'Fast Reroll Method: How to Reroll in 5 Minutes & Account Reset Steps', '/banners/starsavior/buttons/btn_071.webp', 'Sign in with a Guest account, skip cutscenes through Operation 1-2 (~5 minutes), claim pre-registration + active Coupon Codes from Mail, pull Pickup Observation, and use Settings -> Account -> Reset Server Data to retry instantly without redownloading!'],
    ['daily-routine', 'Daily Checklist: Everything You Must Do Every Day Before 04:00 Reset', '/banners/starsavior/buttons/btn_072.webp', '1. Claim NOA Support Funds ( + free Fast Claim). 2. Spend Willpower via Sweep Battle on Event or Resonance stages. 3. Check in to Guild & send Friend Points. 4. Complete 1 Rescue Journey run & Gauntlet daily entries. 5. Claim Daily Mission Astral Gems.'],
    ['equipment-guide', 'Recommended Equipment Sets & Stat Builds by Class', '/banners/starsavior/buttons/btn_073.webp', 'Attackers run 4-pc Attack or Crit DMG + 2-pc Crit Rate; Fast Openers/Supporters run 4-pc Speed + 2-pc HP/DEF; Defenders stack HP%/DEF% or Counter sets depending on aggro mechanics.'],
    ['shop-priority', 'Recommended Shop Purchases: General, Arena, Guild & Observation Shops', '/banners/starsavior/buttons/btn_074.webp', 'Buy discounted Observation Tickets, weekly Skill Core shards, and Moonlight Water stamina items; never spend Astral Gems on Gold or basic gear boxes in the General Shop.'],
    ['upgrade-systems', 'Character Upgrade Systems Summary & Investment Priority Order', '/banners/starsavior/buttons/btn_075.webp', 'Upgrade priority for maximum Combat Power gain per resource: 1. Character Level -> 2. Resonance Stage -> 3. Stellar Archive Rank (via Rescue Journey) -> 4. Right-Side Equipment (+12/+15) -> 5. Skill Levels -> 6. Limit Break / Awakening.'],
    ['battle-system', 'Battle System & Turn-Based Combat Tips Explained', '/banners/starsavior/buttons/btn_076.webp', 'Master Action Gauge order, Toughness Break stun windows, Nova Force generation, and Nova Burst skill empowerments to clear stages 20% above your Combat Power.'],
    ['attribute-matchups', 'Attribute Matchups Chart: Sun, Star, Moon, Order & Chaos', '/banners/starsavior/buttons/btn_077.webp', 'Sun beats Star, Star beats Moon, and Moon beats Sun (+advantage damage & +Crit Rate). Order and Chaos deal mutual bonus damage to each other without taking elemental penalty against the main triangle.'],
    ['cosmic-attributes', 'What Are Cosmic Attributes? Order, Chaos & Special Synergies', '/banners/starsavior/buttons/btn_078.webp', 'Cosmic / Order / Chaos units bring specialized mechanics (like Amora and Carnelia) that never suffer disadvantage against Sun/Star/Moon bosses, making them universal investments across raid seasons.'],
    ['character-stats', 'Character Stats Explained: Combat Stats vs Rescue Journey Stats', '/banners/starsavior/buttons/btn_079.webp', 'Complete dictionary of ATK, DEF, HP, SPD, Crit Rate, Crit DMG, Effect Hit, Effect Resistance, Toughness Damage, and how Journey Stats convert into Stellar Archive bonuses.'],
    ['stellar-archive', 'Stellar Archive Guide: How to Equip, Lock & Inherit Archives', '/banners/starsavior/buttons/btn_080.webp', 'Every Rescue Journey completion saves a Stellar Archive containing final stats, unlocked Potentials, and Blessing inheritance stars. Lock your best PvE, PvP, and 3-star Blessing parent Archives immediately!'],
    ['daily-reset', 'Daily Reset Time (04:00 JST) & Weekly Schedule Summary', '/banners/starsavior/buttons/btn_081.webp', 'Star Savior resets daily missions, sweeps, shop refreshes, and login bonuses at 04:00 JST every day, while weekly missions, Gauntlet seasons, and shop caps reset Mondays at 04:00 JST.'],
    ['willpower', 'Willpower (Stamina) Usage Priority & Moonlight Water Recovery', '/banners/starsavior/buttons/btn_082.webp', 'Never let Willpower sit capped! Spend daily Willpower on active Event stages first, then Resonance materials and Equipment dungeons once high-tier stages are 3-starred.'],
    ['sweep-overlap', 'Sweep Battle & Overlap Auto-Repeat Guide', '/banners/starsavior/buttons/btn_083.webp', 'Once you clear any Operation, Event, or Resource stage with 3 stars, use Sweep Battle for instant zero-wait clears or Overlap background repeat farming while managing your roster.'],
    ['noa-support-funds', 'NOA Support Funds Guide: Maximizing Idle Rewards & Fast Claim', '/banners/starsavior/buttons/btn_084.webp', 'NOA Support Funds accumulate Gold, Character EXP, and upgrade materials 24/7 based on your highest cleared Operation stage. Always push story BEFORE using your daily Fast Claim!'],
    ['rescue-hq', 'Rescue Corps HQ Guide: Commissions, Cafe & Facility Upgrades', '/banners/starsavior/buttons/btn_085.webp', 'Upgrade HQ dispatch slots and Cafe facilities early for passive Astral Gems, Affinity Gifts, and stamina items every day.'],
    ['profile-settings', 'Profile Settings Guide: Support Unit, Arcana Loan & Name Change', '/banners/starsavior/buttons/btn_086.webp', 'Set your highest-limit-break SSR Arcana and strongest Savior on your Profile Support slot so friends borrow them daily for passive Friendship Points!'],
    ['lobby-settings', 'Lobby Screen Customization: Live2D Saviors, Skins & BGM', '/banners/starsavior/buttons/btn_087.webp', 'Customize up to multiple lobby presets with your favorite Savior Live2D animations, Ark Point memorial backgrounds, and unlocked soundtrack themes.'],
    ['birthday-settings', 'How to Set Your Birthday & Claim Special Savior Birthday Gifts', '/banners/starsavior/buttons/btn_088.webp', 'Register your month and day in Profile Settings to unlock voiced birthday greetings from your Saviors and special commemorative gifts.'],
    ['friends-guide', 'How to Add Friends & Borrow Level 50 Support Arcanas', '/banners/starsavior/buttons/btn_089.webp', 'Fill your Friends list with active Commanders holding Lv.50 SSR Arcanas — borrowing one strong friend Arcana can jump your Rescue Journey rank by two full tiers!'],
    ['guild-guide', 'Guild Guide: Daily Check-In, Aid & Guild Shop Rewards', '/banners/starsavior/buttons/btn_090.webp', 'Join an active Guild as soon as Operation 2-12 is cleared to earn daily check-in currency, weekly Observation shards, and cooperative raid rewards.'],
    ['steam-pc', 'How to Play Star Savior on PC (Steam) & Cross-Platform Account Sync', '/banners/starsavior/buttons/btn_091.webp', 'Install Star Savior on Steam for crisp widescreen 60/120 FPS 3D visuals. Link your mobile account via Google/Apple/Account Link BEFORE launching Steam so you log into your existing progress!'],
    ['account-linking', 'Account Linking & Safe Data Transfer Guide (Avoid Losing Guest Data)', '/banners/starsavior/buttons/btn_092.webp', 'As soon as you finish rerolling, bind your Guest account in Settings -> Account to prevent data loss during app updates or device transfers across iOS, Android, and Steam.'],
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
        heading: 'Key Takeaways & Step-by-Step Tips',
        paragraphs: [
          text,
          'Check the related rankings and database links below to pair this system with optimal Saviors and Arcana cards.',
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
    title: 'Ark Point Memorial Illustrations & How to Unlock Them',
    category: 'Database',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_110.webp',
    lead: 'Complete gallery and unlock conditions for Savior Ark Point memorial scenes earned via Affinity milestones and Rescue Journey completions.',
    specialKind: 'ark-points-db',
    sections: [],
  },
  {
    slug: 'birthday-calendar',
    title: 'All Character Birthdays Calendar & Affiliations List',
    category: 'Database',
    updatedAt: 'Nov 10, 2026',
    buttonBannerSrc: '/banners/starsavior/buttons/btn_111.webp',
    lead: 'Complete birthday list, height, and faction directory for all playable Saviors in Star Savior.',
    specialKind: 'birthday-db',
    sections: [],
  },
  {
    slug: 'voice-actors',
    title: 'Voice Actors (CV) Cast List for All Characters',
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
    lead: 'Visual showcase of all alternate-attire Saviors (Bunnygirl, Waltz of Starlight, Eternal Promise, Blessing in Bloom, Summer Starlight, Sunshine Cat, Maid) and announced upcoming skins.',
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
    lead: 'Ask party-building questions, share Rescue Journey SS+ Archive tips, and discuss upcoming Star Savior banners with fellow English Commanders.',
    specialKind: 'community-board',
    boardSeedPosts: [
      {
        author: 'Commander_Vega',
        tag: 'Global / Steam',
        timestamp: '18 mins ago',
        body: 'Just cleared Operation 3-15 using Lugh + Haydee + Maid Ceres + Vera! Raising Lugh to Resonance 4 before running Rescue Journey made a night-and-day difference.',
      },
      {
        author: 'NoaTactician',
        tag: 'JP Server (English)',
        timestamp: '1 hour ago',
        body: 'Don\'t forget to redeem GIFTREADYANNIV1ST and ENDOFTHEJOURNEY before Nov 27 — 10 pulls + 1,500 gems right away.',
      },
      {
        author: 'PolarisRunner',
        tag: 'Daily Active',
        timestamp: '3 hours ago',
        body: 'The Event Choice Checker here saved my Hard run — picked the +25 Vitality option on Sudden Rain and hit my first SS+ Archive on Charlotte!',
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
    lead: 'Share your Commander UID and your pinned Support Arcana (e.g., Lv.50 The Indomitable Masterpiece or Customized Training to Cover Weaknesses) to exchange daily Friendship Points!',
    specialKind: 'community-board',
    boardSeedPosts: [
      {
        author: 'AscalonLead',
        tag: 'MLB SSR Arcana Support',
        timestamp: '25 mins ago',
        body: 'UID: 80419255 — Pinned Lv.50 MLB "The Indomitable Masterpiece" (Power) + SS Maid Ceres. 6 friend slots open for daily active players!',
      },
      {
        author: 'StarlightKira',
        tag: 'JP Server (English)',
        timestamp: '2 hours ago',
        body: 'UID: 71930488 — Sharing Lv.50 "Customized Training to Cover Weaknesses" (Focus). Accepting all English Commanders grinding Hard Rescue Journey!',
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
    lead: 'Recruit active members for your Rescue Corps Guild or find an English-speaking guild for daily check-in rewards and Cosmo Gate theorycrafting.',
    specialKind: 'community-board',
    boardSeedPosts: [
      {
        author: 'Guild: PolarisEN',
        tag: 'Global / Steam',
        timestamp: '42 mins ago',
        body: '[PolarisEN] Lv.8 English Guild recruiting 3 daily check-in members! Casual-competitive Cosmo Gate & Discord blessing sharing. Apply in-game!',
      },
      {
        author: 'Guild: AstralVanguard',
        tag: 'Daily Active',
        timestamp: '4 hours ago',
        body: '[AstralVanguard] Top 5% Cosmo Gate English/Bilingual guild looking for 2 active Commanders (Resonance 4+ roster). Daily buffs active 24/7!',
      },
    ],
    sections: [],
  },
];

export function getStarSaviorGuideBySlug(slug: string): StarSaviorGuideArticle | undefined {
  return STAR_SAVIOR_GUIDES.find((g) => g.slug === slug);
}
