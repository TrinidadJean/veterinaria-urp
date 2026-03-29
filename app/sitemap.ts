// app/sitemap.ts
//import type { MetadataRoute } from 'next'
//import { siteConfig } from '@/lib/config/site'
//import { services } from '@/lib/data/services'
//
//export default function sitemap(): MetadataRoute.Sitemap {
//  const base = siteConfig.url
//
//  const staticRoutes: MetadataRoute.Sitemap = [
//    {
//      url: base,
//      lastModified: new Date(),
//      changeFrequency: 'weekly',
//      priority: 1.0,
//    },
//    {
//      url: `${base}/servicios`,
//      lastModified: new Date(),
//      changeFrequency: 'weekly',
//      priority: 0.9,
//    },
//    {
//      url: `${base}/equipo`,
//      lastModified: new Date(),
//      changeFrequency: 'monthly',
//      priority: 0.8,
//    },
//    {
//      url: `${base}/citas`,
//      lastModified: new Date(),
//      changeFrequency: 'monthly',
//      priority: 0.9,
//    },
//    {
//      url: `${base}/noticias`,
//      lastModified: new Date(),
//      changeFrequency: 'weekly',
//      priority: 0.7,
//    },
//    {
//      url: `${base}/contacto`,
//      lastModified: new Date(),
//      changeFrequency: 'yearly',
//      priority: 0.7,
//    },
//    {
//      url: `${base}/nosotros`,
//      lastModified: new Date(),
//      changeFrequency: 'yearly',
//      priority: 0.6,
//    },
//  ]
//
//  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
//    url: `${base}/servicios/${s.slug}`,
//    lastModified: new Date(),
//    changeFrequency: 'monthly',
//    priority: 0.8,
//  }))
//
//  return [...staticRoutes, ...serviceRoutes]
//}
//
//
//// ─────────────────────────────────────────────────────────────────────────────
//// app/robots.ts
//// ─────────────────────────────────────────────────────────────────────────────
//// import type { MetadataRoute } from 'next'
//// import { siteConfig } from '@/lib/config/site'
////
//// export default function robots(): MetadataRoute.Robots {
////   return {
////     rules: [
////       {
////         userAgent: '*',
////         allow: '/',
////         disallow: ['/api/', '/admin/', '/_next/'],
////       },
////     ],
////     sitemap: `${siteConfig.url}/sitemap.xml`,
////     host: siteConfig.url,
////   }
//// }
// app/sitemap.ts
// ─────────────────────────────────────────────────────────────────────
// DOMINIO TEMPORAL para revisión interna (subdominio posicionarlima.pe)
// Cuando tengas el dominio final veterinaria.urp.edu.pe, cambia BASE_URL
// por el valor real y actualiza también lib/config/site.ts → url
// ─────────────────────────────────────────────────────────────────────

import type { MetadataRoute } from 'next'
import { services } from '@/lib/data/services'

// ← CAMBIA AQUÍ cuando tengas el dominio final
const BASE_URL = 'https://veterinaria.posicionarlima.pe'

type ChangeFreq =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Páginas estáticas principales
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly' as ChangeFreq,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/servicios`,
      lastModified: now,
      changeFrequency: 'monthly' as ChangeFreq,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/equipo`,
      lastModified: now,
      changeFrequency: 'monthly' as ChangeFreq,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: now,
      changeFrequency: 'yearly' as ChangeFreq,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/nosotros`,
      lastModified: now,
      changeFrequency: 'yearly' as ChangeFreq,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/noticias`,
      lastModified: now,
      changeFrequency: 'weekly' as ChangeFreq,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: now,
      changeFrequency: 'monthly' as ChangeFreq,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/citas`,
      lastModified: now,
      changeFrequency: 'yearly' as ChangeFreq,
      priority: 0.8,
    },
    // Legales — baja prioridad
    {
      url: `${BASE_URL}/privacidad`,
      lastModified: now,
      changeFrequency: 'yearly' as ChangeFreq,
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terminos`,
      lastModified: now,
      changeFrequency: 'yearly' as ChangeFreq,
      priority: 0.2,
    },
  ]

  // Anclas de servicios — SEO local para cada especialidad
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/servicios#${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as ChangeFreq,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages]
}