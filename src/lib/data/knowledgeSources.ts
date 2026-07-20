import { MEDGRIOT_ESSAYS } from './featuredVoices';

export type EvidenceLevel = 'established' | 'supported' | 'preliminary' | 'inconclusive';
export type SourceKind =
  | 'systematic review'
  | 'consensus report'
  | 'clinical guidance'
  | 'randomized trial'
  | 'observational study'
  | 'qualitative study'
  | 'reference book'
  | 'expert profile'
  | 'expert media'
  | 'editorial essay'
  | 'legal document'
  | 'working report';
export type VerificationStatus = 'primary source verified' | 'contextual source' | 'requires current verification';

export interface Citation {
  id: string;
  title: string;
  authors: string;
  year: number;
  source: string;
  href: string;
  kind: SourceKind;
}

export interface KnowledgeSource extends Citation {
  verification: VerificationStatus;
  quality: 'peer reviewed' | 'authoritative guidance' | 'expert interpretation' | 'author perspective' | 'historical reference' | 'working analysis';
  summary: string;
  limitation: string;
  topics: string[];
  lessonSlugs: string[];
  contributorIds?: string[];
}

export interface KnowledgeContributor {
  id: string;
  name: string;
  credentials: string;
  role: string;
  contribution: string;
  expertise: string[];
  profileHref: string;
  publicSelfDisclosure?: {
    statement: string;
    sourceHref: string;
  };
}

export interface ExtractedIdea {
  id: string;
  title: string;
  synthesis: string;
  evidence: EvidenceLevel;
  sourceIds: string[];
  lessonSlugs: string[];
  editorialUse: string;
}

export interface SourceReviewRecord {
  sourceId: string;
  reviewer: string;
  reviewedAt: string;
  nextReviewAt: string;
  cadence: 'monthly' | 'quarterly' | 'biannual';
  status: 'current' | 'review due';
}

export const KNOWLEDGE_CONTRIBUTORS: KnowledgeContributor[] = [
  {
    id: 'riley-kirk',
    name: 'Dr. Riley Kirk',
    credentials: 'PhD, pharmaceutical sciences',
    role: 'Natural-product scientist and science communicator',
    contribution: 'Connects analytical chemistry, community questions, lived experience and practical cannabis education; co-authored the CHS survey used in the health curriculum.',
    expertise: ['Natural products', 'Product chemistry', 'CHS', 'Science communication'],
    profileHref: 'https://reeferwellnessbook.com/pages/about-the-book-author',
    publicSelfDisclosure: {
      statement: 'Publicly describes herself as both a cannabis researcher and consumer.',
      sourceHref: 'https://reeferwellnessbook.com/pages/about-the-book-author',
    },
  },
  {
    id: 'miyabe-shields',
    name: 'Dr. Miyabe Shields',
    credentials: 'PhD, pharmaceutical sciences',
    role: 'Pharmaceutical scientist and community-engaged researcher',
    contribution: 'Bridges endocannabinoid biochemistry with community-generated research questions and lived experience.',
    expertise: ['Endocannabinoid mechanisms', 'Pharmacognosy', 'Community research', 'Real-world data'],
    profileHref: 'https://www.appliedpharmacognosy.org/about',
    publicSelfDisclosure: {
      statement: 'Has written publicly in the first person about medical cannabis use.',
      sourceHref: 'https://www.appliedpharmacognosy.org/blog/cannabis-stigma-leads-to-isolation-and-increased-risk-of-harm-in-high-needs-medical-patients',
    },
  },
  {
    id: 'ziva-cooper',
    name: 'Dr. Ziva Cooper',
    credentials: 'PhD',
    role: 'Director, UCLA Center for Cannabis and Cannabinoids',
    contribution: 'Contributes controlled human research and systematic-review expertise on potency, pain, cognition and research design.',
    expertise: ['Human laboratory studies', 'Potency', 'Pain', 'Research methods'],
    profileHref: 'https://medschool.ucla.edu/news-article/ucla-receives-64-million-to-fund-cannabis-research',
  },
  {
    id: 'sue-sisley',
    name: 'Dr. Sue Sisley',
    credentials: 'MD',
    role: 'Founder and principal investigator, SRI Foundation',
    contribution: 'Adds a clinical-trial and research-access lens, including work with veterans, PTSD and study-drug quality.',
    expertise: ['Clinical trials', 'PTSD', 'Research access', 'Study-product quality'],
    profileHref: 'https://www.scottsdaleresearchinstitute.org/about',
  },
];

