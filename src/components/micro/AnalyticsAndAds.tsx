'use client';

import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import {
  buildCosmeticNeutralLabel,
  evaluateAdShieldOutcome,
  getAdRecoveryCopy,
  parsePartnerFallbackOffer,
  resolveAdBlockerClient,
  type AdBlockerClient,
  type AdShieldStatus,
} from '@/domain/ad-shield';

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? 'G-MPFLWWY7TP';
const ADSTERRA_BANNER_BASE_URL =
  process.env.NEXT_PUBLIC_ADSTERRA_BANNER_BASE_URL ?? 'https://bauval.org/22';
const ADSTERRA_POPUNDER_SRC =
  process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_SRC ??
  'https://abscloud.org/1/b9acc930e15365813c27db93606f103e';
const ADSTERRA_SOCIAL_BAR_SRC =
  process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_SRC ??
  'https://bauval.org/14/ce52e8f507cc46dc791b4ea0812f4856';
const ADSTERRA_NATIVE_KEY =
  process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_KEY ??
  '47c1de703ef1d81123dce72041d4d297';
const ADSTERRA_NATIVE_SRC =
  process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_SRC ??
  'https://bauval.org/21/47c1de703ef1d81123dce72041d4d297';

const ADSTERRA_KEYS = {
  banner728:
    process.env.NEXT_PUBLIC_ADSTERRA_BANNER_728_KEY ??
    '5bc1860b2b54d6c0c34ed44f184ec677',
  banner320:
    process.env.NEXT_PUBLIC_ADSTERRA_BANNER_320_KEY ??
    'bb1d8dc3d176caac12c035ea76090e90',
  banner300:
    process.env.NEXT_PUBLIC_ADSTERRA_BANNER_300_KEY ??
    '9261b73fd24a6be794edc9d33060f116',
  banner468:
    process.env.NEXT_PUBLIC_ADSTERRA_BANNER_468_KEY ??
    '1aa12efa0df7917b5c37e011990ca397',
  banner160x600:
    process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160_600_KEY ??
    '72895dc63de44aec42f6a5ae76e01874',
  banner160x300:
    process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160_300_KEY ??
    '7176c2de6f3d154d8edc6eafe5e874dd',
};

const RECOVERY_DISMISS_KEY = 'ascalon_shield_notice_dismissed';

interface NavigatorWithBrave extends Navigator {
  brave?: {
    isBrave?: () => Promise<boolean>;
  };
}

interface AdShieldStoreSnapshot {
  readonly status: AdShieldStatus;
  readonly client: AdBlockerClient;
  readonly erroredCount: number;
  readonly loadedCount: number;
  readonly emptySlotCount: number;
  readonly isBraveBrowser: boolean;
  readonly dismissedNotice: boolean;
}

const SERVER_SNAPSHOT: AdShieldStoreSnapshot = {
  status: 'checking',
  client: 'none',
  erroredCount: 0,
  loadedCount: 0,
  emptySlotCount: 0,
  isBraveBrowser: false,
  dismissedNotice: false,
};

const erroredIds = new Set<string>();
const loadedIds = new Set<string>();
const populatedSlotIds = new Set<string>();
const emptySlotIds = new Set<string>();
let storeBraveBrowser = false;
let storeAutomatedClient = false;
let storeHasTimedOut = false;
let storeDismissedNotice = false;
const storeListeners = new Set<() => void>();
let clientSnapshot: AdShieldStoreSnapshot = SERVER_SNAPSHOT;

function recomputeAndNotify(): void {
  const status = evaluateAdShieldOutcome({
    erroredCount: erroredIds.size,
    loadedCount: loadedIds.size,
    populatedSlotCount: populatedSlotIds.size,
    emptySlotCount: emptySlotIds.size,
    isBraveBrowser: storeBraveBrowser,
    hasTimedOut: storeHasTimedOut,
    isAutomatedClient: storeAutomatedClient,
  });
  const client = resolveAdBlockerClient(status, storeBraveBrowser);

  clientSnapshot = {
    status,
    client,
    erroredCount: erroredIds.size,
    loadedCount: loadedIds.size,
    emptySlotCount: emptySlotIds.size,
    isBraveBrowser: storeBraveBrowser,
    dismissedNotice: storeDismissedNotice,
  };

  for (const listener of storeListeners) {
    listener();
  }
}

function reportScriptLoaded(id: string): void {
  if (!id) return;
  erroredIds.delete(id);
  loadedIds.add(id);
  recomputeAndNotify();
}

