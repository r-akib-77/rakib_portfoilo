import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Required for Cloudflare Pages — CF Workers don't support Next.js image
    // optimisation endpoint. Images are served directly from R2 CDN (already
    // optimised client-side to WebP before upload).
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "*.r2.dev" },
      { protocol: "https", hostname: "*.cloudflarestorage.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
