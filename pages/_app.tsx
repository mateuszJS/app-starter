import { FC } from 'react'
import globalStyles from '../styles/global'

type Props = {
  Component: FC
  pageProps: Record<string, unknown>
}

const App = ({ Component, pageProps }: Props) => (
  <>
    <Component {...pageProps} />
    <style jsx global>
      {globalStyles}
    </style>
  </>
)

export default App
