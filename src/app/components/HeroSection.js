"use client";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { BaseInfo } from "../../../Data/data.js";

const HeroSection = () => {
  return (
    <section className="relative w-full h-full overflow-hidden">
      <div
        className="pattern-bg hero-fixed-fade"
        style={{ opacity: 0.3 }}
      ></div>

      <div className="container mx-auto px-8 sm:px-20 py-5 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texto izquierda */}
        <div className="md:w-1/2 w-full">
          <h1 className="text-5xl font-semibold tracking-light">
            <span className="block text-primary-500 text-xl md:text-3xl mt-5 italic">{BaseInfo.name}</span>
            <p className="block mt-2 font-semibold text-slate-600 text-2xl md:text-4xl">{BaseInfo.position}</p>
          </h1>

          <p className="mt-2 sm:text-xl md:mt-6 text-black-300 leading-6 md:leading-8">
            {BaseInfo.description}
          </p>
          <div className="flex mt-2 md:mt-10 gap-4">
            <div className="flex mt-4 md:mt-10 gap-6 items-center">
              <div className="flex items-center space-x-2 md:space-x-10">
                <span className="text-sm md:text-md text-blue-900">{BaseInfo.contact}</span>
                <div className="flex items-center space-x-3 md:space-x-5">
                  <Link
                    href="https://www.linkedin.com/in/g%C3%A9nesis-e-602b151b4/"
                    className="text-slate-400 hover:text-slate-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={30} />
                  </Link>
                  <Link
                    href="https://github.com/GenesisJED"
                    className="text-slate-400 hover:text-slate-500 transition-colors"
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

        {/* Imagen flotante derecha */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <div className="hero-dev-float hero-image-wrapper">
            <img
              src="/images/cat-hero2.png"
              alt="Desarrolladora de software"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;