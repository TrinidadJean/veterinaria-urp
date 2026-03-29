// lib/data/testimonials.ts
export interface Testimonial {
  name: string
  pet: string
  location: string
  rating: number
  text: string
}
 
export const testimonials: Testimonial[] = [
  {
    name: 'Lucía Fernández',
    pet: 'Toby, Golden Retriever',
    location: 'Santiago de Surco',
    rating: 5,
    text: 'Llevé a Toby de emergencia a medianoche y la atención fue increíble. El Dr. Manuel lo operó de urgencia y se recuperó perfectamente. Los mejores veterinarios en Surco, sin duda.',
  },
  {
    name: 'Roberto Mendívil',
    pet: 'Luna, gata siamesa',
    location: 'La Molina',
    rating: 5,
    text: 'Encontré esta clínica buscando "veterinaria cerca de mi" y fue la mejor decisión. Luna necesitaba cirugía y el equipo nos explicó todo con paciencia y profesionalismo.',
  },
  {
    name: 'Camila Ortega',
    pet: 'Pipo, conejo holandés',
    location: 'Surco',
    rating: 5,
    text: 'Tenía miedo de no encontrar veterinarios para animales exóticos en Lima, pero la Dra. Quispe es especialista en conejos. Pipo está sano y feliz gracias a su atención.',
  },
  {
    name: 'Diego Alarcón',
    pet: 'Max, Labrador',
    location: 'San Borja',
    rating: 5,
    text: 'El servicio de hospitalización fue excelente. Monitoreo constante, actualizaciones diarias y un precio justo. Max salió como nuevo. Clínica veterinaria top en Lima.',
  },
  {
    name: 'Valeria Castillo',
    pet: 'Mochi, Shih Tzu',
    location: 'Surco',
    rating: 5,
    text: 'Vinimos para la limpieza dental de Mochi y quedamos asombrados. La Dra. Rojas explicó cada paso. El lugar es limpio, moderno y el personal es muy amable.',
  },
]