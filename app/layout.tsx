import type React from "react"
import type { Metadata } from "next"
import { Almarai } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
})

export const metadata: Metadata = {
  title: "RTL/LTR Landing Page",
  description: "A responsive landing page with RTL/LTR and dark/light mode support",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body className={`${almarai.variable} font-almarai`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'