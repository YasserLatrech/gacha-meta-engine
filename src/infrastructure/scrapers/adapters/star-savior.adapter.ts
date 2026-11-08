import { GameAdapterBundle } from './heaven-burns-red.adapter';

export const starSaviorBundle: GameAdapterBundle = {
  "slug": "star-savior",
  "name": "Star Savior",
  "shortName": "Star Savior",
  "asianRegion": "EN",
  "asianPatchVersion": "v1.4.0 Live Meta",
  "globalPatchVersion": "v1.4.0 Live",
  "foresightGapMonths": 3,
  "coverImageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/203458_pemnt.webp",
  "currencyName": "Starlight Quartz",
  "pullCostSingle": 150,
  "pityThreshold": 200,
  "monthlyF2pIncome": 15000,
  "monthlyPassIncome": 22500,
  "sourceUrl": "https://meta.gg/star-savior",
  "rolesConfig": [
    {
      "key": "DPS",
      "label": "STRIKER / ASSASSIN (DPS)",
      "colorHex": "#DC2626"
    },
    {
      "key": "SUB_DPS",
      "label": "RANGER / CASTER (BREAKER)",
      "colorHex": "#D97706"
    },
    {
      "key": "SUPPORT",
      "label": "SUPPORTER (BUFFER)",
      "colorHex": "#2563EB"
    },
    {
      "key": "SUSTAIN",
      "label": "DEFENDER (TANK / SHIELD)",
      "colorHex": "#15803D"
    }
  ],
  "elementsConfig": [
    {
      "key": "Sun",
      "label": "Sun",
      "colorHex": "#DC2626"
    },
    {
      "key": "Moon",
      "label": "Moon",
      "colorHex": "#2563EB"
    },
    {
      "key": "Star",
      "label": "Star",
      "colorHex": "#D97706"
    },
    {
      "key": "Order",
      "label": "Order",
      "colorHex": "#059669"
    },
    {
      "key": "Chaos",
      "label": "Chaos",
      "colorHex": "#7C3AED"
    }
  ],
  "units": [
    {
      "externalId": "ss-unit-80384230",
      "slug": "ss-80384230",
      "nameEn": "Professor M",
      "nameOriginal": "Professor M",
      "styleOrTitle": "SSR [Veteran Detective] • Moon Ranger (Breaker)",
      "rarity": "SSR",
      "role": "Ranger (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Moon",
      "attackType": "Pierce",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/205900_h5bcs.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "LB1 (1 Dupe) / Base",
      "baseStats": {
        "hpOrStamina": 6280,
        "dpOrSpeed": 205,
        "atkOrPower": 940,
        "defOrGuts": 630,
        "critOrWit": 660,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Veteran Detective",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Moon Pierce DMG + 4 Toughness Break",
          "hitCount": 6,
          "buffCategoryTags": [
            "Moon",
            "Ranger (Breaker)",
            "Toughness Break"
          ],
          "exactDescription": "Professor M is a SSS-Tier Moon-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "name": "Astral Drive: Professor M",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Breaker)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Professor M is a SSS-Tier Moon-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-80354674",
        "ss-80218957"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.9,
      "summaryVerdict": "Professor M is a SSS-Tier Moon-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-80384230"
    },
    {
      "externalId": "ss-unit-80354674",
      "slug": "ss-80354674",
      "nameEn": "Amora",
      "nameOriginal": "Amora",
      "styleOrTitle": "SSR [Point of No Return] • Order Assassin (Burst DPS)",
      "rarity": "SSR",
      "role": "Assassin (Burst DPS)",
      "roleColumn": "DPS",
      "element": "Order",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/143855_iv9nt.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "LB1 (1 Dupe) / Base",
      "baseStats": {
        "hpOrStamina": 6252,
        "dpOrSpeed": 204,
        "atkOrPower": 934,
        "defOrGuts": 626,
        "critOrWit": 656,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Point of No Return",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Order Slash DMG + 4 Toughness Break",
          "hitCount": 6,
          "buffCategoryTags": [
            "Order",
            "Assassin (Burst DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Amora is a SSS-Tier Order-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance."
        },
        {
          "name": "Astral Drive: Amora",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Order DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Amora is a SSS-Tier Order-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-80218957",
        "ss-80022340"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.8,
      "summaryVerdict": "Amora is a SSS-Tier Order-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-80354674"
    },
    {
      "externalId": "ss-unit-80218957",
      "slug": "ss-80218957",
      "nameEn": "Smile (Swimsuit)",
      "nameOriginal": "Smile (Swimsuit)",
      "styleOrTitle": "SSR [Tropical Vacation] • Star Assassin (Burst DPS)",
      "rarity": "SSR",
      "role": "Assassin (Burst DPS)",
      "roleColumn": "DPS",
      "element": "Star",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/112830_qacgx.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "LB1 (1 Dupe) / Base",
      "baseStats": {
        "hpOrStamina": 6224,
        "dpOrSpeed": 203,
        "atkOrPower": 928,
        "defOrGuts": 622,
        "critOrWit": 652,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Tropical Vacation",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Star Slash DMG + 4 Toughness Break",
          "hitCount": 6,
          "buffCategoryTags": [
            "Star",
            "Assassin (Burst DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Smile (Swimsuit) is a SSS-Tier Star-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "name": "Astral Drive: Smile (Swimsuit)",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Smile (Swimsuit) is a SSS-Tier Star-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-80022340",
        "ss-79717421"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "Smile (Swimsuit) is a SSS-Tier Star-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-80218957"
    },
    {
      "externalId": "ss-unit-80022340",
      "slug": "ss-80022340",
      "nameEn": "Carmen (Bride)",
      "nameOriginal": "Carmen (Bride)",
      "styleOrTitle": "SSR [Crimson Vow Bride] • Moon Supporter (Buffer)",
      "rarity": "SSR",
      "role": "Supporter (Buffer)",
      "roleColumn": "SUPPORT",
      "element": "Moon",
      "attackType": "Magic",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/05/121623_3y1g7.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "LB1 (1 Dupe) / Base",
      "baseStats": {
        "hpOrStamina": 6196,
        "dpOrSpeed": 202,
        "atkOrPower": 922,
        "defOrGuts": 618,
        "critOrWit": 648,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 97,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Crimson Vow Bride",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Moon Magic DMG + 4 Toughness Break",
          "hitCount": 6,
          "buffCategoryTags": [
            "Moon",
            "Supporter (Buffer)",
            "Toughness Break"
          ],
          "exactDescription": "Carmen (Bride) is a SSS-Tier Moon-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "name": "Astral Drive: Carmen (Bride)",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Supporter (Buffer)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Carmen (Bride) is a SSS-Tier Moon-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79717421",
        "ss-80482306"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "Carmen (Bride) is a SSS-Tier Moon-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-80022340"
    },
    {
      "externalId": "ss-unit-79717421",
      "slug": "ss-79717421",
      "nameEn": "Charles (Bunny)",
      "nameOriginal": "Charles (Bunny)",
      "styleOrTitle": "SSR [Velvet Lounge Bunny] • Sun Assassin (Burst DPS)",
      "rarity": "SSR",
      "role": "Assassin (Burst DPS)",
      "roleColumn": "DPS",
      "element": "Sun",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/182954_1clb6.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "LB1 (1 Dupe) / Base",
      "baseStats": {
        "hpOrStamina": 6168,
        "dpOrSpeed": 201,
        "atkOrPower": 916,
        "defOrGuts": 614,
        "critOrWit": 644,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Velvet Lounge Bunny",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Sun Slash DMG + 4 Toughness Break",
          "hitCount": 6,
          "buffCategoryTags": [
            "Sun",
            "Assassin (Burst DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Charles (Bunny) is a SSS-Tier Sun-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "name": "Astral Drive: Charles (Bunny)",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Charles (Bunny) is a SSS-Tier Sun-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-80482306",
        "ss-80331829"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.9,
      "summaryVerdict": "Charles (Bunny) is a SSS-Tier Sun-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79717421"
    },
    {
      "externalId": "ss-unit-80482306",
      "slug": "ss-80482306",
      "nameEn": "Ceres (Maid)",
      "nameOriginal": "Ceres (Maid)",
      "styleOrTitle": "SSR [Reluctant Maid] • Sun Supporter (Buffer)",
      "rarity": "SSR",
      "role": "Supporter (Buffer)",
      "roleColumn": "SUPPORT",
      "element": "Sun",
      "attackType": "Magic",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/10/144125_id9hj.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 6140,
        "dpOrSpeed": 200,
        "atkOrPower": 910,
        "defOrGuts": 610,
        "critOrWit": 640,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 97,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Reluctant Maid",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Sun Magic DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "Supporter (Buffer)",
            "Toughness Break"
          ],
          "exactDescription": "Ceres (Maid) is a SS-Tier Sun-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "name": "Astral Drive: Ceres (Maid)",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Supporter (Buffer)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Ceres (Maid) is a SS-Tier Sun-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-80331829",
        "ss-80022517"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "Ceres (Maid) is a SS-Tier Sun-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-80482306"
    },
    {
      "externalId": "ss-unit-80331829",
      "slug": "ss-80331829",
      "nameEn": "Christel",
      "nameOriginal": "Christel",
      "styleOrTitle": "SSR [Chains of Eternity] • Sun Ranger (Breaker)",
      "rarity": "SSR",
      "role": "Ranger (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Sun",
      "attackType": "Pierce",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/08/190200_51vpg.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 6112,
        "dpOrSpeed": 199,
        "atkOrPower": 904,
        "defOrGuts": 606,
        "critOrWit": 636,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Chains of Eternity",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Sun Pierce DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "Ranger (Breaker)",
            "Toughness Break"
          ],
          "exactDescription": "Christel is a SS-Tier Sun-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "name": "Astral Drive: Christel",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Breaker)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Christel is a SS-Tier Sun-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-80022517",
        "ss-80012791"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Christel is a SS-Tier Sun-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-80331829"
    },
    {
      "externalId": "ss-unit-80022517",
      "slug": "ss-80022517",
      "nameEn": "Epindel (Bride)",
      "nameOriginal": "Epindel (Bride)",
      "styleOrTitle": "SSR [Till Death Do Us Part] • Sun Caster (AoE / Debuff)",
      "rarity": "SSR",
      "role": "Caster (AoE / Debuff)",
      "roleColumn": "SUB_DPS",
      "element": "Sun",
      "attackType": "Magic",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/06/151138_sphtu.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 6084,
        "dpOrSpeed": 198,
        "atkOrPower": 898,
        "defOrGuts": 602,
        "critOrWit": 632,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Till Death Do Us Part",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Sun Magic DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "Caster (AoE / Debuff)",
            "Toughness Break"
          ],
          "exactDescription": "Epindel (Bride) is a SS-Tier Sun-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "name": "Astral Drive: Epindel (Bride)",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (AoE / Debuff)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Epindel (Bride) is a SS-Tier Sun-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-80012791",
        "ss-79924504"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Epindel (Bride) is a SS-Tier Sun-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-80022517"
    },
    {
      "externalId": "ss-unit-80012791",
      "slug": "ss-80012791",
      "nameEn": "Tiria",
      "nameOriginal": "Tiria",
      "styleOrTitle": "SSR [Special Combat Instructor] • Sun Striker (DPS)",
      "rarity": "SSR",
      "role": "Striker (DPS)",
      "roleColumn": "DPS",
      "element": "Sun",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/115944_7kujw.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 6056,
        "dpOrSpeed": 197,
        "atkOrPower": 892,
        "defOrGuts": 598,
        "critOrWit": 628,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Special Combat Instructor",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Sun Slash DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "Striker (DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Tiria is a SS-Tier Sun-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "name": "Astral Drive: Tiria",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Tiria is a SS-Tier Sun-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79924504",
        "ss-79864232"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "Tiria is a SS-Tier Sun-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-80012791"
    },
    {
      "externalId": "ss-unit-79924504",
      "slug": "ss-79924504",
      "nameEn": "Fay",
      "nameOriginal": "Fay",
      "styleOrTitle": "SSR [Jade Striker] • Moon Assassin (Burst DPS)",
      "rarity": "SSR",
      "role": "Assassin (Burst DPS)",
      "roleColumn": "DPS",
      "element": "Moon",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/04/105026_1pwrt.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 6028,
        "dpOrSpeed": 196,
        "atkOrPower": 886,
        "defOrGuts": 594,
        "critOrWit": 624,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Jade Striker",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Moon Slash DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "Assassin (Burst DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Fay is a SS-Tier Moon-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "name": "Astral Drive: Fay",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Fay is a SS-Tier Moon-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79864232",
        "ss-79677914"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "Fay is a SS-Tier Moon-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79924504"
    },
    {
      "externalId": "ss-unit-79864232",
      "slug": "ss-79864232",
      "nameEn": "Rosaria",
      "nameOriginal": "Rosaria",
      "styleOrTitle": "SSR [Maiden of the End] • Chaos Ranger (Breaker)",
      "rarity": "SSR",
      "role": "Ranger (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Chaos",
      "attackType": "Pierce",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/191317_k4lb7.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 6000,
        "dpOrSpeed": 195,
        "atkOrPower": 880,
        "defOrGuts": 590,
        "critOrWit": 620,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Maiden of the End",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Chaos Pierce DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Chaos",
            "Ranger (Breaker)",
            "Toughness Break"
          ],
          "exactDescription": "Rosaria is a SS-Tier Chaos-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance."
        },
        {
          "name": "Astral Drive: Rosaria",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Chaos DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Breaker)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Rosaria is a SS-Tier Chaos-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79677914",
        "ss-79606358"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Rosaria is a SS-Tier Chaos-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79864232"
    },
    {
      "externalId": "ss-unit-79677914",
      "slug": "ss-79677914",
      "nameEn": "Emily",
      "nameOriginal": "Emily",
      "styleOrTitle": "SSR [Tactical Striker] • Moon Defender (Tank / Shield)",
      "rarity": "SSR",
      "role": "Defender (Tank / Shield)",
      "roleColumn": "SUSTAIN",
      "element": "Moon",
      "attackType": "Crush",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/01/194443_qs2vo.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5972,
        "dpOrSpeed": 194,
        "atkOrPower": 874,
        "defOrGuts": 586,
        "critOrWit": 616,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 96,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Tactical Striker",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Moon Crush DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "Defender (Tank / Shield)",
            "Toughness Break"
          ],
          "exactDescription": "Emily is a SS-Tier Moon-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "name": "Astral Drive: Emily",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender (Tank / Shield)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Emily is a SS-Tier Moon-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79606358",
        "ss-79534109"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Emily is a SS-Tier Moon-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79677914"
    },
    {
      "externalId": "ss-unit-79606358",
      "slug": "ss-79606358",
      "nameEn": "Asera (Dress)",
      "nameOriginal": "Asera (Dress)",
      "styleOrTitle": "SSR [Lady of House Stranis] • Order Supporter (Buffer)",
      "rarity": "SSR",
      "role": "Supporter (Buffer)",
      "roleColumn": "SUPPORT",
      "element": "Order",
      "attackType": "Magic",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/12/165111_tyvh9.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5944,
        "dpOrSpeed": 193,
        "atkOrPower": 868,
        "defOrGuts": 582,
        "critOrWit": 612,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 97,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Lady of House Stranis",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Order Magic DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Order",
            "Supporter (Buffer)",
            "Toughness Break"
          ],
          "exactDescription": "Asera (Dress) is a SS-Tier Order-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance."
        },
        {
          "name": "Astral Drive: Asera (Dress)",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Order DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Supporter (Buffer)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Asera (Dress) is a SS-Tier Order-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79534109",
        "ss-79517681"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "Asera (Dress) is a SS-Tier Order-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79606358"
    },
    {
      "externalId": "ss-unit-79534109",
      "slug": "ss-79534109",
      "nameEn": "Claire (Bunny)",
      "nameOriginal": "Claire (Bunny)",
      "styleOrTitle": "SSR [Perfect Bunny Girl] • Moon Striker (DPS)",
      "rarity": "SSR",
      "role": "Striker (DPS)",
      "roleColumn": "DPS",
      "element": "Moon",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/103213_6rb9d.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5916,
        "dpOrSpeed": 192,
        "atkOrPower": 862,
        "defOrGuts": 578,
        "critOrWit": 608,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Perfect Bunny Girl",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Moon Slash DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "Striker (DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Claire (Bunny) is a SS-Tier Moon-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "name": "Astral Drive: Claire (Bunny)",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Claire (Bunny) is a SS-Tier Moon-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517681",
        "ss-79517675"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "Claire (Bunny) is a SS-Tier Moon-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79534109"
    },
    {
      "externalId": "ss-unit-79517681",
      "slug": "ss-79517681",
      "nameEn": "Dana",
      "nameOriginal": "Dana",
      "styleOrTitle": "SSR [Radiant Tactician] • Star Caster (AoE / Debuff)",
      "rarity": "SSR",
      "role": "Caster (AoE / Debuff)",
      "roleColumn": "SUB_DPS",
      "element": "Star",
      "attackType": "Magic",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAGICIAN_DRUID_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5888,
        "dpOrSpeed": 191,
        "atkOrPower": 856,
        "defOrGuts": 574,
        "critOrWit": 604,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Radiant Tactician",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Star Magic DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "Caster (AoE / Debuff)",
            "Toughness Break"
          ],
          "exactDescription": "Dana is a SS-Tier Star-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "name": "Astral Drive: Dana",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (AoE / Debuff)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Dana is a SS-Tier Star-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517675",
        "ss-79517738"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Dana is a SS-Tier Star-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517681"
    },
    {
      "externalId": "ss-unit-79517675",
      "slug": "ss-79517675",
      "nameEn": "Ede",
      "nameOriginal": "Ede",
      "styleOrTitle": "SSR [Sanctuary Cleric] • Star Defender (Tank / Shield)",
      "rarity": "SSR",
      "role": "Defender (Tank / Shield)",
      "roleColumn": "SUSTAIN",
      "element": "Star",
      "attackType": "Crush",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/INCOGNITA_FLOWER_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5860,
        "dpOrSpeed": 190,
        "atkOrPower": 850,
        "defOrGuts": 570,
        "critOrWit": 600,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 96,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Sanctuary Cleric",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Star Crush DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "Defender (Tank / Shield)",
            "Toughness Break"
          ],
          "exactDescription": "Ede is a SS-Tier Star-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "name": "Astral Drive: Ede",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender (Tank / Shield)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Ede is a SS-Tier Star-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517738",
        "ss-80482402"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Ede is a SS-Tier Star-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517675"
    },
    {
      "externalId": "ss-unit-79517738",
      "slug": "ss-79517738",
      "nameEn": "Clarissa",
      "nameOriginal": "Clarissa",
      "styleOrTitle": "SSR [Velvet Ranger] • Star Ranger (Breaker)",
      "rarity": "SSR",
      "role": "Ranger (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Star",
      "attackType": "Pierce",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAGICIAN_SNIPER_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5832,
        "dpOrSpeed": 189,
        "atkOrPower": 844,
        "defOrGuts": 566,
        "critOrWit": 596,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Velvet Ranger",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Star Pierce DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "Ranger (Breaker)",
            "Toughness Break"
          ],
          "exactDescription": "Clarissa is a SS-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "name": "Astral Drive: Clarissa",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Breaker)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Clarissa is a SS-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-80482402",
        "ss-80384143"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "Clarissa is a SS-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517738"
    },
    {
      "externalId": "ss-unit-80482402",
      "slug": "ss-80482402",
      "nameEn": "Lydia (Maid)",
      "nameOriginal": "Lydia (Maid)",
      "styleOrTitle": "SSR [Daydreaming Maid] • Moon Caster (AoE / Debuff)",
      "rarity": "SSR",
      "role": "Caster (AoE / Debuff)",
      "roleColumn": "SUB_DPS",
      "element": "Moon",
      "attackType": "Magic",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/06/154756_yiks1.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5804,
        "dpOrSpeed": 188,
        "atkOrPower": 838,
        "defOrGuts": 562,
        "critOrWit": 592,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Daydreaming Maid",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Moon Magic DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "Caster (AoE / Debuff)",
            "Toughness Break"
          ],
          "exactDescription": "Lydia (Maid) is a S-Tier Moon-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "name": "Astral Drive: Lydia (Maid)",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (AoE / Debuff)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Lydia (Maid) is a S-Tier Moon-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-80384143",
        "ss-80218489"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "Lydia (Maid) is a S-Tier Moon-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-80482402"
    },
    {
      "externalId": "ss-unit-80384143",
      "slug": "ss-80384143",
      "nameEn": "Gwen",
      "nameOriginal": "Gwen",
      "styleOrTitle": "SSR [Hedonist's Solace] • Star Striker (DPS)",
      "rarity": "SSR",
      "role": "Striker (DPS)",
      "roleColumn": "DPS",
      "element": "Star",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/205936_ywjad.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5776,
        "dpOrSpeed": 187,
        "atkOrPower": 832,
        "defOrGuts": 558,
        "critOrWit": 588,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Hedonist's Solace",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Star Slash DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "Striker (DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Gwen is a S-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "name": "Astral Drive: Gwen",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Gwen is a S-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-80218489",
        "ss-80128024"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Gwen is a S-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-80384143"
    },
    {
      "externalId": "ss-unit-80218489",
      "slug": "ss-80218489",
      "nameEn": "Luna (Swimsuit)",
      "nameOriginal": "Luna (Swimsuit)",
      "styleOrTitle": "SSR [Summer Night Sky] • Sun Defender (Tank / Shield)",
      "rarity": "SSR",
      "role": "Defender (Tank / Shield)",
      "roleColumn": "SUSTAIN",
      "element": "Sun",
      "attackType": "Crush",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/112813_tnirc.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5748,
        "dpOrSpeed": 186,
        "atkOrPower": 826,
        "defOrGuts": 554,
        "critOrWit": 584,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 96,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Summer Night Sky",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Sun Crush DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "Defender (Tank / Shield)",
            "Toughness Break"
          ],
          "exactDescription": "Luna (Swimsuit) is a S-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "name": "Astral Drive: Luna (Swimsuit)",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender (Tank / Shield)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Luna (Swimsuit) is a S-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-80128024",
        "ss-80127403"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Luna (Swimsuit) is a S-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-80218489"
    },
    {
      "externalId": "ss-unit-80128024",
      "slug": "ss-80128024",
      "nameEn": "Ceres",
      "nameOriginal": "Ceres",
      "styleOrTitle": "SSR [Venomous Alchemist] • Moon Striker (DPS)",
      "rarity": "SSR",
      "role": "Striker (DPS)",
      "roleColumn": "DPS",
      "element": "Moon",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/07/152521_s54gh.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5720,
        "dpOrSpeed": 185,
        "atkOrPower": 820,
        "defOrGuts": 550,
        "critOrWit": 580,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Venomous Alchemist",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Moon Slash DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "Striker (DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Ceres is a S-Tier Moon-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "name": "Astral Drive: Ceres",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Ceres is a S-Tier Moon-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-80127403",
        "ss-79924501"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "Ceres is a S-Tier Moon-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-80128024"
    },
    {
      "externalId": "ss-unit-80127403",
      "slug": "ss-80127403",
      "nameEn": "Cornelia",
      "nameOriginal": "Cornelia",
      "styleOrTitle": "SSR [Blossom Executioner] • Chaos Caster (AoE / Debuff)",
      "rarity": "SSR",
      "role": "Caster (AoE / Debuff)",
      "roleColumn": "SUB_DPS",
      "element": "Chaos",
      "attackType": "Magic",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/06/120413_604d3.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5692,
        "dpOrSpeed": 184,
        "atkOrPower": 814,
        "defOrGuts": 546,
        "critOrWit": 576,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Blossom Executioner",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Chaos Magic DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Chaos",
            "Caster (AoE / Debuff)",
            "Toughness Break"
          ],
          "exactDescription": "Cornelia is a S-Tier Chaos-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance."
        },
        {
          "name": "Astral Drive: Cornelia",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Chaos DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (AoE / Debuff)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Cornelia is a S-Tier Chaos-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79924501",
        "ss-79807109"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "Cornelia is a S-Tier Chaos-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-80127403"
    },
    {
      "externalId": "ss-unit-79924501",
      "slug": "ss-79924501",
      "nameEn": "Lin",
      "nameOriginal": "Lin",
      "styleOrTitle": "SSR [White Moon Blade] • Star Striker (DPS)",
      "rarity": "SSR",
      "role": "Striker (DPS)",
      "roleColumn": "DPS",
      "element": "Star",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/04/105027_kjhmw.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5664,
        "dpOrSpeed": 183,
        "atkOrPower": 808,
        "defOrGuts": 542,
        "critOrWit": 572,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: White Moon Blade",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Star Slash DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "Striker (DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Lin is a S-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "name": "Astral Drive: Lin",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Lin is a S-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79807109",
        "ss-79766294"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Lin is a S-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79924501"
    },
    {
      "externalId": "ss-unit-79807109",
      "slug": "ss-79807109",
      "nameEn": "Roberta",
      "nameOriginal": "Roberta",
      "styleOrTitle": "SSR [Executive Commander] • Star Striker (DPS)",
      "rarity": "SSR",
      "role": "Striker (DPS)",
      "roleColumn": "DPS",
      "element": "Star",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/201812_s56oa.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5636,
        "dpOrSpeed": 182,
        "atkOrPower": 802,
        "defOrGuts": 538,
        "critOrWit": 568,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Executive Commander",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Star Slash DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "Striker (DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Roberta is a S-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "name": "Astral Drive: Roberta",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Roberta is a S-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79766294",
        "ss-79517714"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Roberta is a S-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79807109"
    },
    {
      "externalId": "ss-unit-79766294",
      "slug": "ss-79766294",
      "nameEn": "Frey (Bunny)",
      "nameOriginal": "Frey (Bunny)",
      "styleOrTitle": "SSR [Indomitable Masterpiece] • Moon Caster (AoE / Debuff)",
      "rarity": "SSR",
      "role": "Caster (AoE / Debuff)",
      "roleColumn": "SUB_DPS",
      "element": "Moon",
      "attackType": "Magic",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/02/181128_a531d.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5608,
        "dpOrSpeed": 181,
        "atkOrPower": 796,
        "defOrGuts": 534,
        "critOrWit": 564,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Indomitable Masterpiece",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Moon Magic DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "Caster (AoE / Debuff)",
            "Toughness Break"
          ],
          "exactDescription": "Frey (Bunny) is a S-Tier Moon-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "name": "Astral Drive: Frey (Bunny)",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (AoE / Debuff)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Frey (Bunny) is a S-Tier Moon-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517714",
        "ss-79517705"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "Frey (Bunny) is a S-Tier Moon-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79766294"
    },
    {
      "externalId": "ss-unit-79517714",
      "slug": "ss-79517714",
      "nameEn": "Kira",
      "nameOriginal": "Kira",
      "styleOrTitle": "SSR [Starlight Idol] • Sun Assassin (Burst DPS)",
      "rarity": "SSR",
      "role": "Assassin (Burst DPS)",
      "roleColumn": "DPS",
      "element": "Sun",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MUTANT_MASK_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5580,
        "dpOrSpeed": 180,
        "atkOrPower": 790,
        "defOrGuts": 530,
        "critOrWit": 560,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Starlight Idol",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Sun Slash DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "Assassin (Burst DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Kira is a S-Tier Sun-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "name": "Astral Drive: Kira",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Kira is a S-Tier Sun-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517705",
        "ss-79517690"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "Kira is a S-Tier Sun-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517714"
    },
    {
      "externalId": "ss-unit-79517705",
      "slug": "ss-79517705",
      "nameEn": "Lacy",
      "nameOriginal": "Lacy",
      "styleOrTitle": "SSR [Silent Tracker] • Chaos Ranger (Breaker)",
      "rarity": "SSR",
      "role": "Ranger (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Chaos",
      "attackType": "Pierce",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/INDEPENDENT_DRAGON_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5552,
        "dpOrSpeed": 179,
        "atkOrPower": 784,
        "defOrGuts": 526,
        "critOrWit": 556,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Silent Tracker",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Chaos Pierce DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Chaos",
            "Ranger (Breaker)",
            "Toughness Break"
          ],
          "exactDescription": "Lacy is a S-Tier Chaos-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance."
        },
        {
          "name": "Astral Drive: Lacy",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Chaos DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Breaker)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Lacy is a S-Tier Chaos-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517690",
        "ss-79517678"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Lacy is a S-Tier Chaos-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517705"
    },
    {
      "externalId": "ss-unit-79517690",
      "slug": "ss-79517690",
      "nameEn": "Lugh",
      "nameOriginal": "Lugh",
      "styleOrTitle": "SSR [Spear of Light] • Moon Ranger (Breaker)",
      "rarity": "SSR",
      "role": "Ranger (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Moon",
      "attackType": "Pierce",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/RECON_AMULET_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5524,
        "dpOrSpeed": 178,
        "atkOrPower": 778,
        "defOrGuts": 522,
        "critOrWit": 552,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Spear of Light",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Moon Pierce DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "Ranger (Breaker)",
            "Toughness Break"
          ],
          "exactDescription": "Lugh is a S-Tier Moon-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "name": "Astral Drive: Lugh",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Breaker)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Lugh is a S-Tier Moon-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517678",
        "ss-79517669"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Lugh is a S-Tier Moon-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517690"
    },
    {
      "externalId": "ss-unit-79517678",
      "slug": "ss-79517678",
      "nameEn": "Serpan",
      "nameOriginal": "Serpan",
      "styleOrTitle": "SSR [Abyssal Scale] • Sun Supporter (Buffer)",
      "rarity": "SSR",
      "role": "Supporter (Buffer)",
      "roleColumn": "SUPPORT",
      "element": "Sun",
      "attackType": "Magic",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/EASTERN_OWL_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5496,
        "dpOrSpeed": 177,
        "atkOrPower": 772,
        "defOrGuts": 518,
        "critOrWit": 548,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 97,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Abyssal Scale",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Sun Magic DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "Supporter (Buffer)",
            "Toughness Break"
          ],
          "exactDescription": "Serpan is a S-Tier Sun-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "name": "Astral Drive: Serpan",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Supporter (Buffer)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Serpan is a S-Tier Sun-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517669",
        "ss-79517660"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "Serpan is a S-Tier Sun-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517678"
    },
    {
      "externalId": "ss-unit-79517669",
      "slug": "ss-79517669",
      "nameEn": "Seira",
      "nameOriginal": "Seira",
      "styleOrTitle": "SSR [Starlight Archer] • Order Striker (DPS)",
      "rarity": "SSR",
      "role": "Striker (DPS)",
      "roleColumn": "DPS",
      "element": "Order",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/NIGHTMARE_REAPER_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5468,
        "dpOrSpeed": 176,
        "atkOrPower": 766,
        "defOrGuts": 514,
        "critOrWit": 544,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Starlight Archer",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Order Slash DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Order",
            "Striker (DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Seira is a S-Tier Order-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance."
        },
        {
          "name": "Astral Drive: Seira",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Order DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Seira is a S-Tier Order-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517660",
        "ss-79517657"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "Seira is a S-Tier Order-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517669"
    },
    {
      "externalId": "ss-unit-79517660",
      "slug": "ss-79517660",
      "nameEn": "Charles",
      "nameOriginal": "Charles",
      "styleOrTitle": "SSR [Royal Knight] • Sun Striker (DPS)",
      "rarity": "SSR",
      "role": "Striker (DPS)",
      "roleColumn": "DPS",
      "element": "Sun",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_KNIGHT_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5440,
        "dpOrSpeed": 175,
        "atkOrPower": 760,
        "defOrGuts": 510,
        "critOrWit": 540,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Royal Knight",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Sun Slash DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "Striker (DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Charles is a S-Tier Sun-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "name": "Astral Drive: Charles",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Charles is a S-Tier Sun-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517657",
        "ss-79517654"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Charles is a S-Tier Sun-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517660"
    },
    {
      "externalId": "ss-unit-79517657",
      "slug": "ss-79517657",
      "nameEn": "Luna",
      "nameOriginal": "Luna",
      "styleOrTitle": "SSR [Lunar Mystic] • Order Caster (AoE / Debuff)",
      "rarity": "SSR",
      "role": "Caster (AoE / Debuff)",
      "roleColumn": "SUB_DPS",
      "element": "Order",
      "attackType": "Magic",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_ORACLE_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5412,
        "dpOrSpeed": 174,
        "atkOrPower": 754,
        "defOrGuts": 506,
        "critOrWit": 536,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Lunar Mystic",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Order Magic DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Order",
            "Caster (AoE / Debuff)",
            "Toughness Break"
          ],
          "exactDescription": "Luna is a S-Tier Order-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance."
        },
        {
          "name": "Astral Drive: Luna",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Order DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (AoE / Debuff)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Luna is a S-Tier Order-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517654",
        "ss-79517720"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Luna is a S-Tier Order-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Order elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517657"
    },
    {
      "externalId": "ss-unit-79517654",
      "slug": "ss-79517654",
      "nameEn": "Smile",
      "nameOriginal": "Smile",
      "styleOrTitle": "SSR [Solar Vanguard] • Star Ranger (Breaker)",
      "rarity": "SSR",
      "role": "Ranger (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Star",
      "attackType": "Pierce",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_SMILE_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5384,
        "dpOrSpeed": 173,
        "atkOrPower": 748,
        "defOrGuts": 502,
        "critOrWit": 532,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Solar Vanguard",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Star Pierce DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "Ranger (Breaker)",
            "Toughness Break"
          ],
          "exactDescription": "Smile is a S-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "name": "Astral Drive: Smile",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Breaker)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Smile is a S-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517720",
        "ss-79855349"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "Smile is a S-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517654"
    },
    {
      "externalId": "ss-unit-79517720",
      "slug": "ss-79517720",
      "nameEn": "Anna",
      "nameOriginal": "Anna",
      "styleOrTitle": "SSR [Undercover Officer] • Sun Defender (Tank / Shield)",
      "rarity": "SSR",
      "role": "Defender (Tank / Shield)",
      "roleColumn": "SUSTAIN",
      "element": "Sun",
      "attackType": "Crush",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/OFFICER_POLICE_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5356,
        "dpOrSpeed": 172,
        "atkOrPower": 742,
        "defOrGuts": 498,
        "critOrWit": 528,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 96,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Undercover Officer",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Sun Crush DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "Defender (Tank / Shield)",
            "Toughness Break"
          ],
          "exactDescription": "Anna is a S-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "name": "Astral Drive: Anna",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender (Tank / Shield)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Anna is a S-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79855349",
        "ss-79855337"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "Anna is a S-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517720"
    },
    {
      "externalId": "ss-unit-79855349",
      "slug": "ss-79855349",
      "nameEn": "Hilde",
      "nameOriginal": "Hilde",
      "styleOrTitle": "SSR [Nostalgic Vanguard] • Sun Defender (Tank / Shield)",
      "rarity": "SSR",
      "role": "Defender (Tank / Shield)",
      "roleColumn": "SUSTAIN",
      "element": "Sun",
      "attackType": "Crush",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/130612_m2rk9.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5328,
        "dpOrSpeed": 171,
        "atkOrPower": 736,
        "defOrGuts": 494,
        "critOrWit": 524,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 96,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Nostalgic Vanguard",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Sun Crush DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "Defender (Tank / Shield)",
            "Toughness Break"
          ],
          "exactDescription": "Hilde is a A-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "name": "Astral Drive: Hilde",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender (Tank / Shield)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Hilde is a A-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79855337",
        "ss-79644743"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Hilde is a A-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79855349"
    },
    {
      "externalId": "ss-unit-79855337",
      "slug": "ss-79855337",
      "nameEn": "Mina Yanagi",
      "nameOriginal": "Mina Yanagi",
      "styleOrTitle": "SSR [Veteran Mercenary] • Star Ranger (Breaker)",
      "rarity": "SSR",
      "role": "Ranger (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Star",
      "attackType": "Pierce",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/130558_c8vsj.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5300,
        "dpOrSpeed": 170,
        "atkOrPower": 730,
        "defOrGuts": 490,
        "critOrWit": 520,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Veteran Mercenary",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Star Pierce DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "Ranger (Breaker)",
            "Toughness Break"
          ],
          "exactDescription": "Mina Yanagi is a A-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "name": "Astral Drive: Mina Yanagi",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Breaker)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Mina Yanagi is a A-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79644743",
        "ss-79534106"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Mina Yanagi is a A-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79855337"
    },
    {
      "externalId": "ss-unit-79644743",
      "slug": "ss-79644743",
      "nameEn": "Belle Reese",
      "nameOriginal": "Belle Reese",
      "styleOrTitle": "SSR [Deep Condolence] • Star Ranger (Breaker)",
      "rarity": "SSR",
      "role": "Ranger (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Star",
      "attackType": "Pierce",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/01/200314_a0eqx.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5272,
        "dpOrSpeed": 169,
        "atkOrPower": 724,
        "defOrGuts": 486,
        "critOrWit": 516,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Deep Condolence",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Star Pierce DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "Ranger (Breaker)",
            "Toughness Break"
          ],
          "exactDescription": "Belle Reese is a A-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "name": "Astral Drive: Belle Reese",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Breaker)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Belle Reese is a A-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79534106",
        "ss-79517708"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": "Belle Reese is a A-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79644743"
    },
    {
      "externalId": "ss-unit-79534106",
      "slug": "ss-79534106",
      "nameEn": "Scarlett (Bunny)",
      "nameOriginal": "Scarlett (Bunny)",
      "styleOrTitle": "SSR [Bold Bunny Girl] • Sun Ranger (Breaker)",
      "rarity": "SSR",
      "role": "Ranger (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Sun",
      "attackType": "Pierce",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/103214_qznbh.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": "2026-03-15",
      "isReleasedGlobal": true,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5244,
        "dpOrSpeed": 168,
        "atkOrPower": 718,
        "defOrGuts": 482,
        "critOrWit": 512,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Bold Bunny Girl",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Sun Pierce DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "Ranger (Breaker)",
            "Toughness Break"
          ],
          "exactDescription": "Scarlett (Bunny) is a A-Tier Sun-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "name": "Astral Drive: Scarlett (Bunny)",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Breaker)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Scarlett (Bunny) is a A-Tier Sun-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517708",
        "ss-79517696"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": "Scarlett (Bunny) is a A-Tier Sun-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79534106"
    },
    {
      "externalId": "ss-unit-79517708",
      "slug": "ss-79517708",
      "nameEn": "Tanya",
      "nameOriginal": "Tanya",
      "styleOrTitle": "SSR [Nightfang Assassin] • Star Striker (DPS)",
      "rarity": "SSR",
      "role": "Striker (DPS)",
      "roleColumn": "DPS",
      "element": "Star",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/CONSTRUCT_GADGET_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5216,
        "dpOrSpeed": 167,
        "atkOrPower": 712,
        "defOrGuts": 478,
        "critOrWit": 508,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Nightfang Assassin",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Star Slash DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "Striker (DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Tanya is a A-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "name": "Astral Drive: Tanya",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Tanya is a A-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517696",
        "ss-79517672"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Tanya is a A-Tier Star-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517708"
    },
    {
      "externalId": "ss-unit-79517696",
      "slug": "ss-79517696",
      "nameEn": "Lydia",
      "nameOriginal": "Lydia",
      "styleOrTitle": "SSR [Iron Bastion] • Chaos Ranger (Breaker)",
      "rarity": "SSR",
      "role": "Ranger (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Chaos",
      "attackType": "Pierce",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/WEST_ROD_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5188,
        "dpOrSpeed": 166,
        "atkOrPower": 706,
        "defOrGuts": 474,
        "critOrWit": 504,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Iron Bastion",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Chaos Pierce DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Chaos",
            "Ranger (Breaker)",
            "Toughness Break"
          ],
          "exactDescription": "Lydia is a A-Tier Chaos-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance."
        },
        {
          "name": "Astral Drive: Lydia",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Chaos DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Breaker)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Lydia is a A-Tier Chaos-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517672",
        "ss-79517666"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Lydia is a A-Tier Chaos-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517696"
    },
    {
      "externalId": "ss-unit-79517672",
      "slug": "ss-79517672",
      "nameEn": "Trish",
      "nameOriginal": "Trish",
      "styleOrTitle": "SSR [Shadow Executioner] • Star Assassin (Burst DPS)",
      "rarity": "SSR",
      "role": "Assassin (Burst DPS)",
      "roleColumn": "DPS",
      "element": "Star",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/STELLAR_THIEF_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5160,
        "dpOrSpeed": 165,
        "atkOrPower": 700,
        "defOrGuts": 470,
        "critOrWit": 500,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Shadow Executioner",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Star Slash DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "Assassin (Burst DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Trish is a A-Tier Star-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "name": "Astral Drive: Trish",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Trish is a A-Tier Star-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517666",
        "ss-79517735"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": "Trish is a A-Tier Star-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517672"
    },
    {
      "externalId": "ss-unit-79517666",
      "slug": "ss-79517666",
      "nameEn": "Frey",
      "nameOriginal": "Frey",
      "styleOrTitle": "SSR [Silver Valkyrie] • Star Supporter (Buffer)",
      "rarity": "SSR",
      "role": "Supporter (Buffer)",
      "roleColumn": "SUPPORT",
      "element": "Star",
      "attackType": "Magic",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_PRAY_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5132,
        "dpOrSpeed": 164,
        "atkOrPower": 694,
        "defOrGuts": 466,
        "critOrWit": 496,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 97,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Silver Valkyrie",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Star Magic DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "Supporter (Buffer)",
            "Toughness Break"
          ],
          "exactDescription": "Frey is a A-Tier Star-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "name": "Astral Drive: Frey",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Supporter (Buffer)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Frey is a A-Tier Star-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517735",
        "ss-79517732"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": "Frey is a A-Tier Star-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517666"
    },
    {
      "externalId": "ss-unit-79517735",
      "slug": "ss-79517735",
      "nameEn": "Scarlett",
      "nameOriginal": "Scarlett",
      "styleOrTitle": "SSR [Deadeye Sniper] • Sun Striker (DPS)",
      "rarity": "SSR",
      "role": "Striker (DPS)",
      "roleColumn": "DPS",
      "element": "Sun",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAID_SCISSORS_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5104,
        "dpOrSpeed": 163,
        "atkOrPower": 688,
        "defOrGuts": 462,
        "critOrWit": 492,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Deadeye Sniper",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Sun Slash DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "Striker (DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Scarlett is a A-Tier Sun-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "name": "Astral Drive: Scarlett",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Scarlett is a A-Tier Sun-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517732",
        "ss-79517729"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Scarlett is a A-Tier Sun-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517735"
    },
    {
      "externalId": "ss-unit-79517732",
      "slug": "ss-79517732",
      "nameEn": "Claire",
      "nameOriginal": "Claire",
      "styleOrTitle": "SSR [Order Dragoon] • Moon Assassin (Burst DPS)",
      "rarity": "SSR",
      "role": "Assassin (Burst DPS)",
      "roleColumn": "DPS",
      "element": "Moon",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/MAID_SPEAR_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5076,
        "dpOrSpeed": 162,
        "atkOrPower": 682,
        "defOrGuts": 458,
        "critOrWit": 488,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Order Dragoon",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Moon Slash DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "Assassin (Burst DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Claire is a A-Tier Moon-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "name": "Astral Drive: Claire",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Claire is a A-Tier Moon-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517729",
        "ss-79517726"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Claire is a A-Tier Moon-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517732"
    },
    {
      "externalId": "ss-unit-79517729",
      "slug": "ss-79517729",
      "nameEn": "Naru",
      "nameOriginal": "Naru",
      "styleOrTitle": "SSR [Phantom Butterfly] • Star Ranger (Breaker)",
      "rarity": "SSR",
      "role": "Ranger (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Star",
      "attackType": "Pierce",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/NOA_OBSERVER_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5048,
        "dpOrSpeed": 161,
        "atkOrPower": 676,
        "defOrGuts": 454,
        "critOrWit": 484,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Phantom Butterfly",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Star Pierce DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "Ranger (Breaker)",
            "Toughness Break"
          ],
          "exactDescription": "Naru is a A-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "name": "Astral Drive: Naru",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Breaker)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Naru is a A-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517726",
        "ss-79517723"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": "Naru is a A-Tier Star-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517729"
    },
    {
      "externalId": "ss-unit-79517726",
      "slug": "ss-79517726",
      "nameEn": "Vera",
      "nameOriginal": "Vera",
      "styleOrTitle": "SSR [Crimson Reaper] • Moon Supporter (Buffer)",
      "rarity": "SSR",
      "role": "Supporter (Buffer)",
      "roleColumn": "SUPPORT",
      "element": "Moon",
      "attackType": "Magic",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/LPU_POST_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 5020,
        "dpOrSpeed": 160,
        "atkOrPower": 670,
        "defOrGuts": 450,
        "critOrWit": 480,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 97,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Crimson Reaper",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Moon Magic DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "Supporter (Buffer)",
            "Toughness Break"
          ],
          "exactDescription": "Vera is a A-Tier Moon-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "name": "Astral Drive: Vera",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Supporter (Buffer)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Vera is a A-Tier Moon-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517723",
        "ss-79517717"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": "Vera is a A-Tier Moon-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517726"
    },
    {
      "externalId": "ss-unit-79517723",
      "slug": "ss-79517723",
      "nameEn": "Marcille",
      "nameOriginal": "Marcille",
      "styleOrTitle": "SSR [Starry Dreamer] • Sun Assassin (Burst DPS)",
      "rarity": "SSR",
      "role": "Assassin (Burst DPS)",
      "roleColumn": "DPS",
      "element": "Sun",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/CONSTRUCT_WRENCH_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 4992,
        "dpOrSpeed": 159,
        "atkOrPower": 664,
        "defOrGuts": 446,
        "critOrWit": 476,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Starry Dreamer",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Sun Slash DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "Assassin (Burst DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Marcille is a A-Tier Sun-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "name": "Astral Drive: Marcille",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Marcille is a A-Tier Sun-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517717",
        "ss-79517711"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Marcille is a A-Tier Sun-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517723"
    },
    {
      "externalId": "ss-unit-79517717",
      "slug": "ss-79517717",
      "nameEn": "Besta",
      "nameOriginal": "Besta",
      "styleOrTitle": "SSR [Unbreakable Shield] • Star Defender (Tank / Shield)",
      "rarity": "SSR",
      "role": "Defender (Tank / Shield)",
      "roleColumn": "SUSTAIN",
      "element": "Star",
      "attackType": "Crush",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/WEST_LANCER_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 4964,
        "dpOrSpeed": 158,
        "atkOrPower": 658,
        "defOrGuts": 442,
        "critOrWit": 472,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 96,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Unbreakable Shield",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Star Crush DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "Defender (Tank / Shield)",
            "Toughness Break"
          ],
          "exactDescription": "Besta is a A-Tier Star-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "name": "Astral Drive: Besta",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender (Tank / Shield)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Besta is a A-Tier Star-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517711",
        "ss-79517699"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Besta is a A-Tier Star-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517717"
    },
    {
      "externalId": "ss-unit-79517711",
      "slug": "ss-79517711",
      "nameEn": "Lily",
      "nameOriginal": "Lily",
      "styleOrTitle": "SSR [Pure Blossom] • Moon Caster (AoE / Debuff)",
      "rarity": "SSR",
      "role": "Caster (AoE / Debuff)",
      "roleColumn": "SUB_DPS",
      "element": "Moon",
      "attackType": "Magic",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/DETECTIVE_WATSON_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 4936,
        "dpOrSpeed": 157,
        "atkOrPower": 652,
        "defOrGuts": 438,
        "critOrWit": 468,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Pure Blossom",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Moon Magic DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "Caster (AoE / Debuff)",
            "Toughness Break"
          ],
          "exactDescription": "Lily is a B-Tier Moon-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "name": "Astral Drive: Lily",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (AoE / Debuff)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Lily is a B-Tier Moon-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517699",
        "ss-79517693"
      ],
      "tierOverall": "B",
      "tierReroll": "B",
      "tierBossRaid": "B",
      "numericScore": 8,
      "summaryVerdict": "Lily is a B-Tier Moon-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517711"
    },
    {
      "externalId": "ss-unit-79517699",
      "slug": "ss-79517699",
      "nameEn": "Harley",
      "nameOriginal": "Harley",
      "styleOrTitle": "SSR [Wild Outlaw] • Sun Defender (Tank / Shield)",
      "rarity": "SSR",
      "role": "Defender (Tank / Shield)",
      "roleColumn": "SUSTAIN",
      "element": "Sun",
      "attackType": "Crush",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/WILD_HOG_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 4908,
        "dpOrSpeed": 156,
        "atkOrPower": 646,
        "defOrGuts": 434,
        "critOrWit": 464,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 96,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Wild Outlaw",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Sun Crush DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "Defender (Tank / Shield)",
            "Toughness Break"
          ],
          "exactDescription": "Harley is a B-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "name": "Astral Drive: Harley",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender (Tank / Shield)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Harley is a B-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517693",
        "ss-79517687"
      ],
      "tierOverall": "B",
      "tierReroll": "B",
      "tierBossRaid": "B",
      "numericScore": 7.9,
      "summaryVerdict": "Harley is a B-Tier Sun-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517699"
    },
    {
      "externalId": "ss-unit-79517693",
      "slug": "ss-79517693",
      "nameEn": "Epindel",
      "nameOriginal": "Epindel",
      "styleOrTitle": "SSR [Moonlit Sorceress] • Moon Assassin (Burst DPS)",
      "rarity": "SSR",
      "role": "Assassin (Burst DPS)",
      "roleColumn": "DPS",
      "element": "Moon",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/GRACE_DUALSWORD_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 4880,
        "dpOrSpeed": 155,
        "atkOrPower": 640,
        "defOrGuts": 430,
        "critOrWit": 460,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Moonlit Sorceress",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Moon Slash DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "Assassin (Burst DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Epindel is a B-Tier Moon-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "name": "Astral Drive: Epindel",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Epindel is a B-Tier Moon-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517687",
        "ss-79517684"
      ],
      "tierOverall": "B",
      "tierReroll": "B",
      "tierBossRaid": "B",
      "numericScore": 7.8,
      "summaryVerdict": "Epindel is a B-Tier Moon-attribute Assassin (Burst DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517693"
    },
    {
      "externalId": "ss-unit-79517687",
      "slug": "ss-79517687",
      "nameEn": "Elisa",
      "nameOriginal": "Elisa",
      "styleOrTitle": "SSR [Astral Weaver] • Chaos Supporter (Buffer)",
      "rarity": "SSR",
      "role": "Supporter (Buffer)",
      "roleColumn": "SUPPORT",
      "element": "Chaos",
      "attackType": "Magic",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SAINTESS_ELF_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 4852,
        "dpOrSpeed": 154,
        "atkOrPower": 634,
        "defOrGuts": 426,
        "critOrWit": 456,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 97,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Astral Weaver",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Chaos Magic DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Chaos",
            "Supporter (Buffer)",
            "Toughness Break"
          ],
          "exactDescription": "Elisa is a B-Tier Chaos-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance."
        },
        {
          "name": "Astral Drive: Elisa",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Chaos DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Supporter (Buffer)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Elisa is a B-Tier Chaos-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517684",
        "ss-79517651"
      ],
      "tierOverall": "B",
      "tierReroll": "B",
      "tierBossRaid": "B",
      "numericScore": 7.8,
      "summaryVerdict": "Elisa is a B-Tier Chaos-attribute Supporter (Buffer) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Chaos elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517687"
    },
    {
      "externalId": "ss-unit-79517684",
      "slug": "ss-79517684",
      "nameEn": "Muriel",
      "nameOriginal": "Muriel",
      "styleOrTitle": "SSR [Aegis Guardian] • Sun Caster (AoE / Debuff)",
      "rarity": "SSR",
      "role": "Caster (AoE / Debuff)",
      "roleColumn": "SUB_DPS",
      "element": "Sun",
      "attackType": "Magic",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/SAINTESS_DEMON_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 4824,
        "dpOrSpeed": 153,
        "atkOrPower": 628,
        "defOrGuts": 422,
        "critOrWit": 452,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Aegis Guardian",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Sun Magic DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "Caster (AoE / Debuff)",
            "Toughness Break"
          ],
          "exactDescription": "Muriel is a B-Tier Sun-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "name": "Astral Drive: Muriel",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (AoE / Debuff)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Muriel is a B-Tier Sun-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517651",
        "ss-79576028"
      ],
      "tierOverall": "B",
      "tierReroll": "B",
      "tierBossRaid": "B",
      "numericScore": 8,
      "summaryVerdict": "Muriel is a B-Tier Sun-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517684"
    },
    {
      "externalId": "ss-unit-79517651",
      "slug": "ss-79517651",
      "nameEn": "Asera",
      "nameOriginal": "Asera",
      "styleOrTitle": "SSR [Star Striker] • Moon Striker (DPS)",
      "rarity": "SSR",
      "role": "Striker (DPS)",
      "roleColumn": "DPS",
      "element": "Moon",
      "attackType": "Slash",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_STRANIS_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 4796,
        "dpOrSpeed": 152,
        "atkOrPower": 622,
        "defOrGuts": 418,
        "critOrWit": 448,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Star Striker",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Moon Slash DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "Striker (DPS)",
            "Toughness Break"
          ],
          "exactDescription": "Asera is a B-Tier Moon-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "name": "Astral Drive: Asera",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Asera is a B-Tier Moon-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79576028",
        "ss-79517702"
      ],
      "tierOverall": "B",
      "tierReroll": "B",
      "tierBossRaid": "B",
      "numericScore": 7.9,
      "summaryVerdict": "Asera is a B-Tier Moon-attribute Striker (DPS) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517651"
    },
    {
      "externalId": "ss-unit-79576028",
      "slug": "ss-79576028",
      "nameEn": "Omega",
      "nameOriginal": "Omega",
      "styleOrTitle": "SSR [Imaginary Pioneer] • Star Caster (AoE / Debuff)",
      "rarity": "SSR",
      "role": "Caster (AoE / Debuff)",
      "roleColumn": "SUB_DPS",
      "element": "Star",
      "attackType": "Magic",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/STARPIERCER_OMEGA_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 4768,
        "dpOrSpeed": 151,
        "atkOrPower": 616,
        "defOrGuts": 414,
        "critOrWit": 444,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Imaginary Pioneer",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Star Magic DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "Caster (AoE / Debuff)",
            "Toughness Break"
          ],
          "exactDescription": "Omega is a C-Tier Star-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "name": "Astral Drive: Omega",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Star DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (AoE / Debuff)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Omega is a C-Tier Star-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517702",
        "ss-79517663"
      ],
      "tierOverall": "C",
      "tierReroll": "C",
      "tierBossRaid": "C",
      "numericScore": 7.3,
      "summaryVerdict": "Omega is a C-Tier Star-attribute Caster (AoE / Debuff) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Star elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79576028"
    },
    {
      "externalId": "ss-unit-79517702",
      "slug": "ss-79517702",
      "nameEn": "Petra",
      "nameOriginal": "Petra",
      "styleOrTitle": "SSR [Flame Artisan] • Sun Ranger (Breaker)",
      "rarity": "SSR",
      "role": "Ranger (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Sun",
      "attackType": "Pierce",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/CONSTRUCT_BOMB_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 4740,
        "dpOrSpeed": 150,
        "atkOrPower": 610,
        "defOrGuts": 410,
        "critOrWit": 440,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 76,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Flame Artisan",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Sun Pierce DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "Ranger (Breaker)",
            "Toughness Break"
          ],
          "exactDescription": "Petra is a C-Tier Sun-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "name": "Astral Drive: Petra",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Sun DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Breaker)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Petra is a C-Tier Sun-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-79517663",
        "ss-80384230"
      ],
      "tierOverall": "C",
      "tierReroll": "C",
      "tierBossRaid": "C",
      "numericScore": 7.3,
      "summaryVerdict": "Petra is a C-Tier Sun-attribute Ranger (Breaker) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Sun elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517702"
    },
    {
      "externalId": "ss-unit-79517663",
      "slug": "ss-79517663",
      "nameEn": "Carmen",
      "nameOriginal": "Carmen",
      "styleOrTitle": "SSR [Crimson Blade] • Moon Defender (Tank / Shield)",
      "rarity": "SSR",
      "role": "Defender (Tank / Shield)",
      "roleColumn": "SUSTAIN",
      "element": "Moon",
      "attackType": "Crush",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/KINGDOM_SHIELDER_icon.webp",
      "releaseDateAsian": "2025-11-18",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 6,
      "recommendedDupes": "Base (0 Dupes)",
      "baseStats": {
        "hpOrStamina": 4712,
        "dpOrSpeed": 149,
        "atkOrPower": 604,
        "defOrGuts": 406,
        "critOrWit": 436,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 78,
        "sustainScore": 96,
        "spEfficiencyScore": 92
      },
      "skills": [
        {
          "name": "Stellar Burst: Crimson Blade",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "420% Moon Crush DMG + 4 Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "Defender (Tank / Shield)",
            "Toughness Break"
          ],
          "exactDescription": "Carmen is a C-Tier Moon-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "name": "Astral Drive: Carmen",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "240% Moon DMG + Action Speed Up (2 Turns)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender (Tank / Shield)",
            "Action Speed"
          ],
          "exactDescription": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "Carmen is a C-Tier Moon-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters."
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance."
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "Scales strongly with SSR Arcana training multipliers and Limit Break 1 (+15% Nova Efficiency)."
        }
      ],
      "synergyUnitSlugs": [
        "ss-80384230",
        "ss-80354674"
      ],
      "tierOverall": "C",
      "tierReroll": "C",
      "tierBossRaid": "C",
      "numericScore": 7.5,
      "summaryVerdict": "Carmen is a C-Tier Moon-attribute Defender (Tank / Shield) specializing in Cosmo Gate and Void Singularity boss encounters. Provides high Toughness Gauge break efficiency, action bar manipulation, and Moon elemental resonance.",
      "longevityNote": "Maintains top-tier performance across Cosmo Gate Stage 10 and Void Singularity endgame raids.",
      "sourceUrl": "https://meta.gg/star-savior/units/ss-79517663"
    }
  ],
  "equipments": [
    {
      "externalId": "ss-arcana-80231986",
      "slug": "ss-arcana-80231986",
      "nameEn": "Arcana: Summer Night Sky",
      "category": "SSR Arcana",
      "subType": "Vitality (HP) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/07/190530_zk9ua.webp",
      "tierRank": "B",
      "score": 8,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Vitality (HP)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Vitality (HP) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-80231986"
    },
    {
      "externalId": "ss-arcana-79855448",
      "slug": "ss-arcana-79855448",
      "nameEn": "Arcana: Battle-Hardened Mercenary",
      "category": "SSR Arcana",
      "subType": "Vitality (HP) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/202111_kmw0s.webp",
      "tierRank": "B",
      "score": 7.9,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Vitality (HP)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Vitality (HP) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79855448"
    },
    {
      "externalId": "ss-arcana-79717619",
      "slug": "ss-arcana-79717619",
      "nameEn": "Arcana: Clumsy Way to Satisfy Desire",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/02/185314_wdzh2.webp",
      "tierRank": "B",
      "score": 7.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79717619"
    },
    {
      "externalId": "ss-arcana-79644746",
      "slug": "ss-arcana-79644746",
      "nameEn": "Arcana: Deep Condolences",
      "category": "SSR Arcana",
      "subType": "Focus (Acc) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/01/200315_snce6.webp",
      "tierRank": "B",
      "score": 7.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Focus (Acc)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Focus (Acc) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79644746"
    },
    {
      "externalId": "ss-arcana-79517789",
      "slug": "ss-arcana-79517789",
      "nameEn": "Arcana: Undercover Cop",
      "category": "SSR Arcana",
      "subType": "Endurance (DEF) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_OFFICER_POLICE_SSR_01_icon_arcana.webp",
      "tierRank": "B",
      "score": 8,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Endurance (DEF)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Endurance (DEF) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517789"
    },
    {
      "externalId": "ss-arcana-79517786",
      "slug": "ss-arcana-79517786",
      "nameEn": "Arcana: A Satisfying Meal",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_LANCER_SSR_01_icon_arcana.webp",
      "tierRank": "B",
      "score": 7.9,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517786"
    },
    {
      "externalId": "ss-arcana-79517762",
      "slug": "ss-arcana-79517762",
      "nameEn": "Arcana: Heavenly Ordeal",
      "category": "SSR Arcana",
      "subType": "Endurance (DEF) • DEF %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_SAINTESS_ELF_SSR_01_icon_arcana.webp",
      "tierRank": "B",
      "score": 7.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Endurance (DEF)",
        "BonusStat": "DEF %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants DEF % training bonus and unlocks Endurance (DEF) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517762"
    },
    {
      "externalId": "ss-arcana-79517750",
      "slug": "ss-arcana-79517750",
      "nameEn": "Arcana: The Princess Ascends the Throne",
      "category": "SSR Arcana",
      "subType": "Vitality (HP) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_PRAY_SSR_01_icon_arcana.webp",
      "tierRank": "B",
      "score": 7.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Vitality (HP)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Vitality (HP) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517750"
    },
    {
      "externalId": "ss-arcana-79534220",
      "slug": "ss-arcana-79534220",
      "nameEn": "Arcana: Bold and Daring Bunny Girl",
      "category": "SSR Arcana",
      "subType": "Power (STR) • Effect Hit %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/105829_y0pco.webp",
      "tierRank": "C",
      "score": 7.5,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "Effect Hit %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants Effect Hit % training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79534220"
    },
    {
      "externalId": "ss-arcana-79517792",
      "slug": "ss-arcana-79517792",
      "nameEn": "Arcana: More Professional Than Anyone",
      "category": "SSR Arcana",
      "subType": "Vitality (HP) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_LPU_POST_SSR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 7.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Vitality (HP)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Vitality (HP) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517792"
    },
    {
      "externalId": "ss-arcana-79517780",
      "slug": "ss-arcana-79517780",
      "nameEn": "Arcana: There Is Always Only One Truth",
      "category": "SSR Arcana",
      "subType": "Focus (Acc) • ATK %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_DETECTIVE_WATSON_SSR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 7.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Focus (Acc)",
        "BonusStat": "ATK %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % training bonus and unlocks Focus (Acc) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517780"
    },
    {
      "externalId": "ss-arcana-79517777",
      "slug": "ss-arcana-79517777",
      "nameEn": "Arcana: Tempura Master",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_CONSTRUCT_GADGET_SSR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 7.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517777"
    },
    {
      "externalId": "ss-arcana-79517765",
      "slug": "ss-arcana-79517765",
      "nameEn": "Arcana: Unseen Place",
      "category": "SSR Arcana",
      "subType": "Focus (Acc) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_BEAMSWORD_SSR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 7.5,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Focus (Acc)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Focus (Acc) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517765"
    },
    {
      "externalId": "ss-arcana-79517756",
      "slug": "ss-arcana-79517756",
      "nameEn": "Arcana: A Walk with Friends",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAGICIAN_DRUID_SSR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 7.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517756"
    },
    {
      "externalId": "ss-arcana-79517747",
      "slug": "ss-arcana-79517747",
      "nameEn": "Arcana: Night View Through Glass",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_SHIELDER_SSR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 7.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517747"
    },
    {
      "externalId": "ss-arcana-79893874",
      "slug": "ss-arcana-79893874",
      "nameEn": "Arcana: Forbidden Archives Vol. 1",
      "category": "SSR Arcana",
      "subType": "Vitality (HP) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/182813_7ue9j.webp",
      "tierRank": "C",
      "score": 7.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Vitality (HP)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Vitality (HP) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79893874"
    },
    {
      "externalId": "ss-arcana-79517840",
      "slug": "ss-arcana-79517840",
      "nameEn": "Arcana: Rabbit Town",
      "category": "SSR Arcana",
      "subType": "Endurance (DEF) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_CONSTRUCT_WRENCH_SR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 7.5,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Endurance (DEF)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Endurance (DEF) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517840"
    },
    {
      "externalId": "ss-arcana-79517825",
      "slug": "ss-arcana-79517825",
      "nameEn": "Arcana: Ready, Aim, Fire",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAGICIAN_SNIPER_SR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 7.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517825"
    },
    {
      "externalId": "ss-arcana-79517816",
      "slug": "ss-arcana-79517816",
      "nameEn": "Arcana: Choosing the Prey",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_STELLAR_THIEF_SR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 7.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517816"
    },
    {
      "externalId": "ss-arcana-79517813",
      "slug": "ss-arcana-79517813",
      "nameEn": "Arcana: Phantom Butterfly",
      "category": "SSR Arcana",
      "subType": "Vitality (HP) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_NIGHTMARE_REAPER_SR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 7.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Vitality (HP)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Vitality (HP) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517813"
    },
    {
      "externalId": "ss-arcana-79517807",
      "slug": "ss-arcana-79517807",
      "nameEn": "Arcana: Cleaning & An Unexpected Guest",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit DMG %",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_SPEAR_SR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 7.5,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit DMG %",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit DMG % training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517807"
    },
    {
      "externalId": "ss-arcana-80139832",
      "slug": "ss-arcana-80139832",
      "nameEn": "Arcana: Death to the Flowers",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/161306_gw2et.webp",
      "tierRank": "SS",
      "score": 9.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-80139832"
    },
    {
      "externalId": "ss-arcana-80012824",
      "slug": "ss-arcana-80012824",
      "nameEn": "Arcana: Weakness-Covering Custom Special Training",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/05/172414_ia8pq.webp",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-80012824"
    },
    {
      "externalId": "ss-arcana-79941760",
      "slug": "ss-arcana-79941760",
      "nameEn": "Arcana: Warmth of the White Moon",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/04/194656_x2w06.webp",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79941760"
    },
    {
      "externalId": "ss-arcana-79766540",
      "slug": "ss-arcana-79766540",
      "nameEn": "Arcana: Indomitable Masterpiece",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/02/183029_ni2vf.webp",
      "tierRank": "SS",
      "score": 9.5,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79766540"
    },
    {
      "externalId": "ss-arcana-79534223",
      "slug": "ss-arcana-79534223",
      "nameEn": "Arcana: The Perfect Bunny Girl",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/105828_b3l1z.webp",
      "tierRank": "SS",
      "score": 9.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79534223"
    },
    {
      "externalId": "ss-arcana-79517771",
      "slug": "ss-arcana-79517771",
      "nameEn": "Arcana: Made by Petra",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_CONSTRUCT_BOMB_SSR_01_icon_arcana.webp",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517771"
    },
    {
      "externalId": "ss-arcana-80482327",
      "slug": "ss-arcana-80482327",
      "nameEn": "Arcana: Is This... Clothing?",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/10/192925_u7brs.webp",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-80482327"
    },
    {
      "externalId": "ss-arcana-80400913",
      "slug": "ss-arcana-80400913",
      "nameEn": "Arcana: Hedonist's Consolation",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/194438_w92ck.webp",
      "tierRank": "S",
      "score": 9,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-80400913"
    },
    {
      "externalId": "ss-arcana-80363578",
      "slug": "ss-arcana-80363578",
      "nameEn": "Arcana: Journey of No Return",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/173117_4wct9.webp",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-80363578"
    },
    {
      "externalId": "ss-arcana-80283517",
      "slug": "ss-arcana-80283517",
      "nameEn": "Arcana: Vacation Prep Starts with Shopping!",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/07/170418_4q5sx.webp",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-80283517"
    },
    {
      "externalId": "ss-arcana-79865537",
      "slug": "ss-arcana-79865537",
      "nameEn": "Arcana: The End Wears a Maiden's Face",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/115036_zi6xg.webp",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79865537"
    },
    {
      "externalId": "ss-arcana-79606361",
      "slug": "ss-arcana-79606361",
      "nameEn": "Arcana: Daughter of House Stranis",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/12/182739_q8esp.webp",
      "tierRank": "S",
      "score": 9,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79606361"
    },
    {
      "externalId": "ss-arcana-79517795",
      "slug": "ss-arcana-79517795",
      "nameEn": "Arcana: Dreaming Under the Stars",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_NOA_OBSERVER_SSR_01_icon_arcana.webp",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517795"
    },
    {
      "externalId": "ss-arcana-79517783",
      "slug": "ss-arcana-79517783",
      "nameEn": "Arcana: As Cute as Kira!",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MUTANT_MASK_SSR_01_icon_arcana.webp",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517783"
    },
    {
      "externalId": "ss-arcana-79517774",
      "slug": "ss-arcana-79517774",
      "nameEn": "Arcana: No Pain, No Gain",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_INDEPENDENT_DRAGON_SSR_01_icon_arcana.webp",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517774"
    },
    {
      "externalId": "ss-arcana-79517744",
      "slug": "ss-arcana-79517744",
      "nameEn": "Arcana: A Knight's Oath",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_KNIGHT_SSR_01_icon_arcana.webp",
      "tierRank": "S",
      "score": 9,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517744"
    },
    {
      "externalId": "ss-arcana-79517741",
      "slug": "ss-arcana-79517741",
      "nameEn": "Arcana: Quiet Rest",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517741"
    },
    {
      "externalId": "ss-arcana-80521390",
      "slug": "ss-arcana-80521390",
      "nameEn": "Arcana: Harsh Trial",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/10/193414_1r78o.webp",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-80521390"
    },
    {
      "externalId": "ss-arcana-80498278",
      "slug": "ss-arcana-80498278",
      "nameEn": "Arcana: Sandman's Outing",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/10/190614_vbrik.webp",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-80498278"
    },
    {
      "externalId": "ss-arcana-80444335",
      "slug": "ss-arcana-80444335",
      "nameEn": "Arcana: Veteran Detective's Investigation Method",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/170800_jb9o5.webp",
      "tierRank": "A",
      "score": 8.5,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-80444335"
    },
    {
      "externalId": "ss-arcana-80331877",
      "slug": "ss-arcana-80331877",
      "nameEn": "Arcana: Chains of Eternal Bondage",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/08/193327_txw73.webp",
      "tierRank": "A",
      "score": 8.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-80331877"
    },
    {
      "externalId": "ss-arcana-80210542",
      "slug": "ss-arcana-80210542",
      "nameEn": "Arcana: Chase the Light!",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/06/170551_o4b9x.webp",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-80210542"
    },
    {
      "externalId": "ss-arcana-80191501",
      "slug": "ss-arcana-80191501",
      "nameEn": "Arcana: Resolve to Drink Poison",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/07/184533_dvhyg.webp",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-80191501"
    },
    {
      "externalId": "ss-arcana-80077855",
      "slug": "ss-arcana-80077855",
      "nameEn": "Arcana: Till Death Do Us Part",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/06/170751_oeb4y.webp",
      "tierRank": "A",
      "score": 8.5,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-80077855"
    },
    {
      "externalId": "ss-arcana-80041744",
      "slug": "ss-arcana-80041744",
      "nameEn": "Arcana: Languid Afternoon Interlude",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/05/132533_e9xba.webp",
      "tierRank": "A",
      "score": 8.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-80041744"
    },
    {
      "externalId": "ss-arcana-79983016",
      "slug": "ss-arcana-79983016",
      "nameEn": "Arcana: Today's First Step",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/04/173815_r9imk.webp",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79983016"
    },
    {
      "externalId": "ss-arcana-79855463",
      "slug": "ss-arcana-79855463",
      "nameEn": "Arcana: Counterattack of Nostalgia",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/202110_u9dqe.webp",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79855463"
    },
    {
      "externalId": "ss-arcana-79808948",
      "slug": "ss-arcana-79808948",
      "nameEn": "Arcana: Responsibility Piled in Paperwork",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/201813_3r618.webp",
      "tierRank": "A",
      "score": 8.5,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79808948"
    },
    {
      "externalId": "ss-arcana-79576397",
      "slug": "ss-arcana-79576397",
      "nameEn": "Arcana: Imaginary Pioneer",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/121445_x6mr0.webp",
      "tierRank": "A",
      "score": 8.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79576397"
    },
    {
      "externalId": "ss-arcana-79517768",
      "slug": "ss-arcana-79517768",
      "nameEn": "Arcana: Born to Be Wild",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WILD_HOG_SSR_01_icon_arcana.webp",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517768"
    },
    {
      "externalId": "ss-arcana-79517759",
      "slug": "ss-arcana-79517759",
      "nameEn": "Arcana: Heavenly Judgment",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_SAINTESS_DEMON_SSR_01_icon_arcana.webp",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517759"
    },
    {
      "externalId": "ss-arcana-79517753",
      "slug": "ss-arcana-79517753",
      "nameEn": "Arcana: Atop the Pavilion, Greeting the Glass Moon",
      "category": "SSR Arcana",
      "subType": "Power (STR) • ATK % / Crit Rate",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_EASTERN_SWORDMASTER_SSR_01_icon_arcana.webp",
      "tierRank": "A",
      "score": 8.5,
      "recommendedDupes": "LB1+",
      "stats": {
        "AptitudeTag": "Power (STR)",
        "BonusStat": "ATK % / Crit Rate",
        "ClassRestriction": "Universal (All Classes)"
      },
      "effectSummary": "Grants ATK % / Crit Rate training bonus and unlocks Power (STR) Gold Potential passives for Universal (All Classes) units during Savior Resonance runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://meta.gg/star-savior/arcanas/ss-arcana-79517753"
    }
  ],
  "bosses": [
    {
      "slug": "cosmo-gate-abyssal-sovereign",
      "nameEn": "Cosmo Gate Season Boss — Abyssal Sovereign",
      "modeName": "Cosmo Gate",
      "difficultyLabel": "Stage 10 Extreme",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/10/194558_4ycbe.webp",
      "hpStat": "48,000,000 HP",
      "shieldOrDpStat": "18 Toughness Gauge Bars",
      "weaknesses": [
        "Moon (+30% DMG)",
        "Star (+30% DMG)",
        "Multi-Hit Toughness Break"
      ],
      "resistances": [
        "Chaos Resistance +40%",
        "Stun Immunity"
      ],
      "attackPatterns": [
        {
          "turnOrPhase": "Turns 1–3",
          "attackName": "Astral Barrier Deployment",
          "damageType": "AoE Magic + -60% Damage Taken Shield",
          "counterAction": "Use Lugh, Rosaria, and Roberta multi-hit skills to shred 18 Toughness Bars."
        },
        {
          "turnOrPhase": "Turns 4–6",
          "attackName": "Broken Vulnerability Window",
          "damageType": "Staggered (+50% Damage Taken)",
          "counterAction": "Unleash Frey (Bunny) and Harley EX Ultimates stacked with Dana Crit DMG buffs."
        }
      ],
      "strategySteps": [
        "Bring at least 2 dedicated Toughness Breakers (Lugh, Rosaria, or Roberta) to break the 18-bar gauge before Turn 4.",
        "Save Frey (Bunny) EX Ultimate and Dana buffs for the 2-turn Broken window to maximize raid score."
      ],
      "recommendedUnitSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957",
        "ss-80022340",
        "ss-79717421"
      ],
      "sourceUrl": "https://meta.gg/star-savior/bosses/cosmo-gate-abyssal-sovereign"
    },
    {
      "slug": "void-singularity-stella-eater",
      "nameEn": "Void Singularity — Stella Eater",
      "modeName": "Void Singularity",
      "difficultyLabel": "Depth 15 Endgame",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/02/185913_8y3w2.webp",
      "hpStat": "32,500,000 HP",
      "shieldOrDpStat": "14 Toughness Gauge Bars",
      "weaknesses": [
        "Sun (+30% DMG)",
        "Order (+30% DMG)"
      ],
      "resistances": [
        "Moon Resistance +30%"
      ],
      "attackPatterns": [
        {
          "turnOrPhase": "Turns 1–4",
          "attackName": "Starlight Corrosion",
          "damageType": "AoE Burn + Action Speed Down",
          "counterAction": "Protect allies with Besta Barrier + Immunity and counter-break with Order/Sun Strikers."
        }
      ],
      "strategySteps": [
        "Deploy Besta or Lydia in the front row to absorb Starlight Corrosion and maintain team-wide Barrier.",
        "Focus single-target Order and Sun burst skills during the Toughness Break window."
      ],
      "recommendedUnitSlugs": [
        "ss-80218957",
        "ss-80022340",
        "ss-79717421",
        "ss-80482306",
        "ss-80331829"
      ],
      "sourceUrl": "https://meta.gg/star-savior/bosses/void-singularity-stella-eater"
    }
  ],
  "banners": [
    {
      "slug": "starsavior-bunny-frey-pickup",
      "bannerTitle": "Limited Rate-Up — Frey (Bunny) & Indomitable Masterpiece Arcana",
      "bannerType": "LIMITED",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/10/194558_4ycbe.webp",
      "featuredNames": [
        "Professor M",
        "Amora"
      ],
      "featuredUnitSlugs": [
        "ss-80384230",
        "ss-80354674"
      ],
      "asianStartDate": "2026-11-01",
      "asianEndDate": "2026-11-22",
      "estGlobalStartDate": "2027-02-01",
      "estGlobalEndDate": "2027-02-22",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "SSS Tier 0 Striker with unmatched AoE Moon-element burst damage, self-crit buffing, and extra-turn Nova economy.",
      "pityCurrencyCost": 30000,
      "sourceUrl": "https://meta.gg/star-savior/banners/bunny-frey"
    },
    {
      "slug": "starsavior-lugh-besta-pickup",
      "bannerTitle": "Order & Aegis Dual Rate-Up — Lugh & Besta",
      "bannerType": "FESTIVAL",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/02/185913_8y3w2.webp",
      "featuredNames": [
        "Amora",
        "Smile (Swimsuit)"
      ],
      "featuredUnitSlugs": [
        "ss-80354674",
        "ss-80218957"
      ],
      "asianStartDate": "2026-11-15",
      "asianEndDate": "2026-12-05",
      "estGlobalStartDate": "2027-02-15",
      "estGlobalEndDate": "2027-03-05",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "Both Lugh and Besta sit at the top of SSS Tier 0 as the premier Toughness Breaker and team-wide Barrier Defender.",
      "pityCurrencyCost": 30000,
      "sourceUrl": "https://meta.gg/star-savior/banners/lugh-besta"
    },
    {
      "slug": "starsavior-arcana-pickup",
      "bannerTitle": "SSR Arcana Rate-Up — Death to the Flowers & Custom Special Training",
      "bannerType": "SUPPORT_CARD",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/203458_pemnt.webp",
      "featuredNames": [
        "Arcana: Summer Night Sky",
        "Arcana: Battle-Hardened Mercenary"
      ],
      "featuredUnitSlugs": [
        "ss-80384230",
        "ss-80022340"
      ],
      "asianStartDate": "2026-11-10",
      "asianEndDate": "2026-11-30",
      "estGlobalStartDate": "2027-02-10",
      "estGlobalEndDate": "2027-02-28",
      "pullVerdict": "HIGH_VALUE",
      "verdictReasoning": "Top-ranked SSS/SS Arcanas providing the highest Power (STR) and Critical Damage training multipliers in the game.",
      "pityCurrencyCost": 30000,
      "sourceUrl": "https://meta.gg/star-savior/banners/arcana-pickup"
    }
  ]
};
