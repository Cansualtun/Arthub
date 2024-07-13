/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.pixem.org'], 
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;