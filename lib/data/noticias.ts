// lib/data/noticias.ts
// Artículos reales sobre cuidado veterinario
// Imágenes en /public/images/noticias/noticia1.webp, noticia2.webp ...

export interface Noticia {
  slug: string
  title: string
  excerpt: string       // resumen para la card
  content: string       // contenido completo para el modal
  date: string          // YYYY-MM-DD
  category: string
  image: string         // nombre del archivo en /public/images/noticias/
  readTime: string      // tiempo estimado de lectura
}

export const noticias: Noticia[] = [
  {
    slug: 'cuidados-verano-mascotas',
    title: 'Cómo proteger a tu mascota del calor en Lima',
    excerpt:
      'El verano limeño puede ser peligroso para perros y gatos. Aprende a identificar el golpe de calor y cómo prevenirlo.',
    content: `El calor intenso del verano en Lima —con temperaturas que pueden superar los 30°C— representa un riesgo real para nuestras mascotas, especialmente para perros de razas braquicéfalas como bulldogs, pugs y shih tzus, que tienen mayor dificultad para regular su temperatura corporal.

**Señales de alerta del golpe de calor:**
El golpe de calor (hipertermia) es una emergencia veterinaria. Reconoce estos síntomas: jadeo excesivo y rápido, salivación abundante, encías y lengua de color rojo brillante o morado, debilidad o desmayo, vómitos y pérdida de coordinación. Si observas alguno de estos signos, lleva a tu mascota al veterinario de inmediato.

**Medidas preventivas esenciales:**
Nunca dejes a tu mascota dentro de un auto estacionado, incluso con las ventanas abiertas. La temperatura interior puede subir 20°C en solo 10 minutos. Asegúrate de que siempre tenga agua fresca disponible y sombra. Evita los paseos en las horas de mayor calor (12:00–16:00). Prefiere las mañanas temprano o después de las 6 PM.

**Hidratación y alimentación:**
Aumenta la frecuencia con la que cambias el agua de tu mascota. Puedes ofrecer cubitos de hielo o agua ligeramente fría —nunca helada— para refrescarlo. Algunas mascotas disfrutan de juguetes congelados o snacks de hielo. Evita la actividad física intensa.

**Razas más vulnerables:**
Los perros braquicéfalos (nariz chata), los gatos de pelo largo, los animales mayores de 7 años y aquellos con enfermedades cardíacas o respiratorias son los más susceptibles. Estas mascotas requieren mayor vigilancia durante el verano.

En la Clínica Veterinaria Docente URP, nuestros especialistas pueden evaluar la condición general de tu mascota y darte recomendaciones personalizadas para el verano. Agenda tu cita preventiva con anticipación.`,
    date: '2025-01-15',
    category: 'Consejos',
    image: 'noticia1.webp',
    readTime: '4 min',
  },
  {
    slug: 'calendario-vacunacion-perros-gatos',
    title: 'Calendario de vacunación para perros y gatos en Perú',
    excerpt:
      'Las vacunas protegen a tu mascota de enfermedades mortales. Conoce el esquema oficial recomendado por nuestros veterinarios.',
    content: `La vacunación es la herramienta más eficaz para prevenir enfermedades infecciosas graves en perros y gatos. En Perú, el SENASA y los colegios veterinarios recomiendan esquemas específicos que nuestros especialistas en la Clínica Veterinaria Docente URP siguen rigurosamente.

**Calendario para perros:**
A las 6–8 semanas de vida comienza la primera vacuna polivalente (Parvovirus, Moquillo, Hepatitis, Parainfluenza). Se repite a las 10–12 semanas y nuevamente a las 14–16 semanas. La vacuna antirrábica se aplica a partir de los 3 meses. A partir del año, los refuerzos son anuales.

**Calendario para gatos:**
A las 8 semanas inicia la triple felina (Panleucopenia, Herpesvirus, Calicivirus). Refuerzo a las 12 semanas y a las 16 semanas. La vacuna de rabia se aplica a los 3 meses. Refuerzos anuales según el estilo de vida del gato (si sale al exterior se recomienda también la vacuna de leucemia felina).

**¿Por qué no saltarse las vacunas?**
El Parvovirus canino tiene una mortalidad de hasta 90% en cachorros no vacunados. El Moquillo puede causar daño neurológico permanente. La rabia es fatal para animales y humanos. Estas no son enfermedades del pasado —siguen presentes en Lima y en todo el Perú.

**Desparasitación junto a la vacunación:**
Los parásitos internos (gusanos) interfieren con la respuesta inmune a las vacunas. Por eso, siempre desparasitamos antes de vacunar. El esquema en cachorros es cada 15 días hasta los 3 meses, luego mensual hasta los 6 meses, y posteriormente cada 3 meses.

**Carnet de vacunación:**
En nuestra clínica entregamos y actualizamos el carnet de vacunación de tu mascota en cada visita. Este documento es requerido para viajes, hoteles de mascotas y guarderías.`,
    date: '2024-12-20',
    category: 'Prevención',
    image: 'noticia2.webp',
    readTime: '5 min',
  },
  {
    slug: 'animales-exoticos-cuidados-peru',
    title: 'Animales exóticos en casa: lo que debes saber antes de adoptar',
    excerpt:
      'Conejos, aves, reptiles y peces requieren cuidados muy específicos. Nuestros especialistas te explican todo antes de dar el paso.',
    content: `Cada vez más familias en Lima optan por animales exóticos como mascotas: conejos, chinchillas, tortugas, loros, periquitos, peces de agua fría y tropical, e incluso reptiles como iguanas y serpientes. Antes de adoptar uno, es fundamental entender sus necesidades reales.

**Conejos:**
Son animales sociales que necesitan espacio para moverse libremente —no pueden vivir en jaulas pequeñas toda su vida. Requieren heno ad libitum (siempre disponible), verduras frescas y muy pocas frutas. Son susceptibles a problemas dentales, digestivos y respiratorios. La esterilización es muy recomendable para prevenir cáncer uterino en hembras. En nuestra clínica, el Dr. Alberto Delgado atiende conejos los miércoles por la tarde.

**Aves (loros, periquitos, cacatúas):**
Las aves son altamente inteligentes y necesitan estimulación mental constante. El aburrimiento genera comportamientos destructivos como el arrancado de plumas. Requieren jaulas grandes, juguetes, interacción diaria y una dieta variada de semillas, frutas, vegetales y pellets especializados. El Dr. Alberto Delgado también es especialista en aves.

**Peces:**
El acuarismo es más complejo de lo que parece. La calidad del agua (pH, temperatura, niveles de amoníaco y nitritos) es crítica para la salud de los peces. Tanto los peces de agua dulce como los marinos requieren equipos de filtración adecuados y cambios regulares de agua. El Dr. Franco Rosado es nuestro especialista en peces, disponible los miércoles por la tarde.

**Reptiles:**
Tortugas e iguanas requieren lámparas UV-B especiales para sintetizar vitamina D3, temperatura ambiente controlada y dietas muy específicas según la especie. Son animales de larga vida —una tortuga puede vivir más de 50 años— así que es un compromiso a largo plazo.

**Legislación en Perú:**
El SERFOR regula la tenencia de fauna silvestre en Perú. Muchas especies de aves, reptiles y mamíferos silvestres están protegidas y no pueden tenerse como mascotas. Antes de adoptar, verifica que el animal sea de origen legal.

Antes de adoptar cualquier animal exótico, te recomendamos una consulta de orientación con nuestros especialistas para evaluar si ese animal es compatible con tu estilo de vida y presupuesto.`,
    date: '2024-11-10',
    category: 'Animales exóticos',
    image: 'noticia3.webp',
    readTime: '6 min',
  },
  {
    slug: 'salud-dental-mascotas',
    title: 'La salud dental de tu mascota: más importante de lo que crees',
    excerpt:
      'El 80% de los perros mayores de 3 años tiene algún grado de enfermedad periodontal. Aprende cómo prevenirla desde casa.',
    content: `La enfermedad periodontal es la afección más común en perros y gatos, pero también una de las más prevenibles. El sarro, la gingivitis y la periodontitis no solo causan dolor —pueden derivar en infecciones que afectan el corazón, los riñones y el hígado.

**¿Por qué es tan frecuente?**
A diferencia de los humanos, muy pocos propietarios cepillan los dientes de sus mascotas con regularidad. La placa bacteriana se acumula en los dientes y, al mineralizarse, forma el sarro (tártaro) que no puede eliminarse solo con cepillado: requiere una limpieza profesional con ultrasonido bajo anestesia.

**Señales de problema dental:**
Mal aliento persistente (no normal en perros ni gatos), dificultad para comer o masticar, sangrado al comer, encías rojas o inflamadas, dientes flojos o ausentes, babeo excesivo y cambios de comportamiento al acercarte a su boca.

**Prevención en casa:**
El cepillado dental es el gold standard. Usa pasta dental veterinaria —nunca pasta humana, ya que contiene flúor que es tóxico para mascotas. Introduce el cepillado gradualmente desde cachorro. Si tu mascota no tolera el cepillado, existen alternativas: geles dentales, sprays, snacks dentales y juguetes diseñados para reducir la placa.

**Limpieza profesional:**
La limpieza dental veterinaria (profilaxis) se realiza bajo anestesia general para garantizar la seguridad y la efectividad del procedimiento. Incluye ultrasonido para remover el sarro, pulido de superficies dentales, evaluación de cada diente y extracción de piezas que no pueden salvarse. La Dra. y el Dr. Jara realizan estos procedimientos en nuestra clínica.

**¿Cada cuánto?**
Dependiendo de la raza, la dieta y los hábitos de higiene, la mayoría de perros necesita una limpieza profesional cada 1–2 años. Las razas pequeñas (Yorkshire, Maltés, Poodle) son especialmente propensas al sarro y pueden necesitarla anualmente.`,
    date: '2024-10-05',
    category: 'Salud dental',
    image: 'noticia4.webp',
    readTime: '5 min',
  },
  {
    slug: 'esterilizacion-beneficios',
    title: 'Esterilización: beneficios para la salud y el comportamiento',
    excerpt:
      'Más allá del control de la población, la esterilización previene enfermedades graves y mejora la calidad de vida de tu mascota.',
    content: `La esterilización (ovariohisterectomía en hembras, orquiectomía en machos) es uno de los procedimientos más realizados en medicina veterinaria. Sus beneficios van mucho más allá del control poblacional de mascotas abandonadas.

**Beneficios en hembras:**
Elimina el riesgo de piometra (infección uterina grave, potencialmente mortal), reduce drásticamente el riesgo de tumores mamarios (si se esteriliza antes del primer celo, la protección es del 99.5%), previene el embarazo no deseado y elimina los ciclos de celo que pueden ser estresantes para el animal y el propietario.

**Beneficios en machos:**
Previene el cáncer testicular (100% de efectividad), reduce significativamente el riesgo de problemas de próstata, disminuye la tendencia a fugarse en busca de hembras en celo, reduce los comportamientos territoriales y agresivos relacionados con las hormonas, y elimina el marcaje excesivo con orina.

**¿Cuándo esterilizar?**
En perros, el momento ideal varía según la raza y el tamaño. Las razas pequeñas pueden esterilizarse a partir de los 6 meses. Las razas grandes y gigantes se benefician de esperar hasta los 12–18 meses para que su desarrollo óseo sea completo. En gatos, se recomienda a partir de los 5–6 meses, antes del primer celo en hembras.

**Mitos sobre la esterilización:**
"Mi mascota va a engordar": El aumento de peso postesterilización se debe a cambios en el metabolismo, pero se controla fácilmente con la dieta adecuada. "Va a cambiar su personalidad": La esterilización no cambia la personalidad fundamental del animal, solo reduce comportamientos hormonales. "Es mejor que tenga una camada primero": No existe evidencia científica que respalde este mito.

**El procedimiento en nuestra clínica:**
El Dr. Mauricio Jara Aguirre y el equipo quirúrgico realizan esterilizaciones con anestesia monitoreada, analgesia multimodal y cuidados postoperatorios detallados. Incluimos una consulta preoperatoria para evaluar el estado de salud general de tu mascota antes del procedimiento.`,
    date: '2024-09-18',
    category: 'Cirugía',
    image: 'noticia5.webp',
    readTime: '5 min',
  },
  {
    slug: 'diagnostico-imagenes-veterinaria',
    title: 'Ecografías y radiografías: cuándo y por qué las necesita tu mascota',
    excerpt:
      'El diagnóstico por imágenes permite detectar problemas internos sin cirugía. Conoce cuándo tu veterinario puede recomendarlo.',
    content: `El diagnóstico por imágenes es una herramienta fundamental en la medicina veterinaria moderna. Permite visualizar órganos internos, detectar tumores, evaluar fracturas, diagnosticar enfermedades cardíacas y guiar procedimientos sin necesidad de abrir al paciente.

**Radiografías (Rayos X):**
Son ideales para evaluar huesos (fracturas, displasia de cadera, artritis), el tamaño y la forma del corazón y los pulmones, la presencia de cuerpos extraños ingeridos (huesos, juguetes), y la columna vertebral. Son rápidas, económicas y ampliamente disponibles. En nuestra clínica contamos con equipo digital que reduce la exposición a radiación y mejora la calidad de imagen.

**Ecografía (Ultrasonido):**
Es ideal para evaluar órganos abdominales (hígado, bazo, riñones, vejiga, útero, próstata), detectar líquido libre en cavidades, guiar biopsias de órganos, evaluar el corazón (ecocardiografía) y confirmar embarazos. La ecografía no utiliza radiación, es indolora y generalmente no requiere anestesia —solo rasurar la zona a evaluar.

**¿Cuándo recomienda el veterinario una ecografía?**
Ante síntomas como vómitos persistentes, pérdida de peso inexplicable, distensión abdominal, problemas urinarios, dificultad respiratoria, o como parte de un chequeo preventivo en animales mayores de 7 años. La Dra. Cinthia Porras Tello, nuestra especialista en diagnóstico por imágenes, está disponible los miércoles por la mañana.

**Combinación de estudios:**
Frecuentemente, el diagnóstico más completo se obtiene combinando radiografías (para estructura ósea y pulmones) con ecografía (para órganos abdominales). Nuestro equipo puede realizar ambos estudios en la misma visita y entregarte un informe detallado el mismo día.

**Análisis de laboratorio:**
Complementan los estudios de imagen: hemograma completo, bioquímica sérica, uroanálisis y coprocultivo. En nuestra clínica procesamos muestras básicas el mismo día, con resultados en pocas horas.`,
    date: '2024-08-22',
    category: 'Diagnóstico',
    image: 'noticia6.webp',
    readTime: '5 min',
  },
]

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-PE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}