import { CalendarCheck, Rocket, UserPlus } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Crea tu perfil',
    text: 'Cuéntanos tu curso, materias y metas en menos de 2 minutos.',
  },
  {
    icon: CalendarCheck,
    title: 'Agenda tu tutoría',
    text: 'Elige tutor y horario. La primera sesión es totalmente gratuita.',
  },
  {
    icon: Rocket,
    title: 'Avanza y postula',
    text: 'Sigue tu progreso y recibe becas recomendadas para tu perfil.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      className="bg-secondary py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2
          id="como-funciona-title"
          className="text-balance text-center text-3xl font-extrabold tracking-tight md:text-4xl"
        >
          Empezar es muy fácil
        </h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-3xl bg-background p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <step.icon className="size-6" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold text-accent">Paso {i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
