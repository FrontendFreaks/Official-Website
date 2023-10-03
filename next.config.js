const { withContentlayer } = require("next-contentlayer");

const nextConfig = { output: "export", reactStrictMode: true, swcMinify: true };

module.exports = withContentlayer(nextConfig);
