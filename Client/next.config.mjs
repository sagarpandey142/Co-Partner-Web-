import dotenv from 'dotenv';
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
};

export default nextConfig;
 