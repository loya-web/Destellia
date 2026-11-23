import type { Metadata } from 'next'
import { Sidebar } from '@/components/dashboard/sidebar'
import { MobileNav } from '@/components/dashboard/mobile-nav'
import { Topbar } from '@/components/dashboard/topbar'
import { WelcomeBanner } from '@/components/dashboard/welcome-banner'
import { StatsGrid } from '@/components/dashboard/stats-grid'
import { UpcomingSessions } from '@/components/dashboard/upcoming-sessions'
import { SubjectProgress } from '@/components/dashboard/subject-progress'
import { Scholarships } from '@/components/dashboard/scholarships'
import { getScholarships, getTutoringSessions } from '@/app/actions/destellia'

export const metadata: Metadata = {
  title: 'Mi panel | Destellia',
  description: 'Tus tutorías, progreso y becas recomendadas en un solo lugar.',
}

export default async function DashboardPage() {
  const [scholarships, sessions] = await Promise.all([
    getScholarships(),
    getTutoringSessions(),
  ])

  return (
    <div className="flex min-h-dvh bg-muted/60">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 pb-28 pt-5 md:gap-6 md:px-8 md:pt-8 lg:pb-10">
          <WelcomeBanner />
          <StatsGrid />
          <div className="grid gap-5 md:gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <UpcomingSessions sessions={sessions} />
            </div>
            <SubjectProgress />
          </div>
          <Scholarships scholarships={scholarships} />
        </main>
      </div>
      <MobileNav />
    </div>
  )
}
