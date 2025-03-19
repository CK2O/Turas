/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'], // Add any external image domains you're using
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig; 