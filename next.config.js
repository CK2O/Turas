/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'], // Add any external image domains you're using
    unoptimized: process.env.NODE_ENV === 'development'
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  compress: true
};

module.exports = nextConfig; 