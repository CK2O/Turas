import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'], // Add any external image domains you're using
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
