import toggleLeftSvg from '@/assets/ToggleLeft.svg'
import type { IconProps } from './types'

export function FigmaToggleLeft({ size = 16 }: IconProps) {
  return <img src={toggleLeftSvg} alt="" width={size} height={size} />
}
