"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Highlights a nav link only when that section crosses a probe line just below
 * the navbar. When the hero, a gap, or the footer is in view, nothing is active.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");
  const lockUntil = useRef(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      // Keep the clicked link highlighted while the smooth scroll runs.
      if (performance.now() < lockUntil.current) return;

      const probe = Math.max(100, window.innerHeight * 0.35);
      let current = "";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probe && rect.bottom > probe) {
          current = id;
          break;
        }
      }

      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  const highlight = (id: string) => {
    setActive(id);
    lockUntil.current = performance.now() + 1500;
  };

  return { active, highlight };
}