const CORE_SOURCES: KnowledgeSource[] = [
  {
    id: 'nap-2024', title: 'Cannabis Policy Impacts Public Health and Health Equity', authors: 'National Academies of Sciences, Engineering, and Medicine', year: 2024, source: 'National Academies Press', href: 'https://doi.org/10.17226/27766', kind: 'consensus report',
    verification: 'primary source verified', quality: 'authoritative guidance', summary: 'A multidisciplinary assessment of cannabis policy, public health, infrastructure and equity.', limitation: 'A US-focused consensus report; transfer to Nigeria requires legal, health-system and market context.', topics: ['Policy', 'Public health', 'Equity'], lessonSlugs: ['what-is-cannabis', 'how-to-read-cannabis-research', 'synthetic-cannabinoids', 'policy-models-and-public-health', 'stigma-language-and-media'],
  },
  {
    id: 'solmi-2023', title: 'Balancing risks and benefits of cannabis use: umbrella review of meta-analyses', authors: 'Solmi M, De Toffol M, Kim JY, et al.', year: 2023, source: 'BMJ', href: 'https://pubmed.ncbi.nlm.nih.gov/37648266/', kind: 'systematic review',
    verification: 'primary source verified', quality: 'peer reviewed', summary: 'Synthesizes meta-analyses across therapeutic outcomes and adverse effects.', limitation: 'Umbrella reviews inherit the limitations and heterogeneity of included reviews and interventions.', topics: ['Clinical evidence', 'Safety', 'Mental health'], lessonSlugs: ['what-is-cannabis', 'how-to-read-cannabis-research', 'cannabinoids-and-the-ecs', 'dose-route-and-duration', 'medical-evidence', 'dependence-tolerance-and-withdrawal', 'pregnancy-youth-and-vulnerability'],
  },
  {
    id: 'ahrq-2025', title: 'Living Systematic Review on Cannabis and Other Plant-Based Treatments for Chronic Pain: 2025 Update', authors: 'McDonagh MS, Wagner J, Ahmed AY, et al.', year: 2025, source: 'Agency for Healthcare Research and Quality', href: 'https://www.ncbi.nlm.nih.gov/books/NBK618045/', kind: 'systematic review',
    verification: 'primary source verified', quality: 'authoritative guidance', summary: 'A living review of benefits, adverse events and evidence gaps for cannabinoid products in chronic pain.', limitation: 'Conclusions are product- and outcome-specific and should not be generalized to every cannabis preparation.', topics: ['Chronic pain', 'Clinical evidence', 'Adverse effects'], lessonSlugs: ['how-to-read-cannabis-research', 'medical-evidence'],
  },
  {
    id: 'ditchfield-2014', title: 'The Medical Cannabis Guidebook', authors: 'Jeff Ditchfield and Mel Thomas', year: 2014, source: 'Green Candy Press', href: '/docs#ditchfield-2014', kind: 'reference book',
    verification: 'contextual source', quality: 'historical reference', summary: 'A broad book used to map plant biology, preparation and medical-claim topics into the curriculum.', limitation: 'Its medical, legal and technical claims require verification against current primary research and guidance.', topics: ['Plant anatomy', 'Preparations', 'Historical medical claims'], lessonSlugs: ['plant-anatomy', 'environment-and-plant-development', 'harvest-drying-curing-and-stability'],
  },
  {
    id: 'kirk-chs-2026', title: 'Cannabinoid Hyperemesis Syndrome—A Survey-Based Approach to Understanding Symptoms and Cannabis Use Patterns', authors: 'Peterson C, Simonian J, Mbengue M, Higgins J, Kirk R, et al.', year: 2026, source: 'Cannabis and Cannabinoid Research', href: 'https://doi.org/10.1177/25785125261421434', kind: 'observational study',
    verification: 'primary source verified', quality: 'peer reviewed', summary: 'A community-informed survey describing symptom profiles and cannabis-use patterns among people with suspected or diagnosed CHS.', limitation: 'Self-selected, self-reported observational data cannot establish prevalence or prove causation.', topics: ['CHS', 'Vomiting', 'Community-informed research'], lessonSlugs: ['how-to-read-cannabis-research', 'cannabinoid-hyperemesis-syndrome'], contributorIds: ['riley-kirk'],
  },
  {
    id: 'acog-2025', title: 'Cannabis Use During Pregnancy and Lactation: Clinical Consensus No. 10', authors: 'American College of Obstetricians and Gynecologists', year: 2025, source: 'Obstetrics & Gynecology', href: 'https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2025/10/cannabis-use-during-pregnancy-and-lactation', kind: 'clinical guidance',
    verification: 'primary source verified', quality: 'authoritative guidance', summary: 'Clinical guidance on screening, counselling and cannabis exposure during pregnancy and lactation.', limitation: 'Guidance combines incomplete evidence with precautionary clinical judgment; it is not a causal estimate for every exposure.', topics: ['Pregnancy', 'Lactation', 'Clinical care'], lessonSlugs: ['pregnancy-youth-and-vulnerability'],
  },
  {
    id: 'entourage-2024', title: 'The Entourage Effect in Cannabis Medicinal Products: A Comprehensive Review', authors: 'Baron EP, Lucas P, Eades J, Hogue O, et al.', year: 2024, source: 'Pharmaceuticals', href: 'https://pubmed.ncbi.nlm.nih.gov/39598452/', kind: 'systematic review',
    verification: 'primary source verified', quality: 'peer reviewed', summary: 'Reviews evidence and uncertainty around interactions among cannabis constituents.', limitation: 'Mechanistic plausibility and preclinical results do not establish predictable clinical synergy in commercial products.', topics: ['Terpenes', 'Cannabinoids', 'Entourage effect'], lessonSlugs: ['terpenes-flavonoids-and-entourage'],
  },
  {
    id: 'spindle-limonene-2024', title: 'Vaporized D-limonene selectively mitigates the acute anxiogenic effects of Δ9-tetrahydrocannabinol in healthy adults who intermittently use cannabis', authors: 'Spindle TR, Sholler DJ, Cone EJ, et al.', year: 2024, source: 'Drug and Alcohol Dependence', href: 'https://pubmed.ncbi.nlm.nih.gov/38498958/', kind: 'randomized trial',
    verification: 'primary source verified', quality: 'peer reviewed', summary: 'A controlled human crossover study found that vaporized d-limonene reduced some acute anxiety effects of THC without broadly changing other measured THC effects.', limitation: 'A small study of isolated compounds in healthy adults cannot establish that citrus-smelling flower produces the same result or that all constituent interactions are beneficial.', topics: ['Terpenes', 'THC', 'Entourage effect', 'Human research'], lessonSlugs: ['terpenes-flavonoids-and-entourage'],
  },
  {
    id: 'jeddi-2024', title: 'Cannabis for medical use versus opioids for chronic non-cancer pain: a systematic review and network meta-analysis of randomised clinical trials', authors: 'Jeddi HM, Busse JW, Sadeghirad B, et al.', year: 2024, source: 'BMJ Open', href: 'https://pubmed.ncbi.nlm.nih.gov/38171632/', kind: 'systematic review',
    verification: 'primary source verified', quality: 'peer reviewed', summary: 'An indirect comparison found broadly similar small improvements for medical cannabis and opioids in chronic non-cancer pain, with fewer discontinuations due to adverse events for cannabis.', limitation: 'The review found no direct cannabis-versus-opioid trials and follow-up was short, so it cannot support a universal safety ranking across products or conditions.', topics: ['Chronic pain', 'Comparative effectiveness', 'Patient decisions'], lessonSlugs: ['medical-evidence'],
  },
  {
    id: 'garcia-romeu-2022', title: 'Online survey of medicinal cannabis users: Qualitative analysis of patient-level data', authors: 'Garcia-Romeu A, Elmore JS, Mayhugh RE, et al.', year: 2022, source: 'Frontiers in Pharmacology', href: 'https://pubmed.ncbi.nlm.nih.gov/36147312/', kind: 'qualitative study',
    verification: 'primary source verified', quality: 'peer reviewed', summary: 'Medicinal cannabis users described symptom relief, improved quality of life and reduced use of other medicines alongside side effects, cost, legal concerns and limited clinical support.', limitation: 'A self-selected online sample records lived experience but cannot estimate average treatment effects or prove that cannabis caused every reported change.', topics: ['Lived experience', 'Patient-reported benefit', 'Access'], lessonSlugs: ['medical-evidence', 'stigma-language-and-media'],
  },
  {
    id: 'physician-knowledge-2025', title: 'International perspectives on physician knowledge, attitudes, and practices related to medical cannabis', authors: 'Syed SA, Singh J, Elkholy H, et al.', year: 2025, source: 'Frontiers in Public Health', href: 'https://pubmed.ncbi.nlm.nih.gov/40051509/', kind: 'observational study',
    verification: 'primary source verified', quality: 'peer reviewed', summary: 'An international physician survey found substantial cannabis-specific knowledge gaps and wide variation in clinical practice.', limitation: 'The cross-sectional, self-selected sample was collected in 2016–2018 and does not justify claiming that every—or most—doctor lacks cannabis knowledge.', topics: ['Clinical education', 'ECS', 'Medical cannabis'], lessonSlugs: ['cannabinoids-and-the-ecs', 'medical-evidence', 'stigma-language-and-media'],
  },
  {
    id: 'ren-2019-history', title: 'The origins of cannabis smoking: Chemical residue evidence from the first millennium BCE in the Pamirs', authors: 'Ren M, Tang Z, Wu X, et al.', year: 2019, source: 'Science Advances', href: 'https://doi.org/10.1126/sciadv.aaw1391', kind: 'observational study',
    verification: 'primary source verified', quality: 'peer reviewed', summary: 'Chemical residues in funerary braziers provide direct evidence of cannabis being burned in ritual contexts about 2,500 years ago.', limitation: 'The site documents one ancient practice and cannot establish a single origin, continuous tradition or every earlier medicinal claim.', topics: ['History', 'Archaeology', 'Ritual use'], lessonSlugs: ['cannabis-across-cultures', 'cannabis-in-africa-and-nigeria'],
  },
  {
    id: 'cooper-potency-2025', title: 'High-Potency Cannabis Use and Health: A Systematic Review of Observational and Experimental Studies', authors: 'Lake S, Murray CH, Henry B, et al.; Cooper ZD', year: 2025, source: 'American Journal of Psychiatry', href: 'https://pubmed.ncbi.nlm.nih.gov/40134269/', kind: 'systematic review',
    verification: 'primary source verified', quality: 'peer reviewed', summary: 'Synthesizes observational and experimental evidence on higher-potency cannabis and health outcomes.', limitation: 'Potency definitions, products and exposure measurement vary across studies; associations are not uniformly causal.', topics: ['Potency', 'Mental health', 'Dependence'], lessonSlugs: ['dose-route-and-duration', 'dependence-tolerance-and-withdrawal', 'pregnancy-youth-and-vulnerability'], contributorIds: ['ziva-cooper'],
  },
  {
    id: 'cooper-barriers-2021', title: 'Challenges for Clinical Cannabis and Cannabinoid Research in the United States', authors: 'Cooper ZD, Abrams DI, Gust S, Salicrup A, Throckmorton DC', year: 2021, source: 'JNCI Monographs', href: 'https://pubmed.ncbi.nlm.nih.gov/34850896/', kind: 'observational study',
    verification: 'primary source verified', quality: 'peer reviewed', summary: 'Explains regulatory, product and methodological barriers that affect clinical cannabis research.', limitation: 'A US research-policy analysis; barriers and institutions differ in Nigeria.', topics: ['Research methods', 'Regulation', 'Clinical trials'], lessonSlugs: ['how-to-read-cannabis-research', 'quality-contaminants-and-testing'], contributorIds: ['ziva-cooper'],
  },
  {
    id: 'nap-profile', title: 'Natural Products Applied Pharmacognosy: about and research philosophy', authors: 'Riley Kirk and Miyabe Shields', year: 2026, source: 'Applied Pharmacognosy', href: 'https://www.appliedpharmacognosy.org/about', kind: 'expert profile',
    verification: 'primary source verified', quality: 'expert interpretation', summary: 'Describes a community-engaged research programme connecting cannabis biochemistry with lived experience.', limitation: 'An organizational self-description, not independent evidence for health efficacy or safety.', topics: ['Community research', 'Pharmacognosy', 'Lived experience'], lessonSlugs: ['how-to-read-cannabis-research', 'cannabinoids-and-the-ecs', 'quality-contaminants-and-testing'], contributorIds: ['riley-kirk', 'miyabe-shields'],
  },
  {
    id: 'sri-profile', title: 'SRI Foundation research programme and history', authors: 'SRI Foundation and Sue Sisley', year: 2026, source: 'SRI Foundation', href: 'https://www.scottsdaleresearchinstitute.org/about', kind: 'expert profile',
    verification: 'primary source verified', quality: 'expert interpretation', summary: 'Documents clinical-trial, research-access and study-product-quality work involving cannabis and veterans.', limitation: 'An institutional profile; efficacy claims must be evaluated in the published trial record.', topics: ['Clinical trials', 'PTSD', 'Research access'], lessonSlugs: ['how-to-read-cannabis-research', 'medical-evidence', 'quality-contaminants-and-testing'], contributorIds: ['sue-sisley'],
  },
  {
    id: 'reefer-wellness', title: 'Reefer Wellness: Understanding Cannabis Science, Culture, and Medicine', authors: 'Dr. Riley Kirk', year: 2025, source: 'Reefer Wellness', href: 'https://reeferwellnessbook.com/pages/about-the-book-author', kind: 'reference book',
    verification: 'contextual source', quality: 'expert interpretation', summary: 'Accessible synthesis of cannabis science, culture, medicine, adverse effects, testing and stigma.', limitation: 'Expert synthesis and lived experience; consequential medical claims are checked against primary studies and reviews.', topics: ['Science communication', 'Chemistry', 'Stigma'], lessonSlugs: ['what-is-cannabis', 'cannabinoids-and-the-ecs', 'cannabinoid-hyperemesis-syndrome', 'stigma-language-and-media'], contributorIds: ['riley-kirk'],
  },
  {
    id: 'bioactive-podcast', title: 'Bioactive Podcast', authors: 'Dr. Riley Kirk', year: 2026, source: 'Bioactive', href: 'https://www.bioactivepodcast.com/', kind: 'expert media',
    verification: 'contextual source', quality: 'expert interpretation', summary: 'Long-form expert conversations on natural-product chemistry, genetics, testing, cultivation and smokability.', limitation: 'Episodes may mix evidence, interpretation and guest perspective; they are supplementary rather than clinical authority.', topics: ['Natural products', 'Testing', 'Cultivation'], lessonSlugs: ['cannabinoids-and-the-ecs', 'quality-contaminants-and-testing', 'environment-and-plant-development'], contributorIds: ['riley-kirk'],
  },
  {
    id: 'grow-bible-2001', title: 'The Cannabis Grow Bible', authors: 'Greg Green', year: 2001, source: 'Local Efifya library', href: '/docs#grow-bible-2001', kind: 'reference book',
    verification: 'contextual source', quality: 'historical reference', summary: 'An archival cultivation reference used to map plant lifecycle, environment, propagation and post-harvest topics.', limitation: 'Techniques, safety guidance and legal information may be outdated and require independent verification.', topics: ['Botany', 'Cultivation', 'History'], lessonSlugs: ['plant-anatomy', 'environment-and-plant-development', 'harvest-drying-curing-and-stability'],
  },
  {
    id: 'nigerian-compendium', title: 'The Nigerian Cannabis Compendium', authors: 'Efifya', year: 2026, source: 'Local Efifya library', href: '/docs#nigerian-compendium', kind: 'working report',
    verification: 'requires current verification', quality: 'working analysis', summary: 'A technical, legal and botanical working analysis used to organize Nigerian research questions.', limitation: 'A secondary working document; consequential claims must be checked against linked primary sources.', topics: ['Nigeria', 'Law', 'Botany'], lessonSlugs: ['how-to-read-nigerian-cannabis-law', 'cannabis-in-africa-and-nigeria'],
  },
  {
    id: 'india-hemp-act-1966', title: 'Indian Hemp Act', authors: 'Federal Republic of Nigeria', year: 1966, source: 'Laws of the Federation of Nigeria', href: '/law', kind: 'legal document',
    verification: 'requires current verification', quality: 'authoritative guidance', summary: 'A foundational Nigerian statute addressing cultivation, possession, use and related cannabis offences.', limitation: 'Current status, amendments and controlling text must be checked before relying on this record for a legal decision.', topics: ['Nigeria', 'Law', 'Prohibition'], lessonSlugs: ['how-to-read-nigerian-cannabis-law', 'cannabis-in-africa-and-nigeria'],
  },
  {
    id: 'ndlea-act-1989', title: 'National Drug Law Enforcement Agency Act', authors: 'Federal Republic of Nigeria', year: 1989, source: 'Laws of the Federation of Nigeria', href: '/law', kind: 'legal document',
    verification: 'requires current verification', quality: 'authoritative guidance', summary: 'The legislation establishing Nigeria’s principal federal drug-law enforcement agency and its functions.', limitation: 'Public legal information is not legal advice; verify the current consolidated statute and amendments.', topics: ['Nigeria', 'Law', 'NDLEA'], lessonSlugs: ['how-to-read-nigerian-cannabis-law'],
  },
];

