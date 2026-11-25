"use client";

import { addCollection, Icon as Iconify, type IconifyJSON } from "@iconify/react";
import toolIcons from "@/lib/icons/tools.json";

// Bundled locally so icons render without a network round-trip.
(toolIcons as unknown as IconifyJSON[]).forEach((collection) => addCollection(collection));

interface IconProps {
  icon: string;
  className?: string;
}

export default function Icon({ icon, className }: IconProps) {
  return <Iconify icon={icon} className={className} aria-hidden="true" />;
}
