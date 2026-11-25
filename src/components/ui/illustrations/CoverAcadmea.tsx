import IlloWindow from "./IlloWindow";

const STEPS = ["Details", "Questions", "Order", "Preview", "Publish"];
const BANK = [
  { subject: "Physics", tone: "var(--illo-blue)", level: "Hard", levelTone: "var(--illo-coral)", w: 132 },
  { subject: "Chemistry", tone: "var(--illo-teal)", level: "Medium", levelTone: "var(--illo-yellow)", w: 112 },
  { subject: "Biology", tone: "var(--accent)", level: "Easy", levelTone: "#BFE6B0", w: 124 },
  { subject: "Physics", tone: "var(--illo-blue)", level: "Medium", levelTone: "var(--illo-yellow)", w: 98 },
];

const DOTS = (x: number, y: number) => (
  <g fill="var(--illo-muted-ink)">
    {[0, 1, 2].map((r) => [0, 1].map((c) => <circle key={`${r}${c}`} cx={x + c * 5} cy={y + r * 5} r="1.4" />))}
  </g>
);

/** Acadmea — 5-step mock test builder over a question bank, student test app, auto-graded results, plans and news. */
export default function CoverAcadmea() {
  return (
    <svg viewBox="0 0 800 500" className="block size-full font-sans" role="img" aria-label="Illustration of the Acadmea exam preparation platform">
      <rect width="800" height="500" fill="var(--illo-yellow-tint)" />

      <IlloWindow x={36} y={34} w={490} h={330} title="Acadmea · Mock test builder">
        {/* stepper */}
        <path d="M84 102h360" stroke="var(--illo-ink)" strokeWidth="2.5" />
        {STEPS.map((s, i) => {
          const done = i < 2;
          const active = i === 2;
          return (
            <g key={s}>
              <circle cx={84 + i * 90} cy="102" r="13" fill={done ? "var(--accent)" : active ? "var(--illo-ink)" : "#fff"} stroke="var(--illo-ink)" strokeWidth="2.5" />
              {done ? (
                <path d={`M${78 + i * 90} 102l4 4 8-8`} fill="none" stroke="var(--illo-ink)" strokeWidth="2.2" strokeLinecap="round" />
              ) : (
                <text x={84 + i * 90} y="106" textAnchor="middle" fontSize="11" fontWeight="800" fill={active ? "var(--accent)" : "var(--illo-ink)"}>
                  {i + 1}
                </text>
              )}
              <text x={84 + i * 90} y="132" textAnchor="middle" fontSize="9.5" fontWeight="700" fill={active ? "var(--illo-ink)" : "var(--illo-muted-ink)"}>
                {s}
              </text>
            </g>
          );
        })}

        <text x="56" y="162" fontSize="12" fontWeight="800" fill="var(--illo-ink)">
          Question bank
        </text>
        <text x="506" y="162" textAnchor="end" fontSize="9.5" fontWeight="600" fill="var(--illo-muted-ink)">
          Drag to reorder · 50 questions · 200 marks
        </text>
        {BANK.map((q, i) => {
          const lifted = i === 1;
          const y = 174 + i * 46;
          return (
            <g key={i} className={lifted ? "illo-float" : undefined}>
              {lifted && <rect x="62" y={y + 6} width="444" height="38" rx="10" fill="var(--illo-ink)" opacity=".18" />}
              <rect x={lifted ? 64 : 56} y={y} width="444" height="38" rx="10" fill={lifted ? "var(--illo-cream)" : "#fff"} stroke="var(--illo-ink)" strokeWidth="2" />
              {DOTS(lifted ? 76 : 68, y + 14)}
              <text x={lifted ? 94 : 86} y={y + 24} fontSize="10" fontWeight="800" fill="var(--illo-ink)">
                Q{i + 11}
              </text>
              <rect x={lifted ? 120 : 112} y={y + 15} width={q.w} height="8" rx="4" fill="var(--illo-ink)" />
              <rect x={lifted ? 282 : 274} y={y + 10} width="70" height="18" rx="9" fill={q.tone} stroke="var(--illo-ink)" strokeWidth="1.5" />
              <text x={lifted ? 317 : 309} y={y + 23} textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--illo-ink)">
                {q.subject}
              </text>
              <rect x={lifted ? 360 : 352} y={y + 10} width="58" height="18" rx="9" fill={q.levelTone} stroke="var(--illo-ink)" strokeWidth="1.5" />
              <text x={lifted ? 389 : 381} y={y + 23} textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--illo-ink)">
                {q.level}
              </text>
              <text x={lifted ? 494 : 486} y={y + 23} textAnchor="end" fontSize="9.5" fontWeight="700" fill="var(--illo-muted-ink)">
                +4 / −1
              </text>
            </g>
          );
        })}
      </IlloWindow>

      {/* Course plan */}
      <g className="illo-float" style={{ animationDelay: "-1.2s" }}>
        <rect x="552" y="24" width="214" height="104" rx="16" fill="var(--illo-ink)" />
        <text x="568" y="48" fontSize="9" fontWeight="700" fill="#9BA39B">
          COURSE PLAN
        </text>
        <text x="568" y="68" fontSize="14" fontWeight="800" fill="#fff">
          NEET · 6 months
        </text>
        {["40 tests", "12 e-books", "10 papers"].map((q, i) => (
          <g key={q}>
            <rect x={568 + i * 64} y="80" width="58" height="18" rx="9" fill="#2C332D" />
            <text x={597 + i * 64} y="93" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#C4C8C2">
              {q}
            </text>
          </g>
        ))}
        <text x="750" y="118" textAnchor="end" fontSize="10" fontWeight="800" fill="var(--accent)">
          Pay with Razorpay →
        </text>
      </g>

      {/* Student test app */}
      <g>
        <rect x="600" y="152" width="150" height="300" rx="26" fill="var(--illo-ink)" />
        <rect x="592" y="144" width="150" height="300" rx="26" fill="#fff" stroke="var(--illo-ink)" strokeWidth="3" />
        <rect x="642" y="154" width="48" height="9" rx="4.5" fill="var(--illo-ink)" />
        <text x="606" y="186" fontSize="10" fontWeight="700" fill="var(--illo-muted-ink)">
          Q 12 / 50
        </text>
        <rect x="672" y="174" width="56" height="18" rx="9" fill="var(--illo-coral)" stroke="var(--illo-ink)" strokeWidth="1.5" />
        <text x="700" y="187" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="var(--illo-ink)">
          ⏱ 18:42
        </text>
        <rect x="606" y="202" width="118" height="8" rx="4" fill="var(--illo-ink)" />
        <rect x="606" y="216" width="92" height="8" rx="4" fill="var(--illo-ink)" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x="606" y={236 + i * 34} width="122" height="26" rx="9" fill={i === 1 ? "var(--accent)" : "#fff"} stroke="var(--illo-ink)" strokeWidth="1.8" />
            <circle cx="620" cy={249 + i * 34} r="6" fill="#fff" stroke="var(--illo-ink)" strokeWidth="1.8" />
            {i === 1 && <circle cx="620" cy={249 + i * 34} r="2.6" fill="var(--illo-ink)" />}
            <rect x="632" y={246 + i * 34} width={[70, 56, 80, 62][i]} height="6" rx="3" fill="var(--illo-muted-ink)" />
          </g>
        ))}
        <rect x="606" y="380" width="56" height="30" rx="15" fill="#fff" stroke="var(--illo-ink)" strokeWidth="1.8" />
        <text x="634" y="399" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--illo-ink)">
          Pause
        </text>
        <rect x="668" y="380" width="60" height="30" rx="15" fill="var(--illo-ink)" />
        <text x="698" y="399" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--accent)">
          Next
        </text>
      </g>

      {/* Auto-graded result */}
      <g className="illo-float" style={{ animationDelay: "-0.6s" }}>
        <rect x="300" y="360" width="248" height="124" rx="16" fill="#fff" stroke="var(--illo-ink)" strokeWidth="3" />
        <text x="316" y="384" fontSize="11.5" fontWeight="800" fill="var(--illo-ink)">
          Result · graded instantly
        </text>
        <circle cx="352" cy="436" r="28" fill="none" stroke="var(--illo-cream)" strokeWidth="8" />
        <circle cx="352" cy="436" r="28" fill="none" stroke="var(--accent)" strokeWidth="8" strokeLinecap="round" strokeDasharray="176" strokeDashoffset="25" transform="rotate(-90 352 436)" />
        <text x="352" y="441" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--illo-ink)">
          86%
        </text>
        {[
          ["Physics", 0.78, "var(--illo-blue)"],
          ["Chemistry", 0.9, "var(--illo-teal)"],
          ["Biology", 0.84, "var(--accent)"],
        ].map(([s, v, tone], i) => (
          <g key={s as string}>
            <text x="394" y={414 + i * 22} fontSize="9" fontWeight="600" fill="var(--illo-muted-ink)">
              {s as string}
            </text>
            <rect x="452" y={406 + i * 22} width="80" height="8" rx="4" fill="var(--illo-cream)" />
            <rect className="illo-progress" x="452" y={406 + i * 22} width={80 * (v as number)} height="8" rx="4" fill={tone as string} />
          </g>
        ))}
      </g>

      {/* Current affairs */}
      <g>
        <rect x="40" y="384" width="238" height="96" rx="16" fill="var(--illo-ink)" />
        <text x="56" y="408" fontSize="11" fontWeight="700" fill="#fff">
          Current affairs
        </text>
        <rect x="56" y="420" width="150" height="8" rx="4" fill="#C4C8C2" />
        <rect x="56" y="434" width="112" height="7" rx="3.5" fill="#5A625B" />
        <circle cx="64" cy="461" r="7" fill="none" stroke="var(--accent)" strokeWidth="2" />
        <path d="M64 457v4l3 2" stroke="var(--accent)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <text x="78" y="465" fontSize="9.5" fontWeight="700" fill="var(--accent)">
          Scheduled · 9:00 AM
        </text>
        <rect x="214" y="414" width="48" height="40" rx="8" fill="var(--illo-blue)" />
        <circle cx="249" cy="425" r="5" fill="var(--illo-yellow)" />
        <path d="M214 454l14-18 10 12 7-8 17 14z" fill="var(--illo-teal)" />
      </g>
    </svg>
  );
}
