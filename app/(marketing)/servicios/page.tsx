// app/(marketing)/servicios/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/data/services'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { PageHero } from '@/components/ui/PageHero'
import { siteConfig } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Servicios Veterinarios en Surco',
  description: 'Consulta, cirugía, vacunación, diagnóstico por imágenes, odontología veterinaria y más. Clínica Veterinaria Docente URP en Surco, Lima.',
  alternates: { canonical: `${siteConfig.url}/servicios` },
}

export default function ServiciosPage() {
  return (
    <div>
      <PageHero
        label="Lo que ofrecemos"
        title="Servicios veterinarios"
        titleHighlight="en Surco, Lima"
        description="Atención integral para tu mascota con médicos especializados de la Universidad Ricardo Palma."
        variant="dark"
        bgImage="/images/hero/hero-servicios.webp"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="space-y-6">
          {services.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 hover:border-emerald-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <ServiceIcon name={service.iconName} size={26} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold text-gray-900">{service.name}</h2>
                    {service.isEmergency && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" aria-hidden="true" />
                        Solo en horario L–V
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-5">{service.fullDescription}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Incluye</h3>
                      <ul className="space-y-1.5">
                        {service.whatIncludes.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col justify-between gap-4">
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wide">Horario</p>
                        <p className="text-gray-800 font-semibold text-sm">{service.scheduleNote}</p>
                      </div>
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}?text=Hola,%20quiero%20agendar%20${encodeURIComponent(service.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Agendar este servicio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#equipo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-200 hover:border-emerald-400 text-emerald-700 hover:text-emerald-800 font-semibold text-sm hover:bg-emerald-50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Ver equipo y agendar cita
          </Link>
        </div>
      </div>
    </div>
  )
}