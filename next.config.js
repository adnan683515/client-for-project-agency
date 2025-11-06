/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  output: 'export',      // this enables static export
  images: {
    unoptimized: true,   // allows static export of images
  },
};

module.exports = nextConfig;
