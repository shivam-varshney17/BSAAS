"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500">Shivam</a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white hover:text-blue-400 text-base font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              Resume <Download className="h-4 w-4" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-3 text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col space-y-1.5">
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-full bg-white"
            ></motion.span>
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-full bg-white"
            ></motion.span>
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-full bg-white"
            ></motion.span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900 border-t border-slate-800"
          >
            <div className="container mx-auto px-4 py-6">
              <ul className="flex flex-col space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white hover:text-blue-400 text-base font-medium transition-colors block py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="pt-4 flex flex-col gap-4 border-t border-slate-800">
                  <ThemeToggle />
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors w-fit"
                  >
                    Resume <Download className="h-4 w-4" />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}