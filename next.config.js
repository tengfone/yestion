const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["files.edgestore.dev"],
  },
  webpack: (config) => {
    // See lib/prosemirror-view-compat.js: keeps @blocknote/core 0.9 working with
    // the patched prosemirror-view (>= 1.42.3).
    config.resolve.alias = {
      ...config.resolve.alias,
      "prosemirror-view$": path.resolve(__dirname, "lib/prosemirror-view-compat.js"),
      "prosemirror-view-original$": path.join(
        path.dirname(require.resolve("prosemirror-view")),
        "index.js"
      ),
    };
    return config;
  },
};

module.exports = nextConfig;
