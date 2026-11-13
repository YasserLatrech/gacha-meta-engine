'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID?.trim() || '';

const ADSTERRA_BANNER_BASE_URL =
  process.env.NEXT_PUBLIC_ADSTERRA_BANNER_BASE_URL?.trim().replace(/\/+$/, '') || '';
const ADSTERRA_INVOKE_HOST =
  process.env.NEXT_PUBLIC_ADSTERRA_INVOKE_HOST?.trim() || 'bauval.org';
const ADSTERRA_KEY_728 = process.env.NEXT_PUBLIC_ADSTERRA_BANNER_728_KEY?.trim() || '';
const ADSTERRA_KEY_468 = process.env.NEXT_PUBLIC_ADSTERRA_BANNER_468_KEY?.trim() || '';
const ADSTERRA_KEY_320 = process.env.NEXT_PUBLIC_ADSTERRA_BANNER_320_KEY?.trim() || '';
const ADSTERRA_KEY_300 = process.env.NEXT_PUBLIC_ADSTERRA_BANNER_300_KEY?.trim() || '';
const ADSTERRA_KEY_160_600 = process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160_600_KEY?.trim() || '';
const ADSTERRA_KEY_160_300 = process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160_300_KEY?.trim() || '';
const ADSTERRA_NATIVE_KEY = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_KEY?.trim() || '';
const ADSTERRA_NATIVE_SRC = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_SRC?.trim() || '';
const ADSTERRA_POPUNDER_SRC = process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_SRC?.trim() || '';
const ADSTERRA_SOCIAL_BAR_SRC = process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_SRC?.trim() || '';

interface BannerFrameSpec {
  key: string;
  width: number;
  height: number;
  label: string;
}

function isSafeHexKey(key: string): boolean {
  return /^[a-z0-9]{16,64}$/i.test(key);
}

function isSafeHttpsUrl(url: string): boolean {
  return /^https:\/\/[a-z0-9.-]+\/[a-z0-9/_.-]+$/i.test(url);
}

function buildAdsterraBannerScriptUrl(adKey: string): string {
  if (ADSTERRA_BANNER_BASE_URL && isSafeHttpsUrl(ADSTERRA_BANNER_BASE_URL)) {
    return `${ADSTERRA_BANNER_BASE_URL}/${adKey}`;
  }
  const host = /^[a-z0-9.-]+$/i.test(ADSTERRA_INVOKE_HOST)
    ? ADSTERRA_INVOKE_HOST
    : 'www.highperformanceformat.com';
  return `https://${host}/${adKey}/invoke.js`;
}

