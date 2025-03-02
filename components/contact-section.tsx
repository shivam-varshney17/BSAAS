"use client"

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

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
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration?
            I'd love to hear from you.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
      className="space-y-8"
    >
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
        <p className="text-gray-300">
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
            <div className="p-3 rounded-full bg-gray-800 text-white">
              {detail.icon}
            </div>
            <div>
              <h4 className="font-medium text-white">{detail.title}</h4>
              {detail.link ? (
                <a 
                  href={detail.link} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-gray-400">{detail.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="pt-6">
        <h4 className="text-lg font-medium text-white mb-3">Follow Me</h4>
        <div className="flex gap-4">
          <SocialButton href="https://github.com" label="GitHub" />
          <SocialButton href="https://linkedin.com" label="LinkedIn" />
          <SocialButton href="https://twitter.com" label="Twitter" />
        </div>
      </div>
    </motion.div>
  )
}

function SocialButton({ href, label }: { href: string, label: string }) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "px-4 py-2 rounded-md bg-gray-800 text-gray-300",
        "hover:bg-gray-700 hover:text-white transition-colors"
      )}
    >
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
        "p-6 rounded-xl",
        "bg-gradient-to-br from-gray-800 to- gray-900 border border-gray-700",
        "backdrop-filter backdrop-blur-sm"
      )}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                required
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Your email"
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                required
              />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
              required
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Your message"
              className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 min-h-[120px]"
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
              className="w-full group flex justify-center items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-md border-0 font-medium shadow-lg hover:shadow-blue-700/20 transition-all duration-300"
            >
              Send Message
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.span>
            </motion.button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  )
}