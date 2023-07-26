import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
  },
}

const withMDX = require('@next/mdx')()
module.exports = withContentlayer(withMDX(nextConfig)) 
