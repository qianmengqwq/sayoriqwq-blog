import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import type { FC } from 'react'
import { buttonVariants } from '../../ui/button'
import { comicFont } from '@/config/fonts'
import type { Locale } from '@/config/i18n'

interface AboveFoldProps {
  lng: Locale
}

export const AboveFold: FC<AboveFoldProps> = ({ lng }) => {
  return (
    <section className="w-full h-screen flex items-center bg-img">
      <div className="container flex flex-col gap-4 text-center">
        <h1
          className={`text-3xl text-white sm:text-5xl md:text-6xl lg:text-7xl ${comicFont.className}`}
        >
          {siteConfig.name}
        </h1>
        <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
          「{siteConfig.description}」
        </p>
        <div className="flex flex-col gap-4 justify-center sm:flex-row">
          <Link
            href={`${lng}/blog`}
            className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-fit')}
          >
            See my blog?
          </Link>
          <Link
            href={`${lng}/${siteConfig.links.github}`}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'w-full sm:w-fit'
            )}
          >
            Github
          </Link>
        </div>
      </div>
    </section>
  )
}
