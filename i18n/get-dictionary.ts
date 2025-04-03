import "server-only"
import { type Locale, dictionaries } from "./config"

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]()
}

