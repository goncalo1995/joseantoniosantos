import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // experimental: {
  //   serverActions: {
  //     bodySizeLimit: '5mb',
  //   },
  // },
  typescript: {
    // ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'pub-f07c1a625b1d42f4966b622eed2489fe.r2.dev',
      //   port: '',
      //   pathname: '/**', // Permitir qualquer caminho nesse hostname
      // },
    ],
  },
}

export default nextConfig;
