import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

interface SectionHeaderProps {
  title: string;
  aside: ReactNode;
}

export default function SectionHeader({ title, aside }: SectionHeaderProps) {
  return (
    <Reveal className="mb-[clamp(18px,3vw,34px)] flex flex-wrap items-end justify-between gap-3.5">
      <h2 className="text-[length:var(--title-l)]">{title}</h2>
      {aside}
    </Reveal>
  );
}
