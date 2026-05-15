import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://player.vimeo.com https://www.opentable.com https://*.opentable.com http://www.opentable.com http://*.opentable.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.opentable.com https://*.opentable.com http://www.opentable.com http://*.opentable.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://*.vimeocdn.com https://maps.gstatic.com https://maps.googleapis.com https://*.opentable.com http://*.opentable.com",
              "media-src 'self' https://vimeo.com https://*.vimeo.com https://*.vimeocdn.com",
              "frame-src 'self' https://player.vimeo.com https://www.google.com https://www.opentable.com https://*.opentable.com",
              "connect-src 'self' https://vimeo.com https://*.vimeo.com https://*.vimeocdn.com https://maps.googleapis.com https://www.opentable.com https://*.opentable.com http://www.opentable.com http://*.opentable.com",
              "worker-src blob:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
