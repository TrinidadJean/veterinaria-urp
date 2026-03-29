// app/(marketing)/noticias/page.tsx
import type { Metadata } from 'next'
import { NoticiasGrid } from '@/components/sections/NoticiasGrid'
import { PageHero } from '@/components/ui/PageHero'
import { siteConfig } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Noticias y Consejos Veterinarios',
  description: 'Artículos de salud veterinaria: vacunación, cuidados, animales exóticos y más. Redactados por el equipo médico de la Clínica Veterinaria Docente URP.',
  alternates: { canonical: `${siteConfig.url}/noticias` },
}

export default function NoticiasPage() {
  return (
    <>
      <PageHero
        label="Blog"
        title="Noticias y consejos"
        titleHighlight="veterinarios"
        description="Artículos de salud animal redactados por el equipo médico de la Clínica Veterinaria Docente URP. Guías prácticas para el cuidado de tu mascota."
        variant="dark"
        bgImage="/images/hero/hero-noticias.webp"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 lg:py-20">
        <NoticiasGrid />
      </div>
    </>
  )
}