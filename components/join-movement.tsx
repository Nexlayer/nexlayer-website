"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function JoinMovement() {
  const testimonials = [
    {
      quote: "I shipped in 42 seconds with Nexlayer",
      author: "Sarah Chen",
      role: "CTO, AI Startup",
      avatar: "/confident-tech-leader.png",
    },
    {
      quote: "Nexlayer eliminated our DevOps team overnight",
      author: "Michael Rodriguez",
      role: "Lead Developer",
      avatar: "/confident-tech-lead.png",
    },
    {
      quote: "Our AI agents deploy autonomously now",
      author: "Aisha Johnson",
      role: "AI Researcher",
      avatar: "/aisha-johnson.jpg",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            We're building the runtime of the agent era
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="glass-card h-full p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <p className="text-xl text-gray-200 italic">"{testimonial.quote}"</p>
                  </div>
                  <div className="mt-auto flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
