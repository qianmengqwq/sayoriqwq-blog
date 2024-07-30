import { defineCollection, defineConfig, s } from 'velite'
import rehypeslug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'

// /blog/helloworld,裁剪掉/blog/
const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split('/').slice(1).join('/'),
})

const posts = defineCollection({
  name: 'Post', // collection type name
  pattern: 'blog/**/*.mdx', // content files glob pattern
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.path(),
      description: s.string().max(199).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      tags: s.array(s.string()).optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [
      rehypeslug,
      [rehypePrettyCode, { theme: 'github-dark' }],
      [
        rehypeAutoLinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
})
