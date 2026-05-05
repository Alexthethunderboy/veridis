import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getStrains() {
  const { data, error } = await supabase
    .from('strains')
    .select('*');
  
  if (error) {
    console.error('Error fetching strains:', error);
    return [];
  }
  return data;
}
