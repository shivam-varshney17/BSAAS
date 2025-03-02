"use client"

import React, { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface GlobeProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  speed?: number
  dotSize?: number
  dotCount?: number
  dotColor?: string
  lineColor?: string
}

export function Globe({
  className,
  size = 500,
  speed = 0.2,
  dotSize = 1.5,
  dotCount = 50,
  dotColor = "rgba(255, 255, 255, 0.8)",
  lineColor = "rgba(255, 255, 255, 0.15)",
  ...props
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas dimensions with device pixel ratio for sharpness
    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.scale(dpr, dpr)
    
    // Style canvas
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    
    // Create dots
    const dots: {
      x: number
      y: number
      z: number
      xProject: number
      yProject: number
      originalX: number
      originalY: number
      originalZ: number
    }[] = []
    
    for (let i = 0; i < dotCount; i++) {
      // Generate random spherical coordinates
      const theta = Math.random() * Math.PI * 2 // longitude
      const phi = Math.acos((Math.random() * 2) - 1) // latitude
      const radius = size / 2 - 10 // slightly smaller than canvas
      
      // Convert to Cartesian coordinates
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      
      dots.push({
        x, y, z,
        xProject: 0,
        yProject: 0,
        originalX: x,
        originalY: y,
        originalZ: z
      })
    }
    
    let animationFrameId: number
    let rotation = 0
    
    const animate = () => {
      ctx.clearRect(0, 0, size, size)
      
      // Update rotation
      rotation += speed / 100
      
      // Rotate and project dots
      dots.forEach(dot => {
        // Rotate around Y axis
        const cosR = Math.cos(rotation)
        const sinR = Math.sin(rotation)
        
        dot.x = dot.originalX * cosR + dot.originalZ * sinR
        dot.z = dot.originalZ * cosR - dot.originalX * sinR
        
        // Project 3D to 2D
        const scale = (size / 2) / (size / 2 - dot.z)
        dot.xProject = dot.x * scale + size / 2
        dot.yProject = dot.y * scale + size / 2
      })
      
      // Draw connections
      ctx.strokeStyle = lineColor
      ctx.beginPath()
      
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dot1 = dots[i]
          const dot2 = dots[j]
          
          const dx = dot1.xProject - dot2.xProject
          const dy = dot1.yProject - dot2.yProject
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          // Only connect dots that are close enough
          if (distance < size / 4) {
            ctx.globalAlpha = 1 - (distance / (size / 4))
            ctx.beginPath()
            ctx.moveTo(dot1.xProject, dot1.yProject)
            ctx.lineTo(dot2.xProject, dot2.yProject)
            ctx.stroke()
          }
        }
      }
      
      // Draw dots
      ctx.fillStyle = dotColor
      ctx.globalAlpha = 1
      
      dots.forEach(dot => {
        ctx.beginPath()
        // Scale dot size based on z position for depth effect
        const scaledDotSize = dotSize * ((dot.z + size / 2) / size + 0.5)
        ctx.arc(dot.xProject, dot.yProject, scaledDotSize, 0, Math.PI * 2)
        ctx.fill()
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [size, speed, dotSize, dotCount, dotColor, lineColor])
  
  return (
    <div className={cn("relative", className)} {...props}>
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0"
        style={{ 
          width: size, 
          height: size,
        }}
      />
    </div>
  )
}