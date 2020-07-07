import Nav from '../components/Nav'

const IndexPage = () => (
  <>
    <Nav />
    <h1>Hello, I'm the index page</h1>
    <p>{new Date().toISOString()}</p>
  </>
)

export default IndexPage
