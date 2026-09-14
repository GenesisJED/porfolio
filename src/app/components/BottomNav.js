"use client";
import { Home, Rocket, Terminal, Send } from "lucide-react";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 w-full z-50 md:hidden bg-[#16162a] border-t border-primary/20 shadow-[0_-8px_30px_rgba(0,0,0,0.85)]">
      <div className="flex justify-around items-center py-2 px-6">
        <a
          href="#"
          className="flex flex-col items-center bg-primary/20 text-primary rounded-full p-1.5 active:bg-surface-variant transition-all duration-200 active:scale-110"
          aria-label="Home"
        >
          <Home size={20} />
        </a>
        <a
          href="#projects"
          className="flex flex-col items-center text-on-surface-variant p-1.5 active:bg-surface-variant transition-all duration-200 active:scale-110 rounded-full"
          aria-label="Projects"
        >
          <Rocket size={20} />
        </a>
        <a
          href="#skills"
          className="flex flex-col items-center text-on-surface-variant p-1.5 active:bg-surface-variant transition-all duration-200 active:scale-110 rounded-full"
          aria-label="Skills"
        >
          <Terminal size={20} />
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center text-on-surface-variant p-1.5 active:bg-surface-variant transition-all duration-200 active:scale-110 rounded-full"
          aria-label="Contact"
        >
          <Send size={20} />
        </a>
      </div>
    </nav>
  );
};

export default BottomNav;
