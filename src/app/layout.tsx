import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { siteNav } from "@/data/fallbacks/site-nav";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Akash Kamble | Full stack developer",
  description:
    "Akash Kamble designs and builds websites and software for businesses: full stack developer and designer in Pune, with 2+ years shipping SaaS platforms and client websites.",
};

export const viewport: Viewport = {
  themeColor: "#C9D6C4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <head>
        {/* Flags JS so scroll-reveal content stays visible when scripts are unavailable. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.setAttribute('data-js','')" }} />
      </head>
      <body suppressHydrationWarning>
        <SmoothScroll>
          <div className="mx-auto max-w-[var(--container-max)] p-[var(--page-margin)]">
            <div className="rounded-[var(--radius-xl)] bg-[var(--surface-card)] p-[var(--section-margin)]">
              <Navbar items={siteNav} contactId="contact" />
              {children}
            </div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
