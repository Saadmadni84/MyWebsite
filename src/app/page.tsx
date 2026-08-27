import { HeroSection } from "@/components/sections/hero-section";
import { SiteNavigation } from "@/components/navigation/site-navigation";

export default function Home() {
  return (
    <>
      <SiteNavigation />
      <main id="main-content" className="flex-1">
        <HeroSection />
      </main>
    </>
  );
}
