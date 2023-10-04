const { withContentlayer } = require("next-contentlayer");

const nextConfig = { reactStrictMode: true, swcMinify: true };

module.exports = withContentlayer(nextConfig);
