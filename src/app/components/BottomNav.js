"use client";
import { Home, Rocket, Terminal, Send } from "lucide-react";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 w-full z-50 md:hidden bg-surface-container/20 backdrop-blur-xl border-t border-white/5 shadow-2xl">
      <div className="flex justify-around items-center py-3 px-6">
        <a
          href="#"
          className="flex flex-col items-center bg-primary/20 text-primary rounded-full p-2 active:bg-surface-variant transition-all duration-200 active:scale-110"
          aria-label="Home"
        >
          <Home size={22} />
        </a>
        <a
          href="#projects"
          className="flex flex-col items-center text-on-surface-variant p-2 active:bg-surface-variant transition-all duration-200 active:scale-110 rounded-full"
          aria-label="Projects"
        >
          <Rocket size={22} />
        </a>
        <a
          href="#skills"
          className="flex flex-col items-center text-on-surface-variant p-2 active:bg-surface-variant transition-all duration-200 active:scale-110 rounded-full"
          aria-label="Skills"
        >
          <Terminal size={22} />
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center text-on-surface-variant p-2 active:bg-surface-variant transition-all duration-200 active:scale-110 rounded-full"
          aria-label="Contact"
        >
          <Send size={22} />
        </a>
      </div>
    </nav>
  );
};

export default BottomNav;
