import { Bell, Search } from 'lucide-react'
import { DestelliaLogo } from '@/components/destellia-logo'

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
      <div className="flex h-16 items-center gap-3 px-4 md:px-8">
        <DestelliaLogo className="lg:hidden" />

        <label className="relative ml-auto hidden max-w-sm flex-1 sm:block lg:ml-0">
          <span className="sr-only">Buscar tutorías o becas</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Buscar tutorías, temas o becas..."
            className="h-10 w-full rounded-full border border-input bg-muted pl-9 pr-4 text-sm outline-none transition focus:border-primary focus:bg-background focus:ring-3 focus:ring-ring/20"
          />
        </label>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            className="relative flex size-10 items-center justify-center rounded-full hover:bg-muted"
            aria-label="Notificaciones, 3 nuevas"
          >
            <Bell className="size-5" aria-hidden="true" />
            <span className="absolute right-2 top-2 size-2 rounded-full bg-accent" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-3">
            <span
              className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary"
              aria-hidden="true"
            >
              LM
            </span>
            <div className="hidden leading-tight md:block">
              <p className="text-sm font-semibold">Lucía Martínez</p>
              <p className="text-xs text-muted-foreground">4.º de secundaria</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
