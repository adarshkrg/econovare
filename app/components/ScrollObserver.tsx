"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

    const init = () => {
      const els = document.querySelectorAll(selectors);
      if (!els.length) return;

      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("visible"));
        return;
      }

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      els.forEach((el) => obs.observe(el));
      return obs;
    };

    const timer = setTimeout(init, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
