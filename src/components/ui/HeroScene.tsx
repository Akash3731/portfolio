/**
 * Hero illustration — a night-time workspace where the product is visualised and built:
 * a split-screen monitor (design canvas + code), a tablet wireframe with stylus, swatch cards,
 * a pinboard of sketches, a desk lamp, keyboard, mug and plant. Static, lit with gradients and glows.
 */

const KEY_ROWS = [14, 14, 13, 12, 9];

function Keyboard() {
  const keys: React.ReactNode[] = [];
  const W = 340;
  KEY_ROWS.forEach((count, r) => {
    const y = 10 + r * 20;
    const gap = 3;
    const isBottom = r === KEY_ROWS.length - 1;
    // Bottom row: the space bar spans three key widths.
    const units = isBottom ? count + 2 : count;
    const unit = (W - 20 - gap * (count - 1)) / units;
    let x = 10;
    for (let c = 0; c < count; c++) {
      const w = isBottom && c === 4 ? unit * 3 : unit;
      keys.push(
        <g key={`${r}-${c}`}>
          <rect x={x} y={y + 1.5} width={w} height="16" rx="3" fill="#0B0D0C" />
          <rect x={x} y={y} width={w} height="15.5" rx="3" fill="url(#hs-key)" />
          <rect x={x + 1} y={y + 0.8} width={w - 2} height="1.4" rx="0.7" fill="#fff" opacity=".08" />
        </g>,
      );
      x += w + gap;
    }
  });
  return (
    <g>
      <rect x="0" y="0" width={W} height="116" rx="10" fill="url(#hs-kb-body)" />
      <rect x="0.5" y="0.5" width={W - 1} height="115" rx="9.5" fill="none" stroke="#fff" strokeOpacity=".06" />
      {keys}
    </g>
  );
}

function DesignCanvas() {
  return (
    <g>
      {/* canvas */}
      <rect x="0" y="0" width="230" height="232" fill="#E9E7E0" />
      <g opacity=".5">
        {Array.from({ length: 12 }, (_, i) => (
          <path key={i} d={`M${34 + i * 17} 0v232`} stroke="#D9D6CD" strokeWidth=".6" />
        ))}
      </g>
      {/* layers panel */}
      <rect x="0" y="0" width="34" height="232" fill="#1C201E" />
      {Array.from({ length: 9 }, (_, i) => (
        <rect key={i} x="6" y={12 + i * 14} width={i % 3 === 0 ? 22 : 16} height="4" rx="2" fill={i === 2 ? "#CDEE46" : "#4A524C"} />
      ))}
      {/* mobile artboard */}
      <rect x="46" y="20" width="62" height="124" rx="9" fill="#0C100D" />
      <rect x="51" y="28" width="52" height="34" rx="5" fill="#2E3A2F" />
      <rect x="51" y="28" width="52" height="34" rx="5" fill="url(#hs-photo)" />
      <rect x="51" y="68" width="38" height="5" rx="2.5" fill="#F3F3EE" />
      <rect x="51" y="77" width="28" height="3.5" rx="1.75" fill="#7D857E" />
      <rect x="51" y="88" width="52" height="16" rx="5" fill="#1B211C" />
      <rect x="51" y="108" width="52" height="16" rx="5" fill="#1B211C" />
      <rect x="51" y="128" width="30" height="10" rx="5" fill="#CDEE46" />
      {/* web artboard */}
      <rect x="118" y="20" width="102" height="74" rx="5" fill="#fff" />
      <rect x="118" y="20" width="102" height="10" rx="5" fill="#F1F0EB" />
      <rect x="124" y="38" width="44" height="6" rx="3" fill="#101311" />
      <rect x="124" y="48" width="32" height="6" rx="3" fill="#101311" />
      <rect x="124" y="60" width="40" height="3" rx="1.5" fill="#B9BCB6" />
      <rect x="124" y="74" width="24" height="9" rx="4.5" fill="#CDEE46" />
      <rect x="172" y="36" width="42" height="50" rx="4" fill="#7D97F4" />
      <circle cx="193" cy="56" r="10" fill="#F6C453" />
      {/* selection box with handles */}
      <rect x="170" y="34" width="46" height="54" fill="none" stroke="#3E7BFA" strokeWidth="1.2" />
      {[
        [170, 34],
        [216, 34],
        [170, 88],
        [216, 88],
      ].map(([x, y]) => (
        <rect key={`${x}${y}`} x={x - 2} y={y - 2} width="4" height="4" fill="#fff" stroke="#3E7BFA" strokeWidth="1" />
      ))}
      {/* palette */}
      {["#CDEE46", "#F0715F", "#7D97F4", "#8FD3C9", "#F6C453", "#101311"].map((c, i) => (
        <rect key={c} x={118 + i * 17} y="104" width="14" height="14" rx="3" fill={c} />
      ))}
      {/* type specimen */}
      <text x="118" y="140" fontSize="18" fontWeight="700" fill="#101311" fontFamily="var(--font-body)">
        Aa
      </text>
      <rect x="146" y="128" width="54" height="4" rx="2" fill="#B9BCB6" />
      <rect x="146" y="136" width="40" height="4" rx="2" fill="#D3D6D0" />
      {/* component row */}
      <rect x="46" y="156" width="174" height="62" rx="6" fill="#fff" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={54 + i * 56} y="164" width="48" height="30" rx="4" fill={["#E3F3EE", "#FBF2DC", "#E9EDFB"][i]} />
          <rect x={54 + i * 56} y="200" width="36" height="4" rx="2" fill="#101311" />
          <rect x={54 + i * 56} y="208" width="26" height="3" rx="1.5" fill="#B9BCB6" />
        </g>
      ))}
      {/* cursor */}
      <path d="M200 96l0 16 4.5-4 3.5 7.5 3-1.4-3.5-7.4h6z" fill="#101311" stroke="#fff" strokeWidth="1" />
    </g>
  );
}

