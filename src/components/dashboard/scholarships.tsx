'use client'

import { useMemo, useState } from 'react'
import { CalendarClock, Search } from 'lucide-react'

type ScholarshipItem = {
  id: string
  title: string
  description: string
  url: string
  deadline: Date | null
  category: string
}

type ScholarshipsProps = {
  scholarships: ScholarshipItem[]
}

function formatDeadline(deadline: Date | null) {
  if (!deadline) return 'Fecha por confirmar'

  return `Cierre: ${new Intl.DateTimeFormat('es-MX', {
    dateStyle: 'medium',
  }).format(new Date(deadline))}`
}

export function Scholarships({ scholarships }: ScholarshipsProps) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todas')
  const categories = useMemo(
    () => Array.from(new Set(scholarships.map((scholarship) => scholarship.category))),
    [scholarships],
  )
  const filteredScholarships = useMemo(() => {
    const query = search.trim().toLocaleLowerCase('es-MX')

    return scholarships.filter((scholarship) => {
      const matchesCategory = category === 'Todas' || scholarship.category === category
      const matchesSearch =
        !query ||
        `${scholarship.title} ${scholarship.description} ${scholarship.category}`
          .toLocaleLowerCase('es-MX')
          .includes(query)

      return matchesCategory && matchesSearch
    })
  }, [category, scholarships, search])

  return (
    <section
      id="becas"
      aria-labelledby="becas-title"
      className="scroll-mt-24 rounded-3xl border border-border bg-card p-5 md:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 id="becas-title" className="text-lg font-bold">
            Directorio de becas
          </h2>
          <p className="text-sm text-muted-foreground">
            Convocatorias y apoyos educativos activos
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <label className="relative">
            <span className="sr-only">Buscar becas</span>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar becas..."
              className="h-10 w-full rounded-full border border-input bg-background pl-9 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/20 sm:w-48"
            />
          </label>
          <label>
            <span className="sr-only">Filtrar por categoría</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="h-10 w-full rounded-full border border-input bg-background px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/20 sm:w-48"
            >
              <option value="Todas">Todas las categorías</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {filteredScholarships.length ? (
        <ul className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {filteredScholarships.map((scholarship) => (
            <li
              key={scholarship.id}
              className="flex flex-col rounded-2xl border border-border p-4"
            >
              <span className="w-fit rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                {scholarship.category}
              </span>
              <h3 className="mt-3 font-bold">{scholarship.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                {scholarship.description}
              </p>
              <p className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-semibold text-muted-foreground">
                <CalendarClock className="size-4" aria-hidden="true" />
                {formatDeadline(scholarship.deadline)}
              </p>
              <a
                href={scholarship.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 text-sm font-semibold text-primary hover:underline"
              >
                Consultar convocatoria
                <span className="sr-only">: {scholarship.title}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-5 rounded-2xl bg-muted p-5 text-sm text-muted-foreground">
          No hay becas que coincidan con la búsqueda y categoría seleccionadas.
        </p>
      )}
    </section>
  )
}
