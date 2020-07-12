import { AppProps } from 'next/app'

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

export default App
