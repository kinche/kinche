// Packages
import React, { PureComponent } from 'react'

// Layouts
import Page from '../layouts/page'

class Home extends PureComponent {
  render() {
    return (
      <Page>
        <main>
          <h1>
            <span>kin</span>che.
          </h1>

          <style jsx={true}>{`
            main {
              height: 100vh;
              display: flex;
              align-items: center;
            }

            h1 {
              font-size: 28px;
              text-align: center;
              margin-left: auto;
              margin-right: auto;
              font-weight: 300;
            }

            span {
              display: inline-block;
              background-color: #8a33ff;
              font-weight: 300;
            }
          `}</style>
        </main>
      </Page>
    )
  }
}

export default Home
