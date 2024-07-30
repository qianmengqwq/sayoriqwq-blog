// 我们在这里列举所有字典，以便获得更好的 linting 和 TypeScript 支持
import 'server-only'
import type { Locale } from '.'

// 我们还获取默认导入以获得更清晰的类型
const dictionaries = {
  en: () => import('./locales/en/basic.json').then((module) => module.default),
  zh: () => import('./locales/zh/basic.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries['zh']()
