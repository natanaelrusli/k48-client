/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
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
