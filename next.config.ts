import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode
  reactStrictMode: true,
  output: 'export',
  distDir: 'build',
};

export default nextConfig;
