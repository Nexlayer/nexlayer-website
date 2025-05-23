"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import DeploymentPanel from "./deployment-panel"

export type Deployment = {
  id: number
  product: string
  city: string
  country: string
  flag: string
  timestamp: number
  status: "completed" | "in-progress" | "failed"
}

// Map cities to their country codes for flag emojis
const cityToCountry: Record<string, { country: string; flag: string }> = {
  "New York City": { country: "United States", flag: "🇺🇸" },
  "San Francisco": { country: "United States", flag: "🇺🇸" },
  Austin: { country: "United States", flag: "🇺🇸" },
  Miami: { country: "United States", flag: "🇺🇸" },
  London: { country: "United Kingdom", flag: "🇬🇧" },
  Tokyo: { country: "Japan", flag: "🇯🇵" },
  Berlin: { country: "Germany", flag: "🇩🇪" },
  Singapore: { country: "Singapore", flag: "🇸🇬" },
  Toronto: { country: "Canada", flag: "🇨🇦" },
  Vancouver: { country: "Canada", flag: "🇨🇦" },
  Sydney: { country: "Australia", flag: "🇦🇺" },
  Paris: { country: "France", flag: "🇫🇷" },
  Amsterdam: { country: "Netherlands", flag: "🇳🇱" },
  Bangalore: { country: "India", flag: "🇮🇳" },
  Seoul: { country: "South Korea", flag: "🇰🇷" },
  Stockholm: { country: "Sweden", flag: "🇸🇪" },
  "Tel Aviv": { country: "Israel", flag: "🇮🇱" },
  Dubai: { country: "UAE", flag: "🇦🇪" },
  Zurich: { country: "Switzerland", flag: "🇨🇭" },
  "Hong Kong": { country: "Hong Kong", flag: "🇭🇰" },
}

const cities = Object.keys(cityToCountry)

const products = [
  "neural network",
  "AI assistant",
  "RAG system",
  "NLP service",
  "GPT wrapper",
  "ML model",
  "analytics dashboard",
  "vector database",
  "language model",
  "AI search engine",
  "voice assistant",
  "data pipeline",
  "image generator",
  "recommendation engine",
  "AI chatbot",
  "AI API",
  "computer vision app",
  "AI agent",
  "LLM app",
  "code generator",
]

export default function LaunchNotifications() {
  const [notifications, setNotifications] = useState<Deployment[]>([])
  const [visibleNotifications, setVisibleNotifications] = useState<Deployment[]>([])
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const nextIdRef = useRef(0)
  const maxVisibleNotifications = 1

  // Generate a random notification
  const generateNotification = (): Deployment => {
    const city = cities[Math.floor(Math.random() * cities.length)]
    const product = products[Math.floor(Math.random() * products.length)]
    const { country, flag } = cityToCountry[city]
    const statuses: Deployment["status"][] = ["completed", "in-progress", "failed"]
    const status = statuses[Math.floor(Math.random() * (statuses.length - 0.2))] // Make completed more likely

    return {
      id: nextIdRef.current++,
      product,
      city,
      country,
      flag,
      timestamp: Date.now(),
      status,
    }
  }

  useEffect(() => {
    // Add initial notification
    const initial = generateNotification()
    setNotifications([initial])
    setVisibleNotifications([initial])

    // Set up interval to add new notifications every 8 seconds
    const interval = setInterval(() => {
      const newNotification = generateNotification()

      setNotifications((prev) => [newNotification, ...prev].slice(0, 100)) // Keep last 100 deployments

      setVisibleNotifications((prev) => {
        // Remove notifications older than 9 seconds
        const filtered = prev.filter((n) => Date.now() - n.timestamp < 9000)
        // Limit the number of notifications to prevent performance issues
        const limitedFiltered = filtered.slice(-maxVisibleNotifications + 1)
        // Add new notification
        return [...limitedFiltered, newNotification]
      })
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const handleNotificationClick = () => {
    setIsPanelOpen(true)
  }

  return (
    <>
      <div className="fixed bottom-0 right-0 z-40 p-4 overflow-hidden h-[70vh] w-[300px]">
        <AnimatePresence>
          {visibleNotifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{
                opacity: [0, 1, 1, 0.8, 0],
                y: -400,
                scale: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 7.5,
                ease: "easeOut",
                times: [0, 0.1, 0.7, 0.9, 1],
              }}
              className="absolute bottom-0 right-8 mb-4 glassmorphism rounded-lg p-3 text-sm max-w-[250px] flex items-center gap-2 shadow-lg cursor-pointer hover:bg-white/5"
              onClick={handleNotificationClick}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full animate-pulse flex-shrink-0 ${
                    notification.status === "completed"
                      ? "bg-neon-aqua"
                      : notification.status === "in-progress"
                        ? "bg-amber-400"
                        : "bg-red-500"
                  }`}
                />
                <span className="text-lg" role="img" aria-label="country flag">
                  {notification.flag}
                </span>
              </div>
              <p className="text-soft-white text-xs">Product launched 6 seconds ago in {notification.city}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <DeploymentPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} deployments={notifications} />
    </>
  )
}
