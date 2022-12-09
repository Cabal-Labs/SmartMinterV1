/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ALCHEMY: process.env.ALCHEMY,
    NFTSTORAGE: process.env.NFTSTORAGE
  }
}

module.exports = nextConfig
