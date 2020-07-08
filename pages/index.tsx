import Nav from '../components/Nav'

const IndexPage = () => (
  <>
    <Nav />
    <h1>Hello, I&apos;m the index page</h1>
    <p>{new Date().toISOString()}</p>
  </>
)

export default IndexPage
