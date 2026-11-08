import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'META.GG — Gacha Tier Lists, Character Builds & Meta Database',
    template: '%s | META.GG Gacha Wiki & Meta Database',
  },
  description:
    'Complete English gacha game tier lists, character builds, support card and weapon rankings, boss raid strategy guides, and pull calculators for Star Savior, Heaven Burns Red, Uma Musume, and Sword of Convallaria.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
