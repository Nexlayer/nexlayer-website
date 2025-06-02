"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Bell } from "lucide-react";
import { useState, useEffect } from "react";
import { useNotifications } from "@/components/launch-notifications";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { unreadCount, isPanelOpen, setIsPanelOpen, markAllRead } =
    useNotifications();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    if (isPanelOpen) {
      markAllRead();
    }
  }, [isPanelOpen]);

  const handleClick = () => {
    setIsPanelOpen(true);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-card/60 border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/nexlayer-logo.png"
            alt="Nexlayer"
            width={180}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <div className="flex items-center gap-4">
          <span className="px-4 py-1 bg-yellow-400 text-black text-sm font-bold rounded-full flex items-center">
            beta
          </span>
          <div
            className="relative cursor-pointer hover:!opacity-80 group"
            onClick={handleClick}
          >
            <Bell className="group-hover:text-[#23b6ca]"/>
            {unreadCount > 0 && (
              <div className="absolute -top-1.5 -right-1.5 size-5 px-0 flex items-center justify-center bg-red-500 rounded-full font-medium text-white shadow-sm">
                <span className={unreadCount > 99 ? "text-[10px]" : "text-xs"}>
                  {unreadCount > 99 ? "99+" : unreadCount}
                </span>
              </div>
            )}{" "}
          </div>
          <Link href="https://app.nexlayer.io/auth" className="text-white hover:text-[#23b6ca]">
            Login
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
