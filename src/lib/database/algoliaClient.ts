import { algoliasearch } from 'algoliasearch'

// Initialize the Algolia client
export const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || 'placeholder_app_id',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || 'placeholder_search_key'
)
