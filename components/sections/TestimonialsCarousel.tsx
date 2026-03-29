'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { testimonials } from '@/lib/data/testimonials'

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const reduceMotion = useReducedMotion()

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir)
    setCurrent(next)
  }, [])

  const prev = () => go((current - 1 + testimonials.length) % testimonials.length, -1)
  const next = () => go((current + 1) % testimonials.length, 1)

  const variants = {
    enter: (dir: number) => ({
      x: reduceMotion ? 0 : dir * 60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: reduceMotion ? 0 : dir * -60,
      opacity: 0,
    }),
  }

  const t = testimonials[current]

  return (
    <section
      aria-labelledby="testimonials-title"
      className="py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Encabezado */}
        <div className="text-center mb-14">
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Testimonios
          </p>
          <h2
            id="testimonials-title"
            className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight"
          >
            Lo que dicen nuestros clientes en Surco
          </h2>
        </div>

        {/* Carrusel */}
        <div className="relative" aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.blockquote
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="text-center"
              aria-label={`Testimonio de ${t.name}`}
            >
              {/* Estrellas */}
              <div className="flex justify-center gap-1 mb-6" aria-label={`${t.rating} de 5 estrellas`}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="20" height="20"
                    viewBox="0 0 24 24"
                    fill={i < t.rating ? '#FBBF24' : '#E5E7EB'}
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Texto del testimonio */}
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-medium mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Autor */}
              <footer className="flex flex-col items-center gap-1">
                <cite className="not-italic font-semibold text-gray-900 text-base">
                  {t.name}
                </cite>
                <span className="text-gray-400 text-sm">{t.pet} · {t.location}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            aria-label="Testimonio anterior"
            className="
              w-10 h-10 rounded-full
              border border-gray-200 hover:border-emerald-300
              flex items-center justify-center
              text-gray-500 hover:text-emerald-600
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
            "
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2" role="tablist" aria-label="Testimonios">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Ir al testimonio ${i + 1}`}
                onClick={() => go(i, i > current ? 1 : -1)}
                className={`
                  rounded-full transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
                  ${i === current
                    ? 'w-6 h-2.5 bg-emerald-600'
                    : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'}
                `}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Siguiente testimonio"
            className="
              w-10 h-10 rounded-full
              border border-gray-200 hover:border-emerald-300
              flex items-center justify-center
              text-gray-500 hover:text-emerald-600
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
            "
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}