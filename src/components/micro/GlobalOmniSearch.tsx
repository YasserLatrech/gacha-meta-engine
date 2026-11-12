'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { GlobalSearchCategory, GlobalSearchItem } from '@/domain/schemas';
import { queryGlobalSearchIndex } from '@/domain/search-index';

let cachedSearchItems: GlobalSearchItem[] | null = null;
let inflightPromise: Promise<GlobalSearchItem[]> | null = null;

async function loadSearchItemsOnce(): Promise<GlobalSearchItem[]> {
  if (cachedSearchItems) return cachedSearchItems;
  if (!inflightPromise) {
    inflightPromise = fetch('/api/search')
      .then(async (res) => {
        if (!res.ok) return [];
        const data = (await res.json()) as { items?: GlobalSearchItem[] };
        const list = Array.isArray(data.items) ? data.items : [];
        cachedSearchItems = list;
        return list;
      })
      .catch(() => [])
      .finally(() => {
        inflightPromise = null;
      });
  }
  return inflightPromise;
}

const CATEGORY_TABS: ReadonlyArray<{ key: 'ALL' | GlobalSearchCategory; label: string }> = [
  { key: 'ALL', label: 'All' },
  { key: 'Savior', label: 'Saviors (59)' },
  { key: 'Arcana', label: 'Arcana (85)' },
  { key: 'Guide', label: 'Guides' },
  { key: 'Upcoming', label: 'Upcoming Games' },
];

export function GlobalOmniSearch() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'ALL' | GlobalSearchCategory>('ALL');
  const [items, setItems] = useState<GlobalSearchItem[]>(cachedSearchItems ?? []);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const openModal = useCallback(() => {
    setOpen(true);
    if (!cachedSearchItems) {
      setLoading(true);
      void loadSearchItemsOnce().then((loaded) => {
        setItems(loaded);
        setLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (open) setOpen(false);
        else openModal();
        return;
      }
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, openModal]);

  useEffect(() => {
    if (!open) return undefined;
    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 20);
    return () => window.clearTimeout(timer);
  }, [open]);

  const filteredResults = useMemo(() => {
    const base =
      category === 'ALL' ? items : items.filter((item) => item.category === category);
    return queryGlobalSearchIndex(base, query, 16);
  }, [items, category, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, category]);

  const navigateToItem = (item: GlobalSearchItem) => {
    setOpen(false);
    router.push(item.href);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filteredResults.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filteredResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filteredResults.length) % filteredResults.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const chosen = filteredResults[activeIndex];
      if (chosen) navigateToItem(chosen);
    }
  };

  return (
    <>
        <button
          type="button"
          onClick={openModal}
          aria-label="Search Saviors, Arcana, Guides & Games"
          className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border border-[#2c3a57] bg-[#0b101b] hover:border-[#60a5fa] px-2.5 sm:px-3 py-1.5 text-left transition-colors"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="hidden 2xl:inline text-[12.5px] font-semibold text-[#c8d4e6]">
            Search Saviors, Guides…
          </span>
          <span className="hidden sm:inline 2xl:hidden text-[12.5px] font-bold text-[#c8d4e6]">
            Search
          </span>
          <kbd className="hidden md:inline-block rounded border border-[#334155] bg-[#162033] px-1.5 py-0.5 font-mono text-[10.5px] font-bold text-[#93c5fd]">
            Ctrl K
          </kbd>
        </button>

      {open && (
        <div
          className="fixed inset-0 z-[95] flex items-start justify-center bg-black/75 backdrop-blur-xs p-3 sm:pt-16"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-xl border border-[#334669] bg-[#0f1626] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input Bar */}
            <div className="flex items-center gap-2.5 border-b border-[#243049] bg-[#0b101b] px-3.5 py-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Type a Savior (Guile, Amora), Arcana, Promo Code, or Upcoming Game…"
                className="w-full border-0 bg-transparent text-[14.5px] font-semibold text-white placeholder-[#8c9db8] focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="rounded bg-[#1e293b] px-2 py-0.5 text-[11.5px] font-bold text-[#c8d4e6] hover:text-white"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded border border-[#334155] bg-[#162033] px-2 py-1 text-[11.5px] font-extrabold text-[#e2e8f0] hover:bg-[#1e293b]"
              >
                ESC
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto border-b border-[#243049] bg-[#131c30] px-3.5 py-2">
              {CATEGORY_TABS.map((tab) => {
                const active = category === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setCategory(tab.key)}
                    className={`shrink-0 rounded-md px-2.5 py-1 text-[12px] font-extrabold transition-colors ${
                      active
                        ? 'bg-[#2563eb] text-white'
                        : 'bg-[#0b101b] text-[#c8d4e6] border border-[#243049] hover:border-[#3b82f6]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Results List */}
            <div className="max-h-[62vh] overflow-y-auto divide-y divide-[#1e293b]">
              {loading ? (
                <div className="p-6 text-center text-[13.5px] font-semibold text-[#c8d4e6]">
                  Loading 280+ wiki entries…
                </div>
              ) : filteredResults.length === 0 ? (
                <div className="p-6 text-center text-[13.5px] font-semibold text-[#c8d4e6]">
                  No matching Saviors, Arcana, Guides, or Upcoming Games for &ldquo;{query}&rdquo;.
                </div>
              ) : (
                filteredResults.map((item, idx) => {
                  const selected = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => navigateToItem(item)}
                      className={`flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left transition-colors ${
                        selected ? 'bg-[#1a2742]' : 'hover:bg-[#152036]'
                      }`}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        {item.iconUrl ? (
                          <img
                            src={item.iconUrl}
                            alt={item.title}
                            className="h-10 w-10 shrink-0 rounded-lg border border-[#334155] bg-[#090d16] object-cover"
                          />
                        ) : (
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#334155] bg-[#111827] text-[11px] font-black text-[#93c5fd]">
                            {item.category.slice(0, 4).toUpperCase()}
                          </span>
                        )}
                        <div className="min-w-0">
                          <div className="truncate text-[14px] font-extrabold text-white">
                            {item.title}
                          </div>
                          <div className="truncate text-[12px] font-medium text-[#c8d4e6]">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        {item.badge && (
                          <span className="rounded border border-[#3b82f6]/40 bg-[#1e3a8a]/35 px-2 py-0.5 font-mono text-[11px] font-extrabold text-[#93c5fd]">
                            {item.badge}
                          </span>
                        )}
                        <span className="text-[12px] font-bold text-[#60a5fa]">↵</span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
