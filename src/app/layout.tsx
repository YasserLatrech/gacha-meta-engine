import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'META.GG — Asian-Server Gacha Tier Lists, Foresight & Encyclopedic Database',
    template: '%s | META.GG Asian-Server Gacha Wiki',
  },
  description:
    'Verified Japanese (JP), Chinese (CN), and Taiwanese (TW) gacha game tier lists, raw skill multipliers, boss raid strategy guides, and pull savings calculators for Heaven Burns Red, Uma Musume, and Sword of Convallaria.',
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
