// components/ui/ServiceIcon.tsx
// Archivo .tsx — íconos SVG para cada servicio
// Separado de services.ts para que ese archivo sea .ts puro sin JSX

import type { ServiceIconName } from '@/lib/data/services'

interface ServiceIconProps {
  name: ServiceIconName
  size?: number
}

export function ServiceIcon({ name, size = 20 }: ServiceIconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (name) {
    case 'stethoscope':
      return (
        <svg {...props}>
          <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
          <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
          <circle cx="20" cy="10" r="2"/>
        </svg>
      )

    case 'flask':
      return (
        <svg {...props}>
          <path d="M9 3h6"/>
          <path d="M9 3v6l-4 10a1 1 0 0 0 .9 1.4h12.2a1 1 0 0 0 .9-1.4L15 9V3"/>
          <path d="M7.5 13.5h9"/>
        </svg>
      )

    case 'xray':
      return (
        <svg {...props}>
          <rect width="18" height="18" x="3" y="3" rx="2"/>
          <path d="M9 8h6"/>
          <path d="M9 16h6"/>
          <path d="M12 8v8"/>
          <path d="M9 12h6"/>
        </svg>
      )

    case 'scan':
      return (
        <svg {...props}>
          <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
          <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
          <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
          <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 9v-2"/>
          <path d="M12 17v-2"/>
        </svg>
      )

    case 'syringe':
      return (
        <svg {...props}>
          <path d="m18 2 4 4"/>
          <path d="m17 7 3-3"/>
          <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/>
          <path d="m9 11 4 4"/>
          <path d="m5 19-3 3"/>
          <path d="m14 4 6 6"/>
        </svg>
      )

    case 'heart':
      return (
        <svg {...props}>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          <path d="M3.22 12H9.5l.5-1 2 4 .5-2 2 2 .5-1h6"/>
        </svg>
      )

    case 'scissors':
      return (
        <svg {...props}>
          <circle cx="6" cy="6" r="3"/>
          <path d="M8.12 8.12 12 12"/>
          <path d="M20 4 8.12 15.88"/>
          <circle cx="6" cy="18" r="3"/>
          <path d="M14.8 14.8 20 20"/>
        </svg>
      )

    case 'tooth':
      return (
        <svg {...props}>
          <path d="M12 5.5c-1.5-2-4-2.5-6-1C3.5 6 2.5 9 3 11.5c.5 2.5 1 5 3 6 1 .5 2-.5 3-2 .5-1 1-2 3-2s2.5 1 3 2c1 1.5 2 2.5 3 2 2-1 2.5-3.5 3-6 .5-2.5-.5-5.5-3-7-2-1.5-4.5-1-6 1Z"/>
        </svg>
      )

    case 'eye':
      return (
        <svg {...props}>
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      )

    case 'bone':
      return (
        <svg {...props}>
          <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/>
        </svg>
      )

    case 'brain':
      return (
        <svg {...props}>
          <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
          <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
          <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
          <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
          <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
          <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
          <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
          <path d="M6 18a4 4 0 0 1-1.967-.516"/>
          <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
        </svg>
      )

    case 'bird':
      return (
        <svg {...props}>
          <path d="M16 7h.01"/>
          <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/>
          <path d="m20 7 2 .5-2 .5"/>
          <path d="M10 18v3"/>
          <path d="M14 17.75V21"/>
          <path d="M7 18a6 6 0 0 0 3.84-10.61"/>
        </svg>
      )

    default:
      return null
  }
}