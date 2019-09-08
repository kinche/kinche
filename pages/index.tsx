// Packages
import React, { PureComponent } from 'react'

// Layouts
import Page from '../layouts/page'

// UI
import { Logo } from '../ui/logo'
import { Row } from '../ui/row'

// Utils
import { SIZE_SMALL } from '../utils/constants'

class Home extends PureComponent {
  render() {
    return (
      <Page>
        <Row size={SIZE_SMALL}>
          <div className="content">
            <Logo size="50px" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
          </div>
        </Row>

        <style jsx={true}>{`
          .content {
            display: flex;
            align-items: center;
            height: 100vh;
            text-align: center;
            width: 100%;
          }
        `}</style>
      </Page>
    )
  }
}

export default Home
