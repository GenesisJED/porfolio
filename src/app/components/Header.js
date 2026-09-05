"use client";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/10 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-5 md:px-6 py-4">
        <a
          href="#"
          className="font-headline text-2xl font-bold italic text-primary hover:opacity-80 transition-all duration-300 active:scale-95"
        >
          GE
        </a>

        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#projects"
            className="text-on-surface hover:text-primary transition-colors hover:opacity-80 font-mono text-sm"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-on-surface hover:text-primary transition-colors hover:opacity-80 font-mono text-sm"
          >
            Skills
          </a>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center bg-primary-container text-white px-6 py-2 rounded-full font-mono text-sm btn-primary-glow hover:opacity-90 transition-all duration-300 active:scale-95"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
