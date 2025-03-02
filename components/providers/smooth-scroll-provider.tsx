"use client";

import { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  const options = {
    lerp: 0.1, // Linear interpolation factor (0-1)
    duration: 1.2, // Animation duration in seconds
    smoothWheel: true, // Enable smooth scrolling for mouse wheel
    smoothTouch: false, // Disable for touch devices for better performance
    wheelMultiplier: 1, // Mouse wheel speed multiplier
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Ease-out function
  };

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
} 