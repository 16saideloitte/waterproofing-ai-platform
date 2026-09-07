import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AquaShield | Waterproofing Engineering & Diagnostics',
  description: 'Engineering-led waterproofing, construction chemicals, testing, equipment and AI-assisted diagnostics.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
