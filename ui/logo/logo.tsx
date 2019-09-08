// Packages
import React, { PureComponent } from 'react'

// Interface
import { LogoProps } from './logo.interface'

export class Logo extends PureComponent<LogoProps> {
  static defaultProps = {
    size: '75px'
  }

  render() {
    const { size, style } = this.props

    return (
      <svg width={size} viewBox="0 0 200 200" fill="none" style={style}>
        <rect width="200" height="200" rx="30" fill="white" />
        <rect x="87" y="50" width="25" height="100" rx="5" fill="black" />
      </svg>
    )
  }
}
