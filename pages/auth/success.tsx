// Packages
import React, { Component } from 'react'
import { NextPageContext } from 'next'

// Layouts
import Page from '../../layouts/page'

// UI
import { colors, spacing } from '../../ui/theme'

// Utils
import { saveCookie } from '../../utils/cookies'

class SuccessAuth extends Component {
  static getInitialProps(ctx: NextPageContext) {
    const { res, query } = ctx
    const { accessToken, redirectUrl } = query

    if (query && accessToken && redirectUrl) {
      const name = process.env.COOKIES_NAME || ''
      saveCookie(ctx, name, accessToken)

      if (res) {
        res.writeHead(302, { Location: redirectUrl })
        res.end()
      }
    }

    return {}
  }

  render() {
    return (
      <Page>
        <main>
          <section>
            <h1>You successfully logged in.</h1>
            <h2>Redirecting you to your application.</h2>
          </section>
        </main>

        <style jsx={true}>{`
          main {
            height: 100vh;
            display: flex;
            align-items: center;
            text-align: center;
          }

          section {
            width: 100%;
          }

          h1 {
            color: ${colors.title};
            margin-bottom: ${spacing.default};
          }

          h2 {
            color: ${colors.text};
            font-size: 16px;
          }
        `}</style>
      </Page>
    )
  }
}

export default SuccessAuth
