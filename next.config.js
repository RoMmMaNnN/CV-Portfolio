/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static HTML export for GitHub Pages
  output: 'export',
  // Disable image optimization for static export (GitHub Pages doesn't support it)
  images: {
    unoptimized: true,
    // Allow external CDN images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'www.svgrepo.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'www.gmpuzzles.com',
      },
      {
        protocol: 'https',
        hostname: 'images.ireland.com',
      },
    ],
  },
  // Only set basePath for production builds (GitHub Pages)
  // This allows local dev to work at / instead of /CV-Portfolio/
  basePath: process.env.NODE_ENV === 'production' ? '/CV-Portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/CV-Portfolio/' : '',
}

module.exports = nextConfig
