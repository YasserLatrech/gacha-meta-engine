import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'gametora.com' },
      { protocol: 'https', hostname: 'shared.fastly.steamstatic.com' },
    ],
  },
};

export default nextConfig;
