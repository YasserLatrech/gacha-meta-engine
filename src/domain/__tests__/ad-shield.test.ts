import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import {
  buildCosmeticNeutralLabel,
  evaluateAdShieldOutcome,
  getAdRecoveryCopy,
  parsePartnerFallbackOffer,
  resolveAdBlockerClient,
} from '../ad-shield';

describe('AdShield & Brave/AdBlocker Recovery Domain', () => {
  it('detects hard script blocking immediately regardless of timeout', () => {
    expect(
      evaluateAdShieldOutcome({
        erroredCount: 1,
        loadedCount: 0,
        populatedSlotCount: 0,
        emptySlotCount: 0,
        isBraveBrowser: true,
        hasTimedOut: false,
      }),
    ).toBe('blocked');
  });

  it('catches silent noopjs/scriptlet redirects only when all measured containers remain empty after timeout', () => {
    expect(
      evaluateAdShieldOutcome({
        erroredCount: 0,
        loadedCount: 2,
        populatedSlotCount: 0,
        emptySlotCount: 2,
        isBraveBrowser: false,
        hasTimedOut: true,
      }),
    ).toBe('blocked');

    // Never false-positive when at least one container genuinely populated
    expect(
      evaluateAdShieldOutcome({
        erroredCount: 0,
        loadedCount: 3,
        populatedSlotCount: 2,
        emptySlotCount: 1,
        isBraveBrowser: false,
        hasTimedOut: true,
      }),
    ).toBe('delivered');

    // Never flag Googlebot / headless crawlers when scripts return 200 OK without network blocks
    expect(
      evaluateAdShieldOutcome({
        erroredCount: 0,
        loadedCount: 3,
        populatedSlotCount: 0,
        emptySlotCount: 4,
        isBraveBrowser: false,
        hasTimedOut: true,
        isAutomatedClient: true,
      }),
    ).toBe('delivered');
  });

  it('distinguishes Brave Shields vs extension blockers accurately', () => {
    expect(resolveAdBlockerClient('blocked', true)).toBe('brave-shields');
    expect(resolveAdBlockerClient('blocked', false)).toBe('adblock-extension');
    expect(resolveAdBlockerClient('delivered', true)).toBe('none');

    const braveCopy = getAdRecoveryCopy('brave-shields');
    expect(braveCopy.badge).toContain('BRAVE SHIELDS');
    expect(braveCopy.steps.join(' ')).toContain('Brave Lion');

    const extCopy = getAdRecoveryCopy('adblock-extension');
    expect(extCopy.badge).toContain('ADBLOCKER');
    expect(extCopy.steps.join(' ')).toContain('uBlock Origin');
  });

  it('neutralizes EasyList/AdGuard cosmetic keywords from visible wrapper labels', () => {
    expect(buildCosmeticNeutralLabel('Sponsored')).toBe('Featured');
    expect(buildCosmeticNeutralLabel('Adsterra Leaderboard')).toBe('Featured');
    expect(buildCosmeticNeutralLabel('Partner Highlight')).toBe(
      'Partner Highlight',
    );
  });

  it('parses first-party HTTPS partner fallback offers strictly and rejects non-HTTPS URLs', () => {
    expect(parsePartnerFallbackOffer({})).toBeNull();
    expect(
      parsePartnerFallbackOffer({
        NEXT_PUBLIC_PARTNER_FALLBACK_URL: 'http://insecure.example.com',
      }),
    ).toBeNull();

    const offer = parsePartnerFallbackOffer({
      NEXT_PUBLIC_PARTNER_FALLBACK_URL: 'https://partner.example.com/offer',
      NEXT_PUBLIC_PARTNER_FALLBACK_TITLE: 'Top-Up Bonus',
      NEXT_PUBLIC_PARTNER_FALLBACK_CTA: 'Claim',
    });
    expect(offer).toEqual({
      href: 'https://partner.example.com/offer',
      title: 'Top-Up Bonus',
      description: 'Support Ascalon.fun through our verified game partner link.',
      ctaText: 'Claim',
    });
  });

  it('enforces zero cosmetic Adsterra tokens in AnalyticsAndAds UI markup', () => {
    const rootDir = path.resolve(__dirname, '../../..');
    const adsSrc = fs.readFileSync(
      path.join(rootDir, 'src/components/micro/AnalyticsAndAds.tsx'),
      'utf8',
    );
    expect(adsSrc).not.toContain('title="Adsterra');
    expect(adsSrc).not.toContain("title: 'Adsterra");
    expect(adsSrc).toContain('BlockedSlotRecoveryCard');
    expect(adsSrc).toContain('AdRecoveryNotice');
    expect(adsSrc).toContain('ad_shield_status');
  });
});
