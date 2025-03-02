"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Technology {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'ai' | 'devops'
}

const technologies: Technology[] = [
  // Frontend
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'frontend' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'frontend' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'backend' },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', category: 'backend' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'backend' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'backend' },
  
  // AI
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', category: 'ai' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', category: 'ai' },
  { name: 'OpenAI', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg', category: 'ai' },
  { name: 'Langchain', icon: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4', category: 'ai' },
  { name: 'Hugging Face', icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg', category: 'ai' },
  
  // DevOps
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'devops' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', category: 'devops' },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'devops' },
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'devops' },
]

export function TechStackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  
  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden">
      {/* AI-themed background */}
      <div className="absolute inset-0 bg-cyber-black">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-neon-blue/50"></div>
            <h2 className="text-3xl md:text-4xl font-bold mx-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
                Tech Stack
              </span>
            </h2>
            <div className="h-px w-8 bg-neon-purple/50"></div>
          </div>
          <p className="text-gray-400 max-w-md mx-auto text-sm md:text-base">
            The technologies and frameworks I use to build intelligent AI systems and applications
          </p>
        </motion.div>
        
        <div className="space-y-16">
          <TechCategory 
            title="AI & Machine Learning" 
            subtitle="Building intelligent systems"
            color="neon-pink"
            technologies={technologies.filter(tech => tech.category === 'ai')} 
          />
          
          <TechCategory 
            title="Frontend Development" 
            subtitle="Creating seamless interfaces"
            color="neon-blue"
            technologies={technologies.filter(tech => tech.category === 'frontend')} 
          />
          
          <TechCategory 
            title="Backend & Databases" 
            subtitle="Powering robust applications"
            color="neon-purple"
            technologies={technologies.filter(tech => tech.category === 'backend')} 
          />
          
          <TechCategory 
            title="DevOps & Cloud" 
            subtitle="Scaling with confidence"
            color="neon-blue"
            technologies={technologies.filter(tech => tech.category === 'devops')} 
          />
        </div>
      </div>
    </section>
  )
}

function TechCategory({ 
  title, 
  subtitle,
  color,
  technologies 
}: { 
  title: string, 
  subtitle: string,
  color: string,
  technologies: Technology[] 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  
  // Helper for color classes
  const getColorClasses = (colorName: string) => {
    switch(colorName) {
      case 'neon-blue':
        return 'bg-neon-blue';
      case 'neon-purple':
        return 'bg-neon-purple';
      case 'neon-pink':
        return 'bg-neon-pink';
      default:
        return 'bg-neon-blue';
    }
  };
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white font-mono inline-flex items-center">
          <span className={`inline-block w-3 h-3 rounded-full ${getColorClasses(color)} mr-2`}></span>
          {title}
        </h3>
        <p className="text-gray-400 text-sm ml-5">{subtitle}</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} technology={tech} index={index} isInView={isInView} color={color} />
        ))}
      </div>
    </motion.div>
  )
}

function TechCard({ 
  technology, 
  index, 
  isInView,
  color
}: { 
  technology: Technology, 
  index: number,
  isInView: boolean,
  color: string
}) {
  // Helper for glow color classes
  const getGlowClasses = (colorName: string) => {
    switch(colorName) {
      case 'neon-blue':
        return 'bg-neon-blue';
      case 'neon-purple':
        return 'bg-neon-purple';
      case 'neon-pink':
        return 'bg-neon-pink';
      default:
        return 'bg-neon-blue';
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="flex flex-col items-center"
    >
      <motion.div 
        className="relative mb-3 w-16 h-16 flex items-center justify-center"
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.2 } 
        }}
      >
        {/* Glowing Background */}
        <div className={`absolute inset-0 rounded-full opacity-20 ${getGlowClasses(color)} blur-lg`}></div>
        
        {/* Image Container */}
        <div className="relative z-10">
          <img 
            src={technology.icon} 
            alt={technology.name} 
            className="w-12 h-12 object-contain"
          />
        </div>
      </motion.div>
      <span className="text-sm text-gray-300 font-mono">{technology.name}</span>
    </motion.div>
  )
}