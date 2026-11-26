"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // A refresh (or a fresh load) always starts at the hero, never at a stale anchor.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  useEffect(() => {
    // Respect the OS "reduce motion" setting — fall back to native scrolling.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
      smoothWheel: true,
      autoRaf: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    window.__lenis = lenis;

    return () => {
      window.__lenis = undefined;
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Handle anchors after client-side navigation (e.g. returning from a case study)
    // and for hash-only navigation, then consume the hash so refresh starts at the hero.
    const scrollToAnchor = () => {
      const hash = window.location.hash;
      if (!hash || hash.length < 2) return;

      const element = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!element) return;
      if (window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -84, immediate: true });
      } else {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 84,
          behavior: "auto",
        });
      }

      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    };

    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(scrollToAnchor);
    });
    window.addEventListener("hashchange", scrollToAnchor);

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      window.removeEventListener("hashchange", scrollToAnchor);
    };
  }, [pathname]);

  return <>{children}</>;
}
