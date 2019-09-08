// Utils
import { hexToRGB } from '../../utils/hex-to-rgb'

export function shadow(color: string) {
  const rgb = hexToRGB(color)

  return {
    default: `0 4px 8px rgba(${rgb}, 0.12), 0 2px 4px rgba(${rgb}, 0.08)`
  }
}
