import { GetServerSideProps } from 'next'

// use for errors other then 404

type Props = {
  statusCode: number
}

function Error({ statusCode }: Props) {
  return (
    <p>
      {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
    </p>
  )
}

const getInitialProps: GetInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

Error.getInitialProps = getInitialProps

export default Error
