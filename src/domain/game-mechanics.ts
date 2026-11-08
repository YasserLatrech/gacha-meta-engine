import {
  HydratedUnit as GameHubUnitDTO,
  HydratedEquipment as GameHubEquipmentDTO,
} from '../application/services/meta-query.service';

export type InvestmentMode = 'F2P_LB0' | 'REC_LB1' | 'MAX_MLB';
export type DupeLevel = 'LB0' | 'LB1' | 'LB2' | 'LB3' | 'MLB';

export const DUPE_LEVELS: DupeLevel[] = ['LB0', 'LB1', 'LB2', 'LB3', 'MLB'];

export interface GameStatLabelConfig {
  hpOrStamina: { label: string; short: string; desc: string };
  dpOrSpeed: { label: string; short: string; desc: string };
  atkOrPower: { label: string; short: string; desc: string };
  defOrGuts: { label: string; short: string; desc: string };
  critOrWit: { label: string; short: string; desc: string };
  dupeSystemName: string;
  squadSize: number;
  dupeLabels: Record<DupeLevel, string>;
}

export function getGameStatLabels(gameSlug: string): GameStatLabelConfig {
  switch (gameSlug) {
    case 'heaven-burns-red':
      return {
        hpOrStamina: { label: 'DP Shield', short: 'DP', desc: 'Deflector Point barrier before HP damage' },
        dpOrSpeed: { label: 'STR / DEX', short: 'STR/DEX', desc: 'Primary offensive scaling for HP & DP multipliers' },
        atkOrPower: { label: 'VIT / SPR', short: 'VIT/SPR', desc: 'Defensive mitigation against Slash/Pierce/Crush' },
        defOrGuts: { label: 'INT (Potency)', short: 'INT', desc: 'Scales Skill ATK buff, heal, and debuff potency' },
        critOrWit: { label: 'LUK (Crit/Debuff)', short: 'LUK', desc: 'governs Critical Hit rate and status accuracy' },
        dupeSystemName: 'Limit Break (LB0–LB4)',
        squadSize: 6,
        dupeLabels: {
          LB0: 'LB0 (Base)',
          LB1: 'LB1 (+1 SP Vanguard)',
          LB2: 'LB2 (+Stats)',
          LB3: 'LB3 (Passive Unlock)',
          MLB: 'LB4 (Max +10% All)',
        },
      };
    case 'uma-musume':
      return {
        hpOrStamina: { label: 'Stamina', short: 'STA', desc: 'Endurance pool required for Mile/Medium/Long spurt' },
        dpOrSpeed: { label: 'Speed', short: 'SPD', desc: 'Top target velocity during the Final Leg spurt' },
        atkOrPower: { label: 'Power', short: 'POW', desc: 'Acceleration rate and uphill/overtaking strength' },
        defOrGuts: { label: 'Guts', short: 'GUT', desc: 'Last-spurt stamina consumption reduction & Spot Struggle' },
        critOrWit: { label: 'Wisdom (Wit)', short: 'WIT', desc: 'Skill activation rate, positioning, and downhill speed' },
        dupeSystemName: 'Star / Limit Break (0LB–MLB)',
        squadSize: 6,
        dupeLabels: {
          LB0: '3★ / 0LB (Base)',
          LB1: '1LB (Unlock Bonus)',
          LB2: '2LB (Race Bonus)',
          LB3: '3LB (Core Spike)',
          MLB: '5★ / 4LB (MLB Max)',
        },
      };
    case 'sword-of-convallaria':
      return {
        hpOrStamina: { label: 'Max HP', short: 'HP', desc: 'Total health pool & Highland survival threshold' },
        dpOrSpeed: { label: 'SPD (Turn Order)', short: 'SPD', desc: 'Initiative order in tactical timeline' },
        atkOrPower: { label: 'PATK / MATK', short: 'ATK', desc: 'Primary Physical or Magical attack scaling' },
        defOrGuts: { label: 'PDEF', short: 'PDEF', desc: 'Physical damage mitigation' },
        critOrWit: { label: 'MDEF / Crit', short: 'MDEF', desc: 'Magical defense and critical strike scaling' },
        dupeSystemName: 'Trait Awakening (1★–5★)',
        squadSize: 5,
        dupeLabels: {
          LB0: '1★ (Base Pull)',
          LB1: '2★ (Stat Boost)',
          LB2: '3★ (Core Trait Spike)',
          LB3: '4★ (Trait Upgrade)',
          MLB: '5★ (Max Trait)',
        },
      };
    default:
      return {
        hpOrStamina: { label: 'Max HP', short: 'HP', desc: 'Base survivability & barrier scaling' },
        dpOrSpeed: { label: 'SPD / Action', short: 'SPD', desc: 'Turn frequency and action gauge gain' },
        atkOrPower: { label: 'ATK Power', short: 'ATK', desc: 'Primary skill & Overdrive burst scaling' },
        defOrGuts: { label: 'DEF / Toughness', short: 'DEF', desc: 'Damage reduction & Break gauge resilience' },
        critOrWit: { label: 'Crit DMG %', short: 'CDMG', desc: 'Critical hit damage amplification' },
        dupeSystemName: 'Star Resonance (S0–S5)',
        squadSize: 5,
        dupeLabels: {
          LB0: 'S0 (Base)',
          LB1: 'S1 (Core Passive)',
          LB2: 'S2 (+Skill Lv)',
          LB3: 'S3 (Resonance Spike)',
          MLB: 'S5 (Max Resonance)',
        },
      };
  }
}