const MEDGRIOT_LESSON_MAP: Record<number, string[]> = {
  1: ['what-is-cannabis'],
  2: ['cannabis-across-cultures', 'cannabis-in-africa-and-nigeria'],
  3: ['how-to-read-nigerian-cannabis-law'],
  4: ['how-to-read-nigerian-cannabis-law', 'cannabis-in-africa-and-nigeria'],
  5: ['policy-models-and-public-health', 'cannabis-in-africa-and-nigeria'],
  6: ['medical-evidence'],
  7: ['stigma-language-and-media'],
  8: ['policy-models-and-public-health'],
  9: ['dependence-tolerance-and-withdrawal', 'synthetic-cannabinoids'],
  10: ['policy-models-and-public-health', 'stigma-language-and-media'],
};

const MEDGRIOT_SOURCES: KnowledgeSource[] = MEDGRIOT_ESSAYS.map((essay) => ({
  id: `medgriot-${essay.order}`,
  title: essay.title,
  authors: 'Kelechi · The MedGriot',
  year: 2025,
  source: 'The MedGriot',
  href: essay.href,
  kind: 'editorial essay',
  verification: 'contextual source',
  quality: 'author perspective',
  summary: essay.summary,
  limitation: 'Authored Nigerian analysis; health, historical and legal claims are independently verified before becoming lesson claims.',
  topics: ['Nigeria', essay.course],
  lessonSlugs: MEDGRIOT_LESSON_MAP[essay.order] ?? [],
}));

