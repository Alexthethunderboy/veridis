export interface SearchRegistryItem {
  title: string;
  path: string;
  description: string;
  keywords: string[];
}

export const SEARCH_REGISTRY: SearchRegistryItem[] = [
  {
    title: "Learn Hub (Education)",
    path: "/edu",
    description: "Botanical foundations, cultivation practices, and core educational materials on global cannabis.",
    keywords: ["learn", "education", "grow", "cultivation", "botany", "plant", "guide", "foundations", "hub"]
  },
  {
    title: "Policy Intelligence (Law & Advocacy)",
    path: "/law",
    description: "Global policy shifts, live intelligence feeds, and Nigerian legislative tracking.",
    keywords: ["law", "policy", "advocacy", "legal", "legislation", "ondo", "pilot", "ndlea", "intel", "news", "timeline", "shift"]
  },
  {
    title: "Clinical Sciences",
    path: "/science",
    description: "Deep dive into cannabinoids, terpenes, flavonoids, and the endocannabinoid system.",
    keywords: ["science", "clinical", "ecs", "endocannabinoid", "receptors", "anandamide", "2-ag", "molecular", "terpene", "flavonoid", "thc", "cbd", "cbg", "cbn"]
  },
  {
    title: "Unlearn Framework",
    path: "/unlearn",
    description: "Deconstructing prohibition propaganda, combating stigma, and replacing it with science.",
    keywords: ["unlearn", "stigma", "propaganda", "myth", "gateway", "colorado", "synthetic", "deconstruct", "truth", "education", "campaign"]
  },
  {
    title: "Global Strain Directory",
    path: "/strains",
    description: "Explore the chemical architecture and genetic lineage of the world's iconic cannabis varieties.",
    keywords: ["strains", "directory", "catalogue", "botany", "genetics", "lineage", "landrace", "indica", "sativa", "hybrid"]
  }
];
