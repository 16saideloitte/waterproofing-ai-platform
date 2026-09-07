import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HydroShield AI | Waterproofing Intelligence Platform",
  description: "Engineering-first waterproofing diagnosis, products, testing and site intelligence.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
