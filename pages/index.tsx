import dynamic from 'next/dynamic'
import Nav from '../components/Nav'

// import useSWR from 'swr'
// https://swr.vercel.app/
// const { data, error } = useSWR('/api/user', fetch)

const DynamicComponent = dynamic(() => import('components/DynamicComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // to avoid rendering on server side
})

const IndexPage = () => (
  <>
    <Nav />
    <DynamicComponent />
    <h1>Hello, I&apos;m the index page</h1>
    <p>{new Date('2020-07-13T10:47:05.541Z').toISOString()}</p>
  </>
)

export default IndexPage
