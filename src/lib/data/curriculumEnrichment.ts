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
        'Ziva Cooper and colleagues’ potency review reinforces why concentration belongs in the exposure definition. Higher THC concentration can make a large dose easier to receive, but concentration alone does not reveal inhaled volume, frequency, user titration or vulnerability. Cannabis education should avoid treating “high potency” as a complete exposure measurement.',
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
      id: 'plant-function-human-claim', title: 'Follow the plant’s chemical ensemble', lede: 'Terpenes and flavonoids begin with plant biology and may also contribute to human experience through compound-specific pathways.', evidence: 'supported', sourceIds: ['entourage-2024', 'spindle-limonene-2024', 'bioactive-podcast'],
      paragraphs: [
        'Terpenes contribute to aroma and plant interactions; flavonoids contribute pigmentation and other functions. In people, relevance depends on concentration, route, metabolism, target engagement and the other compounds present. Aroma only describes one accessible layer of that chemistry.',
        'Controlled human research now provides an important proof of principle: d-limonene changed part of the acute THC response under defined conditions. That result supports serious study of the ensemble while remaining specific to the compounds, doses and outcomes tested. Expert media and lived experience help identify the next combinations worth studying.',
      ],
      activity: { label: 'Research lab', prompt: 'Choose a terpene claim and build an evidence chain from plant measurement to human outcome. Mark the links supported by human, animal, laboratory and lived-experience evidence.' },
    },
    {
      id: 'interaction-hypotheses', title: 'Turn the entourage effect into testable science', lede: 'The plant’s compounds can interact through several mechanisms; naming the mechanism makes the evidence clearer.', evidence: 'supported', sourceIds: ['entourage-2024', 'spindle-limonene-2024'],
      paragraphs: [
        'A cannabinoid–cannabinoid interaction is not the same as a cannabinoid–terpene interaction. Pharmacokinetic interaction changes absorption or metabolism; pharmacodynamic interaction changes response at a receptor, circuit or whole system. A complex extract can also differ from an isolate through additive effects rather than strict synergy.',
        'Evidence supports the broader fact that cannabis constituents can modify one another, while the map of clinically important combinations remains incomplete. The strongest claim names the compounds, ratio, route, comparator and outcome. This approach respects the entourage effect as a productive scientific framework without turning every cultivar description into a guarantee.',
      ],
      activity: { label: 'Apply it', prompt: 'Rewrite an entourage claim as a testable hypothesis naming compounds, ratio, dose, comparator, population and outcome.' },
    },
  ],
  'medical-evidence': [
    {
      id: 'condition-product-matrix', title: 'Use a condition-by-product evidence matrix', lede: 'Specificity preserves positive findings and prevents one weak result from erasing the rest of cannabis medicine.', evidence: 'established', sourceIds: ['solmi-2023', 'ahrq-2025', 'jeddi-2024'],
      paragraphs: [
        'A useful evidence table places the clinical condition on one axis and the studied product on the other. It records comparator, follow-up, symptom change, function, quality of life, unwanted effects and certainty. Evidence for a purified cannabinoid in a rare seizure disorder is strong evidence for that medicine and indication; it should not be diluted into a yes-or-no verdict on the entire plant.',
        'For chronic pain, some cannabinoid products show small average short-term improvements. Indirect trial comparison suggests effects similar in size to opioids for several outcomes and fewer discontinuations due to adverse events with cannabis, while direct long-term comparisons remain a research need.',
      ],
      activity: { label: 'Decision practice', prompt: 'Build a six-column evidence row for one condition: product, population, comparator, benefit, harm and certainty. Leave a cell blank rather than inventing data.' },
    },
    {
      id: 'patient-reported-benefit', title: 'Treat lived experience as evidence of individual response', lede: 'A person’s report is the primary evidence for what they felt, valued and changed; other designs answer different questions.', evidence: 'supported', sourceIds: ['garcia-romeu-2022', 'nap-profile', 'sri-profile', 'reefer-wellness'],
      paragraphs: [
        'Community and clinical observations reveal outcomes that formal trials may neglect: sleep quality, reduced reliance on another medicine, emotional ease, creativity, ritual meaning or the ability to participate in daily life. A respectful evidence conversation asks what changed, how much, for how long, with which product and whether the result was worth any trade-offs.',
        'Qualitative research documents substantial perceived benefit alongside problems such as cost, side effects, legal pressure and lack of informed support. Sue Sisley’s programme shows how patient reports motivate trials; Riley Kirk and Miyabe Shields show how community questions and chemical complexity can shape better science. Listening is not a courtesy added after research—it helps determine what research should measure.',
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
        'MedGriot’s emphasis on nonjudgmental community support becomes concrete here: identify trusted care, plan hydration and medical follow-up, and prepare for the return of symptoms cannabis had been helping to manage. Persistent vomiting and dehydration require medical assessment rather than a self-managed plan alone.',
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
      id: 'historical-evidence', title: 'Build a many-thousand-year timeline from traceable evidence', lede: 'Cannabis history is ancient and extensive; archaeology helps anchor particular uses to particular places and times.', evidence: 'supported', sourceIds: ['ren-2019-history', 'medgriot-2', 'grow-bible-2001'],
      paragraphs: [
        'Historical research distinguishes archaeological material, botanical remains, chemical residues, trade records, medical texts, colonial reports, newspapers and oral histories. Direct residue evidence documents psychoactive cannabis use in the Pamirs about 2,500 years ago, while fibre, seed and medicinal histories reach across broader places and periods. Each source has preservation, translation and power limits.',
        'The MedGriot arrival essay provides a Nigerian narrative and a map of claims to investigate. Efifya uses it to generate archival questions, then labels which parts are documented, disputed or still unknown. Colonial descriptions are read critically because they often reveal policy and prejudice as much as local practice.',
      ],
      activity: { label: 'Research lab', prompt: 'Choose one historical claim and create a source table with date, author, purpose, proximity to events, bias and corroborating evidence.' },
    },
    {
      id: 'avoid-two-extremes', title: 'Treat traditional knowledge as knowledge', lede: 'Longstanding use preserves observation, practice and meaning; modern research can extend it without demanding that it first imitate a randomized trial.', evidence: 'supported', sourceIds: ['medgriot-2', 'nap-profile'],
      paragraphs: [
        'Traditional practices preserve observations, meanings and community institutions. They can identify preparations, patterns and outcomes that formal science later chooses to study. Variation between preparations does not make the knowledge worthless; it tells researchers what must be documented when asking a chemical or clinical question.',
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
        'Warning claims should specify absolute risk, population, exposure and uncertainty. Benefit claims should identify product, comparator and outcome without treating the absence of a large trial as proof that people’s benefit is imaginary. Testimonials communicate experience; controlled studies estimate different things.',
        'The practical audit asks: who benefits from this framing, what source is linked, does the source support the headline, and what political or commercial history shaped the evidence base? Government, medicine, academia and prohibition institutions deserve the same conflict and bias scrutiny applied to advocacy and industry.',
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
