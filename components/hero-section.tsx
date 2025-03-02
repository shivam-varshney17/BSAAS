"use client"

import React, { useEffect, useState } from 'react'
import { Globe } from '@/components/ui/globe'
import { Typewriter } from '@/components/typewriter'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background Globe */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-50 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: Math.max(0.1, 0.5 - scrollY * 0.001)
        }}
      >
        <Globe 
          size={800} 
          speed={0.1} 
          dotCount={150}
          dotColor="hsl(var(--primary))"
          lineColor="rgba(255, 255, 255, 0.2)"
          className="scale-125 md:scale-150"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-2 mb-6"
        >
          <h2 className="text-lg md:text-2xl font-medium text-gray-300">Hello, I'm</h2>
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
              Shivam
            </span>
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-16 flex items-center justify-center mb-8"
        >
          <Typewriter 
            text={[
              "Building Scalable AI & Web Solutions",
              "Blackstone Media",
              "HOA Management",
              "LivePlay",
              "Nuton"
            ]}
            speed={70}
            delay={2000}
            className="text-lg md:text-3xl font-medium text-gray-200"
          />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-md text-gray-300 mb-10 text-lg"
        >
          I create innovative digital experiences that combine cutting-edge AI technology 
          with exceptional user experiences. Specializing in AI agents, full-stack development,
          and scalable web applications.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-2 mb-12"
        >
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white border-0"
            onClick={() => window.location.href = '#projects'}
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-300 text-black bg-white"
            onClick={() => window.location.href = '#contact'}
          >
            Get in Touch
          </Button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center gap-4"
        >
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "p-2 rounded-full bg-gray-900/80 border border-gray-700",
              "hover:bg-gray-800 transition-colors duration-200"
            )}
          >
            <Github className="h-5 w-5" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "p-2 rounded-full bg-gray-900/80 border border-gray-700",
              "hover:bg-gray-800 transition-colors duration-200"
            )}
          >
            <Linkedin className="h-5 w-5" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "p-2 rounded-full bg-gray-900/80 border border-gray-700",
              "hover:bg-gray-800 transition-colors duration-200"
            )}
          >
            <Twitter className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </div>
  )
}