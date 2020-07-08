// import Nav from '../components/Nav'

// const IndexPage = () => (
//   <>
//     <Nav />
//     <h1>Hello, I&apos;m the index page</h1>
//     <p>{new Date().toISOString()}</p>
//   </>
// )

// export default IndexPage

import { useFela, FelaComponent } from 'react-fela'
import { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => (
  <FelaComponent
    style={{
      maxWidth: 700,
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: 1.5,
    }}
    as="div"
  >
    {children}
  </FelaComponent>
)

const textRule = ({ size, theme }: { size?: number; theme: Record<string, unknown> }) => ({
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontSize: size,
  color: '#333',
})

function Text({ size = 16, children }: { size?: number; children: ReactNode }) {
  const { css } = useFela({ size })

  return <p className={css(textRule)}>{children}</p>
}

function Title({ children, size = 24 }: { size: number; children: ReactNode }) {
  const { css } = useFela()

  return <h1 className={css({ fontSize: size, color: '#555' })}>{children}</h1>
}

export default function Home() {
  return (
    <Container>
      <Title size={50}>My Title</Title>
      <Text>Hi, I am Fela.</Text>
    </Container>
  )
}