function reportScriptBlocked(id: string): void {
  if (!id) return;
  loadedIds.delete(id);
  erroredIds.add(id);
  recomputeAndNotify();
}

function reportSlotPopulated(id: string): void {
  if (!id) return;
  emptySlotIds.delete(id);
  erroredIds.delete(id);
  populatedSlotIds.add(id);
  loadedIds.add(id);
  recomputeAndNotify();
}

function reportSlotEmptyAfterTimeout(id: string): void {
  if (!id) return;
  emptySlotIds.add(id);
  storeHasTimedOut = true;
  recomputeAndNotify();
}

function markBraveBrowser(detected: boolean): void {
  if (storeBraveBrowser === detected) return;
  storeBraveBrowser = detected;
  recomputeAndNotify();
}

function markAutomatedClient(detected: boolean): void {
  if (storeAutomatedClient === detected) return;
  storeAutomatedClient = detected;
  recomputeAndNotify();
}

function markProbeTimeout(): void {
  if (storeHasTimedOut) return;
  storeHasTimedOut = true;
  recomputeAndNotify();
}

function setDismissedNotice(dismissed: boolean): void {
  storeDismissedNotice = dismissed;
  try {
    if (dismissed) {
      window.sessionStorage.setItem(RECOVERY_DISMISS_KEY, '1');
    } else {
      window.sessionStorage.removeItem(RECOVERY_DISMISS_KEY);
    }
  } catch {
    // Ignore strict private browsing storage blocks
  }
  recomputeAndNotify();
}

function subscribeAdShieldStore(listener: () => void): () => void {
  storeListeners.add(listener);
  return () => {
    storeListeners.delete(listener);
  };
}

function getAdShieldClientSnapshot(): AdShieldStoreSnapshot {
  return clientSnapshot;
}

function getAdShieldServerSnapshot(): AdShieldStoreSnapshot {
  return SERVER_SNAPSHOT;
}

function useAdShieldSnapshot(): AdShieldStoreSnapshot {
  return useSyncExternalStore(
    subscribeAdShieldStore,
    getAdShieldClientSnapshot,
    getAdShieldServerSnapshot,
  );
}

interface SlotSignalPayload {
  readonly type: 'ascalon_slot_signal';
  readonly slotId: string;
  readonly status: 'loaded' | 'blocked';
}

function isSlotSignalPayload(data: unknown): data is SlotSignalPayload {
  if (!data || typeof data !== 'object') return false;
  const candidate = data as Record<string, unknown>;
  return (
    candidate.type === 'ascalon_slot_signal' &&
    typeof candidate.slotId === 'string' &&
    (candidate.status === 'loaded' || candidate.status === 'blocked')
  );
}

function AdRecoveryNotice({ snapshot }: { snapshot: AdShieldStoreSnapshot }) {
  if (snapshot.status !== 'blocked' || snapshot.dismissedNotice) {
    return null;
  }

  const copy = getAdRecoveryCopy(snapshot.client);

  return (
    <aside
      role="status"
      aria-live="polite"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 z-40 w-[calc(100vw-2rem)] max-w-sm rounded-xl border border-[var(--accent-border)] bg-[var(--bg-surface)]/95 p-3 shadow-[0_14px_40px_rgba(0,0,0,0.82)] backdrop-blur-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded bg-amber-500/15 px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-wide text-amber-300 border border-amber-400/30">
              {copy.badge}
            </span>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-secondary)]">
            {copy.compactPrompt}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setDismissedNotice(true)}
          aria-label="Dismiss notice"
          className="shrink-0 rounded-md px-1.5 py-0.5 text-xs text-[var(--text-muted)] transition hover:bg-[var(--bg-subtle)] hover:text-[var(--text-main)] active:scale-95"
        >
          ✕
        </button>
      </div>
      <div className="mt-2.5 flex items-center gap-2">
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-lg bg-[var(--accent-primary)] px-3 py-1.5 text-xs font-bold text-[#080a0f] transition hover:brightness-110 active:scale-95"
        >
          {copy.ctaLabel}
        </button>
        <button
          type="button"
          onClick={() => setDismissedNotice(true)}
          className="rounded-lg border border-[var(--border-main)] bg-[var(--bg-subtle)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-muted)] transition hover:text-[var(--text-main)] active:scale-95"
        >
          Later
        </button>
      </div>
    </aside>
  );
}

