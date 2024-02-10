require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://voting-app.infura-ipfs.io"],
  },
};

module.exports = nextConfig;
