const path = require("path");
const AutoImport = require("unplugin-auto-import/webpack");
const { resolve } = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  pageExtensions: ["_element"],
  webpack: (config) => {
    config.plugins.push(
      AutoImport({
        imports: ["react", { from: "next/router", imports: ["useRouter"] }],
        dts: resolve(__dirname, "types/auto-imports.d.ts"),
        dirs: ["components/**/index.ts"],
        eslintrc: { enabled: true },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
