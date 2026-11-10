import React from 'react';
import Link from 'next/link';

export interface AppMediaH2Props {
  id?: string;
  children: React.ReactNode;
  badge?: string;
}

export function AppMediaH2({ id, children, badge }: AppMediaH2Props) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 flex items-center justify-between border-l-4 border-[#3b82f6] bg-gradient-to-r from-[#17223b] to-[#111827] px-3.5 py-2.5 text-[15px] sm:text-[16px] font-extrabold tracking-tight text-[#f8fafc] rounded-r-md border-y border-r border-y-[#24324f] border-r-[#24324f] shadow-sm"
    >
      <span>{children}</span>
      {badge && (
        <span className="ml-2 rounded bg-[#2563eb]/25 border border-[#3b82f6]/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#93c5fd]">
          {badge}
        </span>
      )}
    </h2>
  );
}

export interface AppMediaH3Props {
  id?: string;
  children: React.ReactNode;
}

export function AppMediaH3({ id, children }: AppMediaH3Props) {
  return (
    <h3
      id={id}
      className="scroll-mt-24 flex items-center gap-2 border-b-2 border-[#253352] bg-[#0f172a]/70 px-3 py-1.5 text-[14px] font-extrabold text-[#93c5fd]"
    >
      <span className="inline-block h-3.5 w-1.5 rounded-sm bg-[#3b82f6]" />
      <span>{children}</span>
    </h3>
  );
}

export interface AppMediaH4Props {
  id?: string;
  children: React.ReactNode;
}

export function AppMediaH4({ id, children }: AppMediaH4Props) {
  return (
    <h4
      id={id}
      className="scroll-mt-24 flex items-center gap-1.5 text-[13px] font-bold text-[#fbbf24] pt-1"
    >
      <span className="text-[#3b82f6]">■</span>
      <span>{children}</span>
    </h4>
  );
}

export const TIER_COLOR_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  SSS: { bg: 'bg-gradient-to-b from-[#dc2626] to-[#991b1b] border-[#f87171]', text: 'text-white', label: 'Tier 0' },
  SS: { bg: 'bg-[#b91c1c] border-[#ef4444]', text: 'text-white', label: 'Tier 1' },
  S: { bg: 'bg-[#c2410c] border-[#f97316]', text: 'text-white', label: 'Tier 2' },
  A: { bg: 'bg-[#a16207] border-[#eab308]', text: 'text-white', label: 'Tier 3' },
  B: { bg: 'bg-[#15803d] border-[#22c55e]', text: 'text-white', label: 'Tier 4' },
  C: { bg: 'bg-[#1d4ed8] border-[#3b82f6]', text: 'text-white', label: 'Tier 5' },
  D: { bg: 'bg-[#334155] border-[#64748b]', text: 'text-slate-200', label: 'Tier 6' },
};

export function AppMediaTierBadge({ tier, size = 'md' }: { tier: string; size?: 'sm' | 'md' | 'lg' }) {
  const style = TIER_COLOR_STYLES[tier] || TIER_COLOR_STYLES.B;
  const sizeCls =
    size === 'lg'
      ? 'px-3 py-1 text-[14px]'
      : size === 'sm'
      ? 'px-1.5 py-0.5 text-[10px]'
      : 'px-2.5 py-0.5 text-[12px]';
  return (
    <span className={`inline-flex items-center justify-center rounded border font-black tracking-wider ${style.bg} ${style.text} ${sizeCls}`}>
      {tier}
    </span>
  );
}

export function AppMediaTableLink({ href, label, badge }: { href: string; label: string; badge?: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-2 rounded bg-[#141c2e] hover:bg-[#1e293b] border border-[#243049] hover:border-[#3b82f6] px-3 py-2 text-[12px] font-bold text-[#60a5fa] hover:text-[#93c5fd] transition-colors"
    >
      <span className="flex items-center gap-1.5 truncate">
        <span className="text-[10px] text-[#3b82f6] group-hover:translate-x-0.5 transition-transform">▶</span>
        <span className="truncate">{label}</span>
      </span>
      {badge && (
        <span className="shrink-0 rounded bg-[#1e293b] border border-[#334155] px-1.5 py-0.5 text-[9px] font-extrabold text-[#cbd5e1]">
          {badge}
        </span>
      )}
    </Link>
  );
}

export interface AppMediaIconCellProps {
  href: string;
  name: string;
  imageUrl: string;
  rarity?: string;
  topLeftIconUrl?: string;
  topRightIconUrl?: string;
  badgeText?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function AppMediaIconCell({
  href,
  name,
  imageUrl,
  rarity = 'SSR',
  topLeftIconUrl,
  topRightIconUrl,
  badgeText,
  size = 'md',
}: AppMediaIconCellProps) {
  const boxSize =
    size === 'lg'
      ? 'h-[74px] w-[74px]'
      : size === 'sm'
      ? 'h-[56px] w-[56px]'
      : 'h-[64px] w-[64px]';
  const maxW = size === 'lg' ? 'w-[82px]' : size === 'sm' ? 'w-[64px]' : 'w-[72px]';
  const borderCls =
    rarity === 'SSR'
      ? 'border-[#eab308]/80 group-hover:border-[#fde047]'
      : rarity === 'SR'
      ? 'border-[#a855f7]/80 group-hover:border-[#d8b4fe]'
      : 'border-[#38bdf8]/70 group-hover:border-[#7dd3fc]';

  return (
    <Link
      href={href}
      className={`group flex flex-col items-center ${maxW} text-center transition-transform hover:-translate-y-0.5`}
      title={name}
    >
      <div className={`relative ${boxSize} rounded-lg overflow-hidden border-2 ${borderCls} bg-[#090d16] shadow-sm`}>
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover"
          loading="eager"
        />
        {topLeftIconUrl && (
          <span className="absolute top-0.5 left-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-black/85 p-0.5 border border-white/15">
            <img src={topLeftIconUrl} alt="" className="h-full w-full object-contain" loading="eager" />
          </span>
        )}
        {topRightIconUrl && (
          <span className="absolute top-0.5 right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-black/85 p-0.5 border border-white/15">
            <img src={topRightIconUrl} alt="" className="h-full w-full object-contain" loading="eager" />
          </span>
        )}
        {badgeText && (
          <span className="absolute bottom-0 right-0 rounded-tl bg-black/90 px-1 py-0.2 text-[9px] font-black text-[#fbbf24] border-t border-l border-white/15">
            {badgeText}
          </span>
        )}
      </div>
      <span className="mt-1 line-clamp-2 w-full text-[11px] font-bold leading-tight text-[#e2e8f0] group-hover:text-[#60a5fa]">
        {name}
      </span>
    </Link>
  );
}
