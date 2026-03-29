'use client'

import { siteConfig } from '@/lib/config/site'

export function ContactMap() {
  return (
    <section
      aria-labelledby="location-title"
      className="py-20 lg:py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Info de contacto + NAP ──────────────────────────────────── */}
          <div>
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Ubícanos
            </p>
            <h2
              id="location-title"
              className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6"
            >
              Veterinaria en el corazón de Surco, Lima
            </h2>

            {/* NAP — texto visible para SEO local */}
            <address className="not-italic space-y-5 mb-8">

              {/* Dirección */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">Dirección</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.district}, Lima {siteConfig.address.postalCode}
                  </p>
                  <a
                    href={siteConfig.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 text-sm font-medium mt-1 inline-block transition-colors focus:outline-none focus:underline"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">Horarios de atención</p>
                  <div className="text-gray-500 text-sm space-y-0.5">
                    <p>
                      <span className="text-gray-700 font-medium">Lunes a Viernes:</span>{' '}
                      {siteConfig.hours.weekdays}
                    </p>
                    <p>
                      <span className="text-gray-700 font-medium">Sábado:</span>{' '}
                      {siteConfig.hours.saturday}
                    </p>
                    <p>
                      <span className="text-gray-700 font-medium">Domingo:</span>{' '}
                      {siteConfig.hours.sunday}
                    </p>
                    <p className="text-emerald-600 font-semibold pt-1">
                      Emergencias: {siteConfig.hours.emergency}
                    </p>
                  </div>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">Teléfono y WhatsApp</p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="block text-gray-500 hover:text-emerald-600 text-sm transition-colors focus:outline-none focus:text-emerald-600"
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-500 hover:text-emerald-600 text-sm transition-colors mt-0.5 focus:outline-none focus:text-emerald-600"
                  >
                    WhatsApp disponible
                  </a>
                </div>
              </div>

            </address>

            {/* CTA cómo llegar */}
            <a
              href={siteConfig.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-5 py-3 rounded-xl
                bg-emerald-600 hover:bg-emerald-700
                text-white font-semibold text-sm
                transition-all duration-200 hover:-translate-y-0.5
                focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
              "
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="3 11 22 2 13 21 11 13 3 11"/>
              </svg>
              Cómo llegar
            </a>
          </div>

          {/* ── Iframe real de Google Maps ──────────────────────────────── */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.682587234903!2d-76.98324982400419!3d-12.133856743530368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9b467589fb7%3A0x48420a1f75a38123!2sCl%C3%ADnica%20Veterinaria%20Docente%20Ricardo%20Palma!5e0!3m2!1ses-419!2spe!4v1774453861097!5m2!1ses-419!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa: ${siteConfig.name} en ${siteConfig.address.district}, Lima`}
              className="absolute inset-0 w-full h-full"
            />
          </div>

        </div>
      </div>
    </section>
  )
}