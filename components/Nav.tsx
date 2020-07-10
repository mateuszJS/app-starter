import ActiveLink from './ActiveLink'
import Head from 'next/head'

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
          <ActiveLink activeClassName="active" href="/about">
            <a className="nav-link">About</a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      .root {
        background-color: #ccc;
      }
      .text {
        color: purple;
      }
    `}</style>
  </>
)

export default Nav
