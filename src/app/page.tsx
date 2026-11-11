import React from 'react';
import type { Metadata } from 'next';
import { AscalonHomeMacro } from '@/components/macro/AscalonHomeMacro';
import { JsonLd } from '@/components/micro/JsonLd';
import { buildHomePortalJsonLd, buildPageMetadata } from '@/application/seo.service';
import { getHomePortalData } from '@/di/container';

export const revalidate = 300;

export const metadata: Metadata = buildPageMetadata({
  title: 'Ascalon.gg — Mobile Game Rankings, Release Calendar & Strategy Wiki',
  absoluteTitle: true,
  description:
    'Mobile & gacha game strategy portal featuring complete English game wikis, upcoming gacha release calendar with reader votes, and daily App Store charts.',
  path: '/',
  ogImage: '/banners/home/en_home_01.webp',
  ogImageAlt: 'Ascalon.gg Mobile Game Rankings & Strategy Wiki Portal',
  type: 'website',
  keywords: [
    'gacha tier list',
    'upcoming gacha games',
    'mobile game rankings',
    'Star Savior wiki',
    'gacha release calendar',
    'Ascalon.gg',
  ],
});

export default function AscalonHomePage() {
  const portalData = getHomePortalData();

  return (
    <>
      <JsonLd data={buildHomePortalJsonLd()} />
      <AscalonHomeMacro portalData={portalData} />
    </>
  );
}
