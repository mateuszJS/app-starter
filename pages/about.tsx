import Link from 'next/link'
import Nav from '../components/Nav'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: 'green',
  },
})

const AboutPage = () => {
  const classes = useStyles()

  return (
    <>
      <Nav />
      <p className={classes.root}>Hello, I&apos;m the about page</p>
      <img src="/images/plane.png" alt="" width="100" height="100" />
      <Link href="/contact">Contact Page</Link>
    </>
  )
}

export default AboutPage
