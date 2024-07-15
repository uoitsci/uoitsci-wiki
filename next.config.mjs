import nextMdx from '@next/mdx'
import remarkGfm from 'remark-gfm'

const withMdx = nextMdx({
  // By default only the `.mdx` extension is supported.
  extension: /\.mdx?$/,
  options: {
    // More MDX Options
    remarkPlugins: [remarkGfm],
  }
})

const nextConfig = withMdx({
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  output: "standalone",
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // This is a permanent redirect (HTTP 301)
      },
    ];
  },
})

export default nextConfig
