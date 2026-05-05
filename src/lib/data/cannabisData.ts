export const EDUCATIONAL_CONTENT = {
  basics: [
    {
      title: "Indica vs Sativa",
      content: "Cannabis genetics are broadly divided into two primary lineages based on climate: Sativa and Indica. Sativas thrive in tropical climates like West Africa, growing tall with wispier flowers. Indicas evolved in cooler, mountainous regions, developing shorter, bushier structures.",
      pidgin: "Sativa na for heat, Indica na for cold. Our Naija own na pure Sativa—e dey grow tall and give head high.",
    },
    {
      title: "Cannabinoids 101",
      content: "Cannabinoids are the chemical compounds in cannabis. While THC is the most famous, others like CBD, THCV, and CBG play vital medicinal roles.",
      pidgin: "No be only THC dey inside weed. CBD, THCV, and CBG all get work dem dey do for body.",
    }
  ],
  science: [
    {
      title: "The Endocannabinoid System",
      content: "The ECS is a complex cell-signaling system in the human body that regulates sleep, mood, appetite, and memory. Cannabinoids interact with ECS receptors (CB1 and CB2) to maintain balance.",
    },
    {
      title: "Terpenes: The Aroma Medicine",
      content: "Terpenes are aromatic oils that color cannabis varieties with distinctive flavors like citrus, berry, mint, and pine. In Nigeria, Sandalwood and Lemongrass notes are common in landraces.",
    }
  ],
  methods: [
    {
      title: "Decarboxylation",
      content: "To activate the medicinal properties of cannabis for edibles or oils, it must be heated. Bake at 240°F (115°C) for 40 minutes.",
      pidgin: "You gats bake am first to 'wake up' the medicine before you use am cook.",
    },
    {
      title: "Solventless Extraction",
      content: "Rosin is made using only heat and pressure, avoiding toxic chemicals like butane or petrol often found in street oils.",
    }
  ],
  danger: [
    {
      title: "The 'Colorado' Crisis",
      content: "Colorado is NOT cannabis. It is a synthetic chemical sprayed on dried leaves. It is extremely dangerous and can cause seizures or organ failure.",
      pidgin: "Colos na poison, no be weed. Dem cook am for lab with chemicals wey fit kill person.",
    }
  ],
  growing: [
    {
      title: "The Growing Guide",
      content: "Nigerian Sativas thrive in high humidity and intense sun. For indoor grows, maintain a pH of 6.0-6.5 and ensure high vertical clearance, as these plants can triple in size during the flowering phase.",
      pidgin: "If you wan plant our local igbo, give am space to reach sky. E like sun well-well, and make you check the water pH make e no too sour.",
    },
    {
      title: "Harvesting & Curing",
      content: "Harvest when 70% of the pistils have turned amber. Curing should take 2-4 weeks in a cool, dark environment to preserve the 'Electric' THCV potency.",
    }
  ],
  medical_science: [
    {
      title: "Sickle Cell Pain Protocol",
      content: "The CRISP Study identifies CBG and CBD as critical inhibitors of heme-mediated inflammation. A 1:1 ratio of CBD:CBG is recommended for managing vaso-occlusive crisis pain.",
    }
  ],

};

