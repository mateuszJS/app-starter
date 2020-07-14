import Nav from '../components/Nav'

export const config = { amp: true }

const IndexPage = () => (
  <>
    <Nav />
    <h1>Accelerated Mobile Page</h1>
    <amp-timeago
      width="0"
      height="15"
      datetime={new Date('2020-07-13T10:47:05.541Z').toJSON()}
      layout="responsive"
    >
      .
    </amp-timeago>
  </>
)

export default IndexPage
