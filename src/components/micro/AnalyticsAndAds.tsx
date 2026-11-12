'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID?.trim() || '';

const ADSTERRA_INVOKE_HOST =
  process.env.NEXT_PUBLIC_ADSTERRA_INVOKE_HOST?.trim() || 'www.highperformanceformat.com';
const ADSTERRA_KEY_728 = process.env.NEXT_PUBLIC_ADSTERRA_BANNER_728_KEY?.trim() || '';
const ADSTERRA_KEY_320 = process.env.NEXT_PUBLIC_ADSTERRA_BANNER_320_KEY?.trim() || '';
const ADSTERRA_KEY_300 = process.env.NEXT_PUBLIC_ADSTERRA_BANNER_300_KEY?.trim() || '';
const ADSTERRA_NATIVE_KEY = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_KEY?.trim() || '';
const ADSTERRA_NATIVE_SRC = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_SRC?.trim() || '';
const ADSTERRA_SOCIAL_BAR_SRC = process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_SRC?.trim() || '';

function isSafeHexKey(key: string): boolean {
  return /^[a-z0-9]{16,64}$/i.test(key);
}

function isSafeHttpsUrl(url: string): boolean {
  return /^https:\/\/[a-z0-9.-]+\/[a-z0-9/_.-]+$/i.test(url);
}

function extractReferrerHost(): string {
  if (typeof document === 'undefined' || !document.referrer) return 'direct';
  try {
    const parsed = new URL(document.referrer);
    const host = parsed.hostname.toLowerCase().replace(/^www\./, '');
    if (!host || host === window.location.hostname.replace(/^www\./, '')) {
      return 'direct';
    }
    return host.slice(0, 100);
  } catch {
    return 'direct';
  }
}

/**
 * First-party privacy-safe pageview telemetry + optional Google Analytics 4 (GA4).
 * Never blocks rendering and skips /analytics founder views.
 */
export function AnalyticsTelemetry() {
  const pathname = usePathname();
  const lastTrackedRef = useRef<string>('');

  useEffect(() => {
    if (!pathname || pathname.startsWith('/analytics')) return;
    if (lastTrackedRef.current === pathname) return;
    lastTrackedRef.current = pathname;

    const payload = JSON.stringify({
      path: pathname,
      referrerHost: extractReferrerHost(),
    });

    void fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
      keepalive: true,
    }).catch(() => {
      // Non-blocking telemetry
    });
  }, [pathname]);

  return (
    <>
      {GA4_ID && /^G-[A-Z0-9]+$/i.test(GA4_ID) && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ascalon-ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}', { anonymize_ip: true });`}
          </Script>
        </>
      )}
      {ADSTERRA_SOCIAL_BAR_SRC && isSafeHttpsUrl(ADSTERRA_SOCIAL_BAR_SRC) && (
        <Script src={ADSTERRA_SOCIAL_BAR_SRC} strategy="lazyOnload" />
      )}
    </>
  );
}