function buildAdsterraIframeSrcDoc(adKey: string, width: number, height: number): string {
  const scriptSrc = buildAdsterraBannerScriptUrl(adKey);
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0;background:transparent;overflow:hidden;display:flex;align-items:center;justify-content:center;}</style></head><body><script type="text/javascript">atOptions={'key':'${adKey}','format':'iframe','height':${height},'width':${width},'params':{}};</script><script type="text/javascript" src="${scriptSrc}"></script></body></html>`;
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
 * First-party pageview telemetry, GA4, and high-yield global Adsterra formats (Popunder + Social Bar).
 * Skips tracking & pop/overlay ad scripts on /analytics founder views.
 */
export function AnalyticsTelemetry() {
  const pathname = usePathname();
  const lastTrackedRef = useRef<string>('');
  const isFounderDashboard = Boolean(pathname?.startsWith('/analytics'));

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
      {!isFounderDashboard &&
        ADSTERRA_POPUNDER_SRC &&
        isSafeHttpsUrl(ADSTERRA_POPUNDER_SRC) && (
          <Script
            id="ascalon-ad-popunder"
            src={ADSTERRA_POPUNDER_SRC}
            strategy="afterInteractive"
            data-cfasync="false"
          />
        )}
      {!isFounderDashboard &&
        ADSTERRA_SOCIAL_BAR_SRC &&
        isSafeHttpsUrl(ADSTERRA_SOCIAL_BAR_SRC) && (
          <Script
            id="ascalon-ad-social-bar"
            src={ADSTERRA_SOCIAL_BAR_SRC}
            strategy="lazyOnload"
            data-cfasync="false"
          />
        )}
    </>
  );
}

function AdIframe({ spec }: { spec: BannerFrameSpec }) {
  return (
    <iframe
      key={`${spec.label}-${spec.key}`}
      title={spec.label}
      width={spec.width}
      height={spec.height}
      scrolling="no"
      frameBorder={0}
      sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
      srcDoc={buildAdsterraIframeSrcDoc(spec.key, spec.width, spec.height)}
      className="max-w-full border-0 shrink-0"
    />
  );
}

export type AdsterraSlotVariant =
  | 'leaderboard'
  | 'midbanner'
  | 'sidebar'
  | 'skyscraper'
  | 'half-skyscraper'
  | 'duo-box'
  | 'native';

export interface AdsterraSlotProps {
  variant: AdsterraSlotVariant;
  label?: string;
  className?: string;
  minViewportWidth?: number;
}

/**
 * Zero-CLS Adsterra Monetization Slot across all 9 active formats:
 * - leaderboard: 728x90 (desktop >=768px) / 320x50 (mobile <768px)
 * - midbanner: 468x60 (>=520px) / 320x50 (<520px)
 * - sidebar: 300x250 medium rectangle
 * - skyscraper: 160x600 wide skyscraper
 * - half-skyscraper: 160x300 half skyscraper
 * - duo-box: side-by-side 300x250 + 160x300 on >=560px, 300x250 on <560px
 * - native: 4-card native responsive banner
 */
export function AdsterraSlot({
  variant,
  label = 'Sponsored',
  className = '',
  minViewportWidth,
}: AdsterraSlotProps) {
  const [mounted, setMounted] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1280);
  const nativeContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setPreviewMode(params.get('adpreview') === '1');
    setViewportWidth(window.innerWidth);
    setMounted(true);
  }, []);

  const blockedByViewport = Boolean(minViewportWidth && (!mounted || viewportWidth < minViewportWidth));

  useEffect(() => {
    if (
      blockedByViewport ||
      !mounted ||
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
  }, [blockedByViewport, mounted, variant]);

  if (blockedByViewport) {
    return null;
  }

  if (variant === 'native') {
    if (!isSafeHexKey(ADSTERRA_NATIVE_KEY) || !isSafeHttpsUrl(ADSTERRA_NATIVE_SRC)) {
      if (!mounted || !previewMode) return null;
      return (
        <div
          className={`flex flex-col items-center justify-center rounded-lg border border-dashed border-amber-500/50 bg-[#12192b] p-4 text-center min-h-[130px] ${className}`}
        >
          <span className="font-mono text-[11.5px] font-extrabold uppercase tracking-wider text-amber-300">
            Adsterra Native Banner Slot
          </span>
        </div>
      );
    }

    return (
      <div
        ref={nativeContainerRef}
        className={`overflow-hidden rounded-lg border border-[#1e293b] bg-[#0d1322] p-2.5 min-h-[120px] ${className}`}
      >
        <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#8c9db8]">
          {label}
        </div>
        <div id={`container-${ADSTERRA_NATIVE_KEY}`} />
      </div>
    );
  }

  const isMobile = viewportWidth < 768;
  const isCompactMobile = viewportWidth < 520;
  const canRenderDuo = viewportWidth >= 560;

  let specs: BannerFrameSpec[] = [];
  let minHeightClass = 'min-h-[116px]';

  if (variant === 'leaderboard') {
    minHeightClass = 'min-h-[76px] md:min-h-[116px]';
    const key = isMobile ? ADSTERRA_KEY_320 || ADSTERRA_KEY_728 : ADSTERRA_KEY_728 || ADSTERRA_KEY_320;
    const width = isMobile && isSafeHexKey(ADSTERRA_KEY_320) ? 320 : 728;
    const height = isMobile && isSafeHexKey(ADSTERRA_KEY_320) ? 50 : 90;
    if (isSafeHexKey(key)) specs = [{ key, width, height, label: `Adsterra ${width}x${height}` }];
  } else if (variant === 'midbanner') {
    minHeightClass = 'min-h-[76px] sm:min-h-[86px]';
    const useMobile = isCompactMobile && isSafeHexKey(ADSTERRA_KEY_320);
    const key = useMobile ? ADSTERRA_KEY_320 : ADSTERRA_KEY_468 || ADSTERRA_KEY_320;
    const width = useMobile ? 320 : 468;
    const height = useMobile ? 50 : 60;
    if (isSafeHexKey(key)) specs = [{ key, width, height, label: `Adsterra ${width}x${height}` }];
  } else if (variant === 'sidebar') {
    minHeightClass = 'min-h-[276px]';
    if (isSafeHexKey(ADSTERRA_KEY_300)) {
      specs = [{ key: ADSTERRA_KEY_300, width: 300, height: 250, label: 'Adsterra 300x250' }];
    }
  } else if (variant === 'skyscraper') {
    minHeightClass = 'min-h-[626px]';
    if (isSafeHexKey(ADSTERRA_KEY_160_600)) {
      specs = [{ key: ADSTERRA_KEY_160_600, width: 160, height: 600, label: 'Adsterra 160x600' }];
    }
  } else if (variant === 'half-skyscraper') {
    minHeightClass = 'min-h-[326px]';
    if (isSafeHexKey(ADSTERRA_KEY_160_300)) {
      specs = [{ key: ADSTERRA_KEY_160_300, width: 160, height: 300, label: 'Adsterra 160x300' }];
    }
  } else if (variant === 'duo-box') {
    minHeightClass = 'min-h-[276px] sm:min-h-[326px]';
    if (isSafeHexKey(ADSTERRA_KEY_300)) {
      specs.push({ key: ADSTERRA_KEY_300, width: 300, height: 250, label: 'Adsterra 300x250' });
    }
    if (canRenderDuo && isSafeHexKey(ADSTERRA_KEY_160_300)) {
      specs.push({ key: ADSTERRA_KEY_160_300, width: 160, height: 300, label: 'Adsterra 160x300' });
    }
  }

  if (specs.length === 0) {
    if (!mounted || !previewMode) return null;
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-lg border border-dashed border-[#3b82f6]/50 bg-[#0d1424] p-3 text-center ${minHeightClass} ${className}`}
      >
        <span className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-[#60a5fa]">
          Adsterra {variant} Slot
        </span>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center overflow-hidden rounded-lg border border-[#1e293b] bg-[#0b101b] py-2 ${minHeightClass} ${className}`}
    >
      <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#8c9db8]">
        {label}
      </span>
      {mounted ? (
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-full">
          {specs.map((spec) => (
            <AdIframe key={`${spec.label}-${spec.key}`} spec={spec} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
