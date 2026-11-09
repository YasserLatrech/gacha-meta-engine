import {
  RoleColumnConfig,
  ElementConfig,
  VerifiedUnitPayload,
  VerifiedEquipmentPayload,
  VerifiedBossPayload,
  VerifiedBannerPayload,
} from '../../../domain/schemas';

export interface GameAdapterBundle {
  slug: string;
  name: string;
  shortName: string;
  asianRegion: string;
  asianPatchVersion: string;
  globalPatchVersion: string;
  foresightGapMonths: number;
  coverImageUrl: string;
  currencyName: string;
  pullCostSingle: number;
  pityThreshold: number;
  monthlyF2pIncome: number;
  monthlyPassIncome: number;
  sourceUrl: string;
  rolesConfig: RoleColumnConfig[];
  elementsConfig: ElementConfig[];
  units: VerifiedUnitPayload[];
  equipments: VerifiedEquipmentPayload[];
  bosses: VerifiedBossPayload[];
  banners: VerifiedBannerPayload[];
}

export const heavenBurnsRedBundle: GameAdapterBundle = {
  "slug": "heaven-burns-red",
  "name": "Heaven Burns Red",
  "shortName": "HBR",
  "asianRegion": "EN",
  "asianPatchVersion": "v4.12.0 Live Meta",
  "globalPatchVersion": "v4.12.0 Live",
  "foresightGapMonths": 4,
  "coverImageUrl": "https://img.game8.jp/12147005/b11d4e6ac151c10c6292f99656586d39.webp/original",
  "currencyName": "Quartz",
  "pullCostSingle": 300,
  "pityThreshold": 150,
  "monthlyF2pIncome": 12500,
  "monthlyPassIncome": 18500,
  "sourceUrl": "https://gachacrest.gg/heaven-burns-red",
  "rolesConfig": [
    {
      "key": "DPS",
      "label": "ATTACKER / RIDER / BREAKER",
      "colorHex": "#DC2626"
    },
    {
      "key": "SUB_DPS",
      "label": "DEBUFFER / BLASTER",
      "colorHex": "#D97706"
    },
    {
      "key": "SUPPORT",
      "label": "BUFFER / ADMIRAL",
      "colorHex": "#2563EB"
    },
    {
      "key": "SUSTAIN",
      "label": "HEALER / DEFENDER",
      "colorHex": "#15803D"
    }
  ],
  "elementsConfig": [
    {
      "key": "Fire",
      "label": "Fire",
      "colorHex": "#DC2626"
    },
    {
      "key": "Ice",
      "label": "Ice",
      "colorHex": "#2563EB"
    },
    {
      "key": "Thunder",
      "label": "Thunder",
      "colorHex": "#D97706"
    },
    {
      "key": "Light",
      "label": "Light",
      "colorHex": "#CA8A04"
    },
    {
      "key": "Dark",
      "label": "Dark",
      "colorHex": "#7C3AED"
    },
    {
      "key": "None",
      "label": "Non-Elem",
      "colorHex": "#52525B"
    }
  ],
  "units": [
    {
      "externalId": "hbr-unit-803495",
      "slug": "hbr-803495",
      "nameEn": "Hikari Naruse [Serene Hunter]",
      "nameOriginal": "Hikari Naruse",
      "styleOrTitle": "SS [Serene Hunter] • Squad 19A Breaker",
      "rarity": "SS",
      "role": "Breaker (Pierce)",
      "roleColumn": "DPS",
      "element": "None",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/12830571/91f895d57a9a9885e450c831d5a77feb.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 18,
      "recommendedDupes": "LB1 (1 Dupe) / LB3",
      "baseStats": {
        "hpOrStamina": 4970,
        "dpOrSpeed": 5220,
        "atkOrPower": 745,
        "defOrGuts": 630,
        "critOrWit": 655,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Serene Hunter — Shattering DP Finisher",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "4-Hit Non-Elemental Pierce (+50% DP Break Bonus • 11,800 Potency)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DP Shield Break +50%",
            "Non-Elemental",
            "Pierce",
            "Crit Rate Up"
          ],
          "exactDescription": "Delivers a 4-hit Non-Elemental Pierce strike with a +50% multiplier bonus against enemy DP Shields, instantly shattering Grade 140 boss barriers on Turn 1 of Overdrive."
        },
        {
          "name": "Shield-Crushing Volley",
          "type": "ACTIVE",
          "spOrEnergyCost": "8 SP",
          "multiplierSummary": "+30% DP Damage + Self Non-Elemental Skill ATK Up",
          "hitCount": 3,
          "buffCategoryTags": [
            "DP Break",
            "Non-Elemental",
            "Pierce"
          ],
          "exactDescription": "Strikes all enemies for AoE DP damage while pre-buffing self Skill Attack."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases Non-Elemental Pierce skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-692830",
        "hbr-712353",
        "hbr-686333"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.9,
      "summaryVerdict": "Hikari Naruse [Serene Hunter] is a SSS-Tier Non-Elemental Breaker (Pierce) in Heaven Burns Red. Delivers a 4-hit Non-Elemental Pierce strike with a +50% multiplier bonus against enemy DP Shields, instantly shattering Grade 140 boss barriers on Turn 1 of Overdrive.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-803495"
    },
    {
      "externalId": "hbr-unit-797590",
      "slug": "hbr-797590",
      "nameEn": "Ichiko Ohshima [Seaside Mademoiselle]",
      "nameOriginal": "Ichiko Ohshima",
      "styleOrTitle": "SS [Seaside Mademoiselle] • Squad 31E Admiral",
      "rarity": "SS",
      "role": "Admiral (Crush)",
      "roleColumn": "SUPPORT",
      "element": "Light",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/12772762/a9da9ab1ee0170476eb7a1261a3bfb40.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 18,
      "recommendedDupes": "LB1 (1 Dupe) / LB3",
      "baseStats": {
        "hpOrStamina": 5035,
        "dpOrSpeed": 4922,
        "atkOrPower": 606,
        "defOrGuts": 656,
        "critOrWit": 766,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 99,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Seaside Mademoiselle — Light Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Light Field (+65%) + +85% Light Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Light Field Zone",
            "Light Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Light Field Zone (+65% Light damage) while applying +85% Light Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Light"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Light Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-724680",
        "hbr-779180",
        "hbr-769411"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.8,
      "summaryVerdict": "Ichiko Ohshima [Seaside Mademoiselle] is a SSS-Tier Light Admiral (Crush) in Heaven Burns Red. Deploys a permanent Large Light Field Zone (+65% Light damage) while applying +85% Light Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-797590"
    },
    {
      "externalId": "hbr-unit-779179",
      "slug": "hbr-779179",
      "nameEn": "Misato Nikaido [Blue Sky Full-Power Cheer]",
      "nameOriginal": "Misato Nikaido",
      "styleOrTitle": "SS [Blue Sky Full-Power Cheer] • Squad 31D Admiral",
      "rarity": "SS",
      "role": "Admiral (Crush)",
      "roleColumn": "SUPPORT",
      "element": "Dark",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/12476910/aff34e7e72b124eb457ecf18f44dd825.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 18,
      "recommendedDupes": "LB1 (1 Dupe) / LB3",
      "baseStats": {
        "hpOrStamina": 5100,
        "dpOrSpeed": 4974,
        "atkOrPower": 632,
        "defOrGuts": 682,
        "critOrWit": 792,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 99,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Blue Sky Full-Power Cheer — Dark Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Dark Field (+65%) + +85% Dark Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dark Field Zone",
            "Dark Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Dark Field Zone (+65% Dark damage) while applying +85% Dark Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Dark"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-738525",
        "hbr-787646",
        "hbr-832805"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "Misato Nikaido [Blue Sky Full-Power Cheer] is a SSS-Tier Dark Admiral (Crush) in Heaven Burns Red. Deploys a permanent Large Dark Field Zone (+65% Dark damage) while applying +85% Dark Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-779179"
    },
    {
      "externalId": "hbr-unit-759416",
      "slug": "hbr-759416",
      "nameEn": "Nanami Nanase [Promise Beyond the Dawn]",
      "nameOriginal": "Nanami Nanase",
      "styleOrTitle": "SS [Promise Beyond the Dawn] • Command HQ Admiral",
      "rarity": "SS",
      "role": "Admiral (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Thunder",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/12260112/07a360216d9a18bf3de5ad376a7e5039.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 18,
      "recommendedDupes": "LB1 (1 Dupe) / LB3",
      "baseStats": {
        "hpOrStamina": 5015,
        "dpOrSpeed": 4906,
        "atkOrPower": 598,
        "defOrGuts": 648,
        "critOrWit": 758,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 99,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Promise Beyond the Dawn — Thunder Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Thunder Field (+65%) + +85% Thunder Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Thunder Field Zone",
            "Thunder Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Thunder Field Zone (+65% Thunder damage) while applying +85% Thunder Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Thunder"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Thunder Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-667359",
        "hbr-712350",
        "hbr-769410"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "Nanami Nanase [Promise Beyond the Dawn] is a SSS-Tier Thunder Admiral (Pierce) in Heaven Burns Red. Deploys a permanent Large Thunder Field Zone (+65% Thunder damage) while applying +85% Thunder Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-759416"
    },
    {
      "externalId": "hbr-unit-752169",
      "slug": "hbr-752169",
      "nameEn": "Yuina Shirakawa [Oracle Banner of Victory]",
      "nameOriginal": "Yuina Shirakawa",
      "styleOrTitle": "SS [Oracle Banner of Victory] • Squad 30G Admiral",
      "rarity": "SS",
      "role": "Admiral (Slash)",
      "roleColumn": "SUPPORT",
      "element": "Fire",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12147008/052dd9b657886a6ca0e75daa19aef3a2.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 18,
      "recommendedDupes": "LB1 (1 Dupe) / LB3",
      "baseStats": {
        "hpOrStamina": 5080,
        "dpOrSpeed": 4958,
        "atkOrPower": 624,
        "defOrGuts": 674,
        "critOrWit": 784,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 99,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Oracle Banner of Victory — Fire Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Fire Field (+65%) + +85% Fire Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Fire Field Zone",
            "Fire Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Fire"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-810832",
        "hbr-816687",
        "hbr-642066"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.6,
      "summaryVerdict": "Yuina Shirakawa [Oracle Banner of Victory] is a SSS-Tier Fire Admiral (Slash) in Heaven Burns Red. Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-752169"
    },
    {
      "externalId": "hbr-unit-752168",
      "slug": "hbr-752168",
      "nameEn": "Ruka Kayamori [Glorious Blades]",
      "nameOriginal": "Ruka Kayamori",
      "styleOrTitle": "SS [Glorious Blades] • Squad 31A Admiral",
      "rarity": "SS",
      "role": "Admiral (Slash)",
      "roleColumn": "SUPPORT",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12147006/bc4ca37cc85728f6a6ee84eddbcf7ca7.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 18,
      "recommendedDupes": "LB1 (1 Dupe) / LB3",
      "baseStats": {
        "hpOrStamina": 4995,
        "dpOrSpeed": 4890,
        "atkOrPower": 590,
        "defOrGuts": 640,
        "critOrWit": 750,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 99,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Glorious Blades — Ice Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Ice Field (+65%) + +85% Ice Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Ice Field Zone",
            "Ice Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Ice Field Zone (+65% Ice damage) while applying +85% Ice Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Ice"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803496",
        "hbr-730675",
        "hbr-756804"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.9,
      "summaryVerdict": "Ruka Kayamori [Glorious Blades] is a SSS-Tier Ice Admiral (Slash) in Heaven Burns Red. Deploys a permanent Large Ice Field Zone (+65% Ice damage) while applying +85% Ice Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-752168"
    },
    {
      "externalId": "hbr-unit-738525",
      "slug": "hbr-738525",
      "nameEn": "Bon Ivar Yamawaki [Triumphant Return of the Demon Lord]",
      "nameOriginal": "Bon Ivar Yamawaki",
      "styleOrTitle": "SS [Triumphant Return of the Demon Lord] • Squad 31C Attacker",
      "rarity": "SS",
      "role": "Attacker (Slash)",
      "roleColumn": "DPS",
      "element": "Dark",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11992099/4ea81b9a1e71aa7a2b108f12969516dc.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 18,
      "recommendedDupes": "LB1 (1 Dupe) / LB3",
      "baseStats": {
        "hpOrStamina": 5060,
        "dpOrSpeed": 4942,
        "atkOrPower": 781,
        "defOrGuts": 666,
        "critOrWit": 691,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Triumphant Return of the Demon Lord — Apex HP Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "14 SP",
          "multiplierSummary": "5-Hit Dark Slash (+50% HP Bonus • 14,250 Max Potency)",
          "hitCount": 5,
          "buffCategoryTags": [
            "HP +50% Finisher",
            "Dark",
            "Slash",
            "Self Crit & Mind Eye"
          ],
          "exactDescription": "Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Dark Slash nuke with +50% bonus potency against enemy HP."
        },
        {
          "name": "Focused Charge & Self Funnel",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Self +75% Dark Skill ATK + 3-Hit Funnel",
          "hitCount": 2,
          "buffCategoryTags": [
            "Self Buff",
            "Funnel",
            "Dark"
          ],
          "exactDescription": "Pre-stacks Self Elemental Skill Attack Up and 3-Hit Funnel on the turn prior to Overdrive burst."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases Dark Slash skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-779179",
        "hbr-787646",
        "hbr-832805"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.8,
      "summaryVerdict": "Bon Ivar Yamawaki [Triumphant Return of the Demon Lord] is a SSS-Tier Dark Attacker (Slash) in Heaven Burns Red. Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Dark Slash nuke with +50% bonus potency against enemy HP.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-738525"
    },
    {
      "externalId": "hbr-unit-683118",
      "slug": "hbr-683118",
      "nameEn": "Yayoi Bungo [Evil Army March Begins!]",
      "nameOriginal": "Yayoi Bungo",
      "styleOrTitle": "SS [Evil Army March Begins!] • Squad 31C Breaker",
      "rarity": "SS",
      "role": "Breaker (Pierce)",
      "roleColumn": "DPS",
      "element": "None",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/11601627/f232b9c3ce69ca258221d1a9453928ed.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 18,
      "recommendedDupes": "LB1 (1 Dupe) / LB3",
      "baseStats": {
        "hpOrStamina": 4975,
        "dpOrSpeed": 5224,
        "atkOrPower": 747,
        "defOrGuts": 632,
        "critOrWit": 657,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Evil Army March Begins! — Shattering DP Finisher",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "4-Hit Non-Elemental Pierce (+50% DP Break Bonus • 11,800 Potency)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DP Shield Break +50%",
            "Non-Elemental",
            "Pierce",
            "Crit Rate Up"
          ],
          "exactDescription": "Delivers a 4-hit Non-Elemental Pierce strike with a +50% multiplier bonus against enemy DP Shields, instantly shattering Grade 140 boss barriers on Turn 1 of Overdrive."
        },
        {
          "name": "Shield-Crushing Volley",
          "type": "ACTIVE",
          "spOrEnergyCost": "8 SP",
          "multiplierSummary": "+30% DP Damage + Self Non-Elemental Skill ATK Up",
          "hitCount": 3,
          "buffCategoryTags": [
            "DP Break",
            "Non-Elemental",
            "Pierce"
          ],
          "exactDescription": "Strikes all enemies for AoE DP damage while pre-buffing self Skill Attack."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases Non-Elemental Pierce skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-657138",
        "hbr-708980",
        "hbr-663244"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "Yayoi Bungo [Evil Army March Begins!] is a SSS-Tier Non-Elemental Breaker (Pierce) in Heaven Burns Red. Delivers a 4-hit Non-Elemental Pierce strike with a +50% multiplier bonus against enemy DP Shields, instantly shattering Grade 140 boss barriers on Turn 1 of Overdrive.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-683118"
    },
    {
      "externalId": "hbr-unit-839459",
      "slug": "hbr-839459",
      "nameEn": "Karen Asakura [Midnight Soul Harvest]",
      "nameOriginal": "Karen Asakura",
      "styleOrTitle": "SS [Midnight Soul Harvest] • Squad 31A Attacker",
      "rarity": "SS",
      "role": "Attacker (Slash)",
      "roleColumn": "DPS",
      "element": "Dark",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/13148095/dace002fe484281f6a63721d68bb0123.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4980,
        "dpOrSpeed": 4866,
        "atkOrPower": 733,
        "defOrGuts": 638,
        "critOrWit": 663,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Midnight Soul Harvest — Apex HP Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "14 SP",
          "multiplierSummary": "5-Hit Dark Slash (+50% HP Bonus • 14,250 Max Potency)",
          "hitCount": 5,
          "buffCategoryTags": [
            "HP +50% Finisher",
            "Dark",
            "Slash",
            "Self Crit & Mind Eye"
          ],
          "exactDescription": "Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Dark Slash nuke with +50% bonus potency against enemy HP."
        },
        {
          "name": "Focused Charge & Self Funnel",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Self +75% Dark Skill ATK + 3-Hit Funnel",
          "hitCount": 2,
          "buffCategoryTags": [
            "Self Buff",
            "Funnel",
            "Dark"
          ],
          "exactDescription": "Pre-stacks Self Elemental Skill Attack Up and 3-Hit Funnel on the turn prior to Overdrive burst."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases Dark Slash skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-779179",
        "hbr-787646",
        "hbr-832805"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Karen Asakura [Midnight Soul Harvest] is a SS-Tier Dark Attacker (Slash) in Heaven Burns Red. Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Dark Slash nuke with +50% bonus potency against enemy HP.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-839459"
    },
    {
      "externalId": "hbr-unit-832804",
      "slug": "hbr-832804",
      "nameEn": "Mari Satsuki [Shivering Nurse Call]",
      "nameOriginal": "Mari Satsuki",
      "styleOrTitle": "SS [Shivering Nurse Call] • Squad 31C Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Pierce)",
      "roleColumn": "SUB_DPS",
      "element": "Light",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/13102635/c21dfb5bdec3cc46ae6f09808282e89c.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5045,
        "dpOrSpeed": 4918,
        "atkOrPower": 759,
        "defOrGuts": 709,
        "critOrWit": 779,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Shivering Nurse Call — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Light DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Light DEF Down",
            "Fragile +50%",
            "Light",
            "Pierce"
          ],
          "exactDescription": "Strikes all enemies 4 times with Light Pierce damage while simultaneously applying -45% Base DEF Down, -45% Light Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Light"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Light Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-724680",
        "hbr-797591",
        "hbr-769411"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.2,
      "summaryVerdict": "Mari Satsuki [Shivering Nurse Call] is a SS-Tier Light Debuffer (Pierce) in Heaven Burns Red. Strikes all enemies 4 times with Light Pierce damage while simultaneously applying -45% Base DEF Down, -45% Light Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-832804"
    },
    {
      "externalId": "hbr-unit-825787",
      "slug": "hbr-825787",
      "nameEn": "Yuki Izumi [Fleur Enchantée]",
      "nameOriginal": "Yuki Izumi",
      "styleOrTitle": "SS [Fleur Enchantée] • Squad 31A Breaker",
      "rarity": "SS",
      "role": "Breaker (Pierce)",
      "roleColumn": "DPS",
      "element": "Ice",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/13080710/4d167acbeba869102681961469cc7ac1.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4960,
        "dpOrSpeed": 5200,
        "atkOrPower": 725,
        "defOrGuts": 630,
        "critOrWit": 655,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Fleur Enchantée — Shattering DP Finisher",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "4-Hit Ice Pierce (+50% DP Break Bonus • 11,800 Potency)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DP Shield Break +50%",
            "Ice",
            "Pierce",
            "Crit Rate Up"
          ],
          "exactDescription": "Delivers a 4-hit Ice Pierce strike with a +50% multiplier bonus against enemy DP Shields, instantly shattering Grade 140 boss barriers on Turn 1 of Overdrive."
        },
        {
          "name": "Shield-Crushing Volley",
          "type": "ACTIVE",
          "spOrEnergyCost": "8 SP",
          "multiplierSummary": "+30% DP Damage + Self Ice Skill ATK Up",
          "hitCount": 3,
          "buffCategoryTags": [
            "DP Break",
            "Ice",
            "Pierce"
          ],
          "exactDescription": "Strikes all enemies for AoE DP damage while pre-buffing self Skill Attack."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases Ice Pierce skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-752168",
        "hbr-764339",
        "hbr-794994"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "Yuki Izumi [Fleur Enchantée] is a SS-Tier Ice Breaker (Pierce) in Heaven Burns Red. Delivers a 4-hit Ice Pierce strike with a +50% multiplier bonus against enemy DP Shields, instantly shattering Grade 140 boss barriers on Turn 1 of Overdrive.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-825787"
    },
    {
      "externalId": "hbr-unit-816687",
      "slug": "hbr-816687",
      "nameEn": "Fubuki Mikoto [Muse of the Broken Night]",
      "nameOriginal": "Fubuki Mikoto",
      "styleOrTitle": "SS [Muse of the Broken Night] • Squad 31D Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Slash)",
      "roleColumn": "SUB_DPS",
      "element": "Fire",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/13014410/80cc2ec016d93a54b00e98e66baf0a35.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5025,
        "dpOrSpeed": 4902,
        "atkOrPower": 751,
        "defOrGuts": 701,
        "critOrWit": 771,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Muse of the Broken Night — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Fire DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Fire DEF Down",
            "Fragile +50%",
            "Fire",
            "Slash"
          ],
          "exactDescription": "Strikes all enemies 4 times with Fire Slash damage while simultaneously applying -45% Base DEF Down, -45% Fire Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Fire"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-643121",
        "hbr-784346",
        "hbr-721625"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.4,
      "summaryVerdict": "Fubuki Mikoto [Muse of the Broken Night] is a SS-Tier Fire Debuffer (Slash) in Heaven Burns Red. Strikes all enemies 4 times with Fire Slash damage while simultaneously applying -45% Base DEF Down, -45% Fire Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-816687"
    },
    {
      "externalId": "hbr-unit-810832",
      "slug": "hbr-810832",
      "nameEn": "Chie Sugawara [Summer Night Butterfly]",
      "nameOriginal": "Chie Sugawara",
      "styleOrTitle": "SS [Summer Night Butterfly] • Squad 30G Attacker",
      "rarity": "SS",
      "role": "Attacker (Crush)",
      "roleColumn": "DPS",
      "element": "Fire",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/12900792/d6ac7714406de170b0f736d6f5589f6f.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4940,
        "dpOrSpeed": 4834,
        "atkOrPower": 717,
        "defOrGuts": 622,
        "critOrWit": 647,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Summer Night Butterfly — Apex HP Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "14 SP",
          "multiplierSummary": "5-Hit Fire Crush (+50% HP Bonus • 14,250 Max Potency)",
          "hitCount": 5,
          "buffCategoryTags": [
            "HP +50% Finisher",
            "Fire",
            "Crush",
            "Self Crit & Mind Eye"
          ],
          "exactDescription": "Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Fire Crush nuke with +50% bonus potency against enemy HP."
        },
        {
          "name": "Focused Charge & Self Funnel",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Self +75% Fire Skill ATK + 3-Hit Funnel",
          "hitCount": 2,
          "buffCategoryTags": [
            "Self Buff",
            "Funnel",
            "Fire"
          ],
          "exactDescription": "Pre-stacks Self Elemental Skill Attack Up and 3-Hit Funnel on the turn prior to Overdrive burst."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases Fire Crush skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-752169",
        "hbr-816687",
        "hbr-642066"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.3,
      "summaryVerdict": "Chie Sugawara [Summer Night Butterfly] is a SS-Tier Fire Attacker (Crush) in Heaven Burns Red. Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Fire Crush nuke with +50% bonus potency against enemy HP.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-810832"
    },
    {
      "externalId": "hbr-unit-803496",
      "slug": "hbr-803496",
      "nameEn": "Ichigo Minase [Twin-Star Valkyrie]",
      "nameOriginal": "Ichigo Minase",
      "styleOrTitle": "SS [Twin-Star Valkyrie] • Squad 31B Attacker",
      "rarity": "SS",
      "role": "Attacker (Pierce)",
      "roleColumn": "DPS",
      "element": "Ice",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/12863877/6237d35e6dbf72f4268ee52bf2f83000.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5005,
        "dpOrSpeed": 4886,
        "atkOrPower": 743,
        "defOrGuts": 648,
        "critOrWit": 673,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Twin-Star Valkyrie — Apex HP Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "14 SP",
          "multiplierSummary": "5-Hit Ice Pierce (+50% HP Bonus • 14,250 Max Potency)",
          "hitCount": 5,
          "buffCategoryTags": [
            "HP +50% Finisher",
            "Ice",
            "Pierce",
            "Self Crit & Mind Eye"
          ],
          "exactDescription": "Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Ice Pierce nuke with +50% bonus potency against enemy HP."
        },
        {
          "name": "Focused Charge & Self Funnel",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Self +75% Ice Skill ATK + 3-Hit Funnel",
          "hitCount": 2,
          "buffCategoryTags": [
            "Self Buff",
            "Funnel",
            "Ice"
          ],
          "exactDescription": "Pre-stacks Self Elemental Skill Attack Up and 3-Hit Funnel on the turn prior to Overdrive burst."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases Ice Pierce skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-669859",
        "hbr-730675",
        "hbr-756804"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Ichigo Minase [Twin-Star Valkyrie] is a SS-Tier Ice Attacker (Pierce) in Heaven Burns Red. Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Ice Pierce nuke with +50% bonus potency against enemy HP.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-803496"
    },
    {
      "externalId": "hbr-unit-797591",
      "slug": "hbr-797591",
      "nameEn": "Yotsuha Ohshima [Lazy Tropical Float]",
      "nameOriginal": "Yotsuha Ohshima",
      "styleOrTitle": "SS [Lazy Tropical Float] • Squad 31E Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Light",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/12772764/ca6b46865cf2531ce06ad9cd69d67339.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4920,
        "dpOrSpeed": 4818,
        "atkOrPower": 564,
        "defOrGuts": 614,
        "critOrWit": 704,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Lazy Tropical Float — Light Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Light Field (+65%) + +85% Light Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Light Field Zone",
            "Light Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Light Field Zone (+65% Light damage) while applying +85% Light Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Light"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Light Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-784344",
        "hbr-832804",
        "hbr-813761"
      ],
      "tierOverall": "SS",
      "tierReroll": "SSS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "Yotsuha Ohshima [Lazy Tropical Float] is a SS-Tier Light Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Light Field Zone (+65% Light damage) while applying +85% Light Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-797591"
    },
    {
      "externalId": "hbr-unit-794994",
      "slug": "hbr-794994",
      "nameEn": "Shiki Hanamura [Evening Fireworks Nocturne]",
      "nameOriginal": "Shiki Hanamura",
      "styleOrTitle": "SS [Evening Fireworks Nocturne] • Squad 31F Healer",
      "rarity": "SS",
      "role": "Healer (Slash)",
      "roleColumn": "SUSTAIN",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12717433/3099afc91b4843acb221cf4ccf3b6900.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5620,
        "dpOrSpeed": 5755,
        "atkOrPower": 590,
        "defOrGuts": 745,
        "critOrWit": 665,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Evening Fireworks Nocturne — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Ice"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803496",
        "hbr-669859",
        "hbr-730675"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.5,
      "summaryVerdict": "Shiki Hanamura [Evening Fireworks Nocturne] is a SS-Tier Ice Healer (Slash) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-794994"
    },
    {
      "externalId": "hbr-unit-793215",
      "slug": "hbr-793215",
      "nameEn": "Charlotta Skopovskaya [Exotic Principessa]",
      "nameOriginal": "Charlotta Skopovskaya",
      "styleOrTitle": "SS [Exotic Principessa] • Squad 31X Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Pierce)",
      "roleColumn": "SUB_DPS",
      "element": "Fire",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/12676776/bf8ce57ed5a48d3491792f6004717df0.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5050,
        "dpOrSpeed": 4922,
        "atkOrPower": 761,
        "defOrGuts": 711,
        "critOrWit": 781,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Exotic Principessa — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Fire DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Fire DEF Down",
            "Fragile +50%",
            "Fire",
            "Pierce"
          ],
          "exactDescription": "Strikes all enemies 4 times with Fire Pierce damage while simultaneously applying -45% Base DEF Down, -45% Fire Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Fire"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-810832",
        "hbr-752169",
        "hbr-642066"
      ],
      "tierOverall": "SS",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "Charlotta Skopovskaya [Exotic Principessa] is a SS-Tier Fire Debuffer (Pierce) in Heaven Burns Red. Strikes all enemies 4 times with Fire Pierce damage while simultaneously applying -45% Base DEF Down, -45% Fire Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-793215"
    },
    {
      "externalId": "hbr-unit-787646",
      "slug": "hbr-787646",
      "nameEn": "Ruka Kayamori [TAKE YOUR HEART]",
      "nameOriginal": "Ruka Kayamori",
      "styleOrTitle": "SS [TAKE YOUR HEART] • Squad 31A Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Slash)",
      "roleColumn": "SUB_DPS",
      "element": "Dark",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12623975/c057f0a154a6048733131bc178d21b8d.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4965,
        "dpOrSpeed": 4854,
        "atkOrPower": 727,
        "defOrGuts": 677,
        "critOrWit": 747,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: TAKE YOUR HEART — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Dark DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Dark DEF Down",
            "Fragile +50%",
            "Dark",
            "Slash"
          ],
          "exactDescription": "Strikes all enemies 4 times with Dark Slash damage while simultaneously applying -45% Base DEF Down, -45% Dark Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Dark"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-839459",
        "hbr-749659",
        "hbr-652687"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.3,
      "summaryVerdict": "Ruka Kayamori [TAKE YOUR HEART] is a SS-Tier Dark Debuffer (Slash) in Heaven Burns Red. Strikes all enemies 4 times with Dark Slash damage while simultaneously applying -45% Base DEF Down, -45% Dark Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-787646"
    },
    {
      "externalId": "hbr-unit-784344",
      "slug": "hbr-784344",
      "nameEn": "Violet (Kasumi Yoshizawa) [Unwavering Conviction]",
      "nameOriginal": "Violet (Kasumi Yoshizawa)",
      "styleOrTitle": "SS [Unwavering Conviction] • Squad P5R Attacker",
      "rarity": "SS",
      "role": "Attacker (Slash)",
      "roleColumn": "DPS",
      "element": "Light",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12623974/3c3b5b25db1cc12a92ffbab96792d6b4.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5030,
        "dpOrSpeed": 4906,
        "atkOrPower": 753,
        "defOrGuts": 658,
        "critOrWit": 683,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Unwavering Conviction — Apex HP Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "14 SP",
          "multiplierSummary": "5-Hit Light Slash (+50% HP Bonus • 14,250 Max Potency)",
          "hitCount": 5,
          "buffCategoryTags": [
            "HP +50% Finisher",
            "Light",
            "Slash",
            "Self Crit & Mind Eye"
          ],
          "exactDescription": "Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Light Slash nuke with +50% bonus potency against enemy HP."
        },
        {
          "name": "Focused Charge & Self Funnel",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Self +75% Light Skill ATK + 3-Hit Funnel",
          "hitCount": 2,
          "buffCategoryTags": [
            "Self Buff",
            "Funnel",
            "Light"
          ],
          "exactDescription": "Pre-stacks Self Elemental Skill Attack Up and 3-Hit Funnel on the turn prior to Overdrive burst."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Light Seraphic Mastery",
          "effect": "Increases Light Slash skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-797590",
        "hbr-832804",
        "hbr-813761"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.3,
      "summaryVerdict": "Violet (Kasumi Yoshizawa) [Unwavering Conviction] is a SS-Tier Light Attacker (Slash) in Heaven Burns Red. Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Light Slash nuke with +50% bonus potency against enemy HP.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-784344"
    },
    {
      "externalId": "hbr-unit-784346",
      "slug": "hbr-784346",
      "nameEn": "Tsukasa Tojo [Passionate Femme Fatale]",
      "nameOriginal": "Tsukasa Tojo",
      "styleOrTitle": "SS [Passionate Femme Fatale] • Squad 31A Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Fire",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/12586324/4f47417f5689b7358971d19a4ceee2b2.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4945,
        "dpOrSpeed": 4838,
        "atkOrPower": 574,
        "defOrGuts": 624,
        "critOrWit": 714,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Passionate Femme Fatale — Fire Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Fire Field (+65%) + +85% Fire Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Fire Field Zone",
            "Fire Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Fire"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-643121",
        "hbr-793215",
        "hbr-721625"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "Tsukasa Tojo [Passionate Femme Fatale] is a SS-Tier Fire Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-784346"
    },
    {
      "externalId": "hbr-unit-784342",
      "slug": "hbr-784342",
      "nameEn": "Queen (Makoto Niijima) [Discerning Priestess]",
      "nameOriginal": "Queen (Makoto Niijima)",
      "styleOrTitle": "SS [Discerning Priestess] • Squad P5R Breaker",
      "rarity": "SS",
      "role": "Breaker (Crush)",
      "roleColumn": "DPS",
      "element": "None",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/12586325/71e3ac9de210c334d85e1e96152a0746.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5010,
        "dpOrSpeed": 5240,
        "atkOrPower": 745,
        "defOrGuts": 650,
        "critOrWit": 675,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Discerning Priestess — Shattering DP Finisher",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "4-Hit Non-Elemental Crush (+50% DP Break Bonus • 11,800 Potency)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DP Shield Break +50%",
            "Non-Elemental",
            "Crush",
            "Crit Rate Up"
          ],
          "exactDescription": "Delivers a 4-hit Non-Elemental Crush strike with a +50% multiplier bonus against enemy DP Shields, instantly shattering Grade 140 boss barriers on Turn 1 of Overdrive."
        },
        {
          "name": "Shield-Crushing Volley",
          "type": "ACTIVE",
          "spOrEnergyCost": "8 SP",
          "multiplierSummary": "+30% DP Damage + Self Non-Elemental Skill ATK Up",
          "hitCount": 3,
          "buffCategoryTags": [
            "DP Break",
            "Non-Elemental",
            "Crush"
          ],
          "exactDescription": "Strikes all enemies for AoE DP damage while pre-buffing self Skill Attack."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases Non-Elemental Crush skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-692830",
        "hbr-712353",
        "hbr-686333"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "Queen (Makoto Niijima) [Discerning Priestess] is a SS-Tier Non-Elemental Breaker (Crush) in Heaven Burns Red. Delivers a 4-hit Non-Elemental Crush strike with a +50% multiplier bonus against enemy DP Shields, instantly shattering Grade 140 boss barriers on Turn 1 of Overdrive.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-784342"
    },
    {
      "externalId": "hbr-unit-783178",
      "slug": "hbr-783178",
      "nameEn": "Byakko [White Fang of the Battlefield]",
      "nameOriginal": "Byakko",
      "styleOrTitle": "SS [White Fang of the Battlefield] • Squad 31B Blaster",
      "rarity": "SS",
      "role": "Blaster (Pierce)",
      "roleColumn": "SUB_DPS",
      "element": "Dark",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/12534556/76061b22b7f2d0f74286d5da2c67f347.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4925,
        "dpOrSpeed": 4822,
        "atkOrPower": 711,
        "defOrGuts": 616,
        "critOrWit": 641,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: White Fang of the Battlefield — 10-Hit Destruction Storm",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "13 SP",
          "multiplierSummary": "10-Hit Dark Pierce + 4.5× Destruction Rate Cap (999%)",
          "hitCount": 10,
          "buffCategoryTags": [
            "Destruction Rate 4.5x",
            "10-Hit OD Gauge",
            "Dark",
            "Pierce",
            "Funnel"
          ],
          "exactDescription": "Unleashes a 10-hit Dark Pierce barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge."
        },
        {
          "name": "Multi-Hit Overdrive Charger",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "6-Hit Rapid Barrage + Self Funnel +3 Hits",
          "hitCount": 6,
          "buffCategoryTags": [
            "Destruction Rate",
            "Multi-Hit OD",
            "Dark"
          ],
          "exactDescription": "Generates +35% Overdrive gauge per cast and pre-stacks self Funnel before boss DP break."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases Dark Pierce skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-839459",
        "hbr-749659",
        "hbr-652687"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.4,
      "summaryVerdict": "Byakko [White Fang of the Battlefield] is a SS-Tier Dark Blaster (Pierce) in Heaven Burns Red. Unleashes a 10-hit Dark Pierce barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-783178"
    },
    {
      "externalId": "hbr-unit-781369",
      "slug": "hbr-781369",
      "nameEn": "Inori Natsume [Flower Shadow Dance Stance]",
      "nameOriginal": "Inori Natsume",
      "styleOrTitle": "SS [Flower Shadow Dance Stance] • Squad 31F Attacker",
      "rarity": "SS",
      "role": "Attacker (Slash)",
      "roleColumn": "DPS",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12517958/66e30ff2b8eeb1ff2fd00171a555430d.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4990,
        "dpOrSpeed": 4874,
        "atkOrPower": 737,
        "defOrGuts": 642,
        "critOrWit": 667,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Flower Shadow Dance Stance — Apex HP Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "14 SP",
          "multiplierSummary": "5-Hit Ice Slash (+50% HP Bonus • 14,250 Max Potency)",
          "hitCount": 5,
          "buffCategoryTags": [
            "HP +50% Finisher",
            "Ice",
            "Slash",
            "Self Crit & Mind Eye"
          ],
          "exactDescription": "Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Ice Slash nuke with +50% bonus potency against enemy HP."
        },
        {
          "name": "Focused Charge & Self Funnel",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Self +75% Ice Skill ATK + 3-Hit Funnel",
          "hitCount": 2,
          "buffCategoryTags": [
            "Self Buff",
            "Funnel",
            "Ice"
          ],
          "exactDescription": "Pre-stacks Self Elemental Skill Attack Up and 3-Hit Funnel on the turn prior to Overdrive burst."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases Ice Slash skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-752168",
        "hbr-764339",
        "hbr-794994"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Inori Natsume [Flower Shadow Dance Stance] is a SS-Tier Ice Attacker (Slash) in Heaven Burns Red. Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Ice Slash nuke with +50% bonus potency against enemy HP.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-781369"
    },
    {
      "externalId": "hbr-unit-781370",
      "slug": "hbr-781370",
      "nameEn": "Maki Kurosawa [Empress of the Showdown]",
      "nameOriginal": "Maki Kurosawa",
      "styleOrTitle": "SS [Empress of the Showdown] • Squad 31F Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Crush)",
      "roleColumn": "SUB_DPS",
      "element": "Thunder",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/12517959/4d491ceca32b1e9f917f1b114ae374a7.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5055,
        "dpOrSpeed": 4926,
        "atkOrPower": 763,
        "defOrGuts": 713,
        "critOrWit": 783,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Empress of the Showdown — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Thunder DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Thunder DEF Down",
            "Fragile +50%",
            "Thunder",
            "Crush"
          ],
          "exactDescription": "Strikes all enemies 4 times with Thunder Crush damage while simultaneously applying -45% Base DEF Down, -45% Thunder Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Thunder"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Thunder Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-667359",
        "hbr-746396",
        "hbr-769410"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.3,
      "summaryVerdict": "Maki Kurosawa [Empress of the Showdown] is a SS-Tier Thunder Debuffer (Crush) in Heaven Burns Red. Strikes all enemies 4 times with Thunder Crush damage while simultaneously applying -45% Base DEF Down, -45% Thunder Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-781370"
    },
    {
      "externalId": "hbr-unit-779180",
      "slug": "hbr-779180",
      "nameEn": "Akari Date [Forward, Never Give Up!]",
      "nameOriginal": "Akari Date",
      "styleOrTitle": "SS [Forward, Never Give Up!] • Squad 31D Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Crush)",
      "roleColumn": "SUB_DPS",
      "element": "Light",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/12476911/2f0aa35da8a622f8561d3ea114bb07bf.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4970,
        "dpOrSpeed": 4858,
        "atkOrPower": 729,
        "defOrGuts": 679,
        "critOrWit": 749,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Forward, Never Give Up! — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Light DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Light DEF Down",
            "Fragile +50%",
            "Light",
            "Crush"
          ],
          "exactDescription": "Strikes all enemies 4 times with Light Crush damage while simultaneously applying -45% Base DEF Down, -45% Light Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Light"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Light Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-784344",
        "hbr-797590",
        "hbr-813761"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "Akari Date [Forward, Never Give Up!] is a SS-Tier Light Debuffer (Crush) in Heaven Burns Red. Strikes all enemies 4 times with Light Crush damage while simultaneously applying -45% Base DEF Down, -45% Light Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-779180"
    },
    {
      "externalId": "hbr-unit-775106",
      "slug": "hbr-775106",
      "nameEn": "Hisame Ogasawara [Springtime Easter Bunny]",
      "nameOriginal": "Hisame Ogasawara",
      "styleOrTitle": "SS [Springtime Easter Bunny] • Squad 30G Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Fire",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/12429920/089e71418af35187e471997a7d557f0e.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5035,
        "dpOrSpeed": 4910,
        "atkOrPower": 610,
        "defOrGuts": 660,
        "critOrWit": 750,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Springtime Easter Bunny — Fire Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Fire Field (+65%) + +85% Fire Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Fire Field Zone",
            "Fire Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Fire"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-643121",
        "hbr-793215",
        "hbr-721625"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "Hisame Ogasawara [Springtime Easter Bunny] is a SS-Tier Fire Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-775106"
    },
    {
      "externalId": "hbr-unit-764339",
      "slug": "hbr-764339",
      "nameEn": "Megumi Aikawa [Special Night Girls Jam]",
      "nameOriginal": "Megumi Aikawa",
      "styleOrTitle": "SS [Special Night Girls Jam] • Squad 31A Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Crush)",
      "roleColumn": "SUB_DPS",
      "element": "Ice",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/12349125/cea5fadcb362a1937f134cbb52cf6a28.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4950,
        "dpOrSpeed": 4842,
        "atkOrPower": 721,
        "defOrGuts": 671,
        "critOrWit": 741,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Special Night Girls Jam — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Ice DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Ice DEF Down",
            "Fragile +50%",
            "Ice",
            "Crush"
          ],
          "exactDescription": "Strikes all enemies 4 times with Ice Crush damage while simultaneously applying -45% Base DEF Down, -45% Ice Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Ice"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-825787",
        "hbr-752168",
        "hbr-794994"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "Megumi Aikawa [Special Night Girls Jam] is a SS-Tier Ice Debuffer (Crush) in Heaven Burns Red. Strikes all enemies 4 times with Ice Crush damage while simultaneously applying -45% Base DEF Down, -45% Ice Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-764339"
    },
    {
      "externalId": "hbr-unit-755194",
      "slug": "hbr-755194",
      "nameEn": "Saki Tezuka [Dawn of Hope]",
      "nameOriginal": "Saki Tezuka",
      "styleOrTitle": "SS [Dawn of Hope] • Command HQ Attacker",
      "rarity": "SS",
      "role": "Attacker (Pierce)",
      "roleColumn": "DPS",
      "element": "Thunder",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/12310240/72f73cd03ed731213d871919a8cce579.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5015,
        "dpOrSpeed": 4894,
        "atkOrPower": 747,
        "defOrGuts": 652,
        "critOrWit": 677,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Dawn of Hope — Apex HP Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "14 SP",
          "multiplierSummary": "5-Hit Thunder Pierce (+50% HP Bonus • 14,250 Max Potency)",
          "hitCount": 5,
          "buffCategoryTags": [
            "HP +50% Finisher",
            "Thunder",
            "Pierce",
            "Self Crit & Mind Eye"
          ],
          "exactDescription": "Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Thunder Pierce nuke with +50% bonus potency against enemy HP."
        },
        {
          "name": "Focused Charge & Self Funnel",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Self +75% Thunder Skill ATK + 3-Hit Funnel",
          "hitCount": 2,
          "buffCategoryTags": [
            "Self Buff",
            "Funnel",
            "Thunder"
          ],
          "exactDescription": "Pre-stacks Self Elemental Skill Attack Up and 3-Hit Funnel on the turn prior to Overdrive burst."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Thunder Seraphic Mastery",
          "effect": "Increases Thunder Pierce skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-746396",
        "hbr-712350",
        "hbr-769410"
      ],
      "tierOverall": "SS",
      "tierReroll": "S",
      "tierBossRaid": "SSS",
      "numericScore": 9.3,
      "summaryVerdict": "Saki Tezuka [Dawn of Hope] is a SS-Tier Thunder Attacker (Pierce) in Heaven Burns Red. Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Thunder Pierce nuke with +50% bonus potency against enemy HP.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-755194"
    },
    {
      "externalId": "hbr-unit-756804",
      "slug": "hbr-756804",
      "nameEn": "Erika Aoi [Connecting Legacy]",
      "nameOriginal": "Erika Aoi",
      "styleOrTitle": "SS [Connecting Legacy] • Squad 31B Healer",
      "rarity": "SS",
      "role": "Healer (Crush)",
      "roleColumn": "SUSTAIN",
      "element": "Ice",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/12213479/3ae51076b9af61de0e4efc0204a228c7.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5554,
        "dpOrSpeed": 5700,
        "atkOrPower": 568,
        "defOrGuts": 723,
        "critOrWit": 643,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Connecting Legacy — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Ice"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-825787",
        "hbr-752168",
        "hbr-764339"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Erika Aoi [Connecting Legacy] is a SS-Tier Ice Healer (Crush) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-756804"
    },
    {
      "externalId": "hbr-unit-746396",
      "slug": "hbr-746396",
      "nameEn": "Kanata Maruyama [Regalia of Uprising]",
      "nameOriginal": "Kanata Maruyama",
      "styleOrTitle": "SS [Regalia of Uprising] • Squad 31F Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Thunder",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/12037257/53334696cca7db0e558e624cf366a6d4.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4995,
        "dpOrSpeed": 4878,
        "atkOrPower": 594,
        "defOrGuts": 644,
        "critOrWit": 734,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Regalia of Uprising — Thunder Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Thunder Field (+65%) + +85% Thunder Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Thunder Field Zone",
            "Thunder Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Thunder Field Zone (+65% Thunder damage) while applying +85% Thunder Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Thunder"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Thunder Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-667359",
        "hbr-712350",
        "hbr-769410"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "Kanata Maruyama [Regalia of Uprising] is a SS-Tier Thunder Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Thunder Field Zone (+65% Thunder damage) while applying +85% Thunder Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-746396"
    },
    {
      "externalId": "hbr-unit-730675",
      "slug": "hbr-730675",
      "nameEn": "Tama Kunimi [Welcome to the Nightmare Parade]",
      "nameOriginal": "Tama Kunimi",
      "styleOrTitle": "SS [Welcome to the Nightmare Parade] • Squad 31A Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Slash)",
      "roleColumn": "SUB_DPS",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11868888/9cec9a41904d1d0995a1701747f52cef.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4910,
        "dpOrSpeed": 4810,
        "atkOrPower": 705,
        "defOrGuts": 655,
        "critOrWit": 725,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Welcome to the Nightmare Parade — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Ice DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Ice DEF Down",
            "Fragile +50%",
            "Ice",
            "Slash"
          ],
          "exactDescription": "Strikes all enemies 4 times with Ice Slash damage while simultaneously applying -45% Base DEF Down, -45% Ice Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Ice"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-825787",
        "hbr-752168",
        "hbr-794994"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "Tama Kunimi [Welcome to the Nightmare Parade] is a SS-Tier Ice Debuffer (Slash) in Heaven Burns Red. Strikes all enemies 4 times with Ice Slash damage while simultaneously applying -45% Base DEF Down, -45% Ice Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-730675"
    },
    {
      "externalId": "hbr-unit-724681",
      "slug": "hbr-724681",
      "nameEn": "Ichigo Minase [Slugfest! Home Run Smash!]",
      "nameOriginal": "Ichigo Minase",
      "styleOrTitle": "SS [Slugfest! Home Run Smash!] • Squad 31B Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Light",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/11847198/854bbf319124513639d55203f52700b8.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4975,
        "dpOrSpeed": 4862,
        "atkOrPower": 586,
        "defOrGuts": 636,
        "critOrWit": 726,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Slugfest! Home Run Smash! — Light Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Light Field (+65%) + +85% Light Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Light Field Zone",
            "Light Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Light Field Zone (+65% Light damage) while applying +85% Light Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Light"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Light Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-724680",
        "hbr-779180",
        "hbr-769411"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "Ichigo Minase [Slugfest! Home Run Smash!] is a SS-Tier Light Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Light Field Zone (+65% Light damage) while applying +85% Light Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-724681"
    },
    {
      "externalId": "hbr-unit-712350",
      "slug": "hbr-712350",
      "nameEn": "Aina Mizuhara [Jump Into Sparkling Summer!]",
      "nameOriginal": "Aina Mizuhara",
      "styleOrTitle": "SS [Jump Into Sparkling Summer!] • Squad 31D Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Crush)",
      "roleColumn": "SUB_DPS",
      "element": "Thunder",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/11695752/c98e0728e936caa350a48a649ecebd39.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5040,
        "dpOrSpeed": 4914,
        "atkOrPower": 757,
        "defOrGuts": 707,
        "critOrWit": 777,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Jump Into Sparkling Summer! — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Thunder DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Thunder DEF Down",
            "Fragile +50%",
            "Thunder",
            "Crush"
          ],
          "exactDescription": "Strikes all enemies 4 times with Thunder Crush damage while simultaneously applying -45% Base DEF Down, -45% Thunder Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Thunder"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Thunder Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-755194",
        "hbr-759416",
        "hbr-692832"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Aina Mizuhara [Jump Into Sparkling Summer!] is a SS-Tier Thunder Debuffer (Crush) in Heaven Burns Red. Strikes all enemies 4 times with Thunder Crush damage while simultaneously applying -45% Base DEF Down, -45% Thunder Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-712350"
    },
    {
      "externalId": "hbr-unit-712353",
      "slug": "hbr-712353",
      "nameEn": "Mari Satsuki [Strategist of Chaos]",
      "nameOriginal": "Mari Satsuki",
      "styleOrTitle": "SS [Strategist of Chaos] • Squad 31C Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Pierce)",
      "roleColumn": "SUB_DPS",
      "element": "None",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/11695750/220381a7b35e70b0c8199bbba4c2e3c6.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4955,
        "dpOrSpeed": 4846,
        "atkOrPower": 723,
        "defOrGuts": 673,
        "critOrWit": 743,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Strategist of Chaos — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Non-Elemental DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Non-Elemental DEF Down",
            "Fragile +50%",
            "Non-Elemental",
            "Pierce"
          ],
          "exactDescription": "Strikes all enemies 4 times with Non-Elemental Pierce damage while simultaneously applying -45% Base DEF Down, -45% Non-Elemental Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Non-Elemental"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-683118",
        "hbr-657138",
        "hbr-663244"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.3,
      "summaryVerdict": "Mari Satsuki [Strategist of Chaos] is a SS-Tier Non-Elemental Debuffer (Pierce) in Heaven Burns Red. Strikes all enemies 4 times with Non-Elemental Pierce damage while simultaneously applying -45% Base DEF Down, -45% Non-Elemental Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-712353"
    },
    {
      "externalId": "hbr-unit-708980",
      "slug": "hbr-708980",
      "nameEn": "Karen Asakura [CODE: Virtual Killer]",
      "nameOriginal": "Karen Asakura",
      "styleOrTitle": "SS [CODE: Virtual Killer] • Squad 31A Blaster",
      "rarity": "SS",
      "role": "Blaster (Slash)",
      "roleColumn": "SUB_DPS",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11656157/928e6ff5da71496febe35af747a88f91.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5020,
        "dpOrSpeed": 4898,
        "atkOrPower": 749,
        "defOrGuts": 654,
        "critOrWit": 679,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: CODE: Virtual Killer — 10-Hit Destruction Storm",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "13 SP",
          "multiplierSummary": "10-Hit Non-Elemental Slash + 4.5× Destruction Rate Cap (999%)",
          "hitCount": 10,
          "buffCategoryTags": [
            "Destruction Rate 4.5x",
            "10-Hit OD Gauge",
            "Non-Elemental",
            "Slash",
            "Funnel"
          ],
          "exactDescription": "Unleashes a 10-hit Non-Elemental Slash barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge."
        },
        {
          "name": "Multi-Hit Overdrive Charger",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "6-Hit Rapid Barrage + Self Funnel +3 Hits",
          "hitCount": 6,
          "buffCategoryTags": [
            "Destruction Rate",
            "Multi-Hit OD",
            "Non-Elemental"
          ],
          "exactDescription": "Generates +35% Overdrive gauge per cast and pre-stacks self Funnel before boss DP break."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases Non-Elemental Slash skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803495",
        "hbr-692830",
        "hbr-686333"
      ],
      "tierOverall": "SS",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "Karen Asakura [CODE: Virtual Killer] is a SS-Tier Non-Elemental Blaster (Slash) in Heaven Burns Red. Unleashes a 10-hit Non-Elemental Slash barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-708980"
    },
    {
      "externalId": "hbr-unit-706660",
      "slug": "hbr-706660",
      "nameEn": "Erika Aoi [Shining Mermaid Vacation]",
      "nameOriginal": "Erika Aoi",
      "styleOrTitle": "SS [Shining Mermaid Vacation] • Squad 31B Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Crush)",
      "roleColumn": "SUB_DPS",
      "element": "Dark",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/11572103/5068210b4e8d4ca058002380661c923c.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4935,
        "dpOrSpeed": 4830,
        "atkOrPower": 715,
        "defOrGuts": 665,
        "critOrWit": 735,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Shining Mermaid Vacation — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Dark DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Dark DEF Down",
            "Fragile +50%",
            "Dark",
            "Crush"
          ],
          "exactDescription": "Strikes all enemies 4 times with Dark Crush damage while simultaneously applying -45% Base DEF Down, -45% Dark Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Dark"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-839459",
        "hbr-749659",
        "hbr-652687"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.5,
      "summaryVerdict": "Erika Aoi [Shining Mermaid Vacation] is a SS-Tier Dark Debuffer (Crush) in Heaven Burns Red. Strikes all enemies 4 times with Dark Crush damage while simultaneously applying -45% Base DEF Down, -45% Dark Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-706660"
    },
    {
      "externalId": "hbr-unit-692830",
      "slug": "hbr-692830",
      "nameEn": "Mion Yanagi [Scent of Night, Melody of Roses]",
      "nameOriginal": "Mion Yanagi",
      "styleOrTitle": "SS [Scent of Night, Melody of Roses] • Squad 31F Admiral",
      "rarity": "SS",
      "role": "Admiral (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/11605624/6c6f58bf4a4aa44475df208131eabead.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5000,
        "dpOrSpeed": 4882,
        "atkOrPower": 596,
        "defOrGuts": 646,
        "critOrWit": 736,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Scent of Night, Melody of Roses — Absolute Crit & Skill Mastery",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "+90% Skill ATK Up + +100% Crit Rate + 5-Hit Funnel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "Crit Rate 100%",
            "Crit DMG Up",
            "Mind Eye"
          ],
          "exactDescription": "Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Non-Elemental"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803495",
        "hbr-712353",
        "hbr-686333"
      ],
      "tierOverall": "SS",
      "tierReroll": "SSS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "Mion Yanagi [Scent of Night, Melody of Roses] is a SS-Tier Non-Elemental Admiral (Pierce) in Heaven Burns Red. Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-692830"
    },
    {
      "externalId": "hbr-unit-686333",
      "slug": "hbr-686333",
      "nameEn": "Seira Sakuraba [Archmage of the Demon Lord]",
      "nameOriginal": "Seira Sakuraba",
      "styleOrTitle": "SS [Archmage of the Demon Lord] • Squad 31C Defender",
      "rarity": "SS",
      "role": "Defender (Crush)",
      "roleColumn": "SUSTAIN",
      "element": "None",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/11305350/6d41c92a4475e5ff467da5a55a44466c.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5536,
        "dpOrSpeed": 5685,
        "atkOrPower": 562,
        "defOrGuts": 717,
        "critOrWit": 637,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Archmage of the Demon Lord — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Non-Elemental"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-683118",
        "hbr-657138",
        "hbr-708980"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.3,
      "summaryVerdict": "Seira Sakuraba [Archmage of the Demon Lord] is a SS-Tier Non-Elemental Defender (Crush) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-686333"
    },
    {
      "externalId": "hbr-unit-677349",
      "slug": "hbr-677349",
      "nameEn": "Ichiko Ohshima [Guiding Lucent]",
      "nameOriginal": "Ichiko Ohshima",
      "styleOrTitle": "SS [Guiding Lucent] • Squad 31E Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Crush)",
      "roleColumn": "SUB_DPS",
      "element": "Light",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/11605628/35d05282b6fbd7670503494ba1f8ece8.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4980,
        "dpOrSpeed": 4866,
        "atkOrPower": 733,
        "defOrGuts": 683,
        "critOrWit": 753,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Guiding Lucent — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Light DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Light DEF Down",
            "Fragile +50%",
            "Light",
            "Crush"
          ],
          "exactDescription": "Strikes all enemies 4 times with Light Crush damage while simultaneously applying -45% Base DEF Down, -45% Light Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Light"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Light Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-784344",
        "hbr-797590",
        "hbr-813761"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Ichiko Ohshima [Guiding Lucent] is a SS-Tier Light Debuffer (Crush) in Heaven Burns Red. Strikes all enemies 4 times with Light Crush damage while simultaneously applying -45% Base DEF Down, -45% Light Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-677349"
    },
    {
      "externalId": "hbr-unit-669859",
      "slug": "hbr-669859",
      "nameEn": "Tsukasa Tojo [Lament of Sorrow]",
      "nameOriginal": "Tsukasa Tojo",
      "styleOrTitle": "SS [Lament of Sorrow] • Squad 31A Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Ice",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/11063434/767796f421516f4f0806dee7d19e9c3a.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5045,
        "dpOrSpeed": 4918,
        "atkOrPower": 614,
        "defOrGuts": 664,
        "critOrWit": 754,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Lament of Sorrow — Ice Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Ice Field (+65%) + +85% Ice Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Ice Field Zone",
            "Ice Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Ice Field Zone (+65% Ice damage) while applying +85% Ice Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Ice"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803496",
        "hbr-730675",
        "hbr-756804"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "Tsukasa Tojo [Lament of Sorrow] is a SS-Tier Ice Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Ice Field Zone (+65% Ice damage) while applying +85% Ice Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-669859"
    },
    {
      "externalId": "hbr-unit-667355",
      "slug": "hbr-667355",
      "nameEn": "Misato Nikaido [Lead by Example]",
      "nameOriginal": "Misato Nikaido",
      "styleOrTitle": "SS [Lead by Example] • Squad 31D Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Crush)",
      "roleColumn": "SUB_DPS",
      "element": "Fire",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/11605626/0a7388b17da7b94e9c3d8bfb0d5a3ffe.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4960,
        "dpOrSpeed": 4850,
        "atkOrPower": 725,
        "defOrGuts": 675,
        "critOrWit": 745,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Lead by Example — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Fire DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Fire DEF Down",
            "Fragile +50%",
            "Fire",
            "Crush"
          ],
          "exactDescription": "Strikes all enemies 4 times with Fire Crush damage while simultaneously applying -45% Base DEF Down, -45% Fire Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Fire"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-810832",
        "hbr-752169",
        "hbr-642066"
      ],
      "tierOverall": "SS",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "Misato Nikaido [Lead by Example] is a SS-Tier Fire Debuffer (Crush) in Heaven Burns Red. Strikes all enemies 4 times with Fire Crush damage while simultaneously applying -45% Base DEF Down, -45% Fire Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-667355"
    },
    {
      "externalId": "hbr-unit-657138",
      "slug": "hbr-657138",
      "nameEn": "Ruka Kayamori [Diva of the White Blossom]",
      "nameOriginal": "Ruka Kayamori",
      "styleOrTitle": "SS [Diva of the White Blossom] • Squad 31A Buffer",
      "rarity": "SS",
      "role": "Buffer (Slash)",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10803349/6375ad5883a5103bd517da8cc11ef8fd.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5025,
        "dpOrSpeed": 4902,
        "atkOrPower": 606,
        "defOrGuts": 656,
        "critOrWit": 746,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Diva of the White Blossom — Absolute Crit & Skill Mastery",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "+90% Skill ATK Up + +100% Crit Rate + 5-Hit Funnel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "Crit Rate 100%",
            "Crit DMG Up",
            "Mind Eye"
          ],
          "exactDescription": "Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Non-Elemental"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-683118",
        "hbr-708980",
        "hbr-663244"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "Ruka Kayamori [Diva of the White Blossom] is a SS-Tier Non-Elemental Buffer (Slash) in Heaven Burns Red. Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-657138"
    },
    {
      "externalId": "hbr-unit-652684",
      "slug": "hbr-652684",
      "nameEn": "Erika Aoi [Echoing Battlecry]",
      "nameOriginal": "Erika Aoi",
      "styleOrTitle": "SS [Echoing Battlecry] • Squad 31B Admiral",
      "rarity": "SS",
      "role": "Admiral (Crush)",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/10699305/96765452bcf48304038e016345897c97.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4940,
        "dpOrSpeed": 4834,
        "atkOrPower": 572,
        "defOrGuts": 622,
        "critOrWit": 712,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Echoing Battlecry — Absolute Crit & Skill Mastery",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "+90% Skill ATK Up + +100% Crit Rate + 5-Hit Funnel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "Crit Rate 100%",
            "Crit DMG Up",
            "Mind Eye"
          ],
          "exactDescription": "Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Non-Elemental"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803495",
        "hbr-712353",
        "hbr-686333"
      ],
      "tierOverall": "SS",
      "tierReroll": "SSS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Erika Aoi [Echoing Battlecry] is a SS-Tier Non-Elemental Admiral (Crush) in Heaven Burns Red. Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-652684"
    },
    {
      "externalId": "hbr-unit-648704",
      "slug": "hbr-648704",
      "nameEn": "Sumomo Minase [Blossoming Compassion]",
      "nameOriginal": "Sumomo Minase",
      "styleOrTitle": "SS [Blossoming Compassion] • Squad 31B Attacker",
      "rarity": "SS",
      "role": "Attacker (Slash)",
      "roleColumn": "DPS",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10651873/662ecf6698c9ab569e21cfefd92113c5.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5005,
        "dpOrSpeed": 4886,
        "atkOrPower": 743,
        "defOrGuts": 648,
        "critOrWit": 673,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Blossoming Compassion — Apex HP Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "14 SP",
          "multiplierSummary": "5-Hit Non-Elemental Slash (+50% HP Bonus • 14,250 Max Potency)",
          "hitCount": 5,
          "buffCategoryTags": [
            "HP +50% Finisher",
            "Non-Elemental",
            "Slash",
            "Self Crit & Mind Eye"
          ],
          "exactDescription": "Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Non-Elemental Slash nuke with +50% bonus potency against enemy HP."
        },
        {
          "name": "Focused Charge & Self Funnel",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Self +75% Non-Elemental Skill ATK + 3-Hit Funnel",
          "hitCount": 2,
          "buffCategoryTags": [
            "Self Buff",
            "Funnel",
            "Non-Elemental"
          ],
          "exactDescription": "Pre-stacks Self Elemental Skill Attack Up and 3-Hit Funnel on the turn prior to Overdrive burst."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases Non-Elemental Slash skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-657138",
        "hbr-708980",
        "hbr-663244"
      ],
      "tierOverall": "SS",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Sumomo Minase [Blossoming Compassion] is a SS-Tier Non-Elemental Attacker (Slash) in Heaven Burns Red. Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Non-Elemental Slash nuke with +50% bonus potency against enemy HP.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-648704"
    },
    {
      "externalId": "hbr-unit-643121",
      "slug": "hbr-643121",
      "nameEn": "Yuki Izumi [Princess by Your Side]",
      "nameOriginal": "Yuki Izumi",
      "styleOrTitle": "SS [Princess by Your Side] • Squad 31A Breaker",
      "rarity": "SS",
      "role": "Breaker (Pierce)",
      "roleColumn": "DPS",
      "element": "Fire",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/11603313/4a617d2dc76f106131eabcf60a13eac0.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4920,
        "dpOrSpeed": 5168,
        "atkOrPower": 709,
        "defOrGuts": 614,
        "critOrWit": 639,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Princess by Your Side — Shattering DP Finisher",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "4-Hit Fire Pierce (+50% DP Break Bonus • 11,800 Potency)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DP Shield Break +50%",
            "Fire",
            "Pierce",
            "Crit Rate Up"
          ],
          "exactDescription": "Delivers a 4-hit Fire Pierce strike with a +50% multiplier bonus against enemy DP Shields, instantly shattering Grade 140 boss barriers on Turn 1 of Overdrive."
        },
        {
          "name": "Shield-Crushing Volley",
          "type": "ACTIVE",
          "spOrEnergyCost": "8 SP",
          "multiplierSummary": "+30% DP Damage + Self Fire Skill ATK Up",
          "hitCount": 3,
          "buffCategoryTags": [
            "DP Break",
            "Fire",
            "Pierce"
          ],
          "exactDescription": "Strikes all enemies for AoE DP damage while pre-buffing self Skill Attack."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases Fire Pierce skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-752169",
        "hbr-816687",
        "hbr-642066"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "S",
      "numericScore": 9.2,
      "summaryVerdict": "Yuki Izumi [Princess by Your Side] is a SS-Tier Fire Breaker (Pierce) in Heaven Burns Red. Delivers a 4-hit Fire Pierce strike with a +50% multiplier bonus against enemy DP Shields, instantly shattering Grade 140 boss barriers on Turn 1 of Overdrive.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-643121"
    },
    {
      "externalId": "hbr-unit-638288",
      "slug": "hbr-638288",
      "nameEn": "Hisame Ogasawara [Summer Dusk Garnet]",
      "nameOriginal": "Hisame Ogasawara",
      "styleOrTitle": "SS [Summer Dusk Garnet] • Squad 30G Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Pierce)",
      "roleColumn": "SUB_DPS",
      "element": "Ice",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/10485922/ccc9898807378abab078b4873d93e317.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4985,
        "dpOrSpeed": 4870,
        "atkOrPower": 735,
        "defOrGuts": 685,
        "critOrWit": 755,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Summer Dusk Garnet — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Ice DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Ice DEF Down",
            "Fragile +50%",
            "Ice",
            "Pierce"
          ],
          "exactDescription": "Strikes all enemies 4 times with Ice Pierce damage while simultaneously applying -45% Base DEF Down, -45% Ice Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Ice"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803496",
        "hbr-669859",
        "hbr-756804"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.5,
      "summaryVerdict": "Hisame Ogasawara [Summer Dusk Garnet] is a SS-Tier Ice Debuffer (Pierce) in Heaven Burns Red. Strikes all enemies 4 times with Ice Pierce damage while simultaneously applying -45% Base DEF Down, -45% Ice Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-638288"
    },
    {
      "externalId": "hbr-unit-628230",
      "slug": "hbr-628230",
      "nameEn": "Megumi Aikawa [Never-Ending Summer]",
      "nameOriginal": "Megumi Aikawa",
      "styleOrTitle": "SS [Never-Ending Summer] • Squad 31A Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Crush)",
      "roleColumn": "SUB_DPS",
      "element": "Thunder",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/10272971/610630410f39037d230436f0857c3c3c.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5050,
        "dpOrSpeed": 4922,
        "atkOrPower": 761,
        "defOrGuts": 711,
        "critOrWit": 781,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Never-Ending Summer — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Thunder DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Thunder DEF Down",
            "Fragile +50%",
            "Thunder",
            "Crush"
          ],
          "exactDescription": "Strikes all enemies 4 times with Thunder Crush damage while simultaneously applying -45% Base DEF Down, -45% Thunder Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Thunder"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Thunder Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-755194",
        "hbr-759416",
        "hbr-692832"
      ],
      "tierOverall": "SS",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "Megumi Aikawa [Never-Ending Summer] is a SS-Tier Thunder Debuffer (Crush) in Heaven Burns Red. Strikes all enemies 4 times with Thunder Crush damage while simultaneously applying -45% Base DEF Down, -45% Thunder Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-628230"
    },
    {
      "externalId": "hbr-unit-621315",
      "slug": "hbr-621315",
      "nameEn": "Yuina Shirakawa [The Moon Is Beautiful]",
      "nameOriginal": "Yuina Shirakawa",
      "styleOrTitle": "SS [The Moon Is Beautiful] • Squad 30G Attacker",
      "rarity": "SS",
      "role": "Attacker (Slash)",
      "roleColumn": "DPS",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11592506/6b7161b536e84cfa9cc7059bbf82e1e0.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4965,
        "dpOrSpeed": 4854,
        "atkOrPower": 727,
        "defOrGuts": 632,
        "critOrWit": 657,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: The Moon Is Beautiful — Apex HP Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "14 SP",
          "multiplierSummary": "5-Hit Ice Slash (+50% HP Bonus • 14,250 Max Potency)",
          "hitCount": 5,
          "buffCategoryTags": [
            "HP +50% Finisher",
            "Ice",
            "Slash",
            "Self Crit & Mind Eye"
          ],
          "exactDescription": "Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Ice Slash nuke with +50% bonus potency against enemy HP."
        },
        {
          "name": "Focused Charge & Self Funnel",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Self +75% Ice Skill ATK + 3-Hit Funnel",
          "hitCount": 2,
          "buffCategoryTags": [
            "Self Buff",
            "Funnel",
            "Ice"
          ],
          "exactDescription": "Pre-stacks Self Elemental Skill Attack Up and 3-Hit Funnel on the turn prior to Overdrive burst."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases Ice Slash skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-669859",
        "hbr-730675",
        "hbr-756804"
      ],
      "tierOverall": "SS",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Yuina Shirakawa [The Moon Is Beautiful] is a SS-Tier Ice Attacker (Slash) in Heaven Burns Red. Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Ice Slash nuke with +50% bonus potency against enemy HP.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-621315"
    },
    {
      "externalId": "hbr-unit-603245",
      "slug": "hbr-603245",
      "nameEn": "Tsukasa Tojo [Bunny Fight Deviation]",
      "nameOriginal": "Tsukasa Tojo",
      "styleOrTitle": "SS [Bunny Fight Deviation] • Squad 31A Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Pierce)",
      "roleColumn": "SUB_DPS",
      "element": "Dark",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/9866275/854c6f86c1e74445c72b7f476d532303.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5030,
        "dpOrSpeed": 4906,
        "atkOrPower": 753,
        "defOrGuts": 703,
        "critOrWit": 773,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Bunny Fight Deviation — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Dark DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Dark DEF Down",
            "Fragile +50%",
            "Dark",
            "Pierce"
          ],
          "exactDescription": "Strikes all enemies 4 times with Dark Pierce damage while simultaneously applying -45% Base DEF Down, -45% Dark Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Dark"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-738525",
        "hbr-779179",
        "hbr-832805"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Tsukasa Tojo [Bunny Fight Deviation] is a SS-Tier Dark Debuffer (Pierce) in Heaven Burns Red. Strikes all enemies 4 times with Dark Pierce damage while simultaneously applying -45% Base DEF Down, -45% Dark Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-603245"
    },
    {
      "externalId": "hbr-unit-595464",
      "slug": "hbr-595464",
      "nameEn": "Ruka Kayamori [The Feel of the Throne]",
      "nameOriginal": "Ruka Kayamori",
      "styleOrTitle": "SS [The Feel of the Throne] • Squad 31A Attacker",
      "rarity": "SS",
      "role": "Attacker (Slash)",
      "roleColumn": "DPS",
      "element": "Fire",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11601624/6dcfb1bc4c893beb09867c16faf0f953.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4945,
        "dpOrSpeed": 4838,
        "atkOrPower": 719,
        "defOrGuts": 624,
        "critOrWit": 649,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: The Feel of the Throne — Apex HP Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "14 SP",
          "multiplierSummary": "5-Hit Fire Slash (+50% HP Bonus • 14,250 Max Potency)",
          "hitCount": 5,
          "buffCategoryTags": [
            "HP +50% Finisher",
            "Fire",
            "Slash",
            "Self Crit & Mind Eye"
          ],
          "exactDescription": "Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Fire Slash nuke with +50% bonus potency against enemy HP."
        },
        {
          "name": "Focused Charge & Self Funnel",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Self +75% Fire Skill ATK + 3-Hit Funnel",
          "hitCount": 2,
          "buffCategoryTags": [
            "Self Buff",
            "Funnel",
            "Fire"
          ],
          "exactDescription": "Pre-stacks Self Elemental Skill Attack Up and 3-Hit Funnel on the turn prior to Overdrive burst."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases Fire Slash skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-784346",
        "hbr-793215",
        "hbr-721625"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "S",
      "numericScore": 9.2,
      "summaryVerdict": "Ruka Kayamori [The Feel of the Throne] is a SS-Tier Fire Attacker (Slash) in Heaven Burns Red. Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Fire Slash nuke with +50% bonus potency against enemy HP.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-595464"
    },
    {
      "externalId": "hbr-unit-592870",
      "slug": "hbr-592870",
      "nameEn": "Kanade Tachibana [Soaring Sword]",
      "nameOriginal": "Kanade Tachibana",
      "styleOrTitle": "SS [Soaring Sword] • Squad 31AB Attacker",
      "rarity": "SS",
      "role": "Attacker (Slash)",
      "roleColumn": "DPS",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/13053954/870b805bdce67dfcb4fb0639a6925d06.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5010,
        "dpOrSpeed": 4890,
        "atkOrPower": 745,
        "defOrGuts": 650,
        "critOrWit": 675,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Soaring Sword — Apex HP Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "14 SP",
          "multiplierSummary": "5-Hit Ice Slash (+50% HP Bonus • 14,250 Max Potency)",
          "hitCount": 5,
          "buffCategoryTags": [
            "HP +50% Finisher",
            "Ice",
            "Slash",
            "Self Crit & Mind Eye"
          ],
          "exactDescription": "Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Ice Slash nuke with +50% bonus potency against enemy HP."
        },
        {
          "name": "Focused Charge & Self Funnel",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Self +75% Ice Skill ATK + 3-Hit Funnel",
          "hitCount": 2,
          "buffCategoryTags": [
            "Self Buff",
            "Funnel",
            "Ice"
          ],
          "exactDescription": "Pre-stacks Self Elemental Skill Attack Up and 3-Hit Funnel on the turn prior to Overdrive burst."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases Ice Slash skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-752168",
        "hbr-764339",
        "hbr-794994"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "Kanade Tachibana [Soaring Sword] is a SS-Tier Ice Attacker (Slash) in Heaven Burns Red. Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Ice Slash nuke with +50% bonus potency against enemy HP.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-592870"
    },
    {
      "externalId": "hbr-unit-577125",
      "slug": "hbr-577125",
      "nameEn": "Charlotta Skopovskaya [Eternal Feelings]",
      "nameOriginal": "Charlotta Skopovskaya",
      "styleOrTitle": "SS [Eternal Feelings] • Squad 31X Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Pierce)",
      "roleColumn": "SUB_DPS",
      "element": "Thunder",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/9049136/28fcf20be56c12eae1612dc4a055fde2.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4925,
        "dpOrSpeed": 4822,
        "atkOrPower": 711,
        "defOrGuts": 661,
        "critOrWit": 731,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Eternal Feelings — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Thunder DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Thunder DEF Down",
            "Fragile +50%",
            "Thunder",
            "Pierce"
          ],
          "exactDescription": "Strikes all enemies 4 times with Thunder Pierce damage while simultaneously applying -45% Base DEF Down, -45% Thunder Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Thunder"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Thunder Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-667359",
        "hbr-746396",
        "hbr-769410"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.4,
      "summaryVerdict": "Charlotta Skopovskaya [Eternal Feelings] is a SS-Tier Thunder Debuffer (Pierce) in Heaven Burns Red. Strikes all enemies 4 times with Thunder Pierce damage while simultaneously applying -45% Base DEF Down, -45% Thunder Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-577125"
    },
    {
      "externalId": "hbr-unit-548994",
      "slug": "hbr-548994",
      "nameEn": "Miya Kiryu [Mystery of Abundance]",
      "nameOriginal": "Miya Kiryu",
      "styleOrTitle": "SS [Mystery of Abundance] • Squad 30G Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Pierce)",
      "roleColumn": "SUB_DPS",
      "element": "Thunder",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/8691854/6d9acfbf3a3887871893cca0339f3e4d.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4990,
        "dpOrSpeed": 4874,
        "atkOrPower": 737,
        "defOrGuts": 687,
        "critOrWit": 757,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Mystery of Abundance — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Thunder DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Thunder DEF Down",
            "Fragile +50%",
            "Thunder",
            "Pierce"
          ],
          "exactDescription": "Strikes all enemies 4 times with Thunder Pierce damage while simultaneously applying -45% Base DEF Down, -45% Thunder Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Thunder"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Thunder Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-755194",
        "hbr-759416",
        "hbr-692832"
      ],
      "tierOverall": "SS",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Miya Kiryu [Mystery of Abundance] is a SS-Tier Thunder Debuffer (Pierce) in Heaven Burns Red. Strikes all enemies 4 times with Thunder Pierce damage while simultaneously applying -45% Base DEF Down, -45% Thunder Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-548994"
    },
    {
      "externalId": "hbr-unit-519394",
      "slug": "hbr-519394",
      "nameEn": "Fubuki Mikoto [World End Daydream]",
      "nameOriginal": "Fubuki Mikoto",
      "styleOrTitle": "SS [World End Daydream] • Squad 31D Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Slash)",
      "roleColumn": "SUB_DPS",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/7860694/a8bd6e5edc9ae41700860ebcbc4398b8.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5055,
        "dpOrSpeed": 4926,
        "atkOrPower": 763,
        "defOrGuts": 713,
        "critOrWit": 783,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: World End Daydream — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Non-Elemental DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Non-Elemental DEF Down",
            "Fragile +50%",
            "Non-Elemental",
            "Slash"
          ],
          "exactDescription": "Strikes all enemies 4 times with Non-Elemental Slash damage while simultaneously applying -45% Base DEF Down, -45% Non-Elemental Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Non-Elemental"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-683118",
        "hbr-657138",
        "hbr-663244"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.3,
      "summaryVerdict": "Fubuki Mikoto [World End Daydream] is a SS-Tier Non-Elemental Debuffer (Slash) in Heaven Burns Red. Strikes all enemies 4 times with Non-Elemental Slash damage while simultaneously applying -45% Base DEF Down, -45% Non-Elemental Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-519394"
    },
    {
      "externalId": "hbr-unit-507349",
      "slug": "hbr-507349",
      "nameEn": "Yunxia Li [Peerless General of Valor]",
      "nameOriginal": "Yunxia Li",
      "styleOrTitle": "SS [Peerless General of Valor] • Squad 31X Buffer",
      "rarity": "SS",
      "role": "Buffer (Slash)",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/7665029/e550c361d1ba8eb40c6e5d89e84601e9.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4970,
        "dpOrSpeed": 4858,
        "atkOrPower": 584,
        "defOrGuts": 634,
        "critOrWit": 724,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Peerless General of Valor — Absolute Crit & Skill Mastery",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "+90% Skill ATK Up + +100% Crit Rate + 5-Hit Funnel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "Crit Rate 100%",
            "Crit DMG Up",
            "Mind Eye"
          ],
          "exactDescription": "Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Non-Elemental"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803495",
        "hbr-712353",
        "hbr-686333"
      ],
      "tierOverall": "SS",
      "tierReroll": "SSS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "Yunxia Li [Peerless General of Valor] is a SS-Tier Non-Elemental Buffer (Slash) in Heaven Burns Red. Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-507349"
    },
    {
      "externalId": "hbr-unit-491017",
      "slug": "hbr-491017",
      "nameEn": "Kozue Hiiragi [Nightfall of the Finale]",
      "nameOriginal": "Kozue Hiiragi",
      "styleOrTitle": "SS [Nightfall of the Finale] • Squad 31B Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Slash)",
      "roleColumn": "SUB_DPS",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/7351817/e1adc03263b504b637eea4d699ab35fa.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 12,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5035,
        "dpOrSpeed": 4910,
        "atkOrPower": 755,
        "defOrGuts": 705,
        "critOrWit": 775,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Nightfall of the Finale — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Ice DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Ice DEF Down",
            "Fragile +50%",
            "Ice",
            "Slash"
          ],
          "exactDescription": "Strikes all enemies 4 times with Ice Slash damage while simultaneously applying -45% Base DEF Down, -45% Ice Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Ice"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803496",
        "hbr-669859",
        "hbr-756804"
      ],
      "tierOverall": "SS",
      "tierReroll": "S",
      "tierBossRaid": "SSS",
      "numericScore": 9.5,
      "summaryVerdict": "Kozue Hiiragi [Nightfall of the Finale] is a SS-Tier Ice Debuffer (Slash) in Heaven Burns Red. Strikes all enemies 4 times with Ice Slash damage while simultaneously applying -45% Base DEF Down, -45% Ice Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-491017"
    },
    {
      "externalId": "hbr-unit-832805",
      "slug": "hbr-832805",
      "nameEn": "Iroha Ishii [Forbidden Synthesis]",
      "nameOriginal": "Iroha Ishii",
      "styleOrTitle": "SS [Forbidden Synthesis] • Squad 31D Healer",
      "rarity": "SS",
      "role": "Healer (Pierce)",
      "roleColumn": "SUSTAIN",
      "element": "Dark",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/13102633/45ef6f365e08dbae29aeefe4d3e939d3.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5498,
        "dpOrSpeed": 5640,
        "atkOrPower": 556,
        "defOrGuts": 691,
        "critOrWit": 631,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Forbidden Synthesis — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Dark"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-738525",
        "hbr-779179",
        "hbr-787646"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": "Iroha Ishii [Forbidden Synthesis] is a A-Tier Dark Healer (Pierce) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-832805"
    },
    {
      "externalId": "hbr-unit-749659",
      "slug": "hbr-749659",
      "nameEn": "Adelheid Kanzaki [Calamity Beastmaster]",
      "nameOriginal": "Adelheid Kanzaki",
      "styleOrTitle": "SS [Calamity Beastmaster] • Squad 31C Buffer",
      "rarity": "SS",
      "role": "Buffer (Slash)",
      "roleColumn": "SUPPORT",
      "element": "Dark",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12093020/bbf80e15547a204453e3031f48072ddd.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4955,
        "dpOrSpeed": 4834,
        "atkOrPower": 582,
        "defOrGuts": 632,
        "critOrWit": 702,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Calamity Beastmaster — Dark Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Dark Field (+65%) + +85% Dark Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dark Field Zone",
            "Dark Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Dark Field Zone (+65% Dark damage) while applying +85% Dark Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Dark"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-839459",
        "hbr-783178",
        "hbr-652687"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Adelheid Kanzaki [Calamity Beastmaster] is a A-Tier Dark Buffer (Slash) in Heaven Burns Red. Deploys a permanent Large Dark Field Zone (+65% Dark damage) while applying +85% Dark Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-749659"
    },
    {
      "externalId": "hbr-unit-746397",
      "slug": "hbr-746397",
      "nameEn": "Irene Redmayne [Master Detective of the Misty City]",
      "nameOriginal": "Irene Redmayne",
      "styleOrTitle": "SS [Master Detective of the Misty City] • Squad 31X Blaster",
      "rarity": "SS",
      "role": "Blaster (Pierce)",
      "roleColumn": "SUB_DPS",
      "element": "None",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/12037256/c5f85e22e789c2542b0bc04ca4d31a6f.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4870,
        "dpOrSpeed": 4766,
        "atkOrPower": 673,
        "defOrGuts": 598,
        "critOrWit": 623,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Master Detective of the Misty City — 10-Hit Destruction Storm",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "13 SP",
          "multiplierSummary": "10-Hit Non-Elemental Pierce + 4.5× Destruction Rate Cap (999%)",
          "hitCount": 10,
          "buffCategoryTags": [
            "Destruction Rate 4.5x",
            "10-Hit OD Gauge",
            "Non-Elemental",
            "Pierce",
            "Funnel"
          ],
          "exactDescription": "Unleashes a 10-hit Non-Elemental Pierce barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge."
        },
        {
          "name": "Multi-Hit Overdrive Charger",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "6-Hit Rapid Barrage + Self Funnel +3 Hits",
          "hitCount": 6,
          "buffCategoryTags": [
            "Destruction Rate",
            "Multi-Hit OD",
            "Non-Elemental"
          ],
          "exactDescription": "Generates +35% Overdrive gauge per cast and pre-stacks self Funnel before boss DP break."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases Non-Elemental Pierce skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803495",
        "hbr-692830",
        "hbr-686333"
      ],
      "tierOverall": "A",
      "tierReroll": "B",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Irene Redmayne [Master Detective of the Misty City] is a A-Tier Non-Elemental Blaster (Pierce) in Heaven Burns Red. Unleashes a 10-hit Non-Elemental Pierce barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-746397"
    },
    {
      "externalId": "hbr-unit-735062",
      "slug": "hbr-735062",
      "nameEn": "Isuzu Ohshima [A Drop of Night Tales]",
      "nameOriginal": "Isuzu Ohshima",
      "styleOrTitle": "SS [A Drop of Night Tales] • Squad 31E Buffer",
      "rarity": "SS",
      "role": "Buffer (Slash)",
      "roleColumn": "SUPPORT",
      "element": "Dark",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11932095/c5d3b3c2045e6889f7bdb3180a062577.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4935,
        "dpOrSpeed": 4818,
        "atkOrPower": 574,
        "defOrGuts": 624,
        "critOrWit": 694,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: A Drop of Night Tales — Dark Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Dark Field (+65%) + +85% Dark Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dark Field Zone",
            "Dark Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Dark Field Zone (+65% Dark damage) while applying +85% Dark Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Dark"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-839459",
        "hbr-783178",
        "hbr-652687"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": "Isuzu Ohshima [A Drop of Night Tales] is a A-Tier Dark Buffer (Slash) in Heaven Burns Red. Deploys a permanent Large Dark Field Zone (+65% Dark damage) while applying +85% Dark Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-735062"
    },
    {
      "externalId": "hbr-unit-700752",
      "slug": "hbr-700752",
      "nameEn": "Seika Higuchi [Sunset Utopia]",
      "nameOriginal": "Seika Higuchi",
      "styleOrTitle": "SS [Sunset Utopia] • Squad 31B Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Fire",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/11502982/274c9763fe2de3539d03207990a0927a.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4850,
        "dpOrSpeed": 4750,
        "atkOrPower": 540,
        "defOrGuts": 590,
        "critOrWit": 660,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Sunset Utopia — Fire Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Fire Field (+65%) + +85% Fire Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Fire Field Zone",
            "Fire Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Fire"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-810832",
        "hbr-816687",
        "hbr-642066"
      ],
      "tierOverall": "A",
      "tierReroll": "S",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": "Seika Higuchi [Sunset Utopia] is a A-Tier Fire Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-700752"
    },
    {
      "externalId": "hbr-unit-697860",
      "slug": "hbr-697860",
      "nameEn": "Iroha Ishii [Happiness Chroma]",
      "nameOriginal": "Iroha Ishii",
      "styleOrTitle": "SS [Happiness Chroma] • Squad 31D Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Thunder",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/11462877/fc385067e053922ff96a29a121cc86af.jpeg/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4915,
        "dpOrSpeed": 4802,
        "atkOrPower": 566,
        "defOrGuts": 616,
        "critOrWit": 686,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Happiness Chroma — Thunder Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Thunder Field (+65%) + +85% Thunder Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Thunder Field Zone",
            "Thunder Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Thunder Field Zone (+65% Thunder damage) while applying +85% Thunder Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Thunder"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Thunder Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-667359",
        "hbr-712350",
        "hbr-769410"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": "Iroha Ishii [Happiness Chroma] is a A-Tier Thunder Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Thunder Field Zone (+65% Thunder damage) while applying +85% Thunder Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-697860"
    },
    {
      "externalId": "hbr-unit-687800",
      "slug": "hbr-687800",
      "nameEn": "Yotsuha Ohshima [Relaxing Hot Spring Bliss]",
      "nameOriginal": "Yotsuha Ohshima",
      "styleOrTitle": "SS [Relaxing Hot Spring Bliss] • Squad 31E Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Dark",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/11364781/b8e966948d32ff9eae62d6877aa70a4d.jpeg/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4980,
        "dpOrSpeed": 4854,
        "atkOrPower": 592,
        "defOrGuts": 642,
        "critOrWit": 712,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Relaxing Hot Spring Bliss — Dark Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Dark Field (+65%) + +85% Dark Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dark Field Zone",
            "Dark Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Dark Field Zone (+65% Dark damage) while applying +85% Dark Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Dark"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-738525",
        "hbr-787646",
        "hbr-832805"
      ],
      "tierOverall": "A",
      "tierReroll": "S",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Yotsuha Ohshima [Relaxing Hot Spring Bliss] is a A-Tier Dark Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Dark Field Zone (+65% Dark damage) while applying +85% Dark Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-687800"
    },
    {
      "externalId": "hbr-unit-667359",
      "slug": "hbr-667359",
      "nameEn": "Nanami Nanase [Angel Crisis]",
      "nameOriginal": "Nanami Nanase",
      "styleOrTitle": "SS [Angel Crisis] • Command HQ Rider",
      "rarity": "SS",
      "role": "Rider (Pierce)",
      "roleColumn": "DPS",
      "element": "Thunder",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/11592504/4564a4a23da648fccb513c16b237150a.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4895,
        "dpOrSpeed": 5136,
        "atkOrPower": 683,
        "defOrGuts": 608,
        "critOrWit": 633,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Angel Crisis — Shattering DP Finisher",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "4-Hit Thunder Pierce (+50% DP Break Bonus • 11,800 Potency)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DP Shield Break +50%",
            "Thunder",
            "Pierce",
            "Crit Rate Up"
          ],
          "exactDescription": "Delivers a 4-hit Thunder Pierce strike with a +50% multiplier bonus against enemy DP Shields, instantly shattering Grade 140 boss barriers on Turn 1 of Overdrive."
        },
        {
          "name": "Shield-Crushing Volley",
          "type": "ACTIVE",
          "spOrEnergyCost": "8 SP",
          "multiplierSummary": "+30% DP Damage + Self Thunder Skill ATK Up",
          "hitCount": 3,
          "buffCategoryTags": [
            "DP Break",
            "Thunder",
            "Pierce"
          ],
          "exactDescription": "Strikes all enemies for AoE DP damage while pre-buffing self Skill Attack."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Thunder Seraphic Mastery",
          "effect": "Increases Thunder Pierce skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-746396",
        "hbr-712350",
        "hbr-769410"
      ],
      "tierOverall": "A",
      "tierReroll": "B",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Nanami Nanase [Angel Crisis] is a A-Tier Thunder Rider (Pierce) in Heaven Burns Red. Delivers a 4-hit Thunder Pierce strike with a +50% multiplier bonus against enemy DP Shields, instantly shattering Grade 140 boss barriers on Turn 1 of Overdrive.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-667359"
    },
    {
      "externalId": "hbr-unit-667354",
      "slug": "hbr-667354",
      "nameEn": "Yuina Shirakawa [Spica Blooming at Dusk]",
      "nameOriginal": "Yuina Shirakawa",
      "styleOrTitle": "SS [Spica Blooming at Dusk] • Squad 30G Blaster",
      "rarity": "SS",
      "role": "Blaster (Slash)",
      "roleColumn": "SUB_DPS",
      "element": "Light",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11605631/b448ff496f9749934bee0589267404b3.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": "2025-11-15",
      "isReleasedGlobal": true,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4960,
        "dpOrSpeed": 4838,
        "atkOrPower": 709,
        "defOrGuts": 634,
        "critOrWit": 659,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Spica Blooming at Dusk — 10-Hit Destruction Storm",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "13 SP",
          "multiplierSummary": "10-Hit Light Slash + 4.5× Destruction Rate Cap (999%)",
          "hitCount": 10,
          "buffCategoryTags": [
            "Destruction Rate 4.5x",
            "10-Hit OD Gauge",
            "Light",
            "Slash",
            "Funnel"
          ],
          "exactDescription": "Unleashes a 10-hit Light Slash barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge."
        },
        {
          "name": "Multi-Hit Overdrive Charger",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "6-Hit Rapid Barrage + Self Funnel +3 Hits",
          "hitCount": 6,
          "buffCategoryTags": [
            "Destruction Rate",
            "Multi-Hit OD",
            "Light"
          ],
          "exactDescription": "Generates +35% Overdrive gauge per cast and pre-stacks self Funnel before boss DP break."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Light Seraphic Mastery",
          "effect": "Increases Light Slash skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-784344",
        "hbr-797590",
        "hbr-813761"
      ],
      "tierOverall": "A",
      "tierReroll": "B",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": "Yuina Shirakawa [Spica Blooming at Dusk] is a A-Tier Light Blaster (Slash) in Heaven Burns Red. Unleashes a 10-hit Light Slash barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-667354"
    },
    {
      "externalId": "hbr-unit-663244",
      "slug": "hbr-663244",
      "nameEn": "Risa Murofushi [Tonight, Beneath the Flowerlight]",
      "nameOriginal": "Risa Murofushi",
      "styleOrTitle": "SS [Tonight, Beneath the Flowerlight] • Squad 31D Healer",
      "rarity": "SS",
      "role": "Healer (Pierce)",
      "roleColumn": "SUSTAIN",
      "element": "None",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/10934946/b95ca40aeb67003f3aa50b10b6fdc9dd.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5480,
        "dpOrSpeed": 5625,
        "atkOrPower": 550,
        "defOrGuts": 685,
        "critOrWit": 625,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Tonight, Beneath the Flowerlight — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Non-Elemental"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-683118",
        "hbr-657138",
        "hbr-708980"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.5,
      "summaryVerdict": "Risa Murofushi [Tonight, Beneath the Flowerlight] is a A-Tier Non-Elemental Healer (Pierce) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-663244"
    },
    {
      "externalId": "hbr-unit-656747",
      "slug": "hbr-656747",
      "nameEn": "Shiki Hanamura [Resplendent Cantabile]",
      "nameOriginal": "Shiki Hanamura",
      "styleOrTitle": "SS [Resplendent Cantabile] • Squad 31F Buffer",
      "rarity": "SS",
      "role": "Buffer (Slash)",
      "roleColumn": "SUPPORT",
      "element": "Light",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10787893/dde22100574d80066fc83c0f002542b1.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4940,
        "dpOrSpeed": 4822,
        "atkOrPower": 576,
        "defOrGuts": 626,
        "critOrWit": 696,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Resplendent Cantabile — Light Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Light Field (+65%) + +85% Light Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Light Field Zone",
            "Light Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Light Field Zone (+65% Light damage) while applying +85% Light Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Light"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Light Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-784344",
        "hbr-832804",
        "hbr-813761"
      ],
      "tierOverall": "A",
      "tierReroll": "S",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": "Shiki Hanamura [Resplendent Cantabile] is a A-Tier Light Buffer (Slash) in Heaven Burns Red. Deploys a permanent Large Light Field Zone (+65% Light damage) while applying +85% Light Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-656747"
    },
    {
      "externalId": "hbr-unit-654826",
      "slug": "hbr-654826",
      "nameEn": "Iroha Ishii [Sensitivity Overflow]",
      "nameOriginal": "Iroha Ishii",
      "styleOrTitle": "SS [Sensitivity Overflow] • Squad 31D Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Fire",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/10748535/238fd38a170f23e311b8aa72b425202b.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4855,
        "dpOrSpeed": 4754,
        "atkOrPower": 542,
        "defOrGuts": 592,
        "critOrWit": 662,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Sensitivity Overflow — Fire Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Fire Field (+65%) + +85% Fire Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Fire Field Zone",
            "Fire Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Fire"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-643121",
        "hbr-793215",
        "hbr-721625"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Iroha Ishii [Sensitivity Overflow] is a A-Tier Fire Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-654826"
    },
    {
      "externalId": "hbr-unit-652687",
      "slug": "hbr-652687",
      "nameEn": "Seika Higuchi [Catharsis of Dawn]",
      "nameOriginal": "Seika Higuchi",
      "styleOrTitle": "SS [Catharsis of Dawn] • Squad 31B Healer",
      "rarity": "SS",
      "role": "Healer (Pierce)",
      "roleColumn": "SUSTAIN",
      "element": "Dark",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/10699306/b8cbe2c7e38f9cea114db85081dfeec8.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5534,
        "dpOrSpeed": 5670,
        "atkOrPower": 568,
        "defOrGuts": 703,
        "critOrWit": 643,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Catharsis of Dawn — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Dark"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-738525",
        "hbr-779179",
        "hbr-787646"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Seika Higuchi [Catharsis of Dawn] is a A-Tier Dark Healer (Pierce) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-652687"
    },
    {
      "externalId": "hbr-unit-642066",
      "slug": "hbr-642066",
      "nameEn": "Carol Reaper [Carnival with You]",
      "nameOriginal": "Carol Reaper",
      "styleOrTitle": "SS [Carnival with You] • Squad 31X Healer",
      "rarity": "SS",
      "role": "Healer (Slash)",
      "roleColumn": "SUSTAIN",
      "element": "Fire",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10590857/22b8c03ab455e1691d84d1d138fddc12.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5612,
        "dpOrSpeed": 5735,
        "atkOrPower": 594,
        "defOrGuts": 729,
        "critOrWit": 669,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Carnival with You — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Fire"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-643121",
        "hbr-784346",
        "hbr-793215"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.2,
      "summaryVerdict": "Carol Reaper [Carnival with You] is a A-Tier Fire Healer (Slash) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-642066"
    },
    {
      "externalId": "hbr-unit-640069",
      "slug": "hbr-640069",
      "nameEn": "Isuzu Ohshima [Magic of Smile]",
      "nameOriginal": "Isuzu Ohshima",
      "styleOrTitle": "SS [Magic of Smile] • Squad 31E Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Slash)",
      "roleColumn": "SUB_DPS",
      "element": "Light",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10552340/e5920a312cf88ff5662a4738e5124d3f.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4900,
        "dpOrSpeed": 4790,
        "atkOrPower": 685,
        "defOrGuts": 655,
        "critOrWit": 705,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Magic of Smile — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Light DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Light DEF Down",
            "Fragile +50%",
            "Light",
            "Slash"
          ],
          "exactDescription": "Strikes all enemies 4 times with Light Slash damage while simultaneously applying -45% Base DEF Down, -45% Light Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Light"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Light Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-784344",
        "hbr-797590",
        "hbr-813761"
      ],
      "tierOverall": "A",
      "tierReroll": "B",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": "Isuzu Ohshima [Magic of Smile] is a A-Tier Light Debuffer (Slash) in Heaven Burns Red. Strikes all enemies 4 times with Light Slash damage while simultaneously applying -45% Base DEF Down, -45% Light Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-640069"
    },
    {
      "externalId": "hbr-unit-606152",
      "slug": "hbr-606152",
      "nameEn": "Chie Sugawara [Lolita Stoic]",
      "nameOriginal": "Chie Sugawara",
      "styleOrTitle": "SS [Lolita Stoic] • Squad 30G Buffer",
      "rarity": "SS",
      "role": "Buffer (Crush)",
      "roleColumn": "SUPPORT",
      "element": "Ice",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/10307617/970e3b5ea5f4810f365bfbf5cef5dca7.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4965,
        "dpOrSpeed": 4842,
        "atkOrPower": 586,
        "defOrGuts": 636,
        "critOrWit": 706,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Lolita Stoic — Ice Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Ice Field (+65%) + +85% Ice Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Ice Field Zone",
            "Ice Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Ice Field Zone (+65% Ice damage) while applying +85% Ice Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Ice"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803496",
        "hbr-730675",
        "hbr-756804"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": "Chie Sugawara [Lolita Stoic] is a A-Tier Ice Buffer (Crush) in Heaven Burns Red. Deploys a permanent Large Ice Field Zone (+65% Ice damage) while applying +85% Ice Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-606152"
    },
    {
      "externalId": "hbr-unit-600349",
      "slug": "hbr-600349",
      "nameEn": "Kozue Hiiragi [Hop, Step, Slip!]",
      "nameOriginal": "Kozue Hiiragi",
      "styleOrTitle": "SS [Hop, Step, Slip!] • Squad 31B Buffer",
      "rarity": "SS",
      "role": "Buffer (Slash)",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10100742/2a37fae5060073cb73881bebfe476339.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4880,
        "dpOrSpeed": 4774,
        "atkOrPower": 552,
        "defOrGuts": 602,
        "critOrWit": 672,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Hop, Step, Slip! — Absolute Crit & Skill Mastery",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "+90% Skill ATK Up + +100% Crit Rate + 5-Hit Funnel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "Crit Rate 100%",
            "Crit DMG Up",
            "Mind Eye"
          ],
          "exactDescription": "Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Non-Elemental"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803495",
        "hbr-712353",
        "hbr-686333"
      ],
      "tierOverall": "A",
      "tierReroll": "S",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Kozue Hiiragi [Hop, Step, Slip!] is a A-Tier Non-Elemental Buffer (Slash) in Heaven Burns Red. Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-600349"
    },
    {
      "externalId": "hbr-unit-582607",
      "slug": "hbr-582607",
      "nameEn": "Tama Kunimi [Twilight Memories]",
      "nameOriginal": "Tama Kunimi",
      "styleOrTitle": "SS [Twilight Memories] • Squad 31A Buffer",
      "rarity": "SS",
      "role": "Buffer (Slash)",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10059093/48b95165218d69fa6da94ab38f57f2aa.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4945,
        "dpOrSpeed": 4826,
        "atkOrPower": 578,
        "defOrGuts": 628,
        "critOrWit": 698,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Twilight Memories — Absolute Crit & Skill Mastery",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "+90% Skill ATK Up + +100% Crit Rate + 5-Hit Funnel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "Crit Rate 100%",
            "Crit DMG Up",
            "Mind Eye"
          ],
          "exactDescription": "Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Non-Elemental"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-683118",
        "hbr-708980",
        "hbr-663244"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Tama Kunimi [Twilight Memories] is a A-Tier Non-Elemental Buffer (Slash) in Heaven Burns Red. Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-582607"
    },
    {
      "externalId": "hbr-unit-563544",
      "slug": "hbr-563544",
      "nameEn": "Yunxia Li [Beckoning Dayflower]",
      "nameOriginal": "Yunxia Li",
      "styleOrTitle": "SS [Beckoning Dayflower] • Squad 31X Buffer",
      "rarity": "SS",
      "role": "Buffer (Slash)",
      "roleColumn": "SUPPORT",
      "element": "Thunder",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10172298/fd4b1e9e1786e24262983acc1140ee08.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4860,
        "dpOrSpeed": 4758,
        "atkOrPower": 544,
        "defOrGuts": 594,
        "critOrWit": 664,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Beckoning Dayflower — Thunder Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Thunder Field (+65%) + +85% Thunder Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Thunder Field Zone",
            "Thunder Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Thunder Field Zone (+65% Thunder damage) while applying +85% Thunder Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Thunder"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Thunder Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-755194",
        "hbr-781370",
        "hbr-692832"
      ],
      "tierOverall": "A",
      "tierReroll": "S",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": "Yunxia Li [Beckoning Dayflower] is a A-Tier Thunder Buffer (Slash) in Heaven Burns Red. Deploys a permanent Large Thunder Field Zone (+65% Thunder damage) while applying +85% Thunder Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-563544"
    },
    {
      "externalId": "hbr-unit-544799",
      "slug": "hbr-544799",
      "nameEn": "Tsukasa Tojo [Secret Service: Silence]",
      "nameOriginal": "Tsukasa Tojo",
      "styleOrTitle": "SS [Secret Service: Silence] • Squad 31A Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Light",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/10204127/4e8cf4c60cdd0194e8507c69dea49865.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4925,
        "dpOrSpeed": 4810,
        "atkOrPower": 570,
        "defOrGuts": 620,
        "critOrWit": 690,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Secret Service: Silence — Light Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Light Field (+65%) + +85% Light Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Light Field Zone",
            "Light Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Light Field Zone (+65% Light damage) while applying +85% Light Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Light"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Light Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-724680",
        "hbr-779180",
        "hbr-769411"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": "Tsukasa Tojo [Secret Service: Silence] is a A-Tier Light Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Light Field Zone (+65% Light damage) while applying +85% Light Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-544799"
    },
    {
      "externalId": "hbr-unit-525186",
      "slug": "hbr-525186",
      "nameEn": "Megumi Aikawa [Heart-Racing Fuel]",
      "nameOriginal": "Megumi Aikawa",
      "styleOrTitle": "SS [Heart-Racing Fuel] • Squad 31A Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Crush)",
      "roleColumn": "SUB_DPS",
      "element": "Fire",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/10227632/1e43fce06c75492444d0d4d4a6eb5bd1.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4990,
        "dpOrSpeed": 4862,
        "atkOrPower": 721,
        "defOrGuts": 691,
        "critOrWit": 741,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Heart-Racing Fuel — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Fire DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Fire DEF Down",
            "Fragile +50%",
            "Fire",
            "Crush"
          ],
          "exactDescription": "Strikes all enemies 4 times with Fire Crush damage while simultaneously applying -45% Base DEF Down, -45% Fire Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Fire"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-810832",
        "hbr-752169",
        "hbr-642066"
      ],
      "tierOverall": "A",
      "tierReroll": "B",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": "Megumi Aikawa [Heart-Racing Fuel] is a A-Tier Fire Debuffer (Crush) in Heaven Burns Red. Strikes all enemies 4 times with Fire Crush damage while simultaneously applying -45% Base DEF Down, -45% Fire Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-525186"
    },
    {
      "externalId": "hbr-unit-521565",
      "slug": "hbr-521565",
      "nameEn": "Mari Satsuki [Shinobi Arts Prosperity]",
      "nameOriginal": "Mari Satsuki",
      "styleOrTitle": "SS [Shinobi Arts Prosperity] • Squad 31C Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/10125232/e4ce712dbcf3d7d930f40aa70720de99.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4905,
        "dpOrSpeed": 4794,
        "atkOrPower": 562,
        "defOrGuts": 612,
        "critOrWit": 682,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Shinobi Arts Prosperity — Absolute Crit & Skill Mastery",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "+90% Skill ATK Up + +100% Crit Rate + 5-Hit Funnel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "Crit Rate 100%",
            "Crit DMG Up",
            "Mind Eye"
          ],
          "exactDescription": "Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Non-Elemental"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-683118",
        "hbr-708980",
        "hbr-663244"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Mari Satsuki [Shinobi Arts Prosperity] is a A-Tier Non-Elemental Buffer (Pierce) in Heaven Burns Red. Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-521565"
    },
    {
      "externalId": "hbr-unit-517816",
      "slug": "hbr-517816",
      "nameEn": "Yotsuha Ohshima [Shattered Ennui]",
      "nameOriginal": "Yotsuha Ohshima",
      "styleOrTitle": "SS [Shattered Ennui] • Squad 31E Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Fire",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/10222012/c1362a50b8cad6951e8a3fff4094dc8f.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4970,
        "dpOrSpeed": 4846,
        "atkOrPower": 588,
        "defOrGuts": 638,
        "critOrWit": 708,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Shattered Ennui — Fire Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Fire Field (+65%) + +85% Fire Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Fire Field Zone",
            "Fire Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Fire"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-810832",
        "hbr-816687",
        "hbr-642066"
      ],
      "tierOverall": "A",
      "tierReroll": "S",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Yotsuha Ohshima [Shattered Ennui] is a A-Tier Fire Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-517816"
    },
    {
      "externalId": "hbr-unit-517815",
      "slug": "hbr-517815",
      "nameEn": "Muua Ohshima [Best in a Pinch]",
      "nameOriginal": "Muua Ohshima",
      "styleOrTitle": "SS [Best in a Pinch] • Squad 31E Healer",
      "rarity": "SS",
      "role": "Healer (Pierce)",
      "roleColumn": "SUSTAIN",
      "element": "None",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/10100743/1d9c28a69f2f1d42e4d2ddb487ac6c59.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5492,
        "dpOrSpeed": 5635,
        "atkOrPower": 554,
        "defOrGuts": 689,
        "critOrWit": 629,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Best in a Pinch — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Non-Elemental"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-683118",
        "hbr-657138",
        "hbr-708980"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.2,
      "summaryVerdict": "Muua Ohshima [Best in a Pinch] is a A-Tier Non-Elemental Healer (Pierce) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-517815"
    },
    {
      "externalId": "hbr-unit-487220",
      "slug": "hbr-487220",
      "nameEn": "Iroha Ishii [Shattering Monochrome]",
      "nameOriginal": "Iroha Ishii",
      "styleOrTitle": "SS [Shattering Monochrome] • Squad 31D Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Dark",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/11679237/d5e2106633f5459f3d93bf4e8bc74750.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4950,
        "dpOrSpeed": 4830,
        "atkOrPower": 580,
        "defOrGuts": 630,
        "critOrWit": 700,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Shattering Monochrome — Dark Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Dark Field (+65%) + +85% Dark Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dark Field Zone",
            "Dark Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Dark Field Zone (+65% Dark damage) while applying +85% Dark Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Dark"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-738525",
        "hbr-787646",
        "hbr-832805"
      ],
      "tierOverall": "A",
      "tierReroll": "S",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": "Iroha Ishii [Shattering Monochrome] is a A-Tier Dark Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Dark Field Zone (+65% Dark damage) while applying +85% Dark Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-487220"
    },
    {
      "externalId": "hbr-unit-813761",
      "slug": "hbr-813761",
      "nameEn": "Muua Ohshima [Swim All-Out]",
      "nameOriginal": "Muua Ohshima",
      "styleOrTitle": "SS [Swim All-Out] • Squad 31E Defender",
      "rarity": "SS",
      "role": "Defender (Pierce)",
      "roleColumn": "SUSTAIN",
      "element": "Light",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/12941242/1123c0b0fc8c3144d0891c1d3a52d1f6.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5468,
        "dpOrSpeed": 5615,
        "atkOrPower": 546,
        "defOrGuts": 681,
        "critOrWit": 621,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Swim All-Out — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Light"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Light Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-724680",
        "hbr-797591",
        "hbr-779180"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.4,
      "summaryVerdict": "Muua Ohshima [Swim All-Out] is a A-Tier Light Defender (Pierce) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-813761"
    },
    {
      "externalId": "hbr-unit-724680",
      "slug": "hbr-724680",
      "nameEn": "Ruka Kayamori [White-Hot! Victory Pitch!]",
      "nameOriginal": "Ruka Kayamori",
      "styleOrTitle": "SS [White-Hot! Victory Pitch!] • Squad 31A Attacker",
      "rarity": "SS",
      "role": "Attacker (Slash)",
      "roleColumn": "DPS",
      "element": "Light",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11827667/ba0efffe7e1cfc61ff5491299b669821.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4930,
        "dpOrSpeed": 4814,
        "atkOrPower": 697,
        "defOrGuts": 622,
        "critOrWit": 647,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: White-Hot! Victory Pitch! — Apex HP Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "14 SP",
          "multiplierSummary": "5-Hit Light Slash (+50% HP Bonus • 14,250 Max Potency)",
          "hitCount": 5,
          "buffCategoryTags": [
            "HP +50% Finisher",
            "Light",
            "Slash",
            "Self Crit & Mind Eye"
          ],
          "exactDescription": "Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Light Slash nuke with +50% bonus potency against enemy HP."
        },
        {
          "name": "Focused Charge & Self Funnel",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Self +75% Light Skill ATK + 3-Hit Funnel",
          "hitCount": 2,
          "buffCategoryTags": [
            "Self Buff",
            "Funnel",
            "Light"
          ],
          "exactDescription": "Pre-stacks Self Elemental Skill Attack Up and 3-Hit Funnel on the turn prior to Overdrive burst."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Light Seraphic Mastery",
          "effect": "Increases Light Slash skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-797590",
        "hbr-832804",
        "hbr-813761"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Ruka Kayamori [White-Hot! Victory Pitch!] is a A-Tier Light Attacker (Slash) in Heaven Burns Red. Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Light Slash nuke with +50% bonus potency against enemy HP.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-724680"
    },
    {
      "externalId": "hbr-unit-708962",
      "slug": "hbr-708962",
      "nameEn": "Miya Kiryu [Lured by the Sea Breeze]",
      "nameOriginal": "Miya Kiryu",
      "styleOrTitle": "SS [Lured by the Sea Breeze] • Squad 30G Blaster",
      "rarity": "SS",
      "role": "Blaster (Pierce)",
      "roleColumn": "SUB_DPS",
      "element": "Fire",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/11626529/bbbd734b991846825281d8382aeadd08.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4995,
        "dpOrSpeed": 4866,
        "atkOrPower": 723,
        "defOrGuts": 648,
        "critOrWit": 673,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Lured by the Sea Breeze — 10-Hit Destruction Storm",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "13 SP",
          "multiplierSummary": "10-Hit Fire Pierce + 4.5× Destruction Rate Cap (999%)",
          "hitCount": 10,
          "buffCategoryTags": [
            "Destruction Rate 4.5x",
            "10-Hit OD Gauge",
            "Fire",
            "Pierce",
            "Funnel"
          ],
          "exactDescription": "Unleashes a 10-hit Fire Pierce barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge."
        },
        {
          "name": "Multi-Hit Overdrive Charger",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "6-Hit Rapid Barrage + Self Funnel +3 Hits",
          "hitCount": 6,
          "buffCategoryTags": [
            "Destruction Rate",
            "Multi-Hit OD",
            "Fire"
          ],
          "exactDescription": "Generates +35% Overdrive gauge per cast and pre-stacks self Funnel before boss DP break."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases Fire Pierce skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-643121",
        "hbr-784346",
        "hbr-721625"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.3,
      "summaryVerdict": "Miya Kiryu [Lured by the Sea Breeze] is a A-Tier Fire Blaster (Pierce) in Heaven Burns Red. Unleashes a 10-hit Fire Pierce barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-708962"
    },
    {
      "externalId": "hbr-unit-705732",
      "slug": "hbr-705732",
      "nameEn": "Muua Ohshima [Rippling Feel-Good]",
      "nameOriginal": "Muua Ohshima",
      "styleOrTitle": "SS [Rippling Feel-Good] • Squad 31E Defender",
      "rarity": "SS",
      "role": "Defender (Pierce)",
      "roleColumn": "SUSTAIN",
      "element": "None",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/11550568/56e046920d1d8106a5afdbc68bbd1e32.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5522,
        "dpOrSpeed": 5660,
        "atkOrPower": 564,
        "defOrGuts": 699,
        "critOrWit": 639,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Rippling Feel-Good — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Non-Elemental"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803495",
        "hbr-692830",
        "hbr-712353"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": "Muua Ohshima [Rippling Feel-Good] is a A-Tier Non-Elemental Defender (Pierce) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-705732"
    },
    {
      "externalId": "hbr-unit-692832",
      "slug": "hbr-692832",
      "nameEn": "Chiroru Matsuoka [Heroic Action Against Evil]",
      "nameOriginal": "Chiroru Matsuoka",
      "styleOrTitle": "SS [Heroic Action Against Evil] • Squad 31F Defender",
      "rarity": "SS",
      "role": "Defender (Crush)",
      "roleColumn": "SUSTAIN",
      "element": "Thunder",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/11405770/6b1633eac7ead4f29092777b46ddddc0.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5600,
        "dpOrSpeed": 5725,
        "atkOrPower": 590,
        "defOrGuts": 725,
        "critOrWit": 665,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Heroic Action Against Evil — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Thunder"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Thunder Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-667359",
        "hbr-746396",
        "hbr-712350"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.5,
      "summaryVerdict": "Chiroru Matsuoka [Heroic Action Against Evil] is a A-Tier Thunder Defender (Crush) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-692832"
    },
    {
      "externalId": "hbr-unit-680864",
      "slug": "hbr-680864",
      "nameEn": "Irene Redmayne [Where the Singing Breeze Leads]",
      "nameOriginal": "Irene Redmayne",
      "styleOrTitle": "SS [Where the Singing Breeze Leads] • Squad 31X Healer",
      "rarity": "SS",
      "role": "Healer (Pierce)",
      "roleColumn": "SUSTAIN",
      "element": "None",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/11222782/5ffce608e8ee42871585104d5d560b2a.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5498,
        "dpOrSpeed": 5640,
        "atkOrPower": 556,
        "defOrGuts": 691,
        "critOrWit": 631,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Where the Singing Breeze Leads — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Non-Elemental"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803495",
        "hbr-692830",
        "hbr-712353"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": "Irene Redmayne [Where the Singing Breeze Leads] is a A-Tier Non-Elemental Healer (Pierce) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-680864"
    },
    {
      "externalId": "hbr-unit-659767",
      "slug": "hbr-659767",
      "nameEn": "Yui Yoshioka [Stir Soul Song]",
      "nameOriginal": "Yui Yoshioka",
      "styleOrTitle": "SS [Stir Soul Song] • Squad 31AB Buffer",
      "rarity": "SS",
      "role": "Buffer (Slash)",
      "roleColumn": "SUPPORT",
      "element": "Ice",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/13053962/7d3b23c0aff503e5cb90bec85ee4bef7.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4955,
        "dpOrSpeed": 4834,
        "atkOrPower": 582,
        "defOrGuts": 632,
        "critOrWit": 702,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Stir Soul Song — Ice Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Ice Field (+65%) + +85% Ice Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Ice Field Zone",
            "Ice Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Ice Field Zone (+65% Ice damage) while applying +85% Ice Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Ice"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803496",
        "hbr-730675",
        "hbr-756804"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Yui Yoshioka [Stir Soul Song] is a A-Tier Ice Buffer (Slash) in Heaven Burns Red. Deploys a permanent Large Ice Field Zone (+65% Ice damage) while applying +85% Ice Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-659767"
    },
    {
      "externalId": "hbr-unit-640070",
      "slug": "hbr-640070",
      "nameEn": "Minori Ohshima [Full-Dress Flower Maiden]",
      "nameOriginal": "Minori Ohshima",
      "styleOrTitle": "SS [Full-Dress Flower Maiden] • Squad 31E Buffer",
      "rarity": "SS",
      "role": "Buffer (Crush)",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/10552341/655a63d6b2915a664b4b14f49a4bcb7f.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4870,
        "dpOrSpeed": 4766,
        "atkOrPower": 548,
        "defOrGuts": 598,
        "critOrWit": 668,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Full-Dress Flower Maiden — Absolute Crit & Skill Mastery",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "+90% Skill ATK Up + +100% Crit Rate + 5-Hit Funnel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "Crit Rate 100%",
            "Crit DMG Up",
            "Mind Eye"
          ],
          "exactDescription": "Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Non-Elemental"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803495",
        "hbr-712353",
        "hbr-686333"
      ],
      "tierOverall": "A",
      "tierReroll": "S",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Minori Ohshima [Full-Dress Flower Maiden] is a A-Tier Non-Elemental Buffer (Crush) in Heaven Burns Red. Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-640070"
    },
    {
      "externalId": "hbr-unit-628231",
      "slug": "hbr-628231",
      "nameEn": "Karen Asakura [Midsummer Shark the Ripper]",
      "nameOriginal": "Karen Asakura",
      "styleOrTitle": "SS [Midsummer Shark the Ripper] • Squad 31A Blaster",
      "rarity": "SS",
      "role": "Blaster (Slash)",
      "roleColumn": "SUB_DPS",
      "element": "Dark",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10272969/326bfc0e92a98f1ec9fb4219a9a039ff.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4935,
        "dpOrSpeed": 4818,
        "atkOrPower": 699,
        "defOrGuts": 624,
        "critOrWit": 649,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Midsummer Shark the Ripper — 10-Hit Destruction Storm",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "13 SP",
          "multiplierSummary": "10-Hit Dark Slash + 4.5× Destruction Rate Cap (999%)",
          "hitCount": 10,
          "buffCategoryTags": [
            "Destruction Rate 4.5x",
            "10-Hit OD Gauge",
            "Dark",
            "Slash",
            "Funnel"
          ],
          "exactDescription": "Unleashes a 10-hit Dark Slash barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge."
        },
        {
          "name": "Multi-Hit Overdrive Charger",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "6-Hit Rapid Barrage + Self Funnel +3 Hits",
          "hitCount": 6,
          "buffCategoryTags": [
            "Destruction Rate",
            "Multi-Hit OD",
            "Dark"
          ],
          "exactDescription": "Generates +35% Overdrive gauge per cast and pre-stacks self Funnel before boss DP break."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases Dark Slash skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-839459",
        "hbr-749659",
        "hbr-652687"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.2,
      "summaryVerdict": "Karen Asakura [Midsummer Shark the Ripper] is a A-Tier Dark Blaster (Slash) in Heaven Burns Red. Unleashes a 10-hit Dark Slash barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-628231"
    },
    {
      "externalId": "hbr-unit-622825",
      "slug": "hbr-622825",
      "nameEn": "Adelheid Kanzaki [Sunflowers in Bloom]",
      "nameOriginal": "Adelheid Kanzaki",
      "styleOrTitle": "SS [Sunflowers in Bloom] • Squad 31C Blaster",
      "rarity": "SS",
      "role": "Blaster (Slash)",
      "roleColumn": "SUB_DPS",
      "element": "Fire",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10209990/770ced45750b48c1d60641affb9aba40.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4850,
        "dpOrSpeed": 4750,
        "atkOrPower": 665,
        "defOrGuts": 590,
        "critOrWit": 615,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Sunflowers in Bloom — 10-Hit Destruction Storm",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "13 SP",
          "multiplierSummary": "10-Hit Fire Slash + 4.5× Destruction Rate Cap (999%)",
          "hitCount": 10,
          "buffCategoryTags": [
            "Destruction Rate 4.5x",
            "10-Hit OD Gauge",
            "Fire",
            "Slash",
            "Funnel"
          ],
          "exactDescription": "Unleashes a 10-hit Fire Slash barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge."
        },
        {
          "name": "Multi-Hit Overdrive Charger",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "6-Hit Rapid Barrage + Self Funnel +3 Hits",
          "hitCount": 6,
          "buffCategoryTags": [
            "Destruction Rate",
            "Multi-Hit OD",
            "Fire"
          ],
          "exactDescription": "Generates +35% Overdrive gauge per cast and pre-stacks self Funnel before boss DP break."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases Fire Slash skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-810832",
        "hbr-752169",
        "hbr-642066"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": "Adelheid Kanzaki [Sunflowers in Bloom] is a A-Tier Fire Blaster (Slash) in Heaven Burns Red. Unleashes a 10-hit Fire Slash barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-622825"
    },
    {
      "externalId": "hbr-unit-594734",
      "slug": "hbr-594734",
      "nameEn": "Yuki Izumi [Ruby Awaiting You]",
      "nameOriginal": "Yuki Izumi",
      "styleOrTitle": "SS [Ruby Awaiting You] • Squad 31A Breaker",
      "rarity": "SS",
      "role": "Breaker (Pierce)",
      "roleColumn": "DPS",
      "element": "Dark",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/10116717/2492c3682b0893eb3b50741a1f96f648.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4915,
        "dpOrSpeed": 5152,
        "atkOrPower": 691,
        "defOrGuts": 616,
        "critOrWit": 641,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Ruby Awaiting You — Shattering DP Finisher",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "4-Hit Dark Pierce (+50% DP Break Bonus • 11,800 Potency)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DP Shield Break +50%",
            "Dark",
            "Pierce",
            "Crit Rate Up"
          ],
          "exactDescription": "Delivers a 4-hit Dark Pierce strike with a +50% multiplier bonus against enemy DP Shields, instantly shattering Grade 140 boss barriers on Turn 1 of Overdrive."
        },
        {
          "name": "Shield-Crushing Volley",
          "type": "ACTIVE",
          "spOrEnergyCost": "8 SP",
          "multiplierSummary": "+30% DP Damage + Self Dark Skill ATK Up",
          "hitCount": 3,
          "buffCategoryTags": [
            "DP Break",
            "Dark",
            "Pierce"
          ],
          "exactDescription": "Strikes all enemies for AoE DP damage while pre-buffing self Skill Attack."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases Dark Pierce skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-749659",
        "hbr-783178",
        "hbr-652687"
      ],
      "tierOverall": "A",
      "tierReroll": "B",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": "Yuki Izumi [Ruby Awaiting You] is a A-Tier Dark Breaker (Pierce) in Heaven Burns Red. Delivers a 4-hit Dark Pierce strike with a +50% multiplier bonus against enemy DP Shields, instantly shattering Grade 140 boss barriers on Turn 1 of Overdrive.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-594734"
    },
    {
      "externalId": "hbr-unit-585689",
      "slug": "hbr-585689",
      "nameEn": "Yotsuha Ohshima [Lazy Pajama Night]",
      "nameOriginal": "Yotsuha Ohshima",
      "styleOrTitle": "SS [Lazy Pajama Night] • Squad 31E Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Light",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/10227179/7d5d39c7bd6a6b133419a6b4fa36d960.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4980,
        "dpOrSpeed": 4854,
        "atkOrPower": 592,
        "defOrGuts": 642,
        "critOrWit": 712,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Lazy Pajama Night — Light Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Light Field (+65%) + +85% Light Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Light Field Zone",
            "Light Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Light Field Zone (+65% Light damage) while applying +85% Light Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Light"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Light Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-784344",
        "hbr-832804",
        "hbr-813761"
      ],
      "tierOverall": "A",
      "tierReroll": "S",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Yotsuha Ohshima [Lazy Pajama Night] is a A-Tier Light Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Light Field Zone (+65% Light damage) while applying +85% Light Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-585689"
    },
    {
      "externalId": "hbr-unit-491018",
      "slug": "hbr-491018",
      "nameEn": "Seika Higuchi [Cosmic Inquiry, Starry Radiance]",
      "nameOriginal": "Seika Higuchi",
      "styleOrTitle": "SS [Cosmic Inquiry, Starry Radiance] • Squad 31B Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/10125231/b2851325e5c71194fadd8f6e7cd7cd54.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4895,
        "dpOrSpeed": 4786,
        "atkOrPower": 558,
        "defOrGuts": 608,
        "critOrWit": 678,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Cosmic Inquiry, Starry Radiance — Absolute Crit & Skill Mastery",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "+90% Skill ATK Up + +100% Crit Rate + 5-Hit Funnel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "Crit Rate 100%",
            "Crit DMG Up",
            "Mind Eye"
          ],
          "exactDescription": "Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Non-Elemental"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-683118",
        "hbr-708980",
        "hbr-663244"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Seika Higuchi [Cosmic Inquiry, Starry Radiance] is a A-Tier Non-Elemental Buffer (Pierce) in Heaven Burns Red. Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-491018"
    },
    {
      "externalId": "hbr-unit-484626",
      "slug": "hbr-484626",
      "nameEn": "Miya Kiryu [Lingering Rain in the Starry Woods]",
      "nameOriginal": "Miya Kiryu",
      "styleOrTitle": "SS [Lingering Rain in the Starry Woods] • Squad 30G Debuffer",
      "rarity": "SS",
      "role": "Debuffer (Pierce)",
      "roleColumn": "SUB_DPS",
      "element": "Light",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/10396552/174681e7a02ca9314d148ecbc808dbb0.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4960,
        "dpOrSpeed": 4838,
        "atkOrPower": 709,
        "defOrGuts": 679,
        "critOrWit": 729,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 91,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Lingering Rain in the Starry Woods — Calamity Exposure",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "-45% DEF Down + -45% Light DEF Down + +50% Fragile (2 Turns)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DEF Down -45%",
            "Light DEF Down",
            "Fragile +50%",
            "Light",
            "Pierce"
          ],
          "exactDescription": "Strikes all enemies 4 times with Light Pierce damage while simultaneously applying -45% Base DEF Down, -45% Light Resistance Down, and +50% Fragile Weakness Exposure for 2 turns."
        },
        {
          "name": "Enfeebling Piercer & OD Fill",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "-30% DEF Down + Attack Down II",
          "hitCount": 3,
          "buffCategoryTags": [
            "DEF Down",
            "ATK Down",
            "Light"
          ],
          "exactDescription": "Maintains a secondary stack of -30% DEF Down to hit the 2× debuff cap during Overdrive Turn 3."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Light Seraphic Mastery",
          "effect": "Increases debuff potency by +20% and extends DEF Down / Fragile duration by +1 turn."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-784344",
        "hbr-797590",
        "hbr-813761"
      ],
      "tierOverall": "A",
      "tierReroll": "B",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": "Miya Kiryu [Lingering Rain in the Starry Woods] is a A-Tier Light Debuffer (Pierce) in Heaven Burns Red. Strikes all enemies 4 times with Light Pierce damage while simultaneously applying -45% Base DEF Down, -45% Light Resistance Down, and +50% Fragile Weakness Exposure for 2 turns.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-484626"
    },
    {
      "externalId": "hbr-unit-469574",
      "slug": "hbr-469574",
      "nameEn": "Tsukasa Tojo [Midsummer Prayer]",
      "nameOriginal": "Tsukasa Tojo",
      "styleOrTitle": "SS [Midsummer Prayer] • Squad 31A Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Fire",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/10274244/25f13aae11dc791908512642e7d3d027.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4875,
        "dpOrSpeed": 4770,
        "atkOrPower": 550,
        "defOrGuts": 600,
        "critOrWit": 670,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Midsummer Prayer — Fire Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Fire Field (+65%) + +85% Fire Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Fire Field Zone",
            "Fire Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Fire"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-643121",
        "hbr-793215",
        "hbr-721625"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": "Tsukasa Tojo [Midsummer Prayer] is a A-Tier Fire Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-469574"
    },
    {
      "externalId": "hbr-unit-438518",
      "slug": "hbr-438518",
      "nameEn": "Mari Satsuki [Sweet Muzzle]",
      "nameOriginal": "Mari Satsuki",
      "styleOrTitle": "SS [Sweet Muzzle] • Squad 31C Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Ice",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/10414634/7647342a354129cf59dab0bbb84bcf88.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4940,
        "dpOrSpeed": 4822,
        "atkOrPower": 576,
        "defOrGuts": 626,
        "critOrWit": 696,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Sweet Muzzle — Ice Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Ice Field (+65%) + +85% Ice Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Ice Field Zone",
            "Ice Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Ice Field Zone (+65% Ice damage) while applying +85% Ice Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Ice"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-825787",
        "hbr-764339",
        "hbr-794994"
      ],
      "tierOverall": "A",
      "tierReroll": "S",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": "Mari Satsuki [Sweet Muzzle] is a A-Tier Ice Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Ice Field Zone (+65% Ice damage) while applying +85% Ice Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-438518"
    },
    {
      "externalId": "hbr-unit-426210",
      "slug": "hbr-426210",
      "nameEn": "Seika Higuchi [Homeostasis of the Living]",
      "nameOriginal": "Seika Higuchi",
      "styleOrTitle": "SS [Homeostasis of the Living] • Squad 31B Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Thunder",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/11679221/66c05698f837c04e131346f605f555bc.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4855,
        "dpOrSpeed": 4754,
        "atkOrPower": 542,
        "defOrGuts": 592,
        "critOrWit": 662,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Homeostasis of the Living — Thunder Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Thunder Field (+65%) + +85% Thunder Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Thunder Field Zone",
            "Thunder Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Thunder Field Zone (+65% Thunder damage) while applying +85% Thunder Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Thunder"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Thunder Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-667359",
        "hbr-712350",
        "hbr-769410"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Seika Higuchi [Homeostasis of the Living] is a A-Tier Thunder Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Thunder Field Zone (+65% Thunder damage) while applying +85% Thunder Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-426210"
    },
    {
      "externalId": "hbr-unit-426230",
      "slug": "hbr-426230",
      "nameEn": "Seira Sakuraba [Starry Sea Fortune Teller]",
      "nameOriginal": "Seira Sakuraba",
      "styleOrTitle": "SS [Starry Sea Fortune Teller] • Squad 31C Buffer",
      "rarity": "SS",
      "role": "Buffer (Crush)",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/10568088/c7e3a7a6d430f24eca9befd35aa861f9.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4920,
        "dpOrSpeed": 4806,
        "atkOrPower": 568,
        "defOrGuts": 618,
        "critOrWit": 688,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Starry Sea Fortune Teller — Absolute Crit & Skill Mastery",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "+90% Skill ATK Up + +100% Crit Rate + 5-Hit Funnel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "Crit Rate 100%",
            "Crit DMG Up",
            "Mind Eye"
          ],
          "exactDescription": "Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Non-Elemental"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803495",
        "hbr-712353",
        "hbr-686333"
      ],
      "tierOverall": "A",
      "tierReroll": "S",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Seira Sakuraba [Starry Sea Fortune Teller] is a A-Tier Non-Elemental Buffer (Crush) in Heaven Burns Red. Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-426230"
    },
    {
      "externalId": "hbr-unit-816691",
      "slug": "hbr-816691",
      "nameEn": "Misato Nikaido [Curiosity Toward a Friend]",
      "nameOriginal": "Misato Nikaido",
      "styleOrTitle": "SS [Curiosity Toward a Friend] • Squad 31D Buffer",
      "rarity": "SS",
      "role": "Buffer (Crush)",
      "roleColumn": "SUPPORT",
      "element": "Fire",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/13014415/57c79e03d756b93b4d1af8562fd71c41.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4985,
        "dpOrSpeed": 4858,
        "atkOrPower": 594,
        "defOrGuts": 644,
        "critOrWit": 714,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Curiosity Toward a Friend — Fire Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Fire Field (+65%) + +85% Fire Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Fire Field Zone",
            "Fire Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Fire"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-643121",
        "hbr-793215",
        "hbr-721625"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": "Misato Nikaido [Curiosity Toward a Friend] is a A-Tier Fire Buffer (Crush) in Heaven Burns Red. Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-816691"
    },
    {
      "externalId": "hbr-unit-813776",
      "slug": "hbr-813776",
      "nameEn": "Irene Redmayne [Spot of Tea]",
      "nameOriginal": "Irene Redmayne",
      "styleOrTitle": "SS [Spot of Tea] • Squad 31X Healer",
      "rarity": "SS",
      "role": "Healer (Pierce)",
      "roleColumn": "SUSTAIN",
      "element": "None",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/12941241/2c830954ba3ace40966a229b2f50606c.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5510,
        "dpOrSpeed": 5650,
        "atkOrPower": 560,
        "defOrGuts": 695,
        "critOrWit": 635,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Spot of Tea — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Non-Elemental"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803495",
        "hbr-692830",
        "hbr-712353"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": "Irene Redmayne [Spot of Tea] is a A-Tier Non-Elemental Healer (Pierce) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-813776"
    },
    {
      "externalId": "hbr-unit-793216",
      "slug": "hbr-793216",
      "nameEn": "Yunxia Li [Delicious Shangri-La Feast]",
      "nameOriginal": "Yunxia Li",
      "styleOrTitle": "SS [Delicious Shangri-La Feast] • Squad 31X Healer",
      "rarity": "SS",
      "role": "Healer (Slash)",
      "roleColumn": "SUSTAIN",
      "element": "Dark",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12676781/9db9bff9cd79bb91ac6b2b6df2dad635.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5588,
        "dpOrSpeed": 5715,
        "atkOrPower": 586,
        "defOrGuts": 721,
        "critOrWit": 661,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Delicious Shangri-La Feast — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Dark"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-839459",
        "hbr-749659",
        "hbr-783178"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.4,
      "summaryVerdict": "Yunxia Li [Delicious Shangri-La Feast] is a A-Tier Dark Healer (Slash) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-793216"
    },
    {
      "externalId": "hbr-unit-769411",
      "slug": "hbr-769411",
      "nameEn": "Maria de Angelis [Dolce Benedizione]",
      "nameOriginal": "Maria de Angelis",
      "styleOrTitle": "SS [Dolce Benedizione] • Squad 31X Healer",
      "rarity": "SS",
      "role": "Healer (Crush)",
      "roleColumn": "SUSTAIN",
      "element": "Light",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/12390669/5c2f564afa794394f1e4d2096bc8341b.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5486,
        "dpOrSpeed": 5630,
        "atkOrPower": 552,
        "defOrGuts": 687,
        "critOrWit": 627,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Dolce Benedizione — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Light"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Light Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-784344",
        "hbr-797590",
        "hbr-832804"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Maria de Angelis [Dolce Benedizione] is a A-Tier Light Healer (Crush) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-769411"
    },
    {
      "externalId": "hbr-unit-769410",
      "slug": "hbr-769410",
      "nameEn": "Carol Reaper [A Taste of Victory!]",
      "nameOriginal": "Carol Reaper",
      "styleOrTitle": "SS [A Taste of Victory!] • Squad 31X Healer",
      "rarity": "SS",
      "role": "Healer (Slash)",
      "roleColumn": "SUSTAIN",
      "element": "Thunder",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12390670/88d8513952a945253e25cb9ebc335cc9.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5564,
        "dpOrSpeed": 5695,
        "atkOrPower": 578,
        "defOrGuts": 713,
        "critOrWit": 653,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: A Taste of Victory! — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Thunder"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Thunder Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-667359",
        "hbr-746396",
        "hbr-712350"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.3,
      "summaryVerdict": "Carol Reaper [A Taste of Victory!] is a A-Tier Thunder Healer (Slash) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-769410"
    },
    {
      "externalId": "hbr-unit-764362",
      "slug": "hbr-764362",
      "nameEn": "Bon Ivar Yamawaki [Solitary Loneliness]",
      "nameOriginal": "Bon Ivar Yamawaki",
      "styleOrTitle": "SS [Solitary Loneliness] • Squad 31C Buffer",
      "rarity": "SS",
      "role": "Buffer (Slash)",
      "roleColumn": "SUPPORT",
      "element": "None",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/12357889/81ff0d6e80e466d74c9153e7b36099f4.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4860,
        "dpOrSpeed": 4758,
        "atkOrPower": 544,
        "defOrGuts": 594,
        "critOrWit": 664,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Solitary Loneliness — Absolute Crit & Skill Mastery",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "+90% Skill ATK Up + +100% Crit Rate + 5-Hit Funnel",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "Crit Rate 100%",
            "Crit DMG Up",
            "Mind Eye"
          ],
          "exactDescription": "Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Non-Elemental"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Non-Elemental Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803495",
        "hbr-712353",
        "hbr-686333"
      ],
      "tierOverall": "A",
      "tierReroll": "S",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": "Bon Ivar Yamawaki [Solitary Loneliness] is a A-Tier Non-Elemental Buffer (Slash) in Heaven Burns Red. Grants the main Attacker +90% Skill Attack Up, +100% Critical Rate, +75% Critical Damage, and a 5-hit Funnel multi-hit bonus.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-764362"
    },
    {
      "externalId": "hbr-unit-721625",
      "slug": "hbr-721625",
      "nameEn": "Charlotta Skopovskaya [Banquet of Devoted Love]",
      "nameOriginal": "Charlotta Skopovskaya",
      "styleOrTitle": "SS [Banquet of Devoted Love] • Squad 31X Healer",
      "rarity": "SS",
      "role": "Healer (Pierce)",
      "roleColumn": "SUSTAIN",
      "element": "Fire",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/11790940/b904da3a1cbc801c558363b418e686e4.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5540,
        "dpOrSpeed": 5675,
        "atkOrPower": 570,
        "defOrGuts": 705,
        "critOrWit": 645,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Banquet of Devoted Love — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Fire"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-643121",
        "hbr-784346",
        "hbr-793215"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.5,
      "summaryVerdict": "Charlotta Skopovskaya [Banquet of Devoted Love] is a A-Tier Fire Healer (Pierce) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-721625"
    },
    {
      "externalId": "hbr-unit-714989",
      "slug": "hbr-714989",
      "nameEn": "Vritika Balakrishnan [Hospitable Annapurna]",
      "nameOriginal": "Vritika Balakrishnan",
      "styleOrTitle": "SS [Hospitable Annapurna] • Squad 31X Healer",
      "rarity": "SS",
      "role": "Healer (Crush)",
      "roleColumn": "SUSTAIN",
      "element": "Ice",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/11741117/ed74020b908da7dc075ad39d3b0a96c7.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5618,
        "dpOrSpeed": 5740,
        "atkOrPower": 596,
        "defOrGuts": 731,
        "critOrWit": 671,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Hospitable Annapurna — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Ice"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-825787",
        "hbr-752168",
        "hbr-764339"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": "Vritika Balakrishnan [Hospitable Annapurna] is a A-Tier Ice Healer (Crush) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-714989"
    },
    {
      "externalId": "hbr-unit-700751",
      "slug": "hbr-700751",
      "nameEn": "Kozue Hiiragi [Poolside Moment]",
      "nameOriginal": "Kozue Hiiragi",
      "styleOrTitle": "SS [Poolside Moment] • Squad 31B Blaster",
      "rarity": "SS",
      "role": "Blaster (Slash)",
      "roleColumn": "SUB_DPS",
      "element": "Dark",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11502980/01744f87736c1d5bab88c3f3ec6d9074.jpeg/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4905,
        "dpOrSpeed": 4794,
        "atkOrPower": 687,
        "defOrGuts": 612,
        "critOrWit": 637,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Poolside Moment — 10-Hit Destruction Storm",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "13 SP",
          "multiplierSummary": "10-Hit Dark Slash + 4.5× Destruction Rate Cap (999%)",
          "hitCount": 10,
          "buffCategoryTags": [
            "Destruction Rate 4.5x",
            "10-Hit OD Gauge",
            "Dark",
            "Slash",
            "Funnel"
          ],
          "exactDescription": "Unleashes a 10-hit Dark Slash barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge."
        },
        {
          "name": "Multi-Hit Overdrive Charger",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "6-Hit Rapid Barrage + Self Funnel +3 Hits",
          "hitCount": 6,
          "buffCategoryTags": [
            "Destruction Rate",
            "Multi-Hit OD",
            "Dark"
          ],
          "exactDescription": "Generates +35% Overdrive gauge per cast and pre-stacks self Funnel before boss DP break."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases Dark Slash skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-839459",
        "hbr-749659",
        "hbr-652687"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.3,
      "summaryVerdict": "Kozue Hiiragi [Poolside Moment] is a A-Tier Dark Blaster (Slash) in Heaven Burns Red. Unleashes a 10-hit Dark Slash barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-700751"
    },
    {
      "externalId": "hbr-unit-659771",
      "slug": "hbr-659771",
      "nameEn": "Masami Iwasawa [Dreamlike Days]",
      "nameOriginal": "Masami Iwasawa",
      "styleOrTitle": "SS [Dreamlike Days] • Squad 31AB Blaster",
      "rarity": "SS",
      "role": "Blaster (Pierce)",
      "roleColumn": "SUB_DPS",
      "element": "Ice",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/13053965/f70628e8ea5f02c4cf4d9d84892113c6.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4970,
        "dpOrSpeed": 4846,
        "atkOrPower": 713,
        "defOrGuts": 638,
        "critOrWit": 663,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Dreamlike Days — 10-Hit Destruction Storm",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "13 SP",
          "multiplierSummary": "10-Hit Ice Pierce + 4.5× Destruction Rate Cap (999%)",
          "hitCount": 10,
          "buffCategoryTags": [
            "Destruction Rate 4.5x",
            "10-Hit OD Gauge",
            "Ice",
            "Pierce",
            "Funnel"
          ],
          "exactDescription": "Unleashes a 10-hit Ice Pierce barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge."
        },
        {
          "name": "Multi-Hit Overdrive Charger",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "6-Hit Rapid Barrage + Self Funnel +3 Hits",
          "hitCount": 6,
          "buffCategoryTags": [
            "Destruction Rate",
            "Multi-Hit OD",
            "Ice"
          ],
          "exactDescription": "Generates +35% Overdrive gauge per cast and pre-stacks self Funnel before boss DP break."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases Ice Pierce skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-825787",
        "hbr-752168",
        "hbr-794994"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Masami Iwasawa [Dreamlike Days] is a A-Tier Ice Blaster (Pierce) in Heaven Burns Red. Unleashes a 10-hit Ice Pierce barrage that rapidly drives post-break boss Destruction Rate from 100% to 600%+ in a single Overdrive turn while filling +85% OD gauge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-659771"
    },
    {
      "externalId": "hbr-unit-615278",
      "slug": "hbr-615278",
      "nameEn": "Charlotta Skopovskaya [Pure Nevesta Bride]",
      "nameOriginal": "Charlotta Skopovskaya",
      "styleOrTitle": "SS [Pure Nevesta Bride] • Squad 31X Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Dark",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/10133823/b9bf7c1be87c232646084cb88bd1ba24.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4885,
        "dpOrSpeed": 4778,
        "atkOrPower": 554,
        "defOrGuts": 604,
        "critOrWit": 674,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Pure Nevesta Bride — Dark Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Dark Field (+65%) + +85% Dark Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dark Field Zone",
            "Dark Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Dark Field Zone (+65% Dark damage) while applying +85% Dark Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Dark"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-839459",
        "hbr-783178",
        "hbr-652687"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": "Charlotta Skopovskaya [Pure Nevesta Bride] is a A-Tier Dark Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Dark Field Zone (+65% Dark damage) while applying +85% Dark Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-615278"
    },
    {
      "externalId": "hbr-unit-585101",
      "slug": "hbr-585101",
      "nameEn": "Erika Aoi [Kirara: Ultimate Idol]",
      "nameOriginal": "Erika Aoi",
      "styleOrTitle": "SS [Kirara: Ultimate Idol] • Squad 31B Defender",
      "rarity": "SS",
      "role": "Defender (Crush)",
      "roleColumn": "SUSTAIN",
      "element": "Fire",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/10469345/8a30233a1a7998dbc4c243c4b8eac134.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5570,
        "dpOrSpeed": 5700,
        "atkOrPower": 580,
        "defOrGuts": 715,
        "critOrWit": 655,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Kirara: Ultimate Idol — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Fire"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-810832",
        "hbr-752169",
        "hbr-816687"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.5,
      "summaryVerdict": "Erika Aoi [Kirara: Ultimate Idol] is a A-Tier Fire Defender (Crush) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-585101"
    },
    {
      "externalId": "hbr-unit-506717",
      "slug": "hbr-506717",
      "nameEn": "Seira Sakuraba [Showdown!! Air Stage]",
      "nameOriginal": "Seira Sakuraba",
      "styleOrTitle": "SS [Showdown!! Air Stage] • Squad 31C Defender",
      "rarity": "SS",
      "role": "Defender (Crush)",
      "roleColumn": "SUSTAIN",
      "element": "Ice",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/10351134/682df3583c10f61157e3bf123d163e4e.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5468,
        "dpOrSpeed": 5615,
        "atkOrPower": 546,
        "defOrGuts": 681,
        "critOrWit": 621,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Showdown!! Air Stage — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Ice"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Ice Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-803496",
        "hbr-669859",
        "hbr-730675"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.4,
      "summaryVerdict": "Seira Sakuraba [Showdown!! Air Stage] is a A-Tier Ice Defender (Crush) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-506717"
    },
    {
      "externalId": "hbr-unit-506307",
      "slug": "hbr-506307",
      "nameEn": "Tama Kunimi [Clash!! Air Bass]",
      "nameOriginal": "Tama Kunimi",
      "styleOrTitle": "SS [Clash!! Air Bass] • Squad 31A Healer",
      "rarity": "SS",
      "role": "Healer (Slash)",
      "roleColumn": "SUSTAIN",
      "element": "Thunder",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/10341811/7529516441da369aea3189c67dd0ce8f.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5546,
        "dpOrSpeed": 5680,
        "atkOrPower": 572,
        "defOrGuts": 707,
        "critOrWit": 647,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Clash!! Air Bass — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Thunder"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Thunder Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-755194",
        "hbr-759416",
        "hbr-781370"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Tama Kunimi [Clash!! Air Bass] is a A-Tier Thunder Healer (Slash) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-506307"
    },
    {
      "externalId": "hbr-unit-493459",
      "slug": "hbr-493459",
      "nameEn": "Minori Ohshima [Realize Your Mind]",
      "nameOriginal": "Minori Ohshima",
      "styleOrTitle": "SS [Realize Your Mind] • Squad 31E Attacker",
      "rarity": "SS",
      "role": "Attacker (Crush)",
      "roleColumn": "DPS",
      "element": "Fire",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/11679235/000ac82930f241e884bc0b8bf37e5e2b.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4995,
        "dpOrSpeed": 4866,
        "atkOrPower": 723,
        "defOrGuts": 648,
        "critOrWit": 673,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Realize Your Mind — Apex HP Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "14 SP",
          "multiplierSummary": "5-Hit Fire Crush (+50% HP Bonus • 14,250 Max Potency)",
          "hitCount": 5,
          "buffCategoryTags": [
            "HP +50% Finisher",
            "Fire",
            "Crush",
            "Self Crit & Mind Eye"
          ],
          "exactDescription": "Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Fire Crush nuke with +50% bonus potency against enemy HP."
        },
        {
          "name": "Focused Charge & Self Funnel",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "Self +75% Fire Skill ATK + 3-Hit Funnel",
          "hitCount": 2,
          "buffCategoryTags": [
            "Self Buff",
            "Funnel",
            "Fire"
          ],
          "exactDescription": "Pre-stacks Self Elemental Skill Attack Up and 3-Hit Funnel on the turn prior to Overdrive burst."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases Fire Crush skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-784346",
        "hbr-793215",
        "hbr-721625"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Minori Ohshima [Realize Your Mind] is a A-Tier Fire Attacker (Crush) in Heaven Burns Red. Pre-applies Self Mind Eye (+50% Weakness DMG) and Critical Rate Up, then unleashes a 5-hit Fire Crush nuke with +50% bonus potency against enemy HP.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-493459"
    },
    {
      "externalId": "hbr-unit-480767",
      "slug": "hbr-480767",
      "nameEn": "Shiki Hanamura [Your Unisono]",
      "nameOriginal": "Shiki Hanamura",
      "styleOrTitle": "SS [Your Unisono] • Squad 31F Buffer",
      "rarity": "SS",
      "role": "Buffer (Slash)",
      "roleColumn": "SUPPORT",
      "element": "Dark",
      "attackType": "Slash",
      "imageUrl": "https://img.game8.jp/11679232/aefd07fc8ee6e307daecc91c8f3f8c89.webp/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4910,
        "dpOrSpeed": 4798,
        "atkOrPower": 564,
        "defOrGuts": 614,
        "critOrWit": 684,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Your Unisono — Dark Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Dark Field (+65%) + +85% Dark Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dark Field Zone",
            "Dark Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Dark Field Zone (+65% Dark damage) while applying +85% Dark Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Dark"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-738525",
        "hbr-787646",
        "hbr-832805"
      ],
      "tierOverall": "A",
      "tierReroll": "S",
      "tierBossRaid": "A",
      "numericScore": 8.2,
      "summaryVerdict": "Shiki Hanamura [Your Unisono] is a A-Tier Dark Buffer (Slash) in Heaven Burns Red. Deploys a permanent Large Dark Field Zone (+65% Dark damage) while applying +85% Dark Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-480767"
    },
    {
      "externalId": "hbr-unit-463894",
      "slug": "hbr-463894",
      "nameEn": "Ichiko Ohshima [Guardian of Endless Compassion]",
      "nameOriginal": "Ichiko Ohshima",
      "styleOrTitle": "SS [Guardian of Endless Compassion] • Squad 31E Defender",
      "rarity": "SS",
      "role": "Defender (Crush)",
      "roleColumn": "SUSTAIN",
      "element": "Fire",
      "attackType": "Crush",
      "imageUrl": "https://img.game8.jp/10433436/33eab3febc9885bc5aec73bdf6174639.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 5600,
        "dpOrSpeed": 5725,
        "atkOrPower": 590,
        "defOrGuts": 725,
        "critOrWit": 665,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 78,
        "sustainScore": 97,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Guardian of Endless Compassion — Sanctuary Revival",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "11 SP (2 Uses)",
          "multiplierSummary": "120% Party DP Overheal + Broken DP Revival + +35% DEF Up",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Revival",
            "120% DP Overheal",
            "Party DEF Up",
            "Fire"
          ],
          "exactDescription": "Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge."
        },
        {
          "name": "Seraphic Barrier & SP Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "6 SP",
          "multiplierSummary": "Frontline DP Restore + Debuff Immunity (1 Turn)",
          "hitCount": 1,
          "buffCategoryTags": [
            "DP Sustain",
            "Debuff Cleanse",
            "Sustain"
          ],
          "exactDescription": "Heals frontline DP shields and cleanses all active DEF Down / Virus ailments before boss AoE phases."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-643121",
        "hbr-784346",
        "hbr-793215"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.5,
      "summaryVerdict": "Ichiko Ohshima [Guardian of Endless Compassion] is a A-Tier Fire Defender (Crush) in Heaven Burns Red. Restores 120% DP across the entire frontline and backline (reviving broken DP shields in Grade 140 Score Attack) while granting +35% Party DEF Up and +1 Overdrive Gauge charge.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-463894"
    },
    {
      "externalId": "hbr-unit-457125",
      "slug": "hbr-457125",
      "nameEn": "Kanata Maruyama [Evolutionary Sensibility]",
      "nameOriginal": "Kanata Maruyama",
      "styleOrTitle": "SS [Evolutionary Sensibility] • Squad 31F Breaker",
      "rarity": "SS",
      "role": "Breaker (Pierce)",
      "roleColumn": "DPS",
      "element": "Dark",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/11015270/dc4291e317aed7dd3c5b8c4c835928b5.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4890,
        "dpOrSpeed": 5132,
        "atkOrPower": 681,
        "defOrGuts": 606,
        "critOrWit": 631,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 78,
        "sustainScore": 80,
        "spEfficiencyScore": 91
      },
      "skills": [
        {
          "name": "EX Skill: Evolutionary Sensibility — Shattering DP Finisher",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "12 SP",
          "multiplierSummary": "4-Hit Dark Pierce (+50% DP Break Bonus • 11,800 Potency)",
          "hitCount": 4,
          "buffCategoryTags": [
            "DP Shield Break +50%",
            "Dark",
            "Pierce",
            "Crit Rate Up"
          ],
          "exactDescription": "Delivers a 4-hit Dark Pierce strike with a +50% multiplier bonus against enemy DP Shields, instantly shattering Grade 140 boss barriers on Turn 1 of Overdrive."
        },
        {
          "name": "Shield-Crushing Volley",
          "type": "ACTIVE",
          "spOrEnergyCost": "8 SP",
          "multiplierSummary": "+30% DP Damage + Self Dark Skill ATK Up",
          "hitCount": 3,
          "buffCategoryTags": [
            "DP Break",
            "Dark",
            "Pierce"
          ],
          "exactDescription": "Strikes all enemies for AoE DP damage while pre-buffing self Skill Attack."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Dark Seraphic Mastery",
          "effect": "Increases Dark Pierce skill damage and Critical Damage by +25% while on the frontline."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-779179",
        "hbr-787646",
        "hbr-832805"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.4,
      "summaryVerdict": "Kanata Maruyama [Evolutionary Sensibility] is a A-Tier Dark Breaker (Pierce) in Heaven Burns Red. Delivers a 4-hit Dark Pierce strike with a +50% multiplier bonus against enemy DP Shields, instantly shattering Grade 140 boss barriers on Turn 1 of Overdrive.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-457125"
    },
    {
      "externalId": "hbr-unit-426197",
      "slug": "hbr-426197",
      "nameEn": "Tsukasa Tojo [Memento Mori Beauty]",
      "nameOriginal": "Tsukasa Tojo",
      "styleOrTitle": "SS [Memento Mori Beauty] • Squad 31A Buffer",
      "rarity": "SS",
      "role": "Buffer (Pierce)",
      "roleColumn": "SUPPORT",
      "element": "Fire",
      "attackType": "Pierce",
      "imageUrl": "https://img.game8.jp/10357486/81874d1ab721d41489af196b8bf31ad3.png/original",
      "releaseDateAsian": "2024-08-10",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 8,
      "recommendedDupes": "Base (LB0) / LB1",
      "baseStats": {
        "hpOrStamina": 4955,
        "dpOrSpeed": 4834,
        "atkOrPower": 582,
        "defOrGuts": 632,
        "critOrWit": 702,
        "burstCeilingScore": 76,
        "bufferCeilingScore": 96,
        "sustainScore": 80,
        "spEfficiencyScore": 96
      },
      "skills": [
        {
          "name": "EX Skill: Memento Mori Beauty — Fire Field & Overdrive Encore",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "10 SP",
          "multiplierSummary": "Large Fire Field (+65%) + +85% Fire Skill ATK + +75% Crit DMG",
          "hitCount": 1,
          "buffCategoryTags": [
            "Fire Field Zone",
            "Fire Skill ATK",
            "Crit DMG Up",
            "Funnel"
          ],
          "exactDescription": "Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party."
        },
        {
          "name": "Tactical Encore & SP Battery",
          "type": "ACTIVE",
          "spOrEnergyCost": "7 SP",
          "multiplierSummary": "+65% Skill ATK Up + Backline +2 SP Recovery",
          "hitCount": 1,
          "buffCategoryTags": [
            "Skill ATK Up",
            "SP Battery",
            "Fire"
          ],
          "exactDescription": "Stacks a second layer of Skill Attack Up (+65%) while accelerating backline SP generation by +2 SP."
        }
      ],
      "passives": [
        {
          "unlockRank": "LB1",
          "name": "Limit Break 1: Vanguard SP Surge (+1 SP/Turn)",
          "effect": "Recovers +1 additional SP at the start of every turn while in the frontline (+3 SP total per turn)."
        },
        {
          "unlockRank": "LB3",
          "name": "Limit Break 3: Fire Seraphic Mastery",
          "effect": "Increases all party buff and DP healing potencies applied by this style by +25%."
        }
      ],
      "synergyUnitSlugs": [
        "hbr-643121",
        "hbr-793215",
        "hbr-721625"
      ],
      "tierOverall": "A",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.3,
      "summaryVerdict": "Tsukasa Tojo [Memento Mori Beauty] is a A-Tier Fire Buffer (Pierce) in Heaven Burns Red. Deploys a permanent Large Fire Field Zone (+65% Fire damage) while applying +85% Fire Skill Attack Up and +75% Critical Damage Up to the party.",
      "longevityNote": "Core meta staple for Grade 140 Score Attack and Anachrony multi-squad clear rotations.",
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/units/hbr-426197"
    }
  ],
  "equipments": [
    {
      "externalId": "hbr-acc-1",
      "slug": "hbr-acc-1",
      "nameEn": "Abyss Ring +6",
      "category": "Accessory / Orb",
      "subType": "6★ Elemental Ring",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/12907571/39b31f9f211f7ae6eaa5845420928ea8.webp/original",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "SkillATK": "Dark +10%",
        "STR_DEX": "+55 / +42",
        "Substat": "+10 VIT/SPR/INT/LUK"
      },
      "effectSummary": "Increases own Dark-element Skill ATK by +10% and grants +55 STR, +42 DEX, and +10 bonus stat.",
      "bestHolderSlugs": [
        "hbr-779179",
        "hbr-738525",
        "hbr-839459",
        "hbr-787646",
        "hbr-783178",
        "hbr-706660",
        "hbr-603245",
        "hbr-832805",
        "hbr-749659",
        "hbr-735062",
        "hbr-687800",
        "hbr-652687",
        "hbr-487220",
        "hbr-628231",
        "hbr-594734",
        "hbr-793216",
        "hbr-700751",
        "hbr-615278",
        "hbr-480767",
        "hbr-457125"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-1"
    },
    {
      "externalId": "hbr-acc-2",
      "slug": "hbr-acc-2",
      "nameEn": "Luminous Ring +6",
      "category": "Accessory / Orb",
      "subType": "6★ Elemental Ring",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/12907569/1e6313252e032e7753c7878f033f4906.webp/original",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "SkillATK": "Light +10%",
        "STR_DEX": "+55 / +42",
        "Substat": "+10 VIT/SPR/INT/LUK"
      },
      "effectSummary": "Increases own Light-element Skill ATK by +10% and grants +55 STR, +42 DEX, and +10 bonus stat.",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-797590",
        "hbr-683118",
        "hbr-832804",
        "hbr-797591",
        "hbr-784344",
        "hbr-784342",
        "hbr-779180",
        "hbr-724681",
        "hbr-712353",
        "hbr-708980",
        "hbr-692830",
        "hbr-686333",
        "hbr-677349",
        "hbr-657138",
        "hbr-652684",
        "hbr-648704",
        "hbr-519394",
        "hbr-507349",
        "hbr-746397",
        "hbr-667354",
        "hbr-663244",
        "hbr-656747",
        "hbr-640069",
        "hbr-600349",
        "hbr-582607",
        "hbr-544799",
        "hbr-521565",
        "hbr-517815",
        "hbr-813761",
        "hbr-724680",
        "hbr-705732",
        "hbr-680864",
        "hbr-640070",
        "hbr-585689",
        "hbr-491018",
        "hbr-484626",
        "hbr-426230",
        "hbr-813776",
        "hbr-769411",
        "hbr-764362"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-2"
    },
    {
      "externalId": "hbr-acc-3",
      "slug": "hbr-acc-3",
      "nameEn": "Frost Ring +6",
      "category": "Accessory / Orb",
      "subType": "6★ Elemental Ring",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/12907572/87c0a14bfec883d92e65c4b5e8b51601.webp/original",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "SkillATK": "Ice +10%",
        "STR_DEX": "+55 / +42",
        "Substat": "+10 VIT/SPR/INT/LUK"
      },
      "effectSummary": "Increases own Ice-element Skill ATK by +10% and grants +55 STR, +42 DEX, and +10 bonus stat.",
      "bestHolderSlugs": [
        "hbr-752168",
        "hbr-825787",
        "hbr-803496",
        "hbr-794994",
        "hbr-781369",
        "hbr-764339",
        "hbr-756804",
        "hbr-730675",
        "hbr-669859",
        "hbr-638288",
        "hbr-621315",
        "hbr-592870",
        "hbr-491017",
        "hbr-606152",
        "hbr-659767",
        "hbr-438518",
        "hbr-714989",
        "hbr-659771",
        "hbr-506717"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-3"
    },
    {
      "externalId": "hbr-acc-4",
      "slug": "hbr-acc-4",
      "nameEn": "Inferno Ring +6",
      "category": "Accessory / Orb",
      "subType": "6★ Elemental Ring",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/12907570/efd03f44f23fe40451c97197ccf05278.webp/original",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "SkillATK": "Fire +10%",
        "STR_DEX": "+55 / +42",
        "Substat": "+10 VIT/SPR/INT/LUK"
      },
      "effectSummary": "Increases own Fire-element Skill ATK by +10% and grants +55 STR, +42 DEX, and +10 bonus stat.",
      "bestHolderSlugs": [
        "hbr-752169",
        "hbr-816687",
        "hbr-810832",
        "hbr-793215",
        "hbr-784346",
        "hbr-775106",
        "hbr-667355",
        "hbr-643121",
        "hbr-595464",
        "hbr-700752",
        "hbr-654826",
        "hbr-642066",
        "hbr-525186",
        "hbr-517816",
        "hbr-708962",
        "hbr-622825",
        "hbr-469574",
        "hbr-816691",
        "hbr-721625",
        "hbr-585101",
        "hbr-493459",
        "hbr-463894",
        "hbr-426197"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-4"
    },
    {
      "externalId": "hbr-acc-5",
      "slug": "hbr-acc-5",
      "nameEn": "Volt Ring +6",
      "category": "Accessory / Orb",
      "subType": "6★ Elemental Ring",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/11792256/527a8a5279f974f5ad4fbf64fc45da9b.webp/original",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "SkillATK": "Thunder +10%",
        "STR_DEX": "+55 / +42",
        "Substat": "+10 VIT/SPR/INT/LUK"
      },
      "effectSummary": "Increases own Thunder-element Skill ATK by +10% and grants +55 STR, +42 DEX, and +10 bonus stat.",
      "bestHolderSlugs": [
        "hbr-759416",
        "hbr-781370",
        "hbr-755194",
        "hbr-746396",
        "hbr-712350",
        "hbr-628230",
        "hbr-577125",
        "hbr-548994",
        "hbr-697860",
        "hbr-667359",
        "hbr-563544",
        "hbr-692832",
        "hbr-426210",
        "hbr-769410",
        "hbr-506307"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-5"
    },
    {
      "externalId": "hbr-acc-6",
      "slug": "hbr-acc-6",
      "nameEn": "Ring of Thunder +4",
      "category": "Accessory / Orb",
      "subType": "6★ Elemental Ring",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/7010193/ee2a40b17907dd4e8296061823caa0bd.png/original",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "SkillATK": "Thunder +10%",
        "STR_DEX": "+37 / +37"
      },
      "effectSummary": "Increases own Thunder-element Skill ATK by +10% and grants +37 STR and +37 DEX.",
      "bestHolderSlugs": [
        "hbr-752168",
        "hbr-839459",
        "hbr-816687"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-6"
    },
    {
      "externalId": "hbr-acc-7",
      "slug": "hbr-acc-7",
      "nameEn": "Ring of Darkness +4",
      "category": "Accessory / Orb",
      "subType": "6★ Elemental Ring",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6930665/0bbd9d550e80db8e66ac95e172693279.png/original",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "SkillATK": "Dark +10%",
        "STR_DEX": "+37 / +37"
      },
      "effectSummary": "Increases own Dark-element Skill ATK by +10% and grants +37 STR and +37 DEX.",
      "bestHolderSlugs": [
        "hbr-738525",
        "hbr-832804",
        "hbr-810832"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-7"
    },
    {
      "externalId": "hbr-acc-8",
      "slug": "hbr-acc-8",
      "nameEn": "Ring of Light +4",
      "category": "Accessory / Orb",
      "subType": "6★ Elemental Ring",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6830330/21a4e103c4b4ffbd25ba639147a4abea.png/original",
      "tierRank": "SSS",
      "score": 9.6,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "SkillATK": "Light +10%",
        "STR_DEX": "+37 / +37"
      },
      "effectSummary": "Increases own Light-element Skill ATK by +10% and grants +37 STR and +37 DEX.",
      "bestHolderSlugs": [
        "hbr-683118",
        "hbr-825787",
        "hbr-803496"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-8"
    },
    {
      "externalId": "hbr-acc-9",
      "slug": "hbr-acc-9",
      "nameEn": "Ring of Ice +4",
      "category": "Accessory / Orb",
      "subType": "6★ Elemental Ring",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6732511/f3d96cdb962cdd83bc759c52941ab182.png/original",
      "tierRank": "SSS",
      "score": 9.6,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "SkillATK": "Ice +10%",
        "STR_DEX": "+37 / +37"
      },
      "effectSummary": "Increases own Ice-element Skill ATK by +10% and grants +37 STR and +37 DEX.",
      "bestHolderSlugs": [
        "hbr-839459",
        "hbr-816687",
        "hbr-797591"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-9"
    },
    {
      "externalId": "hbr-acc-10",
      "slug": "hbr-acc-10",
      "nameEn": "Ring of Flame +4",
      "category": "Accessory / Orb",
      "subType": "6★ Elemental Ring",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6670334/1a0eeb6c781885f9ac54a876b535d488.png/original",
      "tierRank": "SSS",
      "score": 9.5,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "SkillATK": "Fire +10%",
        "STR_DEX": "+37 / +37"
      },
      "effectSummary": "Increases own Fire-element Skill ATK by +10% and grants +37 STR and +37 DEX.",
      "bestHolderSlugs": [
        "hbr-832804",
        "hbr-810832",
        "hbr-794994"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-10"
    },
    {
      "externalId": "hbr-acc-11",
      "slug": "hbr-acc-11",
      "nameEn": "Break Earring +6",
      "category": "Accessory / Orb",
      "subType": "6★ Crafted Earring",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6900287/c76565e955aec1a303100a575c188946.png/original",
      "tierRank": "SSS",
      "score": 9.5,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "DP": "+1,200",
        "INT": "+48",
        "Bonus": "Anti-DP Skill ATK +15%"
      },
      "effectSummary": "Increases Skill ATK against enemy DP Shields by up to +15% (scales with lower hit-count), DP +1,200, INT +48.",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-683118",
        "hbr-825787",
        "hbr-784342",
        "hbr-643121",
        "hbr-594734",
        "hbr-457125"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-11"
    },
    {
      "externalId": "hbr-acc-12",
      "slug": "hbr-acc-12",
      "nameEn": "Attack Earring +6",
      "category": "Accessory / Orb",
      "subType": "6★ Crafted Earring",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6900289/9326cd23bcd7450ae171eac224de2d53.png/original",
      "tierRank": "SSS",
      "score": 9.5,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "DP": "+1,200",
        "INT": "+48",
        "Bonus": "Anti-HP Skill ATK +15%"
      },
      "effectSummary": "Increases Skill ATK against enemy HP by up to +15% (scales with lower hit-count), DP +1,200, INT +48.",
      "bestHolderSlugs": [
        "hbr-738525",
        "hbr-839459",
        "hbr-810832",
        "hbr-803496",
        "hbr-784344",
        "hbr-781369",
        "hbr-755194",
        "hbr-648704",
        "hbr-621315",
        "hbr-595464",
        "hbr-592870",
        "hbr-667359",
        "hbr-724680",
        "hbr-493459"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-12"
    },
    {
      "externalId": "hbr-acc-13",
      "slug": "hbr-acc-13",
      "nameEn": "Drive Earring +6",
      "category": "Accessory / Orb",
      "subType": "6★ Crafted Earring",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6900270/6d65b0dfd851fc63e6c4aa6b5f7f1ffb.png/original",
      "tierRank": "SS",
      "score": 9.4,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "DP": "+1,200",
        "INT": "+48",
        "Bonus": "OD Gauge Gain +15%"
      },
      "effectSummary": "Increases Overdrive Gauge fill rate by +15% (scales with multi-hit skills), DP +1,200, INT +48.",
      "bestHolderSlugs": [
        "hbr-797590",
        "hbr-779179",
        "hbr-759416",
        "hbr-752169",
        "hbr-752168",
        "hbr-832804",
        "hbr-816687",
        "hbr-797591",
        "hbr-794994",
        "hbr-793215",
        "hbr-787646",
        "hbr-784346",
        "hbr-781370",
        "hbr-779180",
        "hbr-775106",
        "hbr-764339",
        "hbr-756804",
        "hbr-746396",
        "hbr-730675",
        "hbr-724681",
        "hbr-712350",
        "hbr-712353",
        "hbr-706660",
        "hbr-692830",
        "hbr-686333",
        "hbr-677349",
        "hbr-669859",
        "hbr-667355",
        "hbr-657138",
        "hbr-652684",
        "hbr-638288",
        "hbr-628230",
        "hbr-603245",
        "hbr-577125",
        "hbr-548994",
        "hbr-519394",
        "hbr-507349",
        "hbr-491017",
        "hbr-832805",
        "hbr-749659",
        "hbr-735062",
        "hbr-700752",
        "hbr-697860",
        "hbr-687800",
        "hbr-663244",
        "hbr-656747",
        "hbr-654826",
        "hbr-652687",
        "hbr-642066",
        "hbr-640069",
        "hbr-606152",
        "hbr-600349",
        "hbr-582607",
        "hbr-563544",
        "hbr-544799",
        "hbr-525186",
        "hbr-521565",
        "hbr-517816",
        "hbr-517815",
        "hbr-487220",
        "hbr-813761",
        "hbr-705732",
        "hbr-692832",
        "hbr-680864",
        "hbr-659767",
        "hbr-640070",
        "hbr-585689",
        "hbr-491018",
        "hbr-484626",
        "hbr-469574",
        "hbr-438518",
        "hbr-426210",
        "hbr-426230",
        "hbr-816691",
        "hbr-813776",
        "hbr-793216",
        "hbr-769411",
        "hbr-769410",
        "hbr-764362",
        "hbr-721625",
        "hbr-714989",
        "hbr-615278",
        "hbr-585101",
        "hbr-506717",
        "hbr-506307",
        "hbr-480767",
        "hbr-463894",
        "hbr-426197"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-13"
    },
    {
      "externalId": "hbr-acc-14",
      "slug": "hbr-acc-14",
      "nameEn": "Blast Earring +6",
      "category": "Accessory / Orb",
      "subType": "6★ Crafted Earring",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6900288/12e1e273d85a396f13aef8caa901b7fd.png/original",
      "tierRank": "SS",
      "score": 9.4,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "DP": "+1,200",
        "INT": "+48",
        "Bonus": "Destruction Rate +15%"
      },
      "effectSummary": "Increases Destruction Rate buildup by +15% (scales with multi-hit Blaster skills), DP +1,200, INT +48.",
      "bestHolderSlugs": [
        "hbr-783178",
        "hbr-708980",
        "hbr-746397",
        "hbr-667354",
        "hbr-708962",
        "hbr-628231",
        "hbr-622825",
        "hbr-700751",
        "hbr-659771"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-14"
    },
    {
      "externalId": "hbr-acc-15",
      "slug": "hbr-acc-15",
      "nameEn": "Bracelet of Dark Strike +6",
      "category": "Accessory / Orb",
      "subType": "6★ Elemental Bracelet",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6900272/a2883119d53de7d1c8bf00ef95efa62f.png/original",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "VIT": "+45",
        "SPR": "+45",
        "NormalATK": "Dark +200%"
      },
      "effectSummary": "Converts Normal Attack to Dark element with +200% damage and grants +45 VIT and +45 SPR.",
      "bestHolderSlugs": [
        "hbr-797591",
        "hbr-787646",
        "hbr-784342"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-15"
    },
    {
      "externalId": "hbr-acc-16",
      "slug": "hbr-acc-16",
      "nameEn": "Bracelet of Light Strike +6",
      "category": "Accessory / Orb",
      "subType": "6★ Elemental Bracelet",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6900273/c08d1b55043fe676b478de81b933b0a9.png/original",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "VIT": "+45",
        "SPR": "+45",
        "NormalATK": "Light +200%"
      },
      "effectSummary": "Converts Normal Attack to Light element with +200% damage and grants +45 VIT and +45 SPR.",
      "bestHolderSlugs": [
        "hbr-794994",
        "hbr-784344",
        "hbr-783178"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-16"
    },
    {
      "externalId": "hbr-acc-17",
      "slug": "hbr-acc-17",
      "nameEn": "Bracelet of Thunder Strike +6",
      "category": "Accessory / Orb",
      "subType": "6★ Elemental Bracelet",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6900274/3eb0d3b36254d027c2e7fe5dad3ade0c.png/original",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "VIT": "+45",
        "SPR": "+45",
        "NormalATK": "Thunder +200%"
      },
      "effectSummary": "Converts Normal Attack to Thunder element with +200% damage and grants +45 VIT and +45 SPR.",
      "bestHolderSlugs": [
        "hbr-793215",
        "hbr-784346",
        "hbr-781369"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-17"
    },
    {
      "externalId": "hbr-acc-18",
      "slug": "hbr-acc-18",
      "nameEn": "Bracelet of Ice Strike +6",
      "category": "Accessory / Orb",
      "subType": "6★ Elemental Bracelet",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6900275/3027a586bf9cf2bb14c66a8b3977d512.png/original",
      "tierRank": "SS",
      "score": 9.2,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "VIT": "+45",
        "SPR": "+45",
        "NormalATK": "Ice +200%"
      },
      "effectSummary": "Converts Normal Attack to Ice element with +200% damage and grants +45 VIT and +45 SPR.",
      "bestHolderSlugs": [
        "hbr-787646",
        "hbr-784342",
        "hbr-781370"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-18"
    },
    {
      "externalId": "hbr-acc-19",
      "slug": "hbr-acc-19",
      "nameEn": "Bracelet of Flame Strike +6",
      "category": "Accessory / Orb",
      "subType": "6★ Elemental Bracelet",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/6900278/b8e9a60337d4476779d3f35464e14b06.png/original",
      "tierRank": "SS",
      "score": 9.2,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "VIT": "+45",
        "SPR": "+45",
        "NormalATK": "Fire +200%"
      },
      "effectSummary": "Converts Normal Attack to Fire element with +200% damage and grants +45 VIT and +45 SPR.",
      "bestHolderSlugs": [
        "hbr-784344",
        "hbr-783178",
        "hbr-779180"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-19"
    },
    {
      "externalId": "hbr-acc-20",
      "slug": "hbr-acc-20",
      "nameEn": "Chain of Dark Protection +6",
      "category": "Accessory / Orb",
      "subType": "6★ Crafted Chain",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/7442938/5c8c911308534493dd921fe2c4ff76e2.png/original",
      "tierRank": "SS",
      "score": 9.1,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "InitialSP": "+3 SP",
        "SkillUses": "Dark +1 Use"
      },
      "effectSummary": "Grants +1 Dark-element Skill Use and +3 Initial Battle SP to the rolled role.",
      "bestHolderSlugs": [
        "hbr-784346",
        "hbr-781369",
        "hbr-775106"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-20"
    },
    {
      "externalId": "hbr-acc-21",
      "slug": "hbr-acc-21",
      "nameEn": "Ancient Chain of Eternal Darkness",
      "category": "Accessory / Orb",
      "subType": "6★ Ancient Chain",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/11840373/7a7649f002bf7858c0119f3e64f6ce1c.webp/original",
      "tierRank": "SS",
      "score": 9.1,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "InitialSP": "+3 SP",
        "SkillATK": "+10%",
        "Destruction": "+10%"
      },
      "effectSummary": "Grants +1 Dark Skill Use, +10% Skill ATK, +10% Destruction Rate gain, and +3 Initial SP.",
      "bestHolderSlugs": [
        "hbr-779179",
        "hbr-738525",
        "hbr-839459",
        "hbr-787646",
        "hbr-783178",
        "hbr-706660",
        "hbr-603245",
        "hbr-832805",
        "hbr-749659",
        "hbr-735062",
        "hbr-687800",
        "hbr-652687",
        "hbr-487220",
        "hbr-628231",
        "hbr-594734",
        "hbr-793216",
        "hbr-700751",
        "hbr-615278",
        "hbr-480767",
        "hbr-457125"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-21"
    },
    {
      "externalId": "hbr-acc-22",
      "slug": "hbr-acc-22",
      "nameEn": "Ancient Chain of Radiance",
      "category": "Accessory / Orb",
      "subType": "6★ Ancient Chain",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/11666401/b4b5a45472c2069f0c5eadbc9c374c23.webp/original",
      "tierRank": "SS",
      "score": 9.1,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "InitialSP": "+3 SP",
        "SkillATK": "+10%",
        "Destruction": "+10%"
      },
      "effectSummary": "Grants +1 Light Skill Use, +10% Skill ATK, +10% Destruction Rate gain, and +3 Initial SP.",
      "bestHolderSlugs": [
        "hbr-797590",
        "hbr-832804",
        "hbr-797591",
        "hbr-784344",
        "hbr-779180",
        "hbr-724681",
        "hbr-677349",
        "hbr-667354",
        "hbr-656747",
        "hbr-640069",
        "hbr-544799",
        "hbr-813761",
        "hbr-724680",
        "hbr-585689",
        "hbr-484626",
        "hbr-769411"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-22"
    },
    {
      "externalId": "hbr-acc-23",
      "slug": "hbr-acc-23",
      "nameEn": "Ancient Chain of Thunderbolt",
      "category": "Accessory / Orb",
      "subType": "6★ Ancient Chain",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/11283964/ed3013af1872081e00a192cb98d25d31.png/original",
      "tierRank": "SS",
      "score": 9,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "InitialSP": "+3 SP",
        "SkillATK": "+10%",
        "Destruction": "+10%"
      },
      "effectSummary": "Grants +1 Thunder Skill Use, +10% Skill ATK, +10% Destruction Rate gain, and +3 Initial SP.",
      "bestHolderSlugs": [
        "hbr-759416",
        "hbr-781370",
        "hbr-755194",
        "hbr-746396",
        "hbr-712350",
        "hbr-628230",
        "hbr-577125",
        "hbr-548994",
        "hbr-697860",
        "hbr-667359",
        "hbr-563544",
        "hbr-692832",
        "hbr-426210",
        "hbr-769410",
        "hbr-506307"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-23"
    },
    {
      "externalId": "hbr-acc-24",
      "slug": "hbr-acc-24",
      "nameEn": "Ancient Chain of Blazing Fire",
      "category": "Accessory / Orb",
      "subType": "6★ Ancient Chain",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/11666450/553922f2bdb737cd04842e7263181eb8.webp/original",
      "tierRank": "SS",
      "score": 9,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "InitialSP": "+3 SP",
        "SkillATK": "+10%",
        "Destruction": "+10%"
      },
      "effectSummary": "Grants +1 Fire Skill Use, +10% Skill ATK, +10% Destruction Rate gain, and +3 Initial SP.",
      "bestHolderSlugs": [
        "hbr-752169",
        "hbr-816687",
        "hbr-810832",
        "hbr-793215",
        "hbr-784346",
        "hbr-775106",
        "hbr-667355",
        "hbr-643121",
        "hbr-595464",
        "hbr-700752",
        "hbr-654826",
        "hbr-642066",
        "hbr-525186",
        "hbr-517816",
        "hbr-708962",
        "hbr-622825",
        "hbr-469574",
        "hbr-816691",
        "hbr-721625",
        "hbr-585101",
        "hbr-493459",
        "hbr-463894",
        "hbr-426197"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-24"
    },
    {
      "externalId": "hbr-acc-25",
      "slug": "hbr-acc-25",
      "nameEn": "Ancient Chain of Silver Ice",
      "category": "Accessory / Orb",
      "subType": "6★ Ancient Chain",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/11666425/81da1be631573588cf614d1b4c3abf39.webp/original",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "InitialSP": "+3 SP",
        "SkillATK": "+10%",
        "Destruction": "+10%"
      },
      "effectSummary": "Grants +1 Ice Skill Use, +10% Skill ATK, +10% Destruction Rate gain, and +3 Initial SP.",
      "bestHolderSlugs": [
        "hbr-752168",
        "hbr-825787",
        "hbr-803496",
        "hbr-794994",
        "hbr-781369",
        "hbr-764339",
        "hbr-756804",
        "hbr-730675",
        "hbr-669859",
        "hbr-638288",
        "hbr-621315",
        "hbr-592870",
        "hbr-491017",
        "hbr-606152",
        "hbr-659767",
        "hbr-438518",
        "hbr-714989",
        "hbr-659771",
        "hbr-506717"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-25"
    },
    {
      "externalId": "hbr-acc-26",
      "slug": "hbr-acc-26",
      "nameEn": "Euphoria Chain +6",
      "category": "Accessory / Orb",
      "subType": "6★ Crafted Chain",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/7442939/63a7983da0c24f17ed7a104c6f410bcf.png/original",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "LUK": "+48",
        "InitialSP": "+3 SP"
      },
      "effectSummary": "Grants +48 LUK for maximum debuff/critical consistency and +3 Initial Battle SP.",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-683118",
        "hbr-784342",
        "hbr-712353",
        "hbr-708980",
        "hbr-692830",
        "hbr-686333",
        "hbr-657138",
        "hbr-652684",
        "hbr-648704",
        "hbr-519394",
        "hbr-507349",
        "hbr-746397",
        "hbr-663244",
        "hbr-600349",
        "hbr-582607",
        "hbr-521565",
        "hbr-517815",
        "hbr-705732",
        "hbr-680864",
        "hbr-640070",
        "hbr-491018",
        "hbr-426230",
        "hbr-813776",
        "hbr-764362"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-26"
    },
    {
      "externalId": "hbr-acc-27",
      "slug": "hbr-acc-27",
      "nameEn": "Chain of Light Protection +6",
      "category": "Accessory / Orb",
      "subType": "6★ Crafted Chain",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/7442937/ffe21d0b37592ae7c58694f4b4b699fb.png/original",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "InitialSP": "+3 SP",
        "SkillUses": "Light +1 Use"
      },
      "effectSummary": "Grants +1 Light-element Skill Use and +3 Initial Battle SP to the rolled role.",
      "bestHolderSlugs": [
        "hbr-764339",
        "hbr-746396",
        "hbr-712350"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-27"
    },
    {
      "externalId": "hbr-acc-28",
      "slug": "hbr-acc-28",
      "nameEn": "Chain of Thunder Protection +6",
      "category": "Accessory / Orb",
      "subType": "6★ Crafted Chain",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/7442942/0f039292e12171565017a1bb35b2c697.png/original",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "InitialSP": "+3 SP",
        "SkillUses": "Thunder +1 Use"
      },
      "effectSummary": "Grants +1 Thunder-element Skill Use and +3 Initial Battle SP to the rolled role.",
      "bestHolderSlugs": [
        "hbr-755194",
        "hbr-730675",
        "hbr-712353"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-28"
    },
    {
      "externalId": "hbr-acc-29",
      "slug": "hbr-acc-29",
      "nameEn": "Chain of Ice Protection +6",
      "category": "Accessory / Orb",
      "subType": "6★ Crafted Chain",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/7442940/f6fe9987fb5bba1f84de90e3ace3ffb0.png/original",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "InitialSP": "+3 SP",
        "SkillUses": "Ice +1 Use"
      },
      "effectSummary": "Grants +1 Ice-element Skill Use and +3 Initial Battle SP to the rolled role.",
      "bestHolderSlugs": [
        "hbr-756804",
        "hbr-724681",
        "hbr-708980"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-29"
    },
    {
      "externalId": "hbr-acc-30",
      "slug": "hbr-acc-30",
      "nameEn": "Chain of Fire Protection +6",
      "category": "Accessory / Orb",
      "subType": "6★ Crafted Chain",
      "rarity": "6★",
      "imageUrl": "https://img.game8.jp/7442941/de303c2e44316842f9c08792cfa8719f.png/original",
      "tierRank": "S",
      "score": 8.7,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "InitialSP": "+3 SP",
        "SkillUses": "Fire +1 Use"
      },
      "effectSummary": "Grants +1 Fire-element Skill Use and +3 Initial Battle SP to the rolled role.",
      "bestHolderSlugs": [
        "hbr-746396",
        "hbr-712350",
        "hbr-706660"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-30"
    },
    {
      "externalId": "hbr-acc-31",
      "slug": "hbr-acc-31",
      "nameEn": "Orb of Critical Hits",
      "category": "Accessory / Orb",
      "subType": "5★ Boss Orb",
      "rarity": "5★",
      "imageUrl": "https://img.game8.jp/11813744/914672d296a25b4fe7db6db5115dc31e.webp/original",
      "tierRank": "S",
      "score": 8.7,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "ActiveSkill": "Self Crit Rate +40–70%"
      },
      "effectSummary": "Unlocks an active Orb skill that increases own Critical Hit Rate by +40–70% (1 Hit).",
      "bestHolderSlugs": [
        "hbr-803495",
        "hbr-738525",
        "hbr-683118",
        "hbr-839459",
        "hbr-825787",
        "hbr-810832",
        "hbr-803496",
        "hbr-784344",
        "hbr-784342",
        "hbr-781369",
        "hbr-755194",
        "hbr-648704",
        "hbr-643121",
        "hbr-621315",
        "hbr-595464",
        "hbr-592870",
        "hbr-667359",
        "hbr-724680",
        "hbr-594734",
        "hbr-493459",
        "hbr-457125"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-31"
    },
    {
      "externalId": "hbr-acc-32",
      "slug": "hbr-acc-32",
      "nameEn": "Orb of Revival",
      "category": "Accessory / Orb",
      "subType": "5★ Boss Orb",
      "rarity": "5★",
      "imageUrl": "https://img.game8.jp/11813742/f077f6ce2eb92153cfa68257e5275f01.webp/original",
      "tierRank": "S",
      "score": 8.7,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "ActiveSkill": "Self DP Revive + Heal"
      },
      "effectSummary": "Unlocks an active Orb skill that revives broken DP Shield and restores up to 2,427 DP.",
      "bestHolderSlugs": [
        "hbr-794994",
        "hbr-756804",
        "hbr-686333",
        "hbr-832805",
        "hbr-663244",
        "hbr-652687",
        "hbr-642066",
        "hbr-517815",
        "hbr-813761",
        "hbr-705732",
        "hbr-692832",
        "hbr-680864",
        "hbr-813776",
        "hbr-793216",
        "hbr-769411",
        "hbr-769410",
        "hbr-721625",
        "hbr-714989",
        "hbr-585101",
        "hbr-506717",
        "hbr-506307",
        "hbr-463894"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-32"
    },
    {
      "externalId": "hbr-acc-33",
      "slug": "hbr-acc-33",
      "nameEn": "Orb of Overdrive",
      "category": "Accessory / Orb",
      "subType": "5★ Boss Orb",
      "rarity": "5★",
      "imageUrl": "https://img.game8.jp/11813747/f611a739d0a98f953ccf1a8fac3f70a9.webp/original",
      "tierRank": "S",
      "score": 8.6,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "ActiveSkill": "Overdrive Gauge Charge"
      },
      "effectSummary": "Unlocks an active Orb skill that directly charges the team Overdrive Gauge.",
      "bestHolderSlugs": [
        "hbr-797590",
        "hbr-779179",
        "hbr-759416",
        "hbr-752169",
        "hbr-752168",
        "hbr-797591",
        "hbr-784346",
        "hbr-775106",
        "hbr-746396",
        "hbr-724681",
        "hbr-692830",
        "hbr-669859",
        "hbr-657138",
        "hbr-652684",
        "hbr-507349",
        "hbr-749659",
        "hbr-735062",
        "hbr-700752",
        "hbr-697860",
        "hbr-687800",
        "hbr-656747",
        "hbr-654826",
        "hbr-606152",
        "hbr-600349",
        "hbr-582607",
        "hbr-563544",
        "hbr-544799",
        "hbr-521565",
        "hbr-517816",
        "hbr-487220",
        "hbr-659767",
        "hbr-640070",
        "hbr-585689",
        "hbr-491018",
        "hbr-469574",
        "hbr-438518",
        "hbr-426210",
        "hbr-426230",
        "hbr-816691",
        "hbr-764362",
        "hbr-615278",
        "hbr-480767",
        "hbr-426197"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-33"
    },
    {
      "externalId": "hbr-acc-34",
      "slug": "hbr-acc-34",
      "nameEn": "Orb of Fierce Attack",
      "category": "Accessory / Orb",
      "subType": "5★ Boss Orb",
      "rarity": "5★",
      "imageUrl": "https://img.game8.jp/11813737/28603a906bc2d33a4493f88881729ee0.webp/original",
      "tierRank": "S",
      "score": 8.6,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "ActiveSkill": "Ally Skill ATK +50–65%"
      },
      "effectSummary": "Unlocks an active Orb skill that boosts a single ally Skill ATK by +50–65% (1 Hit).",
      "bestHolderSlugs": [
        "hbr-712353",
        "hbr-692830",
        "hbr-669859"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-34"
    },
    {
      "externalId": "hbr-acc-35",
      "slug": "hbr-acc-35",
      "nameEn": "Orb of Charge",
      "category": "Accessory / Orb",
      "subType": "5★ Boss Orb",
      "rarity": "5★",
      "imageUrl": "https://img.game8.jp/11813746/91d961979b3b998ab6ceb230cf9c8bcd.webp/original",
      "tierRank": "S",
      "score": 8.5,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "ActiveSkill": "Self SP +3"
      },
      "effectSummary": "Unlocks an active Orb skill that grants +3 SP to the user.",
      "bestHolderSlugs": [
        "hbr-708980",
        "hbr-686333",
        "hbr-667355"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-35"
    },
    {
      "externalId": "hbr-acc-36",
      "slug": "hbr-acc-36",
      "nameEn": "Orb of Softening",
      "category": "Accessory / Orb",
      "subType": "5★ Boss Orb",
      "rarity": "5★",
      "imageUrl": "https://img.game8.jp/11813745/737686e399155a0d31edfdeb9c0e8a3a.webp/original",
      "tierRank": "S",
      "score": 8.5,
      "recommendedDupes": "+6 Synthesis (Max Substats)",
      "stats": {
        "ActiveSkill": "Enemy DEF Down 30–45%"
      },
      "effectSummary": "Unlocks an active Orb skill that inflicts 30–45% DEF Down on the enemy for 1 turn.",
      "bestHolderSlugs": [
        "hbr-832804",
        "hbr-816687",
        "hbr-793215",
        "hbr-787646",
        "hbr-783178",
        "hbr-781370",
        "hbr-779180",
        "hbr-764339",
        "hbr-730675",
        "hbr-712350",
        "hbr-712353",
        "hbr-708980",
        "hbr-706660",
        "hbr-677349",
        "hbr-667355",
        "hbr-638288",
        "hbr-628230",
        "hbr-603245",
        "hbr-577125",
        "hbr-548994",
        "hbr-519394",
        "hbr-491017",
        "hbr-746397",
        "hbr-667354",
        "hbr-640069",
        "hbr-525186",
        "hbr-708962",
        "hbr-628231",
        "hbr-622825",
        "hbr-484626",
        "hbr-700751",
        "hbr-659771"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/accessories/hbr-acc-36"
    }
  ],
  "bosses": [
    {
      "slug": "score-attack-140-red-crimson",
      "nameEn": "Score Attack #65 — Red Crimson (Grade 140 / Intensity 35)",
      "modeName": "Score Attack",
      "difficultyLabel": "Grade 140 Max Intensity",
      "imageUrl": "https://img.game8.jp/6551559/ecbe8c7ca7a0b4378426cda1d3cbf241.png/original",
      "hpStat": "38,000,000 HP",
      "shieldOrDpStat": "2,450,000 DP (x2 Bars)",
      "weaknesses": [
        "Thunder (+150% DMG)",
        "Ice (+150% DMG)",
        "Crush (+50% DMG)"
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
          "counterAction": "Maintain Erika Aoi Angel Wings or Tama Kunimi DP Revival while banking SP."
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
        "hbr-759416",
        "hbr-752168",
        "hbr-825787",
        "hbr-803496",
        "hbr-794994"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/bosses/score-attack-140-red-crimson"
    },
    {
      "slug": "anachrony-flat-hand-supreme",
      "nameEn": "Anachrony — Supreme Flat Hand (Phase 3)",
      "modeName": "Anachrony",
      "difficultyLabel": "Skull Feather Endgame",
      "imageUrl": "https://img.game8.jp/7029894/ee6f893695d9b1ea4e6b3a3e2d8425e3.png/original",
      "hpStat": "52,000,000 HP",
      "shieldOrDpStat": "3,200,000 DP",
      "weaknesses": [
        "Fire (+150% DMG)",
        "Dark (+150% DMG)"
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
        "hbr-779179",
        "hbr-752169",
        "hbr-738525",
        "hbr-839459",
        "hbr-816687"
      ],
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/bosses/anachrony-flat-hand-supreme"
    }
  ],
  "banners": [
    {
      "slug": "hbr-karen-halloween-pickup",
      "bannerTitle": "Platinum Rate-Up — Karen Asakura [Midnight Soul Harvest] & Fubuki Mikoto",
      "bannerType": "LIMITED",
      "imageUrl": "https://img.game8.jp/13148096/f35ea4ee2d58b2d3e8df2bec88e06257.webp/original",
      "featuredNames": [
        "Karen Asakura [Midnight Soul Harvest]",
        "Fubuki Mikoto [Muse of the Broken Night]"
      ],
      "featuredUnitSlugs": [
        "hbr-839459",
        "hbr-816687"
      ],
      "asianStartDate": "2026-10-30",
      "asianEndDate": "2026-11-13",
      "estGlobalStartDate": "2027-02-28",
      "estGlobalEndDate": "2027-03-14",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "Rated 5/5 Stars — premier Dark-element Attacker and Debuffer core for Grade 140 Score Attack.",
      "pityCurrencyCost": 45000,
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/banners/karen-halloween"
    },
    {
      "slug": "hbr-fire-ice-wishlist-gacha",
      "bannerTitle": "Fire & Ice Attribute Wishlist Special Banner (Select 6 SS Memoria)",
      "bannerType": "FESTIVAL",
      "imageUrl": "https://img.game8.jp/12147007/fe45539d9f2d123641efee398f538e23.webp/original",
      "featuredNames": [
        "Ruka Kayamori [Glorious Blades]",
        "Yuina Shirakawa [Oracle Banner of Victory]",
        "Yuki Izumi [Fleur Enchantée]"
      ],
      "featuredUnitSlugs": [
        "hbr-752168",
        "hbr-752169",
        "hbr-825787"
      ],
      "asianStartDate": "2026-11-06",
      "asianEndDate": "2026-11-20",
      "estGlobalStartDate": "2027-03-06",
      "estGlobalEndDate": "2027-03-20",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "Allows selecting 6 target Fire/Ice SS styles including Admiral Ruka Kayamori and Unison Yuina Shirakawa.",
      "pityCurrencyCost": 45000,
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/banners/fire-ice-wishlist"
    },
    {
      "slug": "hbr-halloween-ss-guaranteed-stepup",
      "bannerTitle": "Halloween SS Guaranteed Step-Up Banner (Step 4 & Step 8 Guaranteed)",
      "bannerType": "FESTIVAL",
      "imageUrl": "https://img.game8.jp/12476899/5431de4d1dd7c4c4bd552cdb825e929c.webp/original",
      "featuredNames": [
        "Misato Nikaido [Blue Sky Full-Power Cheer]",
        "Nanami Nanase [Promise Beyond the Dawn]"
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
      "verdictReasoning": "High Quartz efficiency — guarantees featured SS Memoria styles at Step 4 and Step 8.",
      "pityCurrencyCost": 24000,
      "sourceUrl": "https://gachacrest.gg/heaven-burns-red/banners/halloween-stepup"
    }
  ]
};
