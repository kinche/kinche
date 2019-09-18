// Packages
import React, { Component } from 'react'
import { NextPageContext } from 'next'

// Layouts
import Page from '../../layouts/page'

// UI
import { colors, spacing } from '../../ui/theme'

// Utils
import { getCookie } from '../../utils/cookies'

class ErrorAuth extends Component<{ redirectURL?: string }> {
  static getInitialProps(ctx: NextPageContext) {
    const redirectURL = getCookie(process.env.KINCHE_COOKIES_REDIRECT || '', ctx)

    if (redirectURL) {
      return { redirectURL }
    }

    return {}
  }

  render() {
    const { redirectURL } = this.props

    return (
      <Page>
        <main>
          <section>
            <h1>Looks like you're not authorized.</h1>
            <h2>
              Please, <a href={redirectURL}>join our beta list</a> and we'll send an invite as soon
              as possible.
            </h2>
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

export default ErrorAuth
