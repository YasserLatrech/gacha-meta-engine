export interface DurationParts {
  expired: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function computeCountdownParts(targetMs: number, nowMs: number): DurationParts {
  const diff = targetMs - nowMs;
  if (diff <= 0) {
    return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const totalSec = Math.floor(diff / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { expired: false, days, hours, minutes, seconds };
}

export function computeElapsedParts(startMs: number, nowMs: number): DurationParts {
  const diff = Math.max(0, nowMs - startMs);
  const totalSec = Math.floor(diff / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { expired: false, days, hours, minutes, seconds };
}

const MONTH_MAP: Readonly<Record<string, string>> = Object.freeze({
  jan: '01',
  feb: '02',
  mar: '03',
  apr: '04',
  may: '05',
  jun: '06',
  jul: '07',
  aug: '08',
  sep: '09',
  oct: '10',
  nov: '11',
  dec: '12',
});

/**
 * Parses exact calendar release strings like "Nov 24, 2026" or "Jan 15, 2027"
 * into JST midnight ISO-8601 strings ("2026-11-24T00:00:00+09:00").
 * Returns null for Released games or vague windows ("Spring 2027", "Late Nov 2026", "TBA").
 */
export function parseUpcomingReleaseIso(releaseDate: string, status?: string): string | null {
  if (status === 'Released' || /^Released\b/i.test(releaseDate)) {
    return null;
  }
  const m = releaseDate
    .trim()
    .match(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{1,2}),\s*(\d{4})$/i);
  if (!m?.[1] || !m[2] || !m[3]) return null;
  const mm = MONTH_MAP[m[1].toLowerCase()];
  if (!mm) return null;
  const dd = m[2].padStart(2, '0');
  const yyyy = m[3];
  return `${yyyy}-${mm}-${dd}T00:00:00+09:00`;
}

/**
 * Parses confirmed released dates like "Released Nov 6, 2026" into JST midnight ISO-8601
 * strings ("2026-11-06T00:00:00+09:00") so Released calendar rows can display a live elapsed timer.
 */
export function parseReleasedLaunchIso(releaseDate: string, status?: string): string | null {
  if (status !== 'Released' && !/^Released\b/i.test(releaseDate)) {
    return null;
  }
  const cleaned = releaseDate.trim().replace(/^Released\s+/i, '');
  const m = cleaned.match(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{1,2}),\s*(\d{4})$/i);
  if (!m?.[1] || !m[2] || !m[3]) return null;
  const mm = MONTH_MAP[m[1].toLowerCase()];
  if (!mm) return null;
  const dd = m[2].padStart(2, '0');
  const yyyy = m[3];
  return `${yyyy}-${mm}-${dd}T00:00:00+09:00`;
}

function pad2Digits(n: number): string {
  return String(n).padStart(2, '0');
}

/**
 * Deterministic UTC+9 (Tokyo / JST) wall-clock formatter independent of browser OS timezone.
 */
export function formatJstWallClock(nowMs: number): string {
  const jstDate = new Date(nowMs + 9 * 3_600_000);
  const yyyy = jstDate.getUTCFullYear();
  const mm = pad2Digits(jstDate.getUTCMonth() + 1);
  const dd = pad2Digits(jstDate.getUTCDate());
  const hh = pad2Digits(jstDate.getUTCHours());
  const min = pad2Digits(jstDate.getUTCMinutes());
  const sec = pad2Digits(jstDate.getUTCSeconds());
  return `${yyyy}/${mm}/${dd} ${hh}:${min}:${sec} JST`;
}
