import Link from 'next/link'
import { ArrowUpRight, Atom, Calculator, CheckCircle2, GraduationCap } from 'lucide-react'

const features = [
  {
    href: '/dashboard',
    title: 'Tutorías en Matemáticas y Ciencias',
    description:
      'Sesiones 1 a 1 o en grupo con tutores verificados. Álgebra, geometría, física, química y biología.',
    points: ['Primera sesión gratis', 'Horarios flexibles', 'Material de repaso'],
    cta: 'Ver tutorías',
    icons: [Calculator, Atom],
    tone: 'primary' as const,
  },
  {
    href: '/dashboard#becas',
    title: 'Directorio de Becas',
    description:
      'Encuentra becas nacionales e internacionales filtradas según tu perfil, promedio e intereses.',
    points: ['+350 becas activas', 'Alertas de fechas límite', 'Guías de postulación'],
    cta: 'Explorar becas',
    icons: [GraduationCap],
    tone: 'accent' as const,
  },
]

export function FeatureCards() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Servicios</p>
          <h2
            id="servicios-title"
            className="mt-2 text-balance text-3xl font-extrabold tracking-tight md:text-4xl"
          >
            Todo lo que necesitas para destacar
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Elige por dónde empezar. Puedes combinar ambos desde tu panel personal.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const isPrimary = feature.tone === 'primary'
            return (
              <Link
                key={feature.title}
                href={feature.href}
                className={
                  isPrimary
                    ? 'group relative flex flex-col overflow-hidden rounded-3xl bg-primary p-7 text-primary-foreground shadow-xl shadow-primary/20 transition-transform hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-ring/40 md:p-9'
                    : 'group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-ring/40 md:p-9'
                }
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-2">
                    {feature.icons.map((Icon, i) => (
                      <span
                        key={i}
                        className={
                          isPrimary
                            ? 'flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/15'
                            : 'flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent'
                        }
                      >
                        <Icon className="size-6" aria-hidden="true" />
                      </span>
                    ))}
                  </div>
                  <span
                    className={
                      isPrimary
                        ? 'flex size-10 items-center justify-center rounded-full bg-highlight text-highlight-foreground transition-transform group-hover:rotate-45'
                        : 'flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45'
                    }
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold tracking-tight">{feature.title}</h3>
                <p
                  className={
                    isPrimary
                      ? 'mt-2 leading-relaxed text-primary-foreground/80'
                      : 'mt-2 leading-relaxed text-muted-foreground'
                  }
                >
                  {feature.description}
                </p>

                <ul className="mt-6 flex flex-col gap-2">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm font-medium">
                      <CheckCircle2
                        className={isPrimary ? 'size-4 text-highlight' : 'size-4 text-accent'}
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <span
                  className={
                    isPrimary
                      ? 'mt-8 text-sm font-semibold text-highlight'
                      : 'mt-8 text-sm font-semibold text-primary'
                  }
                >
                  {feature.cta} →
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
