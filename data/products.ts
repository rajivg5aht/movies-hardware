export interface Product {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  category: string;
  brand?: string;
  description: string;
  longDescription?: string;
  image: string;
  tag: string;
  featured?: boolean;
  keywords: string[];
}

export const products: Product[] = [
  {
    id: "wall-mounted-basin",
    slug: "wall-mounted-basin",
    name: "Wall-Mounted Basin",
    categoryId: "sanitaryware",
    category: "Sanitaryware",
    brand: "Selected ranges",
    description: "A clean, practical basin option for modern homes.",
    longDescription:
      "Wall-mounted wash basins designed for modern bathrooms. Available in multiple sizes and designs suitable for residential and commercial use. Contact us for available options, dimensions and pricing.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=85",
    tag: "Get price",
    featured: true,
    keywords: ["basin", "wash basin", "wall mounted", "bathroom", "sanitary"],
  },
  {
    id: "ppr-pipe-fittings-set",
    slug: "ppr-pipe-fittings-set",
    name: "PPR Pipe & Fittings",
    categoryId: "ppr-pipes-fittings",
    category: "PPR Pipes & Fittings",
    brand: "Nepatop",
    description: "For dependable residential and commercial plumbing.",
    longDescription:
      "PPR pipes and fittings from Nepatop — designed for professional-grade residential and commercial plumbing systems. Available in various sizes and configurations. Ask us about specific dimensions and requirements.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=85",
    tag: "Price on enquiry",
    featured: true,
    keywords: ["ppr", "pipe", "fittings", "nepatop", "plumbing"],
  },
  {
    id: "water-pump-range",
    slug: "water-pump-range",
    name: "Water Pump Range",
    categoryId: "water-pumps",
    category: "Water Pumps",
    brand: "Tata Water Pumps",
    description: "Talk to us about your water movement requirement.",
    longDescription:
      "Water pumps from Tata Water Pumps — suitable for domestic, agricultural and commercial water pumping needs. Multiple capacities and configurations available. Enquire about your specific requirement.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=85",
    tag: "Check availability",
    featured: true,
    keywords: ["pump", "water pump", "tata", "motor", "submersible"],
  },
  {
    id: "bathroom-mixer-set",
    slug: "bathroom-mixer-set",
    name: "Bathroom Mixer Set",
    categoryId: "bathroom-fittings",
    category: "Bathroom Fittings",
    brand: "Selected ranges",
    description: "Everyday fittings selected for finish and function.",
    longDescription:
      "Bathroom mixer sets designed for everyday use — combining good finish with practical functionality. Multiple styles and price ranges available. Contact us to explore options.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85",
    tag: "Get price",
    featured: true,
    keywords: ["mixer", "faucet", "bathroom", "fittings", "tap"],
  },
  {
    id: "floor-tiles-collection",
    slug: "floor-tiles-collection",
    name: "Floor Tiles Collection",
    categoryId: "tiles",
    category: "Tiles",
    description: "Quality floor tiles for homes and commercial spaces.",
    longDescription:
      "A range of floor tiles suitable for living rooms, kitchens, bathrooms and commercial areas. Available in various sizes, patterns and finishes. Visit our store or enquire for options.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
    tag: "Get price",
    featured: true,
    keywords: ["tiles", "floor", "ceramic", "porcelain"],
  },
  {
    id: "upvc-pipe-system",
    slug: "upvc-pipe-system",
    name: "uPVC Pipe System",
    categoryId: "upvc-pipes-fittings",
    category: "uPVC Pipes & Fittings",
    description: "Durable uPVC piping for drainage and water supply.",
    longDescription:
      "uPVC pipe systems for drainage, water supply and sewage applications. Available in multiple diameters and pressure ratings. Contact us for specifications and pricing.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    tag: "Price on enquiry",
    keywords: ["upvc", "pipe", "drainage", "pvc", "fitting"],
  },
  {
    id: "cpvc-pipe-fittings",
    slug: "cpvc-pipe-fittings",
    name: "CPVC Pipe & Fittings",
    categoryId: "cpvc-pipes-fittings",
    category: "CPVC Pipes & Fittings",
    description: "Hot and cold water plumbing systems.",
    longDescription:
      "CPVC pipes and fittings suitable for both hot and cold water plumbing applications in residential and commercial buildings. Ask us about sizes, grades and pricing.",
    image:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=900&q=85",
    tag: "Price on enquiry",
    keywords: ["cpvc", "pipe", "hot water", "fittings"],
  },
  {
    id: "hdpe-pipe-range",
    slug: "hdpe-pipe-range",
    name: "HDPE Pipe Range",
    categoryId: "hdpe-pipes",
    category: "HDPE Pipes",
    description: "HDPE piping for water supply and industrial use.",
    longDescription:
      "High-density polyethylene pipes suitable for water supply, irrigation, drainage and industrial applications. Available in various diameters. Enquire for specific requirements.",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=85",
    tag: "Price on enquiry",
    keywords: ["hdpe", "pipe", "polyethylene", "water"],
  },
  {
    id: "gi-pipe-products",
    slug: "gi-pipe-products",
    name: "GI Pipe Products",
    categoryId: "gi-pipes",
    category: "GI Pipes",
    description: "Galvanized iron piping for construction needs.",
    longDescription:
      "Galvanized iron pipes for water supply, structural supports and general construction applications. Multiple sizes available. Contact us for pricing and availability.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",
    tag: "Price on enquiry",
    keywords: ["gi", "galvanized", "iron", "pipe"],
  },
  {
    id: "ss-pipe-products",
    slug: "ss-pipe-products",
    name: "SS Pipe Products",
    categoryId: "ss-pipes",
    category: "SS Pipes",
    description: "Stainless steel pipes for corrosion-resistant applications.",
    longDescription:
      "Stainless steel pipe products designed for applications requiring high corrosion resistance and durability. Available in different grades and sizes. Contact us to discuss requirements.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85",
    tag: "Price on enquiry",
    keywords: ["ss", "stainless", "steel", "pipe", "metal"],
  },
  {
    id: "toilet-commode",
    slug: "toilet-commode",
    name: "Toilet & Commode",
    categoryId: "sanitaryware",
    category: "Sanitaryware",
    description: "Modern toilet and commode options for homes.",
    longDescription:
      "Toilet and commode options in various designs — one-piece, two-piece, wall-hung and floor-mounted. Visit our store to see available models or enquire for options.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=85",
    tag: "Get price",
    keywords: ["toilet", "commode", "bathroom", "sanitary"],
  },
  {
    id: "shower-set",
    slug: "shower-set",
    name: "Shower Set",
    categoryId: "bathroom-fittings",
    category: "Bathroom Fittings",
    description: "Shower systems for modern bathrooms.",
    longDescription:
      "Shower sets including rain showers, hand showers and complete shower systems. Multiple brands and price ranges available. Contact us for options.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85",
    tag: "Get price",
    keywords: ["shower", "bathroom", "rain shower", "fittings"],
  },
  {
    id: "wall-tiles",
    slug: "wall-tiles",
    name: "Wall Tiles",
    categoryId: "tiles",
    category: "Tiles",
    description: "Decorative and practical wall tile options.",
    longDescription:
      "Wall tiles for bathrooms, kitchens and living spaces. Available in various patterns, sizes and finishes. Visit our store to explore the collection.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
    tag: "Get price",
    keywords: ["wall", "tiles", "ceramic", "decorative"],
  },
  {
    id: "plumbing-valves",
    slug: "plumbing-valves",
    name: "Plumbing Valves",
    categoryId: "plumbing",
    category: "Plumbing",
    description: "Gate valves, ball valves and check valves.",
    longDescription:
      "A variety of plumbing valves including gate valves, ball valves, check valves and control valves. Available in brass, PVC and other materials. Enquire for sizes and pricing.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=85",
    tag: "Price on enquiry",
    keywords: ["valve", "gate valve", "ball valve", "plumbing"],
  },
  {
    id: "construction-machinery",
    slug: "construction-machinery",
    name: "Construction Machinery",
    categoryId: "machinery",
    category: "Machinery",
    description: "Equipment for construction and building projects.",
    longDescription:
      "Construction machinery and equipment for professional building projects. Contact us to discuss specific machinery requirements and availability.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",
    tag: "Check availability",
    keywords: ["machinery", "construction", "equipment", "building"],
  },
  {
    id: "urban-biogas-plant",
    slug: "urban-biogas-plant",
    name: "Urban Biogas Plant",
    categoryId: "urban-biogas",
    category: "Urban Bio Gas Plant",
    description: "Biogas solutions for homes and institutions.",
    longDescription:
      "Urban biogas plant systems for converting organic waste into usable gas energy. Suitable for homes and institutions. Contact us for details about installation and requirements.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=85",
    tag: "Enquire",
    keywords: ["biogas", "urban", "gas", "plant", "organic"],
  },
  {
    id: "upvc-window-profiles",
    slug: "upvc-window-profiles",
    name: "uPVC Window Profiles",
    categoryId: "upvc-profiles",
    category: "uPVC Profiles",
    description: "uPVC profiles for window and door frames.",
    longDescription:
      "uPVC profiles designed for window frames, door frames and related construction applications. Durable, weather-resistant and low-maintenance. Contact us for available options.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    tag: "Price on enquiry",
    keywords: ["upvc", "profile", "window", "door", "frame"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.brand && p.brand.toLowerCase().includes(q)) ||
      p.keywords.some((k) => k.includes(q))
  );
}
