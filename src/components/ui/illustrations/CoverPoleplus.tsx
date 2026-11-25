import IlloWindow from "./IlloWindow";

const TICKETS = [
  { id: "#2041", title: "Laptop not booting", pr: "Critical", tone: "var(--illo-coral)", sla: 0.92, slaTone: "var(--illo-coral)", time: "12m", vip: true },
  { id: "#2038", title: "Printer access", pr: "High", tone: "var(--illo-yellow)", sla: 0.64, slaTone: "var(--illo-yellow)", time: "1h 20m" },
  { id: "#2033", title: "New monitor request", pr: "Medium", tone: "var(--illo-blue)", sla: 0.3, slaTone: "var(--accent)", time: "6h 05m" },
  { id: "#2029", title: "VPN keeps dropping", pr: "Low", tone: "var(--illo-teal)", sla: 0.18, slaTone: "var(--accent)", time: "2d 3h" },
];

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

/** PolePlus — service desk with business-hours SLAs, VIP priority, approval chain, escalation tiers, assets and audit. */
export default function CoverPoleplus() {
  return (
    <svg viewBox="0 0 800 500" className="block size-full font-sans" role="img" aria-label="Illustration of the PolePlus asset and helpdesk platform">
      <rect width="800" height="500" fill="var(--illo-teal-tint)" />

      <IlloWindow x={36} y={34} w={490} h={330} title="PolePlus · Service desk">
        {["All tickets", "My department", "VIP"].map((c, i) => (
          <g key={c}>
            <rect x={56 + [0, 86, 196][i]} y="88" width={[78, 102, 52][i]} height="24" rx="12" fill={i === 1 ? "var(--illo-ink)" : "#fff"} stroke="var(--illo-ink)" strokeWidth="1.5" />
            <text x={56 + [0, 86, 196][i] + [39, 51, 26][i]} y="104" textAnchor="middle" fontSize="10" fontWeight="700" fill={i === 1 ? "var(--accent)" : "var(--illo-ink)"}>
              {c}
            </text>
          </g>
        ))}
        <text x="64" y="134" fontSize="9" fontWeight="700" fill="var(--illo-muted-ink)">
          TICKET
        </text>
        <text x="292" y="134" fontSize="9" fontWeight="700" fill="var(--illo-muted-ink)">
          PRIORITY
        </text>
        <text x="376" y="134" fontSize="9" fontWeight="700" fill="var(--illo-muted-ink)">
          SLA (BUSINESS HOURS)
        </text>
        {TICKETS.map((t, i) => (
          <g key={t.id}>
            <rect x="52" y={144 + i * 52} width="458" height="44" rx="10" fill={t.vip ? "#FFF6E5" : "#fff"} stroke="var(--illo-ink)" strokeWidth="2" />
            <text x="64" y={170 + i * 52} fontSize="10" fontWeight="700" fill="var(--illo-muted-ink)">
              {t.id}
            </text>
            <text x="106" y={170 + i * 52} fontSize="11.5" fontWeight="700" fill="var(--illo-ink)">
              {t.title}
            </text>
            {t.vip && (
              <g>
                <rect x="232" y={157 + i * 52} width="40" height="18" rx="9" fill="var(--illo-ink)" />
                <text x="252" y={170 + i * 52} textAnchor="middle" fontSize="9" fontWeight="800" fill="var(--illo-yellow)">
                  VIP
                </text>
              </g>
            )}
            <rect x="288" y={156 + i * 52} width="70" height="20" rx="10" fill={t.tone} stroke="var(--illo-ink)" strokeWidth="1.5" />
            <text x="323" y={170 + i * 52} textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--illo-ink)">
              {t.pr}
            </text>
            <rect x="376" y={162 + i * 52} width="80" height="9" rx="4.5" fill="var(--illo-cream)" />
            <rect
              className={i === 0 ? "illo-blink" : undefined}
              x="376"
              y={162 + i * 52}
              width={80 * t.sla}
              height="9"
              rx="4.5"
              fill={t.slaTone}
              stroke="var(--illo-ink)"
              strokeWidth="1"
            />
            <text x="498" y={170 + i * 52} textAnchor="end" fontSize="10" fontWeight="700" fill="var(--illo-ink)">
              {t.time}
            </text>
          </g>
        ))}
      </IlloWindow>

      {/* Requisition approval chain */}
      <g className="illo-float">
        <rect x="552" y="24" width="214" height="112" rx="16" fill="#fff" stroke="var(--illo-ink)" strokeWidth="3" />
        <text x="568" y="48" fontSize="11.5" fontWeight="800" fill="var(--illo-ink)">
          Requisition approval
        </text>
        <path d="M584 82h138" stroke="var(--illo-ink)" strokeWidth="2.5" />
        {["Raised", "Dept head", "IT head", "Fulfilled"].map((s, i) => {
          const done = i < 2;
          const current = i === 2;
          return (
            <g key={s}>
              <circle
                className={current ? "illo-pulse" : undefined}
                style={current ? { transformOrigin: `${584 + i * 46}px 82px` } : undefined}
                cx={584 + i * 46}
                cy="82"
                r="11"
                fill={done ? "var(--accent)" : current ? "var(--illo-yellow)" : "#fff"}
                stroke="var(--illo-ink)"
                strokeWidth="2.5"
              />
              {done && <path d={`M${579 + i * 46} 82l3.5 3.5 6.5-7`} fill="none" stroke="var(--illo-ink)" strokeWidth="2" strokeLinecap="round" />}
              <text x={584 + i * 46} y="114" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="var(--illo-ink)">
                {s}
              </text>
            </g>
          );
        })}
      </g>

      {/* Business-hours SLA clock */}
      <g>
        <rect x="552" y="152" width="214" height="150" rx="16" fill="var(--illo-ink)" />
        <text x="568" y="176" fontSize="11" fontWeight="700" fill="#fff">
          SLA clock
        </text>
        <text x="750" y="176" textAnchor="end" fontSize="9" fontWeight="600" fill="#9BA39B">
          working hours only
        </text>
        {DAYS.map((d, i) => {
          const weekend = i >= 5;
          const holiday = i === 3;
          return (
            <g key={i}>
              <rect x={570 + i * 27} y="190" width="20" height="62" rx="5" fill="#2C332D" />
              {!weekend && !holiday && <rect x={570 + i * 27} y={204} width="20" height="34" rx="5" fill="var(--accent)" />}
              {i === 2 && <rect x={570 + i * 27} y="220" width="20" height="10" fill="var(--illo-yellow)" />}
              {holiday && <rect x={570 + i * 27} y="190" width="20" height="62" rx="5" fill="var(--illo-coral)" opacity=".85" />}
              <text x={580 + i * 27} y="266" textAnchor="middle" fontSize="9" fontWeight="700" fill="#C4C8C2">
                {d}
              </text>
            </g>
          );
        })}
        <circle cx="574" cy="285" r="4" fill="var(--illo-yellow)" />
        <text x="582" y="288" fontSize="8.5" fill="#C4C8C2">
          On hold
        </text>
        <circle cx="630" cy="285" r="4" fill="var(--illo-coral)" />
        <text x="638" y="288" fontSize="8.5" fill="#C4C8C2">
          Holiday
        </text>
        <text x="750" y="289" textAnchor="end" fontSize="11" fontWeight="800" fill="var(--accent)">
          1h 20m left
        </text>
      </g>

      {/* Asset tag */}
      <g className="illo-float" style={{ animationDelay: "-2s" }}>
        <rect x="574" y="320" width="192" height="116" rx="16" fill="#fff" stroke="var(--illo-ink)" strokeWidth="3" />
        <rect x="590" y="338" width="50" height="34" rx="5" fill="var(--illo-blue)" stroke="var(--illo-ink)" strokeWidth="2.5" />
        <path d="M582 378h66" stroke="var(--illo-ink)" strokeWidth="3" strokeLinecap="round" />
        <text x="656" y="350" fontSize="11" fontWeight="800" fill="var(--illo-ink)">
          AST-0142
        </text>
        <rect x="656" y="358" width="60" height="18" rx="9" fill="var(--accent)" stroke="var(--illo-ink)" strokeWidth="1.5" />
        <text x="686" y="371" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--illo-ink)">
          Assigned
        </text>
        <text x="590" y="400" fontSize="9" fill="var(--illo-muted-ink)">
          Warranty until Mar 2027
        </text>
        <g fill="var(--illo-ink)">
          {[0, 3, 5, 9, 11, 14, 18, 20, 23, 27, 29, 33, 36, 38, 42, 45, 48, 52].map((x) => (
            <rect key={x} x={590 + x * 2.9} y="408" width={x % 3 === 0 ? 3 : 1.6} height="16" />
          ))}
        </g>
      </g>

      {/* Escalation tiers */}
      <g>
        <rect x="290" y="372" width="252" height="112" rx="16" fill="#fff" stroke="var(--illo-ink)" strokeWidth="3" />
        <text x="306" y="396" fontSize="11.5" fontWeight="800" fill="var(--illo-ink)">
          Escalation
        </text>
        {[
          ["Warning", "var(--illo-yellow)"],
          ["Imminent breach", "#F6A07F"],
          ["Breached", "var(--illo-coral)"],
        ].map(([label, tone], i) => (
          <g key={label}>
            <rect x="306" y={406 + i * 24} width="98" height="18" rx="9" fill={tone} stroke="var(--illo-ink)" strokeWidth="1.5" />
            <text x="355" y={419 + i * 24} textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--illo-ink)">
              L{i + 1} · {label}
            </text>
            {/* mail */}
            <rect x="420" y={408 + i * 24} width="18" height="13" rx="2.5" fill="#fff" stroke="var(--illo-ink)" strokeWidth="1.5" />
            <path d={`M420 ${409 + i * 24}l9 6 9-6`} fill="none" stroke="var(--illo-ink)" strokeWidth="1.5" />
            {/* sms */}
            <path d={`M448 ${408 + i * 24}h18a3 3 0 013 3v6a3 3 0 01-3 3h-12l-5 4v-4a3 3 0 01-3-3v-6a3 3 0 013-3z`} fill={i > 0 ? "var(--illo-blue)" : "#fff"} stroke="var(--illo-ink)" strokeWidth="1.5" />
            {/* push bell */}
            <path d={`M482 ${422 + i * 24}c0-9 3-13 7-13s7 4 7 13z`} fill={i > 1 ? "var(--illo-yellow)" : "#fff"} stroke="var(--illo-ink)" strokeWidth="1.5" />
            <path d={`M480 ${422 + i * 24}h18`} stroke="var(--illo-ink)" strokeWidth="1.5" />
          </g>
        ))}
      </g>

      {/* Audit log */}
      <g>
        <rect x="40" y="384" width="232" height="96" rx="16" fill="var(--illo-ink)" />
        <text x="56" y="408" fontSize="11" fontWeight="700" fill="#fff">
          Audit log
        </text>
        {[
          ["status", "New", "Assigned"],
          ["priority", "High", "Critical"],
        ].map(([field, from, to], i) => (
          <g key={field}>
            <text x="56" y={432 + i * 22} fontSize="9.5" fill="#9BA39B">
              {field}:
            </text>
            <text x="108" y={432 + i * 22} fontSize="9.5" fill="#C4C8C2" textDecoration="line-through">
              {from}
            </text>
            <text x="156" y={432 + i * 22} fontSize="9.5" fill="#C4C8C2">
              →
            </text>
            <text x="172" y={432 + i * 22} fontSize="9.5" fontWeight="700" fill="var(--accent)">
              {to}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
