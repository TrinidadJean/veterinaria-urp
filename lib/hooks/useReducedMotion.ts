// lib/hooks/useReducedMotion.ts
// CRÍTICO para accesibilidad — respeta prefers-reduced-motion del sistema
// Usado en TODOS los componentes con Framer Motion
 
'use client'
 
import { useReducedMotion as useFramerReducedMotion } from 'framer-motion'
 
export function useReducedMotion(): boolean {
  // Framer Motion ya lee window.matchMedia('(prefers-reduced-motion: reduce)')
  // Devuelve null en SSR → fallback a false (sin animaciones desactivadas)
  const shouldReduce = useFramerReducedMotion()
  return shouldReduce ?? false
}
 