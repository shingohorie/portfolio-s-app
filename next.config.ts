import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.jp'
      },
      {
        protocol: 'https',
        hostname: 'samplelib.com'
      },
      {
        protocol: 'https',
        hostname: 'portfolio-s.info'
      }
    ]
  },
  // ビルド時の並列ワーカー数を制限
  experimental: {
    workerThreads: false,
    cpus: 1
  }
};

export default nextConfig;
