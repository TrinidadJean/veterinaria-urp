'use client'

// components/layout/MobileMenu.tsx

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/config/site'
import { navigation } from '@/lib/config/navigation'
import Image from 'next/image'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        className="
          relative flex flex-col items-center justify-center gap-[5px]
          w-10 h-10 rounded-lg
          text-gray-700 hover:bg-gray-100
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
          lg:hidden
        "
      >
        <span className={`
          block w-5 h-[2px] bg-gray-700 rounded-full
          transition-all duration-300 origin-center
          ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}
        `} />
        <span className={`
          block w-5 h-[2px] bg-gray-700 rounded-full
          transition-all duration-200
          ${isOpen ? 'opacity-0 w-0' : 'opacity-100'}
        `} />
        <span className={`
          block w-5 h-[2px] bg-gray-700 rounded-full
          transition-all duration-300 origin-center
          ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}
        `} />
      </button>

      {/* Overlay — SIN backdrop-blur para evitar conflicto con header sticky */}
      <div
        className={`
          fixed inset-0 z-[60] bg-black/50
          transition-opacity duration-300
          lg:hidden
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      {/* Panel lateral — z-index mayor que overlay */}
      <div
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`
          fixed top-0 right-0 z-[70] h-full w-[300px] max-w-[90vw]
          bg-white
          transform transition-transform duration-300 ease-in-out
          lg:hidden
          flex flex-col
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{ boxShadow: '-8px 0 32px rgba(0,0,0,0.15)' }}
      >
        {/* Header del panel */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
          <div className="flex items-center">
            <div className="relative h-12 w-auto">
              <Image
                src="/images/logo/logo.webp"
                alt={siteConfig.shortName}
                width={220}
                height={90}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar menú"
            className="
              w-8 h-8 flex items-center justify-center rounded-lg
              text-gray-500 hover:text-gray-900 hover:bg-gray-100
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-emerald-500
            "
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Badge emergencias */}
        <div className="mx-4 mt-4 mb-2 flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-2.5 shrink-0">
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"/>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"/>
          </span>
          <span className="text-emerald-700 text-xs font-semibold">Emergencias 24h · Surco</span>
        </div>

        {/* Links de navegación */}
        <nav aria-label="Navegación móvil" className="flex-1 overflow-y-auto px-3 py-3">
          <ul className="space-y-0.5" role="list">
            {navigation.main.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    flex items-center justify-between
                    px-4 py-3.5 rounded-xl
                    text-gray-800 hover:text-emerald-700
                    font-medium text-[15px]
                    hover:bg-emerald-50
                    transition-all duration-150
                    focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset
                  "
                >
                  {item.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400" aria-hidden="true">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTAs inferiores — fondo blanco sólido, sin transparencias */}
        <div className="shrink-0 p-4 space-y-3 border-t border-gray-100 bg-white">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hola,%20quiero%20agendar%20una%20cita`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="
              flex items-center justify-center gap-2.5 w-full
              px-4 py-3.5 rounded-xl
              bg-[#25D366] hover:bg-[#22c55e]
              text-white font-semibold text-sm
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2
            "
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Agendar por WhatsApp
          </a>

          <a
            href={`tel:${siteConfig.phone}`}
            onClick={() => setIsOpen(false)}
            className="
              flex items-center justify-center gap-2.5 w-full
              px-4 py-3.5 rounded-xl
              bg-emerald-600 hover:bg-emerald-700
              text-white font-semibold text-sm
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
            "
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Llamar ahora
          </a>
        </div>

      </div>
    </>
  )
}