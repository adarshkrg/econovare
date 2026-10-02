/* ============================================================
   ANALYTICS — GA4 event tracking helper
   - Single source of truth for firing gtag events
   - Used by AnalyticsEvents.tsx (auto-tracked contact clicks)
     and by any future lead form's onSubmit handler
   ============================================================ */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, {
    page_path: window.location.pathname,
    ...params,
  });
}