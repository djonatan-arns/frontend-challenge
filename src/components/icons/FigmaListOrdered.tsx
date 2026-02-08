import listOrderedSvg from '@/assets/ListOrdered.svg'
import type { IconProps } from './types'

export function FigmaListOrdered({ size = 16 }: IconProps) {
  return <img src={listOrderedSvg} alt="" width={size} height={size} />
}
