'use client'

// components/sections/NoticiasGrid.tsx
// Client Component — maneja el estado del modal y los filtros
// La página /noticias es Server Component, este componente tiene el estado

import { useState } from 'react'
import Image from 'next/image'
import { noticias, formatDate } from '@/lib/data/noticias'
import type { Noticia } from '@/lib/data/noticias'
import { NoticiaModal } from '@/components/sections/NoticiaModal'
import { siteConfig } from '@/lib/config/site'

const CATEGORIES = ['Todas', ...Array.from(new Set(noticias.map(n => n.category)))]

export function NoticiasGrid() {
  const [selected, setSelected] = useState<Noticia | null>(null)
  const [category, setCategory] = useState('Todas')

  const filtered = category === 'Todas'
    ? noticias
    : noticias.filter(n => n.category === category)

  return (
    <>
      {/* Filtros por categoría */}
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filtrar por categoría">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`
              px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500
              ${category === cat
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700'
              }
            `}
            aria-pressed={category === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de artículos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((noticia) => (
          <article key={noticia.slug}>
            <button
              onClick={() => setSelected(noticia)}
              className="
                group w-full text-left
                bg-white border border-gray-100 rounded-2xl overflow-hidden
                hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50
                transition-all duration-300 hover:-translate-y-0.5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
              "
              aria-label={`Leer artículo: ${noticia.title}`}
            >
              {/* Imagen */}
              <div className="relative h-48 bg-gradient-to-br from-emerald-50 to-gray-100 overflow-hidden">
                <Image
                  src={`/images/noticias/${noticia.image}`}
                  alt={noticia.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-white bg-emerald-600/90 px-2.5 py-1 rounded-full">
                    {noticia.category}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3 text-[11px] text-gray-400">
                  <time dateTime={noticia.date}>{formatDate(noticia.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{noticia.readTime}</span>
                </div>
                <h2 className="text-gray-900 font-bold text-base leading-snug mb-2 group-hover:text-emerald-700 transition-colors duration-200">
                  {noticia.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {noticia.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-emerald-600 text-sm font-semibold">
                  Leer artículo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </button>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400 text-sm">
          No hay artículos en esta categoría aún.
        </div>
      )}

      {/* CTA redes */}
      <div className="mt-14 text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
        <p className="text-gray-700 font-semibold text-base mb-2">
          ¿Quieres más contenido sobre salud veterinaria?
        </p>
        <p className="text-gray-400 text-sm mb-5">
          Síguenos en redes sociales para tips diarios de cuidado animal.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-600 font-semibold text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </a>
          <a
            href={siteConfig.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl 
                       bg-gray-50 hover:bg-gray-100 
                       text-gray-900 
                       font-semibold text-sm 
                       transition-colors duration-150 
                       focus-visible:outline-none 
                       focus-visible:ring-2 focus-visible:ring-gray-800"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
            </svg>
            TikTok
          </a>
         </div>
       </div>

      {/* Modal */}
      <NoticiaModal
        noticia={selected}
        onClose={() => setSelected(null)}
      />
    </>
  )
}