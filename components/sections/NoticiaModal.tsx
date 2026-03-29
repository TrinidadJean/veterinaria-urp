'use client'

// components/sections/NoticiaModal.tsx
// Modal de detalle de artículo con contenido completo renderizado

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import type { Noticia } from '@/lib/data/noticias'
import { formatDate } from '@/lib/data/noticias'

interface NoticiaModalProps {
  noticia: Noticia | null
  onClose: () => void
}

// Renderiza el markdown simple del content (negrita y párrafos)
function renderContent(content: string) {
  return content.split('\n\n').map((block, i) => {
    if (!block.trim()) return null

    // Bloque con **título** al inicio → subtítulo
    if (block.startsWith('**') && block.includes(':**')) {
      const parts = block.split(/\*\*(.*?)\*\*/)
      return (
        <div key={i} className="mb-4">
          <h3 className="text-gray-900 font-bold text-base mb-2">
            {parts[1]}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {parts[2]?.replace(/^\s*:?\s*/, '')}
          </p>
        </div>
      )
    }

    // Párrafo normal
    return (
      <p key={i} className="text-gray-600 text-sm leading-relaxed mb-4">
        {block.trim()}
      </p>
    )
  })
}

export function NoticiaModal({ noticia, onClose }: NoticiaModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!noticia) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    // Scroll al top del modal al abrir
    modalRef.current?.scrollTo({ top: 0 })
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [noticia, onClose])

  if (!noticia) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[80] bg-black/60"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="noticia-modal-title"
        className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-4"
      >
        <div
          ref={modalRef}
          className="
            relative w-full sm:max-w-2xl
            max-h-[95dvh] sm:max-h-[90vh]
            bg-white sm:rounded-2xl rounded-t-2xl
            overflow-y-auto overscroll-contain
            flex flex-col
          "
          onClick={e => e.stopPropagation()}
        >
          {/* Imagen de cabecera */}
          <div className="relative h-52 sm:h-64 bg-gray-100 shrink-0">
            <Image
              src={`/images/noticias/${noticia.image}`}
              alt={noticia.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 672px"
              loading="lazy"
            />
            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />

            {/* Botón cerrar encima de la imagen */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-xl bg-black/40 hover:bg-black/60 text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Cerrar artículo"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Badge categoría encima de la imagen */}
            <div className="absolute bottom-4 left-5">
              <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wide text-white bg-emerald-600 px-3 py-1 rounded-full">
                {noticia.category}
              </span>
            </div>
          </div>

          {/* Contenido */}
          <div className="px-5 sm:px-7 py-6 flex-1">

            {/* Meta */}
            <div className="flex items-center gap-3 mb-4 text-[12px] text-gray-400">
              <time dateTime={noticia.date}>{formatDate(noticia.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{noticia.readTime} de lectura</span>
            </div>

            {/* Título */}
            <h2
              id="noticia-modal-title"
              className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-5"
            >
              {noticia.title}
            </h2>

            {/* Contenido completo */}
            <div className="prose-sm">
              {renderContent(noticia.content)}
            </div>

            {/* Footer del modal */}
            <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
              <p className="text-gray-400 text-xs flex-1">
                Publicado por el equipo médico de la Clínica Veterinaria Docente URP
              </p>
              <button
                onClick={onClose}
                className="
                  w-full sm:w-auto px-5 py-2.5 rounded-xl
                  border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50
                  text-gray-700 hover:text-emerald-700
                  font-semibold text-sm
                  transition-colors duration-150
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500
                "
              >
                Cerrar artículo
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}