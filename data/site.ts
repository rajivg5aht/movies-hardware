export const siteConfig = {
  name: "Movies Sanitary and Tiles Trade Link",
  shortName: "Movies",
  tagline: "Sanitary & Tiles Trade Link",
  location: "Jagati, Bhaktapur, Nepal",
  locationShort: "Jagati, Bhaktapur",
  establishedYear: "2060 B.S.",
  initialCapital: "NPR 50,000",
  phones: {
    primary: "9860171706",
    secondary: "9851244171",
  },
  whatsapp: "9779860171706",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Jagati%2C%20Bhaktapur%2C%20Nepal",
  description:
    "Plumbing, sanitary, bathroom fittings, tiles, pumps, machinery and construction-related products in Jagati, Bhaktapur.",
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
