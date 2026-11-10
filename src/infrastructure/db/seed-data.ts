import type { TierRank } from '../../domain/schemas';

export const STAR_SAVIOR_GAME_SEED = {
  "slug": "starsavior",
  "name": "Star Savior",
  "subtitle": "Complete Database, Tier Lists, Journey Training & Arcana Encyclopedia",
  "patchVersion": "v2.4 Global / JP Meta",
  "serverStatus": "LIVE",
  "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/images/icon/icon_starsavior.webp",
  "bannerUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_EASTERN_SWORDMASTER_SSR_01.webp",
  "elementsConfig": [
    {
      "key": "Sun",
      "label": "Sun",
      "colorHex": "#f97316",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp"
    },
    {
      "key": "Star",
      "label": "Star",
      "colorHex": "#eab308",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp"
    },
    {
      "key": "Moon",
      "label": "Moon",
      "colorHex": "#38bdf8",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp"
    },
    {
      "key": "Order",
      "label": "Order",
      "colorHex": "#e2e8f0",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-65502-20251114140221.webp"
    },
    {
      "key": "Chaos",
      "label": "Chaos",
      "colorHex": "#a855f7",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-10703-20251114140221.webp"
    }
  ],
  "rolesConfig": [
    {
      "key": "Striker",
      "label": "Striker",
      "colorHex": "#ef4444",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-1533-20251112031704.webp"
    },
    {
      "key": "Assassin",
      "label": "Assassin",
      "colorHex": "#ec4899",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-23566-20251112031814.webp"
    },
    {
      "key": "Ranger",
      "label": "Ranger",
      "colorHex": "#22c55e",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-171-20251112031735.webp"
    },
    {
      "key": "Caster",
      "label": "Caster",
      "colorHex": "#8b5cf6",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-57169-20251112031841.webp"
    },
    {
      "key": "Supporter",
      "label": "Supporter",
      "colorHex": "#10b981",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-18986-20251112031910.webp"
    },
    {
      "key": "Defender",
      "label": "Defender",
      "colorHex": "#3b82f6",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-9372-20251112031758.webp"
    }
  ],
  "shortcutsConfig": [
    {
      "key": "tier-list",
      "title": "Strongest Tier List",
      "subtitle": "PvE, Boss & Gauntlet Role Matrix",
      "href": "/starsavior/tier-list",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/09/205900_h5bcs.webp",
      "badge": "META"
    },
    {
      "key": "reroll",
      "title": "Reroll Tier List",
      "subtitle": "Best SSR Starters & Pull Targets",
      "href": "/starsavior/reroll",
      "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/05/121623_3y1g7.webp",
      "badge": "STARTER"
    },
    {
      "key": "characters",
      "title": "All 57 Characters",
      "subtitle": "Stats, Skills, Dupes & Builds",
      "href": "/starsavior/characters",
      "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_STRANIS_icon.webp",
      "badge": "57 UNITS"
    },
    {
      "key": "arcana",
      "title": "All 83 Arcana Cards",
      "subtitle": "SSR/SR/R Potentials & Training",
      "href": "/starsavior/arcana",
      "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "badge": "83 CARDS"
    }
  ]
};

export const STAR_SAVIOR_CHARACTERS_SEED = ([
  {
    "gameSlug": "starsavior",
    "slug": "asherah",
    "name": "Asherah",
    "title": "Voyager Relief Team · Slash Damage",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_STRANIS_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.0",
    "summary": "SSR Moon Striker (Slash Damage). Asherah's ATK increases by 15%. When attacking, own Crit Rate increases by 30%. After attacking, own Crit DMG increases by 6%. Can be stacked up to 5 times. Ultimate [Dawn of Night]: Temporarily releases the seal of the magic sword and causes devastating damage to all enemies. Grants Cr",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20662,
      "spd": 100,
      "atk": 4223,
      "def": 1600,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Stranis Breathing Method",
        "nameJp": "ストラニス式呼吸法",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_VOYAGER_STRANIS_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Asherah's ATK increases by 15%.\nWhen attacking, own Crit Rate increases by 30%.\nAfter attacking, own Crit DMG increases by 6%. Can be stacked up to 5 times.",
        "novaBurst": ""
      },
      {
        "name": "Stranis Style Flash",
        "nameJp": "ストラニス式一閃",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_VOYAGER_STRANIS_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Rushes towards the enemy and slashes with force. Grants 1 Cooling stack to yourself.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Tobarigiri",
        "nameJp": "とばり斬り",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_VOYAGER_STRANIS_SPECIAL_icon.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 50%",
        "exactDescription": "Releases some of the power of the magic sword and slashes all enemies.\nIncreases speed for 2 turns on self.\nWhen attacking, if your cooling is at maximum stack, damage increases by 30%.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Dawn of Night",
        "nameJp": "夜の曙光",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_VOYAGER_STRANIS_HYPER_icon.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 52.5%",
        "exactDescription": "Temporarily releases the seal of the magic sword and causes devastating damage to all enemies.\nGrants Crit DMG up to self for 2 turns.\nAdditionally, grants 2 Cooling.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1 and damage increases by 20%."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79606361",
      "arcana-79517798",
      "arcana-79517858",
      "arcana-79517753"
    ],
    "staticData": {
      "nameJp": "アセラ",
      "pool": "Standard",
      "attackType": "Slash Damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-1533-20251112031704.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_VOYAGER_STRANIS_img.webp",
      "pvpTier": "B",
      "journeyStats": {
        "power": 180,
        "vitality": 20,
        "endurance": 20,
        "focus": 10,
        "protection": 190
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Asherah's ATK increases by 5%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Asherah's ATK increases by 5%. After Asherah uses Tobari Slash, her Crit DMG increases by 4%. Can be stacked up to 5 times."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Asherah's ATK increases by 10%. After Asherah uses Tobari Slash, her Crit DMG increases by 5%. Can be stacked up to 5 times."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Asherah's ATK increases by 15%. After Asherah uses Tobari Slash, her Crit DMG increases by 6%. Can be stacked up to 5 times."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★\nThe number of uses (Cooldown) affects Unique Passive's Crit DMG",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6｜Lv.10"
        }
      ],
      "curio": {
        "name": "Hoshimori's Journey",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_STARGAZER_TRIP.webp",
        "rank": "A (easy to clear)",
        "effect": "After attacking, if no Critical Hit occurs, increase own Action Gauge by 50% and increase Crit Rate when using the next skill by 50%. Extra turns occur after a Critical Hit occurs."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Insight",
          "effect": "Crit rate increases by 5%."
        },
        {
          "name": "Skill of Destruction",
          "effect": "Crit DMG increases by 4%."
        }
      ],
      "gifts": [
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        },
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        }
      ],
      "profile": {
        "cv": "Natsumi Takamori",
        "affiliation": "Voyager Relief Team",
        "birthday": "April 22nd",
        "height": "166cm",
        "origin": "NOA",
        "obtain": "Gacha (permanent) Initial Distribution",
        "bio": "An aristocratic daughter who longs to be a savior of the stars and joins the journey to become one. The fact that you take action immediately without worrying about it is both a strength and a weakness."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "smile",
    "name": "Smile",
    "title": "Voyager Relief Team · impact damage",
    "rarity": "SSR",
    "element": "Star",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_SMILE_icon.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.2",
    "summary": "SSR Star Ranger (impact damage). Smile's ATK increases by 15%. After Smile's attack, if your Jump is at maximum stack, consume all stacks to activate Cat Tap Dance. After using Shooting Coordinate Confirmation, increase own Action Gauge by 15%. After using Shooting Coordinate Confirmation, if the enemy's HP is below 50",
    "recommendedDupes": "★★★ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 21573,
      "spd": 100,
      "atk": 4223,
      "def": 1600,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Happy Trigger",
        "nameJp": "ハッピートリガー",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_VOYAGER_SMILE_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Smile's ATK increases by 15%.\nAfter Smile's attack, if your Jump is at maximum stack, consume all stacks to activate Cat Tap Dance.\nAfter using Shooting Coordinate Confirmation, increase own Action Gauge by 15%.\nAfter using Shooting Coordinate Confirmation, if the enemy's HP is below 50%, increase own Action Gauge by an additional 15%.",
        "novaBurst": ""
      },
      {
        "name": "Confirm Shooting Coordinates",
        "nameJp": "射撃座標確認",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_VOYAGER_SMILE_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 50%",
        "exactDescription": "Bombard your enemies with your own happy ending. Give yourself 1 Jump stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Cat Tap Dance",
        "nameJp": "猫のタップダンス",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_VOYAGER_SMILE_SPECIAL_icon.webp",
        "target": "Trigger Skill｜All Enemies",
        "spOrEnergyCost": "CT: 1 turn | Toughness: 1",
        "multiplierSummary": "ATK 30%",
        "exactDescription": "After confirming shooting coordinates, if the enemy's HP is below 50%, activate cat tap dance.\n100% chance to apply Burn to all enemies for 1 turn.\nAdditionally, give yourself one Smile Matrix (cannot be removed).\nIt will not be activated if the enemy becomes unable to fight after checking the shooting coordinates.",
        "novaBurst": "-"
      },
      {
        "name": "All Members, Fire at Once!",
        "nameJp": "全隊員、一斉射撃！",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_VOYAGER_SMILE_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "With the Smile cat that I made myself, I will be bombarded with barrage.\n100% chance to lower defense power for 2 turns on enemy.\nGive yourself Smile Matrix (cannot be removed).\nAdds 3 Jump stacks.",
        "novaBurst": "When attacking, temporarily increases own Fixed Toughness Damage by 1 and increases damage by 20%."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-80283517",
      "arcana-79517801",
      "arcana-79517864",
      "arcana-79517756"
    ],
    "staticData": {
      "nameJp": "スマイル",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-171-20251112031735.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_VOYAGER_SMILE_img.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 180,
        "vitality": 140,
        "endurance": 20,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★★",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Smile's ATK increases by 5%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Smile's ATK increases by 5%.\nAfter Smile's attack, if your jump is at maximum stack, consume all stacks and activate cat tap dance.\nAfter using Shooting Coordinate Confirmation, increase own Action Gauge by 9%.\nAfter using Shooting Coordinate Confirmation, if the enemy's HP is below 50%, increase own Action Gauge by an additional 9%."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Smile's ATK increases by 10%.\nAfter Smile's attack, if your jump is at maximum stack, consume all stacks and activate cat tap dance.\nAfter using Shooting Coordinate Confirmation, increase own Action Gauge by 12%.\nAfter using Shooting Coordinate Confirmation, if the enemy's HP is below 50%, increase own Action Gauge by an additional 12%."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Smile's ATK increases by 15%.\nAfter Smile's attack, if your jump is at maximum stack, consume all stacks and activate cat tap dance.\nAfter using Shooting Coordinate Confirmation, increase own Action Gauge by 15%.\nAfter using Shooting Coordinate Confirmation, if the enemy's HP is below 50%, increase own Action Gauge by an additional 15%."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.10"
        }
      ],
      "curio": {
        "name": "Rugged Caliper",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_RUGGED_CALIPERS.webp",
        "rank": "B (properly strengthened)",
        "effect": "Activate \"Cat Tap Dance\" after using \"All members, fire at once!\" or \"Confirm shooting coordinates\".\nAfter using \"Cat's Tap Dance\", recovers own HP and causes chain damage to all enemies proportional to own ATK.\nIf you defeat an enemy, additionally activates \"Cat Tap Dance\".\nThe amount of recovery is proportional to the damage."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Concentration Skills",
          "effect": "Effect Hit increases by 4%."
        }
      ],
      "gifts": [
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        },
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        }
      ],
      "profile": {
        "cv": "Yuzuki Tamukai",
        "affiliation": "Voyager Relief Team",
        "birthday": "November 10th",
        "height": "148cm",
        "origin": "NOA",
        "obtain": "Gacha (constant)",
        "bio": "A believer in science who claims that he is not a human but a creature created by advanced science and technology. I have never laughed since I was born. He's doing research to become more funny, and he's using the leader as a guinea pig."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "luna",
    "name": "Luna",
    "title": "Voyager Relief Team · elemental damage",
    "rarity": "SSR",
    "element": "Order",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_ORACLE_icon.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.2",
    "summary": "SSR Order Caster (elemental damage). Luna's ATK increases by 15%. When Luna uses the world reflected in my eyes, Crit DMG increases by 20% if she is in an enhanced state. At the start of battle, give yourself 2 Insight stacks. If a critical hit occurs with a self-defense magic bullet or an attack from the world that I ",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20622,
      "spd": 93,
      "atk": 4312,
      "def": 1596,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "A Girl Who Sees the Future",
        "nameJp": "未来を見る少女",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_VOYAGER_ORACLE_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Luna's ATK increases by 15%.\nWhen Luna uses the world reflected in my eyes, Crit DMG increases by 20% if she is in an enhanced state.\nAt the start of battle, give yourself 2 Insight stacks.\nIf a critical hit occurs with a self-defense magic bullet or an attack from the world that I see, give yourself one insight stack.",
        "novaBurst": ""
      },
      {
        "name": "Self-defense Magic Bullet",
        "nameJp": "護身用魔力弾",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_VOYAGER_ORACLE_ATTACK_icon.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 30%",
        "exactDescription": "Attack all enemies by shooting a magic ball created by flicking your finger. Grant yourself 1 Insight stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Hecate's Spark",
        "nameJp": "ヘカテの火種",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_VOYAGER_ORACLE_SPECIAL_icon.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 60%",
        "exactDescription": "Imbues the hat with the magical power of the moon and sends it towards the enemy camp, causing it to explode and attack all enemies.\nIncreases Crit Rate for 2 turns on self.\nWhen attacking, if your insight is at maximum stack, damage increases by 30%.\nAfter attacking, reduce the cooldown of Hecate's Spark by 1 turn. Then clear all insight stacks.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "The World Reflected in My Eyes",
        "nameJp": "アタシの目に映った世界",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_VOYAGER_ORACLE_HYPER_icon.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 66.25%",
        "exactDescription": "Drawing out the power of the Moon Staff, it declares an inevitable fate to the enemy and attacks all of them.\n75% chance to bind all enemies for 2 turns. Grant yourself 2 Insight stacks.",
        "novaBurst": "When attacking, your Fixed Toughness Damage is temporarily increased by 1 and the chance of being bound increases to 100%."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-80210542",
      "arcana-80231986",
      "arcana-79517804",
      "arcana-79517843"
    ],
    "staticData": {
      "nameJp": "ルナ",
      "pool": "Standard",
      "attackType": "elemental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-65502-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-57169-20251112031841.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_VOYAGER_ORACLE_img.webp",
      "pvpTier": "S",
      "journeyStats": {
        "power": 180,
        "vitality": 20,
        "endurance": 20,
        "focus": 190,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Luna's ATK increases by 5%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Luna's ATK increases by 5%. When Luna uses the world seen in my eyes, if she is in an enhanced state, Crit DMG will increase by 10%."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Luna's ATK increases by 10%. When Luna uses the world seen in my eyes, if she is in an enhanced state, Crit DMG will increase by 15%."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Luna's ATK increases by 15%. When Luna uses the world seen in my eyes, if she is in an enhanced state, Crit DMG increases by 20%."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6｜Lv.8"
        }
      ],
      "curio": {
        "name": "Cosmic Perspective",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_COSMIC_VIEW.webp",
        "rank": "B (properly strengthened)",
        "effect": "After attacking, cause chain damage proportional to own ATK to the enemy with the highest maximum HP.\nAfter being attacked, if your HP is below 50%, create a barrier for 3 turns.\nBarrier increases in proportion to own ATK.\nBarrier effect only occurs once every 3 turns."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Destruction",
          "effect": "Crit DMG increases by 10%."
        },
        {
          "name": "Skill of Insight",
          "effect": "Crit rate increases by 3%."
        }
      ],
      "gifts": [
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        },
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        }
      ],
      "profile": {
        "cv": "Miya Minato",
        "affiliation": "Voyager Relief Team",
        "birthday": "March 18th",
        "height": "167cm",
        "origin": "unknown",
        "obtain": "Gacha (constant)",
        "bio": "He is the best disciple of the Great Witch of Dreams, Magi, and has inherited her \"Moon Staff\", and is the self-proclaimed best prophet in Lavista. He lives his life without thinking about the future, so much so that he spends the money he earned that day at the casino."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "charles",
    "name": "Charles",
    "title": "Knights of Monastir · Slash Damage",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_KNIGHT_icon.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.2",
    "summary": "SSR Sun Striker (Slash Damage). Charles' ATK increases by 15%. When attacking, damage increases by 3% in proportion to the ignition stack attached to yourself. This effect can be applied up to 5 times. After using Unyielding Strike, the damage of straight thrust increases by 10%. Can be stacked up to 3 times. Ultimate ",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 21573,
      "spd": 104,
      "atk": 4280,
      "def": 1600,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Unwavering Knight Commander",
        "nameJp": "揺るぎなき騎士団長",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_KINGDOM_KNIGHT_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Charles' ATK increases by 15%.\nWhen attacking, damage increases by 3% in proportion to the ignition stack attached to yourself. This effect can be applied up to 5 times.\nAfter using Unyielding Strike, the damage of straight thrust increases by 10%. Can be stacked up to 3 times.",
        "novaBurst": ""
      },
      {
        "name": "Honest Thrust",
        "nameJp": "正直な突き",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_KINGDOM_KNIGHT_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Pierce the enemy with efficient sword techniques. Give yourself 1 Ignition stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Oath of Victory",
        "nameJp": "勝利の誓い",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_KINGDOM_KNIGHT_SPECIAL_icon.webp",
        "target": "Active Skill | Single Ally",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Give one ally the determination to win. Increases Crit Rate for 2 turns on target ally.\nAdditionally, there is a 100% chance that the target ally will receive 2 turns of increased ATK, and you will receive an additional turn.",
        "novaBurst": "After using a skill, recover 1 Toughness."
      },
      {
        "name": "An Unyielding Blow",
        "nameJp": "不屈の一撃",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_KINGDOM_KNIGHT_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Demonstrating the sword skills of the Knights of Monastir, honed through constant efforts.\n100% chance to reduce ATK for 2 turns on enemy.\nGive yourself one Ignition stack. Additionally, increase own Action Gauge by 30%.",
        "novaBurst": "When attacking, temporarily increases own Fixed Toughness Damage by 1 and increases damage by 20%."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517744",
      "arcana-79717619",
      "arcana-79517867",
      "arcana-79517774"
    ],
    "staticData": {
      "nameJp": "シャルル",
      "pool": "Standard",
      "attackType": "Slash Damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-1533-20251112031704.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_KINGDOM_KNIGHT_img.webp",
      "pvpTier": "B",
      "journeyStats": {
        "power": 180,
        "vitality": 140,
        "endurance": 20,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Charles' ATK increases by 5%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Charles' ATK increases by 5%. After Charles uses Unyielding Strike, the damage of Honest Thrust increases by 6%. Can be stacked up to 3 times."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Charles' ATK increases by 10%. After Charles uses Unyielding Strike, the damage of Honest Thrust increases by 8%. Can be stacked up to 3 times."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Charles' ATK increases by 15%. After Charles uses Unyielding Strike, the damage of Honest Thrust increases by 10%. Can be stacked up to 3 times."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6"
        }
      ],
      "curio": {
        "name": "Children's Heroes",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_CHILDREN_HERO.webp",
        "rank": "C (no change to that extent)",
        "effect": "After using Accurate Thrust, if the enemy's HP is below 50%, all of your enhancements will be extended by 1 turn."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        },
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        }
      ],
      "profile": {
        "cv": "Sakieko Oki",
        "affiliation": "Knights of Monastir",
        "birthday": "October 20th",
        "height": "166cm",
        "origin": "Principality of Monastir",
        "obtain": "Gacha (constant)",
        "bio": "Leader of the Knights of Monastir. He aims to be a calm and dignified knight commander, but his cheerful and simple personality is holding him back."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "carmen",
    "name": "Carmen",
    "title": "Knights of Monastir · impact damage",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Defender",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_SHIELDER_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "7.5",
    "summary": "SSR Moon Defender (impact damage). Carmen's maximum HP increases by 15%. When Carmen is attacked, her defense increases by 4% in proportion to the Cooling stacks she has, up to a maximum of 5. Ultimate [Monastir Activation Barrier]: Carmen's will to protect everyone is embodied in the form of a castle wall. Increases d",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 25109,
      "spd": 95,
      "atk": 3352,
      "def": 1727,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Knight's Shield",
        "nameJp": "騎士団の盾",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_KINGDOM_SHIELDER_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Carmen's maximum HP increases by 15%.\nWhen Carmen is attacked, her defense increases by 4% in proportion to the Cooling stacks she has, up to a maximum of 5.",
        "novaBurst": ""
      },
      {
        "name": "Knights' Formal Swordsmanship",
        "nameJp": "騎士団の制式剣術",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_KINGDOM_SHIELDER_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 40%",
        "exactDescription": "Attacks the enemy with a weighted spinning slash. Give yourself 1 Cooling stack. The amount of damage increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage will temporarily increase by 1, and after the attack, you will receive the Discipline of Monastir for 1 turn."
      },
      {
        "name": "Shock Therapy",
        "nameJp": "衝撃療法",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_KINGDOM_SHIELDER_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 45%",
        "exactDescription": "Raise your reinforced shield in front of you and charge forward, swinging it with all your might to slash at the enemy in front of you.\nInflicts Monastir's Discipline on yourself for 2 turns, and 100% chance to inflict Provocation on the enemy for 1 turn.\nDamage increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Monastir Activation Barrier",
        "nameJp": "モナスティルの起動防壁",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_KINGDOM_SHIELDER_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 55%",
        "exactDescription": "Carmen's will to protect everyone is embodied in the form of a castle wall. Increases defense power for all allies for 3 turns and causes 100% provocation for 1 turn on enemies. Damage increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517747",
      "arcana-80041744",
      "arcana-79517885"
    ],
    "staticData": {
      "nameJp": "カルメン",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-9372-20251112031758.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_KINGDOM_SHIELDER_img.webp",
      "pvpTier": "B",
      "journeyStats": {
        "power": 10,
        "vitality": 180,
        "endurance": 150,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Life Set (Max HP +20%)",
          "Protection Set (DEF +20% / Guard Rate +10%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Immunity Set (1T Debuff Immunity)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "HP (%) / DEF (%) / Speed / Effect RES"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "Max HP +10% and Speed +6. At the start of battle, grants a Barrier equal to 15% of Max HP to all allies for 2 turns."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Carmen's maximum HP increases by 5%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Carmen's maximum HP increases by 5%. When Carmen is attacked, her defense increases by 2% in proportion to the amount of cooling stacks applied to her, up to a maximum of 5."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Carmen's maximum HP increases by 10%. When Carmen is attacked, her defense increases by 3% in proportion to the amount of cooling stacks applied to her, up to a maximum of 5."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Carmen's maximum HP increases by 15%. When Carmen is attacked, her defense increases by 4% in proportion to the cooling stacks applied to her, up to a maximum of 5."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6｜Lv.8"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.8"
        }
      ],
      "curio": {
        "name": "Overflowing Love",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_OVERFLOWING_LOVE.webp",
        "rank": "C (no change to that extent)",
        "effect": "After receiving an attack, if you are in the \"Discipline of Monastir\" state, cause chain damage to all enemies proportional to your maximum HP. After receiving an attack from a provoked enemy, extend your strength by 1 turn."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Sense of Defense",
          "effect": "Defense power increases by 5%."
        },
        {
          "name": "Skill in Life",
          "effect": "Maximum HP increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        },
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        }
      ],
      "profile": {
        "cv": "Lynn",
        "affiliation": "Knights of Monastir",
        "birthday": "August 11th",
        "height": "168cm",
        "origin": "Principality of Monastir",
        "obtain": "Gacha (constant)",
        "bio": "Vice-commander of the Knights of the Principality of Monastir. No matter how difficult the situation, he is a shield for the knights who never forgets to smile."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "frey",
    "name": "Frey",
    "title": "Knights of Monastir · impact damage",
    "rarity": "SSR",
    "element": "Star",
    "role": "Supporter",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_PRAY_icon.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.6",
    "summary": "SSR Star Supporter (impact damage). Frey's maximum HP increases by 15%. At the start of your turn, give yourself 1 Jump stack. When using Negotiation Breakdown, if your own jump stack is at maximum, after attacking, consume all your jump stacks and increase your own Action Gauge by 30%. Additionally, recovers HP of all",
    "recommendedDupes": "★★★ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 25109,
      "spd": 95,
      "atk": 3352,
      "def": 1727,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Lossless Trading",
        "nameJp": "損のない取引",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_KINGDOM_PRAY_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "HP4%",
        "exactDescription": "Frey's maximum HP increases by 15%.\nAt the start of your turn, give yourself 1 Jump stack.\nWhen using Negotiation Breakdown, if your own jump stack is at maximum, after attacking, consume all your jump stacks and increase your own Action Gauge by 30%. Additionally, recovers HP of all allies.\nThe amount of recovery increases in proportion to your maximum HP.\nWhen using Mona Stil's full support, if the HP of the ally target is below 75%, increase the Action Gauge of all allies by 15%.",
        "novaBurst": ""
      },
      {
        "name": "Negotiations Break Down",
        "nameJp": "交渉決裂",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_KINGDOM_PRAY_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 40%",
        "exactDescription": "In response to his opponent's outrageous suggestion, Frey slams his opponent in the cheek with all his might. Give yourself 1 Jump stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage will temporarily increase by 1, and after attacking, apply {Barrier} to the ally with the lowest current HP percentage for 2 turns. Barrier increases in proportion to own maximum HP."
      },
      {
        "name": "Replenishment at Maximum Speed",
        "nameJp": "最高速度で補給",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_KINGDOM_PRAY_SPECIAL_icon.webp",
        "target": "Active Skill | Single Ally",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "HP21%",
        "exactDescription": "Frey, Quartermaster of Monastir, urgently procures survival supplies for his allies.\nGive yourself 2 Jump stacks. Furthermore, after recovering the HP of the ally target, all weakening effects are removed.\nIf the recovery target is Star Attribute, the recovery amount will increase.\nThe amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": "After using a skill, recover 1 Toughness."
      },
      {
        "name": "Monastir's Full Support",
        "nameJp": "モナスティルの全力支援",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_KINGDOM_PRAY_HYPER_icon.webp",
        "target": "Active Skill | All Allies",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "HP12.5%",
        "exactDescription": "Frey represents Monastir and supports his allies with all his heart.\nGives 2 Jump stacks to self and recovers HP of allies.\nAdditionally, grants Barrier for 3 turns and {Effect RES Up} for 2 turns.\nIf the recovery target is Star Attribute, the recovery amount will increase.\nThe amount of recovery and barrier increase in proportion to your maximum HP.",
        "novaBurst": "After using a skill, recover 1 Toughness."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517750",
      "arcana-79766540",
      "arcana-79517861",
      "arcana-79517741"
    ],
    "staticData": {
      "nameJp": "フレイ",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-18986-20251112031910.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_KINGDOM_PRAY_img.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 10,
        "vitality": 180,
        "endurance": 150,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Speed Set (SPD +25%)",
          "Life Set (Max HP +20%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Immunity Set (1T Debuff Immunity)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "Speed / HP (%) / Effect Hit / Effect RES"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "Max HP +10% and Speed +6. At the start of battle, grants a Barrier equal to 15% of Max HP to all allies for 2 turns."
      },
      "dupeRating": "★★★",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Frey's maximum HP increases by 5%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Frey's maximum HP increases by 5%. After Frey uses Monastir's full support, if his HP is below 50%, increases the Action Gauge of all allies by 9%."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Frey's maximum HP increases by 10%. After Frey uses Monastir's Full Support, if his HP is below 50%, increases the Action Gauge of all allies by 12%."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Frey's maximum HP increases by 15%. After Frey uses Monastir's full support, if his HP is below 50%, increases the Action Gauge of all allies by 15%."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.1"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.10"
        }
      ],
      "curio": {
        "name": "Investment Solicitation Flyer",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_PRAY_INVESTMENT_FLYER.webp",
        "rank": "C (no change to that extent)",
        "effect": "After receiving an attack, if you are in a barrier state, chain damage will occur to all enemies proportional to your maximum HP."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Sense of Defense",
          "effect": "Defense power increases by 5%."
        },
        {
          "name": "Skill in Life",
          "effect": "Maximum HP increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        },
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        }
      ],
      "profile": {
        "cv": "Ayano Shibuya",
        "affiliation": "Knights of Monastir",
        "birthday": "July 7th",
        "height": "156cm",
        "origin": "Principality of Monastir",
        "obtain": "Gacha (constant) Beginner Mission",
        "bio": "A girl who calls herself the quartermaster of the Monastir Knights. He has an eye for making money and comes up with business ideas one after another, but most of them end in failure."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "seira",
    "name": "Seira",
    "title": "Fantasy Species · mental damage",
    "rarity": "SSR",
    "element": "Order",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/NIGHTMARE_REAPER_icon.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.2",
    "summary": "SSR Order Striker (mental damage). Seira's ATK increases by 15%. When Seira attacks, if the enemy's HP is over 75%, the damage will increase by 15%. Ultimate [Invitation to Fantasy]: Draws the enemy into the realm of illusion and cuts them to pieces in one fell swoop. 100% chance to slow down enemy for 2 turns. Grants ",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 21743,
      "spd": 107,
      "atk": 4315,
      "def": 1601,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Precognitive Dream Protection",
        "nameJp": "予知夢の加護",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_NIGHTMARE_REAPER_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Seira's ATK increases by 15%.\nWhen Seira attacks, if the enemy's HP is over 75%, the damage will increase by 15%.",
        "novaBurst": ""
      },
      {
        "name": "A Fleeting Dream",
        "nameJp": "はかない夢",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_NIGHTMARE_REAPER_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Instantly approach the enemy and swing your sickle. Grant yourself 1 Insight stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Flock of Star Butterflies",
        "nameJp": "星蝶の群れ",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_NIGHTMARE_REAPER_SPECIAL_icon.webp",
        "target": "Active Skill | Single Ally",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Summons a swarm of butterflies that shine in the starlight to strengthen your allies.\nGrants advanced ATK up to the targeted ally for 2 turns and increases Action Gauge by 25%.\nThen, grant yourself 3 stacks of Insight.\nAdditionally, you will receive an additional turn.",
        "novaBurst": "After using the skill, recovers 1 Toughness and increases Action Gauge increase by 50%."
      },
      {
        "name": "Invitation to Fantasy",
        "nameJp": "幻夢への招待",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_NIGHTMARE_REAPER_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Draws the enemy into the realm of illusion and cuts them to pieces in one fell swoop.\n100% chance to slow down enemy for 2 turns.\nGrants Reimu Light to yourself for 2 turns.\nWhen attacking, if your insight is at maximum stack, damage increases by 20%.\nAfter the attack, all insights are erased.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-80498278",
      "arcana-79517813",
      "arcana-79517756",
      "arcana-79517759"
    ],
    "staticData": {
      "nameJp": "セイラ",
      "pool": "Standard",
      "attackType": "mental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-65502-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-1533-20251112031704.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_NIGHTMARE_REAPER_img.webp",
      "pvpTier": "S",
      "journeyStats": {
        "power": 180,
        "vitality": 140,
        "endurance": 20,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Seira's ATK increases by 5%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Seira's ATK increases by 5%. When Seira attacks, if the enemy's HP is over 75%, the damage will increase by 9%."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Seira's ATK increases by 10%. When Seira attacks, if the enemy's HP is over 75%, the damage will increase by 12%."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Seira's ATK increases by 15%. When Seira attacks, if the enemy's HP is over 75%, the damage will increase by 15%."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        }
      ],
      "curio": {
        "name": "Blue Butterfly",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_DREAMING_BUTTERFLY.webp",
        "rank": "C (no change to that extent)",
        "effect": "If the enemy's HP is at maximum when attacking, your own Crit Rate increases by 100%."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        },
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        }
      ],
      "profile": {
        "cv": "Rikako Aida",
        "affiliation": "Fantasy Species",
        "birthday": "December 9th",
        "height": "165cm",
        "origin": "unknown",
        "obtain": "Gacha (constant)",
        "bio": "A dream demon who has been wandering around Lavista for a long time. He has the ability to show people good dreams. However, its power sometimes makes people addicted, so they cannot stay in the same place for long."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "trish",
    "name": "Trish",
    "title": "Acellus Association · Slash Damage",
    "rarity": "SSR",
    "element": "Star",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/STELLAR_THIEF_icon.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.6",
    "summary": "SSR Star Assassin (Slash Damage). Trish's Crit DMG increases by 25%. At the start of battle, give yourself 3 Jump stacks. Increases accuracy by 50% when attacking. When Trish defeats an enemy, increases her Action Gauge by 30% and grants 3 Jump stacks. Ultimate [Continuous Slash]: Unleash a series of lightning-fast att",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20480,
      "spd": 90,
      "atk": 3827,
      "def": 1594,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Top Hunter",
        "nameJp": "一流ハンター",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_STELLAR_THIEF_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Trish's Crit DMG increases by 25%.\nAt the start of battle, give yourself 3 Jump stacks.\nIncreases accuracy by 50% when attacking.\nWhen Trish defeats an enemy, increases her Action Gauge by 30% and grants 3 Jump stacks.",
        "novaBurst": ""
      },
      {
        "name": "Phantom Step",
        "nameJp": "ファントムステップ",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_STELLAR_THIEF_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 50%",
        "exactDescription": "Jump in brilliantly and attack by surprise. Grants 1 Jump stack to yourself.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Acceleration Assault",
        "nameJp": "加速強襲",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_STELLAR_THIEF_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 2 turns | Toughness: 1",
        "multiplierSummary": "ATK 55%",
        "exactDescription": "After throwing a dagger, it brilliantly catches it in the air and knocks it down.\nGrants Crit Rate Up for 2 turns and increases Action Gauge by 50%.\nThen, give 2 Jump stacks.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Continuous Slash",
        "nameJp": "連続斬り",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_STELLAR_THIEF_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Unleash a series of lightning-fast attacks that only a top-class hunter can do.\nGrants ATK up to self for 2 turns.\nIgnore enemy's first defense when attacking.\nWhen attacking, it penetrates your defense power by 10% in proportion to the jump stack you have. This effect can be applied up to 5 times.\nAfter attacking, all Jump is consumed.\nAfter attacking, if the enemy's HP is below 25%, reduce the cooldown of this skill by 1 turn.\nIf you defeat an enemy, the cooldown time of this skill will be reset.",
        "novaBurst": "When attacking, temporarily increases own Fixed Toughness Damage by 1 and increases damage by 20%."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517816",
      "arcana-79517759",
      "arcana-79517774",
      "arcana-79517783"
    ],
    "staticData": {
      "nameJp": "トリッシュ",
      "pool": "Standard",
      "attackType": "Slash Damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-23566-20251112031814.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_STELLAR_THIEF_img.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 150,
        "vitality": 20,
        "endurance": 20,
        "focus": 10,
        "protection": 235
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Trish's Crit DMG increases by 15%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Trish's Crit DMG increases by 15%.\nAt the start of battle, give yourself 3 jumping stacks.\nIncreases accuracy by 50% when attacking.\nWhen Trish defeats an enemy, her Action Gauge increases by 20% and gives her 3 jumping stacks."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Trish's Crit DMG increases by 20%.\nAt the start of battle, give yourself 3 jumping stacks.\nIncreases accuracy by 50% when attacking.\nWhen Trish defeats an enemy, her Action Gauge increases by 25% and grants 3 jumping stacks."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Trish's Crit DMG increases by 25%.\nAt the start of battle, give yourself 3 jumping stacks.\nIncreases accuracy by 50% when attacking.\nWhen Trish defeats an enemy, her Action Gauge increases by 30% and grants 3 jumping stacks."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★\nDue to CT reset, the benefit of CT shortening is weak.",
          "recLevel": "Lv.3"
        }
      ],
      "curio": {
        "name": "Gentle Vuvuzela",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_TRISH_VUVUZELA.webp",
        "rank": "A (easy to clear)",
        "effect": "Increases Crit Rate by 50% and recovers HP equal to 100% of the damage taken. If you defeat an enemy with continuous slashes, increase your Action Gauge by 70%. If you fail to defeat the enemy with continuous slashes, reduce the cooldown of continuous slashes by 2 turns and activate Phantom Step."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Protection",
          "effect": "Effect RES increases by 10%."
        },
        {
          "name": "Skill of Insight",
          "effect": "Crit rate increases by 3%."
        }
      ],
      "gifts": [
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        },
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        }
      ],
      "profile": {
        "cv": "Tsukijohika",
        "affiliation": "Acellus Association",
        "birthday": "October 4th",
        "height": "161cm",
        "origin": "NOA",
        "obtain": "Gacha (permanent) Initial Distribution",
        "bio": "A skilled hunter who belongs to the Asellus Hunter Association. He earns a huge bounty due to his skill, but his pockets are always lonely because he spends it like hot water."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "ede",
    "name": "Ede",
    "title": "Morel Shipping Company · Slash Damage",
    "rarity": "SSR",
    "element": "Star",
    "role": "Defender",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/INCOGNITA_FLOWER_icon.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.6",
    "summary": "SSR Star Defender (Slash Damage). Ede's defense power increases by 15%. At the start of battle, Ede generates protection and barrier for 1 turn. After being attacked, give yourself 1 Jump stack at 100%. Barrier increases in proportion to your defense power. Ultimate [Grave of Thorns]: Ede gathers the power of emptiness",
    "recommendedDupes": "★★★ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 22153,
      "spd": 95,
      "atk": 3352,
      "def": 1922,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Worn Out Feelings",
        "nameJp": "摩耗した感情",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_INCOGNITA_FLOWER_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Defense power 240%",
        "exactDescription": "Ede's defense power increases by 15%.\nAt the start of battle, Ede generates protection and barrier for 1 turn.\nAfter being attacked, give yourself 1 Jump stack at 100%.\nBarrier increases in proportion to your defense power.",
        "novaBurst": ""
      },
      {
        "name": "Hail of Steel",
        "nameJp": "鋼鉄の雹",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_INCOGNITA_FLOWER_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Fires the power of emptiness condensed into the Ede flower towards the enemy and attacks them. Give yourself 1 Jump stack.",
        "novaBurst": "When attacking, temporarily increases your Fixed Toughness Damage by 1 and creates a barrier for 1 turn after attacking. Barrier increases in proportion to own defense power."
      },
      {
        "name": "Awl Armor",
        "nameJp": "錐の鎧",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_INCOGNITA_FLOWER_SPECIAL_icon.webp",
        "target": "Active Skill | Self",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "Defense power 308%",
        "exactDescription": "Take on a defensive stance by embracing the power of emptiness. Generates barrier and defense power up for 3 turns.\nIf your own Jump stack is at maximum, erase all Jump stacks and generate an additional turn for yourself. Barrier increases in proportion to own defense power.",
        "novaBurst": "After using a skill, recover 1 Toughness."
      },
      {
        "name": "Grave of Thorns",
        "nameJp": "棘の墓",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_INCOGNITA_FLOWER_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 95%",
        "exactDescription": "Ede gathers the power of emptiness to the limit and showers it on the enemy. Inflicts protection on self for 3 turns, and 100% chance to reduce accuracy for 2 turns on enemy. When attacking, damage increases by 20% if you are in barrier state. The damage increases in proportion to your defense power.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517819"
    ],
    "staticData": {
      "nameJp": "エデ",
      "pool": "Standard",
      "attackType": "Slash Damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-9372-20251112031758.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_INCOGNITA_FLOWER_img.webp",
      "pvpTier": "SS",
      "journeyStats": {
        "power": 10,
        "vitality": 180,
        "endurance": 30,
        "focus": 10,
        "protection": 190
      },
      "equipment": {
        "pveSets": [
          "Life Set (Max HP +20%)",
          "Protection Set (DEF +20% / Guard Rate +10%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Immunity Set (1T Debuff Immunity)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "HP (%) / DEF (%) / Speed / Effect RES"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "Max HP +10% and Speed +6. At the start of battle, grants a Barrier equal to 15% of Max HP to all allies for 2 turns."
      },
      "dupeRating": "★★★",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Ede's defense power increases by 5%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Ede's defense power increases by 5%. At the start of the first battle, Ede generates protection and barrier for 1 turn. After being attacked, give yourself 1 jumping stack at 50%. Barrier increases in proportion to own defense power."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Ede's defense power increases by 10%. At the start of the first battle, Ede generates protection and barrier for 1 turn. After being attacked, give yourself 1 jumping stack at 75%. Barrier increases in proportion to own defense power."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Ede's defense power increases by 15%. At the start of the first battle, Ede generates protection and barrier for 1 turn. After being attacked, give yourself 1 jumping stack at 100%. Barrier increases in proportion to own defense power."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.1"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6｜Lv.10"
        }
      ],
      "curio": {
        "name": "Die Casting Locomotive Model",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/124258_n8u41.webp",
        "rank": "C (no change to that extent)",
        "effect": "After using Steel Hail, if you are in a protective state, cause chain damage to all enemies proportional to your maximum HP."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Sense of Protection",
          "effect": "Effect RES increases by 10%."
        },
        {
          "name": "Defensive Skill",
          "effect": "Defense power increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        },
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        }
      ],
      "profile": {
        "cv": "Rio Tsuchiya",
        "affiliation": "Morel Shipping Company",
        "birthday": "January 20th",
        "height": "153cm",
        "origin": "faren",
        "obtain": "Gacha (constant)",
        "bio": "Vice representative of the Morel Shipping Company, which conducts trade throughout the continent. He has a cold and unfriendly personality and always keeps his distance from the people around him."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "serpang",
    "name": "Serpang",
    "title": "Fugetsudo · mental damage",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Supporter",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/EASTERN_OWL_icon.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.2",
    "summary": "SSR Sun Supporter (mental damage). Serpang's maximum HP increases by 15%. I choose you! After use, there is a 100% chance to inflict Burn on the enemy for 2 turns. At the start of a turn, a Burning enemy grants itself 1 Ignition stack. At the end of the turn, if your ignition is at maximum stack, increase your Action G",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 24753,
      "spd": 95,
      "atk": 3352,
      "def": 1657,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Soar Up, Phoenix",
        "nameJp": "鳳凰よ舞い上がれ",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_EASTERN_OWL_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Serpang's maximum HP increases by 15%.\nI choose you! After use, there is a 100% chance to inflict Burn on the enemy for 2 turns.\nAt the start of a turn, a Burning enemy grants itself 1 Ignition stack.\nAt the end of the turn, if your ignition is at maximum stack, increase your Action Gauge by 50% and then erase all stacks.",
        "novaBurst": ""
      },
      {
        "name": "I Chose You!",
        "nameJp": "キミに決めた！",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_EASTERN_OWL_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 40%",
        "exactDescription": "Serpang throws Toto at the enemy and attacks. Give yourself 1 Ignition stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage will temporarily increase by 1, and after the attack, the ally with the lowest current HP percentage will recover HP. The amount of recovery increases in proportion to your maximum HP."
      },
      {
        "name": "I Only Believe in You",
        "nameJp": "キミだけを信じるよ",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_EASTERN_OWL_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 55%",
        "exactDescription": "Toto releases a sharp gaze filled with murderous intent, putting pressure on the enemy's psychology.\nGive yourself one Ignition stack. Additionally, recovers HP of all allies.\nAfter that, there is a 100% chance to apply ATK Down for 2 turns and Effect RES Down for 2 turns to the enemy.\nThe ally with the lowest current HP ratio will have increased recovery amount.\nThe amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Let Me Show You, Toto!",
        "nameJp": "見せてあげよう、トト！",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_EASTERN_OWL_HYPER_icon.webp",
        "target": "Active Skill | All Allies",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "HP12.5%",
        "exactDescription": "Serpang and Toto will share the power of their passionate friendship with everyone.\nGive yourself 2 Ignition stacks. Additionally, recovers HP of all allies.\nRecovers the HP of all allies, and inflicts skill damage immunity once on yourself and the ally with the lowest current HP ratio other than yourself.\nIf the ally target has Sun Attribute, the amount of recovery will increase.\nThe amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": "After using a skill, recover 1 Toughness."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517822",
      "arcana-79517879",
      "arcana-79534223",
      "arcana-79606361"
    ],
    "staticData": {
      "nameJp": "セルパン",
      "pool": "Standard",
      "attackType": "mental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-18986-20251112031910.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_EASTERN_OWL_img.webp",
      "pvpTier": "S",
      "journeyStats": {
        "power": 10,
        "vitality": 180,
        "endurance": 30,
        "focus": 10,
        "protection": 130
      },
      "equipment": {
        "pveSets": [
          "Speed Set (SPD +25%)",
          "Life Set (Max HP +20%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Immunity Set (1T Debuff Immunity)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "Speed / HP (%) / Effect Hit / Effect RES"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "Max HP +10% and Speed +6. At the start of battle, grants a Barrier equal to 15% of Max HP to all allies for 2 turns."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Serpang's maximum HP increases by 5%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Serpang's maximum HP increases by 5%. Serpang has chosen you! After use, inflicts 50% burn on the enemy for 1 turn."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Serpang's maximum HP increases by 10%. Serpang has chosen you! After use, inflicts 75% burn on the enemy for 1 turn."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Serpang's maximum HP increases by 15%. Serpang has chosen you! After use, inflicts 100% Burn on the enemy for 1 turn."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.1"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        }
      ],
      "curio": {
        "name": "Serpang Dream Nightmare EX",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_DREAM_NIGHTMARE_EX.webp",
        "rank": "C (no change to that extent)",
        "effect": "After using I Only Believe in You, inflict 2 Poisons on the enemy in 2 turns with a 100% and 50% chance respectively. Poisoning increases damage in proportion to your maximum HP."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Sense of Protection",
          "effect": "Effect RES increases by 10%."
        },
        {
          "name": "Concentration Skills",
          "effect": "Effect Hit increases by 4%."
        }
      ],
      "gifts": [
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        },
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        }
      ],
      "profile": {
        "cv": "Sayi Hiratsuka",
        "affiliation": "Fugetsudo",
        "birthday": "April 8th",
        "height": "149cm",
        "origin": "Touhou",
        "obtain": "Gacha (constant)",
        "bio": "A girl belonging to Fugetsudo who came from the eastern continent with the mythical beast Toto. I hate troublesome things and always try to skip training."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "dana",
    "name": "Dana",
    "title": "Canopic Guard · elemental damage",
    "rarity": "SSR",
    "element": "Star",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAGICIAN_DRUID_icon.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.6",
    "summary": "SSR Star Caster (elemental damage). Dana's ATK increases by 15%. If a Critical Hit occurs, there is a 100% chance to grant Speed ​​Up to yourself for 1 turn. After a Star Attribute ally other than yourself attacks, give yourself 1 Jump stack. At the start of the turn, if your jump is at the maximum stack, consume all t",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20480,
      "spd": 90,
      "atk": 4277,
      "def": 1594,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Pure Heart",
        "nameJp": "純粋な心",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MAGICIAN_DRUID_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Dana's ATK increases by 15%.\nIf a Critical Hit occurs, there is a 100% chance to grant Speed ​​Up to yourself for 1 turn.\nAfter a Star Attribute ally other than yourself attacks, give yourself 1 Jump stack.\nAt the start of the turn, if your jump is at the maximum stack, consume all the stacks and apply Roroka to yourself! (Cannot be removed) for 2 turns.",
        "novaBurst": ""
      },
      {
        "name": "Onslaught of Grass Leaves",
        "nameJp": "草葉の猛襲",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MAGICIAN_DRUID_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Dana attacks the enemy with a burst of natural energy. Give yourself 1 Jump stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Rapid Flowering",
        "nameJp": "急速開花",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MAGICIAN_DRUID_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Promotes the growth of plants and attacks enemies with the presence of nature.\nGive yourself 1 jumping stack.\nAdditionally, grants ATK up for 2 turns to yourself and the ally with the highest ATK other than yourself.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1 and your Crit Rate increases by 30%."
      },
      {
        "name": "Power of Nature",
        "nameJp": "自然の力",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MAGICIAN_DRUID_HYPER_icon.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 66.25%",
        "exactDescription": "Creates an earth filled with life force, grows giant trees, and attacks all enemies.\nGive yourself 1 Jump stack. Additionally, there is a 100% chance to apply Speed ​​Down to all enemies for 1 turn.\nAfter attacking, if the target's HP is below 50%, apply Roroka to yourself! (cannot be removed) for 1 turn.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517756",
      "arcana-79517849",
      "arcana-79517753",
      "arcana-79517759"
    ],
    "staticData": {
      "nameJp": "ダーナ",
      "pool": "Standard",
      "attackType": "elemental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-57169-20251112031841.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_MAGICIAN_DRUID_img.webp",
      "pvpTier": "SS",
      "journeyStats": {
        "power": 180,
        "vitality": 20,
        "endurance": 20,
        "focus": 190,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Dana's ATK increases by 5%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Dana's ATK increases by 5%. When Dana hits a Critical Hit with Rapid Bloom, it increases speed by 70% for 1 turn."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Dana's ATK increases by 10%. When Dana hits a Critical Hit with Rapid Bloom, it increases speed by 85% for 1 turn."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Dana's ATK increases by 15%. When Dana hits a critical hit with Rapid Bloom, it increases speed by 100% for 1 turn."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.8"
        }
      ],
      "curio": {
        "name": "Loroka's Package",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_LOLOKA_BAG.webp",
        "rank": "C (no change to that extent)",
        "effect": "After using the power of nature, reduce the Action Gauge of the enemy with the highest maximum HP by 50%."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Destruction",
          "effect": "Crit DMG increases by 10%."
        },
        {
          "name": "Skill of Insight",
          "effect": "Crit rate increases by 3%."
        }
      ],
      "gifts": [
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        },
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        }
      ],
      "profile": {
        "cv": "Kagetsu Mikawa",
        "affiliation": "Canopic Guard",
        "birthday": "May 15th",
        "height": "160cm",
        "origin": "canopic mountains",
        "obtain": "Gacha (constant)",
        "bio": "A girl who grew up in a Druid village deep in the Canopus Mountains. He has a very positive personality and sees everything in a positive light."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "muriel",
    "name": "Muriel",
    "title": "Monolith Cult · elemental damage",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SAINTESS_DEMON_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.0",
    "summary": "SSR Sun Caster (elemental damage). Muriel's Crit DMG increases by 25%. Muriel has a 100% chance to apply one Ignite stack to herself after a Sun Attribute ally other than herself attacks. Ultimate [I Won't Do Anything Bad Again]: The entire enemy is caught up in the divine punishment Muriel was supposed to receive. 75%",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 21080,
      "spd": 90,
      "atk": 3827,
      "def": 1594,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "In High Spirits",
        "nameJp": "意気揚々",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_SAINTESS_DEMON_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Muriel's Crit DMG increases by 25%.\nMuriel has a 100% chance to apply one Ignite stack to herself after a Sun Attribute ally other than herself attacks.",
        "novaBurst": ""
      },
      {
        "name": "Flame of Divine Punishment",
        "nameJp": "神罰の炎",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_SAINTESS_DEMON_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attacks by shooting holy flame. Grants 1 ignition stack to yourself.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Holy Bomb",
        "nameJp": "ホーリーボム",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_SAINTESS_DEMON_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Attack by generously throwing stolen holy water.\nDamage increases by 3% depending on the number of weakened enemies. Extends the enemy's debuff effect by 1 turn at 100%.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "I Won't Do Anything Bad Again",
        "nameJp": "もう悪いことはしません",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_SAINTESS_DEMON_HYPER_icon.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 66.25%",
        "exactDescription": "The entire enemy is caught up in the divine punishment Muriel was supposed to receive. 75% ATK down for 2 turns on all enemies. If your Ignition stack is at its maximum value, all enemies will be burned for 2 turns at 100%.",
        "novaBurst": "When attacking, your Fixed Toughness Damage is temporarily increased by 1, and the chance of ATK reduction becoming 100%."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517759",
      "arcana-79517756",
      "arcana-79517774",
      "arcana-79517783"
    ],
    "staticData": {
      "nameJp": "ミュリエル",
      "pool": "Standard",
      "attackType": "elemental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-57169-20251112031841.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_SAINTESS_DEMON_img.webp",
      "pvpTier": "B",
      "journeyStats": {
        "power": 150,
        "vitality": 20,
        "endurance": 20,
        "focus": 235,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Muriel's Crit DMG increases by 15%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Muriel's Crit DMG increases by 15%. Muriel grants herself 1 Ignite stack at 50% after a Sun Attribute ally other than herself attacks."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Muriel's Crit DMG increases by 20%. Muriel has a 75% chance to apply 1 Ignite stack to herself after a Sun Attribute ally other than herself attacks."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Muriel's Crit DMG increases by 25%. Muriel grants herself 1 Ignite stack at 100% after a Sun Attribute ally other than herself attacks."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.8"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6｜Lv.8"
        }
      ],
      "curio": {
        "name": "A Breathing Flame",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_BREATHE_CHARCOAL.webp",
        "rank": "B (properly strengthened)",
        "effect": "After using \"I won't do anything bad again\", increase your ATK for 3 turns. After using \"God's Flame\" or \"I Will Never Do Bad Things Again\", there is a 100% chance that the enemy will be burned for 3 turns. Recovers own HP after being attacked by a burning enemy. The amount of recovery is proportional to your ATK. Burning damage increases in proportion to your own ATK."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Concentration",
          "effect": "Effect Hit increases by 10%."
        },
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Concentration Skills",
          "effect": "Effect Hit increases by 4%."
        }
      ],
      "gifts": [
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        },
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        }
      ],
      "profile": {
        "cv": "Akari Kito",
        "affiliation": "Monolith Cult",
        "birthday": "March 2nd",
        "height": "152cm",
        "origin": "canopic mountains",
        "obtain": "Gacha (constant)",
        "bio": "Saint of the Monolith Church. The ranking is number 116. A troublemaker girl whose dream is to rise up the ranks and become the Great Saint, the top of the Saints."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "elisa",
    "name": "Elisa",
    "title": "Monolith Cult · mental damage",
    "rarity": "SSR",
    "element": "Chaos",
    "role": "Supporter",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SAINTESS_ELF_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.0",
    "summary": "SSR Chaos Supporter (mental damage). Elisa's maximum HP increases by 15%. Elisa may be useless, but when using help, if your HP is above 50%, the amount of recovery will increase by 25%. When using Please Return, if your own upheaval is at its maximum stack, it will be consumed and an additional turn will be generated ",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 25366,
      "spd": 98,
      "atk": 3369,
      "def": 1729,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "A Timid Prayer",
        "nameJp": "臆病な祈り",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_SAINTESS_ELF_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 40%",
        "exactDescription": "Elisa's maximum HP increases by 15%.\nElisa may be useless, but when using help, if your HP is above 50%, the amount of recovery will increase by 25%.\nWhen using Please Return, if your own upheaval is at its maximum stack, it will be consumed and an additional turn will be generated for you.",
        "novaBurst": ""
      },
      {
        "name": "Please Go Back",
        "nameJp": "帰ってください",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_SAINTESS_ELF_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 40%",
        "exactDescription": "Elisa carries out God's judgment on behalf of Frey Remais, full of determination. Grants 1 turbulent stack to yourself.",
        "novaBurst": "When attacking, your Fixed Toughness Damage is temporarily increased by 1, and after attacking, the ally with the lowest HP currently receives holy protection for 1 turn."
      },
      {
        "name": "It May Be Useless, But Please Help Me",
        "nameJp": "無駄かもですが、お助けを",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_SAINTESS_ELF_SPECIAL_icon.webp",
        "target": "Active Skill | Single Ally",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "HP21%",
        "exactDescription": "Elisa offers a desperate prayer to overcome her anxiety and worry.\nRecovers the HP of a single ally and provides holy protection for 2 turns. Give yourself 2 turbulent stacks.\nThe amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": "After using a skill, recover 1 Toughness."
      },
      {
        "name": "Let's All Pray Together",
        "nameJp": "みなでお祈りを",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_SAINTESS_ELF_HYPER_icon.webp",
        "target": "Active Skill | Single Ally",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "HP20%",
        "exactDescription": "Elisa's faith brings about a miracle in the midst of despair. Revives a single incapacitated ally with 50% HP and increases Action Gauge by 80%. A single ally who is not incapacitated recovers HP, receives holy protection for 2 turns at 100%, and increases Action Gauge by 40%. Give yourself 2 turbulent stacks. The amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": "After using a skill, recover 1 Toughness."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517762",
      "arcana-79517750",
      "arcana-79517792",
      "arcana-79534223"
    ],
    "staticData": {
      "nameJp": "エリサ",
      "pool": "Standard",
      "attackType": "mental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-10703-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-18986-20251112031910.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_SAINTESS_ELF_img.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 10,
        "vitality": 180,
        "endurance": 150,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Speed Set (SPD +25%)",
          "Life Set (Max HP +20%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Immunity Set (1T Debuff Immunity)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "Speed / HP (%) / Effect Hit / Effect RES"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "Max HP +10% and Speed +6. At the start of battle, grants a Barrier equal to 15% of Max HP to all allies for 2 turns."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Elisa's maximum HP increases by 5%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Elisa's maximum HP increases by 5%. Elisa may be useless, but when using help, if your HP is above 50%, the amount of recovery will increase by 15%. Return on your own turn When used, if your own upheaval is at its maximum stack, it will be consumed and generate an additional turn for you."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Elisa's maximum HP increases by 10%. Elisa may be useless, but when using help, if your HP is above 50%, the amount of recovery will increase by 20%. Return on your own turn When used, if your own upheaval is at its maximum stack, it will be consumed and generate an additional turn for you."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Elisa's maximum HP increases by 15%. Elisa may be useless, but when using help, if your HP is above 50%, the amount of recovery will increase by 25%. Return on your own turn When used, if your own upheaval is at its maximum stack, it will be consumed and generate an additional turn for you."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.1"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.8"
        }
      ],
      "curio": {
        "name": "Learning Assistant",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_STUDY_HELPER.webp",
        "rank": "C (no change to that extent)",
        "effect": "After everyone uses Prayer, you will receive an additional turn."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Sense of Defense",
          "effect": "Defense power increases by 5%."
        },
        {
          "name": "Skill in Life",
          "effect": "Maximum HP increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        },
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        }
      ],
      "profile": {
        "cv": "Mizuki Rin",
        "affiliation": "Monolith Cult",
        "birthday": "September 14th",
        "height": "169cm",
        "origin": "NOA",
        "obtain": "Gacha (constant)",
        "bio": "Saint of the Monolith Church. The ranking is number 117. Although he has a wealth of knowledge about relics, he has low self-esteem and is easily influenced, so he is unable to fully demonstrate his abilities."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "lu",
    "name": "Lu",
    "title": "Orbital Search Team · mental damage",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/RECON_AMULET_icon.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.2",
    "summary": "SSR Moon Ranger (mental damage). Lu's ATK increases by 15%. Lu gains 2 Nova Force at the start of battle. When attacking, damage increases by 4% for each stack of own cooling. After any of your allies except yourself uses a skill that is not an attack, if you are not in a sudden state of Ritsuryo (cannot be removed), g",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20662,
      "spd": 104,
      "atk": 4223,
      "def": 1600,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Exorcist's Path",
        "nameJp": "退魔師の道",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_RECON_AMULET_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Lu's ATK increases by 15%.\nLu gains 2 Nova Force at the start of battle.\nWhen attacking, damage increases by 4% for each stack of own cooling.\nAfter any of your allies except yourself uses a skill that is not an attack, if you are not in a sudden state of Ritsuryo (cannot be removed), give yourself one {Snow Flower} (cannot be removed).\nWhen using the Four Friends in the Snow on your turn, if you are not in the state of Sudden Nyo Ritsuryo (cannot be removed) but in the state of Yukinaka (unremovable), after attacking, give yourself {Kudky Nyo Ritsuryo} (unremovable) and increase your Action Gauge by 40% for each stack of Yukinaka (unremovable).\nThe maximum increase in Action Gauge due to this effect is 120%.\nThis effect does not occur for additional activated skills.",
        "novaBurst": ""
      },
      {
        "name": "Suppression Sign",
        "nameJp": "制圧符",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_RECON_AMULET_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attacks the enemy by throwing a protective spell at them.\nGive yourself 1 cooling stack.\nWhen using this skill on your turn, if you are suddenly in a state of Ritsuryo (cannot be removed), activate a suppression mark/slash instead of a suppression mark.\n[Suppression Mark/Slash]\nAttacks the enemy by throwing a protective spell at them.\nWhen attacking with Nova Burst activated, the damage of Suppression Mark and Slash increases by 10%, 30%, and 60% respectively in proportion to the number of times Nova Burst is activated.\nWhen attacking without activating Nova Burst, or when the Rule of Law (cannot be canceled) is suddenly canceled after attacking, all damage increase effects proportional to the number of times Nova Burst is activated are reset.\nWhen attacking, reduce your own Snow Flower (cannot be removed) by 1, and after the attack, if you are not in the Snow Flower (cannot be removed) state, cancel your own Sukyunyo Ritsuryo (cannot be removed).\nAfter attacking on your turn, there is a 100% chance to inflict {Haha Seal} on the enemy for 1 turn.\nThe effect of Hajain does not occur on additional activated skills.",
        "novaBurst": "When attacking, your Fixed Toughness Damage will temporarily increase by 1, and after the attack, if you are in {Suddenly Ritsuryo} (cannot be removed) and {Snow Flowers} (cannot be removed) state, an additional turn will occur."
      },
      {
        "name": "Four Friends in the Snow",
        "nameJp": "雪中四友",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_RECON_AMULET_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 55%",
        "exactDescription": "Attacks the enemy by creating cold air with a curse.\n100% chance to inflict {Haha Seal} on the enemy for 1 turn.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Tendou Inconsiderate, Evil Instant Slash",
        "nameJp": "天道不容、悪即斬",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_RECON_AMULET_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 10 turns | Toughness: 1",
        "multiplierSummary": "ATK 70%",
        "exactDescription": "Cut through evil things with a sword made from fetish.\nAfter attacking on your turn, there is a 75% chance to inflict Defense Down on the enemy for 2 turns, and a 100% chance to extend the cooldown of Ultimate Skill by 1 turn.\nAfter attacking on your turn, if you are not in a sudden state of Ritsuryo (cannot be removed), gain 3 more Nova Force and give yourself 1 {Snow Flower} (cannot be removed).\nAfter attacking on your turn, if you are suddenly in the state of Ritsuryo (cannot be removed), an additional turn will occur.\nAll effects of this attack do not occur on additional activated skills.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517831",
      "arcana-79517891",
      "arcana-79517774",
      "arcana-79517783"
    ],
    "staticData": {
      "nameJp": "ルー",
      "pool": "Standard",
      "attackType": "mental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-171-20251112031735.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_RECON_AMULET_img.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 150,
        "vitality": 20,
        "endurance": 20,
        "focus": 235,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "After Lu uses a suppression mark, freezes the enemy for 1 turn at a rate of 50%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Lu's ATK increases by 5%. After Lu uses a suppression mark, freezes the enemy for 1 turn at a rate of 50%."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Lu's ATK increases by 10%. After Lu uses a suppression mark, freezes the enemy for 1 turn at a 75% rate."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Lu's ATK increases by 15%. After Lu uses a suppression mark, freezes the enemy for 1 turn at 100%."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★",
          "recLevel": "Lv.8"
        }
      ],
      "curio": {
        "name": "Stellar Ranger Mask",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_STELLA_MASK.webp",
        "rank": "B (properly strengthened)",
        "effect": "When attacking, if you are not in Sudden Rutsuryo (unremovable) state, give yourself 1 Snow Flower (unremovable).\nAt the start of the turn, if you are in Sudden Rule (cannot be removed), acquire 4 Nova Force.\nThe Nova Force acquisition effect only occurs once every 3 turns."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Concentration",
          "effect": "Effect Hit increases by 10%."
        },
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Concentration Skills",
          "effect": "Effect Hit increases by 4%."
        }
      ],
      "gifts": [
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        },
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        }
      ],
      "profile": {
        "cv": "Yurina Watanabe",
        "affiliation": "Orbital Search Team",
        "birthday": "December 21st",
        "height": "167cm",
        "origin": "Touhou",
        "obtain": "Gacha (constant)",
        "bio": "Vice-captain of the Orbital Search Team belonging to Polaris. Due to a special constitution that has been passed down from generation to generation in the family, he does not feel pain. Rumor has it that he has hobbies that are completely hidden from those around him."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "epindel",
    "name": "Epindel",
    "title": "Orlan Family · Slash Damage",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/GRACE_DUALSWORD_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.0",
    "summary": "SSR Moon Assassin (Slash Damage). Epindel's ATK increases by 15%. Epindel grants himself a Cooling stack when a Moon Attribute ally hits a Critical Hit. When Epindel uses Orlan style swordsmanship, if his own Cooling is at maximum stack, the damage will be increased by 20%, and all Cooling stacks will disappear after u",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20480,
      "spd": 90,
      "atk": 4277,
      "def": 1594,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Aristocratic Dignity",
        "nameJp": "貴族の品格",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_GRACE_DUALSWORD_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Epindel's ATK increases by 15%.\nEpindel grants himself a Cooling stack when a Moon Attribute ally hits a Critical Hit. When Epindel uses Orlan style swordsmanship, if his own Cooling is at maximum stack, the damage will be increased by 20%, and all Cooling stacks will disappear after using Orlan style swordsmanship.",
        "novaBurst": ""
      },
      {
        "name": "Orlan Style Swordsmanship",
        "nameJp": "オルラン式剣術",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_GRACE_DUALSWORD_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attack the enemy with the dual sword technique of the Orlan family. Give yourself 1 Cooling stack.",
        "novaBurst": "When attacking, your Toughness also temporarily increases fixed damage by 1 and recovers HP equal to 30% of the damage."
      },
      {
        "name": "Persistent Effort",
        "nameJp": "粘り強い努力",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_GRACE_DUALSWORD_SPECIAL_icon.webp",
        "target": "Active Skill | Self",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Remind yourself of Orlan's pride and calm your spirit.\nRemoves 2 debuffs from yourself and grants ATK up and immunity for 3 turns.\nAfter that, there is a 100% chance to apply 1 Cooling stack to yourself, up to a maximum of 3.\nAdditionally, you will receive an additional turn.",
        "novaBurst": "After using a skill, recover 1 Toughness."
      },
      {
        "name": "Falcon of Orlan",
        "nameJp": "オルランの鷹",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_GRACE_DUALSWORD_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "After releasing sword energy in the form of a hawk, it pursues the enemy.\nGrants speed up to self for 3 turns.\nWhen attacking, if you are not in a weakened state, damage increases by 30%.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-80077855",
      "arcana-79517834",
      "arcana-79517783",
      "arcana-79534220"
    ],
    "staticData": {
      "nameJp": "エピンデル",
      "pool": "Standard",
      "attackType": "Slash Damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-23566-20251112031814.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_GRACE_DUALSWORD_img.webp",
      "pvpTier": "B",
      "journeyStats": {
        "power": 150,
        "vitality": 20,
        "endurance": 20,
        "focus": 10,
        "protection": 235
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Epindel applies one cooling stack to himself when a Moon Attribute ally takes a critical hit. When Epindel uses Orlan style swordsmanship, if his cooling stack is at maximum, the damage will be increased by 10%, and all cooling stacks will be consumed after using Orlan style swordsmanship."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Epindel's ATK increases by 5%. Epindel applies one cooling stack to himself when a Moon Attribute ally takes a critical hit. When Epindel uses Orlan style swordsmanship, if his cooling stack is at maximum, the damage will be increased by 10%, and all cooling stacks will be consumed after using Orlan style swordsmanship."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Epindel's ATK increases by 10%. Epindel applies one cooling stack to himself when a Moon Attribute ally takes a critical hit. When Epindel uses Orlan style swordsmanship, if his cooling stack is at maximum, the damage will be increased by 15%, and all cooling stacks will be consumed after using Orlan style swordsmanship."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Epindel's ATK increases by 15%. Epindel applies one cooling stack to himself when a Moon Attribute ally takes a critical hit. When Epindel uses Orlan style swordsmanship, if his cooling stack is at maximum, the damage will be increased by 20%, and all cooling stacks will be consumed after using Orlan style swordsmanship."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★★☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.10"
        }
      ],
      "curio": {
        "name": "Monument to Pride",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_PRIDE_MONUMENT.webp",
        "rank": "B (properly strengthened)",
        "effect": "After using \"Persistent Effort\", nullify skill damage once and increase ATK for 3 turns. After receiving an attack, if your HP is below 50%, the cooldown of \"Persistent Effort\" is reduced by 1 turn. After using \"Persistent Effort\", if your HP is below 50%, recover your HP. The amount of recovery increases in proportion to your ATK."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Protection",
          "effect": "Effect RES increases by 10%."
        },
        {
          "name": "Skill of Insight",
          "effect": "Crit rate increases by 3%."
        }
      ],
      "gifts": [
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        },
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        }
      ],
      "profile": {
        "cv": "Saki Miyashita",
        "affiliation": "Orlan Family",
        "birthday": "August 18th",
        "height": "165cm",
        "origin": "NOA",
        "obtain": "Gacha (constant)",
        "bio": "The next head of the Orlan family. Asherah and I are childhood friends. In many ways, he is conscious of Asherah and has a fierce rivalry with him."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "lydia",
    "name": "Lydia",
    "title": "Western Recapture Force · mental damage",
    "rarity": "SSR",
    "element": "Chaos",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/WEST_ROD_icon.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.6",
    "summary": "SSR Chaos Ranger (mental damage). Lydia's maximum HP increases by 15%. When Lydia attacks, Effect Hit increases by 6% in proportion to the stack. This effect can be applied to up to 5 items. After attacking, if the enemy is weakened, your ATK increases by 6%. This effect can be stacked up to 5 times. After using Empty ",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 23246,
      "spd": 107,
      "atk": 3808,
      "def": 1601,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Seeker of Emptiness",
        "nameJp": "空虚の探求者",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_WEST_ROD_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Lydia's maximum HP increases by 15%.\nWhen Lydia attacks, Effect Hit increases by 6% in proportion to the stack.\nThis effect can be applied to up to 5 items.\nAfter attacking, if the enemy is weakened, your ATK increases by 6%.\nThis effect can be stacked up to 5 times.\nAfter using Empty Hand, if the enemy is weakened, there is a 100% chance to inflict an unknown spell on the enemy for 1 turn.",
        "novaBurst": ""
      },
      {
        "name": "Empty Hands",
        "nameJp": "空虚の手",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_WEST_ROD_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attack the enemy using a power of unknown origin. Give yourself one turbulent stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1, and there is a 100% chance to reduce the enemy's Action Gauge by 15% after attacking."
      },
      {
        "name": "Invitation From Beyond the Constellations",
        "nameJp": "星座の彼方からの招待",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_WEST_ROD_SPECIAL_icon.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 50%",
        "exactDescription": "Attracts Kuuku's antennae to attack all enemies.\nGive yourself one turbulent stack.\n75% chance to inflict unknown spell on all enemies for 2 turns.\nWhen attacking, if the target is in the Unknown Spell state, there is a 100% chance to reduce the target's Action Gauge by 15%.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Imaginary Space of Books",
        "nameJp": "書物の虚空間",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_WEST_ROD_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Temporarily breaks Kuku's seal and unleashes unspeakable terror into the real world.\nGive yourself one turbulent stack. Also increases Action Gauge by 30%.\n100% chance to slow down enemy for 2 turns.\nAdditionally, there is a 100% chance to inflict an unknown spell on the enemy for 2 turns.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-80482327",
      "arcana-79517837",
      "arcana-79517882",
      "arcana-79517753"
    ],
    "staticData": {
      "nameJp": "リディア",
      "pool": "Standard",
      "attackType": "mental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-10703-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-171-20251112031735.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_WEST_ROD_img.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 150,
        "vitality": 20,
        "endurance": 20,
        "focus": 235,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "After Lydia uses Empty Hand, if the enemy is weakened, her ATK increases by 4% and causes the enemy to generate an unknown spell for 1 turn at 100%. ATK up can be stacked up to 5 times."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Lydia's maximum HP increases by 5%. After Lydia uses Empty Hand, if the enemy is weakened, her ATK increases by 4% and causes the enemy to generate an unknown spell for 1 turn at 100%. ATK up can be stacked up to 5 times."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Lydia's maximum HP increases by 10%. After Lydia uses Empty Hand, if the enemy is weakened, her own ATK increases by 5% and causes the enemy to generate an unknown spell for 1 turn at 100%. ATK up can be stacked up to 5 times."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Lydia's maximum HP increases by 15%. After Lydia uses Empty Hand, if the enemy is weakened, her own ATK increases by 6% and causes the enemy to generate an unknown spell for 1 turn at 100%. ATK up can be stacked up to 5 times."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.8"
        }
      ],
      "curio": {
        "name": "Suspicious Medicine Bottle",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_SUSPICIOUS_VIAL.webp",
        "rank": "B (properly strengthened)",
        "effect": "After using the skill, reduce the enemy's Action Gauge by 50%. After using \"Hand of Void\" or \"Void Room of Book\", there is a 100% chance to extend the weakening of the enemy by 1 turn and cause chain damage to all enemies proportional to your own ATK."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Concentration",
          "effect": "Effect Hit increases by 10%."
        },
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Concentration Skills",
          "effect": "Effect Hit increases by 4%."
        }
      ],
      "gifts": [
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        },
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        }
      ],
      "profile": {
        "cv": "Saya Aizawa",
        "affiliation": "Western Recapture Force",
        "birthday": "June 18th",
        "height": "156cm",
        "origin": "Western disaster area",
        "obtain": "Gacha (constant)",
        "bio": "Vice-captain of the Western Recapture Corps. She is always assisting Ceres next to her. She always has a bright smile on her face, but behind that smile lies a darkness."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "harley",
    "name": "Harley",
    "title": "Hellsaver · impact damage",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Defender",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/WILD_HOG_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.0",
    "summary": "SSR Sun Defender (impact damage). Harley's maximum HP increases by 15%. Harley's speed increases by 3% at 100% after an ally other than herself is attacked. Can be stacked up to 5 times. When attacking, if your own ignition stack is at maximum stack, consume all ignition stacks and give yourself Effect Hit up for 2 tur",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 25109,
      "spd": 99,
      "atk": 3352,
      "def": 1657,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "What? You Hit My Younger Brother!",
        "nameJp": "てめぇか？俺の舎弟を殴りやがって！",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_WILD_HOG_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Harley's maximum HP increases by 15%.\nHarley's speed increases by 3% at 100% after an ally other than herself is attacked. Can be stacked up to 5 times.\nWhen attacking, if your own ignition stack is at maximum stack, consume all ignition stacks and give yourself Effect Hit up for 2 turns.",
        "novaBurst": ""
      },
      {
        "name": "Let's Go, Dave!",
        "nameJp": "行くぞ、デイヴ！",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_WILD_HOG_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Move quickly and attack the enemy with Dave. Give yourself 1 Ignition stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage will temporarily increase by 1, and after attacking, there is a 100% chance that the enemy's Action Gauge will be reduced by 15%."
      },
      {
        "name": "Are You Going to Do It?",
        "nameJp": "やろうってのか？",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_WILD_HOG_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 76.5%",
        "exactDescription": "Use Dave as a springboard to jump and throw the ax at the enemy.\nIncreases speed for 2 turns and grants 3 Ignite stacks to the Sun Attribute ally with the highest ATK. 100% chance to reduce enemy's Action Gauge by 25%.\nThe amount of damage increases in proportion to your speed.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "It's a Chicken Race!",
        "nameJp": "チキンレースだ！",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_WILD_HOG_HYPER_icon.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 56.25%",
        "exactDescription": "Summons a flock of hogs to follow you and charge you.\nGrants defense power up to all allies for 2 turns, and has a 100% chance to reduce the Action Gauge of all enemies by 15%.\nIf your HP is 50% or higher, you have a 100% chance to speed up all allies except yourself for 1 turn, and if your HP is less than 50%, you will be in rampage mode (cannot be canceled) for 3 turns.\nThe amount of damage increases in proportion to your speed.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517768",
      "arcana-79517894",
      "arcana-79517777",
      "arcana-79517786"
    ],
    "staticData": {
      "nameJp": "ハーレー",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-9372-20251112031758.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_WILD_HOG_img.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 10,
        "vitality": 180,
        "endurance": 30,
        "focus": 10,
        "protection": 190
      },
      "equipment": {
        "pveSets": [
          "Life Set (Max HP +20%)",
          "Protection Set (DEF +20% / Guard Rate +10%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Immunity Set (1T Debuff Immunity)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "HP (%) / DEF (%) / Speed / Effect RES"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "Max HP +10% and Speed +6. At the start of battle, grants a Barrier equal to 15% of Max HP to all allies for 2 turns."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Harley's maximum HP increases by 5%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Harley's maximum HP increases by 5%.\nHarley's speed increases by 3% at 70% after an ally other than herself is attacked. Can be stacked up to 5 times.\nWhen attacking, if your own ignition stack is at maximum stack, consume all ignition stacks and give yourself Effect Hit up for 2 turns."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Harley's maximum HP increases by 10%.\nHarley's speed increases by 3% at 85% after an ally other than herself is attacked. Can be stacked up to 5 times.\nWhen attacking, if your own ignition stack is at maximum stack, consume all ignition stacks and give yourself Effect Hit up for 2 turns."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Harley's maximum HP increases by 15%.\nHarley's speed increases by 3% at 100% after an ally other than herself is attacked. Can be stacked up to 5 times.\nWhen attacking, if your own ignition stack is at maximum stack, consume all ignition stacks and give yourself Effect Hit up for 2 turns."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.1"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6｜Lv.8"
        }
      ],
      "curio": {
        "name": "Passionate Gaze",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_HOT_GAZE.webp",
        "rank": "B (properly strengthened)",
        "effect": "After being attacked, cast \"Let's go, Dave!\" on the enemy with the highest maximum HP. After using \"Let's go, Dave!\", if you are in rampage mode, the cooldown of all your skills will be reduced by 1 turn and your Action Gauge will be increased by 30%."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Sense of Protection",
          "effect": "Effect RES increases by 10%."
        },
        {
          "name": "Skill in Life",
          "effect": "Maximum HP increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        },
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        }
      ],
      "profile": {
        "cv": "Sayuri Yahagi",
        "affiliation": "Hellsaver",
        "birthday": "July 13th",
        "height": "154cm",
        "origin": "Western disaster area",
        "obtain": "Gacha (constant)",
        "bio": "The leader of the bikehog biker gang, Hellsaver. Rumor has it that he has committed numerous crimes and is on the wanted list. A generous girl who values ​​her obligations above all else."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "petra",
    "name": "Petra",
    "title": "Petra Union · impact damage",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/CONSTRUCT_BOMB_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "7.5",
    "summary": "SSR Sun Ranger (impact damage). Petra's ATK increases by 15%. After Petra breaks the enemy's Toughness with all allies except for herself, she gives herself one Ignite stack and increases her Action Gauge by 20%. Occurs only once per turn. Ultimate [Architectural Consultation]: Petra attacks by rolling a large number o",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20662,
      "spd": 104,
      "atk": 4223,
      "def": 1600,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Preliminary Consideration of Architectural Design",
        "nameJp": "建築設計の事前検討",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_CONSTRUCT_BOMB_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Petra's ATK increases by 15%.\nAfter Petra breaks the enemy's Toughness with all allies except for herself, she gives herself one Ignite stack and increases her Action Gauge by 20%. Occurs only once per turn.",
        "novaBurst": ""
      },
      {
        "name": "Improvised Design",
        "nameJp": "即興設計",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_CONSTRUCT_BOMB_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Petra slams the blueprint and attacks. Grants 1 ignition stack to yourself.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Start of Construction",
        "nameJp": "施工着手",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_CONSTRUCT_BOMB_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Petra takes out a bomb from her side bag and attacks.\nIncreases speed for 2 turns and grants 2 Ignition stacks.",
        "novaBurst": "When attacking, temporarily increases own Fixed Toughness Damage by 2."
      },
      {
        "name": "Architectural Consultation",
        "nameJp": "建築協議",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_CONSTRUCT_BOMB_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Petra attacks by rolling a large number of bombs. Enemy has 100% defense down for 2 turns. When attacking, increases by 4% in proportion to the number of Ignition stacks attached to yourself, up to a maximum of 5 stacks. After attacking, all Ignition stacks are consumed.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517771",
      "arcana-79517759",
      "arcana-79517774",
      "arcana-79517783"
    ],
    "staticData": {
      "nameJp": "ペトラ",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-171-20251112031735.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_CONSTRUCT_BOMB_img.webp",
      "pvpTier": "B",
      "journeyStats": {
        "power": 150,
        "vitality": 20,
        "endurance": 20,
        "focus": 235,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Petra's ATK increases by 5%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Petra's ATK increases by 5%. After Petra breaks the enemy's Toughness with all allies except herself, she grants herself 1 Ignite stack and increases her Action Gauge by 10%. Occurs only once per turn."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Petra's ATK increases by 10%. After Petra breaks the enemy's Toughness with all allies except herself, she grants herself 1 Ignite stack and increases her Action Gauge by 15%. Occurs only once per turn."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Petra's ATK increases by 15%. After Petra breaks the enemy's Toughness with all allies except herself, she grants herself 1 Ignite stack and increases her Action Gauge by 20%. Occurs only once per turn."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★",
          "recLevel": "Lv.8"
        }
      ],
      "curio": {
        "name": "Petra Tools Ver.00",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_PETRA_TOOLS.webp",
        "rank": "C (no change to that extent)",
        "effect": "When using Improvised Design, own Toughness Damage increases by 2."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Concentration",
          "effect": "Effect Hit increases by 10%."
        },
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Concentration Skills",
          "effect": "Effect Hit increases by 4%."
        }
      ],
      "gifts": [
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        },
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        }
      ],
      "profile": {
        "cv": "Mayu Mineta",
        "affiliation": "Petra Union",
        "birthday": "October 21st",
        "height": "155cm",
        "origin": "Callide",
        "obtain": "Gacha (constant)",
        "bio": "Representative of the Petra union, which undertakes all construction-related work, from demolition to construction. He has a talent for developing bombs that accurately destroy only their targets."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "lacy",
    "name": "Lacy",
    "title": "Eastern Continent · elemental damage",
    "rarity": "SSR",
    "element": "Chaos",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/INDEPENDENT_DRAGON_icon.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.2",
    "summary": "SSR Chaos Ranger (elemental damage). Lacy's ATK increases by 15%. At the start of battle, give yourself 2 turbulent stacks. After being attacked by an enemy with Intertwined Dreams, increase Action Gauge by 10% and apply one stack of Convulsion. Additionally, recovers own HP. After receiving an attack, if your own turb",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20822,
      "spd": 115,
      "atk": 4082,
      "def": 1601,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Sentences That Hold the Wind",
        "nameJp": "風を宿す文",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_INDEPENDENT_DRAGON_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 54%",
        "exactDescription": "Lacy's ATK increases by 15%.\nAt the start of battle, give yourself 2 turbulent stacks.\nAfter being attacked by an enemy with Intertwined Dreams, increase Action Gauge by 10% and apply one stack of Convulsion.\nAdditionally, recovers own HP.\nAfter receiving an attack, if your own turbulence is at maximum stack and the enemy is not in the Intertwined Dream state, consume all {turbulent stacks} and give the attacker 2 turns of Intertwined Dream with a 100% chance.\nThe amount of recovery increases in proportion to your ATK.",
        "novaBurst": ""
      },
      {
        "name": "Fire Dragon Seiten",
        "nameJp": "火龍生天",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_INDEPENDENT_DRAGON_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attacks by releasing a breath of fire. Grants 1 turbulent stack to yourself.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Backflow Water Hell",
        "nameJp": "逆流水獄",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_INDEPENDENT_DRAGON_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 110%",
        "exactDescription": "Attacks with a column of flowing water.\nGive yourself one turbulent stack.\nAdditionally, grants Speed ​​Up for 2 turns.\nWhen attacking, if the enemy is in the entwined dream state, the damage will increase by 20%.",
        "novaBurst": "When attacking, temporarily increases own Fixed Toughness Damage by 1 and increases damage by 20%."
      },
      {
        "name": "Poem of Water and Fire",
        "nameJp": "水と火の詩",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_INDEPENDENT_DRAGON_HYPER_icon.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 52.5%",
        "exactDescription": "It attacks by wielding a sword imbued with the power of water and fire.\nGive yourself 3 turbulent stacks.\nAdditionally, grants ATK up for 3 turns.\nAfter that, grants 100% chance of granting Intertwined Dreams to all enemies for 3 turns.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517774",
      "arcana-79517783",
      "arcana-79534220",
      "arcana-79576397"
    ],
    "staticData": {
      "nameJp": "レイシー",
      "pool": "Standard",
      "attackType": "elemental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-10703-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-171-20251112031735.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_INDEPENDENT_DRAGON_img.webp",
      "pvpTier": "S",
      "journeyStats": {
        "power": 150,
        "vitality": 20,
        "endurance": 20,
        "focus": 235,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "After Lacy is attacked by a dream-state enemy, increases Action Gauge by 6% and recovers HP. The amount of recovery increases in proportion to your ATK."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Lacy's ATK increases by 5%. After Lacy is attacked by a dream-state enemy, increases Action Gauge by 6% and recovers HP. The amount of recovery increases in proportion to your ATK."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Lacy's ATK increases by 10%. After Lacy is attacked by a dream enemy, increases Action Gauge by 8% and recovers HP. The amount of recovery increases in proportion to your ATK."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Lacy's ATK increases by 15%. After Lacy is attacked by a dream-state enemy, increases Action Gauge by 10% and recovers HP. The amount of recovery increases in proportion to your ATK."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★",
          "recLevel": "Lv.8"
        }
      ],
      "curio": {
        "name": "Breath of Blue",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_CLEAR_OUTLOOK_BREATH.webp",
        "rank": "C (no change to that extent)",
        "effect": "After using Fire Dragon Seiten, if the enemy is in a dream state, increase own Action Gauge by 15%."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Speed",
          "effect": "Increases speed by 5."
        },
        {
          "name": "Sense of Concentration",
          "effect": "Effect Hit increases by 10%."
        },
        {
          "name": "Speed Prowess",
          "effect": "Speed increases by 2."
        }
      ],
      "gifts": [
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        },
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        }
      ],
      "profile": {
        "cv": "Kaori Maeda",
        "affiliation": "Eastern Continent",
        "birthday": "One Day When Pink Flowers Bloom",
        "height": "170cm",
        "origin": "dragon valley",
        "obtain": "Gacha (constant)",
        "bio": "A dragon tribe from the eastern continent. Although he has been active as a writer for many years and achieved great success, he seems to have fallen into a slump recently."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "tanya",
    "name": "Tanya",
    "title": "Petra Union · impact damage",
    "rarity": "SSR",
    "element": "Star",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/CONSTRUCT_GADGET_icon.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.6",
    "summary": "SSR Star Striker (impact damage). Tanya's ATK increases by 15%. After Tanya breaks the enemy's Toughness, she gives herself 3 Jump stacks and increases the Action Gauge of all allies except herself by 10%. At the start of the turn, if your Jump stack is at its maximum, consume it all and cause yourself to enter Demolit",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 21573,
      "spd": 100,
      "atk": 4223,
      "def": 1669,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Demolition Work",
        "nameJp": "解体作業",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_CONSTRUCT_GADGET_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Tanya's ATK increases by 15%.\nAfter Tanya breaks the enemy's Toughness, she gives herself 3 Jump stacks and increases the Action Gauge of all allies except herself by 10%.\nAt the start of the turn, if your Jump stack is at its maximum, consume it all and cause yourself to enter Demolition Mode for 3 turns.",
        "novaBurst": ""
      },
      {
        "name": "Boom Tool",
        "nameJp": "ドカーン工具",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_CONSTRUCT_GADGET_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attacks enemies by wielding a heavy multi-tool. Give yourself 1 Jump stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Bang Bang Electric Saw",
        "nameJp": "バンバン電動ノコギリ",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_CONSTRUCT_GADGET_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Cut enemies with a cutting tool equipped with a multi-tool. Increases Crit Rate for all allies for 1 turn and increases own Action Gauge by 30%.",
        "novaBurst": "When attacking, temporarily increases own Fixed Toughness Damage by 1 and increases damage by 20%."
      },
      {
        "name": "Gangan Bunker",
        "nameJp": "ガンガンバンカー",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_CONSTRUCT_GADGET_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Crush the enemy with a jackhammer that utilizes all the functions of a multi-tool. Increases ATK for 2 turns. When attacking, if your unit is in demolition mode, Toughness Damage increases by 1.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517777",
      "arcana-79517783",
      "arcana-79534220",
      "arcana-79576397"
    ],
    "staticData": {
      "nameJp": "ターニャ",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-1533-20251112031704.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_CONSTRUCT_GADGET_img.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 180,
        "vitality": 20,
        "endurance": 140,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Tanya's ATK increases by 5%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Tanya's ATK increases by 5%. After Tanya breaks the enemy's Toughness, she grants herself 3 jumping stacks and increases the Action Gauge of all allies except herself by 6%. At the start of a turn, if your jump stack is at its maximum, consume it all and cause yourself to enter Demolition Mode for 3 turns."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Tanya's ATK increases by 10%. After Tanya breaks the enemy's Toughness, she gives herself 3 jumping stacks and increases the Action Gauge of all allies except herself by 8%. At the start of a turn, if your jump stack is at its maximum, consume it all and cause yourself to enter Demolition Mode for 3 turns."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Tanya's ATK increases by 15%. After Tanya breaks the enemy's Toughness, she gives herself 3 jumping stacks and increases the Action Gauge of all allies except herself by 10%. At the start of a turn, if your jump stack is at its maximum, consume it all and cause yourself to enter Demolition Mode for 3 turns."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.8"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6｜Lv.10"
        }
      ],
      "curio": {
        "name": "Telmir Safety Belt",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_SAFETY_BELT.webp",
        "rank": "C (no change to that extent)",
        "effect": "When attacking, if you are in a strengthened state, your damage will increase by 20%."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Defense",
          "effect": "Defense power increases by 5%."
        },
        {
          "name": "Skill in Life",
          "effect": "Maximum HP increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        },
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        }
      ],
      "profile": {
        "cv": "Mina Nakazawa",
        "affiliation": "Petra Union",
        "birthday": "December 1st",
        "height": "173cm",
        "origin": "unknown",
        "obtain": "Gacha (constant)",
        "bio": "An intern belonging to the Petra union. He has extraordinary strength and tries to solve everything by force when Marcille isn't watching. I love tempura."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "lily",
    "name": "Lily",
    "title": "Lampadis · mental damage",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/DETECTIVE_WATSON_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "8.0",
    "summary": "SSR Moon Caster (mental damage). Lily's ATK increases by 15%. Lily increases her Action Gauge by 20% after using Usagi-san's Instant Judgment. After a Moon Attribute ally other than yourself is attacked, give yourself 1 Cooling stack. At the start of the turn, if your Cooling is at maximum stack, consume all stacks and",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 21080,
      "spd": 90,
      "atk": 4277,
      "def": 1594,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Mystery Duo",
        "nameJp": "ミステリーコンビ",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_DETECTIVE_WATSON_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Lily's ATK increases by 15%.\nLily increases her Action Gauge by 20% after using Usagi-san's Instant Judgment.\nAfter a Moon Attribute ally other than yourself is attacked, give yourself 1 Cooling stack.\nAt the start of the turn, if your Cooling is at maximum stack, consume all stacks and give yourself Rabbit-san's Investigation Advice for 2 turns.",
        "novaBurst": ""
      },
      {
        "name": "A Blow in Confusion",
        "nameJp": "混乱中の一撃",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_DETECTIVE_WATSON_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attack the enemy with the help of Usagi-san's mysterious power. Give yourself 1 Cooling stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Lily's Precious Time",
        "nameJp": "リリーの大事な時間",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_DETECTIVE_WATSON_SPECIAL_icon.webp",
        "target": "Active Skill | All Allies",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 66%",
        "exactDescription": "Repair the rabbit on the spot and find a way out.\nApplies Barrier to all allies except yourself for 2 turns.\nAdditionally, grants ATK up and Usagi-san's investigative advice to yourself for 2 turns.\nThen increase Action Gauge by 50%.\nBarrier amount increases in proportion to own ATK.",
        "novaBurst": "After using a skill, recover 1 Toughness."
      },
      {
        "name": "Rabbit's Instant Judgment",
        "nameJp": "ウサギさんの即決審判",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_DETECTIVE_WATSON_HYPER_icon.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 66.25%",
        "exactDescription": "At the moment of crisis, the rabbit stuffed animal directly attacks the enemy.\nGive yourself 1 Cooling stack.\nAdditionally, there is a 75% chance to apply ATK Down for 2 turns to all enemies for 2 turns.\nWhen attacking, if you are in the state of Usagi-san's Investigation Advice, the damage will increase by 30%.",
        "novaBurst": "When attacking, your Fixed Toughness Damage is temporarily increased by 1, and after attacking, all enemies have 100% ATK down for 2 turns."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517780",
      "arcana-79517852",
      "arcana-79517753",
      "arcana-79517756"
    ],
    "staticData": {
      "nameJp": "リリー",
      "pool": "Standard",
      "attackType": "mental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-57169-20251112031841.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_DETECTIVE_WATSON_img.webp",
      "pvpTier": "B",
      "journeyStats": {
        "power": 150,
        "vitality": 20,
        "endurance": 20,
        "focus": 235,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Lily's ATK increases by 5%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Lily's ATK increases by 5%. Lily increases her Action Gauge by 10% after using Usagi-san's Instant Judgment."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Lily's ATK increases by 10%. Lily increases her Action Gauge by 15% after using Usagi-san's Instant Judgment."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Lily's ATK increases by 15%. Lily increases her Action Gauge by 20% after using Usagi-san's Instant Judgment."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6｜Lv.10"
        }
      ],
      "curio": {
        "name": "Stuffed Animal Costume Making Kit",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_STUFFED_DOLL_MAKING_KIT.webp",
        "rank": "C (no change to that extent)",
        "effect": "After using Lily's precious time, give yourself an additional turn."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Concentration",
          "effect": "Effect Hit increases by 10%."
        },
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Concentration Skills",
          "effect": "Effect Hit increases by 4%."
        }
      ],
      "gifts": [
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        },
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        }
      ],
      "profile": {
        "cv": "Hikaru Iida",
        "affiliation": "Lampadis",
        "birthday": "November 5th",
        "height": "151cm",
        "origin": "NOA",
        "obtain": "Gacha (constant)",
        "bio": "An apprentice investigator at Lampadis Investigation Consulting. She is always holding a large stuffed rabbit that she named Usagi-san. People around her are worried because she sometimes talks to rabbits."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "kira",
    "name": "Kira",
    "title": "Kira Doesn't Have Any Friends · mental damage",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MUTANT_MASK_icon.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.2",
    "summary": "SSR Sun Assassin (mental damage). Kira's ATK increases by 15%. When using Kira's skill, if you are hidden, the damage will increase by 10%. When using Extraordinary Greetings, if your Ignition stack is at its maximum, consume all stacks and apply Incubation to yourself for 1 turn. Ultimate [Distorted Interest]: Release",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20480,
      "spd": 90,
      "atk": 4336,
      "def": 1594,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Words That Cut Through the Skin",
        "nameJp": "肌を切り裂く言霊",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MUTANT_MASK_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Kira's ATK increases by 15%.\nWhen using Kira's skill, if you are hidden, the damage will increase by 10%.\nWhen using Extraordinary Greetings, if your Ignition stack is at its maximum, consume all stacks and apply Incubation to yourself for 1 turn.",
        "novaBurst": ""
      },
      {
        "name": "Unusual Greeting",
        "nameJp": "非日常的な挨拶",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MUTANT_MASK_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attack the enemy by creating an accidental collision. Give yourself 1 Ignition stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage will temporarily increase by 1, and after attacking, you will be able to hide for 1 turn."
      },
      {
        "name": "Price of Silence",
        "nameJp": "沈黙の代償",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MUTANT_MASK_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Use the spirit of speech to imagine an eerie future.\nGrants ATK up for 2 turns and 2 ignition stacks to self.\nIf you are hidden, reduce the enemy's Action Gauge by 30%.\nWhen attacking a silenced enemy, damage increases by 30%.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Distorted Interest",
        "nameJp": "歪んだ関心",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MUTANT_MASK_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Release the power of words and bring an unfortunate end to your enemies.\nGive yourself stealth for 2 turns and 2 stacks of ignition.\nCauses 100% ATK down for 2 turns on enemy.\nAdditionally, there is a 100% chance to apply Silence for 1 turn.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517783",
      "arcana-79517870",
      "arcana-79517756",
      "arcana-79517759"
    ],
    "staticData": {
      "nameJp": "キラ",
      "pool": "Standard",
      "attackType": "mental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-23566-20251112031814.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_MUTANT_MASK_img.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 180,
        "vitality": 20,
        "endurance": 20,
        "focus": 190,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "When using Kira's skill, damage increases by 6% if you are hidden.\nWhen using Extraordinary Greetings, if your ignition stack is at its maximum, consume all stacks and apply invisibility to yourself for 1 turn."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Kira's ATK increases by 5%.\nWhen using Kira's skill, damage increases by 6% if you are hidden.\nWhen using Extraordinary Greetings, if your ignition stack is at its maximum, consume all stacks and apply invisibility to yourself for 1 turn."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Kira's ATK increases by 10%.\nWhen using Kira's skill, damage increases by 8% if you are hidden.\nWhen using Extraordinary Greetings, if your ignition stack is at its maximum, consume all stacks and apply invisibility to yourself for 1 turn."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Kira's ATK increases by 15%.\nWhen using Kira's skill, damage increases by 10% if you are hidden.\nWhen using Extraordinary Greetings, if your ignition stack is at its maximum, consume all stacks and apply invisibility to yourself for 1 turn."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.10"
        }
      ],
      "curio": {
        "name": "Chief Nyaon's Key Chain",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_KITTY_KEYCHAIN.webp",
        "rank": "C (no change to that extent)",
        "effect": "After using Warped Interest, create a barrier on yourself for 2 turns. Barrier increases in proportion to own ATK."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Insight",
          "effect": "Crit rate increases by 5%."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        },
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        }
      ],
      "profile": {
        "cv": "Rishino Aono",
        "affiliation": "Kira Doesn't Have Any Friends",
        "birthday": "April 4th",
        "height": "155cm",
        "origin": "NOA",
        "obtain": "Gacha (constant)",
        "bio": "A girl with a special ability called Kotodama, which holds power in her voice. As a child, he was unable to control his words and caused trouble to those around him, which led to him gradually becoming a shy person."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "bunny-scarlet",
    "name": "Bunny Scarlet",
    "title": "Candle Square · impact damage",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/103214_qznbh.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.6",
    "summary": "SSR Sun Ranger (impact damage). Scarlet's Crit Rate increases by 15%. When Scarlet attacks, the damage increases by 7% in proportion to the Ignition stacks attached to her. This effect can be applied up to 5 stacks. At the start of Scarlet's turn, give yourself pinball time! will occur three times, and after the attack",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 21573,
      "spd": 100,
      "atk": 3778,
      "def": 1600,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "High Score!",
        "nameJp": "ハイスコア！",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_BUNNY_SCISSORS_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Scarlet's Crit Rate increases by 15%.\nWhen Scarlet attacks, the damage increases by 7% in proportion to the Ignition stacks attached to her.\nThis effect can be applied up to 5 stacks.\nAt the start of Scarlet's turn, give yourself pinball time! will occur three times, and after the attack, it's pinball time! Clear all conditions.\nAt the start of your turn, your speed increases by 1 depending on the number of Seven Balls (cannot be removed) you have. Can be stacked up to 10 times.\nNormal ball (cannot be removed): Increases damage dealt by 1%\nSeven ball (cannot be removed): Increases damage dealt by 7%",
        "novaBurst": ""
      },
      {
        "name": "Go All at Once!",
        "nameJp": "一気に行くのだ！",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_BUNNY_SCISSORS_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attack the enemy with a separated Tailion. Give yourself 1 Ignition stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "This Is Invalid!",
        "nameJp": "これは無効なのだ！",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_BUNNY_SCISSORS_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 70%",
        "exactDescription": "Throw the plate Scarlet was holding.\n100% chance to reduce recovery amount for 2 turns and remove 1 enemy's strengthening effect.\nThen, give yourself 1 Ignition stack.\nYou will also receive an additional turn.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "I Won Anyway!",
        "nameJp": "とりあえず勝ったのだ！",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_BUNNY_SCISSORS_HYPER_icon.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 40%",
        "exactDescription": "Scarlet hits a large pinball that damages all enemies.\n75% chance to reduce speed for 1 turn and 100% chance to reduce recovery amount for 2 turns.\nGive yourself 1 Ignition stack.\nThe cooldown time of this skill is reduced by 1 turn depending on the number of Seven Balls (cannot be removed) that you own.\nIf there are 3 Seven Balls (cannot be removed), the cooldown time of this skill will be initialized.",
        "novaBurst": "When attacking, your Fixed Toughness Damage will temporarily increase by 1 and your damage will increase by 20%."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517759",
      "arcana-79517774",
      "arcana-79517783",
      "arcana-79534220"
    ],
    "staticData": {
      "nameJp": "バニースカーレット",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-171-20251112031735.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2025/11/103214_mxha8.webp",
      "pvpTier": "B",
      "journeyStats": {
        "power": 180,
        "vitality": 140,
        "endurance": 20,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "When Scarlet attacks, the damage increases by 7% in proportion to the ignition stacks attached to her.\nThis effect can be applied up to 5 stacks.\nAt the start of Scarlet's turn, give yourself pinball time! occurs 3 times and it's pinball time after the attack! Clear all conditions.\nAt the start of your turn, your speed increases by 1 depending on the number of Seven Balls (cannot be removed) you have. Can be stacked up to 6 times.\nNormal ball (cannot be removed): Increases damage dealt by 1%\nSeven ball (cannot be removed): Increases damage dealt by 7%"
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Scarlet's Crit Rate increases by 5%.\nWhen Scarlet attacks, the damage increases by 7% in proportion to the ignition stack attached to her.\nThis effect can be applied up to 5 stacks.\nAt the start of Scarlet's turn, give yourself pinball time! occurs 3 times and it's pinball time after the attack! Clear all conditions.\nAt the start of your turn, your speed increases by 1 depending on the number of Seven Balls (cannot be removed) you have. Can be stacked up to 6 times.\nNormal ball (cannot be removed): Increases damage dealt by 1%\nSeven ball (cannot be removed): Increases damage dealt by 7%"
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Scarlet's Crit Rate increases by 10%.\nWhen Scarlet attacks, the damage increases by 7% in proportion to the ignition stack attached to her.\nThis effect can be applied up to 5 stacks.\nAt the start of Scarlet's turn, give yourself pinball time! occurs 3 times and it's pinball time after the attack! Clear all conditions.\nAt the start of your turn, your speed increases by 1 depending on the number of Seven Balls (cannot be removed) you have. Can be stacked up to 8 times.\nNormal ball (cannot be removed): Increases damage dealt by 1%\nSeven ball (cannot be removed): Increases damage dealt by 7%"
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Scarlet's Crit Rate increases by 15%.\nWhen Scarlet attacks, the damage increases by 7% in proportion to the ignition stack attached to her.\nThis effect can be applied up to 5 stacks.\nAt the start of Scarlet's turn, give yourself pinball time! occurs 3 times and it's pinball time after the attack! Clear all conditions.\nAt the start of your turn, your speed increases by 1 depending on the number of Seven Balls (cannot be removed) you have. Can be stacked up to 10 times.\nNormal ball (cannot be removed): Increases damage dealt by 1%\nSeven ball (cannot be removed): Increases damage dealt by 7%"
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★★☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        }
      ],
      "curio": {
        "name": "Handmade Bunny Headband",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_BUNNY_HEADBAND.webp",
        "rank": "C (no change to that extent)",
        "effect": "When attacking, if you have 4 or more enhancements, your Crit Rate increases by 20%."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Concentration Skills",
          "effect": "Effect Hit increases by 4%."
        }
      ],
      "gifts": [
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        },
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        }
      ],
      "profile": {
        "cv": "Misaki Akiyama",
        "affiliation": "Candle Square",
        "birthday": "May 5th",
        "height": "155cm",
        "origin": "dragon valley",
        "obtain": "Gacha (constant)",
        "bio": "A dragon girl who dreams of becoming a great tailor. He is ignorant of the common sense of human society, and is often scolded by Claire for causing trouble."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "bunny-claire",
    "name": "Bunny Claire",
    "title": "Candle Square · impact damage",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/103213_6rb9d.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.6",
    "summary": "SSR Moon Striker (impact damage). Claire's ATK increases by 15%. At the start of Claire's turn, her Crit Rate increases by 10%. Can be stacked up to 3 times. After using invisible movement, if your cooling is at maximum stack, it will be consumed and \"Where are you looking?\" will be activated. Ultimate [Bunny Jackpot]:",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 21573,
      "spd": 104,
      "atk": 4280,
      "def": 1600,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Confidence in Victory",
        "nameJp": "勝利への確信",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_BUNNY_SPEAR_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Claire's ATK increases by 15%.\nAt the start of Claire's turn, her Crit Rate increases by 10%. Can be stacked up to 3 times.\nAfter using invisible movement, if your cooling is at maximum stack, it will be consumed and \"Where are you looking?\" will be activated.",
        "novaBurst": ""
      },
      {
        "name": "An Unstoppable Movement",
        "nameJp": "目にも止まらぬ動き",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_BUNNY_SPEAR_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 50%",
        "exactDescription": "Approach quickly, pull the spear wide, and then stab it forcefully.\nGive yourself 1 Cooling stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Where Are You Looking?",
        "nameJp": "どこを見ているのですか？",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_BUNNY_SPEAR_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 55%",
        "exactDescription": "Hit the jackpot and attack.\nIncreases ATK for 2 turns and increases Action Gauge by 30%.\nIf a Critical Hit occurs, give yourself 3 Cooling stacks.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Bunny Jackpot",
        "nameJp": "バニージャックポット",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_BUNNY_SPEAR_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Toss a card with good luck and make it explode.\nWhen attacking, own Crit Rate increases by 20%.\nAfter attacking, generate Jackpot Lum for 3 turns on yourself.\nDamage increases by 10% depending on the number of reinforcements the enemy has, up to a maximum of 5.",
        "novaBurst": "When attacking, temporarily increases own Fixed Toughness Damage by 1 and increases own Action Gauge by 20% after attacking."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517774",
      "arcana-79517783",
      "arcana-79534220",
      "arcana-79576397"
    ],
    "staticData": {
      "nameJp": "バニークレア",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-1533-20251112031704.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2025/11/103214_6nm5y.webp",
      "pvpTier": "S",
      "journeyStats": {
        "power": 180,
        "vitality": 140,
        "endurance": 20,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "At the start of Claire's turn, her Crit Rate increases by 6%. Can be stacked up to 3 times. After using invisible movement, if your cooling is at maximum stack, it will be consumed and \"Where are you looking?\" will be activated."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Claire's ATK increases by 5%. At the start of Claire's turn, her Crit Rate increases by 6%. Can be stacked up to 3 times. After using invisible movement, if your cooling is at maximum stack, it will be consumed and \"Where are you looking?\" will be activated."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Claire's ATK increases by 10%. At the start of Claire's turn, her Crit Rate increases by 8%. Can be stacked up to 3 times. After using invisible movement, if your cooling is at maximum stack, it will be consumed and \"Where are you looking?\" will be activated."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Claire's ATK increases by 15%. At the start of Claire's turn, her Crit Rate increases by 10%. Can be stacked up to 3 times. After using invisible movement, if your cooling is at maximum stack, it will be consumed and \"Where are you looking?\" will be activated."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        }
      ],
      "curio": {
        "name": "Defective Playing Cards",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_DEFECTIVE_TRUMP.webp",
        "rank": "B (properly strengthened)",
        "effect": "If you defeat an enemy with Bunny Jackpot, increase your Action Gauge by 100%."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        },
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        }
      ],
      "profile": {
        "cv": "Hikari Sonoyama",
        "affiliation": "Candle Square",
        "birthday": "January 30th",
        "height": "162cm",
        "origin": "NOA",
        "obtain": "Gacha (constant)",
        "bio": "Candle Square's noble maid and acting head maid. He has a personality that values ​​planning and Lulu above all else, and is always making plans for irregular situations."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "omega",
    "name": "Omega",
    "title": "Voyager Relief Team · impact damage",
    "rarity": "SSR",
    "element": "Star",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/STARPIERCER_OMEGA_icon.webp",
    "overallTier": "B",
    "rerollTier": "B",
    "score": "7.5",
    "summary": "SSR Star Caster (impact damage). Omega's ATK increases by 15%. After Omega attacks a Star Attribute ally other than himself, he grants himself 1 Jump stack at 100%. At the start of the turn, if your Jump stack is at its maximum, it will be consumed and a power-up star will be generated once. At the start of the turn, i",
    "recommendedDupes": "★★★ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 21380,
      "spd": 96,
      "atk": 4277,
      "def": 1594,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Auto Battle System",
        "nameJp": "オートバトルシステム",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/12/141021_8hmqf.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Omega's ATK increases by 15%.\nAfter Omega attacks a Star Attribute ally other than himself, he grants himself 1 Jump stack at 100%.\nAt the start of the turn, if your Jump stack is at its maximum, it will be consumed and a power-up star will be generated once.\nAt the start of the turn, if your Power Up Star is at maximum stack, Jump will not be consumed.",
        "novaBurst": ""
      },
      {
        "name": "Burn!",
        "nameJp": "バーン！",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/12/141020_8bxm4.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Fires 3 short laser beams.\nGive yourself 1 Jump stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Mega Punch!",
        "nameJp": "メガパンチ！",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/12/141020_t0mo5.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 30%",
        "exactDescription": "Attacks with multiple projectile punches.\nGive yourself 1 Jump stack.\nThe effect changes depending on the number of times your own power-up star stacks.\nMega Punch! Mega punch that is additionally activated by! Activates only on your turn.\nPower Up Star 1 stack: Mega Punch! Activate once again.\nPower Up Star 2 Stacks: Mega Punch! Activates twice additionally.\nPower Up Star 3 stacks: Increases damage by 10% and delivers a mega punch! Activates twice additionally.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1.\nMega punch that activates additionally! This effect does not apply to"
      },
      {
        "name": "The Biggest and Coolest One!",
        "nameJp": "一番大きくてかっこいいやつ！",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/12/141020_5svxp.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Summons and attacks the biggest and coolest thing registered in the database.\nIncreases ATK for 2 turns and grants 3 jumping stacks to self.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1 and damage increases by 20%."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79576397",
      "arcana-79517783",
      "arcana-79534220",
      "arcana-79717619"
    ],
    "staticData": {
      "nameJp": "オメガ",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-57169-20251112031841.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_STARPIERCER_OMEGA_img.webp",
      "pvpTier": "B",
      "journeyStats": {
        "power": 180,
        "vitality": 140,
        "endurance": 20,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★★",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "After Omega attacks a Star Attribute ally other than himself, Omega grants 1 jumping stack to himself at 70%. At the start of the turn, if your jump stack is at its maximum, it will be consumed and a power-up star will be generated once. At the start of the turn, if your power-up star is at maximum stack, jumping will not be consumed."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Omega's ATK increases by 5%. After Omega attacks a Star Attribute ally other than himself, Omega grants 1 jumping stack to himself at 70%. At the start of the turn, if your jump stack is at its maximum, it will be consumed and a power-up star will be generated once. At the start of the turn, if your power-up star is at maximum stack, jumping will not be consumed."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Omega's ATK increases by 10%. After Omega attacks a Star Attribute ally other than himself, he will give himself 1 jumping stack at 85%. At the start of the turn, if your jump stack is at its maximum, it will be consumed and a power-up star will be generated once. At the start of the turn, if your power-up star is at maximum stack, jumping will not be consumed."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Omega's ATK increases by 15%. After Omega attacks a Star Attribute ally other than himself, he grants himself 1 jumping stack at 100%. At the start of the turn, if your jump stack is at its maximum, it will be consumed and a power-up star will be generated once. At the start of the turn, if your power-up star is at maximum stack, jumping will not be consumed."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★\nAs far as you can go",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6"
        }
      ],
      "curio": {
        "name": "Energy Controller",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_ENERGY_CONTROLLER.webp",
        "rank": "C (no change to that extent)",
        "effect": "The biggest and coolest one! After use, increase own Action Gauge by 50%."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Speed Prowess",
          "effect": "Speed increases by 2."
        }
      ],
      "gifts": [
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        },
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        }
      ],
      "profile": {
        "cv": "Maria Naganawa",
        "affiliation": "Voyager Relief Team",
        "birthday": "February 4th",
        "height": "131cm",
        "origin": "star piercer",
        "obtain": "Gacha (constant)",
        "bio": "An artificial intelligence from a super ancient civilization that was sealed in the leader's sword. He joins the Voyager Rescue Team to reunite with his long-lost family."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "dress-asherah",
    "name": "Dress Asherah",
    "title": "Voyager Relief Team · Slash Damage",
    "rarity": "SSR",
    "element": "Order",
    "role": "Supporter",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/12/165111_tyvh9.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.6",
    "summary": "SSR Order Supporter (Slash Damage). Asherah's maximum HP increases by 15%. After Asherah uses Bel Rahm, she restores the HP of the ally with the lowest current HP percentage. The chance of pincer attacks increases by 20% in proportion to the insight stacks granted to you, and applies up to a maximum of 5. The amount of",
    "recommendedDupes": "★★★ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 25006,
      "spd": 104,
      "atk": 3369,
      "def": 1729,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Lunison",
        "nameJp": "リュニソン",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/12/164509_blanc.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "HP4.5%",
        "exactDescription": "Asherah's maximum HP increases by 15%.\nAfter Asherah uses Bel Rahm, she restores the HP of the ally with the lowest current HP percentage.\nThe chance of pincer attacks increases by 20% in proportion to the insight stacks granted to you, and applies up to a maximum of 5.\nThe amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": ""
      },
      {
        "name": "Bel Rahm",
        "nameJp": "ベル・ラーム",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/12/164508_f4n1a.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 50%",
        "exactDescription": "Rushes towards the enemy and slashes with force.\nGrant yourself 1 Insight stack.\nThe amount of damage increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1 and removes 1 debuff from all allies after the attack."
      },
      {
        "name": "Val Dore",
        "nameJp": "バル・ドレ",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/12/164509_gkeiq.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 55%",
        "exactDescription": "Shoots out sword energy wrapped in a dazzling flash.\nRecovers HP of all allies.\nGenerates Starlight Wish (cannot be removed) on self for 2 turns and grants 1 Insight stack.\nDamage and recovery amount increase in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Lumière Sonnet",
        "nameJp": "ルミエール・ソネット",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/12/164509_x245q.webp",
        "target": "Active Skill | All Allies",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "HP7.5%",
        "exactDescription": "Walk down the red carpet and welcome your allies.\nAfter recovering the HP of all allies and removing 2 debuffs, increase the Action Gauge of all allies except yourself by 15%.\nThe amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": "After using a skill, recover 1 Toughness."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517741",
      "arcana-79517744",
      "arcana-79517750",
      "arcana-79517792"
    ],
    "staticData": {
      "nameJp": "ドレスアセラ",
      "pool": "Standard",
      "attackType": "Slash Damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-65502-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-18986-20251112031910.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2025/12/183033_c3iw4.webp",
      "pvpTier": "SS",
      "journeyStats": {
        "power": 10,
        "vitality": 180,
        "endurance": 150,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Speed Set (SPD +25%)",
          "Life Set (Max HP +20%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Immunity Set (1T Debuff Immunity)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "Speed / HP (%) / Effect Hit / Effect RES"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "Max HP +10% and Speed +6. At the start of battle, grants a Barrier equal to 15% of Max HP to all allies for 2 turns."
      },
      "dupeRating": "★★★",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Asherah's maximum HP increases by 5%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Asherah's maximum HP increases by 5%. After Asherah uses Bel Rahm, she restores the HP of the ally with the lowest current HP percentage. The pincer attack rate increases by 10% in proportion to the insight stacks you have, up to a maximum of 5. The amount of recovery increases in proportion to your maximum HP."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Asherah's maximum HP increases by 10%. After Asherah uses Bel Rahm, she restores the HP of the ally with the lowest current HP percentage. Pincer attack rate increases by 15% in proportion to the insight stacks you have, up to a maximum of 5. The amount of recovery increases in proportion to your maximum HP."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Asherah's maximum HP increases by 15%. After Asherah uses Bel Rahm, she restores the HP of the ally with the lowest current HP percentage. The pincer attack rate increases by 20% in proportion to the insight stacks granted to you, up to a maximum of 5. The amount of recovery increases in proportion to your maximum HP."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★\nAs far as you can go",
          "recLevel": "Lv.6｜Lv.10"
        }
      ],
      "curio": {
        "name": "Maison Delisée Floral Brooch",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_MAISON_BROOCH.webp",
        "rank": "B (properly strengthened)",
        "effect": "After attacking, if your HP is over 50%, inflict chain damage on the enemy proportional to your maximum HP."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Sense of Defense",
          "effect": "Defense power increases by 5%."
        },
        {
          "name": "Speed Prowess",
          "effect": "Speed increases by 2."
        }
      ],
      "gifts": [
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        },
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        }
      ],
      "profile": {
        "cv": "Natsumi Takamori",
        "affiliation": "Voyager Relief Team",
        "birthday": "April 22nd",
        "height": "166cm",
        "origin": "NOA",
        "obtain": "Gacha (constant)",
        "bio": "An aristocratic daughter who longs to be a savior of the stars and joins the journey to become one. The fact that you take action immediately without worrying about it is both a strength and a weakness."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "bell-lease",
    "name": "Bell Lease",
    "title": "Candle Square · mental damage",
    "rarity": "SSR",
    "element": "Star",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/01/200314_a0eqx.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.6",
    "summary": "SSR Star Ranger (mental damage). Bell Lease's ATK increases by 15%. Bell Lease increases his Action Gauge by 50% and increases his ATK by 10% each time an ally or enemy other than himself becomes incapacitated. ATK up effect can be stacked up to 3 times. Ultimate [Coffin]: Attack by engulfing the enemy in the darkness ",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20662,
      "spd": 112,
      "atk": 4050,
      "def": 1600,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "The Coming Rest",
        "nameJp": "やがて来る安息",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/01/200314_roas1.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Bell Lease's ATK increases by 15%.\nBell Lease increases his Action Gauge by 50% and increases his ATK by 10% each time an ally or enemy other than himself becomes incapacitated.\nATK up effect can be stacked up to 3 times.",
        "novaBurst": ""
      },
      {
        "name": "Obituary",
        "nameJp": "訃報",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/01/200313_agwcs.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attack by unleashing the power of a curse. Give yourself 1 jumping stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage will temporarily increase by 1, and after attacking, the enemy will have a 100% accuracy reduction for 1 turn."
      },
      {
        "name": "Condolences",
        "nameJp": "弔問",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/01/200314_qvwn3.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 60%",
        "exactDescription": "Attacks all enemies after hitting them with multiple curses.\n75% chance to reduce accuracy for 2 turns on all enemies.\nIncreases speed for 2 turns and grants 3 Jump stacks.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Coffin",
        "nameJp": "納棺",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/01/200313_tarh6.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Attack by engulfing the enemy in the darkness of the underworld.\n100% chance to silence the enemy for 2 turns, and 100% chance to remove all strengthening effects from the enemy.\nWhen attacking, if your Jump stack is at maximum, damage increases by 30%.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79644746",
      "arcana-79517756",
      "arcana-79517759",
      "arcana-79517774"
    ],
    "staticData": {
      "nameJp": "ベル・リース",
      "pool": "Standard",
      "attackType": "mental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-171-20251112031735.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/01/215428_t9ria.webp",
      "pvpTier": "B",
      "journeyStats": {
        "power": 150,
        "vitality": 20,
        "endurance": 20,
        "focus": 235,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Bell Lease increases his Action Gauge by 30% and increases his ATK by 6% each time an ally or enemy other than himself is incapacitated. ATK up effect can be stacked up to 3 times."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Bell Lease's ATK increases by 5%. Bell Lease increases his Action Gauge by 30% and increases his ATK by 6% each time an ally or enemy other than himself is incapacitated. ATK up effect can be stacked up to 3 times."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Bell Lease's ATK increases by 10%. Bell Lease increases his Action Gauge by 40% and increases his ATK by 8% each time an ally or enemy other than himself is incapacitated. ATK up effect can be stacked up to 3 times."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Bell Lease's ATK increases by 15%. Bell Lease increases his Action Gauge by 50% and increases his ATK by 10% each time an ally or enemy other than himself is incapacitated. ATK up effect can be stacked up to 3 times."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6｜Lv.8"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.8"
        }
      ],
      "curio": {
        "name": "Horse-shaped Water Stone",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_HORSE_FIGURE.webp",
        "rank": "B (properly strengthened)",
        "effect": "After using \"Condolences\" or \"Coffin\", use \"Obituary\" on the enemy whose HP is currently the lowest.\nAfter using \"Obituary\", if the enemy is weakened, the cooldown of \"Condolences\" will be shortened by 1 turn and you will recover your own HP.\nThe amount of recovery is proportional to your ATK."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Speed",
          "effect": "Increases speed by 5."
        },
        {
          "name": "Sense of Concentration",
          "effect": "Effect Hit increases by 10%."
        },
        {
          "name": "Speed Prowess",
          "effect": "Speed increases by 2."
        }
      ],
      "gifts": [
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        },
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        }
      ],
      "profile": {
        "cv": "Chisa Suganuma",
        "affiliation": "Candle Square",
        "birthday": "February 29th",
        "height": "156cm",
        "origin": "NOA",
        "obtain": "Gacha (constant)",
        "bio": "The second daughter of the Reese family and the caretaker of the NOA cemetery. A sorcerer who takes over from his missing sister and serves Candle Square in order to fulfill his duty as a member of the Reese family."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "emily",
    "name": "Emily",
    "title": "Candle Square · Slash Damage",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Defender",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/01/194443_qs2vo.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.6",
    "summary": "SSR Moon Defender (Slash Damage). Emily's maximum HP increases by 15%. At the start of the first battle, create a barrier for yourself for 1 turn. After being attacked, the cooldown time of \"Turndown Service\" is reduced by one turn. After receiving a general attack, the cooldown of \"Turndown Service\" is further shorten",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 24753,
      "spd": 95,
      "atk": 3352,
      "def": 1657,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Maid Ready",
        "nameJp": "準備万端なメイド",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/01/115510_floid.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "HP18%",
        "exactDescription": "Emily's maximum HP increases by 15%.\nAt the start of the first battle, create a barrier for yourself for 1 turn.\nAfter being attacked, the cooldown time of \"Turndown Service\" is reduced by one turn. After receiving a general attack, the cooldown of \"Turndown Service\" is further shortened by 1 turn, and grants 1 Cooling stack to itself at 100%.\nBarrier increases in proportion to own maximum HP.",
        "novaBurst": ""
      },
      {
        "name": "Battle Cleaning Begins",
        "nameJp": "戦闘掃除開始",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/01/115510_0p5uo.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 50%",
        "exactDescription": "Attacks by brandishing a giant broom, granting one Cooling stack to itself.\nDamage increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, temporarily increases your Fixed Toughness Damage by 1 and creates a barrier for 1 turn after attacking.\nBarrier increases in proportion to own maximum HP."
      },
      {
        "name": "Cleaning Service",
        "nameJp": "クリーニングサービス",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/01/115510_yp8m0.webp",
        "target": "Active Skill | Single Ally",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "HP40%",
        "exactDescription": "With pride as a cleaning maid, she cleans her allies.\nIncreases ATK and Barrier for 3 turns on a single ally, gives 3 Cooling stacks to self, and then takes an additional turn.\nBarrier increases in proportion to own maximum HP.",
        "novaBurst": "After using a skill, recover 1 Toughness."
      },
      {
        "name": "Turndown Service",
        "nameJp": "ターンダウンサービス",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/01/115510_dhji6.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 7 turns | Toughness: 1",
        "multiplierSummary": "ATK 42.5%",
        "exactDescription": "Return to the mindset of a veteran mercenary and attack all enemies.\nIncreases defense power for all allies for 2 turns and causes awakening memory (cannot be removed) once for yourself.\nAfter attacking, if your own Cooling is at maximum stack, the cooldown time of this skill will be reduced by 2 turns and all Cooling stacks will be consumed.\nDamage increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517741",
      "arcana-79517786"
    ],
    "staticData": {
      "nameJp": "エミリー",
      "pool": "Standard",
      "attackType": "Slash Damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-9372-20251112031758.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/01/200934_052an.webp",
      "pvpTier": "SS",
      "journeyStats": {
        "power": 10,
        "vitality": 180,
        "endurance": 150,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Life Set (Max HP +20%)",
          "Protection Set (DEF +20% / Guard Rate +10%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Immunity Set (1T Debuff Immunity)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "HP (%) / DEF (%) / Speed / Effect RES"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "Max HP +10% and Speed +6. At the start of battle, grants a Barrier equal to 15% of Max HP to all allies for 2 turns."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "At the start of the first battle, create a barrier for yourself for 1 turn. After being attacked, the cooldown time of \"Turndown Service\" is reduced by 1 turn. After receiving a general attack, the cooldown time of \"Turndown Service\" is further reduced by 1 turn, and 50% of the cooldown stack is applied to the user. Barrier increases in proportion to own maximum HP."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Emily's maximum HP increases by 5%. At the start of the first battle, create a barrier for yourself for 1 turn. After being attacked, the cooldown time of \"Turndown Service\" is reduced by 1 turn. After receiving a general attack, the cooldown time of \"Turndown Service\" is further reduced by 1 turn, and 50% of the cooldown stack is applied to the user. Barrier increases in proportion to own maximum HP."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Emily's maximum HP increases by 10%. At the start of the first battle, create a barrier for yourself for 1 turn. After being attacked, the cooldown time of \"Turndown Service\" is reduced by 1 turn. After receiving a general attack, the cooldown of \"Turndown Service\" is further shortened by 1 turn and grants 1 cooling stack to yourself at 75%. Barrier increases in proportion to own maximum HP."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Emily's maximum HP increases by 15%. At the start of the first battle, create a barrier for yourself for 1 turn. After being attacked, the cooldown time of \"Turndown Service\" is reduced by 1 turn. After receiving a general attack, the cooldown time of \"Turndown Service\" is further reduced by 1 turn, and 100% of the cooldown stack is applied to the user. Barrier increases in proportion to own maximum HP."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆\nAs far as you can go",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★\nAs far as you can go",
          "recLevel": "Lv.6｜Lv.10"
        }
      ],
      "curio": {
        "name": "KiraKira Hand Spray No. 9",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_GLITTER_SPLAYER.webp",
        "rank": "B (properly strengthened)",
        "effect": "After using the cleaning service, you will receive an additional turn."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Sense of Insight",
          "effect": "Crit rate increases by 5%."
        },
        {
          "name": "Skill of Destruction",
          "effect": "Crit DMG increases by 4%."
        }
      ],
      "gifts": [
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        },
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        }
      ],
      "profile": {
        "cv": "Shiori Sugiura",
        "affiliation": "Candle Square",
        "birthday": "June 8th",
        "height": "167cm",
        "origin": "Western disaster area",
        "obtain": "Gacha (constant)",
        "bio": "A maid from Candle Square who always has cleaning tools in hand and does thorough combat cleaning. Due to my severe forgetfulness, it is common for me to forget important things. Sometimes I remember the exact opposite."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "bunny-charles",
    "name": "Bunny Charles",
    "title": "Knights of Monastir · mental damage",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/182954_1clb6.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.9",
    "summary": "SSR Sun Assassin (mental damage). Charles' ATK increases by 15%. Charles gives himself one Ignition stack at the start of the turn of any Sun Attribute ally other than himself. After using Bunny Step, increase own Action Gauge by 10%. After using Bunny Step on your turn, if you are in Lucky Token (cannot be removed) st",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20480,
      "spd": 90,
      "atk": 4277,
      "def": 1594,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Rabbit's Luck",
        "nameJp": "ウサギの幸運",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/184130_47zt1.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Charles' ATK increases by 15%.\nCharles gives himself one Ignition stack at the start of the turn of any Sun Attribute ally other than himself.\nAfter using Bunny Step, increase own Action Gauge by 10%.\nAfter using Bunny Step on your turn, if you are in Lucky Token (cannot be removed) state, Bunny Step will occur again.\nThe additional activation effect only occurs once per turn.",
        "novaBurst": ""
      },
      {
        "name": "Bunny Step",
        "nameJp": "バニーステップ",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/184055_8yzf5.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 40%",
        "exactDescription": "Charles quickly attacks.\nGive yourself one Ignition stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Celebration Song",
        "nameJp": "祝杯の歌",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/184139_9soem.webp",
        "target": "Active Skill | All Allies",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Charles raises his glass generously and encourages his entire team.\nIncreases ATK for all allies for 2 turns, and gives yourself a Lucky Token (cannot be removed) for 3 turns and 3 Ignition stacks at 100% each.\nAlso generates an additional turn.",
        "novaBurst": "After using a skill, recover 1 Toughness."
      },
      {
        "name": "Rabbit in Trouble",
        "nameJp": "窮地に追い込まれたウサギ",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/184121_nthvj.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Charles loses all his chips and attacks.\nWhen attacking, damage increases by 5% in proportion to the Ignition stacks attached to yourself, up to a maximum of 5.\nAfter attacking, all of your Ignition stacks disappear.\nWhen Ignition is at maximum stack, the cooldown time of rabbits cornered after an attack is reset.",
        "novaBurst": "When attacking, your Fixed Toughness Damage will temporarily increase by 1 and you will recover HP equal to 30% of the damage."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517774",
      "arcana-79517783",
      "arcana-79534220",
      "arcana-79576397"
    ],
    "staticData": {
      "nameJp": "バニーシャルル",
      "pool": "Standard",
      "attackType": "mental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-23566-20251112031814.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2025/03/164518_6rspg.webp",
      "pvpTier": "SS",
      "journeyStats": {
        "power": 180,
        "vitality": 20,
        "endurance": 20,
        "focus": 10,
        "protection": 190
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Charles gives himself one ignition stack at the start of each Sun Attribute ally other than himself. After using Bunny Step, increase own Action Gauge by 6%. After using Bunny Step on your turn, if you are in Lucky Token (cannot be removed) state, Bunny Step will occur again. Additional activated effects only occur once per turn."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Charles' ATK increases by 5%. Charles gives himself one ignition stack at the start of each Sun Attribute ally other than himself. After using Bunny Step, increase own Action Gauge by 6%. After using Bunny Step on your turn, if you are in Lucky Token (cannot be removed) state, Bunny Step will occur again. Additional activated effects only occur once per turn."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Charles' ATK increases by 10%. Charles gives himself one ignition stack at the start of each Sun Attribute ally other than himself. After using Bunny Step, increase own Action Gauge by 8%. After using Bunny Step on your turn, if you are in Lucky Token (cannot be removed) state, Bunny Step will occur again. Additional activated effects only occur once per turn."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Charles' ATK increases by 15%. Charles gives himself one ignition stack at the start of each Sun Attribute ally other than himself. After using Bunny Step, increase own Action Gauge by 10%. After using Bunny Step on your turn, if you are in Lucky Token (cannot be removed) state, Bunny Step will occur again. Additional activated effects only occur once per turn."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★\nAs far as you can go",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6"
        }
      ],
      "curio": {
        "name": "Lucky Wood Carved Dice Set",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_LUCKY_WOOD_DICES.webp",
        "rank": "B (properly strengthened)",
        "effect": "At the start of your turn, give yourself 1 ignition stack. After using Bunny Step, there is a 100% chance to inflict bleeding on the enemy for 1 turn."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Insight",
          "effect": "Crit rate increases by 5%."
        },
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Skill of Insight",
          "effect": "Crit rate increases by 3%."
        }
      ],
      "gifts": [
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        },
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        }
      ],
      "profile": {
        "cv": "Sakieko Oki",
        "affiliation": "Knights of Monastir",
        "birthday": "October 20th",
        "height": "166cm",
        "origin": "Principality of Monastir",
        "obtain": "Gacha (constant)",
        "bio": "Leader of the Knights of Monastir. He aims to be a calm and dignified knight commander, but his cheerful and simple personality is holding him back."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "bunny-frey",
    "name": "Bunny Frey",
    "title": "Knights of Monastir · impact damage",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/02/181128_a531d.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.2",
    "summary": "SSR Moon Caster (impact damage). Frey's ATK increases by 15%. At the start of Frey's turn, if his Cooling stack is at its maximum, he will inflict a High Roller (cannot be removed) on himself and consume all Cooling stacks. At the start of the turn, if your High Roller (cannot be removed) is at maximum stack, it will n",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20480,
      "spd": 90,
      "atk": 4453,
      "def": 1594,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Cash in",
        "nameJp": "キャッシュイン",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/181606_4ghi5.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Frey's ATK increases by 15%.\nAt the start of Frey's turn, if his Cooling stack is at its maximum, he will inflict a High Roller (cannot be removed) on himself and consume all Cooling stacks.\nAt the start of the turn, if your High Roller (cannot be removed) is at maximum stack, it will not consume Cooling.\nAfter attacking Moon Attribute allies other than yourself, increase your own Action Gauge by 8% and cause yourself to become a High Roller (cannot be removed) once at 100%.",
        "novaBurst": ""
      },
      {
        "name": "Betting Refused",
        "nameJp": "ベッティング拒否",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/181554_p8zlu.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Frey uses all his strength to slap his opponent's impossible bet.\nGive yourself 1 Cooling stack.\nWhen used on your turn, if your High Roller (cannot be removed) is at maximum stack, force negotiation instead of refusing betting.\nForced Negotiation: Frey attacks with all his might against his opponent's impossible bet.\nWhen attacking, damage increases by 100%.\nAfter attacking, increase own Action Gauge by 30%, apply 1 Cooling stack to yourself, and remove High Roller (cannot be removed).",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1 and damage increases by 20%."
      },
      {
        "name": "All in",
        "nameJp": "オールイン",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/181614_x7p41.webp",
        "target": "Active Skill | All Allies",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Frey bets all his chips and supports all allies.\nIncreases Crit Rate for all allies for 3 turns and grants 3 Cooling stacks to yourself at 100% each.\nAlso, an additional turn will occur for yourself.",
        "novaBurst": "After using a skill, recover 1 Toughness."
      },
      {
        "name": "Bullseye",
        "nameJp": "ブルズアイ",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/181624_j0olh.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 40%",
        "exactDescription": "Frey throws darts, hits high scores, and attacks all enemies.\nIncreases ATK for 2 turns and causes High Roller (cannot be removed) 3 times at 100% each.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517783",
      "arcana-79534220",
      "arcana-79576397",
      "arcana-79717619"
    ],
    "staticData": {
      "nameJp": "バニーフレイ",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-57169-20251112031841.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/02/180836_pgnjz.webp",
      "pvpTier": "S",
      "journeyStats": {
        "power": 180,
        "vitality": 140,
        "endurance": 20,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "At the start of Frey's turn, if his Cooling is at its maximum stack, he will inflict a High Roller (cannot be removed) on himself and consume all {Cooling} stacks. At the start of the turn, if your High Roller (cannot be removed) is at maximum stack, cooling will not be consumed. After attacking Moon Attribute allies other than yourself, increase your own Action Gauge by 8% and cause yourself to become a High Roller (cannot be removed) once at 50%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Frey's ATK increases by 5%. At the start of Frey's turn, if his Cooling stack is at maximum, he will cause a high roller (cannot be removed) once and consumes all Cooling stacks. At the start of the turn, if your High Roller (cannot be removed) is at maximum stack, cooling will not be consumed. After attacking Moon Attribute allies other than yourself, increase your own Action Gauge by 8% and cause yourself to become a High Roller (cannot be removed) once at 50%."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Frey's ATK increases by 10%. At the start of Frey's turn, if his Cooling stack is at maximum, he will cause a high roller (cannot be removed) once and consumes all Cooling stacks. At the start of the turn, if your High Roller (cannot be removed) is at maximum stack, cooling will not be consumed. After attacking Moon Attribute allies other than yourself, increase your own Action Gauge by 8% and cause yourself to become a High Roller (unremovable) once at 75%."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Frey's ATK increases by 15%. At the start of Frey's turn, if his Cooling stack is at maximum, he will cause a high roller (cannot be removed) once and consumes all Cooling stacks. At the start of the turn, if your High Roller (cannot be removed) is at maximum stack, cooling will not be consumed. After attacking Moon Attribute allies other than yourself, increase your own Action Gauge by 8% and cause yourself to become a High Roller (cannot be removed) once at 100%."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆\nAs far as you can go",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.8"
        }
      ],
      "curio": {
        "name": "Rabbit Gentleman",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/124341_5ns1c.webp",
        "rank": "B (properly strengthened)",
        "effect": "At the start of your turn, cause yourself a high roller (cannot be canceled) once.\nAfter using Bullseye, there is a 100% chance that all enemies will have their defense down for 2 turns.\nEffect Ignore RES."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Destruction",
          "effect": "Crit DMG increases by 10%."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        },
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        }
      ],
      "profile": {
        "cv": "Ayano Shibuya",
        "affiliation": "Knights of Monastir",
        "birthday": "July 7th",
        "height": "156cm",
        "origin": "Principality of Monastir",
        "obtain": "Gacha (constant)",
        "bio": "A girl who calls herself the quartermaster of the Monastir Knights. He has an eye for making money and comes up with business ideas one after another, but most of them end in failure."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "roberta",
    "name": "Roberta",
    "title": "Orbital Search Team · impact damage",
    "rarity": "SSR",
    "element": "Star",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/201812_s56oa.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.2",
    "summary": "SSR Star Striker (impact damage). Roberta's ATK increases by 15%. When Roberta attacks, Crit Rate increases by 50%. If your HP is above 50%, your damage will increase by 8%, and if your HP is below 50%, your damage will increase by 16%. Ultimate [Emergency On-site Judgment]: Skip procedures based on on-site judgment an",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 21573,
      "spd": 100,
      "atk": 4395,
      "def": 1600,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Veteran's Intuition",
        "nameJp": "ベテランの直感",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/104347_qi4r2.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Roberta's ATK increases by 15%.\nWhen Roberta attacks, Crit Rate increases by 50%.\nIf your HP is above 50%, your damage will increase by 8%, and if your HP is below 50%, your damage will increase by 16%.",
        "novaBurst": ""
      },
      {
        "name": "Operation Begins",
        "nameJp": "作戦開始",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/104422_0ljdu.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 50%",
        "exactDescription": "Attack the enemy by swinging your fist quickly. Give yourself 1 Jump stack.",
        "novaBurst": "When attacking, temporarily increases own Fixed Toughness Damage by 1 and increases own Action Gauge by 20% after attacking."
      },
      {
        "name": "Fast Track",
        "nameJp": "ファストトラック",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/104409_6dj0l.webp",
        "target": "Trigger Skill｜Single Enemy",
        "spOrEnergyCost": "CT: 2 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "After being hit by an all-out attack, cast Fast Track on the attacker.\nWhen using a skill, remove one weakening from yourself.\nAfter attacking, increase own Action Gauge by 30% and give 1 Jump stack.\nWhen a Critical Hit occurs, the cooldown of Fast Track is reduced by 1 turn.",
        "novaBurst": "-"
      },
      {
        "name": "Emergency On-site Judgment",
        "nameJp": "緊急現場判断",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/104431_xk5rl.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Skip procedures based on on-site judgment and immediately respond with force to attack the enemy.\nIncreases ATK for 2 turns and increases own Action Gauge by 30%.\nIf your Jump is at maximum stack, consume all stacks and increase your Action Gauge by an additional 20%.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79808948",
      "arcana-79517828",
      "arcana-79517753",
      "arcana-79517756"
    ],
    "staticData": {
      "nameJp": "ロベルタ",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-1533-20251112031704.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/03/201812_ic1f4.webp",
      "pvpTier": "SS",
      "journeyStats": {
        "power": 180,
        "vitality": 140,
        "endurance": 20,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "When Roberta attacks, Crit Rate increases by 50%. If your HP is above 50%, your damage will increase by 6%, and if your HP is below 50%, your damage will increase by 12%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Roberta's ATK increases by 5%. When Roberta attacks, Crit Rate increases by 50%. If your HP is above 50%, your damage will increase by 6%, and if your HP is below 50%, your damage will increase by 12%."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Roberta's ATK increases by 10%. When Roberta attacks, Crit Rate increases by 50%. If your HP is above 50%, your damage will increase by 7%, and if your HP is below 50%, your damage will increase by 14%."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Roberta's ATK increases by 15%. When Roberta attacks, Crit Rate increases by 50%. If your HP is above 50%, your damage will increase by 8%, and if your HP is below 50%, your damage will increase by 16%."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆",
          "recLevel": "Lv.3｜Lv.8"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.8"
        }
      ],
      "curio": {
        "name": "Orbital Search Team Badge",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/124356_zy9kv.webp",
        "rank": "A (easy to clear)",
        "effect": "When a Critical Hit occurs, fast track is applied to the enemy.\nOccurs only once in your turn."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        },
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        }
      ],
      "profile": {
        "cv": "Keiko Watanabe",
        "affiliation": "Orbital Search Team",
        "birthday": "November 20th",
        "height": "165cm",
        "origin": "NOA",
        "obtain": "Gacha (constant)",
        "bio": "Leader of the orbital search team under Polaris. He works hard to become a great leader, and the stress that accumulates each time is released by drinking."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "yanagi-mina",
    "name": "Yanagi Mina",
    "title": "Fenrir Platoon · impact damage",
    "rarity": "SSR",
    "element": "Star",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/130558_c8vsj.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.6",
    "summary": "SSR Star Ranger (impact damage). Yanagi Mina's ATK increases by 15%. After Yanagi Mina attacks, her own ATK increases by 4%. Can be stacked up to 5 times. When a Critical Hit occurs, increase own Action Gauge by 15%. Ultimate [Wolfsbane]: Attack the enemy by wielding Wolvesbane. Increases ATK for 2 turns and grants 2 J",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20823,
      "spd": 100,
      "atk": 4310,
      "def": 1612,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Newcomer with Experience",
        "nameJp": "経歴のある新入り",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/03/125509_17odr.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Yanagi Mina's ATK increases by 15%.\nAfter Yanagi Mina attacks, her own ATK increases by 4%.\nCan be stacked up to 5 times.\nWhen a Critical Hit occurs, increase own Action Gauge by 15%.",
        "novaBurst": ""
      },
      {
        "name": "Pulse Revolver",
        "nameJp": "パルスリボルバー",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/03/125509_d7y4t.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 50%",
        "exactDescription": "Attack an enemy using a pulse revolver.\nGive yourself 1 Jump stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1 and damage increases by 20%."
      },
      {
        "name": "Pulse Impact",
        "nameJp": "パルスインパクト",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/03/125510_1huv7.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Fires high-powered energy from a pulse revolver to attack enemies.\nIncreases Crit Rate for 2 turns on yourself,\nCauses 100% bleeding on enemy for 2 turns.\nAfter attacking, if your Jump is at its maximum stack,\nCauses an additional 2 turns of bleeding at 100% on the enemy.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Wolfsbane",
        "nameJp": "ウルブズベイン",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/03/125509_8u3g7.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 52.5%",
        "exactDescription": "Attack the enemy by wielding Wolvesbane.\nIncreases ATK for 2 turns and grants 2 Jump stacks to self.\nInflicts 2 bleeds on all enemies for 2 turns at 100% each.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79855448",
      "arcana-79517756",
      "arcana-79517759",
      "arcana-79517774"
    ],
    "staticData": {
      "nameJp": "ヤナギ・ミナ",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-171-20251112031735.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/03/124735_l8ofw.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 180,
        "vitality": 20,
        "endurance": 20,
        "focus": 190,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "After Yanagi Mina attacks, her own ATK increases by 2%.\nCan be stacked up to 5 times.\nIncreases own Action Gauge by 9% when a Critical Hit occurs."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Yanagi Mina's ATK increases by 5%.\nAfter Yanagi Mina attacks, her own ATK increases by 2%.\nCan be stacked up to 5 times.\nIncreases own Action Gauge by 9% when a Critical Hit occurs."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Yanagi Mina's ATK increases by 10%.\nAfter Yanagi Mina attacks, her own ATK increases by 3%.\nCan be stacked up to 5 times.\nWhen a Critical Hit occurs, increase own Action Gauge by 12%."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Yanagi Mina's ATK increases by 15%.\nAfter Yanagi Mina attacks, her own ATK increases by 4%.\nCan be stacked up to 5 times.\nIncreases own Action Gauge by 15% when a Critical Hit occurs."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6｜Lv.8"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.8"
        }
      ],
      "curio": {
        "name": "Tactical Holster",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/125005_6yosd.webp",
        "rank": "B (properly strengthened)",
        "effect": "At the start of the first battle, inflict skill damage immunity on yourself 3 times.\nWhen using the Pulse Revolver, the damage increases by 10% depending on the number of weakened enemies, and can be applied up to 5 times."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Concentration",
          "effect": "Effect Hit increases by 10%."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        },
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        }
      ],
      "profile": {
        "cv": "Nana Mizuki",
        "affiliation": "Fenrir Platoon",
        "birthday": "December 25th",
        "height": "168cm",
        "origin": "counter side",
        "obtain": "Gacha (constant)",
        "bio": "A mercenary from another world who was involved in an unexpected accident and ended up in Lavistar. He is cooperating with the leader in order to return to his original world."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "hilde",
    "name": "Hilde",
    "title": "Fenrir Platoon · impact damage",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Defender",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/130612_m2rk9.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.6",
    "summary": "SSR Sun Defender (impact damage). Hilde's maximum HP increases by 15%. Hilde's first defense probability increases by 30%. At the start of the first battle, create a barrier for all allies except yourself for 1 turn. Barrier increases in proportion to own maximum HP. Ultimate [Buster Overdrive]: After charging forward,",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 25109,
      "spd": 95,
      "atk": 3352,
      "def": 1727,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Valkyrie's Will",
        "nameJp": "ヴァルキリーの意志",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/03/125508_0dtzl.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "HP10%",
        "exactDescription": "Hilde's maximum HP increases by 15%.\nHilde's first defense probability increases by 30%.\nAt the start of the first battle, create a barrier for all allies except yourself for 1 turn.\nBarrier increases in proportion to own maximum HP.",
        "novaBurst": ""
      },
      {
        "name": "Twin Blade",
        "nameJp": "ツインブレード",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/03/125508_lmt0u.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 40%",
        "exactDescription": "Approach the enemy quickly and attack with two swords.\nGive yourself one Ignition stack.\nDamage increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, temporarily increases your Fixed Toughness Damage by 1 and creates a barrier for 1 turn after attacking.\nBarrier increases in proportion to own maximum HP."
      },
      {
        "name": "Dragon Buster",
        "nameJp": "ドラゴンバスター",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/03/125509_g15im.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 55%",
        "exactDescription": "Penetrate the enemy, jump and knock it down.\nGive yourself immunity and defense up for 2 turns.\nAfter attacking, if your Ignition is at maximum stack,\nDragon Buster's cooldown is reduced by 1 turn and all Ignition stacks are consumed.\nDamage increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Buster Overdrive",
        "nameJp": "バスター・オーバードライブ",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/03/125508_4ug5w.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 42.5%",
        "exactDescription": "After charging forward, attack all enemies with a cannonball.\nCauses Fafnir to descend (cannot be removed) on self for 3 turns, and causes 1 turn to provoke on the enemy with the highest Action Gauge at 100%.\nGive yourself one Ignition stack.\nBarrier and damage increase in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79855463",
      "arcana-79517786"
    ],
    "staticData": {
      "nameJp": "ヒルデ",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-9372-20251112031758.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/03/124752_9cz8o.webp",
      "pvpTier": "S",
      "journeyStats": {
        "power": 10,
        "vitality": 180,
        "endurance": 150,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Life Set (Max HP +20%)",
          "Protection Set (DEF +20% / Guard Rate +10%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Immunity Set (1T Debuff Immunity)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "HP (%) / DEF (%) / Speed / Effect RES"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "Max HP +10% and Speed +6. At the start of battle, grants a Barrier equal to 15% of Max HP to all allies for 2 turns."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Increases Hilde's first defense chance by 10%.\nAt the start of the first battle, create a barrier for all allies except yourself for 1 turn.\nBarrier increases in proportion to own maximum HP."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Hilde's maximum HP increases by 5%.\nHilde's first defense probability increases by 10%.\nAt the start of the first battle, create a barrier for all allies except yourself for 1 turn.\nBarrier increases in proportion to own maximum HP."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Hilde's maximum HP increases by 10%.\nHilde's first defense probability increases by 20%.\nAt the start of the first battle, create a barrier for all allies except yourself for 1 turn.\nBarrier increases in proportion to own maximum HP."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Hilde's maximum HP increases by 15%.\nHilde's first defense probability increases by 30%.\nAt the start of the first battle, create a barrier for all allies except yourself for 1 turn.\nBarrier increases in proportion to own maximum HP."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.8"
        }
      ],
      "curio": {
        "name": "Buster Module",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/125013_4q013.webp",
        "rank": "C (no change to that extent)",
        "effect": "After using the Twin Blades, if Fafnir descends (cannot be removed), activates Dragon Buster on the enemy.\nOccurs only once every 2 turns."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Sense of Defense",
          "effect": "Defense power increases by 5%."
        },
        {
          "name": "Skill in Life",
          "effect": "Maximum HP increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        },
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        }
      ],
      "profile": {
        "cv": "Yoko Hikasa",
        "affiliation": "Fenrir Platoon",
        "birthday": "Unknown",
        "height": "150cm",
        "origin": "counter side",
        "obtain": "Gacha (constant)",
        "bio": "A veteran who worked for a private military company. In another world, he was known as a radical commander who always insisted on a frontal breakthrough."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "rosalia",
    "name": "Rosalia",
    "title": "Fallen Hawk · elemental damage",
    "rarity": "SSR",
    "element": "Chaos",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/191317_k4lb7.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.6",
    "summary": "SSR Chaos Ranger (elemental damage). Rosalia's ATK increases by 15%. After Rosalia uses Ash Flame, the probability of inferno (cannot be removed) will increase by 20% in proportion to the turbulence stack attached to herself, and will be applied up to 5 times. After receiving an attack, your current HP will not fall be",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20822,
      "spd": 109,
      "atk": 4315,
      "def": 1601,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Tyrant of the North",
        "nameJp": "北の暴君",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/03/191700_q6zob.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Rosalia's ATK increases by 15%.\nAfter Rosalia uses Ash Flame, the probability of inferno (cannot be removed) will increase by 20% in proportion to the turbulence stack attached to herself, and will be applied up to 5 times.\nAfter receiving an attack, your current HP will not fall below 40% and your ATK will increase for 3 turns.\nThe effect after being attacked only occurs once during the battle.",
        "novaBurst": ""
      },
      {
        "name": "Ash Flame",
        "nameJp": "灰の炎",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/03/191700_7mvbd.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 50%",
        "exactDescription": "Attacks the enemy by releasing ash flames. Grants one turbulent stack to yourself.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "King's Judgment",
        "nameJp": "王の審判",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/03/191701_vn89r.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Overwhelm the enemy with the hellfire of condemnation. Give yourself one turbulent stack.\nThe effect changes depending on the number of stacks of your own Inferno (cannot be removed), and after attacking, removes all of your own Inferno (which cannot be removed).\n1 stack of Hellfire: Increases damage by 10%.\n2 stacks of Hellfire: Increases damage by 20%.\n3 stacks of Hellfire: Increases damage by 20% and activates Ash Flame.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Difference in Status",
        "nameJp": "格の差",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/03/191700_da0ln.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 80%",
        "exactDescription": "Swing your sword to tear apart the planet and attack all enemies.\nCauses 100% defense down for 2 turns on all enemies.\nIncreases own Action Gauge by 50% and generates Lord of the Throne (cannot be removed) for 3 turns.\nGenerate hellfire (cannot be removed) on yourself according to the number of targets hit with Critical Hit, up to 3 times.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1 and your Crit Rate increases by 30%."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79865537",
      "arcana-79517774",
      "arcana-79517783",
      "arcana-79534220"
    ],
    "staticData": {
      "nameJp": "ロザリア",
      "pool": "Standard",
      "attackType": "elemental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-10703-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-171-20251112031735.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/03/191317_8l7u1.webp",
      "pvpTier": "SS",
      "journeyStats": {
        "power": 180,
        "vitality": 20,
        "endurance": 20,
        "focus": 190,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "After Rosalia uses Ash Flame, the probability of inferno (unremovable) will increase by 20% in proportion to the upheaval stack attached to herself, and will be applied up to 5 times.\nAfter receiving an attack, your current HP will not fall below 40% and your ATK will increase for 1 turn.\nThe effect after being attacked only occurs once during the battle."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Rosalia's ATK increases by 5%.\nAfter Rosalia uses Ash Flame, the probability of inferno (unremovable) will increase by 20% in proportion to the turbulence stack attached to herself, and will be applied up to 5 times.\nAfter receiving an attack, your current HP will not fall below 40% and your ATK will increase for 1 turn.\nThe effect after being attacked only occurs once during the battle."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Rosalia's ATK increases by 10%.\nAfter Rosalia uses Ash Flame, the probability of inferno (unremovable) will increase by 20% in proportion to the turbulence stack attached to herself, and will be applied up to 5 times.\nAfter receiving an attack, your current HP will not fall below 40% and your ATK will increase for 2 turns.\nThe effect after being attacked only occurs once during the battle."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Rosalia's ATK increases by 15%.\nAfter Rosalia uses Ash Flame, the probability of inferno (unremovable) will increase by 20% in proportion to the turbulence stack attached to herself, and will be applied up to 5 times.\nAfter receiving an attack, your current HP will not fall below 40% and your ATK will increase for 3 turns.\nThe effect after being attacked only occurs once during the battle."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆\nAs far as you can go",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★\nAs far as you can go",
          "recLevel": "Lv.6｜Lv.8｜Lv.10"
        }
      ],
      "curio": {
        "name": "Throne of Ash",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/125842_ezxtd.webp",
        "rank": "B (properly strengthened)",
        "effect": "When using case difference, own Crit Rate increases by 50%.\nWhen a Critical Hit occurs, an additional turn will be generated for yourself."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Speed",
          "effect": "Increases speed by 5."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        },
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        }
      ],
      "profile": {
        "cv": "Rie Kugimiya",
        "affiliation": "Fallen Hawk",
        "birthday": "March 2nd",
        "height": "150cm",
        "origin": "counter side",
        "obtain": "Gacha (constant)",
        "bio": "He is a member of the \"Demon King of Qliphoth\" who controls fate, and is known as the Tyrant of the North. With just one swing of the sword, many stars were reduced to ashes."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "rin",
    "name": "Rin",
    "title": "Fugetsudo · Slash Damage",
    "rarity": "SSR",
    "element": "Star",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/04/105027_kjhmw.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.2",
    "summary": "SSR Star Striker (Slash Damage). ATK increases by 15%. When Rin attacks, the ATK increases by 4% in proportion to the number of jump stacks given to itself, up to a maximum of 5 stacks. After using Phantom Sword Dance on your turn, if you are in Seifu (cannot be removed) state, the cooldown of Phantom Sword Dance will ",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 21573,
      "spd": 106,
      "atk": 4223,
      "def": 1600,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Dancer of Blades",
        "nameJp": "刃の舞姫",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/115157_3lxn1.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "ATK increases by 15%.\nWhen Rin attacks, the ATK increases by 4% in proportion to the number of jump stacks given to itself, up to a maximum of 5 stacks.\nAfter using Phantom Sword Dance on your turn, if you are in Seifu (cannot be removed) state, the cooldown of Phantom Sword Dance will be shortened by 1 turn.\nAfter using Seifu Meigetsu on your turn, if you are in Meigetsu (unremovable) state, Seifu Meigetsu's cooldown will be shortened by 1 turn.",
        "novaBurst": ""
      },
      {
        "name": "Five Consecutive Slashes",
        "nameJp": "五連斬り",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/115211_1vel5.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attack the enemy with sword techniques. Give yourself 1 Jump stack.",
        "novaBurst": "When attacking, temporarily increases your Fixed Toughness Damage by 1 and increases your speed for 1 turn after attacking."
      },
      {
        "name": "Phantom Sword Dance",
        "nameJp": "幻影剣舞",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/115221_w1pgj.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 40%",
        "exactDescription": "Releases sword energy from the air and slashes and attacks all enemies.\nIf you are in Seifu (unremovable) state, give 3 Jump stacks to Star Attribute allies.\nIf you are not in Seifu (cannot be removed) state, increase your ATK for 3 turns and generate Meigetsu (cannot be removed).\nAfter using Phantom Kenbu on your turn, if Seifu Meigetsu is available, an additional turn will occur.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Seifu Meigetsu",
        "nameJp": "清風明月",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/115231_z9ijw.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 52.5%",
        "exactDescription": "Activates the secret of Fugetsudo Kenpo and attacks all enemies.\nIf you are in the state of Meigetsu (unremovable), attack a single target.\nWhen attacking, Crit DMG increases by 50% and Toughness Damage increases by 1.\nIf you are not in Meigetsu (unremovable) state, give Crit DMG up to all Star Attribute allies except yourself for 2 turns, and generate Seifu (unremovable) for 3 turns.\nAfter using Seifu Meigetsu on your turn, if you are able to use Phantom Sword Dance, an additional turn will occur.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517753",
      "arcana-79941760",
      "arcana-79534220",
      "arcana-79576397"
    ],
    "staticData": {
      "nameJp": "リン",
      "pool": "Standard",
      "attackType": "Slash Damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-1533-20251112031704.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/04/193138_frw90.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 180,
        "vitality": 140,
        "endurance": 20,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "When Rin attacks, the ATK increases by 2% in proportion to the number of jump stacks given to itself, up to a maximum of 5 stacks.\nAfter using Phantom Sword Dance on your turn, if you are in Seifu (cannot be removed) state, the cooldown of Phantom Sword Dance will be shortened by 1 turn.\nAfter using Seifu Meigetsu on your turn, if you are in Meigetsu (unremovable) state, Seifu Meigetsu's cooldown will be shortened by 1 turn."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Rin's ATK increases by 5%.\nWhen Rin attacks, her ATK increases by 2% in proportion to the number of jump stacks given to herself, up to a maximum of 5 stacks.\nAfter using Phantom Sword Dance on your turn, if you are in Seifu (cannot be removed) state, the cooldown of Phantom Sword Dance will be shortened by 1 turn.\nAfter using Seifu Meigetsu on your turn, if you are in Meigetsu (unremovable) state, Seifu Meigetsu's cooldown will be shortened by 1 turn."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Rin's ATK increases by 10%.\nWhen Rin attacks, the ATK increases by 3% in proportion to the number of jump stacks given to itself, up to a maximum of 5 stacks.\nAfter using Phantom Sword Dance on your turn, if you are in Seifu (cannot be removed) state, the cooldown of Phantom Sword Dance will be shortened by 1 turn.\nAfter using Seifu Meigetsu on your turn, if you are in Meigetsu (unremovable) state, Seifu Meigetsu's cooldown will be shortened by 1 turn."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Rin's ATK increases by 15%.\nWhen Rin attacks, her ATK increases by 4% in proportion to the number of jump stacks given to herself, up to a maximum of 5 stacks.\nAfter using Phantom Sword Dance on your turn, if you are in Seifu (cannot be removed) state, the cooldown of Phantom Sword Dance will be shortened by 1 turn.\nAfter using Seifu Meigetsu on your turn, if you are in Meigetsu (unremovable) state, Seifu Meigetsu's cooldown will be shortened by 1 turn."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★★☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        }
      ],
      "curio": {
        "name": "Special Pharmaceutical",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/125831_clmy3.webp",
        "rank": "B (properly strengthened)",
        "effect": "When attacking, if you are in Bright Moon (unremovable) state, Crit Rate increases by 50%.\nAfter receiving an attack, if you are in a clean wind (unremovable) state, recover your HP.\nThe amount of recovery increases in proportion to your ATK."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Speed Prowess",
          "effect": "Speed increases by 2."
        }
      ],
      "gifts": [
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        },
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        }
      ],
      "profile": {
        "cv": "Yuri Usui",
        "affiliation": "Fugetsudo",
        "birthday": "February 24th",
        "height": "168cm",
        "origin": "eastern continent",
        "obtain": "Gacha (constant)",
        "bio": "Fugetsudo's children's club teacher. Because he has taught manners and martial arts to children, he sometimes acts toward adults the same way he would treat children."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "fei",
    "name": "Fei",
    "title": "Wanderer · Slash Damage",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/04/105026_1pwrt.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.6",
    "summary": "SSR Moon Assassin (Slash Damage). Fei's ATK increases by 15%. Fei increases evasion rate for 1 turn at the start of battle and at the end of turn. If you evade after being attacked, your ATK increases by 4%. Can be stacked up to 5 times. Ultimate [Seifu Rougetsu]: Attacks the enemy with a slash that can cut through eve",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20480,
      "spd": 90,
      "atk": 4453,
      "def": 1594,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Heaven's Path",
        "nameJp": "天問の道",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/04/145049_pekbg.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Fei's ATK increases by 15%.\nFei increases evasion rate for 1 turn at the start of battle and at the end of turn.\nIf you evade after being attacked, your ATK increases by 4%.\nCan be stacked up to 5 times.",
        "novaBurst": ""
      },
      {
        "name": "Lunar Eclipse",
        "nameJp": "月食",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/04/145133_sj90e.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Quickly slash enemies with your Swift Sword and grant yourself a Cooling stack.",
        "novaBurst": "When attacking, temporarily increases own Fixed Toughness Damage by 1, and after attacking, increases own ATK for 1 turn."
      },
      {
        "name": "Lunar Eclipse",
        "nameJp": "月食",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/04/145117_lq325.webp",
        "target": "Trigger Skill｜Single Enemy",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "If evasion occurs after being attacked by an enemy, casts Moonlight on the attacker.\nInflicts a sure hit on yourself for 1 turn and gives you 2 Cooling stacks.\nCauses the enemy to have 100% ATK down for 1 turn.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Seifu Rougetsu",
        "nameJp": "清風朗月",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/04/145108_wdk1j.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Attacks the enemy with a slash that can cut through even the moon.\nIncreases ATK for 2 turns on self.\nWhen attacking, if your Cooling stack is at maximum, it will penetrate your defense power by 20% and consume all your Cooling stacks after attacking.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79983016",
      "arcana-79517753",
      "arcana-79517756",
      "arcana-79517759"
    ],
    "staticData": {
      "nameJp": "フェイ",
      "pool": "Standard",
      "attackType": "Slash Damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-23566-20251112031814.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/04/173815_xcjae.webp",
      "pvpTier": "SS",
      "journeyStats": {
        "power": 180,
        "vitality": 20,
        "endurance": 20,
        "focus": 10,
        "protection": 190
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Fei increases evasion rate for 1 turn at the start of battle and at the end of turn.\nAfter receiving an attack, if evasion occurs, your ATK increases by 2%.\nCan be stacked up to 5 times."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Fei's ATK increases by 5%.\nFei increases evasion rate for 1 turn at the start of battle and at the end of turn.\nAfter receiving an attack, if evasion occurs, your ATK increases by 2%.\nCan be stacked up to 5 times."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Fei's ATK increases by 10%.\nFei increases evasion rate for 1 turn at the start of battle and at the end of turn.\nAfter receiving an attack, if evasion occurs, your ATK increases by 3%.\nCan be stacked up to 5 times."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Fei's ATK increases by 15%.\nFei increases evasion rate for 1 turn at the start of battle and at the end of turn.\nIf evasion occurs after receiving an attack, your ATK increases by 4%.\nCan be stacked up to 5 times."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆\nAs far as you can go",
          "recLevel": "Lv.4｜Lv.8｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★\nIncrease CT shortening",
          "recLevel": "Lv.3｜Lv.6｜Lv.8"
        }
      ],
      "curio": {
        "name": "Heavenly Question Book",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/125823_petzh.webp",
        "rank": "A (easy to clear)",
        "effect": "Evasion rate increases by 20%.\nIf evasion occurs after receiving an attack, Seifu Rogetsu's cooldown will be reduced by 1 turn."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Protection",
          "effect": "Effect RES increases by 10%."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        },
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        }
      ],
      "profile": {
        "cv": "Himena Naota",
        "affiliation": "Wanderer",
        "birthday": "October 18th",
        "height": "168cm",
        "origin": "eastern continent",
        "obtain": "Gacha (constant)",
        "bio": "A wandering samurai who once belonged to Fugetsu-do, but stole the secret book \"Tenmonsho\" and escaped. His goal is to complete the fantastic military feat ``Tenmon'' and spread its charm to the world."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "tilia",
    "name": "Tilia",
    "title": "Executor · Slash Damage",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/115944_7kujw.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.6",
    "summary": "SSR Sun Striker (Slash Damage). Tilia's ATK increases by 15%. When Tilia activates Prelude of the End or Requiem of Tragedy, if the enemy has Thorns of Tragedy (cannot be removed), it will penetrate their defense by 25%. After activating the Prelude of the End, cause 100% of the enemy to inflict Thorns of Tragedy (cann",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 21573,
      "spd": 100,
      "atk": 4395,
      "def": 1600,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Executioner of Beheading",
        "nameJp": "斬首の執行者",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/185816_50rxo.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Tilia's ATK increases by 15%.\nWhen Tilia activates Prelude of the End or Requiem of Tragedy, if the enemy has Thorns of Tragedy (cannot be removed), it will penetrate their defense by 25%.\nAfter activating the Prelude of the End, cause 100% of the enemy to inflict Thorns of Tragedy (cannot be removed).\nAfter activating Prelude of the End, if the enemy's Thorn of Tragedy (cannot be removed) is at maximum stack, activate Requiem of Tragedy.",
        "novaBurst": ""
      },
      {
        "name": "Prelude to the End",
        "nameJp": "終焉のプレリュード",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/185831_him3r.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Holds up a great sword and charges at the enemy to attack. Give yourself 1 Ignition stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Requiem for Tragedy",
        "nameJp": "惨劇のレクイエム",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/185838_6jgxo.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 70%",
        "exactDescription": "It binds the enemy with thorny trees and attacks by swinging its great sword gracefully.\nWhen attacking, if the enemy is in the state of Thorns of Tragedy (cannot be removed), the damage per stack of Thorns of Tragedy (cannot be removed) increases by 10%, and if the enemy is a defender class, the damage per stack increases by an additional 50%.\nAfter attacking, removes the enemy's Thorn of Tragedy (which cannot be removed).\nWhen attacking, if your Ignition stack is at its maximum, the damage will increase by 20%, and after the attack, all Ignition stacks will disappear.\nIf this skill is not an additionally activated skill, it will give you speed up for 3 turns.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Crescendo of Grief",
        "nameJp": "悲嘆のクレッシェンド",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/185844_jra7t.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 40%",
        "exactDescription": "Slash through space with a large sword, dealing damage to all enemies.\nInflicts Shatter on yourself for 2 turns and grants 2 Ignition stacks.\nGenerates 100% Thorns of Tragedy (cannot be removed) once on all enemies, and causes 100% Thorns of Tragedy (cannot be removed) 3 times on the enemy with the highest defense.",
        "novaBurst": "When attacking, your Fixed Toughness Damage will temporarily increase by 1, and an additional turn will occur after attacking."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-80012824",
      "arcana-79517756",
      "arcana-79517759",
      "arcana-79517774"
    ],
    "staticData": {
      "nameJp": "ティリア",
      "pool": "Standard",
      "attackType": "Slash Damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-1533-20251112031704.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2025/03/170432_kais6.webp",
      "pvpTier": "S",
      "journeyStats": {
        "power": 180,
        "vitality": 140,
        "endurance": 20,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "When Tilia activates Prelude of the End or Requiem of Tragedy, if the enemy is in Thorns of Tragedy (cannot be removed), it will penetrate their defense by 15%.\nAfter activating the Prelude of the End, 100% causes Thorns of Tragedy (cannot be removed) on the enemy.\nAfter activating Prelude of the End, if the enemy's Thorn of Tragedy (cannot be removed) is at maximum stack, activate Requiem of Tragedy."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Tilia's ATK increases by 5%.\nWhen Tilia activates Prelude of the End or Requiem of Tragedy, if the enemy is in the Thorn of Tragedy (cannot be removed) state, it will penetrate their defense by 15%.\nAfter activating the Prelude of the End, 100% causes Thorns of Tragedy (cannot be removed) on the enemy.\nAfter activating Prelude of the End, if the enemy's Thorn of Tragedy (cannot be removed) is at maximum stack, activate Requiem of Tragedy."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Tilia's ATK increases by 10%.\nWhen Tilia activates Prelude of the End or Requiem of Tragedy, if the enemy is in Thorns of Tragedy (cannot be removed) state, it will penetrate their defense by 20%.\nAfter activating the Prelude of the End, 100% causes Thorns of Tragedy (cannot be removed) on the enemy.\nAfter activating Prelude of the End, if the enemy's Thorn of Tragedy (cannot be removed) is at maximum stack, activate Requiem of Tragedy."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Tilia's ATK increases by 15%.\nWhen Tilia activates Prelude of the End or Requiem of Tragedy, if the enemy is in Thorns of Tragedy (cannot be removed) state, it will penetrate their defense by 25%.\nAfter activating the Prelude of the End, 100% causes Thorns of Tragedy (cannot be removed) on the enemy.\nAfter activating Prelude of the End, if the enemy's Thorn of Tragedy (cannot be removed) is at maximum stack, activate Requiem of Tragedy."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★\nIncrease CT shortening",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆\nIncrease CT shortening",
          "recLevel": "Lv.6｜Lv.10"
        }
      ],
      "curio": {
        "name": "Maltb Lum",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/125939_30q82.webp",
        "rank": "B (properly strengthened)",
        "effect": "After attacking, increase own Action Gauge by 20% and reduce target's Action Gauge by 20% at 100%.\nAfter being attacked, if your HP is below 50%, increase your Action Gauge by 50%.\nThe effect after being attacked only occurs once during the battle."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        },
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        }
      ],
      "profile": {
        "cv": "Rika Abe",
        "affiliation": "Executor",
        "birthday": "Unknown",
        "height": "163cm",
        "origin": "unknown",
        "obtain": "Gacha (constant)",
        "bio": "A difficult girl from Monastir. He usually speaks in a high-handed and elegant manner, but when he gets angry, he sometimes speaks in rough and violent ways."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "bride-carmen",
    "name": "Bride Carmen",
    "title": "Knights of Monastir · impact damage",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Supporter",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/05/121623_3y1g7.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.9",
    "summary": "SSR Moon Supporter (impact damage). Carmen's maximum HP increases by 15%. At the start of a battle, Carmen applies a Pledge of Love (which cannot be canceled) to the ally with the highest ATK, excluding herself. When an ally in the Pledge of Love (unremovable) state is attacked by a single target, it takes 40% of the t",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 25109,
      "spd": 95,
      "atk": 3352,
      "def": 1727,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Pact",
        "nameJp": "盟約",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/05/113003_u2rdv.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "HP2.5%",
        "exactDescription": "Carmen's maximum HP increases by 15%.\nAt the start of a battle, Carmen applies a Pledge of Love (which cannot be canceled) to the ally with the highest ATK, excluding herself.\nWhen an ally in the Pledge of Love (unremovable) state is attacked by a single target, it takes 40% of the target's damage instead and increases its own Action Gauge by 30%. Only the highest damage dispersion effect is applied.\nAfter using Basic Skill, recovers the HP of all allies, and the amount recovered increases if Cooling is at maximum stack. The amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": ""
      },
      {
        "name": "Please Do Not Disturb",
        "nameJp": "邪魔しないでください",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/05/113015_q3crm.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 50%",
        "exactDescription": "Carmen gets angry and attacks the enemy because her wonderful time was interrupted. Give yourself 1 Cooling stack. The damage increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1, and after attacking, recovers the HP of the ally with the lowest current HP percentage. The amount of recovery increases in proportion to your maximum HP."
      },
      {
        "name": "Guardian Knight",
        "nameJp": "守護の騎士",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/05/113024_ci4yg.webp",
        "target": "Trigger Skill｜Specific Ally",
        "spOrEnergyCost": "CT: 2 turns | Toughness: 1",
        "multiplierSummary": "HP15%",
        "exactDescription": "Protect your allies with a shield imbued with the power of protection. When an ally with the Pledge of Love (cannot be canceled) is attacked, activates the Guardian Knight on the target.\nAfter recovering the target's HP and creating a barrier for 2 turns, increase own and target's Action Gauge by 30%. Give yourself 2 Cooling stacks. Recovery amount and barrier increase in proportion to own maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Wedding March",
        "nameJp": "ウェディング・マーチ",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/05/113036_e0id6.webp",
        "target": "Active Skill | Single Ally",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "HP23%",
        "exactDescription": "Carmen throws her bouquet to support her allies. Give yourself 3 Cooling stacks.\nRemoves all weakening of target and restores HP. If the target is a Moon Attribute, give the target 3 Cooling stacks. The amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": "After using a skill, recover 1 Toughness."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517750",
      "arcana-79517792",
      "arcana-79534223",
      "arcana-79606361"
    ],
    "staticData": {
      "nameJp": "花嫁カルメン",
      "pool": "Limited",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-18986-20251112031910.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/05/132205_k6viz.webp",
      "pvpTier": "SS",
      "journeyStats": {
        "power": 10,
        "vitality": 180,
        "endurance": 150,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Speed Set (SPD +25%)",
          "Life Set (Max HP +20%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Immunity Set (1T Debuff Immunity)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "Speed / HP (%) / Effect Hit / Effect RES"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "Max HP +10% and Speed +6. At the start of battle, grants a Barrier equal to 15% of Max HP to all allies for 2 turns."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "At the start of battle, Carmen applies a Pledge of Love (which cannot be canceled) to the ally with the highest ATK, excluding herself.\nWhen an ally under the Pledge of Love (cannot be canceled) is attacked by a single target, it receives 40% of the target's damage instead and increases its own Action Gauge by 18%. Only the highest damage dispersion effect is applied.\nAfter using Basic Skill, recovers the HP of all allies, and the amount recovered increases if Cooling is at maximum stack. The amount of recovery increases in proportion to your maximum HP."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Carmen's maximum HP increases by 5%.\nAt the start of battle, Carmen applies a pledge of love (which cannot be canceled) to the ally with the highest ATK, excluding herself.\nWhen an ally under the Pledge of Love (cannot be canceled) is attacked by a single target, it receives 40% of the target's damage instead and increases its own Action Gauge by 18%. Only the highest damage dispersion effect is applied.\nAfter using Basic Skill, recovers the HP of all allies, and the amount recovered increases if Cooling is at maximum stack. The amount of recovery increases in proportion to your maximum HP."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Carmen's maximum HP increases by 10%.\nAt the start of battle, Carmen applies a pledge of love (which cannot be canceled) to the ally with the highest ATK, excluding herself.\nWhen an ally under the Pledge of Love (cannot be canceled) is attacked by a single target, it takes 40% of the target's damage instead and increases own Action Gauge by 24%. Only the highest damage dispersion effect is applied.\nAfter using Basic Skill, recovers the HP of all allies, and the amount recovered increases if Cooling is at maximum stack. The amount of recovery increases in proportion to your maximum HP."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Carmen's maximum HP increases by 15%.\nAt the start of battle, Carmen applies a pledge of love (which cannot be canceled) to the ally with the highest ATK, excluding herself.\nWhen an ally under the Pledge of Love (cannot be canceled) receives a single attack, it takes 40% of the target's damage instead and increases its own Action Gauge by 30%. Only the highest damage dispersion effect is applied.\nAfter using Basic Skill, recovers the HP of all allies, and the amount recovered increases if Cooling is at maximum stack. The amount of recovery increases in proportion to your maximum HP."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★\nIncrease CT shortening",
          "recLevel": "Lv.6｜Lv.8｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆\nIncrease CT shortening",
          "recLevel": "Lv.6｜Lv.10"
        }
      ],
      "curio": {
        "name": "Spring Bride Hairpin",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/125948_1amfg.webp",
        "rank": "B (properly strengthened)",
        "effect": "After attacking, 50% reduces enemy's Action Gauge by 30%, and 100% causes chain damage to enemy proportional to own maximum HP.\nIf you enter Toughness break state after receiving an attack, reduce the ATK of all enemies for 3 turns.\nEffect Ignore RES."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Sense of Defense",
          "effect": "Defense power increases by 5%."
        },
        {
          "name": "Skill in Life",
          "effect": "Maximum HP increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        },
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        }
      ],
      "profile": {
        "cv": "Lynn",
        "affiliation": "Knights of Monastir",
        "birthday": "August 11th",
        "height": "168cm",
        "origin": "Principality of Monastir",
        "obtain": "Gacha (limited)",
        "bio": "Vice-commander of the Knights of the Principality of Monastir. No matter how difficult the situation, he is a shield for the knights who never forgets to smile."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "bride-epindel",
    "name": "Bride Epindel",
    "title": "Orlan Family · Slash Damage",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/06/151138_sphtu.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.6",
    "summary": "SSR Sun Caster (Slash Damage). Epindel's ATK increases by 15%. Epindel gives himself one ignition stack when an ally other than himself receives a Critical Hit. At the start of each Sun Attribute ally's turn, each grant 2 Ignition stacks at 100%. Ultimate [Bride, Entrance]: Epindel is determined and punishes those who ",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 21080,
      "spd": 90,
      "atk": 4336,
      "def": 1594,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Pure White Fighting Spirit",
        "nameJp": "純白の闘志",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/184021_vdkta.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Epindel's ATK increases by 15%.\nEpindel gives himself one ignition stack when an ally other than himself receives a Critical Hit.\nAt the start of each Sun Attribute ally's turn, each grant 2 Ignition stacks at 100%.",
        "novaBurst": ""
      },
      {
        "name": "Hawk Attack",
        "nameJp": "鷹の強襲",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/184057_r7gzd.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "It sneaks into the enemy's pocket when it shows an opening, and cuts it to pieces with dual swordsmanship.\nGive yourself one ignition stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Bouquet Toss",
        "nameJp": "ブーケトス",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/184107_4jawz.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Attack the enemy who was distracted by the bouquet. At 100%, reduce enemy's Action Gauge by 20%.\nWhen attacking, if the enemy is in a barrier state, the damage will be increased by an additional 150%, and if the barrier is destroyed after the attack, the Action Gauge of the target with the highest ATK will be increased by 30% among allies other than yourself.\nAfter attacking on your turn, if your ignition is at maximum stack, give yourself an additional turn, increase your ATK for 2 turns, and then erase all ignition stacks.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1 and damage increases by 20%."
      },
      {
        "name": "Bride, Entrance",
        "nameJp": "花嫁、入場",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/184114_je4s2.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 66.25%",
        "exactDescription": "Epindel is determined and punishes those who interfere with the ceremony. Increases speed for 2 turns.\nWhen attacking, reduce the Action Gauge of targets in barrier state by 20%, and increase damage by 15% in proportion to the number of enemies in barrier state. Can be stacked up to 3 times.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517774",
      "arcana-79517783",
      "arcana-79534220",
      "arcana-79576397"
    ],
    "staticData": {
      "nameJp": "花嫁エピンデル",
      "pool": "Standard",
      "attackType": "Slash Damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-57169-20251112031841.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/06/152600_marq9.webp",
      "pvpTier": "SS",
      "journeyStats": {
        "power": 180,
        "vitality": 140,
        "endurance": 20,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Epindel gives himself one ignition stack when an ally other than himself receives a Critical Hit.\nAt the start of each Sun Attribute ally's turn, give yourself 2 ignition stacks at 60% each."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Epindel's ATK increases by 5%.\nEpindel gives himself one ignition stack when an ally other than himself receives a Critical Hit.\nAt the start of each Sun Attribute ally's turn, give yourself 2 ignition stacks at 60% each."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Epindel's ATK increases by 10%.\nEpindel gives himself one ignition stack when an ally other than himself receives a Critical Hit.\nAt the start of each Sun Attribute ally's turn, each grant 2 Ignition stacks at 80%."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Epindel's ATK increases by 15%.\nEpindel gives himself one ignition stack when an ally other than himself receives a Critical Hit.\nAt the start of each Sun Attribute ally's turn, each grant 2 Ignition stacks at 100%."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★\nIncrease CT shortening",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆\nIncrease CT shortening",
          "recLevel": "Lv.6｜Lv.8｜Lv.10"
        }
      ],
      "curio": {
        "name": "Peony Bouquet",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/125956_tjo8r.webp",
        "rank": "B (properly strengthened)",
        "effect": "Grants 5 Ignition Stacks at the start of battle, and 1 Ignition Stack to himself at the start of his turn.\nWhen using Bouquet Toss, cause chain damage to the enemy proportional to the ATK of your ignition stack.\nApplies to up to 5 items."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Insight",
          "effect": "Crit rate increases by 5%."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        },
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        }
      ],
      "profile": {
        "cv": "Saki Miyashita",
        "affiliation": "Orlan Family",
        "birthday": "August 18th",
        "height": "165cm",
        "origin": "NOA",
        "obtain": "Gacha (constant)",
        "bio": "The next head of the Orlan family. Asherah and I are childhood friends. In many ways, he is conscious of Asherah and has a fierce rivalry with him."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "carnelia",
    "name": "Carnelia",
    "title": "Wanderer · mental damage",
    "rarity": "SSR",
    "element": "Chaos",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/06/120413_604d3.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.2",
    "summary": "SSR Chaos Caster (mental damage). Carnelia's ATK increases by 15%. At the start of battle, Carnelia generates jet black reverberation (cannot be removed) for 1 turn. When attacking, ATK increases by 6% in proportion to the number of upheaval stacks attached to itself, up to a maximum of 5 stacks. When you receive damag",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20622,
      "spd": 93,
      "atk": 4489,
      "def": 1596,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Rotation of the Wheel",
        "nameJp": "回し車の輻",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/185734_ajd82.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Carnelia's ATK increases by 15%.\nAt the start of battle, Carnelia generates jet black reverberation (cannot be removed) for 1 turn.\nWhen attacking, ATK increases by 6% in proportion to the number of upheaval stacks attached to itself, up to a maximum of 5 stacks.\nWhen you receive damage that would leave you incapacitated, you will recover 1% of your maximum HP and will not be incapacitated.\nAlso, inflicts immortality on himself for 1 turn, jet black reverberation (cannot be removed) for 3 turns, and resets the cooldown time of all skills. Occurs only once during battle.",
        "novaBurst": ""
      },
      {
        "name": "Invitation of Dawn",
        "nameJp": "暁の誘い",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/185746_jt7xn.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "It embodies dark magical power in the form of a crow and attacks the enemy. Give yourself 1 upheaval stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Dawn of Guidance",
        "nameJp": "導きの暁闇",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/185754_x8gbz.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 70%",
        "exactDescription": "It releases the power concentrated in the light of dawn and attacks the enemy. Inflicts 100% incapacity on enemy for 2 turns and reduces Action Gauge by 25%.\nGive yourself 1 upheaval stack.\nAfter attacking, if you are in the state of Jet Black Reverberation (cannot be removed), activate the Guiding Dawn again on a random enemy.\nThe additional activated effect only occurs once per your turn.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Release of Separation",
        "nameJp": "乖離解放",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/185803_mhivf.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 66.25%",
        "exactDescription": "Attacks all enemies with a hellfire of dissociation that has the attributes of destruction and destruction.\nIncreases own Action Gauge by 30% and grants 1 upheaval stack.\nIf you are in the state of Jet Black Reverberation (cannot be removed), damage increases by 50%.",
        "novaBurst": "When attacking, your Fixed Toughness Damage will temporarily increase by 1 and you will recover HP equal to 15% of the damage."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-80139832",
      "arcana-79517783",
      "arcana-79534220",
      "arcana-79576397"
    ],
    "staticData": {
      "nameJp": "カネリア",
      "pool": "Standard",
      "attackType": "mental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-10703-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-57169-20251112031841.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/06/175513_un5x8.webp",
      "pvpTier": "SS",
      "journeyStats": {
        "power": 180,
        "vitality": 20,
        "endurance": 20,
        "focus": 190,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "At the start of battle, Carnelia generates jet black reverberation (cannot be removed) for 1 turn.\nWhen attacking, the ATK increases by 2% in proportion to the number of upheaval stacks attached to the user, up to a maximum of 5 stacks.\nWhen you receive damage that would leave you incapacitated, you will recover 1% of your maximum HP and will not be incapacitated.\nAlso, causes invulnerability for 1 turn, jet black reverberation (cannot be removed) for 3 turns, and resets the cooldown time of all skills. Occurs only once during battle."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Carnelia's ATK increases by 5%.\nAt the start of the battle, Carnelia generates jet black reverberation (cannot be removed) for 1 turn.\nWhen attacking, the ATK increases by 2% in proportion to the number of upheaval stacks attached to the user, up to a maximum of 5 stacks.\nWhen you receive damage that would leave you incapacitated, you will recover 1% of your maximum HP and will not be incapacitated.\nAlso, causes invulnerability for 1 turn, jet black reverberation (cannot be removed) for 3 turns, and resets the cooldown time of all skills. Occurs only once during battle."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Carnelia's ATK increases by 10%.\nAt the start of the battle, Carnelia generates jet black reverberation (cannot be removed) for 1 turn.\nWhen attacking, the ATK increases by 4% in proportion to the number of upheaval stacks attached to yourself, up to a maximum of 5 stacks.\nWhen you receive damage that would leave you incapacitated, you will recover 1% of your maximum HP and will not be incapacitated.\nAlso, causes invulnerability for 1 turn, jet black reverberation (cannot be removed) for 3 turns, and resets the cooldown time of all skills. Occurs only once during battle."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Carnelia's ATK increases by 15%.\nAt the start of the battle, Carnelia generates jet black reverberation (cannot be removed) for 1 turn.\nWhen attacking, the ATK increases by 6% in proportion to the number of upheaval stacks attached to itself, up to a maximum of 5 stacks.\nWhen you receive damage that would leave you incapacitated, you will recover 1% of your maximum HP and will not be incapacitated.\nAlso, causes invulnerability for 1 turn, jet black reverberation (cannot be removed) for 3 turns, and resets the cooldown time of all skills. Occurs only once during battle."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆\nIncrease the grant probability up",
          "recLevel": "Lv.6｜Lv.8｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★\nIncrease to Action Gauge increase",
          "recLevel": "Lv.6｜Lv.8｜Lv.10"
        }
      ],
      "curio": {
        "name": "Light of Dawn",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/130150_bgu0m.webp",
        "rank": "A (easy to clear)",
        "effect": "At the start of battle, generates jet black reverberations (cannot be removed) for 3 turns.\nWhen attacking, if you are in jet black reverberation (cannot be removed), recover HP equal to 15% of the damage."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Insight",
          "effect": "Crit rate increases by 5%."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        },
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        }
      ],
      "profile": {
        "cv": "Groundwork Shino",
        "affiliation": "Wanderer",
        "birthday": "December 31st",
        "height": "166cm",
        "origin": "NOA",
        "obtain": "Gacha (constant)",
        "bio": "The former head maid of Candle Square and the eldest daughter of the Reese family. Due to the influence of the \"curse of immortality\", he is unable to face death and has become numb to the joys of life. She had gone missing and returned to NOA to break the curse."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "ceres",
    "name": "Ceres",
    "title": "Western Recapture Force · Slash Damage",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/07/152521_s54gh.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.2",
    "summary": "SSR Moon Striker (Slash Damage). Ceres' ATK increases by 15%. Ceres grants herself 2 Cooling stacks at the start of battle. After using Type 7 Great Earthquake, increase own Action Gauge by 35% according to the number of targets attacked. This effect increases Action Gauge up to 175%. When using Type 1 Shingetsu or Typ",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20662,
      "spd": 106,
      "atk": 4280,
      "def": 1600,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Order by Force",
        "nameJp": "力による秩序",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/121736_mfdu9.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Ceres' ATK increases by 15%.\nCeres grants herself 2 Cooling stacks at the start of battle.\nAfter using Type 7 Great Earthquake, increase own Action Gauge by 35% according to the number of targets attacked. This effect increases Action Gauge up to 175%.\nWhen using Type 1 Shingetsu or Type 21 Kenfu, if the enemy is frozen, the damage will increase by 30%.",
        "novaBurst": ""
      },
      {
        "name": "Type 1 Crescent Moon",
        "nameJp": "第1型三日月",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/121758_0t96c.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Charge alone and attack the enemy in an instant. Give yourself 1 Cooling stack.",
        "novaBurst": "When attacking, temporarily increases own Fixed Toughness Damage by 1 and reduces enemy's Action Gauge by 15% at 100% after attacking."
      },
      {
        "name": "Type 7 Major Earthquake",
        "nameJp": "第7型大地震",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/121810_vtm75.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 50%",
        "exactDescription": "Fill two swords with great power and swing them down to attack all enemies.\n100% chance to remove 1 strengthening effect from all enemies, and 100% chance to apply 1 freeze effect for 2 turns, up to 2 times. Additionally, there is a 100% chance to apply Isolation for 2 turns.\nGive yourself 1 Cooling stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Type 21 Sword Style",
        "nameJp": "第21型刀風",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/121819_uqdbx.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Attacks the enemy with countless slashes that blow like a storm. Grants Western Wind to self for 3 turns.\n100% chance to inflict Stun on enemy for 1 turn, and 100% chance to reduce enemy's Action Gauge by 20%. Action Gauge reduction amount increases by 10% according to the number of Cooling stacks attached to yourself. This effect can be applied up to 5 times.\nAfter attacking, clear all cooling stacks.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517765",
      "arcana-80191501",
      "arcana-80521390",
      "arcana-79517855"
    ],
    "staticData": {
      "nameJp": "セレス",
      "pool": "Standard",
      "attackType": "Slash Damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-1533-20251112031704.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/07/211713_ymnwi.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 180,
        "vitality": 20,
        "endurance": 20,
        "focus": 190,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "Ceres grants herself 2 cooling stacks at the start of battle.\nAfter using Type 7 Great Earthquake, increase own Action Gauge by 25% according to the number of targets attacked. This effect increases Action Gauge up to 125%.\nWhen using Type 1 Shingetsu or Type 21 Kenfu, if the enemy is frozen, damage increases by 30%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Ceres' ATK increases by 5%.\nCeres gives herself 2 cooling stacks at the start of battle.\nAfter using Type 7 Great Earthquake, increase own Action Gauge by 25% according to the number of targets attacked. This effect increases Action Gauge up to 125%.\nWhen using Type 1 Shingetsu or Type 21 Kenfu, if the enemy is frozen, damage increases by 30%."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Ceres' ATK increases by 10%.\nCeres gives herself 2 cooling stacks at the start of battle.\nAfter using Type 7 Earthquake, increase own Action Gauge by 30% according to the number of targets attacked. This effect increases Action Gauge by up to 150%.\nWhen using Type 1 Shingetsu or Type 21 Kenfu, if the enemy is frozen, damage increases by 30%."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Ceres' ATK increases by 15%.\nCeres gives herself 2 cooling stacks at the start of battle.\nAfter using Type 7 Great Earthquake, increase own Action Gauge by 35% according to the number of targets attacked. This effect increases Action Gauge up to 175%.\nWhen using Type 1 Shingetsu or Type 21 Kenfu, if the enemy is frozen, damage increases by 30%."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆\nIncrease the grant probability up",
          "recLevel": "Lv.6｜Lv.8｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★\nIncrease the grant probability up",
          "recLevel": "Lv.6｜Lv.8｜Lv.10"
        }
      ],
      "curio": {
        "name": "Blitz Operation Plan",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/130202_yi4t7.webp",
        "rank": "C (no change to that extent)",
        "effect": "At the start of battle, give yourself 2 cooling stacks.\nAfter using the 21st type sword style, there is a 100% chance to reduce the speed of the enemy for 2 turns.\nThis effect ignores Effect RES."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Speed",
          "effect": "Increases speed by 5."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        },
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        }
      ],
      "profile": {
        "cv": "Yuko Natsuyoshi",
        "affiliation": "Western Recapture Force",
        "birthday": "January 1st",
        "height": "158cm",
        "origin": "Western disaster area",
        "obtain": "Gacha (constant)",
        "bio": "He is the captain of the Western Recapture Corps and a hero for the people of the West who dream of reclaiming the West. He pursues strength and never allows himself to be seen as weak."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "swimsuit-luna",
    "name": "Swimsuit Luna",
    "title": "Voyager Relief Team · elemental damage",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Defender",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/112813_tnirc.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.2",
    "summary": "SSR Sun Defender (elemental damage). Luna's maximum HP increases by 15%. At the start of battle, give yourself 5 Ignition stacks and apply Waterpuff Sunscreen to all allies except yourself for 3 turns. After receiving an attack, if a Critical Hit occurs, give yourself one ignition stack. If a Critical Hit occurs after ",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 25109,
      "spd": 95,
      "atk": 3352,
      "def": 1703,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Summer Survival Kit",
        "nameJp": "夏のサバイバルキット",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/07/201908_owtn6.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Luna's maximum HP increases by 15%.\nAt the start of battle, give yourself 5 Ignition stacks and apply Waterpuff Sunscreen to all allies except yourself for 3 turns.\nAfter receiving an attack, if a Critical Hit occurs, give yourself one ignition stack.\nIf a Critical Hit occurs after any of your allies other than yourself is attacked, there is a 100% chance to apply one Ignition stack to yourself.",
        "novaBurst": ""
      },
      {
        "name": "Bubble Swing!",
        "nameJp": "バブル・スイング！",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/07/202706_1cav9.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 60%",
        "exactDescription": "Aim the enemy and hit the cool polka dots.\nGive yourself one Ignition stack.\nDamage increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, temporarily increases your Fixed Toughness Damage by 1 and applies a barrier to yourself for 1 turn after attacking. Additionally, grants 1 ignition stack.\nBarrier increases in proportion to own maximum HP."
      },
      {
        "name": "Summer Tentation♡",
        "nameJp": "サマー・テンテーション♡",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/07/202707_1pzco.webp",
        "target": "Trigger Skill｜Single Enemy",
        "spOrEnergyCost": "CT: 1 turn | Toughness: 1",
        "multiplierSummary": "ATK 85%",
        "exactDescription": "After an ally other than yourself receives a Critical Hit, activates Summer Tentation♡ on the attacker.\nApplies a barrier to yourself for 2 turns, and 100% chance to reduce defense power for 2 turns to the enemy.\nWhen attacking, if your Ignition is at maximum stack, the damage will be increased by an additional 100%, and there is a 100% chance to inflict Provocation on the enemy for 1 turn. Then clear all ignition stacks.\nDamage and barrier increase in proportion to your maximum HP.",
        "novaBurst": "-"
      },
      {
        "name": "Paradise in Summer!",
        "nameJp": "パラダイス・イン・サマー！",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/07/202706_9rd10.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Bring out the power of the moon staff and give a cool summer.\nGrants Defense Up to all allies for 2 turns and grants 3 Ignition stacks to yourself.\n100% chance to reduce ATK for 2 turns and taunt for 1 turn.\nDamage increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517777",
      "arcana-79517786"
    ],
    "staticData": {
      "nameJp": "水着ルナ",
      "pool": "Standard",
      "attackType": "elemental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-9372-20251112031758.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/07/194829_9igtr.webp",
      "pvpTier": "SS",
      "journeyStats": {
        "power": 10,
        "vitality": 180,
        "endurance": 30,
        "focus": 190,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Life Set (Max HP +20%)",
          "Protection Set (DEF +20% / Guard Rate +10%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Immunity Set (1T Debuff Immunity)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "HP (%) / DEF (%) / Speed / Effect RES"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "Max HP +10% and Speed +6. At the start of battle, grants a Barrier equal to 15% of Max HP to all allies for 2 turns."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "At the start of battle, give yourself 5 ignition stacks and apply Waterpuff Sunscreen to all allies except yourself for 3 turns.\nAfter receiving an attack, if a Critical Hit occurs, give yourself one ignition stack.\nIf a Critical Hit occurs after any of your allies other than yourself is attacked, you have a 60% chance to apply 1 ignition stack to yourself."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Luna's maximum HP increases by 5%.\nAt the start of battle, give yourself 5 ignition stacks and apply Waterpuff Sunscreen to all allies except yourself for 3 turns.\nAfter receiving an attack, if a Critical Hit occurs, give yourself one ignition stack.\nIf a Critical Hit occurs after any of your allies other than yourself is attacked, you have a 60% chance to apply 1 ignition stack to yourself."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Luna's maximum HP increases by 10%.\nAt the start of battle, give yourself 5 ignition stacks and apply Waterpuff Sunscreen to all allies except yourself for 3 turns.\nAfter receiving an attack, if a Critical Hit occurs, give yourself one ignition stack.\nIf a Critical Hit occurs after any of your allies other than yourself is attacked, you have an 80% chance to apply 1 ignition stack to yourself."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Luna's maximum HP increases by 15%.\nAt the start of battle, give yourself 5 ignition stacks and apply Waterpuff Sunscreen to all allies except yourself for 3 turns.\nAfter receiving an attack, if a Critical Hit occurs, give yourself one ignition stack.\nIf a Critical Hit occurs after any of your allies other than yourself is attacked, there is a 100% chance to apply one ignition stack to yourself."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆\nIncrease the grant probability up",
          "recLevel": "Lv.4｜Lv.8｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★\nIncrease to CT shortening",
          "recLevel": "Lv.6｜Lv.10"
        }
      ],
      "curio": {
        "name": "Blackout Sunglasses",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/130210_jogul.webp",
        "rank": "B (properly strengthened)",
        "effect": "At the start of battle, apply Waterproof Sunscreen to yourself for 2 turns.\nAfter being attacked, activate Summer Tentation♡ on the attacker.\nThis effect only occurs once every 3 turns."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Sense of Concentration",
          "effect": "Effect Hit increases by 10%."
        },
        {
          "name": "Skill in Life",
          "effect": "Maximum HP increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        },
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        }
      ],
      "profile": {
        "cv": "Miya Minato",
        "affiliation": "Voyager Relief Team",
        "birthday": "March 18th",
        "height": "167cm",
        "origin": "unknown",
        "obtain": "Gacha (constant)",
        "bio": "He is the best disciple of the Great Witch of Dreams, Magi, and has inherited her \"Moon Staff\", and is the self-proclaimed best prophet in Lavista. He lives his life without thinking about the future, so much so that he spends the money he earned that day at the casino."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "swimsuit-smile",
    "name": "Swimsuit Smile",
    "title": "Voyager Relief Team · elemental damage",
    "rarity": "SSR",
    "element": "Star",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/112830_qacgx.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.9",
    "summary": "SSR Star Assassin (elemental damage). Smile's ATK increases by 15%. At the start of battle, the enemy with the highest speed has a 100% chance of inflicting a water bomb for 3 turns. The effect at the start of battle occurs regardless of Effect RES, immunity, and hits. After rehydrating or using Summer Night and Firewo",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20480,
      "spd": 96,
      "atk": 4277,
      "def": 1594,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Smile's Underwater Experiment",
        "nameJp": "スマイルの水中実験",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/102844_sun6v.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Smile's ATK increases by 15%.\nAt the start of battle, the enemy with the highest speed has a 100% chance of inflicting a water bomb for 3 turns.\nThe effect at the start of battle occurs regardless of Effect RES, immunity, and hits.\nAfter rehydrating or using Summer Night and Fireworks, there is a 100% chance to inflict a water bomb on the enemy for 3 turns.\nWhen adding a new water bomb, the existing water bomb will be removed.\nWhen attacking, if the enemy is in a water bomb state, your Crit DMG increases by 20%.",
        "novaBurst": ""
      },
      {
        "name": "Hydration",
        "nameJp": "水分補充",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/102856_d156i.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 50%",
        "exactDescription": "Fires a cool water gun at the enemy.\nGive yourself 1 Jump stack.",
        "novaBurst": "When attacking, temporarily increases your Fixed Toughness Damage by 1 and gives you 2 jumping stacks after attacking.\nAdditionally, increase Action Gauge by 10%."
      },
      {
        "name": "Cool Ring System",
        "nameJp": "クーリングシステム",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/102909_fr0t1.webp",
        "target": "Trigger Skill｜Single Enemy",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 70%",
        "exactDescription": "After any of your allies (other than yourself) attacks an enemy with Water Bomb status, if you have 2 or more Jump stacks, activate the KuRing system on the enemy with Water Bomb status.\nSpend 2 of your jumps to give yourself 1 sparkler (cannot be removed), then increase your Action Gauge by 15%.\nIf an enemy with water bomb status becomes incapacitated after any of your allies other than yourself attacks, this skill will not activate.\nIf this skill is not activated by a trigger skill, the skill effect will not be applied.",
        "novaBurst": "-"
      },
      {
        "name": "Summer Night and Fireworks",
        "nameJp": "夏夜と花火",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/102918_gjhct.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "A spectacular fireworks show filled with summer memories begins.\nGive yourself 3 Jump stacks.\nDepending on the number of stacks of own sparklers (cannot be removed), activates KuRing system one additional time on enemies in water bomb state, and erases all sparklers (cannot be removed).\nThe additionally activated KuRing system gives priority to attacking enemies in the water bomb state.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517759",
      "arcana-79517774",
      "arcana-79517783",
      "arcana-79534220"
    ],
    "staticData": {
      "nameJp": "水着スマイル",
      "pool": "Standard",
      "attackType": "elemental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-23566-20251112031814.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/07/145100_2hp3y.webp",
      "pvpTier": "S",
      "journeyStats": {
        "power": 180,
        "vitality": 20,
        "endurance": 20,
        "focus": 190,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "At the start of battle, there is a 100% chance to inflict a water bomb on the enemy with the highest speed for 3 turns.\nThe effect at the start of battle occurs regardless of Effect RES, immunity, and hits.\nAfter rehydrating or using Summer Night and Fireworks, there is a 100% chance to inflict a water bomb on the enemy for 3 turns.\nWhen adding a new water bomb, the existing water bomb will be canceled.\nWhen attacking, if the enemy is in a water bomb state, your Crit DMG increases by 10%."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Smile's ATK increases by 5%.\nAt the start of battle, there is a 100% chance to inflict a water bomb on the enemy with the highest speed for 3 turns.\nThe effect at the start of battle occurs regardless of Effect RES, immunity, and hits.\nAfter rehydrating or using Summer Night and Fireworks, there is a 100% chance to inflict a water bomb on the enemy for 3 turns.\nWhen adding a new water bomb, the existing water bomb will be canceled.\nWhen attacking, if the enemy is in a water bomb state, your Crit DMG increases by 10%."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Smile's ATK increases by 10%.\nAt the start of battle, there is a 100% chance to inflict a water bomb on the enemy with the highest speed for 3 turns.\nThe effect at the start of battle occurs regardless of Effect RES, immunity, and hits.\nAfter rehydrating or using Summer Night and Fireworks, there is a 100% chance to inflict a water bomb on the enemy for 3 turns.\nWhen adding a new water bomb, the existing water bomb will be canceled.\nWhen attacking, if the enemy is in a water bomb state, your Crit DMG increases by 15%."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Smile's ATK increases by 15%.\nAt the start of battle, there is a 100% chance to inflict a water bomb on the enemy with the highest speed for 3 turns.\nThe effect at the start of battle occurs regardless of Effect RES, immunity, and hits.\nAfter rehydrating or using Summer Night and Fireworks, there is a 100% chance to inflict a water bomb on the enemy for 3 turns.\nWhen adding a new water bomb, the existing water bomb will be canceled.\nWhen attacking, if the enemy is in a water bomb state, your Crit DMG increases by 20%."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆\nIncrease to CT shortening",
          "recLevel": "Lv.6｜Lv.10"
        }
      ],
      "curio": {
        "name": "Happy Ending Summer",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/130220_goch1.webp",
        "rank": "A (easy to clear)",
        "effect": "At the start of battle, give yourself 3 sparklers (cannot be removed).\nWhen using water replenishment, if the enemy is in a water bomb state, the KuRing system will be additionally activated on the enemy in a water bomb state.\nAlso grants one sparkler (cannot be removed) to yourself.\nThe additionally activated KuRing system prioritizes and attacks enemies in water bomb state."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Speed",
          "effect": "Increases speed by 5."
        },
        {
          "name": "Concentration Skills",
          "effect": "Effect Hit increases by 4%."
        }
      ],
      "gifts": [
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        },
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        }
      ],
      "profile": {
        "cv": "Yuzuki Tamukai",
        "affiliation": "Voyager Relief Team",
        "birthday": "November 10th",
        "height": "148cm",
        "origin": "NOA",
        "obtain": "Gacha (constant)",
        "bio": "A believer in science who claims that he is not a human but a creature created by advanced science and technology. I have never laughed since I was born. He's doing research to become more funny, and he's using the leader as a guinea pig."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "christel",
    "name": "Christel",
    "title": "Morel Shipping Company · elemental damage",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/08/190200_51vpg.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.6",
    "summary": "SSR Sun Ranger (elemental damage). Christel's ATK increases by 15%. At the start of battle, give yourself 3 Ignition stacks. When any ally other than yourself attacks with a Special Skill or Ultimate Skill, give yourself 1 Ignition stack, and if the attacking ally has Sun Attribute, add 1 Ignition stack. When using Rev",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20662,
      "spd": 100,
      "atk": 4280,
      "def": 1600,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Accumulated Grudge",
        "nameJp": "積もった怨恨",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/08/191729_yhjwv.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 40%",
        "exactDescription": "Christel's ATK increases by 15%.\nAt the start of battle, give yourself 3 Ignition stacks.\nWhen any ally other than yourself attacks with a Special Skill or Ultimate Skill, give yourself 1 Ignition stack, and if the attacking ally has Sun Attribute, add 1 Ignition stack.\nWhen using Revenge and Punishment, if the enemy is weakened, there is a 100% chance to inflict chain damage proportional to own ATK and increase own Action Gauge by 30%.",
        "novaBurst": ""
      },
      {
        "name": "Revenge and Punishment",
        "nameJp": "復讐と膺懲",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/08/191728_fw6de.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Aim the pistol and fire to attack.\nGive yourself one Ignition stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1.\nAdditionally, after attacking, there is a 100% chance to inflict Burn on the enemy for 2 turns.\nEffect Ignore RES."
      },
      {
        "name": "A Boiling Desire for Revenge",
        "nameJp": "沸き立つ復讐心",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/08/191729_6rnk3.webp",
        "target": "Trigger Skill｜Myself",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "After any attack by an ally other than himself, if his own ignition is at maximum stack, a boiling desire for revenge will be activated.\nWhen using the skill, give yourself vengeance (cannot be removed) for 3 turns.\nAfter using the skill, there is a 100% chance to inflict 2 Burns on all enemies for 2 turns.\nIncreases own Action Gauge by 50%, gives 2 ignition stacks to Sun Attribute allies other than self, then clears all own ignition stacks.",
        "novaBurst": "-"
      },
      {
        "name": "Release of Nightmare",
        "nameJp": "悪夢の開放",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/08/191729_lhae3.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Attacks the enemy with the power of emptiness, causing pain.\nWhen attacking, there is a 100% chance to extend the enemy's Burn by 1 turn. Additionally, inflicts chain damage proportional to your own ATK depending on the number of weakening effects the enemy has. This effect can be applied up to 5 times.\nAfter attacking, increase own Action Gauge by 30%.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-80331877",
      "arcana-79517774",
      "arcana-79517783",
      "arcana-79534220"
    ],
    "staticData": {
      "nameJp": "クリステル",
      "pool": "Standard",
      "attackType": "elemental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-171-20251112031735.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/08/203222_m2hvq.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 180,
        "vitality": 20,
        "endurance": 20,
        "focus": 190,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "At the start of battle, give yourself 3 ignition stacks.\nWhen any ally other than yourself attacks with Special Skill or Ultimate Skill, give yourself 1 ignition stack, and if the attacking ally has Sun Attribute, give 1 ignition stack additionally.\nWhen using Revenge and Punishment, increase own Action Gauge by 18%, and if the enemy is weakened, there is a 100% chance to inflict chain damage proportional to own ATK."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Christel's ATK increases by 5%.\nAt the start of battle, give yourself 3 ignition stacks.\nWhen any ally other than yourself attacks with Special Skill or Ultimate Skill, give yourself 1 ignition stack, and if the attacking ally has Sun Attribute, give 1 ignition stack additionally.\nWhen using Revenge and Punishment, increase own Action Gauge by 18%, and if the enemy is weakened, there is a 100% chance to inflict chain damage proportional to own ATK."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Christel's ATK increases by 10%.\nAt the start of battle, give yourself 3 ignition stacks.\nWhen any ally other than yourself attacks with Special Skill or Ultimate Skill, give yourself 1 ignition stack, and if the attacking ally has Sun Attribute, give 1 ignition stack additionally.\nWhen using Revenge and Punishment, increase own Action Gauge by 24%, and if the enemy is weakened, there is a 100% chance to inflict chain damage proportional to own ATK."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Christel's ATK increases by 15%.\nAt the start of battle, give yourself 3 ignition stacks.\nWhen any ally other than yourself attacks with Special Skill or Ultimate Skill, give yourself 1 ignition stack, and if the attacking ally has Sun Attribute, give 1 ignition stack additionally.\nWhen using Revenge and Punishment, increase own Action Gauge by 30%, and if the enemy is weakened, there is a 100% chance to inflict chain damage proportional to own ATK."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆",
          "recLevel": "Lv.6｜Lv.10"
        }
      ],
      "curio": {
        "name": "A Gaze That Sees All Directions",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/130235_1hig2.webp",
        "rank": "B (properly strengthened)",
        "effect": "The condition for activating the Boiling Vengeance skill has been changed to ``When one of your allies, including yourself, is attacked, and your ignition stack is at its maximum.''\nAt the start of your turn, give yourself 1 ignition stack."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Concentration",
          "effect": "Effect Hit increases by 10%."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        },
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        }
      ],
      "profile": {
        "cv": "Kazuki Asami",
        "affiliation": "Morel Shipping Company",
        "birthday": "March 15th",
        "height": "170cm",
        "origin": "faren",
        "obtain": "Gacha (constant)",
        "bio": "Representative of Morel Shipping Company, a major company. He is famous in social circles for his unique words and deeds."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "amora",
    "name": "Amora",
    "title": "Earl of Stranis · Slash Damage",
    "rarity": "SSR",
    "element": "Order",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/143855_iv9nt.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.9",
    "summary": "SSR Order Assassin (Slash Damage). Amora's ATK increases by 15%. When attacking, if you are not weakened, the damage increases by 30%. After being attacked, if you are weakened, give yourself 3 Insight stacks. At the start of the turn, if your Insight is at its maximum stack, consume all stacks and remove all of your o",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20622,
      "spd": 97,
      "atk": 4312,
      "def": 1596,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Lord of Stranis",
        "nameJp": "ストラニスの主",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/09/191824_a1kgy.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Amora's ATK increases by 15%.\nWhen attacking, if you are not weakened, the damage increases by 30%.\nAfter being attacked, if you are weakened, give yourself 3 Insight stacks.\nAt the start of the turn, if your Insight is at its maximum stack, consume all stacks and remove all of your own debuffs.\nAdditionally, grants ATK up for 2 turns and grants Night Blooming Flower (cannot be removed).",
        "novaBurst": ""
      },
      {
        "name": "A Spear That Doesn't Get Drunk",
        "nameJp": "酔わない槍",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/09/112138_hqev0.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attacks the enemy with a lotus attack at a speed that is invisible to the eye.\nGrant yourself 1 Insight stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "A Piercing Star",
        "nameJp": "貫く星",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/09/112204_6yd8p.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 100%",
        "exactDescription": "After jumping high, it attacks the enemy with a powerful blow.\n100% chance to reduce accuracy for 1 turn.\nAlso increases your Action Gauge by 30% and grants you 1 Insight Stack.\nAfter attacking, if you are in the Night Blooming Flower (cannot be removed) state, reduce the cooldown of Special Skill by 1 turn.",
        "novaBurst": "When attacking, temporarily increases own Fixed Toughness Damage by 1 and increases own Action Gauge by 20% after attacking."
      },
      {
        "name": "Execution That Sharpens the Light",
        "nameJp": "光を研ぎ上げた執行",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/09/112154_wnsp5.webp",
        "target": "Active Skill | All Enemies",
        "spOrEnergyCost": "CT: 6 turns | Toughness: 1",
        "multiplierSummary": "ATK 66.25%",
        "exactDescription": "Declare execution and attack all enemies.\nApplies Night Blooming Flower (cannot be removed) to self for 3 turns, and applies Accuracy Down to all enemies for 2 turns with a 100% chance.\nGive yourself an additional turn.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-80363578",
      "arcana-79517783",
      "arcana-79534220",
      "arcana-79576397"
    ],
    "staticData": {
      "nameJp": "アモラ",
      "pool": "Standard",
      "attackType": "Slash Damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-65502-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-23566-20251112031814.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/09/171707_rlvta.webp",
      "pvpTier": "SS",
      "journeyStats": {
        "power": 180,
        "vitality": 20,
        "endurance": 20,
        "focus": 190,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "When attacking, if you are not in a weakened state, damage increases by 10%.\nAfter being attacked, if you are weakened, give yourself 3 insight stacks.\nAt the start of the turn, if your insight is at maximum stack, consume all stacks and remove all debuffs from yourself.\nAdditionally, grants ATK up for 2 turns and grants Night Blooming Flower (cannot be removed)."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Amora's ATK increases by 5%.\nWhen attacking, if you are not in a weakened state, damage increases by 10%.\nAfter being attacked, if you are weakened, give yourself 3 insight stacks.\nAt the start of the turn, if your insight is at maximum stack, consume all stacks and remove all debuffs from yourself.\nAdditionally, grants ATK up for 2 turns and grants Night Blooming Flower (cannot be removed)."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Amora's ATK increases by 10%.\nWhen attacking, if you are not in a weakened state, damage increases by 20%.\nAfter being attacked, if you are weakened, give yourself 3 insight stacks.\nAt the start of the turn, if your insight is at maximum stack, consume all stacks and remove all debuffs from yourself.\nAdditionally, grants ATK up for 2 turns and grants Night Blooming Flower (cannot be removed)."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Amora's ATK increases by 15%.\nWhen attacking, if you are not in a weakened state, damage increases by 30%.\nAfter being attacked, if you are weakened, give yourself 3 insight stacks.\nAt the start of the turn, if your insight is at maximum stack, consume all stacks and remove all debuffs from yourself.\nAdditionally, grants ATK up for 2 turns and grants Night Blooming Flower (cannot be removed)."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★\nIncrease until Action Gauge increases",
          "recLevel": "Lv.4｜Lv.8｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆\nUntil the probability of applying the hit rate debuff increases",
          "recLevel": "Lv.4｜Lv.8｜Lv.10"
        }
      ],
      "curio": {
        "name": "\"Night Starlight\" Earrings",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/165155_yrd62.webp",
        "rank": "A (easy to clear)",
        "effect": "When attacking, Crit Rate and Crit DMG increase by 50% if you are not in a weakened state.\nRecovers own HP after being attacked by a weakened enemy.\nThe amount of recovery increases in proportion to your ATK."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Insight",
          "effect": "Crit rate increases by 5%."
        },
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Skill of Insight",
          "effect": "Crit rate increases by 3%."
        }
      ],
      "gifts": [
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        },
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        }
      ],
      "profile": {
        "cv": "Yuri Komagata",
        "affiliation": "Earl of Stranis",
        "birthday": "March 16th",
        "height": "171cm",
        "origin": "Earldom of Stranis",
        "obtain": "Gacha (constant)",
        "bio": "The current head of the Earl Stranis family and an enforcer who follows the great witch Alicia. He has a relaxed personality and enjoys teasing others. He's an alcoholic who always carries Skittles with him, but he's definitely skilled."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "professor-m",
    "name": "Professor M",
    "title": "Lampadis · mental damage",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/205900_h5bcs.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.9",
    "summary": "SSR Moon Ranger (mental damage). Professor M's ATK increases by 15%. After Professor M uses black-and-white logic, he grants Sample Behavior Analysis for one turn to the ally with the highest ATK among the allies capable of pincer attack, causing a pincer attack. When an ally other than yourself attacks, increase your ",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 20662,
      "spd": 106,
      "atk": 4280,
      "def": 1600,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Object of Inquiry",
        "nameJp": "探究対象",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/155321_1k560.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Professor M's ATK increases by 15%.\nAfter Professor M uses black-and-white logic, he grants Sample Behavior Analysis for one turn to the ally with the highest ATK among the allies capable of pincer attack, causing a pincer attack.\nWhen an ally other than yourself attacks, increase your Action Gauge by 4% and give yourself 1 Cooling stack with a 100% chance. If the target ally is in the Sample Behavior Analysis state, increase Action Gauge by an additional 4% and apply 1 more Cooling stack.\nWhen a new sample behavior analysis is assigned, the sample behavior analysis that has already been assigned will be canceled.",
        "novaBurst": ""
      },
      {
        "name": "Black and White Logic",
        "nameJp": "白黒論理",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/155340_nde3r.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Professor M swings his bag around and attacks the enemy.\nGive yourself 1 Cooling stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1.\nAfter attacking, increase own Action Gauge by 20%."
      },
      {
        "name": "From Evil to Evil",
        "nameJp": "悪から悪へ",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/155347_nwzt2.webp",
        "target": "Trigger Skill｜Single Enemy",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 70%",
        "exactDescription": "After one of your allies attacks, if your Cooling is at maximum stack, cast Evil to Evil on the enemy.\nAfter attacking, increase own Action Gauge by 15% and remove all cooling stacks.\nWhen attacking, if the enemy is in Toughness break state, your damage increases by 30%.\nGive priority to attacking the enemy that attacked you last.",
        "novaBurst": "-"
      },
      {
        "name": "Magic Bullet Shooter",
        "nameJp": "魔弾の射手",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/155353_6u5aq.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Attacks the enemy with a bullet imbued with distorted malice.\nGive yourself 3 cooling stacks and increase your Action Gauge by 50%.\n100% chance to inflict Target Engraving on enemy for 2 turns.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-80400913",
      "arcana-79517753",
      "arcana-79517756",
      "arcana-79517759"
    ],
    "staticData": {
      "nameJp": "プロフェッサーM",
      "pool": "Standard",
      "attackType": "mental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-171-20251112031735.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2025/11/135932_70yqc.webp",
      "pvpTier": "SS",
      "journeyStats": {
        "power": 180,
        "vitality": 140,
        "endurance": 20,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "After Professor M uses Black and White Logic, he applies Sample Behavior Analysis for 1 turn to the ally with the highest ATK among the allies capable of pincer attack, causing a pincer attack.\nWhen attacking an ally other than yourself, increase your Action Gauge by 4% and give yourself 1 cooling stack with a 50% chance. If the target ally is in the Sample Behavior Analysis state, increase Action Gauge by an additional 4% and apply 1 more Cooling stack.\nWhen a new sample behavior analysis is assigned, the sample behavior analysis that has already been assigned will be canceled."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Professor M's ATK increases by 5%.\nAfter Professor M uses black-and-white logic, he applies Sample Behavior Analysis for one turn to the ally with the highest ATK among the allies capable of pincer attack, causing a pincer attack.\nWhen attacking an ally other than yourself, increase your Action Gauge by 4% and give yourself 1 cooling stack with a 50% chance. If the target ally is in the Sample Behavior Analysis state, increase Action Gauge by an additional 4% and apply 1 more Cooling stack.\nWhen a new sample behavior analysis is assigned, the sample behavior analysis that has already been assigned will be canceled."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Professor M's ATK increases by 10%.\nAfter Professor M uses black-and-white logic, he applies Sample Behavior Analysis for one turn to the ally with the highest ATK among the allies capable of pincer attack, causing a pincer attack.\nWhen attacking an ally other than yourself, increase your Action Gauge by 4% and give yourself 1 cooling stack with a 75% chance. If the target ally is in the Sample Behavior Analysis state, increase Action Gauge by an additional 4% and apply 1 more Cooling stack.\nWhen a new sample behavior analysis is assigned, the sample behavior analysis that has already been assigned will be canceled."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Professor M's ATK increases by 15%.\nAfter Professor M uses black-and-white logic, he applies Sample Behavior Analysis for one turn to the ally with the highest ATK among the allies capable of pincer attack, causing a pincer attack.\nWhen attacking an ally other than yourself, increase your own Action Gauge by 4% and give yourself 1 cooling stack with a 100% chance. If the target ally is in the Sample Behavior Analysis state, increase Action Gauge by an additional 4% and apply 1 more Cooling stack.\nWhen a new sample behavior analysis is assigned, the sample behavior analysis that has already been assigned will be canceled."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★\nIncrease until Action Gauge increases",
          "recLevel": "Lv.4｜Lv.8｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆\nIncrease CT shortening",
          "recLevel": "Lv.6｜Lv.8｜Lv.10"
        }
      ],
      "curio": {
        "name": "Silver Candy Case",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/144511_b8apr.webp",
        "rank": "B (properly strengthened)",
        "effect": "At the start of your turn, give yourself 2 cooling stacks.\nWhen used from evil to evil, own Toughness Damage increases by 1.\nIf an ally breaks the enemy's Toughness, activates the magic bullet archer on the enemy with the lowest current HP.\nThe effect after the enemy's Toughness break occurs only once every 3 turns."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Speed",
          "effect": "Increases speed by 5."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        },
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        }
      ],
      "profile": {
        "cv": "Natsumi Fujiwara",
        "affiliation": "Lampadis",
        "birthday": "May 5th",
        "height": "170cm",
        "origin": "unknown",
        "obtain": "Gacha (constant)",
        "bio": "A private investigator who studies psychology and criminology. Due to his sociopathic tendencies, he lacks the ability to empathize, and tries to understand people by studying and analyzing them."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "gwen",
    "name": "Gwen",
    "title": "Lambadis · impact damage",
    "rarity": "SSR",
    "element": "Star",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/205936_ywjad.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.2",
    "summary": "SSR Star Striker (impact damage). Gwen's ATK increases by 15%. At the start of battle, give yourself standby status for 1 turn. When an ally other than yourself attacks, if you are on standby, apply one electric shock (cannot be removed) to yourself. If an ally's attack is a Special Skill and you are on scene standby, ",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 21573,
      "spd": 100,
      "atk": 4395,
      "def": 1600,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Stakeout",
        "nameJp": "張り込み",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/184234_ci2so.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Gwen's ATK increases by 15%.\nAt the start of battle, give yourself standby status for 1 turn.\nWhen an ally other than yourself attacks, if you are on standby, apply one electric shock (cannot be removed) to yourself.\nIf an ally's attack is a Special Skill and you are on scene standby, apply one more electric shock (cannot be removed).\nAfter an ally attacks, if you have 5 or more stacks of Electric Shock (cannot be removed), a light that reveals the truth to the enemy! After activating , consume 5 stacks of Electric Shock (cannot be removed).\nThe additional activation effect prioritizes attacking the last enemy you attacked.\nAt the start of the turn of an ally or enemy other than yourself, if you are not in standby mode, increase your Action Gauge by 4% in proportion to the number of your Jump stacks.",
        "novaBurst": ""
      },
      {
        "name": "The Truth Behind the Whip",
        "nameJp": "鞭先の真実",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/184242_nqi57.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attack enemies hiding the truth with a hard whip.\nGive yourself 1 Jump stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "The Light That Reveals the Truth!",
        "nameJp": "真実を暴く光！",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/184249_fwny8.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 70%",
        "exactDescription": "Attack an enemy identified by a suspect with a portable truth inducer.\nIncrease own Action Gauge by 10%.\nIf this skill is additionally activated, your damage will increase by 10% when attacking.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1.\nGives 2 electric shocks (cannot be removed) to yourself."
      },
      {
        "name": "You Are the Culprit!",
        "nameJp": "犯人はあなただ！",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/184256_zef21.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Gwen, who succeeded in her deduction, attacks the enemy identified as the most likely suspect with the tip of her whip.\nWhen attacking, inflicts 2 electric shocks (cannot be removed) on yourself.\nAfter attacking, give yourself standby status for 3 turns.\nFurthermore, the light that reveals the truth to the enemy! Activate.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-80444335",
      "arcana-79517756",
      "arcana-79517759",
      "arcana-79517774"
    ],
    "staticData": {
      "nameJp": "グウェン",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-1533-20251112031704.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2025/03/124449_sw1v4.webp",
      "pvpTier": "SS",
      "journeyStats": {
        "power": 180,
        "vitality": 140,
        "endurance": 20,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "At the start of battle, grants self standby for 1 turn.\nWhen an ally other than yourself attacks, if you are on standby, apply one electric shock (cannot be canceled) to yourself.\nIf an ally's attack is a Special Skill and you are on standby, apply one more electric shock (cannot be removed).\nAfter an ally attacks, if you have 5 or more stacks of electric shock (cannot be removed), a light that reveals the truth to the enemy! After activating, consume 5 stacks of Electric Shock (cannot be removed).\nThe additional activation effect prioritizes attacking the last enemy you attacked.\nAt the start of the turn of an ally or enemy other than yourself, if you are not on standby, increase your Action Gauge by 2% in proportion to the number of your jump stacks."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Gwen's ATK increases by 5%.\nAt the start of battle, give yourself standby status for 1 turn.\nWhen an ally other than yourself attacks, if you are on standby, apply one electric shock (cannot be canceled) to yourself.\nIf an ally's attack is a Special Skill and you are on standby, apply one more electric shock (cannot be removed).\nAfter an ally attacks, if you have 5 or more stacks of electric shock (cannot be removed), a light that reveals the truth to the enemy! After activating, consume 5 stacks of Electric Shock (cannot be removed).\nThe additional activation effect prioritizes attacking the last enemy you attacked.\nAt the start of the turn of an ally or enemy other than yourself, if you are not on standby, increase your Action Gauge by 2% in proportion to the number of your jump stacks."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Gwen's ATK increases by 10%.\nAt the start of battle, give yourself standby status for 1 turn.\nWhen an ally other than yourself attacks, if you are on standby, apply one electric shock (cannot be canceled) to yourself.\nIf an ally's attack is a Special Skill and you are on standby, apply one more electric shock (cannot be removed).\nAfter an ally attacks, if you have 5 or more stacks of electric shock (cannot be removed), a light that reveals the truth to the enemy! After activating, consume 5 stacks of Electric Shock (cannot be removed).\nThe additional activation effect prioritizes attacking the last enemy you attacked.\nAt the start of the turn of an ally or enemy other than yourself, if you are not on standby, increase your Action Gauge by 3% in proportion to the number of your jump stacks."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Gwen's ATK increases by 15%.\nAt the start of battle, give yourself standby status for 1 turn.\nWhen an ally other than yourself attacks, if you are on standby, apply one electric shock (cannot be canceled) to yourself.\nIf an ally's attack is a Special Skill and you are on standby, apply one more electric shock (cannot be removed).\nAfter an ally attacks, if you have 5 or more stacks of electric shock (cannot be removed), a light that reveals the truth to the enemy! After activating, consume 5 stacks of Electric Shock (cannot be removed).\nThe additional activation effect prioritizes attacking the last enemy you attacked.\nAt the start of the turn of an ally or enemy other than yourself, if you are not on standby, increase your Action Gauge by 4% in proportion to the number of your jump stacks."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★\nIt's the main firepower, so increase it as much as possible",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆\nIncrease CT shortening",
          "recLevel": "Lv.6｜Lv.10"
        }
      ],
      "curio": {
        "name": "Portable Truth Inducer",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/05/124625_1x6kt.webp",
        "rank": "B (properly strengthened)",
        "effect": "When attacking, inflicts 1 electric shock (cannot be canceled) on yourself.\nLight that reveals the truth! If you activate it additionally, you are the culprit! Reduces cooldown time by 1 turn.\nThe cooldown time reduction effect only occurs once per turn."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        },
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        }
      ],
      "profile": {
        "cv": "Manaka Wakuno",
        "affiliation": "Lambadis",
        "birthday": "May 25th",
        "height": "158cm",
        "origin": "NOA",
        "obtain": "Gacha",
        "bio": "President and investigator of Lampadis Investigation Consulting, NOA's private investigation company. He dreams of being a genius deducer who can see through everything at a glance, but his true value lies in his tenacity and guts to not let go until the end once he gets the hang of it."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "maid-lydia",
    "name": "Maid Lydia",
    "title": "Western Recapture Force · elemental damage",
    "rarity": "SSR",
    "element": "Moon",
    "role": "Caster",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/06/154756_yiks1.webp",
    "overallTier": "S",
    "rerollTier": "SS",
    "score": "9.2",
    "summary": "SSR Moon Caster (elemental damage). Lydia's ATK increases by 15%. At the start of a battle, Lydia gives the ally with the highest ATK (excluding herself) a shift of responsibility (which cannot be removed). At the start of an ally's turn in the Responsibility Transfer (cannot be removed) state, give Lydia 2 reminders t",
    "recommendedDupes": "★★☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 21080,
      "spd": 90,
      "atk": 4336,
      "def": 1594,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "A Maid Who Does What She Does When She Has to Do It.",
        "nameJp": "やるときはやるメイド",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/152754_1f78t.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Lydia's ATK increases by 15%.\nAt the start of a battle, Lydia gives the ally with the highest ATK (excluding herself) a shift of responsibility (which cannot be removed).\nAt the start of an ally's turn in the Responsibility Transfer (cannot be removed) state, give Lydia 2 reminders to leave work (cannot be removed), and after that ally attacks on their turn, give Lydia up to 5 reminders to leave work (cannot be removed) for the number of targets attacked.\nAfter an ally with Responsibility Transfer (cannot be removed) attacks on their turn, if Lydia's Reminder to Leave (cannot be removed) stacks 5 or more, increase Lydia's Action Gauge by 30%.\nAction Gauge increase effect only occurs once per turn.\nWhen Lydia attacks, the damage dealt increases by 4% for each cooling stack on her own, and if there are 5 or more stacks of Reminder to Leave (cannot be removed), the damage dealt increases by an additional 30%.\nAfter Lydia's attack, if there are 5 or more stacks of reminders to leave work (cannot be removed), reduce reminders to leave work (cannot be removed) by 5.",
        "novaBurst": ""
      },
      {
        "name": "Don't Come",
        "nameJp": "来ないでってば",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/152805_5ufqz.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 40%",
        "exactDescription": "Lydia attacks a shameless enemy with a duster.\nGive yourself 1 Cooling stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1 and damage increases by 10%.\nAfter attacking, inflicts 2 Build-up Shame (cannot be removed) on yourself."
      },
      {
        "name": "When Will It End?",
        "nameJp": "いつ終わるんですか！",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/152813_ua92j.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 70%",
        "exactDescription": "Lydia, angry at the unfinished business, attacks the enemy with the power of Kuu Kuu.\nGive yourself 2 Increasing Shame (cannot be removed).\nWhen I use this skill on my turn, if I have 5 or more stacks of reminder to leave work (cannot be removed), when does it end? Instead of I can't stand it anymore! use.\n[I can't stand it anymore! ]\nLydia, angry at her unfinished business, attacks all enemies with the power of Kuu Kuu.\nWhen attacking, damage dealt increases by 100%, and after attacking, gives 4 Embarrassing Shame (cannot be removed) to self.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "It's Not My Fault, Right?",
        "nameJp": "私のせいじゃありませんよ？",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/152819_l1gdw.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Lydia blames her mistakes on the enemy and attacks them.\nGive yourself 3 Increasing Shame (cannot be removed).\nWhen you use this skill on your own turn, if you have 5 or more stacks of reminder to leave work (cannot be removed), it's not my fault, right? I'm so sorry on behalf of you! use.\n[I'm so sorry! ]\nLydia blames her mistakes on all the enemies and attacks them.\nWhen attacking, the damage you deal increases by 100%, and after attacking, give yourself 6 Embarrassing Shame (cannot be removed).",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517759",
      "arcana-79517774",
      "arcana-79517783",
      "arcana-79534220"
    ],
    "staticData": {
      "nameJp": "メイドリディア",
      "pool": "Standard",
      "attackType": "elemental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-57169-20251112031841.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/10/195259_5zmpw.webp",
      "pvpTier": "S",
      "journeyStats": {
        "power": 180,
        "vitality": 140,
        "endurance": 20,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "At the start of battle, Lydia grants a transfer of responsibility (cannot be removed) to the ally with the highest ATK, excluding herself.\nAt the start of an ally's turn in the Transfer Responsibility (cannot be removed) state, give Lydia 2 reminders to leave work (cannot be removed), and after that ally attacks on its own turn, give up to 5 reminders to leave work (cannot be removed) to Lydia for the number of targets attacked.\nAfter an ally in the Transfer Responsibility (cannot be removed) attack on their own turn, if Lydia's Reminder to Leave (cannot be removed) stacks 5 or more, increases Lydia's Action Gauge by 20%.\nAction Gauge increase effect only occurs once per turn.\nWhen Lydia attacks, the damage dealt increases by 4% for each cooling stack on her own, and if there are 5 or more stacks of Reminder to Leave (cannot be removed), the damage dealt increases by an additional 30%.\nAfter Lydia's attack, if there are 5 or more stacks of reminders to leave work (cannot be canceled), reduce reminders to leave by 5 (cannot be canceled)."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Lydia's ATK increases by 5%.\nAt the start of battle, Lydia grants a transfer of responsibility (cannot be removed) to the ally with the highest ATK, excluding herself.\nAt the start of an ally's turn in the Transfer Responsibility (cannot be removed) state, give Lydia 2 reminders to leave work (cannot be removed), and after that ally attacks on its own turn, give up to 5 reminders to leave work (cannot be removed) to Lydia for the number of targets attacked.\nAfter an ally in the Transfer Responsibility (cannot be removed) attack on their own turn, if Lydia's Reminder to Leave (cannot be removed) stacks 5 or more, increases Lydia's Action Gauge by 20%.\nAction Gauge increase effect only occurs once per turn.\nWhen Lydia attacks, the damage dealt increases by 4% for each cooling stack on her own, and if there are 5 or more stacks of Reminder to Leave (cannot be removed), the damage dealt increases by an additional 30%.\nAfter Lydia's attack, if there are 5 or more stacks of reminders to leave work (cannot be canceled), reduce reminders to leave by 5 (cannot be canceled)."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Lydia's ATK increases by 10%.\nAt the start of battle, Lydia grants a transfer of responsibility (cannot be removed) to the ally with the highest ATK, excluding herself.\nAt the start of an ally's turn in the Transfer Responsibility (cannot be removed) state, give Lydia 2 reminders to leave work (cannot be removed), and after that ally attacks on its own turn, give up to 5 reminders to leave work (cannot be removed) to Lydia for the number of targets attacked.\nAfter an ally in the Transfer Responsibility (unremovable) state attacks on your turn, if Lydia's Reminder to Leave (unremovable) has 5 or more stacks, increase Lydia's Action Gauge by 25%.\nAction Gauge increase effect only occurs once per turn.\nWhen Lydia attacks, the damage dealt increases by 4% for each cooling stack on her own, and if there are 5 or more stacks of Reminder to Leave (cannot be removed), the damage dealt increases by an additional 30%.\nAfter Lydia's attack, if there are 5 or more stacks of reminders to leave work (cannot be canceled), reduce reminders to leave by 5 (cannot be canceled)."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Lydia's ATK increases by 15%.\nAt the start of battle, Lydia grants a transfer of responsibility (cannot be removed) to the ally with the highest ATK, excluding herself.\nAt the start of an ally's turn in the Transfer Responsibility (cannot be removed) state, give Lydia 2 reminders to leave work (cannot be removed), and after that ally attacks on its own turn, give up to 5 reminders to leave work (cannot be removed) to Lydia for the number of targets attacked.\nAfter an ally in the Transfer Responsibility (cannot be removed) attack on their own turn, if Lydia's Reminder to Leave (cannot be removed) stacks 5 or more, increases Lydia's Action Gauge by 30%.\nAction Gauge increase effect only occurs once per turn.\nWhen Lydia attacks, the damage dealt increases by 4% for each cooling stack on her own, and if there are 5 or more stacks of Reminder to Leave (cannot be removed), the damage dealt increases by an additional 30%.\nAfter Lydia's attack, if there are 5 or more stacks of reminders to leave work (cannot be canceled), reduce reminders to leave by 5 (cannot be canceled)."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★☆\nAs far as you can go",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★★\nIncrease CT shortening",
          "recLevel": "Lv.4｜Lv.8｜Lv.10"
        }
      ],
      "curio": {
        "name": "Obedience Choker",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/10/124525_4s1ew.webp",
        "rank": "A (easy to clear)",
        "effect": "At the start of the turn, give 3 reminders to leave work (cannot be canceled).\nWhen attacking, if you have 5 or more stacks of reminders to leave work (cannot be removed), don't come to the enemy with the highest maximum HP after the attack! Activates and restores all skill cooldowns for one turn."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Insight",
          "effect": "Crit rate increases by 5%."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        },
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        }
      ],
      "profile": {
        "cv": "Saya Aizawa",
        "affiliation": "Western Recapture Force",
        "birthday": "June 18th",
        "height": "156cm",
        "origin": "Western disaster area",
        "obtain": "Gacha",
        "bio": "Vice-captain of the Western Recapture Corps. She is always assisting Ceres next to her. She always has a bright smile on her face, but behind that smile lies a darkness."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "maid-ceres",
    "name": "Maid Ceres",
    "title": "Western Recapture Force · Slash Damage",
    "rarity": "SSR",
    "element": "Sun",
    "role": "Supporter",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/10/144125_id9hj.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.6",
    "summary": "SSR Sun Supporter (Slash Damage). Ceres's maximum HP increases by 15%. After Ceres uses a skill on her turn, or at the start of an ally's turn other than herself, she will give herself 1 stack of Dust Capture (cannot be removed). At the start of an ally's turn other than yourself, if that ally has a weakening effect, g",
    "recommendedDupes": "★☆☆ (Limit Break +1 (LB1))",
    "baseStats": {
      "hp": 24753,
      "spd": 101,
      "atk": 3352,
      "def": 1727,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "What Is Important Is the Heart of Service",
        "nameJp": "大事なのはご奉仕の心",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/10/111039_gfvnj.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Ceres's maximum HP increases by 15%.\nAfter Ceres uses a skill on her turn, or at the start of an ally's turn other than herself, she will give herself 1 stack of Dust Capture (cannot be removed).\nAt the start of an ally's turn other than yourself, if that ally has a weakening effect, give yourself 1 Ignition stack.\nAfter receiving a general attack, increase your Action Gauge by 30% and grant 1 Ignition stack.\nWhen using a skill on your turn, if Dust Trap (cannot be removed) is 5 or more stacks, activates hospitality cleaning and reduces Dust Trap (cannot be removed) by 5 stacks.\nThe additional activation effect does not grant dust capture (cannot be removed) or ignition stack to itself.",
        "novaBurst": ""
      },
      {
        "name": "Dust Removal",
        "nameJp": "ほこり除去",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/10/111057_1phw9.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 40%",
        "exactDescription": "Ceres attacks the enemy with a force that leaves no trace of dust behind.\nGive yourself one Ignition stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Hospitality Cleaning",
        "nameJp": "おもてなしのお掃除",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/10/111105_3xjes.webp",
        "target": "Active Skill | All Allies",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "HP3.5%",
        "exactDescription": "Ceres supports all allies with perfect cleaning.\nRecovers the HP of all allies, gives them a Refreshing Feeling (cannot be removed) for 1 turn, and gives themselves 1 Ignition stack.\nIf this skill is additionally activated during your turn, after using the skill, remove one weakening effect from all allies.\nIf this skill is additionally activated during your turn, and your Ignition is at its maximum stack, when you use the skill, your recovery amount will further increase by 30% and all Ignition stacks will be erased.\nThe amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": "After using a skill, recover 1 Toughness."
      },
      {
        "name": "Maid's Recommended Menu",
        "nameJp": "メイドのおすすめメニュー",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/10/111114_pijdl.webp",
        "target": "Active Skill | All Allies",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "HP12.5%",
        "exactDescription": "Ceres assists all allies with acrobatic servings.\nRecovers the HP of all allies, removes one debilitating effect, and grants ATK up for 2 turns.\nGive yourself 1 Dust Trap (cannot be removed) and 1 Ignition Stack.\nThe amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": "After using the skill, restores own Toughness by 1 and extends the duration of ATK up by 1 turn."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517792",
      "arcana-79534223",
      "arcana-79606361",
      "arcana-79808948"
    ],
    "staticData": {
      "nameJp": "メイドセレス",
      "pool": "Standard",
      "attackType": "Slash Damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-18986-20251112031910.webp",
      "illustUrl": "https://appmedia.jp/wp-content/uploads/2026/10/111227_60ydj.webp",
      "pvpTier": "S",
      "journeyStats": {
        "power": 100,
        "vitality": 180,
        "endurance": 150,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Speed Set (SPD +25%)",
          "Life Set (Max HP +20%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Immunity Set (1T Debuff Immunity)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "Speed / HP (%) / Effect Hit / Effect RES"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "Max HP +10% and Speed +6. At the start of battle, grants a Barrier equal to 15% of Max HP to all allies for 2 turns."
      },
      "dupeRating": "★☆☆",
      "limitBreaks": [
        {
          "stage": "Base (LB0)",
          "effect": "After Ceres uses a skill on her turn, or at the start of an ally's turn other than herself, she will give herself 1 stack of Dust Trap (cannot be removed).\nAt the start of an ally's turn other than yourself, if that ally has a weakening effect, give yourself 1 ignition stack.\nAfter receiving a general attack, increase your Action Gauge by 18% and add 1 ignition stack.\nWhen using a skill on your turn, if Dust Trap (cannot be removed) is 5 or more stacks, activates hospitality cleaning and reduces Dust Trap (cannot be removed) by 5 stacks.\nThe additional activation effect does not grant dust capture (cannot be removed) or ignition stack to itself."
        },
        {
          "stage": "Limit Break +1 (LB1)",
          "effect": "Ceres's maximum HP increases by 5%.\nAfter Ceres uses a skill on her turn, or at the start of an ally's turn other than herself, she will give herself 1 stack of Dust Trap (cannot be removed).\nAt the start of an ally's turn other than yourself, if that ally has a weakening effect, give yourself 1 ignition stack.\nAfter receiving a general attack, increase your Action Gauge by 18% and add 1 ignition stack.\nWhen using a skill on your turn, if Dust Trap (cannot be removed) is 5 or more stacks, activates hospitality cleaning and reduces Dust Trap (cannot be removed) by 5 stacks.\nThe additional activation effect does not grant dust capture (cannot be removed) or ignition stack to itself."
        },
        {
          "stage": "Limit Break +2 (LB2)",
          "effect": "Ceres's maximum HP increases by 10%.\nAfter Ceres uses a skill on her turn, or at the start of an ally's turn other than herself, she will give herself 1 stack of Dust Trap (cannot be removed).\nAt the start of an ally's turn other than yourself, if that ally has a weakening effect, give yourself 1 ignition stack.\nAfter receiving a general attack, increase your Action Gauge by 24% and grant 1 ignition stack.\nWhen using a skill on your turn, if Dust Trap (cannot be removed) is 5 or more stacks, activates hospitality cleaning and reduces Dust Trap (cannot be removed) by 5 stacks.\nThe additional activation effect does not grant dust capture (cannot be removed) or ignition stack to itself."
        },
        {
          "stage": "Limit Break +3 (LB3)",
          "effect": "Ceres's maximum HP increases by 15%.\nAfter Ceres uses a skill on her turn, or at the start of an ally's turn other than herself, she will give herself 1 stack of Dust Trap (cannot be removed).\nAt the start of an ally's turn other than yourself, if that ally has a weakening effect, give yourself 1 ignition stack.\nAfter receiving a general attack, increase your Action Gauge by 30% and add 1 ignition stack.\nWhen using a skill on your turn, if Dust Trap (cannot be removed) is 5 or more stacks, activates hospitality cleaning and reduces Dust Trap (cannot be removed) by 5 stacks.\nThe additional activation effect does not grant dust capture (cannot be removed) or ignition stack to itself."
        }
      ],
      "skillPriority": [
        {
          "skillType": "Basic Skill",
          "priority": "★☆☆\nAs far as you can go",
          "recLevel": "Lv.3｜Lv.10"
        },
        {
          "skillType": "Special Skill",
          "priority": "★★★\nIncrease CT shortening",
          "recLevel": "Lv.6｜Lv.10"
        },
        {
          "skillType": "Ultimate Skill",
          "priority": "★★☆\nIncrease CT shortening",
          "recLevel": "Lv.6｜Lv.10"
        }
      ],
      "curio": {
        "name": "Serving White Brim",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/10/122221_nkzqv.webp",
        "rank": "B (properly strengthened)",
        "effect": "At the start of your turn, give yourself 1 Dust Trap (cannot be removed).\nAfter using Hospitality Cleaning, there is a 100% chance to apply one poison to all enemies for 2 turns.\nPoisoning damage increases in proportion to your maximum HP."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Sense of Defense",
          "effect": "Defense power increases by 5%."
        },
        {
          "name": "Speed Prowess",
          "effect": "Speed increases by 2."
        }
      ],
      "gifts": [
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        },
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        }
      ],
      "profile": {
        "cv": "Yuko Natsuyoshi",
        "affiliation": "Western Recapture Force",
        "birthday": "January 1st",
        "height": "158cm",
        "origin": "Western disaster area",
        "obtain": "Gacha",
        "bio": "He is the captain of the Western Recapture Corps and a hero for the people of the West who dream of reclaiming the West. He pursues strength and never allows himself to be seen as weak."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "vesta",
    "name": "Vesta",
    "title": "Western Recapture Force · impact damage",
    "rarity": "SR",
    "element": "Star",
    "role": "Defender",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/WEST_LANCER_icon.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.6",
    "summary": "SR Star Defender (impact damage). Vesta's maximum HP increases by 15%. After Vesta is attacked, if her Jump stack is at maximum, she will create a barrier for 2 turns and erase all Jump stacks. After receiving a general attack, 40% activates \"Repel\" on a random enemy. The additional activation effect only occurs once p",
    "recommendedDupes": "★★☆ (LB1 Recommended)",
    "baseStats": {
      "hp": 21500,
      "spd": 100,
      "atk": 4100,
      "def": 1620,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Faint Feelings",
        "nameJp": "かすかな感情",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_WEST_LANCER_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "HP12%",
        "exactDescription": "Vesta's maximum HP increases by 15%.\nAfter Vesta is attacked, if her Jump stack is at maximum, she will create a barrier for 2 turns and erase all Jump stacks.\nAfter receiving a general attack, 40% activates \"Repel\" on a random enemy. The additional activation effect only occurs once per turn, and it occurs even when Toughness is broken.",
        "novaBurst": ""
      },
      {
        "name": "Unwavering Spear",
        "nameJp": "揺るぎなき槍",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_WEST_LANCER_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 32%",
        "exactDescription": "Charges forward with a spear and pierces the enemy. Give yourself 1 Jump stack. The amount of damage increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1, and\nAfter attacking, cause 100% {ATK Down} to the enemy for 1 turn."
      },
      {
        "name": "Repel",
        "nameJp": "撃退",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_WEST_LANCER_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 45%",
        "exactDescription": "Deploy a shield to block the enemy's vision, then launch a surprise attack. Inflicts 100% ATK down on the enemy for 2 turns.\nIncreases own Action Gauge by 30%, creates a Barrier for 2 turns on the ally with the lowest current HP percentage, then grants one Jump stack to itself. Damage and barrier increase in proportion to own maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Unstoppable Assault",
        "nameJp": "止まらぬ突撃",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_WEST_LANCER_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 55%",
        "exactDescription": "After filling a lance with the power of emptiness, it falls at full speed and attacks the enemy.\nIncreases defense power for all allies for 2 turns, creates a barrier for yourself for 2 turns, and grants 1 Jump stack to yourself.\nIf your HP is less than 50%, your barrier value will increase by 50%. The damage increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Faint Feelings",
        "nameJp": "かすかな感情",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_WEST_LANCER_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Vesta's maximum HP increases by 12%.",
        "novaBurst": ""
      },
      {
        "name": "Unwavering Spear",
        "nameJp": "揺るぎなき槍",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_WEST_LANCER_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 32%",
        "exactDescription": "Charges forward with a spear and pierces the enemy. Give yourself 1 Jump stack. The amount of damage increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Repel",
        "nameJp": "撃退",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_WEST_LANCER_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 45%",
        "exactDescription": "Deploys a shield to block the enemy's vision, then launches a surprise attack. Inflicts 100% ATK down on the enemy for 1 turn. The damage increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Unstoppable Assault",
        "nameJp": "止まらぬ突撃",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_WEST_LANCER_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 55%",
        "exactDescription": "After filling a lance with the power of emptiness, it falls at full speed and attacks the enemy. Activates defense power up for 2 turns on self. The damage increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Toughness and fixed damage temporarily increase by 1, and the number of turns your defense power increases by 1 turn increases."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517786",
      "arcana-79893874",
      "arcana-79517897"
    ],
    "staticData": {
      "nameJp": "ベスタ",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-9372-20251112031758.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_WEST_LANCER_img.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 10,
        "vitality": 180,
        "endurance": 150,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Life Set (Max HP +20%)",
          "Protection Set (DEF +20% / Guard Rate +10%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Immunity Set (1T Debuff Immunity)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "HP (%) / DEF (%) / Speed / Effect RES"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "Max HP +10% and Speed +6. At the start of battle, grants a Barrier equal to 15% of Max HP to all allies for 2 turns."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [],
      "skillPriority": [],
      "curio": {
        "name": "My Precious Diary",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_PRECIOUS_DIARY.webp",
        "rank": "B (properly strengthened)",
        "effect": "At the start of battle, generates a barrier for 2 turns.\nAfter being attacked by a single target, if the attacker is weakened, creates a barrier for one turn and causes chain damage to the attacker proportional to the attacker's maximum HP at 100%.\nBarrier increases in proportion to own maximum HP.\nThe effect after being attacked only occurs once per turn."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Sense of Defense",
          "effect": "Defense power increases by 5%."
        },
        {
          "name": "Skill in Life",
          "effect": "Maximum HP increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        },
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        }
      ],
      "profile": {
        "cv": "Yui Tsukada",
        "affiliation": "Western Recapture Force",
        "birthday": "March 29th",
        "height": "162cm",
        "origin": "Western disaster area",
        "obtain": "Gacha (constant)",
        "bio": "Captain of the Western Recapture Corps. He has become a role model among Western warriors because he accomplishes his mission without complaining under any circumstances."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "anna",
    "name": "Anna",
    "title": "NOA Town Guard · impact damage",
    "rarity": "SR",
    "element": "Sun",
    "role": "Defender",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/OFFICER_POLICE_icon.webp",
    "overallTier": "S",
    "rerollTier": "S",
    "score": "9.2",
    "summary": "SR Sun Defender (impact damage). Anna's maximum HP increases by 15%. After Anna uses \"Stop Resistance!\", increases the Action Gauge of a random ally other than herself by 15%. After receiving a single attack, give yourself 1 Ignition stack. At the start of your turn, if your Ignition stack is at its maximum, erase all ",
    "recommendedDupes": "★★☆ (LB1 Recommended)",
    "baseStats": {
      "hp": 21500,
      "spd": 100,
      "atk": 4100,
      "def": 1620,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "There's a Delicious Smell Coming From Somewhere",
        "nameJp": "どこからか美味しい匂いが",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_OFFICER_POLICE_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Anna's maximum HP increases by 15%.\nAfter Anna uses \"Stop Resistance!\", increases the Action Gauge of a random ally other than herself by 15%.\nAfter receiving a single attack, give yourself 1 Ignition stack.\nAt the start of your turn, if your Ignition stack is at its maximum, erase all Ignition stacks and generate an enhanced counterattack after attacking.",
        "novaBurst": ""
      },
      {
        "name": "Stop Resisting!",
        "nameJp": "抵抗を止めなさい！",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_OFFICER_POLICE_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Punish the enemy by swinging the three-dan stick. Give yourself 1 Ignition stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Start by Eating!",
        "nameJp": "食べてから始めます！",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_OFFICER_POLICE_SPECIAL_icon.webp",
        "target": "Active Skill | Self",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "HP18%",
        "exactDescription": "Anna recharges her energy by eating donuts from her favorite street baker.\nRecovers own HP and generates speed up and barrier for 3 turns. The amount of recovery and barrier increase in proportion to your maximum HP.",
        "novaBurst": "After using the skill, recovers 1 Toughness and takes an additional turn."
      },
      {
        "name": "Everyone Is Arrested!",
        "nameJp": "みんな逮捕だ！",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_OFFICER_POLICE_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Anna blows a whistle and summons an arrest team to attack the enemy.\nIncreases defense power for all allies for 2 turns and decreases ATK for 2 turns on enemies at 100%, then grants 3 Ignition stacks to yourself.\nAfter attacking, if your HP is below 50%, recover your HP. The amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "There's a Delicious Smell Coming From Somewhere",
        "nameJp": "どこからか美味しい匂いが",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_OFFICER_POLICE_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Anna's maximum HP increases by 12%.",
        "novaBurst": ""
      },
      {
        "name": "Stop Resisting!",
        "nameJp": "抵抗を止めなさい！",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_OFFICER_POLICE_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Punish the enemy by swinging the three-dan stick. Give yourself 1 Ignition stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Start by Eating!",
        "nameJp": "食べてから始めます！",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_OFFICER_POLICE_SPECIAL_icon.webp",
        "target": "Active Skill | Self",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "HP18%",
        "exactDescription": "Anna eats donuts from her favorite Street Bakers to recharge her batteries. Recovers own HP and increases speed for 2 turns. The amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": "After using the skill, restores own Toughness by 1 and increases own Action Gauge by 30%."
      },
      {
        "name": "Everyone Is Arrested!",
        "nameJp": "みんな逮捕だ！",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_OFFICER_POLICE_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Anna blows the whistle and summons the arrest team to charge the enemy. Inflicts 100% ATK down on the enemy for 2 turns. After attacking, if your HP is below 50%, recover your HP. The amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517789",
      "arcana-79517900",
      "arcana-79517747",
      "arcana-79517777"
    ],
    "staticData": {
      "nameJp": "アンナ",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-9372-20251112031758.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_OFFICER_POLICE_img.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 10,
        "vitality": 180,
        "endurance": 150,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Life Set (Max HP +20%)",
          "Protection Set (DEF +20% / Guard Rate +10%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Immunity Set (1T Debuff Immunity)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "HP (%) / DEF (%) / Speed / Effect RES"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "Max HP +10% and Speed +6. At the start of battle, grants a Barrier equal to 15% of Max HP to all allies for 2 turns."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [],
      "skillPriority": [],
      "curio": {
        "name": "Town Guard Style Handcuffs",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_TOWNGUARD_HANDCUFFS.webp",
        "rank": "B (properly strengthened)",
        "effect": "After receiving an attack, if you are in a strengthened state, tell the enemy to stop resisting! Activate.\nThis effect only occurs once per turn, and prioritizes attacking the enemy that attacked you last.\nAfter attacking, there is a 100% chance to inflict chain damage on the enemy proportional to your maximum HP."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Sense of Defense",
          "effect": "Defense power increases by 5%."
        },
        {
          "name": "Skill in Life",
          "effect": "Maximum HP increases by 2%."
        }
      ],
      "gifts": [
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        },
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        }
      ],
      "profile": {
        "cv": "Kokoro Hanasaki",
        "affiliation": "NOA Town Guard",
        "birthday": "September 7th",
        "height": "157cm",
        "origin": "NOA",
        "obtain": "Gacha (constant)",
        "bio": "Town Guard protects NOA's public order. Although he has a friendly personality and laughs a lot and talks to everyone, he always takes his job as a town guard seriously."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "marcille",
    "name": "Marcille",
    "title": "Petra Union · impact damage",
    "rarity": "SR",
    "element": "Sun",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/CONSTRUCT_WRENCH_icon.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.6",
    "summary": "SR Sun Assassin (impact damage). Marcille's Crit Rate increases by 15%. When Marcille starts a battle or when an ally breaks an enemy's Toughness, she will generate two Broken Nuts on herself. At the start of the turn, if your own Broken Nuts are at the maximum stack, generate Hexa Nuts on yourself and release all Brok",
    "recommendedDupes": "★★☆ (LB1 Recommended)",
    "baseStats": {
      "hp": 21500,
      "spd": 100,
      "atk": 4100,
      "def": 1620,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Hammer and Anvil",
        "nameJp": "槌と金床",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_CONSTRUCT_WRENCH_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Marcille's Crit Rate increases by 15%.\nWhen Marcille starts a battle or when an ally breaks an enemy's Toughness, she will generate two Broken Nuts on herself.\nAt the start of the turn, if your own Broken Nuts are at the maximum stack, generate Hexa Nuts on yourself and release all Broken Nuts.\nWhen attacking, Crit DMG increases by 3% in proportion to the Ignition stacks attached to yourself, up to a maximum of 5.",
        "novaBurst": ""
      },
      {
        "name": "Nut Turning",
        "nameJp": "ナット回し",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_CONSTRUCT_WRENCH_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Swing the wrench around with your whole body. Give yourself 1 Ignition stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Nailing",
        "nameJp": "釘打ち",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_CONSTRUCT_WRENCH_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Attack with a modified nail gun.\nInflicts 100% Burn on the enemy for 2 turns, and inflicts Speed ​​Up on yourself for 2 turns.\nIf a Critical Hit occurs, increase own Action Gauge by 30% and generate a Broken Nut once.",
        "novaBurst": "When attacking, your Fixed Toughness Damage is temporarily increased by 1, and after the attack, the cooldown of Nail Driving is reduced by 2 turns."
      },
      {
        "name": "Screw Destruction",
        "nameJp": "ネジ破壊",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_CONSTRUCT_WRENCH_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Activate the wrench at maximum power and destroy all obstacles in your way.\nIncreases ATK for 2 turns on self and decreases recovery amount for 2 turns on enemy at 100%.\nIf a Critical Hit occurs, increase own Action Gauge by 30% and generate a Broken Nut once.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Hammer and Anvil",
        "nameJp": "槌と金床",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_CONSTRUCT_WRENCH_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Marcille's Crit Rate increases by 12%.",
        "novaBurst": ""
      },
      {
        "name": "Nut Turning",
        "nameJp": "ナット回し",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_CONSTRUCT_WRENCH_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attacks the enemy by swinging a wrench around the body. Give yourself 1 Ignition stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Nailing",
        "nameJp": "釘打ち",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_CONSTRUCT_WRENCH_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Attack enemies with a modified nail gun. Inflicts 100% Burn on the enemy for 1 turn. If a Critical Hit occurs, increase speed for 1 turn.",
        "novaBurst": "When attacking, temporarily increases own Fixed Toughness Damage by 1, and after attacking, activates 100% recovery down for 1 turn on enemy."
      },
      {
        "name": "Screw Destruction",
        "nameJp": "ネジ破壊",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_CONSTRUCT_WRENCH_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Activate the wrench at maximum power and destroy all obstacles in your way. Increases ATK for 2 turns. If a Critical Hit occurs, inflict {recovery down} on the enemy for 1 turn at 100%.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517840",
      "arcana-79517756",
      "arcana-79517759",
      "arcana-79517774"
    ],
    "staticData": {
      "nameJp": "マルシル",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-23566-20251112031814.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_CONSTRUCT_WRENCH_img.webp",
      "pvpTier": "B",
      "journeyStats": {
        "power": 180,
        "vitality": 20,
        "endurance": 20,
        "focus": 190,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [],
      "skillPriority": [],
      "curio": {
        "name": "K.I. Excellent Employee Trophy",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_EMPLOYEE_TROPHY.webp",
        "rank": "B (properly strengthened)",
        "effect": "When attacking, Crit Rate increases by 50%.\nWhen using screw destruction, own Fixed Toughness Damage increases by 3.\nAfter Toughness breaks, the enemy will be nailed.\nToughness Give priority to attacking enemies that are not in break state."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Insight",
          "effect": "Crit rate increases by 5%."
        },
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Skill of Insight",
          "effect": "Crit rate increases by 3%."
        }
      ],
      "gifts": [
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        },
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        }
      ],
      "profile": {
        "cv": "Nanako Ando",
        "affiliation": "Petra Union",
        "birthday": "September 19th",
        "height": "150cm",
        "origin": "Callide",
        "obtain": "Gacha (constant)",
        "bio": "Petra union leader. He works hard every day to buy his family's carrot farm."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "bella",
    "name": "Bella",
    "title": "Delivery Shop Association · elemental damage",
    "rarity": "SR",
    "element": "Moon",
    "role": "Supporter",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/LPU_POST_icon.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.6",
    "summary": "SR Moon Supporter (elemental damage). Bella's maximum HP increases by 15%. After Bella is attacked, if her Cooling is at maximum stack, increases her Action Gauge by 15%. Ultimate [A Step Towards a Dream]: Bella completes a special package delivery for an ally. Recovers the HP of all allies, causes 1 Express Delivery f",
    "recommendedDupes": "★★☆ (LB1 Recommended)",
    "baseStats": {
      "hp": 21500,
      "spd": 100,
      "atk": 4100,
      "def": 1620,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Veteran Delivery Man",
        "nameJp": "ベテラン配達員",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_LPU_POST_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Bella's maximum HP increases by 15%.\nAfter Bella is attacked, if her Cooling is at maximum stack, increases her Action Gauge by 15%.",
        "novaBurst": ""
      },
      {
        "name": "Appropriate Response",
        "nameJp": "適切な対応",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_LPU_POST_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 40%",
        "exactDescription": "Attack the enemy with the sole intention of protecting the package. Give yourself 1 Cooling stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Fast and Safe Shipping",
        "nameJp": "迅速かつ安全な配送",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_LPU_POST_SPECIAL_icon.webp",
        "target": "Active Skill | Single Ally",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "HP18%",
        "exactDescription": "Bella comes to visit with some good news. Recovers HP of ally target, removes 2 debuffs from allies, then increases own Action Gauge by 40%.\nIf the ally target has Moon Attribute, the amount of recovery will increase. The amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": "After using a skill, recover 1 Toughness."
      },
      {
        "name": "A Step Towards a Dream",
        "nameJp": "夢への一歩",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_LPU_POST_HYPER_icon.webp",
        "target": "Active Skill | All Allies",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "HP10%",
        "exactDescription": "Bella completes a special package delivery for an ally. Recovers the HP of all allies, causes 1 Express Delivery for 2 turns, and grants 3 Cooling stacks to yourself.\nIf the ally target has Moon Attribute, the amount of recovery will increase. The amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": "After using the skill, your Toughness will be restored by 1 and the effect of express delivery will be extended by 1 turn."
      },
      {
        "name": "Veteran Delivery Man",
        "nameJp": "ベテラン配達員",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_LPU_POST_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Bella's maximum HP increases by 12%.",
        "novaBurst": ""
      },
      {
        "name": "Appropriate Response",
        "nameJp": "適切な対応",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_LPU_POST_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 40%",
        "exactDescription": "Attack the enemy with the sole intention of protecting the package. Give yourself 1 Cooling stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Fast and Safe Shipping",
        "nameJp": "迅速かつ安全な配送",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_LPU_POST_SPECIAL_icon.webp",
        "target": "Active Skill | Single Ally",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "HP13%",
        "exactDescription": "Bella came to visit with some good news. Recovers HP of ally target and removes one ally's debuff. The amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": "After using a skill, recover 1 Toughness."
      },
      {
        "name": "A Step Towards a Dream",
        "nameJp": "夢への一歩",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_LPU_POST_HYPER_icon.webp",
        "target": "Active Skill | All Allies",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "HP13%",
        "exactDescription": "Bella completes a special package delivery for an ally. Recovers HP of all allies. If the target is in an enhanced state, generate 1 {Express Delivery} per turn. The amount of recovery increases in proportion to your maximum HP.",
        "novaBurst": "After using the skill, recovers your Toughness by 1 and temporarily increases the amount of recovery given by 15%."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517792",
      "arcana-79517888",
      "arcana-79517750",
      "arcana-79534223"
    ],
    "staticData": {
      "nameJp": "ベラ",
      "pool": "Standard",
      "attackType": "elemental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-18986-20251112031910.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_LPU_POST_img.webp",
      "pvpTier": "B",
      "journeyStats": {
        "power": 10,
        "vitality": 150,
        "endurance": 30,
        "focus": 10,
        "protection": 235
      },
      "equipment": {
        "pveSets": [
          "Speed Set (SPD +25%)",
          "Life Set (Max HP +20%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Immunity Set (1T Debuff Immunity)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "Speed / HP (%) / Effect Hit / Effect RES"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "Max HP +10% and Speed +6. At the start of battle, grants a Barrier equal to 15% of Max HP to all allies for 2 turns."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [],
      "skillPriority": [],
      "curio": {
        "name": "Delivery Man's Trumpet",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_DELIVERY_TRUMPET.webp",
        "rank": "B (properly strengthened)",
        "effect": "After using the skill, if the number of debuffs you have is 2 or less, cause 100% chain damage proportional to your maximum HP to all enemies.\nAfter being attacked, give yourself 1 cooling stack and increase your Action Gauge by 15%.\nAt the start of the turn, if your cooling is at maximum stack, there is a 100% chance to reduce the speed of the enemy in front of you for 3 turns.\nThe effect at the start of the turn ignores Effect RES and only occurs once during the battle."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Protection",
          "effect": "Effect RES increases by 10%."
        },
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Protection Skills",
          "effect": "Effect RES increases by 4%."
        }
      ],
      "gifts": [
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        },
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        }
      ],
      "profile": {
        "cv": "Shina Shuto",
        "affiliation": "Delivery Shop Association",
        "birthday": "February 26th",
        "height": "157cm",
        "origin": "NOA",
        "obtain": "Gacha (constant)",
        "bio": "A delivery girl who always works hard to deliver packages at NOA. My goal in life is to earn a lot of money and buy a Cruiser as a special car for my delivery company."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "naru",
    "name": "Naru",
    "title": "Orbital Search Team · elemental damage",
    "rarity": "SR",
    "element": "Star",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/NOA_OBSERVER_icon.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.6",
    "summary": "SR Star Ranger (elemental damage). Naru's ATK increases by 15%. When Naru uses \"Look here!\", the damage increases by 3% depending on the number of enemy weakenings, up to a maximum of 5. When using \"Look here!\", if your Jump is at the maximum stack, after clearing all stacks, \"Look here!\" will be activated again. The a",
    "recommendedDupes": "★★☆ (LB1 Recommended)",
    "baseStats": {
      "hp": 21500,
      "spd": 100,
      "atk": 4100,
      "def": 1620,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Desire for Career Advancement",
        "nameJp": "出世欲",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_NOA_OBSERVER_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Naru's ATK increases by 15%.\nWhen Naru uses \"Look here!\", the damage increases by 3% depending on the number of enemy weakenings, up to a maximum of 5.\nWhen using \"Look here!\", if your Jump is at the maximum stack, after clearing all stacks, \"Look here!\" will be activated again. The additional activated effect only occurs once per your turn.",
        "novaBurst": ""
      },
      {
        "name": "Check It Out Here!",
        "nameJp": "こちらをご覧ください！",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_NOA_OBSERVER_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Fill the sextant with the power of a star and fire it at the enemy. Give yourself 1 Jump stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "This Is My Ability",
        "nameJp": "これが私の実力です",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_NOA_OBSERVER_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Calculate the falling objects that can fall on the enemy. Increases ATK for 2 turns.\nWhen attacking, damage increases by 20% if the enemy is weakened.\nAfter attacking, give 1 Jump stack depending on the number of weakened enemies. Applies to up to 5 items.",
        "novaBurst": "When attacking, your Fixed Toughness Damage will temporarily increase by 1, and an additional turn will occur after attacking."
      },
      {
        "name": "It Exceeded My Expectations!",
        "nameJp": "予想の範囲を超えました！",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_NOA_OBSERVER_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "With overflowing confidence, he performs an energy dissipation calculation using an unfinished equation.\nInflicts Speed ​​Down on the enemy for 2 turns at 100% and Effect RES Down for 2 turns at 100%, then grants 2 Jump stacks to yourself.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Desire for Career Advancement",
        "nameJp": "出世欲",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_NOA_OBSERVER_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Naru's ATK increases by 12%.",
        "novaBurst": ""
      },
      {
        "name": "Check It Out Here!",
        "nameJp": "こちらをご覧ください！",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_NOA_OBSERVER_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Gather the power of the stars into the sextant and fire it at the enemy. Give yourself 1 Jump stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "This Is My Ability",
        "nameJp": "これが私の実力です",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_NOA_OBSERVER_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Calculate the falling objects that can fall on the enemy. Increases ATK for 1 turn. If the enemy is weakened when hit, the damage will be increased by 10%.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "It Exceeded My Expectations!",
        "nameJp": "予想の範囲を超えました！",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_NOA_OBSERVER_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "With overflowing confidence, he executes an energy dissipation calculation formula using an unfinished equation. Inflicts 100% speed reduction on the enemy for 2 turns.",
        "novaBurst": "When attacking, temporarily increases your Fixed Toughness Damage by 1, and after attacking, activates 100% Effect RES Down on the enemy for 2 turns."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517795",
      "arcana-79517873",
      "arcana-79517774",
      "arcana-79517783"
    ],
    "staticData": {
      "nameJp": "ナル",
      "pool": "Standard",
      "attackType": "elemental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-171-20251112031735.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_NOA_OBSERVER_img.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 180,
        "vitality": 140,
        "endurance": 20,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [],
      "skillPriority": [],
      "curio": {
        "name": "Tape Recorder",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_MAGNETO_PHONE.webp",
        "rank": "B (properly strengthened)",
        "effect": "At the start of battle, increase own Action Gauge by 50%.\nThis is my ability or exceeded my expectations! After use, increase own Action Gauge by 50% and have a 100% chance to reduce enemy's Action Gauge by 50%.\nCheck here! When used, if the enemy is weakened, recovers HP equal to 50% of the damage taken."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Concentration Skills",
          "effect": "Effect Hit increases by 4%."
        }
      ],
      "gifts": [
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        },
        {
          "name": "Skin Care Lip Balm",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_83wze.webp"
        },
        {
          "name": "Elegant Hand Mirror",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_rmgi6.webp"
        },
        {
          "name": "Ceres Stick All-in-one Essence",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_hovi3.webp"
        },
        {
          "name": "Golden Dew Moisturizing Cream",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_d6apk.webp"
        },
        {
          "name": "Serenade Lumiere",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_b84yd.webp"
        }
      ],
      "profile": {
        "cv": "Haruna Fukushima",
        "affiliation": "Orbital Search Team",
        "birthday": "March 3rd",
        "height": "158cm",
        "origin": "NOA",
        "obtain": "Gacha (constant)",
        "bio": "An intern for the Orbital Search Team affiliated with Polaris. He dreams of a future where it will be possible to perfectly observe the future through the equations he devised."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "claire",
    "name": "Claire",
    "title": "Candle Square · Slash Damage",
    "rarity": "SR",
    "element": "Moon",
    "role": "Assassin",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAID_SPEAR_icon.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.6",
    "summary": "SR Moon Assassin (Slash Damage). Claire's ATK increases by 15%. When Claire attacks, if the enemy's HP is 50% or higher, it will penetrate the enemy's defense by 15%. When attacking, if your Cooling is at maximum stack, after clearing all stacks, increase your Action Gauge by 30%. Occurs only once in your turn. Ultimat",
    "recommendedDupes": "★★☆ (LB1 Recommended)",
    "baseStats": {
      "hp": 21500,
      "spd": 100,
      "atk": 4100,
      "def": 1620,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Punctuality",
        "nameJp": "時間厳守",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MAID_SPEAR_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Claire's ATK increases by 15%.\nWhen Claire attacks, if the enemy's HP is 50% or higher, it will penetrate the enemy's defense by 15%.\nWhen attacking, if your Cooling is at maximum stack, after clearing all stacks, increase your Action Gauge by 30%. Occurs only once in your turn.",
        "novaBurst": ""
      },
      {
        "name": "Perfect Blow",
        "nameJp": "完璧な一撃",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2022/04/0374d130c2e3cbb374e9dfa6cf2c3fa7.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attacks the enemy by swinging the spear wide. Give yourself 1 Cooling stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Sharp Thorns",
        "nameJp": "鋭い棘",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2022/04/0374d130c2e3cbb374e9dfa6cf2c3fa7.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Pierce enemies one after another with a spear imbued with sharp energy. Causes self to speed up for 2 turns.\nWhen attacking, damage increases by 3% depending on the number of enhancements you have, up to a maximum of 5.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Last Service",
        "nameJp": "最後のサービス",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2022/04/0374d130c2e3cbb374e9dfa6cf2c3fa7.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Use force to make a rude uninvited guest realize his mistake.\nIncreases own Action Gauge by 30% and increases ATK for 2 turns.\nWhen attacking, ignore the enemy's first defense occurrence rate. If you defeat an enemy, inflict stealth on yourself for 2 turns.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1 and damage increases by 20%."
      },
      {
        "name": "Punctuality",
        "nameJp": "時間厳守",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MAID_SPEAR_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Claire's ATK increases by 12%.",
        "novaBurst": ""
      },
      {
        "name": "Perfect Blow",
        "nameJp": "完璧な一撃",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2022/04/0374d130c2e3cbb374e9dfa6cf2c3fa7.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attacks the enemy by swinging the spear wide. Give yourself 1 Cooling stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Sharp Thorns",
        "nameJp": "鋭い棘",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2022/04/0374d130c2e3cbb374e9dfa6cf2c3fa7.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Pierce enemies one after another with a spear imbued with sharp energy. Increases speed for 1 turn.",
        "novaBurst": "When attacking, temporarily increases your Fixed Toughness Damage by 1, and increases your ATK for 1 turn after attacking."
      },
      {
        "name": "Last Service",
        "nameJp": "最後のサービス",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2022/04/0374d130c2e3cbb374e9dfa6cf2c3fa7.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Use force to make rude unsolicited customers realize their mistakes. Increases own Action Gauge by 20%. If you are in an enhanced state, increase your Action Gauge by an additional 10%.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79534223",
      "arcana-79517807",
      "arcana-79517846",
      "arcana-79517783"
    ],
    "staticData": {
      "nameJp": "クレア",
      "pool": "Standard",
      "attackType": "Slash Damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51987-20251113062435.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-23566-20251112031814.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_MAID_SPEAR_img.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 180,
        "vitality": 20,
        "endurance": 20,
        "focus": 10,
        "protection": 190
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [],
      "skillPriority": [],
      "curio": {
        "name": "Guidebook for Beginner Maids",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_MAID_GUIDEBOOK.webp",
        "rank": "B (properly strengthened)",
        "effect": "At the start of turn, increases Crit Rate for 1 turn.\nWhen attacking, Crit DMG and Action Gauge increase by 10% depending on the number of debuffs you have, up to a maximum of 5.\nIf a Critical Hit occurs after using a perfect blow, the cooldown time of all of your skills will be reduced by 1 turn."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Protection",
          "effect": "Effect RES increases by 10%."
        },
        {
          "name": "Skill of Destruction",
          "effect": "Crit DMG increases by 4%."
        }
      ],
      "gifts": [
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        },
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        }
      ],
      "profile": {
        "cv": "Hikari Sonoyama",
        "affiliation": "Candle Square",
        "birthday": "January 30th",
        "height": "162cm",
        "origin": "NOA",
        "obtain": "Gacha (constant)",
        "bio": "Candle Square's noble maid and acting head maid. He has a personality that values ​​planning and Lulu above all else, and is always making plans for irregular situations."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "scarlet",
    "name": "Scarlet",
    "title": "Candle Square · elemental damage",
    "rarity": "SR",
    "element": "Sun",
    "role": "Striker",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAID_SCISSORS_icon.webp",
    "overallTier": "A",
    "rerollTier": "A",
    "score": "8.6",
    "summary": "SR Sun Striker (elemental damage). Scarlet's maximum HP increases by 15%. After Scarlet uses \"I'll cut it!\", it inflicts Burn on the enemy at 100% for 2 turns. When attacking, if your Ignition is at maximum stack, after clearing all stacks, activate \"Go boldly!\" on the enemy. Occurs only once in your turn. Ultimate [Ca",
    "recommendedDupes": "★★☆ (LB1 Recommended)",
    "baseStats": {
      "hp": 21500,
      "spd": 100,
      "atk": 4100,
      "def": 1620,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "I Will Deal with You!",
        "nameJp": "わがはいが相手してやるのだ！",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MAID_SCISSORS_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Scarlet's maximum HP increases by 15%.\nAfter Scarlet uses \"I'll cut it!\", it inflicts Burn on the enemy at 100% for 2 turns.\nWhen attacking, if your Ignition is at maximum stack, after clearing all stacks, activate \"Go boldly!\" on the enemy. Occurs only once in your turn.",
        "novaBurst": ""
      },
      {
        "name": "I'll Cut It!",
        "nameJp": "裁断してやるのだ！",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2022/04/0374d130c2e3cbb374e9dfa6cf2c3fa7.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attack the enemy with a separated Tailion. Give yourself 1 Ignition stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Take the Plunge!",
        "nameJp": "思い切って行くのだ！",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2022/04/0374d130c2e3cbb374e9dfa6cf2c3fa7.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Throws Tyrion heated with dragon's breath at the enemy. Increases ATK for 2 turns.\nWhen attacking, damage increases by 15% depending on the enemy's Burn stack. Applies to up to 3 items.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Can You Bear It?",
        "nameJp": "耐えられるかのう？",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2022/04/0374d130c2e3cbb374e9dfa6cf2c3fa7.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Bella Summons the Lumini tribe's followers and exhales extremely hot breath. Inflicts Burn on the enemy for 2 turns at 100%, and additional Burn for 2 turns at 100%.\n2 turns on yourself Choki Choki! and gives 3 Ignition stacks.",
        "novaBurst": "When attacking, your Fixed Toughness Damage will temporarily increase by 1, and after attacking, cause the enemy to additionally inflict {Burn} for 2 turns at 100%. Effect Ignore RES."
      },
      {
        "name": "I Will Deal with You!",
        "nameJp": "わがはいが相手してやるのだ！",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MAID_SCISSORS_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Scarlet's maximum HP increases by 12%.",
        "novaBurst": ""
      },
      {
        "name": "I'll Cut It!",
        "nameJp": "裁断してやるのだ！",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2022/04/0374d130c2e3cbb374e9dfa6cf2c3fa7.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Attack the enemy with a separated Tailion. Give yourself 1 Ignition stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Take the Plunge!",
        "nameJp": "思い切って行くのだ！",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2022/04/0374d130c2e3cbb374e9dfa6cf2c3fa7.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Throws Tyrion heated with dragon's breath at the enemy. Increases ATK for 1 turn. When attacking, damage increases by 15% if the enemy is in the Burn state.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Can You Bear It?",
        "nameJp": "耐えられるかのう？",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/uploads/2022/04/0374d130c2e3cbb374e9dfa6cf2c3fa7.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 5 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Bella Summons the Lumini tribe's followers and exhales extremely hot breath. Inflicts Burn on the enemy for 2 turns at 100%, and inflicts Burn for 1 turn at 75%.",
        "novaBurst": "When attacking, your Fixed Toughness Damage is temporarily increased by 1, and the chance of additional combustion becomes 100%."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79534220",
      "arcana-79517810",
      "arcana-79517753",
      "arcana-79517756"
    ],
    "staticData": {
      "nameJp": "スカーレット",
      "pool": "Standard",
      "attackType": "elemental damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41494-20251114140221.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-1533-20251112031704.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_MAID_SCISSORS_img.webp",
      "pvpTier": "A",
      "journeyStats": {
        "power": 180,
        "vitality": 140,
        "endurance": 20,
        "focus": 10,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [],
      "skillPriority": [],
      "curio": {
        "name": "Evil Dragon Cerberon Figure",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_CERBERON_FIGURE.webp",
        "rank": "B (properly strengthened)",
        "effect": "I'll cut it! Or I will do it to you! After use, there is a 100% chance that the enemy will be burned for 2 turns.\nTake the plunge! After use, if the enemy is in the Burning state, recovers own HP.\nThe amount of recovery and burning damage increase in proportion to your own ATK."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Concentration Skills",
          "effect": "Effect Hit increases by 4%."
        }
      ],
      "gifts": [
        {
          "name": "Mitsuame",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_ux20g.webp"
        },
        {
          "name": "Morian Cookie Choux",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_57hkj.webp"
        },
        {
          "name": "Daily Twenty Donuts",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_di3a1.webp"
        },
        {
          "name": "Special Chocolate Parfait",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_tish9.webp"
        },
        {
          "name": "Ceres Tile Sorbet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150214_ib9ej.webp"
        },
        {
          "name": "Multicolored Glass Beads",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_kcurx.webp"
        },
        {
          "name": "Luxury Tea Set",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_nqmuy.webp"
        },
        {
          "name": "Dancing Girl",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150218_yb4u2.webp"
        },
        {
          "name": "Holy Night Planetarium",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_t8goy.webp"
        },
        {
          "name": "Tears of Stars",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_u6wjv.webp"
        }
      ],
      "profile": {
        "cv": "Misaki Akiyama",
        "affiliation": "Candle Square",
        "birthday": "May 5th",
        "height": "155cm",
        "origin": "dragon valley",
        "obtain": "Gacha (constant)",
        "bio": "A dragon girl who dreams of becoming a great tailor. He is ignorant of the common sense of human society, and is often scolded by Claire for causing trouble."
      }
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "clarissa",
    "name": "Clarissa",
    "title": "Canopic Guard · impact damage",
    "rarity": "SR",
    "element": "Star",
    "role": "Ranger",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAGICIAN_SNIPER_icon.webp",
    "overallTier": "SS",
    "rerollTier": "SS",
    "score": "9.6",
    "summary": "SR Star Ranger (impact damage). Clarissa's Crit Rate increases by 15%. At the start of Clarissa's turn, give herself 1 Jump stack at 100%. The applied effect is added depending on the number of times your own Jump stacks. After being attacked, erase all of your Jump stacks. 2 stacks: Increases damage by 15% when attack",
    "recommendedDupes": "★★☆ (LB1 Recommended)",
    "baseStats": {
      "hp": 21500,
      "spd": 100,
      "atk": 4100,
      "def": 1620,
      "crit": 14,
      "critRate": "14%",
      "critDmg": "68%",
      "effHit": "100%",
      "effRes": "0%"
    },
    "skills": [
      {
        "name": "Entangled Wind Paths",
        "nameJp": "絡みつく風道",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MAGICIAN_SNIPER_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Clarissa's Crit Rate increases by 15%.\nAt the start of Clarissa's turn, give herself 1 Jump stack at 100%.\nThe applied effect is added depending on the number of times your own Jump stacks. After being attacked, erase all of your Jump stacks.\n2 stacks: Increases damage by 15% when attacking.\n3 stacks: Increases accuracy by 50% when attacking.\n4 stacks: After attacking, increase own Action Gauge by 15%.\n5 stacks: After attacking, reduce enemy's Action Gauge by 15% at 100%.",
        "novaBurst": ""
      },
      {
        "name": "A Little Far Away",
        "nameJp": "少し離れて",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MAGICIAN_SNIPER_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Shoot the enemy with an unwavering stance. Give yourself 1 Jump stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Shoot As You Feel",
        "nameJp": "感じるままに射撃",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MAGICIAN_SNIPER_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Don't miss the enemy's guard and shoot at them. Inflicts 100% speed reduction on the enemy for 1 turn and increases own Action Gauge by 25%.\nWhen a Critical Hit occurs, increase your Action Gauge by an additional 15%. When attacking, if the enemy has Moon Attribute, the damage will increase by 20%.",
        "novaBurst": "When attacking, temporarily increases own Fixed Toughness Damage by 1 and reduces enemy's Action Gauge by 15% at 100% after attacking."
      },
      {
        "name": "This Is How You Shoot a Gun",
        "nameJp": "銃はこうやって撃つんだよ",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MAGICIAN_SNIPER_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Use your superhuman vision to spot the enemy's hidden weaknesses and shoot them. Increases speed for 2 turns and grants 2 Jump stacks.\nWhen a Critical Hit occurs, reduce the enemy's Action Gauge by 20% at 100%. When attacking, if the enemy has Moon Attribute, the damage will increase by 20%.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Entangled Wind Paths",
        "nameJp": "絡みつく風道",
        "type": "Unique Passive",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MAGICIAN_SNIPER_UNIQUE_PASSIVE_icon.webp",
        "target": "Passive",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "Passive Effect",
        "exactDescription": "Clarissa's Crit Rate increases by 12%.",
        "novaBurst": ""
      },
      {
        "name": "A Little Far Away",
        "nameJp": "少し離れて",
        "type": "Basic Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MAGICIAN_SNIPER_ATTACK_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "Passive | Toughness: 1",
        "multiplierSummary": "ATK 65%",
        "exactDescription": "Shoot the enemy with an unwavering stance. Give yourself 1 Jump stack.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      },
      {
        "name": "Shoot As You Feel",
        "nameJp": "感じるままに射撃",
        "type": "Special Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MAGICIAN_SNIPER_SPECIAL_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 3 turns | Toughness: 1",
        "multiplierSummary": "ATK 90%",
        "exactDescription": "Don't miss the enemy's guard and shoot at them. Inflicts 100% speed reduction on the enemy for 1 turn.",
        "novaBurst": "When attacking, temporarily increases own Fixed Toughness Damage by 1 and reduces enemy's Action Gauge by 15% at 100% after attacking."
      },
      {
        "name": "This Is How You Shoot a Gun",
        "nameJp": "銃はこうやって撃つんだよ",
        "type": "Ultimate Skill",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SKILL_MAGICIAN_SNIPER_HYPER_icon.webp",
        "target": "Active Skill | Single Target",
        "spOrEnergyCost": "CT: 4 turns | Toughness: 1",
        "multiplierSummary": "ATK 115%",
        "exactDescription": "Spot your enemy's hidden weaknesses with your superhuman vision and then shoot them. Increases speed for 2 turns.",
        "novaBurst": "When attacking, your Fixed Toughness Damage temporarily increases by 1."
      }
    ],
    "bestArcanaSlugs": [
      "arcana-79517825",
      "arcana-79517876",
      "arcana-79517756",
      "arcana-79517759"
    ],
    "staticData": {
      "nameJp": "クラリッサ",
      "pool": "Standard",
      "attackType": "impact damage",
      "attributeIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-27624-20251113062238.webp",
      "classIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-171-20251112031735.webp",
      "illustUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ILLUST_MAGICIAN_SNIPER_img.webp",
      "pvpTier": "S",
      "journeyStats": {
        "power": 180,
        "vitality": 20,
        "endurance": 20,
        "focus": 190,
        "protection": 10
      },
      "equipment": {
        "pveSets": [
          "Destruction Set (Crit DMG +40%)",
          "Fighting Spirit Set (ATK +15% / Eff RES +15%)"
        ],
        "pvpSets": [
          "Speed Set (SPD +25%)",
          "Destruction Set (Crit DMG +40%)"
        ],
        "necklaceMain": "Speed",
        "ringMain": "Attack Power (%)",
        "subStats": "ATK (%) / Crit Rate / Crit DMG / Speed"
      },
      "hardPotential": {
        "name": "Starlight Trajectory AX-5",
        "effect": "ATK +8% and Crit Rate +5%. At the start of each turn, increases own ATK by 8% (stacks up to 5 times; resets after using Ultimate Skill)."
      },
      "dupeRating": "★★☆",
      "limitBreaks": [],
      "skillPriority": [],
      "curio": {
        "name": "Last Shot",
        "iconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/JOURNEY_ITEM_LAST_BULLET.webp",
        "rank": "A (easy to clear)",
        "effect": "At the start of the turn, generates precision aiming for yourself.\nThis is how you shoot a gun. Or shoot as you feel. After using it, move at the enemy a little further and activate it.\nOccurs only once in your turn.\nPrecision Aiming: Increases Crit Rate by 100% and recovers HP equal to 50% of damage taken. It will be canceled after the attack."
      },
      "resonancePotentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Sense of Insight",
          "effect": "Crit rate increases by 5%."
        },
        {
          "name": "Skill of Destruction",
          "effect": "Crit DMG increases by 4%."
        }
      ],
      "gifts": [
        {
          "name": "Tulip Flowers",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_zbv0m.webp"
        },
        {
          "name": "Potted Cactus",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_1ck8q.webp"
        },
        {
          "name": "100 Roses",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150212_en68p.webp"
        },
        {
          "name": "Orchid Potted Plant",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150213_wdk03.webp"
        },
        {
          "name": "Royal Amour Bouquet",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_hztqp.webp"
        },
        {
          "name": "Latest Issue of Travel Times",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_lemsz.webp"
        },
        {
          "name": "Interpretation of Time Horizon",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150215_nfy67.webp"
        },
        {
          "name": "Phantom Thief Fox Luna Hardcover Edition",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_ux4jp.webp"
        },
        {
          "name": "First Edition of a New Era",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150217_hba9v.webp"
        },
        {
          "name": "Book of Void Manuscript",
          "iconUrl": "https://appmedia.jp/wp-content/uploads/2026/02/150216_upz85.webp"
        }
      ],
      "profile": {
        "cv": "Maki Kawase",
        "affiliation": "Canopic Guard",
        "birthday": "November 9th",
        "height": "166cm",
        "origin": "canopic mountains",
        "obtain": "Gacha (constant)",
        "bio": "A girl who worked as a hunter in the Canopus Mountains. He has superhuman eyesight. Although he likes mischief and has a bright personality, he tries to keep a certain distance from everyone."
      }
    }
  }
]).map((c) => ({
  ...c,
  overallTier: c.overallTier as TierRank,
  rerollTier: c.rerollTier as TierRank,
  staticData: {
    ...c.staticData,
    pvpTier: c.staticData.pvpTier as TierRank,
  },
}));

export const STAR_SAVIOR_ARCANA_SEED = ([
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517741",
    "name": "Quiet Rest Time",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality · Defender Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
    "tier": "S",
    "score": "9.2",
    "effectSummary": "[Sense of Protection] Effect RES increases by 10%. / [Sense of Life] Maximum HP increases by 5%. / [Prudent Tactics] At the start of the turn, Nova Force increases by 2. Occurs only once every 2 turns.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "Defender Bonus",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Emily"
    },
    "bestHolderSlugs": [
      "emily",
      "carmen",
      "ede"
    ],
    "staticData": {
      "nameJp": "静かな休息時間",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Emily",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/01/194443_qs2vo.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Defender Bonus",
      "potentials": [
        {
          "name": "Sense of Protection",
          "effect": "Effect RES increases by 10%."
        },
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "Prudent Tactics",
          "effect": "At the start of the turn, Nova Force increases by 2. Occurs only once every 2 turns."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517744",
    "name": "A Knight's Oath",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality · Universal Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_KNIGHT_SSR_01_icon_arcana.webp",
    "tier": "S",
    "score": "9.2",
    "effectSummary": "[Stigmata of Speed] Speed increases by 8.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "Universal Bonus",
      "Stat Bonus": "Speed Bonus",
      "Featured Unit": "Charles"
    },
    "bestHolderSlugs": [
      "charles"
    ],
    "staticData": {
      "nameJp": "ある騎士の誓い",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_KNIGHT_SSR_01.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Charles",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_KNIGHT_icon.webp",
      "statBonusType": "Speed Bonus",
      "classBonus": "Universal Bonus",
      "potentials": [
        {
          "name": "Stigmata of Speed",
          "effect": "Speed increases by 8."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517747",
    "name": "Night View Through Glass",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Protection · Rescuer Assistance",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_SHIELDER_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "8.0",
    "effectSummary": "[Generous Response] When attacked by an enemy, if you are in Monastir's Discipline state, you will counterattack at 25%, and if you are attacked by an enemy in Taunt state, you will counterattack at 100%.",
    "stats": {
      "Tag": "Protection",
      "Class Bonus": "Rescuer Assistance",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Carmen"
    },
    "bestHolderSlugs": [
      "carmen"
    ],
    "staticData": {
      "nameJp": "ガラス越しの夜景",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_SHIELDER_SSR_01.webp",
      "statTag": "Protection",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-63834-20251118080315.webp",
      "characterName": "Carmen",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_SHIELDER_icon.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Rescuer Assistance",
      "potentials": [
        {
          "name": "Generous Response",
          "effect": "When attacked by an enemy, if you are in Monastir's Discipline state, you will counterattack at 25%, and if you are attacked by an enemy in Taunt state, you will counterattack at 100%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517750",
    "name": "Princess Takes the Throne",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality · Supporter Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_PRAY_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "8.0",
    "effectSummary": "[Blessings of Starlight] At the start of each turn, the amount of recovery given increases by 3%. Repeats up to 5 times.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "Supporter Bonus",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Frey"
    },
    "bestHolderSlugs": [
      "frey",
      "frey",
      "serpang"
    ],
    "staticData": {
      "nameJp": "姫、王位に就く",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_PRAY_SSR_01.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Frey",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_PRAY_icon.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Supporter Bonus",
      "potentials": [
        {
          "name": "Blessings of Starlight",
          "effect": "At the start of each turn, the amount of recovery given increases by 3%. Repeats up to 5 times."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517753",
    "name": "Atop the Tower, Welcoming the Glass Moon",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power · Universal Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_EASTERN_SWORDMASTER_SSR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Sense of Attack] ATK increases by 5%. / [Stigmata of Attack] ATK increases by 8%.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "Universal Bonus",
      "Stat Bonus": "ATK Bonus",
      "Featured Unit": "Rin"
    },
    "bestHolderSlugs": [
      "rin"
    ],
    "staticData": {
      "nameJp": "楼閣の上、ガラスの月を迎えて",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_EASTERN_SWORDMASTER_SSR_01.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Rin",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/04/105027_kjhmw.webp",
      "statBonusType": "ATK Bonus",
      "classBonus": "Universal Bonus",
      "potentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Stigmata of Attack",
          "effect": "ATK increases by 8%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517756",
    "name": "Walk with Friends",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power · Caster Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAGICIAN_DRUID_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "8.0",
    "effectSummary": "[How to Cast an Emergency Spell] At the start of the first battle, increase Crit Rate for 2 turns.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "Caster Bonus",
      "Stat Bonus": "Crit Rate Subsidy",
      "Featured Unit": "Dana"
    },
    "bestHolderSlugs": [
      "dana",
      "luna",
      "dana"
    ],
    "staticData": {
      "nameJp": "友達との散歩",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAGICIAN_DRUID_SSR_01.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Dana",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAGICIAN_DRUID_icon.webp",
      "statBonusType": "Crit Rate Subsidy",
      "classBonus": "Caster Bonus",
      "potentials": [
        {
          "name": "How to Cast an Emergency Spell",
          "effect": "At the start of the first battle, increase Crit Rate for 2 turns."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517759",
    "name": "Heavenly Judgment",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power · Caster Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_SAINTESS_DEMON_SSR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Magic Circle of Target Alignment] At the start of the turn, own Crit DMG increases by 10%. Repeats up to 3 times.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "Caster Bonus",
      "Stat Bonus": "Crit DMG Auxiliary",
      "Featured Unit": "Muriel"
    },
    "bestHolderSlugs": [
      "muriel",
      "luna",
      "dana"
    ],
    "staticData": {
      "nameJp": "天の審判",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_SAINTESS_DEMON_SSR_01.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Muriel",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SAINTESS_DEMON_icon.webp",
      "statBonusType": "Crit DMG Auxiliary",
      "classBonus": "Caster Bonus",
      "potentials": [
        {
          "name": "Magic Circle of Target Alignment",
          "effect": "At the start of the turn, own Crit DMG increases by 10%. Repeats up to 3 times."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517762",
    "name": "Heaven's Trial",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Endurance · Universal Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_SAINTESS_ELF_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "8.0",
    "effectSummary": "[Sense of Defense] Defense power increases by 5%. / [Sensory Defense] Defense power increases by 8% and Effect RES increases by 4%.",
    "stats": {
      "Tag": "Endurance",
      "Class Bonus": "Universal Bonus",
      "Stat Bonus": "DEF Bonus",
      "Featured Unit": "Elisa"
    },
    "bestHolderSlugs": [
      "elisa"
    ],
    "staticData": {
      "nameJp": "天の試練",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_SAINTESS_ELF_SSR_01.webp",
      "statTag": "Endurance",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41448-20251118080315.webp",
      "characterName": "Elisa",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SAINTESS_ELF_icon.webp",
      "statBonusType": "DEF Bonus",
      "classBonus": "Universal Bonus",
      "potentials": [
        {
          "name": "Sense of Defense",
          "effect": "Defense power increases by 5%."
        },
        {
          "name": "Sensory Defense",
          "effect": "Defense power increases by 8% and Effect RES increases by 4%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517765",
    "name": "Invisible Place",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Focus · Universal Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_BEAMSWORD_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "8.0",
    "effectSummary": "[Sense of Concentration] Effect Hit increases by 10%. / [First Aid] When attacked, if your HP is below 25%, recover your HP. The amount of recovery increases in proportion to your maximum HP. Occurs only once every 2 turns.",
    "stats": {
      "Tag": "Focus",
      "Class Bonus": "Universal Bonus",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Ceres"
    },
    "bestHolderSlugs": [
      "ceres"
    ],
    "staticData": {
      "nameJp": "見えない場所",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_BEAMSWORD_SSR_01.webp",
      "statTag": "Focus",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-26239-20251118080315.webp",
      "characterName": "Ceres",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/07/152521_s54gh.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Universal Bonus",
      "potentials": [
        {
          "name": "Sense of Concentration",
          "effect": "Effect Hit increases by 10%."
        },
        {
          "name": "First Aid",
          "effect": "When attacked, if your HP is below 25%, recover your HP. The amount of recovery increases in proportion to your maximum HP. Occurs only once every 2 turns."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517768",
    "name": "Born to Be Wild",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Endurance · Universal Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WILD_HOG_SSR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Defensive Skill] Defense power increases by 2%. / [Second Heart] Maximum Toughness value increases by 2.",
    "stats": {
      "Tag": "Endurance",
      "Class Bonus": "Universal Bonus",
      "Stat Bonus": "Toughness Aid",
      "Featured Unit": "Harley"
    },
    "bestHolderSlugs": [
      "harley"
    ],
    "staticData": {
      "nameJp": "ボーン・トゥ・ビー・ワイルド",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WILD_HOG_SSR_01.webp",
      "statTag": "Endurance",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41448-20251118080315.webp",
      "characterName": "Harley",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/WILD_HOG_icon.webp",
      "statBonusType": "Toughness Aid",
      "classBonus": "Universal Bonus",
      "potentials": [
        {
          "name": "Defensive Skill",
          "effect": "Defense power increases by 2%."
        },
        {
          "name": "Second Heart",
          "effect": "Maximum Toughness value increases by 2."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517771",
    "name": "Made by Petra♡",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Focus · Universal Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_CONSTRUCT_BOMB_SSR_01_icon_arcana.webp",
    "tier": "SS",
    "score": "9.7",
    "effectSummary": "[Sense of Concentration] Effect Hit increases by 10%. / [Sense of Attack] ATK increases by 5%. / [Stigmata of Insight] Crit rate increases by 18%.",
    "stats": {
      "Tag": "Focus",
      "Class Bonus": "Universal Bonus",
      "Stat Bonus": "Crit Rate Subsidy",
      "Featured Unit": "Petra"
    },
    "bestHolderSlugs": [
      "petra"
    ],
    "staticData": {
      "nameJp": "メイド・バイ・ペトラ♡",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_CONSTRUCT_BOMB_SSR_01.webp",
      "statTag": "Focus",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-26239-20251118080315.webp",
      "characterName": "Petra",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/CONSTRUCT_BOMB_icon.webp",
      "statBonusType": "Crit Rate Subsidy",
      "classBonus": "Universal Bonus",
      "potentials": [
        {
          "name": "Sense of Concentration",
          "effect": "Effect Hit increases by 10%."
        },
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Stigmata of Insight",
          "effect": "Crit rate increases by 18%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517774",
    "name": "No Pain, No Gain",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power · Universal Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_INDEPENDENT_DRAGON_SSR_01_icon_arcana.webp",
    "tier": "S",
    "score": "9.2",
    "effectSummary": "[Sharp Offensive] ATK increases by 6% and Crit Rate increases by 6%.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "Universal Bonus",
      "Stat Bonus": "ATK Bonus",
      "Featured Unit": "Lacy"
    },
    "bestHolderSlugs": [
      "lacy"
    ],
    "staticData": {
      "nameJp": "ノーペイン、ノーゲイン",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_INDEPENDENT_DRAGON_SSR_01.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Lacy",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/INDEPENDENT_DRAGON_icon.webp",
      "statBonusType": "ATK Bonus",
      "classBonus": "Universal Bonus",
      "potentials": [
        {
          "name": "Sharp Offensive",
          "effect": "ATK increases by 6% and Crit Rate increases by 6%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517777",
    "name": "Tempura Master",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Protection · Rescuer Assistance",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_CONSTRUCT_GADGET_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "8.0",
    "effectSummary": "[Sense of Protection] Effect RES increases by 10%. / [Protection Skills] Effect RES increases by 4%. / [Tempura Party] After using the skill, if your HP is over 50%, increase your Action Gauge by 20%.",
    "stats": {
      "Tag": "Protection",
      "Class Bonus": "Rescuer Assistance",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Tanya"
    },
    "bestHolderSlugs": [
      "tanya"
    ],
    "staticData": {
      "nameJp": "天ぷら名人",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_CONSTRUCT_GADGET_SSR_01.webp",
      "statTag": "Protection",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-63834-20251118080315.webp",
      "characterName": "Tanya",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/CONSTRUCT_GADGET_icon.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Rescuer Assistance",
      "potentials": [
        {
          "name": "Sense of Protection",
          "effect": "Effect RES increases by 10%."
        },
        {
          "name": "Protection Skills",
          "effect": "Effect RES increases by 4%."
        },
        {
          "name": "Tempura Party",
          "effect": "After using the skill, if your HP is over 50%, increase your Action Gauge by 20%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517780",
    "name": "There Is Always One Truth, Right?",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Focus · Caster Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_DETECTIVE_WATSON_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "8.0",
    "effectSummary": "[Concentration Skills] Effect Hit increases by 4%. / [Resolute Determination] After receiving an attack, if your HP is below 50%, generate a 3 turn token for yourself. Occurs only once during battle.\nProof: Increases damage dealt by 10% and reduces damage received by 10%.",
    "stats": {
      "Tag": "Focus",
      "Class Bonus": "Caster Bonus",
      "Stat Bonus": "ATK Bonus",
      "Featured Unit": "Lily"
    },
    "bestHolderSlugs": [
      "lily",
      "luna",
      "dana"
    ],
    "staticData": {
      "nameJp": "真実はいつも一つでしょう？",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_DETECTIVE_WATSON_SSR_01.webp",
      "statTag": "Focus",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-26239-20251118080315.webp",
      "characterName": "Lily",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/DETECTIVE_WATSON_icon.webp",
      "statBonusType": "ATK Bonus",
      "classBonus": "Caster Bonus",
      "potentials": [
        {
          "name": "Concentration Skills",
          "effect": "Effect Hit increases by 4%."
        },
        {
          "name": "Resolute Determination",
          "effect": "After receiving an attack, if your HP is below 50%, generate a 3 turn token for yourself. Occurs only once during battle.\nProof: Increases damage dealt by 10% and reduces damage received by 10%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517783",
    "name": "As Cute As Kira!",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power · Assassin Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MUTANT_MASK_SSR_01_icon_arcana.webp",
    "tier": "S",
    "score": "9.2",
    "effectSummary": "[Elasticity/acceleration] At the start of your turn, your speed increases by 10. Can be stacked up to 3 times.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "Assassin Bonus",
      "Stat Bonus": "Speed Bonus",
      "Featured Unit": "Kira"
    },
    "bestHolderSlugs": [
      "kira",
      "trish",
      "epindel"
    ],
    "staticData": {
      "nameJp": "キラくらい可愛い！",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MUTANT_MASK_SSR_01.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Kira",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MUTANT_MASK_icon.webp",
      "statBonusType": "Speed Bonus",
      "classBonus": "Assassin Bonus",
      "potentials": [
        {
          "name": "Elasticity/acceleration",
          "effect": "At the start of your turn, your speed increases by 10. Can be stacked up to 3 times."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517786",
    "name": "Satisfying Meal",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Protection · Defender Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_LANCER_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "8.0",
    "effectSummary": "[Sense of Protection] Effect RES increases by 10%. / [Strong Will] Maximum Toughness value increases by 2. When attacked, Crit DMG resistance increases by 20% if you are not in Toughness break state.",
    "stats": {
      "Tag": "Protection",
      "Class Bonus": "Defender Bonus",
      "Stat Bonus": "Toughness Aid",
      "Featured Unit": "Vesta"
    },
    "bestHolderSlugs": [
      "vesta",
      "carmen",
      "ede"
    ],
    "staticData": {
      "nameJp": "満足のいく食事",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_LANCER_SSR_01.webp",
      "statTag": "Protection",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-63834-20251118080315.webp",
      "characterName": "Vesta",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/WEST_LANCER_icon.webp",
      "statBonusType": "Toughness Aid",
      "classBonus": "Defender Bonus",
      "potentials": [
        {
          "name": "Sense of Protection",
          "effect": "Effect RES increases by 10%."
        },
        {
          "name": "Strong Will",
          "effect": "Maximum Toughness value increases by 2. When attacked, Crit DMG resistance increases by 20% if you are not in Toughness break state."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517789",
    "name": "Undercover Cup",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Endurance · Universal Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_OFFICER_POLICE_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "8.0",
    "effectSummary": "[Second Heart] Maximum Toughness value increases by 2.",
    "stats": {
      "Tag": "Endurance",
      "Class Bonus": "Universal Bonus",
      "Stat Bonus": "Toughness Aid",
      "Featured Unit": "Anna"
    },
    "bestHolderSlugs": [
      "anna"
    ],
    "staticData": {
      "nameJp": "アンダーカバー・コップ",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_OFFICER_POLICE_SSR_01.webp",
      "statTag": "Endurance",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41448-20251118080315.webp",
      "characterName": "Anna",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/OFFICER_POLICE_icon.webp",
      "statBonusType": "Toughness Aid",
      "classBonus": "Universal Bonus",
      "potentials": [
        {
          "name": "Second Heart",
          "effect": "Maximum Toughness value increases by 2."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517792",
    "name": "Naru Is More Professional Than Anyone Else",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality · Supporter Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_LPU_POST_SSR_01_icon_arcana.webp",
    "tier": "B",
    "score": "8.0",
    "effectSummary": "[Blessings of Starlight] At the start of each turn, the amount of recovery given increases by 3%. Repeats up to 5 times.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "Supporter Bonus",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Bella"
    },
    "bestHolderSlugs": [
      "bella",
      "frey",
      "serpang"
    ],
    "staticData": {
      "nameJp": "誰よりもプロフェッショナル",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_LPU_POST_SSR_01.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Bella",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/LPU_POST_icon.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Supporter Bonus",
      "potentials": [
        {
          "name": "Blessings of Starlight",
          "effect": "At the start of each turn, the amount of recovery given increases by 3%. Repeats up to 5 times."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517795",
    "name": "Dream While Looking at the Stars",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Focus · Universal Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_NOA_OBSERVER_SSR_01_icon_arcana.webp",
    "tier": "S",
    "score": "9.2",
    "effectSummary": "[Stigmata of Insight] Crit rate increases by 18%.",
    "stats": {
      "Tag": "Focus",
      "Class Bonus": "Universal Bonus",
      "Stat Bonus": "Crit Rate Subsidy",
      "Featured Unit": "Naru"
    },
    "bestHolderSlugs": [
      "naru"
    ],
    "staticData": {
      "nameJp": "星を見ながら夢を",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_NOA_OBSERVER_SSR_01.webp",
      "statTag": "Focus",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-26239-20251118080315.webp",
      "characterName": "Naru",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/NOA_OBSERVER_icon.webp",
      "statBonusType": "Crit Rate Subsidy",
      "classBonus": "Universal Bonus",
      "potentials": [
        {
          "name": "Stigmata of Insight",
          "effect": "Crit rate increases by 18%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79534220",
    "name": "Bold and Amazing Bunny Girl",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power · Rescuer Assistance",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/105829_y0pco.webp",
    "tier": "B",
    "score": "8.0",
    "effectSummary": "[Attack Skill] ATK increases by 2%. / [Get Ready!] When using a skill, Effect Hit increases by 10% and damage dealt increases by 5% depending on the number of strengthening effects you have. This effect applies up to 5 layers. / [Offensive Talent] ATK increases by 3%.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "Rescuer Assistance",
      "Stat Bonus": "Effect Hit Auxiliary",
      "Featured Unit": "Scarlet"
    },
    "bestHolderSlugs": [
      "scarlet"
    ],
    "staticData": {
      "nameJp": "大胆かつ凄いバニーガール",
      "cardArtUrl": "https://appmedia.jp/wp-content/uploads/2025/11/164724_5vyka.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Scarlet",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAID_SCISSORS_icon.webp",
      "statBonusType": "Effect Hit Auxiliary",
      "classBonus": "Rescuer Assistance",
      "potentials": [
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        },
        {
          "name": "Get Ready!",
          "effect": "When using a skill, Effect Hit increases by 10% and damage dealt increases by 5% depending on the number of strengthening effects you have. This effect applies up to 5 layers."
        },
        {
          "name": "Offensive Talent",
          "effect": "ATK increases by 3%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79534223",
    "name": "Perfect Bunny Girl",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality · Universal Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/105828_b3l1z.webp",
    "tier": "SS",
    "score": "9.7",
    "effectSummary": "[Skill in Life] Maximum HP increases by 2%. / [Sharp Growth] Maximum HP increases by 6% and Crit Rate increases by 6%. / [Talent of Life] Maximum HP increases by 3%.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "Universal Bonus",
      "Stat Bonus": "HP Bonus",
      "Featured Unit": "Claire"
    },
    "bestHolderSlugs": [
      "claire"
    ],
    "staticData": {
      "nameJp": "完璧なバニーガール",
      "cardArtUrl": "https://appmedia.jp/wp-content/uploads/2025/11/164723_w41gs.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Claire",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAID_SPEAR_icon.webp",
      "statBonusType": "HP Bonus",
      "classBonus": "Universal Bonus",
      "potentials": [
        {
          "name": "Skill in Life",
          "effect": "Maximum HP increases by 2%."
        },
        {
          "name": "Sharp Growth",
          "effect": "Maximum HP increases by 6% and Crit Rate increases by 6%."
        },
        {
          "name": "Talent of Life",
          "effect": "Maximum HP increases by 3%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79576397",
    "name": "Pioneer of Imaginary Numbers",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power · Universal Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/121445_x6mr0.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Sense of Attack] ATK increases by 5%. / [Stack Trigger] After using a Special Skill, your own Special Skill damage increases by 5%. Repeats up to 5 times.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "Universal Bonus",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Omega"
    },
    "bestHolderSlugs": [
      "omega"
    ],
    "staticData": {
      "nameJp": "虚数の開拓者",
      "cardArtUrl": "https://appmedia.jp/wp-content/uploads/2025/12/123210_v0re3.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Omega",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/STARPIERCER_OMEGA_icon.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Universal Bonus",
      "potentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Stack Trigger",
          "effect": "After using a Special Skill, your own Special Skill damage increases by 5%. Repeats up to 5 times."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79606361",
    "name": "Daughter of the Stranis Family",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality · Universal Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/12/182739_q8esp.webp",
    "tier": "S",
    "score": "9.2",
    "effectSummary": "[Talent of Speed] Speed increases by 3. / [Stigmata of Life] Maximum HP increases by 8%.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "Universal Bonus",
      "Stat Bonus": "HP Bonus",
      "Featured Unit": "Asherah"
    },
    "bestHolderSlugs": [
      "asherah"
    ],
    "staticData": {
      "nameJp": "ストラニス家の令嬢",
      "cardArtUrl": "https://appmedia.jp/wp-content/uploads/2025/12/123117_mbaqf.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Asherah",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_STRANIS_icon.webp",
      "statBonusType": "HP Bonus",
      "classBonus": "Universal Bonus",
      "potentials": [
        {
          "name": "Talent of Speed",
          "effect": "Speed increases by 3."
        },
        {
          "name": "Stigmata of Life",
          "effect": "Maximum HP increases by 8%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79644746",
    "name": "Deep Condolences",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Focus · Ranger Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/01/200315_snce6.webp",
    "tier": "B",
    "score": "8.0",
    "effectSummary": "[Concentration Skills] Effect Hit increases by 4%. / [The Shadow of Silkworm Eating] When using Basic Skill, your Crit Rate increases by 5%. Can be stacked up to 5 times.",
    "stats": {
      "Tag": "Focus",
      "Class Bonus": "Ranger Bonus",
      "Stat Bonus": "Crit Rate Subsidy",
      "Featured Unit": "Bell Lease"
    },
    "bestHolderSlugs": [
      "bell-lease",
      "smile",
      "lu"
    ],
    "staticData": {
      "nameJp": "深い哀悼",
      "cardArtUrl": "https://appmedia.jp/wp-content/uploads/2026/01/102354_cd1hj.webp",
      "statTag": "Focus",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-26239-20251118080315.webp",
      "characterName": "Bell Lease",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/01/200314_a0eqx.webp",
      "statBonusType": "Crit Rate Subsidy",
      "classBonus": "Ranger Bonus",
      "potentials": [
        {
          "name": "Concentration Skills",
          "effect": "Effect Hit increases by 4%."
        },
        {
          "name": "The Shadow of Silkworm Eating",
          "effect": "When using Basic Skill, your Crit Rate increases by 5%. Can be stacked up to 5 times."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79717619",
    "name": "How to Satisfy Clumsy Desires",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power · Assassin Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/02/185314_wdzh2.webp",
    "tier": "B",
    "score": "8.0",
    "effectSummary": "[Speed Prowess] Speed increases by 2. / [Double Tap] After attacking with Basic Skill, if the enemy's Toughness is broken, it will cause chain damage to all enemies proportional to your own ATK at 100%.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "Assassin Bonus",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Charles"
    },
    "bestHolderSlugs": [
      "charles",
      "trish",
      "epindel"
    ],
    "staticData": {
      "nameJp": "不器用な欲望の満たし方",
      "cardArtUrl": "https://appmedia.jp/wp-content/uploads/2026/02/192356_7pvfd.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Charles",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_KNIGHT_icon.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Assassin Bonus",
      "potentials": [
        {
          "name": "Speed Prowess",
          "effect": "Speed increases by 2."
        },
        {
          "name": "Double Tap",
          "effect": "After attacking with Basic Skill, if the enemy's Toughness is broken, it will cause chain damage to all enemies proportional to your own ATK at 100%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79766540",
    "name": "An Unyielding Masterpiece",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power · Universal Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/02/183029_ni2vf.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Power training bonuses and Universal Bonus amplification during Journey runs.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "Universal Bonus",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Frey"
    },
    "bestHolderSlugs": [
      "frey"
    ],
    "staticData": {
      "nameJp": "不屈の傑作",
      "cardArtUrl": "https://appmedia.jp/wp-content/uploads/2026/02/184430_0oyxl.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Frey",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_PRAY_icon.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Universal Bonus",
      "potentials": [],
      "supportBonuses": [
        {
          "label": "sense of attack",
          "value": "Attack power increases by 5%."
        },
        {
          "label": "attack skill",
          "value": "Attack power increases by 2%."
        },
        {
          "label": "rugged destruction",
          "value": "Crit DMG increases by 12% and maximum HP increases by 4%."
        }
      ]
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79808948",
    "name": "A Sense of Responsibility Piled Up with Piles of Documents",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality · Rescuer Assistance",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/201813_3r618.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Sense of Speed] Increases speed by 5. / [Disaster Response Protocols] The maximum Toughness value increases by 1.\nWhen a Critical Hit occurs with Special Skill or Ultimate Skill, recover HP equal to 20% of the damage.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "Rescuer Assistance",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Roberta"
    },
    "bestHolderSlugs": [
      "roberta"
    ],
    "staticData": {
      "nameJp": "書類の山に積もる責任感",
      "cardArtUrl": "https://appmedia.jp/wp-content/uploads/2026/03/201812_rgzfo.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Roberta",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/03/201812_s56oa.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Rescuer Assistance",
      "potentials": [
        {
          "name": "Sense of Speed",
          "effect": "Increases speed by 5."
        },
        {
          "name": "Disaster Response Protocols",
          "effect": "The maximum Toughness value increases by 1.\nWhen a Critical Hit occurs with Special Skill or Ultimate Skill, recover HP equal to 20% of the damage."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79855448",
    "name": "Veteran Mercenary",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality · Rescuer Assistance",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/202111_kmw0s.webp",
    "tier": "B",
    "score": "8.0",
    "effectSummary": "[Skill of Destruction] Crit DMG increases by 4%. / [Catalyst] If a Critical Hit occurs after an attack, there is a 100% chance that chain damage will be inflicted on all enemies proportional to your own ATK.\nOccurs only once in your turn.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "Rescuer Assistance",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Yanagi Mina"
    },
    "bestHolderSlugs": [
      "yanagi-mina"
    ],
    "staticData": {
      "nameJp": "歴戦の傭兵",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Yanagi Mina",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/03/130558_c8vsj.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Rescuer Assistance",
      "potentials": [
        {
          "name": "Skill of Destruction",
          "effect": "Crit DMG increases by 4%."
        },
        {
          "name": "Catalyst",
          "effect": "If a Critical Hit occurs after an attack, there is a 100% chance that chain damage will be inflicted on all enemies proportional to your own ATK.\nOccurs only once in your turn."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79855463",
    "name": "Nostalgia Strikes Back",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Endurance · Defender Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/202110_u9dqe.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Sense of Defense] Defense power increases by 5%. / [Shield of Silence] Preemptive defense occurrence probability increases by 20%.",
    "stats": {
      "Tag": "Endurance",
      "Class Bonus": "Defender Bonus",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Hilde"
    },
    "bestHolderSlugs": [
      "hilde",
      "carmen",
      "ede"
    ],
    "staticData": {
      "nameJp": "ノスタルジアの逆襲",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Endurance",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41448-20251118080315.webp",
      "characterName": "Hilde",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/03/130612_m2rk9.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Defender Bonus",
      "potentials": [
        {
          "name": "Sense of Defense",
          "effect": "Defense power increases by 5%."
        },
        {
          "name": "Shield of Silence",
          "effect": "Preemptive defense occurrence probability increases by 20%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79865537",
    "name": "The End Has the Face of a Girl",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power · Ranger Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/115036_zi6xg.webp",
    "tier": "S",
    "score": "9.2",
    "effectSummary": "[Talent of Insight] Crit rate increases by 4.5%. / [The Sound of Blood] After a critical hit occurs with a general attack, your own ATK increases by 3% depending on the number of targets hit. Can be stacked up to 5 times.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "Ranger Bonus",
      "Stat Bonus": "ATK Bonus",
      "Featured Unit": "Rosalia"
    },
    "bestHolderSlugs": [
      "rosalia",
      "smile",
      "lu"
    ],
    "staticData": {
      "nameJp": "終末は少女の顔をしている",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Rosalia",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/03/191317_k4lb7.webp",
      "statBonusType": "ATK Bonus",
      "classBonus": "Ranger Bonus",
      "potentials": [
        {
          "name": "Talent of Insight",
          "effect": "Crit rate increases by 4.5%."
        },
        {
          "name": "The Sound of Blood",
          "effect": "After a critical hit occurs with a general attack, your own ATK increases by 3% depending on the number of targets hit. Can be stacked up to 5 times."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79893874",
    "name": "Forbidden Records Vol.1",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality · -",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/182813_7ue9j.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Vitality training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Vesta"
    },
    "bestHolderSlugs": [
      "vesta"
    ],
    "staticData": {
      "nameJp": "禁断の記録物Vol.1",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Vesta",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/WEST_LANCER_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": [
        {
          "label": "It doesn't matter! Obtain Strength +5, Stamina +5, Patience +5!",
          "value": "Strength +5\nStamina +5\nPatience +5"
        },
        {
          "label": "It doesn't matter! Obtain +5 stamina and +5 potential points!",
          "value": "Stamina +5\nPotential points +5"
        }
      ]
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79941760",
    "name": "The Warmth of the White Moon Is Like Sunlight",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Endurance · Universal Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/04/194656_x2w06.webp",
    "tier": "SS",
    "score": "9.7",
    "effectSummary": "[Stigmata of Speed] Speed increases by 8. / [Offensive Talent] ATK increases by 3%. / [Talent of Life] Maximum HP increases by 3%.",
    "stats": {
      "Tag": "Endurance",
      "Class Bonus": "Universal Bonus",
      "Stat Bonus": "Speed Bonus",
      "Featured Unit": "Rin"
    },
    "bestHolderSlugs": [
      "rin"
    ],
    "staticData": {
      "nameJp": "白い月のぬくもりは陽光のように",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Endurance",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41448-20251118080315.webp",
      "characterName": "Rin",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/04/105027_kjhmw.webp",
      "statBonusType": "Speed Bonus",
      "classBonus": "Universal Bonus",
      "potentials": [
        {
          "name": "Stigmata of Speed",
          "effect": "Speed increases by 8."
        },
        {
          "name": "Offensive Talent",
          "effect": "ATK increases by 3%."
        },
        {
          "name": "Talent of Life",
          "effect": "Maximum HP increases by 3%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79983016",
    "name": "Today's Step",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality · Rescuer Assistance",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/04/173815_r9imk.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Sense of Destruction] Crit DMG increases by 10%. / [Solitary Seeker] The maximum Toughness value increases by 1.\nAfter receiving an attack, if evasion occurs, inflicts Tenma's Mystery on yourself for 1 turn.\nMystery of Heaven: Crit Rate 100% up",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "Rescuer Assistance",
      "Stat Bonus": "Crit Rate Subsidy",
      "Featured Unit": "Fei"
    },
    "bestHolderSlugs": [
      "fei"
    ],
    "staticData": {
      "nameJp": "今日の一歩",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Fei",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/04/105026_1pwrt.webp",
      "statBonusType": "Crit Rate Subsidy",
      "classBonus": "Rescuer Assistance",
      "potentials": [
        {
          "name": "Sense of Destruction",
          "effect": "Crit DMG increases by 10%."
        },
        {
          "name": "Solitary Seeker",
          "effect": "The maximum Toughness value increases by 1.\nAfter receiving an attack, if evasion occurs, inflicts Tenma's Mystery on yourself for 1 turn.\nMystery of Heaven: Crit Rate 100% up"
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-80012824",
    "name": "Weakness Correction Custom Training",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power · Universal Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/05/172414_ia8pq.webp",
    "tier": "SS",
    "score": "9.7",
    "effectSummary": "[Sharp Offensive] ATK increases by 6% and Crit Rate increases by 6%.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "Universal Bonus",
      "Stat Bonus": "ATK Bonus",
      "Featured Unit": "Tilia"
    },
    "bestHolderSlugs": [
      "tilia"
    ],
    "staticData": {
      "nameJp": "弱点補完カスタム特訓",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Tilia",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2025/03/115944_7kujw.webp",
      "statBonusType": "ATK Bonus",
      "classBonus": "Universal Bonus",
      "potentials": [
        {
          "name": "Sharp Offensive",
          "effect": "ATK increases by 6% and Crit Rate increases by 6%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-80041744",
    "name": "A Gap in a Lazy Afternoon",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality · Rescuer Assistance",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/05/132533_e9xba.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Skill in Life] Maximum HP increases by 2%. / [Sense of Life] Maximum HP increases by 5%. / [March of Love] The maximum Toughness value increases by 1.\nGain 2 Nova Force after using Special Skill or Ultimate Skill.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "Rescuer Assistance",
      "Stat Bonus": "Toughness Aid",
      "Featured Unit": "Carmen"
    },
    "bestHolderSlugs": [
      "carmen"
    ],
    "staticData": {
      "nameJp": "気怠い午後の隙間",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Carmen",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_SHIELDER_icon.webp",
      "statBonusType": "Toughness Aid",
      "classBonus": "Rescuer Assistance",
      "potentials": [
        {
          "name": "Skill in Life",
          "effect": "Maximum HP increases by 2%."
        },
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        },
        {
          "name": "March of Love",
          "effect": "The maximum Toughness value increases by 1.\nGain 2 Nova Force after using Special Skill or Ultimate Skill."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-80077855",
    "name": "Until Death Separates Us",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power · Caster Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/06/170751_oeb4y.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Sense of Speed] Increases speed by 5. / [Crimson Oath] After attacking all targets, generates a proof for 2 turns on yourself.\nWhen attacking, if you are in the witness state, the damage dealt increases by 15%.\nProof: Damage dealt increases by 10%, damage taken decreases by 10%.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "Caster Bonus",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Epindel"
    },
    "bestHolderSlugs": [
      "epindel",
      "luna",
      "dana"
    ],
    "staticData": {
      "nameJp": "死が二人を分かつまで",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Epindel",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/GRACE_DUALSWORD_icon.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Caster Bonus",
      "potentials": [
        {
          "name": "Sense of Speed",
          "effect": "Increases speed by 5."
        },
        {
          "name": "Crimson Oath",
          "effect": "After attacking all targets, generates a proof for 2 turns on yourself.\nWhen attacking, if you are in the witness state, the damage dealt increases by 15%.\nProof: Damage dealt increases by 10%, damage taken decreases by 10%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-80139832",
    "name": "Death to Flowers",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Endurance · Universal Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/161306_gw2et.webp",
    "tier": "SS",
    "score": "9.7",
    "effectSummary": "[Sense of Destruction] Crit DMG increases by 10%. / [Skill of Insight] Crit rate increases by 3%. / [Skill of Destruction] Crit DMG increases by 4%. / [Stigmata of Insight] Crit rate increases by 18%.",
    "stats": {
      "Tag": "Endurance",
      "Class Bonus": "Universal Bonus",
      "Stat Bonus": "Crit Rate Subsidy",
      "Featured Unit": "Carnelia"
    },
    "bestHolderSlugs": [
      "carnelia"
    ],
    "staticData": {
      "nameJp": "花々に死を",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Endurance",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41448-20251118080315.webp",
      "characterName": "Carnelia",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/06/120413_604d3.webp",
      "statBonusType": "Crit Rate Subsidy",
      "classBonus": "Universal Bonus",
      "potentials": [
        {
          "name": "Sense of Destruction",
          "effect": "Crit DMG increases by 10%."
        },
        {
          "name": "Skill of Insight",
          "effect": "Crit rate increases by 3%."
        },
        {
          "name": "Skill of Destruction",
          "effect": "Crit DMG increases by 4%."
        },
        {
          "name": "Stigmata of Insight",
          "effect": "Crit rate increases by 18%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-80191501",
    "name": "Be Prepared to Take Poison",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power · Striker Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/07/184533_dvhyg.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Flexible Judgment] When attacking, if your HP is above 50%, the damage dealt increases by 15%.\nWhen attacked, if your HP is less than 50%, damage taken will be reduced by 15%.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "Striker Bonus",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Ceres"
    },
    "bestHolderSlugs": [
      "ceres",
      "asherah",
      "charles"
    ],
    "staticData": {
      "nameJp": "服毒の覚悟",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Ceres",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/07/152521_s54gh.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Striker Bonus",
      "potentials": [
        {
          "name": "Flexible Judgment",
          "effect": "When attacking, if your HP is above 50%, the damage dealt increases by 15%.\nWhen attacked, if your HP is less than 50%, damage taken will be reduced by 15%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-80210542",
    "name": "Follow the Light!",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power · Rescuer Assistance",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/06/170551_o4b9x.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Attack Skill] ATK increases by 2%. / [Path of Destiny] When one of your allies starts their turn, say \"Now!\" to yourself! (Cannot be canceled) will be granted once.\nAfter using the skill, now on yourself! (Unremovable) Depending on the number of stacks, there is a 100% chance to inflict chain damage proportional to your own ATK on one of the enemies, and now it's time! Delete all (cannot be canceled).\nNow! (Cannot be canceled): I have a feeling that a perfect machine will come. This effect can be stacked up to 5 times.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "Rescuer Assistance",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Luna"
    },
    "bestHolderSlugs": [
      "luna"
    ],
    "staticData": {
      "nameJp": "光を追え！",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Luna",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_ORACLE_icon.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Rescuer Assistance",
      "potentials": [
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        },
        {
          "name": "Path of Destiny",
          "effect": "When one of your allies starts their turn, say \"Now!\" to yourself! (Cannot be canceled) will be granted once.\nAfter using the skill, now on yourself! (Unremovable) Depending on the number of stacks, there is a 100% chance to inflict chain damage proportional to your own ATK on one of the enemies, and now it's time! Delete all (cannot be canceled).\nNow! (Cannot be canceled): I have a feeling that a perfect machine will come. This effect can be stacked up to 5 times."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-80231986",
    "name": "Summer Night Sky",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality · Defender Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/07/190530_zk9ua.webp",
    "tier": "B",
    "score": "8.0",
    "effectSummary": "[Defensive Skill] Defense power increases by 2%. / [Talent of Concentration] Effect Hit increases by 6%. / [Solid Trust] At the start of the first battle, create a barrier on yourself for 2 turns.\nBarrier increases in proportion to own maximum HP.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "Defender Bonus",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Luna"
    },
    "bestHolderSlugs": [
      "luna",
      "carmen",
      "ede"
    ],
    "staticData": {
      "nameJp": "夏の夜の空",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Luna",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_ORACLE_icon.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Defender Bonus",
      "potentials": [
        {
          "name": "Defensive Skill",
          "effect": "Defense power increases by 2%."
        },
        {
          "name": "Talent of Concentration",
          "effect": "Effect Hit increases by 6%."
        },
        {
          "name": "Solid Trust",
          "effect": "At the start of the first battle, create a barrier on yourself for 2 turns.\nBarrier increases in proportion to own maximum HP."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-80283517",
    "name": "Preparing for Your Vacation Starts with Shopping!",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power · Rescuer Assistance",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/07/170418_4q5sx.webp",
    "tier": "S",
    "score": "9.2",
    "effectSummary": "[Attack Skill] ATK increases by 2%. / [Laughter Induction Mechanism] When using Special Skill, damage dealt increases by 20%.\nAt the start of your turn, give yourself 1 jumping stack. / [Sense of Speed] Increases speed by 5.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "Rescuer Assistance",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Smile"
    },
    "bestHolderSlugs": [
      "smile"
    ],
    "staticData": {
      "nameJp": "バカンスの準備はお買い物から！",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Smile",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_SMILE_icon.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Rescuer Assistance",
      "potentials": [
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        },
        {
          "name": "Laughter Induction Mechanism",
          "effect": "When using Special Skill, damage dealt increases by 20%.\nAt the start of your turn, give yourself 1 jumping stack."
        },
        {
          "name": "Sense of Speed",
          "effect": "Increases speed by 5."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-80331877",
    "name": "Eternal Chain of Bondage",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Focus · Ranger Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/08/193327_txw73.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Sense of Attack] ATK increases by 5%. / [Concentration Skills] Effect Hit increases by 4%. / [Stigmata of Attack] ATK increases by 8%.",
    "stats": {
      "Tag": "Focus",
      "Class Bonus": "Ranger Bonus",
      "Stat Bonus": "ATK Bonus",
      "Featured Unit": "Christel"
    },
    "bestHolderSlugs": [
      "christel",
      "smile",
      "lu"
    ],
    "staticData": {
      "nameJp": "永遠なる束縛の連鎖",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Focus",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-26239-20251118080315.webp",
      "characterName": "Christel",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/08/190200_51vpg.webp",
      "statBonusType": "ATK Bonus",
      "classBonus": "Ranger Bonus",
      "potentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Concentration Skills",
          "effect": "Effect Hit increases by 4%."
        },
        {
          "name": "Stigmata of Attack",
          "effect": "ATK increases by 8%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-80363578",
    "name": "Itinerary Without Return",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality · Assassin Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/173117_4wct9.webp",
    "tier": "S",
    "score": "9.2",
    "effectSummary": "[Skill of Destruction] Crit DMG increases by 4%. / [A Refreshing Scent] Increases damage by 10% when attacking a single target.\nIf you are not weakened, damage increases by an additional 15%.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "Assassin Bonus",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Amora"
    },
    "bestHolderSlugs": [
      "amora",
      "trish",
      "epindel"
    ],
    "staticData": {
      "nameJp": "帰路なき旅程",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Amora",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/09/143855_iv9nt.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Assassin Bonus",
      "potentials": [
        {
          "name": "Skill of Destruction",
          "effect": "Crit DMG increases by 4%."
        },
        {
          "name": "A Refreshing Scent",
          "effect": "Increases damage by 10% when attacking a single target.\nIf you are not weakened, damage increases by an additional 15%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-80400913",
    "name": "Hedonist's Comfort",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Endurance · Ranger Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/194438_w92ck.webp",
    "tier": "S",
    "score": "9.2",
    "effectSummary": "[Sense of Concentration] Effect Hit increases by 10%. / [Speed Prowess] Speed increases by 2. / [Skill of Insight] Crit rate increases by 3%. / [Sharp Posture] After attacking with Special Skill, increase own Action Gauge by 20%.\nThis effect does not occur with skills other than single-target attacks.\nThis effect only occurs once per turn. / [Talent of Concentration] Effect Hit increases by 6%.",
    "stats": {
      "Tag": "Endurance",
      "Class Bonus": "Ranger Bonus",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Professor M"
    },
    "bestHolderSlugs": [
      "professor-m",
      "smile",
      "lu"
    ],
    "staticData": {
      "nameJp": "享楽者の慰み",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Endurance",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41448-20251118080315.webp",
      "characterName": "Professor M",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/09/205900_h5bcs.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Ranger Bonus",
      "potentials": [
        {
          "name": "Sense of Concentration",
          "effect": "Effect Hit increases by 10%."
        },
        {
          "name": "Speed Prowess",
          "effect": "Speed increases by 2."
        },
        {
          "name": "Skill of Insight",
          "effect": "Crit rate increases by 3%."
        },
        {
          "name": "Sharp Posture",
          "effect": "After attacking with Special Skill, increase own Action Gauge by 20%.\nThis effect does not occur with skills other than single-target attacks.\nThis effect only occurs once per turn."
        },
        {
          "name": "Talent of Concentration",
          "effect": "Effect Hit increases by 6%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-80444335",
    "name": "Investigation Methods of a Self-proclaimed Veteran Detective",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power · Striker Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/170800_jb9o5.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Sense of Attack] ATK increases by 5%. / [Attack Skill] ATK increases by 2%. / [Heat of Battle] When attacking, your damage increases by 10%.\nThis effect can be stacked up to 2 times.\nAt the end of the turn, initialize all stacks.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "Striker Bonus",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Gwen"
    },
    "bestHolderSlugs": [
      "gwen",
      "asherah",
      "charles"
    ],
    "staticData": {
      "nameJp": "自称ベテラン探偵の捜査法",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Gwen",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/09/205936_ywjad.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Striker Bonus",
      "potentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        },
        {
          "name": "Heat of Battle",
          "effect": "When attacking, your damage increases by 10%.\nThis effect can be stacked up to 2 times.\nAt the end of the turn, initialize all stacks."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-80482327",
    "name": "Is This...clothes?",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Power · Rescuer Assistance",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/10/192925_u7brs.webp",
    "tier": "S",
    "score": "9.2",
    "effectSummary": "[Attack Skill] ATK increases by 2%. / [Gesture of Emptiness] Crit rate increases by 20%.\nAfter attacking, your ATK increases by 2% for each number of targets you hit with Critical Hit.\nThis effect can occur up to 10 times.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "Rescuer Assistance",
      "Stat Bonus": "Crit Rate Subsidy",
      "Featured Unit": "Lydia"
    },
    "bestHolderSlugs": [
      "lydia"
    ],
    "staticData": {
      "nameJp": "これが…服？",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Lydia",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/WEST_ROD_icon.webp",
      "statBonusType": "Crit Rate Subsidy",
      "classBonus": "Rescuer Assistance",
      "potentials": [
        {
          "name": "Attack Skill",
          "effect": "ATK increases by 2%."
        },
        {
          "name": "Gesture of Emptiness",
          "effect": "Crit rate increases by 20%.\nAfter attacking, your ATK increases by 2% for each number of targets you hit with Critical Hit.\nThis effect can occur up to 10 times."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-80498278",
    "name": "Sleepy Outing",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality · Rescuer Assistance",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/10/190614_vbrik.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Skill of Insight] Crit rate increases by 3%. / [Sense of Destruction] Crit DMG increases by 10%. / [Butterfly Lullaby] After using a skill that is not an attack, give yourself Sweet Dreams (cannot be removed) for 3 turns and gain 2 Nova Force.\nSweet Dream: Toughness Damage increases by 1. / [Speed Prowess] Speed increases by 2.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "Rescuer Assistance",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Seira"
    },
    "bestHolderSlugs": [
      "seira"
    ],
    "staticData": {
      "nameJp": "睡魔のお出かけ",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Seira",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/NIGHTMARE_REAPER_icon.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Rescuer Assistance",
      "potentials": [
        {
          "name": "Skill of Insight",
          "effect": "Crit rate increases by 3%."
        },
        {
          "name": "Sense of Destruction",
          "effect": "Crit DMG increases by 10%."
        },
        {
          "name": "Butterfly Lullaby",
          "effect": "After using a skill that is not an attack, give yourself Sweet Dreams (cannot be removed) for 3 turns and gain 2 Nova Force.\nSweet Dream: Toughness Damage increases by 1."
        },
        {
          "name": "Speed Prowess",
          "effect": "Speed increases by 2."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-80521390",
    "name": "Harsh Ordeal",
    "rarity": "SSR",
    "category": "SSR Arcana",
    "subType": "Vitality · Universal Bonus",
    "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/10/193414_1r78o.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Vitality training bonuses and Universal Bonus amplification during Journey runs.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "Universal Bonus",
      "Stat Bonus": "Special Effect Bonus",
      "Featured Unit": "Ceres"
    },
    "bestHolderSlugs": [
      "ceres"
    ],
    "staticData": {
      "nameJp": "過酷な試練",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Ceres",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/07/152521_s54gh.webp",
      "statBonusType": "Special Effect Bonus",
      "classBonus": "Universal Bonus",
      "potentials": [],
      "supportBonuses": [
        {
          "label": "speed prowess",
          "value": "Speed increases by 2."
        },
        {
          "label": "skill in life",
          "value": "Maximum HP increases by 2%."
        },
        {
          "label": "Skilled Acceleration",
          "value": "After using a special skill that is not an attack, your speed increases by 4.\nThis effect can be stacked up to 5 times."
        },
        {
          "label": "defensive skill",
          "value": "Defense power increases by 2%."
        }
      ]
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517798",
    "name": "The Beginning of the Journey",
    "rarity": "SR",
    "category": "SR Arcana",
    "subType": "Vitality · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_VOYAGER_STRANIS_SR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Sense of Life] Maximum HP increases by 5%.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Asherah"
    },
    "bestHolderSlugs": [
      "asherah"
    ],
    "staticData": {
      "nameJp": "旅のはじまり",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_VOYAGER_STRANIS_SR_01.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Asherah",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_STRANIS_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517801",
    "name": "Cats Don't Laugh",
    "rarity": "SR",
    "category": "SR Arcana",
    "subType": "Focus · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_VOYAGER_SMILE_SR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Focus training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Focus",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Smile"
    },
    "bestHolderSlugs": [
      "smile"
    ],
    "staticData": {
      "nameJp": "猫は笑わない",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_VOYAGER_SMILE_SR_01.webp",
      "statTag": "Focus",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-26239-20251118080315.webp",
      "characterName": "Smile",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_SMILE_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517804",
    "name": "Beyond the Moon",
    "rarity": "SR",
    "category": "SR Arcana",
    "subType": "Power · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_VOYAGER_ORACLE_SR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Power training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Luna"
    },
    "bestHolderSlugs": [
      "luna"
    ],
    "staticData": {
      "nameJp": "月を越えて",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_VOYAGER_ORACLE_SR_01.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Luna",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_ORACLE_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517807",
    "name": "Cleaning, Unexpected Guests",
    "rarity": "SR",
    "category": "SR Arcana",
    "subType": "Power · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_SPEAR_SR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Skill of Insight] Crit rate increases by 3%.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Claire"
    },
    "bestHolderSlugs": [
      "claire"
    ],
    "staticData": {
      "nameJp": "掃除、思いがけない客人",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_SPEAR_SR_01.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Claire",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAID_SPEAR_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [
        {
          "name": "Skill of Insight",
          "effect": "Crit rate increases by 3%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517810",
    "name": "Attack of the Fierce Dragon",
    "rarity": "SR",
    "category": "SR Arcana",
    "subType": "Vitality · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_SCISSORS_SR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Sense of Life] Maximum HP increases by 5%.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Scarlet"
    },
    "bestHolderSlugs": [
      "scarlet"
    ],
    "staticData": {
      "nameJp": "暴竜の襲来",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_SCISSORS_SR_01.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Scarlet",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAID_SCISSORS_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517813",
    "name": "Phantom Butterfly",
    "rarity": "SR",
    "category": "SR Arcana",
    "subType": "Vitality · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_NIGHTMARE_REAPER_SR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Sense of Life] Maximum HP increases by 5%.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Seira"
    },
    "bestHolderSlugs": [
      "seira"
    ],
    "staticData": {
      "nameJp": "幻影の蝶",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_NIGHTMARE_REAPER_SR_01.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Seira",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/NIGHTMARE_REAPER_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [
        {
          "name": "Sense of Life",
          "effect": "Maximum HP increases by 5%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517816",
    "name": "Prey Selection",
    "rarity": "SR",
    "category": "SR Arcana",
    "subType": "Power · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_STELLAR_THIEF_SR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Sense of Attack] ATK increases by 5%. / [Offensive Talent] ATK increases by 3%.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Trish"
    },
    "bestHolderSlugs": [
      "trish"
    ],
    "staticData": {
      "nameJp": "獲物選び",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_STELLAR_THIEF_SR_01.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Trish",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/STELLAR_THIEF_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [
        {
          "name": "Sense of Attack",
          "effect": "ATK increases by 5%."
        },
        {
          "name": "Offensive Talent",
          "effect": "ATK increases by 3%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517819",
    "name": "Silent Hatred",
    "rarity": "SR",
    "category": "SR Arcana",
    "subType": "Endurance · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_INCOGNITA_FLOWER_SR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Defensive Skill] Defense power increases by 2%.",
    "stats": {
      "Tag": "Endurance",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Ede"
    },
    "bestHolderSlugs": [
      "ede"
    ],
    "staticData": {
      "nameJp": "静かな憎悪",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_INCOGNITA_FLOWER_SR_01.webp",
      "statTag": "Endurance",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41448-20251118080315.webp",
      "characterName": "Ede",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/INCOGNITA_FLOWER_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [
        {
          "name": "Defensive Skill",
          "effect": "Defense power increases by 2%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517822",
    "name": "Sweet and Fluffy...Syaaa...",
    "rarity": "SR",
    "category": "SR Arcana",
    "subType": "Protection · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_EASTERN_OWL_SR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Protection Skills] Effect RES increases by 4%.",
    "stats": {
      "Tag": "Protection",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Serpang"
    },
    "bestHolderSlugs": [
      "serpang"
    ],
    "staticData": {
      "nameJp": "甘くてフワフワで…スヤァ…",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_EASTERN_OWL_SR_01.webp",
      "statTag": "Protection",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-63834-20251118080315.webp",
      "characterName": "Serpang",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/EASTERN_OWL_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [
        {
          "name": "Protection Skills",
          "effect": "Effect RES increases by 4%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517825",
    "name": "Prepare, Aim, Fire",
    "rarity": "SR",
    "category": "SR Arcana",
    "subType": "Power · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAGICIAN_SNIPER_SR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Talent of Speed] Speed increases by 3.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Clarissa"
    },
    "bestHolderSlugs": [
      "clarissa"
    ],
    "staticData": {
      "nameJp": "準備、照準、発射",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAGICIAN_SNIPER_SR_01.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Clarissa",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAGICIAN_SNIPER_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [
        {
          "name": "Talent of Speed",
          "effect": "Speed increases by 3."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517828",
    "name": "Conversation Ended",
    "rarity": "SR",
    "category": "SR Arcana",
    "subType": "Protection · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_RECON_KNUCKLE_SR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Protection training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Protection",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Roberta"
    },
    "bestHolderSlugs": [
      "roberta"
    ],
    "staticData": {
      "nameJp": "会話終了",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_RECON_KNUCKLE_SR_01.webp",
      "statTag": "Protection",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-63834-20251118080315.webp",
      "characterName": "Roberta",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/03/201812_s56oa.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517831",
    "name": "Cleaning Up",
    "rarity": "SR",
    "category": "SR Arcana",
    "subType": "Focus · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_RECON_AMULET_SR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Sense of Concentration] Effect Hit increases by 10%.",
    "stats": {
      "Tag": "Focus",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Lu"
    },
    "bestHolderSlugs": [
      "lu"
    ],
    "staticData": {
      "nameJp": "後始末",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_RECON_AMULET_SR_01.webp",
      "statTag": "Focus",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-26239-20251118080315.webp",
      "characterName": "Lu",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/RECON_AMULET_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [
        {
          "name": "Sense of Concentration",
          "effect": "Effect Hit increases by 10%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517834",
    "name": "Dignity Foundation",
    "rarity": "SR",
    "category": "SR Arcana",
    "subType": "Protection · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_GRACE_DUALSWORD_SR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Protection Skills] Effect RES increases by 4%.",
    "stats": {
      "Tag": "Protection",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Epindel"
    },
    "bestHolderSlugs": [
      "epindel"
    ],
    "staticData": {
      "nameJp": "品格財団",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_GRACE_DUALSWORD_SR_01.webp",
      "statTag": "Protection",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-63834-20251118080315.webp",
      "characterName": "Epindel",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/GRACE_DUALSWORD_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [
        {
          "name": "Protection Skills",
          "effect": "Effect RES increases by 4%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517837",
    "name": "Satisfied Flowering",
    "rarity": "SR",
    "category": "SR Arcana",
    "subType": "Focus · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_ROD_SR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Focus training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Focus",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Lydia"
    },
    "bestHolderSlugs": [
      "lydia"
    ],
    "staticData": {
      "nameJp": "満足な開花",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_ROD_SR_01.webp",
      "statTag": "Focus",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-26239-20251118080315.webp",
      "characterName": "Lydia",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/WEST_ROD_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517840",
    "name": "Rabbit Town",
    "rarity": "SR",
    "category": "SR Arcana",
    "subType": "Endurance · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_CONSTRUCT_WRENCH_SR_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "[Sense of Defense] Defense power increases by 5%.",
    "stats": {
      "Tag": "Endurance",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Marcille"
    },
    "bestHolderSlugs": [
      "marcille"
    ],
    "staticData": {
      "nameJp": "ラビットタウン",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_CONSTRUCT_WRENCH_SR_01.webp",
      "statTag": "Endurance",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41448-20251118080315.webp",
      "characterName": "Marcille",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/CONSTRUCT_WRENCH_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [
        {
          "name": "Sense of Defense",
          "effect": "Defense power increases by 5%."
        }
      ],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517843",
    "name": "Lantern Moth Prophet",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Power · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_VOYAGER_ORACLE_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Power training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Luna"
    },
    "bestHolderSlugs": [
      "luna"
    ],
    "staticData": {
      "nameJp": "灯蛾の予言者",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_VOYAGER_ORACLE_R_01.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Luna",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_ORACLE_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517846",
    "name": "Master Made",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Power · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_SPEAR_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Power training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Claire"
    },
    "bestHolderSlugs": [
      "claire"
    ],
    "staticData": {
      "nameJp": "マスターメイド",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_SPEAR_R_01.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Claire",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAID_SPEAR_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517849",
    "name": "Druid Coming Out of the Forest",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Power · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAGICIAN_DRUID_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Power training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Dana"
    },
    "bestHolderSlugs": [
      "dana"
    ],
    "staticData": {
      "nameJp": "森から出たドルイド",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAGICIAN_DRUID_R_01.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Dana",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAGICIAN_DRUID_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517852",
    "name": "Rabbit with Two Faces",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Power · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_DETECTIVE_WATSON_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Power training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Power",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Lily"
    },
    "bestHolderSlugs": [
      "lily"
    ],
    "staticData": {
      "nameJp": "2つの顔を持つウサギ",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_DETECTIVE_WATSON_R_01.webp",
      "statTag": "Power",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-30826-20251118080316.webp",
      "characterName": "Lily",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/DETECTIVE_WATSON_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517855",
    "name": "Western Sword",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Vitality · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_BEAMSWORD_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Vitality training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Ceres"
    },
    "bestHolderSlugs": [
      "ceres"
    ],
    "staticData": {
      "nameJp": "西部の剣",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_BEAMSWORD_R_01.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Ceres",
      "characterIconUrl": "https://appmedia.jp/wp-content/uploads/2026/07/152521_s54gh.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517858",
    "name": "Girl Chasing Stars",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Vitality · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_VOYAGER_STRANIS_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Vitality training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Asherah"
    },
    "bestHolderSlugs": [
      "asherah"
    ],
    "staticData": {
      "nameJp": "星を追いかける少女",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_VOYAGER_STRANIS_R_01.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Asherah",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_STRANIS_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517861",
    "name": "Blue Blood Entrepreneur",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Vitality · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_PRAY_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Vitality training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Frey"
    },
    "bestHolderSlugs": [
      "frey"
    ],
    "staticData": {
      "nameJp": "青い血の起業家",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_PRAY_R_01.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Frey",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_PRAY_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517864",
    "name": "Place Your Order at Smile",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Focus · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_VOYAGER_SMILE_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Focus training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Focus",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Smile"
    },
    "bestHolderSlugs": [
      "smile"
    ],
    "staticData": {
      "nameJp": "ご注文はスマイルで",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_VOYAGER_SMILE_R_01.webp",
      "statTag": "Focus",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-26239-20251118080315.webp",
      "characterName": "Smile",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_SMILE_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517867",
    "name": "Commander of the Wild Rose Knights",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Vitality · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_KNIGHT_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Vitality training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Vitality",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Charles"
    },
    "bestHolderSlugs": [
      "charles"
    ],
    "staticData": {
      "nameJp": "野薔薇の騎士団長",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_KNIGHT_R_01.webp",
      "statTag": "Vitality",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-51607-20251118080315.webp",
      "characterName": "Charles",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_KNIGHT_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517870",
    "name": "Kotodama Girl",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Focus · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MUTANT_MASK_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Focus training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Focus",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Kira"
    },
    "bestHolderSlugs": [
      "kira"
    ],
    "staticData": {
      "nameJp": "言霊の少女",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MUTANT_MASK_R_01.webp",
      "statTag": "Focus",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-26239-20251118080315.webp",
      "characterName": "Kira",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MUTANT_MASK_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517873",
    "name": "Ambitious Newcomer",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Focus · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_NOA_OBSERVER_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Focus training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Focus",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Naru"
    },
    "bestHolderSlugs": [
      "naru"
    ],
    "staticData": {
      "nameJp": "野心あふれる新入り",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_NOA_OBSERVER_R_01.webp",
      "statTag": "Focus",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-26239-20251118080315.webp",
      "characterName": "Naru",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/NOA_OBSERVER_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517876",
    "name": "Clairvoyant Hunter",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Focus · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAGICIAN_SNIPER_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Focus training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Focus",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Clarissa"
    },
    "bestHolderSlugs": [
      "clarissa"
    ],
    "staticData": {
      "nameJp": "千里眼を持つハンター",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAGICIAN_SNIPER_R_01.webp",
      "statTag": "Focus",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-26239-20251118080315.webp",
      "characterName": "Clarissa",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAGICIAN_SNIPER_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517879",
    "name": "Companion of the Beast",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Protection · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_EASTERN_OWL_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Protection training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Protection",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Serpang"
    },
    "bestHolderSlugs": [
      "serpang"
    ],
    "staticData": {
      "nameJp": "幻獣の同伴者",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_EASTERN_OWL_R_01.webp",
      "statTag": "Protection",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-63834-20251118080315.webp",
      "characterName": "Serpang",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/EASTERN_OWL_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517882",
    "name": "Western Snake",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Protection · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_ROD_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Protection training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Protection",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Lydia"
    },
    "bestHolderSlugs": [
      "lydia"
    ],
    "staticData": {
      "nameJp": "西部の蛇",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_ROD_R_01.webp",
      "statTag": "Protection",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-63834-20251118080315.webp",
      "characterName": "Lydia",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/WEST_ROD_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517885",
    "name": "Knight's Shield",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Protection · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_SHIELDER_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Protection training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Protection",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Carmen"
    },
    "bestHolderSlugs": [
      "carmen"
    ],
    "staticData": {
      "nameJp": "騎士団の盾",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_SHIELDER_R_01.webp",
      "statTag": "Protection",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-63834-20251118080315.webp",
      "characterName": "Carmen",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_SHIELDER_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517888",
    "name": "Brave Delivery Man",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Protection · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_LPU_POST_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Protection training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Protection",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Bella"
    },
    "bestHolderSlugs": [
      "bella"
    ],
    "staticData": {
      "nameJp": "勇敢な配達屋",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_LPU_POST_R_01.webp",
      "statTag": "Protection",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-63834-20251118080315.webp",
      "characterName": "Bella",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/LPU_POST_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517891",
    "name": "Sword Made of Ice",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Endurance · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_RECON_AMULET_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Endurance training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Endurance",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Lu"
    },
    "bestHolderSlugs": [
      "lu"
    ],
    "staticData": {
      "nameJp": "氷で作られた剣",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_RECON_AMULET_R_01.webp",
      "statTag": "Endurance",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41448-20251118080315.webp",
      "characterName": "Lu",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/RECON_AMULET_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517894",
    "name": "Running Spirit of the Grassland",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Endurance · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WILD_HOG_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Endurance training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Endurance",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Harley"
    },
    "bestHolderSlugs": [
      "harley"
    ],
    "staticData": {
      "nameJp": "草原の疾走魂",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WILD_HOG_R_01.webp",
      "statTag": "Endurance",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41448-20251118080315.webp",
      "characterName": "Harley",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/WILD_HOG_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517897",
    "name": "Western Shield",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Endurance · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_LANCER_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Endurance training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Endurance",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Vesta"
    },
    "bestHolderSlugs": [
      "vesta"
    ],
    "staticData": {
      "nameJp": "西部の盾",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_LANCER_R_01.webp",
      "statTag": "Endurance",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41448-20251118080315.webp",
      "characterName": "Vesta",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/WEST_LANCER_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-79517900",
    "name": "People's Baton",
    "rarity": "R",
    "category": "R Arcana",
    "subType": "Endurance · -",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_OFFICER_POLICE_R_01_icon_arcana.webp",
    "tier": "A",
    "score": "8.6",
    "effectSummary": "Grants Endurance training bonuses and - amplification during Journey runs.",
    "stats": {
      "Tag": "Endurance",
      "Class Bonus": "-",
      "Stat Bonus": "-",
      "Featured Unit": "Anna"
    },
    "bestHolderSlugs": [
      "anna"
    ],
    "staticData": {
      "nameJp": "民衆の警棒",
      "cardArtUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_OFFICER_POLICE_R_01.webp",
      "statTag": "Endurance",
      "statTagIconUrl": "https://appmedia.jp/wp-content/uploads/2025/11/t-41448-20251118080315.webp",
      "characterName": "Anna",
      "characterIconUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/OFFICER_POLICE_icon.webp",
      "statBonusType": "-",
      "classBonus": "-",
      "potentials": [],
      "supportBonuses": []
    }
  }
]).map((a) => ({
  ...a,
  tier: a.tier as TierRank,
  stats: a.stats as Record<string, string | number>,
}));

export const STAR_SAVIOR_BANNERS_SEED = [
  {
    "gameSlug": "starsavior",
    "slug": "pickup-professor-m-amora",
    "title": "Featured Pickup: Professor M & Amora",
    "bannerType": "Rate-Up Pickup Observation",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_SAINTESS_DEMON_SSR_01.webp",
    "periodLabel": "Active Rate-Up · 200 Pity Mileage",
    "verdict": "MUST PULL",
    "reasoning": "Professor M (Moon Ranger) and Amora (Order Assassin) are Tier-0 SSS meta-defining carries for Cosmo Gate bosses and Endgame PvE.",
    "featuredCharacterSlugs": [
      "professor-m",
      "amora",
      "maid-ceres"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "limited-bride-carmen-swimsuit-smile",
    "title": "Limited Revival: Bride Carmen & Swimsuit Smile",
    "bannerType": "Limited Special Observation",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_SHIELDER_SSR_01.webp",
    "periodLabel": "Limited Banner · Exclusive Pool",
    "verdict": "META PICK",
    "reasoning": "Bride Carmen provides unmatched teamwide Action Gauge & Crit buffs, while Swimsuit Smile dominates single-target Boss Toughness breaking.",
    "featuredCharacterSlugs": [
      "bride-carmen",
      "swimsuit-smile",
      "bunny-charles"
    ]
  },
  {
    "gameSlug": "starsavior",
    "slug": "arcana-pickup-SSR-masterpiece",
    "title": "SSR Arcana Pickup: Indomitable Masterpiece & Resolve",
    "bannerType": "Arcana Observation",
    "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01.webp",
    "periodLabel": "Arcana Rate-Up · Journey Meta",
    "verdict": "HIGH VALUE",
    "reasoning": "Top-priority Power and Vitality SSR Arcana cards that unlock S+ rank Journey training stats and high-tier combat potentials.",
    "featuredCharacterSlugs": [
      "ceres",
      "tilia",
      "frey"
    ]
  }
];
