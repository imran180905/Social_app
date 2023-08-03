/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "fakestoreapi.com", "images.unsplash.com"]
  }
}

module.exports = nextConfig
