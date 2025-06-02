"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Slack } from "lucide-react"

export default function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Launchfile", href: "https://docs.nexlayer.com/documentation/learn/launchfile" },
        { name: "CLI Docs", href: "https://docs.nexlayer.com/cli" },
        { name: "API Reference", href: "https://docs.nexlayer.com/api" },
        { name: "Updates", href: "https://community.nexlayer.com/" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "https://community.nexlayer.com/" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Playground", href: "https://nexlayer.com/playground/" },
        { name: "Step-by-Step Guide", href: "https://docs.nexlayer.com/documentation/learn" },
        { name: "Starter Templates", href: "https://app.nexlayer.io/nexlayer-deployment-wizard" },
      ],
    },
  ]

  return (
    <footer className="relative border-t border-white/10">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Nexlayer</h3>
              <p className="text-gray-400 mb-6">The AI-Native Cloud Platform for the next generation of builders.</p>
              <div className="flex space-x-4">
                <Link href="https://github.com/Nexlayer/documentation/issues" target="_blank" className="text-gray-400 transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://x.com/nexlayerai" target="_blank" className="text-gray-400 transition-colors">
                  <Image src="/x.svg" alt="X icon" width={20} height={20}/>
                </Link>
                <Link href="https://community.nexlayer.com/" target="_blank" className="text-gray-400  transition-colors -mt-1">
                  <Image src="/community.svg" alt="X icon" width={28} height={28}/>
                </Link>
              </div>
            </motion.div>
          </div>

          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h3 className="font-medium text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} Nexlayer. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/legal/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="text-gray-500 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