/** Global GA4 + Adsterra Popunder/Social Bar loader + Brave/AdBlocker Delivery Telemetry. */
export function AnalyticsTelemetry() {
  const pathname = usePathname();
  const isFounderDashboard = Boolean(pathname?.startsWith('/analytics'));
  const snapshot = useAdShieldSnapshot();
  const gaReportedRef = useRef<string | null>(null);

  useEffect(() => {
    if (isFounderDashboard) return;

    try {
      if (window.sessionStorage.getItem(RECOVERY_DISMISS_KEY) === '1') {
        setDismissedNotice(true);
      }
    } catch {
      // Ignore storage restrictions
    }

    const nav = navigator as NavigatorWithBrave;
    const automated =
      Boolean(navigator.webdriver) ||
      /HeadlessChrome|Googlebot|Bingbot|PerplexityBot|GPTBot|ClaudeBot/i.test(
        navigator.userAgent,
      );
    markAutomatedClient(automated);
    if (typeof nav.brave?.isBrave === 'function') {
      nav.brave
        .isBrave()
        .then((brave) => {
          markBraveBrowser(Boolean(brave));
        })
        .catch(() => {
          markBraveBrowser(false);
        });
    }

    const onMessage = (event: MessageEvent) => {
      if (!isSlotSignalPayload(event.data)) return;
      if (event.data.status === 'blocked') {
        reportSlotEmptyAfterTimeout(event.data.slotId);
      } else {
        reportSlotPopulated(event.data.slotId);
      }
    };

    window.addEventListener('message', onMessage);
    const probeTimer = window.setTimeout(() => {
      markProbeTimeout();
    }, 3400);

    return () => {
      window.removeEventListener('message', onMessage);
      window.clearTimeout(probeTimer);
    };
  }, [isFounderDashboard]);

  useEffect(() => {
    if (isFounderDashboard) return;
    if (snapshot.status === 'checking') return;
    const key = `${snapshot.status}:${snapshot.client}`;
    if (gaReportedRef.current === key) return;
    gaReportedRef.current = key;

    const w = window as Window & {
      gtag?: (...args: unknown[]) => void;
    };
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'ad_shield_status', {
        shield_status: snapshot.status,
        shield_client: snapshot.client,
        brave_detected: snapshot.isBraveBrowser,
      });
    }
  }, [isFounderDashboard, snapshot.status, snapshot.client, snapshot.isBraveBrowser]);

  if (isFounderDashboard) {
    return null;
  }

  return (
    <>
      {GA4_ID ? (
        <>
          <Script
            id="ascalon-ga4-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`}
            strategy="afterInteractive"
          />
          <Script id="ascalon-ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}', {
                anonymize_ip: true,
                send_page_view: true
              });
            `}
          </Script>
        </>
      ) : null}

      {ADSTERRA_POPUNDER_SRC ? (
        <Script
          id="ascalon-popunder-loader"
          src={ADSTERRA_POPUNDER_SRC}
          strategy="afterInteractive"
          data-cfasync="false"
          onLoad={() => reportScriptLoaded('popunder')}
          onError={() => reportScriptBlocked('popunder')}
        />
      ) : null}

      {ADSTERRA_SOCIAL_BAR_SRC ? (
        <Script
          id="ascalon-social-bar-loader"
          src={ADSTERRA_SOCIAL_BAR_SRC}
          strategy="afterInteractive"
          data-cfasync="false"
          onLoad={() => reportScriptLoaded('social-bar')}
          onError={() => reportScriptBlocked('social-bar')}
        />
      ) : null}

      <AdRecoveryNotice snapshot={snapshot} />
    </>
  );
}

interface IframeSpec {
  readonly key: string;
  readonly width: number;
  readonly height: number;
  readonly title: string;
}

function buildAdsterraIframeSrcDoc(
  adKey: string,
  width: number,
  height: number,
  slotId: string,
): string {
  const safeKey = JSON.stringify(adKey);
  const safeUrl = JSON.stringify(`${ADSTERRA_BANNER_BASE_URL}/${adKey}`);
  const safeSlotId = JSON.stringify(slotId);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
  html, body {
    margin: 0;
    padding: 0;
    width: ${width}px;
    height: ${height}px;
    overflow: hidden;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
</head>
<body>
<script type="text/javascript">
  (function () {
    var slotId = ${safeSlotId};
    var notify = function (status) {
      try {
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({ type: 'ascalon_slot_signal', slotId: slotId, status: status }, '*');
        }
      } catch (_e) {}
    };

    try {
      window.atOptions = {
        key: ${safeKey},
        format: 'iframe',
        height: ${height},
        width: ${width},
        params: {}
      };
    } catch (_e) {
      notify('blocked');
      return;
    }

    var tag = document.createElement('script');
    tag.type = 'text/javascript';
    tag.async = false;
    tag.src = ${safeUrl};
    tag.onerror = function () {
      notify('blocked');
    };
    tag.onload = function () {
      window.setTimeout(function () {
        var filled = Boolean(document.body && document.body.querySelector('iframe, img, a, ins'));
        notify(filled ? 'loaded' : 'blocked');
      }, 2800);
    };
    document.body.appendChild(tag);
  })();
</script>
</body>
</html>`;
}