const CODE: [number, string, number][][] = [
  [[0, "#C792EA", 30], [36, "#82AAFF", 40], [80, "#89DDFF", 10]],
  [[12, "#F07178", 28], [44, "#89DDFF", 8], [56, "#C3E88D", 54]],
  [[12, "#F07178", 34], [50, "#89DDFF", 8], [62, "#C3E88D", 40]],
  [[0, "#89DDFF", 10]],
  [],
  [[0, "#C792EA", 44], [50, "#82AAFF", 56], [110, "#89DDFF", 12]],
  [[12, "#C792EA", 30], [46, "#FFCB6B", 34], [84, "#89DDFF", 8], [96, "#82AAFF", 44]],
  [[12, "#C792EA", 24], [40, "#F07178", 30], [74, "#89DDFF", 8], [86, "#C3E88D", 48]],
  [[24, "#82AAFF", 36], [64, "#89DDFF", 8], [76, "#F78C6C", 22]],
  [[12, "#89DDFF", 10]],
  [[12, "#C792EA", 36], [52, "#89DDFF", 12], [68, "#FFCB6B", 60]],
  [[24, "#676E95", 112]],
  [[24, "#F07178", 40], [68, "#89DDFF", 8], [80, "#C3E88D", 70]],
  [[12, "#89DDFF", 10]],
  [[0, "#89DDFF", 10]],
];