export const CANNABINOIDS = {
  thc: {
    name: 'THC',
    fullName: 'Tetrahydrocannabinol',
    formula: 'C21H30O2',
    color: '#d90429',
    role: 'Primary Psychoactive',
    description: 'The most well-known cannabinoid, responsible for the intoxicating effects and a wide range of therapeutic benefits including pain relief and appetite stimulation.',
    effects: ['Euphoric', 'Pain Relief', 'Appetite Boost']
  },
  cbd: {
    name: 'CBD',
    fullName: 'Cannabidiol',
    formula: 'C21H30O2',
    color: '#2b9348',
    role: 'Non-Psychoactive Healing',
    description: 'A non-intoxicating compound widely recognized for its anti-anxiety, anti-seizure, and anti-inflammatory properties.',
    effects: ['Calming', 'Clear-headed', 'Anti-inflammatory']
  },
  cbg: {
    name: 'CBG',
    fullName: 'Cannabigerol',
    formula: 'C21H32O2',
    color: '#f9c74f',
    role: 'The Mother Cannabinoid',
    description: 'The chemical precursor to THC and CBD. It shows significant potential in treating glaucoma and inflammatory bowel disease.',
    effects: ['Focus', 'Alertness', 'Gut Health']
  },
  thcv: {
    name: 'THCV',
    fullName: 'Tetrahydrocannabivarin',
    formula: 'C19H26O2',
    color: '#48cae4',
    role: 'The Sports Car of Cannabinoids',
    description: 'A minor cannabinoid that provides a high-energy, functional experience. It is unique for its ability to suppress appetite.',
    effects: ['Energetic', 'Focused', 'Satiety']
  },
  cbn: {
    name: 'CBN',
    fullName: 'Cannabinol',
    formula: 'C21H26O2',
    color: '#3c096c',
    role: 'The Sleep Aid',
    description: 'Formed as THC ages, CBN is known for its potent sedative effects, making it an excellent natural sleep aid.',
    effects: ['Sedative', 'Sleepy', 'Relaxed']
  },
  cbc: {
    name: 'CBC',
    fullName: 'Cannabichromene',
    formula: 'C21H30O2',
    color: '#f15bb5',
    role: 'The Mood Elevator',
    description: 'A non-psychoactive cannabinoid that works synergistically with others to improve mood and reduce depression.',
    effects: ['Mood Lifting', 'Synergistic', 'Healing']
  }
};

