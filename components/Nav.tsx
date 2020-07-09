import ActiveLink from './ActiveLink'
import Head from 'next/head'
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
  },
  text: {
    color: 'purple',
  },
})

const Nav = () => {
  const classes = useStyles()

  return (
    <>
      <Head>
        {/* https://github.com/gokulkrishh/awesome-meta-and-manifest */}
        <title>app-starter</title>
      </Head>
      <nav className={classes.root}>
        <h1 className={classes.text}>Navigation</h1>
        <Button>Button</Button>
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
    </>
  )
}

export default Nav
