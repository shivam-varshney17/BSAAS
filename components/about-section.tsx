"use client"

import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, Briefcase, GraduationCap, Bot, Code, Brain, Cpu, Database, GitHub, Globe } from 'lucide-react'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background with elegant styling */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-8 md:w-12 bg-blue-500/50"></div>
            <h2 className="text-3xl md:text-4xl font-bold mx-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                About Me
              </span>
            </h2>
            <div className="h-px w-8 md:w-12 bg-blue-500/50"></div>
          </div>
          <p className="text-slate-300 max-w-2xl mx-auto font-mono text-xs md:text-sm tracking-wide">
            DEVELOPER // STARTUP FOUNDER // PROBLEM SOLVER
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <AboutContent />
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center mb-12 lg:mb-0">
            <AIAgentVizualization />
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
      className="space-y-6 md:space-y-8"
    >
      <div className="inline-block mb-4 px-3 py-1.5 bg-slate-900/60 backdrop-blur-sm rounded-full border border-blue-500/30 font-mono text-xs text-blue-400">
        <span className="mr-2">◉</span>BUILDING THE FUTURE
      </div>
      
      <h3 className="text-2xl md:text-3xl font-bold text-white">Developer & <br className="hidden sm:block" />Startup Founder</h3>
      
      <p className="text-slate-300 text-sm md:text-base leading-relaxed">
        I'm Shivam, a developer specialized in building <span className="text-blue-400">intelligent systems</span> and <span className="text-blue-400">scalable applications</span>. 
        As the founder of <span className="text-blue-400">Blackstone Media</span>, I lead teams to create innovative digital solutions that 
        leverage cutting-edge technologies.
      </p>
      
      <div className="bg-slate-900/40 backdrop-blur-sm p-5 md:p-6 border-l-2 border-blue-500 rounded-r-lg shadow-lg mt-4">
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          My expertise lies in developing <span className="text-blue-400 font-medium">intelligent systems</span> that transform how businesses operate. 
          From RAG-based platforms like <span className="text-blue-400">Nuton</span> to custom software solutions for sports and HOA management, 
          I combine technical prowess with a keen eye for business applications.
        </p>
      </div>
      
      <div className="space-y-5 md:space-y-6 pt-4">
        <TimelineItem 
          icon={<Bot className="h-5 w-5" />}
          title="Founding Member"
          subtitle="Blackstone Media | Growth, Web Development, Solutions"
          description="Building a white-label provider for full-stack development and digital growth"
          color="blue"
          delay={0.1}
        />
        <TimelineItem 
          icon={<Brain className="h-5 w-5" />}
          title="Nuton Platform"
          subtitle="RAG-Based Startup | FastAPI, Pinecone, Anthropic Claude API"
          description="Intelligent SaaS platform enabling no-code agent creation"
          color="blue"
          delay={0.2}
        />
        <TimelineItem 
          icon={<Cpu className="h-5 w-5" />}
          title="LivePlay & HOA Management"
          subtitle="Backend Developer | Supabase, Next.js, TypeScript"
          description="Multi-tenant dashboard platforms for sports and property management"
          color="blue"
          delay={0.3}
        />
        <TimelineItem 
          icon={<Database className="h-5 w-5" />}
          title="Credit Card Rewards Platform"
          subtitle="Full-Stack Developer | Data-driven application"
          description="Platform for maximizing hotel stays, trips, and rewards through optimization"
          color="blue"
          delay={0.4}
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pt-4 md:pt-6"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative overflow-hidden inline-block"
        >
          <button className="group flex items-center px-6 py-3 bg-slate-800/80 hover:bg-slate-800 text-blue-400 rounded-md font-mono text-sm md:text-base shadow-md relative overflow-hidden border border-blue-500/20">
            <span className="relative z-10 flex items-center">
              <Code className="mr-2 h-5 w-5" />
              Download Resume
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.span>
            </span>
            <span className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function TimelineItem({ 
  icon, 
  title, 
  subtitle, 
  description,
  color,
  delay 
}: { 
  icon: React.ReactNode, 
  title: string, 
  subtitle: string,
  description: string,
  color: string,
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
      className="flex items-start gap-3 group"
    >
      <div className="p-2.5 rounded-full bg-slate-900/60 text-blue-400 border border-blue-500/30 group-hover:border-blue-500 transition-colors shadow-md">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="font-bold text-white text-base md:text-lg">{title}</h4>
        <p className="text-sm text-slate-300 font-mono">{subtitle}</p>
        <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

function AIAgentVizualization() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  
  // Fix window is not defined error with useEffect and useState
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    // Only access window in browser environment
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkMobile()
    
    // Add resize listener
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-[320px] md:max-w-md h-[300px] md:h-[450px]"
    >
      {/* Central visualization */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          {/* Pulsing core */}
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.3)', 
                '0 0 60px rgba(59, 130, 246, 0.5)', 
                '0 0 20px rgba(59, 130, 246, 0.3)'
              ] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-24 md:w-32 h-24 md:h-32 rounded-full bg-blue-500 opacity-70 backdrop-blur-md"
          >
            <div className="absolute inset-0 rounded-full bg-slate-900/70 backdrop-blur-md m-1"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-blue-500/30 border-dashed"
            ></motion.div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Brain className="h-10 w-10 md:h-12 md:w-12 text-blue-400" />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Orbiting elements - fewer on mobile for better performance */}
          {['RAG', 'NLP', 'ML', 'LLM'].map((tech, i) => (
            <motion.div
              key={tech}
              className="absolute w-14 md:w-16 h-14 md:h-16"
              style={{ top: '50%', left: '50%' }}
              animate={{ 
                rotate: 360,
                x: Math.cos(2 * Math.PI / 4 * i) * (isMobile ? 90 : 120),
                y: Math.sin(2 * Math.PI / 4 * i) * (isMobile ? 90 : 120)
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
            >
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="bg-slate-900/80 backdrop-blur-md p-2 rounded-md border border-blue-500/30 text-xs font-mono text-blue-400"
              >
                {tech}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Connection lines - simplified for mobile */}
      <svg className="absolute inset-0 z-10" viewBox="0 0 400 450">
        <motion.path 
          d="M200,225 L50,100" 
          stroke="rgba(59, 130, 246, 0.3)" 
          strokeWidth="1" 
          fill="none"
          strokeDasharray="5,5"
          animate={{ strokeDashoffset: [0, 100] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M200,225 L50,300" 
          stroke="rgba(59, 130, 246, 0.3)" 
          strokeWidth="1" 
          fill="none"
          strokeDasharray="5,5"
          animate={{ strokeDashoffset: [0, 100] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M200,225 L350,100" 
          stroke="rgba(59, 130, 246, 0.3)" 
          strokeWidth="1" 
          fill="none"
          strokeDasharray="5,5"
          animate={{ strokeDashoffset: [0, 100] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M200,225 L350,300" 
          stroke="rgba(59, 130, 246, 0.3)" 
          strokeWidth="1" 
          fill="none"
          strokeDasharray="5,5"
          animate={{ strokeDashoffset: [0, 100] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      
      {/* Data systems positions - mobile-friendly positioning */}
      <motion.div
        className="absolute top-[75px] md:top-[100px] left-[40px] md:left-[50px] z-20 bg-slate-900/80 backdrop-blur-sm p-2 rounded-md border-l-2 border-blue-500 shadow-md"
        initial={{ x: -20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center space-x-2">
          <Database className="h-4 w-4 text-blue-400" />
          <span className="text-xs font-mono whitespace-nowrap">Vector DB</span>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-[75px] md:top-[300px] left-[40px] md:left-[50px] z-20 bg-slate-900/80 backdrop-blur-sm p-2 rounded-md border-l-2 border-blue-500 shadow-md"
        initial={{ x: -20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex items-center space-x-2">
          <Bot className="h-4 w-4 text-blue-400" />
          <span className="text-xs font-mono whitespace-nowrap">Agent Engine</span>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute top-[75px] md:top-[100px] right-[40px] md:right-[50px] z-20 bg-slate-900/80 backdrop-blur-sm p-2 rounded-md border-l-2 border-blue-500 shadow-md"
        initial={{ x: 20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex items-center space-x-2">
          <Cpu className="h-4 w-4 text-blue-400" />
          <span className="text-xs font-mono whitespace-nowrap">Inference</span>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-[75px] md:top-[300px] right-[40px] md:right-[50px] z-20 bg-slate-900/80 backdrop-blur-sm p-2 rounded-md border-l-2 border-blue-500 shadow-md"
        initial={{ x: 20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4 text-blue-400" />
          <span className="text-xs font-mono whitespace-nowrap">Knowledge</span>
        </div>
      </motion.div>
      
      {/* Floating data stream - mobile-optimized */}
      <div className="absolute bottom-4 left-0 right-0 overflow-hidden h-8 z-10">
        <motion.div 
          className="data-stream h-full w-full opacity-30"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-xs font-mono text-blue-400">Building intelligent systems</span>
        </motion.div>
      </div>
    </motion.div>
  )
}