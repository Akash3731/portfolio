import Image from "next/image";
import type { ReactNode } from "react";
import { PROJECT_ILLUSTRATIONS } from "@/components/ui/illustrations";
import type { Project } from "@/lib/types";

interface ProjectCoverProps {
  project: Project;
  className?: string;
  /** `sizes` hint for next/image. */
  sizes: string;
  children?: ReactNode;
}

/** 16:10 project cover: live-site screenshot, or an illustrated cover for platforms without a public site. */
export default function ProjectCover({ project, className = "", sizes, children }: ProjectCoverProps) {
  const Illustration = PROJECT_ILLUSTRATIONS[project.id];
  return (
    <span
      className={`relative block overflow-hidden ${className}`}
      style={{ background: `linear-gradient(160deg, ${project.gradient[0]}, ${project.gradient[1]})` }}
    >
      {Illustration ? (
        <span className="absolute inset-0">
          <Illustration />
        </span>
      ) : (
        project.image && (
          <Image
            src={project.image}
            alt={`${project.name} website`}
            fill
            sizes={sizes}
            className="object-cover object-top"
          />
        )
      )}
      {children}
    </span>
  );
}
