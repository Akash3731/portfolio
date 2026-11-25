import IlloWindow from "./IlloWindow";

const RING = 2 * Math.PI * 34;

/** CMS and SEO tooling — page editor being typed into, with a live SEO score ring and checklist. */
export default function ServiceCms() {
  return (
    <svg viewBox="0 0 500 400" className="block size-full font-sans" role="img" aria-label="Illustration of a CMS editor with a live SEO score">
      <rect width="500" height="400" fill="var(--illo-yellow-tint)" />
      <IlloWindow x={36} y={48} w={290} h={300} title="Edit page · Home">
        {/* toolbar */}
        <rect x="52" y="98" width="258" height="30" rx="8" fill="var(--illo-cream)" />
        {["B", "I", "U", "H1", "Aa"].map((t, i) => (
          <text key={t} x={68 + i * 34} y="118" fontSize="12" fontWeight="700" fill="var(--illo-ink)">
            {t}
          </text>
        ))}
        <rect x="52" y="144" width="190" height="16" rx="4" fill="var(--illo-ink)" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x="52" y={176 + i * 16} width={[240, 220, 236][i]} height="7" rx="3.5" fill="var(--illo-muted)" />
        ))}
        <rect className="illo-type" x="52" y="228" width="170" height="7" rx="3.5" fill="var(--illo-ink)" />
        <rect className="illo-blink" x="226" y="223" width="3" height="17" fill="var(--illo-coral)" />
        <rect x="52" y="256" width="258" height="72" rx="10" fill="var(--illo-blue-tint)" stroke="var(--illo-ink)" strokeWidth="2.5" />
        <path d="M64 316l34-30 24 20 20-14 34 24" fill="none" stroke="var(--illo-ink)" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="270" cy="280" r="9" fill="var(--illo-yellow)" stroke="var(--illo-ink)" strokeWidth="2.5" />
      </IlloWindow>
      {/* SEO score card */}
      <g className="illo-float">
        <rect x="300" y="86" width="168" height="230" rx="18" fill="var(--illo-ink)" />
        <text x="384" y="118" textAnchor="middle" fontSize="12" fontWeight="600" fill="#C4C8C2">
          SEO score
        </text>
        <circle cx="384" cy="170" r="34" fill="none" stroke="#2C332D" strokeWidth="9" />
        <circle
          className="illo-ring"
          cx="384"
          cy="170"
          r="34"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={RING}
          style={{ ["--ring" as string]: RING, ["--ring-to" as string]: RING * 0.08 }}
          transform="rotate(-90 384 170)"
        />
        <text x="384" y="178" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff">
          92
        </text>
        {["Title length", "Meta description", "Image alt text"].map((t, i) => (
          <g key={t}>
            <circle cx="322" cy={234 + i * 26} r="8" fill="var(--accent)" />
            <path d={`M318 ${234 + i * 26}l3 3 6-6`} fill="none" stroke="var(--illo-ink)" strokeWidth="2" strokeLinecap="round" />
            <text x="338" y={238 + i * 26} fontSize="11" fontWeight="500" fill="#E6EAE4">
              {t}
            </text>
          </g>
        ))}
      </g>
      {/* Pencil */}
      <g className="illo-float" style={{ animationDelay: "-1.4s" }}>
        <g transform="rotate(35 430 40)">
          <rect x="404" y="28" width="70" height="20" rx="4" fill="var(--illo-coral)" stroke="var(--illo-ink)" strokeWidth="2.5" />
          <path d="M474 28l18 10-18 10z" fill="var(--illo-cream)" stroke="var(--illo-ink)" strokeWidth="2.5" strokeLinejoin="round" />
        </g>
      </g>
      <path d="M20 30l7-7 7 7-7 7z" fill="var(--illo-ink)" />
      <path d="M470 352l7-7 7 7-7 7z" fill="none" stroke="var(--illo-ink)" strokeWidth="2.5" />
    </svg>
  );
}
