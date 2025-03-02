"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 4,
    title: "Nuton",
    description: "AI-powered SaaS for data analysis and automation. Features custom ML models and no-code workflow builder.",
    image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=2070&auto=format&fit=crop",

    tags: ["Python", "FastAPI", "React", "TensorFlow", "Docker"],
    link: "#",
    github: "https://github.com",
    featured: true
  },
  {
    id: 1,
    title: "Blackstone Media",
    description: "AI-powered marketing automation platform for growth marketing. Leverages GPT-4 for content generation and analytics.",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2070&auto=format&fit=crop",
    tags: ["AI", "Next.js", "TypeScript", "Supabase", "OpenAI"],
    link: "https://blackstonemedia.vercel.app/",
    github: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "LivePlay",
    description: "Sports event management SaaS platform with real-time updates, team management, and scheduling features.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "WebSockets", "AWS"],
    link: "https://www.liveplay.in/",
    github: "https://github.com"
  },
  {
    id: 3,
    title: "HOA Management App",
    description: "Multi-tenant dashboard for HOAs with payment processing, maintenance requests, and community forums.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "AWS"],
    link: "#"
  }
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <section id="projects" className="py-8 md:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm md:text-base">
            A collection of my most significant work in AI and full-stack development.
            Each project represents a unique challenge and innovative solution.
          </p>
        </motion.div>

        {/* Adjusted grid layout for mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 flex justify-center"
        >
          <a
            href="/projects"
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:bg-blue-700 hover:text-indigo-800 text-white font-medium rounded-md flex items-center group transition-all duration-300 shadow-lg hover:shadow-blue-700/20"
          >
            View All Projects
            <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:-translate-y-[2px]" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700",
        "hover:shadow-xl hover:shadow-gray-900/20 transition-all duration-300",
        project.featured ? "md:col-span-2" : "",
        "p-4 sm:p-6"
      )}
    >
      {/* Adjusted image height for mobile */}
      <div className="relative aspect-[16/9] overflow-hidden h-[180px] sm:h-[220px]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>

      {/* Content Section */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
        <div className="space-y-[6px] sm:space-y-[8px]">
          {/* Tags */}
          <div className="flex flex-wrap gap-x-[6px] gap-y-[4px] mb-[6px]">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-black/60 text-gray-200 border-gray-600 font-medium text-xs sm:text-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-gray-100 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-200 text-xs sm:text-sm line-clamp-[3] group-hover:text-white transition-colors font-medium">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-x-[6px] pt-[8px]">
            <a
              href={project.link}
              className="inline-flex items-center text-white bg-blue-600/80 hover:bg-blue-600 px-[10px] py-[6px] rounded transition-colors text-xs sm:text-sm font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
              <ArrowUpRight className="ml-[4px] h-[14px] w-[14px]" />
            </a>

            {project.github && (
              <a
                href={project.github}
                className="inline-flex items-center text-white bg-gray-700/80 hover:bg-gray-700 px-[10px] py-[6px] rounded transition-colors text-xs sm:text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-[4px] h-[14px] w-[14px]" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
