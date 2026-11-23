import Link from 'next/link'
import { Atom, Calculator, FlaskConical, Video } from 'lucide-react'

type SessionItem = {
  id: string
  subject: string
  topic: string | null
  scheduledAt: Date
  meetingLink: string | null
  status: 'PENDING' | 'CONFIRMED' | 'COMPLETED'
  student: {
    name: string
  }
}

type UpcomingSessionsProps = {
  sessions: SessionItem[]
}

function getSubjectIcon(subject: string) {
  const normalizedSubject = subject.toLocaleLowerCase('es-MX')
  if (normalizedSubject.includes('matem')) return Calculator
  if (normalizedSubject.includes('física') || normalizedSubject.includes('fisica')) return Atom
  if (
    normalizedSubject.includes('cienc') ||
    normalizedSubject.includes('quím') ||
    normalizedSubject.includes('quim')
  ) {
    return FlaskConical
  }
  return Video
}

function formatScheduledAt(date: Date) {
  return new Intl.DateTimeFormat('es-MX', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(date))
}

export function UpcomingSessions({ sessions }: UpcomingSessionsProps) {
  return (
    <section
      id="tutorias"
      aria-labelledby="tutorias-title"
      className="scroll-mt-24 rounded-3xl border border-border bg-card p-5 md:p-6"
    >
      <div className="flex items-center justify-between">
        <h2 id="tutorias-title" className="text-lg font-bold">
          Tutorías agendadas
        </h2>
        <Link href="#tutorias" className="text-sm font-semibold text-primary hover:underline">
          Ver calendario
        </Link>
      </div>

      {sessions.length ? (
        <ul className="mt-5 flex flex-col gap-3">
          {sessions.map((session) => {
            const SubjectIcon = getSubjectIcon(session.subject)

            return (
              <li
                key={session.id}
                className="flex flex-col gap-4 rounded-2xl bg-muted p-4 sm:flex-row sm:items-center"
              >
                <div className="flex flex-1 items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-background text-primary shadow-sm">
                    <SubjectIcon className="size-6" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-accent">
                      {session.subject} · {session.status === 'PENDING' ? 'Pendiente' : session.status === 'CONFIRMED' ? 'Confirmada' : 'Completada'}
                    </p>
                    <p className="truncate font-semibold">
                      {session.topic || session.subject}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {session.student.name} · {formatScheduledAt(session.scheduledAt)}
                    </p>
                  </div>
                </div>
                {session.meetingLink && session.status === 'CONFIRMED' ? (
                  <a
                    href={session.meetingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    <Video className="size-4" aria-hidden="true" />
                    Unirse
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">
                    {session.status === 'PENDING' ? 'Pendiente de confirmación' : 'Sin enlace disponible'}
                  </span>
                )}
              </li>
            )
          })}
        </ul>
      ) : (
        <p className="mt-5 rounded-2xl bg-muted p-5 text-sm text-muted-foreground">
          Aún no hay tutorías agendadas.
        </p>
      )}
    </section>
  )
}
