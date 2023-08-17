/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'pt', 'es'],
    defaultLocale: 'pt',
    localeDetection: true,
  }
}

module.exports = nextConfig
