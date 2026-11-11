'use client';

import React, { useEffect, useState } from 'react';
import {
  computeCountdownParts,
  computeElapsedParts,
  parseUpcomingReleaseIso,
  type DurationParts,
} from '@/domain/jst-time';

export { computeCountdownParts, computeElapsedParts, parseUpcomingReleaseIso, type DurationParts };

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

interface LiveJstCountdownProps {
  /** ISO-8601 timestamp with timezone, e.g. "2026-11-13T03:59:59+09:00" */
  targetIso?: string;
  /** ISO-8601 start timestamp for ongoing open-ended campaigns, e.g. "2026-11-05T12:00:00+09:00" */
  startIso?: string;
  /** Prefix label before ticking clock, e.g. "Ends in" or "Launches in" */
  prefix?: string;
  /** Compact mode hides seconds on tight mobile badges if desired */
  compact?: boolean;
  className?: string;
}

export function LiveJstCountdown({
  targetIso,
  startIso,
  prefix = 'Ends in',
  compact = false,
  className = '',
}: LiveJstCountdownProps) {
  const [nowMs, setNowMs] = useState<number | null>(null);

  useEffect(() => {
    setNowMs(Date.now());
    const id = window.setInterval(() => {
      setNowMs(Date.now());
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  // Hydration-safe placeholder before client clock mounts
  if (nowMs === null) {
    return (
      <span
        className={`inline-flex items-center gap-1 rounded border border-[#334155] bg-[#0b1120] px-2 py-0.5 font-mono text-[10.5px] font-bold text-[#94a3b8] ${className}`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" />
        <span>Syncing JST…</span>
      </span>
    );
  }

  if (targetIso) {
    const targetMs = Date.parse(targetIso);
    const parts = computeCountdownParts(targetMs, nowMs);

    if (parts.expired) {
      return (
        <span
          className={`inline-flex items-center gap-1 rounded border border-slate-600/50 bg-slate-800/70 px-2 py-0.5 font-mono text-[10.5px] font-extrabold text-slate-400 ${className}`}
        >
          <span>Ended</span>
        </span>
      );
    }

    const isUrgent = parts.days < 2;
    const toneClasses = isUrgent
      ? 'border-rose-500/45 bg-rose-950/55 text-rose-200'
      : 'border-[#3b82f6]/45 bg-[#112240] text-[#93c5fd]';
    const dotColor = isUrgent ? 'bg-rose-400 animate-pulse' : 'bg-[#60a5fa] animate-pulse';

    const timeText = compact
      ? `${parts.days}d ${pad2(parts.hours)}h ${pad2(parts.minutes)}m`
      : `${parts.days}d ${pad2(parts.hours)}h ${pad2(parts.minutes)}m ${pad2(parts.seconds)}s`;

    return (
      <span
        title={`Server Reset / Deadline: ${targetIso}`}
        className={`inline-flex items-center gap-1.5 rounded border px-2 py-0.5 font-mono text-[10.5px] font-extrabold tabular-nums ${toneClasses} ${className}`}
      >
        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotColor}`} />
        <span>
          {prefix ? `${prefix} ` : ''}
          {timeText}
        </span>
      </span>
    );
  }

  if (startIso) {
    const startMs = Date.parse(startIso);
    if (nowMs < startMs) {
      const parts = computeCountdownParts(startMs, nowMs);
      return (
        <span
          className={`inline-flex items-center gap-1.5 rounded border border-amber-500/45 bg-amber-950/50 px-2 py-0.5 font-mono text-[10.5px] font-extrabold tabular-nums text-amber-200 ${className}`}
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400 animate-pulse" />
          <span>
            Starts in {parts.days}d {pad2(parts.hours)}h {pad2(parts.minutes)}m {pad2(parts.seconds)}s
          </span>
        </span>
      );
    }

    const elapsed = computeElapsedParts(startMs, nowMs);
    return (
      <span
        title={`Campaign Started: ${startIso}`}
        className={`inline-flex items-center gap-1.5 rounded border border-emerald-500/45 bg-emerald-950/45 px-2 py-0.5 font-mono text-[10.5px] font-extrabold tabular-nums text-emerald-200 ${className}`}
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
        <span>
          LIVE · {elapsed.days}d {pad2(elapsed.hours)}h {pad2(elapsed.minutes)}m {pad2(elapsed.seconds)}s
        </span>
      </span>
    );
  }

  return null;
}