const TIER_ORDER = ['SSS', 'SS', 'S', 'A', 'B', 'C'] as const;

function shiftTier(tier: string, delta: number): string {
  const idx = TIER_ORDER.indexOf(tier as (typeof TIER_ORDER)[number]);
  if (idx === -1) return tier;
  const nextIdx = Math.max(0, Math.min(TIER_ORDER.length - 1, idx + delta));
  return TIER_ORDER[nextIdx] ?? tier;
}

export function computeInvestmentTier(
  gameSlug: string,
  unit: GameHubUnitDTO,
  baseTier: string,
  mode: InvestmentMode
): {
  adjustedTier: string;
  adjustedScore: number;
  badgeText: string;
  badgeColor: string;
  explanation: string;
} {
  const baseScore = unit.tiers.overallAsian.numericScore;
  const isDps = unit.tiers.overallAsian.roleColumn === 'DPS';
  const isSupport = unit.tiers.overallAsian.roleColumn === 'SUPPORT';
  const isSustain = unit.tiers.overallAsian.roleColumn === 'SUSTAIN';
  const needsDupe =
    unit.recommendedDupes.includes('LB1') ||
    unit.recommendedDupes.includes('LB3') ||
    unit.recommendedDupes.includes('3★') ||
    unit.recommendedDupes.includes('S1') ||
    isDps;

  if (mode === 'F2P_LB0') {
    if (isDps && needsDupe) {
      // High-cost DPS units drop 1 tier at LB0 without their SP/Trait/Stat breakpoint
      return {
        adjustedTier: shiftTier(baseTier, 1), // +1 index = 1 tier lower (e.g. SSS -> SS)
        adjustedScore: Number(Math.max(7.2, baseScore - 0.5).toFixed(1)),
        badgeText: gameSlug === 'heaven-burns-red' ? 'Wants LB1 (+1 SP)' : gameSlug === 'sword-of-convallaria' ? 'Wants 3★ Trait' : 'Dupe Reliant',
        badgeColor: '#B45309',
        explanation:
          gameSlug === 'heaven-burns-red'
            ? 'At LB0, lacks Vanguard +1 SP passive; requires extra backline turns before casting EX Skill.'
            : gameSlug === 'sword-of-convallaria'
              ? 'At 1★ Base, trait cooldown/NRG refund is locked behind 3★ Memory Shard farming.'
              : 'At Base LB0, stat ceiling is ~15% lower than LB1/3LB breakpoint.',
      };
    }
    return {
      adjustedTier: baseTier,
      adjustedScore: baseScore,
      badgeText: '✓ F2P Ready (LB0)',
      badgeColor: '#15803D',
      explanation: 'Full utility, field deployment, or sustain kit works immediately at 0 Dupes (LB0).',
    };
  }

  if (mode === 'MAX_MLB') {
    if (isDps || (isSupport && baseScore >= 9.3)) {
      return {
        adjustedTier: shiftTier(baseTier, -1), // -1 index = 1 tier higher (e.g. SS -> SSS)
        adjustedScore: Number(Math.min(10.0, baseScore + 0.3).toFixed(1)),
        badgeText: gameSlug === 'heaven-burns-red' ? 'LB3–LB4 Apex' : gameSlug === 'uma-musume' ? '5★ / MLB Peak' : '5★ Max Ceiling',
        badgeColor: '#991B1B',
        explanation: 'Unlocks maximum passive multiplier and stat scaling, reaching top endgame Score Attack ceiling.',
      };
    }
    return {
      adjustedTier: baseTier,
      adjustedScore: Number(Math.min(9.9, baseScore + 0.1).toFixed(1)),
      badgeText: isSustain ? 'Low Dupe Value' : 'Solid MLB Gain',
      badgeColor: '#3F3F46',
      explanation: 'Gains survivability stats at MLB, though core support/sustain utility is already unlocked by LB1.',
    };
  }

  // Default: REC_LB1
  return {
    adjustedTier: baseTier,
    adjustedScore: baseScore,
    badgeText: (unit.recommendedDupes.split('/')[0] ?? unit.recommendedDupes).trim(),
    badgeColor: '#1E40AF',
    explanation: `Evaluated at sweet-spot investment (${unit.recommendedDupes}).`,
  };
}

