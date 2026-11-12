'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID?.trim() || '';

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
 * Ad-free by design: zero third-party ad networks, zero CLS impact, and skips /analytics views.
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
    </>
  );
}
