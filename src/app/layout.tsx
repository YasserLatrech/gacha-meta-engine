import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Ascalon.gg — Gacha Strategy Network, Upcoming Gacha Ranks & Game Wikis',
    template: '%s | Ascalon.gg',
  },
  description:
    'Ascalon.gg is the premier gacha strategy portal, upcoming gacha hype rankings hub, industry news radar, and 1:1 translated game wiki network.',
  icons: {
    icon: [
      { url: '/brand/ascalon-favicon.png', sizes: '64x64', type: 'image/png' },
      { url: '/brand/ascalon-logo.png', sizes: '256x256', type: 'image/png' },
    ],
    shortcut: '/brand/ascalon-favicon.png',
    apple: '/brand/ascalon-logo.png',
  },
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
