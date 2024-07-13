/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.pixem.org'], // Add your external image source here
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;