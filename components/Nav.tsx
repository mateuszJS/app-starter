import ActiveLink from './ActiveLink'
import Head from 'next/head'
import useStyles from './styles'

const Nav = () => {
  const classes = useStyles()

  return (
    <nav className={classes.root}>
      <Head>
        {/* https://github.com/gokulkrishh/awesome-meta-and-manifest */}
        <title>app-starter</title>
      </Head>
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
  )
}

export default Nav
