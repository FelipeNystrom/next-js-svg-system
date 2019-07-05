import React from 'react'
import Document, { Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ assets, data, renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return {
      assets,
      data,
      ...page,
      styleTags,
    }
  }

  render () {
    const { assets, data, styleTags } = this.props
    return (
      <html>
        <head>
          {styleTags}
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}