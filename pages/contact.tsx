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
  return {
    props: context.req.headers,
  }
}

export default ContactPage
