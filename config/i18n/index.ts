// 假设这是 i18n.ts 文件
export const i18n = {
  defaultLocale: 'zh',
  locales: ['en', 'zh'],
} as const

export type Locale = (typeof i18n)['locales'][number]