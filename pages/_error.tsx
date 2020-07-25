import { NextPageContext } from 'next'
import { withTranslation } from '@i18n'
// use for errors other then 404

type Props = {
  statusCode: number
}

const Error = ({ statusCode }: Props) => (
  <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
)

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return {
    statusCode,
  }
}

export default withTranslation('common')(Error)
