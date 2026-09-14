"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../Data/data.js";

import { Sparkles } from "lucide-react";

const ProjectCard = ({ image, title, description, url, github }) => {
  return (
    <article className="bg-[#12121a] border border-[#2a2a35] hover:border-primary/30 transition-all duration-300 rounded-[24px] flex flex-col group w-full p-3 md:p-4">
      <div className="relative h-44 bg-[#161621] rounded-2xl overflow-hidden border border-[#2a2a35] flex items-center justify-center p-6 w-full">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
        
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <h4 className="text-primary font-bold text-lg md:text-xl text-center z-10 leading-snug px-4">
            {title === "AI Text-to-Image Generator" ? "Transform your words into images with AI" : title}
          </h4>
        )}
      </div>

      <div className="pt-6 px-2 md:px-3 flex flex-col flex-grow">
        <h3 className="font-headline text-lg md:text-xl text-white mb-3 font-bold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-[#8c8c9a] text-sm leading-relaxed mb-8 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center gap-3 mt-auto">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#242533] hover:bg-[#2d2e3f] text-white py-3.5 px-6 rounded-xl font-bold text-sm transition-colors flex-grow flex items-center justify-center gap-2"
          >
            Live Demo
            <Sparkles size={16} className="text-primary" />
          </Link>
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#242533] hover:bg-[#2d2e3f] p-3.5 rounded-xl text-white transition-colors flex items-center justify-center shrink-0"
            aria-label="GitHub repository"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectSection = () => {
  return (
    <section id="projects" className="w-full mt-10 md:mt-32">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-[40px] font-bold text-on-surface mb-4">
            Featured <span className="text-primary italic">Creations</span>
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <span>A selection of my most impactful digital solutions.</span>
            <Link
              href="#"
              className="text-primary font-mono text-sm hover:underline flex items-center gap-1"
            >
              View All Projects
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-[1100px] mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
