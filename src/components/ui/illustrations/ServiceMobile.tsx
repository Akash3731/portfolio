/** Mobile and payments — app on a phone with a payment card sliding out and a success badge. */
export default function ServiceMobile() {
  return (
    <svg viewBox="0 0 500 400" className="block size-full font-sans" role="img" aria-label="Illustration of a mobile app taking a payment">
      <rect width="500" height="400" fill="var(--illo-coral-tint)" />
      <g fill="var(--illo-ink)" opacity=".18">
        {Array.from({ length: 16 }, (_, i) => (
          <circle key={i} cx={30 + (i % 4) * 16} cy={300 + Math.floor(i / 4) * 16} r="2.5" />
        ))}
      </g>
      {/* Phone */}
      <g>
        <rect x="128" y="34" width="168" height="336" rx="30" fill="var(--illo-ink)" />
        <rect x="120" y="26" width="168" height="336" rx="30" fill="#fff" stroke="var(--illo-ink)" strokeWidth="3" />
        <rect x="176" y="38" width="56" height="12" rx="6" fill="var(--illo-ink)" />
        <rect x="138" y="66" width="80" height="10" rx="5" fill="var(--illo-ink)" />
        <circle cx="262" cy="71" r="10" fill="var(--illo-yellow)" stroke="var(--illo-ink)" strokeWidth="2" />
        <rect x="138" y="90" width="132" height="86" rx="14" fill="var(--illo-blue)" stroke="var(--illo-ink)" strokeWidth="2.5" />
        <rect x="150" y="104" width="70" height="9" rx="4.5" fill="#fff" />
        <rect x="150" y="120" width="46" height="7" rx="3.5" fill="#fff" opacity=".7" />
        <rect x="150" y="150" width="108" height="10" rx="5" fill="#fff" opacity=".35" />
        <rect className="illo-progress" x="150" y="150" width="108" height="10" rx="5" fill="var(--accent)" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="138" y={192 + i * 40} width="132" height="30" rx="10" fill="var(--illo-cream)" />
            <circle cx="154" cy={207 + i * 40} r="7" fill={i === 0 ? "var(--accent)" : "#fff"} stroke="var(--illo-ink)" strokeWidth="2" />
            <rect x="170" y={203 + i * 40} width={[78, 64, 84][i]} height="8" rx="4" fill="var(--illo-muted)" />
          </g>
        ))}
        <rect x="138" y="316" width="132" height="30" rx="15" fill="var(--illo-ink)" />
        <text x="204" y="335" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--accent)">
          Pay ₹499
        </text>
      </g>
      {/* Payment card */}
      <g className="illo-slide">
        <rect x="282" y="132" width="168" height="104" rx="16" fill="var(--illo-coral)" stroke="var(--illo-ink)" strokeWidth="3" />
        <rect x="300" y="152" width="30" height="22" rx="5" fill="var(--illo-yellow)" stroke="var(--illo-ink)" strokeWidth="2" />
        <rect x="300" y="196" width="96" height="9" rx="4.5" fill="#fff" />
        <rect x="300" y="212" width="54" height="7" rx="3.5" fill="#fff" opacity=".7" />
        <circle cx="418" cy="206" r="12" fill="#fff" opacity=".5" />
        <circle cx="404" cy="206" r="12" fill="#fff" opacity=".8" />
      </g>
      {/* Success badge */}
      <g className="illo-pulse" style={{ transformOrigin: "392px 296px" }}>
        <circle cx="392" cy="296" r="34" fill="var(--accent)" stroke="var(--illo-ink)" strokeWidth="3" />
        <path d="M376 296l11 11 22-24" fill="none" stroke="var(--illo-ink)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* Coin */}
      <g className="illo-float" style={{ animationDelay: "-1.2s" }}>
        <circle cx="384" cy="70" r="26" fill="var(--illo-yellow)" stroke="var(--illo-ink)" strokeWidth="3" />
        <text x="384" y="79" textAnchor="middle" fontSize="24" fontWeight="700" fill="var(--illo-ink)">
          ₹
        </text>
      </g>
      <path d="M60 80l8-8 8 8-8 8z" fill="var(--illo-ink)" />
      <path d="M458 360l7-7 7 7-7 7z" fill="none" stroke="var(--illo-ink)" strokeWidth="2.5" />
    </svg>
  );
}
