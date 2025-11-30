import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  reactStrictMode: true,
  turbopack: {
    root: import.meta.dirname,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
};

export default withMDX(config);
