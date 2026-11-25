import IlloWindow from "./IlloWindow";

const COLUMNS = [
  { title: "Applied", tone: "var(--illo-blue)", cards: [92, 81, 76] },
  { title: "Shortlisted", tone: "var(--illo-yellow)", cards: [94, 88] },
  { title: "Interview", tone: "var(--illo-coral)", cards: [96, 90] },
  { title: "Hired", tone: "var(--accent)", cards: [97] },
];
const AVATAR = ["var(--illo-coral)", "var(--illo-teal)", "var(--illo-yellow)", "var(--illo-blue)"];

/** CallForNaukri — employer pipeline with AI match scores, Excel bulk jobs, credits, team roles, and the candidate app. */
export default function CoverNaukri() {
  return (
    <svg viewBox="0 0 800 500" className="block size-full font-sans" role="img" aria-label="Illustration of the CallForNaukri hiring platform">
      <rect width="800" height="500" fill="var(--illo-indigo-tint)" />

      <IlloWindow x={36} y={34} w={490} h={330} title="CallForNaukri · Hiring pipeline">
        <text x="56" y="102" fontSize="14" fontWeight="800" fill="var(--illo-ink)">
          SAP ABAP Developer
        </text>
        {["Full-time", "Hybrid", "Pune"].map((c, i) => (
          <g key={c}>
            <rect x={326 + i * 62} y="88" width="56" height="20" rx="10" fill="var(--illo-indigo-tint)" stroke="var(--illo-indigo)" strokeWidth="1.2" />
            <text x={354 + i * 62} y="102" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--illo-indigo)">
              {c}
            </text>
          </g>
        ))}
        {COLUMNS.map((col, c) => (
          <g key={col.title}>
            <rect x={52 + c * 116} y="118" width="108" height="234" rx="12" fill="var(--illo-cream)" />
            <circle cx={66 + c * 116} cy="136" r="5" fill={col.tone} stroke="var(--illo-ink)" strokeWidth="1.5" />
            <text x={76 + c * 116} y="140" fontSize="10" fontWeight="800" fill="var(--illo-ink)">
              {col.title}
            </text>
            <text x={150 + c * 116} y="140" textAnchor="end" fontSize="9.5" fontWeight="700" fill="var(--illo-muted-ink)">
              {col.cards.length}
            </text>
            {col.cards.map((score, k) => {
              const moving = c === 1 && k === 0;
              const hired = c === 3;
              return (
                <g key={k} className={moving ? "illo-float" : undefined}>
                  <rect
                    x={58 + c * 116}
                    y={156 + k * 62}
                    width="96"
                    height="54"
                    rx="10"
                    fill={hired ? "#F3FBD6" : "#fff"}
                    stroke="var(--illo-ink)"
                    strokeWidth={moving ? 2.5 : 1.8}
                  />
                  <circle cx={74 + c * 116} cy={174 + k * 62} r="9" fill={AVATAR[(c + k) % 4]} stroke="var(--illo-ink)" strokeWidth="1.5" />
                  <rect x={88 + c * 116} y={169 + k * 62} width="40" height="6" rx="3" fill="var(--illo-ink)" />
                  <rect x={88 + c * 116} y={179 + k * 62} width="28" height="5" rx="2.5" fill="var(--illo-muted)" />
                  <rect x={66 + c * 116} y={190 + k * 62} width="58" height="14" rx="7" fill="var(--illo-indigo)" />
                  <text x={95 + c * 116} y={200 + k * 62} textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">
                    AI match {score}%
                  </text>
                  {hired && (
                    <g>
                      <circle cx={143 + c * 116} cy={172 + k * 62} r="7" fill="var(--accent)" stroke="var(--illo-ink)" strokeWidth="1.5" />
                      <path d={`M${139.5 + c * 116} ${172 + k * 62}l2.5 2.5 4.5-5`} fill="none" stroke="var(--illo-ink)" strokeWidth="1.6" strokeLinecap="round" />
                    </g>
                  )}
                </g>
              );
            })}
          </g>
        ))}
      </IlloWindow>

      {/* Excel bulk job upload */}
      <g>
        <rect x="552" y="24" width="214" height="104" rx="16" fill="#fff" stroke="var(--illo-ink)" strokeWidth="3" />
        <rect x="568" y="40" width="36" height="44" rx="6" fill="#2E9E5B" stroke="var(--illo-ink)" strokeWidth="2.5" />
        <text x="586" y="69" textAnchor="middle" fontSize="17" fontWeight="800" fill="#fff">
          X
        </text>
        <text x="616" y="56" fontSize="11" fontWeight="800" fill="var(--illo-ink)">
          jobs.xlsx
        </text>
        <text x="616" y="72" fontSize="9" fill="var(--illo-muted-ink)">
          Bulk job creation
        </text>
        <rect x="568" y="96" width="182" height="9" rx="4.5" fill="var(--illo-cream)" />
        <rect className="illo-progress" x="568" y="96" width="182" height="9" rx="4.5" fill="var(--accent)" stroke="var(--illo-ink)" strokeWidth="1" />
        <text x="750" y="120" textAnchor="end" fontSize="9.5" fontWeight="700" fill="var(--illo-ink)">
          48 jobs created
        </text>
      </g>

      {/* Credits wallet */}
      <g className="illo-float" style={{ animationDelay: "-1.4s" }}>
        <rect x="552" y="142" width="214" height="94" rx="16" fill="var(--illo-indigo)" />
        <text x="568" y="166" fontSize="9" fontWeight="700" fill="#C9CEF0">
          HIRING CREDITS
        </text>
        <text x="568" y="198" fontSize="28" fontWeight="800" fill="#fff">
          240
        </text>
        <text x="568" y="220" fontSize="9" fill="#C9CEF0">
          Resets monthly
        </text>
        <rect x="680" y="182" width="72" height="26" rx="13" fill="var(--accent)" stroke="var(--illo-ink)" strokeWidth="2" />
        <text x="716" y="199" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--illo-ink)">
          Top up
        </text>
      </g>

      {/* Candidate app */}
      <g>
        <rect x="610" y="258" width="140" height="236" rx="24" fill="var(--illo-ink)" />
        <rect x="602" y="250" width="140" height="236" rx="24" fill="#fff" stroke="var(--illo-ink)" strokeWidth="3" />
        <rect x="648" y="259" width="44" height="8" rx="4" fill="var(--illo-ink)" />
        <rect x="614" y="278" width="116" height="94" rx="12" fill="var(--illo-indigo-tint)" stroke="var(--illo-ink)" strokeWidth="1.8" />
        <rect x="624" y="290" width="62" height="7" rx="3.5" fill="var(--illo-ink)" />
        <rect x="624" y="302" width="44" height="6" rx="3" fill="var(--illo-muted-ink)" />
        <circle cx="708" cy="304" r="14" fill="none" stroke="#fff" strokeWidth="5" />
        <circle cx="708" cy="304" r="14" fill="none" stroke="var(--illo-indigo)" strokeWidth="5" strokeLinecap="round" strokeDasharray="88" strokeDashoffset="6" transform="rotate(-90 708 304)" />
        <text x="708" y="308" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="var(--illo-ink)">
          94
        </text>
        <rect x="624" y="340" width="96" height="22" rx="11" fill="var(--illo-indigo)" />
        <text x="672" y="355" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#fff">
          Apply in one click
        </text>
        <rect x="614" y="382" width="116" height="30" rx="10" fill="var(--illo-cream)" />
        <text x="624" y="401" fontSize="9" fontWeight="700" fill="var(--illo-ink)">
          Resume ATS score
        </text>
        <text x="722" y="401" textAnchor="end" fontSize="10" fontWeight="800" fill="#2E9E5B">
          82
        </text>
        <rect x="614" y="420" width="116" height="30" rx="10" fill="var(--illo-cream)" />
        <text x="624" y="439" fontSize="9" fontWeight="700" fill="var(--illo-ink)">
          Job readiness
        </text>
        <rect x="690" y="432" width="32" height="7" rx="3.5" fill="#fff" />
        <rect className="illo-progress" x="690" y="432" width="26" height="7" rx="3.5" fill="var(--accent)" />
      </g>

      {/* Team access */}
      <g>
        <rect x="290" y="372" width="256" height="112" rx="16" fill="#fff" stroke="var(--illo-ink)" strokeWidth="3" />
        <text x="306" y="396" fontSize="11.5" fontWeight="800" fill="var(--illo-ink)">
          Team access
        </text>
        {[
          ["Company admin", "var(--illo-coral)", "Full access"],
          ["Recruiter", "var(--illo-yellow)", "Post · Shortlist"],
          ["Interviewer", "var(--illo-teal)", "Feedback only"],
        ].map(([role, tone, scope], i) => (
          <g key={role}>
            <circle cx="314" cy={414 + i * 24} r="8" fill={tone} stroke="var(--illo-ink)" strokeWidth="1.5" />
            <text x="328" y={418 + i * 24} fontSize="9.5" fontWeight="700" fill="var(--illo-ink)">
              {role}
            </text>
            <rect x="438" y={406 + i * 24} width="94" height="17" rx="8.5" fill="var(--illo-cream)" />
            <text x="485" y={418 + i * 24} textAnchor="middle" fontSize="8.5" fontWeight="600" fill="var(--illo-muted-ink)">
              {scope}
            </text>
          </g>
        ))}
      </g>

      {/* Skill tests & mock interviews */}
      <g>
        <rect x="40" y="384" width="238" height="96" rx="16" fill="var(--illo-ink)" />
        <text x="56" y="408" fontSize="11" fontWeight="700" fill="#fff">
          Skill badges · Mock interviews
        </text>
        {["SQL", "Excel", "Python", "Aptitude"].map((b, i) => (
          <g key={b} className={i === 0 ? "illo-pulse" : undefined} style={i === 0 ? { transformOrigin: "74px 446px" } : undefined}>
            <circle cx={74 + i * 56} cy="444" r="17" fill={["var(--accent)", "#2E9E5B", "var(--illo-blue)", "var(--illo-yellow)"][i]} stroke="#fff" strokeWidth="2" />
            <path d={`M${68 + i * 56} 459l-3 13 9-5 9 5-3-13`} fill={["var(--accent)", "#2E9E5B", "var(--illo-blue)", "var(--illo-yellow)"][i]} stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
            <text x={74 + i * 56} y="448" textAnchor="middle" fontSize={b.length > 5 ? 7 : 8.5} fontWeight="800" fill="var(--illo-ink)">
              {b}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
