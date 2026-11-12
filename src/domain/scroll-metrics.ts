export const SCROLL_SHOW_THRESHOLD_PX = 320;
export const SCROLL_RING_RADIUS = 19;
export const SCROLL_RING_CIRCUMFERENCE = 2 * Math.PI * SCROLL_RING_RADIUS;

export interface ScrollMetrics {
  readonly visible: boolean;
  readonly progress: number;
}

/** Computes Back-to-Top visibility and normalized [0..1] scroll progress. */
export function computeScrollMetrics(
  scrollY: number,
  scrollHeight: number,
  viewportHeight: number,
): ScrollMetrics {
  const maxScrollable = Math.max(0, scrollHeight - viewportHeight);
  if (maxScrollable <= 0) {
    return { visible: false, progress: 0 };
  }
  const progress = Math.min(1, Math.max(0, scrollY / maxScrollable));
  const nearBottom = maxScrollable > 120 && scrollY >= maxScrollable - 80;
  const visible = scrollY >= SCROLL_SHOW_THRESHOLD_PX || nearBottom;
  return { visible, progress };
}
