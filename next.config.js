/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 默认启用 Next Image 优化；如需静态托管（如 GitHub Pages）可设置 NEXT_PUBLIC_IMAGES_UNOPTIMIZED=1
    unoptimized: process.env.NEXT_PUBLIC_IMAGES_UNOPTIMIZED === "1",
  },
};

module.exports = nextConfig;
