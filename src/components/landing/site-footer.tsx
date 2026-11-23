import { DestelliaLogo } from '@/components/destellia-logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:px-6">
        <DestelliaLogo className="text-foreground" />
        <p>© {new Date().getFullYear()} Destellia. Educación que ilumina.</p>
      </div>
    </footer>
  )
}
