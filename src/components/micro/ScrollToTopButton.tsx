'use client';

import React, { useEffect, useState, useCallback } from 'react';
import {
  SCROLL_RING_RADIUS,
  SCROLL_RING_CIRCUMFERENCE,
  computeScrollMetrics,
  type ScrollMetrics,
} from '@/domain/scroll-metrics';

/** Floating circular scroll-to-top action with an SVG scroll-progress ring. */
export function ScrollToTopButton() {
  const [metrics, setMetrics] = useState<ScrollMetrics>({ visible: false, progress: 0 });

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      rafId = 0;
      const doc = document.documentElement;
      const next = computeScrollMetrics(
        window.scrollY || doc.scrollTop || 0,
        doc.scrollHeight,
        window.innerHeight,
      );
      setMetrics((prev) =>
        prev.visible === next.visible && Math.abs(prev.progress - next.progress) < 0.01
          ? prev
          : next,
      );
    };

    const scheduleUpdate = () => {
      if (rafId !== 0) return;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    return () => {
      if (rafId !== 0) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  const handleScrollTop = useCallback(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }, []);

  const dashOffset = SCROLL_RING_CIRCUMFERENCE * (1 - metrics.progress);
  const nearBottom = metrics.progress >= 0.85;

  return (
    <button
      type="button"
      onClick={handleScrollTop}
      aria-label="Scroll back to top"
      aria-hidden={!metrics.visible}
      tabIndex={metrics.visible ? 0 : -1}
      title="Back to top"
      data-testid="scroll-to-top-button"
      className={`fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] sm:right-6 sm:bottom-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border bg-[#0e1526]/92 text-[#f8fafc] backdrop-blur-md transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] active:scale-95 ${
        metrics.visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none'
      } ${
        nearBottom
          ? 'border-[#38bdf8]/75 shadow-[0_8px_28px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 hover:bg-[#15203a]'
          : 'border-[#2c3b59] shadow-[0_8px_24px_rgba(2,6,23,0.65)] hover:-translate-y-0.5 hover:border-[#38bdf8]/70 hover:bg-[#15203a]'
      }`}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 44 44"
        aria-hidden="true"
      >
        <circle
          cx="22"
          cy="22"
          r={SCROLL_RING_RADIUS}
          fill="none"
          stroke="rgba(148, 163, 184, 0.16)"
          strokeWidth="2.2"
        />
        <circle
          cx="22"
          cy="22"
          r={SCROLL_RING_RADIUS}
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeDasharray={SCROLL_RING_CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          className="transition-[stroke-dashoffset] duration-100 ease-out"
        />
      </svg>
      <svg
        className="relative h-4.5 w-4.5 text-[#f8fafc]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0-6 6m6-6 6 6" />
      </svg>
    </button>
  );
}
