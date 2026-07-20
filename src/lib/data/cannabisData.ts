export const EDUCATIONAL_CONTENT = {
  basics: [
    {
      title: "Indica vs Sativa",
      content: "Indica and sativa can describe parts of cannabis history, morphology and culture, but modern commercial labels do not reliably predict chemistry or experience. Measured cannabinoids, aromatic compounds, dose, route and personal response tell a fuller story.",
      pidgin: "Indica and sativa fit describe plant history and shape, but name alone no fit tell you the full chemistry or how e go feel for you.",
    },
    {
      title: "Cannabinoids 101",
      content: "Cannabinoids are one major family of cannabis compounds. THC, CBD, CBG, CBC, THCV and others have distinct, dose-dependent pharmacology and can also interact with one another and the wider plant profile.",
      pidgin: "No be only THC dey inside weed. CBD, CBG, CBC, THCV and other compounds get different work, and dem fit interact together.",
    }
  ],
  science: [
    {
      title: "The Endocannabinoid System",
      content: "The ECS is a widespread signalling network involving endocannabinoids, receptors and enzymes. It helps regulate pain signalling, stress, sleep, appetite, memory, immune activity and energy balance; plant cannabinoids can modulate this network in compound- and context-specific ways.",
    },
    {
      title: "Terpenes & the Entourage Effect",
      content: "Terpenes help create cannabis aromas such as citrus, berry, mint, sandalwood and pine. Aroma only describes part of the profile: controlled human research is beginning to show that specific terpenes can modify specific THC effects, while the wider entourage map remains an active field of study.",
    }
  ],
  methods: [
    {
      title: "Decarboxylation",
      content: "Heat can decarboxylate acidic cannabinoids, but conversion depends on material, equipment, temperature and time. A universal home formula cannot establish final potency or safety.",
      pidgin: "Heat fit change cannabinoid chemistry, but no single home rule fit tell you the final dose or safety.",
    },
    {
      title: "Solventless Extraction",
      content: "Rosin is made using only heat and pressure, avoiding toxic chemicals like butane or petrol often found in street oils.",
    }
  ],
  danger: [
    {
      title: "The 'Colorado' Crisis",
      content: "The street name “Colorado” does not establish composition. Some products sold under the name may contain dangerous synthetic cannabinoids, high-potency cannabis, mixtures or contaminants.",
      pidgin: "Name like Colos no be laboratory test. The content fit change, and some batches fit cause serious emergency.",
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
      content: "Stigma colour and calendar rules do not establish potency or microbial safety. Post-harvest claims require defined sampling, environmental measurements and chemical testing.",
    }
  ],
  medical_science: [
    {
      title: "Sickle-cell evidence boundary",
      content: "Laboratory findings cannot establish a CBD:CBG treatment ratio for vaso-occlusive crisis. Acute sickle-cell pain requires evidence-based medical care; cannabinoid questions belong in qualified clinical research.",
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
    description: 'The best-known psychoactive cannabinoid, studied across pain, nausea, appetite, sleep and other outcomes. Experience depends on product, dose, route, the wider chemical profile and the person.',
    effects: ['Psychoactive', 'Euphoria or altered perception', 'Variable symptom relief']
  },
  cbd: {
    name: 'CBD',
    fullName: 'Cannabidiol',
    formula: 'C21H30O2',
    color: '#2b9348',
    role: 'Non-THC-like cannabinoid',
    description: 'A pharmacologically active cannabinoid without the typical THC-like psychoactive experience. Defined CBD medicines have strong evidence for some indications, and research continues across others.',
    effects: ['Not typically THC-like', 'Therapeutic research', 'Interaction potential']
  },
  cbg: {
    name: 'CBG',
    fullName: 'Cannabigerol',
    formula: 'C21H32O2',
    color: '#f9c74f',
    role: 'Biosynthetic precursor',
    description: 'CBGA is a precursor in cannabinoid biosynthesis. Human clinical evidence for CBG products remains limited.',
    effects: ['Research interest', 'Limited human evidence', 'Product variability']
  },
  thcv: {
    name: 'THCV',
    fullName: 'Tetrahydrocannabivarin',
    formula: 'C19H26O2',
    color: '#48cae4',
    role: 'Minor cannabinoid',
    description: 'A cannabinoid with dose-dependent pharmacology under active study. Marketing claims about energy or appetite exceed current clinical certainty.',
    effects: ['Preliminary research', 'Dose-dependent activity', 'Uncertain consumer effects']
  },
  cbn: {
    name: 'CBN',
    fullName: 'Cannabinol',
    formula: 'C21H26O2',
    color: '#3c096c',
    role: 'THC oxidation product',
    description: 'A cannabinoid that can form as THC oxidises. Evidence does not support treating CBN as a proven standalone sleep medicine.',
    effects: ['Limited human evidence', 'Often marketed for sleep', 'Clinical effect uncertain']
  },
  cbc: {
    name: 'CBC',
    fullName: 'Cannabichromene',
    formula: 'C21H30O2',
    color: '#f15bb5',
    role: 'Minor cannabinoid',
    description: 'A cannabinoid under laboratory and early clinical study for several pathways, including possible roles within multi-compound cannabis effects.',
    effects: ['Preclinical research', 'Interaction hypotheses', 'Emerging human evidence']
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
    description: 'A common cannabis volatile with an earthy aroma, long associated by consumers with body ease and relaxation. Its specific contribution within whole cannabis remains an active research question.',
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
    description: 'A peppery sesquiterpene that can engage CB2-related pathways and is studied for anti-inflammatory and analgesic potential. Human effects depend on exposure and the wider product.',
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
    description: 'A citrus-scented terpene studied across laboratory and human research. In a controlled study, vaporized d-limonene reduced part of the acute anxiety response to THC under defined conditions.',
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
    description: 'A pine-scented terpene. Claims that cannabis pinene prevents THC-related memory effects or acts as a clinical bronchodilator remain unproven.',
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
    description: 'A volatile compound with floral, pine and fruit notes, commonly associated with bright or cerebral experiences. Its contribution is best read alongside the full chemical profile and personal response.',
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
    description: 'A floral terpene present in lavender and other plants, with calming and anticonvulsant pathways under study. Cannabis-specific human outcomes remain an important research lane.',
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
    description: 'A terpene also found in hops. Appetite-suppression claims are largely preclinical and should not be presented as a predictable consumer effect.'
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
    description: 'A sweet, herbaceous plant volatile involved in ecological interactions and commonly associated with uplifting, clear experiences. Controlled cannabis-specific research is still developing.'
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
    description: 'A floral compound also found in chamomile and studied in topical and laboratory contexts; product-level clinical effects require evidence.'
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
    description: 'A rose-scented terpene found across many plants. Its presence describes chemistry and aroma, not a medical indication.'
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
    description: 'A musky plant volatile. Reported cardiovascular interest is preclinical and not a treatment claim.'
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
    description: 'A citrus-scented terpene named for Valencia oranges. Mood and focus effects are not reliably predicted by its presence in cannabis.'
  }
};

export const FLAVONOIDS = {
  cannflavin_a_b: {
    name: 'Cannflavin A & B',
    formula: 'C21H20O6',
    role: 'Cannabis-specific flavonoids',
    benefits: 'Anti-inflammatory pathways under study',
    color: '#ff0054',
    description: 'Cannabis-associated flavonoids studied for effects on prostaglandin and inflammatory pathways. Their distinctive chemistry makes them promising research targets.',
    foundIn: ['Cannabis Sativa']
  },
  cannflavin_c: {
    name: 'Cannflavin C',
    formula: 'C21H20O7',
    role: 'Cannabis-specific flavonoid',
    benefits: 'Antioxidant and antiparasitic research',
    color: '#9e0059',
    description: 'A cannflavin found in some cannabis varieties and studied in antioxidant and antiparasitic laboratory models.',
    foundIn: ['Cannabis Sativa', 'Hemp']
  },
  apigenin: {
    name: 'Apigenin',
    formula: 'C15H10O5',
    role: 'Flavonoid research target',
    benefits: 'Calming and sleep-related pathways',
    color: '#ffbd00',
    description: 'A flavonoid found in chamomile and cannabis that interacts with several signalling pathways studied in relation to calm, sleep and inflammation.',
    foundIn: ['Chamomile', 'Parsley', 'Celery']
  },
  quercetin: {
    name: 'Quercetin',
    formula: 'C15H10O7',
    role: 'Widely studied flavonoid',
    benefits: 'Antioxidant and cardiovascular research',
    color: '#f72585',
    description: 'A widely distributed plant flavonoid studied for antioxidant, cardiovascular and immune-related pathways.',
    foundIn: ['Kale', 'Berries', 'Green Tea']
  },
  kaempferol: {
    name: 'Kaempferol',
    formula: 'C15H10O6',
    role: 'Widely studied flavonoid',
    benefits: 'Neuroprotective pathways under study',
    color: '#4cc9f0',
    description: 'A plant flavonoid studied in inflammation, neuronal stress and metabolic models, including possible neuroprotective pathways.',
    foundIn: ['Broccoli', 'Kale', 'Spinach']
  },
  luteolin: {
    name: 'Luteolin',
    formula: 'C15H10O6',
    role: 'Widely studied flavonoid',
    benefits: 'Inflammation and cognition research',
    color: '#4361ee',
    description: 'A plant flavonoid studied for inflammatory, cardiovascular and nervous-system pathways, including cognition-related questions.',
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
    { title: 'Sickle-cell research question', summary: 'Laboratory or observational cannabis findings do not establish a treatment protocol for vaso-occlusive crisis.' },
    { title: 'Authenticity research question', summary: 'Claims about Nigerian landrace genetic percentages require a traceable dataset, sampling method and peer-reviewed analysis.' }
  ],
  files: [
    { name: 'Cannabis Grow Bible', type: 'PDF', size: '9.4 MB' },
    { name: 'Medical Cannabis Guidebook', type: 'PDF', size: '9.5 MB' },
    { name: 'Nigerian Cannabis Compendium', type: 'MD', size: '19 KB' }
  ]
};
