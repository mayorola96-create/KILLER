import type { NextConfig } from "next";
const nextConfig:NextConfig={compress:true,poweredByHeader:false,images:{remotePatterns:[{protocol:"https",hostname:"cdn.phototourl.com"},{protocol:"https",hostname:"i.ytimg.com"}],formats:["image/avif","image/webp"],minimumCacheTTL:86400}};
export default nextConfig;
