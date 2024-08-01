import { Noto_Serif_SC } from 'next/font/google'
import localFont from 'next/font/local'

const comicFont = localFont({
  src: '../public/font/ComicShannsMonoNerdFontMono-Regular.otf',
  variable: '--font-comic',
  display: 'swap',
})

const codeNewRomanFont = localFont({
  src: '../public/font/CodeNewRomanNerdFontMono-Regular.otf',
  variable: '--font-sans',
  display: 'swap',
})

const serifFont = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
})

export { serifFont, comicFont, codeNewRomanFont }