export const KNOWLEDGE_SOURCES: KnowledgeSource[] = [...CORE_SOURCES, ...MEDGRIOT_SOURCES];

const REVIEWED_AT = '2026-07-17';
export const SOURCE_REVIEW_RECORDS: SourceReviewRecord[] = KNOWLEDGE_SOURCES.map((source) => {
  const legal = source.kind === 'legal document';
  const clinical = ['systematic review','consensus report','clinical guidance','randomized trial','observational study','qualitative study'].includes(source.kind);
  return {
    sourceId: source.id,
    reviewer: 'Efifya editorial team',
    reviewedAt: REVIEWED_AT,
    nextReviewAt: legal ? '2026-08-17' : clinical ? '2026-10-17' : '2027-01-17',
    cadence: legal ? 'monthly' : clinical ? 'quarterly' : 'biannual',
    status: 'current',
  };
});

export function getSourceReviewRecord(sourceId:string){return SOURCE_REVIEW_RECORDS.find((record)=>record.sourceId===sourceId)}

export const CURRICULUM_CITATIONS: Citation[] = KNOWLEDGE_SOURCES
  .filter((source) => ['nap-2024', 'solmi-2023', 'ahrq-2025', 'ditchfield-2014', 'kirk-chs-2026', 'acog-2025', 'entourage-2024', 'spindle-limonene-2024', 'jeddi-2024', 'garcia-romeu-2022', 'physician-knowledge-2025', 'ren-2019-history', 'cooper-potency-2025', 'cooper-barriers-2021'].includes(source.id))
  .map(({ id, title, authors, year, source, href, kind }) => ({ id, title, authors, year, source, href, kind }));

