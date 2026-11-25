"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ScrollRevealText from "@/components/ui/ScrollRevealText";
import { useScrollTo } from "@/components/ui/SmoothScroll";
import type { AboutData } from "@/lib/types";

interface AboutProps {
  data: AboutData;
  workId: string;
}

export default function About({ data, workId }: AboutProps) {
  const scrollTo = useScrollTo();

  return (
    <section
      id="about"
      className="grid grid-cols-1 gap-x-[clamp(20px,5vw,80px)] gap-y-[18px] pt-[var(--section-gap)] sm:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)]"
    >
      <Reveal as="p" className="text-[length:var(--text-m)] font-medium">
        {data.tag}
      </Reveal>
      <div>
        <ScrollRevealText className="text-[length:var(--text-lead)] font-medium leading-[1.24] tracking-[-0.02em]">
          {data.text}
        </ScrollRevealText>
        <button
          type="button"
          onClick={() => scrollTo(workId)}
          className="mt-[26px] inline-flex cursor-pointer items-center gap-2 text-sm font-medium underline underline-offset-4"
        >
          {data.more} <ArrowUpRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
