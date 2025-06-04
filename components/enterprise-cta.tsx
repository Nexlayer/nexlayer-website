"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import GlobeDemo from "./globe-demo";
import { useNotifications } from "@/components/launch-notifications";

export default function EnterpriseCTA() {
  const baseCount = 9369;
  const { notifications } = useNotifications();
  const deploymentCount = baseCount + notifications.length;

  return (
    <section className="pb-16 relative overflow-hidden">
      <div className="section-container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-sm font-semibold tracking-wider text-[#23B6CB] uppercase mb-2">
                Built for scale
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#23B6CB]">Enterprise</span> grade
                infrastructure
              </h2>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-xs flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-[#23B6CB]" />
                  <span>Fast</span>
                </div>
                <div className="px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-xs flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-[#23B6CB]" />
                  <span>Powerful</span>
                </div>
                <div className="px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-xs flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-[#23B6CB]" />
                  <span>Secure</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-white/5">
                  <div className="text-3xl font-bold text-white mb-1">
                    99.99%
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Uptime
                  </div>
                </div>
                <div className="p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-white/5">
                  <div className="text-3xl font-bold text-white mb-1">
                    100ms
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Latency
                  </div>
                </div>
                <div className="p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-white/5">
                  <div className="text-3xl font-bold text-white mb-1">
                    {deploymentCount.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Deployments
                  </div>
                </div>
                <div className="p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-white/5">
                  <div className="text-3xl font-bold text-white mb-1">
                    60s
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Zero to Global
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-3">
                Ready to <span className="text-[#23B6CB]">ship</span>?
              </h3>
              <p className="text-gray-300 mb-6">
                Help us shape the future of autonomous deployments. We're in
                early beta — so no registration gates to try it first. No credit
                card. Just deploy, and tell us what breaks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://docs.nexlayer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#23B6CB] text-black hover:bg-[#23B6CB]/90 hover:shadow-[0_0_15px_rgba(35,182,203,0.5)] h-12 rounded-md px-8 text-lg font-medium flex items-center justify-center"
                >
                  Get started
                </a>
                <a
                  href="/playground"
                  rel="noopener noreferrer"
                  className="border border-white/10 bg-transparent hover:bg-white/5 text-white h-12 rounded-md px-8 text-lg flex items-center justify-center"
                >
                  Playground
                </a>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                No credit card required
              </p>
            </motion.div>
          </div>

          {/* Right side: 3D Globe visualization */}
          <motion.div
            className="relative h-[500px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <GlobeDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
