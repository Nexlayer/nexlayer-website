"use client"

import { motion } from "framer-motion"
import { Database, Lock, Server, Cpu, Key, GitBranch, Network, Cloud, Globe, UserCog } from "lucide-react"
import { useState, useRef } from "react"

export default function DeploymentBottleneck() {
  // Track hovers for errors and roles
  const mazeRef = useRef<HTMLDivElement>(null)
  const [hoveredError, setHoveredError] = useState<{ category: string; index: number } | null>(null)
  const [hoveredRole, setHoveredRole] = useState<number | null>(null)

  // Engineering roles that struggle with deployment
  const engineeringRoles = [
    { title: "Frontend Engineer", icon: <UserCog className="h-4 w-4" />, color: "#38bdf8" },
    { title: "Backend Engineer", icon: <UserCog className="h-4 w-4" />, color: "#4ade80" },
    { title: "Database Engineer", icon: <UserCog className="h-4 w-4" />, color: "#f472b6" },
    { title: "DevOps Engineer", icon: <UserCog className="h-4 w-4" />, color: "#fb923c" },
    { title: "Cloud Engineer", icon: <UserCog className="h-4 w-4" />, color: "#a78bfa" },
    { title: "AI/ML Engineer", icon: <UserCog className="h-4 w-4" />, color: "#facc15" },
    { title: "AI Infra Engineer", icon: <UserCog className="h-4 w-4" />, color: "#34d399" },
    { title: "Auth Engineer", icon: <UserCog className="h-4 w-4" />, color: "#f87171" },
    { title: "Payments Engineer", icon: <UserCog className="h-4 w-4" />, color: "#60a5fa" },
    { title: "Platform Engineer", icon: <UserCog className="h-4 w-4" />, color: "#c084fc" },
    { title: "SRE", icon: <UserCog className="h-4 w-4" />, color: "#fbbf24" },
  ]

  // Categories of tasks that Nexlayer automates
  const automationCategories = [
    {
      id: "connecting",
      icon: <Network className="h-6 w-6" />,
      title: "🔗 Connecting Services",
      color: "#ff5e99",
      tasks: [
        "Configure internal networking between frontend & backend (DNS, IP, port mapping)",
        "Connect backend to a database (Postgres, MongoDB) with proper URLs",
        "Wire up a vector store (Weaviate, Pinecone) and connect it to backend",
        "Integrate AI model APIs or host your own AI model pod/container",
        "Handle service discovery (how pods find each other)",
        "Map URLs and routes for web and API layers",
      ],
    },
    {
      id: "secrets",
      icon: <Lock className="h-6 w-6" />,
      title: "🔒 Managing Secrets",
      color: "#23B6CB",
      tasks: [
        "Store and mount secrets securely (OpenAI keys, DB passwords)",
        "Ensure secrets aren't exposed in logs or env vars",
        "Mount secrets as files or inject into containers at runtime",
      ],
    },
    {
      id: "data",
      icon: <Database className="h-6 w-6" />,
      title: "🗄️ Data & Persistence",
      color: "#8A63D2",
      tasks: [
        "Set up persistent volumes for databases, vector stores, or AI model weights",
        "Configure correct mount paths for data (e.g., /var/lib/postgresql/data)",
        "Initialize DBs with environment variables (user/pass/db name)",
      ],
    },
    {
      id: "ai",
      icon: <Cpu className="h-6 w-6" />,
      title: "🧠 AI Integration",
      color: "#FF8A3D",
      tasks: [
        "Choose between self-hosted or API-based AI models",
        "Host LLMs (like Ollama) and manage storage for model files",
        "Configure AI model endpoints (ports, health checks)",
      ],
    },
    {
      id: "auth",
      icon: <Key className="h-6 w-6" />,
      title: "🧬 Auth & Environment",
      color: "#4CAF50",
      tasks: [
        "Add auth providers (e.g., Supabase for user login)",
        "Set up JWT secrets or OAuth keys",
        "Configure NEXT_PUBLIC_ or API keys for frontend use",
        "Handle role-based access or token validation",
      ],
    },
    {
      id: "containers",
      icon: <Server className="h-6 w-6" />,
      title: "🐳 Containerization",
      color: "#2196F3",
      tasks: [
        "Write a Dockerfile for every service",
        "Build images for Linux/amd64 (to work in the cloud)",
        "Push each image to a public/private registry (Docker Hub, GHCR, TTL.sh)",
        "Manage image tags for versioning (e.g., v1.0.0, latest, dev)",
      ],
    },
    {
      id: "registries",
      icon: <GitBranch className="h-6 w-6" />,
      title: "🔐 Private Registries",
      color: "#9C27B0",
      tasks: ["Authenticate with private registries using tokens", "Handle token expiry and access control"],
    },
    {
      id: "communication",
      icon: <Network className="h-6 w-6" />,
      title: "🔁 Inter-Pod Communication",
      color: "#FF5722",
      tasks: [
        "Ensure backend can reach DB and vector store reliably",
        "Use .env files or hardcoded IPs (error-prone)",
        "Handle networking differences between dev and prod",
      ],
    },
    {
      id: "infra",
      icon: <Cloud className="h-6 w-6" />,
      title: "☁️ Infra & Scaling",
      color: "#607D8B",
      tasks: [
        "Set up Kubernetes or Docker Compose files",
        "Write YAML to define pods, resources, and networking",
        "Configure ingress rules or reverse proxies",
        "Monitor resource usage, add auto-scaling rules",
      ],
    },
    {
      id: "preview",
      icon: <Globe className="h-6 w-6" />,
      title: "🧪 Preview vs Production",
      color: "#795548",
      tasks: [
        "Create staging and preview environments for testing",
        "Set expiration or cleanup logic for temp environments",
        "Manage custom domains and SSL certificates",
      ],
    },
  ]

  // Deployment errors that developers run into
  const deploymentErrorCategories = [
    {
      id: "general",
      title: "🔥 Deployment Errors",
      color: "#FF4136",
      errors: [
        "404 Page Not Found",
        "FUNCTION_INVOCATION_FAILED (500)",
        "FUNCTION_INVOCATION_TIMEOUT (504)",
        "EDGE_FUNCTION_INVOCATION_FAILED (500)",
        "EDGE_FUNCTION_INVOCATION_TIMEOUT (504)",
        "FUNCTION_PAYLOAD_TOO_LARGE (413)",
        "FUNCTION_RESPONSE_PAYLOAD_TOO_LARGE (500)",
        "FUNCTION_THROTTLED (503)",
        "NO_RESPONSE_FROM_FUNCTION (502)",
        "DEPLOYMENT_NOT_FOUND (404)",
        "DEPLOYMENT_DELETED (410)",
        "MIDDLEWARE_INVOCATION_FAILED (500)",
        "MIDDLEWARE_INVOCATION_TIMEOUT (504)",
        "BODY_NOT_A_STRING_FROM_FUNCTION (502)",
        "MODULE_NOT_FOUND",
        "Invalid connection string",
        "CORS policy errors",
        "ERR_CONNECTION_REFUSED",
        "Cold start timeout",
        "Invalid build command",
        "Letter-casing mismatch in filenames",
        "Incorrect output directory",
        "Missing rewrites for client-side routing",
        "Monorepo path resolution issues",
        "API rate limit exceeded",
        "Missing environment variables",
      ],
    },
    {
      id: "container",
      title: "🧱 Container / Infra Errors",
      color: "#FF851B",
      errors: [
        "Health check failed",
        "Build command failed",
        "Missing Dockerfile directives",
        "Version mismatch",
        "Database connection timeout",
        "Missing or incorrect start command",
        "Persistent disk mount failure",
        "Deployment hanging",
        "Memory limit exceeded",
        "CPU limit exceeded",
        "Incorrect port config",
      ],
    },
    {
      id: "serverless",
      title: "⚠️ Serverless / Static Hosting Errors",
      color: "#FFDC00",
      errors: [
        "Build timeout",
        "Function execution timeout",
        "Missing build directory",
        "Incorrect build command",
        "Rewrite/redirect misconfiguration",
        "Missing environment variables",
        "API gateway errors",
        "Function size exceeded",
        "Cold start",
        "Dependency resolution failed",
        "Form handling errors",
      ],
    },
    {
      id: "routing",
      title: "🔄 Frontend + Backend Routing Issues",
      color: "#B10DC9",
      errors: [
        "Unauthorized (401)",
        "Internal Server Error (500)",
        "Port config mismatch",
        "Static asset 404",
        "Proxy misconfig",
        "Blank page in prod",
        "Reverse proxy trust issues",
        "Missing secure cookie settings",
        "Host binding mismatch (127.0.0.1 vs 0.0.0.0)",
        "Traffic not routing between frontend/backend",
      ],
    },
    {
      id: "ai",
      title: "🤖 AI + Vector Store Errors",
      color: "#0074D9",
      errors: [
        "Vector DB connection failed",
        "Model loading failed",
        "Invalid API key",
        "Context length exceeded",
        "Rate limit exceeded",
        "Embedding generation failed",
        "Vector store query timeout",
        "Model not found",
        "Insufficient memory for model",
        "Incompatible model version",
        "Token validation error",
        "Invalid embedding dimension",
        "Unsupported image format",
        "Model provider API error",
      ],
    },
  ]

  // Common deployment errors
  const deploymentErrors = [
    { code: "ECONNREFUSED", message: "backend can't talk to the database" },
    { code: "MODULE_NOT_FOUND", message: "AI forgot to install a package" },
    { code: "Invalid API key", message: "secret wasn't wired in properly" },
    { code: "Missing build output directory", message: "because it's not just a website" },
    { code: "Permission denied", message: "because your cloud doesn't know your app" },
  ]

  // Animation variants for the maze paths
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 2, bounce: 0, delay: i * 0.1 },
        opacity: { duration: 0.01 },
      },
    }),
  }

  // Animation variants for the nodes
  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: 0.5 + i * 0.1,
      },
    }),
    hover: {
      scale: 1.2,
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
      transition: { duration: 0.3 },
    },
  }

  // Animation variants for the error nodes
  const errorNodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: 1 + i * 0.05,
      },
    }),
    hover: {
      scale: 1.2,
      boxShadow: "0 0 15px rgba(255, 0, 0, 0.5)",
      transition: { duration: 0.3 },
    },
  }

  // Animation variants for the role avatars
  const roleAvatarVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: 0.8 + i * 0.1,
      },
    }),
    hover: {
      scale: 1.2,
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
      transition: { duration: 0.3 },
    },
  }

  return (
    <section className="relative">
      <div className="section-container relative overflow-hidden bg-gradient-to-b from-red-900/10 to-transparent border border-red-500/20 rounded-xl shadow-[0_0_30px_rgba(220,38,38,0.2)]">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <motion.div
          className="text-center mb-12 max-w-3xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">But then what?</h2>
          <p className="text-xl text-gray-300 mb-6">
            Launching a real AI product, something anyone, anywhere can use — something scalable, secure, with AI, a
            vector store, a database, a backend, a frontend —still feels extremely hard and far out of reach for most of
            us.
          </p>
          <div className="text-left bg-black/30 p-6 rounded-lg border border-red-500/20 mb-6">
            <p className="text-lg text-gray-300 mb-4">
              Even after AI generates your code, you're left with the complex task of:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Setting up infrastructure</li>
              <li>Configuring backend, databases and vector stores</li>
              <li>Managing secrets and environment variables</li>
              <li>Connecting services together</li>
              <li>Networking and path routes</li>
              <li>Handling deployment and scaling issues</li>
            </ul>
          </div>
        </motion.div>

        {/* The Deployment Maze Visualization */}
        <div className="px-6 pb-16">
          <div className="relative h-[500px] md:h-[600px] mb-8 overflow-hidden" ref={mazeRef}>
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              {/* Main maze paths */}
              <motion.path
                d="M50,300 C100,300 100,100 150,100 L250,100 C300,100 300,200 350,200 L450,200 C500,200 500,400 550,400 L650,400 C700,400 700,300 750,300 L850,300 C900,300 900,500 950,500"
                fill="transparent"
                stroke="white"
                strokeWidth="3"
                strokeDasharray="5,5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={pathVariants}
                custom={0}
              />
              <motion.path
                d="M150,100 C200,100 200,500 250,500 L350,500 C400,500 400,150 450,150 L550,150 C600,150 600,350 650,350 L750,350 C800,350 800,100 850,100"
                fill="transparent"
                stroke="white"
                strokeWidth="3"
                strokeDasharray="5,5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={pathVariants}
                custom={1}
              />
              <motion.path
                d="M250,100 C300,100 300,450 350,450 L450,450 C500,450 500,250 550,250 L650,250 C700,250 700,550 750,550 L850,550 C900,550 900,200 950,200"
                fill="transparent"
                stroke="white"
                strokeWidth="3"
                strokeDasharray="5,5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={pathVariants}
                custom={2}
              />
            </svg>

            {/* Category nodes and error nodes positioned along the maze - chaotic version */}
            <div className="absolute inset-0">
              {/* Error nodes */}
              {deploymentErrorCategories.flatMap((category, categoryIndex) =>
                category.errors.map((error, errorIndex) => {
                  // Create even more chaotic positioning for error nodes
                  // Use different prime numbers and trig functions for more randomness
                  const seed = categoryIndex * 100 + errorIndex
                  const xPos = 50 + ((seed * 73 + Math.sin(seed * 0.3) * 200 + Math.cos(seed * 0.5) * 100) % 850)
                  const yPos = 80 + ((seed * 89 + Math.cos(seed * 0.4) * 200 + Math.sin(seed * 0.6) * 100) % 450)
                  const rotation = ((seed * 13) % 90) - 45 // More extreme random rotation
                  const scale = 0.6 + (seed % 7) * 0.1 // Smaller, varied sizes
                  const zIndex = 3 + (seed % 4) // Random z-index for overlapping

                  // Determine if this is an error node that should pulse
                  const shouldPulse = seed % 5 === 0

                  return (
                    <motion.div
                      key={`${category.id}-${errorIndex}`}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      style={{
                        left: `${xPos}px`,
                        top: `${yPos}px`,
                        zIndex:
                          hoveredError && hoveredError.category === category.id && hoveredError.index === errorIndex
                            ? 20
                            : zIndex,
                        transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
                      }}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                      variants={errorNodeVariants}
                      custom={seed % 20} // Use modulo to keep the delay reasonable
                      onMouseEnter={() => setHoveredError({ category: category.id, index: errorIndex })}
                      onMouseLeave={() => setHoveredError(null)}
                      // Add more erratic motion to error nodes
                      animate={
                        shouldPulse
                          ? {
                              scale: [scale, scale * 1.2, scale],
                              boxShadow: [
                                `0 0 5px ${category.color}50`,
                                `0 0 15px ${category.color}90`,
                                `0 0 5px ${category.color}50`,
                              ],
                              transition: {
                                duration: 1.5 + (seed % 2),
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                                ease: "easeInOut",
                              },
                            }
                          : {
                              x: [0, (seed % 2 ? 1 : -1) * (3 + (seed % 15)), 0],
                              y: [0, (seed % 3 ? -1 : 1) * (3 + (seed % 12)), 0],
                              transition: {
                                duration: 2 + (seed % 3),
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                                ease: "easeInOut",
                              },
                            }
                      }
                    >
                      <div
                        className="rounded-md flex items-center justify-center border border-red-500/50 shadow-[0_0_10px_rgba(255,0,0,0.3)]"
                        style={{
                          backgroundColor: `${category.color}20`,
                          boxShadow: `0 0 10px ${category.color}40`,
                          width: `${Math.max(24, Math.min(36, error.length * 0.8))}px`, // Size based on error text length
                          height: `${Math.max(24, Math.min(36, error.length * 0.8))}px`,
                        }}
                      >
                        <span className="text-xs text-red-400 font-mono">!</span>
                      </div>

                      {/* Popup with error when hovered */}
                      {hoveredError && hoveredError.category === category.id && hoveredError.index === errorIndex && (
                        <motion.div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-red-500/30 shadow-xl z-20"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          style={{ transform: "translate(-50%, 0) rotate(0deg)" }} // Reset rotation for the popup
                        >
                          <h4 className="text-white font-semibold mb-2">{category.title}</h4>
                          <div className="text-sm text-red-400 font-mono bg-black/50 p-2 rounded border border-red-500/20">
                            {error}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )
                }),
              )}

              {/* Engineering role avatars */}
              {engineeringRoles.map((role, index) => {
                // Position the role avatars in a more structured way than the error nodes
                // but still with some randomness
                const seed = index * 31
                const xPos = 100 + ((seed * 83 + Math.sin(seed * 0.5) * 100) % 800)
                const yPos = 100 + ((seed * 67 + Math.cos(seed * 0.6) * 100) % 400)
                const rotation = ((seed * 7) % 40) - 20 // Less extreme rotation than errors
                const scale = 0.9 + (seed % 4) * 0.1 // Slightly larger than error nodes
                const zIndex = 4 + (seed % 3) // Slightly higher z-index than errors

                return (
                  <motion.div
                    key={`role-${index}`}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{
                      left: `${xPos}px`,
                      top: `${yPos}px`,
                      zIndex: hoveredRole === index ? 20 : zIndex,
                      transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
                    }}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    variants={roleAvatarVariants}
                    custom={index}
                    onMouseEnter={() => setHoveredRole(index)}
                    onMouseLeave={() => setHoveredRole(null)}
                    // Add subtle motion to role avatars
                    animate={{
                      x: [0, (index % 2 ? 1 : -1) * (2 + (index % 5)), 0],
                      y: [0, (index % 3 ? -1 : 1) * (2 + (index % 4)), 0],
                      transition: {
                        duration: 3 + (index % 2),
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <div
                      className="rounded-full flex items-center justify-center border-2 border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                      style={{
                        backgroundColor: `${role.color}30`,
                        boxShadow: `0 0 10px ${role.color}50`,
                        width: "32px",
                        height: "32px",
                      }}
                    >
                      {role.icon}
                    </div>

                    {/* Popup with role title when hovered */}
                    {hoveredRole === index && (
                      <motion.div
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/80 backdrop-blur-sm p-3 rounded-lg border border-white/20 shadow-xl z-20 whitespace-nowrap"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        style={{ transform: "translate(-50%, 0) rotate(0deg)" }} // Reset rotation for the popup
                      >
                        <span className="text-sm text-white font-medium">{role.title}</span>
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
