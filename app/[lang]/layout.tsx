import type React from "react"
import type { Metadata } from "next"
import { Almarai } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { type Locale, locales } from "@/i18n/config"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/i18n/get-dictionary"
import { useTheme } from "next-themes"
import { SolutionsCarousel } from "@/components/solutions-carousel"
import Head from "next/head"
const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
})

export const metadata: Metadata = {
  title: "مُتْقِن",
  description: "A responsive landing page with RTL/LTR and dark/light mode support",
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: Locale }
}>) {
  const dictionary = await getDictionary(params.lang)
  const direction = params.lang === "ar" ? "rtl" : "ltr"

  return (
    <html lang={params.lang} dir={direction} suppressHydrationWarning>
      
      <body className={`${almarai.variable} font-almarai`}    >

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
           <Head>
              <link rel="icon" href="/logo.png" />
            </Head>
          <div className="flex lg:mx-32 mx-4 flex-col min-h-screen " >
            <Navbar currentLang={params.lang} dictionary={dictionary}  />
            <main className="flex-grow">{children}</main>
       
          </div>
          <Footer direction={direction} dictionary={dictionary} />
            
        </ThemeProvider>
      </body>
    </html>
  )
}

