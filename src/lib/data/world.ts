import { FOCUS_WORLD_COUNTRIES } from './worldFocusCountries';

export type WorldRegion = 'Africa' | 'Asia' | 'Caribbean' | 'Europe' | 'North America' | 'South America' | 'Oceania';

export interface WorldSource {
  title: string;
  publisher: string;
  year: string;
  href: string;
  type: 'Peer-reviewed' | 'Official policy' | 'Primary law' | 'Archive' | 'Scholarly history';
  note: string;
}

export interface PolicyFacet {
  label: 'Adult use' | 'Home cultivation' | 'Medical access' | 'Hemp & industry';
  status: 'Regulated' | 'Limited' | 'Prohibited' | 'Mixed' | 'Licensed';
  detail: string;
}

export interface CountryTimelineItem {
  date: string;
  title: string;
  body: string;
  sourceIndex?: number;
}

export interface CountryTheme {
  title: string;
  eyebrow: string;
  body: string;
}

export interface CountryNarrativeChapter {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface CountryProfile {
  slug: string;
  name: string;
  code: string;
  region: WorldRegion;
  accent: string;
  mapPosition: { x: number; y: number };
  localNames: string[];
  headline: string;
  deck: string;
  orientation: string;
  editorialLens: string;
  policySummary: string;
  policy: PolicyFacet[];
  timeline: CountryTimelineItem[];
  themes: CountryTheme[];
  places: string[];
  sources: WorldSource[];
  connections: string[];
  fieldQuestions: string[];
  narrativeChapters?: CountryNarrativeChapter[];
  depth?: 'deep' | 'focus';
}

const reviewed = 'Policy source reviewed 19 July 2026. Rules can change and may vary by state, province or municipality.';

const DEEP_WORLD_COUNTRIES: CountryProfile[] = [
  {
    slug: 'nigeria',
    name: 'Nigeria',
    code: 'NG',
    region: 'Africa',
    accent: '#62c68b',
    mapPosition: { x: 52.2, y: 45 },
    localNames: ['cannabis', 'Indian hemp', 'igbo', 'marijuana'],
    headline: 'A living plant history shaped by trade, cultivation, colonial control and contemporary debate.',
    deck: 'Nigeria is Efifya’s home lens: a place where cannabis is widely known, locally cultivated and culturally present, yet discussed through a legal vocabulary inherited from prohibition.',
    orientation: 'A useful Nigerian history must hold several truths together. Cannabis belongs to wider African plant networks; its modern legal category was built through colonial and post-independence law; people continue to use and cultivate it; and the public conversation includes medicine, livelihoods, enforcement, stigma and reform.',
    editorialLens: 'Follow the distance between everyday knowledge of the plant and the official phrase “Indian hemp.” Ask how language, enforcement and research access shaped what Nigerians were allowed to know.',
    policySummary: `National law remains prohibition-led, with cultivation, possession and supply exposed to criminal enforcement. ${reviewed}`,
    policy: [
      { label: 'Adult use', status: 'Prohibited', detail: 'Possession and non-medical supply remain criminalized under federal drug-control law.' },
      { label: 'Home cultivation', status: 'Prohibited', detail: 'Cultivation is not authorized for ordinary personal use.' },
      { label: 'Medical access', status: 'Limited', detail: 'No broad national patient-access framework comparable with regulated medical-cannabis systems.' },
      { label: 'Hemp & industry', status: 'Limited', detail: 'No general low-THC cultivation pathway is presented as operational in the sources reviewed here.' },
    ],
    timeline: [
      { date: 'Before prohibition', title: 'Cannabis moves through African networks', body: 'Plant knowledge, trade and smoking practices developed across African regions long before Nigeria’s present borders and drug statutes.', sourceIndex: 0 },
      { date: '1935', title: 'Colonial drug control expands', body: 'The Dangerous Drugs Act placed cannabis within a British colonial system of controlled substances and record-keeping.', sourceIndex: 1 },
      { date: '1966', title: 'The Indian Hemp Act', body: 'Post-independence legislation specifically criminalized cultivation, possession, sale and related activity using the term “Indian hemp.”', sourceIndex: 1 },
      { date: '1989–present', title: 'Federal enforcement architecture', body: 'The NDLEA framework consolidated national drug-law enforcement while public arguments over research, medicine, agriculture and reform continued.', sourceIndex: 2 },
    ],
    themes: [
      { eyebrow: 'Language', title: 'A plant with several public names', body: '“Indian hemp,” cannabis, marijuana and igbo do not carry identical histories. The name selected by a court, newspaper, grower or consumer signals a particular relationship to the plant.' },
      { eyebrow: 'Land & livelihood', title: 'Cultivation exists inside prohibition', body: 'Nigeria’s climate and agricultural knowledge support cultivation, but prohibition pushes production into hidden markets and makes growers visible mainly through seizures and enforcement reports.' },
      { eyebrow: 'Knowledge politics', title: 'What research restrictions leave out', body: 'A prohibition-led system can narrow clinical training, formal plant research and honest public conversation even while lived knowledge continues outside institutions.' },
    ],
    places: ['South-west forest zones', 'North-central trade routes', 'Lagos media culture', 'Federal courts and policy institutions'],
    sources: [
      { title: 'The African Roots of Marijuana', publisher: 'Duke University Press', year: '2019', href: 'https://www.dukeupress.edu/the-african-roots-of-marijuana', type: 'Scholarly history', note: 'Centers African agency in global cannabis history; continental arguments still require local Nigerian evidence.' },
      { title: 'Indian Hemp Act, Laws of the Federation', publisher: 'Policy and Legal Advocacy Centre', year: '1966 / 2004 compilation', href: 'https://www.placng.org/lawsofnigeria/view2.php?sn=202', type: 'Primary law', note: 'A searchable statutory record; current application and conflicts with later law require qualified legal interpretation.' },
      { title: 'NDLEA Annual Report', publisher: 'National Drug Law Enforcement Agency', year: '2019', href: 'https://ndlea.gov.ng/files/2019%20ANNUAL%20REPORT.pdf', type: 'Official policy', note: 'Documents the enforcement institution’s perspective and should not be treated as a neutral account of users or growers.' },
    ],
    connections: ['south-africa', 'morocco', 'jamaica'],
    fieldQuestions: ['Which Nigerian communities hold intergenerational plant knowledge?', 'How has the phrase “Indian hemp” shaped reporting and court narratives?', 'What would locally governed medical and agricultural research need?'],
  },
  {
    slug: 'morocco',
    name: 'Morocco',
    code: 'MA',
    region: 'Africa',
    accent: '#e59b64',
    mapPosition: { x: 48.1, y: 32.2 },
    localNames: ['kif', 'hashish', 'cannabis', 'القنب الهندي'],
    headline: 'Rif cultivation, kif traditions and a new licensed economy meet in one of the world’s best-known cannabis regions.',
    deck: 'Morocco’s story is not simply about production. It is about mountain livelihoods, local knowledge, colonial controls, international markets and the contested transition into a state-licensed sector.',
    orientation: 'The Rif is central but Morocco is not culturally uniform. Kif, resin production and rural livelihoods have distinct histories. Contemporary licensing for medical, pharmaceutical and industrial uses creates new opportunities while raising questions about who benefits and whose knowledge becomes formalized.',
    editorialLens: 'Keep farmers and cooperatives in the foreground. A legal-industry story is incomplete without land, debt, amnesties, seed rules, local knowledge and the distribution of value.',
    policySummary: `Law 13-21 supports licensed medical, pharmaceutical and industrial activity through ANRAC; it is not a general adult-use framework. ${reviewed}`,
    policy: [
      { label: 'Adult use', status: 'Prohibited', detail: 'The licensed framework does not create a general non-medical adult market.' },
      { label: 'Home cultivation', status: 'Prohibited', detail: 'Cultivation requires authorization and is limited to designated provinces and supply arrangements.' },
      { label: 'Medical access', status: 'Licensed', detail: 'Medical and pharmaceutical production and product-registration pathways are developing under Law 13-21.' },
      { label: 'Hemp & industry', status: 'Licensed', detail: 'Cultivation, processing, transport and export may be licensed within the regulated system.' },
    ],
    timeline: [
      { date: 'Centuries', title: 'Kif becomes embedded in regional life', body: 'Cultivation and consumption practices developed in northern Morocco through local agriculture, exchange and changing political authority.', sourceIndex: 0 },
      { date: 'Protectorate era', title: 'Monopoly and prohibition overlap', body: 'French and Spanish colonial zones regulated cannabis differently, producing a fragmented political geography around cultivation and trade.', sourceIndex: 0 },
      { date: '1950s–1970s', title: 'Prohibition meets expanding resin markets', body: 'Formal controls intensified while international demand helped reshape some Rif production toward hashish.' },
      { date: '2021–present', title: 'Law 13-21 and ANRAC', body: 'The state created a licensed system for medical, pharmaceutical and industrial uses, with authorized cultivation in Al Hoceima, Chefchaouen and Taounate.', sourceIndex: 1 },
    ],
    themes: [
      { eyebrow: 'Place', title: 'The Rif is a living agricultural landscape', body: 'Mountain ecology, smallholder farming, family labor and market access matter as much as the plant. “Moroccan cannabis” should never flatten distinct villages and livelihoods into one export identity.' },
      { eyebrow: 'Form', title: 'Kif and hashish are related, not interchangeable', body: 'Preparations, technologies and markets changed over time. Following the product form reveals changing consumers, trade routes and economic pressures.' },
      { eyebrow: 'Transition', title: 'Who owns the regulated future?', body: 'Licensing can offer formal income and product standards, but equity depends on access to permits, cooperatives, finance, seed systems and bargaining power.' },
    ],
    places: ['Rif Mountains', 'Chefchaouen', 'Al Hoceima', 'Taounate'],
    sources: [
      { title: 'The African Roots of Marijuana', publisher: 'Duke University Press', year: '2019', href: 'https://www.dukeupress.edu/the-african-roots-of-marijuana', type: 'Scholarly history', note: 'Provides a wider African frame; Morocco’s regional histories need local-language and community sources too.' },
      { title: 'ANRAC: legal framework and authorized activities', publisher: 'Kingdom of Morocco', year: 'Current', href: 'https://www.anrac.gov.ma/en/faq/', type: 'Official policy', note: 'Explains the regulator’s system; it does not independently evaluate farmer outcomes or informal markets.' },
      { title: 'Guide to agricultural and collection practices', publisher: 'ANRAC', year: 'Current', href: 'https://www.anrac.gov.ma/en/wp-content/uploads/sites/8/2023/10/AGRICULTEURen.pdf', type: 'Official policy', note: 'Useful for licensed-production requirements, not for general legal advice.' },
    ],
    connections: ['nigeria', 'netherlands', 'south-africa'],
    fieldQuestions: ['How are legacy farmers represented inside licensing decisions?', 'Which histories differ between kif and hashish production?', 'How is value shared between farms, cooperatives, laboratories and exporters?'],
  },
  {
    slug: 'south-africa',
    name: 'South Africa',
    code: 'ZA',
    region: 'Africa',
    accent: '#f0c15d',
    mapPosition: { x: 56.7, y: 66.1 },
    localNames: ['dagga', 'insangu', 'cannabis'],
    headline: 'Dagga histories reveal African innovation, racialized control and a still-unfolding right to private use.',
    deck: 'South Africa connects deep regional plant knowledge with some of the clearest evidence that modern cannabis prohibition was built through race, labor control and international politics.',
    orientation: 'Cannabis circulated through southern African societies centuries before apartheid. The word dagga itself carries a layered linguistic and political history. Court decisions and the 2024 Act changed the private-use landscape, but commercial access, commencement rules and historical repair remain distinct questions.',
    editorialLens: 'Read privacy rights alongside the histories of Black growers, workers and healers. A constitutional victory does not automatically create an equitable market.',
    policySummary: `The 2024 Cannabis for Private Purposes Act addresses adult private possession, use and cultivation, while dealing remains prohibited and commencement details matter. ${reviewed}`,
    policy: [
      { label: 'Adult use', status: 'Limited', detail: 'Adult possession and use in private are addressed by the private-purposes framework; public use and dealing remain restricted.' },
      { label: 'Home cultivation', status: 'Limited', detail: 'Private cultivation for a private purpose is recognized, subject to the operative law and regulations.' },
      { label: 'Medical access', status: 'Licensed', detail: 'Medical products and access sit within separate medicines regulation.' },
      { label: 'Hemp & industry', status: 'Mixed', detail: 'Industrial development is an active policy goal, but private-use rights do not themselves create a general retail market.' },
    ],
    timeline: [
      { date: 'Before 1600', title: 'Cannabis spreads through southern Africa', body: 'Trade, migration and local experimentation embedded cannabis in healing, social and material practices.', sourceIndex: 0 },
      { date: 'Colonial era', title: 'Dagga becomes a racialized object of control', body: 'Restrictions were linked to governance of African labor, movement and social life—not simply plant pharmacology.', sourceIndex: 0 },
      { date: '2018', title: 'The Constitutional Court affirms private use', body: 'The court protected adult use, possession and cultivation in private, requiring legislative change.', sourceIndex: 1 },
      { date: '2024', title: 'Cannabis for Private Purposes Act', body: 'The Act creates a statutory framework for adult private purposes, child protections and record expungement while prohibiting dealing.', sourceIndex: 2 },
    ],
    themes: [
      { eyebrow: 'African knowledge', title: 'Dagga was never merely imported culture', body: 'Communities selected, cultivated, prepared and named cannabis. African expertise influenced Atlantic cannabis practices and deserves a central place in global history.' },
      { eyebrow: 'Power', title: 'Prohibition managed people as well as plants', body: 'Cannabis law was entangled with colonial and apartheid systems that classified spaces, labor and racial groups.' },
      { eyebrow: 'Repair', title: 'Privacy is only one part of reform', body: 'A durable transition also asks who receives licenses, whose records are cleared, and whether legacy cultivators can enter formal value chains.' },
    ],
    places: ['Eastern Cape', 'KwaZulu-Natal', 'Western Cape', 'Constitutional Court'],
    sources: [
      { title: 'Cannabis and Tobacco in Precolonial and Colonial Africa', publisher: 'Oxford Research Encyclopedia of African History', year: '2017', href: 'https://doi.org/10.1093/acrefore/9780190277734.013.44', type: 'Scholarly history', note: 'A continental synthesis; specific community histories require local archives and oral histories.' },
      { title: 'Minister of Justice v Prince', publisher: 'Constitutional Court of South Africa', year: '2018', href: 'https://www.saflii.org/za/cases/ZACC/2018/30.html', type: 'Primary law', note: 'The judgment establishes constitutional reasoning; subsequent legislation and regulations govern implementation.' },
      { title: 'Cannabis for Private Purposes Act 7 of 2024', publisher: 'South African Government', year: '2024', href: 'https://www.gov.za/documents/acts/cannabis-private-purposes-act-7-2024-english-sepedi-03-jun-2024', type: 'Primary law', note: 'The official page notes that commencement is to be proclaimed; verify operative provisions before relying on them.' },
    ],
    connections: ['nigeria', 'morocco', 'jamaica'],
    fieldQuestions: ['How do local names preserve plant knowledge?', 'Which communities bore the heaviest enforcement costs?', 'Can privacy reform become economic and historical repair?'],
  },
  {
    slug: 'india',
    name: 'India',
    code: 'IN',
    region: 'Asia',
    accent: '#dd8f55',
    mapPosition: { x: 71.9, y: 37.8 },
    localNames: ['bhang', 'ganja', 'charas', 'cannabis'],
    headline: 'Medicine, devotion, everyday preparation and modern drug law coexist in an unusually layered cannabis landscape.',
    deck: 'India resists simple legal and cultural labels. The plant appears across healing traditions, festivals and regional preparations, while central and state laws distinguish leaves, flowering tops, resin and licensed uses.',
    orientation: 'Bhang, ganja and charas are not interchangeable words. They describe different plant materials and cultural forms, and Indian law treats them differently. Religious association is important, but it should not eclipse regional medicine, pleasure, labor, trade and state regulation.',
    editorialLens: 'Let form and region lead. Ask what plant part, preparation, state rule and community a claim actually describes.',
    policySummary: `The NDPS framework controls cannabis resin and flowering or fruiting tops while excluding leaves and seeds from its central definition; state excise rules still shape bhang. ${reviewed}`,
    policy: [
      { label: 'Adult use', status: 'Mixed', detail: 'Ganja and charas are controlled; bhang made from excluded plant material may be regulated through state excise systems.' },
      { label: 'Home cultivation', status: 'Prohibited', detail: 'Ordinary personal cultivation is not generally authorized; licensed cultivation can exist for defined purposes.' },
      { label: 'Medical access', status: 'Limited', detail: 'Medical and scientific activity is possible through controlled pathways, but access is not one uniform national retail system.' },
      { label: 'Hemp & industry', status: 'Licensed', detail: 'States may authorize low-THC or industrial cultivation under applicable rules.' },
    ],
    timeline: [
      { date: 'Pre-modern eras', title: 'Many traditions, many preparations', body: 'Cannabis materials appear in medical, ritual and social histories, but the meaning and evidence vary by text, period and region.' },
      { date: '1893–1894', title: 'The Indian Hemp Drugs Commission', body: 'A vast colonial inquiry recorded cultivation, preparations, social practice and testimony—valuable evidence shaped by imperial categories.', sourceIndex: 0 },
      { date: '1985', title: 'The NDPS Act', body: 'Central law defined cannabis around charas and ganja while excluding leaves and seeds when not accompanied by the tops.', sourceIndex: 1 },
      { date: 'Present', title: 'A state-by-state policy mosaic', body: 'Bhang, hemp cultivation, research and enforcement can differ across state systems; “legal in India” is therefore too broad a claim.' },
    ],
    themes: [
      { eyebrow: 'Preparation', title: 'Plant part changes the legal and cultural story', body: 'A drink prepared from leaves, hand-rubbed resin and dried flowering tops belong to different practices. Precise vocabulary prevents the flattening of Indian cannabis culture.' },
      { eyebrow: 'Archive', title: 'The Commission is evidence—and an imperial document', body: 'Its thousands of pages preserve testimony rarely available elsewhere, but its questions and classifications came from a colonial state deciding how to govern.' },
      { eyebrow: 'Continuity', title: 'Tradition is living, not frozen', body: 'Contemporary consumers, Ayurvedic manufacturers, farmers, religious communities and regulators continually reinterpret older practices.' },
    ],
    places: ['Uttar Pradesh bhang systems', 'Himalayan resin traditions', 'Rajasthan and festival culture', 'State excise administrations'],
    sources: [
      { title: 'Report of the Indian Hemp Drugs Commission', publisher: 'National Library of Scotland digital archive', year: '1894', href: 'https://digital.nls.uk/indiapapers/browse/archive/74908458', type: 'Archive', note: 'A major colonial archive, not a neutral or current clinical authority.' },
      { title: 'Narcotic Drugs and Psychotropic Substances Act', publisher: 'India Code', year: '1985, as amended', href: 'https://www.indiacode.nic.in/bitstream/123456789/15354/1/ndpsact.pdf', type: 'Primary law', note: 'Central statute only; state rules, notifications and cases affect practical interpretation.' },
      { title: 'NDPS Rules and statutory materials', publisher: 'Department of Revenue / India Code', year: 'Current collection', href: 'https://www.indiacode.nic.in/handle/123456789/1362/simple-search?query=The+Narcotic+Drugs+and+Psychotropic+Substances+Rules%2C+1985&searchradio=rules', type: 'Official policy', note: 'Use alongside current state excise and agriculture rules.' },
    ],
    connections: ['china', 'jamaica', 'nigeria'],
    fieldQuestions: ['Which regional practices disappear when everything is called “cannabis”?', 'How should colonial testimony be read against local knowledge?', 'Where do state hemp and bhang rules materially differ?'],
  },
  {
    slug: 'china',
    name: 'China',
    code: 'CN',
    region: 'Asia',
    accent: '#d96757',
    mapPosition: { x: 78.9, y: 30.6 },
    localNames: ['dàmá', 'má', '大麻', 'hemp'],
    headline: 'Ancient fibre technologies and archaeological evidence sit beside one of today’s strictest drug-control systems.',
    deck: 'China demonstrates why hemp history, psychoactive use and contemporary law must be separated rather than folded into one continuous story.',
    orientation: 'Cannabis has a long material history in East and Central Asia, including fibre, seed and ritual evidence. Archaeology from Jirzankal in the Pamirs provides direct chemical evidence of cannabis burning about 2,500 years ago. That finding does not prove every popular claim about ancient Chinese medicine or establish a single origin story.',
    editorialLens: 'Mark the boundary between archaeological evidence, later textual interpretation and modern national identity. “Ancient use” is not the same thing as present legal continuity.',
    policySummary: `Marijuana is controlled under the Anti-Drug Law, with illegal cultivation, possession and trafficking prohibited; narrowly authorized medical, teaching or research activity follows special controls. ${reviewed}`,
    policy: [
      { label: 'Adult use', status: 'Prohibited', detail: 'Non-medical possession and use are not part of a regulated adult-use system.' },
      { label: 'Home cultivation', status: 'Prohibited', detail: 'Illegal cultivation of controlled cannabis plants is expressly prohibited.' },
      { label: 'Medical access', status: 'Limited', detail: 'Narcotic or psychotropic substances may be handled for authorized medical, teaching or research needs; this is not general cannabis access.' },
      { label: 'Hemp & industry', status: 'Mixed', detail: 'Industrial activity exists under subnational and national controls, distinct from psychoactive cannabis law.' },
    ],
    timeline: [
      { date: 'Neolithic onward', title: 'Hemp as material culture', body: 'Fibre, seed and plant remains show long relationships with cannabis, but each archaeological context supports a specific—not universal—claim.' },
      { date: 'c. 500 BCE', title: 'Jirzankal ritual burning', body: 'Chemical residues in wooden braziers from the Pamirs provide direct evidence of cannabis with elevated cannabinoid signals used in mortuary ritual.', sourceIndex: 0 },
      { date: '20th century', title: 'Modern drug-control categories consolidate', body: 'Plant history was separated from a state system that increasingly classified marijuana as a controlled narcotic.' },
      { date: '2008–present', title: 'Anti-Drug Law framework', body: 'National law includes marijuana among controlled narcotic drugs and prohibits illegal cultivation while preserving tightly regulated exceptions.', sourceIndex: 1 },
    ],
    themes: [
      { eyebrow: 'Archaeology', title: 'Direct evidence is powerful because it is narrow', body: 'Residue chemistry can show what was burned at one site. It cannot alone tell us the full meaning, dose, origin or continuity of the practice.' },
      { eyebrow: 'Material history', title: 'Hemp and psychoactive cannabis tell different stories', body: 'Textiles, cordage, food and ritual smoke can involve the same species but different selection, chemistry, knowledge and social purpose.' },
      { eyebrow: 'Present law', title: 'Ancient heritage does not predict modern policy', body: 'A country may hold some of the oldest cannabis evidence while maintaining stringent contemporary controls.' },
    ],
    places: ['Jirzankal Cemetery', 'Pamir highlands', 'Yunnan industrial-hemp regions', 'National drug-control institutions'],
    sources: [
      { title: 'The origins of cannabis smoking', publisher: 'Science Advances', year: '2019', href: 'https://doi.org/10.1126/sciadv.aaw1391', type: 'Peer-reviewed', note: 'Direct evidence from one mortuary site; it does not establish a single global origin or every ancient medical claim.' },
      { title: 'Anti-Drug Law of the People’s Republic of China', publisher: 'National People’s Congress', year: '2008', href: 'https://www.npc.gov.cn/zgrdw/englishnpc/Law/2009-02/20/content_1471610.htm', type: 'Primary law', note: 'Official English text; implementation can involve additional criminal, administrative and provincial rules.' },
      { title: 'Drug Administration Law', publisher: 'National Medical Products Administration', year: '2019 revision', href: 'https://english.nmpa.gov.cn/2019-09/26/c_773012.htm', type: 'Primary law', note: 'Provides the wider medicines framework, not a cannabis-specific access program.' },
    ],
    connections: ['india', 'netherlands', 'canada'],
    fieldQuestions: ['What can residues prove that texts cannot?', 'How did fibre and psychoactive varieties diverge?', 'Which modern hemp programs are distinct from adult-use policy?'],
  },
  {
    slug: 'jamaica',
    name: 'Jamaica',
    code: 'JM',
    region: 'Caribbean',
    accent: '#e6bd4e',
    mapPosition: { x: 28.6, y: 40 },
    localNames: ['ganja', 'herb', 'cannabis'],
    headline: 'Ganja became a language of spirituality, community, music and resistance with worldwide cultural reach.',
    deck: 'Jamaica’s influence is larger than its geography. The history moves from South Asian migration through Afro-Jamaican adaptation, colonial prohibition, Rastafari and a reform model that recognizes sacramental practice.',
    orientation: 'Ganja arrived in a post-emancipation society shaped by indenture and colonial labor. Jamaicans made the plant their own through language, preparation, spirituality, music and informal medicine. Rastafari is central to the story, but Jamaican use is broader than any single community.',
    editorialLens: 'Avoid turning Rastafari into decoration or tourism. Treat sacramental use, political persecution, music and reform as histories with living custodians.',
    policySummary: `The 2015 amendment decriminalized possession of small amounts, supports limited household cultivation and creates medical, therapeutic, scientific and sacramental pathways; this is not unrestricted legalization. ${reviewed}`,
    policy: [
      { label: 'Adult use', status: 'Limited', detail: 'Possession of up to two ounces is a ticketable rather than arrestable offence; broader possession and unlicensed trade remain controlled.' },
      { label: 'Home cultivation', status: 'Limited', detail: 'A household may cultivate up to five plants under the 2015 framework.' },
      { label: 'Medical access', status: 'Licensed', detail: 'The Cannabis Licensing Authority regulates medical, therapeutic and scientific industry activity.' },
      { label: 'Hemp & industry', status: 'Licensed', detail: 'Commercial handling requires the appropriate authorization and licensing.' },
    ],
    timeline: [
      { date: '19th century', title: 'Ganja travels with Indian indenture', body: 'South Asian workers brought terminology and practices that entered a changing Afro-Caribbean cultural landscape.' },
      { date: '1913', title: 'Colonial prohibition', body: 'The Ganja Law criminalized the plant, beginning a long enforcement history that disproportionately shaped poor and Black communities.' },
      { date: '1930s onward', title: 'Rastafari sacralizes herb', body: 'Ganja became part of reasoning, ritual and a broader critique of colonial power, while adherents faced policing and stigma.' },
      { date: '2015', title: 'Dangerous Drugs Act amended', body: 'Reform decriminalized small possession, recognized sacramental use and established regulated medical and scientific pathways.', sourceIndex: 1 },
    ],
    themes: [
      { eyebrow: 'Movement', title: 'A South Asian word becomes Jamaican language', body: 'The journey of “ganja” shows how migration does not simply transfer culture; communities adapt and transform it under new social conditions.' },
      { eyebrow: 'Sacrament', title: 'Herb as spiritual and political practice', body: 'For Rastafari, cannabis cannot be reduced to recreation. Its use belongs to theology, collective reasoning, identity and resistance to Babylon.' },
      { eyebrow: 'Global culture', title: 'Music carried Jamaican meanings worldwide', body: 'Reggae helped globalize ganja imagery, but commercial symbolism often stripped away the history of persecution and spiritual practice.' },
    ],
    places: ['Kingston', 'Rastafari communities', 'Blue Mountain small farmers', 'Cannabis Licensing Authority'],
    sources: [
      { title: 'Dangerous Drugs (Amendment) Act', publisher: 'Ministry of Justice, Jamaica', year: '2015', href: 'https://laws.moj.gov.jm/legislation/aop/%20/5%20of%202015%20-The%20Dangerous%20Drugs%20%28Amendment%29%20Act.pdf', type: 'Primary law', note: 'Read with regulations and later licensing guidance before making a legal decision.' },
      { title: 'A Regulated Cannabis Industry for Jamaica', publisher: 'Cannabis Licensing Authority', year: 'Policy report', href: 'https://cla.org.jm/sites/default/files/documents/BOTEC-Jamaica%20Report.v1a.pdf', type: 'Official policy', note: 'Explains the reform model from an institutional and industry perspective.' },
      { title: 'The African Roots of Marijuana', publisher: 'Duke University Press', year: '2019', href: 'https://www.dukeupress.edu/the-african-roots-of-marijuana', type: 'Scholarly history', note: 'Useful for the African and Atlantic frame; Jamaican and Rastafari voices remain essential.' },
    ],
    connections: ['india', 'nigeria', 'united-states'],
    fieldQuestions: ['How did indenture and African diasporic culture interact?', 'Whose voices explain sacramental use?', 'Who can enter the licensed industry after generations of criminalization?'],
  },
  {
    slug: 'netherlands',
    name: 'Netherlands',
    code: 'NL',
    region: 'Europe',
    accent: '#75b7d6',
    mapPosition: { x: 51.5, y: 21.1 },
    localNames: ['wiet', 'nederwiet', 'hasj', 'cannabis'],
    headline: 'The coffeeshop model made tolerance famous—and exposed the difference between tolerated sale and legal supply.',
    deck: 'Dutch cannabis policy is frequently described as legalization. Its real history is more interesting: selective non-enforcement, municipal discretion and a long-running “back-door” supply contradiction.',
    orientation: 'The Netherlands separates drugs in policy and tolerates retail sale under strict criteria, even though possession, sale and cultivation remain offences in formal law. The controlled supply-chain experiment tests whether designated growers can replace the unresolved illicit supply side in participating municipalities.',
    editorialLens: 'Use precise policy verbs: prohibited, tolerated, licensed for an experiment and regulated are not synonyms.',
    policySummary: `Small possession and coffeeshop sales are tolerated under conditions rather than generally legalized; a controlled supply-chain experiment now operates in participating municipalities. ${reviewed}`,
    policy: [
      { label: 'Adult use', status: 'Limited', detail: 'Possession of small amounts and qualified coffeeshop sales are generally not prosecuted under the toleration policy.' },
      { label: 'Home cultivation', status: 'Prohibited', detail: 'Cultivation remains illegal; small personal grows may be seized without prosecution under stated enforcement practice.' },
      { label: 'Medical access', status: 'Licensed', detail: 'Prescription cannabis sits within a separate national medicines and pharmacy system.' },
      { label: 'Hemp & industry', status: 'Licensed', detail: 'Industrial and experimental supply activities follow distinct authorization systems.' },
    ],
    timeline: [
      { date: '1912–1928', title: 'International and national controls grow', body: 'Treaty obligations and the Opium Act created the legal architecture from which later toleration would depart.' },
      { date: '1976', title: 'Policy distinction and pragmatic enforcement', body: 'Reform formalized a distinction between cannabis and higher-risk drug markets, helping the coffeeshop model develop.' },
      { date: '1990s–2010s', title: 'Municipal coffeeshop governance', body: 'National criteria and local decisions shaped where shops operated, while supply remained outside the tolerated front door.' },
      { date: '2025–present', title: 'Controlled supply-chain experiment', body: 'Participating municipalities began an experimental phase in which designated growers supply coffeeshops under tracking and product rules.', sourceIndex: 1 },
    ],
    themes: [
      { eyebrow: 'Policy language', title: 'Tolerance is a legal technique', body: 'An offence may remain on the books while prosecutors decline action when detailed conditions are met. That is different from a statutory right or general legal market.' },
      { eyebrow: 'The back door', title: 'Retail visibility hid supply uncertainty', body: 'Coffeeshops could sell tolerated cannabis but historically could not obtain it through an equivalent regulated production chain.' },
      { eyebrow: 'Experiment', title: 'Regulated supply is being tested, not assumed', body: 'The experiment creates a valuable natural policy laboratory around traceability, product information, crime, nuisance and public health.' },
    ],
    places: ['Amsterdam coffeeshops', 'Participating experiment municipalities', 'Municipal governments', 'Office of Medicinal Cannabis'],
    sources: [
      { title: 'Toleration policy regarding soft drugs and coffee shops', publisher: 'Government of the Netherlands', year: 'Current', href: 'https://www.government.nl/themes/family-health-and-care/drugs/toleration-policy-regarding-soft-drugs-and-coffee-shops', type: 'Official policy', note: 'National explanation; municipalities may apply additional rules and enforcement differs.' },
      { title: 'Controlled Cannabis Supply Chain Experiment', publisher: 'Government of the Netherlands', year: '2025–current', href: 'https://www.government.nl/themes/family-health-and-care/controlled-cannabis-supply-chain-experiment/requirements-for-coffee-shops-in-the-experiment', type: 'Official policy', note: 'Experimental rules apply only to participating municipalities and can change by phase.' },
      { title: 'Opium Act policy history', publisher: 'Government and parliamentary materials', year: '1976–current', href: 'https://www.government.nl/latest/news/2025/04/02/experimental-phase-of-the-closed-coffee-shop-chain-experiment-weed-experiment-starts-on-april-7th', type: 'Official policy', note: 'A current government narrative; independent histories add political and community context.' },
    ],
    connections: ['morocco', 'canada', 'uruguay'],
    fieldQuestions: ['What does toleration accomplish that legalization does not?', 'How did Moroccan supply connect to Dutch retail history?', 'What can the supply experiment actually measure?'],
  },
  {
    slug: 'united-states',
    name: 'United States',
    code: 'US',
    region: 'North America',
    accent: '#a79be8',
    mapPosition: { x: 22.8, y: 28.3 },
    localNames: ['cannabis', 'marijuana', 'marihuana', 'hemp'],
    headline: 'Hemp agriculture, racialized prohibition, patient movements and federal–state conflict define an unfinished transition.',
    deck: 'The United States is not one cannabis jurisdiction. State markets coexist with federal controlled-substance law, Tribal authority, local rules and a rescheduling process still in motion.',
    orientation: 'The country’s cannabis vocabulary is political. “Marihuana” entered federal statutes through a prohibition campaign entangled with anti-Mexican racism; “cannabis” has returned through medicine and reform; “hemp” occupies a distinct agricultural category. State change has repeatedly moved faster than federal law.',
    editorialLens: 'Never display one national “legal” badge. Separate federal, state, Tribal and local authority, then follow who gained and lost power through each transition.',
    policySummary: `State systems vary widely. Federal rules distinguish hemp, state-licensed medical products and broader marijuana, while an administrative rescheduling process remains active. ${reviewed}`,
    policy: [
      { label: 'Adult use', status: 'Mixed', detail: 'Many states regulate adult use, while other states prohibit it and federal law still constrains non-exempt activity.' },
      { label: 'Home cultivation', status: 'Mixed', detail: 'Rules vary by state and locality; authorization in one jurisdiction does not erase federal or cross-border restrictions.' },
      { label: 'Medical access', status: 'Mixed', detail: 'State programs are widespread, and federal scheduling treatment is changing for defined medical products while broader rulemaking continues.' },
      { label: 'Hemp & industry', status: 'Licensed', detail: 'Federal agricultural law distinguishes hemp, with a revised total-THC definition scheduled to take effect in November 2026.' },
    ],
    timeline: [
      { date: 'Colonial–19th century', title: 'Hemp as crop and commodity', body: 'Fibre cultivation belonged to an agricultural economy that also relied on enslaved and coerced labor; it should not be romanticized as a simple founding story.' },
      { date: '1937', title: 'The Marihuana Tax Act', body: 'Federal taxation and registration effectively intensified prohibition amid racialized media and enforcement narratives.' },
      { date: '1970', title: 'Controlled Substances Act', body: 'Federal law placed marijuana in Schedule I and strengthened the institutional divide between reported use, medical inquiry and legal access.' },
      { date: '1996–present', title: 'States lead a policy divergence', body: 'Medical and adult-use systems expanded state by state; federal rescheduling and hemp rules continue to evolve.', sourceIndex: 0 },
    ],
    themes: [
      { eyebrow: 'Race & language', title: '“Marihuana” was made into a political technology', body: 'The term helped prohibition campaigns associate the plant with Mexican migrants and Black music cultures. Language shaped which users appeared threatening and which uses appeared legitimate.' },
      { eyebrow: 'Patient power', title: 'Medical access was organized from below', body: 'People living with HIV/AIDS, cancer, chronic pain and other conditions built care networks and forced clinical and political institutions to respond.' },
      { eyebrow: 'Federalism', title: 'Policy change created overlapping maps', body: 'A product can be licensed by a state, restricted federally, taxed unusually and unlawful to move across a state line. The contradiction is structural, not a footnote.' },
    ],
    places: ['California patient movements', 'Federal drug-control institutions', 'State regulatory systems', 'Tribal jurisdictions'],
    sources: [
      { title: 'Marijuana Rescheduling Regulatory Actions', publisher: 'U.S. Drug Enforcement Administration', year: '2026', href: 'https://www.dea.gov/marijuana-rescheduling-regulatory-actions', type: 'Official policy', note: 'The process is active and unusually fluid; verify the latest orders and hearing record.' },
      { title: 'Legal consequences of rescheduling marijuana', publisher: 'Congressional Research Service', year: '2025', href: 'https://www.congress.gov/crs-product/LSB11105', type: 'Official policy', note: 'Federal analysis; it does not replace state, Tribal or local law.' },
      { title: 'Challenges for Clinical Cannabis and Cannabinoid Research', publisher: 'JNCI Monographs', year: '2021', href: 'https://pubmed.ncbi.nlm.nih.gov/34850896/', type: 'Peer-reviewed', note: 'Explains U.S. research barriers; regulatory conditions have continued to change.' },
    ],
    connections: ['canada', 'jamaica', 'uruguay'],
    fieldQuestions: ['How did racial categories shape federal prohibition?', 'Which patient networks changed medical access?', 'How should a comparison tool represent conflicting layers of law?'],
  },
  {
    slug: 'uruguay',
    name: 'Uruguay',
    code: 'UY',
    region: 'South America',
    accent: '#6fb8d8',
    mapPosition: { x: 34.4, y: 68.3 },
    localNames: ['cannabis', 'marihuana', 'porro'],
    headline: 'Uruguay treated regulation as a public institution, not simply permission to buy or consume.',
    deck: 'The 2013 framework made Uruguay a global policy reference by placing production and access under state control and offering three registered pathways: home growing, membership clubs and pharmacies.',
    orientation: 'Uruguay’s model grew from domestic reform movements and a government strategy focused on public health, security and separation from illicit markets. It is nationally regulated but not a tourism market: registration and residency rules matter.',
    editorialLens: 'Study institutions, not just the word legalization. Registration, supply pathways, pricing, product availability and privacy determine how the model works in daily life.',
    policySummary: `Law 19.172 regulates adult access through registered home cultivation, membership clubs and pharmacies under IRCCA oversight. ${reviewed}`,
    policy: [
      { label: 'Adult use', status: 'Regulated', detail: 'Registered adults who meet eligibility rules may access through one of the regulated pathways.' },
      { label: 'Home cultivation', status: 'Regulated', detail: 'Registered domestic cultivation is one of the statutory access routes.' },
      { label: 'Medical access', status: 'Licensed', detail: 'Medical and scientific production follow related licensing and medicines rules.' },
      { label: 'Hemp & industry', status: 'Licensed', detail: 'Non-psychoactive and industrial activity is regulated through authorization systems.' },
    ],
    timeline: [
      { date: '1974', title: 'Personal use is not itself criminalized', body: 'Earlier law distinguished personal consumption from trafficking, creating a foundation unlike simple possession prohibition.' },
      { date: '2000s–2012', title: 'Social movements build a regulation case', body: 'Grower, human-rights and drug-policy groups connected autonomy with criticism of illicit-market enforcement.' },
      { date: '2013', title: 'Law 19.172', body: 'The state assumed control and regulation of import, cultivation, production, acquisition, distribution and consumption.', sourceIndex: 0 },
      { date: '2014–2017', title: 'Three access routes take shape', body: 'Regulations operationalized home cultivation, membership clubs and pharmacy dispensing under registration systems.', sourceIndex: 1 },
    ],
    themes: [
      { eyebrow: 'Institution', title: 'Regulation is an operating system', body: 'A law’s headline matters less than whether people can register, find products, form clubs and trust the privacy and consistency of the system.' },
      { eyebrow: 'Citizenship', title: 'The model was designed for residents', body: 'Uruguay’s framework challenges cannabis-tourism assumptions and centers a domestic relationship between residents and public institutions.' },
      { eyebrow: 'Evaluation', title: 'A national experiment creates research questions', body: 'Market displacement, access, pricing, product choice and public trust can be studied over time without assuming that every outcome follows from regulation alone.' },
    ],
    places: ['Montevideo reform movements', 'IRCCA', 'Cannabis membership clubs', 'Participating pharmacies'],
    sources: [
      { title: 'Law 19.172: Regulation and Control of Cannabis', publisher: 'Presidency of Uruguay', year: '2013', href: 'https://www.gub.uy/presidencia/institucional/normativa/ley-n-19172-fecha-20122013-regulacion-control-del-cannabis', type: 'Primary law', note: 'Foundational statute; read with implementing decrees and current IRCCA rules.' },
      { title: 'Law 19.172 and regulatory decrees', publisher: 'Junta Nacional de Drogas', year: '2013–current collection', href: 'https://www.gub.uy/junta-nacional-drogas/comunicacion/publicaciones/ley-19172-decretos-reglamentarios', type: 'Official policy', note: 'Official bilingual collection; practical access conditions should be checked with IRCCA.' },
      { title: 'Current access routes', publisher: 'Junta Nacional de Drogas', year: '2026', href: 'https://www.gub.uy/junta-nacional-drogas/comunicacion/publicaciones/prevencion-del-uso-cannabis', type: 'Official policy', note: 'Current government explanation of three access routes, written from a prevention perspective.' },
    ],
    connections: ['canada', 'united-states', 'netherlands'],
    fieldQuestions: ['Which access route works for whom?', 'How do registration and privacy affect participation?', 'What outcomes belong to regulation rather than wider social change?'],
  },
  {
    slug: 'canada',
    name: 'Canada',
    code: 'CA',
    region: 'North America',
    accent: '#e07b6d',
    mapPosition: { x: 20.6, y: 18.9 },
    localNames: ['cannabis', 'marijuana', 'marihuana', 'hemp'],
    headline: 'Medical-access litigation and federal legalization produced a national framework with provincial realities.',
    deck: 'Canada combines national product and production rules with provincial and territorial control over retail, distribution, age limits and public consumption.',
    orientation: 'The Cannabis Act is a federal framework, not one identical consumer experience. It regulates production, packaging and promotion nationally while provinces and territories shape sale and local access. Indigenous jurisdiction, medical users and legacy-market participants complicate any simple success story.',
    editorialLens: 'Compare federal intent with provincial delivery. Track medical access, Indigenous sovereignty, product rules and legacy participation instead of using sales totals as the only measure.',
    policySummary: `The federal Cannabis Act regulates non-medical and medical cannabis, with provinces and territories controlling major parts of distribution and retail. ${reviewed}`,
    policy: [
      { label: 'Adult use', status: 'Regulated', detail: 'Federal law permits regulated adult access while provinces and territories set retail and many public-use rules.' },
      { label: 'Home cultivation', status: 'Mixed', detail: 'Federal law permits limited cultivation, but provincial restrictions and litigation affect the practical map.' },
      { label: 'Medical access', status: 'Regulated', detail: 'A federal medical-access framework continues under the Cannabis Act.' },
      { label: 'Hemp & industry', status: 'Licensed', detail: 'Production, processing, testing, research and industrial hemp operate through federal licensing and regulations.' },
    ],
    timeline: [
      { date: '1923', title: 'Cannabis enters federal prohibition', body: 'The plant was added to the prohibited schedule with little parliamentary debate, a decision later scrutinized by historians.' },
      { date: '2000–2001', title: 'Courts reshape medical access', body: 'Constitutional litigation helped force a federal access framework for people using cannabis for medical purposes.' },
      { date: '2018', title: 'The Cannabis Act comes into force', body: 'Canada created a national regulated framework for production and adult access while preserving medical access.', sourceIndex: 0 },
      { date: '2022–2024', title: 'The framework is formally reviewed', body: 'An expert review examined public health, youth, Indigenous communities, medical access, industry and enforcement.', sourceIndex: 1 },
    ],
    themes: [
      { eyebrow: 'Federalism', title: 'One act, many retail realities', body: 'Government stores, private stores, online systems, age limits and public-use rules differ across provinces and territories.' },
      { eyebrow: 'Medical access', title: 'Patients changed constitutional law', body: 'The medical system was not simply granted by government; litigation and patient advocacy established access as a rights question.' },
      { eyebrow: 'Equity', title: 'Legal markets do not erase legacy systems', body: 'Licensing costs, criminal records, Indigenous authority and commercial concentration shape who participates after legalization.' },
    ],
    places: ['Federal licensing system', 'Provincial retail models', 'Indigenous communities and governments', 'Medical patient networks'],
    sources: [
      { title: 'Cannabis Act', publisher: 'Justice Laws Website, Government of Canada', year: '2018, amended through 2026', href: 'https://laws-lois.justice.gc.ca/eng/acts/C-24.5/index.html', type: 'Primary law', note: 'Federal statute; provincial, territorial, municipal and Indigenous rules also matter.' },
      { title: 'Cannabis laws and regulations', publisher: 'Health Canada', year: 'Current', href: 'https://www.canada.ca/en/health-canada/services/drugs-medication/cannabis/laws-regulations.html', type: 'Official policy', note: 'Current federal entry point; it links to province-specific rules and enforcement information.' },
      { title: 'Legislative Review of the Cannabis Act', publisher: 'Health Canada Expert Panel', year: '2024', href: 'https://www.canada.ca/en/health-canada/services/drugs-medication/cannabis/laws-regulations/cannabis-act-legislative-review.html', type: 'Official policy', note: 'A government-commissioned review that includes stakeholder evidence and policy recommendations.' },
    ],
    connections: ['united-states', 'uruguay', 'netherlands'],
    fieldQuestions: ['How do provincial retail models change access?', 'What does meaningful Indigenous jurisdiction require?', 'How well does the adult-use framework preserve medical access?'],
  },
];

const DEEP_READING_SOURCES: WorldSource[] = [
  {
    title: 'History of cannabis and the endocannabinoid system',
    publisher: 'Dialogues in Clinical Neuroscience',
    year: '2020',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7605027/',
    type: 'Peer-reviewed',
    note: 'A global historical review. Its wide scope helps with chronology but cannot replace country archives or community interpretation.',
  },
  {
    title: 'Cannabis sativa: A comprehensive ethnopharmacological review of a medicinal plant with a long history',
    publisher: 'Journal of Ethnopharmacology',
    year: '2018',
    href: 'https://doi.org/10.1016/j.jep.2018.09.004',
    type: 'Peer-reviewed',
    note: 'A broad botanical and medical synthesis; local traditional-use claims should be checked against the original sources and knowledge holders.',
  },
  {
    title: 'Prevalence of Cannabis Use around the World: A Systematic Review and Meta-Analysis, 2000–2024',
    publisher: 'China CDC Weekly',
    year: '2024',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11196877/',
    type: 'Peer-reviewed',
    note: 'Comparative prevalence estimates are sensitive to survey wording, sampling, time period, legality and under-reporting.',
  },
];

function enrichDeepProfile(country: CountryProfile): CountryProfile {
  const vocabulary = country.localNames.join(', ');
  const connections = country.connections
    .map((slug) => DEEP_WORLD_COUNTRIES.find((item) => item.slug === slug)?.name ?? slug)
    .join(', ');

  return {
    ...country,
    depth: 'deep',
    timeline: [
      ...country.timeline,
      {
        date: 'Across periods',
        title: 'Vocabulary records continuity and change',
        body: `${vocabulary} are not automatic synonyms. Their histories can distinguish plant form, community, register, migration and political framing in ${country.name}.`,
      },
      {
        date: 'Research now',
        title: 'Living knowledge continues beyond the archive',
        body: `Growers, patients, healers, families, artists, scientists and spiritual communities continue to revise what is known about cannabis in ${country.name}. Ethical research should involve them as knowledge partners.`,
      },
    ],
    themes: [
      ...country.themes,
      {
        eyebrow: 'Language',
        title: 'Names carry cultural history',
        body: `Study ${vocabulary} in their actual languages, generations and settings. Translation can reveal expertise, but it can also erase important distinctions.`,
      },
      {
        eyebrow: 'Plant forms',
        title: 'One species supports many material histories',
        body: 'Fibre, seed, food, flower, resin, tincture and contemporary extracts involve different techniques, effects, economies and bodies of evidence.',
      },
      {
        eyebrow: 'Evidence',
        title: 'Community knowledge completes the record',
        body: 'Law, archaeology, botany and clinical research answer different questions. Oral history and lived experience reveal meanings and practices that institutions frequently failed to record.',
      },
    ],
    places: [
      ...country.places,
      `${country.name} national, university and agricultural collections`,
      'Community, patient, grower and oral-history networks',
    ],
    sources: [...country.sources, ...DEEP_READING_SOURCES].filter(
      (source, index, list) => list.findIndex((item) => item.href === source.href) === index,
    ),
    fieldQuestions: [
      ...country.fieldQuestions,
      `How do ${vocabulary} differ by place, preparation and generation?`,
      'Which claims concern fibre, seed, flower, resin, food, medicine or ritual?',
      `Which routes connect ${country.name} with ${connections || 'neighboring and diasporic communities'}?`,
      'Where do official records measure enforcement rather than actual use, benefit, cultivation or cultural meaning?',
      'What would locally governed and community-accountable research look like?',
    ],
  };
}

const BASE_WORLD_COUNTRIES: CountryProfile[] = [
  ...DEEP_WORLD_COUNTRIES.map(enrichDeepProfile),
  ...FOCUS_WORLD_COUNTRIES,
];

function titleFromSlug(slug: string) {
  return slug
    .split('-')
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(' ');
}

function milestoneParagraph(items: CountryTimelineItem[]) {
  return items
    .map((item) => `${item.date}: ${item.title}. ${item.body}`)
    .join(' ');
}

function themeParagraph(items: CountryTheme[]) {
  return items
    .map((item) => `${item.title}: ${item.body}`)
    .join(' ');
}

function buildNarrativeChapters(country: CountryProfile): CountryNarrativeChapter[] {
  const vocabulary = country.localNames.join(', ');
  const places = country.places.join('; ');
  const connections = country.connections.map(titleFromSlug).join(', ');
  const firstHalf = country.timeline.slice(0, Math.ceil(country.timeline.length / 2));
  const secondHalf = country.timeline.slice(Math.ceil(country.timeline.length / 2));
  const firstThemes = country.themes.slice(0, Math.ceil(country.themes.length / 2));
  const secondThemes = country.themes.slice(Math.ceil(country.themes.length / 2));
  const sourceDesk = country.sources
    .slice(0, 6)
    .map((source) => `${source.publisher} (${source.year})`)
    .join(', ');

  return [
    {
      eyebrow: 'Chapter 01 · Foundations',
      title: `Beginning the cannabis history of ${country.name}`,
      paragraphs: [
        `${country.deck} ${country.orientation} This is the necessary starting point because a country profile can easily become misleading when one famous law, product or cultural image is allowed to stand in for an entire relationship with the plant. The history must hold cultivation, material use, medicine, social life, cultural expression and political control in the same frame while still distinguishing them from one another.`,
        `The modern state of ${country.name} is a useful organizing unit, but it is not the beginning of the story. Communities, languages, ecological zones and trade routes often predate the border, while some cannabis practices arrived much later through migration, empire, labor or global markets. The places identified in this dossier—${places}—therefore function as research entry points rather than proof that every part of the country shared one continuous tradition.`,
      ],
    },
    {
      eyebrow: 'Chapter 02 · Chronology',
      title: 'Reading change across time',
      paragraphs: [
        `${milestoneParagraph(firstHalf)} Taken together, these earlier milestones show why “when did cannabis arrive?” is rarely answered by one date. A seed, a fibre textile, a medical recipe, a resin preparation and evidence of smoke do not establish the same activity. Each item must be dated, located and interpreted on its own terms before it can support a broader national narrative.`,
        `${milestoneParagraph(secondHalf)} These later transitions are equally important because continuity under a new law is not the same as an unchanged tradition. People adapt vocabulary, cultivation, exchange, therapeutic practice and public identity when institutions alter what may be grown, researched, prescribed, sold or discussed. The timeline is therefore a record of negotiation as much as a sequence of official events.`,
      ],
    },
    {
      eyebrow: 'Chapter 03 · Language',
      title: 'Names reveal different relationships with the plant',
      paragraphs: [
        `Vocabulary associated with ${country.name} includes ${vocabulary}. These terms can point to a plant part, preparation, language community, period, social register or political judgment. They should not be translated automatically into one modern English category. A word used for fibre hemp may not describe flower or resin; a ceremonial or medicinal name may carry obligations and meanings that disappear when it is rendered simply as “cannabis.”`,
        `Language also records movement and power. A borrowed word may preserve a history of trade or migration, while an administrative term may reveal how colonial or national institutions classified people as much as plants. Researchers should ask who uses each name, who avoids it, how pronunciation and meaning vary by region, and whether newspapers, police, doctors, growers, patients and spiritual communities use the same vocabulary for the same material.`,
      ],
    },
    {
      eyebrow: 'Chapter 04 · Plant and material life',
      title: 'Fibre, seed, flower and resin are not one history',
      paragraphs: [
        `${themeParagraph(firstThemes)} These themes show that Cannabis is not only an abstract drug-policy category. It is a biological organism handled through specific skills: selecting seed, reading soil and season, separating plants, harvesting fibre or inflorescence, drying, storing, cooking, pressing, preparing medicine and sharing knowledge about quality. The techniques that matter in one community may be absent or understood differently in another.`,
        `Material form changes both effect and evidence. Seed and oil can belong to food and household economies; stalk fibre can connect farms to textiles, rope and shipping; flower and resin depend on different cultivation and processing choices; tinctures, oils and standardized medicines add pharmaceutical systems and dose measurement. A responsible account of ${country.name} names the form being discussed instead of treating every historical reference as evidence for a single contemporary product.`,
      ],
    },
    {
      eyebrow: 'Chapter 05 · Knowledge and culture',
      title: 'Medicine, spirituality, creativity and everyday experience',
      paragraphs: [
        `${themeParagraph(secondThemes)} These interpretive lenses make space for knowledge that formal institutions often treated as anecdote or failed to record at all. Lived experience does not replace controlled clinical research, but it can identify effects, preparations, questions and patterns that deserve study. Likewise, a laboratory result cannot by itself explain a ritual obligation, musical language, household remedy or relationship between a grower and a particular landscape.`,
        `Benefits and limitations should therefore be discussed with precision rather than dismissal or romanticization. Cannabis may be used for symptom relief, rest, appetite, creativity, sociability, spiritual practice or other personally meaningful purposes, and individuals can respond differently to the same labeled product. Historical use establishes significance and research value; it does not automatically establish the efficacy, composition or dose of every modern preparation.`,
      ],
    },
    {
      eyebrow: 'Chapter 06 · Routes',
      title: `${country.name} belongs to a connected world`,
      paragraphs: [
        `The strongest comparative routes from this profile lead toward ${connections || 'neighboring and diasporic communities'}. A connection may follow ecology, seed, fibre, medicine, labor migration, pilgrimage, seafaring, music, empire, law or contemporary commerce. These routes explain similarities without assuming that one country merely copied another, and they help identify the people who carried knowledge even when governments received credit in the written archive.`,
        `Comparison must still preserve difference. A shared word does not prove that the same preparation moved along the same route, and similar laws may have been enforced very differently. The useful question is not simply whether ${country.name} resembles its neighbors, but which people, materials and institutions created each resemblance, when it emerged, and what changed as knowledge crossed a linguistic, ecological or political boundary.`,
      ],
    },
    {
      eyebrow: 'Chapter 07 · Power',
      title: 'Prohibition changed knowledge as well as law',
      paragraphs: [
        `${country.policySummary} Legal classification affects more than the possibility of arrest. It determines which crops receive agricultural support, which preparations can be studied, which patients can speak openly, which cultural practices are stigmatized, and which businesses can enter a formal market. When enforcement is unequal, the official archive can make targeted communities appear uniquely associated with a plant that was actually used more widely.`,
        `Government records remain valuable, but they must be read for what they measure. Arrests measure police activity; seizures measure intercepted material and reporting practices; eradication measures state action against crops. None of those figures directly establishes prevalence, benefit, cultural importance or the total scale of cultivation. The legal history of ${country.name} should therefore be read beside testimony from the people who lived under, resisted, interpreted or benefited from those rules.`,
      ],
    },
    {
      eyebrow: 'Chapter 08 · Research frontier',
      title: 'Building a fuller and more accountable record',
      paragraphs: [
        `The source desk for ${country.name} includes work from ${sourceDesk}. These sources contribute different forms of authority: peer review can clarify method, archives can establish historical sequence, official documents can define institutional action, and community testimony can recover practice and meaning. Every source also has limits. A global review may flatten local difference, a colonial file may reproduce prejudice, and a contemporary survey may be shaped by stigma, legality and under-reporting.`,
        `The next stage is locally governed research: digitizing local-language archives, recording oral history with consent, documenting cultivar and preparation knowledge without extracting it from communities, and connecting historical claims to transparent citations. The questions listed later in this dossier are not signs that nothing is known. They identify where ${country.name} can move from a broad historical focus toward a deeper account authored with growers, patients, scholars, families, artists, healers and spiritual communities.`,
      ],
    },
    {
      eyebrow: 'Chapter 09 · Plant science',
      title: 'Connecting historical knowledge with contemporary cannabis science',
      paragraphs: [
        `Historical names and reputations cannot be translated directly into a modern chemical profile. Cannabinoids, terpenes, flavonoids and other constituents vary with genetics, environment, plant maturity, storage and preparation. THC is psychoactive, but concentration, route, dose, tolerance and the presence of other compounds shape experience. The proposed entourage effect asks whether constituents can interact in meaningful ways; that is a productive scientific question, not permission to assume that every whole-plant product will produce a predictable therapeutic outcome.`,
        `The endocannabinoid system provides an important framework for studying how cannabinoid signaling relates to processes such as pain, appetite, stress, memory, sleep and immune function. It also explains why responses can vary among people and contexts. In ${country.name}, historical and lived knowledge can help researchers choose better questions, while analytical chemistry and well-designed clinical studies can clarify composition, dose and outcome. Neither knowledge system should be used to dismiss the other.`,
      ],
    },
    {
      eyebrow: 'Chapter 10 · Guided synthesis',
      title: 'How to study this dossier as a complete curriculum',
      paragraphs: [
        `Begin with chronology, then return to vocabulary and plant form before drawing a conclusion. Compare the timeline with the places and connected-country routes; identify which claims are country-specific and which supply regional background. Next, read the source limitations rather than only the titles. This sequence prevents an official policy date from replacing cultural history and prevents an evocative ancient reference from being stretched into a claim about a modern product.`,
        `A strong final interpretation of ${country.name} should be able to name what is well documented, what remains plausible but uncertain, who produced the available evidence, and who is still missing from it. It should recognize benefit and cultural significance without declaring every use effective, discuss risk without treating prohibition as neutral science, and distinguish lived experience from universal prediction. That balance is the standard this atlas uses for a cannabis-literate account.`,
      ],
    },
  ];
}

export const WORLD_COUNTRIES: CountryProfile[] = BASE_WORLD_COUNTRIES.map((country) => ({
  ...country,
  narrativeChapters: buildNarrativeChapters(country),
}));

export const WORLD_REGIONS: Array<'All' | WorldRegion> = ['All', 'Africa', 'Asia', 'Caribbean', 'Europe', 'North America', 'South America', 'Oceania'];

export function getWorldCountry(slug: string) {
  return WORLD_COUNTRIES.find((country) => country.slug === slug);
}

export function getConnectedCountries(country: CountryProfile) {
  return country.connections
    .map((slug) => getWorldCountry(slug))
    .filter((item): item is CountryProfile => Boolean(item));
}
