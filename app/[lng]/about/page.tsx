import { useTranslation } from '@/app/i18n/locales/server'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { Locale } from '@/config/i18n'
import { siteConfig } from '@/config/site'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
  description: `Information about ${siteConfig.author}`,
}

interface AboutPageProps {
  lng: Locale
}

export default async function Page({ lng }: AboutPageProps) {
  const { t } = await useTranslation(lng, 'basic')
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            {t('aboutMe')}
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="../../../imgs/avatar.jpeg" alt={siteConfig.author}></AvatarImage>
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            {siteConfig.description}
          </p>
        </div>
        <p className="text-muted-foreground text-center text-lg py-4"></p>
      </div>
    </div>
  )
}
