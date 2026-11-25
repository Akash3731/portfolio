import About from "@/components/sections/home/About";
import Contact from "@/components/sections/home/Contact";
import Hero from "@/components/sections/home/Hero";
import Path from "@/components/sections/home/Path";
import SelectedWork from "@/components/sections/home/SelectedWork";
import Services from "@/components/sections/home/Services";
import ToolsMarquee from "@/components/sections/home/ToolsMarquee";
import { homeAbout } from "@/data/fallbacks/home-about";
import { homeContact } from "@/data/fallbacks/home-contact";
import { homeHero } from "@/data/fallbacks/home-hero";
import { homePath } from "@/data/fallbacks/home-path";
import { homeServices } from "@/data/fallbacks/home-services";
import { homeTools } from "@/data/fallbacks/home-tools";
import { homeWork } from "@/data/fallbacks/home-work";

export default function Home() {
  return (
    <main>
      <Hero data={homeHero} />
      <About data={homeAbout} workId="work" />
      <Services data={homeServices} />
      <SelectedWork data={homeWork} />
      <Path data={homePath} />
      <ToolsMarquee data={homeTools} />
      <Contact id="contact" data={homeContact} />
    </main>
  );
}
