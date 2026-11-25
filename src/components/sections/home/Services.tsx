"use client";

import { ArrowDownRight, Check } from "lucide-react";
import { useId, useState } from "react";
import { SERVICE_ILLUSTRATIONS } from "@/components/ui/illustrations";
import ServicePill from "@/components/ui/illustrations/ServicePill";
import Reveal from "@/components/ui/Reveal";
import type { ServicesData } from "@/lib/types";
import SectionHeader from "./SectionHeader";

interface ServicesProps {
  data: ServicesData;
}

export default function Services({ data }: ServicesProps) {
  const [open, setOpen] = useState(0);
  const uid = useId();

  return (
    <section className="pt-[var(--section-gap)]">
      <SectionHeader
        title={data.title}
        aside={<p className="text-[length:var(--text-m)] font-medium">{data.tag}</p>}
      />

      <div className="grid gap-3.5">
        {data.items.map((item, i) => {
          const isOpen = open === i;
          const Illustration = SERVICE_ILLUSTRATIONS[item.illustration];
          const panelId = `${uid}-panel-${i}`;
          return (
            <Reveal key={item.title} delay={i * 90}>
              <div
                data-open={isOpen}
                className="group rounded-[var(--radius-lg)] border border-line transition-colors duration-[var(--transition-base)] data-[open=true]:border-ink"
              >
                <h3 className="text-[length:var(--title-s)] text-ink">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="group/ah grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-[var(--block-pad)] text-left sm:grid-cols-[minmax(0,1fr)_auto_auto]"
                  >
                    <span>{item.title}</span>
                    <span className="hidden h-[clamp(54px,9.5vw,96px)] w-[clamp(96px,17vw,170px)] overflow-hidden rounded-[var(--radius-full)] border border-line transition-[opacity,transform] duration-[var(--transition-base)] group-data-[open=true]:scale-[0.6] group-data-[open=true]:opacity-0 sm:block">
                      <ServicePill variant={item.illustration} />
                    </span>
                    <span className="grid size-[46px] place-items-center rounded-full border border-ink transition-[transform,background-color] duration-[450ms] group-hover/ah:bg-accent group-data-[open=true]:-rotate-90">
                      <ArrowDownRight className="size-5" aria-hidden="true" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  inert={!isOpen}
                  className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[var(--transition-slow)] ease-[var(--ease-out)] group-data-[open=true]:grid-rows-[1fr]"
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-[22px] px-[var(--block-pad)] pb-[var(--block-pad)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                      <div className="flex flex-col">
                        <p className="max-w-[38em] text-[length:var(--text-m)] text-mute">{item.summary}</p>
                        <ul className="mt-6 grid gap-3">
                          {item.points.map((point) => (
                            <li key={point} className="flex gap-3 text-[length:var(--text-m)]">
                              <span className="mt-[0.3em] grid size-[18px] shrink-0 place-items-center rounded-full bg-accent">
                                <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                              </span>
                              {point}
                            </li>
                          ))}
                        </ul>
                        <ul className="mt-7 flex flex-wrap gap-2 lg:mt-auto lg:pt-7" aria-label="Tools">
                          {item.tools.map((tool) => (
                            <li
                              key={tool}
                              className="rounded-[var(--radius-full)] border border-line px-3 py-1.5 text-[length:var(--text-xs)] font-medium text-mute"
                            >
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="aspect-[5/4] overflow-hidden rounded-[var(--radius-cover)] border border-line">
                        <Illustration />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
