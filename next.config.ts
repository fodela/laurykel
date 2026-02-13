import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Cloudflare Pages configuration
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
