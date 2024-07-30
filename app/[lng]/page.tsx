import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn, sortPosts } from '@/lib/utils'
import Link from 'next/link'
import { posts } from '#site/content'
import { PostItem } from '@/components/post-item'
import { type Locale } from '@/config/i18n'
import { useTranslation } from '../i18n/locales/server'

interface HomeProps {
  params: {
    lng: Locale
  }
}

export default async function Home({ params: { lng } }: HomeProps) {
  const { t } = await useTranslation(lng, 'basic')
  const latestPosts = sortPosts(posts).slice(0, 2)
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            hello,I'm sayoriqwq
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            welcome to my blog! Built using Next.js and Tailwind CSS.
            {t('like')}
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
      <section className="container flex flex-col max-w-4xl py-6 lg:py-10 space-y-6 mt-60">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-blank">
          Nowadays
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map(
            (post) =>
              post.published && (
                <li
                  key={post.slug}
                  className="first:border-t first:border-border"
                >
                  <PostItem
                    slug={post.slug}
                    title={post.title}
                    description={post.description || ''}
                    date={post.date}
                    tags={post.tags}
                  ></PostItem>
                </li>
              )
          )}
        </ul>
      </section>
    </>
  )
}
