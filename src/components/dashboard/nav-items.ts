import { BookOpen, CalendarDays, GraduationCap, LayoutDashboard, MessageCircle } from 'lucide-react'

export const navItems = [
  { href: '/dashboard', label: 'Inicio', icon: LayoutDashboard },
  { href: '/dashboard#tutorias', label: 'Tutorías', icon: CalendarDays },
  { href: '/dashboard#progreso', label: 'Progreso', icon: BookOpen },
  { href: '/dashboard#becas', label: 'Becas', icon: GraduationCap },
  { href: '/dashboard#mensajes', label: 'Mensajes', icon: MessageCircle },
]
