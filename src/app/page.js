import ContactForm from "./components/ContactForm";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";

export const runtime = "edge";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <div className="container mx-auto px-8 pb-20 sm:px-20">
        <SkillsSection />
        <ProjectSection />
      </div>
      <ContactForm />
    </div>
  );
}