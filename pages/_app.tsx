import { FC } from 'react'
import { StylesProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import FelaProvider from '../components/FelaProvider'
import { ProviderProps } from 'react-fela'
// import '../styles/global.css'

type Props = {
  Component: FC
  pageProps: Record<string, unknown>
  renderer: ProviderProps['renderer']
}

const App = ({ Component, pageProps, renderer }: Props) => (
  <FelaProvider renderer={renderer}>
    <Component {...pageProps} />
  </FelaProvider>
)

export default App
