import NextApp, { AppProps, AppContext } from 'next/app'
import globalStyles from '../styles/global'
import * as i18n from '../i18n'

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

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext)
  return { ...appProps }
}

export default i18n.appWithTranslation(App)
