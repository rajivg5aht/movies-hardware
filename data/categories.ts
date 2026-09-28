export interface Category {
  id: string;
  slug: string;
  name: string;
  nepali: string;
  description: string;
  longDescription: string;
  image: string;
  icon: string;
  keywords: string[];
}

export const categories: Category[] = [
  {
    id: "plumbing",
    slug: "plumbing",
    name: "Plumbing",
    nepali: "प्लम्बिङ",
    description: "Pipes, fittings, valves & accessories",
    longDescription:
      "Complete range of plumbing products including pipes, fittings, valves, clamps and plumbing accessories for residential and commercial applications.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=85",
    icon: "pipe",
    keywords: ["plumbing", "pipes", "fittings", "valves", "clamps"],
  },
  {
    id: "sanitaryware",
    slug: "sanitaryware",
    name: "Sanitaryware",
    nepali: "सेनिटरीवेयर",
    description: "Toilets, basins, sinks & more",
    longDescription:
      "Quality sanitaryware products including toilets, wash basins, sinks and other sanitary products for modern bathrooms.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=85",
    icon: "shield",
    keywords: ["sanitary", "toilet", "basin", "sink", "sanitaryware"],
  },
  {
    id: "bathroom-fittings",
    slug: "bathroom-fittings",
    name: "Bathroom Fittings",
    nepali: "बाथरुम फिटिङ",
    description: "Faucets, showers & accessories",
    longDescription:
      "Bathroom fittings including faucets, showers, mixers, bathroom accessories and fittings for everyday use.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85",
    icon: "layers",
    keywords: ["bathroom", "faucet", "shower", "fittings", "mixer"],
  },
  {
    id: "tiles",
    slug: "tiles",
    name: "Tiles",
    nepali: "टायल्स",
    description: "Floor, wall & kitchen solutions",
    longDescription:
      "Floor tiles, wall tiles, kitchen tiles and decorative tile solutions for homes and commercial spaces.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
    icon: "layers",
    keywords: ["tiles", "floor", "wall", "kitchen", "ceramic"],
  },
  {
    id: "water-pumps",
    slug: "water-pumps",
    name: "Water Pumps",
    nepali: "वाटर पम्प",
    description: "Pumps & water movement solutions",
    longDescription:
      "Water pumps and related pumping solutions for residential, agricultural and commercial water movement requirements.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=85",
    icon: "pipe",
    keywords: ["pump", "water pump", "motor", "submersible"],
  },
  {
    id: "machinery",
    slug: "machinery",
    name: "Machinery",
    nepali: "मेसिनरी",
    description: "Construction-ready equipment",
    longDescription:
      "Construction and machinery-related equipment for professional building and construction projects.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",
    icon: "building",
    keywords: ["machinery", "equipment", "construction", "tools"],
  },
  {
    id: "ppr-pipes-fittings",
    slug: "ppr-pipes-fittings",
    name: "PPR Pipes & Fittings",
    nepali: "पीपीआर पाइप र फिटिङ",
    description: "Professional piping for every build",
    longDescription:
      "PPR (Polypropylene Random Copolymer) pipes and fittings for professional plumbing systems in residential and commercial buildings.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85",
    icon: "pipe",
    keywords: ["ppr", "pipe", "fittings", "plumbing", "polypropylene"],
  },
  {
    id: "upvc-pipes-fittings",
    slug: "upvc-pipes-fittings",
    name: "uPVC Pipes & Fittings",
    nepali: "युपिभिसी पाइप र फिटिङ",
    description: "Durable pipes & connection parts",
    longDescription:
      "uPVC (Unplasticized Polyvinyl Chloride) pipes and fittings — durable piping and connection solutions for various applications.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    icon: "pipe",
    keywords: ["upvc", "pipe", "fittings", "pvc", "durable"],
  },
  {
    id: "hdpe-pipes",
    slug: "hdpe-pipes",
    name: "HDPE Pipes",
    nepali: "एचडिपिइ पाइप",
    description: "Piping for multiple applications",
    longDescription:
      "HDPE (High-Density Polyethylene) piping products suitable for water supply, drainage and various industrial applications.",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=85",
    icon: "pipe",
    keywords: ["hdpe", "pipe", "polyethylene", "water supply"],
  },
  {
    id: "cpvc-pipes-fittings",
    slug: "cpvc-pipes-fittings",
    name: "CPVC Pipes & Fittings",
    nepali: "सिपिभिसी पाइप र फिटिङ",
    description: "Hot & cold water plumbing",
    longDescription:
      "CPVC (Chlorinated Polyvinyl Chloride) pipes and fittings designed for both hot and cold water plumbing systems.",
    image:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=900&q=85",
    icon: "pipe",
    keywords: ["cpvc", "pipe", "fittings", "hot water", "cold water"],
  },
  {
    id: "ss-pipes",
    slug: "ss-pipes",
    name: "SS Pipes",
    nepali: "एसएस पाइप",
    description: "Stainless-steel pipe products",
    longDescription:
      "Stainless steel pipe products for applications requiring corrosion resistance and durability.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85",
    icon: "pipe",
    keywords: ["stainless steel", "ss", "pipe", "metal"],
  },
  {
    id: "gi-pipes",
    slug: "gi-pipes",
    name: "GI Pipes",
    nepali: "जीआई पाइप",
    description: "Galvanized iron piping solutions",
    longDescription:
      "Galvanized iron piping solutions used in water supply, structural applications and various construction projects.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",
    icon: "pipe",
    keywords: ["galvanized", "gi", "iron", "pipe"],
  },
  {
    id: "upvc-profiles",
    slug: "upvc-profiles",
    name: "uPVC Profiles",
    nepali: "युपिभिसी प्रोफाइल",
    description: "Profiles and related products",
    longDescription:
      "uPVC profile products for window frames, door frames, partitions and other construction applications.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    icon: "building",
    keywords: ["upvc", "profile", "window", "door", "frame"],
  },
  {
    id: "urban-biogas",
    slug: "urban-biogas",
    name: "Urban Bio Gas Plant",
    nepali: "अर्बन बायोग्यास प्लान्ट",
    description: "Biogas-related solutions",
    longDescription:
      "Urban biogas plant solutions for homes and institutions — sustainable energy through organic waste conversion.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=85",
    icon: "building",
    keywords: ["biogas", "urban", "gas", "plant", "sustainable"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
