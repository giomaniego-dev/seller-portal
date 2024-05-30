/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding', 'bcrypt')
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/sounds',
          outputPath: 'static/sounds',
          name: '[name].[ext]?[hash]',
        },
      },
    });
    return config
  },
  images: {
    domains: ["res.cloudinary.com", "avatars.githubusercontent.com", "lh3.googleusercontent.com", "assets.coingecko.com"],
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
  }
};

module.exports = nextConfig;