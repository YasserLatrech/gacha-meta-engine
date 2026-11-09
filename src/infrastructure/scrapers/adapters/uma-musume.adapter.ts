import { GameAdapterBundle } from './heaven-burns-red.adapter';

export const umaMusumeBundle: GameAdapterBundle = {
  "slug": "uma-musume",
  "name": "Uma Musume: Pretty Derby",
  "shortName": "Uma Musume",
  "asianRegion": "EN",
  "asianPatchVersion": "v4.2.0 Live Meta",
  "globalPatchVersion": "v4.2.0 Live",
  "foresightGapMonths": 18,
  "coverImageUrl": "https://img.game8.jp/5508216/10a31d7e9fc4fe3b1bd18a30f49cc690.png/original",
  "currencyName": "Carats",
  "pullCostSingle": 150,
  "pityThreshold": 200,
  "monthlyF2pIncome": 13500,
  "monthlyPassIncome": 19500,
  "sourceUrl": "https://gachacrest.gg/uma-musume",
  "rolesConfig": [
    {
      "key": "DPS",
      "label": "RUNNER (FRONT-RUNNER)",
      "colorHex": "#0EA5E9"
    },
    {
      "key": "SUB_DPS",
      "label": "LEADER (PACE CHASER)",
      "colorHex": "#F59E0B"
    },
    {
      "key": "SUPPORT",
      "label": "BETWEENER (LATE SURGER)",
      "colorHex": "#3B82F6"
    },
    {
      "key": "SUSTAIN",
      "label": "CHASER (END CLOSER)",
      "colorHex": "#EC4899"
    }
  ],
  "elementsConfig": [
    {
      "key": "Short",
      "label": "Short (Sprint)",
      "colorHex": "#0EA5E9"
    },
    {
      "key": "Mile",
      "label": "Mile",
      "colorHex": "#10B981"
    },
    {
      "key": "Medium",
      "label": "Medium",
      "colorHex": "#F59E0B"
    },
    {
      "key": "Long",
      "label": "Long",
      "colorHex": "#F43F5E"
    },
    {
      "key": "Dirt",
      "label": "Dirt",
      "colorHex": "#EC4899"
    }
  ],
  "units": [
    {
      "externalId": "uma-unit-818827",
      "slug": "uma-818827",
      "nameEn": "Symboli Rudolf [Adamant Sovereign]",
      "nameOriginal": "Symboli Rudolf",
      "styleOrTitle": "3★ [Adamant Sovereign] • Long Betweener",
      "rarity": "3★",
      "role": "Betweener (Long)",
      "roleColumn": "SUPPORT",
      "element": "Long",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/13038190/f1fc397f35f4fdf6aadb5c519ec0673f.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1275,
        "dpOrSpeed": 1260,
        "atkOrPower": 1200,
        "defOrGuts": 1050,
        "critOrWit": 1220,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 88,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Adamant Sovereign",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Symboli Rudolf [Adamant Sovereign] is a SSS-Tier Long-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: No Stopping Me! (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration + Lateral Navigation when boxed behind runners.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "No Stopping Me!"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration + Lateral Navigation when boxed behind runners. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-641198",
        "uma-794061",
        "uma-661551"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.9,
      "summaryVerdict": "Symboli Rudolf [Adamant Sovereign] is a SSS-Tier Long-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-818827"
    },
    {
      "externalId": "uma-unit-811061",
      "slug": "uma-811061",
      "nameEn": "Epiphaneia [Fates Chosen Star]",
      "nameOriginal": "Epiphaneia",
      "styleOrTitle": "3★ [Fates Chosen Star] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12905132/3295d3ffba05887e458a3b0a898dce66.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1136,
        "dpOrSpeed": 1271,
        "atkOrPower": 1211,
        "defOrGuts": 1061,
        "critOrWit": 1231,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 89,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Fates Chosen Star",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Epiphaneia [Fates Chosen Star] is a SSS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Killer Tunes (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Killer Tunes"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity — maintains high-tempo pace position behind the front-runner. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-751219",
        "uma-744513"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.8,
      "summaryVerdict": "Epiphaneia [Fates Chosen Star] is a SSS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-811061"
    },
    {
      "externalId": "uma-unit-794061",
      "slug": "uma-794061",
      "nameEn": "Narita Top Road [Dragon Soup Supreme]",
      "nameOriginal": "Narita Top Road",
      "styleOrTitle": "3★ [Dragon Soup Supreme] • Long Leader",
      "rarity": "3★",
      "role": "Leader (Long)",
      "roleColumn": "SUB_DPS",
      "element": "Long",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12696747/1f99f83a289a7f9a6ff573ad6e270600.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1297,
        "dpOrSpeed": 1282,
        "atkOrPower": 1222,
        "defOrGuts": 1072,
        "critOrWit": 1242,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 90,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Dragon Soup Supreme",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Narita Top Road [Dragon Soup Supreme] is a SSS-Tier Long-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Monster (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Monster"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-641198",
        "uma-818827",
        "uma-661551"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "Narita Top Road [Dragon Soup Supreme] is a SSS-Tier Long-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-794061"
    },
    {
      "externalId": "uma-unit-785654",
      "slug": "uma-785654",
      "nameEn": "Manhattan Cafe [Mystic Rose Bride]",
      "nameOriginal": "Manhattan Cafe",
      "styleOrTitle": "3★ [Mystic Rose Bride] • Long Betweener",
      "rarity": "3★",
      "role": "Betweener (Long)",
      "roleColumn": "SUPPORT",
      "element": "Long",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12598771/3882cd93f6432d3e3bd661e13ca4b07a.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1284,
        "dpOrSpeed": 1269,
        "atkOrPower": 1209,
        "defOrGuts": 1059,
        "critOrWit": 1229,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 91,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Mystic Rose Bride",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Manhattan Cafe [Mystic Rose Bride] is a SSS-Tier Long-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: No Stopping Me! (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration + Lateral Navigation when boxed behind runners.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "No Stopping Me!"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration + Lateral Navigation when boxed behind runners. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-584944",
        "uma-708453",
        "uma-547974"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "Manhattan Cafe [Mystic Rose Bride] is a SSS-Tier Long-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-785654"
    },
    {
      "externalId": "uma-unit-780423",
      "slug": "uma-780423",
      "nameEn": "Admire Groove [Glacial Queen]",
      "nameOriginal": "Admire Groove",
      "styleOrTitle": "3★ [Glacial Queen] • Medium Betweener",
      "rarity": "3★",
      "role": "Betweener (Medium)",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12504904/6aa5e65d2d80c28a732677ce6e77ae49.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1145,
        "dpOrSpeed": 1280,
        "atkOrPower": 1220,
        "defOrGuts": 1070,
        "critOrWit": 1240,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 92,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Glacial Queen",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Admire Groove [Glacial Queen] is a SSS-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: On Your Left! (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Final Leg Acceleration from 5th–9th position with +0.25 m/s target speed.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "On Your Left!"
          ],
          "exactDescription": "0.45 m/s² Final Leg Acceleration from 5th–9th position with +0.25 m/s target speed. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-811061",
        "uma-670452"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.6,
      "summaryVerdict": "Admire Groove [Glacial Queen] is a SSS-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-780423"
    },
    {
      "externalId": "uma-unit-775196",
      "slug": "uma-775196",
      "nameEn": "Sakura Bakushin O [Spring Thunder Sprinter]",
      "nameOriginal": "Sakura Bakushin O",
      "styleOrTitle": "3★ [Spring Thunder Sprinter] • Short Runner",
      "rarity": "3★",
      "role": "Runner (Short)",
      "roleColumn": "DPS",
      "element": "Short",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/12431582/c6c585043652181ce47eb3d5879e9084.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 902,
        "dpOrSpeed": 1307,
        "atkOrPower": 1252,
        "defOrGuts": 1127,
        "critOrWit": 1227,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 93,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Spring Thunder Sprinter",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Sakura Bakushin O [Spring Thunder Sprinter] is a SSS-Tier Short-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Short G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Unrestrained (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Final Corner Acceleration when leading",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Runner",
            "Unrestrained"
          ],
          "exactDescription": "0.45 m/s² Final Corner Acceleration when leading — triggers an uncatchable front-runner breakaway. Evolved at Awakening Lv.5 with bonus potency for Short G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+20% Speed / +10% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Short A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-538996",
        "uma-482000",
        "uma-666499"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.9,
      "summaryVerdict": "Sakura Bakushin O [Spring Thunder Sprinter] is a SSS-Tier Short-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Short G1 tracks.",
      "longevityNote": "Top-meta Short Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-775196"
    },
    {
      "externalId": "uma-unit-755849",
      "slug": "uma-755849",
      "nameEn": "Almond Eye [The Changer]",
      "nameOriginal": "Almond Eye",
      "styleOrTitle": "3★ [The Changer] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12337830/1e198d999fe56557a8f984668d7cffc4.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1143,
        "dpOrSpeed": 1278,
        "atkOrPower": 1218,
        "defOrGuts": 1068,
        "critOrWit": 1238,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 94,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: The Changer",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Almond Eye [The Changer] is a SSS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Speed Star (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Final Corner Velocity + Stamina Restore",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Speed Star"
          ],
          "exactDescription": "0.40 m/s Final Corner Velocity + Stamina Restore — breaks out from 2nd–4th pace pack. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-780423",
        "uma-670452"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.8,
      "summaryVerdict": "Almond Eye [The Changer] is a SSS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-755849"
    },
    {
      "externalId": "uma-unit-758981",
      "slug": "uma-758981",
      "nameEn": "Taiki Shuttle [Baa Baa Patisserie]",
      "nameOriginal": "Taiki Shuttle",
      "styleOrTitle": "3★ [Baa Baa Patisserie] • Mile Leader",
      "rarity": "3★",
      "role": "Leader (Mile)",
      "roleColumn": "SUB_DPS",
      "element": "Mile",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12247377/6896c2324bff623e868a153a06031256.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 900,
        "dpOrSpeed": 1305,
        "atkOrPower": 1250,
        "defOrGuts": 1125,
        "critOrWit": 1225,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 95,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Baa Baa Patisserie",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Taiki Shuttle [Baa Baa Patisserie] is a SSS-Tier Mile-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Killer Tunes (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Killer Tunes"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity — maintains high-tempo pace position behind the front-runner. Evolved at Awakening Lv.5 with bonus potency for Mile G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Mile A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-510277",
        "uma-602130",
        "uma-775195"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "Taiki Shuttle [Baa Baa Patisserie] is a SSS-Tier Mile-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks.",
      "longevityNote": "Top-meta Mile Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-758981"
    },
    {
      "externalId": "uma-unit-751219",
      "slug": "uma-751219",
      "nameEn": "Stay Gold [Sunlit Outsider]",
      "nameOriginal": "Stay Gold",
      "styleOrTitle": "3★ [Sunlit Outsider] • Medium Betweener",
      "rarity": "3★",
      "role": "Betweener (Medium)",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12131766/4ea41086f26f405125c0a50bbd2eaa84.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1141,
        "dpOrSpeed": 1276,
        "atkOrPower": 1216,
        "defOrGuts": 1066,
        "critOrWit": 1236,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 96,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Sunlit Outsider",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Stay Gold [Sunlit Outsider] is a SSS-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Professor of Curvature (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Professor of Curvature"
          ],
          "exactDescription": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-811061",
        "uma-670452"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "Stay Gold [Sunlit Outsider] is a SSS-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-751219"
    },
    {
      "externalId": "uma-unit-734203",
      "slug": "uma-734203",
      "nameEn": "Transcend [Dusk Neo-Kagura]",
      "nameOriginal": "Transcend",
      "styleOrTitle": "3★ [Dusk Neo-Kagura] • Dirt Runner",
      "rarity": "3★",
      "role": "Runner (Dirt)",
      "roleColumn": "DPS",
      "element": "Dirt",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/11919933/1be56264add927efdfc5ee8963c0078b.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 898,
        "dpOrSpeed": 1263,
        "atkOrPower": 1248,
        "defOrGuts": 1053,
        "critOrWit": 1223,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 97,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Dusk Neo-Kagura",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Transcend [Dusk Neo-Kagura] is a SSS-Tier Dirt-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Dirt G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Escape Artist (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity on Corners",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Runner",
            "Escape Artist"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity on Corners — secures 1st-place rod lead before late-race entry. Evolved at Awakening Lv.5 with bonus potency for Dirt G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+10% Speed / +20% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Dirt A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-629749",
        "uma-717556",
        "uma-685367"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SS",
      "numericScore": 9.6,
      "summaryVerdict": "Transcend [Dusk Neo-Kagura] is a SSS-Tier Dirt-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Dirt G1 tracks.",
      "longevityNote": "Top-meta Dirt Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-734203"
    },
    {
      "externalId": "uma-unit-717556",
      "slug": "uma-717556",
      "nameEn": "Espoir City [Red Devil Gear]",
      "nameOriginal": "Espoir City",
      "styleOrTitle": "3★ [Red Devil Gear] • Dirt Leader",
      "rarity": "3★",
      "role": "Leader (Dirt)",
      "roleColumn": "SUB_DPS",
      "element": "Dirt",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/11754833/db8954f17d30174a37fad403bed0fa3c.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 909,
        "dpOrSpeed": 1274,
        "atkOrPower": 1259,
        "defOrGuts": 1064,
        "critOrWit": 1234,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 88,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Red Devil Gear",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Espoir City [Red Devil Gear] is a SSS-Tier Dirt-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Dirt G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Killer Tunes (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Leader",
            "Killer Tunes"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity — maintains high-tempo pace position behind the front-runner. Evolved at Awakening Lv.5 with bonus potency for Dirt G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+10% Speed / +20% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Dirt A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-734203",
        "uma-685367",
        "uma-629749"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.9,
      "summaryVerdict": "Espoir City [Red Devil Gear] is a SSS-Tier Dirt-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Dirt G1 tracks.",
      "longevityNote": "Top-meta Dirt Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-717556"
    },
    {
      "externalId": "uma-unit-712500",
      "slug": "uma-712500",
      "nameEn": "Still in Love [Scarlet Vow Attire]",
      "nameOriginal": "Still in Love",
      "styleOrTitle": "3★ [Scarlet Vow Attire] • Medium Betweener",
      "rarity": "3★",
      "role": "Betweener (Medium)",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/11697596/732b5697f2f8671a941c023479fb622c.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1126,
        "dpOrSpeed": 1261,
        "atkOrPower": 1201,
        "defOrGuts": 1051,
        "critOrWit": 1221,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 89,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Scarlet Vow Attire",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Still in Love [Scarlet Vow Attire] is a SSS-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Professor of Curvature (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Professor of Curvature"
          ],
          "exactDescription": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-755849",
        "uma-744513"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.8,
      "summaryVerdict": "Still in Love [Scarlet Vow Attire] is a SSS-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-712500"
    },
    {
      "externalId": "uma-unit-708453",
      "slug": "uma-708453",
      "nameEn": "Cheval Grand [Summer Calm Navy Drop]",
      "nameOriginal": "Cheval Grand",
      "styleOrTitle": "3★ [Summer Calm Navy Drop] • Long Leader",
      "rarity": "3★",
      "role": "Leader (Long)",
      "roleColumn": "SUB_DPS",
      "element": "Long",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/11603757/43d6d389d496d643fb0bb0419505433d.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1287,
        "dpOrSpeed": 1272,
        "atkOrPower": 1212,
        "defOrGuts": 1062,
        "critOrWit": 1232,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 90,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Summer Calm Navy Drop",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Cheval Grand [Summer Calm Navy Drop] is a SSS-Tier Long-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Speed Star (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Final Corner Velocity + Stamina Restore",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Speed Star"
          ],
          "exactDescription": "0.40 m/s Final Corner Velocity + Stamina Restore — breaks out from 2nd–4th pace pack. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-641198",
        "uma-818827",
        "uma-661551"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "Cheval Grand [Summer Calm Navy Drop] is a SSS-Tier Long-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-708453"
    },
    {
      "externalId": "uma-unit-697314",
      "slug": "uma-697314",
      "nameEn": "Chrono Genesis [Genesis Chronicler]",
      "nameOriginal": "Chrono Genesis",
      "styleOrTitle": "3★ [Genesis Chronicler] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/11493832/32ff945983f1ddc4eccebfe49af33074.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1148,
        "dpOrSpeed": 1283,
        "atkOrPower": 1223,
        "defOrGuts": 1073,
        "critOrWit": 1243,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 91,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Genesis Chronicler",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Chrono Genesis [Genesis Chronicler] is a SSS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Killer Tunes (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Killer Tunes"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity — maintains high-tempo pace position behind the front-runner. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-751219",
        "uma-744513"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "Chrono Genesis [Genesis Chronicler] is a SSS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-697314"
    },
    {
      "externalId": "uma-unit-688549",
      "slug": "uma-688549",
      "nameEn": "Loves Only You [9927 Wishes]",
      "nameOriginal": "Loves Only You",
      "styleOrTitle": "3★ [9927 Wishes] • Medium Betweener",
      "rarity": "3★",
      "role": "Betweener (Medium)",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/11374511/dc3f5368211a2704b67f6f254618332d.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1135,
        "dpOrSpeed": 1270,
        "atkOrPower": 1210,
        "defOrGuts": 1060,
        "critOrWit": 1230,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 92,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: 9927 Wishes",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Loves Only You [9927 Wishes] is a SSS-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Professor of Curvature (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Professor of Curvature"
          ],
          "exactDescription": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-811061",
        "uma-670452"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.6,
      "summaryVerdict": "Loves Only You [9927 Wishes] is a SSS-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-688549"
    },
    {
      "externalId": "uma-unit-685367",
      "slug": "uma-685367",
      "nameEn": "Smart Falcon [Luminous Twirler]",
      "nameOriginal": "Smart Falcon",
      "styleOrTitle": "3★ [Luminous Twirler] • Dirt Runner",
      "rarity": "3★",
      "role": "Runner (Dirt)",
      "roleColumn": "DPS",
      "element": "Dirt",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/11287840/7986d7da1082c1decfedbf2a911fad21.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 916,
        "dpOrSpeed": 1281,
        "atkOrPower": 1266,
        "defOrGuts": 1071,
        "critOrWit": 1241,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 93,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Luminous Twirler",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Smart Falcon [Luminous Twirler] is a SSS-Tier Dirt-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Dirt G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Escape Artist (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity on Corners",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Runner",
            "Escape Artist"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity on Corners — secures 1st-place rod lead before late-race entry. Evolved at Awakening Lv.5 with bonus potency for Dirt G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+10% Speed / +20% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Dirt A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-629749",
        "uma-734203",
        "uma-717556"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.9,
      "summaryVerdict": "Smart Falcon [Luminous Twirler] is a SSS-Tier Dirt-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Dirt G1 tracks.",
      "longevityNote": "Top-meta Dirt Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-685367"
    },
    {
      "externalId": "uma-unit-675742",
      "slug": "uma-675742",
      "nameEn": "Gran Alegria [Smile My Way!]",
      "nameOriginal": "Gran Alegria",
      "styleOrTitle": "3★ [Smile My Way!] • Mile Betweener",
      "rarity": "3★",
      "role": "Betweener (Mile)",
      "roleColumn": "SUPPORT",
      "element": "Mile",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/11143610/735d94356d455cdeb82f69f749b53dd2.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 903,
        "dpOrSpeed": 1308,
        "atkOrPower": 1253,
        "defOrGuts": 1128,
        "critOrWit": 1228,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 94,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Smile My Way!",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Gran Alegria [Smile My Way!] is a SSS-Tier Mile-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: On Your Left! (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Final Leg Acceleration from 5th–9th position with +0.25 m/s target speed.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Betweener",
            "On Your Left!"
          ],
          "exactDescription": "0.45 m/s² Final Leg Acceleration from 5th–9th position with +0.25 m/s target speed. Evolved at Awakening Lv.5 with bonus potency for Mile G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Mile A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-510277",
        "uma-758981",
        "uma-639905"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.8,
      "summaryVerdict": "Gran Alegria [Smile My Way!] is a SSS-Tier Mile-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks.",
      "longevityNote": "Top-meta Mile Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-675742"
    },
    {
      "externalId": "uma-unit-670452",
      "slug": "uma-670452",
      "nameEn": "Orfevre [Absolute Sovereign]",
      "nameOriginal": "Orfevre",
      "styleOrTitle": "3★ [Absolute Sovereign] • Medium Chaser",
      "rarity": "3★",
      "role": "Chaser (Medium)",
      "roleColumn": "SUSTAIN",
      "element": "Medium",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/11068185/d965e907cf1553a79ea9028524b9d988.jpeg/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1144,
        "dpOrSpeed": 1279,
        "atkOrPower": 1219,
        "defOrGuts": 1069,
        "critOrWit": 1239,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 95,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Absolute Sovereign",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Chaser",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Orfevre [Absolute Sovereign] is a SSS-Tier Medium-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Lightning Step (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s² Acceleration + Lane-Switch Velocity to bypass 12-racer traffic blocks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Chaser",
            "Lightning Step"
          ],
          "exactDescription": "0.40 m/s² Acceleration + Lane-Switch Velocity to bypass 12-racer traffic blocks. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Chaser A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-751219",
        "uma-755849"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "Orfevre [Absolute Sovereign] is a SSS-Tier Medium-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Chaser contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-670452"
    },
    {
      "externalId": "uma-unit-666499",
      "slug": "uma-666499",
      "nameEn": "Aston Machan [Unmelting Sugar Confection]",
      "nameOriginal": "Aston Machan",
      "styleOrTitle": "3★ [Unmelting Sugar Confection] • Short Runner",
      "rarity": "3★",
      "role": "Runner (Short)",
      "roleColumn": "DPS",
      "element": "Short",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/10983954/95d64726aacc794af7b5b6af8f002ee8.jpeg/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 901,
        "dpOrSpeed": 1306,
        "atkOrPower": 1251,
        "defOrGuts": 1126,
        "critOrWit": 1226,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 96,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Unmelting Sugar Confection",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Aston Machan [Unmelting Sugar Confection] is a SSS-Tier Short-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Short G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Escape Artist (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity on Corners",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Runner",
            "Escape Artist"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity on Corners — secures 1st-place rod lead before late-race entry. Evolved at Awakening Lv.5 with bonus potency for Short G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+20% Speed / +10% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Short A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-538996",
        "uma-554860",
        "uma-775196"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "Aston Machan [Unmelting Sugar Confection] is a SSS-Tier Short-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Short G1 tracks.",
      "longevityNote": "Top-meta Short Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-666499"
    },
    {
      "externalId": "uma-unit-641198",
      "slug": "uma-641198",
      "nameEn": "Mayano Top Gun [Rockin MewMeow]",
      "nameOriginal": "Mayano Top Gun",
      "styleOrTitle": "3★ [Rockin MewMeow] • Long Runner",
      "rarity": "3★",
      "role": "Runner (Long)",
      "roleColumn": "DPS",
      "element": "Long",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/10568908/7c393c8e093d651b1cd7b303be560304.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1292,
        "dpOrSpeed": 1277,
        "atkOrPower": 1217,
        "defOrGuts": 1067,
        "critOrWit": 1237,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 97,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Rockin MewMeow",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Mayano Top Gun [Rockin MewMeow] is a SSS-Tier Long-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Taking the Lead (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Early-Race Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Runner",
            "Taking the Lead"
          ],
          "exactDescription": "0.45 m/s² Early-Race Acceleration — guarantees immediate 1st position out of the starting gate. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-785654",
        "uma-708453",
        "uma-547974"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.6,
      "summaryVerdict": "Mayano Top Gun [Rockin MewMeow] is a SSS-Tier Long-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-641198"
    },
    {
      "externalId": "uma-unit-635115",
      "slug": "uma-635115",
      "nameEn": "Gentildonna [Regina dei Fiori]",
      "nameOriginal": "Gentildonna",
      "styleOrTitle": "3★ [Regina dei Fiori] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/10423086/5bad6cc82e4047c99e84efb3f805709a.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1129,
        "dpOrSpeed": 1264,
        "atkOrPower": 1204,
        "defOrGuts": 1054,
        "critOrWit": 1224,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 88,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Regina dei Fiori",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Gentildonna [Regina dei Fiori] is a SSS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Monster (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Monster"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-780423",
        "uma-670452"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.9,
      "summaryVerdict": "Gentildonna [Regina dei Fiori] is a SSS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-635115"
    },
    {
      "externalId": "uma-unit-629749",
      "slug": "uma-629749",
      "nameEn": "Hokko Tarumae [Pastel Marine Locodol]",
      "nameOriginal": "Hokko Tarumae",
      "styleOrTitle": "3★ [Pastel Marine Locodol] • Dirt Leader",
      "rarity": "3★",
      "role": "Leader (Dirt)",
      "roleColumn": "SUB_DPS",
      "element": "Dirt",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/10290832/35429876273d21c578b8bc6f802e10cd.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 910,
        "dpOrSpeed": 1275,
        "atkOrPower": 1260,
        "defOrGuts": 1065,
        "critOrWit": 1235,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 89,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Pastel Marine Locodol",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Hokko Tarumae [Pastel Marine Locodol] is a SSS-Tier Dirt-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Dirt G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Speed Star (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Final Corner Velocity + Stamina Restore",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Leader",
            "Speed Star"
          ],
          "exactDescription": "0.40 m/s Final Corner Velocity + Stamina Restore — breaks out from 2nd–4th pace pack. Evolved at Awakening Lv.5 with bonus potency for Dirt G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+10% Speed / +20% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Dirt A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-685367",
        "uma-734203",
        "uma-717556"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.8,
      "summaryVerdict": "Hokko Tarumae [Pastel Marine Locodol] is a SSS-Tier Dirt-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Dirt G1 tracks.",
      "longevityNote": "Top-meta Dirt Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-629749"
    },
    {
      "externalId": "uma-unit-584944",
      "slug": "uma-584944",
      "nameEn": "Kitasan Black [Blooming Wish Finale]",
      "nameOriginal": "Kitasan Black",
      "styleOrTitle": "3★ [Blooming Wish Finale] • Long Runner",
      "rarity": "3★",
      "role": "Runner (Long)",
      "roleColumn": "DPS",
      "element": "Long",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/9258963/e30c86ba404f1c5d0195ba73629215d3.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1277,
        "dpOrSpeed": 1262,
        "atkOrPower": 1202,
        "defOrGuts": 1052,
        "critOrWit": 1222,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 90,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Blooming Wish Finale",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Kitasan Black [Blooming Wish Finale] is a SSS-Tier Long-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Taking the Lead (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Early-Race Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Runner",
            "Taking the Lead"
          ],
          "exactDescription": "0.45 m/s² Early-Race Acceleration — guarantees immediate 1st position out of the starting gate. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-818827",
        "uma-794061",
        "uma-661551"
      ],
      "tierOverall": "SSS",
      "tierReroll": "SSS",
      "tierBossRaid": "SSS",
      "numericScore": 9.7,
      "summaryVerdict": "Kitasan Black [Blooming Wish Finale] is a SSS-Tier Long-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-584944"
    },
    {
      "externalId": "uma-unit-836268",
      "slug": "uma-836268",
      "nameEn": "Daiwa Scarlet [Gale-Force Royal Blue]",
      "nameOriginal": "Daiwa Scarlet",
      "styleOrTitle": "3★ [Gale-Force Royal Blue] • Long Runner",
      "rarity": "3★",
      "role": "Runner (Long)",
      "roleColumn": "DPS",
      "element": "Long",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/13128945/c5e6dff1064a23d53933d45c9aafd78d.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1271,
        "dpOrSpeed": 1256,
        "atkOrPower": 1196,
        "defOrGuts": 1046,
        "critOrWit": 1216,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 91,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Gale-Force Royal Blue",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Daiwa Scarlet [Gale-Force Royal Blue] is a SS-Tier Long-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Unrestrained (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Final Corner Acceleration when leading",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Runner",
            "Unrestrained"
          ],
          "exactDescription": "0.45 m/s² Final Corner Acceleration when leading — triggers an uncatchable front-runner breakaway. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-785654",
        "uma-708453",
        "uma-547974"
      ],
      "tierOverall": "SS",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Daiwa Scarlet [Gale-Force Royal Blue] is a SS-Tier Long-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-836268"
    },
    {
      "externalId": "uma-unit-802528",
      "slug": "uma-802528",
      "nameEn": "Seiun Sky [Seaside Whimsical Orange]",
      "nameOriginal": "Seiun Sky",
      "styleOrTitle": "3★ [Seaside Whimsical Orange] • Medium Runner",
      "rarity": "3★",
      "role": "Runner (Medium)",
      "roleColumn": "DPS",
      "element": "Medium",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/12814456/a436a9273e9560e0568591133b28ee7b.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1108,
        "dpOrSpeed": 1243,
        "atkOrPower": 1183,
        "defOrGuts": 1033,
        "critOrWit": 1203,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 92,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Seaside Whimsical Orange",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Seiun Sky [Seaside Whimsical Orange] is a SS-Tier Medium-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Escape Artist (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity on Corners",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Escape Artist"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity on Corners — secures 1st-place rod lead before late-race entry. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-780423",
        "uma-811061",
        "uma-670452"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.2,
      "summaryVerdict": "Seiun Sky [Seaside Whimsical Orange] is a SS-Tier Medium-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-802528"
    },
    {
      "externalId": "uma-unit-799891",
      "slug": "uma-799891",
      "nameEn": "Rulership [Monochrome GM]",
      "nameOriginal": "Rulership",
      "styleOrTitle": "3★ [Monochrome GM] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12782192/ebd2e01226fe33ab2b05a3d99970bbd7.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1119,
        "dpOrSpeed": 1254,
        "atkOrPower": 1194,
        "defOrGuts": 1044,
        "critOrWit": 1214,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 93,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Monochrome GM",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Rulership [Monochrome GM] is a SS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Killer Tunes (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Killer Tunes"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity — maintains high-tempo pace position behind the front-runner. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-751219",
        "uma-744513"
      ],
      "tierOverall": "SS",
      "tierReroll": "S",
      "tierBossRaid": "SSS",
      "numericScore": 9.5,
      "summaryVerdict": "Rulership [Monochrome GM] is a SS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-799891"
    },
    {
      "externalId": "uma-unit-796335",
      "slug": "uma-796335",
      "nameEn": "Fine Motion [Radiant Ramen Legend]",
      "nameOriginal": "Fine Motion",
      "styleOrTitle": "3★ [Radiant Ramen Legend] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12734017/d15140d15b507616c84e1535a77eabf5.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1130,
        "dpOrSpeed": 1265,
        "atkOrPower": 1205,
        "defOrGuts": 1055,
        "critOrWit": 1225,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 94,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Radiant Ramen Legend",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Fine Motion [Radiant Ramen Legend] is a SS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Monster (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Monster"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-780423",
        "uma-670452"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "Fine Motion [Radiant Ramen Legend] is a SS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-796335"
    },
    {
      "externalId": "uma-unit-785653",
      "slug": "uma-785653",
      "nameEn": "Gentildonna [La Dama Perfetta]",
      "nameOriginal": "Gentildonna",
      "styleOrTitle": "3★ [La Dama Perfetta] • Medium Betweener",
      "rarity": "3★",
      "role": "Betweener (Medium)",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12598770/00d40e00da88a10635a979bf26ac488a.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1117,
        "dpOrSpeed": 1252,
        "atkOrPower": 1192,
        "defOrGuts": 1042,
        "critOrWit": 1212,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 95,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: La Dama Perfetta",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Gentildonna [La Dama Perfetta] is a SS-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: No Stopping Me! (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration + Lateral Navigation when boxed behind runners.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "No Stopping Me!"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration + Lateral Navigation when boxed behind runners. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-755849",
        "uma-744513"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Gentildonna [La Dama Perfetta] is a SS-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-785653"
    },
    {
      "externalId": "uma-unit-782228",
      "slug": "uma-782228",
      "nameEn": "Jungle Pocket [Vermilion Cheer Leader]",
      "nameOriginal": "Jungle Pocket",
      "styleOrTitle": "3★ [Vermilion Cheer Leader] • Medium Betweener",
      "rarity": "3★",
      "role": "Betweener (Medium)",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12527053/7794a0fe268ef3dca7c7a0fdac486c2f.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1128,
        "dpOrSpeed": 1263,
        "atkOrPower": 1203,
        "defOrGuts": 1053,
        "critOrWit": 1223,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 96,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Vermilion Cheer Leader",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Jungle Pocket [Vermilion Cheer Leader] is a SS-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: On Your Left! (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Final Leg Acceleration from 5th–9th position with +0.25 m/s target speed.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "On Your Left!"
          ],
          "exactDescription": "0.45 m/s² Final Leg Acceleration from 5th–9th position with +0.25 m/s target speed. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-811061",
        "uma-670452"
      ],
      "tierOverall": "SS",
      "tierReroll": "SSS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Jungle Pocket [Vermilion Cheer Leader] is a SS-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-782228"
    },
    {
      "externalId": "uma-unit-771047",
      "slug": "uma-771047",
      "nameEn": "Victoire Pisa [Lueur Angelique]",
      "nameOriginal": "Victoire Pisa",
      "styleOrTitle": "3★ [Lueur Angelique] • Medium Betweener",
      "rarity": "3★",
      "role": "Betweener (Medium)",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12406102/c40008404e9ca81249e29b75794492a2.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1115,
        "dpOrSpeed": 1250,
        "atkOrPower": 1190,
        "defOrGuts": 1040,
        "critOrWit": 1210,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 97,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Lueur Angelique",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Victoire Pisa [Lueur Angelique] is a SS-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Professor of Curvature (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Professor of Curvature"
          ],
          "exactDescription": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-755849",
        "uma-744513"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "Victoire Pisa [Lueur Angelique] is a SS-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-771047"
    },
    {
      "externalId": "uma-unit-768732",
      "slug": "uma-768732",
      "nameEn": "Loves Only You [Love-Linked Aster]",
      "nameOriginal": "Loves Only You",
      "styleOrTitle": "3★ [Love-Linked Aster] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12380893/2daf329b0d8d469bad6e8eb1ff5dceef.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1126,
        "dpOrSpeed": 1261,
        "atkOrPower": 1201,
        "defOrGuts": 1051,
        "critOrWit": 1221,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Love-Linked Aster",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Loves Only You [Love-Linked Aster] is a SS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Speed Star (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Final Corner Velocity + Stamina Restore",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Speed Star"
          ],
          "exactDescription": "0.40 m/s Final Corner Velocity + Stamina Restore — breaks out from 2nd–4th pace pack. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-780423",
        "uma-670452"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "Loves Only You [Love-Linked Aster] is a SS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-768732"
    },
    {
      "externalId": "uma-unit-757130",
      "slug": "uma-757130",
      "nameEn": "Kiseki [Miracle Author]",
      "nameOriginal": "Kiseki",
      "styleOrTitle": "3★ [Miracle Author] • Medium Runner",
      "rarity": "3★",
      "role": "Runner (Medium)",
      "roleColumn": "DPS",
      "element": "Medium",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/12218355/2422472338aff4aec52e146757c69552.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1113,
        "dpOrSpeed": 1248,
        "atkOrPower": 1188,
        "defOrGuts": 1038,
        "critOrWit": 1208,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 89,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Miracle Author",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Kiseki [Miracle Author] is a SS-Tier Medium-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Taking the Lead (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Early-Race Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Taking the Lead"
          ],
          "exactDescription": "0.45 m/s² Early-Race Acceleration — guarantees immediate 1st position out of the starting gate. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-751219",
        "uma-755849",
        "uma-744513"
      ],
      "tierOverall": "SS",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "Kiseki [Miracle Author] is a SS-Tier Medium-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-757130"
    },
    {
      "externalId": "uma-unit-754944",
      "slug": "uma-754944",
      "nameEn": "Bubble Gum Fellow [Dawn Radiance]",
      "nameOriginal": "Bubble Gum Fellow",
      "styleOrTitle": "3★ [Dawn Radiance] • Mile Leader",
      "rarity": "3★",
      "role": "Leader (Mile)",
      "roleColumn": "SUB_DPS",
      "element": "Mile",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12190026/b2903b87cbc77e03b9fbcea990392bf8.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 894,
        "dpOrSpeed": 1299,
        "atkOrPower": 1244,
        "defOrGuts": 1119,
        "critOrWit": 1219,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 90,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Dawn Radiance",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Bubble Gum Fellow [Dawn Radiance] is a SS-Tier Mile-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Monster (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Monster"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks. Evolved at Awakening Lv.5 with bonus potency for Mile G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Mile A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-510277",
        "uma-675742",
        "uma-639905"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Bubble Gum Fellow [Dawn Radiance] is a SS-Tier Mile-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks.",
      "longevityNote": "Top-meta Mile Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-754944"
    },
    {
      "externalId": "uma-unit-749288",
      "slug": "uma-749288",
      "nameEn": "Oguri Cap [Cinderella Gray]",
      "nameOriginal": "Oguri Cap",
      "styleOrTitle": "3★ [Cinderella Gray] • Long Leader",
      "rarity": "3★",
      "role": "Leader (Long)",
      "roleColumn": "SUB_DPS",
      "element": "Long",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12121542/87150d30f0c53b44da688b7a7bd87098.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1261,
        "dpOrSpeed": 1246,
        "atkOrPower": 1186,
        "defOrGuts": 1036,
        "critOrWit": 1206,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 91,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Cinderella Gray",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Oguri Cap [Cinderella Gray] is a SS-Tier Long-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Speed Star (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Final Corner Velocity + Stamina Restore",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Speed Star"
          ],
          "exactDescription": "0.40 m/s Final Corner Velocity + Stamina Restore — breaks out from 2nd–4th pace pack. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-584944",
        "uma-785654",
        "uma-547974"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.3,
      "summaryVerdict": "Oguri Cap [Cinderella Gray] is a SS-Tier Long-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-749288"
    },
    {
      "externalId": "uma-unit-744513",
      "slug": "uma-744513",
      "nameEn": "Buena Vista [Heroina Inocente]",
      "nameOriginal": "Buena Vista",
      "styleOrTitle": "3★ [Heroina Inocente] • Medium Chaser",
      "rarity": "3★",
      "role": "Chaser (Medium)",
      "roleColumn": "SUSTAIN",
      "element": "Medium",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/12006213/1c2802bc674d3e6cf1b23c2aded8b686.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1122,
        "dpOrSpeed": 1257,
        "atkOrPower": 1197,
        "defOrGuts": 1047,
        "critOrWit": 1217,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 92,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Heroina Inocente",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Chaser",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Buena Vista [Heroina Inocente] is a SS-Tier Medium-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Masterful Gambit (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s² Final Corner Acceleration + 3.5% Stamina Recovery when surging from the rear.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Chaser",
            "Masterful Gambit"
          ],
          "exactDescription": "0.40 m/s² Final Corner Acceleration + 3.5% Stamina Recovery when surging from the rear. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Chaser A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-780423",
        "uma-811061"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "Buena Vista [Heroina Inocente] is a SS-Tier Medium-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Chaser contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-744513"
    },
    {
      "externalId": "uma-unit-708454",
      "slug": "uma-708454",
      "nameEn": "Satono Crown [Sunlit Island Blossom]",
      "nameOriginal": "Satono Crown",
      "styleOrTitle": "3★ [Sunlit Island Blossom] • Medium Betweener",
      "rarity": "3★",
      "role": "Betweener (Medium)",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/11603758/67a242d3a25a4271009d5a5271fd4c31.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1109,
        "dpOrSpeed": 1244,
        "atkOrPower": 1184,
        "defOrGuts": 1034,
        "critOrWit": 1204,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 93,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Sunlit Island Blossom",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Satono Crown [Sunlit Island Blossom] is a SS-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Professor of Curvature (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Professor of Curvature"
          ],
          "exactDescription": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-755849",
        "uma-744513"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "Satono Crown [Sunlit Island Blossom] is a SS-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-708454"
    },
    {
      "externalId": "uma-unit-707016",
      "slug": "uma-707016",
      "nameEn": "Fusaichi Pandora [Assorted Cuteness]",
      "nameOriginal": "Fusaichi Pandora",
      "styleOrTitle": "3★ [Assorted Cuteness] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/11580218/a7f380e6d9c9ffffc44001a189590757.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1120,
        "dpOrSpeed": 1255,
        "atkOrPower": 1195,
        "defOrGuts": 1045,
        "critOrWit": 1215,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 94,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Assorted Cuteness",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Fusaichi Pandora [Assorted Cuteness] is a SS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Speed Star (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Final Corner Velocity + Stamina Restore",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Speed Star"
          ],
          "exactDescription": "0.40 m/s Final Corner Velocity + Stamina Restore — breaks out from 2nd–4th pace pack. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-780423",
        "uma-670452"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "Fusaichi Pandora [Assorted Cuteness] is a SS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-707016"
    },
    {
      "externalId": "uma-unit-661550",
      "slug": "uma-661550",
      "nameEn": "Katsuragi Ace [Ink Dragon Masterpiece]",
      "nameOriginal": "Katsuragi Ace",
      "styleOrTitle": "3★ [Ink Dragon Masterpiece] • Medium Runner",
      "rarity": "3★",
      "role": "Runner (Medium)",
      "roleColumn": "DPS",
      "element": "Medium",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/10873799/351a4aa97ecc14a6bec22fb5fcb5cc34.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1131,
        "dpOrSpeed": 1266,
        "atkOrPower": 1206,
        "defOrGuts": 1056,
        "critOrWit": 1226,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 95,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Ink Dragon Masterpiece",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Katsuragi Ace [Ink Dragon Masterpiece] is a SS-Tier Medium-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Taking the Lead (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Early-Race Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Taking the Lead"
          ],
          "exactDescription": "0.45 m/s² Early-Race Acceleration — guarantees immediate 1st position out of the starting gate. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-751219",
        "uma-755849",
        "uma-744513"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Katsuragi Ace [Ink Dragon Masterpiece] is a SS-Tier Medium-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-661550"
    },
    {
      "externalId": "uma-unit-655283",
      "slug": "uma-655283",
      "nameEn": "Admire Vega [Glacialis Vega]",
      "nameOriginal": "Admire Vega",
      "styleOrTitle": "3★ [Glacialis Vega] • Medium Chaser",
      "rarity": "3★",
      "role": "Chaser (Medium)",
      "roleColumn": "SUSTAIN",
      "element": "Medium",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/10761787/7f8a56783c0133aa3a85b5a3fec7b085.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1118,
        "dpOrSpeed": 1253,
        "atkOrPower": 1193,
        "defOrGuts": 1043,
        "critOrWit": 1213,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 96,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Glacialis Vega",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Chaser",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Admire Vega [Glacialis Vega] is a SS-Tier Medium-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Lightning Step (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s² Acceleration + Lane-Switch Velocity to bypass 12-racer traffic blocks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Chaser",
            "Lightning Step"
          ],
          "exactDescription": "0.40 m/s² Acceleration + Lane-Switch Velocity to bypass 12-racer traffic blocks. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Chaser A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-780423",
        "uma-811061"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Admire Vega [Glacialis Vega] is a SS-Tier Medium-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Chaser contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-655283"
    },
    {
      "externalId": "uma-unit-650313",
      "slug": "uma-650313",
      "nameEn": "Biwa Hayahide [Engineered Victory]",
      "nameOriginal": "Biwa Hayahide",
      "styleOrTitle": "3★ [Engineered Victory] • Long Leader",
      "rarity": "3★",
      "role": "Leader (Long)",
      "roleColumn": "SUB_DPS",
      "element": "Long",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/10660455/ea9b7d6b2504fac61a20ffe298bb0ed6.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1279,
        "dpOrSpeed": 1264,
        "atkOrPower": 1204,
        "defOrGuts": 1054,
        "critOrWit": 1224,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 97,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Engineered Victory",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Biwa Hayahide [Engineered Victory] is a SS-Tier Long-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Speed Star (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Final Corner Velocity + Stamina Restore",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Speed Star"
          ],
          "exactDescription": "0.40 m/s Final Corner Velocity + Stamina Restore — breaks out from 2nd–4th pace pack. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-584944",
        "uma-785654",
        "uma-547974"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.2,
      "summaryVerdict": "Biwa Hayahide [Engineered Victory] is a SS-Tier Long-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-650313"
    },
    {
      "externalId": "uma-unit-639905",
      "slug": "uma-639905",
      "nameEn": "Durandal [Chevalier Fidele]",
      "nameOriginal": "Durandal",
      "styleOrTitle": "3★ [Chevalier Fidele] • Mile Chaser",
      "rarity": "3★",
      "role": "Chaser (Mile)",
      "roleColumn": "SUSTAIN",
      "element": "Mile",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/10550236/d18b4f205241a15d1e8c61d8176daef2.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 886,
        "dpOrSpeed": 1291,
        "atkOrPower": 1236,
        "defOrGuts": 1111,
        "critOrWit": 1211,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 88,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Chevalier Fidele",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Chaser",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Durandal [Chevalier Fidele] is a SS-Tier Mile-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Masterful Gambit (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s² Final Corner Acceleration + 3.5% Stamina Recovery when surging from the rear.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Chaser",
            "Masterful Gambit"
          ],
          "exactDescription": "0.40 m/s² Final Corner Acceleration + 3.5% Stamina Recovery when surging from the rear. Evolved at Awakening Lv.5 with bonus potency for Mile G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Mile A • Chaser A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-510277",
        "uma-675742",
        "uma-758981"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.5,
      "summaryVerdict": "Durandal [Chevalier Fidele] is a SS-Tier Mile-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks.",
      "longevityNote": "Top-meta Mile Chaser contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-639905"
    },
    {
      "externalId": "uma-unit-602130",
      "slug": "uma-602130",
      "nameEn": "Daiichi Ruby [Flowing Blue]",
      "nameOriginal": "Daiichi Ruby",
      "styleOrTitle": "3★ [Flowing Blue] • Mile Betweener",
      "rarity": "3★",
      "role": "Betweener (Mile)",
      "roleColumn": "SUPPORT",
      "element": "Mile",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/9803733/1ba64b0985d1a87b658b6c6d006bd224.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 897,
        "dpOrSpeed": 1302,
        "atkOrPower": 1247,
        "defOrGuts": 1122,
        "critOrWit": 1222,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 89,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Flowing Blue",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Daiichi Ruby [Flowing Blue] is a SS-Tier Mile-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Professor of Curvature (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Betweener",
            "Professor of Curvature"
          ],
          "exactDescription": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning. Evolved at Awakening Lv.5 with bonus potency for Mile G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Mile A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-510277",
        "uma-754944",
        "uma-775195"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "Daiichi Ruby [Flowing Blue] is a SS-Tier Mile-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks.",
      "longevityNote": "Top-meta Mile Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-602130"
    },
    {
      "externalId": "uma-unit-563273",
      "slug": "uma-563273",
      "nameEn": "Mejiro Ramonu [Onyx Line]",
      "nameOriginal": "Mejiro Ramonu",
      "styleOrTitle": "3★ [Onyx Line] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/8891367/91941ba5af0c75d43e89ba2fef8d2af1.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1114,
        "dpOrSpeed": 1249,
        "atkOrPower": 1189,
        "defOrGuts": 1039,
        "critOrWit": 1209,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 90,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Onyx Line",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Mejiro Ramonu [Onyx Line] is a SS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Speed Star (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Final Corner Velocity + Stamina Restore",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Speed Star"
          ],
          "exactDescription": "0.40 m/s Final Corner Velocity + Stamina Restore — breaks out from 2nd–4th pace pack. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-780423",
        "uma-670452"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Mejiro Ramonu [Onyx Line] is a SS-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-563273"
    },
    {
      "externalId": "uma-unit-543421",
      "slug": "uma-543421",
      "nameEn": "Silence Suzuka [Emerald Among the Waves]",
      "nameOriginal": "Silence Suzuka",
      "styleOrTitle": "3★ [Emerald Among the Waves] • Medium Runner",
      "rarity": "3★",
      "role": "Runner (Medium)",
      "roleColumn": "DPS",
      "element": "Medium",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/8462392/638599f36cb70955b600876abdac9201.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1125,
        "dpOrSpeed": 1260,
        "atkOrPower": 1200,
        "defOrGuts": 1050,
        "critOrWit": 1220,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 91,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Emerald Among the Waves",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Silence Suzuka [Emerald Among the Waves] is a SS-Tier Medium-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Taking the Lead (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Early-Race Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Taking the Lead"
          ],
          "exactDescription": "0.45 m/s² Early-Race Acceleration — guarantees immediate 1st position out of the starting gate. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-751219",
        "uma-755849",
        "uma-744513"
      ],
      "tierOverall": "SS",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Silence Suzuka [Emerald Among the Waves] is a SS-Tier Medium-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-543421"
    },
    {
      "externalId": "uma-unit-538996",
      "slug": "uma-538996",
      "nameEn": "Bamboo Memory [Ultra Marine]",
      "nameOriginal": "Bamboo Memory",
      "styleOrTitle": "3★ [Ultra Marine] • Short Betweener",
      "rarity": "3★",
      "role": "Betweener (Short)",
      "roleColumn": "SUPPORT",
      "element": "Short",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/8228487/e837c0062fffddd4a1d3e328f2d1d20e.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 882,
        "dpOrSpeed": 1287,
        "atkOrPower": 1232,
        "defOrGuts": 1107,
        "critOrWit": 1207,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 92,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Ultra Marine",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Bamboo Memory [Ultra Marine] is a SS-Tier Short-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Short G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Professor of Curvature (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Betweener",
            "Professor of Curvature"
          ],
          "exactDescription": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning. Evolved at Awakening Lv.5 with bonus potency for Short G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+20% Speed / +10% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Short A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-775196",
        "uma-554860",
        "uma-666499"
      ],
      "tierOverall": "SS",
      "tierReroll": "SSS",
      "tierBossRaid": "SS",
      "numericScore": 9.2,
      "summaryVerdict": "Bamboo Memory [Ultra Marine] is a SS-Tier Short-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Short G1 tracks.",
      "longevityNote": "Top-meta Short Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-538996"
    },
    {
      "externalId": "uma-unit-510277",
      "slug": "uma-510277",
      "nameEn": "Ines Fujin [MELTY GIFT]",
      "nameOriginal": "Ines Fujin",
      "styleOrTitle": "3★ [MELTY GIFT] • Mile Runner",
      "rarity": "3★",
      "role": "Runner (Mile)",
      "roleColumn": "DPS",
      "element": "Mile",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/7703991/80f715f61f54b8e89da519cc99ee8702.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 893,
        "dpOrSpeed": 1298,
        "atkOrPower": 1243,
        "defOrGuts": 1118,
        "critOrWit": 1218,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 93,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: MELTY GIFT",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Ines Fujin [MELTY GIFT] is a SS-Tier Mile-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Escape Artist (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity on Corners",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Runner",
            "Escape Artist"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity on Corners — secures 1st-place rod lead before late-race entry. Evolved at Awakening Lv.5 with bonus potency for Mile G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Mile A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-602130",
        "uma-754944",
        "uma-775195"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.5,
      "summaryVerdict": "Ines Fujin [MELTY GIFT] is a SS-Tier Mile-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks.",
      "longevityNote": "Top-meta Mile Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-510277"
    },
    {
      "externalId": "uma-unit-506211",
      "slug": "uma-506211",
      "nameEn": "Kitasan Black [Auspicious Crane Headliner]",
      "nameOriginal": "Kitasan Black",
      "styleOrTitle": "3★ [Auspicious Crane Headliner] • Medium Runner",
      "rarity": "3★",
      "role": "Runner (Medium)",
      "roleColumn": "DPS",
      "element": "Medium",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/8971324/17646bd3f1b2d5adcfe90a304b4a5e84.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1110,
        "dpOrSpeed": 1245,
        "atkOrPower": 1185,
        "defOrGuts": 1035,
        "critOrWit": 1205,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 94,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Auspicious Crane Headliner",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Kitasan Black [Auspicious Crane Headliner] is a SS-Tier Medium-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Taking the Lead (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Early-Race Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Taking the Lead"
          ],
          "exactDescription": "0.45 m/s² Early-Race Acceleration — guarantees immediate 1st position out of the starting gate. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-780423",
        "uma-811061",
        "uma-670452"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.4,
      "summaryVerdict": "Kitasan Black [Auspicious Crane Headliner] is a SS-Tier Medium-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-506211"
    },
    {
      "externalId": "uma-unit-504927",
      "slug": "uma-504927",
      "nameEn": "Narita Brian [Hungry Wolf]",
      "nameOriginal": "Narita Brian",
      "styleOrTitle": "3★ [Hungry Wolf] • Long Leader",
      "rarity": "3★",
      "role": "Leader (Long)",
      "roleColumn": "SUB_DPS",
      "element": "Long",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/7559260/8b0dc3985cf1b550176924f190732427.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1271,
        "dpOrSpeed": 1256,
        "atkOrPower": 1196,
        "defOrGuts": 1046,
        "critOrWit": 1216,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 95,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Hungry Wolf",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Narita Brian [Hungry Wolf] is a SS-Tier Long-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Monster (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Monster"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-584944",
        "uma-785654",
        "uma-547974"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SSS",
      "numericScore": 9.3,
      "summaryVerdict": "Narita Brian [Hungry Wolf] is a SS-Tier Long-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-504927"
    },
    {
      "externalId": "uma-unit-376568",
      "slug": "uma-376568",
      "nameEn": "Taiki Shuttle [Wild Frontier]",
      "nameOriginal": "Taiki Shuttle",
      "styleOrTitle": "3★ [Wild Frontier] • Mile Leader",
      "rarity": "3★",
      "role": "Leader (Mile)",
      "roleColumn": "SUB_DPS",
      "element": "Mile",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/6724843/909e7afb9cb283e50ac16a4544bf4d6e.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 878,
        "dpOrSpeed": 1283,
        "atkOrPower": 1228,
        "defOrGuts": 1103,
        "critOrWit": 1203,
        "burstCeilingScore": 96,
        "bufferCeilingScore": 96,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Wild Frontier",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Taiki Shuttle [Wild Frontier] is a SS-Tier Mile-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Speed Star (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Final Corner Velocity + Stamina Restore",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Speed Star"
          ],
          "exactDescription": "0.40 m/s Final Corner Velocity + Stamina Restore — breaks out from 2nd–4th pace pack. Evolved at Awakening Lv.5 with bonus potency for Mile G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Mile A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-510277",
        "uma-675742",
        "uma-639905"
      ],
      "tierOverall": "SS",
      "tierReroll": "SS",
      "tierBossRaid": "SS",
      "numericScore": 9.3,
      "summaryVerdict": "Taiki Shuttle [Wild Frontier] is a SS-Tier Mile-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks.",
      "longevityNote": "Top-meta Mile Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-376568"
    },
    {
      "externalId": "uma-unit-818828",
      "slug": "uma-818828",
      "nameEn": "Air Groove [Eternal Hecateia]",
      "nameOriginal": "Air Groove",
      "styleOrTitle": "3★ [Eternal Hecateia] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/13038189/321e48c1cccd2606a7510ba546d3a259.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": "2026-06-01",
      "isReleasedGlobal": true,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1101,
        "dpOrSpeed": 1236,
        "atkOrPower": 1176,
        "defOrGuts": 1026,
        "critOrWit": 1196,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 97,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Eternal Hecateia",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Air Groove [Eternal Hecateia] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Killer Tunes (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Killer Tunes"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity — maintains high-tempo pace position behind the front-runner. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-751219",
        "uma-744513"
      ],
      "tierOverall": "S",
      "tierReroll": "A",
      "tierBossRaid": "SS",
      "numericScore": 8.7,
      "summaryVerdict": "Air Groove [Eternal Hecateia] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-818828"
    },
    {
      "externalId": "uma-unit-815143",
      "slug": "uma-815143",
      "nameEn": "Phalaenopsis [Peerless Dawn]",
      "nameOriginal": "Phalaenopsis",
      "styleOrTitle": "3★ [Peerless Dawn] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12987556/a0b61bec27687da8905918001fdb8578.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1112,
        "dpOrSpeed": 1247,
        "atkOrPower": 1187,
        "defOrGuts": 1037,
        "critOrWit": 1207,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 88,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Peerless Dawn",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Phalaenopsis [Peerless Dawn] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Monster (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Monster"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-780423",
        "uma-670452"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "Phalaenopsis [Peerless Dawn] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-815143"
    },
    {
      "externalId": "uma-unit-807041",
      "slug": "uma-807041",
      "nameEn": "Fusaichi Pandora [Snatchin Hearts]",
      "nameOriginal": "Fusaichi Pandora",
      "styleOrTitle": "3★ [Snatchin Hearts] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12875541/519dbb180610d11bfaa659908f35493e.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1099,
        "dpOrSpeed": 1234,
        "atkOrPower": 1174,
        "defOrGuts": 1024,
        "critOrWit": 1194,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 89,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Snatchin Hearts",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Fusaichi Pandora [Snatchin Hearts] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Speed Star (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Final Corner Velocity + Stamina Restore",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Speed Star"
          ],
          "exactDescription": "0.40 m/s Final Corner Velocity + Stamina Restore — breaks out from 2nd–4th pace pack. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-751219",
        "uma-744513"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 8.9,
      "summaryVerdict": "Fusaichi Pandora [Snatchin Hearts] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-807041"
    },
    {
      "externalId": "uma-unit-802527",
      "slug": "uma-802527",
      "nameEn": "Mejiro Bright [Seaside Elegance Chiffon]",
      "nameOriginal": "Mejiro Bright",
      "styleOrTitle": "3★ [Seaside Elegance Chiffon] • Medium Betweener",
      "rarity": "3★",
      "role": "Betweener (Medium)",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12814457/6f10887bba9dd11efddcb1875ab25e0e.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1110,
        "dpOrSpeed": 1245,
        "atkOrPower": 1185,
        "defOrGuts": 1035,
        "critOrWit": 1205,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 90,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Seaside Elegance Chiffon",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Mejiro Bright [Seaside Elegance Chiffon] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: On Your Left! (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Final Leg Acceleration from 5th–9th position with +0.25 m/s target speed.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "On Your Left!"
          ],
          "exactDescription": "0.45 m/s² Final Leg Acceleration from 5th–9th position with +0.25 m/s target speed. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-811061",
        "uma-670452"
      ],
      "tierOverall": "S",
      "tierReroll": "SS",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Mejiro Bright [Seaside Elegance Chiffon] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-802527"
    },
    {
      "externalId": "uma-unit-782230",
      "slug": "uma-782230",
      "nameEn": "Fuji Kiseki [Blanche Etoile]",
      "nameOriginal": "Fuji Kiseki",
      "styleOrTitle": "3★ [Blanche Etoile] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12527052/e773c3fafa637c665810df25e4fd7764.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1097,
        "dpOrSpeed": 1232,
        "atkOrPower": 1172,
        "defOrGuts": 1022,
        "critOrWit": 1192,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 91,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Blanche Etoile",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Fuji Kiseki [Blanche Etoile] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Monster (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Monster"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-751219",
        "uma-744513"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 8.8,
      "summaryVerdict": "Fuji Kiseki [Blanche Etoile] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-782230"
    },
    {
      "externalId": "uma-unit-778574",
      "slug": "uma-778574",
      "nameEn": "Lucky Lilac [Unbreakable Regalia]",
      "nameOriginal": "Lucky Lilac",
      "styleOrTitle": "3★ [Unbreakable Regalia] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12473245/31de75e828e2754d39470f41492c13e5.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1108,
        "dpOrSpeed": 1243,
        "atkOrPower": 1183,
        "defOrGuts": 1033,
        "critOrWit": 1203,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 92,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Unbreakable Regalia",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Lucky Lilac [Unbreakable Regalia] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Speed Star (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Final Corner Velocity + Stamina Restore",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Speed Star"
          ],
          "exactDescription": "0.40 m/s Final Corner Velocity + Stamina Restore — breaks out from 2nd–4th pace pack. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-780423",
        "uma-670452"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "Lucky Lilac [Unbreakable Regalia] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-778574"
    },
    {
      "externalId": "uma-unit-775195",
      "slug": "uma-775195",
      "nameEn": "North Flight [Azure Flash]",
      "nameOriginal": "North Flight",
      "styleOrTitle": "3★ [Azure Flash] • Mile Chaser",
      "rarity": "3★",
      "role": "Chaser (Mile)",
      "roleColumn": "SUSTAIN",
      "element": "Mile",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/12431584/ac26bc0e443b31805b954a080287682f.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 865,
        "dpOrSpeed": 1270,
        "atkOrPower": 1215,
        "defOrGuts": 1090,
        "critOrWit": 1190,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 93,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Azure Flash",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Chaser",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "North Flight [Azure Flash] is a S-Tier Mile-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Masterful Gambit (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s² Final Corner Acceleration + 3.5% Stamina Recovery when surging from the rear.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Chaser",
            "Masterful Gambit"
          ],
          "exactDescription": "0.40 m/s² Final Corner Acceleration + 3.5% Stamina Recovery when surging from the rear. Evolved at Awakening Lv.5 with bonus potency for Mile G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Mile A • Chaser A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-510277",
        "uma-602130",
        "uma-754944"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 9,
      "summaryVerdict": "North Flight [Azure Flash] is a S-Tier Mile-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks.",
      "longevityNote": "Top-meta Mile Chaser contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-775195"
    },
    {
      "externalId": "uma-unit-751668",
      "slug": "uma-751668",
      "nameEn": "Sakura Laurel [Nouvelle Pousse]",
      "nameOriginal": "Sakura Laurel",
      "styleOrTitle": "3★ [Nouvelle Pousse] • Long Betweener",
      "rarity": "3★",
      "role": "Betweener (Long)",
      "roleColumn": "SUPPORT",
      "element": "Long",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12141026/9d53cc01a678bde901aeb61369b9edfc.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1256,
        "dpOrSpeed": 1241,
        "atkOrPower": 1181,
        "defOrGuts": 1031,
        "critOrWit": 1201,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 94,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Nouvelle Pousse",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Sakura Laurel [Nouvelle Pousse] is a S-Tier Long-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Professor of Curvature (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "Professor of Curvature"
          ],
          "exactDescription": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-641198",
        "uma-794061",
        "uma-661551"
      ],
      "tierOverall": "S",
      "tierReroll": "SS",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "Sakura Laurel [Nouvelle Pousse] is a S-Tier Long-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-751668"
    },
    {
      "externalId": "uma-unit-751669",
      "slug": "uma-751669",
      "nameEn": "Ikuno Dictus [Orderly Stroll]",
      "nameOriginal": "Ikuno Dictus",
      "styleOrTitle": "3★ [Orderly Stroll] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12141025/02b35c54c0bf3e4297ea96808a048cd9.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1093,
        "dpOrSpeed": 1228,
        "atkOrPower": 1168,
        "defOrGuts": 1018,
        "critOrWit": 1188,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 95,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Orderly Stroll",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Ikuno Dictus [Orderly Stroll] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Speed Star (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Final Corner Velocity + Stamina Restore",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Speed Star"
          ],
          "exactDescription": "0.40 m/s Final Corner Velocity + Stamina Restore — breaks out from 2nd–4th pace pack. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-751219",
        "uma-744513"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 8.8,
      "summaryVerdict": "Ikuno Dictus [Orderly Stroll] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-751669"
    },
    {
      "externalId": "uma-unit-746402",
      "slug": "uma-746402",
      "nameEn": "Nakayama Festa [Festive Gambit]",
      "nameOriginal": "Nakayama Festa",
      "styleOrTitle": "3★ [Festive Gambit] • Medium Betweener",
      "rarity": "3★",
      "role": "Betweener (Medium)",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12036418/f7c2ec4d9611648bca8c09b3c8c1f7b3.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1104,
        "dpOrSpeed": 1239,
        "atkOrPower": 1179,
        "defOrGuts": 1029,
        "critOrWit": 1199,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 96,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Festive Gambit",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Nakayama Festa [Festive Gambit] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: On Your Left! (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Final Leg Acceleration from 5th–9th position with +0.25 m/s target speed.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "On Your Left!"
          ],
          "exactDescription": "0.45 m/s² Final Leg Acceleration from 5th–9th position with +0.25 m/s target speed. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-811061",
        "uma-670452"
      ],
      "tierOverall": "S",
      "tierReroll": "SS",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Nakayama Festa [Festive Gambit] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-746402"
    },
    {
      "externalId": "uma-unit-737336",
      "slug": "uma-737336",
      "nameEn": "Wonder Acute [Warm Lantern Hot Spring]",
      "nameOriginal": "Wonder Acute",
      "styleOrTitle": "3★ [Warm Lantern Hot Spring] • Dirt Leader",
      "rarity": "3★",
      "role": "Leader (Dirt)",
      "roleColumn": "SUB_DPS",
      "element": "Dirt",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/11971608/a43fb0bb9b2955a070f1ace35166499c.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 861,
        "dpOrSpeed": 1226,
        "atkOrPower": 1211,
        "defOrGuts": 1016,
        "critOrWit": 1186,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 97,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Warm Lantern Hot Spring",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Wonder Acute [Warm Lantern Hot Spring] is a S-Tier Dirt-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Dirt G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Monster (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Leader",
            "Monster"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks. Evolved at Awakening Lv.5 with bonus potency for Dirt G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+10% Speed / +20% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Dirt A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-685367",
        "uma-734203",
        "uma-717556"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 8.7,
      "summaryVerdict": "Wonder Acute [Warm Lantern Hot Spring] is a S-Tier Dirt-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Dirt G1 tracks.",
      "longevityNote": "Top-meta Dirt Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-737336"
    },
    {
      "externalId": "uma-unit-727873",
      "slug": "uma-727873",
      "nameEn": "Tosen Jordan [Highkey Hallowed]",
      "nameOriginal": "Tosen Jordan",
      "styleOrTitle": "3★ [Highkey Hallowed] • Medium Betweener",
      "rarity": "3★",
      "role": "Betweener (Medium)",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/11842922/009a40cd6e1e34523f56fb7b65d7294e.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1102,
        "dpOrSpeed": 1237,
        "atkOrPower": 1177,
        "defOrGuts": 1027,
        "critOrWit": 1197,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 88,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Highkey Hallowed",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Tosen Jordan [Highkey Hallowed] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: No Stopping Me! (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration + Lateral Navigation when boxed behind runners.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "No Stopping Me!"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration + Lateral Navigation when boxed behind runners. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-811061",
        "uma-670452"
      ],
      "tierOverall": "S",
      "tierReroll": "SS",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "Tosen Jordan [Highkey Hallowed] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-727873"
    },
    {
      "externalId": "uma-unit-710376",
      "slug": "uma-710376",
      "nameEn": "Special Week [Eclat d Ete]",
      "nameOriginal": "Special Week",
      "styleOrTitle": "3★ [Eclat d Ete] • Medium Betweener",
      "rarity": "3★",
      "role": "Betweener (Medium)",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/11666235/a7d0eb58eeed129a2b4055be1d5d825e.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1113,
        "dpOrSpeed": 1248,
        "atkOrPower": 1188,
        "defOrGuts": 1038,
        "critOrWit": 1208,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 89,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Eclat d Ete",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Special Week [Eclat d Ete] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: On Your Left! (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Final Leg Acceleration from 5th–9th position with +0.25 m/s target speed.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "On Your Left!"
          ],
          "exactDescription": "0.45 m/s² Final Leg Acceleration from 5th–9th position with +0.25 m/s target speed. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-755849",
        "uma-744513"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "Special Week [Eclat d Ete] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-710376"
    },
    {
      "externalId": "uma-unit-707101",
      "slug": "uma-707101",
      "nameEn": "Rhein Kraft [Eternal Fairytale]",
      "nameOriginal": "Rhein Kraft",
      "styleOrTitle": "3★ [Eternal Fairytale] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/11582584/16e81baa258472cfe9be9168ecd9f723.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1100,
        "dpOrSpeed": 1235,
        "atkOrPower": 1175,
        "defOrGuts": 1025,
        "critOrWit": 1195,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 90,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Eternal Fairytale",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Rhein Kraft [Eternal Fairytale] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Monster (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Monster"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-780423",
        "uma-670452"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Rhein Kraft [Eternal Fairytale] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-707101"
    },
    {
      "externalId": "uma-unit-705722",
      "slug": "uma-705722",
      "nameEn": "Ines Fujin [Hello Hello Island]",
      "nameOriginal": "Ines Fujin",
      "styleOrTitle": "3★ [Hello Hello Island] • Medium Runner",
      "rarity": "3★",
      "role": "Runner (Medium)",
      "roleColumn": "DPS",
      "element": "Medium",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/11548539/e8611e2afa8e98e83e9fa77b3036f36e.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1111,
        "dpOrSpeed": 1246,
        "atkOrPower": 1186,
        "defOrGuts": 1036,
        "critOrWit": 1206,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 91,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Hello Hello Island",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Ines Fujin [Hello Hello Island] is a S-Tier Medium-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Escape Artist (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity on Corners",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Escape Artist"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity on Corners — secures 1st-place rod lead before late-race entry. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-751219",
        "uma-755849",
        "uma-744513"
      ],
      "tierOverall": "S",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Ines Fujin [Hello Hello Island] is a S-Tier Medium-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-705722"
    },
    {
      "externalId": "uma-unit-687349",
      "slug": "uma-687349",
      "nameEn": "Verxina [Le Beau Sommet]",
      "nameOriginal": "Verxina",
      "styleOrTitle": "3★ [Le Beau Sommet] • Mile Leader",
      "rarity": "3★",
      "role": "Leader (Mile)",
      "roleColumn": "SUB_DPS",
      "element": "Mile",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/11350519/6d895f7b3d9abbdc4335ed87a5f9b7f2.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 868,
        "dpOrSpeed": 1273,
        "atkOrPower": 1218,
        "defOrGuts": 1093,
        "critOrWit": 1193,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 92,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Le Beau Sommet",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Verxina [Le Beau Sommet] is a S-Tier Mile-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Killer Tunes (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Killer Tunes"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity — maintains high-tempo pace position behind the front-runner. Evolved at Awakening Lv.5 with bonus potency for Mile G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Mile A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-510277",
        "uma-675742",
        "uma-639905"
      ],
      "tierOverall": "S",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "Verxina [Le Beau Sommet] is a S-Tier Mile-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks.",
      "longevityNote": "Top-meta Mile Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-687349"
    },
    {
      "externalId": "uma-unit-685368",
      "slug": "uma-685368",
      "nameEn": "Copano Rickey [Radiant Fortune Regalia]",
      "nameOriginal": "Copano Rickey",
      "styleOrTitle": "3★ [Radiant Fortune Regalia] • Dirt Leader",
      "rarity": "3★",
      "role": "Leader (Dirt)",
      "roleColumn": "SUB_DPS",
      "element": "Dirt",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/11287842/6f7581717474c1084f86f5630033cc42.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 879,
        "dpOrSpeed": 1244,
        "atkOrPower": 1229,
        "defOrGuts": 1034,
        "critOrWit": 1204,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 93,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Radiant Fortune Regalia",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Copano Rickey [Radiant Fortune Regalia] is a S-Tier Dirt-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Dirt G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Monster (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Leader",
            "Monster"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks. Evolved at Awakening Lv.5 with bonus potency for Dirt G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+10% Speed / +20% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Dirt A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-685367",
        "uma-734203",
        "uma-717556"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 9,
      "summaryVerdict": "Copano Rickey [Radiant Fortune Regalia] is a S-Tier Dirt-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Dirt G1 tracks.",
      "longevityNote": "Top-meta Dirt Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-685368"
    },
    {
      "externalId": "uma-unit-661551",
      "slug": "uma-661551",
      "nameEn": "Mr. C.B. [Dazzling Kabuki Star]",
      "nameOriginal": "Mr. C.B.",
      "styleOrTitle": "3★ [Dazzling Kabuki Star] • Long Chaser",
      "rarity": "3★",
      "role": "Chaser (Long)",
      "roleColumn": "SUSTAIN",
      "element": "Long",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/10873798/cab03092fcd8e070e33f6f34dee560e3.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1246,
        "dpOrSpeed": 1231,
        "atkOrPower": 1171,
        "defOrGuts": 1021,
        "critOrWit": 1191,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 94,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Dazzling Kabuki Star",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Chaser",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Mr. C.B. [Dazzling Kabuki Star] is a S-Tier Long-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Encroaching Shadow (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Straightaway Spurt Acceleration on late-race entry",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Chaser",
            "Encroaching Shadow"
          ],
          "exactDescription": "0.45 m/s² Straightaway Spurt Acceleration on late-race entry — premier Chaser win condition. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Chaser A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-641198",
        "uma-818827",
        "uma-794061"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "Mr. C.B. [Dazzling Kabuki Star] is a S-Tier Long-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Chaser contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-661551"
    },
    {
      "externalId": "uma-unit-659197",
      "slug": "uma-659197",
      "nameEn": "Grass Wonder [Blue Flame Honor]",
      "nameOriginal": "Grass Wonder",
      "styleOrTitle": "3★ [Blue Flame Honor] • Long Betweener",
      "rarity": "3★",
      "role": "Betweener (Long)",
      "roleColumn": "SUPPORT",
      "element": "Long",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/10828340/11451cd9411c2e1222e1e03aacc86f9f.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1257,
        "dpOrSpeed": 1242,
        "atkOrPower": 1182,
        "defOrGuts": 1032,
        "critOrWit": 1202,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 95,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Blue Flame Honor",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Grass Wonder [Blue Flame Honor] is a S-Tier Long-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: On Your Left! (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Final Leg Acceleration from 5th–9th position with +0.25 m/s target speed.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "On Your Left!"
          ],
          "exactDescription": "0.45 m/s² Final Leg Acceleration from 5th–9th position with +0.25 m/s target speed. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-584944",
        "uma-708453",
        "uma-547974"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Grass Wonder [Blue Flame Honor] is a S-Tier Long-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-659197"
    },
    {
      "externalId": "uma-unit-655284",
      "slug": "uma-655284",
      "nameEn": "Narita Top Road [Celestial Road]",
      "nameOriginal": "Narita Top Road",
      "styleOrTitle": "3★ [Celestial Road] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/10761786/f25e9c0e7914cff509a9b6cc6a9a0d21.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1094,
        "dpOrSpeed": 1229,
        "atkOrPower": 1169,
        "defOrGuts": 1019,
        "critOrWit": 1189,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 96,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Celestial Road",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Narita Top Road [Celestial Road] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Monster (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Monster"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-780423",
        "uma-670452"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Narita Top Road [Celestial Road] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-655284"
    },
    {
      "externalId": "uma-unit-643036",
      "slug": "uma-643036",
      "nameEn": "Bubble Gum Fellow [POPPING!]",
      "nameOriginal": "Bubble Gum Fellow",
      "styleOrTitle": "3★ [POPPING!] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/10609182/e6eb069e699a1cea9b5df9222d451914.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1105,
        "dpOrSpeed": 1240,
        "atkOrPower": 1180,
        "defOrGuts": 1030,
        "critOrWit": 1200,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 97,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: POPPING!",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Bubble Gum Fellow [POPPING!] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Speed Star (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Final Corner Velocity + Stamina Restore",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Speed Star"
          ],
          "exactDescription": "0.40 m/s Final Corner Velocity + Stamina Restore — breaks out from 2nd–4th pace pack. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-751219",
        "uma-744513"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 8.7,
      "summaryVerdict": "Bubble Gum Fellow [POPPING!] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-643036"
    },
    {
      "externalId": "uma-unit-629750",
      "slug": "uma-629750",
      "nameEn": "Eishin Flash [Reines Platschern]",
      "nameOriginal": "Eishin Flash",
      "styleOrTitle": "3★ [Reines Platschern] • Medium Betweener",
      "rarity": "3★",
      "role": "Betweener (Medium)",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/10290833/21f4e61bacfffcb423561e401b3eab3e.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1092,
        "dpOrSpeed": 1227,
        "atkOrPower": 1167,
        "defOrGuts": 1017,
        "critOrWit": 1187,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 88,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Reines Platschern",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Eishin Flash [Reines Platschern] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: On Your Left! (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Final Leg Acceleration from 5th–9th position with +0.25 m/s target speed.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "On Your Left!"
          ],
          "exactDescription": "0.45 m/s² Final Leg Acceleration from 5th–9th position with +0.25 m/s target speed. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-811061",
        "uma-670452"
      ],
      "tierOverall": "S",
      "tierReroll": "SS",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "Eishin Flash [Reines Platschern] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-629750"
    },
    {
      "externalId": "uma-unit-614759",
      "slug": "uma-614759",
      "nameEn": "Jungle Pocket [Roar of the Monarch]",
      "nameOriginal": "Jungle Pocket",
      "styleOrTitle": "3★ [Roar of the Monarch] • Medium Betweener",
      "rarity": "3★",
      "role": "Betweener (Medium)",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/10133809/d54bb4e449dadfab5d4b20999d6440b1.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1103,
        "dpOrSpeed": 1238,
        "atkOrPower": 1178,
        "defOrGuts": 1028,
        "critOrWit": 1198,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 89,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Roar of the Monarch",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Jungle Pocket [Roar of the Monarch] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Professor of Curvature (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Professor of Curvature"
          ],
          "exactDescription": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-755849",
        "uma-744513"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "Jungle Pocket [Roar of the Monarch] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-614759"
    },
    {
      "externalId": "uma-unit-606583",
      "slug": "uma-606583",
      "nameEn": "Super Creek [Merciful Rain Shadow]",
      "nameOriginal": "Super Creek",
      "styleOrTitle": "3★ [Merciful Rain Shadow] • Long Leader",
      "rarity": "3★",
      "role": "Leader (Long)",
      "roleColumn": "SUB_DPS",
      "element": "Long",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/9946522/232ef8e52c6501af45bad446d74bd40f.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1240,
        "dpOrSpeed": 1225,
        "atkOrPower": 1165,
        "defOrGuts": 1015,
        "critOrWit": 1185,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 90,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Merciful Rain Shadow",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Super Creek [Merciful Rain Shadow] is a S-Tier Long-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Speed Star (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Final Corner Velocity + Stamina Restore",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Speed Star"
          ],
          "exactDescription": "0.40 m/s Final Corner Velocity + Stamina Restore — breaks out from 2nd–4th pace pack. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-641198",
        "uma-818827",
        "uma-661551"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Super Creek [Merciful Rain Shadow] is a S-Tier Long-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-606583"
    },
    {
      "externalId": "uma-unit-600193",
      "slug": "uma-600193",
      "nameEn": "Rhein Kraft [Dream Successor]",
      "nameOriginal": "Rhein Kraft",
      "styleOrTitle": "3★ [Dream Successor] • Mile Leader",
      "rarity": "3★",
      "role": "Leader (Mile)",
      "roleColumn": "SUB_DPS",
      "element": "Mile",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/9773332/9f9131085b1bd4afa5e852017aaee715.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 871,
        "dpOrSpeed": 1276,
        "atkOrPower": 1221,
        "defOrGuts": 1096,
        "critOrWit": 1196,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 91,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Dream Successor",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Rhein Kraft [Dream Successor] is a S-Tier Mile-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Killer Tunes (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Killer Tunes"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity — maintains high-tempo pace position behind the front-runner. Evolved at Awakening Lv.5 with bonus potency for Mile G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Mile A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-510277",
        "uma-602130",
        "uma-775195"
      ],
      "tierOverall": "S",
      "tierReroll": "A",
      "tierBossRaid": "SS",
      "numericScore": 8.8,
      "summaryVerdict": "Rhein Kraft [Dream Successor] is a S-Tier Mile-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks.",
      "longevityNote": "Top-meta Mile Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-600193"
    },
    {
      "externalId": "uma-unit-595542",
      "slug": "uma-595542",
      "nameEn": "Duramente [Red in Black]",
      "nameOriginal": "Duramente",
      "styleOrTitle": "3★ [Red in Black] • Medium Chaser",
      "rarity": "3★",
      "role": "Chaser (Medium)",
      "roleColumn": "SUSTAIN",
      "element": "Medium",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/9586060/afbab7161261339d651409800aea3c20.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1112,
        "dpOrSpeed": 1247,
        "atkOrPower": 1187,
        "defOrGuts": 1037,
        "critOrWit": 1207,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 92,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Red in Black",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Chaser",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Duramente [Red in Black] is a S-Tier Medium-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Lightning Step (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s² Acceleration + Lane-Switch Velocity to bypass 12-racer traffic blocks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Chaser",
            "Lightning Step"
          ],
          "exactDescription": "0.40 m/s² Acceleration + Lane-Switch Velocity to bypass 12-racer traffic blocks. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Chaser A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-780423",
        "uma-811061"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "Duramente [Red in Black] is a S-Tier Medium-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Chaser contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-595542"
    },
    {
      "externalId": "uma-unit-579403",
      "slug": "uma-579403",
      "nameEn": "Mejiro Bright [Starlit Snow Lolita]",
      "nameOriginal": "Mejiro Bright",
      "styleOrTitle": "3★ [Starlit Snow Lolita] • Long Betweener",
      "rarity": "3★",
      "role": "Betweener (Long)",
      "roleColumn": "SUPPORT",
      "element": "Long",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/9079389/8275a577fcad5955103cb9f64c6f7b34.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1249,
        "dpOrSpeed": 1234,
        "atkOrPower": 1174,
        "defOrGuts": 1024,
        "critOrWit": 1194,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 93,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Starlit Snow Lolita",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Mejiro Bright [Starlit Snow Lolita] is a S-Tier Long-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: No Stopping Me! (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration + Lateral Navigation when boxed behind runners.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "No Stopping Me!"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration + Lateral Navigation when boxed behind runners. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-584944",
        "uma-708453",
        "uma-547974"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "Mejiro Bright [Starlit Snow Lolita] is a S-Tier Long-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-579403"
    },
    {
      "externalId": "uma-unit-554860",
      "slug": "uma-554860",
      "nameEn": "K.S. Miracle [Prism]",
      "nameOriginal": "K.S. Miracle",
      "styleOrTitle": "3★ [Prism] • Short Leader",
      "rarity": "3★",
      "role": "Leader (Short)",
      "roleColumn": "SUB_DPS",
      "element": "Short",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/8782836/2e165ad916955547a30fe3fbd2d6c31b.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 880,
        "dpOrSpeed": 1285,
        "atkOrPower": 1230,
        "defOrGuts": 1105,
        "critOrWit": 1205,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 94,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Prism",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "K.S. Miracle [Prism] is a S-Tier Short-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Short G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Killer Tunes (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Leader",
            "Killer Tunes"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity — maintains high-tempo pace position behind the front-runner. Evolved at Awakening Lv.5 with bonus potency for Short G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+20% Speed / +10% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Short A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-775196",
        "uma-538996",
        "uma-666499"
      ],
      "tierOverall": "S",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "K.S. Miracle [Prism] is a S-Tier Short-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Short G1 tracks.",
      "longevityNote": "Top-meta Short Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-554860"
    },
    {
      "externalId": "uma-unit-547974",
      "slug": "uma-547974",
      "nameEn": "Gold Ship [La Mode 564]",
      "nameOriginal": "Gold Ship",
      "styleOrTitle": "3★ [La Mode 564] • Long Chaser",
      "rarity": "3★",
      "role": "Chaser (Long)",
      "roleColumn": "SUSTAIN",
      "element": "Long",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/8988488/ca6871690ed442060a3c6346553ce7f1.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1247,
        "dpOrSpeed": 1232,
        "atkOrPower": 1172,
        "defOrGuts": 1022,
        "critOrWit": 1192,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 95,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: La Mode 564",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Chaser",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Gold Ship [La Mode 564] is a S-Tier Long-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Lightning Step (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s² Acceleration + Lane-Switch Velocity to bypass 12-racer traffic blocks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Chaser",
            "Lightning Step"
          ],
          "exactDescription": "0.40 m/s² Acceleration + Lane-Switch Velocity to bypass 12-racer traffic blocks. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Chaser A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-584944",
        "uma-785654",
        "uma-708453"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 8.8,
      "summaryVerdict": "Gold Ship [La Mode 564] is a S-Tier Long-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Chaser contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-547974"
    },
    {
      "externalId": "uma-unit-523946",
      "slug": "uma-523946",
      "nameEn": "Neo Universe [Universe-Naut]",
      "nameOriginal": "Neo Universe",
      "styleOrTitle": "3★ [Universe-Naut] • Medium Betweener",
      "rarity": "3★",
      "role": "Betweener (Medium)",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/7953942/0584816953b706224fa6e314005a7d38.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1108,
        "dpOrSpeed": 1243,
        "atkOrPower": 1183,
        "defOrGuts": 1033,
        "critOrWit": 1203,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 96,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Universe-Naut",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Neo Universe [Universe-Naut] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: No Stopping Me! (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration + Lateral Navigation when boxed behind runners.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "No Stopping Me!"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration + Lateral Navigation when boxed behind runners. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-811061",
        "uma-670452"
      ],
      "tierOverall": "S",
      "tierReroll": "SS",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Neo Universe [Universe-Naut] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-523946"
    },
    {
      "externalId": "uma-unit-486171",
      "slug": "uma-486171",
      "nameEn": "Aston Machan [Flare]",
      "nameOriginal": "Aston Machan",
      "styleOrTitle": "3★ [Flare] • Short Runner",
      "rarity": "3★",
      "role": "Runner (Short)",
      "roleColumn": "DPS",
      "element": "Short",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/7304855/3628ae0f8367fa4d6b9dd0b2a32606f6.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 865,
        "dpOrSpeed": 1270,
        "atkOrPower": 1215,
        "defOrGuts": 1090,
        "critOrWit": 1190,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 97,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Flare",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Aston Machan [Flare] is a S-Tier Short-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Short G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Taking the Lead (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Early-Race Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Runner",
            "Taking the Lead"
          ],
          "exactDescription": "0.45 m/s² Early-Race Acceleration — guarantees immediate 1st position out of the starting gate. Evolved at Awakening Lv.5 with bonus potency for Short G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+20% Speed / +10% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Short A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-538996",
        "uma-482000",
        "uma-775196"
      ],
      "tierOverall": "S",
      "tierReroll": "A",
      "tierBossRaid": "A",
      "numericScore": 8.7,
      "summaryVerdict": "Aston Machan [Flare] is a S-Tier Short-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Short G1 tracks.",
      "longevityNote": "Top-meta Short Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-486171"
    },
    {
      "externalId": "uma-unit-482000",
      "slug": "uma-482000",
      "nameEn": "Seeking the Pearl [Rocket Star]",
      "nameOriginal": "Seeking the Pearl",
      "styleOrTitle": "3★ [Rocket Star] • Short Leader",
      "rarity": "3★",
      "role": "Leader (Short)",
      "roleColumn": "SUB_DPS",
      "element": "Short",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/7238349/c7006daadc12f9c16b84f24f053a377a.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 876,
        "dpOrSpeed": 1281,
        "atkOrPower": 1226,
        "defOrGuts": 1101,
        "critOrWit": 1201,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 88,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Rocket Star",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Seeking the Pearl [Rocket Star] is a S-Tier Short-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Short G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Monster (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Short",
            "Leader",
            "Monster"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks. Evolved at Awakening Lv.5 with bonus potency for Short G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+20% Speed / +10% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Short A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-775196",
        "uma-538996",
        "uma-666499"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "Seeking the Pearl [Rocket Star] is a S-Tier Short-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Short G1 tracks.",
      "longevityNote": "Top-meta Short Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-482000"
    },
    {
      "externalId": "uma-unit-473265",
      "slug": "uma-473265",
      "nameEn": "Copano Rickey [Yin-Yang Fortune Regalia]",
      "nameOriginal": "Copano Rickey",
      "styleOrTitle": "3★ [Yin-Yang Fortune Regalia] • Dirt Leader",
      "rarity": "3★",
      "role": "Leader (Dirt)",
      "roleColumn": "SUB_DPS",
      "element": "Dirt",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/7133386/924b004ce6b9025ca9b970c929953efb.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 863,
        "dpOrSpeed": 1228,
        "atkOrPower": 1213,
        "defOrGuts": 1018,
        "critOrWit": 1188,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 89,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Yin-Yang Fortune Regalia",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Copano Rickey [Yin-Yang Fortune Regalia] is a S-Tier Dirt-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Dirt G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Speed Star (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Final Corner Velocity + Stamina Restore",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Leader",
            "Speed Star"
          ],
          "exactDescription": "0.40 m/s Final Corner Velocity + Stamina Restore — breaks out from 2nd–4th pace pack. Evolved at Awakening Lv.5 with bonus potency for Dirt G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+10% Speed / +20% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Dirt A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-685367",
        "uma-734203",
        "uma-717556"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 8.9,
      "summaryVerdict": "Copano Rickey [Yin-Yang Fortune Regalia] is a S-Tier Dirt-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Dirt G1 tracks.",
      "longevityNote": "Top-meta Dirt Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-473265"
    },
    {
      "externalId": "uma-unit-468712",
      "slug": "uma-468712",
      "nameEn": "Gold Ship [Run! Splash! Launcher!!]",
      "nameOriginal": "Gold Ship",
      "styleOrTitle": "3★ [Run! Splash! Launcher!!] • Long Chaser",
      "rarity": "3★",
      "role": "Chaser (Long)",
      "roleColumn": "SUSTAIN",
      "element": "Long",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/7027123/c93778934bc3be574d7ccb72a6d27f3a.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1254,
        "dpOrSpeed": 1239,
        "atkOrPower": 1179,
        "defOrGuts": 1029,
        "critOrWit": 1199,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 90,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Run! Splash! Launcher!!",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Chaser",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Gold Ship [Run! Splash! Launcher!!] is a S-Tier Long-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Masterful Gambit (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s² Final Corner Acceleration + 3.5% Stamina Recovery when surging from the rear.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Chaser",
            "Masterful Gambit"
          ],
          "exactDescription": "0.40 m/s² Final Corner Acceleration + 3.5% Stamina Recovery when surging from the rear. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Chaser A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-641198",
        "uma-818827",
        "uma-794061"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Gold Ship [Run! Splash! Launcher!!] is a S-Tier Long-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Chaser contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-468712"
    },
    {
      "externalId": "uma-unit-467730",
      "slug": "uma-467730",
      "nameEn": "Special Week [Supreme Commander of Japan]",
      "nameOriginal": "Special Week",
      "styleOrTitle": "3★ [Supreme Commander of Japan] • Long Betweener",
      "rarity": "3★",
      "role": "Betweener (Long)",
      "roleColumn": "SUPPORT",
      "element": "Long",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/8988487/ac94405033128dabc0c0f92838887e2e.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1241,
        "dpOrSpeed": 1226,
        "atkOrPower": 1166,
        "defOrGuts": 1016,
        "critOrWit": 1186,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 91,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Supreme Commander of Japan",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Special Week [Supreme Commander of Japan] is a S-Tier Long-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Professor of Curvature (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Betweener",
            "Professor of Curvature"
          ],
          "exactDescription": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-584944",
        "uma-708453",
        "uma-547974"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Special Week [Supreme Commander of Japan] is a S-Tier Long-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-467730"
    },
    {
      "externalId": "uma-unit-447968",
      "slug": "uma-447968",
      "nameEn": "Nishino Flower [Tiered Petal]",
      "nameOriginal": "Nishino Flower",
      "styleOrTitle": "3★ [Tiered Petal] • Mile Leader",
      "rarity": "3★",
      "role": "Leader (Mile)",
      "roleColumn": "SUB_DPS",
      "element": "Mile",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/6725788/81ad8ad6c44c54bb02f6ca96a5f5e913.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 872,
        "dpOrSpeed": 1277,
        "atkOrPower": 1222,
        "defOrGuts": 1097,
        "critOrWit": 1197,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 92,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Tiered Petal",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Nishino Flower [Tiered Petal] is a S-Tier Mile-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Speed Star (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Final Corner Velocity + Stamina Restore",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Speed Star"
          ],
          "exactDescription": "0.40 m/s Final Corner Velocity + Stamina Restore — breaks out from 2nd–4th pace pack. Evolved at Awakening Lv.5 with bonus potency for Mile G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Mile A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-510277",
        "uma-675742",
        "uma-639905"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "Nishino Flower [Tiered Petal] is a S-Tier Mile-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks.",
      "longevityNote": "Top-meta Mile Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-447968"
    },
    {
      "externalId": "uma-unit-446143",
      "slug": "uma-446143",
      "nameEn": "Seiun Sky [Soiree de Chaton]",
      "nameOriginal": "Seiun Sky",
      "styleOrTitle": "3★ [Soiree de Chaton] • Long Runner",
      "rarity": "3★",
      "role": "Runner (Long)",
      "roleColumn": "DPS",
      "element": "Long",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/6724888/6b1703bb92f67df9bb5303823a38edaf.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1263,
        "dpOrSpeed": 1248,
        "atkOrPower": 1188,
        "defOrGuts": 1038,
        "critOrWit": 1208,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 93,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Soiree de Chaton",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Seiun Sky [Soiree de Chaton] is a S-Tier Long-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Taking the Lead (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Early-Race Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Runner",
            "Taking the Lead"
          ],
          "exactDescription": "0.45 m/s² Early-Race Acceleration — guarantees immediate 1st position out of the starting gate. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-785654",
        "uma-708453",
        "uma-547974"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "Seiun Sky [Soiree de Chaton] is a S-Tier Long-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-446143"
    },
    {
      "externalId": "uma-unit-440486",
      "slug": "uma-440486",
      "nameEn": "Kitasan Black [Gilded Festival Mikoshi]",
      "nameOriginal": "Kitasan Black",
      "styleOrTitle": "3★ [Gilded Festival Mikoshi] • Long Runner",
      "rarity": "3★",
      "role": "Runner (Long)",
      "roleColumn": "DPS",
      "element": "Long",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/6724844/efc2cda8b2e65b9bc28ee92cf5c1f150.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1250,
        "dpOrSpeed": 1235,
        "atkOrPower": 1175,
        "defOrGuts": 1025,
        "critOrWit": 1195,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 94,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Gilded Festival Mikoshi",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Kitasan Black [Gilded Festival Mikoshi] is a S-Tier Long-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Unrestrained (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Final Corner Acceleration when leading",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Runner",
            "Unrestrained"
          ],
          "exactDescription": "0.45 m/s² Final Corner Acceleration when leading — triggers an uncatchable front-runner breakaway. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-818827",
        "uma-794061",
        "uma-661551"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "Kitasan Black [Gilded Festival Mikoshi] is a S-Tier Long-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-440486"
    },
    {
      "externalId": "uma-unit-391131",
      "slug": "uma-391131",
      "nameEn": "Seiun Sky [Blue Cloud Summing]",
      "nameOriginal": "Seiun Sky",
      "styleOrTitle": "3★ [Blue Cloud Summing] • Medium Runner",
      "rarity": "3★",
      "role": "Runner (Medium)",
      "roleColumn": "DPS",
      "element": "Medium",
      "attackType": "Runner",
      "imageUrl": "https://img.game8.jp/6724861/53428a97ea18b6ad802ba424e504c95c.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1111,
        "dpOrSpeed": 1246,
        "atkOrPower": 1186,
        "defOrGuts": 1036,
        "critOrWit": 1206,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 95,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Blue Cloud Summing",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Seiun Sky [Blue Cloud Summing] is a S-Tier Medium-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Escape Artist (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity on Corners",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Runner",
            "Escape Artist"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity on Corners — secures 1st-place rod lead before late-race entry. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Runner A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-751219",
        "uma-755849",
        "uma-744513"
      ],
      "tierOverall": "S",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Seiun Sky [Blue Cloud Summing] is a S-Tier Medium-distance Runner Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Runner contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-391131"
    },
    {
      "externalId": "uma-unit-376672",
      "slug": "uma-376672",
      "nameEn": "Special Week [Special Dreamer]",
      "nameOriginal": "Special Week",
      "styleOrTitle": "3★ [Special Dreamer] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/6724833/c6d552cfd97364c892986e90e9372c26.png/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1098,
        "dpOrSpeed": 1233,
        "atkOrPower": 1173,
        "defOrGuts": 1023,
        "critOrWit": 1193,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 96,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Special Dreamer",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Special Week [Special Dreamer] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Killer Tunes (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Killer Tunes"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity — maintains high-tempo pace position behind the front-runner. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-780423",
        "uma-670452"
      ],
      "tierOverall": "S",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Special Week [Special Dreamer] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-376672"
    },
    {
      "externalId": "uma-unit-829952",
      "slug": "uma-829952",
      "nameEn": "Duramente [Claret Nosferatu]",
      "nameOriginal": "Duramente",
      "styleOrTitle": "3★ [Claret Nosferatu] • Medium Chaser",
      "rarity": "3★",
      "role": "Chaser (Medium)",
      "roleColumn": "SUSTAIN",
      "element": "Medium",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/13089179/553fd9b057b91468a1125127f738923a.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1109,
        "dpOrSpeed": 1244,
        "atkOrPower": 1184,
        "defOrGuts": 1034,
        "critOrWit": 1204,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 97,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Claret Nosferatu",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Chaser",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Duramente [Claret Nosferatu] is a S-Tier Medium-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Lightning Step (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s² Acceleration + Lane-Switch Velocity to bypass 12-racer traffic blocks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Chaser",
            "Lightning Step"
          ],
          "exactDescription": "0.40 m/s² Acceleration + Lane-Switch Velocity to bypass 12-racer traffic blocks. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Chaser A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-751219",
        "uma-755849"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 8.7,
      "summaryVerdict": "Duramente [Claret Nosferatu] is a S-Tier Medium-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Chaser contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-829952"
    },
    {
      "externalId": "uma-unit-812592",
      "slug": "uma-812592",
      "nameEn": "Fenomeno [Indomitable Violet Flame]",
      "nameOriginal": "Fenomeno",
      "styleOrTitle": "3★ [Indomitable Violet Flame] • Long Leader",
      "rarity": "3★",
      "role": "Leader (Long)",
      "roleColumn": "SUB_DPS",
      "element": "Long",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12926735/88c1893aa6091d08a43696b5aac32f85.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1246,
        "dpOrSpeed": 1231,
        "atkOrPower": 1171,
        "defOrGuts": 1021,
        "critOrWit": 1191,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 88,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Indomitable Violet Flame",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Fenomeno [Indomitable Violet Flame] is a S-Tier Long-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Speed Star (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Final Corner Velocity + Stamina Restore",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Leader",
            "Speed Star"
          ],
          "exactDescription": "0.40 m/s Final Corner Velocity + Stamina Restore — breaks out from 2nd–4th pace pack. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-641198",
        "uma-818827",
        "uma-661551"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 9,
      "summaryVerdict": "Fenomeno [Indomitable Violet Flame] is a S-Tier Long-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-812592"
    },
    {
      "externalId": "uma-unit-812593",
      "slug": "uma-812593",
      "nameEn": "Shinko Windy [Chomp-Chomp Scamp]",
      "nameOriginal": "Shinko Windy",
      "styleOrTitle": "3★ [Chomp-Chomp Scamp] • Dirt Leader",
      "rarity": "3★",
      "role": "Leader (Dirt)",
      "roleColumn": "SUB_DPS",
      "element": "Dirt",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12926737/c89f5fab377c7c5f71f0c7988c53d0b1.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 877,
        "dpOrSpeed": 1242,
        "atkOrPower": 1227,
        "defOrGuts": 1032,
        "critOrWit": 1202,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 89,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Chomp-Chomp Scamp",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Shinko Windy [Chomp-Chomp Scamp] is a S-Tier Dirt-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Dirt G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Killer Tunes (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity",
          "hitCount": 1,
          "buffCategoryTags": [
            "Dirt",
            "Leader",
            "Killer Tunes"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity — maintains high-tempo pace position behind the front-runner. Evolved at Awakening Lv.5 with bonus potency for Dirt G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+10% Speed / +20% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Dirt A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-685367",
        "uma-734203",
        "uma-717556"
      ],
      "tierOverall": "S",
      "tierReroll": "A",
      "tierBossRaid": "SS",
      "numericScore": 8.9,
      "summaryVerdict": "Shinko Windy [Chomp-Chomp Scamp] is a S-Tier Dirt-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Dirt G1 tracks.",
      "longevityNote": "Top-meta Dirt Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-812593"
    },
    {
      "externalId": "uma-unit-791608",
      "slug": "uma-791608",
      "nameEn": "Curren Bouquetd'or [Floral Couture]",
      "nameOriginal": "Curren Bouquetd'or",
      "styleOrTitle": "3★ [Floral Couture] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12661402/5311a56445b6dcfdc3ec3a90240818dc.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1094,
        "dpOrSpeed": 1229,
        "atkOrPower": 1169,
        "defOrGuts": 1019,
        "critOrWit": 1189,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 90,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Floral Couture",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Curren Bouquetd'or [Floral Couture] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Monster (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Monster"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-780423",
        "uma-670452"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Curren Bouquetd'or [Floral Couture] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-791608"
    },
    {
      "externalId": "uma-unit-784735",
      "slug": "uma-784735",
      "nameEn": "Red Desire [Divine Raiment]",
      "nameOriginal": "Red Desire",
      "styleOrTitle": "3★ [Divine Raiment] • Medium Betweener",
      "rarity": "3★",
      "role": "Betweener (Medium)",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/12579651/8db802d9e7e74b7bace24bdd91d47641.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1105,
        "dpOrSpeed": 1240,
        "atkOrPower": 1180,
        "defOrGuts": 1030,
        "critOrWit": 1200,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 91,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Divine Raiment",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Red Desire [Divine Raiment] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: No Stopping Me! (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration + Lateral Navigation when boxed behind runners.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "No Stopping Me!"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration + Lateral Navigation when boxed behind runners. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-755849",
        "uma-744513"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Red Desire [Divine Raiment] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-784735"
    },
    {
      "externalId": "uma-unit-783894",
      "slug": "uma-783894",
      "nameEn": "Daring Heart [Daring Darling!]",
      "nameOriginal": "Daring Heart",
      "styleOrTitle": "3★ [Daring Darling!] • Mile Leader",
      "rarity": "3★",
      "role": "Leader (Mile)",
      "roleColumn": "SUB_DPS",
      "element": "Mile",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12558591/13614401668de60ea808a4bfaf943f90.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 862,
        "dpOrSpeed": 1267,
        "atkOrPower": 1212,
        "defOrGuts": 1087,
        "critOrWit": 1187,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 92,
        "sustainScore": 86,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Daring Darling!",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Daring Heart [Daring Darling!] is a S-Tier Mile-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Killer Tunes (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity",
          "hitCount": 1,
          "buffCategoryTags": [
            "Mile",
            "Leader",
            "Killer Tunes"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity — maintains high-tempo pace position behind the front-runner. Evolved at Awakening Lv.5 with bonus potency for Mile G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Power Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Mile A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-510277",
        "uma-675742",
        "uma-639905"
      ],
      "tierOverall": "S",
      "tierReroll": "A",
      "tierBossRaid": "S",
      "numericScore": 8.7,
      "summaryVerdict": "Daring Heart [Daring Darling!] is a S-Tier Mile-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Mile G1 tracks.",
      "longevityNote": "Top-meta Mile Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-783894"
    },
    {
      "externalId": "uma-unit-758980",
      "slug": "uma-758980",
      "nameEn": "Sounds of Earth [Sonata Alla Menta]",
      "nameOriginal": "Sounds of Earth",
      "styleOrTitle": "3★ [Sonata Alla Menta] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/12247378/1cf15d5a911fe2a9f1a0ddee4be36b96.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1103,
        "dpOrSpeed": 1238,
        "atkOrPower": 1178,
        "defOrGuts": 1028,
        "critOrWit": 1198,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 93,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Sonata Alla Menta",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Sounds of Earth [Sonata Alla Menta] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Monster (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Monster"
          ],
          "exactDescription": "0.45 m/s² Late-Race Acceleration when within 4 lengths of the leader on Long/Medium tracks. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-751219",
        "uma-744513"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "SS",
      "numericScore": 9,
      "summaryVerdict": "Sounds of Earth [Sonata Alla Menta] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-758980"
    },
    {
      "externalId": "uma-unit-746401",
      "slug": "uma-746401",
      "nameEn": "Dream Journey [Snow-White Dream Path]",
      "nameOriginal": "Dream Journey",
      "styleOrTitle": "3★ [Snow-White Dream Path] • Long Chaser",
      "rarity": "3★",
      "role": "Chaser (Long)",
      "roleColumn": "SUSTAIN",
      "element": "Long",
      "attackType": "Chaser",
      "imageUrl": "https://img.game8.jp/12036417/97f5261acc9a7b4df6437a3e5823074d.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1240,
        "dpOrSpeed": 1225,
        "atkOrPower": 1165,
        "defOrGuts": 1015,
        "critOrWit": 1185,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 94,
        "sustainScore": 96,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Snow-White Dream Path",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Chaser",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Dream Journey [Snow-White Dream Path] is a S-Tier Long-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Encroaching Shadow (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.45 m/s² Straightaway Spurt Acceleration on late-race entry",
          "hitCount": 1,
          "buffCategoryTags": [
            "Long",
            "Chaser",
            "Encroaching Shadow"
          ],
          "exactDescription": "0.45 m/s² Straightaway Spurt Acceleration on late-race entry — premier Chaser win condition. Evolved at Awakening Lv.5 with bonus potency for Long G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Stamina Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,300+ Stamina in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Long A • Chaser A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-641198",
        "uma-818827",
        "uma-794061"
      ],
      "tierOverall": "S",
      "tierReroll": "S",
      "tierBossRaid": "S",
      "numericScore": 8.9,
      "summaryVerdict": "Dream Journey [Snow-White Dream Path] is a S-Tier Long-distance Chaser Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Long G1 tracks.",
      "longevityNote": "Top-meta Long Chaser contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-746401"
    },
    {
      "externalId": "uma-unit-731548",
      "slug": "uma-731548",
      "nameEn": "Dantsu Flame [Center Spotlight]",
      "nameOriginal": "Dantsu Flame",
      "styleOrTitle": "3★ [Center Spotlight] • Medium Leader",
      "rarity": "3★",
      "role": "Leader (Medium)",
      "roleColumn": "SUB_DPS",
      "element": "Medium",
      "attackType": "Leader",
      "imageUrl": "https://img.game8.jp/11881408/9314e3fe75001bc99807f7102fbfa577.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1101,
        "dpOrSpeed": 1236,
        "atkOrPower": 1176,
        "defOrGuts": 1026,
        "critOrWit": 1196,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 95,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Center Spotlight",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Dantsu Flame [Center Spotlight] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Killer Tunes (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Mid-Race Velocity",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Leader",
            "Killer Tunes"
          ],
          "exactDescription": "0.40 m/s Mid-Race Velocity — maintains high-tempo pace position behind the front-runner. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Leader A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-757130",
        "uma-751219",
        "uma-744513"
      ],
      "tierOverall": "S",
      "tierReroll": "A",
      "tierBossRaid": "SS",
      "numericScore": 8.8,
      "summaryVerdict": "Dantsu Flame [Center Spotlight] is a S-Tier Medium-distance Leader Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Leader contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-731548"
    },
    {
      "externalId": "uma-unit-723606",
      "slug": "uma-723606",
      "nameEn": "Marvelous Sunday [Trick Ribbonetta]",
      "nameOriginal": "Marvelous Sunday",
      "styleOrTitle": "3★ [Trick Ribbonetta] • Medium Betweener",
      "rarity": "3★",
      "role": "Betweener (Medium)",
      "roleColumn": "SUPPORT",
      "element": "Medium",
      "attackType": "Betweener",
      "imageUrl": "https://img.game8.jp/11812665/8728c1f7c84b4ad6865b597720aa831a.webp/original",
      "releaseDateAsian": "2025-02-24",
      "releaseDateGlobal": null,
      "isReleasedGlobal": false,
      "longevityMonths": 9,
      "recommendedDupes": "3★ Base (4★–5★ via Goddess Statues)",
      "baseStats": {
        "hpOrStamina": 1112,
        "dpOrSpeed": 1247,
        "atkOrPower": 1187,
        "defOrGuts": 1037,
        "critOrWit": 1207,
        "burstCeilingScore": 92,
        "bufferCeilingScore": 96,
        "sustainScore": 91,
        "spEfficiencyScore": 95
      },
      "skills": [
        {
          "name": "Unique Skill: Trick Ribbonetta",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "Auto Trigger",
          "multiplierSummary": "0.45 m/s Target Speed + 0.40 m/s² Acceleration",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Final Spurt Acceleration"
          ],
          "exactDescription": "Marvelous Sunday [Trick Ribbonetta] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks."
        },
        {
          "name": "Awakening Lv.5 Pink Skill: Professor of Curvature (Evolved)",
          "type": "TRAINING_EVENT",
          "spOrEnergyCost": "160 Skill Pts (Hint Lv.3)",
          "multiplierSummary": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning.",
          "hitCount": 1,
          "buffCategoryTags": [
            "Medium",
            "Betweener",
            "Professor of Curvature"
          ],
          "exactDescription": "0.40 m/s Corner Velocity + +60 Wisdom effective positioning. Evolved at Awakening Lv.5 with bonus potency for Medium G1 Champions Meet courses."
        }
      ],
      "passives": [
        {
          "unlockRank": "Stat Growth",
          "name": "+15% Speed / +15% Wisdom Growth",
          "effect": "Native trainee growth bonus optimized for hitting 1,750+ Speed and 1,250+ Power & Wit in U.A.F. and Great Food Festival scenarios."
        },
        {
          "unlockRank": "Aptitude",
          "name": "Turf/Dirt A • Medium A • Betweener A",
          "effect": "Ready for Champions Meet and League of Heroes with minimal Pink Spark inheritance required."
        }
      ],
      "synergyUnitSlugs": [
        "uma-802528",
        "uma-811061",
        "uma-670452"
      ],
      "tierOverall": "S",
      "tierReroll": "SS",
      "tierBossRaid": "S",
      "numericScore": 8.8,
      "summaryVerdict": "Marvelous Sunday [Trick Ribbonetta] is a S-Tier Medium-distance Betweener Trainee for Champions Meet and League of Heroes. Features built-in final-corner acceleration, mid-race positioning velocity, and Evolved Pink Skills tailored for Medium G1 tracks.",
      "longevityNote": "Top-meta Medium Betweener contender across Champions Meet and League of Heroes G1 tournaments.",
      "sourceUrl": "https://gachacrest.gg/uma-musume/units/uma-723606"
    }
  ],
  "equipments": [
    {
      "externalId": "uma-card-733886",
      "slug": "uma-card-733886",
      "nameEn": "SSR Tokai Teio [Genius Utopia]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11919934/3c769202643c572b87141bdad53ab3a6.webp/original",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "MLB (Lv.50) / 3LB (Lv.45)",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "15% (MLB)",
        "Specialty Priority": "+80",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 15% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-629749",
        "uma-563273",
        "uma-705722",
        "uma-447968"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-733886"
    },
    {
      "externalId": "uma-card-751667",
      "slug": "uma-card-751667",
      "nameEn": "SSR Air Groove [Heartfelt Kyoto Blossom]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12141013/6c96215755b128103ea4bd4f7baed2a2.webp/original",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv.50) / 3LB (Lv.45)",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "15% (MLB)",
        "Specialty Priority": "+80",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 15% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-811061",
        "uma-584944",
        "uma-543421",
        "uma-687349",
        "uma-446143"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-751667"
    },
    {
      "externalId": "uma-card-782234",
      "slug": "uma-card-782234",
      "nameEn": "SSR Tap Dance City [Blade Flash Clash!]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12527069/d4f114ad2c231bd6bc6831949dbdbb03.webp/original",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv.50) / 3LB (Lv.45)",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "15% (MLB)",
        "Specialty Priority": "+80",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 15% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-794061",
        "uma-836268",
        "uma-538996",
        "uma-685368",
        "uma-440486"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-782234"
    },
    {
      "externalId": "uma-card-785656",
      "slug": "uma-card-785656",
      "nameEn": "SSR Satono Diamond [Eternal Vow, Eternal Brilliance]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12598773/6b071ad941b0aaeebd74fc326a411494.webp/original",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "MLB (Lv.50) / 3LB (Lv.45)",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "15% (MLB)",
        "Specialty Priority": "+80",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 15% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-785654",
        "uma-802528",
        "uma-510277",
        "uma-661551",
        "uma-391131"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-785656"
    },
    {
      "externalId": "uma-card-811060",
      "slug": "uma-card-811060",
      "nameEn": "SSR Mr. C.B. [Where Sea and Sky Meet]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12905139/b57c13a37a8ddd6bba6abf4b75afffb9.webp/original",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "MLB (Lv.50) / 3LB (Lv.45)",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "15% (MLB)",
        "Specialty Priority": "+80",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 15% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-780423",
        "uma-799891",
        "uma-506211",
        "uma-659197",
        "uma-376672"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-811060"
    },
    {
      "externalId": "uma-card-811059",
      "slug": "uma-card-811059",
      "nameEn": "SSR Efforia [As if Guided]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12905138/06b92e3c47ce49e78fecf7fd6ebf89fe.webp/original",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "MLB (Lv.50) / 3LB (Lv.45)",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "15% (MLB)",
        "Specialty Priority": "+80",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 15% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-775196",
        "uma-796335",
        "uma-504927",
        "uma-655284",
        "uma-829952"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-811059"
    },
    {
      "externalId": "uma-card-794062",
      "slug": "uma-card-794062",
      "nameEn": "SSR Meisho Doto [Raging Wave Tenacity]",
      "category": "Support Card",
      "subType": "SSR Stamina Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12696745/1e3ca53aff915876794868311abb4451.webp/original",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv.50) / 3LB (Lv.45)",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "15% (MLB)",
        "Specialty Priority": "+80",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 15% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-650313",
        "uma-523946"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-794062"
    },
    {
      "externalId": "uma-card-802531",
      "slug": "uma-card-802531",
      "nameEn": "SSR Kiseki [Full-Color Summer]",
      "category": "Support Card",
      "subType": "SSR Stamina Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12814435/4b116c9b8d21b7f73dadcd9fc7dc3dd4.webp/original",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv.50) / 3LB (Lv.45)",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "15% (MLB)",
        "Specialty Priority": "+80",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 15% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-811061",
        "uma-639905",
        "uma-486171"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-802531"
    },
    {
      "externalId": "uma-card-737339",
      "slug": "uma-card-737339",
      "nameEn": "SSR Mihono Bourbon [Inorganic Fighting Spirit]",
      "category": "Support Card",
      "subType": "SSR Power Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11971772/6f7caa91b73d9daacabf74b6fa8a5466.webp/original",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "MLB (Lv.50) / 3LB (Lv.45)",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "15% (MLB)",
        "Specialty Priority": "+80",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 15% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-794061",
        "uma-602130",
        "uma-482000"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-737339"
    },
    {
      "externalId": "uma-card-836269",
      "slug": "uma-card-836269",
      "nameEn": "SSR Mayano Top Gun [Time of Departure]",
      "category": "Support Card",
      "subType": "SSR Power Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/13128950/78a038de4a81cc0d2f3f3f658f0966af.webp/original",
      "tierRank": "SSS",
      "score": 9.7,
      "recommendedDupes": "MLB (Lv.50) / 3LB (Lv.45)",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "15% (MLB)",
        "Specialty Priority": "+80",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 15% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-785654",
        "uma-563273",
        "uma-473265"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-836269"
    },
    {
      "externalId": "uma-card-778571",
      "slug": "uma-card-778571",
      "nameEn": "SSR Aston Machan [Prime Lens Focus]",
      "category": "Support Card",
      "subType": "SSR Guts Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12473230/59ba7ba95382dd7f6ffb80ee9f59f8b7.webp/original",
      "tierRank": "SSS",
      "score": 9.9,
      "recommendedDupes": "MLB (Lv.50) / 3LB (Lv.45)",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "15% (MLB)",
        "Specialty Priority": "+80",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 15% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-780423",
        "uma-543421",
        "uma-468712"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-778571"
    },
    {
      "externalId": "uma-card-763716",
      "slug": "uma-card-763716",
      "nameEn": "SSR Forever Young [Innovator]",
      "category": "Support Card",
      "subType": "SSR Wisdom Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12338049/21c077d69ddeaf5b4fb5e5d004430c9d.webp/original",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv.50) / 3LB (Lv.45)",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "15% (MLB)",
        "Specialty Priority": "+80",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 15% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-818827",
        "uma-641198",
        "uma-655283",
        "uma-751669",
        "uma-554860",
        "uma-758980"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-763716"
    },
    {
      "externalId": "uma-card-836270",
      "slug": "uma-card-836270",
      "nameEn": "SSR Azuma [Joyous Festival Celebration]",
      "category": "Support Card",
      "subType": "SSR Friend / Group Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/13128949/8b8b67e4bfb6ef9d302023d8403f85bc.webp/original",
      "tierRank": "SSS",
      "score": 9.8,
      "recommendedDupes": "MLB (Lv.50) / 3LB (Lv.45)",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "15% (MLB)",
        "Specialty Priority": "+80",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 15% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-811061",
        "uma-635115",
        "uma-650313",
        "uma-746402",
        "uma-547974",
        "uma-746401"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-836270"
    },
    {
      "externalId": "uma-card-670447",
      "slug": "uma-card-670447",
      "nameEn": "SSR Almond Eye [Gaze That Changes the World]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11068193/4e1e094a995c5e3d5ca98382d0ba2333.jpeg/original",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-755849",
        "uma-785653",
        "uma-376568",
        "uma-643036",
        "uma-812592"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-670447"
    },
    {
      "externalId": "uma-card-723595",
      "slug": "uma-card-723595",
      "nameEn": "SSR Eishin Flash [Zirkus der Traume]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11812660/f14e3d4fbdfdfbd08bf1ab609837cbe5.webp/original",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-758981",
        "uma-782228",
        "uma-818828",
        "uma-629750",
        "uma-812593"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-723595"
    },
    {
      "externalId": "uma-card-758987",
      "slug": "uma-card-758987",
      "nameEn": "SSR Matikanefukukitaru [Auspicious Valentine Chocolate]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12247380/aba5297a760cf79fb1d9e949110d6d2e.webp/original",
      "tierRank": "SS",
      "score": 9.5,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-751219",
        "uma-771047",
        "uma-815143",
        "uma-614759",
        "uma-791608"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-758987"
    },
    {
      "externalId": "uma-card-768738",
      "slug": "uma-card-768738",
      "nameEn": "SSR Marche Lorraine [Echoing Duet of Victory]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12383724/bfabf28523e76b7ae1ab134cc03755ff.webp/original",
      "tierRank": "SS",
      "score": 9.4,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-734203",
        "uma-768732",
        "uma-807041",
        "uma-606583",
        "uma-784735"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-768738"
    },
    {
      "externalId": "uma-card-815144",
      "slug": "uma-card-815144",
      "nameEn": "SSR Matikanetannhauser [Bound for a Warm Place]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12991478/a645d1fa5216cb8463752f0eb1a05b48.webp/original",
      "tierRank": "SS",
      "score": 9.4,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-717556",
        "uma-757130",
        "uma-802527",
        "uma-600193",
        "uma-783894"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-815144"
    },
    {
      "externalId": "uma-card-746404",
      "slug": "uma-card-746404",
      "nameEn": "SSR Fenomeno [Warm Noel]",
      "category": "Support Card",
      "subType": "SSR Stamina Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12036420/3764cf9cbb0e13014c29a75fbbef840e.webp/original",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-775196",
        "uma-538996",
        "uma-467730"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-746404"
    },
    {
      "externalId": "uma-card-783895",
      "slug": "uma-card-783895",
      "nameEn": "SSR Sakura Chiyono O [Run Toward a Lively Future!]",
      "category": "Support Card",
      "subType": "SSR Stamina Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12560468/ad70ec5e7a1b31d83ecfe7bd1855b527.webp/original",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-755849",
        "uma-510277",
        "uma-447968"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-783895"
    },
    {
      "externalId": "uma-card-751666",
      "slug": "uma-card-751666",
      "nameEn": "SSR Fine Motion [Graceful Sparkling Journey]",
      "category": "Support Card",
      "subType": "SSR Power Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12141012/ea94db7efcabda48a99b3e11f4477df8.webp/original",
      "tierRank": "SS",
      "score": 9.5,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-758981",
        "uma-506211",
        "uma-446143"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-751666"
    },
    {
      "externalId": "uma-card-758988",
      "slug": "uma-card-758988",
      "nameEn": "SSR Neo Universe [Star-Crossing Message]",
      "category": "Support Card",
      "subType": "SSR Power Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12247381/c166c36dd77aed781b70e3c31a2f542c.webp/original",
      "tierRank": "SS",
      "score": 9.4,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-751219",
        "uma-504927",
        "uma-440486"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-758988"
    },
    {
      "externalId": "uma-card-782235",
      "slug": "uma-card-782235",
      "nameEn": "SSR Agnes Digital [Brave Challenger of All]",
      "category": "Support Card",
      "subType": "SSR Power Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12527067/62da9457171c175c346471451b41fbd1.webp/original",
      "tierRank": "SS",
      "score": 9.4,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-734203",
        "uma-376568",
        "uma-391131"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-782235"
    },
    {
      "externalId": "uma-card-785657",
      "slug": "uma-card-785657",
      "nameEn": "SSR Gran Alegria [Smile Ever After]",
      "category": "Support Card",
      "subType": "SSR Power Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12598772/44f9c8d71bdb31bd9e5577393edbf024.webp/original",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-717556",
        "uma-818828",
        "uma-376672"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-785657"
    },
    {
      "externalId": "uma-card-712501",
      "slug": "uma-card-712501",
      "nameEn": "SSR Stay Gold [Whimsical Wandering Star]",
      "category": "Support Card",
      "subType": "SSR Guts Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11697592/952fc53f18238e78530aa17ac299da43.webp/original",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-712500",
        "uma-815143",
        "uma-829952"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-712501"
    },
    {
      "externalId": "uma-card-775199",
      "slug": "uma-card-775199",
      "nameEn": "SSR Daring Tact [Pure Innocence in White]",
      "category": "Support Card",
      "subType": "SSR Guts Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12431586/59bb84278daa9f90902f5a4c45ad0dbb.webp/original",
      "tierRank": "SS",
      "score": 9.5,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-708453",
        "uma-807041",
        "uma-812592"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-775199"
    },
    {
      "externalId": "uma-card-775198",
      "slug": "uma-card-775198",
      "nameEn": "SSR Daring Heart [Steadfast Resolve in White]",
      "category": "Support Card",
      "subType": "SSR Guts Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12431585/440116926f3ff15f3bec9608fb0e3cef.webp/original",
      "tierRank": "SS",
      "score": 9.4,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-697314",
        "uma-802527",
        "uma-812593"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-775198"
    },
    {
      "externalId": "uma-card-818830",
      "slug": "uma-card-818830",
      "nameEn": "SSR Admire Groove [Frosty Bisque Doll]",
      "category": "Support Card",
      "subType": "SSR Wisdom Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/13038186/888313ff0c56dfef632b0a11bda16d43.webp/original",
      "tierRank": "SS",
      "score": 9.4,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-794061",
        "uma-629749",
        "uma-639905",
        "uma-737336",
        "uma-523946",
        "uma-731548"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-818830"
    },
    {
      "externalId": "uma-card-818831",
      "slug": "uma-card-818831",
      "nameEn": "SSR Narita Brian [Evening Banquet]",
      "category": "Support Card",
      "subType": "SSR Wisdom Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/13038187/68746aa761cb46045a02bd4cf4de36c4.webp/original",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-785654",
        "uma-584944",
        "uma-602130",
        "uma-727873",
        "uma-486171",
        "uma-723606"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-818831"
    },
    {
      "externalId": "uma-card-796336",
      "slug": "uma-card-796336",
      "nameEn": "SSR Nice Nature [Hands Full of Kokura Love]",
      "category": "Support Card",
      "subType": "SSR Wisdom Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12736627/4c7e813e92ecdfbb172c654d67b33100.webp/original",
      "tierRank": "SS",
      "score": 9.3,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-780423",
        "uma-836268",
        "uma-563273",
        "uma-710376",
        "uma-482000"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-796336"
    },
    {
      "externalId": "uma-card-708457",
      "slug": "uma-card-708457",
      "nameEn": "SSR Win Variation [Waterside Principal]",
      "category": "Support Card",
      "subType": "SSR Wisdom Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11603759/59c601cd59c8594eb5c819260d7bd2d4.webp/original",
      "tierRank": "SS",
      "score": 9.5,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-775196",
        "uma-802528",
        "uma-543421",
        "uma-707101",
        "uma-473265"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-708457"
    },
    {
      "externalId": "uma-card-681576",
      "slug": "uma-card-681576",
      "nameEn": "SSR Daring Tact [Spotless White Brilliance]",
      "category": "Support Card",
      "subType": "SSR Wisdom Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11239875/fd7bb21aa322c699c98b381bdb2e576d.png/original",
      "tierRank": "SS",
      "score": 9.4,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-755849",
        "uma-799891",
        "uma-538996",
        "uma-705722",
        "uma-468712"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-681576"
    },
    {
      "externalId": "uma-card-629755",
      "slug": "uma-card-629755",
      "nameEn": "SSR Smart Falcon [Wavefront Off-Shot]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10290847/7587cb9f405aa47b253068004dbc3cef.png/original",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-712500",
        "uma-754944",
        "uma-782230",
        "uma-595542",
        "uma-758980"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-629755"
    },
    {
      "externalId": "uma-card-635113",
      "slug": "uma-card-635113",
      "nameEn": "SSR Still in Love [Devilish Whispers]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10423094/635b9e45455e4bc29f7d46b131dcc3c4.png/original",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-708453",
        "uma-749288",
        "uma-778574",
        "uma-579403",
        "uma-746401"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-635113"
    },
    {
      "externalId": "uma-card-713261",
      "slug": "uma-card-713261",
      "nameEn": "SSR Calstone Light O [Feline Sprinter]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11712360/c3d9c9d583af5f225fe094e63ad8a6d9.webp/original",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-697314",
        "uma-744513",
        "uma-775195",
        "uma-554860",
        "uma-731548"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-713261"
    },
    {
      "externalId": "uma-card-712502",
      "slug": "uma-card-712502",
      "nameEn": "SSR Admire Groove [Ice Crystal Sanctuary]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11697591/fd8f6e0aab75081883c0142fbc142605.webp/original",
      "tierRank": "S",
      "score": 9,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-688549",
        "uma-708454",
        "uma-751668",
        "uma-547974",
        "uma-723606"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-712502"
    },
    {
      "externalId": "uma-card-692544",
      "slug": "uma-card-692544",
      "nameEn": "SSR Rhein Kraft [Unveiled Dream]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11401435/6013c70768f081f22be23a088258e871.jpeg/original",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-685367",
        "uma-707016",
        "uma-751669",
        "uma-523946"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-692544"
    },
    {
      "externalId": "uma-card-679967",
      "slug": "uma-card-679967",
      "nameEn": "SSR Dream Journey [Beckoning Dreamscape]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11203489/217530bbee65556fafea910b385ed08d.jpeg/original",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-675742",
        "uma-661550",
        "uma-746402",
        "uma-486171"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-679967"
    },
    {
      "externalId": "uma-card-727874",
      "slug": "uma-card-727874",
      "nameEn": "SSR Curren Bouquetd'or [Flora of Determination]",
      "category": "Support Card",
      "subType": "SSR Stamina Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11847355/53aa139d2b27dd0f939488ccdcc13e9f.webp/original",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-688549",
        "uma-782230",
        "uma-791608"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-727874"
    },
    {
      "externalId": "uma-card-746405",
      "slug": "uma-card-746405",
      "nameEn": "SSR Gold Ship [Runaway Reindeer Incident!]",
      "category": "Support Card",
      "subType": "SSR Stamina Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12036419/6d898c5064b27baecf511d1055a6d7ad.webp/original",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-685367",
        "uma-778574",
        "uma-784735"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-746405"
    },
    {
      "externalId": "uma-card-749323",
      "slug": "uma-card-749323",
      "nameEn": "SSR Inari One [Hometown Brocade!]",
      "category": "Support Card",
      "subType": "SSR Stamina Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12087367/70da96adeafee17de36c7d3e2206b49a.webp/original",
      "tierRank": "S",
      "score": 9,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-675742",
        "uma-775195",
        "uma-783894"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-749323"
    },
    {
      "externalId": "uma-card-623911",
      "slug": "uma-card-623911",
      "nameEn": "SSR Dantsu Flame [And the Curtain Rises]",
      "category": "Support Card",
      "subType": "SSR Stamina Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10221337/7321b84b70ec104bc00acb760a5f6e0c.png/original",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-670452",
        "uma-751668",
        "uma-758980"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-623911"
    },
    {
      "externalId": "uma-card-679968",
      "slug": "uma-card-679968",
      "nameEn": "SSR Vodka [Ballroom Tempest]",
      "category": "Support Card",
      "subType": "SSR Power Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11203488/d0b8f620376bdc216ebb2e8f9ece2fd5.jpeg/original",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-666499",
        "uma-751669",
        "uma-746401"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-679968"
    },
    {
      "externalId": "uma-card-685370",
      "slug": "uma-card-685370",
      "nameEn": "SSR Buena Vista [Luz de Ensueno]",
      "category": "Support Card",
      "subType": "SSR Power Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11287849/bc6ef741546a88e2f3939c7f89cce402.png/original",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-641198",
        "uma-746402",
        "uma-731548"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-685370"
    },
    {
      "externalId": "uma-card-700421",
      "slug": "uma-card-700421",
      "nameEn": "SSR Tamamo Cross [Like White Lightning]",
      "category": "Support Card",
      "subType": "SSR Power Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11497237/4d6998965782eb36dd4d280e55967ae0.jpeg/original",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-635115",
        "uma-737336",
        "uma-723606"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-700421"
    },
    {
      "externalId": "uma-card-812595",
      "slug": "uma-card-812595",
      "nameEn": "SSR Haru Urara [Friendly Gift Exchange]",
      "category": "Support Card",
      "subType": "SSR Power Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12927221/109b6b7833cebcd7af7f0308cc19f51e.webp/original",
      "tierRank": "S",
      "score": 9,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-629749",
        "uma-727873",
        "uma-510277"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-812595"
    },
    {
      "externalId": "uma-card-652448",
      "slug": "uma-card-652448",
      "nameEn": "SSR Symboli Kris S [COOL / CRAZY Buddy]",
      "category": "Support Card",
      "subType": "SSR Power Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10696300/85fb1860cc80c278111163eda54d27ef.png/original",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-584944",
        "uma-710376",
        "uma-506211"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-652448"
    },
    {
      "externalId": "uma-card-754978",
      "slug": "uma-card-754978",
      "nameEn": "SSR King Halo [Shopping for Myself]",
      "category": "Support Card",
      "subType": "SSR Guts Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12189871/937521c05ccda70f2a93e6764be4e2c3.webp/original",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-836268",
        "uma-707101",
        "uma-504927"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-754978"
    },
    {
      "externalId": "uma-card-802530",
      "slug": "uma-card-802530",
      "nameEn": "SSR Almond Eye [Summer Sky Chill Time]",
      "category": "Support Card",
      "subType": "SSR Guts Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12814438/b8a8b8205a05f671ede733b11b7bcd4c.webp/original",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-802528",
        "uma-705722",
        "uma-376568"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-802530"
    },
    {
      "externalId": "uma-card-812594",
      "slug": "uma-card-812594",
      "nameEn": "SSR Biko Pegasus [Bad-Boy Hero Arrives!]",
      "category": "Support Card",
      "subType": "SSR Guts Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/12926741/7bd2e6134f0fa3950da51cc395adae70.webp/original",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-799891",
        "uma-687349",
        "uma-818828"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-812594"
    },
    {
      "externalId": "uma-card-723596",
      "slug": "uma-card-723596",
      "nameEn": "SSR Fuji Kiseki [Magic from the Stage]",
      "category": "Support Card",
      "subType": "SSR Guts Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11812661/71b06e736c4a41a6aee078c7a7bfd19d.webp/original",
      "tierRank": "S",
      "score": 9,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-796335",
        "uma-685368",
        "uma-815143"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-723596"
    },
    {
      "externalId": "uma-card-666502",
      "slug": "uma-card-666502",
      "nameEn": "SSR Curren Chan [Cutest in Your Heart]",
      "category": "Support Card",
      "subType": "SSR Guts Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10983959/7603db234b5e988efd98a07faad6971b.jpeg/original",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-785653",
        "uma-661551",
        "uma-807041"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-666502"
    },
    {
      "externalId": "uma-card-713260",
      "slug": "uma-card-713260",
      "nameEn": "SSR Durandal [Tonight, For My Liege]",
      "category": "Support Card",
      "subType": "SSR Wisdom Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11712361/c0e16e30e28dbf50e60410447cdbed09.webp/original",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-758981",
        "uma-796335",
        "uma-510277",
        "uma-687349",
        "uma-467730"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-713260"
    },
    {
      "externalId": "uma-card-692543",
      "slug": "uma-card-692543",
      "nameEn": "SSR Daring Heart [Blooming Buds]",
      "category": "Support Card",
      "subType": "SSR Wisdom Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11401434/3085574d76f37e76f9d3cbc43ce171fa.jpeg/original",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-751219",
        "uma-785653",
        "uma-506211",
        "uma-685368",
        "uma-447968"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-692543"
    },
    {
      "externalId": "uma-card-666501",
      "slug": "uma-card-666501",
      "nameEn": "SSR Ikuno Dictus [Even the Iron Maiden Smiles]",
      "category": "Support Card",
      "subType": "SSR Wisdom Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10983958/784400fb1f105bbdd8a099c7ea473e76.jpeg/original",
      "tierRank": "S",
      "score": 8.8,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-734203",
        "uma-782228",
        "uma-504927",
        "uma-661551",
        "uma-446143"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-666501"
    },
    {
      "externalId": "uma-card-661554",
      "slug": "uma-card-661554",
      "nameEn": "SSR Symboli Rudolf [Soaring Cloud Calligraphy]",
      "category": "Support Card",
      "subType": "SSR Wisdom Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10873768/23e05defead8c89a0d3b4ba7f71848ca.png/original",
      "tierRank": "S",
      "score": 9,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-717556",
        "uma-771047",
        "uma-376568",
        "uma-659197",
        "uma-440486"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-661554"
    },
    {
      "externalId": "uma-card-606577",
      "slug": "uma-card-606577",
      "nameEn": "SSR Narita Taishin [Take Them Down!]",
      "category": "Support Card",
      "subType": "SSR Wisdom Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/9946504/fd7942f8d2e90bb1477c322ab819d745.png/original",
      "tierRank": "S",
      "score": 8.9,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-712500",
        "uma-768732",
        "uma-818828",
        "uma-655284",
        "uma-391131"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-606577"
    },
    {
      "externalId": "uma-card-546717",
      "slug": "uma-card-546717",
      "nameEn": "SSR El Condor Pasa [Soaring Ambition]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/8569695/42565873b7b02ea2839b9fe7b9a11021.png/original",
      "tierRank": "A",
      "score": 8.4,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-670452",
        "uma-655283",
        "uma-737336",
        "uma-482000"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-546717"
    },
    {
      "externalId": "uma-card-612009",
      "slug": "uma-card-612009",
      "nameEn": "SSR Vivlos [Alstroemeria Dream]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10075742/32dad5ada0ff5fbd4a84d0b4ed46226b.png/original",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-666499",
        "uma-650313",
        "uma-727873",
        "uma-473265"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-612009"
    },
    {
      "externalId": "uma-card-655286",
      "slug": "uma-card-655286",
      "nameEn": "SSR Meisho Doto [Indomitable Howl]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10761784/c90b913131bb251d5dc51d59aa5858c3.png/original",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-641198",
        "uma-639905",
        "uma-710376",
        "uma-468712"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-655286"
    },
    {
      "externalId": "uma-card-641201",
      "slug": "uma-card-641201",
      "nameEn": "SSR Narita Brian [Roaring Apoyando]",
      "category": "Support Card",
      "subType": "SSR Speed Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10568910/04c2560ee2095ff1039501983eb81ab5.png/original",
      "tierRank": "A",
      "score": 8.5,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-635115",
        "uma-602130",
        "uma-707101",
        "uma-467730"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-641201"
    },
    {
      "externalId": "uma-card-708456",
      "slug": "uma-card-708456",
      "nameEn": "SSR Duramente [Tranquillo]",
      "category": "Support Card",
      "subType": "SSR Stamina Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11603756/decee4067eff0bdeef098c6b027b27ee.webp/original",
      "tierRank": "A",
      "score": 8.4,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-782228",
        "uma-659197",
        "uma-710376"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-708456"
    },
    {
      "externalId": "uma-card-705748",
      "slug": "uma-card-705748",
      "nameEn": "SSR Mejiro Ryan [Thirst for Victory]",
      "category": "Support Card",
      "subType": "SSR Stamina Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11548640/149106a50b298b9d940a3fba3d081841.webp/original",
      "tierRank": "A",
      "score": 8.4,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-771047",
        "uma-655284",
        "uma-707101"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-705748"
    },
    {
      "externalId": "uma-card-675743",
      "slug": "uma-card-675743",
      "nameEn": "SSR Mejiro Bright [Spring Has Come]",
      "category": "Support Card",
      "subType": "SSR Stamina Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11148443/95cf5a486fcceb0d98ac587a64fc9385.jpeg/original",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-768732",
        "uma-643036",
        "uma-705722"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-675743"
    },
    {
      "externalId": "uma-card-587963",
      "slug": "uma-card-587963",
      "nameEn": "SSR Hokko Tarumae [White Wings Return]",
      "category": "Support Card",
      "subType": "SSR Stamina Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/9370970/3e9abec0852430f795c6c5af30f5f036.png/original",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-757130",
        "uma-629750",
        "uma-687349"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-587963"
    },
    {
      "externalId": "uma-card-650311",
      "slug": "uma-card-650311",
      "nameEn": "SSR Air Shakur [Cocoon]",
      "category": "Support Card",
      "subType": "SSR Stamina Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10660456/ff849bdd07a4311fb3911f556f4ccfc5.png/original",
      "tierRank": "A",
      "score": 8.5,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-754944",
        "uma-614759",
        "uma-685368"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-650311"
    },
    {
      "externalId": "uma-card-661553",
      "slug": "uma-card-661553",
      "nameEn": "SSR Mejiro Ardan [To the Sheltered Maiden]",
      "category": "Support Card",
      "subType": "SSR Power Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10873767/10f187d04c7dc95df2f861db9f2846f9.png/original",
      "tierRank": "A",
      "score": 8.4,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-749288",
        "uma-606583",
        "uma-661551"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-661553"
    },
    {
      "externalId": "uma-card-717557",
      "slug": "uma-card-717557",
      "nameEn": "SSR Daiichi Ruby [Inseparable]",
      "category": "Support Card",
      "subType": "SSR Guts Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/11757292/2ee5b65842d1ef7f78ce5e39b806de42.webp/original",
      "tierRank": "A",
      "score": 8.4,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-744513",
        "uma-600193",
        "uma-659197"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-717557"
    },
    {
      "externalId": "uma-card-657201",
      "slug": "uma-card-657201",
      "nameEn": "SSR Blast Onepiece [Blast Off!]",
      "category": "Support Card",
      "subType": "SSR Guts Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10795506/3ed8ee6c1fe465df06fe497fadbdf9f1.jpeg/original",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-708454",
        "uma-595542",
        "uma-655284"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-657201"
    },
    {
      "externalId": "uma-card-641202",
      "slug": "uma-card-641202",
      "nameEn": "SSR Hishi Amazon [Bared Fangs Refrain]",
      "category": "Support Card",
      "subType": "SSR Guts Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10568909/e625e53ef1a9a4a4953f275614fdb782.png/original",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-707016",
        "uma-579403",
        "uma-643036"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-641202"
    },
    {
      "externalId": "uma-card-632699",
      "slug": "uma-card-632699",
      "nameEn": "SSR Fine Motion [History and Gastronomy]",
      "category": "Support Card",
      "subType": "SSR Guts Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10384796/44dc8f1d9fc3ff27c8910aac9f63b414.png/original",
      "tierRank": "A",
      "score": 8.5,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-661550",
        "uma-554860",
        "uma-629750"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-632699"
    },
    {
      "externalId": "uma-card-595474",
      "slug": "uma-card-595474",
      "nameEn": "SSR Orfevre [Simply Reigning]",
      "category": "Support Card",
      "subType": "SSR Guts Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/9586007/e0d03ca1e2380a799936cad606b1c706.jpeg/original",
      "tierRank": "A",
      "score": 8.4,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-655283",
        "uma-547974",
        "uma-614759"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-595474"
    },
    {
      "externalId": "uma-card-650312",
      "slug": "uma-card-650312",
      "nameEn": "SSR Daiwa Scarlet [Scarlet Wind Blows]",
      "category": "Support Card",
      "subType": "SSR Wisdom Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10660457/d8b534ce00762004f7da8247c610a2ad.png/original",
      "tierRank": "A",
      "score": 8.4,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-708453",
        "uma-757130",
        "uma-815143",
        "uma-643036",
        "uma-376672"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-650312"
    },
    {
      "externalId": "uma-card-629754",
      "slug": "uma-card-629754",
      "nameEn": "SSR Copano Rickey [Lucky Summertime]",
      "category": "Support Card",
      "subType": "SSR Wisdom Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/10290848/474a36b82fc54ecad1f362ff89f7f79c.png/original",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-697314",
        "uma-754944",
        "uma-807041",
        "uma-629750",
        "uma-829952"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-629754"
    },
    {
      "externalId": "uma-card-584901",
      "slug": "uma-card-584901",
      "nameEn": "SSR Satono Diamond [Hundred-Blossom Wish]",
      "category": "Support Card",
      "subType": "SSR Wisdom Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/9199747/8c4312fc39194b5b6a6b8ed35aac657e.png/original",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-688549",
        "uma-749288",
        "uma-802527",
        "uma-614759",
        "uma-812592"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-584901"
    },
    {
      "externalId": "uma-card-574530",
      "slug": "uma-card-574530",
      "nameEn": "SSR Mejiro McQueen [Home Run Queen!?]",
      "category": "Support Card",
      "subType": "SSR Wisdom Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/8998813/532e3c9cda32b9fb74e2fe630ae87b03.png/original",
      "tierRank": "A",
      "score": 8.5,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Killer Tunes",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Killer Tunes] (0.35 m/s High-Tempo Mid-Race Velocity + +2 Skill Hint Levels). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-685367",
        "uma-744513",
        "uma-782230",
        "uma-606583",
        "uma-812593"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-574530"
    },
    {
      "externalId": "uma-card-513508",
      "slug": "uma-card-513508",
      "nameEn": "SSR Mejiro Ramonu [Radiant Splendor]",
      "category": "Support Card",
      "subType": "SSR Wisdom Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/7774680/95c4be69cae97090d4cef37968131451.png/original",
      "tierRank": "A",
      "score": 8.4,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Professor of Curvature",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Professor of Curvature] (0.35 m/s Corner Velocity + +20 Speed Bonus). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-675742",
        "uma-708454",
        "uma-778574",
        "uma-600193",
        "uma-791608"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-513508"
    },
    {
      "externalId": "uma-card-473490",
      "slug": "uma-card-473490",
      "nameEn": "SSR Light Hello [from the GROUND UP]",
      "category": "Support Card",
      "subType": "SSR Friend / Group Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/7140145/3480be2ef19c3ee4b04ce48574fda193.png/original",
      "tierRank": "A",
      "score": 8.4,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Beeline Burst",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Beeline Burst] (0.35 m/s Straightaway Velocity + +15% Training Effectiveness). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-670452",
        "uma-707016",
        "uma-775195",
        "uma-595542",
        "uma-784735"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-473490"
    },
    {
      "externalId": "uma-card-372316",
      "slug": "uma-card-372316",
      "nameEn": "SSR Tazuna Hayakawa [Welcome to Tracen Academy!]",
      "category": "Support Card",
      "subType": "SSR Friend / Group Support",
      "rarity": "SSR",
      "imageUrl": "https://img.game8.jp/5758396/6aa0109869571eebee26131506aa4aef.png/original",
      "tierRank": "A",
      "score": 8.3,
      "recommendedDupes": "1LB – 3LB",
      "stats": {
        "Gold Skill Hint": "Unstoppable",
        "Training Eff.": "10% (MLB)",
        "Specialty Priority": "+65",
        "Race Bonus": "+10%"
      },
      "effectSummary": "Grants Gold Skill [Unstoppable] (0.35 m/s Mid-Race Overtaking Velocity + +80 Specialty Priority). Delivers 10% Training Effectiveness, +80 Specialty Priority, and +2 Skill Hint Levels at MLB Lv 50.",
      "bestHolderSlugs": [
        "uma-666499",
        "uma-661550",
        "uma-751668",
        "uma-579403",
        "uma-783894"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/support-cards/uma-card-372316"
    }
  ],
  "bosses": [
    {
      "slug": "champions-meet-tokyo-2400m-derby",
      "nameEn": "Champions Meet Classic — Tokyo Turf 2400m (Medium)",
      "modeName": "Champions Meet (Grade League)",
      "difficultyLabel": "Group A Finals",
      "imageUrl": "https://img.game8.jp/12037958/fe30687096f77406495cb52a79910b05.webp/original",
      "hpStat": "2400m Left-Handed (Spring / Sunny / Firm)",
      "shieldOrDpStat": "Target Stamina: 1,150 + 1 Gold Recovery",
      "weaknesses": [
        "Final Corner Acceleration",
        "Medium S Aptitude (+5% Speed)",
        "Mid-Leg Velocity Skills"
      ],
      "resistances": [
        "Late-Corner Wide Swing Loss",
        "Final Uphill Stamina Drain"
      ],
      "attackPatterns": [
        {
          "turnOrPhase": "0m – 1600m",
          "attackName": "Position Keep & Mid-Race Pace Contest",
          "damageType": "Wit Check + Mid-Race Velocity",
          "counterAction": "Maintain 1,250+ Wit and stack 4+ mid-race velocity skills (Professor of Curvature, Rampage)."
        },
        {
          "turnOrPhase": "1600m – 2400m",
          "attackName": "Final Corner Acceleration Spurt (533m Straight)",
          "damageType": "0.40 m/s² Acceleration Check",
          "counterAction": "Trigger exact-timing acceleration (Royal Road, Red Shift, or Sirius Unique) on late-race entry."
        }
      ],
      "strategySteps": [
        "Breed for Medium S Aptitude (+5% effective Speed) and Left-Handed / Spring Runner green passives.",
        "Hit 1,700+ Speed, 1,150+ Stamina, 1,250+ Power, 1,100+ Guts, and 1,250+ Wit using 2 Speed + 1 Stamina + 1 Power + 1 Wit + 1 Friend deck."
      ],
      "recommendedUnitSlugs": [
        "uma-811061",
        "uma-755849",
        "uma-780423",
        "uma-712500",
        "uma-697314"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/events/champions-meet-tokyo-2400m"
    },
    {
      "slug": "league-of-heroes-kyoto-3000m-long",
      "nameEn": "League of Heroes — Kyoto Turf 3000m (Long)",
      "modeName": "League of Heroes (12-Racer Format)",
      "difficultyLabel": "Platinum 4 Star Rank",
      "imageUrl": "https://img.game8.jp/12439207/3f1d02d0591667b6744ced39f5495f5c.webp/original",
      "hpStat": "3000m Right-Handed Outer (Autumn / Firm)",
      "shieldOrDpStat": "Target Stamina: 1,350 + 2 Gold Recoveries",
      "weaknesses": [
        "Runner / Leader Top-3 Consistency",
        "Downhill Stamina Conservation"
      ],
      "resistances": [
        "12-Racer Traffic Blocking on Chasers"
      ],
      "attackPatterns": [
        {
          "turnOrPhase": "Mid-Race Hill",
          "attackName": "Kyoto 3rd Corner Uphill & Downhill Transition",
          "damageType": "Stamina Consumption Check",
          "counterAction": "Equip Maestro of Curvature + Cooldown and maintain 1,350 Stamina."
        }
      ],
      "strategySteps": [
        "Run 2 Runners + 1 Leader to avoid 12-racer traffic blocks and secure Top-3 finishes every ticket.",
        "Inherit Long S Aptitude and Angling & Scheming / Monster for guaranteed late-race breakaway."
      ],
      "recommendedUnitSlugs": [
        "uma-818827",
        "uma-794061",
        "uma-785654",
        "uma-708453",
        "uma-641198"
      ],
      "sourceUrl": "https://gachacrest.gg/uma-musume/events/league-of-heroes-kyoto-3000m"
    }
  ],
  "banners": [
    {
      "slug": "uma-almond-eye-anniversary",
      "bannerTitle": "Anniversary Spotlight — Almond Eye [The Changer] & SSR Support Card",
      "bannerType": "FESTIVAL",
      "imageUrl": "https://img.game8.jp/12905140/503197e23de1db203117832e7154203b.webp/original",
      "featuredNames": [
        "Almond Eye [The Changer]",
        "SSR Almond Eye [Gaze That Changes the World]"
      ],
      "featuredUnitSlugs": [
        "uma-755849"
      ],
      "asianStartDate": "2026-10-29",
      "asianEndDate": "2026-11-18",
      "estGlobalStartDate": "2027-04-29",
      "estGlobalEndDate": "2027-05-18",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "SSS Tier 0 Trainee and #1 Universal Speed SSR Support Card — mandatory centerpiece for every competitive deck.",
      "pityCurrencyCost": 30000,
      "sourceUrl": "https://gachacrest.gg/uma-musume/banners/almond-eye"
    },
    {
      "slug": "uma-forever-young-support-banner",
      "bannerTitle": "SSR Support Card Pickup — Forever Young [Innovator] & Efforia [As if Guided]",
      "bannerType": "SUPPORT_CARD",
      "imageUrl": "https://img.game8.jp/12338045/ab8d5d66d8277868bb81f524879a7928.webp/original",
      "featuredNames": [
        "SSR Forever Young [Innovator]",
        "SSR Efforia [As if Guided]"
      ],
      "featuredUnitSlugs": [
        "uma-811061",
        "uma-794061"
      ],
      "asianStartDate": "2026-11-05",
      "asianEndDate": "2026-11-25",
      "estGlobalStartDate": "2027-05-05",
      "estGlobalEndDate": "2027-05-25",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "Both Forever Young (Wisdom) and Efforia (Stamina) sit in SSS Tier 0 of the Support Card meta.",
      "pityCurrencyCost": 30000,
      "sourceUrl": "https://gachacrest.gg/uma-musume/banners/forever-young-efforia"
    },
    {
      "slug": "uma-rudolf-epiphaneia-pickup",
      "bannerTitle": "Pretty Derby Trainee Pickup — Symboli Rudolf [Adamant Sovereign] & Epiphaneia",
      "bannerType": "LIMITED",
      "imageUrl": "https://img.game8.jp/12598774/d6caea63450533983b7e95b4c39b91ee.webp/original",
      "featuredNames": [
        "Symboli Rudolf [Adamant Sovereign]",
        "Epiphaneia [Fates Chosen Star]"
      ],
      "featuredUnitSlugs": [
        "uma-818827",
        "uma-811061"
      ],
      "asianStartDate": "2026-11-10",
      "asianEndDate": "2026-11-28",
      "estGlobalStartDate": "2027-05-10",
      "estGlobalEndDate": "2027-05-28",
      "pullVerdict": "HIGH_VALUE",
      "verdictReasoning": "Top-ranked SSS Tier Medium and Long-distance Trainees for Champions Meet Group A finals.",
      "pityCurrencyCost": 30000,
      "sourceUrl": "https://gachacrest.gg/uma-musume/banners/rudolf-epiphaneia"
    }
  ]
};
