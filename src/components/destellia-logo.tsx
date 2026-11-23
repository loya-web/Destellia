import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export function DestelliaLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2 font-bold tracking-tight', className)}
      aria-label="Destellia, ir al inicio"
    >
      <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
        <Sparkles className="size-5 text-highlight" aria-hidden="true" />
      </span>
      <span className="text-lg">Destellia</span>
    </Link>
  )
}
