import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

const config = {
  webpack5: true,
  webpack: (config, { isServer }) => {
    // Exclude 'fs' from the fallback for both server and client builds
    config.resolve.fallback = {
      fs: false,
    };

    return config;
  },
};

const finalConfig = {
  ...nextConfig,
  ...config,
};

export default withMDX(finalConfig);

