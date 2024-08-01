import { type Locale } from '@/config/i18n'
import { AboveFold } from '@/components/page/main/above-fold'
import { BlogPreview } from '@/components/page/main/blog-preview'

interface HomeProps {
  params: {
    lng: Locale
  }
}

export default async function Home({ params: { lng } }: HomeProps) {
  return (
    <>
      <AboveFold lng={lng} />
      <BlogPreview lng={lng} />
    </>
  )
}
