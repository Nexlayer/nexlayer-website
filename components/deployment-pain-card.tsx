"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Bug, Terminal, Lock, Network, GitPullRequest, FileCode, UploadCloud, HardDrive, Link2 } from "lucide-react"

export default function DeploymentPainCard() {
  const [expanded, setExpanded] = useState(false)
  const [showPain, setShowPain] = useState(false)
  const [showOutro, setShowOutro] = useState(false)

  // Auto-expand after component mounts
  useEffect(() => {
    const expandTimer = setTimeout(() => setExpanded(true), 1000)
    const painTimer = setTimeout(() => setShowPain(true), 2000)
    const outroTimer = setTimeout(() => setShowOutro(true), 4000)

    return () => {
      clearTimeout(expandTimer)
      clearTimeout(painTimer)
      clearTimeout(outroTimer)
    }
  }, [])

  const painPoints = [
    { icon: <FileCode className="h-5 w-5" />, text: "Writing and debugging Dockerfiles" },
    { icon: <Lock className="h-5 w-5" />, text: "Injecting secrets, environment variables, and API keys" },
    { icon: <UploadCloud className="h-5 w-5" />, text: "Pushing images to container registries" },
    { icon: <HardDrive className="h-5 w-5" />, text: "Building persistent volumes and defining mount paths" },
    { icon: <Link2 className="h-5 w-5" />, text: "Connecting frontend, backend, and databases via internal DNS" },
    { icon: <Bug className="h-5 w-5" />, text: "Debugging why it works locally but breaks in production" },
    { icon: <Network className="h-5 w-5" />, text: "Fighting serverless cold starts and vendor lock-in" },
    { icon: <GitPullRequest className="h-5 w-5" />, text: "Writing and maintaining GitOps pipelines" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const glitchVariants = {
    initial: { x: 0 },
    glitch: {
      x: [-2, 1, -3, 0, 2, -1, 0],
      transition: {
        duration: 0.5,
        repeat: 2,
        repeatType: "mirror",
      },
    },
  }

  return (
    <Card
      variant="pain"
      animate={true}
      expanded={expanded}
      className={`w-full max-w-3xl mx-auto p-8 transition-all duration-700 ${expanded ? "min-h-[500px]" : "min-h-[200px]"}`}
      onClick={() => !expanded && setExpanded(true)}
    >
      {/* Initial optimistic state */}
      <motion.div
        className="text-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: expanded ? 0 : 1, scale: expanded ? 0.8 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-neon-aqua/20 backdrop-blur-sm flex items-center justify-center border border-neon-aqua/30 mx-auto mb-4"
          animate={{
            boxShadow: [
              "0 0 0px rgba(0, 255, 231, 0.5)",
              "0 0 20px rgba(0, 255, 231, 0.8)",
              "0 0 0px rgba(0, 255, 231, 0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <Terminal className="h-8 w-8 text-neon-aqua" />
        </motion.div>
        <h3 className="text-2xl font-mono text-white">What started as a beautiful AI-generated app...</h3>
      </motion.div>

      {/* Expanded pain state */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <h3 className="text-2xl font-mono text-white mb-4">What started as a beautiful AI-generated app...</h3>
              <p className="text-xl text-gray-200">
                Is now a sprawling multi-service cloud architecture you have to manually design, glue, and babysit.
              </p>
            </motion.div>

            {showPain && (
              <motion.div
                className="bg-black/30 p-6 rounded-lg border border-electric-pink/10"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {painPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 bg-black/20 p-3 rounded-md border border-white/5 hover:border-electric-pink/30 transition-colors"
                      variants={itemVariants}
                    >
                      <div className="mt-1 text-electric-pink bg-electric-pink/10 p-2 rounded-full flex-shrink-0">
                        {point.icon}
                      </div>
                      <span className="text-gray-300">{point.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {showPain && (
              <motion.div
                className="border-l-4 border-electric-pink/50 pl-4 py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.p
                  className="text-xl font-medium text-white"
                  variants={glitchVariants}
                  initial="initial"
                  animate="glitch"
                >
                  You're not building a product.
                </motion.p>
                <motion.p
                  className="text-xl font-medium text-white"
                  variants={glitchVariants}
                  initial="initial"
                  animate="glitch"
                >
                  You're building the cloud itself — every. single. time.
                </motion.p>
              </motion.div>
            )}

            {showOutro && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <p className="text-xl text-gray-200">
                  This is the gap between AI's brilliance and the modern infrastructure it still can't control.
                  <br />
                  <motion.span
                    className="inline-block"
                    animate={{
                      color: ["rgba(255, 255, 255, 0.8)", "rgba(255, 94, 153, 1)", "rgba(255, 255, 255, 0.8)"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    And you, the human, are the glue.
                  </motion.span>
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {expanded && (
          <>
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-electric-pink/20 to-transparent opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.3 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 0.5 }}
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(255, 94, 153, 0.1) 1px, transparent 1px), 
                                linear-gradient(90deg, rgba(255, 94, 153, 0.1) 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />
          </>
        )}
      </div>
    </Card>
  )
}
