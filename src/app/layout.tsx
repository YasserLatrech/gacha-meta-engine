import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Ascalon.gg — Gacha Strategy Wiki, Tier Lists & Translated Databases',
    template: '%s | Ascalon.gg',
  },
  description:
    'Ascalon.gg is the premier gacha strategy database and tier list hub. Explore our complete 100% translated Star Savior Wiki: Strongest Tier List, Reroll Guide, 57 Saviors builds & skills, and 83 Arcana cards.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
