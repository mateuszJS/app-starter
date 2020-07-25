import NextApp, { AppProps, AppContext } from 'next/app'
import { NextComponentType } from 'next'
import globalStyles from '../styles/global'
import * as i18n from '../i18n/NextI18Next'

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

type EnhancedAppCtx = {
  Component: {
    WrappedComponent: {
      defaultProps: {
        i18nNamespaces: string[]
      }
    } & NextComponentType
  } & NextComponentType
} & AppContext

App.getInitialProps = async (appContext: EnhancedAppCtx) => {
  const appProps = await NextApp.getInitialProps(appContext)
  const defaultProps = appContext.Component.WrappedComponent.defaultProps
  // ^ all pages MUST define namespacesRequired in default props
  return {
    ...appProps,
    pageProps: {
      namespacesRequired: defaultProps.i18nNamespaces,
    },
  }
}

export default i18n.appWithTranslation(App)
