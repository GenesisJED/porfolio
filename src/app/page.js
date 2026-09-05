import ContactForm from "./components/ContactForm";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="pb-24 md:pb-16">
      <HeroSection />
      <ProjectSection />
      <SkillsSection />
      <ContactForm />
    </main>
  );
}
