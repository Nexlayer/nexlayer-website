"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function InfrastructurePainCard() {
  return (
    <Card className="max-w-3xl mx-auto bg-black/30">
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-electric-pink/20 flex items-center justify-center border border-electric-pink/30">
            <Zap className="h-8 w-8 text-electric-pink" />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-white">What started as a beautiful AI-generated app...</h3>
            <p className="text-lg text-gray-200 mt-2">
              Is now a sprawling multi-service cloud architecture you have to manually design, glue, and babysit.
            </p>
          </div>

          <div className="border-l-4 border-electric-pink/50 pl-4 py-2">
            <motion.p
              className="text-xl font-medium text-white"
              initial={{ x: -5 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              You're not building a product.
            </motion.p>
            <motion.p
              className="text-xl font-medium text-white"
              initial={{ x: -5 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            >
              You're building the cloud itself — every. single. time.
            </motion.p>
          </div>

          <p className="text-lg text-gray-200">
            This is the gap between AI's brilliance and the modern infrastructure it still can't control.
            <br />
            <motion.span
              className="inline-block"
              animate={{ color: ["rgba(255, 255, 255, 0.8)", "rgba(255, 94, 153, 1)", "rgba(255, 255, 255, 0.8)"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              And you, the human, are the glue.
            </motion.span>
          </p>
        </div>
      </div>
    </Card>
  )
}
