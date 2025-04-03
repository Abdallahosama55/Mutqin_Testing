"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { useState, useEffect } from "react"

interface ContentFramesSectionProps {
  dictionary: any
  direction: "rtl" | "ltr"
}

export function ContentFramesSection({ dictionary, direction }: ContentFramesSectionProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const frames = dictionary.contentFrames.frames

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Use a safe default theme for server rendering
  const currentTheme = mounted ? theme : "light"

  return (
    <section className={`py-16 md:py-24 ${currentTheme === "dark" ? "bg-[#0D1530]" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            {dictionary.contentFrames.title}
          </h2>
        </div>

        <div className="space-y-16">
          {frames.map((frame: any, index: number) => (
            <ContentFrame
              key={index}
              title={frame.title}
              description={frame.description}
              index={index}
              direction={direction}
              theme={currentTheme}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ContentFrameProps {
  title: string
  description: string
  index: number
  direction: "rtl" | "ltr"
  theme: any
}

function ContentFrame({ title, description, index, direction, theme }: ContentFrameProps) {
  const isEven = index % 2 === 0
  const isRTL = direction === "rtl"

  // Adjust layout based on RTL and even/odd index

  const textAlign = isRTL ? "text-right" : "text-left"

  return (
    <div className="flex flex-col md:flex-col items-center gap-8">
      <div className={`space-y-4  ${textAlign}`}>
        <div
          className={`inline-block rounded-full bg-primary/10 px-3 py-1 text-sm ${theme === "dark" ? "text-white" : "text-primary"}`}
        >
          {title}
        </div>
        <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{description}</p>
        <div>
          <Button className="bg-primary hover:bg-primary/90 text-white mt-4">
            <span className="flex items-center">
              {isRTL ? (
                <>
                  اكتشف المزيد
                  <ChevronLeft className="ms-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Discover More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ms-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>
              )}
            </span>
          </Button>
        </div>
      </div>

      <div className={` `}>
        <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="bg-gradient-to-br from-purple-600 to-amber-400 p-1 rounded-lg">
            <div className={`rounded-lg overflow-hidden ${theme === "dark" ? "bg-[#0A1128]" : "bg-white"} p-1`}>
              <img src="/placeholder.svg?height=200&width=900" alt="Content Editor Interface" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