function AdIframe({ spec }: { spec: IframeSpec }) {
  const slotId = useId();
  if (!spec.key) return null;

  return (
    <iframe
      title={spec.title}
      width={spec.width}
      height={spec.height}
      loading="lazy"
      scrolling="no"
      sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
      srcDoc={buildAdsterraIframeSrcDoc(spec.key, spec.width, spec.height, slotId)}
      className="block border-0 bg-transparent"
      style={{ width: spec.width, height: spec.height }}
    />
  );
}

function AdsterraNativeSlot() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !ADSTERRA_NATIVE_SRC || !ADSTERRA_NATIVE_KEY) return;
    if (el.dataset.loaded === '1') return;
    el.dataset.loaded = '1';

    let settled = false;
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = ADSTERRA_NATIVE_SRC;
    script.onload = () => {
      reportScriptLoaded('native-script');
      window.setTimeout(() => {
        if (settled) return;
        const containerNode = document.getElementById(`container-${ADSTERRA_NATIVE_KEY}`);
        const hasRenderedMarkup = Boolean(
          containerNode && containerNode.children.length > 0,
        );
        settled = true;
        if (hasRenderedMarkup) {
          reportSlotPopulated('native-container');
        } else {
          reportSlotEmptyAfterTimeout('native-container');
        }
      }, 3000);
    };
    script.onerror = () => {
      settled = true;
      reportScriptBlocked('native-script');
    };
    el.appendChild(script);

    const observer = new MutationObserver(() => {
      const containerNode = document.getElementById(`container-${ADSTERRA_NATIVE_KEY}`);
      if (containerNode && containerNode.children.length > 0) {
        settled = true;
        reportSlotPopulated('native-container');
        observer.disconnect();
      }
    });
    const nativeContainer = document.getElementById(`container-${ADSTERRA_NATIVE_KEY}`);
    if (nativeContainer) {
      observer.observe(nativeContainer, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!ADSTERRA_NATIVE_KEY) return null;

  return (
    <div ref={containerRef} className="w-full">
      <div
        id={`container-${ADSTERRA_NATIVE_KEY}`}
        className="w-full min-h-[120px] flex items-center justify-center"
      />
    </div>
  );
}

