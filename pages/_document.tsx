import React from 'react'
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

export default class EnhancedDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const materialUiSheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => materialUiSheets.collect(<App {...props} />),
      })
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: [
        <React.Fragment key="styles">
          {initialProps.styles}
          {materialUiSheets.getStyleElement()}
        </React.Fragment>,
      ],
    }
  }
}
