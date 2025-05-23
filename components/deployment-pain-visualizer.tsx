"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bug, Terminal, Lock, Network, GitBranch, FileCode, UploadCloud, HardDrive, Link2 } from "lucide-react"

export default function DeploymentPainVisualizer() {
  // Animation states
  const [stage, setStage] = useState(0) // 0: initial, 1: expanding, 2: showing pain, 3: final
  const [expanded, setExpanded] = useState(false)
  const [showPainPoints, setShowPainPoints] = useState(false)
  const [showHighlight, setShowHighlight] = useState(false)
  const [showOutro, setShowOutro] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // Pain points to display
  const painPoints = [
    { icon: <FileCode className="h-5 w-5" />, text: "Writing and debugging Dockerfiles" },
    { icon: <Lock className="h-5 w-5" />, text: "Injecting secrets, environment variables, and API keys" },
    { icon: <UploadCloud className="h-5 w-5" />, text: "Pushing images to container registries" },
    { icon: <HardDrive className="h-5 w-5" />, text: "Building persistent volumes and defining mount paths" },
    { icon: <Link2 className="h-5 w-5" />, text: "Connecting frontend, backend, and databases via internal DNS" },
    { icon: <Bug className="h-5 w-5" />, text: "Debugging why it works locally but breaks in production" },
    { icon: <Network className="h-5 w-5" />, text: "Fighting serverless cold starts and vendor lock-in" },
    { icon: <GitBranch className="h-5 w-5" />, text: "Writing and maintaining GitOps pipelines" },
  ]

  // Auto-play the animation sequence
  useEffect(() => {
    // Start the animation sequence
    const expandTimer = setTimeout(() => {
      setExpanded(true)
      setStage(1)
    }, 1500)

    const painTimer = setTimeout(() => {
      setShowPainPoints(true)
      setStage(2)
    }, 3000)

    const highlightTimer = setTimeout(() => {
      setShowHighlight(true)
    }, 5000)

    const outroTimer = setTimeout(() => {
      setShowOutro(true)
      setStage(3)
    }, 6500)

    return () => {
      clearTimeout(expandTimer)
      clearTimeout(painTimer)
      clearTimeout(highlightTimer)
      clearTimeout(outroTimer)
    }
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      filter: ["brightness(1)", "brightness(1.2)", "brightness(0.9)", "brightness(1.1)", "brightness(1)"],
      transition: {
        duration: 0.5,
        repeat: 2,
        repeatType: "mirror",
      },
    },
  }

  return (
    <div className="flex justify-center items-center min-h-[500px] p-4">
      <motion.div
        className={`relative rounded-lg overflow-hidden ${
          expanded ? "w-full max-w-3xl min-h-[500px]" : "w-full max-w-md min-h-[200px]"
        } transition-all duration-700`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          boxShadow: isHovering
            ? stage >= 2
              ? "0 0 20px rgba(255, 94, 153, 0.3)"
              : "0 0 20px rgba(0, 255, 231, 0.3)"
            : stage >= 2
              ? "0 0 10px rgba(255, 94, 153, 0.2)"
              : "0 0 10px rgba(0, 255, 231, 0.2)",
          border: `1px solid ${
            stage >= 2
              ? isHovering
                ? "rgba(255, 94, 153, 0.5)"
                : "rgba(255, 94, 153, 0.3)"
              : isHovering
                ? "rgba(0, 255, 231, 0.5)"
                : "rgba(0, 255, 231, 0.3)"
          }`,
        }}
      >
        {/* Background grid pattern that fades in during expansion */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 2 ? 0.15 : 0 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(255, 94, 153, 0.2) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 94, 153, 0.2) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Background animated elements */}
        <AnimatePresence>
          {stage >= 2 && (
            <>
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-electric-pink/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />

              {/* Animated lines that pulse in and out */}
              <motion.div
                className="absolute bottom-10 right-10 w-20 h-20 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                <div className="w-full h-px bg-electric-pink/30 absolute top-1/4"></div>
                <div className="w-full h-px bg-electric-pink/30 absolute top-3/4"></div>
                <div className="h-full w-px bg-electric-pink/30 absolute left-1/4"></div>
                <div className="h-full w-px bg-electric-pink/30 absolute left-3/4"></div>
              </motion.div>

              <motion.div
                className="absolute top-10 left-10 w-20 h-20 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
              >
                <div className="w-full h-px bg-electric-pink/30 absolute top-1/4"></div>
                <div className="w-full h-px bg-electric-pink/30 absolute top-3/4"></div>
                <div className="h-full w-px bg-electric-pink/30 absolute left-1/4"></div>
                <div className="h-full w-px bg-electric-pink/30 absolute left-3/4"></div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Content container */}
        <div className="relative z-10 p-6 md:p-8">
          {/* Initial optimistic state */}
          {stage === 0 && (
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-neon-aqua/20 backdrop-blur-sm flex items-center justify-center border border-neon-aqua/30 mb-4"
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
              <p className="text-sm text-gray-400 mt-4">Click to see what happens next</p>
            </motion.div>
          )}

          {/* Expanded content */}
          {stage >= 1 && (
            <div className="space-y-8">
              {/* Header section */}
              <motion.div
                className="flex items-start gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-shrink-0">
                  <motion.div
                    className={`w-16 h-16 rounded-full backdrop-blur-sm flex items-center justify-center border ${
                      stage >= 2 ? "bg-electric-pink/20 border-electric-pink/30" : "bg-neon-aqua/20 border-neon-aqua/30"
                    } transition-colors duration-1000`}
                    animate={{
                      boxShadow:
                        stage >= 2
                          ? [
                              "0 0 0px rgba(255, 94, 153, 0.5)",
                              "0 0 20px rgba(255, 94, 153, 0.8)",
                              "0 0 0px rgba(255, 94, 153, 0.5)",
                            ]
                          : [
                              "0 0 0px rgba(0, 255, 231, 0.5)",
                              "0 0 20px rgba(0, 255, 231, 0.8)",
                              "0 0 0px rgba(0, 255, 231, 0.5)",
                            ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Terminal
                      className={`h-8 w-8 ${stage >= 2 ? "text-electric-pink" : "text-neon-aqua"} transition-colors duration-1000`}
                    />
                  </motion.div>
                </div>

                <div>
                  <motion.h3
                    className="text-2xl font-mono text-white mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    What started as a beautiful AI-generated app...
                  </motion.h3>
                  <motion.p
                    className="text-xl text-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Is now a sprawling multi-service cloud architecture you have to manually design, glue, and babysit.
                  </motion.p>
                </div>
              </motion.div>

              {/* Pain points grid */}
              <AnimatePresence>
                {showPainPoints && (
                  <motion.div
                    className="bg-black/30 p-6 rounded-lg border border-electric-pink/10"
                    initial={{ opacity: 0, height: 0, overflow: "hidden" }}
                    animate={{ opacity: 1, height: "auto", overflow: "visible" }}
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
              </AnimatePresence>

              {/* Highlight block */}
              <AnimatePresence>
                {showHighlight && (
                  <motion.div
                    className="border-l-4 border-electric-pink/50 pl-4 py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
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
                      transition={{ delay: 0.3 }}
                    >
                      You're building the cloud itself — every. single. time.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Outro */}
              <AnimatePresence>
                {showOutro && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <p className="text-xl text-gray-200">
                      This is the gap between AI's brilliance and the modern infrastructure it still can't control.
                      <br />
                      <motion.span
                        className="inline-block"
                        animate={{
                          color: [
                            "rgba(255, 255, 255, 0.8)",
                            "rgba(255, 94, 153, 1)",
                            "rgba(0, 255, 231, 1)",
                            "rgba(255, 255, 255, 0.8)",
                          ],
                        }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                      >
                        And you, the human, are the glue.
                      </motion.span>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
