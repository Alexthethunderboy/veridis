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
    chemicalReality: "High-Potency Cannabis Sativa/Hybrid",
    primaryRisks: ["Anxiety", "Paranoia", "Increased Heart Rate"],
    warningLevel: "MEDIUM",
    description: "Typically refers to high-THC imported or locally grown hydroponic cannabis. While natural, its extreme potency can trigger latent psychological issues.",
    pidginSummary: "Na strong weed wey get plenty THC. E fit make your heart beat fast or make you fear unnecessarily if you no careful."
  },
  "Colorado": {
    term: "Colorado",
    chemicalReality: "Synthetic Cannabinoids (AB-FUBINACA, JWH-018) sprayed on inert plant matter.",
    primaryRisks: ["Seizures", "Strokes", "Acute Psychosis", "Organ Failure", "Death"],
    warningLevel: "CRITICAL",
    description: "Colorado is NOT cannabis. It is a dangerous cocktail of lab-made chemicals with up to 100x the binding affinity of THC, leading to fatal receptor 'overdrive'.",
    pidginSummary: "Colorado no be weed at all! Na pure chemical poison wey dem cook for lab. E fit kill person, cause seizure, or damage brain. Avoid am totally!"
  },
  "Colos": {
    term: "Colos",
    chemicalReality: "Synthetic Cannabinoids (See 'Colorado')",
    primaryRisks: ["Seizures", "Strokes", "Acute Psychosis", "Death"],
    warningLevel: "CRITICAL",
    description: "Shortened street name for Colorado. Carries extreme neurotoxic risks as it is a synthetic chemical, not a plant resin.",
    pidginSummary: "Na the same thing as Colorado. Chemical poison, no go near am."
  },
  "California Loud": {
    term: "California Loud",
    chemicalReality: "Ultra-Potent Synthetic Cannabinoid Variants",
    primaryRisks: ["Brain Lesions", "Severe Skin Damage", "Organ Failure", "Cardiac Arrest"],
    warningLevel: "CRITICAL",
    description: "A newer, even more toxic marketing name for synthetic mixes. Often contains industrial chemicals that cause irreversible neurological and physical damage.",
    pidginSummary: "This one worse pass Colorado. Dem dey use fine name deir deceive people, but na pure acid and chemical wey go destroy your skin and brain."
  },
  "SK": {
    term: "SK",
    chemicalReality: "Skunk (High-THC Cannabis Indica/Hybrid)",
    primaryRisks: ["Sedation", "Cognitive Impairment", "Short-term Memory Loss"],
    warningLevel: "LOW",
    description: "Refers to high-potency cannabis strains. While natural plant material, its high THC content requires cautious medicinal use.",
    pidginSummary: "Na strong weed wey get heavy smell. E dey make person weak and sleep well-well."
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
