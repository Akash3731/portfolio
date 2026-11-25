import IlloWindow from "./IlloWindow";

/** Web development — site builder window with a floating 3D product cube and a moving cursor. */
export default function ServiceWeb() {
  return (
    <svg viewBox="0 0 500 400" className="block size-full font-sans" role="img" aria-label="Illustration of a website being built">
      <rect width="500" height="400" fill="var(--illo-blue-tint)" />
      <g fill="var(--illo-ink)" opacity=".18">
        {Array.from({ length: 20 }, (_, i) => (
          <circle key={i} cx={390 + (i % 5) * 16} cy={300 + Math.floor(i / 5) * 16} r="2.5" />
        ))}
      </g>
      <IlloWindow x={48} y={58} w={380} h={262} title="yourproduct.com">
        <rect x="70" y="118" width="150" height="16" rx="4" fill="var(--illo-ink)" />
        <rect x="70" y="142" width="118" height="16" rx="4" fill="var(--illo-ink)" />
        <rect x="70" y="174" width="140" height="6" rx="3" fill="var(--illo-muted)" />
        <rect x="70" y="188" width="122" height="6" rx="3" fill="var(--illo-muted)" />
        <rect x="70" y="202" width="96" height="6" rx="3" fill="var(--illo-muted)" />
        <rect x="70" y="226" width="78" height="26" rx="13" fill="var(--accent)" stroke="var(--illo-ink)" strokeWidth="2.5" />
        <rect x="156" y="226" width="64" height="26" rx="13" fill="#fff" stroke="var(--illo-ink)" strokeWidth="2.5" />
        <rect x="70" y="270" width="340" height="32" rx="8" fill="var(--illo-cream)" />
        <rect x="84" y="282" width="60" height="8" rx="4" fill="var(--illo-muted)" />
        <rect x="170" y="282" width="60" height="8" rx="4" fill="var(--illo-muted)" />
        <rect x="256" y="282" width="60" height="8" rx="4" fill="var(--illo-muted)" />
        {/* 3D product cube */}
        <g className="illo-float">
          <ellipse cx="322" cy="250" rx="54" ry="9" fill="var(--illo-ink)" opacity=".12" />
          <path d="M322 118l56 30v64l-56 30-56-30v-64z" fill="#fff" stroke="var(--illo-ink)" strokeWidth="3" strokeLinejoin="round" />
          <path d="M266 148l56 30 56-30" fill="none" stroke="var(--illo-ink)" strokeWidth="3" strokeLinejoin="round" />
          <path d="M322 118l56 30-56 30-56-30z" fill="var(--accent)" stroke="var(--illo-ink)" strokeWidth="3" strokeLinejoin="round" />
          <path d="M322 178v64l56-30v-64z" fill="var(--illo-blue)" stroke="var(--illo-ink)" strokeWidth="3" strokeLinejoin="round" />
        </g>
        <g className="illo-spin" style={{ transformOrigin: "322px 180px" }}>
          <circle cx="398" cy="180" r="6" fill="var(--illo-coral)" stroke="var(--illo-ink)" strokeWidth="2" />
        </g>
      </IlloWindow>
      {/* Code chip */}
      <g className="illo-float" style={{ animationDelay: "-1.6s" }}>
        <rect x="372" y="26" width="92" height="48" rx="14" fill="var(--illo-ink)" />
        <text x="418" y="58" textAnchor="middle" fontSize="22" fontWeight="700" fill="var(--accent)">
          {"</>"}
        </text>
      </g>
      <path d="M34 300l8-8 8 8-8 8z" fill="var(--illo-ink)" />
      <path d="M452 120l7-7 7 7-7 7z" fill="none" stroke="var(--illo-ink)" strokeWidth="2.5" />
      {/* Cursor */}
      <g className="illo-cursor">
        <path d="M120 236l0 34 9-9 7 15 7-3-7-15h13z" fill="var(--illo-ink)" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
