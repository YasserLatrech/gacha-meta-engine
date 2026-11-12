'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import type { ElementOption, CharacterEntity } from '@/domain/schemas';

interface NavGroup {
  heading: string;
  links: Array<{
    key: string;
    label: string;
    href: string;
    badge: string;
  }>;
}

export function MobileWikiDrawer({
  navGroups,
  activeNav,
  elementsConfig,
  topCharacters,
}: {
  navGroups: NavGroup[];
  activeNav: string;
  elementsConfig: ElementOption[];
  topCharacters: CharacterEntity[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open Star Savior Wiki Menu"
        className="lg:hidden inline-flex items-center gap-1.5 rounded-lg border border-[#334155] bg-[#161f33] hover:bg-[#1e293b] active:scale-95 px-2.5 py-1.5 text-[11px] font-extrabold text-[#f8fafc] shrink-0 shadow-sm"
      >
        <svg className="h-4 w-4 text-[#60a5fa]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span>Wiki Menu</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[80] lg:hidden flex justify-end bg-black/75 backdrop-blur-xs"
          onClick={() => setOpen(false)}
        >
          <div
            className="h-[100dvh] w-[86vw] max-w-[330px] overflow-y-auto overscroll-contain border-l border-[#28354e] bg-[#0e1422] shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#243049] bg-[#0b101b]/95 px-3.5 py-3 backdrop-blur">
              <div className="flex items-center gap-2">
                <img
                  src="/brand/ascalon-logo.png"
                  alt="Ascalon.fun"
                  className="h-7 w-7 rounded-md border border-[#3b82f6] object-cover"
                />
                <span className="text-[13px] font-black text-white">Star Savior Wiki Menu</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md border border-[#334155] bg-[#1e293b] px-2.5 py-1 text-[11px] font-extrabold text-white active:scale-95"
              >
                ✕ Close
              </button>
            </div>

            {/* Navigation Groups */}
            <div className="flex-1 pb-8">
              {navGroups.map((group) => (
                <div key={group.heading}>
                  <div className="border-b border-[#1e293b] border-l-3 border-l-[#3b82f6] bg-[#161f33] px-3.5 py-2 text-[11px] font-extrabold tracking-wider text-[#93c5fd]">
                    {group.heading}
                  </div>
                  <div className="divide-y divide-[#1e293b]">
                    {group.links.map((ln) => {
                      const active = activeNav === ln.key;
                      return (
                        <Link
                          key={ln.href}
                          href={ln.href}
                          onClick={() => setOpen(false)}
                          className={`flex items-center justify-between px-3.5 py-2.5 text-[12.5px] transition-colors ${
                            active
                              ? 'bg-[#2563eb]/15 font-extrabold text-[#60a5fa]'
                              : 'font-semibold text-[#e2e8f0] hover:bg-[#141d30]'
                          }`}
                        >
                          <span>{ln.label}</span>
                          <span
                            className={`rounded px-1.5 py-0.5 text-[10px] font-extrabold ${
                              active ? 'bg-[#2563eb] text-white' : 'bg-[#1e293b] text-[#94a3b8]'
                            }`}
                          >
                            {ln.badge}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Attributes Quick Grid */}
              <div className="border-y border-[#1e293b] border-l-3 border-l-[#eab308] bg-[#161f33] px-3.5 py-2 text-[11px] font-extrabold tracking-wider text-[#93c5fd]">
                ATTRIBUTES & CLASSES
              </div>
              <div className="grid grid-cols-5 gap-1.5 p-2.5 border-b border-[#1e293b]">
                {elementsConfig.map((el) => (
                  <Link
                    key={el.key}
                    href="/starsavior/characters"
                    onClick={() => setOpen(false)}
                    className="flex flex-col items-center gap-1 rounded-md border border-[#243049] bg-[#131822] p-1.5 active:scale-95"
                  >
                    <img src={el.iconUrl} alt={el.label} className="h-6 w-6 object-contain" />
                    <span className="text-[10px] font-bold text-[#cbd5e1]">{el.label}</span>
                  </Link>
                ))}
              </div>

              {/* Popular SS-Tier Units */}
              <div className="border-b border-[#1e293b] border-l-3 border-l-[#f59e0b] bg-[#161f33] px-3.5 py-2 text-[11px] font-extrabold tracking-wider text-[#93c5fd]">
                POPULAR SS-TIER UNITS
              </div>
              <div className="p-2.5 space-y-1.5">
                {topCharacters.slice(0, 8).map((unit) => (
                  <Link
                    key={unit.slug}
                    href={`/starsavior/characters/${unit.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2.5 rounded-md border border-[#243049] bg-[#131822] px-2.5 py-1.5 active:scale-[0.99]"
                  >
                    <img
                      src={unit.imageUrl}
                      alt={unit.name}
                      className="h-9 w-9 rounded-md border border-[#334155] object-cover shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[12px] font-bold text-white">{unit.name}</div>
                      <div className="text-[10px] text-[#94a3b8]">
                        {unit.element} · {unit.role}
                      </div>
                    </div>
                    <span className="rounded border border-rose-500/40 bg-rose-500/20 px-1.5 py-0.5 text-[10px] font-extrabold text-rose-300">
                      {unit.staticData?.appMediaTier || unit.overallTier}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
