"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-12 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Shivam</h3>
              <p className="text-gray-400 max-w-md">
                Building innovative AI solutions and full-stack applications that solve real-world problems.
                Let's create something amazing together.
              </p>
              
              <div className="flex space-x-4 mt-6">
                <SocialIcon href="https://github.com" icon={<Github size={18} />} />
                <SocialIcon href="https://linkedin.com" icon={<Linkedin size={18} />} />
                <SocialIcon href="https://twitter.com" icon={<Twitter size={18} />} />
                <SocialIcon href="mailto:shivam@example.com" icon={<Mail size={18} />} />
              </div>
            </motion.div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <FooterLink href="#" label="Home" />
                <FooterLink href="#projects" label="Projects" />
                <FooterLink href="#about" label="About" />
                <FooterLink href="#tech-stack" label="Tech Stack" />
                <FooterLink href="#contact" label="Contact" />
              </ul>
            </motion.div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <FooterLink href="#" label="AI Development" />
                <FooterLink href="#" label="Web Applications" />
                <FooterLink href="#" label="Mobile Apps" />
                <FooterLink href="#" label="Cloud Solutions" />
                <FooterLink href="#" label="Consulting" />
              </ul>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm"
        >
          <p>© {currentYear} Shivam. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
    >
      {icon}
    </motion.a>
  )
}

function FooterLink({ href, label }: { href: string, label: string }) {
  return (
    <li>
      <motion.a
        whileHover={{ x: 2 }}
        href={href}
        className="text-gray-400 hover:text-white transition-colors"
      >
        {label}
      </motion.a>
    </li>
  )
}