import createMDX from '@next/mdx'
// const withMDX = require('@next/mdx');

/** @type {import('next').NextConfig} */
const nextConfig = {images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "cdn.pixabay.com",
      port: "",
    },
  ],
},
// Configure `pageExtensions` to include markdown and MDX files
pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  // important to add for md support
  extension: /\.(md|mdx)$/,
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)

// module.exports = withMDX()(nextConfig);