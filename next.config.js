/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/page',
        destination: '/page',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
