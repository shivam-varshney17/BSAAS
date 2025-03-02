"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, Briefcase, GraduationCap } from 'lucide-react'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
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
              About Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey, experience, and the skills I've developed along the way.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <AboutContent />
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <InteractiveGlobe />
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold text-white">Full-Stack Developer & AI Specialist</h3>
      
      <p className="text-gray-300">
        I'm Shivam, a passionate developer with expertise in building AI-powered web applications
        and scalable systems. Currently pursuing my BTech in Computer Science Engineering at VIT, 
        I've worked on diverse projects from enterprise solutions to innovative startups.
      </p>
      
      <p className="text-gray-300">
        My focus is on creating intelligent applications that leverage the latest in AI technology
        while maintaining exceptional user experiences. I specialize in developing custom AI agents,
        natural language processing systems, and data-driven applications.
      </p>
      
      <div className="space-y-4 pt-4">
        <TimelineItem 
          icon={<Briefcase className="h-5 w-5" />}
          title="Full-Stack Developer"
          subtitle="Freelance | 2024 - Present"
          delay={0.1}
        />
        <TimelineItem 
          icon={<Briefcase className="h-5 w-5" />}
          title="AI Developer"
          subtitle="Blackstone Media | 2023 - Present"
          delay={0.2}
        />
        <TimelineItem 
          icon={<GraduationCap className="h-5 w-5" />}
          title="BTech Computer Science Engineering"
          subtitle="VIT | 3rd Year"
          delay={0.3}
        />
        <TimelineItem 
          icon={<Award className="h-5 w-5" />}
          title="AWS Certified Solutions Architect"
          subtitle="Professional Level"
          delay={0.4}
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 group flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-md font-medium border-0 shadow-lg hover:shadow-blue-700/20 transition-all duration-300"
          onClick={() => window.open('resume.pdf', '_blank')}
        >
          Download Resume
          <motion.span
            className="ml-2"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

function TimelineItem({ icon, title, subtitle, delay }: { 
  icon: React.ReactNode, 
  title: string, 
  subtitle: string,
  delay: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-3"
    >
      <div className="p-2 rounded-full bg-gray-800 text-white">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-white">{title}</h4>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </motion.div>
  )
}

function ImageGrid() {
  // This component will be replaced completely
}

function InteractiveGlobe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[400px] max-w-md"
    >
      <div className="globe-container w-full h-full rounded-full relative overflow-hidden">
        <div className="globe bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 w-full h-full rounded-full border border-blue-500/20 relative">
          <div className="globe-highlight absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/10 rounded-full blur-md"></div>
          
          {/* Orbit elements */}
          <div className="orbit orbit-1 absolute top-0 left-0 w-full h-full rounded-full border border-blue-500/30 animate-spin-slow"></div>
          <div className="orbit orbit-2 absolute top-[5%] left-[5%] w-[90%] h-[90%] rounded-full border border-purple-500/20 animate-spin-slower"></div>
          
          {/* Tech nodes on orbits */}
          <motion.div 
            className="tech-node absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-md shadow-blue-500/50"
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          
          <motion.div 
            className="tech-node absolute bottom-5 right-10 w-4 h-4 rounded-full bg-purple-500 shadow-md shadow-purple-500/50"
            animate={{ rotate: -360 }} 
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          
          <motion.div 
            className="tech-node absolute top-1/4 right-0 w-2 h-2 rounded-full bg-green-500 shadow-md shadow-green-500/50"
            animate={{ rotate: 360 }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          
          <motion.div 
            className="tech-node absolute bottom-1/4 left-5 w-3 h-3 rounded-full bg-amber-500 shadow-md shadow-amber-500/50"
            animate={{ rotate: -360 }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          
          {/* Add glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 rounded-full blur-xl"></div>
        </div>
        
        {/* Infinity scroll effect for skills */}
        <div className="skills-container absolute -bottom-4 left-0 right-0 overflow-hidden h-10">
          <motion.div 
            className="skills flex space-x-6 text-gray-300/80"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>TensorFlow</span>
            <span>AWS</span>
            <span>PostgreSQL</span>
            <span>Docker</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Python</span>
          </motion.div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        .animate-spin-slower {
          animation: spin-slower 40s linear infinite;
        }
        
        .tech-node {
          box-shadow: 0 0 15px currentColor;
        }
      `}</style>
    </motion.div>
  )
}