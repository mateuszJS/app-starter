import { ReactNode } from 'react'
import Head from 'next/head'
import css from 'styled-jsx/css'
import { theme, Typo } from '@ui'
import ActiveLink from './ActiveLink'

type LayoutWrapperProps = {
  children: ReactNode
}

const { className: navLinkClass, styles: navLinkStyles } = css.resolve`
  & {
    color: white;
    margin-bottom: 10px;
  }
`

const LayoutWrapper = ({ children }: LayoutWrapperProps) => (
  <>
    <Head>
      {/* https://github.com/gokulkrishh/awesome-meta-and-manifest */}
      <title>app-starter</title>
    </Head>
    <div className="root">
      <nav className="nav">
        <ul>
          <li>
            <ActiveLink activeClassName="active" href="/">
              <a>
                <Typo className={navLinkClass}>Home</Typo>
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" href="/dogs">
              <a>
                <Typo className={navLinkClass}>Dogs (Static generated sites)</Typo>
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" href="/amp-example" prefetch={false}>
              <a>
                <Typo className={navLinkClass}>Amp Example</Typo>
              </a>
            </ActiveLink>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
    {navLinkStyles}
    <style jsx>{`
      .root {
        display: flex;
        height: 100vh;
      }
      .active {
        color: white;
      }
      .nav {
        background-color: ${theme.colors.accent};
        box-shadow: ${theme.shadows.normal};
        padding: 10px;
      }
      main {
        padding: 50px;
      }
      @media (max-width: 600px) {
        .text {
          color: ${theme.colors.primary};
        }
      }
    `}</style>
  </>
)

export default LayoutWrapper
