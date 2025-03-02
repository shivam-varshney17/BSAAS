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
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my most significant work in AI and full-stack development.
            Each project represents a unique challenge and innovative solution.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <a 
            href="/projects" 
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium rounded-md flex items-center group transition-all duration-300 shadow-lg hover:shadow-blue-700/20"
          >
            View All Projects
            <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700",
        "hover:shadow-xl hover:shadow-gray-900/20 transition-all duration-300",
        project.featured ? "md:col-span-2" : ""
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent opacity-80 z-10"></div>
      
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-4">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map(tag => (
              <Badge key={tag} variant="outline" className="bg-black/60 text-gray-200 border-gray-600 font-medium">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gray-100 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-200 text-base md:text-lg line-clamp-2 group-hover:text-white transition-colors font-medium">
            {project.description}
          </p>
          
          <div className="flex items-center gap-4 pt-3">
            <a 
              href={project.link} 
              className="inline-flex items-center text-white bg-blue-600/80 hover:bg-blue-600 px-3 py-1 rounded transition-colors text-base font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View Project</span>
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
            
            {project.github && (
              <a 
                href={project.github} 
                className="inline-flex items-center text-white bg-gray-700/80 hover:bg-gray-700 px-3 py-1 rounded transition-colors text-base font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-1 h-4 w-4" />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}