export const defaultLocale = "ar"
export const locales = ["ar", "en"] as const
export type Locale = (typeof locales)[number]

export const dictionaries = {
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
}

