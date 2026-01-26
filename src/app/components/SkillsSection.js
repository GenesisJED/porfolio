import React from 'react';
import { SKILLS } from '../constants';

const SkillBadge = ({ name, priority }) => {
  const getStyles = () => {
    switch (priority) {
      case 'high':
        return 'px-3 py-1.5 text-xs font-semibold border border-pink-500/20 bg-pink-500/5 text-slate-100';
      case 'medium':
        return 'px-2.5 py-1 text-[10px] font-medium border border-white/10 bg-white/5 text-slate-400';
      default:
        return 'px-2 py-0.5 text-[10px] border border-white/5 bg-transparent text-slate-600';
    }
  };

  return (
    <div className={`rounded-md transition-all duration-300 hover:border-pink-500/40 hover:text-white cursor-default flex items-center justify-center whitespace-nowrap ${getStyles()}`}>
      {name}
    </div>
  );
};

const SkillsSection = () => {
  const categories = ['Frontend', 'Backend', 'DevOps', 'Tools'];

  return (
    <section id="skills" className="py-16 lg:py-40 relative overflow-hidden">
      <div className="mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
            Technical <span className="gradient-text italic">Ecosystem</span>
          </h2>
          <p className="text-slate-500 text-xs tracking-wide">
            Performance & scalability driven stack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div key={cat} className="p-0 lg:p-5 rounded-xl border border-white/[0.03] bg-slate-900/10 hover:bg-slate-900/30 transition-all group">
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-1 h-1 rounded-full ${cat === 'Frontend' ? 'bg-pink-500' : 'bg-purple-500'}`}></div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors">
                  {cat}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <SkillBadge 
                    key={skill.name} 
                    name={skill.name} 
                    priority={skill.priority} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center opacity-30">
          <p className="text-[8px] uppercase tracking-[0.5em] text-slate-500 font-medium">
            Building with precision and care
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;