export function getUnitMicroTags(gameSlug: string, unit: GameHubUnitDTO): string[] {
  const tags: string[] = [];
  if (gameSlug === 'heaven-burns-red') {
    if (unit.role.includes('Admiral') || unit.role.includes('Buffer')) {
      tags.push(`${unit.element === 'None' ? 'Crit' : unit.element} Zone/Buff`);
      tags.push('SP / Mind Eye');
    } else if (unit.role.includes('Blaster')) {
      tags.push('Destruction 600%');
      tags.push('Multi-Hit OD');
    } else if (unit.role.includes('Breaker')) {
      tags.push('Anti-DP Nuke');
      tags.push(`${unit.element} Break`);
    } else if (unit.role.includes('Debuffer')) {
      tags.push('DEF Down 45%');
      tags.push('Fragile 50%');
    } else if (unit.role.includes('Healer') || unit.role.includes('Defender')) {
      tags.push('DP Revive/Heal');
      tags.push('Vanguard Guard');
    } else {
      tags.push('HP +50% EX');
      tags.push(`${unit.element} Carry`);
    }
  } else if (gameSlug === 'uma-musume') {
    tags.push(unit.element);
    if (unit.tiers.overallAsian.roleColumn === 'DPS') tags.push('Final Leg Accel');
    else if (unit.tiers.overallAsian.roleColumn === 'SUB_DPS') tags.push('Mid-Race Speed');
    else if (unit.tiers.overallAsian.roleColumn === 'SUPPORT') tags.push('Inherit / Gold');
    else tags.push('Stamina Recovery');
  } else if (gameSlug === 'sword-of-convallaria') {
    tags.push(unit.element);
    if (unit.tiers.overallAsian.roleColumn === 'DPS') tags.push('Burst Carry');
    else if (unit.tiers.overallAsian.roleColumn === 'SUB_DPS') tags.push('Shield Break');
    else if (unit.tiers.overallAsian.roleColumn === 'SUPPORT') tags.push('Aura / NRG +2');
    else tags.push('Cover / Dispel');
  } else {
    tags.push(unit.element);
    if (unit.tiers.overallAsian.roleColumn === 'DPS') tags.push('Overdrive Nuke');
    else if (unit.tiers.overallAsian.roleColumn === 'SUB_DPS') tags.push('Break Gauge');
    else if (unit.tiers.overallAsian.roleColumn === 'SUPPORT') tags.push('Action Advance');
    else tags.push('Team Barrier');
  }
  return tags.slice(0, 2);
}

// ============================================================================
// DEEP GAME-SPECIFIC BUILD DATA (Skill Trees, Buff Matrices, Career Events)
// ============================================================================
export interface SoCSkillTreeRank {
  rank: string;
  leftSkill: string;
  leftDesc: string;
  rightSkill: string;
  rightDesc: string;
  pick: 'LEFT' | 'RIGHT' | 'BOTH (Castalia)';
}

export interface UmaCareerEvent {
  eventTitle: string;
  topOption: string;
  topOutcome: string;
  bottomOption: string;
  bottomOutcome: string;
}

export interface HbrBuffLayerStatus {
  layerName: string;
  maxStackRule: string;
  status: 'PROVIDES' | 'SYNERGY_NEEDED';
  detail: string;
}

export interface UnitDeepBuildData {
  // Sword of Convallaria specific
  socSkillTree?: SoCSkillTreeRank[];
  socTarotWhisper?: { name: string; bonusEffect: string };
  socEngraving?: { combo: string; effect: string };
  socTraitPlan?: string;

  // Uma Musume specific
  umaAptitudes?: {
    surface: Array<{ label: string; grade: string }>;
    distance: Array<{ label: string; grade: string }>;
    style: Array<{ label: string; grade: string }>;
  };
  umaStatGrowth?: string;
  umaTargetStats?: string;
  umaCareerEvents?: UmaCareerEvent[];

  // Heaven Burns Red specific
  hbrBuffMatrix?: HbrBuffLayerStatus[];
  hbrSynthesisPriority?: string;
  hbrOrbRecommendation?: string;

  // Star Savior specific
  starResonancePair?: string;
  starBurstRotation?: string[];
}

