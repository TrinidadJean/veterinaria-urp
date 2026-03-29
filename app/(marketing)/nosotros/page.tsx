// app/(marketing)/nosotros/page.tsx
import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { siteConfig } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description: 'Conoce la Clínica Veterinaria Docente URP. Historia, misión y valores de la veterinaria de la Universidad Ricardo Palma en Surco, Lima.',
  alternates: { canonical: `${siteConfig.url}/nosotros` },
}

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        label="Quiénes somos"
        title="Clínica Veterinaria"
        titleHighlight="Docente URP"
        description="Somos la clínica veterinaria docente de la Universidad Ricardo Palma. Combinamos formación académica de excelencia con atención médica veterinaria profesional en Surco, Lima."
        variant="dark"
        bgImage="/images/hero/hero-nosotros.webp"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 lg:py-24 space-y-16">

        <section aria-labelledby="mision-title">
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">Misión</p>
          <h2 id="mision-title" className="text-3xl font-bold text-gray-900 mb-4">
            Nuestra misión
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Brindar atención veterinaria de calidad a mascotas y animales de compañía,
            integrando la práctica clínica con la formación de futuros médicos veterinarios
            bajo los estándares académicos de la Universidad Ricardo Palma.
          </p>
        </section>

        <div className="h-px bg-gray-100" aria-hidden="true" />

        <section aria-labelledby="valores-title">
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">Valores</p>
          <h2 id="valores-title" className="text-3xl font-bold text-gray-900 mb-8">
            Lo que nos guía
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Excelencia académica',
                description: 'Formamos veterinarios con los más altos estándares de la URP.',
                icon: '🎓',
              },
              {
                title: 'Bienestar animal',
                description: 'El bienestar de tu mascota es nuestra prioridad en cada consulta.',
                icon: '🐾',
              },
              {
                title: 'Ética profesional',
                description: 'Actuamos con transparencia, responsabilidad y compromiso.',
                icon: '⚕️',
              },
            ].map((v) => (
              <div key={v.title} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="text-2xl mb-4 block" role="img" aria-hidden="true">{v.icon}</span>
                <h3 className="text-gray-900 font-bold text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-gray-100" aria-hidden="true" />

        <section className="p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">Respaldo institucional</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Universidad Ricardo Palma
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            La Clínica Veterinaria Docente forma parte de la Facultad de Medicina
            Veterinaria de la Universidad Ricardo Palma, institución con amplia
            trayectoria en formación profesional en Perú. Nuestros médicos son
            docentes y especialistas certificados que combinan investigación,
            docencia y práctica clínica.
          </p>
          <a
            href="https://urp.edu.pe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:underline"
          >
            Visitar urp.edu.pe
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </section>

      </div>
    </>
  )
}