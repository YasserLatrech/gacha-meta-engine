import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { SITE_NAME, SITE_URL } from '@/application/seo.service';
import { AnalyticsTelemetry } from '@/components/micro/AnalyticsAndAds';
import { ScrollToTopButton } from '@/components/micro/ScrollToTopButton';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-space',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0b0e14',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ascalon.fun — Mobile Game Rankings, Release Calendar & Strategy Wiki',
    template: '%s | Ascalon.fun',
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
    title: 'Ascalon.fun — Mobile Game Rankings, Release Calendar & Strategy Wiki',
    description:
      'Mobile game rankings, upcoming gacha release calendar with 1-vote-per-IP reader polls, App Store charts, and complete English strategy wikis.',
    images: [
      {
        url: `${SITE_URL}/banners/home/en_home_01.webp`,
        alt: 'Ascalon.fun Strategy Wiki Portal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ascalon.fun — Mobile Game Rankings, Release Calendar & Strategy Wiki',
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
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <ScrollToTopButton />
        <AnalyticsTelemetry />
      </body>
    </html>
  );
}
