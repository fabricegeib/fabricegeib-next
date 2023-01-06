/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["api.betaseries.com", "366.fabricegeib.com"],
  },
};

module.exports = nextConfig;
