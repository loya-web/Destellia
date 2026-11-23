import { TutoringSessionDialog } from '@/components/dashboard/tutoring-session-dialog'

export function WelcomeBanner() {
  return (
    <section
      aria-labelledby="welcome-title"
      className="relative overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground md:p-8"
    >
      <div
        className="absolute -right-10 -top-10 size-48 rounded-full bg-highlight/30 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-primary-foreground/75">Martes, 4 de noviembre</p>
          <h1 id="welcome-title" className="mt-1 text-2xl font-extrabold tracking-tight md:text-3xl">
            ¡Hola, Lucía! Hoy es un gran día para aprender.
          </h1>
          <p className="mt-2 max-w-lg text-primary-foreground/80">
            Tienes 2 tutorías esta semana y 3 becas que cierran pronto.
          </p>
        </div>
        <TutoringSessionDialog triggerClassName="self-start md:self-auto" />
      </div>
    </section>
  )
}
