'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HydratedUnit } from '../application/services/meta-query.service';
import {
  DupeLevel,
  DUPE_LEVELS,
  getGameStatLabels,
  computeInvestmentTier,
} from '../domain/game-mechanics';

interface UnitAccountActionsClientProps {
  gameSlug: string;
  gameShortName: string;
  unit: HydratedUnit;
}

export function UnitAccountActionsClient({
  gameSlug,
  gameShortName,
  unit,
}: UnitAccountActionsClientProps) {
  const boxStorageKey = `gachacrest_box_${gameSlug}`;
  const squadStorageKey = `gachacrest_squad_${gameSlug}`;

  const [ownedMap, setOwnedMap] = useState<Record<string, DupeLevel>>({});
  const [squadSlugs, setSquadSlugs] = useState<string[]>([]);

  const statConfig = getGameStatLabels(gameSlug);

  useEffect(() => {
    try {
      const rawBox = window.localStorage.getItem(boxStorageKey);
      if (rawBox) {
        const parsed = JSON.parse(rawBox);
        if (parsed && typeof parsed === 'object') setOwnedMap(parsed);
      }
      const rawSquad = window.localStorage.getItem(squadStorageKey);
      if (rawSquad) {
        const parsedSq = JSON.parse(rawSquad);
        if (Array.isArray(parsedSq)) setSquadSlugs(parsedSq);
      }
    } catch {
      // ignore storage errors
    }
  }, [boxStorageKey, squadStorageKey]);

  const currentDupe: DupeLevel | undefined = ownedMap[unit.slug];
  const isOwned = Boolean(currentDupe);
  const inSquad = squadSlugs.includes(unit.slug);

  const toggleOwned = () => {
    setOwnedMap((prev) => {
      const next = { ...prev };
      if (next[unit.slug]) {
        delete next[unit.slug];
      } else {
        next[unit.slug] = 'LB0';
      }
      try {
        window.localStorage.setItem(boxStorageKey, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const setDupeLevel = (lv: DupeLevel) => {
    setOwnedMap((prev) => {
      const next = { ...prev, [unit.slug]: lv };
      try {
        window.localStorage.setItem(boxStorageKey, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const toggleSquad = () => {
    setSquadSlugs((prev) => {
      let next: string[];
      if (prev.includes(unit.slug)) {
        next = prev.filter((s) => s !== unit.slug);
      } else {
        if (prev.length >= statConfig.squadSize) {
          next = [...prev.slice(1), unit.slug];
        } else {
          next = [...prev, unit.slug];
        }
      }
      try {
        window.localStorage.setItem(squadStorageKey, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const baseTier = unit.tiers.overallAsian.tierRank;
  const f2pEval = computeInvestmentTier(gameSlug, unit, baseTier, 'F2P_LB0');
  const recEval = computeInvestmentTier(gameSlug, unit, baseTier, 'REC_LB1');
  const mlbEval = computeInvestmentTier(gameSlug, unit, baseTier, 'MAX_MLB');

  return (
    <div
      style={{
        background: 'var(--bg-surface)',
        border: '1.5px solid var(--border-strong)',
        borderRadius: '6px',
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        position: 'sticky',
        top: '14px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '2px solid var(--border-strong)',
          paddingBottom: '6px',
        }}
      >
        <span style={{ fontSize: '11.5px', fontWeight: 900 }}>
          MY {gameShortName} ROSTER &amp; SQUAD TRACKER
        </span>
        <span
          className="mono"
          style={{
            fontSize: '10px',
            fontWeight: 900,
            padding: '2px 6px',
            borderRadius: '3px',
            background: isOwned ? '#DCFCE7' : 'var(--bg-subtle)',
            color: isOwned ? '#15803D' : 'var(--text-muted)',
          }}
        >
          {isOwned ? `OWNED • ${currentDupe}` : 'UNOWNED'}
        </span>
      </div>

      {/* OWNERSHIP TOGGLE */}
      <button
        type="button"
        onClick={toggleOwned}
        style={{
          width: '100%',
          padding: '9px 12px',
          borderRadius: '5px',
          border: isOwned ? '1.5px solid #15803D' : '1.5px solid var(--accent-primary)',
          background: isOwned ? '#DCFCE7' : 'var(--accent-primary)',
          color: isOwned ? '#15803D' : '#FFFFFF',
          fontWeight: 900,
          fontSize: '12px',
          cursor: 'pointer',
        }}
      >
        {isOwned ? `✓ Owned in My ${gameShortName} Box (${statConfig.dupeLabels[currentDupe || 'LB0']})` : `+ Mark Owned in My ${gameShortName} Box`}
      </button>

      {/* DUPE SELECTOR */}
      <div>
        <div style={{ fontSize: '10.5px', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '5px' }}>
          Select Your {statConfig.dupeSystemName}:
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '4px' }}>
          {DUPE_LEVELS.map((lv) => {
            const active = currentDupe === lv;
            return (
              <button
                key={lv}
                type="button"
                onClick={() => setDupeLevel(lv)}
                className="mono"
                style={{
                  padding: '5px 2px',
                  fontSize: '10.5px',
                  fontWeight: 900,
                  borderRadius: '4px',
                  border: active ? '1.5px solid #15803D' : '1px solid var(--border-main)',
                  background: active ? '#15803D' : 'var(--bg-subtle)',
                  color: active ? '#FFFFFF' : 'var(--text-main)',
                  cursor: 'pointer',
                }}
              >
                {lv}
              </button>
            );
          })}
        </div>
      </div>

      {/* ADD TO ACTIVE SQUAD */}
      <button
        type="button"
        onClick={toggleSquad}
        style={{
          width: '100%',
          padding: '8px 12px',
          borderRadius: '5px',
          border: inSquad ? '1.5px solid #1E40AF' : '1px solid var(--border-strong)',
          background: inSquad ? '#DBEAFE' : 'var(--bg-header)',
          color: inSquad ? '#1E40AF' : '#FFFFFF',
          fontWeight: 900,
          fontSize: '11.5px',
          cursor: 'pointer',
        }}
      >
        {inSquad
          ? `★ Assigned to Active Squad (${squadSlugs.length}/${statConfig.squadSize})`
          : `+ Add to Active Squad Builder (${squadSlugs.length}/${statConfig.squadSize})`}
      </button>

      {/* INVESTMENT SENSITIVITY TIER BREAKDOWN */}
      <div
        style={{
          background: 'var(--bg-subtle)',
          border: '1px solid var(--border-main)',
          borderRadius: '5px',
          padding: '9px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}
      >
        <div style={{ fontSize: '10.5px', fontWeight: 900, color: 'var(--text-main)' }}>
          INVESTMENT TIER SCALING (F2P vs WHALE)
        </div>
        {[
          { label: 'F2P Base (LB0)', ev: f2pEval },
          { label: 'Sweet Spot (LB1)', ev: recEval },
          { label: 'Max Whale (MLB)', ev: mlbEval },
        ].map((row) => (
          <div
            key={row.label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '11px',
              paddingBottom: '4px',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <span style={{ fontWeight: 700 }}>{row.label}</span>
            <span className="mono" style={{ fontWeight: 900, color: 'var(--accent-primary)' }}>
              Tier {row.ev.adjustedTier} ({row.ev.adjustedScore.toFixed(1)})
            </span>
          </div>
        ))}
        <div style={{ fontSize: '10.5px', color: 'var(--text-secondary)', lineHeight: 1.35 }}>
          {f2pEval.explanation}
        </div>
      </div>

      <Link
        href={`/${gameSlug}`}
        style={{
          textAlign: 'center',
          fontSize: '11px',
          fontWeight: 900,
          color: 'var(--accent-primary)',
          paddingTop: '2px',
        }}
      >
        Open Full {gameShortName} Squad Builder &amp; Box Tracker →
      </Link>
    </div>
  );
}
