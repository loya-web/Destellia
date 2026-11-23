'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { DestelliaLogo } from '@/components/destellia-logo'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '/dashboard', label: 'Mi panel' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <DestelliaLogo />

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/dashboard" className={cn(buttonVariants({ variant: 'ghost' }), 'h-10 px-4')}>
            Iniciar sesión
          </Link>
          <Link
            href="#agendar"
            className={cn(buttonVariants(), 'h-10 rounded-full px-5 font-semibold')}
          >
            Empieza gratis
          </Link>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-lg text-foreground hover:bg-muted md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Principal móvil"
          className="border-t border-border bg-background px-4 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-medium hover:bg-muted"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#agendar"
            onClick={() => setOpen(false)}
            className={cn(buttonVariants(), 'mt-4 h-12 w-full rounded-full text-base font-semibold')}
          >
            Empieza gratis
          </Link>
        </nav>
      )}
    </header>
  )
}
