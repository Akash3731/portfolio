import type { ServiceIllustration } from "@/lib/types";

interface ServicePillProps {
  variant: ServiceIllustration;
}

const TINT: Record<ServiceIllustration, string> = {
  web: "var(--illo-blue-tint)",
  saas: "var(--illo-teal-tint)",
  cms: "var(--illo-yellow-tint)",
  mobile: "var(--illo-coral-tint)",
};

/** Compact animated icon shown in the collapsed service row. */
export default function ServicePill({ variant }: ServicePillProps) {
  return (
    <svg viewBox="0 0 170 96" className="block size-full font-sans" aria-hidden="true">
      <rect width="170" height="96" fill={TINT[variant]} />
      {variant === "web" && (
        <g>
          <rect x="45" y="20" width="80" height="56" rx="9" fill="#fff" stroke="var(--illo-ink)" strokeWidth="3" />
          <path d="M45 34h80" stroke="var(--illo-ink)" strokeWidth="3" />
          <circle cx="54" cy="27" r="2.5" fill="var(--illo-coral)" />
          <circle cx="62" cy="27" r="2.5" fill="var(--illo-yellow)" />
          <text x="85" y="63" textAnchor="middle" fontSize="18" fontWeight="700" fill="var(--illo-ink)">
            {"</>"}
          </text>
          <path className="illo-cursor-sm" d="M112 56v18l5-5 4 8 4-2-4-8h7z" fill="var(--illo-ink)" stroke="#fff" strokeWidth="1.5" />
        </g>
      )}
      {variant === "saas" && (
        <g>
          {[22, 34, 28, 44].map((h, i) => (
            <rect
              key={i}
              className="illo-grow"
              style={{ animationDelay: `${i * 0.2}s` }}
              x={54 + i * 17}
              y={72 - h}
              width="11"
              height={h}
              rx="3"
              fill={i === 3 ? "var(--accent)" : "var(--illo-teal)"}
              stroke="var(--illo-ink)"
              strokeWidth="2"
            />
          ))}
          <path d="M46 74h80" stroke="var(--illo-ink)" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}
      {variant === "cms" && (
        <g>
          <rect x="44" y="18" width="50" height="62" rx="8" fill="#fff" stroke="var(--illo-ink)" strokeWidth="3" />
          <rect x="53" y="30" width="30" height="5" rx="2.5" fill="var(--illo-ink)" />
          <rect x="53" y="42" width="32" height="4" rx="2" fill="var(--illo-muted)" />
          <rect className="illo-type" x="53" y="52" width="26" height="4" rx="2" fill="var(--illo-ink)" />
          <circle cx="116" cy="49" r="17" fill="none" stroke="var(--illo-ink)" strokeWidth="6" opacity=".15" />
          <circle
            className="illo-ring"
            cx="116"
            cy="49"
            r="17"
            fill="none"
            stroke="var(--illo-ink)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 17}
            style={{ ["--ring" as string]: 2 * Math.PI * 17, ["--ring-to" as string]: 2 * Math.PI * 17 * 0.1 }}
            transform="rotate(-90 116 49)"
          />
        </g>
      )}
      {variant === "mobile" && (
        <g>
          <rect x="58" y="12" width="40" height="72" rx="9" fill="#fff" stroke="var(--illo-ink)" strokeWidth="3" />
          <rect x="66" y="26" width="24" height="16" rx="4" fill="var(--illo-blue)" />
          <rect x="66" y="66" width="24" height="8" rx="4" fill="var(--illo-ink)" />
          <g className="illo-float">
            <circle cx="118" cy="42" r="15" fill="var(--illo-yellow)" stroke="var(--illo-ink)" strokeWidth="3" />
            <text x="118" y="48" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--illo-ink)">
              ₹
            </text>
          </g>
        </g>
      )}
    </svg>
  );
}
