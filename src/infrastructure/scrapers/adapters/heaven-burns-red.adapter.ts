import {
  VerifiedUnitPayload,
  VerifiedEquipmentPayload,
  VerifiedBossPayload,
  VerifiedBannerPayload,
  RoleColumnConfig,
  ElementConfig,
} from '../../../domain/schemas';

export interface GameAdapterBundle {
  slug: string;
  name: string;
  shortName: string;
  asianRegion: 'JP' | 'CN' | 'KR' | 'TW';
  asianPatchVersion: string;
  globalPatchVersion: string;
  foresightGapMonths: number;
  coverImageUrl: string;
  currencyName: string;
  pullCostSingle: number;
  pityThreshold: number;
  monthlyF2pIncome: number;
  monthlyPassIncome: number;
  rolesConfig: RoleColumnConfig[];
  elementsConfig: ElementConfig[];
  sourceUrl: string;
  units: VerifiedUnitPayload[];
  equipments: VerifiedEquipmentPayload[];
  bosses: VerifiedBossPayload[];
  banners: VerifiedBannerPayload[];
}

export const heavenBurnsRedBundle: GameAdapterBundle = {
  "slug": "heaven-burns-red",
  "name": "Heaven Burns Red",
  "shortName": "HBR",
  "asianRegion": "JP",
  "asianPatchVersion": "v4.12.0 JP (Game8 Verified)",
  "globalPatchVersion": "v4.8.0 EN (Yostar Global)",
  "foresightGapMonths": 4,
  "coverImageUrl": "https://img.game8.jp/12830571/91f895d57a9a9885e450c831d5a77feb.webp/show",
  "currencyName": "Quartz",
  "pullCostSingle": 300,
  "pityThreshold": 150,
  "monthlyF2pIncome": 12500,
  "monthlyPassIncome": 18500,
  "sourceUrl": "https://game8.jp/heavenburnsred/425643",
  "rolesConfig": [
    {
      "key": "DPS",
      "label": "ATTACKER / RIDER (火力)",
      "colorHex": "#DC2626"
    },
    {
      "key": "SUB_DPS",
      "label": "DEBUFFER / BLASTER (デバフ・破壊率)",
      "colorHex": "#D97706"
    },
    {
      "key": "SUPPORT",
      "label": "BUFFER / ADMIRAL (バッファー)",
      "colorHex": "#2563EB"
    },
    {
      "key": "SUSTAIN",
      "label": "HEALER / DEFENDER (耐久・回復)",
      "colorHex": "#15803D"
    }
  ],
  "elementsConfig": [
    {
      "key": "Fire",
      "label": "Fire (火)",
      "colorHex": "#DC2626"
    },
    {
      "key": "Ice",
      "label": "Ice (氷)",
      "colorHex": "#2563EB"
    },
    {
      "key": "Thunder",
      "label": "Thunder (雷)",
      "colorHex": "#D97706"
    },
    {
      "key": "Light",
      "label": "Light (光)",
      "colorHex": "#CA8A04"
    },
    {
      "key": "Dark",
      "label": "Dark (闇)",
      "colorHex": "#7C3AED"
    },
    {
      "key": "None",
      "label": "Non-Elem (無)",
      "colorHex": "#52525B"
    }
  ],
  "units": [
    {
      "externalId": "game8-hbr-803495",
      "slug": "hbr-803495",
      "nameEn": "SSレゾナンス成瀬ヒカリ(狩人)",
      "nameOriginal": "SSレゾナンス成瀬ヒカリ(狩人)",
      "styleOrTitle": "SS [泰然たる狩人] (Tier0)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "Thunder",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12830571/91f895d57a9a9885e450c831d5a77feb.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 18,
      "recommendedDupes": "LB1 (1 Dupe) / LB3",
      "baseStats": {
        "hpOrStamina": 5340,
        "dpOrSpeed": 660,
        "atkOrPower": 820,
        "defOrGuts": 650,
        "critOrWit": 810,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "全元素属性として扱われる「虚属性」のブレイカー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Thunder Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Thunder",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "「没入」状態中はスキル属性を「雷/光/闇」から切り替え可能＆消費SP0 「没入」状態ではEXスキルが強化"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス成瀬ヒカリ(狩人))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "「没入」状態中はスキル属性を「雷/光/闇」から切り替え可能＆消費SP0"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "「没入」状態ではEXスキルが強化"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-797590",
        "hbr-779179"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.9,
      "summaryVerdict": "全元素属性として扱われる「虚属性」のブレイカー — 「没入」状態中はスキル属性を「雷/光/闇」から切り替え可能＆消費SP0",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/803495).",
      "sourceUrl": "https://game8.jp/heavenburnsred/803495"
    },
    {
      "externalId": "game8-hbr-797590",
      "slug": "hbr-797590",
      "nameEn": "Ichiko Ohshima (SSレゾナンス アドミラル)",
      "nameOriginal": "SSレゾナンス大島一千子(アドミラル)",
      "styleOrTitle": "SS [浜辺のマドモアゼル] (Tier0)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "Light",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12772762/a9da9ab1ee0170476eb7a1261a3bfb40.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 18,
      "recommendedDupes": "LB1 (1 Dupe) / LB3",
      "baseStats": {
        "hpOrStamina": 5328,
        "dpOrSpeed": 658,
        "atkOrPower": 817,
        "defOrGuts": 648,
        "critOrWit": 807,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "攻撃力バフ＋心眼を付与可能な光属性アドミラル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Light Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Light",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "ゲージが溜まると様々な効果を付与する「超越ゲージ(光)」を所持 1凸で光属性スタイルの消費SP−1"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス大島一千子(アドミラル))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "ゲージが溜まると様々な効果を付与する「超越ゲージ(光)」を所持"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "1凸で光属性スタイルの消費SP−1"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-779179",
        "hbr-759416"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.8,
      "summaryVerdict": "攻撃力バフ＋心眼を付与可能な光属性アドミラル — ゲージが溜まると様々な効果を付与する「超越ゲージ(光)」を所持",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/797590).",
      "sourceUrl": "https://game8.jp/heavenburnsred/797590"
    },
    {
      "externalId": "game8-hbr-779179",
      "slug": "hbr-779179",
      "nameEn": "Misato Nikaido (SSレゾナンス アドミラル)",
      "nameOriginal": "SSレゾナンス二階堂三郷(アドミラル)",
      "styleOrTitle": "SS [アオゾラ全力応援歌] (Tier0)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "Dark",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12476910/aff34e7e72b124eb457ecf18f44dd825.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 18,
      "recommendedDupes": "LB1 (1 Dupe) / LB3",
      "baseStats": {
        "hpOrStamina": 5316,
        "dpOrSpeed": 656,
        "atkOrPower": 814,
        "defOrGuts": 646,
        "critOrWit": 804,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "闇バフ＋心眼を付与可能な属性アドミラル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Dark Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Dark",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "ゲージが溜まると様々な効果を付与する「超越ゲージ(闇)」を所持 1凸で闇属性スタイルの消費SP−1"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス二階堂三郷(アドミラル))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "ゲージが溜まると様々な効果を付与する「超越ゲージ(闇)」を所持"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "1凸で闇属性スタイルの消費SP−1"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-759416",
        "hbr-752169"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "闇バフ＋心眼を付与可能な属性アドミラル — ゲージが溜まると様々な効果を付与する「超越ゲージ(闇)」を所持",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/779179).",
      "sourceUrl": "https://game8.jp/heavenburnsred/779179"
    },
    {
      "externalId": "game8-hbr-759416",
      "slug": "hbr-759416",
      "nameEn": "SSレゾナンス七瀬七海(アドミラル)",
      "nameOriginal": "SSレゾナンス七瀬七海(アドミラル)",
      "styleOrTitle": "SS [約束は暁の彼方で] (Tier0)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "Thunder",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12260112/07a360216d9a18bf3de5ad376a7e5039.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 18,
      "recommendedDupes": "LB1 (1 Dupe) / LB3",
      "baseStats": {
        "hpOrStamina": 5304,
        "dpOrSpeed": 654,
        "atkOrPower": 811,
        "defOrGuts": 644,
        "critOrWit": 801,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "雷属性編成を超強化するアドミラルスタイル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Thunder Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Thunder",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "ゲージが溜まると様々な効果を付与する「超越ゲージ(雷)」を所持 1凸で雷属性スタイルの消費SP−1"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス七瀬七海(アドミラル))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "ゲージが溜まると様々な効果を付与する「超越ゲージ(雷)」を所持"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "1凸で雷属性スタイルの消費SP−1"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-752169",
        "hbr-752168"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "雷属性編成を超強化するアドミラルスタイル — ゲージが溜まると様々な効果を付与する「超越ゲージ(雷)」を所持",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/759416).",
      "sourceUrl": "https://game8.jp/heavenburnsred/759416"
    },
    {
      "externalId": "game8-hbr-752169",
      "slug": "hbr-752169",
      "nameEn": "Yuina Shirakawa (SSレゾナンス アドミラル)",
      "nameOriginal": "SSレゾナンス白河ユイナ(アドミラル)",
      "styleOrTitle": "SS [勝利を告げる神託の旗] (Tier0)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "Fire",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12147008/052dd9b657886a6ca0e75daa19aef3a2.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 18,
      "recommendedDupes": "LB1 (1 Dupe) / LB3",
      "baseStats": {
        "hpOrStamina": 5292,
        "dpOrSpeed": 652,
        "atkOrPower": 808,
        "defOrGuts": 642,
        "critOrWit": 798,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "火属性編成を超強化するアドミラルスタイル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Fire Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Fire",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "ゲージが溜まると様々な効果を付与する「超越ゲージ(火)」を所持 1凸で火属性スタイルの消費SP−1"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス白河ユイナ(アドミラル))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "ゲージが溜まると様々な効果を付与する「超越ゲージ(火)」を所持"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "1凸で火属性スタイルの消費SP−1"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-752168",
        "hbr-738525"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.6,
      "summaryVerdict": "火属性編成を超強化するアドミラルスタイル — ゲージが溜まると様々な効果を付与する「超越ゲージ(火)」を所持",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/752169).",
      "sourceUrl": "https://game8.jp/heavenburnsred/752169"
    },
    {
      "externalId": "game8-hbr-752168",
      "slug": "hbr-752168",
      "nameEn": "Ruka Kayamori (SSレゾナンス アドミラル)",
      "nameOriginal": "SSレゾナンス茅森月歌(アドミラル)",
      "styleOrTitle": "SS [Glorious Blades] (Tier0)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12147006/bc4ca37cc85728f6a6ee84eddbcf7ca7.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 18,
      "recommendedDupes": "LB1 (1 Dupe) / LB3",
      "baseStats": {
        "hpOrStamina": 5280,
        "dpOrSpeed": 650,
        "atkOrPower": 805,
        "defOrGuts": 640,
        "critOrWit": 795,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "氷属性編成を超強化するアドミラルスタイル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Ice Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Ice",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "ゲージが溜まると様々な効果を付与する「超越ゲージ(氷)」を所持 1凸で氷属性スタイルの消費SP−1"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス茅森月歌(アドミラル))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "ゲージが溜まると様々な効果を付与する「超越ゲージ(氷)」を所持"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "1凸で氷属性スタイルの消費SP−1"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-738525",
        "hbr-683118"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.9,
      "summaryVerdict": "氷属性編成を超強化するアドミラルスタイル — ゲージが溜まると様々な効果を付与する「超越ゲージ(氷)」を所持",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/752168).",
      "sourceUrl": "https://game8.jp/heavenburnsred/752168"
    },
    {
      "externalId": "game8-hbr-738525",
      "slug": "hbr-738525",
      "nameEn": "Bon Ivar Yamawaki (SSレゾナンス ユニゾン)",
      "nameOriginal": "SSレゾナンス山脇・ボン・イヴァール(ユニゾン)",
      "styleOrTitle": "SS [誇り高き魔王の凱旋] (Tier0)",
      "rarity": "SS",
      "role": "Attacker / Rider",
      "roleColumn": "DPS",
      "element": "Dark",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11992099/4ea81b9a1e71aa7a2b108f12969516dc.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 18,
      "recommendedDupes": "LB1 (1 Dupe) / LB3",
      "baseStats": {
        "hpOrStamina": 5268,
        "dpOrSpeed": 648,
        "atkOrPower": 802,
        "defOrGuts": 638,
        "critOrWit": 792,
        "burstCeilingScore": 98,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "任意のタイミングで魔界騎兵を起動し、敵の全能力を下げられるアタッカー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Dark Attacker / Rider EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Dark",
            "Slash",
            "Attacker / Rider"
          ],
          "exactDescription": "EXスキルで連撃大を付与しつつ闇属性で全体10連撃を行う 豊後弥生(ユニゾン)と相性の良い性能を多数所持"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス山脇・ボン・イヴァール(ユニゾン))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Attacker / Rider Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Attacker / Rider",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "EXスキルで連撃大を付与しつつ闇属性で全体10連撃を行う"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "豊後弥生(ユニゾン)と相性の良い性能を多数所持"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-683118",
        "hbr-839459"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.8,
      "summaryVerdict": "任意のタイミングで魔界騎兵を起動し、敵の全能力を下げられるアタッカー — EXスキルで連撃大を付与しつつ闇属性で全体10連撃を行う",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/738525).",
      "sourceUrl": "https://game8.jp/heavenburnsred/738525"
    },
    {
      "externalId": "game8-hbr-683118",
      "slug": "hbr-683118",
      "nameEn": "Yayoi Bungo (SSレゾナンス ユニゾン)",
      "nameOriginal": "SSレゾナンス豊後弥生(ユニゾン)",
      "styleOrTitle": "SS [悪の軍団進軍開始でゲス！] (Tier0)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11601627/f232b9c3ce69ca258221d1a9453928ed.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 18,
      "recommendedDupes": "LB1 (1 Dupe) / LB3",
      "baseStats": {
        "hpOrStamina": 5256,
        "dpOrSpeed": 646,
        "atkOrPower": 799,
        "defOrGuts": 636,
        "critOrWit": 789,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "対DP+100%の貫通クリティカルを持つユニゾンブレイカー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "スキルでバフ効果を持つ「山脇様のしもべ」を付与 「山脇様のしもべ」の人数に応じてEXスキルが強化される"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス豊後弥生(ユニゾン))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "スキルでバフ効果を持つ「山脇様のしもべ」を付与"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "「山脇様のしもべ」の人数に応じてEXスキルが強化される"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-839459",
        "hbr-832804"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "対DP+100%の貫通クリティカルを持つユニゾンブレイカー — スキルでバフ効果を持つ「山脇様のしもべ」を付与",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/683118).",
      "sourceUrl": "https://game8.jp/heavenburnsred/683118"
    },
    {
      "externalId": "game8-hbr-839459",
      "slug": "hbr-839459",
      "nameEn": "Karen Asakura (SSレゾナンス ハロウィン)",
      "nameOriginal": "SSレゾナンス朝倉可憐(ハロウィン)",
      "styleOrTitle": "SS [真夜中のソウル・ハーベスト] (Tier1)",
      "rarity": "SS",
      "role": "Attacker / Rider",
      "roleColumn": "DPS",
      "element": "Dark",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/13148095/dace002fe484281f6a63721d68bb0123.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5244,
        "dpOrSpeed": 644,
        "atkOrPower": 796,
        "defOrGuts": 634,
        "critOrWit": 786,
        "burstCeilingScore": 98,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "「刻印」に蓄積したダメージを一気に与えるアタッカー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Dark Attacker / Rider EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Dark",
            "Slash",
            "Attacker / Rider"
          ],
          "exactDescription": "敵の耐久力が高い高難易度などで特に活躍 闇属性CRTバフや防御デバフを付与可能"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス朝倉可憐(ハロウィン))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Attacker / Rider Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Attacker / Rider",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "敵の耐久力が高い高難易度などで特に活躍"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "闇属性CRTバフや防御デバフを付与可能"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-832804",
        "hbr-825787"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "「刻印」に蓄積したダメージを一気に与えるアタッカー — 敵の耐久力が高い高難易度などで特に活躍",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/839459).",
      "sourceUrl": "https://game8.jp/heavenburnsred/839459"
    },
    {
      "externalId": "game8-hbr-832804",
      "slug": "hbr-832804",
      "nameEn": "Mari Satsuki (SSレゾナンス 戦慄)",
      "nameOriginal": "SSレゾナンス佐月マリ(戦慄)",
      "styleOrTitle": "SS [戦慄のナースコール] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/13102635/c21dfb5bdec3cc46ae6f09808282e89c.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5232,
        "dpOrSpeed": 642,
        "atkOrPower": 793,
        "defOrGuts": 632,
        "critOrWit": 783,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "敵に「猛毒」状態を付与するデバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "「猛毒」と「禍」で敵の全能力を100下げることが可能 防御力ダウン状態の敵がいるとEXスキルを消費SP0で撃てる"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス佐月マリ(戦慄))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "「猛毒」と「禍」で敵の全能力を100下げることが可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "防御力ダウン状態の敵がいるとEXスキルを消費SP0で撃てる"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-825787",
        "hbr-816687"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "敵に「猛毒」状態を付与するデバッファー — 「猛毒」と「禍」で敵の全能力を100下げることが可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/832804).",
      "sourceUrl": "https://game8.jp/heavenburnsred/832804"
    },
    {
      "externalId": "game8-hbr-825787",
      "slug": "hbr-825787",
      "nameEn": "Yuki Izumi (SSレゾナンス ハロウィン)",
      "nameOriginal": "SSレゾナンス和泉ユキ(ハロウィン)",
      "styleOrTitle": "SS [フルール・アンシャンテ] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/13080710/4d167acbeba869102681961469cc7ac1.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5220,
        "dpOrSpeed": 640,
        "atkOrPower": 790,
        "defOrGuts": 630,
        "critOrWit": 780,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "対DP+100%にバフデバフを兼ね備えたハイスペックな氷ブレイカー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Ice Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Ice",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "ターン制の氷耐性ダウンを付与可能 連撃特大＆氷防御デバフも持つ"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス和泉ユキ(ハロウィン))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "ターン制の氷耐性ダウンを付与可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "連撃特大＆氷防御デバフも持つ"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-816687",
        "hbr-810832"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "対DP+100%にバフデバフを兼ね備えたハイスペックな氷ブレイカー — ターン制の氷耐性ダウンを付与可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/825787).",
      "sourceUrl": "https://game8.jp/heavenburnsred/825787"
    },
    {
      "externalId": "game8-hbr-816687",
      "slug": "hbr-816687",
      "nameEn": "Fubuki Mikoto (SSレゾナンス ミューズ)",
      "nameOriginal": "SSレゾナンス命吹雪(ミューズ)",
      "styleOrTitle": "SS [壊れた夜のミューズ] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "Fire",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/13014410/80cc2ec016d93a54b00e98e66baf0a35.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5208,
        "dpOrSpeed": 638,
        "atkOrPower": 787,
        "defOrGuts": 628,
        "critOrWit": 777,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "永続の火耐性ダウン＆防御デバフを付与するデバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Fire Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Fire",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "デバッファーが自身のみだと防御力ダウン効果量が上昇 EXスキル使用時自身に追加ターン付与"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス命吹雪(ミューズ))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "デバッファーが自身のみだと防御力ダウン効果量が上昇"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "EXスキル使用時自身に追加ターン付与"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-810832",
        "hbr-803496"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "永続の火耐性ダウン＆防御デバフを付与するデバッファー — デバッファーが自身のみだと防御力ダウン効果量が上昇",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/816687).",
      "sourceUrl": "https://game8.jp/heavenburnsred/816687"
    },
    {
      "externalId": "game8-hbr-810832",
      "slug": "hbr-810832",
      "nameEn": "Chie Sugawara (SSレゾナンス 水着)",
      "nameOriginal": "SSレゾナンス菅原千恵(水着)",
      "styleOrTitle": "SS [サマーナイト・バタフライ] (Tier1)",
      "rarity": "SS",
      "role": "Attacker / Rider",
      "roleColumn": "DPS",
      "element": "Fire",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12900792/d6ac7714406de170b0f736d6f5589f6f.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5196,
        "dpOrSpeed": 636,
        "atkOrPower": 784,
        "defOrGuts": 626,
        "critOrWit": 774,
        "burstCeilingScore": 98,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "敵全体に体力依存で攻撃する火属性アタッカー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Fire Attacker / Rider EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Fire",
            "Slash",
            "Attacker / Rider"
          ],
          "exactDescription": "EXスキルはトークン10個以上で消費SP0＆威力上昇 スキルで士気レベル上昇＆トークンを溜めつつ追加ターンを獲得"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス菅原千恵(水着))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Attacker / Rider Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Attacker / Rider",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "EXスキルはトークン10個以上で消費SP0＆威力上昇"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "スキルで士気レベル上昇＆トークンを溜めつつ追加ターンを獲得"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803496",
        "hbr-797591"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "敵全体に体力依存で攻撃する火属性アタッカー — EXスキルはトークン10個以上で消費SP0＆威力上昇",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/810832).",
      "sourceUrl": "https://game8.jp/heavenburnsred/810832"
    },
    {
      "externalId": "game8-hbr-803496",
      "slug": "hbr-803496",
      "nameEn": "Ichigo Minase (SSレゾナンス ユニゾン)",
      "nameOriginal": "SSレゾナンス水瀬いちご(ユニゾン)",
      "styleOrTitle": "SS [双星のヴァルキリー] (Tier1)",
      "rarity": "SS",
      "role": "Attacker / Rider",
      "roleColumn": "DPS",
      "element": "Fire",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12863877/6237d35e6dbf72f4268ee52bf2f83000.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5184,
        "dpOrSpeed": 634,
        "atkOrPower": 781,
        "defOrGuts": 624,
        "critOrWit": 771,
        "burstCeilingScore": 98,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "闇・氷で属性を切り替えて戦うユニゾンアタッカー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Fire Attacker / Rider EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Fire",
            "Slash",
            "Attacker / Rider"
          ],
          "exactDescription": "前衛士気バフやタゲ集中で壁役とバフ役も兼任 体力依存攻撃＆対HP+100％で火力を出しやすい"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス水瀬いちご(ユニゾン))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Attacker / Rider Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Attacker / Rider",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "前衛士気バフやタゲ集中で壁役とバフ役も兼任"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "体力依存攻撃＆対HP+100％で火力を出しやすい"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-797591",
        "hbr-794994"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "闇・氷で属性を切り替えて戦うユニゾンアタッカー — 前衛士気バフやタゲ集中で壁役とバフ役も兼任",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/803496).",
      "sourceUrl": "https://game8.jp/heavenburnsred/803496"
    },
    {
      "externalId": "game8-hbr-797591",
      "slug": "hbr-797591",
      "nameEn": "Yotsuha Ohshima (SSレゾナンス 水着)",
      "nameOriginal": "SSレゾナンス大島四ツ葉(水着)",
      "styleOrTitle": "SS [まったりトコナツフロート] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "Light",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12772764/ca6b46865cf2531ce06ad9cd69d67339.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5172,
        "dpOrSpeed": 632,
        "atkOrPower": 778,
        "defOrGuts": 622,
        "critOrWit": 768,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "光スタイルに連撃数(特大)とクリティカルバフを付与する光属性バッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Light Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Light",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "アビリティ「甘え上手」で効率よくODゲージを確保 専用スキルで敵全体に破壊率特大の光属性攻撃"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス大島四ツ葉(水着))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "アビリティ「甘え上手」で効率よくODゲージを確保"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "専用スキルで敵全体に破壊率特大の光属性攻撃"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-794994",
        "hbr-793215"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "光スタイルに連撃数(特大)とクリティカルバフを付与する光属性バッファー — アビリティ「甘え上手」で効率よくODゲージを確保",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/797591).",
      "sourceUrl": "https://game8.jp/heavenburnsred/797591"
    },
    {
      "externalId": "game8-hbr-794994",
      "slug": "hbr-794994",
      "nameEn": "Shiki Hanamura (SSレゾナンス 宵花火)",
      "nameOriginal": "SSレゾナンス華村詩紀(宵花火)",
      "styleOrTitle": "SS [宵花火のノクターン] (Tier1)",
      "rarity": "SS",
      "role": "Healer / Defender",
      "roleColumn": "SUSTAIN",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12717433/3099afc91b4843acb221cf4ccf3b6900.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5160,
        "dpOrSpeed": 630,
        "atkOrPower": 775,
        "defOrGuts": 620,
        "critOrWit": 765,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 98,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "攻撃バフやサポート効果を付与する「晩夏の陣」を展開可能な氷属性ヒーラー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Ice Healer / Defender EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Ice",
            "Slash",
            "Healer / Defender"
          ],
          "exactDescription": "スキルで単独発動の氷クリティカルバフを付与可能 氷の印で全体をサポート可能"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス華村詩紀(宵花火))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Healer / Defender Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Healer / Defender",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "スキルで単独発動の氷クリティカルバフを付与可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "氷の印で全体をサポート可能"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-793215",
        "hbr-787646"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "攻撃バフやサポート効果を付与する「晩夏の陣」を展開可能な氷属性ヒーラー — スキルで単独発動の氷クリティカルバフを付与可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/794994).",
      "sourceUrl": "https://game8.jp/heavenburnsred/794994"
    },
    {
      "externalId": "game8-hbr-793215",
      "slug": "hbr-793215",
      "nameEn": "Charlotta Skopovskaya (SSレゾナンス 異国)",
      "nameOriginal": "SSレゾナンスシャルロッタ・スコポフスカヤ(異国)",
      "styleOrTitle": "SS [異国のプリンツェッサ] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "Fire",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12676776/bf8ce57ed5a48d3491792f6004717df0.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5148,
        "dpOrSpeed": 628,
        "atkOrPower": 772,
        "defOrGuts": 618,
        "critOrWit": 762,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "火耐性ダウンを付与する火属性デバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Fire Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Fire",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "永続の防御ダウンや脆弱を付与可能 火の印でパーティー全体をサポート"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンスシャルロッタ・スコポフスカヤ(異国))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "永続の防御ダウンや脆弱を付与可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "火の印でパーティー全体をサポート"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-787646",
        "hbr-784344"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "火耐性ダウンを付与する火属性デバッファー — 永続の防御ダウンや脆弱を付与可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/793215).",
      "sourceUrl": "https://game8.jp/heavenburnsred/793215"
    },
    {
      "externalId": "game8-hbr-787646",
      "slug": "hbr-787646",
      "nameEn": "Ruka Kayamori (SSレゾナンス ジョーカー)",
      "nameOriginal": "SSレゾナンス茅森月歌(ジョーカー)",
      "styleOrTitle": "SS [TAKE YOUR HEART] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "Dark",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12623975/c057f0a154a6048733131bc178d21b8d.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5136,
        "dpOrSpeed": 626,
        "atkOrPower": 769,
        "defOrGuts": 616,
        "critOrWit": 759,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "闇耐性ダウンを扱いつつ、全体をサポートする闇属性デバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Dark Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Dark",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "CT制のスキルで全体にデバフ効果量UPを付与 EXスキルは消費SP0以上で使用可能"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス茅森月歌(ジョーカー))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "CT制のスキルで全体にデバフ効果量UPを付与"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "EXスキルは消費SP0以上で使用可能"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-784344",
        "hbr-784346"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "闇耐性ダウンを扱いつつ、全体をサポートする闇属性デバッファー — CT制のスキルで全体にデバフ効果量UPを付与",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/787646).",
      "sourceUrl": "https://game8.jp/heavenburnsred/787646"
    },
    {
      "externalId": "game8-hbr-784344",
      "slug": "hbr-784344",
      "nameEn": "SSレゾナンスヴァイオレット(信念)",
      "nameOriginal": "SSレゾナンスヴァイオレット(信念)",
      "styleOrTitle": "SS [揺るぎなき信念] (Tier1)",
      "rarity": "SS",
      "role": "Attacker / Rider",
      "roleColumn": "DPS",
      "element": "Light",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12623974/3c3b5b25db1cc12a92ffbab96792d6b4.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5124,
        "dpOrSpeed": 624,
        "atkOrPower": 766,
        "defOrGuts": 614,
        "critOrWit": 756,
        "burstCeilingScore": 98,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "対HP100％の自己連撃バフ持ち光属性アタッカー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Light Attacker / Rider EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Light",
            "Slash",
            "Attacker / Rider"
          ],
          "exactDescription": "3Tクリ率ダメUP＆連撃中バフを前衛に付与 全体光属性デバフでサポート可能"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンスヴァイオレット(信念))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Attacker / Rider Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Attacker / Rider",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "3Tクリ率ダメUP＆連撃中バフを前衛に付与"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "全体光属性デバフでサポート可能"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-784346",
        "hbr-784342"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "対HP100％の自己連撃バフ持ち光属性アタッカー — 3Tクリ率ダメUP＆連撃中バフを前衛に付与",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/784344).",
      "sourceUrl": "https://game8.jp/heavenburnsred/784344"
    },
    {
      "externalId": "game8-hbr-784346",
      "slug": "hbr-784346",
      "nameEn": "Tsukasa Tojo (SSレゾナンス パンサー)",
      "nameOriginal": "SSレゾナンス東城つかさ(パンサー)",
      "styleOrTitle": "SS [激情のファム・ファタール] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "Fire",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12586324/4f47417f5689b7358971d19a4ceee2b2.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5112,
        "dpOrSpeed": 622,
        "atkOrPower": 763,
        "defOrGuts": 612,
        "critOrWit": 753,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "火属性クリティカルバフの付与や火属性フィールドを展開できるバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Fire Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Fire",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "2ターン持続する火防御＆防御ダウンを付与可能 火属性のバフデバフの両方を付与でき扱いやすい"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス東城つかさ(パンサー))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "2ターン持続する火防御＆防御ダウンを付与可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "火属性のバフデバフの両方を付与でき扱いやすい"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-784342",
        "hbr-783178"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "火属性クリティカルバフの付与や火属性フィールドを展開できるバッファー — 2ターン持続する火防御＆防御ダウンを付与可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/784346).",
      "sourceUrl": "https://game8.jp/heavenburnsred/784346"
    },
    {
      "externalId": "game8-hbr-784342",
      "slug": "hbr-784342",
      "nameEn": "SSレゾナンスクイーン(女教皇)",
      "nameOriginal": "SSレゾナンスクイーン(女教皇)",
      "styleOrTitle": "SS [慧眼の女教皇] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12586325/71e3ac9de210c334d85e1e96152a0746.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5100,
        "dpOrSpeed": 620,
        "atkOrPower": 760,
        "defOrGuts": 610,
        "critOrWit": 750,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "貫通クリティカル＆対DP＋100％で攻撃するブレイカー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "EXスキルでブレイク時ODゲージ＋100％ 各種スキルでDP回復や全体バフを付与可能"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンスクイーン(女教皇))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "EXスキルでブレイク時ODゲージ＋100％"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "各種スキルでDP回復や全体バフを付与可能"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-783178",
        "hbr-781369"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "貫通クリティカル＆対DP＋100％で攻撃するブレイカー — EXスキルでブレイク時ODゲージ＋100％",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/784342).",
      "sourceUrl": "https://game8.jp/heavenburnsred/784342"
    },
    {
      "externalId": "game8-hbr-783178",
      "slug": "hbr-783178",
      "nameEn": "SSレゾナンスビャッコ(白き牙)",
      "nameOriginal": "SSレゾナンスビャッコ(白き牙)",
      "styleOrTitle": "SS [戦場の白き牙] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "Dark",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12534556/76061b22b7f2d0f74286d5da2c67f347.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5088,
        "dpOrSpeed": 618,
        "atkOrPower": 757,
        "defOrGuts": 608,
        "critOrWit": 747,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "闇スタイルの連撃数を上げつつ破壊率を上げられるブラスター",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Dark Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Dark",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "「ラッシュ」状態でSP消費なしで攻撃スキルを再発動 EX使用時に全体のSP＋2"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンスビャッコ(白き牙))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "「ラッシュ」状態でSP消費なしで攻撃スキルを再発動"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "EX使用時に全体のSP＋2"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-781369",
        "hbr-781370"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "闇スタイルの連撃数を上げつつ破壊率を上げられるブラスター — 「ラッシュ」状態でSP消費なしで攻撃スキルを再発動",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/783178).",
      "sourceUrl": "https://game8.jp/heavenburnsred/783178"
    },
    {
      "externalId": "game8-hbr-781369",
      "slug": "hbr-781369",
      "nameEn": "Inori Natsume (SSレゾナンス 花影)",
      "nameOriginal": "SSレゾナンス夏目祈(花影)",
      "styleOrTitle": "SS [花影、舞の構え] (Tier1)",
      "rarity": "SS",
      "role": "Attacker / Rider",
      "roleColumn": "DPS",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12517958/66e30ff2b8eeb1ff2fd00171a555430d.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5076,
        "dpOrSpeed": 616,
        "atkOrPower": 754,
        "defOrGuts": 606,
        "critOrWit": 744,
        "burstCeilingScore": 98,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "対HP+100％を持つ氷全体アタッカー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Ice Attacker / Rider EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Ice",
            "Slash",
            "Attacker / Rider"
          ],
          "exactDescription": "EXで5T全体氷バフ+対HP+100％の全体攻撃 自身にバフデバフ効果量UPかつ自身追加ターン"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス夏目祈(花影))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Attacker / Rider Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Attacker / Rider",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "EXで5T全体氷バフ+対HP+100％の全体攻撃"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "自身にバフデバフ効果量UPかつ自身追加ターン"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-781370",
        "hbr-779180"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "対HP+100％を持つ氷全体アタッカー — EXで5T全体氷バフ+対HP+100％の全体攻撃",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/781369).",
      "sourceUrl": "https://game8.jp/heavenburnsred/781369"
    },
    {
      "externalId": "game8-hbr-781370",
      "slug": "hbr-781370",
      "nameEn": "Maki Kurosawa (SSレゾナンス 女帝)",
      "nameOriginal": "SSレゾナンス黒沢真希(女帝)",
      "styleOrTitle": "SS [鉄火場の女帝] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "Thunder",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12517959/4d491ceca32b1e9f917f1b114ae374a7.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5064,
        "dpOrSpeed": 614,
        "atkOrPower": 751,
        "defOrGuts": 604,
        "critOrWit": 741,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "全能力低下＆雷の印が優秀な雷デバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Thunder Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Thunder",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "EXで全能力が低下する「触」状態を2T付与 雷の印や永続防御デバフ、防御デバフも優秀"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス黒沢真希(女帝))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "EXで全能力が低下する「触」状態を2T付与"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "雷の印や永続防御デバフ、防御デバフも優秀"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-779180",
        "hbr-775106"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "全能力低下＆雷の印が優秀な雷デバッファー — EXで全能力が低下する「触」状態を2T付与",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/781370).",
      "sourceUrl": "https://game8.jp/heavenburnsred/781370"
    },
    {
      "externalId": "game8-hbr-779180",
      "slug": "hbr-779180",
      "nameEn": "Akari Date (SSレゾナンス 運動会)",
      "nameOriginal": "SSレゾナンス伊達朱里(運動会)",
      "styleOrTitle": "SS [前進ネバーギブアップ！] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "Light",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12476911/2f0aa35da8a622f8561d3ea114bb07bf.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5052,
        "dpOrSpeed": 612,
        "atkOrPower": 748,
        "defOrGuts": 602,
        "critOrWit": 738,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "永続光デバフと耐性ダウンを持つデバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Light Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Light",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "敵全体の全能力を低下させる「禍」状態を付与 EXスキル初回使用時はODゲージ+25%"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス伊達朱里(運動会))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "敵全体の全能力を低下させる「禍」状態を付与"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "EXスキル初回使用時はODゲージ+25%"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-775106",
        "hbr-764339"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "永続光デバフと耐性ダウンを持つデバッファー — 敵全体の全能力を低下させる「禍」状態を付与",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/779180).",
      "sourceUrl": "https://game8.jp/heavenburnsred/779180"
    },
    {
      "externalId": "game8-hbr-775106",
      "slug": "hbr-775106",
      "nameEn": "Hisame Ogasawara (SSレゾナンス バニー)",
      "nameOriginal": "SSレゾナンス小笠原緋雨(バニー)",
      "styleOrTitle": "SS [春色イースターバニー] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "Fire",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12429920/089e71418af35187e471997a7d557f0e.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5040,
        "dpOrSpeed": 610,
        "atkOrPower": 745,
        "defOrGuts": 600,
        "critOrWit": 735,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "トークンを消費して火スタイルの属性スキル攻撃力と連撃数を上げるバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Fire Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Fire",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "前衛トークンを上昇+破壊率大で全体攻撃 凸効果で自身追加ターン時に編成をサポート"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス小笠原緋雨(バニー))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "前衛トークンを上昇+破壊率大で全体攻撃"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "凸効果で自身追加ターン時に編成をサポート"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-764339",
        "hbr-755194"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "トークンを消費して火スタイルの属性スキル攻撃力と連撃数を上げるバッファー — 前衛トークンを上昇+破壊率大で全体攻撃",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/775106).",
      "sourceUrl": "https://game8.jp/heavenburnsred/775106"
    },
    {
      "externalId": "game8-hbr-764339",
      "slug": "hbr-764339",
      "nameEn": "Megumi Aikawa (SSレゾナンス ユニゾン)",
      "nameOriginal": "SSレゾナンス逢川めぐみ(ユニゾン)",
      "styleOrTitle": "SS [スペシャルナイト・ガールズジャム] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12349125/cea5fadcb362a1937f134cbb52cf6a28.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5028,
        "dpOrSpeed": 608,
        "atkOrPower": 742,
        "defOrGuts": 598,
        "critOrWit": 732,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "氷・雷属性の耐性ダウン＆属性防御を下げられるデバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Ice Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Ice",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "スキルで永続の脆弱デバフを付与 ブレイク時は「タマセッション」で全体を自動DP復活"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス逢川めぐみ(ユニゾン))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "スキルで永続の脆弱デバフを付与"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "ブレイク時は「タマセッション」で全体を自動DP復活"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-755194",
        "hbr-756804"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "氷・雷属性の耐性ダウン＆属性防御を下げられるデバッファー — スキルで永続の脆弱デバフを付与",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/764339).",
      "sourceUrl": "https://game8.jp/heavenburnsred/764339"
    },
    {
      "externalId": "game8-hbr-755194",
      "slug": "hbr-755194",
      "nameEn": "SSレゾナンス手塚咲",
      "nameOriginal": "SSレゾナンス手塚咲",
      "styleOrTitle": "SS [希望の暁] (Tier1)",
      "rarity": "SS",
      "role": "Attacker / Rider",
      "roleColumn": "DPS",
      "element": "Thunder",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12310240/72f73cd03ed731213d871919a8cce579.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5016,
        "dpOrSpeed": 606,
        "atkOrPower": 739,
        "defOrGuts": 596,
        "critOrWit": 729,
        "burstCeilingScore": 98,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "「鬼神化」で自身を超強化する雷アタッカー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Thunder Attacker / Rider EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Thunder",
            "Slash",
            "Attacker / Rider"
          ],
          "exactDescription": "鬼神化中は防御デバフ＋破壊率特大の攻撃を連発可能 EXスキルでは全SPを消費して攻撃"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス手塚咲)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Attacker / Rider Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Attacker / Rider",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "鬼神化中は防御デバフ＋破壊率特大の攻撃を連発可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "EXスキルでは全SPを消費して攻撃"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-756804",
        "hbr-746396"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "「鬼神化」で自身を超強化する雷アタッカー — 鬼神化中は防御デバフ＋破壊率特大の攻撃を連発可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/755194).",
      "sourceUrl": "https://game8.jp/heavenburnsred/755194"
    },
    {
      "externalId": "game8-hbr-756804",
      "slug": "hbr-756804",
      "nameEn": "Aoi Erika (SSレゾナンス 白スーツ)",
      "nameOriginal": "SSレゾナンス蒼井えりか(白スーツ)",
      "styleOrTitle": "SS [ツナグ・Legacy] (Tier1)",
      "rarity": "SS",
      "role": "Healer / Defender",
      "roleColumn": "SUSTAIN",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12213479/3ae51076b9af61de0e4efc0204a228c7.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5004,
        "dpOrSpeed": 604,
        "atkOrPower": 736,
        "defOrGuts": 594,
        "critOrWit": 726,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 98,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "連撃数アップ(特大)付与＋OD50％上昇を持つ氷ヒーラー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Ice Healer / Defender EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Ice",
            "Slash",
            "Healer / Defender"
          ],
          "exactDescription": "氷属性スタイルに「氷の印」を付与して全体のバフが可能 スキルで前衛DP復活＋防御バフで耐久サポート"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス蒼井えりか(白スーツ))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Healer / Defender Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Healer / Defender",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "氷属性スタイルに「氷の印」を付与して全体のバフが可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "スキルで前衛DP復活＋防御バフで耐久サポート"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-746396",
        "hbr-730675"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "連撃数アップ(特大)付与＋OD50％上昇を持つ氷ヒーラー — 氷属性スタイルに「氷の印」を付与して全体のバフが可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/756804).",
      "sourceUrl": "https://game8.jp/heavenburnsred/756804"
    },
    {
      "externalId": "game8-hbr-746396",
      "slug": "hbr-746396",
      "nameEn": "Kanata Maruyama (SSレゾナンス レガリア)",
      "nameOriginal": "SSレゾナンス丸山奏多(レガリア)",
      "styleOrTitle": "SS [決起のレガリア] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12037257/53334696cca7db0e558e624cf366a6d4.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4992,
        "dpOrSpeed": 602,
        "atkOrPower": 733,
        "defOrGuts": 592,
        "critOrWit": 723,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "CT制スキルでSP消費なしのバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "全体の心眼＋連撃バフを付与可能 スキルでチャージ付与＋チャージ中の味方は消費SP-1"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス丸山奏多(レガリア))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "全体の心眼＋連撃バフを付与可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "スキルでチャージ付与＋チャージ中の味方は消費SP-1"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-730675",
        "hbr-724681"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "CT制スキルでSP消費なしのバッファー — 全体の心眼＋連撃バフを付与可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/746396).",
      "sourceUrl": "https://game8.jp/heavenburnsred/746396"
    },
    {
      "externalId": "game8-hbr-730675",
      "slug": "hbr-730675",
      "nameEn": "SSレゾナンス國見タマ(ハロウィン)",
      "nameOriginal": "SSレゾナンス國見タマ(ハロウィン)",
      "styleOrTitle": "SS [ようこそ♪ナイトメア・パレード] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11868888/9cec9a41904d1d0995a1701747f52cef.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4980,
        "dpOrSpeed": 600,
        "atkOrPower": 730,
        "defOrGuts": 590,
        "critOrWit": 720,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "敵に「霊符」状態を付与する氷デバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Ice Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Ice",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "EXスキルで敵全体に氷デバフ＋脆弱を付与可能 3凸で条件を満たすと毎ターン霊符レベル＋2"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス國見タマ(ハロウィン))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "EXスキルで敵全体に氷デバフ＋脆弱を付与可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "3凸で条件を満たすと毎ターン霊符レベル＋2"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-724681",
        "hbr-712350"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "敵に「霊符」状態を付与する氷デバッファー — EXスキルで敵全体に氷デバフ＋脆弱を付与可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/730675).",
      "sourceUrl": "https://game8.jp/heavenburnsred/730675"
    },
    {
      "externalId": "game8-hbr-724681",
      "slug": "hbr-724681",
      "nameEn": "Ichigo Minase (SSレゾナンス パワプロ)",
      "nameOriginal": "SSレゾナンス水瀬いちご(パワプロ)",
      "styleOrTitle": "SS [熱闘！かっとばせホームラン！] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "Light",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11847198/854bbf319124513639d55203f52700b8.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4968,
        "dpOrSpeed": 598,
        "atkOrPower": 727,
        "defOrGuts": 588,
        "critOrWit": 717,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "光属性フィールド・連撃バフ(特大)を付与可能なバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Light Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Light",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "EXスキルで全体のやる気を絶好調にできる 1凸で絶好調の味方を毎ターンSP+1"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス水瀬いちご(パワプロ))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "EXスキルで全体のやる気を絶好調にできる"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "1凸で絶好調の味方を毎ターンSP+1"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-712350",
        "hbr-712353"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "光属性フィールド・連撃バフ(特大)を付与可能なバッファー — EXスキルで全体のやる気を絶好調にできる",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/724681).",
      "sourceUrl": "https://game8.jp/heavenburnsred/724681"
    },
    {
      "externalId": "game8-hbr-712350",
      "slug": "hbr-712350",
      "nameEn": "Aina Mizuhara (SSレゾナンス 水着)",
      "nameOriginal": "SSレゾナンス瑞原あいな(水着)",
      "styleOrTitle": "SS [キラキラサマーへ、ジャンプイン！] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11695752/c98e0728e936caa350a48a649ecebd39.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4956,
        "dpOrSpeed": 596,
        "atkOrPower": 724,
        "defOrGuts": 586,
        "critOrWit": 714,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "ダウンターン中の敵の破壊率を稼げるデバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "スキルで味方のDPを犠牲にしてODゲージ上昇 行動開始時にダウンターン中の敵がいれば防御力ダウン効果アップ"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス瑞原あいな(水着))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "スキルで味方のDPを犠牲にしてODゲージ上昇"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "行動開始時にダウンターン中の敵がいれば防御力ダウン効果アップ"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-712353",
        "hbr-708980"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "ダウンターン中の敵の破壊率を稼げるデバッファー — スキルで味方のDPを犠牲にしてODゲージ上昇",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/712350).",
      "sourceUrl": "https://game8.jp/heavenburnsred/712350"
    },
    {
      "externalId": "game8-hbr-712353",
      "slug": "hbr-712353",
      "nameEn": "Mari Satsuki (SS しもべ)",
      "nameOriginal": "SS佐月マリ(しもべ)",
      "styleOrTitle": "SS [魔王に仕えし混沌の謀臣] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11695750/220381a7b35e70b0c8199bbba4c2e3c6.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4944,
        "dpOrSpeed": 594,
        "atkOrPower": 721,
        "defOrGuts": 584,
        "critOrWit": 711,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "EXを使用するたびに性能が強化されるデバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "スキル1で自身と味方単体に追加ターンを付与 自身のスキル攻撃力を上げる共鳴アビリティを持つ"
        },
        {
          "name": "Tactical Sub-Skill (SS佐月マリ(しもべ))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "スキル1で自身と味方単体に追加ターンを付与"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "自身のスキル攻撃力を上げる共鳴アビリティを持つ"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-708980",
        "hbr-706660"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "EXを使用するたびに性能が強化されるデバッファー — スキル1で自身と味方単体に追加ターンを付与",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/712353).",
      "sourceUrl": "https://game8.jp/heavenburnsred/712353"
    },
    {
      "externalId": "game8-hbr-708980",
      "slug": "hbr-708980",
      "nameEn": "Karen Asakura (SSレゾナンス ユニゾン)",
      "nameOriginal": "SSレゾナンス朝倉可憐(ユニゾン)",
      "styleOrTitle": "SS [CODE:Virtual Killer] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11656157/928e6ff5da71496febe35af747a88f91.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4932,
        "dpOrSpeed": 592,
        "atkOrPower": 718,
        "defOrGuts": 582,
        "critOrWit": 708,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "ブレイカーとブラスターを切り替えて戦うユニゾンスタイル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "スキル1でブレイク時、超ダウン状態にする EXスキルは超ダウン状態だと破壊率絶大になる"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス朝倉可憐(ユニゾン))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "スキル1でブレイク時、超ダウン状態にする"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "EXスキルは超ダウン状態だと破壊率絶大になる"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-706660",
        "hbr-692830"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "ブレイカーとブラスターを切り替えて戦うユニゾンスタイル — スキル1でブレイク時、超ダウン状態にする",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/708980).",
      "sourceUrl": "https://game8.jp/heavenburnsred/708980"
    },
    {
      "externalId": "game8-hbr-706660",
      "slug": "hbr-706660",
      "nameEn": "Aoi Erika (SSレゾナンス 水着)",
      "nameOriginal": "SSレゾナンス蒼井えりか(水着)",
      "styleOrTitle": "SS [ヒカル・Mermaid Vacation] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "Dark",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11572103/5068210b4e8d4ca058002380661c923c.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4920,
        "dpOrSpeed": 590,
        "atkOrPower": 715,
        "defOrGuts": 580,
        "critOrWit": 705,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "全体士気レベルを上げつつ2種類の防御デバフを付与するデバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Dark Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Dark",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "士気レベルを上げることでEXスキルが強化 士気レベル2以上で闇属性フィールド(大)を展開可能に"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス蒼井えりか(水着))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "士気レベルを上げることでEXスキルが強化"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "士気レベル2以上で闇属性フィールド(大)を展開可能に"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-692830",
        "hbr-686333"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "全体士気レベルを上げつつ2種類の防御デバフを付与するデバッファー — 士気レベルを上げることでEXスキルが強化",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/706660).",
      "sourceUrl": "https://game8.jp/heavenburnsred/706660"
    },
    {
      "externalId": "game8-hbr-692830",
      "slug": "hbr-692830",
      "nameEn": "Mion Yanagi (SSレゾナンス アドミラル)",
      "nameOriginal": "SSレゾナンス柳美音(アドミラル)",
      "styleOrTitle": "SS [夜の香り、薔薇の調べ] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11605624/6c6f58bf4a4aa44475df208131eabead.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4908,
        "dpOrSpeed": 588,
        "atkOrPower": 712,
        "defOrGuts": 578,
        "critOrWit": 702,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "各種強化状態を付与する「ハイブースト」状態で味方を補助するアドミラル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "EXで単独発動の攻撃バフ+クリバフ+心眼バフを全体に付与可能 バトル開始時に味方全体をチャージする"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス柳美音(アドミラル))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "EXで単独発動の攻撃バフ+クリバフ+心眼バフを全体に付与可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "バトル開始時に味方全体をチャージする"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-686333",
        "hbr-677349"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "各種強化状態を付与する「ハイブースト」状態で味方を補助するアドミラル — EXで単独発動の攻撃バフ+クリバフ+心眼バフを全体に付与可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/692830).",
      "sourceUrl": "https://game8.jp/heavenburnsred/692830"
    },
    {
      "externalId": "game8-hbr-686333",
      "slug": "hbr-686333",
      "nameEn": "Seira Sakuraba (SS しもべ)",
      "nameOriginal": "SS桜庭星羅(しもべ)",
      "styleOrTitle": "SS [魔王に仕えし幻影の大魔道士] (Tier1)",
      "rarity": "SS",
      "role": "Healer / Defender",
      "roleColumn": "SUSTAIN",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11305350/6d41c92a4475e5ff467da5a55a44466c.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4896,
        "dpOrSpeed": 586,
        "atkOrPower": 709,
        "defOrGuts": 576,
        "critOrWit": 699,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 98,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "EXを使用するたびに性能が強化されるディフェンダー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Healer / Defender EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Healer / Defender"
          ],
          "exactDescription": "EX4回目以降は攻撃バフ+心眼バフを付与可能 EX使用時にODゲージ+10%するパッシブスキルを持つ"
        },
        {
          "name": "Tactical Sub-Skill (SS桜庭星羅(しもべ))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Healer / Defender Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Healer / Defender",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "EX4回目以降は攻撃バフ+心眼バフを付与可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "EX使用時にODゲージ+10%するパッシブスキルを持つ"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-677349",
        "hbr-669859"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "EXを使用するたびに性能が強化されるディフェンダー — EX4回目以降は攻撃バフ+心眼バフを付与可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/686333).",
      "sourceUrl": "https://game8.jp/heavenburnsred/686333"
    },
    {
      "externalId": "game8-hbr-677349",
      "slug": "hbr-677349",
      "nameEn": "Ichiko Ohshima (SSレゾナンス 白スーツ)",
      "nameOriginal": "SSレゾナンス大島一千子(白スーツ)",
      "styleOrTitle": "SS [導きのルーセント] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "Light",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11605628/35d05282b6fbd7670503494ba1f8ece8.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4884,
        "dpOrSpeed": 584,
        "atkOrPower": 706,
        "defOrGuts": 574,
        "critOrWit": 696,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "敵全体の光属性耐性を消し去り、光弱点を付与するデバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Light Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Light",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "スキル1でODゲージを50％消費して前衛SPを6上昇 EXスキルでは弱点付与の他、永続防御ダウン付与とODゲージを+50％"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス大島一千子(白スーツ))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "スキル1でODゲージを50％消費して前衛SPを6上昇"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "EXスキルでは弱点付与の他、永続防御ダウン付与とODゲージを+50％"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-669859",
        "hbr-667355"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "敵全体の光属性耐性を消し去り、光弱点を付与するデバッファー — スキル1でODゲージを50％消費して前衛SPを6上昇",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/677349).",
      "sourceUrl": "https://game8.jp/heavenburnsred/677349"
    },
    {
      "externalId": "game8-hbr-669859",
      "slug": "hbr-669859",
      "nameEn": "Tsukasa Tojo (SS 哀情)",
      "nameOriginal": "SS東城つかさ(哀情)",
      "styleOrTitle": "SS [哀情のラメント] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11063434/767796f421516f4f0806dee7d19e9c3a.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4872,
        "dpOrSpeed": 582,
        "atkOrPower": 703,
        "defOrGuts": 572,
        "critOrWit": 693,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "氷属性フィールド(大)を展開しつつ氷クリバフを付与可能なバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Ice Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Ice",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "スキル1で単独発動の氷属性バフを付与可能 自身以外からスキルでSP配布された際、追加でSP上昇"
        },
        {
          "name": "Tactical Sub-Skill (SS東城つかさ(哀情))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "スキル1で単独発動の氷属性バフを付与可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "自身以外からスキルでSP配布された際、追加でSP上昇"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-667355",
        "hbr-657138"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "氷属性フィールド(大)を展開しつつ氷クリバフを付与可能なバッファー — スキル1で単独発動の氷属性バフを付与可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/669859).",
      "sourceUrl": "https://game8.jp/heavenburnsred/669859"
    },
    {
      "externalId": "game8-hbr-667355",
      "slug": "hbr-667355",
      "nameEn": "Misato Nikaido (SSレゾナンス 白スーツ)",
      "nameOriginal": "SSレゾナンス二階堂三郷(白スーツ)",
      "styleOrTitle": "SS [Lead by Example] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "Fire",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11605626/0a7388b17da7b94e9c3d8bfb0d5a3ffe.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4860,
        "dpOrSpeed": 580,
        "atkOrPower": 700,
        "defOrGuts": 570,
        "critOrWit": 690,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "敵全体の火属性耐性を消し去り、火弱点を付与するデバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Fire Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Fire",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "スキル1で火属性デバフを全体に付与可能 OD中は各種スキルの強化やアビリティが発動"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス二階堂三郷(白スーツ))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "スキル1で火属性デバフを全体に付与可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "OD中は各種スキルの強化やアビリティが発動"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-657138",
        "hbr-652684"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "敵全体の火属性耐性を消し去り、火弱点を付与するデバッファー — スキル1で火属性デバフを全体に付与可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/667355).",
      "sourceUrl": "https://game8.jp/heavenburnsred/667355"
    },
    {
      "externalId": "game8-hbr-657138",
      "slug": "hbr-657138",
      "nameEn": "Ruka Kayamori (SS 歌姫)",
      "nameOriginal": "SS茅森月歌(歌姫)",
      "styleOrTitle": "SS [白き華の歌姫] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10803349/6375ad5883a5103bd517da8cc11ef8fd.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4848,
        "dpOrSpeed": 578,
        "atkOrPower": 697,
        "defOrGuts": 568,
        "critOrWit": 687,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "味方を歌姫の加護状態にするバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "歌姫の加護状態ならスキル1で連撃バフ(特大)x3を付与可能 初期アビリティでターン開始時歌姫の加護状態だと前衛SP+2"
        },
        {
          "name": "Tactical Sub-Skill (SS茅森月歌(歌姫))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "歌姫の加護状態ならスキル1で連撃バフ(特大)x3を付与可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "初期アビリティでターン開始時歌姫の加護状態だと前衛SP+2"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-652684",
        "hbr-648704"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "味方を歌姫の加護状態にするバッファー — 歌姫の加護状態ならスキル1で連撃バフ(特大)x3を付与可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/657138).",
      "sourceUrl": "https://game8.jp/heavenburnsred/657138"
    },
    {
      "externalId": "game8-hbr-652684",
      "slug": "hbr-652684",
      "nameEn": "Aoi Erika (SS アドミラル)",
      "nameOriginal": "SS蒼井えりか(アドミラル)",
      "styleOrTitle": "SS [ヒビケ・Battlecry] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10699305/96765452bcf48304038e016345897c97.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4836,
        "dpOrSpeed": 576,
        "atkOrPower": 694,
        "defOrGuts": 566,
        "critOrWit": 684,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "味方の支援に特化した新ロール「アドミラル」スタイル",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "EXスキルで味方全体のDP復活+OD100%上昇 パッシブで味方全体のクリティカル率を常時+100％"
        },
        {
          "name": "Tactical Sub-Skill (SS蒼井えりか(アドミラル))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "EXスキルで味方全体のDP復活+OD100%上昇"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "パッシブで味方全体のクリティカル率を常時+100％"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-648704",
        "hbr-643121"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "味方の支援に特化した新ロール「アドミラル」スタイル — EXスキルで味方全体のDP復活+OD100%上昇",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/652684).",
      "sourceUrl": "https://game8.jp/heavenburnsred/652684"
    },
    {
      "externalId": "game8-hbr-648704",
      "slug": "hbr-648704",
      "nameEn": "Sumomo Minase (SS 愛憐)",
      "nameOriginal": "SS水瀬すもも(愛憐)",
      "styleOrTitle": "SS [愛憐の綻び] (Tier1)",
      "rarity": "SS",
      "role": "Attacker / Rider",
      "roleColumn": "DPS",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10651873/662ecf6698c9ab569e21cfefd92113c5.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4824,
        "dpOrSpeed": 574,
        "atkOrPower": 691,
        "defOrGuts": 564,
        "critOrWit": 681,
        "burstCeilingScore": 98,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "対HP+30%の貫通クリティカルで攻撃するアタッカー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Attacker / Rider EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Attacker / Rider"
          ],
          "exactDescription": "EXスキル初回使用時はSP半減 3凸で自身に連撃バフ(大)を付与する狂乱の型を習得"
        },
        {
          "name": "Tactical Sub-Skill (SS水瀬すもも(愛憐))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Attacker / Rider Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Attacker / Rider",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "EXスキル初回使用時はSP半減"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "3凸で自身に連撃バフ(大)を付与する狂乱の型を習得"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-643121",
        "hbr-638288"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "対HP+30%の貫通クリティカルで攻撃するアタッカー — EXスキル初回使用時はSP半減",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/648704).",
      "sourceUrl": "https://game8.jp/heavenburnsred/648704"
    },
    {
      "externalId": "game8-hbr-643121",
      "slug": "hbr-643121",
      "nameEn": "Yuki Izumi (SSレゾナンス ユニゾン)",
      "nameOriginal": "SSレゾナンス和泉ユキ(ユニゾン)",
      "styleOrTitle": "SS [傍らのプリンセス] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11603313/4a617d2dc76f106131eabcf60a13eac0.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4812,
        "dpOrSpeed": 572,
        "atkOrPower": 688,
        "defOrGuts": 562,
        "critOrWit": 678,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "ハッキングと脆弱を付与しつつ、2属性で攻撃可能なブレイカー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "パッシブスキルで敵のダウンターンを1ターン延長 3凸で自身が付与するデバフの効果が1ターン伸びる"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス和泉ユキ(ユニゾン))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "パッシブスキルで敵のダウンターンを1ターン延長"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "3凸で自身が付与するデバフの効果が1ターン伸びる"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-638288",
        "hbr-628230"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "ハッキングと脆弱を付与しつつ、2属性で攻撃可能なブレイカー — パッシブスキルで敵のダウンターンを1ターン延長",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/643121).",
      "sourceUrl": "https://game8.jp/heavenburnsred/643121"
    },
    {
      "externalId": "game8-hbr-638288",
      "slug": "hbr-638288",
      "nameEn": "Hisame Ogasawara (SS ガーネット)",
      "nameOriginal": "SS小笠原緋雨(ガーネット)",
      "styleOrTitle": "SS [夏宵色のガーネット] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10485922/ccc9898807378abab078b4873d93e317.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4800,
        "dpOrSpeed": 570,
        "atkOrPower": 685,
        "defOrGuts": 560,
        "critOrWit": 675,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "敵全体の氷属性耐性を消し去り、氷弱点を付与するデバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Ice Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Ice",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "スキル1で氷デバフを付与可能 3凸で消費SPを抑え扱いやすくなる"
        },
        {
          "name": "Tactical Sub-Skill (SS小笠原緋雨(ガーネット))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "スキル1で氷デバフを付与可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "3凸で消費SPを抑え扱いやすくなる"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-628230",
        "hbr-621315"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "敵全体の氷属性耐性を消し去り、氷弱点を付与するデバッファー — スキル1で氷デバフを付与可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/638288).",
      "sourceUrl": "https://game8.jp/heavenburnsred/638288"
    },
    {
      "externalId": "game8-hbr-628230",
      "slug": "hbr-628230",
      "nameEn": "Megumi Aikawa (SS 水着)",
      "nameOriginal": "SS逢川めぐみ(水着)",
      "styleOrTitle": "SS [ネバーエンド・サマー] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "Thunder",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10272971/610630410f39037d230436f0857c3c3c.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4788,
        "dpOrSpeed": 568,
        "atkOrPower": 682,
        "defOrGuts": 558,
        "critOrWit": 672,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "雷フィールド(大)を展開しつつ全体の雷防御を下げるデバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Thunder Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Thunder",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "パッシブスキルでフィ―ルド効果が強化+ターンが永続に 他スタイル所持で脆弱と防御デバフも付与可能"
        },
        {
          "name": "Tactical Sub-Skill (SS逢川めぐみ(水着))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "パッシブスキルでフィ―ルド効果が強化+ターンが永続に"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "他スタイル所持で脆弱と防御デバフも付与可能"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-621315",
        "hbr-603245"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "雷フィールド(大)を展開しつつ全体の雷防御を下げるデバッファー — パッシブスキルでフィ―ルド効果が強化+ターンが永続に",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/628230).",
      "sourceUrl": "https://game8.jp/heavenburnsred/628230"
    },
    {
      "externalId": "game8-hbr-621315",
      "slug": "hbr-621315",
      "nameEn": "Yuina Shirakawa (SSレゾナンス ユニゾン)",
      "nameOriginal": "SSレゾナンス白河ユイナ(ユニゾン)",
      "styleOrTitle": "SS [月が綺麗] (Tier1)",
      "rarity": "SS",
      "role": "Attacker / Rider",
      "roleColumn": "DPS",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11592506/6b7161b536e84cfa9cc7059bbf82e1e0.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4776,
        "dpOrSpeed": 566,
        "atkOrPower": 679,
        "defOrGuts": 556,
        "critOrWit": 669,
        "burstCeilingScore": 98,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "2種類の攻撃を使い分けて戦う氷全体アタッカー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Ice Attacker / Rider EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Ice",
            "Slash",
            "Attacker / Rider"
          ],
          "exactDescription": "スキル1で前衛に追加ターンを付与 アビリティでバトル開始時SP+2"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス白河ユイナ(ユニゾン))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Attacker / Rider Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Attacker / Rider",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "スキル1で前衛に追加ターンを付与"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "アビリティでバトル開始時SP+2"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-603245",
        "hbr-595464"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "2種類の攻撃を使い分けて戦う氷全体アタッカー — スキル1で前衛に追加ターンを付与",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/621315).",
      "sourceUrl": "https://game8.jp/heavenburnsred/621315"
    },
    {
      "externalId": "game8-hbr-603245",
      "slug": "hbr-603245",
      "nameEn": "Tsukasa Tojo (SS バニー)",
      "nameOriginal": "SS東城つかさ(バニー)",
      "styleOrTitle": "SS [バニーファイト・デビエーション] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "Dark",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/9866275/854c6f86c1e74445c72b7f476d532303.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4764,
        "dpOrSpeed": 564,
        "atkOrPower": 676,
        "defOrGuts": 554,
        "critOrWit": 666,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "敵全体の闇属性耐性を消し去り、闇弱点を付与するデバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Dark Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Dark",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "闇属性バフや闇属性スタイルに連撃(小)を付与可能 基本衣装の専用スキルでバフ効果を更に上げる"
        },
        {
          "name": "Tactical Sub-Skill (SS東城つかさ(バニー))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "闇属性バフや闇属性スタイルに連撃(小)を付与可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "基本衣装の専用スキルでバフ効果を更に上げる"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-595464",
        "hbr-592870"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "敵全体の闇属性耐性を消し去り、闇弱点を付与するデバッファー — 闇属性バフや闇属性スタイルに連撃(小)を付与可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/603245).",
      "sourceUrl": "https://game8.jp/heavenburnsred/603245"
    },
    {
      "externalId": "game8-hbr-595464",
      "slug": "hbr-595464",
      "nameEn": "Ruka Kayamori (SSレゾナンス ユニゾン)",
      "nameOriginal": "SSレゾナンス茅森月歌(ユニゾン)",
      "styleOrTitle": "SS [The Feel of the Throne] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "Fire",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11601624/6dcfb1bc4c893beb09867c16faf0f953.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4752,
        "dpOrSpeed": 562,
        "atkOrPower": 673,
        "defOrGuts": 552,
        "critOrWit": 663,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "2属性(火と闇)の火力役として活躍",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Fire Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Fire",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "スキル1で自身に心眼を付与できる 専用スキルで弱点をついた時に威力が上昇"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス茅森月歌(ユニゾン))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "スキル1で自身に心眼を付与できる"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "専用スキルで弱点をついた時に威力が上昇"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-592870",
        "hbr-577125"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "2属性(火と闇)の火力役として活躍 — スキル1で自身に心眼を付与できる",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/595464).",
      "sourceUrl": "https://game8.jp/heavenburnsred/595464"
    },
    {
      "externalId": "game8-hbr-592870",
      "slug": "hbr-592870",
      "nameEn": "Kanade Tachibana (Angel Beats!) (SSレゾナンス 天翔ける剣)",
      "nameOriginal": "SSレゾナンス立華かなで(天翔ける剣)",
      "styleOrTitle": "SS [天翔ける剣] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/13053954/870b805bdce67dfcb4fb0639a6925d06.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4740,
        "dpOrSpeed": 560,
        "atkOrPower": 670,
        "defOrGuts": 550,
        "critOrWit": 660,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "DP割合が高いほど専用スキルの威力が上昇する",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "150%まで上限回復可能な自己回復を習得 基本衣装で自身に「心眼」を付与できる"
        },
        {
          "name": "Tactical Sub-Skill (SSレゾナンス立華かなで(天翔ける剣))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "150%まで上限回復可能な自己回復を習得"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "基本衣装で自身に「心眼」を付与できる"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-577125",
        "hbr-548994"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "DP割合が高いほど専用スキルの威力が上昇する — 150%まで上限回復可能な自己回復を習得",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/592870).",
      "sourceUrl": "https://game8.jp/heavenburnsred/592870"
    },
    {
      "externalId": "game8-hbr-577125",
      "slug": "hbr-577125",
      "nameEn": "Charlotta Skopovskaya (SS とこしえ)",
      "nameOriginal": "SSシャルロッタ・スコポフスカヤ(とこしえ)",
      "styleOrTitle": "SS [とこしえの想い] (Tier1)",
      "rarity": "SS",
      "role": "Debuffer",
      "roleColumn": "SUB_DPS",
      "element": "Thunder",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/9049136/28fcf20be56c12eae1612dc4a055fde2.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4728,
        "dpOrSpeed": 558,
        "atkOrPower": 667,
        "defOrGuts": 548,
        "critOrWit": 657,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 80,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "敵の雷耐性を消し雷弱点を付与できるデバッファー",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Thunder Debuffer EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Thunder",
            "Slash",
            "Debuffer"
          ],
          "exactDescription": "どのような場面でも雷属性パーティーの運用が可能となる 脆弱と雷属性ダウンを付与できる"
        },
        {
          "name": "Tactical Sub-Skill (SSシャルロッタ・スコポフスカヤ(とこしえ))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Debuffer Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Debuffer",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "どのような場面でも雷属性パーティーの運用が可能となる"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "脆弱と雷属性ダウンを付与できる"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-548994",
        "hbr-519394"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "敵の雷耐性を消し雷弱点を付与できるデバッファー — どのような場面でも雷属性パーティーの運用が可能となる",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/577125).",
      "sourceUrl": "https://game8.jp/heavenburnsred/577125"
    },
    {
      "externalId": "game8-hbr-548994",
      "slug": "hbr-548994",
      "nameEn": "Miya Kiryu (SS 豊楽)",
      "nameOriginal": "SS桐生美也(豊楽)",
      "styleOrTitle": "SS [豊楽ノ神秘] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/8691854/6d9acfbf3a3887871893cca0339f3e4d.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4716,
        "dpOrSpeed": 556,
        "atkOrPower": 664,
        "defOrGuts": 546,
        "critOrWit": 654,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "専用スキルで防御デバフと脆弱を同時に付与できる",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "SP5で厄付与と追加ターンを獲得できる 3凸で防御力ダウン効果+25%"
        },
        {
          "name": "Tactical Sub-Skill (SS桐生美也(豊楽))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "SP5で厄付与と追加ターンを獲得できる"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "3凸で防御力ダウン効果+25%"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-519394",
        "hbr-507349"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "専用スキルで防御デバフと脆弱を同時に付与できる — SP5で厄付与と追加ターンを獲得できる",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/548994).",
      "sourceUrl": "https://game8.jp/heavenburnsred/548994"
    },
    {
      "externalId": "game8-hbr-519394",
      "slug": "hbr-519394",
      "nameEn": "Fubuki Mikoto (SS 初期)",
      "nameOriginal": "SS命吹雪(初期)",
      "styleOrTitle": "SS [終末なにする？] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "Dark",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/7860694/a8bd6e5edc9ae41700860ebcbc4398b8.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4704,
        "dpOrSpeed": 554,
        "atkOrPower": 661,
        "defOrGuts": 544,
        "critOrWit": 651,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "専用スキルで脆弱と厄(OD中)を付与できる",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Dark Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Dark",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "習得スキルで闇属性デバフも付与可能 初期スキルで全体防御デバフを所持"
        },
        {
          "name": "Tactical Sub-Skill (SS命吹雪(初期))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "習得スキルで闇属性デバフも付与可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "初期スキルで全体防御デバフを所持"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-507349",
        "hbr-491017"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "専用スキルで脆弱と厄(OD中)を付与できる — 習得スキルで闇属性デバフも付与可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/519394).",
      "sourceUrl": "https://game8.jp/heavenburnsred/519394"
    },
    {
      "externalId": "game8-hbr-507349",
      "slug": "hbr-507349",
      "nameEn": "Yunxia Li (Yingxia) (SS 初期)",
      "nameOriginal": "SS李映夏(初期)",
      "styleOrTitle": "SS [我、勇ならざるは将なきに同じ] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/7665029/e550c361d1ba8eb40c6e5d89e84601e9.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4692,
        "dpOrSpeed": 552,
        "atkOrPower": 658,
        "defOrGuts": 542,
        "critOrWit": 648,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "連撃小x5と攻撃力アップ大をSP0以上で付与可能",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "専用スキルはSP0以上で発動可能 3凸でスキル攻撃力アップ+25%"
        },
        {
          "name": "Tactical Sub-Skill (SS李映夏(初期))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "専用スキルはSP0以上で発動可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "3凸でスキル攻撃力アップ+25%"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-491017",
        "hbr-832805"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "連撃小x5と攻撃力アップ大をSP0以上で付与可能 — 専用スキルはSP0以上で発動可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/507349).",
      "sourceUrl": "https://game8.jp/heavenburnsred/507349"
    },
    {
      "externalId": "game8-hbr-491017",
      "slug": "hbr-491017",
      "nameEn": "Kozue Hiiragi (SS 終劇)",
      "nameOriginal": "SS柊木梢(終劇)",
      "styleOrTitle": "SS [終劇のナイトフォール] (Tier1)",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/7351817/e1adc03263b504b637eea4d699ab35fa.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4680,
        "dpOrSpeed": 550,
        "atkOrPower": 655,
        "defOrGuts": 540,
        "critOrWit": 645,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "専用スキルで敵に脆弱を付与できる",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "Ice Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "Ice",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "SP4で敵単体に厄を付与可能 3凸で氷属性スキル攻撃力アップ"
        },
        {
          "name": "Tactical Sub-Skill (SS柊木梢(終劇))",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "SP4で敵単体に厄を付与可能"
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "3凸で氷属性スキル攻撃力アップ"
        }
      ],
      "synergyUnitSlugs": [
        "hbr-832805",
        "hbr-749659"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "専用スキルで敵に脆弱を付与できる — SP4で敵単体に厄を付与可能",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/491017).",
      "sourceUrl": "https://game8.jp/heavenburnsred/491017"
    },
    {
      "externalId": "game8-hbr-832805",
      "slug": "hbr-832805",
      "nameEn": "禁忌のシンセサイズ",
      "nameOriginal": "禁忌のシンセサイズ",
      "styleOrTitle": "SS [禁忌のシンセサイズ] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/13102633/45ef6f365e08dbae29aeefe4d3e939d3.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4668,
        "dpOrSpeed": 548,
        "atkOrPower": 652,
        "defOrGuts": 538,
        "critOrWit": 642,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/832805). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (禁忌のシンセサイズ)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/832805)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-749659",
        "hbr-746397"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/832805).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/832805).",
      "sourceUrl": "https://game8.jp/heavenburnsred/832805"
    },
    {
      "externalId": "game8-hbr-749659",
      "slug": "hbr-749659",
      "nameEn": "魔王に仕えし災禍の魔獣使い",
      "nameOriginal": "魔王に仕えし災禍の魔獣使い",
      "styleOrTitle": "SS [魔王に仕えし災禍の魔獣使い] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12093020/bbf80e15547a204453e3031f48072ddd.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4656,
        "dpOrSpeed": 546,
        "atkOrPower": 649,
        "defOrGuts": 536,
        "critOrWit": 639,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/749659). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (魔王に仕えし災禍の魔獣使い)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/749659)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-746397",
        "hbr-735062"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/749659).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/749659).",
      "sourceUrl": "https://game8.jp/heavenburnsred/749659"
    },
    {
      "externalId": "game8-hbr-746397",
      "slug": "hbr-746397",
      "nameEn": "霧煙る街の名探偵",
      "nameOriginal": "霧煙る街の名探偵",
      "styleOrTitle": "SS [霧煙る街の名探偵] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12037256/c5f85e22e789c2542b0bc04ca4d31a6f.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4644,
        "dpOrSpeed": 544,
        "atkOrPower": 646,
        "defOrGuts": 534,
        "critOrWit": 636,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/746397). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (霧煙る街の名探偵)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/746397)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-735062",
        "hbr-700752"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/746397).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/746397).",
      "sourceUrl": "https://game8.jp/heavenburnsred/746397"
    },
    {
      "externalId": "game8-hbr-735062",
      "slug": "hbr-735062",
      "nameEn": "夜語りのひとしずく",
      "nameOriginal": "夜語りのひとしずく",
      "styleOrTitle": "SS [夜語りのひとしずく] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11932095/c5d3b3c2045e6889f7bdb3180a062577.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4632,
        "dpOrSpeed": 542,
        "atkOrPower": 643,
        "defOrGuts": 532,
        "critOrWit": 633,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/735062). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (夜語りのひとしずく)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/735062)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-700752",
        "hbr-697860"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/735062).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/735062).",
      "sourceUrl": "https://game8.jp/heavenburnsred/735062"
    },
    {
      "externalId": "game8-hbr-700752",
      "slug": "hbr-700752",
      "nameEn": "サンセット・ユートピア",
      "nameOriginal": "サンセット・ユートピア",
      "styleOrTitle": "SS [サンセット・ユートピア] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11502982/274c9763fe2de3539d03207990a0927a.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4620,
        "dpOrSpeed": 540,
        "atkOrPower": 640,
        "defOrGuts": 530,
        "critOrWit": 630,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/700752). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (サンセット・ユートピア)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/700752)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-697860",
        "hbr-687800"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/700752).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/700752).",
      "sourceUrl": "https://game8.jp/heavenburnsred/700752"
    },
    {
      "externalId": "game8-hbr-697860",
      "slug": "hbr-697860",
      "nameEn": "ハピネス・クロマ",
      "nameOriginal": "ハピネス・クロマ",
      "styleOrTitle": "SS [ハピネス・クロマ] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11462877/fc385067e053922ff96a29a121cc86af.jpeg/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4608,
        "dpOrSpeed": 538,
        "atkOrPower": 637,
        "defOrGuts": 528,
        "critOrWit": 627,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/697860). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (ハピネス・クロマ)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/697860)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-687800",
        "hbr-667359"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/697860).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/697860).",
      "sourceUrl": "https://game8.jp/heavenburnsred/697860"
    },
    {
      "externalId": "game8-hbr-687800",
      "slug": "hbr-687800",
      "nameEn": "ゆるりたゆたう湯道楽",
      "nameOriginal": "ゆるりたゆたう湯道楽",
      "styleOrTitle": "SS [ゆるりたゆたう湯道楽] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11364781/b8e966948d32ff9eae62d6877aa70a4d.jpeg/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4596,
        "dpOrSpeed": 536,
        "atkOrPower": 634,
        "defOrGuts": 526,
        "critOrWit": 624,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/687800). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (ゆるりたゆたう湯道楽)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/687800)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-667359",
        "hbr-667354"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/687800).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/687800).",
      "sourceUrl": "https://game8.jp/heavenburnsred/687800"
    },
    {
      "externalId": "game8-hbr-667359",
      "slug": "hbr-667359",
      "nameEn": "エンジェルクライシス",
      "nameOriginal": "エンジェルクライシス",
      "styleOrTitle": "SS [エンジェルクライシス] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11592504/4564a4a23da648fccb513c16b237150a.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4584,
        "dpOrSpeed": 534,
        "atkOrPower": 631,
        "defOrGuts": 524,
        "critOrWit": 621,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/667359). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (エンジェルクライシス)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/667359)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-667354",
        "hbr-663244"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/667359).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/667359).",
      "sourceUrl": "https://game8.jp/heavenburnsred/667359"
    },
    {
      "externalId": "game8-hbr-667354",
      "slug": "hbr-667354",
      "nameEn": "黄昏に咲くスピカ",
      "nameOriginal": "黄昏に咲くスピカ",
      "styleOrTitle": "SS [黄昏に咲くスピカ] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11605631/b448ff496f9749934bee0589267404b3.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4572,
        "dpOrSpeed": 532,
        "atkOrPower": 628,
        "defOrGuts": 522,
        "critOrWit": 618,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/667354). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (黄昏に咲くスピカ)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/667354)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-663244",
        "hbr-656747"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/667354).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/667354).",
      "sourceUrl": "https://game8.jp/heavenburnsred/667354"
    },
    {
      "externalId": "game8-hbr-663244",
      "slug": "hbr-663244",
      "nameEn": "今宵、花明かりの下で",
      "nameOriginal": "今宵、花明かりの下で",
      "styleOrTitle": "SS [今宵、花明かりの下で] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10934946/b95ca40aeb67003f3aa50b10b6fdc9dd.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4560,
        "dpOrSpeed": 530,
        "atkOrPower": 625,
        "defOrGuts": 520,
        "critOrWit": 615,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/663244). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (今宵、花明かりの下で)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/663244)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-656747",
        "hbr-654826"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/663244).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/663244).",
      "sourceUrl": "https://game8.jp/heavenburnsred/663244"
    },
    {
      "externalId": "game8-hbr-656747",
      "slug": "hbr-656747",
      "nameEn": "再耀のカンタービレ",
      "nameOriginal": "再耀のカンタービレ",
      "styleOrTitle": "SS [再耀のカンタービレ] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10787893/dde22100574d80066fc83c0f002542b1.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4548,
        "dpOrSpeed": 528,
        "atkOrPower": 622,
        "defOrGuts": 518,
        "critOrWit": 612,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/656747). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (再耀のカンタービレ)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/656747)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-654826",
        "hbr-652687"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/656747).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/656747).",
      "sourceUrl": "https://game8.jp/heavenburnsred/656747"
    },
    {
      "externalId": "game8-hbr-654826",
      "slug": "hbr-654826",
      "nameEn": "センシティビティ・オーバーフロー",
      "nameOriginal": "センシティビティ・オーバーフロー",
      "styleOrTitle": "SS [センシティビティ・オーバーフロー] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10748535/238fd38a170f23e311b8aa72b425202b.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4536,
        "dpOrSpeed": 526,
        "atkOrPower": 619,
        "defOrGuts": 516,
        "critOrWit": 609,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/654826). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (センシティビティ・オーバーフロー)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/654826)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-652687",
        "hbr-642066"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/654826).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/654826).",
      "sourceUrl": "https://game8.jp/heavenburnsred/654826"
    },
    {
      "externalId": "game8-hbr-652687",
      "slug": "hbr-652687",
      "nameEn": "暁のカタルシス",
      "nameOriginal": "暁のカタルシス",
      "styleOrTitle": "SS [暁のカタルシス] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10699306/b8cbe2c7e38f9cea114db85081dfeec8.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4524,
        "dpOrSpeed": 524,
        "atkOrPower": 616,
        "defOrGuts": 514,
        "critOrWit": 606,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/652687). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (暁のカタルシス)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/652687)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-642066",
        "hbr-640069"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/652687).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/652687).",
      "sourceUrl": "https://game8.jp/heavenburnsred/652687"
    },
    {
      "externalId": "game8-hbr-642066",
      "slug": "hbr-642066",
      "nameEn": "Carnival with You",
      "nameOriginal": "Carnival with You",
      "styleOrTitle": "SS [Carnival with You] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10590857/22b8c03ab455e1691d84d1d138fddc12.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4512,
        "dpOrSpeed": 522,
        "atkOrPower": 613,
        "defOrGuts": 512,
        "critOrWit": 603,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/642066). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (Carnival with You)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/642066)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-640069",
        "hbr-606152"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/642066).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/642066).",
      "sourceUrl": "https://game8.jp/heavenburnsred/642066"
    },
    {
      "externalId": "game8-hbr-640069",
      "slug": "hbr-640069",
      "nameEn": "Magic of Smile",
      "nameOriginal": "Magic of Smile",
      "styleOrTitle": "SS [Magic of Smile] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10552340/e5920a312cf88ff5662a4738e5124d3f.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4500,
        "dpOrSpeed": 520,
        "atkOrPower": 610,
        "defOrGuts": 510,
        "critOrWit": 600,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/640069). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (Magic of Smile)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/640069)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-606152",
        "hbr-600349"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/640069).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/640069).",
      "sourceUrl": "https://game8.jp/heavenburnsred/640069"
    },
    {
      "externalId": "game8-hbr-606152",
      "slug": "hbr-606152",
      "nameEn": "ロリータ・ストイック",
      "nameOriginal": "ロリータ・ストイック",
      "styleOrTitle": "SS [ロリータ・ストイック] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10307617/970e3b5ea5f4810f365bfbf5cef5dca7.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4488,
        "dpOrSpeed": 518,
        "atkOrPower": 607,
        "defOrGuts": 508,
        "critOrWit": 597,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/606152). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (ロリータ・ストイック)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/606152)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-600349",
        "hbr-582607"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/606152).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/606152).",
      "sourceUrl": "https://game8.jp/heavenburnsred/606152"
    },
    {
      "externalId": "game8-hbr-600349",
      "slug": "hbr-600349",
      "nameEn": "ホップ・ステップ・スリップ！",
      "nameOriginal": "ホップ・ステップ・スリップ！",
      "styleOrTitle": "SS [ホップ・ステップ・スリップ！] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10100742/2a37fae5060073cb73881bebfe476339.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4476,
        "dpOrSpeed": 516,
        "atkOrPower": 604,
        "defOrGuts": 506,
        "critOrWit": 594,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/600349). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (ホップ・ステップ・スリップ！)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/600349)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-582607",
        "hbr-563544"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/600349).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/600349).",
      "sourceUrl": "https://game8.jp/heavenburnsred/600349"
    },
    {
      "externalId": "game8-hbr-582607",
      "slug": "hbr-582607",
      "nameEn": "トワイライト・メモリーズ",
      "nameOriginal": "トワイライト・メモリーズ",
      "styleOrTitle": "SS [トワイライト・メモリーズ] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10059093/48b95165218d69fa6da94ab38f57f2aa.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4464,
        "dpOrSpeed": 514,
        "atkOrPower": 601,
        "defOrGuts": 504,
        "critOrWit": 591,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/582607). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (トワイライト・メモリーズ)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/582607)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-563544",
        "hbr-544799"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/582607).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/582607).",
      "sourceUrl": "https://game8.jp/heavenburnsred/582607"
    },
    {
      "externalId": "game8-hbr-563544",
      "slug": "hbr-563544",
      "nameEn": "いざなうつゆくさ",
      "nameOriginal": "いざなうつゆくさ",
      "styleOrTitle": "SS [いざなうつゆくさ] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10172298/fd4b1e9e1786e24262983acc1140ee08.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4452,
        "dpOrSpeed": 512,
        "atkOrPower": 598,
        "defOrGuts": 502,
        "critOrWit": 588,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/563544). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (いざなうつゆくさ)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/563544)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-544799",
        "hbr-525186"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/563544).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/563544).",
      "sourceUrl": "https://game8.jp/heavenburnsred/563544"
    },
    {
      "externalId": "game8-hbr-544799",
      "slug": "hbr-544799",
      "nameEn": "シークレットサービス・サイレンス",
      "nameOriginal": "シークレットサービス・サイレンス",
      "styleOrTitle": "SS [シークレットサービス・サイレンス] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10204127/4e8cf4c60cdd0194e8507c69dea49865.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4440,
        "dpOrSpeed": 510,
        "atkOrPower": 595,
        "defOrGuts": 500,
        "critOrWit": 585,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/544799). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (シークレットサービス・サイレンス)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/544799)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-525186",
        "hbr-521565"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/544799).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/544799).",
      "sourceUrl": "https://game8.jp/heavenburnsred/544799"
    },
    {
      "externalId": "game8-hbr-525186",
      "slug": "hbr-525186",
      "nameEn": "心、躍るFuel",
      "nameOriginal": "心、躍るFuel",
      "styleOrTitle": "SS [心、躍るFuel] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10227632/1e43fce06c75492444d0d4d4a6eb5bd1.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4428,
        "dpOrSpeed": 508,
        "atkOrPower": 592,
        "defOrGuts": 498,
        "critOrWit": 582,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/525186). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (心、躍るFuel)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/525186)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-521565",
        "hbr-517816"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/525186).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/525186).",
      "sourceUrl": "https://game8.jp/heavenburnsred/525186"
    },
    {
      "externalId": "game8-hbr-521565",
      "slug": "hbr-521565",
      "nameEn": "アサシン忍法大繁盛",
      "nameOriginal": "アサシン忍法大繁盛",
      "styleOrTitle": "SS [アサシン忍法大繁盛] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10125232/e4ce712dbcf3d7d930f40aa70720de99.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4416,
        "dpOrSpeed": 506,
        "atkOrPower": 589,
        "defOrGuts": 496,
        "critOrWit": 579,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/521565). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (アサシン忍法大繁盛)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/521565)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-517816",
        "hbr-517815"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/521565).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/521565).",
      "sourceUrl": "https://game8.jp/heavenburnsred/521565"
    },
    {
      "externalId": "game8-hbr-517816",
      "slug": "hbr-517816",
      "nameEn": "破られたアンニュイ",
      "nameOriginal": "破られたアンニュイ",
      "styleOrTitle": "SS [破られたアンニュイ] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10222012/c1362a50b8cad6951e8a3fff4094dc8f.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4404,
        "dpOrSpeed": 504,
        "atkOrPower": 586,
        "defOrGuts": 494,
        "critOrWit": 576,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/517816). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (破られたアンニュイ)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/517816)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-517815",
        "hbr-487220"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/517816).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/517816).",
      "sourceUrl": "https://game8.jp/heavenburnsred/517816"
    },
    {
      "externalId": "game8-hbr-517815",
      "slug": "hbr-517815",
      "nameEn": "ピンチで最高",
      "nameOriginal": "ピンチで最高",
      "styleOrTitle": "SS [ピンチで最高] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10100743/1d9c28a69f2f1d42e4d2ddb487ac6c59.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4392,
        "dpOrSpeed": 502,
        "atkOrPower": 583,
        "defOrGuts": 492,
        "critOrWit": 573,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/517815). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (ピンチで最高)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/517815)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-487220",
        "hbr-813761"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/517815).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/517815).",
      "sourceUrl": "https://game8.jp/heavenburnsred/517815"
    },
    {
      "externalId": "game8-hbr-487220",
      "slug": "hbr-487220",
      "nameEn": "撃砕の無彩色",
      "nameOriginal": "撃砕の無彩色",
      "styleOrTitle": "SS [撃砕の無彩色] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11679237/d5e2106633f5459f3d93bf4e8bc74750.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4380,
        "dpOrSpeed": 500,
        "atkOrPower": 580,
        "defOrGuts": 490,
        "critOrWit": 570,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/487220). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (撃砕の無彩色)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/487220)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-813761",
        "hbr-724680"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/487220).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/487220).",
      "sourceUrl": "https://game8.jp/heavenburnsred/487220"
    },
    {
      "externalId": "game8-hbr-813761",
      "slug": "hbr-813761",
      "nameEn": "スイム・オールアウト",
      "nameOriginal": "スイム・オールアウト",
      "styleOrTitle": "SS [スイム・オールアウト] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12941242/1123c0b0fc8c3144d0891c1d3a52d1f6.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4368,
        "dpOrSpeed": 498,
        "atkOrPower": 577,
        "defOrGuts": 488,
        "critOrWit": 567,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/813761). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (スイム・オールアウト)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/813761)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-724680",
        "hbr-708962"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/813761).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/813761).",
      "sourceUrl": "https://game8.jp/heavenburnsred/813761"
    },
    {
      "externalId": "game8-hbr-724680",
      "slug": "hbr-724680",
      "nameEn": "白熱！勝利を呼ぶ一球入魂！",
      "nameOriginal": "白熱！勝利を呼ぶ一球入魂！",
      "styleOrTitle": "SS [白熱！勝利を呼ぶ一球入魂！] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11827667/ba0efffe7e1cfc61ff5491299b669821.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4356,
        "dpOrSpeed": 496,
        "atkOrPower": 574,
        "defOrGuts": 486,
        "critOrWit": 564,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/724680). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (白熱！勝利を呼ぶ一球入魂！)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/724680)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-708962",
        "hbr-705732"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/724680).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/724680).",
      "sourceUrl": "https://game8.jp/heavenburnsred/724680"
    },
    {
      "externalId": "game8-hbr-708962",
      "slug": "hbr-708962",
      "nameEn": "汐風に誘われて",
      "nameOriginal": "汐風に誘われて",
      "styleOrTitle": "SS [汐風に誘われて] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11626529/bbbd734b991846825281d8382aeadd08.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4344,
        "dpOrSpeed": 494,
        "atkOrPower": 571,
        "defOrGuts": 484,
        "critOrWit": 561,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/708962). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (汐風に誘われて)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/708962)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-705732",
        "hbr-692832"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/708962).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/708962).",
      "sourceUrl": "https://game8.jp/heavenburnsred/708962"
    },
    {
      "externalId": "game8-hbr-705732",
      "slug": "hbr-705732",
      "nameEn": "さざなみ・フィールグッド",
      "nameOriginal": "さざなみ・フィールグッド",
      "styleOrTitle": "SS [さざなみ・フィールグッド] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11550568/56e046920d1d8106a5afdbc68bbd1e32.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4332,
        "dpOrSpeed": 492,
        "atkOrPower": 568,
        "defOrGuts": 482,
        "critOrWit": 558,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/705732). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (さざなみ・フィールグッド)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/705732)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-692832",
        "hbr-680864"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/705732).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/705732).",
      "sourceUrl": "https://game8.jp/heavenburnsred/705732"
    },
    {
      "externalId": "game8-hbr-692832",
      "slug": "hbr-692832",
      "nameEn": "悪を討つヒロイックアクション",
      "nameOriginal": "悪を討つヒロイックアクション",
      "styleOrTitle": "SS [悪を討つヒロイックアクション] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11405770/6b1633eac7ead4f29092777b46ddddc0.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4320,
        "dpOrSpeed": 490,
        "atkOrPower": 565,
        "defOrGuts": 480,
        "critOrWit": 555,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/692832). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (悪を討つヒロイックアクション)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/692832)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-680864",
        "hbr-659767"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/692832).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/692832).",
      "sourceUrl": "https://game8.jp/heavenburnsred/692832"
    },
    {
      "externalId": "game8-hbr-680864",
      "slug": "hbr-680864",
      "nameEn": "謳うそよ風の向かう先",
      "nameOriginal": "謳うそよ風の向かう先",
      "styleOrTitle": "SS [謳うそよ風の向かう先] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11222782/5ffce608e8ee42871585104d5d560b2a.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4308,
        "dpOrSpeed": 488,
        "atkOrPower": 562,
        "defOrGuts": 478,
        "critOrWit": 552,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/680864). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (謳うそよ風の向かう先)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/680864)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-659767",
        "hbr-640070"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/680864).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/680864).",
      "sourceUrl": "https://game8.jp/heavenburnsred/680864"
    },
    {
      "externalId": "game8-hbr-659767",
      "slug": "hbr-659767",
      "nameEn": "Stir Soul Song",
      "nameOriginal": "Stir Soul Song",
      "styleOrTitle": "SS [Stir Soul Song] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/13053962/7d3b23c0aff503e5cb90bec85ee4bef7.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4296,
        "dpOrSpeed": 486,
        "atkOrPower": 559,
        "defOrGuts": 476,
        "critOrWit": 549,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/659767). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (Stir Soul Song)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/659767)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-640070",
        "hbr-628231"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/659767).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/659767).",
      "sourceUrl": "https://game8.jp/heavenburnsred/659767"
    },
    {
      "externalId": "game8-hbr-640070",
      "slug": "hbr-640070",
      "nameEn": "満艦飾の花乙女",
      "nameOriginal": "満艦飾の花乙女",
      "styleOrTitle": "SS [満艦飾の花乙女] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10552341/655a63d6b2915a664b4b14f49a4bcb7f.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4284,
        "dpOrSpeed": 484,
        "atkOrPower": 556,
        "defOrGuts": 474,
        "critOrWit": 546,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/640070). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (満艦飾の花乙女)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/640070)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-628231",
        "hbr-622825"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/640070).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/640070).",
      "sourceUrl": "https://game8.jp/heavenburnsred/640070"
    },
    {
      "externalId": "game8-hbr-628231",
      "slug": "hbr-628231",
      "nameEn": "盛夏のシャーク・ザ・リッパー",
      "nameOriginal": "盛夏のシャーク・ザ・リッパー",
      "styleOrTitle": "SS [盛夏のシャーク・ザ・リッパー] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10272969/326bfc0e92a98f1ec9fb4219a9a039ff.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4272,
        "dpOrSpeed": 482,
        "atkOrPower": 553,
        "defOrGuts": 472,
        "critOrWit": 543,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/628231). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (盛夏のシャーク・ザ・リッパー)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/628231)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-622825",
        "hbr-594734"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/628231).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/628231).",
      "sourceUrl": "https://game8.jp/heavenburnsred/628231"
    },
    {
      "externalId": "game8-hbr-622825",
      "slug": "hbr-622825",
      "nameEn": "向日葵",
      "nameOriginal": "向日葵",
      "styleOrTitle": "SS [向日葵] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10209990/770ced45750b48c1d60641affb9aba40.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4260,
        "dpOrSpeed": 480,
        "atkOrPower": 550,
        "defOrGuts": 470,
        "critOrWit": 540,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/622825). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (向日葵)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/622825)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-594734",
        "hbr-585689"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/622825).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/622825).",
      "sourceUrl": "https://game8.jp/heavenburnsred/622825"
    },
    {
      "externalId": "game8-hbr-594734",
      "slug": "hbr-594734",
      "nameEn": "君を待つ紅玉",
      "nameOriginal": "君を待つ紅玉",
      "styleOrTitle": "SS [君を待つ紅玉] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10116717/2492c3682b0893eb3b50741a1f96f648.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4248,
        "dpOrSpeed": 478,
        "atkOrPower": 547,
        "defOrGuts": 468,
        "critOrWit": 537,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/594734). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (君を待つ紅玉)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/594734)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-585689",
        "hbr-491018"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/594734).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/594734).",
      "sourceUrl": "https://game8.jp/heavenburnsred/594734"
    },
    {
      "externalId": "game8-hbr-585689",
      "slug": "hbr-585689",
      "nameEn": "ぐうたらパジャマナイト",
      "nameOriginal": "ぐうたらパジャマナイト",
      "styleOrTitle": "SS [ぐうたらパジャマナイト] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10227179/7d5d39c7bd6a6b133419a6b4fa36d960.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4236,
        "dpOrSpeed": 476,
        "atkOrPower": 544,
        "defOrGuts": 466,
        "critOrWit": 534,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/585689). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (ぐうたらパジャマナイト)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/585689)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-491018",
        "hbr-484626"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/585689).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/585689).",
      "sourceUrl": "https://game8.jp/heavenburnsred/585689"
    },
    {
      "externalId": "game8-hbr-491018",
      "slug": "hbr-491018",
      "nameEn": "宙の探究、星の眩耀",
      "nameOriginal": "宙の探究、星の眩耀",
      "styleOrTitle": "SS [宙の探究、星の眩耀] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10125231/b2851325e5c71194fadd8f6e7cd7cd54.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4224,
        "dpOrSpeed": 474,
        "atkOrPower": 541,
        "defOrGuts": 464,
        "critOrWit": 531,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/491018). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (宙の探究、星の眩耀)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/491018)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-484626",
        "hbr-469574"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/491018).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/491018).",
      "sourceUrl": "https://game8.jp/heavenburnsred/491018"
    },
    {
      "externalId": "game8-hbr-484626",
      "slug": "hbr-484626",
      "nameEn": "星林遣らずの雨",
      "nameOriginal": "星林遣らずの雨",
      "styleOrTitle": "SS [星林遣らずの雨] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10396552/174681e7a02ca9314d148ecbc808dbb0.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4212,
        "dpOrSpeed": 472,
        "atkOrPower": 538,
        "defOrGuts": 462,
        "critOrWit": 528,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/484626). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (星林遣らずの雨)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/484626)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-469574",
        "hbr-438518"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/484626).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/484626).",
      "sourceUrl": "https://game8.jp/heavenburnsred/484626"
    },
    {
      "externalId": "game8-hbr-469574",
      "slug": "hbr-469574",
      "nameEn": "真夏のPrayer",
      "nameOriginal": "真夏のPrayer",
      "styleOrTitle": "SS [真夏のPrayer] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10274244/25f13aae11dc791908512642e7d3d027.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4200,
        "dpOrSpeed": 470,
        "atkOrPower": 535,
        "defOrGuts": 460,
        "critOrWit": 525,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/469574). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (真夏のPrayer)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/469574)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-438518",
        "hbr-426210"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/469574).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/469574).",
      "sourceUrl": "https://game8.jp/heavenburnsred/469574"
    },
    {
      "externalId": "game8-hbr-438518",
      "slug": "hbr-438518",
      "nameEn": "甘美のMuzzle",
      "nameOriginal": "甘美のMuzzle",
      "styleOrTitle": "SS [甘美のMuzzle] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10414634/7647342a354129cf59dab0bbb84bcf88.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4188,
        "dpOrSpeed": 468,
        "atkOrPower": 532,
        "defOrGuts": 458,
        "critOrWit": 522,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/438518). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (甘美のMuzzle)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/438518)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-426210",
        "hbr-426230"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/438518).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/438518).",
      "sourceUrl": "https://game8.jp/heavenburnsred/438518"
    },
    {
      "externalId": "game8-hbr-426210",
      "slug": "hbr-426210",
      "nameEn": "生者のホメオスタシス",
      "nameOriginal": "生者のホメオスタシス",
      "styleOrTitle": "SS [生者のホメオスタシス] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11679221/66c05698f837c04e131346f605f555bc.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4176,
        "dpOrSpeed": 466,
        "atkOrPower": 529,
        "defOrGuts": 456,
        "critOrWit": 519,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/426210). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (生者のホメオスタシス)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/426210)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-426230",
        "hbr-816691"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/426210).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/426210).",
      "sourceUrl": "https://game8.jp/heavenburnsred/426210"
    },
    {
      "externalId": "game8-hbr-426230",
      "slug": "hbr-426230",
      "nameEn": "星の海、たゆたうフォーチュンテラー",
      "nameOriginal": "星の海、たゆたうフォーチュンテラー",
      "styleOrTitle": "SS [星の海、たゆたうフォーチュンテラー] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10568088/c7e3a7a6d430f24eca9befd35aa861f9.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4164,
        "dpOrSpeed": 464,
        "atkOrPower": 526,
        "defOrGuts": 454,
        "critOrWit": 516,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/426230). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (星の海、たゆたうフォーチュンテラー)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/426230)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-816691",
        "hbr-813776"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/426230).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/426230).",
      "sourceUrl": "https://game8.jp/heavenburnsred/426230"
    },
    {
      "externalId": "game8-hbr-816691",
      "slug": "hbr-816691",
      "nameEn": "友への探究心",
      "nameOriginal": "友への探究心",
      "styleOrTitle": "SS [友への探究心] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/13014415/57c79e03d756b93b4d1af8562fd71c41.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4152,
        "dpOrSpeed": 462,
        "atkOrPower": 523,
        "defOrGuts": 452,
        "critOrWit": 513,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/816691). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (友への探究心)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/816691)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-813776",
        "hbr-793216"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/816691).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/816691).",
      "sourceUrl": "https://game8.jp/heavenburnsred/816691"
    },
    {
      "externalId": "game8-hbr-813776",
      "slug": "hbr-813776",
      "nameEn": "Spot of Tea",
      "nameOriginal": "Spot of Tea",
      "styleOrTitle": "SS [Spot of Tea] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12941241/2c830954ba3ace40966a229b2f50606c.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4140,
        "dpOrSpeed": 460,
        "atkOrPower": 520,
        "defOrGuts": 450,
        "critOrWit": 510,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/813776). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (Spot of Tea)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/813776)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-793216",
        "hbr-769411"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/813776).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/813776).",
      "sourceUrl": "https://game8.jp/heavenburnsred/813776"
    },
    {
      "externalId": "game8-hbr-793216",
      "slug": "hbr-793216",
      "nameEn": "ハオチー♪満腹桃源郷",
      "nameOriginal": "ハオチー♪満腹桃源郷",
      "styleOrTitle": "SS [ハオチー♪満腹桃源郷] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12676781/9db9bff9cd79bb91ac6b2b6df2dad635.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4128,
        "dpOrSpeed": 458,
        "atkOrPower": 517,
        "defOrGuts": 448,
        "critOrWit": 507,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/793216). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (ハオチー♪満腹桃源郷)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/793216)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-769411",
        "hbr-769410"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/793216).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/793216).",
      "sourceUrl": "https://game8.jp/heavenburnsred/793216"
    },
    {
      "externalId": "game8-hbr-769411",
      "slug": "hbr-769411",
      "nameEn": "ドルチェ・ベネディツィオーネ",
      "nameOriginal": "ドルチェ・ベネディツィオーネ",
      "styleOrTitle": "SS [ドルチェ・ベネディツィオーネ] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12390669/5c2f564afa794394f1e4d2096bc8341b.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4116,
        "dpOrSpeed": 456,
        "atkOrPower": 514,
        "defOrGuts": 446,
        "critOrWit": 504,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/769411). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (ドルチェ・ベネディツィオーネ)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/769411)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-769410",
        "hbr-764362"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/769411).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/769411).",
      "sourceUrl": "https://game8.jp/heavenburnsred/769411"
    },
    {
      "externalId": "game8-hbr-769410",
      "slug": "hbr-769410",
      "nameEn": "A Taste of Victory！",
      "nameOriginal": "A Taste of Victory！",
      "styleOrTitle": "SS [A Taste of Victory！] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12390670/88d8513952a945253e25cb9ebc335cc9.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4104,
        "dpOrSpeed": 454,
        "atkOrPower": 511,
        "defOrGuts": 444,
        "critOrWit": 501,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/769410). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (A Taste of Victory！)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/769410)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-764362",
        "hbr-721625"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/769410).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/769410).",
      "sourceUrl": "https://game8.jp/heavenburnsred/769410"
    },
    {
      "externalId": "game8-hbr-764362",
      "slug": "hbr-764362",
      "nameEn": "孤高のロンリネス",
      "nameOriginal": "孤高のロンリネス",
      "styleOrTitle": "SS [孤高のロンリネス] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12357889/81ff0d6e80e466d74c9153e7b36099f4.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4092,
        "dpOrSpeed": 452,
        "atkOrPower": 508,
        "defOrGuts": 442,
        "critOrWit": 498,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/764362). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (孤高のロンリネス)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/764362)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-721625",
        "hbr-714989"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/764362).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/764362).",
      "sourceUrl": "https://game8.jp/heavenburnsred/764362"
    },
    {
      "externalId": "game8-hbr-721625",
      "slug": "hbr-721625",
      "nameEn": "捧ぐ愛の晩餐",
      "nameOriginal": "捧ぐ愛の晩餐",
      "styleOrTitle": "SS [捧ぐ愛の晩餐] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11790940/b904da3a1cbc801c558363b418e686e4.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4080,
        "dpOrSpeed": 450,
        "atkOrPower": 505,
        "defOrGuts": 440,
        "critOrWit": 495,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/721625). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (捧ぐ愛の晩餐)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/721625)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-714989",
        "hbr-700751"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/721625).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/721625).",
      "sourceUrl": "https://game8.jp/heavenburnsred/721625"
    },
    {
      "externalId": "game8-hbr-714989",
      "slug": "hbr-714989",
      "nameEn": "歓待のアンナプールナ",
      "nameOriginal": "歓待のアンナプールナ",
      "styleOrTitle": "SS [歓待のアンナプールナ] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11741117/ed74020b908da7dc075ad39d3b0a96c7.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4068,
        "dpOrSpeed": 448,
        "atkOrPower": 502,
        "defOrGuts": 438,
        "critOrWit": 492,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/714989). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (歓待のアンナプールナ)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/714989)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-700751",
        "hbr-659771"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/714989).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/714989).",
      "sourceUrl": "https://game8.jp/heavenburnsred/714989"
    },
    {
      "externalId": "game8-hbr-700751",
      "slug": "hbr-700751",
      "nameEn": "プールサイド・モーメント",
      "nameOriginal": "プールサイド・モーメント",
      "styleOrTitle": "SS [プールサイド・モーメント] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11502980/01744f87736c1d5bab88c3f3ec6d9074.jpeg/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4056,
        "dpOrSpeed": 446,
        "atkOrPower": 499,
        "defOrGuts": 436,
        "critOrWit": 489,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/700751). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (プールサイド・モーメント)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/700751)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-659771",
        "hbr-615278"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/700751).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/700751).",
      "sourceUrl": "https://game8.jp/heavenburnsred/700751"
    },
    {
      "externalId": "game8-hbr-659771",
      "slug": "hbr-659771",
      "nameEn": "Dreamlike Days",
      "nameOriginal": "Dreamlike Days",
      "styleOrTitle": "SS [Dreamlike Days] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/13053965/f70628e8ea5f02c4cf4d9d84892113c6.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4044,
        "dpOrSpeed": 444,
        "atkOrPower": 496,
        "defOrGuts": 434,
        "critOrWit": 486,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/659771). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (Dreamlike Days)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/659771)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-615278",
        "hbr-585101"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/659771).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/659771).",
      "sourceUrl": "https://game8.jp/heavenburnsred/659771"
    },
    {
      "externalId": "game8-hbr-615278",
      "slug": "hbr-615278",
      "nameEn": "清廉なるニヴェースタ",
      "nameOriginal": "清廉なるニヴェースタ",
      "styleOrTitle": "SS [清廉なるニヴェースタ] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10133823/b9bf7c1be87c232646084cb88bd1ba24.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4032,
        "dpOrSpeed": 442,
        "atkOrPower": 493,
        "defOrGuts": 432,
        "critOrWit": 483,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/615278). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (清廉なるニヴェースタ)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/615278)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-585101",
        "hbr-506717"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/615278).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/615278).",
      "sourceUrl": "https://game8.jp/heavenburnsred/615278"
    },
    {
      "externalId": "game8-hbr-585101",
      "slug": "hbr-585101",
      "nameEn": "キララ・究極のアイドル",
      "nameOriginal": "キララ・究極のアイドル",
      "styleOrTitle": "SS [キララ・究極のアイドル] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10469345/8a30233a1a7998dbc4c243c4b8eac134.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4020,
        "dpOrSpeed": 440,
        "atkOrPower": 490,
        "defOrGuts": 430,
        "critOrWit": 480,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/585101). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (キララ・究極のアイドル)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/585101)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-506717",
        "hbr-506307"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/585101).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/585101).",
      "sourceUrl": "https://game8.jp/heavenburnsred/585101"
    },
    {
      "externalId": "game8-hbr-506717",
      "slug": "hbr-506717",
      "nameEn": "対決！！エア・ステージ",
      "nameOriginal": "対決！！エア・ステージ",
      "styleOrTitle": "SS [対決！！エア・ステージ] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10351134/682df3583c10f61157e3bf123d163e4e.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4008,
        "dpOrSpeed": 438,
        "atkOrPower": 487,
        "defOrGuts": 428,
        "critOrWit": 477,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/506717). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (対決！！エア・ステージ)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/506717)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-506307",
        "hbr-493459"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/506717).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/506717).",
      "sourceUrl": "https://game8.jp/heavenburnsred/506717"
    },
    {
      "externalId": "game8-hbr-506307",
      "slug": "hbr-506307",
      "nameEn": "激突！！エア・ベース",
      "nameOriginal": "激突！！エア・ベース",
      "styleOrTitle": "SS [激突！！エア・ベース] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10341811/7529516441da369aea3189c67dd0ce8f.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 3996,
        "dpOrSpeed": 436,
        "atkOrPower": 484,
        "defOrGuts": 426,
        "critOrWit": 474,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/506307). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (激突！！エア・ベース)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/506307)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-493459",
        "hbr-480767"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/506307).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/506307).",
      "sourceUrl": "https://game8.jp/heavenburnsred/506307"
    },
    {
      "externalId": "game8-hbr-493459",
      "slug": "hbr-493459",
      "nameEn": "Realize Your Mind",
      "nameOriginal": "Realize Your Mind",
      "styleOrTitle": "SS [Realize Your Mind] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11679235/000ac82930f241e884bc0b8bf37e5e2b.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 3984,
        "dpOrSpeed": 434,
        "atkOrPower": 481,
        "defOrGuts": 424,
        "critOrWit": 471,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/493459). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (Realize Your Mind)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/493459)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-480767",
        "hbr-463894"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/493459).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/493459).",
      "sourceUrl": "https://game8.jp/heavenburnsred/493459"
    },
    {
      "externalId": "game8-hbr-480767",
      "slug": "hbr-480767",
      "nameEn": "君のUnisono",
      "nameOriginal": "君のUnisono",
      "styleOrTitle": "SS [君のUnisono] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11679232/aefd07fc8ee6e307daecc91c8f3f8c89.webp/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 3972,
        "dpOrSpeed": 432,
        "atkOrPower": 478,
        "defOrGuts": 422,
        "critOrWit": 468,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/480767). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (君のUnisono)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/480767)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-463894",
        "hbr-457125"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/480767).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/480767).",
      "sourceUrl": "https://game8.jp/heavenburnsred/480767"
    },
    {
      "externalId": "game8-hbr-463894",
      "slug": "hbr-463894",
      "nameEn": "果てなき慈愛の守護者",
      "nameOriginal": "果てなき慈愛の守護者",
      "styleOrTitle": "SS [果てなき慈愛の守護者] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10433436/33eab3febc9885bc5aec73bdf6174639.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 3960,
        "dpOrSpeed": 430,
        "atkOrPower": 475,
        "defOrGuts": 420,
        "critOrWit": 465,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/463894). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (果てなき慈愛の守護者)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/463894)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-457125",
        "hbr-426197"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/463894).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/463894).",
      "sourceUrl": "https://game8.jp/heavenburnsred/463894"
    },
    {
      "externalId": "game8-hbr-457125",
      "slug": "hbr-457125",
      "nameEn": "エボリューションな感受性",
      "nameOriginal": "エボリューションな感受性",
      "styleOrTitle": "SS [エボリューションな感受性] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11015270/dc4291e317aed7dd3c5b8c4c835928b5.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 3948,
        "dpOrSpeed": 428,
        "atkOrPower": 472,
        "defOrGuts": 418,
        "critOrWit": 462,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/457125). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (エボリューションな感受性)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/457125)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-426197",
        "hbr-803495"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/457125).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/457125).",
      "sourceUrl": "https://game8.jp/heavenburnsred/457125"
    },
    {
      "externalId": "game8-hbr-426197",
      "slug": "hbr-426197",
      "nameEn": "メメント・モリの美少女",
      "nameOriginal": "メメント・モリの美少女",
      "styleOrTitle": "SS [メメント・モリの美少女] ( (Buffer))",
      "rarity": "SS",
      "role": "Buffer / Admiral",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10357486/81874d1ab721d41489af196b8bf31ad3.png/show",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 3936,
        "dpOrSpeed": 426,
        "atkOrPower": 469,
        "defOrGuts": 416,
        "critOrWit": 459,
        "burstCeilingScore": 82,
        "bufferCeilingScore": 99,
        "sustainScore": 78,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": " Buffer SS Style",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP",
          "multiplierSummary": "None Buffer / Admiral EX",
          "hitCount": 5,
          "buffCategoryTags": [
            "None",
            "Slash",
            "Buffer / Admiral"
          ],
          "exactDescription": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/426197). High SP efficiency and multiplicative stacking in Overdrive turns."
        },
        {
          "name": "Tactical Sub-Skill (メメント・モリの美少女)",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Buffer / Admiral Support / Setup",
          "hitCount": 3,
          "buffCategoryTags": [
            "Buffer / Admiral",
            "Overdrive Gauge"
          ],
          "exactDescription": "Strong Limit Break scaling (LB1 +10% SP / LB3 passive unlock)."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Flash / Vanguard (+SP)",
          "effect": "Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/426197)."
        },
        {
          "unlockRank": "LB3",
          "name": "High-Order Resonance",
          "effect": "High SP efficiency and multiplicative stacking in Overdrive turns."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803495",
        "hbr-797590"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": " Buffer SS Style — Ranked  in the Game8 Heaven Burns Red Buffer matrix (https://game8.jp/heavenburnsred/426197).",
      "longevityNote": "Verified on Game8 JP HBR Tier List (https://game8.jp/heavenburnsred/426197).",
      "sourceUrl": "https://game8.jp/heavenburnsred/426197"
    }
  ],
  "equipments": [
    {
      "externalId": "game8-hbr-acc-1",
      "slug": "hbr-acc-1",
      "nameEn": "Abyss Ring +6 (Dark Skill ATK +10%) (アビスリング)",
      "category": "Accessory / Orb",
      "subType": "6★ Endgame Accessory",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/12907571/39b31f9f211f7ae6eaa5845420928ea8.webp/show",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "6★",
        "Effect": "【効果】 自身の闇属性のスキル攻撃力+10％、力・器用さ+37~55(もう片方が42)(体力／精神／知性／運から1種)+10 【入手場所】 夢幻の螺旋"
      },
      "effectSummary": "【効果】 自身の闇属性のスキル攻撃力+10％、力・器用さ+37~55(もう片方が42)(体力／精神／知性／運から1種)+10 【入手場所】 夢幻の螺旋",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-2",
      "slug": "hbr-acc-2",
      "nameEn": "6★ Accessory: ルミナスリング (ルミナスリング)",
      "category": "Accessory / Orb",
      "subType": "6★ Endgame Accessory",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/12907569/1e6313252e032e7753c7878f033f4906.webp/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "6★",
        "Effect": "【効果】 自身の光属性のスキル攻撃力+10％、力・器用さ+37~55(もう片方が42)(体力／精神／知性／運から1種)+10 【入手場所】 夢幻の螺旋"
      },
      "effectSummary": "【効果】 自身の光属性のスキル攻撃力+10％、力・器用さ+37~55(もう片方が42)(体力／精神／知性／運から1種)+10 【入手場所】 夢幻の螺旋",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-3",
      "slug": "hbr-acc-3",
      "nameEn": "6★ Accessory: フロストリング (フロストリング)",
      "category": "Accessory / Orb",
      "subType": "6★ Endgame Accessory",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/12907572/87c0a14bfec883d92e65c4b5e8b51601.webp/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "6★",
        "Effect": "【効果】 自身の氷属性のスキル攻撃力+10％、力・器用さ+37~55(もう片方が42)(体力／精神／知性／運から1種)+10 【入手場所】 夢幻の螺旋"
      },
      "effectSummary": "【効果】 自身の氷属性のスキル攻撃力+10％、力・器用さ+37~55(もう片方が42)(体力／精神／知性／運から1種)+10 【入手場所】 夢幻の螺旋",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-4",
      "slug": "hbr-acc-4",
      "nameEn": "6★ Accessory: インフェルノリング (インフェルノリング)",
      "category": "Accessory / Orb",
      "subType": "6★ Endgame Accessory",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/12907570/efd03f44f23fe40451c97197ccf05278.webp/show",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "6★",
        "Effect": "【効果】 自身の火属性のスキル攻撃力+10％、力・器用さ+37~55(もう片方が42)(体力／精神／知性／運から1種)+10 【入手場所】 夢幻の螺旋"
      },
      "effectSummary": "【効果】 自身の火属性のスキル攻撃力+10％、力・器用さ+37~55(もう片方が42)(体力／精神／知性／運から1種)+10 【入手場所】 夢幻の螺旋",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-5",
      "slug": "hbr-acc-5",
      "nameEn": "6★ Accessory: ボルトリング (ボルトリング)",
      "category": "Accessory / Orb",
      "subType": "6★ Endgame Accessory",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/11792256/527a8a5279f974f5ad4fbf64fc45da9b.webp/show",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "6★",
        "Effect": "【効果】 自身の雷属性のスキル攻撃力+10％、力・器用さ+37~55(もう片方が42)(体力／精神／知性／運から1種)+10 【入手場所】 夢幻の螺旋"
      },
      "effectSummary": "【効果】 自身の雷属性のスキル攻撃力+10％、力・器用さ+37~55(もう片方が42)(体力／精神／知性／運から1種)+10 【入手場所】 夢幻の螺旋",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-6",
      "slug": "hbr-acc-6",
      "nameEn": "6★ Accessory: 雷のリング（無印～+4） (雷のリング（無印～+4）)",
      "category": "Accessory / Orb",
      "subType": "6★ Endgame Accessory",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/7010193/ee2a40b17907dd4e8296061823caa0bd.png/show",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "6★",
        "Effect": "【効果】 自身の雷属性のスキル攻撃力+（4/5/6/8/10）％、力・器用さ+37 【入手場所】 雷の回廊"
      },
      "effectSummary": "【効果】 自身の雷属性のスキル攻撃力+（4/5/6/8/10）％、力・器用さ+37 【入手場所】 雷の回廊",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-7",
      "slug": "hbr-acc-7",
      "nameEn": "6★ Accessory: 闇のリング（無印～+4） (闇のリング（無印～+4）)",
      "category": "Accessory / Orb",
      "subType": "6★ Endgame Accessory",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6930665/0bbd9d550e80db8e66ac95e172693279.png/show",
      "tierRank": "SSS",
      "score": 9.6,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "6★",
        "Effect": "【効果】 自身の闇属性のスキル攻撃力+（4/5/6/8/10）％、力・器用さ+37 【入手場所】 闇の回廊"
      },
      "effectSummary": "【効果】 自身の闇属性のスキル攻撃力+（4/5/6/8/10）％、力・器用さ+37 【入手場所】 闇の回廊",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-8",
      "slug": "hbr-acc-8",
      "nameEn": "6★ Accessory: 光のリング（無印〜+4） (光のリング（無印〜+4）)",
      "category": "Accessory / Orb",
      "subType": "6★ Endgame Accessory",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6830330/21a4e103c4b4ffbd25ba639147a4abea.png/show",
      "tierRank": "SSS",
      "score": 9.6,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "6★",
        "Effect": "【効果】 自身の光属性のスキル攻撃力+（4/5/6/8/10）％、力・器用さ+37 【入手場所】 光の回廊"
      },
      "effectSummary": "【効果】 自身の光属性のスキル攻撃力+（4/5/6/8/10）％、力・器用さ+37 【入手場所】 光の回廊",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-9",
      "slug": "hbr-acc-9",
      "nameEn": "6★ Accessory: 氷のリング（無印〜+4） (氷のリング（無印〜+4）)",
      "category": "Accessory / Orb",
      "subType": "6★ Endgame Accessory",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6732511/f3d96cdb962cdd83bc759c52941ab182.png/show",
      "tierRank": "SSS",
      "score": 9.5,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "6★",
        "Effect": "【効果】 自身の氷属性のスキル攻撃力+（4/5/6/8/10）％、力・器用さ+37 【入手場所】 氷の回廊"
      },
      "effectSummary": "【効果】 自身の氷属性のスキル攻撃力+（4/5/6/8/10）％、力・器用さ+37 【入手場所】 氷の回廊",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-10",
      "slug": "hbr-acc-10",
      "nameEn": "6★ Accessory: 炎のリング（無印〜+4） (炎のリング（無印〜+4）)",
      "category": "Accessory / Orb",
      "subType": "6★ Endgame Accessory",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6670334/1a0eeb6c781885f9ac54a876b535d488.png/show",
      "tierRank": "SSS",
      "score": 9.5,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "6★",
        "Effect": "【効果】 自身の火属性のスキル攻撃力+（4/5/6/8/10）％、力・器用さ+37 【入手場所】 炎の回廊"
      },
      "effectSummary": "【効果】 自身の火属性のスキル攻撃力+（4/5/6/8/10）％、力・器用さ+37 【入手場所】 炎の回廊",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-11",
      "slug": "hbr-acc-11",
      "nameEn": "6★ Accessory: 奥義のリング (奥義のリング)",
      "category": "Accessory / Orb",
      "subType": "5★ Endgame Accessory",
      "rarity": "5★",
      "imageUrl": "https://img.game8.jp/6644444/04d89f10dc20f496cd11057ebf26d340.png/show",
      "tierRank": "SS",
      "score": 9.4,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "5★",
        "Effect": "【効果】 力+49、器用さ+11 【入手場所】 プリズムバトルLv.9~10"
      },
      "effectSummary": "【効果】 力+49、器用さ+11 【入手場所】 プリズムバトルLv.9~10",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-12",
      "slug": "hbr-acc-12",
      "nameEn": "6★ Accessory: 神秘のリング (神秘のリング)",
      "category": "Accessory / Orb",
      "subType": "5★ Endgame Accessory",
      "rarity": "5★",
      "imageUrl": "https://img.game8.jp/6644443/06f58ce045e69b50dae0b428df958043.png/show",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "5★",
        "Effect": "【効果】 力+11、器用さ+49 【入手場所】 プリズムバトルLv.9~10"
      },
      "effectSummary": "【効果】 力+11、器用さ+49 【入手場所】 プリズムバトルLv.9~10",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-13",
      "slug": "hbr-acc-13",
      "nameEn": "6★ Accessory: レンジャーリング (レンジャーリング)",
      "category": "Accessory / Orb",
      "subType": "4★ Endgame Accessory",
      "rarity": "4★",
      "imageUrl": "https://img.game8.jp/6644434/63e774c870767769dcdd37ac9156ec9e.png/show",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "4★",
        "Effect": "【効果】 力+20、器用さ+29 【入手場所】 プリズムバトルLv.6~8"
      },
      "effectSummary": "【効果】 力+20、器用さ+29 【入手場所】 プリズムバトルLv.6~8",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-14",
      "slug": "hbr-acc-14",
      "nameEn": "6★ Accessory: ウォーリアーリング (ウォーリアーリング)",
      "category": "Accessory / Orb",
      "subType": "4★ Endgame Accessory",
      "rarity": "4★",
      "imageUrl": "https://img.game8.jp/6644431/6786cf5719ba26499925f6e78b11b56f.png/show",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "4★",
        "Effect": "【効果】 力+29、器用さ+20 【入手場所】 プリズムバトルLv.6~8"
      },
      "effectSummary": "【効果】 力+29、器用さ+20 【入手場所】 プリズムバトルLv.6~8",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-15",
      "slug": "hbr-acc-15",
      "nameEn": "6★ Accessory: ミスリルリング (ミスリルリング)",
      "category": "Accessory / Orb",
      "subType": "4★ Endgame Accessory",
      "rarity": "4★",
      "imageUrl": "https://img.game8.jp/6644436/6c02a5a6437cc1199205ecf8bb61e3b3.png/show",
      "tierRank": "SS",
      "score": 9.2,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "4★",
        "Effect": "【効果】 力+24、器用さ+24 【入手場所】 プリズムバトルLv.6~8"
      },
      "effectSummary": "【効果】 力+24、器用さ+24 【入手場所】 プリズムバトルLv.6~8",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-16",
      "slug": "hbr-acc-16",
      "nameEn": "6★ Accessory: プラチナリング (プラチナリング)",
      "category": "Accessory / Orb",
      "subType": "3★ Endgame Accessory",
      "rarity": "3★",
      "imageUrl": "https://img.game8.jp/6644437/1f912886d7c55f6279a225503d47d16b.png/show",
      "tierRank": "SS",
      "score": 9.2,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "3★",
        "Effect": "【効果】 力+19、器用さ+19 【入手場所】 プリズムバトルLv.4~5"
      },
      "effectSummary": "【効果】 力+19、器用さ+19 【入手場所】 プリズムバトルLv.4~5",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-17",
      "slug": "hbr-acc-17",
      "nameEn": "6★ Accessory: テクニカルリング (テクニカルリング)",
      "category": "Accessory / Orb",
      "subType": "2★ Endgame Accessory",
      "rarity": "2★",
      "imageUrl": "https://img.game8.jp/6644457/a572379bab3182c4be1b9a8346a5ba29.png/show",
      "tierRank": "SS",
      "score": 9.1,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "2★",
        "Effect": "【効果】 力+13、器用さ+18 【入手場所】 プリズムバトルLv.2~3"
      },
      "effectSummary": "【効果】 力+13、器用さ+18 【入手場所】 プリズムバトルLv.2~3",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-18",
      "slug": "hbr-acc-18",
      "nameEn": "6★ Accessory: パワーリング (パワーリング)",
      "category": "Accessory / Orb",
      "subType": "2★ Endgame Accessory",
      "rarity": "2★",
      "imageUrl": "https://img.game8.jp/6644441/6cc8c280c44c3f56ca422ad6a6923a96.png/show",
      "tierRank": "SS",
      "score": 9.1,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "2★",
        "Effect": "【効果】 力+18、器用さ+13 【入手場所】 プリズムバトルLv.2~3"
      },
      "effectSummary": "【効果】 力+18、器用さ+13 【入手場所】 プリズムバトルLv.2~3",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-19",
      "slug": "hbr-acc-19",
      "nameEn": "6★ Accessory: パッションリング (パッションリング)",
      "category": "Accessory / Orb",
      "subType": "2★ Endgame Accessory",
      "rarity": "2★",
      "imageUrl": "https://img.game8.jp/6670333/c30f8f67447a22f82dd22d32b9634534.png/show",
      "tierRank": "SS",
      "score": 9,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "2★",
        "Effect": "【効果】 力+15、器用さ+15 【入手場所】 プリズムバトルLv.2~3"
      },
      "effectSummary": "【効果】 力+15、器用さ+15 【入手場所】 プリズムバトルLv.2~3",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-20",
      "slug": "hbr-acc-20",
      "nameEn": "6★ Accessory: ファインリング (ファインリング)",
      "category": "Accessory / Orb",
      "subType": "1★ Endgame Accessory",
      "rarity": "1★",
      "imageUrl": "https://img.game8.jp/6644432/c9394d57980b2441624e021747f123ff.png/show",
      "tierRank": "SS",
      "score": 9,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "1★",
        "Effect": "【効果】 力+12、器用さ+12 【入手場所】 プリズムバトルLv.1"
      },
      "effectSummary": "【効果】 力+12、器用さ+12 【入手場所】 プリズムバトルLv.1",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-21",
      "slug": "hbr-acc-21",
      "nameEn": "6★ Accessory: プレインリング (プレインリング)",
      "category": "Accessory / Orb",
      "subType": "1★ Endgame Accessory",
      "rarity": "1★",
      "imageUrl": "https://img.game8.jp/6644540/a628d432a06ef1a9facd3c5b136bb170.png/show",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "1★",
        "Effect": "【効果】 力+8、器用さ+8 【入手場所】 プリズムバトルLv.1"
      },
      "effectSummary": "【効果】 力+8、器用さ+8 【入手場所】 プリズムバトルLv.1",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-22",
      "slug": "hbr-acc-22",
      "nameEn": "Break Earring +6 (DP +1200 / Anti-DP ATK) (ブレイクピアス)",
      "category": "Accessory / Orb",
      "subType": "6★ Endgame Accessory",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6900287/c76565e955aec1a303100a575c188946.png/show",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "6★",
        "Effect": "【効果】 対DPスキル攻撃力上昇（Hit数が少ないほど効果が高い）、DP+400~1200、知性+32~48 【必要素材】 サファイアx3 、ダイヤモンドx5 "
      },
      "effectSummary": "【効果】 対DPスキル攻撃力上昇（Hit数が少ないほど効果が高い）、DP+400~1200、知性+32~48 【必要素材】 サファイアx3 、ダイヤモンドx5 【必要GP】 100,000GP 【入手場所】 アクセサリ錬成",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-23",
      "slug": "hbr-acc-23",
      "nameEn": "Attack Earring +6 (DP +1200 / HP Skill ATK) (アタックピアス)",
      "category": "Accessory / Orb",
      "subType": "6★ Endgame Accessory",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6900289/9326cd23bcd7450ae171eac224de2d53.png/show",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "6★",
        "Effect": "【効果】 対HPスキル攻撃力上昇（Hit数が少ないほど効果が高い）、DP+400~1200、知性+32~48 【必要素材】 トパーズx3 、ダイヤモンドx5 【"
      },
      "effectSummary": "【効果】 対HPスキル攻撃力上昇（Hit数が少ないほど効果が高い）、DP+400~1200、知性+32~48 【必要素材】 トパーズx3 、ダイヤモンドx5 【必要GP】 100,000GP 【入手場所】 アクセサリ錬成",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-24",
      "slug": "hbr-acc-24",
      "nameEn": "Drive Earring +6 (DP +1200 / OD Gauge +15%) (ドライブピアス)",
      "category": "Accessory / Orb",
      "subType": "6★ Endgame Accessory",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6900270/6d65b0dfd851fc63e6c4aa6b5f7f1ffb.png/show",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "6★",
        "Effect": "【効果】 ODゲージ上昇量増加（Hit数が多いほど効果が高い）、DP+400~1200、知性+32~48 【必要素材】 ルビー×3 、ダイヤモンドx5 【必要G"
      },
      "effectSummary": "【効果】 ODゲージ上昇量増加（Hit数が多いほど効果が高い）、DP+400~1200、知性+32~48 【必要素材】 ルビー×3 、ダイヤモンドx5 【必要GP】 100,000GP 【入手場所】 アクセサリ錬成",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-25",
      "slug": "hbr-acc-25",
      "nameEn": "Blast Earring +6 (DP +1200 / Destruction Rate) (ブラストピアス)",
      "category": "Accessory / Orb",
      "subType": "6★ Endgame Accessory",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6900288/12e1e273d85a396f13aef8caa901b7fd.png/show",
      "tierRank": "S",
      "score": 8.7,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "6★",
        "Effect": "【効果】 破壊率上昇量増加（Hit数が多いほど効果が高い）、DP+400~1200、知性+32~48 【必要素材】 パール×3 、ダイヤモンドx5 【必要GP】"
      },
      "effectSummary": "【効果】 破壊率上昇量増加（Hit数が多いほど効果が高い）、DP+400~1200、知性+32~48 【必要素材】 パール×3 、ダイヤモンドx5 【必要GP】 100,000GP 【入手場所】 アクセサリ錬成",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-26",
      "slug": "hbr-acc-26",
      "nameEn": "6★ Accessory: 博愛のピアス (博愛のピアス)",
      "category": "Accessory / Orb",
      "subType": "5★ Endgame Accessory",
      "rarity": "5★",
      "imageUrl": "https://img.game8.jp/6644442/e58f3f40be534844642dceb384dbcdf6.png/show",
      "tierRank": "S",
      "score": 8.7,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "5★",
        "Effect": "【効果】 DP+200、知性+40 【入手場所】 プリズムバトルLv.9~10"
      },
      "effectSummary": "【効果】 DP+200、知性+40 【入手場所】 プリズムバトルLv.9~10",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-27",
      "slug": "hbr-acc-27",
      "nameEn": "6★ Accessory: スターライトピアス (スターライトピアス)",
      "category": "Accessory / Orb",
      "subType": "4★ Endgame Accessory",
      "rarity": "4★",
      "imageUrl": "https://img.game8.jp/6644638/3a3b99c40392e6c0cba34493b2722b63.png/show",
      "tierRank": "S",
      "score": 8.6,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "4★",
        "Effect": "【効果】 DP+230、知性+29 【入手場所】 プリズムバトルLv.6~8"
      },
      "effectSummary": "【効果】 DP+230、知性+29 【入手場所】 プリズムバトルLv.6~8",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-28",
      "slug": "hbr-acc-28",
      "nameEn": "6★ Accessory: ミスリルピアス (ミスリルピアス)",
      "category": "Accessory / Orb",
      "subType": "4★ Endgame Accessory",
      "rarity": "4★",
      "imageUrl": "https://img.game8.jp/6644435/1894bc4ff0209083749db9164a3d0db2.png/show",
      "tierRank": "S",
      "score": 8.6,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "4★",
        "Effect": "【効果】 DP+480 【入手場所】 プリズムバトルLv.6~8"
      },
      "effectSummary": "【効果】 DP+480 【入手場所】 プリズムバトルLv.6~8",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-29",
      "slug": "hbr-acc-29",
      "nameEn": "6★ Accessory: ルーンピアス (ルーンピアス)",
      "category": "Accessory / Orb",
      "subType": "3★ Endgame Accessory",
      "rarity": "3★",
      "imageUrl": "https://img.game8.jp/6644636/e136328e936c7eadbb3f6e0e8c94f426.png/show",
      "tierRank": "S",
      "score": 8.5,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "3★",
        "Effect": "【効果】 DP+180、知性+24 【入手場所】 プリズムバトルLv.4~5"
      },
      "effectSummary": "【効果】 DP+180、知性+24 【入手場所】 プリズムバトルLv.4~5",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-30",
      "slug": "hbr-acc-30",
      "nameEn": "6★ Accessory: プラチナピアス (プラチナピアス)",
      "category": "Accessory / Orb",
      "subType": "3★ Endgame Accessory",
      "rarity": "3★",
      "imageUrl": "https://img.game8.jp/6644438/a7b72179d93456af4e5b5d6dd84874ad.png/show",
      "tierRank": "S",
      "score": 8.4,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "3★",
        "Effect": "【効果】 DP+390 【入手場所】 プリズムバトルLv.4~5"
      },
      "effectSummary": "【効果】 DP+390 【入手場所】 プリズムバトルLv.4~5",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-31",
      "slug": "hbr-acc-31",
      "nameEn": "6★ Accessory: ウィズダムピアス (ウィズダムピアス)",
      "category": "Accessory / Orb",
      "subType": "2★ Endgame Accessory",
      "rarity": "2★",
      "imageUrl": "https://img.game8.jp/6644445/cf516164d0af4bf6d44a8a2bda7cf881.png/show",
      "tierRank": "S",
      "score": 8.4,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "2★",
        "Effect": "【効果】 DP+140、知性+19 【入手場所】 プリズムバトルLv.2~3"
      },
      "effectSummary": "【効果】 DP+140、知性+19 【入手場所】 プリズムバトルLv.2~3",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    },
    {
      "externalId": "game8-hbr-acc-32",
      "slug": "hbr-acc-32",
      "nameEn": "6★ Accessory: ゴールドピアス (ゴールドピアス)",
      "category": "Accessory / Orb",
      "subType": "2★ Endgame Accessory",
      "rarity": "2★",
      "imageUrl": "https://img.game8.jp/6644421/1fe6e989d36461baf964bfd3c24b1af9.png/show",
      "tierRank": "S",
      "score": 8.3,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "Rarity": "2★",
        "Effect": "【効果】 DP+300 【入手場所】 プリズムバトルLv.2~3"
      },
      "effectSummary": "【効果】 DP+300 【入手場所】 プリズムバトルLv.2~3",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425631"
    }
  ],
  "bosses": [
    {
      "slug": "score-attack-140-red-crimson",
      "nameEn": "Score Attack #65 — Red Crimson (Grade 140 / Intensity 35)",
      "modeName": "Score Attack (スコアアタック)",
      "difficultyLabel": "Grade 140 Max Intensity",
      "imageUrl": "https://img.game8.jp/12830571/91f895d57a9a9885e450c831d5a77feb.webp/show",
      "hpStat": "38,000,000 HP",
      "shieldOrDpStat": "2,450,000 DP (x2 Bars)",
      "weaknesses": [
        "Thunder (雷) +150%",
        "Ice (氷) +150%",
        "Crush (打) +50%"
      ],
      "resistances": [
        "Fire Resistance -50%",
        "Light Resistance -50%"
      ],
      "attackPatterns": [
        {
          "turnOrPhase": "Turns 1–3",
          "attackName": "Crimson Tail Sweep",
          "damageType": "AoE Slash + DP Corrosion",
          "counterAction": "Maintain Aoi Erika Angel Wings or Tama Kunimi DP Revival while banking SP."
        },
        {
          "turnOrPhase": "Turns 4–6",
          "attackName": "Core Overheat Laser",
          "damageType": "Single-Target Piercing Nuke",
          "counterAction": "Break DP during Overdrive Level 2, stack Destruction Rate to 600%+, and finish with OD3 EX."
        }
      ],
      "strategySteps": [
        "Stack 2x Skill ATK Up, 2x Crit DMG Up, 2x Elemental Field + DEF Down, and 2x Fragile during 3-bar Overdrive.",
        "Break DP with an AoE Blaster before unleashing your Rider/Attacker EX skill."
      ],
      "recommendedUnitSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179",
        "hbr-759416",
        "hbr-752169"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425643"
    },
    {
      "slug": "anachrony-flat-hand-supreme",
      "nameEn": "Anachrony (異時層) — Supreme Flat Hand (Phase 3)",
      "modeName": "Anachrony (異時層)",
      "difficultyLabel": "Skull Feather Endgame",
      "imageUrl": "https://img.game8.jp/12772762/a9da9ab1ee0170476eb7a1261a3bfb40.webp/show",
      "hpStat": "52,000,000 HP",
      "shieldOrDpStat": "3,200,000 DP",
      "weaknesses": [
        "Fire (火) +150%",
        "Dark (闇) +150%"
      ],
      "resistances": [
        "Non-Elemental Resistance -75%"
      ],
      "attackPatterns": [
        {
          "turnOrPhase": "Phase 1–2",
          "attackName": "Gravity Pulse & Buff Wipe",
          "damageType": "AoE Non-Elemental + Dispel",
          "counterAction": "Use Squad 1 to clear Phase 1 and Phase 2 while banking 3 Overdrive bars for Squad 2."
        }
      ],
      "strategySteps": [
        "Use Squad 1 to clear Phases 1–2 and charge Overdrive to 300%.",
        "Swap to Squad 2 on Phase 3 entry and execute an immediate 3-turn Overdrive one-shot."
      ],
      "recommendedUnitSlugs": [
        "hbr-752168",
        "hbr-738525",
        "hbr-683118",
        "hbr-839459",
        "hbr-832804"
      ],
      "sourceUrl": "https://game8.jp/heavenburnsred/425643"
    }
  ],
  "banners": [
    {
      "slug": "hbr-karen-halloween-pickup",
      "bannerTitle": "Pickup Platinum Gacha — Karen Asakura (Halloween) & Fubuki Mikoto",
      "bannerType": "LIMITED",
      "imageUrl": "https://img.game8.jp/12830571/91f895d57a9a9885e450c831d5a77feb.webp/show",
      "featuredNames": [
        "Karen Asakura (Halloween)",
        "Fubuki Mikoto (Liberation)"
      ],
      "featuredUnitSlugs": [
        "hbr-803495",
        "hbr-797590"
      ],
      "asianStartDate": "2026-10-30",
      "asianEndDate": "2026-11-13",
      "estGlobalStartDate": "2027-02-28",
      "estGlobalEndDate": "2027-03-14",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "Verified active banner on Game8 JP (https://game8.jp/heavenburnsred/424221) rated 5/5 Stars (★★★★★).",
      "pityCurrencyCost": 45000,
      "sourceUrl": "https://game8.jp/heavenburnsred/424221"
    },
    {
      "slug": "hbr-fire-ice-wishlist-gacha",
      "bannerTitle": "Fire & Ice Attribute Wishlist Special Gacha (Select 6 SS Styles)",
      "bannerType": "FESTIVAL",
      "imageUrl": "https://img.game8.jp/12772762/a9da9ab1ee0170476eb7a1261a3bfb40.webp/show",
      "featuredNames": [
        "SSレゾナンス成瀬ヒカリ(狩人)",
        "Ichiko Ohshima (SSレゾナンス アドミラル)",
        "Misato Nikaido (SSレゾナンス アドミラル)"
      ],
      "featuredUnitSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-779179"
      ],
      "asianStartDate": "2026-11-06",
      "asianEndDate": "2026-11-20",
      "estGlobalStartDate": "2027-03-06",
      "estGlobalEndDate": "2027-03-20",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "Rated 5/5 Stars on Game8 JP (https://game8.jp/heavenburnsred/424221) — allows selecting 6 target Fire/Ice SS styles.",
      "pityCurrencyCost": 45000,
      "sourceUrl": "https://game8.jp/heavenburnsred/424221"
    },
    {
      "slug": "hbr-halloween-ss-guaranteed-stepup",
      "bannerTitle": "Halloween SS Guaranteed Step-Up Gacha (Step 4 & Step 8 Guaranteed)",
      "bannerType": "FESTIVAL",
      "imageUrl": "https://img.game8.jp/12476910/aff34e7e72b124eb457ecf18f44dd825.webp/show",
      "featuredNames": [
        "Misato Nikaido (SSレゾナンス アドミラル)",
        "SSレゾナンス七瀬七海(アドミラル)"
      ],
      "featuredUnitSlugs": [
        "hbr-779179",
        "hbr-759416"
      ],
      "asianStartDate": "2026-10-30",
      "asianEndDate": "2026-11-13",
      "estGlobalStartDate": "2027-02-28",
      "estGlobalEndDate": "2027-03-14",
      "pullVerdict": "HIGH_VALUE",
      "verdictReasoning": "Rated 5/5 Stars on Game8 JP — guarantees featured SS styles at Step 4 and Step 8.",
      "pityCurrencyCost": 24000,
      "sourceUrl": "https://game8.jp/heavenburnsred/424221"
    }
  ]
};
