import type { NextConfig } from "next";

const repoName = "/Pharmacian"; // ← replace with your repo name, keep leading slash

const nextConfig: NextConfig = {
  // make Next produce a fully static export
  output: "export",

  // GitHub Pages serves from a subpath, so set basePath and assetPrefix
  basePath: repoName,
  assetPrefix: repoName + "./",

  // ensure exported pages become folder/index.html so routing works on GH Pages
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  // any other options you already use (keep them here)
  // experimental: { ... }, images: { ... } etc.
};

export default nextConfig;
