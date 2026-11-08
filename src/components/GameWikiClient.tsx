'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { HydratedGameHub } from '../application/services/meta-query.service';
import {
  calculatePullSavings,
  evaluateCombatMultiplier,
  compareUnitStats,
} from '../domain/calculators/engine';
import {
  getGameAppIconUrl,
  getElementIconUrl,
  getRoleIconUrl,
  getAttackTypeIconUrl,
  getStatConceptIconUrl,
  getSkillConceptIconUrl,
} from '../domain/constants/game-visuals';
import { AdSlot } from './AdSlot';
import { SiteFooter } from './SiteFooter';
import { UnitDeepBuildSection } from './UnitDeepBuildSection';
import {
  InvestmentMode,
  DupeLevel,
  DUPE_LEVELS,
  getGameStatLabels,
  computeInvestmentTier,
  getUnitMicroTags,
  auditSquadSynergy,
  autoBuildOptimalSquad,
  getEquipmentLimitBreakTable,
} from '../domain/game-mechanics';

export type WikiTabKey = 'tier-list' | 'weapons' | 'bosses' | 'banners' | 'compare';
export type BannerPlanMode = 'SPARK' | 'HALF' | 'SKIP';

export function GameWikiClient({
  hub,
  initialTab = 'tier-list',
}: {
  hub: HydratedGameHub;
  initialTab?: WikiTabKey;
}) {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<WikiTabKey>(initialTab);

  // Sync tab with ?tab= URL query param when navigated from homepage or sidebar
  useEffect(() => {
    const qTab = searchParams.get('tab') as WikiTabKey | null;
    if (qTab && ['tier-list', 'weapons', 'bosses', 'banners', 'compare'].includes(qTab)) {
      setActiveTab(qTab);
    }
  }, [searchParams]);

  const statConfig = useMemo(() => getGameStatLabels(hub.slug), [hub.slug]);
  const boxStorageKey = `gachacrest_box_${hub.slug}`;
  const equipBoxStorageKey = `gachacrest_equip_box_${hub.slug}`;
  const squadStorageKey = `gachacrest_squad_${hub.slug}`;
  const bannerPlanStorageKey = `gachacrest_pull_plan_${hub.slug}`;

  // Tier List Filters & Investment Mode
  const [serverScope, setServerScope] = useState<'ASIAN_FUTURE' | 'GLOBAL_CURRENT'>('ASIAN_FUTURE');
  const [tierCategory, setTierCategory] = useState<'OVERALL' | 'REROLL' | 'BOSS_RAID'>('OVERALL');
  const [investmentMode, setInvestmentMode] = useState<InvestmentMode>('REC_LB1');
  const [ownershipFilter, setOwnershipFilter] = useState<'ALL' | 'OWNED' | 'MISSING'>('ALL');
  const [selectedElement, setSelectedElement] = useState<string>('ALL');
  const [unitSearch, setUnitSearch] = useState<string>('');
  const [showSavedOnly, setShowSavedOnly] = useState<boolean>(false);
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);

  // My Box / Roster & Dupes + Active Squad + Banner Pull Roadmap State
  const [ownedBoxMap, setOwnedBoxMap] = useState<Record<string, DupeLevel>>({});
  const [ownedEquipSlugs, setOwnedEquipSlugs] = useState<string[]>([]);
  const [activeSquadSlugs, setActiveSquadSlugs] = useState<string[]>([]);
  const [bannerPlanMap, setBannerPlanMap] = useState<Record<string, BannerPlanMode>>({});
  const [quickPeekSlug, setQuickPeekSlug] = useState<string | null>(null);
  const [backupNotice, setBackupNotice] = useState<string | null>(null);

  // Equipment Filters
  const [equipSearch, setEquipSearch] = useState<string>('');
  const [equipTierFilter, setEquipTierFilter] = useState<string>('ALL');

  useEffect(() => {
    try {
      const raw = localStorage.getItem('gachacrest_watchlist');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setSavedSlugs(parsed);
      }
      const rawBox = localStorage.getItem(boxStorageKey);
      if (rawBox) {
        const parsedBox = JSON.parse(rawBox);
        if (parsedBox && typeof parsedBox === 'object') setOwnedBoxMap(parsedBox);
      }
      const rawEqBox = localStorage.getItem(equipBoxStorageKey);
      if (rawEqBox) {
        const parsedEq = JSON.parse(rawEqBox);
        if (Array.isArray(parsedEq)) setOwnedEquipSlugs(parsedEq);
      }
      const rawSquad = localStorage.getItem(squadStorageKey);
      if (rawSquad) {
        const parsedSq = JSON.parse(rawSquad);
        if (Array.isArray(parsedSq) && parsedSq.length > 0) {
          setActiveSquadSlugs(parsedSq);
        } else {
          // Initialize with a balanced starter squad so the user immediately sees the live Buff Matrix in action
          const initialSquad = autoBuildOptimalSquad(hub.slug, hub.units).map((u) => u.slug);
          setActiveSquadSlugs(initialSquad);
        }
      } else {
        const initialSquad = autoBuildOptimalSquad(hub.slug, hub.units).map((u) => u.slug);
        setActiveSquadSlugs(initialSquad);
      }
      const rawPlan = localStorage.getItem(bannerPlanStorageKey);
      if (rawPlan) {
        const parsedPlan = JSON.parse(rawPlan);
        if (parsedPlan && typeof parsedPlan === 'object') setBannerPlanMap(parsedPlan);
      } else if (hub.banners[0]) {
        setBannerPlanMap({ [hub.banners[0].slug]: 'SPARK' });
      }
    } catch {
      // Ignore storage access errors
    }
  }, [boxStorageKey, equipBoxStorageKey, squadStorageKey, bannerPlanStorageKey, hub.slug, hub.units, hub.banners]);

  const toggleSaveUnit = (slug: string) => {
    setSavedSlugs((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      try {
        localStorage.setItem('gachacrest_watchlist', JSON.stringify(next));
      } catch {
        // Ignore storage write errors
      }
      return next;
    });
  };

  const toggleOwnedUnit = (slug: string) => {
    setOwnedBoxMap((prev) => {
      const next = { ...prev };
      if (next[slug]) {
        delete next[slug];
      } else {
        next[slug] = 'LB0';
      }
      try {
        localStorage.setItem(boxStorageKey, JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  };

  const setUnitDupeLevel = (slug: string, lv: DupeLevel) => {
    setOwnedBoxMap((prev) => {
      const next = { ...prev, [slug]: lv };
      try {
        localStorage.setItem(boxStorageKey, JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  };

  const toggleOwnedEquip = (slug: string) => {
    setOwnedEquipSlugs((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      try {
        localStorage.setItem(equipBoxStorageKey, JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  };

  const toggleSquadUnit = (slug: string) => {
    setActiveSquadSlugs((prev) => {
      let next: string[];
      if (prev.includes(slug)) {
        next = prev.filter((s) => s !== slug);
      } else if (prev.length >= statConfig.squadSize) {
        next = [...prev.slice(1), slug];
      } else {
        next = [...prev, slug];
      }
      try {
        localStorage.setItem(squadStorageKey, JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  };

  const handleAutoBuildFromOwnedBox = () => {
    const ownedUnits = hub.units.filter((u) => Boolean(ownedBoxMap[u.slug]));
    const pool = ownedUnits.length >= 3 ? ownedUnits : hub.units.slice(0, 14);
    if (ownedUnits.length < 3) {
      // Seed a realistic 12-unit F2P starter box so the user sees immediate value
      const seeded: Record<string, DupeLevel> = {};
      hub.units.slice(0, 12).forEach((u, i) => {
        seeded[u.slug] = i % 3 === 0 ? 'LB1' : 'LB0';
      });
      setOwnedBoxMap(seeded);
      try {
        localStorage.setItem(boxStorageKey, JSON.stringify(seeded));
      } catch {
        // Ignore
      }
    }
    const built = autoBuildOptimalSquad(hub.slug, pool, selectedElement).map((u) => u.slug);
    setActiveSquadSlugs(built);
    try {
      localStorage.setItem(squadStorageKey, JSON.stringify(built));
    } catch {
      // Ignore
    }
  };

  const handleAutoBuildMetaApex = () => {
    const built = autoBuildOptimalSquad(hub.slug, hub.units, selectedElement).map((u) => u.slug);
    setActiveSquadSlugs(built);
    try {
      localStorage.setItem(squadStorageKey, JSON.stringify(built));
    } catch {
      // Ignore
    }
  };

  const setBannerPlan = (bannerSlug: string, mode: BannerPlanMode) => {
    setBannerPlanMap((prev) => {
      const next = { ...prev, [bannerSlug]: mode };
      try {
        localStorage.setItem(bannerPlanStorageKey, JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  };

  const handleExportAccountJson = () => {
    try {
      const payload = {
        game: hub.slug,
        exportedAt: new Date().toISOString(),
        ownedBoxMap,
        ownedEquipSlugs,
        activeSquadSlugs,
        bannerPlanMap,
      };
      navigator.clipboard?.writeText(JSON.stringify(payload));
      setBackupNotice('✓ Copied Box & Squad JSON to clipboard!');
      setTimeout(() => setBackupNotice(null), 3500);
    } catch {
      setBackupNotice('✓ Account saved in browser storage');
      setTimeout(() => setBackupNotice(null), 3500);
    }
  };

  // Pull Savings Calculator State
  const [currentCurrency, setCurrentCurrency] = useState<number>(
    Math.round(hub.pityThreshold * hub.pullCostSingle * 0.55)
  );
  const [currentTickets, setCurrentTickets] = useState<number>(10);
  const [hasMonthlyPass, setHasMonthlyPass] = useState<boolean>(false);

  // Stat Comparison State
  const [unitASlug, setUnitASlug] = useState<string>(hub.units[0]?.slug ?? '');
  const [unitBSlug, setUnitBSlug] = useState<string>(hub.units[1]?.slug ?? hub.units[0]?.slug ?? '');

  // Combat Damage Calculator State
  const [basePotency, setBasePotency] = useState<number>(12450);
  const [skillAtk1, setSkillAtk1] = useState<number>(90);
  const [skillAtk2, setSkillAtk2] = useState<number>(80);
  const [critDmg1, setCritDmg1] = useState<number>(70);
  const [critDmg2, setCritDmg2] = useState<number>(30);
  const [fieldZonePct, setFieldZonePct] = useState<number>(65);
  const [defDown1, setDefDown1] = useState<number>(45);
  const [defDown2, setDefDown2] = useState<number>(45);
  const [fragilePct] = useState<number>(50);
  const [mindEyePct] = useState<number>(35);
  const [multiHitPct, setMultiHitPct] = useState<number>(50);
  const [isWeaknessHit] = useState<boolean>(true);

  const filteredUnits = useMemo(() => {
    return hub.units.filter((u) => {
      if (serverScope === 'GLOBAL_CURRENT' && !u.isReleasedGlobal) return false;
      if (showSavedOnly && !savedSlugs.includes(u.slug)) return false;
      if (ownershipFilter === 'OWNED' && !ownedBoxMap[u.slug]) return false;
      if (ownershipFilter === 'MISSING' && Boolean(ownedBoxMap[u.slug])) return false;
      if (selectedElement !== 'ALL' && u.element !== selectedElement) return false;
      if (unitSearch.trim()) {
        const q = unitSearch.toLowerCase();
        const matchName =
          u.nameEn.toLowerCase().includes(q) || u.styleOrTitle.toLowerCase().includes(q);
        const matchSkill = u.skills.some(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.buffCategoryTags.some((t) => t.toLowerCase().includes(q))
        );
        if (!matchName && !matchSkill) return false;
      }
      return true;
    });
  }, [hub.units, serverScope, showSavedOnly, savedSlugs, ownershipFilter, ownedBoxMap, selectedElement, unitSearch]);

  const filteredEquipments = useMemo(() => {
    return hub.equipments.filter((eq) => {
      if (equipTierFilter !== 'ALL' && eq.tierRank !== equipTierFilter) return false;
      if (equipSearch.trim()) {
        const q = equipSearch.toLowerCase();
        const matchName =
          eq.nameEn.toLowerCase().includes(q) ||
          eq.subType.toLowerCase().includes(q) ||
          eq.effectSummary.toLowerCase().includes(q);
        if (!matchName) return false;
      }
      return true;
    });
  }, [hub.equipments, equipTierFilter, equipSearch]);

  const getBaseUnitTierRank = (u: HydratedGameHub['units'][number]): string => {
    if (tierCategory === 'REROLL') return u.tiers.rerollAsian;
    if (tierCategory === 'BOSS_RAID') return u.tiers.bossRaidAsian;
    if (serverScope === 'GLOBAL_CURRENT' && u.tiers.overallGlobal) {
      return u.tiers.overallGlobal.tierRank;
    }
    return u.tiers.overallAsian.tierRank;
  };

  const getUnitTierRank = (u: HydratedGameHub['units'][number]): string => {
    const base = getBaseUnitTierRank(u);
    return computeInvestmentTier(hub.slug, u, base, investmentMode).adjustedTier;
  };

  const activeSquadUnits = useMemo(
    () =>
      activeSquadSlugs
        .map((s) => hub.units.find((u) => u.slug === s))
        .filter((u): u is HydratedGameHub['units'][number] => Boolean(u)),
    [activeSquadSlugs, hub.units]
  );

  const squadAudit = useMemo(
    () => auditSquadSynergy(hub.slug, activeSquadUnits),
    [hub.slug, activeSquadUnits]
  );

  const quickPeekUnit = useMemo(
    () => (quickPeekSlug ? hub.units.find((u) => u.slug === quickPeekSlug) ?? null : null),
    [quickPeekSlug, hub.units]
  );

  const ownedCount = useMemo(
    () => hub.units.filter((u) => Boolean(ownedBoxMap[u.slug])).length,
    [hub.units, ownedBoxMap]
  );
  const missingCount = hub.units.length - ownedCount;
  const completionPct = hub.units.length > 0 ? Math.round((ownedCount / hub.units.length) * 100) : 0;

  const getElementColor = (elemKey: string): string => {
    return hub.elementsConfig.find((e) => e.key === elemKey)?.colorHex ?? '#52525B';
  };

  const unitA = useMemo(
    () => hub.units.find((u) => u.slug === unitASlug) ?? hub.units[0],
    [hub.units, unitASlug]
  );
  const unitB = useMemo(
    () => hub.units.find((u) => u.slug === unitBSlug) ?? hub.units[1] ?? hub.units[0],
    [hub.units, unitBSlug]
  );

  const comparisonRows = useMemo(() => {
    if (!unitA || !unitB) return [];
    return compareUnitStats(
      unitA.baseStats,
      unitB.baseStats,
      unitA.longevityMonths,
      unitB.longevityMonths,
      {
        hpLabel: statConfig.hpOrStamina.label,
        dpLabel: statConfig.dpOrSpeed.label,
        atkLabel: statConfig.atkOrPower.label,
        defLabel: statConfig.defOrGuts.label,
        critLabel: statConfig.critOrWit.label,
      }
    );
  }, [unitA, unitB, statConfig]);

  const combatResult = useMemo(() => {
    return evaluateCombatMultiplier({
      basePotency,
      skillAtkBuff1Pct: skillAtk1,
      skillAtkBuff2Pct: skillAtk2,
      critDmgBuff1Pct: critDmg1,
      critDmgBuff2Pct: critDmg2,
      elementalFieldZonePct: fieldZonePct,
      defDown1Pct: defDown1,
      defDown2Pct: defDown2,
      fragileWeaknessPct: fragilePct,
      mindEyePct,
      multiHitBonusPct: multiHitPct,
      isWeaknessHit,
    });
  }, [
    basePotency,
    skillAtk1,
    skillAtk2,
    critDmg1,
    critDmg2,
    fieldZonePct,
    defDown1,
    defDown2,
    fragilePct,
    mindEyePct,
    multiHitPct,
    isWeaknessHit,
  ]);

  const tierRanksOrder: Array<'SSS' | 'SS' | 'S' | 'A' | 'B' | 'C'> = [
    'SSS',
    'SS',
    'S',
    'A',
    'B',
    'C',
  ];

  const gameAppIcon = getGameAppIconUrl(hub.slug);
  const topUnitThumb = hub.units[0]?.imageUrl || gameAppIcon;
  const secondUnitThumb = hub.units[1]?.imageUrl || topUnitThumb;
  const topEquipThumb = hub.equipments[0]?.imageUrl || topUnitThumb;
  const secondEquipThumb = hub.equipments[1]?.imageUrl || topEquipThumb;
  const topBossThumb = hub.bosses[0]?.imageUrl || hub.coverImageUrl;
  const topBannerThumb = hub.banners[0]?.imageUrl || hub.coverImageUrl;

  return (
    <div className="portal-container">
      {/* TOP LEADERBOARD AD SLOT (0.00 CLS) */}
      <div style={{ marginBottom: '14px' }}>
        <AdSlot
          slotId={`${hub.slug}-top-leaderboard`}
          label="GAME WIKI TOP LEADERBOARD AD"
          dimensions="728×90 / 970×90"
          minHeightPx={68}
          description="Fixed-height above-the-fold banner container (0.00 CLS layout shift)"
        />
      </div>

      {/* 3-COLUMN WIKI STRUCTURE */}
      <div className="wiki-layout-grid">
        {/* ================= LEFT COLUMN: WIKI DIRECTORY SIDEBAR ================= */}
        <aside
          className="wiki-left-sidebar"
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-main)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          {/* GAME COVER BANNER */}
          <div style={{ height: '112px', position: 'relative', overflow: 'hidden' }}>
            <img
              src={hub.coverImageUrl}
              alt={hub.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(20, 19, 18, 0.88) 0%, rgba(20, 19, 18, 0.25) 100%)',
                padding: '10px',
                display: 'flex',
                alignItems: 'flex-end',
                gap: '8px',
              }}
            >
              <img
                src={gameAppIcon}
                alt={hub.name}
                width={38}
                height={38}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '7px',
                  objectFit: 'cover',
                  border: '2px solid #FFFFFF',
                  flexShrink: 0,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
                }}
              />
              <div>
                <div
                  className="mono"
                  style={{ fontSize: '9.5px', fontWeight: 900, color: '#FDE047' }}
                >
                  {hub.globalPatchVersion}
                </div>
                <div style={{ fontSize: '13.5px', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.15 }}>
                  {hub.name}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 1: RANKINGS */}
          <div
            style={{
              background: 'var(--bg-subnav)',
              color: '#FFFFFF',
              fontSize: '10.5px',
              fontWeight: 900,
              padding: '6px 10px',
              borderLeft: '3.5px solid var(--accent-primary)',
            }}
          >
            01. RANKINGS &amp; TIER LISTS
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button
              type="button"
              onClick={() => {
                setActiveTab('tier-list');
                setTierCategory('OVERALL');
              }}
              style={{
                textAlign: 'left',
                padding: '7px 10px',
                fontSize: '11.5px',
                fontWeight: activeTab === 'tier-list' && tierCategory === 'OVERALL' ? 900 : 600,
                background:
                  activeTab === 'tier-list' && tierCategory === 'OVERALL'
                    ? 'var(--accent-bg)'
                    : 'transparent',
                color:
                  activeTab === 'tier-list' && tierCategory === 'OVERALL'
                    ? 'var(--accent-primary)'
                    : 'var(--text-secondary)',
                border: 'none',
                borderBottom: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <img
                  src={topUnitThumb}
                  alt="Strongest Tier List"
                  width={26}
                  height={26}
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '5px',
                    objectFit: 'cover',
                    border: '1px solid var(--border-main)',
                  }}
                />
                <span>Strongest Tier List</span>
              </span>
              <span className="mono" style={{ fontSize: '10px', fontWeight: 900 }}>
                SSS
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('tier-list');
                setTierCategory('REROLL');
              }}
              style={{
                textAlign: 'left',
                padding: '7px 10px',
                fontSize: '11.5px',
                fontWeight: activeTab === 'tier-list' && tierCategory === 'REROLL' ? 900 : 600,
                background:
                  activeTab === 'tier-list' && tierCategory === 'REROLL'
                    ? 'var(--accent-bg)'
                    : 'transparent',
                color:
                  activeTab === 'tier-list' && tierCategory === 'REROLL'
                    ? 'var(--accent-primary)'
                    : 'var(--text-secondary)',
                border: 'none',
                borderBottom: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <img
                src={secondUnitThumb}
                alt="Reroll Starting Tier List"
                width={26}
                height={26}
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '5px',
                  objectFit: 'cover',
                  border: '1px solid var(--border-main)',
                }}
              />
              <span>Reroll Starting Tier List</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('weapons')}
              style={{
                textAlign: 'left',
                padding: '7px 10px',
                fontSize: '11.5px',
                fontWeight: activeTab === 'weapons' ? 900 : 600,
                background: activeTab === 'weapons' ? 'var(--accent-bg)' : 'transparent',
                color: activeTab === 'weapons' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                border: 'none',
                borderBottom: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <img
                  src={topEquipThumb}
                  alt="Weapons and Support Cards"
                  width={26}
                  height={26}
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '5px',
                    objectFit: 'cover',
                    border: '1px solid var(--border-main)',
                  }}
                />
                <span>Weapons / Support Cards</span>
              </span>
              <span className="mono" style={{ fontSize: '10px' }}>
                {hub.equipments.length}
              </span>
            </button>
          </div>

          {/* SECTION 2: BANNERS & PULL PLANNER */}
          <div
            style={{
              background: 'var(--bg-subnav)',
              color: '#FFFFFF',
              fontSize: '10.5px',
              fontWeight: 900,
              padding: '6px 10px',
              borderLeft: '3.5px solid var(--accent-primary)',
            }}
          >
            02. UPCOMING BANNERS &amp; PULL CALC
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button
              type="button"
              onClick={() => setActiveTab('banners')}
              style={{
                textAlign: 'left',
                padding: '7px 10px',
                fontSize: '11.5px',
                fontWeight: activeTab === 'banners' ? 900 : 600,
                background: activeTab === 'banners' ? 'var(--accent-bg)' : 'transparent',
                color: activeTab === 'banners' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                border: 'none',
                borderBottom: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <img
                src={topBannerThumb}
                alt="Banner Schedule"
                width={26}
                height={26}
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '5px',
                  objectFit: 'cover',
                  border: '1px solid var(--border-main)',
                }}
              />
              <span>Banner Schedule &amp; Pull Priority</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('banners')}
              style={{
                textAlign: 'left',
                padding: '7px 10px',
                fontSize: '11.5px',
                fontWeight: 600,
                background: 'transparent',
                color: 'var(--text-secondary)',
                border: 'none',
                borderBottom: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <img
                src={secondEquipThumb}
                alt="Pull Savings Planner"
                width={26}
                height={26}
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '5px',
                  objectFit: 'cover',
                  border: '1px solid var(--border-main)',
                }}
              />
              <span>{hub.currencyName} Pull Savings Planner</span>
            </button>
          </div>

          {/* SECTION 3: BOSS & RAID GUIDES */}
          <div
            style={{
              background: 'var(--bg-subnav)',
              color: '#FFFFFF',
              fontSize: '10.5px',
              fontWeight: 900,
              padding: '6px 10px',
              borderLeft: '3.5px solid var(--accent-primary)',
            }}
          >
            03. BOSS &amp; RAID STRATEGY DB
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button
              type="button"
              onClick={() => setActiveTab('bosses')}
              style={{
                textAlign: 'left',
                padding: '7px 10px',
                fontSize: '11.5px',
                fontWeight: activeTab === 'bosses' ? 900 : 600,
                background: activeTab === 'bosses' ? 'var(--accent-bg)' : 'transparent',
                color: activeTab === 'bosses' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                border: 'none',
                borderBottom: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <img
                src={topBossThumb}
                alt="Boss Weaknesses"
                width={26}
                height={26}
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '5px',
                  objectFit: 'cover',
                  border: '1px solid var(--border-main)',
                }}
              />
              <span>Boss Weaknesses &amp; Raid Guides ({hub.bosses.length})</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('tier-list');
                setTierCategory('BOSS_RAID');
              }}
              style={{
                textAlign: 'left',
                padding: '7px 10px',
                fontSize: '11.5px',
                fontWeight: activeTab === 'tier-list' && tierCategory === 'BOSS_RAID' ? 900 : 600,
                background:
                  activeTab === 'tier-list' && tierCategory === 'BOSS_RAID'
                    ? 'var(--accent-bg)'
                    : 'transparent',
                color:
                  activeTab === 'tier-list' && tierCategory === 'BOSS_RAID'
                    ? 'var(--accent-primary)'
                    : 'var(--text-secondary)',
                border: 'none',
                borderBottom: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <img
                src={hub.units[2]?.imageUrl || topUnitThumb}
                alt="Boss Raid Apex Tier List"
                width={26}
                height={26}
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '5px',
                  objectFit: 'cover',
                  border: '1px solid var(--border-main)',
                }}
              />
              <span>Boss / Raid Apex Tier List</span>
            </button>
          </div>

          {/* SECTION 4: STATISTICAL COMPARISON & CALCULATORS */}
          <div
            style={{
              background: 'var(--bg-subnav)',
              color: '#FFFFFF',
              fontSize: '10.5px',
              fontWeight: 900,
              padding: '6px 10px',
              borderLeft: '3.5px solid var(--accent-primary)',
            }}
          >
            04. COMPARE &amp; MATH TOOLS
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button
              type="button"
              onClick={() => setActiveTab('compare')}
              style={{
                textAlign: 'left',
                padding: '7px 10px',
                fontSize: '11.5px',
                fontWeight: activeTab === 'compare' ? 900 : 600,
                background: activeTab === 'compare' ? 'var(--accent-bg)' : 'transparent',
                color: activeTab === 'compare' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                border: 'none',
                borderBottom: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <img
                src={hub.units[3]?.imageUrl || secondUnitThumb}
                alt="Visual Stat Comparison Tool"
                width={26}
                height={26}
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '5px',
                  objectFit: 'cover',
                  border: '1px solid var(--border-main)',
                }}
              />
              <span>Visual Stat Comparison Tool</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('compare')}
              style={{
                textAlign: 'left',
                padding: '7px 10px',
                fontSize: '11.5px',
                fontWeight: 600,
                background: 'transparent',
                color: 'var(--text-secondary)',
                border: 'none',
                borderBottom: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <img
                src={hub.equipments[2]?.imageUrl || topEquipThumb}
                alt="Buff-Stacking Damage Calc"
                width={26}
                height={26}
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '5px',
                  objectFit: 'cover',
                  border: '1px solid var(--border-main)',
                }}
              />
              <span>Buff-Stacking &amp; Damage Calc</span>
            </button>
          </div>

          {/* SECTION 5: DIRECT CHARACTER LINKS WITH REAL PORTRAIT THUMBNAILS */}
          <div
            style={{
              background: 'var(--bg-subnav)',
              color: '#FFFFFF',
              fontSize: '10.5px',
              fontWeight: 900,
              padding: '6px 10px',
              borderLeft: '3.5px solid var(--accent-primary)',
            }}
          >
            05. CHARACTER DATABASE ({hub.units.length})
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '620px', overflowY: 'auto' }}>
            {hub.units.map((u) => (
              <Link
                key={u.slug}
                href={`/${hub.slug}/units/${u.slug}`}
                style={{
                  padding: '5px 8px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--text-secondary)',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', minWidth: 0 }}>
                  <img
                    src={u.imageUrl}
                    alt={u.nameEn}
                    width={30}
                    height={30}
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '5px',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      border: `1.5px solid ${getElementColor(u.element)}`,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {u.nameEn}
                  </span>
                </span>
                <span
                  className="mono"
                  style={{ fontSize: '9.5px', color: 'var(--accent-primary)', fontWeight: 900, flexShrink: 0 }}
                >
                  {u.tiers.overallAsian.tierRank}
                </span>
              </Link>
            ))}
          </div>
        </aside>

        {/* ================= CENTER COLUMN: DEDICATED TOPIC ARTICLE ================= */}
        <main className="wiki-center-article" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* ARTICLE HEADER + QUICK MENU GRID */}
          <section
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-main)',
              borderRadius: '4px',
              padding: '12px 14px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '2px solid var(--accent-primary)',
                paddingBottom: '8px',
                marginBottom: '10px',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src={gameAppIcon}
                  alt={hub.name}
                  width={36}
                  height={36}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '7px',
                    objectFit: 'cover',
                    border: '1px solid var(--border-main)',
                    flexShrink: 0,
                  }}
                />
                <h1 style={{ fontSize: '17.5px', fontWeight: 900, color: 'var(--text-main)' }}>
                  [{hub.name}]{' '}
                  {activeTab === 'tier-list' && `Strongest Character Tier List (${tierCategory})`}
                  {activeTab === 'weapons' && 'Weapon, Support Card & Equipment Tier List'}
                  {activeTab === 'bosses' && 'Monsters, Raid Boss Weaknesses & Strategy Guides'}
                  {activeTab === 'banners' && 'Upcoming Banner Schedule & Pull Calculator'}
                  {activeTab === 'compare' && 'Visual Stat Comparison & Damage Formula Simulator'}
                </h1>
              </div>
              <span
                className="mono"
                style={{
                  fontSize: '10.5px',
                  background: 'var(--accent-bg)',
                  color: 'var(--accent-primary)',
                  border: '1px solid var(--accent-border)',
                  padding: '3px 8px',
                  borderRadius: '3px',
                  fontWeight: 800,
                }}
              >
                Patch: {hub.globalPatchVersion}
              </span>
            </div>

            {/* 5-BUTTON QUICK NAVIGATION MENU WITH LARGER CRISP THUMBNAILS */}
            <div className="quick-menu-grid">
              {(
                [
                  { key: 'tier-list', label: '1. Character Tier List', thumb: topUnitThumb },
                  { key: 'weapons', label: '2. Weapons & Cards', thumb: topEquipThumb },
                  { key: 'bosses', label: '3. Boss & Raid Guides', thumb: topBossThumb },
                  { key: 'banners', label: '4. Banners & Pull Calc', thumb: topBannerThumb },
                  { key: 'compare', label: '5. Stat Compare & Math', thumb: secondUnitThumb },
                ] as const
              ).map((btn) => (
                <button
                  key={btn.key}
                  type="button"
                  onClick={() => setActiveTab(btn.key)}
                  style={{
                    padding: '7px 8px',
                    borderRadius: '5px',
                    border:
                      activeTab === btn.key
                        ? '2px solid var(--accent-primary)'
                        : '1px solid var(--border-main)',
                    background: activeTab === btn.key ? 'var(--accent-bg)' : 'var(--bg-subtle)',
                    color: activeTab === btn.key ? 'var(--accent-primary)' : 'var(--text-main)',
                    fontSize: '11px',
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '7px',
                  }}
                >
                  <img
                    src={btn.thumb}
                    alt={btn.label}
                    width={32}
                    height={32}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '5px',
                      objectFit: 'cover',
                      border: '1px solid var(--border-main)',
                      flexShrink: 0,
                    }}
                  />
                  <span>{btn.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* =====================================================================
              TOPIC VIEW 1: 2D ROLE-COLUMN TIER MATRIX & BREAKDOWN CARDS
              ===================================================================== */}
          {activeTab === 'tier-list' && (
            <>
              {/* FILTER BAR */}
              <section
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-main)',
                  borderRadius: '4px',
                  padding: '10px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      onClick={() => setServerScope('ASIAN_FUTURE')}
                      style={{
                        padding: '5px 10px',
                        borderRadius: '3px',
                        fontSize: '11px',
                        fontWeight: 800,
                        cursor: 'pointer',
                        border: '1px solid var(--border-strong)',
                        background:
                          serverScope === 'ASIAN_FUTURE' ? 'var(--bg-header)' : 'var(--bg-subtle)',
                        color: serverScope === 'ASIAN_FUTURE' ? '#FFFFFF' : 'var(--text-secondary)',
                      }}
                    >
                      All Units (Including Upcoming)
                    </button>
                    <button
                      type="button"
                      onClick={() => setServerScope('GLOBAL_CURRENT')}
                      style={{
                        padding: '5px 10px',
                        borderRadius: '3px',
                        fontSize: '11px',
                        fontWeight: 800,
                        cursor: 'pointer',
                        border: '1px solid var(--border-main)',
                        background:
                          serverScope === 'GLOBAL_CURRENT' ? 'var(--bg-header)' : 'var(--bg-subtle)',
                        color: serverScope === 'GLOBAL_CURRENT' ? '#FFFFFF' : 'var(--text-secondary)',
                      }}
                    >
                      Currently Released
                    </button>
                  </div>

                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', alignItems: 'center' }}>
                    {(['OVERALL', 'REROLL', 'BOSS_RAID'] as const).map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setTierCategory(cat)}
                        style={{
                          padding: '4px 9px',
                          borderRadius: '3px',
                          fontSize: '10.5px',
                          fontWeight: 800,
                          cursor: 'pointer',
                          border:
                            tierCategory === cat
                              ? '1.5px solid var(--accent-primary)'
                              : '1px solid var(--border-main)',
                          background: tierCategory === cat ? 'var(--accent-bg)' : 'var(--bg-subtle)',
                          color:
                            tierCategory === cat ? 'var(--accent-primary)' : 'var(--text-secondary)',
                        }}
                      >
                        {cat === 'OVERALL' ? 'Overall Tier' : cat === 'REROLL' ? 'Reroll' : 'Boss / Raid'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* INVESTMENT LEVEL TOGGLE (F2P LB0 vs SWEET SPOT LB1 vs WHALE MLB) + MY BOX OWNERSHIP FILTERS */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '8px',
                    paddingTop: '6px',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span className="mono" style={{ fontSize: '10px', fontWeight: 900, color: 'var(--text-muted)' }}>
                      DUPE / INVESTMENT TIER:
                    </span>
                    {(
                      [
                        { key: 'F2P_LB0', label: 'F2P Base (0 Dupes / LB0)' },
                        { key: 'REC_LB1', label: 'Sweet Spot (LB1 / 3★)' },
                        { key: 'MAX_MLB', label: 'Max Whale (MLB / 5★)' },
                      ] as const
                    ).map((inv) => (
                      <button
                        key={inv.key}
                        type="button"
                        onClick={() => setInvestmentMode(inv.key)}
                        style={{
                          padding: '4px 9px',
                          borderRadius: '4px',
                          fontSize: '10.5px',
                          fontWeight: 900,
                          cursor: 'pointer',
                          border:
                            investmentMode === inv.key
                              ? '1.5px solid #1E40AF'
                              : '1px solid var(--border-main)',
                          background: investmentMode === inv.key ? '#DBEAFE' : 'var(--bg-subtle)',
                          color: investmentMode === inv.key ? '#1E40AF' : 'var(--text-secondary)',
                        }}
                      >
                        {inv.label}
                      </button>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span className="mono" style={{ fontSize: '10px', fontWeight: 900, color: 'var(--text-muted)' }}>
                      MY ROSTER BOX:
                    </span>
                    {(
                      [
                        { key: 'ALL', label: `All (${hub.units.length})` },
                        { key: 'OWNED', label: `✓ Owned Box (${ownedCount})` },
                        { key: 'MISSING', label: `✗ Missing (${missingCount})` },
                      ] as const
                    ).map((f) => (
                      <button
                        key={f.key}
                        type="button"
                        onClick={() => setOwnershipFilter(f.key)}
                        style={{
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '10.5px',
                          fontWeight: 900,
                          cursor: 'pointer',
                          border:
                            ownershipFilter === f.key
                              ? '1.5px solid #15803D'
                              : '1px solid var(--border-main)',
                          background: ownershipFilter === f.key ? '#DCFCE7' : 'var(--bg-subtle)',
                          color: ownershipFilter === f.key ? '#15803D' : 'var(--text-secondary)',
                        }}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ELEMENT PILLS WITH REAL ELEMENT / CONCEPT ICONS + UNIT SEARCH */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '8px',
                    paddingTop: '6px',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      onClick={() => setSelectedElement('ALL')}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 9px',
                        fontSize: '11px',
                        fontWeight: 800,
                        borderRadius: '4px',
                        cursor: 'pointer',
                        border: '1px solid var(--border-main)',
                        background: selectedElement === 'ALL' ? 'var(--bg-header)' : 'var(--bg-subtle)',
                        color: selectedElement === 'ALL' ? '#FFF' : 'var(--text-secondary)',
                      }}
                    >
                      <img
                        src={gameAppIcon}
                        alt="All Elements"
                        width={22}
                        height={22}
                        style={{ width: '22px', height: '22px', borderRadius: '4px', objectFit: 'cover' }}
                      />
                      <span>{statConfig.filterAllLabel} ({hub.units.length})</span>
                    </button>
                    {hub.elementsConfig.map((el) => {
                      const elIcon = getElementIconUrl(hub.slug, el.key, hub.units);
                      return (
                        <button
                          key={el.key}
                          type="button"
                          onClick={() => setSelectedElement(el.key)}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '4px 9px',
                            fontSize: '11px',
                            fontWeight: 800,
                            borderRadius: '4px',
                            cursor: 'pointer',
                            border: `1.5px solid ${el.colorHex}`,
                            background: selectedElement === el.key ? el.colorHex : 'var(--bg-surface)',
                            color: selectedElement === el.key ? '#FFF' : 'var(--text-main)',
                          }}
                        >
                          <img
                            src={elIcon}
                            alt={el.label}
                            width={22}
                            height={22}
                            style={{
                              width: '22px',
                              height: '22px',
                              borderRadius: '4px',
                              objectFit: 'cover',
                            }}
                          />
                          <span>{el.label}</span>
                        </button>
                      );
                    })}
                    <button
                      type="button"
                      onClick={() => setShowSavedOnly((v) => !v)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        padding: '4px 9px',
                        fontSize: '11px',
                        fontWeight: 900,
                        borderRadius: '4px',
                        cursor: 'pointer',
                        border: '1.5px solid var(--amber-primary)',
                        background: showSavedOnly ? 'var(--amber-primary)' : 'var(--bg-surface)',
                        color: showSavedOnly ? '#FFF' : 'var(--amber-primary)',
                      }}
                    >
                      <span>★ Saved ({savedSlugs.filter((s) => hub.units.some((u) => u.slug === s)).length})</span>
                    </button>
                  </div>

                  <input
                    type="search"
                    value={unitSearch}
                    onChange={(e) => setUnitSearch(e.target.value)}
                    placeholder="Filter by character or buff tag (e.g. Crit, Field)..."
                    style={{
                      padding: '5px 10px',
                      fontSize: '11px',
                      border: '1px solid var(--border-main)',
                      borderRadius: '3px',
                      background: 'var(--bg-subtle)',
                      color: 'var(--text-main)',
                      width: '250px',
                    }}
                  />
                </div>
              </section>

              {filteredUnits.length === 0 && (
                <section
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-main)',
                    borderRadius: '6px',
                    padding: '24px 16px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <div style={{ fontSize: '14px', fontWeight: 900, color: 'var(--text-main)' }}>
                    No characters match your current filter selection.
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    Try clearing your search query, switching Element filter back to All Elements, or disabling the ★ Saved filter.
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedElement('ALL');
                      setUnitSearch('');
                      setShowSavedOnly(false);
                      setOwnershipFilter('ALL');
                      setInvestmentMode('REC_LB1');
                      setServerScope('ASIAN_FUTURE');
                    }}
                    style={{
                      padding: '7px 14px',
                      background: 'var(--accent-primary)',
                      color: '#FFF',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '11.5px',
                      fontWeight: 900,
                      cursor: 'pointer',
                    }}
                  >
                    Reset All Filters
                  </button>
                </section>
              )}

              {/* INSTANT QUICK-PEEK BUILD INSPECTOR PANEL */}
              {quickPeekUnit && (
                <section
                  style={{
                    background: 'var(--bg-surface)',
                    border: '2px solid var(--accent-primary)',
                    borderRadius: '6px',
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '10px',
                      borderBottom: '1px solid var(--border-main)',
                      paddingBottom: '10px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                      <img
                        src={quickPeekUnit.imageUrl}
                        alt={quickPeekUnit.nameEn}
                        width={64}
                        height={64}
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '8px',
                          objectFit: 'cover',
                          objectPosition: 'top',
                          border: `2.5px solid ${getElementColor(quickPeekUnit.element)}`,
                        }}
                      />
                      <div>
                        <div style={{ fontSize: '15.5px', fontWeight: 900 }}>
                          ⚡ Quick Build Inspector: {quickPeekUnit.nameEn}
                        </div>
                        <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)', fontWeight: 700 }}>
                          {quickPeekUnit.styleOrTitle} • {quickPeekUnit.role} • Target: {quickPeekUnit.recommendedDupes}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        onClick={() => toggleOwnedUnit(quickPeekUnit.slug)}
                        style={{
                          padding: '6px 10px',
                          borderRadius: '4px',
                          border: ownedBoxMap[quickPeekUnit.slug] ? '1.5px solid #15803D' : '1px solid var(--border-strong)',
                          background: ownedBoxMap[quickPeekUnit.slug] ? '#DCFCE7' : 'var(--bg-subtle)',
                          color: ownedBoxMap[quickPeekUnit.slug] ? '#15803D' : 'var(--text-main)',
                          fontSize: '11px',
                          fontWeight: 900,
                          cursor: 'pointer',
                        }}
                      >
                        {ownedBoxMap[quickPeekUnit.slug]
                          ? `✓ Owned (${ownedBoxMap[quickPeekUnit.slug]})`
                          : '+ Mark Owned'}
                      </button>
                      {DUPE_LEVELS.map((lv) => (
                        <button
                          key={lv}
                          type="button"
                          onClick={() => setUnitDupeLevel(quickPeekUnit.slug, lv)}
                          className="mono"
                          style={{
                            padding: '5px 7px',
                            borderRadius: '4px',
                            fontSize: '10px',
                            fontWeight: 900,
                            border: '1px solid var(--border-main)',
                            background: ownedBoxMap[quickPeekUnit.slug] === lv ? '#15803D' : 'var(--bg-subtle)',
                            color: ownedBoxMap[quickPeekUnit.slug] === lv ? '#FFF' : 'var(--text-main)',
                            cursor: 'pointer',
                          }}
                        >
                          {lv}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => toggleSquadUnit(quickPeekUnit.slug)}
                        style={{
                          padding: '6px 10px',
                          borderRadius: '4px',
                          border: '1px solid #1E40AF',
                          background: activeSquadSlugs.includes(quickPeekUnit.slug) ? '#DBEAFE' : '#1E40AF',
                          color: activeSquadSlugs.includes(quickPeekUnit.slug) ? '#1E40AF' : '#FFF',
                          fontSize: '11px',
                          fontWeight: 900,
                          cursor: 'pointer',
                        }}
                      >
                        {activeSquadSlugs.includes(quickPeekUnit.slug) ? '★ In Active Squad' : '+ Add to Squad'}
                      </button>
                      <Link
                        href={`/${hub.slug}/units/${quickPeekUnit.slug}`}
                        style={{
                          padding: '6px 10px',
                          borderRadius: '4px',
                          background: 'var(--accent-primary)',
                          color: '#FFF',
                          fontSize: '11px',
                          fontWeight: 900,
                        }}
                      >
                        Full Page &rarr;
                      </Link>
                      <button
                        type="button"
                        onClick={() => setQuickPeekSlug(null)}
                        style={{
                          padding: '6px 9px',
                          borderRadius: '4px',
                          border: '1px solid var(--border-main)',
                          background: 'var(--bg-subtle)',
                          fontSize: '11px',
                          fontWeight: 900,
                          cursor: 'pointer',
                        }}
                      >
                        ✕ Close
                      </button>
                    </div>
                  </div>

                  {/* GAME-NATIVE STATS ROW INSIDE QUICK-PEEK */}
                  <div
                    className="mono"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(5, 1fr)',
                      gap: '6px',
                      textAlign: 'center',
                    }}
                  >
                    {[
                      { label: statConfig.hpOrStamina.label, val: quickPeekUnit.baseStats.hpOrStamina },
                      { label: statConfig.dpOrSpeed.label, val: quickPeekUnit.baseStats.dpOrSpeed },
                      { label: statConfig.atkOrPower.label, val: quickPeekUnit.baseStats.atkOrPower },
                      { label: statConfig.defOrGuts.label, val: quickPeekUnit.baseStats.defOrGuts },
                      { label: statConfig.critOrWit.label, val: quickPeekUnit.baseStats.critOrWit },
                    ].map((st) => (
                      <div
                        key={st.label}
                        style={{
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-main)',
                          borderRadius: '4px',
                          padding: '6px',
                        }}
                      >
                        <div style={{ fontSize: '9.5px', color: 'var(--text-muted)', fontWeight: 800 }}>
                          {st.label}
                        </div>
                        <div style={{ fontSize: '13.5px', fontWeight: 900 }}>{st.val.toLocaleString()}</div>
                      </div>
                    ))}
                  </div>

                  <UnitDeepBuildSection gameSlug={hub.slug} unit={quickPeekUnit} />
                </section>
              )}

              {/* 2D ROLE-COLUMN TIER MATRIX WITH LARGER 78x78 PORTRAITS, MICRO-TAGS & OWNED BADGES */}
              <section
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-main)',
                  borderRadius: '4px',
                  padding: '12px',
                  overflowX: 'auto',
                }}
              >
                <div
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 900,
                    borderLeft: '4px solid var(--accent-primary)',
                    paddingLeft: '8px',
                    marginBottom: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '6px',
                  }}
                >
                  <span>
                    OVERALL TIER MATRIX BY ROLE —{' '}
                    {investmentMode === 'F2P_LB0'
                      ? 'F2P BASE (0 DUPES / LB0)'
                      : investmentMode === 'MAX_MLB'
                        ? 'MAX WHALE (MLB / 5★)'
                        : 'SWEET-SPOT INVESTMENT (LB1 / 3★)'}
                  </span>
                  <span className="mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    Showing {filteredUnits.length} Characters • Click &ldquo;+ Box&rdquo; to Track Owned or &ldquo;⚡ Inspect&rdquo; for Quick Build
                  </span>
                </div>

                <table
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    border: '1px solid var(--border-main)',
                    minWidth: '620px',
                  }}
                >
                  <thead>
                    <tr style={{ background: 'var(--bg-subnav)', color: '#FFFFFF' }}>
                      <th
                        style={{
                          width: '58px',
                          padding: '9px 6px',
                          fontSize: '11.5px',
                          fontWeight: 900,
                          borderRight: '1px solid #3F3F46',
                          textAlign: 'center',
                        }}
                      >
                        TIER
                      </th>
                      {hub.rolesConfig.map((rc) => {
                        const roleIcon = getRoleIconUrl(
                          hub.slug,
                          rc.key,
                          hub.units.map((u) => ({
                            roleColumn: u.tiers.overallAsian.roleColumn,
                            imageUrl: u.imageUrl,
                          }))
                        );
                        return (
                          <th
                            key={rc.key}
                            style={{
                              padding: '9px 8px',
                              fontSize: '11px',
                              fontWeight: 900,
                              borderRight: '1px solid #3F3F46',
                              textAlign: 'center',
                            }}
                          >
                            <div
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '7px',
                              }}
                            >
                              <img
                                src={roleIcon}
                                alt={rc.label}
                                width={24}
                                height={24}
                                style={{
                                  width: '24px',
                                  height: '24px',
                                  borderRadius: '4px',
                                  objectFit: 'cover',
                                }}
                              />
                              <span>{rc.label}</span>
                            </div>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tierRanksOrder.map((rank) => {
                      const unitsInTier = filteredUnits.filter((u) => getUnitTierRank(u) === rank);
                      if (unitsInTier.length === 0) return null;

                      const badgeBg =
                        rank === 'SSS'
                          ? 'var(--accent-bg)'
                          : rank === 'SS'
                            ? 'var(--amber-bg)'
                            : 'var(--bg-subtle)';
                      const badgeColor =
                        rank === 'SSS'
                          ? 'var(--accent-primary)'
                          : rank === 'SS'
                            ? 'var(--amber-primary)'
                            : 'var(--text-main)';

                      return (
                        <tr
                          key={rank}
                          style={{ borderBottom: '1px solid var(--border-main)' }}
                        >
                          <td
                            style={{
                              background: badgeBg,
                              color: badgeColor,
                              borderLeft: `4px solid ${badgeColor}`,
                              borderRight: '1px solid var(--border-main)',
                              fontWeight: 900,
                              fontSize: '16px',
                              textAlign: 'center',
                              verticalAlign: 'middle',
                            }}
                          >
                            {rank}
                          </td>
                          {hub.rolesConfig.map((rc) => {
                            const roleUnits = unitsInTier.filter(
                              (u) => u.tiers.overallAsian.roleColumn === rc.key
                            );
                            return (
                              <td
                                key={rc.key}
                                style={{
                                  padding: '10px 8px',
                                  borderRight: '1px solid var(--border-subtle)',
                                  verticalAlign: 'top',
                                }}
                              >
                                <div
                                  style={{
                                    display: 'flex',
                                    gap: '10px',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                  }}
                                >
                                  {roleUnits.map((u) => {
                                    const elemColor = getElementColor(u.element);
                                    const ownedDupe = ownedBoxMap[u.slug];
                                    const microTag = getUnitMicroTags(hub.slug, u)[0];
                                    return (
                                      <div
                                        key={u.slug}
                                        style={{
                                          width: '88px',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          alignItems: 'center',
                                          gap: '3px',
                                        }}
                                      >
                                        <Link
                                          href={`/${hub.slug}/units/${u.slug}`}
                                          style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '3px',
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: '76px',
                                              height: '76px',
                                              borderRadius: '8px',
                                              overflow: 'hidden',
                                              border: ownedDupe ? '2.5px solid #15803D' : `2.5px solid ${elemColor}`,
                                              position: 'relative',
                                              background: 'var(--bg-subtle)',
                                              boxShadow: '0 2px 6px rgba(0,0,0,0.14)',
                                            }}
                                          >
                                            <img
                                              src={u.imageUrl}
                                              alt={u.nameEn}
                                              style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'top center',
                                              }}
                                            />
                                            <span
                                              style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                right: 0,
                                                background: elemColor,
                                                color: '#FFF',
                                                fontSize: '8.5px',
                                                fontWeight: 900,
                                                padding: '1px 4px',
                                                borderTopLeftRadius: '4px',
                                              }}
                                            >
                                              {u.element}
                                            </span>
                                            {ownedDupe ? (
                                              <span
                                                className="mono"
                                                style={{
                                                  position: 'absolute',
                                                  top: 0,
                                                  left: 0,
                                                  background: '#15803D',
                                                  color: '#FFFFFF',
                                                  fontSize: '8px',
                                                  fontWeight: 900,
                                                  padding: '1px 4px',
                                                  borderBottomRightRadius: '4px',
                                                }}
                                              >
                                                ✓ {ownedDupe}
                                              </span>
                                            ) : !u.isReleasedGlobal ? (
                                              <span
                                                style={{
                                                  position: 'absolute',
                                                  top: 0,
                                                  left: 0,
                                                  background: '#18181B',
                                                  color: '#FDE047',
                                                  fontSize: '8px',
                                                  fontWeight: 900,
                                                  padding: '1px 4px',
                                                }}
                                              >
                                                UPCOMING
                                              </span>
                                            ) : null}
                                          </div>
                                          <span
                                            style={{
                                              fontSize: '10px',
                                              fontWeight: 800,
                                              color: 'var(--text-main)',
                                              textAlign: 'center',
                                              lineHeight: 1.15,
                                            }}
                                          >
                                            {u.nameEn}
                                          </span>
                                        </Link>
                                        {microTag && (
                                          <span
                                            className="mono"
                                            style={{
                                              fontSize: '8.5px',
                                              fontWeight: 800,
                                              color: 'var(--text-secondary)',
                                              background: 'var(--bg-subtle)',
                                              border: '1px solid var(--border-subtle)',
                                              borderRadius: '3px',
                                              padding: '1px 4px',
                                              whiteSpace: 'nowrap',
                                              maxWidth: '86px',
                                              overflow: 'hidden',
                                              textOverflow: 'ellipsis',
                                            }}
                                          >
                                            {microTag}
                                          </span>
                                        )}
                                        <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
                                          <button
                                            type="button"
                                            onClick={() => toggleOwnedUnit(u.slug)}
                                            className="mono"
                                            title="Add or remove character in My Roster Box"
                                            style={{
                                              fontSize: '8px',
                                              fontWeight: 900,
                                              padding: '2px 4px',
                                              borderRadius: '3px',
                                              border: ownedDupe ? '1px solid #15803D' : '1px solid var(--border-main)',
                                              background: ownedDupe ? '#DCFCE7' : 'var(--bg-surface)',
                                              color: ownedDupe ? '#15803D' : 'var(--text-secondary)',
                                              cursor: 'pointer',
                                            }}
                                          >
                                            {ownedDupe ? `✓ ${ownedDupe}` : '+ Box'}
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              setQuickPeekSlug((prev) => (prev === u.slug ? null : u.slug))
                                            }
                                            className="mono"
                                            title="Open Quick Build & Skill Tree Inspector"
                                            style={{
                                              fontSize: '8px',
                                              fontWeight: 900,
                                              padding: '2px 4px',
                                              borderRadius: '3px',
                                              border: '1px solid var(--border-main)',
                                              background:
                                                quickPeekSlug === u.slug ? 'var(--accent-primary)' : 'var(--bg-surface)',
                                              color: quickPeekSlug === u.slug ? '#FFF' : 'var(--accent-primary)',
                                              cursor: 'pointer',
                                            }}
                                          >
                                            ⚡ Build
                                          </button>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </section>

              {/* IN-ARTICLE NATIVE AD SLOT */}
              <AdSlot
                slotId={`${hub.slug}-in-article-tier`}
                label="IN-ARTICLE NATIVE AD SLOT"
                dimensions="300×250 / Fluid"
                minHeightPx={90}
                description="Positioned between Tier Matrix and Detailed Character Breakdown Cards (0.00 CLS)"
              />

              {/* CHARACTER EVALUATION BREAKDOWN CARDS WITH LARGER 88x88 PORTRAITS */}
              <section
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-main)',
                  borderRadius: '4px',
                  padding: '12px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <h2
                  style={{
                    fontSize: '13.5px',
                    fontWeight: 900,
                    borderLeft: '4px solid var(--border-strong)',
                    paddingLeft: '8px',
                  }}
                >
                  CHARACTER BREAKDOWN, SKILL MULTIPLIERS &amp; META LONGEVITY
                </h2>

                {filteredUnits.map((u, uIdx) => {
                  const elemColor = getElementColor(u.element);
                  const elemIcon = getElementIconUrl(hub.slug, u.element, hub.units);
                  const atkIcon = getAttackTypeIconUrl(hub.slug, u.attackType, elemIcon);
                  const primarySkill = u.skills[0];
                  const recommendedGear = hub.equipments[uIdx % Math.max(1, hub.equipments.length)];
                  const synergyPartners = u.synergyUnitSlugs
                    .map((s) => hub.units.find((cand) => cand.slug === s))
                    .filter(Boolean);

                  return (
                    <article
                      key={u.slug}
                      style={{
                        border: '1px solid var(--border-main)',
                        borderRadius: '6px',
                        padding: '12px',
                        background: 'var(--bg-subtle)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '9px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          gap: '14px',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                        }}
                      >
                        <Link href={`/${hub.slug}/units/${u.slug}`}>
                          <img
                            src={u.imageUrl}
                            alt={u.nameEn}
                            style={{
                              width: '88px',
                              height: '88px',
                              borderRadius: '8px',
                              objectFit: 'cover',
                              objectPosition: 'top center',
                              border: `2.5px solid ${elemColor}`,
                              boxShadow: '0 2px 6px rgba(0,0,0,0.16)',
                            }}
                          />
                        </Link>
                        <div style={{ flex: 1, minWidth: '220px' }}>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              flexWrap: 'wrap',
                              gap: '6px',
                            }}
                          >
                            <Link
                              href={`/${hub.slug}/units/${u.slug}`}
                              style={{
                                fontSize: '15px',
                                fontWeight: 900,
                                color: 'var(--text-main)',
                                textDecoration: 'underline',
                              }}
                            >
                              {u.nameEn} — {u.styleOrTitle}
                            </Link>
                            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                              <span
                                className="mono"
                                style={{
                                  background: 'var(--accent-bg)',
                                  color: 'var(--accent-primary)',
                                  border: '1px solid var(--accent-border)',
                                  padding: '3px 8px',
                                  borderRadius: '4px',
                                  fontSize: '11.5px',
                                  fontWeight: 900,
                                }}
                              >
                                {getUnitTierRank(u)} • {u.tiers.overallAsian.numericScore.toFixed(1)}/10
                              </span>
                            </div>
                          </div>

                          <div
                            style={{
                              display: 'flex',
                              gap: '6px',
                              marginTop: '6px',
                              flexWrap: 'wrap',
                              fontSize: '11px',
                              fontWeight: 800,
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px',
                                background: elemColor,
                                color: '#FFF',
                                padding: '3px 7px',
                                borderRadius: '3px',
                              }}
                            >
                              <img
                                src={elemIcon}
                                alt={u.element}
                                width={18}
                                height={18}
                                style={{ width: '18px', height: '18px', borderRadius: '3px', objectFit: 'cover' }}
                              />
                              {u.element} / {u.attackType}
                            </span>
                            <span
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px',
                                background: 'var(--bg-surface)',
                                border: '1px solid var(--border-main)',
                                padding: '3px 7px',
                                borderRadius: '3px',
                              }}
                            >
                              <img
                                src={atkIcon}
                                alt={u.role}
                                width={18}
                                height={18}
                                style={{ width: '18px', height: '18px', borderRadius: '3px', objectFit: 'cover' }}
                              />
                              Role: {u.role}
                            </span>
                            <span
                              style={{
                                background: 'var(--amber-bg)',
                                color: 'var(--amber-primary)',
                                border: '1px solid var(--border-main)',
                                padding: '3px 7px',
                                borderRadius: '3px',
                              }}
                            >
                              Target Dupes: {u.recommendedDupes}
                            </span>
                            <span
                              style={{
                                background: 'var(--green-bg)',
                                color: 'var(--green-primary)',
                                padding: '3px 7px',
                                borderRadius: '3px',
                              }}
                            >
                              Meta Longevity: {u.longevityMonths} Months
                            </span>
                          </div>
                        </div>
                      </div>

                      {primarySkill && (
                        <div
                          className="mono"
                          style={{
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--border-main)',
                            borderRadius: '4px',
                            padding: '8px 10px',
                            fontSize: '11px',
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center',
                          }}
                        >
                          <img
                            src={getSkillConceptIconUrl(
                              hub.slug,
                              primarySkill.type,
                              recommendedGear?.imageUrl || u.imageUrl
                            )}
                            alt={primarySkill.name}
                            width={38}
                            height={38}
                            style={{
                              width: '38px',
                              height: '38px',
                              borderRadius: '6px',
                              objectFit: 'cover',
                              border: '1px solid var(--border-main)',
                              flexShrink: 0,
                            }}
                          />
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 900 }}>
                              <span>
                                EX / Core Skill: {primarySkill.name} ({primarySkill.hitCount}-Hit)
                              </span>
                              <span style={{ color: 'var(--accent-primary)' }}>
                                Cost: {primarySkill.spOrEnergyCost}
                              </span>
                            </div>
                            <div style={{ color: 'var(--text-secondary)', marginTop: '2px' }}>
                              {primarySkill.multiplierSummary}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* VISUAL BEST-IN-SLOT GEAR + SYNERGY TEAMMATES STRIP */}
                      <div
                        style={{
                          display: 'flex',
                          gap: '10px',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          background: 'var(--bg-surface)',
                          border: '1px solid var(--border-subtle)',
                          padding: '6px 10px',
                          borderRadius: '4px',
                          fontSize: '11px',
                        }}
                      >
                        {recommendedGear && (
                          <button
                            type="button"
                            onClick={() => setActiveTab('weapons')}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '7px',
                              background: 'var(--bg-subtle)',
                              border: '1px solid var(--border-main)',
                              padding: '4px 8px',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontWeight: 800,
                              fontSize: '11px',
                              color: 'var(--text-main)',
                            }}
                          >
                            <img
                              src={recommendedGear.imageUrl}
                              alt={recommendedGear.nameEn}
                              width={32}
                              height={32}
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '5px',
                                objectFit: 'cover',
                                border: '1px solid var(--border-strong)',
                              }}
                            />
                            <span>Best Gear: {recommendedGear.nameEn}</span>
                          </button>
                        )}
                        {synergyPartners.length > 0 && (
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                            <strong style={{ color: 'var(--text-muted)' }}>Synergy Core:</strong>
                            {synergyPartners.map((sp) =>
                              sp ? (
                                <Link
                                  key={sp.slug}
                                  href={`/${hub.slug}/units/${sp.slug}`}
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    background: 'var(--bg-subtle)',
                                    border: '1px solid var(--border-main)',
                                    padding: '3px 8px 3px 4px',
                                    borderRadius: '4px',
                                    fontWeight: 800,
                                    color: 'var(--text-main)',
                                  }}
                                >
                                  <img
                                    src={sp.imageUrl}
                                    alt={sp.nameEn}
                                    width={30}
                                    height={30}
                                    style={{
                                      width: '30px',
                                      height: '30px',
                                      borderRadius: '5px',
                                      objectFit: 'cover',
                                      objectPosition: 'top',
                                    }}
                                  />
                                  <span>{sp.nameEn}</span>
                                </Link>
                              ) : null
                            )}
                          </div>
                        )}
                      </div>

                      <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)' }}>
                        <strong>Evaluation:</strong> {u.tiers.overallAsian.summaryVerdict}{' '}
                        <strong>Meta Notes:</strong> {u.tiers.overallAsian.longevityNote}
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          paddingTop: '6px',
                          borderTop: '1px solid var(--border-subtle)',
                          fontSize: '11px',
                          flexWrap: 'wrap',
                          gap: '8px',
                        }}
                      >
                        <Link
                          href={`/${hub.slug}/units/${u.slug}`}
                          style={{ fontWeight: 900, color: 'var(--accent-primary)' }}
                        >
                          Open Full Build, Skill Tree &amp; Team Synergies &rarr;
                        </Link>
                        <div style={{ display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap' }}>
                          <button
                            type="button"
                            onClick={() => toggleOwnedUnit(u.slug)}
                            style={{
                              background: ownedBoxMap[u.slug] ? '#DCFCE7' : 'var(--bg-surface)',
                              border: ownedBoxMap[u.slug] ? '1.5px solid #15803D' : '1px solid var(--border-strong)',
                              padding: '3px 8px',
                              borderRadius: '3px',
                              fontSize: '10.5px',
                              fontWeight: 900,
                              cursor: 'pointer',
                              color: ownedBoxMap[u.slug] ? '#15803D' : 'var(--text-main)',
                            }}
                          >
                            {ownedBoxMap[u.slug] ? `✓ Owned (${ownedBoxMap[u.slug]})` : '+ My Box'}
                          </button>
                          {DUPE_LEVELS.map((lv) => (
                            <button
                              key={lv}
                              type="button"
                              onClick={() => setUnitDupeLevel(u.slug, lv)}
                              className="mono"
                              style={{
                                padding: '2px 5px',
                                borderRadius: '3px',
                                fontSize: '9.5px',
                                fontWeight: 900,
                                border: '1px solid var(--border-main)',
                                background: ownedBoxMap[u.slug] === lv ? '#15803D' : 'var(--bg-surface)',
                                color: ownedBoxMap[u.slug] === lv ? '#FFF' : 'var(--text-secondary)',
                                cursor: 'pointer',
                              }}
                            >
                              {lv}
                            </button>
                          ))}
                          <button
                            type="button"
                            onClick={() => toggleSquadUnit(u.slug)}
                            style={{
                              background: activeSquadSlugs.includes(u.slug) ? '#DBEAFE' : 'var(--bg-header)',
                              border: '1px solid #1E40AF',
                              padding: '3px 8px',
                              borderRadius: '3px',
                              fontSize: '10.5px',
                              fontWeight: 900,
                              cursor: 'pointer',
                              color: activeSquadSlugs.includes(u.slug) ? '#1E40AF' : '#FFF',
                            }}
                          >
                            {activeSquadSlugs.includes(u.slug) ? '★ In Squad' : '+ Squad'}
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleSaveUnit(u.slug)}
                            style={{
                              background: savedSlugs.includes(u.slug) ? 'var(--amber-bg)' : 'var(--bg-surface)',
                              border: '1px solid var(--amber-primary)',
                              padding: '3px 8px',
                              borderRadius: '3px',
                              fontSize: '10.5px',
                              fontWeight: 900,
                              cursor: 'pointer',
                              color: 'var(--amber-primary)',
                            }}
                          >
                            {savedSlugs.includes(u.slug) ? '★ Saved' : '☆ Watch'}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setUnitASlug(u.slug);
                              setActiveTab('compare');
                            }}
                            style={{
                              background: 'var(--bg-surface)',
                              border: '1px solid var(--border-main)',
                              padding: '3px 8px',
                              borderRadius: '3px',
                              fontSize: '10.5px',
                              fontWeight: 800,
                              cursor: 'pointer',
                              color: 'var(--text-main)',
                            }}
                          >
                            Compare
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </section>
            </>
          )}

          {/* =====================================================================
              TOPIC VIEW 2: WEAPON / SUPPORT CARD / EQUIPMENT TIER LIST
              ===================================================================== */}
          {activeTab === 'weapons' && (
            <section
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-main)',
                borderRadius: '4px',
                padding: '12px 14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '10px',
                }}
              >
                <h2
                  style={{
                    fontSize: '13.5px',
                    fontWeight: 900,
                    borderLeft: '4px solid var(--accent-primary)',
                    paddingLeft: '8px',
                  }}
                >
                  RANKED WEAPON, SUPPORT CARD, ORB &amp; ARCANA TIER LIST ({filteredEquipments.length} / {hub.equipments.length})
                </h2>

                <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
                  {(['ALL', 'SSS', 'SS', 'S', 'A'] as const).map((tr) => (
                    <button
                      key={tr}
                      type="button"
                      onClick={() => setEquipTierFilter(tr)}
                      style={{
                        padding: '4px 9px',
                        fontSize: '11px',
                        fontWeight: 900,
                        borderRadius: '4px',
                        cursor: 'pointer',
                        border: '1px solid var(--border-main)',
                        background: equipTierFilter === tr ? 'var(--accent-primary)' : 'var(--bg-subtle)',
                        color: equipTierFilter === tr ? '#FFF' : 'var(--text-main)',
                      }}
                    >
                      {tr === 'ALL' ? 'All Tiers' : `${tr} Tier`}
                    </button>
                  ))}
                  <input
                    type="search"
                    value={equipSearch}
                    onChange={(e) => setEquipSearch(e.target.value)}
                    placeholder="Search weapon, card, stat or effect..."
                    style={{
                      padding: '5px 10px',
                      fontSize: '11px',
                      border: '1px solid var(--border-main)',
                      borderRadius: '3px',
                      background: 'var(--bg-subtle)',
                      color: 'var(--text-main)',
                      width: '230px',
                    }}
                  />
                </div>
              </div>

              {/* VISUAL TIER MATRIX FOR WEAPONS / SUPPORT CARDS / ARCANAS (CLICK TO JUMP) */}
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  border: '1px solid var(--border-main)',
                }}
              >
                <tbody>
                  {tierRanksOrder.map((rank) => {
                    const gearsInTier = filteredEquipments.filter((e) => e.tierRank === rank);
                    if (gearsInTier.length === 0) return null;
                    const badgeBg =
                      rank === 'SSS'
                        ? 'var(--accent-bg)'
                        : rank === 'SS'
                          ? 'var(--amber-bg)'
                          : 'var(--bg-subtle)';
                    const badgeColor =
                      rank === 'SSS'
                        ? 'var(--accent-primary)'
                        : rank === 'SS'
                          ? 'var(--amber-primary)'
                          : 'var(--text-main)';
                    return (
                      <tr key={rank} style={{ borderBottom: '1px solid var(--border-main)' }}>
                        <td
                          style={{
                            width: '62px',
                            background: badgeBg,
                            color: badgeColor,
                            borderLeft: `4px solid ${badgeColor}`,
                            borderRight: '1px solid var(--border-main)',
                            fontWeight: 900,
                            fontSize: '16px',
                            textAlign: 'center',
                            verticalAlign: 'middle',
                          }}
                        >
                          {rank}
                        </td>
                        <td style={{ padding: '10px' }}>
                          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {gearsInTier.map((eq) => (
                              <a
                                key={eq.slug}
                                href={`#equip-${eq.slug}`}
                                style={{
                                  width: '86px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  gap: '4px',
                                  textDecoration: 'none',
                                }}
                              >
                                <img
                                  src={eq.imageUrl}
                                  alt={eq.nameEn}
                                  width={76}
                                  height={76}
                                  style={{
                                    width: '76px',
                                    height: '76px',
                                    borderRadius: '8px',
                                    objectFit: 'cover',
                                    border: `2px solid ${badgeColor}`,
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.14)',
                                  }}
                                />
                                <span
                                  style={{
                                    fontSize: '10px',
                                    fontWeight: 800,
                                    textAlign: 'center',
                                    lineHeight: 1.15,
                                    color: 'var(--text-main)',
                                  }}
                                >
                                  {eq.nameEn}
                                </span>
                              </a>
                            ))}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {filteredEquipments.length === 0 && (
                <div
                  style={{
                    padding: '20px',
                    textAlign: 'center',
                    background: 'var(--bg-subtle)',
                    borderRadius: '6px',
                    border: '1px solid var(--border-main)',
                  }}
                >
                  <div style={{ fontSize: '13px', fontWeight: 900 }}>No equipment matches your active search or tier filter.</div>
                  <button
                    type="button"
                    onClick={() => {
                      setEquipSearch('');
                      setEquipTierFilter('ALL');
                    }}
                    style={{
                      marginTop: '8px',
                      padding: '6px 12px',
                      background: 'var(--accent-primary)',
                      color: '#FFF',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 900,
                      cursor: 'pointer',
                    }}
                  >
                    Reset Equipment Filters
                  </button>
                </div>
              )}

              {filteredEquipments.map((eq) => (
                <article
                  key={eq.slug}
                  id={`equip-${eq.slug}`}
                  style={{
                    border: '1px solid var(--border-main)',
                    borderRadius: '6px',
                    padding: '12px',
                    background: 'var(--bg-subtle)',
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                  }}
                >
                  <img
                    src={eq.imageUrl}
                    alt={eq.nameEn}
                    style={{
                      width: '92px',
                      height: '92px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: '2px solid var(--border-strong)',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                    }}
                  />
                  <div style={{ flex: 1, minWidth: '240px' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '6px',
                      }}
                    >
                      <div style={{ fontSize: '15px', fontWeight: 900 }}>{eq.nameEn}</div>
                      <span
                        className="mono"
                        style={{
                          background: 'var(--accent-bg)',
                          color: 'var(--accent-primary)',
                          border: '1px solid var(--accent-border)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontSize: '11.5px',
                          fontWeight: 900,
                        }}
                      >
                        Tier {eq.tierRank} • {eq.score.toFixed(1)}/10
                      </span>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        gap: '6px',
                        marginTop: '5px',
                        flexWrap: 'wrap',
                        fontSize: '11px',
                        fontWeight: 800,
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          background: 'var(--bg-header)',
                          color: '#FFF',
                          padding: '3px 7px',
                          borderRadius: '3px',
                        }}
                      >
                        <img
                          src={getStatConceptIconUrl(hub.slug, eq.subType, eq.imageUrl)}
                          alt={eq.subType}
                          width={16}
                          height={16}
                          style={{ width: '16px', height: '16px', borderRadius: '3px', objectFit: 'cover' }}
                        />
                        {eq.category}: {eq.subType}
                      </span>
                      <span
                        style={{
                          background: 'var(--amber-bg)',
                          color: 'var(--amber-primary)',
                          border: '1px solid var(--border-main)',
                          padding: '3px 7px',
                          borderRadius: '3px',
                        }}
                      >
                        Target Limit Break: {eq.recommendedDupes}
                      </span>
                    </div>

                    <div
                      className="mono"
                      style={{
                        display: 'flex',
                        gap: '12px',
                        flexWrap: 'wrap',
                        marginTop: '8px',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-main)',
                        padding: '6px 10px',
                        borderRadius: '4px',
                        fontSize: '11px',
                      }}
                    >
                      {Object.entries(eq.stats).map(([k, v]) => (
                        <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                          <img
                            src={getStatConceptIconUrl(hub.slug, `${k} ${v}`, eq.imageUrl)}
                            alt={k}
                            width={16}
                            height={16}
                            style={{ width: '16px', height: '16px', borderRadius: '3px', objectFit: 'cover' }}
                          />
                          <strong>{k}:</strong> {v}
                        </span>
                      ))}
                    </div>

                    <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '6px' }}>
                      {eq.effectSummary}
                    </p>

                    {/* LIMIT BREAK / DUPE BREAKPOINT SCALING TABLE */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                        gap: '6px',
                        marginTop: '7px',
                      }}
                    >
                      {getEquipmentLimitBreakTable(hub.slug, eq).map((lb) => (
                        <div
                          key={lb.stage}
                          style={{
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--border-main)',
                            borderRadius: '4px',
                            padding: '5px 8px',
                            fontSize: '10px',
                          }}
                        >
                          <div className="mono" style={{ fontWeight: 900, color: 'var(--accent-primary)' }}>
                            {lb.stage}
                          </div>
                          <div style={{ fontWeight: 700, color: 'var(--text-main)', marginTop: '1px' }}>
                            {lb.bonus}
                          </div>
                          <div style={{ color: 'var(--text-muted)', marginTop: '1px' }}>{lb.verdict}</div>
                        </div>
                      ))}
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '6px',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        marginTop: '8px',
                        fontSize: '11px',
                      }}
                    >
                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <strong>Best Holders:</strong>
                        {eq.bestHolderSlugs.map((uSlug) => {
                          const holder = hub.units.find((u) => u.slug === uSlug);
                          if (!holder) return null;
                          return (
                            <Link
                              key={uSlug}
                              href={`/${hub.slug}/units/${uSlug}`}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                background: 'var(--bg-surface)',
                                border: '1px solid var(--border-main)',
                                padding: '3px 8px 3px 4px',
                                borderRadius: '4px',
                                fontWeight: 800,
                                color: 'var(--accent-primary)',
                              }}
                            >
                              <img
                                src={holder.imageUrl}
                                alt={holder.nameEn}
                                width={30}
                                height={30}
                                style={{
                                  width: '30px',
                                  height: '30px',
                                  borderRadius: '5px',
                                  objectFit: 'cover',
                                  objectPosition: 'top',
                                }}
                              />
                              <span>{holder.nameEn}</span>
                            </Link>
                          );
                        })}
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleOwnedEquip(eq.slug)}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '4px',
                          border: ownedEquipSlugs.includes(eq.slug)
                            ? '1.5px solid #15803D'
                            : '1px solid var(--border-strong)',
                          background: ownedEquipSlugs.includes(eq.slug) ? '#DCFCE7' : 'var(--bg-surface)',
                          color: ownedEquipSlugs.includes(eq.slug) ? '#15803D' : 'var(--text-main)',
                          fontSize: '10.5px',
                          fontWeight: 900,
                          cursor: 'pointer',
                        }}
                      >
                        {ownedEquipSlugs.includes(eq.slug) ? '✓ Owned in My Box' : '+ Add Gear to My Box'}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          )}

          {/* =====================================================================
              TOPIC VIEW 3: MONSTERS, RAID BOSSES & HOW-TO-BEAT STRATEGY DATABASE
              ===================================================================== */}
          {activeTab === 'bosses' && (
            <section
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {hub.bosses.map((boss) => (
                <article
                  key={boss.slug}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-main)',
                    borderRadius: '6px',
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'center',
                      borderBottom: '2px solid var(--border-strong)',
                      paddingBottom: '12px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <img
                      src={boss.imageUrl}
                      alt={boss.nameEn}
                      style={{
                        width: '230px',
                        height: '124px',
                        objectFit: 'cover',
                        borderRadius: '7px',
                        border: '2px solid var(--border-strong)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '16px', fontWeight: 900 }}>{boss.nameEn}</div>
                      <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', fontWeight: 700, marginTop: '2px' }}>
                        {boss.modeName} • {boss.difficultyLabel}
                      </div>
                      <div
                        className="mono"
                        style={{
                          fontSize: '12px',
                          fontWeight: 900,
                          color: 'var(--accent-primary)',
                          marginTop: '4px',
                        }}
                      >
                        {boss.hpStat} | {boss.shieldOrDpStat}
                      </div>
                    </div>
                  </div>

                  {/* WEAKNESSES & RESISTANCES WITH REAL ELEMENT / WEAPON CONCEPT ICONS */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div
                      style={{
                        background: 'var(--green-bg)',
                        border: '1px solid var(--border-main)',
                        padding: '8px 10px',
                        borderRadius: '4px',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '10.5px',
                          fontWeight: 900,
                          color: 'var(--green-primary)',
                          marginBottom: '6px',
                        }}
                      >
                        EXPLOITABLE WEAKNESSES / OPTIMAL TRIGGERS
                      </div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {boss.weaknesses.map((wk) => (
                          <span
                            key={wk}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              background: 'var(--bg-surface)',
                              border: '1px solid var(--border-main)',
                              padding: '4px 8px',
                              borderRadius: '4px',
                              fontSize: '11px',
                              fontWeight: 800,
                            }}
                          >
                            <img
                              src={getStatConceptIconUrl(hub.slug, wk, topUnitThumb)}
                              alt={wk}
                              width={20}
                              height={20}
                              style={{ width: '20px', height: '20px', borderRadius: '3px', objectFit: 'cover' }}
                            />
                            <span>{wk}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      style={{
                        background: 'var(--accent-bg)',
                        border: '1px solid var(--accent-border)',
                        padding: '8px 10px',
                        borderRadius: '4px',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '10.5px',
                          fontWeight: 900,
                          color: 'var(--accent-primary)',
                          marginBottom: '6px',
                        }}
                      >
                        BOSS RESISTANCES / PENALTIES
                      </div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {boss.resistances.map((rs) => (
                          <span
                            key={rs}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              background: 'var(--bg-surface)',
                              border: '1px solid var(--accent-border)',
                              padding: '4px 8px',
                              borderRadius: '4px',
                              fontSize: '11px',
                              fontWeight: 800,
                            }}
                          >
                            <img
                              src={getStatConceptIconUrl(hub.slug, rs, topEquipThumb)}
                              alt={rs}
                              width={20}
                              height={20}
                              style={{ width: '20px', height: '20px', borderRadius: '3px', objectFit: 'cover' }}
                            />
                            <span>{rs}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* TURN-BY-TURN ATTACK ROTATION TABLE */}
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 900, marginBottom: '6px' }}>
                      BOSS ATTACK PATTERN &amp; EXACT COUNTER TIMING
                    </div>
                    <table
                      style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        border: '1px solid var(--border-main)',
                        fontSize: '11px',
                      }}
                    >
                      <thead>
                        <tr style={{ background: 'var(--bg-subnav)', color: '#FFF' }}>
                          <th style={{ padding: '6px 8px', textAlign: 'left', width: '130px' }}>
                            TURN / PHASE
                          </th>
                          <th style={{ padding: '6px 8px', textAlign: 'left', width: '180px' }}>
                            BOSS ACTION
                          </th>
                          <th style={{ padding: '6px 8px', textAlign: 'left', width: '170px' }}>
                            DAMAGE / EFFECT
                          </th>
                          <th style={{ padding: '6px 8px', textAlign: 'left' }}>
                            HOW TO COUNTER
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {boss.attackPatterns.map((pat, idx) => (
                          <tr
                            key={idx}
                            style={{ borderBottom: '1px solid var(--border-subtle)' }}
                          >
                            <td
                              className="mono"
                              style={{ padding: '6px 8px', fontWeight: 900, color: 'var(--accent-primary)' }}
                            >
                              {pat.turnOrPhase}
                            </td>
                            <td style={{ padding: '6px 8px', fontWeight: 800 }}>{pat.attackName}</td>
                            <td className="mono" style={{ padding: '6px 8px' }}>
                              {pat.damageType}
                            </td>
                            <td style={{ padding: '6px 8px', color: 'var(--text-secondary)' }}>
                              {pat.counterAction}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* STEP-BY-STEP HOW TO BEAT WALKTHROUGH */}
                  <div
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-main)',
                      borderRadius: '4px',
                      padding: '10px 12px',
                    }}
                  >
                    <div style={{ fontSize: '12px', fontWeight: 900, marginBottom: '6px' }}>
                      STEP-BY-STEP &ldquo;HOW TO BEAT&rdquo; CLEAR STRATEGY
                    </div>
                    <ol
                      style={{
                        paddingLeft: '18px',
                        fontSize: '11.5px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                      }}
                    >
                      {boss.strategySteps.map((step, i) => (
                        <li key={i} style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* RECOMMENDED COUNTER TEAM PORTRAITS + RECOMMENDED RAID GEAR */}
                  <div>
                    <div style={{ fontSize: '11.5px', fontWeight: 900, marginBottom: '6px' }}>
                      RECOMMENDED APEX COUNTER UNITS &amp; RAID EQUIPMENT:
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {boss.recommendedUnitSlugs.map((uSlug) => {
                        const unit = hub.units.find((u) => u.slug === uSlug);
                        if (!unit) return null;
                        return (
                          <Link
                            key={uSlug}
                            href={`/${hub.slug}/units/${uSlug}`}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '5px 10px 5px 5px',
                              background: 'var(--bg-subtle)',
                              border: '1px solid var(--border-main)',
                              borderRadius: '5px',
                              fontSize: '11px',
                              fontWeight: 800,
                            }}
                          >
                            <img
                              src={unit.imageUrl}
                              alt={unit.nameEn}
                              style={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '5px',
                                objectFit: 'cover',
                                objectPosition: 'top',
                              }}
                            />
                            <div>
                              <div>{unit.nameEn}</div>
                              <div style={{ fontSize: '9.5px', color: 'var(--accent-primary)' }}>
                                {unit.role} • {unit.tiers.overallAsian.tierRank}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                      {hub.equipments.slice(0, 2).map((eq) => (
                        <button
                          key={eq.slug}
                          type="button"
                          onClick={() => setActiveTab('weapons')}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '5px 10px 5px 5px',
                            background: 'var(--bg-subtle)',
                            border: '1px solid var(--border-main)',
                            borderRadius: '5px',
                            fontSize: '11px',
                            fontWeight: 800,
                            cursor: 'pointer',
                            textAlign: 'left',
                          }}
                        >
                          <img
                            src={eq.imageUrl}
                            alt={eq.nameEn}
                            style={{
                              width: '42px',
                              height: '42px',
                              borderRadius: '5px',
                              objectFit: 'cover',
                            }}
                          />
                          <div>
                            <div style={{ color: 'var(--text-main)' }}>{eq.nameEn}</div>
                            <div style={{ fontSize: '9.5px', color: 'var(--amber-primary)' }}>
                              {eq.category} • Tier {eq.tierRank}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </section>
          )}

          {/* =====================================================================
              TOPIC VIEW 4: UPCOMING BANNERS & INTERACTIVE PULL SAVINGS CALCULATOR
              ===================================================================== */}
          {activeTab === 'banners' && (
            <section style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* INTERACTIVE CURRENCY & SPARK PLANNER */}
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '2px solid var(--border-strong)',
                  borderRadius: '4px',
                  padding: '12px 14px',
                }}
              >
                <div
                  style={{
                    fontSize: '13.5px',
                    fontWeight: 900,
                    marginBottom: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <img
                      src={gameAppIcon}
                      alt={hub.currencyName}
                      width={26}
                      height={26}
                      style={{ width: '26px', height: '26px', borderRadius: '5px', objectFit: 'cover' }}
                    />
                    <span>
                      INTERACTIVE {hub.currencyName.toUpperCase()} PULL SAVINGS &amp; PITY CALCULATOR
                    </span>
                  </span>
                  <span className="mono" style={{ fontSize: '11px', color: 'var(--accent-primary)' }}>
                    Hard Spark Pity: {hub.pityThreshold} Pulls ({hub.pityThreshold * hub.pullCostSingle}{' '}
                    {hub.currencyName})
                  </span>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                    background: 'var(--bg-subtle)',
                    padding: '10px',
                    borderRadius: '4px',
                    border: '1px solid var(--border-main)',
                  }}
                >
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      fontSize: '11px',
                      fontWeight: 800,
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      <img
                        src={topEquipThumb}
                        alt={hub.currencyName}
                        width={18}
                        height={18}
                        style={{ width: '18px', height: '18px', borderRadius: '3px', objectFit: 'cover' }}
                      />
                      <span>Current {hub.currencyName} Saved:</span>
                    </span>
                    <input
                      type="number"
                      min={0}
                      step={300}
                      value={currentCurrency}
                      onChange={(e) => setCurrentCurrency(Number(e.target.value) || 0)}
                      style={{
                        padding: '6px 8px',
                        fontSize: '12.5px',
                        fontWeight: 800,
                        border: '1px solid var(--border-main)',
                        borderRadius: '3px',
                        background: 'var(--bg-surface)',
                        color: 'var(--text-main)',
                      }}
                    />
                  </label>

                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      fontSize: '11px',
                      fontWeight: 800,
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      <img
                        src={secondEquipThumb}
                        alt="Pull Tickets"
                        width={18}
                        height={18}
                        style={{ width: '18px', height: '18px', borderRadius: '3px', objectFit: 'cover' }}
                      />
                      <span>Current Pull Tickets:</span>
                    </span>
                    <input
                      type="number"
                      min={0}
                      value={currentTickets}
                      onChange={(e) => setCurrentTickets(Number(e.target.value) || 0)}
                      style={{
                        padding: '6px 8px',
                        fontSize: '12.5px',
                        fontWeight: 800,
                        border: '1px solid var(--border-main)',
                        borderRadius: '3px',
                        background: 'var(--bg-surface)',
                        color: 'var(--text-main)',
                      }}
                    />
                  </label>

                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '11.5px',
                      fontWeight: 800,
                      paddingTop: '16px',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={hasMonthlyPass}
                      onChange={(e) => setHasMonthlyPass(e.target.checked)}
                      style={{ width: '16px', height: '16px' }}
                    />
                    <span>
                      Include Monthly Pass (+{hub.monthlyPassIncome.toLocaleString()} {hub.currencyName}/mo)
                    </span>
                  </label>
                </div>
              </div>

              {/* CHRONOLOGICAL BANNERS WITH CUMULATIVE MULTI-BANNER PULL ROADMAP LEDGER */}
              {(() => {
                let cumulativeSpentCurrency = 0;
                return hub.banners.map((bn, index) => {
                  const daysFromNow = (index + 1) * 28;
                  const planMode: BannerPlanMode = bannerPlanMap[bn.slug] || 'SKIP';
                  const plannedCostThisBanner =
                    planMode === 'SPARK'
                      ? bn.pityCurrencyCost
                      : planMode === 'HALF'
                        ? Math.round(bn.pityCurrencyCost * 0.5)
                        : 0;

                  const effectiveStartingCurrency = Math.max(0, currentCurrency - cumulativeSpentCurrency);
                  const priorOverdraft = Math.max(0, cumulativeSpentCurrency - currentCurrency);

                  const calc = calculatePullSavings({
                    currentCurrency: effectiveStartingCurrency,
                    currentTickets: index === 0 ? currentTickets : 0,
                    daysUntilBanner: daysFromNow,
                    monthlyF2pIncome: hub.monthlyF2pIncome,
                    monthlyPassIncome: hub.monthlyPassIncome,
                    hasMonthlyPass,
                    singlePullCost: hub.pullCostSingle,
                    pitySparkPulls: hub.pityThreshold,
                    featuredRatePerPull: 0.0075,
                  });

                  const netAvailableAtBanner = calc.totalCurrencyAvailable - priorOverdraft;
                  const balanceAfterPlannedPull = netAvailableAtBanner - plannedCostThisBanner;
                  const canAffordPlanned = balanceAfterPlannedPull >= 0;

                  cumulativeSpentCurrency += plannedCostThisBanner;

                  const featuredUnits = bn.featuredUnitSlugs
                    .map((s) => hub.units.find((u) => u.slug === s))
                    .filter(Boolean);

                  return (
                    <article
                      key={bn.slug}
                      style={{
                        background: 'var(--bg-surface)',
                        border:
                          planMode !== 'SKIP'
                            ? '2px solid var(--accent-primary)'
                            : '1px solid var(--border-main)',
                        borderRadius: '6px',
                        padding: '12px 14px',
                        display: 'flex',
                        gap: '14px',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                      }}
                    >
                      <img
                        src={bn.imageUrl}
                        alt={bn.bannerTitle}
                        style={{
                          width: '230px',
                          height: '124px',
                          objectFit: 'cover',
                          borderRadius: '7px',
                          border: '2px solid var(--border-strong)',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.16)',
                        }}
                      />
                      <div style={{ flex: 1, minWidth: '250px' }}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '6px',
                          }}
                        >
                          <div style={{ fontSize: '15px', fontWeight: 900 }}>{bn.bannerTitle}</div>
                          <span
                            style={{
                              background:
                                bn.pullVerdict === 'MUST_PULL' ? 'var(--green-bg)' : 'var(--amber-bg)',
                              color:
                                bn.pullVerdict === 'MUST_PULL'
                                  ? 'var(--green-primary)'
                                  : 'var(--amber-primary)',
                              padding: '3px 9px',
                              borderRadius: '4px',
                              fontSize: '11px',
                              fontWeight: 900,
                            }}
                          >
                            VERDICT: {bn.pullVerdict.replace('_', ' ')}
                          </span>
                        </div>

                        <div
                          className="mono"
                          style={{
                            fontSize: '11px',
                            color: 'var(--text-muted)',
                            marginTop: '3px',
                            fontWeight: 700,
                          }}
                        >
                          Banner Schedule:{' '}
                          <strong style={{ color: 'var(--text-main)' }}>
                            {bn.estGlobalStartDate} &ndash; {bn.estGlobalEndDate}
                          </strong>{' '}
                          (Starts in ~{daysFromNow}d) • Spark Pity: {bn.pityCurrencyCost.toLocaleString()} {hub.currencyName}
                        </div>

                        {/* INTERACTIVE BANNER PULL PLAN TOGGLE (DEDUCTS FROM SUBSEQUENT BANNERS) */}
                        <div
                          style={{
                            display: 'flex',
                            gap: '6px',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            marginTop: '7px',
                          }}
                        >
                          <span className="mono" style={{ fontSize: '10px', fontWeight: 900, color: 'var(--text-muted)' }}>
                            YOUR PULL PLAN:
                          </span>
                          {(
                            [
                              {
                                mode: 'SPARK',
                                label: `🎯 Plan 1× Spark (-${bn.pityCurrencyCost.toLocaleString()})`,
                              },
                              {
                                mode: 'HALF',
                                label: `🔥 Plan 50/50 Attempt (-${Math.round(bn.pityCurrencyCost * 0.5).toLocaleString()})`,
                              },
                              { mode: 'SKIP', label: '⏭️ Skip & Save Currency' },
                            ] as const
                          ).map((btn) => (
                            <button
                              key={btn.mode}
                              type="button"
                              onClick={() => setBannerPlan(bn.slug, btn.mode)}
                              style={{
                                padding: '4px 9px',
                                borderRadius: '4px',
                                fontSize: '10.5px',
                                fontWeight: 900,
                                cursor: 'pointer',
                                border:
                                  planMode === btn.mode
                                    ? '1.5px solid var(--accent-primary)'
                                    : '1px solid var(--border-main)',
                                background:
                                  planMode === btn.mode ? 'var(--accent-primary)' : 'var(--bg-subtle)',
                                color: planMode === btn.mode ? '#FFF' : 'var(--text-main)',
                              }}
                            >
                              {btn.label}
                            </button>
                          ))}
                        </div>

                        {/* FEATURED UNITS VISUAL ROW */}
                        {featuredUnits.length > 0 && (
                          <div
                            style={{
                              display: 'flex',
                              gap: '6px',
                              alignItems: 'center',
                              flexWrap: 'wrap',
                              marginTop: '6px',
                            }}
                          >
                            <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-muted)' }}>
                              Featured Units:
                            </span>
                            {featuredUnits.map((fu) =>
                              fu ? (
                                <Link
                                  key={fu.slug}
                                  href={`/${hub.slug}/units/${fu.slug}`}
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    background: 'var(--bg-subtle)',
                                    border: '1px solid var(--border-main)',
                                    padding: '3px 8px 3px 4px',
                                    borderRadius: '4px',
                                    fontSize: '11px',
                                    fontWeight: 800,
                                    color: 'var(--text-main)',
                                  }}
                                >
                                  <img
                                    src={fu.imageUrl}
                                    alt={fu.nameEn}
                                    width={30}
                                    height={30}
                                    style={{
                                      width: '30px',
                                      height: '30px',
                                      borderRadius: '5px',
                                      objectFit: 'cover',
                                      objectPosition: 'top',
                                    }}
                                  />
                                  <span>{fu.nameEn}</span>
                                </Link>
                              ) : null
                            )}
                          </div>
                        )}

                        <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '6px' }}>
                          {bn.verdictReasoning}
                        </p>

                        {/* CUMULATIVE LEDGER PROJECTION BAR FOR THIS BANNER */}
                        <div
                          className="mono"
                          style={{
                            marginTop: '8px',
                            background: 'var(--bg-subtle)',
                            border: '1px solid var(--border-main)',
                            borderRadius: '4px',
                            padding: '7px 10px',
                            fontSize: '11px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '8px',
                          }}
                        >
                          <span>
                            Available on Arrival:{' '}
                            <strong>
                              {netAvailableAtBanner.toLocaleString()} {hub.currencyName}
                            </strong>
                          </span>
                          <span>
                            After Planned Pull:{' '}
                            <strong
                              style={{
                                color: canAffordPlanned ? 'var(--green-primary)' : 'var(--accent-primary)',
                              }}
                            >
                              {balanceAfterPlannedPull.toLocaleString()} {hub.currencyName}
                            </strong>
                          </span>
                          <span
                            style={{
                              fontWeight: 900,
                              color: canAffordPlanned
                                ? 'var(--green-primary)'
                                : 'var(--accent-primary)',
                            }}
                          >
                            {planMode === 'SKIP'
                              ? `⏭️ SKIPPING — BANKING ${netAvailableAtBanner.toLocaleString()} FOR NEXT BANNER`
                              : canAffordPlanned
                                ? `✓ PLAN FUNDED (+${balanceAfterPlannedPull.toLocaleString()} LEFT OVER)`
                                : `⚠️ SHORT BY ${Math.abs(balanceAfterPlannedPull).toLocaleString()} AFTER PRIOR BANNERS`}
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                });
              })()}
            </section>
          )}

          {/* =====================================================================
              TOPIC VIEW 5: VISUAL STAT COMPARISON & COMBAT DAMAGE CALCULATOR
              ===================================================================== */}
          {activeTab === 'compare' && unitA && unitB && (
            <section style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* PART A: SIDE-BY-SIDE VISUAL STAT COMPARISON */}
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-main)',
                  borderRadius: '4px',
                  padding: '14px',
                }}
              >
                <h2
                  style={{
                    fontSize: '13.5px',
                    fontWeight: 900,
                    borderLeft: '4px solid var(--accent-primary)',
                    paddingLeft: '8px',
                    marginBottom: '10px',
                  }}
                >
                  SIDE-BY-SIDE STATISTICAL &amp; LONGEVITY COMPARISON
                </h2>

                {/* SELECTORS FOR UNIT A VS UNIT B */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    gap: '10px',
                    alignItems: 'center',
                    background: 'var(--bg-subtle)',
                    padding: '10px',
                    borderRadius: '4px',
                    border: '1px solid var(--border-main)',
                    marginBottom: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img
                      src={unitA.imageUrl}
                      alt={unitA.nameEn}
                      style={{
                        width: '62px',
                        height: '62px',
                        borderRadius: '7px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        border: '2.5px solid var(--amber-primary)',
                      }}
                    />
                    <select
                      aria-label="Select First Unit to Compare"
                      value={unitASlug}
                      onChange={(e) => setUnitASlug(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '6px',
                        fontSize: '12px',
                        fontWeight: 800,
                        border: '1px solid var(--border-main)',
                        borderRadius: '3px',
                        background: 'var(--bg-surface)',
                        color: 'var(--text-main)',
                      }}
                    >
                      {hub.units.map((u) => (
                        <option key={u.slug} value={u.slug}>
                          {u.nameEn} ({u.tiers.overallAsian.tierRank})
                        </option>
                      ))}
                    </select>
                  </div>

                  <span
                    className="mono"
                    style={{
                      fontWeight: 900,
                      fontSize: '11px',
                      background: 'var(--bg-header)',
                      color: '#FFF',
                      padding: '4px 8px',
                      borderRadius: '3px',
                    }}
                  >
                    VS
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <select
                      aria-label="Select Second Unit to Compare"
                      value={unitBSlug}
                      onChange={(e) => setUnitBSlug(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '6px',
                        fontSize: '12px',
                        fontWeight: 800,
                        border: '1px solid var(--border-main)',
                        borderRadius: '3px',
                        background: 'var(--bg-surface)',
                        color: 'var(--text-main)',
                      }}
                    >
                      {hub.units.map((u) => (
                        <option key={u.slug} value={u.slug}>
                          {u.nameEn} ({u.tiers.overallAsian.tierRank})
                        </option>
                      ))}
                    </select>
                    <img
                      src={unitB.imageUrl}
                      alt={unitB.nameEn}
                      style={{
                        width: '62px',
                        height: '62px',
                        borderRadius: '7px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        border: '2.5px solid var(--accent-primary)',
                      }}
                    />
                  </div>
                </div>

                {/* 10 NORMALIZED VISUAL COMPARISON BARS WITH REAL STAT ICONS */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {comparisonRows.map((row) => (
                    <div key={row.label}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          fontSize: '11px',
                          fontWeight: 800,
                          marginBottom: '3px',
                        }}
                      >
                        <span className="mono" style={{ color: 'var(--amber-primary)' }}>
                          {row.unitAVal.toLocaleString()} {row.winner === 'A' ? '★' : ''}
                        </span>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            color: 'var(--text-secondary)',
                            textTransform: 'uppercase',
                            fontSize: '10px',
                          }}
                        >
                          <img
                            src={getStatConceptIconUrl(hub.slug, row.label, topEquipThumb)}
                            alt={row.label}
                            width={18}
                            height={18}
                            style={{ width: '18px', height: '18px', borderRadius: '3px', objectFit: 'cover' }}
                          />
                          <span>{row.label}</span>
                        </span>
                        <span className="mono" style={{ color: 'var(--accent-primary)' }}>
                          {row.winner === 'B' ? '★ ' : ''}
                          {row.unitBVal.toLocaleString()}
                        </span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                        <div
                          style={{
                            height: '8px',
                            background: 'var(--border-subtle)',
                            borderRadius: '2px',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              width: `${row.unitAPct}%`,
                              height: '100%',
                              background: 'var(--amber-primary)',
                            }}
                          />
                        </div>
                        <div
                          style={{
                            height: '8px',
                            background: 'var(--border-subtle)',
                            borderRadius: '2px',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              width: `${row.unitBPct}%`,
                              height: '100%',
                              background: 'var(--accent-primary)',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PART B: INTERACTIVE BUFF-STACKING & FINAL DAMAGE CALCULATOR */}
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-main)',
                  borderRadius: '4px',
                  padding: '14px',
                }}
              >
                <h2
                  style={{
                    fontSize: '13.5px',
                    fontWeight: 900,
                    borderLeft: '4px solid var(--border-strong)',
                    paddingLeft: '8px',
                    marginBottom: '10px',
                  }}
                >
                  INTERACTIVE BUFF-STACKING &amp; EXACT DAMAGE CALCULATOR
                </h2>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                    fontSize: '11px',
                    fontWeight: 800,
                  }}
                >
                  {(
                    [
                      {
                        label: 'Skill Base Potency:',
                        val: basePotency,
                        set: setBasePotency,
                        icon: getStatConceptIconUrl(hub.slug, 'power', topEquipThumb),
                      },
                      {
                        label: 'Skill ATK Buff #1 (%):',
                        val: skillAtk1,
                        set: setSkillAtk1,
                        icon: getStatConceptIconUrl(hub.slug, 'atk', topEquipThumb),
                      },
                      {
                        label: 'Skill ATK Buff #2 (%):',
                        val: skillAtk2,
                        set: setSkillAtk2,
                        icon: getStatConceptIconUrl(hub.slug, 'atk', topEquipThumb),
                      },
                      {
                        label: 'Crit DMG Buff #1 (%):',
                        val: critDmg1,
                        set: setCritDmg1,
                        icon: getStatConceptIconUrl(hub.slug, 'crit', topEquipThumb),
                      },
                      {
                        label: 'Crit DMG Buff #2 (%):',
                        val: critDmg2,
                        set: setCritDmg2,
                        icon: getStatConceptIconUrl(hub.slug, 'crit', topEquipThumb),
                      },
                      {
                        label: 'Elemental Field Zone (%):',
                        val: fieldZonePct,
                        set: setFieldZonePct,
                        icon: getStatConceptIconUrl(hub.slug, 'fire', topEquipThumb),
                      },
                      {
                        label: 'Enemy DEF Down #1 (%):',
                        val: defDown1,
                        set: setDefDown1,
                        icon: getStatConceptIconUrl(hub.slug, 'def', topEquipThumb),
                      },
                      {
                        label: 'Elemental DEF Down #2 (%):',
                        val: defDown2,
                        set: setDefDown2,
                        icon: getStatConceptIconUrl(hub.slug, 'dark', topEquipThumb),
                      },
                      {
                        label: 'Multi-Hit Bonus (%):',
                        val: multiHitPct,
                        set: setMultiHitPct,
                        icon: getStatConceptIconUrl(hub.slug, 'speed', topEquipThumb),
                      },
                    ] as const
                  ).map((inp) => (
                    <label key={inp.label} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <img
                          src={inp.icon}
                          alt={inp.label}
                          width={18}
                          height={18}
                          style={{ width: '18px', height: '18px', borderRadius: '3px', objectFit: 'cover' }}
                        />
                        <span>{inp.label}</span>
                      </span>
                      <input
                        type="number"
                        value={inp.val}
                        onChange={(e) => inp.set(Number(e.target.value) || 0)}
                        style={{ padding: '5px', border: '1px solid var(--border-main)', borderRadius: '3px' }}
                      />
                    </label>
                  ))}
                </div>

                <div
                  className="mono"
                  style={{
                    marginTop: '12px',
                    background: 'var(--bg-subtle)',
                    border: '2px solid var(--border-strong)',
                    borderRadius: '4px',
                    padding: '10px 12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '10px',
                  }}
                >
                  <div style={{ fontSize: '11px' }}>
                    <span>ATK Bucket: {combatResult.totalSkillAtkMult}x</span> •{' '}
                    <span>Crit Bucket: {combatResult.totalCritMult}x</span> •{' '}
                    <span>Field: {combatResult.totalFieldMult}x</span> •{' '}
                    <span>DEF Shred: {combatResult.totalDefDownMult}x</span> •{' '}
                    <span>Multi-Hit: {combatResult.totalMultiHitMult}x</span>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 900, color: 'var(--accent-primary)' }}>
                    Total Multiplier: {combatResult.finalDamageMultiplier}x &rarr; Est. Final DMG:{' '}
                    {combatResult.estimatedFinalDamage.toLocaleString()}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* GACHACREST TIER RATING METHODOLOGY & FREQUENTLY ASKED QUESTIONS (SEO / GEO AUTHORITY) */}
          <section
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-main)',
              borderRadius: '4px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginTop: '6px',
            }}
          >
            <h2
              style={{
                fontSize: '13.5px',
                fontWeight: 900,
                borderLeft: '4px solid var(--accent-primary)',
                paddingLeft: '8px',
              }}
            >
              GACHACREST TIER RATING METHODOLOGY &amp; {hub.name.toUpperCase()} FAQ
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '8px',
              }}
            >
              <div
                style={{
                  background: 'var(--accent-bg)',
                  border: '1px solid var(--accent-border)',
                  borderRadius: '4px',
                  padding: '9px 10px',
                }}
              >
                <div className="mono" style={{ fontSize: '11.5px', fontWeight: 900, color: 'var(--accent-primary)' }}>
                  SSS TIER (9.5 – 10.0) • APEX META
                </div>
                <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '3px', lineHeight: 1.4 }}>
                  Meta-defining units and gear that compress multiple roles, enable 1-turn endgame boss clears, and hold 12+ months of longevity.
                </p>
              </div>
              <div
                style={{
                  background: 'var(--amber-bg)',
                  border: '1px solid var(--border-main)',
                  borderRadius: '4px',
                  padding: '9px 10px',
                }}
              >
                <div className="mono" style={{ fontSize: '11.5px', fontWeight: 900, color: 'var(--amber-primary)' }}>
                  SS TIER (9.0 – 9.4) • CORE STAPLE
                </div>
                <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '3px', lineHeight: 1.4 }}>
                  Best-in-slot elemental or distance specialists required for high-score clear rotations and multi-squad endgame raids.
                </p>
              </div>
              <div
                style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-main)',
                  borderRadius: '4px',
                  padding: '9px 10px',
                }}
              >
                <div className="mono" style={{ fontSize: '11.5px', fontWeight: 900, color: 'var(--text-main)' }}>
                  S &amp; A TIER (8.0 – 8.9) • SPECIALIST
                </div>
                <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '3px', lineHeight: 1.4 }}>
                  Strong elemental counters, secondary squad fillers, and high-value F2P options that perform reliably when paired with SSS buffers.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
              <div
                style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-main)',
                  borderRadius: '4px',
                  padding: '10px',
                }}
              >
                <h3 style={{ fontSize: '12px', fontWeight: 900, color: 'var(--text-main)' }}>
                  Who is the #1 best character to reroll or pull in {hub.name}?
                </h3>
                <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.45 }}>
                  Currently, <strong>{hub.units[0]?.nameEn}</strong> ({hub.units[0]?.tiers.overallAsian.numericScore.toFixed(1)}/10 SSS) and{' '}
                  <strong>{hub.units[1]?.nameEn}</strong> ({hub.units[1]?.tiers.overallAsian.numericScore.toFixed(1)}/10 SSS) rank at the top of the{' '}
                  {hub.name} meta due to unmatched burst scaling and role compression.
                </p>
              </div>
              <div
                style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-main)',
                  borderRadius: '4px',
                  padding: '10px',
                }}
              >
                <h3 style={{ fontSize: '12px', fontWeight: 900, color: 'var(--text-main)' }}>
                  How much {hub.currencyName} is required for hard pity in {hub.name}?
                </h3>
                <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.45 }}>
                  Hard pity / spark requires <strong>{hub.pityThreshold} pulls</strong> (
                  <strong>{(hub.pityThreshold * hub.pullCostSingle).toLocaleString()} {hub.currencyName}</strong> at {hub.pullCostSingle}{' '}
                  {hub.currencyName} per single pull). F2P players earn approximately {hub.monthlyF2pIncome.toLocaleString()} {hub.currencyName}/month.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* ================= RIGHT COLUMN: LIVE ACCOUNT BOX & SQUAD BUILDER DOCK + UPCOMING BANNERS ================= */}
        <aside className="wiki-right-rail" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* LIVE MY BOX & INTERACTIVE SQUAD SYNERGY BUILDER DOCK */}
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1.5px solid var(--border-strong)',
              borderRadius: '6px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '2px solid var(--accent-primary)',
                paddingBottom: '6px',
              }}
            >
              <span style={{ fontSize: '11.5px', fontWeight: 900 }}>
                MY {hub.shortName} BOX &amp; SQUAD BUILDER
              </span>
              <span
                className="mono"
                style={{
                  fontSize: '10px',
                  fontWeight: 900,
                  padding: '2px 6px',
                  borderRadius: '3px',
                  background: 'var(--accent-bg)',
                  color: 'var(--accent-primary)',
                }}
              >
                {ownedCount}/{hub.units.length} ({completionPct}%)
              </span>
            </div>

            {/* COLLECTION PROGRESS BAR */}
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '10.5px',
                  fontWeight: 800,
                  color: 'var(--text-secondary)',
                  marginBottom: '4px',
                }}
              >
                <span>Units Owned: {ownedCount}</span>
                <span>Gear Owned: {ownedEquipSlugs.length}/{hub.equipments.length}</span>
              </div>
              <div
                style={{
                  height: '7px',
                  width: '100%',
                  background: 'var(--bg-subtle)',
                  borderRadius: '4px',
                  border: '1px solid var(--border-main)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${Math.max(4, completionPct)}%`,
                    background: '#15803D',
                  }}
                />
              </div>
              <div style={{ display: 'flex', gap: '5px', marginTop: '6px' }}>
                <button
                  type="button"
                  onClick={handleAutoBuildFromOwnedBox}
                  style={{
                    flex: 1,
                    padding: '6px 6px',
                    background: '#15803D',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '10.5px',
                    fontWeight: 900,
                    cursor: 'pointer',
                  }}
                >
                  ⚡ Build From My Box
                </button>
                <button
                  type="button"
                  onClick={handleAutoBuildMetaApex}
                  style={{
                    flex: 1,
                    padding: '6px 6px',
                    background: 'var(--bg-header)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '10.5px',
                    fontWeight: 900,
                    cursor: 'pointer',
                  }}
                >
                  🏆 Meta Apex Team
                </button>
              </div>
            </div>

            {/* ACTIVE SQUAD SLOTS (6 FOR HBR/UMA, 5 FOR SOC/STAR SAVIOR) */}
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-main)',
                borderRadius: '5px',
                padding: '8px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '10.5px',
                  fontWeight: 900,
                  marginBottom: '6px',
                }}
              >
                <span>
                  {ownedCount === 0
                    ? `META EXAMPLE TEAM (${activeSquadUnits.length}/${statConfig.squadSize})`
                    : `MY ACTIVE SQUAD (${activeSquadUnits.length}/${statConfig.squadSize})`}
                </span>
                <span
                  className="mono"
                  style={{
                    fontSize: '10px',
                    fontWeight: 900,
                    padding: '1px 6px',
                    borderRadius: '3px',
                    background: squadAudit.scorePercent >= 80 ? '#DCFCE7' : '#FEF3C7',
                    color: squadAudit.scorePercent >= 80 ? '#15803D' : '#B45309',
                  }}
                >
                  Synergy: {squadAudit.scorePercent}% ({squadAudit.grade})
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '6px',
                }}
              >
                {Array.from({ length: statConfig.squadSize }).map((_, slotIdx) => {
                  const sqUnit = activeSquadUnits[slotIdx];
                  if (!sqUnit) {
                    return (
                      <div
                        key={`empty-${slotIdx}`}
                        style={{
                          height: '66px',
                          borderRadius: '5px',
                          border: '1.5px dashed var(--border-strong)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '9.5px',
                          fontWeight: 800,
                          color: 'var(--text-muted)',
                          textAlign: 'center',
                          padding: '4px',
                        }}
                      >
                        Slot #{slotIdx + 1}
                      </div>
                    );
                  }
                  const elColor = getElementColor(sqUnit.element);
                  return (
                    <div
                      key={sqUnit.slug}
                      style={{
                        position: 'relative',
                        borderRadius: '5px',
                        border: `2px solid ${elColor}`,
                        background: 'var(--bg-surface)',
                        padding: '3px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => toggleSquadUnit(sqUnit.slug)}
                        title="Remove from Squad"
                        style={{
                          position: 'absolute',
                          top: '2px',
                          right: '2px',
                          width: '16px',
                          height: '16px',
                          borderRadius: '3px',
                          border: 'none',
                          background: 'rgba(24,24,27,0.85)',
                          color: '#FFF',
                          fontSize: '9px',
                          fontWeight: 900,
                          cursor: 'pointer',
                          lineHeight: 1,
                        }}
                      >
                        ×
                      </button>
                      <Link
                        href={`/${hub.slug}/units/${sqUnit.slug}`}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
                      >
                        <img
                          src={sqUnit.imageUrl}
                          alt={sqUnit.nameEn}
                          width={44}
                          height={44}
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '4px',
                            objectFit: 'cover',
                            objectPosition: 'top',
                          }}
                        />
                        <span
                          style={{
                            fontSize: '9px',
                            fontWeight: 800,
                            marginTop: '2px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '100%',
                          }}
                        >
                          {sqUnit.nameOriginal}
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* LIVE 6-LAYER BUFF & SYNERGY CHECKLIST */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--text-muted)' }}>
                LIVE COMBAT BUFF &amp; ROLE COVERAGE AUDIT:
              </div>
              {squadAudit.checklist.map((item) => (
                <div
                  key={item.label}
                  title={item.hint}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 6px',
                    borderRadius: '4px',
                    background: item.passed ? 'rgba(21, 128, 61, 0.08)' : 'rgba(217, 119, 6, 0.08)',
                    border: item.passed ? '1px solid rgba(21, 128, 61, 0.35)' : '1px solid rgba(217, 119, 6, 0.35)',
                    fontSize: '10px',
                  }}
                >
                  <span
                    style={{
                      fontWeight: 800,
                      color: item.passed ? '#15803D' : '#B45309',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.passed ? '✓ ' : '⚠️ '}
                    {item.label}
                  </span>
                  <span
                    className="mono"
                    style={{
                      fontSize: '9px',
                      fontWeight: 800,
                      color: 'var(--text-muted)',
                      flexShrink: 0,
                    }}
                  >
                    {item.providerName || 'Missing'}
                  </span>
                </div>
              ))}
              <div style={{ fontSize: '10px', color: 'var(--text-secondary)', fontWeight: 700, marginTop: '2px' }}>
                {squadAudit.summaryAdvice}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '6px' }}>
              <button
                type="button"
                onClick={handleExportAccountJson}
                style={{
                  flex: 1,
                  padding: '5px 8px',
                  borderRadius: '4px',
                  border: '1px solid var(--border-main)',
                  background: 'var(--bg-subtle)',
                  fontSize: '10px',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                {backupNotice || 'Copy Box & Squad Backup JSON'}
              </button>
            </div>
          </div>

          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-main)',
              borderRadius: '4px',
              padding: '12px',
            }}
          >
            <div
              style={{
                fontSize: '11.5px',
                fontWeight: 900,
                borderBottom: '2px solid var(--border-strong)',
                paddingBottom: '6px',
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>UPCOMING BANNERS</span>
              <span className="mono" style={{ color: 'var(--accent-primary)', fontSize: '10px' }}>
                PRIORITY
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {hub.banners.slice(0, 3).map((bn) => {
                const featUnit = hub.units.find((u) => u.slug === bn.featuredUnitSlugs[0]);
                return (
                  <div
                    key={bn.slug}
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-main)',
                      borderRadius: '6px',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{ position: 'relative', height: '106px', overflow: 'hidden' }}>
                      <img
                        src={bn.imageUrl}
                        alt={bn.bannerTitle}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center 20%',
                        }}
                      />
                      <span
                        style={{
                          position: 'absolute',
                          top: '6px',
                          right: '6px',
                          background:
                            bn.pullVerdict === 'MUST_PULL' ? '#15803D' : '#D97706',
                          color: '#FFFFFF',
                          fontSize: '9.5px',
                          fontWeight: 900,
                          padding: '2px 6px',
                          borderRadius: '3px',
                          boxShadow: '0 1px 4px rgba(0,0,0,0.4)',
                        }}
                      >
                        {bn.pullVerdict.replace('_', ' ')}
                      </span>
                    </div>
                    <div
                      style={{
                        padding: '7px 8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7px',
                      }}
                    >
                      {featUnit && (
                        <img
                          src={featUnit.imageUrl}
                          alt={featUnit.nameEn}
                          width={30}
                          height={30}
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '5px',
                            objectFit: 'cover',
                            objectPosition: 'top',
                            border: '1px solid var(--border-strong)',
                            flexShrink: 0,
                          }}
                        />
                      )}
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div
                          style={{
                            fontSize: '11px',
                            fontWeight: 900,
                            lineHeight: 1.2,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {bn.featuredNames[0]}
                        </div>
                        <div className="mono" style={{ fontSize: '9.5px', color: 'var(--text-muted)', marginTop: '1px' }}>
                          Release: {bn.estGlobalStartDate}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setActiveTab('banners')}
              style={{
                width: '100%',
                marginTop: '10px',
                padding: '7px',
                background: 'var(--bg-header)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Open Cumulative Pull Roadmap &rarr;
            </button>
          </div>
        </aside>
      </div>

      <SiteFooter />
    </div>
  );
}
