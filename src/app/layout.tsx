import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0b0e14',
};

export const metadata: Metadata = {
  title: {
    default: 'Ascalon.gg — Mobile Game Rankings, Release Calendar & Strategy Wiki Portal',
    template: '%s | Ascalon.gg',
  },
  description:
    'Mobile game rankings, upcoming gacha release calendar with reader votes, App Store charts, and complete game strategy wikis.',
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
