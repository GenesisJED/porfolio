import React from 'react';
import Image from 'next/image';
import { projects } from "../../../Data/data.js";

const ProjectSection = () => {
  return (
    <section id="skills">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
            Featured <span className="gradient-text italic">Creations</span>
          </h2>
          <p className="text-slate-400">A selection of my most impactful digital solutions.</p>
        </div>
        <a href="#" className="hidden sm:flex items-center gap-2 text-pink-400 font-bold hover:gap-4 transition-all">
          View All Projects
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-0">
        {projects.map(({ id, image, title, description, tags, url, github }) => (
          <div key={id} className="group glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:border-pink-500/30">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-pink-400 transition-colors">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {description}
              </p>

              <div className="flex gap-4">
                <a href={url} className="flex-1 py-3 text-center gradient-bg rounded-xl text-sm font-bold shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 transition-all">
                  Live Demo
                </a>
                <a href={github} className="px-5 py-3 glass rounded-xl border border-white/5 hover:bg-white/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;