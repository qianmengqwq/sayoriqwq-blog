import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/page/header/site-header'
import { Providers } from '@/components/providers'
import { siteConfig } from '@/config/site'
import { SiteFooter } from '@/components/page/footer/site-footer'
import { dir } from 'i18next'
import { i18n, type Locale } from '@/config/i18n'
import { WebVitals } from '@/components/webVitals'
import { codeNewRomanFont } from '@/config/fonts'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: `${siteConfig.name}`,
  description: `${siteConfig.description}`,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'dark' },
  ],
}

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode
  params: { lng: Locale }
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          codeNewRomanFont.variable
        )}
      >
        <WebVitals />
        <Providers>
          <div className="relative flex flex-col min-h-dvh">
            <SiteHeader></SiteHeader>
            <div className="bg-content">
              <main className="flex-1"> {children}</main>
              <SiteFooter></SiteFooter>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
