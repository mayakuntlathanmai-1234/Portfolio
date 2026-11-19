import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import SkillsSection from "@/components/sections/Skills";
import WorkSection from "@/components/sections/Work";
import CertificationsSection from "@/components/sections/Certifications";
import ExperienceSection from "@/components/sections/Experience";
import AchievementsSection from "@/components/sections/Achievements";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#f4f2ee]">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <CertificationsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </div>
  );
}
