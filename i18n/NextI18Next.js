/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const NextI18Next = require('next-i18next').default
const path = require('path')
// const { localeSubpaths } = require('next/config').default().publicRuntimeConfig

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['pl'],
  // localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
})
