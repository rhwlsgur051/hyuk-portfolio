import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'hyuc-portfolio'; // GitHub 레포지토리 이름

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  allowedDevOrigins: [], // ex) ngrok-free.app, local.dev 등
  output: "export",
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}` : '',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;