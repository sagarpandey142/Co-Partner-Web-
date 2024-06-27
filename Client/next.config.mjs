import dotenv from 'dotenv';
import { ESLint } from 'eslint';
dotenv.config();

const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  images: {
    domains: ['img.freepik.com'],
  },
  eSLint:{
      ignoreDuringBuilds:true,
  }
};



export default nextConfig;
 