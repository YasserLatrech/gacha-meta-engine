import { GameAdapterBundle } from './heaven-burns-red.adapter';

export const swordOfConvallariaBundle: GameAdapterBundle = {
  "slug": "sword-of-convallaria",
  "name": "Sword of Convallaria",
  "shortName": "SoC",
  "asianRegion": "EN",
  "asianPatchVersion": "v2.4.0 Live Meta",
  "globalPatchVersion": "v2.4.0 Live",
  "foresightGapMonths": 6,
  "coverImageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/12/IMG_5806.webp",
  "currencyName": "Hope Luxite",
  "pullCostSingle": 150,
  "pityThreshold": 100,
  "monthlyF2pIncome": 11250,
  "monthlyPassIncome": 16500,
  "sourceUrl": "https://gachacrest.gg/sword-of-convallaria",
  "rolesConfig": [
    {
      "key": "DPS",
      "label": "S+ / S / A TIER DPS (CARRY)",
      "colorHex": "#DC2626"
    },
    {
      "key": "SUB_DPS",
      "label": "BREAKER / TACTICAL SUB-DPS",
      "colorHex": "#D97706"
    },
    {
      "key": "SUPPORT",
      "label": "S+ / S / A TIER SUPPORT (NRG & AURA)",
      "colorHex": "#2563EB"
    },
    {
      "key": "SUSTAIN",
      "label": "DEFENDER / VANGUARD TANK",
      "colorHex": "#15803D"
    }
  ],
  "elementsConfig": [
    {
      "key": "Watcher",
      "label": "Watcher (Gold)",
      "colorHex": "#CA8A04"
    },
    {
      "key": "Destroyer",
      "label": "Destroyer (Purple)",
      "colorHex": "#7C3AED"
    },
    {
      "key": "Seeker",
      "label": "Seeker (Red)",
      "colorHex": "#DC2626"
    },
    {
      "key": "Breaker",
      "label": "Breaker (Blue)",
      "colorHex": "#2563EB"
    },
    {
      "key": "Defender",
      "label": "Defender (Green)",
      "colorHex": "#15803D"
    }
  ],
  "units": [
    {
      "externalId": "soc-unit-sp-inanna",
      "slug": "soc-sp-inanna",
      "nameEn": "SP Inanna",
      "nameOriginal": "SP Inanna",
      "styleOrTitle": "Legendary Watcher • S+ Tier",
      "rarity": "Legendary",
      "role": "S+ Tier (Watcher)",
      "roleColumn": "DPS",
      "element": "Watcher",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/07/IMG_1686.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ – 5★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4880,
        "dpOrSpeed": 330,
        "atkOrPower": 2120,
        "defOrGuts": 940,
        "critOrWit": 820,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "SP Inanna Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "S+ Tier Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Watcher",
            "S+ Tier",
            "Faction Aura"
          ],
          "exactDescription": "Ranked S+ Tier in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "SP Inanna Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Watcher"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for SP Inanna."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-lutfi",
        "soc-luvata",
        "soc-agata"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.9,
      "summaryVerdict": "S+ Tier Legendary Watcher unit (SP Inanna) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-sp-inanna"
    },
    {
      "externalId": "soc-unit-sp-samantha",
      "slug": "soc-sp-samantha",
      "nameEn": "SP Samantha",
      "nameOriginal": "SP Samantha",
      "styleOrTitle": "Legendary Seeker • S+ Tier",
      "rarity": "Legendary",
      "role": "S+ Tier (Seeker)",
      "roleColumn": "SUB_DPS",
      "element": "Seeker",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0699.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ – 5★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4862,
        "dpOrSpeed": 328,
        "atkOrPower": 2110,
        "defOrGuts": 935,
        "critOrWit": 816,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "SP Samantha Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "S+ Tier Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Seeker",
            "S+ Tier",
            "Faction Aura"
          ],
          "exactDescription": "Ranked S+ Tier in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "SP Samantha Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Seeker"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for SP Samantha."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-auguste",
        "soc-cocoa",
        "soc-nydia"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.8,
      "summaryVerdict": "S+ Tier Legendary Seeker unit (SP Samantha) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-sp-samantha"
    },
    {
      "externalId": "soc-unit-camelot",
      "slug": "soc-camelot",
      "nameEn": "Camelot",
      "nameOriginal": "Camelot",
      "styleOrTitle": "Legendary Breaker • S Tier - DPS",
      "rarity": "Legendary",
      "role": "S Tier - DPS (Breaker)",
      "roleColumn": "DPS",
      "element": "Breaker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0731.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4844,
        "dpOrSpeed": 326,
        "atkOrPower": 2100,
        "defOrGuts": 930,
        "critOrWit": 812,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Camelot Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "S Tier - DPS Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Breaker",
            "S Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked S Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Camelot Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Breaker"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for Camelot."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-taair",
        "soc-ayishah",
        "soc-triss"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "S Tier - DPS Legendary Breaker unit (Camelot) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-camelot"
    },
    {
      "externalId": "soc-unit-geralt",
      "slug": "soc-geralt",
      "nameEn": "Geralt",
      "nameOriginal": "Geralt",
      "styleOrTitle": "Legendary Defender • S Tier - DPS",
      "rarity": "Legendary",
      "role": "S Tier - DPS (Defender)",
      "roleColumn": "SUSTAIN",
      "element": "Defender",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/11/IMG_4942.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4826,
        "dpOrSpeed": 324,
        "atkOrPower": 2090,
        "defOrGuts": 925,
        "critOrWit": 808,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 79,
        "sustainScore": 96,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Geralt Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "S Tier - DPS Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender",
            "S Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked S Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Geralt Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Defender"
          ],
          "exactDescription": "Intercepts physical/magic attacks within 2 tiles, reduces damage taken by 30%, and counters with 110% Piercing DMG."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for Geralt."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-flavia",
        "soc-tristan",
        "soc-yennefer"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.2,
      "summaryVerdict": "S Tier - DPS Legendary Defender unit (Geralt) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-geralt"
    },
    {
      "externalId": "soc-unit-kvare",
      "slug": "soc-kvare",
      "nameEn": "Kvare",
      "nameOriginal": "Kvare",
      "styleOrTitle": "Legendary Destroyer • S Tier - DPS",
      "rarity": "Legendary",
      "role": "S Tier - DPS (Destroyer)",
      "roleColumn": "DPS",
      "element": "Destroyer",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Kvare.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4808,
        "dpOrSpeed": 322,
        "atkOrPower": 2080,
        "defOrGuts": 920,
        "critOrWit": 804,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Kvare Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "S Tier - DPS Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Destroyer",
            "S Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked S Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Kvare Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Destroyer"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for Kvare."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-credenza",
        "soc-yserinde",
        "soc-layla"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "S",
      "numericScore": 9.4,
      "summaryVerdict": "S Tier - DPS Legendary Destroyer unit (Kvare) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-kvare"
    },
    {
      "externalId": "soc-unit-luvata",
      "slug": "soc-luvata",
      "nameEn": "Luvata",
      "nameOriginal": "Luvata",
      "styleOrTitle": "Legendary Watcher • S Tier - DPS",
      "rarity": "Legendary",
      "role": "S Tier - DPS (Watcher)",
      "roleColumn": "SUB_DPS",
      "element": "Watcher",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_7861.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4790,
        "dpOrSpeed": 320,
        "atkOrPower": 2070,
        "defOrGuts": 915,
        "critOrWit": 800,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Luvata Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "S Tier - DPS Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Watcher",
            "S Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked S Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Luvata Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Watcher"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for Luvata."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-agata",
        "soc-ciri",
        "soc-sp-inanna"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.3,
      "summaryVerdict": "S Tier - DPS Legendary Watcher unit (Luvata) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-luvata"
    },
    {
      "externalId": "soc-unit-nydia",
      "slug": "soc-nydia",
      "nameEn": "Nydia",
      "nameOriginal": "Nydia",
      "styleOrTitle": "Legendary Seeker • S Tier - DPS",
      "rarity": "Legendary",
      "role": "S Tier - DPS (Seeker)",
      "roleColumn": "DPS",
      "element": "Seeker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/07/IMG_1342.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4772,
        "dpOrSpeed": 318,
        "atkOrPower": 2060,
        "defOrGuts": 910,
        "critOrWit": 796,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Nydia Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "S Tier - DPS Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Seeker",
            "S Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked S Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Nydia Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Seeker"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for Nydia."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-sp-safiyyah",
        "soc-sp-samantha",
        "soc-auguste"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.2,
      "summaryVerdict": "S Tier - DPS Legendary Seeker unit (Nydia) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-nydia"
    },
    {
      "externalId": "soc-unit-triss",
      "slug": "soc-triss",
      "nameEn": "Triss",
      "nameOriginal": "Triss",
      "styleOrTitle": "Legendary Breaker • S Tier - DPS",
      "rarity": "Legendary",
      "role": "S Tier - DPS (Breaker)",
      "roleColumn": "DPS",
      "element": "Breaker",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/11/IMG_4945.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4754,
        "dpOrSpeed": 316,
        "atkOrPower": 2050,
        "defOrGuts": 905,
        "critOrWit": 792,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Triss Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "S Tier - DPS Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Breaker",
            "S Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked S Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Triss Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Breaker"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for Triss."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-falin",
        "soc-kiya",
        "soc-camelot"
      ],
      "tierOverall": "SS",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "S Tier - DPS Legendary Breaker unit (Triss) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-triss"
    },
    {
      "externalId": "soc-unit-tristan",
      "slug": "soc-tristan",
      "nameEn": "Tristan",
      "nameOriginal": "Tristan",
      "styleOrTitle": "Legendary Defender • S Tier - DPS",
      "rarity": "Legendary",
      "role": "S Tier - DPS (Defender)",
      "roleColumn": "SUSTAIN",
      "element": "Defender",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Tristan.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4736,
        "dpOrSpeed": 314,
        "atkOrPower": 2040,
        "defOrGuts": 900,
        "critOrWit": 788,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 79,
        "sustainScore": 96,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Tristan Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "S Tier - DPS Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender",
            "S Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked S Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Tristan Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Defender"
          ],
          "exactDescription": "Intercepts physical/magic attacks within 2 tiles, reduces damage taken by 30%, and counters with 110% Physical DMG."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for Tristan."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-yennefer",
        "soc-geralt",
        "soc-estra"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "S Tier - DPS Legendary Defender unit (Tristan) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-tristan"
    },
    {
      "externalId": "soc-unit-credenza",
      "slug": "soc-credenza",
      "nameEn": "Credenza",
      "nameOriginal": "Credenza",
      "styleOrTitle": "Legendary Destroyer • S Tier - Support",
      "rarity": "Legendary",
      "role": "S Tier - Support (Destroyer)",
      "roleColumn": "SUPPORT",
      "element": "Destroyer",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0697.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4718,
        "dpOrSpeed": 312,
        "atkOrPower": 2030,
        "defOrGuts": 895,
        "critOrWit": 784,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Credenza Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "S Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Destroyer",
            "S Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked S Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Credenza Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Destroyer"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Credenza."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-layla",
        "soc-kvare",
        "soc-yserinde"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "S Tier - Support Legendary Destroyer unit (Credenza) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-credenza"
    },
    {
      "externalId": "soc-unit-lutfi",
      "slug": "soc-lutfi",
      "nameEn": "Lutfi",
      "nameOriginal": "Lutfi",
      "styleOrTitle": "Legendary Watcher • S Tier - Support",
      "rarity": "Legendary",
      "role": "S Tier - Support (Watcher)",
      "roleColumn": "SUPPORT",
      "element": "Watcher",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/07/IMG_1482.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4700,
        "dpOrSpeed": 310,
        "atkOrPower": 2020,
        "defOrGuts": 890,
        "critOrWit": 780,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Lutfi Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "S Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Watcher",
            "S Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked S Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Lutfi Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Watcher"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Lutfi."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-sp-inanna",
        "soc-luvata",
        "soc-agata"
      ],
      "tierOverall": "SS",
      "tierReroll": "SSS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "S Tier - Support Legendary Watcher unit (Lutfi) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-lutfi"
    },
    {
      "externalId": "soc-unit-sp-safiyyah",
      "slug": "soc-sp-safiyyah",
      "nameEn": "SP Safiyyah",
      "nameOriginal": "SP Safiyyah",
      "styleOrTitle": "Legendary Seeker • S Tier - Support",
      "rarity": "Legendary",
      "role": "S Tier - Support (Seeker)",
      "roleColumn": "SUPPORT",
      "element": "Seeker",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/SP-Safiyyah.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4682,
        "dpOrSpeed": 308,
        "atkOrPower": 2010,
        "defOrGuts": 885,
        "critOrWit": 776,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "SP Safiyyah Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "S Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Seeker",
            "S Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked S Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "SP Safiyyah Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Seeker"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for SP Safiyyah."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-auguste",
        "soc-pamina",
        "soc-sp-samantha"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "S Tier - Support Legendary Seeker unit (SP Safiyyah) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-sp-safiyyah"
    },
    {
      "externalId": "soc-unit-taair",
      "slug": "soc-taair",
      "nameEn": "Taair",
      "nameOriginal": "Taair",
      "styleOrTitle": "Legendary Breaker • S Tier - Support",
      "rarity": "Legendary",
      "role": "S Tier - Support (Breaker)",
      "roleColumn": "SUPPORT",
      "element": "Breaker",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Taair.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4664,
        "dpOrSpeed": 306,
        "atkOrPower": 2000,
        "defOrGuts": 880,
        "critOrWit": 772,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Taair Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "S Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Breaker",
            "S Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked S Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Taair Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Breaker"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Taair."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-camelot",
        "soc-ayishah",
        "soc-triss"
      ],
      "tierOverall": "SS",
      "tierReroll": "SSS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "S Tier - Support Legendary Breaker unit (Taair) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-taair"
    },
    {
      "externalId": "soc-unit-yennefer",
      "slug": "soc-yennefer",
      "nameEn": "Yennefer",
      "nameOriginal": "Yennefer",
      "styleOrTitle": "Legendary Defender • S Tier - Support",
      "rarity": "Legendary",
      "role": "S Tier - Support (Defender)",
      "roleColumn": "SUPPORT",
      "element": "Defender",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/11/IMG_4944.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4646,
        "dpOrSpeed": 304,
        "atkOrPower": 1990,
        "defOrGuts": 875,
        "critOrWit": 768,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Yennefer Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "S Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender",
            "S Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked S Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Yennefer Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Defender"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Yennefer."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-tristan",
        "soc-geralt",
        "soc-estra"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "S Tier - Support Legendary Defender unit (Yennefer) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-yennefer"
    },
    {
      "externalId": "soc-unit-yserinde",
      "slug": "soc-yserinde",
      "nameEn": "Yserinde",
      "nameOriginal": "Yserinde",
      "styleOrTitle": "Legendary Destroyer • S Tier - Support",
      "rarity": "Legendary",
      "role": "S Tier - Support (Destroyer)",
      "roleColumn": "SUPPORT",
      "element": "Destroyer",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0700.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4628,
        "dpOrSpeed": 302,
        "atkOrPower": 1980,
        "defOrGuts": 870,
        "critOrWit": 764,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Yserinde Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "S Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Destroyer",
            "S Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked S Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Yserinde Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Destroyer"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Yserinde."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-kvare",
        "soc-credenza",
        "soc-layla"
      ],
      "tierOverall": "SS",
      "tierReroll": "SSS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "S Tier - Support Legendary Destroyer unit (Yserinde) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-yserinde"
    },
    {
      "externalId": "soc-unit-agata",
      "slug": "soc-agata",
      "nameEn": "Agata",
      "nameOriginal": "Agata",
      "styleOrTitle": "Legendary Watcher • A Tier",
      "rarity": "Legendary",
      "role": "A Tier (Watcher)",
      "roleColumn": "DPS",
      "element": "Watcher",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Agata.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4610,
        "dpOrSpeed": 300,
        "atkOrPower": 1970,
        "defOrGuts": 865,
        "critOrWit": 760,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Agata Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Watcher",
            "A Tier",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Agata Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Watcher"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for Agata."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-ciri",
        "soc-luvata",
        "soc-sp-inanna"
      ],
      "tierOverall": "S",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "A Tier Legendary Watcher unit (Agata) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-agata"
    },
    {
      "externalId": "soc-unit-auguste",
      "slug": "soc-auguste",
      "nameEn": "Auguste",
      "nameOriginal": "Auguste",
      "styleOrTitle": "Legendary Seeker • A Tier",
      "rarity": "Legendary",
      "role": "A Tier (Seeker)",
      "roleColumn": "DPS",
      "element": "Seeker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Auguste.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4592,
        "dpOrSpeed": 298,
        "atkOrPower": 1960,
        "defOrGuts": 860,
        "critOrWit": 756,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Auguste Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Seeker",
            "A Tier",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Auguste Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Seeker"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for Auguste."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-sp-safiyyah",
        "soc-sp-samantha",
        "soc-nydia"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "A Tier Legendary Seeker unit (Auguste) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-auguste"
    },
    {
      "externalId": "soc-unit-ayishah",
      "slug": "soc-ayishah",
      "nameEn": "Ayishah",
      "nameOriginal": "Ayishah",
      "styleOrTitle": "Legendary Breaker • A Tier",
      "rarity": "Legendary",
      "role": "A Tier (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Breaker",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0443.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4574,
        "dpOrSpeed": 296,
        "atkOrPower": 1950,
        "defOrGuts": 855,
        "critOrWit": 752,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Ayishah Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Breaker",
            "A Tier",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Ayishah Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Breaker"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for Ayishah."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-triss",
        "soc-falin",
        "soc-camelot"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 8.8,
      "summaryVerdict": "A Tier Legendary Breaker unit (Ayishah) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-ayishah"
    },
    {
      "externalId": "soc-unit-estra",
      "slug": "soc-estra",
      "nameEn": "Estra",
      "nameOriginal": "Estra",
      "styleOrTitle": "Legendary Defender • A Tier",
      "rarity": "Legendary",
      "role": "A Tier (Defender)",
      "roleColumn": "SUSTAIN",
      "element": "Defender",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_8494.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4556,
        "dpOrSpeed": 294,
        "atkOrPower": 1940,
        "defOrGuts": 850,
        "critOrWit": 748,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 79,
        "sustainScore": 96,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Estra Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender",
            "A Tier",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Estra Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Defender"
          ],
          "exactDescription": "Intercepts physical/magic attacks within 2 tiles, reduces damage taken by 30%, and counters with 110% Physical DMG."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for Estra."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-yennefer",
        "soc-geralt",
        "soc-tristan"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "A Tier Legendary Defender unit (Estra) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-estra"
    },
    {
      "externalId": "soc-unit-layla",
      "slug": "soc-layla",
      "nameEn": "Layla",
      "nameOriginal": "Layla",
      "styleOrTitle": "Legendary Destroyer • A Tier",
      "rarity": "Legendary",
      "role": "A Tier (Destroyer)",
      "roleColumn": "DPS",
      "element": "Destroyer",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Layla.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4538,
        "dpOrSpeed": 292,
        "atkOrPower": 1930,
        "defOrGuts": 845,
        "critOrWit": 744,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Layla Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Destroyer",
            "A Tier",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Layla Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Destroyer"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for Layla."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-yserinde",
        "soc-kvare",
        "soc-credenza"
      ],
      "tierOverall": "S",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.7,
      "summaryVerdict": "A Tier Legendary Destroyer unit (Layla) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-layla"
    },
    {
      "externalId": "soc-unit-marcille",
      "slug": "soc-marcille",
      "nameEn": "Marcille",
      "nameOriginal": "Marcille",
      "styleOrTitle": "Legendary Watcher • A Tier",
      "rarity": "Legendary",
      "role": "A Tier (Watcher)",
      "roleColumn": "DPS",
      "element": "Watcher",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0693.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4520,
        "dpOrSpeed": 290,
        "atkOrPower": 1920,
        "defOrGuts": 840,
        "critOrWit": 740,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Marcille Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Watcher",
            "A Tier",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Marcille Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Watcher"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for Marcille."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-lutfi",
        "soc-luvata",
        "soc-sp-inanna"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "A Tier Legendary Watcher unit (Marcille) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-marcille"
    },
    {
      "externalId": "soc-unit-pamina",
      "slug": "soc-pamina",
      "nameEn": "Pamina",
      "nameOriginal": "Pamina",
      "styleOrTitle": "Legendary Seeker • A Tier",
      "rarity": "Legendary",
      "role": "A Tier (Seeker)",
      "roleColumn": "SUB_DPS",
      "element": "Seeker",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Pamina.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4502,
        "dpOrSpeed": 288,
        "atkOrPower": 1910,
        "defOrGuts": 835,
        "critOrWit": 736,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Pamina Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Seeker",
            "A Tier",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Pamina Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Seeker"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for Pamina."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-auguste",
        "soc-cocoa",
        "soc-sp-samantha"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 8.8,
      "summaryVerdict": "A Tier Legendary Seeker unit (Pamina) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-pamina"
    },
    {
      "externalId": "soc-unit-rico",
      "slug": "soc-rico",
      "nameEn": "Rico",
      "nameOriginal": "Rico",
      "styleOrTitle": "Legendary Breaker • A Tier",
      "rarity": "Legendary",
      "role": "A Tier (Breaker)",
      "roleColumn": "DPS",
      "element": "Breaker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0696.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4484,
        "dpOrSpeed": 286,
        "atkOrPower": 1900,
        "defOrGuts": 830,
        "critOrWit": 732,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Rico Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Breaker",
            "A Tier",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Rico Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Breaker"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for Rico."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-taair",
        "soc-ayishah",
        "soc-camelot"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "A Tier Legendary Breaker unit (Rico) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-rico"
    },
    {
      "externalId": "soc-unit-safiyyah",
      "slug": "soc-safiyyah",
      "nameEn": "Safiyyah",
      "nameOriginal": "Safiyyah",
      "styleOrTitle": "Legendary Defender • A Tier",
      "rarity": "Legendary",
      "role": "A Tier (Defender)",
      "roleColumn": "SUSTAIN",
      "element": "Defender",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Safiyyah.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4466,
        "dpOrSpeed": 284,
        "atkOrPower": 1890,
        "defOrGuts": 825,
        "critOrWit": 728,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 79,
        "sustainScore": 96,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Safiyyah Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender",
            "A Tier",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Safiyyah Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Defender"
          ],
          "exactDescription": "Intercepts physical/magic attacks within 2 tiles, reduces damage taken by 30%, and counters with 110% Piercing DMG."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for Safiyyah."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-flavia",
        "soc-geralt",
        "soc-tristan"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 8.7,
      "summaryVerdict": "A Tier Legendary Defender unit (Safiyyah) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-safiyyah"
    },
    {
      "externalId": "soc-unit-sp-rawiyah",
      "slug": "soc-sp-rawiyah",
      "nameEn": "SP Rawiyah",
      "nameOriginal": "SP Rawiyah",
      "styleOrTitle": "Legendary Destroyer • A Tier",
      "rarity": "Legendary",
      "role": "A Tier (Destroyer)",
      "roleColumn": "DPS",
      "element": "Destroyer",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/SP-Rawiyah.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4448,
        "dpOrSpeed": 282,
        "atkOrPower": 1880,
        "defOrGuts": 820,
        "critOrWit": 724,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "SP Rawiyah Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Destroyer",
            "A Tier",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "SP Rawiyah Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Destroyer"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for SP Rawiyah."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-credenza",
        "soc-kvare",
        "soc-yserinde"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "A",
      "numericScore": 8.9,
      "summaryVerdict": "A Tier Legendary Destroyer unit (SP Rawiyah) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-sp-rawiyah"
    },
    {
      "externalId": "soc-unit-ciri",
      "slug": "soc-ciri",
      "nameEn": "Ciri",
      "nameOriginal": "Ciri",
      "styleOrTitle": "Legendary Watcher • A Tier - Support",
      "rarity": "Legendary",
      "role": "A Tier - Support (Watcher)",
      "roleColumn": "SUPPORT",
      "element": "Watcher",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/11/IMG_4943.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4430,
        "dpOrSpeed": 280,
        "atkOrPower": 1870,
        "defOrGuts": 815,
        "critOrWit": 720,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Ciri Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Watcher",
            "A Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Ciri Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Watcher"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Ciri."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-agata",
        "soc-luvata",
        "soc-sp-inanna"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "A Tier - Support Legendary Watcher unit (Ciri) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-ciri"
    },
    {
      "externalId": "soc-unit-cocoa",
      "slug": "soc-cocoa",
      "nameEn": "Cocoa",
      "nameOriginal": "Cocoa",
      "styleOrTitle": "Legendary Seeker • A Tier - Support",
      "rarity": "Legendary",
      "role": "A Tier - Support (Seeker)",
      "roleColumn": "SUPPORT",
      "element": "Seeker",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Cocoa.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4412,
        "dpOrSpeed": 278,
        "atkOrPower": 1860,
        "defOrGuts": 810,
        "critOrWit": 716,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Cocoa Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Seeker",
            "A Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Cocoa Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Seeker"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Cocoa."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-nydia",
        "soc-sp-samantha",
        "soc-sp-safiyyah"
      ],
      "tierOverall": "S",
      "tierReroll": "SS",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "A Tier - Support Legendary Seeker unit (Cocoa) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-cocoa"
    },
    {
      "externalId": "soc-unit-falin",
      "slug": "soc-falin",
      "nameEn": "Falin",
      "nameOriginal": "Falin",
      "styleOrTitle": "Legendary Breaker • A Tier - Support",
      "rarity": "Legendary",
      "role": "A Tier - Support (Breaker)",
      "roleColumn": "SUPPORT",
      "element": "Breaker",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0695.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4394,
        "dpOrSpeed": 276,
        "atkOrPower": 1850,
        "defOrGuts": 805,
        "critOrWit": 712,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Falin Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Breaker",
            "A Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Falin Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Breaker"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Falin."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-triss",
        "soc-kiya",
        "soc-camelot"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "A Tier - Support Legendary Breaker unit (Falin) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-falin"
    },
    {
      "externalId": "soc-unit-flavia",
      "slug": "soc-flavia",
      "nameEn": "Flavia",
      "nameOriginal": "Flavia",
      "styleOrTitle": "Legendary Defender • A Tier - Support",
      "rarity": "Legendary",
      "role": "A Tier - Support (Defender)",
      "roleColumn": "SUPPORT",
      "element": "Defender",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/05/IMG_9176.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4376,
        "dpOrSpeed": 274,
        "atkOrPower": 1840,
        "defOrGuts": 800,
        "critOrWit": 708,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Flavia Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender",
            "A Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Flavia Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Defender"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Flavia."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-geralt",
        "soc-tristan",
        "soc-yennefer"
      ],
      "tierOverall": "S",
      "tierReroll": "SS",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "A Tier - Support Legendary Defender unit (Flavia) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-flavia"
    },
    {
      "externalId": "soc-unit-gloria",
      "slug": "soc-gloria",
      "nameEn": "Gloria",
      "nameOriginal": "Gloria",
      "styleOrTitle": "Legendary Destroyer • A Tier - Support",
      "rarity": "Legendary",
      "role": "A Tier - Support (Destroyer)",
      "roleColumn": "SUPPORT",
      "element": "Destroyer",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Gloria.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4358,
        "dpOrSpeed": 272,
        "atkOrPower": 1830,
        "defOrGuts": 795,
        "critOrWit": 704,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Gloria Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Destroyer",
            "A Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Gloria Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Destroyer"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Gloria."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-layla",
        "soc-kvare",
        "soc-credenza"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "A Tier - Support Legendary Destroyer unit (Gloria) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-gloria"
    },
    {
      "externalId": "soc-unit-homa",
      "slug": "soc-homa",
      "nameEn": "Homa",
      "nameOriginal": "Homa",
      "styleOrTitle": "Legendary Watcher • A Tier - Support",
      "rarity": "Legendary",
      "role": "A Tier - Support (Watcher)",
      "roleColumn": "SUPPORT",
      "element": "Watcher",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Homa.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4340,
        "dpOrSpeed": 270,
        "atkOrPower": 1820,
        "defOrGuts": 790,
        "critOrWit": 700,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Homa Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Watcher",
            "A Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Homa Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Watcher"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Homa."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-sp-inanna",
        "soc-luvata",
        "soc-lutfi"
      ],
      "tierOverall": "S",
      "tierReroll": "SS",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "A Tier - Support Legendary Watcher unit (Homa) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-homa"
    },
    {
      "externalId": "soc-unit-inanna",
      "slug": "soc-inanna",
      "nameEn": "Inanna",
      "nameOriginal": "Inanna",
      "styleOrTitle": "Legendary Seeker • A Tier - Support",
      "rarity": "Legendary",
      "role": "A Tier - Support (Seeker)",
      "roleColumn": "SUPPORT",
      "element": "Seeker",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Inanna.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4322,
        "dpOrSpeed": 268,
        "atkOrPower": 1810,
        "defOrGuts": 785,
        "critOrWit": 696,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Inanna Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Seeker",
            "A Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Inanna Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Seeker"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Inanna."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-auguste",
        "soc-pamina",
        "soc-sp-samantha"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "A Tier - Support Legendary Seeker unit (Inanna) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-inanna"
    },
    {
      "externalId": "soc-unit-nonowill",
      "slug": "soc-nonowill",
      "nameEn": "NonoWill",
      "nameOriginal": "NonoWill",
      "styleOrTitle": "Legendary Breaker • A Tier - Support",
      "rarity": "Legendary",
      "role": "A Tier - Support (Breaker)",
      "roleColumn": "SUPPORT",
      "element": "Breaker",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/NonoWill.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4304,
        "dpOrSpeed": 266,
        "atkOrPower": 1800,
        "defOrGuts": 780,
        "critOrWit": 692,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "NonoWill Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "A Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Breaker",
            "A Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked A Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "NonoWill Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Breaker"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for NonoWill."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-camelot",
        "soc-ayishah",
        "soc-triss"
      ],
      "tierOverall": "S",
      "tierReroll": "SS",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "A Tier - Support Legendary Breaker unit (NonoWill) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-nonowill"
    },
    {
      "externalId": "soc-unit-beryl",
      "slug": "soc-beryl",
      "nameEn": "Beryl",
      "nameOriginal": "Beryl",
      "styleOrTitle": "Legendary Defender • B Tier - DPS",
      "rarity": "Legendary",
      "role": "B Tier - DPS (Defender)",
      "roleColumn": "SUSTAIN",
      "element": "Defender",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Beryl.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4286,
        "dpOrSpeed": 264,
        "atkOrPower": 1790,
        "defOrGuts": 775,
        "critOrWit": 688,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 79,
        "sustainScore": 96,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Beryl Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "B Tier - DPS Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender",
            "B Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked B Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Beryl Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Defender"
          ],
          "exactDescription": "Intercepts physical/magic attacks within 2 tiles, reduces damage taken by 30%, and counters with 110% Piercing DMG."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for Beryl."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-flavia",
        "soc-geralt",
        "soc-tristan"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.3,
      "summaryVerdict": "B Tier - DPS Legendary Defender unit (Beryl) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-beryl"
    },
    {
      "externalId": "soc-unit-caris",
      "slug": "soc-caris",
      "nameEn": "Caris",
      "nameOriginal": "Caris",
      "styleOrTitle": "Legendary Destroyer • B Tier - DPS",
      "rarity": "Legendary",
      "role": "B Tier - DPS (Destroyer)",
      "roleColumn": "DPS",
      "element": "Destroyer",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Caris.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4268,
        "dpOrSpeed": 262,
        "atkOrPower": 1780,
        "defOrGuts": 770,
        "critOrWit": 684,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Caris Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "B Tier - DPS Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Destroyer",
            "B Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked B Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Caris Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Destroyer"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for Caris."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-credenza",
        "soc-kvare",
        "soc-yserinde"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "B",
      "numericScore": 8.2,
      "summaryVerdict": "B Tier - DPS Legendary Destroyer unit (Caris) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-caris"
    },
    {
      "externalId": "soc-unit-col",
      "slug": "soc-col",
      "nameEn": "Col",
      "nameOriginal": "Col",
      "styleOrTitle": "Legendary Watcher • B Tier - DPS",
      "rarity": "Legendary",
      "role": "B Tier - DPS (Watcher)",
      "roleColumn": "DPS",
      "element": "Watcher",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Col.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4250,
        "dpOrSpeed": 260,
        "atkOrPower": 1770,
        "defOrGuts": 765,
        "critOrWit": 680,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Col Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "B Tier - DPS Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Watcher",
            "B Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked B Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Col Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Watcher"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for Col."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-ciri",
        "soc-luvata",
        "soc-sp-inanna"
      ],
      "tierOverall": "A",
      "tierReroll": "B",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": "B Tier - DPS Legendary Watcher unit (Col) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-col"
    },
    {
      "externalId": "soc-unit-hasna",
      "slug": "soc-hasna",
      "nameEn": "Hasna",
      "nameOriginal": "Hasna",
      "styleOrTitle": "Legendary Seeker • B Tier - DPS",
      "rarity": "Legendary",
      "role": "B Tier - DPS (Seeker)",
      "roleColumn": "DPS",
      "element": "Seeker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Hasna.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4232,
        "dpOrSpeed": 258,
        "atkOrPower": 1760,
        "defOrGuts": 760,
        "critOrWit": 676,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Hasna Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "B Tier - DPS Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Seeker",
            "B Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked B Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Hasna Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Seeker"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for Hasna."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-sp-safiyyah",
        "soc-sp-samantha",
        "soc-nydia"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": "B Tier - DPS Legendary Seeker unit (Hasna) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-hasna"
    },
    {
      "externalId": "soc-unit-kiya",
      "slug": "soc-kiya",
      "nameEn": "Kiya",
      "nameOriginal": "Kiya",
      "styleOrTitle": "Legendary Breaker • B Tier - DPS",
      "rarity": "Legendary",
      "role": "B Tier - DPS (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Breaker",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0688.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4214,
        "dpOrSpeed": 256,
        "atkOrPower": 1750,
        "defOrGuts": 755,
        "critOrWit": 672,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Kiya Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "B Tier - DPS Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Breaker",
            "B Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked B Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Kiya Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Breaker"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for Kiya."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-triss",
        "soc-falin",
        "soc-camelot"
      ],
      "tierOverall": "A",
      "tierReroll": "B",
      "tierBossRaid": "S",
      "numericScore": 8.3,
      "summaryVerdict": "B Tier - DPS Legendary Breaker unit (Kiya) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-kiya"
    },
    {
      "externalId": "soc-unit-lilywill",
      "slug": "soc-lilywill",
      "nameEn": "LilyWill",
      "nameOriginal": "LilyWill",
      "styleOrTitle": "Legendary Defender • B Tier - DPS",
      "rarity": "Legendary",
      "role": "B Tier - DPS (Defender)",
      "roleColumn": "SUSTAIN",
      "element": "Defender",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/LilyWill.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4196,
        "dpOrSpeed": 254,
        "atkOrPower": 1740,
        "defOrGuts": 750,
        "critOrWit": 668,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 79,
        "sustainScore": 96,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "LilyWill Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "B Tier - DPS Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender",
            "B Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked B Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "LilyWill Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Defender"
          ],
          "exactDescription": "Intercepts physical/magic attacks within 2 tiles, reduces damage taken by 30%, and counters with 110% Physical DMG."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for LilyWill."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-yennefer",
        "soc-geralt",
        "soc-tristan"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": "B Tier - DPS Legendary Defender unit (LilyWill) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-lilywill"
    },
    {
      "externalId": "soc-unit-momo",
      "slug": "soc-momo",
      "nameEn": "Momo",
      "nameOriginal": "Momo",
      "styleOrTitle": "Legendary Destroyer • B Tier - DPS",
      "rarity": "Legendary",
      "role": "B Tier - DPS (Destroyer)",
      "roleColumn": "DPS",
      "element": "Destroyer",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Momo.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4178,
        "dpOrSpeed": 252,
        "atkOrPower": 1730,
        "defOrGuts": 745,
        "critOrWit": 664,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Momo Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "B Tier - DPS Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Destroyer",
            "B Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked B Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Momo Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Destroyer"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for Momo."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-yserinde",
        "soc-kvare",
        "soc-credenza"
      ],
      "tierOverall": "A",
      "tierReroll": "B",
      "tierBossRaid": "B",
      "numericScore": 8.2,
      "summaryVerdict": "B Tier - DPS Legendary Destroyer unit (Momo) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-momo"
    },
    {
      "externalId": "soc-unit-nungal",
      "slug": "soc-nungal",
      "nameEn": "Nungal",
      "nameOriginal": "Nungal",
      "styleOrTitle": "Legendary Watcher • B Tier - DPS",
      "rarity": "Legendary",
      "role": "B Tier - DPS (Watcher)",
      "roleColumn": "DPS",
      "element": "Watcher",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Nungal.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4160,
        "dpOrSpeed": 250,
        "atkOrPower": 1720,
        "defOrGuts": 740,
        "critOrWit": 660,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Nungal Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "B Tier - DPS Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Watcher",
            "B Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked B Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Nungal Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Watcher"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for Nungal."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-lutfi",
        "soc-luvata",
        "soc-sp-inanna"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": "B Tier - DPS Legendary Watcher unit (Nungal) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-nungal"
    },
    {
      "externalId": "soc-unit-rawiyah",
      "slug": "soc-rawiyah",
      "nameEn": "Rawiyah",
      "nameOriginal": "Rawiyah",
      "styleOrTitle": "Legendary Seeker • B Tier - DPS",
      "rarity": "Legendary",
      "role": "B Tier - DPS (Seeker)",
      "roleColumn": "SUB_DPS",
      "element": "Seeker",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Rawiyah.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4142,
        "dpOrSpeed": 248,
        "atkOrPower": 1710,
        "defOrGuts": 735,
        "critOrWit": 656,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Rawiyah Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "B Tier - DPS Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Seeker",
            "B Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked B Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Rawiyah Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Seeker"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for Rawiyah."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-auguste",
        "soc-cocoa",
        "soc-sp-samantha"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.3,
      "summaryVerdict": "B Tier - DPS Legendary Seeker unit (Rawiyah) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-rawiyah"
    },
    {
      "externalId": "soc-unit-team-meteor",
      "slug": "soc-team-meteor",
      "nameEn": "Team Meteor",
      "nameOriginal": "Team Meteor",
      "styleOrTitle": "Legendary Breaker • B Tier - DPS",
      "rarity": "Legendary",
      "role": "B Tier - DPS (Breaker)",
      "roleColumn": "DPS",
      "element": "Breaker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/05/IMG_9958.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4124,
        "dpOrSpeed": 246,
        "atkOrPower": 1700,
        "defOrGuts": 730,
        "critOrWit": 652,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Team Meteor Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "B Tier - DPS Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Breaker",
            "B Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked B Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Team Meteor Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Breaker"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for Team Meteor."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-taair",
        "soc-ayishah",
        "soc-camelot"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": "B Tier - DPS Legendary Breaker unit (Team Meteor) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-team-meteor"
    },
    {
      "externalId": "soc-unit-acambe",
      "slug": "soc-acambe",
      "nameEn": "Acambe",
      "nameOriginal": "Acambe",
      "styleOrTitle": "Legendary Defender • B Tier - Support",
      "rarity": "Legendary",
      "role": "B Tier - Support (Defender)",
      "roleColumn": "SUPPORT",
      "element": "Defender",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Acambe.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4106,
        "dpOrSpeed": 244,
        "atkOrPower": 1690,
        "defOrGuts": 725,
        "critOrWit": 648,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Acambe Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "B Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender",
            "B Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked B Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Acambe Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Defender"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Acambe."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-tristan",
        "soc-geralt",
        "soc-yennefer"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": "B Tier - Support Legendary Defender unit (Acambe) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-acambe"
    },
    {
      "externalId": "soc-unit-afra",
      "slug": "soc-afra",
      "nameEn": "Afra",
      "nameOriginal": "Afra",
      "styleOrTitle": "Legendary Destroyer • B Tier - Support",
      "rarity": "Legendary",
      "role": "B Tier - Support (Destroyer)",
      "roleColumn": "SUPPORT",
      "element": "Destroyer",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0690.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4088,
        "dpOrSpeed": 242,
        "atkOrPower": 1680,
        "defOrGuts": 720,
        "critOrWit": 644,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Afra Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "B Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Destroyer",
            "B Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked B Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Afra Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Destroyer"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Afra."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-kvare",
        "soc-credenza",
        "soc-yserinde"
      ],
      "tierOverall": "A",
      "tierReroll": "S",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": "B Tier - Support Legendary Destroyer unit (Afra) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-afra"
    },
    {
      "externalId": "soc-unit-edda",
      "slug": "soc-edda",
      "nameEn": "Edda",
      "nameOriginal": "Edda",
      "styleOrTitle": "Legendary Watcher • B Tier - Support",
      "rarity": "Legendary",
      "role": "B Tier - Support (Watcher)",
      "roleColumn": "SUPPORT",
      "element": "Watcher",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Edda.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4070,
        "dpOrSpeed": 240,
        "atkOrPower": 1670,
        "defOrGuts": 715,
        "critOrWit": 640,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Edda Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "B Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Watcher",
            "B Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked B Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Edda Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Watcher"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Edda."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-agata",
        "soc-luvata",
        "soc-sp-inanna"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "B Tier - Support Legendary Watcher unit (Edda) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-edda"
    },
    {
      "externalId": "soc-unit-samantha",
      "slug": "soc-samantha",
      "nameEn": "Samantha",
      "nameOriginal": "Samantha",
      "styleOrTitle": "Legendary Seeker • B Tier - Support",
      "rarity": "Legendary",
      "role": "B Tier - Support (Seeker)",
      "roleColumn": "SUPPORT",
      "element": "Seeker",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Samantha.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4052,
        "dpOrSpeed": 238,
        "atkOrPower": 1660,
        "defOrGuts": 710,
        "critOrWit": 636,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Samantha Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "B Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Seeker",
            "B Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked B Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Samantha Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Seeker"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Samantha."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-nydia",
        "soc-sp-samantha",
        "soc-sp-safiyyah"
      ],
      "tierOverall": "A",
      "tierReroll": "S",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": "B Tier - Support Legendary Seeker unit (Samantha) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-samantha"
    },
    {
      "externalId": "soc-unit-schacklulu",
      "slug": "soc-schacklulu",
      "nameEn": "SchackLulu",
      "nameOriginal": "SchackLulu",
      "styleOrTitle": "Legendary Breaker • B Tier - Support",
      "rarity": "Legendary",
      "role": "B Tier - Support (Breaker)",
      "roleColumn": "SUPPORT",
      "element": "Breaker",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0687.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4034,
        "dpOrSpeed": 236,
        "atkOrPower": 1650,
        "defOrGuts": 705,
        "critOrWit": 632,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "SchackLulu Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "B Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Breaker",
            "B Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked B Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "SchackLulu Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Breaker"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for SchackLulu."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-triss",
        "soc-kiya",
        "soc-camelot"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": "B Tier - Support Legendary Breaker unit (SchackLulu) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-schacklulu"
    },
    {
      "externalId": "soc-unit-senshi",
      "slug": "soc-senshi",
      "nameEn": "Senshi",
      "nameOriginal": "Senshi",
      "styleOrTitle": "Legendary Defender • B Tier - Support",
      "rarity": "Legendary",
      "role": "B Tier - Support (Defender)",
      "roleColumn": "SUPPORT",
      "element": "Defender",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/08/IMG_2307.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4016,
        "dpOrSpeed": 234,
        "atkOrPower": 1640,
        "defOrGuts": 700,
        "critOrWit": 628,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Senshi Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "B Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender",
            "B Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked B Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Senshi Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Defender"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Senshi."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-geralt",
        "soc-tristan",
        "soc-yennefer"
      ],
      "tierOverall": "A",
      "tierReroll": "S",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": "B Tier - Support Legendary Defender unit (Senshi) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-senshi"
    },
    {
      "externalId": "soc-unit-simona",
      "slug": "soc-simona",
      "nameEn": "Simona",
      "nameOriginal": "Simona",
      "styleOrTitle": "Legendary Destroyer • B Tier - Support",
      "rarity": "Legendary",
      "role": "B Tier - Support (Destroyer)",
      "roleColumn": "SUPPORT",
      "element": "Destroyer",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Simona.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3998,
        "dpOrSpeed": 232,
        "atkOrPower": 1630,
        "defOrGuts": 695,
        "critOrWit": 624,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Simona Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "B Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Destroyer",
            "B Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked B Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Simona Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Destroyer"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Simona."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-layla",
        "soc-kvare",
        "soc-credenza"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "B Tier - Support Legendary Destroyer unit (Simona) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-simona"
    },
    {
      "externalId": "soc-unit-alexei",
      "slug": "soc-alexei",
      "nameEn": "Alexei",
      "nameOriginal": "Alexei",
      "styleOrTitle": "Legendary Watcher • C Tier - DPS",
      "rarity": "Legendary",
      "role": "C Tier - DPS (Watcher)",
      "roleColumn": "DPS",
      "element": "Watcher",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Alexei.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3980,
        "dpOrSpeed": 230,
        "atkOrPower": 1620,
        "defOrGuts": 690,
        "critOrWit": 620,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Alexei Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "C Tier - DPS Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Watcher",
            "C Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked C Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Alexei Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Watcher"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for Alexei."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-lutfi",
        "soc-luvata",
        "soc-sp-inanna"
      ],
      "tierOverall": "B",
      "tierReroll": "B",
      "tierBossRaid": "B",
      "numericScore": 7.6,
      "summaryVerdict": "C Tier - DPS Legendary Watcher unit (Alexei) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-alexei"
    },
    {
      "externalId": "soc-unit-dantalion",
      "slug": "soc-dantalion",
      "nameEn": "Dantalion",
      "nameOriginal": "Dantalion",
      "styleOrTitle": "Legendary Seeker • C Tier - DPS",
      "rarity": "Legendary",
      "role": "C Tier - DPS (Seeker)",
      "roleColumn": "DPS",
      "element": "Seeker",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Dantalion.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3962,
        "dpOrSpeed": 228,
        "atkOrPower": 1610,
        "defOrGuts": 685,
        "critOrWit": 616,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Dantalion Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "C Tier - DPS Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Seeker",
            "C Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked C Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Dantalion Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Seeker"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for Dantalion."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-cocoa",
        "soc-pamina",
        "soc-sp-samantha"
      ],
      "tierOverall": "B",
      "tierReroll": "C",
      "tierBossRaid": "B",
      "numericScore": 7.6,
      "summaryVerdict": "C Tier - DPS Legendary Seeker unit (Dantalion) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-dantalion"
    },
    {
      "externalId": "soc-unit-faycal",
      "slug": "soc-faycal",
      "nameEn": "Faycal",
      "nameOriginal": "Faycal",
      "styleOrTitle": "Legendary Breaker • C Tier - DPS",
      "rarity": "Legendary",
      "role": "C Tier - DPS (Breaker)",
      "roleColumn": "DPS",
      "element": "Breaker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Faycal.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3944,
        "dpOrSpeed": 226,
        "atkOrPower": 1600,
        "defOrGuts": 680,
        "critOrWit": 612,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Faycal Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "C Tier - DPS Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Breaker",
            "C Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked C Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Faycal Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Breaker"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for Faycal."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-taair",
        "soc-ayishah",
        "soc-camelot"
      ],
      "tierOverall": "B",
      "tierReroll": "B",
      "tierBossRaid": "B",
      "numericScore": 7.8,
      "summaryVerdict": "C Tier - DPS Legendary Breaker unit (Faycal) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-faycal"
    },
    {
      "externalId": "soc-unit-garcia",
      "slug": "soc-garcia",
      "nameEn": "Garcia",
      "nameOriginal": "Garcia",
      "styleOrTitle": "Legendary Defender • C Tier - DPS",
      "rarity": "Legendary",
      "role": "C Tier - DPS (Defender)",
      "roleColumn": "SUSTAIN",
      "element": "Defender",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Garcia.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3926,
        "dpOrSpeed": 224,
        "atkOrPower": 1590,
        "defOrGuts": 675,
        "critOrWit": 608,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 79,
        "sustainScore": 96,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Garcia Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "C Tier - DPS Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender",
            "C Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked C Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Garcia Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Defender"
          ],
          "exactDescription": "Intercepts physical/magic attacks within 2 tiles, reduces damage taken by 30%, and counters with 110% Piercing DMG."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for Garcia."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-flavia",
        "soc-geralt",
        "soc-tristan"
      ],
      "tierOverall": "B",
      "tierReroll": "B",
      "tierBossRaid": "A",
      "numericScore": 7.7,
      "summaryVerdict": "C Tier - DPS Legendary Defender unit (Garcia) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-garcia"
    },
    {
      "externalId": "soc-unit-guzman",
      "slug": "soc-guzman",
      "nameEn": "Guzman",
      "nameOriginal": "Guzman",
      "styleOrTitle": "Legendary Destroyer • C Tier - DPS",
      "rarity": "Legendary",
      "role": "C Tier - DPS (Destroyer)",
      "roleColumn": "DPS",
      "element": "Destroyer",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Guzman.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3908,
        "dpOrSpeed": 222,
        "atkOrPower": 1580,
        "defOrGuts": 670,
        "critOrWit": 604,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Guzman Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "C Tier - DPS Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Destroyer",
            "C Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked C Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Guzman Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Destroyer"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for Guzman."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-credenza",
        "soc-kvare",
        "soc-yserinde"
      ],
      "tierOverall": "B",
      "tierReroll": "B",
      "tierBossRaid": "C",
      "numericScore": 7.6,
      "summaryVerdict": "C Tier - DPS Legendary Destroyer unit (Guzman) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-guzman"
    },
    {
      "externalId": "soc-unit-iggy",
      "slug": "soc-iggy",
      "nameEn": "Iggy",
      "nameOriginal": "Iggy",
      "styleOrTitle": "Legendary Watcher • C Tier - DPS",
      "rarity": "Legendary",
      "role": "C Tier - DPS (Watcher)",
      "roleColumn": "DPS",
      "element": "Watcher",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Iggy.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3890,
        "dpOrSpeed": 220,
        "atkOrPower": 1570,
        "defOrGuts": 665,
        "critOrWit": 600,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Iggy Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "C Tier - DPS Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Watcher",
            "C Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked C Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Iggy Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Watcher"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for Iggy."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-ciri",
        "soc-luvata",
        "soc-sp-inanna"
      ],
      "tierOverall": "B",
      "tierReroll": "C",
      "tierBossRaid": "B",
      "numericScore": 7.6,
      "summaryVerdict": "C Tier - DPS Legendary Watcher unit (Iggy) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-iggy"
    },
    {
      "externalId": "soc-unit-leonide",
      "slug": "soc-leonide",
      "nameEn": "Leonide",
      "nameOriginal": "Leonide",
      "styleOrTitle": "Legendary Seeker • C Tier - DPS",
      "rarity": "Legendary",
      "role": "C Tier - DPS (Seeker)",
      "roleColumn": "DPS",
      "element": "Seeker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Leonide.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3872,
        "dpOrSpeed": 218,
        "atkOrPower": 1560,
        "defOrGuts": 660,
        "critOrWit": 596,
        "burstCeilingScore": 97,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Leonide Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "C Tier - DPS Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Seeker",
            "C Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked C Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Leonide Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Seeker"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for Leonide."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-sp-safiyyah",
        "soc-sp-samantha",
        "soc-nydia"
      ],
      "tierOverall": "B",
      "tierReroll": "B",
      "tierBossRaid": "B",
      "numericScore": 7.8,
      "summaryVerdict": "C Tier - DPS Legendary Seeker unit (Leonide) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-leonide"
    },
    {
      "externalId": "soc-unit-miguel",
      "slug": "soc-miguel",
      "nameEn": "Miguel",
      "nameOriginal": "Miguel",
      "styleOrTitle": "Legendary Breaker • C Tier - DPS",
      "rarity": "Legendary",
      "role": "C Tier - DPS (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Breaker",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Miguel.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3854,
        "dpOrSpeed": 216,
        "atkOrPower": 1550,
        "defOrGuts": 655,
        "critOrWit": 592,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 79,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Miguel Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "C Tier - DPS Tactical Ultimate (Piercing)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Breaker",
            "C Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked C Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Piercing multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Miguel Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Breaker"
          ],
          "exactDescription": "Grants an Instant Action movement boost, +25% Crit Rate, and 20% Armor Piercing before striking."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Piercing multiplier boost for Miguel."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-triss",
        "soc-falin",
        "soc-camelot"
      ],
      "tierOverall": "B",
      "tierReroll": "B",
      "tierBossRaid": "A",
      "numericScore": 7.7,
      "summaryVerdict": "C Tier - DPS Legendary Breaker unit (Miguel) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-miguel"
    },
    {
      "externalId": "soc-unit-xavier",
      "slug": "soc-xavier",
      "nameEn": "Xavier",
      "nameOriginal": "Xavier",
      "styleOrTitle": "Legendary Defender • C Tier - DPS",
      "rarity": "Legendary",
      "role": "C Tier - DPS (Defender)",
      "roleColumn": "SUSTAIN",
      "element": "Defender",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Xavier.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3836,
        "dpOrSpeed": 214,
        "atkOrPower": 1540,
        "defOrGuts": 650,
        "critOrWit": 588,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 79,
        "sustainScore": 96,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Xavier Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "C Tier - DPS Tactical Ultimate (Physical)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender",
            "C Tier - DPS",
            "Faction Aura"
          ],
          "exactDescription": "Ranked C Tier - DPS in the Sword of Convallaria Tactical Tier List. Delivers 185% Physical multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Xavier Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Defender"
          ],
          "exactDescription": "Intercepts physical/magic attacks within 2 tiles, reduces damage taken by 30%, and counters with 110% Physical DMG."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Physical multiplier boost for Xavier."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-yennefer",
        "soc-geralt",
        "soc-tristan"
      ],
      "tierOverall": "B",
      "tierReroll": "B",
      "tierBossRaid": "B",
      "numericScore": 7.6,
      "summaryVerdict": "C Tier - DPS Legendary Defender unit (Xavier) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-xavier"
    },
    {
      "externalId": "soc-unit-maitha",
      "slug": "soc-maitha",
      "nameEn": "Maitha",
      "nameOriginal": "Maitha",
      "styleOrTitle": "Legendary Destroyer • C Tier - Support",
      "rarity": "Legendary",
      "role": "C Tier - Support (Destroyer)",
      "roleColumn": "SUPPORT",
      "element": "Destroyer",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Maitha.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3818,
        "dpOrSpeed": 212,
        "atkOrPower": 1530,
        "defOrGuts": 645,
        "critOrWit": 584,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Maitha Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "C Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Destroyer",
            "C Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked C Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Maitha Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Destroyer"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Maitha."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-layla",
        "soc-kvare",
        "soc-credenza"
      ],
      "tierOverall": "B",
      "tierReroll": "B",
      "tierBossRaid": "B",
      "numericScore": 7.6,
      "summaryVerdict": "C Tier - Support Legendary Destroyer unit (Maitha) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-maitha"
    },
    {
      "externalId": "soc-unit-nergal",
      "slug": "soc-nergal",
      "nameEn": "Nergal",
      "nameOriginal": "Nergal",
      "styleOrTitle": "Legendary Watcher • C Tier - Support",
      "rarity": "Legendary",
      "role": "C Tier - Support (Watcher)",
      "roleColumn": "SUPPORT",
      "element": "Watcher",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Nergal.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3800,
        "dpOrSpeed": 210,
        "atkOrPower": 1520,
        "defOrGuts": 640,
        "critOrWit": 580,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Nergal Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "C Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Watcher",
            "C Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked C Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Nergal Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Watcher"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Nergal."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-sp-inanna",
        "soc-luvata",
        "soc-lutfi"
      ],
      "tierOverall": "B",
      "tierReroll": "A",
      "tierBossRaid": "B",
      "numericScore": 7.8,
      "summaryVerdict": "C Tier - Support Legendary Watcher unit (Nergal) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-nergal"
    },
    {
      "externalId": "soc-unit-teadon",
      "slug": "soc-teadon",
      "nameEn": "Teadon",
      "nameOriginal": "Teadon",
      "styleOrTitle": "Legendary Seeker • C Tier - Support",
      "rarity": "Legendary",
      "role": "C Tier - Support (Seeker)",
      "roleColumn": "SUPPORT",
      "element": "Seeker",
      "attackType": "Magic",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Teadon.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3782,
        "dpOrSpeed": 208,
        "atkOrPower": 1510,
        "defOrGuts": 635,
        "critOrWit": 576,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 98,
        "sustainScore": 78,
        "spEfficiencyScore": 93
      },
      "skills": [
        {
          "name": "Teadon Signature Skill",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG",
          "multiplierSummary": "C Tier - Support Tactical Ultimate (Magic)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Seeker",
            "C Tier - Support",
            "Faction Aura"
          ],
          "exactDescription": "Ranked C Tier - Support in the Sword of Convallaria Tactical Tier List. Delivers 185% Magic multiplier with high turn efficiency in Tower of Adversity and Weaponry Trials."
        },
        {
          "name": "Teadon Trait Reaction",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG",
          "multiplierSummary": "Instant Action + 1★–5★ Trait Scaling",
          "hitCount": 1,
          "buffCategoryTags": [
            "Memory Shard Farmable",
            "Seeker"
          ],
          "exactDescription": "Restores +2 NRG to nearby allies, dispels 2 debuffs, and applies Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "3-Star",
          "name": "3★ Trait Power Spike",
          "effect": "Unlocks core turn-economy (+1 NRG per turn) and +18% Magic multiplier boost for Teadon."
        },
        {
          "unlockRank": "5-Star",
          "name": "5★ Maximum Trait Mastery",
          "effect": "Maximizes stat scaling (+30% ATK/DEF) and resets skill cooldowns on critical or assistive actions."
        }
      ],
      "synergyUnitSlugs": [
        "soc-auguste",
        "soc-pamina",
        "soc-sp-samantha"
      ],
      "tierOverall": "B",
      "tierReroll": "B",
      "tierBossRaid": "B",
      "numericScore": 7.7,
      "summaryVerdict": "C Tier - Support Legendary Seeker unit (Teadon) with high tactical impact in Tower of Adversity and Weaponry Trials.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-teadon"
    }
  ],
  "equipments": [
    {
      "externalId": "soc-gear-soc-wp-blade-of-strategem",
      "slug": "soc-wp-blade-of-strategem",
      "nameEn": "Blade of Strategem",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (S Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/09/IMG_2877.webp",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "S Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked S Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Blade of Strategem).",
      "bestHolderSlugs": [
        "soc-sp-inanna",
        "soc-lilywill",
        "soc-senshi"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-blade-of-strategem"
    },
    {
      "externalId": "soc-gear-soc-wp-diffusing-prism",
      "slug": "soc-wp-diffusing-prism",
      "nameEn": "Diffusing Prism",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (S Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5157.webp",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "S Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked S Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Diffusing Prism).",
      "bestHolderSlugs": [
        "soc-sp-inanna",
        "soc-sp-samantha",
        "soc-auguste",
        "soc-layla",
        "soc-nonowill",
        "soc-senshi",
        "soc-simona"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-diffusing-prism"
    },
    {
      "externalId": "soc-gear-soc-wp-double-sided-halberd",
      "slug": "soc-wp-double-sided-halberd",
      "nameEn": "Double-Sided Halberd",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (S Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5150.webp",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "S Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked S Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Double-Sided Halberd).",
      "bestHolderSlugs": [
        "soc-sp-inanna",
        "soc-camelot",
        "soc-senshi",
        "soc-alexei"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-double-sided-halberd"
    },
    {
      "externalId": "soc-gear-soc-wp-feast-axe",
      "slug": "soc-wp-feast-axe",
      "nameEn": "Feast Axe",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (S Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5152.webp",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "S Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked S Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Feast Axe).",
      "bestHolderSlugs": [
        "soc-geralt",
        "soc-gloria",
        "soc-dantalion"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-feast-axe"
    },
    {
      "externalId": "soc-gear-soc-wp-gale-sword",
      "slug": "soc-wp-gale-sword",
      "nameEn": "Gale Sword",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (S Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/09/IMG_2864.webp",
      "tierRank": "SSS",
      "score": 9.6,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "S Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked S Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Gale Sword).",
      "bestHolderSlugs": [
        "soc-sp-samantha",
        "soc-kvare",
        "soc-lutfi",
        "soc-ayishah",
        "soc-beryl",
        "soc-simona",
        "soc-faycal",
        "soc-xavier"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-gale-sword"
    },
    {
      "externalId": "soc-gear-soc-wp-longbow-of-martyrs",
      "slug": "soc-wp-longbow-of-martyrs",
      "nameEn": "Longbow of Martyrs",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (S Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5179.webp",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "S Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked S Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Longbow of Martyrs).",
      "bestHolderSlugs": [
        "soc-luvata",
        "soc-momo",
        "soc-garcia"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-longbow-of-martyrs"
    },
    {
      "externalId": "soc-gear-soc-wp-melee-mega-crossbow",
      "slug": "soc-wp-melee-mega-crossbow",
      "nameEn": "Melee Mega Crossbow",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (S Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5156.webp",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "S Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked S Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Melee Mega Crossbow).",
      "bestHolderSlugs": [
        "soc-nydia",
        "soc-marcille",
        "soc-guzman"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-melee-mega-crossbow"
    },
    {
      "externalId": "soc-gear-soc-wp-newborn-blade",
      "slug": "soc-wp-newborn-blade",
      "nameEn": "Newborn Blade",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (S Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5148.webp",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "S Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked S Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Newborn Blade).",
      "bestHolderSlugs": [
        "soc-sp-samantha",
        "soc-camelot",
        "soc-triss",
        "soc-estra",
        "soc-caris",
        "soc-simona",
        "soc-alexei",
        "soc-iggy"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-newborn-blade"
    },
    {
      "externalId": "soc-gear-soc-wp-nocturnal-glow",
      "slug": "soc-wp-nocturnal-glow",
      "nameEn": "Nocturnal Glow",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (S Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/09/IMG_2868.webp",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "S Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked S Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Nocturnal Glow).",
      "bestHolderSlugs": [
        "soc-tristan",
        "soc-homa",
        "soc-leonide"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-nocturnal-glow"
    },
    {
      "externalId": "soc-gear-soc-wp-reorganized-cube",
      "slug": "soc-wp-reorganized-cube",
      "nameEn": "Reorganized Cube",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (S Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5162.webp",
      "tierRank": "SSS",
      "score": 9.6,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "S Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked S Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Reorganized Cube).",
      "bestHolderSlugs": [
        "soc-credenza",
        "soc-sp-safiyyah",
        "soc-miguel",
        "soc-maitha"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-reorganized-cube"
    },
    {
      "externalId": "soc-gear-soc-wp-starry-sky-heritage",
      "slug": "soc-wp-starry-sky-heritage",
      "nameEn": "Starry Sky Heritage",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (S Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5161.webp",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "S Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked S Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Starry Sky Heritage).",
      "bestHolderSlugs": [
        "soc-geralt",
        "soc-lutfi",
        "soc-layla",
        "soc-col",
        "soc-nungal",
        "soc-dantalion",
        "soc-xavier"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-starry-sky-heritage"
    },
    {
      "externalId": "soc-gear-soc-wp-void-stab",
      "slug": "soc-wp-void-stab",
      "nameEn": "Void Stab",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (S Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5149.webp",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "S Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked S Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Void Stab).",
      "bestHolderSlugs": [
        "soc-sp-safiyyah",
        "soc-pamina",
        "soc-maitha"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-void-stab"
    },
    {
      "externalId": "soc-gear-soc-wp-focus-wand",
      "slug": "soc-wp-focus-wand",
      "nameEn": "Focus Wand",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (A Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5153.webp",
      "tierRank": "SS",
      "score": 9.1,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "A Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked A Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Focus Wand).",
      "bestHolderSlugs": [
        "soc-camelot",
        "soc-taair",
        "soc-alexei",
        "soc-nergal"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-focus-wand"
    },
    {
      "externalId": "soc-gear-soc-wp-hammer-dragon-rise",
      "slug": "soc-wp-hammer-dragon-rise",
      "nameEn": "Hammer “Dragon Rise!”",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (A Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/09/IMG_2879.webp",
      "tierRank": "SS",
      "score": 9.1,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "A Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked A Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Hammer “Dragon Rise!”).",
      "bestHolderSlugs": [
        "soc-kvare",
        "soc-yennefer",
        "soc-marcille",
        "soc-inanna",
        "soc-hasna",
        "soc-faycal",
        "soc-teadon"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-hammer-dragon-rise"
    },
    {
      "externalId": "soc-gear-soc-wp-nightmare-puppet",
      "slug": "soc-wp-nightmare-puppet",
      "nameEn": "Nightmare Puppet",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (A Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/09/IMG_2869.webp",
      "tierRank": "SS",
      "score": 9,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "A Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked A Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Nightmare Puppet).",
      "bestHolderSlugs": [
        "soc-taair",
        "soc-yserinde",
        "soc-nergal"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-nightmare-puppet"
    },
    {
      "externalId": "soc-gear-soc-wp-nirvana",
      "slug": "soc-wp-nirvana",
      "nameEn": "Nirvana",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (A Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/09/IMG_2870.webp",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "A Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked A Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Nirvana).",
      "bestHolderSlugs": [
        "soc-agata",
        "soc-rawiyah",
        "soc-estra"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-nirvana"
    },
    {
      "externalId": "soc-gear-soc-wp-tuning-hammer",
      "slug": "soc-wp-tuning-hammer",
      "nameEn": "Tuning Hammer",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (A Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5178.webp",
      "tierRank": "SS",
      "score": 9.2,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "A Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked A Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Tuning Hammer).",
      "bestHolderSlugs": [
        "soc-luvata",
        "soc-auguste",
        "soc-pamina",
        "soc-rico",
        "soc-kiya",
        "soc-garcia"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-tuning-hammer"
    },
    {
      "externalId": "soc-gear-soc-wp-army-breaking-spear",
      "slug": "soc-wp-army-breaking-spear",
      "nameEn": "Army-Breaking Spear",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/09/IMG_2867.webp",
      "tierRank": "S",
      "score": 8.5,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Army-Breaking Spear).",
      "bestHolderSlugs": [
        "soc-geralt",
        "soc-ayishah",
        "soc-dantalion"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-army-breaking-spear"
    },
    {
      "externalId": "soc-gear-soc-wp-barbecue-hammer",
      "slug": "soc-wp-barbecue-hammer",
      "nameEn": "Barbecue Hammer",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/09/IMG_2873.webp",
      "tierRank": "S",
      "score": 8.5,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Barbecue Hammer).",
      "bestHolderSlugs": [
        "soc-estra",
        "soc-nonowill",
        "soc-pamina"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-barbecue-hammer"
    },
    {
      "externalId": "soc-gear-soc-wp-brutal-axe",
      "slug": "soc-wp-brutal-axe",
      "nameEn": "Brutal Axe",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5159.webp",
      "tierRank": "S",
      "score": 8.4,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Brutal Axe).",
      "bestHolderSlugs": [
        "soc-nydia",
        "soc-yennefer",
        "soc-layla",
        "soc-rico",
        "soc-lilywill",
        "soc-guzman",
        "soc-teadon"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-brutal-axe"
    },
    {
      "externalId": "soc-gear-soc-wp-cornucopia-axe",
      "slug": "soc-wp-cornucopia-axe",
      "nameEn": "Cornucopia Axe",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5187.webp",
      "tierRank": "S",
      "score": 8.7,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Cornucopia Axe).",
      "bestHolderSlugs": [
        "soc-marcille",
        "soc-team-meteor",
        "soc-safiyyah"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-cornucopia-axe"
    },
    {
      "externalId": "soc-gear-soc-wp-cornucopia-bow",
      "slug": "soc-wp-cornucopia-bow",
      "nameEn": "Cornucopia Bow",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5188.webp",
      "tierRank": "S",
      "score": 8.6,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Cornucopia Bow).",
      "bestHolderSlugs": [
        "soc-pamina",
        "soc-safiyyah",
        "soc-sp-rawiyah"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-cornucopia-bow"
    },
    {
      "externalId": "soc-gear-soc-wp-cornucopia-spear",
      "slug": "soc-wp-cornucopia-spear",
      "nameEn": "Cornucopia Spear",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5186.webp",
      "tierRank": "S",
      "score": 8.5,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Cornucopia Spear).",
      "bestHolderSlugs": [
        "soc-kvare",
        "soc-triss",
        "soc-rico",
        "soc-safiyyah",
        "soc-momo",
        "soc-faycal",
        "soc-iggy"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-cornucopia-spear"
    },
    {
      "externalId": "soc-gear-soc-wp-cornucopia-staff",
      "slug": "soc-wp-cornucopia-staff",
      "nameEn": "Cornucopia Staff",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5173.webp",
      "tierRank": "S",
      "score": 8.5,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Cornucopia Staff).",
      "bestHolderSlugs": [
        "soc-safiyyah",
        "soc-beryl",
        "soc-cocoa"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-cornucopia-staff"
    },
    {
      "externalId": "soc-gear-soc-wp-cornucopia-dagger",
      "slug": "soc-wp-cornucopia-dagger",
      "nameEn": "Cornucopia Dagger",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5172.webp",
      "tierRank": "S",
      "score": 8.4,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Cornucopia Dagger).",
      "bestHolderSlugs": [
        "soc-yserinde",
        "soc-sp-rawiyah",
        "soc-falin"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-cornucopia-dagger"
    },
    {
      "externalId": "soc-gear-soc-wp-dawnlight",
      "slug": "soc-wp-dawnlight",
      "nameEn": "Dawnlight",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/09/IMG_2878.webp",
      "tierRank": "S",
      "score": 8.7,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Dawnlight).",
      "bestHolderSlugs": [
        "soc-tristan",
        "soc-sp-rawiyah",
        "soc-ciri",
        "soc-nungal",
        "soc-acambe",
        "soc-leonide"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-dawnlight"
    },
    {
      "externalId": "soc-gear-soc-wp-dawnmoon",
      "slug": "soc-wp-dawnmoon",
      "nameEn": "Dawnmoon",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/09/IMG_2874.webp",
      "tierRank": "S",
      "score": 8.6,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Dawnmoon).",
      "bestHolderSlugs": [
        "soc-sp-rawiyah",
        "soc-cocoa",
        "soc-gloria"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-dawnmoon"
    },
    {
      "externalId": "soc-gear-soc-wp-denial-hammer",
      "slug": "soc-wp-denial-hammer",
      "nameEn": "Denial Hammer",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5175.webp",
      "tierRank": "S",
      "score": 8.5,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Denial Hammer).",
      "bestHolderSlugs": [
        "soc-luvata",
        "soc-falin",
        "soc-garcia"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-denial-hammer"
    },
    {
      "externalId": "soc-gear-soc-wp-ever-burning-blade",
      "slug": "soc-wp-ever-burning-blade",
      "nameEn": "Ever-Burning Blade",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5163.webp",
      "tierRank": "S",
      "score": 8.5,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Ever-Burning Blade).",
      "bestHolderSlugs": [
        "soc-credenza",
        "soc-ciri",
        "soc-flavia",
        "soc-caris",
        "soc-rawiyah",
        "soc-miguel"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-ever-burning-blade"
    },
    {
      "externalId": "soc-gear-soc-wp-frostspine-grip",
      "slug": "soc-wp-frostspine-grip",
      "nameEn": "Frostspine Grip",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/09/IMG_2882.webp",
      "tierRank": "S",
      "score": 8.4,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Frostspine Grip).",
      "bestHolderSlugs": [
        "soc-agata",
        "soc-gloria",
        "soc-nonowill"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-frostspine-grip"
    },
    {
      "externalId": "soc-gear-soc-wp-irian-combat-bow",
      "slug": "soc-wp-irian-combat-bow",
      "nameEn": "Irian Combat Bow",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5151.webp",
      "tierRank": "S",
      "score": 8.7,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Irian Combat Bow).",
      "bestHolderSlugs": [
        "soc-homa",
        "soc-afra",
        "soc-beryl"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-irian-combat-bow"
    },
    {
      "externalId": "soc-gear-soc-wp-life-fondness",
      "slug": "soc-wp-life-fondness",
      "nameEn": "Life Fondness",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/09/IMG_2872.webp",
      "tierRank": "S",
      "score": 8.6,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Life Fondness).",
      "bestHolderSlugs": [
        "soc-lutfi",
        "soc-ciri",
        "soc-cocoa",
        "soc-inanna",
        "soc-team-meteor",
        "soc-xavier"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-life-fondness"
    },
    {
      "externalId": "soc-gear-soc-wp-magic-ladle",
      "slug": "soc-wp-magic-ladle",
      "nameEn": "Magic Ladle",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/09/IMG_2880.webp",
      "tierRank": "S",
      "score": 8.5,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Magic Ladle).",
      "bestHolderSlugs": [
        "soc-nydia",
        "soc-nonowill",
        "soc-guzman"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-magic-ladle"
    },
    {
      "externalId": "soc-gear-soc-wp-paradox-crystal-chain",
      "slug": "soc-wp-paradox-crystal-chain",
      "nameEn": "Paradox Crystal Chain",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/09/IMG_2883.webp",
      "tierRank": "S",
      "score": 8.5,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Paradox Crystal Chain).",
      "bestHolderSlugs": [
        "soc-beryl",
        "soc-col",
        "soc-hasna"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-paradox-crystal-chain"
    },
    {
      "externalId": "soc-gear-soc-wp-skeleton-spear",
      "slug": "soc-wp-skeleton-spear",
      "nameEn": "Skeleton Spear",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5164.webp",
      "tierRank": "S",
      "score": 8.4,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Skeleton Spear).",
      "bestHolderSlugs": [
        "soc-sp-safiyyah",
        "soc-auguste",
        "soc-falin",
        "soc-caris",
        "soc-acambe",
        "soc-maitha"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-skeleton-spear"
    },
    {
      "externalId": "soc-gear-soc-wp-star-raid-crossbow",
      "slug": "soc-wp-star-raid-crossbow",
      "nameEn": "Star Raid Crossbow",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (B Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5166.webp",
      "tierRank": "S",
      "score": 8.7,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "B Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked B Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Star Raid Crossbow).",
      "bestHolderSlugs": [
        "soc-col",
        "soc-edda",
        "soc-lilywill"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-star-raid-crossbow"
    },
    {
      "externalId": "soc-gear-soc-wp-guardian-s-will",
      "slug": "soc-wp-guardian-s-will",
      "nameEn": "Guardian's Will",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (C Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5185.webp",
      "tierRank": "A",
      "score": 8,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "C Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked C Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Guardian's Will).",
      "bestHolderSlugs": [
        "soc-cocoa",
        "soc-hasna",
        "soc-momo"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-guardian-s-will"
    },
    {
      "externalId": "soc-gear-soc-wp-hollow-axe",
      "slug": "soc-wp-hollow-axe",
      "nameEn": "Hollow Axe",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (C Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5160.webp",
      "tierRank": "A",
      "score": 7.9,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "C Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked C Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Hollow Axe).",
      "bestHolderSlugs": [
        "soc-triss",
        "soc-taair",
        "soc-flavia",
        "soc-kiya",
        "soc-afra",
        "soc-iggy",
        "soc-nergal"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-hollow-axe"
    },
    {
      "externalId": "soc-gear-soc-wp-meteor-line",
      "slug": "soc-wp-meteor-line",
      "nameEn": "Meteor Line",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (C Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5176.webp",
      "tierRank": "A",
      "score": 7.9,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "C Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked C Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Meteor Line).",
      "bestHolderSlugs": [
        "soc-hasna",
        "soc-lilywill",
        "soc-rawiyah"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-meteor-line"
    },
    {
      "externalId": "soc-gear-soc-wp-nameless-staff",
      "slug": "soc-wp-nameless-staff",
      "nameEn": "Nameless Staff",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (C Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5165.webp",
      "tierRank": "A",
      "score": 7.8,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "C Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked C Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Nameless Staff).",
      "bestHolderSlugs": [
        "soc-ayishah",
        "soc-momo",
        "soc-team-meteor"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-nameless-staff"
    },
    {
      "externalId": "soc-gear-soc-wp-resentment-broom",
      "slug": "soc-wp-resentment-broom",
      "nameEn": "Resentment Broom",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (C Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5180.webp",
      "tierRank": "A",
      "score": 8.1,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "C Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked C Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Resentment Broom).",
      "bestHolderSlugs": [
        "soc-yennefer",
        "soc-gloria",
        "soc-nungal",
        "soc-edda",
        "soc-samantha",
        "soc-teadon"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-resentment-broom"
    },
    {
      "externalId": "soc-gear-soc-wp-senator-swift-sword",
      "slug": "soc-wp-senator-swift-sword",
      "nameEn": "Senator Swift Sword",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (C Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5192.webp",
      "tierRank": "A",
      "score": 8,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "C Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked C Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Senator Swift Sword).",
      "bestHolderSlugs": [
        "soc-falin",
        "soc-rawiyah",
        "soc-afra"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-senator-swift-sword"
    },
    {
      "externalId": "soc-gear-soc-wp-the-silent-guard",
      "slug": "soc-wp-the-silent-guard",
      "nameEn": "The Silent Guard",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (C Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5169.webp",
      "tierRank": "A",
      "score": 7.9,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "C Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked C Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (The Silent Guard).",
      "bestHolderSlugs": [
        "soc-tristan",
        "soc-team-meteor",
        "soc-leonide"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-the-silent-guard"
    },
    {
      "externalId": "soc-gear-soc-wp-whale-hunter",
      "slug": "soc-wp-whale-hunter",
      "nameEn": "Whale Hunter",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (C Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5177.webp",
      "tierRank": "A",
      "score": 7.9,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "C Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked C Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Whale Hunter).",
      "bestHolderSlugs": [
        "soc-yserinde",
        "soc-homa",
        "soc-kiya",
        "soc-acambe",
        "soc-samantha"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-whale-hunter"
    },
    {
      "externalId": "soc-gear-soc-wp-beheading-machete",
      "slug": "soc-wp-beheading-machete",
      "nameEn": "Beheading Machete",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (C Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5198.webp",
      "tierRank": "A",
      "score": 7.8,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "C Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked C Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Beheading Machete).",
      "bestHolderSlugs": [
        "soc-estra",
        "soc-afra",
        "soc-schacklulu"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-beheading-machete"
    },
    {
      "externalId": "soc-gear-soc-wp-doomsday-scythe",
      "slug": "soc-wp-doomsday-scythe",
      "nameEn": "Doomsday Scythe",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (C Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5191.webp",
      "tierRank": "A",
      "score": 8.1,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "C Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked C Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Doomsday Scythe).",
      "bestHolderSlugs": [
        "soc-edda",
        "soc-schacklulu",
        "soc-senshi"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-doomsday-scythe"
    },
    {
      "externalId": "soc-gear-soc-wp-pendant-halberd",
      "slug": "soc-wp-pendant-halberd",
      "nameEn": "Pendant Halberd",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (C Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5190.webp",
      "tierRank": "A",
      "score": 8,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "C Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked C Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Pendant Halberd).",
      "bestHolderSlugs": [
        "soc-agata",
        "soc-flavia",
        "soc-inanna",
        "soc-samantha",
        "soc-schacklulu"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-pendant-halberd"
    },
    {
      "externalId": "soc-gear-soc-wp-skeleton-staff",
      "slug": "soc-wp-skeleton-staff",
      "nameEn": "Skeleton Staff",
      "category": "Weapon / Trinket",
      "subType": "Legendary Gear (C Tier)",
      "rarity": "Legendary",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_5199.webp",
      "tierRank": "A",
      "score": 7.9,
      "recommendedDupes": "5★ (Farmable in Weaponry Trials)",
      "stats": {
        "Tier": "C Tier",
        "Rarity": "Legendary",
        "BonusStat": "P.ATK / M.ATK / Crit +15%"
      },
      "effectSummary": "Ranked C Tier in the Sword of Convallaria Legendary Weapon & Trinket Tier List (Skeleton Staff).",
      "bestHolderSlugs": [
        "soc-credenza",
        "soc-schacklulu",
        "soc-miguel"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/weapons/soc-wp-skeleton-staff"
    }
  ],
  "bosses": [
    {
      "slug": "weaponry-trial-1-stage-10-lv70",
      "nameEn": "Weaponry Trial I (Lv.70 Stage 10) — Judgement Tarot Boss",
      "modeName": "Weaponry Trial I",
      "difficultyLabel": "Stage 10 (Lv.70)",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2024/09/Cocoa-Sword-of-Convallaria-1024x576.webp",
      "hpStat": "245,000 HP",
      "shieldOrDpStat": "Ignores 40% DEF on Judgment Ray",
      "weaknesses": [
        "Ranged Magic/Physical DPS",
        "ATK Down II Debuffs"
      ],
      "resistances": [
        "Melee Sweeping Counter",
        "Knockback Immunity"
      ],
      "attackPatterns": [
        {
          "turnOrPhase": "Turns 1–2",
          "attackName": "Melee Sweep & Farthest Target Bolt",
          "damageType": "Physical Melee + Single-Target Magic",
          "counterAction": "Keep only 1 tank inside melee range and bait the ranged bolt with a high-M.DEF unit."
        },
        {
          "turnOrPhase": "Turns 3–6",
          "attackName": "Starry Sky Judgment Ray",
          "damageType": "Map-Wide AoE Magic",
          "counterAction": "Apply ATK Down II + Magic Shield before Turn 3."
        }
      ],
      "strategySteps": [
        "Maintain ATK Down II and Magic DEF Up before every AoE Judgment Ray turn.",
        "Use S+ Tier ranged carries (Triss, Yennefer, SP Inanna) to deal uninterrupted single-target damage."
      ],
      "recommendedUnitSlugs": [
        "soc-sp-inanna",
        "soc-sp-samantha",
        "soc-camelot",
        "soc-geralt",
        "soc-kvare"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/bosses/weaponry-trial-1"
    },
    {
      "slug": "weaponry-trial-2-stage-10-lv70",
      "nameEn": "Weaponry Trial II (Lv.70 Stage 10) — Papal Executioner",
      "modeName": "Weaponry Trial II",
      "difficultyLabel": "Stage 10 (Lv.70)",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2024/08/Garcia-Character-Guide-Sword-of-Convallaria-1024x576.webp",
      "hpStat": "268,000 HP",
      "shieldOrDpStat": "Summons Volatile Crystals",
      "weaknesses": [
        "AoE Summon Clearing",
        "Piercing Damage"
      ],
      "resistances": [
        "Single-Target Isolation Punishment"
      ],
      "attackPatterns": [
        {
          "turnOrPhase": "Turns 1–4",
          "attackName": "Volatile Crystal Detonation",
          "damageType": "AoE Piercing Explosion",
          "counterAction": "Use AoE skills from Triss, Yennefer, or SP Samantha to clear crystals while hitting the boss."
        }
      ],
      "strategySteps": [
        "Clear summoned crystals immediately using AoE skills before they detonate.",
        "Keep allies grouped within Cocoa and SP Inanna healing aura range."
      ],
      "recommendedUnitSlugs": [
        "soc-camelot",
        "soc-geralt",
        "soc-kvare",
        "soc-luvata",
        "soc-nydia"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/bosses/weaponry-trial-2"
    },
    {
      "slug": "weaponry-trial-3-stage-10-lv70",
      "nameEn": "Weaponry Trial III (Lv.70 Stage 10) — Calamity Dragon",
      "modeName": "Weaponry Trial III",
      "difficultyLabel": "Stage 10 (Lv.70)",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2024/08/Xavier-Sword-of-Convallaria-Character-Guide-1024x576.webp",
      "hpStat": "290,000 HP",
      "shieldOrDpStat": "Stacking ATK/DEF Dragon Scales",
      "weaknesses": [
        "Buff Dispel",
        "Close-Range Burst"
      ],
      "resistances": [
        "Outside-Ring Ranged Immunity (-80% DMG)"
      ],
      "attackPatterns": [
        {
          "turnOrPhase": "Turns 1–5",
          "attackName": "Dragon Scale Barrier & Tail Roar",
          "damageType": "AoE Physical + Self Buff",
          "counterAction": "Position all units within 3 tiles of the boss and strip buffs every turn."
        }
      ],
      "strategySteps": [
        "Keep all units inside the 3-tile inner ring so damage is not reduced by 80%.",
        "Strip the boss buffs every turn with Judgement Tarot or dispel skills."
      ],
      "recommendedUnitSlugs": [
        "soc-kvare",
        "soc-luvata",
        "soc-nydia",
        "soc-triss",
        "soc-tristan"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/bosses/weaponry-trial-3"
    }
  ],
  "banners": [
    {
      "slug": "soc-triss-current-banner",
      "bannerTitle": "Featured Debut Banner — Triss (The Witcher 3 Collaboration)",
      "bannerType": "COLLAB",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/12/IMG_5806.webp",
      "featuredNames": [
        "Triss"
      ],
      "featuredUnitSlugs": [
        "soc-triss"
      ],
      "asianStartDate": "2025-11-26",
      "asianEndDate": "2025-12-24",
      "estGlobalStartDate": "2026-11-01",
      "estGlobalEndDate": "2026-11-28",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "Top S+ Tier AoE Magic DPS from The Witcher 3 collaboration with uncounterable fire-tile terrain control.",
      "pityCurrencyCost": 15000,
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/banners/triss"
    },
    {
      "slug": "soc-witcher-collab-rerun",
      "bannerTitle": "Witcher Collaboration Banner — Geralt, Yennefer, Triss & Ciri",
      "bannerType": "COLLAB",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2024/08/Momo-Character-Guide-Sword-of-Convallaria-1024x576.webp",
      "featuredNames": [
        "Geralt",
        "Yennefer",
        "Triss",
        "Ciri"
      ],
      "featuredUnitSlugs": [
        "soc-geralt",
        "soc-yennefer",
        "soc-triss",
        "soc-ciri"
      ],
      "asianStartDate": "2026-01-09",
      "asianEndDate": "2026-02-06",
      "estGlobalStartDate": "2026-11-15",
      "estGlobalEndDate": "2026-12-15",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "Yennefer and Triss both rank S+ Tier in the overall meta while Geralt is a top S Tier physical carry.",
      "pityCurrencyCost": 15000,
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/banners/witcher-collab"
    },
    {
      "slug": "soc-upcoming-banner-1",
      "bannerTitle": "Upcoming Debut Banner #1. SP Maitha",
      "bannerType": "LIMITED",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2024/09/Cocoa-Sword-of-Convallaria-1024x576.webp",
      "featuredNames": [
        "SP Maitha"
      ],
      "featuredUnitSlugs": [
        "soc-maitha"
      ],
      "asianStartDate": "2026-06-01",
      "asianEndDate": "2026-06-21",
      "estGlobalStartDate": "2026-12-01",
      "estGlobalEndDate": "2026-12-28",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "Upcoming Debut Banner (SP Maitha) on the Sword of Convallaria release schedule.",
      "pityCurrencyCost": 15000,
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/banners/upcoming-1"
    },
    {
      "slug": "soc-upcoming-banner-2",
      "bannerTitle": "Upcoming Debut Banner #2. SP Faycal",
      "bannerType": "LIMITED",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2024/08/Garcia-Character-Guide-Sword-of-Convallaria-1024x576.webp",
      "featuredNames": [
        "SP Faycal"
      ],
      "featuredUnitSlugs": [
        "soc-faycal"
      ],
      "asianStartDate": "2026-06-02",
      "asianEndDate": "2026-06-21",
      "estGlobalStartDate": "2026-12-02",
      "estGlobalEndDate": "2026-12-28",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "Upcoming Debut Banner (SP Faycal) on the Sword of Convallaria release schedule.",
      "pityCurrencyCost": 15000,
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/banners/upcoming-2"
    },
    {
      "slug": "soc-upcoming-banner-3",
      "bannerTitle": "Upcoming Debut Banner #3. SP Nungal",
      "bannerType": "LIMITED",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2024/08/Xavier-Sword-of-Convallaria-Character-Guide-1024x576.webp",
      "featuredNames": [
        "SP Nungal"
      ],
      "featuredUnitSlugs": [
        "soc-nungal"
      ],
      "asianStartDate": "2026-06-03",
      "asianEndDate": "2026-06-21",
      "estGlobalStartDate": "2026-12-03",
      "estGlobalEndDate": "2026-12-28",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "Upcoming Debut Banner (SP Nungal) on the Sword of Convallaria release schedule.",
      "pityCurrencyCost": 15000,
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/banners/upcoming-3"
    },
    {
      "slug": "soc-upcoming-banner-4",
      "bannerTitle": "Upcoming Debut Banner #4. Lukamar",
      "bannerType": "LIMITED",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2024/08/image-144-1024x452.webp",
      "featuredNames": [
        "Lukamar"
      ],
      "featuredUnitSlugs": [
        "soc-kvare"
      ],
      "asianStartDate": "2026-06-04",
      "asianEndDate": "2026-06-21",
      "estGlobalStartDate": "2026-12-04",
      "estGlobalEndDate": "2026-12-28",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "Upcoming Debut Banner (Lukamar) on the Sword of Convallaria release schedule.",
      "pityCurrencyCost": 15000,
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/banners/upcoming-4"
    },
    {
      "slug": "soc-upcoming-banner-5",
      "bannerTitle": "Upcoming Debut Banner #5. Pooch RunRun",
      "bannerType": "LIMITED",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/12/IMG_5806.webp",
      "featuredNames": [
        "Pooch RunRun"
      ],
      "featuredUnitSlugs": [
        "soc-luvata"
      ],
      "asianStartDate": "2026-06-05",
      "asianEndDate": "2026-06-21",
      "estGlobalStartDate": "2026-12-05",
      "estGlobalEndDate": "2026-12-28",
      "pullVerdict": "HIGH_VALUE",
      "verdictReasoning": "Upcoming Debut Banner (Pooch RunRun) on the Sword of Convallaria release schedule.",
      "pityCurrencyCost": 15000,
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/banners/upcoming-5"
    },
    {
      "slug": "soc-upcoming-banner-6",
      "bannerTitle": "Upcoming Debut Banner #6. Shams",
      "bannerType": "LIMITED",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2024/08/Momo-Character-Guide-Sword-of-Convallaria-1024x576.webp",
      "featuredNames": [
        "Shams"
      ],
      "featuredUnitSlugs": [
        "soc-nydia"
      ],
      "asianStartDate": "2026-06-06",
      "asianEndDate": "2026-06-21",
      "estGlobalStartDate": "2026-12-06",
      "estGlobalEndDate": "2026-12-28",
      "pullVerdict": "HIGH_VALUE",
      "verdictReasoning": "Upcoming Debut Banner (Shams) on the Sword of Convallaria release schedule.",
      "pityCurrencyCost": 15000,
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/banners/upcoming-6"
    },
    {
      "slug": "soc-upcoming-banner-7",
      "bannerTitle": "Upcoming Debut Banner #7. Clara",
      "bannerType": "LIMITED",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2024/09/Cocoa-Sword-of-Convallaria-1024x576.webp",
      "featuredNames": [
        "Clara"
      ],
      "featuredUnitSlugs": [
        "soc-triss"
      ],
      "asianStartDate": "2026-06-07",
      "asianEndDate": "2026-06-21",
      "estGlobalStartDate": "2026-12-07",
      "estGlobalEndDate": "2026-12-28",
      "pullVerdict": "HIGH_VALUE",
      "verdictReasoning": "Upcoming Debut Banner (Clara) on the Sword of Convallaria release schedule.",
      "pityCurrencyCost": 15000,
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/banners/upcoming-7"
    },
    {
      "slug": "soc-upcoming-banner-8",
      "bannerTitle": "Upcoming Debut Banner #8. Selina",
      "bannerType": "LIMITED",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2024/08/Garcia-Character-Guide-Sword-of-Convallaria-1024x576.webp",
      "featuredNames": [
        "Selina"
      ],
      "featuredUnitSlugs": [
        "soc-tristan"
      ],
      "asianStartDate": "2026-06-08",
      "asianEndDate": "2026-06-21",
      "estGlobalStartDate": "2026-12-08",
      "estGlobalEndDate": "2026-12-28",
      "pullVerdict": "HIGH_VALUE",
      "verdictReasoning": "Upcoming Debut Banner (Selina) on the Sword of Convallaria release schedule.",
      "pityCurrencyCost": 15000,
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/banners/upcoming-8"
    },
    {
      "slug": "soc-upcoming-banner-9",
      "bannerTitle": "Upcoming Debut Banner #9. Yeganeh",
      "bannerType": "LIMITED",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2024/08/Xavier-Sword-of-Convallaria-Character-Guide-1024x576.webp",
      "featuredNames": [
        "Yeganeh"
      ],
      "featuredUnitSlugs": [
        "soc-credenza"
      ],
      "asianStartDate": "2026-06-09",
      "asianEndDate": "2026-06-21",
      "estGlobalStartDate": "2026-12-09",
      "estGlobalEndDate": "2026-12-28",
      "pullVerdict": "HIGH_VALUE",
      "verdictReasoning": "Upcoming Debut Banner (Yeganeh) on the Sword of Convallaria release schedule.",
      "pityCurrencyCost": 15000,
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/banners/upcoming-9"
    },
    {
      "slug": "soc-upcoming-banner-10",
      "bannerTitle": "Upcoming Debut Banner #10. Heshan",
      "bannerType": "LIMITED",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2024/08/image-144-1024x452.webp",
      "featuredNames": [
        "Heshan"
      ],
      "featuredUnitSlugs": [
        "soc-lutfi"
      ],
      "asianStartDate": "2026-06-10",
      "asianEndDate": "2026-06-21",
      "estGlobalStartDate": "2026-12-10",
      "estGlobalEndDate": "2026-12-28",
      "pullVerdict": "HIGH_VALUE",
      "verdictReasoning": "Upcoming Debut Banner (Heshan) on the Sword of Convallaria release schedule.",
      "pityCurrencyCost": 15000,
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/banners/upcoming-10"
    },
    {
      "slug": "soc-upcoming-banner-11",
      "bannerTitle": "Upcoming Debut Banner #11. Shahnaz",
      "bannerType": "LIMITED",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/12/IMG_5806.webp",
      "featuredNames": [
        "Shahnaz"
      ],
      "featuredUnitSlugs": [
        "soc-sp-safiyyah"
      ],
      "asianStartDate": "2026-06-11",
      "asianEndDate": "2026-06-21",
      "estGlobalStartDate": "2026-12-11",
      "estGlobalEndDate": "2026-12-28",
      "pullVerdict": "HIGH_VALUE",
      "verdictReasoning": "Upcoming Debut Banner (Shahnaz) on the Sword of Convallaria release schedule.",
      "pityCurrencyCost": 15000,
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/banners/upcoming-11"
    },
    {
      "slug": "soc-upcoming-banner-12",
      "bannerTitle": "Upcoming Debut Banner #12. Kianshir",
      "bannerType": "LIMITED",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2024/08/Momo-Character-Guide-Sword-of-Convallaria-1024x576.webp",
      "featuredNames": [
        "Kianshir"
      ],
      "featuredUnitSlugs": [
        "soc-taair"
      ],
      "asianStartDate": "2026-06-12",
      "asianEndDate": "2026-06-21",
      "estGlobalStartDate": "2026-12-12",
      "estGlobalEndDate": "2026-12-28",
      "pullVerdict": "HIGH_VALUE",
      "verdictReasoning": "Upcoming Debut Banner (Kianshir) on the Sword of Convallaria release schedule.",
      "pityCurrencyCost": 15000,
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/banners/upcoming-12"
    }
  ]
};
