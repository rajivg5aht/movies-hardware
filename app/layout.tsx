import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Movies Sanitary & Tiles Trade Link | Jagati, Bhaktapur",
  description:
    "Plumbing, sanitaryware, bathroom fittings, tiles, pumps, machinery and construction products in Jagati, Bhaktapur, Nepal.",
  openGraph: {
    title: "Movies Sanitary & Tiles Trade Link | Jagati, Bhaktapur",
    description:
      "Plumbing, sanitaryware, bathroom fittings, tiles, pumps, machinery and construction products in Jagati, Bhaktapur, Nepal.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
