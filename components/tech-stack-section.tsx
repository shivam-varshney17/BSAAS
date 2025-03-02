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
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', category: 'frontend' },
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
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm md:text-base">
            The technologies, frameworks, and tools I use to build powerful applications.
          </p>
        </motion.div>
        
        <div className="space-y-12">
          <TechCategory 
            title="Frontend Development" 
            technologies={technologies.filter(tech => tech.category === 'frontend')} 
          />
          
          <TechCategory 
            title="Backend & Databases" 
            technologies={technologies.filter(tech => tech.category === 'backend')} 
          />
          
          <TechCategory 
            title="AI & Machine Learning" 
            technologies={technologies.filter(tech => tech.category === 'ai')} 
          />
          
          <TechCategory 
            title="DevOps & Cloud" 
            technologies={technologies.filter(tech => tech.category === 'devops')} 
          />
        </div>
      </div>
    </section>
  )
}

function TechCategory({ title, technologies }: { title: string, technologies: Technology[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} technology={tech} index={index} isInView={isInView} />
        ))}
      </div>
    </motion.div>
  )
}

function TechCard({ 
  technology, 
  index, 
  isInView 
}: { 
  technology: Technology, 
  index: number,
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 } 
      }}
      className={cn(
        "flex flex-col items-center justify-center p-4 rounded-lg",
        "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700",
        "hover:border-gray-600 transition-all duration-300"
      )}
    >
      <div className="w-12 h-12 mb-3 flex items-center justify-center">
        <img 
          src={technology.icon} 
          alt={technology.name} 
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <span className="text-sm text-gray-300">{technology.name}</span>
    </motion.div>
  )
}