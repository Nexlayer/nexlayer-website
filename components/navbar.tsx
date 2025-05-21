"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-card/60 border-b border-white/5 shadow-lg" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center">
          <Image src="/nexlayer-logo.png" alt="Nexlayer" width={180} height={40} priority className="h-8 w-auto" />
        </Link>

        {/* Sign in and Sign up buttons on the right */}
        <div className="flex items-center gap-2">
          <span className="px-4 py-1 bg-yellow-400 text-black text-sm font-bold rounded-full flex items-center">beta</span>
          <Link
            href="/signin"
            className="text-white px-4 py-2"
          >
            Login
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
