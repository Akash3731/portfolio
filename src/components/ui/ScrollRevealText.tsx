"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

interface ScrollRevealTextProps {
  children: string;
  as?: ElementType;
  className?: string;
  revealedColor?: string;
  unrevealedColor?: string;
  /** Viewport fraction (from top) where the reveal starts / completes, measured at the element's top edge. */
  scrollStart?: number;
  scrollEnd?: number;
}

/** Word-by-word colour reveal driven by scroll progress (works with Lenis, which drives native scroll). */
export default function ScrollRevealText({
  children,
  as: Tag = "p",
  className = "",
  revealedColor = "var(--color-text-primary)",
  unrevealedColor = "var(--color-text-soft)",
  scrollStart = 0.85,
  scrollEnd = 0.3,
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const words = children.trim().split(/\s+/);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    // If the text already sits above the start line on load, start from where it is,
    // so the reveal always begins at the first word.
    const initialTop = el.getBoundingClientRect().top + window.scrollY;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const start = Math.min(vh * scrollStart, initialTop);
      const end = vh * scrollEnd;
      const top = el.getBoundingClientRect().top;
      setProgress(Math.min(Math.max((start - top) / (start - end), 0), 1));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [scrollStart, scrollEnd]);

  return (
    <Tag ref={ref} className={className} aria-label={children}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="transition-colors duration-300"
          style={{ color: progress > i / words.length ? revealedColor : unrevealedColor }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
