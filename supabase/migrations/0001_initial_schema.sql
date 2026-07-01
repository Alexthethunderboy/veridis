-- Strain Registry Schema

CREATE TABLE IF NOT EXISTS public.strains (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  type TEXT NOT NULL CHECK (type IN ('Sativa', 'Indica', 'Hybrid')),
  dominant TEXT NOT NULL,
  thc TEXT NOT NULL,
  secondary TEXT NOT NULL,
  effects TEXT[] DEFAULT '{}',
  medical TEXT[] DEFAULT '{}',
  origin TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Note: We store terpenes, flavors, and cannabinoids as JSONB or separate relational tables
-- depending on future scale. For now, we store them as JSONB in the strains table for rapid iteration.

ALTER TABLE public.strains ADD COLUMN terpenes JSONB DEFAULT '[]'::jsonb;
ALTER TABLE public.strains ADD COLUMN aromatics TEXT[] DEFAULT '{}';
ALTER TABLE public.strains ADD COLUMN flavors TEXT[] DEFAULT '{}';
ALTER TABLE public.strains ADD COLUMN flavonoids JSONB DEFAULT '[]'::jsonb;
ALTER TABLE public.strains ADD COLUMN detailed_cannabinoids JSONB DEFAULT '[]'::jsonb;

-- Enable Row Level Security (RLS)
ALTER TABLE public.strains ENABLE ROW LEVEL SECURITY;

-- Allow public read access to strains
CREATE POLICY "Allow public read access on strains"
  ON public.strains FOR SELECT USING (true);

-- Allow authenticated users with admin role to insert/update (scaffolded)
-- CREATE POLICY "Allow admin write access" ...
