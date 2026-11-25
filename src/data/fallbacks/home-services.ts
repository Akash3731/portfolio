import type { ServicesData } from "@/lib/types";

export const homeServices: ServicesData = {
  title: "What I do",
  tag: "(Design and development)",
  items: [
    {
      title: "Web development",
      summary:
        "Marketing and product websites in Next.js and React, taken from the first layout to launch. Every page is responsive from a phone to a wide desktop and built to turn visitors into enquiries.",
      points: [
        "Pixel-accurate builds from Figma designs",
        "Interactive product experiences: 3D viewers, model switchers, comparisons and cutaways",
        "Smooth scrolling, motion and scroll-driven storytelling",
        "Optimised images, metadata and fast page loads",
        "Enquiry, quote and WhatsApp flows wired to the client's team",
      ],
      tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      illustration: "web",
    },
    {
      title: "SaaS and backend",
      summary:
        "Multi-tenant platforms and the backend that keeps them running. I design the data model, APIs and access rules, then the background work that runs without anyone pressing a button.",
      points: [
        "Multi-tenant architecture, including a database per tenant where data must stay apart",
        "Role-based access, approval workflows and audit logs",
        "REST APIs secured with JWT and OAuth 2.0",
        "Queues, workers and cron jobs for reminders, invoicing, escalations and renewals",
        "Real-time updates with Socket.IO, caching and rate limits with Redis",
      ],
      tools: ["Node.js", "Express.js", "MongoDB", "MS SQL Server", "Redis", "BullMQ"],
      illustration: "saas",
    },
    {
      title: "CMS and SEO tooling",
      summary:
        "Content tools that let a client's own team run their website. They can rewrite and publish any page without waiting on a developer, and get SEO guidance while they write.",
      points: [
        "Custom CMS for every page, section and image on the site",
        "Rule-based SEO scoring that updates live as content is written",
        "Structured content models that keep the design intact when text changes",
        "Media uploads to cloud storage",
      ],
      tools: ["Next.js", "Node.js", "MongoDB", "AWS S3"],
      illustration: "cms",
    },
    {
      title: "Mobile and payments",
      summary:
        "Cross-platform mobile apps and the payment logic behind paid products. The app, the admin panel and the billing all share one backend.",
      points: [
        "React Native apps built with Expo for Android and iOS",
        "Shared authentication and APIs across web and mobile",
        "Razorpay checkout for plans, subscriptions and credit packs",
        "Automated renewals, credit resets, grace periods and downgrades",
        "Email, SMS and push notifications",
      ],
      tools: ["React Native", "Expo", "Razorpay", "Redux Toolkit"],
      illustration: "mobile",
    },
  ],
};
