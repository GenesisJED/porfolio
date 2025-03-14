"use client";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { BaseInfo } from "../../../Data/data.js";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (ev) => {
    if (!isHovering) return;
    const rect = ev.currentTarget.getBoundingClientRect();
    const x = ((ev.clientX - rect.left) / rect.width) * 100;
    const y = ((ev.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <section
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="pattern-bg relative w-full h-full default-fade"
        style={{
          opacity: isHovering ? 0 : 0.3,
          transition: "opacity 0.5s ease-in-out",
        }}
      ></div>
      <div
        className="pattern-bg"
        style={{
          WebkitMask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,  rgb(15 23 42) 0%, transparent 35%)`,
          mask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,  rgb(15 23 42) 0%, transparent 35%)`,
          opacity: isHovering ? 0.3 : 0,
        }}
      ></div>
      <div className="opacity-10">
        <div className="absolute top-0 right-0 sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] bg-primary-700/50 rounded-full blur-3xl"></div>
        <div className="absolute top-4 right-4 sm:w-[400px] sm:h-[400px] w-[150px] h-[150px] bg-primary-500/60 rounded-full blur-2xl"></div>
        <div className="absolute top-8 right-8 sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-primary-400/70 rounded-full blur-xl"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-3/4">
          <h1 className="text-5xl font-semibold tracking-light">
            <span className="block text-primary-400 text-xl md:text-3xl mt-5">{ BaseInfo.name }</span>
            <p className="block mt-2 text-2xl md:text-4xl">{ BaseInfo.position }</p>
          </h1>

          <p className="mt-2 sm:text-xl md:mt-6 text-slate-300 leading-8">
            { BaseInfo.description }
          </p>
          <div className="flex mt-2 md:mt-10 gap-4">
            <div className="flex mt-4 md:mt-10 gap-6 items-center">
              <div className="flex items-center space-x-2 md:space-x-10">
                <span className="text-violet-300">{ BaseInfo.contact }</span>
                <div className="flex items-center space-x-3 md:space-x-5">
                  <Link
                    href="https://www.linkedin.com/in/g%C3%A9nesis-e-602b151b4/"
                    className="text-slate-400 hover:text-slate-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={30} />
                  </Link>
                  <Link
                    href="https://github.com/GenesisJED"
                    className="text-slate-400 hover:text-slate-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={30} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;