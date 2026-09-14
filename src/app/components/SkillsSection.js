import { SKILLS } from "../constants";

const categoryConfig = {
  Frontend: { dot: "bg-primary", glow: "shadow-[0_0_8px_#ffb1c0]", hover: "hover:border-primary/50" },
  Backend: { dot: "bg-secondary", glow: "shadow-[0_0_8px_#e6feff]", hover: "hover:border-secondary/50" },
  DevOps: { dot: "bg-tertiary", glow: "shadow-[0_0_8px_#ecb2ff]", hover: "hover:border-tertiary/50" },
  Tools: { dot: "bg-white", glow: "shadow-[0_0_8px_#ffffff]", hover: "hover:border-white/50" },
};

const SkillsSection = () => {
  const categories = ["Frontend", "Backend", "DevOps", "Tools"];

  return (
    <section id="skills" className="w-full mt-20 md:mt-28">
      <div className="w-full max-w-[1100px] mx-auto px-5 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-[40px] font-bold text-on-surface mb-2">
            Technical <span className="text-primary italic">Ecosystem</span>
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant">
            Performance &amp; scalability driven stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {categories.map((cat) => {
            const config = categoryConfig[cat];
            return (
              <div
                key={cat}
                className="glass-card glass-card-hover p-5 md:p-6 rounded-xl flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-2 h-2 rounded-full ${config.dot} ${config.glow}`}></div>
                  <h3 className="font-mono text-xs uppercase tracking-[0.1em] font-bold text-on-surface">
                    {cat}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {SKILLS.filter((s) => s.category === cat).map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-3 py-1.5 bg-surface-container-high border border-white/5 rounded-lg font-mono text-xs text-on-surface transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${config.hover}`}
                      >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant">
            Building with precision and care
          </span>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