export const TERPENES = {
  myrcene: { 
    name: 'Myrcene', 
    formula: 'C10H16',
    boilingPoint: '167°C',
    aroma: 'Earthy, Musky, Clovelike', 
    benefits: 'Muscle Relaxant, Sedative',
    flavors: ['Earthy', 'Cloves', 'Herbal'],
    effects: ['Sedative', 'Muscle-relaxing', 'Couch-lock'],
    color: '#3d5a80', 
    description: 'The most common terpene in modern cannabis. Known for increasing blood-brain barrier permeability, allowing cannabinoids to take effect faster.',
    foundIn: ['Mangoes', 'Hops', 'Lemongrass']
  },
  caryophyllene: { 
    name: 'Caryophyllene', 
    formula: 'C15H24',
    boilingPoint: '130°C',
    aroma: 'Peppery, Spicy, Woody', 
    benefits: 'Anti-inflammatory, Analgesic',
    flavors: ['Spicy', 'Pepper', 'Woody'],
    effects: ['Calm', 'Stress Relief', 'Physical Ease'],
    color: '#9c6644', 
    description: 'The unique "dietary cannabinoid." It is the only terpene known to bind directly to CB2 receptors to provide potent anti-inflammatory effects.',
    foundIn: ['Black Pepper', 'Cinnamon', 'Cloves']
  },
  limonene: { 
    name: 'Limonene', 
    formula: 'C10H16',
    boilingPoint: '176°C',
    aroma: 'Citrus, Lemon, Orange', 
    benefits: 'Mood Elevation, Stress Relief',
    flavors: ['Citrus', 'Lemon Zest', 'Tart'],
    effects: ['Uplifting', 'Anti-anxiety', 'Creative'],
    color: '#fee440', 
    description: 'A powerful mood elevator. Clinical potential includes anti-fungal properties and improving absorption of other topical compounds.',
    foundIn: ['Lemon Rinds', 'Peppermint', 'Rosemary']
  },
  pinene: { 
    name: 'Pinene', 
    formula: 'C10H16',
    boilingPoint: '155°C',
    aroma: 'Pine, Sharp, Woody', 
    benefits: 'Alertness, Memory Retention',
    flavors: ['Pine', 'Cedar', 'Refreshing'],
    effects: ['Focused', 'Alert', 'Bronchodilator'],
    color: '#007f5f', 
    description: 'Acts as the "memory guard." Helps counteract short-term memory loss associated with THC and acts as a natural bronchodilator.',
    foundIn: ['Pine Needles', 'Basil', 'Parsley']
  },
  terpinolene: { 
    name: 'Terpinolene', 
    formula: 'C10H16',
    boilingPoint: '185°C',
    aroma: 'Fruity, Floral, Piney', 
    benefits: 'Antioxidant, Antibacterial',
    flavors: ['Floral', 'Piney', 'Apples'],
    effects: ['Cerebral', 'Sensory', 'Balanced'],
    color: '#7209b7', 
    description: 'A complex terpene providing a "multidimensional" aroma. Found in many Sativas, it offers a soaring cerebral experience.',
    foundIn: ['Lilacs', 'Nutmeg', 'Cumin']
  },
  linalool: { 
    name: 'Linalool', 
    formula: 'C10H18O',
    boilingPoint: '198°C',
    aroma: 'Floral, Lavender, Spring', 
    benefits: 'Anxiety Relief, Anti-convulsant',
    flavors: ['Lavender', 'Floral', 'Sweet'],
    effects: ['Calming', 'Insomnia Relief', 'Anti-anxiety'],
    color: '#be95c4', 
    description: 'The "Zen Master" of terpenes. Identifiable by its soft floral scent, it is deeply calming and used for insomnia and severe anxiety.',
    foundIn: ['Lavender', 'Birch Bark', 'Coriander']
  },
  humulene: { 
    name: 'Humulene', 
    formula: 'C15H24',
    boilingPoint: '106°C',
    aroma: 'Hoppy, Woody, Earthy', 
    benefits: 'Appetite Suppressant',
    flavors: ['Hops', 'Earthy', 'Bitter'],
    effects: ['Focused', 'Less Hungry', 'Light'],
    color: '#606c38', 
    description: 'Also found in Hops, this terpene is unique for its ability to suppress appetite, unlike the typical "munchies" associated with THC.'
  },
  ocimene: { 
    name: 'Ocimene', 
    formula: 'C10H16',
    boilingPoint: '65°C',
    aroma: 'Sweet, Herbaceous, Woody', 
    benefits: 'Antiviral, Decongestant',
    flavors: ['Sweet', 'Herbal', 'Woody'],
    effects: ['Uplifting', 'Clear', 'Active'],
    color: '#55a630', 
    description: 'A sweet, delicate terpene that acts as a natural defense mechanism for plants. It offers bright, uplifting effects.'
  },
  bisabolol: {
    name: 'Bisabolol',
    formula: 'C15H26O',
    boilingPoint: '153°C',
    aroma: 'Sweet, Floral, Chamomile',
    benefits: 'Skin healing, Anti-irritant',
    flavors: ['Chamomile', 'Floral', 'Honey'],
    effects: ['Soothing', 'Calm', 'Gentle'],
    color: '#ffcad4',
    description: 'Commonly found in Chamomile, Bisabolol is prized for its gentle, soothing properties and pleasant floral scent.'
  },
  geraniol: {
    name: 'Geraniol',
    formula: 'C10H18O',
    boilingPoint: '230°C',
    aroma: 'Rose, Floral, Sweet',
    benefits: 'Neuroprotective, Antioxidant',
    flavors: ['Rose', 'Peach', 'Sweet'],
    effects: ['Relaxed', 'Mellow', 'Sensory'],
    color: '#d00000',
    description: 'Found in Roses and Geraniums, this terpene has a high boiling point and offers a rich, seductive floral aroma.'
  },
  camphene: {
    name: 'Camphene',
    formula: 'C10H16',
    boilingPoint: '159°C',
    aroma: 'Fir needles, Musky, Earthy',
    benefits: 'Cardiovascular Health',
    flavors: ['Woody', 'Musky', 'Pine'],
    effects: ['Grounded', 'Calm', 'Stable'],
    color: '#adb5bd',
    description: 'A minor terpene with a powerful musky scent, often found in strains that have a deep, "forest floor" aromatic profile.'
  },
  valencene: {
    name: 'Valencene',
    formula: 'C15H24',
    boilingPoint: '123°C',
    aroma: 'Sweet Citrus, Orange',
    benefits: 'Alertness, Anti-inflammatory',
    flavors: ['Orange', 'Tangy', 'Sweet'],
    effects: ['Bubbly', 'Happy', 'Uplifting'],
    color: '#ff9100',
    description: 'Named after Valencia oranges, this terpene provides a bright, citrusy punch and is excellent for boosting mood and focus.'
  }
};

