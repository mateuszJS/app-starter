import Nav from '../components/Nav'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: 'tomato',
  },
})

const ContactPage = () => {
  const classes = useStyles()
  return (
    <>
      <Nav />
      <p className={classes.root}>Contact</p>
    </>
  )
}

export default ContactPage
