import ContactForm from "./components/ContactForm";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";

export const runtime = "edge";

export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <ContactForm />
    </div>
  );
}