export const FLAVONOIDS = {
  cannflavin_a_b: {
    name: 'Cannflavin A & B',
    formula: 'C21H20O6',
    role: 'Primary Anti-inflammatory',
    benefits: '30x more effective than aspirin',
    color: '#ff0054',
    description: 'Unique to cannabis, these flavonoids inhibit pro-inflammatory prostaglandins (PGE-2) without gastric side effects.',
    foundIn: ['Cannabis Sativa']
  },
  cannflavin_c: {
    name: 'Cannflavin C',
    formula: 'C21H20O7',
    role: 'Antioxidant/Antiparasitic',
    benefits: 'Cellular protection and defense',
    color: '#9e0059',
    description: 'Often found in hemp varieties, Cannflavin C shows significant potential for neutralizing free radicals.',
    foundIn: ['Cannabis Sativa', 'Hemp']
  },
  apigenin: {
    name: 'Apigenin',
    formula: 'C15H10O5',
    role: 'Anxiolytic & Sedative',
    benefits: 'Muscle relaxation and sleep aid',
    color: '#ffbd00',
    description: 'Interacts with GABA receptors to provide calming effects similar to chamomile tea.',
    foundIn: ['Chamomile', 'Parsley', 'Celery']
  },
  quercetin: {
    name: 'Quercetin',
    formula: 'C15H10O7',
    role: 'Antiviral & Cardiovascular',
    benefits: 'Neutralizes free radicals',
    color: '#f72585',
    description: 'A powerful antioxidant that supports heart health and immune system resilience.',
    foundIn: ['Kale', 'Berries', 'Green Tea']
  },
  kaempferol: {
    name: 'Kaempferol',
    formula: 'C15H10O6',
    role: 'Neuroprotective',
    benefits: 'Slows neurodegeneration',
    color: '#4cc9f0',
    description: 'A potent anti-inflammatory flavonoid that protects neurons and supports cognitive health.',
    foundIn: ['Broccoli', 'Kale', 'Spinach']
  },
  luteolin: {
    name: 'Luteolin',
    formula: 'C15H10O6',
    role: 'Brain Fog Reducer',
    benefits: 'Heart-protective & Clarity',
    color: '#4361ee',
    description: 'Known for its ability to reduce neuro-inflammation and improve mental clarity and focus.',
    foundIn: ['Peppers', 'Celery', 'Thyme']
  }
};

