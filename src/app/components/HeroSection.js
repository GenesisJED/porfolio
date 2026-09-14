import { BaseInfo } from "../../../Data/data.js";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden min-h-[80vh] flex items-center justify-center pt-10 pb-12 md:pt-32 md:pb-16"
    >
      <img
        src="/images/galaxy-bg.svg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 pointer-events-none z-0"
      />
      <img
        src="/images/figures-bg.svg"
        alt=""
        className="absolute bottom-0 right-0 w-40 h-40 opacity-20 pointer-events-none z-0"
      />
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 z-10 relative">
        {/* Left Column: Heading & Intro */}
        <div className="w-full lg:w-[50%] flex flex-col gap-6 z-10 relative items-center text-center lg:items-start lg:text-left animate-fade-in-up">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl md:text-[44px] lg:text-[52px] xl:text-[56px] font-extrabold text-on-surface leading-[1.2] tracking-[-0.02em] mb-6">
              <span className="block text-[#ff6b9d] drop-shadow-[0_0_20px_rgba(255,107,157,0.5)] text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] xl:text-[36px] mb-4">
                Hello, my name is Genesis
              </span>
              <span className="block text-white leading-[1.1]">I am a Full Stack Developer</span>
            </h1>
          </div>

          <p className="text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed mt-0 md:mt-1">
            {BaseInfo.description}
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-4 mt-4 lg:items-start">
            <span className="font-mono text-sm text-secondary">
              Find me on LinkedIn &amp; GitHub
            </span>
            <div className="flex items-center gap-6 lg:justify-start">
              <a
                className="text-on-surface-variant hover:text-white transition-all duration-300 ease-out hover:scale-105"
                href="https://www.linkedin.com/in/g%C3%A9nesis-e-602b151b4/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a
                className="text-on-surface-variant hover:text-white transition-all duration-300 ease-out hover:scale-105"
                href="https://github.com/GenesisJED"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Image Card */}
        <div
          className="w-full lg:w-[48%] flex justify-center lg:justify-end items-end self-end animate-fade-in-up mt-6 lg:mt-auto"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="hero-dev-float relative w-full max-w-[460px] rounded-2xl overflow-hidden border border-[#262438] bg-[#121124]">
            <img
              src="/images/banner-img.png"
              alt="Desarrolladora de software"
              className="w-full h-auto object-cover block rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
