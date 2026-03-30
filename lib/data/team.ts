// lib/data/team.ts

export interface ScheduleDay {
  day: string        // "Lun" | "Mar" | etc.
  morning: boolean   // 08:00–13:00
  afternoon: boolean // 14:00–17:00
}

export interface TeamMember {
  slug: string
  name: string
  role: string
  specialty: string       // visible en card (corto)
  specialties: string[]   // lista completa
  schedule: ScheduleDay[] // estructura para renderizar visualmente
  scheduleNote?: string   // nota adicional
  photo: string
  isDirector?: boolean
}

// Días abreviados
const D = {
  LUN: 'Lun',
  MAR: 'Mar',
  MIE: 'Mié',
  JUE: 'Jue',
  VIE: 'Vie',
}

export const team: TeamMember[] = [
  {
    slug: 'mv-mauricio-jara',
    name: 'M.V. Mauricio Jara Aguirre',
    role: 'Director Médico',
    specialty: 'Cirugía · Anestesiología · Odontología',
    specialties: ['Anestesiología', 'Odontología Veterinaria', 'Cirugía de Animales Menores'],
    schedule: [
      { day: D.LUN, morning: true, afternoon: true },
      { day: D.MAR, morning: true, afternoon: true },
      { day: D.MIE, morning: true, afternoon: true },
      { day: D.JUE, morning: true, afternoon: true },
      { day: D.VIE, morning: true, afternoon: true },
    ],
    scheduleNote: 'Solo con cita previa',
    photo: 'dr-jara.webp',
    isDirector: true,
  },
  {
    slug: 'mv-renzo-tassi',
    name: 'M.V. Renzo Tassi Merino',
    role: 'Médico Veterinario',
    specialty: 'Anestesia · Analgesia · RCP',
    specialties: ['Anestesia', 'Analgesia · RCP'],
    schedule: [
      { day: D.LUN, morning: true, afternoon: true },
      { day: D.MAR, morning: false, afternoon: false },
      { day: D.MIE, morning: true, afternoon: true },
      { day: D.JUE, morning: false, afternoon: false },
      { day: D.VIE, morning: true, afternoon: true },
    ],
    photo: 'dr-tassi.webp',
  },
  {
    slug: 'mv-francesca-tassi',
    name: 'M.V. Francesca Tassi',
    role: 'Médico Veterinario',
    specialty: 'Medicina General · Endocrinologia',
    specialties: ['Medicina General', 'Endocrinologia'],
    schedule: [
      { day: D.LUN, morning: true, afternoon: true },
      { day: D.MAR, morning: false, afternoon: true },
      { day: D.MIE, morning: false, afternoon: false },
      { day: D.JUE, morning: false, afternoon: false },
      { day: D.VIE, morning: true, afternoon: true },
    ],
    photo: 'dra-tassi.webp',
  },
  {
    slug: 'mv-veronica-alvarez',
    name: 'M.V. Verónica Álvarez Begazo',
    role: 'Médico Veterinario',
    specialty: 'Medicina General · Oftalmología',
    specialties: ['Medicina General', 'Oftalmología'],
    schedule: [
      { day: D.LUN, morning: false, afternoon: false },
      { day: D.MAR, morning: true, afternoon: false },
      { day: D.MIE, morning: false, afternoon: false },
      { day: D.JUE, morning: true, afternoon: false },
      { day: D.VIE, morning: false, afternoon: false },
    ],
    photo: 'dra-alvarez.webp',
  },
  {
    slug: 'mv-mariela-la-torre',
    name: 'M.V. Mariela La Torre',
    role: 'Médico Veterinario',
    specialty: 'Medicina General',
    specialties: ['Medicina General'],
    schedule: [
      { day: D.LUN, morning: false, afternoon: false },
      { day: D.MAR, morning: true, afternoon: false },
      { day: D.MIE, morning: false, afternoon: false },
      { day: D.JUE, morning: true, afternoon: false },
      { day: D.VIE, morning: false, afternoon: false },
    ],
    photo: 'dra-la-torre.webp',
  },
  {
    slug: 'mv-cinthia-porras',
    name: 'M.V. Cinthia Porras Tello',
    role: 'Médico Veterinario',
    specialty: 'Diagnóstico por Imágenes · Ecografías',
    specialties: ['Diagnóstico por Imágenes', 'Ecografías'],
    schedule: [
      { day: D.LUN, morning: false, afternoon: false },
      { day: D.MAR, morning: false, afternoon: false },
      { day: D.MIE, morning: true, afternoon: false },
      { day: D.JUE, morning: false, afternoon: false },
      { day: D.VIE, morning: false, afternoon: false },
    ],
    photo: 'dra-porras.webp',
  },
  {
    slug: 'mv-guillermo-risco',
    name: 'M.V. Guillermo Risco',
    role: 'Médico Veterinario',
    specialty: 'Traumatología',
    specialties: ['Traumatología'],
    schedule: [
      { day: D.LUN, morning: false, afternoon: false },
      { day: D.MAR, morning: false, afternoon: false },
      { day: D.MIE, morning: false, afternoon: false },
      { day: D.JUE, morning: false, afternoon: true },
      { day: D.VIE, morning: false, afternoon: false },
    ],
    photo: 'dr-risco.webp',
  },
  {
    slug: 'mv-alberto-delgado',
    name: 'M.V. Alberto Delgado',
    role: 'Médico Veterinario',
    specialty: 'Animales Exóticos',
    specialties: ['Animales Exóticos', 'Conejos · Aves · Murciélagos · Ratas'],
    schedule: [
      { day: D.LUN, morning: false, afternoon: false },
      { day: D.MAR, morning: false, afternoon: false },
      { day: D.MIE, morning: false, afternoon: true },
      { day: D.JUE, morning: false, afternoon: false },
      { day: D.VIE, morning: false, afternoon: false },
    ],
    photo: 'dr-delgado.webp',
  },
  {
    slug: 'mv-franco-rosado',
    name: 'M.V. Franco Rosado',
    role: 'Médico Veterinario',
    specialty: 'Animales Exóticos · Peces',
    specialties: ['Animales Exóticos', 'Especialista en peces'],
    schedule: [
      { day: D.LUN, morning: false, afternoon: false },
      { day: D.MAR, morning: false, afternoon: false },
      { day: D.MIE, morning: false, afternoon: true },
      { day: D.JUE, morning: false, afternoon: false },
      { day: D.VIE, morning: false, afternoon: false },
    ],
    photo: 'dr-rosado.webp',
  },
]