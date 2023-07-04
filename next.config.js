/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    typedRoutes: true,
  },
  output: "export",
  swcMinify: true,
};

module.exports = nextConfig;