export function getUnitDeepBuildGuide(gameSlug: string, unit: GameHubUnitDTO): UnitDeepBuildData {
  const elem = unit.element === 'None' ? 'Non-Elemental' : unit.element;

  if (gameSlug === 'sword-of-convallaria') {
    const isSupport = unit.tiers.overallAsian.roleColumn === 'SUPPORT';
    const isTank = unit.tiers.overallAsian.roleColumn === 'SUSTAIN';
    const isSub = unit.tiers.overallAsian.roleColumn === 'SUB_DPS';
    return {
      socTarotWhisper: isSupport
        ? {
            name: 'Guidance of the World / High Priestess',
            bonusEffect: 'Recovers +1 NRG and reduces all active skill cooldowns by -1 Turn when ending turn on Standby.',
          }
        : isTank
          ? {
              name: 'Hierophants Law / Fool Naive',
              bonusEffect: 'Increases Max HP by +20% and reduces AoE & Single-Target damage taken by -20%.',
            }
          : {
              name: 'Verdict of Justice / Temptation of the Devil',
              bonusEffect: 'Increases Critical Hit Rate by +15% and Critical Hit DMG by +15% (+30% ATK in prolonged boss trials).',
            },
      socEngraving: isSupport
        ? { combo: 'Cup + Wand (Cooldown & Buff Reset)', effect: '20% chance on cast to refund NRG cost and reduce skill cooldown by 2 turns.' }
        : isTank
          ? { combo: 'Wand + Pentacle (Physical/Magical Shield)', effect: 'Grants +15% DEF/MDEF and converts 12% of Max HP into an unbreakable start-of-battle shield.' }
          : { combo: 'Sword + Pentacle (Unharmed Burst +20%)', effect: 'Increases PATK/MATK by +12% and deals +8% bonus piercing damage while shielded or unharmed.' },
      socTraitPlan:
        unit.tiers.overallAsian.tierRank === 'SSS'
          ? 'Farm Memory Shards daily to 3★ (immediate power spike) → take to 5★ for permanent passive uptime.'
          : 'Stop at 3★ in Memory Shard Trial (unlocks 85% of trait efficiency) to save shards for SSS carries.',
      socSkillTree: [
        {
          rank: 'RK 1 (Passive / Utility)',
          leftSkill: isSupport ? `${unit.nameEn} Insight` : `${elem} Edge`,
          leftDesc: isSupport ? 'Heals lowest HP ally for 20% MATK after action.' : 'Increases Critical Rate by +15% before attacking.',
          rightSkill: 'Tactical Stride',
          rightDesc: 'Grants +1 Movement and Jump Climb for 2 turns.',
          pick: 'LEFT',
        },
        {
          rank: 'RK 3 (Core Active)',
          leftSkill: isTank ? 'Guardian Bulwark' : `${unit.nameEn} Assault`,
          leftDesc: isTank ? 'Assists allies within 2 tiles and gains -30% DMG Taken.' : 'Deals 140% single-target damage and inflicts PDEF/MDEF -20%.',
          rightSkill: isSupport ? 'Radiant Benediction' : 'Sweeping Cleave',
          rightDesc: isSupport ? 'Dispels 2 debuffs and grants ATK II (+20%) to 3 allies.' : 'Deals 95% AoE damage and knocks back 2 tiles.',
          pick: isSupport || isSub ? 'BOTH (Castalia)' : 'LEFT',
        },
        {
          rank: 'RK 5 (Reaction Passive)',
          leftSkill: 'Unyielding Counter',
          leftDesc: 'Reduces incoming ranged/melee damage by -25% and strikes back for 70% DMG.',
          rightSkill: 'Highland Advantage',
          rightDesc: 'Reduces damage taken by -8% (+20% when on Highland terrain).',
          pick: 'LEFT',
        },
        {
          rank: 'RK 7 (Leader Aura / Ultimate Setup)',
          leftSkill: `Convallaria ${elem} Aura`,
          leftDesc: 'Faction Leader Aura: All allies gain +10% ATK, +20% DEF, and +15% Crit DMG.',
          rightSkill: 'Overcharge Stance',
          rightDesc: 'Recovers +2 NRG immediately and grants DMG III (+30%) for 2 turns.',
          pick: unit.tiers.overallAsian.tierRank === 'SSS' ? 'BOTH (Castalia)' : 'LEFT',
        },
        {
          rank: 'RK 9 (Enhanced Basic Attack)',
          leftSkill: 'Armor-Piercing Strike',
          leftDesc: 'Basic attack deals 100% damage and ignores 25% of target DEF.',
          rightSkill: 'Energy Siphon Blow',
          rightDesc: 'Basic attack restores +1 additional NRG on Critical Hit.',
          pick: 'RIGHT',
        },
        {
          rank: 'RK 11 (Signature Ultimate)',
          leftSkill: `Signature: ${unit.nameEn} Finale`,
          leftDesc: isSupport
            ? 'Restores +3 NRG, grants Act Again, and applies DMG Up III to target ally.'
            : 'Deals 180% burst multiplier and executes targets below 30% HP.',
          rightSkill: 'Eternal Guard',
          rightDesc: 'Passive: Increases all stats by +8% at the start of turn.',
          pick: 'LEFT',
        },
      ],
    };
  }

  if (gameSlug === 'uma-musume') {
    const isShort = unit.element.includes('Short');
    const isMile = unit.element.includes('Mile');
    const isMed = unit.element.includes('Medium');
    const isLong = unit.element.includes('Long');
    const isDirt = unit.element.includes('Dirt');

    const isRunner = unit.role.includes('Runner');
    const isLeader = unit.role.includes('Leader');
    const isBetweener = unit.role.includes('Betweener');
    const isChaser = unit.role.includes('Chaser');

    return {
      umaAptitudes: {
        surface: [
          { label: 'Turf', grade: isDirt ? 'B' : 'A' },
          { label: 'Dirt', grade: isDirt ? 'A' : 'F' },
        ],
        distance: [
          { label: 'Short', grade: isShort ? 'A' : isMile ? 'B' : 'F' },
          { label: 'Mile', grade: isMile ? 'A' : isShort || isMed ? 'B' : 'E' },
          { label: 'Medium', grade: isMed ? 'A' : isLong || isMile ? 'B' : 'F' },
          { label: 'Long', grade: isLong ? 'A' : isMed ? 'B' : 'G' },
        ],
        style: [
          { label: 'Runner (Front)', grade: isRunner ? 'A' : isLeader ? 'B' : 'F' },
          { label: 'Leader (Pace)', grade: isLeader ? 'A' : isRunner || isBetweener ? 'B' : 'E' },
          { label: 'Betweener (Late)', grade: isBetweener ? 'A' : isLeader || isChaser ? 'B' : 'F' },
          { label: 'Chaser (End)', grade: isChaser ? 'A' : isBetweener ? 'B' : 'G' },
        ],
      },
      umaStatGrowth: isShort || isMile ? '+20% Speed / +10% Power' : isLong ? '+15% Speed / +15% Stamina' : '+15% Speed / +15% Wisdom',
      umaTargetStats:
        isLong
          ? '1700 SPD • 1250 STA (+1 Gold Recovery) • 1200 POW • 650 GUT • 1200 WIT'
          : isMed
            ? '1750 SPD • 1050 STA • 1250 POW • 650 GUT • 1250 WIT'
            : '1800 SPD • 750 STA • 1350 POW • 750 GUT • 1300 WIT',
      umaCareerEvents: [
        {
          eventTitle: `${unit.nameOriginal}: Trackside Intensity`,
          topOption: 'Push for maximum Final Corner velocity!',
          topOutcome: 'Speed +15, Power +10, Skill Pts +15 (90% Success / -10 Energy)',
          bottomOption: 'Focus on breathing and pace conservation.',
          bottomOutcome: 'Energy +25, Stamina +10, Mood +1 Stage (Safe Recovery)',
        },
        {
          eventTitle: 'Extra Autonomous Sprint Session',
          topOption: 'Run an extra uphill interval set',
          topOutcome: 'Power +15, Skill Hint Lv +2 (Costs -15 Energy, 15% chance Practice Perfect)',
          bottomOption: 'Stretch and ice down in the infirmary',
          bottomOutcome: 'Energy +30, clears negative status condition',
        },
        {
          eventTitle: 'Pre-G1 Strategy Meeting',
          topOption: 'Attack the inside rail on the final straight',
          topOutcome: 'Guts +12, Wisdom +12, Final Leg Acceleration Hint +1',
          bottomOption: 'Break out wide to avoid traffic block',
          bottomOutcome: 'Speed +12, Power +12, Overtaking Hint +1',
        },
      ],
    };
  }

  if (gameSlug === 'heaven-burns-red') {
    const isBuffer = unit.role.includes('Buffer') || unit.role.includes('Admiral');
    const isDebuffer = unit.role.includes('Debuffer');
    const isBlaster = unit.role.includes('Blaster');
    const isSustain = unit.tiers.overallAsian.roleColumn === 'SUSTAIN';
    const isDps = unit.tiers.overallAsian.roleColumn === 'DPS';

    return {
      hbrSynthesisPriority: isDps
        ? 'Roll +48 STR & +48 DEX on 6★ Elemental Ring/Earring (maximizes HP/DP EX potency cap).'
        : isDebuffer
          ? 'Roll +48 INT & +48 LUK on Euphoria Chain / Earring (hits Grade 140 debuff border).'
          : 'Roll +1,200 DP & +48 VIT/SPR across all slots to survive Grade 140 AoE cleaves.',
      hbrOrbRecommendation: isDps
        ? 'Orb of Critical Hits (Self Crit Rate +70% when running non-Crit buffer).'
        : isSustain
          ? 'Orb of Overdrive (Charges OD gauge during recovery turns).'
          : 'Orb of Softening (Adds emergency 30–45% DEF Down stack during OD turn).',
      hbrBuffMatrix: [
        {
          layerName: '1. Skill Attack Up (Max 2× Stack)',
          maxStackRule: 'Stacks up to 2 times (+170% total)',
          status: isBuffer || isDps ? 'PROVIDES' : 'SYNERGY_NEEDED',
          detail: isBuffer ? 'Provides 85% Party Skill ATK Up directly.' : 'Pair with an Admiral/Buffer for 2× Skill ATK stacks.',
        },
        {
          layerName: `2. ${elem} Elemental Skill ATK Up (Max 2× Stack)`,
          maxStackRule: 'Stacks up to 2 times (+160% total)',
          status: isBuffer && elem !== 'Non-Elemental' ? 'PROVIDES' : 'SYNERGY_NEEDED',
          detail: isBuffer && elem !== 'Non-Elemental' ? `Applies +80% ${elem} Skill ATK Up.` : `Pair with a dedicated ${elem} elemental buffer.`,
        },
        {
          layerName: '3. Critical Rate & Crit DMG (Max 2× Stack)',
          maxStackRule: '100% Crit Rate + 2× Crit DMG Up',
          status: isBuffer || isDps ? 'PROVIDES' : 'SYNERGY_NEEDED',
          detail: 'Bypasses boss flat border defense; mandatory for Grade 140 Score Attack.',
        },
        {
          layerName: `4. Large ${elem} Zone Field (1 Active Field)`,
          maxStackRule: '+50% to +65% Elemental Field',
          status: (isBuffer || isDps) && elem !== 'Non-Elemental' ? 'PROVIDES' : 'SYNERGY_NEEDED',
          detail: `Multiplies all ${elem} damage across the squad without expiring on hit.`,
        },
        {
          layerName: '5. Mind Eye & Funnel (Multi-Hit Bonus)',
          maxStackRule: '2× Mind Eye + 2× Funnel',
          status: isDps || isBuffer ? 'PROVIDES' : 'SYNERGY_NEEDED',
          detail: 'Mind Eye adds +50% Weakness Damage; Funnel adds extra hit counts.',
        },
        {
          layerName: `6. DEF Down & ${elem} DEF Down (Max 2× Each)`,
          maxStackRule: '2× Base DEF Down + 2× Elem DEF Down',
          status: isDebuffer ? 'PROVIDES' : 'SYNERGY_NEEDED',
          detail: isDebuffer ? `Inflicts 45% DEF Down + ${elem} Resistance Down during Overdrive.` : 'Requires a dedicated Debuffer on the nuke turn.',
        },
        {
          layerName: '7. Fragile (Weakness DMG Taken Up)',
          maxStackRule: 'Stacks up to 2 times (+100%)',
          status: isDebuffer ? 'PROVIDES' : 'SYNERGY_NEEDED',
          detail: 'Multiplicative weakness damage amplifier applied while boss DP is broken.',
        },
        {
          layerName: '8. Destruction Rate (300%–999% Cap)',
          maxStackRule: 'Stacked post-DP break via Blaster',
          status: isBlaster ? 'PROVIDES' : 'SYNERGY_NEEDED',
          detail: isBlaster ? 'Rapidly pushes Destruction Rate to 600%+ after DP break.' : 'Bring a Blaster if boss HP exceeds 25,000,000.',
        },
      ],
    };
  }

  // Star Savior
  return {
    starResonancePair:
      elem === 'Sun'
        ? 'Sun Advantage → Deals +30% Break & Skill DMG against Moon bosses; links with Star Arcana.'
        : elem === 'Moon'
          ? 'Moon Advantage → Deals +30% Break & Skill DMG against Star bosses; links with Sun Arcana.'
          : elem === 'Star'
            ? 'Star Advantage → Deals +30% Break & Skill DMG against Sun bosses; links with Moon Arcana.'
            : 'Order ⇄ Chaos Mutual Advantage → +35% Weakness Multiplier & +20% Overdrive Gauge gain.',
    starBurstRotation: [
      `Turn 1 (Setup): Cast ${unit.skills[1]?.name || 'Tactical Setup'} to pre-stack ${elem} Resonance and Action Gauge +20%.`,
      'Turn 2 (Break Phase): Trigger Ranger/Breaker multi-hit skill to shatter boss Toughness Bar (2.0× Break Vulnerability).',
      `Turn 3 (Overdrive Burst): Activate ${unit.skills[0]?.name || 'Starlight Burst'} at 100% Overdrive for maximum ${elem} multiplier.`,
    ],
  };
}

