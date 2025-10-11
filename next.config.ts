/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // required for next/image on static hosting
  // optional but helps on some hosts:
  // trailingSlash: true,
};
module.exports = nextConfig;
