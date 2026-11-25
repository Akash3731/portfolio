import IlloWindow from "./IlloWindow";

const BARS = [46, 72, 58, 96, 80, 112];

/** SaaS and backend — admin dashboard with growing charts, a job queue and a blinking server rack. */
export default function ServiceSaas() {
  return (
    <svg viewBox="0 0 500 400" className="block size-full font-sans" role="img" aria-label="Illustration of a SaaS dashboard with background jobs">
      <rect width="500" height="400" fill="var(--illo-teal-tint)" />
      <IlloWindow x={110} y={40} w={350} h={250} title="admin / dashboard">
        <rect x="111.5" y="77.5" width="54" height="211" fill="var(--illo-ink)" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="126" y={96 + i * 30} width="24" height="16" rx="5" fill={i === 1 ? "var(--accent)" : "#3A403B"} />
        ))}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={180 + i * 90} y="92" width="78" height="44" rx="10" fill="var(--illo-cream)" />
            <rect x={190 + i * 90} y="103" width="34" height="6" rx="3" fill="var(--illo-muted)" />
            <rect x={190 + i * 90} y="115" width="48" height="12" rx="4" fill="var(--illo-ink)" />
          </g>
        ))}
        <rect x="180" y="150" width="258" height="124" rx="12" fill="#fff" stroke="var(--illo-ink)" strokeWidth="2.5" />
        {BARS.map((h, i) => (
          <rect
            key={i}
            className="illo-grow"
            style={{ animationDelay: `${i * 0.18}s` }}
            x={198 + i * 38}
            y={262 - h}
            width="22"
            height={h}
            rx="5"
            fill={i === 3 ? "var(--accent)" : "var(--illo-teal)"}
            stroke="var(--illo-ink)"
            strokeWidth="2"
          />
        ))}
      </IlloWindow>
      {/* Server rack */}
      <g>
        <rect x="34" y="196" width="104" height="164" rx="14" fill="var(--illo-ink)" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="46" y={210 + i * 48} width="80" height="36" rx="8" fill="#2C332D" />
            <circle className="illo-blink" style={{ animationDelay: `${i * 0.45}s` }} cx="62" cy={228 + i * 48} r="5" fill="var(--accent)" />
            <rect x="76" y={224 + i * 48} width="38" height="7" rx="3.5" fill="#4A524B" />
          </g>
        ))}
      </g>
      {/* Job queue */}
      {["Reminder sent", "Invoice ready", "SLA escalated"].map((label, i) => (
        <g key={label} className="illo-float" style={{ animationDelay: `${-i * 0.9}s` }}>
          <rect x={246 + i * 12} y={298 + i * 34} width="176" height="28" rx="14" fill="#fff" stroke="var(--illo-ink)" strokeWidth="2.5" />
          <circle cx={264 + i * 12} cy={312 + i * 34} r="6.5" fill={["var(--accent)", "var(--illo-yellow)", "var(--illo-coral)"][i]} stroke="var(--illo-ink)" strokeWidth="2" />
          <text x={279 + i * 12} y={316 + i * 34} fontSize="12" fontWeight="600" fill="var(--illo-ink)">
            {label}
          </text>
        </g>
      ))}
      {/* Access shield */}
      <g className="illo-float" style={{ animationDelay: "-2.2s" }}>
        <path d="M70 52l36 14v26c0 24-16 40-36 48-20-8-36-24-36-48V66z" fill="var(--illo-yellow)" stroke="var(--illo-ink)" strokeWidth="3" strokeLinejoin="round" />
        <path d="M56 96l10 10 20-22" fill="none" stroke="var(--illo-ink)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <path d="M138 270c40 0 60 30 106 42" fill="none" stroke="var(--illo-ink)" strokeWidth="2" strokeDasharray="5 7" />
    </svg>
  );
}
