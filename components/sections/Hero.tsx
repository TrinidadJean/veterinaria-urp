'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants, type Easing } from 'framer-motion'
import { siteConfig } from '@/lib/config/site'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

const EASE: Easing = 'easeOut'

const makeVariant = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: EASE } },
})

const fadeInVariant = (delay: number): Variants => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay, ease: EASE } },
})

const staticVariant: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  const reduceMotion = useReducedMotion()

  const v = (delay: number): Variants =>
    reduceMotion ? staticVariant : makeVariant(delay)

  const vFade = (delay: number): Variants =>
    reduceMotion ? staticVariant : fadeInVariant(delay)

  return (
    <section
      aria-label="Bienvenida a la Clínica Veterinaria URP"
      className="relative min-h-[90svh] lg:min-h-[85vh] flex items-center overflow-hidden bg-gray-950"
    >
      {/* Imagen hero — LCP element */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero.webp"
          alt="Veterinarios de la Clínica URP atendiendo a una mascota en Surco, Lima"
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoIAAUAAUAmJYgCdAEO/gHOAAA="
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/30 lg:to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-20 lg:py-0">
        <div className="max-w-xl">

          {/* Badge */}
          <motion.div
            variants={v(0)}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-emerald-400 text-sm font-semibold tracking-wide uppercase">
              Surco, Lima · Lunes a Viernes
            </span>
          </motion.div>

          {/* H1 — más limpio, sin stats inline */}
          <motion.h1
            variants={v(0.1)}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-5"
          >
            Clínica Veterinaria{' '}
            <span className="text-emerald-400">de confianza</span>{' '}
            en Surco
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={v(0.2)}
            initial="hidden"
            animate="visible"
            className="text-lg text-gray-300 leading-relaxed mb-10 max-w-lg"
          >
            Atención veterinaria profesional para perros, gatos y animales
            exóticos. Médicos de la{' '}
            <strong className="text-white font-semibold">
              Universidad Ricardo Palma
            </strong>{' '}
            disponibles para tu mascota.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={v(0.3)}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3"
          >
            {/* Agendar cita */}
            <Link
              href="/citas"
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-4 rounded-xl
                bg-emerald-600 hover:bg-emerald-500
                text-white font-semibold text-base
                shadow-lg shadow-emerald-900/40
                hover:-translate-y-0.5 hover:shadow-xl
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-950
              "
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Agendar cita
            </Link>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hola,%20quiero%20agendar%20una%20cita%20para%20mi%20mascota`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-4 rounded-xl
                bg-[#25D366] hover:bg-[#22c55e]
                text-white font-semibold text-base
                hover:-translate-y-0.5
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-gray-950
              "
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>

            {/* Llamar */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-4 rounded-xl
                border border-white/20 hover:border-white/40
                bg-white/5 hover:bg-white/10
                text-white font-semibold text-base
                hover:-translate-y-0.5
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-gray-950
              "
              aria-label={`Llamar: ${siteConfig.phone}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Llamar
            </a>
          </motion.div>

          {/* Trust signals — solo los esenciales, sin repetir stats */}
          <motion.div
            variants={vFade(0.45)}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            {/* Estrellas Google */}
            <div className="flex items-center gap-2">
              <div className="flex" aria-label="5 estrellas en Google">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-gray-400 text-sm">
                <span className="text-white font-semibold">5.0</span> Google
              </span>
            </div>

            <span className="w-px h-4 bg-gray-700" aria-hidden="true" />

            {/* URP */}
            <span className="text-gray-400 text-sm">
              Avalado por{' '}
              <span className="text-white font-medium">URP</span>
            </span>

            <span className="w-px h-4 bg-gray-700" aria-hidden="true" />

            {/* SENASA */}
            <span className="text-gray-400 text-sm flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              SENASA
            </span>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      {!reduceMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}