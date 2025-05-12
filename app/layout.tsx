import type React from "react"
import type { Metadata } from "next"
import { Almarai } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

import { Suspense } from "react"
import Loading from "./loading"
import Script from "next/script"

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
})

export const metadata: Metadata = {
  title: "مُتْقَن",
  description: "A responsive landing page with RTL/LTR and dark/light mode support",
  generator: "مُتْقَن",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" suppressHydrationWarning>
  <head>
          <Script id="theme-script" strategy="beforeInteractive">
  {`
    (function() {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    })();
  `}
</Script>

  </head>
      <body className={`${almarai.variable} font-almarai`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
       
          {children}
       
        </ThemeProvider>
      </body>
    </html>
  )
}
