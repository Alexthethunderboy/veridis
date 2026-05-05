// Localization service for Global English -> Naija English / Pidgin
// This service uses a custom glossary to ensure botanical terms are translated culturally.

const PIDGIN_GLOSSARY: Record<string, string> = {
  "cannabis": "weed",
  "inflammation": "fire",
  "bioavailability": "how the body dey take the medicine",
  "seizure": "shaking for body",
  "neurotoxic": "something wey bad for brain",
  "decarboxylation": "baking the weed to wake am up",
  "tincture": "medicine oil",
  "terpene": "the smell wey get medicine power"
};

export function translateToPidgin(text: string): string {
  let pidginText = text.toLowerCase();
  
  // Replace based on glossary
  Object.keys(PIDGIN_GLOSSARY).forEach(key => {
    const regex = new RegExp(`\\b${key}\\b`, 'g');
    pidginText = pidginText.replace(regex, PIDGIN_GLOSSARY[key]);
  });
  
  // Basic grammar adjustments for "Naija" tone
  pidginText = pidginText
    .replace(/\bis\b/g, "na")
    .replace(/\bare\b/g, "be")
    .replace(/\bthe\b/g, "the")
    .replace(/\band\b/g, "and")
    .replace(/\bfor\b/g, "for");

  return pidginText;
}

// In a real scenario, this would call the Google Translate API with a custom model/glossary
export async function getGoogleTranslation(text: string, targetLocale: 'en' | 'pcm') {
  if (targetLocale === 'pcm') {
    return translateToPidgin(text);
  }
  return text;
}
