import React from 'react';
import type { Metadata, Viewport } from 'next';
import { SITE_NAME, SITE_URL } from '@/application/seo.service';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0b0e14',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ascalon.gg — Mobile Game Rankings, Release Calendar & Strategy Wiki',
    template: '%s | Ascalon.gg',
  },
  description:
    'Mobile game rankings, upcoming gacha release calendar with 1-vote-per-IP reader polls, App Store charts, and complete English strategy wikis.',
  applicationName: SITE_NAME,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    url: `${SITE_URL}/`,
    title: 'Ascalon.gg — Mobile Game Rankings, Release Calendar & Strategy Wiki',
    description:
      'Mobile game rankings, upcoming gacha release calendar with 1-vote-per-IP reader polls, App Store charts, and complete English strategy wikis.',
    images: [
      {
        url: `${SITE_URL}/banners/home/en_home_01.webp`,
        alt: 'Ascalon.gg Strategy Wiki Portal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ascalon.gg — Mobile Game Rankings, Release Calendar & Strategy Wiki',
    description:
      'Mobile game rankings, upcoming gacha release calendar with 1-vote-per-IP reader polls, App Store charts, and complete English strategy wikis.',
    images: [`${SITE_URL}/banners/home/en_home_01.webp`],
  },
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
