import { GetServerSideProps } from 'next'
import { withTranslation } from '@i18n'
import { WithTranslation } from 'next-i18next'
import LayoutWrapper from '../components/LayoutWrapper'

const ContactPage = ({ t, ...props }: { [key: string]: string } & WithTranslation) => {
  return (
    <LayoutWrapper>
      <p className="root">{t('title')}</p>
      <style jsx>{`
        .root {
          background: tomato;
        }
      `}</style>
      <textarea
        value={JSON.stringify(props.data, null, 4)}
        style={{ width: '100%', height: 500 }}
      />
    </LayoutWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  /*
    params: If this page uses a dynamic route, params contains the route parameters. If the page name is [id].js , then params will look like { id: ... }. To learn more, take a look at the Dynamic Routing documentation.
    req: The HTTP IncomingMessage object.
    res: The HTTP response object.
    query: The query string.
    preview: preview is true if the page is in the preview mode and false otherwise. See the Preview Mode documentation.
    previewData: The preview data set by setPreviewData. See the Preview Mode documentation.
  */
  return {
    props: {
      data: context.req.headers,
    },
  }
}

export default withTranslation('contact')(ContactPage)
