import { getDogzList } from 'lib/dogz'
import Link from 'next/link'
import { GetStaticProps } from 'next'

type Props = {
  imgSrc: string
}

const Dog = ({ imgSrc }: Props) => (
  <>
    <Link href="/dogz">All Dogz</Link>
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

export const getStaticPaths = async () => {
  const breeds = await getDogzList()
  const paths = breeds.map((breed) => ({
    params: {
      breed,
    },
  }))

  return {
    paths,
    fallback: false,
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

export default Dog
