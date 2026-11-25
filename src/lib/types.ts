export type ProjectCategory = "web" | "plat";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  type: string;
  org: string;
  url?: string;
  /** Optimized 16:10 cover in /public; projects without one use an illustrated cover. */
  image?: string;
  gradient: [string, string];
  brief: string;
  part: string;
  /** Optional key features listed in the case study. */
  features?: string[];
  stack: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface HeroData {
  greeting: string;
  /** Use "\n" to set the line break. */
  tagline: string;
}

export interface AboutData {
  tag: string;
  text: string;
  more: string;
}

export type ServiceIllustration = "web" | "saas" | "cms" | "mobile";

export interface Service {
  title: string;
  summary: string;
  points: string[];
  tools: string[];
  illustration: ServiceIllustration;
}

export interface ServicesData {
  title: string;
  tag: string;
  items: Service[];
}

export interface WorkData {
  title: string;
  filters: { id: "all" | ProjectCategory; label: string }[];
  projects: Project[];
}

export interface PathItem {
  period: string;
  role: string;
  place: string;
}

export interface PathData {
  title: string;
  tag: string;
  items: PathItem[];
}

export interface Tool {
  label: string;
  icon: string;
}

export interface ContactData {
  title: [string, string];
  email: string;
  name: string;
  socials: { label: string; href: string }[];
}
