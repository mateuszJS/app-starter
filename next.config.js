/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withPlugins = require('next-compose-plugins')
const { i18n } = require('./next-i18next.config')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([withBundleAnalyzer, i18n], {
  poweredByHeader: false,
  experimental: {
    productionBrowserSourceMaps: process.env.GENERATE_SOURCE_MAPS === 'true',
  },
  i18n: undefined,
})
