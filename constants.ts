
import { Question, PersonalityProfile, World, WorldId, PersonalityDimension, ResultChartScore } from './types';

export const APP_TITLE = "Descubre Tu Arquetipo";

export const WORLDS_DATA: { [key in WorldId]: World } = {
  [WorldId.VISIONARIOS]: {
    id: WorldId.VISIONARIOS,
    name: "🌞 Mundo VISIONARIOS",
    backgroundColor: "bg-[#FFF1A8]", // Amarillo pastel
    textColor: "text-yellow-800",
  },
  [WorldId.GUARDIANES]: {
    id: WorldId.GUARDIANES,
    name: "🌊 Mundo GUARDIANES",
    backgroundColor: "bg-[#A5D8FF]", // Azul pastel
    textColor: "text-blue-800",
  },
  [WorldId.SENSIBLES]: {
    id: WorldId.SENSIBLES,
    name: "🌱 Mundo SENSIBLES",
    backgroundColor: "bg-[#FFC8DD]", // Rosa pastel
    textColor: "text-pink-800",
  },
  [WorldId.EJECUTORES]: {
    id: WorldId.EJECUTORES,
    name: "🔥 Mundo EJECUTORES",
    backgroundColor: "bg-[#FFD6A5]", // Naranja pastel
    textColor: "text-orange-800",
  },
};

export const QUESTIONS: Question[] = [
  // Toma de Decisiones (2)
  { id: "q1", text: "Confío en mi intuición al tomar decisiones importantes.", dimension: PersonalityDimension.TOMA_DECISIONES, isPositivePolarity: true },
  { id: "q2", text: "Prefiero analizar todos los datos disponibles antes de decidir.", dimension: PersonalityDimension.TOMA_DECISIONES, isPositivePolarity: true }, // High score = analytical, can be mapped differently for profiles
  // Gestión Emocional (2)
  { id: "q3", text: "Mantengo la calma bajo presión.", dimension: PersonalityDimension.GESTION_EMOCIONAL, isPositivePolarity: true },
  { id: "q4", text: "Expreso mis emociones abiertamente.", dimension: PersonalityDimension.GESTION_EMOCIONAL, isPositivePolarity: true },
  // Adaptabilidad (2)
  { id: "q5", text: "Me adapto con facilidad a los cambios inesperados.", dimension: PersonalityDimension.ADAPTABILIDAD, isPositivePolarity: true },
  { id: "q6", text: "Disfruto de las rutinas y la previsibilidad.", dimension: PersonalityDimension.ADAPTABILIDAD, isPositivePolarity: false }, // Agree = low adaptability
  // Comunicación (2)
  { id: "q7", text: "Me siento cómodo hablando en público.", dimension: PersonalityDimension.COMUNICACION, isPositivePolarity: true },
  { id: "q8", text: "Prefiero escuchar más que hablar en conversaciones grupales.", dimension: PersonalityDimension.COMUNICACION, isPositivePolarity: false }, // Agree = less assertive communication
  // Estilo de Liderazgo (2)
  { id: "q9", text: "Me gusta tomar la iniciativa y guiar a otros.", dimension: PersonalityDimension.ESTILO_LIDERAZGO, isPositivePolarity: true },
  { id: "q10", text: "Prefiero colaborar en equipo sin un rol de líder formal.", dimension: PersonalityDimension.ESTILO_LIDERAZGO, isPositivePolarity: false },
  // Resolución de Problemas (2)
  { id: "q11", text: "Abordo los problemas de forma creativa y buscando soluciones novedosas.", dimension: PersonalityDimension.RESOLUCION_PROBLEMAS, isPositivePolarity: true },
  { id: "q12", text: "Sigo métodos probados y eficientes para resolver problemas.", dimension: PersonalityDimension.RESOLUCION_PROBLEMAS, isPositivePolarity: true }, // High score = methodical
  // Estructura vs Flexibilidad (2)
  { id: "q13", text: "Me siento más productivo en entornos flexibles y con poca estructura.", dimension: PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD, isPositivePolarity: true }, // Agree = high flexibility
  { id: "q14", text: "Valoro la organización y los planes detallados.", dimension: PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD, isPositivePolarity: false }, // Agree = high structure (low flexibility score)
];

