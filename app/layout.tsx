import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movies Sanitary & Tiles Trade Link | Jagati, Bhaktapur",
  description: "Plumbing, sanitaryware, bathroom fittings, tiles, pumps and construction products in Jagati, Bhaktapur.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
