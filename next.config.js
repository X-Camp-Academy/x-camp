/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(require("unplugin-json-dts/webpack")());
    return config;
  },
  trailingSlash: true,
  experimental: {
    typedRoutes: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
