// app/layout.tsx
// Root Layout — se aplica a TODAS las páginas
// NO incluye Header ni Footer — eso va en (marketing)/layout.tsx

import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib/config/site'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | Veterinaria en Surco, Lima`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'Universidad Ricardo Palma', url: 'https://urp.edu.pe' }],
  creator: 'Universidad Ricardo Palma',
  publisher: 'Universidad Ricardo Palma',
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.shortName} | Veterinaria en Surco, Lima`,
    description: siteConfig.description,
    images: [{
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: 'Clínica Veterinaria Docente Universidad Ricardo Palma — Surco, Lima',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.shortName} | Veterinaria en Surco`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: { 'es-PE': siteConfig.url },
  },
  verification: {
    google: 'TU_CODIGO_DE_VERIFICACION_AQUI',
  },
  applicationName: siteConfig.shortName,
  category: 'Salud Animal',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

const clinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'VeterinaryCare',
  '@id': `${siteConfig.url}/#veterinaryCare`,
  name: siteConfig.name,
  alternateName: ['Veterinaria URP', 'Clínica Veterinaria Surco', 'Veterinaria Universidad Ricardo Palma'],
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  image: { '@type': 'ImageObject', url: siteConfig.ogImage, width: 1200, height: 630 },
  logo: { '@type': 'ImageObject', url: `${siteConfig.url}/images/logo/logo.svg` },
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.district,
    addressRegion: 'Lima',
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: -12.1319, longitude: -76.9994 },
  hasMap: siteConfig.address.mapsUrl,
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '09:00', closes: '14:00' },
  ],
  specialOpeningHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', description: 'Emergencias 24 horas', opens: '00:00', closes: '23:59' },
  ],
  priceRange: 'S/. 50 – S/. 800',
  currenciesAccepted: 'PEN',
  paymentAccepted: 'Efectivo, Tarjeta de crédito, Transferencia',
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, 'https://urp.edu.pe'],
  parentOrganization: { '@type': 'EducationalOrganization', name: 'Universidad Ricardo Palma', url: 'https://urp.edu.pe' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.url }],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="dns-prefetch" href="//api.whatsapp.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/logo/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900 selection:bg-emerald-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-emerald-600 focus:text-white focus:font-medium focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  )
}