"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

export function Background() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const scrollY = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const gridX = useSpring(mouseX, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  })
  const gridY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  })

  // Transform scroll position to glow intensity
  const glowIntensity = useTransform(scrollY, [0, 500, 1000, 1500, 2000, 2500], [0, 0.5, 1, 0.7, 1, 0.5])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      mouseX.set(((e.clientX - centerX) / centerX) * 20)
      mouseY.set(((e.clientY - centerY) / centerY) * 20)
    }

    const handleScroll = () => {
      scrollY.set(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    // Initialize scroll position
    scrollY.set(window.scrollY)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [mouseX, mouseY, scrollY])

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden">
      {/* Base background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-near-black to-deep-black" />

      {/* Static grid with higher contrast - tighter grid (20px instead of 40px) */}
      <div
        className="absolute inset-0 grid-background"
        style={{
          backgroundSize: "20px 20px",
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 231, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 231, 0.05) 1px, transparent 1px)
          `,
        }}
      />

      {/* Animated cyan glow overlay that responds to scroll */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundSize: "20px 20px",
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 231, ${useTransform(glowIntensity, [0, 1], [0.02, 0.1])}) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 231, ${useTransform(glowIntensity, [0, 1], [0.02, 0.1])}) 1px, transparent 1px)
          `,
          x: gridX,
          y: gridY,
          filter: useTransform(glowIntensity, (value) => `blur(${value * 2}px) brightness(${1 + value})`),
        }}
      />

      {/* Radial glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useTransform(
            glowIntensity,
            (value) => `radial-gradient(circle at 50% 50%, rgba(0, 255, 231, ${value * 0.08}) 0%, transparent 70%)`,
          ),
        }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient overlay for better content visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/50 to-transparent" />
    </div>
  )
}
