import { FC, useEffect } from 'react'
// import { StylesProvider } from '@material-ui/core/styles'
// import CssBaseline from '@material-ui/core/CssBaseline'
import '../styles/global.css'

type Props = {
  Component: FC
  pageProps: Record<string, unknown>
}

const App = ({ Component, pageProps }: Props) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles)
  })

  return (
    // <StylesProvider injectFirst>
    // <CssBaseline />
    <Component {...pageProps} />
    // </StylesProvider>
  )
}

export default App
