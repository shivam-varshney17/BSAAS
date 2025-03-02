"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Download, Cpu, Bot, Code, Database, Braces, TerminalSquare, FileCode } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ScrollBaseAnimation from '@/components/ui/scroll-base-animation'

export function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section 
      ref={ref}
      className="min-h-[110vh] relative bg-slate-950 flex flex-col justify-center"
    >
      {/* Enhanced AI Grid background with mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* AI dots pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute h-full w-full [background:radial-gradient(circle_4px_at_center,#4a5568_2%,transparent_0%)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>
      
      {/* Floating AI icons */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ y: -20, x: '10%', opacity: 0.5 }}
          animate={{ 
            y: [-20, 30, -20], 
            x: ['10%', '15%', '10%'],
            opacity: [0.5, 0.8, 0.5] 
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-[15%] left-[10%] text-blue-400/20 z-0"
        >
          <Cpu size={48} />
        </motion.div>
        
        <motion.div 
          initial={{ y: 50, x: '75%', opacity: 0.3 }}
          animate={{ 
            y: [50, 10, 50], 
            x: ['75%', '70%', '75%'],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2 
          }}
          className="absolute top-[25%] right-[15%] text-yellow-400/20 z-0"
        >
          <Bot size={56} />
        </motion.div>
        
        <motion.div 
          initial={{ y: 150, x: '25%', opacity: 0.4 }}
          animate={{ 
            y: [150, 100, 150], 
            x: ['25%', '30%', '25%'],
            opacity: [0.4, 0.7, 0.4] 
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1 
          }}
          className="absolute top-[40%] left-[20%] text-indigo-400/20 z-0"
        >
          <Database size={40} />
        </motion.div>
        
        <motion.div 
          initial={{ y: 200, x: '65%', opacity: 0.3 }}
          animate={{ 
            y: [200, 240, 200], 
            x: ['65%', '60%', '65%'],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3 
          }}
          className="absolute top-[45%] right-[25%] text-green-400/20 z-0"
        >
          <Braces size={52} />
        </motion.div>
        
        <motion.div 
          initial={{ y: 300, x: '40%', opacity: 0.4 }}
          animate={{ 
            y: [300, 340, 300], 
            x: ['40%', '45%', '40%'],
            opacity: [0.4, 0.7, 0.4] 
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4 
          }}
          className="absolute top-[60%] left-[30%] text-purple-400/20 z-0"
        >
          <Code size={46} />
        </motion.div>
        
        <motion.div 
          initial={{ y: 320, x: '85%', opacity: 0.3 }}
          animate={{ 
            y: [320, 280, 320], 
            x: ['85%', '80%', '85%'],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ 
            duration: 19, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5 
          }}
          className="absolute top-[65%] right-[10%] text-red-400/20 z-0"
        >
          <FileCode size={50} />
        </motion.div>
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center pt-32 md:pt-20 relative z-10">
        {/* Update badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="bg-slate-900/70 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 inline-flex items-center space-x-1">
            <span className="text-white text-sm">Hello!</span>
            <span className="mx-2 text-blue-400">✦</span>
            <span className="text-blue-400 font-medium">I'm</span>
            <span className="text-white font-medium ml-1.5">Shivam</span>
            <span className="text-blue-400 ml-1">→</span>
          </div>
        </motion.div>
        
        {/* Main heading with yellow-blue gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 md:mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-500">
              AI Agent Architect 
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 px-2 py-1 rounded-md bg-slate-800/50">
              &
            </span>
            <br className="md:hidden" />
            <span className="mt-2 md:mt-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-400">Developer</span>
          </h1>
        </motion.div>

        {/* Marquee animation - even slower speed */}
        <div className="w-full overflow-hidden my-4">
          <ScrollBaseAnimation 
            baseVelocity={-1} // Reduced from -2 to -1 for even slower speed
            clasname="font-bold text-white"
          >
            Building Intelligent Systems • Web Applications • RAG Solutions
          </ScrollBaseAnimation>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-slate-300 my-8 text-base md:text-lg leading-relaxed"
        >
          Specialized in building intelligent systems with AI agents, RAG-based platforms, 
          and scalable web applications using modern technologies.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white border-0 px-8 py-6 text-lg font-medium rounded-md"
            onClick={() => window.location.href = '#projects'}
          >
            View Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border border-slate-700 hover:border-slate-600 text-white hover:bg-slate-800/50 px-8 py-6 text-lg font-medium rounded-md"
            onClick={() => window.location.href = '#contact'}
          >
            Download Resume
            <Download className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}