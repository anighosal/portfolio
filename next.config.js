/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"], // Ensure this is correct
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
