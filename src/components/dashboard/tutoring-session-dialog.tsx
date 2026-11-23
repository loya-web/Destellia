'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { CalendarCheck } from 'lucide-react'
import { createTutoringSession } from '@/app/actions/destellia'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

type TutoringSessionDialogProps = {
  triggerClassName?: string
}

export function TutoringSessionDialog({
  triggerClassName,
}: TutoringSessionDialogProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState<{ success: boolean; text: string } | null>(
    null,
  )

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setPending(true)
    setMessage(null)

    try {
      const result = await createTutoringSession(new FormData(form))
      if (!result.success) {
        setMessage({ success: false, text: result.error })
        return
      }

      setMessage({ success: true, text: '¡Listo! Tu solicitud de tutoría fue registrada.' })
      form.reset()
      router.refresh()
    } catch (error) {
      console.error('Failed to submit tutoring session:', error)
      setMessage({
        success: false,
        text: 'No se pudo enviar la solicitud. Inténtalo de nuevo.',
      })
    } finally {
      setPending(false)
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen)
        if (nextOpen) setMessage(null)
      }}
    >
      <DialogTrigger asChild>
        <Button
          className={cn(
            'h-12 rounded-full bg-accent px-6 text-base font-semibold text-accent-foreground shadow-lg shadow-black/10 hover:bg-accent/90',
            triggerClassName,
          )}
        >
          <CalendarCheck className="size-5" aria-hidden="true" />
          Agendar Tutoría Gratuita
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90dvh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Agenda una tutoría gratuita</DialogTitle>
          <DialogDescription>
            Completa tus datos y el tema que quieres trabajar.
          </DialogDescription>
        </DialogHeader>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-1.5 text-sm font-medium">
            Nombre completo
            <Input name="studentName" autoComplete="name" required />
          </label>
          <label className="grid gap-1.5 text-sm font-medium">
            Correo electrónico
            <Input
              name="studentEmail"
              type="email"
              autoComplete="email"
              required
            />
          </label>
          <label className="grid gap-1.5 text-sm font-medium">
            Grado escolar
            <select
              name="grade"
              required
              defaultValue=""
              className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/30"
            >
              <option value="" disabled>
                Selecciona tu grado
              </option>
              <option>1.º de secundaria</option>
              <option>2.º de secundaria</option>
              <option>3.º de secundaria</option>
              <option>1.º de bachillerato</option>
              <option>2.º de bachillerato</option>
              <option>3.º de bachillerato</option>
              <option>Otro</option>
            </select>
          </label>
          <label className="grid gap-1.5 text-sm font-medium">
            Materia
            <select
              name="subject"
              required
              defaultValue="Matemáticas"
              className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/30"
            >
              <option>Inglés</option>
              <option>Matemáticas</option>
              <option>Ciencias</option>
              <option>Física</option>
              <option>Química</option>
              <option>Biología</option>
              <option>Español</option>
            </select>
          </label>
          <label className="grid gap-1.5 text-sm font-medium">
            Tema específico
            <Input
              name="topic"
              placeholder="Ej. ecuaciones cuadráticas"
              required
            />
          </label>
          <label className="grid gap-1.5 text-sm font-medium">
            Fecha y hora deseada
            <Input name="scheduledAt" type="datetime-local" required />
          </label>

          {message && (
            <p
              role={message.success ? 'status' : 'alert'}
              className={
                message.success
                  ? 'text-sm font-medium text-green-700'
                  : 'text-sm font-medium text-destructive'
              }
            >
              {message.text}
            </p>
          )}

          <Button type="submit" disabled={pending} className="w-full">
            {pending ? 'Guardando...' : 'Solicitar tutoría'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
