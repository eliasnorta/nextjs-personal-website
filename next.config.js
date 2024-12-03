/** @type {import('next').NextConfig} */
const nextConfig = {images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "cdn.pixabay.com",
      port: "",
    },
    {
      protocol: "https",
      hostname: "images.unsplash.com",
      port: "",
    },
  ],
},
// Configure `pageExtensions` to include markdown and MDX files
pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}
