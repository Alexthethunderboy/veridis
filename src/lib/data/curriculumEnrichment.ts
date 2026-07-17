import type { EvidenceLevel } from './knowledgeSources';

export interface CurriculumEnrichmentUnit {
  id: string;
  title: string;
  lede: string;
  paragraphs: string[];
  evidence: EvidenceLevel;
  sourceIds: string[];
  activity: {
    label: 'Apply it' | 'Research lab' | 'Nigeria case study' | 'Decision practice';
    prompt: string;
  };
}

export const CURRICULUM_ENRICHMENTS: Record<string, CurriculumEnrichmentUnit[]> = {
  'what-is-cannabis': [
    {
      id: 'classification-by-question', title: 'Classify cannabis by the question being asked', lede: 'Botany, chemistry, law and medicine use different classification systems because they solve different problems.', evidence: 'established', sourceIds: ['nap-2024', 'reefer-wellness'],
      paragraphs: [
        'A botanist may describe reproductive structures and ancestry. A laboratory may group samples by measured cannabinoids and volatile compounds. A regulator may define hemp using a THC threshold. A clinician needs the exact preparation, route, dose and condition. None of these systems is a universal master label, and moving a conclusion from one system to another can create error.',
        'This is why “indica,” “sativa,” “medical,” “natural” and “hemp” cannot independently predict safety or effect. Useful description starts with the material in front of us: plant tissue or extract, measured composition, batch identity, preparation, intended use and legal setting.',
      ],
      activity: { label: 'Apply it', prompt: 'Rewrite the sentence “medical cannabis is safe” so it identifies a product, population, outcome and comparison.' },
    },
    {
      id: 'nigeria-product-language', title: 'Build a Nigerian product vocabulary', lede: 'Local names communicate culture and market knowledge, but a name alone cannot identify chemical exposure.', evidence: 'preliminary', sourceIds: ['medgriot-1', 'medgriot-6', 'nap-2024'],
      paragraphs: [
        'In Nigerian conversation, words such as igbo, weed, Indian hemp and Colorado may carry different meanings across communities. They can refer to plant cannabis, a commercial story, an unknown high-potency product or material treated with synthetic compounds. Education should preserve the language people actually use while asking what the material contained and how that identity was established.',
        'A locally useful intake question is therefore not only “Do you use cannabis?” It asks what the product is called, its appearance and packaging, where it came from, whether it was tested, how it was used, when it was used and what happened. The answers do not prove composition, but they reduce ambiguity and improve research and clinical communication.',
      ],
      activity: { label: 'Nigeria case study', prompt: 'Create a five-question product-identification interview for someone who reports using “Colorado,” without assuming what chemical it contained.' },
    },
  ],
  'how-to-read-cannabis-research': [
    {
      id: 'question-to-design', title: 'Match the study design to the claim', lede: 'The strongest design is the one capable of answering the specific question—not simply the design highest on a generic pyramid.', evidence: 'established', sourceIds: ['solmi-2023', 'ahrq-2025', 'cooper-barriers-2021'],
      paragraphs: [
        'A chemical assay can identify compounds in a submitted sample but cannot show that a treatment improves pain. A survey can describe experiences and generate hypotheses but cannot reliably calculate cause without a comparison strategy. A randomized trial can estimate the effect of a defined intervention under controlled conditions, while surveillance and cohort studies may be better for uncommon harms or long-term patterns.',
        'Systematic reviews make search, selection and synthesis methods inspectable. They are valuable only to the extent that the included studies address sufficiently similar questions and are not dominated by bias. Before reading the conclusion, identify the population, exposure or intervention, comparator, outcome and time horizon.',
      ],
      activity: { label: 'Research lab', prompt: 'For a claim that high-THC products increase panic symptoms, specify one experiment, one observational study and one surveillance dataset—and what each could not prove.' },
    },
    {
      id: 'community-evidence-loop', title: 'Turn lived experience into a research programme', lede: 'Community reports are neither disposable anecdotes nor automatic proof; they are inputs to a disciplined evidence loop.', evidence: 'supported', sourceIds: ['kirk-chs-2026', 'nap-profile', 'sri-profile'],
      paragraphs: [
        'Riley Kirk and colleagues’ CHS survey illustrates one part of this loop: people report a recurring problem, researchers translate experiences into measurable questions, and a study characterises patterns. Self-report and recruitment limitations remain visible. The findings can refine clinical questions, but they do not by themselves estimate population prevalence or establish a biological mechanism.',
        'Miyabe Shields’ community-engaged research philosophy adds another step: research priorities should reflect questions that matter to people using cannabis. Sue Sisley’s work highlights a separate external-validity problem—study material and access rules can make a trial different from the real products patients encounter. Robust appraisal therefore asks who shaped the question, who was sampled, what material was studied and whether the result transfers.',
      ],
      activity: { label: 'Research lab', prompt: 'Take one community claim and write a progression from interview study to observational study to controlled test, including an ethical safeguard at each stage.' },
    },
  ],
  'plant-anatomy': [
    {
      id: 'flower-structure', title: 'Read the inflorescence from the outside in', lede: 'The commercial “bud” is a collection of reproductive and protective structures, not one enlarged flower.', evidence: 'supported', sourceIds: ['ditchfield-2014', 'grow-bible-2001'],
      paragraphs: [
        'An inflorescence contains many small flowers and associated bracts. Stigmas receive pollen; bracts surround reproductive tissues; sugar leaves are small leaves within the flower cluster. Glandular trichomes occur across several surfaces and are especially abundant on parts of female inflorescences. Using the right structure name matters when sampling tissue, discussing development or comparing chemical measurements.',
        'Books in the Efifya archive are helpful for diagrams and vocabulary, but terminology is cross-checked because informal cultivation writing sometimes calls stigmas “pistils,” bracts “calyxes,” or every visible gland a crystal. A diagram should show scale and function rather than implying that appearance alone reveals potency.',
      ],
      activity: { label: 'Apply it', prompt: 'Draw and label a schematic containing an inflorescence, bract, stigma, sugar leaf and capitate-stalked glandular trichome. Add one sentence explaining each function.' },
    },
    {
      id: 'development-not-calendar', title: 'Understand development as a responsive process', lede: 'Lifecycle stages are useful teaching models, but real plants respond continuously to genes and environment.', evidence: 'supported', sourceIds: ['ditchfield-2014', 'grow-bible-2001', 'nap-2024'],
      paragraphs: [
        'Germination, seedling establishment, vegetative growth, reproductive transition, seed development and senescence describe dominant processes rather than sealed boxes. Roots, leaves and reproductive tissues continue changing within each stage. Photoperiod sensitivity, stress, pollination, disease and resource availability can alter timing and form.',
        'Visible traits are therefore imperfect proxies for invisible chemistry. Brown stigmas may reflect age, pollination, heat or damage. Trichome colour depends on sampling location, optics and development. Chemical composition requires a defined sample and analytical method; plant form and laboratory data should be taught as complementary observations.',
      ],
      activity: { label: 'Research lab', prompt: 'Design a non-cultivation classroom observation table that separates structure, developmental stage, environmental observation and chemical evidence.' },
    },
  ],
  'cannabinoids-and-the-ecs': [
    {
      id: 'ecs-network', title: 'Model the ECS as a regulated network', lede: 'The endocannabinoid system is a collection of signals, receptors and enzymes whose effects depend on location and timing.', evidence: 'supported', sourceIds: ['solmi-2023', 'nap-profile'],
      paragraphs: [
        'Anandamide and 2-AG are endogenous signalling molecules produced and degraded through different pathways. CB1 and CB2 receptors have different distributions but are not confined to one organ or function. Enzymes such as FAAH and MAGL influence how long signals remain available. Variation in genes, tissue state and disease can change the network, which is why the phrase “restore balance” is too vague to predict a clinical outcome.',
        'THC can activate cannabinoid receptors in ways that differ from short-lived local endocannabinoid signalling. CBD has multiple pharmacological actions and does not behave as a simple opposite of THC. Riley Kirk and Miyabe Shields’ pharmacognosy perspective is useful here: a chemically diverse plant meets a biologically diverse person, so a single receptor diagram cannot forecast an individual experience.',
      ],
      activity: { label: 'Apply it', prompt: 'Create a causal diagram linking one endocannabinoid, one receptor, one degrading enzyme and one plant cannabinoid. Mark every step where dose or tissue could change the result.' },
    },
    {
      id: 'mechanism-to-clinic', title: 'Do not mistake mechanism for treatment', lede: 'A molecule interacting with a receptor is the beginning of a clinical question, not the end.', evidence: 'established', sourceIds: ['solmi-2023', 'ahrq-2025'],
      paragraphs: [
        'Mechanistic studies can show binding, signalling or changes in a model system. Clinical value additionally requires a defined product, exposure that reaches the target, outcomes that matter to patients, a suitable comparator and harms monitoring. The same pathway may produce helpful or harmful effects depending on brain region, timing, baseline state and dose.',
        'This distinction protects learners from two opposite errors: dismissing plausible mechanisms before they are tested, and advertising a treatment because a mechanism sounds convincing. Efifya labels mechanism as hypothesis support until controlled human evidence and synthesis justify a stronger claim.',
      ],
      activity: { label: 'Decision practice', prompt: 'Evaluate the statement “CBD affects inflammation pathways, therefore CBD oil treats every inflammatory disease.” Identify at least four missing links.' },
    },
  ],
  'dose-route-and-duration': [
    {
      id: 'exposure-profile', title: 'Think in exposure profiles, not servings', lede: 'Dose includes amount, concentration, route, absorption, timing and repeated exposure.', evidence: 'supported', sourceIds: ['solmi-2023', 'cooper-potency-2025'],
      paragraphs: [
        'Inhalation can produce a rapid rise in blood concentration, while swallowed THC has delayed and variable absorption plus conversion to active 11-hydroxy-THC. A label stating milligrams does not describe the full curve: onset, peak, decline and residual impairment can differ across products and people. Repeated administration can overlap with earlier exposure.',
        'Ziva Cooper and colleagues’ potency review reinforces why concentration belongs in the exposure definition. Higher THC concentration can make a large dose easier to receive, but concentration alone does not reveal inhaled volume, frequency, user titration or vulnerability. Research and harm-reduction language should avoid treating “high potency” as a complete exposure measurement.',
      ],
      activity: { label: 'Apply it', prompt: 'Compare a rapid-onset inhaled exposure and a delayed oral exposure on a timeline. Mark where premature repeat dosing and safety-sensitive activity become concerns.' },
    },
    {
      id: 'measurement-uncertainty', title: 'Carry measurement uncertainty into the decision', lede: 'A precise-looking label can still rest on uncertain sampling, formulation and human absorption.', evidence: 'supported', sourceIds: ['cooper-barriers-2021', 'nap-2024'],
      paragraphs: [
        'Research products are often standardised, while informal products may lack batch identity or credible testing. Even regulated results describe a submitted sample at a point in time. Storage, uneven mixing and unit conversion can change how a person interprets the label. For an unknown Nigerian market product, a dosage calculation may manufacture confidence that the underlying data do not support.',
        'Decision quality improves when uncertainty changes behaviour: avoid rapid redosing, avoid combining impairing substances, allow more time than the minimum expected duration and do not use subjective sobriety as proof of driving fitness. These are general risk principles, not a personalised dosing protocol.',
      ],
      activity: { label: 'Decision practice', prompt: 'List the assumptions required to translate a package label into actual THC exposure. Classify each assumption as measured, reported or unknown.' },
    },
  ],
  'terpenes-flavonoids-and-entourage': [
    {
      id: 'plant-function-human-claim', title: 'Separate plant function from human effect', lede: 'A compound can matter greatly to plant ecology without producing a clinically meaningful effect at human exposure levels.', evidence: 'established', sourceIds: ['entourage-2024', 'bioactive-podcast'],
      paragraphs: [
        'Terpenes contribute to aroma and plant interactions; flavonoids contribute pigmentation and other plant functions. Detection in cannabis establishes presence, not a therapeutic dose. Human relevance depends on concentration, route, metabolism, target engagement and controlled outcomes. Evidence from an isolated compound at a high laboratory concentration cannot automatically be transferred to inhaling a complex flower.',
        'Expert media can help learners understand chemical diversity and generate better questions. It is treated as interpretation: the claim becomes curriculum-grade only after its biological and clinical evidence is separately checked. This keeps curiosity without allowing sensory marketing to masquerade as prescribing.',
      ],
      activity: { label: 'Research lab', prompt: 'Choose a popular terpene claim and build an evidence chain from plant measurement to human outcome. Identify where the chain currently breaks.' },
    },
    {
      id: 'interaction-hypotheses', title: 'Break “the entourage effect” into testable hypotheses', lede: 'The phrase can refer to several different interactions, each requiring its own experiment.', evidence: 'inconclusive', sourceIds: ['entourage-2024'],
      paragraphs: [
        'A cannabinoid-cannabinoid interaction is not the same as a cannabinoid-terpene interaction. Pharmacokinetic interaction changes absorption or metabolism; pharmacodynamic interaction changes response at a target or system. A whole extract differing from an isolate could reflect many constituents, not a special synergy. The comparator and outcome must be stated.',
        'The responsible conclusion is neither “the entourage effect is proven” nor “plant combinations never matter.” Some interactions are plausible or supported for particular compounds and outcomes, while broad consumer predictions remain uncertain. Product-specific evidence is the appropriate unit of confidence.',
      ],
      activity: { label: 'Apply it', prompt: 'Rewrite an entourage claim as a testable hypothesis naming compounds, ratio, dose, comparator, population and outcome.' },
    },
  ],
  'medical-evidence': [
    {
      id: 'condition-product-matrix', title: 'Use a condition-by-product evidence matrix', lede: 'Medical evidence belongs to a defined intervention and outcome—not to cannabis as a single treatment.', evidence: 'established', sourceIds: ['solmi-2023', 'ahrq-2025'],
      paragraphs: [
        'A useful evidence table places the clinical condition on one axis and the studied product on the other. It then records comparator, follow-up, average benefit, adverse events and certainty. Evidence for a purified cannabinoid in a rare seizure disorder does not establish benefit from smoked flower for general wellness. Evidence for short-term symptom reduction does not establish disease modification or long-term safety.',
        'The 2025 AHRQ living review illustrates this discipline for chronic pain: some cannabinoid products show small short-term improvements in some populations, with increased adverse events and important gaps. The correct teaching point is conditional and measurable, not a universal endorsement or dismissal.',
      ],
      activity: { label: 'Decision practice', prompt: 'Build a six-column evidence row for one condition: product, population, comparator, benefit, harm and certainty. Leave a cell blank rather than inventing data.' },
    },
    {
      id: 'patient-reported-benefit', title: 'Respect reported benefit while testing the explanation', lede: 'A person’s improvement is real as an experience even when its cause and generalizability remain uncertain.', evidence: 'supported', sourceIds: ['nap-profile', 'sri-profile', 'reefer-wellness'],
      paragraphs: [
        'Community and clinical observations can reveal outcomes that formal trials have neglected. They can also be influenced by expectation, natural symptom fluctuation, concurrent treatment, selection and product variability. A respectful evidence conversation asks what changed, how much, for how long, at what cost and what alternative explanations remain.',
        'Sue Sisley’s research programme shows why patient reports can motivate trials while not replacing them. Riley Kirk and Miyabe Shields emphasise community questions and chemical complexity. Together these perspectives support a curriculum that listens first, then defines the exposure and tests the claim with appropriate methods.',
      ],
      activity: { label: 'Research lab', prompt: 'Convert “cannabis helped my pain” into five neutral follow-up questions that could inform both care and research.' },
    },
  ],
  'synthetic-cannabinoids': [
    {
      id: 'category-not-product', title: 'Treat synthetic cannabinoids as a changing chemical category', lede: 'Street names and packaging cannot identify which receptor agonist, mixture or contaminant is present.', evidence: 'supported', sourceIds: ['nap-2024', 'medgriot-9'],
      paragraphs: [
        'Synthetic cannabinoid receptor agonists include many compounds with different potency, metabolism and toxicity. Some can activate cannabinoid receptors more strongly or differently than THC. New compounds may appear as laws and markets change, and uneven application to carrier material can create concentrated “hot spots.” A past experience does not validate a later packet.',
        'In Nigeria, the term “Colorado” is especially important as a communication problem. It may be used for different products, so education should warn about uncertainty and severe toxicity without pretending the name identifies one molecule. This improves trust and makes emergency histories more accurate.',
      ],
      activity: { label: 'Nigeria case study', prompt: 'Write a 100-word public warning about “Colorado” that names emergency signs but does not make an unsupported chemical identification.' },
    },
    {
      id: 'emergency-information', title: 'Collect information that helps emergency care', lede: 'When composition is unknown, timing, symptoms and supportive actions become especially important.', evidence: 'established', sourceIds: ['nap-2024'],
      paragraphs: [
        'Useful information includes product name and packaging, time used, approximate amount, route, other substances, onset, observed symptoms and pre-existing conditions. Preserve packaging when safe. Do not delay care while attempting home identification, and do not induce vomiting or place objects in the mouth during a seizure.',
        'Seizure, collapse, chest pain, severe agitation, loss of consciousness, breathing difficulty, very high temperature or severe confusion require urgent help. Nonjudgmental care matters: fear of punishment can delay disclosure and worsen outcomes.',
      ],
      activity: { label: 'Decision practice', prompt: 'Create an emergency handover using the structure: substance information, timing, symptoms, actions already taken and unknowns.' },
    },
  ],
  'cannabinoid-hyperemesis-syndrome': [
    {
      id: 'pattern-and-differential', title: 'Recognise a pattern without turning it into a self-test', lede: 'CHS is a clinical pattern that overlaps with many gastrointestinal, metabolic, neurological and pregnancy-related conditions.', evidence: 'supported', sourceIds: ['kirk-chs-2026', 'reefer-wellness'],
      paragraphs: [
        'Recurrent nausea, abdominal pain and vomiting in the context of prolonged cannabinoid exposure can raise suspicion. Hot bathing is commonly reported, but it is neither universal nor unique to CHS. A diagnosis requires history, examination and consideration of dangerous alternatives; a social-media checklist cannot perform that work.',
        'The Kirk and colleagues survey expands the description of patient experiences and administration patterns. Its community-informed detail is valuable for hypothesis generation and clinical questioning. Because participants self-reported and were not a population sample, it should not be used alone to estimate how common CHS is or prove why it occurs.',
      ],
      activity: { label: 'Research lab', prompt: 'List five alternative causes a clinician may need to consider when recurrent vomiting occurs, and explain why hot bathing does not settle the diagnosis.' },
    },
    {
      id: 'recovery-support', title: 'Teach cessation as care, not punishment', lede: 'When CHS is the correct diagnosis, sustained cessation is central, but stopping may expose the problems cannabis was being used to manage.', evidence: 'supported', sourceIds: ['kirk-chs-2026', 'medgriot-9'],
      paragraphs: [
        'Changing cultivar, route or THC percentage has not been established as a reliable way to prevent recurrence. Recovery planning should address withdrawal, sleep, pain, anxiety, appetite or trauma rather than issuing a command without support. Re-exposure followed by recurrence can strengthen diagnostic confidence, but intentionally testing that possibility is unsafe.',
        'MedGriot’s harm-reduction emphasis on nonjudgmental community support becomes concrete here: identify trusted care, plan hydration and medical follow-up, remove access where possible and prepare for cravings or the return of underlying symptoms. Persistent vomiting and dehydration require medical assessment rather than a self-managed cessation plan alone.',
      ],
      activity: { label: 'Decision practice', prompt: 'Draft a compassionate discharge explanation that covers diagnostic uncertainty, urgent warning signs, cessation and support for the original reason for use.' },
    },
  ],
  'dependence-tolerance-and-withdrawal': [
    {
      id: 'functional-assessment', title: 'Assess function, control and consequences', lede: 'Frequency matters, but a use disorder is defined by impaired control and meaningful harm—not by identity or moral judgment.', evidence: 'supported', sourceIds: ['nap-2024', 'cooper-potency-2025'],
      paragraphs: [
        'Assessment asks whether use exceeds intention, attempts to reduce have failed, craving dominates attention, responsibilities are affected, hazardous situations occur or use continues despite physical, psychological or relationship harm. Tolerance and withdrawal indicate adaptation but do not alone describe severity.',
        'Higher-potency exposure may increase risk in some patterns, yet concentration should be interpreted with frequency, route, age of initiation and actual behaviour. The aim is to understand the person’s risk environment and goals, not assign blame from a product label.',
      ],
      activity: { label: 'Decision practice', prompt: 'Compare two fictional people with the same weekly frequency but different control, function and consequences. Explain why their assessments differ.' },
    },
    {
      id: 'change-plan', title: 'Build a change plan around the function of use', lede: 'Reducing use is more durable when the plan replaces what cannabis was doing in the person’s routine.', evidence: 'supported', sourceIds: ['nap-2024', 'medgriot-9'],
      paragraphs: [
        'A plan identifies triggers, high-risk times, access, social reinforcement, sleep patterns and co-occurring conditions. Behavioural strategies can include motivational enhancement, cognitive behavioural techniques, contingency management and structured support. A lapse is information about the plan, not proof that change is impossible.',
        'Withdrawal can include irritability, insomnia, vivid dreams, anxiety, restlessness and appetite change. Planning for the first weeks reduces surprise. Severe psychiatric symptoms, suicidality, inability to function safely or withdrawal from other substances require professional care.',
      ],
      activity: { label: 'Apply it', prompt: 'Create a change-plan template with triggers, replacement behaviours, social support, withdrawal preparation, safety escalation and review date.' },
    },
  ],
  'pregnancy-youth-and-vulnerability': [
    {
      id: 'pregnancy-evidence', title: 'Explain pregnancy evidence without false certainty', lede: 'Clinical guidance combines biological concern, observational evidence and precaution because a safe exposure level has not been established.', evidence: 'established', sourceIds: ['acog-2025', 'solmi-2023'],
      paragraphs: [
        'THC crosses the placenta and cannabinoids can enter breast milk. Human studies are difficult to interpret because dose and product are often poorly measured and tobacco, alcohol, health conditions and social factors may confound associations. These limits do not demonstrate safety; they explain why estimates remain uncertain.',
        'Current professional guidance recommends stopping cannabis during pregnancy and lactation. Counselling should ask why it is being used—such as nausea, sleep, pain or distress—and offer evidence-based alternatives. Punitive language can reduce honest disclosure and prenatal-care engagement.',
      ],
      activity: { label: 'Decision practice', prompt: 'Write a pregnancy counselling explanation that states what is known, what is uncertain, the recommendation and how support will be offered.' },
    },
    {
      id: 'vulnerability-is-variable', title: 'Risk is concentrated, not evenly distributed', lede: 'Age, psychiatric history, cardiovascular disease, pregnancy and interacting medicines can change the benefit–harm balance.', evidence: 'supported', sourceIds: ['cooper-potency-2025', 'nap-2024', 'solmi-2023'],
      paragraphs: [
        'Earlier initiation and frequent high-THC exposure are important concern patterns for adolescents, while personal or family psychosis history may increase psychiatric vulnerability. Cardiovascular symptoms can be more consequential in people with underlying disease. These are probabilistic risk modifiers, not predictions that every exposed person will experience the same outcome.',
        'Good communication avoids both reassurance based on “natural” and exaggerated certainty based on fear. It describes the specific vulnerability, the exposure pattern, warning signs and lower-risk alternatives while keeping the person engaged in care.',
      ],
      activity: { label: 'Apply it', prompt: 'Create a vulnerability checklist that prompts conversation but explicitly states that it is not a diagnostic or personalised risk calculator.' },
    },
  ],
  'how-to-read-nigerian-cannabis-law': [
    {
      id: 'legal-source-hierarchy', title: 'Use a Nigerian legal source hierarchy', lede: 'A headline, agency statement, bill and enacted statute do not carry the same legal authority.', evidence: 'established', sourceIds: ['india-hemp-act-1966', 'ndlea-act-1989', 'medgriot-3'],
      paragraphs: [
        'Begin with the current constitutional and statutory text, then check amendments, regulations, binding court decisions and commencement provisions. Agency publications may explain enforcement priorities but cannot silently rewrite legislation. A bill or political statement describes a proposal until the required legislative process is complete.',
        'The MedGriot essay on laws and enforcement identifies lived consequences and questions worth investigating. The lesson then separates those observations from the legal proposition being asserted. A reliable legal note records the controlling text, section, version, retrieval date, jurisdiction and whether interpretation remains disputed.',
      ],
      activity: { label: 'Nigeria case study', prompt: 'Take a fictional headline saying “Nigeria legalises cannabis” and create a verification checklist before publishing or acting on it.' },
    },
    {
      id: 'law-enforcement-experience', title: 'Separate law on the page from law in people’s lives', lede: 'Statutory rules, enforcement patterns and social consequences are related but distinct research objects.', evidence: 'preliminary', sourceIds: ['medgriot-3', 'medgriot-4', 'nap-2024'],
      paragraphs: [
        'A statute can describe offences and powers. Administrative data can show arrests, seizures or case outcomes. Interviews can reveal fear, stigma, informal practices and barriers to care. None of these sources alone gives the complete picture. Triangulation helps identify where formal authority and lived implementation diverge.',
        'Historical claims about foreign pressure also require layered evidence: treaty texts, colonial archives, legislative debates and Nigerian decision-making. The curriculum treats a persuasive narrative as a research question until the documentary chain is visible.',
      ],
      activity: { label: 'Research lab', prompt: 'Design a three-source investigation of one enforcement claim using a legal text, administrative dataset and community interview.' },
    },
  ],
  'policy-models-and-public-health': [
    {
      id: 'policy-is-a-bundle', title: 'Compare policy bundles, not slogans', lede: 'Prohibition, decriminalisation, medical access and regulated adult use each contain many design choices.', evidence: 'established', sourceIds: ['nap-2024', 'medgriot-8'],
      paragraphs: [
        'Two jurisdictions described as legal can differ in age limits, home production, product testing, potency rules, advertising, taxation, outlet density, public consumption, impaired-driving enforcement and data systems. Decriminalisation may change penalties for possession while leaving supply illegal. Medical access can range from approved medicines to broad retail authorization.',
        'Policy comparison should begin with goals and measures: prevent youth exposure, reduce criminal penalties, improve product information, protect patients, reduce illicit markets or generate revenue. Trade-offs are then assessed against baseline conditions instead of declaring one label universally successful.',
      ],
      activity: { label: 'Nigeria case study', prompt: 'Build a comparison table for prohibition, decriminalisation and medical access using health, justice, market and implementation indicators.' },
    },
    {
      id: 'equity-and-livelihoods', title: 'Include equity, livelihoods and institutional capacity', lede: 'Policy changes distribute benefits, costs and enforcement differently across communities.', evidence: 'supported', sourceIds: ['nap-2024', 'medgriot-5', 'medgriot-8', 'medgriot-10'],
      paragraphs: [
        'The MedGriot essays on farming and reform bring Nigerian livelihoods into the policy frame. Farmers, informal workers, patients, young people, law-enforcement agencies, health services and commercial entrants may experience the same reform differently. Equity assessment asks who can obtain licences, who bears compliance costs and whether prior enforcement harms are addressed.',
        'Institutional capacity matters as much as policy ambition. Testing laboratories, surveillance, clinical guidance, licensing integrity and public education require funding and governance. A reform proposal without implementation design can create new markets while leaving health information and accountability weak.',
      ],
      activity: { label: 'Nigeria case study', prompt: 'Write a one-page policy scorecard with indicators for health, justice, livelihoods, equity, regulatory capacity and unintended effects.' },
    },
  ],
  'environment-and-plant-development': [
    {
      id: 'genotype-environment', title: 'Treat phenotype as genotype interacting with environment', lede: 'Plant form and chemistry emerge from inherited potential, development, environment and measurement.', evidence: 'supported', sourceIds: ['ditchfield-2014', 'grow-bible-2001', 'bioactive-podcast'],
      paragraphs: [
        'Light, temperature, humidity, water, root-zone conditions, nutrition, pests and plant density can influence growth and chemical composition. The variables also interact: increasing light can change water demand; humidity influences transpiration and pathogen pressure; root damage can resemble nutrient deficiency. One-factor recipes often hide these dependencies.',
        'Archive books provide useful cultivation taxonomies, while Riley Kirk’s expert conversations broaden questions around soil biology, pathogens and testing. These sources generate curriculum topics; controlled agronomic research and validated measurement are needed before presenting a precise causal rule.',
      ],
      activity: { label: 'Research lab', prompt: 'Design a factorial experiment for two environmental variables. Identify the outcome, controls, replication and why changing several other conditions would weaken inference.' },
    },
    {
      id: 'disease-prevention', title: 'Connect environment to quality and disease prevention', lede: 'Cultivation conditions can shape hazards that remain after harvest.', evidence: 'supported', sourceIds: ['grow-bible-2001', 'nap-profile'],
      paragraphs: [
        'High humidity, dense tissues, contaminated propagation material and poor sanitation can increase some microbial risks. Pest-control decisions can introduce residues, particularly concerning for products that may be inhaled. Visual health does not prove absence of pathogens, pesticides or heavy metals.',
        'Integrated pest management begins with exclusion, monitoring, correct identification, environmental management and least-harmful controls. Efifya teaches the decision framework without providing instructions that override Nigerian law or substitute for regulated production standards.',
      ],
      activity: { label: 'Decision practice', prompt: 'Create a hazard pathway from environment to plant to post-harvest material to consumer, with one prevention and one verification step at each transition.' },
    },
  ],
  'quality-contaminants-and-testing': [
    {
      id: 'coa-reading', title: 'Audit a certificate of analysis', lede: 'A certificate is a report about a submitted sample under named methods—not a universal product guarantee.', evidence: 'supported', sourceIds: ['nap-2024', 'cooper-barriers-2021', 'sri-profile'],
      paragraphs: [
        'Check laboratory identity, accreditation scope, sample and batch identifiers, collection and test dates, methods, units, limits of detection and quantification, moisture basis and the person authorising results. Confirm whether reported totals use transparent conversions and whether the contaminant panel matches the intended route.',
        'Ziva Cooper’s research-barriers analysis and Sue Sisley’s study-product work highlight external validity: clinical findings depend on what was actually supplied and tested. A visually similar consumer product is not automatically equivalent to research material, even when a cultivar name matches.',
      ],
      activity: { label: 'Apply it', prompt: 'Create a twelve-point certificate audit. Include at least two reasons the document may be authentic yet still irrelevant to the package in hand.' },
    },
    {
      id: 'hazard-specific-testing', title: 'Match each hazard to a measurement strategy', lede: 'Potency, microbes, mycotoxins, metals, pesticides and solvents require different sampling and analytical approaches.', evidence: 'established', sourceIds: ['nap-2024', 'bioactive-podcast'],
      paragraphs: [
        'Passing one panel does not demonstrate absence of hazards that were not tested. Microbial counts do not substitute for mycotoxin analysis; a potency method does not identify synthetic adulterants; total metal measurement does not explain the source. Sampling can dominate the result when contamination or potency is unevenly distributed.',
        'Expert discussions can help learners understand why laboratories disagree, but standards, validation data and proficiency testing are the controlling sources for a formal quality decision. The curriculum asks what was measured, how well, in which sample and against which limit.',
      ],
      activity: { label: 'Research lab', prompt: 'For mould, lead, residual solvent and THC concentration, name the sampling concern and the type of laboratory question that must be answered.' },
    },
  ],
  'harvest-drying-curing-and-stability': [
    {
      id: 'postharvest-system', title: 'Model post-harvest handling as a preservation system', lede: 'Water movement, temperature, airflow, oxygen, light and time influence microbial safety and chemical stability together.', evidence: 'supported', sourceIds: ['ditchfield-2014', 'grow-bible-2001'],
      paragraphs: [
        'Drying reduces available water, but surface dryness does not prove safe water activity throughout dense material. Rapid or uneven drying can produce gradients; storage before equilibration can permit microbial growth. Curing is not a scientifically precise guarantee and should be described by measurable conditions rather than tradition alone.',
        'Archive books help identify the process stages and terminology. Modern quality teaching adds measurement, documented sampling and hazard control. The educational goal is to understand transformations and risk, not provide an unlicensed production protocol.',
      ],
      activity: { label: 'Apply it', prompt: 'Draw a process map from harvest to storage. At each step add one measurable variable, one possible failure and one verification record.' },
    },
    {
      id: 'stability-claims', title: 'Scope every stability claim', lede: 'Chemical change depends on starting composition, packaging, temperature, light, oxygen, moisture and time.', evidence: 'supported', sourceIds: ['nap-2024', 'grow-bible-2001'],
      paragraphs: [
        'Acidic cannabinoids can decarboxylate, THC can oxidise and volatile compounds can evaporate or react. The rate is not a universal clock. A result from an oil in sealed glass cannot be transferred directly to flower in permeable packaging or to a different temperature.',
        'A stability study needs defined batches, validated methods, planned time points and acceptance criteria. Smell, colour or trichome appearance may signal change but cannot quantify potency or exclude contamination.',
      ],
      activity: { label: 'Research lab', prompt: 'Write a stability-study question that names product, container, storage condition, time points, analytes and acceptance criteria.' },
    },
  ],
  'cannabis-across-cultures': [
    {
      id: 'historical-evidence', title: 'Build historical claims from traceable evidence', lede: 'A repeated origin story can become familiar without becoming documented.', evidence: 'supported', sourceIds: ['medgriot-2', 'grow-bible-2001'],
      paragraphs: [
        'Historical research distinguishes archaeological material, botanical remains, trade records, medical texts, colonial reports, newspapers and oral histories. Each source has preservation, translation and power biases. A colonial official’s description may reveal policy and prejudice as much as local practice.',
        'The MedGriot arrival essay provides a Nigerian narrative and a map of claims to investigate. Efifya uses it to generate archival questions, then labels which parts are documented, disputed or still unknown. Traditional use can be historically important without serving as modern clinical trial evidence.',
      ],
      activity: { label: 'Research lab', prompt: 'Choose one historical claim and create a source table with date, author, purpose, proximity to events, bias and corroborating evidence.' },
    },
    {
      id: 'avoid-two-extremes', title: 'Avoid romanticising and dismissing traditional knowledge', lede: 'Respectful study neither treats tradition as automatic clinical proof nor erases it because it is not a randomized trial.', evidence: 'supported', sourceIds: ['medgriot-2', 'nap-profile'],
      paragraphs: [
        'Traditional practices can preserve observations, meanings and community institutions. They can suggest pharmacological questions and show how people understand health. They may also contain variable preparations, changing interpretations and risks. The appropriate method depends on whether the question is historical, cultural, chemical or clinical.',
        'Community-engaged pharmacognosy offers a bridge: document the practice accurately, involve knowledge holders, analyse materials and test defined hypotheses while protecting attribution and consent. This produces richer science without collapsing cultural value into laboratory validation alone.',
      ],
      activity: { label: 'Apply it', prompt: 'Write an ethical research plan for a traditional-use claim that includes community governance, material identification and limits on commercial extraction.' },
    },
  ],
  'stigma-language-and-media': [
    {
      id: 'framing-analysis', title: 'Analyse the frame before accepting the story', lede: 'Cannabis communication often shifts between criminal threat, miracle cure, lifestyle product and social-justice symbol.', evidence: 'supported', sourceIds: ['nap-2024', 'reefer-wellness', 'medgriot-7'],
      paragraphs: [
        'Each frame selects facts and hides others. Crime framing may erase health and livelihoods; wellness framing may minimise dependence or product uncertainty; commercial framing may turn preliminary science into a sales claim. Person-first, product-specific language makes the underlying evidence easier to inspect.',
        'The MedGriot stigma essay contributes Nigerian experiences of silence, social judgment and consequences. Riley Kirk’s science communication adds a researcher-consumer perspective on how language shapes trust. These are interpretive lenses; population claims still require independent data.',
      ],
      activity: { label: 'Nigeria case study', prompt: 'Take one cannabis headline and rewrite it from four frames. Then write a fifth version that names the evidence and avoids loaded identity labels.' },
    },
    {
      id: 'misinformation-audit', title: 'Audit both prohibition and promotion claims', lede: 'Evidence literacy must work symmetrically even when the conclusion aligns with our values.', evidence: 'established', sourceIds: ['solmi-2023', 'medgriot-6', 'medgriot-7'],
      paragraphs: [
        'Warning claims should specify absolute risk, population, exposure and uncertainty. Benefit claims should identify product, comparator and outcome. Testimonials can communicate experience but cannot estimate average effects. A scientific citation is not sufficient if it studied a different compound, species, dose or endpoint.',
        'The practical audit asks: who benefits from this framing, what source is linked, does the source support the headline, what important context is missing and what would change the conclusion? Applying the same questions to advocacy, government, industry and media builds credibility.',
      ],
      activity: { label: 'Apply it', prompt: 'Score a fictional claim from 0–2 on product specificity, study fit, uncertainty, conflict disclosure and Nigerian relevance.' },
    },
  ],
  'cannabis-in-africa-and-nigeria': [
    {
      id: 'multi-route-history', title: 'Replace a single-origin story with testable routes', lede: 'Cannabis movement across Africa may involve multiple periods, trade networks and local adaptations.', evidence: 'preliminary', sourceIds: ['medgriot-2', 'medgriot-4', 'nigerian-compendium'],
      paragraphs: [
        'A robust history distinguishes claims about botanical arrival, cultivation, vocabulary, ritual use, medicinal use, commodity trade and legal control. These processes need not share one date or route. Port records, linguistic evidence, herbarium material, newspapers, court records and oral histories can support different pieces of the reconstruction.',
        'The MedGriot essays provide a coherent Nigerian narrative and identify foreign-policy questions. The Nigerian Cannabis Compendium organizes further leads. Both are treated as working maps: primary records and specialist scholarship determine which claims can be stated confidently.',
      ],
      activity: { label: 'Nigeria case study', prompt: 'Create a timeline with three columns: documented event, interpretation and unresolved question. Do not place an interpretation in the event column.' },
    },
    {
      id: 'political-economy', title: 'Study cannabis as a political economy', lede: 'The plant connects farmers, transport, informal markets, enforcement, health systems and international policy.', evidence: 'preliminary', sourceIds: ['medgriot-3', 'medgriot-5', 'medgriot-8', 'medgriot-10', 'nap-2024'],
      paragraphs: [
        'The MedGriot series asks why people grow cannabis, who buys it, how stigma affects lives and which reforms are proposed. These questions move the curriculum beyond a substance-only model. Prices, livelihood risk, policing, corruption, land, licensing and market power can influence health and justice outcomes.',
        'A Nigerian evidence programme would combine agricultural and household data, market research, arrest and court records, toxicology, health surveillance and qualitative work. Imported policy results should be used as comparisons, not automatic forecasts, because institutions and baseline markets differ.',
      ],
      activity: { label: 'Research lab', prompt: 'Design a multidisciplinary Nigerian cannabis research agenda with one question each for agriculture, public health, economics, law and community experience.' },
    },
  ],
};

export function getCurriculumEnrichments(lessonSlug: string) {
  return CURRICULUM_ENRICHMENTS[lessonSlug] ?? [];
}

export function getCurriculumCoverage(lessonSlugs: string[]) {
  const populated = lessonSlugs.filter((slug) => (CURRICULUM_ENRICHMENTS[slug]?.length ?? 0) > 0);
  return { populated: populated.length, total: lessonSlugs.length, missing: lessonSlugs.filter((slug) => !populated.includes(slug)) };
}
