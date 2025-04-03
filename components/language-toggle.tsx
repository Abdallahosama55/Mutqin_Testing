import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/i18n/config"

interface LanguageToggleProps {
  currentLang: Locale
  dictionary: any
}

export function LanguageToggle({ currentLang, dictionary }: LanguageToggleProps) {
  const otherLang = currentLang === "ar" ? "en" : "ar"

  return (
    <Button variant="outline" size="icon" asChild>
      <Link href={`/${otherLang}`}>
        <Languages className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">{dictionary.navbar.language.switchTo}</span>
      </Link>
    </Button>
  )
}

