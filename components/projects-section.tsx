"use client"

import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform, MotionValue } from 'framer-motion'
import { ArrowUpRight, Github, Bot, Terminal, Database, Globe, Code, Cpu, Layers } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github?: string
  featured?: boolean
  icon: React.ReactNode
  color?: string
  year: string
}

// Reordered projects to have Nuton first, then Personal Portfolio
const projects: Project[] = [
  {
    id: 4,
    title: "Nuton",
    description: "Agent SaaS platform enabling no-code agent creation via FastAPI, Pinecone, and Anthropic Claude API.",
    image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=2070&auto=format&fit=crop",
    tags: ["RAG", "FastAPI", "Pinecone", "Anthropic Claude", "Next.js"],
    link: "#",
    github: "https://github.com",
    featured: true,
    icon: <Bot className="h-5 w-5" />,
    color: "#541a05",
    year: "2025"
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description: "Modern developer portfolio with AI-inspired aesthetics, animated interactions, and dark/light mode support.",
    image: "/images/hero-bg.jpg", // Using hero section image
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "https://github.com",
    featured: true,
    icon: <Layers className="h-5 w-5" />,
    color: "#092f5e",
    year: "2024"
  },
  {
    id: 1,
    title: "Blackstone Media",
    description: "White-label agency providing full-stack development, solutions, and growth marketing. End-to-end digital services.",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "TypeScript", "Supabase", "Growth"],
    link: "https://blackstonemedia.vercel.app/",
    github: "https://github.com",
    featured: true,
    icon: <Globe className="h-5 w-5" />,
    color: "#1e1a5e",
    year: "2024"
  },
  {
    id: 2,
    title: "LivePlay",
    description: "Backend development for a sports event management app using Supabase, providing real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    tags: ["Supabase", "Next.js", "TypeScript", "Real-time", "API"],
    link: "https://www.liveplay.in/",
    github: "https://github.com",
    icon: <Database className="h-5 w-5" />,
    color: "#05003c",
    year: "2024"
  },
  {
    id: 3,
    title: "HOA Management",
    description: "Multi-tenant dashboard platform for HOA presidents with payment processing, maintenance requests, and community forums.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Dashboard", "Multi-tenant"],
    link: "#",
    icon: <Terminal className="h-5 w-5" />,
    color: "#421538",
    year: "2025"
  }
]

export function ProjectsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.1 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" ref={containerRef} className="relative overflow-hidden bg-slate-950">
      {/* Elegant background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24 pb-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-24"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-10 bg-blue-500/50"></div>
            <h2 className="text-3xl md:text-4xl font-bold mx-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Projects
              </span>
            </h2>
            <div className="h-px w-10 bg-blue-500/50"></div>
          </div>
          <p className="text-slate-300 max-w-md mx-auto text-sm md:text-base">
            Intelligent systems and applications built with cutting-edge technologies
          </p>
        </motion.div>

        {/* Stacked card layout */}
        <div className="w-full">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.image}
                src={project.image}
                title={project.title}
                color={project.color || "#5196fd"}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                year={project.year}
                tags={project.tags}
                github={project.github}
                link={project.link}
                icon={project.icon}
              />
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 flex justify-center"
        >
          <a
            href="/projects"
            className="relative overflow-hidden rounded-md group"
          >
            <div className="px-5 py-2.5 bg-slate-800/80 hover:bg-slate-700 text-blue-400 rounded-md font-mono text-sm relative overflow-hidden flex items-center border border-blue-500/30">
              <span className="relative z-10 flex items-center">
                <Code className="mr-2 h-4 w-4" />
                View All Projects
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  year: string;
  tags: string[];
  github?: string;
  link: string;
  icon: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
  year,
  tags,
  github,
  link,
  icon
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div
      ref={container}
      className='h-[90vh] flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 15}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[480px] w-[80%] md:w-[70%] rounded-xl p-8 md:p-10 origin-top shadow-xl"
      >
        {/* Header with year and tags */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-white/90 font-mono text-sm">{year}</span>
          <div className="flex flex-wrap gap-2 justify-end">
            {tags.slice(0, 2).map((tag, index) => (
              <span 
                key={index} 
                className="bg-white/15 px-2.5 py-1 rounded-full text-white/90 text-[10px] md:text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <h2 className='text-2xl md:text-3xl text-white font-semibold mb-6'>{title}</h2>
        
        <div className='flex flex-col md:flex-row h-full gap-6 md:gap-10'>
          <div className='w-full md:w-[40%] relative top-[5%]'>
            <p className='text-white/90 text-sm md:text-base mb-6'>{description}</p>
            
            <div className='flex items-center gap-4'>
              <a
                href={link}
                target='_blank'
                rel="noopener noreferrer"
                className='flex items-center gap-2 bg-white/15 hover:bg-white/25 transition-colors px-4 py-2 rounded-md text-white text-sm'
              >
                View Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
              
              {github && (
                <a
                  href={github}
                  target='_blank'
                  rel="noopener noreferrer"
                  className='text-white/80 hover:text-white'
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          <div className='relative w-full md:w-[60%] h-[220px] md:h-[280px] rounded-lg overflow-hidden'>
            {/* Project icon badge */}
            <div className="absolute top-3 left-3 z-20 p-2.5 rounded-full bg-black/30 backdrop-blur-sm text-white">
              {icon}
            </div>
            
            <motion.div
              className='w-full h-full'
              style={{ scale: imageScale }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 z-10"></div>
              <Image 
                src={url} 
                alt={title} 
                fill 
                className="object-cover" 
                unoptimized={url.startsWith('http')}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
