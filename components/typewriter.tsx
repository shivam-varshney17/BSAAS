"use client"

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface TypewriterProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string | string[]
  speed?: number
  delay?: number
  loop?: boolean
  cursor?: boolean
  className?: string
}

export function Typewriter({
  text,
  speed = 50,
  delay = 1000,
  loop = true,
  cursor = true,
  className,
  ...props
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  
  const textArray = Array.isArray(text) ? text : [text]
  
  useEffect(() => {
    let timeout: NodeJS.Timeout
    
    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, delay)
      return () => clearTimeout(timeout)
    }
    
    const currentText = textArray[currentTextIndex]
    
    if (isDeleting) {
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        }, speed / 2) // Deleting is faster
      } else {
        setIsDeleting(false)
        if (loop || currentTextIndex < textArray.length - 1) {
          setCurrentTextIndex((currentTextIndex + 1) % textArray.length)
        }
      }
    } else {
      if (currentIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        }, speed)
      } else if (loop || currentTextIndex < textArray.length - 1) {
        setIsWaiting(true)
      }
    }
    
    return () => clearTimeout(timeout)
  }, [currentIndex, currentTextIndex, isDeleting, isWaiting, loop, speed, delay, textArray])
  
  return (
    <div className={cn("inline-flex", className)} {...props}>
      <span>{displayText}</span>
      {cursor && <span className="animate-pulse ml-0.5">|</span>}
    </div>
  )
}