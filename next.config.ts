import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
      {
        protocol: "https",
        hostname: "*.audioscrobbler.com",
      },
      {
        protocol: "https",
        hostname: "*.last.fm",
      },
      {
        protocol: "https",
        hostname: "lastfm.freetls.fastly.net",
      },
    ],
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
