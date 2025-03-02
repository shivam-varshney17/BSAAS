"use client"

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Github as GitHub } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Twitter } from 'lucide-react'

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formState)
    alert('Thanks for your message! This is a demo form.')
  }
  
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Elegant background */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
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
                Get In Touch
              </span>
            </h2>
            <div className="h-px w-8 md:w-12 bg-blue-500/50"></div>
          </div>
          <p className="text-slate-300 max-w-md mx-auto text-sm md:text-base">
            Have a project in mind or want to discuss a potential collaboration?
            I'd love to hear from you.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <ContactInfo />
          <ContactForm 
            formState={formState} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
          />
        </div>
      </div>
    </section>
  )
}

function ContactInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  
  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "shivam.varshney2005@gmail.com",
      link: "mailto:shivam.varshney2005@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "7982188703",
      link: "tel:7982188703"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Delhi, IN",
      link: null
    }
  ]
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8 }}
      className="space-y-8 md:space-y-10"
    >
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Let's Connect</h3>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Feel free to reach out through any of the following channels.
        </p>
      </div>
      
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={detail.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="p-3.5 rounded-full bg-slate-800/80 text-blue-400 border border-blue-500/20 shadow-md">
              {detail.icon}
            </div>
            <div>
              <h4 className="font-medium text-white text-base md:text-lg mb-1">{detail.title}</h4>
              {detail.link ? (
                <a 
                  href={detail.link} 
                  className="text-slate-300 hover:text-blue-400 transition-colors text-sm md:text-base"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-slate-300 text-sm md:text-base">{detail.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="pt-4 md:pt-6">
        <h4 className="text-lg font-medium text-white mb-4">Follow Me</h4>
        <div className="flex flex-wrap gap-3 md:gap-4">
          <SocialButton icon={<GitHub className="h-5 w-5" />} href="https://github.com" label="GitHub" />
          <SocialButton icon={<Linkedin className="h-5 w-5" />} href="https://linkedin.com" label="LinkedIn" />
          <SocialButton icon={<Twitter className="h-5 w-5" />} href="https://twitter.com" label="Twitter" />
        </div>
      </div>
    </motion.div>
  )
}

function SocialButton({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "px-4 py-3 rounded-md flex items-center gap-2",
        "bg-slate-800/80 text-slate-300 border border-slate-700",
        "hover:bg-slate-800 hover:text-blue-400 hover:border-blue-500/30 transition-colors shadow-md",
        "text-sm"
      )}
    >
      {icon}
      {label}
    </motion.a>
  )
}

function ContactForm({ 
  formState, 
  handleChange, 
  handleSubmit 
}: { 
  formState: any, 
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, 
  handleSubmit: (e: React.FormEvent) => void 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className={cn(
        "p-6 md:p-8 rounded-xl",
        "bg-slate-900/80 border border-slate-800",
        "backdrop-filter backdrop-blur-sm shadow-lg"
      )}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 h-12"
                required
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Your email"
                className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 h-12"
                required
              />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1.5">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 h-12"
              required
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Your message"
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 min-h-[140px] resize-none"
              required
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-2"
          >
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full group flex justify-center items-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-md border-0 font-medium shadow-lg hover:shadow-blue-700/20 transition-all duration-300 text-base"
            >
              Send Message
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.span>
            </motion.button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  )
}