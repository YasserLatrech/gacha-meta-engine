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
      "label": "STRIKER / MAGIC CARRY (DPS)",
      "colorHex": "#DC2626"
    },
    {
      "key": "SUB_DPS",
      "label": "SEEKER / SHIELD BREAKER (SUB-DPS)",
      "colorHex": "#D97706"
    },
    {
      "key": "SUPPORT",
      "label": "NRG BATTERY & AURA (SUPPORT)",
      "colorHex": "#2563EB"
    },
    {
      "key": "SUSTAIN",
      "label": "VANGUARD TANK & HEALER (SUSTAIN)",
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
      "styleOrTitle": "Legendary Watcher • Act-Again & Aura Support",
      "rarity": "Legendary",
      "role": "Act-Again & Aura Support (Watcher)",
      "roleColumn": "SUPPORT",
      "element": "Watcher",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/07/IMG_1686.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ – 5★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3985,
        "dpOrSpeed": 235,
        "atkOrPower": 1660,
        "defOrGuts": 685,
        "critOrWit": 78,
        "burstCeilingScore": 78,
        "bufferCeilingScore": 99,
        "sustainScore": 99,
        "spEfficiencyScore": 98
      },
      "skills": [
        {
          "name": "Princess Prayer — Act Again & Sanctuary",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 1 Turn CD",
          "multiplierSummary": "Instant Turn Reset + ATK/M.ATK II (+20%) + 100% M.ATK AoE Heal",
          "hitCount": 3,
          "buffCategoryTags": [
            "Act Again",
            "NRG +2",
            "Iria Leader Aura",
            "AoE Heal"
          ],
          "exactDescription": "Grants target ally an immediate extra turn (Act Again), restores +2 NRG, applies ATK II & M.ATK II (+20%), and triggers Sanctuary healing across all allies within 3 tiles."
        },
        {
          "name": "Trait: Light of Iria Rebirth",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait / Instant)",
          "multiplierSummary": "Summons Royal Guard + End-of-Turn AoE Dispel & Heal",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Magical",
            "Act Again"
          ],
          "exactDescription": "At start of battle, summons an elite Royal Guard to take cover for allies. After any action, heals the 2 lowest-HP allies for 35% M.ATK and dispels 1 debuff."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "For Peace (Iria Faction Aura)",
          "effect": "All Iria allies in battle gain +10% ATK, +20% DEF, +15% Crit DMG, and +12% extra damage when buffed."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Flight of the Princess (5★ Trait)",
          "effect": "Increases healing output by +25% and grants Cooldown -1 to all allies within 3 tiles upon casting an Ultimate."
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
      "summaryVerdict": "SP Inanna (Watcher) is a SSS-Tier Act-Again & Aura Support centerpiece. Grants target ally an immediate extra turn (Act Again), restores +2 NRG, applies ATK II & M.ATK II (+20%), and triggers Sanctuary healing across all allies within 3 tiles.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-sp-inanna"
    },
    {
      "externalId": "soc-unit-sp-samantha",
      "slug": "soc-sp-samantha",
      "nameEn": "SP Samantha",
      "nameOriginal": "SP Samantha",
      "styleOrTitle": "Legendary Watcher • AoE Judgement Carry",
      "rarity": "Legendary",
      "role": "AoE Judgement Carry (Watcher)",
      "roleColumn": "DPS",
      "element": "Watcher",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0699.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 14,
      "recommendedDupes": "3★ – 5★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3900,
        "dpOrSpeed": 206,
        "atkOrPower": 2152,
        "defOrGuts": 719,
        "critOrWit": 83,
        "burstCeilingScore": 99,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Judgement of the Sacred Flame",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 0 Turn CD",
          "multiplierSummary": "160% AoE Magical + Sacred Judgement Brand + Papal Aura",
          "hitCount": 3,
          "buffCategoryTags": [
            "AoE Magic Carry",
            "Papal States Aura",
            "M.DEF Shred -30%",
            "NRG Refund"
          ],
          "exactDescription": "Unleashes purifying Papal radiance in a 4-tile radius, dealing 160% Magical damage, inflicting -30% M.DEF II, and refunding +2 NRG when hitting 3 or more targets."
        },
        {
          "name": "Trait: Supreme Pontiff Verdict",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait / Instant)",
          "multiplierSummary": "+30% M.ATK + Auto-Resolve & Pre-emptive Holy Bolt",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Magical",
            "AoE Magic Carry"
          ],
          "exactDescription": "Increases M.ATK by +30% and Critical Rate by +20%. Automatically fires a 90% Magical holy bolt at any enemy that attacks an ally within 4 tiles."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Light of the Papal States (Aura)",
          "effect": "All Papal States allies gain +10% ATK, +20% DEF, and +20% AoE damage when healthy."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Sacred Martyrdom (5★ Trait)",
          "effect": "Grants unbreakable Resolve once per battle and resets all skill cooldowns when triggered."
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
      "summaryVerdict": "SP Samantha (Watcher) is a SSS-Tier AoE Judgement Carry centerpiece. Unleashes purifying Papal radiance in a 4-tile radius, dealing 160% Magical damage, inflicting -30% M.DEF II, and refunding +2 NRG when hitting 3 or more targets.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-sp-samantha"
    },
    {
      "externalId": "soc-unit-camelot",
      "slug": "soc-camelot",
      "nameEn": "Camelot",
      "nameOriginal": "Camelot",
      "styleOrTitle": "Legendary Breaker • Vanguard Cleave Carry",
      "rarity": "Legendary",
      "role": "Vanguard Cleave Carry (Breaker)",
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
        "hpOrStamina": 4620,
        "dpOrSpeed": 212,
        "atkOrPower": 2134,
        "defOrGuts": 912,
        "critOrWit": 84,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Camelot — Vanguard Armor-Shatter Cleave",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "180% Physical Strike + 100% Shield Break + Knockback 2",
          "hitCount": 2,
          "buffCategoryTags": [
            "Shield Breaker",
            "Knockback Collision",
            "Armor Shred",
            "Breaker"
          ],
          "exactDescription": "Camelot delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision."
        },
        {
          "name": "Trait: Camelot Warlord Momentum",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+20% ATK/DEF + Instant Act-Again on Kill",
          "hitCount": 1,
          "buffCategoryTags": [
            "Breaker",
            "Shield Breaker",
            "Act Again"
          ],
          "exactDescription": "Increases P.ATK and P.DEF by +20%; defeating an enemy or breaking a boss shield restores +2 NRG and grants +2 Movement."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Breaker Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Camelot Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Camelot is a SS-Tier Breaker (Vanguard Cleave Carry) specialist in Sword of Convallaria. Camelot delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-camelot"
    },
    {
      "externalId": "soc-unit-geralt",
      "slug": "soc-geralt",
      "nameEn": "Geralt",
      "nameOriginal": "Geralt",
      "styleOrTitle": "Legendary Watcher • Witcher Sign & Sword Carry",
      "rarity": "Legendary",
      "role": "Witcher Sign & Sword Carry (Watcher)",
      "roleColumn": "DPS",
      "element": "Watcher",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/11/IMG_4942.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3835,
        "dpOrSpeed": 208,
        "atkOrPower": 2026,
        "defOrGuts": 697,
        "critOrWit": 85,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Geralt — Vanguard Armor-Shatter Cleave",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "180% Physical Strike + 100% Shield Break + Knockback 2",
          "hitCount": 2,
          "buffCategoryTags": [
            "Shield Breaker",
            "Knockback Collision",
            "Armor Shred",
            "Watcher"
          ],
          "exactDescription": "Geralt delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision."
        },
        {
          "name": "Trait: Geralt Warlord Momentum",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+20% ATK/DEF + Instant Act-Again on Kill",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Shield Breaker",
            "Act Again"
          ],
          "exactDescription": "Increases P.ATK and P.DEF by +20%; defeating an enemy or breaking a boss shield restores +2 NRG and grants +2 Movement."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Watcher Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Geralt Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Geralt is a SS-Tier Watcher (Witcher Sign & Sword Carry) specialist in Sword of Convallaria. Geralt delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-geralt"
    },
    {
      "externalId": "soc-unit-kvare",
      "slug": "soc-kvare",
      "nameEn": "Kvare",
      "nameOriginal": "Kvare",
      "styleOrTitle": "Legendary Destroyer • Piercing DoT & Burst Mage",
      "rarity": "Legendary",
      "role": "Piercing DoT & Burst Mage (Destroyer)",
      "roleColumn": "DPS",
      "element": "Destroyer",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Kvare.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3920,
        "dpOrSpeed": 209,
        "atkOrPower": 2128,
        "defOrGuts": 731,
        "critOrWit": 92,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Abyssal Roster — Soul Harvest",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "175% Piercing Magical + 3× Roster Corrosion DoT",
          "hitCount": 3,
          "buffCategoryTags": [
            "Piercing Magic",
            "True HP Corrosion",
            "Shield Bypass",
            "Boss Killer"
          ],
          "exactDescription": "Calls down dark Crimson Night bolts across a 3-tile zone, dealing 175% Magical damage that bypasses Physical shields and detonates all active Roster Corrosion stacks."
        },
        {
          "name": "Trait: Architect of Crimson Night",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait / Instant)",
          "multiplierSummary": "Ignores 40% M.DEF + Stacks True HP Corrosion",
          "hitCount": 1,
          "buffCategoryTags": [
            "Destroyer",
            "Piercing",
            "Piercing Magic"
          ],
          "exactDescription": "Every active attack inflicts 2 stacks of Roster Corrosion (12% Max HP Piercing damage at turn end) and ignores 40% of enemy M.DEF."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Nightfall Dominion",
          "effect": "Increases Magical damage by +25% against enemies afflicted with 2 or more debuffs."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Immortal Schemer (5★ Trait)",
          "effect": "Recovers +1 NRG whenever an enemy suffers Corrosion damage and heals 25% of damage dealt."
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
      "summaryVerdict": "Kvare (Destroyer) is a SS-Tier Piercing DoT & Burst Mage centerpiece. Calls down dark Crimson Night bolts across a 3-tile zone, dealing 175% Magical damage that bypasses Physical shields and detonates all active Roster Corrosion stacks.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-kvare"
    },
    {
      "externalId": "soc-unit-luvata",
      "slug": "soc-luvata",
      "nameEn": "Luvata",
      "nameOriginal": "Luvata",
      "styleOrTitle": "Legendary Destroyer • Ignite AoE Fire Mage",
      "rarity": "Legendary",
      "role": "Ignite AoE Fire Mage (Destroyer)",
      "roleColumn": "DPS",
      "element": "Destroyer",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_7861.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3830,
        "dpOrSpeed": 210,
        "atkOrPower": 2020,
        "defOrGuts": 695,
        "critOrWit": 93,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Luvata — Cataclysmic Arcane Detonation",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 1 Turn CD",
          "multiplierSummary": "165% AoE Magical + -30% M.DEF Shred + Scorch Zone",
          "hitCount": 3,
          "buffCategoryTags": [
            "AoE Magic Carry",
            "M.DEF Shred -30%",
            "Shield Piercer",
            "Destroyer"
          ],
          "exactDescription": "Luvata calls down an arcane tempest across a 3-tile diamond, dealing 165% Magical damage, ignoring 30% M.DEF, and refunding +1 NRG on Critical Hit."
        },
        {
          "name": "Trait: Luvata Astral Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+25% M.ATK + +1 NRG Recovery at 80%+ HP",
          "hitCount": 1,
          "buffCategoryTags": [
            "Destroyer",
            "Magical Carry",
            "NRG Regen"
          ],
          "exactDescription": "Increases Magical Attack by +25% and recovers +1 bonus NRG at the start of turn whenever HP is above 80%."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Destroyer Tactical Mastery",
          "effect": "Increases Magical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Luvata Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Luvata is a SS-Tier Destroyer (Ignite AoE Fire Mage) specialist in Sword of Convallaria. Luvata calls down an arcane tempest across a 3-tile diamond, dealing 165% Magical damage, ignoring 30% M.DEF, and refunding +1 NRG on Critical Hit.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-luvata"
    },
    {
      "externalId": "soc-unit-nydia",
      "slug": "soc-nydia",
      "nameEn": "Nydia",
      "nameOriginal": "Nydia",
      "styleOrTitle": "Legendary Seeker • Backline Dive Assassin",
      "rarity": "Legendary",
      "role": "Backline Dive Assassin (Seeker)",
      "roleColumn": "SUB_DPS",
      "element": "Seeker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/07/IMG_1342.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3915,
        "dpOrSpeed": 261,
        "atkOrPower": 2122,
        "defOrGuts": 729,
        "critOrWit": 98,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Nydia — Shadowstep Backstab Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "175% Backstab Physical + +35% Crit Rate + 3-Tile Retreat",
          "hitCount": 3,
          "buffCategoryTags": [
            "Backline Assassin",
            "Ignore Block",
            "+35% Crit Burst",
            "Seeker"
          ],
          "exactDescription": "Teleports behind the target to deliver a 175% Physical backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety."
        },
        {
          "name": "Trait: Nydia Crimson Ambush",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Instant)",
          "multiplierSummary": "Jump Climb + +1 Movement + DEF Down II (-20%)",
          "hitCount": 1,
          "buffCategoryTags": [
            "Seeker",
            "Flanker",
            "Mobility"
          ],
          "exactDescription": "Grants +1 Movement and Jump Climb when starting turn unharmed; attacking from behind or side inflicts P.DEF -20% and Dodge Disable."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Seeker Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Nydia Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Nydia is a SS-Tier Seeker (Backline Dive Assassin) specialist in Sword of Convallaria. Teleports behind the target to deliver a 175% Physical backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-nydia"
    },
    {
      "externalId": "soc-unit-triss",
      "slug": "soc-triss",
      "nameEn": "Triss",
      "nameOriginal": "Triss",
      "styleOrTitle": "Legendary Destroyer • Firestorm AoE Sorceress",
      "rarity": "Legendary",
      "role": "Firestorm AoE Sorceress (Destroyer)",
      "roleColumn": "DPS",
      "element": "Destroyer",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/11/IMG_4945.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3825,
        "dpOrSpeed": 212,
        "atkOrPower": 2014,
        "defOrGuts": 693,
        "critOrWit": 95,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Triss — Cataclysmic Arcane Detonation",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 1 Turn CD",
          "multiplierSummary": "165% AoE Magical + -30% M.DEF Shred + Scorch Zone",
          "hitCount": 3,
          "buffCategoryTags": [
            "AoE Magic Carry",
            "M.DEF Shred -30%",
            "Shield Piercer",
            "Destroyer"
          ],
          "exactDescription": "Triss calls down an arcane tempest across a 3-tile diamond, dealing 165% Magical damage, ignoring 30% M.DEF, and refunding +1 NRG on Critical Hit."
        },
        {
          "name": "Trait: Triss Astral Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+25% M.ATK + +1 NRG Recovery at 80%+ HP",
          "hitCount": 1,
          "buffCategoryTags": [
            "Destroyer",
            "Magical Carry",
            "NRG Regen"
          ],
          "exactDescription": "Increases Magical Attack by +25% and recovers +1 bonus NRG at the start of turn whenever HP is above 80%."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Destroyer Tactical Mastery",
          "effect": "Increases Magical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Triss Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Triss is a SS-Tier Destroyer (Firestorm AoE Sorceress) specialist in Sword of Convallaria. Triss calls down an arcane tempest across a 3-tile diamond, dealing 165% Magical damage, ignoring 30% M.DEF, and refunding +1 NRG on Critical Hit.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-triss"
    },
    {
      "externalId": "soc-unit-tristan",
      "slug": "soc-tristan",
      "nameEn": "Tristan",
      "nameOriginal": "Tristan",
      "styleOrTitle": "Legendary Destroyer • Undying Berserker Carry",
      "rarity": "Legendary",
      "role": "Undying Berserker Carry (Destroyer)",
      "roleColumn": "DPS",
      "element": "Destroyer",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Tristan.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3910,
        "dpOrSpeed": 213,
        "atkOrPower": 2116,
        "defOrGuts": 727,
        "critOrWit": 88,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Bursting Fury — Unchained Blitz",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 3 Turn CD",
          "multiplierSummary": "220% Single-Target Physical + 4 turns Unyielding Berserk",
          "hitCount": 3,
          "buffCategoryTags": [
            "Armor Break",
            "Unkillable Berserk",
            "Instant Action",
            "Boss Nuker"
          ],
          "exactDescription": "Enters Unchained Fury (immune to fatal damage for 2 turns, +35% P.ATK, +30% Crit), then delivers a 220% Armor-Crushing blow that shatters 40% P.DEF."
        },
        {
          "name": "Trait: Blood of the Street Brawlers",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait / Instant)",
          "multiplierSummary": "Instant Action + +40% Missing-HP Multiplier",
          "hitCount": 1,
          "buffCategoryTags": [
            "Destroyer",
            "Physical",
            "Armor Break"
          ],
          "exactDescription": "Gains up to +40% P.ATK and +30% Crit DMG based on missing HP. Once per battle, surviving fatal damage grants an immediate bonus turn."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Shattering Knuckle",
          "effect": "Ignores 30% of target DEF and disables enemy passive reaction skills for 2 turns."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Apex Brawler (5★ Trait)",
          "effect": "Extends Unyielding Fury duration by +1 turn and restores 50% HP when Fury expires."
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
      "summaryVerdict": "Tristan (Destroyer) is a SS-Tier Undying Berserker Carry centerpiece. Enters Unchained Fury (immune to fatal damage for 2 turns, +35% P.ATK, +30% Crit), then delivers a 220% Armor-Crushing blow that shatters 40% P.DEF.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-tristan"
    },
    {
      "externalId": "soc-unit-credenza",
      "slug": "soc-credenza",
      "nameEn": "Credenza",
      "nameOriginal": "Credenza",
      "styleOrTitle": "Legendary Watcher • Cooldown & NRG Battery",
      "rarity": "Legendary",
      "role": "Cooldown & NRG Battery (Watcher)",
      "roleColumn": "SUPPORT",
      "element": "Watcher",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0697.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3977,
        "dpOrSpeed": 244,
        "atkOrPower": 1645,
        "defOrGuts": 691,
        "critOrWit": 79,
        "burstCeilingScore": 78,
        "bufferCeilingScore": 96,
        "sustainScore": 96,
        "spEfficiencyScore": 98
      },
      "skills": [
        {
          "name": "Credenza — Sacred Benediction & NRG Conduit",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "Party +2 NRG + ATK/M.ATK II (+20%) + 90% M.ATK AoE Heal",
          "hitCount": 1,
          "buffCategoryTags": [
            "NRG Battery +2",
            "ATK/M.ATK II",
            "AoE Dispel",
            "Watcher"
          ],
          "exactDescription": "Credenza channels Watcher support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1."
        },
        {
          "name": "Trait: Credenza Tactical Overwatch",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Passive Trait)",
          "multiplierSummary": "End-of-Turn Spot Heal + Buff Extension +1 Turn",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Healer",
            "Buff Extension"
          ],
          "exactDescription": "At the end of every turn, heals the 2 lowest-HP allies within 3 tiles for 30% M.ATK and grants Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Watcher Tactical Mastery",
          "effect": "Increases healing and buff range by +1 tile and grants DMG Up II (+20%) to healed allies."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Credenza Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Credenza is a SS-Tier Watcher (Cooldown & NRG Battery) specialist in Sword of Convallaria. Credenza channels Watcher support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-credenza"
    },
    {
      "externalId": "soc-unit-lutfi",
      "slug": "soc-lutfi",
      "nameEn": "Lutfi",
      "nameOriginal": "Lutfi",
      "styleOrTitle": "Legendary Seeker • Tactical Debuff & Crit Seeker",
      "rarity": "Legendary",
      "role": "Tactical Debuff & Crit Seeker (Seeker)",
      "roleColumn": "SUB_DPS",
      "element": "Seeker",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/07/IMG_1482.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3905,
        "dpOrSpeed": 265,
        "atkOrPower": 2110,
        "defOrGuts": 725,
        "critOrWit": 95,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Lutfi — Shadowstep Backstab Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "175% Backstab Piercing + +35% Crit Rate + 3-Tile Retreat",
          "hitCount": 3,
          "buffCategoryTags": [
            "Backline Assassin",
            "Ignore Block",
            "+35% Crit Burst",
            "Seeker"
          ],
          "exactDescription": "Teleports behind the target to deliver a 175% Piercing backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety."
        },
        {
          "name": "Trait: Lutfi Crimson Ambush",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Instant)",
          "multiplierSummary": "Jump Climb + +1 Movement + DEF Down II (-20%)",
          "hitCount": 1,
          "buffCategoryTags": [
            "Seeker",
            "Flanker",
            "Mobility"
          ],
          "exactDescription": "Grants +1 Movement and Jump Climb when starting turn unharmed; attacking from behind or side inflicts P.DEF -20% and Dodge Disable."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Seeker Tactical Mastery",
          "effect": "Increases Piercing damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Lutfi Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Lutfi is a SS-Tier Seeker (Tactical Debuff & Crit Seeker) specialist in Sword of Convallaria. Teleports behind the target to deliver a 175% Piercing backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-lutfi"
    },
    {
      "externalId": "soc-unit-sp-safiyyah",
      "slug": "soc-sp-safiyyah",
      "nameEn": "SP Safiyyah",
      "nameOriginal": "SP Safiyyah",
      "styleOrTitle": "Legendary Watcher • Assault Command Buffer",
      "rarity": "Legendary",
      "role": "Assault Command Buffer (Watcher)",
      "roleColumn": "SUPPORT",
      "element": "Watcher",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/SP-Safiyyah.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3973,
        "dpOrSpeed": 246,
        "atkOrPower": 1640,
        "defOrGuts": 689,
        "critOrWit": 81,
        "burstCeilingScore": 78,
        "bufferCeilingScore": 96,
        "sustainScore": 96,
        "spEfficiencyScore": 98
      },
      "skills": [
        {
          "name": "SP Safiyyah — Sacred Benediction & NRG Conduit",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "Party +2 NRG + ATK/M.ATK II (+20%) + 90% M.ATK AoE Heal",
          "hitCount": 1,
          "buffCategoryTags": [
            "NRG Battery +2",
            "ATK/M.ATK II",
            "AoE Dispel",
            "Watcher"
          ],
          "exactDescription": "SP Safiyyah channels Watcher support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1."
        },
        {
          "name": "Trait: SP Safiyyah Tactical Overwatch",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Passive Trait)",
          "multiplierSummary": "End-of-Turn Spot Heal + Buff Extension +1 Turn",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Healer",
            "Buff Extension"
          ],
          "exactDescription": "At the end of every turn, heals the 2 lowest-HP allies within 3 tiles for 30% M.ATK and grants Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Watcher Tactical Mastery",
          "effect": "Increases healing and buff range by +1 tile and grants DMG Up II (+20%) to healed allies."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened SP Safiyyah Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "SP Safiyyah is a SS-Tier Watcher (Assault Command Buffer) specialist in Sword of Convallaria. SP Safiyyah channels Watcher support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-sp-safiyyah"
    },
    {
      "externalId": "soc-unit-taair",
      "slug": "soc-taair",
      "nameEn": "Taair",
      "nameOriginal": "Taair",
      "styleOrTitle": "Legendary Watcher • Speed, NRG & Shared-DMG Support",
      "rarity": "Legendary",
      "role": "Speed, NRG & Shared-DMG Support (Watcher)",
      "roleColumn": "SUPPORT",
      "element": "Watcher",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Taair.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4041,
        "dpOrSpeed": 247,
        "atkOrPower": 1725,
        "defOrGuts": 723,
        "critOrWit": 82,
        "burstCeilingScore": 78,
        "bufferCeilingScore": 96,
        "sustainScore": 96,
        "spEfficiencyScore": 98
      },
      "skills": [
        {
          "name": "Caged Bird — Chronicle of Speed & NRG",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 1 Turn CD",
          "multiplierSummary": "Party SPD II (+150) + +2 NRG Battery + Shared DMG Link",
          "hitCount": 3,
          "buffCategoryTags": [
            "NRG Battery +2",
            "SPD Manipulation",
            "Damage Share Link",
            "Dispel"
          ],
          "exactDescription": "Links all allies within 4 tiles to share incoming single-target damage, grants SPD II (+150 Speed), restores +2 NRG, and dispels 2 debuffs."
        },
        {
          "name": "Trait: Historian Scroll Seeds",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait / Instant)",
          "multiplierSummary": "Spawns Knowledge Scrolls + Zero-NRG Turn Advance",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Magical",
            "NRG Battery +2"
          ],
          "exactDescription": "Spawns Historical Scrolls on the map; picking them up allows Taair to cast instant-speed heals, NRG refills, and turn-order manipulation at 0 NRG cost."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Wings of Knowledge",
          "effect": "Grants +2 Movement and allows passing through enemy units without interruption."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Living Chronicle (5★ Trait)",
          "effect": "Starts battle with 3 Knowledge Scrolls already stocked and +1 NRG recovery per turn."
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
      "summaryVerdict": "Taair (Watcher) is a SS-Tier Speed, NRG & Shared-DMG Support centerpiece. Links all allies within 4 tiles to share incoming single-target damage, grants SPD II (+150 Speed), restores +2 NRG, and dispels 2 debuffs.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-taair"
    },
    {
      "externalId": "soc-unit-yennefer",
      "slug": "soc-yennefer",
      "nameEn": "Yennefer",
      "nameOriginal": "Yennefer",
      "styleOrTitle": "Legendary Destroyer • Portal Utility & AoE Mage",
      "rarity": "Legendary",
      "role": "Portal Utility & AoE Mage (Destroyer)",
      "roleColumn": "SUPPORT",
      "element": "Destroyer",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/11/IMG_4944.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3969,
        "dpOrSpeed": 248,
        "atkOrPower": 1635,
        "defOrGuts": 687,
        "critOrWit": 93,
        "burstCeilingScore": 78,
        "bufferCeilingScore": 96,
        "sustainScore": 96,
        "spEfficiencyScore": 98
      },
      "skills": [
        {
          "name": "Yennefer — Sacred Benediction & NRG Conduit",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "Party +2 NRG + ATK/M.ATK II (+20%) + 90% M.ATK AoE Heal",
          "hitCount": 1,
          "buffCategoryTags": [
            "NRG Battery +2",
            "ATK/M.ATK II",
            "AoE Dispel",
            "Destroyer"
          ],
          "exactDescription": "Yennefer channels Destroyer support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1."
        },
        {
          "name": "Trait: Yennefer Tactical Overwatch",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Passive Trait)",
          "multiplierSummary": "End-of-Turn Spot Heal + Buff Extension +1 Turn",
          "hitCount": 1,
          "buffCategoryTags": [
            "Destroyer",
            "Healer",
            "Buff Extension"
          ],
          "exactDescription": "At the end of every turn, heals the 2 lowest-HP allies within 3 tiles for 30% M.ATK and grants Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Destroyer Tactical Mastery",
          "effect": "Increases healing and buff range by +1 tile and grants DMG Up II (+20%) to healed allies."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Yennefer Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Yennefer is a SS-Tier Destroyer (Portal Utility & AoE Mage) specialist in Sword of Convallaria. Yennefer channels Destroyer support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-yennefer"
    },
    {
      "externalId": "soc-unit-yserinde",
      "slug": "soc-yserinde",
      "nameEn": "Yserinde",
      "nameOriginal": "Yserinde",
      "styleOrTitle": "Legendary Seeker • Feather Trap & Dodge Seeker",
      "rarity": "Legendary",
      "role": "Feather Trap & Dodge Seeker (Seeker)",
      "roleColumn": "SUB_DPS",
      "element": "Seeker",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0700.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 10,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3895,
        "dpOrSpeed": 269,
        "atkOrPower": 2098,
        "defOrGuts": 721,
        "critOrWit": 92,
        "burstCeilingScore": 95,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Yserinde — Shadowstep Backstab Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "175% Backstab Piercing + +35% Crit Rate + 3-Tile Retreat",
          "hitCount": 3,
          "buffCategoryTags": [
            "Backline Assassin",
            "Ignore Block",
            "+35% Crit Burst",
            "Seeker"
          ],
          "exactDescription": "Teleports behind the target to deliver a 175% Piercing backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety."
        },
        {
          "name": "Trait: Yserinde Crimson Ambush",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Instant)",
          "multiplierSummary": "Jump Climb + +1 Movement + DEF Down II (-20%)",
          "hitCount": 1,
          "buffCategoryTags": [
            "Seeker",
            "Flanker",
            "Mobility"
          ],
          "exactDescription": "Grants +1 Movement and Jump Climb when starting turn unharmed; attacking from behind or side inflicts P.DEF -20% and Dodge Disable."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Seeker Tactical Mastery",
          "effect": "Increases Piercing damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Yserinde Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Yserinde is a SS-Tier Seeker (Feather Trap & Dodge Seeker) specialist in Sword of Convallaria. Teleports behind the target to deliver a 175% Piercing backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-yserinde"
    },
    {
      "externalId": "soc-unit-agata",
      "slug": "soc-agata",
      "nameEn": "Agata",
      "nameOriginal": "Agata",
      "styleOrTitle": "Legendary Watcher • Wolf Queen Wound Bruiser",
      "rarity": "Legendary",
      "role": "Wolf Queen Wound Bruiser (Watcher)",
      "roleColumn": "SUB_DPS",
      "element": "Watcher",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Agata.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3730,
        "dpOrSpeed": 220,
        "atkOrPower": 1840,
        "defOrGuts": 660,
        "critOrWit": 88,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Agata — Vanguard Armor-Shatter Cleave",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "180% Piercing Strike + 100% Shield Break + Knockback 2",
          "hitCount": 2,
          "buffCategoryTags": [
            "Shield Breaker",
            "Knockback Collision",
            "Armor Shred",
            "Watcher"
          ],
          "exactDescription": "Agata delivers a heavy 180% Piercing strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision."
        },
        {
          "name": "Trait: Agata Warlord Momentum",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+20% ATK/DEF + Instant Act-Again on Kill",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Shield Breaker",
            "Act Again"
          ],
          "exactDescription": "Increases P.ATK and P.DEF by +20%; defeating an enemy or breaking a boss shield restores +2 NRG and grants +2 Movement."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Watcher Tactical Mastery",
          "effect": "Increases Piercing damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Agata Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Agata is a S-Tier Watcher (Wolf Queen Wound Bruiser) specialist in Sword of Convallaria. Agata delivers a heavy 180% Piercing strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-agata"
    },
    {
      "externalId": "soc-unit-auguste",
      "slug": "soc-auguste",
      "nameEn": "Auguste",
      "nameOriginal": "Auguste",
      "styleOrTitle": "Legendary Breaker • Rage Act-Again Carry",
      "rarity": "Legendary",
      "role": "Rage Act-Again Carry (Breaker)",
      "roleColumn": "DPS",
      "element": "Breaker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Auguste.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4485,
        "dpOrSpeed": 212,
        "atkOrPower": 1942,
        "defOrGuts": 841,
        "critOrWit": 89,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Wrath — Supreme Devastation",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "4 NRG / 2 Turn CD",
          "multiplierSummary": "6-Hit 210% Physical Cleave + Instant Rage Act-Again",
          "hitCount": 3,
          "buffCategoryTags": [
            "6-Stack Rage Act-Again",
            "Armor Crush",
            "Union Knight Carry",
            "Physical Shield"
          ],
          "exactDescription": "Consumes 6 stacks of Rage to trigger an immediate bonus action (Hassle), then unleashes a 6-hit 210% Physical cleave that ignores 35% DEF."
        },
        {
          "name": "Trait: Broken Blade of Wrath",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait / Instant)",
          "multiplierSummary": "Stacks Rage on Every Action → Instant Turn Reset",
          "hitCount": 1,
          "buffCategoryTags": [
            "Breaker",
            "Physical",
            "6-Stack Rage Act-Again"
          ],
          "exactDescription": "Gains 2 stacks of Rage per attack or standby. Reaching 6 stacks immediately grants Act Again, +30% P.ATK, and a 35% P.ATK Physical Shield."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Wrath — Swift",
          "effect": "Instant-cast strike that deals 70% Physical damage, generates +2 Rage stacks, and inflicts P.DEF -20%."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Unbridled Rage (5★ Trait)",
          "effect": "Starts battle with 4 Rage stacks (triggers Act Again on Turn 1) and increases P.ATK by +20%."
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
      "summaryVerdict": "Auguste (Breaker) is a S-Tier Rage Act-Again Carry centerpiece. Consumes 6 stacks of Rage to trigger an immediate bonus action (Hassle), then unleashes a 6-hit 210% Physical cleave that ignores 35% DEF.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-auguste"
    },
    {
      "externalId": "soc-unit-ayishah",
      "slug": "soc-ayishah",
      "nameEn": "Ayishah",
      "nameOriginal": "Ayishah",
      "styleOrTitle": "Legendary Defender • Bodyguard Cover Tank",
      "rarity": "Legendary",
      "role": "Bodyguard Cover Tank (Defender)",
      "roleColumn": "SUSTAIN",
      "element": "Defender",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0443.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 5004,
        "dpOrSpeed": 190,
        "atkOrPower": 1316,
        "defOrGuts": 917,
        "critOrWit": 90,
        "burstCeilingScore": 74,
        "bufferCeilingScore": 85,
        "sustainScore": 96,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Ayishah — Bastion Aegis & Guardian Counter",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "2-Tile Allied Cover + -35% DMG Taken + 40% HP Shield",
          "hitCount": 1,
          "buffCategoryTags": [
            "2-Tile Cover Tank",
            "40% HP Shield",
            "Counter Stance",
            "Defender"
          ],
          "exactDescription": "Ayishah enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield."
        },
        {
          "name": "Trait: Ayishah Unyielding Fortress",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Reaction)",
          "multiplierSummary": "Pre-emptive Counterstrike (110% P.DEF Scaling) + Knockback",
          "hitCount": 1,
          "buffCategoryTags": [
            "Defender",
            "Cover Tank",
            "Counter"
          ],
          "exactDescription": "Reduces incoming AoE and Single-Target damage by -20% and counters melee attackers for 110% P.DEF-scaled Magical damage."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Defender Tactical Mastery",
          "effect": "Reduces damage taken from all directions by -15% and grants immunity to Knockback."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Ayishah Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Ayishah is a S-Tier Defender (Bodyguard Cover Tank) specialist in Sword of Convallaria. Ayishah enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-ayishah"
    },
    {
      "externalId": "soc-unit-estra",
      "slug": "soc-estra",
      "nameEn": "Estra",
      "nameOriginal": "Estra",
      "styleOrTitle": "Legendary Seeker • Single-Target Boss Killer",
      "rarity": "Legendary",
      "role": "Single-Target Boss Killer (Seeker)",
      "roleColumn": "DPS",
      "element": "Seeker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/IMG_8494.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3810,
        "dpOrSpeed": 255,
        "atkOrPower": 1936,
        "defOrGuts": 692,
        "critOrWit": 96,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Estra — Shadowstep Backstab Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "175% Backstab Physical + +35% Crit Rate + 3-Tile Retreat",
          "hitCount": 3,
          "buffCategoryTags": [
            "Backline Assassin",
            "Ignore Block",
            "+35% Crit Burst",
            "Seeker"
          ],
          "exactDescription": "Teleports behind the target to deliver a 175% Physical backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety."
        },
        {
          "name": "Trait: Estra Crimson Ambush",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Instant)",
          "multiplierSummary": "Jump Climb + +1 Movement + DEF Down II (-20%)",
          "hitCount": 1,
          "buffCategoryTags": [
            "Seeker",
            "Flanker",
            "Mobility"
          ],
          "exactDescription": "Grants +1 Movement and Jump Climb when starting turn unharmed; attacking from behind or side inflicts P.DEF -20% and Dodge Disable."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Seeker Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Estra Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Estra is a S-Tier Seeker (Single-Target Boss Killer) specialist in Sword of Convallaria. Teleports behind the target to deliver a 175% Physical backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-estra"
    },
    {
      "externalId": "soc-unit-layla",
      "slug": "soc-layla",
      "nameEn": "Layla",
      "nameOriginal": "Layla",
      "styleOrTitle": "Legendary Defender • Alert Counter Tank",
      "rarity": "Legendary",
      "role": "Alert Counter Tank (Defender)",
      "roleColumn": "SUSTAIN",
      "element": "Defender",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Layla.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4998,
        "dpOrSpeed": 192,
        "atkOrPower": 1312,
        "defOrGuts": 914,
        "critOrWit": 83,
        "burstCeilingScore": 74,
        "bufferCeilingScore": 85,
        "sustainScore": 96,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Layla — Bastion Aegis & Guardian Counter",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "2-Tile Allied Cover + -35% DMG Taken + 40% HP Shield",
          "hitCount": 1,
          "buffCategoryTags": [
            "2-Tile Cover Tank",
            "40% HP Shield",
            "Counter Stance",
            "Defender"
          ],
          "exactDescription": "Layla enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield."
        },
        {
          "name": "Trait: Layla Unyielding Fortress",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Reaction)",
          "multiplierSummary": "Pre-emptive Counterstrike (110% P.DEF Scaling) + Knockback",
          "hitCount": 1,
          "buffCategoryTags": [
            "Defender",
            "Cover Tank",
            "Counter"
          ],
          "exactDescription": "Reduces incoming AoE and Single-Target damage by -20% and counters melee attackers for 110% P.DEF-scaled Magical damage."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Defender Tactical Mastery",
          "effect": "Reduces damage taken from all directions by -15% and grants immunity to Knockback."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Layla Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Layla is a S-Tier Defender (Alert Counter Tank) specialist in Sword of Convallaria. Layla enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-layla"
    },
    {
      "externalId": "soc-unit-marcille",
      "slug": "soc-marcille",
      "nameEn": "Marcille",
      "nameOriginal": "Marcille",
      "styleOrTitle": "Legendary Destroyer • Explosion AoE Mage",
      "rarity": "Legendary",
      "role": "Explosion AoE Mage (Destroyer)",
      "roleColumn": "DPS",
      "element": "Destroyer",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0693.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3805,
        "dpOrSpeed": 209,
        "atkOrPower": 1930,
        "defOrGuts": 690,
        "critOrWit": 92,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Marcille — Cataclysmic Arcane Detonation",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 1 Turn CD",
          "multiplierSummary": "165% AoE Magical + -30% M.DEF Shred + Scorch Zone",
          "hitCount": 3,
          "buffCategoryTags": [
            "AoE Magic Carry",
            "M.DEF Shred -30%",
            "Shield Piercer",
            "Destroyer"
          ],
          "exactDescription": "Marcille calls down an arcane tempest across a 3-tile diamond, dealing 165% Magical damage, ignoring 30% M.DEF, and refunding +1 NRG on Critical Hit."
        },
        {
          "name": "Trait: Marcille Astral Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+25% M.ATK + +1 NRG Recovery at 80%+ HP",
          "hitCount": 1,
          "buffCategoryTags": [
            "Destroyer",
            "Magical Carry",
            "NRG Regen"
          ],
          "exactDescription": "Increases Magical Attack by +25% and recovers +1 bonus NRG at the start of turn whenever HP is above 80%."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Destroyer Tactical Mastery",
          "effect": "Increases Magical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Marcille Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Marcille is a S-Tier Destroyer (Explosion AoE Mage) specialist in Sword of Convallaria. Marcille calls down an arcane tempest across a 3-tile diamond, dealing 165% Magical damage, ignoring 30% M.DEF, and refunding +1 NRG on Critical Hit.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-marcille"
    },
    {
      "externalId": "soc-unit-pamina",
      "slug": "soc-pamina",
      "nameEn": "Pamina",
      "nameOriginal": "Pamina",
      "styleOrTitle": "Legendary Breaker • AoE Spear Taunt Breaker",
      "rarity": "Legendary",
      "role": "AoE Spear Taunt Breaker (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Breaker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Pamina.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4385,
        "dpOrSpeed": 217,
        "atkOrPower": 1822,
        "defOrGuts": 781,
        "critOrWit": 85,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Pamina — Vanguard Armor-Shatter Cleave",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "180% Physical Strike + 100% Shield Break + Knockback 2",
          "hitCount": 2,
          "buffCategoryTags": [
            "Shield Breaker",
            "Knockback Collision",
            "Armor Shred",
            "Breaker"
          ],
          "exactDescription": "Pamina delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision."
        },
        {
          "name": "Trait: Pamina Warlord Momentum",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+20% ATK/DEF + Instant Act-Again on Kill",
          "hitCount": 1,
          "buffCategoryTags": [
            "Breaker",
            "Shield Breaker",
            "Act Again"
          ],
          "exactDescription": "Increases P.ATK and P.DEF by +20%; defeating an enemy or breaking a boss shield restores +2 NRG and grants +2 Movement."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Breaker Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Pamina Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Pamina is a S-Tier Breaker (AoE Spear Taunt Breaker) specialist in Sword of Convallaria. Pamina delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-pamina"
    },
    {
      "externalId": "soc-unit-rico",
      "slug": "soc-rico",
      "nameEn": "Rico",
      "nameOriginal": "Rico",
      "styleOrTitle": "Legendary Defender • Knockback & Stun Tank",
      "rarity": "Legendary",
      "role": "Knockback & Stun Tank (Defender)",
      "roleColumn": "SUSTAIN",
      "element": "Defender",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0696.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 5094,
        "dpOrSpeed": 195,
        "atkOrPower": 1376,
        "defOrGuts": 962,
        "critOrWit": 86,
        "burstCeilingScore": 74,
        "bufferCeilingScore": 85,
        "sustainScore": 96,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Rico — Bastion Aegis & Guardian Counter",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "2-Tile Allied Cover + -35% DMG Taken + 40% HP Shield",
          "hitCount": 1,
          "buffCategoryTags": [
            "2-Tile Cover Tank",
            "40% HP Shield",
            "Counter Stance",
            "Defender"
          ],
          "exactDescription": "Rico enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield."
        },
        {
          "name": "Trait: Rico Unyielding Fortress",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Reaction)",
          "multiplierSummary": "Pre-emptive Counterstrike (110% P.DEF Scaling) + Knockback",
          "hitCount": 1,
          "buffCategoryTags": [
            "Defender",
            "Cover Tank",
            "Counter"
          ],
          "exactDescription": "Reduces incoming AoE and Single-Target damage by -20% and counters melee attackers for 110% P.DEF-scaled Physical damage."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Defender Tactical Mastery",
          "effect": "Reduces damage taken from all directions by -15% and grants immunity to Knockback."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Rico Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Rico is a S-Tier Defender (Knockback & Stun Tank) specialist in Sword of Convallaria. Rico enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-rico"
    },
    {
      "externalId": "soc-unit-safiyyah",
      "slug": "soc-safiyyah",
      "nameEn": "Safiyyah",
      "nameOriginal": "Safiyyah",
      "styleOrTitle": "Legendary Seeker • Hanged Men Summon & Dodge",
      "rarity": "Legendary",
      "role": "Hanged Men Summon & Dodge (Seeker)",
      "roleColumn": "SUB_DPS",
      "element": "Seeker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Safiyyah.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3710,
        "dpOrSpeed": 260,
        "atkOrPower": 1816,
        "defOrGuts": 652,
        "critOrWit": 94,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Shadowless Blade & Hanged Men Command",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "100% Dodge Stance + % Max HP Piercing Follow-Up",
          "hitCount": 3,
          "buffCategoryTags": [
            "% HP Boss Shred",
            "100% Evasion Counter",
            "Summon Assassin",
            "Dispel + Vuln"
          ],
          "exactDescription": "Summons an elite Hanged Men Blade Agent behind the enemy, marks the target with Hanged Men Brand, and enters Shadowless Blade stance (dodges all melee/ranged strikes and counters twice)."
        },
        {
          "name": "Trait: Mobile Squad Commander",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait / Instant)",
          "multiplierSummary": "36% Max HP Piercing Follow-Up on Marked Targets",
          "hitCount": 1,
          "buffCategoryTags": [
            "Seeker",
            "Physical",
            "% HP Boss Shred"
          ],
          "exactDescription": "Marks the closest enemy at turn start; every attack against a marked target triggers a follow-up slice dealing 36% of enemy Max HP as Piercing damage."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Tactical Adjustment",
          "effect": "Instant skill: swaps weapon class advantage to counter the target and heals 25% HP."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Shadow Commander (5★ Trait)",
          "effect": "Extends Hanged Men Brand range to 5 tiles and increases Piercing follow-up cap by +50%."
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
      "summaryVerdict": "Safiyyah (Seeker) is a S-Tier Hanged Men Summon & Dodge centerpiece. Summons an elite Hanged Men Blade Agent behind the enemy, marks the target with Hanged Men Brand, and enters Shadowless Blade stance (dodges all melee/ranged strikes and counters twice).",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-safiyyah"
    },
    {
      "externalId": "soc-unit-sp-rawiyah",
      "slug": "soc-sp-rawiyah",
      "nameEn": "SP Rawiyah",
      "nameOriginal": "SP Rawiyah",
      "styleOrTitle": "Legendary Seeker • Multi-Turn Cleave Assassin",
      "rarity": "Legendary",
      "role": "Multi-Turn Cleave Assassin (Seeker)",
      "roleColumn": "DPS",
      "element": "Seeker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/SP-Rawiyah.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3795,
        "dpOrSpeed": 261,
        "atkOrPower": 1918,
        "defOrGuts": 686,
        "critOrWit": 95,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "SP Rawiyah — Shadowstep Backstab Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "175% Backstab Physical + +35% Crit Rate + 3-Tile Retreat",
          "hitCount": 3,
          "buffCategoryTags": [
            "Backline Assassin",
            "Ignore Block",
            "+35% Crit Burst",
            "Seeker"
          ],
          "exactDescription": "Teleports behind the target to deliver a 175% Physical backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety."
        },
        {
          "name": "Trait: SP Rawiyah Crimson Ambush",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Instant)",
          "multiplierSummary": "Jump Climb + +1 Movement + DEF Down II (-20%)",
          "hitCount": 1,
          "buffCategoryTags": [
            "Seeker",
            "Flanker",
            "Mobility"
          ],
          "exactDescription": "Grants +1 Movement and Jump Climb when starting turn unharmed; attacking from behind or side inflicts P.DEF -20% and Dodge Disable."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Seeker Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened SP Rawiyah Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "SP Rawiyah is a S-Tier Seeker (Multi-Turn Cleave Assassin) specialist in Sword of Convallaria. Teleports behind the target to deliver a 175% Physical backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-sp-rawiyah"
    },
    {
      "externalId": "soc-unit-ciri",
      "slug": "soc-ciri",
      "nameEn": "Ciri",
      "nameOriginal": "Ciri",
      "styleOrTitle": "Legendary Seeker • Blink Dash Flanker",
      "rarity": "Legendary",
      "role": "Blink Dash Flanker (Seeker)",
      "roleColumn": "SUB_DPS",
      "element": "Seeker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/11/IMG_4943.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3705,
        "dpOrSpeed": 262,
        "atkOrPower": 1810,
        "defOrGuts": 650,
        "critOrWit": 96,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Ciri — Shadowstep Backstab Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "175% Backstab Physical + +35% Crit Rate + 3-Tile Retreat",
          "hitCount": 3,
          "buffCategoryTags": [
            "Backline Assassin",
            "Ignore Block",
            "+35% Crit Burst",
            "Seeker"
          ],
          "exactDescription": "Teleports behind the target to deliver a 175% Physical backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety."
        },
        {
          "name": "Trait: Ciri Crimson Ambush",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Instant)",
          "multiplierSummary": "Jump Climb + +1 Movement + DEF Down II (-20%)",
          "hitCount": 1,
          "buffCategoryTags": [
            "Seeker",
            "Flanker",
            "Mobility"
          ],
          "exactDescription": "Grants +1 Movement and Jump Climb when starting turn unharmed; attacking from behind or side inflicts P.DEF -20% and Dodge Disable."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Seeker Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Ciri Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Ciri is a S-Tier Seeker (Blink Dash Flanker) specialist in Sword of Convallaria. Teleports behind the target to deliver a 175% Physical backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-ciri"
    },
    {
      "externalId": "soc-unit-cocoa",
      "slug": "soc-cocoa",
      "nameEn": "Cocoa",
      "nameOriginal": "Cocoa",
      "styleOrTitle": "Legendary Defender • Crit/NRG Lunchbox Tank Healer",
      "rarity": "Legendary",
      "role": "Crit/NRG Lunchbox Tank Healer (Defender)",
      "roleColumn": "SUSTAIN",
      "element": "Defender",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Cocoa.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 5082,
        "dpOrSpeed": 187,
        "atkOrPower": 1368,
        "defOrGuts": 956,
        "critOrWit": 90,
        "burstCeilingScore": 74,
        "bufferCeilingScore": 85,
        "sustainScore": 96,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Snow Lotus Secret Potluck",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "AoE Heal + -1 NRG Cost & -1 Cooldown (Snow Lotus)",
          "hitCount": 3,
          "buffCategoryTags": [
            "Vanguard Cover Tank",
            "Snow Lotus CD -1",
            "30% Crit Breakfast",
            "Dispel"
          ],
          "exactDescription": "Opens her Treasure Potluck to heal allies within 2 tiles, applying Snow Lotus (-1 NRG Cost and -1 Turn Cooldown on all skills) and +30% Crit Rate."
        },
        {
          "name": "Trait: Treasure Box of Happiness",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait / Instant)",
          "multiplierSummary": "2-Tile Physical Cover + Auto-Heal & Breakfast Buffs",
          "hitCount": 1,
          "buffCategoryTags": [
            "Defender",
            "Physical",
            "Vanguard Cover Tank"
          ],
          "exactDescription": "Automatically takes Physical attacks for allies within 2 tiles, reduces damage taken by -30%, and heals the ally for 25% of Cocoa Max HP."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Iron Pot Stew",
          "effect": "At the end of every turn, heals 2 nearby allies and dispels 2 random debuffs."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "100% Snow Lotus Guarantee (5★ Trait)",
          "effect": "Increases proc rate of Snow Lotus (NRG -1 & Cooldown -1) from 30% at 1★ to 100% guaranteed at 5★."
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
      "summaryVerdict": "Cocoa (Defender) is a S-Tier Crit/NRG Lunchbox Tank Healer centerpiece. Opens her Treasure Potluck to heal allies within 2 tiles, applying Snow Lotus (-1 NRG Cost and -1 Turn Cooldown on all skills) and +30% Crit Rate.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-cocoa"
    },
    {
      "externalId": "soc-unit-falin",
      "slug": "soc-falin",
      "nameEn": "Falin",
      "nameOriginal": "Falin",
      "styleOrTitle": "Legendary Watcher • Barrier & Dispel Cleric",
      "rarity": "Legendary",
      "role": "Barrier & Dispel Cleric (Watcher)",
      "roleColumn": "SUSTAIN",
      "element": "Watcher",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0695.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4974,
        "dpOrSpeed": 188,
        "atkOrPower": 1296,
        "defOrGuts": 902,
        "critOrWit": 82,
        "burstCeilingScore": 74,
        "bufferCeilingScore": 85,
        "sustainScore": 96,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Falin — Bastion Aegis & Guardian Counter",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "2-Tile Allied Cover + -35% DMG Taken + 40% HP Shield",
          "hitCount": 1,
          "buffCategoryTags": [
            "2-Tile Cover Tank",
            "40% HP Shield",
            "Counter Stance",
            "Watcher"
          ],
          "exactDescription": "Falin enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield."
        },
        {
          "name": "Trait: Falin Unyielding Fortress",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Reaction)",
          "multiplierSummary": "Pre-emptive Counterstrike (110% P.DEF Scaling) + Knockback",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Cover Tank",
            "Counter"
          ],
          "exactDescription": "Reduces incoming AoE and Single-Target damage by -20% and counters melee attackers for 110% P.DEF-scaled Magical damage."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Watcher Tactical Mastery",
          "effect": "Reduces damage taken from all directions by -15% and grants immunity to Knockback."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Falin Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Falin is a S-Tier Watcher (Barrier & Dispel Cleric) specialist in Sword of Convallaria. Falin enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-falin"
    },
    {
      "externalId": "soc-unit-flavia",
      "slug": "soc-flavia",
      "nameEn": "Flavia",
      "nameOriginal": "Flavia",
      "styleOrTitle": "Legendary Watcher • Plant Summon & Field Healer",
      "rarity": "Legendary",
      "role": "Plant Summon & Field Healer (Watcher)",
      "roleColumn": "SUSTAIN",
      "element": "Watcher",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/05/IMG_9176.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 5076,
        "dpOrSpeed": 189,
        "atkOrPower": 1364,
        "defOrGuts": 953,
        "critOrWit": 83,
        "burstCeilingScore": 74,
        "bufferCeilingScore": 85,
        "sustainScore": 96,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Flavia — Bastion Aegis & Guardian Counter",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "2-Tile Allied Cover + -35% DMG Taken + 40% HP Shield",
          "hitCount": 1,
          "buffCategoryTags": [
            "2-Tile Cover Tank",
            "40% HP Shield",
            "Counter Stance",
            "Watcher"
          ],
          "exactDescription": "Flavia enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield."
        },
        {
          "name": "Trait: Flavia Unyielding Fortress",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Reaction)",
          "multiplierSummary": "Pre-emptive Counterstrike (110% P.DEF Scaling) + Knockback",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Cover Tank",
            "Counter"
          ],
          "exactDescription": "Reduces incoming AoE and Single-Target damage by -20% and counters melee attackers for 110% P.DEF-scaled Magical damage."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Watcher Tactical Mastery",
          "effect": "Reduces damage taken from all directions by -15% and grants immunity to Knockback."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Flavia Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Flavia is a S-Tier Watcher (Plant Summon & Field Healer) specialist in Sword of Convallaria. Flavia enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-flavia"
    },
    {
      "externalId": "soc-unit-gloria",
      "slug": "soc-gloria",
      "nameEn": "Gloria",
      "nameOriginal": "Gloria",
      "styleOrTitle": "Legendary Watcher • Flag Aura & NRG Buffer",
      "rarity": "Legendary",
      "role": "Flag Aura & NRG Buffer (Watcher)",
      "roleColumn": "SUPPORT",
      "element": "Watcher",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Gloria.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3862,
        "dpOrSpeed": 249,
        "atkOrPower": 1495,
        "defOrGuts": 646,
        "critOrWit": 83,
        "burstCeilingScore": 78,
        "bufferCeilingScore": 96,
        "sustainScore": 96,
        "spEfficiencyScore": 98
      },
      "skills": [
        {
          "name": "Longinus — Brilliance & Lance of Radiance",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "150% AoE Flag Throw + +1 Move & +2 NRG to All Allies",
          "hitCount": 3,
          "buffCategoryTags": [
            "Union Leader Aura",
            "Party NRG +1",
            "Movement +1 Flag",
            "Dual Stance"
          ],
          "exactDescription": "Hurls the Flag of Justice to deal 150% AoE Physical damage, restoring +1 NRG to all allies within 4 tiles and switching Gloria into Sword of Justice stance."
        },
        {
          "name": "Trait: Vow of Justice",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait / Instant)",
          "multiplierSummary": " Battle-Start Flag Aura (+12% ATK/DEF + +1 Move)",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Physical",
            "Union Leader Aura"
          ],
          "exactDescription": "Raises the Flag of Justice at the start of battle, granting all allies +1 Movement, +12% ATK, and +12% DEF while the flag stands."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Vow of Chivalry (Union Leader Aura)",
          "effect": "All Union allies gain +10% ATK, +20% DEF, and +15% damage when attacking from the front."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Radiant Flagbearer (5★ Trait)",
          "effect": "Increases Flag of Justice aura radius to 5 tiles and grants Gloria +50% DEF penetration."
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
      "summaryVerdict": "Gloria (Watcher) is a S-Tier Flag Aura & NRG Buffer centerpiece. Hurls the Flag of Justice to deal 150% AoE Physical damage, restoring +1 NRG to all allies within 4 tiles and switching Gloria into Sword of Justice stance.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-gloria"
    },
    {
      "externalId": "soc-unit-homa",
      "slug": "soc-homa",
      "nameEn": "Homa",
      "nameOriginal": "Homa",
      "styleOrTitle": "Legendary Breaker • Baloor Follow-Up & PDEF Shred",
      "rarity": "Legendary",
      "role": "Baloor Follow-Up & PDEF Shred (Breaker)",
      "roleColumn": "SUPPORT",
      "element": "Breaker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Homa.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4450,
        "dpOrSpeed": 235,
        "atkOrPower": 1580,
        "defOrGuts": 820,
        "critOrWit": 84,
        "burstCeilingScore": 78,
        "bufferCeilingScore": 96,
        "sustainScore": 96,
        "spEfficiencyScore": 98
      },
      "skills": [
        {
          "name": "Homa — Sacred Benediction & NRG Conduit",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "Party +2 NRG + ATK/M.ATK II (+20%) + 90% M.ATK AoE Heal",
          "hitCount": 1,
          "buffCategoryTags": [
            "NRG Battery +2",
            "ATK/M.ATK II",
            "AoE Dispel",
            "Breaker"
          ],
          "exactDescription": "Homa channels Breaker support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1."
        },
        {
          "name": "Trait: Homa Tactical Overwatch",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Passive Trait)",
          "multiplierSummary": "End-of-Turn Spot Heal + Buff Extension +1 Turn",
          "hitCount": 1,
          "buffCategoryTags": [
            "Breaker",
            "Healer",
            "Buff Extension"
          ],
          "exactDescription": "At the end of every turn, heals the 2 lowest-HP allies within 3 tiles for 30% M.ATK and grants Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Breaker Tactical Mastery",
          "effect": "Increases healing and buff range by +1 tile and grants DMG Up II (+20%) to healed allies."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Homa Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Homa is a S-Tier Breaker (Baloor Follow-Up & PDEF Shred) specialist in Sword of Convallaria. Homa channels Breaker support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-homa"
    },
    {
      "externalId": "soc-unit-inanna",
      "slug": "soc-inanna",
      "nameEn": "Inanna",
      "nameOriginal": "Inanna",
      "styleOrTitle": "Legendary Watcher • Act-Again Princess Healer",
      "rarity": "Legendary",
      "role": "Act-Again Princess Healer (Watcher)",
      "roleColumn": "SUPPORT",
      "element": "Watcher",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Inanna.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3858,
        "dpOrSpeed": 236,
        "atkOrPower": 1490,
        "defOrGuts": 644,
        "critOrWit": 85,
        "burstCeilingScore": 78,
        "bufferCeilingScore": 96,
        "sustainScore": 96,
        "spEfficiencyScore": 98
      },
      "skills": [
        {
          "name": "Inanna — Sacred Benediction & NRG Conduit",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "Party +2 NRG + ATK/M.ATK II (+20%) + 90% M.ATK AoE Heal",
          "hitCount": 1,
          "buffCategoryTags": [
            "NRG Battery +2",
            "ATK/M.ATK II",
            "AoE Dispel",
            "Watcher"
          ],
          "exactDescription": "Inanna channels Watcher support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1."
        },
        {
          "name": "Trait: Inanna Tactical Overwatch",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Passive Trait)",
          "multiplierSummary": "End-of-Turn Spot Heal + Buff Extension +1 Turn",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Healer",
            "Buff Extension"
          ],
          "exactDescription": "At the end of every turn, heals the 2 lowest-HP allies within 3 tiles for 30% M.ATK and grants Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Watcher Tactical Mastery",
          "effect": "Increases healing and buff range by +1 tile and grants DMG Up II (+20%) to healed allies."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Inanna Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Inanna is a S-Tier Watcher (Act-Again Princess Healer) specialist in Sword of Convallaria. Inanna channels Watcher support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-inanna"
    },
    {
      "externalId": "soc-unit-nonowill",
      "slug": "soc-nonowill",
      "nameEn": "NonoWill",
      "nameOriginal": "NonoWill",
      "styleOrTitle": "Legendary Seeker • Vulnerable III & AoE Veil",
      "rarity": "Legendary",
      "role": "Vulnerable III & AoE Veil (Seeker)",
      "roleColumn": "SUPPORT",
      "element": "Seeker",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/NonoWill.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3926,
        "dpOrSpeed": 269,
        "atkOrPower": 1575,
        "defOrGuts": 678,
        "critOrWit": 96,
        "burstCeilingScore": 78,
        "bufferCeilingScore": 96,
        "sustainScore": 96,
        "spEfficiencyScore": 98
      },
      "skills": [
        {
          "name": "NonoWill — Sacred Benediction & NRG Conduit",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "Party +2 NRG + ATK/M.ATK II (+20%) + 90% M.ATK AoE Heal",
          "hitCount": 1,
          "buffCategoryTags": [
            "NRG Battery +2",
            "ATK/M.ATK II",
            "AoE Dispel",
            "Seeker"
          ],
          "exactDescription": "NonoWill channels Seeker support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1."
        },
        {
          "name": "Trait: NonoWill Tactical Overwatch",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Passive Trait)",
          "multiplierSummary": "End-of-Turn Spot Heal + Buff Extension +1 Turn",
          "hitCount": 1,
          "buffCategoryTags": [
            "Seeker",
            "Healer",
            "Buff Extension"
          ],
          "exactDescription": "At the end of every turn, heals the 2 lowest-HP allies within 3 tiles for 30% M.ATK and grants Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Seeker Tactical Mastery",
          "effect": "Increases healing and buff range by +1 tile and grants DMG Up II (+20%) to healed allies."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened NonoWill Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "NonoWill is a S-Tier Seeker (Vulnerable III & AoE Veil) specialist in Sword of Convallaria. NonoWill channels Seeker support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-nonowill"
    },
    {
      "externalId": "soc-unit-beryl",
      "slug": "soc-beryl",
      "nameEn": "Beryl",
      "nameOriginal": "Beryl",
      "styleOrTitle": "Legendary Destroyer • Chuu-Chuu Single/AoE Mage",
      "rarity": "Legendary",
      "role": "Chuu-Chuu Single/AoE Mage (Destroyer)",
      "roleColumn": "DPS",
      "element": "Destroyer",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Beryl.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3685,
        "dpOrSpeed": 206,
        "atkOrPower": 1786,
        "defOrGuts": 642,
        "critOrWit": 89,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Chuu Chuu Chuu! & BOOOOM! Meteor",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 0 Turn CD",
          "multiplierSummary": "3-Hit 195% Single-Target Fireball / 170% AoE Scorch",
          "hitCount": 3,
          "buffCategoryTags": [
            "3-Hit Boss Nuker",
            "Self +1 NRG/Turn",
            "Scorch Tile Burn",
            "Aggression Aura"
          ],
          "exactDescription": "Fires 3 consecutive high-potency fireballs totaling 195% Magical damage against single bosses, or calls down a 170% AoE Meteor that leaves burning Scorch tiles."
        },
        {
          "name": "Trait: I Am a Genius!",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait / Instant)",
          "multiplierSummary": "+24% M.ATK + Free +1 NRG Every Turn",
          "hitCount": 1,
          "buffCategoryTags": [
            "Destroyer",
            "Magical",
            "3-Hit Boss Nuker"
          ],
          "exactDescription": "Increases M.ATK by +24%. At the start of every turn, automatically recovers +1 extra NRG and gains a random Level II buff."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Wall of Flame",
          "effect": "Ignites a 4-tile line of Scorch terrain that burns enemies for 20% Max HP and blocks infantry pathing."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Genius Sorceress (5★ Trait)",
          "effect": "Guarantees +1 bonus NRG and 2 random Level II buffs at the start of every single turn."
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
      "summaryVerdict": "Beryl (Destroyer) is a A-Tier Chuu-Chuu Single/AoE Mage centerpiece. Fires 3 consecutive high-potency fireballs totaling 195% Magical damage against single bosses, or calls down a 170% AoE Meteor that leaves burning Scorch tiles.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-beryl"
    },
    {
      "externalId": "soc-unit-caris",
      "slug": "soc-caris",
      "nameEn": "Caris",
      "nameOriginal": "Caris",
      "styleOrTitle": "Legendary Destroyer • Papal Laser & MDEF Shred",
      "rarity": "Legendary",
      "role": "Papal Laser & MDEF Shred (Destroyer)",
      "roleColumn": "SUPPORT",
      "element": "Destroyer",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Caris.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3922,
        "dpOrSpeed": 239,
        "atkOrPower": 1570,
        "defOrGuts": 676,
        "critOrWit": 90,
        "burstCeilingScore": 78,
        "bufferCeilingScore": 96,
        "sustainScore": 96,
        "spEfficiencyScore": 98
      },
      "skills": [
        {
          "name": "Caris — Sacred Benediction & NRG Conduit",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "Party +2 NRG + ATK/M.ATK II (+20%) + 90% M.ATK AoE Heal",
          "hitCount": 1,
          "buffCategoryTags": [
            "NRG Battery +2",
            "ATK/M.ATK II",
            "AoE Dispel",
            "Destroyer"
          ],
          "exactDescription": "Caris channels Destroyer support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1."
        },
        {
          "name": "Trait: Caris Tactical Overwatch",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Passive Trait)",
          "multiplierSummary": "End-of-Turn Spot Heal + Buff Extension +1 Turn",
          "hitCount": 1,
          "buffCategoryTags": [
            "Destroyer",
            "Healer",
            "Buff Extension"
          ],
          "exactDescription": "At the end of every turn, heals the 2 lowest-HP allies within 3 tiles for 30% M.ATK and grants Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Destroyer Tactical Mastery",
          "effect": "Increases healing and buff range by +1 tile and grants DMG Up II (+20%) to healed allies."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Caris Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Caris is a A-Tier Destroyer (Papal Laser & MDEF Shred) specialist in Sword of Convallaria. Caris channels Destroyer support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-caris"
    },
    {
      "externalId": "soc-unit-col",
      "slug": "soc-col",
      "nameEn": "Col",
      "nameOriginal": "Col",
      "styleOrTitle": "Legendary Seeker • Reset-on-Kill Assassin",
      "rarity": "Legendary",
      "role": "Reset-on-Kill Assassin (Seeker)",
      "roleColumn": "SUB_DPS",
      "element": "Seeker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Col.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3680,
        "dpOrSpeed": 272,
        "atkOrPower": 1780,
        "defOrGuts": 640,
        "critOrWit": 92,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Col — Shadowstep Backstab Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "175% Backstab Physical + +35% Crit Rate + 3-Tile Retreat",
          "hitCount": 3,
          "buffCategoryTags": [
            "Backline Assassin",
            "Ignore Block",
            "+35% Crit Burst",
            "Seeker"
          ],
          "exactDescription": "Teleports behind the target to deliver a 175% Physical backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety."
        },
        {
          "name": "Trait: Col Crimson Ambush",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Instant)",
          "multiplierSummary": "Jump Climb + +1 Movement + DEF Down II (-20%)",
          "hitCount": 1,
          "buffCategoryTags": [
            "Seeker",
            "Flanker",
            "Mobility"
          ],
          "exactDescription": "Grants +1 Movement and Jump Climb when starting turn unharmed; attacking from behind or side inflicts P.DEF -20% and Dodge Disable."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Seeker Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Col Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Col is a A-Tier Seeker (Reset-on-Kill Assassin) specialist in Sword of Convallaria. Teleports behind the target to deliver a 175% Physical backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-col"
    },
    {
      "externalId": "soc-unit-hasna",
      "slug": "soc-hasna",
      "nameEn": "Hasna",
      "nameOriginal": "Hasna",
      "styleOrTitle": "Legendary Seeker • Fragrance Crit Assassin",
      "rarity": "Legendary",
      "role": "Fragrance Crit Assassin (Seeker)",
      "roleColumn": "DPS",
      "element": "Seeker",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Hasna.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3765,
        "dpOrSpeed": 255,
        "atkOrPower": 1882,
        "defOrGuts": 674,
        "critOrWit": 93,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Hasna — Shadowstep Backstab Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "175% Backstab Magical + +35% Crit Rate + 3-Tile Retreat",
          "hitCount": 3,
          "buffCategoryTags": [
            "Backline Assassin",
            "Ignore Block",
            "+35% Crit Burst",
            "Seeker"
          ],
          "exactDescription": "Teleports behind the target to deliver a 175% Magical backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety."
        },
        {
          "name": "Trait: Hasna Crimson Ambush",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Instant)",
          "multiplierSummary": "Jump Climb + +1 Movement + DEF Down II (-20%)",
          "hitCount": 1,
          "buffCategoryTags": [
            "Seeker",
            "Flanker",
            "Mobility"
          ],
          "exactDescription": "Grants +1 Movement and Jump Climb when starting turn unharmed; attacking from behind or side inflicts P.DEF -20% and Dodge Disable."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Seeker Tactical Mastery",
          "effect": "Increases Magical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Hasna Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Hasna is a A-Tier Seeker (Fragrance Crit Assassin) specialist in Sword of Convallaria. Teleports behind the target to deliver a 175% Magical backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-hasna"
    },
    {
      "externalId": "soc-unit-kiya",
      "slug": "soc-kiya",
      "nameEn": "Kiya",
      "nameOriginal": "Kiya",
      "styleOrTitle": "Legendary Seeker • Frostbite Backline Diver",
      "rarity": "Legendary",
      "role": "Frostbite Backline Diver (Seeker)",
      "roleColumn": "SUB_DPS",
      "element": "Seeker",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0688.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3850,
        "dpOrSpeed": 256,
        "atkOrPower": 1984,
        "defOrGuts": 708,
        "critOrWit": 94,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Kiya — Shadowstep Backstab Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "175% Backstab Piercing + +35% Crit Rate + 3-Tile Retreat",
          "hitCount": 3,
          "buffCategoryTags": [
            "Backline Assassin",
            "Ignore Block",
            "+35% Crit Burst",
            "Seeker"
          ],
          "exactDescription": "Teleports behind the target to deliver a 175% Piercing backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety."
        },
        {
          "name": "Trait: Kiya Crimson Ambush",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Instant)",
          "multiplierSummary": "Jump Climb + +1 Movement + DEF Down II (-20%)",
          "hitCount": 1,
          "buffCategoryTags": [
            "Seeker",
            "Flanker",
            "Mobility"
          ],
          "exactDescription": "Grants +1 Movement and Jump Climb when starting turn unharmed; attacking from behind or side inflicts P.DEF -20% and Dodge Disable."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Seeker Tactical Mastery",
          "effect": "Increases Piercing damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Kiya Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Kiya is a A-Tier Seeker (Frostbite Backline Diver) specialist in Sword of Convallaria. Teleports behind the target to deliver a 175% Piercing backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-kiya"
    },
    {
      "externalId": "soc-unit-lilywill",
      "slug": "soc-lilywill",
      "nameEn": "LilyWill",
      "nameOriginal": "LilyWill",
      "styleOrTitle": "Legendary Watcher • Long-Range Highland Archer",
      "rarity": "Legendary",
      "role": "Long-Range Highland Archer (Watcher)",
      "roleColumn": "DPS",
      "element": "Watcher",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/LilyWill.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3760,
        "dpOrSpeed": 211,
        "atkOrPower": 1876,
        "defOrGuts": 672,
        "critOrWit": 84,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "LilyWill — Vanguard Armor-Shatter Cleave",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "180% Piercing Strike + 100% Shield Break + Knockback 2",
          "hitCount": 2,
          "buffCategoryTags": [
            "Shield Breaker",
            "Knockback Collision",
            "Armor Shred",
            "Watcher"
          ],
          "exactDescription": "LilyWill delivers a heavy 180% Piercing strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision."
        },
        {
          "name": "Trait: LilyWill Warlord Momentum",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+20% ATK/DEF + Instant Act-Again on Kill",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Shield Breaker",
            "Act Again"
          ],
          "exactDescription": "Increases P.ATK and P.DEF by +20%; defeating an enemy or breaking a boss shield restores +2 NRG and grants +2 Movement."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Watcher Tactical Mastery",
          "effect": "Increases Piercing damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened LilyWill Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "LilyWill is a A-Tier Watcher (Long-Range Highland Archer) specialist in Sword of Convallaria. LilyWill delivers a heavy 180% Piercing strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-lilywill"
    },
    {
      "externalId": "soc-unit-momo",
      "slug": "soc-momo",
      "nameEn": "Momo",
      "nameOriginal": "Momo",
      "styleOrTitle": "Legendary Destroyer • Doom Waken Alert Controller",
      "rarity": "Legendary",
      "role": "Doom Waken Alert Controller (Destroyer)",
      "roleColumn": "SUB_DPS",
      "element": "Destroyer",
      "attackType": "Piercing",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Momo.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3845,
        "dpOrSpeed": 212,
        "atkOrPower": 1978,
        "defOrGuts": 706,
        "critOrWit": 95,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Momo — Cataclysmic Arcane Detonation",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 1 Turn CD",
          "multiplierSummary": "165% AoE Piercing + -30% M.DEF Shred + Scorch Zone",
          "hitCount": 3,
          "buffCategoryTags": [
            "AoE Magic Carry",
            "M.DEF Shred -30%",
            "Shield Piercer",
            "Destroyer"
          ],
          "exactDescription": "Momo calls down an arcane tempest across a 3-tile diamond, dealing 165% Piercing damage, ignoring 30% M.DEF, and refunding +1 NRG on Critical Hit."
        },
        {
          "name": "Trait: Momo Astral Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+25% M.ATK + +1 NRG Recovery at 80%+ HP",
          "hitCount": 1,
          "buffCategoryTags": [
            "Destroyer",
            "Magical Carry",
            "NRG Regen"
          ],
          "exactDescription": "Increases Magical Attack by +25% and recovers +1 bonus NRG at the start of turn whenever HP is above 80%."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Destroyer Tactical Mastery",
          "effect": "Increases Piercing damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Momo Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Momo is a A-Tier Destroyer (Doom Waken Alert Controller) specialist in Sword of Convallaria. Momo calls down an arcane tempest across a 3-tile diamond, dealing 165% Piercing damage, ignoring 30% M.DEF, and refunding +1 NRG on Critical Hit.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-momo"
    },
    {
      "externalId": "soc-unit-nungal",
      "slug": "soc-nungal",
      "nameEn": "Nungal",
      "nameOriginal": "Nungal",
      "styleOrTitle": "Legendary Destroyer • Cross-Map Magic Sniper",
      "rarity": "Legendary",
      "role": "Cross-Map Magic Sniper (Destroyer)",
      "roleColumn": "DPS",
      "element": "Destroyer",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Nungal.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3755,
        "dpOrSpeed": 213,
        "atkOrPower": 1870,
        "defOrGuts": 670,
        "critOrWit": 88,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Nungal — Cataclysmic Arcane Detonation",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 1 Turn CD",
          "multiplierSummary": "165% AoE Magical + -30% M.DEF Shred + Scorch Zone",
          "hitCount": 3,
          "buffCategoryTags": [
            "AoE Magic Carry",
            "M.DEF Shred -30%",
            "Shield Piercer",
            "Destroyer"
          ],
          "exactDescription": "Nungal calls down an arcane tempest across a 3-tile diamond, dealing 165% Magical damage, ignoring 30% M.DEF, and refunding +1 NRG on Critical Hit."
        },
        {
          "name": "Trait: Nungal Astral Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+25% M.ATK + +1 NRG Recovery at 80%+ HP",
          "hitCount": 1,
          "buffCategoryTags": [
            "Destroyer",
            "Magical Carry",
            "NRG Regen"
          ],
          "exactDescription": "Increases Magical Attack by +25% and recovers +1 bonus NRG at the start of turn whenever HP is above 80%."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Destroyer Tactical Mastery",
          "effect": "Increases Magical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Nungal Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Nungal is a A-Tier Destroyer (Cross-Map Magic Sniper) specialist in Sword of Convallaria. Nungal calls down an arcane tempest across a 3-tile diamond, dealing 165% Magical damage, ignoring 30% M.DEF, and refunding +1 NRG on Critical Hit.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-nungal"
    },
    {
      "externalId": "soc-unit-rawiyah",
      "slug": "soc-rawiyah",
      "nameEn": "Rawiyah",
      "nameOriginal": "Rawiyah",
      "styleOrTitle": "Legendary Breaker • Gale Knockback Bruiser",
      "rarity": "Legendary",
      "role": "Gale Knockback Bruiser (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Breaker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Rawiyah.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4510,
        "dpOrSpeed": 223,
        "atkOrPower": 1972,
        "defOrGuts": 856,
        "critOrWit": 87,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Rawiyah — Vanguard Armor-Shatter Cleave",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "180% Physical Strike + 100% Shield Break + Knockback 2",
          "hitCount": 2,
          "buffCategoryTags": [
            "Shield Breaker",
            "Knockback Collision",
            "Armor Shred",
            "Breaker"
          ],
          "exactDescription": "Rawiyah delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision."
        },
        {
          "name": "Trait: Rawiyah Warlord Momentum",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+20% ATK/DEF + Instant Act-Again on Kill",
          "hitCount": 1,
          "buffCategoryTags": [
            "Breaker",
            "Shield Breaker",
            "Act Again"
          ],
          "exactDescription": "Increases P.ATK and P.DEF by +20%; defeating an enemy or breaking a boss shield restores +2 NRG and grants +2 Movement."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Breaker Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Rawiyah Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Rawiyah is a A-Tier Breaker (Gale Knockback Bruiser) specialist in Sword of Convallaria. Rawiyah delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-rawiyah"
    },
    {
      "externalId": "soc-unit-team-meteor",
      "slug": "soc-team-meteor",
      "nameEn": "Team Meteor",
      "nameOriginal": "Team Meteor",
      "styleOrTitle": "Legendary Breaker • Trio Combo Breaker",
      "rarity": "Legendary",
      "role": "Trio Combo Breaker (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Breaker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/05/IMG_9958.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4420,
        "dpOrSpeed": 210,
        "atkOrPower": 1864,
        "defOrGuts": 802,
        "critOrWit": 88,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Team Meteor — Vanguard Armor-Shatter Cleave",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "180% Physical Strike + 100% Shield Break + Knockback 2",
          "hitCount": 2,
          "buffCategoryTags": [
            "Shield Breaker",
            "Knockback Collision",
            "Armor Shred",
            "Breaker"
          ],
          "exactDescription": "Team Meteor delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision."
        },
        {
          "name": "Trait: Team Meteor Warlord Momentum",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+20% ATK/DEF + Instant Act-Again on Kill",
          "hitCount": 1,
          "buffCategoryTags": [
            "Breaker",
            "Shield Breaker",
            "Act Again"
          ],
          "exactDescription": "Increases P.ATK and P.DEF by +20%; defeating an enemy or breaking a boss shield restores +2 NRG and grants +2 Movement."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Breaker Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Team Meteor Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Team Meteor is a A-Tier Breaker (Trio Combo Breaker) specialist in Sword of Convallaria. Team Meteor delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-team-meteor"
    },
    {
      "externalId": "soc-unit-acambe",
      "slug": "soc-acambe",
      "nameEn": "Acambe",
      "nameOriginal": "Acambe",
      "styleOrTitle": "Legendary Destroyer • Shadow Assassin Summoner",
      "rarity": "Legendary",
      "role": "Shadow Assassin Summoner (Destroyer)",
      "roleColumn": "SUPPORT",
      "element": "Destroyer",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Acambe.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3974,
        "dpOrSpeed": 248,
        "atkOrPower": 1635,
        "defOrGuts": 702,
        "critOrWit": 91,
        "burstCeilingScore": 78,
        "bufferCeilingScore": 96,
        "sustainScore": 96,
        "spEfficiencyScore": 98
      },
      "skills": [
        {
          "name": "Acambe — Sacred Benediction & NRG Conduit",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "Party +2 NRG + ATK/M.ATK II (+20%) + 90% M.ATK AoE Heal",
          "hitCount": 1,
          "buffCategoryTags": [
            "NRG Battery +2",
            "ATK/M.ATK II",
            "AoE Dispel",
            "Destroyer"
          ],
          "exactDescription": "Acambe channels Destroyer support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1."
        },
        {
          "name": "Trait: Acambe Tactical Overwatch",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Passive Trait)",
          "multiplierSummary": "End-of-Turn Spot Heal + Buff Extension +1 Turn",
          "hitCount": 1,
          "buffCategoryTags": [
            "Destroyer",
            "Healer",
            "Buff Extension"
          ],
          "exactDescription": "At the end of every turn, heals the 2 lowest-HP allies within 3 tiles for 30% M.ATK and grants Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Destroyer Tactical Mastery",
          "effect": "Increases healing and buff range by +1 tile and grants DMG Up II (+20%) to healed allies."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Acambe Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Acambe is a A-Tier Destroyer (Shadow Assassin Summoner) specialist in Sword of Convallaria. Acambe channels Destroyer support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-acambe"
    },
    {
      "externalId": "soc-unit-afra",
      "slug": "soc-afra",
      "nameEn": "Afra",
      "nameOriginal": "Afra",
      "styleOrTitle": "Legendary Watcher • Deer Totem Healer",
      "rarity": "Legendary",
      "role": "Deer Totem Healer (Watcher)",
      "roleColumn": "SUSTAIN",
      "element": "Watcher",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0690.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 5028,
        "dpOrSpeed": 193,
        "atkOrPower": 1332,
        "defOrGuts": 929,
        "critOrWit": 90,
        "burstCeilingScore": 74,
        "bufferCeilingScore": 85,
        "sustainScore": 96,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Afra — Bastion Aegis & Guardian Counter",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "2-Tile Allied Cover + -35% DMG Taken + 40% HP Shield",
          "hitCount": 1,
          "buffCategoryTags": [
            "2-Tile Cover Tank",
            "40% HP Shield",
            "Counter Stance",
            "Watcher"
          ],
          "exactDescription": "Afra enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield."
        },
        {
          "name": "Trait: Afra Unyielding Fortress",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Reaction)",
          "multiplierSummary": "Pre-emptive Counterstrike (110% P.DEF Scaling) + Knockback",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Cover Tank",
            "Counter"
          ],
          "exactDescription": "Reduces incoming AoE and Single-Target damage by -20% and counters melee attackers for 110% P.DEF-scaled Magical damage."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Watcher Tactical Mastery",
          "effect": "Reduces damage taken from all directions by -15% and grants immunity to Knockback."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Afra Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Afra is a A-Tier Watcher (Deer Totem Healer) specialist in Sword of Convallaria. Afra enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-afra"
    },
    {
      "externalId": "soc-unit-edda",
      "slug": "soc-edda",
      "nameEn": "Edda",
      "nameOriginal": "Edda",
      "styleOrTitle": "Legendary Watcher • Wine Barrel MDEF Shred & Box",
      "rarity": "Legendary",
      "role": "Wine Barrel MDEF Shred & Box (Watcher)",
      "roleColumn": "SUPPORT",
      "element": "Watcher",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Edda.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3970,
        "dpOrSpeed": 235,
        "atkOrPower": 1630,
        "defOrGuts": 700,
        "critOrWit": 83,
        "burstCeilingScore": 78,
        "bufferCeilingScore": 96,
        "sustainScore": 96,
        "spEfficiencyScore": 98
      },
      "skills": [
        {
          "name": "Edda — Sacred Benediction & NRG Conduit",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "Party +2 NRG + ATK/M.ATK II (+20%) + 90% M.ATK AoE Heal",
          "hitCount": 1,
          "buffCategoryTags": [
            "NRG Battery +2",
            "ATK/M.ATK II",
            "AoE Dispel",
            "Watcher"
          ],
          "exactDescription": "Edda channels Watcher support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1."
        },
        {
          "name": "Trait: Edda Tactical Overwatch",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Passive Trait)",
          "multiplierSummary": "End-of-Turn Spot Heal + Buff Extension +1 Turn",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Healer",
            "Buff Extension"
          ],
          "exactDescription": "At the end of every turn, heals the 2 lowest-HP allies within 3 tiles for 30% M.ATK and grants Level II Attribute Buffs for 2 turns."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Watcher Tactical Mastery",
          "effect": "Increases healing and buff range by +1 tile and grants DMG Up II (+20%) to healed allies."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Edda Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Edda is a A-Tier Watcher (Wine Barrel MDEF Shred & Box) specialist in Sword of Convallaria. Edda channels Watcher support aura across a 3-tile radius, restoring +2 NRG, dispelling 2 debuffs, and granting +20% ATK/M.ATK II and Cooldown -1.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-edda"
    },
    {
      "externalId": "soc-unit-samantha",
      "slug": "soc-samantha",
      "nameEn": "Samantha",
      "nameOriginal": "Samantha",
      "styleOrTitle": "Legendary Watcher • Auto-Revive & Cross-Map Heal",
      "rarity": "Legendary",
      "role": "Auto-Revive & Cross-Map Heal (Watcher)",
      "roleColumn": "SUSTAIN",
      "element": "Watcher",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Samantha.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 5022,
        "dpOrSpeed": 195,
        "atkOrPower": 1328,
        "defOrGuts": 926,
        "critOrWit": 83,
        "burstCeilingScore": 74,
        "bufferCeilingScore": 85,
        "sustainScore": 96,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Samantha — Bastion Aegis & Guardian Counter",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "2-Tile Allied Cover + -35% DMG Taken + 40% HP Shield",
          "hitCount": 1,
          "buffCategoryTags": [
            "2-Tile Cover Tank",
            "40% HP Shield",
            "Counter Stance",
            "Watcher"
          ],
          "exactDescription": "Samantha enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield."
        },
        {
          "name": "Trait: Samantha Unyielding Fortress",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Reaction)",
          "multiplierSummary": "Pre-emptive Counterstrike (110% P.DEF Scaling) + Knockback",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Cover Tank",
            "Counter"
          ],
          "exactDescription": "Reduces incoming AoE and Single-Target damage by -20% and counters melee attackers for 110% P.DEF-scaled Magical damage."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Watcher Tactical Mastery",
          "effect": "Reduces damage taken from all directions by -15% and grants immunity to Knockback."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Samantha Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Samantha is a A-Tier Watcher (Auto-Revive & Cross-Map Heal) specialist in Sword of Convallaria. Samantha enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-samantha"
    },
    {
      "externalId": "soc-unit-schacklulu",
      "slug": "soc-schacklulu",
      "nameEn": "SchackLulu",
      "nameOriginal": "SchackLulu",
      "styleOrTitle": "Legendary Seeker • Dance Multi-Hit Dancer",
      "rarity": "Legendary",
      "role": "Dance Multi-Hit Dancer (Seeker)",
      "roleColumn": "SUB_DPS",
      "element": "Seeker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/06/IMG_0687.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3825,
        "dpOrSpeed": 266,
        "atkOrPower": 1954,
        "defOrGuts": 698,
        "critOrWit": 97,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "SchackLulu — Shadowstep Backstab Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "175% Backstab Physical + +35% Crit Rate + 3-Tile Retreat",
          "hitCount": 3,
          "buffCategoryTags": [
            "Backline Assassin",
            "Ignore Block",
            "+35% Crit Burst",
            "Seeker"
          ],
          "exactDescription": "Teleports behind the target to deliver a 175% Physical backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety."
        },
        {
          "name": "Trait: SchackLulu Crimson Ambush",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Instant)",
          "multiplierSummary": "Jump Climb + +1 Movement + DEF Down II (-20%)",
          "hitCount": 1,
          "buffCategoryTags": [
            "Seeker",
            "Flanker",
            "Mobility"
          ],
          "exactDescription": "Grants +1 Movement and Jump Climb when starting turn unharmed; attacking from behind or side inflicts P.DEF -20% and Dodge Disable."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Seeker Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened SchackLulu Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "SchackLulu is a A-Tier Seeker (Dance Multi-Hit Dancer) specialist in Sword of Convallaria. Teleports behind the target to deliver a 175% Physical backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-schacklulu"
    },
    {
      "externalId": "soc-unit-senshi",
      "slug": "soc-senshi",
      "nameEn": "Senshi",
      "nameOriginal": "Senshi",
      "styleOrTitle": "Legendary Defender • Hotpot Healing Tank",
      "rarity": "Legendary",
      "role": "Hotpot Healing Tank (Defender)",
      "roleColumn": "SUSTAIN",
      "element": "Defender",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/08/IMG_2307.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 5016,
        "dpOrSpeed": 185,
        "atkOrPower": 1324,
        "defOrGuts": 923,
        "critOrWit": 85,
        "burstCeilingScore": 74,
        "bufferCeilingScore": 85,
        "sustainScore": 96,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Senshi — Bastion Aegis & Guardian Counter",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "2-Tile Allied Cover + -35% DMG Taken + 40% HP Shield",
          "hitCount": 1,
          "buffCategoryTags": [
            "2-Tile Cover Tank",
            "40% HP Shield",
            "Counter Stance",
            "Defender"
          ],
          "exactDescription": "Senshi enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield."
        },
        {
          "name": "Trait: Senshi Unyielding Fortress",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Reaction)",
          "multiplierSummary": "Pre-emptive Counterstrike (110% P.DEF Scaling) + Knockback",
          "hitCount": 1,
          "buffCategoryTags": [
            "Defender",
            "Cover Tank",
            "Counter"
          ],
          "exactDescription": "Reduces incoming AoE and Single-Target damage by -20% and counters melee attackers for 110% P.DEF-scaled Physical damage."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Defender Tactical Mastery",
          "effect": "Reduces damage taken from all directions by -15% and grants immunity to Knockback."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Senshi Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Senshi is a A-Tier Defender (Hotpot Healing Tank) specialist in Sword of Convallaria. Senshi enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-senshi"
    },
    {
      "externalId": "soc-unit-simona",
      "slug": "soc-simona",
      "nameEn": "Simona",
      "nameOriginal": "Simona",
      "styleOrTitle": "Legendary Watcher • Ice Wall & Shield Battlemage",
      "rarity": "Legendary",
      "role": "Ice Wall & Shield Battlemage (Watcher)",
      "roleColumn": "SUB_DPS",
      "element": "Watcher",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Simona.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3820,
        "dpOrSpeed": 206,
        "atkOrPower": 1948,
        "defOrGuts": 696,
        "critOrWit": 86,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Simona — Vanguard Armor-Shatter Cleave",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "180% Magical Strike + 100% Shield Break + Knockback 2",
          "hitCount": 2,
          "buffCategoryTags": [
            "Shield Breaker",
            "Knockback Collision",
            "Armor Shred",
            "Watcher"
          ],
          "exactDescription": "Simona delivers a heavy 180% Magical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision."
        },
        {
          "name": "Trait: Simona Warlord Momentum",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+20% ATK/DEF + Instant Act-Again on Kill",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Shield Breaker",
            "Act Again"
          ],
          "exactDescription": "Increases P.ATK and P.DEF by +20%; defeating an enemy or breaking a boss shield restores +2 NRG and grants +2 Movement."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Watcher Tactical Mastery",
          "effect": "Increases Magical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Simona Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Simona is a A-Tier Watcher (Ice Wall & Shield Battlemage) specialist in Sword of Convallaria. Simona delivers a heavy 180% Magical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-simona"
    },
    {
      "externalId": "soc-unit-alexei",
      "slug": "soc-alexei",
      "nameEn": "Alexei",
      "nameOriginal": "Alexei",
      "styleOrTitle": "Legendary Defender • Unlimited Resolve Ice Tank",
      "rarity": "Legendary",
      "role": "Unlimited Resolve Ice Tank (Defender)",
      "roleColumn": "SUSTAIN",
      "element": "Defender",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Alexei.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 5010,
        "dpOrSpeed": 187,
        "atkOrPower": 1320,
        "defOrGuts": 920,
        "critOrWit": 87,
        "burstCeilingScore": 74,
        "bufferCeilingScore": 85,
        "sustainScore": 96,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Alexei — Bastion Aegis & Guardian Counter",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "2-Tile Allied Cover + -35% DMG Taken + 40% HP Shield",
          "hitCount": 1,
          "buffCategoryTags": [
            "2-Tile Cover Tank",
            "40% HP Shield",
            "Counter Stance",
            "Defender"
          ],
          "exactDescription": "Alexei enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield."
        },
        {
          "name": "Trait: Alexei Unyielding Fortress",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Reaction)",
          "multiplierSummary": "Pre-emptive Counterstrike (110% P.DEF Scaling) + Knockback",
          "hitCount": 1,
          "buffCategoryTags": [
            "Defender",
            "Cover Tank",
            "Counter"
          ],
          "exactDescription": "Reduces incoming AoE and Single-Target damage by -20% and counters melee attackers for 110% P.DEF-scaled Physical damage."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Defender Tactical Mastery",
          "effect": "Reduces damage taken from all directions by -15% and grants immunity to Knockback."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Alexei Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Alexei is a B-Tier Defender (Unlimited Resolve Ice Tank) specialist in Sword of Convallaria. Alexei enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-alexei"
    },
    {
      "externalId": "soc-unit-dantalion",
      "slug": "soc-dantalion",
      "nameEn": "Dantalion",
      "nameOriginal": "Dantalion",
      "styleOrTitle": "Legendary Destroyer • Iria Leader Aura Hybrid Carry",
      "rarity": "Legendary",
      "role": "Iria Leader Aura Hybrid Carry (Destroyer)",
      "roleColumn": "DPS",
      "element": "Destroyer",
      "attackType": "Magical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Dantalion.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3815,
        "dpOrSpeed": 208,
        "atkOrPower": 1942,
        "defOrGuts": 694,
        "critOrWit": 91,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Dantalion — Cataclysmic Arcane Detonation",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 1 Turn CD",
          "multiplierSummary": "165% AoE Magical + -30% M.DEF Shred + Scorch Zone",
          "hitCount": 3,
          "buffCategoryTags": [
            "AoE Magic Carry",
            "M.DEF Shred -30%",
            "Shield Piercer",
            "Destroyer"
          ],
          "exactDescription": "Dantalion calls down an arcane tempest across a 3-tile diamond, dealing 165% Magical damage, ignoring 30% M.DEF, and refunding +1 NRG on Critical Hit."
        },
        {
          "name": "Trait: Dantalion Astral Conduit",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+25% M.ATK + +1 NRG Recovery at 80%+ HP",
          "hitCount": 1,
          "buffCategoryTags": [
            "Destroyer",
            "Magical Carry",
            "NRG Regen"
          ],
          "exactDescription": "Increases Magical Attack by +25% and recovers +1 bonus NRG at the start of turn whenever HP is above 80%."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Destroyer Tactical Mastery",
          "effect": "Increases Magical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Dantalion Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Dantalion is a B-Tier Destroyer (Iria Leader Aura Hybrid Carry) specialist in Sword of Convallaria. Dantalion calls down an arcane tempest across a 3-tile diamond, dealing 165% Magical damage, ignoring 30% M.DEF, and refunding +1 NRG on Critical Hit.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-dantalion"
    },
    {
      "externalId": "soc-unit-faycal",
      "slug": "soc-faycal",
      "nameEn": "Faycal",
      "nameOriginal": "Faycal",
      "styleOrTitle": "Legendary Watcher • Alert Bow Overwatcher",
      "rarity": "Legendary",
      "role": "Alert Bow Overwatcher (Watcher)",
      "roleColumn": "SUB_DPS",
      "element": "Watcher",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Faycal.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3725,
        "dpOrSpeed": 209,
        "atkOrPower": 1834,
        "defOrGuts": 658,
        "critOrWit": 89,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Faycal — Vanguard Armor-Shatter Cleave",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "180% Physical Strike + 100% Shield Break + Knockback 2",
          "hitCount": 2,
          "buffCategoryTags": [
            "Shield Breaker",
            "Knockback Collision",
            "Armor Shred",
            "Watcher"
          ],
          "exactDescription": "Faycal delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision."
        },
        {
          "name": "Trait: Faycal Warlord Momentum",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+20% ATK/DEF + Instant Act-Again on Kill",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Shield Breaker",
            "Act Again"
          ],
          "exactDescription": "Increases P.ATK and P.DEF by +20%; defeating an enemy or breaking a boss shield restores +2 NRG and grants +2 Movement."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Watcher Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Faycal Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Faycal is a B-Tier Watcher (Alert Bow Overwatcher) specialist in Sword of Convallaria. Faycal delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-faycal"
    },
    {
      "externalId": "soc-unit-garcia",
      "slug": "soc-garcia",
      "nameEn": "Garcia",
      "nameOriginal": "Garcia",
      "styleOrTitle": "Legendary Seeker • Spinning Saw Executioner",
      "rarity": "Legendary",
      "role": "Spinning Saw Executioner (Seeker)",
      "roleColumn": "DPS",
      "element": "Seeker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Garcia.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3810,
        "dpOrSpeed": 272,
        "atkOrPower": 1936,
        "defOrGuts": 692,
        "critOrWit": 96,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 94
      },
      "skills": [
        {
          "name": "Garcia — Shadowstep Backstab Execution",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "175% Backstab Physical + +35% Crit Rate + 3-Tile Retreat",
          "hitCount": 3,
          "buffCategoryTags": [
            "Backline Assassin",
            "Ignore Block",
            "+35% Crit Burst",
            "Seeker"
          ],
          "exactDescription": "Teleports behind the target to deliver a 175% Physical backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety."
        },
        {
          "name": "Trait: Garcia Crimson Ambush",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Instant)",
          "multiplierSummary": "Jump Climb + +1 Movement + DEF Down II (-20%)",
          "hitCount": 1,
          "buffCategoryTags": [
            "Seeker",
            "Flanker",
            "Mobility"
          ],
          "exactDescription": "Grants +1 Movement and Jump Climb when starting turn unharmed; attacking from behind or side inflicts P.DEF -20% and Dodge Disable."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Seeker Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Garcia Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Garcia is a B-Tier Seeker (Spinning Saw Executioner) specialist in Sword of Convallaria. Teleports behind the target to deliver a 175% Physical backstab that ignores enemy Block and Reaction skills, then re-positions 3 tiles to safety.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-garcia"
    },
    {
      "externalId": "soc-unit-guzman",
      "slug": "soc-guzman",
      "nameEn": "Guzman",
      "nameOriginal": "Guzman",
      "styleOrTitle": "Legendary Breaker • Calamity Revive Bruiser",
      "rarity": "Legendary",
      "role": "Calamity Revive Bruiser (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Breaker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Guzman.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4390,
        "dpOrSpeed": 222,
        "atkOrPower": 1828,
        "defOrGuts": 784,
        "critOrWit": 82,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Guzman — Vanguard Armor-Shatter Cleave",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "180% Physical Strike + 100% Shield Break + Knockback 2",
          "hitCount": 2,
          "buffCategoryTags": [
            "Shield Breaker",
            "Knockback Collision",
            "Armor Shred",
            "Breaker"
          ],
          "exactDescription": "Guzman delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision."
        },
        {
          "name": "Trait: Guzman Warlord Momentum",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+20% ATK/DEF + Instant Act-Again on Kill",
          "hitCount": 1,
          "buffCategoryTags": [
            "Breaker",
            "Shield Breaker",
            "Act Again"
          ],
          "exactDescription": "Increases P.ATK and P.DEF by +20%; defeating an enemy or breaking a boss shield restores +2 NRG and grants +2 Movement."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Breaker Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Guzman Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Guzman is a B-Tier Breaker (Calamity Revive Bruiser) specialist in Sword of Convallaria. Guzman delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-guzman"
    },
    {
      "externalId": "soc-unit-iggy",
      "slug": "soc-iggy",
      "nameEn": "Iggy",
      "nameOriginal": "Iggy",
      "styleOrTitle": "Legendary Breaker • Highland Leap Lancer",
      "rarity": "Legendary",
      "role": "Highland Leap Lancer (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Breaker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Iggy.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4475,
        "dpOrSpeed": 223,
        "atkOrPower": 1930,
        "defOrGuts": 835,
        "critOrWit": 83,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Iggy — Vanguard Armor-Shatter Cleave",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "180% Physical Strike + 100% Shield Break + Knockback 2",
          "hitCount": 2,
          "buffCategoryTags": [
            "Shield Breaker",
            "Knockback Collision",
            "Armor Shred",
            "Breaker"
          ],
          "exactDescription": "Iggy delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision."
        },
        {
          "name": "Trait: Iggy Warlord Momentum",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+20% ATK/DEF + Instant Act-Again on Kill",
          "hitCount": 1,
          "buffCategoryTags": [
            "Breaker",
            "Shield Breaker",
            "Act Again"
          ],
          "exactDescription": "Increases P.ATK and P.DEF by +20%; defeating an enemy or breaking a boss shield restores +2 NRG and grants +2 Movement."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Breaker Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Iggy Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Iggy is a B-Tier Breaker (Highland Leap Lancer) specialist in Sword of Convallaria. Iggy delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-iggy"
    },
    {
      "externalId": "soc-unit-leonide",
      "slug": "soc-leonide",
      "nameEn": "Leonide",
      "nameOriginal": "Leonide",
      "styleOrTitle": "Legendary Breaker • Cavalry Charge Knockback",
      "rarity": "Legendary",
      "role": "Cavalry Charge Knockback (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Breaker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Leonide.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4385,
        "dpOrSpeed": 210,
        "atkOrPower": 1822,
        "defOrGuts": 781,
        "critOrWit": 84,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Leonide — Vanguard Armor-Shatter Cleave",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "180% Physical Strike + 100% Shield Break + Knockback 2",
          "hitCount": 2,
          "buffCategoryTags": [
            "Shield Breaker",
            "Knockback Collision",
            "Armor Shred",
            "Breaker"
          ],
          "exactDescription": "Leonide delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision."
        },
        {
          "name": "Trait: Leonide Warlord Momentum",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+20% ATK/DEF + Instant Act-Again on Kill",
          "hitCount": 1,
          "buffCategoryTags": [
            "Breaker",
            "Shield Breaker",
            "Act Again"
          ],
          "exactDescription": "Increases P.ATK and P.DEF by +20%; defeating an enemy or breaking a boss shield restores +2 NRG and grants +2 Movement."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Breaker Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Leonide Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Leonide is a B-Tier Breaker (Cavalry Charge Knockback) specialist in Sword of Convallaria. Leonide delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-leonide"
    },
    {
      "externalId": "soc-unit-miguel",
      "slug": "soc-miguel",
      "nameEn": "Miguel",
      "nameOriginal": "Miguel",
      "styleOrTitle": "Legendary Watcher • Bounty Fire Trap Hunter",
      "rarity": "Legendary",
      "role": "Bounty Fire Trap Hunter (Watcher)",
      "roleColumn": "SUB_DPS",
      "element": "Watcher",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Miguel.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 3800,
        "dpOrSpeed": 214,
        "atkOrPower": 1924,
        "defOrGuts": 688,
        "critOrWit": 85,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Miguel — Vanguard Armor-Shatter Cleave",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "180% Physical Strike + 100% Shield Break + Knockback 2",
          "hitCount": 2,
          "buffCategoryTags": [
            "Shield Breaker",
            "Knockback Collision",
            "Armor Shred",
            "Watcher"
          ],
          "exactDescription": "Miguel delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision."
        },
        {
          "name": "Trait: Miguel Warlord Momentum",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+20% ATK/DEF + Instant Act-Again on Kill",
          "hitCount": 1,
          "buffCategoryTags": [
            "Watcher",
            "Shield Breaker",
            "Act Again"
          ],
          "exactDescription": "Increases P.ATK and P.DEF by +20%; defeating an enemy or breaking a boss shield restores +2 NRG and grants +2 Movement."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Watcher Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Miguel Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Miguel is a B-Tier Watcher (Bounty Fire Trap Hunter) specialist in Sword of Convallaria. Miguel delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-miguel"
    },
    {
      "externalId": "soc-unit-xavier",
      "slug": "soc-xavier",
      "nameEn": "Xavier",
      "nameOriginal": "Xavier",
      "styleOrTitle": "Legendary Breaker • Turn-1 Speed AoE Sweeper",
      "rarity": "Legendary",
      "role": "Turn-1 Speed AoE Sweeper (Breaker)",
      "roleColumn": "SUB_DPS",
      "element": "Breaker",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Xavier.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4380,
        "dpOrSpeed": 212,
        "atkOrPower": 1816,
        "defOrGuts": 778,
        "critOrWit": 86,
        "burstCeilingScore": 91,
        "bufferCeilingScore": 74,
        "sustainScore": 79,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Xavier — Vanguard Armor-Shatter Cleave",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "3 NRG / 2 Turn CD",
          "multiplierSummary": "180% Physical Strike + 100% Shield Break + Knockback 2",
          "hitCount": 2,
          "buffCategoryTags": [
            "Shield Breaker",
            "Knockback Collision",
            "Armor Shred",
            "Breaker"
          ],
          "exactDescription": "Xavier delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision."
        },
        {
          "name": "Trait: Xavier Warlord Momentum",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Trait)",
          "multiplierSummary": "+20% ATK/DEF + Instant Act-Again on Kill",
          "hitCount": 1,
          "buffCategoryTags": [
            "Breaker",
            "Shield Breaker",
            "Act Again"
          ],
          "exactDescription": "Increases P.ATK and P.DEF by +20%; defeating an enemy or breaking a boss shield restores +2 NRG and grants +2 Movement."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Breaker Tactical Mastery",
          "effect": "Increases Physical damage by +20% and ignores 25% of target DEF/M.DEF during boss trials."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Xavier Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Xavier is a B-Tier Breaker (Turn-1 Speed AoE Sweeper) specialist in Sword of Convallaria. Xavier delivers a heavy 180% Physical strike that instantly shatters enemy Physical Shields, inflicts -25% P.DEF II, and knocks the target back 2 tiles into terrain collision.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-xavier"
    },
    {
      "externalId": "soc-unit-maitha",
      "slug": "soc-maitha",
      "nameEn": "Maitha",
      "nameOriginal": "Maitha",
      "styleOrTitle": "Legendary Defender • Come On Everybody Cover Tank",
      "rarity": "Legendary",
      "role": "Come On Everybody Cover Tank (Defender)",
      "roleColumn": "SUSTAIN",
      "element": "Defender",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Maitha.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 5088,
        "dpOrSpeed": 196,
        "atkOrPower": 1372,
        "defOrGuts": 959,
        "critOrWit": 87,
        "burstCeilingScore": 74,
        "bufferCeilingScore": 85,
        "sustainScore": 96,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Maitha — Bastion Aegis & Guardian Counter",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "2-Tile Allied Cover + -35% DMG Taken + 40% HP Shield",
          "hitCount": 1,
          "buffCategoryTags": [
            "2-Tile Cover Tank",
            "40% HP Shield",
            "Counter Stance",
            "Defender"
          ],
          "exactDescription": "Maitha enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield."
        },
        {
          "name": "Trait: Maitha Unyielding Fortress",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Reaction)",
          "multiplierSummary": "Pre-emptive Counterstrike (110% P.DEF Scaling) + Knockback",
          "hitCount": 1,
          "buffCategoryTags": [
            "Defender",
            "Cover Tank",
            "Counter"
          ],
          "exactDescription": "Reduces incoming AoE and Single-Target damage by -20% and counters melee attackers for 110% P.DEF-scaled Physical damage."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Defender Tactical Mastery",
          "effect": "Reduces damage taken from all directions by -15% and grants immunity to Knockback."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Maitha Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Maitha is a B-Tier Defender (Come On Everybody Cover Tank) specialist in Sword of Convallaria. Maitha enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-maitha"
    },
    {
      "externalId": "soc-unit-nergal",
      "slug": "soc-nergal",
      "nameEn": "Nergal",
      "nameOriginal": "Nergal",
      "styleOrTitle": "Legendary Defender • Alacrity Shield Vanguard",
      "rarity": "Legendary",
      "role": "Alacrity Shield Vanguard (Defender)",
      "roleColumn": "SUSTAIN",
      "element": "Defender",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Nergal.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 4980,
        "dpOrSpeed": 185,
        "atkOrPower": 1300,
        "defOrGuts": 905,
        "critOrWit": 88,
        "burstCeilingScore": 74,
        "bufferCeilingScore": 85,
        "sustainScore": 96,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Nergal — Bastion Aegis & Guardian Counter",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "2-Tile Allied Cover + -35% DMG Taken + 40% HP Shield",
          "hitCount": 1,
          "buffCategoryTags": [
            "2-Tile Cover Tank",
            "40% HP Shield",
            "Counter Stance",
            "Defender"
          ],
          "exactDescription": "Nergal enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield."
        },
        {
          "name": "Trait: Nergal Unyielding Fortress",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Reaction)",
          "multiplierSummary": "Pre-emptive Counterstrike (110% P.DEF Scaling) + Knockback",
          "hitCount": 1,
          "buffCategoryTags": [
            "Defender",
            "Cover Tank",
            "Counter"
          ],
          "exactDescription": "Reduces incoming AoE and Single-Target damage by -20% and counters melee attackers for 110% P.DEF-scaled Physical damage."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Defender Tactical Mastery",
          "effect": "Reduces damage taken from all directions by -15% and grants immunity to Knockback."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Nergal Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Nergal is a B-Tier Defender (Alacrity Shield Vanguard) specialist in Sword of Convallaria. Nergal enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield.",
      "longevityNote": "Farmable to 5★ via the daily Memory Retrieval stage.",
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/units/soc-nergal"
    },
    {
      "externalId": "soc-unit-teadon",
      "slug": "soc-teadon",
      "nameEn": "Teadon",
      "nameOriginal": "Teadon",
      "styleOrTitle": "Legendary Defender • Wide-Cone Alert Shielder",
      "rarity": "Legendary",
      "role": "Wide-Cone Alert Shielder (Defender)",
      "roleColumn": "SUSTAIN",
      "element": "Defender",
      "attackType": "Physical",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/04/Teadon.webp",
      "releaseDateAsian": "2024-08-01",
      "releaseDateGlobal": "2025-01-15",
      "isReleasedGlobal": true,
      "longevityMonths": 7,
      "recommendedDupes": "1★ – 3★ Memory Shard",
      "baseStats": {
        "hpOrStamina": 5082,
        "dpOrSpeed": 186,
        "atkOrPower": 1368,
        "defOrGuts": 956,
        "critOrWit": 89,
        "burstCeilingScore": 74,
        "bufferCeilingScore": 85,
        "sustainScore": 96,
        "spEfficiencyScore": 90
      },
      "skills": [
        {
          "name": "Teadon — Bastion Aegis & Guardian Counter",
          "type": "EX_ULTIMATE",
          "spOrEnergyCost": "2 NRG / 2 Turn CD",
          "multiplierSummary": "2-Tile Allied Cover + -35% DMG Taken + 40% HP Shield",
          "hitCount": 1,
          "buffCategoryTags": [
            "2-Tile Cover Tank",
            "40% HP Shield",
            "Counter Stance",
            "Defender"
          ],
          "exactDescription": "Teadon enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield."
        },
        {
          "name": "Trait: Teadon Unyielding Fortress",
          "type": "ACTIVE",
          "spOrEnergyCost": "0 NRG (Reaction)",
          "multiplierSummary": "Pre-emptive Counterstrike (110% P.DEF Scaling) + Knockback",
          "hitCount": 1,
          "buffCategoryTags": [
            "Defender",
            "Cover Tank",
            "Counter"
          ],
          "exactDescription": "Reduces incoming AoE and Single-Target damage by -20% and counters melee attackers for 110% P.DEF-scaled Physical damage."
        }
      ],
      "passives": [
        {
          "unlockRank": "RK 7",
          "name": "Defender Tactical Mastery",
          "effect": "Reduces damage taken from all directions by -15% and grants immunity to Knockback."
        },
        {
          "unlockRank": "5★ Trait",
          "name": "Awakened Teadon Crest (5★)",
          "effect": "Maximizes trait multiplier scaling, grants +1 starting NRG on Turn 1, and reduces signature skill cooldown by -1 turn."
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
      "summaryVerdict": "Teadon is a B-Tier Defender (Wide-Cone Alert Shielder) specialist in Sword of Convallaria. Teadon enters Guardian Bulwark stance for 2 turns, intercepting all Physical and Ranged attacks targeting allies within 2 tiles while gaining -35% Damage Taken and a 40% Max HP Shield.",
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
      "nameEn": "Weaponry Trial I (Lv.70 Stage 10) — Judgement Tarot Arbiter",
      "modeName": "Weaponry Trial I",
      "difficultyLabel": "Stage 10 (Lv.70)",
      "imageUrl": "/boss-soc-dragon.jpg",
      "hpStat": "265,000 HP",
      "shieldOrDpStat": "Immune to Melee Counter & Knockback",
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
          "turnOrPhase": "Turns 1–3",
          "attackName": "Judgement Bolt & Halo Sweep",
          "damageType": "Single-Target + Row Magical",
          "counterAction": "Keep ATK Down II active at all times and bait the single-target bolt with a Magic Tank or Summon."
        }
      ],
      "strategySteps": [
        "Position ranged carries (Triss, Luvata, Nungal, Beryl) outside the 2-tile melee counter radius.",
        "Maintain continuous ATK Down II and MDEF Down II debuffs while SP Inanna and Taair battery NRG."
      ],
      "recommendedUnitSlugs": [
        "soc-sp-inanna",
        "soc-triss",
        "soc-luvata",
        "soc-taair",
        "soc-cocoa"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/bosses/weaponry-trial-1"
    },
    {
      "slug": "weaponry-trial-2-stage-10-lv70",
      "nameEn": "Weaponry Trial II (Lv.70 Stage 10) — Papal Executioner",
      "modeName": "Weaponry Trial II",
      "difficultyLabel": "Stage 10 (Lv.70)",
      "imageUrl": "/boss-soc-inquisitor.jpg",
      "hpStat": "280,000 HP",
      "shieldOrDpStat": "Summons Volatile Detonation Crystals",
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
          "counterAction": "Use AoE skills from SP Samantha, Kvare, or Yennefer to clear crystals while damaging the boss."
        }
      ],
      "strategySteps": [
        "Clear summoned crystals immediately using AoE skills before they detonate.",
        "Keep allies grouped within Cocoa and SP Inanna healing aura range."
      ],
      "recommendedUnitSlugs": [
        "soc-sp-samantha",
        "soc-kvare",
        "soc-sp-inanna",
        "soc-cocoa",
        "soc-yennefer"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/bosses/weaponry-trial-2"
    },
    {
      "slug": "weaponry-trial-3-stage-10-lv70",
      "nameEn": "Weaponry Trial III (Lv.70 Stage 10) — Calamity Dragon",
      "modeName": "Weaponry Trial III",
      "difficultyLabel": "Stage 10 (Lv.70)",
      "imageUrl": "/boss-soc-colossus.jpg",
      "hpStat": "290,000 HP",
      "shieldOrDpStat": "Stacking ATK/DEF Dragon Scales",
      "weaknesses": [
        "Buff Dispel",
        "Close-Range Melee Burst"
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
        "Strip the boss buffs every turn with Judgement Tarot or dispel skills while Auguste and Tristan burst."
      ],
      "recommendedUnitSlugs": [
        "soc-tristan",
        "soc-auguste",
        "soc-camelot",
        "soc-taair",
        "soc-sp-safiyyah"
      ],
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/bosses/weaponry-trial-3"
    }
  ],
  "banners": [
    {
      "slug": "soc-triss-witcher-collab",
      "bannerTitle": "The Witcher 3 Collaboration Pickup — Triss, Yennefer & Geralt",
      "bannerType": "COLLAB",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/12/IMG_5806.webp",
      "featuredNames": [
        "Triss",
        "Yennefer",
        "Geralt"
      ],
      "featuredUnitSlugs": [
        "soc-triss",
        "soc-yennefer",
        "soc-geralt"
      ],
      "asianStartDate": "2026-10-25",
      "asianEndDate": "2026-11-22",
      "estGlobalStartDate": "2026-11-20",
      "estGlobalEndDate": "2026-12-18",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "Limited collaboration banner featuring SS-Tier AoE Firestorm Sorceress Triss, Portal Utility Mage Yennefer, and Witcher Carry Geralt.",
      "pityCurrencyCost": 15000,
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/banners/triss-witcher-collab"
    },
    {
      "slug": "soc-sp-inanna-debut",
      "bannerTitle": "Fateful Debut Spotlight — SP Inanna & Lutfi",
      "bannerType": "FESTIVAL",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2024/08/image-144-1024x452.webp",
      "featuredNames": [
        "SP Inanna",
        "Lutfi"
      ],
      "featuredUnitSlugs": [
        "soc-sp-inanna",
        "soc-lutfi"
      ],
      "asianStartDate": "2026-11-05",
      "asianEndDate": "2026-11-26",
      "estGlobalStartDate": "2026-12-05",
      "estGlobalEndDate": "2026-12-26",
      "pullVerdict": "MUST_PULL",
      "verdictReasoning": "SP Inanna is the #1 SSS-Tier Act-Again & Faction Aura Support in Sword of Convallaria, paired with top Crit Seeker Lutfi.",
      "pityCurrencyCost": 15000,
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/banners/sp-inanna-debut"
    },
    {
      "slug": "soc-sp-samantha-kvare-dual",
      "bannerTitle": "Dual Destinies Pickup — SP Samantha & Kvare",
      "bannerType": "LIMITED",
      "imageUrl": "https://dotgg.gg/sword-of-convallaria/wp-content/uploads/sites/49/2025/12/IMG_5806.webp",
      "featuredNames": [
        "SP Samantha",
        "Kvare"
      ],
      "featuredUnitSlugs": [
        "soc-sp-samantha",
        "soc-kvare"
      ],
      "asianStartDate": "2026-11-18",
      "asianEndDate": "2026-12-09",
      "estGlobalStartDate": "2026-12-18",
      "estGlobalEndDate": "2027-01-08",
      "pullVerdict": "HIGH_VALUE",
      "verdictReasoning": "Highest-value dual banner pairing SSS AoE Judge SP Samantha with Piercing DoT Destroyer Kvare.",
      "pityCurrencyCost": 15000,
      "sourceUrl": "https://gachacrest.gg/sword-of-convallaria/banners/sp-samantha-kvare"
    }
  ]
};
