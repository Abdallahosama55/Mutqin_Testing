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
  const isRTL = direction === "rtl"

  return (
    <section className={`py-16 md:py-12 `}>
      <div className="container mx-auto px-4">
  

        <div className="space-y-16">
          {frames.map((frame: any, index: number) => (
            <ContentFrame
              key={index}
              scrImg={frame.scrImg}
              title={frame.title}
              description={frame.description}
              index={index}
              direction={direction}
              theme={currentTheme}
            />
          ))}
                <div className=" flex justify-center w-full">
                <Button
            className=" relative overflow-hidden group transition-all duration-300 bg-[#6C31FF] md:flex lg:w-auto py-6 px-6 hover:bg-[#5a29d4] text-white"
            size="sm"
          >
            <span className="flex items-center text-sm">
              <span className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2 text-lg text-base-black w-full font-semibold transition-all duration-500 group-hover:bottom-[-30px] text-center">
                {dictionary.navbar.startNow}
              </span>

              {/* Main text */}
              <span className="text-[16px] text-base-black font-medium leading-[160%]">
                {dictionary.navbar.startNow}
              </span>

              <ChevronLeft className="ms-1 h-4 w-4" />
            </span>
          </Button>
        </div>
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
  theme: any,
  scrImg:any
}

function ContentFrame({ title, scrImg,description, index, direction, theme }: ContentFrameProps) {

  const isRTL = direction === "rtl"

  // Adjust layout based on RTL and even/odd index

  const textAlign = isRTL ? "text-right" : "text-left"

  return (
    <div className="flex border rounded-xl shadow border-[#1A6ADC] dark:bg-[#0A1128]   flex-col md:flex-col  p-6 gap-8">
      <div className={`space-y-4  lg:w-[40%] ${textAlign}`}>
        <div
          className={`inline-block rounded-lg font-bold bg-primary/10 px-3 py-3 text-sm ${theme === "dark" ? "text-white" : "text-[#692BEF]"}`}
        >
          {title}
        </div>
        <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{description}</p>
  
      </div>

      <div className={` `}>
        <div className="rounded-lg overflow-hidden  dark:border-gray-700 ">
        
            <div className={`rounded-lg overflow-hidden  p-1`}>
              <img src={scrImg} alt="Content Editor Interface" className="w-full h-auto rounded-lg" />
            </div>
       
        </div>
      </div>
    </div>
  )
}

