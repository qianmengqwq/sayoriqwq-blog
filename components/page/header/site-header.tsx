import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '../../ui/button'
import { Icons } from '../../icons'
import { MainNav } from './nav/main-nav'
import { MobileNav } from './nav/mobile-nav'
import { ModeToggle } from '@/components/tool-bar/mode-toggle'
import LocaleSwitcher from '../../tool-bar/locale-switcher'

export function SiteHeader() {
  return (
    <header className="z-10 fixed top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav></MainNav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-10 px-0 hidden sm:inline-flex'
                )}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-10 px-0 hidden sm:inline-flex'
                )}
              >
                <Icons.twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <Link href={siteConfig.links.qq} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-10 px-0 hidden sm:inline-flex'
                )}
              >
                <Icons.qq className="h-6 w-6" />
                <span className="sr-only">qq</span>
              </div>
            </Link>
            <ModeToggle></ModeToggle>
            <LocaleSwitcher></LocaleSwitcher>
            <MobileNav></MobileNav>
          </nav>
        </div>
      </div>
    </header>
  )
}
