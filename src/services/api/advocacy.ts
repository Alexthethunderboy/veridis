// NewsAPI & Curated Legal Intelligence

const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  source: string;
  publishedAt: string;
}

export interface LegalMilestone {
  country: string;
  status: string;
  date: string;
  impact: 'positive' | 'neutral' | 'caution';
}

interface NewsApiResponseArticle {
  title: string;
  description: string;
  url: string;
  source: { name: string };
  publishedAt: string;
}

export async function fetchNigerianAdvocacyNews(): Promise<NewsArticle[]> {
  try {
    // Refined query for higher relevance
    const query = encodeURIComponent('(cannabis OR hemp) AND (Nigeria OR "West Africa") AND (legalization OR policy OR NDLEA)');
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=relevancy&language=en&apiKey=${NEWS_API_KEY}`);
    const data = await response.json();
    
    if (data.status === 'error') throw new Error(data.message);

    return data.articles?.slice(0, 6).map((a: NewsApiResponseArticle) => ({
      title: a.title,
      description: a.description,
      url: a.url,
      source: a.source.name,
      publishedAt: a.publishedAt
    })) || [];
  } catch (error) {
    console.error("Error fetching advocacy news:", error);
    return [];
  }
}

// Curated Global Legal Intelligence (Alternative to GDELT)
export async function getGlobalLegalMilestones(): Promise<LegalMilestone[]> {
  // In a real app, this might fetch from a CMS or a specialized legal tracker API.
  // Using a robust curated dataset for reliability.
  return [
    { country: 'Germany', status: 'Adult Use Legalization Implementation', date: '2024-04-01', impact: 'positive' },
    { country: 'Nigeria', status: 'Alternative Development Pilot (Ondo State)', date: '2024-01-15', impact: 'positive' },
    { country: 'South Africa', status: 'Cannabis for Private Purposes Bill Signed', date: '2024-05-28', impact: 'positive' },
    { country: 'Thailand', status: 'Policy Re-evaluation for Medical Strictness', date: '2024-06-10', impact: 'caution' },
    { country: 'USA', status: 'HHS Recommends Rescheduling to Schedule III', date: '2024-05-16', impact: 'positive' },
    { country: 'Ghana', status: 'Industrial Hemp Licensing Framework Finalized', date: '2024-01-10', impact: 'positive' },
  ];
}
