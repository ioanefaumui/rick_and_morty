/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rickandmortyapi.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
