// app/(marketing)/terminos/page.tsx
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso del sitio web de la Clínica Veterinaria Docente URP.',
  alternates: { canonical: `${siteConfig.url}/terminos` },
  robots: { index: false, follow: false },
}

export default function TerminosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
      <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
        Términos y Condiciones
      </h1>
      <p className="text-gray-400 text-sm mb-10">
        Última actualización: {new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <div className="space-y-8 text-gray-600 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Uso del sitio web</h2>
          <p>
            Este sitio web es propiedad de la Clínica Veterinaria Docente
            Universidad Ricardo Palma. Su uso implica la aceptación de los
            presentes términos. El sitio está destinado a brindar información
            sobre nuestros servicios veterinarios.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Servicios veterinarios</h2>
          <p>
            La información publicada en este sitio es de carácter informativo.
            El diagnóstico y tratamiento de enfermedades animales debe ser
            realizado exclusivamente por médicos veterinarios colegiados durante
            una consulta presencial.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Citas y reservas</h2>
          <p>
            Las citas solicitadas por WhatsApp o teléfono están sujetas a
            disponibilidad de los especialistas. La confirmación de la cita
            será comunicada por nuestro equipo de atención.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Propiedad intelectual</h2>
          <p>
            Los contenidos, imágenes y logotipos publicados en este sitio son
            propiedad de la Universidad Ricardo Palma o de sus respectivos
            propietarios. Su reproducción sin autorización está prohibida.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Contacto</h2>
          <p>
            Para consultas sobre estos términos, contáctenos en{' '}
            <a href={`tel:${siteConfig.phone}`} className="text-emerald-600 hover:text-emerald-700 font-medium">
              {siteConfig.phone}
            </a>.
          </p>
        </section>

      </div>
    </div>
  )
}