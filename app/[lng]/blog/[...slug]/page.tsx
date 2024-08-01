import { posts } from '#site/content'
import { MDXContent } from '@/components/mdx.comonents'
import { notFound } from 'next/navigation'

import '@/styles/mdx.css'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { Tag } from '@/components/post/tag'
interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/')
  const post = posts.find(post => post.slugAsParams === slug)

  return post
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return posts.map(post => ({ slug: post.slugAsParams.split('/') }))
}

async function generateMetaData({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set('title', post.title)
  ogSearchParams.set('description', post.description || '')
  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: post.slug,
      // TODO: image
      images: [],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <article className='container py-6 prose dark:prose-invert max-w-3xl mx-auto'>
      <h1 className='mb-2'>{post.title}</h1>
      {post.tags?.map(tag => (
        <Tag
          tag={tag}
          key={tag}
        ></Tag>
      ))}
      {post.description ? (
        <p className='text-xl mt-0 text-muted-foreground'>{post.description}</p>
      ) : null}
      <hr className='my-4' />
      <MDXContent code={post.body}></MDXContent>
    </article>
  )
}
