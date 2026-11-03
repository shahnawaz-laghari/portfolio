import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.56.1"],
};

export default nextConfig;
