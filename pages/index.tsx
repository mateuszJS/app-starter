import Nav from '../components/Nav'
// import useSWR from 'swr'
// https://swr.vercel.app/
// const { data, error } = useSWR('/api/user', fetch)

const IndexPage = () => (
  <>
    <Nav />
    <h1>Hello, I&apos;m the index page</h1>
    <p>{new Date().toISOString()}</p>
  </>
)

export default IndexPage
