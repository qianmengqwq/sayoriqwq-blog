import { posts } from '#site/content'
import { PostItem } from '@/components/post-item'
import { QueryPagination } from '@/components/query-pagination'
import { Tag } from '@/components/tag'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { siteConfig } from '@/config/site'
import { getAllTags, sortPosts, sortTagsByCount } from '@/lib/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'my blog',
  description: `${siteConfig.author}'s blog`,
}

const POST_PER_PAGE = 5

interface BlogPageProps {
  searchParams: {
    page?: string
  }
}
export default async function BlogPage({ searchParams }: BlogPageProps) {
  const page = Number(searchParams?.page) || 1
  const sortedPosts = sortPosts(posts.filter(post => post.published))
  const total = Math.ceil(sortedPosts.length / POST_PER_PAGE)

  const displayPosts = sortedPosts.slice(
    (page - 1) * POST_PER_PAGE,
    page * POST_PER_PAGE
  )

  const tags = getAllTags(posts)
  const sortedTags = sortTagsByCount(tags)
  return (
    <div className='container max-w-4xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>Blog</h1>
          <p className='text-xl text-muted-foreground'>
            My rambings on all things web dev
          </p>
        </div>
      </div>
      <hr className='mt-8' />
      {displayPosts?.length > 0 ? (
        <ul className='flex flex-col'>
          {displayPosts.map(post => {
            const { slug, date, title, description, tags } = post
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  date={date}
                  title={title}
                  description={description || ''}
                  tags={tags}
                ></PostItem>
              </li>
            )
          })}
        </ul>
      ) : (
        <p>Nothing now</p>
      )}
      <QueryPagination
        total={total}
        className='justify-end mt-4'
      ></QueryPagination>
      <Card className='col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1'>
        <CardHeader>
          <CardTitle>Tags</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-wrap gap-2'>
          {sortedTags?.map(tag => (
            <Tag
              tag={tag}
              key={tag}
              count={tags[tag]}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
