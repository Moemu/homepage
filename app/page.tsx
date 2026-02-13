import SiteNav from "@/components/site-nav"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ConnectSection from "@/components/connect-section"
import SiteFooter from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <SiteNav />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ConnectSection />
      <SiteFooter />
    </main>
  )
}
