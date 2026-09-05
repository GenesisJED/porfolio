"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../Data/data.js";

const ProjectSection = () => {
  return (
    <section id="projects" className="w-full mt-24 md:mt-32">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map(({ id, image, title, description, url, github }) => (
            <article
              key={id}
              className="glass-card rounded-xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 bg-surface-container-high overflow-hidden border-b border-white/5">
                {image ? (
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-container/30 to-tertiary/20 flex items-center justify-center">
                    <span className="text-primary font-headline text-lg px-4 text-center">
                      {title}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent opacity-50"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-headline text-xl text-on-surface mb-4 font-bold group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {description}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-surface-container-high hover:bg-surface-variant text-on-surface py-2 px-6 rounded-lg font-mono text-sm transition-colors border border-white/10 flex-grow text-center"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-surface-container-high hover:bg-surface-variant p-2 rounded-lg text-on-surface border border-white/10 transition-colors"
                    aria-label="GitHub repository"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
