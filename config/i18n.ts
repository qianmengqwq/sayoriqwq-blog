export const i18n = {
  defaultLocale: 'zh',
  locales: ['en', 'zh'],
  cookieName: '_sayori_NEXT_LOCALE',
  defaultNS: 'basic',
}

export type Locale = (typeof i18n)['locales'][number]

export function getOptions(lng = i18n.defaultLocale, ns = i18n.defaultNS) {
  return {
    // debug: true,
    supportedLngs: i18n.locales,
    fallbackLng: i18n.defaultLocale,
    lng,
    fallbackNS: i18n.defaultNS,
    defaultNS: i18n.defaultNS,
    ns,
  }
}
