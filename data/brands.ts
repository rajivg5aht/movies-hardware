export interface Brand {
  id: string;
  slug: string;
  name: string;
  displayName: string;
  description: string;
  productArea: string;
  categoryIds: string[];
}

export const brands: Brand[] = [
  {
    id: "nepatop",
    slug: "nepatop",
    name: "Nepatop",
    displayName: "Nepatop",
    description:
      "Pipes and fittings products available through our store. Enquire about specific Nepatop products, sizes and availability.",
    productArea: "Pipes & Fittings",
    categoryIds: ["ppr-pipes-fittings", "plumbing"],
  },
  {
    id: "tata-water-pumps",
    slug: "tata-water-pumps",
    name: "Tata Water Pumps",
    displayName: "TATA",
    description:
      "Water pump products from Tata. Enquire about available models, capacities and pricing.",
    productArea: "Water Pumps",
    categoryIds: ["water-pumps"],
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