function buildAdsterraIframeSrcDoc(adKey: string, width: number, height: number): string {
  const host = /^[a-z0-9.-]+$/i.test(ADSTERRA_INVOKE_HOST)
    ? ADSTERRA_INVOKE_HOST
    : 'www.highperformanceformat.com';
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0;background:transparent;overflow:hidden;display:flex;align-items:center;justify-content:center;}</style></head><body><script type="text/javascript">atOptions={'key':'${adKey}','format':'iframe','height':${height},'width':${width},'params':{}};</script><script type="text/javascript" src="https://${host}/${adKey}/invoke.js"></script></body></html>`;
}

export interface AdsterraSlotProps {
  variant: 'leaderboard' | 'sidebar' | 'native';
  label?: string;
  className?: string;
}

/**
 * Zero-CLS Adsterra Monetization Slot.
 * - Renders nothing on public pages until Adsterra keys are configured in /etc/default/ascalon.
 * - Append ?adpreview=1 to any URL to inspect exact live ad slot placements & dimensions.
 */
export function AdsterraSlot({ variant, label = 'Sponsored', className = '' }: AdsterraSlotProps) {
  const [previewMode, setPreviewMode] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const nativeContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setPreviewMode(params.get('adpreview') === '1');
    setIsMobileViewport(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    if (
      variant !== 'native' ||
      !isSafeHexKey(ADSTERRA_NATIVE_KEY) ||
      !isSafeHttpsUrl(ADSTERRA_NATIVE_SRC) ||
      !nativeContainerRef.current
    ) {
      return;
    }
    const container = nativeContainerRef.current;
    if (container.dataset.loaded === '1') return;
    container.dataset.loaded = '1';

    const script = document.createElement('script');
    script.async = true;
    script.dataset.cfasync = 'false';
    script.src = ADSTERRA_NATIVE_SRC;
    container.appendChild(script);
  }, [variant]);

  if (variant === 'leaderboard') {
    const activeKey = isMobileViewport
      ? ADSTERRA_KEY_320 || ADSTERRA_KEY_728
      : ADSTERRA_KEY_728 || ADSTERRA_KEY_320;
    const width = isMobileViewport && ADSTERRA_KEY_320 ? 320 : 728;
    const height = isMobileViewport && ADSTERRA_KEY_320 ? 50 : 90;

    if (!isSafeHexKey(activeKey)) {
      if (!previewMode) return null;
      return (
        <div
          className={`flex flex-col items-center justify-center rounded-lg border border-dashed border-[#3b82f6]/50 bg-[#0d1424] px-3 py-3 text-center ${className}`}
          style={{ minHeight: isMobileViewport ? '68px' : '108px' }}
        >
          <span className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-[#60a5fa]">
            Adsterra Leaderboard Slot Preview ({isMobileViewport ? '320×50 Mobile' : '728×90 Desktop'})
          </span>
          <span className="text-[12px] text-[#c8d4e6]">
            Ready — set NEXT_PUBLIC_ADSTERRA_BANNER_728_KEY / NEXT_PUBLIC_ADSTERRA_BANNER_320_KEY
          </span>
        </div>
      );
    }

    return (
      <div
        className={`flex flex-col items-center justify-center overflow-hidden rounded-lg border border-[#1e293b] bg-[#0b101b] py-1.5 ${className}`}
        style={{ minHeight: `${height + 22}px` }}
      >
        <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#8c9db8]">
          {label}
        </span>
        <iframe
          title={`Adsterra ${width}x${height}`}
          width={width}
          height={height}
          scrolling="no"
          frameBorder={0}
          sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
          srcDoc={buildAdsterraIframeSrcDoc(activeKey, width, height)}
          className="max-w-full border-0"
        />
      </div>
    );
  }

  if (variant === 'sidebar') {
    if (!isSafeHexKey(ADSTERRA_KEY_300)) {
      if (!previewMode) return null;
      return (
        <div
          className={`flex flex-col items-center justify-center rounded-lg border border-dashed border-[#3b82f6]/50 bg-[#0d1424] p-3 text-center ${className}`}
          style={{ minHeight: '268px' }}
        >
          <span className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-[#60a5fa]">
            Adsterra Sidebar 300×250 Slot
          </span>
          <span className="mt-1 text-[11.5px] text-[#c8d4e6]">
            Ready — set NEXT_PUBLIC_ADSTERRA_BANNER_300_KEY
          </span>
        </div>
      );
    }

    return (
      <div
        className={`flex flex-col items-center justify-center overflow-hidden rounded-lg border border-[#1e293b] bg-[#0b101b] p-2 ${className}`}
        style={{ minHeight: '274px' }}
      >
        <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#8c9db8]">
          {label}
        </span>
        <iframe
          title="Adsterra 300x250"
          width={300}
          height={250}
          scrolling="no"
          frameBorder={0}
          sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
          srcDoc={buildAdsterraIframeSrcDoc(ADSTERRA_KEY_300, 300, 250)}
          className="max-w-full border-0"
        />
      </div>
    );
  }

  // Native 4:1 Banner
  if (!isSafeHexKey(ADSTERRA_NATIVE_KEY) || !isSafeHttpsUrl(ADSTERRA_NATIVE_SRC)) {
    if (!previewMode) return null;
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-lg border border-dashed border-amber-500/50 bg-[#12192b] p-4 text-center ${className}`}
        style={{ minHeight: '130px' }}
      >
        <span className="font-mono text-[11.5px] font-extrabold uppercase tracking-wider text-amber-300">
          Adsterra Native Banner (4:1 High-CTR Mid-Content Slot)
        </span>
        <span className="mt-1 text-[12px] text-[#c8d4e6]">
          Ready — set NEXT_PUBLIC_ADSTERRA_NATIVE_KEY &amp; NEXT_PUBLIC_ADSTERRA_NATIVE_SRC
        </span>
      </div>
    );
  }

  return (
    <div
      ref={nativeContainerRef}
      className={`overflow-hidden rounded-lg border border-[#1e293b] bg-[#0d1322] p-2.5 ${className}`}
      style={{ minHeight: '120px' }}
    >
      <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#8c9db8]">
        {label}
      </div>
      <div id={`container-${ADSTERRA_NATIVE_KEY}`} />
    </div>
  );
}
