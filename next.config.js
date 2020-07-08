/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  // eslint-disable-next-line no-undef
  enabled: process.env.ANALYZE === 'true',
})
// eslint-disable-next-line no-undef
module.exports = withBundleAnalyzer({})
