// Packages
import React, { PureComponent, Fragment } from 'react'
import Head from 'next/head'

class Page extends PureComponent {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <Head>
          <title>kinche.</title>

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>

        {children}

        <style jsx={true} global={true}>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Lato', 'SF UI Display', 'Helvetica Neue', 'Helvetica', 'Arial',
              'sans-serif';
            font-display: Swap;
            font-style: Normal;
            font-weight: Normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
            font-feature-settings: 'liga';
          }

          body {
            background-color: #0a0b0f;
            color: #fff;
          }

          ::selection {
            background-color: #8a33ff;
            color: #fff;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default Page
