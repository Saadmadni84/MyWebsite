import { SiteNavigation } from "@/components/navigation/site-navigation";
import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <>
      <SiteNavigation />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
      </main>
    </>
  );
}
