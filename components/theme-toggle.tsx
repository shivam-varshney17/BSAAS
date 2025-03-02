"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Make sure component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9"></div> // Placeholder to avoid layout shift
  }

  const isDark = theme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      className="rounded-full w-9 h-9 border border-slate-700 bg-transparent text-white hover:bg-slate-800"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative h-4 w-4"
      >
        {isDark ? (
          <Moon className="h-4 w-4 transition-all" />
        ) : (
          <Sun className="h-4 w-4 transition-all" />
        )}
      </motion.div>
    </Button>
  )
} 