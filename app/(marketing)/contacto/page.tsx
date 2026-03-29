// app/(marketing)/contacto/page.tsx
import type { Metadata } from 'next'
import { ContactMap } from '@/components/sections/ContactMap'
import { PageHero } from '@/components/ui/PageHero'
import { siteConfig } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Contacto y Ubicación',
  description: `Visítanos en ${siteConfig.address.street}, ${siteConfig.address.district}, Lima. Tel: ${siteConfig.phone}. Atención Lunes a Viernes.`,
  alternates: { canonical: `${siteConfig.url}/contacto` },
}

export default function ContactoPage() {
  return (
    <>
      <PageHero
        label="Encuéntranos"
        title="Estamos en Surco,"
        titleHighlight="Lima"
        description={`Atendemos de lunes a viernes de ${siteConfig.hours.weekdays}. Agenda tu cita por WhatsApp o llámanos directamente.`}
        variant="dark"
        bgImage="/images/hero/hero-contacto.webp"
        badge="Atención L–V · Cita previa"
      />
      <ContactMap />
    </>
  )
}