export const STRAIN_CATALOGUE = [
  // --- West African Landraces ---
  { 
    id: 'nigerian-silk',
    name: 'Nigerian Silk', 
    type: 'Sativa', 
    dominant: 'THC',
    thc: '18.4%', 
    secondary: '1.2% CBDV',
    terpenes: [TERPENES.pinene, TERPENES.myrcene, TERPENES.caryophyllene],
    aromatics: ['Sandalwood', 'Wet Earth', 'Pine'],
    flavors: ['Cedar', 'Musk', 'Sweet Herbal'],
    flavonoids: [FLAVONOIDS.cannflavin_a_b, FLAVONOIDS.apigenin],
    detailed_cannabinoids: [
      { name: 'THC', value: '18.4%' },
      { name: 'CBDV', value: '1.2%' },
      { name: 'THCV', value: '0.4%' },
      { name: 'CBG', value: '0.5%' }
    ],
    effects: ['Focus', 'Clarity', 'Productive'],
    medical: ['Depression', 'Chronic Fatigue', 'Inflammation'],
    origin: 'Ekiti/Ondo Border, Nigeria',
    description: 'A masterpiece of West African genetics, Silk is legendary for its motivating high and "oily" appearance that looks like wet silk under a jeweler\'s loupe.'
  },
  { 
    id: 'lagos-gold',
    name: 'Lagos Gold', 
    type: 'Sativa', 
    dominant: 'THCV',
    thc: '14.2%', 
    secondary: '2.1% THCV',
    terpenes: [TERPENES.limonene, TERPENES.terpinolene, TERPENES.ocimene],
    aromatics: ['Sweet Orange', 'Diesel', 'Tropical Fruit'],
    flavors: ['Citrus Zest', 'Fermented Pineapple'],
    flavonoids: [FLAVONOIDS.cannflavin_a_b, FLAVONOIDS.apigenin],
    detailed_cannabinoids: [
      { name: 'THC', value: '14.2%' },
      { name: 'THCV', value: '2.1%' },
      { name: 'CBD', value: '0.2%' },
      { name: 'CBN', value: '0.1%' }
    ],
    effects: ['Electric Energy', 'Social', 'Euphoric'],
    medical: ['Appetite Control', 'Diabetes Management', 'Social Anxiety'],
    origin: 'Oyo State Highlands, Nigeria',
    description: 'The "Electric Sativa." Lagos Gold provides a powerful cerebral surge and is prized by traditional herbalists for its THCV-rich appetite-suppressing properties.'
  },
  { 
    id: 'durban-poison',
    name: 'Durban Poison', 
    type: 'Sativa', 
    dominant: 'THCV',
    thc: '22.0%', 
    secondary: '1.5% THCV',
    terpenes: [TERPENES.terpinolene, TERPENES.myrcene, TERPENES.pinene],
    aromatics: ['Sweet', 'Spicy', 'Pine'],
    flavors: ['Anise', 'Sweet Citrus', 'Licorice'],
    flavonoids: [FLAVONOIDS.cannflavin_a_b, FLAVONOIDS.quercetin],
    detailed_cannabinoids: [
      { name: 'THC', value: '22.0%' },
      { name: 'THCV', value: '1.5%' },
      { name: 'CBG', value: '0.8%' }
    ],
    effects: ['Energetic', 'Creative', 'Uplifting'],
    medical: ['Fatigue', 'Stress', 'Nausea'],
    origin: 'Durban, South Africa',
    description: 'A pure Sativa landrace from the port city of Durban. Famous for its sweet smell and energetic, uplifting effects. One of the few strains with high natural THCV.'
  },
  { 
    id: 'malawi-gold',
    name: 'Malawi Gold', 
    type: 'Sativa', 
    dominant: 'THC',
    thc: '24.5%', 
    secondary: '0.9% CBG',
    terpenes: [TERPENES.myrcene, TERPENES.caryophyllene, TERPENES.limonene],
    aromatics: ['Earthy', 'Lemon', 'Resinous'],
    flavors: ['Fruit', 'Spice', 'Woody'],
    flavonoids: [FLAVONOIDS.cannflavin_c, FLAVONOIDS.kaempferol],
    detailed_cannabinoids: [
      { name: 'THC', value: '24.5%' },
      { name: 'CBG', value: '0.9%' },
      { name: 'THCV', value: '0.3%' }
    ],
    effects: ['Cerebral', 'Long-lasting', 'Psychedelic'],
    medical: ['Chronic Pain', 'Mood Disorders', 'Appetite'],
    origin: 'Malawi',
    description: 'One of the most potent African landraces. It produces large, resinous buds with a gold-ish hue and a powerful, clear-headed high.'
  },

  // --- Global Icons ---
  { 
    id: 'og-kush',
    name: 'OG Kush', 
    type: 'Hybrid', 
    dominant: 'THC',
    thc: '23.0%', 
    secondary: '0.1% CBD',
    terpenes: [TERPENES.caryophyllene, TERPENES.limonene, TERPENES.myrcene],
    aromatics: ['Fuel', 'Lemon', 'Pine'],
    flavors: ['Earth', 'Citrus', 'Diesel'],
    flavonoids: [FLAVONOIDS.cannflavin_a_b, FLAVONOIDS.apigenin],
    detailed_cannabinoids: [
      { name: 'THC', value: '23.0%' },
      { name: 'CBD', value: '0.1%' },
      { name: 'CBG', value: '1.2%' }
    ],
    effects: ['Relaxed', 'Euphoric', 'Hungry'],
    medical: ['Stress', 'Pain', 'Insomnia'],
    origin: 'Florida/California, USA',
    description: 'The backbone of many West Coast strains. OG Kush has a unique terpene profile that boasts a complex aroma with notes of fuel, skunk, and spice.'
  },
  { 
    id: 'sour-diesel',
    name: 'Sour Diesel', 
    type: 'Sativa', 
    dominant: 'THC',
    thc: '21.5%', 
    secondary: '0.2% CBN',
    terpenes: [TERPENES.caryophyllene, TERPENES.limonene, TERPENES.myrcene],
    aromatics: ['Gasoline', 'Sour', 'Skunk'],
    flavors: ['Diesel', 'Pungent', 'Citrus'],
    flavonoids: [FLAVONOIDS.cannflavin_c, FLAVONOIDS.luteolin],
    detailed_cannabinoids: [
      { name: 'THC', value: '21.5%' },
      { name: 'CBD', value: '0.1%' },
      { name: 'CBN', value: '0.2%' }
    ],
    effects: ['Dreamy', 'Cerebral', 'Energizing'],
    medical: ['Depression', 'Pain', 'Stress'],
    origin: 'New York, USA',
    description: 'Known for its pungent, diesel-like aroma. This fast-acting strain delivers energizing, dreamy cerebral effects that have pushed Sour Diesel to its legendary status.'
  },
  { 
    id: 'white-widow',
    name: 'White Widow', 
    type: 'Hybrid', 
    dominant: 'THC',
    thc: '19.0%', 
    secondary: '0.5% CBD',
    terpenes: [TERPENES.myrcene, TERPENES.caryophyllene, TERPENES.pinene],
    aromatics: ['Earthy', 'Woody', 'Spicy'],
    flavors: ['Pungent', 'Pine', 'Herbal'],
    flavonoids: [FLAVONOIDS.cannflavin_c, FLAVONOIDS.quercetin],
    detailed_cannabinoids: [
      { name: 'THC', value: '19.0%' },
      { name: 'CBD', value: '0.5%' },
      { name: 'CBG', value: '0.4%' }
    ],
    effects: ['Powerful', 'Energetic', 'Talkative'],
    medical: ['Stress', 'Anxiety', 'Pain'],
    origin: 'Netherlands',
    description: 'A global staple since the 90s. Known for its massive resin production (the "white" coating) and a balanced high that provides both energy and relaxation.'
  },
  { 
    id: 'gsc',
    name: 'Girl Scout Cookies (GSC)', 
    type: 'Hybrid', 
    dominant: 'THC',
    thc: '26.0%', 
    secondary: '0.2% CBD',
    terpenes: [TERPENES.caryophyllene, TERPENES.myrcene, TERPENES.limonene],
    aromatics: ['Sweet', 'Pungent', 'Cherry'],
    flavors: ['Mint', 'Dough', 'Sweet'],
    flavonoids: [FLAVONOIDS.cannflavin_a_b, FLAVONOIDS.kaempferol],
    detailed_cannabinoids: [
      { name: 'THC', value: '26.0%' },
      { name: 'CBD', value: '0.2%' },
      { name: 'CBG', value: '1.0%' }
    ],
    effects: ['Euphoric', 'Relaxed', 'Creative'],
    medical: ['Severe Pain', 'Nausea', 'Appetite Loss'],
    origin: 'California, USA',
    description: 'Famous for its dessert-like aroma and high THC content. GSC (formerly Girl Scout Cookies) is a multiple Cup winner that provides deep relaxation with euphoric surges.'
  },
  { 
    id: 'northern-lights',
    name: 'Northern Lights', 
    type: 'Indica', 
    dominant: 'THC',
    thc: '18.0%', 
    secondary: '0.1% CBD',
    terpenes: [TERPENES.myrcene, TERPENES.caryophyllene, TERPENES.pinene],
    aromatics: ['Spicy', 'Pine', 'Earth'],
    flavors: ['Sweet', 'Woody', 'Pine'],
    flavonoids: [FLAVONOIDS.cannflavin_a_b, FLAVONOIDS.apigenin],
    detailed_cannabinoids: [
      { name: 'THC', value: '18.0%' },
      { name: 'CBD', value: '0.1%' },
      { name: 'CBG', value: '0.6%' }
    ],
    effects: ['Sedated', 'Happy', 'Sleepy'],
    medical: ['Insomnia', 'Muscle Spasms', 'PMS'],
    origin: 'Washington/Netherlands',
    description: 'One of the most famous indica strains of all time. Northern Lights is prized for its resinous buds, fast flowering, and resilience during growth.'
  },
  { 
    id: 'amnesia-haze',
    name: 'Amnesia Haze', 
    type: 'Sativa', 
    dominant: 'THC',
    thc: '23.5%', 
    secondary: '0.8% CBG',
    terpenes: [TERPENES.limonene, TERPENES.terpinolene, TERPENES.myrcene],
    aromatics: ['Lemon', 'Citrus', 'Earthy'],
    flavors: ['Sour', 'Citrus', 'Tangy'],
    flavonoids: [FLAVONOIDS.cannflavin_a_b, FLAVONOIDS.luteolin],
    detailed_cannabinoids: [
      { name: 'THC', value: '23.5%' },
      { name: 'CBG', value: '0.8%' },
      { name: 'THCV', value: '0.4%' }
    ],
    effects: ['Giggly', 'Uplifting', 'Euphoric'],
    medical: ['Depression', 'Stress', 'Anxiety'],
    origin: 'Netherlands',
    description: 'A world-class Sativa with a bright citrus profile. It provides a heavy-hitting cerebral high that is perfect for starting your day with a smile.'
  }
];

