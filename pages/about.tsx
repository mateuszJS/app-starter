import Link from 'next/link'
import Nav from '../components/Nav'

const AboutPage = () => (
  <>
    <Nav />
    <p className="root">Hello, I&apos;m the about page</p>
    <img src="/images/plane.png" alt="" width="100" height="100" />
    <Link href="/contact">Contact Page</Link>
    <style jsx>{`
      .root {
        background: green;
      }
    `}</style>
  </>
)

export default AboutPage
