// components/layout/Header.tsx
// Server Component — NO 'use client'
// focus → focus-visible en todos los links del nav
// El anillo solo aparece al navegar con teclado, nunca al hacer clic

import Link from 'next/link'
import Image from 'next/image'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { siteConfig } from '@/lib/config/site'
import { navigation } from '@/lib/config/navigation'

export function Header() {
  return (
    <header
      role="banner"
      className="sticky top-0 z-30 bg-white border-b border-gray-100"
    >
      {/* ── Barra superior ─────────────────────────────────────────────── */}
      <div className="bg-emerald-700 text-white text-xs font-medium py-1.5 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"/>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"/>
              </span>
              Atención Lunes a Viernes · Surco, Lima
            </span>
            <span className="text-emerald-400" aria-hidden="true">|</span>
            <address className="not-italic flex items-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="hover:text-emerald-200 transition-colors duration-200 flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded"
                aria-label={`Llamar al ${siteConfig.phone}`}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                {siteConfig.phone}
              </a>
              <span className="text-emerald-400" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {siteConfig.address.district}, Lima
              </span>
            </address>
          </div>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hola,%20necesito%20atenci%C3%B3n%20veterinaria`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors duration-200 text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            aria-label="WhatsApp"
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>

      {/* ── Barra principal ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 lg:h-20 flex items-center justify-between gap-4">

        {/* Logo co-branding */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 focus-visible:outline-offset-2"
          aria-label={`${siteConfig.name} — Ir al inicio`}
        >
          <Image
            src="/images/logo/logo.webp"
            alt="Universidad Ricardo Palma"
            height={40}
            width={120}
            className="h-16 lg:h-22 w-auto object-contain"
            priority
          />
          <div className="h-8 w-px bg-gray-200 shrink-0" aria-hidden="true" />
          <Image
            src="/images/logo/logocli.webp"
            alt="Clínica Veterinaria Docente URP"
            height={40}
            width={160}
            className="h-16 lg:h-22 w-auto object-contain"
            priority
          />
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center">
          <ul className="flex items-center gap-0.5" role="list">
            {navigation.main.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="
                    relative px-4 py-2 rounded-lg
                    text-gray-600 hover:text-emerald-700 hover:bg-emerald-50
                    font-medium text-sm
                    transition-all duration-150
                    outline-none
                    focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTAs desktop */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={`tel:${siteConfig.phone}`}
            className="
              flex items-center gap-2 px-4 py-2.5 rounded-xl
              border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50
              text-gray-700 hover:text-emerald-700
              font-medium text-sm
              transition-all duration-150
              outline-none
              focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
            "
            aria-label={`Llamar: ${siteConfig.phone}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Llamar
          </a>
          <Link
            href="/citas"
            className="
              flex items-center gap-2 px-5 py-2.5 rounded-xl
              bg-emerald-600 hover:bg-emerald-700
              text-white font-semibold text-sm
              shadow-sm hover:shadow-md shadow-emerald-200
              transition-all duration-150
              outline-none
              focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
            "
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Agendar cita
          </Link>
        </div>

        {/* Mobile: WhatsApp + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hola,%20quiero%20agendar%20una%20cita`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center w-9 h-9 rounded-xl
              bg-[#25D366] hover:bg-[#22c55e]
              text-white transition-colors duration-200
              outline-none
              focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2
            "
            aria-label="Contactar por WhatsApp"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
          <MobileMenu />
        </div>

      </div>
    </header>
  )
}