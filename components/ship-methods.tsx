"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { MessageSquare, Terminal, MousePointer } from "lucide-react"

export default function ShipMethods() {
  return (
    <section className="relative">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Three Ways to Ship Lightning Fast</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1: CLI Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Card className="glass-card h-full p-8 flex flex-col">
              <div className="flex items-center mb-4">
                <Terminal className="h-6 w-6 mr-3 text-cyan-400" />
                <h3 className="text-xl font-bold">Install CLI</h3>
              </div>

              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm mb-6 flex-grow">
                <p className="text-cyan-400">$ nexlayer install</p>
                <p className="text-cyan-400 mt-2">$ nexlayer init</p>
                <p className="text-cyan-400 mt-2">$ nexlayer deploy</p>
                <div className="mt-4 text-green-400">✓ Deployment successful!</div>
              </div>

              <p className="text-gray-300 mt-auto">Your app goes live in minutes. No infra setup. Just deploy.</p>
            </Card>
          </motion.div>

          {/* Column 2: AI IDEs & Terminals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass-card h-full p-8 flex flex-col">
              <div className="flex items-center mb-4">
                <MousePointer className="h-6 w-6 mr-3 text-[#23B6CB]" />
                <h3 className="text-xl font-bold">Talk-to-AI IDEs & Terminals</h3>
              </div>

              <div className="bg-black/80 p-6 rounded-xl border border-[#23B6CB]/20 mb-6 flex-grow shadow-lg backdrop-blur-sm relative overflow-hidden">
                {/* Subtle background glow effect */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#23B6CB]/10 blur-3xl rounded-full"></div>
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500/10 blur-2xl rounded-full"></div>

                {/* Chat interface */}
                <div className="flex flex-col relative z-10">
                  <div className="flex items-start gap-3 mb-4">
                    {/* Modern avatar with gradient */}
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#23B6CB] to-purple-600 flex-shrink-0 flex items-center justify-center shadow-lg">
                      <span className="text-xs text-white font-bold">V</span>
                    </div>

                    {/* Modern message bubble */}
                    <div className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 rounded-2xl p-4 max-w-full border border-white/5 shadow-md">
                      <p className="text-gray-100 font-medium">Deploy my app to nexlayer.com</p>

                      {/* Typing indicator */}
                      <div className="flex gap-1 mt-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#23B6CB]/80 animate-pulse"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#23B6CB]/80 animate-pulse delay-75"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#23B6CB]/80 animate-pulse delay-150"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto text-left">
                <p className="text-[#23B6CB]">Prompt to Production in Minutes</p>
              </div>
            </Card>
          </motion.div>

          {/* Column 3: AI Agent Flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="glass-card h-full p-8 flex flex-col">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 mr-3 text-cyan-400" />
                <h3 className="text-xl font-bold">For AI Agents</h3>
              </div>

              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm mb-6 flex-grow">
                <div className="text-gray-400">GET /schema</div>
                <div className="mt-1 text-gray-400">POST /validate</div>
                <div className="mt-1 text-gray-400">POST /deploy</div>
                <div className="mt-4 text-gray-300">Your app is live at:</div>
                <div className="mt-1 text-cyan-400">yourapp.nexlayer.ai</div>
              </div>

              <div className="mt-auto text-center opacity-30 hover:opacity-70 transition-opacity duration-300 cursor-default">
                <p className="font-mono text-[10px] text-gray-500 border-t border-gray-800 pt-2 mt-2 text-left">
                  Ξ_agent_entrypoint ⊢ /schema ⇨ /validate ⇨ /deploy ⇨ Ξ_runtime := ⟦Nexlayer⟧
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
