/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'seeklogo.com'
      },
      {
        hostname: 'ciputrahospital.com'
      }
    ]
  }
};

module.exports = nextConfig;
