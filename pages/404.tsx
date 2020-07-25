import { withTranslation } from '@i18n'

const Page404 = () => <h1>404</h1>
// this page will be statically generated at build time

export default withTranslation('contact')(Page404)
