export type AdShieldStatus = 'checking' | 'delivered' | 'blocked';

export type AdBlockerClient = 'brave-shields' | 'adblock-extension' | 'none';

export interface AdShieldEvaluationInput {
  readonly erroredCount: number;
  readonly loadedCount: number;
  readonly populatedSlotCount: number;
  readonly emptySlotCount: number;
  readonly isBraveBrowser: boolean;
  readonly hasTimedOut: boolean;
  readonly isAutomatedClient?: boolean;
}

export interface AdRecoveryCopy {
  readonly badge: string;
  readonly headline: string;
  readonly steps: readonly string[];
  readonly compactPrompt: string;
  readonly ctaLabel: string;
}

export interface PartnerFallbackOffer {
  readonly title: string;
  readonly description: string;
  readonly ctaText: string;
  readonly href: string;
}

/**
 * Evaluates whether network filters, Brave Shields, or uBlock scriptlets (e.g. noopjs / abort-on-property-write)
 * prevented Adsterra scripts or slot containers from rendering real ad markup.
 */
export function evaluateAdShieldOutcome(
  input: AdShieldEvaluationInput,
): AdShieldStatus {
  if (input.erroredCount > 0) {
    return 'blocked';
  }

  // Ad networks return 0-byte responses to Googlebot/HeadlessChrome UAs; never flag crawlers as adblockers.
  if (input.isAutomatedClient) {
    return input.loadedCount > 0 || input.hasTimedOut ? 'delivered' : 'checking';
  }

  // Only classify noopjs/scriptlet silent blocking when every measured container stayed empty and none populated.
  if (
    input.hasTimedOut &&
    input.emptySlotCount > 0 &&
    input.populatedSlotCount === 0
  ) {
    return 'blocked';
  }

  if (input.populatedSlotCount > 0 || (input.loadedCount > 0 && input.emptySlotCount === 0)) {
    return 'delivered';
  }

  if (input.hasTimedOut && input.isBraveBrowser && input.loadedCount === 0) {
    return 'blocked';
  }

  return 'checking';
}

/** Maps runtime block status and Brave detection to a specific blocker client type. */
export function resolveAdBlockerClient(
  status: AdShieldStatus,
  isBraveBrowser: boolean,
): AdBlockerClient {
  if (status !== 'blocked') {
    return 'none';
  }
  return isBraveBrowser ? 'brave-shields' : 'adblock-extension';
}

/** Replaces EasyList/AdGuard cosmetic-filter keywords (e.g. "Adsterra", "Sponsored") with neutral UI labels. */
export function buildCosmeticNeutralLabel(label?: string): string {
  const trimmed = label?.trim() ?? '';
  if (!trimmed || /\b(adsterra|sponsored|advertisement|ad\s*unit)\b/i.test(trimmed)) {
    return 'Featured';
  }
  return trimmed;
}

/** Returns tailored recovery guidance tuned to Brave Shields vs browser ad-block extensions. */
export function getAdRecoveryCopy(client: AdBlockerClient): AdRecoveryCopy {
  if (client === 'brave-shields') {
    return {
      badge: 'BRAVE SHIELDS ACTIVE',
      headline: 'Support Free Ascalon Wiki Tools',
      steps: [
        'Click the orange Brave Lion icon in your browser bar.',
        'Toggle Shields DOWN for ascalon.fun, then click Reload.',
      ],
      compactPrompt:
        'Using Brave Shields? Toggle the Lion icon Down for ascalon.fun to keep our Tier Lists & Guides free.',
      ctaLabel: 'Shields Down — Reload',
    };
  }

  return {
    badge: 'ADBLOCKER DETECTED',
    headline: 'Keep Ascalon.fun Free & Ad-Supported',
    steps: [
      'Pause uBlock Origin / AdBlock on ascalon.fun (non-intrusive ads only).',
      'Click Reload below to verify and restore normal partner slots.',
    ],
    compactPrompt:
      'AdBlocker active — pause blocking on ascalon.fun to support free tier lists & promo code alerts.',
    ctaLabel: 'Paused Blocker — Reload',
  };
}

/** Parses optional first-party direct partner CTA config when third-party ad networks are blocked. */
export function parsePartnerFallbackOffer(
  env: Record<string, string | undefined> = process.env,
): PartnerFallbackOffer | null {
  const href = env.NEXT_PUBLIC_PARTNER_FALLBACK_URL?.trim() ?? '';
  if (!href.startsWith('https://')) {
    return null;
  }

  return {
    title:
      env.NEXT_PUBLIC_PARTNER_FALLBACK_TITLE?.trim() ||
      'Official Featured Game Offer',
    description:
      env.NEXT_PUBLIC_PARTNER_FALLBACK_DESC?.trim() ||
      'Support Ascalon.fun through our verified game partner link.',
    ctaText: env.NEXT_PUBLIC_PARTNER_FALLBACK_CTA?.trim() || 'View Offer',
    href,
  };
}
