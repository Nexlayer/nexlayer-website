"use client"

import { motion } from "framer-motion"
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="section-container">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-6 inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="px-4 py-2 rounded-full border border-[#23B6CB]/20 text-sm font-medium bg-card/30 backdrop-blur-sm">
              The AI-Native Cloud
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div>One launchfile.</div>
            <div className="mt-2">Entire AI stack.</div>
            <div className="mt-2">Live in minutes.</div>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-gray mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            From prototype to product, no infrastructure PhD required.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="https://docs.nexlayer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#23B6CB] text-near-black hover:bg-[#23B6CB]/90 hover:shadow-[0_0_15px_rgba(35,182,203,0.5)] h-11 rounded-md px-8 text-lg flex items-center justify-center"
            >
              Get started
            </a>
            <a
              href="/playground"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 bg-transparent hover:bg-white/5 text-soft-white h-11 rounded-md px-8 text-lg flex items-center justify-center"
            >
              Playground
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
