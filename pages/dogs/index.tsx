import Link from 'next/link'
import Nav from 'components/Nav'
import { getDogsList } from 'lib/dogs'
import { withTranslation } from '@i18n'
import { WithTranslation } from 'next-i18next'

type Props = {
  breeds: string[]
} & WithTranslation

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
          <Link href="/dogs/[breed]" as={`/dogs/${breed}`}>
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
  const breeds = await getDogsList()

  return {
    props: {
      breeds,
    },
  }
}

export default withTranslation('common')(AboutPage)