// ============================================================================
// LIVE SQUAD SYNERGY AUDIT & AUTO-TEAM BUILDER ENGINE
// ============================================================================
export interface SquadChecklistItem {
  label: string;
  passed: boolean;
  providerName: string | null;
  hint: string;
}

export interface SquadAuditResult {
  scorePercent: number;
  grade: 'SSS' | 'SS' | 'S' | 'A' | 'INCOMPLETE';
  checklist: SquadChecklistItem[];
  summaryAdvice: string;
}

export function auditSquadSynergy(gameSlug: string, squad: GameHubUnitDTO[]): SquadAuditResult {
  if (squad.length === 0) {
    return {
      scorePercent: 0,
      grade: 'INCOMPLETE',
      checklist: [],
      summaryAdvice: 'Click "⚡ Auto-Build From My Box" or "+ Squad" on any character card to test your team synergy.',
    };
  }

  const dps = squad.find((u) => u.tiers.overallAsian.roleColumn === 'DPS');
  const subDps = squad.find((u) => u.tiers.overallAsian.roleColumn === 'SUB_DPS');
  const support = squad.find((u) => u.tiers.overallAsian.roleColumn === 'SUPPORT');
  const sustain = squad.find((u) => u.tiers.overallAsian.roleColumn === 'SUSTAIN');

  // Dominant element in squad
  const elemCounts = new Map<string, number>();
  for (const u of squad) {
    if (u.element !== 'None') {
      elemCounts.set(u.element, (elemCounts.get(u.element) || 0) + 1);
    }
  }
  let topElem = squad[0]?.element || 'Fire';
  let topCount = 0;
  for (const [el, c] of elemCounts.entries()) {
    if (c > topCount) {
      topElem = el;
      topCount = c;
    }
  }
  const sameElemUnit = squad.find((u) => u.element === topElem && topCount >= 2);

  let checklist: SquadChecklistItem[] = [];

  if (gameSlug === 'heaven-burns-red') {
    const bufferCount = squad.filter((u) => u.tiers.overallAsian.roleColumn === 'SUPPORT').length;
    const debufferUnit = squad.find((u) => u.role.includes('Debuffer') || u.tiers.overallAsian.roleColumn === 'SUB_DPS');
    const blasterUnit = squad.find((u) => u.role.includes('Blaster') || u.tiers.overallAsian.roleColumn === 'SUB_DPS');
    checklist = [
      {
        label: 'Primary HP / DP Finisher (Attacker / Rider)',
        passed: Boolean(dps),
        providerName: dps?.nameOriginal || null,
        hint: 'Add at least 1 SSS/SS Attacker or Rider to convert buffs into a 1-turn Overdrive kill.',
      },
      {
        label: `Elemental Zone & Skill ATK Buffer (${topElem})`,
        passed: Boolean(support),
        providerName: support?.nameOriginal || null,
        hint: 'Add an Admiral or Buffer to deploy Large Elemental Field + Skill ATK Up.',
      },
      {
        label: 'Double-Stack Buff Engine (2+ Buffers)',
        passed: bufferCount >= 2,
        providerName: bufferCount >= 2 ? `${ bufferCount } Buffers Active` : null,
        hint: 'HBR buffs stack up to 2× — run 2 Buffers/Admirals for maximum damage.',
      },
      {
        label: 'DEF Down & Fragile Debuffer',
        passed: Boolean(debufferUnit),
        providerName: debufferUnit?.nameOriginal || null,
        hint: 'Add a Debuffer to apply 45% DEF Down + 50% Fragile during Overdrive.',
      },
      {
        label: 'Destruction Rate Blaster / Multi-Hit OD',
        passed: Boolean(blasterUnit),
        providerName: blasterUnit?.nameOriginal || null,
        hint: 'Add a Blaster to build Overdrive gauge and push Destruction Rate to 600%+.',
      },
      {
        label: 'DP Shield Sustain / Revive (Healer / Defender)',
        passed: Boolean(sustain),
        providerName: sustain?.nameOriginal || null,
        hint: 'Add a Healer or Defender so Grade 140 AoE attacks do not break your Vanguard DP.',
      },
    ];
  } else if (gameSlug === 'uma-musume') {
    const secondSupport = squad.filter((u) => u.tiers.overallAsian.roleColumn === 'SUPPORT' || u.tiers.overallAsian.roleColumn === 'DPS')[1];
    checklist = [
      {
        label: `Ace Runner / Pace Carry (${topElem})`,
        passed: Boolean(dps),
        providerName: dps?.nameOriginal || null,
        hint: 'Select your main Ace Trainee for Champions Meeting.',
      },
      {
        label: 'Final-Leg Acceleration Inherit / Sub-Ace',
        passed: Boolean(subDps),
        providerName: subDps?.nameOriginal || null,
        hint: 'Add a Late Surger / Pace parent with a compatible Final Corner acceleration unique.',
      },
      {
        label: 'Speed & Wisdom Support Core',
        passed: Boolean(support),
        providerName: support?.nameOriginal || null,
        hint: 'Include a high-tier Speed/Wisdom support for 1700+ Speed cap.',
      },
      {
        label: 'Stamina & Gold Recovery Sustain',
        passed: Boolean(sustain),
        providerName: sustain?.nameOriginal || null,
        hint: 'Ensure sufficient Stamina/Guts recovery so your Ace never gasses out.',
      },
      {
        label: `Distance Aptitude Alignment (${topElem})`,
        passed: topCount >= 2,
        providerName: sameElemUnit ? `${topCount}× ${topElem} Specialists` : null,
        hint: 'Match at least 2–3 units to the same target race distance.',
      },
      {
        label: 'Full 6-Slot Training / Team Roster',
        passed: squad.length >= 6 || Boolean(secondSupport),
        providerName: squad.length >= 6 ? '6/6 Slots Filled' : `${squad.length}/6 Slots`,
        hint: 'Fill all 6 squad slots for maximum team rating.',
      },
    ];
  } else if (gameSlug === 'sword-of-convallaria') {
    checklist = [
      {
        label: 'Faction Leader Aura & Primary Carry',
        passed: Boolean(dps),
        providerName: dps?.nameOriginal || null,
        hint: 'Add a top-tier Carry (e.g. SP Inanna, Kvare, Tristan, Auguste) to anchor damage.',
      },
      {
        label: 'Shield Breaker / Tactical Sub-DPS',
        passed: Boolean(subDps),
        providerName: subDps?.nameOriginal || null,
        hint: 'Add a Breaker/Seeker to flank backline mages and strip physical shields.',
      },
      {
        label: 'NRG Battery & Cooldown Support',
        passed: Boolean(support),
        providerName: support?.nameOriginal || null,
        hint: 'Add an NRG/Act-Again support (e.g. Taair, Credenza, Cocoa) to fuel 3-4 NRG skills.',
      },
      {
        label: 'Vanguard Cover Tank & Dispel Sustain',
        passed: Boolean(sustain),
        providerName: sustain?.nameOriginal || null,
        hint: 'Add a Watcher/Defender healer to cleanse boss debuffs and absorb single-target nukes.',
      },
      {
        label: 'Role Triangle Coverage (Watcher/Destroyer/Seeker/Breaker)',
        passed: elemCounts.size >= 3,
        providerName: elemCounts.size >= 3 ? `${elemCounts.size} Classes Covered` : null,
        hint: 'Mix at least 3 tactical classes so enemy role counters never wall your squad.',
      },
    ];
  } else {
    // Star Savior
    checklist = [
      {
        label: 'Overdrive Burst Striker (Main DPS)',
        passed: Boolean(dps),
        providerName: dps?.nameOriginal || null,
        hint: 'Add an SSS/SS Striker or Assassin to capitalize on boss Break windows.',
      },
      {
        label: 'Toughness Break Gauge Specialist (Ranger / Caster)',
        passed: Boolean(subDps),
        providerName: subDps?.nameOriginal || null,
        hint: 'Add a high hit-count Breaker to deplete boss Toughness in 2 turns.',
      },
      {
        label: 'Action Gauge & Crit Supporter',
        passed: Boolean(support),
        providerName: support?.nameOriginal || null,
        hint: 'Add a Supporter to advance turn order and buff Crit DMG.',
      },
      {
        label: 'Team Barrier & Taunt Defender',
        passed: Boolean(sustain),
        providerName: sustain?.nameOriginal || null,
        hint: 'Add a Defender/Healer to survive Phase 3 AoE boss ultimates.',
      },
      {
        label: `Elemental Resonance Link (${topElem})`,
        passed: topCount >= 2,
        providerName: sameElemUnit ? `${topCount}× ${topElem} Resonance` : null,
        hint: 'Pair at least 2 same-attribute saviors to activate +20% Elemental Link.',
      },
    ];
  }

  const passedCount = checklist.filter((c) => c.passed).length;
  const scorePercent = Math.round((passedCount / checklist.length) * 100);
  const grade =
    scorePercent >= 95 ? 'SSS' : scorePercent >= 80 ? 'SS' : scorePercent >= 60 ? 'S' : scorePercent >= 40 ? 'A' : 'INCOMPLETE';

  const missingItem = checklist.find((c) => !c.passed);
  const summaryAdvice = missingItem
    ? `Missing Role: ${missingItem.hint}`
    : `100% Optimal Synergy! All ${checklist.length} endgame combat layers are covered.`;

  return {
    scorePercent,
    grade,
    checklist,
    summaryAdvice,
  };
}

