interface FooterProps {
  name: string;
  socials: { label: string; href: string }[];
}

export default function Footer({ name, socials }: FooterProps) {
  return (
    <footer className="mt-[clamp(30px,6vw,70px)] flex flex-wrap justify-between gap-x-5 gap-y-2.5 border-t border-[var(--color-line-on-dark)] pt-[18px] text-sm text-[var(--color-text-on-dark-muted)]">
      <span>{name}</span>
      <div className="flex gap-[18px]">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
