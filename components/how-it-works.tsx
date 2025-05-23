"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function HowItWorks() {
  const users = [
    {
      type: "Developers",
      benefit: "Flexibility, control, speed, and production-ready.",
    },
    {
      type: "Vibe Coders",
      benefit: "No infrastructure PhD. Just vibe → deploy",
    },
    {
      type: "AI Startups",
      benefit: "Scale your product globally without hiring DevOps",
    },
    {
      type: "AI Agents",
      benefit: "Agent-friendly APIs. The cloud AI agents can talk to."
    },
  ]

  return (
    <section className="py-24 relative">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Built for builders. Engineered for AI.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="glass-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-white/10">
                  <TableHead className="text-white text-lg">For</TableHead>
                  <TableHead className="text-white text-lg">What They Get</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <TableCell className="font-medium text-white">{user.type}</TableCell>
                    <TableCell className="text-gray-300">{user.benefit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
