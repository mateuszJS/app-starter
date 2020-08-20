import { useRouter } from 'next/router'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getDogzList } from 'lib/dogz'
import { withTranslation } from '@i18n'
import { WithTranslation } from 'next-i18next'

type Props = {
  imgSrc: string
} & WithTranslation

const Breed = ({ imgSrc }: Props) => {
  const router = useRouter()
  /*
  pathname: String - Current route. That is the path of the page in /pages
  query: Object - The query string parsed to an object.
    It will be an empty object during prerendering if the page doesn't have
    data fetching requirements. Defaults to {}
  asPath: String - Actual path (including the query) shown in the browser
  */

  /*
  Can also use Router directly: import Router from 'next/router'
  Handles client-side transitions, this method is useful for cases where next/link is not enough.

  url - The URL to navigate to. This is usually the name of a page
  as - Optional decorator for the URL that will be shown in the browser. Defaults to url
  options - Optional object with the following configuration options:
    shallow: Update the path of the current page without rerunning
      getStaticProps, getServerSideProps or getInitialProps. Defaults to false

  <span onClick={() => Router.push('/about')}>Click me</span>

  Router.push({
    pathname: '/about',
    query: { name: 'Vercel' },
  })
  <Link href={{ pathname: '/about', query: { name: 'test' } }}>

  there is replace method in <link> and also in router!

  Router.prefetch(url, as) -> only useful when you navigate by Router.push/replace, without <link> component
  - url - The path to a page inside the pages directory
  - as - Optional decorator for url, used to prefetch dynamic routes. Defaults to url

  useEffect(() => {
    // Prefetch the dashboard page as the user will go there after the login
    Router.prefetch('/dashboard')
  }, [])

  also there is .back() and reload() and .beforePopState(callback)
  and else there are some events related with router

  almost the same things can do Router and <Link> component
  */

  // router.push('/?counter=10', undefined, { shallow: true })
  // shallow = true -> without calling getServerSideProps, getStaticProps
  // page is not replaced, only url changes
  // works only in one page, with using query params!
  // If url before query params changed, then although will update the page

  if (router.isFallback) {
    // if page was not generated yet, then it will be visible until complete getStaticProps()
    // only available if fallback: true
    return <div>Loading...</div>
  }

  return (
    <>
      {/* url params and query params are available in router.query, url params will override query params! */}
      <Link href="/dogz">
        <a>Come back to the Dogz</a>
      </Link>
      {/* <Link href="/dogz">Breed {Router.query.breed}</Link> */}
      <style jsx>{`
        .image {
          display: block;
          width: 50%;
          height: auto;
        }
      `}</style>
      <img className="image" src={imgSrc} alt="dog" />
    </>
  )
}

export const getStaticPaths = async () => {
  const breeds = await getDogzList()
  const paths = breeds.map((breed) => ({
    params: {
      breed,
    },
  }))

  return {
    paths,
    fallback: true,
    // true -> return 404 page
    // false -> generate a site, with new params (wasn't provided from this function)
  }
}

export const getStaticProps: GetStaticProps<
  { [key: string]: unknown },
  { breed: string }
> = async ({ params }) => {
  if (params) {
    const res = await fetch(`https://dog.ceo/api/breed/${params.breed}/images/random`).then((res) =>
      res.json(),
    )
    return {
      props: {
        imgSrc: res.message,
      },
    }
  }
  return {
    props: {
      imgSrc: '',
    },
  }
}

export default withTranslation('common')(Breed)
