"use client"
import { Scale, Network, RefreshCw, Key, TrendingUp, BarChart3, Layers, Shield, Building } from "lucide-react"

export default function TechStack() {
  const features = [
    {
      icon: <Scale className="h-6 w-6 text-[#23B6CB]" />,
      title: "Global Autoscaling",
      description: "Handles traffic surges, scales down to save. Zero config.",
    },
    {
      icon: <Network className="h-6 w-6 text-[#23B6CB]" />,
      title: "Auto Networking",
      description: "Service discovery, load balancing, and routing built-in.",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-[#23B6CB]" />,
      title: "Auto-Healing Containers",
      description: "Automatic recovery from failures. No downtime.",
    },
    {
      icon: <Key className="h-6 w-6 text-[#23B6CB]" />,
      title: "Secrets & Volumes",
      description: "Secure storage for API keys and persistent data. No config needed.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#23B6CB]" />,
      title: "Predictive AI Scaling",
      description: "Optimizes resources for AI workloads based on usage patterns.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-[#23B6CB]" />,
      title: "Built-in Observability",
      description: "Logs, metrics, and traces without additional setup.",
    },
    {
      icon: <Layers className="h-6 w-6 text-[#23B6CB]" />,
      title: "Full-Stack Workloads",
      description: "Run frontends, backends, workers, and databases in one place.",
    },
    {
      icon: <Shield className="h-6 w-6 text-[#23B6CB]" />,
      title: "Zero-Downtime Deploys",
      description: "Ship updates without interruption. Automatic rollbacks if needed.",
    },
    {
      icon: <Building className="h-6 w-6 text-[#23B6CB]" />,
      title: "Proven Infra Backbone",
      description: "Built on battle-tested GKE with enterprise-grade reliability.",
    },
  ]

  return null
}
