/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    SITE_NAME: 'Nootropios',
    SITE_URL: 'https://nootropios.com',
    SITE_DESCRIPTION: 'Guide expert des nootropiques et boosters de testostérone naturels en France. Études cliniques, dosages, stacks et protocoles.',
  },
};

export default nextConfig;
