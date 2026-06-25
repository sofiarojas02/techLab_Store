import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images : {
    unoptimized: true,
  },
  basePath: '/techLab_Store'

};

export default nextConfig;
