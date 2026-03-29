// app/(marketing)/page.tsx
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

import { Hero } from '@/components/sections/Hero'
import { StatsSection } from '@/components/sections/StatsSection'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { ContactMap } from '@/components/sections/ContactMap'
import { siteConfig } from '@/lib/config/site'

const TeamSection = dynamic(
  () => import('@/components/sections/TeamSection').then(m => ({ default: m.TeamSection })),
  {
    loading: () => (
      <div className="py-20 bg-gray-50" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-7 bg-gray-200 rounded-lg w-64 mx-auto mb-14 animate-pulse" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square rounded-2xl bg-gray-200 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    ),
  }
)

const TestimonialsCarousel = dynamic(
  () => import('@/components/sections/TestimonialsCarousel').then(m => ({ default: m.TestimonialsCarousel })),
  {
    loading: () => (
      <div className="py-20 bg-white" aria-hidden="true">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="h-7 bg-gray-200 rounded-lg w-72 mx-auto mb-8 animate-pulse" />
          <div className="h-40 bg-gray-100 rounded-2xl animate-pulse" />
        </div>
      </div>
    ),
  }
)

const AppointmentCTA = dynamic(
  () => import('@/components/sections/AppointmentCTA').then(m => ({ default: m.AppointmentCTA })),
  {
    loading: () => (
      <div className="py-20 bg-gray-950" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-7 bg-gray-800 rounded-lg w-64 mx-auto mb-14 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-44 rounded-2xl bg-gray-800 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    ),
  }
)

export const metadata: Metadata = {
  title: 'Clínica Veterinaria en Surco, Lima',
  description:
    'Veterinaria en Surco, Lima con atención 24 horas para emergencias. Consultas, cirugías, vacunas y más. Médicos especializados de la Universidad Ricardo Palma.',
  keywords: [
    'veterinaria surco',
    'veterinario surco',
    'veterinaria 24 horas surco',
    'veterinario 24 horas surco',
    'veterinaria cerca de mi',
    'veterinario cerca de mi',
    'clínica veterinaria lima',
    'veterinaria universidad ricardo palma',
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: 'Clínica Veterinaria Docente URP | Surco, Lima — 24 horas',
    description: 'Veterinaria en Surco con atención 24h. Cirugías, vacunas, emergencias y más. Médicos URP.',
    url: siteConfig.url,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesGrid />
      <TeamSection />
      <TestimonialsCarousel />
      <AppointmentCTA />
      <ContactMap/>
    </>
  )
}