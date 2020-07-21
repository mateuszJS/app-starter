import dynamic from 'next/dynamic'
import Nav from '../components/Nav'
import { Typography } from '@ui'

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
    <Typography tKey="Hello, I'm the index page" />
    <p>{new Date('2020-07-13T10:47:05.541Z').toISOString()}</p>
  </>
)

export default IndexPage
