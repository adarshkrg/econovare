"use client";

/* ============================================================
   ANALYTICS EVENTS — sitewide contact click tracking
   - Renders nothing. Mount once in root layout.
   - Uses event delegation on document, so ANY tel:/wa.me/mailto
     link added on any current or future page is tracked
     automatically, no per-page onClick wiring required.
   - Events fired: click_call, click_whatsapp, click_email
   ============================================================ */

import { useEffect } from "react";
import { trackEvent } from "../lib/analytics";

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        trackEvent("click_call", { link_url: href });
      } else if (href.startsWith("mailto:")) {
        trackEvent("click_email", { link_url: href });
      } else if (href.includes("wa.me") || href.includes("whatsapp.com")) {
        trackEvent("click_whatsapp", { link_url: href });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}