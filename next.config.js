/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REMOTE_HOST: process.env.REMOTE_HOST,
  },
};

module.exports = nextConfig;
