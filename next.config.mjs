/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

//** @type {import('next').NextConfig} */


// module.exports = {
//     reactStrictMode: false,
//     webpack5: true,
//     webpack: (config) => {
//         config.resolve.fallback = {fs: false};

//         return config;
//     },
// };

module.exports = {
    reactStrictMode: true,
    env: {
      BACKEND_URL: "https://copart-backend.onrender.com/",
    }
  }
