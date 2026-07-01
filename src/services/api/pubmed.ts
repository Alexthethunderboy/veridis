const PUBMED_BASE_URL = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';

export interface PubMedArticle {
  id: string;
  title: string;
  abstract: string;
  authors: string[];
  date: string;
  url: string;
}

export async function fetchPubMedData(query: string, maxResults: number = 5): Promise<PubMedArticle[]> {
  try {
    // 1. Search for IDs
    const searchRes = await fetch(`${PUBMED_BASE_URL}/esearch.fcgi?db=pubmed&term=${encodeURIComponent(query)}&retmode=json&retmax=${maxResults}`);
    const searchData = await searchRes.json();
    const ids = searchData.esearchresult?.idlist || [];

    if (ids.length === 0) return [];

    // 2. Fetch details for those IDs
    const summaryRes = await fetch(`${PUBMED_BASE_URL}/esummary.fcgi?db=pubmed&id=${ids.join(',')}&retmode=json`);
    const summaryData = await summaryRes.json();
    
    return ids.map((id: string) => {
      const result = summaryData.result[id];
      return {
        id,
        title: result.title,
        abstract: "Abstract available at NCBI PubMed", // E-summary doesn't give full abstract, E-fetch is needed for that but complex to parse (XML)
        authors: result.authors.map((a: { name: string }) => a.name),
        date: result.pubdate,
        url: `https://pubmed.ncbi.nlm.nih.gov/${id}/`
      };
    });
  } catch (error) {
    console.error("Error fetching PubMed data:", error);
    return [];
  }
}

// Specialized fetcher for Sickle Cell + Cannabinoids
export async function fetchSCDResearch() {
  return fetchPubMedData('cannabinoids sickle cell disease 2026 CRISP');
}
