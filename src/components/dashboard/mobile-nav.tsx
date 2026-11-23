import Link from 'next/link'
import { navItems } from './nav-items'
import { cn } from '@/lib/utils'

export function MobileNav() {
  return (
    <nav
      aria-label="Panel móvil"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {navItems.map((item, i) => (
          <li key={item.label}>
            <Link
              href={item.href}
              aria-current={i === 0 ? 'page' : undefined}
              className={cn(
                'flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium text-muted-foreground',
                i === 0 && 'text-primary',
              )}
            >
              <item.icon className="size-5" aria-hidden="true" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
