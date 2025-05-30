"use client"
import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Clock } from "lucide-react"
import { useState } from "react"
import type { Deployment } from "./launch-notifications"
import { useNotifications } from "@/components/launch-notifications"

interface DeploymentPanelProps {
  isOpen: boolean
  onClose: () => void
  deployments: Deployment[]
}

export default function DeploymentPanel({ isOpen, onClose, deployments }: DeploymentPanelProps) {
  const [filter, setFilter] = useState<"all" | "completed" | "in-progress" | "failed">("all")
  const { markAllRead } = useNotifications()
  const filteredDeployments = deployments.filter((d) => (filter === "all" ? true : d.status === filter))

  const formatTime = (timestamp: number) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000)
    if (seconds < 60) return `${seconds}s ago`
    const minutes = Math.floor(seconds / 60)
    return `${minutes}m ago`
  }

  useEffect(() => {
    if (isOpen) {
      markAllRead()
    }
  }, [isOpen, markAllRead])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-near-black border-l border-white/10 z-50 glassmorphism overflow-hidden flex flex-col"
          >
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-soft-white">From the Community</h2>
              <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10">
                <X className="h-5 w-5 text-soft-white" />
              </button>
            </div>

            <div className="p-4 border-b border-white/10">
              <p className="text-sm text-muted-gray">Products launches across the globe — right now.</p>
            </div>

            <div className="flex-1 overflow-y-auto">
              {filteredDeployments.length === 0 ? (
                <div className="p-8 text-center text-muted-gray">No deployments found</div>
              ) : (
                <div className="divide-y divide-white/5">
                  {filteredDeployments.map((deployment) => (
                    <div key={deployment.id} className="p-4 hover:bg-white/5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-soft-white">Product launched</span>
                      </div>
                      <div className="flex justify-between text-xs text-muted-gray">
                        <span>
                          {deployment.city}, {deployment.country}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatTime(deployment.timestamp)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="text-center">
                <span className="text-sm text-muted-gray">Trusted by AI Builders Worldwide</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
