// lib/data/services.ts
// Archivo .ts puro — SIN JSX
// Íconos en components/ui/ServiceIcon.tsx

export type ServiceIconName =
  | 'stethoscope'  // consulta general
  | 'flask'        // laboratorio
  | 'xray'         // radiografías
  | 'scan'         // ecografías
  | 'syringe'      // vacunas
  | 'heart'        // cardiología
  | 'scissors'     // cirugía
  | 'bird'         // exóticos
  | 'eye'          // oftalmología
  | 'bone'         // traumatología
  | 'brain'        // neurología
  | 'tooth'        // odontología

export interface Service {
  slug: string
  name: string
  shortDescription: string
  fullDescription: string
  whatIncludes: string[]
  iconName: ServiceIconName
  isEmergency?: boolean
  scheduleNote: string
  specialists?: string[]   // doctores que atienden este servicio
}

export const services: Service[] = [
  {
    slug: 'consulta-general',
    name: 'Consulta veterinaria general',
    shortDescription: 'Diagnóstico completo y seguimiento médico para perros, gatos y animales exóticos.',
    fullDescription:
      'La consulta general es el punto de partida para la salud de tu mascota. Nuestros médicos realizan una evaluación clínica completa, revisan el historial médico, diagnostican síntomas y prescriben el tratamiento adecuado. Contamos con equipamiento moderno y especialistas formados en la Universidad Ricardo Palma.',
    whatIncludes: [
      'Examen físico completo',
      'Anamnesis y revisión del historial',
      'Diagnóstico clínico',
      'Prescripción de tratamiento',
      'Orientación y seguimiento al propietario',
    ],
    iconName: 'stethoscope',
    scheduleNote: 'Lunes a Viernes · 08:00–17:00 · Con cita previa',
    specialists: ['Todo el equipo médico'],
  },
  {
    slug: 'consultas-especializadas',
    name: 'Consultas especializadas',
    shortDescription: 'Derivaciones a especialistas en cardiología, oftalmología, traumatología y neurología.',
    fullDescription:
      'Contamos con médicos especialistas en diversas áreas para ofrecer atención de segundo nivel. Si tu mascota requiere una evaluación especializada después de la consulta general, nuestros especialistas están disponibles en horarios específicos para cada área.',
    whatIncludes: [
      'Cardiología veterinaria',
      'Oftalmología veterinaria',
      'Traumatología y ortopedia',
      'Neurología veterinaria',
      'Informe especializado y plan de tratamiento',
    ],
    iconName: 'stethoscope',
    scheduleNote: 'Según especialista · Con cita previa',
    specialists: ['Dr. Guillermo Risco (Traumatología)', 'M.V. Verónica Álvarez (Oftalmología)'],
  },
  {
    slug: 'laboratorio',
    name: 'Laboratorio clínico',
    shortDescription: 'Hemograma, bioquímica sérica, uroanálisis y más. Resultados el mismo día.',
    fullDescription:
      'Nuestro laboratorio clínico permite obtener resultados rápidos y precisos para apoyar el diagnóstico veterinario. Procesamos las muestras básicas el mismo día, con resultados disponibles en pocas horas, lo que permite iniciar el tratamiento sin demoras.',
    whatIncludes: [
      'Hemograma completo (CBC)',
      'Bioquímica sérica (perfil hepático y renal)',
      'Uroanálisis completo',
      'Coprocultivo y coprología',
      'Pruebas de coagulación',
    ],
    iconName: 'flask',
    scheduleNote: 'Lunes a Viernes · 08:00–17:00',
    specialists: ['Equipo de laboratorio'],
  },
  {
    slug: 'radiografias',
    name: 'Radiografías digitales',
    shortDescription: 'Imágenes de alta resolución para diagnóstico óseo, torácico y abdominal.',
    fullDescription:
      'Las radiografías digitales permiten evaluar huesos, columna vertebral, tórax y abdomen con alta precisión y menor exposición a radiación que los sistemas analógicos. Son ideales para detectar fracturas, tumores óseos, enfermedades cardiorespiratorias y cuerpos extraños ingeridos.',
    whatIncludes: [
      'Radiografías de tórax y abdomen',
      'Radiografías de extremidades y columna',
      'Detección de cuerpos extraños',
      'Evaluación cardiorrespiratoria',
      'Informe radiológico digital',
    ],
    iconName: 'xray',
    scheduleNote: 'Lunes a Viernes · 08:00–17:00 · Con indicación médica',
    specialists: ['Dra. Cinthia Porras Tello'],
  },
  {
    slug: 'ecografias',
    name: 'Ecografías',
    shortDescription: 'Diagnóstico por ultrasonido de órganos abdominales, corazón y tejidos blandos.',
    fullDescription:
      'La ecografía es una herramienta diagnóstica no invasiva que permite visualizar en tiempo real los órganos internos de tu mascota. No utiliza radiación, es indolora y generalmente no requiere anestesia. La Dra. Cinthia Porras Tello, nuestra especialista en diagnóstico por imágenes, realiza este procedimiento los miércoles.',
    whatIncludes: [
      'Ecografía abdominal completa',
      'Ecocardiografía (corazón)',
      'Ecografía reproductiva (gestación)',
      'Evaluación de tejidos blandos',
      'Guía para biopsia ecodirigida',
    ],
    iconName: 'scan',
    scheduleNote: 'Miércoles · Turno mañana · Dra. Cinthia Porras Tello',
    specialists: ['Dra. Cinthia Porras Tello'],
  },
  {
    slug: 'vacunacion',
    name: 'Vacunación y desparasitación',
    shortDescription: 'Calendarios personalizados de vacunación y control de parásitos internos y externos.',
    fullDescription:
      'La prevención es la mejor medicina. Nuestros veterinarios diseñan calendarios de vacunación adaptados a la edad, raza y estilo de vida de tu mascota. Incluimos desparasitación interna y externa para mantenerla protegida durante todo el año. Entregamos carnet de vacunación actualizado.',
    whatIncludes: [
      'Vacunas para perros (Parvovirus, Moquillo, Rabia)',
      'Vacunas para gatos (Triple felina, Rabia)',
      'Vacunas para animales exóticos',
      'Desparasitación interna y externa',
      'Carnet de vacunación oficial',
    ],
    iconName: 'syringe',
    scheduleNote: 'Lunes a Viernes · 08:00–17:00 · Con cita previa',
    specialists: ['Todo el equipo médico'],
  },
  {
    slug: 'cardiologia',
    name: 'Cardiología veterinaria',
    shortDescription: 'Evaluación cardíaca, electrocardiograma y ecocardiografía para perros y gatos.',
    fullDescription:
      'Las enfermedades cardíacas son frecuentes en perros y gatos mayores, especialmente en ciertas razas. Nuestro servicio de cardiología ofrece evaluación completa del sistema cardiovascular mediante ecocardiografía, electrocardiograma y análisis de biomarcadores cardíacos para un diagnóstico preciso y tratamiento oportuno.',
    whatIncludes: [
      'Auscultación y examen cardiovascular',
      'Ecocardiografía (ecografía cardíaca)',
      'Electrocardiograma (ECG)',
      'Medición de presión arterial',
      'Plan de tratamiento y seguimiento',
    ],
    iconName: 'heart',
    scheduleNote: 'Con cita previa · Consultar disponibilidad',
    specialists: ['Especialista en cardiología'],
  },
  {
    slug: 'cirugia',
    name: 'Cirugía veterinaria',
    shortDescription: 'Cirugías electivas y de urgencia con anestesiología especializada y monitoreo.',
    fullDescription:
      'El área quirúrgica de la Clínica Veterinaria Docente URP está dirigida por el Dr. Mauricio Jara Aguirre, especialista en anestesiología, cirugía de animales menores y odontología veterinaria. Realizamos procedimientos electivos y de urgencia con los más altos estándares de seguridad, monitoreo intraoperatorio completo y analgesia multimodal.',
    whatIncludes: [
      'Cirugía de tejidos blandos (esterilización, tumores)',
      'Cirugía ortopédica',
      'Cirugía de urgencia',
      'Anestesiología y monitoreo completo',
      'Manejo del dolor postoperatorio',
    ],
    iconName: 'scissors',
    scheduleNote: 'Con cita previa · Dr. Mauricio Jara Aguirre',
    specialists: ['Dr. Mauricio Jara Aguirre'],
  },
  {
    slug: 'odontologia',
    name: 'Odontología veterinaria',
    shortDescription: 'Limpieza dental profesional, extracciones y tratamiento periodontal.',
    fullDescription:
      'El 80% de los perros mayores de 3 años tiene enfermedad periodontal. El Dr. Mauricio Jara Aguirre, con especialización en odontología veterinaria, realiza limpiezas dentales con ultrasonido, extracciones y tratamiento de patologías orales bajo anestesia segura y monitoreada.',
    whatIncludes: [
      'Limpieza dental ultrasónica (profilaxis)',
      'Extracciones dentales',
      'Tratamiento de gingivitis y periodontitis',
      'Pulido dental',
      'Evaluación y radiografía dental',
    ],
    iconName: 'tooth',
    scheduleNote: 'Con cita previa · Dr. Mauricio Jara Aguirre',
    specialists: ['Dr. Mauricio Jara Aguirre'],
  },
  {
    slug: 'oftalmologia',
    name: 'Oftalmología veterinaria',
    shortDescription: 'Diagnóstico y tratamiento de enfermedades oculares en perros, gatos y exóticos.',
    fullDescription:
      'La Dra. Verónica Álvarez Begazo atiende patologías oculares en animales de compañía y fauna silvestre. Las enfermedades oculares como cataratas, úlceras corneales, glaucoma y conjuntivitis requieren atención especializada para preservar la visión de tu mascota.',
    whatIncludes: [
      'Examen oftalmológico completo',
      'Tonometría (presión intraocular)',
      'Tinción corneal con fluoresceína',
      'Diagnóstico de cataratas y glaucoma',
      'Tratamiento médico y quirúrgico ocular',
    ],
    iconName: 'eye',
    scheduleNote: 'Martes y Jueves · Turno mañana · Dra. Verónica Álvarez',
    specialists: ['M.V. Verónica Álvarez Begazo'],
  },
  {
    slug: 'traumatologia',
    name: 'Traumatología y ortopedia',
    shortDescription: 'Diagnóstico y tratamiento de fracturas, luxaciones y enfermedades articulares.',
    fullDescription:
      'El Dr. Guillermo Risco atiende casos de traumatología y ortopedia veterinaria. Las fracturas, luxaciones de rótula, displasia de cadera y otras afecciones del sistema músculo-esquelético requieren evaluación especializada para definir el tratamiento más adecuado, ya sea médico o quirúrgico.',
    whatIncludes: [
      'Evaluación ortopédica completa',
      'Diagnóstico de fracturas y luxaciones',
      'Displasia de cadera y codo',
      'Cirugía ortopédica',
      'Rehabilitación y seguimiento',
    ],
    iconName: 'bone',
    scheduleNote: 'Jueves · Turno tarde · Dr. Guillermo Risco',
    specialists: ['M.V. Guillermo Risco'],
  },
  {
    slug: 'neurologia',
    name: 'Neurología veterinaria',
    shortDescription: 'Evaluación y tratamiento de enfermedades del sistema nervioso en mascotas.',
    fullDescription:
      'Las enfermedades neurológicas en mascotas — convulsiones, parálisis, ataxia, hernias de disco — requieren evaluación especializada. Nuestro servicio de neurología ofrece diagnóstico clínico neurológico completo y coordinación con centros de diagnóstico para estudios avanzados como resonancia magnética cuando se requiere.',
    whatIncludes: [
      'Examen neurológico completo',
      'Evaluación de reflejos y sensibilidad',
      'Diagnóstico de epilepsia y convulsiones',
      'Evaluación de hernias discales',
      'Plan de tratamiento y seguimiento',
    ],
    iconName: 'brain',
    scheduleNote: 'Con cita previa · Consultar disponibilidad',
    specialists: ['Especialista en neurología'],
  },
  {
    slug: 'exoticos',
    name: 'Animales exóticos',
    shortDescription: 'Atención especializada para aves, reptiles, conejos, peces y fauna silvestre.',
    fullDescription:
      'Somos uno de los pocos centros en Surco, Lima, con especialistas en animales exóticos. El Dr. Alberto Delgado atiende conejos, aves, murciélagos y roedores. El Dr. Franco Rosado es especialista en peces de agua dulce y marina. La Dra. Verónica Álvarez atiende también fauna silvestre.',
    whatIncludes: [
      'Consulta y diagnóstico para aves',
      'Atención a conejos, chinchillas y roedores',
      'Especialista en peces (agua dulce y marina)',
      'Reptiles y fauna silvestre',
      'Asesoría sobre alimentación y hábitat',
    ],
    iconName: 'bird',
    scheduleNote: 'Miércoles tarde · Dr. Delgado y Dr. Rosado',
    specialists: ['M.V. Alberto Delgado', 'M.V. Franco Rosado', 'M.V. Verónica Álvarez'],
  },
]