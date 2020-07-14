/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withPlugins = require('next-compose-plugins')
// const withSourceMaps = require('@zeit/next-source-maps')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  // eslint-disable-next-line no-undef
  enabled: process.env.ANALYZE === 'true',
})

const withSourceMaps = require('@zeit/next-source-maps')({
  webpack(config, options) {
    return config
  },
})

module.exports = {
  ...withPlugins([withSourceMaps, withBundleAnalyzer]),
  poweredByHeader: false,
}
