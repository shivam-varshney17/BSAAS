"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Add a try-catch block and additional configuration for better compatibility
  try {
    return (
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        {...props}
      >
        {children}
      </NextThemesProvider>
    )
  } catch (error) {
    console.error("ThemeProvider error:", error)
    // Fallback to just rendering children without theming if there's an error
    return <>{children}</>
  }
}