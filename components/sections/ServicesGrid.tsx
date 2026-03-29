'use client'

// components/sections/ServicesGrid.tsx

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { services } from '@/lib/data/services'
import type { Service } from '@/lib/data/services'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { ServiceModal } from '@/components/sections/ServiceModal'

export function ServicesGrid() {
  const reduceMotion = useReducedMotion()
  const [selected, setSelected] = useState<Service | null>(null)

  return (
    <>
      <section
        aria-labelledby="services-title"
        className="py-20 lg:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Encabezado */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.p
              initial={reduceMotion ? {} : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3"
            >
              Atención especializada
            </motion.p>
            <motion.h2
              id="services-title"
              initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4"
            >
              Servicios veterinarios en{' '}
              <span className="text-emerald-600">Surco, Lima</span>
            </motion.h2>
            <motion.p
              initial={reduceMotion ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-500 text-lg leading-relaxed"
            >
              Atención integral con especialistas formados en la Universidad
              Ricardo Palma. Haz clic en cualquier servicio para ver más detalles.
            </motion.p>
          </div>

          {/* Grid — 2 cols mobile, 3 cols tablet, 4 cols desktop
              13 servicios → última fila tiene 1 sola card centrada con col-span */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {services.map((service, index) => {
              // Última card si el total no es divisible por cols → centrarla en desktop
              const isLastOdd = index === services.length - 1 && services.length % 4 !== 0

              return (
                <motion.article
                  key={service.slug}
                  initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.4,
                    delay: reduceMotion ? 0 : (index % 4) * 0.06,
                    ease: 'easeOut',
                  }}
                  className={isLastOdd ? 'lg:col-start-2' : ''}
                >
                  <button
                    onClick={() => setSelected(service)}
                    className="
                      group flex flex-col h-full w-full text-left
                      p-5 rounded-2xl
                      border border-gray-100 hover:border-emerald-200
                      bg-white hover:bg-emerald-50/40
                      shadow-sm hover:shadow-lg hover:shadow-emerald-100/50
                      hover:-translate-y-0.5
                      transition-all duration-300
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
                    "
                    aria-label={`Ver detalles de ${service.name}`}
                  >
                    {/* Ícono */}
                    <div className="w-10 h-10 rounded-xl mb-3 bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center text-emerald-600 transition-colors duration-300 shrink-0">
                      <ServiceIcon name={service.iconName} size={18} />
                    </div>

                    {/* Nombre */}
                    <h3 className="text-gray-900 font-semibold text-sm leading-tight mb-1.5 group-hover:text-emerald-700 transition-colors duration-200">
                      {service.name}
                    </h3>

                    {/* Descripción corta — oculta en mobile para no sobrecargar */}
                    <p className="text-gray-400 text-xs leading-relaxed flex-1 hidden sm:block">
                      {service.shortDescription}
                    </p>

                    {/* Especialista si existe */}
                    {service.specialists && service.specialists.length === 1 && service.specialists[0] !== 'Todo el equipo médico' && service.specialists[0] !== 'Equipo de laboratorio' && service.specialists[0] !== 'Especialista en cardiología' && service.specialists[0] !== 'Especialista en neurología' && (
                      <p className="text-emerald-600/70 text-[10px] font-medium mt-2 hidden sm:block truncate">
                        {service.specialists[0]}
                      </p>
                    )}

                    {/* Ver más */}
                    <div className="flex items-center gap-1 mt-3 text-emerald-600 text-xs font-semibold">
                      <span>Ver más</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                </motion.article>
              )
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link
              href="/servicios"
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-xl
                border border-emerald-200 hover:border-emerald-400
                text-emerald-700 hover:text-emerald-800
                font-semibold text-sm
                hover:bg-emerald-50
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
              "
            >
              Ver todos los servicios con detalle completo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* Modal */}
      <ServiceModal
        service={selected}
        onClose={() => setSelected(null)}
      />
    </>
  )
}