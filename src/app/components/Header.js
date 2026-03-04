"use client";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="py-4 transition-all duration-300 border-b border-primary-400/20">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter">
          <span className="gradient-text italic">GE</span>
        </a>

        <div className="flex gap-4 md:gap-8 text-sm font-bold text-white-500">
          <a href="#projects" className="hover:text-primary-600 transition-colors mt-2">Projects</a>
          <a href="#skills" className="hover:text-primary-600 transition-colors mt-2">Skills</a>
          <a href="#contact" className="hover:text-primary-400 transition-colors px-4 py-2 gradient-bg rounded-full text-white shadow-lg shadow-pink-500/20">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
