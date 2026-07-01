import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const BUCKET_NAME = 'strains-images';

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('Missing Supabase credentials in .env');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// Helper for deterministic random data
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function generateMockStrainData(strainName: string) {
  const hash = strainName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const types = ['Sativa', 'Indica', 'Hybrid'];
  const type = types[hash % 3];
  const thc = (15 + (hash % 15)).toFixed(1);
  const terpenes = [
    { name: 'Myrcene', color: '#ff6347' },
    { name: 'Limonene', color: '#ffd700' },
    { name: 'Pinene', color: '#2e8b57' },
    { name: 'Linalool', color: '#9370db' },
    { name: 'Caryophyllene', color: '#8b4513' }
  ];
  
  const selectedTerpenes = [
    terpenes[hash % terpenes.length],
    terpenes[(hash + 3) % terpenes.length]
  ];

  return {
    name: strainName,
    type,
    dominant: 'THC',
    thc: `${thc}%`,
    secondary: '0.1% CBD',
    effects: ['Relaxed', 'Happy', 'Euphoric'],
    medical: ['Stress', 'Pain'],
    origin: 'Global Repository',
    description: `A newly added ${type} variety integrated from the global archives.`,
    terpenes: selectedTerpenes,
    aromatics: ['Earthy', 'Pine'],
    flavors: ['Sweet', 'Woody'],
    flavonoids: [],
    detailed_cannabinoids: [
      { name: 'THC', value: `${thc}%` },
      { name: 'CBD', value: '0.1%' }
    ],
  };
}

async function uploadImage(filePath: string, strainId: string): Promise<string | null> {
  try {
    // Read and compress image
    const imageBuffer = await sharp(filePath)
      .resize(800, null, { withoutEnlargement: true }) // Max width 800px, auto height
      .webp({ quality: 80 })
      .toBuffer();

    const fileName = `${strainId}.webp`;
    
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, imageBuffer, {
        contentType: 'image/webp',
        upsert: true
      });

    if (error) throw error;

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName);

    return publicUrl;
  } catch (err) {
    console.error(`  [X] Failed to upload image for ${strainId}:`, err);
    return null;
  }
}

async function ingest() {
  const targetDir = process.argv[2];
  
  if (!targetDir || !fs.existsSync(targetDir)) {
    console.error('Please provide a valid path to the extracted images directory.');
    console.error('Usage: npx tsx scripts/ingestMegaRepo.ts /path/to/images');
    process.exit(1);
  }

  console.log(`Starting ingestion from: ${targetDir}`);
  const items = fs.readdirSync(targetDir);

  for (const item of items) {
    const itemPath = path.join(targetDir, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      // Name parsing: 'Lemon-OG-Haze' -> 'Lemon OG Haze'
      const strainName = item.replace(/-/g, ' ');
      console.log(`\nProcessing: ${strainName}`);

      // Check if exists
      const { data: existing } = await supabase
        .from('strains')
        .select('id, image_url')
        .ilike('name', strainName)
        .single();

      let strainId = existing?.id;

      // Create if missing
      if (!existing) {
        console.log(`  [+] Strain not found in DB. Generating new entry...`);
        const mockData = generateMockStrainData(strainName);
        const { data: newStrain, error: insertError } = await supabase
          .from('strains')
          .insert(mockData)
          .select('id')
          .single();

        if (insertError) {
          console.error(`  [X] Failed to insert ${strainName}:`, insertError);
          continue;
        }
        strainId = newStrain.id;
      } else {
        if (existing.image_url) {
          console.log(`  [-] Image already exists. Skipping.`);
          continue;
        }
      }

      // Find first image in the folder
      const files = fs.readdirSync(itemPath);
      const imageFile = files.find(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

      if (imageFile) {
        console.log(`  [*] Compressing and uploading ${imageFile}...`);
        const publicUrl = await uploadImage(path.join(itemPath, imageFile), strainId);
        
        if (publicUrl) {
          await supabase
            .from('strains')
            .update({ image_url: publicUrl })
            .eq('id', strainId);
          console.log(`  [✓] Successfully linked image.`);
        }
      } else {
        console.log(`  [!] No valid image files found in folder.`);
      }
    }
  }

  console.log('\nIngestion Complete!');
}

ingest().catch(console.error);
