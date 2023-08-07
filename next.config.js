/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "fakestoreapi.com", "cdn.pixabay.com"]
  }
}

module.exports = nextConfig
