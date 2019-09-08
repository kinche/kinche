// Packages
import hexRgb from 'hex-rgb'

export function hexToRGB(color: string) {
  const { red, green, blue } = hexRgb(color)
  return `${red}, ${green}, ${blue}`
}
