'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { team } from '@/lib/data/team'
import type { ScheduleDay } from '@/lib/data/team'
import { openBookingModal } from '@/components/sections/BookingModal'

// ── SVG de huella de patita — inline, 0 bytes de red ─────────────────────
// Una huella realista: almohadilla central + 4 dedos arriba
const PAW_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='%2310b981' opacity='0.13'><ellipse cx='24' cy='30' rx='9' ry='8'/><ellipse cx='12' cy='20' rx='5' ry='6'/><ellipse cx='36' cy='20' rx='5' ry='6'/><ellipse cx='18' cy='13' rx='4' ry='5'/><ellipse cx='30' cy='13' rx='4' ry='5'/></svg>`

// Data URL para usar como background-image CSS — sin request HTTP
const PAW_DATA_URL = `url("data:image/svg+xml,${PAW_SVG}")`

// ── Mini-grid de horario ──────────────────────────────────────────────────
function ScheduleGrid({ schedule, isDirector }: { schedule: ScheduleDay[], isDirector?: boolean }) {
  if (isDirector) {
    return (
      <div className="flex items-center gap-1.5 pt-3 border-t border-gray-100">
        <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
        <span className="text-emerald-700 text-[11px] font-semibold">Lun–Vie · Cita previa</span>
      </div>
    )
  }
  return (
    <div className="pt-3 border-t border-gray-100">
      <div className="flex items-center gap-3 mb-2">
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-sm bg-amber-400" aria-hidden="true" />
          <span className="text-[10px] text-gray-400">8–13h</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-sm bg-blue-400" aria-hidden="true" />
          <span className="text-[10px] text-gray-400">14–17h</span>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1" role="table" aria-label="Horario de atención">
        {schedule.map((d) => (
          <div key={d.day} role="columnheader" className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">{d.day}</span>
            <div
              className={`w-full h-2 rounded-sm ${d.morning ? 'bg-amber-400' : 'bg-gray-100'}`}
              aria-label={`${d.day} mañana: ${d.morning ? 'disponible' : 'no disponible'}`}
            />
            <div
              className={`w-full h-2 rounded-sm ${d.afternoon ? 'bg-blue-400' : 'bg-gray-100'}`}
              aria-label={`${d.day} tarde: ${d.afternoon ? 'disponible' : 'no disponible'}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Card individual ───────────────────────────────────────────────────────
function TeamCard({ member, index }: { member: typeof team[0], index: number }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.05 }}
      className={`group flex flex-col bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
        member.isDirector
          ? 'border-emerald-200 shadow-md shadow-emerald-100/60 ring-1 ring-emerald-100'
          : 'border-gray-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50/80'
      }`}
    >
      {/* Foto */}
      <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={`/images/team/${member.photo}`}
          alt={`${member.name} — ${member.specialty}, ${member.role} Clínica Veterinaria URP Surco`}
          fill
          loading={index < 2 ? 'eager' : 'lazy'}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          quality={80}
        />
        {member.isDirector && (
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-emerald-900/70 to-transparent px-3 pt-2.5 pb-4">
            <span className="inline-flex items-center gap-1 text-white text-[10px] font-bold uppercase tracking-widest">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Director Médico
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div>
          <h3 className="text-gray-900 font-bold text-sm leading-tight mb-1">{member.name}</h3>
          <div className="flex flex-wrap gap-1">
            {member.specialties.slice(0, 2).map((s) => (
              <span key={s} className="inline-block bg-emerald-50 text-emerald-700 text-[10px] font-medium px-2 py-0.5 rounded-full leading-none">
                {s}
              </span>
            ))}
            {member.specialties.length > 2 && (
              <span className="inline-block bg-gray-50 text-gray-400 text-[10px] font-medium px-2 py-0.5 rounded-full leading-none">
                +{member.specialties.length - 2}
              </span>
            )}
          </div>
        </div>

        <ScheduleGrid schedule={member.schedule} isDirector={member.isDirector} />

        <button
          onClick={() => openBookingModal(member)}
          className="
            mt-auto w-full flex items-center justify-center gap-1.5
            py-2 rounded-xl
            bg-emerald-600 hover:bg-emerald-700
            text-white font-semibold text-xs
            transition-all duration-150
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
          "
          aria-label={`Agendar cita con ${member.name}`}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Agendar cita
        </button>
      </div>
    </motion.article>
  )
}

// ── Sección principal ─────────────────────────────────────────────────────
export function TeamSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="equipo"
      aria-labelledby="team-title"
      className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden"
    >
      {/* ── Fondo de huellas — SVG data URL, cero requests HTTP ──────────
          - backgroundSize: "80px 80px" → tamaño de cada huella en el patrón
          - opacity gestionada dentro del SVG (opacity='0.13')
          - aria-hidden porque es puramente decorativo
          - pointer-events: none → no interfiere con clicks
      ─────────────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: PAW_DATA_URL,
          backgroundSize: '80px 80px',
          backgroundRepeat: 'repeat',
        }}
        aria-hidden="true"
      />

      {/* Gradiente encima del patrón para suavizar los bordes superior/inferior */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #f9fafb 0%, transparent 15%, transparent 85%, #f9fafb 100%)',
        }}
        aria-hidden="true"
      />

      {/* Contenido — z-10 para estar encima del fondo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.p
            initial={reduceMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Nuestro equipo médico
          </motion.p>
          <motion.h2
            id="team-title"
            initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4"
          >
            Veterinarios especializados en Surco
          </motion.h2>
          <motion.p
            initial={reduceMotion ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            Médicos de la Universidad Ricardo Palma disponibles de lunes a viernes.
            Consulta el horario de cada especialista.
          </motion.p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
          {team.map((member, index) => (
            <TeamCard key={member.slug} member={member} index={index} />
          ))}
        </div>

        {/* Leyenda + CTA */}
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100"
        >
          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-4 h-2.5 rounded-sm bg-amber-400" aria-hidden="true" />
              <span>Mañana: 8:00 – 13:00</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-2.5 rounded-sm bg-blue-400" aria-hidden="true" />
              <span>Tarde: 14:00 – 17:00</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-2.5 rounded-sm bg-gray-100 border border-gray-200" aria-hidden="true" />
              <span>No disponible</span>
            </div>
          </div>

          <button
            onClick={() => openBookingModal()}
            className="
              inline-flex items-center gap-2 shrink-0
              px-5 py-2.5 rounded-xl
              bg-emerald-600 hover:bg-emerald-700
              text-white font-semibold text-sm
              transition-all duration-200 hover:-translate-y-0.5
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
            "
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Agendar cita
          </button>
        </motion.div>

      </div>
    </section>
  )
}