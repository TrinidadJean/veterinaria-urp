'use client'

// app/(marketing)/citas/page.tsx
// Redirige al TeamSection en la home y abre el modal de agendamiento
// No necesita metadata porque es un redirect client-side

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CitasPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirige a la home con hash #equipo para hacer scroll al TeamSection
    // El BookingModal se abre desde los botones del TeamSection
    router.replace('/#equipo')
  }, [router])

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" aria-hidden="true" />
        <p className="text-gray-500 text-sm">Redirigiendo al agendamiento...</p>
      </div>
    </div>
  )
}