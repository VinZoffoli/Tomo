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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://player.vimeo.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://*.vimeocdn.com https://maps.gstatic.com https://maps.googleapis.com",
              "media-src 'self' https://vimeo.com https://*.vimeo.com https://*.vimeocdn.com",
              "frame-src 'self' https://player.vimeo.com https://www.google.com",
              "connect-src 'self' https://vimeo.com https://*.vimeo.com https://*.vimeocdn.com https://maps.googleapis.com",
              "worker-src blob:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
