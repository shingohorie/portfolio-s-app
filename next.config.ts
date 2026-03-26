import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.jp",
      },
      {
        protocol: "https",
        hostname: "samplelib.com",
      },
      {
        protocol: "https",
        hostname: "portfolio-s.info",
      },
    ],
  },
};

export default nextConfig;
