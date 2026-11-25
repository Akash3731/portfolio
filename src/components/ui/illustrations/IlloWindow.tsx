import type { ReactNode } from "react";

interface IlloWindowProps {
  x: number;
  y: number;
  w: number;
  h: number;
  title?: string;
  className?: string;
  children?: ReactNode;
}

/** Flat browser/app window frame shared by the illustrations (ink outline, title bar, controls). */
export default function IlloWindow({ x, y, w, h, title, className, children }: IlloWindowProps) {
  return (
    <g className={className}>
      <rect x={x + 6} y={y + 8} width={w} height={h} rx="18" fill="var(--illo-ink)" />
      <rect x={x} y={y} width={w} height={h} rx="18" fill="#fff" stroke="var(--illo-ink)" strokeWidth="3" />
      <path d={`M${x} ${y + 36}h${w}`} stroke="var(--illo-ink)" strokeWidth="3" />
      <circle cx={x + 20} cy={y + 18} r="5" fill="var(--illo-coral)" />
      <circle cx={x + 36} cy={y + 18} r="5" fill="var(--illo-yellow)" />
      <circle cx={x + 52} cy={y + 18} r="5" fill="var(--accent)" />
      {title && (
        <>
          <rect x={x + 72} y={y + 9} width={Math.min(170, w - 130)} height="18" rx="9" fill="var(--illo-cream)" />
          <text x={x + 84} y={y + 22} fontSize="10" fontWeight="600" fill="var(--illo-ink)">
            {title}
          </text>
        </>
      )}
      {children}
    </g>
  );
}
