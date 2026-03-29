'use client'

// components/sections/BookingModal.tsx
// Modal de agendamiento sin librerías externas
// Flujo: seleccionar doctor → elegir día/turno → descripción → WhatsApp

import { useState, useMemo, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { team } from '@/lib/data/team'
import type { TeamMember } from '@/lib/data/team'
import {
  useDoctorsAvailability,
  useSpecialtyFilter,
  filterBySpecialty,
  isTodayAvailable,
  getAvailableDays,
} from '@/lib/hooks/useDoctorsAvailability'
import { siteConfig } from '@/lib/config/site'

// ── Tipos ─────────────────────────────────────────────────────────────────
type Step = 'select' | 'form'

interface FormState {
  day: string
  turno: 'Mañana' | 'Tarde' | ''
  descripcion: string
}

// ── Hook de estado del modal (exportado para uso externo) ─────────────────
// Permite abrirlo desde TeamCard con doctor preseleccionado
let _openModal: ((doctor?: TeamMember) => void) | null = null

export function openBookingModal(doctor?: TeamMember) {
  _openModal?.(doctor)
}

// ── Componente principal ──────────────────────────────────────────────────
export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<Step>('select')
  const [selectedDoctor, setSelectedDoctor] = useState<TeamMember | null>(null)
  const [specialty, setSpecialty] = useState('Todas')
  const [form, setForm] = useState<FormState>({ day: '', turno: '', descripcion: '' })
  const [sent, setSent] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const { sorted } = useDoctorsAvailability()
  const specialties = useSpecialtyFilter()

  const filtered = useMemo(
    () => filterBySpecialty(sorted, specialty),
    [sorted, specialty]
  )

  // Registro del opener global
  useEffect(() => {
    _openModal = (doctor?: TeamMember) => {
      setIsOpen(true)
      setSent(false)
      if (doctor) {
        setSelectedDoctor(doctor)
        setStep('form')
        // Preselecciona el primer día disponible
        const days = getAvailableDays(doctor)
        const today = getTodayDayName()
        const todaySlot = days.find(d => d.day === today)
        const firstDay = todaySlot || days[0]
        if (firstDay) {
          setForm({
            day: firstDay.day,
            turno: firstDay.morning ? 'Mañana' : 'Tarde',
            descripcion: '',
          })
        } else {
          setForm({ day: '', turno: '', descripcion: '' })
        }
      } else {
        setStep('select')
        setSelectedDoctor(null)
        setForm({ day: '', turno: '', descripcion: '' })
      }
    }
    return () => { _openModal = null }
  }, [])

  // Cerrar con Escape
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Scroll al top del modal al cambiar de paso
  useEffect(() => {
    modalRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [step])

  const close = useCallback(() => {
    setIsOpen(false)
    setStep('select')
    setSelectedDoctor(null)
    setSpecialty('Todas')
    setForm({ day: '', turno: '', descripcion: '' })
    setSent(false)
  }, [])

  const selectDoctor = useCallback((doctor: TeamMember) => {
    setSelectedDoctor(doctor)
    const days = getAvailableDays(doctor)
    const today = getTodayDayName()
    const todaySlot = days.find(d => d.day === today)
    const firstDay = todaySlot || days[0]
    setForm({
      day: firstDay?.day ?? '',
      turno: firstDay?.morning ? 'Mañana' : (firstDay?.afternoon ? 'Tarde' : ''),
      descripcion: '',
    })
    setStep('form')
  }, [])

  const handleSend = useCallback(() => {
    if (!selectedDoctor || !form.day || !form.turno) return
    const turnoHora = form.turno === 'Mañana' ? '08:00 – 13:00' : '14:00 – 17:00'
    const msg = [
      `Hola, quiero agendar una cita:`,
      `Doctor: ${selectedDoctor.name}`,
      `Especialidad: ${selectedDoctor.specialty}`,
      `Día: ${form.day}`,
      `Turno: ${form.turno} (${turnoHora})`,
      form.descripcion ? `Descripción: ${form.descripcion}` : '',
    ].filter(Boolean).join('\n')

    const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }, [selectedDoctor, form])

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[80] bg-black/60"
        aria-hidden="true"
        onClick={close}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Agendar cita veterinaria"
        className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-4"
      >
        <div
          ref={modalRef}
          className="
            relative w-full sm:max-w-lg max-h-[92dvh] sm:max-h-[85vh]
            bg-white sm:rounded-2xl rounded-t-2xl
            overflow-y-auto overscroll-contain
            flex flex-col
          "
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <div>
              <h2 className="text-gray-900 font-bold text-base leading-tight">
                {step === 'select' ? 'Elige un especialista' : 'Confirma tu cita'}
              </h2>
              {step === 'form' && selectedDoctor && (
                <p className="text-emerald-600 text-xs font-medium mt-0.5">
                  {selectedDoctor.name}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2">
              {step === 'form' && (
                <button
                  onClick={() => { setStep('select'); setSelectedDoctor(null) }}
                  className="text-gray-500 hover:text-gray-700 text-sm px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Volver a la selección de doctor"
                >
                  ← Volver
                </button>
              )}
              <button
                onClick={close}
                className="w-8 h-8 flex items-center justify-center rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Cerrar modal"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* ── PASO 1: Selección de doctor ────────────────────────── */}
          {step === 'select' && (
            <div className="flex flex-col flex-1 p-4 gap-4">

              {/* Filtro de especialidades */}
              <div>
                <label htmlFor="specialty-filter" className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                  Filtrar por especialidad
                </label>
                <select
                  id="specialty-filter"
                  value={specialty}
                  onChange={e => setSpecialty(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-gray-800 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {specialties.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Lista de doctores */}
              <ul className="space-y-2.5" role="list" aria-label="Lista de especialistas">
                {filtered.length === 0 && (
                  <li className="text-center text-gray-400 text-sm py-8">
                    No hay especialistas para esta especialidad.
                  </li>
                )}
                {filtered.map(doctor => {
                  const availableToday = isTodayAvailable(doctor)
                  const days = getAvailableDays(doctor)
                  return (
                    <li key={doctor.slug}>
                      <button
                        onClick={() => selectDoctor(doctor)}
                        className="
                          w-full flex items-center gap-3 p-3 rounded-xl text-left
                          border border-gray-100 hover:border-emerald-200
                          hover:bg-emerald-50/50
                          transition-all duration-150
                          focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1
                          group
                        "
                        aria-label={`Seleccionar a ${doctor.name}`}
                      >
                        {/* Foto */}
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                          <Image
                            src={`/images/team/${doctor.photo}`}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="48px"
                            loading="lazy"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-gray-900 font-semibold text-sm truncate">
                              {doctor.name}
                            </span>
                            {availableToday && (
                              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"/>
                                Hoy
                              </span>
                            )}
                          </div>
                          <p className="text-emerald-600 text-xs font-medium mt-0.5 truncate">
                            {doctor.specialty}
                          </p>
                          <p className="text-gray-400 text-[11px] mt-0.5">
                            {days.length > 0
                              ? days.map(d => d.day).join(', ')
                              : 'Sin horario disponible'}
                          </p>
                        </div>

                        {/* Flecha */}
                        <svg
                          width="16" height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-300 group-hover:text-emerald-500 transition-colors shrink-0"
                          aria-hidden="true"
                        >
                          <path d="M9 18l6-6-6-6"/>
                        </svg>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {/* ── PASO 2: Formulario de cita ─────────────────────────── */}
          {step === 'form' && selectedDoctor && (
            <div className="flex flex-col flex-1 p-4 gap-5">

              {/* Resumen del doctor */}
              <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                  <Image
                    src={`/images/team/${selectedDoctor.photo}`}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm">{selectedDoctor.name}</p>
                  <p className="text-emerald-600 text-xs font-medium">{selectedDoctor.specialty}</p>
                  {selectedDoctor.isDirector && (
                    <span className="text-[10px] text-emerald-700 font-semibold uppercase tracking-wide">
                      Director Médico
                    </span>
                  )}
                </div>
              </div>

              {/* Selector de día */}
              <fieldset>
                <legend className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2.5">
                  Día de atención
                </legend>
                <div className="grid grid-cols-3 gap-2">
                  {getAvailableDays(selectedDoctor).map(d => (
                    <button
                      key={d.day}
                      type="button"
                      onClick={() => setForm(f => ({
                        ...f,
                        day: d.day,
                        turno: d.morning ? 'Mañana' : 'Tarde',
                      }))}
                      className={`
                        px-3 py-2.5 rounded-xl border text-sm font-medium transition-all duration-150
                        focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1
                        ${form.day === d.day
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'bg-white border-gray-200 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50'
                        }
                      `}
                      aria-pressed={form.day === d.day}
                    >
                      {d.day}
                    </button>
                  ))}
                </div>
                {getAvailableDays(selectedDoctor).length === 0 && (
                  <p className="text-gray-400 text-sm text-center py-4">
                    Este doctor no tiene días disponibles registrados.
                  </p>
                )}
              </fieldset>

              {/* Selector de turno */}
              {form.day && (
                <fieldset>
                  <legend className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2.5">
                    Turno
                  </legend>
                  <div className="grid grid-cols-2 gap-2">
                    {(() => {
                      const dayData = selectedDoctor.schedule.find(d => d.day === form.day)
                      const options = []
                      if (dayData?.morning) options.push({ value: 'Mañana', label: 'Mañana', sub: '08:00 – 13:00' })
                      if (dayData?.afternoon) options.push({ value: 'Tarde', label: 'Tarde', sub: '14:00 – 17:00' })
                      return options.map(opt => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setForm(f => ({ ...f, turno: opt.value as 'Mañana' | 'Tarde' }))}
                          className={`
                            flex flex-col items-center py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-150
                            focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1
                            ${form.turno === opt.value
                              ? 'bg-emerald-600 border-emerald-600 text-white'
                              : 'bg-white border-gray-200 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50'
                            }
                          `}
                          aria-pressed={form.turno === opt.value}
                        >
                          <span className="font-semibold">{opt.label}</span>
                          <span className={`text-[11px] mt-0.5 ${form.turno === opt.value ? 'text-emerald-100' : 'text-gray-400'}`}>
                            {opt.sub}
                          </span>
                        </button>
                      ))
                    })()}
                  </div>
                </fieldset>
              )}

              {/* Descripción */}
              <div>
                <label htmlFor="descripcion" className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                  Motivo de consulta
                  <span className="text-gray-400 font-normal ml-1">(opcional)</span>
                </label>
                <textarea
                  id="descripcion"
                  value={form.descripcion}
                  onChange={e => setForm(f => ({ ...f, descripcion: e.target.value }))}
                  placeholder="Describe brevemente el problema de tu mascota..."
                  rows={3}
                  maxLength={300}
                  className="
                    w-full px-3.5 py-2.5 rounded-xl border border-gray-200
                    text-gray-800 text-sm placeholder:text-gray-400
                    resize-none
                    focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                    transition-colors
                  "
                />
              </div>

              {/* Resumen de la cita */}
              {form.day && form.turno && (
                <div className="bg-gray-50 rounded-xl p-4 text-sm space-y-1.5 border border-gray-100">
                  <p className="text-gray-500 font-semibold text-xs uppercase tracking-wide mb-2">Resumen</p>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Doctor</span>
                    <span className="text-gray-900 font-medium text-right max-w-[60%] truncate">{selectedDoctor.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Día</span>
                    <span className="text-gray-900 font-medium">{form.day}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Turno</span>
                    <span className="text-gray-900 font-medium">
                      {form.turno} · {form.turno === 'Mañana' ? '08:00–13:00' : '14:00–17:00'}
                    </span>
                  </div>
                </div>
              )}

              {/* Botón enviar */}
              {!sent ? (
                <button
                  onClick={handleSend}
                  disabled={!form.day || !form.turno}
                  className="
                    w-full flex items-center justify-center gap-2.5
                    py-4 rounded-xl
                    bg-[#25D366] hover:bg-[#22c55e]
                    disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed
                    text-white font-bold text-base
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2
                  "
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Confirmar por WhatsApp
                </button>
              ) : (
                <div className="w-full flex flex-col items-center gap-3 py-5 px-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <p className="text-emerald-800 font-semibold text-sm text-center">
                    ¡Listo! Se abrió WhatsApp con tu solicitud.
                  </p>
                  <p className="text-emerald-600 text-xs text-center">
                    Envía el mensaje para confirmar tu cita con {selectedDoctor.name}.
                  </p>
                  <button
                    onClick={close}
                    className="mt-1 text-emerald-700 font-semibold text-sm underline underline-offset-2 hover:text-emerald-900 transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              )}

            </div>
          )}

        </div>
      </div>
    </>
  )
}

// ── Utilidad interna ──────────────────────────────────────────────────────
function getTodayDayName(): string {
  const days: Record<number, string> = {
    1: 'Lun', 2: 'Mar', 3: 'Mié', 4: 'Jue', 5: 'Vie',
  }
  return days[new Date().getDay()] ?? ''
}