import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { STRAIN_CATALOGUE } from '@/lib/data/cannabisData';

// Use service role key for backend seeding to bypass RLS if needed
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export async function POST() {
  if (!supabaseUrl || !supabaseServiceKey) {
    return NextResponse.json({ error: 'Supabase credentials not configured.' }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    const { data, error } = await supabase
      .from('strains')
      .upsert(
        STRAIN_CATALOGUE.map(strain => ({
          ...strain,
          // Convert array of objects to JSON-friendly format for Supabase insertion if necessary
          // Upsert uses the id or unique constraints to update existing rows
        })),
        { onConflict: 'name' }
      );

    if (error) throw error;

    return NextResponse.json({ message: 'Seed successful', count: STRAIN_CATALOGUE.length, data });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error('Seed error:', errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
