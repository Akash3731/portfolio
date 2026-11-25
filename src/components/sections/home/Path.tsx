import Reveal from "@/components/ui/Reveal";
import type { PathData } from "@/lib/types";
import SectionHeader from "./SectionHeader";

interface PathProps {
  data: PathData;
}

export default function Path({ data }: PathProps) {
  return (
    <section id="path" className="pt-[var(--section-gap)]">
      <SectionHeader
        title={data.title}
        aside={<p className="text-[length:var(--text-m)] font-medium">{data.tag}</p>}
      />
      <div className="grid gap-3">
        {data.items.map((item, i) => (
          <Reveal key={item.period + item.role} delay={i * 80}>
            <div className="group grid grid-cols-1 items-center gap-x-5 gap-y-1 rounded-[var(--radius-row)] border border-line p-[clamp(16px,2.6vw,26px)] transition-colors duration-300 hover:border-accent hover:bg-accent sm:grid-cols-[110px_minmax(0,1fr)_auto]">
              <span className="text-[length:var(--text-m)] text-mute transition-colors group-hover:text-ink">{item.period}</span>
              <b className="text-[length:var(--title-xs)] font-medium tracking-[-0.02em]">{item.role}</b>
              <span className="text-[length:var(--text-m)] text-mute transition-colors group-hover:text-ink">{item.place}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
