
export enum PersonalityDimension {
  TOMA_DECISIONES = "Toma de Decisiones",
  GESTION_EMOCIONAL = "Gestión Emocional",
  ADAPTABILIDAD = "Adaptabilidad",
  COMUNICACION = "Comunicación",
  ESTILO_LIDERAZGO = "Estilo de Liderazgo",
  RESOLUCION_PROBLEMAS = "Resolución de Problemas",
  ESTRUCTURA_FLEXIBILIDAD = "Preferencia por Estructura vs Flexibilidad",
}

export interface Question {
  id: string;
  text: string;
  dimension: PersonalityDimension;
  // true if "Strongly Agree (7)" means high score in dimension, false if "Strongly Agree (7)" means low score (i.e. agree with statement means low on dimension).
  isPositivePolarity: boolean; 
}

export interface Answers {
  [questionId: string]: number; // value 1-7
}

export enum WorldId {
  VISIONARIOS = "visionarios",
  GUARDIANES = "guardianes",
  SENSIBLES = "sensibles",
  EJECUTORES = "ejecutores",
}

export interface World {
  id: WorldId;
  name: string;
  backgroundColor: string;
  textColor: string; // For better contrast if needed on world background
}

export interface ResultChartScore {
  name: string; // Autoliderazgo, Comunicación, etc.
  value: number; // 0-100
}

export interface PersonalityProfile {
  id: string;
  name: string;
  worldId: WorldId;
  avatarIcon: string; // Emoji
  avatarColor: string; // Vibrant color for avatar icon itself or its small bg
  description: string;
  recommendations: string[];
  // Ideal scores (1-7) for each of the 7 PersonalityDimensions used for matching
  characteristicScores: { [key in PersonalityDimension]: number };
  // Scores (0-100) for the 5 result chart dimensions
  resultChartScores: ResultChartScore[];
}

export interface UserResult {
  profile: PersonalityProfile;
  userDimensionScores: { [key in PersonalityDimension]: number }; // User's calculated scores (1-7)
}
