// next.config.mjs (fully ESM-compatible and correct)
import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'build',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);
