import HeroScene from "@/components/ui/HeroScene";
import Reveal from "@/components/ui/Reveal";
import type { HeroData } from "@/lib/types";

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-[var(--hero-min-h)] flex-col justify-center gap-10 overflow-hidden rounded-[var(--radius-lg)] bg-primary p-[var(--hero-pad)] text-white"
    >
      {/* Text column ends where the illustration begins; the tagline scales to fit it */}
      <div className="@container relative z-[1] min-[1024px]:w-[52%] min-[1280px]:w-[49%] min-[1400px]:w-[45%]">
        <Reveal as="p" className="mb-2.5 text-[length:var(--text-hey)] font-medium text-accent">
          {data.greeting}
        </Reveal>
        <Reveal
          as="h1"
          delay={120}
          className="text-[length:var(--title-hero)] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[length:min(var(--title-hero),var(--title-hero-fit))]"
        >
          {data.tagline.split("\n").map((line) => (
            <span key={line} className="block sm:whitespace-nowrap">
              {line}
            </span>
          ))}
        </Reveal>
      </div>

      {/* Workspace illustration — in flow below lg, centred on the right from lg up */}
      <Reveal
        delay={300}
        className="relative z-[1] mx-auto w-full max-w-[640px] lg:absolute lg:right-[var(--hero-pad)] lg:top-1/2 lg:mx-0 lg:max-w-none lg:-translate-y-1/2 min-[1024px]:w-[40%] min-[1280px]:w-[44%] min-[1400px]:w-[48%]"
      >
        <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-sm)] border border-[var(--surface-dark-line)] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.7)]">
          <HeroScene />
        </div>
      </Reveal>
    </section>
  );
}
