import { posts } from '@/.velite'
import { cn, sortPosts } from '@/lib/utils'
import type { FC } from 'react'
import { PostItem } from '../../post/post-item'
import { useTranslation } from '@/app/i18n/locales/server'
import type { Locale } from '@/config/i18n'
import Link from 'next/link'
import { buttonVariants } from '../../ui/button'

interface BlogPreviewProps {
  lng: Locale
}

export const BlogPreview: FC<BlogPreviewProps> = async ({ lng }) => {
  const latestPosts = sortPosts(posts).slice(0, 2)
  const { t } = await useTranslation(lng, 'basic')
  return (
    <section className="mt-10">
      <div className="grid grid-cols-2 gap-4 mx-12">
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-lg w-full">
            <h2 className="font-blank text-2xl font-bold mb-6">
              {t('latestPosts')}
            </h2>
            <ul className="flex flex-col space-y-3 pl-3">
              {latestPosts.map(
                (post) =>
                  post.published && (
                    <li key={post.slug} className="w-full">
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
            <Link
              href={`/${lng}/blog`}
              className={cn(
                buttonVariants({ variant: 'link' }),
                'flex justify-end'
              )}
            >
              {t('readMore')} →
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-blank text-2xl font-bold mb-6">{t('notes')}</h2>
        </div>
      </div>
    </section>
  )
}
