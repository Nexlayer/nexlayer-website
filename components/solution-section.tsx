"use client"

import { motion } from "framer-motion"
import { MessageSquare, FileCode, Globe, Copy, Check, TerminalIcon, Brain, Rocket } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { CodeBlock } from "@/components/ui/code-block"

export default function SolutionSection() {
  const sectionRef = useRef(null)
  const [promptValue, setPromptValue] = useState("Build me a Next.js app with a Postgres database and deploy it.")
  const [isEditing, setIsEditing] = useState(false)
  const [copied, setCopied] = useState(false)
  const [currentHighlight, setCurrentHighlight] = useState(null)
  const [terminalComplete, setTerminalComplete] = useState(0)
  const [promptCopied, setPromptCopied] = useState(false)

  // YAML content
  const yamlContent = `application:
  name: "PERN App"
  pods:
  - name: postgres
    image: katieharris/pern-postgres-todo:latest
    vars:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: passw0rd
      POSTGRES_DB: todo
      PGDATA: /var/lib/postgresql/data
    servicePorts:
    - 5432
    volumes:
    - name: pg-data-volume
      size: 2Gi
      mountPath: /var/lib/postgresql

  - name: express
    image: katieharris/pern-express-todo:latest
    vars:
      POSTGRES_HOST: postgres.pod
      POSTGRES_USERNAME: postgres
      POSTGRES_PASSWORD: passw0rd
      POSTGRES_DB: todo
    servicePorts:
    - 3000

  - name: react
    path: /
    image: katieharris/pern-react-todo:latest
    vars:
      EXPRESS_URL: http://express.pod:3000
    servicePorts:
    - 80`

  const yamlCustomStyle = {
    'code[class*="language-"]': {
      background: '#000000',
      color: '#d4d4d4',
      fontSize: '0.95em',
      fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace',
      padding: '0',
    },
    'pre[class*="language-"]': {
      background: '#000000',
      color: '#d4d4d4',
      fontSize: '0.95em',
      fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace',
      margin: 0,
      padding: 0,
    },
    'token.key': { color: '#699edb' },
    'token.attr-name': { color: '#699edb' },
    'token.string': { color: '#49de80' },
    'token.number': { color: '#f471b5' },
    'token.boolean': { color: '#c084fc' },
    'token.constant': { color: '#c084fc' },
    'token.class-name': { color: '#c084fc' },
    'token.atrule': { color: '#c084fc' },
    'token.variable': { color: '#c084fc' },
    'token.builtin': { color: '#c084fc' },
    'token.selector': { color: '#c084fc' },
    'token.important': { color: '#c084fc' },
    'token.entity': { color: '#c084fc' },
    'token.operator': { color: '#d4d4d4' },
    'token.function': { color: '#c084fc' },
    'token.regex': { color: '#c084fc' },
    'token.symbol': { color: '#c084fc' },
    'token.deleted': { color: '#f471b5' },
    'token.inserted': { color: '#49de80' },
  }

  // Terminal typing effect
  useEffect(() => {
    if (terminalComplete < 4) {
      const timer = setTimeout(() => {
        setTerminalComplete((prev) => prev + 1)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [terminalComplete])

  // Copy to clipboard function
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const copyPromptToClipboard = () => {
    const promptContent = `
1. Create dockerfile
2. Build (linux/amd64) image and push to ttl.sh
3. Create a nexlayer.yaml for my app
4. Patch nexlayer.yaml - Set the \`image:\` value to your ttl.sh image
5. Deploy with: curl -X POST https://app.nexlayer.io/startUserDeployment -H "Content-Type: text/x-yaml" --data-binary @nexlayer.yaml
6. Get app URL from the response
  `
    navigator.clipboard.writeText(promptContent)
    setPromptCopied(true)
    setTimeout(() => setPromptCopied(false), 2000)
  }

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Meet Nexlayer</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            You've got your app running locally in Cursor, Windsurf, or Copilot.
            <br />
            Now ship it — with one launchfile, one command, or one prompt.
            <br />
            No login. No credit card. Just deploy and see it live.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/10 via-cyan-500/20 to-cyan-500/10 transform -translate-x-1/2 z-0 blur-[0.5px]"></div>

          {/* Step 1: Deployment Options */}
          <motion.div
            className="relative z-10 mb-32 flex items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
          >
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center border border-cyan-500/30 mr-6 flex-shrink-0">
              <MessageSquare className="h-8 w-8 text-cyan-400" />
            </div>
            <div className="glass-card p-6 flex-grow">
              <h3 className="text-2xl font-bold mb-4"></h3>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Column 1: CLI Workflow */}
                <div className="glass-card p-4 flex flex-col">
                  <div className="flex items-center mb-3">
                    <TerminalIcon className="h-5 w-5 mr-2 text-[#23B6CB]" />
                    <h4 className="text-lg font-bold">Install Nexlayer CLI</h4>
                  </div>

                  <div className="bg-black/50 rounded-lg p-3 font-mono text-xs mb-4 flex-grow">
                    <div className="text-[#23B6CB]">
                      $ curl -sSL
                      <br />
                      https://raw.githubusercontent.com/Nexlayer/
                      <br />
                      nexlayer-cli/main/direct_install.sh |<br />
                      bash
                    </div>
                    <div className="my-2 border-t border-b border-white/10 py-1"></div>
                    <p className="text-[#23B6CB]">$ cd my-app</p>
                    <p className="text-[#23B6CB] mt-1">$ nexlayer init</p>
                    <div className="my-2 border-t border-b border-white/10 py-1"></div>
                    <p className="text-[#23B6CB] mt-1">$ nexlayer deploy</p>
                  </div>

                  <p className="text-gray-300 text-xs"></p>
                </div>

                {/* Column 2: AI IDEs & Terminals */}
                <div className="glass-card p-4 flex flex-col">
                  <div className="flex items-center mb-3">
                    <Brain className="h-5 w-5 mr-2 text-[#23B6CB]" />
                    <h4 className="text-lg font-bold">Vibe Deploy</h4>
                  </div>

                  <div className="bg-black/80 p-3 rounded-xl border border-[#23B6CB]/20 mb-4 flex-grow shadow-lg backdrop-blur-sm relative overflow-hidden">
                    {/* Copy button */}
                    <button
                      onClick={copyPromptToClipboard}
                      className="absolute top-2 right-2 z-20 bg-[#23B6CB]/20 hover:bg-[#23B6CB]/30 text-[#23B6CB] text-xs px-2 py-1 rounded flex items-center gap-1 transition-colors"
                    >
                      {promptCopied ? (
                        <>
                          <Check className="h-3 w-3" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Copy prompt</span>
                        </>
                      )}
                    </button>

                    {/* Subtle background glow effect */}
                    <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#23B6CB]/10 blur-3xl rounded-full"></div>

                    {/* Step-by-step guide */}
                    <div className="flex flex-col relative z-10 text-xs space-y-2">
                      <div className="flex items-start gap-1.5">
                        <span className="bg-[#23B6CB]/20 text-[#23B6CB] rounded-full h-4 w-4 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                          1
                        </span>
                        <span className="text-gray-300">Create dockerfile</span>
                      </div>

                      <div className="flex items-start gap-1.5">
                        <span className="bg-[#23B6CB]/20 text-[#23B6CB] rounded-full h-4 w-4 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                          2
                        </span>
                        <span className="text-gray-300">Build (linux/amd64) image and push to ttl.sh</span>
                      </div>

                      <div className="flex items-start gap-1.5">
                        <span className="bg-[#23B6CB]/20 text-[#23B6CB] rounded-full h-4 w-4 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                          3
                        </span>
                        <span className="text-gray-300">Create a nexlayer.yaml for my app</span>
                        <span className="text-[#23B6CB] text-[10px]">GET / https://app.nexlayer.io/schema</span>
                      </div>

                      <div className="flex items-start gap-1.5">
                        <span className="bg-[#23B6CB]/20 text-[#23B6CB] rounded-full h-4 w-4 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                          4
                        </span>
                        <div className="text-gray-300">
                          <span>Patch nexlayer.yaml</span>
                          <div className="ml-5 text-[10px] text-gray-400">
                            - Set the `image:` value to your ttl.sh image
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-1.5">
                        <span className="bg-[#23B6CB]/20 text-[#23B6CB] rounded-full h-4 w-4 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                          5
                        </span>
                        <div className="text-gray-300">
                          <span>Deploy with:</span>
                          <div className="ml-2 mt-1 bg-black/50 p-1.5 rounded font-mono text-[10px] text-[#23B6CB]">
                            curl -X POST https://app.nexlayer.io/startUserDeployment \<br />
                            &nbsp;&nbsp;-H "Content-Type: text/x-yaml" \<br />
                            &nbsp;&nbsp;--data-binary @nexlayer.yaml
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-1.5">
                        <span className="bg-[#23B6CB]/20 text-[#23B6CB] rounded-full h-4 w-4 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                          6
                        </span>
                        <span className="text-gray-300">Get app URL from the response</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Playground CTA */}
              <div className="mt-6 glass-card p-5 bg-gradient-to-r from-[#23B6CB]/20 to-purple-500/20 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Rocket className="h-6 w-6 mr-3 text-[#23B6CB]" />
                    <h4 className="text-xl font-bold text-white">Start from scratch or modify a starter template.</h4>
                  </div>
                  <a
                    href="/playground"
                    rel="noopener noreferrer"
                    className="bg-[#23B6CB] hover:bg-[#23B6CB]/90 text-black font-medium px-4 py-2 rounded-md transition-colors flex items-center gap-1"
                  >
                    <Rocket className="h-4 w-4" />
                    Playground
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 2: Launchfile */}
          <motion.div
            className="relative z-10 mb-32 flex items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
          >
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center border border-cyan-500/30 mr-6 flex-shrink-0">
              <FileCode className="h-8 w-8 text-cyan-400" />
            </div>
            <div className="glass-card p-6 flex-grow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">One Launchfile. Deploy your entire stack.</h3>
                <div className="flex items-center gap-2">
                  <button
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                    onClick={() => copyToClipboard(yamlContent)}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span>{copied ? "Copied!" : "Copy"}</span>
                  </button>
                </div>
              </div>
              <div className="bg-black rounded-lg p-4 font-mono text-sm text-[#d4d4d4] relative">
                <div className="flex justify-between items-center">
                  <p className="text-[#a1a1aa] font-mono text-xs mb-2">PERN Stack — Postgres, Express, React, and Node.</p>
                </div>
                <CodeBlock
                  language="yaml"
                  filename="nexlayer.yaml"
                  code={yamlContent}
                />
                {currentHighlight && (
                  <div className="absolute bottom-2 right-2 bg-gray-800 p-2 rounded text-xs">
                    {currentHighlight === "name" && "The name of your application"}
                    {currentHighlight === "image1" && "Ollama container image to deploy"}
                    {currentHighlight === "image2" && "KD Chat container image to deploy"}
                    {currentHighlight === "ports" && "Ports exposed by your service"}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Step 3: App goes live */}
          <motion.div
            className="relative z-10 flex items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
          >
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center border border-cyan-500/30 mr-6 flex-shrink-0">
              <Globe className="h-8 w-8 text-cyan-400" />
            </div>
            <div className="glass-card p-6 flex-grow">
              <h3 className="text-2xl font-bold mb-4">App goes live</h3>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                  <p className="text-gray-400">$ nexlayer deploy</p>
                </div>
                <p className="mt-2" style={{ opacity: terminalComplete >= 1 ? 1 : 0 }}>
                  ✓ Building application
                </p>
                <p style={{ opacity: terminalComplete >= 2 ? 1 : 0 }}>✓ Provisioning infrastructure</p>
                <p style={{ opacity: terminalComplete >= 3 ? 1 : 0 }}>✓ Deploying to production</p>
                <p className="mt-2 text-green-400" style={{ opacity: terminalComplete >= 4 ? 1 : 0 }}>
                  ✓ Deployment successful! Your app is live at:
                </p>
                <div className="mt-1 text-center" style={{ opacity: terminalComplete >= 4 ? 1 : 0 }}>
                  <motion.a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-lg font-bold inline-block"
                    animate={{
                      textShadow: [
                        "0 0 8px rgba(0, 255, 255, 0.5)",
                        "0 0 16px rgba(0, 255, 255, 0.8)",
                        "0 0 8px rgba(0, 255, 255, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    yourapp.nexlayer.ai
                  </motion.a>
                </div>
                {terminalComplete < 4 && (
                  <div className="flex justify-center mt-4">
                    <button
                      className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 px-4 py-1 rounded transition-colors"
                      onClick={() => setTerminalComplete(4)}
                    >
                      Skip animation
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
