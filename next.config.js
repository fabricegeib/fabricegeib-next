/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // basePath: "/",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.betaseries.com",
      },
    ],
  },
};

module.exports = nextConfig;