export function autoBuildOptimalSquad(
  gameSlug: string,
  candidatePool: GameHubUnitDTO[],
  preferredElement?: string
): GameHubUnitDTO[] {
  const maxSlots = getGameStatLabels(gameSlug).squadSize;
  if (candidatePool.length === 0) return [];

  // Sort candidates by score descending
  const sorted = [...candidatePool].sort(
    (a, b) => b.tiers.overallAsian.numericScore - a.tiers.overallAsian.numericScore
  );

  // Pick target element if specified, otherwise find the element with the strongest top carry + support
  let targetElem = preferredElement && preferredElement !== 'ALL' ? preferredElement : null;
  if (!targetElem && gameSlug !== 'sword-of-convallaria') {
    const topDps = sorted.find((u) => u.tiers.overallAsian.roleColumn === 'DPS' && u.element !== 'None');
    if (topDps) targetElem = topDps.element;
  }

  const chosen: GameHubUnitDTO[] = [];
  const pickRole = (roleCol: string, preferElem: boolean) => {
    if (chosen.length >= maxSlots) return;
    let found = preferElem && targetElem
      ? sorted.find((u) => u.tiers.overallAsian.roleColumn === roleCol && u.element === targetElem && !chosen.some((c) => c.slug === u.slug))
      : undefined;
    if (!found) {
      found = sorted.find((u) => u.tiers.overallAsian.roleColumn === roleCol && !chosen.some((c) => c.slug === u.slug));
    }
    if (found) chosen.push(found);
  };

  // Core balanced template: 1 DPS + 1 SUPPORT + 1 SUB_DPS + 1 SUSTAIN + remaining top synergy
  pickRole('DPS', true);
  pickRole('SUPPORT', true);
  pickRole('SUB_DPS', true);
  pickRole('SUSTAIN', false);
  if (maxSlots >= 5) pickRole('SUPPORT', false);
  if (maxSlots >= 6) pickRole('SUB_DPS', false);

  // Fill any remaining slots from highest-scoring remaining units
  for (const u of sorted) {
    if (chosen.length >= maxSlots) break;
    if (!chosen.some((c) => c.slug === u.slug)) {
      chosen.push(u);
    }
  }

  return chosen.slice(0, maxSlots);
}

