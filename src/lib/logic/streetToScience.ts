export interface ScienceMapping {
  term: string;
  chemicalReality: string;
  primaryRisks: string[];
  warningLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  description: string;
  pidginSummary: string;
}

export const STREET_TO_SCIENCE_MAP: Record<string, ScienceMapping> = {
  "Loud": {
    term: "Loud",
    chemicalReality: "A market term often used for aromatic, THC-rich plant cannabis",
    primaryRisks: ["Strong psychoactive effect", "Euphoria", "Sensory intensity"],
    warningLevel: "MEDIUM",
    description: "Often refers to strongly aromatic flower perceived as potent. The name does not specify genetics, cultivation method or laboratory composition; people commonly seek its pronounced psychoactive and sensory experience.",
    pidginSummary: "Na name people dey use for weed wey loud for nose and fit get strong psychoactive effect. The exact chemistry depend on the batch."
  },
  "Colorado": {
    term: "Colorado",
    chemicalReality: "An unverified Nigerian street label that may refer to different products",
    primaryRisks: ["Seizures", "Strokes", "Acute Psychosis", "Organ Failure", "Death"],
    warningLevel: "CRITICAL",
    description: "Some products sold under this name have been reported as plant material treated with synthetic cannabinoid receptor agonists or other unknown compounds. The label alone cannot identify chemistry, but severe symptoms should be treated as a medical emergency.",
    pidginSummary: "Colos name no be lab test. Some batch fit carry synthetic chemicals or other unknown things. If seizure, collapse, chest pain or serious confusion happen, find urgent help."
  },
  "Colos": {
    term: "Colos",
    chemicalReality: "A shortened form of the unverified street label “Colorado”",
    primaryRisks: ["Seizures", "Strokes", "Acute Psychosis", "Death"],
    warningLevel: "CRITICAL",
    description: "The name is commonly linked with unknown or treated plant material, but it does not identify one chemical. Product uncertainty and the person’s symptoms matter more than the nickname.",
    pidginSummary: "Na short name for Colorado. The name alone no tell the chemical inside; serious symptoms need urgent help."
  },
  "California Loud": {
    term: "California Loud",
    chemicalReality: "An unverified market label that may be used for unknown mixtures",
    primaryRisks: ["Collapse", "Seizures", "Severe agitation", "Chest pain"],
    warningLevel: "CRITICAL",
    description: "The name can be marketing rather than provenance. Without testing, it cannot establish whether the material is plant cannabis, treated material or another mixture.",
    pidginSummary: "Fine foreign name no prove wetin dey inside. If the product unknown and serious symptom start, treat am as emergency."
  },
  "SK": {
    term: "SK",
    chemicalReality: "Aromatic plant cannabis commonly described as Skunk",
    primaryRisks: ["Deep relaxation", "Strong aroma", "Psychoactive body effect"],
    warningLevel: "LOW",
    description: "Usually refers to pungent plant-cannabis lineages or products. People often report a strong, relaxing experience, but the street label does not provide a measured cannabinoid or terpene profile.",
    pidginSummary: "Na weed wey get strong smell and many people dey describe am as relaxing. The exact profile still depend on the product."
  },
  "Arizona": {
    term: "Arizona",
    chemicalReality: "Mid-Grade Hybrid Cannabis",
    primaryRisks: ["Dry Mouth", "Red Eyes", "Increased Appetite"],
    warningLevel: "LOW",
    description: "Generally refers to standard grade cannabis hybrids. Lower potency than 'Loud' but is still the natural botanical plant.",
    pidginSummary: "Standard weed, e no get power reach Loud but e still be the real plant."
  }
};

export function translateStreetTerm(term: string): ScienceMapping | undefined {
  const normalizedTerm = term.trim().charAt(0).toUpperCase() + term.trim().slice(1).toLowerCase();
  return STREET_TO_SCIENCE_MAP[normalizedTerm] || Object.values(STREET_TO_SCIENCE_MAP).find(m => m.term.toLowerCase() === term.toLowerCase());
}
