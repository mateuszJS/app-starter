import Link from 'next/link'
import Nav from '../components/Nav'
import { getDogzList } from 'lib/dogz'

type Props = {
  breeds: string[]
}

const AboutPage = ({ breeds }: Props) => (
  <>
    <Nav />
    <p className="root">Hello, I&apos;m the about page</p>
    <img src="/images/plane.png" alt="" width="100" height="100" />
    <Link href="/contact">Contact Page</Link>
    <ul>
      {breeds.map((breed) => (
        <li key={breed}>
          <Link href="/dogz/[breed]" as={`/dogz/${breed}`}>
            {breed}
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      .root {
        background: green;
      }
    `}</style>
  </>
)

export const getStaticProps = async () => {
  const breeds = await getDogzList()

  return {
    props: {
      breeds,
    },
  }
}

export default AboutPage