export const DOCS_RESOURCES = {
  legal: [
    { year: '1935', title: 'Dangerous Drugs Act', summary: 'The colonial-era foundation of prohibition, categorizing hemp alongside opium.' },
    { year: '1966', title: 'Indian Hemp Decree', summary: 'Introduced extreme penalties, including the death penalty (later removed) for cultivation.' },
    { year: '1989', title: 'NDLEA Act', summary: 'Established the primary enforcement body with powers for life imprisonment for traffickers.' },
    { year: 'PILOT', title: 'Alternative Development Pilot', summary: 'A paradigm shift in Ondo State transitioning farmers from illicit markets to legal cash crops like Artemisia annua.' }
  ],
  technical: [
    { title: 'CRISP Study', summary: 'Source of truth for cannabis and Sickle Cell Disease pain protocols (Mount Sinai).' },
    { title: 'Authenticity Audit', summary: 'Verified that true Nigerian Landrace seeds maintain 70% wild genetic markers.' }
  ],
  files: [
    { name: 'Cannabis Grow Bible', type: 'PDF', size: '9.4 MB' },
    { name: 'Medical Cannabis Guidebook', type: 'PDF', size: '9.5 MB' },
    { name: 'Nigerian Cannabis Compendium', type: 'MD', size: '19 KB' }
  ]
};
