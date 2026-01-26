"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-slate-950 shadow-2xl border-b border-purple-500/20' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter">
          <span className="gradient-text">GE.</span>
          <span className="hidden sm:inline">Genesis</span>
        </a>
        
        <div className="flex gap-8 text-sm font-medium">
          <a href="#projects" className="hover:text-pink-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-pink-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-pink-400 transition-colors px-4 py-2 gradient-bg rounded-full text-white shadow-lg shadow-pink-500/20">Hire Me</a>
        </div>
      </div>
      {/* Subtle gradient line when scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      )}
    </nav>
  );
};

export default Navbar;
