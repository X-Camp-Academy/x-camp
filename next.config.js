/** @type {import('next').NextConfig} */
const nextConfig = {
  exportTrailingSlash: true,
  experimental: {
    typedRoutes: true,
  },
  output: 'export',
};

module.exports = nextConfig;
