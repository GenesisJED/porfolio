import Blog from "./components/Blog";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";

export const runtime = "edge";

export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <HeroSection />
      <ProjectSection />
      <Blog />
    </div>
  );
}