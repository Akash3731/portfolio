"use client";

import { useRef, useState } from "react";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import type { ContactData } from "@/lib/types";

interface ContactProps {
  id: string;
  data: ContactData;
}

export default function Contact({ id, data }: ContactProps) {
  const mailRef = useRef<HTMLAnchorElement>(null);
  const [label, setLabel] = useState("Copy email");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(data.email);
      setLabel("Email copied");
    } catch {
      const el = mailRef.current;
      if (el) {
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
      setLabel("Selected, press Ctrl+C");
    }
    setTimeout(() => setLabel("Copy email"), 2400);
  };

  return (
    <Reveal
      as="section"
      id={id}
      className="mt-[var(--section-gap)] rounded-[var(--radius-lg)] bg-primary p-[clamp(24px,5vw,64px)] text-white"
    >
      <h2 className="text-[length:var(--title-display)] font-semibold">
        {data.title[0]}
        <br />
        <em className="not-italic text-accent">{data.title[1]}</em>
      </h2>
      <div className="mt-[26px] flex flex-wrap items-center gap-x-5 gap-y-3.5">
        <a
          ref={mailRef}
          href={`mailto:${data.email}`}
          className="text-[length:var(--text-mail)] [overflow-wrap:anywhere] hover:underline"
        >
          {data.email}
        </a>
        <button
          type="button"
          onClick={copy}
          className="cursor-pointer rounded-[var(--radius-full)] bg-accent px-[26px] py-3 font-medium text-primary transition-transform duration-[var(--transition-fast)] hover:scale-[1.06]"
        >
          {label}
        </button>
      </div>
      <Footer name={data.name} socials={data.socials} />
    </Reveal>
  );
}
