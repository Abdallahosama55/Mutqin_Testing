"use client"

import { useState, useEffect, useTransition } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"


export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same dimensions to avoid layout shift
    return <div className="w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
  }

  const isDark = theme === "dark"

  return (
    <div
      className="relative w-14 h-7 rounded-full p-1 cursor-pointer flex items-center"
      style={{
        background: "linear-gradient(to right, #30B8C4, #FFAA45)",
      }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div className="absolute inset-0 rounded-full flex items-center justify-between px-2">
        <Sun className="h-4 w-4 text-white" />
        <Moon className="h-4 w-4 text-white" />
      </div>
      <motion.div
        className="w-6 h-6 rounded-full sun  shadow-md z-10"
        animate={{ x: isDark ? -26 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      />
    </div>
  )
}

