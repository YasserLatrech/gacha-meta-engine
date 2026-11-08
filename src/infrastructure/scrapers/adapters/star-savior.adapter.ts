import { GameAdapterBundle } from './heaven-burns-red.adapter';

export const starSaviorBundle: GameAdapterBundle = {
  "slug": "star-savior",
  "name": "Star Savior",
  "shortName": "Star Savior",
  "asianRegion": "JP",
  "asianPatchVersion": "v1.4.0 JP (AppMedia Verified)",
  "globalPatchVersion": "v1.2.0 Global",
  "foresightGapMonths": 3,
  "coverImageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/205900_h5bcs.webp",
  "currencyName": "Starlight Quartz",
  "pullCostSingle": 150,
  "pityThreshold": 200,
  "monthlyF2pIncome": 15000,
  "monthlyPassIncome": 22500,
  "sourceUrl": "https://appmedia.jp/starsavior/79517270",
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
      "label": "Sun (太陽)",
      "colorHex": "#DC2626"
    },
    {
      "key": "Moon",
      "label": "Moon (月)",
      "colorHex": "#2563EB"
    },
    {
      "key": "Star",
      "label": "Star (星)",
      "colorHex": "#D97706"
    },
    {
      "key": "Order",
      "label": "Order (秩序)",
      "colorHex": "#059669"
    },
    {
      "key": "Chaos",
      "label": "Chaos (混沌)",
      "colorHex": "#7C3AED"
    }
  ],
  "units": [
    {
      "externalId": "appmedia-ss-80384230",
      "slug": "ss-80384230",
      "nameEn": "プロフェッサーM",
      "nameOriginal": "プロフェッサーM",
      "styleOrTitle": "SSR Moon レンジャー (プロフェッサーM)",
      "rarity": "SSR",
      "role": "Ranger (Sub-DPS)",
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
          "name": "Stellar Burst: プロフェッサーM",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Moon Ultimate + Toughness Break",
          "hitCount": 6,
          "buffCategoryTags": [
            "Moon",
            "レンジャー",
            "Toughness Break"
          ],
          "exactDescription": "行動ゲージ増加量が凄まじい手数多めのアタッカー 味方の挟撃を誘発できるパッシブを所持"
        },
        {
          "name": "Tactical Art: レンジャー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Ranger (Sub-DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Sub-DPS)",
            "Action Speed"
          ],
          "exactDescription": "└条件が攻撃力が1番高い味方なのも優秀"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "行動ゲージ増加量が凄まじい手数多めのアタッカー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "味方の挟撃を誘発できるパッシブを所持"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└条件が攻撃力が1番高い味方なのも優秀"
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
      "summaryVerdict": "行動ゲージ増加量が凄まじい手数多めのアタッカー 味方の挟撃を誘発できるパッシブを所持",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/80384230).",
      "sourceUrl": "https://appmedia.jp/starsavior/80384230"
    },
    {
      "externalId": "appmedia-ss-80354674",
      "slug": "ss-80354674",
      "nameEn": "アモラ",
      "nameOriginal": "アモラ",
      "styleOrTitle": "SSR Order アサシン (アモラ)",
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
          "name": "Stellar Burst: アモラ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Order Ultimate + Toughness Break",
          "hitCount": 6,
          "buffCategoryTags": [
            "Order",
            "アサシン",
            "Toughness Break"
          ],
          "exactDescription": "高頻度で回せる特殊スキルと行動ゲージ増加などを合わせて戦う高速アタッカー 非弱体時は与ダメ増加し、弱体を自身でも解除できるので1人でもなんとかできる"
        },
        {
          "name": "Tactical Art: アサシン",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Assassin (Burst DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "└解除不可のデバフには弱い"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "高頻度で回せる特殊スキルと行動ゲージ増加などを合わせて戦う高速アタッカー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "非弱体時は与ダメ増加し、弱体を自身でも解除できるので1人でもなんとかできる"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└解除不可のデバフには弱い"
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
      "summaryVerdict": "高頻度で回せる特殊スキルと行動ゲージ増加などを合わせて戦う高速アタッカー 非弱体時は与ダメ増加し、弱体を自身でも解除できるので1人でもなんとかできる",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/80354674).",
      "sourceUrl": "https://appmedia.jp/starsavior/80354674"
    },
    {
      "externalId": "appmedia-ss-80218957",
      "slug": "ss-80218957",
      "nameEn": "Smile (水着)",
      "nameOriginal": "水着スマイル",
      "styleOrTitle": "SSR Star アサシン (水着スマイル)",
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
          "name": "Stellar Burst: 水着スマイル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Star Ultimate + Toughness Break",
          "hitCount": 6,
          "buffCategoryTags": [
            "Star",
            "アサシン",
            "Toughness Break"
          ],
          "exactDescription": "CT0のトリガースキルを所持 水鉄砲持ちの敵に追い討ちをかける"
        },
        {
          "name": "Tactical Art: アサシン",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Assassin (Burst DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "究極スキル使用後に最大3回トリガースキルで追加攻撃"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "CT0のトリガースキルを所持"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "水鉄砲持ちの敵に追い討ちをかける"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "究極スキル使用後に最大3回トリガースキルで追加攻撃"
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
      "summaryVerdict": "CT0のトリガースキルを所持 水鉄砲持ちの敵に追い討ちをかける",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/80218957).",
      "sourceUrl": "https://appmedia.jp/starsavior/80218957"
    },
    {
      "externalId": "appmedia-ss-80022340",
      "slug": "ss-80022340",
      "nameEn": "Carmen (花嫁)",
      "nameOriginal": "花嫁カルメン",
      "styleOrTitle": "SSR Moon サポーター (花嫁カルメン)",
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
          "name": "Stellar Burst: 花嫁カルメン",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Moon Ultimate + Toughness Break",
          "hitCount": 6,
          "buffCategoryTags": [
            "Moon",
            "サポーター",
            "Toughness Break"
          ],
          "exactDescription": "トリガースキルで自身のターン以外でも味方を守るサポーター └攻撃力が最も高い味方が対象"
        },
        {
          "name": "Tactical Art: サポーター",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Supporter (Buffer)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Supporter (Buffer)",
            "Action Speed"
          ],
          "exactDescription": "ノヴァバーストと究極スキルの回復性能が高く、単体回復性能はトップクラス"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "トリガースキルで自身のターン以外でも味方を守るサポーター"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└攻撃力が最も高い味方が対象"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "ノヴァバーストと究極スキルの回復性能が高く、単体回復性能はトップクラス"
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
      "summaryVerdict": "トリガースキルで自身のターン以外でも味方を守るサポーター └攻撃力が最も高い味方が対象",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/80022340).",
      "sourceUrl": "https://appmedia.jp/starsavior/80022340"
    },
    {
      "externalId": "appmedia-ss-79717421",
      "slug": "ss-79717421",
      "nameEn": "バニーシャルル",
      "nameOriginal": "バニーシャルル",
      "styleOrTitle": "SSR Sun アサシン (バニーシャルル)",
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
          "name": "Stellar Burst: バニーシャルル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Sun Ultimate + Toughness Break",
          "hitCount": 6,
          "buffCategoryTags": [
            "Sun",
            "アサシン",
            "Toughness Break"
          ],
          "exactDescription": "基本スキルの追加発動、究極スキルCTリセット、追加ターンと手数に優れるアタッカー 攻撃バフと防御貫通で火力も◎"
        },
        {
          "name": "Tactical Art: アサシン",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Assassin (Burst DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "攻撃バフは味方全体なので火力サポートも可能"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "基本スキルの追加発動、究極スキルCTリセット、追加ターンと手数に優れるアタッカー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "攻撃バフと防御貫通で火力も◎"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "攻撃バフは味方全体なので火力サポートも可能"
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
      "summaryVerdict": "基本スキルの追加発動、究極スキルCTリセット、追加ターンと手数に優れるアタッカー 攻撃バフと防御貫通で火力も◎",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79717421).",
      "sourceUrl": "https://appmedia.jp/starsavior/79717421"
    },
    {
      "externalId": "appmedia-ss-80482306",
      "slug": "ss-80482306",
      "nameEn": "メイドセレス",
      "nameOriginal": "メイドセレス",
      "styleOrTitle": "SSR Sun サポーター (メイドセレス)",
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
          "name": "Stellar Burst: メイドセレス",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Sun Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "サポーター",
            "Toughness Break"
          ],
          "exactDescription": "全体回復に優れるサポーター 全体回復2種にそのうち特殊スキルは追加発動可能"
        },
        {
          "name": "Tactical Art: サポーター",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Supporter (Buffer)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Supporter (Buffer)",
            "Action Speed"
          ],
          "exactDescription": "└リジェネ付与で自身のターン以外でも回復に貢献"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "全体回復に優れるサポーター"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "全体回復2種にそのうち特殊スキルは追加発動可能"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└リジェネ付与で自身のターン以外でも回復に貢献"
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
      "summaryVerdict": "全体回復に優れるサポーター 全体回復2種にそのうち特殊スキルは追加発動可能",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/80482306).",
      "sourceUrl": "https://appmedia.jp/starsavior/80482306"
    },
    {
      "externalId": "appmedia-ss-80331829",
      "slug": "ss-80331829",
      "nameEn": "クリステル",
      "nameOriginal": "クリステル",
      "styleOrTitle": "SSR Sun レンジャー (クリステル)",
      "rarity": "SSR",
      "role": "Ranger (Sub-DPS)",
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
          "name": "Stellar Burst: クリステル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Sun Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "レンジャー",
            "Toughness Break"
          ],
          "exactDescription": "複数の行動上昇と軽めのCTで手数による高火力発揮 味方の特殊・究極で点火増加＆点火最大でトリガー発動"
        },
        {
          "name": "Tactical Art: レンジャー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Ranger (Sub-DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Sub-DPS)",
            "Action Speed"
          ],
          "exactDescription": "太陽味方への貴重な点火付与サポート"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "複数の行動上昇と軽めのCTで手数による高火力発揮"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "味方の特殊・究極で点火増加＆点火最大でトリガー発動"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "太陽味方への貴重な点火付与サポート"
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
      "summaryVerdict": "複数の行動上昇と軽めのCTで手数による高火力発揮 味方の特殊・究極で点火増加＆点火最大でトリガー発動",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/80331829).",
      "sourceUrl": "https://appmedia.jp/starsavior/80331829"
    },
    {
      "externalId": "appmedia-ss-80022517",
      "slug": "ss-80022517",
      "nameEn": "Epindel (花嫁)",
      "nameOriginal": "花嫁エピンデル",
      "styleOrTitle": "SSR Sun キャスター (花嫁エピンデル)",
      "rarity": "SSR",
      "role": "Caster (Debuff / AoE)",
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
          "name": "Stellar Burst: 花嫁エピンデル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Sun Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "キャスター",
            "Toughness Break"
          ],
          "exactDescription": "バリア持ちに150%という超高倍率の与ダメバフ └他にも行動ゲージ減少などバリア持ちに強く出れる"
        },
        {
          "name": "Tactical Art: キャスター",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Caster (Debuff / AoE)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (Debuff / AoE)",
            "Action Speed"
          ],
          "exactDescription": "スキルの倍率も軒並み優秀でシンプルにアタッカーとして強力"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "バリア持ちに150%という超高倍率の与ダメバフ"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└他にも行動ゲージ減少などバリア持ちに強く出れる"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "スキルの倍率も軒並み優秀でシンプルにアタッカーとして強力"
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
      "summaryVerdict": "バリア持ちに150%という超高倍率の与ダメバフ └他にも行動ゲージ減少などバリア持ちに強く出れる",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/80022517).",
      "sourceUrl": "https://appmedia.jp/starsavior/80022517"
    },
    {
      "externalId": "appmedia-ss-80012791",
      "slug": "ss-80012791",
      "nameEn": "ティリア",
      "nameOriginal": "ティリア",
      "styleOrTitle": "SSR Sun ストライカー (ティリア)",
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
          "name": "Stellar Burst: ティリア",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Sun Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "ストライカー",
            "Toughness Break"
          ],
          "exactDescription": "特殊スキルで火力を出していくアタッカー └防御貫通や与ダメバフで最大火力高め"
        },
        {
          "name": "Tactical Art: ストライカー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Striker (DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "└使用感はロザリアに近い"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "特殊スキルで火力を出していくアタッカー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└防御貫通や与ダメバフで最大火力高め"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└使用感はロザリアに近い"
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
      "summaryVerdict": "特殊スキルで火力を出していくアタッカー └防御貫通や与ダメバフで最大火力高め",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/80012791).",
      "sourceUrl": "https://appmedia.jp/starsavior/80012791"
    },
    {
      "externalId": "appmedia-ss-79924504",
      "slug": "ss-79924504",
      "nameEn": "フェイ",
      "nameOriginal": "フェイ",
      "styleOrTitle": "SSR Moon アサシン (フェイ)",
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
          "name": "Stellar Burst: フェイ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Moon Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "アサシン",
            "Toughness Break"
          ],
          "exactDescription": "常時回避率50%の反撃アタッカー └回避成功でトリガースキルを発動"
        },
        {
          "name": "Tactical Art: アサシン",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Assassin (Burst DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "CT0でトリガースキル連打可能"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "常時回避率50%の反撃アタッカー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└回避成功でトリガースキルを発動"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "CT0でトリガースキル連打可能"
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
      "summaryVerdict": "常時回避率50%の反撃アタッカー └回避成功でトリガースキルを発動",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79924504).",
      "sourceUrl": "https://appmedia.jp/starsavior/79924504"
    },
    {
      "externalId": "appmedia-ss-79864232",
      "slug": "ss-79864232",
      "nameEn": "Rosaria (ロザリア)",
      "nameOriginal": "ロザリア",
      "styleOrTitle": "SSR Chaos レンジャー (ロザリア)",
      "rarity": "SSR",
      "role": "Ranger (Sub-DPS)",
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
          "name": "Stellar Burst: ロザリア",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Chaos Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Chaos",
            "レンジャー",
            "Toughness Break"
          ],
          "exactDescription": "業火スタックで自身の特殊スキルを強化 初めての全体防御デバフを所持する究極スキル"
        },
        {
          "name": "Tactical Art: レンジャー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Ranger (Sub-DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Sub-DPS)",
            "Action Speed"
          ],
          "exactDescription": "└基本スキルバフと速度バフとの複合も優秀"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "業火スタックで自身の特殊スキルを強化"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "初めての全体防御デバフを所持する究極スキル"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└基本スキルバフと速度バフとの複合も優秀"
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
      "summaryVerdict": "業火スタックで自身の特殊スキルを強化 初めての全体防御デバフを所持する究極スキル",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79864232).",
      "sourceUrl": "https://appmedia.jp/starsavior/79864232"
    },
    {
      "externalId": "appmedia-ss-79677914",
      "slug": "ss-79677914",
      "nameEn": "Emily (エミリー)",
      "nameOriginal": "エミリー",
      "styleOrTitle": "SSR Moon ディフェンダー (エミリー)",
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
          "name": "Stellar Burst: エミリー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Moon Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "ディフェンダー",
            "Toughness Break"
          ],
          "exactDescription": "究極連発＆ダメージ上昇で優秀な全体攻撃火力 基本スキルバーストによるバリアで自己耐久が高い"
        },
        {
          "name": "Tactical Art: ディフェンダー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Defender (Tank / Shield)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender (Tank / Shield)",
            "Action Speed"
          ],
          "exactDescription": "└ハード潜在力活用でさらに耐久UP"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "究極連発＆ダメージ上昇で優秀な全体攻撃火力"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "基本スキルバーストによるバリアで自己耐久が高い"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└ハード潜在力活用でさらに耐久UP"
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
      "summaryVerdict": "究極連発＆ダメージ上昇で優秀な全体攻撃火力 基本スキルバーストによるバリアで自己耐久が高い",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79677914).",
      "sourceUrl": "https://appmedia.jp/starsavior/79677914"
    },
    {
      "externalId": "appmedia-ss-79606358",
      "slug": "ss-79606358",
      "nameEn": "Asera (ドレス)",
      "nameOriginal": "ドレスアセラ",
      "styleOrTitle": "SSR Order サポーター (ドレスアセラ)",
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
          "name": "Stellar Burst: ドレスアセラ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Order Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Order",
            "サポーター",
            "Toughness Break"
          ],
          "exactDescription": "全体HP回復とデバフ解除が可能なサポーター 基本スキルでも低HPの味方を回復"
        },
        {
          "name": "Tactical Art: サポーター",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Supporter (Buffer)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Supporter (Buffer)",
            "Action Speed"
          ],
          "exactDescription": "└挟撃率UPにより味方が基本スキルするたび回復も可能"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "全体HP回復とデバフ解除が可能なサポーター"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "基本スキルでも低HPの味方を回復"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└挟撃率UPにより味方が基本スキルするたび回復も可能"
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
      "summaryVerdict": "全体HP回復とデバフ解除が可能なサポーター 基本スキルでも低HPの味方を回復",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79606358).",
      "sourceUrl": "https://appmedia.jp/starsavior/79606358"
    },
    {
      "externalId": "appmedia-ss-79534109",
      "slug": "ss-79534109",
      "nameEn": "Claire (Bunny) (バニークレア)",
      "nameOriginal": "バニークレア",
      "styleOrTitle": "SSR Moon ストライカー (バニークレア)",
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
          "name": "Stellar Burst: バニークレア",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Moon Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "ストライカー",
            "Toughness Break"
          ],
          "exactDescription": "冷却スタックが溜まると特殊スキルによる追加攻撃が可能 特殊スキル会心でまたスタックが3たまるので、スキルを回しやすいのも優秀"
        },
        {
          "name": "Tactical Art: ストライカー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Striker (DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "必殺技は敵のバフが多いほど火力アップ"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "冷却スタックが溜まると特殊スキルによる追加攻撃が可能"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "特殊スキル会心でまたスタックが3たまるので、スキルを回しやすいのも優秀"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "必殺技は敵のバフが多いほど火力アップ"
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
      "summaryVerdict": "冷却スタックが溜まると特殊スキルによる追加攻撃が可能 特殊スキル会心でまたスタックが3たまるので、スキルを回しやすいのも優秀",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79534109).",
      "sourceUrl": "https://appmedia.jp/starsavior/79534109"
    },
    {
      "externalId": "appmedia-ss-79517681",
      "slug": "ss-79517681",
      "nameEn": "ダーナ",
      "nameOriginal": "ダーナ",
      "styleOrTitle": "SSR Star キャスター (ダーナ)",
      "rarity": "SSR",
      "role": "Caster (Debuff / AoE)",
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
          "name": "Stellar Burst: ダーナ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Star Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "キャスター",
            "Toughness Break"
          ],
          "exactDescription": "攻撃バフと会心ダメージの複合バフが非常に強力 └バフの維持も比較的容易で火力を継続させやすい"
        },
        {
          "name": "Tactical Art: キャスター",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Caster (Debuff / AoE)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (Debuff / AoE)",
            "Action Speed"
          ],
          "exactDescription": "自身と味方の2人の攻撃力バフ付与で火力を底上げ"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "攻撃バフと会心ダメージの複合バフが非常に強力"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└バフの維持も比較的容易で火力を継続させやすい"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "自身と味方の2人の攻撃力バフ付与で火力を底上げ"
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
      "summaryVerdict": "攻撃バフと会心ダメージの複合バフが非常に強力 └バフの維持も比較的容易で火力を継続させやすい",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517681).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517681"
    },
    {
      "externalId": "appmedia-ss-79517675",
      "slug": "ss-79517675",
      "nameEn": "エデ",
      "nameOriginal": "エデ",
      "styleOrTitle": "SSR Star ディフェンダー (エデ)",
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
          "name": "Stellar Burst: エデ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Star Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "ディフェンダー",
            "Toughness Break"
          ],
          "exactDescription": "敵の攻撃を一部肩代わりするディフェンダー バリアの耐久値が非常に高くパーティの耐久に大きく貢献"
        },
        {
          "name": "Tactical Art: ディフェンダー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Defender (Tank / Shield)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender (Tank / Shield)",
            "Action Speed"
          ],
          "exactDescription": "└命中率ダウンで被ダメ減少を狙えるのも優秀"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "敵の攻撃を一部肩代わりするディフェンダー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "バリアの耐久値が非常に高くパーティの耐久に大きく貢献"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└命中率ダウンで被ダメ減少を狙えるのも優秀"
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
      "summaryVerdict": "敵の攻撃を一部肩代わりするディフェンダー バリアの耐久値が非常に高くパーティの耐久に大きく貢献",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517675).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517675"
    },
    {
      "externalId": "appmedia-ss-79517738",
      "slug": "ss-79517738",
      "nameEn": "クラリッサ",
      "nameOriginal": "クラリッサ",
      "styleOrTitle": "SSR Star レンジャー (クラリッサ)",
      "rarity": "SSR",
      "role": "Ranger (Sub-DPS)",
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
          "name": "Stellar Burst: クラリッサ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Star Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "レンジャー",
            "Toughness Break"
          ],
          "exactDescription": "跳躍スタックの数に応じて自身に様々なバフを付与 対月属性火力は全体の中でも上位"
        },
        {
          "name": "Tactical Art: レンジャー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Ranger (Sub-DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Sub-DPS)",
            "Action Speed"
          ],
          "exactDescription": "会心時発生効果が多く、会心率が非常に重要"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "跳躍スタックの数に応じて自身に様々なバフを付与"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "対月属性火力は全体の中でも上位"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "会心時発生効果が多く、会心率が非常に重要"
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
      "summaryVerdict": "跳躍スタックの数に応じて自身に様々なバフを付与 対月属性火力は全体の中でも上位",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517738).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517738"
    },
    {
      "externalId": "appmedia-ss-80482402",
      "slug": "ss-80482402",
      "nameEn": "Lydia (メイド)",
      "nameOriginal": "メイドリディア",
      "styleOrTitle": "SSR Moon キャスター (メイドリディア)",
      "rarity": "SSR",
      "role": "Caster (Debuff / AoE)",
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
          "name": "Stellar Burst: メイドリディア",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Moon Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "キャスター",
            "Toughness Break"
          ],
          "exactDescription": "攻撃力の1番高い味方単体に「攻撃バフ15%と会心ダメージ15%」の複合バフを付与 └解除不可かつ永続なのが強力"
        },
        {
          "name": "Tactical Art: キャスター",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Caster (Debuff / AoE)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (Debuff / AoE)",
            "Action Speed"
          ],
          "exactDescription": "↑のバフを付与した味方が行動することで自身に「退勤催促」を付与"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "攻撃力の1番高い味方単体に「攻撃バフ15%と会心ダメージ15%」の複合バフを付与"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└解除不可かつ永続なのが強力"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "↑のバフを付与した味方が行動することで自身に「退勤催促」を付与"
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
      "summaryVerdict": "攻撃力の1番高い味方単体に「攻撃バフ15%と会心ダメージ15%」の複合バフを付与 └解除不可かつ永続なのが強力",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/80482402).",
      "sourceUrl": "https://appmedia.jp/starsavior/80482402"
    },
    {
      "externalId": "appmedia-ss-80384143",
      "slug": "ss-80384143",
      "nameEn": "グウェン",
      "nameOriginal": "グウェン",
      "styleOrTitle": "SSR Star ストライカー (グウェン)",
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
          "name": "Stellar Burst: グウェン",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Star Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "ストライカー",
            "Toughness Break"
          ],
          "exactDescription": "固有スタック5消費で特殊スキルを追加発動 固有スタックは味方の攻撃時に1ずつ貯まり、最大10スタックまで貯まる"
        },
        {
          "name": "Tactical Art: ストライカー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Striker (DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "└特殊スキルでの攻撃時は1追加で合計2貯まる"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "固有スタック5消費で特殊スキルを追加発動"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "固有スタックは味方の攻撃時に1ずつ貯まり、最大10スタックまで貯まる"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└特殊スキルでの攻撃時は1追加で合計2貯まる"
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
      "summaryVerdict": "固有スタック5消費で特殊スキルを追加発動 固有スタックは味方の攻撃時に1ずつ貯まり、最大10スタックまで貯まる",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/80384143).",
      "sourceUrl": "https://appmedia.jp/starsavior/80384143"
    },
    {
      "externalId": "appmedia-ss-80218489",
      "slug": "ss-80218489",
      "nameEn": "Luna (水着)",
      "nameOriginal": "水着ルナ",
      "styleOrTitle": "SSR Sun ディフェンダー (水着ルナ)",
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
          "name": "Stellar Burst: 水着ルナ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Sun Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "ディフェンダー",
            "Toughness Break"
          ],
          "exactDescription": "会心ダメージから味方を守るディフェンダー 会心ダメージ耐性50%を全体付与で実質的な会心無効"
        },
        {
          "name": "Tactical Art: ディフェンダー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Defender (Tank / Shield)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender (Tank / Shield)",
            "Action Speed"
          ],
          "exactDescription": "└付与手段が戦闘開始時のみなので、戦闘が長引いてしまうと苦しい"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "会心ダメージから味方を守るディフェンダー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "会心ダメージ耐性50%を全体付与で実質的な会心無効"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└付与手段が戦闘開始時のみなので、戦闘が長引いてしまうと苦しい"
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
      "summaryVerdict": "会心ダメージから味方を守るディフェンダー 会心ダメージ耐性50%を全体付与で実質的な会心無効",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/80218489).",
      "sourceUrl": "https://appmedia.jp/starsavior/80218489"
    },
    {
      "externalId": "appmedia-ss-80128024",
      "slug": "ss-80128024",
      "nameEn": "セレス",
      "nameOriginal": "セレス",
      "styleOrTitle": "SSR Moon ストライカー (セレス)",
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
          "name": "Stellar Burst: セレス",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Moon Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "ストライカー",
            "Toughness Break"
          ],
          "exactDescription": "行動ゲージ＆速度増減で手数差を作れるアタッカー 全体強化解除＆先制防御率低下、行動阻害でPvP妨害性能が高い└全体強化解除はPvP以外の一部ステージでも有用"
        },
        {
          "name": "Tactical Art: ストライカー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Striker (DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "特殊→究極の連撃による速攻力が特にPvPで強力"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "行動ゲージ＆速度増減で手数差を作れるアタッカー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "全体強化解除＆先制防御率低下、行動阻害でPvP妨害性能が高い└全体強化解除はPvP以外の一部ステージでも有用"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "特殊→究極の連撃による速攻力が特にPvPで強力"
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
      "summaryVerdict": "行動ゲージ＆速度増減で手数差を作れるアタッカー 全体強化解除＆先制防御率低下、行動阻害でPvP妨害性能が高い└全体強化解除はPvP以外の一部ステージでも有用",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/80128024).",
      "sourceUrl": "https://appmedia.jp/starsavior/80128024"
    },
    {
      "externalId": "appmedia-ss-80127403",
      "slug": "ss-80127403",
      "nameEn": "カネリア",
      "nameOriginal": "カネリア",
      "styleOrTitle": "SSR Chaos キャスター (カネリア)",
      "rarity": "SSR",
      "role": "Caster (Debuff / AoE)",
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
          "name": "Stellar Burst: カネリア",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Chaos Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Chaos",
            "キャスター",
            "Toughness Break"
          ],
          "exactDescription": "不死身で場持ちが良い混沌キャスター └自身のターンが来るまで倒れない"
        },
        {
          "name": "Tactical Art: キャスター",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Caster (Debuff / AoE)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (Debuff / AoE)",
            "Action Speed"
          ],
          "exactDescription": "不死身発動でCTリセット+固有バフ付与で次ターンに高い力を叩き込む"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "不死身で場持ちが良い混沌キャスター"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└自身のターンが来るまで倒れない"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "不死身発動でCTリセット+固有バフ付与で次ターンに高い力を叩き込む"
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
      "summaryVerdict": "不死身で場持ちが良い混沌キャスター └自身のターンが来るまで倒れない",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/80127403).",
      "sourceUrl": "https://appmedia.jp/starsavior/80127403"
    },
    {
      "externalId": "appmedia-ss-79924501",
      "slug": "ss-79924501",
      "nameEn": "リン",
      "nameOriginal": "リン",
      "styleOrTitle": "SSR Star ストライカー (リン)",
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
          "name": "Stellar Burst: リン",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Star Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "ストライカー",
            "Toughness Break"
          ],
          "exactDescription": "スキルに使用順でスキル効果が変化する変則アタッカー 究極→特殊で星属性サポーターとしての活躍"
        },
        {
          "name": "Tactical Art: ストライカー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Striker (DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "└跳躍スタック×3、会心ダメバフを星属性全体に付与"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "スキルに使用順でスキル効果が変化する変則アタッカー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "究極→特殊で星属性サポーターとしての活躍"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└跳躍スタック×3、会心ダメバフを星属性全体に付与"
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
      "summaryVerdict": "スキルに使用順でスキル効果が変化する変則アタッカー 究極→特殊で星属性サポーターとしての活躍",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79924501).",
      "sourceUrl": "https://appmedia.jp/starsavior/79924501"
    },
    {
      "externalId": "appmedia-ss-79807109",
      "slug": "ss-79807109",
      "nameEn": "Roberta (ロベルタ)",
      "nameOriginal": "ロベルタ",
      "styleOrTitle": "SSR Star ストライカー (ロベルタ)",
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
          "name": "Stellar Burst: ロベルタ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Star Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "ストライカー",
            "Toughness Break"
          ],
          "exactDescription": "攻撃時に会心率50%バフ └ほぼ無条件でこのバフ量は破格"
        },
        {
          "name": "Tactical Art: ストライカー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Striker (DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "全てのスキルで行動ゲージ増加を所持しており、手数が非常に多い"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "攻撃時に会心率50%バフ"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└ほぼ無条件でこのバフ量は破格"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "全てのスキルで行動ゲージ増加を所持しており、手数が非常に多い"
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
      "summaryVerdict": "攻撃時に会心率50%バフ └ほぼ無条件でこのバフ量は破格",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79807109).",
      "sourceUrl": "https://appmedia.jp/starsavior/79807109"
    },
    {
      "externalId": "appmedia-ss-79766294",
      "slug": "ss-79766294",
      "nameEn": "Frey (Bunny Girl) (バニーフレイ)",
      "nameOriginal": "バニーフレイ",
      "styleOrTitle": "SSR Moon キャスター (バニーフレイ)",
      "rarity": "SSR",
      "role": "Caster (Debuff / AoE)",
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
          "name": "Stellar Burst: バニーフレイ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Moon Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "キャスター",
            "Toughness Break"
          ],
          "exactDescription": "全体会心率アップ3ターンが強力 └CT4で使いまわしやすいのも優秀"
        },
        {
          "name": "Tactical Art: キャスター",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Caster (Debuff / AoE)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (Debuff / AoE)",
            "Action Speed"
          ],
          "exactDescription": "ハイローラーが5スタック溜まると基本スキルダメージ100%アップ"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "全体会心率アップ3ターンが強力"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└CT4で使いまわしやすいのも優秀"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "ハイローラーが5スタック溜まると基本スキルダメージ100%アップ"
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
      "summaryVerdict": "全体会心率アップ3ターンが強力 └CT4で使いまわしやすいのも優秀",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79766294).",
      "sourceUrl": "https://appmedia.jp/starsavior/79766294"
    },
    {
      "externalId": "appmedia-ss-79517714",
      "slug": "ss-79517714",
      "nameEn": "キラ",
      "nameOriginal": "キラ",
      "styleOrTitle": "SSR Sun アサシン (キラ)",
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
          "name": "Stellar Burst: キラ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Sun Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "アサシン",
            "Toughness Break"
          ],
          "exactDescription": "潜伏効果を用いて戦うアサシン 潜伏中は敵のタゲにならないので生存力が高い"
        },
        {
          "name": "Tactical Art: アサシン",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Assassin (Burst DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "└前衛配置で攻撃をディフェンダーに集中させるやり方も"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "潜伏効果を用いて戦うアサシン"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "潜伏中は敵のタゲにならないので生存力が高い"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└前衛配置で攻撃をディフェンダーに集中させるやり方も"
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
      "summaryVerdict": "潜伏効果を用いて戦うアサシン 潜伏中は敵のタゲにならないので生存力が高い",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517714).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517714"
    },
    {
      "externalId": "appmedia-ss-79517705",
      "slug": "ss-79517705",
      "nameEn": "レイシー",
      "nameOriginal": "レイシー",
      "styleOrTitle": "SSR Chaos レンジャー (レイシー)",
      "rarity": "SSR",
      "role": "Ranger (Sub-DPS)",
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
          "name": "Stellar Burst: レイシー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Chaos Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Chaos",
            "レンジャー",
            "Toughness Break"
          ],
          "exactDescription": "高火力かつ自己回復による優秀な単体性能 └素の速度もトップクラス"
        },
        {
          "name": "Tactical Art: レンジャー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Ranger (Sub-DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Sub-DPS)",
            "Action Speed"
          ],
          "exactDescription": "絡み合う夢を付与した敵に攻撃を受けると自身のHPを回復"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "高火力かつ自己回復による優秀な単体性能"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└素の速度もトップクラス"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "絡み合う夢を付与した敵に攻撃を受けると自身のHPを回復"
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
      "summaryVerdict": "高火力かつ自己回復による優秀な単体性能 └素の速度もトップクラス",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517705).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517705"
    },
    {
      "externalId": "appmedia-ss-79517690",
      "slug": "ss-79517690",
      "nameEn": "Lugh (ルー)",
      "nameOriginal": "ルー",
      "styleOrTitle": "SSR Moon レンジャー (ルー)",
      "rarity": "SSR",
      "role": "Ranger (Sub-DPS)",
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
          "name": "Stellar Burst: ルー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Moon Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "レンジャー",
            "Toughness Break"
          ],
          "exactDescription": "固有バフと強化基本スキルを組み合わせて戦うキャラ 究極スキルと味方の非攻撃スキル使用時に雪中花を獲得"
        },
        {
          "name": "Tactical Art: レンジャー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Ranger (Sub-DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Sub-DPS)",
            "Action Speed"
          ],
          "exactDescription": "雪中花を所持した状態で特殊スキル使用で急々如律令を獲得"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "固有バフと強化基本スキルを組み合わせて戦うキャラ"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "究極スキルと味方の非攻撃スキル使用時に雪中花を獲得"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "雪中花を所持した状態で特殊スキル使用で急々如律令を獲得"
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
      "summaryVerdict": "固有バフと強化基本スキルを組み合わせて戦うキャラ 究極スキルと味方の非攻撃スキル使用時に雪中花を獲得",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517690).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517690"
    },
    {
      "externalId": "appmedia-ss-79517678",
      "slug": "ss-79517678",
      "nameEn": "セルパン",
      "nameOriginal": "セルパン",
      "styleOrTitle": "SSR Sun サポーター (セルパン)",
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
          "name": "Stellar Burst: セルパン",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Sun Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "サポーター",
            "Toughness Break"
          ],
          "exactDescription": "究極スキルで自身と味方1体にスキルダメージ無効を付与 └対象は指定できないので注意"
        },
        {
          "name": "Tactical Art: サポーター",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Supporter (Buffer)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Supporter (Buffer)",
            "Action Speed"
          ],
          "exactDescription": "全体回復×2持ちで太陽属性パーティのサポーターとしての採用が考えられる"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "究極スキルで自身と味方1体にスキルダメージ無効を付与"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└対象は指定できないので注意"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "全体回復×2持ちで太陽属性パーティのサポーターとしての採用が考えられる"
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
      "summaryVerdict": "究極スキルで自身と味方1体にスキルダメージ無効を付与 └対象は指定できないので注意",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517678).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517678"
    },
    {
      "externalId": "appmedia-ss-79517669",
      "slug": "ss-79517669",
      "nameEn": "Seira (セイラ)",
      "nameOriginal": "セイラ",
      "styleOrTitle": "SSR Order ストライカー (セイラ)",
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
          "name": "Stellar Burst: セイラ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Order Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Order",
            "ストライカー",
            "Toughness Break"
          ],
          "exactDescription": "味方単体の攻撃力や行動ゲージを増加できるバッファー └攻撃バフは最大50%"
        },
        {
          "name": "Tactical Art: ストライカー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Striker (DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "敵の速度低下で間接的に味方の行動を早めることも可能"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "味方単体の攻撃力や行動ゲージを増加できるバッファー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└攻撃バフは最大50%"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "敵の速度低下で間接的に味方の行動を早めることも可能"
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
      "summaryVerdict": "味方単体の攻撃力や行動ゲージを増加できるバッファー └攻撃バフは最大50%",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517669).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517669"
    },
    {
      "externalId": "appmedia-ss-79517660",
      "slug": "ss-79517660",
      "nameEn": "シャルル",
      "nameOriginal": "シャルル",
      "styleOrTitle": "SSR Sun ストライカー (シャルル)",
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
          "name": "Stellar Burst: シャルル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Sun Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "ストライカー",
            "Toughness Break"
          ],
          "exactDescription": "自身か味方単体に会心率と攻撃バフを付与可能 会心率バフが会心アタッカーと高相性"
        },
        {
          "name": "Tactical Art: ストライカー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Striker (DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "会心率が重要な編成で幅広く採用"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "自身か味方単体に会心率と攻撃バフを付与可能"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "会心率バフが会心アタッカーと高相性"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "会心率が重要な編成で幅広く採用"
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
      "summaryVerdict": "自身か味方単体に会心率と攻撃バフを付与可能 会心率バフが会心アタッカーと高相性",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517660).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517660"
    },
    {
      "externalId": "appmedia-ss-79517657",
      "slug": "ss-79517657",
      "nameEn": "Luna (ルナ)",
      "nameOriginal": "ルナ",
      "styleOrTitle": "SSR Order キャスター (ルナ)",
      "rarity": "SSR",
      "role": "Caster (Debuff / AoE)",
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
          "name": "Stellar Burst: ルナ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Order Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Order",
            "キャスター",
            "Toughness Break"
          ],
          "exactDescription": "全体攻撃の被ダメ増加を付与できるデバッファー 基本スキルで全体攻撃が可能"
        },
        {
          "name": "Tactical Art: キャスター",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Caster (Debuff / AoE)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (Debuff / AoE)",
            "Action Speed"
          ],
          "exactDescription": "全体攻撃が重要なるステージではほぼ必須級の性能となる"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "全体攻撃の被ダメ増加を付与できるデバッファー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "基本スキルで全体攻撃が可能"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "全体攻撃が重要なるステージではほぼ必須級の性能となる"
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
      "summaryVerdict": "全体攻撃の被ダメ増加を付与できるデバッファー 基本スキルで全体攻撃が可能",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517657).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517657"
    },
    {
      "externalId": "appmedia-ss-79517654",
      "slug": "ss-79517654",
      "nameEn": "Smile (スマイル)",
      "nameOriginal": "スマイル",
      "styleOrTitle": "SSR Star レンジャー (スマイル)",
      "rarity": "SSR",
      "role": "Ranger (Sub-DPS)",
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
          "name": "Stellar Burst: スマイル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Star Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "レンジャー",
            "Toughness Break"
          ],
          "exactDescription": "特殊なトリガースキルを持つデバッファー 条件を満たせば1Tで2回行動のような動きが可能になる"
        },
        {
          "name": "Tactical Art: レンジャー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Ranger (Sub-DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Sub-DPS)",
            "Action Speed"
          ],
          "exactDescription": "防御デバフ付与による火力サポートが優秀"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "特殊なトリガースキルを持つデバッファー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "条件を満たせば1Tで2回行動のような動きが可能になる"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "防御デバフ付与による火力サポートが優秀"
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
      "summaryVerdict": "特殊なトリガースキルを持つデバッファー 条件を満たせば1Tで2回行動のような動きが可能になる",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517654).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517654"
    },
    {
      "externalId": "appmedia-ss-79517720",
      "slug": "ss-79517720",
      "nameEn": "Anna (アンナ)",
      "nameOriginal": "アンナ",
      "styleOrTitle": "SSR Sun ディフェンダー (アンナ)",
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
          "name": "Stellar Burst: アンナ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Sun Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "ディフェンダー",
            "Toughness Break"
          ],
          "exactDescription": "自身のHPを回復できる耐久特化のディフェンダー 攻撃系のスキルが全て攻撃力依存なので、火力を出すのは難しい"
        },
        {
          "name": "Tactical Art: ディフェンダー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Defender (Tank / Shield)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender (Tank / Shield)",
            "Action Speed"
          ],
          "exactDescription": "└ビルドを火力に寄せるのであれば別"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "自身のHPを回復できる耐久特化のディフェンダー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "攻撃系のスキルが全て攻撃力依存なので、火力を出すのは難しい"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└ビルドを火力に寄せるのであれば別"
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
      "summaryVerdict": "自身のHPを回復できる耐久特化のディフェンダー 攻撃系のスキルが全て攻撃力依存なので、火力を出すのは難しい",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517720).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517720"
    },
    {
      "externalId": "appmedia-ss-79855349",
      "slug": "ss-79855349",
      "nameEn": "ヒルデ",
      "nameOriginal": "ヒルデ",
      "styleOrTitle": "SSR Sun ディフェンダー (ヒルデ)",
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
          "name": "Stellar Burst: ヒルデ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Sun Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "ディフェンダー",
            "Toughness Break"
          ],
          "exactDescription": "先制防御を可能とするディフェンダー └自身がタイトルとなるアルカナ併用で最大確率50%に"
        },
        {
          "name": "Tactical Art: ディフェンダー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Defender (Tank / Shield)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender (Tank / Shield)",
            "Action Speed"
          ],
          "exactDescription": "重複する防御バフ、バリア付与手段複数で耐久力がかなり高い"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "先制防御を可能とするディフェンダー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└自身がタイトルとなるアルカナ併用で最大確率50%に"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "重複する防御バフ、バリア付与手段複数で耐久力がかなり高い"
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
      "summaryVerdict": "先制防御を可能とするディフェンダー └自身がタイトルとなるアルカナ併用で最大確率50%に",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79855349).",
      "sourceUrl": "https://appmedia.jp/starsavior/79855349"
    },
    {
      "externalId": "appmedia-ss-79855337",
      "slug": "ss-79855337",
      "nameEn": "ヤナギ・ミナ",
      "nameOriginal": "ヤナギ・ミナ",
      "styleOrTitle": "SSR Star レンジャー (ヤナギ・ミナ)",
      "rarity": "SSR",
      "role": "Ranger (Sub-DPS)",
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
          "name": "Stellar Burst: ヤナギ・ミナ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Star Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "レンジャー",
            "Toughness Break"
          ],
          "exactDescription": "出血を多数付与するアタッカー └効果命中を盛る必要はあり"
        },
        {
          "name": "Tactical Art: レンジャー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Ranger (Sub-DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Sub-DPS)",
            "Action Speed"
          ],
          "exactDescription": "攻撃バフや会心率バフ持ちで自身の火力は高め"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "出血を多数付与するアタッカー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└効果命中を盛る必要はあり"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "攻撃バフや会心率バフ持ちで自身の火力は高め"
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
      "summaryVerdict": "出血を多数付与するアタッカー └効果命中を盛る必要はあり",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79855337).",
      "sourceUrl": "https://appmedia.jp/starsavior/79855337"
    },
    {
      "externalId": "appmedia-ss-79644743",
      "slug": "ss-79644743",
      "nameEn": "Belle (・リース)",
      "nameOriginal": "ベル・リース",
      "styleOrTitle": "SSR Star レンジャー (ベル・リース)",
      "rarity": "SSR",
      "role": "Ranger (Sub-DPS)",
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
          "name": "Stellar Burst: ベル・リース",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Star Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "レンジャー",
            "Toughness Break"
          ],
          "exactDescription": "命中低下や沈黙・強化解除による妨害を軸にしたアタッカー 敵味方死亡時の攻撃上昇＆行動ゲージ上昇で対複数や複数WAVEで強い"
        },
        {
          "name": "Tactical Art: レンジャー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Ranger (Sub-DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Sub-DPS)",
            "Action Speed"
          ],
          "exactDescription": "沈黙＆強化解除がPvPのメタとして有用"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "命中低下や沈黙・強化解除による妨害を軸にしたアタッカー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "敵味方死亡時の攻撃上昇＆行動ゲージ上昇で対複数や複数WAVEで強い"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "沈黙＆強化解除がPvPのメタとして有用"
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
      "summaryVerdict": "命中低下や沈黙・強化解除による妨害を軸にしたアタッカー 敵味方死亡時の攻撃上昇＆行動ゲージ上昇で対複数や複数WAVEで強い",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79644743).",
      "sourceUrl": "https://appmedia.jp/starsavior/79644743"
    },
    {
      "externalId": "appmedia-ss-79534106",
      "slug": "ss-79534106",
      "nameEn": "Scarlett (Bunny) (バニースカーレット)",
      "nameOriginal": "バニースカーレット",
      "styleOrTitle": "SSR Sun レンジャー (バニースカーレット)",
      "rarity": "SSR",
      "role": "Ranger (Sub-DPS)",
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
          "name": "Stellar Burst: バニースカーレット",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Sun Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "レンジャー",
            "Toughness Break"
          ],
          "exactDescription": "セブンボールの数に応じて様々な恩恵を獲得 セブンボールが3個あると自身の究極スキルのクールタイムがリセット"
        },
        {
          "name": "Tactical Art: レンジャー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Ranger (Sub-DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Sub-DPS)",
            "Action Speed"
          ],
          "exactDescription": "└運が良ければ究極スキルを連続して使用可能"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "セブンボールの数に応じて様々な恩恵を獲得"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "セブンボールが3個あると自身の究極スキルのクールタイムがリセット"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└運が良ければ究極スキルを連続して使用可能"
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
      "summaryVerdict": "セブンボールの数に応じて様々な恩恵を獲得 セブンボールが3個あると自身の究極スキルのクールタイムがリセット",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79534106).",
      "sourceUrl": "https://appmedia.jp/starsavior/79534106"
    },
    {
      "externalId": "appmedia-ss-79517708",
      "slug": "ss-79517708",
      "nameEn": "Tanya (ターニャ)",
      "nameOriginal": "ターニャ",
      "styleOrTitle": "SSR Star ストライカー (ターニャ)",
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
          "name": "Stellar Burst: ターニャ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Star Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "ストライカー",
            "Toughness Break"
          ],
          "exactDescription": "味方全体に会心率バフを付与できるストライカー 自身には行動ゲージ増加や攻撃バフを所持"
        },
        {
          "name": "Tactical Art: ストライカー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Striker (DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "強靭度ブレイクで跳躍スタックと全体の行動ゲージ増加"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "味方全体に会心率バフを付与できるストライカー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "自身には行動ゲージ増加や攻撃バフを所持"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "強靭度ブレイクで跳躍スタックと全体の行動ゲージ増加"
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
      "summaryVerdict": "味方全体に会心率バフを付与できるストライカー 自身には行動ゲージ増加や攻撃バフを所持",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517708).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517708"
    },
    {
      "externalId": "appmedia-ss-79517696",
      "slug": "ss-79517696",
      "nameEn": "Lydia (リディア)",
      "nameOriginal": "リディア",
      "styleOrTitle": "SSR Chaos レンジャー (リディア)",
      "rarity": "SSR",
      "role": "Ranger (Sub-DPS)",
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
          "name": "Stellar Burst: リディア",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Chaos Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Chaos",
            "レンジャー",
            "Toughness Break"
          ],
          "exactDescription": "行動ゲージ増加&減少持ちで自身の手数多め └速度デバフがあるのも優秀"
        },
        {
          "name": "Tactical Art: レンジャー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Ranger (Sub-DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Sub-DPS)",
            "Action Speed"
          ],
          "exactDescription": "効果命中バフ&効果耐性デバフでデバフの付与も容易"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "行動ゲージ増加&減少持ちで自身の手数多め"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└速度デバフがあるのも優秀"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "効果命中バフ&効果耐性デバフでデバフの付与も容易"
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
      "summaryVerdict": "行動ゲージ増加&減少持ちで自身の手数多め └速度デバフがあるのも優秀",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517696).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517696"
    },
    {
      "externalId": "appmedia-ss-79517672",
      "slug": "ss-79517672",
      "nameEn": "Trish (トリッシュ)",
      "nameOriginal": "トリッシュ",
      "styleOrTitle": "SSR Star アサシン (トリッシュ)",
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
          "name": "Stellar Burst: トリッシュ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Star Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "アサシン",
            "Toughness Break"
          ],
          "exactDescription": "特殊スキルのループで常時会心率バフできるアタッカー 究極スキルで敵を倒すとCTリセット"
        },
        {
          "name": "Tactical Art: アサシン",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Assassin (Burst DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "究極スキルの防御貫通50%で瞬間火力にも期待"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "特殊スキルのループで常時会心率バフできるアタッカー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "究極スキルで敵を倒すとCTリセット"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "究極スキルの防御貫通50%で瞬間火力にも期待"
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
      "summaryVerdict": "特殊スキルのループで常時会心率バフできるアタッカー 究極スキルで敵を倒すとCTリセット",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517672).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517672"
    },
    {
      "externalId": "appmedia-ss-79517666",
      "slug": "ss-79517666",
      "nameEn": "Frey (フレイ)",
      "nameOriginal": "フレイ",
      "styleOrTitle": "SSR Star サポーター (フレイ)",
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
          "name": "Stellar Burst: フレイ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Star Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "サポーター",
            "Toughness Break"
          ],
          "exactDescription": "味方の回復や行動ゲージ増加が可能なサポート特化のサポーター └火力は他で補う必要あり"
        },
        {
          "name": "Tactical Art: サポーター",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Supporter (Buffer)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Supporter (Buffer)",
            "Action Speed"
          ],
          "exactDescription": "星属性に対しては回復量が上がるので星属性パーティのサポーターとして採用したい"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "味方の回復や行動ゲージ増加が可能なサポート特化のサポーター"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└火力は他で補う必要あり"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "星属性に対しては回復量が上がるので星属性パーティのサポーターとして採用したい"
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
      "summaryVerdict": "味方の回復や行動ゲージ増加が可能なサポート特化のサポーター └火力は他で補う必要あり",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517666).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517666"
    },
    {
      "externalId": "appmedia-ss-79517735",
      "slug": "ss-79517735",
      "nameEn": "Scarlett (スカーレット)",
      "nameOriginal": "スカーレット",
      "styleOrTitle": "SSR Sun ストライカー (スカーレット)",
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
          "name": "Stellar Burst: スカーレット",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Sun Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "ストライカー",
            "Toughness Break"
          ],
          "exactDescription": "敵の燃焼の付与数に応じて火力が上がる特殊スキルが強力 └究極スキルで最大3つ付与可能で自身で完結できるのは優秀"
        },
        {
          "name": "Tactical Art: ストライカー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Striker (DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "点火スタック最大時には特殊スキル追加発動でさらに追い打ちをかけることができる"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "敵の燃焼の付与数に応じて火力が上がる特殊スキルが強力"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└究極スキルで最大3つ付与可能で自身で完結できるのは優秀"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "点火スタック最大時には特殊スキル追加発動でさらに追い打ちをかけることができる"
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
      "summaryVerdict": "敵の燃焼の付与数に応じて火力が上がる特殊スキルが強力 └究極スキルで最大3つ付与可能で自身で完結できるのは優秀",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517735).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517735"
    },
    {
      "externalId": "appmedia-ss-79517732",
      "slug": "ss-79517732",
      "nameEn": "Claire (クレア)",
      "nameOriginal": "クレア",
      "styleOrTitle": "SSR Moon アサシン (クレア)",
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
          "name": "Stellar Burst: クレア",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Moon Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "アサシン",
            "Toughness Break"
          ],
          "exactDescription": "防御貫通、潜伏、先制防御無視と幅広いギミックに対応可能 複数の行動ゲージ増加と速度バフで自身の手数も稼げる"
        },
        {
          "name": "Tactical Art: アサシン",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Assassin (Burst DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "└冷却スタックは他からのサポートが欲しい"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "防御貫通、潜伏、先制防御無視と幅広いギミックに対応可能"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "複数の行動ゲージ増加と速度バフで自身の手数も稼げる"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└冷却スタックは他からのサポートが欲しい"
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
      "summaryVerdict": "防御貫通、潜伏、先制防御無視と幅広いギミックに対応可能 複数の行動ゲージ増加と速度バフで自身の手数も稼げる",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517732).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517732"
    },
    {
      "externalId": "appmedia-ss-79517729",
      "slug": "ss-79517729",
      "nameEn": "ナル",
      "nameOriginal": "ナル",
      "styleOrTitle": "SSR Star レンジャー (ナル)",
      "rarity": "SSR",
      "role": "Ranger (Sub-DPS)",
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
          "name": "Stellar Burst: ナル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Star Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "レンジャー",
            "Toughness Break"
          ],
          "exactDescription": "デバフの付与数で自身の火力アップ └自身で付与できるのは2つまで"
        },
        {
          "name": "Tactical Art: レンジャー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Ranger (Sub-DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Sub-DPS)",
            "Action Speed"
          ],
          "exactDescription": "跳躍スタック最大時に基本スキルを追加発動"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "デバフの付与数で自身の火力アップ"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└自身で付与できるのは2つまで"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "跳躍スタック最大時に基本スキルを追加発動"
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
      "summaryVerdict": "デバフの付与数で自身の火力アップ └自身で付与できるのは2つまで",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517729).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517729"
    },
    {
      "externalId": "appmedia-ss-79517726",
      "slug": "ss-79517726",
      "nameEn": "ベラ",
      "nameOriginal": "ベラ",
      "styleOrTitle": "SSR Moon サポーター (ベラ)",
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
          "name": "Stellar Burst: ベラ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Moon Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "サポーター",
            "Toughness Break"
          ],
          "exactDescription": "SR唯一のサポーター 特殊スキルで単体回復+デバフ弱体解除2個、究極スキルで全体回復を所持"
        },
        {
          "name": "Tactical Art: サポーター",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Supporter (Buffer)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Supporter (Buffer)",
            "Action Speed"
          ],
          "exactDescription": "究極スキルのランダム発動効果で味方にバフも付与"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "SR唯一のサポーター"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "特殊スキルで単体回復+デバフ弱体解除2個、究極スキルで全体回復を所持"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "究極スキルのランダム発動効果で味方にバフも付与"
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
      "summaryVerdict": "SR唯一のサポーター 特殊スキルで単体回復+デバフ弱体解除2個、究極スキルで全体回復を所持",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517726).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517726"
    },
    {
      "externalId": "appmedia-ss-79517723",
      "slug": "ss-79517723",
      "nameEn": "マルシル",
      "nameOriginal": "マルシル",
      "styleOrTitle": "SSR Sun アサシン (マルシル)",
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
          "name": "Stellar Burst: マルシル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Sun Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "アサシン",
            "Toughness Break"
          ],
          "exactDescription": "固有バフのナットを集めて火力を出すアタッカー 強靭度ブレイク中だと火力アップ"
        },
        {
          "name": "Tactical Art: アサシン",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Assassin (Burst DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "└ブレイク中に攻撃する必要があるので、ブレイクタイミングには注意したい"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "固有バフのナットを集めて火力を出すアタッカー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "強靭度ブレイク中だと火力アップ"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└ブレイク中に攻撃する必要があるので、ブレイクタイミングには注意したい"
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
      "summaryVerdict": "固有バフのナットを集めて火力を出すアタッカー 強靭度ブレイク中だと火力アップ",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517723).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517723"
    },
    {
      "externalId": "appmedia-ss-79517717",
      "slug": "ss-79517717",
      "nameEn": "Besta (ベスタ)",
      "nameOriginal": "ベスタ",
      "styleOrTitle": "SSR Star ディフェンダー (ベスタ)",
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
          "name": "Stellar Burst: ベスタ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Star Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "ディフェンダー",
            "Toughness Break"
          ],
          "exactDescription": "バリア効果に優れるディフェンダー 全体攻撃被弾で確率で特殊スキル発動"
        },
        {
          "name": "Tactical Art: ディフェンダー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Defender (Tank / Shield)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender (Tank / Shield)",
            "Action Speed"
          ],
          "exactDescription": "└行動ゲージ増加と味方にバリア付与で発動の恩恵が大きい"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "バリア効果に優れるディフェンダー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "全体攻撃被弾で確率で特殊スキル発動"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└行動ゲージ増加と味方にバリア付与で発動の恩恵が大きい"
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
      "summaryVerdict": "バリア効果に優れるディフェンダー 全体攻撃被弾で確率で特殊スキル発動",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517717).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517717"
    },
    {
      "externalId": "appmedia-ss-79517711",
      "slug": "ss-79517711",
      "nameEn": "Lily (リリー)",
      "nameOriginal": "リリー",
      "styleOrTitle": "SSR Moon キャスター (リリー)",
      "rarity": "SSR",
      "role": "Caster (Debuff / AoE)",
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
          "name": "Stellar Burst: リリー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Moon Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "キャスター",
            "Toughness Break"
          ],
          "exactDescription": "味方の耐久補助ができるキャスター 味方にバリア付与と自身に攻撃力と会心率バフの特殊スキル"
        },
        {
          "name": "Tactical Art: キャスター",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Caster (Debuff / AoE)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (Debuff / AoE)",
            "Action Speed"
          ],
          "exactDescription": "└会心率バフは固有バフなので、汎用会心率バフと重なるのが優秀"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "味方の耐久補助ができるキャスター"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "味方にバリア付与と自身に攻撃力と会心率バフの特殊スキル"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "└会心率バフは固有バフなので、汎用会心率バフと重なるのが優秀"
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
      "summaryVerdict": "味方の耐久補助ができるキャスター 味方にバリア付与と自身に攻撃力と会心率バフの特殊スキル",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517711).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517711"
    },
    {
      "externalId": "appmedia-ss-79517699",
      "slug": "ss-79517699",
      "nameEn": "Harley (ハーレー)",
      "nameOriginal": "ハーレー",
      "styleOrTitle": "SSR Sun ディフェンダー (ハーレー)",
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
          "name": "Stellar Burst: ハーレー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Sun Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "ディフェンダー",
            "Toughness Break"
          ],
          "exactDescription": "味方全体に速度バフを付与するディフェンダー └全体防御バフで耐久力支援も可能"
        },
        {
          "name": "Tactical Art: ディフェンダー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Defender (Tank / Shield)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender (Tank / Shield)",
            "Action Speed"
          ],
          "exactDescription": "条件付きだが暴走モードで自身の速度を大幅に増加"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "味方全体に速度バフを付与するディフェンダー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└全体防御バフで耐久力支援も可能"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "条件付きだが暴走モードで自身の速度を大幅に増加"
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
      "summaryVerdict": "味方全体に速度バフを付与するディフェンダー └全体防御バフで耐久力支援も可能",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517699).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517699"
    },
    {
      "externalId": "appmedia-ss-79517693",
      "slug": "ss-79517693",
      "nameEn": "Epindel (エピンデル)",
      "nameOriginal": "エピンデル",
      "styleOrTitle": "SSR Moon アサシン (エピンデル)",
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
          "name": "Stellar Burst: エピンデル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Moon Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "アサシン",
            "Toughness Break"
          ],
          "exactDescription": "基本スキルをメインで使用するアサシン └冷却のスタック数が最大で自身の基本スキルダメージアップ"
        },
        {
          "name": "Tactical Art: アサシン",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Assassin (Burst DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Assassin (Burst DPS)",
            "Action Speed"
          ],
          "exactDescription": "免疫ループでデバフにも強い"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "基本スキルをメインで使用するアサシン"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└冷却のスタック数が最大で自身の基本スキルダメージアップ"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "免疫ループでデバフにも強い"
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
      "summaryVerdict": "基本スキルをメインで使用するアサシン └冷却のスタック数が最大で自身の基本スキルダメージアップ",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517693).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517693"
    },
    {
      "externalId": "appmedia-ss-79517687",
      "slug": "ss-79517687",
      "nameEn": "Elisa (エリサ)",
      "nameOriginal": "エリサ",
      "styleOrTitle": "SSR Chaos サポーター (エリサ)",
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
          "name": "Stellar Burst: エリサ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Chaos Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Chaos",
            "サポーター",
            "Toughness Break"
          ],
          "exactDescription": "味方を蘇生できる唯一無二のサポーター 単体に効果耐性と被ダメ減少付与で耐久に貢献"
        },
        {
          "name": "Tactical Art: サポーター",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Supporter (Buffer)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Supporter (Buffer)",
            "Action Speed"
          ],
          "exactDescription": "PvEではなくPvPで特に強力"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "味方を蘇生できる唯一無二のサポーター"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "単体に効果耐性と被ダメ減少付与で耐久に貢献"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "PvEではなくPvPで特に強力"
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
      "summaryVerdict": "味方を蘇生できる唯一無二のサポーター 単体に効果耐性と被ダメ減少付与で耐久に貢献",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517687).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517687"
    },
    {
      "externalId": "appmedia-ss-79517684",
      "slug": "ss-79517684",
      "nameEn": "Muriel (ミュリエル)",
      "nameOriginal": "ミュリエル",
      "styleOrTitle": "SSR Sun キャスター (ミュリエル)",
      "rarity": "SSR",
      "role": "Caster (Debuff / AoE)",
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
          "name": "Stellar Burst: ミュリエル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Sun Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "キャスター",
            "Toughness Break"
          ],
          "exactDescription": "デバフの数に応じて火力が増加するキャスター 敵の弱体効果を延長するユニーク効果持ち"
        },
        {
          "name": "Tactical Art: キャスター",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Caster (Debuff / AoE)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (Debuff / AoE)",
            "Action Speed"
          ],
          "exactDescription": "レイシーなどのデバフ持ちと相性⚪︎"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "デバフの数に応じて火力が増加するキャスター"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "敵の弱体効果を延長するユニーク効果持ち"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "レイシーなどのデバフ持ちと相性⚪︎"
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
      "summaryVerdict": "デバフの数に応じて火力が増加するキャスター 敵の弱体効果を延長するユニーク効果持ち",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517684).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517684"
    },
    {
      "externalId": "appmedia-ss-79517651",
      "slug": "ss-79517651",
      "nameEn": "Asera (アセラ)",
      "nameOriginal": "アセラ",
      "styleOrTitle": "SSR Moon ストライカー (アセラ)",
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
          "name": "Stellar Burst: アセラ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Moon Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "ストライカー",
            "Toughness Break"
          ],
          "exactDescription": "会心アタッカーとして大量のバフを自身で用意できる └会心ダメージ60%+与ダメージバフ30%"
        },
        {
          "name": "Tactical Art: ストライカー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Striker (DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Striker (DPS)",
            "Action Speed"
          ],
          "exactDescription": "無条件の会心率30%で上記効果も活かしやすい"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "会心アタッカーとして大量のバフを自身で用意できる"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└会心ダメージ60%+与ダメージバフ30%"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "無条件の会心率30%で上記効果も活かしやすい"
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
      "summaryVerdict": "会心アタッカーとして大量のバフを自身で用意できる └会心ダメージ60%+与ダメージバフ30%",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517651).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517651"
    },
    {
      "externalId": "appmedia-ss-79576028",
      "slug": "ss-79576028",
      "nameEn": "オメガ",
      "nameOriginal": "オメガ",
      "styleOrTitle": "SSR Star キャスター (オメガ)",
      "rarity": "SSR",
      "role": "Caster (Debuff / AoE)",
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
          "name": "Stellar Burst: オメガ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Star Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Star",
            "キャスター",
            "Toughness Break"
          ],
          "exactDescription": "パワーアップスターのスタックに応じてスキルが変化するキャスター 星属性キャラは攻撃するとスタックが増加"
        },
        {
          "name": "Tactical Art: キャスター",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Caster (Debuff / AoE)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Caster (Debuff / AoE)",
            "Action Speed"
          ],
          "exactDescription": "星属性キャラを複数編成する必要があり編成幅は狭い"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "パワーアップスターのスタックに応じてスキルが変化するキャスター"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "星属性キャラは攻撃するとスタックが増加"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "星属性キャラを複数編成する必要があり編成幅は狭い"
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
      "summaryVerdict": "パワーアップスターのスタックに応じてスキルが変化するキャスター 星属性キャラは攻撃するとスタックが増加",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79576028).",
      "sourceUrl": "https://appmedia.jp/starsavior/79576028"
    },
    {
      "externalId": "appmedia-ss-79517702",
      "slug": "ss-79517702",
      "nameEn": "Petra (ペトラ)",
      "nameOriginal": "ペトラ",
      "styleOrTitle": "SSR Sun レンジャー (ペトラ)",
      "rarity": "SSR",
      "role": "Ranger (Sub-DPS)",
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
          "name": "Stellar Burst: ペトラ",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Sun Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Sun",
            "レンジャー",
            "Toughness Break"
          ],
          "exactDescription": "防御力ダウンを付与可能 └点火スタック数で火力も上昇"
        },
        {
          "name": "Tactical Art: レンジャー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Ranger (Sub-DPS)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Ranger (Sub-DPS)",
            "Action Speed"
          ],
          "exactDescription": "味方のブレイクでスタックを獲得するので属性相性が重要"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "防御力ダウンを付与可能"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "└点火スタック数で火力も上昇"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "味方のブレイクでスタックを獲得するので属性相性が重要"
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
      "summaryVerdict": "防御力ダウンを付与可能 └点火スタック数で火力も上昇",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517702).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517702"
    },
    {
      "externalId": "appmedia-ss-79517663",
      "slug": "ss-79517663",
      "nameEn": "Carmen (カルメン)",
      "nameOriginal": "カルメン",
      "styleOrTitle": "SSR Moon ディフェンダー (カルメン)",
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
          "name": "Stellar Burst: カルメン",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "100 Nova",
          "multiplierSummary": "Moon Ultimate + Toughness Break",
          "hitCount": 4,
          "buffCategoryTags": [
            "Moon",
            "ディフェンダー",
            "Toughness Break"
          ],
          "exactDescription": "挑発で味方の被ダメを抑えるディフェンダー 持続の長い全体防御バフで、全体攻撃でも耐久が可能"
        },
        {
          "name": "Tactical Art: ディフェンダー",
          "type": "ACTIVE",
          "spOrEnergyCost": "3 Turn CD",
          "multiplierSummary": "Active Skill + Defender (Tank / Shield)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Defender (Tank / Shield)",
            "Action Speed"
          ],
          "exactDescription": "自身のHPに応じてダメージが増加するのでHPを底上げしたい"
        }
      ],
      "passives": [
        {
          "unlockRank": "LB0",
          "name": "Savior Resonance I",
          "effect": "挑発で味方の被ダメを抑えるディフェンダー"
        },
        {
          "unlockRank": "LB1",
          "name": "Savior Resonance II",
          "effect": "持続の長い全体防御バフで、全体攻撃でも耐久が可能"
        },
        {
          "unlockRank": "LB3",
          "name": "Overdrive Core",
          "effect": "自身のHPに応じてダメージが増加するのでHPを底上げしたい"
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
      "summaryVerdict": "挑発で味方の被ダメを抑えるディフェンダー 持続の長い全体防御バフで、全体攻撃でも耐久が可能",
      "longevityNote": "Verified on AppMedia Star Savior Tier List (https://appmedia.jp/starsavior/79517663).",
      "sourceUrl": "https://appmedia.jp/starsavior/79517663"
    }
  ],
  "equipments": [
    {
      "externalId": "appmedia-ss-arcana-80231986",
      "slug": "ss-arcana-80231986",
      "nameEn": "Arcana: 夏の夜の空",
      "category": "SSR Arcana",
      "subType": "体力 / 特殊効果",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/07/190530_zk9ua.webp",
      "tierRank": "B",
      "score": 8,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "体力",
        "BonusStat": "特殊効果",
        "Class": "共用"
      },
      "effectSummary": "ディフェンダー専用の「戦闘開始時2ターンバリア付与」を所持 └戦闘開始時のみなのが痛い",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/80231986"
    },
    {
      "externalId": "appmedia-ss-arcana-79855448",
      "slug": "ss-arcana-79855448",
      "nameEn": "Arcana: 歴戦の傭兵",
      "category": "SSR Arcana",
      "subType": "体力 / 特殊効果",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/202111_kmw0s.webp",
      "tierRank": "B",
      "score": 7.9,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "体力",
        "BonusStat": "特殊効果",
        "Class": "救援者"
      },
      "effectSummary": "救援者補助でヤナギ・ミナをサポート 敵全体に連鎖ダメージなので運用が劇的に変わるものではない",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79855448"
    },
    {
      "externalId": "appmedia-ss-arcana-79717619",
      "slug": "ss-arcana-79717619",
      "nameEn": "Arcana: 不器用な欲望の満たし方",
      "category": "SSR Arcana",
      "subType": "力 / 特殊効果",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/02/185314_wdzh2.webp",
      "tierRank": "B",
      "score": 7.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "特殊効果",
        "Class": "共用"
      },
      "effectSummary": "追加攻撃が可能になるスペシャル潜在力を所持 └アサシン限定、敵の強靭度を削る必要があるなど条件は重め",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79717619"
    },
    {
      "externalId": "appmedia-ss-arcana-79644746",
      "slug": "ss-arcana-79644746",
      "nameEn": "Arcana: 深い哀悼",
      "category": "SSR Arcana",
      "subType": "集中 / 会心率",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/01/200315_snce6.webp",
      "tierRank": "B",
      "score": 7.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "集中",
        "BonusStat": "会心率",
        "Class": "共用"
      },
      "effectSummary": "レンジャーの会心率を上げるスペシャル潜在力を所持 └最大会心率15%アップ可能",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79644746"
    },
    {
      "externalId": "appmedia-ss-arcana-79517789",
      "slug": "ss-arcana-79517789",
      "nameEn": "Arcana: アンダーカバー・コップ",
      "category": "SSR Arcana",
      "subType": "忍耐 / 強靭度",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_OFFICER_POLICE_SSR_01_icon_arcana.webp",
      "tierRank": "B",
      "score": 8,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "忍耐",
        "BonusStat": "強靭度",
        "Class": "共用"
      },
      "effectSummary": "共用補助で強靭度を増やすスペシャル潜在を所持 └基本はディフェンダーと組むのが⚪︎",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517789"
    },
    {
      "externalId": "appmedia-ss-arcana-79517786",
      "slug": "ss-arcana-79517786",
      "nameEn": "Arcana: 満足のいく食事",
      "category": "SSR Arcana",
      "subType": "保護 / 強靭度",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_LANCER_SSR_01_icon_arcana.webp",
      "tierRank": "B",
      "score": 7.9,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "保護",
        "BonusStat": "強靭度",
        "Class": "共用"
      },
      "effectSummary": "ディフェンダーの強靭度が増加するスペシャル潜在力を所持 固有効果の解放に限界突破が必要な点には注意",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517786"
    },
    {
      "externalId": "appmedia-ss-arcana-79517762",
      "slug": "ss-arcana-79517762",
      "nameEn": "Arcana: 天の試練",
      "category": "SSR Arcana",
      "subType": "忍耐 / 防御力",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_SAINTESS_ELF_SSR_01_icon_arcana.webp",
      "tierRank": "B",
      "score": 7.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "忍耐",
        "BonusStat": "防御力",
        "Class": "共用"
      },
      "effectSummary": "忍耐、防御力補助と防御に特化した性能 └現状防御力を優先したいキャラは少ない",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517762"
    },
    {
      "externalId": "appmedia-ss-arcana-79517750",
      "slug": "ss-arcana-79517750",
      "nameEn": "Arcana: 姫、王位に就く",
      "category": "SSR Arcana",
      "subType": "体力 / 特殊効果",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_PRAY_SSR_01_icon_arcana.webp",
      "tierRank": "B",
      "score": 7.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "体力",
        "BonusStat": "特殊効果",
        "Class": "共用"
      },
      "effectSummary": "サポーターの回復量増加のスペシャル潜在力を所持 └サポーターと相性がいい体力タグなのも嬉しい",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517750"
    },
    {
      "externalId": "appmedia-ss-arcana-79534220",
      "slug": "ss-arcana-79534220",
      "nameEn": "Arcana: 大胆かつ凄いバニーガール",
      "category": "SSR Arcana",
      "subType": "力 / 効果命中",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/105829_y0pco.webp",
      "tierRank": "C",
      "score": 7.5,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "効果命中",
        "Class": "救援者"
      },
      "effectSummary": "全体的に力を上げやすい性能のアルカナ 効果命中アシストながら攻撃系の潜在力を複数獲得できる",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79534220"
    },
    {
      "externalId": "appmedia-ss-arcana-79517792",
      "slug": "ss-arcana-79517792",
      "nameEn": "Arcana: 誰よりもプロフェッショナル",
      "category": "SSR Arcana",
      "subType": "体力 / 特殊効果",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_LPU_POST_SSR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 7.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "体力",
        "BonusStat": "特殊効果",
        "Class": "共用"
      },
      "effectSummary": "サポーターのHP回復量増加のスペシャル潜在力を所持 回復量が最大HP依存のキャラが多い関係上、体力タグなのも優秀",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517792"
    },
    {
      "externalId": "appmedia-ss-arcana-79517780",
      "slug": "ss-arcana-79517780",
      "nameEn": "Arcana: 真実はいつも一つでしょう？",
      "category": "SSR Arcana",
      "subType": "集中 / 攻撃力",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_DETECTIVE_WATSON_SSR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 7.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "集中",
        "BonusStat": "攻撃力",
        "Class": "共用"
      },
      "effectSummary": "体力が下回ると攻撃力アップのスペシャル潜在力 └HP調整を工夫する点あり",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517780"
    },
    {
      "externalId": "appmedia-ss-arcana-79517777",
      "slug": "ss-arcana-79517777",
      "nameEn": "Arcana: 天ぷら名人",
      "category": "SSR Arcana",
      "subType": "保護 / 特殊効果",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_CONSTRUCT_GADGET_SSR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 7.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "保護",
        "BonusStat": "特殊効果",
        "Class": "救援者"
      },
      "effectSummary": "ユニーク潜在力を獲得可能 └ターニャ専用",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517777"
    },
    {
      "externalId": "appmedia-ss-arcana-79517765",
      "slug": "ss-arcana-79517765",
      "nameEn": "Arcana: 見えない場所",
      "category": "SSR Arcana",
      "subType": "集中 / 特殊効果",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WEST_BEAMSWORD_SSR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 7.5,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "集中",
        "BonusStat": "特殊効果",
        "Class": "共用"
      },
      "effectSummary": "体力を回復できるスペシャル潜在力を所持 └耐久が間に合わない場合の保険として優秀",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517765"
    },
    {
      "externalId": "appmedia-ss-arcana-79517756",
      "slug": "ss-arcana-79517756",
      "nameEn": "Arcana: 友達との散歩",
      "category": "SSR Arcana",
      "subType": "力 / 会心率",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAGICIAN_DRUID_SSR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 7.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "会心率",
        "Class": "共用"
      },
      "effectSummary": "力タグ、会心率補助と優秀なセットを所持 ターン開始時発動の会心率バフを所持",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517756"
    },
    {
      "externalId": "appmedia-ss-arcana-79517747",
      "slug": "ss-arcana-79517747",
      "nameEn": "Arcana: ガラス越しの夜景",
      "category": "SSR Arcana",
      "subType": "保護 / 特殊効果",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_SHIELDER_SSR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 7.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "保護",
        "BonusStat": "特殊効果",
        "Class": "救援者"
      },
      "effectSummary": "ユニーク潜在力を持つアルカナ └カルメン専用",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517747"
    },
    {
      "externalId": "appmedia-ss-arcana-79893874",
      "slug": "ss-arcana-79893874",
      "nameEn": "Arcana: 禁断の記録物Vol.1",
      "category": "SSR Arcana",
      "subType": "体力 / -",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/182813_7ue9j.webp",
      "tierRank": "C",
      "score": 8.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "体力",
        "BonusStat": "-",
        "Class": "-"
      },
      "effectSummary": "配布で誰でもレベル50まで強化可能 SSRながらスペシャル潜在力は獲得できない",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79893874"
    },
    {
      "externalId": "appmedia-ss-arcana-79517840",
      "slug": "ss-arcana-79517840",
      "nameEn": "Arcana: ラビットタウン",
      "category": "SSR Arcana",
      "subType": "忍耐 / -",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_CONSTRUCT_WRENCH_SR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 9,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "忍耐",
        "BonusStat": "-",
        "Class": "-"
      },
      "effectSummary": "潜在力で防御力を上げられる └コンディション回復との選択肢になるので状況に応じて選択",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517840"
    },
    {
      "externalId": "appmedia-ss-arcana-79517825",
      "slug": "ss-arcana-79517825",
      "nameEn": "Arcana: 準備、照準、発射",
      "category": "SSR Arcana",
      "subType": "力 / -",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAGICIAN_SNIPER_SR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 8.9,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "-",
        "Class": "-"
      },
      "effectSummary": "潜在力で速度を上げられる イベントでスタミナ15減少持ち",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517825"
    },
    {
      "externalId": "appmedia-ss-arcana-79517816",
      "slug": "ss-arcana-79517816",
      "nameEn": "Arcana: 獲物選び",
      "category": "SSR Arcana",
      "subType": "力 / -",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_STELLAR_THIEF_SR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 8.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "-",
        "Class": "-"
      },
      "effectSummary": "攻撃力の潜在力を複数所持 └アタッカーと相性⚪︎",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517816"
    },
    {
      "externalId": "appmedia-ss-arcana-79517813",
      "slug": "ss-arcana-79517813",
      "nameEn": "Arcana: 幻影の蝶",
      "category": "SSR Arcana",
      "subType": "体力 / -",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_NIGHTMARE_REAPER_SR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 8.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "体力",
        "BonusStat": "-",
        "Class": "-"
      },
      "effectSummary": "潜在力でHPを上げられる イベントでスタミナ回復やコンディション上昇を所持",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517813"
    },
    {
      "externalId": "appmedia-ss-arcana-79517807",
      "slug": "ss-arcana-79517807",
      "nameEn": "Arcana: 掃除、思いがけない客人",
      "category": "SSR Arcana",
      "subType": "力 / -",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_SPEAR_SR_01_icon_arcana.webp",
      "tierRank": "C",
      "score": 9,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "-",
        "Class": "-"
      },
      "effectSummary": "潜在力で会心率を上げられる └力タグで相性⚪︎",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517807"
    },
    {
      "externalId": "appmedia-ss-arcana-80139832",
      "slug": "ss-arcana-80139832",
      "nameEn": "Arcana: 花々に死を",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/161306_gw2et.webp",
      "tierRank": "SS",
      "score": 9.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/80139832"
    },
    {
      "externalId": "appmedia-ss-arcana-80012824",
      "slug": "ss-arcana-80012824",
      "nameEn": "Arcana: 弱点補完カスタム特訓",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/05/172414_ia8pq.webp",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/80012824"
    },
    {
      "externalId": "appmedia-ss-arcana-79941760",
      "slug": "ss-arcana-79941760",
      "nameEn": "Arcana: 白い月のぬくもりは陽光のように",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/04/194656_x2w06.webp",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79941760"
    },
    {
      "externalId": "appmedia-ss-arcana-79766540",
      "slug": "ss-arcana-79766540",
      "nameEn": "Arcana: 不屈の傑作",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/02/183029_ni2vf.webp",
      "tierRank": "SS",
      "score": 9.5,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79766540"
    },
    {
      "externalId": "appmedia-ss-arcana-79534223",
      "slug": "ss-arcana-79534223",
      "nameEn": "Arcana: 完璧なバニーガール",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/11/105828_b3l1z.webp",
      "tierRank": "SS",
      "score": 9.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79534223"
    },
    {
      "externalId": "appmedia-ss-arcana-79517771",
      "slug": "ss-arcana-79517771",
      "nameEn": "Arcana: メイド・バイ・ペトラ♡",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_CONSTRUCT_BOMB_SSR_01_icon_arcana.webp",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517771"
    },
    {
      "externalId": "appmedia-ss-arcana-80482327",
      "slug": "ss-arcana-80482327",
      "nameEn": "Arcana: これが…服？",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/10/192925_u7brs.webp",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/80482327"
    },
    {
      "externalId": "appmedia-ss-arcana-80400913",
      "slug": "ss-arcana-80400913",
      "nameEn": "Arcana: 享楽者の慰み",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/194438_w92ck.webp",
      "tierRank": "S",
      "score": 9,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/80400913"
    },
    {
      "externalId": "appmedia-ss-arcana-80363578",
      "slug": "ss-arcana-80363578",
      "nameEn": "Arcana: 帰路なき旅程",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/173117_4wct9.webp",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/80363578"
    },
    {
      "externalId": "appmedia-ss-arcana-80283517",
      "slug": "ss-arcana-80283517",
      "nameEn": "Arcana: バカンスの準備はお買い物から！",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/07/170418_4q5sx.webp",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/80283517"
    },
    {
      "externalId": "appmedia-ss-arcana-79865537",
      "slug": "ss-arcana-79865537",
      "nameEn": "Arcana: 終末は少女の顔をしている",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/115036_zi6xg.webp",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79865537"
    },
    {
      "externalId": "appmedia-ss-arcana-79606361",
      "slug": "ss-arcana-79606361",
      "nameEn": "Arcana: ストラニス家の令嬢",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/12/182739_q8esp.webp",
      "tierRank": "S",
      "score": 9,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79606361"
    },
    {
      "externalId": "appmedia-ss-arcana-79517795",
      "slug": "ss-arcana-79517795",
      "nameEn": "Arcana: 星を見ながら夢を",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_NOA_OBSERVER_SSR_01_icon_arcana.webp",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517795"
    },
    {
      "externalId": "appmedia-ss-arcana-79517783",
      "slug": "ss-arcana-79517783",
      "nameEn": "Arcana: キラくらい可愛い！",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MUTANT_MASK_SSR_01_icon_arcana.webp",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517783"
    },
    {
      "externalId": "appmedia-ss-arcana-79517774",
      "slug": "ss-arcana-79517774",
      "nameEn": "Arcana: ノーペイン、ノーゲイン",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_INDEPENDENT_DRAGON_SSR_01_icon_arcana.webp",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517774"
    },
    {
      "externalId": "appmedia-ss-arcana-79517744",
      "slug": "ss-arcana-79517744",
      "nameEn": "Arcana: ある騎士の誓い",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_KINGDOM_KNIGHT_SSR_01_icon_arcana.webp",
      "tierRank": "S",
      "score": 9,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517744"
    },
    {
      "externalId": "appmedia-ss-arcana-79517741",
      "slug": "ss-arcana-79517741",
      "nameEn": "Arcana: 静かな休息時間",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_MAID_TWOHANDER_SSR_01_icon_arcana.webp",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517741"
    },
    {
      "externalId": "appmedia-ss-arcana-80521390",
      "slug": "ss-arcana-80521390",
      "nameEn": "Arcana: 過酷な試練",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/10/193414_1r78o.webp",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/80521390"
    },
    {
      "externalId": "appmedia-ss-arcana-80498278",
      "slug": "ss-arcana-80498278",
      "nameEn": "Arcana: 睡魔のお出かけ",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/10/190614_vbrik.webp",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/80498278"
    },
    {
      "externalId": "appmedia-ss-arcana-80444335",
      "slug": "ss-arcana-80444335",
      "nameEn": "Arcana: 自称ベテラン探偵の捜査法",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/170800_jb9o5.webp",
      "tierRank": "A",
      "score": 8.5,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/80444335"
    },
    {
      "externalId": "appmedia-ss-arcana-80331877",
      "slug": "ss-arcana-80331877",
      "nameEn": "Arcana: 永遠なる束縛の連鎖",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/08/193327_txw73.webp",
      "tierRank": "A",
      "score": 8.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/80331877"
    },
    {
      "externalId": "appmedia-ss-arcana-80210542",
      "slug": "ss-arcana-80210542",
      "nameEn": "Arcana: 光を追え！",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/06/170551_o4b9x.webp",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/80210542"
    },
    {
      "externalId": "appmedia-ss-arcana-80191501",
      "slug": "ss-arcana-80191501",
      "nameEn": "Arcana: 服毒の覚悟",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/07/184533_dvhyg.webp",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/80191501"
    },
    {
      "externalId": "appmedia-ss-arcana-80077855",
      "slug": "ss-arcana-80077855",
      "nameEn": "Arcana: 死が二人を分かつまで",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/06/170751_oeb4y.webp",
      "tierRank": "A",
      "score": 8.5,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/80077855"
    },
    {
      "externalId": "appmedia-ss-arcana-80041744",
      "slug": "ss-arcana-80041744",
      "nameEn": "Arcana: 気怠い午後の隙間",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/05/132533_e9xba.webp",
      "tierRank": "A",
      "score": 8.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/80041744"
    },
    {
      "externalId": "appmedia-ss-arcana-79983016",
      "slug": "ss-arcana-79983016",
      "nameEn": "Arcana: 今日の一歩",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/04/173815_r9imk.webp",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79983016"
    },
    {
      "externalId": "appmedia-ss-arcana-79855463",
      "slug": "ss-arcana-79855463",
      "nameEn": "Arcana: ノスタルジアの逆襲",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/202110_u9dqe.webp",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79855463"
    },
    {
      "externalId": "appmedia-ss-arcana-79808948",
      "slug": "ss-arcana-79808948",
      "nameEn": "Arcana: 書類の山に積もる責任感",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/03/201813_3r618.webp",
      "tierRank": "A",
      "score": 8.5,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79808948"
    },
    {
      "externalId": "appmedia-ss-arcana-79576397",
      "slug": "ss-arcana-79576397",
      "nameEn": "Arcana: 虚数の開拓者",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2025/03/121445_x6mr0.webp",
      "tierRank": "A",
      "score": 8.4,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79576397"
    },
    {
      "externalId": "appmedia-ss-arcana-79517768",
      "slug": "ss-arcana-79517768",
      "nameEn": "Arcana: ボーン・トゥ・ビー・ワイルド",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_WILD_HOG_SSR_01_icon_arcana.webp",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517768"
    },
    {
      "externalId": "appmedia-ss-arcana-79517759",
      "slug": "ss-arcana-79517759",
      "nameEn": "Arcana: 天の審判",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_SAINTESS_DEMON_SSR_01_icon_arcana.webp",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517759"
    },
    {
      "externalId": "appmedia-ss-arcana-79517753",
      "slug": "ss-arcana-79517753",
      "nameEn": "Arcana: 楼閣の上、ガラスの月を迎えて",
      "category": "SSR Arcana",
      "subType": "力 / 攻撃力 / クリティカル",
      "rarity": "SSR",
      "imageUrl": "https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/ARCANA_EASTERN_SWORDMASTER_SSR_01_icon_arcana.webp",
      "tierRank": "A",
      "score": 8.5,
      "recommendedDupes": "LB1+",
      "stats": {
        "Tag": "力",
        "BonusStat": "攻撃力 / クリティカル",
        "Class": "共用"
      },
      "effectSummary": "Top-ranked SSR Arcana on the AppMedia Star Savior Strongest Arcana Tier List. Grants unique Gold Potential skills during Savior training runs.",
      "bestHolderSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517753"
    }
  ],
  "bosses": [
    {
      "slug": "cosmo-gate-abyssal-sovereign",
      "nameEn": "Cosmo Gate Season Boss — Abyssal Sovereign",
      "modeName": "Cosmo Gate (コスモゲート)",
      "difficultyLabel": "Stage 10 Extreme",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/205900_h5bcs.webp",
      "hpStat": "48,000,000 HP",
      "shieldOrDpStat": "18 Toughness Gauge Bars",
      "weaknesses": [
        "Moon (月属性) +30%",
        "Star (星属性) +30%",
        "Toughness Break"
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
          "attackName": "Broken Stun Vulnerability Window",
          "damageType": "Stunned (+50% Damage Taken)",
          "counterAction": "Unleash Bunny Frey and Harley EX Ultimates with Dana Crit DMG buffs."
        }
      ],
      "strategySteps": [
        "Bring at least 2 dedicated Toughness Breakers (Lugh, Rosaria, or Roberta) to break the 18-bar gauge before Turn 4.",
        "Save Bunny Frey EX Ultimate and Dana buffs for the 2-turn Broken window to maximize score."
      ],
      "recommendedUnitSlugs": [
        "ss-80384230",
        "ss-80354674",
        "ss-80218957",
        "ss-80022340",
        "ss-79717421"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517270"
    },
    {
      "slug": "void-singularity-stella-eater",
      "nameEn": "Void Singularity — Stella Eater",
      "modeName": "Void Singularity (虚空特異点)",
      "difficultyLabel": "Depth 15",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/143855_iv9nt.webp",
      "hpStat": "32,500,000 HP",
      "shieldOrDpStat": "14 Toughness Gauge Bars",
      "weaknesses": [
        "Sun (太陽属性) +30%",
        "Order (秩序属性) +30%"
      ],
      "resistances": [
        "Moon Resistance +30%"
      ],
      "attackPatterns": [
        {
          "turnOrPhase": "Turns 1–4",
          "attackName": "Starlight Corrosion",
          "damageType": "AoE Burn + Speed Down",
          "counterAction": "Protect allies with Besta Barrier + Immunity and counter-break with Order/Sun Strikers."
        }
      ],
      "strategySteps": [
        "Deploy Besta or Lydia in the front row to absorb Starlight Corrosion and maintain team-wide Barrier.",
        "Focus single-target Order/Sun burst during Toughness Break."
      ],
      "recommendedUnitSlugs": [
        "ss-80218957",
        "ss-80022340",
        "ss-79717421",
        "ss-80482306",
        "ss-80331829"
      ],
      "sourceUrl": "https://appmedia.jp/starsavior/79517270"
    }
  ],
  "banners": [
    {
      "slug": "starsavior-bunny-frey-pickup",
      "bannerTitle": "Pickup Gacha — Frey (Bunny Girl) & Bold Bunny Arcana",
      "bannerType": "LIMITED",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/205900_h5bcs.webp",
      "featuredNames": [
        "プロフェッサーM",
        "アモラ"
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
      "verdictReasoning": "Ranked SSS Tier 0 on AppMedia JP (https://appmedia.jp/starsavior/79517270). Unmatched AoE Moon-element damage and self-buffing economy.",
      "pityCurrencyCost": 30000,
      "sourceUrl": "https://appmedia.jp/starsavior/79517270"
    },
    {
      "slug": "starsavior-lugh-besta-pickup",
      "bannerTitle": "Order & Toughness Pickup — Lugh & Besta Dual Rate-Up",
      "bannerType": "FESTIVAL",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/09/143855_iv9nt.webp",
      "featuredNames": [
        "アモラ",
        "Smile (水着)"
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
      "verdictReasoning": "Both Lugh and Besta sit at the top of AppMedia SSS Tier 0 as the premier Toughness Breaker and Defender.",
      "pityCurrencyCost": 30000,
      "sourceUrl": "https://appmedia.jp/starsavior/79517270"
    },
    {
      "slug": "starsavior-arcana-pickup",
      "bannerTitle": "Strongest Arcana Pickup — Death to Flowers & Custom Training",
      "bannerType": "SUPPORT_CARD",
      "imageUrl": "https://appmedia.jp/wp-content/uploads/2026/07/190530_zk9ua.webp",
      "featuredNames": [
        "Arcana: 夏の夜の空",
        "Arcana: 歴戦の傭兵"
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
      "verdictReasoning": "Top-ranked SS/SSS Arcanas on AppMedia (https://appmedia.jp/starsavior/79518101) providing massive Power and Crit training multipliers.",
      "pityCurrencyCost": 30000,
      "sourceUrl": "https://appmedia.jp/starsavior/79518101"
    }
  ]
};
