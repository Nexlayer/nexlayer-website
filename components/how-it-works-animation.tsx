"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FileCode, Terminal, Globe, Rocket } from "lucide-react"

export default function HowItWorksAnimation() {
  const [activeStep, setActiveStep] = useState(0)
  const [isInView, setIsInView] = useState(false)

  // Auto-advance steps when in view
  useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < 3 ? prev + 1 : 0))
    }, 3000)

    return () => clearInterval(interval)
  }, [isInView])

  const steps = [
    {
      number: 1,
      title: "Describe your app",
      description: "Use AI or write a simple nexlayer.yaml file to define your app",
      icon: <Terminal className="h-6 w-6 text-[#23B6CB]" />,
    },
    {
      number: 2,
      title: "Nexlayer processes your definition",
      description: "Our platform analyzes your app requirements and prepares the infrastructure",
      icon: <FileCode className="h-6 w-6 text-[#23B6CB]" />,
    },
    {
      number: 3,
      title: "Infrastructure is provisioned",
      description: "Containers, networking, storage, and scaling are automatically configured",
      icon: <Rocket className="h-6 w-6 text-[#23B6CB]" />,
    },
    {
      number: 4,
      title: "Your app is live",
      description: "Access your deployed application at yourapp.nexlayer.ai",
      icon: <Globe className="h-6 w-6 text-[#23B6CB]" />,
    },
  ]

  return (
    <section className="relative">
      <div className="section-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get Started For Free</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Deploy your first AI application in minutes with no infrastructure setup required.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              className="bg-[#23B6CB] text-near-black hover:bg-[#23B6CB]/90 hover:shadow-[0_0_15px_rgba(35,182,203,0.5)] h-12 rounded-md px-8 text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Try It Now
            </motion.button>
            <motion.button
              className="border border-white/10 bg-transparent hover:bg-white/5 text-soft-white h-12 rounded-md px-8 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