function CodePane() {
  return (
    <g>
      <rect x="0" y="0" width="210" height="232" fill="#0D1110" />
      <rect x="0" y="0" width="210" height="16" fill="#151A18" />
      <rect x="6" y="4" width="54" height="9" rx="2" fill="#0D1110" />
      <rect x="11" y="7" width="38" height="3" rx="1.5" fill="#8B908B" />
      <rect x="64" y="5" width="44" height="7" rx="2" fill="#1C2220" />
      {CODE.map((line, i) => (
        <g key={i}>
          <rect x="6" y={26 + i * 13} width="8" height="3.5" rx="1.75" fill="#3A403C" />
          {line.map(([x, color, w], k) => (
            <rect key={k} x={22 + x} y={26 + i * 13} width={w} height="4" rx="2" fill={color} opacity=".92" />
          ))}
        </g>
      ))}
      <rect x="22" y={26 + 8 * 13 - 3} width="186" height="10" fill="#CDEE46" opacity=".06" />
      <rect x="128" y={26 + 8 * 13 - 2.5} width="1.6" height="9" fill="#CDEE46" />
      {/* terminal */}
      <rect x="0" y="198" width="210" height="34" fill="#0A0D0C" />
      <rect x="8" y="207" width="6" height="4" rx="2" fill="#C3E88D" />
      <rect x="18" y="207" width="70" height="4" rx="2" fill="#8B908B" />
      <rect x="8" y="217" width="6" height="4" rx="2" fill="#CDEE46" />
      <rect x="18" y="217" width="96" height="4" rx="2" fill="#CDEE46" opacity=".75" />
    </g>
  );
}

