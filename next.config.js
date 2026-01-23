/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static HTML export for GitHub Pages
  output: 'export',
  // Disable image optimization for static export (GitHub Pages doesn't support it)
  images: {
    unoptimized: true,
  },
  // Only set basePath for production builds (GitHub Pages)
  // This allows local dev to work at / instead of /CV-Portfolio/
  basePath: process.env.NODE_ENV === 'production' ? '/CV-Portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/CV-Portfolio/' : '',
}

module.exports = nextConfig
