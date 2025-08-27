import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "food.com",
      },
      {
        protocol: "https",
        hostname: "www.howtocook.recipes",
      },
    ],
  },
};

export default nextConfig;