export const EXTRACTED_IDEAS: ExtractedIdea[] = [
  {
    id: 'product-specific-claims', title: 'Name the product before making the claim', evidence: 'established', sourceIds: ['nap-2024', 'solmi-2023', 'ahrq-2025'],
    synthesis: 'Flower, extracts, purified cannabinoids and regulated medicines are not interchangeable exposures; formulation, dose and route must travel with every conclusion.', lessonSlugs: ['what-is-cannabis', 'how-to-read-cannabis-research', 'medical-evidence', 'dose-route-and-duration'], editorialUse: 'Core rule for rewriting broad health or safety claims.',
  },
  {
    id: 'community-to-study', title: 'Lived experience is a foundation for better cannabis science', evidence: 'supported', sourceIds: ['garcia-romeu-2022', 'kirk-chs-2026', 'nap-profile'],
    synthesis: 'People directly report what they felt, valued and changed. Community knowledge reveals overlooked outcomes and helps researchers design questions that matter, while comparison studies extend those observations to causal and population questions.', lessonSlugs: ['how-to-read-cannabis-research', 'medical-evidence', 'cannabinoid-hyperemesis-syndrome'], editorialUse: 'Treats personal response as real evidence while matching each study design to the question it can answer.',
  },
  {
    id: 'potency-as-exposure', title: 'Potency changes the exposure question', evidence: 'supported', sourceIds: ['cooper-potency-2025', 'solmi-2023'],
    synthesis: 'Higher THC concentration can change dose and risk, but product, frequency, behaviour and individual vulnerability remain part of the exposure.', lessonSlugs: ['dose-route-and-duration', 'dependence-tolerance-and-withdrawal', 'pregnancy-youth-and-vulnerability'], editorialUse: 'Adds a modern potency lens without implying a single threshold explains every outcome.',
  },
  {
    id: 'entourage-as-programme', title: 'The entourage effect is a research programme, not one slogan', evidence: 'supported', sourceIds: ['entourage-2024', 'spindle-limonene-2024'],
    synthesis: 'Cannabinoid, terpene and whole-extract interactions can occur through multiple mechanisms. Controlled human d-limonene research supplies a compound-specific proof of principle while the wider interaction map develops.', lessonSlugs: ['cannabinoids-and-the-ecs', 'terpenes-flavonoids-and-entourage', 'medical-evidence'], editorialUse: 'Adds entourage science wherever the app discusses chemistry, cultivar experience or therapeutic effects.',
  },
  {
    id: 'research-material-validity', title: 'A study is only as relevant as its material and methods', evidence: 'supported', sourceIds: ['cooper-barriers-2021', 'sri-profile'],
    synthesis: 'Regulatory barriers, narrow study products and differences between research material and real markets can limit how findings transfer to consumer products.', lessonSlugs: ['how-to-read-cannabis-research', 'quality-contaminants-and-testing', 'medical-evidence'], editorialUse: 'Adds external-validity questions to every research appraisal.',
  },
  {
    id: 'nigerian-context-layer', title: 'Local context is a distinct evidence layer', evidence: 'preliminary', sourceIds: ['medgriot-3', 'medgriot-5', 'medgriot-7', 'medgriot-9', 'nap-2024'],
    synthesis: 'Nigerian enforcement, stigma, livelihoods and language shape real-world risk. MedGriot essays identify local questions; statutes, datasets and reviewed health sources verify consequential claims.', lessonSlugs: ['how-to-read-nigerian-cannabis-law', 'policy-models-and-public-health', 'stigma-language-and-media', 'cannabis-in-africa-and-nigeria'], editorialUse: 'Prevents imported evidence from being presented as context-free Nigerian fact.',
  },
  {
    id: 'books-as-curriculum-map', title: 'Books map the terrain; current evidence verifies it', evidence: 'supported', sourceIds: ['ditchfield-2014', 'grow-bible-2001', 'reefer-wellness'],
    synthesis: 'Books help identify vocabulary, diagrams and topic sequences. Time-sensitive medical, legal and technical claims are replaced or qualified using current primary sources.', lessonSlugs: ['plant-anatomy', 'environment-and-plant-development', 'harvest-drying-curing-and-stability', 'stigma-language-and-media'], editorialUse: 'Preserves the library’s breadth without treating every book statement as current authority.',
  },
];

