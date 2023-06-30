/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    typedRoutes: true,
  },
  output: "export",
};

module.exports = nextConfig;