export default function HeroScene() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="block size-full font-sans"
      role="img"
      aria-label="Illustration of a night-time workspace: a monitor split between a design canvas and code, a tablet with a wireframe sketch, colour swatches, a pinboard and a desk lamp"
    >
      <defs>
        <linearGradient id="hs-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#141916" />
          <stop offset="1" stopColor="#0C0F0D" />
        </linearGradient>
        <linearGradient id="hs-desk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3A2C20" />
          <stop offset=".35" stopColor="#2A2018" />
          <stop offset="1" stopColor="#140F0B" />
        </linearGradient>
        <linearGradient id="hs-desk-edge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5A4532" />
          <stop offset="1" stopColor="#2C2118" />
        </linearGradient>
        <radialGradient id="hs-lamp-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#FFC879" stopOpacity=".55" />
          <stop offset=".45" stopColor="#FF9F43" stopOpacity=".16" />
          <stop offset="1" stopColor="#FF9F43" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hs-screen-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#B9D3FF" stopOpacity=".28" />
          <stop offset="1" stopColor="#B9D3FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hs-bezel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2A2E2C" />
          <stop offset="1" stopColor="#0E100F" />
        </linearGradient>
        <linearGradient id="hs-alu" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6E7370" />
          <stop offset=".45" stopColor="#C9CDCA" />
          <stop offset=".55" stopColor="#E8EBE9" />
          <stop offset="1" stopColor="#5D625F" />
        </linearGradient>
        <linearGradient id="hs-glare" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".1" />
          <stop offset=".4" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hs-key" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2E3431" />
          <stop offset="1" stopColor="#1D211F" />
        </linearGradient>
        <linearGradient id="hs-kb-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3A3F3C" />
          <stop offset="1" stopColor="#222624" />
        </linearGradient>
        <linearGradient id="hs-photo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F6A07F" />
          <stop offset=".6" stopColor="#7D4A6B" />
          <stop offset="1" stopColor="#2A2F55" />
        </linearGradient>
        <linearGradient id="hs-tablet" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3B403D" />
          <stop offset="1" stopColor="#151816" />
        </linearGradient>
        <linearGradient id="hs-mug" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#1C2220" />
          <stop offset=".3" stopColor="#E9E6DF" />
          <stop offset=".55" stopColor="#F6F4EF" />
          <stop offset="1" stopColor="#7A786F" />
        </linearGradient>
        <linearGradient id="hs-pot" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5E4A3A" />
          <stop offset=".5" stopColor="#B08E6E" />
          <stop offset="1" stopColor="#4A3A2E" />
        </linearGradient>
        <linearGradient id="hs-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5E8F5A" />
          <stop offset="1" stopColor="#1E3A22" />
        </linearGradient>
        <linearGradient id="hs-cork" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5A4330" />
          <stop offset="1" stopColor="#33261B" />
        </linearGradient>
        <linearGradient id="hs-stylus" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#B9BCB6" />
        </linearGradient>
        <radialGradient id="hs-vignette" cx="0.5" cy="0.45" r="0.75">
          <stop offset=".55" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".55" />
        </radialGradient>
        <filter id="hs-blur-lg" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="22" />
        </filter>
        <filter id="hs-blur-md" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id="hs-blur-sm" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <clipPath id="hs-screen-clip">
          <rect x="252" y="96" width="440" height="248" rx="4" />
        </clipPath>
      </defs>

      {/* Wall */}
      <rect width="800" height="420" fill="url(#hs-wall)" />
      <ellipse cx="470" cy="230" rx="330" ry="190" fill="url(#hs-screen-glow)" />
      <ellipse cx="150" cy="300" rx="230" ry="200" fill="url(#hs-lamp-glow)" />

      {/* Pinboard */}
      <g>
        <rect x="46" y="54" width="168" height="150" rx="6" fill="url(#hs-cork)" />
        <rect x="46" y="54" width="168" height="150" rx="6" fill="none" stroke="#000" strokeOpacity=".4" strokeWidth="3" />
        {/* wireframe sheet */}
        <g transform="rotate(-4 98 116)">
          <rect x="60" y="68" width="76" height="98" fill="#D9D3C4" />
          <rect x="68" y="78" width="60" height="10" fill="none" stroke="#5B5A55" strokeWidth="1.2" />
          <rect x="68" y="94" width="28" height="28" fill="none" stroke="#5B5A55" strokeWidth="1.2" />
          <path d="M68 94l28 28M96 94l-28 28" stroke="#5B5A55" strokeWidth=".8" />
          <path d="M102 98h26M102 106h20M102 114h24" stroke="#5B5A55" strokeWidth="1.2" />
          <rect x="68" y="130" width="60" height="26" fill="none" stroke="#5B5A55" strokeWidth="1.2" />
          <circle cx="98" cy="70" r="3" fill="#E0553F" />
        </g>
        {/* palette strip */}
        <g transform="rotate(5 176 96)">
          <rect x="148" y="66" width="54" height="66" fill="#ECE8DE" />
          {["#CDEE46", "#F0715F", "#7D97F4", "#8FD3C9"].map((c, i) => (
            <rect key={c} x="154" y={72 + i * 14} width="42" height="11" fill={c} />
          ))}
          <circle cx="175" cy="68" r="3" fill="#E0553F" />
        </g>
        {/* polaroid */}
        <g transform="rotate(-7 176 172)">
          <rect x="150" y="142" width="50" height="56" fill="#EFEDE7" />
          <rect x="155" y="147" width="40" height="36" fill="url(#hs-photo)" />
          <circle cx="175" cy="143" r="3" fill="#E0553F" />
        </g>
        {/* sticky note */}
        <rect x="70" y="172" width="40" height="26" fill="#F6C453" transform="rotate(3 90 185)" />
        <path d="M76 182h26M76 189h18" stroke="#7A5A16" strokeWidth="1.4" transform="rotate(3 90 185)" />
      </g>

      {/* Desk */}
      <rect x="0" y="408" width="800" height="192" fill="url(#hs-desk)" />
      <rect x="0" y="406" width="800" height="5" fill="url(#hs-desk-edge)" />
      <g stroke="#000" strokeOpacity=".18" strokeWidth="1" fill="none">
        <path d="M0 440c200-6 420 8 800-4" />
        <path d="M0 482c260-10 500 12 800-6" />
        <path d="M0 530c180 8 460-10 800 6" />
        <path d="M0 576c300-8 560 10 800-2" />
      </g>
      <ellipse cx="200" cy="470" rx="230" ry="80" fill="url(#hs-lamp-glow)" />
      <ellipse cx="470" cy="440" rx="240" ry="50" fill="url(#hs-screen-glow)" />

      {/* Desk lamp */}
      <g>
        <ellipse cx="92" cy="424" rx="34" ry="7" fill="#000" opacity=".55" filter="url(#hs-blur-sm)" />
        <ellipse cx="92" cy="418" rx="30" ry="7" fill="#2B302D" />
        <ellipse cx="92" cy="416" rx="30" ry="6" fill="#3E4441" />
        <path d="M92 414l22-120" stroke="#4A504D" strokeWidth="6" strokeLinecap="round" />
        <path d="M114 294l70-44" stroke="#4A504D" strokeWidth="6" strokeLinecap="round" />
        <circle cx="114" cy="294" r="6" fill="#5A605D" />
        <g transform="rotate(32 196 246)">
          <path d="M172 230h48l14 34h-76z" fill="#2E3431" />
          <path d="M172 230h48l2 5h-52z" fill="#454B48" />
        </g>
        <ellipse cx="212" cy="276" rx="16" ry="6" fill="#FFE2A8" transform="rotate(32 212 276)" />
        <ellipse cx="212" cy="276" rx="34" ry="20" fill="#FFC879" opacity=".55" filter="url(#hs-blur-md)" />
      </g>

      {/* Plant */}
      <g>
        <ellipse cx="736" cy="422" rx="30" ry="6" fill="#000" opacity=".5" filter="url(#hs-blur-sm)" />
        {[
          "M736 360c-20-30-40-40-58-40 6 20 26 40 58 40z",
          "M736 360c8-36 26-56 48-62-2 24-20 50-48 62z",
          "M736 364c-30-8-50-2-62 10 18 10 42 8 62-10z",
          "M736 362c-4-40 4-66 18-80 8 24 0 56-18 80z",
          "M736 366c26-14 48-14 60-4-16 14-38 14-60 4z",
        ].map((d, i) => (
          <path key={i} d={d} fill="url(#hs-leaf)" opacity={0.8 + i * 0.04} />
        ))}
        <path d="M712 372h48l-6 50h-36z" fill="url(#hs-pot)" />
        <rect x="709" y="366" width="54" height="10" rx="3" fill="#8A6D54" />
      </g>

      {/* Monitor */}
      <g>
        <ellipse cx="472" cy="432" rx="80" ry="10" fill="#000" opacity=".6" filter="url(#hs-blur-sm)" />
        <path d="M418 424h108l-8-10h-92z" fill="url(#hs-alu)" />
        <rect x="418" y="424" width="108" height="5" rx="2" fill="#4F5451" />
        <rect x="458" y="350" width="28" height="66" fill="url(#hs-alu)" />
        <rect x="244" y="88" width="456" height="264" rx="14" fill="url(#hs-bezel)" />
        <rect x="244.5" y="88.5" width="455" height="263" rx="13.5" fill="none" stroke="#fff" strokeOpacity=".08" />
        <g clipPath="url(#hs-screen-clip)">
          <rect x="252" y="96" width="440" height="248" fill="#1B1F1D" />
          <rect x="252" y="96" width="440" height="16" fill="#202523" />
          <circle cx="262" cy="104" r="3" fill="#F0715F" />
          <circle cx="272" cy="104" r="3" fill="#F6C453" />
          <circle cx="282" cy="104" r="3" fill="#CDEE46" />
          <g transform="translate(252 112)">
            <DesignCanvas />
          </g>
          <g transform="translate(482 112)">
            <CodePane />
          </g>
          <rect x="481" y="112" width="1.5" height="232" fill="#000" opacity=".6" />
          <rect x="252" y="96" width="440" height="248" fill="url(#hs-glare)" />
        </g>
        <circle cx="472" cy="346" r="1.6" fill="#3A3F3C" />
      </g>

      {/* Tablet with wireframe sketch */}
      <g transform="translate(150 528) scale(1 0.56) rotate(-12) translate(-118 -82)">
        <rect x="6" y="10" width="236" height="164" rx="16" fill="#000" opacity=".55" filter="url(#hs-blur-md)" />
        <rect x="0" y="0" width="236" height="164" rx="16" fill="url(#hs-tablet)" />
        <rect x="10" y="10" width="216" height="144" rx="8" fill="#F3F1EA" />
        <rect x="10" y="10" width="216" height="144" rx="8" fill="#FFE2A8" opacity=".12" />
        <g fill="none" stroke="#2A2E2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 26h188" />
          <circle cx="32" cy="26" r="3" />
          <path d="M150 26h18M176 26h18" />
          <path d="M24 44h96v52H24z" />
          <path d="M24 44l96 52M120 44L24 96" strokeWidth="1.2" />
          <path d="M134 50h70M134 62h56M134 74h64" />
          <path d="M134 86h36v14h-36z" />
          <path d="M24 112h56v30H24zM90 112h56v30H90zM156 112h56v30h-56z" />
        </g>
        <path d="M134 86h36v14h-36z" fill="#CDEE46" opacity=".55" />
        <path d="M168 112h40" stroke="#F0715F" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      {/* Stylus */}
      <g>
        <path d="M206 556l118-70" stroke="#000" strokeOpacity=".5" strokeWidth="9" strokeLinecap="round" filter="url(#hs-blur-sm)" />
        <path d="M200 548l118-70" stroke="url(#hs-stylus)" strokeWidth="7" strokeLinecap="round" />
        <path d="M200 548l12-7" stroke="#8B908B" strokeWidth="7" strokeLinecap="round" />
        <path d="M214 538l100-59" stroke="#fff" strokeOpacity=".7" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Keyboard */}
      <g transform="translate(470 506) scale(1 0.46) translate(-170 -58)">
        <rect x="-4" y="10" width="348" height="120" rx="12" fill="#000" opacity=".55" filter="url(#hs-blur-md)" />
        <Keyboard />
      </g>

      {/* Swatch cards */}
      <g transform="translate(648 470) scale(1 0.6)">
        {[
          ["#7D97F4", -18],
          ["#F0715F", -6],
          ["#CDEE46", 8],
        ].map(([c, rot]) => (
          <g key={c as string} transform={`rotate(${rot})`}>
            <rect x="-22" y="-60" width="44" height="80" rx="4" fill="#000" opacity=".35" filter="url(#hs-blur-sm)" />
            <rect x="-24" y="-64" width="44" height="80" rx="4" fill="#F1EEE7" />
            <rect x="-20" y="-60" width="36" height="46" rx="2" fill={c as string} />
            <rect x="-20" y="-8" width="24" height="4" rx="2" fill="#555A56" />
            <rect x="-20" y="0" width="16" height="3" rx="1.5" fill="#9DA19C" />
          </g>
        ))}
      </g>

      {/* Mug */}
      <g>
        <ellipse cx="736" cy="560" rx="38" ry="9" fill="#000" opacity=".55" filter="url(#hs-blur-sm)" />
        <path d="M762 512c22 0 26 30 2 34" fill="none" stroke="#C9C6BE" strokeWidth="7" />
        <path d="M708 504v50c0 6 12 10 28 10s28-4 28-10v-50z" fill="url(#hs-mug)" />
        <ellipse cx="736" cy="504" rx="28" ry="7" fill="#E9E6DF" />
        <ellipse cx="736" cy="505" rx="24" ry="5" fill="#3B2416" />
        <ellipse cx="730" cy="504" rx="8" ry="1.6" fill="#7A4A2C" opacity=".8" />
        <path d="M722 512v38" stroke="#fff" strokeOpacity=".55" strokeWidth="3" strokeLinecap="round" />
        <rect x="726" y="524" width="22" height="12" rx="3" fill="#CDEE46" opacity=".85" />
        <g fill="none" stroke="#fff" strokeOpacity=".16" strokeWidth="5" strokeLinecap="round" filter="url(#hs-blur-sm)">
          <path d="M730 494c-8-14 8-20 0-36" />
          <path d="M744 492c-6-12 8-18 2-32" />
        </g>
      </g>

      {/* Vignette */}
      <rect width="800" height="600" fill="url(#hs-vignette)" />
    </svg>
  );
}
