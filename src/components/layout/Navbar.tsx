"use client";

import { MessageCircle } from "lucide-react";
import { useScrollTo } from "@/components/ui/SmoothScroll";
import type { NavItem } from "@/lib/types";

interface NavbarProps {
  items: NavItem[];
  contactId: string;
}

export default function Navbar({ items, contactId }: NavbarProps) {
  const scrollTo = useScrollTo();
  return (
    <nav
      aria-label="Primary"
      className="mb-[var(--nav-gap)] grid h-[var(--navbar-height)] grid-cols-[1fr_auto] items-center gap-2 sm:grid-cols-[1fr_auto_1fr] sm:gap-2.5"
    >
      <div className="flex gap-0.5 sm:col-start-2 sm:gap-1">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollTo(item.id)}
            className="cursor-pointer rounded-[var(--radius-full)] bg-pill px-[0.6rem] py-[0.45rem] text-sm font-medium transition-colors duration-[var(--transition-fast)] hover:bg-accent focus-visible:bg-accent active:bg-accent sm:px-4 sm:py-2"
          >
            {item.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollTo(contactId)}
        aria-label="Let's talk"
        className="inline-flex size-[38px] flex-none cursor-pointer justify-self-end items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-full)] border border-line text-sm font-medium transition-colors duration-[var(--transition-fast)] hover:border-accent hover:bg-accent focus-visible:bg-accent active:bg-accent sm:size-auto sm:px-4 sm:py-2"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        <span className="hidden sm:inline">Let&apos;s talk</span>
      </button>
    </nav>
  );
}
