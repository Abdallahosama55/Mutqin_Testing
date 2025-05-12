import { Globe } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/i18n/config"

interface LanguageSelectorProps {
  currentLang: Locale
  dictionary: any
}

export function LanguageSelector({ currentLang, dictionary }: LanguageSelectorProps) {
  const otherLang = currentLang === "ar" ? "en" : "ar"

  return (
    <Link
      href={`/${otherLang}`}
      className="flex items-center gap-1 dark:bg-[#313030] bg-gray-100 rounded-full px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-200 transition-colors"
    >
      <Globe className="h-4 w-4" />
      <span>{dictionary.navbar.language.current}</span>
    </Link>
  )
}

