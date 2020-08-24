import ActiveLink from './ActiveLink'
import Head from 'next/head'
import { theme } from '@ui'

const Nav = () => (
  <>
    <Head>
      {/* https://github.com/gokulkrishh/awesome-meta-and-manifest */}
      <title>app-starter</title>
    </Head>
    <nav className="root">
      <h1 className="text">Navigation</h1>
      <ul className="nav">
        <li>
          <ActiveLink activeClassName="active" href="/">
            <a className="nav-link">Home</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName="active" href="/dogz">
            <a className="nav-link">Dogz</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName="active" href="/amp-example" prefetch={false}>
            <a className="nav-link">Amp Example</a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      .active {
        color: white;
      }
      .root {
        background-color: ${theme.colors.accent};
      }
      .text {
        color: ${theme.colors.secondary};
      }
      @media (max-width: 600px) {
        .text {
          color: ${theme.colors.primary};
        }
      }
    `}</style>
  </>
)

export default Nav
