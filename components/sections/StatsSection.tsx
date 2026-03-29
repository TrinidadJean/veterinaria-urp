'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

const stats = [
  { value: 15, suffix: '+', label: 'Años de experiencia', description: 'Formando veterinarios en la URP' },
  { value: 800, suffix: '+', label: 'Mascotas atendidas', description: 'Perros, gatos y animales exóticos' },
  { value: 261, suffix: 'D', label: 'Atención de emergencias', description: 'Los 261 días en el horario semanal' },
  { value: 99, suffix: '%', label: 'Satisfacción de clientes', description: 'Según encuestas 2024' },
]

// Hook para contar números animados
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

function StatCard({
  value,
  suffix,
  label,
  description,
  delay,
  inView,
}: {
  value: number
  suffix: string
  label: string
  description: string
  delay: number
  inView: boolean
}) {
  const reduceMotion = useReducedMotion()
  // Si prefiere sin animaciones, muestra el valor directamente
  const count = useCounter(value, 1800, reduceMotion ? true : inView)

  return (
    <motion.div
      initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center px-6 py-8"
    >
      <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tabular-nums">
        {reduceMotion ? value : count}
        <span className="text-emerald-400">{suffix}</span>
      </div>
      <div className="text-white font-semibold text-base mb-1">{label}</div>
      <div className="text-emerald-200/70 text-sm">{description}</div>
    </motion.div>
  )
}

export function StatsSection() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      aria-label="Estadísticas de la clínica veterinaria"
      className="bg-emerald-700 py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-emerald-600">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.1} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}