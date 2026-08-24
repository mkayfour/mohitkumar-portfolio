/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

// Kept deliberately tight. Every origin below is one the site actually talks to:
//   googletagmanager / google-analytics -> GA4
//   va.vercel-scripts / vitals.vercel-insights -> Vercel Analytics
//   api.web3forms.com -> contact form submissions
// 'unsafe-inline' is required for scripts because Next.js emits inline bootstrap
// scripts (and the theme/js-class script) without nonces on a prerendered page.
// 'unsafe-eval' is dev-only: React's dev build uses eval() for debugging tooling
// and never in production, so it must not leak into the deployed policy.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://*.google-analytics.com",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws://localhost:*" : ""} https://api.web3forms.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://va.vercel-scripts.com https://vitals.vercel-insights.com`,
  "form-action 'self' https://api.web3forms.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  // Would force ws:// -> wss:// locally and break HMR, so production only.
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Belt-and-braces alongside frame-ancestors, for older browsers.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

module.exports = nextConfig;
