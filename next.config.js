/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "fakestoreapi.com"]
  }
}

module.exports = nextConfig
