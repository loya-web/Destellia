import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { DestelliaLogo } from '@/components/destellia-logo'
import { navItems } from './nav-items'
import { cn } from '@/lib/utils'

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar p-5 lg:flex">
      <DestelliaLogo />

      <nav aria-label="Panel" className="mt-10 flex-1">
        <ul className="flex flex-col gap-1">
          {navItems.map((item, i) => (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={i === 0 ? 'page' : undefined}
                className={cn(
                  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                  i === 0 && 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
                )}
              >
                <item.icon className="size-5" aria-hidden="true" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="rounded-2xl bg-highlight/30 p-4">
        <Sparkles className="size-5 text-accent" aria-hidden="true" />
        <p className="mt-2 text-sm font-bold">¡Racha de 6 días!</p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          Estudia hoy para mantener tu racha y ganar una insignia.
        </p>
      </div>
    </aside>
  )
}
