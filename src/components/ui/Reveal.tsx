"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ComponentPropsWithoutRef } from "react";

let observer: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, () => void>();

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          callbacks.get(entry.target)?.();
          observer?.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );
  }
  return observer;
}

/** Observe an element once and flag it `.in` when it enters the viewport. */
export function useReveal<T extends Element>(onReveal?: () => void) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (onReveal) callbacks.set(el, onReveal);
    const io = getObserver();
    io.observe(el);
    return () => {
      io.unobserve(el);
      callbacks.delete(el);
    };
  }, [onReveal]);
  return ref;
}

type RevealProps<T extends ElementType> = {
  as?: T;
  delay?: number;
} & ComponentPropsWithoutRef<T>;

export default function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  className = "",
  style,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={`rv ${className}`}
      style={{ "--dl": `${delay}ms`, ...style } as CSSProperties}
      {...rest}
    />
  );
}
