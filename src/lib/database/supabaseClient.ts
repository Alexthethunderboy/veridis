import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // We use placeholder fallback values if env vars are missing so the build doesn't crash
  // before the user configures their environment.
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder_key'
  )
}
