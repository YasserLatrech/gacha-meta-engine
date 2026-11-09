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
        borderRadius: '8px',
        padding: '14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        position: 'sticky',
        top: '72px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '2px solid var(--border-main)',
          paddingBottom: '8px',
        }}
      >
        <span style={{ fontSize: '13px', fontWeight: 800 }}>
          MY {gameShortName} ROSTER &amp; SQUAD TRACKER
        </span>
        <span
          className="mono"
          style={{
            fontSize: '11px',
            fontWeight: 800,
            padding: '2px 8px',
            borderRadius: '4px',
            background: isOwned ? 'var(--green-bg)' : 'var(--bg-subtle)',
            color: isOwned ? 'var(--green-primary)' : 'var(--text-muted)',
            border: isOwned ? '1px solid var(--green-border)' : '1px solid var(--border-main)',
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
          padding: '10px 12px',
          borderRadius: '6px',
          border: isOwned ? '1.5px solid var(--green-border)' : '1.5px solid var(--accent-primary)',
          background: isOwned ? 'var(--green-bg)' : 'var(--accent-primary)',
          color: isOwned ? 'var(--green-primary)' : '#FFFFFF',
          fontWeight: 800,
          fontSize: '13px',
          cursor: 'pointer',
        }}
      >
        {isOwned ? `✓ Owned in My ${gameShortName} Box (${statConfig.dupeLabels[currentDupe || 'LB0']})` : `+ Mark Owned in My ${gameShortName} Box`}
      </button>

      {/* DUPE SELECTOR */}
      <div>
        <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
          Select Your {statConfig.dupeSystemName}:
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px' }}>
          {DUPE_LEVELS.map((lv) => {
            const active = currentDupe === lv;
            return (
              <button
                key={lv}
                type="button"
                onClick={() => setDupeLevel(lv)}
                className="mono"
                style={{
                  padding: '6px 4px',
                  fontSize: '11.5px',
                  fontWeight: 800,
                  borderRadius: '5px',
                  border: active ? '1.5px solid var(--green-border)' : '1px solid var(--border-main)',
                  background: active ? 'var(--green-bg)' : 'var(--bg-subtle)',
                  color: active ? 'var(--green-primary)' : 'var(--text-main)',
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
          padding: '9px 12px',
          borderRadius: '6px',
          border: inSquad ? '1.5px solid var(--blue-border)' : '1px solid var(--border-strong)',
          background: inSquad ? 'var(--blue-bg)' : 'var(--bg-subtle)',
          color: inSquad ? 'var(--blue-primary)' : 'var(--text-main)',
          fontWeight: 800,
          fontSize: '12.5px',
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
          borderRadius: '6px',
          padding: '11px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <div className="mono" style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--amber-primary)' }}>
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
              fontSize: '12.5px',
              paddingBottom: '5px',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <span style={{ fontWeight: 700 }}>{row.label}</span>
            <span className="mono" style={{ fontWeight: 800, color: row.ev.badgeColor }}>
              Tier {row.ev.adjustedTier} ({row.ev.adjustedScore.toFixed(1)})
            </span>
          </div>
        ))}
        <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
          {f2pEval.explanation}
        </div>
      </div>

      <Link
        href={`/${gameSlug}`}
        style={{
          textAlign: 'center',
          fontSize: '12.5px',
          fontWeight: 800,
          color: 'var(--accent-primary)',
          paddingTop: '2px',
        }}
      >
        Open Full {gameShortName} Squad Builder &amp; Box Tracker &rarr;
      </Link>
    </div>
  );
}
