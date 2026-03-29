import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Paleta de la clínica — ajusta según branding de URP
        brand: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',  // color principal CTAs
          700: '#15803d',
          900: '#14532d',
        },
        // Acento para urgencias/24h
        emergency: {
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      // Espaciado para secciones
      spacing: {
        section: '5rem',       // py-section → 80px entre secciones
        'section-sm': '3rem',  // mobile
      },
    },
  },
  plugins: [],
}

export default config