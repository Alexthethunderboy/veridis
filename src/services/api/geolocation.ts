// Geolocation service to detect Nigeria vs. Global users
const IP_API_URL = 'http://ip-api.com/json/';

export interface GeoData {
  country: string;
  countryCode: string;
  region: string;
  city: string;
}

export async function detectLocation(): Promise<GeoData | null> {
  try {
    const res = await fetch(IP_API_URL);
    const data = await res.json();
    
    if (data.status === 'success') {
      return {
        country: data.country,
        countryCode: data.countryCode,
        region: data.regionName,
        city: data.city
      };
    }
    return null;
  } catch (error) {
    console.error("Geolocation detection failed:", error);
    return null;
  }
}

export function isUserInNigeria(geo: GeoData | null): boolean {
  return geo?.countryCode === 'NG';
}
