// import Link from 'next/link'
// import Nav from 'components/Nav'
// import { getDogzList } from 'lib/dogz'

// type Props = {
//   breeds: string[]
// }

// const AboutPage = ({ breeds }: Props) => (
//   <>
//     <Nav />
//     <p className="root">Hello, I&apos;m the about page</p>
//     <img src="/images/plane.png" alt="" width="100" height="100" />
//     <Link href="/contact">Contact Page</Link>
//     <ul>
//       {breeds.map((breed) => (
//         <li key={breed}>
//           <Link href="/dogz/[breed]" as={`/dogz/${breed}`}>
//             {breed}
//           </Link>
//         </li>
//       ))}
//     </ul>
//     <style jsx>{`
//       .root {
//         background: green;
//       }
//     `}</style>
//   </>
// )

// export const getStaticProps = async () => {
//   const breeds = await getDogzList()

//   return {
//     props: {
//       breeds,
//     },
//   }
// }

// export default AboutPage

import { useRouter } from 'next/router'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getDogzList } from 'lib/dogz'

type Props = {
  imgSrc: string
}

const Breed = ({ imgSrc }: Props) => {
  const router = useRouter()
  // can also use Router directly: import Router from 'next/router'

  // router.push('/?counter=10', undefined, { shallow: true })
  // shallow = true -> without calling getServerSideProps, getStaticProps
  // page is not replaced, only url changes
  // works only in one page, with using query params!
  // If url before query params changed, then although will update the page

  if (router.isFallback) {
    // if page was not generated yet, then it will be visible until complete getStaticProps()
    // only availaba if fallback: true
    return <div>Loading...</div>
  }

  return (
    <>
      {/* url params and query params are available in router.query, url params will override query params! */}
      <Link href="/dogz">Breed {router.query.breed}</Link>
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

export default Breed
