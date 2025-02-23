"use client"
import Image from "next/image"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const ProjectSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280);
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Dynamic Blog Platform with Dashboard",
      tags: ["React", "Node", "Express", "Firebase", "MongoDB", "Supabase", "Tailwind"],
      description:
        "Full stack development of a blogging platform with complete functionalities. Authentication with Google, creation and management of posts by authenticated users, interaction through comments and likes, and a control panel with differentiated roles (user and admin) for an efficient administration.",
      image: "/images/blog-pt.png",
    },
    {
      id: 2,
      title: "Newsletter App",
      tags: ["NextJs", "Cloudflare", "PayloadCMS"],
      description:
        "A tool that summarizes long articles into short paragraphs using AI.A tool that summarizes long articles into short paragraphs using AI. blog website with animated page transitions. This project uses MDX and NextJS to build the front-end. Framer Motion is used to create page transitions.",
      image: "/images/project-2.png",
    },
    {
      id: 3,
      title: "Feedback Platform",
      tags: ["TS", "Postgres", "DrizzleORM"],
      description:
        "A platform for collecting feedback from users. A tool that summarizes long articles into short paragraphs using AI.A tool that summarizes long articles into short paragraphs using AI.",
      image: "/images/p.png",
    },
    {
      id: 4,
      title: "AI Quiz Generator",
      tags: ["TS", "NextJS", "DrizzleORM"],
      description:
        "A tool that summarizes long articles into short paragraphs using AI.A tool that summarizes long articles into short paragraphs using AI. quiz generator that uses AI to generate questions.",
      image: "/images/project-2.png",
    },
  ]

  const nextSlide = () => {
    if (currentSlide < projects.length - 1) {
      setCurrentSlide((prev) => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1)
    }
  }

  return (
    <section id="projects" className="px-4 py-20 sm:py-24 lg:py-32 sm:px-6 lg:px-8">
      <h2 className="text-xl md:text-3xl font-bold mb-8 sm:mb-12 text-center text-slate-400">My recent projects</h2>

      {/* Mobile Slider */}
      {isMobile && (
        <div className="relative">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-lg transition-all
              ${currentSlide === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700/80 hover:border-primary-500/50"}`}
          >
            <ChevronLeft className="h-6 w-6 text-primary-300" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === projects.length - 1}
            className={`absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-lg transition-all
              ${currentSlide === projects.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700/80 hover:border-primary-500/50"}`}
          >
            <ChevronRight className="h-6 w-6 text-primary-300" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="bg-gray-700/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-700/50">
                    <div className="flex flex-col gap-4">
                      <div className="w-full h-[140px] flex-shrink-0 relative rounded-[2px] overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
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
                          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                          <ExternalLink className="h-4 w-4 text-gray-400" />
                        </div>

                        <DescriptionToggle description={project.description} />

                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((tag, index) => (
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
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-700/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-700/30 hover:border-primary-500/30 transition-colors hover:shadow-sm"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex flex-col gap-4">
                  <div className="w-full sm:w-[200px] h-[140px] flex-shrink-0 relative rounded-[2px] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex sm:flex-col gap-2">
                    <a
                      href="https://blog-genesis.onrender.com/"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-400 transition-colors hover:text-white bg-gray-700/20 sm:bg-transparent px-3 py-2 sm:px-0 sm:py-0 rounded-md sm:rounded-none"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="sm:inline">View Project</span>
                    </a>
                    <a
                      href="https://github.com/GenesisJED/fullstack-blog-mern"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-400 transition-colors hover:text-white bg-gray-700/20 sm:bg-transparent px-3 py-2 sm:px-0 sm:py-0 rounded-md sm:rounded-none"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-4" />
                      <span className="sm:inline">View Repo</span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </div>

                  <DescriptionToggle description={project.description} />

                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, index) => (
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
  const shortDescription = description.split(" ").slice(0, 20).join(" ") + "...";

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