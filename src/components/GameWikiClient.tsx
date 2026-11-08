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
import { AdSlot } from './AdSlot';

export type WikiTabKey = 'tier-list' | 'weapons' | 'bosses' | 'banners' | 'compare';

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

  // Tier List Filters
  const [serverScope, setServerScope] = useState<'ASIAN_FUTURE' | 'GLOBAL_CURRENT'>('ASIAN_FUTURE');
  const [tierCategory, setTierCategory] = useState<'OVERALL' | 'REROLL' | 'BOSS_RAID'>('OVERALL');
  const [selectedElement, setSelectedElement] = useState<string>('ALL');
  const [unitSearch, setUnitSearch] = useState<string>('');

  // Pull Savings Calculator State
  const [currentCurrency, setCurrentCurrency] = useState<number>(hub.pityThreshold * hub.pullCostSingle * 0.55);
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
  const [fragilePct, setFragilePct] = useState<number>(50);
  const [mindEyePct, setMindEyePct] = useState<number>(35);
  const [multiHitPct, setMultiHitPct] = useState<number>(50);
  const [isWeaknessHit, setIsWeaknessHit] = useState<boolean>(true);

  const filteredUnits = useMemo(() => {
    return hub.units.filter((u) => {
      if (serverScope === 'GLOBAL_CURRENT' && !u.isReleasedGlobal) return false;
      if (selectedElement !== 'ALL' && u.element !== selectedElement) return false;
      if (unitSearch.trim()) {
        const q = unitSearch.toLowerCase();
        const matchName = u.nameEn.toLowerCase().includes(q) || u.styleOrTitle.toLowerCase().includes(q);
        const matchSkill = u.skills.some(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.buffCategoryTags.some((t) => t.toLowerCase().includes(q))
        );
        if (!matchName && !matchSkill) return false;
      }
      return true;
    });
  }, [hub.units, serverScope, selectedElement, unitSearch]);

  const getUnitTierRank = (u: HydratedGameHub['units'][number]): string => {
    if (tierCategory === 'REROLL') return u.tiers.rerollAsian;
    if (tierCategory === 'BOSS_RAID') return u.tiers.bossRaidAsian;
    if (serverScope === 'GLOBAL_CURRENT' && u.tiers.overallGlobal) {
      return u.tiers.overallGlobal.tierRank;
    }
    return u.tiers.overallAsian.tierRank;
  };

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
    return compareUnitStats(unitA.baseStats, unitB.baseStats, unitA.longevityMonths, unitB.longevityMonths);
  }, [unitA, unitB]);

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

  const tierRanksOrder: Array<'SSS' | 'SS' | 'S' | 'A'> = ['SSS', 'SS', 'S', 'A'];

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

      {/* 3-COLUMN APPMEDIA WIKI STRUCTURE */}
      <div className="wiki-layout-grid">
        {/* ================= LEFT COLUMN: WIKI DIRECTORY SIDEBAR (サイドメニュー) ================= */}
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
          <div style={{ height: '72px', position: 'relative', overflow: 'hidden' }}>
            <img
              src={hub.coverImageUrl}
              alt={hub.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(20, 19, 18, 0.72)',
                padding: '8px 10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <span
                className="mono"
                style={{ fontSize: '9.5px', fontWeight: 900, color: '#FDE047' }}
              >
                {hub.asianRegion} +{hub.foresightGapMonths} MO FORESIGHT
              </span>
              <span style={{ fontSize: '13px', fontWeight: 900, color: '#FFFFFF' }}>
                {hub.name}
              </span>
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
              }}
            >
              <span>Strongest Tier List</span>
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
              }}
            >
              Reroll Starting Tier List
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
              }}
            >
              <span>Weapons / Support Cards</span>
              <span className="mono" style={{ fontSize: '10px' }}>
                {hub.equipments.length}
              </span>
            </button>
          </div>

          {/* SECTION 2: ASIAN SERVER FORESIGHT */}
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
            02. {hub.asianRegion} FORESIGHT &amp; BANNERS
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
              }}
            >
              {hub.asianRegion} &rarr; Global Banner Schedule
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
              }}
            >
              {hub.currencyName} Pull Savings Planner
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
              }}
            >
              Boss Weaknesses &amp; Raid Guides ({hub.bosses.length})
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
              }}
            >
              Boss / Raid Apex Tier List
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
              }}
            >
              Visual Stat Comparison Tool
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
              }}
            >
              Buff-Stacking &amp; Damage Calc
            </button>
          </div>

          {/* SECTION 5: DIRECT CHARACTER LINKS */}
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
            05. VERIFIED UNIT DATABASE ({hub.units.length})
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {hub.units.map((u) => (
              <Link
                key={u.slug}
                href={`/${hub.slug}/units/${u.slug}`}
                style={{
                  padding: '6px 10px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--text-secondary)',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>{u.nameEn}</span>
                <span
                  className="mono"
                  style={{ fontSize: '9.5px', color: 'var(--accent-primary)', fontWeight: 900 }}
                >
                  {u.tiers.overallAsian.tierRank}
                </span>
              </Link>
            ))}
          </div>
        </aside>

        {/* ================= CENTER COLUMN: DEDICATED TOPIC ARTICLE ================= */}
        <main className="wiki-center-article" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* APPMEDIA ARTICLE HEADER + QUICK MENU GRID (攻略メニュー) */}
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
              <h1 style={{ fontSize: '17px', fontWeight: 900, color: 'var(--text-main)' }}>
                [{hub.name}]{' '}
                {activeTab === 'tier-list' && `Strongest Character Tier List (${tierCategory})`}
                {activeTab === 'weapons' && 'Weapon, Support Card & Equipment Tier List'}
                {activeTab === 'bosses' && 'Monsters, Raid Boss Weaknesses & Strategy Guides'}
                {activeTab === 'banners' && `${hub.asianRegion} → Global Banner Schedule & Pull Calculator`}
                {activeTab === 'compare' && 'Visual Stat Comparison & Damage Formula Simulator'}
              </h1>
              <span
                className="mono"
                style={{
                  fontSize: '10.5px',
                  background: 'var(--accent-bg)',
                  color: 'var(--accent-primary)',
                  border: '1px solid var(--accent-border)',
                  padding: '2px 8px',
                  borderRadius: '3px',
                  fontWeight: 800,
                }}
              >
                Synced: {hub.asianPatchVersion} • SHA: {hub.lastSyncChecksum.slice(0, 8)}
              </span>
            </div>

            {/* 5-BUTTON QUICK NAVIGATION MENU (攻略メニュー) */}
            <div className="quick-menu-grid">
              {(
                [
                  { key: 'tier-list', label: '1. Character Tier List' },
                  { key: 'weapons', label: '2. Weapons & Cards' },
                  { key: 'bosses', label: '3. Boss & Raid Guides' },
                  { key: 'banners', label: `4. ${hub.asianRegion} Banners & Calc` },
                  { key: 'compare', label: '5. Stat Compare & Math' },
                ] as const
              ).map((btn) => (
                <button
                  key={btn.key}
                  type="button"
                  onClick={() => setActiveTab(btn.key)}
                  style={{
                    padding: '8px 6px',
                    borderRadius: '4px',
                    border:
                      activeTab === btn.key
                        ? '2px solid var(--accent-primary)'
                        : '1px solid var(--border-main)',
                    background: activeTab === btn.key ? 'var(--accent-bg)' : 'var(--bg-subtle)',
                    color: activeTab === btn.key ? 'var(--accent-primary)' : 'var(--text-main)',
                    fontSize: '11px',
                    fontWeight: 900,
                    cursor: 'pointer',
                  }}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </section>

          {/* =====================================================================
              TOPIC VIEW 1: APPMEDIA 2D ROLE-COLUMN TIER MATRIX & BREAKDOWN CARDS
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
                      {hub.asianRegion} Full Roster (+{hub.foresightGapMonths} Mo Foresight)
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
                      Global Released Only
                    </button>
                  </div>

                  <div style={{ display: 'flex', gap: '4px' }}>
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

                {/* ELEMENT PILLS + UNIT SEARCH */}
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
                  <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      onClick={() => setSelectedElement('ALL')}
                      style={{
                        padding: '3px 8px',
                        fontSize: '10.5px',
                        fontWeight: 800,
                        borderRadius: '3px',
                        cursor: 'pointer',
                        border: '1px solid var(--border-main)',
                        background: selectedElement === 'ALL' ? 'var(--bg-header)' : 'var(--bg-subtle)',
                        color: selectedElement === 'ALL' ? '#FFF' : 'var(--text-secondary)',
                      }}
                    >
                      All Elements ({hub.units.length})
                    </button>
                    {hub.elementsConfig.map((el) => (
                      <button
                        key={el.key}
                        type="button"
                        onClick={() => setSelectedElement(el.key)}
                        style={{
                          padding: '3px 8px',
                          fontSize: '10.5px',
                          fontWeight: 800,
                          borderRadius: '3px',
                          cursor: 'pointer',
                          border: `1.5px solid ${el.colorHex}`,
                          background: selectedElement === el.key ? el.colorHex : 'var(--bg-surface)',
                          color: selectedElement === el.key ? '#FFF' : 'var(--text-main)',
                        }}
                      >
                        {el.label}
                      </button>
                    ))}
                  </div>

                  <input
                    type="search"
                    value={unitSearch}
                    onChange={(e) => setUnitSearch(e.target.value)}
                    placeholder="Filter by character or buff tag (e.g. Crit, Field)..."
                    style={{
                      padding: '4px 10px',
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

              {/* 2D ROLE-COLUMN TIER MATRIX (EXACT APPMEDIA SSS / SS / S TABLE) */}
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
                  }}
                >
                  <span>OVERALL TIER MATRIX BY ROLE (CLICK UNIT FOR FULL BUILD)</span>
                  <span className="mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    Showing {filteredUnits.length} Verified Units
                  </span>
                </div>

                <table
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    border: '1px solid var(--border-main)',
                    minWidth: '580px',
                  }}
                >
                  <thead>
                    <tr style={{ background: 'var(--bg-subnav)', color: '#FFFFFF' }}>
                      <th
                        style={{
                          width: '58px',
                          padding: '8px',
                          fontSize: '11px',
                          fontWeight: 900,
                          borderRight: '1px solid #3F3F46',
                          textAlign: 'center',
                        }}
                      >
                        TIER
                      </th>
                      {hub.rolesConfig.map((rc) => (
                        <th
                          key={rc.key}
                          style={{
                            padding: '8px',
                            fontSize: '10.5px',
                            fontWeight: 900,
                            borderRight: '1px solid #3F3F46',
                            textAlign: 'center',
                          }}
                        >
                          {rc.label}
                        </th>
                      ))}
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
                                  padding: '8px',
                                  borderRight: '1px solid var(--border-subtle)',
                                  verticalAlign: 'top',
                                }}
                              >
                                <div
                                  style={{
                                    display: 'flex',
                                    gap: '8px',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                  }}
                                >
                                  {roleUnits.map((u) => {
                                    const elemColor = getElementColor(u.element);
                                    return (
                                      <Link
                                        key={u.slug}
                                        href={`/${hub.slug}/units/${u.slug}`}
                                        style={{
                                          width: '68px',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          alignItems: 'center',
                                          gap: '3px',
                                        }}
                                      >
                                        <div
                                          style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '4px',
                                            overflow: 'hidden',
                                            border: `2px solid ${elemColor}`,
                                            position: 'relative',
                                            background: 'var(--bg-subtle)',
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
                                              fontWeight: 800,
                                              padding: '0 4px',
                                            }}
                                          >
                                            {u.element}
                                          </span>
                                          {!u.isReleasedGlobal && (
                                            <span
                                              style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                background: '#18181B',
                                                color: '#FDE047',
                                                fontSize: '8px',
                                                fontWeight: 900,
                                                padding: '0 3px',
                                              }}
                                            >
                                              {hub.asianRegion}
                                            </span>
                                          )}
                                        </div>
                                        <span
                                          style={{
                                            fontSize: '10px',
                                            fontWeight: 800,
                                            color: 'var(--text-main)',
                                            textAlign: 'center',
                                            lineHeight: 1.2,
                                          }}
                                        >
                                          {u.nameEn}
                                        </span>
                                      </Link>
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

              {/* APPMEDIA-STYLE CHARACTER EVALUATION BREAKDOWN CARDS (最強キャラの簡易紹介) */}
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
                  CHARACTER BREAKDOWN, VERIFIED SKILL MULTIPLIERS &amp; LONGEVITY
                </h2>

                {filteredUnits.map((u) => {
                  const elemColor = getElementColor(u.element);
                  const primarySkill = u.skills[0];
                  return (
                    <article
                      key={u.slug}
                      style={{
                        border: '1px solid var(--border-main)',
                        borderRadius: '4px',
                        padding: '10px 12px',
                        background: 'var(--bg-subtle)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          gap: '12px',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                        }}
                      >
                        <Link href={`/${hub.slug}/units/${u.slug}`}>
                          <img
                            src={u.imageUrl}
                            alt={u.nameEn}
                            style={{
                              width: '60px',
                              height: '60px',
                              borderRadius: '4px',
                              objectFit: 'cover',
                              objectPosition: 'top center',
                              border: `2px solid ${elemColor}`,
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
                                fontSize: '14px',
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
                                  padding: '2px 7px',
                                  borderRadius: '3px',
                                  fontSize: '11px',
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
                              marginTop: '4px',
                              flexWrap: 'wrap',
                              fontSize: '10.5px',
                              fontWeight: 800,
                            }}
                          >
                            <span
                              style={{
                                background: elemColor,
                                color: '#FFF',
                                padding: '1px 6px',
                                borderRadius: '2px',
                              }}
                            >
                              {u.element} / {u.attackType}
                            </span>
                            <span
                              style={{
                                background: 'var(--bg-surface)',
                                border: '1px solid var(--border-main)',
                                padding: '1px 6px',
                                borderRadius: '2px',
                              }}
                            >
                              Role: {u.role}
                            </span>
                            <span
                              style={{
                                background: 'var(--amber-bg)',
                                color: 'var(--amber-primary)',
                                border: '1px solid var(--border-main)',
                                padding: '1px 6px',
                                borderRadius: '2px',
                              }}
                            >
                              Target Dupes: {u.recommendedDupes}
                            </span>
                            <span
                              style={{
                                background: 'var(--green-bg)',
                                color: 'var(--green-primary)',
                                padding: '1px 6px',
                                borderRadius: '2px',
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
                            borderRadius: '3px',
                            padding: '6px 10px',
                            fontSize: '11px',
                          }}
                        >
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
                      )}

                      <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)' }}>
                        <strong>Evaluation:</strong> {u.tiers.overallAsian.summaryVerdict}{' '}
                        <strong>Foresight:</strong> {u.tiers.overallAsian.longevityNote}
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          paddingTop: '4px',
                          borderTop: '1px solid var(--border-subtle)',
                          fontSize: '11px',
                        }}
                      >
                        <Link
                          href={`/${hub.slug}/units/${u.slug}`}
                          style={{ fontWeight: 900, color: 'var(--accent-primary)' }}
                        >
                          Open Full Build, Passives &amp; Team Synergies &rarr;
                        </Link>
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
                          Compare Stats vs Another Unit
                        </button>
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
                RANKED WEAPON, SUPPORT CARD, ORB &amp; TAROT TIER LIST
              </h2>

              {hub.equipments.map((eq) => (
                <article
                  key={eq.slug}
                  style={{
                    border: '1px solid var(--border-main)',
                    borderRadius: '4px',
                    padding: '12px',
                    background: 'var(--bg-subtle)',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                  }}
                >
                  <img
                    src={eq.imageUrl}
                    alt={eq.nameEn}
                    style={{
                      width: '64px',
                      height: '76px',
                      objectFit: 'cover',
                      borderRadius: '4px',
                      border: '2px solid var(--border-strong)',
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
                      <div style={{ fontSize: '14px', fontWeight: 900 }}>{eq.nameEn}</div>
                      <span
                        className="mono"
                        style={{
                          background: 'var(--accent-bg)',
                          color: 'var(--accent-primary)',
                          border: '1px solid var(--accent-border)',
                          padding: '2px 8px',
                          borderRadius: '3px',
                          fontSize: '11px',
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
                        marginTop: '4px',
                        flexWrap: 'wrap',
                        fontSize: '10.5px',
                        fontWeight: 800,
                      }}
                    >
                      <span
                        style={{
                          background: 'var(--bg-header)',
                          color: '#FFF',
                          padding: '1px 6px',
                          borderRadius: '2px',
                        }}
                      >
                        {eq.category}: {eq.subType}
                      </span>
                      <span
                        style={{
                          background: 'var(--amber-bg)',
                          color: 'var(--amber-primary)',
                          border: '1px solid var(--border-main)',
                          padding: '1px 6px',
                          borderRadius: '2px',
                        }}
                      >
                        Target Limit Break: {eq.recommendedDupes}
                      </span>
                    </div>

                    <div
                      className="mono"
                      style={{
                        display: 'flex',
                        gap: '8px',
                        flexWrap: 'wrap',
                        marginTop: '8px',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-main)',
                        padding: '6px 8px',
                        borderRadius: '3px',
                        fontSize: '10.5px',
                      }}
                    >
                      {Object.entries(eq.stats).map(([k, v]) => (
                        <span key={k}>
                          <strong>{k}:</strong> {v}
                        </span>
                      ))}
                    </div>

                    <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '6px' }}>
                      {eq.effectSummary}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        gap: '6px',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        marginTop: '6px',
                        fontSize: '10.5px',
                      }}
                    >
                      <strong>Best Holders:</strong>
                      {eq.bestHolderSlugs.map((uSlug) => {
                        const holder = hub.units.find((u) => u.slug === uSlug);
                        if (!holder) return null;
                        return (
                          <Link
                            key={uSlug}
                            href={`/${hub.slug}/units/${uSlug}`}
                            style={{
                              background: 'var(--bg-surface)',
                              border: '1px solid var(--border-main)',
                              padding: '2px 7px',
                              borderRadius: '3px',
                              fontWeight: 800,
                              color: 'var(--accent-primary)',
                            }}
                          >
                            {holder.nameEn}
                          </Link>
                        );
                      })}
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
                    borderRadius: '4px',
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'center',
                      borderBottom: '2px solid var(--border-strong)',
                      paddingBottom: '10px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <img
                      src={boss.imageUrl}
                      alt={boss.nameEn}
                      style={{
                        width: '96px',
                        height: '62px',
                        objectFit: 'cover',
                        borderRadius: '4px',
                        border: '1px solid var(--border-strong)',
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '15px', fontWeight: 900 }}>{boss.nameEn}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 700 }}>
                        {boss.modeName} • {boss.difficultyLabel}
                      </div>
                      <div
                        className="mono"
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 900,
                          color: 'var(--accent-primary)',
                          marginTop: '3px',
                        }}
                      >
                        {boss.hpStat} | {boss.shieldOrDpStat}
                      </div>
                    </div>
                  </div>

                  {/* WEAKNESSES & RESISTANCES */}
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
                          marginBottom: '4px',
                        }}
                      >
                        EXPLOITABLE WEAKNESSES / OPTIMAL TRIGGERS
                      </div>
                      <div style={{ fontSize: '11.5px', fontWeight: 800 }}>
                        {boss.weaknesses.join(' • ')}
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
                          marginBottom: '4px',
                        }}
                      >
                        BOSS RESISTANCES / PENALTIES
                      </div>
                      <div style={{ fontSize: '11.5px', fontWeight: 800 }}>
                        {boss.resistances.join(' • ')}
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
                    <ol style={{ paddingLeft: '18px', fontSize: '11.5px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {boss.strategySteps.map((step, i) => (
                        <li key={i} style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* RECOMMENDED COUNTER TEAM PORTRAITS */}
                  <div>
                    <div style={{ fontSize: '11.5px', fontWeight: 900, marginBottom: '6px' }}>
                      RECOMMENDED APEX COUNTER UNITS (CLICK FOR BUILD):
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
                              gap: '6px',
                              padding: '4px 8px 4px 4px',
                              background: 'var(--bg-subtle)',
                              border: '1px solid var(--border-main)',
                              borderRadius: '4px',
                              fontSize: '11px',
                              fontWeight: 800,
                            }}
                          >
                            <img
                              src={unit.imageUrl}
                              alt={unit.nameEn}
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '3px',
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
                    </div>
                  </div>
                </article>
              ))}
            </section>
          )}

          {/* =====================================================================
              TOPIC VIEW 4: FUTURE BANNERS & INTERACTIVE PULL SAVINGS CALCULATOR
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
                    flexWrap: 'wrap',
                  }}
                >
                  <span>INTERACTIVE {hub.currencyName.toUpperCase()} PULL SAVINGS &amp; PITY CALCULATOR</span>
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
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '11px', fontWeight: 800 }}>
                    <span>Current {hub.currencyName} Saved:</span>
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

                  <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '11px', fontWeight: 800 }}>
                    <span>Current Pull Tickets:</span>
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

              {/* CHRONOLOGICAL BANNERS WITH LIVE CALCULATED PITY STATUS */}
              {hub.banners.map((bn, index) => {
                const daysFromNow = (index + 1) * 28;
                const calc = calculatePullSavings({
                  currentCurrency,
                  currentTickets,
                  daysUntilBanner: daysFromNow,
                  monthlyF2pIncome: hub.monthlyF2pIncome,
                  monthlyPassIncome: hub.monthlyPassIncome,
                  hasMonthlyPass,
                  singlePullCost: hub.pullCostSingle,
                  pitySparkPulls: hub.pityThreshold,
                  featuredRatePerPull: 0.0075,
                });

                return (
                  <article
                    key={bn.slug}
                    style={{
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-main)',
                      borderRadius: '4px',
                      padding: '12px 14px',
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                    }}
                  >
                    <img
                      src={bn.imageUrl}
                      alt={bn.bannerTitle}
                      style={{
                        width: '68px',
                        height: '82px',
                        objectFit: 'cover',
                        borderRadius: '4px',
                        border: '2px solid var(--border-strong)',
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
                        <div style={{ fontSize: '14px', fontWeight: 900 }}>{bn.bannerTitle}</div>
                        <span
                          style={{
                            background:
                              bn.pullVerdict === 'MUST_PULL' ? 'var(--green-bg)' : 'var(--amber-bg)',
                            color:
                              bn.pullVerdict === 'MUST_PULL'
                                ? 'var(--green-primary)'
                                : 'var(--amber-primary)',
                            padding: '2px 8px',
                            borderRadius: '3px',
                            fontSize: '10.5px',
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
                        {hub.asianRegion} Release: {bn.asianStartDate} | Est. Global Arrival:{' '}
                        <strong style={{ color: 'var(--text-main)' }}>{bn.estGlobalStartDate}</strong> (~
                        {daysFromNow}d)
                      </div>

                      <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '6px' }}>
                        {bn.verdictReasoning}
                      </p>

                      {/* LIVE SAVINGS PROJECTION BAR FOR THIS BANNER */}
                      <div
                        className="mono"
                        style={{
                          marginTop: '8px',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-main)',
                          borderRadius: '3px',
                          padding: '6px 10px',
                          fontSize: '11px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          flexWrap: 'wrap',
                          gap: '8px',
                        }}
                      >
                        <span>
                          Projected Balance:{' '}
                          <strong>
                            {calc.totalCurrencyAvailable.toLocaleString()} {hub.currencyName}
                          </strong>{' '}
                          ({calc.totalPullsAvailable} Pulls)
                        </span>
                        <span>
                          Rate-Up Odds: <strong>{calc.probabilityAtLeastOneFeaturedPct}%</strong>
                        </span>
                        <span
                          style={{
                            fontWeight: 900,
                            color: calc.canGuaranteePity
                              ? 'var(--green-primary)'
                              : 'var(--accent-primary)',
                          }}
                        >
                          {calc.canGuaranteePity
                            ? `SPARK GUARANTEED (+${calc.currencySurplusOrDeficit.toLocaleString()} Surplus)`
                            : `NEED ${Math.abs(calc.currencySurplusOrDeficit).toLocaleString()} MORE FOR SPARK`}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img
                      src={unitA.imageUrl}
                      alt={unitA.nameEn}
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '4px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        border: '2px solid var(--amber-primary)',
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

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                        width: '44px',
                        height: '44px',
                        borderRadius: '4px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        border: '2px solid var(--accent-primary)',
                      }}
                    />
                  </div>
                </div>

                {/* 10 NORMALIZED VISUAL COMPARISON BARS */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {comparisonRows.map((row) => (
                    <div key={row.label}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '11px',
                          fontWeight: 800,
                          marginBottom: '3px',
                        }}
                      >
                        <span className="mono" style={{ color: 'var(--amber-primary)' }}>
                          {row.unitAVal.toLocaleString()} {row.winner === 'A' ? '★' : ''}
                        </span>
                        <span style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '10px' }}>
                          {row.label}
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
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <span>Skill Base Potency:</span>
                    <input
                      type="number"
                      value={basePotency}
                      onChange={(e) => setBasePotency(Number(e.target.value) || 0)}
                      style={{ padding: '5px', border: '1px solid var(--border-main)', borderRadius: '3px' }}
                    />
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <span>Skill ATK Buff #1 (%):</span>
                    <input
                      type="number"
                      value={skillAtk1}
                      onChange={(e) => setSkillAtk1(Number(e.target.value) || 0)}
                      style={{ padding: '5px', border: '1px solid var(--border-main)', borderRadius: '3px' }}
                    />
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <span>Skill ATK Buff #2 (%):</span>
                    <input
                      type="number"
                      value={skillAtk2}
                      onChange={(e) => setSkillAtk2(Number(e.target.value) || 0)}
                      style={{ padding: '5px', border: '1px solid var(--border-main)', borderRadius: '3px' }}
                    />
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <span>Crit DMG Buff #1 (%):</span>
                    <input
                      type="number"
                      value={critDmg1}
                      onChange={(e) => setCritDmg1(Number(e.target.value) || 0)}
                      style={{ padding: '5px', border: '1px solid var(--border-main)', borderRadius: '3px' }}
                    />
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <span>Crit DMG Buff #2 (%):</span>
                    <input
                      type="number"
                      value={critDmg2}
                      onChange={(e) => setCritDmg2(Number(e.target.value) || 0)}
                      style={{ padding: '5px', border: '1px solid var(--border-main)', borderRadius: '3px' }}
                    />
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <span>Elemental Field Zone (%):</span>
                    <input
                      type="number"
                      value={fieldZonePct}
                      onChange={(e) => setFieldZonePct(Number(e.target.value) || 0)}
                      style={{ padding: '5px', border: '1px solid var(--border-main)', borderRadius: '3px' }}
                    />
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <span>Enemy DEF Down #1 (%):</span>
                    <input
                      type="number"
                      value={defDown1}
                      onChange={(e) => setDefDown1(Number(e.target.value) || 0)}
                      style={{ padding: '5px', border: '1px solid var(--border-main)', borderRadius: '3px' }}
                    />
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <span>Elemental DEF Down #2 (%):</span>
                    <input
                      type="number"
                      value={defDown2}
                      onChange={(e) => setDefDown2(Number(e.target.value) || 0)}
                      style={{ padding: '5px', border: '1px solid var(--border-main)', borderRadius: '3px' }}
                    />
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <span>Multi-Hit Bonus (%):</span>
                    <input
                      type="number"
                      value={multiHitPct}
                      onChange={(e) => setMultiHitPct(Number(e.target.value) || 0)}
                      style={{ padding: '5px', border: '1px solid var(--border-main)', borderRadius: '3px' }}
                    />
                  </label>
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
        </main>

        {/* ================= RIGHT COLUMN: FORESIGHT BANNERS + STICKY 300x600 AD ================= */}
        <aside className="wiki-right-rail" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
                marginBottom: '8px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>UPCOMING GLOBAL BANNERS</span>
              <span className="mono" style={{ color: 'var(--accent-primary)', fontSize: '10px' }}>
                {hub.asianRegion} GAP
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {hub.banners.map((bn) => (
                <div
                  key={bn.slug}
                  style={{
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                    paddingBottom: '8px',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <img
                    src={bn.imageUrl}
                    alt={bn.bannerTitle}
                    style={{
                      width: '38px',
                      height: '46px',
                      borderRadius: '3px',
                      objectFit: 'cover',
                      border: '1px solid var(--border-main)',
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '11px', fontWeight: 800, lineHeight: 1.25 }}>
                      {bn.featuredNames[0]}
                    </div>
                    <div className="mono" style={{ fontSize: '9.5px', color: 'var(--text-muted)' }}>
                      Est. GL: {bn.estGlobalStartDate}
                    </div>
                    <span
                      style={{
                        display: 'inline-block',
                        marginTop: '2px',
                        background:
                          bn.pullVerdict === 'MUST_PULL' ? 'var(--green-bg)' : 'var(--amber-bg)',
                        color:
                          bn.pullVerdict === 'MUST_PULL'
                            ? 'var(--green-primary)'
                            : 'var(--amber-primary)',
                        fontSize: '9px',
                        fontWeight: 900,
                        padding: '1px 5px',
                        borderRadius: '2px',
                      }}
                    >
                      {bn.pullVerdict.replace('_', ' ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setActiveTab('banners')}
              style={{
                width: '100%',
                marginTop: '8px',
                padding: '6px',
                background: 'var(--bg-header)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '3px',
                fontSize: '11px',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Open Full Pull Savings Calculator &rarr;
            </button>
          </div>

          {/* STICKY RIGHT RAIL AD SLOT (300x600) */}
          <AdSlot
            slotId={`${hub.slug}-right-sticky`}
            label="STICKY RIGHT RAIL AD"
            dimensions="300×600 / 300×250"
            minHeightPx={420}
            sticky
            description="Stays visible while user scrolls Tier Matrix, Character Breakdowns, and Boss Guides"
          />
        </aside>
      </div>

      {/* MOBILE STICKY FOOTER AD (320x50) */}
      <div className="mobile-sticky-ad" data-ad-slot="mobile-sticky-320x50">
        <span
          className="mono"
          style={{
            background: 'var(--accent-primary)',
            color: '#FFF',
            fontSize: '10.5px',
            fontWeight: 900,
            padding: '2px 8px',
            borderRadius: '2px',
          }}
        >
          MOBILE STICKY AD (320×50) — 0.00 CLS
        </span>
      </div>
    </div>
  );
}
