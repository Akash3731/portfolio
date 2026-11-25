import IlloWindow from "./IlloWindow";

const QUEUE = [
  { token: "T-12", tone: "var(--illo-coral)", label: "Emergency", room: "R1" },
  { token: "T-13", tone: "var(--illo-yellow)", label: "High", room: "R2" },
  { token: "T-14", tone: "var(--illo-teal)", label: "Normal", room: "R3" },
  { token: "T-15", tone: "var(--illo-teal)", label: "Normal", room: "—" },
];

const TOOTH = (x: number, y: number, fill = "#fff") => (
  <rect key={`${x}-${y}`} x={x} y={y} width="19" height="24" rx="7" fill={fill} stroke="var(--illo-ink)" strokeWidth="2" />
);

/** BestoClinic — smart queue, SOAP consultation with tooth chart + AI scan, patient app, telemedicine, GST billing, DB per clinic. */
export default function CoverBesto() {
  return (
    <svg viewBox="0 0 800 500" className="block size-full font-sans" role="img" aria-label="Illustration of the BestoClinic dental clinic platform">
      <rect width="800" height="500" fill="var(--illo-blue-tint)" />

      <IlloWindow x={36} y={34} w={490} h={330} title="BestoClinic · Front desk">
        {/* sidebar */}
        <rect x="37.5" y="71.5" width="46" height="291" fill="var(--illo-ink)" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x="50" y={88 + i * 30} width="20" height="14" rx="4" fill={i === 0 ? "var(--accent)" : "#3A403B"} />
        ))}

        {/* smart queue */}
        <text x="98" y="98" fontSize="12" fontWeight="700" fill="var(--illo-ink)">
          Smart queue
        </text>
        {QUEUE.map((q, i) => (
          <g key={q.token} className={i === 0 ? "illo-pulse" : undefined} style={i === 0 ? { transformOrigin: "176px 128px" } : undefined}>
            <rect x="96" y={108 + i * 58} width="160" height="48" rx="10" fill={i === 0 ? "#FFF4F1" : "#fff"} stroke="var(--illo-ink)" strokeWidth="2" />
            <rect x="104" y={118 + i * 58} width="40" height="28" rx="8" fill={q.tone} stroke="var(--illo-ink)" strokeWidth="2" />
            <text x="124" y={136 + i * 58} textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--illo-ink)">
              {q.token}
            </text>
            <rect x="152" y={122 + i * 58} width="58" height="7" rx="3.5" fill="var(--illo-ink)" />
            <text x="152" y={142 + i * 58} fontSize="9" fontWeight="600" fill="var(--illo-muted-ink)">
              {q.label}
            </text>
            <text x="244" y={140 + i * 58} textAnchor="end" fontSize="10" fontWeight="700" fill="var(--illo-ink)">
              {q.room}
            </text>
          </g>
        ))}

        {/* consultation */}
        <rect x="270" y="84" width="242" height="266" rx="12" fill="var(--illo-cream)" />
        <text x="284" y="104" fontSize="12" fontWeight="700" fill="var(--illo-ink)">
          Consultation
        </text>
        {["S", "O", "A", "P"].map((t, i) => (
          <g key={t}>
            <rect x={398 + i * 27} y="91" width="22" height="18" rx="6" fill={i === 1 ? "var(--illo-ink)" : "#fff"} stroke="var(--illo-ink)" strokeWidth="1.5" />
            <text x={409 + i * 27} y="104" textAnchor="middle" fontSize="10" fontWeight="700" fill={i === 1 ? "var(--accent)" : "var(--illo-ink)"}>
              {t}
            </text>
          </g>
        ))}
        <text x="284" y="128" fontSize="9" fontWeight="600" fill="var(--illo-muted-ink)">
          Tooth chart (FDI)
        </text>
        {Array.from({ length: 8 }, (_, i) => TOOTH(284 + i * 26, 136, i === 2 ? "var(--illo-coral)" : i === 6 ? "var(--illo-blue)" : "#fff"))}
        {Array.from({ length: 8 }, (_, i) => TOOTH(284 + i * 26, 168, "#fff"))}
        {/* AI scan highlight */}
        <rect className="illo-blink" x="383" y="162" width="52" height="36" rx="9" fill="none" stroke="var(--accent)" strokeWidth="3" strokeDasharray="6 4" />
        <g>
          <rect x="284" y="206" width="216" height="30" rx="10" fill="var(--illo-ink)" />
          <circle cx="300" cy="221" r="6" fill="var(--accent)" />
          <text x="312" y="225" fontSize="10" fontWeight="600" fill="#fff">
            AI scan: plaque · low severity
          </text>
        </g>
        {[
          ["BP", "120/80"],
          ["Pulse", "72"],
          ["SpO₂", "98%"],
        ].map(([k, v], i) => (
          <g key={k}>
            <rect x={284 + i * 74} y="246" width="66" height="40" rx="9" fill="#fff" stroke="var(--illo-ink)" strokeWidth="1.5" />
            <text x={293 + i * 74} y="262" fontSize="8.5" fontWeight="600" fill="var(--illo-muted-ink)">
              {k}
            </text>
            <text x={293 + i * 74} y="278" fontSize="11" fontWeight="800" fill="var(--illo-ink)">
              {v}
            </text>
          </g>
        ))}
        <rect x="284" y="300" width="216" height="34" rx="17" fill="var(--accent)" stroke="var(--illo-ink)" strokeWidth="2" />
        <text x="392" y="321" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--illo-ink)">
          Sign &amp; complete visit
        </text>
      </IlloWindow>

      {/* Telemedicine */}
      <g className="illo-float">
        <rect x="560" y="24" width="206" height="96" rx="16" fill="var(--illo-ink)" />
        <rect x="572" y="36" width="78" height="72" rx="10" fill="var(--illo-teal)" />
        <circle cx="611" cy="62" r="12" fill="var(--illo-cream)" stroke="var(--illo-ink)" strokeWidth="2" />
        <path d="M591 108c3-14 11-20 20-20s17 6 20 20z" fill="var(--illo-cream)" stroke="var(--illo-ink)" strokeWidth="2" />
        <circle className="illo-blink" cx="582" cy="46" r="4" fill="var(--illo-coral)" />
        <text x="662" y="58" fontSize="11" fontWeight="700" fill="#fff">
          Video consult
        </text>
        <rect x="662" y="68" width="92" height="20" rx="10" fill="#2C332D" />
        <path d="M672 75v-2a4 4 0 018 0v2" fill="none" stroke="var(--accent)" strokeWidth="1.6" />
        <rect x="670" y="75" width="12" height="8" rx="2" fill="var(--accent)" />
        <text x="688" y="82" fontSize="9" fontWeight="600" fill="var(--accent)">
          Encrypted
        </text>
        <text x="662" y="104" fontSize="9" fill="#9BA39B">
          14:32 · +15 min
        </text>
      </g>

      {/* Patient app */}
      <g>
        <rect x="600" y="142" width="150" height="300" rx="26" fill="var(--illo-ink)" />
        <rect x="592" y="134" width="150" height="300" rx="26" fill="#fff" stroke="var(--illo-ink)" strokeWidth="3" />
        <rect x="642" y="144" width="48" height="9" rx="4.5" fill="var(--illo-ink)" />
        <text x="608" y="178" fontSize="12" fontWeight="800" fill="var(--illo-ink)">
          Book a visit
        </text>
        {["Mon 12", "Tue 13", "Wed 14"].map((d, i) => (
          <g key={d}>
            <rect x={606 + i * 42} y="188" width="38" height="34" rx="8" fill={i === 1 ? "var(--illo-ink)" : "var(--illo-cream)"} />
            <text x={625 + i * 42} y="201" textAnchor="middle" fontSize="8" fontWeight="600" fill={i === 1 ? "#C4C8C2" : "var(--illo-muted-ink)"}>
              {d.split(" ")[0]}
            </text>
            <text x={625 + i * 42} y="215" textAnchor="middle" fontSize="11" fontWeight="800" fill={i === 1 ? "var(--accent)" : "var(--illo-ink)"}>
              {d.split(" ")[1]}
            </text>
          </g>
        ))}
        {["10:00", "10:30", "11:00", "11:30", "12:00", "12:30"].map((t, i) => (
          <g key={t}>
            <rect x={606 + (i % 3) * 42} y={234 + Math.floor(i / 3) * 28} width="38" height="22" rx="11" fill={i === 1 ? "var(--accent)" : "#fff"} stroke="var(--illo-ink)" strokeWidth="1.5" />
            <text x={625 + (i % 3) * 42} y={249 + Math.floor(i / 3) * 28} textAnchor="middle" fontSize="8.5" fontWeight="700" fill="var(--illo-ink)">
              {t}
            </text>
          </g>
        ))}
        <rect x="606" y="300" width="122" height="54" rx="12" fill="var(--illo-cream)" />
        <circle cx="626" cy="327" r="12" fill="var(--illo-yellow)" stroke="var(--illo-ink)" strokeWidth="2" />
        <rect x="644" y="318" width="70" height="7" rx="3.5" fill="var(--illo-ink)" />
        <rect x="644" y="331" width="46" height="6" rx="3" fill="var(--illo-muted)" />
        <rect x="606" y="372" width="122" height="34" rx="17" fill="var(--illo-ink)" />
        <text x="667" y="393" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--accent)">
          Confirm booking
        </text>
      </g>

      {/* GST invoice */}
      <g className="illo-float" style={{ animationDelay: "-1.6s" }}>
        <rect x="344" y="356" width="200" height="124" rx="14" fill="#fff" stroke="var(--illo-ink)" strokeWidth="3" />
        <text x="360" y="380" fontSize="12" fontWeight="800" fill="var(--illo-ink)">
          GST invoice
        </text>
        {[
          ["Root canal", "₹2,000"],
          ["CGST 9%", "₹180"],
          ["SGST 9%", "₹180"],
        ].map(([k, v], i) => (
          <g key={k}>
            <text x="360" y={400 + i * 16} fontSize="9.5" fill="var(--illo-muted-ink)">
              {k}
            </text>
            <text x="528" y={400 + i * 16} textAnchor="end" fontSize="9.5" fontWeight="600" fill="var(--illo-ink)">
              {v}
            </text>
          </g>
        ))}
        <path d="M360 446h168" stroke="var(--illo-ink)" strokeWidth="1.5" strokeDasharray="4 4" />
        <text x="360" y="466" fontSize="12" fontWeight="800" fill="var(--illo-ink)">
          Total ₹2,360
        </text>
        <g transform="rotate(-12 500 462)">
          <rect x="470" y="450" width="58" height="24" rx="6" fill="var(--accent)" stroke="var(--illo-ink)" strokeWidth="2" />
          <text x="499" y="466" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--illo-ink)">
            PAID
          </text>
        </g>
      </g>

      {/* Database per clinic */}
      <g>
        {["Clinic A", "Clinic B", "Clinic C"].map((c, i) => (
          <g key={c}>
            <path
              d={`M${62 + i * 86} 392v56c0 7 14 12 30 12s30-5 30-12v-56`}
              fill={["var(--illo-teal)", "var(--illo-yellow)", "var(--illo-coral)"][i]}
              stroke="var(--illo-ink)"
              strokeWidth="2.5"
            />
            <ellipse cx={92 + i * 86} cy="392" rx="30" ry="11" fill="#fff" stroke="var(--illo-ink)" strokeWidth="2.5" />
            <path d={`M${62 + i * 86} 418c0 7 14 12 30 12s30-5 30-12`} fill="none" stroke="var(--illo-ink)" strokeWidth="2" />
            <text x={92 + i * 86} y="482" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--illo-ink)">
              {c}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
