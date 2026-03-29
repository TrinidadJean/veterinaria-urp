// lib/config/navigation.ts

export interface NavItem {
  label: string
  href: string
}

export const navigation = {
  // Menú principal — 4 items limpios
  main: [
    { label: 'Servicios',      href: '/servicios' },
    { label: 'Nuestro equipo', href: '/equipo' },
    { label: 'Noticias',       href: '/noticias' },
    { label: 'Contacto',       href: '/contacto' },
  ] satisfies NavItem[],

  // Footer — servicios con anclas a /servicios#slug (SEO local)
  services: [
    { label: 'Consulta veterinaria',      href: '/servicios#consulta-general' },
    { label: 'Laboratorio clínico',       href: '/servicios#laboratorio' },
    { label: 'Radiografías digitales',    href: '/servicios#radiografias' },
    { label: 'Ecografías',                href: '/servicios#ecografias' },
    { label: 'Vacunación y desparasit.',  href: '/servicios#vacunacion' },
    { label: 'Cardiología veterinaria',   href: '/servicios#cardiologia' },
    { label: 'Cirugía veterinaria',       href: '/servicios#cirugia' },
    { label: 'Odontología veterinaria',   href: '/servicios#odontologia' },
    { label: 'Oftalmología veterinaria',  href: '/servicios#oftalmologia' },
    { label: 'Traumatología y ortopedia', href: '/servicios#traumatologia' },
    { label: 'Neurología veterinaria',    href: '/servicios#neurologia' },
    { label: 'Animales exóticos',         href: '/servicios#exoticos' },
  ] satisfies NavItem[],

  // Footer — columna información
  info: [
    { label: 'Sobre nosotros',        href: '/nosotros' },
    { label: 'Nuestro equipo médico', href: '/equipo' },
    { label: 'Agendar una cita',      href: '/citas' },
    { label: 'Preguntas frecuentes',  href: '/faq' },
    { label: 'Noticias y consejos',   href: '/noticias' },
    { label: 'Contacto',              href: '/contacto' },
  ] satisfies NavItem[],
}