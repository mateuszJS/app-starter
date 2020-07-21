/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([withBundleAnalyzer], {
  poweredByHeader: false,
  experimental: {
    productionBrowserSourceMaps: process.env.GENERATE_SOURCE_MAPS === 'true',
  },
})
