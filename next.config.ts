import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'framerusercontent.com',
      "images.unsplash.com",
      "henrybrandlabs.com",
      "finflow.uicore.co" // Added new hostname here
    ],
  },
};

export default nextConfig;
