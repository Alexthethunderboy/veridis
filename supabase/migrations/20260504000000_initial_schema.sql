-- Create strains table
CREATE TABLE IF NOT EXISTS strains (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    type TEXT CHECK (type IN ('Sativa', 'Indica', 'Hybrid')),
    thc_range TEXT,
    cbd_range TEXT,
    cbg_range TEXT,
    terpenes TEXT[],
    origin TEXT,
    description TEXT,
    medicinal_benefits TEXT[],
    entourage_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create extracts table
CREATE TABLE IF NOT EXISTS extracts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    process TEXT,
    bioavailability_rating INTEGER CHECK (bioavailability_rating >= 1 AND bioavailability_rating <= 100),
    description TEXT,
    preparation_guide TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create legal_tracking table
CREATE TABLE IF NOT EXISTS legal_tracking (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    region TEXT NOT NULL,
    status TEXT,
    summary TEXT,
    last_updated TIMESTAMPTZ DEFAULT NOW(),
    source_url TEXT
);

-- Seed strains with Nigerian Landraces
INSERT INTO strains (name, type, thc_range, cbg_range, origin, description, medicinal_benefits)
VALUES 
('Nigerian Silk', 'Sativa', '12-18%', '0.5-1.5%', 'Nigeria (West Africa)', 'Known for its glossy resin sheen and sandalwood aroma. Prized for a motivating, clear-headed high.', ARRAY['Mood enhancement', 'Focus', 'Anti-inflammatory']),
('Lagos Gold', 'Sativa', '10-15%', '0.8-1.3%', 'Lagos, Nigeria', 'Legendary West African Sativa with a yellowish-gold sheen when cured.', ARRAY['Energy', 'Creativity', 'Appetite suppression']),
('Nigerian Purple', 'Sativa', '8-14%', '1.0-1.6%', 'Nigerian Highlands (1400-2300m)', 'Rare phenotype with vibrant purple hues and aromas of lemongrass and menthol.', ARRAY['Pain relief', 'Stress reduction', 'Anti-nausea']);
