/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    typedRoutes: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
