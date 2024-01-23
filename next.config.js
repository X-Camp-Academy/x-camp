/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(require('unplugin-json-dts/webpack')());
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  trailingSlash: true,
  experimental: {
    typedRoutes: true
  },
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ['error', 'warn']
    }
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;
