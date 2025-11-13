import type { NextConfig } from "next";
import path from "path";

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src/app/sections'),
    };
    return config;
  },
};

export default nextConfig;
