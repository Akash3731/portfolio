"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import ProjectCover from "@/components/ui/ProjectCover";
import Reveal from "@/components/ui/Reveal";
import { useScrollTo } from "@/components/ui/SmoothScroll";
import type { WorkData } from "@/lib/types";
import CaseStudy from "./CaseStudy";
import SectionHeader from "./SectionHeader";

interface SelectedWorkProps {
  data: WorkData;
}

const CASE_ID = "case-study";

export default function SelectedWork({ data }: SelectedWorkProps) {
  const scrollTo = useScrollTo();
  const [filter, setFilter] = useState<WorkData["filters"][number]["id"]>("all");
  const [currentId, setCurrentId] = useState(data.projects[0].id);

  const list = data.projects.filter((p) => filter === "all" || p.category === filter);
  const current = data.projects.find((p) => p.id === currentId) ?? list[0];
  const position = list.findIndex((p) => p.id === current.id);

  const applyFilter = (f: typeof filter) => {
    setFilter(f);
    const next = data.projects.filter((p) => f === "all" || p.category === f);
    if (!next.some((p) => p.id === currentId)) setCurrentId(next[0].id);
  };

  const step = (d: number) => {
    const k = position < 0 ? 0 : position;
    setCurrentId(list[(k + d + list.length) % list.length].id);
  };

  const open = (id: string) => {
    setCurrentId(id);
    scrollTo(CASE_ID, { block: "center" });
  };

  return (
    <section id="work" className="pt-[var(--section-gap)]">
      <SectionHeader
        title={data.title}
        aside={
          <div role="group" aria-label="Filter work" className="flex flex-wrap gap-1">
            {data.filters.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filter === f.id}
                onClick={() => applyFilter(f.id)}
                className="cursor-pointer rounded-[var(--radius-full)] bg-pill px-4 py-2 text-sm font-medium transition-colors duration-[var(--transition-fast)] aria-pressed:bg-accent"
              >
                {f.label}
              </button>
            ))}
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-x-[clamp(14px,2.4vw,28px)] gap-y-[clamp(18px,3vw,34px)] sm:grid-cols-2">
        {list.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 110}>
            <button
              type="button"
              aria-label={`Open case study: ${p.name}`}
              onClick={() => open(p.id)}
              className="group block w-full cursor-pointer text-left"
            >
              <ProjectCover
                project={p}
                sizes="(min-width: 640px) 46vw, 92vw"
                className="aspect-[16/10] rounded-[var(--radius-md)] ring-1 ring-line"
              >
                <span className="absolute inset-0 bg-black/35 opacity-0 transition-opacity duration-[var(--transition-base)] group-hover:opacity-100 group-focus-visible:opacity-100" />
                <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-[calc(50%-8px)] items-center gap-1.5 rounded-[var(--radius-full)] bg-accent px-3.5 py-2 text-sm font-medium text-primary opacity-0 transition-[opacity,transform] duration-[var(--transition-base)] ease-[var(--ease-out)] group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus-visible:-translate-y-1/2 group-focus-visible:opacity-100">
                  View case study <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </ProjectCover>
              <span className="flex items-baseline justify-between gap-3 px-1 pt-3.5">
                <b className="text-[length:var(--title-xs)] font-medium tracking-[-0.02em] decoration-1 underline-offset-4 group-hover:underline">{p.name}</b>
                <span className="text-right text-sm text-mute">{p.type}</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <CaseStudy
        id={CASE_ID}
        project={current}
        list={list}
        all={data.projects}
        onSelect={setCurrentId}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
      />
    </section>
  );
}
