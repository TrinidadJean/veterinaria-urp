// components/ui/PageHero.tsx
// Server Component — hero reutilizable para todas las páginas interiores
// Soporta imagen de fondo con next/image fill + overlay
// Las imágenes van en /public/images/hero/hero-[pagina].webp

import Image from 'next/image'

interface PageHeroProps {
  label?: string
  title: string
  titleHighlight?: string
  description?: string
  variant?: 'default' | 'emerald' | 'dark'
  align?: 'center' | 'left'
  badge?: string
  // Imagen de fondo opcional — ruta relativa a /public
  // Ej: "/images/hero/hero-noticias.webp"
  bgImage?: string
}

// Sin imagen: colores sólidos
const solidVariants = {
  default: 'bg-gray-50 border-b border-gray-100',
  emerald: 'bg-emerald-700',
  dark:    'bg-gray-950',
}

// Con imagen: overlay encima del webp
const overlayVariants = {
  default: 'bg-gray-900/55',   // oscuro suave — texto blanco sobre imagen
  emerald: 'bg-emerald-900/60',
  dark:    'bg-gray-950/75',
}

// Texto SIN imagen
const textVariants = {
  default: {
    label:       'text-emerald-600',
    title:       'text-gray-900',
    highlight:   'text-emerald-600',
    description: 'text-gray-500',
    badge:       'bg-emerald-100 text-emerald-700',
  },
  emerald: {
    label:       'text-emerald-200',
    title:       'text-white',
    highlight:   'text-emerald-200',
    description: 'text-emerald-100/80',
    badge:       'bg-white/15 text-white',
  },
  dark: {
    label:       'text-emerald-400',
    title:       'text-white',
    highlight:   'text-emerald-400',
    description: 'text-gray-400',
    badge:       'bg-white/10 text-white',
  },
}

// Texto CON imagen — siempre blanco sobre el overlay oscuro
const textWithImage = {
  label:       'text-emerald-300',
  title:       'text-white',
  highlight:   'text-emerald-300',
  description: 'text-white/75',
  badge:       'bg-white/15 text-white',
}

export function PageHero({
  label,
  title,
  titleHighlight,
  description,
  variant = 'default',
  align = 'center',
  badge,
  bgImage,
}: PageHeroProps) {
  const text = bgImage ? textWithImage : textVariants[variant]
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    // position: relative + overflow: hidden → necesario para next/image fill
    <div
      className={`relative overflow-hidden ${!bgImage ? solidVariants[variant] : ''}`}
      style={{ minHeight: bgImage ? '280px' : undefined }}
    >
      {/* ── Imagen de fondo con next/image fill ────────────────────────
          loading="eager" porque es el primer elemento visible (above fold)
          quality={70} — debajo de overlay oscuro, diferencia invisible
          sizes="100vw" — cubre todo el ancho de pantalla
      ─────────────────────────────────────────────────────────────── */}
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt=""
            fill
            loading="eager"
            quality={70}
            className="object-cover object-center"
            sizes="100vw"
            aria-hidden="true"
          />
          {/* Overlay oscuro para legibilidad del texto */}
          <div
            className={`absolute inset-0 ${overlayVariants[variant]}`}
            aria-hidden="true"
          />
        </>
      )}

      {/* ── Contenido encima de la imagen ──────────────────────────── */}
      <div className={`relative max-w-4xl mx-auto px-4 sm:px-6 py-16 lg:py-24 ${alignClass}`}>

        {/* Badge */}
        {badge && (
          <div className={`mb-4 ${align === 'center' ? 'flex justify-center' : ''}`}>
            <span className={`
              inline-flex items-center gap-1.5 px-3 py-1 rounded-full
              text-xs font-semibold
              ${text.badge}
            `}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
              {badge}
            </span>
          </div>
        )}

        {/* Label */}
        {label && (
          <p className={`font-semibold text-sm uppercase tracking-widest mb-3 ${text.label}`}>
            {label}
          </p>
        )}

        {/* H1 */}
        <h1 className={`
          text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4
          ${text.title}
          max-w-3xl
          ${align === 'center' ? 'mx-auto' : ''}
        `}>
          {titleHighlight ? (
            <>
              {title}{' '}
              <span className={text.highlight}>{titleHighlight}</span>
            </>
          ) : title}
        </h1>

        {/* Descripción */}
        {description && (
          <p className={`
            text-lg sm:text-xl leading-relaxed
            max-w-2xl
            ${text.description}
            ${align === 'center' ? 'mx-auto' : ''}
          `}>
            {description}
          </p>
        )}

      </div>
    </div>
  )
}