function BlockedSlotRecoveryCard({
  variant,
  client,
}: {
  variant: AdsterraSlotVariant;
  client: AdBlockerClient;
}) {
  const copy = getAdRecoveryCopy(client);
  const partnerOffer = parsePartnerFallbackOffer();

  if (partnerOffer && (variant === 'native' || variant === 'sidebar' || variant === 'duo-box')) {
    return (
      <a
        href={partnerOffer.href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group flex w-full flex-col justify-between gap-2 rounded-lg border border-[var(--accent-border)] bg-[var(--bg-subtle)]/90 p-3.5 text-left transition hover:border-[var(--accent-primary)] active:scale-[0.99]"
      >
        <div>
          <span className="inline-block rounded bg-[var(--accent-bg)] px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--accent-primary)]">
            Partner Offer
          </span>
          <h4 className="mt-1.5 text-sm font-bold text-[var(--text-main)] group-hover:text-[var(--accent-primary)]">
            {partnerOffer.title}
          </h4>
          <p className="mt-1 text-xs text-[var(--text-muted)]">
            {partnerOffer.description}
          </p>
        </div>
        <span className="inline-flex w-fit items-center rounded-md bg-[var(--accent-primary)] px-2.5 py-1 text-xs font-bold text-[#080a0f]">
          {partnerOffer.ctaText}
        </span>
      </a>
    );
  }

  if (variant === 'leaderboard' || variant === 'midbanner') {
    return (
      <div className="flex w-full flex-wrap items-center justify-between gap-2.5 px-3 py-2 text-left">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="shrink-0 rounded bg-amber-500/15 px-1.5 py-0.5 font-mono text-[10px] font-bold text-amber-300 border border-amber-400/30">
              {copy.badge}
            </span>
            <span className="truncate text-xs font-semibold text-[var(--text-main)]">
              {copy.headline}
            </span>
          </div>
          <p className="mt-0.5 truncate text-[11px] text-[var(--text-muted)]">
            {copy.steps[0]}
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="shrink-0 rounded-lg bg-[var(--accent-primary)] px-3 py-1.5 text-xs font-bold text-[#080a0f] transition hover:brightness-110 active:scale-95"
        >
          Reload
        </button>
      </div>
    );
  }

  if (variant === 'skyscraper' || variant === 'half-skyscraper') {
    return (
      <div className="flex h-full w-full flex-col items-center justify-between px-2.5 py-4 text-center">
        <div>
          <span className="inline-block rounded bg-amber-500/15 px-1.5 py-0.5 font-mono text-[9px] font-bold text-amber-300 border border-amber-400/30">
            {client === 'brave-shields' ? 'BRAVE' : 'SHIELD'}
          </span>
          <p className="mt-2 text-xs font-bold leading-snug text-[var(--text-main)]">
            Allow Ascalon.fun
          </p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-[var(--text-muted)]">
            {copy.steps[0]}
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-3 w-full rounded-lg bg-[var(--accent-primary)] px-2 py-1.5 text-[11px] font-bold text-[#080a0f] transition hover:brightness-110 active:scale-95"
        >
          Reload Page
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col justify-between gap-3 rounded-lg border border-amber-400/25 bg-[var(--bg-subtle)]/75 p-4 text-left">
      <div>
        <span className="inline-flex items-center rounded bg-amber-500/15 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-amber-300 border border-amber-400/30">
          {copy.badge}
        </span>
        <h4 className="mt-2 text-sm font-bold text-[var(--text-main)]">
          {copy.headline}
        </h4>
        <ul className="mt-1.5 space-y-1 text-xs leading-relaxed text-[var(--text-muted)]">
          {copy.steps.map((step) => (
            <li key={step} className="flex items-start gap-1.5">
              <span className="text-[var(--accent-primary)]">•</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="w-full rounded-lg bg-[var(--accent-primary)] px-3 py-2 text-xs font-bold text-[#080a0f] transition hover:brightness-110 active:scale-95"
      >
        {copy.ctaLabel}
      </button>
    </div>
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

const FRAME_SPECS = {
  leaderboard: { key: ADSTERRA_KEYS.banner728, width: 728, height: 90, title: 'Featured banner 728x90' },
  mobileLeaderboard: { key: ADSTERRA_KEYS.banner320, width: 320, height: 50, title: 'Featured banner 320x50' },
  midbanner: { key: ADSTERRA_KEYS.banner468, width: 468, height: 60, title: 'Featured banner 468x60' },
  sidebar: { key: ADSTERRA_KEYS.banner300, width: 300, height: 250, title: 'Featured box 300x250' },
  skyscraper: { key: ADSTERRA_KEYS.banner160x600, width: 160, height: 600, title: 'Featured sky 160x600' },
  halfSkyscraper: { key: ADSTERRA_KEYS.banner160x300, width: 160, height: 300, title: 'Featured half-sky 160x300' },
} as const;

export function AdsterraSlot({
  variant,
  label = 'Featured',
  className = '',
  minViewportWidth,
}: AdsterraSlotProps) {
  const [viewportEligible, setViewportEligible] = useState<boolean>(
    () => minViewportWidth === undefined,
  );
  const snapshot = useAdShieldSnapshot();
  const displayLabel = buildCosmeticNeutralLabel(label);

  useEffect(() => {
    if (minViewportWidth === undefined) return;
    const mq = window.matchMedia(`(min-width: ${minViewportWidth}px)`);
    const update = () => setViewportEligible(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [minViewportWidth]);

  if (!viewportEligible) {
    return null;
  }

  const isBlocked = snapshot.status === 'blocked';

  if (variant === 'leaderboard') {
    return (
      <div
        data-partner-slot="leaderboard"
        aria-label={displayLabel}
        className={`flex flex-col items-center justify-center rounded-xl border border-[var(--border-main)] bg-[var(--bg-surface)]/80 px-2 py-2 ${className}`}
      >
        <span className="mb-1 text-[9px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          {displayLabel}
        </span>
        {isBlocked ? (
          <div className="w-full max-w-[728px]">
            <BlockedSlotRecoveryCard variant="leaderboard" client={snapshot.client} />
          </div>
        ) : (
          <>
            <div className="hidden md:flex items-center justify-center min-h-[90px] w-full max-w-[728px] overflow-hidden">
              <AdIframe spec={FRAME_SPECS.leaderboard} />
            </div>
            <div className="flex md:hidden items-center justify-center min-h-[50px] w-full max-w-[320px] overflow-hidden">
              <AdIframe spec={FRAME_SPECS.mobileLeaderboard} />
            </div>
          </>
        )}
      </div>
    );
  }

  if (variant === 'midbanner') {
    return (
      <div
        data-partner-slot="midbanner"
        aria-label={displayLabel}
        className={`flex flex-col items-center justify-center rounded-xl border border-[var(--border-main)] bg-[var(--bg-surface)]/80 px-2 py-2 ${className}`}
      >
        <span className="mb-1 text-[9px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          {displayLabel}
        </span>
        {isBlocked ? (
          <div className="w-full max-w-[468px]">
            <BlockedSlotRecoveryCard variant="midbanner" client={snapshot.client} />
          </div>
        ) : (
          <>
            <div className="hidden sm:flex items-center justify-center min-h-[60px] w-full max-w-[468px] overflow-hidden">
              <AdIframe spec={FRAME_SPECS.midbanner} />
            </div>
            <div className="flex sm:hidden items-center justify-center min-h-[50px] w-full max-w-[320px] overflow-hidden">
              <AdIframe spec={FRAME_SPECS.mobileLeaderboard} />
            </div>
          </>
        )}
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div
        data-partner-slot="sidebar"
        aria-label={displayLabel}
        className={`flex flex-col items-center justify-center rounded-xl border border-[var(--border-main)] bg-[var(--bg-surface)]/80 p-2 ${className}`}
      >
        <span className="mb-1.5 text-[9px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          {displayLabel}
        </span>
        <div className="min-h-[250px] w-[300px] max-w-full flex items-center justify-center overflow-hidden">
          {isBlocked ? (
            <BlockedSlotRecoveryCard variant="sidebar" client={snapshot.client} />
          ) : (
            <AdIframe spec={FRAME_SPECS.sidebar} />
          )}
        </div>
      </div>
    );
  }

  if (variant === 'skyscraper' || variant === 'half-skyscraper') {
    const spec =
      variant === 'skyscraper' ? FRAME_SPECS.skyscraper : FRAME_SPECS.halfSkyscraper;
    return (
      <div
        data-partner-slot={variant}
        aria-label={displayLabel}
        className={`hidden md:flex flex-col items-center justify-center rounded-xl border border-[var(--border-main)] bg-[var(--bg-surface)]/80 p-2 ${className}`}
      >
        <span className="mb-1.5 text-[9px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          {displayLabel}
        </span>
        <div
          className="flex items-center justify-center overflow-hidden"
          style={{ width: spec.width, height: spec.height }}
        >
          {isBlocked ? (
            <BlockedSlotRecoveryCard variant={variant} client={snapshot.client} />
          ) : (
            <AdIframe spec={spec} />
          )}
        </div>
      </div>
    );
  }

  if (variant === 'duo-box') {
    return (
      <div
        data-partner-slot="duo-box"
        aria-label={displayLabel}
        className={`flex flex-col items-center justify-center rounded-xl border border-[var(--border-main)] bg-[var(--bg-surface)]/80 p-3 ${className}`}
      >
        <span className="mb-2 text-[9px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          {displayLabel}
        </span>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
          <div className="min-h-[250px] w-[300px] max-w-full flex items-center justify-center overflow-hidden">
            {isBlocked ? (
              <BlockedSlotRecoveryCard variant="duo-box" client={snapshot.client} />
            ) : (
              <AdIframe spec={FRAME_SPECS.sidebar} />
            )}
          </div>
          <div className="hidden lg:flex min-h-[250px] w-[300px] items-center justify-center overflow-hidden">
            {isBlocked ? (
              <BlockedSlotRecoveryCard variant="sidebar" client={snapshot.client} />
            ) : (
              <AdIframe spec={FRAME_SPECS.sidebar} />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      data-partner-slot="native"
      aria-label={displayLabel}
      className={`rounded-xl border border-[var(--border-main)] bg-[var(--bg-surface)]/80 p-3 ${className}`}
    >
      <div className="mb-2 text-[9px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
        {displayLabel}
      </div>
      {isBlocked ? (
        <BlockedSlotRecoveryCard variant="native" client={snapshot.client} />
      ) : (
        <AdsterraNativeSlot />
      )}
    </div>
  );
}
