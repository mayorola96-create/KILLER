/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Direct image URLs are more dependable in mobile and in-app browsers and
    // also keep the portable preview independent from the Next image endpoint.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.phototourl.com" },
      { protocol: "https", hostname: "www.image2url.com" },
      { protocol: "https", hostname: "i.ytimg.com" }
    ]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
        ]
      }
    ];
  }
};

export default nextConfig;
