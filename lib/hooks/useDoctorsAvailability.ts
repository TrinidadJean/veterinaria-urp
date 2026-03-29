// lib/hooks/useDoctorsAvailability.ts
'use client'

import { useMemo } from 'react'
import { team } from '@/lib/data/team'
import type { TeamMember, ScheduleDay } from '@/lib/data/team'

// Mapeo JS getDay() → índice en schedule (0=Dom,1=Lun,...,5=Vie,6=Sab)
const JS_DAY_TO_SCHEDULE: Record<number, number> = {
  1: 0, // Lunes → schedule[0]
  2: 1, // Martes → schedule[1]
  3: 2, // Miércoles → schedule[2]
  4: 3, // Jueves → schedule[3]
  5: 4, // Viernes → schedule[4]
}

export function isTodayAvailable(member: TeamMember): boolean {
  const jsDay = new Date().getDay()
  const schedIdx = JS_DAY_TO_SCHEDULE[jsDay]
  if (schedIdx === undefined) return false // fin de semana
  const s = member.schedule[schedIdx]
  return s ? (s.morning || s.afternoon) : false
}

export function getAvailableDays(member: TeamMember): ScheduleDay[] {
  return member.schedule.filter(d => d.morning || d.afternoon)
}

export function useDoctorsAvailability() {
  return useMemo(() => {
    const available = team.filter(isTodayAvailable)
    const unavailable = team.filter(m => !isTodayAvailable(m))
    return {
      sorted: [...available, ...unavailable],
      availableToday: available,
    }
  }, []) // team es estático, nunca cambia en runtime
}

// Extrae todas las especialidades únicas de la data
export function useSpecialtyFilter() {
  return useMemo(() => {
    const set = new Set<string>()
    team.forEach(m => m.specialties.forEach(s => {
      // Normaliza: "Conejos · Aves · Murciélagos · Ratas" → partes individuales
      s.split('·').forEach(part => {
        const clean = part.trim()
        if (clean) set.add(clean)
      })
    }))
    return ['Todas', ...Array.from(set).sort()]
  }, [])
}

// Filtra doctores por especialidad (búsqueda parcial, case-insensitive)
export function filterBySpecialty(members: TeamMember[], specialty: string): TeamMember[] {
  if (specialty === 'Todas') return members
  return members.filter(m =>
    m.specialties.some(s =>
      s.toLowerCase().includes(specialty.toLowerCase())
    )
  )
}