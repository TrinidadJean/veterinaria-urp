// app/(marketing)/privacidad/page.tsx
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad y protección de datos de la Clínica Veterinaria Docente URP.',
  alternates: { canonical: `${siteConfig.url}/privacidad` },
  robots: { index: false, follow: false },
}

export default function PrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
      <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
        Política de Privacidad
      </h1>
      <p className="text-gray-400 text-sm mb-10">
        Última actualización: {new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Información que recopilamos</h2>
          <p>
            La Clínica Veterinaria Docente Universidad Ricardo Palma recopila
            únicamente la información que usted nos proporciona voluntariamente
            al contactarnos: nombre, número de teléfono y descripción de la
            consulta veterinaria. No recopilamos datos sensibles.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Uso de la información</h2>
          <p>
            La información proporcionada se utiliza exclusivamente para coordinar
            citas veterinarias y brindar atención a su mascota. No compartimos
            su información con terceros ni la utilizamos con fines comerciales.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. WhatsApp y comunicación</h2>
          <p>
            Al contactarnos por WhatsApp, acepta que su conversación sea
            utilizada para coordinar su atención veterinaria. Los mensajes se
            gestionan conforme a la política de privacidad de WhatsApp/Meta.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies</h2>
          <p>
            Este sitio web puede utilizar cookies técnicas necesarias para su
            correcto funcionamiento. No utilizamos cookies de rastreo con fines
            publicitarios.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Contacto</h2>
          <p>
            Para cualquier consulta sobre privacidad, contáctenos en{' '}
            <a href={`tel:${siteConfig.phone}`} className="text-emerald-600 hover:text-emerald-700 font-medium">
              {siteConfig.phone}
            </a>{' '}
            o visite nuestras instalaciones en {siteConfig.address.street},{' '}
            {siteConfig.address.district}, Lima.
          </p>
        </section>

      </div>
    </div>
  )
}