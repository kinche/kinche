// Packages
import React, { Component } from 'react'
import { NextPageContext } from 'next'
import { Choose } from 'react-extras'

// Layouts
import Page from '../../layouts/page'

// UI
import { colors, spacing } from '../../ui/theme'

// Utils
import { saveCookie, getCookie } from '../../utils/cookies'

class SuccessAuth extends Component<{ redirectURL?: string }> {
  static getInitialProps(ctx: NextPageContext) {
    const { res, query } = ctx
    const { token } = query
    const redirectURL = getCookie(process.env.KINCHE_COOKIES_REDIRECT || '', ctx)

    if (query && token && redirectURL) {
      saveCookie(process.env.KINCHE_COOKIES_TOKEN || '', token, ctx)

      if (res) {
        res.writeHead(302, { Location: redirectURL })
        res.end()
      }

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
            <Choose>
              <Choose.When condition={Boolean(redirectURL)}>
                <h1>You successfully logged in.</h1>
                <h2>Redirecting you to your application.</h2>
              </Choose.When>

              <Choose.Otherwise>
                <h1>You were not able to log in.</h1>
                <h2>Please, try to again.</h2>
              </Choose.Otherwise>
            </Choose>
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