// ============================================================================
// EQUIPMENT / SUPPORT CARD LIMIT BREAK BREAKPOINTS
// ============================================================================
export function getEquipmentLimitBreakTable(
  gameSlug: string,
  eq: GameHubEquipmentDTO
): Array<{ stage: string; bonus: string; verdict: string }> {
  if (gameSlug === 'uma-musume') {
    return [
      { stage: '0LB (Base)', bonus: '5% Training Effectiveness • +15 Friendship Bonus', verdict: 'Usable for Gold Skill only' },
      { stage: '1LB (Lv 35)', bonus: '+1 Initial Stat Bonus • +20 Specialty Priority', verdict: 'Unlocks base stat bonus' },
      { stage: '3LB (Lv 45)', bonus: '10% Training Effectiveness • +50 Specialty Priority • +10% Race Bonus', verdict: '★ F2P Sweet-Spot Breakpoint' },
      { stage: 'MLB (Lv 50)', bonus: '15% Training Effectiveness • +80 Specialty Priority • Max Initial Gauge', verdict: '🏆 Champions Meeting Apex' },
    ];
  }
  if (gameSlug === 'sword-of-convallaria') {
    return [
      { stage: '1★ (Base)', bonus: 'Base passive effect (Half scaling)', verdict: 'Immediate utility unlock' },
      { stage: '3★ (Mid)', bonus: '75% of max passive stat & proc chance', verdict: '★ Efficient Weaponry Trial stop' },
      { stage: '5★ (Max)', bonus: '100% passive stat multiplier & 100% trigger reliability', verdict: '🏆 Endgame BiS for main carry' },
    ];
  }
  if (gameSlug === 'heaven-burns-red') {
    return [
      { stage: '+0 Crafted', bonus: 'Base main stat + 3 random substat slots', verdict: 'Temporary starter gear' },
      { stage: '+4 Unlocked', bonus: 'All 3 substat slots unlocked (+37 STR/DEX/INT)', verdict: 'Solid mid-game threshold' },
      { stage: '+6 Max Synthesis', bonus: 'Max +48/+55 substat cap across all 3 slots', verdict: '🏆 Grade 140 Score Attack Standard' },
    ];
  }
  return [
    { stage: 'Lv 1 (Base)', bonus: 'Base Arcana passive & initial Resonance link', verdict: 'Usable immediately' },
    { stage: 'Break +2', bonus: '+25% Arcana Stat Bonus & +10% Link Gauge speed', verdict: '★ Recommended F2P target' },
    { stage: 'Max Break +5', bonus: '+50% Arcana Stat Bonus & Max Burst Multiplier', verdict: '🏆 Apex Raid Leaderboard' },
  ];
}
