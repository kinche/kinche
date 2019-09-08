// Packages
import React, { PureComponent } from 'react'
import classnames from 'classnames'

// UI
import { spacing } from '../theme'

// Interface
import { RowProps } from './row.interface'

export class Row extends PureComponent<RowProps> {
  render() {
    const { children, size, style } = this.props

    const classNames = classnames({ small: size === 'small' })

    return (
      <div className={classNames} style={style}>
        {children}

        <style jsx={true}>{`
          div {
            width: 100%;
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
            padding-left: ${spacing.xLarge};
            padding-right: ${spacing.xLarge};
          }

          .small {
            max-width: 400px;
          }
        `}</style>
      </div>
    )
  }
}
