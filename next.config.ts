import type { NextConfig } from "next";
import { defaultLocale } from "./i18n/config";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    globalNotFound: true,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // The default locale lives at the bare domain; /pl is only its internal path.
  async redirects() {
    return [{ source: `/${defaultLocale}`, destination: "/", permanent: true }];
  },
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: `/${defaultLocale}` }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
