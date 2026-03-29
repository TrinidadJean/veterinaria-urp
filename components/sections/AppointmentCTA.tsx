// components/sections/AppointmentCTA.tsx
// Server Component — sin JS
// Imagen de fondo con next/image fill + overlay, PageSpeed safe

import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/config/site'

const steps = [
  {
    number: '01',
    title: 'Elige el servicio',
    description: 'Consulta, vacunas, cirugía, diagnóstico u otro servicio.',
  },
  {
    number: '02',
    title: 'Agenda tu cita',
    description: 'Por WhatsApp o teléfono. Rápido, sin filas, con cita previa.',
  },
  {
    number: '03',
    title: 'Ven a vernos',
    description: 'Av. Las Nazarenas s/n, Santiago de Surco, Lima.',
  },
]

export function AppointmentCTA() {
  return (
    <section
      aria-labelledby="appointment-title"
      className="relative py-24 lg:py-32 overflow-hidden text-center"
    >
      {/* ── Imagen de fondo ─────────────────────────────────────────────
          - loading="lazy" porque está below the fold
          - quality={70} suficiente debajo de overlays oscuros
          - sizes="100vw" porque cubre todo el ancho
      ──────────────────────────────────────────────────────────────── */}
      <Image
        src="/images/cta/cta-bg.webp"
        alt=""
        fill
        loading="lazy"
        quality={66}
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />

      {/* Overlay oscuro base — legibilidad del texto */}
      <div
        className="absolute inset-0 bg-gray-950/80"
        aria-hidden="true"
      />

      {/* Gradiente radial decorativo encima del overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 60% 80% at 30% 50%, rgba(27,107,74,0.30) 0%, transparent 60%)',
            'radial-gradient(ellipse 40% 60% at 80% 30%, rgba(212,168,83,0.10) 0%, transparent 50%)',
          ].join(', '),
        }}
        aria-hidden="true"
      />

      {/* ── Contenido ────────────────────────────────────────────────── */}
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6">

        {/* Label */}
        <p className="inline-flex items-center gap-2 text-white/50 text-sm font-medium uppercase tracking-widest mb-6">
          <span className="w-4 h-px bg-white/30" aria-hidden="true" />
          ¿Tienes una mascota?
          <span className="w-4 h-px bg-white/30" aria-hidden="true" />
        </p>

        {/* Título */}
        <h2
          id="appointment-title"
          className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.06] tracking-tight text-white mb-5"
        >
          Agenda tu cita hoy{' '}
          <span className="block">en la veterinaria</span>
          <em className="not-italic text-white/50">
            más confiable de Surco
          </em>
        </h2>

        {/* Subtítulo */}
        <p className="text-white/60 text-[17px] font-light leading-relaxed mb-10 max-w-lg mx-auto">
          Tu mascota merece atención médica de calidad. Contáctanos por
          WhatsApp o llámanos directamente.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">

          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20quisiera%20agendar%20una%20cita%20para%20mi%20mascota%20en%20la%20Cl%C3%ADnica%20Veterinaria%20URP`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2.5
              bg-[#25D366] hover:bg-[#22c55e]
              text-white font-medium text-[15px]
              px-7 py-[15px] rounded-full
              w-full sm:w-auto justify-center
              hover:-translate-y-0.5
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-gray-950
            "
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Escribir por WhatsApp
          </a>

          <a
            href={`tel:${siteConfig.phone}`}
            className="
              inline-flex items-center gap-2.5
              bg-white/10 hover:bg-white/[0.18]
              border border-white/25
              text-white font-normal text-[15px]
              px-7 py-[15px] rounded-full
              w-full sm:w-auto justify-center
              hover:-translate-y-0.5
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-gray-950
            "
            aria-label={`Llamar al ${siteConfig.phone}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            975 198 723
          </a>
        </div>

        {/* Divisor */}
        <div className="flex items-center gap-4 mb-10" aria-hidden="true">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-white/40 text-xs uppercase tracking-widest">cómo funciona</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Pasos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-2">
              <span className="text-[40px] font-bold text-white/10 leading-none tabular-nums">
                {step.number}
              </span>
              <h3 className="text-white font-semibold text-base">
                {step.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}