import { GameAdapterBundle } from './heaven-burns-red.adapter';

export const umaMusumeBundle: GameAdapterBundle = {
  "slug": "uma-musume",
  "name": "Uma Musume: Pretty Derby",
  "shortName": "Uma Musume",
  "asianRegion": "JP",
  "asianPatchVersion": "v5.2.0 JP (Game8 Verified)",
  "globalPatchVersion": "v1.8.0 EN (Global)",
  "foresightGapMonths": 36,
  "coverImageUrl": "https://img.game8.jp/13038190/f1fc397f35f4fdf6aadb5c519ec0673f.webp/show",
  "currencyName": "Carats",
  "pullCostSingle": 150,
  "pityThreshold": 200,
  "monthlyF2pIncome": 13500,
  "monthlyPassIncome": 19500,
  "sourceUrl": "https://game8.jp/umamusume/372573",
  "rolesConfig": [
    {
      "key": "DPS",
      "label": "FRONT RUNNER (逃げ)",
      "colorHex": "#DC2626"
    },
    {
      "key": "SUB_DPS",
      "label": "PACE CHASER / LEADER (先行)",
      "colorHex": "#D97706"
    },
    {
      "key": "SUPPORT",
      "label": "LATE SURGER / BETWEENER (差し)",
      "colorHex": "#2563EB"
    },
    {
      "key": "SUSTAIN",
      "label": "END CLOSER / CHASER (追込)",
      "colorHex": "#15803D"
    }
  ],
  "elementsConfig": [
    {
      "key": "Short",
      "label": "Short (短距離)",
      "colorHex": "#DC2626"
    },
    {
      "key": "Mile",
      "label": "Mile (マイル)",
      "colorHex": "#2563EB"
    },
    {
      "key": "Medium",
      "label": "Medium (中距離)",
      "colorHex": "#D97706"
    },
    {
      "key": "Long",
      "label": "Long (長距離)",
      "colorHex": "#15803D"
    },
    {
      "key": "Dirt",
      "label": "Dirt (ダート)",
      "colorHex": "#7C3AED"
    }
  ],
  "units": [
    {
      "externalId": "game8-uma-818827",
      "slug": "uma-818827",
      "nameEn": "Symboli Rudolf (［Adamant Sovereign］)",
      "nameOriginal": "［Adamant Sovereign］シンボリルドルフ",
      "styleOrTitle": "3★ [［Adamant Sovereign］シンボリルドルフ] (Long / Betweener)",
      "rarity": "3★",
      "role": "Long Betweener",
      "roleColumn": "SUPPORT",
      "element": "Long",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/13038190/f1fc397f35f4fdf6aadb5c519ec0673f.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1850,
        "atkOrPower": 1650,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 新ルドルフ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 差し Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Adamant Sovereign］シンボリルドルフ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-811061",
        "uma-794061"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.9,
      "summaryVerdict": "芝 長距離 差し Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/818827).",
      "sourceUrl": "https://game8.jp/umamusume/818827"
    },
    {
      "externalId": "game8-uma-811061",
      "slug": "uma-811061",
      "nameEn": "［Fates Chosen Star］エピファネイア",
      "nameOriginal": "［Fates Chosen Star］エピファネイア",
      "styleOrTitle": "3★ [［Fates Chosen Star］エピファネイア] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12905132/3295d3ffba05887e458a3b0a898dce66.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1840,
        "atkOrPower": 1640,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: エピファ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Fates Chosen Star］エピファネイア)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-794061",
        "uma-785654"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.8,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/811061).",
      "sourceUrl": "https://game8.jp/umamusume/811061"
    },
    {
      "externalId": "game8-uma-794061",
      "slug": "uma-794061",
      "nameEn": "［万福龍湯伝・頂］ナリタトップロード",
      "nameOriginal": "［万福龍湯伝・頂］ナリタトップロード",
      "styleOrTitle": "3★ [［万福龍湯伝・頂］ナリタトップロード] (Long / Leader)",
      "rarity": "3★",
      "role": "Long Leader",
      "roleColumn": "SUB_DPS",
      "element": "Long",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12696747/1f99f83a289a7f9a6ff573ad6e270600.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1830,
        "atkOrPower": 1630,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ラーメントプロ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 先行 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［万福龍湯伝・頂］ナリタトップロード)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-785654",
        "uma-780423"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "芝 長距離 先行 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/794061).",
      "sourceUrl": "https://game8.jp/umamusume/794061"
    },
    {
      "externalId": "game8-uma-785654",
      "slug": "uma-785654",
      "nameEn": "Manhattan Cafe (［幽玄薔薇］)",
      "nameOriginal": "［幽玄薔薇］マンハッタンカフェ",
      "styleOrTitle": "3★ [［幽玄薔薇］マンハッタンカフェ] (Long / Betweener)",
      "rarity": "3★",
      "role": "Long Betweener",
      "roleColumn": "SUPPORT",
      "element": "Long",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12598771/3882cd93f6432d3e3bd661e13ca4b07a.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1820,
        "atkOrPower": 1620,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 花嫁カフェ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 差し Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［幽玄薔薇］マンハッタンカフェ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-780423",
        "uma-775196"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "芝 長距離 差し Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/785654).",
      "sourceUrl": "https://game8.jp/umamusume/785654"
    },
    {
      "externalId": "game8-uma-780423",
      "slug": "uma-780423",
      "nameEn": "［Glacial Queen］アドマイヤグルーヴ",
      "nameOriginal": "［Glacial Queen］アドマイヤグルーヴ",
      "styleOrTitle": "3★ [［Glacial Queen］アドマイヤグルーヴ] (Medium / Betweener)",
      "rarity": "3★",
      "role": "Medium Betweener",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12504904/6aa5e65d2d80c28a732677ce6e77ae49.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1810,
        "atkOrPower": 1610,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: アルヴ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Glacial Queen］アドマイヤグルーヴ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-775196",
        "uma-755849"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.6,
      "summaryVerdict": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/780423).",
      "sourceUrl": "https://game8.jp/umamusume/780423"
    },
    {
      "externalId": "game8-uma-775196",
      "slug": "uma-775196",
      "nameEn": "Sakura Bakushin O (［春雷の韋駄天］)",
      "nameOriginal": "［春雷の韋駄天］サクラバクシンオー",
      "styleOrTitle": "3★ [［春雷の韋駄天］サクラバクシンオー] (Short / Runner)",
      "rarity": "3★",
      "role": "Short Runner",
      "roleColumn": "DPS",
      "element": "Short",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/12431582/c6c585043652181ce47eb3d5879e9084.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1800,
        "atkOrPower": 1600,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ダンスバクシン",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Short Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "芝 短距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［春雷の韋駄天］サクラバクシンオー)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Short"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 短距離 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-755849",
        "uma-758981"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.9,
      "summaryVerdict": "芝 短距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/775196).",
      "sourceUrl": "https://game8.jp/umamusume/775196"
    },
    {
      "externalId": "game8-uma-755849",
      "slug": "uma-755849",
      "nameEn": "Almond Eye (［The Changer］)",
      "nameOriginal": "［The Changer］アーモンドアイ",
      "styleOrTitle": "3★ [［The Changer］アーモンドアイ] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12337830/1e198d999fe56557a8f984668d7cffc4.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1790,
        "atkOrPower": 1590,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: アモアイ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［The Changer］アーモンドアイ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-758981",
        "uma-751219"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.8,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/755849).",
      "sourceUrl": "https://game8.jp/umamusume/755849"
    },
    {
      "externalId": "game8-uma-758981",
      "slug": "uma-758981",
      "nameEn": "Taiki Shuttle (［Baa Baa Patisserie］)",
      "nameOriginal": "［Baa Baa Patisserie］タイキシャトル",
      "styleOrTitle": "3★ [［Baa Baa Patisserie］タイキシャトル] (Mile / Leader)",
      "rarity": "3★",
      "role": "Mile Leader",
      "roleColumn": "SUB_DPS",
      "element": "Mile",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12247377/6896c2324bff623e868a153a06031256.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1780,
        "atkOrPower": 1580,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: バレタイキ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Mile Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Baa Baa Patisserie］タイキシャトル)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Mile"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 マイル 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-751219",
        "uma-734203"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "芝 マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/758981).",
      "sourceUrl": "https://game8.jp/umamusume/758981"
    },
    {
      "externalId": "game8-uma-751219",
      "slug": "uma-751219",
      "nameEn": "［Sunlit Outsider］ステイゴールド",
      "nameOriginal": "［Sunlit Outsider］ステイゴールド",
      "styleOrTitle": "3★ [［Sunlit Outsider］ステイゴールド] (Medium / Betweener)",
      "rarity": "3★",
      "role": "Medium Betweener",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12131766/4ea41086f26f405125c0a50bbd2eaa84.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1770,
        "atkOrPower": 1570,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ステゴ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Sunlit Outsider］ステイゴールド)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-734203",
        "uma-717556"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/751219).",
      "sourceUrl": "https://game8.jp/umamusume/751219"
    },
    {
      "externalId": "game8-uma-734203",
      "slug": "uma-734203",
      "nameEn": "［宵闇ネオカグラ］トランセンド",
      "nameOriginal": "［宵闇ネオカグラ］トランセンド",
      "styleOrTitle": "3★ [［宵闇ネオカグラ］トランセンド] (Dirt / Runner)",
      "rarity": "3★",
      "role": "Dirt Runner",
      "roleColumn": "DPS",
      "element": "Dirt",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/11919933/1be56264add927efdfc5ee8963c0078b.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1760,
        "atkOrPower": 1560,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 温泉トラン",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Dirt Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "ダート マイル 逃げ Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［宵闇ネオカグラ］トランセンド)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Dirt"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "ダート マイル 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-717556",
        "uma-712500"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.6,
      "summaryVerdict": "ダート マイル 逃げ Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/734203).",
      "sourceUrl": "https://game8.jp/umamusume/734203"
    },
    {
      "externalId": "game8-uma-717556",
      "slug": "uma-717556",
      "nameEn": "［Red Devil Gear］エスポワールシチー",
      "nameOriginal": "［Red Devil Gear］エスポワールシチー",
      "styleOrTitle": "3★ [［Red Devil Gear］エスポワールシチー] (Dirt / Leader)",
      "rarity": "3★",
      "role": "Dirt Leader",
      "roleColumn": "SUB_DPS",
      "element": "Dirt",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/11754833/db8954f17d30174a37fad403bed0fa3c.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1850,
        "atkOrPower": 1650,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: エスポ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Dirt Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "ダート マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Red Devil Gear］エスポワールシチー)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Dirt"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "ダート マイル 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-712500",
        "uma-708453"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.9,
      "summaryVerdict": "ダート マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/717556).",
      "sourceUrl": "https://game8.jp/umamusume/717556"
    },
    {
      "externalId": "game8-uma-712500",
      "slug": "uma-712500",
      "nameEn": "Still in Love (［緋想の誓衣］)",
      "nameOriginal": "［緋想の誓衣］スティルインラブ",
      "styleOrTitle": "3★ [［緋想の誓衣］スティルインラブ] (Medium / Betweener)",
      "rarity": "3★",
      "role": "Medium Betweener",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/11697596/732b5697f2f8671a941c023479fb622c.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1840,
        "atkOrPower": 1640,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: スティル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［緋想の誓衣］スティルインラブ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-708453",
        "uma-697314"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.8,
      "summaryVerdict": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/712500).",
      "sourceUrl": "https://game8.jp/umamusume/712500"
    },
    {
      "externalId": "game8-uma-708453",
      "slug": "uma-708453",
      "nameEn": "Cheval Grand (［夏凪ネイビードロップ］)",
      "nameOriginal": "［夏凪ネイビードロップ］シュヴァルグラン",
      "styleOrTitle": "3★ [［夏凪ネイビードロップ］シュヴァルグラン] (Long / Leader)",
      "rarity": "3★",
      "role": "Long Leader",
      "roleColumn": "SUB_DPS",
      "element": "Long",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/11603757/43d6d389d496d643fb0bb0419505433d.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1830,
        "atkOrPower": 1630,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 水シュヴァ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 先行 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［夏凪ネイビードロップ］シュヴァルグラン)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-697314",
        "uma-688549"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "芝 長距離 先行 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/708453).",
      "sourceUrl": "https://game8.jp/umamusume/708453"
    },
    {
      "externalId": "game8-uma-697314",
      "slug": "uma-697314",
      "nameEn": "［陸離の編纂者］クロノジェネシス",
      "nameOriginal": "［陸離の編纂者］クロノジェネシス",
      "styleOrTitle": "3★ [［陸離の編纂者］クロノジェネシス] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/11493832/32ff945983f1ddc4eccebfe49af33074.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1820,
        "atkOrPower": 1620,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: クロノ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［陸離の編纂者］クロノジェネシス)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-688549",
        "uma-685367"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/697314).",
      "sourceUrl": "https://game8.jp/umamusume/697314"
    },
    {
      "externalId": "game8-uma-688549",
      "slug": "uma-688549",
      "nameEn": "［9927 Wishes］ラヴズオンリーユー",
      "nameOriginal": "［9927 Wishes］ラヴズオンリーユー",
      "styleOrTitle": "3★ [［9927 Wishes］ラヴズオンリーユー] (Medium / Betweener)",
      "rarity": "3★",
      "role": "Medium Betweener",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/11374511/dc3f5368211a2704b67f6f254618332d.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1810,
        "atkOrPower": 1610,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ラヴズ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［9927 Wishes］ラヴズオンリーユー)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-685367",
        "uma-675742"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.6,
      "summaryVerdict": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/688549).",
      "sourceUrl": "https://game8.jp/umamusume/688549"
    },
    {
      "externalId": "game8-uma-685367",
      "slug": "uma-685367",
      "nameEn": "Smart Falcon (［ルミナス☆トワラー］)",
      "nameOriginal": "［ルミナス☆トワラー］スマートファルコン",
      "styleOrTitle": "3★ [［ルミナス☆トワラー］スマートファルコン] (Dirt / Runner)",
      "rarity": "3★",
      "role": "Dirt Runner",
      "roleColumn": "DPS",
      "element": "Dirt",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/11287840/7986d7da1082c1decfedbf2a911fad21.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1800,
        "atkOrPower": 1600,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 青ファルコ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Dirt Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "ダート マイル 逃げ Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［ルミナス☆トワラー］スマートファルコン)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Dirt"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "ダート マイル 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-675742",
        "uma-670452"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.9,
      "summaryVerdict": "ダート マイル 逃げ Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/685367).",
      "sourceUrl": "https://game8.jp/umamusume/685367"
    },
    {
      "externalId": "game8-uma-675742",
      "slug": "uma-675742",
      "nameEn": "［すまいる・まい・うぇい！］グランアレグリア",
      "nameOriginal": "［すまいる・まい・うぇい！］グランアレグリア",
      "styleOrTitle": "3★ [［すまいる・まい・うぇい！］グランアレグリア] (Mile / Betweener)",
      "rarity": "3★",
      "role": "Mile Betweener",
      "roleColumn": "SUPPORT",
      "element": "Mile",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/11143610/735d94356d455cdeb82f69f749b53dd2.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1790,
        "atkOrPower": 1590,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: グラン",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Mile Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 マイル 差し Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［すまいる・まい・うぇい！］グランアレグリア)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Mile"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 マイル 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-670452",
        "uma-666499"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.8,
      "summaryVerdict": "芝 マイル 差し Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/675742).",
      "sourceUrl": "https://game8.jp/umamusume/675742"
    },
    {
      "externalId": "game8-uma-670452",
      "slug": "uma-670452",
      "nameEn": "Orfevre (［総攬］)",
      "nameOriginal": "［総攬］オルフェーヴル",
      "styleOrTitle": "3★ [［総攬］オルフェーヴル] (Medium / Chaser)",
      "rarity": "3★",
      "role": "Medium Chaser",
      "roleColumn": "SUSTAIN",
      "element": "Medium",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/11068185/d965e907cf1553a79ea9028524b9d988.jpeg/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1780,
        "atkOrPower": 1580,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: オルフェ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Chaser Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Chaser",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 追込 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［総攬］オルフェーヴル)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 追込"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-666499",
        "uma-641198"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "芝 中距離 追込 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/670452).",
      "sourceUrl": "https://game8.jp/umamusume/670452"
    },
    {
      "externalId": "game8-uma-666499",
      "slug": "uma-666499",
      "nameEn": "Aston Machan (［溶けない砂糖菓子］)",
      "nameOriginal": "［溶けない砂糖菓子］アストンマーチャン",
      "styleOrTitle": "3★ [［溶けない砂糖菓子］アストンマーチャン] (Short / Runner)",
      "rarity": "3★",
      "role": "Short Runner",
      "roleColumn": "DPS",
      "element": "Short",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/10983954/95d64726aacc794af7b5b6af8f002ee8.jpeg/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1770,
        "atkOrPower": 1570,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: バレマー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Short Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "芝 短距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［溶けない砂糖菓子］アストンマーチャン)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Short"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 短距離 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-641198",
        "uma-635115"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "芝 短距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/666499).",
      "sourceUrl": "https://game8.jp/umamusume/666499"
    },
    {
      "externalId": "game8-uma-641198",
      "slug": "uma-641198",
      "nameEn": "Mayano Top Gun (［ろっきん☆MewMeow］)",
      "nameOriginal": "［ろっきん☆MewMeow］マヤノトップガン",
      "styleOrTitle": "3★ [［ろっきん☆MewMeow］マヤノトップガン] (Long / Runner)",
      "rarity": "3★",
      "role": "Long Runner",
      "roleColumn": "DPS",
      "element": "Long",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/10568908/7c393c8e093d651b1cd7b303be560304.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1760,
        "atkOrPower": 1560,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 猫マヤノ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［ろっきん☆MewMeow］マヤノトップガン)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-635115",
        "uma-629749"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.6,
      "summaryVerdict": "芝 長距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/641198).",
      "sourceUrl": "https://game8.jp/umamusume/641198"
    },
    {
      "externalId": "game8-uma-635115",
      "slug": "uma-635115",
      "nameEn": "Gentildonna (［Regina dei fiori］)",
      "nameOriginal": "［Regina dei fiori］ジェンティルドンナ",
      "styleOrTitle": "3★ [［Regina dei fiori］ジェンティルドンナ] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/10423086/5bad6cc82e4047c99e84efb3f805709a.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1850,
        "atkOrPower": 1650,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ドンナ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Regina dei fiori］ジェンティルドンナ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-629749",
        "uma-584944"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.9,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/635115).",
      "sourceUrl": "https://game8.jp/umamusume/635115"
    },
    {
      "externalId": "game8-uma-629749",
      "slug": "uma-629749",
      "nameEn": "Hokko Tarumae (［パステルマリン・ロコドル］)",
      "nameOriginal": "［パステルマリン・ロコドル］ホッコータルマエ",
      "styleOrTitle": "3★ [［パステルマリン・ロコドル］ホッコータルマエ] (Dirt / Leader)",
      "rarity": "3★",
      "role": "Dirt Leader",
      "roleColumn": "SUB_DPS",
      "element": "Dirt",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/10290832/35429876273d21c578b8bc6f802e10cd.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1840,
        "atkOrPower": 1640,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 水タルマエ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Dirt Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "ダート マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［パステルマリン・ロコドル］ホッコータルマエ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Dirt"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "ダート マイル 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-584944",
        "uma-836268"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.8,
      "summaryVerdict": "ダート マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/629749).",
      "sourceUrl": "https://game8.jp/umamusume/629749"
    },
    {
      "externalId": "game8-uma-584944",
      "slug": "uma-584944",
      "nameEn": "Kitasan Black (［結願のしまい華］)",
      "nameOriginal": "［結願のしまい華］キタサンブラック",
      "styleOrTitle": "3★ [［結願のしまい華］キタサンブラック] (Long / Runner)",
      "rarity": "3★",
      "role": "Long Runner",
      "roleColumn": "DPS",
      "element": "Long",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/9258963/e30c86ba404f1c5d0195ba73629215d3.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1830,
        "atkOrPower": 1630,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 赤キタサン",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［結願のしまい華］キタサンブラック)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-836268",
        "uma-802528"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "芝 長距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/584944).",
      "sourceUrl": "https://game8.jp/umamusume/584944"
    },
    {
      "externalId": "game8-uma-836268",
      "slug": "uma-836268",
      "nameEn": "Daiwa Scarlet (［陣風の花紺青］)",
      "nameOriginal": "［陣風の花紺青］ダイワスカーレット",
      "styleOrTitle": "3★ [［陣風の花紺青］ダイワスカーレット] (Long / Runner)",
      "rarity": "3★",
      "role": "Long Runner",
      "roleColumn": "DPS",
      "element": "Long",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/13128945/c5e6dff1064a23d53933d45c9aafd78d.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1820,
        "atkOrPower": 1620,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 和服ダスカ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［陣風の花紺青］ダイワスカーレット)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-799891"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "芝 長距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/836268).",
      "sourceUrl": "https://game8.jp/umamusume/836268"
    },
    {
      "externalId": "game8-uma-802528",
      "slug": "uma-802528",
      "nameEn": "Seiun Sky (［渚のきまぐれオランジュ］)",
      "nameOriginal": "［渚のきまぐれオランジュ］セイウンスカイ",
      "styleOrTitle": "3★ [［渚のきまぐれオランジュ］セイウンスカイ] (Medium / Runner)",
      "rarity": "3★",
      "role": "Medium Runner",
      "roleColumn": "DPS",
      "element": "Medium",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/12814456/a436a9273e9560e0568591133b28ee7b.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1810,
        "atkOrPower": 1610,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 水着ウンス",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［渚のきまぐれオランジュ］セイウンスカイ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-799891",
        "uma-796335"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "芝 中距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/802528).",
      "sourceUrl": "https://game8.jp/umamusume/802528"
    },
    {
      "externalId": "game8-uma-799891",
      "slug": "uma-799891",
      "nameEn": "［Monochrome GM］ルーラーシップ",
      "nameOriginal": "［Monochrome GM］ルーラーシップ",
      "styleOrTitle": "3★ [［Monochrome GM］ルーラーシップ] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12782192/ebd2e01226fe33ab2b05a3d99970bbd7.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1800,
        "atkOrPower": 1600,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ルーラー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Monochrome GM］ルーラーシップ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-796335",
        "uma-785653"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/799891).",
      "sourceUrl": "https://game8.jp/umamusume/799891"
    },
    {
      "externalId": "game8-uma-796335",
      "slug": "uma-796335",
      "nameEn": "Fine Motion (［麺華煌彩伝・極］)",
      "nameOriginal": "［麺華煌彩伝・極］ファインモーション",
      "styleOrTitle": "3★ [［麺華煌彩伝・極］ファインモーション] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12734017/d15140d15b507616c84e1535a77eabf5.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1790,
        "atkOrPower": 1590,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ラーメンファイン",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［麺華煌彩伝・極］ファインモーション)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-785653",
        "uma-782228"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/796335).",
      "sourceUrl": "https://game8.jp/umamusume/796335"
    },
    {
      "externalId": "game8-uma-785653",
      "slug": "uma-785653",
      "nameEn": "Gentildonna (［La dama perfetta］)",
      "nameOriginal": "［La dama perfetta］ジェンティルドンナ",
      "styleOrTitle": "3★ [［La dama perfetta］ジェンティルドンナ] (Medium / Betweener)",
      "rarity": "3★",
      "role": "Medium Betweener",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12598770/00d40e00da88a10635a979bf26ac488a.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1780,
        "atkOrPower": 1580,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 花嫁ドンナ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［La dama perfetta］ジェンティルドンナ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-782228",
        "uma-771047"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/785653).",
      "sourceUrl": "https://game8.jp/umamusume/785653"
    },
    {
      "externalId": "game8-uma-782228",
      "slug": "uma-782228",
      "nameEn": "Jungle Pocket (［ヴァーミリオン・ヘッド］)",
      "nameOriginal": "［ヴァーミリオン・ヘッド］ジャングルポケット",
      "styleOrTitle": "3★ [［ヴァーミリオン・ヘッド］ジャングルポケット] (Medium / Betweener)",
      "rarity": "3★",
      "role": "Medium Betweener",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12527053/7794a0fe268ef3dca7c7a0fdac486c2f.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1770,
        "atkOrPower": 1570,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 応援団ポッケ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［ヴァーミリオン・ヘッド］ジャングルポケット)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-771047",
        "uma-768732"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/782228).",
      "sourceUrl": "https://game8.jp/umamusume/782228"
    },
    {
      "externalId": "game8-uma-771047",
      "slug": "uma-771047",
      "nameEn": "［Lueur Angélique］ヴィクトワールピサ",
      "nameOriginal": "［Lueur Angélique］ヴィクトワールピサ",
      "styleOrTitle": "3★ [［Lueur Angélique］ヴィクトワールピサ] (Medium / Betweener)",
      "rarity": "3★",
      "role": "Medium Betweener",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12406102/c40008404e9ca81249e29b75794492a2.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1760,
        "atkOrPower": 1560,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ピサ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Lueur Angélique］ヴィクトワールピサ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-768732",
        "uma-757130"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/771047).",
      "sourceUrl": "https://game8.jp/umamusume/771047"
    },
    {
      "externalId": "game8-uma-768732",
      "slug": "uma-768732",
      "nameEn": "［Love-Linked Aster］ラヴズオンリーユー",
      "nameOriginal": "［Love-Linked Aster］ラヴズオンリーユー",
      "styleOrTitle": "3★ [［Love-Linked Aster］ラヴズオンリーユー] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12380893/2daf329b0d8d469bad6e8eb1ff5dceef.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1850,
        "atkOrPower": 1650,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 新衣装ラヴズ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Love-Linked Aster］ラヴズオンリーユー)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-754944"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/768732).",
      "sourceUrl": "https://game8.jp/umamusume/768732"
    },
    {
      "externalId": "game8-uma-757130",
      "slug": "uma-757130",
      "nameEn": "［Miracle Author］キセキ",
      "nameOriginal": "［Miracle Author］キセキ",
      "styleOrTitle": "3★ [［Miracle Author］キセキ] (Medium / Runner)",
      "rarity": "3★",
      "role": "Medium Runner",
      "roleColumn": "DPS",
      "element": "Medium",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/12218355/2422472338aff4aec52e146757c69552.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1840,
        "atkOrPower": 1640,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: キセキ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Miracle Author］キセキ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-754944",
        "uma-749288"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "芝 中距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/757130).",
      "sourceUrl": "https://game8.jp/umamusume/757130"
    },
    {
      "externalId": "game8-uma-754944",
      "slug": "uma-754944",
      "nameEn": "Bubble Gum Fellow (［暁光］)",
      "nameOriginal": "［暁光］バブルガムフェロー",
      "styleOrTitle": "3★ [［暁光］バブルガムフェロー] (Mile / Leader)",
      "rarity": "3★",
      "role": "Mile Leader",
      "roleColumn": "SUB_DPS",
      "element": "Mile",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12190026/b2903b87cbc77e03b9fbcea990392bf8.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1830,
        "atkOrPower": 1630,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 正月バブル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Mile Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［暁光］バブルガムフェロー)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Mile"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 マイル 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-749288",
        "uma-744513"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "芝 マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/754944).",
      "sourceUrl": "https://game8.jp/umamusume/754944"
    },
    {
      "externalId": "game8-uma-749288",
      "slug": "uma-749288",
      "nameEn": "Oguri Cap (［シンデレラグレイ］)",
      "nameOriginal": "［シンデレラグレイ］オグリキャップ",
      "styleOrTitle": "3★ [［シンデレラグレイ］オグリキャップ] (Long / Leader)",
      "rarity": "3★",
      "role": "Long Leader",
      "roleColumn": "SUB_DPS",
      "element": "Long",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12121542/87150d30f0c53b44da688b7a7bd87098.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1820,
        "atkOrPower": 1620,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: シングレ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 先行 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［シンデレラグレイ］オグリキャップ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-744513",
        "uma-708454"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "芝 長距離 先行 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/749288).",
      "sourceUrl": "https://game8.jp/umamusume/749288"
    },
    {
      "externalId": "game8-uma-744513",
      "slug": "uma-744513",
      "nameEn": "Buena Vista (［Heroína Inocente］)",
      "nameOriginal": "［Heroína Inocente］ブエナビスタ",
      "styleOrTitle": "3★ [［Heroína Inocente］ブエナビスタ] (Medium / Chaser)",
      "rarity": "3★",
      "role": "Medium Chaser",
      "roleColumn": "SUSTAIN",
      "element": "Medium",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/12006213/1c2802bc674d3e6cf1b23c2aded8b686.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1810,
        "atkOrPower": 1610,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ブエナ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Chaser Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Chaser",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 追込 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Heroína Inocente］ブエナビスタ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 追込"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-708454",
        "uma-707016"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "芝 中距離 追込 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/744513).",
      "sourceUrl": "https://game8.jp/umamusume/744513"
    },
    {
      "externalId": "game8-uma-708454",
      "slug": "uma-708454",
      "nameEn": "Satono Crown (［晴島花麗］)",
      "nameOriginal": "［晴島花麗］サトノクラウン",
      "styleOrTitle": "3★ [［晴島花麗］サトノクラウン] (Medium / Betweener)",
      "rarity": "3★",
      "role": "Medium Betweener",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/11603758/67a242d3a25a4271009d5a5271fd4c31.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1800,
        "atkOrPower": 1600,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 水クラウン",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［晴島花麗］サトノクラウン)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-707016",
        "uma-661550"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/708454).",
      "sourceUrl": "https://game8.jp/umamusume/708454"
    },
    {
      "externalId": "game8-uma-707016",
      "slug": "uma-707016",
      "nameEn": "［Assorted Cuteness♡］フサイチパンドラ",
      "nameOriginal": "［Assorted Cuteness♡］フサイチパンドラ",
      "styleOrTitle": "3★ [［Assorted Cuteness♡］フサイチパンドラ] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/11580218/a7f380e6d9c9ffffc44001a189590757.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1790,
        "atkOrPower": 1590,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: パンドラ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Assorted Cuteness♡］フサイチパンドラ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-661550",
        "uma-655283"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/707016).",
      "sourceUrl": "https://game8.jp/umamusume/707016"
    },
    {
      "externalId": "game8-uma-661550",
      "slug": "uma-661550",
      "nameEn": "［雅号・墨龍］カツラギエース",
      "nameOriginal": "［雅号・墨龍］カツラギエース",
      "styleOrTitle": "3★ [［雅号・墨龍］カツラギエース] (Medium / Runner)",
      "rarity": "3★",
      "role": "Medium Runner",
      "roleColumn": "DPS",
      "element": "Medium",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/10873799/351a4aa97ecc14a6bec22fb5fcb5cc34.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1780,
        "atkOrPower": 1580,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 正月エース",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［雅号・墨龍］カツラギエース)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-655283",
        "uma-650313"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "芝 中距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/661550).",
      "sourceUrl": "https://game8.jp/umamusume/661550"
    },
    {
      "externalId": "game8-uma-655283",
      "slug": "uma-655283",
      "nameEn": "Admire Vega (［Glacialis Vega］)",
      "nameOriginal": "［Glacialis Vega］アドマイヤベガ",
      "styleOrTitle": "3★ [［Glacialis Vega］アドマイヤベガ] (Medium / Chaser)",
      "rarity": "3★",
      "role": "Medium Chaser",
      "roleColumn": "SUSTAIN",
      "element": "Medium",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/10761787/7f8a56783c0133aa3a85b5a3fec7b085.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1770,
        "atkOrPower": 1570,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: クリアヤベ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Chaser Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Chaser",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 追込 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Glacialis Vega］アドマイヤベガ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 追込"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-650313",
        "uma-639905"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "芝 中距離 追込 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/655283).",
      "sourceUrl": "https://game8.jp/umamusume/655283"
    },
    {
      "externalId": "game8-uma-650313",
      "slug": "uma-650313",
      "nameEn": "Biwa Hayahide (［Engineered Victory］)",
      "nameOriginal": "［Engineered Victory］ビワハヤヒデ",
      "styleOrTitle": "3★ [［Engineered Victory］ビワハヤヒデ] (Long / Leader)",
      "rarity": "3★",
      "role": "Long Leader",
      "roleColumn": "SUB_DPS",
      "element": "Long",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/10660455/ea9b7d6b2504fac61a20ffe298bb0ed6.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1760,
        "atkOrPower": 1560,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: メカハヤヒデ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 先行 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Engineered Victory］ビワハヤヒデ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-639905",
        "uma-602130"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "芝 長距離 先行 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/650313).",
      "sourceUrl": "https://game8.jp/umamusume/650313"
    },
    {
      "externalId": "game8-uma-639905",
      "slug": "uma-639905",
      "nameEn": "Durandal (［Chevalier fidèle］)",
      "nameOriginal": "［Chevalier fidèle］デュランダル",
      "styleOrTitle": "3★ [［Chevalier fidèle］デュランダル] (Mile / Chaser)",
      "rarity": "3★",
      "role": "Mile Chaser",
      "roleColumn": "SUSTAIN",
      "element": "Mile",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/10550236/d18b4f205241a15d1e8c61d8176daef2.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1850,
        "atkOrPower": 1650,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: デュランダル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Mile Chaser Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Chaser",
            "Target Speed"
          ],
          "exactDescription": "芝 マイル 追込 Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Chevalier fidèle］デュランダル)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Mile"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 マイル 追込"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-602130",
        "uma-563273"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "芝 マイル 追込 Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/639905).",
      "sourceUrl": "https://game8.jp/umamusume/639905"
    },
    {
      "externalId": "game8-uma-602130",
      "slug": "uma-602130",
      "nameEn": "Daiichi Ruby (［Flowing Blue］)",
      "nameOriginal": "［Flowing Blue］ダイイチルビー",
      "styleOrTitle": "3★ [［Flowing Blue］ダイイチルビー] (Mile / Betweener)",
      "rarity": "3★",
      "role": "Mile Betweener",
      "roleColumn": "SUPPORT",
      "element": "Mile",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/9803733/1ba64b0985d1a87b658b6c6d006bd224.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1840,
        "atkOrPower": 1640,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 青ルビー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Mile Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 マイル 差し Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Flowing Blue］ダイイチルビー)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Mile"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 マイル 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-563273",
        "uma-543421"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "芝 マイル 差し Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/602130).",
      "sourceUrl": "https://game8.jp/umamusume/602130"
    },
    {
      "externalId": "game8-uma-563273",
      "slug": "uma-563273",
      "nameEn": "Mejiro Ramonu (［オニキス・ライン］)",
      "nameOriginal": "［オニキス・ライン］メジロラモーヌ",
      "styleOrTitle": "3★ [［オニキス・ライン］メジロラモーヌ] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/8891367/91941ba5af0c75d43e89ba2fef8d2af1.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1830,
        "atkOrPower": 1630,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ラモーヌ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［オニキス・ライン］メジロラモーヌ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-543421",
        "uma-538996"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/563273).",
      "sourceUrl": "https://game8.jp/umamusume/563273"
    },
    {
      "externalId": "game8-uma-543421",
      "slug": "uma-543421",
      "nameEn": "Silence Suzuka (［波間のエメラルド］)",
      "nameOriginal": "［波間のエメラルド］サイレンススズカ",
      "styleOrTitle": "3★ [［波間のエメラルド］サイレンススズカ] (Medium / Runner)",
      "rarity": "3★",
      "role": "Medium Runner",
      "roleColumn": "DPS",
      "element": "Medium",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/8462392/638599f36cb70955b600876abdac9201.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1820,
        "atkOrPower": 1620,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 水スズカ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［波間のエメラルド］サイレンススズカ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-538996",
        "uma-510277"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "芝 中距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/543421).",
      "sourceUrl": "https://game8.jp/umamusume/543421"
    },
    {
      "externalId": "game8-uma-538996",
      "slug": "uma-538996",
      "nameEn": "Bamboo Memory (［Ultra☆Marine］)",
      "nameOriginal": "［Ultra☆Marine］バンブーメモリー",
      "styleOrTitle": "3★ [［Ultra☆Marine］バンブーメモリー] (Short / Betweener)",
      "rarity": "3★",
      "role": "Short Betweener",
      "roleColumn": "SUPPORT",
      "element": "Short",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/8228487/e837c0062fffddd4a1d3e328f2d1d20e.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1810,
        "atkOrPower": 1610,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 夏バンブー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Short Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 短距離 差し Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Ultra☆Marine］バンブーメモリー)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Short"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 短距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-510277",
        "uma-506211"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "芝 短距離 差し Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/538996).",
      "sourceUrl": "https://game8.jp/umamusume/538996"
    },
    {
      "externalId": "game8-uma-510277",
      "slug": "uma-510277",
      "nameEn": "Ines Fujin (［MELTY  GIFT］)",
      "nameOriginal": "［MELTY  GIFT］アイネスフウジン",
      "styleOrTitle": "3★ [［MELTY  GIFT］アイネスフウジン] (Mile / Runner)",
      "rarity": "3★",
      "role": "Mile Runner",
      "roleColumn": "DPS",
      "element": "Mile",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/7703991/80f715f61f54b8e89da519cc99ee8702.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1800,
        "atkOrPower": 1600,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: チョコネス",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Mile Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "芝 マイル 逃げ Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［MELTY  GIFT］アイネスフウジン)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Mile"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 マイル 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-506211",
        "uma-504927"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "芝 マイル 逃げ Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/510277).",
      "sourceUrl": "https://game8.jp/umamusume/510277"
    },
    {
      "externalId": "game8-uma-506211",
      "slug": "uma-506211",
      "nameEn": "Kitasan Black (［真打・慶鶴之志］)",
      "nameOriginal": "［真打・慶鶴之志］キタサンブラック",
      "styleOrTitle": "3★ [［真打・慶鶴之志］キタサンブラック] (Medium / Runner)",
      "rarity": "3★",
      "role": "Medium Runner",
      "roleColumn": "DPS",
      "element": "Medium",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/8971324/17646bd3f1b2d5adcfe90a304b4a5e84.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1790,
        "atkOrPower": 1590,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 白キタサン",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［真打・慶鶴之志］キタサンブラック)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-504927",
        "uma-376568"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "芝 中距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/506211).",
      "sourceUrl": "https://game8.jp/umamusume/506211"
    },
    {
      "externalId": "game8-uma-504927",
      "slug": "uma-504927",
      "nameEn": "Narita Brian (［餓狼］)",
      "nameOriginal": "［餓狼］ナリタブライアン",
      "styleOrTitle": "3★ [［餓狼］ナリタブライアン] (Long / Leader)",
      "rarity": "3★",
      "role": "Long Leader",
      "roleColumn": "SUB_DPS",
      "element": "Long",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/7559260/8b0dc3985cf1b550176924f190732427.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1780,
        "atkOrPower": 1580,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 新ナリブ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 先行 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［餓狼］ナリタブライアン)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-376568",
        "uma-818828"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "芝 長距離 先行 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/504927).",
      "sourceUrl": "https://game8.jp/umamusume/504927"
    },
    {
      "externalId": "game8-uma-376568",
      "slug": "uma-376568",
      "nameEn": "Taiki Shuttle (［ワイルド・フロンティア］)",
      "nameOriginal": "［ワイルド・フロンティア］タイキシャトル",
      "styleOrTitle": "3★ [［ワイルド・フロンティア］タイキシャトル] (Mile / Leader)",
      "rarity": "3★",
      "role": "Mile Leader",
      "roleColumn": "SUB_DPS",
      "element": "Mile",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/6724843/909e7afb9cb283e50ac16a4544bf4d6e.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1770,
        "atkOrPower": 1570,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: タイキ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Mile Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［ワイルド・フロンティア］タイキシャトル)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Mile"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 マイル 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-818828",
        "uma-815143"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "芝 マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/376568).",
      "sourceUrl": "https://game8.jp/umamusume/376568"
    },
    {
      "externalId": "game8-uma-818828",
      "slug": "uma-818828",
      "nameEn": "Air Groove (［悠久なるヘカテイア］)",
      "nameOriginal": "［悠久なるヘカテイア］エアグルーヴ",
      "styleOrTitle": "3★ [［悠久なるヘカテイア］エアグルーヴ] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/13038189/321e48c1cccd2606a7510ba546d3a259.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1760,
        "atkOrPower": 1560,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 新グルーヴ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［悠久なるヘカテイア］エアグルーヴ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-815143",
        "uma-807041"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/818828).",
      "sourceUrl": "https://game8.jp/umamusume/818828"
    },
    {
      "externalId": "game8-uma-815143",
      "slug": "uma-815143",
      "nameEn": "［絶佳の暁闇］ファレノプシス",
      "nameOriginal": "［絶佳の暁闇］ファレノプシス",
      "styleOrTitle": "3★ [［絶佳の暁闇］ファレノプシス] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12987556/a0b61bec27687da8905918001fdb8578.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1850,
        "atkOrPower": 1650,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ファレノ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［絶佳の暁闇］ファレノプシス)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-807041",
        "uma-802527"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/815143).",
      "sourceUrl": "https://game8.jp/umamusume/815143"
    },
    {
      "externalId": "game8-uma-807041",
      "slug": "uma-807041",
      "nameEn": "［Snatchin Hearts♡］フサイチパンドラ",
      "nameOriginal": "［Snatchin Hearts♡］フサイチパンドラ",
      "styleOrTitle": "3★ [［Snatchin Hearts♡］フサイチパンドラ] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12875541/519dbb180610d11bfaa659908f35493e.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1840,
        "atkOrPower": 1640,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 水着パンドラ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Snatchin Hearts♡］フサイチパンドラ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802527",
        "uma-782230"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/807041).",
      "sourceUrl": "https://game8.jp/umamusume/807041"
    },
    {
      "externalId": "game8-uma-802527",
      "slug": "uma-802527",
      "nameEn": "Mejiro Bright (［海辺のエレガンスシフォン］)",
      "nameOriginal": "［海辺のエレガンスシフォン］メジロブライト",
      "styleOrTitle": "3★ [［海辺のエレガンスシフォン］メジロブライト] (Medium / Betweener)",
      "rarity": "3★",
      "role": "Medium Betweener",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12814457/6f10887bba9dd11efddcb1875ab25e0e.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1830,
        "atkOrPower": 1630,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 水着ブライト",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［海辺のエレガンスシフォン］メジロブライト)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-782230",
        "uma-778574"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/802527).",
      "sourceUrl": "https://game8.jp/umamusume/802527"
    },
    {
      "externalId": "game8-uma-782230",
      "slug": "uma-782230",
      "nameEn": "Fuji Kiseki (［ブランシュ・エトワール］)",
      "nameOriginal": "［ブランシュ・エトワール］フジキセキ",
      "styleOrTitle": "3★ [［ブランシュ・エトワール］フジキセキ] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12527052/e773c3fafa637c665810df25e4fd7764.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1820,
        "atkOrPower": 1620,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 応援団フジ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［ブランシュ・エトワール］フジキセキ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-778574",
        "uma-775195"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/782230).",
      "sourceUrl": "https://game8.jp/umamusume/782230"
    },
    {
      "externalId": "game8-uma-778574",
      "slug": "uma-778574",
      "nameEn": "［万折不撓の纏］ラッキーライラック",
      "nameOriginal": "［万折不撓の纏］ラッキーライラック",
      "styleOrTitle": "3★ [［万折不撓の纏］ラッキーライラック] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12473245/31de75e828e2754d39470f41492c13e5.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1810,
        "atkOrPower": 1610,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ラララ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［万折不撓の纏］ラッキーライラック)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-775195",
        "uma-751668"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/778574).",
      "sourceUrl": "https://game8.jp/umamusume/778574"
    },
    {
      "externalId": "game8-uma-775195",
      "slug": "uma-775195",
      "nameEn": "［水縹の一閃］ノースフライト",
      "nameOriginal": "［水縹の一閃］ノースフライト",
      "styleOrTitle": "3★ [［水縹の一閃］ノースフライト] (Mile / Chaser)",
      "rarity": "3★",
      "role": "Mile Chaser",
      "roleColumn": "SUSTAIN",
      "element": "Mile",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/12431584/ac26bc0e443b31805b954a080287682f.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1800,
        "atkOrPower": 1600,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ドレスフライト",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Mile Chaser Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Chaser",
            "Target Speed"
          ],
          "exactDescription": "芝 マイル 追込 Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［水縹の一閃］ノースフライト)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Mile"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 マイル 追込"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-751668",
        "uma-751669"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "芝 マイル 追込 Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/775195).",
      "sourceUrl": "https://game8.jp/umamusume/775195"
    },
    {
      "externalId": "game8-uma-751668",
      "slug": "uma-751668",
      "nameEn": "［Nouvelle pousse］サクラローレル",
      "nameOriginal": "［Nouvelle pousse］サクラローレル",
      "styleOrTitle": "3★ [［Nouvelle pousse］サクラローレル] (Long / Betweener)",
      "rarity": "3★",
      "role": "Long Betweener",
      "roleColumn": "SUPPORT",
      "element": "Long",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12141026/9d53cc01a678bde901aeb61369b9edfc.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1790,
        "atkOrPower": 1590,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 正月ローレル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 差し Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Nouvelle pousse］サクラローレル)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-751669",
        "uma-746402"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "芝 長距離 差し Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/751668).",
      "sourceUrl": "https://game8.jp/umamusume/751668"
    },
    {
      "externalId": "game8-uma-751669",
      "slug": "uma-751669",
      "nameEn": "Ikuno Dictus (［逍遥、整然たる路を］)",
      "nameOriginal": "［逍遥、整然たる路を］イクノディクタス",
      "styleOrTitle": "3★ [［逍遥、整然たる路を］イクノディクタス] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12141025/02b35c54c0bf3e4297ea96808a048cd9.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1780,
        "atkOrPower": 1580,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 正月イクノ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［逍遥、整然たる路を］イクノディクタス)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-746402",
        "uma-737336"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/751669).",
      "sourceUrl": "https://game8.jp/umamusume/751669"
    },
    {
      "externalId": "game8-uma-746402",
      "slug": "uma-746402",
      "nameEn": "Nakayama Festa (［祝祭遊戯］)",
      "nameOriginal": "［祝祭遊戯］ナカヤマフェスタ",
      "styleOrTitle": "3★ [［祝祭遊戯］ナカヤマフェスタ] (Medium / Betweener)",
      "rarity": "3★",
      "role": "Medium Betweener",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12036418/f7c2ec4d9611648bca8c09b3c8c1f7b3.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1770,
        "atkOrPower": 1570,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: クリナカヤマ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［祝祭遊戯］ナカヤマフェスタ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-737336",
        "uma-727873"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/746402).",
      "sourceUrl": "https://game8.jp/umamusume/746402"
    },
    {
      "externalId": "game8-uma-737336",
      "slug": "uma-737336",
      "nameEn": "Wonder Acute (［柔灯・湯の香の装い］)",
      "nameOriginal": "［柔灯・湯の香の装い］ワンダーアキュート",
      "styleOrTitle": "3★ [［柔灯・湯の香の装い］ワンダーアキュート] (Dirt / Leader)",
      "rarity": "3★",
      "role": "Dirt Leader",
      "roleColumn": "SUB_DPS",
      "element": "Dirt",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/11971608/a43fb0bb9b2955a070f1ace35166499c.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1760,
        "atkOrPower": 1560,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 温泉アキュ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Dirt Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "ダート マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［柔灯・湯の香の装い］ワンダーアキュート)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Dirt"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "ダート マイル 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-727873",
        "uma-710376"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "ダート マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/737336).",
      "sourceUrl": "https://game8.jp/umamusume/737336"
    },
    {
      "externalId": "game8-uma-727873",
      "slug": "uma-727873",
      "nameEn": "Tosen Jordan (［Highkey☆Hallowed］)",
      "nameOriginal": "［Highkey☆Hallowed］トーセンジョーダン",
      "styleOrTitle": "3★ [［Highkey☆Hallowed］トーセンジョーダン] (Medium / Betweener)",
      "rarity": "3★",
      "role": "Medium Betweener",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/11842922/009a40cd6e1e34523f56fb7b65d7294e.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1850,
        "atkOrPower": 1650,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ハロジョーダン",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Highkey☆Hallowed］トーセンジョーダン)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-710376",
        "uma-707101"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/727873).",
      "sourceUrl": "https://game8.jp/umamusume/727873"
    },
    {
      "externalId": "game8-uma-710376",
      "slug": "uma-710376",
      "nameEn": "［Éclat d",
      "nameOriginal": "［Éclat d",
      "styleOrTitle": "3★ [［Éclat d] (Medium / Betweener)",
      "rarity": "3★",
      "role": "Medium Betweener",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/11666235/a7d0eb58eeed129a2b4055be1d5d825e.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1840,
        "atkOrPower": 1640,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 水ヴィブ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Éclat d)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-707101",
        "uma-705722"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/710376).",
      "sourceUrl": "https://game8.jp/umamusume/710376"
    },
    {
      "externalId": "game8-uma-707101",
      "slug": "uma-707101",
      "nameEn": "Rhein Kraft (［Eternal Fairytale］)",
      "nameOriginal": "［Eternal Fairytale］ラインクラフト",
      "styleOrTitle": "3★ [［Eternal Fairytale］ラインクラフト] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/11582584/16e81baa258472cfe9be9168ecd9f723.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1830,
        "atkOrPower": 1630,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 新クラフト",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Eternal Fairytale］ラインクラフト)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-705722",
        "uma-687349"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/707101).",
      "sourceUrl": "https://game8.jp/umamusume/707101"
    },
    {
      "externalId": "game8-uma-705722",
      "slug": "uma-705722",
      "nameEn": "Ines Fujin (［Hello Hello Island］)",
      "nameOriginal": "［Hello Hello Island］アイネスフウジン",
      "styleOrTitle": "3★ [［Hello Hello Island］アイネスフウジン] (Medium / Runner)",
      "rarity": "3★",
      "role": "Medium Runner",
      "roleColumn": "DPS",
      "element": "Medium",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/11548539/e8611e2afa8e98e83e9fa77b3036f36e.webp/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1820,
        "atkOrPower": 1620,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 島アイネス",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Hello Hello Island］アイネスフウジン)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-687349",
        "uma-685368"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "芝 中距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/705722).",
      "sourceUrl": "https://game8.jp/umamusume/705722"
    },
    {
      "externalId": "game8-uma-687349",
      "slug": "uma-687349",
      "nameEn": "Verxina (［Le beau sommet］)",
      "nameOriginal": "［Le beau sommet］ヴィルシーナ",
      "styleOrTitle": "3★ [［Le beau sommet］ヴィルシーナ] (Mile / Leader)",
      "rarity": "3★",
      "role": "Mile Leader",
      "roleColumn": "SUB_DPS",
      "element": "Mile",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/11350519/6d895f7b3d9abbdc4335ed87a5f9b7f2.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1810,
        "atkOrPower": 1610,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: シーナ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Mile Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Le beau sommet］ヴィルシーナ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Mile"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 マイル 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-685368",
        "uma-661551"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "芝 マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/687349).",
      "sourceUrl": "https://game8.jp/umamusume/687349"
    },
    {
      "externalId": "game8-uma-685368",
      "slug": "uma-685368",
      "nameEn": "Copano Rickey (［光彩陸離☆招福衣］)",
      "nameOriginal": "［光彩陸離☆招福衣］コパノリッキー",
      "styleOrTitle": "3★ [［光彩陸離☆招福衣］コパノリッキー] (Dirt / Leader)",
      "rarity": "3★",
      "role": "Dirt Leader",
      "roleColumn": "SUB_DPS",
      "element": "Dirt",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/11287842/6f7581717474c1084f86f5630033cc42.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1800,
        "atkOrPower": 1600,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ドラムコパ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Dirt Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "ダート マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［光彩陸離☆招福衣］コパノリッキー)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Dirt"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "ダート マイル 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-661551",
        "uma-659197"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "ダート マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/685368).",
      "sourceUrl": "https://game8.jp/umamusume/685368"
    },
    {
      "externalId": "game8-uma-661551",
      "slug": "uma-661551",
      "nameEn": "Mr. C.B. (［絢爛花道歌舞く君］)",
      "nameOriginal": "［絢爛花道歌舞く君］ミスターシービー",
      "styleOrTitle": "3★ [［絢爛花道歌舞く君］ミスターシービー] (Long / Chaser)",
      "rarity": "3★",
      "role": "Long Chaser",
      "roleColumn": "SUSTAIN",
      "element": "Long",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/10873798/cab03092fcd8e070e33f6f34dee560e3.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1790,
        "atkOrPower": 1590,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 正月CB",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Chaser Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Chaser",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 追込 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［絢爛花道歌舞く君］ミスターシービー)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 追込"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-659197",
        "uma-655284"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "芝 長距離 追込 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/661551).",
      "sourceUrl": "https://game8.jp/umamusume/661551"
    },
    {
      "externalId": "game8-uma-659197",
      "slug": "uma-659197",
      "nameEn": "Grass Wonder (［蒼炎の誉］)",
      "nameOriginal": "［蒼炎の誉］グラスワンダー",
      "styleOrTitle": "3★ [［蒼炎の誉］グラスワンダー] (Long / Betweener)",
      "rarity": "3★",
      "role": "Long Betweener",
      "roleColumn": "SUPPORT",
      "element": "Long",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/10828340/11451cd9411c2e1222e1e03aacc86f9f.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1780,
        "atkOrPower": 1580,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 新グラス",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 差し Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［蒼炎の誉］グラスワンダー)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-655284",
        "uma-643036"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "芝 長距離 差し Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/659197).",
      "sourceUrl": "https://game8.jp/umamusume/659197"
    },
    {
      "externalId": "game8-uma-655284",
      "slug": "uma-655284",
      "nameEn": "［Celestial Road］ナリタトップロード",
      "nameOriginal": "［Celestial Road］ナリタトップロード",
      "styleOrTitle": "3★ [［Celestial Road］ナリタトップロード] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/10761786/f25e9c0e7914cff509a9b6cc6a9a0d21.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1770,
        "atkOrPower": 1570,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 冬トプロ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Celestial Road］ナリタトップロード)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-643036",
        "uma-629750"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/655284).",
      "sourceUrl": "https://game8.jp/umamusume/655284"
    },
    {
      "externalId": "game8-uma-643036",
      "slug": "uma-643036",
      "nameEn": "Bubble Gum Fellow (［POPPING!］)",
      "nameOriginal": "［POPPING!］バブルガムフェロー",
      "styleOrTitle": "3★ [［POPPING!］バブルガムフェロー] (Medium / Leader)",
      "rarity": "3★",
      "role": "Medium Leader",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/10609182/e6eb069e699a1cea9b5df9222d451914.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1760,
        "atkOrPower": 1560,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: バブル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［POPPING!］バブルガムフェロー)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-629750",
        "uma-614759"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "芝 中距離 先行 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/643036).",
      "sourceUrl": "https://game8.jp/umamusume/643036"
    },
    {
      "externalId": "game8-uma-629750",
      "slug": "uma-629750",
      "nameEn": "Eishin Flash (［Reines Plätschern］)",
      "nameOriginal": "［Reines Plätschern］エイシンフラッシュ",
      "styleOrTitle": "3★ [［Reines Plätschern］エイシンフラッシュ] (Medium / Betweener)",
      "rarity": "3★",
      "role": "Medium Betweener",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/10290833/21f4e61bacfffcb423561e401b3eab3e.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1850,
        "atkOrPower": 1650,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 水フラッシュ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Reines Plätschern］エイシンフラッシュ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-614759",
        "uma-606583"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/629750).",
      "sourceUrl": "https://game8.jp/umamusume/629750"
    },
    {
      "externalId": "game8-uma-614759",
      "slug": "uma-614759",
      "nameEn": "Jungle Pocket (［王者の喊声］)",
      "nameOriginal": "［王者の喊声］ジャングルポケット",
      "styleOrTitle": "3★ [［王者の喊声］ジャングルポケット] (Medium / Betweener)",
      "rarity": "3★",
      "role": "Medium Betweener",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/10133809/d54bb4e449dadfab5d4b20999d6440b1.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1840,
        "atkOrPower": 1640,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ジャンポケ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［王者の喊声］ジャングルポケット)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-606583",
        "uma-600193"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/614759).",
      "sourceUrl": "https://game8.jp/umamusume/614759"
    },
    {
      "externalId": "game8-uma-606583",
      "slug": "uma-606583",
      "nameEn": "Super Creek (［慈雨華影］)",
      "nameOriginal": "［慈雨華影］スーパークリーク",
      "styleOrTitle": "3★ [［慈雨華影］スーパークリーク] (Long / Leader)",
      "rarity": "3★",
      "role": "Long Leader",
      "roleColumn": "SUB_DPS",
      "element": "Long",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/9946522/232ef8e52c6501af45bad446d74bd40f.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1830,
        "atkOrPower": 1630,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 忍クリーク",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 先行 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［慈雨華影］スーパークリーク)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-600193",
        "uma-595542"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "芝 長距離 先行 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/606583).",
      "sourceUrl": "https://game8.jp/umamusume/606583"
    },
    {
      "externalId": "game8-uma-600193",
      "slug": "uma-600193",
      "nameEn": "Rhein Kraft (［Dream Successor］)",
      "nameOriginal": "［Dream Successor］ラインクラフト",
      "styleOrTitle": "3★ [［Dream Successor］ラインクラフト] (Mile / Leader)",
      "rarity": "3★",
      "role": "Mile Leader",
      "roleColumn": "SUB_DPS",
      "element": "Mile",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/9773332/9f9131085b1bd4afa5e852017aaee715.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1820,
        "atkOrPower": 1620,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: クラフト",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Mile Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Dream Successor］ラインクラフト)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Mile"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 マイル 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-595542",
        "uma-579403"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "芝 マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/600193).",
      "sourceUrl": "https://game8.jp/umamusume/600193"
    },
    {
      "externalId": "game8-uma-595542",
      "slug": "uma-595542",
      "nameEn": "Duramente (［Red in Black］)",
      "nameOriginal": "［Red in Black］ドゥラメンテ",
      "styleOrTitle": "3★ [［Red in Black］ドゥラメンテ] (Medium / Chaser)",
      "rarity": "3★",
      "role": "Medium Chaser",
      "roleColumn": "SUSTAIN",
      "element": "Medium",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/9586060/afbab7161261339d651409800aea3c20.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1810,
        "atkOrPower": 1610,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ドゥラ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Chaser Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Chaser",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 追込 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Red in Black］ドゥラメンテ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 追込"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-579403",
        "uma-554860"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "芝 中距離 追込 Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/595542).",
      "sourceUrl": "https://game8.jp/umamusume/595542"
    },
    {
      "externalId": "game8-uma-579403",
      "slug": "uma-579403",
      "nameEn": "Mejiro Bright (［清らに星澄むスノーロリィータ］)",
      "nameOriginal": "［清らに星澄むスノーロリィータ］メジロブライト",
      "styleOrTitle": "3★ [［清らに星澄むスノーロリィータ］メジロブライト] (Long / Betweener)",
      "rarity": "3★",
      "role": "Long Betweener",
      "roleColumn": "SUPPORT",
      "element": "Long",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/9079389/8275a577fcad5955103cb9f64c6f7b34.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1800,
        "atkOrPower": 1600,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ブライト",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 差し Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［清らに星澄むスノーロリィータ］メジロブライト)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-554860",
        "uma-547974"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "芝 長距離 差し Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/579403).",
      "sourceUrl": "https://game8.jp/umamusume/579403"
    },
    {
      "externalId": "game8-uma-554860",
      "slug": "uma-554860",
      "nameEn": "［Prism］ケイエスミラクル",
      "nameOriginal": "［Prism］ケイエスミラクル",
      "styleOrTitle": "3★ [［Prism］ケイエスミラクル] (Short / Leader)",
      "rarity": "3★",
      "role": "Short Leader",
      "roleColumn": "SUB_DPS",
      "element": "Short",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/8782836/2e165ad916955547a30fe3fbd2d6c31b.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1790,
        "atkOrPower": 1590,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ミラクル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Short Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 短距離 先行 Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Prism］ケイエスミラクル)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Short"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 短距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-547974",
        "uma-523946"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "芝 短距離 先行 Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/554860).",
      "sourceUrl": "https://game8.jp/umamusume/554860"
    },
    {
      "externalId": "game8-uma-547974",
      "slug": "uma-547974",
      "nameEn": "Gold Ship (［La mode 564］)",
      "nameOriginal": "［La mode 564］ゴールドシップ",
      "styleOrTitle": "3★ [［La mode 564］ゴールドシップ] (Long / Chaser)",
      "rarity": "3★",
      "role": "Long Chaser",
      "roleColumn": "SUSTAIN",
      "element": "Long",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/8988488/ca6871690ed442060a3c6346553ce7f1.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1780,
        "atkOrPower": 1580,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: パリゴルシ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Chaser Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Chaser",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 追込 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［La mode 564］ゴールドシップ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 追込"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-523946",
        "uma-486171"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "芝 長距離 追込 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/547974).",
      "sourceUrl": "https://game8.jp/umamusume/547974"
    },
    {
      "externalId": "game8-uma-523946",
      "slug": "uma-523946",
      "nameEn": "Neo Universe (［Universe-Naut］)",
      "nameOriginal": "［Universe-Naut］ネオユニヴァース",
      "styleOrTitle": "3★ [［Universe-Naut］ネオユニヴァース] (Medium / Betweener)",
      "rarity": "3★",
      "role": "Medium Betweener",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/7953942/0584816953b706224fa6e314005a7d38.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1770,
        "atkOrPower": 1570,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ネオユニ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Universe-Naut］ネオユニヴァース)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-486171",
        "uma-482000"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "芝 中距離 差し Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/523946).",
      "sourceUrl": "https://game8.jp/umamusume/523946"
    },
    {
      "externalId": "game8-uma-486171",
      "slug": "uma-486171",
      "nameEn": "Aston Machan (［Flare］)",
      "nameOriginal": "［Flare］アストンマーチャン",
      "styleOrTitle": "3★ [［Flare］アストンマーチャン] (Short / Runner)",
      "rarity": "3★",
      "role": "Short Runner",
      "roleColumn": "DPS",
      "element": "Short",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/7304855/3628ae0f8367fa4d6b9dd0b2a32606f6.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1760,
        "atkOrPower": 1560,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: マーチャン",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Short Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "芝 短距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Flare］アストンマーチャン)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Short"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 短距離 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-482000",
        "uma-473265"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "芝 短距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/486171).",
      "sourceUrl": "https://game8.jp/umamusume/486171"
    },
    {
      "externalId": "game8-uma-482000",
      "slug": "uma-482000",
      "nameEn": "Seeking the Pearl (［Rocket☆Star］)",
      "nameOriginal": "［Rocket☆Star］シーキングザパール",
      "styleOrTitle": "3★ [［Rocket☆Star］シーキングザパール] (Short / Leader)",
      "rarity": "3★",
      "role": "Short Leader",
      "roleColumn": "SUB_DPS",
      "element": "Short",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/7238349/c7006daadc12f9c16b84f24f053a377a.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1850,
        "atkOrPower": 1650,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: パール",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Short Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 短距離 先行 Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［Rocket☆Star］シーキングザパール)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Short"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 短距離 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-473265",
        "uma-468712"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "芝 短距離 先行 Built-in evolved acceleration and mid-race velocity skills for Short G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/482000).",
      "sourceUrl": "https://game8.jp/umamusume/482000"
    },
    {
      "externalId": "game8-uma-473265",
      "slug": "uma-473265",
      "nameEn": "Copano Rickey (［陰陽八卦☆開運衣］)",
      "nameOriginal": "［陰陽八卦☆開運衣］コパノリッキー",
      "styleOrTitle": "3★ [［陰陽八卦☆開運衣］コパノリッキー] (Dirt / Leader)",
      "rarity": "3★",
      "role": "Dirt Leader",
      "roleColumn": "SUB_DPS",
      "element": "Dirt",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/7133386/924b004ce6b9025ca9b970c929953efb.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1840,
        "atkOrPower": 1640,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: リッキー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Dirt Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "ダート マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［陰陽八卦☆開運衣］コパノリッキー)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Dirt"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "ダート マイル 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-468712",
        "uma-467730"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "ダート マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Dirt G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/473265).",
      "sourceUrl": "https://game8.jp/umamusume/473265"
    },
    {
      "externalId": "game8-uma-468712",
      "slug": "uma-468712",
      "nameEn": "Gold Ship (［RUN！乱！ランチャー！！］)",
      "nameOriginal": "［RUN！乱！ランチャー！！］ゴールドシップ",
      "styleOrTitle": "3★ [［RUN！乱！ランチャー！！］ゴールドシップ] (Long / Chaser)",
      "rarity": "3★",
      "role": "Long Chaser",
      "roleColumn": "SUSTAIN",
      "element": "Long",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/7027123/c93778934bc3be574d7ccb72a6d27f3a.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1830,
        "atkOrPower": 1630,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 水ゴルシ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Chaser Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Chaser",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 追込 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［RUN！乱！ランチャー！！］ゴールドシップ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 追込"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-467730",
        "uma-447968"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "芝 長距離 追込 Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/468712).",
      "sourceUrl": "https://game8.jp/umamusume/468712"
    },
    {
      "externalId": "game8-uma-467730",
      "slug": "uma-467730",
      "nameEn": "Special Week (［日之本一の総大将］)",
      "nameOriginal": "［日之本一の総大将］スペシャルウィーク",
      "styleOrTitle": "3★ [［日之本一の総大将］スペシャルウィーク] (Long / Betweener)",
      "rarity": "3★",
      "role": "Long Betweener",
      "roleColumn": "SUPPORT",
      "element": "Long",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/8988487/ac94405033128dabc0c0f92838887e2e.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1820,
        "atkOrPower": 1620,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: 総大将スペ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Betweener Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 差し Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［日之本一の総大将］スペシャルウィーク)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 差し"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-447968",
        "uma-446143"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "芝 長距離 差し Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/467730).",
      "sourceUrl": "https://game8.jp/umamusume/467730"
    },
    {
      "externalId": "game8-uma-447968",
      "slug": "uma-447968",
      "nameEn": "Nishino Flower (［ティアード・ペタル］)",
      "nameOriginal": "［ティアード・ペタル］ニシノフラワー",
      "styleOrTitle": "3★ [［ティアード・ペタル］ニシノフラワー] (Mile / Leader)",
      "rarity": "3★",
      "role": "Mile Leader",
      "roleColumn": "SUB_DPS",
      "element": "Mile",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/6725788/81ad8ad6c44c54bb02f6ca96a5f5e913.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1810,
        "atkOrPower": 1610,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: フラワー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Mile Leader Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Target Speed"
          ],
          "exactDescription": "芝 マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［ティアード・ペタル］ニシノフラワー)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Mile"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 マイル 先行"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-446143",
        "uma-440486"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "芝 マイル 先行 Built-in evolved acceleration and mid-race velocity skills for Mile G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/447968).",
      "sourceUrl": "https://game8.jp/umamusume/447968"
    },
    {
      "externalId": "game8-uma-446143",
      "slug": "uma-446143",
      "nameEn": "Seiun Sky (［ソワレ・ド・シャトン］)",
      "nameOriginal": "［ソワレ・ド・シャトン］セイウンスカイ",
      "styleOrTitle": "3★ [［ソワレ・ド・シャトン］セイウンスカイ] (Long / Runner)",
      "rarity": "3★",
      "role": "Long Runner",
      "roleColumn": "DPS",
      "element": "Long",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/6724888/6b1703bb92f67df9bb5303823a38edaf.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1800,
        "atkOrPower": 1600,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: ダンスカイ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［ソワレ・ド・シャトン］セイウンスカイ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-440486",
        "uma-391131"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "芝 長距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/446143).",
      "sourceUrl": "https://game8.jp/umamusume/446143"
    },
    {
      "externalId": "game8-uma-440486",
      "slug": "uma-440486",
      "nameEn": "Kitasan Black (［錦上・大判御輿］)",
      "nameOriginal": "［錦上・大判御輿］キタサンブラック",
      "styleOrTitle": "3★ [［錦上・大判御輿］キタサンブラック] (Long / Runner)",
      "rarity": "3★",
      "role": "Long Runner",
      "roleColumn": "DPS",
      "element": "Long",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/6724844/efc2cda8b2e65b9bc28ee92cf5c1f150.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1790,
        "atkOrPower": 1590,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: キタサン",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Long Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "芝 長距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［錦上・大判御輿］キタサンブラック)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Long"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 長距離 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-391131",
        "uma-818827"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "芝 長距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Long G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/440486).",
      "sourceUrl": "https://game8.jp/umamusume/440486"
    },
    {
      "externalId": "game8-uma-391131",
      "slug": "uma-391131",
      "nameEn": "Seiun Sky (［あおぐもサミング］)",
      "nameOriginal": "［あおぐもサミング］セイウンスカイ",
      "styleOrTitle": "3★ [［あおぐもサミング］セイウンスカイ] (Medium / Runner)",
      "rarity": "3★",
      "role": "Medium Runner",
      "roleColumn": "DPS",
      "element": "Medium",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/6724861/53428a97ea18b6ad802ba424e504c95c.png/show",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 10,
      "recommendedDupes": "3★ Base (4★–5★ Talent Optional)",
      "baseStats": {
        "hpOrStamina": 1450,
        "dpOrSpeed": 1780,
        "atkOrPower": 1580,
        "defOrGuts": 1350,
        "critOrWit": 1350,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 90,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Unique Skill: スカイ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "180 Skill Pts",
          "multiplierSummary": "Medium Runner Unique",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Target Speed"
          ],
          "exactDescription": "芝 中距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        },
        {
          "name": "Evolved Awakening Skill (［あおぐもサミング］セイウンスカイ)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "360 Skill Pts",
          "multiplierSummary": "Evolved Pink Velocity / Accel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Final Leg Acceleration",
            "Medium"
          ],
          "exactDescription": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "passives": [
        {
          "unlockRank": "Awakening Lv5",
          "name": "Scenario Evolution I",
          "effect": "芝 中距離 逃げ"
        },
        {
          "unlockRank": "4-Star Talent",
          "name": "Stat Growth Bonus",
          "effect": "Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks."
        }
      ],
      "synergyUnitSlugs": [
        "uma-818827",
        "uma-811061"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "芝 中距離 逃げ Built-in evolved acceleration and mid-race velocity skills for Medium G1 tracks.",
      "longevityNote": "Verified on Game8 JP Uma Musume Tier List (https://game8.jp/umamusume/391131).",
      "sourceUrl": "https://game8.jp/umamusume/391131"
    }
  ],
  "equipments": [
    {
      "externalId": "game8-uma-card-733886",
      "slug": "uma-card-733886",
      "nameEn": "SSR Tokai Teio (［天才的ユートピア］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［天才的ユートピア］トウカイテイオー)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11919934/3c769202643c572b87141bdad53ab3a6.webp/show",
      "tierRank": "SSS",
      "score": 10,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/733886). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/733886"
    },
    {
      "externalId": "game8-uma-card-751667",
      "slug": "uma-card-751667",
      "nameEn": "SSR Air Groove (［心覚えし、京の華］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［心覚えし、京の華］エアグルーヴ)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12141013/6c96215755b128103ea4bd4f7baed2a2.webp/show",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/751667). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/751667"
    },
    {
      "externalId": "game8-uma-card-782234",
      "slug": "uma-card-782234",
      "nameEn": "SSR Tap Dance City (［刀光散らしてClash！］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［刀光散らしてClash！］タップダンスシチー)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12527069/d4f114ad2c231bd6bc6831949dbdbb03.webp/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/782234). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/782234"
    },
    {
      "externalId": "game8-uma-card-785656",
      "slug": "uma-card-785656",
      "nameEn": "SSR Satono Diamond (［永久の誓い、永久の輝き］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［永久の誓い、永久の輝き］サトノダイヤモンド)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12598774/d6caea63450533983b7e95b4c39b91ee.webp/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/785656). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/785656"
    },
    {
      "externalId": "game8-uma-card-811060",
      "slug": "uma-card-811060",
      "nameEn": "SSR Mr. C.B. (［時に交わる海と空］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［時に交わる海と空］ミスターシービー)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12905139/b57c13a37a8ddd6bba6abf4b75afffb9.webp/show",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/811060). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/811060"
    },
    {
      "externalId": "game8-uma-card-811059",
      "slug": "uma-card-811059",
      "nameEn": "SSR ［As if Guided］エフフォーリア",
      "category": "Support Card",
      "subType": "SSR Support Card (［As if Guided］エフフォーリア)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12905140/503197e23de1db203117832e7154203b.webp/show",
      "tierRank": "SSS",
      "score": 10,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/811059). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/811059"
    },
    {
      "externalId": "game8-uma-card-794062",
      "slug": "uma-card-794062",
      "nameEn": "SSR Meisho Doto (［その執念は怒濤が如く］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［その執念は怒濤が如く］メイショウドトウ)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12696745/1e3ca53aff915876794868311abb4451.webp/show",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/794062). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/794062"
    },
    {
      "externalId": "game8-uma-card-802531",
      "slug": "uma-card-802531",
      "nameEn": "SSR ［巻頭カラーの夏］キセキ",
      "category": "Support Card",
      "subType": "SSR Support Card (［巻頭カラーの夏］キセキ)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12814435/4b116c9b8d21b7f73dadcd9fc7dc3dd4.webp/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/802531). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/802531"
    },
    {
      "externalId": "game8-uma-card-737339",
      "slug": "uma-card-737339",
      "nameEn": "SSR Mihono Bourbon (［無機の闘志］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［無機の闘志］ミホノブルボン)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11971772/6f7caa91b73d9daacabf74b6fa8a5466.webp/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/737339). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/737339"
    },
    {
      "externalId": "game8-uma-card-836269",
      "slug": "uma-card-836269",
      "nameEn": "SSR Mayano Top Gun (［Time of Departure］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［Time of Departure］マヤノトップガン)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/13128950/78a038de4a81cc0d2f3f3f658f0966af.webp/show",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/836269). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/836269"
    },
    {
      "externalId": "game8-uma-card-778571",
      "slug": "uma-card-778571",
      "nameEn": "SSR Aston Machan (［単焦点でつかまえて］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［単焦点でつかまえて］アストンマーチャン)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12473230/59ba7ba95382dd7f6ffb80ee9f59f8b7.webp/show",
      "tierRank": "SSS",
      "score": 10,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/778571). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/778571"
    },
    {
      "externalId": "game8-uma-card-763716",
      "slug": "uma-card-763716",
      "nameEn": "SSR Forever Young (［Innovator］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［Innovator］フォーエバーヤング)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12338045/ab8d5d66d8277868bb81f524879a7928.webp/show",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/763716). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/763716"
    },
    {
      "externalId": "game8-uma-card-836270",
      "slug": "uma-card-836270",
      "nameEn": "SSR ［いとどめでたき、まつりかな］吾妻",
      "category": "Support Card",
      "subType": "SSR Support Card (［いとどめでたき、まつりかな］吾妻)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/13128949/8b8b67e4bfb6ef9d302023d8403f85bc.webp/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/836270). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/836270"
    },
    {
      "externalId": "game8-uma-card-670447",
      "slug": "uma-card-670447",
      "nameEn": "SSR Almond Eye (［世界を変える眼差し］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［世界を変える眼差し］アーモンドアイ)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11068193/4e1e094a995c5e3d5ca98382d0ba2333.jpeg/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/670447). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/670447"
    },
    {
      "externalId": "game8-uma-card-723595",
      "slug": "uma-card-723595",
      "nameEn": "SSR Eishin Flash (［Zirkus der Traume］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［Zirkus der Traume］エイシンフラッシュ)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11812660/f14e3d4fbdfdfbd08bf1ab609837cbe5.webp/show",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/723595). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/723595"
    },
    {
      "externalId": "game8-uma-card-758987",
      "slug": "uma-card-758987",
      "nameEn": "SSR Matikanefukukitaru (［吉兆招福チョコ来たる］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［吉兆招福チョコ来たる］マチカネフクキタル)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12247380/aba5297a760cf79fb1d9e949110d6d2e.webp/show",
      "tierRank": "SSS",
      "score": 10,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/758987). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/758987"
    },
    {
      "externalId": "game8-uma-card-768738",
      "slug": "uma-card-768738",
      "nameEn": "SSR ［響け、二人の凱歌］マルシュロレーヌ",
      "category": "Support Card",
      "subType": "SSR Support Card (［響け、二人の凱歌］マルシュロレーヌ)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12383724/bfabf28523e76b7ae1ab134cc03755ff.webp/show",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/768738). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/768738"
    },
    {
      "externalId": "game8-uma-card-815144",
      "slug": "uma-card-815144",
      "nameEn": "SSR Matikanetannhauser (［行き先はあたたかな場所］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［行き先はあたたかな場所］マチカネタンホイザ)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12991478/a645d1fa5216cb8463752f0eb1a05b48.webp/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/815144). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/815144"
    },
    {
      "externalId": "game8-uma-card-746404",
      "slug": "uma-card-746404",
      "nameEn": "SSR ［ぬくもりのノエル］フェノーメノ",
      "category": "Support Card",
      "subType": "SSR Support Card (［ぬくもりのノエル］フェノーメノ)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12036420/3764cf9cbb0e13014c29a75fbbef840e.webp/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/746404). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/746404"
    },
    {
      "externalId": "game8-uma-card-783895",
      "slug": "uma-card-783895",
      "nameEn": "SSR Sakura Chiyono O (［賑やかな未来を乗せて走れ！］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［賑やかな未来を乗せて走れ！］サクラチヨノオー)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12560468/ad70ec5e7a1b31d83ecfe7bd1855b527.webp/show",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/783895). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/783895"
    },
    {
      "externalId": "game8-uma-card-751666",
      "slug": "uma-card-751666",
      "nameEn": "SSR Fine Motion (［ゆかし、きらめきの旅路］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［ゆかし、きらめきの旅路］ファインモーション)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12141012/ea94db7efcabda48a99b3e11f4477df8.webp/show",
      "tierRank": "SSS",
      "score": 10,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/751666). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/751666"
    },
    {
      "externalId": "game8-uma-card-758988",
      "slug": "uma-card-758988",
      "nameEn": "SSR Neo Universe (［星跨ぐメッセージ］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［星跨ぐメッセージ］ネオユニヴァース)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12247381/c166c36dd77aed781b70e3c31a2f542c.webp/show",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/758988). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/758988"
    },
    {
      "externalId": "game8-uma-card-782235",
      "slug": "uma-card-782235",
      "nameEn": "SSR Agnes Digital (［全てに挑む勇ましき者］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［全てに挑む勇ましき者］アグネスデジタル)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12527067/62da9457171c175c346471451b41fbd1.webp/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/782235). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/782235"
    },
    {
      "externalId": "game8-uma-card-785657",
      "slug": "uma-card-785657",
      "nameEn": "SSR ［スマイル・エバーアフター］グランアレグリア",
      "category": "Support Card",
      "subType": "SSR Support Card (［スマイル・エバーアフター］グランアレグリア)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12598772/44f9c8d71bdb31bd9e5577393edbf024.webp/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/785657). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/785657"
    },
    {
      "externalId": "game8-uma-card-712501",
      "slug": "uma-card-712501",
      "nameEn": "SSR ［気まぐれ渡り星］ステイゴールド",
      "category": "Support Card",
      "subType": "SSR Support Card (［気まぐれ渡り星］ステイゴールド)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11697592/952fc53f18238e78530aa17ac299da43.webp/show",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/712501). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/712501"
    },
    {
      "externalId": "game8-uma-card-775199",
      "slug": "uma-card-775199",
      "nameEn": "SSR Daring Tact (［白に至る純真］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［白に至る純真］デアリングタクト)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12431586/59bb84278daa9f90902f5a4c45ad0dbb.webp/show",
      "tierRank": "SSS",
      "score": 10,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/775199). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/775199"
    },
    {
      "externalId": "game8-uma-card-775198",
      "slug": "uma-card-775198",
      "nameEn": "SSR Dearing Heart (［白に至る覚悟］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［白に至る覚悟］デアリングハート)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12431585/440116926f3ff15f3bec9608fb0e3cef.webp/show",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/775198). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/775198"
    },
    {
      "externalId": "game8-uma-card-818830",
      "slug": "uma-card-818830",
      "nameEn": "SSR ［冷凜なるビスクドール］アドマイヤグルーヴ",
      "category": "Support Card",
      "subType": "SSR Support Card (［冷凜なるビスクドール］アドマイヤグルーヴ)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/13038186/888313ff0c56dfef632b0a11bda16d43.webp/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/818830). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/818830"
    },
    {
      "externalId": "game8-uma-card-818831",
      "slug": "uma-card-818831",
      "nameEn": "SSR Narita Brian (［晩餐］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［晩餐］ナリタブライアン)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/13038187/68746aa761cb46045a02bd4cf4de36c4.webp/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/818831). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/818831"
    },
    {
      "externalId": "game8-uma-card-796336",
      "slug": "uma-card-796336",
      "nameEn": "SSR Nice Nature (［両手いっぱい、小倉愛］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［両手いっぱい、小倉愛］ナイスネイチャ)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12736627/4c7e813e92ecdfbb172c654d67b33100.webp/show",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/796336). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/796336"
    },
    {
      "externalId": "game8-uma-card-708457",
      "slug": "uma-card-708457",
      "nameEn": "SSR ［水面のプリンシパル］ウインバリアシオン",
      "category": "Support Card",
      "subType": "SSR Support Card (［水面のプリンシパル］ウインバリアシオン)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11603759/59c601cd59c8594eb5c819260d7bd2d4.webp/show",
      "tierRank": "SSS",
      "score": 10,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/708457). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/708457"
    },
    {
      "externalId": "game8-uma-card-681576",
      "slug": "uma-card-681576",
      "nameEn": "SSR Daring Tact (［無垢の白妙］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［無垢の白妙］デアリングタクト)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11239875/fd7bb21aa322c699c98b381bdb2e576d.png/show",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/681576). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/681576"
    },
    {
      "externalId": "game8-uma-card-629755",
      "slug": "uma-card-629755",
      "nameEn": "SSR Smart Falcon (［波間のオフショット］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［波間のオフショット］スマートファルコン)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10290847/7587cb9f405aa47b253068004dbc3cef.png/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/629755). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/629755"
    },
    {
      "externalId": "game8-uma-card-635113",
      "slug": "uma-card-635113",
      "nameEn": "SSR Still in Love (［Devilish Whispers］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［Devilish Whispers］スティルインラブ)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10423094/635b9e45455e4bc29f7d46b131dcc3c4.png/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/635113). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/635113"
    },
    {
      "externalId": "game8-uma-card-713261",
      "slug": "uma-card-713261",
      "nameEn": "SSR Calstone Light O (［、猫です］カルストンライトオ)",
      "category": "Support Card",
      "subType": "SSR Support Card (［カルストンライトオ、猫です］カルストンライトオ)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11712360/c3d9c9d583af5f225fe094e63ad8a6d9.webp/show",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/713261). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/713261"
    },
    {
      "externalId": "game8-uma-card-712502",
      "slug": "uma-card-712502",
      "nameEn": "SSR ［氷結晶の静域］アドマイヤグルーヴ",
      "category": "Support Card",
      "subType": "SSR Support Card (［氷結晶の静域］アドマイヤグルーヴ)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11697591/fd8f6e0aab75081883c0142fbc142605.webp/show",
      "tierRank": "SSS",
      "score": 10,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/712502). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/712502"
    },
    {
      "externalId": "game8-uma-card-692544",
      "slug": "uma-card-692544",
      "nameEn": "SSR Rhein Kraft (［Unveiled Dream］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［Unveiled Dream］ラインクラフト)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11401435/6013c70768f081f22be23a088258e871.jpeg/show",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/692544). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/692544"
    },
    {
      "externalId": "game8-uma-card-679967",
      "slug": "uma-card-679967",
      "nameEn": "SSR Dream Journey (［誘うは夢心地］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［誘うは夢心地］ドリームジャーニー)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11203489/217530bbee65556fafea910b385ed08d.jpeg/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/679967). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/679967"
    },
    {
      "externalId": "game8-uma-card-727874",
      "slug": "uma-card-727874",
      "nameEn": "SSR ［決意のフローラ］カレンブーケドール",
      "category": "Support Card",
      "subType": "SSR Support Card (［決意のフローラ］カレンブーケドール)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11847355/53aa139d2b27dd0f939488ccdcc13e9f.webp/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/727874). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/727874"
    },
    {
      "externalId": "game8-uma-card-746405",
      "slug": "uma-card-746405",
      "nameEn": "SSR Gold Ship (［激録！爆走トナカイ事件］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［激録！爆走トナカイ事件］ゴールドシップ)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12036419/6d898c5064b27baecf511d1055a6d7ad.webp/show",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/746405). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/746405"
    },
    {
      "externalId": "game8-uma-card-749323",
      "slug": "uma-card-749323",
      "nameEn": "SSR Inari One (［故郷に錦を飾るんでい！］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［故郷に錦を飾るんでい！］イナリワン)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12087367/70da96adeafee17de36c7d3e2206b49a.webp/show",
      "tierRank": "SSS",
      "score": 10,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/749323). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/749323"
    },
    {
      "externalId": "game8-uma-card-623911",
      "slug": "uma-card-623911",
      "nameEn": "SSR ［そして幕は上がる］ダンツフレーム",
      "category": "Support Card",
      "subType": "SSR Support Card (［そして幕は上がる］ダンツフレーム)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10221337/7321b84b70ec104bc00acb760a5f6e0c.png/show",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/623911). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/623911"
    },
    {
      "externalId": "game8-uma-card-679968",
      "slug": "uma-card-679968",
      "nameEn": "SSR Vodka (［Ballroom Tempest］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［Ballroom Tempest］ウオッカ)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11203488/d0b8f620376bdc216ebb2e8f9ece2fd5.jpeg/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/679968). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/679968"
    },
    {
      "externalId": "game8-uma-card-685370",
      "slug": "uma-card-685370",
      "nameEn": "SSR Buena Vista (［Luz de ensueño］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［Luz de ensueño］ブエナビスタ)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11287849/bc6ef741546a88e2f3939c7f89cce402.png/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/685370). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/685370"
    },
    {
      "externalId": "game8-uma-card-700421",
      "slug": "uma-card-700421",
      "nameEn": "SSR Tamamo Cross (［白き稲妻の如く］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［白き稲妻の如く］タマモクロス)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11497237/4d6998965782eb36dd4d280e55967ae0.jpeg/show",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/700421). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/700421"
    },
    {
      "externalId": "game8-uma-card-812595",
      "slug": "uma-card-812595",
      "nameEn": "SSR Haru Urara (［わたしときみの交換こ♪］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［わたしときみの交換こ♪］ハルウララ)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12927221/109b6b7833cebcd7af7f0308cc19f51e.webp/show",
      "tierRank": "SSS",
      "score": 10,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/812595). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/812595"
    },
    {
      "externalId": "game8-uma-card-652448",
      "slug": "uma-card-652448",
      "nameEn": "SSR Symboli Kris S (［COOL⇔CRAZY/Buddy］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［COOL⇔CRAZY/Buddy］シンボリクリスエス)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10696300/85fb1860cc80c278111163eda54d27ef.png/show",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/652448). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/652448"
    },
    {
      "externalId": "game8-uma-card-754978",
      "slug": "uma-card-754978",
      "nameEn": "SSR King Halo (［私のためのショッピング］)",
      "category": "Support Card",
      "subType": "SSR Support Card (［私のためのショッピング］キングヘイロー)",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12189871/937521c05ccda70f2a93e6764be4e2c3.webp/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv50) / 3LB (Lv45)",
      "stats": {
        "SpecialtyPriority": "80+",
        "TrainingEffectiveness": "15% – 20%",
        "SkillPointBonus": "+2"
      },
      "effectSummary": "Top-ranked SSR Support Card on Game8 JP (https://game8.jp/umamusume/754978). High Specialty Priority, Training Effectiveness, and dual Gold Skill acquisition.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654"
      ],
      "sourceUrl": "https://game8.jp/umamusume/754978"
    }
  ],
  "bosses": [
    {
      "slug": "champions-meet-long-kyoto-3200m",
      "nameEn": "Champions Meet LONG — Kyoto Turf 3200m (Tenno Sho Spring)",
      "modeName": "Champions Meet (チャンミ)",
      "difficultyLabel": "Grade League Finals",
      "imageUrl": "https://img.game8.jp/13038190/f1fc397f35f4fdf6aadb5c519ec0673f.webp/show",
      "hpStat": "Target Stamina: 1350 + 2 Gold Recoveries",
      "shieldOrDpStat": "Target Speed: 1850 + Long S Aptitude",
      "weaknesses": [
        "0.40 m/s² Final-Leg Acceleration",
        "Long S (+5% Target Speed)"
      ],
      "resistances": [
        "Late-Race Stamina Exhaustion",
        "Mid-Race Boxed Traffic"
      ],
      "attackPatterns": [
        {
          "turnOrPhase": "0m – 2133m (Mid-Race Slope)",
          "attackName": "Kyoto 3rd Corner Uphill/Downhill",
          "damageType": "Stamina Drain Check",
          "counterAction": "Trigger 2 Gold Stamina Recoveries before the 2133m mark."
        },
        {
          "turnOrPhase": "2133m – 3200m (Final Leg Spurt)",
          "attackName": "Frame-1 Max Spurt Check",
          "damageType": "Acceleration & Velocity Check",
          "counterAction": "Proc Monster (怪物) or True Way Out (真っ向勝負) on the exact final-leg boundary."
        }
      ],
      "strategySteps": [
        "Inherit 6★–9★ Long Distance Pink Sparks to guarantee Long S (+5% Target Speed).",
        "Include 2 Speed + 1 Stamina + 1 Wit + 1 Friend Scenario Link SSR card in your deck."
      ],
      "recommendedUnitSlugs": [
        "uma-818827",
        "uma-811061",
        "uma-794061",
        "uma-785654",
        "uma-780423"
      ],
      "sourceUrl": "https://game8.jp/umamusume/372573"
    },
    {
      "slug": "league-of-heroes-mile-tokyo-1600m",
      "nameEn": "League of Heroes MILE — Tokyo Turf 1600m (Yasuda Kinen)",
      "modeName": "League of Heroes (LoH)",
      "difficultyLabel": "Platinum 4 Rank",
      "imageUrl": "https://img.game8.jp/12905132/3295d3ffba05887e458a3b0a898dce66.webp/show",
      "hpStat": "Target Stamina: 950 + 1 Recovery",
      "shieldOrDpStat": "Target Speed: 1850 + Mile S Aptitude",
      "weaknesses": [
        "Front Runner / Pace Chaser Dominance",
        "Groundwork (地固め)"
      ],
      "resistances": [
        "12-Horse Inner Rail Congestion"
      ],
      "attackPatterns": [
        {
          "turnOrPhase": "0m – 400m (Opening Dash)",
          "attackName": "12-Horse Gate Congestion",
          "damageType": "Positioning Check",
          "counterAction": "Field 2 Front Runners + 1 Pace Chaser to avoid getting blocked by NPC horses."
        }
      ],
      "strategySteps": [
        "Avoid Late Surgers/End Closers in 12-horse LoH lobbies to prevent traffic RNG.",
        "Stack 3 green skills + Groundwork on both Front Runners."
      ],
      "recommendedUnitSlugs": [
        "uma-785654",
        "uma-780423",
        "uma-775196",
        "uma-755849",
        "uma-758981"
      ],
      "sourceUrl": "https://game8.jp/umamusume/372573"
    }
  ],
  "banners": [
    {
      "slug": "uma-daiwa-scarlet-kimono-pickup",
      "bannerTitle": "Trainee Pickup Gacha — Daiwa Scarlet (Kimono) [3★ Long Runner]",
      "bannerType": "LIMITED",
      "imageUrl": "https://img.game8.jp/13038190/f1fc397f35f4fdf6aadb5c519ec0673f.webp/show",
      "featuredNames": [
        "Daiwa Scarlet (Kimono)"
      ],
      "featuredUnitSlugs": [
        "uma-818827"
      ],
      "asianStartDate": "2026-10-26",
      "asianEndDate": "2026-11-19",
      "estGlobalStartDate": "2028-10-26",
      "estGlobalEndDate": "2028-11-19",
      "pullVerdict": "HIGH_VALUE",
      "verdictReasoning": "Verified active banner on Game8 JP (https://game8.jp/umamusume/372207) rated 4/5 Stars for Long-distance Front Runner setups.",
      "pityCurrencyCost": 30000,
      "sourceUrl": "https://game8.jp/umamusume/372207"
    },
    {
      "slug": "uma-support-card-pickup-banner",
      "bannerTitle": "SSR Support Card Pickup — Almond Eye (Speed) & Tokai Teio (Speed)",
      "bannerType": "SUPPORT_CARD",
      "imageUrl": "https://img.game8.jp/11919934/3c769202643c572b87141bdad53ab3a6.webp/show",
      "featuredNames": [
        "SSR Tokai Teio (［天才的ユートピア］)",
        "SSR Air Groove (［心覚えし、京の華］)"
      ],
      "featuredUnitSlugs": [
        "uma-818827",
        "uma-811061"
      ],
      "asianStartDate": "2026-10-26",
      "asianEndDate": "2026-11-30",
      "estGlobalStartDate": "2028-10-26",
      "estGlobalEndDate": "2028-11-30",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "Rated 5/5 Stars (★★★★★) on Game8 JP (https://game8.jp/umamusume/372207) with dual Gold Skill acquisition.",
      "pityCurrencyCost": 30000,
      "sourceUrl": "https://game8.jp/umamusume/372354"
    },
    {
      "slug": "uma-scenario-support-gacha",
      "bannerTitle": "Scenario Support Gacha — Tucker Bryne & Mejiro McQueen",
      "bannerType": "SUPPORT_CARD",
      "imageUrl": "https://img.game8.jp/12527069/d4f114ad2c231bd6bc6831949dbdbb03.webp/show",
      "featuredNames": [
        "SSR Tap Dance City (［刀光散らしてClash！］)",
        "SSR Satono Diamond (［永久の誓い、永久の輝き］)"
      ],
      "featuredUnitSlugs": [
        "uma-794061",
        "uma-785654"
      ],
      "asianStartDate": "2026-10-26",
      "asianEndDate": "2026-11-30",
      "estGlobalStartDate": "2028-10-26",
      "estGlobalEndDate": "2028-11-30",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "Rated 5/5 Stars (★★★★★) on Game8 JP — core Scenario Link support cards.",
      "pityCurrencyCost": 30000,
      "sourceUrl": "https://game8.jp/umamusume/372207"
    }
  ]
};
