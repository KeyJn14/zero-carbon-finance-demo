import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubPages ? '/zero-carbon-finance-demo' : '',
  assetPrefix: isGitHubPages ? '/zero-carbon-finance-demo/' : '',
};

export default nextConfig;

