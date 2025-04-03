"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "@radix-ui/react-slot"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
  className?: string
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Button ref={ref} className={cn("group relative overflow-hidden", className)} {...props}>
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="relative block"
          whileHover={{ y: 0 }}
        >
          {children}
        </motion.span>
      </Button>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"

