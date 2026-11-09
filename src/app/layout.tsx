import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Star Savior Strategy Wiki — Tier List, Reroll, Characters & SSR Arcana',
    template: '%s | Star Savior Strategy Wiki',
  },
  description:
    'Complete Star Savior strategy wiki and database: Strongest Character Tier List, Reroll Guide, all 57 Saviors builds & skills, and 50 SSR Arcana ratings.',
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
