import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import ProjectCover from "@/components/ui/ProjectCover";
import Reveal from "@/components/ui/Reveal";
import type { Project } from "@/lib/types";

interface CaseStudyProps {
  id: string;
  project: Project;
  list: Project[];
  /** Every project, rendered stacked so the panel keeps the height of the longest entry. */
  all: Project[];
  onSelect: (id: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

const navBtn =
  "grid size-11 cursor-pointer place-items-center rounded-full border border-[var(--color-ring-on-dark)] transition-colors duration-[var(--transition-fast)] hover:border-accent hover:bg-accent hover:text-primary";

const pad = (n: number) => String(n).padStart(2, "0");

export default function CaseStudy({ id, project, list, all, onSelect, onPrev, onNext }: CaseStudyProps) {
  const position = list.findIndex((p) => p.id === project.id) + 1;

  return (
    <Reveal
      id={id}
      aria-live="polite"
      className="mt-[clamp(22px,4vw,44px)] rounded-[var(--radius-lg)] bg-primary p-[var(--block-pad)] text-white"
    >
      <div className="mb-5 flex items-center justify-between gap-4 sm:mb-7">
        <p className="text-sm font-medium">
          <span className="text-accent">Case study</span>
          <span className="ml-2 tabular-nums text-[var(--color-text-on-dark-muted)]">
            {pad(position)} / {pad(list.length)}
          </span>
        </p>
        <div className="flex gap-2">
          <button type="button" aria-label="Previous case study" onClick={onPrev} className={navBtn}>
            <ArrowLeft className="size-[18px]" aria-hidden="true" />
          </button>
          <button type="button" aria-label="Next case study" onClick={onNext} className={navBtn}>
            <ArrowRight className="size-[18px]" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-[clamp(28px,4vw,56px)]">
        <ProjectCover
          key={project.id}
          project={project}
          sizes="(min-width: 1024px) 52vw, 90vw"
          className="case-in aspect-[16/10] self-start rounded-[var(--radius-cover)] ring-1 ring-white/10"
        />

        {/* All entries share one grid cell; the cell takes the tallest entry's height, so switching never shifts the layout */}
        <div className="grid">
          {all.map((p) => (
            <CaseDetails key={p.id} project={p} active={p.id === project.id} />
          ))}
        </div>
      </div>

      <div className="mt-7 flex gap-1.5" aria-label="Case studies">
        {list.map((p) => (
          <button
            key={p.id}
            type="button"
            aria-label={`Show ${p.name}`}
            aria-current={p.id === project.id ? "true" : undefined}
            onClick={() => onSelect(p.id)}
            className="group/seg flex-1 cursor-pointer py-2"
          >
            <span className="block h-1 rounded-full bg-white/15 transition-colors duration-[var(--transition-fast)] group-hover/seg:bg-white/40 group-aria-[current=true]/seg:bg-accent" />
          </button>
        ))}
      </div>
    </Reveal>
  );
}

function CaseDetails({ project, active }: { project: Project; active: boolean }) {
  const stack = project.stack.split(/,\s*/);
  return (
    <div
      aria-hidden={!active}
      inert={!active}
      className={`col-start-1 row-start-1 flex flex-col ${active ? "case-in visible" : "invisible"}`}
    >
      <p className="text-sm text-[var(--color-text-on-dark-muted)]">
        {project.type} · {project.org}
      </p>
      <h3 className="mt-2 text-[length:var(--title-m)]">{project.name}</h3>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
        <div>
          <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-text-on-dark-muted)]">
            The brief
          </p>
          <p className="text-[length:var(--text-m)] text-[var(--color-text-on-dark-soft)]">{project.brief}</p>
        </div>
        <div>
          <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-text-on-dark-muted)]">
            What I built
          </p>
          <p className="text-[length:var(--text-m)] text-[var(--color-text-on-dark-soft)]">{project.part}</p>
        </div>
      </div>

      {project.features && (
        <div className="mt-6">
          <p className="mb-2.5 text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-text-on-dark-muted)]">
            Key features
          </p>
          <ul className="grid gap-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2.5 text-[length:var(--text-s)] text-[var(--color-text-on-dark-soft)]">
                <Check className="mt-[0.2em] size-4 shrink-0 text-accent" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Built with">
        {stack.map((s) => (
          <li
            key={s}
            className="rounded-[var(--radius-full)] border border-white/15 px-3 py-1.5 text-[length:var(--text-xs)] text-[var(--color-text-on-dark-soft)]"
          >
            {s}
          </li>
        ))}
      </ul>

      {project.url && (
        <a
          href={`https://${project.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-7 inline-flex items-center gap-2 self-start rounded-[var(--radius-full)] bg-accent py-2.5 pl-5 pr-2.5 text-sm font-medium text-primary lg:mt-auto"
        >
          Visit {project.url}
          <span className="grid size-7 place-items-center rounded-full bg-primary text-accent transition-transform duration-[var(--transition-fast)] group-hover/link:rotate-45">
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </a>
      )}
    </div>
  );
}