export const PERSONALITY_PROFILES: PersonalityProfile[] = [
  // VISIONARIOS
  {
    id: "catalizador-solar", name: "Catalizador Solar", worldId: WorldId.VISIONARIOS, avatarIcon: "☀️", avatarColor: "#FFC300", // Amarillo intenso
    description: "Eres una fuente de inspiración y energía, iluminando el camino con ideas audaces y una visión de futuro. Te encanta innovar y motivar a otros a alcanzar nuevas alturas.",
    characteristicScores: { [PersonalityDimension.TOMA_DECISIONES]: 6, [PersonalityDimension.GESTION_EMOCIONAL]: 5, [PersonalityDimension.ADAPTABILIDAD]: 7, [PersonalityDimension.COMUNICACION]: 6, [PersonalityDimension.ESTILO_LIDERAZGO]: 7, [PersonalityDimension.RESOLUCION_PROBLEMAS]: 6, [PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD]: 6 }, // High flexibility
    resultChartScores: [ { name: "Autoliderazgo", value: 90 }, { name: "Comunicación", value: 80 }, { name: "Adaptabilidad", value: 95 }, { name: "Toma de Decisiones", value: 85 }, { name: "Trabajo en Equipo", value: 70 } ],
    recommendations: ["Sigue cultivando tu creatividad con nuevos desafíos.", "Practica la escucha activa para potenciar tu liderazgo.", "Busca mentores que te ayuden a estructurar tus grandes ideas."]
  },
  {
    id: "chispa-creativa", name: "Chispa Creativa", worldId: WorldId.VISIONARIOS, avatarIcon: "✨", avatarColor: "#D6336C", // Fucsia
    description: "Tu mente es un torbellino de originalidad y arte. Ves el mundo de formas únicas y disfrutas experimentando y rompiendo moldes. La innovación es tu segundo nombre.",
    characteristicScores: { [PersonalityDimension.TOMA_DECISIONES]: 5, [PersonalityDimension.GESTION_EMOCIONAL]: 6, [PersonalityDimension.ADAPTABILIDAD]: 6, [PersonalityDimension.COMUNICACION]: 5, [PersonalityDimension.ESTILO_LIDERAZGO]: 4, [PersonalityDimension.RESOLUCION_PROBLEMAS]: 7, [PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD]: 7 }, // Very high flexibility
    resultChartScores: [ { name: "Autoliderazgo", value: 75 }, { name: "Comunicación", value: 70 }, { name: "Adaptabilidad", value: 85 }, { name: "Toma de Decisiones", value: 70 }, { name: "Trabajo en Equipo", value: 65 } ],
    recommendations: ["Dedica tiempo a proyectos personales que te apasionen.", "Colabora con perfiles analíticos para equilibrar tu creatividad.", "No temas compartir tus ideas, ¡son valiosas!"]
  },
  // ... (Adding 2 more Visionaries, then 4 for each other world. Total 16)
  {
    id: "explorador-audaz", name: "Explorador Audaz", worldId: WorldId.VISIONARIOS, avatarIcon: "🧭", avatarColor: "#0077CC", // Azul eléctrico
    description: "Te impulsa la curiosidad y el deseo de descubrir nuevos horizontes. No temes aventurarte en lo desconocido y disfrutas los desafíos que te sacan de tu zona de confort.",
    characteristicScores: { [PersonalityDimension.TOMA_DECISIONES]: 7, [PersonalityDimension.GESTION_EMOCIONAL]: 5, [PersonalityDimension.ADAPTABILIDAD]: 7, [PersonalityDimension.COMUNICACION]: 6, [PersonalityDimension.ESTILO_LIDERAZGO]: 6, [PersonalityDimension.RESOLUCION_PROBLEMAS]: 5, [PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD]: 5 },
    resultChartScores: [ { name: "Autoliderazgo", value: 85 }, { name: "Comunicación", value: 75 }, { name: "Adaptabilidad", value: 90 }, { name: "Toma de Decisiones", value: 90 }, { name: "Trabajo en Equipo", value: 60 } ],
    recommendations: ["Establece metas claras para tus exploraciones.", "Documenta tus aprendizajes para compartirlos.", "Busca compañeros de aventura que compartan tu entusiasmo."]
  },
  {
    id: "alquimista-estrategico", name: "Alquimista Estratégico", worldId: WorldId.VISIONARIOS, avatarIcon: "🔮", avatarColor: "#FF922B", // Naranja brillante
    description: "Transformas ideas complejas en planes brillantes. Tu mente estratégica ve patrones donde otros ven caos, y tienes la habilidad de convertir visiones en realidad con ingenio.",
    characteristicScores: { [PersonalityDimension.TOMA_DECISIONES]: 7, [PersonalityDimension.GESTION_EMOCIONAL]: 4, [PersonalityDimension.ADAPTABILIDAD]: 5, [PersonalityDimension.COMUNICACION]: 5, [PersonalityDimension.ESTILO_LIDERAZGO]: 7, [PersonalityDimension.RESOLUCION_PROBLEMAS]: 7, [PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD]: 4 }, // Moderate flexibility
    resultChartScores: [ { name: "Autoliderazgo", value: 90 }, { name: "Comunicación", value: 65 }, { name: "Adaptabilidad", value: 70 }, { name: "Toma de Decisiones", value: 95 }, { name: "Trabajo en Equipo", value: 75 } ],
    recommendations: ["Dedica tiempo a la planificación y la previsión.", "Comunica tus estrategias de forma clara y concisa.", "Confía en tu capacidad para resolver problemas complejos."]
  },

  // GUARDIANES
  {
    id: "escudo-azul", name: "Escudo Azul", worldId: WorldId.GUARDIANES, avatarIcon: "🛡️", avatarColor: "#0077CC",
    description: "Eres un pilar de confianza y responsabilidad. Proteges lo que valoras con dedicación y te aseguras de que todo funcione de manera ordenada y segura. Tu lealtad es inquebrantable.",
    characteristicScores: { [PersonalityDimension.TOMA_DECISIONES]: 4, [PersonalityDimension.GESTION_EMOCIONAL]: 6, [PersonalityDimension.ADAPTABILIDAD]: 3, [PersonalityDimension.COMUNICACION]: 4, [PersonalityDimension.ESTILO_LIDERAZGO]: 3, [PersonalityDimension.RESOLUCION_PROBLEMAS]: 4, [PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD]: 2 }, // Prefers structure
    resultChartScores: [ { name: "Autoliderazgo", value: 70 }, { name: "Comunicación", value: 60 }, { name: "Adaptabilidad", value: 50 }, { name: "Toma de Decisiones", value: 75 }, { name: "Trabajo en Equipo", value: 80 } ],
    recommendations: ["Reconoce tu valor como estabilizador de equipos.", "Aprende a delegar tareas para no sobrecargarte.", "Permite cierta flexibilidad en tus planes cuando sea necesario."]
  },
  {
    id: "arquitecto-del-orden", name: "Arquitecto del Orden", worldId: WorldId.GUARDIANES, avatarIcon: "📐", avatarColor: "#FF922B",
    description: "Diseñas sistemas y procesos con precisión impecable. Tu mente analítica y tu atención al detalle garantizan que todo esté perfectamente estructurado y funcione eficientemente.",
    characteristicScores: { [PersonalityDimension.TOMA_DECISIONES]: 5, [PersonalityDimension.GESTION_EMOCIONAL]: 3, [PersonalityDimension.ADAPTABILIDAD]: 2, [PersonalityDimension.COMUNICACION]: 3, [PersonalityDimension.ESTILO_LIDERAZGO]: 4, [PersonalityDimension.RESOLUCION_PROBLEMAS]: 6, [PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD]: 1 }, // High structure
    resultChartScores: [ { name: "Autoliderazgo", value: 75 }, { name: "Comunicación", value: 50 }, { name: "Adaptabilidad", value: 40 }, { name: "Toma de Decisiones", value: 80 }, { name: "Trabajo en Equipo", value: 70 } ],
    recommendations: ["Valora el impacto de tu capacidad organizativa.", "Comunica tus planes de forma clara a los demás.", "Considera enfoques ágiles para proyectos dinámicos."]
  },
  // ... (Adding 2 more Guardianes, 4 Sensibles, 4 Executores)
  {
    id: "cuidador-del-ritmo", name: "Cuidador del Ritmo", worldId: WorldId.GUARDIANES, avatarIcon: "🎵", avatarColor: "#D6336C",
    description: "Mantienes la armonía y la constancia en tu entorno. Eres fiable, trabajador y te aseguras de que las tareas se completen a tiempo y con calidad, marcando un ritmo sostenible.",
    characteristicScores: { [PersonalityDimension.TOMA_DECISIONES]: 3, [PersonalityDimension.GESTION_EMOCIONAL]: 5, [PersonalityDimension.ADAPTABILIDAD]: 4, [PersonalityDimension.COMUNICACION]: 5, [PersonalityDimension.ESTILO_LIDERAZGO]: 2, [PersonalityDimension.RESOLUCION_PROBLEMAS]: 3, [PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD]: 3 },
    resultChartScores: [ { name: "Autoliderazgo", value: 65 }, { name: "Comunicación", value: 70 }, { name: "Adaptabilidad", value: 60 }, { name: "Toma de Decisiones", value: 60 }, { name: "Trabajo en Equipo", value: 85 } ],
    recommendations: ["Tu constancia es una gran fortaleza.", "Aprende a decir 'no' para proteger tu energía.", "Celebra tus logros y los del equipo."]
  },
  {
    id: "maestro-de-los-procesos", name: "Maestro de los Procesos", worldId: WorldId.GUARDIANES, avatarIcon: "🧾", avatarColor: "#FFC300",
    description: "Dominas los procedimientos y optimizas los flujos de trabajo. Eres metódico, eficiente y buscas la mejora continua, asegurando que todo se haga de la manera correcta.",
    characteristicScores: { [PersonalityDimension.TOMA_DECISIONES]: 4, [PersonalityDimension.GESTION_EMOCIONAL]: 4, [PersonalityDimension.ADAPTABILIDAD]: 3, [PersonalityDimension.COMUNICACION]: 4, [PersonalityDimension.ESTILO_LIDERAZGO]: 3, [PersonalityDimension.RESOLUCION_PROBLEMAS]: 7, [PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD]: 2 },
    resultChartScores: [ { name: "Autoliderazgo", value: 70 }, { name: "Comunicación", value: 60 }, { name: "Adaptabilidad", value: 55 }, { name: "Toma de Decisiones", value: 70 }, { name: "Trabajo en Equipo", value: 75 } ],
    recommendations: ["Comparte tu conocimiento sobre eficiencia.", "Mantente actualizado en nuevas metodologías.", "Fomenta la documentación clara de procesos."]
  },

  // SENSIBLES
  {
    id: "mediador-del-alma", name: "Mediador del Alma", worldId: WorldId.SENSIBLES, avatarIcon: "💗", avatarColor: "#D6336C",
    description: "Conectas profundamente con las emociones, propias y ajenas. Eres empático, compasivo y buscas la armonía en las relaciones, actuando como un puente entre las personas.",
    characteristicScores: { [PersonalityDimension.TOMA_DECISIONES]: 3, [PersonalityDimension.GESTION_EMOCIONAL]: 7, [PersonalityDimension.ADAPTABILIDAD]: 5, [PersonalityDimension.COMUNICACION]: 7, [PersonalityDimension.ESTILO_LIDERAZGO]: 4, [PersonalityDimension.RESOLUCION_PROBLEMAS]: 4, [PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD]: 4 },
    resultChartScores: [ { name: "Autoliderazgo", value: 60 }, { name: "Comunicación", value: 90 }, { name: "Adaptabilidad", value: 70 }, { name: "Toma de Decisiones", value: 55 }, { name: "Trabajo en Equipo", value: 90 } ],
    recommendations: ["Tu empatía es un don; úsala para construir puentes.", "Establece límites saludables para proteger tu energía emocional.", "Practica el autocuidado regularmente."]
  },
  {
    id: "jardinero-interior", name: "Jardinero Interior", worldId: WorldId.SENSIBLES, avatarIcon: "🌷", avatarColor: "#0077CC",
    description: "Cultivas la belleza y el crecimiento personal, tanto en ti como en los demás. Eres introspectivo, paciente y te dedicas a nutrir el potencial humano con delicadeza.",
    characteristicScores: { [PersonalityDimension.TOMA_DECISIONES]: 4, [PersonalityDimension.GESTION_EMOCIONAL]: 6, [PersonalityDimension.ADAPTABILIDAD]: 6, [PersonalityDimension.COMUNICACION]: 5, [PersonalityDimension.ESTILO_LIDERAZGO]: 3, [PersonalityDimension.RESOLUCION_PROBLEMAS]: 5, [PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD]: 5 },
    resultChartScores: [ { name: "Autoliderazgo", value: 75 }, { name: "Comunicación", value: 70 }, { name: "Adaptabilidad", value: 80 }, { name: "Toma de Decisiones", value: 65 }, { name: "Trabajo en Equipo", value: 80 } ],
    recommendations: ["Dedica tiempo a la reflexión y el autoconocimiento.", "Inspira a otros a través de tu ejemplo de crecimiento.", "Crea espacios seguros para la expresión emocional."]
  },
  {
    id: "escultor-de-emociones", name: "Escultor de Emociones", worldId: WorldId.SENSIBLES, avatarIcon: "🎨", avatarColor: "#FFC300",
    description: "Das forma a los sentimientos a través de la expresión creativa. Eres sensible, intuitivo y tienes una habilidad especial para canalizar emociones complejas en arte o comunicación significativa.",
    characteristicScores: { [PersonalityDimension.TOMA_DECISIONES]: 2, [PersonalityDimension.GESTION_EMOCIONAL]: 7, [PersonalityDimension.ADAPTABILIDAD]: 4, [PersonalityDimension.COMUNICACION]: 6, [PersonalityDimension.ESTILO_LIDERAZGO]: 2, [PersonalityDimension.RESOLUCION_PROBLEMAS]: 3, [PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD]: 6 },
    resultChartScores: [ { name: "Autoliderazgo", value: 55 }, { name: "Comunicación", value: 85 }, { name: "Adaptabilidad", value: 65 }, { name: "Toma de Decisiones", value: 50 }, { name: "Trabajo en Equipo", value: 70 } ],
    recommendations: ["Encuentra salidas creativas para tus emociones.", "Tu sensibilidad es una fuente de inspiración; compártela.", "Conecta con otros artistas y creadores."]
  },
  {
    id: "sabio-silencioso", name: "Sabio Silencioso", worldId: WorldId.SENSIBLES, avatarIcon: "🕊️", avatarColor: "#FF922B",
    description: "Observas el mundo con profundidad y calma, encontrando sabiduría en la quietud. Eres reflexivo, perspicaz y ofreces una perspectiva serena y considerada.",
    characteristicScores: { [PersonalityDimension.TOMA_DECISIONES]: 5, [PersonalityDimension.GESTION_EMOCIONAL]: 5, [PersonalityDimension.ADAPTABILIDAD]: 5, [PersonalityDimension.COMUNICACION]: 3, [PersonalityDimension.ESTILO_LIDERAZGO]: 1, [PersonalityDimension.RESOLUCION_PROBLEMAS]: 6, [PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD]: 3 },
    resultChartScores: [ { name: "Autoliderazgo", value: 80 }, { name: "Comunicación", value: 50 }, { name: "Adaptabilidad", value: 75 }, { name: "Toma de Decisiones", value: 70 }, { name: "Trabajo en Equipo", value: 60 } ],
    recommendations: ["Confía en tu voz interior y tu perspectiva única.", "Busca momentos de soledad para recargar energías.", "Comparte tu sabiduría cuando sientas que es el momento adecuado."]
  },
  
  // EJECUTORES
  {
    id: "impulsor-alfa", name: "Impulsor Alfa", worldId: WorldId.EJECUTORES, avatarIcon: "🚀", avatarColor: "#FFC300",
    description: "Eres pura energía y determinación, siempre listo para la acción y enfocado en resultados. Lideras con dinamismo y te esfuerzas por alcanzar metas ambiciosas.",
    characteristicScores: { [PersonalityDimension.TOMA_DECISIONES]: 7, [PersonalityDimension.GESTION_EMOCIONAL]: 4, [PersonalityDimension.ADAPTABILIDAD]: 6, [PersonalityDimension.COMUNICACION]: 7, [PersonalityDimension.ESTILO_LIDERAZGO]: 7, [PersonalityDimension.RESOLUCION_PROBLEMAS]: 6, [PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD]: 4 },
    resultChartScores: [ { name: "Autoliderazgo", value: 95 }, { name: "Comunicación", value: 85 }, { name: "Adaptabilidad", value: 80 }, { name: "Toma de Decisiones", value: 90 }, { name: "Trabajo en Equipo", value: 75 } ],
    recommendations: ["Canaliza tu energía en objetivos claros y medibles.", "Practica la paciencia y la delegación efectiva.", "Celebra los éxitos del equipo tanto como los individuales."]
  },
  {
    id: "constructor-tactico", name: "Constructor Táctico", worldId: WorldId.EJECUTORES, avatarIcon: "🔧", avatarColor: "#0077CC",
    description: "Conviertes planes en acciones concretas con habilidad y pragmatismo. Eres práctico, orientado a soluciones y disfrutas construyendo y mejorando sistemas y productos.",
    characteristicScores: { [PersonalityDimension.TOMA_DECISIONES]: 6, [PersonalityDimension.GESTION_EMOCIONAL]: 3, [PersonalityDimension.ADAPTABILIDAD]: 4, [PersonalityDimension.COMUNICACION]: 4, [PersonalityDimension.ESTILO_LIDERAZGO]: 5, [PersonalityDimension.RESOLUCION_PROBLEMAS]: 7, [PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD]: 2 },
    resultChartScores: [ { name: "Autoliderazgo", value: 80 }, { name: "Comunicación", value: 60 }, { name: "Adaptabilidad", value: 65 }, { name: "Toma de Decisiones", value: 85 }, { name: "Trabajo en Equipo", value: 70 } ],
    recommendations: ["Enfócate en la ejecución y la calidad.", "Aprende de cada proyecto para mejorar tus tácticas.", "Colabora con perfiles visionarios para ampliar tus horizontes."]
  },
  {
    id: "comandante-del-campo", name: "Comandante del Campo", worldId: WorldId.EJECUTORES, avatarIcon: "🎯", avatarColor: "#D6336C",
    description: "Diriges con decisión y eficacia en entornos desafiantes. Eres resuelto, estratégico en la acción y capaz de tomar el mando para lograr objetivos cruciales.",
    characteristicScores: { [PersonalityDimension.TOMA_DECISIONES]: 7, [PersonalityDimension.GESTION_EMOCIONAL]: 5, [PersonalityDimension.ADAPTABILIDAD]: 5, [PersonalityDimension.COMUNICACION]: 6, [PersonalityDimension.ESTILO_LIDERAZGO]: 7, [PersonalityDimension.RESOLUCION_PROBLEMAS]: 5, [PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD]: 3 },
    resultChartScores: [ { name: "Autoliderazgo", value: 90 }, { name: "Comunicación", value: 75 }, { name: "Adaptabilidad", value: 70 }, { name: "Toma de Decisiones", value: 95 }, { name: "Trabajo en Equipo", value: 80 } ],
    recommendations: ["Confía en tu capacidad para liderar en la adversidad.", "Fomenta la cohesión y la moral del equipo.", "Analiza los resultados para refinar tus estrategias de mando."]
  },
  {
    id: "corredor-de-rutas", name: "Corredor de Rutas", worldId: WorldId.EJECUTORES, avatarIcon: "🏃‍♂️", avatarColor: "#FF922B",
    description: "Abres caminos y superas obstáculos con agilidad y persistencia. Eres enérgico, orientado a la meta y no te detienes hasta alcanzar el destino trazado.",
    characteristicScores: { [PersonalityDimension.TOMA_DECISIONES]: 5, [PersonalityDimension.GESTION_EMOCIONAL]: 4, [PersonalityDimension.ADAPTABILIDAD]: 7, [PersonalityDimension.COMUNICACION]: 5, [PersonalityDimension.ESTILO_LIDERAZGO]: 4, [PersonalityDimension.RESOLUCION_PROBLEMAS]: 4, [PersonalityDimension.ESTRUCTURA_FLEXIBILIDAD]: 5 },
    resultChartScores: [ { name: "Autoliderazgo", value: 85 }, { name: "Comunicación", value: 70 }, { name: "Adaptabilidad", value: 90 }, { name: "Toma de Decisiones", value: 75 }, { name: "Trabajo en Equipo", value: 65 } ],
    recommendations: ["Mantén tu enfoque en la meta final.", "Celebra los pequeños hitos en el camino.", "Aprende a ajustar tu ruta cuando sea necesario sin perder el objetivo."]
  }
];

export const LIKERT_SCALE_OPTIONS = [
  { value: 1, label: "Totalmente en desacuerdo" },
  { value: 2, label: "En desacuerdo" },
  { value: 3, label: "Ligeramente en desacuerdo" },
  { value: 4, label: "Neutral" },
  { value: 5, label: "Ligeramente de acuerdo" },
  { value: 6, label: "De acuerdo" },
  { value: 7, label: "Totalmente de acuerdo" },
];

export const RESULT_DESCRIPTIONS = {
  autoliderazgo: "Capacidad para dirigirse y gestionarse a uno mismo de forma efectiva.",
  comunicacion: "Habilidad para expresar ideas y escuchar activamente a los demás.",
  adaptabilidad: "Facilidad para ajustarse a nuevas situaciones y cambios.",
  tomaDeDecisiones: "Proceso de elegir entre diferentes opciones para alcanzar un objetivo.",
  trabajoEnEquipo: "Habilidad para colaborar y coordinarse con otros hacia metas comunes."
};

export const CTA_TEXT = "Agendar sesión de coaching personalizada para tu tipo de personalidad";
