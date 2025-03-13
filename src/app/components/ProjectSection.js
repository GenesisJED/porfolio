"use client";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useState, useEffect } from "react";
import { projects } from "../../../Data/data.js";

const ProjectSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, []);

  return (
    <section id="projects" className="px-0 py-20 sm:py-24 lg:py-40 sm:px-6 lg:px-8">
      <h2 className="text-xl md:text-3xl font-bold mb-8 sm:mb-12 text-center text-slate-400">
        My Latest Projects
      </h2>

      {/* Mobile Slider */}
      {isMobile && (
        <div className="relative">
          <div
            className="overflow-hidden"
            onTouchStart={(e) => {
              const touch = e.touches[0]
              setTouchStart(touch.clientX)
            }}
            onTouchMove={(e) => {
              if (touchStart === null) return

              const touch = e.touches[0]
              const diff = touchStart - touch.clientX

              if (diff > 50 && currentSlide < projects.length - 1) {
                setCurrentSlide((prev) => prev + 1)
                setTouchStart(null)
              } else if (diff < -50 && currentSlide > 0) {
                setCurrentSlide((prev) => prev - 1)
                setTouchStart(null)
              }
            }}
            onTouchEnd={() => {
              setTouchStart(null)
            }}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map(({id, image, title, description, tags}) => (
                <div key={id} className="w-full flex-shrink-0">
                  <div className="bg-gray-700/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-700/50">
                    <div className="flex flex-col gap-4">
                      <div className="w-full h-[140px] flex-shrink-0 relative rounded-[2px] overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex gap-2">
                        <a
                          href="https://blog-genesis.onrender.com/"
                          className="flex-1 inline-flex items-center justify-center gap-2 text-sm text-gray-400 transition-colors hover:text-white px-3 py-2 rounded-md"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-5 w-5" />
                          <span>Project</span>
                        </a>
                        <a
                          href="https://github.com/GenesisJED/fullstack-blog-mern"
                          className="flex-1 inline-flex items-center justify-center gap-2 text-sm text-gray-400 transition-colors hover:text-white px-3 py-2 rounded-md"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                          <span>Repo</span>
                        </a>
                      </div>

                      <div className="flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-white">{title}</h3>
                        </div>

                        <DescriptionToggle description={description} />

                        <div className="flex flex-wrap gap-1">
                          {tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-0.5 text-xs rounded-full bg-primary-400/20 text-primary-200 border border-primary-400/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Grid */}
      {!isMobile && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map(({id, image, title, description, tags}) => (
            <div
              key={id}
              className="bg-gray-700/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-700/30 hover:border-primary-500/30 transition-colors hover:shadow-sm"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex flex-col gap-4 md:w-2/5 lg:w-2/5">
                  <div className="w-full h-[140px] md:h-[120px] lg:h-[140px] flex-shrink-0 relative rounded-[2px] overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex md:flex-row lg:flex-col gap-2">
                    <a
                      href="https://blog-genesis.onrender.com/"
                      className="flex-1 md:flex-none inline-flex items-center justify-center md:justify-start gap-2 text-sm text-gray-400 transition-colors hover:text-white bg-gray-700/20 md:bg-transparent px-3 py-2 md:px-2 md:py-1 lg:px-0 lg:py-0 rounded-md md:rounded-sm lg:rounded-none"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="md:inline">View Project</span>
                    </a>
                    <a
                      href="https://github.com/GenesisJED/fullstack-blog-mern"
                      className="flex-1 md:flex-none inline-flex items-center justify-center md:justify-start gap-2 text-sm text-gray-400 transition-colors hover:text-white bg-gray-700/20 md:bg-transparent px-3 py-2 md:px-2 md:py-1 lg:px-0 lg:py-0 rounded-md md:rounded-sm lg:rounded-none"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-4" />
                      <span className="md:inline">View Repo</span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col flex-grow md:w-3/5 lg:w-3/5">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                  </div>

                  <DescriptionToggle description={description} />

                  <div className="flex flex-wrap gap-1">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 text-xs rounded-full bg-primary-500/20 text-primary-200 border border-primary-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

const DescriptionToggle = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const shortDescription = description.split(" ").slice(0, 20).join(" ") + "..."

  return (
    <p className="text-sm text-gray-400 mb-4">
      {isExpanded ? description : shortDescription}
      <button onClick={() => setIsExpanded(!isExpanded)} className="text-primary-400 hover:underline ml-1">
        {isExpanded ? "See Less" : "See More"}
      </button>
    </p>
  )
}

export default ProjectSection;