import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarCheck, Star, Users } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section
      id="agendar"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-b from-secondary to-background"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 md:grid-cols-2 md:px-6 md:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background px-3 py-1 text-xs font-semibold text-primary shadow-sm">
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            Para estudiantes de secundaria
          </span>

          <h1
            id="hero-title"
            className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Ilumina tu{' '}
            <span className="relative z-0 inline-block whitespace-nowrap text-primary">
              futuro
              <span
                className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-highlight/70"
                aria-hidden="true"
              />
            </span>{' '}
            académico
          </h1>

          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Tutorías personalizadas con mentores universitarios y un directorio de becas pensado
            para ti. Aprende a tu ritmo y llega más lejos.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants(),
                'h-12 rounded-full bg-accent px-7 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/30 hover:bg-accent/90 [a]:hover:bg-accent/90',
              )}
            >
              <CalendarCheck className="size-5" aria-hidden="true" />
              Agendar Tutoría Gratuita
            </Link>
            <Link
              href="#servicios"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'h-12 rounded-full px-6 text-base font-semibold',
              )}
            >
              Explorar servicios
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <dl className="mt-2 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Users className="size-4 text-primary" aria-hidden="true" />
              <dt className="sr-only">Estudiantes</dt>
              <dd>
                <strong className="font-bold">+12.000</strong>{' '}
                <span className="text-muted-foreground">estudiantes</span>
              </dd>
            </div>
            <div className="flex items-center gap-2">
              <Star className="size-4 fill-highlight text-highlight" aria-hidden="true" />
              <dt className="sr-only">Valoración</dt>
              <dd>
                <strong className="font-bold">4,9/5</strong>{' '}
                <span className="text-muted-foreground">valoración media</span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div
            className="absolute -right-6 -top-6 size-32 rounded-full bg-highlight/40 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-8 -left-8 size-40 rounded-full bg-primary/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-3xl border-4 border-background shadow-2xl shadow-primary/15">
            <Image
              src="/images/hero-estudiantes.png"
              alt="Dos estudiantes de secundaria resolviendo ejercicios de matemáticas juntos con un portátil"
              width={640}
              height={640}
              priority
              className="aspect-square w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border bg-background p-3 pr-5 shadow-xl sm:left-6">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <CalendarCheck className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold">Próxima tutoría</p>
              <p className="text-xs text-muted-foreground">Álgebra · Hoy, 17:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
