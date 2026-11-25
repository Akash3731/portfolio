"use client";

import Lenis from "lenis";
import { createContext, useCallback, useContext, useEffect, useRef, type ReactNode } from "react";

type ScrollTo = (id: string, options?: { block?: "start" | "center" }) => void;

const ScrollContext = createContext<ScrollTo>(() => {});

export const useScrollTo = () => useContext(ScrollContext);

interface SmoothScrollProps {
  children: ReactNode;
}

const SCROLL_OFFSET = -16;

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: { offset: SCROLL_OFFSET } });
    lenisRef.current = lenis;
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = useCallback<ScrollTo>((id, options) => {
    const el = document.getElementById(id);
    if (!el) return;
    // Only centre blocks that actually fit the viewport; tall ones align to the top.
    const center = options?.block === "center" && el.offsetHeight < window.innerHeight;
    const lenis = lenisRef.current;
    if (lenis) {
      const offset = center ? -(window.innerHeight - el.offsetHeight) / 2 : SCROLL_OFFSET;
      lenis.scrollTo(el, { offset, duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: center ? "center" : "start" });
    }
  }, []);

  return <ScrollContext.Provider value={scrollTo}>{children}</ScrollContext.Provider>;
}
