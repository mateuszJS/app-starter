import { ReactNode } from 'react'
import { RendererProvider, ProviderProps } from 'react-fela'
import getFelaRenderer from './getFelaRenderer'

const fallbackRenderer = getFelaRenderer()

type Props = {
  children: ReactNode
  renderer: ProviderProps['renderer']
}

const FelaProvider = ({ renderer, children }: Props) => {
  const renderer2 = renderer || fallbackRenderer
  return <RendererProvider renderer={renderer2}>{children}</RendererProvider>
}

export default FelaProvider
