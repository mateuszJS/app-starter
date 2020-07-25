/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['pl'],
})
