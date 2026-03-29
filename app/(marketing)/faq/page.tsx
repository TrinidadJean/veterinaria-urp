// app/(marketing)/faq/page.tsx
import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { siteConfig } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes',
  description: 'Respuestas a las preguntas más frecuentes sobre la Clínica Veterinaria Docente URP en Surco, Lima. Horarios, servicios, citas y más.',
  alternates: { canonical: `${siteConfig.url}/faq` },
}

const faqs = [
  {
    q: '¿Cuáles son los horarios de atención?',
    a: `Atendemos de lunes a viernes de ${siteConfig.hours.weekdays}. Los sábados y domingos no hay atención programada.`,
  },
  {
    q: '¿Necesito cita previa para ser atendido?',
    a: 'Sí, todas las consultas requieren cita previa. Puedes agendar por WhatsApp o llamando directamente.',
  },
  {
    q: '¿Atienden animales exóticos?',
    a: 'Sí, contamos con especialistas en conejos, aves, reptiles, peces y fauna silvestre. Consulta el horario de cada especialista en la sección de equipo.',
  },
  {
    q: '¿Qué servicios ofrecen?',
    a: 'Consulta general, cirugía, vacunación, desparasitación, diagnóstico por imágenes (ecografías, radiografías), odontología veterinaria, traumatología y hospitalización.',
  },
  {
    q: '¿Dónde están ubicados?',
    a: `En ${siteConfig.address.street}, ${siteConfig.address.district}, Lima ${siteConfig.address.postalCode}. Dentro del campus de la Universidad Ricardo Palma.`,
  },
  {
    q: '¿Cómo puedo agendar una cita?',
    a: 'Por WhatsApp, llamando a nuestro número, o usando el formulario de agendamiento en la sección del equipo médico.',
  },
  {
    q: '¿Aceptan todas las mascotas?',
    a: 'Atendemos perros, gatos, aves, conejos, reptiles, peces y fauna silvestre. Consulta disponibilidad para tu tipo de mascota.',
  },
  {
    q: '¿Cuáles son los métodos de pago?',
    a: 'Aceptamos efectivo, tarjetas de crédito y débito, y transferencias bancarias.',
  },
  {
    q: '¿La clínica tiene estacionamiento?',
    a: 'Sí, contamos con estacionamiento disponible dentro del campus de la Universidad Ricardo Palma.',
  },
  {
    q: '¿Los médicos son docentes de la URP?',
    a: 'Sí, todos son docentes y especialistas de la Facultad de Medicina Veterinaria de la URP con certificaciones nacionales e internacionales.',
  },
]

export default function FaqPage() {
  return (
    <>
      <PageHero
        label="FAQ"
        title="Preguntas"
        titleHighlight="frecuentes"
        description="Todo lo que necesitas saber sobre nuestra clínica veterinaria en Surco. Si no encuentras tu respuesta, escríbenos por WhatsApp."
        variant="dark"
        bgImage="/images/hero/hero-faq.webp"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 lg:py-20">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden"
            >
              <summary className="
                flex items-center justify-between gap-4
                px-6 py-5 cursor-pointer list-none
                text-gray-900 font-semibold text-base
                hover:bg-gray-50 transition-colors duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-inset
              ">
                {faq.q}
                <svg
                  width="18" height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </summary>
              <div className="px-6 pb-5 pt-1">
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
          <p className="text-gray-700 font-semibold text-base mb-2">¿Tienes otra pregunta?</p>
          <p className="text-gray-500 text-sm mb-5">Escríbenos por WhatsApp y te respondemos a la brevedad.</p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hola,%20tengo%20una%20consulta`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}