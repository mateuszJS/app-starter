import { GetServerSideProps } from 'next'

import Nav from '../components/Nav'

const ContactPage = (props: { [key: string]: string }) => (
  <>
    <Nav />
    <p className="root">Contact</p>
    <style jsx>{`
      .root {
        background: tomato;
      }
    `}</style>
    <textarea value={JSON.stringify(props, null, 4)} style={{ width: '100%', height: 500 }} />
  </>
)

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
    props: context.req.headers,
  }
}

export default ContactPage
