import { FC } from 'react'
import { StylesProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
// import '../styles/global.css'

type Props = {
  Component: FC
  pageProps: Record<string, unknown>
}

const App = ({ Component, pageProps }: Props) => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <Component {...pageProps} />
  </StylesProvider>
)

export default App
