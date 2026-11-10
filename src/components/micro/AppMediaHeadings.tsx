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

export interface AppMediaBannerH2Props {
  id?: string;
  children: React.ReactNode;
  bannerSrc: string;
  bannerAlt: string;
  badge?: string;
}

export function AppMediaBannerH2({
  id,
  children,
  bannerSrc,
  bannerAlt,
  badge,
}: AppMediaBannerH2Props) {
  return (
    <div id={id} className="scroll-mt-24 space-y-2.5">
      <h2 className="flex items-center justify-between bg-[#1d283e] px-3.5 py-2.5 text-[15px] sm:text-[16px] font-extrabold tracking-tight text-[#f8fafc] border-b-[3px] border-[#e86c58] border-x border-t border-x-[#2a3958] border-t-[#2a3958] rounded-t-sm shadow-sm">
        <span>{children}</span>
        {badge && (
          <span className="ml-2 rounded bg-[#2563eb]/25 border border-[#3b82f6]/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#93c5fd]">
            {badge}
          </span>
        )}
      </h2>
      <div className="overflow-hidden rounded border border-[#263450] bg-[#0b101b] shadow-sm">
        <img
          src={bannerSrc}
          alt={bannerAlt}
          width={740}
          height={156}
          className="w-full h-auto block object-cover"
          loading="eager"
        />
      </div>
    </div>
  );
}

export interface AppMediaEyecatchBannerProps {
  src: string;
  alt: string;
}

export function AppMediaEyecatchBanner({ src, alt }: AppMediaEyecatchBannerProps) {
  return (
    <div className="overflow-hidden rounded-md border border-[#28354e] bg-[#0b101b] shadow-md">
      <img
        src={src}
        alt={alt}
        width={740}
        height={388}
        className="w-full h-auto block object-cover"
        loading="eager"
      />
    </div>
  );
}

export interface AppMediaGraphicButtonItem {
  href: string;
  label: string;
  bannerSrc: string;
  bannerAlt?: string;
}

export interface AppMediaGraphicButtonGridProps {
  headerLabel?: string;
  items: AppMediaGraphicButtonItem[];
  footerLinks?: { href: string; label: string }[];
}

export function AppMediaGraphicButtonGrid({
  headerLabel,
  items,
  footerLinks,
}: AppMediaGraphicButtonGridProps) {
  const rows: [AppMediaGraphicButtonItem, AppMediaGraphicButtonItem | null][] = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push([items[i], items[i + 1] ?? null]);
  }

  return (
    <div className="overflow-hidden rounded border border-[#28354e] bg-[#0f1626] shadow-sm">
      <table className="w-full border-collapse table-fixed">
        {headerLabel && (
          <thead>
            <tr>
              <th
                colSpan={2}
                className="border-b border-[#28354e] bg-[#162136] px-3 py-2 text-center text-[12px] font-extrabold tracking-wide text-[#dbeafe]"
              >
                {headerLabel}
              </th>
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map(([left, right], rowIdx) => (
            <tr key={rowIdx} className="border-b border-[#28354e] last:border-b-0">
              <td className="w-1/2 border-r border-[#28354e] p-2 sm:p-2.5 align-top bg-[#0f1626] hover:bg-[#162036] transition-colors">
                <Link href={left.href} className="group block text-center">
                  <div className="overflow-hidden rounded-[6px] border border-[#2b3a57] group-hover:border-[#60a5fa] bg-[#0b101c] shadow-sm transition-colors">
                    <img
                      src={left.bannerSrc}
                      alt={left.bannerAlt || left.label}
                      width={400}
                      height={126}
                      className="w-full h-auto block object-cover transition-transform duration-150 group-hover:scale-[1.015]"
                      loading="eager"
                    />
                  </div>
                  <span className="mt-1.5 block text-[12px] sm:text-[13px] font-bold leading-snug text-[#60a5fa] group-hover:text-[#93c5fd] group-hover:underline">
                    {left.label}
                  </span>
                </Link>
              </td>
              {right ? (
                <td className="w-1/2 p-2 sm:p-2.5 align-top bg-[#0f1626] hover:bg-[#162036] transition-colors">
                  <Link href={right.href} className="group block text-center">
                    <div className="overflow-hidden rounded-[6px] border border-[#2b3a57] group-hover:border-[#60a5fa] bg-[#0b101c] shadow-sm transition-colors">
                      <img
                        src={right.bannerSrc}
                        alt={right.bannerAlt || right.label}
                        width={400}
                        height={126}
                        className="w-full h-auto block object-cover transition-transform duration-150 group-hover:scale-[1.015]"
                        loading="eager"
                      />
                    </div>
                    <span className="mt-1.5 block text-[12px] sm:text-[13px] font-bold leading-snug text-[#60a5fa] group-hover:text-[#93c5fd] group-hover:underline">
                      {right.label}
                    </span>
                  </Link>
                </td>
              ) : (
                <td className="w-1/2 bg-[#0b111e]" />
              )}
            </tr>
          ))}
          {footerLinks &&
            footerLinks.map((fl) => (
              <tr key={fl.href + fl.label} className="border-t border-[#28354e]">
                <td colSpan={2} className="bg-[#131d31] hover:bg-[#1a2742] px-3 py-2.5 text-center transition-colors">
                  <Link
                    href={fl.href}
                    className="inline-flex items-center justify-center gap-1.5 text-[12px] sm:text-[13px] font-extrabold text-[#60a5fa] hover:text-[#93c5fd] hover:underline"
                  >
                    <span className="text-[10px] text-[#3b82f6]">▶</span>
                    <span>{fl.label}</span>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

const VALID_RANK_ICONS = new Set(['sss', 'ss', 's', 'a', 'b', 'c']);

export function AppMediaRankIcon({
  tier,
  size = 'md',
  subLabel,
}: {
  tier: string;
  size?: 'sm' | 'md' | 'lg';
  subLabel?: string;
}) {
  const key = tier.toLowerCase();
  if (!VALID_RANK_ICONS.has(key)) {
    return <AppMediaTierBadge tier={tier} size={size} />;
  }
  const imgCls =
    size === 'lg'
      ? 'h-9 w-auto'
      : size === 'sm'
      ? 'h-5 w-auto'
      : 'h-7 w-auto';

  return (
    <div className="inline-flex flex-col items-center justify-center gap-0.5">
      <img
        src={`/banners/starsavior/ranks/rarity_${key}.png`}
        alt={`${tier} Rank`}
        className={`${imgCls} object-contain drop-shadow`}
        loading="eager"
      />
      {subLabel && (
        <span className="text-[9px] font-bold text-[#94a3b8] leading-none">{subLabel}</span>
      )}
    </div>
  );
}

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
