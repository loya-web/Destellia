import { Award, Clock, Flame, GraduationCap } from 'lucide-react'

const stats = [
  { label: 'Horas de tutoría', value: '18 h', icon: Clock, className: 'bg-primary/10 text-primary' },
  { label: 'Racha de estudio', value: '6 días', icon: Flame, className: 'bg-accent/15 text-accent' },
  { label: 'Insignias', value: '9', icon: Award, className: 'bg-highlight/35 text-highlight-foreground' },
  { label: 'Becas guardadas', value: '5', icon: GraduationCap, className: 'bg-primary/10 text-primary' },
]

export function StatsGrid() {
  return (
    <section aria-label="Resumen" className="grid grid-cols-2 gap-3 md:gap-4 xl:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-border bg-card p-4 md:p-5">
          <span className={`flex size-10 items-center justify-center rounded-xl ${stat.className}`}>
            <stat.icon className="size-5" aria-hidden="true" />
          </span>
          <p className="mt-4 text-2xl font-extrabold tracking-tight">{stat.value}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </section>
  )
}
