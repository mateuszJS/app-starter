import Link from 'next/link'
import Nav from 'components/Nav'
import { getDogzList } from 'lib/dogz'
import { withTranslation } from '@i18n'

type Props = {
  breeds: string[]
}

const AboutPage = ({ breeds }: Props) => (
  <>
    <Nav />
    <p className="root">Hello, I&apos;m the about page</p>
    <img src="/images/plane.png" alt="" width="100" height="100" />
    <Link href="/contact">
      <a>Contact Page</a>
    </Link>
    <ul>
      {breeds.map((breed) => (
        <li key={breed}>
          <Link href="/dogz/[breed]" as={`/dogz/${breed}`}>
            <a>{breed}</a>
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

export default withTranslation('common')(AboutPage)
