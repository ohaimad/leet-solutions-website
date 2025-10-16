/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Reduce bundle size
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
  // Optional: Configure image optimization for production
  images: {
    unoptimized: true, // Set to false if you want Next.js image optimization
  },
};

export default nextConfig;
