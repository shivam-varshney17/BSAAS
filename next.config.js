/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Disable SWC minify to avoid potential issues
  // Explicitly enable SWC compiler
  experimental: {
    forceSwcTransforms: true
  },
  webpack: (config, { dev, isServer }) => {
    // Improve caching in development mode
    if (dev && !isServer) {
      config.cache = {
        type: 'filesystem',
        cacheDirectory: path.resolve(process.cwd(), '.next/cache'),
        store: 'pack',
        buildDependencies: {
          config: [__filename]
        }
      };
      
      // Handle webpack errors more gracefully
      config.infrastructureLogging = {
        level: 'error' // Reduce logging noise
      };
    }
    
    return config;
  },
  output: 'export',
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Combined images configuration
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
