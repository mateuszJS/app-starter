import Document, { Main, NextScript, DocumentContext } from 'next/document'
import { renderToNodeList } from 'react-fela'

import getFelaRenderer from '../components/FelaProvider/getFelaRenderer'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const renderer = getFelaRenderer()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => <App {...props} renderer={renderer} />,
      })

    const initialProps = await Document.getInitialProps(ctx)
    const styles = renderToNodeList(renderer)
    return {
      ...initialProps,
      styles: [...(initialProps.styles as React.ReactElement[]), ...styles],
    }
  }

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/html-has-lang
      <html>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
