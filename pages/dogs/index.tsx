import NextLink from 'next/link'
import LayoutWrapper from 'components/LayoutWrapper'
import { getDogsList } from 'lib/dogs'
import { Typo, Link } from '@ui'

type Props = {
  breeds: string[]
}

const AboutPage = ({ breeds }: Props) => (
  <LayoutWrapper>
    <Typo variant="headline">
      Hello, it&apos;s static site generated from response provided by dog.ceo/api/
    </Typo>
    <img src="/images/plane.png" alt="" width="100" height="100" />
    <NextLink href="/contact" passHref>
      <Link>Contact Page</Link>
    </NextLink>
    <ul>
      {breeds.map((breed) => (
        <li key={breed}>
          <NextLink href="/dogs/[breed]" as={`/dogs/${breed}`} passHref>
            <Link>{breed}</Link>
          </NextLink>
        </li>
      ))}
    </ul>
  </LayoutWrapper>
)

export const getStaticProps = async () => {
  const breeds = await getDogsList()

  return {
    props: {
      breeds,
    },
  }
}

export default AboutPage
