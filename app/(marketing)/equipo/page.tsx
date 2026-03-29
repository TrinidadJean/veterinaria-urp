// app/(marketing)/equipo/page.tsx
import type { Metadata } from 'next'
import { TeamSection } from '@/components/sections/TeamSection'
import { PageHero } from '@/components/ui/PageHero'
import { siteConfig } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Nuestro Equipo Médico',
  description: 'Médicos veterinarios especializados de la Clínica Veterinaria Docente URP en Surco, Lima. Cirugía, animales exóticos, diagnóstico y más.',
  alternates: { canonical: `${siteConfig.url}/equipo` },
}

export default function EquipoPage() {
  return (
    <>
      <PageHero
        label="Especialistas"
        title="Nuestro equipo"
        titleHighlight="médico"
        description="Médicos veterinarios docentes de la Universidad Ricardo Palma. Atención de lunes a viernes con cita previa. Haz clic en cualquier especialista para agendar."
        variant="dark"
        bgImage="/images/hero/hero-equipo.webp"
        badge="Lun–Vie · Con cita previa"
      />
      <TeamSection />
    </>
  )
}