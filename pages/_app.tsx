import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import globalStyles from '../styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}

export default appWithTranslation(App)