export function getKnowledgeSource(id: string) {
  return KNOWLEDGE_SOURCES.find((source) => source.id === id);
}

export function getLessonSourceBundle(lessonSlug: string) {
  const sources = KNOWLEDGE_SOURCES.filter((source) => source.lessonSlugs.includes(lessonSlug));
  const ideas = EXTRACTED_IDEAS.filter((idea) => idea.lessonSlugs.includes(lessonSlug));
  const contributorIds = new Set(sources.flatMap((source) => source.contributorIds ?? []));
  const contributors = KNOWLEDGE_CONTRIBUTORS.filter((contributor) => contributorIds.has(contributor.id));
  return { sources, ideas, contributors };
}

export const SOURCE_MIX = [
  { label: 'Peer-reviewed & guidance', value: KNOWLEDGE_SOURCES.filter((source) => source.quality === 'peer reviewed' || source.quality === 'authoritative guidance').length },
  { label: 'Expert synthesis', value: KNOWLEDGE_SOURCES.filter((source) => source.quality === 'expert interpretation').length },
  { label: 'MedGriot essays', value: MEDGRIOT_SOURCES.length },
  { label: 'Books & working archive', value: KNOWLEDGE_SOURCES.filter((source) => source.kind === 'reference book' || source.kind === 'working report').length },
];
