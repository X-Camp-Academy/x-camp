/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/public',
  },
  output: 'export',
};

module.exports = nextConfig;
