import Icon from "@/components/ui/Icon";
import type { Tool } from "@/lib/types";

interface ToolsMarqueeProps {
  data: Tool[];
}

export default function ToolsMarquee({ data }: ToolsMarqueeProps) {
  return (
    <section
      aria-label="Tools I use"
      className="mt-[clamp(40px,7vw,80px)] overflow-hidden py-1 [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)]"
    >
      <div className="marquee flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex gap-3 pr-3">
            {data.map((t) => (
              <li
                key={t.label}
                className="flex items-center gap-3 whitespace-nowrap rounded-[var(--radius-row)] border border-line bg-[var(--surface-card)] py-3 pl-3.5 pr-5 shadow-[0_6px_18px_-12px_rgba(16,19,17,0.35)]"
              >
                <Icon icon={t.icon} className="size-7 shrink-0 text-ink" />
                <span className="text-sm font-medium text-ink/70">{t.label}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
