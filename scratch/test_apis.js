
const OTREEBA_BASE_URL = 'https://www.cannabisreports.com/api/v1.0';
const NEWS_API_KEY = '05b99d1668ee45ea92519e1a98c3adfe'; // From .env

async function testAPIs() {
  console.log("Testing Otreeba API...");
  try {
    const res = await fetch(`${OTREEBA_BASE_URL}/strains/search/Haze`);
    console.log("Otreeba status:", res.status);
    const data = await res.json();
    console.log("Otreeba data sample:", data.data?.slice(0, 1));
  } catch (e) {
    console.error("Otreeba failed:", e.message);
  }

  console.log("\nTesting NewsAPI...");
  try {
    const query = encodeURIComponent('NDLEA cannabis Nigeria OR legalization cannabis Nigeria');
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`);
    console.log("NewsAPI status:", response.status);
    const data = await response.json();
    console.log("NewsAPI total results:", data.totalResults);
  } catch (e) {
    console.error("NewsAPI failed:", e.message);
  }

  console.log("\nTesting GDELT API...");
  try {
    const query = 'cannabis OR marijuana OR "medical marijuana" legalization';
    const res = await fetch(`https://api.gdeltproject.org/api/v2/summary/summary?query=${encodeURIComponent(query)}&mode=artlist&format=json`);
    console.log("GDELT status:", res.status);
    const data = await res.json();
    console.log("GDELT articles count:", data.articles?.length);
  } catch (e) {
    console.error("GDELT failed:", e.message);
  }
}

testAPIs();
