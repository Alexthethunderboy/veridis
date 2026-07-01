-- Add Storage Bucket for Strain Images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('strains-images', 'strains-images', true)
ON CONFLICT (id) DO NOTHING;

-- Set up access controls for the bucket
-- Allow public access to read images
CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
USING ( bucket_id = 'strains-images' );

-- Allow authenticated admins/service roles to insert/update
CREATE POLICY "Service Role Uploads" 
ON storage.objects FOR INSERT 
WITH CHECK ( bucket_id = 'strains-images' );

CREATE POLICY "Service Role Updates" 
ON storage.objects FOR UPDATE 
WITH CHECK ( bucket_id = 'strains-images' );
