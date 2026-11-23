const subjects = [
  { name: 'Matemáticas', value: 78, color: 'bg-primary' },
  { name: 'Física', value: 62, color: 'bg-accent' },
  { name: 'Química', value: 45, color: 'bg-highlight' },
  { name: 'Biología', value: 85, color: 'bg-chart-4' },
]

export function SubjectProgress() {
  return (
    <section
      id="progreso"
      aria-labelledby="progreso-title"
      className="scroll-mt-24 rounded-3xl border border-border bg-card p-5 md:p-6"
    >
      <h2 id="progreso-title" className="text-lg font-bold">
        Tu progreso
      </h2>
      <p className="text-sm text-muted-foreground">Avance del trimestre por materia</p>

      <ul className="mt-6 flex flex-col gap-5">
        {subjects.map((s) => (
          <li key={s.name}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-semibold">{s.name}</span>
              <span className="font-bold text-muted-foreground">{s.value}%</span>
            </div>
            <div
              role="progressbar"
              aria-label={`Progreso en ${s.name}`}
              aria-valuenow={s.value}
              aria-valuemin={0}
              aria-valuemax={100}
              className="h-2.5 overflow-hidden rounded-full bg-muted"
            >
              <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.value}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
