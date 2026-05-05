const OPENFDA_BASE_URL = 'https://api.fda.gov/drug/label.json';

export interface InteractionResult {
  drugName: string;
  interactions: string;
  warnings: string;
}

export async function checkDrugInteractions(medication: string): Promise<InteractionResult | null> {
  try {
    // Search for the medication label to find interaction sections
    const response = await fetch(`${OPENFDA_BASE_URL}?search=openfda.brand_name:"${encodeURIComponent(medication)}"&limit=1`);
    const data = await response.json();

    if (!data.results || data.results.length === 0) return null;

    const result = data.results[0];
    return {
      drugName: medication,
      interactions: result.drug_interactions?.[0] || "No specific interaction data found in labels.",
      warnings: result.warnings?.[0] || "No specific warnings found."
    };
  } catch (error) {
    console.error("Error fetching OpenFDA data:", error);
    return null;
  }
}

// Logic to cross-reference with Cannabis (General warning)
export function getCannabisInteractionWarning(medication: string) {
  const generalWarnings = [
    "Cannabis may increase the effects of medications that cause sleepiness (CNS depressants).",
    "It can potentially interact with blood thinners (Warfarin) or anti-malarials commonly used in Nigeria.",
    "Always consult a medical professional before combining botanical treatments with pharmaceutical prescriptions."
  ];
  return generalWarnings;
}
